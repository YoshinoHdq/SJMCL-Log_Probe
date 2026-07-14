import type { ExtensionFactoryApi } from "../types/host";
import { getSavedLang, createT, t } from "../engine/locale";

export function createHomeWidget(api: ExtensionFactoryApi) {
  const { React } = api;
  const host = api.getHostContext();

  return function HomeWidget() {
    const [analysis] = host.state.useExtensionState("lastAnalysis", null);
    const lang = getSavedLang();
    const _ = createT(lang);

    const boxStyle = { p: 3, borderRadius: "md", bg: "rgba(8,12,24,0.6)", border: "1px solid rgba(255,255,255,0.08)" };

    return (
      <api.ChakraUI.VStack align="stretch" spacing={3}>
        <api.ChakraUI.HStack justify="space-between" align="center">
          <api.ChakraUI.Text fontSize="sm" fontWeight="bold">
            {_("widget.title")}
          </api.ChakraUI.Text>
          <api.ChakraUI.Badge
            colorScheme={analysis ? (analysis.highCount > 0 ? "red" : analysis.medCount > 0 ? "yellow" : "green") : "gray"}
            variant="subtle" fontSize="xs"
          >
            {analysis ? _("widget.found") + " " + (analysis.highCount + analysis.medCount + analysis.lowCount) + " \u9879" : _("widget.none")}
          </api.ChakraUI.Badge>
        </api.ChakraUI.HStack>

        <api.ChakraUI.Text fontSize="xs" className="secondary-text">
          {analysis
            ? _("widget.summary", String(analysis.highCount), String(analysis.medCount), String(analysis.lowCount), String(analysis.totalLines))
            : ""}
        </api.ChakraUI.Text>

        {analysis && analysis.criticalCount > 0 && (
          <api.ChakraUI.Box p={1.5} bg="rgba(229,62,62,0.15)" borderLeft="3px solid" borderColor="red.400" borderRadius="sm">
            <api.ChakraUI.Text fontSize="xs" color="red.200" fontWeight="medium">
              {"\u81F4\u547D: " + analysis.criticalCount + " \u9879"}
            </api.ChakraUI.Text>
          </api.ChakraUI.Box>
        )}

        <api.ChakraUI.Button size="xs" colorScheme="blue" onClick={() => host.actions.navigate("/settings/extension/" + api.identifier)}>
          {_("widget.open")}
        </api.ChakraUI.Button>
      </api.ChakraUI.VStack>
    );
  };
}
