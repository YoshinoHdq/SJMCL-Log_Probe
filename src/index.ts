import type { ExtensionFactoryApi } from "./types/host";
import { ExtensionUISlotKey } from "./types/host";
import { createHomeWidget } from "./widgets/home-widget";
import { createSettingsPage } from "./pages/settings-page";
import { createCrashAnalyzer } from "./modals/crash-analyzer";

function createExtension(api: ExtensionFactoryApi) {
  var host = api.getHostContext();
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
    customModal: {
      key: "crash-analyzer",
      title: "Crash Analyzer",
      size: "lg",
      isCentered: true,
      scrollBehavior: "inside",
      Component: createCrashAnalyzer(api),
    },
    slots: (function () {
      var slotReg: any = {};
      slotReg["ui.game_error.window_operations"] = {
        getItems: function (context: any) {
          return [{
            children: "\u76F4\u63A5\u5206\u6790",
            onClick: function () {
              // Pass ALL context data to the modal — launchingId, instanceId, summary, javaInfo
              host.actions.openCustomModal("crash-analyzer", {
                launchingId: context.launchingId,
                instanceId: context.instanceId,
                summary: context.summary,
                javaInfo: context.javaInfo,
              });
            },
          }];
        },
      };
      return slotReg;
    })(),
  };
}

// Registration
var TOKEN = document.currentScript?.dataset?.extensionToken || "";
if (!TOKEN) throw new Error("Missing extension activation token");
if (typeof window.registerExtension !== "function") throw new Error("SJMCL host is unavailable");
window.registerExtension(function (api) {
  return createExtension(api);
}, TOKEN);
