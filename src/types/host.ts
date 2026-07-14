export type SetStateAction<T> = T | ((current: T) => T);
export type StateSetter<T> = (value: SetStateAction<T>) => void;
export type ExtensionComponent<TProps = any> = (
  props: TProps,
  ...args: any[]
) => unknown;

export enum ExtensionUISlotKey {
  InstanceWorldItemMenuOperations = "ui.instance.world.item_menu_operations",
  InstanceServerItemMenuOperations = "ui.instance.server.item_menu_operations",
  InstanceModItemMenuOperations = "ui.instance.mod.item_menu_operations",
  InstanceResourcePackItemMenuOperations = "ui.instance.resourcepack.item_menu_operations",
  InstanceServerResPackItemMenuOperations = "ui.instance.server_resourcepack.item_menu_operations",
  InstanceSchematicItemMenuOperations = "ui.instance.schematic.item_menu_operations",
  InstanceShaderPackItemMenuOperations = "ui.instance.shaderpack.item_menu_operations",
  // Crash report window operations (game crash dialog)
  GameErrorWindowOperations = "ui.game_error.window_operations",
}

export type ExtensionSlotKey = ExtensionUISlotKey;

export interface ExtensionFrontend {
  entry: string;
}

export interface ExtensionInfo {
  identifier: string;
  name: string;
  description?: string | null;
  author?: string | null;
  version?: string | null;
  minimalLauncherVersion?: string | null;
  path: string;
  iconSrc: string;
  frontend?: ExtensionFrontend | null;
}

export interface ExtensionAbilityData {
  config: Record<string, unknown>;
  selectedPlayer: { name?: string } | undefined;
  selectedInstance: { name?: string } | undefined;
  playerList: Record<string, unknown>[];
  instanceList: Record<string, unknown>[];
  routeQuery: Record<string, string | string[] | undefined>;
}

export interface ExtensionAbilityActions {
  getPlayerList: (sync?: boolean) => ExtensionAbilityData["playerList"] | undefined;
  getInstanceList: (sync?: boolean) => ExtensionAbilityData["instanceList"] | undefined;
  updateConfig: (path: string, value: any) => void;
  navigate: (route: string) => Promise<void>;
  navBack: () => void;
  openWindow: (route: string, title: string) => void;
  openExternalLink: (url: string) => Promise<void>;
  openSharedModal: (key: string, params?: any) => void;
  openCustomModal: (key: string, params?: any) => void;
  setHomeWidgetTitle: (title: string, key?: string) => void;
  readFile: (path: string, mode?: "string" | "base64") => Promise<string>;
  writeFile: (path: string, content: string, mode?: "string" | "base64") => Promise<void>;
  deleteFile: (path: string) => Promise<void>;
  deleteDirectory: (path: string) => Promise<void>;
  request: (input: URL | Request | string, init?: RequestInit) => Promise<Response>;
  requestText: (url: string, init?: RequestInit, encoding?: string) => Promise<string>;
  invoke: <T = unknown>(command: string, payload?: Record<string, unknown>) => Promise<T>;
  logger: Record<string, (...args: any[]) => void>;
  reloadSelf: () => void;
  updateSelf: (src: string, newVersion: string) => Promise<void>;
}

export interface ExtensionAbilityState {
  useExtensionState: <T>(key: string, initialValue: T) => [T, StateSetter<T>];
}

export interface ExtensionAbilityApi {
  actions: ExtensionAbilityActions;
  state: ExtensionAbilityState;
}

export interface ExtensionFactoryApi {
  React: Record<string, any>;
  ChakraUI: Record<string, any>;
  Components: {
    Editable: ExtensionComponent;
    FormattedMCText: ExtensionComponent;
    MarkdownContainer: ExtensionComponent;
    MenuSelector: ExtensionComponent;
    OptionItem: ExtensionComponent;
    OptionItemGroup: ExtensionComponent;
    Section: ExtensionComponent;
    Segmented: ExtensionComponent;
    WrapCard: ExtensionComponent;
    WrapCardGroup: ExtensionComponent;
  };
  identifier: string;
  resolveAssetUrl: (path: string) => string;
  getHostContext: () => ExtensionAbilityApi;
  useHostData: () => ExtensionAbilityData;
}

interface ExtensionBaseDefinition<TProps = object> {
  Component: ExtensionComponent<TProps>;
}

export interface ExtensionHomeWidgetDefinition extends ExtensionBaseDefinition {
  key?: string;
  title: string;
  description?: string;
  icon?: string;
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
}

export interface ExtensionSettingsPageDefinition extends ExtensionBaseDefinition {}

export interface ExtensionPageDefinition extends ExtensionBaseDefinition {
  routePath: string;
  isStandAlone?: boolean;
}

export interface ExtensionModalComponentProps {
  params?: any;
  close: () => void;
}

export interface ExtensionModalDefinition
  extends ExtensionBaseDefinition<ExtensionModalComponentProps> {
  key: string;
  title: string;
  params?: any;
  [option: string]: unknown;
}

interface ExtensionInstanceSlotContextBase {
  instanceId: string | undefined;
  summary: Record<string, unknown> | undefined;
}

export type ExtensionSlotContextMap = {
  [ExtensionUISlotKey.InstanceWorldItemMenuOperations]: ExtensionInstanceSlotContextBase & {
    save: Record<string, unknown>;
  };
  [ExtensionUISlotKey.InstanceServerItemMenuOperations]: ExtensionInstanceSlotContextBase & {
    server: Record<string, unknown>;
  };
  [ExtensionUISlotKey.InstanceModItemMenuOperations]: ExtensionInstanceSlotContextBase & {
    mod: Record<string, unknown>;
  };
  [ExtensionUISlotKey.InstanceSchematicItemMenuOperations]: ExtensionInstanceSlotContextBase & {
    schematic: Record<string, unknown>;
  };
  [ExtensionUISlotKey.InstanceShaderPackItemMenuOperations]: ExtensionInstanceSlotContextBase & {
    pack: Record<string, unknown>;
  };
  [ExtensionUISlotKey.GameErrorWindowOperations]: {
    launchingId: number;
  };
} & {
  [K in
    | ExtensionUISlotKey.InstanceResourcePackItemMenuOperations
    | ExtensionUISlotKey.InstanceServerResPackItemMenuOperations]: ExtensionInstanceSlotContextBase & {
    pack: Record<string, unknown>;
  };
};

interface CommonIconButtonSlotItem {
  icon: string | any;
  label?: string;
  children?: string | any;
  onClick?: (...args: any[]) => void;
  danger?: boolean;
}

export type ExtensionSlotItemMap = {
  [K in
    | ExtensionUISlotKey.InstanceWorldItemMenuOperations
    | ExtensionUISlotKey.InstanceServerItemMenuOperations
    | ExtensionUISlotKey.InstanceModItemMenuOperations
    | ExtensionUISlotKey.InstanceResourcePackItemMenuOperations
    | ExtensionUISlotKey.InstanceServerResPackItemMenuOperations
    | ExtensionUISlotKey.InstanceSchematicItemMenuOperations
    | ExtensionUISlotKey.InstanceShaderPackItemMenuOperations
    | ExtensionUISlotKey.GameErrorWindowOperations]: CommonIconButtonSlotItem;
};

export interface ExtensionSlotDefinition<K extends ExtensionSlotKey> {
  getItems: (context: ExtensionSlotContextMap[K]) => ExtensionSlotItemMap[K][];
}

export interface ExtensionContributionBase {
  identifier: string;
  resetKey: string;
  extension: ExtensionInfo;
}

export interface ExtensionSlotContribution<K extends ExtensionSlotKey>
  extends ExtensionSlotDefinition<K>, ExtensionContributionBase {
  key: K;
}

export type ExtensionSlotRegistry = Partial<{
  [K in ExtensionSlotKey]: ExtensionSlotDefinition<K>;
}>;

export type ExtensionSlotContributionRegistry = Partial<{
  [K in ExtensionSlotKey]: ExtensionSlotContribution<K>;
}>;

export interface ExtensionContributionRegistration {
  homeWidget?: ExtensionHomeWidgetDefinition;
  homeWidgets?: ExtensionHomeWidgetDefinition[];
  settingsPage?: ExtensionSettingsPageDefinition;
  page?: ExtensionPageDefinition;
  pages?: ExtensionPageDefinition[];
  customModal?: ExtensionModalDefinition;
  customModals?: ExtensionModalDefinition[];
}

export interface ExtensionHomeWidgetContribution
  extends ExtensionHomeWidgetDefinition, ExtensionContributionBase {}

export interface ExtensionSettingsPageContribution
  extends ExtensionSettingsPageDefinition, ExtensionContributionBase {}

export interface ExtensionPageContribution
  extends ExtensionPageDefinition, ExtensionContributionBase {}

export interface ExtensionModalContribution
  extends ExtensionModalDefinition, ExtensionContributionBase {}

export interface ExtensionRegistration extends ExtensionContributionRegistration {
  slots?: ExtensionSlotRegistry;
  dispose?: () => void;
}

export type ExtensionFactory = (
  api: ExtensionFactoryApi
) => ExtensionRegistration | void;

export type HomeWidgetStateTuple = [string, number, boolean];

declare global {
  interface Window {
    registerExtension?: (factory: ExtensionFactory, token: string) => void;
  }
}
