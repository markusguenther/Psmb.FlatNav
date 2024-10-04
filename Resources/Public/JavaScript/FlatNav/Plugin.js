(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js
  var init_manifest = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js
  var init_createConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"() {
      init_manifest();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js
  var init_AbstractRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"() {
    }
  });

  // node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js
  var init_positionalArraySorter = __esm({
    "node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js
  var init_SynchronousRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"() {
      init_AbstractRegistry();
      init_positionalArraySorter();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js
  var init_SynchronousMetaRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"() {
      init_SynchronousRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js
  var init_registry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js"() {
      init_SynchronousRegistry();
      init_SynchronousMetaRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default;
  var init_dist = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/index.js"() {
      init_createConsumerApi();
      init_readFromConsumerApi();
      init_registry();
      dist_default = readFromConsumerApi("manifest");
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js
  var require_react_redux = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactRedux;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-backend-connector/index.js
  var neos_ui_backend_connector_default, fetchWithErrorHandling;
  var init_neos_ui_backend_connector = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-backend-connector/index.js"() {
      init_readFromConsumerApi();
      neos_ui_backend_connector_default = readFromConsumerApi("NeosProjectPackages")().NeosUiBackendConnectorDefault;
      ({ fetchWithErrorHandling } = readFromConsumerApi("NeosProjectPackages")().NeosUiBackendConnector);
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // src/HideSelectedNode.js
  var import_react, import_prop_types, import_react_redux, import_neos_ui_decorators, import_react_ui_components, import_neos_ui_redux_store, HideSelectedNode;
  var init_HideSelectedNode = __esm({
    "src/HideSelectedNode.js"() {
      import_react = __toESM(require_react());
      import_prop_types = __toESM(require_prop_types());
      import_react_redux = __toESM(require_react_redux());
      import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
      import_react_ui_components = __toESM(require_react_ui_components());
      import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
      HideSelectedNode = class extends import_react.PureComponent {
        constructor() {
          super(...arguments);
          this.handleHideNode = () => {
            const { node: node2, hideNode } = this.props;
            hideNode(node2?.contextPath);
          };
          this.handleShowNode = () => {
            const { node: node2, showNode } = this.props;
            showNode(node2?.contextPath);
          };
        }
        render() {
          const { className, disabled, node: node2, i18nRegistry } = this.props;
          const isHidden = node2?.properties?._hidden;
          return /* @__PURE__ */ import_react.default.createElement(
            import_react_ui_components.IconButton,
            {
              className,
              disabled,
              isActive: isHidden,
              onClick: isHidden ? this.handleShowNode : this.handleHideNode,
              icon: "eye-slash",
              hoverStyle: "clean",
              title: i18nRegistry.translate("hideUnhide")
            }
          );
        }
      };
      HideSelectedNode.propTypes = {
        node: import_prop_types.default.object,
        className: import_prop_types.default.string,
        hideNode: import_prop_types.default.func.isRequired,
        showNode: import_prop_types.default.func.isRequired,
        disabled: import_prop_types.default.bool.isRequired,
        i18nRegistry: import_prop_types.default.object.isRequired
      };
      HideSelectedNode = __decorateClass([
        (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
          i18nRegistry: globalRegistry.get("i18n")
        })),
        (0, import_react_redux.connect)((state) => ({
          node: import_neos_ui_redux_store.selectors.CR.Nodes.focusedSelector(state)
        }), {
          hideNode: import_neos_ui_redux_store.actions.CR.Nodes.hide,
          showNode: import_neos_ui_redux_store.actions.CR.Nodes.show
        })
      ], HideSelectedNode);
    }
  });

  // src/DeleteSelectedNode.js
  var import_react2, import_prop_types2, import_react_redux2, import_neos_ui_decorators2, import_react_ui_components2, import_neos_ui_redux_store2, DeleteSelectedNode;
  var init_DeleteSelectedNode = __esm({
    "src/DeleteSelectedNode.js"() {
      import_react2 = __toESM(require_react());
      import_prop_types2 = __toESM(require_prop_types());
      import_react_redux2 = __toESM(require_react_redux());
      import_neos_ui_decorators2 = __toESM(require_neos_ui_decorators());
      import_react_ui_components2 = __toESM(require_react_ui_components());
      import_neos_ui_redux_store2 = __toESM(require_neos_ui_redux_store());
      DeleteSelectedNode = class extends import_react2.PureComponent {
        constructor() {
          super(...arguments);
          this.handleDeleteSelectedNodeClick = () => {
            const { node: node2, commenceNodeRemoval } = this.props;
            commenceNodeRemoval(node2?.contextPath);
          };
        }
        render() {
          const { className, disabled, i18nRegistry } = this.props;
          return /* @__PURE__ */ import_react2.default.createElement(
            import_react_ui_components2.IconButton,
            {
              className,
              disabled,
              onClick: this.handleDeleteSelectedNodeClick,
              icon: "trash",
              hoverStyle: "clean",
              title: i18nRegistry.translate("delete")
            }
          );
        }
      };
      DeleteSelectedNode.propTypes = {
        node: import_prop_types2.default.object,
        className: import_prop_types2.default.string,
        commenceNodeRemoval: import_prop_types2.default.func.isRequired,
        disabled: import_prop_types2.default.bool.isRequired,
        i18nRegistry: import_prop_types2.default.object.isRequired
      };
      DeleteSelectedNode = __decorateClass([
        (0, import_neos_ui_decorators2.neos)((globalRegistry) => ({
          i18nRegistry: globalRegistry.get("i18n")
        })),
        (0, import_react_redux2.connect)((state) => ({
          node: import_neos_ui_redux_store2.selectors.CR.Nodes.focusedSelector(state)
        }), {
          commenceNodeRemoval: import_neos_ui_redux_store2.actions.CR.Nodes.commenceRemoval
        })
      ], DeleteSelectedNode);
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/classnames/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().classnames;
    }
  });

  // esbuild-css-modules-plugin-ns-css:src/style.modules.css
  var init_ = __esm({
    "esbuild-css-modules-plugin-ns-css:src/style.modules.css"() {
    }
  });

  // src/style.modules.css
  var baseIcon, loadMoreButton, node, nodeDirty, nodeFocused, nodeIconWrapper, nodeLabel, nodeRemoved, pageTreeContainer, pageTreeToolbarOriginal, panel, tabsContent, tabsPanel, toolbar, toolbarButtons, toolbarSearch, toolbarSearchClearButton, toolbarSearchInput, toolbarSearchNoResults, treeWrapper, style_modules_default;
  var init_style_modules = __esm({
    "src/style.modules.css"() {
      init_();
      baseIcon = "style-modules__baseIcon_gGud6a__";
      loadMoreButton = "style-modules__loadMoreButton_gGud6a__";
      node = "style-modules__node_gGud6a__";
      nodeDirty = "style-modules__nodeDirty_gGud6a__";
      nodeFocused = "style-modules__nodeFocused_gGud6a__";
      nodeIconWrapper = "style-modules__nodeIconWrapper_gGud6a__";
      nodeLabel = "style-modules__nodeLabel_gGud6a__";
      nodeRemoved = "style-modules__nodeRemoved_gGud6a__";
      pageTreeContainer = "style-modules__pageTreeContainer_gGud6a__";
      pageTreeToolbarOriginal = "style-modules__pageTreeToolbarOriginal_gGud6a__";
      panel = "style-modules__panel_gGud6a__";
      tabsContent = "style-modules__tabsContent_gGud6a__";
      tabsPanel = "style-modules__tabsPanel_gGud6a__";
      toolbar = "style-modules__toolbar_gGud6a__";
      toolbarButtons = "style-modules__toolbarButtons_gGud6a__";
      toolbarSearch = "style-modules__toolbarSearch_gGud6a__";
      toolbarSearchClearButton = "style-modules__toolbarSearchClearButton_gGud6a__";
      toolbarSearchInput = "style-modules__toolbarSearchInput_gGud6a__";
      toolbarSearchNoResults = "style-modules__toolbarSearchNoResults_gGud6a__";
      treeWrapper = "style-modules__treeWrapper_gGud6a__";
      style_modules_default = {
        "baseIcon": baseIcon,
        "loadMoreButton": loadMoreButton,
        "node": node,
        "nodeDirty": nodeDirty,
        "nodeFocused": nodeFocused,
        "nodeIconWrapper": nodeIconWrapper,
        "nodeLabel": nodeLabel,
        "nodeRemoved": nodeRemoved,
        "pageTreeContainer": pageTreeContainer,
        "pageTreeToolbarOriginal": pageTreeToolbarOriginal,
        "panel": panel,
        "tabsContent": tabsContent,
        "tabsPanel": tabsPanel,
        "toolbar": toolbar,
        "toolbarButtons": toolbarButtons,
        "toolbarSearch": toolbarSearch,
        "toolbarSearchClearButton": toolbarSearchClearButton,
        "toolbarSearchInput": toolbarSearchInput,
        "toolbarSearchNoResults": toolbarSearchNoResults,
        "treeWrapper": treeWrapper
      };
    }
  });

  // src/RefreshNodes.js
  var import_react3, import_prop_types3, import_classnames, import_neos_ui_decorators3, import_react_ui_components3, RefreshNodes;
  var init_RefreshNodes = __esm({
    "src/RefreshNodes.js"() {
      import_react3 = __toESM(require_react());
      import_prop_types3 = __toESM(require_prop_types());
      import_classnames = __toESM(require_classnames());
      import_neos_ui_decorators3 = __toESM(require_neos_ui_decorators());
      import_react_ui_components3 = __toESM(require_react_ui_components());
      RefreshNodes = class extends import_react3.PureComponent {
        constructor() {
          super(...arguments);
          this.handleClick = () => {
            const { onClick } = this.props;
            onClick();
          };
        }
        render() {
          const { disabled, className, i18nRegistry } = this.props;
          const finalClassName = (0, import_classnames.default)({
            [className]: className && className.length
          });
          return /* @__PURE__ */ import_react3.default.createElement(
            import_react_ui_components3.IconButton,
            {
              className: finalClassName,
              disabled,
              onClick: this.handleClick,
              icon: "sync",
              hoverStyle: "brand",
              title: i18nRegistry.translate("refresh")
            }
          );
        }
      };
      RefreshNodes.propTypes = {
        node: import_prop_types3.default.object,
        className: import_prop_types3.default.string,
        onClick: import_prop_types3.default.func.isRequired,
        disabled: import_prop_types3.default.bool.isRequired,
        i18nRegistry: import_prop_types3.default.object.isRequired
      };
      RefreshNodes = __decorateClass([
        (0, import_neos_ui_decorators3.neos)((globalRegistry) => ({
          i18nRegistry: globalRegistry.get("i18n")
        }))
      ], RefreshNodes);
    }
  });

  // src/SearchInput.js
  var import_react4, import_react_ui_components4, SearchInput, SearchInput_default;
  var init_SearchInput = __esm({
    "src/SearchInput.js"() {
      import_react4 = __toESM(require_react());
      init_style_modules();
      import_react_ui_components4 = __toESM(require_react_ui_components());
      SearchInput = ({ onChange, searchTerm, placeholder }) => {
        const onEnterKey = () => onChange(searchTerm);
        return /* @__PURE__ */ import_react4.default.createElement("div", { className: style_modules_default.toolbarSearch }, /* @__PURE__ */ import_react4.default.createElement(import_react_ui_components4.TextInput, { className: style_modules_default.toolbarSearchInput, value: searchTerm, placeholder, onChange, onEnterKey }), searchTerm ? /* @__PURE__ */ import_react4.default.createElement(import_react_ui_components4.IconButton, { icon: "times", onClick: () => onChange(""), className: style_modules_default.toolbarSearchClearButton }) : null);
      };
      SearchInput_default = SearchInput;
    }
  });

  // src/FlatNav.js
  var import_react5, import_prop_types4, import_react_ui_components5, import_react_redux3, import_neos_ui_redux_store3, import_neos_ui_decorators4, import_classnames2, FlatNav;
  var init_FlatNav = __esm({
    "src/FlatNav.js"() {
      import_react5 = __toESM(require_react());
      import_prop_types4 = __toESM(require_prop_types());
      import_react_ui_components5 = __toESM(require_react_ui_components());
      import_react_redux3 = __toESM(require_react_redux());
      import_neos_ui_redux_store3 = __toESM(require_neos_ui_redux_store());
      import_neos_ui_decorators4 = __toESM(require_neos_ui_decorators());
      init_HideSelectedNode();
      init_DeleteSelectedNode();
      import_classnames2 = __toESM(require_classnames());
      init_style_modules();
      init_RefreshNodes();
      init_SearchInput();
      FlatNav = class extends import_react5.Component {
        constructor() {
          super(...arguments);
          this.handleNodeWasCreated = (feedbackPayload, { store }) => {
            const state = store.getState();
            const getNodeByContextPathSelector = import_neos_ui_redux_store3.selectors.CR.Nodes.makeGetNodeByContextPathSelector(feedbackPayload.contextPath);
            const node2 = getNodeByContextPathSelector(state);
            const nodeTypeName = node2?.nodeType;
            if (nodeTypeName === this.props.preset.newNodeType) {
              this.refreshFlatNav();
            }
          };
          this.buildNewReferenceNodePath = () => {
            const context = this.props.siteNodeContextPath.split("@")[1];
            return this.props.newReferenceNodePath + "@" + context;
          };
          this.createNode = () => {
            const contextPath = this.buildNewReferenceNodePath();
            this.props.commenceNodeCreation(contextPath, void 0, "into", this.props.preset.newNodeType || void 0);
          };
          this.refreshFlatNav = () => {
            this.props.resetNodes();
          };
          this.renderNodes = () => {
            if (this.props.searchTerm && !this.props.isLoading && this.props.nodes.length === 0) {
              return /* @__PURE__ */ import_react5.default.createElement("span", { className: style_modules_default.toolbarSearchNoResults }, this.props.i18nRegistry.translate("Psmb.FlatNav:Main:noResults"));
            }
            return this.props.nodes.map((contextPath) => {
              const item = this.props.nodeData?.[contextPath];
              if (item) {
                const isFocused = this.props.focused === contextPath;
                const isDirty = this.props.publishableNodes.filter((i) => i?.contextPath === contextPath || i?.documentContextPath === contextPath).length > 0;
                const isRemoved = item?.properties?._removed;
                const nodeIconComponent = this.getNodeIconComponent(item);
                const nodeItemClassNames = (0, import_classnames2.default)({
                  [style_modules_default.node]: true,
                  [style_modules_default.nodeFocused]: isFocused,
                  [style_modules_default.nodeDirty]: isDirty,
                  [style_modules_default.nodeRemoved]: isRemoved
                });
                return /* @__PURE__ */ import_react5.default.createElement(
                  "div",
                  {
                    className: nodeItemClassNames,
                    key: contextPath,
                    onClick: () => {
                      if (!isRemoved) {
                        this.props.setSrc(item?.uri);
                        this.props.focus(contextPath);
                      }
                    },
                    role: "button"
                  },
                  /* @__PURE__ */ import_react5.default.createElement(
                    "div",
                    {
                      className: style_modules_default.nodeIconWrapper
                    },
                    nodeIconComponent
                  ),
                  /* @__PURE__ */ import_react5.default.createElement(
                    "span",
                    {
                      className: style_modules_default.nodeLabel
                    },
                    item?.label
                  )
                );
              }
              return null;
            }).filter((i) => i);
          };
        }
        componentDidMount() {
          if (
            // No node paths in state on initial load
            this.props.nodes.length === 0
          ) {
            this.props.fetchNodes();
            this.props.fetchNewReference();
          }
          this.props.serverFeedbackHandlers.set("Neos.Neos.Ui:NodeCreated/DocumentAdded", this.handleNodeWasCreated, "after Neos.Neos.Ui:NodeCreated/Main");
        }
        componentDidUpdate() {
          if (
            // Node data not available for some nodes (e.g. after tree reload)
            !this.props.nodes.every((contextPath) => this.props.nodeData?.[contextPath])
          ) {
            this.props.fetchNodes();
            this.props.fetchNewReference();
          }
        }
        getNodeIconComponent(node2) {
          const nodeTypeName = node2?.nodeType;
          const nodeType = this.props.nodeTypesRegistry.getNodeType(nodeTypeName);
          const isHidden = node2?.properties?._hidden;
          const isHiddenBefore = node2?.properties?._hiddenBeforeDateTime;
          const isHiddenAfter = node2?.properties?._hiddenAfterDateTime;
          const nodeTypeIcon = nodeType?.ui?.icon;
          if (isHidden) {
            return /* @__PURE__ */ import_react5.default.createElement("span", { className: "fa-layers fa-fw" }, /* @__PURE__ */ import_react5.default.createElement(import_react_ui_components5.Icon, { icon: nodeTypeIcon, className: style_modules_default.baseIcon }), /* @__PURE__ */ import_react5.default.createElement(import_react_ui_components5.Icon, { icon: "circle", color: "error", transform: "shrink-3 down-6 right-4" }), /* @__PURE__ */ import_react5.default.createElement(import_react_ui_components5.Icon, { icon: "times", transform: "shrink-7 down-6 right-4" }));
          }
          if (isHiddenBefore || isHiddenAfter) {
            return /* @__PURE__ */ import_react5.default.createElement("span", { className: "fa-layers fa-fw" }, /* @__PURE__ */ import_react5.default.createElement(import_react_ui_components5.Icon, { icon: nodeTypeIcon, className: style_modules_default.baseIcon }), /* @__PURE__ */ import_react5.default.createElement(import_react_ui_components5.Icon, { icon: "circle", color: "primaryBlue", transform: "shrink-5 down-6 right-4" }), /* @__PURE__ */ import_react5.default.createElement(import_react_ui_components5.Icon, { icon: "clock", transform: "shrink-9 down-6 right-4" }));
          }
          return /* @__PURE__ */ import_react5.default.createElement(import_react_ui_components5.Icon, { icon: nodeTypeIcon, className: style_modules_default.baseIcon });
        }
        render() {
          const { focused, nodes, isLoadingReferenceNodePath, isLoading, preset, isAllowedToAddChildOrSiblingNodes, canBeDeleted, canBeEdited } = this.props;
          const focusedInNodes = nodes.includes(focused);
          const searchEnabled = Boolean(preset.searchQuery);
          return /* @__PURE__ */ import_react5.default.createElement("div", { className: style_modules_default.pageTreeContainer }, /* @__PURE__ */ import_react5.default.createElement("div", { className: style_modules_default.toolbar }, /* @__PURE__ */ import_react5.default.createElement("div", { className: style_modules_default.toolbarButtons }, /* @__PURE__ */ import_react5.default.createElement(import_react_ui_components5.IconButton, { icon: "plus", disabled: isLoadingReferenceNodePath || !isAllowedToAddChildOrSiblingNodes, onClick: this.createNode }), /* @__PURE__ */ import_react5.default.createElement(HideSelectedNode, { disabled: !focusedInNodes || !canBeEdited }), /* @__PURE__ */ import_react5.default.createElement(DeleteSelectedNode, { disabled: !focusedInNodes || !canBeDeleted || !canBeEdited }), /* @__PURE__ */ import_react5.default.createElement(RefreshNodes, { disabled: isLoading || isLoadingReferenceNodePath, onClick: this.refreshFlatNav })), searchEnabled && /* @__PURE__ */ import_react5.default.createElement(SearchInput_default, { searchTerm: this.props.searchTerm, onChange: this.props.setSearchTerm, placeholder: this.props.i18nRegistry.translate("Psmb.FlatNav:Main:search") })), /* @__PURE__ */ import_react5.default.createElement("div", { className: style_modules_default.treeWrapper }, this.renderNodes(), (isLoading || !this.props.preset.disablePagination && this.props.moreNodesAvailable && !this.props.searchTerm) && /* @__PURE__ */ import_react5.default.createElement(
            import_react_ui_components5.Button,
            {
              onClick: () => this.props.fetchNodes(true),
              style: "clean",
              className: style_modules_default.loadMoreButton,
              disabled: isLoading
            },
            /* @__PURE__ */ import_react5.default.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ import_react5.default.createElement(
              import_react_ui_components5.Icon,
              {
                spin: isLoading,
                icon: isLoading ? "spinner" : "angle-double-down"
              }
            ), "\xA0", isLoading ? this.props.i18nRegistry.translate("Psmb.FlatNav:Main:loading") : this.props.i18nRegistry.translate("Psmb.FlatNav:Main:loadMore"))
          )));
        }
      };
      FlatNav.propTypes = {
        nodes: import_prop_types4.default.array.isRequired,
        preset: import_prop_types4.default.object.isRequired,
        isLoading: import_prop_types4.default.bool.isRequired,
        isLoadingReferenceNodePath: import_prop_types4.default.bool.isRequired,
        page: import_prop_types4.default.number.isRequired,
        newReferenceNodePath: import_prop_types4.default.string.isRequired,
        moreNodesAvailable: import_prop_types4.default.bool.isRequired
      };
      FlatNav = __decorateClass([
        (0, import_neos_ui_decorators4.neos)((globalRegistry) => ({
          nodeTypesRegistry: globalRegistry.get("@neos-project/neos-ui-contentrepository"),
          serverFeedbackHandlers: globalRegistry.get("serverFeedbackHandlers"),
          i18nRegistry: globalRegistry.get("i18n")
        })),
        (0, import_react_redux3.connect)(
          (state, { nodeTypesRegistry }) => {
            const isAllowedToAddChildOrSiblingNodesSelector = import_neos_ui_redux_store3.selectors.CR.Nodes.makeIsAllowedToAddChildOrSiblingNodes(nodeTypesRegistry);
            return (state2, { newReferenceNodePath }) => {
              const focusedNodeContextPath = import_neos_ui_redux_store3.selectors.UI.PageTree.getFocused(state2);
              const getNodeByContextPathSelector = import_neos_ui_redux_store3.selectors.CR.Nodes.makeGetNodeByContextPathSelector(focusedNodeContextPath);
              const focusedNode = getNodeByContextPathSelector(state2);
              const canBeDeleted = focusedNode?.policy?.canRemove || false;
              const canBeEdited = focusedNode?.policy?.canEdit || false;
              const context = focusedNodeContextPath.split("@")[1];
              const isAllowedToAddChildOrSiblingNodes = isAllowedToAddChildOrSiblingNodesSelector(state2, {
                reference: newReferenceNodePath + "@" + context
              });
              return {
                nodeData: state2?.cr?.nodes?.byContextPath,
                focused: import_neos_ui_redux_store3.selectors.CR.Nodes.focusedNodePathSelector(state2),
                siteNodeContextPath: import_neos_ui_redux_store3.selectors.CR.Nodes.siteNodeContextPathSelector(state2),
                baseWorkspaceName: state2?.cr?.workspaces?.personalWorkspace?.baseWorkspace,
                publishableNodes: state2?.cr?.workspaces?.personalWorkspace?.publishableNodes,
                isAllowedToAddChildOrSiblingNodes,
                canBeDeleted,
                canBeEdited
              };
            };
          },
          {
            setSrc: import_neos_ui_redux_store3.actions.UI.ContentCanvas.setSrc,
            focus: import_neos_ui_redux_store3.actions.UI.PageTree.focus,
            openNodeCreationDialog: import_neos_ui_redux_store3.actions.UI.NodeCreationDialog.open,
            commenceNodeCreation: import_neos_ui_redux_store3.actions.CR.Nodes.commenceCreation,
            selectNodeType: import_neos_ui_redux_store3.actions.UI.SelectNodeTypeModal.apply,
            merge: import_neos_ui_redux_store3.actions.CR.Nodes.merge
          }
        )
      ], FlatNav);
    }
  });

  // node_modules/lodash.debounce/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.debounce/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      var now = function() {
        return root.Date.now();
      };
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
          return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = debounce2;
    }
  });

  // src/makeFlatNavContainer.js
  var import_react6, import_react_ui_components6, import_react_redux4, import_neos_ui_redux_store4, import_neos_ui_decorators5, import_lodash, parentNodeContextPath, makeFlatNavContainer, makeFlatNavContainer_default;
  var init_makeFlatNavContainer = __esm({
    "src/makeFlatNavContainer.js"() {
      import_react6 = __toESM(require_react());
      import_react_ui_components6 = __toESM(require_react_ui_components());
      import_react_redux4 = __toESM(require_react_redux());
      import_neos_ui_redux_store4 = __toESM(require_neos_ui_redux_store());
      import_neos_ui_decorators5 = __toESM(require_neos_ui_decorators());
      init_neos_ui_backend_connector();
      init_neos_ui_backend_connector();
      init_FlatNav();
      init_style_modules();
      import_lodash = __toESM(require_lodash());
      parentNodeContextPath = (contextPath) => {
        if (typeof contextPath !== "string") {
          return null;
        }
        const [path, context] = contextPath.split("@");
        if (path.length === 0) {
          return false;
        }
        return `${path.substr(0, path.lastIndexOf("/"))}@${context}`;
      };
      makeFlatNavContainer = (OriginalPageTree) => {
        class FlatNavContainer extends import_react6.Component {
          constructor(props) {
            super(props);
            this.state = {};
            this.buildDefaultState = (props) => {
              const state = {};
              Object.keys(props.options.presets).forEach((presetName) => {
                const preset = props.options.presets[presetName];
                if (!presetName) {
                  return null;
                }
                let newReferenceNodePath;
                const newReferenceNodePathSetting = props?.options?.presets?.[presetName]?.newReferenceNodePath;
                if (typeof newReferenceNodePathSetting === "string" && newReferenceNodePathSetting.indexOf("/") === 0) {
                  newReferenceNodePath = preset.newReferenceNodePath;
                } else {
                  newReferenceNodePath = "";
                }
                state[presetName] = {
                  page: 1,
                  isLoading: false,
                  isLoadingReferenceNodePath: false,
                  nodes: [],
                  searchTerm: "",
                  moreNodesAvailable: true,
                  newReferenceNodePath
                };
              });
              return state;
            };
            this.fullReset = () => {
              const defaultState = this.buildDefaultState(this.props);
              this.setState({
                ...defaultState
              });
            };
            this.makeResetNodes = (preset, fetchNodes) => () => {
              this.setState({
                [preset]: {
                  ...this.state[preset],
                  page: 1,
                  nodes: [],
                  moreNodesAvailable: true
                }
              }, fetchNodes);
            };
            this.makeFetchNodes = (preset) => (loadMore = false) => {
              const searchTerm = this.state[preset].searchTerm;
              const page = loadMore ? this.state[preset].page + 1 : 1;
              const url = `/neos/flatnav/query?nodeContextPath=${encodeURIComponent(this.props.siteNodeContextPath)}&preset=${preset}&page=${page}${searchTerm ? `&searchTerm=${searchTerm}` : ""}`;
              if (this.loadingLock[url]) {
                return;
              }
              this.loadingLock[url] = true;
              this.setState({
                [preset]: {
                  ...this.state[preset],
                  isLoading: true,
                  moreNodesAvailable: true
                }
              });
              fetchWithErrorHandling.withCsrfToken((csrfToken) => ({
                url,
                method: "GET",
                credentials: "include",
                headers: {
                  "X-Flow-Csrftoken": csrfToken,
                  "Content-Type": "application/json"
                }
              })).then((response) => response && response.json()).then((nodes) => {
                if (searchTerm === this.state[preset].searchTerm) {
                  if (nodes.length > 0) {
                    const nodesMap = nodes.reduce((result, node2) => {
                      result[node2.contextPath] = node2;
                      return result;
                    }, {});
                    this.props.merge(nodesMap);
                    this.setState({
                      [preset]: {
                        ...this.state[preset],
                        isLoading: false,
                        nodes: loadMore ? [...this.state[preset].nodes, ...Object.keys(nodesMap)] : Object.keys(nodesMap),
                        page,
                        moreNodesAvailable: true
                      }
                    });
                  } else {
                    this.setState({
                      [preset]: {
                        ...this.state[preset],
                        isLoading: false,
                        moreNodesAvailable: false,
                        nodes: loadMore ? this.state[preset].nodes : []
                      }
                    });
                  }
                  this.loadingLock[url] = false;
                }
              });
            };
            this.makeSetSearchTerm = (preset, fetchNodes) => (searchTerm) => {
              this.setState({
                [preset]: {
                  ...this.state[preset],
                  nodes: [],
                  page: 1,
                  isLoading: true,
                  searchTerm
                }
              }, fetchNodes);
            };
            // Gets the `newReferenceNodePath` setting and loads that node into state
            this.makeGetNewReference = (preset) => () => {
              if (this.loadingReferenceNodePathLock[preset]) {
                return;
              }
              this.loadingReferenceNodePathLock[preset] = true;
              const context = this.props.siteNodeContextPath.split("@")[1];
              if (this.state[preset].newReferenceNodePath.indexOf("/") === 0) {
                this.fetchNodeWithParents(this.state[preset].newReferenceNodePath + "@" + context);
              } else {
                this.setState({
                  [preset]: {
                    ...this.state[preset],
                    isLoadingReferenceNodePath: true
                  }
                });
                fetchWithErrorHandling.withCsrfToken((csrfToken) => ({
                  url: `/neos/flatnav/getNewReferenceNodePath?nodeContextPath=${encodeURIComponent(this.props.siteNodeContextPath)}&preset=${preset}`,
                  method: "GET",
                  credentials: "include",
                  headers: {
                    "X-Flow-Csrftoken": csrfToken,
                    "Content-Type": "application/json"
                  }
                })).then((response) => response && response.json()).then((newReferenceNodePath) => {
                  this.setState({
                    [preset]: {
                      ...this.state[preset],
                      isLoadingReferenceNodePath: false,
                      newReferenceNodePath
                    }
                  });
                  this.fetchNodeWithParents(newReferenceNodePath + "@" + context);
                  this.loadingReferenceNodePathLock[preset] = false;
                });
              }
            };
            this.fetchNodeWithParents = (contextPath) => {
              const { siteNodeContextPath } = this.props;
              const { q } = neos_ui_backend_connector_default.get();
              let parentContextPath = contextPath;
              while (parentContextPath !== siteNodeContextPath) {
                const node2 = this.props.nodeData?.[parentContextPath];
                if (!node2) {
                  q(parentContextPath).get().then((nodes) => {
                    this.props.merge(nodes.reduce((nodeMap, node3) => {
                      nodeMap[node3?.contextPath] = node3;
                      return nodeMap;
                    }, {}));
                  });
                }
                parentContextPath = parentNodeContextPath(parentContextPath);
              }
            };
            this.state = this.buildDefaultState(props);
            this.loadingLock = {};
            this.loadingReferenceNodePathLock = {};
          }
          componentDidUpdate(prevProps) {
            if (this.props.siteNodeContextPath !== prevProps.siteNodeContextPath || this.props.baseWorkspaceName !== prevProps.baseWorkspaceName) {
              this.fullReset();
            }
          }
          render() {
            return /* @__PURE__ */ import_react6.default.createElement(import_react_ui_components6.Tabs, { theme: {
              tabs__content: style_modules_default.tabsContent,
              tabs__panel: style_modules_default.tabsPanel
            } }, Object.keys(this.props.options.presets).map((presetName) => {
              const preset = this.props.options.presets[presetName];
              if (!preset) {
                return null;
              }
              if (preset.disabled) {
                return null;
              }
              const fetchNodes = this.makeFetchNodes(presetName);
              const resetNodes = this.makeResetNodes(presetName, fetchNodes);
              const debouncedFetchNodes = (0, import_lodash.default)(fetchNodes, 400);
              const setSearchTerm = this.makeSetSearchTerm(presetName, debouncedFetchNodes);
              const fetchNewReference = this.makeGetNewReference(presetName);
              return /* @__PURE__ */ import_react6.default.createElement(import_react_ui_components6.Tabs.Panel, { id: presetName, key: presetName, icon: preset.icon, tooltip: this.props.i18nRegistry.translate(preset.label), theme: {
                panel: style_modules_default.panel
              } }, preset.type === "flat" && /* @__PURE__ */ import_react6.default.createElement(
                FlatNav,
                {
                  preset,
                  fetchNodes,
                  resetNodes,
                  setSearchTerm,
                  fullReset: this.fullReset,
                  fetchNewReference,
                  ...this.state[presetName]
                }
              ), preset.type === "tree" && /* @__PURE__ */ import_react6.default.createElement(OriginalPageTree, null));
            }).filter(Boolean));
          }
        }
        return (0, import_neos_ui_decorators5.neos)((globalRegistry) => ({
          options: globalRegistry.get("frontendConfiguration").get("Psmb_FlatNav"),
          i18nRegistry: globalRegistry.get("i18n")
        }))((0, import_react_redux4.connect)((state) => ({
          siteNodeContextPath: state?.cr?.nodes?.siteNode,
          baseWorkspaceName: state?.cr?.workspaces?.personalWorkspace?.baseWorkspace
        }), {
          merge: import_neos_ui_redux_store4.actions.CR.Nodes.merge
        })(FlatNavContainer));
      };
      makeFlatNavContainer_default = makeFlatNavContainer;
    }
  });

  // src/manifest.js
  var manifest_exports = {};
  var import_react7;
  var init_manifest2 = __esm({
    "src/manifest.js"() {
      import_react7 = __toESM(require_react());
      init_dist();
      init_makeFlatNavContainer();
      init_style_modules();
      dist_default("Psmb.FlatNav:FlatNav", {}, (globalRegistry) => {
        const containerRegistry = globalRegistry.get("containers");
        const PageTreeToolbar = containerRegistry.get("LeftSideBar/Top/PageTreeToolbar");
        const PageTreeSearchbar = containerRegistry.get("LeftSideBar/Top/PageTreeSearchbar");
        const PageTree = containerRegistry.get("LeftSideBar/Top/PageTree");
        const OriginalTree = () => /* @__PURE__ */ import_react7.default.createElement("div", { className: style_modules_default.pageTreeContainerOriginal }, /* @__PURE__ */ import_react7.default.createElement("div", { className: style_modules_default.pageTreeToolbarOriginal }, /* @__PURE__ */ import_react7.default.createElement(PageTreeToolbar, null)), /* @__PURE__ */ import_react7.default.createElement(PageTreeSearchbar, null), /* @__PURE__ */ import_react7.default.createElement(PageTree, null));
        containerRegistry.set("LeftSideBar/Top/PageTreeToolbar", () => null);
        containerRegistry.set("LeftSideBar/Top/PageTreeSearchbar", () => null);
        containerRegistry.set("LeftSideBar/Top/PageTree", makeFlatNavContainer_default(OriginalTree));
      });
    }
  });

  // src/index.js
  init_manifest2();
})();
