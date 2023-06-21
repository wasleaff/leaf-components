/*! For license information please see components-Menu-Menu-stories.a5cc3c29.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkleaf_components=self.webpackChunkleaf_components||[]).push([[377],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/Menu/Menu.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultIndex:function(){return DefaultIndex},DefaultOpenSubMenu:function(){return DefaultOpenSubMenu},HorizontalMode:function(){return HorizontalMode},VerticalMode:function(){return VerticalMode},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Menu_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}var _VerticalMode$paramet,_VerticalMode$paramet2,_VerticalMode$paramet3,_HorizontalMode$param,_HorizontalMode$param2,_HorizontalMode$param3,_DefaultIndex$paramet,_DefaultIndex$paramet2,_DefaultIndex$paramet3,_DefaultOpenSubMenu$p,_DefaultOpenSubMenu$p2,_DefaultOpenSubMenu$p3,menu=__webpack_require__("./src/components/Menu/menu.tsx"),menuItem=__webpack_require__("./src/components/Menu/menuItem.tsx"),subMenu=__webpack_require__("./src/components/Menu/subMenu.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Menu_stories={tags:["autodocs"],component:menu.v2},MenuTemplate={render:function render(_ref){var args=Object.assign({},(_objectDestructuringEmpty(_ref),_ref));return(0,jsx_runtime.jsxs)(menu.v2,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{children:[(0,jsx_runtime.jsx)(menuItem.s,{children:"item 1"}),(0,jsx_runtime.jsx)(menuItem.s,{children:"item 2"}),(0,jsx_runtime.jsx)(menuItem.s,{children:"item 3"})]}))}},VerticalMode=(0,objectSpread2.Z)((0,objectSpread2.Z)({},MenuTemplate),{},{args:{mode:"vertical"}}),HorizontalMode=(0,objectSpread2.Z)((0,objectSpread2.Z)({},MenuTemplate),{},{args:{mode:"horizon"}}),DefaultIndex=(0,objectSpread2.Z)((0,objectSpread2.Z)({},MenuTemplate),{},{args:{defaultIndex:"1"}}),DefaultOpenSubMenu={args:{mode:"vertical",defaultOpenSubMenu:["2","3"]},render:function render(_ref2){var args=Object.assign({},(_objectDestructuringEmpty(_ref2),_ref2));return(0,jsx_runtime.jsxs)(menu.v2,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{children:[(0,jsx_runtime.jsx)(menuItem.s,{children:"item 1"}),(0,jsx_runtime.jsx)(menuItem.s,{children:"item 2"}),(0,jsx_runtime.jsxs)(subMenu.W,{title:"item 3",children:[(0,jsx_runtime.jsx)(menuItem.s,{children:"SubItem 3-1"}),(0,jsx_runtime.jsx)(menuItem.s,{children:"SubItem 3-2"})]}),(0,jsx_runtime.jsxs)(subMenu.W,{title:"item 4",children:[(0,jsx_runtime.jsx)(menuItem.s,{children:"SubItem 4-1"}),(0,jsx_runtime.jsx)(menuItem.s,{children:"SubItem 4-2"})]})]}))}};VerticalMode.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},VerticalMode.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_VerticalMode$paramet=VerticalMode.parameters)||void 0===_VerticalMode$paramet?void 0:_VerticalMode$paramet.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  ...MenuTemplate,\n  args: {\n    mode: "vertical"\n  }\n}'},null===(_VerticalMode$paramet2=VerticalMode.parameters)||void 0===_VerticalMode$paramet2||null===(_VerticalMode$paramet3=_VerticalMode$paramet2.docs)||void 0===_VerticalMode$paramet3?void 0:_VerticalMode$paramet3.source)})}),HorizontalMode.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},HorizontalMode.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_HorizontalMode$param=HorizontalMode.parameters)||void 0===_HorizontalMode$param?void 0:_HorizontalMode$param.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  ...MenuTemplate,\n  args: {\n    mode: "horizon"\n  }\n}'},null===(_HorizontalMode$param2=HorizontalMode.parameters)||void 0===_HorizontalMode$param2||null===(_HorizontalMode$param3=_HorizontalMode$param2.docs)||void 0===_HorizontalMode$param3?void 0:_HorizontalMode$param3.source)})}),DefaultIndex.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},DefaultIndex.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_DefaultIndex$paramet=DefaultIndex.parameters)||void 0===_DefaultIndex$paramet?void 0:_DefaultIndex$paramet.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  ...MenuTemplate,\n  args: {\n    defaultIndex: "1"\n  }\n}'},null===(_DefaultIndex$paramet2=DefaultIndex.parameters)||void 0===_DefaultIndex$paramet2||null===(_DefaultIndex$paramet3=_DefaultIndex$paramet2.docs)||void 0===_DefaultIndex$paramet3?void 0:_DefaultIndex$paramet3.source)})}),DefaultOpenSubMenu.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},DefaultOpenSubMenu.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_DefaultOpenSubMenu$p=DefaultOpenSubMenu.parameters)||void 0===_DefaultOpenSubMenu$p?void 0:_DefaultOpenSubMenu$p.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    mode: "vertical",\n    defaultOpenSubMenu: ["2", "3"]\n  },\n  render: ({\n    ...args\n  }) => {\n    return <Menu {...args}>\n        <MenuItem>item 1</MenuItem>\n        <MenuItem>item 2</MenuItem>\n        <SubMenu title="item 3">\n          <MenuItem>SubItem 3-1</MenuItem>\n          <MenuItem>SubItem 3-2</MenuItem>\n        </SubMenu>\n        <SubMenu title="item 4">\n          <MenuItem>SubItem 4-1</MenuItem>\n          <MenuItem>SubItem 4-2</MenuItem>\n        </SubMenu>\n      </Menu>;\n  }\n}'},null===(_DefaultOpenSubMenu$p2=DefaultOpenSubMenu.parameters)||void 0===_DefaultOpenSubMenu$p2||null===(_DefaultOpenSubMenu$p3=_DefaultOpenSubMenu$p2.docs)||void 0===_DefaultOpenSubMenu$p3?void 0:_DefaultOpenSubMenu$p3.source)})});var __namedExportsOrder=["VerticalMode","HorizontalMode","DefaultIndex","DefaultOpenSubMenu"]},"./src/components/Menu/menu.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{pl:function(){return MenuContext},v2:function(){return Menu}});var _home_runner_work_leaf_components_leaf_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),MenuContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({index:"0"}),Menu=function Menu(props){var className=props.className,mode=props.mode,defaultIndex=props.defaultIndex,style=props.style,OnSelect=props.OnSelect,children=props.children,defaultOpenSubMenu=props.defaultOpenSubMenu,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultIndex),_useState2=(0,_home_runner_work_leaf_components_leaf_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_useState,2),currentActive=_useState2[0],setActive=_useState2[1],passedContext={index:currentActive||"0",OnSelect:function handleClick(index){setActive(index),OnSelect&&OnSelect(index)},mode:mode,defaultOpenSubMenu:defaultOpenSubMenu},classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("leaf-menu",className,{"menu-vertical":"vertical"===mode,"menu-horizontal":"vertical"!==mode});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul",{className:classes,style:style,"data-testid":"test-menu",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MenuContext.Provider,{value:passedContext,children:function renderChildren(){return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,(function(child,index){var childrenElement=child,displayName=childrenElement.type.displayName;if("MenuItem"===displayName||"SubMenu"===displayName)return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(childrenElement,{index:index.toString()});console.error("Warning: Menu has a child which is not a MenuItem Component")}))}()})})};Menu.defaultProps={defaultIndex:"0",mode:"horizontal"};try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"Maybe you can define the initial menuitem",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"What CSS styles  to use",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"What kind of menu arrangement do you want?",name:"mode",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},style:{defaultValue:null,description:"What CSS styles  to use",name:"style",required:!1,type:{name:"CSSProperties"}},OnSelect:{defaultValue:null,description:"Perhaps you can add events when the menuitem is selected",name:"OnSelect",required:!1,type:{name:"SelectCallback"}},children:{defaultValue:null,description:"Menu content, write only menuitems or submenus",name:"children",required:!1,type:{name:"ReactNode"}},defaultOpenSubMenu:{defaultValue:null,description:"Maybe you can initialize a series opened submenus",name:"defaultOpenSubMenu",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/components/Menu/menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}try{menu.displayName="menu",menu.__docgenInfo={description:"",displayName:"menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"Maybe you can define the initial menuitem",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"What CSS styles  to use",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"What kind of menu arrangement do you want?",name:"mode",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},style:{defaultValue:null,description:"What CSS styles  to use",name:"style",required:!1,type:{name:"CSSProperties"}},OnSelect:{defaultValue:null,description:"Perhaps you can add events when the menuitem is selected",name:"OnSelect",required:!1,type:{name:"SelectCallback"}},children:{defaultValue:null,description:"Menu content, write only menuitems or submenus",name:"children",required:!1,type:{name:"ReactNode"}},defaultOpenSubMenu:{defaultValue:null,description:"Maybe you can initialize a series opened submenus",name:"defaultOpenSubMenu",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#menu"]={docgenInfo:menu.__docgenInfo,name:"menu",path:"src/components/Menu/menu.tsx#menu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Menu/menuItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{s:function(){return MenuItem}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Menu/menu.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),MenuItem=function MenuItem(props){var index=props.index,disabled=props.disabled,className=props.className,style=props.style,children=props.children,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_menu__WEBPACK_IMPORTED_MODULE_2__.pl),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("menu-item",className,{"is-disabled":disabled,"is-active":context.index===index});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li",{className:classes,style:style,onClick:function handleClick(){context.OnSelect&&!disabled&&"string"==typeof index&&context.OnSelect(index)},children:children})};MenuItem.defaultProps={index:"0",disabled:!1},MenuItem.displayName="MenuItem";try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{index:{defaultValue:{value:"0"},description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menuItem.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/Menu/menuItem.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Menu/subMenu.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{W:function(){return SubMenu}});var _home_runner_work_leaf_components_leaf_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_leaf_components_leaf_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Menu/menu.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SubMenu=function SubMenu(props){var timer,index=props.index,title=props.title,children=props.children,className=props.className,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_menu__WEBPACK_IMPORTED_MODULE_2__.pl),openedSubMenu=context.defaultOpenSubMenu,isOpened=!(!index||"vertical"!==context.mode)&&(null==openedSubMenu?void 0:openedSubMenu.includes(index)),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isOpened),_useState2=(0,_home_runner_work_leaf_components_leaf_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState,2),menuOpen=_useState2[0],setOpen=_useState2[1],classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("menu-item submenu-item",className,{"is-active":context.index===index}),handleClick=function handleClick(e){e.preventDefault(),setOpen(!menuOpen)},handleMouse=function handleMouse(e,toggle){clearTimeout(timer),e.preventDefault(),timer=setTimeout((function(){setOpen(toggle)}),100)},clickEvents="vertical"===context.mode?{onClick:handleClick}:{},hoverEvents="vertical"!==context.mode?{onMouseEnter:function onMouseEnter(e){handleMouse(e,!0)},onMouseLeave:function onMouseLeave(e){handleMouse(e,!1)}}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li",(0,_home_runner_work_leaf_components_leaf_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_leaf_components_leaf_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({className:classes},hoverEvents),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",(0,_home_runner_work_leaf_components_leaf_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_leaf_components_leaf_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({className:"submenu-title",onClick:handleClick},clickEvents),{},{children:title})),function renderChildren(){var subMenuClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("leaf-submenu",{"menu-opened":menuOpen}),childrenComponent=react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,(function(child,i){var childElement=child;if("MenuItem"===childElement.type.displayName)return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(childElement,{index:"".concat(index,"-").concat(i.toString())});console.error("Warning: SubMenu has a child which is not a MenuItem Component")}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul",{className:subMenuClasses,children:childrenComponent})}()]}),index)};SubMenu.displayName="SubMenu";try{SubMenu.displayName="SubMenu",SubMenu.__docgenInfo={description:"",displayName:"SubMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/subMenu.tsx#SubMenu"]={docgenInfo:SubMenu.__docgenInfo,name:"SubMenu",path:"src/components/Menu/subMenu.tsx#SubMenu"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);