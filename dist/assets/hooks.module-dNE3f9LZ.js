var A,
  m,
  m_,
  y_,
  H,
  i_,
  g_,
  G,
  b_,
  Z,
  J,
  K,
  k_,
  M = {},
  $_ = [],
  A_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  q = Array.isArray;
function w(e, _) {
  for (var t in _) e[t] = _[t];
  return e;
}
function __(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Q(e, _, t) {
  var n,
    i,
    r,
    u = {};
  for (r in _)
    r == "key" ? (n = _[r]) : r == "ref" ? (i = _[r]) : (u[r] = _[r]);
  if (
    (arguments.length > 2 &&
      (u.children = arguments.length > 3 ? A.call(arguments, 2) : t),
    typeof e == "function" && e.defaultProps != null)
  )
    for (r in e.defaultProps) u[r] === void 0 && (u[r] = e.defaultProps[r]);
  return N(e, u, n, i, null);
}
function N(e, _, t, n, i) {
  var r = {
    type: e,
    props: _,
    key: t,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: i ?? ++m_,
    __i: -1,
    __u: 0,
  };
  return i == null && m.vnode != null && m.vnode(r), r;
}
function L_() {
  return { current: null };
}
function L(e) {
  return e.children;
}
function F(e, _) {
  (this.props = e), (this.context = _);
}
function S(e, _) {
  if (_ == null) return e.__ ? S(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++)
    if ((t = e.__k[_]) != null && t.__e != null) return t.__e;
  return typeof e.type == "function" ? S(e) : null;
}
function w_(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
      if ((t = e.__k[_]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return w_(e);
  }
}
function X(e) {
  ((!e.__d && (e.__d = !0) && H.push(e) && !j.__r++) ||
    i_ !== m.debounceRendering) &&
    ((i_ = m.debounceRendering) || g_)(j);
}
function j() {
  var e, _, t, n, i, r, u, l;
  for (H.sort(G); (e = H.shift()); )
    e.__d &&
      ((_ = H.length),
      (n = void 0),
      (r = (i = (t = e).__v).__e),
      (u = []),
      (l = []),
      t.__P &&
        (((n = w({}, i)).__v = i.__v + 1),
        m.vnode && m.vnode(n),
        e_(
          t.__P,
          n,
          i,
          t.__n,
          t.__P.namespaceURI,
          32 & i.__u ? [r] : null,
          u,
          r ?? S(i),
          !!(32 & i.__u),
          l,
        ),
        (n.__v = i.__v),
        (n.__.__k[n.__i] = n),
        P_(u, n, l),
        n.__e != r && w_(n)),
      H.length > _ && H.sort(G));
  j.__r = 0;
}
function C_(e, _, t, n, i, r, u, l, f, c, p) {
  var o,
    a,
    s,
    g,
    k,
    b,
    d = (n && n.__k) || $_,
    v = _.length;
  for (f = W_(t, _, d, f, v), o = 0; o < v; o++)
    (s = t.__k[o]) != null &&
      ((a = s.__i === -1 ? M : d[s.__i] || M),
      (s.__i = o),
      (b = e_(e, s, a, i, r, u, l, f, c, p)),
      (g = s.__e),
      s.ref &&
        a.ref != s.ref &&
        (a.ref && t_(a.ref, null, s), p.push(s.ref, s.__c || g, s)),
      k == null && g != null && (k = g),
      4 & s.__u || a.__k === s.__k
        ? (f = x_(s, f, e))
        : typeof s.type == "function" && b !== void 0
          ? (f = b)
          : g && (f = g.nextSibling),
      (s.__u &= -7));
  return (t.__e = k), f;
}
function W_(e, _, t, n, i) {
  var r,
    u,
    l,
    f,
    c,
    p = t.length,
    o = p,
    a = 0;
  for (e.__k = new Array(i), r = 0; r < i; r++)
    (u = _[r]) != null && typeof u != "boolean" && typeof u != "function"
      ? ((f = r + a),
        ((u = e.__k[r] =
          typeof u == "string" ||
          typeof u == "number" ||
          typeof u == "bigint" ||
          u.constructor == String
            ? N(null, u, null, null, null)
            : q(u)
              ? N(L, { children: u }, null, null, null)
              : u.constructor === void 0 && u.__b > 0
                ? N(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v)
                : u).__ = e),
        (u.__b = e.__b + 1),
        (l = null),
        (c = u.__i = I_(u, t, f, o)) !== -1 &&
          (o--, (l = t[c]) && (l.__u |= 2)),
        l == null || l.__v === null
          ? (c == -1 && a--, typeof u.type != "function" && (u.__u |= 4))
          : c != f &&
            (c == f - 1
              ? a--
              : c == f + 1
                ? a++
                : (c > f ? a-- : a++, (u.__u |= 4))))
      : (e.__k[r] = null);
  if (o)
    for (r = 0; r < p; r++)
      (l = t[r]) != null &&
        !(2 & l.__u) &&
        (l.__e == n && (n = S(l)), S_(l, l));
  return n;
}
function x_(e, _, t) {
  var n, i;
  if (typeof e.type == "function") {
    for (n = e.__k, i = 0; n && i < n.length; i++)
      n[i] && ((n[i].__ = e), (_ = x_(n[i], _, t)));
    return _;
  }
  e.__e != _ &&
    (_ && e.type && !t.contains(_) && (_ = S(e)),
    t.insertBefore(e.__e, _ || null),
    (_ = e.__e));
  do _ = _ && _.nextSibling;
  while (_ != null && _.nodeType == 8);
  return _;
}
function H_(e, _) {
  return (
    (_ = _ || []),
    e == null ||
      typeof e == "boolean" ||
      (q(e)
        ? e.some(function (t) {
            H_(t, _);
          })
        : _.push(e)),
    _
  );
}
function I_(e, _, t, n) {
  var i,
    r,
    u = e.key,
    l = e.type,
    f = _[t];
  if (f === null || (f && u == f.key && l === f.type && !(2 & f.__u))) return t;
  if (n > (f != null && !(2 & f.__u) ? 1 : 0))
    for (i = t - 1, r = t + 1; i >= 0 || r < _.length; ) {
      if (i >= 0) {
        if ((f = _[i]) && !(2 & f.__u) && u == f.key && l === f.type) return i;
        i--;
      }
      if (r < _.length) {
        if ((f = _[r]) && !(2 & f.__u) && u == f.key && l === f.type) return r;
        r++;
      }
    }
  return -1;
}
function u_(e, _, t) {
  _[0] == "-"
    ? e.setProperty(_, t ?? "")
    : (e[_] =
        t == null ? "" : typeof t != "number" || A_.test(_) ? t : t + "px");
}
function R(e, _, t, n, i) {
  var r;
  _: if (_ == "style")
    if (typeof t == "string") e.style.cssText = t;
    else {
      if ((typeof n == "string" && (e.style.cssText = n = ""), n))
        for (_ in n) (t && _ in t) || u_(e.style, _, "");
      if (t) for (_ in t) (n && t[_] === n[_]) || u_(e.style, _, t[_]);
    }
  else if (_[0] == "o" && _[1] == "n")
    (r = _ != (_ = _.replace(b_, "$1"))),
      (_ =
        _.toLowerCase() in e || _ == "onFocusOut" || _ == "onFocusIn"
          ? _.toLowerCase().slice(2)
          : _.slice(2)),
      e.l || (e.l = {}),
      (e.l[_ + r] = t),
      t
        ? n
          ? (t.u = n.u)
          : ((t.u = Z), e.addEventListener(_, r ? K : J, r))
        : e.removeEventListener(_, r ? K : J, r);
  else {
    if (i == "http://www.w3.org/2000/svg")
      _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      _ != "width" &&
      _ != "height" &&
      _ != "href" &&
      _ != "list" &&
      _ != "form" &&
      _ != "tabIndex" &&
      _ != "download" &&
      _ != "rowSpan" &&
      _ != "colSpan" &&
      _ != "role" &&
      _ != "popover" &&
      _ in e
    )
      try {
        e[_] = t ?? "";
        break _;
      } catch {}
    typeof t == "function" ||
      (t == null || (t === !1 && _[4] != "-")
        ? e.removeAttribute(_)
        : e.setAttribute(_, _ == "popover" && t == 1 ? "" : t));
  }
}
function l_(e) {
  return function (_) {
    if (this.l) {
      var t = this.l[_.type + e];
      if (_.t == null) _.t = Z++;
      else if (_.t < t.u) return;
      return t(m.event ? m.event(_) : _);
    }
  };
}
function e_(e, _, t, n, i, r, u, l, f, c) {
  var p,
    o,
    a,
    s,
    g,
    k,
    b,
    d,
    v,
    T,
    x,
    W,
    U,
    o_,
    I,
    B,
    V,
    $ = _.type;
  if (_.constructor !== void 0) return null;
  128 & t.__u && ((f = !!(32 & t.__u)), (r = [(l = _.__e = t.__e)])),
    (p = m.__b) && p(_);
  _: if (typeof $ == "function")
    try {
      if (
        ((d = _.props),
        (v = "prototype" in $ && $.prototype.render),
        (T = (p = $.contextType) && n[p.__c]),
        (x = p ? (T ? T.props.value : p.__) : n),
        t.__c
          ? (b = (o = _.__c = t.__c).__ = o.__E)
          : (v
              ? (_.__c = o = new $(d, x))
              : ((_.__c = o = new F(d, x)),
                (o.constructor = $),
                (o.render = O_)),
            T && T.sub(o),
            (o.props = d),
            o.state || (o.state = {}),
            (o.context = x),
            (o.__n = n),
            (a = o.__d = !0),
            (o.__h = []),
            (o._sb = [])),
        v && o.__s == null && (o.__s = o.state),
        v &&
          $.getDerivedStateFromProps != null &&
          (o.__s == o.state && (o.__s = w({}, o.__s)),
          w(o.__s, $.getDerivedStateFromProps(d, o.__s))),
        (s = o.props),
        (g = o.state),
        (o.__v = _),
        a)
      )
        v &&
          $.getDerivedStateFromProps == null &&
          o.componentWillMount != null &&
          o.componentWillMount(),
          v && o.componentDidMount != null && o.__h.push(o.componentDidMount);
      else {
        if (
          (v &&
            $.getDerivedStateFromProps == null &&
            d !== s &&
            o.componentWillReceiveProps != null &&
            o.componentWillReceiveProps(d, x),
          !o.__e &&
            ((o.shouldComponentUpdate != null &&
              o.shouldComponentUpdate(d, o.__s, x) === !1) ||
              _.__v == t.__v))
        ) {
          for (
            _.__v != t.__v && ((o.props = d), (o.state = o.__s), (o.__d = !1)),
              _.__e = t.__e,
              _.__k = t.__k,
              _.__k.some(function (D) {
                D && (D.__ = _);
              }),
              W = 0;
            W < o._sb.length;
            W++
          )
            o.__h.push(o._sb[W]);
          (o._sb = []), o.__h.length && u.push(o);
          break _;
        }
        o.componentWillUpdate != null && o.componentWillUpdate(d, o.__s, x),
          v &&
            o.componentDidUpdate != null &&
            o.__h.push(function () {
              o.componentDidUpdate(s, g, k);
            });
      }
      if (
        ((o.context = x),
        (o.props = d),
        (o.__P = e),
        (o.__e = !1),
        (U = m.__r),
        (o_ = 0),
        v)
      ) {
        for (
          o.state = o.__s,
            o.__d = !1,
            U && U(_),
            p = o.render(o.props, o.state, o.context),
            I = 0;
          I < o._sb.length;
          I++
        )
          o.__h.push(o._sb[I]);
        o._sb = [];
      } else
        do
          (o.__d = !1),
            U && U(_),
            (p = o.render(o.props, o.state, o.context)),
            (o.state = o.__s);
        while (o.__d && ++o_ < 25);
      (o.state = o.__s),
        o.getChildContext != null && (n = w(w({}, n), o.getChildContext())),
        v &&
          !a &&
          o.getSnapshotBeforeUpdate != null &&
          (k = o.getSnapshotBeforeUpdate(s, g)),
        (l = C_(
          e,
          q(
            (B =
              p != null && p.type === L && p.key == null
                ? p.props.children
                : p),
          )
            ? B
            : [B],
          _,
          t,
          n,
          i,
          r,
          u,
          l,
          f,
          c,
        )),
        (o.base = _.__e),
        (_.__u &= -161),
        o.__h.length && u.push(o),
        b && (o.__E = o.__ = null);
    } catch (D) {
      if (((_.__v = null), f || r != null))
        if (D.then) {
          for (_.__u |= f ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; )
            l = l.nextSibling;
          (r[r.indexOf(l)] = null), (_.__e = l);
        } else for (V = r.length; V--; ) __(r[V]);
      else (_.__e = t.__e), (_.__k = t.__k);
      m.__e(D, _, t);
    }
  else
    r == null && _.__v == t.__v
      ? ((_.__k = t.__k), (_.__e = t.__e))
      : (l = _.__e = R_(t.__e, _, t, n, i, r, u, f, c));
  return (p = m.diffed) && p(_), 128 & _.__u ? void 0 : l;
}
function P_(e, _, t) {
  for (var n = 0; n < t.length; n++) t_(t[n], t[++n], t[++n]);
  m.__c && m.__c(_, e),
    e.some(function (i) {
      try {
        (e = i.__h),
          (i.__h = []),
          e.some(function (r) {
            r.call(i);
          });
      } catch (r) {
        m.__e(r, i.__v);
      }
    });
}
function R_(e, _, t, n, i, r, u, l, f) {
  var c,
    p,
    o,
    a,
    s,
    g,
    k,
    b = t.props,
    d = _.props,
    v = _.type;
  if (
    (v == "svg"
      ? (i = "http://www.w3.org/2000/svg")
      : v == "math"
        ? (i = "http://www.w3.org/1998/Math/MathML")
        : i || (i = "http://www.w3.org/1999/xhtml"),
    r != null)
  ) {
    for (c = 0; c < r.length; c++)
      if (
        (s = r[c]) &&
        "setAttribute" in s == !!v &&
        (v ? s.localName == v : s.nodeType == 3)
      ) {
        (e = s), (r[c] = null);
        break;
      }
  }
  if (e == null) {
    if (v == null) return document.createTextNode(d);
    (e = document.createElementNS(i, v, d.is && d)),
      l && (m.__m && m.__m(_, r), (l = !1)),
      (r = null);
  }
  if (v === null) b === d || (l && e.data === d) || (e.data = d);
  else {
    if (((r = r && A.call(e.childNodes)), (b = t.props || M), !l && r != null))
      for (b = {}, c = 0; c < e.attributes.length; c++)
        b[(s = e.attributes[c]).name] = s.value;
    for (c in b)
      if (((s = b[c]), c != "children")) {
        if (c == "dangerouslySetInnerHTML") o = s;
        else if (!(c in d)) {
          if (
            (c == "value" && "defaultValue" in d) ||
            (c == "checked" && "defaultChecked" in d)
          )
            continue;
          R(e, c, null, s, i);
        }
      }
    for (c in d)
      (s = d[c]),
        c == "children"
          ? (a = s)
          : c == "dangerouslySetInnerHTML"
            ? (p = s)
            : c == "value"
              ? (g = s)
              : c == "checked"
                ? (k = s)
                : (l && typeof s != "function") ||
                  b[c] === s ||
                  R(e, c, s, b[c], i);
    if (p)
      l ||
        (o && (p.__html === o.__html || p.__html === e.innerHTML)) ||
        (e.innerHTML = p.__html),
        (_.__k = []);
    else if (
      (o && (e.innerHTML = ""),
      C_(
        e,
        q(a) ? a : [a],
        _,
        t,
        n,
        v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i,
        r,
        u,
        r ? r[0] : t.__k && S(t, 0),
        l,
        f,
      ),
      r != null)
    )
      for (c = r.length; c--; ) __(r[c]);
    l ||
      ((c = "value"),
      v == "progress" && g == null
        ? e.removeAttribute("value")
        : g !== void 0 &&
          (g !== e[c] ||
            (v == "progress" && !g) ||
            (v == "option" && g !== b[c])) &&
          R(e, c, g, b[c], i),
      (c = "checked"),
      k !== void 0 && k !== e[c] && R(e, c, k, b[c], i));
  }
  return e;
}
function t_(e, _, t) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), (n && _ == null) || (e.__u = e(_));
    } else e.current = _;
  } catch (i) {
    m.__e(i, t);
  }
}
function S_(e, _, t) {
  var n, i;
  if (
    (m.unmount && m.unmount(e),
    (n = e.ref) && ((n.current && n.current !== e.__e) || t_(n, null, _)),
    (n = e.__c) != null)
  ) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        m.__e(r, _);
      }
    n.base = n.__P = null;
  }
  if ((n = e.__k))
    for (i = 0; i < n.length; i++)
      n[i] && S_(n[i], _, t || typeof e.type != "function");
  t || __(e.__e), (e.__c = e.__ = e.__e = void 0);
}
function O_(e, _, t) {
  return this.constructor(e, t);
}
function E_(e, _, t) {
  var n, i, r, u;
  _ == document && (_ = document.documentElement),
    m.__ && m.__(e, _),
    (i = (n = typeof t == "function") ? null : (t && t.__k) || _.__k),
    (r = []),
    (u = []),
    e_(
      _,
      (e = ((!n && t) || _).__k = Q(L, null, [e])),
      i || M,
      M,
      _.namespaceURI,
      !n && t ? [t] : i ? null : _.firstChild ? A.call(_.childNodes) : null,
      r,
      !n && t ? t : i ? i.__e : _.firstChild,
      n,
      u,
    ),
    P_(r, e, u);
}
function T_(e, _) {
  E_(e, _, T_);
}
function j_(e, _, t) {
  var n,
    i,
    r,
    u,
    l = w({}, e.props);
  for (r in (e.type && e.type.defaultProps && (u = e.type.defaultProps), _))
    r == "key"
      ? (n = _[r])
      : r == "ref"
        ? (i = _[r])
        : (l[r] = _[r] === void 0 && u !== void 0 ? u[r] : _[r]);
  return (
    arguments.length > 2 &&
      (l.children = arguments.length > 3 ? A.call(arguments, 2) : t),
    N(e.type, l, n || e.key, i || e.ref, null)
  );
}
function q_(e, _) {
  var t = {
    __c: (_ = "__cC" + k_++),
    __: e,
    Consumer: function (n, i) {
      return n.children(i);
    },
    Provider: function (n) {
      var i, r;
      return (
        this.getChildContext ||
          ((i = new Set()),
          ((r = {})[_] = this),
          (this.getChildContext = function () {
            return r;
          }),
          (this.componentWillUnmount = function () {
            i = null;
          }),
          (this.shouldComponentUpdate = function (u) {
            this.props.value !== u.value &&
              i.forEach(function (l) {
                (l.__e = !0), X(l);
              });
          }),
          (this.sub = function (u) {
            i.add(u);
            var l = u.componentWillUnmount;
            u.componentWillUnmount = function () {
              i && i.delete(u), l && l.call(u);
            };
          })),
        n.children
      );
    },
  };
  return (t.Provider.__ = t.Consumer.contextType = t);
}
(A = $_.slice),
  (m = {
    __e: function (e, _, t, n) {
      for (var i, r, u; (_ = _.__); )
        if ((i = _.__c) && !i.__)
          try {
            if (
              ((r = i.constructor) &&
                r.getDerivedStateFromError != null &&
                (i.setState(r.getDerivedStateFromError(e)), (u = i.__d)),
              i.componentDidCatch != null &&
                (i.componentDidCatch(e, n || {}), (u = i.__d)),
              u)
            )
              return (i.__E = i);
          } catch (l) {
            e = l;
          }
      throw e;
    },
  }),
  (m_ = 0),
  (y_ = function (e) {
    return e != null && e.constructor == null;
  }),
  (F.prototype.setState = function (e, _) {
    var t;
    (t =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = w({}, this.state))),
      typeof e == "function" && (e = e(w({}, t), this.props)),
      e && w(t, e),
      e != null && this.__v && (_ && this._sb.push(_), X(this));
  }),
  (F.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), X(this));
  }),
  (F.prototype.render = L),
  (H = []),
  (g_ =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (G = function (e, _) {
    return e.__v.__b - _.__v.__b;
  }),
  (j.__r = 0),
  (b_ = /(PointerCapture)$|Capture$/i),
  (Z = 0),
  (J = l_(!1)),
  (K = l_(!0)),
  (k_ = 0);
const _e = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Component: F,
      Fragment: L,
      cloneElement: j_,
      createContext: q_,
      createElement: Q,
      createRef: L_,
      h: Q,
      hydrate: T_,
      get isValidElement() {
        return y_;
      },
      get options() {
        return m;
      },
      render: E_,
      toChildArray: H_,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var C,
  h,
  z,
  c_,
  E = 0,
  U_ = [],
  y = m,
  f_ = y.__b,
  s_ = y.__r,
  a_ = y.diffed,
  p_ = y.__c,
  h_ = y.unmount,
  d_ = y.__;
function P(e, _) {
  y.__h && y.__h(h, e, E || _), (E = 0);
  var t = h.__H || (h.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({}), t.__[e];
}
function D_(e) {
  return (E = 1), N_(M_, e);
}
function N_(e, _, t) {
  var n = P(C++, 2);
  if (
    ((n.t = e),
    !n.__c &&
      ((n.__ = [
        t ? t(_) : M_(void 0, _),
        function (l) {
          var f = n.__N ? n.__N[0] : n.__[0],
            c = n.t(f, l);
          f !== c && ((n.__N = [c, n.__[1]]), n.__c.setState({}));
        },
      ]),
      (n.__c = h),
      !h.u))
  ) {
    var i = function (l, f, c) {
      if (!n.__c.__H) return !0;
      var p = n.__c.__H.__.filter(function (a) {
        return !!a.__c;
      });
      if (
        p.every(function (a) {
          return !a.__N;
        })
      )
        return !r || r.call(this, l, f, c);
      var o = n.__c.props !== l;
      return (
        p.forEach(function (a) {
          if (a.__N) {
            var s = a.__[0];
            (a.__ = a.__N), (a.__N = void 0), s !== a.__[0] && (o = !0);
          }
        }),
        (r && r.call(this, l, f, c)) || o
      );
    };
    h.u = !0;
    var r = h.shouldComponentUpdate,
      u = h.componentWillUpdate;
    (h.componentWillUpdate = function (l, f, c) {
      if (this.__e) {
        var p = r;
        (r = void 0), i(l, f, c), (r = p);
      }
      u && u.call(this, l, f, c);
    }),
      (h.shouldComponentUpdate = i);
  }
  return n.__N || n.__;
}
function B_(e, _) {
  var t = P(C++, 3);
  !y.__s && r_(t.__H, _) && ((t.__ = e), (t.i = _), h.__H.__h.push(t));
}
function F_(e, _) {
  var t = P(C++, 4);
  !y.__s && r_(t.__H, _) && ((t.__ = e), (t.i = _), h.__h.push(t));
}
function V_(e) {
  return (
    (E = 5),
    n_(function () {
      return { current: e };
    }, [])
  );
}
function z_(e, _, t) {
  (E = 6),
    F_(
      function () {
        return typeof e == "function"
          ? (e(_()),
            function () {
              return e(null);
            })
          : e
            ? ((e.current = _()),
              function () {
                return (e.current = null);
              })
            : void 0;
      },
      t == null ? t : t.concat(e),
    );
}
function n_(e, _) {
  var t = P(C++, 7);
  return r_(t.__H, _) && ((t.__ = e()), (t.__H = _), (t.__h = e)), t.__;
}
function G_(e, _) {
  return (
    (E = 8),
    n_(function () {
      return e;
    }, _)
  );
}
function J_(e) {
  var _ = h.context[e.__c],
    t = P(C++, 9);
  return (
    (t.c = e),
    _ ? (t.__ == null && ((t.__ = !0), _.sub(h)), _.props.value) : e.__
  );
}
function K_(e, _) {
  y.useDebugValue && y.useDebugValue(_ ? _(e) : e);
}
function Q_(e) {
  var _ = P(C++, 10),
    t = D_();
  return (
    (_.__ = e),
    h.componentDidCatch ||
      (h.componentDidCatch = function (n, i) {
        _.__ && _.__(n, i), t[1](n);
      }),
    [
      t[0],
      function () {
        t[1](void 0);
      },
    ]
  );
}
function X_() {
  var e = P(C++, 11);
  if (!e.__) {
    for (var _ = h.__v; _ !== null && !_.__m && _.__ !== null; ) _ = _.__;
    var t = _.__m || (_.__m = [0, 0]);
    e.__ = "P" + t[0] + "-" + t[1]++;
  }
  return e.__;
}
function Y_() {
  for (var e; (e = U_.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(O), e.__H.__h.forEach(Y), (e.__H.__h = []);
      } catch (_) {
        (e.__H.__h = []), y.__e(_, e.__v);
      }
}
(y.__b = function (e) {
  (h = null), f_ && f_(e);
}),
  (y.__ = function (e, _) {
    e && _.__k && _.__k.__m && (e.__m = _.__k.__m), d_ && d_(e, _);
  }),
  (y.__r = function (e) {
    s_ && s_(e), (C = 0);
    var _ = (h = e.__c).__H;
    _ &&
      (z === h
        ? ((_.__h = []),
          (h.__h = []),
          _.__.forEach(function (t) {
            t.__N && (t.__ = t.__N), (t.i = t.__N = void 0);
          }))
        : (_.__h.forEach(O), _.__h.forEach(Y), (_.__h = []), (C = 0))),
      (z = h);
  }),
  (y.diffed = function (e) {
    a_ && a_(e);
    var _ = e.__c;
    _ &&
      _.__H &&
      (_.__H.__h.length &&
        ((U_.push(_) !== 1 && c_ === y.requestAnimationFrame) ||
          ((c_ = y.requestAnimationFrame) || Z_)(Y_)),
      _.__H.__.forEach(function (t) {
        t.i && (t.__H = t.i), (t.i = void 0);
      })),
      (z = h = null);
  }),
  (y.__c = function (e, _) {
    _.some(function (t) {
      try {
        t.__h.forEach(O),
          (t.__h = t.__h.filter(function (n) {
            return !n.__ || Y(n);
          }));
      } catch (n) {
        _.some(function (i) {
          i.__h && (i.__h = []);
        }),
          (_ = []),
          y.__e(n, t.__v);
      }
    }),
      p_ && p_(e, _);
  }),
  (y.unmount = function (e) {
    h_ && h_(e);
    var _,
      t = e.__c;
    t &&
      t.__H &&
      (t.__H.__.forEach(function (n) {
        try {
          O(n);
        } catch (i) {
          _ = i;
        }
      }),
      (t.__H = void 0),
      _ && y.__e(_, t.__v));
  });
var v_ = typeof requestAnimationFrame == "function";
function Z_(e) {
  var _,
    t = function () {
      clearTimeout(n), v_ && cancelAnimationFrame(_), setTimeout(e);
    },
    n = setTimeout(t, 100);
  v_ && (_ = requestAnimationFrame(t));
}
function O(e) {
  var _ = h,
    t = e.__c;
  typeof t == "function" && ((e.__c = void 0), t()), (h = _);
}
function Y(e) {
  var _ = h;
  (e.__c = e.__()), (h = _);
}
function r_(e, _) {
  return (
    !e ||
    e.length !== _.length ||
    _.some(function (t, n) {
      return t !== e[n];
    })
  );
}
function M_(e, _) {
  return typeof _ == "function" ? _(e) : _;
}
const ee = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      useCallback: G_,
      useContext: J_,
      useDebugValue: K_,
      useEffect: B_,
      useErrorBoundary: Q_,
      useId: X_,
      useImperativeHandle: z_,
      useLayoutEffect: F_,
      useMemo: n_,
      useReducer: N_,
      useRef: V_,
      useState: D_,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
export { E_ as D, ee as a, Q as g, D_ as h, _e as p, B_ as y };
