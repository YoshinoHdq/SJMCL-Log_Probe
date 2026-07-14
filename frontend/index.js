(function() {
// src/engine/locale.ts
function fmt(s, args) {
  let r = s;
  args.forEach((a, i) => {
    r = r.split("{" + i + "}").join(String(a));
  });
  return r;
}
var zh = {
  "app.name": "\u65E5\u5FD7\u63A2\u9488",
  "app.analyze": "\u5206\u6790\u65E5\u5FD7",
  "app.clear": "\u6E05\u9664",
  "app.file": "\u9009\u62E9\u65E5\u5FD7\u6587\u4EF6",
  "app.paste": "\u7C98\u8D34\u65E5\u5FD7",
  "app.loading": "\u52A0\u8F7D\u4E2D...",
  "app.noData": "\u6682\u65E0\u6570\u636E",
  "sev.high": "\u4E25\u91CD",
  "sev.medium": "\u8B66\u544A",
  "sev.low": "\u63D0\u793A",
  "sev.critical": "\u81F4\u547D",
  "sev.info": "\u4FE1\u606F",
  "cat.memory": "\u5185\u5B58",
  "cat.mod": "\u6A21\u7EC4",
  "cat.net": "\u7F51\u7EDC",
  "cat.render": "\u6E32\u67D3",
  "cat.jvm": "JVM",
  "cat.crash": "\u5D29\u6E83",
  "cat.general": "\u901A\u7528",
  "cat.other": "\u5176\u4ED6",
  "widget.title": "\u65E5\u5FD7\u5206\u6790",
  "widget.found": "\u53D1\u73B0",
  "widget.none": "\u672A\u5206\u6790",
  "widget.open": "\u6253\u5F00\u65E5\u5FD7\u5206\u6790",
  "widget.summary": "\u4E25\u91CD {0} \xB7 \u8B66\u544A {1} \xB7 \u63D0\u793A {2}\uFF08\u5171 {3} \u884C\uFF09",
  "settings.title": "\u65E5\u5FD7\u5206\u6790",
  "settings.inputLabel": "\u8F93\u5165\u65E5\u5FD7",
  "settings.inputPlaceholder": "\u5C06 latest.log\u3001crash-report \u7B49\u5185\u5BB9\u7C98\u8D34\u5230\u8FD9\u91CC...",
  "settings.selectFile": "\u9009\u62E9\u65E5\u5FD7\u6587\u4EF6",
  "settings.result": "\u5206\u6790\u7ED3\u679C",
  "settings.issueCount": "\u5171\u53D1\u73B0 {0} \u9879\u95EE\u9898",
  "settings.totalLines": "\u5171 {0} \u884C",
  "settings.noIssues": "\u672A\u8BC6\u522B\u51FA\u5E38\u89C1\u9519\u8BEF\uFF0C\u65E5\u5FD7\u770B\u8D77\u6765\u6B63\u5E38",
  "settings.noAnalysis": "\u5728\u4E0A\u65B9\u7C98\u8D34\u65E5\u5FD7\u6216\u9009\u62E9\u6587\u4EF6\uFF0C\u7136\u540E\u70B9\u51FB\u5206\u6790",
  "settings.analysisDone": "\u5206\u6790\u5B8C\u6210",
  "settings.analysisFail": "\u5206\u6790\u5931\u8D25",
  "settings.emptyLog": "\u6CA1\u6709\u65E5\u5FD7\u5185\u5BB9",
  "settings.fileLoaded": "\u5DF2\u52A0\u8F7D",
  "settings.detail": "\u8BE6\u60C5",
  "settings.suggestion": "\u5EFA\u8BAE",
  "settings.suggestions": "\u89E3\u51B3\u65B9\u6848",
  "settings.line": "#{0}",
  "settings.expandAll": "\u5168\u90E8\u5C55\u5F00",
  "settings.collapseAll": "\u5168\u90E8\u6536\u8D77",
  "lang.label": "\u8BED\u8A00",
  "lang.zh": "\u4E2D\u6587",
  "lang.en": "English",
  "lang.switch": "\u5207\u6362\u8BED\u8A00",
  "crash.analyze": "\u76F4\u63A5\u5206\u6790",
  "crash.title": "\u5D29\u6E83\u5206\u6790",
  "crash.quickSummary": "\u5FEB\u901F\u6458\u8981",
  "crash.fullAnalysis": "\u5B8C\u6574\u5206\u6790",
  "crash.close": "\u5173\u95ED",
  "exit.jvmAbnormal": "JVM \u5F02\u5E38\u9000\u51FA",
  "exit.normal": "\u6B63\u5E38\u9000\u51FA",
  "exit.unknown": "\u672A\u77E5\u9519\u8BEF\u9000\u51FA",
  "exit.code": "\u6E38\u620F\u9000\u51FA\uFF08\u4EE3\u7801 {0}\uFF09",
  "fix.memory": "\u5185\u5B58\u4F18\u5316",
  "fix.modConflict": "\u6A21\u7EC4\u51B2\u7A81\u6392\u67E5",
  "fix.driverUpdate": "\u9A71\u52A8\u66F4\u65B0",
  "fix.networkCheck": "\u7F51\u7EDC\u68C0\u67E5",
  "fix.javaUpdate": "Java \u66F4\u65B0",
  "analysis.patternCount": "\u5339\u914D\u5230 {0} \u4E2A\u9519\u8BEF\u6A21\u5F0F",
  "analysis.topIssues": "\u4E3B\u8981\u95EE\u9898",
  "analysis.relatedMods": "\u76F8\u5173\u6A21\u7EC4",
  "analysis.possibleCauses": "\u53EF\u80FD\u539F\u56E0",
  "analysis.errorContext": "\u9519\u8BEF\u4E0A\u4E0B\u6587",
  "analysis.stackTrace": "\u5806\u6808\u8DDF\u8E2A",
  "version.title": "\u5173\u4E8E",
  "version.author": "\u4F5C\u8005",
  "version.pluginVersion": "\u63D2\u4EF6\u7248\u672C",
  "version.updated": "\u66F4\u65B0\u65E5\u671F"
};
var en = {
  "app.name": "Log Probe",
  "app.analyze": "Analyze Log",
  "app.clear": "Clear",
  "app.file": "Select Log File",
  "app.paste": "Paste Log",
  "app.loading": "Loading...",
  "app.noData": "No data",
  "sev.high": "High",
  "sev.medium": "Medium",
  "sev.low": "Low",
  "sev.critical": "Critical",
  "sev.info": "Info",
  "cat.memory": "Memory",
  "cat.mod": "Mod",
  "cat.net": "Network",
  "cat.render": "Render",
  "cat.jvm": "JVM",
  "cat.crash": "Crash",
  "cat.general": "General",
  "cat.other": "Other",
  "widget.title": "Log Analysis",
  "widget.found": "Found",
  "widget.none": "Not analyzed",
  "widget.open": "Open Log Analyzer",
  "widget.summary": "{0} High \xB7 {1} Med \xB7 {2} Low ({3} lines)",
  "settings.title": "Log Analyzer",
  "settings.inputLabel": "Input Log",
  "settings.inputPlaceholder": "Paste latest.log, crash-report contents here...",
  "settings.selectFile": "Select Log File",
  "settings.result": "Results",
  "settings.issueCount": "Found {0} issue(s)",
  "settings.totalLines": "{0} lines total",
  "settings.noIssues": "No common errors identified, log looks clean",
  "settings.noAnalysis": "Paste log above or select a file, then click Analyze",
  "settings.analysisDone": "Analysis complete",
  "settings.analysisFail": "Analysis failed",
  "settings.emptyLog": "No log content",
  "settings.fileLoaded": "Loaded",
  "settings.detail": "Details",
  "settings.suggestion": "Suggestion",
  "settings.suggestions": "Fix Suggestions",
  "settings.line": "#{0}",
  "settings.expandAll": "Expand All",
  "settings.collapseAll": "Collapse All",
  "lang.label": "Language",
  "lang.zh": "\u4E2D\u6587",
  "lang.en": "English",
  "lang.switch": "Switch Language",
  "crash.analyze": "Analyze Now",
  "crash.title": "Crash Analysis",
  "crash.quickSummary": "Quick Summary",
  "crash.fullAnalysis": "Full Analysis",
  "crash.close": "Close",
  "exit.jvmAbnormal": "JVM Abnormal Exit",
  "exit.normal": "Normal Exit",
  "exit.unknown": "Unknown Error Exit",
  "exit.code": "Game Exit (Code {0})",
  "fix.memory": "Memory Tuning",
  "fix.modConflict": "Mod Conflict Check",
  "fix.driverUpdate": "Driver Update",
  "fix.networkCheck": "Network Check",
  "fix.javaUpdate": "Java Update",
  "analysis.patternCount": "Matched {0} error pattern(s)",
  "analysis.topIssues": "Top Issues",
  "analysis.relatedMods": "Related Mods",
  "analysis.possibleCauses": "Possible Causes",
  "analysis.errorContext": "Error Context",
  "analysis.stackTrace": "Stack Trace",
  "version.title": "About",
  "version.author": "Author",
  "version.pluginVersion": "Plugin Version",
  "version.updated": "Updated"
};
var LANG_KEY = "lp_lang";
var maps = { zh, en };
function getSavedLang() {
  try {
    const v = localStorage.getItem(LANG_KEY);
    if (v === "zh" || v === "en") return v;
  } catch (_) {
  }
  return "zh";
}
function setSavedLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (_) {
  }
}
function createT(lang) {
  return (key, ...args) => {
    let text = maps[lang]?.[key];
    if (!text) text = maps.en[key] ?? key;
    return fmt(text, args);
  };
}
function langOptions() {
  return [{ value: "zh", label: "\u4E2D\u6587" }, { value: "en", label: "English" }];
}

// src/widgets/home-widget.tsx
function createHomeWidget(api) {
  const { React } = api;
  const host = api.getHostContext();
  return function HomeWidget() {
    const [analysis] = host.state.useExtensionState("lastAnalysis", null);
    const lang = getSavedLang();
    const _ = createT(lang);
    const boxStyle = { p: 3, borderRadius: "md", bg: "rgba(8,12,24,0.6)", border: "1px solid rgba(255,255,255,0.08)" };
    return /* @__PURE__ */ api.React.createElement(api.ChakraUI.VStack, { align: "stretch", spacing: 3 }, /* @__PURE__ */ api.React.createElement(api.ChakraUI.HStack, { justify: "space-between", align: "center" }, /* @__PURE__ */ api.React.createElement(api.ChakraUI.Text, { fontSize: "sm", fontWeight: "bold" }, _("widget.title")), /* @__PURE__ */ api.React.createElement(
      api.ChakraUI.Badge,
      {
        colorScheme: analysis ? analysis.highCount > 0 ? "red" : analysis.medCount > 0 ? "yellow" : "green" : "gray",
        variant: "subtle",
        fontSize: "xs"
      },
      analysis ? _("widget.found") + " " + (analysis.highCount + analysis.medCount + analysis.lowCount) + " \u9879" : _("widget.none")
    )), /* @__PURE__ */ api.React.createElement(api.ChakraUI.Text, { fontSize: "xs", className: "secondary-text" }, analysis ? _("widget.summary", String(analysis.highCount), String(analysis.medCount), String(analysis.lowCount), String(analysis.totalLines)) : ""), analysis && analysis.criticalCount > 0 && /* @__PURE__ */ api.React.createElement(api.ChakraUI.Box, { p: 1.5, bg: "rgba(229,62,62,0.15)", borderLeft: "3px solid", borderColor: "red.400", borderRadius: "sm" }, /* @__PURE__ */ api.React.createElement(api.ChakraUI.Text, { fontSize: "xs", color: "red.200", fontWeight: "medium" }, "\u81F4\u547D: " + analysis.criticalCount + " \u9879")), /* @__PURE__ */ api.React.createElement(api.ChakraUI.Button, { size: "xs", colorScheme: "blue", onClick: () => host.actions.navigate("/settings/extension/" + api.identifier) }, _("widget.open")));
  };
}

// src/engine/patterns.ts
var P = [
  // ==================== MEMORY ====================
  {
    re: /OutOfMemoryError/i,
    category: "memory",
    severity: "critical",
    titleZh: "\u5185\u5B58\u4E0D\u8DB3",
    titleEn: "Out of Memory",
    descZh: "Java \u5806\u5185\u5B58\u8017\u5C3D\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u8FD0\u884C",
    descEn: "Java heap memory exhausted, cannot continue running",
    fixZh: "\u5728\u542F\u52A8\u5668\u8BBE\u7F6E\u4E2D\u5C06\u6700\u5927\u5185\u5B58\u589E\u52A0\u5230 4096MB \u6216\u66F4\u9AD8\u3002\n\u5982\u5DF2\u5206\u914D\u5927\u5185\u5B58\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u4E86\u5185\u5B58\u6CC4\u6F0F\u7684\u6A21\u7EC4\u3002",
    fixEn: "Increase max memory to 4096MB or higher in launcher settings.\nIf already allocated high memory, check for memory-leaking mods."
  },
  {
    re: /could not reserve enough space/i,
    category: "memory",
    severity: "critical",
    titleZh: "\u5185\u5B58\u5206\u914D\u5931\u8D25",
    titleEn: "Memory Allocation Failed",
    descZh: "\u7CFB\u7EDF\u65E0\u6CD5\u5206\u914D\u8DB3\u591F\u7684\u8FDE\u7EED\u5185\u5B58\u7A7A\u95F4",
    descEn: "System cannot allocate enough contiguous memory space",
    fixZh: "\u5173\u95ED\u5176\u4ED6\u5360\u7528\u5185\u5B58\u7684\u7A0B\u5E8F\u540E\u91CD\u8BD5\u3002\n\u6216\u8005\u9002\u5F53\u51CF\u5C11\u5206\u914D\u7ED9 Minecraft \u7684\u5185\u5B58\u91CF\u3002",
    fixEn: "Close other memory-intensive programs and retry.\nOr reduce the memory allocated to Minecraft."
  },
  {
    re: /PermGen|Metaspace|OutOfMemoryError.*space/i,
    category: "memory",
    severity: "high",
    titleZh: "\u6C38\u4E45\u4EE3/\u5143\u7A7A\u95F4\u4E0D\u8DB3",
    titleEn: "PermGen / Metaspace Exhausted",
    descZh: "\u7C7B\u52A0\u8F7D\u8FC7\u591A\u5BFC\u81F4\u65B9\u6CD5\u533A\u6EA2\u51FA",
    descEn: "Too many classes loaded causing method area overflow",
    fixZh: "\u5728 JVM \u53C2\u6570\u4E2D\u6DFB\u52A0 -XX:MaxMetaspaceSize=256M\uFF08\u9AD8\u7248\u672C Java\uFF09\u6216 -XX:MaxPermSize=256M\u3002",
    fixEn: "Add -XX:MaxMetaspaceSize=256M (modern Java) or -XX:MaxPermSize=256M to JVM arguments."
  },
  {
    re: /GC overhead limit exceeded|java\.lang\.OutOfMemoryError.*GC/i,
    category: "memory",
    severity: "high",
    titleZh: "GC \u8FC7\u5934\u9650\u5236\u8D85\u51FA",
    titleEn: "GC Overhead Limit Exceeded",
    descZh: "JVM \u82B1\u8D39 98% \u4EE5\u4E0A\u65F6\u95F4\u5728\u5783\u573E\u56DE\u6536\u4E14\u56DE\u6536\u6548\u679C\u5FAE\u4E4E\u5176\u5FAE",
    descEn: "JVM spends >98% time on garbage collection with poor results",
    fixZh: "\u8FD9\u901A\u5E38\u610F\u5473\u7740\u5185\u5B58\u4E0D\u8DB3\u3002\u589E\u5927\u5206\u914D\u5185\u5B58\u6216\u68C0\u67E5\u5185\u5B58\u6CC4\u6F0F\u3002",
    fixEn: "Usually indicates insufficient memory. Increase allocated memory or check for memory leaks."
  },
  // ==================== MOD ====================
  {
    re: /NoClassDefFoundError/i,
    category: "mod",
    severity: "high",
    titleZh: "\u7C7B\u5B9A\u4E49\u7F3A\u5931",
    titleEn: "Class Definition Missing",
    descZh: "\u67D0\u4E2A\u5FC5\u9700\u7684 Java \u7C7B\u5728\u8FD0\u884C\u65F6\u627E\u4E0D\u5230",
    descEn: "A required Java class is missing at runtime",
    fixZh: "\u67D0\u4E2A\u6A21\u7EC4\u7F3A\u5C11\u4F9D\u8D56\u6587\u4EF6\u3002\n\u68C0\u67E5\u662F\u5426\u7F3A\u5C11\u524D\u7F6E\u6A21\u7EC4\uFF0C\u6216\u5C1D\u8BD5\u91CD\u65B0\u5B89\u88C5\u51FA\u95EE\u9898\u7684\u6A21\u7EC4\u3002",
    fixEn: "A mod is missing its dependency files.\nCheck for missing prerequisite mods, or try reinstalling the problematic mod."
  },
  {
    re: /ClassNotFoundException/i,
    category: "mod",
    severity: "high",
    titleZh: "\u7C7B\u672A\u627E\u5230",
    titleEn: "Class Not Found",
    descZh: "\u6A21\u7EC4\u52A0\u8F7D\u5668\u627E\u4E0D\u5230\u6307\u5B9A\u7684\u7C7B",
    descEn: "Mod loader cannot find the specified class",
    fixZh: "\u6A21\u7EC4\u6587\u4EF6\u53EF\u80FD\u635F\u574F\u6216\u7248\u672C\u4E0D\u517C\u5BB9\u3002\n\u5C1D\u8BD5\u66F4\u65B0\u6A21\u7EC4\u5230\u5BF9\u5E94 Minecraft \u7248\u672C\u7684\u7248\u672C\u3002",
    fixEn: "Mod file may be corrupted or version incompatible.\nTry updating the mod to the correct Minecraft version."
  },
  {
    re: /Mixin.*fail|mixin.*error|mixin.*target/i,
    category: "mod",
    severity: "high",
    titleZh: "Mixin \u6CE8\u5165\u5931\u8D25",
    titleEn: "Mixin Injection Failed",
    descZh: "\u6A21\u7EC4\u4E4B\u95F4\u7684 Mixin \u4EE3\u7801\u6CE8\u5165\u51B2\u7A81",
    descEn: "Mixin code injection conflict between mods",
    fixZh: "\u68C0\u67E5\u54EA\u4E9B\u6A21\u7EC4\u4FEE\u6539\u4E86\u540C\u4E00\u4E2A\u6E38\u620F\u7C7B\uFF0C\u5C1D\u8BD5\u79FB\u9664\u51B2\u7A81\u7684\u6A21\u7EC4\u3002\n\u66F4\u65B0\u6240\u6709\u6A21\u7EC4\u5230\u6700\u65B0\u7248\u672C\u3002",
    fixEn: "Check which mods modify the same game class, try removing conflicting mods.\nUpdate all mods to their latest versions."
  },
  {
    re: /ModResolutionException|net\.minecraftforge\.fml\.loading.*error/i,
    category: "mod",
    severity: "high",
    titleZh: "\u6A21\u7EC4\u4F9D\u8D56\u89E3\u6790\u5931\u8D25",
    titleEn: "Mod Dependency Resolution Failed",
    descZh: "\u6A21\u7EC4\u7F3A\u5C11\u524D\u7F6E\u6216\u7248\u672C\u4E0D\u517C\u5BB9",
    descEn: "Mod missing prerequisites or version incompatibility",
    fixZh: "\u67E5\u770B\u9519\u8BEF\u8BE6\u60C5\u4E2D\u63D0\u793A\u7F3A\u5C11\u54EA\u4E2A\u6A21\u7EC4\uFF0C\u5B89\u88C5\u5BF9\u5E94\u7248\u672C\u7684\u524D\u7F6E\u6A21\u7EC4\u3002",
    fixEn: "Check the error details for which mod is missing, install the correct version of the prerequisite mod."
  },
  {
    re: /Missing mods/i,
    category: "mod",
    severity: "high",
    titleZh: "\u7F3A\u5C11\u6A21\u7EC4",
    titleEn: "Missing Mods",
    descZh: "\u6E38\u620F\u9700\u8981\u7684\u6A21\u7EC4\u672A\u5B89\u88C5",
    descEn: "Required mods are not installed",
    fixZh: "\u6839\u636E\u63D0\u793A\u5B89\u88C5\u7F3A\u5931\u7684\u6A21\u7EC4\u53CA\u5176\u524D\u7F6E\u6A21\u7EC4\u3002",
    fixEn: "Install the missing mods and their prerequisites as indicated."
  },
  {
    re: /DuplicateModsFoundException/i,
    category: "mod",
    severity: "medium",
    titleZh: "\u6A21\u7EC4\u91CD\u590D",
    titleEn: "Duplicate Mods",
    descZh: "\u540C\u4E00\u4E2A\u6A21\u7EC4\u88AB\u5B89\u88C5\u4E86\u591A\u4E2A\u7248\u672C",
    descEn: "Multiple versions of the same mod are installed",
    fixZh: "\u5728 mods \u6587\u4EF6\u5939\u4E2D\u68C0\u67E5\u5E76\u5220\u9664\u91CD\u590D\u7684\u6A21\u7EC4\u6587\u4EF6\u3002",
    fixEn: "Check the mods folder and remove duplicate mod files."
  },
  {
    re: /fml\.loadingtoprogress|net\.minecraftforge\.fml/i,
    category: "mod",
    severity: "low",
    titleZh: "Forge \u52A0\u8F7D\u4FE1\u606F",
    titleEn: "Forge Loading Info",
    descZh: "Forge \u6A21\u7EC4\u52A0\u8F7D\u5668\u76F8\u5173\u4FE1\u606F",
    descEn: "Forge mod loader related information",
    fixZh: "\u82E5\u6E38\u620F\u56E0\u6B64\u542F\u52A8\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 Forge \u7248\u672C\u662F\u5426\u4E0E Minecraft \u7248\u672C\u5339\u914D\u3002",
    fixEn: "If the game fails to start, check if Forge version matches the Minecraft version."
  },
  {
    re: /fabric.*loader/i,
    category: "mod",
    severity: "low",
    titleZh: "Fabric \u52A0\u8F7D\u4FE1\u606F",
    titleEn: "Fabric Loading Info",
    descZh: "Fabric \u6A21\u7EC4\u52A0\u8F7D\u5668\u76F8\u5173\u4FE1\u606F",
    descEn: "Fabric mod loader related information",
    fixZh: "\u82E5\u6E38\u620F\u56E0\u6B64\u542F\u52A8\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 Fabric Loader \u7248\u672C\u3002",
    fixEn: "If the game fails to start, check the Fabric Loader version."
  },
  {
    re: /Mod file.*not found|FileNotFoundException.*\.jar/i,
    category: "mod",
    severity: "high",
    titleZh: "\u6A21\u7EC4\u6587\u4EF6\u672A\u627E\u5230",
    titleEn: "Mod File Not Found",
    descZh: "\u6A21\u7EC4\u6587\u4EF6\u4E22\u5931\u6216\u65E0\u6CD5\u8BFB\u53D6",
    descEn: "Mod file is missing or unreadable",
    fixZh: "\u6A21\u7EC4\u6587\u4EF6\u53EF\u80FD\u88AB\u5220\u9664\u6216\u635F\u574F\u3002\u91CD\u65B0\u4E0B\u8F7D\u5E76\u5B89\u88C5\u8BE5\u6A21\u7EC4\u3002",
    fixEn: "The mod file may have been deleted or corrupted. Re-download and install the mod."
  },
  {
    re: /Incompatible.*mod|mod.*incompatible|incompatible.*version.*mod/i,
    category: "mod",
    severity: "high",
    titleZh: "\u6A21\u7EC4\u4E0D\u517C\u5BB9",
    titleEn: "Incompatible Mod",
    descZh: "\u6A21\u7EC4\u4E0E\u5F53\u524D\u6E38\u620F\u7248\u672C\u6216\u5176\u4ED6\u6A21\u7EC4\u4E0D\u517C\u5BB9",
    descEn: "Mod is incompatible with the current game version or other mods",
    fixZh: "\u68C0\u67E5\u6A21\u7EC4\u662F\u5426\u652F\u6301\u5F53\u524D Minecraft \u7248\u672C\u3002\u5C1D\u8BD5\u66F4\u65B0\u6216\u627E\u5230\u517C\u5BB9\u7248\u672C\u3002",
    fixEn: "Check if the mod supports the current Minecraft version. Try updating or finding a compatible version."
  },
  // ==================== NETWORK ====================
  {
    re: /ConnectException|Connection refused/i,
    category: "net",
    severity: "medium",
    titleZh: "\u8FDE\u63A5\u88AB\u62D2\u7EDD",
    titleEn: "Connection Refused",
    descZh: "\u65E0\u6CD5\u8FDE\u63A5\u5230\u76EE\u6807\u670D\u52A1\u5668",
    descEn: "Cannot connect to the target server",
    fixZh: "\u68C0\u67E5\u670D\u52A1\u5668\u5730\u5740\u662F\u5426\u6B63\u786E\u3002\n\u786E\u8BA4\u670D\u52A1\u5668\u662F\u5426\u6B63\u5728\u8FD0\u884C\u3002\n\u68C0\u67E5\u9632\u706B\u5899\u662F\u5426\u963B\u6B62\u4E86\u8FDE\u63A5\u3002",
    fixEn: "Check if the server address is correct.\nConfirm the server is running.\nCheck if the firewall is blocking the connection."
  },
  {
    re: /SocketTimeoutException|connect timed out|Read timed out/i,
    category: "net",
    severity: "medium",
    titleZh: "\u8FDE\u63A5\u8D85\u65F6",
    titleEn: "Connection Timeout",
    descZh: "\u8FDE\u63A5\u670D\u52A1\u5668\u8D85\u65F6",
    descEn: "Connection to server timed out",
    fixZh: "\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\u3002\n\u670D\u52A1\u5668\u53EF\u80FD\u79BB\u7EBF\u6216\u7F51\u7EDC\u4E0D\u7A33\u5B9A\u3002\n\u5C1D\u8BD5\u5207\u6362\u7F51\u7EDC\u73AF\u5883\uFF08\u5982\u4F7F\u7528\u70ED\u70B9\uFF09\u6D4B\u8BD5\u3002",
    fixEn: "Check your network connection.\nThe server may be offline or the network is unstable.\nTry switching networks (e.g., use a hotspot) to test."
  },
  {
    re: /UnknownHostException/i,
    category: "net",
    severity: "medium",
    titleZh: "\u57DF\u540D\u89E3\u6790\u5931\u8D25",
    titleEn: "DNS Resolution Failed",
    descZh: "\u65E0\u6CD5\u89E3\u6790\u670D\u52A1\u5668\u57DF\u540D",
    descEn: "Cannot resolve server hostname",
    fixZh: "\u68C0\u67E5\u670D\u52A1\u5668\u5730\u5740\u662F\u5426\u62FC\u5199\u6B63\u786E\u3002\n\u5C1D\u8BD5\u5237\u65B0 DNS \u7F13\u5B58\u6216\u4F7F\u7528 IP \u5730\u5740\u76F4\u8FDE\u3002",
    fixEn: "Check if the server address is spelled correctly.\nTry flushing DNS cache or using the IP address directly."
  },
  {
    re: /SSLException|SSLHandshakeException/i,
    category: "net",
    severity: "medium",
    titleZh: "SSL \u63E1\u624B\u5931\u8D25",
    titleEn: "SSL Handshake Failed",
    descZh: "\u5B89\u5168\u8FDE\u63A5\u5EFA\u7ACB\u5931\u8D25",
    descEn: "Secure connection setup failed",
    fixZh: "\u68C0\u67E5\u7CFB\u7EDF\u65F6\u95F4\u662F\u5426\u6B63\u786E\u3002\n\u66F4\u65B0 Java \u5230\u6700\u65B0\u7248\u672C\u3002",
    fixEn: "Check if your system time is correct.\nUpdate Java to the latest version."
  },
  {
    re: /Connection reset/i,
    category: "net",
    severity: "low",
    titleZh: "\u8FDE\u63A5\u88AB\u91CD\u7F6E",
    titleEn: "Connection Reset",
    descZh: "\u8FDE\u63A5\u88AB\u670D\u52A1\u5668\u7AEF\u4E3B\u52A8\u5173\u95ED",
    descEn: "Connection was closed by the server",
    fixZh: "\u670D\u52A1\u5668\u53EF\u80FD\u91CD\u542F\u6216\u4E3B\u52A8\u65AD\u5F00\u4E86\u8FDE\u63A5\uFF0C\u7A0D\u540E\u91CD\u8BD5\u3002",
    fixEn: "The server may have restarted or actively closed the connection. Retry later."
  },
  {
    re: /No route to host/i,
    category: "net",
    severity: "medium",
    titleZh: "\u65E0\u8DEF\u7531\u5230\u4E3B\u673A",
    titleEn: "No Route to Host",
    descZh: "\u7F51\u7EDC\u8DEF\u7531\u65E0\u6CD5\u5230\u8FBE\u76EE\u6807\u670D\u52A1\u5668",
    descEn: "Network route cannot reach the target server",
    fixZh: "\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u786E\u4FDD\u80FD\u591F\u8BBF\u95EE\u76EE\u6807\u670D\u52A1\u5668\u3002\u68C0\u67E5\u9632\u706B\u5899\u8BBE\u7F6E\u3002",
    fixEn: "Check your network connection and ensure you can reach the target server. Check firewall settings."
  },
  // ==================== RENDER / GPU ====================
  {
    re: /(OpenGL|GLFW)\s.*error|GLFW_ERROR/i,
    category: "render",
    severity: "critical",
    titleZh: "OpenGL / GLFW \u9519\u8BEF",
    titleEn: "OpenGL / GLFW Error",
    descZh: "\u56FE\u5F62\u6E32\u67D3\u63A5\u53E3\u51FA\u9519",
    descEn: "Graphics rendering interface error",
    fixZh: "\u66F4\u65B0\u663E\u5361\u9A71\u52A8\u5230\u6700\u65B0\u7248\u672C\u3002\n\u5C1D\u8BD5\u5173\u95ED\u5149\u5F71\u3001OptiFine \u7B49\u56FE\u5F62\u589E\u5F3A\u6A21\u7EC4\u3002\n\u68C0\u67E5 Java \u7248\u672C\u662F\u5426\u517C\u5BB9\u3002",
    fixEn: "Update your graphics drivers to the latest version.\nTry disabling shaders, OptiFine, or other graphics enhancement mods.\nCheck Java version compatibility."
  },
  {
    re: /Pixel format not accelerated/i,
    category: "render",
    severity: "critical",
    titleZh: "\u50CF\u7D20\u683C\u5F0F\u672A\u52A0\u901F",
    titleEn: "Pixel Format Not Accelerated",
    descZh: "\u663E\u5361\u4E0D\u652F\u6301\u786C\u4EF6\u52A0\u901F\u6E32\u67D3",
    descEn: "Graphics card does not support hardware accelerated rendering",
    fixZh: "\u66F4\u65B0\u663E\u5361\u9A71\u52A8\u3002\n\u5982\u679C\u662F\u865A\u62DF\u673A\uFF0C\u8BF7\u542F\u7528 3D \u52A0\u901F\u3002\n\u5728 JVM \u53C2\u6570\u4E2D\u6DFB\u52A0 -Dsun.java2d.opengl=true\u3002",
    fixEn: "Update your graphics drivers.\nIf using a VM, enable 3D acceleration.\nAdd -Dsun.java2d.opengl=true to JVM arguments."
  },
  {
    re: /GLException|Couldn.*t create context|egl.*error/i,
    category: "render",
    severity: "critical",
    titleZh: "OpenGL \u4E0A\u4E0B\u6587\u521B\u5EFA\u5931\u8D25",
    titleEn: "OpenGL Context Creation Failed",
    descZh: "\u663E\u5361\u4E0D\u652F\u6301\u6240\u9700\u7684 OpenGL \u7248\u672C",
    descEn: "Graphics card does not support the required OpenGL version",
    fixZh: "\u66F4\u65B0\u663E\u5361\u9A71\u52A8\u3002\nMinecraft 1.17+ \u9700\u8981 OpenGL 3.2+\uFF0C\u68C0\u67E5\u663E\u5361\u662F\u5426\u652F\u6301\u3002",
    fixEn: "Update your graphics drivers.\nMinecraft 1.17+ requires OpenGL 3.2+, check if your GPU supports it."
  },
  {
    re: /Shader.*error|shadow.*error|Shader.*compile|glsl.*error/i,
    category: "render",
    severity: "high",
    titleZh: "\u7740\u8272\u5668\u9519\u8BEF",
    titleEn: "Shader Error",
    descZh: "\u5149\u5F71\u6216\u6750\u8D28\u5305\u7740\u8272\u5668\u7F16\u8BD1\u5931\u8D25",
    descEn: "Shader compilation failed for shaders or resource packs",
    fixZh: "\u66F4\u65B0\u5149\u5F71\u5305\u6216\u5C1D\u8BD5\u5176\u4ED6\u7248\u672C\u3002\n\u68C0\u67E5\u663E\u5361\u9A71\u52A8\u662F\u5426\u517C\u5BB9\u3002",
    fixEn: "Update your shader pack or try other versions.\nCheck GPU driver compatibility."
  },
  {
    re: /Invalid pixel format|Bad pixel format/i,
    category: "render",
    severity: "high",
    titleZh: "\u65E0\u6548\u50CF\u7D20\u683C\u5F0F",
    titleEn: "Invalid Pixel Format",
    descZh: "\u663E\u5361\u9A71\u52A8\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u50CF\u7D20\u683C\u5F0F",
    descEn: "Graphics driver returned an invalid pixel format",
    fixZh: "\xE5\xAE\x8C\xE5\x85\xA8\xE5\x8D\xB8\xE8\xBD\xBD\xE5\xB9\xB6\xE9\x87\x8D\xE6\x96\xB0\xE5\xAE\x89\xE8\xA3\x85\xE6\x98\xBE\xE5\x8D\xA1\xE9\xA9\xB1\xE5\x8A\xA8\xE3\x80\x82\n\xE5\xB0\x9D\xE8\xAF\x95\xE4\xBD\xBF\xE7\x94\xA8\xE5\x8F\xA6\xE4\xB8\x80\xE5\x8F\xB0\xE6\x98\xBE\xE5\x8D\xA1\xEF\xBC\x88\xE5\xA6\x82\xE6\x9C\x89\xE9\x9B\x86\xE6\x88\x90\xE6\x98\xBE\xE5\x8D\xA1\xEF\xBC\x89\xE3\x80\x82",
    fixEn: "Completely uninstall and reinstall your graphics driver.\nTry using a different GPU (e.g. integrated graphics if available)."
  },
  // ==================== JVM ====================
  {
    re: /#\s*Internal Error/i,
    category: "jvm",
    severity: "critical",
    titleZh: "JVM \u5185\u90E8\u9519\u8BEF",
    titleEn: "JVM Internal Error",
    descZh: "Java \u865A\u62DF\u673A\u5185\u90E8\u9519\u8BEF\uFF08\u53EF\u80FD\u4E3A JVM Bug\uFF09",
    descEn: "Java Virtual Machine internal error (possibly a JVM bug)",
    fixZh: "\u5C1D\u8BD5\u66F4\u65B0 Java \u7248\u672C\u3002\n\u5982\u679C\u4F7F\u7528\u4E86\u81EA\u5B9A\u4E49 JVM \u53C2\u6570\uFF0C\u8BF7\u5148\u6062\u590D\u9ED8\u8BA4\u518D\u8BD5\u3002",
    fixEn: "Try updating Java version.\nIf using custom JVM arguments, restore defaults first."
  },
  {
    re: /#\s*Native Memory Allocation/i,
    category: "jvm",
    severity: "critical",
    titleZh: "\u672C\u5730\u5185\u5B58\u5206\u914D\u5931\u8D25",
    titleEn: "Native Memory Allocation Failed",
    descZh: "JVM \u5E95\u5C42\u5185\u5B58\u5206\u914D\u5931\u8D25",
    descEn: "JVM low-level memory allocation failed",
    fixZh: "\u7CFB\u7EDF\u53EF\u80FD\u5185\u5B58\u4E0D\u8DB3\uFF0C\u5173\u95ED\u5176\u4ED6\u7A0B\u5E8F\u540E\u91CD\u8BD5\u3002\n\u51CF\u5C11\u5206\u914D\u7ED9 Minecraft \u7684\u5185\u5B58\u91CF\u3002",
    fixEn: "System may be out of memory. Close other programs and retry.\nReduce the memory allocated to Minecraft."
  },
  {
    re: /StackOverflowError/i,
    category: "jvm",
    severity: "high",
    titleZh: "\u6808\u6EA2\u51FA",
    titleEn: "Stack Overflow",
    descZh: "\u7A0B\u5E8F\u8FDB\u5165\u65E0\u9650\u9012\u5F52\u8C03\u7528",
    descEn: "Program entered infinite recursive calls",
    fixZh: "\u901A\u5E38\u7531\u6A21\u7EC4 Bug \u5F15\u8D77\u3002\n\u5C1D\u8BD5\u79FB\u9664\u6700\u8FD1\u6DFB\u52A0\u7684\u6A21\u7EC4\uFF0C\u6216\u8005\u66F4\u65B0\u6A21\u7EC4\u5230\u6700\u65B0\u7248\u672C\u3002",
    fixEn: "Usually caused by a mod bug.\nTry removing recently added mods, or update mods to their latest versions."
  },
  {
    re: /java\.lang\.NullPointerException/i,
    category: "jvm",
    severity: "high",
    titleZh: "\u7A7A\u6307\u9488\u5F02\u5E38",
    titleEn: "Null Pointer Exception",
    descZh: "\u6E38\u620F\u4EE3\u7801\u5C1D\u8BD5\u8BBF\u95EE\u7A7A\u5BF9\u8C61",
    descEn: "Game code tried to access a null object",
    fixZh: "\xE9\x80\x9A\xE5\xB8\xB8\xE6\x8C\x87\xE7\xA4\xBA\xE6\xA8\xA1\xE7\xBB\x84 Bug\u3002\n\xE5\xB0\x9D\xE8\xAF\x95\xE6\x9B\xB4\xE6\x96\xB0\xE7\x9B\xB8\xE5\x85\xB3\xE6\xA8\xA1\xE7\xBB\x84\u6216\u79FB\u9664\u6709\u95EE\u9898\u7684\u6A21\u7EC4\u3002",
    fixEn: "Usually indicates a mod bug.\nTry updating the relevant mods or remove the problematic mod."
  },
  {
    re: /java\.lang\.UnsupportedClassVersionError/i,
    category: "jvm",
    severity: "high",
    titleZh: "Java \u7248\u672C\u4E0D\u517C\u5BB9",
    titleEn: "Java Version Incompatible",
    descZh: "\u6A21\u7EC4/\u6E38\u620F\u9700\u8981\u4E0D\u540C\u7248\u672C\u7684 Java",
    descEn: "Mod/game requires a different Java version",
    fixZh: "\u6E38\u620F\u6216\u6A21\u7EC4\u9700\u8981\u66F4\u9AD8/\u66F4\u4F4E\u7684 Java \u7248\u672C\u3002\n\u5728\u542F\u52A8\u5668\u4E2D\u5207\u6362 Java \u7248\u672C\u3002",
    fixEn: "The game or mod requires a higher/lower Java version.\nSwitch Java version in the launcher settings."
  },
  {
    re: /java\.lang\.IllegalArgumentException/i,
    category: "jvm",
    severity: "medium",
    titleZh: "\u975E\u6CD5\u53C2\u6570",
    titleEn: "Illegal Argument",
    descZh: "\u4F20\u9012\u7ED9\u65B9\u6CD5\u7684\u53C2\u6570\u4E0D\u5408\u6CD5",
    descEn: "Invalid argument passed to a method",
    fixZh: "\xE5\x8F\xAF\xE8\x83\xBD\xE6\x98\xAF\u6A21\u7EC4\u914D\u7F6E\u9519\u8BEF\u6216\u6A21\u7EC4\u517C\u5BB9\u6027\u95EE\u9898\u3002",
    fixEn: "Possible mod configuration error or mod compatibility issue."
  },
  {
    re: /java\.lang\.ArrayIndexOutOfBoundsException/i,
    category: "jvm",
    severity: "medium",
    titleZh: "\u6570\u7EC4\u8D8A\u754C",
    titleEn: "Array Index Out of Bounds",
    descZh: "\u8BBF\u95EE\u4E86\u6570\u7EC4\u4E0D\u5B58\u5728\u7684\u7D22\u5F15",
    descEn: "Accessed an array index that doesn't exist",
    fixZh: "\xE9\x80\x9A\xE5\xB8\xB8\xE7\x94\xB1\u6A21\u7EC4 Bug \u5F15\u8D77\uFF0C\u66F4\u65B0\u6216\u79FB\u9664\u6709\u95EE\u9898\u7684\u6A21\u7EC4\u3002",
    fixEn: "Usually caused by a mod bug. Update or remove the problematic mod."
  },
  {
    re: /java\.lang\.ClassCastException/i,
    category: "jvm",
    severity: "medium",
    titleZh: "\u7C7B\u578B\u8F6C\u6362\u5F02\u5E38",
    titleEn: "Class Cast Exception",
    descZh: "\u9519\u8BEF\u7684\u7C7B\u578B\u8F6C\u6362",
    descEn: "Incorrect type casting",
    fixZh: "\u6A21\u7EC4\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u5C1D\u8BD5\u66F4\u65B0\u6A21\u7EC4\u3002",
    fixEn: "Mod compatibility issue. Try updating the mod."
  },
  {
    re: /java\.util\.concurrent\.ExecutionException/i,
    category: "jvm",
    severity: "medium",
    titleZh: "\u5F02\u6B65\u6267\u884C\u5F02\u5E38",
    titleEn: "Async Execution Exception",
    descZh: "\u591A\u7EBF\u7A0B\u4EFB\u52A1\u6267\u884C\u51FA\u9519",
    descEn: "Multithreaded task execution error",
    fixZh: "\xE6\x9F\xA5\xE7\x9C\x8B\xE5\xBC\x82\xE5\xB8\xB8\xE8\xAF\xA6\xE6\x83\x85\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\uFF0C\u901A\u5E38\u662F\u6A21\u7EC4\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\u3002",
    fixEn: "Check the exception details for more info. Usually a mod thread-safety issue."
  },
  {
    re: /Failed to load|Couldn't load/i,
    category: "general",
    severity: "high",
    titleZh: "\u52A0\u8F7D\u5931\u8D25",
    titleEn: "Failed to Load",
    descZh: "\u6E38\u620F\u65E0\u6CD5\u52A0\u8F7D\u67D0\u4E2A\u5FC5\u8981\u8D44\u6E90",
    descEn: "Game could not load a required resource",
    fixZh: "\xE6\xA3\x80\xE6\x9F\xA5\u6E38\u620F\u6587\u4EF6\u5B8C\u6574\u6027\uFF0C\u5C1D\u8BD5\u91CD\u65B0\u5B89\u88C5\u6E38\u620F\u5B9E\u4F8B\u3002",
    fixEn: "Check game file integrity. Try reinstalling the game instance."
  },
  // ==================== CRASH ====================
  {
    re: /\-\-\-\-\-\-+\s*$/im,
    category: "crash",
    severity: "high",
    titleZh: "\u5D29\u6E83\u62A5\u544A",
    titleEn: "Crash Report",
    descZh: "\u6E38\u620F\u53D1\u751F\u4E25\u91CD\u5D29\u6E83\u751F\u6210\u4E86\u5D29\u6E83\u62A5\u544A",
    descEn: "Game has crashed and generated a crash report",
    fixZh: "\xE6\x9F\xA5\xE7\x9C\x8B\u5D29\u6E83\u62A5\u544A\u8BE6\u60C5\uFF0C\u901A\u5E38\u662F\u6A21\u7EC4\u51B2\u7A81\u6216\u517C\u5BB9\u6027\u95EE\u9898\u3002\n\u4E5F\u53EF\u4EE5\u641C\u7D22\u5D29\u6E83\u62A5\u544A\u4E2D\u7684\u5173\u952E\u9519\u8BEF\u4FE1\u606F\u3002",
    fixEn: "Check the crash report details. Usually a mod conflict or compatibility issue.\nAlso search for key error messages in the crash report."
  },
  // ==================== GENERAL / RUNTIME ====================
  {
    re: /net\.minecraft\.client\.mainThread|Ticking memory connection/i,
    category: "general",
    severity: "low",
    titleZh: "\u6E38\u620F\u7EBF\u7A0B\u5F02\u5E38",
    titleEn: "Game Thread Exception",
    descZh: "\u6E38\u620F\u4E3B\u7EBF\u7A0B\u6216\u7F51\u7EDC\u7EBF\u7A0B\u51FA\u9519",
    descEn: "Game main thread or network thread error",
    fixZh: "\xE6\x9F\xA5\xE7\x9C\x8B\u5177\u4F53\u5F02\u5E38\u7C7B\u578B\uFF0C\u53EF\u80FD\u662F\u7F51\u7EDC\u95EE\u9898\u6216\u6A21\u7EC4\u95EE\u9898\u3002",
    fixEn: "Check the specific exception type. Could be a network or mod issue."
  },
  {
    re: /Exception in thread|Caused by:|\.at\s+net\.minecraft/i,
    category: "general",
    severity: "high",
    titleZh: "\u6E38\u620F\u5F02\u5E38",
    titleEn: "Game Exception",
    descZh: "\u6E38\u620F\u9047\u5230\u4E86\u672A\u5904\u7406\u7684\u5F02\u5E38",
    descEn: "Game encountered an unhandled exception",
    fixZh: "\xE6\xA0\xB9\xE6\x8D\xAE\u5F02\u5E38\u4FE1\u606F\u5B9A\u4F4D\u95EE\u9898\u3002\u67E5\u770B\u5806\u6808\u8DDF\u8E2A\u4E2D\u63D0\u53CA\u7684\u6A21\u7EC4\u540D\u79F0\u3002",
    fixEn: "Locate the issue based on the exception info. Check the stack trace for mentioned mod names."
  },
  {
    re: /Ticking (entity|block entity)/i,
    category: "general",
    severity: "high",
    titleZh: "\u5B9E\u4F53/\u65B9\u5757\u5B9E\u4F53\u5F02\u5E38",
    titleEn: "Entity / Block Entity Error",
    descZh: "\u6E38\u620F\u4E2D\u7684\u67D0\u4E2A\u5B9E\u4F53\u6216\u65B9\u5757\u5B9E\u4F53\u51FA\u9519",
    descEn: "An entity or block entity in the game encountered an error",
    fixZh: "\xE9\x80\x9A\xE5\xB8\xB8\u7531\u6A21\u7EC4\u6DFB\u52A0\u7684\u5B9E\u4F53\u6216\u65B9\u5757\u5F15\u8D77\u3002\n\u5C1D\u8BD5\u79FB\u9664\u76F8\u5173\u6A21\u7EC4\u6216\u4F7F\u7528 /kill @e [type=...] \u5220\u9664\u95EE\u9898\u5B9E\u4F53\u3002",
    fixEn: "Usually caused by entities or blocks added by mods.\nTry removing the relevant mod, or use commands to remove problematic entities."
  },
  {
    re: /World load error|Couldn't load level|Failed to load level/i,
    category: "general",
    severity: "high",
    titleZh: "\u4E16\u754C\u52A0\u8F7D\u5931\u8D25",
    titleEn: "World Load Failed",
    descZh: "\u65E0\u6CD5\u52A0\u8F7D\u6E38\u620F\u4E16\u754C",
    descEn: "Cannot load the game world",
    fixZh: "\xE4\xB8\x96\xE7\x95\x8C\u6587\u4EF6\u53EF\u80FD\u635F\u574F\u3002\u5C1D\u8BD5\u6062\u590D\u5907\u4EFD\u6216\u4F7F\u7528\u672B\u5EA7\u7AEF\u6267\u884C\u3002\n\u5C1D\u8BD5\u79FB\u9664\u6700\u8FD1\u6DFB\u52A0\u7684\u6A21\u7EC4\u3002",
    fixEn: "World files may be corrupted. Try restoring a backup or using MCEdit.\nTry removing recently added mods."
  },
  {
    re: /Out of memory|java\.heap\.space/i,
    category: "memory",
    severity: "critical",
    titleZh: "\u5185\u5B58\u4E0D\u8DB3\uFF08\u5806\u7A7A\u95F4\uFF09",
    titleEn: "Out of Heap Space",
    descZh: "Java \u5806\u5185\u5B58\u5DF2\u7528\u5C3D",
    descEn: "Java heap space exhausted",
    fixZh: "\xE5\xA2\x9E\u5927\u5206\u914D\u7684\u5185\u5B58\u91CF\uFF0C\u6216\u51CF\u5C11\u6A21\u7EC4\u6570\u91CF\u3002\n\u68C0\u67E5\u662F\u5426\u6709\u5185\u5B58\u6CC4\u6F0F\u7684\u6A21\u7EC4\u3002",
    fixEn: "Increase allocated memory, or reduce the number of mods.\nCheck for memory-leaking mods."
  }
];
var patterns_default = P;

// src/engine/analyzer.ts
var EXIT_CODES = {
  "-1": {
    titleZh: "JVM \u5F02\u5E38\u9000\u51FA",
    titleEn: "JVM Abnormal Exit",
    descZh: "Java \u865A\u62DF\u673A\u81EA\u8EAB\u53D1\u751F\u9519\u8BEF",
    descEn: "Java Virtual Machine itself encountered an error",
    fixZh: "\xE6\x9F\xA5\xE7\x9C\x8B\u65E5\u5FD7\u4E2D\u4E0A\u65B9\u7684 # Internal Error \u6216\u81F4\u547D\u9519\u8BEF\u4FE1\u606F\u3002\n\u5C1D\u8BD5\u5347\u7EA7 Java \u7248\u672C\u3002",
    fixEn: "Check for # Internal Error or fatal error messages above.\nTry upgrading Java version."
  },
  "0": {
    titleZh: "\u6B63\u5E38\u9000\u51FA",
    titleEn: "Normal Exit",
    descZh: "\u6E38\u620F\u6B63\u5E38\u5173\u95ED",
    descEn: "Game closed normally",
    fixZh: "\u65E0\u95EE\u9898",
    fixEn: "No issues detected."
  },
  "1": {
    titleZh: "\u672A\u77E5\u9519\u8BEF\u9000\u51FA",
    titleEn: "Unknown Error Exit",
    descZh: "\u6E38\u620F\u56E0\u9519\u8BEF\u9000\u51FA",
    descEn: "Game exited due to an error",
    fixZh: "\xE6\x9F\xA5\xE7\x9C\x8B\u65E5\u5FD7\u4E2D\u7684 Exception \u548C Error \u4FE1\u606F\u5B9A\u4F4D\u5177\u4F53\u539F\u56E0\u3002",
    fixEn: "Check the Exception and Error messages in the log to find the specific cause."
  }
};
function analyzeLog(text) {
  if (!text || text.trim().length === 0) return null;
  const lines = text.split(/\n/);
  const issues = [];
  const matchedLines = /* @__PURE__ */ new Set();
  for (const p of patterns_default) {
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
        if (/exit code/i.test(p.re.source) || /Process exited/i.test(p.re.source)) {
          const codeMatch = /(-?\d+)/.exec(lines[j]);
          if (codeMatch) {
            const code = codeMatch[1];
            const info = EXIT_CODES[code];
            if (info) {
              if (code === "0") continue;
              issues.push({
                category: "jvm",
                severity: "high",
                titleZh: info.titleZh,
                titleEn: info.titleEn,
                descZh: info.descZh,
                descEn: info.descEn,
                fixZh: info.fixZh,
                fixEn: info.fixEn,
                line: lineNum,
                text: lineText
              });
              continue;
            } else {
              issues.push({
                category: "jvm",
                severity: "high",
                titleZh: "\u6E38\u620F\u9000\u51FA\uFF08\u4EE3\u7801 " + code + "\uFF09",
                titleEn: "Game Exit (Code " + code + ")",
                descZh: "\u6E38\u620F\u8FDB\u7A0B\u9000\u51FA\u7801: " + code,
                descEn: "Game process exit code: " + code,
                fixZh: "\xE9\x80\x80\xE5\x87\xBA\u4EE3\u7801 " + code + "\uFF0C\u8BF7\u6839\u636E\u65E5\u5FD7\u4E2D\u7684\u5176\u4ED6\u9519\u8BEF\u4FE1\u606F\u5B9A\u4F4D\u95EE\u9898\u3002",
                fixEn: "Exit code " + code + ". Check other error messages in the log to identify the issue.",
                line: lineNum,
                text: lineText
              });
              continue;
            }
          }
        }
        issues.push({
          category: p.category,
          severity: p.severity,
          titleZh: p.titleZh,
          titleEn: p.titleEn,
          descZh: p.descZh,
          descEn: p.descEn,
          fixZh: p.fixZh,
          fixEn: p.fixEn,
          line: lineNum,
          text: lineText
        });
        break;
      }
    }
  }
  const order = { critical: 0, high: 1, medium: 2, low: 3 };
  issues.sort((a, b) => {
    const sa = order[a.severity] ?? 9;
    const sb = order[b.severity] ?? 9;
    if (sa !== sb) return sa - sb;
    return a.line - b.line;
  });
  const criticalCount = issues.filter((r) => r.severity === "critical").length;
  const highCount = issues.filter((r) => r.severity === "high").length;
  const medCount = issues.filter((r) => r.severity === "medium").length;
  const lowCount = issues.filter((r) => r.severity === "low").length;
  const total = issues.length;
  const summaryZh = "\u5171 " + total + " \u9879\u95EE\u9898\uFF08\u81F4\u547D " + criticalCount + " \xB7 \u4E25\u91CD " + highCount + " \xB7 \u8B66\u544A " + medCount + " \xB7 \u63D0\u793A " + lowCount + "\uFF09";
  const summaryEn = "Found " + total + " issue(s) (Critical " + criticalCount + " \xB7 High " + highCount + " \xB7 Medium " + medCount + " \xB7 Low " + lowCount + ")";
  return {
    totalLines: lines.length,
    issues,
    criticalCount,
    highCount,
    medCount,
    lowCount,
    summaryZh,
    summaryEn
  };
}

// src/pages/settings-page.tsx
function createSettingsPage(api) {
  const { React } = api;
  const host = api.getHostContext();
  const C = api.ChakraUI;
  return function SettingsPage() {
    const [analysis, setAnalysis] = host.state.useExtensionState("lastAnalysis", null);
    const [logText, setLogText] = React.useState("");
    const [result, setResult] = React.useState(null);
    const [expanded, setExpanded] = React.useState({});
    const [lang, setLangState] = React.useState(getSavedLang());
    const [loading, setLoading] = React.useState(false);
    const [statusText, setStatusText] = React.useState("");
    const fileRef = React.useRef(null);
    const toast = C.useToast();
    const _ = createT(lang);
    React.useEffect(function() {
      if (analysis && !result) setResult(analysis);
    }, []);
    function handleAnalyze() {
      var text = logText.trim();
      if (!text) {
        toast({ title: _("settings.emptyLog"), status: "warning", duration: 2e3 });
        return;
      }
      var r = analyzeLog(text);
      if (!r) {
        toast({ title: _("settings.analysisFail"), status: "error", duration: 2e3 });
        return;
      }
      setResult(r);
      setAnalysis(r);
      setExpanded({});
      if (r.issues.length === 0) {
        toast({ title: _("settings.analysisDone"), description: _("settings.noIssues"), status: "success", duration: 2e3 });
      } else {
        toast({ title: _("settings.analysisDone"), description: r.issues.length + " \u9879\u95EE\u9898", status: r.highCount > 0 ? "warning" : "info", duration: 2e3 });
      }
    }
    function handleFileChange(e) {
      var file = e.target.files?.[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(ev) {
        var text = ev.target?.result;
        if (typeof text === "string") setLogText(text);
      };
      reader.readAsText(file);
      if (fileRef.current) fileRef.current.value = "";
    }
    function toggleExpand(idx) {
      setExpanded(function(prev) {
        var next = {};
        for (var k in prev) next[k] = prev[k];
        next[idx] = !next[idx];
        return next;
      });
    }
    function toggleExpandAll(expand) {
      if (!result) return;
      var map = {};
      if (expand) result.issues.forEach(function(_2, i) {
        map[i] = true;
      });
      setExpanded(map);
    }
    function handleClear() {
      setLogText("");
      setResult(null);
      setAnalysis(null);
      setExpanded({});
    }
    function switchLang(newLang) {
      setLangState(newLang);
      setSavedLang(newLang);
    }
    function sevColor(s) {
      var map = { critical: "red", high: "orange", medium: "yellow", low: "blue" };
      return map[s] || "gray";
    }
    function sevLabel(s) {
      var map = { critical: _("sev.critical"), high: _("sev.high"), medium: _("sev.medium"), low: _("sev.low") };
      return map[s] || s;
    }
    function catLabel(c) {
      var keyMap = {
        memory: "cat.memory",
        mod: "cat.mod",
        net: "cat.net",
        render: "cat.render",
        jvm: "cat.jvm",
        crash: "cat.crash",
        general: "cat.general"
      };
      return _(keyMap[c] || "cat.other");
    }
    function catColor(c) {
      var map = { memory: "red", mod: "red", net: "yellow", render: "orange", jvm: "purple", crash: "red", general: "cyan" };
      return map[c] || "gray";
    }
    return /* @__PURE__ */ api.React.createElement(C.VStack, { align: "stretch", spacing: 4 }, /* @__PURE__ */ api.React.createElement(C.HStack, { justify: "flex-end", align: "center", spacing: 2 }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" }, _("lang.label"), ":"), langOptions().map(function(opt) {
      return /* @__PURE__ */ api.React.createElement(C.Button, { key: opt.value, size: "xs", variant: lang === opt.value ? "solid" : "outline", colorScheme: lang === opt.value ? "blue" : "gray", onClick: function() {
        switchLang(opt.value);
      } }, opt.label);
    })), loading ? /* @__PURE__ */ api.React.createElement(C.Box, { p: 3, bg: "rgba(49,130,206,0.1)", borderRadius: "md", textAlign: "center" }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "sm", color: "blue.200" }, statusText)) : null, /* @__PURE__ */ api.React.createElement(C.Box, null, /* @__PURE__ */ api.React.createElement(C.HStack, { justify: "space-between", align: "center", mb: 2 }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "sm", fontWeight: "bold" }, _("settings.inputLabel")), /* @__PURE__ */ api.React.createElement(C.Button, { size: "xs", variant: "outline", onClick: function() {
      if (fileRef.current) fileRef.current.click();
    } }, _("settings.selectFile"))), /* @__PURE__ */ api.React.createElement("input", { ref: fileRef, type: "file", accept: ".log,.txt", style: { display: "none" }, onChange: handleFileChange }), /* @__PURE__ */ api.React.createElement(
      C.Box,
      {
        as: "textarea",
        value: logText,
        onChange: function(e) {
          setLogText(e.target.value);
        },
        placeholder: _("settings.inputPlaceholder"),
        h: "160px",
        p: 2,
        fontSize: "xs",
        fontFamily: "monospace",
        borderWidth: "1px",
        borderColor: "whiteAlpha.300",
        borderRadius: "md",
        bg: "rgba(0,0,0,0.3)",
        color: "inherit",
        resize: "vertical",
        w: "100%",
        _placeholder: { opacity: 0.4 }
      }
    ), /* @__PURE__ */ api.React.createElement(C.HStack, { spacing: 2, mt: 2 }, /* @__PURE__ */ api.React.createElement(C.Button, { size: "sm", colorScheme: "blue", onClick: handleAnalyze, isDisabled: !logText.trim() }, _("app.analyze")), /* @__PURE__ */ api.React.createElement(C.Button, { size: "sm", variant: "outline", onClick: handleClear }, _("app.clear")))), /* @__PURE__ */ api.React.createElement(C.Divider, null), result ? /* @__PURE__ */ api.React.createElement(C.Box, null, /* @__PURE__ */ api.React.createElement(C.HStack, { justify: "space-between", align: "center", mb: 2 }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "sm", fontWeight: "bold" }, _("settings.result")), /* @__PURE__ */ api.React.createElement(C.HStack, { spacing: 1 }, /* @__PURE__ */ api.React.createElement(C.Button, { size: "xs", variant: "ghost", onClick: function() {
      toggleExpandAll(true);
    } }, _("settings.expandAll")), /* @__PURE__ */ api.React.createElement(C.Button, { size: "xs", variant: "ghost", onClick: function() {
      toggleExpandAll(false);
    } }, _("settings.collapseAll")))), /* @__PURE__ */ api.React.createElement(C.HStack, { spacing: 2, mb: 3, flexWrap: "wrap" }, /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: "red", variant: "solid", fontSize: "xs" }, _("sev.critical") + ": " + result.criticalCount), /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: "orange", variant: "solid", fontSize: "xs" }, _("sev.high") + ": " + result.highCount), /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: "yellow", variant: "solid", fontSize: "xs" }, _("sev.medium") + ": " + result.medCount), /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: "blue", variant: "solid", fontSize: "xs" }, _("sev.low") + ": " + result.lowCount), /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" }, _("settings.totalLines", String(result.totalLines)))), result.issues.length === 0 ? /* @__PURE__ */ api.React.createElement(C.Box, { p: 4, textAlign: "center", borderWidth: "1px", borderColor: "whiteAlpha.200", borderRadius: "md" }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "sm" }, _("settings.noIssues"))) : /* @__PURE__ */ api.React.createElement(C.VStack, { align: "stretch", spacing: 2 }, result.issues.map(function(issue, idx) {
      var isExp = expanded[idx];
      return /* @__PURE__ */ api.React.createElement(C.Box, { key: idx, borderWidth: "1px", borderColor: "whiteAlpha.200", borderRadius: "md", overflow: "hidden" }, /* @__PURE__ */ api.React.createElement(C.Box, { p: 2.5, cursor: "pointer", onClick: function() {
        toggleExpand(idx);
      }, bg: isExp ? "whiteAlpha.50" : "transparent", transition: "background 0.15s" }, /* @__PURE__ */ api.React.createElement(C.HStack, { justify: "space-between", align: "center" }, /* @__PURE__ */ api.React.createElement(C.HStack, { spacing: 2, align: "center" }, /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: sevColor(issue.severity), variant: "solid", fontSize: "2xs", lineHeight: 1.2 }, sevLabel(issue.severity)), /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: catColor(issue.category), variant: "subtle", fontSize: "2xs" }, catLabel(issue.category)), /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "sm", fontWeight: "medium" }, lang === "zh" ? issue.titleZh : issue.titleEn)), /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" }, "#" + issue.line)), isExp ? /* @__PURE__ */ api.React.createElement(C.VStack, { align: "stretch", spacing: 2, mt: 2, pl: 0 }, /* @__PURE__ */ api.React.createElement(C.Box, { bg: "rgba(0,0,0,0.25)", p: 2, borderRadius: "sm" }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", fontFamily: "monospace", lineHeight: 1.5, whiteSpace: "pre-wrap", wordBreak: "break-all" }, issue.text)), (lang === "zh" ? issue.descZh : issue.descEn) ? /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" }, lang === "zh" ? issue.descZh : issue.descEn) : null, (lang === "zh" ? issue.fixZh : issue.fixEn) ? /* @__PURE__ */ api.React.createElement(C.Box, { bg: "rgba(49,130,206,0.1)", borderLeft: "3px solid", borderColor: "blue.400", p: 2, borderRadius: "sm" }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", whiteSpace: "pre-wrap", lineHeight: 1.5, color: "blue.200" }, _("settings.suggestion") + ": " + (lang === "zh" ? issue.fixZh : issue.fixEn))) : null) : null));
    }))) : /* @__PURE__ */ api.React.createElement(C.Box, { p: 4, textAlign: "center", borderWidth: "1px", borderColor: "whiteAlpha.200", borderRadius: "md" }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "sm", className: "secondary-text" }, _("settings.noAnalysis"))), /* @__PURE__ */ api.React.createElement(C.Divider, null), /* @__PURE__ */ api.React.createElement(C.HStack, { justify: "center", spacing: 4 }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" }, "Log Probe v1.0.0"), /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" }, _("version.author"), ": hemekewayoshino")));
  };
}

// src/modals/crash-analyzer.tsx
function createCrashAnalyzer(api) {
  const { React } = api;
  const host = api.getHostContext();
  const C = api.ChakraUI;
  return function CrashAnalyzer(props) {
    const lang = getSavedLang();
    const _ = createT(lang);
    const [logText, setLogText] = React.useState("");
    const [result, setResult] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [statusText, setStatusText] = React.useState("");
    const [instanceInfo, setInstanceInfo] = React.useState("");
    const fileRef = React.useRef(null);
    React.useEffect(function() {
      var ctx = props.params;
      var cl = lang;
      if (ctx && ctx.summary) {
        var si = ctx.summary;
        setInstanceInfo(si.name + " (" + si.version + ", " + (si.modLoader?.loaderType || "Unknown") + ")");
      }
      if (ctx && ctx.launchingId) {
        setStatusText(cl === "zh" ? "\u6B63\u5728\u83B7\u53D6\u6E38\u620F\u65E5\u5FD7..." : "Fetching game log...");
        host.actions.invoke("retrieve_game_log", { launchingId: ctx.launchingId }).then(function(resp) {
          var lines = null;
          if (resp && typeof resp === "object") {
            if (resp.contents && Array.isArray(resp.contents)) lines = resp.contents;
            else if (resp.data && resp.data.contents && Array.isArray(resp.data.contents)) lines = resp.data.contents;
            else if (resp.data && Array.isArray(resp.data)) lines = resp.data;
          }
          if (!lines && Array.isArray(resp)) lines = resp;
          if (!lines && typeof resp === "string" && resp.length > 0) lines = resp.split("\n");
          if (lines && lines.length > 0) {
            var text = lines.join("\n");
            setLogText(text);
            setStatusText(cl === "zh" ? "\u6B63\u5728\u5206\u6790..." : "Analyzing...");
            var r = analyzeLog(text);
            if (r && r.issues.length > 0) {
              setResult(r);
              setStatusText("");
            } else {
              setStatusText(cl === "zh" ? "\u5206\u6790\u5B8C\u6210" : "Analysis done");
            }
          } else {
            var respType = typeof resp;
            var respPreview = "";
            try {
              respPreview = JSON.stringify(resp).substring(0, 200);
            } catch (e) {
            }
            setStatusText(cl === "zh" ? "\u54CD\u5E94\u4E3A\u7A7A(type=" + respType + ", data=" + respPreview + ")\u3002\u53EF\u624B\u52A8\u7C98\u8D34" : "Empty response(type=" + respType + ", data=" + respPreview + "). Paste manually.");
          }
          setLoading(false);
        }).catch(function(err) {
          var errMsg = typeof err === "string" ? err : err && err.message ? err.message : String(err);
          setStatusText(cl === "zh" ? "\u83B7\u53D6\u5931\u8D25: " + errMsg : "Failed: " + errMsg);
          setLoading(false);
        });
      } else {
        setStatusText(cl === "zh" ? "\u6CA1\u6709\u5D29\u6E83\u4E0A\u4E0B\u6587\u4FE1\u606F" : "No crash context");
        setLoading(false);
      }
    }, []);
    function handleAnalyze() {
      var text = logText.trim();
      if (!text) return;
      var r = analyzeLog(text);
      if (r) setResult(r);
    }
    function handleFileChange(e) {
      var file = e.target.files?.[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(ev) {
        var text = ev.target?.result;
        if (typeof text === "string") {
          setLogText(text);
          var r = analyzeLog(text);
          if (r) setResult(r);
        }
      };
      reader.readAsText(file);
      if (fileRef.current) fileRef.current.value = "";
    }
    function sevColor(s) {
      var m = { critical: "red", high: "orange", medium: "yellow", low: "blue" };
      return m[s] || "gray";
    }
    function sevLabel(s) {
      var m = { critical: _("sev.critical"), high: _("sev.high"), medium: _("sev.medium"), low: _("sev.low") };
      return m[s] || s;
    }
    function catLabel(c) {
      var km = { memory: "cat.memory", mod: "cat.mod", net: "cat.net", render: "cat.render", jvm: "cat.jvm", crash: "cat.crash", general: "cat.general" };
      return _(km[c] || "cat.other");
    }
    function catColor(c) {
      var m = { memory: "red", mod: "red", net: "yellow", render: "orange", jvm: "purple", crash: "red", general: "cyan" };
      return m[c] || "gray";
    }
    return /* @__PURE__ */ api.React.createElement(C.VStack, { align: "stretch", spacing: 3, p: 4 }, /* @__PURE__ */ api.React.createElement(C.HStack, { justify: "space-between", align: "center" }, /* @__PURE__ */ api.React.createElement(C.HStack, { spacing: 2 }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "md", fontWeight: "bold" }, _("crash.title")), /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: "red", variant: "subtle", fontSize: "2xs" }, _("crash.quickSummary"))), /* @__PURE__ */ api.React.createElement(C.Button, { size: "xs", variant: "ghost", onClick: props.close }, _("crash.close"))), instanceInfo ? /* @__PURE__ */ api.React.createElement(C.Box, { p: 1.5, bg: "rgba(49,130,206,0.08)", borderRadius: "sm" }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", color: "blue.200" }, instanceInfo)) : null, /* @__PURE__ */ api.React.createElement(C.Divider, null), loading ? /* @__PURE__ */ api.React.createElement(C.Box, { p: 4, textAlign: "center" }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "sm" }, statusText)) : /* @__PURE__ */ api.React.createElement(api.React.Fragment, null, statusText ? /* @__PURE__ */ api.React.createElement(C.Box, { p: 2, bg: "rgba(229,62,62,0.1)", borderRadius: "md" }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", color: "orange.200" }, statusText)) : null, result && result.issues.length > 0 ? /* @__PURE__ */ api.React.createElement(C.Box, null, /* @__PURE__ */ api.React.createElement(C.HStack, { spacing: 2, mb: 2, flexWrap: "wrap" }, /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: "red", variant: "solid", fontSize: "2xs" }, _("sev.critical") + ": " + result.criticalCount), /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: "orange", variant: "solid", fontSize: "2xs" }, _("sev.high") + ": " + result.highCount), /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: "yellow", variant: "solid", fontSize: "2xs" }, _("sev.medium") + ": " + result.medCount), /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: "blue", variant: "solid", fontSize: "2xs" }, _("sev.low") + ": " + result.lowCount), /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" }, _("settings.totalLines", String(result.totalLines)))), /* @__PURE__ */ api.React.createElement(C.VStack, { align: "stretch", spacing: 1, maxH: "240px", overflowY: "auto" }, result.issues.slice(0, 8).map(function(issue, idx) {
      return /* @__PURE__ */ api.React.createElement(C.Box, { key: idx, p: 1.5, bg: "rgba(255,255,255,0.03)", borderRadius: "sm" }, /* @__PURE__ */ api.React.createElement(C.HStack, { spacing: 2, align: "center", mb: 1 }, /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: sevColor(issue.severity), variant: "solid", fontSize: "2xs" }, sevLabel(issue.severity)), /* @__PURE__ */ api.React.createElement(C.Badge, { colorScheme: catColor(issue.category), variant: "subtle", fontSize: "2xs" }, catLabel(issue.category)), /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", fontWeight: "medium", noOfLines: 1 }, lang === "zh" ? issue.titleZh : issue.titleEn)), /* @__PURE__ */ api.React.createElement(C.Box, { bg: "rgba(49,130,206,0.1)", borderLeft: "2px solid", borderColor: "blue.400", p: 1, borderRadius: "sm" }, /* @__PURE__ */ api.React.createElement(C.Text, { fontSize: "xs", whiteSpace: "pre-wrap", lineHeight: 1.4, color: "blue.200" }, _("settings.suggestion") + ": " + (lang === "zh" ? issue.fixZh : issue.fixEn))));
    }))) : /* @__PURE__ */ api.React.createElement(C.Box, null, /* @__PURE__ */ api.React.createElement(
      C.Box,
      {
        as: "textarea",
        value: logText,
        onChange: function(e) {
          setLogText(e.target.value);
        },
        placeholder: lang === "zh" ? "\u7C98\u8D34\u5D29\u6E83\u62A5\u544A\u6216\u65E5\u5FD7\u5185\u5BB9..." : "Paste crash report or log content...",
        h: "120px",
        p: 2,
        fontSize: "xs",
        fontFamily: "monospace",
        borderWidth: "1px",
        borderColor: "whiteAlpha.300",
        borderRadius: "md",
        bg: "rgba(0,0,0,0.3)",
        color: "inherit",
        resize: "vertical",
        w: "100%",
        _placeholder: { opacity: 0.4 }
      }
    ), /* @__PURE__ */ api.React.createElement(C.HStack, { spacing: 2, mt: 2 }, /* @__PURE__ */ api.React.createElement(C.Button, { size: "sm", colorScheme: "blue", onClick: handleAnalyze, isDisabled: !logText.trim() }, _("app.analyze")), /* @__PURE__ */ api.React.createElement(C.Button, { size: "xs", variant: "outline", onClick: function() {
      if (fileRef.current) fileRef.current.click();
    } }, _("settings.selectFile"))), /* @__PURE__ */ api.React.createElement("input", { ref: fileRef, type: "file", accept: ".log,.txt", style: { display: "none" }, onChange: handleFileChange }))));
  };
}

// src/index.ts
function createExtension(api) {
  var host = api.getHostContext();
  return {
    homeWidget: {
      title: "Log Analysis",
      defaultWidth: 320,
      minWidth: 260,
      Component: createHomeWidget(api)
    },
    settingsPage: {
      Component: createSettingsPage(api)
    },
    customModal: {
      key: "crash-analyzer",
      title: "Crash Analyzer",
      size: "lg",
      isCentered: true,
      scrollBehavior: "inside",
      Component: createCrashAnalyzer(api)
    },
    slots: (function() {
      var slotReg = {};
      slotReg["ui.game_error.window_operations"] = {
        getItems: function(context) {
          return [{
            children: "\u76F4\u63A5\u5206\u6790",
            onClick: function() {
              host.actions.openCustomModal("crash-analyzer", {
                launchingId: context.launchingId,
                instanceId: context.instanceId,
                summary: context.summary,
                javaInfo: context.javaInfo
              });
            }
          }];
        }
      };
      return slotReg;
    })()
  };
}
var TOKEN = document.currentScript?.dataset?.extensionToken || "";
if (!TOKEN) throw new Error("Missing extension activation token");
if (typeof window.registerExtension !== "function") throw new Error("SJMCL host is unavailable");
window.registerExtension(function(api) {
  return createExtension(api);
}, TOKEN);

})();