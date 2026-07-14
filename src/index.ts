import type { ExtensionFactoryApi } from "./types/host";
import { createHomeWidget } from "./widgets/home-widget";
import { createSettingsPage } from "./pages/settings-page";

function createExtension(api: ExtensionFactoryApi) {
  return {
    homeWidget: {
      title: "Log Analysis",
      defaultWidth: 320,
      minWidth: 260,
      Component: createHomeWidget(api),
    },
    settingsPage: {
      Component: createSettingsPage(api),
    },
  };
}

// Registration
var TOKEN = document.currentScript?.dataset?.extensionToken || "";
if (!TOKEN) throw new Error("Missing extension activation token");
if (typeof window.registerExtension !== "function") throw new Error("SJMCL host is unavailable");
window.registerExtension(function (api) {
  return createExtension(api);
}, TOKEN);
