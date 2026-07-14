import type { ExtensionFactoryApi } from "../types/host";
import { getSavedLang, createT, t } from "../engine/locale";
import { analyzeLog, AnalysisResult } from "../engine/analyzer";

export function createCrashAnalyzer(api: ExtensionFactoryApi) {
  const { React } = api;
  const host = api.getHostContext();
  const C = api.ChakraUI;

  return function CrashAnalyzer(props: { params?: any; close: () => void }) {
    const lang = getSavedLang();
    const _ = createT(lang);
    const [logText, setLogText] = React.useState("");
    const [result, setResult] = React.useState<AnalysisResult | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [statusText, setStatusText] = React.useState("");
    const [instanceInfo, setInstanceInfo] = React.useState("");
    const fileRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(function () {
      var ctx = props.params;
      var cl = lang;
      if (ctx && ctx.summary) {
        var si = ctx.summary;
        setInstanceInfo(si.name + " (" + si.version + ", " + (si.modLoader?.loaderType || "Unknown") + ")");
      }
      if (ctx && ctx.launchingId) {
        setStatusText(cl === "zh" ? "正在获取游戏日志..." : "Fetching game log...");
        host.actions.invoke("retrieve_game_log", { launchingId: ctx.launchingId })
          .then(function (resp: any) {
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
              setStatusText(cl === "zh" ? "正在分析..." : "Analyzing...");
              var r = analyzeLog(text);
              if (r && r.issues.length > 0) { setResult(r); setStatusText(""); }
              else { setStatusText(cl === "zh" ? "分析完成" : "Analysis done"); }
            } else {
              var respType = typeof resp;
              var respPreview = "";
              try { respPreview = JSON.stringify(resp).substring(0, 200); } catch(e) {}
              setStatusText(cl === "zh"
                ? "响应为空(type=" + respType + ", data=" + respPreview + ")。可手动粘贴"
                : "Empty response(type=" + respType + ", data=" + respPreview + "). Paste manually.");
            }
            setLoading(false);
          })
          .catch(function (err: any) {
            var errMsg = typeof err === "string" ? err : (err && err.message ? err.message : String(err));
            setStatusText(cl === "zh" ? "获取失败: " + errMsg : "Failed: " + errMsg);
            setLoading(false);
          });
      } else {
        setStatusText(cl === "zh" ? "没有崩溃上下文信息" : "No crash context");
        setLoading(false);
      }
    }, []);

    function handleAnalyze() {
      var text = logText.trim();
      if (!text) return;
      var r = analyzeLog(text);
      if (r) setResult(r);
    }

    function handleFileChange(e: any) {
      var file = e.target.files?.[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev: any) {
        var text = ev.target?.result;
        if (typeof text === "string") { setLogText(text); var r = analyzeLog(text); if (r) setResult(r); }
      };
      reader.readAsText(file);
      if (fileRef.current) fileRef.current.value = "";
    }

    

    function sevColor(s: string) { var m: any = {critical:"red",high:"orange",medium:"yellow",low:"blue"}; return m[s] || "gray"; }
    function sevLabel(s: string) { var m: any = {critical:_("sev.critical"),high:_("sev.high"),medium:_("sev.medium"),low:_("sev.low")}; return m[s] || s; }
    function catLabel(c: string) { var km: any = {memory:"cat.memory",mod:"cat.mod",net:"cat.net",render:"cat.render",jvm:"cat.jvm",crash:"cat.crash",general:"cat.general"}; return _(km[c] || "cat.other"); }
    function catColor(c: string) { var m: any = {memory:"red",mod:"red",net:"yellow",render:"orange",jvm:"purple",crash:"red",general:"cyan"}; return m[c] || "gray"; }

    return (
      <C.VStack align="stretch" spacing={3} p={4}>
        <C.HStack justify="space-between" align="center">
          <C.HStack spacing={2}>
            <C.Text fontSize="md" fontWeight="bold">{_("crash.title")}</C.Text>
            <C.Badge colorScheme="red" variant="subtle" fontSize="2xs">{_("crash.quickSummary")}</C.Badge>
          </C.HStack>
          <C.Button size="xs" variant="ghost" onClick={props.close}>{_("crash.close")}</C.Button>
        </C.HStack>
        {instanceInfo ? <C.Box p={1.5} bg="rgba(49,130,206,0.08)" borderRadius="sm"><C.Text fontSize="xs" color="blue.200">{instanceInfo}</C.Text></C.Box> : null}
        <C.Divider />
        {loading ? <C.Box p={4} textAlign="center"><C.Text fontSize="sm">{statusText}</C.Text></C.Box> : (
          <>
            {statusText ? <C.Box p={2} bg="rgba(229,62,62,0.1)" borderRadius="md"><C.Text fontSize="xs" color="orange.200">{statusText}</C.Text></C.Box> : null}
            {result && result.issues.length > 0 ? (
              <C.Box>
                <C.HStack spacing={2} mb={2} flexWrap="wrap">
                  <C.Badge colorScheme="red" variant="solid" fontSize="2xs">{_("sev.critical") + ": " + result.criticalCount}</C.Badge>
                  <C.Badge colorScheme="orange" variant="solid" fontSize="2xs">{_("sev.high") + ": " + result.highCount}</C.Badge>
                  <C.Badge colorScheme="yellow" variant="solid" fontSize="2xs">{_("sev.medium") + ": " + result.medCount}</C.Badge>
                  <C.Badge colorScheme="blue" variant="solid" fontSize="2xs">{_("sev.low") + ": " + result.lowCount}</C.Badge>
                  <C.Text fontSize="xs" className="secondary-text">{_("settings.totalLines", String(result.totalLines))}</C.Text>
                </C.HStack>
                <C.VStack align="stretch" spacing={1} maxH="240px" overflowY="auto">
                  {result.issues.slice(0, 8).map(function (issue, idx) {
                    return (
                      <C.Box key={idx} p={1.5} bg="rgba(255,255,255,0.03)" borderRadius="sm">
                        <C.HStack spacing={2} align="center" mb={1}>
                          <C.Badge colorScheme={sevColor(issue.severity)} variant="solid" fontSize="2xs">{sevLabel(issue.severity)}</C.Badge>
                          <C.Badge colorScheme={catColor(issue.category)} variant="subtle" fontSize="2xs">{catLabel(issue.category)}</C.Badge>
                          <C.Text fontSize="xs" fontWeight="medium" noOfLines={1}>{lang === "zh" ? issue.titleZh : issue.titleEn}</C.Text>
                        </C.HStack>
                        <C.Box bg="rgba(49,130,206,0.1)" borderLeft="2px solid" borderColor="blue.400" p={1} borderRadius="sm">
                          <C.Text fontSize="xs" whiteSpace="pre-wrap" lineHeight={1.4} color="blue.200">{_("settings.suggestion") + ": " + (lang === "zh" ? issue.fixZh : issue.fixEn)}</C.Text>
                        </C.Box>
                      </C.Box>
                    );
                  })}
                </C.VStack>
              </C.Box>
            ) : (
              <C.Box>
                <C.Box as="textarea" value={logText} onChange={function(e:any){setLogText(e.target.value)}}
                  placeholder={lang === "zh" ? "粘贴崩溃报告或日志内容..." : "Paste crash report or log content..."}
                  h="120px" p={2} fontSize="xs" fontFamily="monospace" borderWidth="1px" borderColor="whiteAlpha.300"
                  borderRadius="md" bg="rgba(0,0,0,0.3)" color="inherit" resize="vertical" w="100%" _placeholder={{ opacity: 0.4 }} />
                <C.HStack spacing={2} mt={2}>
                  <C.Button size="sm" colorScheme="blue" onClick={handleAnalyze} isDisabled={!logText.trim()}>{_("app.analyze")}</C.Button>
                  <C.Button size="xs" variant="outline" onClick={function(){if(fileRef.current)fileRef.current.click()}}>{_("settings.selectFile")}</C.Button>
                </C.HStack>
                <input ref={fileRef} type="file" accept=".log,.txt" style={{display:"none"}} onChange={handleFileChange} />
              </C.Box>
            )}

          </>
        )}
      </C.VStack>
    );
  };
}