(()=>{var ne=Object.defineProperty;var $=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var Y=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))oe.call(t,n)&&Y(e,n,t[n]);if($)for(var n of $(t))ie.call(t,n)&&Y(e,n,t[n]);return e};var G=(e,t,n)=>new Promise((o,r)=>{var i=c=>{try{f(n.next(c))}catch(p){r(p)}},d=c=>{try{f(n.throw(c))}catch(p){r(p)}},f=c=>c.done?o(c.value):Promise.resolve(c.value).then(i,d);f((n=n.apply(e,t)).next())});function R(e){if(e==null||typeof e!="object")return!1;let t=Object.getPrototypeOf(e);return t==null||t===Object.prototype}function T(e){return e!=null&&e.kind===3}var P="__current",w={},ce=[];function H(e,{strict:t=!0,components:n}={}){let o=0,r={strict:t,mounted:!1,channel:e,children:ce,nodes:new WeakSet,parents:new WeakMap,tops:new WeakMap,components:new WeakMap,fragments:new WeakMap};t&&Object.freeze(n);let i={kind:0,options:t?Object.freeze({strict:t,components:n}):{strict:t,components:n},get children(){return r.children},createComponent(d,...f){if(n&&n.indexOf(d)<0)throw new Error(`Unsupported component: ${d}`);let[c,p,...s]=f,m=c!=null?c:{},u=[],g={};if(c)for(let a of Object.keys(c))a!=="children"&&(g[a]=E(v(c[a])));if(p)if(Array.isArray(p))for(let a of p)u.push(l(a,i));else{u.push(l(p,i));for(let a of s)u.push(l(a,i))}let O=`${o++}`,x={externalProps:t?Object.freeze(m):m,internalProps:g,children:t?Object.freeze(u):u},h=C({kind:1,get children(){return x.children},get props(){return x.externalProps},get remoteProps(){return x.internalProps},remove:()=>q(h),updateProps:a=>me(h,a,x,r),append:(...a)=>M(h,a.map(y=>l(y,i)),x,r),appendChild:a=>j(h,l(a,i),x,r),removeChild:a=>D(h,a,x,r),replaceChildren:(...a)=>F(h,a.map(y=>l(y,i)),x,r),insertBefore:(a,y)=>A(h,l(a,i),y,x,r),insertChildBefore:(a,y)=>A(h,l(a,i),y,x,r)},w);r.components.set(h,x),Object.defineProperty(h,"type",{value:d,configurable:!1,writable:!1,enumerable:!0}),z(h,r),B(h,O,i);for(let a of x.children)N(h,a,r);return h},createText(d=""){let f=`${o++}`,c={text:d},p=m=>de(s,m,c,r),s=C({kind:2,get text(){return c.text},update:p,updateText:p,remove:()=>q(s)},w);return z(s,r),B(s,f,i),s},createFragment(){let d=`${o++}`,f={children:t?Object.freeze([]):[]},c=C({kind:3,get children(){return f.children},append:(...p)=>M(c,p.map(s=>l(s,i)),f,r),appendChild:p=>j(c,l(p,i),f,r),removeChild:p=>D(c,p,f,r),replaceChildren:(...p)=>F(c,p.map(s=>l(s,i)),f,r),insertBefore:(p,s)=>A(c,l(p,i),s,f,r),insertChildBefore:(p,s)=>A(c,l(p,i),s,f,r)},w);return r.fragments.set(c,f),z(c,r),B(c,d,i),c},append:(...d)=>M(i,d.map(f=>l(f,i)),r,r),appendChild:d=>j(i,l(d,i),r,r),replaceChildren:(...d)=>F(i,d.map(f=>l(f,i)),r,r),removeChild:d=>D(i,d,r,r),insertBefore:(d,f)=>A(i,l(d,i),f,r,r),insertChildBefore:(d,f)=>A(i,l(d,i),f,r,r),mount(){return r.mounted?Promise.resolve():(r.mounted=!0,Promise.resolve(e(0,r.children.map(I))))}};return i}function pe(e,{tops:t}){var n;return((n=t.get(e))===null||n===void 0?void 0:n.kind)===0}function V(e,t){let n=o=>{if("children"in o)for(let r of o.children)t(r),n(r)};n(e)}function k(e,t,{remote:n,local:o}){let{mounted:r,channel:i}=t;r&&(e.kind===0||pe(e,t))&&n(i),o()}function de(e,t,n,o){return k(e,o,{remote:r=>r(3,e.id,t),local:()=>{n.text=t}})}var b=Symbol("ignore");function me(e,t,n,o){let{strict:r}=o,{internalProps:i,externalProps:d}=n,f={},c=[],p=!1;for(let s of Object.keys(t)){if(s==="children")continue;let m=d[s],u=t[s],g=i[s],O=v(u);if(g===O&&(O==null||typeof O!="object"))continue;let[x,h]=L(g,O);h&&c.push(...h),x!==b&&(p=!0,f[s]=x,T(m)&&K(m,o),T(u)&&N(e,u,o))}return k(e,o,{remote:s=>{p&&s(4,e.id,f)},local:()=>{let s=C(C({},d),t);n.externalProps=r?Object.freeze(s):s,n.internalProps=C(C({},n.internalProps),f);for(let[m,u]of c)m[P]=u}})}function L(e,t,n=new Set){return n.has(e)?[b]:(n.add(e),typeof e=="function"&&P in e?[typeof t=="function"?b:E(t),[[e,t]]]:Array.isArray(e)?le(e,t,n):R(e)&&!T(e)?ue(e,t,n):[e===t?b:t])}function E(e,t=new Map){let n=t.get(e);if(n)return n;if(T(e))return t.set(e,e),e;if(Array.isArray(e)){let o=[];t.set(e,o);for(let r of e)o.push(E(r,t));return o}if(R(e)){let o={};t.set(e,o);for(let r of Object.keys(e))o[r]=E(e[r],t);return o}if(typeof e=="function"){let o=(...r)=>o[P](...r);return Object.defineProperty(o,P,{enumerable:!1,configurable:!1,writable:!0,value:e}),t.set(e,o),o}return t.set(e,e),e}function _(e,t=new Set){if(!t.has(e)){if(t.add(e),Array.isArray(e))return e.reduce((n,o)=>{let r=_(o,t);return r?[...n,...r]:n},[]);if(R(e))return Object.keys(e).reduce((n,o)=>{let r=_(e[o],t);return r?[...n,...r]:n},[]);if(typeof e=="function")return P in e?[e]:void 0}}function q(e){var t;(t=e.parent)===null||t===void 0||t.removeChild(e)}function M(e,t,n,o){for(let r of t)j(e,r,n,o)}function j(e,t,n,o){var r;let{nodes:i,strict:d}=o;if(!i.has(t))throw new Error("Cannot append a node that was not created by this remote root");let f=t.parent,c=(r=f==null?void 0:f.children.indexOf(t))!==null&&r!==void 0?r:-1;return k(e,o,{remote:p=>{p(1,e.id,c<0?e.children.length:e.children.length-1,I(t),f?f.id:!1)},local:()=>{N(e,t,o);let p;if(f){let s=ee(f,o),m=[...s.children];m.splice(c,1),f===e?p=m:(s.children=d?Object.freeze(m):m,p=[...n.children])}else p=[...n.children];p.push(t),n.children=d?Object.freeze(p):p}})}function F(e,t,n,o){for(let r of e.children)D(e,r,n,o);M(e,t,n,o)}function D(e,t,n,o){let{strict:r}=o;return k(e,o,{remote:i=>i(2,e.id,e.children.indexOf(t)),local:()=>{K(t,o);let i=[...n.children];i.splice(i.indexOf(t),1),n.children=r?Object.freeze(i):i}})}function A(e,t,n,o,r){var i;let{strict:d,nodes:f}=r;if(!f.has(t))throw new Error("Cannot insert a node that was not created by this remote root");let c=t.parent,p=(i=c==null?void 0:c.children.indexOf(t))!==null&&i!==void 0?i:-1;return k(e,r,{remote:s=>{let m=n==null?e.children.length-1:e.children.indexOf(n);s(1,e.id,m<p||p<0?m:m-1,I(t),c?c.id:!1)},local:()=>{N(e,t,r);let s;if(c){let m=ee(c,r),u=[...m.children];u.splice(p,1),c===e?s=u:(m.children=d?Object.freeze(u):u,s=[...o.children])}else s=[...o.children];n==null?s.push(t):s.splice(s.indexOf(n),0,t),o.children=d?Object.freeze(s):s}})}function l(e,t){return typeof e=="string"?t.createText(e):e}function N(e,t,n){let{tops:o,parents:r}=n,i=e.kind===0?e:o.get(e);o.set(t,i),r.set(t,e),J(t,n),V(t,d=>{o.set(d,i),J(d,n)})}function J(e,t){if(e.kind!==1)return;let n=e.props;n&&Object.values(n).forEach(o=>{T(o)&&N(e,o,t)})}function K(e,t){let{tops:n,parents:o}=t;n.delete(e),o.delete(e),V(e,r=>{n.delete(r),Q(r,t)}),Q(e,t)}function Q(e,t){if(e.kind!==1)return;let n=e.remoteProps;for(let o of Object.keys(n!=null?n:{})){let r=n[o];T(r)&&K(r,t)}}function z(e,{parents:t,tops:n,nodes:o}){o.add(e),Object.defineProperty(e,"parent",{get(){return t.get(e)},configurable:!0,enumerable:!0}),Object.defineProperty(e,"top",{get(){return n.get(e)},configurable:!0,enumerable:!0})}function I(e){return e.kind===2?{id:e.id,kind:e.kind,text:e.text}:{id:e.id,kind:e.kind,type:e.type,props:e.remoteProps,children:e.children.map(t=>I(t))}}function v(e){return T(e)?ae(e):e}function ae(e){return{id:e.id,kind:e.kind,get children(){return e.children.map(t=>I(t))}}}function ee(e,t){return e.kind===0?t:e.kind===3?t.fragments.get(e):t.components.get(e)}function B(e,t,n){Object.defineProperty(e,"id",{value:t,configurable:!0,writable:!1,enumerable:!1}),Object.defineProperty(e,"root",{value:n,configurable:!0,writable:!1,enumerable:!1})}function ue(e,t,n){if(!R(t)){var o;return[E(t),(o=_(e))===null||o===void 0?void 0:o.map(f=>[f,void 0])]}let r=!1,i=[],d={};for(let f in e){let c=e[f];if(!(f in t)){r=!0;let u=_(c);u&&i.push(...u.map(g=>[g,void 0]))}let p=t[f],[s,m]=L(c,p,n);m&&i.push(...m),s!==b&&(r=!0,d[f]=s)}for(let f in t)f in d||(r=!0,d[f]=E(t[f]));return[r?d:b,i]}function le(e,t,n){if(!Array.isArray(t)){var o;return[E(t),(o=_(e))===null||o===void 0?void 0:o.map(s=>[s,void 0])]}let r=!1,i=[],d=t.length,f=e.length,c=Math.max(f,d),p=[];for(let s=0;s<c;s++){let m=e[s],u=t[s];if(s<d){if(s>=f){r=!0,p[s]=E(u);continue}let[g,O]=L(m,u,n);if(O&&i.push(...O),g===b){p[s]=m;continue}r=!0,p[s]=g}else{r=!0;let g=_(m);g&&i.push(...g.map(O=>[O,void 0]))}}return[r?p:b,i]}function te(){return(t,n)=>{var o;function r(...i){return G(this,null,function*(){if(i.length===1)return n(...i);let[{channel:d,components:f},c]=i,p=H(d,{components:f,strict:!0}),s=n(p,c);return typeof s=="object"&&s!=null&&"then"in s&&(s=yield s),p.mount(),s})}return(o=globalThis.shopify)===null||o===void 0||o.extend(t,r),r}}var re=te(),U=re;var W="CustomerSegmentTemplate";U("admin.customers.segmentation-templates.render",(e,{i18n:t})=>{e.appendChild(e.createComponent(W,{title:t.translate("title"),description:t.translate("description"),createdOn:new Date("2023-08-15").toISOString(),query:"number_of_orders = 1 AND products_purchased(id: (product_id)) = true",queryToInsert:"number_of_orders = 1 AND products_purchased(id: ("}))});})();
ChildBefore: (child, before) => insertBefore(remoteRoot, normalizeChild(child, remoteRoot), before, rootInternals, rootInternals),
      mount() {
        if (rootInternals.mounted)
          return Promise.resolve();
        rootInternals.mounted = true;
        return Promise.resolve(channel(ACTION_MOUNT, rootInternals.children.map(serializeChild)));
      }
    };
    return remoteRoot;
  }
  function connected(element, {
    tops
  }) {
    var _tops$get;
    return ((_tops$get = tops.get(element)) === null || _tops$get === void 0 ? void 0 : _tops$get.kind) === KIND_ROOT;
  }
  function allDescendants(element, withEach) {
    const recurse = (element2) => {
      if ("children" in element2) {
        for (const child of element2.children) {
          withEach(child);
          recurse(child);
        }
      }
    };
    recurse(element);
  }
  function perform(element, rootInternals, {
    remote,
    local
  }) {
    const {
      mounted,
      channel
    } = rootInternals;
    if (mounted && (element.kind === KIND_ROOT || connected(element, rootInternals))) {
      remote(channel);
    }
    local();
  }
  function updateText(text, newText, internals, rootInternals) {
    return perform(text, rootInternals, {
      remote: (channel) => channel(ACTION_UPDATE_TEXT, text.id, newText),
      local: () => {
        internals.text = newText;
      }
    });
  }
  var IGNORE = Symbol("ignore");
  function updateProps(component, newProps, internals, rootInternals) {
    const {
      strict
    } = rootInternals;
    const {
      internalProps: currentProps,
      externalProps: currentExternalProps
    } = internals;
    const normalizedNewProps = {};
    const hotSwapFunctions = [];
    let hasRemoteChange = false;
    for (const key of Object.keys(newProps)) {
      if (key === "children")
        continue;
      const currentExternalValue = currentExternalProps[key];
      const newExternalValue = newProps[key];
      const currentValue = currentProps[key];
      const newValue = serializeProp(newExternalValue);
      if (currentValue === newValue && (newValue == null || typeof newValue !== "object")) {
        continue;
      }
      const [value, hotSwaps] = tryHotSwappingValues(currentValue, newValue);
      if (hotSwaps) {
        hotSwapFunctions.push(...hotSwaps);
      }
      if (value === IGNORE)
        continue;
      hasRemoteChange = true;
      normalizedNewProps[key] = value;
      if (isRemoteFragment(currentExternalValue)) {
        removeNodeFromContainer(currentExternalValue, rootInternals);
      }
      if (isRemoteFragment(newExternalValue)) {
        moveNodeToContainer(component, newExternalValue, rootInternals);
      }
    }
    return perform(component, rootInternals, {
      remote: (channel) => {
        if (hasRemoteChange) {
          channel(ACTION_UPDATE_PROPS, component.id, normalizedNewProps);
        }
      },
      local: () => {
        const mergedExternalProps = __spreadValues(__spreadValues({}, currentExternalProps), newProps);
        internals.externalProps = strict ? Object.freeze(mergedExternalProps) : mergedExternalProps;
        internals.internalProps = __spreadValues(__spreadValues({}, internals.internalProps), normalizedNewProps);
        for (const [hotSwappable, newValue] of hotSwapFunctions) {
          hotSwappable[FUNCTION_CURRENT_IMPLEMENTATION_KEY] = newValue;
        }
      }
    });
  }
  function tryHotSwappingValues(currentValue, newValue, seen = /* @__PURE__ */ new Set()) {
    if (seen.has(currentValue)) {
      return [IGNORE];
    }
    seen.add(currentValue);
    if (typeof currentValue === "function" && FUNCTION_CURRENT_IMPLEMENTATION_KEY in currentValue) {
      const result2 = [typeof newValue === "function" ? IGNORE : makeValueHotSwappable(newValue), [[currentValue, newValue]]];
      return result2;
    }
    if (Array.isArray(currentValue)) {
      const result2 = tryHotSwappingArrayValues(currentValue, newValue, seen);
      return result2;
    }
    if (isBasicObject(currentValue) && !isRemoteFragment(currentValue)) {
      const result2 = tryHotSwappingObjectValues(currentValue, newValue, seen);
      return result2;
    }
    const result = [currentValue === newValue ? IGNORE : newValue];
    return result;
  }
  function makeValueHotSwappable(value, seen = /* @__PURE__ */ new Map()) {
    const seenValue = seen.get(value);
    if (seenValue)
      return seenValue;
    if (isRemoteFragment(value)) {
      seen.set(value, value);
      return value;
    }
    if (Array.isArray(value)) {
      const result = [];
      seen.set(value, result);
      for (const nested of value) {
        result.push(makeValueHotSwappable(nested, seen));
      }
      return result;
    }
    if (isBasicObject(value)) {
      const result = {};
      seen.set(value, result);
      for (const key of Object.keys(value)) {
        result[key] = makeValueHotSwappable(value[key], seen);
      }
      return result;
    }
    if (typeof value === "function") {
      const wrappedFunction = (...args) => {
        return wrappedFunction[FUNCTION_CURRENT_IMPLEMENTATION_KEY](...args);
      };
      Object.defineProperty(wrappedFunction, FUNCTION_CURRENT_IMPLEMENTATION_KEY, {
        enumerable: false,
        configurable: false,
        writable: true,
        value
      });
      seen.set(value, wrappedFunction);
      return wrappedFunction;
    }
    seen.set(value, value);
    return value;
  }
  function collectNestedHotSwappableValues(value, seen = /* @__PURE__ */ new Set()) {
    if (seen.has(value))
      return void 0;
    seen.add(value);
    if (Array.isArray(value)) {
      return value.reduce((all, element) => {
        const nested = collectNestedHotSwappableValues(element, seen);
        return nested ? [...all, ...nested] : all;
      }, []);
    }
    if (isBasicObject(value)) {
      return Object.keys(value).reduce((all, key) => {
        const nested = collectNestedHotSwappableValues(value[key], seen);
        return nested ? [...all, ...nested] : all;
      }, []);
    }
    if (typeof value === "function") {
      return FUNCTION_CURRENT_IMPLEMENTATION_KEY in value ? [value] : void 0;
    }
    return void 0;
  }
  function remove(child) {
    var _child$parent;
    (_child$parent = child.parent) === null || _child$parent === void 0 ? void 0 : _child$parent.removeChild(child);
  }
  function append(container, children, internals, rootInternals) {
    for (const child of children) {
      appendChild(container, child, internals, rootInternals);
    }
  }
  function appendChild(container, child, internals, rootInternals) {
    var _currentParent$childr;
    const {
      nodes,
      strict
    } = rootInternals;
    if (!nodes.has(child)) {
      throw new Error(`Cannot append a node that was not created by this remote root`);
    }
    const currentParent = child.parent;
    const existingIndex = (_currentParent$childr = currentParent === null || currentParent === void 0 ? void 0 : currentParent.children.indexOf(child)) !== null && _currentParent$childr !== void 0 ? _currentParent$childr : -1;
    return perform(container, rootInternals, {
      remote: (channel) => {
        channel(ACTION_INSERT_CHILD, container.id, existingIndex < 0 ? container.children.length : container.children.length - 1, serializeChild(child), currentParent ? currentParent.id : false);
      },
      local: () => {
        moveNodeToContainer(container, child, rootInternals);
        let newChildren;
        if (currentParent) {
          const currentInternals = getCurrentInternals(currentParent, rootInternals);
          const currentChildren = [...currentInternals.children];
          currentChildren.splice(existingIndex, 1);
          if (currentParent === container) {
            newChildren = currentChildren;
          } else {
            currentInternals.children = strict ? Object.freeze(currentChildren) : currentChildren;
            newChildren = [...internals.children];
          }
        } else {
          newChildren = [...internals.children];
        }
        newChildren.push(child);
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function replaceChildren(container, children, internals, rootInternals) {
    for (const child of container.children) {
      removeChild(container, child, internals, rootInternals);
    }
    append(container, children, internals, rootInternals);
  }
  function removeChild(container, child, internals, rootInternals) {
    const {
      strict
    } = rootInternals;
    return perform(container, rootInternals, {
      remote: (channel) => channel(ACTION_REMOVE_CHILD, container.id, container.children.indexOf(child)),
      local: () => {
        removeNodeFromContainer(child, rootInternals);
        const newChildren = [...internals.children];
        newChildren.splice(newChildren.indexOf(child), 1);
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function insertBefore(container, child, before, internals, rootInternals) {
    var _currentParent$childr2;
    const {
      strict,
      nodes
    } = rootInternals;
    if (!nodes.has(child)) {
      throw new Error(`Cannot insert a node that was not created by this remote root`);
    }
    const currentParent = child.parent;
    const existingIndex = (_currentParent$childr2 = currentParent === null || currentParent === void 0 ? void 0 : currentParent.children.indexOf(child)) !== null && _currentParent$childr2 !== void 0 ? _currentParent$childr2 : -1;
    return perform(container, rootInternals, {
      remote: (channel) => {
        const beforeIndex = before == null ? container.children.length - 1 : container.children.indexOf(before);
        channel(ACTION_INSERT_CHILD, container.id, beforeIndex < existingIndex || existingIndex < 0 ? beforeIndex : beforeIndex - 1, serializeChild(child), currentParent ? currentParent.id : false);
      },
      local: () => {
        moveNodeToContainer(container, child, rootInternals);
        let newChildren;
        if (currentParent) {
          const currentInternals = getCurrentInternals(currentParent, rootInternals);
          const currentChildren = [...currentInternals.children];
          currentChildren.splice(existingIndex, 1);
          if (currentParent === container) {
            newChildren = currentChildren;
          } else {
            currentInternals.children = strict ? Object.freeze(currentChildren) : currentChildren;
            newChildren = [...internals.children];
          }
        } else {
          newChildren = [...internals.children];
        }
        if (before == null) {
          newChildren.push(child);
        } else {
          newChildren.splice(newChildren.indexOf(before), 0, child);
        }
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function normalizeChild(child, root) {
    return typeof child === "string" ? root.createText(child) : child;
  }
  function moveNodeToContainer(container, node, rootInternals) {
    const {
      tops,
      parents
    } = rootInternals;
    const newTop = container.kind === KIND_ROOT ? container : tops.get(container);
    tops.set(node, newTop);
    parents.set(node, container);
    moveFragmentToContainer(node, rootInternals);
    allDescendants(node, (descendant) => {
      tops.set(descendant, newTop);
      moveFragmentToContainer(descendant, rootInternals);
    });
  }
  function moveFragmentToContainer(node, rootInternals) {
    if (node.kind !== KIND_COMPONENT)
      return;
    const props = node.props;
    if (!props)
      return;
    Object.values(props).forEach((prop) => {
      if (!isRemoteFragment(prop))
        return;
      moveNodeToContainer(node, prop, rootInternals);
    });
  }
  function removeNodeFromContainer(node, rootInternals) {
    const {
      tops,
      parents
    } = rootInternals;
    tops.delete(node);
    parents.delete(node);
    allDescendants(node, (descendant) => {
      tops.delete(descendant);
      removeFragmentFromContainer(descendant, rootInternals);
    });
    removeFragmentFromContainer(node, rootInternals);
  }
  function removeFragmentFromContainer(node, rootInternals) {
    if (node.kind !== KIND_COMPONENT)
      return;
    const props = node.remoteProps;
    for (const key of Object.keys(props !== null && props !== void 0 ? props : {})) {
      const prop = props[key];
      if (!isRemoteFragment(prop))
        continue;
      removeNodeFromContainer(prop, rootInternals);
    }
  }
  function makePartOfTree(node, {
    parents,
    tops,
    nodes
  }) {
    nodes.add(node);
    Object.defineProperty(node, "parent", {
      get() {
        return parents.get(node);
      },
      configurable: true,
      enumerable: true
    });
    Object.defineProperty(node, "top", {
      get() {
        return tops.get(node);
      },
      configurable: true,
      enumerable: true
    });
  }
  function serializeChild(value) {
    return value.kind === KIND_TEXT ? {
      id: value.id,
      kind: value.kind,
      text: value.text
    } : {
      id: value.id,
      kind: value.kind,
      type: value.type,
      props: value.remoteProps,
      children: value.children.map((child) => serializeChild(child))
    };
  }
  function serializeProp(prop) {
    if (isRemoteFragment(prop)) {
      return serializeFragment(prop);
    }
    return prop;
  }
  function serializeFragment(value) {
    return {
      id: value.id,
      kind: value.kind,
      get children() {
        return value.children.map((child) => serializeChild(child));
      }
    };
  }
  function getCurrentInternals(currentParent, rootInternals) {
    if (currentParent.kind === KIND_ROOT) {
      return rootInternals;
    }
    if (currentParent.kind === KIND_FRAGMENT) {
      return rootInternals.fragments.get(currentParent);
    }
    return rootInternals.components.get(currentParent);
  }
  function makeRemote(value, id, root) {
    Object.defineProperty(value, "id", {
      value: id,
      configurable: true,
      writable: false,
      enumerable: false
    });
    Object.defineProperty(value, "root", {
      value: root,
      configurable: true,
      writable: false,
      enumerable: false
    });
  }
  function tryHotSwappingObjectValues(currentValue, newValue, seen) {
    if (!isBasicObject(newValue)) {
      var _collectNestedHotSwap;
      return [makeValueHotSwappable(newValue), (_collectNestedHotSwap = collectNestedHotSwappableValues(currentValue)) === null || _collectNestedHotSwap === void 0 ? void 0 : _collectNestedHotSwap.map((hotSwappable) => [hotSwappable, void 0])];
    }
    let hasChanged = false;
    const hotSwaps = [];
    const normalizedNewValue = {};
    for (const key in currentValue) {
      const currentObjectValue = currentValue[key];
      if (!(key in newValue)) {
        hasChanged = true;
        const nestedHotSwappables = collectNestedHotSwappableValues(currentObjectValue);
        if (nestedHotSwappables) {
          hotSwaps.push(...nestedHotSwappables.map((hotSwappable) => [hotSwappable, void 0]));
        }
      }
      const newObjectValue = newValue[key];
      const [updatedValue, elementHotSwaps] = tryHotSwappingValues(currentObjectValue, newObjectValue, seen);
      if (elementHotSwaps) {
        hotSwaps.push(...elementHotSwaps);
      }
      if (updatedValue !== IGNORE) {
        hasChanged = true;
        normalizedNewValue[key] = updatedValue;
      }
    }
    for (const key in newValue) {
      if (key in normalizedNewValue)
        continue;
      hasChanged = true;
      normalizedNewValue[key] = makeValueHotSwappable(newValue[key]);
    }
    return [hasChanged ? normalizedNewValue : IGNORE, hotSwaps];
  }
  function tryHotSwappingArrayValues(currentValue, newValue, seen) {
    if (!Array.isArray(newValue)) {
      var _collectNestedHotSwap2;
      return [makeValueHotSwappable(newValue), (_collectNestedHotSwap2 = collectNestedHotSwappableValues(currentValue)) === null || _collectNestedHotSwap2 === void 0 ? void 0 : _collectNestedHotSwap2.map((hotSwappable) => [hotSwappable, void 0])];
    }
    let hasChanged = false;
    const hotSwaps = [];
    const newLength = newValue.length;
    const currentLength = currentValue.length;
    const maxLength = Math.max(currentLength, newLength);
    const normalizedNewValue = [];
    for (let i = 0; i < maxLength; i++) {
      const currentArrayValue = currentValue[i];
      const newArrayValue = newValue[i];
      if (i < newLength) {
        if (i >= currentLength) {
          hasChanged = true;
          normalizedNewValue[i] = makeValueHotSwappable(newArrayValue);
          continue;
        }
        const [updatedValue, elementHotSwaps] = tryHotSwappingValues(currentArrayValue, newArrayValue, seen);
        if (elementHotSwaps)
          hotSwaps.push(...elementHotSwaps);
        if (updatedValue === IGNORE) {
          normalizedNewValue[i] = currentArrayValue;
          continue;
        }
        hasChanged = true;
        normalizedNewValue[i] = updatedValue;
      } else {
        hasChanged = true;
        const nestedHotSwappables = collectNestedHotSwappableValues(currentArrayValue);
        if (nestedHotSwappables) {
          hotSwaps.push(...nestedHotSwappables.map((hotSwappable) => [hotSwappable, void 0]));
        }
      }
    }
    return [hasChanged ? normalizedNewValue : IGNORE, hotSwaps];
  }

  // node_modules/@shopify/ui-extensions/build/esm/utilities/registration.mjs
  function createExtensionRegistrationFunction() {
    const extensionWrapper = (target, implementation) => {
      var _shopify;
      function extension2(...args) {
        return __async(this, null, function* () {
          if (args.length === 1) {
            return implementation(...args);
          }
          const [{
            channel,
            components
          }, api] = args;
          const root = createRemoteRoot(channel, {
            components,
            strict: true
          });
          let renderResult = implementation(root, api);
          if (typeof renderResult === "object" && renderResult != null && "then" in renderResult) {
            renderResult = yield renderResult;
          }
          root.mount();
          return renderResult;
        });
      }
      (_shopify = globalThis.shopify) === null || _shopify === void 0 ? void 0 : _shopify.extend(target, extension2);
      return extension2;
    };
    return extensionWrapper;
  }

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/extension.mjs
  var extension = createExtensionRegistrationFunction();
  var extend = extension;

  // node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/CustomerSegmentTemplate/CustomerSegmentTemplate.mjs
  var CustomerSegmentTemplate = createRemoteComponent("CustomerSegmentTemplate");

  // extensions/customer-segment-template/src/CustomerSegmentTemplate.js
  extend("admin.customers.segmentation-templates.render", (root, { i18n }) => {
    root.appendChild(
      root.createComponent(
        // The CustomerSegmentTemplate component provides an API for setting the title, description, date, query, and query to insert of the segmentation template.
        CustomerSegmentTemplate,
        {
          title: i18n.translate("title"),
          description: i18n.translate("description"),
          createdOn: (/* @__PURE__ */ new Date("2023-08-15")).toISOString(),
          query: "number_of_orders = 1 AND products_purchased(id: (product_id)) = true",
          queryToInsert: "number_of_orders = 1 AND products_purchased(id: ("
        }
      )
    );
  });
})();
//# sourceMappingURL=customer-segment-template.js.map
