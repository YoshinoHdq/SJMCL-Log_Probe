import type { ExtensionFactoryApi } from "../types/host";
import { getSavedLang, setSavedLang, createT, langOptions } from "../engine/locale";
import { analyzeLog, AnalysisResult, AnalysisIssue } from "../engine/analyzer";

export function createSettingsPage(api: ExtensionFactoryApi) {
  const { React } = api;
  const host = api.getHostContext();
  const C = api.ChakraUI;

  return function SettingsPage() {
    const [analysis, setAnalysis] = host.state.useExtensionState("lastAnalysis", null);
    const [logText, setLogText] = React.useState("");
    const [result, setResult] = React.useState<AnalysisResult | null>(null);
    const [expanded, setExpanded] = React.useState<Record<number, boolean>>({});
    const [lang, setLangState] = React.useState(getSavedLang());
    const [loading, setLoading] = React.useState(false);
    const [statusText, setStatusText] = React.useState("");
    const fileRef = React.useRef<HTMLInputElement>(null);
    const toast = C.useToast();
    const _ = createT(lang);

        // Restore last analysis state
    React.useEffect(function() {
      if (analysis && !result) setResult(analysis);
    }, []);

function handleAnalyze() {
      var text = logText.trim();
      if (!text) {
        toast({ title: _("settings.emptyLog"), status: "warning", duration: 2000 });
        return;
      }
      var r = analyzeLog(text);
      if (!r) {
        toast({ title: _("settings.analysisFail"), status: "error", duration: 2000 });
        return;
      }
      setResult(r);
      setAnalysis(r);
      setExpanded({});
      if (r.issues.length === 0) {
        toast({ title: _("settings.analysisDone"), description: _("settings.noIssues"), status: "success", duration: 2000 });
      } else {
        toast({ title: _("settings.analysisDone"), description: r.issues.length + " \u9879\u95EE\u9898", status: r.highCount > 0 ? "warning" : "info", duration: 2000 });
      }
    }

    function handleFileChange(e: any) {
      var file = e.target.files?.[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev: any) {
        var text = ev.target?.result;
        if (typeof text === "string") setLogText(text);
      };
      reader.readAsText(file);
      if (fileRef.current) fileRef.current.value = "";
    }

    function toggleExpand(idx: number) {
      setExpanded(function (prev: any) { var next: any = {}; for (var k in prev) next[k] = prev[k]; next[idx] = !next[idx]; return next; });
    }

    function toggleExpandAll(expand: boolean) {
      if (!result) return;
      var map: Record<number, boolean> = {};
      if (expand) result.issues.forEach(function (_: any, i: number) { map[i] = true; });
      setExpanded(map);
    }

    function handleClear() {
      setLogText("");
      setResult(null);
      setAnalysis(null);
      setExpanded({});
    }

    function switchLang(newLang: "zh" | "en") {
      setLangState(newLang);
      setSavedLang(newLang);
    }

    function sevColor(s: string) {
      var map: Record<string, string> = { critical: "red", high: "orange", medium: "yellow", low: "blue" };
      return map[s] || "gray";
    }

    function sevLabel(s: string) {
      var map: Record<string, string> = { critical: _("sev.critical"), high: _("sev.high"), medium: _("sev.medium"), low: _("sev.low") };
      return map[s] || s;
    }

    function catLabel(c: string) {
      var keyMap: Record<string, any> = {
        memory: "cat.memory", mod: "cat.mod", net: "cat.net",
        render: "cat.render", jvm: "cat.jvm", crash: "cat.crash", general: "cat.general",
      };
      return _(keyMap[c] || "cat.other");
    }

    function catColor(c: string) {
      var map: Record<string, string> = { memory: "red", mod: "red", net: "yellow", render: "orange", jvm: "purple", crash: "red", general: "cyan" };
      return map[c] || "gray";
    }

    return (
      <C.VStack align="stretch" spacing={4}>
        {/* ===== Language Switch ===== */}
        <C.HStack justify="flex-end" align="center" spacing={2}>
          <C.Text fontSize="xs" className="secondary-text">{_("lang.label")}:</C.Text>
          {langOptions().map(function (opt) { return (
            <C.Button key={opt.value} size="xs" variant={lang === opt.value ? "solid" : "outline"} colorScheme={lang === opt.value ? "blue" : "gray"} onClick={function () { switchLang(opt.value); }}>
              {opt.label}
            </C.Button>
          ); })}
        </C.HStack>

        {/* ===== Loading indicator for crash auto-analysis ===== */}
        {loading ? (
          <C.Box p={3} bg="rgba(49,130,206,0.1)" borderRadius="md" textAlign="center">
            <C.Text fontSize="sm" color="blue.200">{statusText}</C.Text>
          </C.Box>
        ) : null}

        {/* ===== Input Section ===== */}
        <C.Box>
          <C.HStack justify="space-between" align="center" mb={2}>
            <C.Text fontSize="sm" fontWeight="bold">{_("settings.inputLabel")}</C.Text>
            <C.Button size="xs" variant="outline" onClick={function () { if (fileRef.current) fileRef.current.click(); }}>
              {_("settings.selectFile")}
            </C.Button>
          </C.HStack>
          <input ref={fileRef} type="file" accept=".log,.txt" style={{ display: "none" }} onChange={handleFileChange} />
          <C.Box
            as="textarea"
            value={logText}
            onChange={function (e: any) { setLogText(e.target.value); }}
            placeholder={_("settings.inputPlaceholder")}
            h="160px" p={2} fontSize="xs" fontFamily="monospace"
            borderWidth="1px" borderColor="whiteAlpha.300" borderRadius="md"
            bg="rgba(0,0,0,0.3)" color="inherit" resize="vertical" w="100%"
            _placeholder={{ opacity: 0.4 }}
          />
          <C.HStack spacing={2} mt={2}>
            <C.Button size="sm" colorScheme="blue" onClick={handleAnalyze} isDisabled={!logText.trim()}>
              {_("app.analyze")}
            </C.Button>
            <C.Button size="sm" variant="outline" onClick={handleClear}>
              {_("app.clear")}
            </C.Button>
          </C.HStack>
        </C.Box>

        <C.Divider />

        {/* ===== Results Section ===== */}
        {result ? (
          <C.Box>
            <C.HStack justify="space-between" align="center" mb={2}>
              <C.Text fontSize="sm" fontWeight="bold">{_("settings.result")}</C.Text>
              <C.HStack spacing={1}>
                <C.Button size="xs" variant="ghost" onClick={function () { toggleExpandAll(true); }}>{_("settings.expandAll")}</C.Button>
                <C.Button size="xs" variant="ghost" onClick={function () { toggleExpandAll(false); }}>{_("settings.collapseAll")}</C.Button>
              </C.HStack>
            </C.HStack>

            <C.HStack spacing={2} mb={3} flexWrap="wrap">
              <C.Badge colorScheme="red" variant="solid" fontSize="xs">{_("sev.critical") + ": " + result.criticalCount}</C.Badge>
              <C.Badge colorScheme="orange" variant="solid" fontSize="xs">{_("sev.high") + ": " + result.highCount}</C.Badge>
              <C.Badge colorScheme="yellow" variant="solid" fontSize="xs">{_("sev.medium") + ": " + result.medCount}</C.Badge>
              <C.Badge colorScheme="blue" variant="solid" fontSize="xs">{_("sev.low") + ": " + result.lowCount}</C.Badge>
              <C.Text fontSize="xs" className="secondary-text">{_("settings.totalLines", String(result.totalLines))}</C.Text>
            </C.HStack>

            {result.issues.length === 0 ? (
              <C.Box p={4} textAlign="center" borderWidth="1px" borderColor="whiteAlpha.200" borderRadius="md">
                <C.Text fontSize="sm">{_("settings.noIssues")}</C.Text>
              </C.Box>
            ) : (
              <C.VStack align="stretch" spacing={2}>
                {result.issues.map(function (issue, idx) {
                  var isExp = expanded[idx];
                  return (
                    <C.Box key={idx} borderWidth="1px" borderColor="whiteAlpha.200" borderRadius="md" overflow="hidden">
                      <C.Box p={2.5} cursor="pointer" onClick={function () { toggleExpand(idx); }} bg={isExp ? "whiteAlpha.50" : "transparent"} transition="background 0.15s">
                        <C.HStack justify="space-between" align="center">
                          <C.HStack spacing={2} align="center">
                            <C.Badge colorScheme={sevColor(issue.severity)} variant="solid" fontSize="2xs" lineHeight={1.2}>{sevLabel(issue.severity)}</C.Badge>
                            <C.Badge colorScheme={catColor(issue.category)} variant="subtle" fontSize="2xs">{catLabel(issue.category)}</C.Badge>
                            <C.Text fontSize="sm" fontWeight="medium">{lang === "zh" ? issue.titleZh : issue.titleEn}</C.Text>
                          </C.HStack>
                          <C.Text fontSize="xs" className="secondary-text">{"#" + issue.line}</C.Text>
                        </C.HStack>
                        {isExp ? (
                          <C.VStack align="stretch" spacing={2} mt={2} pl={0}>
                            <C.Box bg="rgba(0,0,0,0.25)" p={2} borderRadius="sm">
                              <C.Text fontSize="xs" fontFamily="monospace" lineHeight={1.5} whiteSpace="pre-wrap" wordBreak="break-all">{issue.text}</C.Text>
                            </C.Box>
                            {(lang === "zh" ? issue.descZh : issue.descEn) ? (
                              <C.Text fontSize="xs" className="secondary-text">{lang === "zh" ? issue.descZh : issue.descEn}</C.Text>
                            ) : null}
                            {(lang === "zh" ? issue.fixZh : issue.fixEn) ? (
                              <C.Box bg="rgba(49,130,206,0.1)" borderLeft="3px solid" borderColor="blue.400" p={2} borderRadius="sm">
                                <C.Text fontSize="xs" whiteSpace="pre-wrap" lineHeight={1.5} color="blue.200">{_("settings.suggestion") + ": " + (lang === "zh" ? issue.fixZh : issue.fixEn)}</C.Text>
                              </C.Box>
                            ) : null}
                          </C.VStack>
                        ) : null}
                      </C.Box>
                    </C.Box>
                  );
                })}
              </C.VStack>
            )}
          </C.Box>
        ) : (
          <C.Box p={4} textAlign="center" borderWidth="1px" borderColor="whiteAlpha.200" borderRadius="md">
            <C.Text fontSize="sm" className="secondary-text">{_("settings.noAnalysis")}</C.Text>
          </C.Box>
        )}

        {/* ===== Version / About ===== */}
        <C.Divider />
        <C.HStack justify="center" spacing={4}>
          <C.Text fontSize="xs" className="secondary-text">Log Probe v1.0.0</C.Text>
          <C.Text fontSize="xs" className="secondary-text">{_("version.author")}: hemekewayoshino</C.Text>
        </C.HStack>
      </C.VStack>
    );
  };
}
