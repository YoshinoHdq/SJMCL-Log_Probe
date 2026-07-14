/**
 * Log analysis engine.
 * Scans log text against the error pattern database and produces structured results.
 */

import patterns, { ErrorPattern, PatternCategory, Severity } from "./patterns";

export interface AnalysisIssue {
  category: PatternCategory;
  severity: Severity;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  fixZh: string;
  fixEn: string;
  line: number;
  text: string;
}

export interface AnalysisResult {
  totalLines: number;
  issues: AnalysisIssue[];
  criticalCount: number;
  highCount: number;
  medCount: number;
  lowCount: number;
  summaryZh: string;
  summaryEn: string;
}

const EXIT_CODES: Record<string, { titleZh: string; titleEn: string; descZh: string; descEn: string; fixZh: string; fixEn: string }> = {
  "-1": {
    titleZh: "JVM \u5F02\u5E38\u9000\u51FA", titleEn: "JVM Abnormal Exit",
    descZh: "Java \u865A\u62DF\u673A\u81EA\u8EAB\u53D1\u751F\u9519\u8BEF", descEn: "Java Virtual Machine itself encountered an error",
    fixZh: "\xE6\x9F\xA5\xE7\x9C\x8B\u65E5\u5FD7\u4E2D\u4E0A\u65B9\u7684 # Internal Error \u6216\u81F4\u547D\u9519\u8BEF\u4FE1\u606F\u3002\n\u5C1D\u8BD5\u5347\u7EA7 Java \u7248\u672C\u3002",
    fixEn: "Check for # Internal Error or fatal error messages above.\nTry upgrading Java version.",
  },
  "0": {
    titleZh: "\u6B63\u5E38\u9000\u51FA", titleEn: "Normal Exit",
    descZh: "\u6E38\u620F\u6B63\u5E38\u5173\u95ED", descEn: "Game closed normally",
    fixZh: "\u65E0\u95EE\u9898", fixEn: "No issues detected.",
  },
  "1": {
    titleZh: "\u672A\u77E5\u9519\u8BEF\u9000\u51FA", titleEn: "Unknown Error Exit",
    descZh: "\u6E38\u620F\u56E0\u9519\u8BEF\u9000\u51FA", descEn: "Game exited due to an error",
    fixZh: "\xE6\x9F\xA5\xE7\x9C\x8B\u65E5\u5FD7\u4E2D\u7684 Exception \u548C Error \u4FE1\u606F\u5B9A\u4F4D\u5177\u4F53\u539F\u56E0\u3002",
    fixEn: "Check the Exception and Error messages in the log to find the specific cause.",
  },
};

export function analyzeLog(text: string): AnalysisResult | null {
  if (!text || text.trim().length === 0) return null;

  const lines = text.split(/\n/);
  const issues: AnalysisIssue[] = [];
  const matchedLines = new Set<number>();

  for (const p of patterns) {
    let prevLastIndex = 0;
    for (let j = 0; j < lines.length; j++) {
      p.re.lastIndex = 0;
      const m = p.re.exec(lines[j]);
      if (m) {
        const lineNum = j + 1;
        if (matchedLines.has(lineNum)) continue;
        matchedLines.add(lineNum);

        let lineText = lines[j].trim();
        if (lineText.length > 300) lineText = lineText.substring(0, 300) + "...";

        // Handle exit codes specially
        if (/exit code/i.test(p.re.source) || /Process exited/i.test(p.re.source)) {
          const codeMatch = /(-?\d+)/.exec(lines[j]);
          if (codeMatch) {
            const code = codeMatch[1];
            const info = EXIT_CODES[code];
            if (info) {
              if (code === "0") continue; // skip normal exit
              issues.push({
                category: "jvm", severity: "high",
                titleZh: info.titleZh, titleEn: info.titleEn,
                descZh: info.descZh, descEn: info.descEn,
                fixZh: info.fixZh, fixEn: info.fixEn,
                line: lineNum, text: lineText,
              });
              continue;
            } else {
              issues.push({
                category: "jvm", severity: "high",
                titleZh: "\u6E38\u620F\u9000\u51FA\uFF08\u4EE3\u7801 " + code + "\uFF09",
                titleEn: "Game Exit (Code " + code + ")",
                descZh: "\u6E38\u620F\u8FDB\u7A0B\u9000\u51FA\u7801: " + code,
                descEn: "Game process exit code: " + code,
                fixZh: "\xE9\x80\x80\xE5\x87\xBA\u4EE3\u7801 " + code + "\uFF0C\u8BF7\u6839\u636E\u65E5\u5FD7\u4E2D\u7684\u5176\u4ED6\u9519\u8BEF\u4FE1\u606F\u5B9A\u4F4D\u95EE\u9898\u3002",
                fixEn: "Exit code " + code + ". Check other error messages in the log to identify the issue.",
                line: lineNum, text: lineText,
              });
              continue;
            }
          }
        }

        issues.push({
          category: p.category, severity: p.severity,
          titleZh: p.titleZh, titleEn: p.titleEn,
          descZh: p.descZh, descEn: p.descEn,
          fixZh: p.fixZh, fixEn: p.fixEn,
          line: lineNum, text: lineText,
        });
        break; // only first match per line
      }
    }
  }

  // Sort: critical first, then high, then medium, then low; then by line
  const order: Record<string, number> = { critical: 0, high: 1, medium: 2, low: 3 };
  issues.sort((a, b) => {
    const sa = order[a.severity] ?? 9;
    const sb = order[b.severity] ?? 9;
    if (sa !== sb) return sa - sb;
    return a.line - b.line;
  });

  const criticalCount = issues.filter(r => r.severity === "critical").length;
  const highCount = issues.filter(r => r.severity === "high").length;
  const medCount = issues.filter(r => r.severity === "medium").length;
  const lowCount = issues.filter(r => r.severity === "low").length;

  const total = issues.length;
  const summaryZh = "\u5171 " + total + " \u9879\u95EE\u9898\uFF08\u81F4\u547D " + criticalCount + " \u00B7 \u4E25\u91CD " + highCount + " \u00B7 \u8B66\u544A " + medCount + " \u00B7 \u63D0\u793A " + lowCount + "\uFF09";
  const summaryEn = "Found " + total + " issue(s) (Critical " + criticalCount + " \u00B7 High " + highCount + " \u00B7 Medium " + medCount + " \u00B7 Low " + lowCount + ")";

  return {
    totalLines: lines.length,
    issues,
    criticalCount, highCount, medCount, lowCount,
    summaryZh, summaryEn,
  };
}
