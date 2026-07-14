/**
 * Bilingual locale system for Log Probe.
 * Stores preference in localStorage under "lp_lang".
 */

export type Lang = "zh" | "en";

export type LocaleKey =
  | "app.name" | "app.analyze" | "app.clear" | "app.file" | "app.paste" | "app.loading" | "app.noData"
  | "sev.high" | "sev.medium" | "sev.low" | "sev.critical" | "sev.info"
  | "cat.memory" | "cat.mod" | "cat.net" | "cat.render" | "cat.jvm" | "cat.crash" | "cat.general" | "cat.other"
  | "widget.title" | "widget.found" | "widget.none" | "widget.open" | "widget.summary"
  | "settings.title" | "settings.inputLabel" | "settings.inputPlaceholder" | "settings.selectFile"
  | "settings.result" | "settings.issueCount" | "settings.totalLines" | "settings.noIssues"
  | "settings.noAnalysis" | "settings.analysisDone" | "settings.analysisFail" | "settings.emptyLog"
  | "settings.fileLoaded" | "settings.detail" | "settings.suggestion" | "settings.suggestions"
  | "settings.line" | "settings.expandAll" | "settings.collapseAll"
  | "lang.label" | "lang.zh" | "lang.en" | "lang.switch"
  | "crash.analyze" | "crash.title" | "crash.quickSummary" | "crash.fullAnalysis" | "crash.close"
  | "exit.jvmAbnormal" | "exit.normal" | "exit.unknown" | "exit.code"
  | "fix.memory" | "fix.modConflict" | "fix.driverUpdate" | "fix.networkCheck" | "fix.javaUpdate"
  | "analysis.patternCount" | "analysis.topIssues" | "analysis.relatedMods"
  | "analysis.possibleCauses" | "analysis.errorContext" | "analysis.stackTrace"
  | "version.title" | "version.author" | "version.pluginVersion" | "version.updated";

type LocaleMap = Record<LocaleKey, string>;

function fmt(s: string, args: (string | number)[]): string {
  let r = s;
  args.forEach((a, i) => { r = r.split("{" + i + "}").join(String(a)); });
  return r;
}

const zh: LocaleMap = {
  "app.name": "\u65E5\u5FD7\u63A2\u9488",
  "app.analyze": "\u5206\u6790\u65E5\u5FD7", "app.clear": "\u6E05\u9664", "app.file": "\u9009\u62E9\u65E5\u5FD7\u6587\u4EF6",
  "app.paste": "\u7C98\u8D34\u65E5\u5FD7", "app.loading": "\u52A0\u8F7D\u4E2D...", "app.noData": "\u6682\u65E0\u6570\u636E",
  "sev.high": "\u4E25\u91CD", "sev.medium": "\u8B66\u544A", "sev.low": "\u63D0\u793A",
  "sev.critical": "\u81F4\u547D", "sev.info": "\u4FE1\u606F",
  "cat.memory": "\u5185\u5B58", "cat.mod": "\u6A21\u7EC4", "cat.net": "\u7F51\u7EDC",
  "cat.render": "\u6E32\u67D3", "cat.jvm": "JVM", "cat.crash": "\u5D29\u6E83", "cat.general": "\u901A\u7528", "cat.other": "\u5176\u4ED6",
  "widget.title": "\u65E5\u5FD7\u5206\u6790", "widget.found": "\u53D1\u73B0", "widget.none": "\u672A\u5206\u6790",
  "widget.open": "\u6253\u5F00\u65E5\u5FD7\u5206\u6790", "widget.summary": "\u4E25\u91CD {0} \u00B7 \u8B66\u544A {1} \u00B7 \u63D0\u793A {2}\uFF08\u5171 {3} \u884C\uFF09",
  "settings.title": "\u65E5\u5FD7\u5206\u6790", "settings.inputLabel": "\u8F93\u5165\u65E5\u5FD7",
  "settings.inputPlaceholder": "\u5C06 latest.log\u3001crash-report \u7B49\u5185\u5BB9\u7C98\u8D34\u5230\u8FD9\u91CC...",
  "settings.selectFile": "\u9009\u62E9\u65E5\u5FD7\u6587\u4EF6",
  "settings.result": "\u5206\u6790\u7ED3\u679C", "settings.issueCount": "\u5171\u53D1\u73B0 {0} \u9879\u95EE\u9898",
  "settings.totalLines": "\u5171 {0} \u884C", "settings.noIssues": "\u672A\u8BC6\u522B\u51FA\u5E38\u89C1\u9519\u8BEF\uFF0C\u65E5\u5FD7\u770B\u8D77\u6765\u6B63\u5E38",
  "settings.noAnalysis": "\u5728\u4E0A\u65B9\u7C98\u8D34\u65E5\u5FD7\u6216\u9009\u62E9\u6587\u4EF6\uFF0C\u7136\u540E\u70B9\u51FB\u5206\u6790",
  "settings.analysisDone": "\u5206\u6790\u5B8C\u6210", "settings.analysisFail": "\u5206\u6790\u5931\u8D25",
  "settings.emptyLog": "\u6CA1\u6709\u65E5\u5FD7\u5185\u5BB9", "settings.fileLoaded": "\u5DF2\u52A0\u8F7D",
  "settings.detail": "\u8BE6\u60C5", "settings.suggestion": "\u5EFA\u8BAE", "settings.suggestions": "\u89E3\u51B3\u65B9\u6848",
  "settings.line": "#{0}", "settings.expandAll": "\u5168\u90E8\u5C55\u5F00", "settings.collapseAll": "\u5168\u90E8\u6536\u8D77",
  "lang.label": "\u8BED\u8A00", "lang.zh": "\u4E2D\u6587", "lang.en": "English", "lang.switch": "\u5207\u6362\u8BED\u8A00",
  "crash.analyze": "\u76F4\u63A5\u5206\u6790", "crash.title": "\u5D29\u6E83\u5206\u6790",
  "crash.quickSummary": "\u5FEB\u901F\u6458\u8981", "crash.fullAnalysis": "\u5B8C\u6574\u5206\u6790", "crash.close": "\u5173\u95ED",
  "exit.jvmAbnormal": "JVM \u5F02\u5E38\u9000\u51FA", "exit.normal": "\u6B63\u5E38\u9000\u51FA", "exit.unknown": "\u672A\u77E5\u9519\u8BEF\u9000\u51FA",
  "exit.code": "\u6E38\u620F\u9000\u51FA\uFF08\u4EE3\u7801 {0}\uFF09",
  "fix.memory": "\u5185\u5B58\u4F18\u5316", "fix.modConflict": "\u6A21\u7EC4\u51B2\u7A81\u6392\u67E5",
  "fix.driverUpdate": "\u9A71\u52A8\u66F4\u65B0", "fix.networkCheck": "\u7F51\u7EDC\u68C0\u67E5", "fix.javaUpdate": "Java \u66F4\u65B0",
  "analysis.patternCount": "\u5339\u914D\u5230 {0} \u4E2A\u9519\u8BEF\u6A21\u5F0F", "analysis.topIssues": "\u4E3B\u8981\u95EE\u9898",
  "analysis.relatedMods": "\u76F8\u5173\u6A21\u7EC4", "analysis.possibleCauses": "\u53EF\u80FD\u539F\u56E0",
  "analysis.errorContext": "\u9519\u8BEF\u4E0A\u4E0B\u6587", "analysis.stackTrace": "\u5806\u6808\u8DDF\u8E2A",
  "version.title": "\u5173\u4E8E", "version.author": "\u4F5C\u8005", "version.pluginVersion": "\u63D2\u4EF6\u7248\u672C",
  "version.updated": "\u66F4\u65B0\u65E5\u671F",
};

const en: LocaleMap = {
  "app.name": "Log Probe",
  "app.analyze": "Analyze Log", "app.clear": "Clear", "app.file": "Select Log File",
  "app.paste": "Paste Log", "app.loading": "Loading...", "app.noData": "No data",
  "sev.high": "High", "sev.medium": "Medium", "sev.low": "Low",
  "sev.critical": "Critical", "sev.info": "Info",
  "cat.memory": "Memory", "cat.mod": "Mod", "cat.net": "Network",
  "cat.render": "Render", "cat.jvm": "JVM", "cat.crash": "Crash", "cat.general": "General", "cat.other": "Other",
  "widget.title": "Log Analysis", "widget.found": "Found", "widget.none": "Not analyzed",
  "widget.open": "Open Log Analyzer", "widget.summary": "{0} High \u00B7 {1} Med \u00B7 {2} Low ({3} lines)",
  "settings.title": "Log Analyzer", "settings.inputLabel": "Input Log",
  "settings.inputPlaceholder": "Paste latest.log, crash-report contents here...",
  "settings.selectFile": "Select Log File",
  "settings.result": "Results", "settings.issueCount": "Found {0} issue(s)",
  "settings.totalLines": "{0} lines total", "settings.noIssues": "No common errors identified, log looks clean",
  "settings.noAnalysis": "Paste log above or select a file, then click Analyze",
  "settings.analysisDone": "Analysis complete", "settings.analysisFail": "Analysis failed",
  "settings.emptyLog": "No log content", "settings.fileLoaded": "Loaded",
  "settings.detail": "Details", "settings.suggestion": "Suggestion", "settings.suggestions": "Fix Suggestions",
  "settings.line": "#{0}", "settings.expandAll": "Expand All", "settings.collapseAll": "Collapse All",
  "lang.label": "Language", "lang.zh": "\u4E2D\u6587", "lang.en": "English", "lang.switch": "Switch Language",
  "crash.analyze": "Analyze Now", "crash.title": "Crash Analysis",
  "crash.quickSummary": "Quick Summary", "crash.fullAnalysis": "Full Analysis", "crash.close": "Close",
  "exit.jvmAbnormal": "JVM Abnormal Exit", "exit.normal": "Normal Exit", "exit.unknown": "Unknown Error Exit",
  "exit.code": "Game Exit (Code {0})",
  "fix.memory": "Memory Tuning", "fix.modConflict": "Mod Conflict Check",
  "fix.driverUpdate": "Driver Update", "fix.networkCheck": "Network Check", "fix.javaUpdate": "Java Update",
  "analysis.patternCount": "Matched {0} error pattern(s)", "analysis.topIssues": "Top Issues",
  "analysis.relatedMods": "Related Mods", "analysis.possibleCauses": "Possible Causes",
  "analysis.errorContext": "Error Context", "analysis.stackTrace": "Stack Trace",
  "version.title": "About", "version.author": "Author", "version.pluginVersion": "Plugin Version",
  "version.updated": "Updated",
};

const LANG_KEY = "lp_lang";
const maps: Record<Lang, LocaleMap> = { zh, en };

export function getSavedLang(): Lang {
  try { const v = localStorage.getItem(LANG_KEY); if (v === "zh" || v === "en") return v; } catch (_) {}
  return "zh";
}

export function setSavedLang(lang: Lang): void {
  try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
}

export function t(key: LocaleKey, ...args: (string | number)[]): string {
  const lang = getSavedLang();
  let text = maps[lang]?.[key];
  if (!text) text = maps.en[key] ?? key;
  return fmt(text, args);
}

export function createT(lang: Lang) {
  return (key: LocaleKey, ...args: (string | number)[]): string => {
    let text = maps[lang]?.[key];
    if (!text) text = maps.en[key] ?? key;
    return fmt(text, args);
  };
}

export function langOptions() {
  return [{ value: "zh" as const, label: "\u4E2D\u6587" }, { value: "en" as const, label: "English" }];
}
