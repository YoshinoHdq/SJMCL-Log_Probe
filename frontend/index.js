(function () {
  var TOKEN = document.currentScript?.dataset?.extensionToken || "";
  if (!TOKEN) throw new Error("Missing extension activation token");

  // ==================== Error Pattern Database ====================

  var PATTERNS = [
    // Memory
    { re: /OutOfMemoryError/i, c: "memory", s: "high", t: "内存不足", d: "Java 堆内存耗尽", fix: "在启动器设置中将最大内存增加到 4096MB 或更高。\n如已分配大内存，请检查是否安装了内存泄漏的模组。" },
    { re: /could not reserve enough space/i, c: "memory", s: "high", t: "内存分配失败", d: "系统无法分配足够的连续内存空间", fix: "关闭其他占用内存的程序后重试。\n或者适当减少分配给 Minecraft 的内存量。" },
    { re: /PermGen/i, c: "memory", s: "medium", t: "永久代空间不足", d: "类加载过多导致方法区溢出", fix: "在 JVM 参数中添加 -XX:MaxMetaspaceSize=256M（高版本 Java）或 -XX:MaxPermSize=256M。" },

    // Mod loading
    { re: /NoClassDefFoundError/i, c: "mod", s: "high", t: "类定义缺失", d: "某个必需的 Java 类在运行时找不到", fix: "某个模组缺少依赖文件。\n检查是否缺少前置模组，或尝试重新安装出问题的模组。" },
    { re: /ClassNotFoundException/i, c: "mod", s: "high", t: "类未找到", d: "模组加载器找不到指定的类", fix: "模组文件可能损坏或版本不兼容。\n尝试更新模组到对应 Minecraft 版本的版本。" },
    { re: /Mixin.*fail|Mixin.*error|mixin.*target/i, c: "mod", s: "high", t: "Mixin 注入失败", d: "模组之间的 Mixin 代码注入冲突", fix: "检查哪些模组修改了同一个游戏类，尝试移除冲突的模组。\n更新所有模组到最新版本。" },
    { re: /ModResolutionException/i, c: "mod", s: "high", t: "模组依赖解析失败", d: "模组缺少前置或版本不兼容", fix: "查看错误详情中提示缺少哪个模组，安装对应版本的前置模组。" },
    { re: /Missing mods/i, c: "mod", s: "high", t: "缺少模组", d: "游戏需要的模组未安装", fix: "根据提示安装缺失的模组及其前置模组。" },
    { re: /DuplicateModsFoundException/i, c: "mod", s: "medium", t: "模组重复", d: "同一个模组被安装了多个版本", fix: "在 mods 文件夹中检查并删除重复的模组文件。" },
    { re: /fml\.loadingtoprogress|net\.minecraftforge\.fml/i, c: "mod", s: "low", t: "Forge 加载信息", d: "Forge 模组加载器相关信息", fix: "若游戏因此启动失败，请检查 Forge 版本是否与 Minecraft 版本匹配。" },
    { re: /fabric.*loader/i, c: "mod", s: "low", t: "Fabric 加载信息", d: "Fabric 模组加载器相关信息", fix: "若游戏因此启动失败，请检查 Fabric Loader 版本。" },

    // Network
    { re: /ConnectException/i, c: "net", s: "medium", t: "连接被拒绝", d: "无法连接到目标服务器", fix: "检查服务器地址是否正确。\n确认服务器是否正在运行。\n检查防火墙是否阻止了连接。" },
    { re: /SocketTimeoutException|connect timed out/i, c: "net", s: "medium", t: "连接超时", d: "连接服务器超时", fix: "检查网络连接是否正常。\n服务器可能离线或网络不稳定。\n尝试切换网络环境（如使用热点）测试。" },
    { re: /UnknownHostException/i, c: "net", s: "medium", t: "域名解析失败", d: "无法解析服务器域名", fix: "检查服务器地址是否拼写正确。\n尝试刷新 DNS 缓存或使用 IP 地址直连。" },
    { re: /SSLException|SSLHandshakeException/i, c: "net", s: "medium", t: "SSL 握手失败", d: "安全连接建立失败", fix: "检查系统时间是否正确。\n更新 Java 到最新版本。" },
    { re: /Connection reset/i, c: "net", s: "low", t: "连接被重置", d: "连接被服务器端主动关闭", fix: "服务器可能重启或主动断开了连接，稍后重试。" },

    // Render / GPU
    { re: /(OpenGL|GLFW)\s.*error/i, c: "render", s: "high", t: "OpenGL / GLFW 错误", d: "图形渲染接口出错", fix: "更新显卡驱动到最新版本。\n尝试关闭光影、OptiFine 等图形增强模组。\n检查 Java 版本是否兼容。" },
    { re: /Pixel format not accelerated/i, c: "render", s: "high", t: "像素格式未加速", d: "显卡不支持硬件加速渲染", fix: "更新显卡驱动。\n如果是虚拟机，请启用 3D 加速。\n在 JVM 参数中添加 -Dsun.java2d.opengl=true。" },
    { re: /GLException|Couldn.t create context/i, c: "render", s: "high", t: "OpenGL 上下文创建失败", d: "显卡不支持所需的 OpenGL 版本", fix: "更新显卡驱动。\nMinecraft 1.17+ 需要 OpenGL 3.2+，检查显卡是否支持。" },
    { re: /Shader.*error|shadow.*error/i, c: "render", s: "medium", t: "着色器错误", d: "光影或材质包着色器编译失败", fix: "更新光影包或尝试其他版本。\n检查显卡驱动是否兼容。" },

    // JVM
    { re: /#\s*Internal Error/i, c: "jvm", s: "high", t: "JVM 内部错误", d: "Java 虚拟机内部错误（可能为 Bug）", fix: "尝试更新 Java 版本。\n如果使用了自定义 JVM 参数，请先恢复默认再试。" },
    { re: /#\s*Native Memory Allocation/i, c: "jvm", s: "high", t: "本地内存分配失败", d: "JVM 底层内存分配失败", fix: "系统可能内存不足，关闭其他程序后重试。\n减少分配给 Minecraft 的内存量。" },
    { re: /StackOverflowError/i, c: "jvm", s: "high", t: "栈溢出", d: "程序进入无限递归调用", fix: "通常由模组 Bug 引起。\n尝试移除最近添加的模组，或者更新模组到最新版本。" },

    // Exit codes
    { re: /Exit code: ([\-0-9]+)/i, c: "jvm", s: "high", t: "游戏异常退出", d: "", fix: "" },
    { re: /Process exited with code ([\-0-9]+)/i, c: "jvm", s: "high", t: "游戏进程异常退出", d: "", fix: "" },

    // Crash reports
    { re: /\-\-\-\-\-\-+\s*$/i, c: "crash", s: "high", t: "崩溃报告", d: "游戏发生严重崩溃生成了崩溃报告", fix: "查看崩溃报告详情，通常是模组冲突或兼容性问题。\n也可以搜索崩溃报告中的关键错误信息。" },

    // General Java exceptions
    { re: /java\.lang\.NullPointerException/i, c: "jvm", s: "high", t: "空指针异常", d: "游戏代码尝试访问空对象", fix: "通常指示模组 Bug。\n尝试更新相关模组或移除有问题的模组。" },
    { re: /java\.lang\.IllegalArgumentException/i, c: "jvm", s: "medium", t: "非法参数", d: "传递给方法的参数不合法", fix: "可能是模组配置错误或模组兼容性问题。" },
    { re: /java\.lang\.ArrayIndexOutOfBoundsException/i, c: "jvm", s: "medium", t: "数组越界", d: "访问了数组不存在的索引", fix: "通常由模组 Bug 引起，更新或移除有问题的模组。" },
    { re: /java\.lang\.ClassCastException/i, c: "jvm", s: "medium", t: "类型转换异常", d: "错误的类型转换", fix: "模组兼容性问题，尝试更新模组。" },
    { re: /java\.util\.concurrent\.ExecutionException/i, c: "jvm", s: "medium", t: "异步执行异常", d: "多线程任务执行出错", fix: "查看异常详情获取更多信息，通常是模组线程安全问题。" },
    { re: /net\.minecraft\.client\.mainThread|Ticking memory connection/i, c: "jvm", s: "low", t: "游戏线程异常", d: "游戏主线程或网络线程出错", fix: "查看具体异常类型，可能是网络问题或模组问题。" },
  ];

  // Categorize exit codes
  var EXIT_CODE_INFO = {
    "-1": { t: "JVM 异常退出", d: "Java 虚拟机自身发生错误", fix: "查看日志中上方的 # Internal Error 或致命错误信息。\n尝试升级 Java 版本。" },
    "0": { t: "正常退出", d: "游戏正常关闭", fix: "无问题" },
    "1": { t: "未知错误退出", d: "游戏因错误退出", fix: "查看日志中的 Exception 和 Error 信息定位具体原因。" },
  };

  // ==================== Analysis Engine ====================

  function analyzeLog(text) {
    if (!text || text.trim().length === 0) return null;

    var lines = text.split(/\n/);
    var results = [];
    var matchedLines = {};

    for (var i = 0; i < PATTERNS.length; i++) {
      var p = PATTERNS[i];
      // Reset lastIndex for global regex
      if (p.re.lastIndex) p.re.lastIndex = 0;

      for (var j = 0; j < lines.length; j++) {
        if (p.re.test(lines[j])) {
          var lineNum = j + 1;
          if (!matchedLines[lineNum]) {
            matchedLines[lineNum] = true;
            var lineText = lines[j].trim();
            if (lineText.length > 200) lineText = lineText.substring(0, 200) + "...";

            // Determine suggestion for exit codes
            var fixText = p.fix;
            var titleText = p.t;
            var descText = p.d;
            if (p.re.source.indexOf("Exit code") >= 0 || p.re.source.indexOf("Process exited") >= 0) {
              var m = p.re.exec(lines[j]);
              if (m) {
                var code = m[1];
                var info = EXIT_CODE_INFO[code];
                if (info) {
                  titleText = info.t;
                  descText = info.d;
                  fixText = info.fix;
                } else if (code === "0") {
                  // Skip exit code 0 (normal)
                  continue;
                } else {
                  titleText = "游戏退出 (代码 " + code + ")";
                  descText = "游戏进程退出码: " + code;
                  fixText = "退出码 " + code + "，请根据日志中的其他错误信息定位问题。";
                }
              }
            }

            results.push({
              category: p.c,
              severity: p.s,
              title: titleText,
              desc: descText,
              fix: fixText,
              line: lineNum,
              text: lineText,
            });
          }
          break; // Only match first pattern per line
        }
      }
    }

    // Sort: high severity first, then by line number
    results.sort(function (a, b) {
      var s = { high: 0, medium: 1, low: 2 };
      var sa = s[a.severity] || 3;
      var sb = s[b.severity] || 3;
      if (sa !== sb) return sa - sb;
      return a.line - b.line;
    });

    return {
      totalLines: lines.length,
      issues: results,
      highCount: results.filter(function (r) { return r.severity === "high"; }).length,
      medCount: results.filter(function (r) { return r.severity === "medium"; }).length,
      lowCount: results.filter(function (r) { return r.severity === "low"; }).length,
    };
  }

  // ==================== Extension Registration ====================

  window.registerExtension(function (api) {
    var React = api.React;
    var C = api.ChakraUI;

    var LABELS = {
      memory: { label: "内存", color: "red" },
      mod: { label: "模组", color: "red" },
      net: { label: "网络", color: "yellow" },
      render: { label: "渲染", color: "orange" },
      jvm: { label: "JVM", color: "purple" },
      crash: { label: "崩溃", color: "red" },
      unknown: { label: "其他", color: "gray" },
    };

    
    // ===== Game Error Window Slot (PR #1800) =====
    var SLOT_KEY = "ui.game_error.window_operations";
    var slotReg = {};
    slotReg[SLOT_KEY] = {
      getItems: function(context) {
        return [{
          children: "直接分析",
          onClick: function() {
            host.actions.navigate(
              "/settings/extension/" + api.identifier + "?fromCrash=1" + "&" + "launchingId=" + context.launchingId
            );
          }
        }];
      }
    };
// ===== Home Widget =====

    function HomeWidget() {
      var host = api.getHostContext();
      var state = host.state.useExtensionState("lastAnalysis", null);
      var analysis = state[0];

      return React.createElement(C.VStack, { align: "stretch", spacing: 3 },
        React.createElement(C.HStack, { justify: "space-between", align: "center" },
          React.createElement(C.Text, { fontSize: "sm", fontWeight: "bold" }, "日志分析"),
          React.createElement(C.Badge, { colorScheme: analysis ? (analysis.highCount > 0 ? "red" : analysis.medCount > 0 ? "yellow" : "green") : "gray", variant: "subtle", fontSize: "xs" },
            analysis ? "发现 " + (analysis.highCount + analysis.medCount + analysis.lowCount) + " 项" : "未分析")
        ),
        React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" },
          analysis
            ? "严重 " + analysis.highCount + " · 警告 " + analysis.medCount + " · 提示 " + analysis.lowCount + "（共 " + analysis.totalLines + " 行）"
            : "尚未进行过日志分析"),
        React.createElement(C.Button, { size: "xs", colorScheme: "blue",
          onClick: function () { host.actions.navigate("/settings/extension/" + api.identifier); }
        }, "打开日志分析")
      );
    }

    // ===== Settings / Analyzer Page =====

    function SettingsPage() {
      var host = api.getHostContext();
      var actions = host.actions;
      var state = host.state.useExtensionState("lastAnalysis", null);
      var analysis = state[0];
      var setAnalysis = state[1];
      var toast = C.useToast();
      var fileRef = React.useRef(null);

      var inputState = React.useState("");
      var logText = inputState[0];
      var setLogText = inputState[1];

      var resultState = React.useState(null);
      var currentResult = resultState[0];
      var setResult = resultState[1];

      var expandState = React.useState({});
      var expanded = expandState[0];
      var setExpanded = expandState[1];

      // Initialize from saved analysis
            // Initialize from saved analysis or crash context
      React.useEffect(function () {
        if (analysis && !currentResult) {
          setResult(analysis);
        }
        try {
          var hostData = api.useHostData();
          var rq = hostData.routeQuery;
          if (rq.fromCrash === "1" && rq.launchingId) {
            var lid = parseInt(rq.launchingId);
            if (lid > 0) {
              host.actions.invoke("retrieve_game_log", { launchingId: lid }).then(function (resp) {
                if (resp && resp.status === "success" && resp.data) {
                  var lt = resp.data.join("\n");
                  setLogText(lt);
                  setAnalysis(null);
                  var result = analyzeLog(lt);
                  if (result) {
                    setResult(result);
                    setAnalysis(result);
                    setExpanded({});
                  }
                }
              }).catch(function () {});
            }
          }
        } catch (e) {}
      }, []);;

      function handlePasteChange(e) {
        setLogText(e.target.value);
      }

      function handleFileClick() {
        if (fileRef.current) fileRef.current.click();
      }

      function handleFileChange(e) {
        var file = e.target.files?.[0];
        if (!file) return;

        var reader = new FileReader();
        reader.onload = function (ev) {
          var text = ev.target?.result;
          if (typeof text === "string") {
            setLogText(text);
            toast({ title: "已加载", description: file.name, status: "info", duration: 2000, position: "bottom-left" });
          }
        };
        reader.readAsText(file);
        if (fileRef.current) fileRef.current.value = "";
      }

      function handleAnalyze() {
        var text = logText.trim();
        if (!text) {
          toast({ title: "没有日志内容", description: "请先粘贴日志或选择日志文件", status: "warning", duration: 3000, position: "bottom-left" });
          return;
        }

        var result = analyzeLog(text);
        if (!result) {
          toast({ title: "分析失败", status: "error", duration: 3000, position: "bottom-left" });
          return;
        }

        setResult(result);
        setAnalysis(result);
        setExpanded({});

        if (result.issues.length === 0) {
          toast({ title: "未发现问题", description: "日志中未识别出常见错误模式", status: "success", duration: 3000, position: "bottom-left" });
        } else {
          toast({ title: "分析完成", description: "发现 " + result.issues.length + " 项问题", status: result.highCount > 0 ? "warning" : "info", duration: 3000, position: "bottom-left" });
        }
      }

      function toggleExpand(idx) {
        var next = {};
        for (var k in expanded) next[k] = expanded[k];
        next[idx] = !next[idx];
        setExpanded(next);
      }

      function handleClear() {
        setLogText("");
        setResult(null);
        setAnalysis(null);
        setExpanded({});
      }

      // Severity badge color
      function sevColor(s) {
        if (s === "high") return "red";
        if (s === "medium") return "yellow";
        return "blue";
      }
      function sevLabel(s) {
        if (s === "high") return "严重";
        if (s === "medium") return "警告";
        return "提示";
      }

      function catLabel(c) {
        var info = LABELS[c];
        return info ? info.label : "其他";
      }
      function catColor(c) {
        var info = LABELS[c];
        return info ? info.color : "gray";
      }

      return React.createElement(C.VStack, { align: "stretch", spacing: 4 },

        // Input section
        React.createElement(C.Box, null,
          React.createElement(C.HStack, { justify: "space-between", align: "center", mb: 3 },
            React.createElement(C.Text, { fontSize: "sm", fontWeight: "bold" }, "输入日志"),
            React.createElement(C.Button, { size: "xs", variant: "outline", onClick: handleFileClick }, "选择日志文件")
          ),
          React.createElement("input", { ref: fileRef, type: "file", accept: ".log,.txt", style: { display: "none" }, onChange: handleFileChange }),
          React.createElement(C.Box, {
            as: "textarea",
            value: logText,
            onChange: handlePasteChange,
            placeholder: "将 latest.log、crash-report 等内容粘贴到这里…",
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
            _placeholder: { opacity: 0.4 },
          }),
          React.createElement(C.HStack, { spacing: 2, mt: 2 },
            React.createElement(C.Button, { size: "sm", colorScheme: "blue", onClick: handleAnalyze, isDisabled: !logText.trim() }, "分析日志"),
            React.createElement(C.Button, { size: "sm", variant: "outline", onClick: handleClear }, "清除")
          )
        ),

        React.createElement(C.Divider, null),

        // Results section
        currentResult
          ? React.createElement(C.Box, null,
              React.createElement(C.Text, { fontSize: "sm", fontWeight: "bold", mb: 3 }, "分析结果"),
              React.createElement(C.VStack, { align: "stretch", spacing: 2, mb: 3 },
                React.createElement(C.HStack, { spacing: 2 },
                  React.createElement(C.Badge, { colorScheme: "red", variant: "solid", fontSize: "xs" }, "严重: " + currentResult.highCount),
                  React.createElement(C.Badge, { colorScheme: "yellow", variant: "solid", fontSize: "xs" }, "警告: " + currentResult.medCount),
                  React.createElement(C.Badge, { colorScheme: "blue", variant: "solid", fontSize: "xs" }, "提示: " + currentResult.lowCount),
                  React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" }, "共 " + currentResult.totalLines + " 行"),
                )
              ),

              // Issue list
              currentResult.issues.length === 0
                ? React.createElement(C.Box, { p: 4, textAlign: "center", borderWidth: "1px", borderColor: "whiteAlpha.200", borderRadius: "md" },
                    React.createElement(C.Text, { fontSize: "sm" }, "未识别出常见错误，日志看起来正常"))
                : React.createElement(C.VStack, { align: "stretch", spacing: 2 },
                    currentResult.issues.map(function (issue, idx) {
                      var isExp = expanded[idx];
                      return React.createElement(C.Box, { key: idx, borderWidth: "1px", borderColor: "whiteAlpha.200", borderRadius: "md", overflow: "hidden" },
                        React.createElement(C.Box, {
                          p: 2.5,
                          cursor: "pointer",
                          onClick: function () { toggleExpand(idx); },
                          bg: isExp ? "whiteAlpha.50" : "transparent",
                          transition: "background 0.15s",
                        },
                          React.createElement(C.HStack, { justify: "space-between", align: "center" },
                            React.createElement(C.HStack, { spacing: 2, align: "center" },
                              React.createElement(C.Badge, { colorScheme: sevColor(issue.severity), variant: "solid", fontSize: "2xs", lineHeight: 1.2 }, sevLabel(issue.severity)),
                              React.createElement(C.Badge, { colorScheme: catColor(issue.category), variant: "subtle", fontSize: "2xs" }, catLabel(issue.category)),
                              React.createElement(C.Text, { fontSize: "sm", fontWeight: "medium" }, issue.title),
                            ),
                            React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" }, "#" + issue.line)
                          ),
                          isExp
                            ? React.createElement(C.VStack, { align: "stretch", spacing: 2, mt: 2, pl: 0 },
                                React.createElement(C.Box, { bg: "rgba(0,0,0,0.25)", p: 2, borderRadius: "sm" },
                                  React.createElement(C.Text, { fontSize: "xs", fontFamily: "monospace", lineHeight: 1.5, whiteSpace: "pre-wrap", wordBreak: "break-all" }, issue.text)),
                                issue.desc
                                  ? React.createElement(C.Text, { fontSize: "xs", className: "secondary-text" }, issue.desc)
                                  : null,
                                issue.fix
                                  ? React.createElement(C.Box, { bg: "rgba(49,130,206,0.1)", borderLeft: "3px solid", borderColor: "blue.400", p: 2, borderRadius: "sm" },
                                      React.createElement(C.Text, { fontSize: "xs", whiteSpace: "pre-wrap", lineHeight: 1.5, color: "blue.200" }, "建议: " + issue.fix))
                                  : null,
                              )
                            : null
                        )
                      );
                    })
                  )
            )
          : React.createElement(C.Box, { p: 4, textAlign: "center", borderWidth: "1px", borderColor: "whiteAlpha.200", borderRadius: "md" },
              React.createElement(C.Text, { fontSize: "sm", className: "secondary-text" }, "在上方粘贴日志或选择文件，然后点击分析"))
      );
    }

    return {
      homeWidget: {
        title: "日志分析",
        defaultWidth: 320,
        minWidth: 260,
        Component: HomeWidget,
      },
      settingsPage: {
        Component: SettingsPage,
      },
      slots: slotReg,
    };
  }, TOKEN);
})();
