import { f as Gp, l as Vp } from "./index-RmsPT7oH.js";
import { r as Wp } from "./index-B39l1tw3.js";
import { r as Kp, a as Zp, b as Nc } from "./sha3-CIz8bATs.js";
import { r as Jp } from "./events-DQ172AOg.js";
function Yp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
function Xp() {
  if (typeof WebSocket < "u") return WebSocket;
  if (typeof global.WebSocket < "u") return global.WebSocket;
  if (typeof window.WebSocket < "u") return window.WebSocket;
  if (typeof self.WebSocket < "u") return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}
const Qp = Xp(),
  e1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, WebSocket: Qp },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
var mc = {},
  zr = {},
  gr = {},
  Lr = {},
  Dr = {},
  Ur = {},
  Gr = {},
  Ld;
function Hg() {
  if (Ld) return Gr;
  (Ld = 1),
    Object.defineProperty(Gr, "__esModule", { value: !0 }),
    (Gr.getSDKVersion = void 0);
  const e = () => "9.1.0";
  return (Gr.getSDKVersion = e), Gr;
}
var Vr = {},
  Dd;
function t1() {
  if (Dd) return Vr;
  (Dd = 1),
    Object.defineProperty(Vr, "__esModule", { value: !0 }),
    (Vr.generateRequestId = void 0);
  const e = (r) => r.toString(16).padStart(2, "0"),
    t = (r) => {
      const i = new Uint8Array(r / 2);
      return window.crypto.getRandomValues(i), Array.from(i, e).join("");
    },
    n = () => (typeof window < "u" ? t(10) : new Date().getTime().toString(36));
  return (Vr.generateRequestId = n), Vr;
}
var Ud;
function kg() {
  if (Ud) return Ur;
  (Ud = 1),
    Object.defineProperty(Ur, "__esModule", { value: !0 }),
    (Ur.MessageFormatter = void 0);
  const e = Hg(),
    t = t1();
  class n {}
  return (
    (Ur.MessageFormatter = n),
    (n.makeRequest = (r, i) => ({
      id: (0, t.generateRequestId)(),
      method: r,
      params: i,
      env: { sdkVersion: (0, e.getSDKVersion)() },
    })),
    (n.makeResponse = (r, i, s) => ({
      id: r,
      success: !0,
      version: s,
      data: i,
    })),
    (n.makeErrorResponse = (r, i, s) => ({
      id: r,
      success: !1,
      error: i,
      version: s,
    })),
    Ur
  );
}
var Yt = {},
  Gd;
function dr() {
  if (Gd) return Yt;
  (Gd = 1),
    Object.defineProperty(Yt, "__esModule", { value: !0 }),
    (Yt.RestrictedMethods = Yt.Methods = void 0);
  var e;
  (function (n) {
    (n.sendTransactions = "sendTransactions"),
      (n.rpcCall = "rpcCall"),
      (n.getChainInfo = "getChainInfo"),
      (n.getSafeInfo = "getSafeInfo"),
      (n.getTxBySafeTxHash = "getTxBySafeTxHash"),
      (n.getSafeBalances = "getSafeBalances"),
      (n.signMessage = "signMessage"),
      (n.signTypedMessage = "signTypedMessage"),
      (n.getEnvironmentInfo = "getEnvironmentInfo"),
      (n.getOffChainSignature = "getOffChainSignature"),
      (n.requestAddressBook = "requestAddressBook"),
      (n.wallet_getPermissions = "wallet_getPermissions"),
      (n.wallet_requestPermissions = "wallet_requestPermissions");
  })(e || (Yt.Methods = e = {}));
  var t;
  return (
    (function (n) {
      n.requestAddressBook = "requestAddressBook";
    })(t || (Yt.RestrictedMethods = t = {})),
    Yt
  );
}
var Vd;
function r1() {
  return (
    Vd ||
      ((Vd = 1),
      (function (e) {
        var t =
            Dr.__createBinding ||
            (Object.create
              ? function (s, o, a, u) {
                  u === void 0 && (u = a);
                  var f = Object.getOwnPropertyDescriptor(o, a);
                  (!f ||
                    ("get" in f
                      ? !o.__esModule
                      : f.writable || f.configurable)) &&
                    (f = {
                      enumerable: !0,
                      get: function () {
                        return o[a];
                      },
                    }),
                    Object.defineProperty(s, u, f);
                }
              : function (s, o, a, u) {
                  u === void 0 && (u = a), (s[u] = o[a]);
                }),
          n =
            Dr.__exportStar ||
            function (s, o) {
              for (var a in s)
                a !== "default" &&
                  !Object.prototype.hasOwnProperty.call(o, a) &&
                  t(o, s, a);
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = kg();
        class i {
          constructor(o = null, a = !1) {
            (this.allowedOrigins = null),
              (this.callbacks = new Map()),
              (this.debugMode = !1),
              (this.isServer = typeof window > "u"),
              (this.isValidMessage = ({ origin: u, data: f, source: c }) => {
                const d = !f,
                  l = !this.isServer && c === window.parent,
                  g =
                    typeof f.version < "u" && parseInt(f.version.split(".")[0]),
                  h = typeof g == "number" && g >= 1;
                let b = !0;
                return (
                  Array.isArray(this.allowedOrigins) &&
                    (b = this.allowedOrigins.find((v) => v.test(u)) !== void 0),
                  !d && l && h && b
                );
              }),
              (this.logIncomingMessage = (u) => {
                console.info(
                  `Safe Apps SDK v1: A message was received from origin ${u.origin}. `,
                  u.data,
                );
              }),
              (this.onParentMessage = (u) => {
                this.isValidMessage(u) &&
                  (this.debugMode && this.logIncomingMessage(u),
                  this.handleIncomingMessage(u.data));
              }),
              (this.handleIncomingMessage = (u) => {
                const { id: f } = u,
                  c = this.callbacks.get(f);
                c && (c(u), this.callbacks.delete(f));
              }),
              (this.send = (u, f) => {
                const c = r.MessageFormatter.makeRequest(u, f);
                if (this.isServer) throw new Error("Window doesn't exist");
                return (
                  window.parent.postMessage(c, "*"),
                  new Promise((d, l) => {
                    this.callbacks.set(c.id, (g) => {
                      if (!g.success) {
                        l(new Error(g.error));
                        return;
                      }
                      d(g);
                    });
                  })
                );
              }),
              (this.allowedOrigins = o),
              (this.debugMode = a),
              this.isServer ||
                window.addEventListener("message", this.onParentMessage);
          }
        }
        (e.default = i), n(dr(), e);
      })(Dr)),
    Dr
  );
}
var Wr = {},
  Kr = {},
  Zr = {},
  Wd;
function n1() {
  if (Wd) return Zr;
  (Wd = 1),
    Object.defineProperty(Zr, "__esModule", { value: !0 }),
    (Zr.isObjectEIP712TypedData = void 0);
  const e = (t) =>
    typeof t == "object" &&
    t != null &&
    "domain" in t &&
    "types" in t &&
    "message" in t;
  return (Zr.isObjectEIP712TypedData = e), Zr;
}
var bc = {},
  Kd;
function o1() {
  return (
    Kd || ((Kd = 1), Object.defineProperty(bc, "__esModule", { value: !0 })), bc
  );
}
var hc = {},
  Zd;
function i1() {
  return (
    Zd ||
      ((Zd = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TransferDirection =
            e.TransactionStatus =
            e.TokenType =
            e.Operation =
              void 0);
        var t = Wp();
        Object.defineProperty(e, "Operation", {
          enumerable: !0,
          get: function () {
            return t.Operation;
          },
        }),
          Object.defineProperty(e, "TokenType", {
            enumerable: !0,
            get: function () {
              return t.TokenType;
            },
          }),
          Object.defineProperty(e, "TransactionStatus", {
            enumerable: !0,
            get: function () {
              return t.TransactionStatus;
            },
          }),
          Object.defineProperty(e, "TransferDirection", {
            enumerable: !0,
            get: function () {
              return t.TransferDirection;
            },
          });
      })(hc)),
    hc
  );
}
var gc = {},
  Jd;
function a1() {
  return (
    Jd ||
      ((Jd = 1), Object.defineProperty(gc, "__esModule", { value: !0 }), dr()),
    gc
  );
}
var Yd;
function zc() {
  return (
    Yd ||
      ((Yd = 1),
      (function (e) {
        var t =
            Kr.__createBinding ||
            (Object.create
              ? function (r, i, s, o) {
                  o === void 0 && (o = s);
                  var a = Object.getOwnPropertyDescriptor(i, s);
                  (!a ||
                    ("get" in a
                      ? !i.__esModule
                      : a.writable || a.configurable)) &&
                    (a = {
                      enumerable: !0,
                      get: function () {
                        return i[s];
                      },
                    }),
                    Object.defineProperty(r, o, a);
                }
              : function (r, i, s, o) {
                  o === void 0 && (o = s), (r[o] = i[s]);
                }),
          n =
            Kr.__exportStar ||
            function (r, i) {
              for (var s in r)
                s !== "default" &&
                  !Object.prototype.hasOwnProperty.call(i, s) &&
                  t(i, r, s);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          n(n1(), e),
          n(o1(), e),
          n(i1(), e),
          n(a1(), e);
      })(Kr)),
    Kr
  );
}
var Xd;
function s1() {
  if (Xd) return Wr;
  (Xd = 1),
    Object.defineProperty(Wr, "__esModule", { value: !0 }),
    (Wr.TXs = void 0);
  const e = dr(),
    t = zc();
  class n {
    constructor(i) {
      this.communicator = i;
    }
    async getBySafeTxHash(i) {
      if (!i) throw new Error("Invalid safeTxHash");
      return (
        await this.communicator.send(e.Methods.getTxBySafeTxHash, {
          safeTxHash: i,
        })
      ).data;
    }
    async signMessage(i) {
      const s = { message: i };
      return (await this.communicator.send(e.Methods.signMessage, s)).data;
    }
    async signTypedMessage(i) {
      if (!(0, t.isObjectEIP712TypedData)(i))
        throw new Error("Invalid typed data");
      return (
        await this.communicator.send(e.Methods.signTypedMessage, {
          typedData: i,
        })
      ).data;
    }
    async send({ txs: i, params: s }) {
      if (!i || !i.length) throw new Error("No transactions were passed");
      const o = { txs: i, params: s };
      return (await this.communicator.send(e.Methods.sendTransactions, o)).data;
    }
  }
  return (Wr.TXs = n), Wr;
}
var Jr = {},
  Yr = {},
  Qd;
function Lc() {
  return (
    Qd ||
      ((Qd = 1),
      Object.defineProperty(Yr, "__esModule", { value: !0 }),
      (Yr.RPC_CALLS = void 0),
      (Yr.RPC_CALLS = {
        eth_call: "eth_call",
        eth_gasPrice: "eth_gasPrice",
        eth_getLogs: "eth_getLogs",
        eth_getBalance: "eth_getBalance",
        eth_getCode: "eth_getCode",
        eth_getBlockByHash: "eth_getBlockByHash",
        eth_getBlockByNumber: "eth_getBlockByNumber",
        eth_getStorageAt: "eth_getStorageAt",
        eth_getTransactionByHash: "eth_getTransactionByHash",
        eth_getTransactionReceipt: "eth_getTransactionReceipt",
        eth_getTransactionCount: "eth_getTransactionCount",
        eth_estimateGas: "eth_estimateGas",
        safe_setSettings: "safe_setSettings",
      })),
    Yr
  );
}
var ef;
function u1() {
  if (ef) return Jr;
  (ef = 1),
    Object.defineProperty(Jr, "__esModule", { value: !0 }),
    (Jr.Eth = void 0);
  const e = Lc(),
    t = dr(),
    n = {
      defaultBlockParam: (i = "latest") => i,
      returnFullTxObjectParam: (i = !1) => i,
      blockNumberToHex: (i) =>
        Number.isInteger(i) ? `0x${i.toString(16)}` : i,
    };
  class r {
    constructor(s) {
      (this.communicator = s),
        (this.call = this.buildRequest({
          call: e.RPC_CALLS.eth_call,
          formatters: [null, n.defaultBlockParam],
        })),
        (this.getBalance = this.buildRequest({
          call: e.RPC_CALLS.eth_getBalance,
          formatters: [null, n.defaultBlockParam],
        })),
        (this.getCode = this.buildRequest({
          call: e.RPC_CALLS.eth_getCode,
          formatters: [null, n.defaultBlockParam],
        })),
        (this.getStorageAt = this.buildRequest({
          call: e.RPC_CALLS.eth_getStorageAt,
          formatters: [null, n.blockNumberToHex, n.defaultBlockParam],
        })),
        (this.getPastLogs = this.buildRequest({
          call: e.RPC_CALLS.eth_getLogs,
        })),
        (this.getBlockByHash = this.buildRequest({
          call: e.RPC_CALLS.eth_getBlockByHash,
          formatters: [null, n.returnFullTxObjectParam],
        })),
        (this.getBlockByNumber = this.buildRequest({
          call: e.RPC_CALLS.eth_getBlockByNumber,
          formatters: [n.blockNumberToHex, n.returnFullTxObjectParam],
        })),
        (this.getTransactionByHash = this.buildRequest({
          call: e.RPC_CALLS.eth_getTransactionByHash,
        })),
        (this.getTransactionReceipt = this.buildRequest({
          call: e.RPC_CALLS.eth_getTransactionReceipt,
        })),
        (this.getTransactionCount = this.buildRequest({
          call: e.RPC_CALLS.eth_getTransactionCount,
          formatters: [null, n.defaultBlockParam],
        })),
        (this.getGasPrice = this.buildRequest({
          call: e.RPC_CALLS.eth_gasPrice,
        })),
        (this.getEstimateGas = (o) =>
          this.buildRequest({ call: e.RPC_CALLS.eth_estimateGas })([o])),
        (this.setSafeSettings = this.buildRequest({
          call: e.RPC_CALLS.safe_setSettings,
        }));
    }
    buildRequest(s) {
      const { call: o, formatters: a } = s;
      return async (u) => {
        a &&
          Array.isArray(u) &&
          a.forEach((d, l) => {
            d && (u[l] = d(u[l]));
          });
        const f = { call: o, params: u || [] };
        return (await this.communicator.send(t.Methods.rpcCall, f)).data;
      };
    }
  }
  return (Jr.Eth = r), Jr;
}
var Xt = {},
  yc = {},
  pc = {},
  Xr = {},
  Qr = {},
  tf;
function c1() {
  return (
    tf ||
      ((tf = 1),
      Object.defineProperty(Qr, "__esModule", { value: !0 }),
      (Qr.version = void 0),
      (Qr.version = "1.0.7")),
    Qr
  );
}
var rf;
function Cr() {
  if (rf) return Xr;
  (rf = 1),
    Object.defineProperty(Xr, "__esModule", { value: !0 }),
    (Xr.BaseError = void 0);
  const e = c1();
  class t extends Error {
    constructor(r, i = {}) {
      var u;
      const s =
          i.cause instanceof t
            ? i.cause.details
            : (u = i.cause) != null && u.message
              ? i.cause.message
              : i.details,
        o = (i.cause instanceof t && i.cause.docsPath) || i.docsPath,
        a = [
          r || "An error occurred.",
          "",
          ...(i.metaMessages ? [...i.metaMessages, ""] : []),
          ...(o ? [`Docs: https://abitype.dev${o}`] : []),
          ...(s ? [`Details: ${s}`] : []),
          `Version: abitype@${e.version}`,
        ].join(`
`);
      super(a),
        Object.defineProperty(this, "details", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "docsPath", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "metaMessages", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "shortMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiTypeError",
        }),
        i.cause && (this.cause = i.cause),
        (this.details = s),
        (this.docsPath = o),
        (this.metaMessages = i.metaMessages),
        (this.shortMessage = r);
    }
  }
  return (Xr.BaseError = t), Xr;
}
var yo = {},
  nf;
function d1() {
  if (nf) return yo;
  (nf = 1),
    Object.defineProperty(yo, "__esModule", { value: !0 }),
    (yo.narrow = e);
  function e(t) {
    return t;
  }
  return yo;
}
var po = {},
  _o = {},
  vo = {},
  Eo = {},
  rt = {},
  of;
function pu() {
  if (of) return rt;
  (of = 1),
    Object.defineProperty(rt, "__esModule", { value: !0 }),
    (rt.isTupleRegex = rt.integerRegex = rt.bytesRegex = void 0),
    (rt.execTyped = e);
  function e(t, n) {
    const r = t.exec(n);
    return r == null ? void 0 : r.groups;
  }
  return (
    (rt.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/),
    (rt.integerRegex =
      /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/),
    (rt.isTupleRegex = /^\(.+?\).*?$/),
    rt
  );
}
var af;
function $g() {
  if (af) return Eo;
  (af = 1),
    Object.defineProperty(Eo, "__esModule", { value: !0 }),
    (Eo.formatAbiParameter = n);
  const e = pu(),
    t = /^tuple(?<array>(\[(\d*)\])*)$/;
  function n(r) {
    let i = r.type;
    if (t.test(r.type) && "components" in r) {
      i = "(";
      const s = r.components.length;
      for (let a = 0; a < s; a++) {
        const u = r.components[a];
        (i += n(u)), a < s - 1 && (i += ", ");
      }
      const o = (0, e.execTyped)(t, r.type);
      return (
        (i += `)${(o == null ? void 0 : o.array) ?? ""}`), n({ ...r, type: i })
      );
    }
    return (
      "indexed" in r && r.indexed && (i = `${i} indexed`),
      r.name ? `${i} ${r.name}` : i
    );
  }
  return Eo;
}
var sf;
function Ng() {
  if (sf) return vo;
  (sf = 1),
    Object.defineProperty(vo, "__esModule", { value: !0 }),
    (vo.formatAbiParameters = t);
  const e = $g();
  function t(n) {
    let r = "";
    const i = n.length;
    for (let s = 0; s < i; s++) {
      const o = n[s];
      (r += (0, e.formatAbiParameter)(o)), s !== i - 1 && (r += ", ");
    }
    return r;
  }
  return vo;
}
var uf;
function zg() {
  if (uf) return _o;
  (uf = 1),
    Object.defineProperty(_o, "__esModule", { value: !0 }),
    (_o.formatAbiItem = t);
  const e = Ng();
  function t(n) {
    var r;
    return n.type === "function"
      ? `function ${n.name}(${(0, e.formatAbiParameters)(n.inputs)})${n.stateMutability && n.stateMutability !== "nonpayable" ? ` ${n.stateMutability}` : ""}${(r = n.outputs) != null && r.length ? ` returns (${(0, e.formatAbiParameters)(n.outputs)})` : ""}`
      : n.type === "event"
        ? `event ${n.name}(${(0, e.formatAbiParameters)(n.inputs)})`
        : n.type === "error"
          ? `error ${n.name}(${(0, e.formatAbiParameters)(n.inputs)})`
          : n.type === "constructor"
            ? `constructor(${(0, e.formatAbiParameters)(n.inputs)})${n.stateMutability === "payable" ? " payable" : ""}`
            : n.type === "fallback"
              ? `fallback() external${n.stateMutability === "payable" ? " payable" : ""}`
              : "receive() external payable";
  }
  return _o;
}
var cf;
function f1() {
  if (cf) return po;
  (cf = 1),
    Object.defineProperty(po, "__esModule", { value: !0 }),
    (po.formatAbi = t);
  const e = zg();
  function t(n) {
    const r = [],
      i = n.length;
    for (let s = 0; s < i; s++) {
      const o = n[s],
        a = (0, e.formatAbiItem)(o);
      r.push(a);
    }
    return r;
  }
  return po;
}
var jo = {},
  Ee = {},
  df;
function qr() {
  if (df) return Ee;
  (df = 1),
    Object.defineProperty(Ee, "__esModule", { value: !0 }),
    (Ee.functionModifiers = Ee.eventModifiers = Ee.modifiers = void 0),
    (Ee.isErrorSignature = n),
    (Ee.execErrorSignature = r),
    (Ee.isEventSignature = s),
    (Ee.execEventSignature = o),
    (Ee.isFunctionSignature = u),
    (Ee.execFunctionSignature = f),
    (Ee.isStructSignature = d),
    (Ee.execStructSignature = l),
    (Ee.isConstructorSignature = h),
    (Ee.execConstructorSignature = b),
    (Ee.isFallbackSignature = _),
    (Ee.isReceiveSignature = m);
  const e = pu(),
    t = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
  function n(p) {
    return t.test(p);
  }
  function r(p) {
    return (0, e.execTyped)(t, p);
  }
  const i = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
  function s(p) {
    return i.test(p);
  }
  function o(p) {
    return (0, e.execTyped)(i, p);
  }
  const a =
    /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
  function u(p) {
    return a.test(p);
  }
  function f(p) {
    return (0, e.execTyped)(a, p);
  }
  const c = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
  function d(p) {
    return c.test(p);
  }
  function l(p) {
    return (0, e.execTyped)(c, p);
  }
  const g =
    /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
  function h(p) {
    return g.test(p);
  }
  function b(p) {
    return (0, e.execTyped)(g, p);
  }
  const v = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
  function _(p) {
    return v.test(p);
  }
  const E = /^receive\(\) external payable$/;
  function m(p) {
    return E.test(p);
  }
  return (
    (Ee.modifiers = new Set(["memory", "indexed", "storage", "calldata"])),
    (Ee.eventModifiers = new Set(["indexed"])),
    (Ee.functionModifiers = new Set(["calldata", "memory", "storage"])),
    Ee
  );
}
var Po = {},
  ot = {},
  ff;
function _u() {
  if (ff) return ot;
  (ff = 1),
    Object.defineProperty(ot, "__esModule", { value: !0 }),
    (ot.UnknownSolidityTypeError =
      ot.UnknownTypeError =
      ot.InvalidAbiItemError =
        void 0);
  const e = Cr();
  class t extends e.BaseError {
    constructor({ signature: s }) {
      super("Failed to parse ABI item.", {
        details: `parseAbiItem(${JSON.stringify(s, null, 2)})`,
        docsPath: "/api/human#parseabiitem-1",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiItemError",
        });
    }
  }
  ot.InvalidAbiItemError = t;
  class n extends e.BaseError {
    constructor({ type: s }) {
      super("Unknown type.", {
        metaMessages: [
          `Type "${s}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "UnknownTypeError",
        });
    }
  }
  ot.UnknownTypeError = n;
  class r extends e.BaseError {
    constructor({ type: s }) {
      super("Unknown type.", {
        metaMessages: [`Type "${s}" is not a valid ABI type.`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "UnknownSolidityTypeError",
        });
    }
  }
  return (ot.UnknownSolidityTypeError = r), ot;
}
var Te = {},
  lf;
function zn() {
  if (lf) return Te;
  (lf = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te.InvalidAbiTypeParameterError =
      Te.InvalidFunctionModifierError =
      Te.InvalidModifierError =
      Te.SolidityProtectedKeywordError =
      Te.InvalidParameterError =
      Te.InvalidAbiParametersError =
      Te.InvalidAbiParameterError =
        void 0);
  const e = Cr();
  class t extends e.BaseError {
    constructor({ param: f }) {
      super("Failed to parse ABI parameter.", {
        details: `parseAbiParameter(${JSON.stringify(f, null, 2)})`,
        docsPath: "/api/human#parseabiparameter-1",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiParameterError",
        });
    }
  }
  Te.InvalidAbiParameterError = t;
  class n extends e.BaseError {
    constructor({ params: f }) {
      super("Failed to parse ABI parameters.", {
        details: `parseAbiParameters(${JSON.stringify(f, null, 2)})`,
        docsPath: "/api/human#parseabiparameters-1",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiParametersError",
        });
    }
  }
  Te.InvalidAbiParametersError = n;
  class r extends e.BaseError {
    constructor({ param: f }) {
      super("Invalid ABI parameter.", { details: f }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidParameterError",
        });
    }
  }
  Te.InvalidParameterError = r;
  class i extends e.BaseError {
    constructor({ param: f, name: c }) {
      super("Invalid ABI parameter.", {
        details: f,
        metaMessages: [
          `"${c}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SolidityProtectedKeywordError",
        });
    }
  }
  Te.SolidityProtectedKeywordError = i;
  class s extends e.BaseError {
    constructor({ param: f, type: c, modifier: d }) {
      super("Invalid ABI parameter.", {
        details: f,
        metaMessages: [
          `Modifier "${d}" not allowed${c ? ` in "${c}" type` : ""}.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidModifierError",
        });
    }
  }
  Te.InvalidModifierError = s;
  class o extends e.BaseError {
    constructor({ param: f, type: c, modifier: d }) {
      super("Invalid ABI parameter.", {
        details: f,
        metaMessages: [
          `Modifier "${d}" not allowed${c ? ` in "${c}" type` : ""}.`,
          `Data location can only be specified for array, struct, or mapping types, but "${d}" was given.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidFunctionModifierError",
        });
    }
  }
  Te.InvalidFunctionModifierError = o;
  class a extends e.BaseError {
    constructor({ abiParameter: f }) {
      super("Invalid ABI parameter.", {
        details: JSON.stringify(f, null, 2),
        metaMessages: ["ABI parameter type is invalid."],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiTypeParameterError",
        });
    }
  }
  return (Te.InvalidAbiTypeParameterError = a), Te;
}
var it = {},
  mf;
function Dc() {
  if (mf) return it;
  (mf = 1),
    Object.defineProperty(it, "__esModule", { value: !0 }),
    (it.InvalidStructSignatureError =
      it.UnknownSignatureError =
      it.InvalidSignatureError =
        void 0);
  const e = Cr();
  class t extends e.BaseError {
    constructor({ signature: s, type: o }) {
      super(`Invalid ${o} signature.`, { details: s }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidSignatureError",
        });
    }
  }
  it.InvalidSignatureError = t;
  class n extends e.BaseError {
    constructor({ signature: s }) {
      super("Unknown signature.", { details: s }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "UnknownSignatureError",
        });
    }
  }
  it.UnknownSignatureError = n;
  class r extends e.BaseError {
    constructor({ signature: s }) {
      super("Invalid struct signature.", {
        details: s,
        metaMessages: ["No properties exist."],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidStructSignatureError",
        });
    }
  }
  return (it.InvalidStructSignatureError = r), it;
}
var en = {},
  bf;
function Lg() {
  if (bf) return en;
  (bf = 1),
    Object.defineProperty(en, "__esModule", { value: !0 }),
    (en.CircularReferenceError = void 0);
  const e = Cr();
  class t extends e.BaseError {
    constructor({ type: r }) {
      super("Circular reference detected.", {
        metaMessages: [`Struct "${r}" is a circular reference.`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "CircularReferenceError",
        });
    }
  }
  return (en.CircularReferenceError = t), en;
}
var at = {},
  tn = {},
  hf;
function Dg() {
  if (hf) return tn;
  (hf = 1),
    Object.defineProperty(tn, "__esModule", { value: !0 }),
    (tn.InvalidParenthesisError = void 0);
  const e = Cr();
  class t extends e.BaseError {
    constructor({ current: r, depth: i }) {
      super("Unbalanced parentheses.", {
        metaMessages: [
          `"${r.trim()}" has too many ${i > 0 ? "opening" : "closing"} parentheses.`,
        ],
        details: `Depth "${i}"`,
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidParenthesisError",
        });
    }
  }
  return (tn.InvalidParenthesisError = t), tn;
}
var yr = {},
  gf;
function l1() {
  if (gf) return yr;
  (gf = 1),
    Object.defineProperty(yr, "__esModule", { value: !0 }),
    (yr.parameterCache = void 0),
    (yr.getParameterCacheKey = e);
  function e(t, n, r) {
    let i = "";
    if (r)
      for (const s of Object.entries(r)) {
        if (!s) continue;
        let o = "";
        for (const a of s[1]) o += `[${a.type}${a.name ? `:${a.name}` : ""}]`;
        i += `(${s[0]}{${o}})`;
      }
    return n ? `${n}:${t}${i}` : t;
  }
  return (
    (yr.parameterCache = new Map([
      ["address", { type: "address" }],
      ["bool", { type: "bool" }],
      ["bytes", { type: "bytes" }],
      ["bytes32", { type: "bytes32" }],
      ["int", { type: "int256" }],
      ["int256", { type: "int256" }],
      ["string", { type: "string" }],
      ["uint", { type: "uint256" }],
      ["uint8", { type: "uint8" }],
      ["uint16", { type: "uint16" }],
      ["uint24", { type: "uint24" }],
      ["uint32", { type: "uint32" }],
      ["uint64", { type: "uint64" }],
      ["uint96", { type: "uint96" }],
      ["uint112", { type: "uint112" }],
      ["uint160", { type: "uint160" }],
      ["uint192", { type: "uint192" }],
      ["uint256", { type: "uint256" }],
      ["address owner", { type: "address", name: "owner" }],
      ["address to", { type: "address", name: "to" }],
      ["bool approved", { type: "bool", name: "approved" }],
      ["bytes _data", { type: "bytes", name: "_data" }],
      ["bytes data", { type: "bytes", name: "data" }],
      ["bytes signature", { type: "bytes", name: "signature" }],
      ["bytes32 hash", { type: "bytes32", name: "hash" }],
      ["bytes32 r", { type: "bytes32", name: "r" }],
      ["bytes32 root", { type: "bytes32", name: "root" }],
      ["bytes32 s", { type: "bytes32", name: "s" }],
      ["string name", { type: "string", name: "name" }],
      ["string symbol", { type: "string", name: "symbol" }],
      ["string tokenURI", { type: "string", name: "tokenURI" }],
      ["uint tokenId", { type: "uint256", name: "tokenId" }],
      ["uint8 v", { type: "uint8", name: "v" }],
      ["uint256 balance", { type: "uint256", name: "balance" }],
      ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
      ["uint256 value", { type: "uint256", name: "value" }],
      [
        "event:address indexed from",
        { type: "address", name: "from", indexed: !0 },
      ],
      [
        "event:address indexed to",
        { type: "address", name: "to", indexed: !0 },
      ],
      [
        "event:uint indexed tokenId",
        { type: "uint256", name: "tokenId", indexed: !0 },
      ],
      [
        "event:uint256 indexed tokenId",
        { type: "uint256", name: "tokenId", indexed: !0 },
      ],
    ])),
    yr
  );
}
var yf;
function Br() {
  if (yf) return at;
  (yf = 1),
    Object.defineProperty(at, "__esModule", { value: !0 }),
    (at.parseSignature = a),
    (at.parseAbiParameter = d),
    (at.splitParameters = l),
    (at.isSolidityType = g),
    (at.isSolidityKeyword = b),
    (at.isValidDataLocation = v);
  const e = pu(),
    t = _u(),
    n = zn(),
    r = Dc(),
    i = Dg(),
    s = l1(),
    o = qr();
  function a(_, E = {}) {
    if ((0, o.isFunctionSignature)(_)) {
      const m = (0, o.execFunctionSignature)(_);
      if (!m)
        throw new r.InvalidSignatureError({ signature: _, type: "function" });
      const p = l(m.parameters),
        y = [],
        j = p.length;
      for (let S = 0; S < j; S++)
        y.push(
          d(p[S], {
            modifiers: o.functionModifiers,
            structs: E,
            type: "function",
          }),
        );
      const P = [];
      if (m.returns) {
        const S = l(m.returns),
          w = S.length;
        for (let q = 0; q < w; q++)
          P.push(
            d(S[q], {
              modifiers: o.functionModifiers,
              structs: E,
              type: "function",
            }),
          );
      }
      return {
        name: m.name,
        type: "function",
        stateMutability: m.stateMutability ?? "nonpayable",
        inputs: y,
        outputs: P,
      };
    }
    if ((0, o.isEventSignature)(_)) {
      const m = (0, o.execEventSignature)(_);
      if (!m)
        throw new r.InvalidSignatureError({ signature: _, type: "event" });
      const p = l(m.parameters),
        y = [],
        j = p.length;
      for (let P = 0; P < j; P++)
        y.push(
          d(p[P], { modifiers: o.eventModifiers, structs: E, type: "event" }),
        );
      return { name: m.name, type: "event", inputs: y };
    }
    if ((0, o.isErrorSignature)(_)) {
      const m = (0, o.execErrorSignature)(_);
      if (!m)
        throw new r.InvalidSignatureError({ signature: _, type: "error" });
      const p = l(m.parameters),
        y = [],
        j = p.length;
      for (let P = 0; P < j; P++)
        y.push(d(p[P], { structs: E, type: "error" }));
      return { name: m.name, type: "error", inputs: y };
    }
    if ((0, o.isConstructorSignature)(_)) {
      const m = (0, o.execConstructorSignature)(_);
      if (!m)
        throw new r.InvalidSignatureError({
          signature: _,
          type: "constructor",
        });
      const p = l(m.parameters),
        y = [],
        j = p.length;
      for (let P = 0; P < j; P++)
        y.push(d(p[P], { structs: E, type: "constructor" }));
      return {
        type: "constructor",
        stateMutability: m.stateMutability ?? "nonpayable",
        inputs: y,
      };
    }
    if ((0, o.isFallbackSignature)(_)) return { type: "fallback" };
    if ((0, o.isReceiveSignature)(_))
      return { type: "receive", stateMutability: "payable" };
    throw new r.UnknownSignatureError({ signature: _ });
  }
  const u =
      /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
    f =
      /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
    c = /^u?int$/;
  function d(_, E) {
    var B, M;
    const m = (0, s.getParameterCacheKey)(
      _,
      E == null ? void 0 : E.type,
      E == null ? void 0 : E.structs,
    );
    if (s.parameterCache.has(m)) return s.parameterCache.get(m);
    const p = e.isTupleRegex.test(_),
      y = (0, e.execTyped)(p ? f : u, _);
    if (!y) throw new n.InvalidParameterError({ param: _ });
    if (y.name && b(y.name))
      throw new n.SolidityProtectedKeywordError({ param: _, name: y.name });
    const j = y.name ? { name: y.name } : {},
      P = y.modifier === "indexed" ? { indexed: !0 } : {},
      S = (E == null ? void 0 : E.structs) ?? {};
    let w,
      q = {};
    if (p) {
      w = "tuple";
      const A = l(y.type),
        x = [],
        $ = A.length;
      for (let F = 0; F < $; F++) x.push(d(A[F], { structs: S }));
      q = { components: x };
    } else if (y.type in S) (w = "tuple"), (q = { components: S[y.type] });
    else if (c.test(y.type)) w = `${y.type}256`;
    else if (
      ((w = y.type), (E == null ? void 0 : E.type) !== "struct" && !g(w))
    )
      throw new t.UnknownSolidityTypeError({ type: w });
    if (y.modifier) {
      if (
        !(
          (M =
            (B = E == null ? void 0 : E.modifiers) == null ? void 0 : B.has) !=
            null && M.call(B, y.modifier)
        )
      )
        throw new n.InvalidModifierError({
          param: _,
          type: E == null ? void 0 : E.type,
          modifier: y.modifier,
        });
      if (o.functionModifiers.has(y.modifier) && !v(w, !!y.array))
        throw new n.InvalidFunctionModifierError({
          param: _,
          type: E == null ? void 0 : E.type,
          modifier: y.modifier,
        });
    }
    const T = { type: `${w}${y.array ?? ""}`, ...j, ...P, ...q };
    return s.parameterCache.set(m, T), T;
  }
  function l(_, E = [], m = "", p = 0) {
    const y = _.trim().length;
    for (let j = 0; j < y; j++) {
      const P = _[j],
        S = _.slice(j + 1);
      switch (P) {
        case ",":
          return p === 0 ? l(S, [...E, m.trim()]) : l(S, E, `${m}${P}`, p);
        case "(":
          return l(S, E, `${m}${P}`, p + 1);
        case ")":
          return l(S, E, `${m}${P}`, p - 1);
        default:
          return l(S, E, `${m}${P}`, p);
      }
    }
    if (m === "") return E;
    if (p !== 0) throw new i.InvalidParenthesisError({ current: m, depth: p });
    return E.push(m.trim()), E;
  }
  function g(_) {
    return (
      _ === "address" ||
      _ === "bool" ||
      _ === "function" ||
      _ === "string" ||
      e.bytesRegex.test(_) ||
      e.integerRegex.test(_)
    );
  }
  const h =
    /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
  function b(_) {
    return (
      _ === "address" ||
      _ === "bool" ||
      _ === "function" ||
      _ === "string" ||
      _ === "tuple" ||
      e.bytesRegex.test(_) ||
      e.integerRegex.test(_) ||
      h.test(_)
    );
  }
  function v(_, E) {
    return E || _ === "bytes" || _ === "string" || _ === "tuple";
  }
  return at;
}
var pf;
function vu() {
  if (pf) return Po;
  (pf = 1),
    Object.defineProperty(Po, "__esModule", { value: !0 }),
    (Po.parseStructs = a);
  const e = pu(),
    t = _u(),
    n = zn(),
    r = Dc(),
    i = Lg(),
    s = qr(),
    o = Br();
  function a(c) {
    const d = {},
      l = c.length;
    for (let v = 0; v < l; v++) {
      const _ = c[v];
      if (!(0, s.isStructSignature)(_)) continue;
      const E = (0, s.execStructSignature)(_);
      if (!E)
        throw new r.InvalidSignatureError({ signature: _, type: "struct" });
      const m = E.properties.split(";"),
        p = [],
        y = m.length;
      for (let j = 0; j < y; j++) {
        const S = m[j].trim();
        if (!S) continue;
        const w = (0, o.parseAbiParameter)(S, { type: "struct" });
        p.push(w);
      }
      if (!p.length) throw new r.InvalidStructSignatureError({ signature: _ });
      d[E.name] = p;
    }
    const g = {},
      h = Object.entries(d),
      b = h.length;
    for (let v = 0; v < b; v++) {
      const [_, E] = h[v];
      g[_] = f(E, d);
    }
    return g;
  }
  const u = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
  function f(c, d, l = new Set()) {
    const g = [],
      h = c.length;
    for (let b = 0; b < h; b++) {
      const v = c[b];
      if (e.isTupleRegex.test(v.type)) g.push(v);
      else {
        const E = (0, e.execTyped)(u, v.type);
        if (!(E != null && E.type))
          throw new n.InvalidAbiTypeParameterError({ abiParameter: v });
        const { array: m, type: p } = E;
        if (p in d) {
          if (l.has(p)) throw new i.CircularReferenceError({ type: p });
          g.push({
            ...v,
            type: `tuple${m ?? ""}`,
            components: f(d[p] ?? [], d, new Set([...l, p])),
          });
        } else if ((0, o.isSolidityType)(p)) g.push(v);
        else throw new t.UnknownTypeError({ type: p });
      }
    }
    return g;
  }
  return Po;
}
var _f;
function m1() {
  if (_f) return jo;
  (_f = 1),
    Object.defineProperty(jo, "__esModule", { value: !0 }),
    (jo.parseAbi = r);
  const e = qr(),
    t = vu(),
    n = Br();
  function r(i) {
    const s = (0, t.parseStructs)(i),
      o = [],
      a = i.length;
    for (let u = 0; u < a; u++) {
      const f = i[u];
      (0, e.isStructSignature)(f) || o.push((0, n.parseSignature)(f, s));
    }
    return o;
  }
  return jo;
}
var wo = {},
  vf;
function b1() {
  if (vf) return wo;
  (vf = 1),
    Object.defineProperty(wo, "__esModule", { value: !0 }),
    (wo.parseAbiItem = i);
  const e = _u(),
    t = qr(),
    n = vu(),
    r = Br();
  function i(s) {
    let o;
    if (typeof s == "string") o = (0, r.parseSignature)(s);
    else {
      const a = (0, n.parseStructs)(s),
        u = s.length;
      for (let f = 0; f < u; f++) {
        const c = s[f];
        if (!(0, t.isStructSignature)(c)) {
          o = (0, r.parseSignature)(c, a);
          break;
        }
      }
    }
    if (!o) throw new e.InvalidAbiItemError({ signature: s });
    return o;
  }
  return wo;
}
var To = {},
  Ef;
function h1() {
  if (Ef) return To;
  (Ef = 1),
    Object.defineProperty(To, "__esModule", { value: !0 }),
    (To.parseAbiParameter = i);
  const e = zn(),
    t = qr(),
    n = vu(),
    r = Br();
  function i(s) {
    let o;
    if (typeof s == "string")
      o = (0, r.parseAbiParameter)(s, { modifiers: t.modifiers });
    else {
      const a = (0, n.parseStructs)(s),
        u = s.length;
      for (let f = 0; f < u; f++) {
        const c = s[f];
        if (!(0, t.isStructSignature)(c)) {
          o = (0, r.parseAbiParameter)(c, {
            modifiers: t.modifiers,
            structs: a,
          });
          break;
        }
      }
    }
    if (!o) throw new e.InvalidAbiParameterError({ param: s });
    return o;
  }
  return To;
}
var Ao = {},
  jf;
function g1() {
  if (jf) return Ao;
  (jf = 1),
    Object.defineProperty(Ao, "__esModule", { value: !0 }),
    (Ao.parseAbiParameters = s);
  const e = zn(),
    t = qr(),
    n = vu(),
    r = Br(),
    i = Br();
  function s(o) {
    const a = [];
    if (typeof o == "string") {
      const u = (0, r.splitParameters)(o),
        f = u.length;
      for (let c = 0; c < f; c++)
        a.push((0, i.parseAbiParameter)(u[c], { modifiers: t.modifiers }));
    } else {
      const u = (0, n.parseStructs)(o),
        f = o.length;
      for (let c = 0; c < f; c++) {
        const d = o[c];
        if ((0, t.isStructSignature)(d)) continue;
        const l = (0, r.splitParameters)(d),
          g = l.length;
        for (let h = 0; h < g; h++)
          a.push(
            (0, i.parseAbiParameter)(l[h], {
              modifiers: t.modifiers,
              structs: u,
            }),
          );
      }
    }
    if (a.length === 0) throw new e.InvalidAbiParametersError({ params: o });
    return a;
  }
  return Ao;
}
var Pf;
function Eu() {
  return (
    Pf ||
      ((Pf = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CircularReferenceError =
            e.InvalidParenthesisError =
            e.UnknownSignatureError =
            e.InvalidSignatureError =
            e.InvalidStructSignatureError =
            e.InvalidAbiParameterError =
            e.InvalidAbiParametersError =
            e.InvalidParameterError =
            e.SolidityProtectedKeywordError =
            e.InvalidModifierError =
            e.InvalidFunctionModifierError =
            e.InvalidAbiTypeParameterError =
            e.UnknownSolidityTypeError =
            e.InvalidAbiItemError =
            e.UnknownTypeError =
            e.parseAbiParameters =
            e.parseAbiParameter =
            e.parseAbiItem =
            e.parseAbi =
            e.formatAbiParameters =
            e.formatAbiParameter =
            e.formatAbiItem =
            e.formatAbi =
            e.narrow =
            e.BaseError =
              void 0);
        var t = Cr();
        Object.defineProperty(e, "BaseError", {
          enumerable: !0,
          get: function () {
            return t.BaseError;
          },
        });
        var n = d1();
        Object.defineProperty(e, "narrow", {
          enumerable: !0,
          get: function () {
            return n.narrow;
          },
        });
        var r = f1();
        Object.defineProperty(e, "formatAbi", {
          enumerable: !0,
          get: function () {
            return r.formatAbi;
          },
        });
        var i = zg();
        Object.defineProperty(e, "formatAbiItem", {
          enumerable: !0,
          get: function () {
            return i.formatAbiItem;
          },
        });
        var s = $g();
        Object.defineProperty(e, "formatAbiParameter", {
          enumerable: !0,
          get: function () {
            return s.formatAbiParameter;
          },
        });
        var o = Ng();
        Object.defineProperty(e, "formatAbiParameters", {
          enumerable: !0,
          get: function () {
            return o.formatAbiParameters;
          },
        });
        var a = m1();
        Object.defineProperty(e, "parseAbi", {
          enumerable: !0,
          get: function () {
            return a.parseAbi;
          },
        });
        var u = b1();
        Object.defineProperty(e, "parseAbiItem", {
          enumerable: !0,
          get: function () {
            return u.parseAbiItem;
          },
        });
        var f = h1();
        Object.defineProperty(e, "parseAbiParameter", {
          enumerable: !0,
          get: function () {
            return f.parseAbiParameter;
          },
        });
        var c = g1();
        Object.defineProperty(e, "parseAbiParameters", {
          enumerable: !0,
          get: function () {
            return c.parseAbiParameters;
          },
        });
        var d = _u();
        Object.defineProperty(e, "UnknownTypeError", {
          enumerable: !0,
          get: function () {
            return d.UnknownTypeError;
          },
        }),
          Object.defineProperty(e, "InvalidAbiItemError", {
            enumerable: !0,
            get: function () {
              return d.InvalidAbiItemError;
            },
          }),
          Object.defineProperty(e, "UnknownSolidityTypeError", {
            enumerable: !0,
            get: function () {
              return d.UnknownSolidityTypeError;
            },
          });
        var l = zn();
        Object.defineProperty(e, "InvalidAbiTypeParameterError", {
          enumerable: !0,
          get: function () {
            return l.InvalidAbiTypeParameterError;
          },
        }),
          Object.defineProperty(e, "InvalidFunctionModifierError", {
            enumerable: !0,
            get: function () {
              return l.InvalidFunctionModifierError;
            },
          }),
          Object.defineProperty(e, "InvalidModifierError", {
            enumerable: !0,
            get: function () {
              return l.InvalidModifierError;
            },
          }),
          Object.defineProperty(e, "SolidityProtectedKeywordError", {
            enumerable: !0,
            get: function () {
              return l.SolidityProtectedKeywordError;
            },
          }),
          Object.defineProperty(e, "InvalidParameterError", {
            enumerable: !0,
            get: function () {
              return l.InvalidParameterError;
            },
          }),
          Object.defineProperty(e, "InvalidAbiParametersError", {
            enumerable: !0,
            get: function () {
              return l.InvalidAbiParametersError;
            },
          }),
          Object.defineProperty(e, "InvalidAbiParameterError", {
            enumerable: !0,
            get: function () {
              return l.InvalidAbiParameterError;
            },
          });
        var g = Dc();
        Object.defineProperty(e, "InvalidStructSignatureError", {
          enumerable: !0,
          get: function () {
            return g.InvalidStructSignatureError;
          },
        }),
          Object.defineProperty(e, "InvalidSignatureError", {
            enumerable: !0,
            get: function () {
              return g.InvalidSignatureError;
            },
          }),
          Object.defineProperty(e, "UnknownSignatureError", {
            enumerable: !0,
            get: function () {
              return g.UnknownSignatureError;
            },
          });
        var h = Dg();
        Object.defineProperty(e, "InvalidParenthesisError", {
          enumerable: !0,
          get: function () {
            return h.InvalidParenthesisError;
          },
        });
        var b = Lg();
        Object.defineProperty(e, "CircularReferenceError", {
          enumerable: !0,
          get: function () {
            return b.CircularReferenceError;
          },
        });
      })(pc)),
    pc
  );
}
var pr = {},
  So = {},
  wf;
function fe() {
  if (wf) return So;
  (wf = 1),
    Object.defineProperty(So, "__esModule", { value: !0 }),
    (So.getAction = e);
  function e(t, n, r) {
    const i = t[n.name];
    if (typeof i == "function") return i;
    const s = t[r];
    return typeof s == "function" ? s : (o) => n(t, o);
  }
  return So;
}
var Io = {},
  Ro = {},
  te = {},
  rn = {},
  Tf;
function Pt() {
  if (Tf) return rn;
  (Tf = 1),
    Object.defineProperty(rn, "__esModule", { value: !0 }),
    (rn.formatAbiItem = t),
    (rn.formatAbiParams = n);
  const e = ye();
  function t(i, { includeName: s = !1 } = {}) {
    if (i.type !== "function" && i.type !== "event" && i.type !== "error")
      throw new e.InvalidDefinitionTypeError(i.type);
    return `${i.name}(${n(i.inputs, { includeName: s })})`;
  }
  function n(i, { includeName: s = !1 } = {}) {
    return i ? i.map((o) => r(o, { includeName: s })).join(s ? ", " : ",") : "";
  }
  function r(i, { includeName: s }) {
    return i.type.startsWith("tuple")
      ? `(${n(i.components, { includeName: s })})${i.type.slice(5)}`
      : i.type + (s && i.name ? ` ${i.name}` : "");
  }
  return rn;
}
var Oo = {},
  Bo = {},
  Af;
function Re() {
  if (Af) return Bo;
  (Af = 1),
    Object.defineProperty(Bo, "__esModule", { value: !0 }),
    (Bo.isHex = e);
  function e(t, { strict: n = !0 } = {}) {
    return !t || typeof t != "string"
      ? !1
      : n
        ? /^0x[0-9a-fA-F]*$/.test(t)
        : t.startsWith("0x");
  }
  return Bo;
}
var Sf;
function Me() {
  if (Sf) return Oo;
  (Sf = 1),
    Object.defineProperty(Oo, "__esModule", { value: !0 }),
    (Oo.size = t);
  const e = Re();
  function t(n) {
    return (0, e.isHex)(n, { strict: !1 })
      ? Math.ceil((n.length - 2) / 2)
      : n.length;
  }
  return Oo;
}
var _r = {},
  nn = {},
  If;
function y1() {
  return (
    If ||
      ((If = 1),
      Object.defineProperty(nn, "__esModule", { value: !0 }),
      (nn.version = void 0),
      (nn.version = "2.22.8")),
    nn
  );
}
var Rf;
function oe() {
  if (Rf) return _r;
  (Rf = 1),
    Object.defineProperty(_r, "__esModule", { value: !0 }),
    (_r.BaseError = void 0),
    (_r.setErrorConfig = n);
  const e = y1();
  let t = {
    getDocsUrl: ({ docsBaseUrl: s, docsPath: o = "", docsSlug: a }) =>
      o ? `${s ?? "https://viem.sh"}${o}${a ? `#${a}` : ""}` : void 0,
    version: `viem@${e.version}`,
  };
  function n(s) {
    t = s;
  }
  class r extends Error {
    constructor(o, a = {}) {
      var l;
      const u = (() => {
          var g;
          return a.cause instanceof r
            ? a.cause.details
            : (g = a.cause) != null && g.message
              ? a.cause.message
              : a.details;
        })(),
        f = (a.cause instanceof r && a.cause.docsPath) || a.docsPath,
        c =
          (l = t.getDocsUrl) == null
            ? void 0
            : l.call(t, { ...a, docsPath: f }),
        d = [
          o || "An error occurred.",
          "",
          ...(a.metaMessages ? [...a.metaMessages, ""] : []),
          ...(c ? [`Docs: ${c}`] : []),
          ...(u ? [`Details: ${u}`] : []),
          ...(t.version ? [`Version: ${t.version}`] : []),
        ].join(`
`);
      super(d, a.cause ? { cause: a.cause } : void 0),
        Object.defineProperty(this, "details", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "docsPath", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "metaMessages", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "shortMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "version", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "BaseError",
        }),
        (this.details = u),
        (this.docsPath = f),
        (this.metaMessages = a.metaMessages),
        (this.name = a.name ?? this.name),
        (this.shortMessage = o),
        (this.version = e.version);
    }
    walk(o) {
      return i(this, o);
    }
  }
  _r.BaseError = r;
  function i(s, o) {
    return o != null && o(s)
      ? s
      : s && typeof s == "object" && "cause" in s && s.cause !== void 0
        ? i(s.cause, o)
        : o
          ? null
          : s;
  }
  return _r;
}
var Of;
function ye() {
  if (Of) return te;
  (Of = 1),
    Object.defineProperty(te, "__esModule", { value: !0 }),
    (te.UnsupportedPackedAbiType =
      te.InvalidDefinitionTypeError =
      te.InvalidArrayError =
      te.InvalidAbiDecodingTypeError =
      te.InvalidAbiEncodingTypeError =
      te.DecodeLogTopicsMismatch =
      te.DecodeLogDataMismatch =
      te.BytesSizeMismatchError =
      te.AbiItemAmbiguityError =
      te.AbiFunctionSignatureNotFoundError =
      te.AbiFunctionOutputsNotFoundError =
      te.AbiFunctionNotFoundError =
      te.AbiEventNotFoundError =
      te.AbiEventSignatureNotFoundError =
      te.AbiEventSignatureEmptyTopicsError =
      te.AbiErrorSignatureNotFoundError =
      te.AbiErrorNotFoundError =
      te.AbiErrorInputsNotFoundError =
      te.AbiEncodingLengthMismatchError =
      te.AbiEncodingBytesSizeMismatchError =
      te.AbiEncodingArrayLengthMismatchError =
      te.AbiDecodingZeroDataError =
      te.AbiDecodingDataSizeTooSmallError =
      te.AbiDecodingDataSizeInvalidError =
      te.AbiConstructorParamsNotFoundError =
      te.AbiConstructorNotFoundError =
        void 0);
  const e = Pt(),
    t = Me(),
    n = oe();
  class r extends n.BaseError {
    constructor({ docsPath: A }) {
      super(
        [
          "A constructor was not found on the ABI.",
          "Make sure you are using the correct ABI and that the constructor exists on it.",
        ].join(`
`),
        { docsPath: A, name: "AbiConstructorNotFoundError" },
      );
    }
  }
  te.AbiConstructorNotFoundError = r;
  class i extends n.BaseError {
    constructor({ docsPath: A }) {
      super(
        [
          "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
          "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
        ].join(`
`),
        { docsPath: A, name: "AbiConstructorParamsNotFoundError" },
      );
    }
  }
  te.AbiConstructorParamsNotFoundError = i;
  class s extends n.BaseError {
    constructor({ data: A, size: x }) {
      super(
        [
          `Data size of ${x} bytes is invalid.`,
          "Size must be in increments of 32 bytes (size % 32 === 0).",
        ].join(`
`),
        {
          metaMessages: [`Data: ${A} (${x} bytes)`],
          name: "AbiDecodingDataSizeInvalidError",
        },
      );
    }
  }
  te.AbiDecodingDataSizeInvalidError = s;
  class o extends n.BaseError {
    constructor({ data: A, params: x, size: $ }) {
      super(
        [`Data size of ${$} bytes is too small for given parameters.`].join(`
`),
        {
          metaMessages: [
            `Params: (${(0, e.formatAbiParams)(x, { includeName: !0 })})`,
            `Data:   ${A} (${$} bytes)`,
          ],
          name: "AbiDecodingDataSizeTooSmallError",
        },
      ),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "params", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "size", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = A),
        (this.params = x),
        (this.size = $);
    }
  }
  te.AbiDecodingDataSizeTooSmallError = o;
  class a extends n.BaseError {
    constructor() {
      super('Cannot decode zero data ("0x") with ABI parameters.', {
        name: "AbiDecodingZeroDataError",
      });
    }
  }
  te.AbiDecodingZeroDataError = a;
  class u extends n.BaseError {
    constructor({ expectedLength: A, givenLength: x, type: $ }) {
      super(
        [
          `ABI encoding array length mismatch for type ${$}.`,
          `Expected length: ${A}`,
          `Given length: ${x}`,
        ].join(`
`),
        { name: "AbiEncodingArrayLengthMismatchError" },
      );
    }
  }
  te.AbiEncodingArrayLengthMismatchError = u;
  class f extends n.BaseError {
    constructor({ expectedSize: A, value: x }) {
      super(
        `Size of bytes "${x}" (bytes${(0, t.size)(x)}) does not match expected size (bytes${A}).`,
        { name: "AbiEncodingBytesSizeMismatchError" },
      );
    }
  }
  te.AbiEncodingBytesSizeMismatchError = f;
  class c extends n.BaseError {
    constructor({ expectedLength: A, givenLength: x }) {
      super(
        [
          "ABI encoding params/values length mismatch.",
          `Expected length (params): ${A}`,
          `Given length (values): ${x}`,
        ].join(`
`),
        { name: "AbiEncodingLengthMismatchError" },
      );
    }
  }
  te.AbiEncodingLengthMismatchError = c;
  class d extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super(
        [
          `Arguments (\`args\`) were provided to "${A}", but "${A}" on the ABI does not contain any parameters (\`inputs\`).`,
          "Cannot encode error result without knowing what the parameter types are.",
          "Make sure you are using the correct ABI and that the inputs exist on it.",
        ].join(`
`),
        { docsPath: x, name: "AbiErrorInputsNotFoundError" },
      );
    }
  }
  te.AbiErrorInputsNotFoundError = d;
  class l extends n.BaseError {
    constructor(A, { docsPath: x } = {}) {
      super(
        [
          `Error ${A ? `"${A}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
        ].join(`
`),
        { docsPath: x, name: "AbiErrorNotFoundError" },
      );
    }
  }
  te.AbiErrorNotFoundError = l;
  class g extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super(
        [
          `Encoded error signature "${A}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
          `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${A}.`,
        ].join(`
`),
        { docsPath: x, name: "AbiErrorSignatureNotFoundError" },
      ),
        Object.defineProperty(this, "signature", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.signature = A);
    }
  }
  te.AbiErrorSignatureNotFoundError = g;
  class h extends n.BaseError {
    constructor({ docsPath: A }) {
      super("Cannot extract event signature from empty topics.", {
        docsPath: A,
        name: "AbiEventSignatureEmptyTopicsError",
      });
    }
  }
  te.AbiEventSignatureEmptyTopicsError = h;
  class b extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super(
        [
          `Encoded event signature "${A}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the event exists on it.",
          `You can look up the signature here: https://openchain.xyz/signatures?query=${A}.`,
        ].join(`
`),
        { docsPath: x, name: "AbiEventSignatureNotFoundError" },
      );
    }
  }
  te.AbiEventSignatureNotFoundError = b;
  class v extends n.BaseError {
    constructor(A, { docsPath: x } = {}) {
      super(
        [
          `Event ${A ? `"${A}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the event exists on it.",
        ].join(`
`),
        { docsPath: x, name: "AbiEventNotFoundError" },
      );
    }
  }
  te.AbiEventNotFoundError = v;
  class _ extends n.BaseError {
    constructor(A, { docsPath: x } = {}) {
      super(
        [
          `Function ${A ? `"${A}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the function exists on it.",
        ].join(`
`),
        { docsPath: x, name: "AbiFunctionNotFoundError" },
      );
    }
  }
  te.AbiFunctionNotFoundError = _;
  class E extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super(
        [
          `Function "${A}" does not contain any \`outputs\` on ABI.`,
          "Cannot decode function result without knowing what the parameter types are.",
          "Make sure you are using the correct ABI and that the function exists on it.",
        ].join(`
`),
        { docsPath: x, name: "AbiFunctionOutputsNotFoundError" },
      );
    }
  }
  te.AbiFunctionOutputsNotFoundError = E;
  class m extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super(
        [
          `Encoded function signature "${A}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the function exists on it.",
          `You can look up the signature here: https://openchain.xyz/signatures?query=${A}.`,
        ].join(`
`),
        { docsPath: x, name: "AbiFunctionSignatureNotFoundError" },
      );
    }
  }
  te.AbiFunctionSignatureNotFoundError = m;
  class p extends n.BaseError {
    constructor(A, x) {
      super("Found ambiguous types in overloaded ABI items.", {
        metaMessages: [
          `\`${A.type}\` in \`${(0, e.formatAbiItem)(A.abiItem)}\`, and`,
          `\`${x.type}\` in \`${(0, e.formatAbiItem)(x.abiItem)}\``,
          "",
          "These types encode differently and cannot be distinguished at runtime.",
          "Remove one of the ambiguous items in the ABI.",
        ],
        name: "AbiItemAmbiguityError",
      });
    }
  }
  te.AbiItemAmbiguityError = p;
  class y extends n.BaseError {
    constructor({ expectedSize: A, givenSize: x }) {
      super(`Expected bytes${A}, got bytes${x}.`, {
        name: "BytesSizeMismatchError",
      });
    }
  }
  te.BytesSizeMismatchError = y;
  class j extends n.BaseError {
    constructor({ abiItem: A, data: x, params: $, size: F }) {
      super(
        [
          `Data size of ${F} bytes is too small for non-indexed event parameters.`,
        ].join(`
`),
        {
          metaMessages: [
            `Params: (${(0, e.formatAbiParams)($, { includeName: !0 })})`,
            `Data:   ${x} (${F} bytes)`,
          ],
          name: "DecodeLogDataMismatch",
        },
      ),
        Object.defineProperty(this, "abiItem", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "params", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "size", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abiItem = A),
        (this.data = x),
        (this.params = $),
        (this.size = F);
    }
  }
  te.DecodeLogDataMismatch = j;
  class P extends n.BaseError {
    constructor({ abiItem: A, param: x }) {
      super(
        [
          `Expected a topic for indexed event parameter${x.name ? ` "${x.name}"` : ""} on event "${(0, e.formatAbiItem)(A, { includeName: !0 })}".`,
        ].join(`
`),
        { name: "DecodeLogTopicsMismatch" },
      ),
        Object.defineProperty(this, "abiItem", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abiItem = A);
    }
  }
  te.DecodeLogTopicsMismatch = P;
  class S extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super(
        [
          `Type "${A}" is not a valid encoding type.`,
          "Please provide a valid ABI type.",
        ].join(`
`),
        { docsPath: x, name: "InvalidAbiEncodingType" },
      );
    }
  }
  te.InvalidAbiEncodingTypeError = S;
  class w extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super(
        [
          `Type "${A}" is not a valid decoding type.`,
          "Please provide a valid ABI type.",
        ].join(`
`),
        { docsPath: x, name: "InvalidAbiDecodingType" },
      );
    }
  }
  te.InvalidAbiDecodingTypeError = w;
  class q extends n.BaseError {
    constructor(A) {
      super(
        [`Value "${A}" is not a valid array.`].join(`
`),
        { name: "InvalidArrayError" },
      );
    }
  }
  te.InvalidArrayError = q;
  class T extends n.BaseError {
    constructor(A) {
      super(
        [
          `"${A}" is not a valid definition type.`,
          'Valid types: "function", "event", "error"',
        ].join(`
`),
        { name: "InvalidDefinitionTypeError" },
      );
    }
  }
  te.InvalidDefinitionTypeError = T;
  class B extends n.BaseError {
    constructor(A) {
      super(`Type "${A}" is not supported for packed encoding.`, {
        name: "UnsupportedPackedAbiType",
      });
    }
  }
  return (te.UnsupportedPackedAbiType = B), te;
}
var on = {},
  Bf;
function Ug() {
  if (Bf) return on;
  (Bf = 1),
    Object.defineProperty(on, "__esModule", { value: !0 }),
    (on.FilterTypeNotSupportedError = void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor(r) {
      super(`Filter type "${r}" is not supported.`, {
        name: "FilterTypeNotSupportedError",
      });
    }
  }
  return (on.FilterTypeNotSupportedError = t), on;
}
var Bt = {},
  vr = {},
  st = {},
  Cf;
function ju() {
  if (Cf) return st;
  (Cf = 1),
    Object.defineProperty(st, "__esModule", { value: !0 }),
    (st.InvalidBytesLengthError =
      st.SizeExceedsPaddingSizeError =
      st.SliceOffsetOutOfBoundsError =
        void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor({ offset: s, position: o, size: a }) {
      super(
        `Slice ${o === "start" ? "starting" : "ending"} at offset "${s}" is out-of-bounds (size: ${a}).`,
        { name: "SliceOffsetOutOfBoundsError" },
      );
    }
  }
  st.SliceOffsetOutOfBoundsError = t;
  class n extends e.BaseError {
    constructor({ size: s, targetSize: o, type: a }) {
      super(
        `${a.charAt(0).toUpperCase()}${a.slice(1).toLowerCase()} size (${s}) exceeds padding size (${o}).`,
        { name: "SizeExceedsPaddingSizeError" },
      );
    }
  }
  st.SizeExceedsPaddingSizeError = n;
  class r extends e.BaseError {
    constructor({ size: s, targetSize: o, type: a }) {
      super(
        `${a.charAt(0).toUpperCase()}${a.slice(1).toLowerCase()} is expected to be ${o} ${a} long, but is ${s} ${a} long.`,
        { name: "InvalidBytesLengthError" },
      );
    }
  }
  return (st.InvalidBytesLengthError = r), st;
}
var qf;
function kt() {
  if (qf) return vr;
  (qf = 1),
    Object.defineProperty(vr, "__esModule", { value: !0 }),
    (vr.pad = t),
    (vr.padHex = n),
    (vr.padBytes = r);
  const e = ju();
  function t(i, { dir: s, size: o = 32 } = {}) {
    return typeof i == "string"
      ? n(i, { dir: s, size: o })
      : r(i, { dir: s, size: o });
  }
  function n(i, { dir: s, size: o = 32 } = {}) {
    if (o === null) return i;
    const a = i.replace("0x", "");
    if (a.length > o * 2)
      throw new e.SizeExceedsPaddingSizeError({
        size: Math.ceil(a.length / 2),
        targetSize: o,
        type: "hex",
      });
    return `0x${a[s === "right" ? "padEnd" : "padStart"](o * 2, "0")}`;
  }
  function r(i, { dir: s, size: o = 32 } = {}) {
    if (o === null) return i;
    if (i.length > o)
      throw new e.SizeExceedsPaddingSizeError({
        size: i.length,
        targetSize: o,
        type: "bytes",
      });
    const a = new Uint8Array(o);
    for (let u = 0; u < o; u++) {
      const f = s === "right";
      a[f ? u : o - u - 1] = i[f ? u : i.length - u - 1];
    }
    return a;
  }
  return vr;
}
var ut = {},
  Ce = {},
  xf;
function xr() {
  if (xf) return Ce;
  (xf = 1),
    Object.defineProperty(Ce, "__esModule", { value: !0 }),
    (Ce.SizeOverflowError =
      Ce.InvalidHexValueError =
      Ce.InvalidHexBooleanError =
      Ce.InvalidBytesBooleanError =
      Ce.IntegerOutOfRangeError =
        void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor({ max: a, min: u, signed: f, size: c, value: d }) {
      super(
        `Number "${d}" is not in safe ${c ? `${c * 8}-bit ${f ? "signed" : "unsigned"} ` : ""}integer range ${a ? `(${u} to ${a})` : `(above ${u})`}`,
        { name: "IntegerOutOfRangeError" },
      );
    }
  }
  Ce.IntegerOutOfRangeError = t;
  class n extends e.BaseError {
    constructor(a) {
      super(
        `Bytes value "${a}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
        { name: "InvalidBytesBooleanError" },
      );
    }
  }
  Ce.InvalidBytesBooleanError = n;
  class r extends e.BaseError {
    constructor(a) {
      super(
        `Hex value "${a}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
        { name: "InvalidHexBooleanError" },
      );
    }
  }
  Ce.InvalidHexBooleanError = r;
  class i extends e.BaseError {
    constructor(a) {
      super(
        `Hex value "${a}" is an odd length (${a.length}). It must be an even length.`,
        { name: "InvalidHexValueError" },
      );
    }
  }
  Ce.InvalidHexValueError = i;
  class s extends e.BaseError {
    constructor({ givenSize: a, maxSize: u }) {
      super(`Size cannot exceed ${u} bytes. Given size: ${a} bytes.`, {
        name: "SizeOverflowError",
      });
    }
  }
  return (Ce.SizeOverflowError = s), Ce;
}
var Co = {},
  Mf;
function $t() {
  if (Mf) return Co;
  (Mf = 1),
    Object.defineProperty(Co, "__esModule", { value: !0 }),
    (Co.trim = e);
  function e(t, { dir: n = "left" } = {}) {
    let r = typeof t == "string" ? t.replace("0x", "") : t,
      i = 0;
    for (
      let s = 0;
      s < r.length - 1 &&
      r[n === "left" ? s : r.length - s - 1].toString() === "0";
      s++
    )
      i++;
    return (
      (r = n === "left" ? r.slice(i) : r.slice(0, r.length - i)),
      typeof t == "string"
        ? (r.length === 1 && n === "right" && (r = `${r}0`),
          `0x${r.length % 2 === 1 ? `0${r}` : r}`)
        : r
    );
  }
  return Co;
}
var Ff;
function Pe() {
  if (Ff) return ut;
  (Ff = 1),
    Object.defineProperty(ut, "__esModule", { value: !0 }),
    (ut.assertSize = i),
    (ut.fromHex = s),
    (ut.hexToBigInt = o),
    (ut.hexToBool = a),
    (ut.hexToNumber = u),
    (ut.hexToString = f);
  const e = xr(),
    t = Me(),
    n = $t(),
    r = le();
  function i(c, { size: d }) {
    if ((0, t.size)(c) > d)
      throw new e.SizeOverflowError({ givenSize: (0, t.size)(c), maxSize: d });
  }
  function s(c, d) {
    const l = typeof d == "string" ? { to: d } : d,
      g = l.to;
    return g === "number"
      ? u(c, l)
      : g === "bigint"
        ? o(c, l)
        : g === "string"
          ? f(c, l)
          : g === "boolean"
            ? a(c, l)
            : (0, r.hexToBytes)(c, l);
  }
  function o(c, d = {}) {
    const { signed: l } = d;
    d.size && i(c, { size: d.size });
    const g = BigInt(c);
    if (!l) return g;
    const h = (c.length - 2) / 2,
      b = (1n << (BigInt(h) * 8n - 1n)) - 1n;
    return g <= b ? g : g - BigInt(`0x${"f".padStart(h * 2, "f")}`) - 1n;
  }
  function a(c, d = {}) {
    let l = c;
    if (
      (d.size && (i(l, { size: d.size }), (l = (0, n.trim)(l))),
      (0, n.trim)(l) === "0x00")
    )
      return !1;
    if ((0, n.trim)(l) === "0x01") return !0;
    throw new e.InvalidHexBooleanError(l);
  }
  function u(c, d = {}) {
    return Number(o(c, d));
  }
  function f(c, d = {}) {
    let l = (0, r.hexToBytes)(c);
    return (
      d.size &&
        (i(l, { size: d.size }), (l = (0, n.trim)(l, { dir: "right" }))),
      new TextDecoder().decode(l)
    );
  }
  return ut;
}
var Ct = {},
  Hf;
function Q() {
  if (Hf) return Ct;
  (Hf = 1),
    Object.defineProperty(Ct, "__esModule", { value: !0 }),
    (Ct.toHex = i),
    (Ct.boolToHex = s),
    (Ct.bytesToHex = o),
    (Ct.numberToHex = a),
    (Ct.stringToHex = f);
  const e = xr(),
    t = kt(),
    n = Pe(),
    r = Array.from({ length: 256 }, (c, d) => d.toString(16).padStart(2, "0"));
  function i(c, d = {}) {
    return typeof c == "number" || typeof c == "bigint"
      ? a(c, d)
      : typeof c == "string"
        ? f(c, d)
        : typeof c == "boolean"
          ? s(c, d)
          : o(c, d);
  }
  function s(c, d = {}) {
    const l = `0x${Number(c)}`;
    return typeof d.size == "number"
      ? ((0, n.assertSize)(l, { size: d.size }),
        (0, t.pad)(l, { size: d.size }))
      : l;
  }
  function o(c, d = {}) {
    let l = "";
    for (let h = 0; h < c.length; h++) l += r[c[h]];
    const g = `0x${l}`;
    return typeof d.size == "number"
      ? ((0, n.assertSize)(g, { size: d.size }),
        (0, t.pad)(g, { dir: "right", size: d.size }))
      : g;
  }
  function a(c, d = {}) {
    const { signed: l, size: g } = d,
      h = BigInt(c);
    let b;
    g
      ? l
        ? (b = (1n << (BigInt(g) * 8n - 1n)) - 1n)
        : (b = 2n ** (BigInt(g) * 8n) - 1n)
      : typeof c == "number" && (b = BigInt(Number.MAX_SAFE_INTEGER));
    const v = typeof b == "bigint" && l ? -b - 1n : 0;
    if ((b && h > b) || h < v) {
      const E = typeof c == "bigint" ? "n" : "";
      throw new e.IntegerOutOfRangeError({
        max: b ? `${b}${E}` : void 0,
        min: `${v}${E}`,
        signed: l,
        size: g,
        value: `${c}${E}`,
      });
    }
    const _ = `0x${(l && h < 0 ? (1n << BigInt(g * 8)) + BigInt(h) : h).toString(16)}`;
    return g ? (0, t.pad)(_, { size: g }) : _;
  }
  const u = new TextEncoder();
  function f(c, d = {}) {
    const l = u.encode(c);
    return o(l, d);
  }
  return Ct;
}
var kf;
function le() {
  if (kf) return Bt;
  (kf = 1),
    Object.defineProperty(Bt, "__esModule", { value: !0 }),
    (Bt.toBytes = o),
    (Bt.boolToBytes = a),
    (Bt.hexToBytes = c),
    (Bt.numberToBytes = d),
    (Bt.stringToBytes = l);
  const e = oe(),
    t = Re(),
    n = kt(),
    r = Pe(),
    i = Q(),
    s = new TextEncoder();
  function o(g, h = {}) {
    return typeof g == "number" || typeof g == "bigint"
      ? d(g, h)
      : typeof g == "boolean"
        ? a(g, h)
        : (0, t.isHex)(g)
          ? c(g, h)
          : l(g, h);
  }
  function a(g, h = {}) {
    const b = new Uint8Array(1);
    return (
      (b[0] = Number(g)),
      typeof h.size == "number"
        ? ((0, r.assertSize)(b, { size: h.size }),
          (0, n.pad)(b, { size: h.size }))
        : b
    );
  }
  const u = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
  function f(g) {
    if (g >= u.zero && g <= u.nine) return g - u.zero;
    if (g >= u.A && g <= u.F) return g - (u.A - 10);
    if (g >= u.a && g <= u.f) return g - (u.a - 10);
  }
  function c(g, h = {}) {
    let b = g;
    h.size &&
      ((0, r.assertSize)(b, { size: h.size }),
      (b = (0, n.pad)(b, { dir: "right", size: h.size })));
    let v = b.slice(2);
    v.length % 2 && (v = `0${v}`);
    const _ = v.length / 2,
      E = new Uint8Array(_);
    for (let m = 0, p = 0; m < _; m++) {
      const y = f(v.charCodeAt(p++)),
        j = f(v.charCodeAt(p++));
      if (y === void 0 || j === void 0)
        throw new e.BaseError(
          `Invalid byte sequence ("${v[p - 2]}${v[p - 1]}" in "${v}").`,
        );
      E[m] = y * 16 + j;
    }
    return E;
  }
  function d(g, h) {
    const b = (0, i.numberToHex)(g, h);
    return c(b);
  }
  function l(g, h = {}) {
    const b = s.encode(g);
    return typeof h.size == "number"
      ? ((0, r.assertSize)(b, { size: h.size }),
        (0, n.pad)(b, { dir: "right", size: h.size }))
      : b;
  }
  return Bt;
}
var qo = {},
  $f;
function Oe() {
  if ($f) return qo;
  ($f = 1),
    Object.defineProperty(qo, "__esModule", { value: !0 }),
    (qo.keccak256 = i);
  const e = Kp(),
    t = Re(),
    n = le(),
    r = Q();
  function i(s, o) {
    const a = o || "hex",
      u = (0, e.keccak_256)(
        (0, t.isHex)(s, { strict: !1 }) ? (0, n.toBytes)(s) : s,
      );
    return a === "bytes" ? u : (0, r.toHex)(u);
  }
  return qo;
}
var an = {},
  xo = {},
  Mo = {},
  Nf;
function p1() {
  if (Nf) return Mo;
  (Nf = 1),
    Object.defineProperty(Mo, "__esModule", { value: !0 }),
    (Mo.hashSignature = r);
  const e = le(),
    t = Oe(),
    n = (i) => (0, t.keccak256)((0, e.toBytes)(i));
  function r(i) {
    return n(i);
  }
  return Mo;
}
var sn = {},
  Fo = {},
  zf;
function _1() {
  if (zf) return Fo;
  (zf = 1),
    Object.defineProperty(Fo, "__esModule", { value: !0 }),
    (Fo.normalizeSignature = t);
  const e = oe();
  function t(n) {
    let r = !0,
      i = "",
      s = 0,
      o = "",
      a = !1;
    for (let u = 0; u < n.length; u++) {
      const f = n[u];
      if (
        (["(", ")", ","].includes(f) && (r = !0),
        f === "(" && s++,
        f === ")" && s--,
        !!r)
      ) {
        if (s === 0) {
          if (f === " " && ["event", "function", ""].includes(o)) o = "";
          else if (((o += f), f === ")")) {
            a = !0;
            break;
          }
          continue;
        }
        if (f === " ") {
          n[u - 1] !== "," && i !== "," && i !== ",(" && ((i = ""), (r = !1));
          continue;
        }
        (o += f), (i += f);
      }
    }
    if (!a) throw new e.BaseError("Unable to normalize signature.");
    return o;
  }
  return Fo;
}
var Lf;
function Uc() {
  if (Lf) return sn;
  (Lf = 1),
    Object.defineProperty(sn, "__esModule", { value: !0 }),
    (sn.toSignature = void 0);
  const e = Eu(),
    t = _1(),
    n = (r) => {
      const i = typeof r == "string" ? r : (0, e.formatAbiItem)(r);
      return (0, t.normalizeSignature)(i);
    };
  return (sn.toSignature = n), sn;
}
var Df;
function Pu() {
  if (Df) return xo;
  (Df = 1),
    Object.defineProperty(xo, "__esModule", { value: !0 }),
    (xo.toSignatureHash = n);
  const e = p1(),
    t = Uc();
  function n(r) {
    return (0, e.hashSignature)((0, t.toSignature)(r));
  }
  return xo;
}
var Uf;
function Mr() {
  if (Uf) return an;
  (Uf = 1),
    Object.defineProperty(an, "__esModule", { value: !0 }),
    (an.toEventSelector = void 0);
  const e = Pu();
  return (an.toEventSelector = e.toSignatureHash), an;
}
var un = {},
  cn = {},
  Gf;
function Ze() {
  if (Gf) return cn;
  (Gf = 1),
    Object.defineProperty(cn, "__esModule", { value: !0 }),
    (cn.InvalidAddressError = void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor({ address: r }) {
      super(`Address "${r}" is invalid.`, {
        metaMessages: [
          "- Address must be a hex value of 20 bytes (40 hex characters).",
          "- Address must match its checksum counterpart.",
        ],
        name: "InvalidAddressError",
      });
    }
  }
  return (cn.InvalidAddressError = t), cn;
}
var _c = {},
  dn = {},
  Vf;
function Ln() {
  if (Vf) return dn;
  (Vf = 1),
    Object.defineProperty(dn, "__esModule", { value: !0 }),
    (dn.LruMap = void 0);
  class e extends Map {
    constructor(n) {
      super(),
        Object.defineProperty(this, "maxSize", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.maxSize = n);
    }
    get(n) {
      const r = super.get(n);
      return (
        super.has(n) && r !== void 0 && (this.delete(n), super.set(n, r)), r
      );
    }
    set(n, r) {
      if ((super.set(n, r), this.maxSize && this.size > this.maxSize)) {
        const i = this.keys().next().value;
        i && this.delete(i);
      }
      return this;
    }
  }
  return (dn.LruMap = e), dn;
}
var fn = {},
  Wf;
function ke() {
  if (Wf) return fn;
  (Wf = 1),
    Object.defineProperty(fn, "__esModule", { value: !0 }),
    (fn.checksumAddress = o),
    (fn.getAddress = a);
  const e = Ze(),
    t = le(),
    n = Oe(),
    r = Ln(),
    i = Fe(),
    s = new r.LruMap(8192);
  function o(u, f) {
    if (s.has(`${u}.${f}`)) return s.get(`${u}.${f}`);
    const c = f ? `${f}${u.toLowerCase()}` : u.substring(2).toLowerCase(),
      d = (0, n.keccak256)((0, t.stringToBytes)(c), "bytes"),
      l = (f ? c.substring(`${f}0x`.length) : c).split("");
    for (let h = 0; h < 40; h += 2)
      d[h >> 1] >> 4 >= 8 && l[h] && (l[h] = l[h].toUpperCase()),
        (d[h >> 1] & 15) >= 8 &&
          l[h + 1] &&
          (l[h + 1] = l[h + 1].toUpperCase());
    const g = `0x${l.join("")}`;
    return s.set(`${u}.${f}`, g), g;
  }
  function a(u, f) {
    if (!(0, i.isAddress)(u, { strict: !1 }))
      throw new e.InvalidAddressError({ address: u });
    return o(u, f);
  }
  return fn;
}
var Kf;
function Fe() {
  return (
    Kf ||
      ((Kf = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isAddressCache = void 0),
          (e.isAddress = i);
        const t = Ln(),
          n = ke(),
          r = /^0x[a-fA-F0-9]{40}$/;
        e.isAddressCache = new t.LruMap(8192);
        function i(s, o) {
          const { strict: a = !0 } = o ?? {},
            u = `${s}.${a}`;
          if (e.isAddressCache.has(u)) return e.isAddressCache.get(u);
          const f = r.test(s)
            ? s.toLowerCase() === s
              ? !0
              : a
                ? (0, n.checksumAddress)(s) === s
                : !0
            : !1;
          return e.isAddressCache.set(u, f), f;
        }
      })(_c)),
    _c
  );
}
var Er = {},
  Zf;
function Be() {
  if (Zf) return Er;
  (Zf = 1),
    Object.defineProperty(Er, "__esModule", { value: !0 }),
    (Er.concat = e),
    (Er.concatBytes = t),
    (Er.concatHex = n);
  function e(r) {
    return typeof r[0] == "string" ? n(r) : t(r);
  }
  function t(r) {
    let i = 0;
    for (const a of r) i += a.length;
    const s = new Uint8Array(i);
    let o = 0;
    for (const a of r) s.set(a, o), (o += a.length);
    return s;
  }
  function n(r) {
    return `0x${r.reduce((i, s) => i + s.replace("0x", ""), "")}`;
  }
  return Er;
}
var jr = {},
  Jf;
function Je() {
  if (Jf) return jr;
  (Jf = 1),
    Object.defineProperty(jr, "__esModule", { value: !0 }),
    (jr.slice = r),
    (jr.sliceBytes = o),
    (jr.sliceHex = a);
  const e = ju(),
    t = Re(),
    n = Me();
  function r(u, f, c, { strict: d } = {}) {
    return (0, t.isHex)(u, { strict: !1 })
      ? a(u, f, c, { strict: d })
      : o(u, f, c, { strict: d });
  }
  function i(u, f) {
    if (typeof f == "number" && f > 0 && f > (0, n.size)(u) - 1)
      throw new e.SliceOffsetOutOfBoundsError({
        offset: f,
        position: "start",
        size: (0, n.size)(u),
      });
  }
  function s(u, f, c) {
    if (
      typeof f == "number" &&
      typeof c == "number" &&
      (0, n.size)(u) !== c - f
    )
      throw new e.SliceOffsetOutOfBoundsError({
        offset: c,
        position: "end",
        size: (0, n.size)(u),
      });
  }
  function o(u, f, c, { strict: d } = {}) {
    i(u, f);
    const l = u.slice(f, c);
    return d && s(l, f, c), l;
  }
  function a(u, f, c, { strict: d } = {}) {
    i(u, f);
    const l = `0x${u.replace("0x", "").slice((f ?? 0) * 2, (c ?? u.length) * 2)}`;
    return d && s(l, f, c), l;
  }
  return jr;
}
var ct = {},
  Yf;
function wu() {
  return (
    Yf ||
      ((Yf = 1),
      Object.defineProperty(ct, "__esModule", { value: !0 }),
      (ct.integerRegex = ct.bytesRegex = ct.arrayRegex = void 0),
      (ct.arrayRegex = /^(.*)\[([0-9]*)\]$/),
      (ct.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/),
      (ct.integerRegex =
        /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/)),
    ct
  );
}
var Xf;
function Ye() {
  if (Xf) return un;
  (Xf = 1),
    Object.defineProperty(un, "__esModule", { value: !0 }),
    (un.encodeAbiParameters = d),
    (un.getArrayComponents = j);
  const e = ye(),
    t = Ze(),
    n = oe(),
    r = xr(),
    i = Fe(),
    s = Be(),
    o = kt(),
    a = Me(),
    u = Je(),
    f = Q(),
    c = wu();
  function d(P, S) {
    if (P.length !== S.length)
      throw new e.AbiEncodingLengthMismatchError({
        expectedLength: P.length,
        givenLength: S.length,
      });
    const w = l({ params: P, values: S }),
      q = h(w);
    return q.length === 0 ? "0x" : q;
  }
  function l({ params: P, values: S }) {
    const w = [];
    for (let q = 0; q < P.length; q++) w.push(g({ param: P[q], value: S[q] }));
    return w;
  }
  function g({ param: P, value: S }) {
    const w = j(P.type);
    if (w) {
      const [q, T] = w;
      return v(S, { length: q, param: { ...P, type: T } });
    }
    if (P.type === "tuple") return y(S, { param: P });
    if (P.type === "address") return b(S);
    if (P.type === "bool") return E(S);
    if (P.type.startsWith("uint") || P.type.startsWith("int")) {
      const q = P.type.startsWith("int"),
        [, , T = "256"] = c.integerRegex.exec(P.type) ?? [];
      return m(S, { signed: q, size: Number(T) });
    }
    if (P.type.startsWith("bytes")) return _(S, { param: P });
    if (P.type === "string") return p(S);
    throw new e.InvalidAbiEncodingTypeError(P.type, {
      docsPath: "/docs/contract/encodeAbiParameters",
    });
  }
  function h(P) {
    let S = 0;
    for (let B = 0; B < P.length; B++) {
      const { dynamic: M, encoded: A } = P[B];
      M ? (S += 32) : (S += (0, a.size)(A));
    }
    const w = [],
      q = [];
    let T = 0;
    for (let B = 0; B < P.length; B++) {
      const { dynamic: M, encoded: A } = P[B];
      M
        ? (w.push((0, f.numberToHex)(S + T, { size: 32 })),
          q.push(A),
          (T += (0, a.size)(A)))
        : w.push(A);
    }
    return (0, s.concat)([...w, ...q]);
  }
  function b(P) {
    if (!(0, i.isAddress)(P)) throw new t.InvalidAddressError({ address: P });
    return { dynamic: !1, encoded: (0, o.padHex)(P.toLowerCase()) };
  }
  function v(P, { length: S, param: w }) {
    const q = S === null;
    if (!Array.isArray(P)) throw new e.InvalidArrayError(P);
    if (!q && P.length !== S)
      throw new e.AbiEncodingArrayLengthMismatchError({
        expectedLength: S,
        givenLength: P.length,
        type: `${w.type}[${S}]`,
      });
    let T = !1;
    const B = [];
    for (let M = 0; M < P.length; M++) {
      const A = g({ param: w, value: P[M] });
      A.dynamic && (T = !0), B.push(A);
    }
    if (q || T) {
      const M = h(B);
      if (q) {
        const A = (0, f.numberToHex)(B.length, { size: 32 });
        return {
          dynamic: !0,
          encoded: B.length > 0 ? (0, s.concat)([A, M]) : A,
        };
      }
      if (T) return { dynamic: !0, encoded: M };
    }
    return {
      dynamic: !1,
      encoded: (0, s.concat)(B.map(({ encoded: M }) => M)),
    };
  }
  function _(P, { param: S }) {
    const [, w] = S.type.split("bytes"),
      q = (0, a.size)(P);
    if (!w) {
      let T = P;
      return (
        q % 32 !== 0 &&
          (T = (0, o.padHex)(T, {
            dir: "right",
            size: Math.ceil((P.length - 2) / 2 / 32) * 32,
          })),
        {
          dynamic: !0,
          encoded: (0, s.concat)([
            (0, o.padHex)((0, f.numberToHex)(q, { size: 32 })),
            T,
          ]),
        }
      );
    }
    if (q !== Number.parseInt(w))
      throw new e.AbiEncodingBytesSizeMismatchError({
        expectedSize: Number.parseInt(w),
        value: P,
      });
    return { dynamic: !1, encoded: (0, o.padHex)(P, { dir: "right" }) };
  }
  function E(P) {
    if (typeof P != "boolean")
      throw new n.BaseError(
        `Invalid boolean value: "${P}" (type: ${typeof P}). Expected: \`true\` or \`false\`.`,
      );
    return { dynamic: !1, encoded: (0, o.padHex)((0, f.boolToHex)(P)) };
  }
  function m(P, { signed: S, size: w = 256 }) {
    if (typeof w == "number") {
      const q = 2n ** (BigInt(w) - (S ? 1n : 0n)) - 1n,
        T = S ? -q - 1n : 0n;
      if (P > q || P < T)
        throw new r.IntegerOutOfRangeError({
          max: q.toString(),
          min: T.toString(),
          signed: S,
          size: w / 8,
          value: P.toString(),
        });
    }
    return {
      dynamic: !1,
      encoded: (0, f.numberToHex)(P, { size: 32, signed: S }),
    };
  }
  function p(P) {
    const S = (0, f.stringToHex)(P),
      w = Math.ceil((0, a.size)(S) / 32),
      q = [];
    for (let T = 0; T < w; T++)
      q.push(
        (0, o.padHex)((0, u.slice)(S, T * 32, (T + 1) * 32), { dir: "right" }),
      );
    return {
      dynamic: !0,
      encoded: (0, s.concat)([
        (0, o.padHex)((0, f.numberToHex)((0, a.size)(S), { size: 32 })),
        ...q,
      ]),
    };
  }
  function y(P, { param: S }) {
    let w = !1;
    const q = [];
    for (let T = 0; T < S.components.length; T++) {
      const B = S.components[T],
        M = Array.isArray(P) ? T : B.name,
        A = g({ param: B, value: P[M] });
      q.push(A), A.dynamic && (w = !0);
    }
    return {
      dynamic: w,
      encoded: w ? h(q) : (0, s.concat)(q.map(({ encoded: T }) => T)),
    };
  }
  function j(P) {
    const S = P.match(/^(.*)\[(\d+)?\]$/);
    return S ? [S[2] ? Number(S[2]) : null, S[1]] : void 0;
  }
  return un;
}
var Pr = {},
  ln = {},
  Qf;
function fr() {
  if (Qf) return ln;
  (Qf = 1),
    Object.defineProperty(ln, "__esModule", { value: !0 }),
    (ln.toFunctionSelector = void 0);
  const e = Je(),
    t = Pu(),
    n = (r) => (0, e.slice)((0, t.toSignatureHash)(r), 0, 4);
  return (ln.toFunctionSelector = n), ln;
}
var el;
function wt() {
  if (el) return Pr;
  (el = 1),
    Object.defineProperty(Pr, "__esModule", { value: !0 }),
    (Pr.getAbiItem = s),
    (Pr.isArgOfType = o),
    (Pr.getAmbiguousTypes = a);
  const e = ye(),
    t = Re(),
    n = Fe(),
    r = Mr(),
    i = fr();
  function s(u) {
    const { abi: f, args: c = [], name: d } = u,
      l = (0, t.isHex)(d, { strict: !1 }),
      g = f.filter((b) =>
        l
          ? b.type === "function"
            ? (0, i.toFunctionSelector)(b) === d
            : b.type === "event"
              ? (0, r.toEventSelector)(b) === d
              : !1
          : "name" in b && b.name === d,
      );
    if (g.length === 0) return;
    if (g.length === 1) return g[0];
    let h;
    for (const b of g) {
      if (!("inputs" in b)) continue;
      if (!c || c.length === 0) {
        if (!b.inputs || b.inputs.length === 0) return b;
        continue;
      }
      if (!b.inputs || b.inputs.length === 0 || b.inputs.length !== c.length)
        continue;
      if (
        c.every((_, E) => {
          const m = "inputs" in b && b.inputs[E];
          return m ? o(_, m) : !1;
        })
      ) {
        if (h && "inputs" in h && h.inputs) {
          const _ = a(b.inputs, h.inputs, c);
          if (_)
            throw new e.AbiItemAmbiguityError(
              { abiItem: b, type: _[0] },
              { abiItem: h, type: _[1] },
            );
        }
        h = b;
      }
    }
    return h || g[0];
  }
  function o(u, f) {
    const c = typeof u,
      d = f.type;
    switch (d) {
      case "address":
        return (0, n.isAddress)(u, { strict: !1 });
      case "bool":
        return c === "boolean";
      case "function":
        return c === "string";
      case "string":
        return c === "string";
      default:
        return d === "tuple" && "components" in f
          ? Object.values(f.components).every((l, g) =>
              o(Object.values(u)[g], l),
            )
          : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                d,
              )
            ? c === "number" || c === "bigint"
            : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(d)
              ? c === "string" || u instanceof Uint8Array
              : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(d)
                ? Array.isArray(u) &&
                  u.every((l) =>
                    o(l, { ...f, type: d.replace(/(\[[0-9]{0,}\])$/, "") }),
                  )
                : !1;
    }
  }
  function a(u, f, c) {
    for (const d in u) {
      const l = u[d],
        g = f[d];
      if (
        l.type === "tuple" &&
        g.type === "tuple" &&
        "components" in l &&
        "components" in g
      )
        return a(l.components, g.components, c[d]);
      const h = [l.type, g.type];
      if (
        h.includes("address") && h.includes("bytes20")
          ? !0
          : h.includes("address") && h.includes("string")
            ? (0, n.isAddress)(c[d], { strict: !1 })
            : h.includes("address") && h.includes("bytes")
              ? (0, n.isAddress)(c[d], { strict: !1 })
              : !1
      )
        return h;
    }
  }
  return Pr;
}
var tl;
function lr() {
  if (tl) return Ro;
  (tl = 1),
    Object.defineProperty(Ro, "__esModule", { value: !0 }),
    (Ro.encodeEventTopics = f);
  const e = ye(),
    t = Ug(),
    n = le(),
    r = Oe(),
    i = Mr(),
    s = Ye(),
    o = Pt(),
    a = wt(),
    u = "/docs/contract/encodeEventTopics";
  function f(d) {
    var m;
    const { abi: l, eventName: g, args: h } = d;
    let b = l[0];
    if (g) {
      const p = (0, a.getAbiItem)({ abi: l, name: g });
      if (!p) throw new e.AbiEventNotFoundError(g, { docsPath: u });
      b = p;
    }
    if (b.type !== "event")
      throw new e.AbiEventNotFoundError(void 0, { docsPath: u });
    const v = (0, o.formatAbiItem)(b),
      _ = (0, i.toEventSelector)(v);
    let E = [];
    if (h && "inputs" in b) {
      const p =
          (m = b.inputs) == null
            ? void 0
            : m.filter((j) => "indexed" in j && j.indexed),
        y = Array.isArray(h)
          ? h
          : Object.values(h).length > 0
            ? ((p == null ? void 0 : p.map((j) => h[j.name])) ?? [])
            : [];
      y.length > 0 &&
        (E =
          (p == null
            ? void 0
            : p.map((j, P) =>
                Array.isArray(y[P])
                  ? y[P].map((S, w) => c({ param: j, value: y[P][w] }))
                  : y[P]
                    ? c({ param: j, value: y[P] })
                    : null,
              )) ?? []);
    }
    return [_, ...E];
  }
  function c({ param: d, value: l }) {
    if (d.type === "string" || d.type === "bytes")
      return (0, r.keccak256)((0, n.toBytes)(l));
    if (d.type === "tuple" || d.type.match(/^(.*)\[(\d+)?\]$/))
      throw new t.FilterTypeNotSupportedError(d.type);
    return (0, s.encodeAbiParameters)([d], [l]);
  }
  return Ro;
}
var Ho = {},
  rl;
function Tu() {
  if (rl) return Ho;
  (rl = 1),
    Object.defineProperty(Ho, "__esModule", { value: !0 }),
    (Ho.createFilterRequestScope = e);
  function e(t, { method: n }) {
    var i, s;
    const r = {};
    return (
      t.transport.type === "fallback" &&
        ((s = (i = t.transport).onResponse) == null ||
          s.call(i, ({ method: o, response: a, status: u, transport: f }) => {
            u === "success" && n === o && (r[a] = f.request);
          })),
      (o) => r[o] || t.request
    );
  }
  return Ho;
}
var nl;
function Gc() {
  if (nl) return Io;
  (nl = 1),
    Object.defineProperty(Io, "__esModule", { value: !0 }),
    (Io.createContractEventFilter = r);
  const e = lr(),
    t = Q(),
    n = Tu();
  async function r(i, s) {
    const {
        address: o,
        abi: a,
        args: u,
        eventName: f,
        fromBlock: c,
        strict: d,
        toBlock: l,
      } = s,
      g = (0, n.createFilterRequestScope)(i, { method: "eth_newFilter" }),
      h = f
        ? (0, e.encodeEventTopics)({ abi: a, args: u, eventName: f })
        : void 0,
      b = await i.request({
        method: "eth_newFilter",
        params: [
          {
            address: o,
            fromBlock: typeof c == "bigint" ? (0, t.numberToHex)(c) : c,
            toBlock: typeof l == "bigint" ? (0, t.numberToHex)(l) : l,
            topics: h,
          },
        ],
      });
    return {
      abi: a,
      args: u,
      eventName: f,
      id: b,
      request: g(b),
      strict: !!d,
      type: "event",
    };
  }
  return Io;
}
var ko = {},
  $o = {},
  ol;
function Ae() {
  if (ol) return $o;
  (ol = 1),
    Object.defineProperty($o, "__esModule", { value: !0 }),
    ($o.parseAccount = e);
  function e(t) {
    return typeof t == "string" ? { address: t, type: "json-rpc" } : t;
  }
  return $o;
}
var No = {},
  zo = {},
  il;
function Gg() {
  if (il) return zo;
  (il = 1),
    Object.defineProperty(zo, "__esModule", { value: !0 }),
    (zo.prepareEncodeFunctionData = s);
  const e = ye(),
    t = fr(),
    n = Pt(),
    r = wt(),
    i = "/docs/contract/encodeFunctionData";
  function s(o) {
    const { abi: a, args: u, functionName: f } = o;
    let c = a[0];
    if (f) {
      const d = (0, r.getAbiItem)({ abi: a, args: u, name: f });
      if (!d) throw new e.AbiFunctionNotFoundError(f, { docsPath: i });
      c = d;
    }
    if (c.type !== "function")
      throw new e.AbiFunctionNotFoundError(void 0, { docsPath: i });
    return {
      abi: [c],
      functionName: (0, t.toFunctionSelector)((0, n.formatAbiItem)(c)),
    };
  }
  return zo;
}
var al;
function Xe() {
  if (al) return No;
  (al = 1),
    Object.defineProperty(No, "__esModule", { value: !0 }),
    (No.encodeFunctionData = r);
  const e = Be(),
    t = Ye(),
    n = Gg();
  function r(i) {
    const { args: s } = i,
      { abi: o, functionName: a } = (() => {
        var d;
        return i.abi.length === 1 &&
          (d = i.functionName) != null &&
          d.startsWith("0x")
          ? i
          : (0, n.prepareEncodeFunctionData)(i);
      })(),
      u = o[0],
      f = a,
      c =
        "inputs" in u && u.inputs
          ? (0, t.encodeAbiParameters)(u.inputs, s ?? [])
          : void 0;
    return (0, e.concatHex)([f, c ?? "0x"]);
  }
  return No;
}
var Lo = {},
  Ie = {},
  dt = {},
  sl;
function Vc() {
  return (
    sl ||
      ((sl = 1),
      Object.defineProperty(dt, "__esModule", { value: !0 }),
      (dt.solidityPanic = dt.solidityError = dt.panicReasons = void 0),
      (dt.panicReasons = {
        1: "An `assert` condition failed.",
        17: "Arithmetic operation resulted in underflow or overflow.",
        18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
        33: "Attempted to convert to an invalid type.",
        34: "Attempted to access a storage byte array that is incorrectly encoded.",
        49: "Performed `.pop()` on an empty array",
        50: "Array index is out of bounds.",
        65: "Allocated too much memory or created an array which is too large.",
        81: "Attempted to call a zero-initialized variable of internal function type.",
      }),
      (dt.solidityError = {
        inputs: [{ name: "message", type: "string" }],
        name: "Error",
        type: "error",
      }),
      (dt.solidityPanic = {
        inputs: [{ name: "reason", type: "uint256" }],
        name: "Panic",
        type: "error",
      })),
    dt
  );
}
var Do = {},
  Uo = {},
  Go = {},
  ft = {},
  ul;
function Vg() {
  if (ul) return ft;
  (ul = 1),
    Object.defineProperty(ft, "__esModule", { value: !0 }),
    (ft.RecursiveReadLimitExceededError =
      ft.PositionOutOfBoundsError =
      ft.NegativeOffsetError =
        void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor({ offset: s }) {
      super(`Offset \`${s}\` cannot be negative.`, {
        name: "NegativeOffsetError",
      });
    }
  }
  ft.NegativeOffsetError = t;
  class n extends e.BaseError {
    constructor({ length: s, position: o }) {
      super(`Position \`${o}\` is out of bounds (\`0 < position < ${s}\`).`, {
        name: "PositionOutOfBoundsError",
      });
    }
  }
  ft.PositionOutOfBoundsError = n;
  class r extends e.BaseError {
    constructor({ count: s, limit: o }) {
      super(
        `Recursive read limit of \`${o}\` exceeded (recursive read count: \`${s}\`).`,
        { name: "RecursiveReadLimitExceededError" },
      );
    }
  }
  return (ft.RecursiveReadLimitExceededError = r), ft;
}
var cl;
function Dn() {
  if (cl) return Go;
  (cl = 1),
    Object.defineProperty(Go, "__esModule", { value: !0 }),
    (Go.createCursor = n);
  const e = Vg(),
    t = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: Number.POSITIVE_INFINITY,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new e.RecursiveReadLimitExceededError({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit,
          });
      },
      assertPosition(r) {
        if (r < 0 || r > this.bytes.length - 1)
          throw new e.PositionOutOfBoundsError({
            length: this.bytes.length,
            position: r,
          });
      },
      decrementPosition(r) {
        if (r < 0) throw new e.NegativeOffsetError({ offset: r });
        const i = this.position - r;
        this.assertPosition(i), (this.position = i);
      },
      getReadCount(r) {
        return this.positionReadCount.get(r || this.position) || 0;
      },
      incrementPosition(r) {
        if (r < 0) throw new e.NegativeOffsetError({ offset: r });
        const i = this.position + r;
        this.assertPosition(i), (this.position = i);
      },
      inspectByte(r) {
        const i = r ?? this.position;
        return this.assertPosition(i), this.bytes[i];
      },
      inspectBytes(r, i) {
        const s = i ?? this.position;
        return this.assertPosition(s + r - 1), this.bytes.subarray(s, s + r);
      },
      inspectUint8(r) {
        const i = r ?? this.position;
        return this.assertPosition(i), this.bytes[i];
      },
      inspectUint16(r) {
        const i = r ?? this.position;
        return this.assertPosition(i + 1), this.dataView.getUint16(i);
      },
      inspectUint24(r) {
        const i = r ?? this.position;
        return (
          this.assertPosition(i + 2),
          (this.dataView.getUint16(i) << 8) + this.dataView.getUint8(i + 2)
        );
      },
      inspectUint32(r) {
        const i = r ?? this.position;
        return this.assertPosition(i + 3), this.dataView.getUint32(i);
      },
      pushByte(r) {
        this.assertPosition(this.position),
          (this.bytes[this.position] = r),
          this.position++;
      },
      pushBytes(r) {
        this.assertPosition(this.position + r.length - 1),
          this.bytes.set(r, this.position),
          (this.position += r.length);
      },
      pushUint8(r) {
        this.assertPosition(this.position),
          (this.bytes[this.position] = r),
          this.position++;
      },
      pushUint16(r) {
        this.assertPosition(this.position + 1),
          this.dataView.setUint16(this.position, r),
          (this.position += 2);
      },
      pushUint24(r) {
        this.assertPosition(this.position + 2),
          this.dataView.setUint16(this.position, r >> 8),
          this.dataView.setUint8(this.position + 2, r & 255),
          (this.position += 3);
      },
      pushUint32(r) {
        this.assertPosition(this.position + 3),
          this.dataView.setUint32(this.position, r),
          (this.position += 4);
      },
      readByte() {
        this.assertReadLimit(), this._touch();
        const r = this.inspectByte();
        return this.position++, r;
      },
      readBytes(r, i) {
        this.assertReadLimit(), this._touch();
        const s = this.inspectBytes(r);
        return (this.position += i ?? r), s;
      },
      readUint8() {
        this.assertReadLimit(), this._touch();
        const r = this.inspectUint8();
        return (this.position += 1), r;
      },
      readUint16() {
        this.assertReadLimit(), this._touch();
        const r = this.inspectUint16();
        return (this.position += 2), r;
      },
      readUint24() {
        this.assertReadLimit(), this._touch();
        const r = this.inspectUint24();
        return (this.position += 3), r;
      },
      readUint32() {
        this.assertReadLimit(), this._touch();
        const r = this.inspectUint32();
        return (this.position += 4), r;
      },
      get remaining() {
        return this.bytes.length - this.position;
      },
      setPosition(r) {
        const i = this.position;
        return (
          this.assertPosition(r), (this.position = r), () => (this.position = i)
        );
      },
      _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const r = this.getReadCount();
        this.positionReadCount.set(this.position, r + 1),
          r > 0 && this.recursiveReadCount++;
      },
    };
  function n(r, { recursiveReadLimit: i = 8192 } = {}) {
    const s = Object.create(t);
    return (
      (s.bytes = r),
      (s.dataView = new DataView(r.buffer, r.byteOffset, r.byteLength)),
      (s.positionReadCount = new Map()),
      (s.recursiveReadLimit = i),
      s
    );
  }
  return Go;
}
var qt = {},
  dl;
function Wc() {
  if (dl) return qt;
  (dl = 1),
    Object.defineProperty(qt, "__esModule", { value: !0 }),
    (qt.fromBytes = i),
    (qt.bytesToBigInt = s),
    (qt.bytesToBool = o),
    (qt.bytesToNumber = a),
    (qt.bytesToString = u);
  const e = xr(),
    t = $t(),
    n = Pe(),
    r = Q();
  function i(f, c) {
    const d = typeof c == "string" ? { to: c } : c,
      l = d.to;
    return l === "number"
      ? a(f, d)
      : l === "bigint"
        ? s(f, d)
        : l === "boolean"
          ? o(f, d)
          : l === "string"
            ? u(f, d)
            : (0, r.bytesToHex)(f, d);
  }
  function s(f, c = {}) {
    typeof c.size < "u" && (0, n.assertSize)(f, { size: c.size });
    const d = (0, r.bytesToHex)(f, c);
    return (0, n.hexToBigInt)(d, c);
  }
  function o(f, c = {}) {
    let d = f;
    if (
      (typeof c.size < "u" &&
        ((0, n.assertSize)(d, { size: c.size }), (d = (0, t.trim)(d))),
      d.length > 1 || d[0] > 1)
    )
      throw new e.InvalidBytesBooleanError(d);
    return !!d[0];
  }
  function a(f, c = {}) {
    typeof c.size < "u" && (0, n.assertSize)(f, { size: c.size });
    const d = (0, r.bytesToHex)(f, c);
    return (0, n.hexToNumber)(d, c);
  }
  function u(f, c = {}) {
    let d = f;
    return (
      typeof c.size < "u" &&
        ((0, n.assertSize)(d, { size: c.size }),
        (d = (0, t.trim)(d, { dir: "right" }))),
      new TextDecoder().decode(d)
    );
  }
  return qt;
}
var fl;
function Nt() {
  if (fl) return Uo;
  (fl = 1),
    Object.defineProperty(Uo, "__esModule", { value: !0 }),
    (Uo.decodeAbiParameters = c);
  const e = ye(),
    t = ke(),
    n = Dn(),
    r = Me(),
    i = Je(),
    s = $t(),
    o = Wc(),
    a = le(),
    u = Q(),
    f = Ye();
  function c(j, P) {
    const S = typeof P == "string" ? (0, a.hexToBytes)(P) : P,
      w = (0, n.createCursor)(S);
    if ((0, r.size)(S) === 0 && j.length > 0)
      throw new e.AbiDecodingZeroDataError();
    if ((0, r.size)(P) && (0, r.size)(P) < 32)
      throw new e.AbiDecodingDataSizeTooSmallError({
        data: typeof P == "string" ? P : (0, u.bytesToHex)(P),
        params: j,
        size: (0, r.size)(P),
      });
    let q = 0;
    const T = [];
    for (let B = 0; B < j.length; ++B) {
      const M = j[B];
      w.setPosition(q);
      const [A, x] = d(w, M, { staticPosition: 0 });
      (q += x), T.push(A);
    }
    return T;
  }
  function d(j, P, { staticPosition: S }) {
    const w = (0, f.getArrayComponents)(P.type);
    if (w) {
      const [q, T] = w;
      return b(j, { ...P, type: T }, { length: q, staticPosition: S });
    }
    if (P.type === "tuple") return m(j, P, { staticPosition: S });
    if (P.type === "address") return h(j);
    if (P.type === "bool") return v(j);
    if (P.type.startsWith("bytes")) return _(j, P, { staticPosition: S });
    if (P.type.startsWith("uint") || P.type.startsWith("int")) return E(j, P);
    if (P.type === "string") return p(j, { staticPosition: S });
    throw new e.InvalidAbiDecodingTypeError(P.type, {
      docsPath: "/docs/contract/decodeAbiParameters",
    });
  }
  const l = 32,
    g = 32;
  function h(j) {
    const P = j.readBytes(32);
    return [
      (0, t.checksumAddress)((0, u.bytesToHex)((0, i.sliceBytes)(P, -20))),
      32,
    ];
  }
  function b(j, P, { length: S, staticPosition: w }) {
    if (!S) {
      const B = (0, o.bytesToNumber)(j.readBytes(g)),
        M = w + B,
        A = M + l;
      j.setPosition(M);
      const x = (0, o.bytesToNumber)(j.readBytes(l)),
        $ = y(P);
      let F = 0;
      const H = [];
      for (let R = 0; R < x; ++R) {
        j.setPosition(A + ($ ? R * 32 : F));
        const [O, I] = d(j, P, { staticPosition: A });
        (F += I), H.push(O);
      }
      return j.setPosition(w + 32), [H, 32];
    }
    if (y(P)) {
      const B = (0, o.bytesToNumber)(j.readBytes(g)),
        M = w + B,
        A = [];
      for (let x = 0; x < S; ++x) {
        j.setPosition(M + x * 32);
        const [$] = d(j, P, { staticPosition: M });
        A.push($);
      }
      return j.setPosition(w + 32), [A, 32];
    }
    let q = 0;
    const T = [];
    for (let B = 0; B < S; ++B) {
      const [M, A] = d(j, P, { staticPosition: w + q });
      (q += A), T.push(M);
    }
    return [T, q];
  }
  function v(j) {
    return [(0, o.bytesToBool)(j.readBytes(32), { size: 32 }), 32];
  }
  function _(j, P, { staticPosition: S }) {
    const [w, q] = P.type.split("bytes");
    if (!q) {
      const B = (0, o.bytesToNumber)(j.readBytes(32));
      j.setPosition(S + B);
      const M = (0, o.bytesToNumber)(j.readBytes(32));
      if (M === 0) return j.setPosition(S + 32), ["0x", 32];
      const A = j.readBytes(M);
      return j.setPosition(S + 32), [(0, u.bytesToHex)(A), 32];
    }
    return [(0, u.bytesToHex)(j.readBytes(Number.parseInt(q), 32)), 32];
  }
  function E(j, P) {
    const S = P.type.startsWith("int"),
      w = Number.parseInt(P.type.split("int")[1] || "256"),
      q = j.readBytes(32);
    return [
      w > 48
        ? (0, o.bytesToBigInt)(q, { signed: S })
        : (0, o.bytesToNumber)(q, { signed: S }),
      32,
    ];
  }
  function m(j, P, { staticPosition: S }) {
    const w =
        P.components.length === 0 || P.components.some(({ name: B }) => !B),
      q = w ? [] : {};
    let T = 0;
    if (y(P)) {
      const B = (0, o.bytesToNumber)(j.readBytes(g)),
        M = S + B;
      for (let A = 0; A < P.components.length; ++A) {
        const x = P.components[A];
        j.setPosition(M + T);
        const [$, F] = d(j, x, { staticPosition: M });
        (T += F), (q[w ? A : x == null ? void 0 : x.name] = $);
      }
      return j.setPosition(S + 32), [q, 32];
    }
    for (let B = 0; B < P.components.length; ++B) {
      const M = P.components[B],
        [A, x] = d(j, M, { staticPosition: S });
      (q[w ? B : M == null ? void 0 : M.name] = A), (T += x);
    }
    return [q, T];
  }
  function p(j, { staticPosition: P }) {
    const S = (0, o.bytesToNumber)(j.readBytes(32)),
      w = P + S;
    j.setPosition(w);
    const q = (0, o.bytesToNumber)(j.readBytes(32));
    if (q === 0) return j.setPosition(P + 32), ["", 32];
    const T = j.readBytes(q, 32),
      B = (0, o.bytesToString)((0, s.trim)(T));
    return j.setPosition(P + 32), [B, 32];
  }
  function y(j) {
    var w;
    const { type: P } = j;
    if (P === "string" || P === "bytes" || P.endsWith("[]")) return !0;
    if (P === "tuple") return (w = j.components) == null ? void 0 : w.some(y);
    const S = (0, f.getArrayComponents)(j.type);
    return !!(S && y({ ...j, type: S[1] }));
  }
  return Uo;
}
var ll;
function Au() {
  if (ll) return Do;
  (ll = 1),
    Object.defineProperty(Do, "__esModule", { value: !0 }),
    (Do.decodeErrorResult = o);
  const e = Vc(),
    t = ye(),
    n = Je(),
    r = fr(),
    i = Nt(),
    s = Pt();
  function o(a) {
    const { abi: u, data: f } = a,
      c = (0, n.slice)(f, 0, 4);
    if (c === "0x") throw new t.AbiDecodingZeroDataError();
    const l = [...(u || []), e.solidityError, e.solidityPanic].find(
      (g) =>
        g.type === "error" &&
        c === (0, r.toFunctionSelector)((0, s.formatAbiItem)(g)),
    );
    if (!l)
      throw new t.AbiErrorSignatureNotFoundError(c, {
        docsPath: "/docs/contract/decodeErrorResult",
      });
    return {
      abiItem: l,
      args:
        "inputs" in l && l.inputs && l.inputs.length > 0
          ? (0, i.decodeAbiParameters)(l.inputs, (0, n.slice)(f, 4))
          : void 0,
      errorName: l.name,
    };
  }
  return Do;
}
var Vo = {},
  mn = {},
  ml;
function Se() {
  if (ml) return mn;
  (ml = 1),
    Object.defineProperty(mn, "__esModule", { value: !0 }),
    (mn.stringify = void 0);
  const e = (t, n, r) =>
    JSON.stringify(
      t,
      (i, s) => {
        const o = typeof s == "bigint" ? s.toString() : s;
        return typeof n == "function" ? n(i, o) : o;
      },
      r,
    );
  return (mn.stringify = e), mn;
}
var bl;
function Wg() {
  if (bl) return Vo;
  (bl = 1),
    Object.defineProperty(Vo, "__esModule", { value: !0 }),
    (Vo.formatAbiItemWithArgs = t);
  const e = Se();
  function t({
    abiItem: n,
    args: r,
    includeFunctionName: i = !0,
    includeName: s = !1,
  }) {
    if ("name" in n && "inputs" in n && n.inputs)
      return `${i ? n.name : ""}(${n.inputs.map((o, a) => `${s && o.name ? `${o.name}: ` : ""}${typeof r[a] == "object" ? (0, e.stringify)(r[a]) : r[a]}`).join(", ")})`;
  }
  return Vo;
}
var Wo = {},
  lt = {},
  hl;
function Un() {
  return (
    hl ||
      ((hl = 1),
      Object.defineProperty(lt, "__esModule", { value: !0 }),
      (lt.weiUnits = lt.gweiUnits = lt.etherUnits = void 0),
      (lt.etherUnits = { gwei: 9, wei: 18 }),
      (lt.gweiUnits = { ether: -9, wei: 9 }),
      (lt.weiUnits = { ether: -18, gwei: -9 })),
    lt
  );
}
var Ko = {},
  gl;
function Su() {
  if (gl) return Ko;
  (gl = 1),
    Object.defineProperty(Ko, "__esModule", { value: !0 }),
    (Ko.formatUnits = e);
  function e(t, n) {
    let r = t.toString();
    const i = r.startsWith("-");
    i && (r = r.slice(1)), (r = r.padStart(n, "0"));
    let [s, o] = [r.slice(0, r.length - n), r.slice(r.length - n)];
    return (
      (o = o.replace(/(0+)$/, "")),
      `${i ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`
    );
  }
  return Ko;
}
var yl;
function Gn() {
  if (yl) return Wo;
  (yl = 1),
    Object.defineProperty(Wo, "__esModule", { value: !0 }),
    (Wo.formatEther = n);
  const e = Un(),
    t = Su();
  function n(r, i = "wei") {
    return (0, t.formatUnits)(r, e.etherUnits[i]);
  }
  return Wo;
}
var Zo = {},
  pl;
function mr() {
  if (pl) return Zo;
  (pl = 1),
    Object.defineProperty(Zo, "__esModule", { value: !0 }),
    (Zo.formatGwei = n);
  const e = Un(),
    t = Su();
  function n(r, i = "wei") {
    return (0, t.formatUnits)(r, e.gweiUnits[i]);
  }
  return Zo;
}
var mt = {},
  _l;
function Kc() {
  if (_l) return mt;
  (_l = 1),
    Object.defineProperty(mt, "__esModule", { value: !0 }),
    (mt.StateAssignmentConflictError = mt.AccountStateConflictError = void 0),
    (mt.prettyStateMapping = r),
    (mt.prettyStateOverride = i);
  const e = oe();
  class t extends e.BaseError {
    constructor({ address: o }) {
      super(`State for account "${o}" is set multiple times.`, {
        name: "AccountStateConflictError",
      });
    }
  }
  mt.AccountStateConflictError = t;
  class n extends e.BaseError {
    constructor() {
      super("state and stateDiff are set on the same account.", {
        name: "StateAssignmentConflictError",
      });
    }
  }
  mt.StateAssignmentConflictError = n;
  function r(s) {
    return s.reduce(
      (o, { slot: a, value: u }) => `${o}        ${a}: ${u}
`,
      "",
    );
  }
  function i(s) {
    return s
      .reduce(
        (o, { address: a, ...u }) => {
          let f = `${o}    ${a}:
`;
          return (
            u.nonce &&
              (f += `      nonce: ${u.nonce}
`),
            u.balance &&
              (f += `      balance: ${u.balance}
`),
            u.code &&
              (f += `      code: ${u.code}
`),
            u.state &&
              ((f += `      state:
`),
              (f += r(u.state))),
            u.stateDiff &&
              ((f += `      stateDiff:
`),
              (f += r(u.stateDiff))),
            f
          );
        },
        `  State Override:
`,
      )
      .slice(0, -1);
  }
  return mt;
}
var ge = {},
  vl;
function He() {
  if (vl) return ge;
  (vl = 1),
    Object.defineProperty(ge, "__esModule", { value: !0 }),
    (ge.WaitForTransactionReceiptTimeoutError =
      ge.TransactionReceiptNotFoundError =
      ge.TransactionNotFoundError =
      ge.TransactionExecutionError =
      ge.InvalidStorageKeySizeError =
      ge.InvalidSerializedTransactionError =
      ge.InvalidSerializedTransactionTypeError =
      ge.InvalidSerializableTransactionError =
      ge.InvalidLegacyVError =
      ge.FeeConflictError =
        void 0),
    (ge.prettyPrint = r);
  const e = Gn(),
    t = mr(),
    n = oe();
  function r(h) {
    const b = Object.entries(h)
        .map(([_, E]) => (E === void 0 || E === !1 ? null : [_, E]))
        .filter(Boolean),
      v = b.reduce((_, [E]) => Math.max(_, E.length), 0);
    return b.map(([_, E]) => `  ${`${_}:`.padEnd(v + 1)}  ${E}`).join(`
`);
  }
  class i extends n.BaseError {
    constructor() {
      super(
        [
          "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
          "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
        ].join(`
`),
        { name: "FeeConflictError" },
      );
    }
  }
  ge.FeeConflictError = i;
  class s extends n.BaseError {
    constructor({ v: b }) {
      super(`Invalid \`v\` value "${b}". Expected 27 or 28.`, {
        name: "InvalidLegacyVError",
      });
    }
  }
  ge.InvalidLegacyVError = s;
  class o extends n.BaseError {
    constructor({ transaction: b }) {
      super("Cannot infer a transaction type from provided transaction.", {
        metaMessages: [
          "Provided Transaction:",
          "{",
          r(b),
          "}",
          "",
          "To infer the type, either provide:",
          "- a `type` to the Transaction, or",
          "- an EIP-1559 Transaction with `maxFeePerGas`, or",
          "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
          "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
          "- an EIP-7702 Transaction with `authorizationList`, or",
          "- a Legacy Transaction with `gasPrice`",
        ],
        name: "InvalidSerializableTransactionError",
      });
    }
  }
  ge.InvalidSerializableTransactionError = o;
  class a extends n.BaseError {
    constructor({ serializedType: b }) {
      super(`Serialized transaction type "${b}" is invalid.`, {
        name: "InvalidSerializedTransactionType",
      }),
        Object.defineProperty(this, "serializedType", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.serializedType = b);
    }
  }
  ge.InvalidSerializedTransactionTypeError = a;
  class u extends n.BaseError {
    constructor({ attributes: b, serializedTransaction: v, type: _ }) {
      const E = Object.entries(b)
        .map(([m, p]) => (typeof p > "u" ? m : void 0))
        .filter(Boolean);
      super(`Invalid serialized transaction of type "${_}" was provided.`, {
        metaMessages: [
          `Serialized Transaction: "${v}"`,
          E.length > 0 ? `Missing Attributes: ${E.join(", ")}` : "",
        ].filter(Boolean),
        name: "InvalidSerializedTransactionError",
      }),
        Object.defineProperty(this, "serializedTransaction", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "type", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.serializedTransaction = v),
        (this.type = _);
    }
  }
  ge.InvalidSerializedTransactionError = u;
  class f extends n.BaseError {
    constructor({ storageKey: b }) {
      super(
        `Size for storage key "${b}" is invalid. Expected 32 bytes. Got ${Math.floor((b.length - 2) / 2)} bytes.`,
        { name: "InvalidStorageKeySizeError" },
      );
    }
  }
  ge.InvalidStorageKeySizeError = f;
  class c extends n.BaseError {
    constructor(
      b,
      {
        account: v,
        docsPath: _,
        chain: E,
        data: m,
        gas: p,
        gasPrice: y,
        maxFeePerGas: j,
        maxPriorityFeePerGas: P,
        nonce: S,
        to: w,
        value: q,
      },
    ) {
      var B;
      const T = r({
        chain:
          E &&
          `${E == null ? void 0 : E.name} (id: ${E == null ? void 0 : E.id})`,
        from: v == null ? void 0 : v.address,
        to: w,
        value:
          typeof q < "u" &&
          `${(0, e.formatEther)(q)} ${((B = E == null ? void 0 : E.nativeCurrency) == null ? void 0 : B.symbol) || "ETH"}`,
        data: m,
        gas: p,
        gasPrice: typeof y < "u" && `${(0, t.formatGwei)(y)} gwei`,
        maxFeePerGas: typeof j < "u" && `${(0, t.formatGwei)(j)} gwei`,
        maxPriorityFeePerGas: typeof P < "u" && `${(0, t.formatGwei)(P)} gwei`,
        nonce: S,
      });
      super(b.shortMessage, {
        cause: b,
        docsPath: _,
        metaMessages: [
          ...(b.metaMessages ? [...b.metaMessages, " "] : []),
          "Request Arguments:",
          T,
        ].filter(Boolean),
        name: "TransactionExecutionError",
      }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.cause = b);
    }
  }
  ge.TransactionExecutionError = c;
  class d extends n.BaseError {
    constructor({
      blockHash: b,
      blockNumber: v,
      blockTag: _,
      hash: E,
      index: m,
    }) {
      let p = "Transaction";
      _ &&
        m !== void 0 &&
        (p = `Transaction at block time "${_}" at index "${m}"`),
        b &&
          m !== void 0 &&
          (p = `Transaction at block hash "${b}" at index "${m}"`),
        v &&
          m !== void 0 &&
          (p = `Transaction at block number "${v}" at index "${m}"`),
        E && (p = `Transaction with hash "${E}"`),
        super(`${p} could not be found.`, { name: "TransactionNotFoundError" });
    }
  }
  ge.TransactionNotFoundError = d;
  class l extends n.BaseError {
    constructor({ hash: b }) {
      super(
        `Transaction receipt with hash "${b}" could not be found. The Transaction may not be processed on a block yet.`,
        { name: "TransactionReceiptNotFoundError" },
      );
    }
  }
  ge.TransactionReceiptNotFoundError = l;
  class g extends n.BaseError {
    constructor({ hash: b }) {
      super(
        `Timed out while waiting for transaction with hash "${b}" to be confirmed.`,
        { name: "WaitForTransactionReceiptTimeoutError" },
      );
    }
  }
  return (ge.WaitForTransactionReceiptTimeoutError = g), ge;
}
var Qt = {},
  El;
function Zc() {
  if (El) return Qt;
  (El = 1),
    Object.defineProperty(Qt, "__esModule", { value: !0 }),
    (Qt.getUrl = Qt.getContractAddress = void 0);
  const e = (n) => n;
  Qt.getContractAddress = e;
  const t = (n) => n;
  return (Qt.getUrl = t), Qt;
}
var jl;
function zt() {
  if (jl) return Ie;
  (jl = 1),
    Object.defineProperty(Ie, "__esModule", { value: !0 }),
    (Ie.RawContractError =
      Ie.CounterfactualDeploymentFailedError =
      Ie.ContractFunctionZeroDataError =
      Ie.ContractFunctionRevertedError =
      Ie.ContractFunctionExecutionError =
      Ie.CallExecutionError =
        void 0);
  const e = Ae(),
    t = Vc(),
    n = Au(),
    r = Pt(),
    i = Wg(),
    s = wt(),
    o = Gn(),
    a = mr(),
    u = ye(),
    f = oe(),
    c = Kc(),
    d = He(),
    l = Zc();
  class g extends f.BaseError {
    constructor(
      p,
      {
        account: y,
        docsPath: j,
        chain: P,
        data: S,
        gas: w,
        gasPrice: q,
        maxFeePerGas: T,
        maxPriorityFeePerGas: B,
        nonce: M,
        to: A,
        value: x,
        stateOverride: $,
      },
    ) {
      var R;
      const F = y ? (0, e.parseAccount)(y) : void 0;
      let H = (0, d.prettyPrint)({
        from: F == null ? void 0 : F.address,
        to: A,
        value:
          typeof x < "u" &&
          `${(0, o.formatEther)(x)} ${((R = P == null ? void 0 : P.nativeCurrency) == null ? void 0 : R.symbol) || "ETH"}`,
        data: S,
        gas: w,
        gasPrice: typeof q < "u" && `${(0, a.formatGwei)(q)} gwei`,
        maxFeePerGas: typeof T < "u" && `${(0, a.formatGwei)(T)} gwei`,
        maxPriorityFeePerGas: typeof B < "u" && `${(0, a.formatGwei)(B)} gwei`,
        nonce: M,
      });
      $ &&
        (H += `
${(0, c.prettyStateOverride)($)}`),
        super(p.shortMessage, {
          cause: p,
          docsPath: j,
          metaMessages: [
            ...(p.metaMessages ? [...p.metaMessages, " "] : []),
            "Raw Call Arguments:",
            H,
          ].filter(Boolean),
          name: "CallExecutionError",
        }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.cause = p);
    }
  }
  Ie.CallExecutionError = g;
  class h extends f.BaseError {
    constructor(
      p,
      {
        abi: y,
        args: j,
        contractAddress: P,
        docsPath: S,
        functionName: w,
        sender: q,
      },
    ) {
      const T = (0, s.getAbiItem)({ abi: y, args: j, name: w }),
        B = T
          ? (0, i.formatAbiItemWithArgs)({
              abiItem: T,
              args: j,
              includeFunctionName: !1,
              includeName: !1,
            })
          : void 0,
        M = T ? (0, r.formatAbiItem)(T, { includeName: !0 }) : void 0,
        A = (0, d.prettyPrint)({
          address: P && (0, l.getContractAddress)(P),
          function: M,
          args:
            B &&
            B !== "()" &&
            `${[...Array((w == null ? void 0 : w.length) ?? 0).keys()].map(() => " ").join("")}${B}`,
          sender: q,
        });
      super(
        p.shortMessage ||
          `An unknown error occurred while executing the contract function "${w}".`,
        {
          cause: p,
          docsPath: S,
          metaMessages: [
            ...(p.metaMessages ? [...p.metaMessages, " "] : []),
            A && "Contract Call:",
            A,
          ].filter(Boolean),
          name: "ContractFunctionExecutionError",
        },
      ),
        Object.defineProperty(this, "abi", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "args", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "contractAddress", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "formattedArgs", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "functionName", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sender", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abi = y),
        (this.args = j),
        (this.cause = p),
        (this.contractAddress = P),
        (this.functionName = w),
        (this.sender = q);
    }
  }
  Ie.ContractFunctionExecutionError = h;
  class b extends f.BaseError {
    constructor({ abi: p, data: y, functionName: j, message: P }) {
      let S, w, q, T;
      if (y && y !== "0x")
        try {
          w = (0, n.decodeErrorResult)({ abi: p, data: y });
          const { abiItem: M, errorName: A, args: x } = w;
          if (A === "Error") T = x[0];
          else if (A === "Panic") {
            const [$] = x;
            T = t.panicReasons[$];
          } else {
            const $ = M ? (0, r.formatAbiItem)(M, { includeName: !0 }) : void 0,
              F =
                M && x
                  ? (0, i.formatAbiItemWithArgs)({
                      abiItem: M,
                      args: x,
                      includeFunctionName: !1,
                      includeName: !1,
                    })
                  : void 0;
            q = [
              $ ? `Error: ${$}` : "",
              F && F !== "()"
                ? `       ${[...Array((A == null ? void 0 : A.length) ?? 0).keys()].map(() => " ").join("")}${F}`
                : "",
            ];
          }
        } catch (M) {
          S = M;
        }
      else P && (T = P);
      let B;
      S instanceof u.AbiErrorSignatureNotFoundError &&
        ((B = S.signature),
        (q = [
          `Unable to decode signature "${B}" as it was not found on the provided ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
          `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${B}.`,
        ])),
        super(
          (T && T !== "execution reverted") || B
            ? [
                `The contract function "${j}" reverted with the following ${B ? "signature" : "reason"}:`,
                T || B,
              ].join(`
`)
            : `The contract function "${j}" reverted.`,
          { cause: S, metaMessages: q, name: "ContractFunctionRevertedError" },
        ),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "reason", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "signature", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = w),
        (this.reason = T),
        (this.signature = B);
    }
  }
  Ie.ContractFunctionRevertedError = b;
  class v extends f.BaseError {
    constructor({ functionName: p }) {
      super(`The contract function "${p}" returned no data ("0x").`, {
        metaMessages: [
          "This could be due to any of the following:",
          `  - The contract does not have the function "${p}",`,
          "  - The parameters passed to the contract function may be invalid, or",
          "  - The address is not a contract.",
        ],
        name: "ContractFunctionZeroDataError",
      });
    }
  }
  Ie.ContractFunctionZeroDataError = v;
  class _ extends f.BaseError {
    constructor({ factory: p }) {
      super(
        `Deployment for counterfactual contract call failed${p ? ` for factory "${p}".` : ""}`,
        {
          metaMessages: [
            "Please ensure:",
            "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
            "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
          ],
          name: "CounterfactualDeploymentFailedError",
        },
      );
    }
  }
  Ie.CounterfactualDeploymentFailedError = _;
  class E extends f.BaseError {
    constructor({ data: p, message: y }) {
      super(y || "", { name: "RawContractError" }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 3,
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = p);
    }
  }
  return (Ie.RawContractError = E), Ie;
}
var qe = {},
  Pl;
function Qe() {
  if (Pl) return qe;
  (Pl = 1),
    Object.defineProperty(qe, "__esModule", { value: !0 }),
    (qe.TimeoutError =
      qe.SocketClosedError =
      qe.RpcRequestError =
      qe.WebSocketRequestError =
      qe.HttpRequestError =
        void 0);
  const e = Se(),
    t = oe(),
    n = Zc();
  class r extends t.BaseError {
    constructor({
      body: f,
      cause: c,
      details: d,
      headers: l,
      status: g,
      url: h,
    }) {
      super("HTTP request failed.", {
        cause: c,
        details: d,
        metaMessages: [
          g && `Status: ${g}`,
          `URL: ${(0, n.getUrl)(h)}`,
          f && `Request body: ${(0, e.stringify)(f)}`,
        ].filter(Boolean),
        name: "HttpRequestError",
      }),
        Object.defineProperty(this, "body", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "headers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "status", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "url", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.body = f),
        (this.headers = l),
        (this.status = g),
        (this.url = h);
    }
  }
  qe.HttpRequestError = r;
  class i extends t.BaseError {
    constructor({ body: f, cause: c, details: d, url: l }) {
      super("WebSocket request failed.", {
        cause: c,
        details: d,
        metaMessages: [
          `URL: ${(0, n.getUrl)(l)}`,
          f && `Request body: ${(0, e.stringify)(f)}`,
        ].filter(Boolean),
        name: "WebSocketRequestError",
      });
    }
  }
  qe.WebSocketRequestError = i;
  class s extends t.BaseError {
    constructor({ body: f, error: c, url: d }) {
      super("RPC Request failed.", {
        cause: c,
        details: c.message,
        metaMessages: [
          `URL: ${(0, n.getUrl)(d)}`,
          `Request body: ${(0, e.stringify)(f)}`,
        ],
        name: "RpcRequestError",
      }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.code = c.code),
        (this.data = c.data);
    }
  }
  qe.RpcRequestError = s;
  class o extends t.BaseError {
    constructor({ url: f } = {}) {
      super("The socket has been closed.", {
        metaMessages: [f && `URL: ${(0, n.getUrl)(f)}`].filter(Boolean),
        name: "SocketClosedError",
      });
    }
  }
  qe.SocketClosedError = o;
  class a extends t.BaseError {
    constructor({ body: f, url: c }) {
      super("The request took too long to respond.", {
        details: "The request timed out.",
        metaMessages: [
          `URL: ${(0, n.getUrl)(c)}`,
          `Request body: ${(0, e.stringify)(f)}`,
        ],
        name: "TimeoutError",
      });
    }
  }
  return (qe.TimeoutError = a), qe;
}
var re = {},
  wl;
function br() {
  if (wl) return re;
  (wl = 1),
    Object.defineProperty(re, "__esModule", { value: !0 }),
    (re.UnknownRpcError =
      re.SwitchChainError =
      re.ChainDisconnectedError =
      re.ProviderDisconnectedError =
      re.UnsupportedProviderMethodError =
      re.UnauthorizedProviderError =
      re.UserRejectedRequestError =
      re.JsonRpcVersionUnsupportedError =
      re.LimitExceededRpcError =
      re.MethodNotSupportedRpcError =
      re.TransactionRejectedRpcError =
      re.ResourceUnavailableRpcError =
      re.ResourceNotFoundRpcError =
      re.InvalidInputRpcError =
      re.InternalRpcError =
      re.InvalidParamsRpcError =
      re.MethodNotFoundRpcError =
      re.InvalidRequestRpcError =
      re.ParseRpcError =
      re.ProviderRpcError =
      re.RpcError =
        void 0);
  const e = oe(),
    t = Qe(),
    n = -1;
  class r extends e.BaseError {
    constructor(
      w,
      { code: q, docsPath: T, metaMessages: B, name: M, shortMessage: A },
    ) {
      super(A, {
        cause: w,
        docsPath: T,
        metaMessages: B || (w == null ? void 0 : w.metaMessages),
        name: M || "RpcError",
      }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.name = M || w.name),
        (this.code = w instanceof t.RpcRequestError ? w.code : (q ?? n));
    }
  }
  re.RpcError = r;
  class i extends r {
    constructor(w, q) {
      super(w, q),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = q.data);
    }
  }
  re.ProviderRpcError = i;
  class s extends r {
    constructor(w) {
      super(w, {
        code: s.code,
        name: "ParseRpcError",
        shortMessage:
          "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
      });
    }
  }
  (re.ParseRpcError = s),
    Object.defineProperty(s, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32700,
    });
  class o extends r {
    constructor(w) {
      super(w, {
        code: o.code,
        name: "InvalidRequestRpcError",
        shortMessage: "JSON is not a valid request object.",
      });
    }
  }
  (re.InvalidRequestRpcError = o),
    Object.defineProperty(o, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32600,
    });
  class a extends r {
    constructor(w, { method: q } = {}) {
      super(w, {
        code: a.code,
        name: "MethodNotFoundRpcError",
        shortMessage: `The method${q ? ` "${q}"` : ""} does not exist / is not available.`,
      });
    }
  }
  (re.MethodNotFoundRpcError = a),
    Object.defineProperty(a, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32601,
    });
  class u extends r {
    constructor(w) {
      super(w, {
        code: u.code,
        name: "InvalidParamsRpcError",
        shortMessage: [
          "Invalid parameters were provided to the RPC method.",
          "Double check you have provided the correct parameters.",
        ].join(`
`),
      });
    }
  }
  (re.InvalidParamsRpcError = u),
    Object.defineProperty(u, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32602,
    });
  class f extends r {
    constructor(w) {
      super(w, {
        code: f.code,
        name: "InternalRpcError",
        shortMessage: "An internal error was received.",
      });
    }
  }
  (re.InternalRpcError = f),
    Object.defineProperty(f, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32603,
    });
  class c extends r {
    constructor(w) {
      super(w, {
        code: c.code,
        name: "InvalidInputRpcError",
        shortMessage: [
          "Missing or invalid parameters.",
          "Double check you have provided the correct parameters.",
        ].join(`
`),
      });
    }
  }
  (re.InvalidInputRpcError = c),
    Object.defineProperty(c, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32e3,
    });
  class d extends r {
    constructor(w) {
      super(w, {
        code: d.code,
        name: "ResourceNotFoundRpcError",
        shortMessage: "Requested resource not found.",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ResourceNotFoundRpcError",
        });
    }
  }
  (re.ResourceNotFoundRpcError = d),
    Object.defineProperty(d, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32001,
    });
  class l extends r {
    constructor(w) {
      super(w, {
        code: l.code,
        name: "ResourceUnavailableRpcError",
        shortMessage: "Requested resource not available.",
      });
    }
  }
  (re.ResourceUnavailableRpcError = l),
    Object.defineProperty(l, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32002,
    });
  class g extends r {
    constructor(w) {
      super(w, {
        code: g.code,
        name: "TransactionRejectedRpcError",
        shortMessage: "Transaction creation failed.",
      });
    }
  }
  (re.TransactionRejectedRpcError = g),
    Object.defineProperty(g, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32003,
    });
  class h extends r {
    constructor(w, { method: q } = {}) {
      super(w, {
        code: h.code,
        name: "MethodNotSupportedRpcError",
        shortMessage: `Method${q ? ` "${q}"` : ""} is not implemented.`,
      });
    }
  }
  (re.MethodNotSupportedRpcError = h),
    Object.defineProperty(h, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32004,
    });
  class b extends r {
    constructor(w) {
      super(w, {
        code: b.code,
        name: "LimitExceededRpcError",
        shortMessage: "Request exceeds defined limit.",
      });
    }
  }
  (re.LimitExceededRpcError = b),
    Object.defineProperty(b, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32005,
    });
  class v extends r {
    constructor(w) {
      super(w, {
        code: v.code,
        name: "JsonRpcVersionUnsupportedError",
        shortMessage: "Version of JSON-RPC protocol is not supported.",
      });
    }
  }
  (re.JsonRpcVersionUnsupportedError = v),
    Object.defineProperty(v, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32006,
    });
  class _ extends i {
    constructor(w) {
      super(w, {
        code: _.code,
        name: "UserRejectedRequestError",
        shortMessage: "User rejected the request.",
      });
    }
  }
  (re.UserRejectedRequestError = _),
    Object.defineProperty(_, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4001,
    });
  class E extends i {
    constructor(w) {
      super(w, {
        code: E.code,
        name: "UnauthorizedProviderError",
        shortMessage:
          "The requested method and/or account has not been authorized by the user.",
      });
    }
  }
  (re.UnauthorizedProviderError = E),
    Object.defineProperty(E, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4100,
    });
  class m extends i {
    constructor(w, { method: q } = {}) {
      super(w, {
        code: m.code,
        name: "UnsupportedProviderMethodError",
        shortMessage: `The Provider does not support the requested method${q ? ` " ${q}"` : ""}.`,
      });
    }
  }
  (re.UnsupportedProviderMethodError = m),
    Object.defineProperty(m, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4200,
    });
  class p extends i {
    constructor(w) {
      super(w, {
        code: p.code,
        name: "ProviderDisconnectedError",
        shortMessage: "The Provider is disconnected from all chains.",
      });
    }
  }
  (re.ProviderDisconnectedError = p),
    Object.defineProperty(p, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4900,
    });
  class y extends i {
    constructor(w) {
      super(w, {
        code: y.code,
        name: "ChainDisconnectedError",
        shortMessage: "The Provider is not connected to the requested chain.",
      });
    }
  }
  (re.ChainDisconnectedError = y),
    Object.defineProperty(y, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4901,
    });
  class j extends i {
    constructor(w) {
      super(w, {
        code: j.code,
        name: "SwitchChainError",
        shortMessage: "An error occurred when attempting to switch chain.",
      });
    }
  }
  (re.SwitchChainError = j),
    Object.defineProperty(j, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4902,
    });
  class P extends r {
    constructor(w) {
      super(w, {
        name: "UnknownRpcError",
        shortMessage: "An unknown RPC error occurred.",
      });
    }
  }
  return (re.UnknownRpcError = P), re;
}
var Tl;
function Lt() {
  if (Tl) return Lo;
  (Tl = 1),
    Object.defineProperty(Lo, "__esModule", { value: !0 }),
    (Lo.getContractError = o);
  const e = ye(),
    t = oe(),
    n = zt(),
    r = Qe(),
    i = br(),
    s = 3;
  function o(
    a,
    { abi: u, address: f, args: c, docsPath: d, functionName: l, sender: g },
  ) {
    const h =
        a instanceof n.RawContractError
          ? a
          : a instanceof t.BaseError
            ? a.walk((y) => "data" in y) || a.walk()
            : {},
      { code: b, data: v, details: _, message: E, shortMessage: m } = h,
      p =
        a instanceof e.AbiDecodingZeroDataError
          ? new n.ContractFunctionZeroDataError({ functionName: l })
          : [s, i.InternalRpcError.code].includes(b) && (v || _ || E || m)
            ? new n.ContractFunctionRevertedError({
                abi: u,
                data: typeof v == "object" ? v.data : v,
                functionName: l,
                message: h instanceof r.RpcRequestError ? _ : (m ?? E),
              })
            : a;
    return new n.ContractFunctionExecutionError(p, {
      abi: u,
      args: c,
      contractAddress: f,
      docsPath: d,
      functionName: l,
      sender: g,
    });
  }
  return Lo;
}
var Jo = {},
  Yo = {},
  Xo = {},
  Qo = {},
  Al;
function Kg() {
  if (Al) return Qo;
  (Al = 1),
    Object.defineProperty(Qo, "__esModule", { value: !0 }),
    (Qo.publicKeyToAddress = n);
  const e = ke(),
    t = Oe();
  function n(r) {
    const i = (0, t.keccak256)(`0x${r.substring(4)}`).substring(26);
    return (0, e.checksumAddress)(`0x${i}`);
  }
  return Qo;
}
var ei = {},
  vc = {},
  bt = {},
  ht = {},
  Ge = {},
  Sl;
function Jc() {
  if (Sl) return Ge;
  (Sl = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.anumber = e),
    (Ge.number = e),
    (Ge.abytes = n),
    (Ge.bytes = n),
    (Ge.ahash = r),
    (Ge.aexists = i),
    (Ge.aoutput = s);
  function e(a) {
    if (!Number.isSafeInteger(a) || a < 0)
      throw new Error("positive integer expected, got " + a);
  }
  function t(a) {
    return (
      a instanceof Uint8Array ||
      (ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array")
    );
  }
  function n(a, ...u) {
    if (!t(a)) throw new Error("Uint8Array expected");
    if (u.length > 0 && !u.includes(a.length))
      throw new Error(
        "Uint8Array expected of length " + u + ", got length=" + a.length,
      );
  }
  function r(a) {
    if (typeof a != "function" || typeof a.create != "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    e(a.outputLen), e(a.blockLen);
  }
  function i(a, u = !0) {
    if (a.destroyed) throw new Error("Hash instance has been destroyed");
    if (u && a.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function s(a, u) {
    n(a);
    const f = u.outputLen;
    if (a.length < f)
      throw new Error(
        "digestInto() expects output buffer of length at least " + f,
      );
  }
  const o = { number: e, bytes: n, hash: r, exists: i, output: s };
  return (Ge.default = o), Ge;
}
var Ec = {},
  bn = {},
  Il;
function v1() {
  return (
    Il ||
      ((Il = 1),
      Object.defineProperty(bn, "__esModule", { value: !0 }),
      (bn.crypto = void 0),
      (bn.crypto =
        typeof globalThis == "object" && "crypto" in globalThis
          ? globalThis.crypto
          : void 0)),
    bn
  );
}
var Rl;
function Vn() {
  return (
    Rl ||
      ((Rl = 1),
      (function (e) {
        /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
          e,
          "__esModule",
          { value: !0 },
        ),
          (e.Hash =
            e.nextTick =
            e.byteSwapIfBE =
            e.byteSwap =
            e.isLE =
            e.rotl =
            e.rotr =
            e.createView =
            e.u32 =
            e.u8 =
              void 0),
          (e.isBytes = r),
          (e.byteSwap32 = c),
          (e.bytesToHex = l),
          (e.hexToBytes = b),
          (e.asyncLoop = _),
          (e.utf8ToBytes = E),
          (e.toBytes = m),
          (e.concatBytes = p),
          (e.checkOpts = j),
          (e.wrapConstructor = P),
          (e.wrapConstructorWithOpts = S),
          (e.wrapXOFConstructorWithOpts = w),
          (e.randomBytes = q);
        const t = v1(),
          n = Jc();
        function r(T) {
          return (
            T instanceof Uint8Array ||
            (ArrayBuffer.isView(T) && T.constructor.name === "Uint8Array")
          );
        }
        const i = (T) => new Uint8Array(T.buffer, T.byteOffset, T.byteLength);
        e.u8 = i;
        const s = (T) =>
          new Uint32Array(T.buffer, T.byteOffset, Math.floor(T.byteLength / 4));
        e.u32 = s;
        const o = (T) => new DataView(T.buffer, T.byteOffset, T.byteLength);
        e.createView = o;
        const a = (T, B) => (T << (32 - B)) | (T >>> B);
        e.rotr = a;
        const u = (T, B) => (T << B) | ((T >>> (32 - B)) >>> 0);
        (e.rotl = u),
          (e.isLE =
            new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68);
        const f = (T) =>
          ((T << 24) & 4278190080) |
          ((T << 8) & 16711680) |
          ((T >>> 8) & 65280) |
          ((T >>> 24) & 255);
        (e.byteSwap = f),
          (e.byteSwapIfBE = e.isLE ? (T) => T : (T) => (0, e.byteSwap)(T));
        function c(T) {
          for (let B = 0; B < T.length; B++) T[B] = (0, e.byteSwap)(T[B]);
        }
        const d = Array.from({ length: 256 }, (T, B) =>
          B.toString(16).padStart(2, "0"),
        );
        function l(T) {
          (0, n.abytes)(T);
          let B = "";
          for (let M = 0; M < T.length; M++) B += d[T[M]];
          return B;
        }
        const g = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
        function h(T) {
          if (T >= g._0 && T <= g._9) return T - g._0;
          if (T >= g.A && T <= g.F) return T - (g.A - 10);
          if (T >= g.a && T <= g.f) return T - (g.a - 10);
        }
        function b(T) {
          if (typeof T != "string")
            throw new Error("hex string expected, got " + typeof T);
          const B = T.length,
            M = B / 2;
          if (B % 2)
            throw new Error(
              "padded hex string expected, got unpadded hex of length " + B,
            );
          const A = new Uint8Array(M);
          for (let x = 0, $ = 0; x < M; x++, $ += 2) {
            const F = h(T.charCodeAt($)),
              H = h(T.charCodeAt($ + 1));
            if (F === void 0 || H === void 0) {
              const R = T[$] + T[$ + 1];
              throw new Error(
                'hex string expected, got non-hex character "' +
                  R +
                  '" at index ' +
                  $,
              );
            }
            A[x] = F * 16 + H;
          }
          return A;
        }
        const v = async () => {};
        e.nextTick = v;
        async function _(T, B, M) {
          let A = Date.now();
          for (let x = 0; x < T; x++) {
            M(x);
            const $ = Date.now() - A;
            ($ >= 0 && $ < B) || (await (0, e.nextTick)(), (A += $));
          }
        }
        function E(T) {
          if (typeof T != "string")
            throw new Error("utf8ToBytes expected string, got " + typeof T);
          return new Uint8Array(new TextEncoder().encode(T));
        }
        function m(T) {
          return typeof T == "string" && (T = E(T)), (0, n.abytes)(T), T;
        }
        function p(...T) {
          let B = 0;
          for (let A = 0; A < T.length; A++) {
            const x = T[A];
            (0, n.abytes)(x), (B += x.length);
          }
          const M = new Uint8Array(B);
          for (let A = 0, x = 0; A < T.length; A++) {
            const $ = T[A];
            M.set($, x), (x += $.length);
          }
          return M;
        }
        class y {
          clone() {
            return this._cloneInto();
          }
        }
        e.Hash = y;
        function j(T, B) {
          if (B !== void 0 && {}.toString.call(B) !== "[object Object]")
            throw new Error("Options should be object or undefined");
          return Object.assign(T, B);
        }
        function P(T) {
          const B = (A) => T().update(m(A)).digest(),
            M = T();
          return (
            (B.outputLen = M.outputLen),
            (B.blockLen = M.blockLen),
            (B.create = () => T()),
            B
          );
        }
        function S(T) {
          const B = (A, x) => T(x).update(m(A)).digest(),
            M = T({});
          return (
            (B.outputLen = M.outputLen),
            (B.blockLen = M.blockLen),
            (B.create = (A) => T(A)),
            B
          );
        }
        function w(T) {
          const B = (A, x) => T(x).update(m(A)).digest(),
            M = T({});
          return (
            (B.outputLen = M.outputLen),
            (B.blockLen = M.blockLen),
            (B.create = (A) => T(A)),
            B
          );
        }
        function q(T = 32) {
          if (t.crypto && typeof t.crypto.getRandomValues == "function")
            return t.crypto.getRandomValues(new Uint8Array(T));
          if (t.crypto && typeof t.crypto.randomBytes == "function")
            return t.crypto.randomBytes(T);
          throw new Error("crypto.getRandomValues must be defined");
        }
      })(Ec)),
    Ec
  );
}
var Ol;
function E1() {
  if (Ol) return ht;
  (Ol = 1),
    Object.defineProperty(ht, "__esModule", { value: !0 }),
    (ht.HashMD = ht.Maj = ht.Chi = void 0);
  const e = Jc(),
    t = Vn();
  function n(o, a, u, f) {
    if (typeof o.setBigUint64 == "function") return o.setBigUint64(a, u, f);
    const c = BigInt(32),
      d = BigInt(4294967295),
      l = Number((u >> c) & d),
      g = Number(u & d),
      h = f ? 4 : 0,
      b = f ? 0 : 4;
    o.setUint32(a + h, l, f), o.setUint32(a + b, g, f);
  }
  const r = (o, a, u) => (o & a) ^ (~o & u);
  ht.Chi = r;
  const i = (o, a, u) => (o & a) ^ (o & u) ^ (a & u);
  ht.Maj = i;
  class s extends t.Hash {
    constructor(a, u, f, c) {
      super(),
        (this.blockLen = a),
        (this.outputLen = u),
        (this.padOffset = f),
        (this.isLE = c),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.buffer = new Uint8Array(a)),
        (this.view = (0, t.createView)(this.buffer));
    }
    update(a) {
      (0, e.aexists)(this);
      const { view: u, buffer: f, blockLen: c } = this;
      a = (0, t.toBytes)(a);
      const d = a.length;
      for (let l = 0; l < d; ) {
        const g = Math.min(c - this.pos, d - l);
        if (g === c) {
          const h = (0, t.createView)(a);
          for (; c <= d - l; l += c) this.process(h, l);
          continue;
        }
        f.set(a.subarray(l, l + g), this.pos),
          (this.pos += g),
          (l += g),
          this.pos === c && (this.process(u, 0), (this.pos = 0));
      }
      return (this.length += a.length), this.roundClean(), this;
    }
    digestInto(a) {
      (0, e.aexists)(this), (0, e.aoutput)(a, this), (this.finished = !0);
      const { buffer: u, view: f, blockLen: c, isLE: d } = this;
      let { pos: l } = this;
      (u[l++] = 128),
        this.buffer.subarray(l).fill(0),
        this.padOffset > c - l && (this.process(f, 0), (l = 0));
      for (let _ = l; _ < c; _++) u[_] = 0;
      n(f, c - 8, BigInt(this.length * 8), d), this.process(f, 0);
      const g = (0, t.createView)(a),
        h = this.outputLen;
      if (h % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const b = h / 4,
        v = this.get();
      if (b > v.length) throw new Error("_sha2: outputLen bigger than state");
      for (let _ = 0; _ < b; _++) g.setUint32(4 * _, v[_], d);
    }
    digest() {
      const { buffer: a, outputLen: u } = this;
      this.digestInto(a);
      const f = a.slice(0, u);
      return this.destroy(), f;
    }
    _cloneInto(a) {
      a || (a = new this.constructor()), a.set(...this.get());
      const {
        blockLen: u,
        buffer: f,
        length: c,
        finished: d,
        destroyed: l,
        pos: g,
      } = this;
      return (
        (a.length = c),
        (a.pos = g),
        (a.finished = d),
        (a.destroyed = l),
        c % u && a.buffer.set(f),
        a
      );
    }
  }
  return (ht.HashMD = s), ht;
}
var Bl;
function j1() {
  if (Bl) return bt;
  (Bl = 1),
    Object.defineProperty(bt, "__esModule", { value: !0 }),
    (bt.sha224 = bt.sha256 = bt.SHA256 = void 0);
  const e = E1(),
    t = Vn(),
    n = new Uint32Array([
      1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
      2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
      1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
      264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
      2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
      113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
      1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
      3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
      430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
      1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
      2428436474, 2756734187, 3204031479, 3329325298,
    ]),
    r = new Uint32Array([
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
      528734635, 1541459225,
    ]),
    i = new Uint32Array(64);
  class s extends e.HashMD {
    constructor() {
      super(64, 32, 8, !1),
        (this.A = r[0] | 0),
        (this.B = r[1] | 0),
        (this.C = r[2] | 0),
        (this.D = r[3] | 0),
        (this.E = r[4] | 0),
        (this.F = r[5] | 0),
        (this.G = r[6] | 0),
        (this.H = r[7] | 0);
    }
    get() {
      const { A: u, B: f, C: c, D: d, E: l, F: g, G: h, H: b } = this;
      return [u, f, c, d, l, g, h, b];
    }
    set(u, f, c, d, l, g, h, b) {
      (this.A = u | 0),
        (this.B = f | 0),
        (this.C = c | 0),
        (this.D = d | 0),
        (this.E = l | 0),
        (this.F = g | 0),
        (this.G = h | 0),
        (this.H = b | 0);
    }
    process(u, f) {
      for (let E = 0; E < 16; E++, f += 4) i[E] = u.getUint32(f, !1);
      for (let E = 16; E < 64; E++) {
        const m = i[E - 15],
          p = i[E - 2],
          y = (0, t.rotr)(m, 7) ^ (0, t.rotr)(m, 18) ^ (m >>> 3),
          j = (0, t.rotr)(p, 17) ^ (0, t.rotr)(p, 19) ^ (p >>> 10);
        i[E] = (j + i[E - 7] + y + i[E - 16]) | 0;
      }
      let { A: c, B: d, C: l, D: g, E: h, F: b, G: v, H: _ } = this;
      for (let E = 0; E < 64; E++) {
        const m = (0, t.rotr)(h, 6) ^ (0, t.rotr)(h, 11) ^ (0, t.rotr)(h, 25),
          p = (_ + m + (0, e.Chi)(h, b, v) + n[E] + i[E]) | 0,
          j =
            (((0, t.rotr)(c, 2) ^ (0, t.rotr)(c, 13) ^ (0, t.rotr)(c, 22)) +
              (0, e.Maj)(c, d, l)) |
            0;
        (_ = v),
          (v = b),
          (b = h),
          (h = (g + p) | 0),
          (g = l),
          (l = d),
          (d = c),
          (c = (p + j) | 0);
      }
      (c = (c + this.A) | 0),
        (d = (d + this.B) | 0),
        (l = (l + this.C) | 0),
        (g = (g + this.D) | 0),
        (h = (h + this.E) | 0),
        (b = (b + this.F) | 0),
        (v = (v + this.G) | 0),
        (_ = (_ + this.H) | 0),
        this.set(c, d, l, g, h, b, v, _);
    }
    roundClean() {
      i.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  }
  bt.SHA256 = s;
  class o extends s {
    constructor() {
      super(),
        (this.A = -1056596264),
        (this.B = 914150663),
        (this.C = 812702999),
        (this.D = -150054599),
        (this.E = -4191439),
        (this.F = 1750603025),
        (this.G = 1694076839),
        (this.H = -1090891868),
        (this.outputLen = 28);
    }
  }
  return (
    (bt.sha256 = (0, t.wrapConstructor)(() => new s())),
    (bt.sha224 = (0, t.wrapConstructor)(() => new o())),
    bt
  );
}
var hn = {},
  jc = {},
  Cl;
function P1() {
  return (
    Cl ||
      ((Cl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.hmac = e.HMAC = void 0);
        const t = Jc(),
          n = Vn();
        class r extends n.Hash {
          constructor(o, a) {
            super(),
              (this.finished = !1),
              (this.destroyed = !1),
              (0, t.ahash)(o);
            const u = (0, n.toBytes)(a);
            if (
              ((this.iHash = o.create()),
              typeof this.iHash.update != "function")
            )
              throw new Error(
                "Expected instance of class which extends utils.Hash",
              );
            (this.blockLen = this.iHash.blockLen),
              (this.outputLen = this.iHash.outputLen);
            const f = this.blockLen,
              c = new Uint8Array(f);
            c.set(u.length > f ? o.create().update(u).digest() : u);
            for (let d = 0; d < c.length; d++) c[d] ^= 54;
            this.iHash.update(c), (this.oHash = o.create());
            for (let d = 0; d < c.length; d++) c[d] ^= 106;
            this.oHash.update(c), c.fill(0);
          }
          update(o) {
            return (0, t.aexists)(this), this.iHash.update(o), this;
          }
          digestInto(o) {
            (0, t.aexists)(this),
              (0, t.abytes)(o, this.outputLen),
              (this.finished = !0),
              this.iHash.digestInto(o),
              this.oHash.update(o),
              this.oHash.digestInto(o),
              this.destroy();
          }
          digest() {
            const o = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(o), o;
          }
          _cloneInto(o) {
            o || (o = Object.create(Object.getPrototypeOf(this), {}));
            const {
              oHash: a,
              iHash: u,
              finished: f,
              destroyed: c,
              blockLen: d,
              outputLen: l,
            } = this;
            return (
              (o = o),
              (o.finished = f),
              (o.destroyed = c),
              (o.blockLen = d),
              (o.outputLen = l),
              (o.oHash = a._cloneInto(o.oHash)),
              (o.iHash = u._cloneInto(o.iHash)),
              o
            );
          }
          destroy() {
            (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
          }
        }
        e.HMAC = r;
        const i = (s, o, a) => new r(s, o).update(a).digest();
        (e.hmac = i), (e.hmac.create = (s, o) => new r(s, o));
      })(jc)),
    jc
  );
}
var Pc = {},
  er = {},
  me = {},
  ue = {},
  ql;
function Ht() {
  if (ql) return ue;
  (ql = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.notImplemented = ue.bitMask = void 0),
    (ue.isBytes = r),
    (ue.abytes = i),
    (ue.abool = s),
    (ue.bytesToHex = a),
    (ue.numberToHexUnpadded = u),
    (ue.hexToNumber = f),
    (ue.hexToBytes = l),
    (ue.bytesToNumberBE = g),
    (ue.bytesToNumberLE = h),
    (ue.numberToBytesBE = b),
    (ue.numberToBytesLE = v),
    (ue.numberToVarBytesBE = _),
    (ue.ensureBytes = E),
    (ue.concatBytes = m),
    (ue.equalBytes = p),
    (ue.utf8ToBytes = y),
    (ue.inRange = P),
    (ue.aInRange = S),
    (ue.bitLen = w),
    (ue.bitGet = q),
    (ue.bitSet = T),
    (ue.createHmacDrbg = x),
    (ue.validateObject = F),
    (ue.memoized = R);
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const e =
      BigInt(0),
    t = BigInt(1),
    n = BigInt(2);
  function r(O) {
    return (
      O instanceof Uint8Array ||
      (ArrayBuffer.isView(O) && O.constructor.name === "Uint8Array")
    );
  }
  function i(O) {
    if (!r(O)) throw new Error("Uint8Array expected");
  }
  function s(O, I) {
    if (typeof I != "boolean")
      throw new Error(O + " boolean expected, got " + I);
  }
  const o = Array.from({ length: 256 }, (O, I) =>
    I.toString(16).padStart(2, "0"),
  );
  function a(O) {
    i(O);
    let I = "";
    for (let C = 0; C < O.length; C++) I += o[O[C]];
    return I;
  }
  function u(O) {
    const I = O.toString(16);
    return I.length & 1 ? "0" + I : I;
  }
  function f(O) {
    if (typeof O != "string")
      throw new Error("hex string expected, got " + typeof O);
    return O === "" ? e : BigInt("0x" + O);
  }
  const c = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function d(O) {
    if (O >= c._0 && O <= c._9) return O - c._0;
    if (O >= c.A && O <= c.F) return O - (c.A - 10);
    if (O >= c.a && O <= c.f) return O - (c.a - 10);
  }
  function l(O) {
    if (typeof O != "string")
      throw new Error("hex string expected, got " + typeof O);
    const I = O.length,
      C = I / 2;
    if (I % 2)
      throw new Error("hex string expected, got unpadded hex of length " + I);
    const k = new Uint8Array(C);
    for (let z = 0, U = 0; z < C; z++, U += 2) {
      const L = d(O.charCodeAt(U)),
        V = d(O.charCodeAt(U + 1));
      if (L === void 0 || V === void 0) {
        const G = O[U] + O[U + 1];
        throw new Error(
          'hex string expected, got non-hex character "' +
            G +
            '" at index ' +
            U,
        );
      }
      k[z] = L * 16 + V;
    }
    return k;
  }
  function g(O) {
    return f(a(O));
  }
  function h(O) {
    return i(O), f(a(Uint8Array.from(O).reverse()));
  }
  function b(O, I) {
    return l(O.toString(16).padStart(I * 2, "0"));
  }
  function v(O, I) {
    return b(O, I).reverse();
  }
  function _(O) {
    return l(u(O));
  }
  function E(O, I, C) {
    let k;
    if (typeof I == "string")
      try {
        k = l(I);
      } catch (U) {
        throw new Error(O + " must be hex string or Uint8Array, cause: " + U);
      }
    else if (r(I)) k = Uint8Array.from(I);
    else throw new Error(O + " must be hex string or Uint8Array");
    const z = k.length;
    if (typeof C == "number" && z !== C)
      throw new Error(O + " of length " + C + " expected, got " + z);
    return k;
  }
  function m(...O) {
    let I = 0;
    for (let k = 0; k < O.length; k++) {
      const z = O[k];
      i(z), (I += z.length);
    }
    const C = new Uint8Array(I);
    for (let k = 0, z = 0; k < O.length; k++) {
      const U = O[k];
      C.set(U, z), (z += U.length);
    }
    return C;
  }
  function p(O, I) {
    if (O.length !== I.length) return !1;
    let C = 0;
    for (let k = 0; k < O.length; k++) C |= O[k] ^ I[k];
    return C === 0;
  }
  function y(O) {
    if (typeof O != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(O));
  }
  const j = (O) => typeof O == "bigint" && e <= O;
  function P(O, I, C) {
    return j(O) && j(I) && j(C) && I <= O && O < C;
  }
  function S(O, I, C, k) {
    if (!P(I, C, k))
      throw new Error(
        "expected valid " + O + ": " + C + " <= n < " + k + ", got " + I,
      );
  }
  function w(O) {
    let I;
    for (I = 0; O > e; O >>= t, I += 1);
    return I;
  }
  function q(O, I) {
    return (O >> BigInt(I)) & t;
  }
  function T(O, I, C) {
    return O | ((C ? t : e) << BigInt(I));
  }
  const B = (O) => (n << BigInt(O - 1)) - t;
  ue.bitMask = B;
  const M = (O) => new Uint8Array(O),
    A = (O) => Uint8Array.from(O);
  function x(O, I, C) {
    if (typeof O != "number" || O < 2)
      throw new Error("hashLen must be a number");
    if (typeof I != "number" || I < 2)
      throw new Error("qByteLen must be a number");
    if (typeof C != "function") throw new Error("hmacFn must be a function");
    let k = M(O),
      z = M(O),
      U = 0;
    const L = () => {
        k.fill(1), z.fill(0), (U = 0);
      },
      V = (...J) => C(z, k, ...J),
      G = (J = M()) => {
        (z = V(A([0]), J)),
          (k = V()),
          J.length !== 0 && ((z = V(A([1]), J)), (k = V()));
      },
      Z = () => {
        if (U++ >= 1e3) throw new Error("drbg: tried 1000 values");
        let J = 0;
        const ae = [];
        for (; J < I; ) {
          k = V();
          const K = k.slice();
          ae.push(K), (J += k.length);
        }
        return m(...ae);
      };
    return (J, ae) => {
      L(), G(J);
      let K;
      for (; !(K = ae(Z())); ) G();
      return L(), K;
    };
  }
  const $ = {
    bigint: (O) => typeof O == "bigint",
    function: (O) => typeof O == "function",
    boolean: (O) => typeof O == "boolean",
    string: (O) => typeof O == "string",
    stringOrUint8Array: (O) => typeof O == "string" || r(O),
    isSafeInteger: (O) => Number.isSafeInteger(O),
    array: (O) => Array.isArray(O),
    field: (O, I) => I.Fp.isValid(O),
    hash: (O) => typeof O == "function" && Number.isSafeInteger(O.outputLen),
  };
  function F(O, I, C = {}) {
    const k = (z, U, L) => {
      const V = $[U];
      if (typeof V != "function") throw new Error("invalid validator function");
      const G = O[z];
      if (!(L && G === void 0) && !V(G, O))
        throw new Error(
          "param " + String(z) + " is invalid. Expected " + U + ", got " + G,
        );
    };
    for (const [z, U] of Object.entries(I)) k(z, U, !1);
    for (const [z, U] of Object.entries(C)) k(z, U, !0);
    return O;
  }
  const H = () => {
    throw new Error("not implemented");
  };
  ue.notImplemented = H;
  function R(O) {
    const I = new WeakMap();
    return (C, ...k) => {
      const z = I.get(C);
      if (z !== void 0) return z;
      const U = O(C, ...k);
      return I.set(C, U), U;
    };
  }
  return ue;
}
var xl;
function Iu() {
  if (xl) return me;
  (xl = 1),
    Object.defineProperty(me, "__esModule", { value: !0 }),
    (me.isNegativeLE = void 0),
    (me.mod = u),
    (me.pow = f),
    (me.pow2 = c),
    (me.invert = d),
    (me.tonelliShanks = l),
    (me.FpSqrt = g),
    (me.validateField = v),
    (me.FpPow = _),
    (me.FpInvertBatch = E),
    (me.FpDiv = m),
    (me.FpLegendre = p),
    (me.FpIsSquare = y),
    (me.nLength = j),
    (me.Field = P),
    (me.FpSqrtOdd = S),
    (me.FpSqrtEven = w),
    (me.hashToPrivateScalar = q),
    (me.getFieldBytesLength = T),
    (me.getMinHashLength = B),
    (me.mapHashToField = M);
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const e =
      Ht(),
    t = BigInt(0),
    n = BigInt(1),
    r = BigInt(2),
    i = BigInt(3),
    s = BigInt(4),
    o = BigInt(5),
    a = BigInt(8);
  function u(A, x) {
    const $ = A % x;
    return $ >= t ? $ : x + $;
  }
  function f(A, x, $) {
    if (x < t) throw new Error("invalid exponent, negatives unsupported");
    if ($ <= t) throw new Error("invalid modulus");
    if ($ === n) return t;
    let F = n;
    for (; x > t; ) x & n && (F = (F * A) % $), (A = (A * A) % $), (x >>= n);
    return F;
  }
  function c(A, x, $) {
    let F = A;
    for (; x-- > t; ) (F *= F), (F %= $);
    return F;
  }
  function d(A, x) {
    if (A === t) throw new Error("invert: expected non-zero number");
    if (x <= t) throw new Error("invert: expected positive modulus, got " + x);
    let $ = u(A, x),
      F = x,
      H = t,
      R = n;
    for (; $ !== t; ) {
      const I = F / $,
        C = F % $,
        k = H - R * I;
      (F = $), ($ = C), (H = R), (R = k);
    }
    if (F !== n) throw new Error("invert: does not exist");
    return u(H, x);
  }
  function l(A) {
    const x = (A - n) / r;
    let $, F, H;
    for ($ = A - n, F = 0; $ % r === t; $ /= r, F++);
    for (H = r; H < A && f(H, x, A) !== A - n; H++)
      if (H > 1e3)
        throw new Error("Cannot find square root: likely non-prime P");
    if (F === 1) {
      const O = (A + n) / s;
      return function (C, k) {
        const z = C.pow(k, O);
        if (!C.eql(C.sqr(z), k)) throw new Error("Cannot find square root");
        return z;
      };
    }
    const R = ($ + n) / r;
    return function (I, C) {
      if (I.pow(C, x) === I.neg(I.ONE))
        throw new Error("Cannot find square root");
      let k = F,
        z = I.pow(I.mul(I.ONE, H), $),
        U = I.pow(C, R),
        L = I.pow(C, $);
      for (; !I.eql(L, I.ONE); ) {
        if (I.eql(L, I.ZERO)) return I.ZERO;
        let V = 1;
        for (let Z = I.sqr(L); V < k && !I.eql(Z, I.ONE); V++) Z = I.sqr(Z);
        const G = I.pow(z, n << BigInt(k - V - 1));
        (z = I.sqr(G)), (U = I.mul(U, G)), (L = I.mul(L, z)), (k = V);
      }
      return U;
    };
  }
  function g(A) {
    if (A % s === i) {
      const x = (A + n) / s;
      return function (F, H) {
        const R = F.pow(H, x);
        if (!F.eql(F.sqr(R), H)) throw new Error("Cannot find square root");
        return R;
      };
    }
    if (A % a === o) {
      const x = (A - o) / a;
      return function (F, H) {
        const R = F.mul(H, r),
          O = F.pow(R, x),
          I = F.mul(H, O),
          C = F.mul(F.mul(I, r), O),
          k = F.mul(I, F.sub(C, F.ONE));
        if (!F.eql(F.sqr(k), H)) throw new Error("Cannot find square root");
        return k;
      };
    }
    return l(A);
  }
  const h = (A, x) => (u(A, x) & n) === n;
  me.isNegativeLE = h;
  const b = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN",
  ];
  function v(A) {
    const x = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger",
      },
      $ = b.reduce((F, H) => ((F[H] = "function"), F), x);
    return (0, e.validateObject)(A, $);
  }
  function _(A, x, $) {
    if ($ < t) throw new Error("invalid exponent, negatives unsupported");
    if ($ === t) return A.ONE;
    if ($ === n) return x;
    let F = A.ONE,
      H = x;
    for (; $ > t; ) $ & n && (F = A.mul(F, H)), (H = A.sqr(H)), ($ >>= n);
    return F;
  }
  function E(A, x) {
    const $ = new Array(x.length),
      F = x.reduce(
        (R, O, I) => (A.is0(O) ? R : (($[I] = R), A.mul(R, O))),
        A.ONE,
      ),
      H = A.inv(F);
    return (
      x.reduceRight(
        (R, O, I) => (A.is0(O) ? R : (($[I] = A.mul(R, $[I])), A.mul(R, O))),
        H,
      ),
      $
    );
  }
  function m(A, x, $) {
    return A.mul(x, typeof $ == "bigint" ? d($, A.ORDER) : A.inv($));
  }
  function p(A) {
    const x = (A - n) / r;
    return ($, F) => $.pow(F, x);
  }
  function y(A) {
    const x = p(A.ORDER);
    return ($) => {
      const F = x(A, $);
      return A.eql(F, A.ZERO) || A.eql(F, A.ONE);
    };
  }
  function j(A, x) {
    const $ = x !== void 0 ? x : A.toString(2).length,
      F = Math.ceil($ / 8);
    return { nBitLength: $, nByteLength: F };
  }
  function P(A, x, $ = !1, F = {}) {
    if (A <= t) throw new Error("invalid field: expected ORDER > 0, got " + A);
    const { nBitLength: H, nByteLength: R } = j(A, x);
    if (R > 2048)
      throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let O;
    const I = Object.freeze({
      ORDER: A,
      BITS: H,
      BYTES: R,
      MASK: (0, e.bitMask)(H),
      ZERO: t,
      ONE: n,
      create: (C) => u(C, A),
      isValid: (C) => {
        if (typeof C != "bigint")
          throw new Error(
            "invalid field element: expected bigint, got " + typeof C,
          );
        return t <= C && C < A;
      },
      is0: (C) => C === t,
      isOdd: (C) => (C & n) === n,
      neg: (C) => u(-C, A),
      eql: (C, k) => C === k,
      sqr: (C) => u(C * C, A),
      add: (C, k) => u(C + k, A),
      sub: (C, k) => u(C - k, A),
      mul: (C, k) => u(C * k, A),
      pow: (C, k) => _(I, C, k),
      div: (C, k) => u(C * d(k, A), A),
      sqrN: (C) => C * C,
      addN: (C, k) => C + k,
      subN: (C, k) => C - k,
      mulN: (C, k) => C * k,
      inv: (C) => d(C, A),
      sqrt: F.sqrt || ((C) => (O || (O = g(A)), O(I, C))),
      invertBatch: (C) => E(I, C),
      cmov: (C, k, z) => (z ? k : C),
      toBytes: (C) =>
        $ ? (0, e.numberToBytesLE)(C, R) : (0, e.numberToBytesBE)(C, R),
      fromBytes: (C) => {
        if (C.length !== R)
          throw new Error(
            "Field.fromBytes: expected " + R + " bytes, got " + C.length,
          );
        return $ ? (0, e.bytesToNumberLE)(C) : (0, e.bytesToNumberBE)(C);
      },
    });
    return Object.freeze(I);
  }
  function S(A, x) {
    if (!A.isOdd) throw new Error("Field doesn't have isOdd");
    const $ = A.sqrt(x);
    return A.isOdd($) ? $ : A.neg($);
  }
  function w(A, x) {
    if (!A.isOdd) throw new Error("Field doesn't have isOdd");
    const $ = A.sqrt(x);
    return A.isOdd($) ? A.neg($) : $;
  }
  function q(A, x, $ = !1) {
    A = (0, e.ensureBytes)("privateHash", A);
    const F = A.length,
      H = j(x).nByteLength + 8;
    if (H < 24 || F < H || F > 1024)
      throw new Error(
        "hashToPrivateScalar: expected " + H + "-1024 bytes of input, got " + F,
      );
    const R = $ ? (0, e.bytesToNumberLE)(A) : (0, e.bytesToNumberBE)(A);
    return u(R, x - n) + n;
  }
  function T(A) {
    if (typeof A != "bigint") throw new Error("field order must be bigint");
    const x = A.toString(2).length;
    return Math.ceil(x / 8);
  }
  function B(A) {
    const x = T(A);
    return x + Math.ceil(x / 2);
  }
  function M(A, x, $ = !1) {
    const F = A.length,
      H = T(x),
      R = B(x);
    if (F < 16 || F < R || F > 1024)
      throw new Error("expected " + R + "-1024 bytes of input, got " + F);
    const O = $ ? (0, e.bytesToNumberBE)(A) : (0, e.bytesToNumberLE)(A),
      I = u(O, x - n) + n;
    return $ ? (0, e.numberToBytesLE)(I, H) : (0, e.numberToBytesBE)(I, H);
  }
  return me;
}
var Ml;
function w1() {
  if (Ml) return er;
  (Ml = 1),
    Object.defineProperty(er, "__esModule", { value: !0 }),
    (er.wNAF = l),
    (er.pippenger = g),
    (er.precomputeMSMUnsafe = h),
    (er.validateBasic = b);
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const e =
      Iu(),
    t = Ht(),
    n = BigInt(0),
    r = BigInt(1);
  function i(v, _) {
    const E = _.negate();
    return v ? E : _;
  }
  function s(v, _) {
    if (!Number.isSafeInteger(v) || v <= 0 || v > _)
      throw new Error(
        "invalid window size, expected [1.." + _ + "], got W=" + v,
      );
  }
  function o(v, _) {
    s(v, _);
    const E = Math.ceil(_ / v) + 1,
      m = 2 ** (v - 1);
    return { windows: E, windowSize: m };
  }
  function a(v, _) {
    if (!Array.isArray(v)) throw new Error("array expected");
    v.forEach((E, m) => {
      if (!(E instanceof _)) throw new Error("invalid point at index " + m);
    });
  }
  function u(v, _) {
    if (!Array.isArray(v)) throw new Error("array of scalars expected");
    v.forEach((E, m) => {
      if (!_.isValid(E)) throw new Error("invalid scalar at index " + m);
    });
  }
  const f = new WeakMap(),
    c = new WeakMap();
  function d(v) {
    return c.get(v) || 1;
  }
  function l(v, _) {
    return {
      constTimeNegate: i,
      hasPrecomputes(E) {
        return d(E) !== 1;
      },
      unsafeLadder(E, m, p = v.ZERO) {
        let y = E;
        for (; m > n; ) m & r && (p = p.add(y)), (y = y.double()), (m >>= r);
        return p;
      },
      precomputeWindow(E, m) {
        const { windows: p, windowSize: y } = o(m, _),
          j = [];
        let P = E,
          S = P;
        for (let w = 0; w < p; w++) {
          (S = P), j.push(S);
          for (let q = 1; q < y; q++) (S = S.add(P)), j.push(S);
          P = S.double();
        }
        return j;
      },
      wNAF(E, m, p) {
        const { windows: y, windowSize: j } = o(E, _);
        let P = v.ZERO,
          S = v.BASE;
        const w = BigInt(2 ** E - 1),
          q = 2 ** E,
          T = BigInt(E);
        for (let B = 0; B < y; B++) {
          const M = B * j;
          let A = Number(p & w);
          (p >>= T), A > j && ((A -= q), (p += r));
          const x = M,
            $ = M + Math.abs(A) - 1,
            F = B % 2 !== 0,
            H = A < 0;
          A === 0 ? (S = S.add(i(F, m[x]))) : (P = P.add(i(H, m[$])));
        }
        return { p: P, f: S };
      },
      wNAFUnsafe(E, m, p, y = v.ZERO) {
        const { windows: j, windowSize: P } = o(E, _),
          S = BigInt(2 ** E - 1),
          w = 2 ** E,
          q = BigInt(E);
        for (let T = 0; T < j; T++) {
          const B = T * P;
          if (p === n) break;
          let M = Number(p & S);
          if (((p >>= q), M > P && ((M -= w), (p += r)), M === 0)) continue;
          let A = m[B + Math.abs(M) - 1];
          M < 0 && (A = A.negate()), (y = y.add(A));
        }
        return y;
      },
      getPrecomputes(E, m, p) {
        let y = f.get(m);
        return (
          y || ((y = this.precomputeWindow(m, E)), E !== 1 && f.set(m, p(y))), y
        );
      },
      wNAFCached(E, m, p) {
        const y = d(E);
        return this.wNAF(y, this.getPrecomputes(y, E, p), m);
      },
      wNAFCachedUnsafe(E, m, p, y) {
        const j = d(E);
        return j === 1
          ? this.unsafeLadder(E, m, y)
          : this.wNAFUnsafe(j, this.getPrecomputes(j, E, p), m, y);
      },
      setWindowSize(E, m) {
        s(m, _), c.set(E, m), f.delete(E);
      },
    };
  }
  function g(v, _, E, m) {
    if ((a(E, v), u(m, _), E.length !== m.length))
      throw new Error("arrays of points and scalars must have equal length");
    const p = v.ZERO,
      y = (0, t.bitLen)(BigInt(E.length)),
      j = y > 12 ? y - 3 : y > 4 ? y - 2 : y ? 2 : 1,
      P = (1 << j) - 1,
      S = new Array(P + 1).fill(p),
      w = Math.floor((_.BITS - 1) / j) * j;
    let q = p;
    for (let T = w; T >= 0; T -= j) {
      S.fill(p);
      for (let M = 0; M < m.length; M++) {
        const A = m[M],
          x = Number((A >> BigInt(T)) & BigInt(P));
        S[x] = S[x].add(E[M]);
      }
      let B = p;
      for (let M = S.length - 1, A = p; M > 0; M--)
        (A = A.add(S[M])), (B = B.add(A));
      if (((q = q.add(B)), T !== 0)) for (let M = 0; M < j; M++) q = q.double();
    }
    return q;
  }
  function h(v, _, E, m) {
    s(m, _.BITS), a(E, v);
    const p = v.ZERO,
      y = 2 ** m - 1,
      j = Math.ceil(_.BITS / m),
      P = BigInt((1 << m) - 1),
      S = E.map((w) => {
        const q = [];
        for (let T = 0, B = w; T < y; T++) q.push(B), (B = B.add(w));
        return q;
      });
    return (w) => {
      if ((u(w, _), w.length > E.length))
        throw new Error(
          "array of scalars must be smaller than array of points",
        );
      let q = p;
      for (let T = 0; T < j; T++) {
        if (q !== p) for (let M = 0; M < m; M++) q = q.double();
        const B = BigInt(j * m - (T + 1) * m);
        for (let M = 0; M < w.length; M++) {
          const A = w[M],
            x = Number((A >> B) & P);
          x && (q = q.add(S[M][x - 1]));
        }
      }
      return q;
    };
  }
  function b(v) {
    return (
      (0, e.validateField)(v.Fp),
      (0, t.validateObject)(
        v,
        { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
        { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" },
      ),
      Object.freeze({
        ...(0, e.nLength)(v.n, v.nBitLength),
        ...v,
        p: v.Fp.ORDER,
      })
    );
  }
  return er;
}
var Fl;
function Zg() {
  return (
    Fl ||
      ((Fl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.DER = void 0),
          (e.weierstrassPoints = h),
          (e.weierstrass = v),
          (e.SWUFpSqrtRatio = _),
          (e.mapToCurveSimpleSWU = E);
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const t =
            w1(),
          n = Iu(),
          r = Ht(),
          i = Ht();
        function s(m) {
          m.lowS !== void 0 && (0, i.abool)("lowS", m.lowS),
            m.prehash !== void 0 && (0, i.abool)("prehash", m.prehash);
        }
        function o(m) {
          const p = (0, t.validateBasic)(m);
          r.validateObject(
            p,
            { a: "field", b: "field" },
            {
              allowedPrivateKeyLengths: "array",
              wrapPrivateKey: "boolean",
              isTorsionFree: "function",
              clearCofactor: "function",
              allowInfinityPoint: "boolean",
              fromBytes: "function",
              toBytes: "function",
            },
          );
          const { endo: y, Fp: j, a: P } = p;
          if (y) {
            if (!j.eql(P, j.ZERO))
              throw new Error(
                "invalid endomorphism, can only be defined for Koblitz curves that have a=0",
              );
            if (
              typeof y != "object" ||
              typeof y.beta != "bigint" ||
              typeof y.splitScalar != "function"
            )
              throw new Error(
                "invalid endomorphism, expected beta: bigint and splitScalar: function",
              );
          }
          return Object.freeze({ ...p });
        }
        const { bytesToNumberBE: a, hexToBytes: u } = r;
        e.DER = {
          Err: class extends Error {
            constructor(p = "") {
              super(p);
            }
          },
          _tlv: {
            encode: (m, p) => {
              const { Err: y } = e.DER;
              if (m < 0 || m > 256) throw new y("tlv.encode: wrong tag");
              if (p.length & 1) throw new y("tlv.encode: unpadded data");
              const j = p.length / 2,
                P = r.numberToHexUnpadded(j);
              if ((P.length / 2) & 128)
                throw new y("tlv.encode: long form length too big");
              const S =
                j > 127 ? r.numberToHexUnpadded((P.length / 2) | 128) : "";
              return r.numberToHexUnpadded(m) + S + P + p;
            },
            decode(m, p) {
              const { Err: y } = e.DER;
              let j = 0;
              if (m < 0 || m > 256) throw new y("tlv.encode: wrong tag");
              if (p.length < 2 || p[j++] !== m)
                throw new y("tlv.decode: wrong tlv");
              const P = p[j++],
                S = !!(P & 128);
              let w = 0;
              if (!S) w = P;
              else {
                const T = P & 127;
                if (!T)
                  throw new y(
                    "tlv.decode(long): indefinite length not supported",
                  );
                if (T > 4)
                  throw new y("tlv.decode(long): byte length is too big");
                const B = p.subarray(j, j + T);
                if (B.length !== T)
                  throw new y("tlv.decode: length bytes not complete");
                if (B[0] === 0)
                  throw new y("tlv.decode(long): zero leftmost byte");
                for (const M of B) w = (w << 8) | M;
                if (((j += T), w < 128))
                  throw new y("tlv.decode(long): not minimal encoding");
              }
              const q = p.subarray(j, j + w);
              if (q.length !== w) throw new y("tlv.decode: wrong value length");
              return { v: q, l: p.subarray(j + w) };
            },
          },
          _int: {
            encode(m) {
              const { Err: p } = e.DER;
              if (m < f)
                throw new p("integer: negative integers are not allowed");
              let y = r.numberToHexUnpadded(m);
              if (
                (Number.parseInt(y[0], 16) & 8 && (y = "00" + y), y.length & 1)
              )
                throw new p("unexpected DER parsing assertion: unpadded hex");
              return y;
            },
            decode(m) {
              const { Err: p } = e.DER;
              if (m[0] & 128)
                throw new p("invalid signature integer: negative");
              if (m[0] === 0 && !(m[1] & 128))
                throw new p(
                  "invalid signature integer: unnecessary leading zero",
                );
              return a(m);
            },
          },
          toSig(m) {
            const { Err: p, _int: y, _tlv: j } = e.DER,
              P = typeof m == "string" ? u(m) : m;
            r.abytes(P);
            const { v: S, l: w } = j.decode(48, P);
            if (w.length)
              throw new p("invalid signature: left bytes after parsing");
            const { v: q, l: T } = j.decode(2, S),
              { v: B, l: M } = j.decode(2, T);
            if (M.length)
              throw new p("invalid signature: left bytes after parsing");
            return { r: y.decode(q), s: y.decode(B) };
          },
          hexFromSig(m) {
            const { _tlv: p, _int: y } = e.DER,
              j = p.encode(2, y.encode(m.r)),
              P = p.encode(2, y.encode(m.s)),
              S = j + P;
            return p.encode(48, S);
          },
        };
        const f = BigInt(0),
          c = BigInt(1),
          d = BigInt(2),
          l = BigInt(3),
          g = BigInt(4);
        function h(m) {
          const p = o(m),
            { Fp: y } = p,
            j = n.Field(p.n, p.nBitLength),
            P =
              p.toBytes ||
              ((H, R, O) => {
                const I = R.toAffine();
                return r.concatBytes(
                  Uint8Array.from([4]),
                  y.toBytes(I.x),
                  y.toBytes(I.y),
                );
              }),
            S =
              p.fromBytes ||
              ((H) => {
                const R = H.subarray(1),
                  O = y.fromBytes(R.subarray(0, y.BYTES)),
                  I = y.fromBytes(R.subarray(y.BYTES, 2 * y.BYTES));
                return { x: O, y: I };
              });
          function w(H) {
            const { a: R, b: O } = p,
              I = y.sqr(H),
              C = y.mul(I, H);
            return y.add(y.add(C, y.mul(H, R)), O);
          }
          if (!y.eql(y.sqr(p.Gy), w(p.Gx)))
            throw new Error("bad generator point: equation left != right");
          function q(H) {
            return r.inRange(H, c, p.n);
          }
          function T(H) {
            const {
              allowedPrivateKeyLengths: R,
              nByteLength: O,
              wrapPrivateKey: I,
              n: C,
            } = p;
            if (R && typeof H != "bigint") {
              if (
                (r.isBytes(H) && (H = r.bytesToHex(H)),
                typeof H != "string" || !R.includes(H.length))
              )
                throw new Error("invalid private key");
              H = H.padStart(O * 2, "0");
            }
            let k;
            try {
              k =
                typeof H == "bigint"
                  ? H
                  : r.bytesToNumberBE((0, i.ensureBytes)("private key", H, O));
            } catch {
              throw new Error(
                "invalid private key, expected hex or " +
                  O +
                  " bytes, got " +
                  typeof H,
              );
            }
            return (
              I && (k = n.mod(k, C)), r.aInRange("private key", k, c, C), k
            );
          }
          function B(H) {
            if (!(H instanceof x)) throw new Error("ProjectivePoint expected");
          }
          const M = (0, i.memoized)((H, R) => {
              const { px: O, py: I, pz: C } = H;
              if (y.eql(C, y.ONE)) return { x: O, y: I };
              const k = H.is0();
              R == null && (R = k ? y.ONE : y.inv(C));
              const z = y.mul(O, R),
                U = y.mul(I, R),
                L = y.mul(C, R);
              if (k) return { x: y.ZERO, y: y.ZERO };
              if (!y.eql(L, y.ONE)) throw new Error("invZ was invalid");
              return { x: z, y: U };
            }),
            A = (0, i.memoized)((H) => {
              if (H.is0()) {
                if (p.allowInfinityPoint && !y.is0(H.py)) return;
                throw new Error("bad point: ZERO");
              }
              const { x: R, y: O } = H.toAffine();
              if (!y.isValid(R) || !y.isValid(O))
                throw new Error("bad point: x or y not FE");
              const I = y.sqr(O),
                C = w(R);
              if (!y.eql(I, C))
                throw new Error("bad point: equation left != right");
              if (!H.isTorsionFree())
                throw new Error("bad point: not in prime-order subgroup");
              return !0;
            });
          class x {
            constructor(R, O, I) {
              if (
                ((this.px = R),
                (this.py = O),
                (this.pz = I),
                R == null || !y.isValid(R))
              )
                throw new Error("x required");
              if (O == null || !y.isValid(O)) throw new Error("y required");
              if (I == null || !y.isValid(I)) throw new Error("z required");
              Object.freeze(this);
            }
            static fromAffine(R) {
              const { x: O, y: I } = R || {};
              if (!R || !y.isValid(O) || !y.isValid(I))
                throw new Error("invalid affine point");
              if (R instanceof x)
                throw new Error("projective point not allowed");
              const C = (k) => y.eql(k, y.ZERO);
              return C(O) && C(I) ? x.ZERO : new x(O, I, y.ONE);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static normalizeZ(R) {
              const O = y.invertBatch(R.map((I) => I.pz));
              return R.map((I, C) => I.toAffine(O[C])).map(x.fromAffine);
            }
            static fromHex(R) {
              const O = x.fromAffine(S((0, i.ensureBytes)("pointHex", R)));
              return O.assertValidity(), O;
            }
            static fromPrivateKey(R) {
              return x.BASE.multiply(T(R));
            }
            static msm(R, O) {
              return (0, t.pippenger)(x, j, R, O);
            }
            _setWindowSize(R) {
              F.setWindowSize(this, R);
            }
            assertValidity() {
              A(this);
            }
            hasEvenY() {
              const { y: R } = this.toAffine();
              if (y.isOdd) return !y.isOdd(R);
              throw new Error("Field doesn't support isOdd");
            }
            equals(R) {
              B(R);
              const { px: O, py: I, pz: C } = this,
                { px: k, py: z, pz: U } = R,
                L = y.eql(y.mul(O, U), y.mul(k, C)),
                V = y.eql(y.mul(I, U), y.mul(z, C));
              return L && V;
            }
            negate() {
              return new x(this.px, y.neg(this.py), this.pz);
            }
            double() {
              const { a: R, b: O } = p,
                I = y.mul(O, l),
                { px: C, py: k, pz: z } = this;
              let U = y.ZERO,
                L = y.ZERO,
                V = y.ZERO,
                G = y.mul(C, C),
                Z = y.mul(k, k),
                ee = y.mul(z, z),
                J = y.mul(C, k);
              return (
                (J = y.add(J, J)),
                (V = y.mul(C, z)),
                (V = y.add(V, V)),
                (U = y.mul(R, V)),
                (L = y.mul(I, ee)),
                (L = y.add(U, L)),
                (U = y.sub(Z, L)),
                (L = y.add(Z, L)),
                (L = y.mul(U, L)),
                (U = y.mul(J, U)),
                (V = y.mul(I, V)),
                (ee = y.mul(R, ee)),
                (J = y.sub(G, ee)),
                (J = y.mul(R, J)),
                (J = y.add(J, V)),
                (V = y.add(G, G)),
                (G = y.add(V, G)),
                (G = y.add(G, ee)),
                (G = y.mul(G, J)),
                (L = y.add(L, G)),
                (ee = y.mul(k, z)),
                (ee = y.add(ee, ee)),
                (G = y.mul(ee, J)),
                (U = y.sub(U, G)),
                (V = y.mul(ee, Z)),
                (V = y.add(V, V)),
                (V = y.add(V, V)),
                new x(U, L, V)
              );
            }
            add(R) {
              B(R);
              const { px: O, py: I, pz: C } = this,
                { px: k, py: z, pz: U } = R;
              let L = y.ZERO,
                V = y.ZERO,
                G = y.ZERO;
              const Z = p.a,
                ee = y.mul(p.b, l);
              let J = y.mul(O, k),
                ae = y.mul(I, z),
                K = y.mul(C, U),
                X = y.add(O, I),
                Y = y.add(k, z);
              (X = y.mul(X, Y)),
                (Y = y.add(J, ae)),
                (X = y.sub(X, Y)),
                (Y = y.add(O, C));
              let W = y.add(k, U);
              return (
                (Y = y.mul(Y, W)),
                (W = y.add(J, K)),
                (Y = y.sub(Y, W)),
                (W = y.add(I, C)),
                (L = y.add(z, U)),
                (W = y.mul(W, L)),
                (L = y.add(ae, K)),
                (W = y.sub(W, L)),
                (G = y.mul(Z, Y)),
                (L = y.mul(ee, K)),
                (G = y.add(L, G)),
                (L = y.sub(ae, G)),
                (G = y.add(ae, G)),
                (V = y.mul(L, G)),
                (ae = y.add(J, J)),
                (ae = y.add(ae, J)),
                (K = y.mul(Z, K)),
                (Y = y.mul(ee, Y)),
                (ae = y.add(ae, K)),
                (K = y.sub(J, K)),
                (K = y.mul(Z, K)),
                (Y = y.add(Y, K)),
                (J = y.mul(ae, Y)),
                (V = y.add(V, J)),
                (J = y.mul(W, Y)),
                (L = y.mul(X, L)),
                (L = y.sub(L, J)),
                (J = y.mul(X, ae)),
                (G = y.mul(W, G)),
                (G = y.add(G, J)),
                new x(L, V, G)
              );
            }
            subtract(R) {
              return this.add(R.negate());
            }
            is0() {
              return this.equals(x.ZERO);
            }
            wNAF(R) {
              return F.wNAFCached(this, R, x.normalizeZ);
            }
            multiplyUnsafe(R) {
              const { endo: O, n: I } = p;
              r.aInRange("scalar", R, f, I);
              const C = x.ZERO;
              if (R === f) return C;
              if (this.is0() || R === c) return this;
              if (!O || F.hasPrecomputes(this))
                return F.wNAFCachedUnsafe(this, R, x.normalizeZ);
              let { k1neg: k, k1: z, k2neg: U, k2: L } = O.splitScalar(R),
                V = C,
                G = C,
                Z = this;
              for (; z > f || L > f; )
                z & c && (V = V.add(Z)),
                  L & c && (G = G.add(Z)),
                  (Z = Z.double()),
                  (z >>= c),
                  (L >>= c);
              return (
                k && (V = V.negate()),
                U && (G = G.negate()),
                (G = new x(y.mul(G.px, O.beta), G.py, G.pz)),
                V.add(G)
              );
            }
            multiply(R) {
              const { endo: O, n: I } = p;
              r.aInRange("scalar", R, c, I);
              let C, k;
              if (O) {
                const { k1neg: z, k1: U, k2neg: L, k2: V } = O.splitScalar(R);
                let { p: G, f: Z } = this.wNAF(U),
                  { p: ee, f: J } = this.wNAF(V);
                (G = F.constTimeNegate(z, G)),
                  (ee = F.constTimeNegate(L, ee)),
                  (ee = new x(y.mul(ee.px, O.beta), ee.py, ee.pz)),
                  (C = G.add(ee)),
                  (k = Z.add(J));
              } else {
                const { p: z, f: U } = this.wNAF(R);
                (C = z), (k = U);
              }
              return x.normalizeZ([C, k])[0];
            }
            multiplyAndAddUnsafe(R, O, I) {
              const C = x.BASE,
                k = (U, L) =>
                  L === f || L === c || !U.equals(C)
                    ? U.multiplyUnsafe(L)
                    : U.multiply(L),
                z = k(this, O).add(k(R, I));
              return z.is0() ? void 0 : z;
            }
            toAffine(R) {
              return M(this, R);
            }
            isTorsionFree() {
              const { h: R, isTorsionFree: O } = p;
              if (R === c) return !0;
              if (O) return O(x, this);
              throw new Error(
                "isTorsionFree() has not been declared for the elliptic curve",
              );
            }
            clearCofactor() {
              const { h: R, clearCofactor: O } = p;
              return R === c ? this : O ? O(x, this) : this.multiplyUnsafe(p.h);
            }
            toRawBytes(R = !0) {
              return (
                (0, i.abool)("isCompressed", R),
                this.assertValidity(),
                P(x, this, R)
              );
            }
            toHex(R = !0) {
              return (
                (0, i.abool)("isCompressed", R),
                r.bytesToHex(this.toRawBytes(R))
              );
            }
          }
          (x.BASE = new x(p.Gx, p.Gy, y.ONE)),
            (x.ZERO = new x(y.ZERO, y.ONE, y.ZERO));
          const $ = p.nBitLength,
            F = (0, t.wNAF)(x, p.endo ? Math.ceil($ / 2) : $);
          return {
            CURVE: p,
            ProjectivePoint: x,
            normPrivateKeyToScalar: T,
            weierstrassEquation: w,
            isWithinCurveOrder: q,
          };
        }
        function b(m) {
          const p = (0, t.validateBasic)(m);
          return (
            r.validateObject(
              p,
              { hash: "hash", hmac: "function", randomBytes: "function" },
              {
                bits2int: "function",
                bits2int_modN: "function",
                lowS: "boolean",
              },
            ),
            Object.freeze({ lowS: !0, ...p })
          );
        }
        function v(m) {
          const p = b(m),
            { Fp: y, n: j } = p,
            P = y.BYTES + 1,
            S = 2 * y.BYTES + 1;
          function w(K) {
            return n.mod(K, j);
          }
          function q(K) {
            return n.invert(K, j);
          }
          const {
              ProjectivePoint: T,
              normPrivateKeyToScalar: B,
              weierstrassEquation: M,
              isWithinCurveOrder: A,
            } = h({
              ...p,
              toBytes(K, X, Y) {
                const W = X.toAffine(),
                  D = y.toBytes(W.x),
                  se = r.concatBytes;
                return (
                  (0, i.abool)("isCompressed", Y),
                  Y
                    ? se(Uint8Array.from([X.hasEvenY() ? 2 : 3]), D)
                    : se(Uint8Array.from([4]), D, y.toBytes(W.y))
                );
              },
              fromBytes(K) {
                const X = K.length,
                  Y = K[0],
                  W = K.subarray(1);
                if (X === P && (Y === 2 || Y === 3)) {
                  const D = r.bytesToNumberBE(W);
                  if (!r.inRange(D, c, y.ORDER))
                    throw new Error("Point is not on curve");
                  const se = M(D);
                  let pe;
                  try {
                    pe = y.sqrt(se);
                  } catch (ve) {
                    const _e = ve instanceof Error ? ": " + ve.message : "";
                    throw new Error("Point is not on curve" + _e);
                  }
                  const ce = (pe & c) === c;
                  return (
                    ((Y & 1) === 1) !== ce && (pe = y.neg(pe)), { x: D, y: pe }
                  );
                } else if (X === S && Y === 4) {
                  const D = y.fromBytes(W.subarray(0, y.BYTES)),
                    se = y.fromBytes(W.subarray(y.BYTES, 2 * y.BYTES));
                  return { x: D, y: se };
                } else {
                  const D = P,
                    se = S;
                  throw new Error(
                    "invalid Point, expected length of " +
                      D +
                      ", or uncompressed " +
                      se +
                      ", got " +
                      X,
                  );
                }
              },
            }),
            x = (K) => r.bytesToHex(r.numberToBytesBE(K, p.nByteLength));
          function $(K) {
            const X = j >> c;
            return K > X;
          }
          function F(K) {
            return $(K) ? w(-K) : K;
          }
          const H = (K, X, Y) => r.bytesToNumberBE(K.slice(X, Y));
          class R {
            constructor(X, Y, W) {
              (this.r = X),
                (this.s = Y),
                (this.recovery = W),
                this.assertValidity();
            }
            static fromCompact(X) {
              const Y = p.nByteLength;
              return (
                (X = (0, i.ensureBytes)("compactSignature", X, Y * 2)),
                new R(H(X, 0, Y), H(X, Y, 2 * Y))
              );
            }
            static fromDER(X) {
              const { r: Y, s: W } = e.DER.toSig((0, i.ensureBytes)("DER", X));
              return new R(Y, W);
            }
            assertValidity() {
              r.aInRange("r", this.r, c, j), r.aInRange("s", this.s, c, j);
            }
            addRecoveryBit(X) {
              return new R(this.r, this.s, X);
            }
            recoverPublicKey(X) {
              const { r: Y, s: W, recovery: D } = this,
                se = U((0, i.ensureBytes)("msgHash", X));
              if (D == null || ![0, 1, 2, 3].includes(D))
                throw new Error("recovery id invalid");
              const pe = D === 2 || D === 3 ? Y + p.n : Y;
              if (pe >= y.ORDER) throw new Error("recovery id 2 or 3 invalid");
              const ce = D & 1 ? "03" : "02",
                he = T.fromHex(ce + x(pe)),
                ve = q(pe),
                _e = w(-se * ve),
                $e = w(W * ve),
                je = T.BASE.multiplyAndAddUnsafe(he, _e, $e);
              if (!je) throw new Error("point at infinify");
              return je.assertValidity(), je;
            }
            hasHighS() {
              return $(this.s);
            }
            normalizeS() {
              return this.hasHighS()
                ? new R(this.r, w(-this.s), this.recovery)
                : this;
            }
            toDERRawBytes() {
              return r.hexToBytes(this.toDERHex());
            }
            toDERHex() {
              return e.DER.hexFromSig({ r: this.r, s: this.s });
            }
            toCompactRawBytes() {
              return r.hexToBytes(this.toCompactHex());
            }
            toCompactHex() {
              return x(this.r) + x(this.s);
            }
          }
          const O = {
            isValidPrivateKey(K) {
              try {
                return B(K), !0;
              } catch {
                return !1;
              }
            },
            normPrivateKeyToScalar: B,
            randomPrivateKey: () => {
              const K = n.getMinHashLength(p.n);
              return n.mapHashToField(p.randomBytes(K), p.n);
            },
            precompute(K = 8, X = T.BASE) {
              return X._setWindowSize(K), X.multiply(BigInt(3)), X;
            },
          };
          function I(K, X = !0) {
            return T.fromPrivateKey(K).toRawBytes(X);
          }
          function C(K) {
            const X = r.isBytes(K),
              Y = typeof K == "string",
              W = (X || Y) && K.length;
            return X
              ? W === P || W === S
              : Y
                ? W === 2 * P || W === 2 * S
                : K instanceof T;
          }
          function k(K, X, Y = !0) {
            if (C(K)) throw new Error("first arg must be private key");
            if (!C(X)) throw new Error("second arg must be public key");
            return T.fromHex(X).multiply(B(K)).toRawBytes(Y);
          }
          const z =
              p.bits2int ||
              function (K) {
                if (K.length > 8192) throw new Error("input is too large");
                const X = r.bytesToNumberBE(K),
                  Y = K.length * 8 - p.nBitLength;
                return Y > 0 ? X >> BigInt(Y) : X;
              },
            U =
              p.bits2int_modN ||
              function (K) {
                return w(z(K));
              },
            L = r.bitMask(p.nBitLength);
          function V(K) {
            return (
              r.aInRange("num < 2^" + p.nBitLength, K, f, L),
              r.numberToBytesBE(K, p.nByteLength)
            );
          }
          function G(K, X, Y = Z) {
            if (["recovered", "canonical"].some((we) => we in Y))
              throw new Error("sign() legacy options not supported");
            const { hash: W, randomBytes: D } = p;
            let { lowS: se, prehash: pe, extraEntropy: ce } = Y;
            se == null && (se = !0),
              (K = (0, i.ensureBytes)("msgHash", K)),
              s(Y),
              pe && (K = (0, i.ensureBytes)("prehashed msgHash", W(K)));
            const he = U(K),
              ve = B(X),
              _e = [V(ve), V(he)];
            if (ce != null && ce !== !1) {
              const we = ce === !0 ? D(y.BYTES) : ce;
              _e.push((0, i.ensureBytes)("extraEntropy", we));
            }
            const $e = r.concatBytes(..._e),
              je = he;
            function Ne(we) {
              const ze = z(we);
              if (!A(ze)) return;
              const et = q(ze),
                tt = T.BASE.multiply(ze).toAffine(),
                Le = w(tt.x);
              if (Le === f) return;
              const De = w(et * w(je + Le * ve));
              if (De === f) return;
              let nt = (tt.x === Le ? 0 : 2) | Number(tt.y & c),
                Ue = De;
              return (
                se && $(De) && ((Ue = F(De)), (nt ^= 1)), new R(Le, Ue, nt)
              );
            }
            return { seed: $e, k2sig: Ne };
          }
          const Z = { lowS: p.lowS, prehash: !1 },
            ee = { lowS: p.lowS, prehash: !1 };
          function J(K, X, Y = Z) {
            const { seed: W, k2sig: D } = G(K, X, Y),
              se = p;
            return r.createHmacDrbg(
              se.hash.outputLen,
              se.nByteLength,
              se.hmac,
            )(W, D);
          }
          T.BASE._setWindowSize(8);
          function ae(K, X, Y, W = ee) {
            var nt;
            const D = K;
            (X = (0, i.ensureBytes)("msgHash", X)),
              (Y = (0, i.ensureBytes)("publicKey", Y));
            const { lowS: se, prehash: pe, format: ce } = W;
            if ((s(W), "strict" in W))
              throw new Error("options.strict was renamed to lowS");
            if (ce !== void 0 && ce !== "compact" && ce !== "der")
              throw new Error("format must be compact or der");
            const he = typeof D == "string" || r.isBytes(D),
              ve =
                !he &&
                !ce &&
                typeof D == "object" &&
                D !== null &&
                typeof D.r == "bigint" &&
                typeof D.s == "bigint";
            if (!he && !ve)
              throw new Error(
                "invalid signature, expected Uint8Array, hex string or Signature instance",
              );
            let _e, $e;
            try {
              if ((ve && (_e = new R(D.r, D.s)), he)) {
                try {
                  ce !== "compact" && (_e = R.fromDER(D));
                } catch (Ue) {
                  if (!(Ue instanceof e.DER.Err)) throw Ue;
                }
                !_e && ce !== "der" && (_e = R.fromCompact(D));
              }
              $e = T.fromHex(Y);
            } catch {
              return !1;
            }
            if (!_e || (se && _e.hasHighS())) return !1;
            pe && (X = p.hash(X));
            const { r: je, s: Ne } = _e,
              we = U(X),
              ze = q(Ne),
              et = w(we * ze),
              tt = w(je * ze),
              Le =
                (nt = T.BASE.multiplyAndAddUnsafe($e, et, tt)) == null
                  ? void 0
                  : nt.toAffine();
            return Le ? w(Le.x) === je : !1;
          }
          return {
            CURVE: p,
            getPublicKey: I,
            getSharedSecret: k,
            sign: J,
            verify: ae,
            ProjectivePoint: T,
            Signature: R,
            utils: O,
          };
        }
        function _(m, p) {
          const y = m.ORDER;
          let j = f;
          for (let F = y - c; F % d === f; F /= d) j += c;
          const P = j,
            S = d << (P - c - c),
            w = S * d,
            q = (y - c) / w,
            T = (q - c) / d,
            B = w - c,
            M = S,
            A = m.pow(p, q),
            x = m.pow(p, (q + c) / d);
          let $ = (F, H) => {
            let R = A,
              O = m.pow(H, B),
              I = m.sqr(O);
            I = m.mul(I, H);
            let C = m.mul(F, I);
            (C = m.pow(C, T)),
              (C = m.mul(C, O)),
              (O = m.mul(C, H)),
              (I = m.mul(C, F));
            let k = m.mul(I, O);
            C = m.pow(k, M);
            let z = m.eql(C, m.ONE);
            (O = m.mul(I, x)),
              (C = m.mul(k, R)),
              (I = m.cmov(O, I, z)),
              (k = m.cmov(C, k, z));
            for (let U = P; U > c; U--) {
              let L = U - d;
              L = d << (L - c);
              let V = m.pow(k, L);
              const G = m.eql(V, m.ONE);
              (O = m.mul(I, R)),
                (R = m.mul(R, R)),
                (V = m.mul(k, R)),
                (I = m.cmov(O, I, G)),
                (k = m.cmov(V, k, G));
            }
            return { isValid: z, value: I };
          };
          if (m.ORDER % g === l) {
            const F = (m.ORDER - l) / g,
              H = m.sqrt(m.neg(p));
            $ = (R, O) => {
              let I = m.sqr(O);
              const C = m.mul(R, O);
              I = m.mul(I, C);
              let k = m.pow(I, F);
              k = m.mul(k, C);
              const z = m.mul(k, H),
                U = m.mul(m.sqr(k), O),
                L = m.eql(U, R);
              let V = m.cmov(z, k, L);
              return { isValid: L, value: V };
            };
          }
          return $;
        }
        function E(m, p) {
          if (
            (n.validateField(m),
            !m.isValid(p.A) || !m.isValid(p.B) || !m.isValid(p.Z))
          )
            throw new Error("mapToCurveSimpleSWU: invalid opts");
          const y = _(m, p.Z);
          if (!m.isOdd) throw new Error("Fp.isOdd is not implemented!");
          return (j) => {
            let P, S, w, q, T, B, M, A;
            (P = m.sqr(j)),
              (P = m.mul(P, p.Z)),
              (S = m.sqr(P)),
              (S = m.add(S, P)),
              (w = m.add(S, m.ONE)),
              (w = m.mul(w, p.B)),
              (q = m.cmov(p.Z, m.neg(S), !m.eql(S, m.ZERO))),
              (q = m.mul(q, p.A)),
              (S = m.sqr(w)),
              (B = m.sqr(q)),
              (T = m.mul(B, p.A)),
              (S = m.add(S, T)),
              (S = m.mul(S, w)),
              (B = m.mul(B, q)),
              (T = m.mul(B, p.B)),
              (S = m.add(S, T)),
              (M = m.mul(P, w));
            const { isValid: x, value: $ } = y(S, B);
            (A = m.mul(P, j)),
              (A = m.mul(A, $)),
              (M = m.cmov(M, w, x)),
              (A = m.cmov(A, $, x));
            const F = m.isOdd(j) === m.isOdd(A);
            return (
              (A = m.cmov(m.neg(A), A, F)), (M = m.div(M, q)), { x: M, y: A }
            );
          };
        }
      })(Pc)),
    Pc
  );
}
var Hl;
function T1() {
  if (Hl) return hn;
  (Hl = 1),
    Object.defineProperty(hn, "__esModule", { value: !0 }),
    (hn.getHash = r),
    (hn.createCurve = i);
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const e =
      P1(),
    t = Vn(),
    n = Zg();
  function r(s) {
    return {
      hash: s,
      hmac: (o, ...a) => (0, e.hmac)(s, o, (0, t.concatBytes)(...a)),
      randomBytes: t.randomBytes,
    };
  }
  function i(s, o) {
    const a = (u) => (0, n.weierstrass)({ ...s, ...r(u) });
    return Object.freeze({ ...a(o), create: a });
  }
  return hn;
}
var xt = {},
  kl;
function A1() {
  if (kl) return xt;
  (kl = 1),
    Object.defineProperty(xt, "__esModule", { value: !0 }),
    (xt.expand_message_xmd = o),
    (xt.expand_message_xof = a),
    (xt.hash_to_field = u),
    (xt.isogenyMap = f),
    (xt.createHasher = c);
  const e = Iu(),
    t = Ht(),
    n = t.bytesToNumberBE;
  function r(d, l) {
    if ((s(d), s(l), d < 0 || d >= 1 << (8 * l)))
      throw new Error("invalid I2OSP input: " + d);
    const g = Array.from({ length: l }).fill(0);
    for (let h = l - 1; h >= 0; h--) (g[h] = d & 255), (d >>>= 8);
    return new Uint8Array(g);
  }
  function i(d, l) {
    const g = new Uint8Array(d.length);
    for (let h = 0; h < d.length; h++) g[h] = d[h] ^ l[h];
    return g;
  }
  function s(d) {
    if (!Number.isSafeInteger(d)) throw new Error("number expected");
  }
  function o(d, l, g, h) {
    (0, t.abytes)(d),
      (0, t.abytes)(l),
      s(g),
      l.length > 255 &&
        (l = h((0, t.concatBytes)((0, t.utf8ToBytes)("H2C-OVERSIZE-DST-"), l)));
    const { outputLen: b, blockLen: v } = h,
      _ = Math.ceil(g / b);
    if (g > 65535 || _ > 255)
      throw new Error("expand_message_xmd: invalid lenInBytes");
    const E = (0, t.concatBytes)(l, r(l.length, 1)),
      m = r(0, v),
      p = r(g, 2),
      y = new Array(_),
      j = h((0, t.concatBytes)(m, d, p, r(0, 1), E));
    y[0] = h((0, t.concatBytes)(j, r(1, 1), E));
    for (let S = 1; S <= _; S++) {
      const w = [i(j, y[S - 1]), r(S + 1, 1), E];
      y[S] = h((0, t.concatBytes)(...w));
    }
    return (0, t.concatBytes)(...y).slice(0, g);
  }
  function a(d, l, g, h, b) {
    if (((0, t.abytes)(d), (0, t.abytes)(l), s(g), l.length > 255)) {
      const v = Math.ceil((2 * h) / 8);
      l = b
        .create({ dkLen: v })
        .update((0, t.utf8ToBytes)("H2C-OVERSIZE-DST-"))
        .update(l)
        .digest();
    }
    if (g > 65535 || l.length > 255)
      throw new Error("expand_message_xof: invalid lenInBytes");
    return b
      .create({ dkLen: g })
      .update(d)
      .update(r(g, 2))
      .update(l)
      .update(r(l.length, 1))
      .digest();
  }
  function u(d, l, g) {
    (0, t.validateObject)(g, {
      DST: "stringOrUint8Array",
      p: "bigint",
      m: "isSafeInteger",
      k: "isSafeInteger",
      hash: "hash",
    });
    const { p: h, k: b, m: v, hash: _, expand: E, DST: m } = g;
    (0, t.abytes)(d), s(l);
    const p = typeof m == "string" ? (0, t.utf8ToBytes)(m) : m,
      y = h.toString(2).length,
      j = Math.ceil((y + b) / 8),
      P = l * v * j;
    let S;
    if (E === "xmd") S = o(d, p, P, _);
    else if (E === "xof") S = a(d, p, P, b, _);
    else if (E === "_internal_pass") S = d;
    else throw new Error('expand must be "xmd" or "xof"');
    const w = new Array(l);
    for (let q = 0; q < l; q++) {
      const T = new Array(v);
      for (let B = 0; B < v; B++) {
        const M = j * (B + q * v),
          A = S.subarray(M, M + j);
        T[B] = (0, e.mod)(n(A), h);
      }
      w[q] = T;
    }
    return w;
  }
  function f(d, l) {
    const g = l.map((h) => Array.from(h).reverse());
    return (h, b) => {
      const [v, _, E, m] = g.map((p) =>
        p.reduce((y, j) => d.add(d.mul(y, h), j)),
      );
      return (h = d.div(v, _)), (b = d.mul(b, d.div(E, m))), { x: h, y: b };
    };
  }
  function c(d, l, g) {
    if (typeof l != "function") throw new Error("mapToCurve() must be defined");
    return {
      hashToCurve(h, b) {
        const v = u(h, 2, { ...g, DST: g.DST, ...b }),
          _ = d.fromAffine(l(v[0])),
          E = d.fromAffine(l(v[1])),
          m = _.add(E).clearCofactor();
        return m.assertValidity(), m;
      },
      encodeToCurve(h, b) {
        const v = u(h, 1, { ...g, DST: g.encodeDST, ...b }),
          _ = d.fromAffine(l(v[0])).clearCofactor();
        return _.assertValidity(), _;
      },
      mapToCurve(h) {
        if (!Array.isArray(h))
          throw new Error("mapToCurve: expected array of bigints");
        for (const v of h)
          if (typeof v != "bigint")
            throw new Error("mapToCurve: expected array of bigints");
        const b = d.fromAffine(l(h)).clearCofactor();
        return b.assertValidity(), b;
      },
    };
  }
  return xt;
}
var $l;
function Wn() {
  return (
    $l ||
      (($l = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.encodeToCurve = e.hashToCurve = e.schnorr = e.secp256k1 = void 0);
        /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const t =
            j1(),
          n = Vn(),
          r = T1(),
          i = A1(),
          s = Iu(),
          o = Ht(),
          a = Zg(),
          u = BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          ),
          f = BigInt(
            "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
          ),
          c = BigInt(1),
          d = BigInt(2),
          l = (H, R) => (H + R / d) / R;
        function g(H) {
          const R = u,
            O = BigInt(3),
            I = BigInt(6),
            C = BigInt(11),
            k = BigInt(22),
            z = BigInt(23),
            U = BigInt(44),
            L = BigInt(88),
            V = (H * H * H) % R,
            G = (V * V * H) % R,
            Z = ((0, s.pow2)(G, O, R) * G) % R,
            ee = ((0, s.pow2)(Z, O, R) * G) % R,
            J = ((0, s.pow2)(ee, d, R) * V) % R,
            ae = ((0, s.pow2)(J, C, R) * J) % R,
            K = ((0, s.pow2)(ae, k, R) * ae) % R,
            X = ((0, s.pow2)(K, U, R) * K) % R,
            Y = ((0, s.pow2)(X, L, R) * X) % R,
            W = ((0, s.pow2)(Y, U, R) * K) % R,
            D = ((0, s.pow2)(W, O, R) * G) % R,
            se = ((0, s.pow2)(D, z, R) * ae) % R,
            pe = ((0, s.pow2)(se, I, R) * V) % R,
            ce = (0, s.pow2)(pe, d, R);
          if (!h.eql(h.sqr(ce), H)) throw new Error("Cannot find square root");
          return ce;
        }
        const h = (0, s.Field)(u, void 0, void 0, { sqrt: g });
        e.secp256k1 = (0, r.createCurve)(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: h,
            n: f,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240",
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424",
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
              ),
              splitScalar: (H) => {
                const R = f,
                  O = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  I = -c * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  C = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  k = O,
                  z = BigInt("0x100000000000000000000000000000000"),
                  U = l(k * H, R),
                  L = l(-I * H, R);
                let V = (0, s.mod)(H - U * O - L * C, R),
                  G = (0, s.mod)(-U * I - L * k, R);
                const Z = V > z,
                  ee = G > z;
                if ((Z && (V = R - V), ee && (G = R - G), V > z || G > z))
                  throw new Error("splitScalar: Endomorphism failed, k=" + H);
                return { k1neg: Z, k1: V, k2neg: ee, k2: G };
              },
            },
          },
          t.sha256,
        );
        const b = BigInt(0),
          v = {};
        function _(H, ...R) {
          let O = v[H];
          if (O === void 0) {
            const I = (0, t.sha256)(Uint8Array.from(H, (C) => C.charCodeAt(0)));
            (O = (0, o.concatBytes)(I, I)), (v[H] = O);
          }
          return (0, t.sha256)((0, o.concatBytes)(O, ...R));
        }
        const E = (H) => H.toRawBytes(!0).slice(1),
          m = (H) => (0, o.numberToBytesBE)(H, 32),
          p = (H) => (0, s.mod)(H, u),
          y = (H) => (0, s.mod)(H, f),
          j = e.secp256k1.ProjectivePoint,
          P = (H, R, O) => j.BASE.multiplyAndAddUnsafe(H, R, O);
        function S(H) {
          let R = e.secp256k1.utils.normPrivateKeyToScalar(H),
            O = j.fromPrivateKey(R);
          return { scalar: O.hasEvenY() ? R : y(-R), bytes: E(O) };
        }
        function w(H) {
          (0, o.aInRange)("x", H, c, u);
          const R = p(H * H),
            O = p(R * H + BigInt(7));
          let I = g(O);
          I % d !== b && (I = p(-I));
          const C = new j(H, I, c);
          return C.assertValidity(), C;
        }
        const q = o.bytesToNumberBE;
        function T(...H) {
          return y(q(_("BIP0340/challenge", ...H)));
        }
        function B(H) {
          return S(H).bytes;
        }
        function M(H, R, O = (0, n.randomBytes)(32)) {
          const I = (0, o.ensureBytes)("message", H),
            { bytes: C, scalar: k } = S(R),
            z = (0, o.ensureBytes)("auxRand", O, 32),
            U = m(k ^ q(_("BIP0340/aux", z))),
            L = _("BIP0340/nonce", U, C, I),
            V = y(q(L));
          if (V === b) throw new Error("sign failed: k is zero");
          const { bytes: G, scalar: Z } = S(V),
            ee = T(G, C, I),
            J = new Uint8Array(64);
          if ((J.set(G, 0), J.set(m(y(Z + ee * k)), 32), !A(J, I, C)))
            throw new Error("sign: Invalid signature produced");
          return J;
        }
        function A(H, R, O) {
          const I = (0, o.ensureBytes)("signature", H, 64),
            C = (0, o.ensureBytes)("message", R),
            k = (0, o.ensureBytes)("publicKey", O, 32);
          try {
            const z = w(q(k)),
              U = q(I.subarray(0, 32));
            if (!(0, o.inRange)(U, c, u)) return !1;
            const L = q(I.subarray(32, 64));
            if (!(0, o.inRange)(L, c, f)) return !1;
            const V = T(m(U), E(z), C),
              G = P(z, L, y(-V));
            return !(!G || !G.hasEvenY() || G.toAffine().x !== U);
          } catch {
            return !1;
          }
        }
        e.schnorr = {
          getPublicKey: B,
          sign: M,
          verify: A,
          utils: {
            randomPrivateKey: e.secp256k1.utils.randomPrivateKey,
            lift_x: w,
            pointToBytes: E,
            numberToBytesBE: o.numberToBytesBE,
            bytesToNumberBE: o.bytesToNumberBE,
            taggedHash: _,
            mod: s.mod,
          },
        };
        const x = (0, i.isogenyMap)(
            h,
            [
              [
                "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
                "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
                "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
                "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
              ],
              [
                "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
                "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
                "0x0000000000000000000000000000000000000000000000000000000000000001",
              ],
              [
                "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
                "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
                "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
                "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
              ],
              [
                "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
                "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
                "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
                "0x0000000000000000000000000000000000000000000000000000000000000001",
              ],
            ].map((H) => H.map((R) => BigInt(R))),
          ),
          $ = (0, a.mapToCurveSimpleSWU)(h, {
            A: BigInt(
              "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533",
            ),
            B: BigInt("1771"),
            Z: h.create(BigInt("-11")),
          }),
          F = (0, i.createHasher)(
            e.secp256k1.ProjectivePoint,
            (H) => {
              const { x: R, y: O } = $(h.create(H[0]));
              return x(R, O);
            },
            {
              DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
              encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
              p: h.ORDER,
              m: 1,
              k: 128,
              expand: "xmd",
              hash: t.sha256,
            },
          );
        (e.hashToCurve = F.hashToCurve), (e.encodeToCurve = F.encodeToCurve);
      })(vc)),
    vc
  );
}
var Nl;
function Yc() {
  if (Nl) return ei;
  (Nl = 1),
    Object.defineProperty(ei, "__esModule", { value: !0 }),
    (ei.recoverPublicKey = r);
  const e = Re(),
    t = Pe(),
    n = Q();
  async function r({ hash: s, signature: o }) {
    const a = (0, e.isHex)(s) ? s : (0, n.toHex)(s),
      { secp256k1: u } = await Promise.resolve().then(() => Wn());
    return `0x${(() => {
      if (typeof o == "object" && "r" in o && "s" in o) {
        const { r: h, s: b, v, yParity: _ } = o,
          E = Number(_ ?? v),
          m = i(E);
        return new u.Signature(
          (0, t.hexToBigInt)(h),
          (0, t.hexToBigInt)(b),
        ).addRecoveryBit(m);
      }
      const d = (0, e.isHex)(o) ? o : (0, n.toHex)(o),
        l = (0, t.hexToNumber)(`0x${d.slice(130)}`),
        g = i(l);
      return u.Signature.fromCompact(d.substring(2, 130)).addRecoveryBit(g);
    })()
      .recoverPublicKey(a.substring(2))
      .toHex(!1)}`;
  }
  function i(s) {
    if (s === 0 || s === 1) return s;
    if (s === 27) return 0;
    if (s === 28) return 1;
    throw new Error("Invalid yParityOrV value");
  }
  return ei;
}
var zl;
function Dt() {
  if (zl) return Xo;
  (zl = 1),
    Object.defineProperty(Xo, "__esModule", { value: !0 }),
    (Xo.recoverAddress = n);
  const e = Kg(),
    t = Yc();
  async function n({ hash: r, signature: i }) {
    return (0, e.publicKeyToAddress)(
      await (0, t.recoverPublicKey)({ hash: r, signature: i }),
    );
  }
  return Xo;
}
var ti = {},
  wr = {},
  Ll;
function Kn() {
  if (Ll) return wr;
  (Ll = 1),
    Object.defineProperty(wr, "__esModule", { value: !0 }),
    (wr.toRlp = i),
    (wr.bytesToRlp = s),
    (wr.hexToRlp = o);
  const e = oe(),
    t = Dn(),
    n = le(),
    r = Q();
  function i(d, l = "hex") {
    const g = a(d),
      h = (0, t.createCursor)(new Uint8Array(g.length));
    return g.encode(h), l === "hex" ? (0, r.bytesToHex)(h.bytes) : h.bytes;
  }
  function s(d, l = "bytes") {
    return i(d, l);
  }
  function o(d, l = "hex") {
    return i(d, l);
  }
  function a(d) {
    return Array.isArray(d) ? u(d.map((l) => a(l))) : f(d);
  }
  function u(d) {
    const l = d.reduce((b, v) => b + v.length, 0),
      g = c(l);
    return {
      length: l <= 55 ? 1 + l : 1 + g + l,
      encode(b) {
        l <= 55
          ? b.pushByte(192 + l)
          : (b.pushByte(247 + g),
            g === 1
              ? b.pushUint8(l)
              : g === 2
                ? b.pushUint16(l)
                : g === 3
                  ? b.pushUint24(l)
                  : b.pushUint32(l));
        for (const { encode: v } of d) v(b);
      },
    };
  }
  function f(d) {
    const l = typeof d == "string" ? (0, n.hexToBytes)(d) : d,
      g = c(l.length);
    return {
      length:
        l.length === 1 && l[0] < 128
          ? 1
          : l.length <= 55
            ? 1 + l.length
            : 1 + g + l.length,
      encode(b) {
        l.length === 1 && l[0] < 128
          ? b.pushBytes(l)
          : l.length <= 55
            ? (b.pushByte(128 + l.length), b.pushBytes(l))
            : (b.pushByte(183 + g),
              g === 1
                ? b.pushUint8(l.length)
                : g === 2
                  ? b.pushUint16(l.length)
                  : g === 3
                    ? b.pushUint24(l.length)
                    : b.pushUint32(l.length),
              b.pushBytes(l));
      },
    };
  }
  function c(d) {
    if (d < 2 ** 8) return 1;
    if (d < 2 ** 16) return 2;
    if (d < 2 ** 24) return 3;
    if (d < 2 ** 32) return 4;
    throw new e.BaseError("Length is too large.");
  }
  return wr;
}
var Dl;
function S1() {
  if (Dl) return ti;
  (Dl = 1),
    Object.defineProperty(ti, "__esModule", { value: !0 }),
    (ti.hashAuthorization = s);
  const e = Be(),
    t = le(),
    n = Q(),
    r = Kn(),
    i = Oe();
  function s(o) {
    const { chainId: a, contractAddress: u, nonce: f, to: c } = o,
      d = (0, i.keccak256)(
        (0, e.concatHex)([
          "0x05",
          (0, r.toRlp)([
            a ? (0, n.numberToHex)(a) : "0x",
            u,
            f ? (0, n.numberToHex)(f) : "0x",
          ]),
        ]),
      );
    return c === "bytes" ? (0, t.hexToBytes)(d) : d;
  }
  return ti;
}
var Ul;
function Jg() {
  if (Ul) return Yo;
  (Ul = 1),
    Object.defineProperty(Yo, "__esModule", { value: !0 }),
    (Yo.recoverAuthorizationAddress = n);
  const e = Dt(),
    t = S1();
  async function n(r) {
    const { authorization: i, signature: s } = r;
    return (0, e.recoverAddress)({
      hash: (0, t.hashAuthorization)(i),
      signature: s ?? i,
    });
  }
  return Yo;
}
var ri = {},
  gn = {},
  Gl;
function Yg() {
  if (Gl) return gn;
  (Gl = 1),
    Object.defineProperty(gn, "__esModule", { value: !0 }),
    (gn.EstimateGasExecutionError = void 0);
  const e = Gn(),
    t = mr(),
    n = oe(),
    r = He();
  class i extends n.BaseError {
    constructor(
      o,
      {
        account: a,
        docsPath: u,
        chain: f,
        data: c,
        gas: d,
        gasPrice: l,
        maxFeePerGas: g,
        maxPriorityFeePerGas: h,
        nonce: b,
        to: v,
        value: _,
      },
    ) {
      var m;
      const E = (0, r.prettyPrint)({
        from: a == null ? void 0 : a.address,
        to: v,
        value:
          typeof _ < "u" &&
          `${(0, e.formatEther)(_)} ${((m = f == null ? void 0 : f.nativeCurrency) == null ? void 0 : m.symbol) || "ETH"}`,
        data: c,
        gas: d,
        gasPrice: typeof l < "u" && `${(0, t.formatGwei)(l)} gwei`,
        maxFeePerGas: typeof g < "u" && `${(0, t.formatGwei)(g)} gwei`,
        maxPriorityFeePerGas: typeof h < "u" && `${(0, t.formatGwei)(h)} gwei`,
        nonce: b,
      });
      super(o.shortMessage, {
        cause: o,
        docsPath: u,
        metaMessages: [
          ...(o.metaMessages ? [...o.metaMessages, " "] : []),
          "Estimate Gas Arguments:",
          E,
        ].filter(Boolean),
        name: "EstimateGasExecutionError",
      }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.cause = o);
    }
  }
  return (gn.EstimateGasExecutionError = i), gn;
}
var de = {},
  Vl;
function Ut() {
  if (Vl) return de;
  (Vl = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de.UnknownNodeError =
      de.TipAboveFeeCapError =
      de.TransactionTypeNotSupportedError =
      de.IntrinsicGasTooLowError =
      de.IntrinsicGasTooHighError =
      de.InsufficientFundsError =
      de.NonceMaxValueError =
      de.NonceTooLowError =
      de.NonceTooHighError =
      de.FeeCapTooLowError =
      de.FeeCapTooHighError =
      de.ExecutionRevertedError =
        void 0);
  const e = mr(),
    t = oe();
  class n extends t.BaseError {
    constructor({ cause: b, message: v } = {}) {
      var E;
      const _ =
        (E = v == null ? void 0 : v.replace("execution reverted: ", "")) == null
          ? void 0
          : E.replace("execution reverted", "");
      super(
        `Execution reverted ${_ ? `with reason: ${_}` : "for an unknown reason"}.`,
        { cause: b, name: "ExecutionRevertedError" },
      );
    }
  }
  (de.ExecutionRevertedError = n),
    Object.defineProperty(n, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3,
    }),
    Object.defineProperty(n, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /execution reverted/,
    });
  class r extends t.BaseError {
    constructor({ cause: b, maxFeePerGas: v } = {}) {
      super(
        `The fee cap (\`maxFeePerGas\`${v ? ` = ${(0, e.formatGwei)(v)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`,
        { cause: b, name: "FeeCapTooHighError" },
      );
    }
  }
  (de.FeeCapTooHighError = r),
    Object.defineProperty(r, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
    });
  class i extends t.BaseError {
    constructor({ cause: b, maxFeePerGas: v } = {}) {
      super(
        `The fee cap (\`maxFeePerGas\`${v ? ` = ${(0, e.formatGwei)(v)}` : ""} gwei) cannot be lower than the block base fee.`,
        { cause: b, name: "FeeCapTooLowError" },
      );
    }
  }
  (de.FeeCapTooLowError = i),
    Object.defineProperty(i, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
    });
  class s extends t.BaseError {
    constructor({ cause: b, nonce: v } = {}) {
      super(
        `Nonce provided for the transaction ${v ? `(${v}) ` : ""}is higher than the next one expected.`,
        { cause: b, name: "NonceTooHighError" },
      );
    }
  }
  (de.NonceTooHighError = s),
    Object.defineProperty(s, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce too high/,
    });
  class o extends t.BaseError {
    constructor({ cause: b, nonce: v } = {}) {
      super(
        [
          `Nonce provided for the transaction ${v ? `(${v}) ` : ""}is lower than the current nonce of the account.`,
          "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
        ].join(`
`),
        { cause: b, name: "NonceTooLowError" },
      );
    }
  }
  (de.NonceTooLowError = o),
    Object.defineProperty(o, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce too low|transaction already imported|already known/,
    });
  class a extends t.BaseError {
    constructor({ cause: b, nonce: v } = {}) {
      super(
        `Nonce provided for the transaction ${v ? `(${v}) ` : ""}exceeds the maximum allowed nonce.`,
        { cause: b, name: "NonceMaxValueError" },
      );
    }
  }
  (de.NonceMaxValueError = a),
    Object.defineProperty(a, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce has max value/,
    });
  class u extends t.BaseError {
    constructor({ cause: b } = {}) {
      super(
        [
          "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
        ].join(`
`),
        {
          cause: b,
          metaMessages: [
            "This error could arise when the account does not have enough funds to:",
            " - pay for the total gas fee,",
            " - pay for the value to send.",
            " ",
            "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
            " - `gas` is the amount of gas needed for transaction to execute,",
            " - `gas fee` is the gas fee,",
            " - `value` is the amount of ether to send to the recipient.",
          ],
          name: "InsufficientFundsError",
        },
      );
    }
  }
  (de.InsufficientFundsError = u),
    Object.defineProperty(u, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /insufficient funds|exceeds transaction sender account balance/,
    });
  class f extends t.BaseError {
    constructor({ cause: b, gas: v } = {}) {
      super(
        `The amount of gas ${v ? `(${v}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`,
        { cause: b, name: "IntrinsicGasTooHighError" },
      );
    }
  }
  (de.IntrinsicGasTooHighError = f),
    Object.defineProperty(f, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /intrinsic gas too high|gas limit reached/,
    });
  class c extends t.BaseError {
    constructor({ cause: b, gas: v } = {}) {
      super(
        `The amount of gas ${v ? `(${v}) ` : ""}provided for the transaction is too low.`,
        { cause: b, name: "IntrinsicGasTooLowError" },
      );
    }
  }
  (de.IntrinsicGasTooLowError = c),
    Object.defineProperty(c, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /intrinsic gas too low/,
    });
  class d extends t.BaseError {
    constructor({ cause: b }) {
      super("The transaction type is not supported for this chain.", {
        cause: b,
        name: "TransactionTypeNotSupportedError",
      });
    }
  }
  (de.TransactionTypeNotSupportedError = d),
    Object.defineProperty(d, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /transaction type not valid/,
    });
  class l extends t.BaseError {
    constructor({ cause: b, maxPriorityFeePerGas: v, maxFeePerGas: _ } = {}) {
      super(
        [
          `The provided tip (\`maxPriorityFeePerGas\`${v ? ` = ${(0, e.formatGwei)(v)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${_ ? ` = ${(0, e.formatGwei)(_)} gwei` : ""}).`,
        ].join(`
`),
        { cause: b, name: "TipAboveFeeCapError" },
      );
    }
  }
  (de.TipAboveFeeCapError = l),
    Object.defineProperty(l, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
    });
  class g extends t.BaseError {
    constructor({ cause: b }) {
      super(
        `An error occurred while executing: ${b == null ? void 0 : b.shortMessage}`,
        { cause: b, name: "UnknownNodeError" },
      );
    }
  }
  return (de.UnknownNodeError = g), de;
}
var yn = {},
  Wl;
function Zn() {
  if (Wl) return yn;
  (Wl = 1),
    Object.defineProperty(yn, "__esModule", { value: !0 }),
    (yn.containsNodeError = i),
    (yn.getNodeError = s);
  const e = oe(),
    t = Ut(),
    n = Qe(),
    r = br();
  function i(o) {
    return (
      o instanceof r.TransactionRejectedRpcError ||
      o instanceof r.InvalidInputRpcError ||
      (o instanceof n.RpcRequestError &&
        o.code === t.ExecutionRevertedError.code)
    );
  }
  function s(o, a) {
    const u = (o.details || "").toLowerCase(),
      f =
        o instanceof e.BaseError
          ? o.walk(
              (c) =>
                (c == null ? void 0 : c.code) === t.ExecutionRevertedError.code,
            )
          : o;
    return f instanceof e.BaseError
      ? new t.ExecutionRevertedError({ cause: o, message: f.details })
      : t.ExecutionRevertedError.nodeMessage.test(u)
        ? new t.ExecutionRevertedError({ cause: o, message: o.details })
        : t.FeeCapTooHighError.nodeMessage.test(u)
          ? new t.FeeCapTooHighError({
              cause: o,
              maxFeePerGas: a == null ? void 0 : a.maxFeePerGas,
            })
          : t.FeeCapTooLowError.nodeMessage.test(u)
            ? new t.FeeCapTooLowError({
                cause: o,
                maxFeePerGas: a == null ? void 0 : a.maxFeePerGas,
              })
            : t.NonceTooHighError.nodeMessage.test(u)
              ? new t.NonceTooHighError({
                  cause: o,
                  nonce: a == null ? void 0 : a.nonce,
                })
              : t.NonceTooLowError.nodeMessage.test(u)
                ? new t.NonceTooLowError({
                    cause: o,
                    nonce: a == null ? void 0 : a.nonce,
                  })
                : t.NonceMaxValueError.nodeMessage.test(u)
                  ? new t.NonceMaxValueError({
                      cause: o,
                      nonce: a == null ? void 0 : a.nonce,
                    })
                  : t.InsufficientFundsError.nodeMessage.test(u)
                    ? new t.InsufficientFundsError({ cause: o })
                    : t.IntrinsicGasTooHighError.nodeMessage.test(u)
                      ? new t.IntrinsicGasTooHighError({
                          cause: o,
                          gas: a == null ? void 0 : a.gas,
                        })
                      : t.IntrinsicGasTooLowError.nodeMessage.test(u)
                        ? new t.IntrinsicGasTooLowError({
                            cause: o,
                            gas: a == null ? void 0 : a.gas,
                          })
                        : t.TransactionTypeNotSupportedError.nodeMessage.test(u)
                          ? new t.TransactionTypeNotSupportedError({ cause: o })
                          : t.TipAboveFeeCapError.nodeMessage.test(u)
                            ? new t.TipAboveFeeCapError({
                                cause: o,
                                maxFeePerGas:
                                  a == null ? void 0 : a.maxFeePerGas,
                                maxPriorityFeePerGas:
                                  a == null ? void 0 : a.maxPriorityFeePerGas,
                              })
                            : new t.UnknownNodeError({ cause: o });
  }
  return yn;
}
var Kl;
function Xg() {
  if (Kl) return ri;
  (Kl = 1),
    Object.defineProperty(ri, "__esModule", { value: !0 }),
    (ri.getEstimateGasError = r);
  const e = Yg(),
    t = Ut(),
    n = Zn();
  function r(i, { docsPath: s, ...o }) {
    const a = (() => {
      const u = (0, n.getNodeError)(i, o);
      return u instanceof t.UnknownNodeError ? i : u;
    })();
    return new e.EstimateGasExecutionError(a, { docsPath: s, ...o });
  }
  return ri;
}
var ni = {},
  Zl;
function Fr() {
  if (Zl) return ni;
  (Zl = 1),
    Object.defineProperty(ni, "__esModule", { value: !0 }),
    (ni.extract = e);
  function e(t, { format: n }) {
    if (!n) return {};
    const r = {};
    function i(o) {
      const a = Object.keys(o);
      for (const u of a)
        u in t && (r[u] = t[u]),
          o[u] && typeof o[u] == "object" && !Array.isArray(o[u]) && i(o[u]);
    }
    const s = n(t || {});
    return i(s), r;
  }
  return ni;
}
var wc = {},
  oi = {},
  Jl;
function Jn() {
  if (Jl) return oi;
  (Jl = 1),
    Object.defineProperty(oi, "__esModule", { value: !0 }),
    (oi.defineFormatter = e);
  function e(t, n) {
    return ({ exclude: r, format: i }) => ({
      exclude: r,
      format: (s) => {
        const o = n(s);
        if (r) for (const a of r) delete o[a];
        return { ...o, ...i(s) };
      },
      type: t,
    });
  }
  return oi;
}
var Yl;
function Tt() {
  return (
    Yl ||
      ((Yl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.defineTransactionRequest = e.rpcTransactionType = void 0),
          (e.formatTransactionRequest = r);
        const t = Q(),
          n = Jn();
        e.rpcTransactionType = {
          legacy: "0x0",
          eip2930: "0x1",
          eip1559: "0x2",
          eip4844: "0x3",
          eip7702: "0x4",
        };
        function r(s) {
          const o = {};
          return (
            typeof s.authorizationList < "u" &&
              (o.authorizationList = i(s.authorizationList)),
            typeof s.accessList < "u" && (o.accessList = s.accessList),
            typeof s.blobVersionedHashes < "u" &&
              (o.blobVersionedHashes = s.blobVersionedHashes),
            typeof s.blobs < "u" &&
              (typeof s.blobs[0] != "string"
                ? (o.blobs = s.blobs.map((a) => (0, t.bytesToHex)(a)))
                : (o.blobs = s.blobs)),
            typeof s.data < "u" && (o.data = s.data),
            typeof s.from < "u" && (o.from = s.from),
            typeof s.gas < "u" && (o.gas = (0, t.numberToHex)(s.gas)),
            typeof s.gasPrice < "u" &&
              (o.gasPrice = (0, t.numberToHex)(s.gasPrice)),
            typeof s.maxFeePerBlobGas < "u" &&
              (o.maxFeePerBlobGas = (0, t.numberToHex)(s.maxFeePerBlobGas)),
            typeof s.maxFeePerGas < "u" &&
              (o.maxFeePerGas = (0, t.numberToHex)(s.maxFeePerGas)),
            typeof s.maxPriorityFeePerGas < "u" &&
              (o.maxPriorityFeePerGas = (0, t.numberToHex)(
                s.maxPriorityFeePerGas,
              )),
            typeof s.nonce < "u" && (o.nonce = (0, t.numberToHex)(s.nonce)),
            typeof s.to < "u" && (o.to = s.to),
            typeof s.type < "u" && (o.type = e.rpcTransactionType[s.type]),
            typeof s.value < "u" && (o.value = (0, t.numberToHex)(s.value)),
            o
          );
        }
        e.defineTransactionRequest = (0, n.defineFormatter)(
          "transactionRequest",
          r,
        );
        function i(s) {
          return s.map((o) => ({
            address: o.contractAddress,
            r: o.r,
            s: o.s,
            chainId: (0, t.numberToHex)(o.chainId),
            nonce: (0, t.numberToHex)(o.nonce),
            ...(typeof o.yParity < "u"
              ? { yParity: (0, t.numberToHex)(o.yParity) }
              : {}),
            ...(typeof o.v < "u" && typeof o.yParity > "u"
              ? { v: (0, t.numberToHex)(o.v) }
              : {}),
          }));
        }
      })(wc)),
    wc
  );
}
var Tr = {},
  Xl;
function Xc() {
  if (Xl) return Tr;
  (Xl = 1),
    Object.defineProperty(Tr, "__esModule", { value: !0 }),
    (Tr.serializeStateMapping = s),
    (Tr.serializeAccountStateOverride = o),
    (Tr.serializeStateOverride = a);
  const e = Ze(),
    t = ju(),
    n = Kc(),
    r = Fe(),
    i = Q();
  function s(u) {
    if (!(!u || u.length === 0))
      return u.reduce((f, { slot: c, value: d }) => {
        if (c.length !== 66)
          throw new t.InvalidBytesLengthError({
            size: c.length,
            targetSize: 66,
            type: "hex",
          });
        if (d.length !== 66)
          throw new t.InvalidBytesLengthError({
            size: d.length,
            targetSize: 66,
            type: "hex",
          });
        return (f[c] = d), f;
      }, {});
  }
  function o(u) {
    const { balance: f, nonce: c, state: d, stateDiff: l, code: g } = u,
      h = {};
    if (
      (g !== void 0 && (h.code = g),
      f !== void 0 && (h.balance = (0, i.numberToHex)(f)),
      c !== void 0 && (h.nonce = (0, i.numberToHex)(c)),
      d !== void 0 && (h.state = s(d)),
      l !== void 0)
    ) {
      if (h.state) throw new n.StateAssignmentConflictError();
      h.stateDiff = s(l);
    }
    return h;
  }
  function a(u) {
    if (!u) return;
    const f = {};
    for (const { address: c, ...d } of u) {
      if (!(0, r.isAddress)(c, { strict: !1 }))
        throw new e.InvalidAddressError({ address: c });
      if (f[c]) throw new n.AccountStateConflictError({ address: c });
      f[c] = o(d);
    }
    return f;
  }
  return Tr;
}
var ii = {},
  N = {},
  Ql;
function Qc() {
  return (
    Ql ||
      ((Ql = 1),
      Object.defineProperty(N, "__esModule", { value: !0 }),
      (N.minInt144 =
        N.minInt136 =
        N.minInt128 =
        N.minInt120 =
        N.minInt112 =
        N.minInt104 =
        N.minInt96 =
        N.minInt88 =
        N.minInt80 =
        N.minInt72 =
        N.minInt64 =
        N.minInt56 =
        N.minInt48 =
        N.minInt40 =
        N.minInt32 =
        N.minInt24 =
        N.minInt16 =
        N.minInt8 =
        N.maxInt256 =
        N.maxInt248 =
        N.maxInt240 =
        N.maxInt232 =
        N.maxInt224 =
        N.maxInt216 =
        N.maxInt208 =
        N.maxInt200 =
        N.maxInt192 =
        N.maxInt184 =
        N.maxInt176 =
        N.maxInt168 =
        N.maxInt160 =
        N.maxInt152 =
        N.maxInt144 =
        N.maxInt136 =
        N.maxInt128 =
        N.maxInt120 =
        N.maxInt112 =
        N.maxInt104 =
        N.maxInt96 =
        N.maxInt88 =
        N.maxInt80 =
        N.maxInt72 =
        N.maxInt64 =
        N.maxInt56 =
        N.maxInt48 =
        N.maxInt40 =
        N.maxInt32 =
        N.maxInt24 =
        N.maxInt16 =
        N.maxInt8 =
          void 0),
      (N.maxUint256 =
        N.maxUint248 =
        N.maxUint240 =
        N.maxUint232 =
        N.maxUint224 =
        N.maxUint216 =
        N.maxUint208 =
        N.maxUint200 =
        N.maxUint192 =
        N.maxUint184 =
        N.maxUint176 =
        N.maxUint168 =
        N.maxUint160 =
        N.maxUint152 =
        N.maxUint144 =
        N.maxUint136 =
        N.maxUint128 =
        N.maxUint120 =
        N.maxUint112 =
        N.maxUint104 =
        N.maxUint96 =
        N.maxUint88 =
        N.maxUint80 =
        N.maxUint72 =
        N.maxUint64 =
        N.maxUint56 =
        N.maxUint48 =
        N.maxUint40 =
        N.maxUint32 =
        N.maxUint24 =
        N.maxUint16 =
        N.maxUint8 =
        N.minInt256 =
        N.minInt248 =
        N.minInt240 =
        N.minInt232 =
        N.minInt224 =
        N.minInt216 =
        N.minInt208 =
        N.minInt200 =
        N.minInt192 =
        N.minInt184 =
        N.minInt176 =
        N.minInt168 =
        N.minInt160 =
        N.minInt152 =
          void 0),
      (N.maxInt8 = 2n ** (8n - 1n) - 1n),
      (N.maxInt16 = 2n ** (16n - 1n) - 1n),
      (N.maxInt24 = 2n ** (24n - 1n) - 1n),
      (N.maxInt32 = 2n ** (32n - 1n) - 1n),
      (N.maxInt40 = 2n ** (40n - 1n) - 1n),
      (N.maxInt48 = 2n ** (48n - 1n) - 1n),
      (N.maxInt56 = 2n ** (56n - 1n) - 1n),
      (N.maxInt64 = 2n ** (64n - 1n) - 1n),
      (N.maxInt72 = 2n ** (72n - 1n) - 1n),
      (N.maxInt80 = 2n ** (80n - 1n) - 1n),
      (N.maxInt88 = 2n ** (88n - 1n) - 1n),
      (N.maxInt96 = 2n ** (96n - 1n) - 1n),
      (N.maxInt104 = 2n ** (104n - 1n) - 1n),
      (N.maxInt112 = 2n ** (112n - 1n) - 1n),
      (N.maxInt120 = 2n ** (120n - 1n) - 1n),
      (N.maxInt128 = 2n ** (128n - 1n) - 1n),
      (N.maxInt136 = 2n ** (136n - 1n) - 1n),
      (N.maxInt144 = 2n ** (144n - 1n) - 1n),
      (N.maxInt152 = 2n ** (152n - 1n) - 1n),
      (N.maxInt160 = 2n ** (160n - 1n) - 1n),
      (N.maxInt168 = 2n ** (168n - 1n) - 1n),
      (N.maxInt176 = 2n ** (176n - 1n) - 1n),
      (N.maxInt184 = 2n ** (184n - 1n) - 1n),
      (N.maxInt192 = 2n ** (192n - 1n) - 1n),
      (N.maxInt200 = 2n ** (200n - 1n) - 1n),
      (N.maxInt208 = 2n ** (208n - 1n) - 1n),
      (N.maxInt216 = 2n ** (216n - 1n) - 1n),
      (N.maxInt224 = 2n ** (224n - 1n) - 1n),
      (N.maxInt232 = 2n ** (232n - 1n) - 1n),
      (N.maxInt240 = 2n ** (240n - 1n) - 1n),
      (N.maxInt248 = 2n ** (248n - 1n) - 1n),
      (N.maxInt256 = 2n ** (256n - 1n) - 1n),
      (N.minInt8 = -(2n ** (8n - 1n))),
      (N.minInt16 = -(2n ** (16n - 1n))),
      (N.minInt24 = -(2n ** (24n - 1n))),
      (N.minInt32 = -(2n ** (32n - 1n))),
      (N.minInt40 = -(2n ** (40n - 1n))),
      (N.minInt48 = -(2n ** (48n - 1n))),
      (N.minInt56 = -(2n ** (56n - 1n))),
      (N.minInt64 = -(2n ** (64n - 1n))),
      (N.minInt72 = -(2n ** (72n - 1n))),
      (N.minInt80 = -(2n ** (80n - 1n))),
      (N.minInt88 = -(2n ** (88n - 1n))),
      (N.minInt96 = -(2n ** (96n - 1n))),
      (N.minInt104 = -(2n ** (104n - 1n))),
      (N.minInt112 = -(2n ** (112n - 1n))),
      (N.minInt120 = -(2n ** (120n - 1n))),
      (N.minInt128 = -(2n ** (128n - 1n))),
      (N.minInt136 = -(2n ** (136n - 1n))),
      (N.minInt144 = -(2n ** (144n - 1n))),
      (N.minInt152 = -(2n ** (152n - 1n))),
      (N.minInt160 = -(2n ** (160n - 1n))),
      (N.minInt168 = -(2n ** (168n - 1n))),
      (N.minInt176 = -(2n ** (176n - 1n))),
      (N.minInt184 = -(2n ** (184n - 1n))),
      (N.minInt192 = -(2n ** (192n - 1n))),
      (N.minInt200 = -(2n ** (200n - 1n))),
      (N.minInt208 = -(2n ** (208n - 1n))),
      (N.minInt216 = -(2n ** (216n - 1n))),
      (N.minInt224 = -(2n ** (224n - 1n))),
      (N.minInt232 = -(2n ** (232n - 1n))),
      (N.minInt240 = -(2n ** (240n - 1n))),
      (N.minInt248 = -(2n ** (248n - 1n))),
      (N.minInt256 = -(2n ** (256n - 1n))),
      (N.maxUint8 = 2n ** 8n - 1n),
      (N.maxUint16 = 2n ** 16n - 1n),
      (N.maxUint24 = 2n ** 24n - 1n),
      (N.maxUint32 = 2n ** 32n - 1n),
      (N.maxUint40 = 2n ** 40n - 1n),
      (N.maxUint48 = 2n ** 48n - 1n),
      (N.maxUint56 = 2n ** 56n - 1n),
      (N.maxUint64 = 2n ** 64n - 1n),
      (N.maxUint72 = 2n ** 72n - 1n),
      (N.maxUint80 = 2n ** 80n - 1n),
      (N.maxUint88 = 2n ** 88n - 1n),
      (N.maxUint96 = 2n ** 96n - 1n),
      (N.maxUint104 = 2n ** 104n - 1n),
      (N.maxUint112 = 2n ** 112n - 1n),
      (N.maxUint120 = 2n ** 120n - 1n),
      (N.maxUint128 = 2n ** 128n - 1n),
      (N.maxUint136 = 2n ** 136n - 1n),
      (N.maxUint144 = 2n ** 144n - 1n),
      (N.maxUint152 = 2n ** 152n - 1n),
      (N.maxUint160 = 2n ** 160n - 1n),
      (N.maxUint168 = 2n ** 168n - 1n),
      (N.maxUint176 = 2n ** 176n - 1n),
      (N.maxUint184 = 2n ** 184n - 1n),
      (N.maxUint192 = 2n ** 192n - 1n),
      (N.maxUint200 = 2n ** 200n - 1n),
      (N.maxUint208 = 2n ** 208n - 1n),
      (N.maxUint216 = 2n ** 216n - 1n),
      (N.maxUint224 = 2n ** 224n - 1n),
      (N.maxUint232 = 2n ** 232n - 1n),
      (N.maxUint240 = 2n ** 240n - 1n),
      (N.maxUint248 = 2n ** 248n - 1n),
      (N.maxUint256 = 2n ** 256n - 1n)),
    N
  );
}
var em;
function At() {
  if (em) return ii;
  (em = 1),
    Object.defineProperty(ii, "__esModule", { value: !0 }),
    (ii.assertRequest = o);
  const e = Ae(),
    t = Qc(),
    n = Ze(),
    r = Ut(),
    i = He(),
    s = Fe();
  function o(a) {
    const {
        account: u,
        gasPrice: f,
        maxFeePerGas: c,
        maxPriorityFeePerGas: d,
        to: l,
      } = a,
      g = u ? (0, e.parseAccount)(u) : void 0;
    if (g && !(0, s.isAddress)(g.address))
      throw new n.InvalidAddressError({ address: g.address });
    if (l && !(0, s.isAddress)(l))
      throw new n.InvalidAddressError({ address: l });
    if (typeof f < "u" && (typeof c < "u" || typeof d < "u"))
      throw new i.FeeConflictError();
    if (c && c > t.maxUint256)
      throw new r.FeeCapTooHighError({ maxFeePerGas: c });
    if (d && c && d > c)
      throw new r.TipAboveFeeCapError({
        maxFeePerGas: c,
        maxPriorityFeePerGas: d,
      });
  }
  return ii;
}
var Tc = {},
  pn = {},
  gt = {},
  tm;
function Ru() {
  if (tm) return gt;
  (tm = 1),
    Object.defineProperty(gt, "__esModule", { value: !0 }),
    (gt.MaxFeePerGasTooLowError =
      gt.Eip1559FeesNotSupportedError =
      gt.BaseFeeScalarError =
        void 0);
  const e = mr(),
    t = oe();
  class n extends t.BaseError {
    constructor() {
      super("`baseFeeMultiplier` must be greater than 1.", {
        name: "BaseFeeScalarError",
      });
    }
  }
  gt.BaseFeeScalarError = n;
  class r extends t.BaseError {
    constructor() {
      super("Chain does not support EIP-1559 fees.", {
        name: "Eip1559FeesNotSupportedError",
      });
    }
  }
  gt.Eip1559FeesNotSupportedError = r;
  class i extends t.BaseError {
    constructor({ maxPriorityFeePerGas: o }) {
      super(
        `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0, e.formatGwei)(o)} gwei).`,
        { name: "MaxFeePerGasTooLowError" },
      );
    }
  }
  return (gt.MaxFeePerGasTooLowError = i), gt;
}
var _n = {},
  ai = {},
  vn = {},
  rm;
function ed() {
  if (rm) return vn;
  (rm = 1),
    Object.defineProperty(vn, "__esModule", { value: !0 }),
    (vn.BlockNotFoundError = void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor({ blockHash: r, blockNumber: i }) {
      let s = "Block";
      r && (s = `Block at hash "${r}"`),
        i && (s = `Block at number "${i}"`),
        super(`${s} could not be found.`, { name: "BlockNotFoundError" });
    }
  }
  return (vn.BlockNotFoundError = t), vn;
}
var Ar = {},
  Ac = {},
  nm;
function Yn() {
  return (
    nm ||
      ((nm = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.defineTransaction = e.transactionType = void 0),
          (e.formatTransaction = r);
        const t = Pe(),
          n = Jn();
        e.transactionType = {
          "0x0": "legacy",
          "0x1": "eip2930",
          "0x2": "eip1559",
          "0x3": "eip4844",
          "0x4": "eip7702",
        };
        function r(s) {
          const o = {
            ...s,
            blockHash: s.blockHash ? s.blockHash : null,
            blockNumber: s.blockNumber ? BigInt(s.blockNumber) : null,
            chainId: s.chainId ? (0, t.hexToNumber)(s.chainId) : void 0,
            gas: s.gas ? BigInt(s.gas) : void 0,
            gasPrice: s.gasPrice ? BigInt(s.gasPrice) : void 0,
            maxFeePerBlobGas: s.maxFeePerBlobGas
              ? BigInt(s.maxFeePerBlobGas)
              : void 0,
            maxFeePerGas: s.maxFeePerGas ? BigInt(s.maxFeePerGas) : void 0,
            maxPriorityFeePerGas: s.maxPriorityFeePerGas
              ? BigInt(s.maxPriorityFeePerGas)
              : void 0,
            nonce: s.nonce ? (0, t.hexToNumber)(s.nonce) : void 0,
            to: s.to ? s.to : null,
            transactionIndex: s.transactionIndex
              ? Number(s.transactionIndex)
              : null,
            type: s.type ? e.transactionType[s.type] : void 0,
            typeHex: s.type ? s.type : void 0,
            value: s.value ? BigInt(s.value) : void 0,
            v: s.v ? BigInt(s.v) : void 0,
          };
          return (
            s.authorizationList &&
              (o.authorizationList = i(s.authorizationList)),
            (o.yParity = (() => {
              if (s.yParity) return Number(s.yParity);
              if (typeof o.v == "bigint") {
                if (o.v === 0n || o.v === 27n) return 0;
                if (o.v === 1n || o.v === 28n) return 1;
                if (o.v >= 35n) return o.v % 2n === 0n ? 1 : 0;
              }
            })()),
            o.type === "legacy" &&
              (delete o.accessList,
              delete o.maxFeePerBlobGas,
              delete o.maxFeePerGas,
              delete o.maxPriorityFeePerGas,
              delete o.yParity),
            o.type === "eip2930" &&
              (delete o.maxFeePerBlobGas,
              delete o.maxFeePerGas,
              delete o.maxPriorityFeePerGas),
            o.type === "eip1559" && delete o.maxFeePerBlobGas,
            o
          );
        }
        e.defineTransaction = (0, n.defineFormatter)("transaction", r);
        function i(s) {
          return s.map((o) => ({
            contractAddress: o.address,
            chainId: Number(o.chainId),
            nonce: Number(o.nonce),
            r: o.r,
            s: o.s,
            yParity: Number(o.yParity),
          }));
        }
      })(Ac)),
    Ac
  );
}
var om;
function Ou() {
  if (om) return Ar;
  (om = 1),
    Object.defineProperty(Ar, "__esModule", { value: !0 }),
    (Ar.defineBlock = void 0),
    (Ar.formatBlock = n);
  const e = Jn(),
    t = Yn();
  function n(r) {
    const i = (r.transactions ?? []).map((s) =>
      typeof s == "string" ? s : (0, t.formatTransaction)(s),
    );
    return {
      ...r,
      baseFeePerGas: r.baseFeePerGas ? BigInt(r.baseFeePerGas) : null,
      blobGasUsed: r.blobGasUsed ? BigInt(r.blobGasUsed) : void 0,
      difficulty: r.difficulty ? BigInt(r.difficulty) : void 0,
      excessBlobGas: r.excessBlobGas ? BigInt(r.excessBlobGas) : void 0,
      gasLimit: r.gasLimit ? BigInt(r.gasLimit) : void 0,
      gasUsed: r.gasUsed ? BigInt(r.gasUsed) : void 0,
      hash: r.hash ? r.hash : null,
      logsBloom: r.logsBloom ? r.logsBloom : null,
      nonce: r.nonce ? r.nonce : null,
      number: r.number ? BigInt(r.number) : null,
      size: r.size ? BigInt(r.size) : void 0,
      timestamp: r.timestamp ? BigInt(r.timestamp) : void 0,
      transactions: i,
      totalDifficulty: r.totalDifficulty ? BigInt(r.totalDifficulty) : null,
    };
  }
  return (Ar.defineBlock = (0, e.defineFormatter)("block", n)), Ar;
}
var im;
function Hr() {
  if (im) return ai;
  (im = 1),
    Object.defineProperty(ai, "__esModule", { value: !0 }),
    (ai.getBlock = r);
  const e = ed(),
    t = Q(),
    n = Ou();
  async function r(
    i,
    { blockHash: s, blockNumber: o, blockTag: a, includeTransactions: u } = {},
  ) {
    var h, b, v;
    const f = a ?? "latest",
      c = u ?? !1,
      d = o !== void 0 ? (0, t.numberToHex)(o) : void 0;
    let l = null;
    if (
      (s
        ? (l = await i.request(
            { method: "eth_getBlockByHash", params: [s, c] },
            { dedupe: !0 },
          ))
        : (l = await i.request(
            { method: "eth_getBlockByNumber", params: [d || f, c] },
            { dedupe: !!d },
          )),
      !l)
    )
      throw new e.BlockNotFoundError({ blockHash: s, blockNumber: o });
    return (
      ((v =
        (b = (h = i.chain) == null ? void 0 : h.formatters) == null
          ? void 0
          : b.block) == null
        ? void 0
        : v.format) || n.formatBlock
    )(l);
  }
  return ai;
}
var si = {},
  am;
function td() {
  if (am) return si;
  (am = 1),
    Object.defineProperty(si, "__esModule", { value: !0 }),
    (si.getGasPrice = e);
  async function e(t) {
    const n = await t.request({ method: "eth_gasPrice" });
    return BigInt(n);
  }
  return si;
}
var sm;
function Qg() {
  if (sm) return _n;
  (sm = 1),
    Object.defineProperty(_n, "__esModule", { value: !0 }),
    (_n.estimateMaxPriorityFeePerGas = s),
    (_n.internal_estimateMaxPriorityFeePerGas = o);
  const e = Ru(),
    t = Pe(),
    n = fe(),
    r = Hr(),
    i = td();
  async function s(a, u) {
    return o(a, u);
  }
  async function o(a, u) {
    var l, g;
    const { block: f, chain: c = a.chain, request: d } = u || {};
    try {
      const h =
        ((l = c == null ? void 0 : c.fees) == null
          ? void 0
          : l.maxPriorityFeePerGas) ??
        ((g = c == null ? void 0 : c.fees) == null
          ? void 0
          : g.defaultPriorityFee);
      if (typeof h == "function") {
        const v = f || (await (0, n.getAction)(a, r.getBlock, "getBlock")({})),
          _ = await h({ block: v, client: a, request: d });
        if (_ === null) throw new Error();
        return _;
      }
      if (typeof h < "u") return h;
      const b = await a.request({ method: "eth_maxPriorityFeePerGas" });
      return (0, t.hexToBigInt)(b);
    } catch {
      const [h, b] = await Promise.all([
        f
          ? Promise.resolve(f)
          : (0, n.getAction)(a, r.getBlock, "getBlock")({}),
        (0, n.getAction)(a, i.getGasPrice, "getGasPrice")({}),
      ]);
      if (typeof h.baseFeePerGas != "bigint")
        throw new e.Eip1559FeesNotSupportedError();
      const v = b - h.baseFeePerGas;
      return v < 0n ? 0n : v;
    }
  }
  return _n;
}
var um;
function ey() {
  if (um) return pn;
  (um = 1),
    Object.defineProperty(pn, "__esModule", { value: !0 }),
    (pn.estimateFeesPerGas = s),
    (pn.internal_estimateFeesPerGas = o);
  const e = Ru(),
    t = fe(),
    n = Qg(),
    r = Hr(),
    i = td();
  async function s(a, u) {
    return o(a, u);
  }
  async function o(a, u) {
    var m, p;
    const {
        block: f,
        chain: c = a.chain,
        request: d,
        type: l = "eip1559",
      } = u || {},
      g = await (async () => {
        var y, j;
        return typeof ((y = c == null ? void 0 : c.fees) == null
          ? void 0
          : y.baseFeeMultiplier) == "function"
          ? c.fees.baseFeeMultiplier({ block: f, client: a, request: d })
          : (((j = c == null ? void 0 : c.fees) == null
              ? void 0
              : j.baseFeeMultiplier) ?? 1.2);
      })();
    if (g < 1) throw new e.BaseFeeScalarError();
    const b =
        10 **
        (((m = g.toString().split(".")[1]) == null ? void 0 : m.length) ?? 0),
      v = (y) => (y * BigInt(Math.ceil(g * b))) / BigInt(b),
      _ = f || (await (0, t.getAction)(a, r.getBlock, "getBlock")({}));
    if (
      typeof ((p = c == null ? void 0 : c.fees) == null
        ? void 0
        : p.estimateFeesPerGas) == "function"
    ) {
      const y = await c.fees.estimateFeesPerGas({
        block: f,
        client: a,
        multiply: v,
        request: d,
        type: l,
      });
      if (y !== null) return y;
    }
    if (l === "eip1559") {
      if (typeof _.baseFeePerGas != "bigint")
        throw new e.Eip1559FeesNotSupportedError();
      const y =
          typeof (d == null ? void 0 : d.maxPriorityFeePerGas) == "bigint"
            ? d.maxPriorityFeePerGas
            : await (0, n.internal_estimateMaxPriorityFeePerGas)(a, {
                block: _,
                chain: c,
                request: d,
              }),
        j = v(_.baseFeePerGas);
      return {
        maxFeePerGas: (d == null ? void 0 : d.maxFeePerGas) ?? j + y,
        maxPriorityFeePerGas: y,
      };
    }
    return {
      gasPrice:
        (d == null ? void 0 : d.gasPrice) ??
        v(await (0, t.getAction)(a, i.getGasPrice, "getGasPrice")({})),
    };
  }
  return pn;
}
var ui = {},
  cm;
function rd() {
  if (cm) return ui;
  (cm = 1),
    Object.defineProperty(ui, "__esModule", { value: !0 }),
    (ui.getTransactionCount = n);
  const e = Pe(),
    t = Q();
  async function n(r, { address: i, blockTag: s = "latest", blockNumber: o }) {
    const a = await r.request(
      {
        method: "eth_getTransactionCount",
        params: [i, o ? (0, t.numberToHex)(o) : s],
      },
      { dedupe: !!o },
    );
    return (0, e.hexToNumber)(a);
  }
  return ui;
}
var ci = {},
  dm;
function Bu() {
  if (dm) return ci;
  (dm = 1),
    Object.defineProperty(ci, "__esModule", { value: !0 }),
    (ci.blobsToCommitments = n);
  const e = le(),
    t = Q();
  function n(r) {
    const { kzg: i } = r,
      s = r.to ?? (typeof r.blobs[0] == "string" ? "hex" : "bytes"),
      o =
        typeof r.blobs[0] == "string"
          ? r.blobs.map((u) => (0, e.hexToBytes)(u))
          : r.blobs,
      a = [];
    for (const u of o) a.push(Uint8Array.from(i.blobToKzgCommitment(u)));
    return s === "bytes" ? a : a.map((u) => (0, t.bytesToHex)(u));
  }
  return ci;
}
var di = {},
  fm;
function Cu() {
  if (fm) return di;
  (fm = 1),
    Object.defineProperty(di, "__esModule", { value: !0 }),
    (di.blobsToProofs = n);
  const e = le(),
    t = Q();
  function n(r) {
    const { kzg: i } = r,
      s = r.to ?? (typeof r.blobs[0] == "string" ? "hex" : "bytes"),
      o =
        typeof r.blobs[0] == "string"
          ? r.blobs.map((f) => (0, e.hexToBytes)(f))
          : r.blobs,
      a =
        typeof r.commitments[0] == "string"
          ? r.commitments.map((f) => (0, e.hexToBytes)(f))
          : r.commitments,
      u = [];
    for (let f = 0; f < o.length; f++) {
      const c = o[f],
        d = a[f];
      u.push(Uint8Array.from(i.computeBlobKzgProof(c, d)));
    }
    return s === "bytes" ? u : u.map((f) => (0, t.bytesToHex)(f));
  }
  return di;
}
var fi = {},
  li = {},
  mi = {},
  yt = {},
  pt = {},
  lm;
function ty() {
  if (lm) return pt;
  (lm = 1),
    Object.defineProperty(pt, "__esModule", { value: !0 }),
    (pt.HashMD = pt.Maj = pt.Chi = void 0);
  const e = Zp(),
    t = Nc();
  function n(o, a, u, f) {
    if (typeof o.setBigUint64 == "function") return o.setBigUint64(a, u, f);
    const c = BigInt(32),
      d = BigInt(4294967295),
      l = Number((u >> c) & d),
      g = Number(u & d),
      h = f ? 4 : 0,
      b = f ? 0 : 4;
    o.setUint32(a + h, l, f), o.setUint32(a + b, g, f);
  }
  const r = (o, a, u) => (o & a) ^ (~o & u);
  pt.Chi = r;
  const i = (o, a, u) => (o & a) ^ (o & u) ^ (a & u);
  pt.Maj = i;
  class s extends t.Hash {
    constructor(a, u, f, c) {
      super(),
        (this.blockLen = a),
        (this.outputLen = u),
        (this.padOffset = f),
        (this.isLE = c),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.buffer = new Uint8Array(a)),
        (this.view = (0, t.createView)(this.buffer));
    }
    update(a) {
      (0, e.aexists)(this);
      const { view: u, buffer: f, blockLen: c } = this;
      a = (0, t.toBytes)(a);
      const d = a.length;
      for (let l = 0; l < d; ) {
        const g = Math.min(c - this.pos, d - l);
        if (g === c) {
          const h = (0, t.createView)(a);
          for (; c <= d - l; l += c) this.process(h, l);
          continue;
        }
        f.set(a.subarray(l, l + g), this.pos),
          (this.pos += g),
          (l += g),
          this.pos === c && (this.process(u, 0), (this.pos = 0));
      }
      return (this.length += a.length), this.roundClean(), this;
    }
    digestInto(a) {
      (0, e.aexists)(this), (0, e.aoutput)(a, this), (this.finished = !0);
      const { buffer: u, view: f, blockLen: c, isLE: d } = this;
      let { pos: l } = this;
      (u[l++] = 128),
        this.buffer.subarray(l).fill(0),
        this.padOffset > c - l && (this.process(f, 0), (l = 0));
      for (let _ = l; _ < c; _++) u[_] = 0;
      n(f, c - 8, BigInt(this.length * 8), d), this.process(f, 0);
      const g = (0, t.createView)(a),
        h = this.outputLen;
      if (h % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const b = h / 4,
        v = this.get();
      if (b > v.length) throw new Error("_sha2: outputLen bigger than state");
      for (let _ = 0; _ < b; _++) g.setUint32(4 * _, v[_], d);
    }
    digest() {
      const { buffer: a, outputLen: u } = this;
      this.digestInto(a);
      const f = a.slice(0, u);
      return this.destroy(), f;
    }
    _cloneInto(a) {
      a || (a = new this.constructor()), a.set(...this.get());
      const {
        blockLen: u,
        buffer: f,
        length: c,
        finished: d,
        destroyed: l,
        pos: g,
      } = this;
      return (
        (a.length = c),
        (a.pos = g),
        (a.finished = d),
        (a.destroyed = l),
        c % u && a.buffer.set(f),
        a
      );
    }
  }
  return (pt.HashMD = s), pt;
}
var mm;
function I1() {
  if (mm) return yt;
  (mm = 1),
    Object.defineProperty(yt, "__esModule", { value: !0 }),
    (yt.sha224 = yt.sha256 = yt.SHA256 = void 0);
  const e = ty(),
    t = Nc(),
    n = new Uint32Array([
      1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
      2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
      1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
      264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
      2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
      113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
      1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
      3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
      430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
      1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
      2428436474, 2756734187, 3204031479, 3329325298,
    ]),
    r = new Uint32Array([
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
      528734635, 1541459225,
    ]),
    i = new Uint32Array(64);
  class s extends e.HashMD {
    constructor() {
      super(64, 32, 8, !1),
        (this.A = r[0] | 0),
        (this.B = r[1] | 0),
        (this.C = r[2] | 0),
        (this.D = r[3] | 0),
        (this.E = r[4] | 0),
        (this.F = r[5] | 0),
        (this.G = r[6] | 0),
        (this.H = r[7] | 0);
    }
    get() {
      const { A: u, B: f, C: c, D: d, E: l, F: g, G: h, H: b } = this;
      return [u, f, c, d, l, g, h, b];
    }
    set(u, f, c, d, l, g, h, b) {
      (this.A = u | 0),
        (this.B = f | 0),
        (this.C = c | 0),
        (this.D = d | 0),
        (this.E = l | 0),
        (this.F = g | 0),
        (this.G = h | 0),
        (this.H = b | 0);
    }
    process(u, f) {
      for (let E = 0; E < 16; E++, f += 4) i[E] = u.getUint32(f, !1);
      for (let E = 16; E < 64; E++) {
        const m = i[E - 15],
          p = i[E - 2],
          y = (0, t.rotr)(m, 7) ^ (0, t.rotr)(m, 18) ^ (m >>> 3),
          j = (0, t.rotr)(p, 17) ^ (0, t.rotr)(p, 19) ^ (p >>> 10);
        i[E] = (j + i[E - 7] + y + i[E - 16]) | 0;
      }
      let { A: c, B: d, C: l, D: g, E: h, F: b, G: v, H: _ } = this;
      for (let E = 0; E < 64; E++) {
        const m = (0, t.rotr)(h, 6) ^ (0, t.rotr)(h, 11) ^ (0, t.rotr)(h, 25),
          p = (_ + m + (0, e.Chi)(h, b, v) + n[E] + i[E]) | 0,
          j =
            (((0, t.rotr)(c, 2) ^ (0, t.rotr)(c, 13) ^ (0, t.rotr)(c, 22)) +
              (0, e.Maj)(c, d, l)) |
            0;
        (_ = v),
          (v = b),
          (b = h),
          (h = (g + p) | 0),
          (g = l),
          (l = d),
          (d = c),
          (c = (p + j) | 0);
      }
      (c = (c + this.A) | 0),
        (d = (d + this.B) | 0),
        (l = (l + this.C) | 0),
        (g = (g + this.D) | 0),
        (h = (h + this.E) | 0),
        (b = (b + this.F) | 0),
        (v = (v + this.G) | 0),
        (_ = (_ + this.H) | 0),
        this.set(c, d, l, g, h, b, v, _);
    }
    roundClean() {
      i.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  }
  yt.SHA256 = s;
  class o extends s {
    constructor() {
      super(),
        (this.A = -1056596264),
        (this.B = 914150663),
        (this.C = 812702999),
        (this.D = -150054599),
        (this.E = -4191439),
        (this.F = 1750603025),
        (this.G = 1694076839),
        (this.H = -1090891868),
        (this.outputLen = 28);
    }
  }
  return (
    (yt.sha256 = (0, t.wrapConstructor)(() => new s())),
    (yt.sha224 = (0, t.wrapConstructor)(() => new o())),
    yt
  );
}
var bm;
function nd() {
  if (bm) return mi;
  (bm = 1),
    Object.defineProperty(mi, "__esModule", { value: !0 }),
    (mi.sha256 = i);
  const e = I1(),
    t = Re(),
    n = le(),
    r = Q();
  function i(s, o) {
    const a = o || "hex",
      u = (0, e.sha256)(
        (0, t.isHex)(s, { strict: !1 }) ? (0, n.toBytes)(s) : s,
      );
    return a === "bytes" ? u : (0, r.toHex)(u);
  }
  return mi;
}
var hm;
function od() {
  if (hm) return li;
  (hm = 1),
    Object.defineProperty(li, "__esModule", { value: !0 }),
    (li.commitmentToVersionedHash = n);
  const e = Q(),
    t = nd();
  function n(r) {
    const { commitment: i, version: s = 1 } = r,
      o = r.to ?? (typeof i == "string" ? "hex" : "bytes"),
      a = (0, t.sha256)(i, "bytes");
    return a.set([s], 0), o === "bytes" ? a : (0, e.bytesToHex)(a);
  }
  return li;
}
var gm;
function id() {
  if (gm) return fi;
  (gm = 1),
    Object.defineProperty(fi, "__esModule", { value: !0 }),
    (fi.commitmentsToVersionedHashes = t);
  const e = od();
  function t(n) {
    const { commitments: r, version: i } = n,
      s = n.to ?? (typeof r[0] == "string" ? "hex" : "bytes"),
      o = [];
    for (const a of r)
      o.push(
        (0, e.commitmentToVersionedHash)({ commitment: a, to: s, version: i }),
      );
    return o;
  }
  return fi;
}
var bi = {},
  hi = {},
  Sc = {},
  ym;
function R1() {
  return (
    ym ||
      ((ym = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.maxBytesPerTransaction =
            e.bytesPerBlob =
            e.fieldElementsPerBlob =
            e.bytesPerFieldElement =
              void 0);
        const t = 6;
        (e.bytesPerFieldElement = 32),
          (e.fieldElementsPerBlob = 4096),
          (e.bytesPerBlob = e.bytesPerFieldElement * e.fieldElementsPerBlob),
          (e.maxBytesPerTransaction =
            e.bytesPerBlob * t - 1 - 1 * e.fieldElementsPerBlob * t);
      })(Sc)),
    Sc
  );
}
var Ve = {},
  En = {},
  pm;
function ry() {
  return (
    pm ||
      ((pm = 1),
      Object.defineProperty(En, "__esModule", { value: !0 }),
      (En.versionedHashVersionKzg = void 0),
      (En.versionedHashVersionKzg = 1)),
    En
  );
}
var _m;
function ny() {
  if (_m) return Ve;
  (_m = 1),
    Object.defineProperty(Ve, "__esModule", { value: !0 }),
    (Ve.InvalidVersionedHashVersionError =
      Ve.InvalidVersionedHashSizeError =
      Ve.EmptyBlobError =
      Ve.BlobSizeTooLargeError =
        void 0);
  const e = ry(),
    t = oe();
  class n extends t.BaseError {
    constructor({ maxSize: a, size: u }) {
      super("Blob size is too large.", {
        metaMessages: [`Max: ${a} bytes`, `Given: ${u} bytes`],
        name: "BlobSizeTooLargeError",
      });
    }
  }
  Ve.BlobSizeTooLargeError = n;
  class r extends t.BaseError {
    constructor() {
      super("Blob data must not be empty.", { name: "EmptyBlobError" });
    }
  }
  Ve.EmptyBlobError = r;
  class i extends t.BaseError {
    constructor({ hash: a, size: u }) {
      super(`Versioned hash "${a}" size is invalid.`, {
        metaMessages: ["Expected: 32", `Received: ${u}`],
        name: "InvalidVersionedHashSizeError",
      });
    }
  }
  Ve.InvalidVersionedHashSizeError = i;
  class s extends t.BaseError {
    constructor({ hash: a, version: u }) {
      super(`Versioned hash "${a}" version is invalid.`, {
        metaMessages: [
          `Expected: ${e.versionedHashVersionKzg}`,
          `Received: ${u}`,
        ],
        name: "InvalidVersionedHashVersionError",
      });
    }
  }
  return (Ve.InvalidVersionedHashVersionError = s), Ve;
}
var vm;
function oy() {
  if (vm) return hi;
  (vm = 1),
    Object.defineProperty(hi, "__esModule", { value: !0 }),
    (hi.toBlobs = o);
  const e = R1(),
    t = ny(),
    n = Dn(),
    r = Me(),
    i = le(),
    s = Q();
  function o(a) {
    const u = a.to ?? (typeof a.data == "string" ? "hex" : "bytes"),
      f = typeof a.data == "string" ? (0, i.hexToBytes)(a.data) : a.data,
      c = (0, r.size)(f);
    if (!c) throw new t.EmptyBlobError();
    if (c > e.maxBytesPerTransaction)
      throw new t.BlobSizeTooLargeError({
        maxSize: e.maxBytesPerTransaction,
        size: c,
      });
    const d = [];
    let l = !0,
      g = 0;
    for (; l; ) {
      const h = (0, n.createCursor)(new Uint8Array(e.bytesPerBlob));
      let b = 0;
      for (; b < e.fieldElementsPerBlob; ) {
        const v = f.slice(g, g + (e.bytesPerFieldElement - 1));
        if ((h.pushByte(0), h.pushBytes(v), v.length < 31)) {
          h.pushByte(128), (l = !1);
          break;
        }
        b++, (g += 31);
      }
      d.push(h);
    }
    return u === "bytes"
      ? d.map((h) => h.bytes)
      : d.map((h) => (0, s.bytesToHex)(h.bytes));
  }
  return hi;
}
var Em;
function qu() {
  if (Em) return bi;
  (Em = 1),
    Object.defineProperty(bi, "__esModule", { value: !0 }),
    (bi.toBlobSidecars = r);
  const e = Bu(),
    t = Cu(),
    n = oy();
  function r(i) {
    const { data: s, kzg: o, to: a } = i,
      u = i.blobs ?? (0, n.toBlobs)({ data: s, to: a }),
      f =
        i.commitments ?? (0, e.blobsToCommitments)({ blobs: u, kzg: o, to: a }),
      c =
        i.proofs ??
        (0, t.blobsToProofs)({ blobs: u, commitments: f, kzg: o, to: a }),
      d = [];
    for (let l = 0; l < u.length; l++)
      d.push({ blob: u[l], commitment: f[l], proof: c[l] });
    return d;
  }
  return bi;
}
var gi = {},
  jm;
function xu() {
  if (jm) return gi;
  (jm = 1),
    Object.defineProperty(gi, "__esModule", { value: !0 }),
    (gi.getTransactionType = t);
  const e = He();
  function t(n) {
    if (n.type) return n.type;
    if (typeof n.authorizationList < "u") return "eip7702";
    if (
      typeof n.blobs < "u" ||
      typeof n.blobVersionedHashes < "u" ||
      typeof n.maxFeePerBlobGas < "u" ||
      typeof n.sidecars < "u"
    )
      return "eip4844";
    if (typeof n.maxFeePerGas < "u" || typeof n.maxPriorityFeePerGas < "u")
      return "eip1559";
    if (typeof n.gasPrice < "u")
      return typeof n.accessList < "u" ? "eip2930" : "legacy";
    throw new e.InvalidSerializableTransactionError({ transaction: n });
  }
  return gi;
}
var yi = {},
  Pm;
function Xn() {
  if (Pm) return yi;
  (Pm = 1),
    Object.defineProperty(yi, "__esModule", { value: !0 }),
    (yi.getChainId = t);
  const e = Pe();
  async function t(n) {
    const r = await n.request({ method: "eth_chainId" }, { dedupe: !0 });
    return (0, e.hexToNumber)(r);
  }
  return yi;
}
var wm;
function Mu() {
  return (
    wm ||
      ((wm = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.defaultParameters = void 0),
          (e.prepareTransactionRequest = b);
        const t = Ae(),
          n = ey(),
          r = ad(),
          i = Hr(),
          s = rd(),
          o = Ru(),
          a = Bu(),
          u = Cu(),
          f = id(),
          c = qu(),
          d = fe(),
          l = At(),
          g = xu(),
          h = Xn();
        e.defaultParameters = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ];
        async function b(v, _) {
          const {
              account: E = v.account,
              blobs: m,
              chain: p,
              gas: y,
              kzg: j,
              nonce: P,
              nonceManager: S,
              parameters: w = e.defaultParameters,
              type: q,
            } = _,
            T = E && (0, t.parseAccount)(E),
            B = {
              ..._,
              ...(T ? { from: T == null ? void 0 : T.address } : {}),
            };
          let M;
          async function A() {
            return (
              M ||
              ((M = await (0, d.getAction)(
                v,
                i.getBlock,
                "getBlock",
              )({ blockTag: "latest" })),
              M)
            );
          }
          let x;
          async function $() {
            return (
              x ||
              (p
                ? p.id
                : typeof _.chainId < "u"
                  ? _.chainId
                  : ((x = await (0, d.getAction)(
                      v,
                      h.getChainId,
                      "getChainId",
                    )({})),
                    x))
            );
          }
          if (
            (w.includes("blobVersionedHashes") || w.includes("sidecars")) &&
            m &&
            j
          ) {
            const F = (0, a.blobsToCommitments)({ blobs: m, kzg: j });
            if (w.includes("blobVersionedHashes")) {
              const H = (0, f.commitmentsToVersionedHashes)({
                commitments: F,
                to: "hex",
              });
              B.blobVersionedHashes = H;
            }
            if (w.includes("sidecars")) {
              const H = (0, u.blobsToProofs)({
                  blobs: m,
                  commitments: F,
                  kzg: j,
                }),
                R = (0, c.toBlobSidecars)({
                  blobs: m,
                  commitments: F,
                  proofs: H,
                  to: "hex",
                });
              B.sidecars = R;
            }
          }
          if (
            (w.includes("chainId") && (B.chainId = await $()),
            (w.includes("fees") || w.includes("type")) && typeof q > "u")
          )
            try {
              B.type = (0, g.getTransactionType)(B);
            } catch {
              const F = await A();
              B.type =
                typeof (F == null ? void 0 : F.baseFeePerGas) == "bigint"
                  ? "eip1559"
                  : "legacy";
            }
          if (w.includes("fees"))
            if (B.type !== "legacy" && B.type !== "eip2930") {
              if (
                typeof B.maxFeePerGas > "u" ||
                typeof B.maxPriorityFeePerGas > "u"
              ) {
                const F = await A(),
                  { maxFeePerGas: H, maxPriorityFeePerGas: R } = await (0,
                  n.internal_estimateFeesPerGas)(v, {
                    block: F,
                    chain: p,
                    request: B,
                  });
                if (
                  typeof _.maxPriorityFeePerGas > "u" &&
                  _.maxFeePerGas &&
                  _.maxFeePerGas < R
                )
                  throw new o.MaxFeePerGasTooLowError({
                    maxPriorityFeePerGas: R,
                  });
                (B.maxPriorityFeePerGas = R), (B.maxFeePerGas = H);
              }
            } else {
              if (
                typeof _.maxFeePerGas < "u" ||
                typeof _.maxPriorityFeePerGas < "u"
              )
                throw new o.Eip1559FeesNotSupportedError();
              const F = await A(),
                { gasPrice: H } = await (0, n.internal_estimateFeesPerGas)(v, {
                  block: F,
                  chain: p,
                  request: B,
                  type: "legacy",
                });
              B.gasPrice = H;
            }
          if (
            (w.includes("gas") &&
              typeof y > "u" &&
              (B.gas = await (0, d.getAction)(
                v,
                r.estimateGas,
                "estimateGas",
              )({
                ...B,
                account: T && { address: T.address, type: "json-rpc" },
              })),
            w.includes("nonce") && typeof P > "u" && T)
          )
            if (S) {
              const F = await $();
              B.nonce = await S.consume({
                address: T.address,
                chainId: F,
                client: v,
              });
            } else
              B.nonce = await (0, d.getAction)(
                v,
                s.getTransactionCount,
                "getTransactionCount",
              )({ address: T.address, blockTag: "pending" });
          return (0, l.assertRequest)(B), delete B.parameters, B;
        }
      })(Tc)),
    Tc
  );
}
var pi = {},
  Tm;
function iy() {
  if (Tm) return pi;
  (Tm = 1),
    Object.defineProperty(pi, "__esModule", { value: !0 }),
    (pi.getBalance = t);
  const e = Q();
  async function t(n, { address: r, blockNumber: i, blockTag: s = "latest" }) {
    const o = i ? (0, e.numberToHex)(i) : void 0,
      a = await n.request({ method: "eth_getBalance", params: [r, o || s] });
    return BigInt(a);
  }
  return pi;
}
var Am;
function ad() {
  if (Am) return Jo;
  (Am = 1),
    Object.defineProperty(Jo, "__esModule", { value: !0 }),
    (Jo.estimateGas = d);
  const e = Ae(),
    t = oe(),
    n = Jg(),
    r = Q(),
    i = Xg(),
    s = Fr(),
    o = Tt(),
    a = Xc(),
    u = At(),
    f = Mu(),
    c = iy();
  async function d(l, g) {
    var v, _, E;
    const { account: h = l.account } = g,
      b = h ? (0, e.parseAccount)(h) : void 0;
    try {
      let L = function (G) {
        const { block: Z, request: ee, rpcStateOverride: J } = G;
        return l.request({
          method: "eth_estimateGas",
          params: J ? [ee, Z ?? "latest", J] : Z ? [ee, Z] : [ee],
        });
      };
      const {
          accessList: m,
          authorizationList: p,
          blobs: y,
          blobVersionedHashes: j,
          blockNumber: P,
          blockTag: S,
          data: w,
          gas: q,
          gasPrice: T,
          maxFeePerBlobGas: B,
          maxFeePerGas: M,
          maxPriorityFeePerGas: A,
          nonce: x,
          value: $,
          stateOverride: F,
          ...H
        } = await (0, f.prepareTransactionRequest)(l, {
          ...g,
          parameters:
            (b == null ? void 0 : b.type) === "local"
              ? void 0
              : ["blobVersionedHashes"],
        }),
        O = (P ? (0, r.numberToHex)(P) : void 0) || S,
        I = (0, a.serializeStateOverride)(F),
        C = await (async () => {
          if (H.to) return H.to;
          if (p && p.length > 0)
            return await (0, n.recoverAuthorizationAddress)({
              authorization: p[0],
            }).catch(() => {
              throw new t.BaseError(
                "`to` is required. Could not infer from `authorizationList`",
              );
            });
        })();
      (0, u.assertRequest)(g);
      const k =
          (E =
            (_ = (v = l.chain) == null ? void 0 : v.formatters) == null
              ? void 0
              : _.transactionRequest) == null
            ? void 0
            : E.format,
        U = (k || o.formatTransactionRequest)({
          ...(0, s.extract)(H, { format: k }),
          from: b == null ? void 0 : b.address,
          accessList: m,
          authorizationList: p,
          blobs: y,
          blobVersionedHashes: j,
          data: w,
          gas: q,
          gasPrice: T,
          maxFeePerBlobGas: B,
          maxFeePerGas: M,
          maxPriorityFeePerGas: A,
          nonce: x,
          to: C,
          value: $,
        });
      let V = BigInt(await L({ block: O, request: U, rpcStateOverride: I }));
      if (p) {
        const G = await (0, c.getBalance)(l, { address: U.from }),
          Z = await Promise.all(
            p.map(async (ee) => {
              const { contractAddress: J } = ee,
                ae = await L({
                  block: O,
                  request: {
                    authorizationList: void 0,
                    data: w,
                    from: b == null ? void 0 : b.address,
                    to: J,
                    value: (0, r.numberToHex)(G),
                  },
                  rpcStateOverride: I,
                }).catch(() => 100000n);
              return 2n * BigInt(ae);
            }),
          );
        V += Z.reduce((ee, J) => ee + J, 0n);
      }
      return V;
    } catch (m) {
      throw (0, i.getEstimateGasError)(m, { ...g, account: b, chain: l.chain });
    }
  }
  return Jo;
}
var Sm;
function ay() {
  if (Sm) return ko;
  (Sm = 1),
    Object.defineProperty(ko, "__esModule", { value: !0 }),
    (ko.estimateContractGas = s);
  const e = Ae(),
    t = Xe(),
    n = Lt(),
    r = fe(),
    i = ad();
  async function s(o, a) {
    const {
        abi: u,
        address: f,
        args: c,
        functionName: d,
        dataSuffix: l,
        ...g
      } = a,
      h = (0, t.encodeFunctionData)({ abi: u, args: c, functionName: d });
    try {
      return await (0, r.getAction)(
        o,
        i.estimateGas,
        "estimateGas",
      )({ data: `${h}${l ? l.replace("0x", "") : ""}`, to: f, ...g });
    } catch (b) {
      const v = g.account ? (0, e.parseAccount)(g.account) : void 0;
      throw (0, n.getContractError)(b, {
        abi: u,
        address: f,
        args: c,
        docsPath: "/docs/contract/estimateContractGas",
        functionName: d,
        sender: v == null ? void 0 : v.address,
      });
    }
  }
  return ko;
}
var _i = {},
  vi = {},
  Ei = {},
  ji = {},
  Im;
function St() {
  if (Im) return ji;
  (Im = 1),
    Object.defineProperty(ji, "__esModule", { value: !0 }),
    (ji.isAddressEqual = n);
  const e = Ze(),
    t = Fe();
  function n(r, i) {
    if (!(0, t.isAddress)(r, { strict: !1 }))
      throw new e.InvalidAddressError({ address: r });
    if (!(0, t.isAddress)(i, { strict: !1 }))
      throw new e.InvalidAddressError({ address: i });
    return r.toLowerCase() === i.toLowerCase();
  }
  return ji;
}
var Pi = {},
  Rm;
function Qn() {
  if (Rm) return Pi;
  (Rm = 1),
    Object.defineProperty(Pi, "__esModule", { value: !0 }),
    (Pi.decodeEventLog = a);
  const e = ye(),
    t = Me(),
    n = Mr(),
    r = Vg(),
    i = Nt(),
    s = Pt(),
    o = "/docs/contract/decodeEventLog";
  function a(f) {
    const { abi: c, data: d, strict: l, topics: g } = f,
      h = l ?? !0,
      [b, ...v] = g;
    if (!b) throw new e.AbiEventSignatureEmptyTopicsError({ docsPath: o });
    const _ =
      c.length === 1
        ? c[0]
        : c.find(
            (S) =>
              S.type === "event" &&
              b === (0, n.toEventSelector)((0, s.formatAbiItem)(S)),
          );
    if (!(_ && "name" in _) || _.type !== "event")
      throw new e.AbiEventSignatureNotFoundError(b, { docsPath: o });
    const { name: E, inputs: m } = _,
      p = m == null ? void 0 : m.some((S) => !("name" in S && S.name));
    let y = p ? [] : {};
    const j = m.filter((S) => "indexed" in S && S.indexed);
    for (let S = 0; S < j.length; S++) {
      const w = j[S],
        q = v[S];
      if (!q) throw new e.DecodeLogTopicsMismatch({ abiItem: _, param: w });
      y[p ? S : w.name || S] = u({ param: w, value: q });
    }
    const P = m.filter((S) => !("indexed" in S && S.indexed));
    if (P.length > 0) {
      if (d && d !== "0x")
        try {
          const S = (0, i.decodeAbiParameters)(P, d);
          if (S)
            if (p) y = [...y, ...S];
            else for (let w = 0; w < P.length; w++) y[P[w].name] = S[w];
        } catch (S) {
          if (h)
            throw S instanceof e.AbiDecodingDataSizeTooSmallError ||
              S instanceof r.PositionOutOfBoundsError
              ? new e.DecodeLogDataMismatch({
                  abiItem: _,
                  data: d,
                  params: P,
                  size: (0, t.size)(d),
                })
              : S;
        }
      else if (h)
        throw new e.DecodeLogDataMismatch({
          abiItem: _,
          data: "0x",
          params: P,
          size: 0,
        });
    }
    return { eventName: E, args: Object.values(y).length > 0 ? y : void 0 };
  }
  function u({ param: f, value: c }) {
    return f.type === "string" ||
      f.type === "bytes" ||
      f.type === "tuple" ||
      f.type.match(/^(.*)\[(\d+)?\]$/)
      ? c
      : ((0, i.decodeAbiParameters)([f], c) || [])[0];
  }
  return Pi;
}
var Om;
function eo() {
  if (Om) return Ei;
  (Om = 1),
    Object.defineProperty(Ei, "__esModule", { value: !0 }),
    (Ei.parseEventLogs = o);
  const e = ye(),
    t = St(),
    n = le(),
    r = Oe(),
    i = Mr(),
    s = Qn();
  function o(u) {
    const { abi: f, args: c, logs: d, strict: l = !0 } = u,
      g = (() => {
        if (u.eventName)
          return Array.isArray(u.eventName) ? u.eventName : [u.eventName];
      })();
    return d
      .map((h) => {
        var b;
        try {
          const v = f.find(
            (E) =>
              E.type === "event" && h.topics[0] === (0, i.toEventSelector)(E),
          );
          if (!v) return null;
          const _ = (0, s.decodeEventLog)({ ...h, abi: [v], strict: l });
          return (g && !g.includes(_.eventName)) ||
            !a({ args: _.args, inputs: v.inputs, matchArgs: c })
            ? null
            : { ..._, ...h };
        } catch (v) {
          let _, E;
          if (v instanceof e.AbiEventSignatureNotFoundError) return null;
          if (
            v instanceof e.DecodeLogDataMismatch ||
            v instanceof e.DecodeLogTopicsMismatch
          ) {
            if (l) return null;
            (_ = v.abiItem.name),
              (E =
                (b = v.abiItem.inputs) == null
                  ? void 0
                  : b.some((m) => !("name" in m && m.name)));
          }
          return { ...h, args: E ? [] : {}, eventName: _ };
        }
      })
      .filter(Boolean);
  }
  function a(u) {
    const { args: f, inputs: c, matchArgs: d } = u;
    if (!d) return !0;
    if (!f) return !1;
    function l(g, h, b) {
      try {
        return g.type === "address"
          ? (0, t.isAddressEqual)(h, b)
          : g.type === "string" || g.type === "bytes"
            ? (0, r.keccak256)((0, n.toBytes)(h)) === b
            : h === b;
      } catch {
        return !1;
      }
    }
    return Array.isArray(f) && Array.isArray(d)
      ? d.every((g, h) => {
          if (g == null) return !0;
          const b = c[h];
          return b
            ? (Array.isArray(g) ? g : [g]).some((_) => l(b, _, f[h]))
            : !1;
        })
      : typeof f == "object" &&
          !Array.isArray(f) &&
          typeof d == "object" &&
          !Array.isArray(d)
        ? Object.entries(d).every(([g, h]) => {
            if (h == null) return !0;
            const b = c.find((_) => _.name === g);
            return b
              ? (Array.isArray(h) ? h : [h]).some((_) => l(b, _, f[g]))
              : !1;
          })
        : !1;
  }
  return Ei;
}
var wi = {},
  Bm;
function It() {
  if (Bm) return wi;
  (Bm = 1),
    Object.defineProperty(wi, "__esModule", { value: !0 }),
    (wi.formatLog = e);
  function e(t, { args: n, eventName: r } = {}) {
    return {
      ...t,
      blockHash: t.blockHash ? t.blockHash : null,
      blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
      logIndex: t.logIndex ? Number(t.logIndex) : null,
      transactionHash: t.transactionHash ? t.transactionHash : null,
      transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
      ...(r ? { args: n, eventName: r } : {}),
    };
  }
  return wi;
}
var Cm;
function sd() {
  if (Cm) return vi;
  (Cm = 1),
    Object.defineProperty(vi, "__esModule", { value: !0 }),
    (vi.getLogs = i);
  const e = lr(),
    t = eo(),
    n = Q(),
    r = It();
  async function i(
    s,
    {
      address: o,
      blockHash: a,
      fromBlock: u,
      toBlock: f,
      event: c,
      events: d,
      args: l,
      strict: g,
    } = {},
  ) {
    const h = g ?? !1,
      b = d ?? (c ? [c] : void 0);
    let v = [];
    b &&
      ((v = [
        b.flatMap((p) =>
          (0, e.encodeEventTopics)({
            abi: [p],
            eventName: p.name,
            args: d ? void 0 : l,
          }),
        ),
      ]),
      c && (v = v[0]));
    let _;
    a
      ? (_ = await s.request({
          method: "eth_getLogs",
          params: [{ address: o, topics: v, blockHash: a }],
        }))
      : (_ = await s.request({
          method: "eth_getLogs",
          params: [
            {
              address: o,
              topics: v,
              fromBlock: typeof u == "bigint" ? (0, n.numberToHex)(u) : u,
              toBlock: typeof f == "bigint" ? (0, n.numberToHex)(f) : f,
            },
          ],
        }));
    const E = _.map((m) => (0, r.formatLog)(m));
    return b
      ? (0, t.parseEventLogs)({ abi: b, args: l, logs: E, strict: h })
      : E;
  }
  return vi;
}
var qm;
function ud() {
  if (qm) return _i;
  (qm = 1),
    Object.defineProperty(_i, "__esModule", { value: !0 }),
    (_i.getContractEvents = r);
  const e = wt(),
    t = fe(),
    n = sd();
  async function r(i, s) {
    const {
        abi: o,
        address: a,
        args: u,
        blockHash: f,
        eventName: c,
        fromBlock: d,
        toBlock: l,
        strict: g,
      } = s,
      h = c ? (0, e.getAbiItem)({ abi: o, name: c }) : void 0,
      b = h ? void 0 : o.filter((v) => v.type === "event");
    return (0, t.getAction)(
      i,
      n.getLogs,
      "getLogs",
    )({
      address: a,
      args: u,
      blockHash: f,
      event: h,
      events: b,
      fromBlock: d,
      toBlock: l,
      strict: g,
    });
  }
  return _i;
}
var Ti = {},
  Ai = {},
  xm;
function Rt() {
  if (xm) return Ai;
  (xm = 1),
    Object.defineProperty(Ai, "__esModule", { value: !0 }),
    (Ai.decodeFunctionResult = i);
  const e = ye(),
    t = Nt(),
    n = wt(),
    r = "/docs/contract/decodeFunctionResult";
  function i(s) {
    const { abi: o, args: a, functionName: u, data: f } = s;
    let c = o[0];
    if (u) {
      const l = (0, n.getAbiItem)({ abi: o, args: a, name: u });
      if (!l) throw new e.AbiFunctionNotFoundError(u, { docsPath: r });
      c = l;
    }
    if (c.type !== "function")
      throw new e.AbiFunctionNotFoundError(void 0, { docsPath: r });
    if (!c.outputs)
      throw new e.AbiFunctionOutputsNotFoundError(c.name, { docsPath: r });
    const d = (0, t.decodeAbiParameters)(c.outputs, f);
    if (d && d.length > 1) return d;
    if (d && d.length === 1) return d[0];
  }
  return Ai;
}
var jn = {},
  be = {},
  Mm;
function hr() {
  if (Mm) return be;
  (Mm = 1),
    Object.defineProperty(be, "__esModule", { value: !0 }),
    (be.erc4626Abi =
      be.erc721Abi =
      be.erc20Abi_bytes32 =
      be.erc20Abi =
      be.universalSignatureValidatorAbi =
      be.smartAccountAbi =
      be.addressResolverAbi =
      be.textResolverAbi =
      be.universalResolverReverseAbi =
      be.universalResolverResolveAbi =
      be.multicall3Abi =
        void 0),
    (be.multicall3Abi = [
      {
        inputs: [
          {
            components: [
              { name: "target", type: "address" },
              { name: "allowFailure", type: "bool" },
              { name: "callData", type: "bytes" },
            ],
            name: "calls",
            type: "tuple[]",
          },
        ],
        name: "aggregate3",
        outputs: [
          {
            components: [
              { name: "success", type: "bool" },
              { name: "returnData", type: "bytes" },
            ],
            name: "returnData",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ]);
  const e = [
    { inputs: [], name: "ResolverNotFound", type: "error" },
    { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
    { inputs: [], name: "ResolverNotContract", type: "error" },
    {
      inputs: [{ name: "returnData", type: "bytes" }],
      name: "ResolverError",
      type: "error",
    },
    {
      inputs: [
        {
          components: [
            { name: "status", type: "uint16" },
            { name: "message", type: "string" },
          ],
          name: "errors",
          type: "tuple[]",
        },
      ],
      name: "HttpError",
      type: "error",
    },
  ];
  return (
    (be.universalResolverResolveAbi = [
      ...e,
      {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes" },
          { name: "data", type: "bytes" },
        ],
        outputs: [
          { name: "", type: "bytes" },
          { name: "address", type: "address" },
        ],
      },
      {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes" },
          { name: "data", type: "bytes" },
          { name: "gateways", type: "string[]" },
        ],
        outputs: [
          { name: "", type: "bytes" },
          { name: "address", type: "address" },
        ],
      },
    ]),
    (be.universalResolverReverseAbi = [
      ...e,
      {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [{ type: "bytes", name: "reverseName" }],
        outputs: [
          { type: "string", name: "resolvedName" },
          { type: "address", name: "resolvedAddress" },
          { type: "address", name: "reverseResolver" },
          { type: "address", name: "resolver" },
        ],
      },
      {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [
          { type: "bytes", name: "reverseName" },
          { type: "string[]", name: "gateways" },
        ],
        outputs: [
          { type: "string", name: "resolvedName" },
          { type: "address", name: "resolvedAddress" },
          { type: "address", name: "reverseResolver" },
          { type: "address", name: "resolver" },
        ],
      },
    ]),
    (be.textResolverAbi = [
      {
        name: "text",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes32" },
          { name: "key", type: "string" },
        ],
        outputs: [{ name: "", type: "string" }],
      },
    ]),
    (be.addressResolverAbi = [
      {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [{ name: "name", type: "bytes32" }],
        outputs: [{ name: "", type: "address" }],
      },
      {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes32" },
          { name: "coinType", type: "uint256" },
        ],
        outputs: [{ name: "", type: "bytes" }],
      },
    ]),
    (be.smartAccountAbi = [
      {
        name: "isValidSignature",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "hash", type: "bytes32" },
          { name: "signature", type: "bytes" },
        ],
        outputs: [{ name: "", type: "bytes4" }],
      },
    ]),
    (be.universalSignatureValidatorAbi = [
      {
        inputs: [
          { name: "_signer", type: "address" },
          { name: "_hash", type: "bytes32" },
          { name: "_signature", type: "bytes" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [
          { name: "_signer", type: "address" },
          { name: "_hash", type: "bytes32" },
          { name: "_signature", type: "bytes" },
        ],
        outputs: [{ type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
        name: "isValidSig",
      },
    ]),
    (be.erc20Abi = [
      {
        type: "event",
        name: "Approval",
        inputs: [
          { indexed: !0, name: "owner", type: "address" },
          { indexed: !0, name: "spender", type: "address" },
          { indexed: !1, name: "value", type: "uint256" },
        ],
      },
      {
        type: "event",
        name: "Transfer",
        inputs: [
          { indexed: !0, name: "from", type: "address" },
          { indexed: !0, name: "to", type: "address" },
          { indexed: !1, name: "value", type: "uint256" },
        ],
      },
      {
        type: "function",
        name: "allowance",
        stateMutability: "view",
        inputs: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
        ],
        outputs: [{ type: "uint256" }],
      },
      {
        type: "function",
        name: "approve",
        stateMutability: "nonpayable",
        inputs: [
          { name: "spender", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        outputs: [{ type: "bool" }],
      },
      {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [{ name: "account", type: "address" }],
        outputs: [{ type: "uint256" }],
      },
      {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint8" }],
      },
      {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "string" }],
      },
      {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "string" }],
      },
      {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint256" }],
      },
      {
        type: "function",
        name: "transfer",
        stateMutability: "nonpayable",
        inputs: [
          { name: "recipient", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        outputs: [{ type: "bool" }],
      },
      {
        type: "function",
        name: "transferFrom",
        stateMutability: "nonpayable",
        inputs: [
          { name: "sender", type: "address" },
          { name: "recipient", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        outputs: [{ type: "bool" }],
      },
    ]),
    (be.erc20Abi_bytes32 = [
      {
        type: "event",
        name: "Approval",
        inputs: [
          { indexed: !0, name: "owner", type: "address" },
          { indexed: !0, name: "spender", type: "address" },
          { indexed: !1, name: "value", type: "uint256" },
        ],
      },
      {
        type: "event",
        name: "Transfer",
        inputs: [
          { indexed: !0, name: "from", type: "address" },
          { indexed: !0, name: "to", type: "address" },
          { indexed: !1, name: "value", type: "uint256" },
        ],
      },
      {
        type: "function",
        name: "allowance",
        stateMutability: "view",
        inputs: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
        ],
        outputs: [{ type: "uint256" }],
      },
      {
        type: "function",
        name: "approve",
        stateMutability: "nonpayable",
        inputs: [
          { name: "spender", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        outputs: [{ type: "bool" }],
      },
      {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [{ name: "account", type: "address" }],
        outputs: [{ type: "uint256" }],
      },
      {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint8" }],
      },
      {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "bytes32" }],
      },
      {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "bytes32" }],
      },
      {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint256" }],
      },
      {
        type: "function",
        name: "transfer",
        stateMutability: "nonpayable",
        inputs: [
          { name: "recipient", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        outputs: [{ type: "bool" }],
      },
      {
        type: "function",
        name: "transferFrom",
        stateMutability: "nonpayable",
        inputs: [
          { name: "sender", type: "address" },
          { name: "recipient", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        outputs: [{ type: "bool" }],
      },
    ]),
    (be.erc721Abi = [
      {
        type: "event",
        name: "Approval",
        inputs: [
          { indexed: !0, name: "owner", type: "address" },
          { indexed: !0, name: "spender", type: "address" },
          { indexed: !0, name: "tokenId", type: "uint256" },
        ],
      },
      {
        type: "event",
        name: "ApprovalForAll",
        inputs: [
          { indexed: !0, name: "owner", type: "address" },
          { indexed: !0, name: "operator", type: "address" },
          { indexed: !1, name: "approved", type: "bool" },
        ],
      },
      {
        type: "event",
        name: "Transfer",
        inputs: [
          { indexed: !0, name: "from", type: "address" },
          { indexed: !0, name: "to", type: "address" },
          { indexed: !0, name: "tokenId", type: "uint256" },
        ],
      },
      {
        type: "function",
        name: "approve",
        stateMutability: "payable",
        inputs: [
          { name: "spender", type: "address" },
          { name: "tokenId", type: "uint256" },
        ],
        outputs: [],
      },
      {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [{ name: "account", type: "address" }],
        outputs: [{ type: "uint256" }],
      },
      {
        type: "function",
        name: "getApproved",
        stateMutability: "view",
        inputs: [{ name: "tokenId", type: "uint256" }],
        outputs: [{ type: "address" }],
      },
      {
        type: "function",
        name: "isApprovedForAll",
        stateMutability: "view",
        inputs: [
          { name: "owner", type: "address" },
          { name: "operator", type: "address" },
        ],
        outputs: [{ type: "bool" }],
      },
      {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "string" }],
      },
      {
        type: "function",
        name: "ownerOf",
        stateMutability: "view",
        inputs: [{ name: "tokenId", type: "uint256" }],
        outputs: [{ name: "owner", type: "address" }],
      },
      {
        type: "function",
        name: "safeTransferFrom",
        stateMutability: "payable",
        inputs: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "tokenId", type: "uint256" },
        ],
        outputs: [],
      },
      {
        type: "function",
        name: "safeTransferFrom",
        stateMutability: "nonpayable",
        inputs: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "id", type: "uint256" },
          { name: "data", type: "bytes" },
        ],
        outputs: [],
      },
      {
        type: "function",
        name: "setApprovalForAll",
        stateMutability: "nonpayable",
        inputs: [
          { name: "operator", type: "address" },
          { name: "approved", type: "bool" },
        ],
        outputs: [],
      },
      {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "string" }],
      },
      {
        type: "function",
        name: "tokenByIndex",
        stateMutability: "view",
        inputs: [{ name: "index", type: "uint256" }],
        outputs: [{ type: "uint256" }],
      },
      {
        type: "function",
        name: "tokenByIndex",
        stateMutability: "view",
        inputs: [
          { name: "owner", type: "address" },
          { name: "index", type: "uint256" },
        ],
        outputs: [{ name: "tokenId", type: "uint256" }],
      },
      {
        type: "function",
        name: "tokenURI",
        stateMutability: "view",
        inputs: [{ name: "tokenId", type: "uint256" }],
        outputs: [{ type: "string" }],
      },
      {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint256" }],
      },
      {
        type: "function",
        name: "transferFrom",
        stateMutability: "payable",
        inputs: [
          { name: "sender", type: "address" },
          { name: "recipient", type: "address" },
          { name: "tokeId", type: "uint256" },
        ],
        outputs: [],
      },
    ]),
    (be.erc4626Abi = [
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "owner", type: "address" },
          { indexed: !0, name: "spender", type: "address" },
          { indexed: !1, name: "value", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "sender", type: "address" },
          { indexed: !0, name: "receiver", type: "address" },
          { indexed: !1, name: "assets", type: "uint256" },
          { indexed: !1, name: "shares", type: "uint256" },
        ],
        name: "Deposit",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "from", type: "address" },
          { indexed: !0, name: "to", type: "address" },
          { indexed: !1, name: "value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "sender", type: "address" },
          { indexed: !0, name: "receiver", type: "address" },
          { indexed: !0, name: "owner", type: "address" },
          { indexed: !1, name: "assets", type: "uint256" },
          { indexed: !1, name: "shares", type: "uint256" },
        ],
        name: "Withdraw",
        type: "event",
      },
      {
        inputs: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { name: "spender", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "asset",
        outputs: [{ name: "assetTokenAddress", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "shares", type: "uint256" }],
        name: "convertToAssets",
        outputs: [{ name: "assets", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "assets", type: "uint256" }],
        name: "convertToShares",
        outputs: [{ name: "shares", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { name: "assets", type: "uint256" },
          { name: "receiver", type: "address" },
        ],
        name: "deposit",
        outputs: [{ name: "shares", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ name: "caller", type: "address" }],
        name: "maxDeposit",
        outputs: [{ name: "maxAssets", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "caller", type: "address" }],
        name: "maxMint",
        outputs: [{ name: "maxShares", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "owner", type: "address" }],
        name: "maxRedeem",
        outputs: [{ name: "maxShares", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "owner", type: "address" }],
        name: "maxWithdraw",
        outputs: [{ name: "maxAssets", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { name: "shares", type: "uint256" },
          { name: "receiver", type: "address" },
        ],
        name: "mint",
        outputs: [{ name: "assets", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ name: "assets", type: "uint256" }],
        name: "previewDeposit",
        outputs: [{ name: "shares", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "shares", type: "uint256" }],
        name: "previewMint",
        outputs: [{ name: "assets", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "shares", type: "uint256" }],
        name: "previewRedeem",
        outputs: [{ name: "assets", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "assets", type: "uint256" }],
        name: "previewWithdraw",
        outputs: [{ name: "shares", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { name: "shares", type: "uint256" },
          { name: "receiver", type: "address" },
          { name: "owner", type: "address" },
        ],
        name: "redeem",
        outputs: [{ name: "assets", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "totalAssets",
        outputs: [{ name: "totalManagedAssets", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { name: "to", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { name: "assets", type: "uint256" },
          { name: "receiver", type: "address" },
          { name: "owner", type: "address" },
        ],
        name: "withdraw",
        outputs: [{ name: "shares", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
    ]),
    be
  );
}
var Pn = {},
  Fm;
function O1() {
  return (
    Fm ||
      ((Fm = 1),
      Object.defineProperty(Pn, "__esModule", { value: !0 }),
      (Pn.aggregate3Signature = void 0),
      (Pn.aggregate3Signature = "0x82ad56cb")),
    Pn
  );
}
var _t = {},
  Hm;
function cd() {
  return (
    Hm ||
      ((Hm = 1),
      Object.defineProperty(_t, "__esModule", { value: !0 }),
      (_t.universalSignatureValidatorByteCode =
        _t.deploylessCallViaFactoryBytecode =
        _t.deploylessCallViaBytecodeBytecode =
          void 0),
      (_t.deploylessCallViaBytecodeBytecode =
        "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe"),
      (_t.deploylessCallViaFactoryBytecode =
        "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe"),
      (_t.universalSignatureValidatorByteCode =
        "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572")),
    _t
  );
}
var xe = {},
  km;
function to() {
  if (km) return xe;
  (km = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe.InvalidChainIdError =
      xe.ClientChainNotConfiguredError =
      xe.ChainNotFoundError =
      xe.ChainMismatchError =
      xe.ChainDoesNotSupportContract =
        void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor({ blockNumber: a, chain: u, contract: f }) {
      super(`Chain "${u.name}" does not support contract "${f.name}".`, {
        metaMessages: [
          "This could be due to any of the following:",
          ...(a && f.blockCreated && f.blockCreated > a
            ? [
                `- The contract "${f.name}" was not deployed until block ${f.blockCreated} (current block ${a}).`,
              ]
            : [
                `- The chain does not have the contract "${f.name}" configured.`,
              ]),
        ],
        name: "ChainDoesNotSupportContract",
      });
    }
  }
  xe.ChainDoesNotSupportContract = t;
  class n extends e.BaseError {
    constructor({ chain: a, currentChainId: u }) {
      super(
        `The current chain of the wallet (id: ${u}) does not match the target chain for the transaction (id: ${a.id} – ${a.name}).`,
        {
          metaMessages: [
            `Current Chain ID:  ${u}`,
            `Expected Chain ID: ${a.id} – ${a.name}`,
          ],
          name: "ChainMismatchError",
        },
      );
    }
  }
  xe.ChainMismatchError = n;
  class r extends e.BaseError {
    constructor() {
      super(
        [
          "No chain was provided to the request.",
          "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
        ].join(`
`),
        { name: "ChainNotFoundError" },
      );
    }
  }
  xe.ChainNotFoundError = r;
  class i extends e.BaseError {
    constructor() {
      super("No chain was provided to the Client.", {
        name: "ClientChainNotConfiguredError",
      });
    }
  }
  xe.ClientChainNotConfiguredError = i;
  class s extends e.BaseError {
    constructor({ chainId: a }) {
      super(
        typeof a == "number"
          ? `Chain ID "${a}" is invalid.`
          : "Chain ID is invalid.",
        { name: "InvalidChainIdError" },
      );
    }
  }
  return (xe.InvalidChainIdError = s), xe;
}
var Si = {},
  $m;
function ro() {
  if ($m) return Si;
  ($m = 1),
    Object.defineProperty(Si, "__esModule", { value: !0 }),
    (Si.encodeDeployData = i);
  const e = ye(),
    t = Be(),
    n = Ye(),
    r = "/docs/contract/encodeDeployData";
  function i(s) {
    const { abi: o, args: a, bytecode: u } = s;
    if (!a || a.length === 0) return u;
    const f = o.find((d) => "type" in d && d.type === "constructor");
    if (!f) throw new e.AbiConstructorNotFoundError({ docsPath: r });
    if (!("inputs" in f))
      throw new e.AbiConstructorParamsNotFoundError({ docsPath: r });
    if (!f.inputs || f.inputs.length === 0)
      throw new e.AbiConstructorParamsNotFoundError({ docsPath: r });
    const c = (0, n.encodeAbiParameters)(f.inputs, a);
    return (0, t.concatHex)([u, c]);
  }
  return Si;
}
var Ii = {},
  Nm;
function Gt() {
  if (Nm) return Ii;
  (Nm = 1),
    Object.defineProperty(Ii, "__esModule", { value: !0 }),
    (Ii.getChainContractAddress = t);
  const e = to();
  function t({ blockNumber: n, chain: r, contract: i }) {
    var o;
    const s = (o = r == null ? void 0 : r.contracts) == null ? void 0 : o[i];
    if (!s)
      throw new e.ChainDoesNotSupportContract({
        chain: r,
        contract: { name: i },
      });
    if (n && s.blockCreated && s.blockCreated > n)
      throw new e.ChainDoesNotSupportContract({
        blockNumber: n,
        chain: r,
        contract: { name: i, blockCreated: s.blockCreated },
      });
    return s.address;
  }
  return Ii;
}
var Ri = {},
  zm;
function dd() {
  if (zm) return Ri;
  (zm = 1),
    Object.defineProperty(Ri, "__esModule", { value: !0 }),
    (Ri.getCallError = r);
  const e = zt(),
    t = Ut(),
    n = Zn();
  function r(i, { docsPath: s, ...o }) {
    const a = (() => {
      const u = (0, n.getNodeError)(i, o);
      return u instanceof t.UnknownNodeError ? i : u;
    })();
    return new e.CallExecutionError(a, { docsPath: s, ...o });
  }
  return Ri;
}
var Oi = {},
  Bi = {},
  Lm;
function sy() {
  if (Lm) return Bi;
  (Lm = 1),
    Object.defineProperty(Bi, "__esModule", { value: !0 }),
    (Bi.withResolvers = e);
  function e() {
    let t = () => {},
      n = () => {};
    return {
      promise: new Promise((i, s) => {
        (t = i), (n = s);
      }),
      resolve: t,
      reject: n,
    };
  }
  return Bi;
}
var Dm;
function fd() {
  if (Dm) return Oi;
  (Dm = 1),
    Object.defineProperty(Oi, "__esModule", { value: !0 }),
    (Oi.createBatchScheduler = n);
  const e = sy(),
    t = new Map();
  function n({ fn: r, id: i, shouldSplitBatch: s, wait: o = 0, sort: a }) {
    const u = async () => {
        const g = d();
        f();
        const h = g.map(({ args: b }) => b);
        h.length !== 0 &&
          r(h)
            .then((b) => {
              a && Array.isArray(b) && b.sort(a);
              for (let v = 0; v < g.length; v++) {
                const { resolve: _ } = g[v];
                _ == null || _([b[v], b]);
              }
            })
            .catch((b) => {
              for (let v = 0; v < g.length; v++) {
                const { reject: _ } = g[v];
                _ == null || _(b);
              }
            });
      },
      f = () => t.delete(i),
      c = () => d().map(({ args: g }) => g),
      d = () => t.get(i) || [],
      l = (g) => t.set(i, [...d(), g]);
    return {
      flush: f,
      async schedule(g) {
        const { promise: h, resolve: b, reject: v } = (0, e.withResolvers)();
        return (
          (s == null ? void 0 : s([...c(), g])) && u(),
          d().length > 0
            ? (l({ args: g, resolve: b, reject: v }), h)
            : (l({ args: g, resolve: b, reject: v }), setTimeout(u, o), h)
        );
      },
    };
  }
  return Oi;
}
var Ic = {},
  vt = {},
  Um;
function B1() {
  if (Um) return vt;
  (Um = 1),
    Object.defineProperty(vt, "__esModule", { value: !0 }),
    (vt.OffchainLookupSenderMismatchError =
      vt.OffchainLookupResponseMalformedError =
      vt.OffchainLookupError =
        void 0);
  const e = Se(),
    t = oe(),
    n = Zc();
  class r extends t.BaseError {
    constructor({
      callbackSelector: a,
      cause: u,
      data: f,
      extraData: c,
      sender: d,
      urls: l,
    }) {
      var g;
      super(
        u.shortMessage ||
          "An error occurred while fetching for an offchain result.",
        {
          cause: u,
          metaMessages: [
            ...(u.metaMessages || []),
            (g = u.metaMessages) != null && g.length ? "" : [],
            "Offchain Gateway Call:",
            l && [
              "  Gateway URL(s):",
              ...l.map((h) => `    ${(0, n.getUrl)(h)}`),
            ],
            `  Sender: ${d}`,
            `  Data: ${f}`,
            `  Callback selector: ${a}`,
            `  Extra data: ${c}`,
          ].flat(),
          name: "OffchainLookupError",
        },
      );
    }
  }
  vt.OffchainLookupError = r;
  class i extends t.BaseError {
    constructor({ result: a, url: u }) {
      super(
        "Offchain gateway response is malformed. Response data must be a hex value.",
        {
          metaMessages: [
            `Gateway URL: ${(0, n.getUrl)(u)}`,
            `Response: ${(0, e.stringify)(a)}`,
          ],
          name: "OffchainLookupResponseMalformedError",
        },
      );
    }
  }
  vt.OffchainLookupResponseMalformedError = i;
  class s extends t.BaseError {
    constructor({ sender: a, to: u }) {
      super(
        "Reverted sender address does not match target contract address (`to`).",
        {
          metaMessages: [
            `Contract address: ${u}`,
            `OffchainLookup sender address: ${a}`,
          ],
          name: "OffchainLookupSenderMismatchError",
        },
      );
    }
  }
  return (vt.OffchainLookupSenderMismatchError = s), vt;
}
var Gm;
function ld() {
  return (
    Gm ||
      ((Gm = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.offchainLookupAbiItem = e.offchainLookupSignature = void 0),
          (e.offchainLookup = c),
          (e.ccipRequest = d);
        const t = no(),
          n = B1(),
          r = Qe(),
          i = Au(),
          s = Ye(),
          o = St(),
          a = Be(),
          u = Re(),
          f = Se();
        (e.offchainLookupSignature = "0x556f1830"),
          (e.offchainLookupAbiItem = {
            name: "OffchainLookup",
            type: "error",
            inputs: [
              { name: "sender", type: "address" },
              { name: "urls", type: "string[]" },
              { name: "callData", type: "bytes" },
              { name: "callbackFunction", type: "bytes4" },
              { name: "extraData", type: "bytes" },
            ],
          });
        async function c(l, { blockNumber: g, blockTag: h, data: b, to: v }) {
          const { args: _ } = (0, i.decodeErrorResult)({
              data: b,
              abi: [e.offchainLookupAbiItem],
            }),
            [E, m, p, y, j] = _,
            { ccipRead: P } = l,
            S =
              P && typeof (P == null ? void 0 : P.request) == "function"
                ? P.request
                : d;
          try {
            if (!(0, o.isAddressEqual)(v, E))
              throw new n.OffchainLookupSenderMismatchError({
                sender: E,
                to: v,
              });
            const w = await S({ data: p, sender: E, urls: m }),
              { data: q } = await (0, t.call)(l, {
                blockNumber: g,
                blockTag: h,
                data: (0, a.concat)([
                  y,
                  (0, s.encodeAbiParameters)(
                    [{ type: "bytes" }, { type: "bytes" }],
                    [w, j],
                  ),
                ]),
                to: v,
              });
            return q;
          } catch (w) {
            throw new n.OffchainLookupError({
              callbackSelector: y,
              cause: w,
              data: b,
              extraData: j,
              sender: E,
              urls: m,
            });
          }
        }
        async function d({ data: l, sender: g, urls: h }) {
          var v;
          let b = new Error("An unknown error occurred.");
          for (let _ = 0; _ < h.length; _++) {
            const E = h[_],
              m = E.includes("{data}") ? "GET" : "POST",
              p = m === "POST" ? { data: l, sender: g } : void 0,
              y = m === "POST" ? { "Content-Type": "application/json" } : {};
            try {
              const j = await fetch(
                E.replace("{sender}", g).replace("{data}", l),
                { body: JSON.stringify(p), headers: y, method: m },
              );
              let P;
              if (
                ((v = j.headers.get("Content-Type")) != null &&
                v.startsWith("application/json")
                  ? (P = (await j.json()).data)
                  : (P = await j.text()),
                !j.ok)
              ) {
                b = new r.HttpRequestError({
                  body: p,
                  details:
                    P != null && P.error
                      ? (0, f.stringify)(P.error)
                      : j.statusText,
                  headers: j.headers,
                  status: j.status,
                  url: E,
                });
                continue;
              }
              if (!(0, u.isHex)(P)) {
                b = new n.OffchainLookupResponseMalformedError({
                  result: P,
                  url: E,
                });
                continue;
              }
              return P;
            } catch (j) {
              b = new r.HttpRequestError({
                body: p,
                details: j.message,
                url: E,
              });
            }
          }
          throw b;
        }
      })(Ic)),
    Ic
  );
}
var Vm;
function no() {
  if (Vm) return jn;
  (Vm = 1),
    Object.defineProperty(jn, "__esModule", { value: !0 }),
    (jn.call = m),
    (jn.getRevertErrorData = S);
  const e = Eu(),
    t = Ae(),
    n = hr(),
    r = O1(),
    i = cd(),
    s = oe(),
    o = to(),
    a = zt(),
    u = Rt(),
    f = ro(),
    c = Xe(),
    d = Gt(),
    l = Q(),
    g = dd(),
    h = Fr(),
    b = Tt(),
    v = fd(),
    _ = Xc(),
    E = At();
  async function m(w, q) {
    var W, D, se, pe;
    const {
        account: T = w.account,
        batch: B = !!((W = w.batch) != null && W.multicall),
        blockNumber: M,
        blockTag: A = "latest",
        accessList: x,
        blobs: $,
        code: F,
        data: H,
        factory: R,
        factoryData: O,
        gas: I,
        gasPrice: C,
        maxFeePerBlobGas: k,
        maxFeePerGas: z,
        maxPriorityFeePerGas: U,
        nonce: L,
        to: V,
        value: G,
        stateOverride: Z,
        ...ee
      } = q,
      J = T ? (0, t.parseAccount)(T) : void 0;
    if (F && (R || O))
      throw new s.BaseError(
        "Cannot provide both `code` & `factory`/`factoryData` as parameters.",
      );
    if (F && V)
      throw new s.BaseError("Cannot provide both `code` & `to` as parameters.");
    const ae = F && H,
      K = R && O && V && H,
      X = ae || K,
      Y = ae
        ? j({ code: F, data: H })
        : K
          ? P({ data: H, factory: R, factoryData: O, to: V })
          : H;
    try {
      (0, E.assertRequest)(q);
      const he = (M ? (0, l.numberToHex)(M) : void 0) || A,
        ve = (0, _.serializeStateOverride)(Z),
        _e =
          (pe =
            (se = (D = w.chain) == null ? void 0 : D.formatters) == null
              ? void 0
              : se.transactionRequest) == null
            ? void 0
            : pe.format,
        je = (_e || b.formatTransactionRequest)({
          ...(0, h.extract)(ee, { format: _e }),
          from: J == null ? void 0 : J.address,
          accessList: x,
          blobs: $,
          data: Y,
          gas: I,
          gasPrice: C,
          maxFeePerBlobGas: k,
          maxFeePerGas: z,
          maxPriorityFeePerGas: U,
          nonce: L,
          to: X ? void 0 : V,
          value: G,
        });
      if (B && p({ request: je }) && !ve)
        try {
          return await y(w, { ...je, blockNumber: M, blockTag: A });
        } catch (we) {
          if (
            !(we instanceof o.ClientChainNotConfiguredError) &&
            !(we instanceof o.ChainDoesNotSupportContract)
          )
            throw we;
        }
      const Ne = await w.request({
        method: "eth_call",
        params: ve ? [je, he, ve] : [je, he],
      });
      return Ne === "0x" ? { data: void 0 } : { data: Ne };
    } catch (ce) {
      const he = S(ce),
        { offchainLookup: ve, offchainLookupSignature: _e } =
          await Promise.resolve().then(() => ld());
      if (
        w.ccipRead !== !1 &&
        (he == null ? void 0 : he.slice(0, 10)) === _e &&
        V
      )
        return { data: await ve(w, { data: he, to: V }) };
      throw X && (he == null ? void 0 : he.slice(0, 10)) === "0x101bb98d"
        ? new a.CounterfactualDeploymentFailedError({ factory: R })
        : (0, g.getCallError)(ce, { ...q, account: J, chain: w.chain });
    }
  }
  function p({ request: w }) {
    const { data: q, to: T, ...B } = w;
    return !(
      !q ||
      q.startsWith(r.aggregate3Signature) ||
      !T ||
      Object.values(B).filter((M) => typeof M < "u").length > 0
    );
  }
  async function y(w, q) {
    var z;
    const { batchSize: T = 1024, wait: B = 0 } =
        typeof ((z = w.batch) == null ? void 0 : z.multicall) == "object"
          ? w.batch.multicall
          : {},
      {
        blockNumber: M,
        blockTag: A = "latest",
        data: x,
        multicallAddress: $,
        to: F,
      } = q;
    let H = $;
    if (!H) {
      if (!w.chain) throw new o.ClientChainNotConfiguredError();
      H = (0, d.getChainContractAddress)({
        blockNumber: M,
        chain: w.chain,
        contract: "multicall3",
      });
    }
    const O = (M ? (0, l.numberToHex)(M) : void 0) || A,
      { schedule: I } = (0, v.createBatchScheduler)({
        id: `${w.uid}.${O}`,
        wait: B,
        shouldSplitBatch(U) {
          return U.reduce((V, { data: G }) => V + (G.length - 2), 0) > T * 2;
        },
        fn: async (U) => {
          const L = U.map((Z) => ({
              allowFailure: !0,
              callData: Z.data,
              target: Z.to,
            })),
            V = (0, c.encodeFunctionData)({
              abi: n.multicall3Abi,
              args: [L],
              functionName: "aggregate3",
            }),
            G = await w.request({
              method: "eth_call",
              params: [{ data: V, to: H }, O],
            });
          return (0, u.decodeFunctionResult)({
            abi: n.multicall3Abi,
            args: [L],
            functionName: "aggregate3",
            data: G || "0x",
          });
        },
      }),
      [{ returnData: C, success: k }] = await I({ data: x, to: F });
    if (!k) throw new a.RawContractError({ data: C });
    return C === "0x" ? { data: void 0 } : { data: C };
  }
  function j(w) {
    const { code: q, data: T } = w;
    return (0, f.encodeDeployData)({
      abi: (0, e.parseAbi)(["constructor(bytes, bytes)"]),
      bytecode: i.deploylessCallViaBytecodeBytecode,
      args: [q, T],
    });
  }
  function P(w) {
    const { data: q, factory: T, factoryData: B, to: M } = w;
    return (0, f.encodeDeployData)({
      abi: (0, e.parseAbi)(["constructor(address, bytes, address, bytes)"]),
      bytecode: i.deploylessCallViaFactoryBytecode,
      args: [M, q, T, B],
    });
  }
  function S(w) {
    var T;
    if (!(w instanceof s.BaseError)) return;
    const q = w.walk();
    return typeof (q == null ? void 0 : q.data) == "object"
      ? (T = q.data) == null
        ? void 0
        : T.data
      : q.data;
  }
  return jn;
}
var Wm;
function Ot() {
  if (Wm) return Ti;
  (Wm = 1),
    Object.defineProperty(Ti, "__esModule", { value: !0 }),
    (Ti.readContract = s);
  const e = Rt(),
    t = Xe(),
    n = Lt(),
    r = fe(),
    i = no();
  async function s(o, a) {
    const { abi: u, address: f, args: c, functionName: d, ...l } = a,
      g = (0, t.encodeFunctionData)({ abi: u, args: c, functionName: d });
    try {
      const { data: h } = await (0, r.getAction)(
        o,
        i.call,
        "call",
      )({ ...l, data: g, to: f });
      return (0, e.decodeFunctionResult)({
        abi: u,
        args: c,
        functionName: d,
        data: h || "0x",
      });
    } catch (h) {
      throw (0, n.getContractError)(h, {
        abi: u,
        address: f,
        args: c,
        docsPath: "/docs/contract/readContract",
        functionName: d,
      });
    }
  }
  return Ti;
}
var Ci = {},
  Km;
function uy() {
  if (Km) return Ci;
  (Km = 1),
    Object.defineProperty(Ci, "__esModule", { value: !0 }),
    (Ci.simulateContract = o);
  const e = Ae(),
    t = Rt(),
    n = Xe(),
    r = Lt(),
    i = fe(),
    s = no();
  async function o(a, u) {
    const {
        abi: f,
        address: c,
        args: d,
        dataSuffix: l,
        functionName: g,
        ...h
      } = u,
      b = h.account ? (0, e.parseAccount)(h.account) : a.account,
      v = (0, n.encodeFunctionData)({ abi: f, args: d, functionName: g });
    try {
      const { data: _ } = await (0, i.getAction)(
          a,
          s.call,
          "call",
        )({
          batch: !1,
          data: `${v}${l ? l.replace("0x", "") : ""}`,
          to: c,
          ...h,
          account: b,
        }),
        E = (0, t.decodeFunctionResult)({
          abi: f,
          args: d,
          functionName: g,
          data: _ || "0x",
        }),
        m = f.filter((p) => "name" in p && p.name === u.functionName);
      return {
        result: E,
        request: {
          abi: m,
          address: c,
          args: d,
          dataSuffix: l,
          functionName: g,
          ...h,
          account: b,
        },
      };
    } catch (_) {
      throw (0, r.getContractError)(_, {
        abi: f,
        address: c,
        args: d,
        docsPath: "/docs/contract/simulateContract",
        functionName: g,
        sender: b == null ? void 0 : b.address,
      });
    }
  }
  return Ci;
}
var qi = {},
  Rc = {},
  Zm;
function kr() {
  return (
    Zm ||
      ((Zm = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.cleanupCache = e.listenersCache = void 0),
          (e.observe = n),
          (e.listenersCache = new Map()),
          (e.cleanupCache = new Map());
        let t = 0;
        function n(r, i, s) {
          const o = ++t,
            a = () => e.listenersCache.get(r) || [],
            u = () => {
              const g = a();
              e.listenersCache.set(
                r,
                g.filter((h) => h.id !== o),
              );
            },
            f = () => {
              const g = a();
              if (!g.some((b) => b.id === o)) return;
              const h = e.cleanupCache.get(r);
              g.length === 1 && h && h(), u();
            },
            c = a();
          if (
            (e.listenersCache.set(r, [...c, { id: o, fns: i }]), c.length > 0)
          )
            return f;
          const d = {};
          for (const g in i)
            d[g] = (...h) => {
              var v, _;
              const b = a();
              if (b.length !== 0)
                for (const E of b)
                  (_ = (v = E.fns)[g]) == null || _.call(v, ...h);
            };
          const l = s(d);
          return typeof l == "function" && e.cleanupCache.set(r, l), f;
        }
      })(Rc)),
    Rc
  );
}
var xi = {},
  Mi = {},
  Jm;
function md() {
  if (Jm) return Mi;
  (Jm = 1),
    Object.defineProperty(Mi, "__esModule", { value: !0 }),
    (Mi.wait = e);
  async function e(t) {
    return new Promise((n) => setTimeout(n, t));
  }
  return Mi;
}
var Ym;
function oo() {
  if (Ym) return xi;
  (Ym = 1),
    Object.defineProperty(xi, "__esModule", { value: !0 }),
    (xi.poll = t);
  const e = md();
  function t(n, { emitOnBegin: r, initialWaitTime: i, interval: s }) {
    let o = !0;
    const a = () => (o = !1);
    return (
      (async () => {
        let f;
        r && (f = await n({ unpoll: a }));
        const c = (await (i == null ? void 0 : i(f))) ?? s;
        await (0, e.wait)(c);
        const d = async () => {
          o && (await n({ unpoll: a }), await (0, e.wait)(s), d());
        };
        d();
      })(),
      a
    );
  }
  return xi;
}
var wn = {},
  Oc = {},
  Xm;
function C1() {
  return (
    Xm ||
      ((Xm = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.responseCache = e.promiseCache = void 0),
          (e.getCache = t),
          (e.withCache = n),
          (e.promiseCache = new Map()),
          (e.responseCache = new Map());
        function t(r) {
          const i = (a, u) => ({
              clear: () => u.delete(a),
              get: () => u.get(a),
              set: (f) => u.set(a, f),
            }),
            s = i(r, e.promiseCache),
            o = i(r, e.responseCache);
          return {
            clear: () => {
              s.clear(), o.clear();
            },
            promise: s,
            response: o,
          };
        }
        async function n(
          r,
          { cacheKey: i, cacheTime: s = Number.POSITIVE_INFINITY },
        ) {
          const o = t(i),
            a = o.response.get();
          if (a && s > 0 && new Date().getTime() - a.created.getTime() < s)
            return a.data;
          let u = o.promise.get();
          u || ((u = r()), o.promise.set(u));
          try {
            const f = await u;
            return o.response.set({ created: new Date(), data: f }), f;
          } finally {
            o.promise.clear();
          }
        }
      })(Oc)),
    Oc
  );
}
var Qm;
function io() {
  if (Qm) return wn;
  (Qm = 1),
    Object.defineProperty(wn, "__esModule", { value: !0 }),
    (wn.getBlockNumberCache = n),
    (wn.getBlockNumber = r);
  const e = C1(),
    t = (i) => `blockNumber.${i}`;
  function n(i) {
    return (0, e.getCache)(t(i));
  }
  async function r(i, { cacheTime: s = i.cacheTime } = {}) {
    const o = await (0, e.withCache)(
      () => i.request({ method: "eth_blockNumber" }),
      { cacheKey: t(i.uid), cacheTime: s },
    );
    return BigInt(o);
  }
  return wn;
}
var Fi = {},
  eb;
function Fu() {
  if (eb) return Fi;
  (eb = 1),
    Object.defineProperty(Fi, "__esModule", { value: !0 }),
    (Fi.getFilterChanges = n);
  const e = eo(),
    t = It();
  async function n(r, { filter: i }) {
    const s = "strict" in i && i.strict,
      o = await i.request({ method: "eth_getFilterChanges", params: [i.id] });
    if (typeof o[0] == "string") return o;
    const a = o.map((u) => (0, t.formatLog)(u));
    return !("abi" in i) || !i.abi
      ? a
      : (0, e.parseEventLogs)({ abi: i.abi, logs: a, strict: s });
  }
  return Fi;
}
var Hi = {},
  tb;
function Hu() {
  if (tb) return Hi;
  (tb = 1),
    Object.defineProperty(Hi, "__esModule", { value: !0 }),
    (Hi.uninstallFilter = e);
  async function e(t, { filter: n }) {
    return n.request({ method: "eth_uninstallFilter", params: [n.id] });
  }
  return Hi;
}
var rb;
function cy() {
  if (rb) return qi;
  (rb = 1),
    Object.defineProperty(qi, "__esModule", { value: !0 }),
    (qi.watchContractEvent = h);
  const e = ye(),
    t = br(),
    n = Qn(),
    r = lr(),
    i = It(),
    s = fe(),
    o = kr(),
    a = oo(),
    u = Se(),
    f = Gc(),
    c = io(),
    d = ud(),
    l = Fu(),
    g = Hu();
  function h(b, v) {
    const {
      abi: _,
      address: E,
      args: m,
      batch: p = !0,
      eventName: y,
      fromBlock: j,
      onError: P,
      onLogs: S,
      poll: w,
      pollingInterval: q = b.pollingInterval,
      strict: T,
    } = v;
    return (
      typeof w < "u"
        ? w
        : typeof j == "bigint"
          ? !0
          : !(
              b.transport.type === "webSocket" ||
              (b.transport.type === "fallback" &&
                b.transport.transports[0].config.type === "webSocket")
            )
    )
      ? (() => {
          const x = T ?? !1,
            $ = (0, u.stringify)([
              "watchContractEvent",
              E,
              m,
              p,
              b.uid,
              y,
              q,
              x,
              j,
            ]);
          return (0, o.observe)($, { onLogs: S, onError: P }, (F) => {
            let H;
            j !== void 0 && (H = j - 1n);
            let R,
              O = !1;
            const I = (0, a.poll)(
              async () => {
                var C;
                if (!O) {
                  try {
                    R = await (0, s.getAction)(
                      b,
                      f.createContractEventFilter,
                      "createContractEventFilter",
                    )({
                      abi: _,
                      address: E,
                      args: m,
                      eventName: y,
                      strict: x,
                      fromBlock: j,
                    });
                  } catch {}
                  O = !0;
                  return;
                }
                try {
                  let k;
                  if (R)
                    k = await (0, s.getAction)(
                      b,
                      l.getFilterChanges,
                      "getFilterChanges",
                    )({ filter: R });
                  else {
                    const z = await (0, s.getAction)(
                      b,
                      c.getBlockNumber,
                      "getBlockNumber",
                    )({});
                    H && H < z
                      ? (k = await (0, s.getAction)(
                          b,
                          d.getContractEvents,
                          "getContractEvents",
                        )({
                          abi: _,
                          address: E,
                          args: m,
                          eventName: y,
                          fromBlock: H + 1n,
                          toBlock: z,
                          strict: x,
                        }))
                      : (k = []),
                      (H = z);
                  }
                  if (k.length === 0) return;
                  if (p) F.onLogs(k);
                  else for (const z of k) F.onLogs([z]);
                } catch (k) {
                  R && k instanceof t.InvalidInputRpcError && (O = !1),
                    (C = F.onError) == null || C.call(F, k);
                }
              },
              { emitOnBegin: !0, interval: q },
            );
            return async () => {
              R &&
                (await (0, s.getAction)(
                  b,
                  g.uninstallFilter,
                  "uninstallFilter",
                )({ filter: R })),
                I();
            };
          });
        })()
      : (() => {
          const x = T ?? !1,
            $ = (0, u.stringify)([
              "watchContractEvent",
              E,
              m,
              p,
              b.uid,
              y,
              q,
              x,
            ]);
          let F = !0,
            H = () => (F = !1);
          return (0, o.observe)(
            $,
            { onLogs: S, onError: P },
            (R) => (
              (async () => {
                try {
                  const O = (() => {
                      if (b.transport.type === "fallback") {
                        const k = b.transport.transports.find(
                          (z) => z.config.type === "webSocket",
                        );
                        return k ? k.value : b.transport;
                      }
                      return b.transport;
                    })(),
                    I = y
                      ? (0, r.encodeEventTopics)({
                          abi: _,
                          eventName: y,
                          args: m,
                        })
                      : [],
                    { unsubscribe: C } = await O.subscribe({
                      params: ["logs", { address: E, topics: I }],
                      onData(k) {
                        var U;
                        if (!F) return;
                        const z = k.result;
                        try {
                          const { eventName: L, args: V } = (0,
                            n.decodeEventLog)({
                              abi: _,
                              data: z.data,
                              topics: z.topics,
                              strict: T,
                            }),
                            G = (0, i.formatLog)(z, { args: V, eventName: L });
                          R.onLogs([G]);
                        } catch (L) {
                          let V, G;
                          if (
                            L instanceof e.DecodeLogDataMismatch ||
                            L instanceof e.DecodeLogTopicsMismatch
                          ) {
                            if (T) return;
                            (V = L.abiItem.name),
                              (G =
                                (U = L.abiItem.inputs) == null
                                  ? void 0
                                  : U.some((ee) => !("name" in ee && ee.name)));
                          }
                          const Z = (0, i.formatLog)(z, {
                            args: G ? [] : {},
                            eventName: V,
                          });
                          R.onLogs([Z]);
                        }
                      },
                      onError(k) {
                        var z;
                        (z = R.onError) == null || z.call(R, k);
                      },
                    });
                  (H = C), F || H();
                } catch (O) {
                  P == null || P(O);
                }
              })(),
              () => H()
            ),
          );
        })();
  }
  return qi;
}
var ki = {},
  tr = {},
  nb;
function ao() {
  if (nb) return tr;
  (nb = 1),
    Object.defineProperty(tr, "__esModule", { value: !0 }),
    (tr.AccountTypeNotSupportedError = tr.AccountNotFoundError = void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor({ docsPath: i } = {}) {
      super(
        [
          "Could not find an Account to execute with this Action.",
          "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
        ].join(`
`),
        { docsPath: i, docsSlug: "account", name: "AccountNotFoundError" },
      );
    }
  }
  tr.AccountNotFoundError = t;
  class n extends e.BaseError {
    constructor({ docsPath: i, metaMessages: s, type: o }) {
      super(`Account type "${o}" is not supported.`, {
        docsPath: i,
        metaMessages: s,
        name: "AccountTypeNotSupportedError",
      });
    }
  }
  return (tr.AccountTypeNotSupportedError = n), tr;
}
var $i = {},
  Ni = {},
  ob;
function ku() {
  if (ob) return Ni;
  (ob = 1),
    Object.defineProperty(Ni, "__esModule", { value: !0 }),
    (Ni.assertCurrentChain = t);
  const e = to();
  function t({ chain: n, currentChainId: r }) {
    if (!n) throw new e.ChainNotFoundError();
    if (r !== n.id)
      throw new e.ChainMismatchError({ chain: n, currentChainId: r });
  }
  return Ni;
}
var zi = {},
  ib;
function dy() {
  if (ib) return zi;
  (ib = 1),
    Object.defineProperty(zi, "__esModule", { value: !0 }),
    (zi.getTransactionError = r);
  const e = Ut(),
    t = He(),
    n = Zn();
  function r(i, { docsPath: s, ...o }) {
    const a = (() => {
      const u = (0, n.getNodeError)(i, o);
      return u instanceof e.UnknownNodeError ? i : u;
    })();
    return new t.TransactionExecutionError(a, { docsPath: s, ...o });
  }
  return zi;
}
var Li = {},
  ab;
function bd() {
  if (ab) return Li;
  (ab = 1),
    Object.defineProperty(Li, "__esModule", { value: !0 }),
    (Li.sendRawTransaction = e);
  async function e(t, { serializedTransaction: n }) {
    return t.request(
      { method: "eth_sendRawTransaction", params: [n] },
      { retryCount: 0 },
    );
  }
  return Li;
}
var sb;
function hd() {
  if (sb) return $i;
  (sb = 1),
    Object.defineProperty($i, "__esModule", { value: !0 }),
    ($i.sendTransaction = b);
  const e = Ae(),
    t = ao(),
    n = oe(),
    r = Jg(),
    i = ku(),
    s = dy(),
    o = Fr(),
    a = Tt(),
    u = fe(),
    f = Ln(),
    c = At(),
    d = Xn(),
    l = Mu(),
    g = bd(),
    h = new f.LruMap(128);
  async function b(v, _) {
    var F, H, R, O;
    const {
      account: E = v.account,
      chain: m = v.chain,
      accessList: p,
      authorizationList: y,
      blobs: j,
      data: P,
      gas: S,
      gasPrice: w,
      maxFeePerBlobGas: q,
      maxFeePerGas: T,
      maxPriorityFeePerGas: B,
      nonce: M,
      value: A,
      ...x
    } = _;
    if (typeof E > "u")
      throw new t.AccountNotFoundError({
        docsPath: "/docs/actions/wallet/sendTransaction",
      });
    const $ = E ? (0, e.parseAccount)(E) : null;
    try {
      (0, c.assertRequest)(_);
      const I = await (async () => {
        if (_.to) return _.to;
        if (y && y.length > 0)
          return await (0, r.recoverAuthorizationAddress)({
            authorization: y[0],
          }).catch(() => {
            throw new n.BaseError(
              "`to` is required. Could not infer from `authorizationList`.",
            );
          });
      })();
      if (($ == null ? void 0 : $.type) === "json-rpc" || $ === null) {
        let C;
        m !== null &&
          ((C = await (0, u.getAction)(v, d.getChainId, "getChainId")({})),
          (0, i.assertCurrentChain)({ currentChainId: C, chain: m }));
        const k =
            (R =
              (H = (F = v.chain) == null ? void 0 : F.formatters) == null
                ? void 0
                : H.transactionRequest) == null
              ? void 0
              : R.format,
          U = (k || a.formatTransactionRequest)({
            ...(0, o.extract)(x, { format: k }),
            accessList: p,
            authorizationList: y,
            blobs: j,
            chainId: C,
            data: P,
            from: $ == null ? void 0 : $.address,
            gas: S,
            gasPrice: w,
            maxFeePerBlobGas: q,
            maxFeePerGas: T,
            maxPriorityFeePerGas: B,
            nonce: M,
            to: I,
            value: A,
          }),
          L = h.get(v.uid),
          V = L ? "wallet_sendTransaction" : "eth_sendTransaction";
        try {
          return await v.request({ method: V, params: [U] }, { retryCount: 0 });
        } catch (G) {
          if (L === !1) throw G;
          const Z = G;
          if (
            Z.name === "InvalidInputRpcError" ||
            Z.name === "InvalidParamsRpcError" ||
            Z.name === "MethodNotFoundRpcError" ||
            Z.name === "MethodNotSupportedRpcError"
          )
            return await v
              .request(
                { method: "wallet_sendTransaction", params: [U] },
                { retryCount: 0 },
              )
              .then((ee) => (h.set(v.uid, !0), ee))
              .catch((ee) => {
                const J = ee;
                throw J.name === "MethodNotFoundRpcError" ||
                  J.name === "MethodNotSupportedRpcError"
                  ? (h.set(v.uid, !1), Z)
                  : J;
              });
          throw Z;
        }
      }
      if (($ == null ? void 0 : $.type) === "local") {
        const C = await (0, u.getAction)(
            v,
            l.prepareTransactionRequest,
            "prepareTransactionRequest",
          )({
            account: $,
            accessList: p,
            authorizationList: y,
            blobs: j,
            chain: m,
            data: P,
            gas: S,
            gasPrice: w,
            maxFeePerBlobGas: q,
            maxFeePerGas: T,
            maxPriorityFeePerGas: B,
            nonce: M,
            nonceManager: $.nonceManager,
            parameters: [...l.defaultParameters, "sidecars"],
            value: A,
            ...x,
            to: I,
          }),
          k =
            (O = m == null ? void 0 : m.serializers) == null
              ? void 0
              : O.transaction,
          z = await $.signTransaction(C, { serializer: k });
        return await (0, u.getAction)(
          v,
          g.sendRawTransaction,
          "sendRawTransaction",
        )({ serializedTransaction: z });
      }
      throw ($ == null ? void 0 : $.type) === "smart"
        ? new t.AccountTypeNotSupportedError({
            metaMessages: [
              "Consider using the `sendUserOperation` Action instead.",
            ],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart",
          })
        : new t.AccountTypeNotSupportedError({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: $ == null ? void 0 : $.type,
          });
    } catch (I) {
      throw I instanceof t.AccountTypeNotSupportedError
        ? I
        : (0, s.getTransactionError)(I, {
            ..._,
            account: $,
            chain: _.chain || void 0,
          });
    }
  }
  return $i;
}
var ub;
function fy() {
  if (ub) return ki;
  (ub = 1),
    Object.defineProperty(ki, "__esModule", { value: !0 }),
    (ki.writeContract = o);
  const e = Ae(),
    t = ao(),
    n = Xe(),
    r = Lt(),
    i = fe(),
    s = hd();
  async function o(a, u) {
    const {
      abi: f,
      account: c = a.account,
      address: d,
      args: l,
      dataSuffix: g,
      functionName: h,
      ...b
    } = u;
    if (typeof c > "u")
      throw new t.AccountNotFoundError({
        docsPath: "/docs/contract/writeContract",
      });
    const v = c ? (0, e.parseAccount)(c) : null,
      _ = (0, n.encodeFunctionData)({ abi: f, args: l, functionName: h });
    try {
      return await (0, i.getAction)(
        a,
        s.sendTransaction,
        "sendTransaction",
      )({
        data: `${_}${g ? g.replace("0x", "") : ""}`,
        to: d,
        account: v,
        ...b,
      });
    } catch (E) {
      throw (0, r.getContractError)(E, {
        abi: f,
        address: d,
        args: l,
        docsPath: "/docs/contract/writeContract",
        functionName: h,
        sender: v == null ? void 0 : v.address,
      });
    }
  }
  return ki;
}
var cb;
function q1() {
  if (cb) return pr;
  (cb = 1),
    Object.defineProperty(pr, "__esModule", { value: !0 }),
    (pr.getContract = u),
    (pr.getFunctionParameters = f),
    (pr.getEventParameters = c);
  const e = fe(),
    t = Gc(),
    n = ay(),
    r = ud(),
    i = Ot(),
    s = uy(),
    o = cy(),
    a = fy();
  function u({ abi: d, address: l, client: g }) {
    const h = g,
      [b, v] = h
        ? "public" in h && "wallet" in h
          ? [h.public, h.wallet]
          : "public" in h
            ? [h.public, void 0]
            : "wallet" in h
              ? [void 0, h.wallet]
              : [h, h]
        : [void 0, void 0],
      _ = b != null,
      E = v != null,
      m = {};
    let p = !1,
      y = !1,
      j = !1;
    for (const P of d)
      if (
        (P.type === "function"
          ? P.stateMutability === "view" || P.stateMutability === "pure"
            ? (p = !0)
            : (y = !0)
          : P.type === "event" && (j = !0),
        p && y && j)
      )
        break;
    return (
      _ &&
        (p &&
          (m.read = new Proxy(
            {},
            {
              get(P, S) {
                return (...w) => {
                  const { args: q, options: T } = f(w);
                  return (0, e.getAction)(
                    b,
                    i.readContract,
                    "readContract",
                  )({ abi: d, address: l, functionName: S, args: q, ...T });
                };
              },
            },
          )),
        y &&
          (m.simulate = new Proxy(
            {},
            {
              get(P, S) {
                return (...w) => {
                  const { args: q, options: T } = f(w);
                  return (0, e.getAction)(
                    b,
                    s.simulateContract,
                    "simulateContract",
                  )({ abi: d, address: l, functionName: S, args: q, ...T });
                };
              },
            },
          )),
        j &&
          ((m.createEventFilter = new Proxy(
            {},
            {
              get(P, S) {
                return (...w) => {
                  const q = d.find((M) => M.type === "event" && M.name === S),
                    { args: T, options: B } = c(w, q);
                  return (0, e.getAction)(
                    b,
                    t.createContractEventFilter,
                    "createContractEventFilter",
                  )({ abi: d, address: l, eventName: S, args: T, ...B });
                };
              },
            },
          )),
          (m.getEvents = new Proxy(
            {},
            {
              get(P, S) {
                return (...w) => {
                  const q = d.find((M) => M.type === "event" && M.name === S),
                    { args: T, options: B } = c(w, q);
                  return (0, e.getAction)(
                    b,
                    r.getContractEvents,
                    "getContractEvents",
                  )({ abi: d, address: l, eventName: S, args: T, ...B });
                };
              },
            },
          )),
          (m.watchEvent = new Proxy(
            {},
            {
              get(P, S) {
                return (...w) => {
                  const q = d.find((M) => M.type === "event" && M.name === S),
                    { args: T, options: B } = c(w, q);
                  return (0, e.getAction)(
                    b,
                    o.watchContractEvent,
                    "watchContractEvent",
                  )({ abi: d, address: l, eventName: S, args: T, ...B });
                };
              },
            },
          )))),
      E &&
        y &&
        (m.write = new Proxy(
          {},
          {
            get(P, S) {
              return (...w) => {
                const { args: q, options: T } = f(w);
                return (0, e.getAction)(
                  v,
                  a.writeContract,
                  "writeContract",
                )({ abi: d, address: l, functionName: S, args: q, ...T });
              };
            },
          },
        )),
      (_ || E) &&
        y &&
        (m.estimateGas = new Proxy(
          {},
          {
            get(P, S) {
              return (...w) => {
                const { args: q, options: T } = f(w),
                  B = b ?? v;
                return (0, e.getAction)(
                  B,
                  n.estimateContractGas,
                  "estimateContractGas",
                )({
                  abi: d,
                  address: l,
                  functionName: S,
                  args: q,
                  ...T,
                  account: T.account ?? v.account,
                });
              };
            },
          },
        )),
      (m.address = l),
      (m.abi = d),
      m
    );
  }
  function f(d) {
    const l = d.length && Array.isArray(d[0]),
      g = l ? d[0] : [],
      h = (l ? d[1] : d[0]) ?? {};
    return { args: g, options: h };
  }
  function c(d, l) {
    let g = !1;
    Array.isArray(d[0])
      ? (g = !0)
      : d.length === 1
        ? (g = l.inputs.some((v) => v.indexed))
        : d.length === 2 && (g = !0);
    const h = g ? d[0] : void 0,
      b = (g ? d[1] : d[0]) ?? {};
    return { args: h, options: b };
  }
  return pr;
}
var Tn = {},
  Di = {},
  db;
function ly() {
  if (db) return Di;
  (db = 1),
    Object.defineProperty(Di, "__esModule", { value: !0 }),
    (Di.uid = r);
  const e = 256;
  let t = e,
    n;
  function r(i = 11) {
    if (!n || t + i > e * 2) {
      (n = ""), (t = 0);
      for (let s = 0; s < e; s++)
        n += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
    }
    return n.substring(t, t++ + i);
  }
  return Di;
}
var fb;
function $u() {
  if (fb) return Tn;
  (fb = 1),
    Object.defineProperty(Tn, "__esModule", { value: !0 }),
    (Tn.createClient = n),
    (Tn.rpcSchema = r);
  const e = Ae(),
    t = ly();
  function n(i) {
    const {
        batch: s,
        cacheTime: o = i.pollingInterval ?? 4e3,
        ccipRead: a,
        key: u = "base",
        name: f = "Base Client",
        pollingInterval: c = 4e3,
        type: d = "base",
      } = i,
      l = i.chain,
      g = i.account ? (0, e.parseAccount)(i.account) : void 0,
      {
        config: h,
        request: b,
        value: v,
      } = i.transport({ chain: l, pollingInterval: c }),
      _ = { ...h, ...v },
      E = {
        account: g,
        batch: s,
        cacheTime: o,
        ccipRead: a,
        chain: l,
        key: u,
        name: f,
        pollingInterval: c,
        request: b,
        transport: _,
        type: d,
        uid: (0, t.uid)(),
      };
    function m(p) {
      return (y) => {
        const j = y(p);
        for (const S in E) delete j[S];
        const P = { ...p, ...j };
        return Object.assign(P, { extend: m(P) });
      };
    }
    return Object.assign(E, { extend: m(E) });
  }
  function r() {
    return null;
  }
  return Tn;
}
var Ui = {},
  Gi = {},
  An = {},
  Bc = {},
  lb;
function x1() {
  return (
    lb ||
      ((lb = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.promiseCache = void 0),
          (e.withDedupe = n);
        const t = Ln();
        e.promiseCache = new t.LruMap(8192);
        function n(r, { enabled: i = !0, id: s }) {
          if (!i || !s) return r();
          if (e.promiseCache.get(s)) return e.promiseCache.get(s);
          const o = r().finally(() => e.promiseCache.delete(s));
          return e.promiseCache.set(s, o), o;
        }
      })(Bc)),
    Bc
  );
}
var Vi = {},
  mb;
function gd() {
  if (mb) return Vi;
  (mb = 1),
    Object.defineProperty(Vi, "__esModule", { value: !0 }),
    (Vi.withRetry = t);
  const e = md();
  function t(
    n,
    { delay: r = 100, retryCount: i = 2, shouldRetry: s = () => !0 } = {},
  ) {
    return new Promise((o, a) => {
      const u = async ({ count: f = 0 } = {}) => {
        const c = async ({ error: d }) => {
          const l = typeof r == "function" ? r({ count: f, error: d }) : r;
          l && (await (0, e.wait)(l)), u({ count: f + 1 });
        };
        try {
          const d = await n();
          o(d);
        } catch (d) {
          if (f < i && (await s({ count: f, error: d })))
            return c({ error: d });
          a(d);
        }
      };
      u();
    });
  }
  return Vi;
}
var bb;
function my() {
  if (bb) return An;
  (bb = 1),
    Object.defineProperty(An, "__esModule", { value: !0 }),
    (An.buildRequest = u),
    (An.shouldRetry = f);
  const e = oe(),
    t = Qe(),
    n = br(),
    r = Q(),
    i = Oe(),
    s = x1(),
    o = gd(),
    a = Se();
  function u(c, d = {}) {
    return async (l, g = {}) => {
      const {
          dedupe: h = !1,
          retryDelay: b = 150,
          retryCount: v = 3,
          uid: _,
        } = { ...d, ...g },
        E = h
          ? (0, i.keccak256)((0, r.stringToHex)(`${_}.${(0, a.stringify)(l)}`))
          : void 0;
      return (0, s.withDedupe)(
        () =>
          (0, o.withRetry)(
            async () => {
              try {
                return await c(l);
              } catch (m) {
                const p = m;
                switch (p.code) {
                  case n.ParseRpcError.code:
                    throw new n.ParseRpcError(p);
                  case n.InvalidRequestRpcError.code:
                    throw new n.InvalidRequestRpcError(p);
                  case n.MethodNotFoundRpcError.code:
                    throw new n.MethodNotFoundRpcError(p, { method: l.method });
                  case n.InvalidParamsRpcError.code:
                    throw new n.InvalidParamsRpcError(p);
                  case n.InternalRpcError.code:
                    throw new n.InternalRpcError(p);
                  case n.InvalidInputRpcError.code:
                    throw new n.InvalidInputRpcError(p);
                  case n.ResourceNotFoundRpcError.code:
                    throw new n.ResourceNotFoundRpcError(p);
                  case n.ResourceUnavailableRpcError.code:
                    throw new n.ResourceUnavailableRpcError(p);
                  case n.TransactionRejectedRpcError.code:
                    throw new n.TransactionRejectedRpcError(p);
                  case n.MethodNotSupportedRpcError.code:
                    throw new n.MethodNotSupportedRpcError(p, {
                      method: l.method,
                    });
                  case n.LimitExceededRpcError.code:
                    throw new n.LimitExceededRpcError(p);
                  case n.JsonRpcVersionUnsupportedError.code:
                    throw new n.JsonRpcVersionUnsupportedError(p);
                  case n.UserRejectedRequestError.code:
                    throw new n.UserRejectedRequestError(p);
                  case n.UnauthorizedProviderError.code:
                    throw new n.UnauthorizedProviderError(p);
                  case n.UnsupportedProviderMethodError.code:
                    throw new n.UnsupportedProviderMethodError(p);
                  case n.ProviderDisconnectedError.code:
                    throw new n.ProviderDisconnectedError(p);
                  case n.ChainDisconnectedError.code:
                    throw new n.ChainDisconnectedError(p);
                  case n.SwitchChainError.code:
                    throw new n.SwitchChainError(p);
                  case 5e3:
                    throw new n.UserRejectedRequestError(p);
                  default:
                    throw m instanceof e.BaseError
                      ? m
                      : new n.UnknownRpcError(p);
                }
              }
            },
            {
              delay: ({ count: m, error: p }) => {
                var y;
                if (p && p instanceof t.HttpRequestError) {
                  const j =
                    (y = p == null ? void 0 : p.headers) == null
                      ? void 0
                      : y.get("Retry-After");
                  if (j != null && j.match(/\d/))
                    return Number.parseInt(j) * 1e3;
                }
                return ~~(1 << m) * b;
              },
              retryCount: v,
              shouldRetry: ({ error: m }) => f(m),
            },
          ),
        { enabled: h, id: E },
      );
    };
  }
  function f(c) {
    return "code" in c && typeof c.code == "number"
      ? c.code === -1 ||
          c.code === n.LimitExceededRpcError.code ||
          c.code === n.InternalRpcError.code
      : c instanceof t.HttpRequestError && c.status
        ? c.status === 403 ||
          c.status === 408 ||
          c.status === 413 ||
          c.status === 429 ||
          c.status === 500 ||
          c.status === 502 ||
          c.status === 503 ||
          c.status === 504
        : !0;
  }
  return An;
}
var hb;
function so() {
  if (hb) return Gi;
  (hb = 1),
    Object.defineProperty(Gi, "__esModule", { value: !0 }),
    (Gi.createTransport = n);
  const e = my(),
    t = ly();
  function n(
    {
      key: r,
      name: i,
      request: s,
      retryCount: o = 3,
      retryDelay: a = 150,
      timeout: u,
      type: f,
    },
    c,
  ) {
    const d = (0, t.uid)();
    return {
      config: {
        key: r,
        name: i,
        request: s,
        retryCount: o,
        retryDelay: a,
        timeout: u,
        type: f,
      },
      request: (0, e.buildRequest)(s, { retryCount: o, retryDelay: a, uid: d }),
      value: c,
    };
  }
  return Gi;
}
var gb;
function M1() {
  if (gb) return Ui;
  (gb = 1),
    Object.defineProperty(Ui, "__esModule", { value: !0 }),
    (Ui.custom = t);
  const e = so();
  function t(n, r = {}) {
    const { key: i = "custom", name: s = "Custom Provider", retryDelay: o } = r;
    return ({ retryCount: a }) =>
      (0, e.createTransport)({
        key: i,
        name: s,
        request: n.request.bind(n),
        retryCount: r.retryCount ?? a,
        retryDelay: o,
        type: "custom",
      });
  }
  return Ui;
}
var Sn = {},
  yb;
function F1() {
  if (yb) return Sn;
  (yb = 1),
    Object.defineProperty(Sn, "__esModule", { value: !0 }),
    (Sn.fallback = r),
    (Sn.rankTransports = s);
  const e = br(),
    t = md(),
    n = so();
  function r(o, a = {}) {
    const {
      key: u = "fallback",
      name: f = "Fallback",
      rank: c = !1,
      retryCount: d,
      retryDelay: l,
    } = a;
    return ({ chain: g, pollingInterval: h = 4e3, timeout: b, ...v }) => {
      let _ = o,
        E = () => {};
      const m = (0, n.createTransport)(
        {
          key: u,
          name: f,
          async request({ method: p, params: y }) {
            const j = async (P = 0) => {
              const S = _[P]({ ...v, chain: g, retryCount: 0, timeout: b });
              try {
                const w = await S.request({ method: p, params: y });
                return (
                  E({
                    method: p,
                    params: y,
                    response: w,
                    transport: S,
                    status: "success",
                  }),
                  w
                );
              } catch (w) {
                if (
                  (E({
                    error: w,
                    method: p,
                    params: y,
                    transport: S,
                    status: "error",
                  }),
                  i(w) || P === _.length - 1)
                )
                  throw w;
                return j(P + 1);
              }
            };
            return j();
          },
          retryCount: d,
          retryDelay: l,
          type: "fallback",
        },
        {
          onResponse: (p) => (E = p),
          transports: _.map((p) => p({ chain: g, retryCount: 0 })),
        },
      );
      if (c) {
        const p = typeof c == "object" ? c : {};
        s({
          chain: g,
          interval: p.interval ?? h,
          onTransports: (y) => (_ = y),
          ping: p.ping,
          sampleCount: p.sampleCount,
          timeout: p.timeout,
          transports: _,
          weights: p.weights,
        });
      }
      return m;
    };
  }
  function i(o) {
    return (
      "code" in o &&
      typeof o.code == "number" &&
      (o.code === e.TransactionRejectedRpcError.code ||
        o.code === e.UserRejectedRequestError.code ||
        o.code === 5e3)
    );
  }
  function s({
    chain: o,
    interval: a = 4e3,
    onTransports: u,
    ping: f,
    sampleCount: c = 10,
    timeout: d = 1e3,
    transports: l,
    weights: g = {},
  }) {
    const { stability: h = 0.7, latency: b = 0.3 } = g,
      v = [],
      _ = async () => {
        const E = await Promise.all(
          l.map(async (y) => {
            const j = y({ chain: o, retryCount: 0, timeout: d }),
              P = Date.now();
            let S, w;
            try {
              await (f
                ? f({ transport: j })
                : j.request({ method: "net_listening" })),
                (w = 1);
            } catch {
              w = 0;
            } finally {
              S = Date.now();
            }
            return { latency: S - P, success: w };
          }),
        );
        v.push(E), v.length > c && v.shift();
        const m = Math.max(
            ...v.map((y) => Math.max(...y.map(({ latency: j }) => j))),
          ),
          p = l
            .map((y, j) => {
              const P = v.map((B) => B[j].latency),
                w = 1 - P.reduce((B, M) => B + M, 0) / P.length / m,
                q = v.map((B) => B[j].success),
                T = q.reduce((B, M) => B + M, 0) / q.length;
              return T === 0 ? [0, j] : [b * w + h * T, j];
            })
            .sort((y, j) => j[0] - y[0]);
        u(p.map(([, y]) => l[y])), await (0, t.wait)(a), _();
      };
    _();
  }
  return Sn;
}
var Wi = {},
  In = {},
  pb;
function yd() {
  if (pb) return In;
  (pb = 1),
    Object.defineProperty(In, "__esModule", { value: !0 }),
    (In.UrlRequiredError = void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor() {
      super(
        "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
        { docsPath: "/docs/clients/intro", name: "UrlRequiredError" },
      );
    }
  }
  return (In.UrlRequiredError = t), In;
}
var Ki = {},
  Zi = {},
  _b;
function pd() {
  if (_b) return Zi;
  (_b = 1),
    Object.defineProperty(Zi, "__esModule", { value: !0 }),
    (Zi.withTimeout = e);
  function e(
    t,
    { errorInstance: n = new Error("timed out"), timeout: r, signal: i },
  ) {
    return new Promise((s, o) => {
      (async () => {
        let a;
        try {
          const u = new AbortController();
          r > 0 &&
            (a = setTimeout(() => {
              i ? u.abort() : o(n);
            }, r)),
            s(await t({ signal: (u == null ? void 0 : u.signal) || null }));
        } catch (u) {
          (u == null ? void 0 : u.name) === "AbortError" && o(n), o(u);
        } finally {
          clearTimeout(a);
        }
      })();
    });
  }
  return Zi;
}
var Rn = {},
  vb;
function by() {
  if (vb) return Rn;
  (vb = 1),
    Object.defineProperty(Rn, "__esModule", { value: !0 }),
    (Rn.idCache = void 0);
  function e() {
    return {
      current: 0,
      take() {
        return this.current++;
      },
      reset() {
        this.current = 0;
      },
    };
  }
  return (Rn.idCache = e()), Rn;
}
var Eb;
function _d() {
  if (Eb) return Ki;
  (Eb = 1),
    Object.defineProperty(Ki, "__esModule", { value: !0 }),
    (Ki.getHttpRpcClient = i);
  const e = Qe(),
    t = pd(),
    n = Se(),
    r = by();
  function i(s, o = {}) {
    return {
      async request(a) {
        var v;
        const {
            body: u,
            onRequest: f = o.onRequest,
            onResponse: c = o.onResponse,
            timeout: d = o.timeout ?? 1e4,
          } = a,
          l = { ...(o.fetchOptions ?? {}), ...(a.fetchOptions ?? {}) },
          { headers: g, method: h, signal: b } = l;
        try {
          const _ = await (0, t.withTimeout)(
            async ({ signal: m }) => {
              const p = {
                  ...l,
                  body: Array.isArray(u)
                    ? (0, n.stringify)(
                        u.map((S) => ({
                          jsonrpc: "2.0",
                          id: S.id ?? r.idCache.take(),
                          ...S,
                        })),
                      )
                    : (0, n.stringify)({
                        jsonrpc: "2.0",
                        id: u.id ?? r.idCache.take(),
                        ...u,
                      }),
                  headers: { "Content-Type": "application/json", ...g },
                  method: h || "POST",
                  signal: b || (d > 0 ? m : null),
                },
                y = new Request(s, p),
                j = (await (f == null ? void 0 : f(y, p))) ?? { ...p, url: s };
              return await fetch(j.url ?? s, j);
            },
            {
              errorInstance: new e.TimeoutError({ body: u, url: s }),
              timeout: d,
              signal: !0,
            },
          );
          c && (await c(_));
          let E;
          if (
            (v = _.headers.get("Content-Type")) != null &&
            v.startsWith("application/json")
          )
            E = await _.json();
          else {
            E = await _.text();
            try {
              E = JSON.parse(E || "{}");
            } catch (m) {
              if (_.ok) throw m;
              E = { error: E };
            }
          }
          if (!_.ok)
            throw new e.HttpRequestError({
              body: u,
              details: (0, n.stringify)(E.error) || _.statusText,
              headers: _.headers,
              status: _.status,
              url: s,
            });
          return E;
        } catch (_) {
          throw _ instanceof e.HttpRequestError || _ instanceof e.TimeoutError
            ? _
            : new e.HttpRequestError({ body: u, cause: _, url: s });
        }
      },
    };
  }
  return Ki;
}
var jb;
function H1() {
  if (jb) return Wi;
  (jb = 1),
    Object.defineProperty(Wi, "__esModule", { value: !0 }),
    (Wi.http = s);
  const e = Qe(),
    t = yd(),
    n = fd(),
    r = _d(),
    i = so();
  function s(o, a = {}) {
    const {
      batch: u,
      fetchOptions: f,
      key: c = "http",
      name: d = "HTTP JSON-RPC",
      onFetchRequest: l,
      onFetchResponse: g,
      retryDelay: h,
    } = a;
    return ({ chain: b, retryCount: v, timeout: _ }) => {
      const { batchSize: E = 1e3, wait: m = 0 } = typeof u == "object" ? u : {},
        p = a.retryCount ?? v,
        y = _ ?? a.timeout ?? 1e4,
        j = o || (b == null ? void 0 : b.rpcUrls.default.http[0]);
      if (!j) throw new t.UrlRequiredError();
      const P = (0, r.getHttpRpcClient)(j, {
        fetchOptions: f,
        onRequest: l,
        onResponse: g,
        timeout: y,
      });
      return (0, i.createTransport)(
        {
          key: c,
          name: d,
          async request({ method: S, params: w }) {
            const q = { method: S, params: w },
              { schedule: T } = (0, n.createBatchScheduler)({
                id: j,
                wait: m,
                shouldSplitBatch(x) {
                  return x.length > E;
                },
                fn: (x) => P.request({ body: x }),
                sort: (x, $) => x.id - $.id,
              }),
              B = async (x) => (u ? T(x) : [await P.request({ body: x })]),
              [{ error: M, result: A }] = await B(q);
            if (M) throw new e.RpcRequestError({ body: q, error: M, url: j });
            return A;
          },
          retryCount: p,
          retryDelay: h,
          timeout: y,
          type: "http",
        },
        { fetchOptions: f, url: j },
      );
    };
  }
  return Wi;
}
var Ji = {},
  Yi = {},
  Xi = {},
  Qi = {},
  Pb;
function vd() {
  if (Pb) return Qi;
  (Pb = 1),
    Object.defineProperty(Qi, "__esModule", { value: !0 }),
    (Qi.isNullUniversalResolverError = r);
  const e = Vc(),
    t = oe(),
    n = zt();
  function r(i, s) {
    var a, u, f, c, d, l;
    if (!(i instanceof t.BaseError)) return !1;
    const o = i.walk((g) => g instanceof n.ContractFunctionRevertedError);
    return o instanceof n.ContractFunctionRevertedError
      ? !!(
          ((a = o.data) == null ? void 0 : a.errorName) ===
            "ResolverNotFound" ||
          ((u = o.data) == null ? void 0 : u.errorName) ===
            "ResolverWildcardNotSupported" ||
          ((f = o.data) == null ? void 0 : f.errorName) ===
            "ResolverNotContract" ||
          ((c = o.data) == null ? void 0 : c.errorName) === "ResolverError" ||
          ((d = o.data) == null ? void 0 : d.errorName) === "HttpError" ||
          ((l = o.reason) != null &&
            l.includes(
              "Wildcard on non-extended resolvers is not supported",
            )) ||
          (s === "reverse" && o.reason === e.panicReasons[50])
        )
      : !1;
  }
  return Qi;
}
var ea = {},
  ta = {},
  wb;
function hy() {
  if (wb) return ta;
  (wb = 1),
    Object.defineProperty(ta, "__esModule", { value: !0 }),
    (ta.encodedLabelToLabelhash = t);
  const e = Re();
  function t(n) {
    if (n.length !== 66 || n.indexOf("[") !== 0 || n.indexOf("]") !== 65)
      return null;
    const r = `0x${n.slice(1, 65)}`;
    return (0, e.isHex)(r) ? r : null;
  }
  return ta;
}
var Tb;
function Ed() {
  if (Tb) return ea;
  (Tb = 1),
    Object.defineProperty(ea, "__esModule", { value: !0 }),
    (ea.namehash = s);
  const e = Be(),
    t = le(),
    n = Q(),
    r = Oe(),
    i = hy();
  function s(o) {
    let a = new Uint8Array(32).fill(0);
    if (!o) return (0, n.bytesToHex)(a);
    const u = o.split(".");
    for (let f = u.length - 1; f >= 0; f -= 1) {
      const c = (0, i.encodedLabelToLabelhash)(u[f]),
        d = c
          ? (0, t.toBytes)(c)
          : (0, r.keccak256)((0, t.stringToBytes)(u[f]), "bytes");
      a = (0, r.keccak256)((0, e.concat)([a, d]), "bytes");
    }
    return (0, n.bytesToHex)(a);
  }
  return ea;
}
var ra = {},
  na = {},
  Ab;
function k1() {
  if (Ab) return na;
  (Ab = 1),
    Object.defineProperty(na, "__esModule", { value: !0 }),
    (na.encodeLabelhash = e);
  function e(t) {
    return `[${t.slice(2)}]`;
  }
  return na;
}
var oa = {},
  Sb;
function gy() {
  if (Sb) return oa;
  (Sb = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa.labelhash = i);
  const e = le(),
    t = Q(),
    n = Oe(),
    r = hy();
  function i(s) {
    const o = new Uint8Array(32).fill(0);
    return s
      ? (0, r.encodedLabelToLabelhash)(s) ||
          (0, n.keccak256)((0, e.stringToBytes)(s))
      : (0, t.bytesToHex)(o);
  }
  return oa;
}
var Ib;
function Nu() {
  if (Ib) return ra;
  (Ib = 1),
    Object.defineProperty(ra, "__esModule", { value: !0 }),
    (ra.packetToBytes = r);
  const e = le(),
    t = k1(),
    n = gy();
  function r(i) {
    const s = i.replace(/^\.|\.$/gm, "");
    if (s.length === 0) return new Uint8Array(1);
    const o = new Uint8Array((0, e.stringToBytes)(s).byteLength + 2);
    let a = 0;
    const u = s.split(".");
    for (let f = 0; f < u.length; f++) {
      let c = (0, e.stringToBytes)(u[f]);
      c.byteLength > 255 &&
        (c = (0, e.stringToBytes)(
          (0, t.encodeLabelhash)((0, n.labelhash)(u[f])),
        )),
        (o[a] = c.length),
        o.set(c, a + 1),
        (a += c.length + 1);
    }
    return o.byteLength !== a + 1 ? o.slice(0, a + 1) : o;
  }
  return ra;
}
var Rb;
function $1() {
  if (Rb) return Xi;
  (Rb = 1),
    Object.defineProperty(Xi, "__esModule", { value: !0 }),
    (Xi.getEnsAddress = d);
  const e = hr(),
    t = Rt(),
    n = Xe(),
    r = Gt(),
    i = $t(),
    s = Q(),
    o = vd(),
    a = Ed(),
    u = Nu(),
    f = fe(),
    c = Ot();
  async function d(
    l,
    {
      blockNumber: g,
      blockTag: h,
      coinType: b,
      name: v,
      gatewayUrls: _,
      strict: E,
      universalResolverAddress: m,
    },
  ) {
    let p = m;
    if (!p) {
      if (!l.chain)
        throw new Error(
          "client chain not configured. universalResolverAddress is required.",
        );
      p = (0, r.getChainContractAddress)({
        blockNumber: g,
        chain: l.chain,
        contract: "ensUniversalResolver",
      });
    }
    try {
      const y = (0, n.encodeFunctionData)({
          abi: e.addressResolverAbi,
          functionName: "addr",
          ...(b != null
            ? { args: [(0, a.namehash)(v), BigInt(b)] }
            : { args: [(0, a.namehash)(v)] }),
        }),
        j = {
          address: p,
          abi: e.universalResolverResolveAbi,
          functionName: "resolve",
          args: [(0, s.toHex)((0, u.packetToBytes)(v)), y],
          blockNumber: g,
          blockTag: h,
        },
        P = (0, f.getAction)(l, c.readContract, "readContract"),
        S = _ ? await P({ ...j, args: [...j.args, _] }) : await P(j);
      if (S[0] === "0x") return null;
      const w = (0, t.decodeFunctionResult)({
        abi: e.addressResolverAbi,
        args: b != null ? [(0, a.namehash)(v), BigInt(b)] : void 0,
        functionName: "addr",
        data: S[0],
      });
      return w === "0x" || (0, i.trim)(w) === "0x00" ? null : w;
    } catch (y) {
      if (E) throw y;
      if ((0, o.isNullUniversalResolverError)(y, "resolve")) return null;
      throw y;
    }
  }
  return Xi;
}
var ia = {},
  aa = {},
  We = {},
  Ke = {},
  Ob;
function yy() {
  if (Ob) return Ke;
  (Ob = 1),
    Object.defineProperty(Ke, "__esModule", { value: !0 }),
    (Ke.EnsAvatarUnsupportedNamespaceError =
      Ke.EnsAvatarUriResolutionError =
      Ke.EnsAvatarInvalidNftUriError =
      Ke.EnsAvatarInvalidMetadataError =
        void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor({ data: o }) {
      super(
        "Unable to extract image from metadata. The metadata may be malformed or invalid.",
        {
          metaMessages: [
            "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
            "",
            `Provided data: ${JSON.stringify(o)}`,
          ],
          name: "EnsAvatarInvalidMetadataError",
        },
      );
    }
  }
  Ke.EnsAvatarInvalidMetadataError = t;
  class n extends e.BaseError {
    constructor({ reason: o }) {
      super(`ENS NFT avatar URI is invalid. ${o}`, {
        name: "EnsAvatarInvalidNftUriError",
      });
    }
  }
  Ke.EnsAvatarInvalidNftUriError = n;
  class r extends e.BaseError {
    constructor({ uri: o }) {
      super(
        `Unable to resolve ENS avatar URI "${o}". The URI may be malformed, invalid, or does not respond with a valid image.`,
        { name: "EnsAvatarUriResolutionError" },
      );
    }
  }
  Ke.EnsAvatarUriResolutionError = r;
  class i extends e.BaseError {
    constructor({ namespace: o }) {
      super(
        `ENS NFT avatar namespace "${o}" is not supported. Must be "erc721" or "erc1155".`,
        { name: "EnsAvatarUnsupportedNamespaceError" },
      );
    }
  }
  return (Ke.EnsAvatarUnsupportedNamespaceError = i), Ke;
}
var Bb;
function N1() {
  if (Bb) return We;
  (Bb = 1),
    Object.defineProperty(We, "__esModule", { value: !0 }),
    (We.isImageUri = o),
    (We.getGateway = a),
    (We.resolveAvatarUri = u),
    (We.getJsonImage = f),
    (We.getMetadataAvatarUri = c),
    (We.parseAvatarUri = d),
    (We.parseNftUri = l),
    (We.getNftTokenUri = g);
  const e = Ot(),
    t = yy(),
    n =
      /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
    r =
      /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
    i = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
    s = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
  async function o(h) {
    try {
      const b = await fetch(h, { method: "HEAD" });
      if (b.status === 200) {
        const v = b.headers.get("content-type");
        return v == null ? void 0 : v.startsWith("image/");
      }
      return !1;
    } catch (b) {
      return (typeof b == "object" && typeof b.response < "u") ||
        !globalThis.hasOwnProperty("Image")
        ? !1
        : new Promise((v) => {
            const _ = new Image();
            (_.onload = () => {
              v(!0);
            }),
              (_.onerror = () => {
                v(!1);
              }),
              (_.src = h);
          });
    }
  }
  function a(h, b) {
    return h ? (h.endsWith("/") ? h.slice(0, -1) : h) : b;
  }
  function u({ uri: h, gatewayUrls: b }) {
    const v = i.test(h);
    if (v) return { uri: h, isOnChain: !0, isEncoded: v };
    const _ = a(b == null ? void 0 : b.ipfs, "https://ipfs.io"),
      E = a(b == null ? void 0 : b.arweave, "https://arweave.net"),
      m = h.match(n),
      {
        protocol: p,
        subpath: y,
        target: j,
        subtarget: P = "",
      } = (m == null ? void 0 : m.groups) || {},
      S = p === "ipns:/" || y === "ipns/",
      w = p === "ipfs:/" || y === "ipfs/" || r.test(h);
    if (h.startsWith("http") && !S && !w) {
      let T = h;
      return (
        b != null &&
          b.arweave &&
          (T = h.replace(
            /https:\/\/arweave.net/g,
            b == null ? void 0 : b.arweave,
          )),
        { uri: T, isOnChain: !1, isEncoded: !1 }
      );
    }
    if ((S || w) && j)
      return {
        uri: `${_}/${S ? "ipns" : "ipfs"}/${j}${P}`,
        isOnChain: !1,
        isEncoded: !1,
      };
    if (p === "ar:/" && j)
      return { uri: `${E}/${j}${P || ""}`, isOnChain: !1, isEncoded: !1 };
    let q = h.replace(s, "");
    if (
      (q.startsWith("<svg") && (q = `data:image/svg+xml;base64,${btoa(q)}`),
      q.startsWith("data:") || q.startsWith("{"))
    )
      return { uri: q, isOnChain: !0, isEncoded: !1 };
    throw new t.EnsAvatarUriResolutionError({ uri: h });
  }
  function f(h) {
    if (
      typeof h != "object" ||
      (!("image" in h) && !("image_url" in h) && !("image_data" in h))
    )
      throw new t.EnsAvatarInvalidMetadataError({ data: h });
    return h.image || h.image_url || h.image_data;
  }
  async function c({ gatewayUrls: h, uri: b }) {
    try {
      const v = await fetch(b).then((E) => E.json());
      return await d({ gatewayUrls: h, uri: f(v) });
    } catch {
      throw new t.EnsAvatarUriResolutionError({ uri: b });
    }
  }
  async function d({ gatewayUrls: h, uri: b }) {
    const { uri: v, isOnChain: _ } = u({ uri: b, gatewayUrls: h });
    if (_ || (await o(v))) return v;
    throw new t.EnsAvatarUriResolutionError({ uri: b });
  }
  function l(h) {
    let b = h;
    b.startsWith("did:nft:") &&
      (b = b.replace("did:nft:", "").replace(/_/g, "/"));
    const [v, _, E] = b.split("/"),
      [m, p] = v.split(":"),
      [y, j] = _.split(":");
    if (!m || m.toLowerCase() !== "eip155")
      throw new t.EnsAvatarInvalidNftUriError({
        reason: "Only EIP-155 supported",
      });
    if (!p)
      throw new t.EnsAvatarInvalidNftUriError({ reason: "Chain ID not found" });
    if (!j)
      throw new t.EnsAvatarInvalidNftUriError({
        reason: "Contract address not found",
      });
    if (!E)
      throw new t.EnsAvatarInvalidNftUriError({ reason: "Token ID not found" });
    if (!y)
      throw new t.EnsAvatarInvalidNftUriError({
        reason: "ERC namespace not found",
      });
    return {
      chainID: Number.parseInt(p),
      namespace: y.toLowerCase(),
      contractAddress: j,
      tokenID: E,
    };
  }
  async function g(h, { nft: b }) {
    if (b.namespace === "erc721")
      return (0, e.readContract)(h, {
        address: b.contractAddress,
        abi: [
          {
            name: "tokenURI",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "tokenId", type: "uint256" }],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        functionName: "tokenURI",
        args: [BigInt(b.tokenID)],
      });
    if (b.namespace === "erc1155")
      return (0, e.readContract)(h, {
        address: b.contractAddress,
        abi: [
          {
            name: "uri",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "_id", type: "uint256" }],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        functionName: "uri",
        args: [BigInt(b.tokenID)],
      });
    throw new t.EnsAvatarUnsupportedNamespaceError({ namespace: b.namespace });
  }
  return We;
}
var Cb;
function z1() {
  if (Cb) return aa;
  (Cb = 1),
    Object.defineProperty(aa, "__esModule", { value: !0 }),
    (aa.parseAvatarRecord = t);
  const e = N1();
  async function t(r, { gatewayUrls: i, record: s }) {
    return /eip155:/i.test(s)
      ? n(r, { gatewayUrls: i, record: s })
      : (0, e.parseAvatarUri)({ uri: s, gatewayUrls: i });
  }
  async function n(r, { gatewayUrls: i, record: s }) {
    const o = (0, e.parseNftUri)(s),
      a = await (0, e.getNftTokenUri)(r, { nft: o }),
      {
        uri: u,
        isOnChain: f,
        isEncoded: c,
      } = (0, e.resolveAvatarUri)({ uri: a, gatewayUrls: i });
    if (
      f &&
      (u.includes("data:application/json;base64,") || u.startsWith("{"))
    ) {
      const l = c ? atob(u.replace("data:application/json;base64,", "")) : u,
        g = JSON.parse(l);
      return (0, e.parseAvatarUri)({
        uri: (0, e.getJsonImage)(g),
        gatewayUrls: i,
      });
    }
    let d = o.tokenID;
    return (
      o.namespace === "erc1155" && (d = d.replace("0x", "").padStart(64, "0")),
      (0, e.getMetadataAvatarUri)({
        gatewayUrls: i,
        uri: u.replace(/(?:0x)?{id}/, d),
      })
    );
  }
  return aa;
}
var sa = {},
  qb;
function py() {
  if (qb) return sa;
  (qb = 1),
    Object.defineProperty(sa, "__esModule", { value: !0 }),
    (sa.getEnsText = c);
  const e = hr(),
    t = Rt(),
    n = Xe(),
    r = Gt(),
    i = Q(),
    s = vd(),
    o = Ed(),
    a = Nu(),
    u = fe(),
    f = Ot();
  async function c(
    d,
    {
      blockNumber: l,
      blockTag: g,
      name: h,
      key: b,
      gatewayUrls: v,
      strict: _,
      universalResolverAddress: E,
    },
  ) {
    let m = E;
    if (!m) {
      if (!d.chain)
        throw new Error(
          "client chain not configured. universalResolverAddress is required.",
        );
      m = (0, r.getChainContractAddress)({
        blockNumber: l,
        chain: d.chain,
        contract: "ensUniversalResolver",
      });
    }
    try {
      const p = {
          address: m,
          abi: e.universalResolverResolveAbi,
          functionName: "resolve",
          args: [
            (0, i.toHex)((0, a.packetToBytes)(h)),
            (0, n.encodeFunctionData)({
              abi: e.textResolverAbi,
              functionName: "text",
              args: [(0, o.namehash)(h), b],
            }),
          ],
          blockNumber: l,
          blockTag: g,
        },
        y = (0, u.getAction)(d, f.readContract, "readContract"),
        j = v ? await y({ ...p, args: [...p.args, v] }) : await y(p);
      if (j[0] === "0x") return null;
      const P = (0, t.decodeFunctionResult)({
        abi: e.textResolverAbi,
        functionName: "text",
        data: j[0],
      });
      return P === "" ? null : P;
    } catch (p) {
      if (_) throw p;
      if ((0, s.isNullUniversalResolverError)(p, "resolve")) return null;
      throw p;
    }
  }
  return sa;
}
var xb;
function L1() {
  if (xb) return ia;
  (xb = 1),
    Object.defineProperty(ia, "__esModule", { value: !0 }),
    (ia.getEnsAvatar = r);
  const e = z1(),
    t = fe(),
    n = py();
  async function r(
    i,
    {
      blockNumber: s,
      blockTag: o,
      assetGatewayUrls: a,
      name: u,
      gatewayUrls: f,
      strict: c,
      universalResolverAddress: d,
    },
  ) {
    const l = await (0, t.getAction)(
      i,
      n.getEnsText,
      "getEnsText",
    )({
      blockNumber: s,
      blockTag: o,
      key: "avatar",
      name: u,
      universalResolverAddress: d,
      gatewayUrls: f,
      strict: c,
    });
    if (!l) return null;
    try {
      return await (0, e.parseAvatarRecord)(i, { record: l, gatewayUrls: a });
    } catch {
      return null;
    }
  }
  return ia;
}
var ua = {},
  Mb;
function D1() {
  if (Mb) return ua;
  (Mb = 1),
    Object.defineProperty(ua, "__esModule", { value: !0 }),
    (ua.getEnsName = a);
  const e = hr(),
    t = Gt(),
    n = Q(),
    r = vd(),
    i = Nu(),
    s = fe(),
    o = Ot();
  async function a(
    u,
    {
      address: f,
      blockNumber: c,
      blockTag: d,
      gatewayUrls: l,
      strict: g,
      universalResolverAddress: h,
    },
  ) {
    let b = h;
    if (!b) {
      if (!u.chain)
        throw new Error(
          "client chain not configured. universalResolverAddress is required.",
        );
      b = (0, t.getChainContractAddress)({
        blockNumber: c,
        chain: u.chain,
        contract: "ensUniversalResolver",
      });
    }
    const v = `${f.toLowerCase().substring(2)}.addr.reverse`;
    try {
      const _ = {
          address: b,
          abi: e.universalResolverReverseAbi,
          functionName: "reverse",
          args: [(0, n.toHex)((0, i.packetToBytes)(v))],
          blockNumber: c,
          blockTag: d,
        },
        E = (0, s.getAction)(u, o.readContract, "readContract"),
        [m, p] = l ? await E({ ..._, args: [..._.args, l] }) : await E(_);
      return f.toLowerCase() !== p.toLowerCase() ? null : m;
    } catch (_) {
      if (g) throw _;
      if ((0, r.isNullUniversalResolverError)(_, "reverse")) return null;
      throw _;
    }
  }
  return ua;
}
var ca = {},
  Fb;
function U1() {
  if (Fb) return ca;
  (Fb = 1),
    Object.defineProperty(ca, "__esModule", { value: !0 }),
    (ca.getEnsResolver = s);
  const e = Gt(),
    t = Q(),
    n = Nu(),
    r = fe(),
    i = Ot();
  async function s(
    o,
    { blockNumber: a, blockTag: u, name: f, universalResolverAddress: c },
  ) {
    let d = c;
    if (!d) {
      if (!o.chain)
        throw new Error(
          "client chain not configured. universalResolverAddress is required.",
        );
      d = (0, e.getChainContractAddress)({
        blockNumber: a,
        chain: o.chain,
        contract: "ensUniversalResolver",
      });
    }
    const [l] = await (0, r.getAction)(
      o,
      i.readContract,
      "readContract",
    )({
      address: d,
      abi: [
        {
          inputs: [{ type: "bytes" }],
          name: "findResolver",
          outputs: [{ type: "address" }, { type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
      ],
      functionName: "findResolver",
      args: [(0, t.toHex)((0, n.packetToBytes)(f))],
      blockNumber: a,
      blockTag: u,
    });
    return l;
  }
  return ca;
}
var da = {},
  Hb;
function G1() {
  if (Hb) return da;
  (Hb = 1),
    Object.defineProperty(da, "__esModule", { value: !0 }),
    (da.createAccessList = o);
  const e = Ae(),
    t = Q(),
    n = dd(),
    r = Fr(),
    i = Tt(),
    s = At();
  async function o(a, u) {
    var P, S, w;
    const {
        account: f = a.account,
        blockNumber: c,
        blockTag: d = "latest",
        blobs: l,
        data: g,
        gas: h,
        gasPrice: b,
        maxFeePerBlobGas: v,
        maxFeePerGas: _,
        maxPriorityFeePerGas: E,
        to: m,
        value: p,
        ...y
      } = u,
      j = f ? (0, e.parseAccount)(f) : void 0;
    try {
      (0, s.assertRequest)(u);
      const T = (c ? (0, t.numberToHex)(c) : void 0) || d,
        B =
          (w =
            (S = (P = a.chain) == null ? void 0 : P.formatters) == null
              ? void 0
              : S.transactionRequest) == null
            ? void 0
            : w.format,
        A = (B || i.formatTransactionRequest)({
          ...(0, r.extract)(y, { format: B }),
          from: j == null ? void 0 : j.address,
          blobs: l,
          data: g,
          gas: h,
          gasPrice: b,
          maxFeePerBlobGas: v,
          maxFeePerGas: _,
          maxPriorityFeePerGas: E,
          to: m,
          value: p,
        }),
        x = await a.request({ method: "eth_createAccessList", params: [A, T] });
      return { accessList: x.accessList, gasUsed: BigInt(x.gasUsed) };
    } catch (q) {
      throw (0, n.getCallError)(q, { ...u, account: j, chain: a.chain });
    }
  }
  return da;
}
var fa = {},
  kb;
function V1() {
  if (kb) return fa;
  (kb = 1),
    Object.defineProperty(fa, "__esModule", { value: !0 }),
    (fa.createBlockFilter = t);
  const e = Tu();
  async function t(n) {
    const r = (0, e.createFilterRequestScope)(n, {
        method: "eth_newBlockFilter",
      }),
      i = await n.request({ method: "eth_newBlockFilter" });
    return { id: i, request: r(i), type: "block" };
  }
  return fa;
}
var la = {},
  $b;
function _y() {
  if ($b) return la;
  ($b = 1),
    Object.defineProperty(la, "__esModule", { value: !0 }),
    (la.createEventFilter = r);
  const e = lr(),
    t = Q(),
    n = Tu();
  async function r(
    i,
    {
      address: s,
      args: o,
      event: a,
      events: u,
      fromBlock: f,
      strict: c,
      toBlock: d,
    } = {},
  ) {
    const l = u ?? (a ? [a] : void 0),
      g = (0, n.createFilterRequestScope)(i, { method: "eth_newFilter" });
    let h = [];
    l &&
      ((h = [
        l.flatMap((_) =>
          (0, e.encodeEventTopics)({ abi: [_], eventName: _.name, args: o }),
        ),
      ]),
      a && (h = h[0]));
    const b = await i.request({
      method: "eth_newFilter",
      params: [
        {
          address: s,
          fromBlock: typeof f == "bigint" ? (0, t.numberToHex)(f) : f,
          toBlock: typeof d == "bigint" ? (0, t.numberToHex)(d) : d,
          ...(h.length ? { topics: h } : {}),
        },
      ],
    });
    return {
      abi: l,
      args: o,
      eventName: a ? a.name : void 0,
      fromBlock: f,
      id: b,
      request: g(b),
      strict: !!c,
      toBlock: d,
      type: "event",
    };
  }
  return la;
}
var ma = {},
  Nb;
function vy() {
  if (Nb) return ma;
  (Nb = 1),
    Object.defineProperty(ma, "__esModule", { value: !0 }),
    (ma.createPendingTransactionFilter = t);
  const e = Tu();
  async function t(n) {
    const r = (0, e.createFilterRequestScope)(n, {
        method: "eth_newPendingTransactionFilter",
      }),
      i = await n.request({ method: "eth_newPendingTransactionFilter" });
    return { id: i, request: r(i), type: "transaction" };
  }
  return ma;
}
var ba = {},
  zb;
function W1() {
  if (zb) return ba;
  (zb = 1),
    Object.defineProperty(ba, "__esModule", { value: !0 }),
    (ba.getBlobBaseFee = e);
  async function e(t) {
    const n = await t.request({ method: "eth_blobBaseFee" });
    return BigInt(n);
  }
  return ba;
}
var ha = {},
  Lb;
function K1() {
  if (Lb) return ha;
  (Lb = 1),
    Object.defineProperty(ha, "__esModule", { value: !0 }),
    (ha.getBlockTransactionCount = n);
  const e = Pe(),
    t = Q();
  async function n(
    r,
    { blockHash: i, blockNumber: s, blockTag: o = "latest" } = {},
  ) {
    const a = s !== void 0 ? (0, t.numberToHex)(s) : void 0;
    let u;
    return (
      i
        ? (u = await r.request(
            { method: "eth_getBlockTransactionCountByHash", params: [i] },
            { dedupe: !0 },
          ))
        : (u = await r.request(
            {
              method: "eth_getBlockTransactionCountByNumber",
              params: [a || o],
            },
            { dedupe: !!a },
          )),
      (0, e.hexToNumber)(u)
    );
  }
  return ha;
}
var ga = {},
  Db;
function Z1() {
  if (Db) return ga;
  (Db = 1),
    Object.defineProperty(ga, "__esModule", { value: !0 }),
    (ga.getCode = t);
  const e = Q();
  async function t(n, { address: r, blockNumber: i, blockTag: s = "latest" }) {
    const o = i !== void 0 ? (0, e.numberToHex)(i) : void 0,
      a = await n.request(
        { method: "eth_getCode", params: [r, o || s] },
        { dedupe: !!o },
      );
    if (a !== "0x") return a;
  }
  return ga;
}
var ya = {},
  On = {},
  Ub;
function J1() {
  if (Ub) return On;
  (Ub = 1),
    Object.defineProperty(On, "__esModule", { value: !0 }),
    (On.Eip712DomainNotFoundError = void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor({ address: r }) {
      super(`No EIP-712 domain found on contract "${r}".`, {
        metaMessages: [
          "Ensure that:",
          `- The contract is deployed at the address "${r}".`,
          "- `eip712Domain()` function exists on the contract.",
          "- `eip712Domain()` function matches signature to ERC-5267 specification.",
        ],
        name: "Eip712DomainNotFoundError",
      });
    }
  }
  return (On.Eip712DomainNotFoundError = t), On;
}
var Gb;
function Y1() {
  if (Gb) return ya;
  (Gb = 1),
    Object.defineProperty(ya, "__esModule", { value: !0 }),
    (ya.getEip712Domain = r);
  const e = J1(),
    t = fe(),
    n = Ot();
  async function r(s, o) {
    const { address: a, factory: u, factoryData: f } = o;
    try {
      const [c, d, l, g, h, b, v] = await (0, t.getAction)(
        s,
        n.readContract,
        "readContract",
      )({
        abi: i,
        address: a,
        functionName: "eip712Domain",
        factory: u,
        factoryData: f,
      });
      return {
        domain: {
          name: d,
          version: l,
          chainId: Number(g),
          verifyingContract: h,
          salt: b,
        },
        extensions: v,
        fields: c,
      };
    } catch (c) {
      const d = c;
      throw d.name === "ContractFunctionExecutionError" &&
        d.cause.name === "ContractFunctionZeroDataError"
        ? new e.Eip712DomainNotFoundError({ address: a })
        : d;
    }
  }
  const i = [
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        { name: "fields", type: "bytes1" },
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
        { name: "salt", type: "bytes32" },
        { name: "extensions", type: "uint256[]" },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  return ya;
}
var pa = {},
  _a = {},
  Vb;
function X1() {
  if (Vb) return _a;
  (Vb = 1),
    Object.defineProperty(_a, "__esModule", { value: !0 }),
    (_a.formatFeeHistory = e);
  function e(t) {
    var n;
    return {
      baseFeePerGas: t.baseFeePerGas.map((r) => BigInt(r)),
      gasUsedRatio: t.gasUsedRatio,
      oldestBlock: BigInt(t.oldestBlock),
      reward:
        (n = t.reward) == null ? void 0 : n.map((r) => r.map((i) => BigInt(i))),
    };
  }
  return _a;
}
var Wb;
function Q1() {
  if (Wb) return pa;
  (Wb = 1),
    Object.defineProperty(pa, "__esModule", { value: !0 }),
    (pa.getFeeHistory = n);
  const e = Q(),
    t = X1();
  async function n(
    r,
    {
      blockCount: i,
      blockNumber: s,
      blockTag: o = "latest",
      rewardPercentiles: a,
    },
  ) {
    const u = s ? (0, e.numberToHex)(s) : void 0,
      f = await r.request(
        {
          method: "eth_feeHistory",
          params: [(0, e.numberToHex)(i), u || o, a],
        },
        { dedupe: !!u },
      );
    return (0, t.formatFeeHistory)(f);
  }
  return pa;
}
var va = {},
  Kb;
function e_() {
  if (Kb) return va;
  (Kb = 1),
    Object.defineProperty(va, "__esModule", { value: !0 }),
    (va.getFilterLogs = n);
  const e = eo(),
    t = It();
  async function n(r, { filter: i }) {
    const s = i.strict ?? !1,
      a = (
        await i.request({ method: "eth_getFilterLogs", params: [i.id] })
      ).map((u) => (0, t.formatLog)(u));
    return i.abi
      ? (0, e.parseEventLogs)({ abi: i.abi, logs: a, strict: s })
      : a;
  }
  return va;
}
var Ea = {},
  ja = {},
  Cc = {},
  Pa = {},
  Zb;
function Ey() {
  if (Zb) return Pa;
  (Zb = 1),
    Object.defineProperty(Pa, "__esModule", { value: !0 }),
    (Pa.defineChain = e);
  function e(t) {
    return { formatters: void 0, fees: void 0, serializers: void 0, ...t };
  }
  return Pa;
}
var wa = {},
  Jb;
function jy() {
  if (Jb) return wa;
  (Jb = 1),
    Object.defineProperty(wa, "__esModule", { value: !0 }),
    (wa.extractChain = e);
  function e({ chains: t, id: n }) {
    return t.find((r) => r.id === n);
  }
  return wa;
}
var Sr = {},
  Ta = {},
  qc = {},
  Yb;
function Py() {
  return (
    Yb ||
      ((Yb = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.socketClientCache = void 0),
          (e.getSocketRpcClient = s);
        const t = Qe(),
          n = fd(),
          r = pd(),
          i = by();
        e.socketClientCache = new Map();
        async function s(o) {
          const {
              getSocket: a,
              keepAlive: u = !0,
              key: f = "socket",
              reconnect: c = !0,
              url: d,
            } = o,
            { interval: l = 3e4 } = typeof u == "object" ? u : {},
            { attempts: g = 5, delay: h = 2e3 } = typeof c == "object" ? c : {};
          let b = e.socketClientCache.get(`${f}:${d}`);
          if (b) return b;
          let v = 0;
          const { schedule: _ } = (0, n.createBatchScheduler)({
              id: `${f}:${d}`,
              fn: async () => {
                const p = new Map(),
                  y = new Map();
                let j, P, S;
                async function w() {
                  const q = await a({
                    onClose() {
                      var T, B;
                      for (const M of p.values())
                        (T = M.onError) == null ||
                          T.call(M, new t.SocketClosedError({ url: d }));
                      for (const M of y.values())
                        (B = M.onError) == null ||
                          B.call(M, new t.SocketClosedError({ url: d }));
                      p.clear(),
                        y.clear(),
                        c &&
                          v < g &&
                          setTimeout(async () => {
                            v++, await w().catch(console.error);
                          }, h);
                    },
                    onError(T) {
                      var B, M;
                      j = T;
                      for (const A of p.values())
                        (B = A.onError) == null || B.call(A, j);
                      for (const A of y.values())
                        (M = A.onError) == null || M.call(A, j);
                      p.clear(),
                        y.clear(),
                        c &&
                          v < g &&
                          setTimeout(async () => {
                            v++, await w().catch(console.error);
                          }, h);
                    },
                    onOpen() {
                      (j = void 0), (v = 0);
                    },
                    onResponse(T) {
                      const B = T.method === "eth_subscription",
                        M = B ? T.params.subscription : T.id,
                        A = B ? y : p,
                        x = A.get(M);
                      x && x.onResponse(T), B || A.delete(M);
                    },
                  });
                  return (
                    (P = q),
                    u &&
                      (S && clearInterval(S),
                      (S = setInterval(() => {
                        var T;
                        return (T = P.ping) == null ? void 0 : T.call(P);
                      }, l))),
                    q
                  );
                }
                return (
                  await w(),
                  (j = void 0),
                  (b = {
                    close() {
                      S && clearInterval(S),
                        P.close(),
                        e.socketClientCache.delete(`${f}:${d}`);
                    },
                    get socket() {
                      return P;
                    },
                    request({ body: q, onError: T, onResponse: B }) {
                      j && T && T(j);
                      const M = q.id ?? i.idCache.take(),
                        A = (x) => {
                          var $;
                          (typeof x.id == "number" && M !== x.id) ||
                            (q.method === "eth_subscribe" &&
                              typeof x.result == "string" &&
                              y.set(x.result, { onResponse: A, onError: T }),
                            q.method === "eth_unsubscribe" &&
                              y.delete(($ = q.params) == null ? void 0 : $[0]),
                            B(x));
                        };
                      p.set(M, { onResponse: A, onError: T });
                      try {
                        P.request({ body: { jsonrpc: "2.0", id: M, ...q } });
                      } catch (x) {
                        T == null || T(x);
                      }
                    },
                    requestAsync({ body: q, timeout: T = 1e4 }) {
                      return (0, r.withTimeout)(
                        () =>
                          new Promise((B, M) =>
                            this.request({
                              body: q,
                              onError: M,
                              onResponse: B,
                            }),
                          ),
                        {
                          errorInstance: new t.TimeoutError({
                            body: q,
                            url: d,
                          }),
                          timeout: T,
                        },
                      );
                    },
                    requests: p,
                    subscriptions: y,
                    url: d,
                  }),
                  e.socketClientCache.set(`${f}:${d}`, b),
                  [b]
                );
              },
            }),
            [E, [m]] = await _();
          return m;
        }
      })(qc)),
    qc
  );
}
const t_ = Gp(e1);
var Xb;
function jd() {
  if (Xb) return Ta;
  (Xb = 1),
    Object.defineProperty(Ta, "__esModule", { value: !0 }),
    (Ta.getWebSocketRpcClient = n);
  const e = Qe(),
    t = Py();
  async function n(r, i = {}) {
    const { keepAlive: s, reconnect: o } = i;
    return (0, t.getSocketRpcClient)({
      async getSocket({ onClose: a, onError: u, onOpen: f, onResponse: c }) {
        const d = await Promise.resolve()
            .then(() => t_)
            .then((v) => v.WebSocket),
          l = new d(r);
        function g() {
          a(),
            l.removeEventListener("close", g),
            l.removeEventListener("message", h),
            l.removeEventListener("error", u),
            l.removeEventListener("open", f);
        }
        function h({ data: v }) {
          c(JSON.parse(v));
        }
        l.addEventListener("close", g),
          l.addEventListener("message", h),
          l.addEventListener("error", u),
          l.addEventListener("open", f),
          l.readyState === d.CONNECTING &&
            (await new Promise((v, _) => {
              l && ((l.onopen = v), (l.onerror = _));
            }));
        const { close: b } = l;
        return Object.assign(l, {
          close() {
            b.bind(l)(), a();
          },
          ping() {
            try {
              if (l.readyState === l.CLOSED || l.readyState === l.CLOSING)
                throw new e.WebSocketRequestError({
                  url: l.url,
                  cause: new e.SocketClosedError({ url: l.url }),
                });
              const v = { jsonrpc: "2.0", method: "net_version", params: [] };
              l.send(JSON.stringify(v));
            } catch (v) {
              u(v);
            }
          },
          request({ body: v }) {
            if (l.readyState === l.CLOSED || l.readyState === l.CLOSING)
              throw new e.WebSocketRequestError({
                body: v,
                url: l.url,
                cause: new e.SocketClosedError({ url: l.url }),
              });
            return l.send(JSON.stringify(v));
          },
        });
      },
      keepAlive: s,
      reconnect: o,
      url: r,
    });
  }
  return Ta;
}
var Qb;
function wy() {
  if (Qb) return Sr;
  (Qb = 1),
    Object.defineProperty(Sr, "__esModule", { value: !0 }),
    (Sr.rpc = void 0),
    (Sr.getSocket = i);
  const e = _d(),
    t = jd();
  function n(s, { body: o, onError: a, onResponse: u }) {
    return s.request({ body: o, onError: a, onResponse: u }), s;
  }
  async function r(s, { body: o, timeout: a = 1e4 }) {
    return s.requestAsync({ body: o, timeout: a });
  }
  async function i(s) {
    const o = await (0, t.getWebSocketRpcClient)(s);
    return Object.assign(o.socket, {
      requests: o.requests,
      subscriptions: o.subscriptions,
    });
  }
  return (
    (Sr.rpc = {
      http(s, o) {
        return (0, e.getHttpRpcClient)(s).request(o);
      },
      webSocket: n,
      webSocketAsync: r,
    }),
    Sr
  );
}
var rr = {},
  Et = {},
  e0;
function Ty() {
  if (e0) return Et;
  (e0 = 1),
    Object.defineProperty(Et, "__esModule", { value: !0 }),
    (Et.InvalidStructTypeError =
      Et.InvalidPrimaryTypeError =
      Et.InvalidDomainError =
        void 0);
  const e = Se(),
    t = oe();
  class n extends t.BaseError {
    constructor({ domain: o }) {
      super(`Invalid domain "${(0, e.stringify)(o)}".`, {
        metaMessages: ["Must be a valid EIP-712 domain."],
      });
    }
  }
  Et.InvalidDomainError = n;
  class r extends t.BaseError {
    constructor({ primaryType: o, types: a }) {
      super(
        `Invalid primary type \`${o}\` must be one of \`${JSON.stringify(Object.keys(a))}\`.`,
        {
          docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
          metaMessages: ["Check that the primary type is a key in `types`."],
        },
      );
    }
  }
  Et.InvalidPrimaryTypeError = r;
  class i extends t.BaseError {
    constructor({ type: o }) {
      super(`Struct type "${o}" is invalid.`, {
        metaMessages: ["Struct type must not be a Solidity type."],
        name: "InvalidStructTypeError",
      });
    }
  }
  return (Et.InvalidStructTypeError = i), Et;
}
var nr = {},
  t0;
function uo() {
  if (t0) return nr;
  (t0 = 1),
    Object.defineProperty(nr, "__esModule", { value: !0 }),
    (nr.hashTypedData = s),
    (nr.hashDomain = o),
    (nr.hashStruct = a),
    (nr.encodeType = c);
  const e = Ye(),
    t = Be(),
    n = Q(),
    r = Oe(),
    i = zu();
  function s(g) {
    const { domain: h = {}, message: b, primaryType: v } = g,
      _ = {
        EIP712Domain: (0, i.getTypesForEIP712Domain)({ domain: h }),
        ...g.types,
      };
    (0, i.validateTypedData)({
      domain: h,
      message: b,
      primaryType: v,
      types: _,
    });
    const E = ["0x1901"];
    return (
      h && E.push(o({ domain: h, types: _ })),
      v !== "EIP712Domain" && E.push(a({ data: b, primaryType: v, types: _ })),
      (0, r.keccak256)((0, t.concat)(E))
    );
  }
  function o({ domain: g, types: h }) {
    return a({ data: g, primaryType: "EIP712Domain", types: h });
  }
  function a({ data: g, primaryType: h, types: b }) {
    const v = u({ data: g, primaryType: h, types: b });
    return (0, r.keccak256)(v);
  }
  function u({ data: g, primaryType: h, types: b }) {
    const v = [{ type: "bytes32" }],
      _ = [f({ primaryType: h, types: b })];
    for (const E of b[h]) {
      const [m, p] = l({
        types: b,
        name: E.name,
        type: E.type,
        value: g[E.name],
      });
      v.push(m), _.push(p);
    }
    return (0, e.encodeAbiParameters)(v, _);
  }
  function f({ primaryType: g, types: h }) {
    const b = (0, n.toHex)(c({ primaryType: g, types: h }));
    return (0, r.keccak256)(b);
  }
  function c({ primaryType: g, types: h }) {
    let b = "";
    const v = d({ primaryType: g, types: h });
    v.delete(g);
    const _ = [g, ...Array.from(v).sort()];
    for (const E of _)
      b += `${E}(${h[E].map(({ name: m, type: p }) => `${p} ${m}`).join(",")})`;
    return b;
  }
  function d({ primaryType: g, types: h }, b = new Set()) {
    const v = g.match(/^\w*/u),
      _ = v == null ? void 0 : v[0];
    if (b.has(_) || h[_] === void 0) return b;
    b.add(_);
    for (const E of h[_]) d({ primaryType: E.type, types: h }, b);
    return b;
  }
  function l({ types: g, name: h, type: b, value: v }) {
    if (g[b] !== void 0)
      return [
        { type: "bytes32" },
        (0, r.keccak256)(u({ data: v, primaryType: b, types: g })),
      ];
    if (b === "bytes")
      return (
        (v = `0x${(v.length % 2 ? "0" : "") + v.slice(2)}`),
        [{ type: "bytes32" }, (0, r.keccak256)(v)]
      );
    if (b === "string")
      return [{ type: "bytes32" }, (0, r.keccak256)((0, n.toHex)(v))];
    if (b.lastIndexOf("]") === b.length - 1) {
      const _ = b.slice(0, b.lastIndexOf("[")),
        E = v.map((m) => l({ name: h, type: _, types: g, value: m }));
      return [
        { type: "bytes32" },
        (0, r.keccak256)(
          (0, e.encodeAbiParameters)(
            E.map(([m]) => m),
            E.map(([, m]) => m),
          ),
        ),
      ];
    }
    return [{ type: b }, v];
  }
  return nr;
}
var r0;
function zu() {
  if (r0) return rr;
  (r0 = 1),
    Object.defineProperty(rr, "__esModule", { value: !0 }),
    (rr.serializeTypedData = f),
    (rr.validateTypedData = c),
    (rr.getTypesForEIP712Domain = d),
    (rr.domainSeparator = l);
  const e = ye(),
    t = Ze(),
    n = Ty(),
    r = Fe(),
    i = Me(),
    s = Q(),
    o = wu(),
    a = uo(),
    u = Se();
  function f(h) {
    const { domain: b, message: v, primaryType: _, types: E } = h,
      m = (j, P) => {
        const S = { ...P };
        for (const w of j) {
          const { name: q, type: T } = w;
          T === "address" && (S[q] = S[q].toLowerCase());
        }
        return S;
      },
      p = E.EIP712Domain ? (b ? m(E.EIP712Domain, b) : {}) : {},
      y = (() => {
        if (_ !== "EIP712Domain") return m(E[_], v);
      })();
    return (0, u.stringify)({
      domain: p,
      message: y,
      primaryType: _,
      types: E,
    });
  }
  function c(h) {
    const { domain: b, message: v, primaryType: _, types: E } = h,
      m = (p, y) => {
        for (const j of p) {
          const { name: P, type: S } = j,
            w = y[P],
            q = S.match(o.integerRegex);
          if (q && (typeof w == "number" || typeof w == "bigint")) {
            const [M, A, x] = q;
            (0, s.numberToHex)(w, {
              signed: A === "int",
              size: Number.parseInt(x) / 8,
            });
          }
          if (S === "address" && typeof w == "string" && !(0, r.isAddress)(w))
            throw new t.InvalidAddressError({ address: w });
          const T = S.match(o.bytesRegex);
          if (T) {
            const [M, A] = T;
            if (A && (0, i.size)(w) !== Number.parseInt(A))
              throw new e.BytesSizeMismatchError({
                expectedSize: Number.parseInt(A),
                givenSize: (0, i.size)(w),
              });
          }
          const B = E[S];
          B && (g(S), m(B, w));
        }
      };
    if (E.EIP712Domain && b) {
      if (typeof b != "object") throw new n.InvalidDomainError({ domain: b });
      m(E.EIP712Domain, b);
    }
    if (_ !== "EIP712Domain")
      if (E[_]) m(E[_], v);
      else throw new n.InvalidPrimaryTypeError({ primaryType: _, types: E });
  }
  function d({ domain: h }) {
    return [
      typeof (h == null ? void 0 : h.name) == "string" && {
        name: "name",
        type: "string",
      },
      (h == null ? void 0 : h.version) && { name: "version", type: "string" },
      (typeof (h == null ? void 0 : h.chainId) == "number" ||
        typeof (h == null ? void 0 : h.chainId) == "bigint") && {
        name: "chainId",
        type: "uint256",
      },
      (h == null ? void 0 : h.verifyingContract) && {
        name: "verifyingContract",
        type: "address",
      },
      (h == null ? void 0 : h.salt) && { name: "salt", type: "bytes32" },
    ].filter(Boolean);
  }
  function l({ domain: h }) {
    return (0, a.hashDomain)({
      domain: h,
      types: { EIP712Domain: d({ domain: h }) },
    });
  }
  function g(h) {
    if (
      h === "address" ||
      h === "bool" ||
      h === "string" ||
      h.startsWith("bytes") ||
      h.startsWith("uint") ||
      h.startsWith("int")
    )
      throw new n.InvalidStructTypeError({ type: h });
  }
  return rr;
}
var Aa = {},
  n0;
function Ay() {
  if (n0) return Aa;
  (n0 = 1),
    Object.defineProperty(Aa, "__esModule", { value: !0 }),
    (Aa.decodeFunctionData = s);
  const e = ye(),
    t = Je(),
    n = fr(),
    r = Nt(),
    i = Pt();
  function s(o) {
    const { abi: a, data: u } = o,
      f = (0, t.slice)(u, 0, 4),
      c = a.find(
        (d) =>
          d.type === "function" &&
          f === (0, n.toFunctionSelector)((0, i.formatAbiItem)(d)),
      );
    if (!c)
      throw new e.AbiFunctionSignatureNotFoundError(f, {
        docsPath: "/docs/contract/decodeFunctionData",
      });
    return {
      functionName: c.name,
      args:
        "inputs" in c && c.inputs && c.inputs.length > 0
          ? (0, r.decodeAbiParameters)(c.inputs, (0, t.slice)(u, 4))
          : void 0,
    };
  }
  return Aa;
}
var Sa = {},
  o0;
function Sy() {
  if (o0) return Sa;
  (o0 = 1),
    Object.defineProperty(Sa, "__esModule", { value: !0 }),
    (Sa.encodeErrorResult = a);
  const e = ye(),
    t = Be(),
    n = fr(),
    r = Ye(),
    i = Pt(),
    s = wt(),
    o = "/docs/contract/encodeErrorResult";
  function a(u) {
    const { abi: f, errorName: c, args: d } = u;
    let l = f[0];
    if (c) {
      const v = (0, s.getAbiItem)({ abi: f, args: d, name: c });
      if (!v) throw new e.AbiErrorNotFoundError(c, { docsPath: o });
      l = v;
    }
    if (l.type !== "error")
      throw new e.AbiErrorNotFoundError(void 0, { docsPath: o });
    const g = (0, i.formatAbiItem)(l),
      h = (0, n.toFunctionSelector)(g);
    let b = "0x";
    if (d && d.length > 0) {
      if (!l.inputs)
        throw new e.AbiErrorInputsNotFoundError(l.name, { docsPath: o });
      b = (0, r.encodeAbiParameters)(l.inputs, d);
    }
    return (0, t.concatHex)([h, b]);
  }
  return Sa;
}
var Ia = {},
  i0;
function Iy() {
  if (i0) return Ia;
  (i0 = 1),
    Object.defineProperty(Ia, "__esModule", { value: !0 }),
    (Ia.encodeFunctionResult = i);
  const e = ye(),
    t = Ye(),
    n = wt(),
    r = "/docs/contract/encodeFunctionResult";
  function i(s) {
    const { abi: o, functionName: a, result: u } = s;
    let f = o[0];
    if (a) {
      const d = (0, n.getAbiItem)({ abi: o, name: a });
      if (!d) throw new e.AbiFunctionNotFoundError(a, { docsPath: r });
      f = d;
    }
    if (f.type !== "function")
      throw new e.AbiFunctionNotFoundError(void 0, { docsPath: r });
    if (!f.outputs)
      throw new e.AbiFunctionOutputsNotFoundError(f.name, { docsPath: r });
    let c = Array.isArray(u) ? u : [u];
    return (
      f.outputs.length === 0 && !c[0] && (c = []),
      (0, t.encodeAbiParameters)(f.outputs, c)
    );
  }
  return Ia;
}
var Ra = {},
  a0;
function Ry() {
  if (a0) return Ra;
  (a0 = 1),
    Object.defineProperty(Ra, "__esModule", { value: !0 }),
    (Ra.encodePacked = a);
  const e = ye(),
    t = Ze(),
    n = Fe(),
    r = Be(),
    i = kt(),
    s = Q(),
    o = wu();
  function a(f, c) {
    if (f.length !== c.length)
      throw new e.AbiEncodingLengthMismatchError({
        expectedLength: f.length,
        givenLength: c.length,
      });
    const d = [];
    for (let l = 0; l < f.length; l++) {
      const g = f[l],
        h = c[l];
      d.push(u(g, h));
    }
    return (0, r.concatHex)(d);
  }
  function u(f, c, d = !1) {
    if (f === "address") {
      const b = c;
      if (!(0, n.isAddress)(b)) throw new t.InvalidAddressError({ address: b });
      return (0, i.pad)(b.toLowerCase(), { size: d ? 32 : null });
    }
    if (f === "string") return (0, s.stringToHex)(c);
    if (f === "bytes") return c;
    if (f === "bool")
      return (0, i.pad)((0, s.boolToHex)(c), { size: d ? 32 : 1 });
    const l = f.match(o.integerRegex);
    if (l) {
      const [b, v, _ = "256"] = l,
        E = Number.parseInt(_) / 8;
      return (0, s.numberToHex)(c, { size: d ? 32 : E, signed: v === "int" });
    }
    const g = f.match(o.bytesRegex);
    if (g) {
      const [b, v] = g;
      if (Number.parseInt(v) !== (c.length - 2) / 2)
        throw new e.BytesSizeMismatchError({
          expectedSize: Number.parseInt(v),
          givenSize: (c.length - 2) / 2,
        });
      return (0, i.pad)(c, { dir: "right", size: d ? 32 : null });
    }
    const h = f.match(o.arrayRegex);
    if (h && Array.isArray(c)) {
      const [b, v] = h,
        _ = [];
      for (let E = 0; E < c.length; E++) _.push(u(v, c[E], !0));
      return _.length === 0 ? "0x" : (0, r.concatHex)(_);
    }
    throw new e.UnsupportedPackedAbiType(f);
  }
  return Ra;
}
var Ir = {},
  Oa = {},
  s0;
function Pd() {
  if (s0) return Oa;
  (s0 = 1),
    Object.defineProperty(Oa, "__esModule", { value: !0 }),
    (Oa.isBytes = e);
  function e(t) {
    return !t || typeof t != "object" || !("BYTES_PER_ELEMENT" in t)
      ? !1
      : t.BYTES_PER_ELEMENT === 1 && t.constructor.name === "Uint8Array";
  }
  return Oa;
}
var u0;
function Oy() {
  if (u0) return Ir;
  (u0 = 1),
    Object.defineProperty(Ir, "__esModule", { value: !0 }),
    (Ir.getContractAddress = u),
    (Ir.getCreateAddress = f),
    (Ir.getCreate2Address = c);
  const e = Be(),
    t = Pd(),
    n = kt(),
    r = Je(),
    i = le(),
    s = Kn(),
    o = Oe(),
    a = ke();
  function u(d) {
    return d.opcode === "CREATE2" ? c(d) : f(d);
  }
  function f(d) {
    const l = (0, i.toBytes)((0, a.getAddress)(d.from));
    let g = (0, i.toBytes)(d.nonce);
    return (
      g[0] === 0 && (g = new Uint8Array([])),
      (0, a.getAddress)(
        `0x${(0, o.keccak256)((0, s.toRlp)([l, g], "bytes")).slice(26)}`,
      )
    );
  }
  function c(d) {
    const l = (0, i.toBytes)((0, a.getAddress)(d.from)),
      g = (0, n.pad)((0, t.isBytes)(d.salt) ? d.salt : (0, i.toBytes)(d.salt), {
        size: 32,
      }),
      h =
        "bytecodeHash" in d
          ? (0, t.isBytes)(d.bytecodeHash)
            ? d.bytecodeHash
            : (0, i.toBytes)(d.bytecodeHash)
          : (0, o.keccak256)(d.bytecode, "bytes");
    return (0, a.getAddress)(
      (0, r.slice)(
        (0, o.keccak256)((0, e.concat)([(0, i.toBytes)("0xff"), l, g, h])),
        12,
      ),
    );
  }
  return Ir;
}
var xc = {},
  c0;
function wd() {
  return (
    c0 ||
      ((c0 = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.defineTransactionReceipt = e.receiptStatuses = void 0),
          (e.formatTransactionReceipt = s);
        const t = Pe(),
          n = Jn(),
          r = It(),
          i = Yn();
        e.receiptStatuses = { "0x0": "reverted", "0x1": "success" };
        function s(o) {
          const a = {
            ...o,
            blockNumber: o.blockNumber ? BigInt(o.blockNumber) : null,
            contractAddress: o.contractAddress ? o.contractAddress : null,
            cumulativeGasUsed: o.cumulativeGasUsed
              ? BigInt(o.cumulativeGasUsed)
              : null,
            effectiveGasPrice: o.effectiveGasPrice
              ? BigInt(o.effectiveGasPrice)
              : null,
            gasUsed: o.gasUsed ? BigInt(o.gasUsed) : null,
            logs: o.logs ? o.logs.map((u) => (0, r.formatLog)(u)) : null,
            to: o.to ? o.to : null,
            transactionIndex: o.transactionIndex
              ? (0, t.hexToNumber)(o.transactionIndex)
              : null,
            status: o.status ? e.receiptStatuses[o.status] : null,
            type: o.type ? i.transactionType[o.type] || o.type : null,
          };
          return (
            o.blobGasPrice && (a.blobGasPrice = BigInt(o.blobGasPrice)),
            o.blobGasUsed && (a.blobGasUsed = BigInt(o.blobGasUsed)),
            a
          );
        }
        e.defineTransactionReceipt = (0, n.defineFormatter)(
          "transactionReceipt",
          s,
        );
      })(xc)),
    xc
  );
}
var Ba = {},
  d0;
function Td() {
  if (d0) return Ba;
  (d0 = 1),
    Object.defineProperty(Ba, "__esModule", { value: !0 }),
    (Ba.fromRlp = s);
  const e = oe(),
    t = xr(),
    n = Dn(),
    r = le(),
    i = Q();
  function s(f, c = "hex") {
    const d = (() => {
        if (typeof f == "string") {
          if (f.length > 3 && f.length % 2 !== 0)
            throw new t.InvalidHexValueError(f);
          return (0, r.hexToBytes)(f);
        }
        return f;
      })(),
      l = (0, n.createCursor)(d, {
        recursiveReadLimit: Number.POSITIVE_INFINITY,
      });
    return o(l, c);
  }
  function o(f, c = "hex") {
    if (f.bytes.length === 0)
      return c === "hex" ? (0, i.bytesToHex)(f.bytes) : f.bytes;
    const d = f.readByte();
    if ((d < 128 && f.decrementPosition(1), d < 192)) {
      const g = a(f, d, 128),
        h = f.readBytes(g);
      return c === "hex" ? (0, i.bytesToHex)(h) : h;
    }
    const l = a(f, d, 192);
    return u(f, l, c);
  }
  function a(f, c, d) {
    if (d === 128 && c < 128) return 1;
    if (c <= d + 55) return c - d;
    if (c === d + 55 + 1) return f.readUint8();
    if (c === d + 55 + 2) return f.readUint16();
    if (c === d + 55 + 3) return f.readUint24();
    if (c === d + 55 + 4) return f.readUint32();
    throw new e.BaseError("Invalid RLP prefix");
  }
  function u(f, c, d) {
    const l = f.position,
      g = [];
    for (; f.position - l < c; ) g.push(o(f, d));
    return g;
  }
  return Ba;
}
var Mc = {},
  f0;
function By() {
  return (
    f0 ||
      ((f0 = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.toEventSignature = void 0);
        var t = Uc();
        Object.defineProperty(e, "toEventSignature", {
          enumerable: !0,
          get: function () {
            return t.toSignature;
          },
        });
      })(Mc)),
    Mc
  );
}
var Fc = {},
  l0;
function Cy() {
  return (
    l0 ||
      ((l0 = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.toFunctionSignature = void 0);
        var t = Uc();
        Object.defineProperty(e, "toFunctionSignature", {
          enumerable: !0,
          get: function () {
            return t.toSignature;
          },
        });
      })(Fc)),
    Fc
  );
}
var Hc = {},
  m0;
function qy() {
  return (
    m0 ||
      ((m0 = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.toEventHash = void 0);
        var t = Pu();
        Object.defineProperty(e, "toEventHash", {
          enumerable: !0,
          get: function () {
            return t.toSignatureHash;
          },
        });
      })(Hc)),
    Hc
  );
}
var kc = {},
  b0;
function xy() {
  return (
    b0 ||
      ((b0 = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.toFunctionHash = void 0);
        var t = Pu();
        Object.defineProperty(e, "toFunctionHash", {
          enumerable: !0,
          get: function () {
            return t.toSignatureHash;
          },
        });
      })(kc)),
    kc
  );
}
var Ca = {},
  h0;
function Ad() {
  if (h0) return Ca;
  (h0 = 1),
    Object.defineProperty(Ca, "__esModule", { value: !0 }),
    (Ca.isHash = n);
  const e = Re(),
    t = Me();
  function n(r) {
    return (0, e.isHex)(r) && (0, t.size)(r) === 32;
  }
  return Ca;
}
var qa = {},
  or = {},
  g0;
function r_() {
  if (g0) return or;
  (g0 = 1),
    Object.defineProperty(or, "__esModule", { value: !0 }),
    (or.ripemd160 = or.RIPEMD160 = void 0);
  const e = ty(),
    t = Nc(),
    n = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
    r = new Uint8Array(new Array(16).fill(0).map((b, v) => v)),
    i = r.map((b) => (9 * b + 5) % 16);
  let s = [r],
    o = [i];
  for (let b = 0; b < 4; b++)
    for (let v of [s, o]) v.push(v[b].map((_) => n[_]));
  const a = [
      [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
      [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
      [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
      [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
      [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
    ].map((b) => new Uint8Array(b)),
    u = s.map((b, v) => b.map((_) => a[v][_])),
    f = o.map((b, v) => b.map((_) => a[v][_])),
    c = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]),
    d = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]);
  function l(b, v, _, E) {
    return b === 0
      ? v ^ _ ^ E
      : b === 1
        ? (v & _) | (~v & E)
        : b === 2
          ? (v | ~_) ^ E
          : b === 3
            ? (v & E) | (_ & ~E)
            : v ^ (_ | ~E);
  }
  const g = new Uint32Array(16);
  class h extends e.HashMD {
    constructor() {
      super(64, 20, 8, !0),
        (this.h0 = 1732584193),
        (this.h1 = -271733879),
        (this.h2 = -1732584194),
        (this.h3 = 271733878),
        (this.h4 = -1009589776);
    }
    get() {
      const { h0: v, h1: _, h2: E, h3: m, h4: p } = this;
      return [v, _, E, m, p];
    }
    set(v, _, E, m, p) {
      (this.h0 = v | 0),
        (this.h1 = _ | 0),
        (this.h2 = E | 0),
        (this.h3 = m | 0),
        (this.h4 = p | 0);
    }
    process(v, _) {
      for (let B = 0; B < 16; B++, _ += 4) g[B] = v.getUint32(_, !0);
      let E = this.h0 | 0,
        m = E,
        p = this.h1 | 0,
        y = p,
        j = this.h2 | 0,
        P = j,
        S = this.h3 | 0,
        w = S,
        q = this.h4 | 0,
        T = q;
      for (let B = 0; B < 5; B++) {
        const M = 4 - B,
          A = c[B],
          x = d[B],
          $ = s[B],
          F = o[B],
          H = u[B],
          R = f[B];
        for (let O = 0; O < 16; O++) {
          const I =
            ((0, t.rotl)(E + l(B, p, j, S) + g[$[O]] + A, H[O]) + q) | 0;
          (E = q), (q = S), (S = (0, t.rotl)(j, 10) | 0), (j = p), (p = I);
        }
        for (let O = 0; O < 16; O++) {
          const I =
            ((0, t.rotl)(m + l(M, y, P, w) + g[F[O]] + x, R[O]) + T) | 0;
          (m = T), (T = w), (w = (0, t.rotl)(P, 10) | 0), (P = y), (y = I);
        }
      }
      this.set(
        (this.h1 + j + w) | 0,
        (this.h2 + S + T) | 0,
        (this.h3 + q + m) | 0,
        (this.h4 + E + y) | 0,
        (this.h0 + p + P) | 0,
      );
    }
    roundClean() {
      g.fill(0);
    }
    destroy() {
      (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
    }
  }
  return (
    (or.RIPEMD160 = h),
    (or.ripemd160 = (0, t.wrapConstructor)(() => new h())),
    or
  );
}
var y0;
function My() {
  if (y0) return qa;
  (y0 = 1),
    Object.defineProperty(qa, "__esModule", { value: !0 }),
    (qa.ripemd160 = i);
  const e = r_(),
    t = Re(),
    n = le(),
    r = Q();
  function i(s, o) {
    const a = o || "hex",
      u = (0, e.ripemd160)(
        (0, t.isHex)(s, { strict: !1 }) ? (0, n.toBytes)(s) : s,
      );
    return a === "bytes" ? u : (0, r.toHex)(u);
  }
  return qa;
}
var xa = {},
  Ma = {},
  Fa = {},
  Bn = {},
  p0;
function Fy() {
  return (
    p0 ||
      ((p0 = 1),
      Object.defineProperty(Bn, "__esModule", { value: !0 }),
      (Bn.presignMessagePrefix = void 0),
      (Bn.presignMessagePrefix = `Ethereum Signed Message:
`)),
    Bn
  );
}
var _0;
function Hy() {
  if (_0) return Fa;
  (_0 = 1),
    Object.defineProperty(Fa, "__esModule", { value: !0 }),
    (Fa.toPrefixedMessage = i);
  const e = Fy(),
    t = Be(),
    n = Me(),
    r = Q();
  function i(s) {
    const o =
        typeof s == "string"
          ? (0, r.stringToHex)(s)
          : typeof s.raw == "string"
            ? s.raw
            : (0, r.bytesToHex)(s.raw),
      a = (0, r.stringToHex)(`${e.presignMessagePrefix}${(0, n.size)(o)}`);
    return (0, t.concat)([a, o]);
  }
  return Fa;
}
var v0;
function co() {
  if (v0) return Ma;
  (v0 = 1),
    Object.defineProperty(Ma, "__esModule", { value: !0 }),
    (Ma.hashMessage = n);
  const e = Oe(),
    t = Hy();
  function n(r, i) {
    return (0, e.keccak256)((0, t.toPrefixedMessage)(r), i);
  }
  return Ma;
}
var E0;
function Sd() {
  if (E0) return xa;
  (E0 = 1),
    Object.defineProperty(xa, "__esModule", { value: !0 }),
    (xa.recoverMessageAddress = n);
  const e = co(),
    t = Dt();
  async function n({ message: r, signature: i }) {
    return (0, t.recoverAddress)({ hash: (0, e.hashMessage)(r), signature: i });
  }
  return xa;
}
var Ha = {},
  j0;
function Id() {
  if (j0) return Ha;
  (j0 = 1),
    Object.defineProperty(Ha, "__esModule", { value: !0 }),
    (Ha.recoverTypedDataAddress = n);
  const e = uo(),
    t = Dt();
  async function n(r) {
    const { domain: i, message: s, primaryType: o, signature: a, types: u } = r;
    return (0, t.recoverAddress)({
      hash: (0, e.hashTypedData)({
        domain: i,
        message: s,
        primaryType: o,
        types: u,
      }),
      signature: a,
    });
  }
  return Ha;
}
var ka = {},
  P0;
function ky() {
  if (P0) return ka;
  (P0 = 1),
    Object.defineProperty(ka, "__esModule", { value: !0 }),
    (ka.verifyHash = r);
  const e = ke(),
    t = St(),
    n = Dt();
  async function r({ address: i, hash: s, signature: o }) {
    return (0, t.isAddressEqual)(
      (0, e.getAddress)(i),
      await (0, n.recoverAddress)({ hash: s, signature: o }),
    );
  }
  return ka;
}
var $a = {},
  w0;
function $y() {
  if (w0) return $a;
  (w0 = 1),
    Object.defineProperty($a, "__esModule", { value: !0 }),
    ($a.verifyMessage = r);
  const e = ke(),
    t = St(),
    n = Sd();
  async function r({ address: i, message: s, signature: o }) {
    return (0, t.isAddressEqual)(
      (0, e.getAddress)(i),
      await (0, n.recoverMessageAddress)({ message: s, signature: o }),
    );
  }
  return $a;
}
var Na = {},
  T0;
function Ny() {
  if (T0) return Na;
  (T0 = 1),
    Object.defineProperty(Na, "__esModule", { value: !0 }),
    (Na.verifyTypedData = r);
  const e = ke(),
    t = St(),
    n = Id();
  async function r(i) {
    const {
      address: s,
      domain: o,
      message: a,
      primaryType: u,
      signature: f,
      types: c,
    } = i;
    return (0, t.isAddressEqual)(
      (0, e.getAddress)(s),
      await (0, n.recoverTypedDataAddress)({
        domain: o,
        message: a,
        primaryType: u,
        signature: f,
        types: c,
      }),
    );
  }
  return Na;
}
var za = {},
  La = {},
  ir = {},
  A0;
function Rd() {
  return (
    A0 ||
      ((A0 = 1),
      Object.defineProperty(ir, "__esModule", { value: !0 }),
      (ir.zeroHash = ir.erc6492MagicBytes = void 0),
      (ir.erc6492MagicBytes =
        "0x6492649264926492649264926492649264926492649264926492649264926492"),
      (ir.zeroHash =
        "0x0000000000000000000000000000000000000000000000000000000000000000")),
    ir
  );
}
var S0;
function Lu() {
  if (S0) return La;
  (S0 = 1),
    Object.defineProperty(La, "__esModule", { value: !0 }),
    (La.isErc6492Signature = n);
  const e = Rd(),
    t = Je();
  function n(r) {
    return (0, t.sliceHex)(r, -32) === e.erc6492MagicBytes;
  }
  return La;
}
var I0;
function zy() {
  if (I0) return za;
  (I0 = 1),
    Object.defineProperty(za, "__esModule", { value: !0 }),
    (za.parseErc6492Signature = n);
  const e = Nt(),
    t = Lu();
  function n(r) {
    if (!(0, t.isErc6492Signature)(r)) return { signature: r };
    const [i, s, o] = (0, e.decodeAbiParameters)(
      [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
      r,
    );
    return { address: i, data: s, signature: o };
  }
  return za;
}
var Da = {},
  R0;
function Od() {
  if (R0) return Da;
  (R0 = 1),
    Object.defineProperty(Da, "__esModule", { value: !0 }),
    (Da.serializeErc6492Signature = i);
  const e = Rd(),
    t = Ye(),
    n = Be(),
    r = le();
  function i(s) {
    const { address: o, data: a, signature: u, to: f = "hex" } = s,
      c = (0, n.concatHex)([
        (0, t.encodeAbiParameters)(
          [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
          [o, a, u],
        ),
        e.erc6492MagicBytes,
      ]);
    return f === "hex" ? c : (0, r.hexToBytes)(c);
  }
  return Da;
}
var Ua = {},
  O0;
function Bd() {
  if (O0) return Ua;
  (O0 = 1),
    Object.defineProperty(Ua, "__esModule", { value: !0 }),
    (Ua.getSerializedTransactionType = r);
  const e = He(),
    t = Je(),
    n = Pe();
  function r(i) {
    const s = (0, t.sliceHex)(i, 0, 1);
    if (s === "0x04") return "eip7702";
    if (s === "0x03") return "eip4844";
    if (s === "0x02") return "eip1559";
    if (s === "0x01") return "eip2930";
    if (s !== "0x" && (0, n.hexToNumber)(s) >= 192) return "legacy";
    throw new e.InvalidSerializedTransactionTypeError({ serializedType: s });
  }
  return Ua;
}
var Mt = {},
  B0;
function Du() {
  if (B0) return Mt;
  (B0 = 1),
    Object.defineProperty(Mt, "__esModule", { value: !0 }),
    (Mt.assertTransactionEIP7702 = d),
    (Mt.assertTransactionEIP4844 = l),
    (Mt.assertTransactionEIP1559 = g),
    (Mt.assertTransactionEIP2930 = h),
    (Mt.assertTransactionLegacy = b);
  const e = ry(),
    t = Qc(),
    n = Ze(),
    r = oe(),
    i = ny(),
    s = to(),
    o = Ut(),
    a = Fe(),
    u = Me(),
    f = Je(),
    c = Pe();
  function d(v) {
    const { authorizationList: _ } = v;
    if (_)
      for (const E of _) {
        const { contractAddress: m, chainId: p } = E;
        if (!(0, a.isAddress)(m))
          throw new n.InvalidAddressError({ address: m });
        if (p < 0) throw new s.InvalidChainIdError({ chainId: p });
      }
    g(v);
  }
  function l(v) {
    const { blobVersionedHashes: _ } = v;
    if (_) {
      if (_.length === 0) throw new i.EmptyBlobError();
      for (const E of _) {
        const m = (0, u.size)(E),
          p = (0, c.hexToNumber)((0, f.slice)(E, 0, 1));
        if (m !== 32)
          throw new i.InvalidVersionedHashSizeError({ hash: E, size: m });
        if (p !== e.versionedHashVersionKzg)
          throw new i.InvalidVersionedHashVersionError({ hash: E, version: p });
      }
    }
    g(v);
  }
  function g(v) {
    const { chainId: _, maxPriorityFeePerGas: E, maxFeePerGas: m, to: p } = v;
    if (_ <= 0) throw new s.InvalidChainIdError({ chainId: _ });
    if (p && !(0, a.isAddress)(p))
      throw new n.InvalidAddressError({ address: p });
    if (m && m > t.maxUint256)
      throw new o.FeeCapTooHighError({ maxFeePerGas: m });
    if (E && m && E > m)
      throw new o.TipAboveFeeCapError({
        maxFeePerGas: m,
        maxPriorityFeePerGas: E,
      });
  }
  function h(v) {
    const {
      chainId: _,
      maxPriorityFeePerGas: E,
      gasPrice: m,
      maxFeePerGas: p,
      to: y,
    } = v;
    if (_ <= 0) throw new s.InvalidChainIdError({ chainId: _ });
    if (y && !(0, a.isAddress)(y))
      throw new n.InvalidAddressError({ address: y });
    if (E || p)
      throw new r.BaseError(
        "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.",
      );
    if (m && m > t.maxUint256)
      throw new o.FeeCapTooHighError({ maxFeePerGas: m });
  }
  function b(v) {
    const {
      chainId: _,
      maxPriorityFeePerGas: E,
      gasPrice: m,
      maxFeePerGas: p,
      to: y,
    } = v;
    if (y && !(0, a.isAddress)(y))
      throw new n.InvalidAddressError({ address: y });
    if (typeof _ < "u" && _ <= 0)
      throw new s.InvalidChainIdError({ chainId: _ });
    if (E || p)
      throw new r.BaseError(
        "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.",
      );
    if (m && m > t.maxUint256)
      throw new o.FeeCapTooHighError({ maxFeePerGas: m });
  }
  return Mt;
}
var Rr = {},
  C0;
function Cd() {
  if (C0) return Rr;
  (C0 = 1),
    Object.defineProperty(Rr, "__esModule", { value: !0 }),
    (Rr.parseTransaction = l),
    (Rr.toTransactionArray = E),
    (Rr.parseAccessList = m);
  const e = Ze(),
    t = He(),
    n = Fe(),
    r = qu(),
    i = Re(),
    s = kt(),
    o = $t(),
    a = Pe(),
    u = Td(),
    f = Ad(),
    c = Du(),
    d = Bd();
  function l(j) {
    const P = (0, d.getSerializedTransactionType)(j);
    return P === "eip1559"
      ? b(j)
      : P === "eip2930"
        ? v(j)
        : P === "eip4844"
          ? h(j)
          : P === "eip7702"
            ? g(j)
            : _(j);
  }
  function g(j) {
    const P = E(j),
      [S, w, q, T, B, M, A, x, $, F, H, R, O] = P;
    if (P.length !== 10 && P.length !== 13)
      throw new t.InvalidSerializedTransactionError({
        attributes: {
          chainId: S,
          nonce: w,
          maxPriorityFeePerGas: q,
          maxFeePerGas: T,
          gas: B,
          to: M,
          value: A,
          data: x,
          accessList: $,
          authorizationList: F,
          ...(P.length > 9 ? { v: H, r: R, s: O } : {}),
        },
        serializedTransaction: j,
        type: "eip7702",
      });
    const I = { chainId: (0, a.hexToNumber)(S), type: "eip7702" };
    return (
      (0, i.isHex)(M) && M !== "0x" && (I.to = M),
      (0, i.isHex)(B) && B !== "0x" && (I.gas = (0, a.hexToBigInt)(B)),
      (0, i.isHex)(x) && x !== "0x" && (I.data = x),
      (0, i.isHex)(w) && w !== "0x" && (I.nonce = (0, a.hexToNumber)(w)),
      (0, i.isHex)(A) && A !== "0x" && (I.value = (0, a.hexToBigInt)(A)),
      (0, i.isHex)(T) && T !== "0x" && (I.maxFeePerGas = (0, a.hexToBigInt)(T)),
      (0, i.isHex)(q) &&
        q !== "0x" &&
        (I.maxPriorityFeePerGas = (0, a.hexToBigInt)(q)),
      $.length !== 0 && $ !== "0x" && (I.accessList = m($)),
      F.length !== 0 && F !== "0x" && (I.authorizationList = p(F)),
      (0, c.assertTransactionEIP7702)(I),
      { ...(P.length === 13 ? y(P) : void 0), ...I }
    );
  }
  function h(j) {
    const P = E(j),
      S = P.length === 4,
      w = S ? P[0] : P,
      q = S ? P.slice(1) : [],
      [T, B, M, A, x, $, F, H, R, O, I, C, k, z] = w,
      [U, L, V] = q;
    if (!(w.length === 11 || w.length === 14))
      throw new t.InvalidSerializedTransactionError({
        attributes: {
          chainId: T,
          nonce: B,
          maxPriorityFeePerGas: M,
          maxFeePerGas: A,
          gas: x,
          to: $,
          value: F,
          data: H,
          accessList: R,
          ...(w.length > 9 ? { v: C, r: k, s: z } : {}),
        },
        serializedTransaction: j,
        type: "eip4844",
      });
    const G = {
      blobVersionedHashes: I,
      chainId: (0, a.hexToNumber)(T),
      type: "eip4844",
    };
    return (
      (0, i.isHex)($) && $ !== "0x" && (G.to = $),
      (0, i.isHex)(x) && x !== "0x" && (G.gas = (0, a.hexToBigInt)(x)),
      (0, i.isHex)(H) && H !== "0x" && (G.data = H),
      (0, i.isHex)(B) && B !== "0x" && (G.nonce = (0, a.hexToNumber)(B)),
      (0, i.isHex)(F) && F !== "0x" && (G.value = (0, a.hexToBigInt)(F)),
      (0, i.isHex)(O) &&
        O !== "0x" &&
        (G.maxFeePerBlobGas = (0, a.hexToBigInt)(O)),
      (0, i.isHex)(A) && A !== "0x" && (G.maxFeePerGas = (0, a.hexToBigInt)(A)),
      (0, i.isHex)(M) &&
        M !== "0x" &&
        (G.maxPriorityFeePerGas = (0, a.hexToBigInt)(M)),
      R.length !== 0 && R !== "0x" && (G.accessList = m(R)),
      U &&
        L &&
        V &&
        (G.sidecars = (0, r.toBlobSidecars)({
          blobs: U,
          commitments: L,
          proofs: V,
        })),
      (0, c.assertTransactionEIP4844)(G),
      { ...(w.length === 14 ? y(w) : void 0), ...G }
    );
  }
  function b(j) {
    const P = E(j),
      [S, w, q, T, B, M, A, x, $, F, H, R] = P;
    if (!(P.length === 9 || P.length === 12))
      throw new t.InvalidSerializedTransactionError({
        attributes: {
          chainId: S,
          nonce: w,
          maxPriorityFeePerGas: q,
          maxFeePerGas: T,
          gas: B,
          to: M,
          value: A,
          data: x,
          accessList: $,
          ...(P.length > 9 ? { v: F, r: H, s: R } : {}),
        },
        serializedTransaction: j,
        type: "eip1559",
      });
    const O = { chainId: (0, a.hexToNumber)(S), type: "eip1559" };
    return (
      (0, i.isHex)(M) && M !== "0x" && (O.to = M),
      (0, i.isHex)(B) && B !== "0x" && (O.gas = (0, a.hexToBigInt)(B)),
      (0, i.isHex)(x) && x !== "0x" && (O.data = x),
      (0, i.isHex)(w) && w !== "0x" && (O.nonce = (0, a.hexToNumber)(w)),
      (0, i.isHex)(A) && A !== "0x" && (O.value = (0, a.hexToBigInt)(A)),
      (0, i.isHex)(T) && T !== "0x" && (O.maxFeePerGas = (0, a.hexToBigInt)(T)),
      (0, i.isHex)(q) &&
        q !== "0x" &&
        (O.maxPriorityFeePerGas = (0, a.hexToBigInt)(q)),
      $.length !== 0 && $ !== "0x" && (O.accessList = m($)),
      (0, c.assertTransactionEIP1559)(O),
      { ...(P.length === 12 ? y(P) : void 0), ...O }
    );
  }
  function v(j) {
    const P = E(j),
      [S, w, q, T, B, M, A, x, $, F, H] = P;
    if (!(P.length === 8 || P.length === 11))
      throw new t.InvalidSerializedTransactionError({
        attributes: {
          chainId: S,
          nonce: w,
          gasPrice: q,
          gas: T,
          to: B,
          value: M,
          data: A,
          accessList: x,
          ...(P.length > 8 ? { v: $, r: F, s: H } : {}),
        },
        serializedTransaction: j,
        type: "eip2930",
      });
    const R = { chainId: (0, a.hexToNumber)(S), type: "eip2930" };
    return (
      (0, i.isHex)(B) && B !== "0x" && (R.to = B),
      (0, i.isHex)(T) && T !== "0x" && (R.gas = (0, a.hexToBigInt)(T)),
      (0, i.isHex)(A) && A !== "0x" && (R.data = A),
      (0, i.isHex)(w) && w !== "0x" && (R.nonce = (0, a.hexToNumber)(w)),
      (0, i.isHex)(M) && M !== "0x" && (R.value = (0, a.hexToBigInt)(M)),
      (0, i.isHex)(q) && q !== "0x" && (R.gasPrice = (0, a.hexToBigInt)(q)),
      x.length !== 0 && x !== "0x" && (R.accessList = m(x)),
      (0, c.assertTransactionEIP2930)(R),
      { ...(P.length === 11 ? y(P) : void 0), ...R }
    );
  }
  function _(j) {
    const P = (0, u.fromRlp)(j, "hex"),
      [S, w, q, T, B, M, A, x, $] = P;
    if (!(P.length === 6 || P.length === 9))
      throw new t.InvalidSerializedTransactionError({
        attributes: {
          nonce: S,
          gasPrice: w,
          gas: q,
          to: T,
          value: B,
          data: M,
          ...(P.length > 6 ? { v: A, r: x, s: $ } : {}),
        },
        serializedTransaction: j,
        type: "legacy",
      });
    const F = { type: "legacy" };
    if (
      ((0, i.isHex)(T) && T !== "0x" && (F.to = T),
      (0, i.isHex)(q) && q !== "0x" && (F.gas = (0, a.hexToBigInt)(q)),
      (0, i.isHex)(M) && M !== "0x" && (F.data = M),
      (0, i.isHex)(S) && S !== "0x" && (F.nonce = (0, a.hexToNumber)(S)),
      (0, i.isHex)(B) && B !== "0x" && (F.value = (0, a.hexToBigInt)(B)),
      (0, i.isHex)(w) && w !== "0x" && (F.gasPrice = (0, a.hexToBigInt)(w)),
      (0, c.assertTransactionLegacy)(F),
      P.length === 6)
    )
      return F;
    const H = (0, i.isHex)(A) && A !== "0x" ? (0, a.hexToBigInt)(A) : 0n;
    if ($ === "0x" && x === "0x") return H > 0 && (F.chainId = Number(H)), F;
    const R = H,
      O = Number((R - 35n) / 2n);
    if (O > 0) F.chainId = O;
    else if (R !== 27n && R !== 28n) throw new t.InvalidLegacyVError({ v: R });
    return (
      (F.v = R), (F.s = $), (F.r = x), (F.yParity = R % 2n === 0n ? 1 : 0), F
    );
  }
  function E(j) {
    return (0, u.fromRlp)(`0x${j.slice(4)}`, "hex");
  }
  function m(j) {
    const P = [];
    for (let S = 0; S < j.length; S++) {
      const [w, q] = j[S];
      if (!(0, n.isAddress)(w, { strict: !1 }))
        throw new e.InvalidAddressError({ address: w });
      P.push({
        address: w,
        storageKeys: q.map((T) => ((0, f.isHash)(T) ? T : (0, o.trim)(T))),
      });
    }
    return P;
  }
  function p(j) {
    const P = [];
    for (let S = 0; S < j.length; S++) {
      const [w, q, T, B, M, A] = j[S];
      P.push({
        chainId: (0, a.hexToNumber)(w),
        contractAddress: q,
        nonce: (0, a.hexToNumber)(T),
        ...y([B, M, A]),
      });
    }
    return P;
  }
  function y(j) {
    const P = j.slice(-3),
      S = P[0] === "0x" || (0, a.hexToBigInt)(P[0]) === 0n ? 27n : 28n;
    return {
      r: (0, s.padHex)(P[1], { size: 32 }),
      s: (0, s.padHex)(P[2], { size: 32 }),
      v: S,
      yParity: S === 27n ? 0 : 1,
    };
  }
  return Rr;
}
var Cn = {},
  Ga = {},
  q0;
function n_() {
  if (q0) return Ga;
  (q0 = 1),
    Object.defineProperty(Ga, "__esModule", { value: !0 }),
    (Ga.serializeAuthorizationList = n);
  const e = Q(),
    t = Uu();
  function n(r) {
    if (!r || r.length === 0) return [];
    const i = [];
    for (const s of r) {
      const { contractAddress: o, chainId: a, nonce: u, ...f } = s;
      i.push([
        a ? (0, e.toHex)(a) : "0x",
        o,
        u ? (0, e.toHex)(u) : "0x",
        ...(0, t.toYParitySignatureArray)({}, f),
      ]);
    }
    return i;
  }
  return Ga;
}
var Va = {},
  x0;
function qd() {
  if (x0) return Va;
  (x0 = 1),
    Object.defineProperty(Va, "__esModule", { value: !0 }),
    (Va.serializeAccessList = r);
  const e = Ze(),
    t = He(),
    n = Fe();
  function r(i) {
    if (!i || i.length === 0) return [];
    const s = [];
    for (let o = 0; o < i.length; o++) {
      const { address: a, storageKeys: u } = i[o];
      for (let f = 0; f < u.length; f++)
        if (u[f].length - 2 !== 64)
          throw new t.InvalidStorageKeySizeError({ storageKey: u[f] });
      if (!(0, n.isAddress)(a, { strict: !1 }))
        throw new e.InvalidAddressError({ address: a });
      s.push([a, u]);
    }
    return s;
  }
  return Va;
}
var M0;
function Uu() {
  if (M0) return Cn;
  (M0 = 1),
    Object.defineProperty(Cn, "__esModule", { value: !0 }),
    (Cn.serializeTransaction = g),
    (Cn.toYParitySignatureArray = m);
  const e = He(),
    t = Bu(),
    n = Cu(),
    r = id(),
    i = qu(),
    s = Be(),
    o = $t(),
    a = Q(),
    u = Kn(),
    f = n_(),
    c = Du(),
    d = xu(),
    l = qd();
  function g(p, y) {
    const j = (0, d.getTransactionType)(p);
    return j === "eip1559"
      ? v(p, y)
      : j === "eip2930"
        ? _(p, y)
        : j === "eip4844"
          ? b(p, y)
          : j === "eip7702"
            ? h(p, y)
            : E(p, y);
  }
  function h(p, y) {
    const {
      authorizationList: j,
      chainId: P,
      gas: S,
      nonce: w,
      to: q,
      value: T,
      maxFeePerGas: B,
      maxPriorityFeePerGas: M,
      accessList: A,
      data: x,
    } = p;
    (0, c.assertTransactionEIP7702)(p);
    const $ = (0, l.serializeAccessList)(A),
      F = (0, f.serializeAuthorizationList)(j);
    return (0, s.concatHex)([
      "0x04",
      (0, u.toRlp)([
        (0, a.toHex)(P),
        w ? (0, a.toHex)(w) : "0x",
        M ? (0, a.toHex)(M) : "0x",
        B ? (0, a.toHex)(B) : "0x",
        S ? (0, a.toHex)(S) : "0x",
        q ?? "0x",
        T ? (0, a.toHex)(T) : "0x",
        x ?? "0x",
        $,
        F,
        ...m(p, y),
      ]),
    ]);
  }
  function b(p, y) {
    const {
      chainId: j,
      gas: P,
      nonce: S,
      to: w,
      value: q,
      maxFeePerBlobGas: T,
      maxFeePerGas: B,
      maxPriorityFeePerGas: M,
      accessList: A,
      data: x,
    } = p;
    (0, c.assertTransactionEIP4844)(p);
    let $ = p.blobVersionedHashes,
      F = p.sidecars;
    if (p.blobs && (typeof $ > "u" || typeof F > "u")) {
      const k =
          typeof p.blobs[0] == "string"
            ? p.blobs
            : p.blobs.map((L) => (0, a.bytesToHex)(L)),
        z = p.kzg,
        U = (0, t.blobsToCommitments)({ blobs: k, kzg: z });
      if (
        (typeof $ > "u" &&
          ($ = (0, r.commitmentsToVersionedHashes)({ commitments: U })),
        typeof F > "u")
      ) {
        const L = (0, n.blobsToProofs)({ blobs: k, commitments: U, kzg: z });
        F = (0, i.toBlobSidecars)({ blobs: k, commitments: U, proofs: L });
      }
    }
    const H = (0, l.serializeAccessList)(A),
      R = [
        (0, a.toHex)(j),
        S ? (0, a.toHex)(S) : "0x",
        M ? (0, a.toHex)(M) : "0x",
        B ? (0, a.toHex)(B) : "0x",
        P ? (0, a.toHex)(P) : "0x",
        w ?? "0x",
        q ? (0, a.toHex)(q) : "0x",
        x ?? "0x",
        H,
        T ? (0, a.toHex)(T) : "0x",
        $ ?? [],
        ...m(p, y),
      ],
      O = [],
      I = [],
      C = [];
    if (F)
      for (let k = 0; k < F.length; k++) {
        const { blob: z, commitment: U, proof: L } = F[k];
        O.push(z), I.push(U), C.push(L);
      }
    return (0, s.concatHex)([
      "0x03",
      F ? (0, u.toRlp)([R, O, I, C]) : (0, u.toRlp)(R),
    ]);
  }
  function v(p, y) {
    const {
      chainId: j,
      gas: P,
      nonce: S,
      to: w,
      value: q,
      maxFeePerGas: T,
      maxPriorityFeePerGas: B,
      accessList: M,
      data: A,
    } = p;
    (0, c.assertTransactionEIP1559)(p);
    const x = (0, l.serializeAccessList)(M),
      $ = [
        (0, a.toHex)(j),
        S ? (0, a.toHex)(S) : "0x",
        B ? (0, a.toHex)(B) : "0x",
        T ? (0, a.toHex)(T) : "0x",
        P ? (0, a.toHex)(P) : "0x",
        w ?? "0x",
        q ? (0, a.toHex)(q) : "0x",
        A ?? "0x",
        x,
        ...m(p, y),
      ];
    return (0, s.concatHex)(["0x02", (0, u.toRlp)($)]);
  }
  function _(p, y) {
    const {
      chainId: j,
      gas: P,
      data: S,
      nonce: w,
      to: q,
      value: T,
      accessList: B,
      gasPrice: M,
    } = p;
    (0, c.assertTransactionEIP2930)(p);
    const A = (0, l.serializeAccessList)(B),
      x = [
        (0, a.toHex)(j),
        w ? (0, a.toHex)(w) : "0x",
        M ? (0, a.toHex)(M) : "0x",
        P ? (0, a.toHex)(P) : "0x",
        q ?? "0x",
        T ? (0, a.toHex)(T) : "0x",
        S ?? "0x",
        A,
        ...m(p, y),
      ];
    return (0, s.concatHex)(["0x01", (0, u.toRlp)(x)]);
  }
  function E(p, y) {
    const {
      chainId: j = 0,
      gas: P,
      data: S,
      nonce: w,
      to: q,
      value: T,
      gasPrice: B,
    } = p;
    (0, c.assertTransactionLegacy)(p);
    let M = [
      w ? (0, a.toHex)(w) : "0x",
      B ? (0, a.toHex)(B) : "0x",
      P ? (0, a.toHex)(P) : "0x",
      q ?? "0x",
      T ? (0, a.toHex)(T) : "0x",
      S ?? "0x",
    ];
    if (y) {
      const A = (() => {
          if (y.v >= 35n)
            return (y.v - 35n) / 2n > 0 ? y.v : 27n + (y.v === 35n ? 0n : 1n);
          if (j > 0) return BigInt(j * 2) + BigInt(35n + y.v - 27n);
          const F = 27n + (y.v === 27n ? 0n : 1n);
          if (y.v !== F) throw new e.InvalidLegacyVError({ v: y.v });
          return F;
        })(),
        x = (0, o.trim)(y.r),
        $ = (0, o.trim)(y.s);
      M = [
        ...M,
        (0, a.toHex)(A),
        x === "0x00" ? "0x" : x,
        $ === "0x00" ? "0x" : $,
      ];
    } else j > 0 && (M = [...M, (0, a.toHex)(j), "0x", "0x"]);
    return (0, u.toRlp)(M);
  }
  function m(p, y) {
    const j = y ?? p,
      { v: P, yParity: S } = j;
    if (typeof j.r > "u") return [];
    if (typeof j.s > "u") return [];
    if (typeof P > "u" && typeof S > "u") return [];
    const w = (0, o.trim)(j.r),
      q = (0, o.trim)(j.s);
    return [
      typeof S == "number"
        ? S
          ? (0, a.toHex)(1)
          : "0x"
        : P === 0n
          ? "0x"
          : P === 1n
            ? (0, a.toHex)(1)
            : P === 27n
              ? "0x"
              : (0, a.toHex)(1),
      w === "0x00" ? "0x" : w,
      q === "0x00" ? "0x" : q,
    ];
  }
  return Cn;
}
var Wa = {},
  qn = {},
  F0;
function Ly() {
  if (F0) return qn;
  (F0 = 1),
    Object.defineProperty(qn, "__esModule", { value: !0 }),
    (qn.InvalidDecimalNumberError = void 0);
  const e = oe();
  class t extends e.BaseError {
    constructor({ value: r }) {
      super(`Number \`${r}\` is not a valid decimal number.`, {
        name: "InvalidDecimalNumberError",
      });
    }
  }
  return (qn.InvalidDecimalNumberError = t), qn;
}
var H0;
function Gu() {
  if (H0) return Wa;
  (H0 = 1),
    Object.defineProperty(Wa, "__esModule", { value: !0 }),
    (Wa.parseUnits = t);
  const e = Ly();
  function t(n, r) {
    if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(n))
      throw new e.InvalidDecimalNumberError({ value: n });
    let [i, s = "0"] = n.split(".");
    const o = i.startsWith("-");
    if ((o && (i = i.slice(1)), (s = s.replace(/(0+)$/, "")), r === 0))
      Math.round(+`.${s}`) === 1 && (i = `${BigInt(i) + 1n}`), (s = "");
    else if (s.length > r) {
      const [a, u, f] = [s.slice(0, r - 1), s.slice(r - 1, r), s.slice(r)],
        c = Math.round(+`${u}.${f}`);
      c > 9
        ? (s = `${BigInt(a) + BigInt(1)}0`.padStart(a.length + 1, "0"))
        : (s = `${a}${c}`),
        s.length > r && ((s = s.slice(1)), (i = `${BigInt(i) + 1n}`)),
        (s = s.slice(0, r));
    } else s = s.padEnd(r, "0");
    return BigInt(`${o ? "-" : ""}${i}${s}`);
  }
  return Wa;
}
var Ka = {},
  k0;
function Dy() {
  if (k0) return Ka;
  (k0 = 1),
    Object.defineProperty(Ka, "__esModule", { value: !0 }),
    (Ka.parseEther = n);
  const e = Un(),
    t = Gu();
  function n(r, i = "wei") {
    return (0, t.parseUnits)(r, e.etherUnits[i]);
  }
  return Ka;
}
var Za = {},
  $0;
function Uy() {
  if ($0) return Za;
  ($0 = 1),
    Object.defineProperty(Za, "__esModule", { value: !0 }),
    (Za.parseGwei = n);
  const e = Un(),
    t = Gu();
  function n(r, i = "wei") {
    return (0, t.parseUnits)(r, e.gweiUnits[i]);
  }
  return Za;
}
var ar = {},
  N0;
function Gy() {
  if (N0) return ar;
  (N0 = 1),
    Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.nonceManager = void 0),
    (ar.createNonceManager = n),
    (ar.jsonRpc = r);
  const e = rd(),
    t = Ln();
  function n(i) {
    const { source: s } = i,
      o = new Map(),
      a = new t.LruMap(8192),
      u = new Map(),
      f = ({ address: c, chainId: d }) => `${c}.${d}`;
    return {
      async consume({ address: c, chainId: d, client: l }) {
        const g = f({ address: c, chainId: d }),
          h = this.get({ address: c, chainId: d, client: l });
        this.increment({ address: c, chainId: d });
        const b = await h;
        return await s.set({ address: c, chainId: d }, b), a.set(g, b), b;
      },
      async increment({ address: c, chainId: d }) {
        const l = f({ address: c, chainId: d }),
          g = o.get(l) ?? 0;
        o.set(l, g + 1);
      },
      async get({ address: c, chainId: d, client: l }) {
        const g = f({ address: c, chainId: d });
        let h = u.get(g);
        return (
          h ||
            ((h = (async () => {
              try {
                const v = await s.get({ address: c, chainId: d, client: l }),
                  _ = a.get(g) ?? 0;
                return _ > 0 && v <= _ ? _ + 1 : (a.delete(g), v);
              } finally {
                this.reset({ address: c, chainId: d });
              }
            })()),
            u.set(g, h)),
          (o.get(g) ?? 0) + (await h)
        );
      },
      reset({ address: c, chainId: d }) {
        const l = f({ address: c, chainId: d });
        o.delete(l), u.delete(l);
      },
    };
  }
  function r() {
    return {
      async get(i) {
        const { address: s, client: o } = i;
        return (0, e.getTransactionCount)(o, {
          address: s,
          blockTag: "pending",
        });
      },
      set() {},
    };
  }
  return (ar.nonceManager = n({ source: r() })), ar;
}
var z0;
function Vy() {
  return (
    z0 ||
      ((z0 = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isAddress =
            e.getAddress =
            e.getCreate2Address =
            e.getCreateAddress =
            e.getContractAddress =
            e.publicKeyToAddress =
            e.parseAccount =
            e.formatAbiParams =
            e.formatAbiItem =
            e.formatAbiItemWithArgs =
            e.encodePacked =
            e.parseAbiParameters =
            e.parseAbiParameter =
            e.parseAbiItem =
            e.parseAbi =
            e.getAbiItem =
            e.parseEventLogs =
            e.encodeFunctionResult =
            e.encodeFunctionData =
            e.encodeEventTopics =
            e.encodeErrorResult =
            e.encodeDeployData =
            e.encodeAbiParameters =
            e.decodeFunctionResult =
            e.decodeFunctionData =
            e.decodeEventLog =
            e.decodeErrorResult =
            e.decodeAbiParameters =
            e.validateTypedData =
            e.serializeTypedData =
            e.stringify =
            e.getWebSocketRpcClient =
            e.socketClientCache =
            e.getSocketRpcClient =
            e.getHttpRpcClient =
            e.rpc =
            e.getSocket =
            e.integerRegex =
            e.bytesRegex =
            e.arrayRegex =
            e.getChainContractAddress =
            e.extractChain =
            e.defineChain =
            e.assertCurrentChain =
            e.offchainLookupSignature =
            e.offchainLookupAbiItem =
            e.offchainLookup =
            e.ccipFetch =
            e.ccipRequest =
            e.buildRequest =
              void 0),
          (e.getCallError =
            e.getNodeError =
            e.containsNodeError =
            e.fromRlp =
            e.hexToString =
            e.hexToNumber =
            e.hexToBigInt =
            e.hexToBool =
            e.fromHex =
            e.fromBytes =
            e.bytesToString =
            e.bytesToNumber =
            e.bytesToBool =
            e.bytesToBigint =
            e.bytesToBigInt =
            e.stringToHex =
            e.numberToHex =
            e.toHex =
            e.bytesToHex =
            e.boolToHex =
            e.stringToBytes =
            e.numberToBytes =
            e.hexToBytes =
            e.toBytes =
            e.boolToBytes =
            e.toRlp =
            e.extract =
            e.formatTransactionRequest =
            e.defineTransactionRequest =
            e.defineTransactionReceipt =
            e.formatLog =
            e.transactionType =
            e.formatTransaction =
            e.defineTransaction =
            e.formatBlock =
            e.defineBlock =
            e.trim =
            e.sliceHex =
            e.sliceBytes =
            e.slice =
            e.size =
            e.padHex =
            e.padBytes =
            e.pad =
            e.isHex =
            e.isBytes =
            e.concatHex =
            e.concatBytes =
            e.concat =
            e.isAddressEqual =
              void 0),
          (e.nonceManager =
            e.createNonceManager =
            e.parseGwei =
            e.parseEther =
            e.parseUnits =
            e.formatUnits =
            e.formatGwei =
            e.formatEther =
            e.serializeAccessList =
            e.serializeTransaction =
            e.parseTransaction =
            e.assertTransactionLegacy =
            e.assertTransactionEIP2930 =
            e.assertTransactionEIP1559 =
            e.assertRequest =
            e.getTransactionType =
            e.getSerializedTransactionType =
            e.serializeErc6492Signature =
            e.isErc6492Signature =
            e.parseErc6492Signature =
            e.hashMessage =
            e.verifyTypedData =
            e.verifyMessage =
            e.verifyHash =
            e.recoverTypedDataAddress =
            e.recoverPublicKey =
            e.recoverMessageAddress =
            e.recoverAddress =
            e.hashTypedData =
            e.hashStruct =
            e.ripemd160 =
            e.sha256 =
            e.keccak256 =
            e.isHash =
            e.toFunctionHash =
            e.toEventHash =
            e.getFunctionSignature =
            e.toFunctionSignature =
            e.getEventSignature =
            e.toEventSignature =
            e.getFunctionSelector =
            e.toFunctionSelector =
            e.getEventSelector =
            e.toEventSelector =
            e.defineFormatter =
            e.getAction =
            e.getTransactionError =
            e.getEstimateGasError =
            e.getContractError =
              void 0);
        var t = my();
        Object.defineProperty(e, "buildRequest", {
          enumerable: !0,
          get: function () {
            return t.buildRequest;
          },
        });
        var n = ld();
        Object.defineProperty(e, "ccipRequest", {
          enumerable: !0,
          get: function () {
            return n.ccipRequest;
          },
        }),
          Object.defineProperty(e, "ccipFetch", {
            enumerable: !0,
            get: function () {
              return n.ccipRequest;
            },
          }),
          Object.defineProperty(e, "offchainLookup", {
            enumerable: !0,
            get: function () {
              return n.offchainLookup;
            },
          }),
          Object.defineProperty(e, "offchainLookupAbiItem", {
            enumerable: !0,
            get: function () {
              return n.offchainLookupAbiItem;
            },
          }),
          Object.defineProperty(e, "offchainLookupSignature", {
            enumerable: !0,
            get: function () {
              return n.offchainLookupSignature;
            },
          });
        var r = ku();
        Object.defineProperty(e, "assertCurrentChain", {
          enumerable: !0,
          get: function () {
            return r.assertCurrentChain;
          },
        });
        var i = Ey();
        Object.defineProperty(e, "defineChain", {
          enumerable: !0,
          get: function () {
            return i.defineChain;
          },
        });
        var s = jy();
        Object.defineProperty(e, "extractChain", {
          enumerable: !0,
          get: function () {
            return s.extractChain;
          },
        });
        var o = Gt();
        Object.defineProperty(e, "getChainContractAddress", {
          enumerable: !0,
          get: function () {
            return o.getChainContractAddress;
          },
        });
        var a = wu();
        Object.defineProperty(e, "arrayRegex", {
          enumerable: !0,
          get: function () {
            return a.arrayRegex;
          },
        }),
          Object.defineProperty(e, "bytesRegex", {
            enumerable: !0,
            get: function () {
              return a.bytesRegex;
            },
          }),
          Object.defineProperty(e, "integerRegex", {
            enumerable: !0,
            get: function () {
              return a.integerRegex;
            },
          });
        var u = wy();
        Object.defineProperty(e, "getSocket", {
          enumerable: !0,
          get: function () {
            return u.getSocket;
          },
        }),
          Object.defineProperty(e, "rpc", {
            enumerable: !0,
            get: function () {
              return u.rpc;
            },
          });
        var f = _d();
        Object.defineProperty(e, "getHttpRpcClient", {
          enumerable: !0,
          get: function () {
            return f.getHttpRpcClient;
          },
        });
        var c = Py();
        Object.defineProperty(e, "getSocketRpcClient", {
          enumerable: !0,
          get: function () {
            return c.getSocketRpcClient;
          },
        }),
          Object.defineProperty(e, "socketClientCache", {
            enumerable: !0,
            get: function () {
              return c.socketClientCache;
            },
          });
        var d = jd();
        Object.defineProperty(e, "getWebSocketRpcClient", {
          enumerable: !0,
          get: function () {
            return d.getWebSocketRpcClient;
          },
        });
        var l = Se();
        Object.defineProperty(e, "stringify", {
          enumerable: !0,
          get: function () {
            return l.stringify;
          },
        });
        var g = zu();
        Object.defineProperty(e, "serializeTypedData", {
          enumerable: !0,
          get: function () {
            return g.serializeTypedData;
          },
        }),
          Object.defineProperty(e, "validateTypedData", {
            enumerable: !0,
            get: function () {
              return g.validateTypedData;
            },
          });
        var h = Nt();
        Object.defineProperty(e, "decodeAbiParameters", {
          enumerable: !0,
          get: function () {
            return h.decodeAbiParameters;
          },
        });
        var b = Au();
        Object.defineProperty(e, "decodeErrorResult", {
          enumerable: !0,
          get: function () {
            return b.decodeErrorResult;
          },
        });
        var v = Qn();
        Object.defineProperty(e, "decodeEventLog", {
          enumerable: !0,
          get: function () {
            return v.decodeEventLog;
          },
        });
        var _ = Ay();
        Object.defineProperty(e, "decodeFunctionData", {
          enumerable: !0,
          get: function () {
            return _.decodeFunctionData;
          },
        });
        var E = Rt();
        Object.defineProperty(e, "decodeFunctionResult", {
          enumerable: !0,
          get: function () {
            return E.decodeFunctionResult;
          },
        });
        var m = Ye();
        Object.defineProperty(e, "encodeAbiParameters", {
          enumerable: !0,
          get: function () {
            return m.encodeAbiParameters;
          },
        });
        var p = ro();
        Object.defineProperty(e, "encodeDeployData", {
          enumerable: !0,
          get: function () {
            return p.encodeDeployData;
          },
        });
        var y = Sy();
        Object.defineProperty(e, "encodeErrorResult", {
          enumerable: !0,
          get: function () {
            return y.encodeErrorResult;
          },
        });
        var j = lr();
        Object.defineProperty(e, "encodeEventTopics", {
          enumerable: !0,
          get: function () {
            return j.encodeEventTopics;
          },
        });
        var P = Xe();
        Object.defineProperty(e, "encodeFunctionData", {
          enumerable: !0,
          get: function () {
            return P.encodeFunctionData;
          },
        });
        var S = Iy();
        Object.defineProperty(e, "encodeFunctionResult", {
          enumerable: !0,
          get: function () {
            return S.encodeFunctionResult;
          },
        });
        var w = eo();
        Object.defineProperty(e, "parseEventLogs", {
          enumerable: !0,
          get: function () {
            return w.parseEventLogs;
          },
        });
        var q = wt();
        Object.defineProperty(e, "getAbiItem", {
          enumerable: !0,
          get: function () {
            return q.getAbiItem;
          },
        });
        var T = Eu();
        Object.defineProperty(e, "parseAbi", {
          enumerable: !0,
          get: function () {
            return T.parseAbi;
          },
        }),
          Object.defineProperty(e, "parseAbiItem", {
            enumerable: !0,
            get: function () {
              return T.parseAbiItem;
            },
          }),
          Object.defineProperty(e, "parseAbiParameter", {
            enumerable: !0,
            get: function () {
              return T.parseAbiParameter;
            },
          }),
          Object.defineProperty(e, "parseAbiParameters", {
            enumerable: !0,
            get: function () {
              return T.parseAbiParameters;
            },
          });
        var B = Ry();
        Object.defineProperty(e, "encodePacked", {
          enumerable: !0,
          get: function () {
            return B.encodePacked;
          },
        });
        var M = Wg();
        Object.defineProperty(e, "formatAbiItemWithArgs", {
          enumerable: !0,
          get: function () {
            return M.formatAbiItemWithArgs;
          },
        });
        var A = Pt();
        Object.defineProperty(e, "formatAbiItem", {
          enumerable: !0,
          get: function () {
            return A.formatAbiItem;
          },
        }),
          Object.defineProperty(e, "formatAbiParams", {
            enumerable: !0,
            get: function () {
              return A.formatAbiParams;
            },
          });
        var x = Ae();
        Object.defineProperty(e, "parseAccount", {
          enumerable: !0,
          get: function () {
            return x.parseAccount;
          },
        });
        var $ = Kg();
        Object.defineProperty(e, "publicKeyToAddress", {
          enumerable: !0,
          get: function () {
            return $.publicKeyToAddress;
          },
        });
        var F = Oy();
        Object.defineProperty(e, "getContractAddress", {
          enumerable: !0,
          get: function () {
            return F.getContractAddress;
          },
        }),
          Object.defineProperty(e, "getCreateAddress", {
            enumerable: !0,
            get: function () {
              return F.getCreateAddress;
            },
          }),
          Object.defineProperty(e, "getCreate2Address", {
            enumerable: !0,
            get: function () {
              return F.getCreate2Address;
            },
          });
        var H = ke();
        Object.defineProperty(e, "getAddress", {
          enumerable: !0,
          get: function () {
            return H.getAddress;
          },
        });
        var R = Fe();
        Object.defineProperty(e, "isAddress", {
          enumerable: !0,
          get: function () {
            return R.isAddress;
          },
        });
        var O = St();
        Object.defineProperty(e, "isAddressEqual", {
          enumerable: !0,
          get: function () {
            return O.isAddressEqual;
          },
        });
        var I = Be();
        Object.defineProperty(e, "concat", {
          enumerable: !0,
          get: function () {
            return I.concat;
          },
        }),
          Object.defineProperty(e, "concatBytes", {
            enumerable: !0,
            get: function () {
              return I.concatBytes;
            },
          }),
          Object.defineProperty(e, "concatHex", {
            enumerable: !0,
            get: function () {
              return I.concatHex;
            },
          });
        var C = Pd();
        Object.defineProperty(e, "isBytes", {
          enumerable: !0,
          get: function () {
            return C.isBytes;
          },
        });
        var k = Re();
        Object.defineProperty(e, "isHex", {
          enumerable: !0,
          get: function () {
            return k.isHex;
          },
        });
        var z = kt();
        Object.defineProperty(e, "pad", {
          enumerable: !0,
          get: function () {
            return z.pad;
          },
        }),
          Object.defineProperty(e, "padBytes", {
            enumerable: !0,
            get: function () {
              return z.padBytes;
            },
          }),
          Object.defineProperty(e, "padHex", {
            enumerable: !0,
            get: function () {
              return z.padHex;
            },
          });
        var U = Me();
        Object.defineProperty(e, "size", {
          enumerable: !0,
          get: function () {
            return U.size;
          },
        });
        var L = Je();
        Object.defineProperty(e, "slice", {
          enumerable: !0,
          get: function () {
            return L.slice;
          },
        }),
          Object.defineProperty(e, "sliceBytes", {
            enumerable: !0,
            get: function () {
              return L.sliceBytes;
            },
          }),
          Object.defineProperty(e, "sliceHex", {
            enumerable: !0,
            get: function () {
              return L.sliceHex;
            },
          });
        var V = $t();
        Object.defineProperty(e, "trim", {
          enumerable: !0,
          get: function () {
            return V.trim;
          },
        });
        var G = Ou();
        Object.defineProperty(e, "defineBlock", {
          enumerable: !0,
          get: function () {
            return G.defineBlock;
          },
        }),
          Object.defineProperty(e, "formatBlock", {
            enumerable: !0,
            get: function () {
              return G.formatBlock;
            },
          });
        var Z = Yn();
        Object.defineProperty(e, "defineTransaction", {
          enumerable: !0,
          get: function () {
            return Z.defineTransaction;
          },
        }),
          Object.defineProperty(e, "formatTransaction", {
            enumerable: !0,
            get: function () {
              return Z.formatTransaction;
            },
          }),
          Object.defineProperty(e, "transactionType", {
            enumerable: !0,
            get: function () {
              return Z.transactionType;
            },
          });
        var ee = It();
        Object.defineProperty(e, "formatLog", {
          enumerable: !0,
          get: function () {
            return ee.formatLog;
          },
        });
        var J = wd();
        Object.defineProperty(e, "defineTransactionReceipt", {
          enumerable: !0,
          get: function () {
            return J.defineTransactionReceipt;
          },
        });
        var ae = Tt();
        Object.defineProperty(e, "defineTransactionRequest", {
          enumerable: !0,
          get: function () {
            return ae.defineTransactionRequest;
          },
        }),
          Object.defineProperty(e, "formatTransactionRequest", {
            enumerable: !0,
            get: function () {
              return ae.formatTransactionRequest;
            },
          });
        var K = Fr();
        Object.defineProperty(e, "extract", {
          enumerable: !0,
          get: function () {
            return K.extract;
          },
        });
        var X = Kn();
        Object.defineProperty(e, "toRlp", {
          enumerable: !0,
          get: function () {
            return X.toRlp;
          },
        });
        var Y = le();
        Object.defineProperty(e, "boolToBytes", {
          enumerable: !0,
          get: function () {
            return Y.boolToBytes;
          },
        }),
          Object.defineProperty(e, "toBytes", {
            enumerable: !0,
            get: function () {
              return Y.toBytes;
            },
          }),
          Object.defineProperty(e, "hexToBytes", {
            enumerable: !0,
            get: function () {
              return Y.hexToBytes;
            },
          }),
          Object.defineProperty(e, "numberToBytes", {
            enumerable: !0,
            get: function () {
              return Y.numberToBytes;
            },
          }),
          Object.defineProperty(e, "stringToBytes", {
            enumerable: !0,
            get: function () {
              return Y.stringToBytes;
            },
          });
        var W = Q();
        Object.defineProperty(e, "boolToHex", {
          enumerable: !0,
          get: function () {
            return W.boolToHex;
          },
        }),
          Object.defineProperty(e, "bytesToHex", {
            enumerable: !0,
            get: function () {
              return W.bytesToHex;
            },
          }),
          Object.defineProperty(e, "toHex", {
            enumerable: !0,
            get: function () {
              return W.toHex;
            },
          }),
          Object.defineProperty(e, "numberToHex", {
            enumerable: !0,
            get: function () {
              return W.numberToHex;
            },
          }),
          Object.defineProperty(e, "stringToHex", {
            enumerable: !0,
            get: function () {
              return W.stringToHex;
            },
          });
        var D = Wc();
        Object.defineProperty(e, "bytesToBigInt", {
          enumerable: !0,
          get: function () {
            return D.bytesToBigInt;
          },
        }),
          Object.defineProperty(e, "bytesToBigint", {
            enumerable: !0,
            get: function () {
              return D.bytesToBigInt;
            },
          }),
          Object.defineProperty(e, "bytesToBool", {
            enumerable: !0,
            get: function () {
              return D.bytesToBool;
            },
          }),
          Object.defineProperty(e, "bytesToNumber", {
            enumerable: !0,
            get: function () {
              return D.bytesToNumber;
            },
          }),
          Object.defineProperty(e, "bytesToString", {
            enumerable: !0,
            get: function () {
              return D.bytesToString;
            },
          }),
          Object.defineProperty(e, "fromBytes", {
            enumerable: !0,
            get: function () {
              return D.fromBytes;
            },
          });
        var se = Pe();
        Object.defineProperty(e, "fromHex", {
          enumerable: !0,
          get: function () {
            return se.fromHex;
          },
        }),
          Object.defineProperty(e, "hexToBool", {
            enumerable: !0,
            get: function () {
              return se.hexToBool;
            },
          }),
          Object.defineProperty(e, "hexToBigInt", {
            enumerable: !0,
            get: function () {
              return se.hexToBigInt;
            },
          }),
          Object.defineProperty(e, "hexToNumber", {
            enumerable: !0,
            get: function () {
              return se.hexToNumber;
            },
          }),
          Object.defineProperty(e, "hexToString", {
            enumerable: !0,
            get: function () {
              return se.hexToString;
            },
          });
        var pe = Td();
        Object.defineProperty(e, "fromRlp", {
          enumerable: !0,
          get: function () {
            return pe.fromRlp;
          },
        });
        var ce = Zn();
        Object.defineProperty(e, "containsNodeError", {
          enumerable: !0,
          get: function () {
            return ce.containsNodeError;
          },
        }),
          Object.defineProperty(e, "getNodeError", {
            enumerable: !0,
            get: function () {
              return ce.getNodeError;
            },
          });
        var he = dd();
        Object.defineProperty(e, "getCallError", {
          enumerable: !0,
          get: function () {
            return he.getCallError;
          },
        });
        var ve = Lt();
        Object.defineProperty(e, "getContractError", {
          enumerable: !0,
          get: function () {
            return ve.getContractError;
          },
        });
        var _e = Xg();
        Object.defineProperty(e, "getEstimateGasError", {
          enumerable: !0,
          get: function () {
            return _e.getEstimateGasError;
          },
        });
        var $e = dy();
        Object.defineProperty(e, "getTransactionError", {
          enumerable: !0,
          get: function () {
            return $e.getTransactionError;
          },
        });
        var je = fe();
        Object.defineProperty(e, "getAction", {
          enumerable: !0,
          get: function () {
            return je.getAction;
          },
        });
        var Ne = Jn();
        Object.defineProperty(e, "defineFormatter", {
          enumerable: !0,
          get: function () {
            return Ne.defineFormatter;
          },
        });
        var we = Mr();
        Object.defineProperty(e, "toEventSelector", {
          enumerable: !0,
          get: function () {
            return we.toEventSelector;
          },
        }),
          Object.defineProperty(e, "getEventSelector", {
            enumerable: !0,
            get: function () {
              return we.toEventSelector;
            },
          });
        var ze = fr();
        Object.defineProperty(e, "toFunctionSelector", {
          enumerable: !0,
          get: function () {
            return ze.toFunctionSelector;
          },
        }),
          Object.defineProperty(e, "getFunctionSelector", {
            enumerable: !0,
            get: function () {
              return ze.toFunctionSelector;
            },
          });
        var et = By();
        Object.defineProperty(e, "toEventSignature", {
          enumerable: !0,
          get: function () {
            return et.toEventSignature;
          },
        }),
          Object.defineProperty(e, "getEventSignature", {
            enumerable: !0,
            get: function () {
              return et.toEventSignature;
            },
          });
        var tt = Cy();
        Object.defineProperty(e, "toFunctionSignature", {
          enumerable: !0,
          get: function () {
            return tt.toFunctionSignature;
          },
        }),
          Object.defineProperty(e, "getFunctionSignature", {
            enumerable: !0,
            get: function () {
              return tt.toFunctionSignature;
            },
          });
        var Le = qy();
        Object.defineProperty(e, "toEventHash", {
          enumerable: !0,
          get: function () {
            return Le.toEventHash;
          },
        });
        var De = xy();
        Object.defineProperty(e, "toFunctionHash", {
          enumerable: !0,
          get: function () {
            return De.toFunctionHash;
          },
        });
        var nt = Ad();
        Object.defineProperty(e, "isHash", {
          enumerable: !0,
          get: function () {
            return nt.isHash;
          },
        });
        var Ue = Oe();
        Object.defineProperty(e, "keccak256", {
          enumerable: !0,
          get: function () {
            return Ue.keccak256;
          },
        });
        var fo = nd();
        Object.defineProperty(e, "sha256", {
          enumerable: !0,
          get: function () {
            return fo.sha256;
          },
        });
        var Wu = My();
        Object.defineProperty(e, "ripemd160", {
          enumerable: !0,
          get: function () {
            return Wu.ripemd160;
          },
        });
        var lo = uo();
        Object.defineProperty(e, "hashStruct", {
          enumerable: !0,
          get: function () {
            return lo.hashStruct;
          },
        }),
          Object.defineProperty(e, "hashTypedData", {
            enumerable: !0,
            get: function () {
              return lo.hashTypedData;
            },
          });
        var Ku = Dt();
        Object.defineProperty(e, "recoverAddress", {
          enumerable: !0,
          get: function () {
            return Ku.recoverAddress;
          },
        });
        var Zu = Sd();
        Object.defineProperty(e, "recoverMessageAddress", {
          enumerable: !0,
          get: function () {
            return Zu.recoverMessageAddress;
          },
        });
        var Ju = Yc();
        Object.defineProperty(e, "recoverPublicKey", {
          enumerable: !0,
          get: function () {
            return Ju.recoverPublicKey;
          },
        });
        var Yu = Id();
        Object.defineProperty(e, "recoverTypedDataAddress", {
          enumerable: !0,
          get: function () {
            return Yu.recoverTypedDataAddress;
          },
        });
        var mo = ky();
        Object.defineProperty(e, "verifyHash", {
          enumerable: !0,
          get: function () {
            return mo.verifyHash;
          },
        });
        var bo = $y();
        Object.defineProperty(e, "verifyMessage", {
          enumerable: !0,
          get: function () {
            return bo.verifyMessage;
          },
        });
        var $r = Ny();
        Object.defineProperty(e, "verifyTypedData", {
          enumerable: !0,
          get: function () {
            return $r.verifyTypedData;
          },
        });
        var Xu = co();
        Object.defineProperty(e, "hashMessage", {
          enumerable: !0,
          get: function () {
            return Xu.hashMessage;
          },
        });
        var Qu = zy();
        Object.defineProperty(e, "parseErc6492Signature", {
          enumerable: !0,
          get: function () {
            return Qu.parseErc6492Signature;
          },
        });
        var ec = Lu();
        Object.defineProperty(e, "isErc6492Signature", {
          enumerable: !0,
          get: function () {
            return ec.isErc6492Signature;
          },
        });
        var tc = Od();
        Object.defineProperty(e, "serializeErc6492Signature", {
          enumerable: !0,
          get: function () {
            return tc.serializeErc6492Signature;
          },
        });
        var rc = Bd();
        Object.defineProperty(e, "getSerializedTransactionType", {
          enumerable: !0,
          get: function () {
            return rc.getSerializedTransactionType;
          },
        });
        var nc = xu();
        Object.defineProperty(e, "getTransactionType", {
          enumerable: !0,
          get: function () {
            return nc.getTransactionType;
          },
        });
        var oc = At();
        Object.defineProperty(e, "assertRequest", {
          enumerable: !0,
          get: function () {
            return oc.assertRequest;
          },
        });
        var Vt = Du();
        Object.defineProperty(e, "assertTransactionEIP1559", {
          enumerable: !0,
          get: function () {
            return Vt.assertTransactionEIP1559;
          },
        }),
          Object.defineProperty(e, "assertTransactionEIP2930", {
            enumerable: !0,
            get: function () {
              return Vt.assertTransactionEIP2930;
            },
          }),
          Object.defineProperty(e, "assertTransactionLegacy", {
            enumerable: !0,
            get: function () {
              return Vt.assertTransactionLegacy;
            },
          });
        var Wt = Cd();
        Object.defineProperty(e, "parseTransaction", {
          enumerable: !0,
          get: function () {
            return Wt.parseTransaction;
          },
        });
        var Kt = Uu();
        Object.defineProperty(e, "serializeTransaction", {
          enumerable: !0,
          get: function () {
            return Kt.serializeTransaction;
          },
        });
        var Zt = qd();
        Object.defineProperty(e, "serializeAccessList", {
          enumerable: !0,
          get: function () {
            return Zt.serializeAccessList;
          },
        });
        var Jt = Gn();
        Object.defineProperty(e, "formatEther", {
          enumerable: !0,
          get: function () {
            return Jt.formatEther;
          },
        });
        var ic = mr();
        Object.defineProperty(e, "formatGwei", {
          enumerable: !0,
          get: function () {
            return ic.formatGwei;
          },
        });
        var ac = Su();
        Object.defineProperty(e, "formatUnits", {
          enumerable: !0,
          get: function () {
            return ac.formatUnits;
          },
        });
        var sc = Gu();
        Object.defineProperty(e, "parseUnits", {
          enumerable: !0,
          get: function () {
            return sc.parseUnits;
          },
        });
        var uc = Dy();
        Object.defineProperty(e, "parseEther", {
          enumerable: !0,
          get: function () {
            return uc.parseEther;
          },
        });
        var cc = Uy();
        Object.defineProperty(e, "parseGwei", {
          enumerable: !0,
          get: function () {
            return cc.parseGwei;
          },
        });
        var ho = Gy();
        Object.defineProperty(e, "createNonceManager", {
          enumerable: !0,
          get: function () {
            return ho.createNonceManager;
          },
        }),
          Object.defineProperty(e, "nonceManager", {
            enumerable: !0,
            get: function () {
              return ho.nonceManager;
            },
          });
      })(Cc)),
    Cc
  );
}
var L0;
function o_() {
  if (L0) return ja;
  (L0 = 1),
    Object.defineProperty(ja, "__esModule", { value: !0 }),
    (ja.formatProof = n);
  const e = Vy();
  function t(r) {
    return r.map((i) => ({ ...i, value: BigInt(i.value) }));
  }
  function n(r) {
    return {
      ...r,
      balance: r.balance ? BigInt(r.balance) : void 0,
      nonce: r.nonce ? (0, e.hexToNumber)(r.nonce) : void 0,
      storageProof: r.storageProof ? t(r.storageProof) : void 0,
    };
  }
  return ja;
}
var D0;
function i_() {
  if (D0) return Ea;
  (D0 = 1),
    Object.defineProperty(Ea, "__esModule", { value: !0 }),
    (Ea.getProof = n);
  const e = Q(),
    t = o_();
  async function n(
    r,
    { address: i, blockNumber: s, blockTag: o, storageKeys: a },
  ) {
    const u = o ?? "latest",
      f = s !== void 0 ? (0, e.numberToHex)(s) : void 0,
      c = await r.request({ method: "eth_getProof", params: [i, a, f || u] });
    return (0, t.formatProof)(c);
  }
  return Ea;
}
var Ja = {},
  U0;
function a_() {
  if (U0) return Ja;
  (U0 = 1),
    Object.defineProperty(Ja, "__esModule", { value: !0 }),
    (Ja.getStorageAt = t);
  const e = Q();
  async function t(
    n,
    { address: r, blockNumber: i, blockTag: s = "latest", slot: o },
  ) {
    const a = i !== void 0 ? (0, e.numberToHex)(i) : void 0;
    return await n.request({
      method: "eth_getStorageAt",
      params: [r, o, a || s],
    });
  }
  return Ja;
}
var Ya = {},
  G0;
function xd() {
  if (G0) return Ya;
  (G0 = 1),
    Object.defineProperty(Ya, "__esModule", { value: !0 }),
    (Ya.getTransaction = r);
  const e = He(),
    t = Q(),
    n = Yn();
  async function r(
    i,
    { blockHash: s, blockNumber: o, blockTag: a, hash: u, index: f },
  ) {
    var h, b, v;
    const c = a || "latest",
      d = o !== void 0 ? (0, t.numberToHex)(o) : void 0;
    let l = null;
    if (
      (u
        ? (l = await i.request(
            { method: "eth_getTransactionByHash", params: [u] },
            { dedupe: !0 },
          ))
        : s
          ? (l = await i.request(
              {
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [s, (0, t.numberToHex)(f)],
              },
              { dedupe: !0 },
            ))
          : (l = await i.request(
              {
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [d || c, (0, t.numberToHex)(f)],
              },
              { dedupe: !!d },
            )),
      !l)
    )
      throw new e.TransactionNotFoundError({
        blockHash: s,
        blockNumber: o,
        blockTag: c,
        hash: u,
        index: f,
      });
    return (
      ((v =
        (b = (h = i.chain) == null ? void 0 : h.formatters) == null
          ? void 0
          : b.transaction) == null
        ? void 0
        : v.format) || n.formatTransaction
    )(l);
  }
  return Ya;
}
var Xa = {},
  V0;
function s_() {
  if (V0) return Xa;
  (V0 = 1),
    Object.defineProperty(Xa, "__esModule", { value: !0 }),
    (Xa.getTransactionConfirmations = r);
  const e = fe(),
    t = io(),
    n = xd();
  async function r(i, { hash: s, transactionReceipt: o }) {
    const [a, u] = await Promise.all([
        (0, e.getAction)(i, t.getBlockNumber, "getBlockNumber")({}),
        s
          ? (0, e.getAction)(i, n.getTransaction, "getTransaction")({ hash: s })
          : void 0,
      ]),
      f =
        (o == null ? void 0 : o.blockNumber) ||
        (u == null ? void 0 : u.blockNumber);
    return f ? a - f + 1n : 0n;
  }
  return Xa;
}
var Qa = {},
  W0;
function Wy() {
  if (W0) return Qa;
  (W0 = 1),
    Object.defineProperty(Qa, "__esModule", { value: !0 }),
    (Qa.getTransactionReceipt = n);
  const e = He(),
    t = wd();
  async function n(r, { hash: i }) {
    var a, u, f;
    const s = await r.request(
      { method: "eth_getTransactionReceipt", params: [i] },
      { dedupe: !0 },
    );
    if (!s) throw new e.TransactionReceiptNotFoundError({ hash: i });
    return (
      ((f =
        (u = (a = r.chain) == null ? void 0 : a.formatters) == null
          ? void 0
          : u.transactionReceipt) == null
        ? void 0
        : f.format) || t.formatTransactionReceipt
    )(s);
  }
  return Qa;
}
var es = {},
  K0;
function u_() {
  if (K0) return es;
  (K0 = 1),
    Object.defineProperty(es, "__esModule", { value: !0 }),
    (es.multicall = c);
  const e = hr(),
    t = ye(),
    n = oe(),
    r = zt(),
    i = Rt(),
    s = Xe(),
    o = Gt(),
    a = Lt(),
    u = fe(),
    f = Ot();
  async function c(d, l) {
    var T;
    const {
        allowFailure: g = !0,
        batchSize: h,
        blockNumber: b,
        blockTag: v,
        multicallAddress: _,
        stateOverride: E,
      } = l,
      m = l.contracts,
      p =
        h ??
        ((typeof ((T = d.batch) == null ? void 0 : T.multicall) == "object" &&
          d.batch.multicall.batchSize) ||
          1024);
    let y = _;
    if (!y) {
      if (!d.chain)
        throw new Error(
          "client chain not configured. multicallAddress is required.",
        );
      y = (0, o.getChainContractAddress)({
        blockNumber: b,
        chain: d.chain,
        contract: "multicall3",
      });
    }
    const j = [[]];
    let P = 0,
      S = 0;
    for (let B = 0; B < m.length; B++) {
      const { abi: M, address: A, args: x, functionName: $ } = m[B];
      try {
        const F = (0, s.encodeFunctionData)({
          abi: M,
          args: x,
          functionName: $,
        });
        (S += (F.length - 2) / 2),
          p > 0 &&
            S > p &&
            j[P].length > 0 &&
            (P++, (S = (F.length - 2) / 2), (j[P] = [])),
          (j[P] = [...j[P], { allowFailure: !0, callData: F, target: A }]);
      } catch (F) {
        const H = (0, a.getContractError)(F, {
          abi: M,
          address: A,
          args: x,
          docsPath: "/docs/contract/multicall",
          functionName: $,
        });
        if (!g) throw H;
        j[P] = [...j[P], { allowFailure: !0, callData: "0x", target: A }];
      }
    }
    const w = await Promise.allSettled(
        j.map((B) =>
          (0, u.getAction)(
            d,
            f.readContract,
            "readContract",
          )({
            abi: e.multicall3Abi,
            address: y,
            args: [B],
            blockNumber: b,
            blockTag: v,
            functionName: "aggregate3",
            stateOverride: E,
          }),
        ),
      ),
      q = [];
    for (let B = 0; B < w.length; B++) {
      const M = w[B];
      if (M.status === "rejected") {
        if (!g) throw M.reason;
        for (let x = 0; x < j[B].length; x++)
          q.push({ status: "failure", error: M.reason, result: void 0 });
        continue;
      }
      const A = M.value;
      for (let x = 0; x < A.length; x++) {
        const { returnData: $, success: F } = A[x],
          { callData: H } = j[B][x],
          { abi: R, address: O, functionName: I, args: C } = m[q.length];
        try {
          if (H === "0x") throw new t.AbiDecodingZeroDataError();
          if (!F) throw new r.RawContractError({ data: $ });
          const k = (0, i.decodeFunctionResult)({
            abi: R,
            args: C,
            data: $,
            functionName: I,
          });
          q.push(g ? { result: k, status: "success" } : k);
        } catch (k) {
          const z = (0, a.getContractError)(k, {
            abi: R,
            address: O,
            args: C,
            docsPath: "/docs/contract/multicall",
            functionName: I,
          });
          if (!g) throw z;
          q.push({ error: z, result: void 0, status: "failure" });
        }
      }
    }
    if (q.length !== m.length)
      throw new n.BaseError("multicall results mismatch");
    return q;
  }
  return es;
}
var ts = {},
  xn = {},
  ne = {},
  ie = {},
  Mn = {},
  Or = {},
  Fn = {},
  Z0;
function c_() {
  return (
    Z0 ||
      ((Z0 = 1),
      Object.defineProperty(Fn, "__esModule", { value: !0 }),
      (Fn.version = void 0),
      (Fn.version = "0.1.1")),
    Fn
  );
}
var J0;
function d_() {
  if (J0) return Or;
  (J0 = 1),
    Object.defineProperty(Or, "__esModule", { value: !0 }),
    (Or.getUrl = t),
    (Or.getVersion = n),
    (Or.prettyPrint = r);
  const e = c_();
  function t(i) {
    return i;
  }
  function n() {
    return e.version;
  }
  function r(i) {
    if (!i) return "";
    const s = Object.entries(i)
        .map(([a, u]) => (u === void 0 || u === !1 ? null : [a, u]))
        .filter(Boolean),
      o = s.reduce((a, [u]) => Math.max(a, u.length), 0);
    return s.map(([a, u]) => `  ${`${a}:`.padEnd(o + 1)}  ${u}`).join(`
`);
  }
  return Or;
}
var Y0;
function Ky() {
  if (Y0) return Mn;
  (Y0 = 1),
    Object.defineProperty(Mn, "__esModule", { value: !0 }),
    (Mn.BaseError = void 0);
  const e = d_();
  class t extends Error {
    constructor(i, s = {}) {
      const o = (() => {
          var d;
          if (s.cause instanceof t) {
            if (s.cause.details) return s.cause.details;
            if (s.cause.shortMessage) return s.cause.shortMessage;
          }
          return (d = s.cause) != null && d.message
            ? s.cause.message
            : s.details;
        })(),
        a = (s.cause instanceof t && s.cause.docsPath) || s.docsPath,
        f = `https://oxlib.sh${a ?? ""}`,
        c = [
          i || "An error occurred.",
          ...(s.metaMessages ? ["", ...s.metaMessages] : []),
          ...(o || a
            ? ["", o ? `Details: ${o}` : void 0, a ? `See: ${f}` : void 0]
            : []),
        ].filter((d) => typeof d == "string").join(`
`);
      super(c, s.cause ? { cause: s.cause } : void 0),
        Object.defineProperty(this, "details", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "docs", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "docsPath", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "shortMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "BaseError",
        }),
        Object.defineProperty(this, "version", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: `ox@${(0, e.getVersion)()}`,
        }),
        (this.cause = s.cause),
        (this.details = o),
        (this.docs = f),
        (this.docsPath = a),
        (this.shortMessage = i);
    }
    walk(i) {
      return n(this, i);
    }
  }
  Mn.BaseError = t;
  function n(r, i) {
    return i != null && i(r)
      ? r
      : r && typeof r == "object" && "cause" in r && r.cause
        ? n(r.cause, i)
        : i
          ? null
          : r;
  }
  return Mn;
}
var Hn = {},
  X0;
function Zy() {
  if (X0) return Hn;
  (X0 = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn.parse = t),
    (Hn.stringify = n);
  const e = "#__bigint";
  function t(r, i) {
    return JSON.parse(r, (s, o) => {
      const a = o;
      return typeof a == "string" && a.endsWith(e)
        ? BigInt(a.slice(0, -e.length))
        : typeof i == "function"
          ? i(s, a)
          : a;
    });
  }
  function n(r, i, s) {
    return JSON.stringify(
      r,
      (o, a) =>
        typeof i == "function"
          ? i(o, a)
          : typeof a == "bigint"
            ? a.toString() + e
            : a,
      s,
    );
  }
  return Hn;
}
var $c = {},
  Q0;
function Jy() {
  return (
    Q0 ||
      ((Q0 = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.charCodeMap = void 0),
          (e.assertSize = n),
          (e.assertStartOffset = r),
          (e.assertEndOffset = i),
          (e.charCodeToBase16 = s),
          (e.pad = o),
          (e.trim = a);
        const t = Xy();
        function n(u, f) {
          if (t.size(u) > f)
            throw new t.SizeOverflowError({ givenSize: t.size(u), maxSize: f });
        }
        function r(u, f) {
          if (typeof f == "number" && f > 0 && f > t.size(u) - 1)
            throw new t.SliceOffsetOutOfBoundsError({
              offset: f,
              position: "start",
              size: t.size(u),
            });
        }
        function i(u, f, c) {
          if (
            typeof f == "number" &&
            typeof c == "number" &&
            t.size(u) !== c - f
          )
            throw new t.SliceOffsetOutOfBoundsError({
              offset: c,
              position: "end",
              size: t.size(u),
            });
        }
        e.charCodeMap = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
        function s(u) {
          if (u >= e.charCodeMap.zero && u <= e.charCodeMap.nine)
            return u - e.charCodeMap.zero;
          if (u >= e.charCodeMap.A && u <= e.charCodeMap.F)
            return u - (e.charCodeMap.A - 10);
          if (u >= e.charCodeMap.a && u <= e.charCodeMap.f)
            return u - (e.charCodeMap.a - 10);
        }
        function o(u, f = {}) {
          const { dir: c, size: d = 32 } = f;
          if (d === 0) return u;
          if (u.length > d)
            throw new t.SizeExceedsPaddingSizeError({
              size: u.length,
              targetSize: d,
              type: "Bytes",
            });
          const l = new Uint8Array(d);
          for (let g = 0; g < d; g++) {
            const h = c === "right";
            l[h ? g : d - g - 1] = u[h ? g : u.length - g - 1];
          }
          return l;
        }
        function a(u, f = {}) {
          const { dir: c = "left" } = f;
          let d = u,
            l = 0;
          for (
            let g = 0;
            g < d.length - 1 &&
            d[c === "left" ? g : d.length - g - 1].toString() === "0";
            g++
          )
            l++;
          return (d = c === "left" ? d.slice(l) : d.slice(0, d.length - l)), d;
        }
      })($c)),
    $c
  );
}
var Ft = {},
  eh;
function Yy() {
  if (eh) return Ft;
  (eh = 1),
    Object.defineProperty(Ft, "__esModule", { value: !0 }),
    (Ft.assertSize = t),
    (Ft.assertStartOffset = n),
    (Ft.assertEndOffset = r),
    (Ft.pad = i),
    (Ft.trim = s);
  const e = Vu();
  function t(o, a) {
    if (e.size(o) > a)
      throw new e.SizeOverflowError({ givenSize: e.size(o), maxSize: a });
  }
  function n(o, a) {
    if (typeof a == "number" && a > 0 && a > e.size(o) - 1)
      throw new e.SliceOffsetOutOfBoundsError({
        offset: a,
        position: "start",
        size: e.size(o),
      });
  }
  function r(o, a, u) {
    if (typeof a == "number" && typeof u == "number" && e.size(o) !== u - a)
      throw new e.SliceOffsetOutOfBoundsError({
        offset: u,
        position: "end",
        size: e.size(o),
      });
  }
  function i(o, a = {}) {
    const { dir: u, size: f = 32 } = a;
    if (f === 0) return o;
    const c = o.replace("0x", "");
    if (c.length > f * 2)
      throw new e.SizeExceedsPaddingSizeError({
        size: Math.ceil(c.length / 2),
        targetSize: f,
        type: "Hex",
      });
    return `0x${c[u === "right" ? "padEnd" : "padStart"](f * 2, "0")}`;
  }
  function s(o, a = {}) {
    const { dir: u = "left" } = a;
    let f = o.replace("0x", ""),
      c = 0;
    for (
      let d = 0;
      d < f.length - 1 &&
      f[u === "left" ? d : f.length - d - 1].toString() === "0";
      d++
    )
      c++;
    return (
      (f = u === "left" ? f.slice(c) : f.slice(0, f.length - c)),
      f === "0"
        ? "0x"
        : u === "right" && f.length % 2 === 1
          ? `0x${f}0`
          : `0x${f}`
    );
  }
  return Ft;
}
var th;
function Xy() {
  if (th) return ie;
  (th = 1),
    Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie.SizeExceedsPaddingSizeError =
      ie.SliceOffsetOutOfBoundsError =
      ie.SizeOverflowError =
      ie.InvalidBytesTypeError =
      ie.InvalidBytesBooleanError =
        void 0),
    (ie.assert = u),
    (ie.concat = f),
    (ie.from = c),
    (ie.fromArray = d),
    (ie.fromBoolean = l),
    (ie.fromHex = g),
    (ie.fromNumber = h),
    (ie.fromString = b),
    (ie.isEqual = v),
    (ie.padLeft = _),
    (ie.padRight = E),
    (ie.random = m),
    (ie.size = p),
    (ie.slice = y),
    (ie.toBigInt = j),
    (ie.toBoolean = P),
    (ie.toHex = S),
    (ie.toNumber = w),
    (ie.toString = q),
    (ie.trimLeft = T),
    (ie.trimRight = B),
    (ie.validate = M);
  const e = Ht(),
    t = Ky(),
    n = Vu(),
    r = Zy(),
    i = Jy(),
    s = Yy(),
    o = new TextDecoder(),
    a = new TextEncoder();
  function u(R) {
    if (!(R instanceof Uint8Array)) {
      if (!R) throw new x(R);
      if (typeof R != "object") throw new x(R);
      if (!("BYTES_PER_ELEMENT" in R)) throw new x(R);
      if (R.BYTES_PER_ELEMENT !== 1 || R.constructor.name !== "Uint8Array")
        throw new x(R);
    }
  }
  function f(...R) {
    let O = 0;
    for (const C of R) O += C.length;
    const I = new Uint8Array(O);
    for (let C = 0, k = 0; C < R.length; C++) {
      const z = R[C];
      I.set(z, k), (k += z.length);
    }
    return I;
  }
  function c(R) {
    return R instanceof Uint8Array ? R : typeof R == "string" ? g(R) : d(R);
  }
  function d(R) {
    return R instanceof Uint8Array ? R : new Uint8Array(R);
  }
  function l(R, O = {}) {
    const { size: I } = O,
      C = new Uint8Array(1);
    return (
      (C[0] = Number(R)),
      typeof I == "number" ? (i.assertSize(C, I), _(C, I)) : C
    );
  }
  function g(R, O = {}) {
    const { size: I } = O;
    let C = R;
    I && (s.assertSize(R, I), (C = n.padRight(R, I)));
    let k = C.slice(2);
    k.length % 2 && (k = `0${k}`);
    const z = k.length / 2,
      U = new Uint8Array(z);
    for (let L = 0, V = 0; L < z; L++) {
      const G = i.charCodeToBase16(k.charCodeAt(V++)),
        Z = i.charCodeToBase16(k.charCodeAt(V++));
      if (G === void 0 || Z === void 0)
        throw new t.BaseError(
          `Invalid byte sequence ("${k[V - 2]}${k[V - 1]}" in "${k}").`,
        );
      U[L] = G * 16 + Z;
    }
    return U;
  }
  function h(R, O) {
    const I = n.fromNumber(R, O);
    return g(I);
  }
  function b(R, O = {}) {
    const { size: I } = O,
      C = a.encode(R);
    return typeof I == "number" ? (i.assertSize(C, I), E(C, I)) : C;
  }
  function v(R, O) {
    return (0, e.equalBytes)(R, O);
  }
  function _(R, O) {
    return i.pad(R, { dir: "left", size: O });
  }
  function E(R, O) {
    return i.pad(R, { dir: "right", size: O });
  }
  function m(R) {
    return crypto.getRandomValues(new Uint8Array(R));
  }
  function p(R) {
    return R.length;
  }
  function y(R, O, I, C = {}) {
    const { strict: k } = C;
    i.assertStartOffset(R, O);
    const z = R.slice(O, I);
    return k && i.assertEndOffset(z, O, I), z;
  }
  function j(R, O = {}) {
    const { size: I } = O;
    typeof I < "u" && i.assertSize(R, I);
    const C = n.fromBytes(R, O);
    return n.toBigInt(C, O);
  }
  function P(R, O = {}) {
    const { size: I } = O;
    let C = R;
    if (
      (typeof I < "u" && (i.assertSize(C, I), (C = T(C))),
      C.length > 1 || C[0] > 1)
    )
      throw new A(C);
    return !!C[0];
  }
  function S(R, O = {}) {
    return n.fromBytes(R, O);
  }
  function w(R, O = {}) {
    const { size: I } = O;
    typeof I < "u" && i.assertSize(R, I);
    const C = n.fromBytes(R, O);
    return n.toNumber(C, O);
  }
  function q(R, O = {}) {
    const { size: I } = O;
    let C = R;
    return typeof I < "u" && (i.assertSize(C, I), (C = B(C))), o.decode(C);
  }
  function T(R) {
    return i.trim(R, { dir: "left" });
  }
  function B(R) {
    return i.trim(R, { dir: "right" });
  }
  function M(R) {
    try {
      return u(R), !0;
    } catch {
      return !1;
    }
  }
  class A extends t.BaseError {
    constructor(O) {
      super(`Bytes value \`${O}\` is not a valid boolean.`, {
        metaMessages: [
          "The bytes array must contain a single byte of either a `0` or `1` value.",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.InvalidBytesBooleanError",
        });
    }
  }
  ie.InvalidBytesBooleanError = A;
  class x extends t.BaseError {
    constructor(O) {
      super(
        `Value \`${typeof O == "object" ? r.stringify(O) : O}\` of type \`${typeof O}\` is an invalid Bytes value.`,
        { metaMessages: ["Bytes values must be of type `Bytes`."] },
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.InvalidBytesTypeError",
        });
    }
  }
  ie.InvalidBytesTypeError = x;
  class $ extends t.BaseError {
    constructor({ givenSize: O, maxSize: I }) {
      super(`Size cannot exceed \`${I}\` bytes. Given size: \`${O}\` bytes.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.SizeOverflowError",
        });
    }
  }
  ie.SizeOverflowError = $;
  class F extends t.BaseError {
    constructor({ offset: O, position: I, size: C }) {
      super(
        `Slice ${I === "start" ? "starting" : "ending"} at offset \`${O}\` is out-of-bounds (size: \`${C}\`).`,
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.SliceOffsetOutOfBoundsError",
        });
    }
  }
  ie.SliceOffsetOutOfBoundsError = F;
  class H extends t.BaseError {
    constructor({ size: O, targetSize: I, type: C }) {
      super(
        `${C.charAt(0).toUpperCase()}${C.slice(1).toLowerCase()} size (\`${O}\`) exceeds padding size (\`${I}\`).`,
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.SizeExceedsPaddingSizeError",
        });
    }
  }
  return (ie.SizeExceedsPaddingSizeError = H), ie;
}
var rh;
function Vu() {
  if (rh) return ne;
  (rh = 1),
    Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne.SizeExceedsPaddingSizeError =
      ne.SliceOffsetOutOfBoundsError =
      ne.SizeOverflowError =
      ne.InvalidLengthError =
      ne.InvalidHexValueError =
      ne.InvalidHexTypeError =
      ne.InvalidHexBooleanError =
      ne.IntegerOutOfRangeError =
        void 0),
    (ne.assert = u),
    (ne.concat = f),
    (ne.from = c),
    (ne.fromBoolean = d),
    (ne.fromBytes = l),
    (ne.fromNumber = g),
    (ne.fromString = h),
    (ne.isEqual = b),
    (ne.padLeft = v),
    (ne.padRight = _),
    (ne.random = E),
    (ne.slice = m),
    (ne.size = p),
    (ne.trimLeft = y),
    (ne.trimRight = j),
    (ne.toBigInt = P),
    (ne.toBoolean = S),
    (ne.toBytes = w),
    (ne.toNumber = q),
    (ne.toString = T),
    (ne.validate = B);
  const e = Ht(),
    t = Xy(),
    n = Ky(),
    r = Zy(),
    i = Jy(),
    s = Yy(),
    o = new TextEncoder(),
    a = Array.from({ length: 256 }, (I, C) => C.toString(16).padStart(2, "0"));
  function u(I, C = {}) {
    const { strict: k = !1 } = C;
    if (!I) throw new x(I);
    if (typeof I != "string") throw new x(I);
    if (k && !/^0x[0-9a-fA-F]*$/.test(I)) throw new $(I);
    if (!I.startsWith("0x")) throw new $(I);
  }
  function f(...I) {
    return `0x${I.reduce((C, k) => C + k.replace("0x", ""), "")}`;
  }
  function c(I) {
    return I instanceof Uint8Array
      ? l(I)
      : Array.isArray(I)
        ? l(new Uint8Array(I))
        : I;
  }
  function d(I, C = {}) {
    const k = `0x${Number(I)}`;
    return typeof C.size == "number"
      ? (s.assertSize(k, C.size), v(k, C.size))
      : k;
  }
  function l(I, C = {}) {
    let k = "";
    for (let U = 0; U < I.length; U++) k += a[I[U]];
    const z = `0x${k}`;
    return typeof C.size == "number"
      ? (s.assertSize(z, C.size), _(z, C.size))
      : z;
  }
  function g(I, C = {}) {
    const { signed: k, size: z } = C,
      U = BigInt(I);
    let L;
    z
      ? k
        ? (L = (1n << (BigInt(z) * 8n - 1n)) - 1n)
        : (L = 2n ** (BigInt(z) * 8n) - 1n)
      : typeof I == "number" && (L = BigInt(Number.MAX_SAFE_INTEGER));
    const V = typeof L == "bigint" && k ? -L - 1n : 0;
    if ((L && U > L) || U < V) {
      const ee = typeof I == "bigint" ? "n" : "";
      throw new M({
        max: L ? `${L}${ee}` : void 0,
        min: `${V}${ee}`,
        signed: k,
        size: z,
        value: `${I}${ee}`,
      });
    }
    const Z = `0x${(k && U < 0 ? (1n << BigInt(z * 8)) + BigInt(U) : U).toString(16)}`;
    return z ? v(Z, z) : Z;
  }
  function h(I, C = {}) {
    return l(o.encode(I), C);
  }
  function b(I, C) {
    return (0, e.equalBytes)(t.fromHex(I), t.fromHex(C));
  }
  function v(I, C) {
    return s.pad(I, { dir: "left", size: C });
  }
  function _(I, C) {
    return s.pad(I, { dir: "right", size: C });
  }
  function E(I) {
    return l(t.random(I));
  }
  function m(I, C, k, z = {}) {
    const { strict: U } = z;
    s.assertStartOffset(I, C);
    const L = `0x${I.replace("0x", "").slice((C ?? 0) * 2, (k ?? I.length) * 2)}`;
    return U && s.assertEndOffset(L, C, k), L;
  }
  function p(I) {
    return Math.ceil((I.length - 2) / 2);
  }
  function y(I) {
    return s.trim(I, { dir: "left" });
  }
  function j(I) {
    return s.trim(I, { dir: "right" });
  }
  function P(I, C = {}) {
    const { signed: k } = C;
    C.size && s.assertSize(I, C.size);
    const z = BigInt(I);
    if (!k) return z;
    const U = (I.length - 2) / 2,
      L = (1n << (BigInt(U) * 8n)) - 1n,
      V = L >> 1n;
    return z <= V ? z : z - L - 1n;
  }
  function S(I, C = {}) {
    C.size && s.assertSize(I, C.size);
    const k = y(I);
    if (k === "0x") return !1;
    if (k === "0x1") return !0;
    throw new A(I);
  }
  function w(I, C = {}) {
    return t.fromHex(I, C);
  }
  function q(I, C = {}) {
    const { signed: k, size: z } = C;
    return Number(!k && !z ? I : P(I, C));
  }
  function T(I, C = {}) {
    const { size: k } = C;
    let z = t.fromHex(I);
    return (
      k && (i.assertSize(z, k), (z = t.trimRight(z))),
      new TextDecoder().decode(z)
    );
  }
  function B(I, C = {}) {
    const { strict: k = !1 } = C;
    try {
      return u(I, { strict: k }), !0;
    } catch {
      return !1;
    }
  }
  class M extends n.BaseError {
    constructor({ max: C, min: k, signed: z, size: U, value: L }) {
      super(
        `Number \`${L}\` is not in safe${U ? ` ${U * 8}-bit` : ""}${z ? " signed" : " unsigned"} integer range ${C ? `(\`${k}\` to \`${C}\`)` : `(above \`${k}\`)`}`,
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.IntegerOutOfRangeError",
        });
    }
  }
  ne.IntegerOutOfRangeError = M;
  class A extends n.BaseError {
    constructor(C) {
      super(`Hex value \`"${C}"\` is not a valid boolean.`, {
        metaMessages: [
          'The hex value must be `"0x0"` (false) or `"0x1"` (true).',
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.InvalidHexBooleanError",
        });
    }
  }
  ne.InvalidHexBooleanError = A;
  class x extends n.BaseError {
    constructor(C) {
      super(
        `Value \`${typeof C == "object" ? r.stringify(C) : C}\` of type \`${typeof C}\` is an invalid hex type.`,
        { metaMessages: ['Hex types must be represented as `"0x${string}"`.'] },
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.InvalidHexTypeError",
        });
    }
  }
  ne.InvalidHexTypeError = x;
  class $ extends n.BaseError {
    constructor(C) {
      super(`Value \`${C}\` is an invalid hex value.`, {
        metaMessages: [
          'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.InvalidHexValueError",
        });
    }
  }
  ne.InvalidHexValueError = $;
  class F extends n.BaseError {
    constructor(C) {
      super(
        `Hex value \`"${C}"\` is an odd length (${C.length - 2} nibbles).`,
        { metaMessages: ["It must be an even length."] },
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.InvalidLengthError",
        });
    }
  }
  ne.InvalidLengthError = F;
  class H extends n.BaseError {
    constructor({ givenSize: C, maxSize: k }) {
      super(`Size cannot exceed \`${k}\` bytes. Given size: \`${C}\` bytes.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.SizeOverflowError",
        });
    }
  }
  ne.SizeOverflowError = H;
  class R extends n.BaseError {
    constructor({ offset: C, position: k, size: z }) {
      super(
        `Slice ${k === "start" ? "starting" : "ending"} at offset \`${C}\` is out-of-bounds (size: \`${z}\`).`,
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.SliceOffsetOutOfBoundsError",
        });
    }
  }
  ne.SliceOffsetOutOfBoundsError = R;
  class O extends n.BaseError {
    constructor({ size: C, targetSize: k, type: z }) {
      super(
        `${z.charAt(0).toUpperCase()}${z.slice(1).toLowerCase()} size (\`${C}\`) exceeds padding size (\`${k}\`).`,
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.SizeExceedsPaddingSizeError",
        });
    }
  }
  return (ne.SizeExceedsPaddingSizeError = O), ne;
}
var kn = {},
  nh;
function f_() {
  if (nh) return kn;
  (nh = 1),
    Object.defineProperty(kn, "__esModule", { value: !0 }),
    (kn.fromRpc = t),
    (kn.toRpc = n);
  const e = Vu();
  function t(r) {
    return {
      ...r,
      amount: BigInt(r.amount),
      index: Number(r.index),
      validatorIndex: Number(r.validatorIndex),
    };
  }
  function n(r) {
    return {
      address: r.address,
      amount: e.fromNumber(r.amount),
      index: e.fromNumber(r.index),
      validatorIndex: e.fromNumber(r.validatorIndex),
    };
  }
  return kn;
}
var oh;
function l_() {
  if (oh) return xn;
  (oh = 1),
    Object.defineProperty(xn, "__esModule", { value: !0 }),
    (xn.fromRpc = n),
    (xn.toRpc = r);
  const e = Vu(),
    t = f_();
  function n(i) {
    return {
      ...(i.baseFeePerGas && { baseFeePerGas: BigInt(i.baseFeePerGas) }),
      ...(i.blobBaseFee && { blobBaseFee: BigInt(i.blobBaseFee) }),
      ...(i.feeRecipient && { feeRecipient: i.feeRecipient }),
      ...(i.gasLimit && { gasLimit: BigInt(i.gasLimit) }),
      ...(i.number && { number: BigInt(i.number) }),
      ...(i.prevRandao && { prevRandao: BigInt(i.prevRandao) }),
      ...(i.time && { time: BigInt(i.time) }),
      ...(i.withdrawals && { withdrawals: i.withdrawals.map(t.fromRpc) }),
    };
  }
  function r(i) {
    return {
      ...(typeof i.baseFeePerGas == "bigint" && {
        baseFeePerGas: e.fromNumber(i.baseFeePerGas),
      }),
      ...(typeof i.blobBaseFee == "bigint" && {
        blobBaseFee: e.fromNumber(i.blobBaseFee),
      }),
      ...(typeof i.feeRecipient == "string" && {
        feeRecipient: i.feeRecipient,
      }),
      ...(typeof i.gasLimit == "bigint" && {
        gasLimit: e.fromNumber(i.gasLimit),
      }),
      ...(typeof i.number == "bigint" && { number: e.fromNumber(i.number) }),
      ...(typeof i.prevRandao == "bigint" && {
        prevRandao: e.fromNumber(i.prevRandao),
      }),
      ...(typeof i.time == "bigint" && { time: e.fromNumber(i.time) }),
      ...(i.withdrawals && { withdrawals: i.withdrawals.map(t.toRpc) }),
    };
  }
  return xn;
}
var ih;
function m_() {
  if (ih) return ts;
  (ih = 1),
    Object.defineProperty(ts, "__esModule", { value: !0 }),
    (ts.simulate = b);
  const e = l_(),
    t = Ae(),
    n = ye(),
    r = zt(),
    i = Ut(),
    s = Rt(),
    o = Xe(),
    a = Q(),
    u = Lt(),
    f = Zn(),
    c = Ou(),
    d = It(),
    l = Tt(),
    g = Xc(),
    h = At();
  async function b(v, _) {
    const {
      blockNumber: E,
      blockTag: m = "latest",
      blocks: p,
      returnFullTransactions: y,
      traceTransfers: j,
      validation: P,
    } = _;
    try {
      const S = [];
      for (const B of p) {
        const M = B.blockOverrides ? e.toRpc(B.blockOverrides) : void 0,
          A = B.calls.map(($) => {
            const F = $,
              H = F.account ? (0, t.parseAccount)(F.account) : void 0,
              R = {
                ...F,
                data: F.abi ? (0, o.encodeFunctionData)(F) : F.data,
                from: F.from ?? (H == null ? void 0 : H.address),
              };
            return (0, h.assertRequest)(R), (0, l.formatTransactionRequest)(R);
          }),
          x = B.stateOverrides
            ? (0, g.serializeStateOverride)(B.stateOverrides)
            : void 0;
        S.push({ blockOverrides: M, calls: A, stateOverrides: x });
      }
      const q = (E ? (0, a.numberToHex)(E) : void 0) || m;
      return (
        await v.request({
          method: "eth_simulateV1",
          params: [
            {
              blockStateCalls: S,
              returnFullTransactions: y,
              traceTransfers: j,
              validation: P,
            },
            q,
          ],
        })
      ).map((B, M) => ({
        ...(0, c.formatBlock)(B),
        calls: B.calls.map((A, x) => {
          var L, V;
          const { abi: $, args: F, functionName: H, to: R } = p[M].calls[x],
            O = ((L = A.error) == null ? void 0 : L.data) ?? A.returnData,
            I = BigInt(A.gasUsed),
            C =
              (V = A.logs) == null ? void 0 : V.map((G) => (0, d.formatLog)(G)),
            k = A.status === "0x1" ? "success" : "failure",
            z = $
              ? (0, s.decodeFunctionResult)({
                  abi: $,
                  data: O,
                  functionName: H,
                })
              : null,
            U = (() => {
              var Z;
              if (k === "success") return;
              let G;
              if (
                (((Z = A.error) == null ? void 0 : Z.data) === "0x"
                  ? (G = new n.AbiDecodingZeroDataError())
                  : A.error && (G = new r.RawContractError(A.error)),
                !!G)
              )
                return (0, u.getContractError)(G, {
                  abi: $ ?? [],
                  address: R,
                  args: F,
                  functionName: H ?? "<unknown>",
                });
            })();
          return {
            data: O,
            gasUsed: I,
            logs: C,
            status: k,
            ...(k === "success" ? { result: z } : { error: U }),
          };
        }),
      }));
    } catch (S) {
      const w = S,
        q = (0, f.getNodeError)(w, {});
      throw q instanceof i.UnknownNodeError ? w : q;
    }
  }
  return ts;
}
var rs = {},
  ns = {},
  os = {},
  ah;
function Qy() {
  if (ah) return os;
  (ah = 1),
    Object.defineProperty(os, "__esModule", { value: !0 }),
    (os.serializeSignature = r);
  const e = Wn(),
    t = Pe(),
    n = le();
  function r({ r: i, s, to: o = "hex", v: a, yParity: u }) {
    const f = (() => {
        if (u === 0 || u === 1) return u;
        if (a && (a === 27n || a === 28n || a >= 35n))
          return a % 2n === 0n ? 1 : 0;
        throw new Error("Invalid `v` or `yParity` value");
      })(),
      c = `0x${new e.secp256k1.Signature((0, t.hexToBigInt)(i), (0, t.hexToBigInt)(s)).toCompactHex()}${f === 0 ? "1b" : "1c"}`;
    return o === "hex" ? c : (0, n.hexToBytes)(c);
  }
  return os;
}
var sh;
function Md() {
  if (sh) return ns;
  (sh = 1),
    Object.defineProperty(ns, "__esModule", { value: !0 }),
    (ns.verifyHash = b);
  const e = hr(),
    t = cd(),
    n = zt(),
    r = ro(),
    i = ke(),
    s = St(),
    o = Re(),
    a = Q(),
    u = fe(),
    f = Vy(),
    c = Lu(),
    d = Dt(),
    l = Od(),
    g = Qy(),
    h = no();
  async function b(v, _) {
    var T, B, M;
    const {
        address: E,
        factory: m,
        factoryData: p,
        hash: y,
        signature: j,
        universalSignatureVerifierAddress: P = (M =
          (B = (T = v.chain) == null ? void 0 : T.contracts) == null
            ? void 0
            : B.universalSignatureVerifier) == null
          ? void 0
          : M.address,
        ...S
      } = _,
      w = (0, o.isHex)(j)
        ? j
        : typeof j == "object" && "r" in j && "s" in j
          ? (0, g.serializeSignature)(j)
          : (0, a.bytesToHex)(j),
      q = await (async () =>
        (!m && !p) || (0, c.isErc6492Signature)(w)
          ? w
          : (0, l.serializeErc6492Signature)({
              address: m,
              data: p,
              signature: w,
            }))();
    try {
      const A = P
          ? {
              to: P,
              data: (0, f.encodeFunctionData)({
                abi: e.universalSignatureValidatorAbi,
                functionName: "isValidSig",
                args: [E, y, q],
              }),
              ...S,
            }
          : {
              data: (0, r.encodeDeployData)({
                abi: e.universalSignatureValidatorAbi,
                args: [E, y, q],
                bytecode: t.universalSignatureValidatorByteCode,
              }),
              ...S,
            },
        { data: x } = await (0, u.getAction)(v, h.call, "call")(A);
      return (0, f.hexToBool)(x ?? "0x0");
    } catch (A) {
      try {
        if (
          (0, s.isAddressEqual)(
            (0, i.getAddress)(E),
            await (0, d.recoverAddress)({ hash: y, signature: j }),
          )
        )
          return !0;
      } catch {}
      if (A instanceof n.CallExecutionError) return !1;
      throw A;
    }
  }
  return ns;
}
var uh;
function b_() {
  if (uh) return rs;
  (uh = 1),
    Object.defineProperty(rs, "__esModule", { value: !0 }),
    (rs.verifyMessage = n);
  const e = co(),
    t = Md();
  async function n(
    r,
    { address: i, message: s, factory: o, factoryData: a, signature: u, ...f },
  ) {
    const c = (0, e.hashMessage)(s);
    return (0, t.verifyHash)(r, {
      address: i,
      factory: o,
      factoryData: a,
      hash: c,
      signature: u,
      ...f,
    });
  }
  return rs;
}
var is = {},
  ch;
function h_() {
  if (ch) return is;
  (ch = 1),
    Object.defineProperty(is, "__esModule", { value: !0 }),
    (is.verifyTypedData = n);
  const e = uo(),
    t = Md();
  async function n(r, i) {
    const {
        address: s,
        factory: o,
        factoryData: a,
        signature: u,
        message: f,
        primaryType: c,
        types: d,
        domain: l,
        ...g
      } = i,
      h = (0, e.hashTypedData)({
        message: f,
        primaryType: c,
        types: d,
        domain: l,
      });
    return (0, t.verifyHash)(r, {
      address: s,
      factory: o,
      factoryData: a,
      hash: h,
      signature: u,
      ...g,
    });
  }
  return is;
}
var as = {},
  ss = {},
  dh;
function ep() {
  if (dh) return ss;
  (dh = 1),
    Object.defineProperty(ss, "__esModule", { value: !0 }),
    (ss.watchBlockNumber = o);
  const e = Pe(),
    t = fe(),
    n = kr(),
    r = oo(),
    i = Se(),
    s = io();
  function o(
    a,
    {
      emitOnBegin: u = !1,
      emitMissed: f = !1,
      onBlockNumber: c,
      onError: d,
      poll: l,
      pollingInterval: g = a.pollingInterval,
    },
  ) {
    const h =
      typeof l < "u"
        ? l
        : !(
            a.transport.type === "webSocket" ||
            (a.transport.type === "fallback" &&
              a.transport.transports[0].config.type === "webSocket")
          );
    let b;
    return h
      ? (() => {
          const E = (0, i.stringify)(["watchBlockNumber", a.uid, u, f, g]);
          return (0, n.observe)(E, { onBlockNumber: c, onError: d }, (m) =>
            (0, r.poll)(
              async () => {
                var p;
                try {
                  const y = await (0, t.getAction)(
                    a,
                    s.getBlockNumber,
                    "getBlockNumber",
                  )({ cacheTime: 0 });
                  if (b) {
                    if (y === b) return;
                    if (y - b > 1 && f)
                      for (let j = b + 1n; j < y; j++)
                        m.onBlockNumber(j, b), (b = j);
                  }
                  (!b || y > b) && (m.onBlockNumber(y, b), (b = y));
                } catch (y) {
                  (p = m.onError) == null || p.call(m, y);
                }
              },
              { emitOnBegin: u, interval: g },
            ),
          );
        })()
      : (() => {
          const E = (0, i.stringify)(["watchBlockNumber", a.uid, u, f]);
          return (0, n.observe)(E, { onBlockNumber: c, onError: d }, (m) => {
            let p = !0,
              y = () => (p = !1);
            return (
              (async () => {
                try {
                  const j = (() => {
                      if (a.transport.type === "fallback") {
                        const S = a.transport.transports.find(
                          (w) => w.config.type === "webSocket",
                        );
                        return S ? S.value : a.transport;
                      }
                      return a.transport;
                    })(),
                    { unsubscribe: P } = await j.subscribe({
                      params: ["newHeads"],
                      onData(S) {
                        var q;
                        if (!p) return;
                        const w = (0, e.hexToBigInt)(
                          (q = S.result) == null ? void 0 : q.number,
                        );
                        m.onBlockNumber(w, b), (b = w);
                      },
                      onError(S) {
                        var w;
                        (w = m.onError) == null || w.call(m, S);
                      },
                    });
                  (y = P), p || y();
                } catch (j) {
                  d == null || d(j);
                }
              })(),
              () => y()
            );
          });
        })();
  }
  return ss;
}
var fh;
function g_() {
  if (fh) return as;
  (fh = 1),
    Object.defineProperty(as, "__esModule", { value: !0 }),
    (as.waitForTransactionReceipt = d);
  const e = ed(),
    t = He(),
    n = fe(),
    r = kr(),
    i = sy(),
    s = gd(),
    o = Se(),
    a = Hr(),
    u = xd(),
    f = Wy(),
    c = ep();
  async function d(
    l,
    {
      confirmations: g = 1,
      hash: h,
      onReplaced: b,
      pollingInterval: v = l.pollingInterval,
      retryCount: _ = 6,
      retryDelay: E = ({ count: p }) => ~~(1 << p) * 200,
      timeout: m = 18e4,
    },
  ) {
    const p = (0, o.stringify)(["waitForTransactionReceipt", l.uid, h]);
    let y,
      j,
      P,
      S = !1;
    const { promise: w, resolve: q, reject: T } = (0, i.withResolvers)(),
      B = m
        ? setTimeout(
            () => T(new t.WaitForTransactionReceiptTimeoutError({ hash: h })),
            m,
          )
        : void 0,
      M = (0, r.observe)(p, { onReplaced: b, resolve: q, reject: T }, (A) => {
        const x = (0, n.getAction)(
          l,
          c.watchBlockNumber,
          "watchBlockNumber",
        )({
          emitMissed: !0,
          emitOnBegin: !0,
          poll: !0,
          pollingInterval: v,
          async onBlockNumber($) {
            const F = (R) => {
              clearTimeout(B), x(), R(), M();
            };
            let H = $;
            if (!S)
              try {
                if (P) {
                  if (g > 1 && (!P.blockNumber || H - P.blockNumber + 1n < g))
                    return;
                  F(() => A.resolve(P));
                  return;
                }
                if (
                  (y ||
                    ((S = !0),
                    await (0, s.withRetry)(
                      async () => {
                        (y = await (0, n.getAction)(
                          l,
                          u.getTransaction,
                          "getTransaction",
                        )({ hash: h })),
                          y.blockNumber && (H = y.blockNumber);
                      },
                      { delay: E, retryCount: _ },
                    ),
                    (S = !1)),
                  (P = await (0, n.getAction)(
                    l,
                    f.getTransactionReceipt,
                    "getTransactionReceipt",
                  )({ hash: h })),
                  g > 1 && (!P.blockNumber || H - P.blockNumber + 1n < g))
                )
                  return;
                F(() => A.resolve(P));
              } catch (R) {
                if (
                  R instanceof t.TransactionNotFoundError ||
                  R instanceof t.TransactionReceiptNotFoundError
                ) {
                  if (!y) {
                    S = !1;
                    return;
                  }
                  try {
                    (j = y), (S = !0);
                    const O = await (0, s.withRetry)(
                      () =>
                        (0, n.getAction)(
                          l,
                          a.getBlock,
                          "getBlock",
                        )({ blockNumber: H, includeTransactions: !0 }),
                      {
                        delay: E,
                        retryCount: _,
                        shouldRetry: ({ error: k }) =>
                          k instanceof e.BlockNotFoundError,
                      },
                    );
                    S = !1;
                    const I = O.transactions.find(
                      ({ from: k, nonce: z }) => k === j.from && z === j.nonce,
                    );
                    if (
                      !I ||
                      ((P = await (0, n.getAction)(
                        l,
                        f.getTransactionReceipt,
                        "getTransactionReceipt",
                      )({ hash: I.hash })),
                      g > 1 && (!P.blockNumber || H - P.blockNumber + 1n < g))
                    )
                      return;
                    let C = "replaced";
                    I.to === j.to && I.value === j.value && I.input === j.input
                      ? (C = "repriced")
                      : I.from === I.to && I.value === 0n && (C = "cancelled"),
                      F(() => {
                        var k;
                        (k = A.onReplaced) == null ||
                          k.call(A, {
                            reason: C,
                            replacedTransaction: j,
                            transaction: I,
                            transactionReceipt: P,
                          }),
                          A.resolve(P);
                      });
                  } catch (O) {
                    F(() => A.reject(O));
                  }
                } else F(() => A.reject(R));
              }
          },
        });
      });
    return w;
  }
  return as;
}
var us = {},
  lh;
function y_() {
  if (lh) return us;
  (lh = 1),
    Object.defineProperty(us, "__esModule", { value: !0 }),
    (us.watchBlocks = s);
  const e = fe(),
    t = kr(),
    n = oo(),
    r = Se(),
    i = Hr();
  function s(
    o,
    {
      blockTag: a = "latest",
      emitMissed: u = !1,
      emitOnBegin: f = !1,
      onBlock: c,
      onError: d,
      includeTransactions: l,
      poll: g,
      pollingInterval: h = o.pollingInterval,
    },
  ) {
    const b =
        typeof g < "u"
          ? g
          : !(
              o.transport.type === "webSocket" ||
              (o.transport.type === "fallback" &&
                o.transport.transports[0].config.type === "webSocket")
            ),
      v = l ?? !1;
    let _;
    return b
      ? (() => {
          const p = (0, r.stringify)(["watchBlocks", o.uid, a, u, f, v, h]);
          return (0, t.observe)(p, { onBlock: c, onError: d }, (y) =>
            (0, n.poll)(
              async () => {
                var j;
                try {
                  const P = await (0, e.getAction)(
                    o,
                    i.getBlock,
                    "getBlock",
                  )({ blockTag: a, includeTransactions: v });
                  if (P.number && _ != null && _.number) {
                    if (P.number === _.number) return;
                    if (P.number - _.number > 1 && u)
                      for (
                        let S = (_ == null ? void 0 : _.number) + 1n;
                        S < P.number;
                        S++
                      ) {
                        const w = await (0, e.getAction)(
                          o,
                          i.getBlock,
                          "getBlock",
                        )({ blockNumber: S, includeTransactions: v });
                        y.onBlock(w, _), (_ = w);
                      }
                  }
                  (!(_ != null && _.number) ||
                    (a === "pending" && !(P != null && P.number)) ||
                    (P.number && P.number > _.number)) &&
                    (y.onBlock(P, _), (_ = P));
                } catch (P) {
                  (j = y.onError) == null || j.call(y, P);
                }
              },
              { emitOnBegin: f, interval: h },
            ),
          );
        })()
      : (() => {
          let p = !0,
            y = !0,
            j = () => (p = !1);
          return (
            (async () => {
              try {
                f &&
                  (0, e.getAction)(
                    o,
                    i.getBlock,
                    "getBlock",
                  )({ blockTag: a, includeTransactions: v }).then((w) => {
                    p && y && (c(w, void 0), (y = !1));
                  });
                const P = (() => {
                    if (o.transport.type === "fallback") {
                      const w = o.transport.transports.find(
                        (q) => q.config.type === "webSocket",
                      );
                      return w ? w.value : o.transport;
                    }
                    return o.transport;
                  })(),
                  { unsubscribe: S } = await P.subscribe({
                    params: ["newHeads"],
                    async onData(w) {
                      if (!p) return;
                      const q = await (0, e.getAction)(
                        o,
                        i.getBlock,
                        "getBlock",
                      )({
                        blockNumber: w.blockNumber,
                        includeTransactions: v,
                      }).catch(() => {});
                      p && (c(q, _), (y = !1), (_ = q));
                    },
                    onError(w) {
                      d == null || d(w);
                    },
                  });
                (j = S), p || j();
              } catch (P) {
                d == null || d(P);
              }
            })(),
            () => j()
          );
        })();
  }
  return us;
}
var cs = {},
  mh;
function p_() {
  if (mh) return cs;
  (mh = 1),
    Object.defineProperty(cs, "__esModule", { value: !0 }),
    (cs.watchEvent = h);
  const e = lr(),
    t = kr(),
    n = oo(),
    r = Se(),
    i = ye(),
    s = br(),
    o = Qn(),
    a = It(),
    u = fe(),
    f = _y(),
    c = io(),
    d = Fu(),
    l = sd(),
    g = Hu();
  function h(
    b,
    {
      address: v,
      args: _,
      batch: E = !0,
      event: m,
      events: p,
      fromBlock: y,
      onError: j,
      onLogs: P,
      poll: S,
      pollingInterval: w = b.pollingInterval,
      strict: q,
    },
  ) {
    const T =
        typeof S < "u"
          ? S
          : typeof y == "bigint"
            ? !0
            : !(
                b.transport.type === "webSocket" ||
                (b.transport.type === "fallback" &&
                  b.transport.transports[0].config.type === "webSocket")
              ),
      B = q ?? !1;
    return T
      ? (() => {
          const x = (0, r.stringify)(["watchEvent", v, _, E, b.uid, m, w, y]);
          return (0, t.observe)(x, { onLogs: P, onError: j }, ($) => {
            let F;
            y !== void 0 && (F = y - 1n);
            let H,
              R = !1;
            const O = (0, n.poll)(
              async () => {
                var I;
                if (!R) {
                  try {
                    H = await (0, u.getAction)(
                      b,
                      f.createEventFilter,
                      "createEventFilter",
                    )({
                      address: v,
                      args: _,
                      event: m,
                      events: p,
                      strict: B,
                      fromBlock: y,
                    });
                  } catch {}
                  R = !0;
                  return;
                }
                try {
                  let C;
                  if (H)
                    C = await (0, u.getAction)(
                      b,
                      d.getFilterChanges,
                      "getFilterChanges",
                    )({ filter: H });
                  else {
                    const k = await (0, u.getAction)(
                      b,
                      c.getBlockNumber,
                      "getBlockNumber",
                    )({});
                    F && F !== k
                      ? (C = await (0, u.getAction)(
                          b,
                          l.getLogs,
                          "getLogs",
                        )({
                          address: v,
                          args: _,
                          event: m,
                          events: p,
                          fromBlock: F + 1n,
                          toBlock: k,
                        }))
                      : (C = []),
                      (F = k);
                  }
                  if (C.length === 0) return;
                  if (E) $.onLogs(C);
                  else for (const k of C) $.onLogs([k]);
                } catch (C) {
                  H && C instanceof s.InvalidInputRpcError && (R = !1),
                    (I = $.onError) == null || I.call($, C);
                }
              },
              { emitOnBegin: !0, interval: w },
            );
            return async () => {
              H &&
                (await (0, u.getAction)(
                  b,
                  g.uninstallFilter,
                  "uninstallFilter",
                )({ filter: H })),
                O();
            };
          });
        })()
      : (() => {
          let x = !0,
            $ = () => (x = !1);
          return (
            (async () => {
              try {
                const F = (() => {
                    if (b.transport.type === "fallback") {
                      const I = b.transport.transports.find(
                        (C) => C.config.type === "webSocket",
                      );
                      return I ? I.value : b.transport;
                    }
                    return b.transport;
                  })(),
                  H = p ?? (m ? [m] : void 0);
                let R = [];
                H &&
                  ((R = [
                    H.flatMap((C) =>
                      (0, e.encodeEventTopics)({
                        abi: [C],
                        eventName: C.name,
                        args: _,
                      }),
                    ),
                  ]),
                  m && (R = R[0]));
                const { unsubscribe: O } = await F.subscribe({
                  params: ["logs", { address: v, topics: R }],
                  onData(I) {
                    var k;
                    if (!x) return;
                    const C = I.result;
                    try {
                      const { eventName: z, args: U } = (0, o.decodeEventLog)({
                          abi: H ?? [],
                          data: C.data,
                          topics: C.topics,
                          strict: B,
                        }),
                        L = (0, a.formatLog)(C, { args: U, eventName: z });
                      P([L]);
                    } catch (z) {
                      let U, L;
                      if (
                        z instanceof i.DecodeLogDataMismatch ||
                        z instanceof i.DecodeLogTopicsMismatch
                      ) {
                        if (q) return;
                        (U = z.abiItem.name),
                          (L =
                            (k = z.abiItem.inputs) == null
                              ? void 0
                              : k.some((G) => !("name" in G && G.name)));
                      }
                      const V = (0, a.formatLog)(C, {
                        args: L ? [] : {},
                        eventName: U,
                      });
                      P([V]);
                    }
                  },
                  onError(I) {
                    j == null || j(I);
                  },
                });
                ($ = O), x || $();
              } catch (F) {
                j == null || j(F);
              }
            })(),
            () => $()
          );
        })();
  }
  return cs;
}
var ds = {},
  bh;
function __() {
  if (bh) return ds;
  (bh = 1),
    Object.defineProperty(ds, "__esModule", { value: !0 }),
    (ds.watchPendingTransactions = a);
  const e = fe(),
    t = kr(),
    n = oo(),
    r = Se(),
    i = vy(),
    s = Fu(),
    o = Hu();
  function a(
    u,
    {
      batch: f = !0,
      onError: c,
      onTransactions: d,
      poll: l,
      pollingInterval: g = u.pollingInterval,
    },
  ) {
    return (typeof l < "u" ? l : u.transport.type !== "webSocket")
      ? (() => {
          const _ = (0, r.stringify)(["watchPendingTransactions", u.uid, f, g]);
          return (0, t.observe)(_, { onTransactions: d, onError: c }, (E) => {
            let m;
            const p = (0, n.poll)(
              async () => {
                var y;
                try {
                  if (!m)
                    try {
                      m = await (0, e.getAction)(
                        u,
                        i.createPendingTransactionFilter,
                        "createPendingTransactionFilter",
                      )({});
                      return;
                    } catch (P) {
                      throw (p(), P);
                    }
                  const j = await (0, e.getAction)(
                    u,
                    s.getFilterChanges,
                    "getFilterChanges",
                  )({ filter: m });
                  if (j.length === 0) return;
                  if (f) E.onTransactions(j);
                  else for (const P of j) E.onTransactions([P]);
                } catch (j) {
                  (y = E.onError) == null || y.call(E, j);
                }
              },
              { emitOnBegin: !0, interval: g },
            );
            return async () => {
              m &&
                (await (0, e.getAction)(
                  u,
                  o.uninstallFilter,
                  "uninstallFilter",
                )({ filter: m })),
                p();
            };
          });
        })()
      : (() => {
          let _ = !0,
            E = () => (_ = !1);
          return (
            (async () => {
              try {
                const { unsubscribe: m } = await u.transport.subscribe({
                  params: ["newPendingTransactions"],
                  onData(p) {
                    if (!_) return;
                    const y = p.result;
                    d([y]);
                  },
                  onError(p) {
                    c == null || c(p);
                  },
                });
                (E = m), _ || E();
              } catch (m) {
                c == null || c(m);
              }
            })(),
            () => E()
          );
        })();
  }
  return ds;
}
var fs = {},
  ls = {},
  hh;
function v_() {
  if (hh) return ls;
  (hh = 1),
    Object.defineProperty(ls, "__esModule", { value: !0 }),
    (ls.parseSiweMessage = e);
  function e(r) {
    var h, b, v;
    const {
        scheme: i,
        statement: s,
        ...o
      } = ((h = r.match(t)) == null ? void 0 : h.groups) ?? {},
      {
        chainId: a,
        expirationTime: u,
        issuedAt: f,
        notBefore: c,
        requestId: d,
        ...l
      } = ((b = r.match(n)) == null ? void 0 : b.groups) ?? {},
      g =
        (v = r.split("Resources:")[1]) == null
          ? void 0
          : v
              .split(
                `
- `,
              )
              .slice(1);
    return {
      ...o,
      ...l,
      ...(a ? { chainId: Number(a) } : {}),
      ...(u ? { expirationTime: new Date(u) } : {}),
      ...(f ? { issuedAt: new Date(f) } : {}),
      ...(c ? { notBefore: new Date(c) } : {}),
      ...(d ? { requestId: d } : {}),
      ...(g ? { resources: g } : {}),
      ...(i ? { scheme: i } : {}),
      ...(s ? { statement: s } : {}),
    };
  }
  const t =
      /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
    n =
      /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
  return ls;
}
var ms = {},
  gh;
function E_() {
  if (gh) return ms;
  (gh = 1),
    Object.defineProperty(ms, "__esModule", { value: !0 }),
    (ms.validateSiweMessage = t);
  const e = St();
  function t(n) {
    const {
      address: r,
      domain: i,
      message: s,
      nonce: o,
      scheme: a,
      time: u = new Date(),
    } = n;
    if (
      (i && s.domain !== i) ||
      (o && s.nonce !== o) ||
      (a && s.scheme !== a) ||
      (s.expirationTime && u >= s.expirationTime) ||
      (s.notBefore && u < s.notBefore)
    )
      return !1;
    try {
      if (!s.address || (r && !(0, e.isAddressEqual)(s.address, r))) return !1;
    } catch {
      return !1;
    }
    return !0;
  }
  return ms;
}
var yh;
function j_() {
  if (yh) return fs;
  (yh = 1),
    Object.defineProperty(fs, "__esModule", { value: !0 }),
    (fs.verifySiweMessage = i);
  const e = co(),
    t = v_(),
    n = E_(),
    r = Md();
  async function i(s, o) {
    const {
        address: a,
        domain: u,
        message: f,
        nonce: c,
        scheme: d,
        signature: l,
        time: g = new Date(),
        ...h
      } = o,
      b = (0, t.parseSiweMessage)(f);
    if (
      !b.address ||
      !(0, n.validateSiweMessage)({
        address: a,
        domain: u,
        message: b,
        nonce: c,
        scheme: d,
        time: g,
      })
    )
      return !1;
    const _ = (0, e.hashMessage)(f);
    return (0, r.verifyHash)(s, {
      address: b.address,
      hash: _,
      signature: l,
      ...h,
    });
  }
  return fs;
}
var ph;
function tp() {
  if (ph) return Yi;
  (ph = 1),
    Object.defineProperty(Yi, "__esModule", { value: !0 }),
    (Yi.publicActions = Y);
  const e = $1(),
    t = L1(),
    n = D1(),
    r = U1(),
    i = py(),
    s = no(),
    o = G1(),
    a = V1(),
    u = Gc(),
    f = _y(),
    c = vy(),
    d = ay(),
    l = ey(),
    g = ad(),
    h = Qg(),
    b = iy(),
    v = W1(),
    _ = Hr(),
    E = io(),
    m = K1(),
    p = Xn(),
    y = Z1(),
    j = ud(),
    P = Y1(),
    S = Q1(),
    w = Fu(),
    q = e_(),
    T = td(),
    B = sd(),
    M = i_(),
    A = a_(),
    x = xd(),
    $ = s_(),
    F = rd(),
    H = Wy(),
    R = u_(),
    O = Ot(),
    I = m_(),
    C = uy(),
    k = Hu(),
    z = b_(),
    U = h_(),
    L = g_(),
    V = ep(),
    G = y_(),
    Z = cy(),
    ee = p_(),
    J = __(),
    ae = j_(),
    K = Mu(),
    X = bd();
  function Y(W) {
    return {
      call: (D) => (0, s.call)(W, D),
      createAccessList: (D) => (0, o.createAccessList)(W, D),
      createBlockFilter: () => (0, a.createBlockFilter)(W),
      createContractEventFilter: (D) => (0, u.createContractEventFilter)(W, D),
      createEventFilter: (D) => (0, f.createEventFilter)(W, D),
      createPendingTransactionFilter: () =>
        (0, c.createPendingTransactionFilter)(W),
      estimateContractGas: (D) => (0, d.estimateContractGas)(W, D),
      estimateGas: (D) => (0, g.estimateGas)(W, D),
      getBalance: (D) => (0, b.getBalance)(W, D),
      getBlobBaseFee: () => (0, v.getBlobBaseFee)(W),
      getBlock: (D) => (0, _.getBlock)(W, D),
      getBlockNumber: (D) => (0, E.getBlockNumber)(W, D),
      getBlockTransactionCount: (D) => (0, m.getBlockTransactionCount)(W, D),
      getBytecode: (D) => (0, y.getCode)(W, D),
      getChainId: () => (0, p.getChainId)(W),
      getCode: (D) => (0, y.getCode)(W, D),
      getContractEvents: (D) => (0, j.getContractEvents)(W, D),
      getEip712Domain: (D) => (0, P.getEip712Domain)(W, D),
      getEnsAddress: (D) => (0, e.getEnsAddress)(W, D),
      getEnsAvatar: (D) => (0, t.getEnsAvatar)(W, D),
      getEnsName: (D) => (0, n.getEnsName)(W, D),
      getEnsResolver: (D) => (0, r.getEnsResolver)(W, D),
      getEnsText: (D) => (0, i.getEnsText)(W, D),
      getFeeHistory: (D) => (0, S.getFeeHistory)(W, D),
      estimateFeesPerGas: (D) => (0, l.estimateFeesPerGas)(W, D),
      getFilterChanges: (D) => (0, w.getFilterChanges)(W, D),
      getFilterLogs: (D) => (0, q.getFilterLogs)(W, D),
      getGasPrice: () => (0, T.getGasPrice)(W),
      getLogs: (D) => (0, B.getLogs)(W, D),
      getProof: (D) => (0, M.getProof)(W, D),
      estimateMaxPriorityFeePerGas: (D) =>
        (0, h.estimateMaxPriorityFeePerGas)(W, D),
      getStorageAt: (D) => (0, A.getStorageAt)(W, D),
      getTransaction: (D) => (0, x.getTransaction)(W, D),
      getTransactionConfirmations: (D) =>
        (0, $.getTransactionConfirmations)(W, D),
      getTransactionCount: (D) => (0, F.getTransactionCount)(W, D),
      getTransactionReceipt: (D) => (0, H.getTransactionReceipt)(W, D),
      multicall: (D) => (0, R.multicall)(W, D),
      prepareTransactionRequest: (D) => (0, K.prepareTransactionRequest)(W, D),
      readContract: (D) => (0, O.readContract)(W, D),
      sendRawTransaction: (D) => (0, X.sendRawTransaction)(W, D),
      simulate: (D) => (0, I.simulate)(W, D),
      simulateContract: (D) => (0, C.simulateContract)(W, D),
      verifyMessage: (D) => (0, z.verifyMessage)(W, D),
      verifySiweMessage: (D) => (0, ae.verifySiweMessage)(W, D),
      verifyTypedData: (D) => (0, U.verifyTypedData)(W, D),
      uninstallFilter: (D) => (0, k.uninstallFilter)(W, D),
      waitForTransactionReceipt: (D) => (0, L.waitForTransactionReceipt)(W, D),
      watchBlocks: (D) => (0, G.watchBlocks)(W, D),
      watchBlockNumber: (D) => (0, V.watchBlockNumber)(W, D),
      watchContractEvent: (D) => (0, Z.watchContractEvent)(W, D),
      watchEvent: (D) => (0, ee.watchEvent)(W, D),
      watchPendingTransactions: (D) => (0, J.watchPendingTransactions)(W, D),
    };
  }
  return Yi;
}
var _h;
function P_() {
  if (_h) return Ji;
  (_h = 1),
    Object.defineProperty(Ji, "__esModule", { value: !0 }),
    (Ji.createPublicClient = n);
  const e = $u(),
    t = tp();
  function n(r) {
    const { key: i = "public", name: s = "Public Client" } = r;
    return (0, e.createClient)({
      ...r,
      key: i,
      name: s,
      type: "publicClient",
    }).extend(t.publicActions);
  }
  return Ji;
}
var bs = {},
  hs = {},
  gs = {},
  vh;
function w_() {
  if (vh) return gs;
  (vh = 1),
    Object.defineProperty(gs, "__esModule", { value: !0 }),
    (gs.dropTransaction = e);
  async function e(t, { hash: n }) {
    await t.request({ method: `${t.mode}_dropTransaction`, params: [n] });
  }
  return gs;
}
var ys = {},
  Eh;
function T_() {
  if (Eh) return ys;
  (Eh = 1),
    Object.defineProperty(ys, "__esModule", { value: !0 }),
    (ys.dumpState = e);
  async function e(t) {
    return t.request({ method: `${t.mode}_dumpState` });
  }
  return ys;
}
var ps = {},
  jh;
function A_() {
  if (jh) return ps;
  (jh = 1),
    Object.defineProperty(ps, "__esModule", { value: !0 }),
    (ps.getAutomine = e);
  async function e(t) {
    return t.mode === "ganache"
      ? await t.request({ method: "eth_mining" })
      : await t.request({ method: `${t.mode}_getAutomine` });
  }
  return ps;
}
var _s = {},
  Ph;
function S_() {
  if (Ph) return _s;
  (Ph = 1),
    Object.defineProperty(_s, "__esModule", { value: !0 }),
    (_s.getTxpoolContent = e);
  async function e(t) {
    return await t.request({ method: "txpool_content" });
  }
  return _s;
}
var vs = {},
  wh;
function I_() {
  if (wh) return vs;
  (wh = 1),
    Object.defineProperty(vs, "__esModule", { value: !0 }),
    (vs.getTxpoolStatus = t);
  const e = Pe();
  async function t(n) {
    const { pending: r, queued: i } = await n.request({
      method: "txpool_status",
    });
    return { pending: (0, e.hexToNumber)(r), queued: (0, e.hexToNumber)(i) };
  }
  return vs;
}
var Es = {},
  Th;
function R_() {
  if (Th) return Es;
  (Th = 1),
    Object.defineProperty(Es, "__esModule", { value: !0 }),
    (Es.impersonateAccount = e);
  async function e(t, { address: n }) {
    await t.request({ method: `${t.mode}_impersonateAccount`, params: [n] });
  }
  return Es;
}
var js = {},
  Ah;
function O_() {
  if (Ah) return js;
  (Ah = 1),
    Object.defineProperty(js, "__esModule", { value: !0 }),
    (js.increaseTime = t);
  const e = Q();
  async function t(n, { seconds: r }) {
    return await n.request({
      method: "evm_increaseTime",
      params: [(0, e.numberToHex)(r)],
    });
  }
  return js;
}
var Ps = {},
  Sh;
function B_() {
  if (Sh) return Ps;
  (Sh = 1),
    Object.defineProperty(Ps, "__esModule", { value: !0 }),
    (Ps.inspectTxpool = e);
  async function e(t) {
    return await t.request({ method: "txpool_inspect" });
  }
  return Ps;
}
var ws = {},
  Ih;
function C_() {
  if (Ih) return ws;
  (Ih = 1),
    Object.defineProperty(ws, "__esModule", { value: !0 }),
    (ws.loadState = e);
  async function e(t, { state: n }) {
    await t.request({ method: `${t.mode}_loadState`, params: [n] });
  }
  return ws;
}
var Ts = {},
  Rh;
function q_() {
  if (Rh) return Ts;
  (Rh = 1),
    Object.defineProperty(Ts, "__esModule", { value: !0 }),
    (Ts.mine = t);
  const e = Q();
  async function t(n, { blocks: r, interval: i }) {
    n.mode === "ganache"
      ? await n.request({
          method: "evm_mine",
          params: [{ blocks: (0, e.numberToHex)(r) }],
        })
      : await n.request({
          method: `${n.mode}_mine`,
          params: [(0, e.numberToHex)(r), (0, e.numberToHex)(i || 0)],
        });
  }
  return Ts;
}
var As = {},
  Oh;
function x_() {
  if (Oh) return As;
  (Oh = 1),
    Object.defineProperty(As, "__esModule", { value: !0 }),
    (As.removeBlockTimestampInterval = e);
  async function e(t) {
    await t.request({ method: `${t.mode}_removeBlockTimestampInterval` });
  }
  return As;
}
var Ss = {},
  Bh;
function M_() {
  if (Bh) return Ss;
  (Bh = 1),
    Object.defineProperty(Ss, "__esModule", { value: !0 }),
    (Ss.reset = e);
  async function e(t, { blockNumber: n, jsonRpcUrl: r } = {}) {
    await t.request({
      method: `${t.mode}_reset`,
      params: [{ forking: { blockNumber: Number(n), jsonRpcUrl: r } }],
    });
  }
  return Ss;
}
var Is = {},
  Ch;
function F_() {
  if (Ch) return Is;
  (Ch = 1),
    Object.defineProperty(Is, "__esModule", { value: !0 }),
    (Is.revert = e);
  async function e(t, { id: n }) {
    await t.request({ method: "evm_revert", params: [n] });
  }
  return Is;
}
var Rs = {},
  qh;
function H_() {
  if (qh) return Rs;
  (qh = 1),
    Object.defineProperty(Rs, "__esModule", { value: !0 }),
    (Rs.sendUnsignedTransaction = n);
  const e = Fr(),
    t = Tt();
  async function n(r, i) {
    var p, y, j;
    const {
        accessList: s,
        data: o,
        from: a,
        gas: u,
        gasPrice: f,
        maxFeePerGas: c,
        maxPriorityFeePerGas: d,
        nonce: l,
        to: g,
        value: h,
        ...b
      } = i,
      v =
        (j =
          (y = (p = r.chain) == null ? void 0 : p.formatters) == null
            ? void 0
            : y.transactionRequest) == null
          ? void 0
          : j.format,
      E = (v || t.formatTransactionRequest)({
        ...(0, e.extract)(b, { format: v }),
        accessList: s,
        data: o,
        from: a,
        gas: u,
        gasPrice: f,
        maxFeePerGas: c,
        maxPriorityFeePerGas: d,
        nonce: l,
        to: g,
        value: h,
      });
    return await r.request({
      method: "eth_sendUnsignedTransaction",
      params: [E],
    });
  }
  return Rs;
}
var Os = {},
  xh;
function k_() {
  if (xh) return Os;
  (xh = 1),
    Object.defineProperty(Os, "__esModule", { value: !0 }),
    (Os.setAutomine = e);
  async function e(t, n) {
    t.mode === "ganache"
      ? n
        ? await t.request({ method: "miner_start" })
        : await t.request({ method: "miner_stop" })
      : await t.request({ method: "evm_setAutomine", params: [n] });
  }
  return Os;
}
var Bs = {},
  Mh;
function $_() {
  if (Mh) return Bs;
  (Mh = 1),
    Object.defineProperty(Bs, "__esModule", { value: !0 }),
    (Bs.setBalance = t);
  const e = Q();
  async function t(n, { address: r, value: i }) {
    n.mode === "ganache"
      ? await n.request({
          method: "evm_setAccountBalance",
          params: [r, (0, e.numberToHex)(i)],
        })
      : await n.request({
          method: `${n.mode}_setBalance`,
          params: [r, (0, e.numberToHex)(i)],
        });
  }
  return Bs;
}
var Cs = {},
  Fh;
function N_() {
  if (Fh) return Cs;
  (Fh = 1),
    Object.defineProperty(Cs, "__esModule", { value: !0 }),
    (Cs.setBlockGasLimit = t);
  const e = Q();
  async function t(n, { gasLimit: r }) {
    await n.request({
      method: "evm_setBlockGasLimit",
      params: [(0, e.numberToHex)(r)],
    });
  }
  return Cs;
}
var qs = {},
  Hh;
function z_() {
  if (Hh) return qs;
  (Hh = 1),
    Object.defineProperty(qs, "__esModule", { value: !0 }),
    (qs.setBlockTimestampInterval = e);
  async function e(t, { interval: n }) {
    const r = t.mode === "hardhat" ? n * 1e3 : n;
    await t.request({
      method: `${t.mode}_setBlockTimestampInterval`,
      params: [r],
    });
  }
  return qs;
}
var xs = {},
  kh;
function L_() {
  if (kh) return xs;
  (kh = 1),
    Object.defineProperty(xs, "__esModule", { value: !0 }),
    (xs.setCode = e);
  async function e(t, { address: n, bytecode: r }) {
    t.mode === "ganache"
      ? await t.request({ method: "evm_setAccountCode", params: [n, r] })
      : await t.request({ method: `${t.mode}_setCode`, params: [n, r] });
  }
  return xs;
}
var Ms = {},
  $h;
function D_() {
  if ($h) return Ms;
  ($h = 1),
    Object.defineProperty(Ms, "__esModule", { value: !0 }),
    (Ms.setCoinbase = e);
  async function e(t, { address: n }) {
    await t.request({ method: `${t.mode}_setCoinbase`, params: [n] });
  }
  return Ms;
}
var Fs = {},
  Nh;
function U_() {
  if (Nh) return Fs;
  (Nh = 1),
    Object.defineProperty(Fs, "__esModule", { value: !0 }),
    (Fs.setIntervalMining = e);
  async function e(t, { interval: n }) {
    const r = t.mode === "hardhat" ? n * 1e3 : n;
    await t.request({ method: "evm_setIntervalMining", params: [r] });
  }
  return Fs;
}
var Hs = {},
  zh;
function G_() {
  if (zh) return Hs;
  (zh = 1),
    Object.defineProperty(Hs, "__esModule", { value: !0 }),
    (Hs.setLoggingEnabled = e);
  async function e(t, n) {
    await t.request({ method: `${t.mode}_setLoggingEnabled`, params: [n] });
  }
  return Hs;
}
var ks = {},
  Lh;
function V_() {
  if (Lh) return ks;
  (Lh = 1),
    Object.defineProperty(ks, "__esModule", { value: !0 }),
    (ks.setMinGasPrice = t);
  const e = Q();
  async function t(n, { gasPrice: r }) {
    await n.request({
      method: `${n.mode}_setMinGasPrice`,
      params: [(0, e.numberToHex)(r)],
    });
  }
  return ks;
}
var $s = {},
  Dh;
function W_() {
  if (Dh) return $s;
  (Dh = 1),
    Object.defineProperty($s, "__esModule", { value: !0 }),
    ($s.setNextBlockBaseFeePerGas = t);
  const e = Q();
  async function t(n, { baseFeePerGas: r }) {
    await n.request({
      method: `${n.mode}_setNextBlockBaseFeePerGas`,
      params: [(0, e.numberToHex)(r)],
    });
  }
  return $s;
}
var Ns = {},
  Uh;
function K_() {
  if (Uh) return Ns;
  (Uh = 1),
    Object.defineProperty(Ns, "__esModule", { value: !0 }),
    (Ns.setNextBlockTimestamp = t);
  const e = Q();
  async function t(n, { timestamp: r }) {
    await n.request({
      method: "evm_setNextBlockTimestamp",
      params: [(0, e.numberToHex)(r)],
    });
  }
  return Ns;
}
var zs = {},
  Gh;
function Z_() {
  if (Gh) return zs;
  (Gh = 1),
    Object.defineProperty(zs, "__esModule", { value: !0 }),
    (zs.setNonce = t);
  const e = Q();
  async function t(n, { address: r, nonce: i }) {
    await n.request({
      method: `${n.mode}_setNonce`,
      params: [r, (0, e.numberToHex)(i)],
    });
  }
  return zs;
}
var Ls = {},
  Vh;
function J_() {
  if (Vh) return Ls;
  (Vh = 1),
    Object.defineProperty(Ls, "__esModule", { value: !0 }),
    (Ls.setRpcUrl = e);
  async function e(t, n) {
    await t.request({ method: `${t.mode}_setRpcUrl`, params: [n] });
  }
  return Ls;
}
var Ds = {},
  Wh;
function Y_() {
  if (Wh) return Ds;
  (Wh = 1),
    Object.defineProperty(Ds, "__esModule", { value: !0 }),
    (Ds.setStorageAt = t);
  const e = Q();
  async function t(n, { address: r, index: i, value: s }) {
    await n.request({
      method: `${n.mode}_setStorageAt`,
      params: [r, typeof i == "number" ? (0, e.numberToHex)(i) : i, s],
    });
  }
  return Ds;
}
var Us = {},
  Kh;
function X_() {
  if (Kh) return Us;
  (Kh = 1),
    Object.defineProperty(Us, "__esModule", { value: !0 }),
    (Us.snapshot = e);
  async function e(t) {
    return await t.request({ method: "evm_snapshot" });
  }
  return Us;
}
var Gs = {},
  Zh;
function Q_() {
  if (Zh) return Gs;
  (Zh = 1),
    Object.defineProperty(Gs, "__esModule", { value: !0 }),
    (Gs.stopImpersonatingAccount = e);
  async function e(t, { address: n }) {
    await t.request({
      method: `${t.mode}_stopImpersonatingAccount`,
      params: [n],
    });
  }
  return Gs;
}
var Jh;
function rp() {
  if (Jh) return hs;
  (Jh = 1),
    Object.defineProperty(hs, "__esModule", { value: !0 }),
    (hs.testActions = A);
  const e = w_(),
    t = T_(),
    n = A_(),
    r = S_(),
    i = I_(),
    s = R_(),
    o = O_(),
    a = B_(),
    u = C_(),
    f = q_(),
    c = x_(),
    d = M_(),
    l = F_(),
    g = H_(),
    h = k_(),
    b = $_(),
    v = N_(),
    _ = z_(),
    E = L_(),
    m = D_(),
    p = U_(),
    y = G_(),
    j = V_(),
    P = W_(),
    S = K_(),
    w = Z_(),
    q = J_(),
    T = Y_(),
    B = X_(),
    M = Q_();
  function A({ mode: x }) {
    return ($) => {
      const F = $.extend(() => ({ mode: x }));
      return {
        dropTransaction: (H) => (0, e.dropTransaction)(F, H),
        dumpState: () => (0, t.dumpState)(F),
        getAutomine: () => (0, n.getAutomine)(F),
        getTxpoolContent: () => (0, r.getTxpoolContent)(F),
        getTxpoolStatus: () => (0, i.getTxpoolStatus)(F),
        impersonateAccount: (H) => (0, s.impersonateAccount)(F, H),
        increaseTime: (H) => (0, o.increaseTime)(F, H),
        inspectTxpool: () => (0, a.inspectTxpool)(F),
        loadState: (H) => (0, u.loadState)(F, H),
        mine: (H) => (0, f.mine)(F, H),
        removeBlockTimestampInterval: () =>
          (0, c.removeBlockTimestampInterval)(F),
        reset: (H) => (0, d.reset)(F, H),
        revert: (H) => (0, l.revert)(F, H),
        sendUnsignedTransaction: (H) => (0, g.sendUnsignedTransaction)(F, H),
        setAutomine: (H) => (0, h.setAutomine)(F, H),
        setBalance: (H) => (0, b.setBalance)(F, H),
        setBlockGasLimit: (H) => (0, v.setBlockGasLimit)(F, H),
        setBlockTimestampInterval: (H) =>
          (0, _.setBlockTimestampInterval)(F, H),
        setCode: (H) => (0, E.setCode)(F, H),
        setCoinbase: (H) => (0, m.setCoinbase)(F, H),
        setIntervalMining: (H) => (0, p.setIntervalMining)(F, H),
        setLoggingEnabled: (H) => (0, y.setLoggingEnabled)(F, H),
        setMinGasPrice: (H) => (0, j.setMinGasPrice)(F, H),
        setNextBlockBaseFeePerGas: (H) =>
          (0, P.setNextBlockBaseFeePerGas)(F, H),
        setNextBlockTimestamp: (H) => (0, S.setNextBlockTimestamp)(F, H),
        setNonce: (H) => (0, w.setNonce)(F, H),
        setRpcUrl: (H) => (0, q.setRpcUrl)(F, H),
        setStorageAt: (H) => (0, T.setStorageAt)(F, H),
        snapshot: () => (0, B.snapshot)(F),
        stopImpersonatingAccount: (H) => (0, M.stopImpersonatingAccount)(F, H),
      };
    };
  }
  return hs;
}
var Yh;
function ev() {
  if (Yh) return bs;
  (Yh = 1),
    Object.defineProperty(bs, "__esModule", { value: !0 }),
    (bs.createTestClient = n);
  const e = $u(),
    t = rp();
  function n(r) {
    const { key: i = "test", name: s = "Test Client", mode: o } = r;
    return (0, e.createClient)({
      ...r,
      key: i,
      name: s,
      type: "testClient",
    }).extend((u) => ({ mode: o, ...(0, t.testActions)({ mode: o })(u) }));
  }
  return bs;
}
var Vs = {},
  Ws = {},
  Xh;
function tv() {
  if (Xh) return Ws;
  (Xh = 1),
    Object.defineProperty(Ws, "__esModule", { value: !0 }),
    (Ws.addChain = t);
  const e = Q();
  async function t(n, { chain: r }) {
    const {
      id: i,
      name: s,
      nativeCurrency: o,
      rpcUrls: a,
      blockExplorers: u,
    } = r;
    await n.request(
      {
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: (0, e.numberToHex)(i),
            chainName: s,
            nativeCurrency: o,
            rpcUrls: a.default.http,
            blockExplorerUrls: u
              ? Object.values(u).map(({ url: f }) => f)
              : void 0,
          },
        ],
      },
      { dedupe: !0, retryCount: 0 },
    );
  }
  return Ws;
}
var Ks = {},
  Qh;
function rv() {
  if (Qh) return Ks;
  (Qh = 1),
    Object.defineProperty(Ks, "__esModule", { value: !0 }),
    (Ks.deployContract = n);
  const e = ro(),
    t = hd();
  function n(r, i) {
    const { abi: s, args: o, bytecode: a, ...u } = i,
      f = (0, e.encodeDeployData)({ abi: s, args: o, bytecode: a });
    return (0, t.sendTransaction)(r, { ...u, data: f });
  }
  return Ks;
}
var Zs = {},
  eg;
function nv() {
  if (eg) return Zs;
  (eg = 1),
    Object.defineProperty(Zs, "__esModule", { value: !0 }),
    (Zs.getAddresses = t);
  const e = ke();
  async function t(n) {
    var i;
    return ((i = n.account) == null ? void 0 : i.type) === "local"
      ? [n.account.address]
      : (await n.request({ method: "eth_accounts" }, { dedupe: !0 })).map((s) =>
          (0, e.checksumAddress)(s),
        );
  }
  return Zs;
}
var Js = {},
  tg;
function ov() {
  if (tg) return Js;
  (tg = 1),
    Object.defineProperty(Js, "__esModule", { value: !0 }),
    (Js.getPermissions = e);
  async function e(t) {
    return await t.request({ method: "wallet_getPermissions" }, { dedupe: !0 });
  }
  return Js;
}
var Ys = {},
  rg;
function iv() {
  if (rg) return Ys;
  (rg = 1),
    Object.defineProperty(Ys, "__esModule", { value: !0 }),
    (Ys.requestAddresses = t);
  const e = ke();
  async function t(n) {
    return (
      await n.request(
        { method: "eth_requestAccounts" },
        { dedupe: !0, retryCount: 0 },
      )
    ).map((i) => (0, e.getAddress)(i));
  }
  return Ys;
}
var Xs = {},
  ng;
function av() {
  if (ng) return Xs;
  (ng = 1),
    Object.defineProperty(Xs, "__esModule", { value: !0 }),
    (Xs.requestPermissions = e);
  async function e(t, n) {
    return t.request(
      { method: "wallet_requestPermissions", params: [n] },
      { retryCount: 0 },
    );
  }
  return Xs;
}
var Qs = {},
  og;
function sv() {
  if (og) return Qs;
  (og = 1),
    Object.defineProperty(Qs, "__esModule", { value: !0 }),
    (Qs.signMessage = r);
  const e = Ae(),
    t = ao(),
    n = Q();
  async function r(i, { account: s = i.account, message: o }) {
    if (!s)
      throw new t.AccountNotFoundError({
        docsPath: "/docs/actions/wallet/signMessage",
      });
    const a = (0, e.parseAccount)(s);
    if (a.signMessage) return a.signMessage({ message: o });
    const u =
      typeof o == "string"
        ? (0, n.stringToHex)(o)
        : o.raw instanceof Uint8Array
          ? (0, n.toHex)(o.raw)
          : o.raw;
    return i.request(
      { method: "personal_sign", params: [u, a.address] },
      { retryCount: 0 },
    );
  }
  return Qs;
}
var eu = {},
  ig;
function uv() {
  if (ig) return eu;
  (ig = 1),
    Object.defineProperty(eu, "__esModule", { value: !0 }),
    (eu.signTransaction = u);
  const e = Ae(),
    t = ao(),
    n = ku(),
    r = Q(),
    i = Tt(),
    s = fe(),
    o = At(),
    a = Xn();
  async function u(f, c) {
    var E, m, p, y;
    const { account: d = f.account, chain: l = f.chain, ...g } = c;
    if (!d)
      throw new t.AccountNotFoundError({
        docsPath: "/docs/actions/wallet/signTransaction",
      });
    const h = (0, e.parseAccount)(d);
    (0, o.assertRequest)({ account: h, ...c });
    const b = await (0, s.getAction)(f, a.getChainId, "getChainId")({});
    l !== null && (0, n.assertCurrentChain)({ currentChainId: b, chain: l });
    const v =
        (l == null ? void 0 : l.formatters) ||
        ((E = f.chain) == null ? void 0 : E.formatters),
      _ =
        ((m = v == null ? void 0 : v.transactionRequest) == null
          ? void 0
          : m.format) || i.formatTransactionRequest;
    return h.signTransaction
      ? h.signTransaction(
          { ...g, chainId: b },
          {
            serializer:
              (y = (p = f.chain) == null ? void 0 : p.serializers) == null
                ? void 0
                : y.transaction,
          },
        )
      : await f.request(
          {
            method: "eth_signTransaction",
            params: [
              { ..._(g), chainId: (0, r.numberToHex)(b), from: h.address },
            ],
          },
          { retryCount: 0 },
        );
  }
  return eu;
}
var tu = {},
  ag;
function cv() {
  if (ag) return tu;
  (ag = 1),
    Object.defineProperty(tu, "__esModule", { value: !0 }),
    (tu.signTypedData = r);
  const e = Ae(),
    t = ao(),
    n = zu();
  async function r(i, s) {
    const { account: o = i.account, domain: a, message: u, primaryType: f } = s;
    if (!o)
      throw new t.AccountNotFoundError({
        docsPath: "/docs/actions/wallet/signTypedData",
      });
    const c = (0, e.parseAccount)(o),
      d = {
        EIP712Domain: (0, n.getTypesForEIP712Domain)({ domain: a }),
        ...s.types,
      };
    if (
      ((0, n.validateTypedData)({
        domain: a,
        message: u,
        primaryType: f,
        types: d,
      }),
      c.signTypedData)
    )
      return c.signTypedData({
        domain: a,
        message: u,
        primaryType: f,
        types: d,
      });
    const l = (0, n.serializeTypedData)({
      domain: a,
      message: u,
      primaryType: f,
      types: d,
    });
    return i.request(
      { method: "eth_signTypedData_v4", params: [c.address, l] },
      { retryCount: 0 },
    );
  }
  return tu;
}
var ru = {},
  sg;
function dv() {
  if (sg) return ru;
  (sg = 1),
    Object.defineProperty(ru, "__esModule", { value: !0 }),
    (ru.switchChain = t);
  const e = Q();
  async function t(n, { id: r }) {
    await n.request(
      {
        method: "wallet_switchEthereumChain",
        params: [{ chainId: (0, e.numberToHex)(r) }],
      },
      { retryCount: 0 },
    );
  }
  return ru;
}
var nu = {},
  ug;
function fv() {
  if (ug) return nu;
  (ug = 1),
    Object.defineProperty(nu, "__esModule", { value: !0 }),
    (nu.watchAsset = e);
  async function e(t, n) {
    return await t.request(
      { method: "wallet_watchAsset", params: n },
      { retryCount: 0 },
    );
  }
  return nu;
}
var cg;
function np() {
  if (cg) return Vs;
  (cg = 1),
    Object.defineProperty(Vs, "__esModule", { value: !0 }),
    (Vs.walletActions = v);
  const e = Xn(),
    t = tv(),
    n = rv(),
    r = nv(),
    i = ov(),
    s = Mu(),
    o = iv(),
    a = av(),
    u = bd(),
    f = hd(),
    c = sv(),
    d = uv(),
    l = cv(),
    g = dv(),
    h = fv(),
    b = fy();
  function v(_) {
    return {
      addChain: (E) => (0, t.addChain)(_, E),
      deployContract: (E) => (0, n.deployContract)(_, E),
      getAddresses: () => (0, r.getAddresses)(_),
      getChainId: () => (0, e.getChainId)(_),
      getPermissions: () => (0, i.getPermissions)(_),
      prepareTransactionRequest: (E) => (0, s.prepareTransactionRequest)(_, E),
      requestAddresses: () => (0, o.requestAddresses)(_),
      requestPermissions: (E) => (0, a.requestPermissions)(_, E),
      sendRawTransaction: (E) => (0, u.sendRawTransaction)(_, E),
      sendTransaction: (E) => (0, f.sendTransaction)(_, E),
      signMessage: (E) => (0, c.signMessage)(_, E),
      signTransaction: (E) => (0, d.signTransaction)(_, E),
      signTypedData: (E) => (0, l.signTypedData)(_, E),
      switchChain: (E) => (0, g.switchChain)(_, E),
      watchAsset: (E) => (0, h.watchAsset)(_, E),
      writeContract: (E) => (0, b.writeContract)(_, E),
    };
  }
  return Vs;
}
var ou = {},
  dg;
function lv() {
  if (dg) return ou;
  (dg = 1),
    Object.defineProperty(ou, "__esModule", { value: !0 }),
    (ou.createWalletClient = n);
  const e = $u(),
    t = np();
  function n(r) {
    const { key: i = "wallet", name: s = "Wallet Client", transport: o } = r;
    return (0, e.createClient)({
      ...r,
      key: i,
      name: s,
      transport: o,
      type: "walletClient",
    }).extend(t.walletActions);
  }
  return ou;
}
var iu = {},
  fg;
function mv() {
  if (fg) return iu;
  (fg = 1),
    Object.defineProperty(iu, "__esModule", { value: !0 }),
    (iu.webSocket = s);
  const e = Qe(),
    t = yd(),
    n = wy(),
    r = jd(),
    i = so();
  function s(o, a = {}) {
    const {
      keepAlive: u,
      key: f = "webSocket",
      name: c = "WebSocket JSON-RPC",
      reconnect: d,
      retryDelay: l,
    } = a;
    return ({ chain: g, retryCount: h, timeout: b }) => {
      var m;
      const v = a.retryCount ?? h,
        _ = b ?? a.timeout ?? 1e4,
        E =
          o ||
          ((m = g == null ? void 0 : g.rpcUrls.default.webSocket) == null
            ? void 0
            : m[0]);
      if (!E) throw new t.UrlRequiredError();
      return (0, i.createTransport)(
        {
          key: f,
          name: c,
          async request({ method: p, params: y }) {
            const j = { method: p, params: y },
              P = await (0, r.getWebSocketRpcClient)(E, {
                keepAlive: u,
                reconnect: d,
              }),
              { error: S, result: w } = await P.requestAsync({
                body: j,
                timeout: _,
              });
            if (S) throw new e.RpcRequestError({ body: j, error: S, url: E });
            return w;
          },
          retryCount: v,
          retryDelay: l,
          timeout: _,
          type: "webSocket",
        },
        {
          getSocket() {
            return (0, n.getSocket)(E);
          },
          getRpcClient() {
            return (0, r.getWebSocketRpcClient)(E);
          },
          async subscribe({ params: p, onData: y, onError: j }) {
            const P = await (0, r.getWebSocketRpcClient)(E),
              { result: S } = await new Promise((w, q) =>
                P.request({
                  body: { method: "eth_subscribe", params: p },
                  onError(T) {
                    q(T), j == null || j(T);
                  },
                  onResponse(T) {
                    if (T.error) {
                      q(T.error), j == null || j(T.error);
                      return;
                    }
                    if (typeof T.id == "number") {
                      w(T);
                      return;
                    }
                    T.method === "eth_subscription" && y(T.params);
                  },
                }),
              );
            return {
              subscriptionId: S,
              async unsubscribe() {
                return new Promise((w) =>
                  P.request({
                    body: { method: "eth_unsubscribe", params: [S] },
                    onResponse: w,
                  }),
                );
              },
            };
          },
        },
      );
    };
  }
  return iu;
}
var jt = {},
  lg;
function bv() {
  return (
    lg ||
      ((lg = 1),
      Object.defineProperty(jt, "__esModule", { value: !0 }),
      (jt.zeroAddress =
        jt.entryPoint07Address =
        jt.entryPoint06Address =
          void 0),
      (jt.entryPoint06Address = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"),
      (jt.entryPoint07Address = "0x0000000071727De22E5E9d8BAf0edAc6f37da032"),
      (jt.zeroAddress = "0x0000000000000000000000000000000000000000")),
    jt
  );
}
var $n = {},
  mg;
function hv() {
  if (mg) return $n;
  (mg = 1),
    Object.defineProperty($n, "__esModule", { value: !0 }),
    ($n.ProviderRpcError = void 0);
  class e extends Error {
    constructor(n, r) {
      super(r),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "details", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.code = n),
        (this.details = r);
    }
  }
  return ($n.ProviderRpcError = e), $n;
}
var au = {},
  bg;
function gv() {
  if (bg) return au;
  (bg = 1),
    Object.defineProperty(au, "__esModule", { value: !0 }),
    (au.decodeDeployData = r);
  const e = ye(),
    t = Nt(),
    n = "/docs/contract/decodeDeployData";
  function r(i) {
    const { abi: s, bytecode: o, data: a } = i;
    if (a === o) return { bytecode: o };
    const u = s.find((c) => "type" in c && c.type === "constructor");
    if (!u) throw new e.AbiConstructorNotFoundError({ docsPath: n });
    if (!("inputs" in u))
      throw new e.AbiConstructorParamsNotFoundError({ docsPath: n });
    if (!u.inputs || u.inputs.length === 0)
      throw new e.AbiConstructorParamsNotFoundError({ docsPath: n });
    return {
      args: (0, t.decodeAbiParameters)(u.inputs, `0x${a.replace(o, "")}`),
      bytecode: o,
    };
  }
  return au;
}
var su = {},
  hg;
function yv() {
  if (hg) return su;
  (hg = 1),
    Object.defineProperty(su, "__esModule", { value: !0 }),
    (su.compactSignatureToSignature = n);
  const e = le(),
    t = Q();
  function n({ r, yParityAndS: i }) {
    const s = (0, e.hexToBytes)(i),
      o = s[0] & 128 ? 1 : 0,
      a = s;
    return o === 1 && (a[0] &= 127), { r, s: (0, t.bytesToHex)(a), yParity: o };
  }
  return su;
}
var uu = {},
  gg;
function pv() {
  if (gg) return uu;
  (gg = 1),
    Object.defineProperty(uu, "__esModule", { value: !0 }),
    (uu.parseCompactSignature = n);
  const e = Wn(),
    t = Q();
  function n(r) {
    const { r: i, s } = e.secp256k1.Signature.fromCompact(r.slice(2, 130));
    return {
      r: (0, t.numberToHex)(i, { size: 32 }),
      yParityAndS: (0, t.numberToHex)(s, { size: 32 }),
    };
  }
  return uu;
}
var cu = {},
  yg;
function _v() {
  if (yg) return cu;
  (yg = 1),
    Object.defineProperty(cu, "__esModule", { value: !0 }),
    (cu.parseSignature = n);
  const e = Wn(),
    t = Q();
  function n(r) {
    const { r: i, s } = e.secp256k1.Signature.fromCompact(r.slice(2, 130)),
      o = +`0x${r.slice(130)}`,
      [a, u] = (() => {
        if (o === 0 || o === 1) return [void 0, o];
        if (o === 27) return [BigInt(o), 0];
        if (o === 28) return [BigInt(o), 1];
        throw new Error("Invalid yParityOrV value");
      })();
    return typeof a < "u"
      ? {
          r: (0, t.numberToHex)(i, { size: 32 }),
          s: (0, t.numberToHex)(s, { size: 32 }),
          v: a,
          yParity: u,
        }
      : {
          r: (0, t.numberToHex)(i, { size: 32 }),
          s: (0, t.numberToHex)(s, { size: 32 }),
          yParity: u,
        };
  }
  return cu;
}
var du = {},
  pg;
function vv() {
  if (pg) return du;
  (pg = 1),
    Object.defineProperty(du, "__esModule", { value: !0 }),
    (du.recoverTransactionAddress = i);
  const e = Oe(),
    t = Cd(),
    n = Uu(),
    r = Dt();
  async function i(s) {
    const { serializedTransaction: o, signature: a } = s,
      u = (0, t.parseTransaction)(o),
      f = a ?? { r: u.r, s: u.s, v: u.v, yParity: u.yParity },
      c = (0, n.serializeTransaction)({
        ...u,
        r: void 0,
        s: void 0,
        v: void 0,
        yParity: void 0,
        sidecars: void 0,
      });
    return await (0, r.recoverAddress)({
      hash: (0, e.keccak256)(c),
      signature: f,
    });
  }
  return du;
}
var fu = {},
  _g;
function Ev() {
  if (_g) return fu;
  (_g = 1),
    Object.defineProperty(fu, "__esModule", { value: !0 }),
    (fu.signatureToCompactSignature = n);
  const e = le(),
    t = Q();
  function n(r) {
    const { r: i, s, v: o, yParity: a } = r,
      u = Number(a ?? o - 27n);
    let f = s;
    if (u === 1) {
      const c = (0, e.hexToBytes)(s);
      (c[0] |= 128), (f = (0, t.bytesToHex)(c));
    }
    return { r: i, yParityAndS: f };
  }
  return fu;
}
var lu = {},
  vg;
function jv() {
  if (vg) return lu;
  (vg = 1),
    Object.defineProperty(lu, "__esModule", { value: !0 }),
    (lu.serializeCompactSignature = n);
  const e = Wn(),
    t = Pe();
  function n({ r, yParityAndS: i }) {
    return `0x${new e.secp256k1.Signature((0, t.hexToBigInt)(r), (0, t.hexToBigInt)(i)).toCompactHex()}`;
  }
  return lu;
}
var mu = {},
  Eg;
function Pv() {
  if (Eg) return mu;
  (Eg = 1),
    Object.defineProperty(mu, "__esModule", { value: !0 }),
    (mu.sidecarsToVersionedHashes = t);
  const e = od();
  function t(n) {
    const { sidecars: r, version: i } = n,
      s = n.to ?? (typeof r[0].blob == "string" ? "hex" : "bytes"),
      o = [];
    for (const { commitment: a } of r)
      o.push(
        (0, e.commitmentToVersionedHash)({ commitment: a, to: s, version: i }),
      );
    return o;
  }
  return mu;
}
var bu = {},
  jg;
function wv() {
  if (jg) return bu;
  (jg = 1),
    Object.defineProperty(bu, "__esModule", { value: !0 }),
    (bu.fromBlobs = r);
  const e = Dn(),
    t = le(),
    n = Q();
  function r(i) {
    const s = i.to ?? (typeof i.blobs[0] == "string" ? "hex" : "bytes"),
      o =
        typeof i.blobs[0] == "string"
          ? i.blobs.map((d) => (0, t.hexToBytes)(d))
          : i.blobs,
      a = o.reduce((d, l) => d + l.length, 0),
      u = (0, e.createCursor)(new Uint8Array(a));
    let f = !0;
    for (const d of o) {
      const l = (0, e.createCursor)(d);
      for (; f && l.position < d.length; ) {
        l.incrementPosition(1);
        let g = 31;
        d.length - l.position < 31 && (g = d.length - l.position);
        for (const h in Array.from({ length: g })) {
          const b = l.readByte();
          if (b === 128 && !l.inspectBytes(l.remaining).includes(128)) {
            f = !1;
            break;
          }
          u.pushByte(b);
        }
      }
    }
    const c = u.bytes.slice(0, u.position);
    return s === "hex" ? (0, n.bytesToHex)(c) : c;
  }
  return bu;
}
var hu = {},
  Pg;
function op() {
  if (Pg) return hu;
  (Pg = 1),
    Object.defineProperty(hu, "__esModule", { value: !0 }),
    (hu.defineKzg = e);
  function e({ blobToKzgCommitment: t, computeBlobKzgProof: n }) {
    return { blobToKzgCommitment: t, computeBlobKzgProof: n };
  }
  return hu;
}
var gu = {},
  wg;
function Tv() {
  if (wg) return gu;
  (wg = 1),
    Object.defineProperty(gu, "__esModule", { value: !0 }),
    (gu.setupKzg = t);
  const e = op();
  function t(n, r) {
    try {
      n.loadTrustedSetup(r);
    } catch (i) {
      const s = i;
      if (!s.message.includes("trusted setup is already loaded")) throw s;
    }
    return (0, e.defineKzg)(n);
  }
  return gu;
}
var Tg;
function Av() {
  return (
    Tg ||
      ((Tg = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.maxInt40 =
            e.maxInt32 =
            e.maxInt24 =
            e.maxInt16 =
            e.maxInt8 =
            e.weiUnits =
            e.gweiUnits =
            e.etherUnits =
            e.universalSignatureValidatorByteCode =
            e.deploylessCallViaFactoryBytecode =
            e.deploylessCallViaBytecodeBytecode =
            e.zeroAddress =
            e.universalSignatureValidatorAbi =
            e.erc4626Abi =
            e.erc721Abi =
            e.erc20Abi_bytes32 =
            e.erc20Abi =
            e.multicall3Abi =
            e.webSocket =
            e.createWalletClient =
            e.createTransport =
            e.walletActions =
            e.testActions =
            e.publicActions =
            e.createTestClient =
            e.createPublicClient =
            e.http =
            e.fallback =
            e.custom =
            e.rpcSchema =
            e.createClient =
            e.getContract =
            e.parseAbiParameters =
            e.parseAbiParameter =
            e.parseAbiItem =
            e.parseAbi =
            e.UnknownSignatureError =
            e.UnknownTypeError =
            e.SolidityProtectedKeywordError =
            e.InvalidStructSignatureError =
            e.InvalidSignatureError =
            e.InvalidParenthesisError =
            e.InvalidParameterError =
            e.InvalidModifierError =
            e.InvalidFunctionModifierError =
            e.InvalidAbiTypeParameterError =
            e.InvalidAbiItemError =
            e.InvalidAbiParametersError =
            e.InvalidAbiParameterError =
            e.CircularReferenceError =
              void 0),
          (e.maxUint184 =
            e.maxUint176 =
            e.maxUint168 =
            e.maxUint160 =
            e.maxUint152 =
            e.maxUint144 =
            e.maxUint136 =
            e.maxUint128 =
            e.maxUint120 =
            e.maxUint112 =
            e.maxUint104 =
            e.maxUint96 =
            e.maxUint88 =
            e.maxUint80 =
            e.maxUint72 =
            e.maxUint64 =
            e.maxUint56 =
            e.maxUint48 =
            e.maxUint40 =
            e.maxUint32 =
            e.maxUint24 =
            e.maxUint16 =
            e.maxUint8 =
            e.maxInt256 =
            e.maxInt248 =
            e.maxInt240 =
            e.maxInt232 =
            e.maxInt224 =
            e.maxInt216 =
            e.maxInt208 =
            e.maxInt200 =
            e.maxInt192 =
            e.maxInt184 =
            e.maxInt176 =
            e.maxInt168 =
            e.maxInt160 =
            e.maxInt152 =
            e.maxInt144 =
            e.maxInt136 =
            e.maxInt128 =
            e.maxInt120 =
            e.maxInt112 =
            e.maxInt104 =
            e.maxInt96 =
            e.maxInt88 =
            e.maxInt80 =
            e.maxInt72 =
            e.maxInt64 =
            e.maxInt56 =
            e.maxInt48 =
              void 0),
          (e.AbiEncodingLengthMismatchError =
            e.AbiEncodingArrayLengthMismatchError =
            e.AbiDecodingZeroDataError =
            e.AbiDecodingDataSizeTooSmallError =
            e.AbiDecodingDataSizeInvalidError =
            e.AbiConstructorParamsNotFoundError =
            e.AbiConstructorNotFoundError =
            e.presignMessagePrefix =
            e.zeroHash =
            e.minInt256 =
            e.minInt248 =
            e.minInt240 =
            e.minInt232 =
            e.minInt224 =
            e.minInt216 =
            e.minInt208 =
            e.minInt200 =
            e.minInt192 =
            e.minInt184 =
            e.minInt176 =
            e.minInt168 =
            e.minInt160 =
            e.minInt152 =
            e.minInt144 =
            e.minInt136 =
            e.minInt128 =
            e.minInt120 =
            e.minInt112 =
            e.minInt104 =
            e.minInt96 =
            e.minInt88 =
            e.minInt80 =
            e.minInt72 =
            e.minInt64 =
            e.minInt56 =
            e.minInt48 =
            e.minInt40 =
            e.minInt32 =
            e.minInt24 =
            e.minInt16 =
            e.minInt8 =
            e.maxUint256 =
            e.maxUint248 =
            e.maxUint240 =
            e.maxUint232 =
            e.maxUint224 =
            e.maxUint216 =
            e.maxUint208 =
            e.maxUint200 =
            e.maxUint192 =
              void 0),
          (e.UnsupportedProviderMethodError =
            e.UnknownRpcError =
            e.UnauthorizedProviderError =
            e.TransactionRejectedRpcError =
            e.SwitchChainError =
            e.RpcError =
            e.ResourceUnavailableRpcError =
            e.ResourceNotFoundRpcError =
            e.ProviderRpcError =
            e.ProviderDisconnectedError =
            e.ParseRpcError =
            e.MethodNotSupportedRpcError =
            e.MethodNotFoundRpcError =
            e.LimitExceededRpcError =
            e.JsonRpcVersionUnsupportedError =
            e.InvalidRequestRpcError =
            e.InvalidParamsRpcError =
            e.InvalidInputRpcError =
            e.InternalRpcError =
            e.ChainDisconnectedError =
            e.MaxFeePerGasTooLowError =
            e.Eip1559FeesNotSupportedError =
            e.BaseFeeScalarError =
            e.CounterfactualDeploymentFailedError =
            e.RawContractError =
            e.ContractFunctionZeroDataError =
            e.ContractFunctionRevertedError =
            e.ContractFunctionExecutionError =
            e.CallExecutionError =
            e.BlockNotFoundError =
            e.setErrorConfig =
            e.BaseError =
            e.UnsupportedPackedAbiType =
            e.InvalidDefinitionTypeError =
            e.InvalidArrayError =
            e.InvalidAbiEncodingTypeError =
            e.InvalidAbiDecodingTypeError =
            e.DecodeLogTopicsMismatch =
            e.DecodeLogDataMismatch =
            e.BytesSizeMismatchError =
            e.AbiFunctionSignatureNotFoundError =
            e.AbiFunctionOutputsNotFoundError =
            e.AbiFunctionNotFoundError =
            e.AbiEventSignatureNotFoundError =
            e.AbiEventSignatureEmptyTopicsError =
            e.AbiEventNotFoundError =
            e.AbiErrorSignatureNotFoundError =
            e.AbiErrorNotFoundError =
            e.AbiErrorInputsNotFoundError =
            e.AbiEncodingBytesSizeMismatchError =
              void 0),
          (e.StateAssignmentConflictError =
            e.AccountStateConflictError =
            e.UrlRequiredError =
            e.SliceOffsetOutOfBoundsError =
            e.SizeExceedsPaddingSizeError =
            e.WaitForTransactionReceiptTimeoutError =
            e.TransactionReceiptNotFoundError =
            e.TransactionNotFoundError =
            e.TransactionExecutionError =
            e.InvalidStorageKeySizeError =
            e.InvalidSerializedTransactionTypeError =
            e.InvalidSerializedTransactionError =
            e.InvalidSerializableTransactionError =
            e.InvalidLegacyVError =
            e.FeeConflictError =
            e.InvalidAddressError =
            e.WebSocketRequestError =
            e.SocketClosedError =
            e.TimeoutError =
            e.RpcRequestError =
            e.HttpRequestError =
            e.FilterTypeNotSupportedError =
            e.UnknownNodeError =
            e.TransactionTypeNotSupportedError =
            e.TipAboveFeeCapError =
            e.NonceTooLowError =
            e.NonceTooHighError =
            e.NonceMaxValueError =
            e.IntrinsicGasTooLowError =
            e.IntrinsicGasTooHighError =
            e.InsufficientFundsError =
            e.FeeCapTooLowError =
            e.FeeCapTooHighError =
            e.ExecutionRevertedError =
            e.EstimateGasExecutionError =
            e.InvalidDecimalNumberError =
            e.EnsAvatarUnsupportedNamespaceError =
            e.EnsAvatarInvalidNftUriError =
            e.EnsAvatarUriResolutionError =
            e.SizeOverflowError =
            e.InvalidHexValueError =
            e.InvalidHexBooleanError =
            e.IntegerOutOfRangeError =
            e.InvalidBytesBooleanError =
            e.InvalidChainIdError =
            e.ClientChainNotConfiguredError =
            e.ChainNotFoundError =
            e.ChainMismatchError =
            e.ChainDoesNotSupportContract =
            e.UserRejectedRequestError =
              void 0),
          (e.recoverTypedDataAddress =
            e.recoverTransactionAddress =
            e.recoverPublicKey =
            e.recoverMessageAddress =
            e.recoverAddress =
            e.parseSignature =
            e.hexToSignature =
            e.parseCompactSignature =
            e.hexToCompactSignature =
            e.compactSignatureToSignature =
            e.hashTypedData =
            e.hashStruct =
            e.hashDomain =
            e.getTransactionType =
            e.getSerializedTransactionType =
            e.getCreateAddress =
            e.getCreate2Address =
            e.getContractAddress =
            e.getAbiItem =
            e.rpcTransactionType =
            e.formatTransactionRequest =
            e.defineTransactionRequest =
            e.formatTransactionReceipt =
            e.defineTransactionReceipt =
            e.transactionType =
            e.formatTransaction =
            e.defineTransaction =
            e.parseEventLogs =
            e.encodeFunctionResult =
            e.prepareEncodeFunctionData =
            e.encodeFunctionData =
            e.encodeEventTopics =
            e.encodeErrorResult =
            e.encodeDeployData =
            e.encodeAbiParameters =
            e.decodeFunctionResult =
            e.decodeFunctionData =
            e.decodeEventLog =
            e.decodeErrorResult =
            e.decodeDeployData =
            e.decodeAbiParameters =
            e.formatLog =
            e.formatBlock =
            e.defineBlock =
            e.namehash =
            e.labelhash =
            e.EIP1193ProviderRpcError =
            e.InvalidStructTypeError =
            e.InvalidPrimaryTypeError =
            e.InvalidDomainError =
              void 0),
          (e.concatBytes =
            e.concat =
            e.setupKzg =
            e.defineKzg =
            e.toBlobs =
            e.toBlobSidecars =
            e.fromBlobs =
            e.blobsToProofs =
            e.sidecarsToVersionedHashes =
            e.commitmentsToVersionedHashes =
            e.commitmentToVersionedHash =
            e.blobsToCommitments =
            e.offchainLookupSignature =
            e.offchainLookupAbiItem =
            e.offchainLookup =
            e.ccipFetch =
            e.ccipRequest =
            e.fromBytes =
            e.bytesToString =
            e.bytesToNumber =
            e.bytesToBool =
            e.bytesToBigInt =
            e.toHex =
            e.stringToHex =
            e.numberToHex =
            e.bytesToHex =
            e.boolToHex =
            e.toBytes =
            e.stringToBytes =
            e.numberToBytes =
            e.hexToBytes =
            e.boolToBytes =
            e.assertTransactionLegacy =
            e.assertTransactionEIP2930 =
            e.assertTransactionEIP1559 =
            e.assertRequest =
            e.serializeErc6492Signature =
            e.isErc6492Signature =
            e.parseErc6492Signature =
            e.verifyTypedData =
            e.verifyMessage =
            e.verifyHash =
            e.toRlp =
            e.hexToRlp =
            e.bytesToRlp =
            e.serializeSignature =
            e.signatureToHex =
            e.serializeCompactSignature =
            e.compactSignatureToHex =
            e.signatureToCompactSignature =
              void 0),
          (e.size =
            e.serializeTransaction =
            e.serializeAccessList =
            e.parseUnits =
            e.parseTransaction =
            e.parseGwei =
            e.parseEther =
            e.padHex =
            e.padBytes =
            e.pad =
            e.ripemd160 =
            e.sha256 =
            e.keccak256 =
            e.isHex =
            e.isHash =
            e.isBytes =
            e.isAddressEqual =
            e.isAddress =
            e.toPrefixedMessage =
            e.hashMessage =
            e.toFunctionHash =
            e.toEventHash =
            e.getFunctionSignature =
            e.toFunctionSignature =
            e.getEventSignature =
            e.toEventSignature =
            e.getFunctionSelector =
            e.toFunctionSelector =
            e.getEventSelector =
            e.toEventSelector =
            e.getContractError =
            e.getAddress =
            e.checksumAddress =
            e.fromRlp =
            e.hexToString =
            e.hexToNumber =
            e.hexToBool =
            e.hexToBigInt =
            e.fromHex =
            e.formatUnits =
            e.formatGwei =
            e.formatEther =
            e.withTimeout =
            e.withRetry =
            e.encodePacked =
            e.getChainContractAddress =
            e.extractChain =
            e.defineChain =
            e.assertCurrentChain =
            e.concatHex =
              void 0),
          (e.nonceManager =
            e.createNonceManager =
            e.getTypesForEIP712Domain =
            e.domainSeparator =
            e.validateTypedData =
            e.serializeTypedData =
            e.trim =
            e.stringify =
            e.sliceHex =
            e.sliceBytes =
            e.slice =
              void 0);
        var t = Eu();
        Object.defineProperty(e, "CircularReferenceError", {
          enumerable: !0,
          get: function () {
            return t.CircularReferenceError;
          },
        }),
          Object.defineProperty(e, "InvalidAbiParameterError", {
            enumerable: !0,
            get: function () {
              return t.InvalidAbiParameterError;
            },
          }),
          Object.defineProperty(e, "InvalidAbiParametersError", {
            enumerable: !0,
            get: function () {
              return t.InvalidAbiParametersError;
            },
          }),
          Object.defineProperty(e, "InvalidAbiItemError", {
            enumerable: !0,
            get: function () {
              return t.InvalidAbiItemError;
            },
          }),
          Object.defineProperty(e, "InvalidAbiTypeParameterError", {
            enumerable: !0,
            get: function () {
              return t.InvalidAbiTypeParameterError;
            },
          }),
          Object.defineProperty(e, "InvalidFunctionModifierError", {
            enumerable: !0,
            get: function () {
              return t.InvalidFunctionModifierError;
            },
          }),
          Object.defineProperty(e, "InvalidModifierError", {
            enumerable: !0,
            get: function () {
              return t.InvalidModifierError;
            },
          }),
          Object.defineProperty(e, "InvalidParameterError", {
            enumerable: !0,
            get: function () {
              return t.InvalidParameterError;
            },
          }),
          Object.defineProperty(e, "InvalidParenthesisError", {
            enumerable: !0,
            get: function () {
              return t.InvalidParenthesisError;
            },
          }),
          Object.defineProperty(e, "InvalidSignatureError", {
            enumerable: !0,
            get: function () {
              return t.InvalidSignatureError;
            },
          }),
          Object.defineProperty(e, "InvalidStructSignatureError", {
            enumerable: !0,
            get: function () {
              return t.InvalidStructSignatureError;
            },
          }),
          Object.defineProperty(e, "SolidityProtectedKeywordError", {
            enumerable: !0,
            get: function () {
              return t.SolidityProtectedKeywordError;
            },
          }),
          Object.defineProperty(e, "UnknownTypeError", {
            enumerable: !0,
            get: function () {
              return t.UnknownTypeError;
            },
          }),
          Object.defineProperty(e, "UnknownSignatureError", {
            enumerable: !0,
            get: function () {
              return t.UnknownSignatureError;
            },
          }),
          Object.defineProperty(e, "parseAbi", {
            enumerable: !0,
            get: function () {
              return t.parseAbi;
            },
          }),
          Object.defineProperty(e, "parseAbiItem", {
            enumerable: !0,
            get: function () {
              return t.parseAbiItem;
            },
          }),
          Object.defineProperty(e, "parseAbiParameter", {
            enumerable: !0,
            get: function () {
              return t.parseAbiParameter;
            },
          }),
          Object.defineProperty(e, "parseAbiParameters", {
            enumerable: !0,
            get: function () {
              return t.parseAbiParameters;
            },
          });
        var n = q1();
        Object.defineProperty(e, "getContract", {
          enumerable: !0,
          get: function () {
            return n.getContract;
          },
        });
        var r = $u();
        Object.defineProperty(e, "createClient", {
          enumerable: !0,
          get: function () {
            return r.createClient;
          },
        }),
          Object.defineProperty(e, "rpcSchema", {
            enumerable: !0,
            get: function () {
              return r.rpcSchema;
            },
          });
        var i = M1();
        Object.defineProperty(e, "custom", {
          enumerable: !0,
          get: function () {
            return i.custom;
          },
        });
        var s = F1();
        Object.defineProperty(e, "fallback", {
          enumerable: !0,
          get: function () {
            return s.fallback;
          },
        });
        var o = H1();
        Object.defineProperty(e, "http", {
          enumerable: !0,
          get: function () {
            return o.http;
          },
        });
        var a = P_();
        Object.defineProperty(e, "createPublicClient", {
          enumerable: !0,
          get: function () {
            return a.createPublicClient;
          },
        });
        var u = ev();
        Object.defineProperty(e, "createTestClient", {
          enumerable: !0,
          get: function () {
            return u.createTestClient;
          },
        });
        var f = tp();
        Object.defineProperty(e, "publicActions", {
          enumerable: !0,
          get: function () {
            return f.publicActions;
          },
        });
        var c = rp();
        Object.defineProperty(e, "testActions", {
          enumerable: !0,
          get: function () {
            return c.testActions;
          },
        });
        var d = np();
        Object.defineProperty(e, "walletActions", {
          enumerable: !0,
          get: function () {
            return d.walletActions;
          },
        });
        var l = so();
        Object.defineProperty(e, "createTransport", {
          enumerable: !0,
          get: function () {
            return l.createTransport;
          },
        });
        var g = lv();
        Object.defineProperty(e, "createWalletClient", {
          enumerable: !0,
          get: function () {
            return g.createWalletClient;
          },
        });
        var h = mv();
        Object.defineProperty(e, "webSocket", {
          enumerable: !0,
          get: function () {
            return h.webSocket;
          },
        });
        var b = hr();
        Object.defineProperty(e, "multicall3Abi", {
          enumerable: !0,
          get: function () {
            return b.multicall3Abi;
          },
        }),
          Object.defineProperty(e, "erc20Abi", {
            enumerable: !0,
            get: function () {
              return b.erc20Abi;
            },
          }),
          Object.defineProperty(e, "erc20Abi_bytes32", {
            enumerable: !0,
            get: function () {
              return b.erc20Abi_bytes32;
            },
          }),
          Object.defineProperty(e, "erc721Abi", {
            enumerable: !0,
            get: function () {
              return b.erc721Abi;
            },
          }),
          Object.defineProperty(e, "erc4626Abi", {
            enumerable: !0,
            get: function () {
              return b.erc4626Abi;
            },
          }),
          Object.defineProperty(e, "universalSignatureValidatorAbi", {
            enumerable: !0,
            get: function () {
              return b.universalSignatureValidatorAbi;
            },
          });
        var v = bv();
        Object.defineProperty(e, "zeroAddress", {
          enumerable: !0,
          get: function () {
            return v.zeroAddress;
          },
        });
        var _ = cd();
        Object.defineProperty(e, "deploylessCallViaBytecodeBytecode", {
          enumerable: !0,
          get: function () {
            return _.deploylessCallViaBytecodeBytecode;
          },
        }),
          Object.defineProperty(e, "deploylessCallViaFactoryBytecode", {
            enumerable: !0,
            get: function () {
              return _.deploylessCallViaFactoryBytecode;
            },
          }),
          Object.defineProperty(e, "universalSignatureValidatorByteCode", {
            enumerable: !0,
            get: function () {
              return _.universalSignatureValidatorByteCode;
            },
          });
        var E = Un();
        Object.defineProperty(e, "etherUnits", {
          enumerable: !0,
          get: function () {
            return E.etherUnits;
          },
        }),
          Object.defineProperty(e, "gweiUnits", {
            enumerable: !0,
            get: function () {
              return E.gweiUnits;
            },
          }),
          Object.defineProperty(e, "weiUnits", {
            enumerable: !0,
            get: function () {
              return E.weiUnits;
            },
          });
        var m = Qc();
        Object.defineProperty(e, "maxInt8", {
          enumerable: !0,
          get: function () {
            return m.maxInt8;
          },
        }),
          Object.defineProperty(e, "maxInt16", {
            enumerable: !0,
            get: function () {
              return m.maxInt16;
            },
          }),
          Object.defineProperty(e, "maxInt24", {
            enumerable: !0,
            get: function () {
              return m.maxInt24;
            },
          }),
          Object.defineProperty(e, "maxInt32", {
            enumerable: !0,
            get: function () {
              return m.maxInt32;
            },
          }),
          Object.defineProperty(e, "maxInt40", {
            enumerable: !0,
            get: function () {
              return m.maxInt40;
            },
          }),
          Object.defineProperty(e, "maxInt48", {
            enumerable: !0,
            get: function () {
              return m.maxInt48;
            },
          }),
          Object.defineProperty(e, "maxInt56", {
            enumerable: !0,
            get: function () {
              return m.maxInt56;
            },
          }),
          Object.defineProperty(e, "maxInt64", {
            enumerable: !0,
            get: function () {
              return m.maxInt64;
            },
          }),
          Object.defineProperty(e, "maxInt72", {
            enumerable: !0,
            get: function () {
              return m.maxInt72;
            },
          }),
          Object.defineProperty(e, "maxInt80", {
            enumerable: !0,
            get: function () {
              return m.maxInt80;
            },
          }),
          Object.defineProperty(e, "maxInt88", {
            enumerable: !0,
            get: function () {
              return m.maxInt88;
            },
          }),
          Object.defineProperty(e, "maxInt96", {
            enumerable: !0,
            get: function () {
              return m.maxInt96;
            },
          }),
          Object.defineProperty(e, "maxInt104", {
            enumerable: !0,
            get: function () {
              return m.maxInt104;
            },
          }),
          Object.defineProperty(e, "maxInt112", {
            enumerable: !0,
            get: function () {
              return m.maxInt112;
            },
          }),
          Object.defineProperty(e, "maxInt120", {
            enumerable: !0,
            get: function () {
              return m.maxInt120;
            },
          }),
          Object.defineProperty(e, "maxInt128", {
            enumerable: !0,
            get: function () {
              return m.maxInt128;
            },
          }),
          Object.defineProperty(e, "maxInt136", {
            enumerable: !0,
            get: function () {
              return m.maxInt136;
            },
          }),
          Object.defineProperty(e, "maxInt144", {
            enumerable: !0,
            get: function () {
              return m.maxInt144;
            },
          }),
          Object.defineProperty(e, "maxInt152", {
            enumerable: !0,
            get: function () {
              return m.maxInt152;
            },
          }),
          Object.defineProperty(e, "maxInt160", {
            enumerable: !0,
            get: function () {
              return m.maxInt160;
            },
          }),
          Object.defineProperty(e, "maxInt168", {
            enumerable: !0,
            get: function () {
              return m.maxInt168;
            },
          }),
          Object.defineProperty(e, "maxInt176", {
            enumerable: !0,
            get: function () {
              return m.maxInt176;
            },
          }),
          Object.defineProperty(e, "maxInt184", {
            enumerable: !0,
            get: function () {
              return m.maxInt184;
            },
          }),
          Object.defineProperty(e, "maxInt192", {
            enumerable: !0,
            get: function () {
              return m.maxInt192;
            },
          }),
          Object.defineProperty(e, "maxInt200", {
            enumerable: !0,
            get: function () {
              return m.maxInt200;
            },
          }),
          Object.defineProperty(e, "maxInt208", {
            enumerable: !0,
            get: function () {
              return m.maxInt208;
            },
          }),
          Object.defineProperty(e, "maxInt216", {
            enumerable: !0,
            get: function () {
              return m.maxInt216;
            },
          }),
          Object.defineProperty(e, "maxInt224", {
            enumerable: !0,
            get: function () {
              return m.maxInt224;
            },
          }),
          Object.defineProperty(e, "maxInt232", {
            enumerable: !0,
            get: function () {
              return m.maxInt232;
            },
          }),
          Object.defineProperty(e, "maxInt240", {
            enumerable: !0,
            get: function () {
              return m.maxInt240;
            },
          }),
          Object.defineProperty(e, "maxInt248", {
            enumerable: !0,
            get: function () {
              return m.maxInt248;
            },
          }),
          Object.defineProperty(e, "maxInt256", {
            enumerable: !0,
            get: function () {
              return m.maxInt256;
            },
          }),
          Object.defineProperty(e, "maxUint8", {
            enumerable: !0,
            get: function () {
              return m.maxUint8;
            },
          }),
          Object.defineProperty(e, "maxUint16", {
            enumerable: !0,
            get: function () {
              return m.maxUint16;
            },
          }),
          Object.defineProperty(e, "maxUint24", {
            enumerable: !0,
            get: function () {
              return m.maxUint24;
            },
          }),
          Object.defineProperty(e, "maxUint32", {
            enumerable: !0,
            get: function () {
              return m.maxUint32;
            },
          }),
          Object.defineProperty(e, "maxUint40", {
            enumerable: !0,
            get: function () {
              return m.maxUint40;
            },
          }),
          Object.defineProperty(e, "maxUint48", {
            enumerable: !0,
            get: function () {
              return m.maxUint48;
            },
          }),
          Object.defineProperty(e, "maxUint56", {
            enumerable: !0,
            get: function () {
              return m.maxUint56;
            },
          }),
          Object.defineProperty(e, "maxUint64", {
            enumerable: !0,
            get: function () {
              return m.maxUint64;
            },
          }),
          Object.defineProperty(e, "maxUint72", {
            enumerable: !0,
            get: function () {
              return m.maxUint72;
            },
          }),
          Object.defineProperty(e, "maxUint80", {
            enumerable: !0,
            get: function () {
              return m.maxUint80;
            },
          }),
          Object.defineProperty(e, "maxUint88", {
            enumerable: !0,
            get: function () {
              return m.maxUint88;
            },
          }),
          Object.defineProperty(e, "maxUint96", {
            enumerable: !0,
            get: function () {
              return m.maxUint96;
            },
          }),
          Object.defineProperty(e, "maxUint104", {
            enumerable: !0,
            get: function () {
              return m.maxUint104;
            },
          }),
          Object.defineProperty(e, "maxUint112", {
            enumerable: !0,
            get: function () {
              return m.maxUint112;
            },
          }),
          Object.defineProperty(e, "maxUint120", {
            enumerable: !0,
            get: function () {
              return m.maxUint120;
            },
          }),
          Object.defineProperty(e, "maxUint128", {
            enumerable: !0,
            get: function () {
              return m.maxUint128;
            },
          }),
          Object.defineProperty(e, "maxUint136", {
            enumerable: !0,
            get: function () {
              return m.maxUint136;
            },
          }),
          Object.defineProperty(e, "maxUint144", {
            enumerable: !0,
            get: function () {
              return m.maxUint144;
            },
          }),
          Object.defineProperty(e, "maxUint152", {
            enumerable: !0,
            get: function () {
              return m.maxUint152;
            },
          }),
          Object.defineProperty(e, "maxUint160", {
            enumerable: !0,
            get: function () {
              return m.maxUint160;
            },
          }),
          Object.defineProperty(e, "maxUint168", {
            enumerable: !0,
            get: function () {
              return m.maxUint168;
            },
          }),
          Object.defineProperty(e, "maxUint176", {
            enumerable: !0,
            get: function () {
              return m.maxUint176;
            },
          }),
          Object.defineProperty(e, "maxUint184", {
            enumerable: !0,
            get: function () {
              return m.maxUint184;
            },
          }),
          Object.defineProperty(e, "maxUint192", {
            enumerable: !0,
            get: function () {
              return m.maxUint192;
            },
          }),
          Object.defineProperty(e, "maxUint200", {
            enumerable: !0,
            get: function () {
              return m.maxUint200;
            },
          }),
          Object.defineProperty(e, "maxUint208", {
            enumerable: !0,
            get: function () {
              return m.maxUint208;
            },
          }),
          Object.defineProperty(e, "maxUint216", {
            enumerable: !0,
            get: function () {
              return m.maxUint216;
            },
          }),
          Object.defineProperty(e, "maxUint224", {
            enumerable: !0,
            get: function () {
              return m.maxUint224;
            },
          }),
          Object.defineProperty(e, "maxUint232", {
            enumerable: !0,
            get: function () {
              return m.maxUint232;
            },
          }),
          Object.defineProperty(e, "maxUint240", {
            enumerable: !0,
            get: function () {
              return m.maxUint240;
            },
          }),
          Object.defineProperty(e, "maxUint248", {
            enumerable: !0,
            get: function () {
              return m.maxUint248;
            },
          }),
          Object.defineProperty(e, "maxUint256", {
            enumerable: !0,
            get: function () {
              return m.maxUint256;
            },
          }),
          Object.defineProperty(e, "minInt8", {
            enumerable: !0,
            get: function () {
              return m.minInt8;
            },
          }),
          Object.defineProperty(e, "minInt16", {
            enumerable: !0,
            get: function () {
              return m.minInt16;
            },
          }),
          Object.defineProperty(e, "minInt24", {
            enumerable: !0,
            get: function () {
              return m.minInt24;
            },
          }),
          Object.defineProperty(e, "minInt32", {
            enumerable: !0,
            get: function () {
              return m.minInt32;
            },
          }),
          Object.defineProperty(e, "minInt40", {
            enumerable: !0,
            get: function () {
              return m.minInt40;
            },
          }),
          Object.defineProperty(e, "minInt48", {
            enumerable: !0,
            get: function () {
              return m.minInt48;
            },
          }),
          Object.defineProperty(e, "minInt56", {
            enumerable: !0,
            get: function () {
              return m.minInt56;
            },
          }),
          Object.defineProperty(e, "minInt64", {
            enumerable: !0,
            get: function () {
              return m.minInt64;
            },
          }),
          Object.defineProperty(e, "minInt72", {
            enumerable: !0,
            get: function () {
              return m.minInt72;
            },
          }),
          Object.defineProperty(e, "minInt80", {
            enumerable: !0,
            get: function () {
              return m.minInt80;
            },
          }),
          Object.defineProperty(e, "minInt88", {
            enumerable: !0,
            get: function () {
              return m.minInt88;
            },
          }),
          Object.defineProperty(e, "minInt96", {
            enumerable: !0,
            get: function () {
              return m.minInt96;
            },
          }),
          Object.defineProperty(e, "minInt104", {
            enumerable: !0,
            get: function () {
              return m.minInt104;
            },
          }),
          Object.defineProperty(e, "minInt112", {
            enumerable: !0,
            get: function () {
              return m.minInt112;
            },
          }),
          Object.defineProperty(e, "minInt120", {
            enumerable: !0,
            get: function () {
              return m.minInt120;
            },
          }),
          Object.defineProperty(e, "minInt128", {
            enumerable: !0,
            get: function () {
              return m.minInt128;
            },
          }),
          Object.defineProperty(e, "minInt136", {
            enumerable: !0,
            get: function () {
              return m.minInt136;
            },
          }),
          Object.defineProperty(e, "minInt144", {
            enumerable: !0,
            get: function () {
              return m.minInt144;
            },
          }),
          Object.defineProperty(e, "minInt152", {
            enumerable: !0,
            get: function () {
              return m.minInt152;
            },
          }),
          Object.defineProperty(e, "minInt160", {
            enumerable: !0,
            get: function () {
              return m.minInt160;
            },
          }),
          Object.defineProperty(e, "minInt168", {
            enumerable: !0,
            get: function () {
              return m.minInt168;
            },
          }),
          Object.defineProperty(e, "minInt176", {
            enumerable: !0,
            get: function () {
              return m.minInt176;
            },
          }),
          Object.defineProperty(e, "minInt184", {
            enumerable: !0,
            get: function () {
              return m.minInt184;
            },
          }),
          Object.defineProperty(e, "minInt192", {
            enumerable: !0,
            get: function () {
              return m.minInt192;
            },
          }),
          Object.defineProperty(e, "minInt200", {
            enumerable: !0,
            get: function () {
              return m.minInt200;
            },
          }),
          Object.defineProperty(e, "minInt208", {
            enumerable: !0,
            get: function () {
              return m.minInt208;
            },
          }),
          Object.defineProperty(e, "minInt216", {
            enumerable: !0,
            get: function () {
              return m.minInt216;
            },
          }),
          Object.defineProperty(e, "minInt224", {
            enumerable: !0,
            get: function () {
              return m.minInt224;
            },
          }),
          Object.defineProperty(e, "minInt232", {
            enumerable: !0,
            get: function () {
              return m.minInt232;
            },
          }),
          Object.defineProperty(e, "minInt240", {
            enumerable: !0,
            get: function () {
              return m.minInt240;
            },
          }),
          Object.defineProperty(e, "minInt248", {
            enumerable: !0,
            get: function () {
              return m.minInt248;
            },
          }),
          Object.defineProperty(e, "minInt256", {
            enumerable: !0,
            get: function () {
              return m.minInt256;
            },
          });
        var p = Rd();
        Object.defineProperty(e, "zeroHash", {
          enumerable: !0,
          get: function () {
            return p.zeroHash;
          },
        });
        var y = Fy();
        Object.defineProperty(e, "presignMessagePrefix", {
          enumerable: !0,
          get: function () {
            return y.presignMessagePrefix;
          },
        });
        var j = ye();
        Object.defineProperty(e, "AbiConstructorNotFoundError", {
          enumerable: !0,
          get: function () {
            return j.AbiConstructorNotFoundError;
          },
        }),
          Object.defineProperty(e, "AbiConstructorParamsNotFoundError", {
            enumerable: !0,
            get: function () {
              return j.AbiConstructorParamsNotFoundError;
            },
          }),
          Object.defineProperty(e, "AbiDecodingDataSizeInvalidError", {
            enumerable: !0,
            get: function () {
              return j.AbiDecodingDataSizeInvalidError;
            },
          }),
          Object.defineProperty(e, "AbiDecodingDataSizeTooSmallError", {
            enumerable: !0,
            get: function () {
              return j.AbiDecodingDataSizeTooSmallError;
            },
          }),
          Object.defineProperty(e, "AbiDecodingZeroDataError", {
            enumerable: !0,
            get: function () {
              return j.AbiDecodingZeroDataError;
            },
          }),
          Object.defineProperty(e, "AbiEncodingArrayLengthMismatchError", {
            enumerable: !0,
            get: function () {
              return j.AbiEncodingArrayLengthMismatchError;
            },
          }),
          Object.defineProperty(e, "AbiEncodingLengthMismatchError", {
            enumerable: !0,
            get: function () {
              return j.AbiEncodingLengthMismatchError;
            },
          }),
          Object.defineProperty(e, "AbiEncodingBytesSizeMismatchError", {
            enumerable: !0,
            get: function () {
              return j.AbiEncodingBytesSizeMismatchError;
            },
          }),
          Object.defineProperty(e, "AbiErrorInputsNotFoundError", {
            enumerable: !0,
            get: function () {
              return j.AbiErrorInputsNotFoundError;
            },
          }),
          Object.defineProperty(e, "AbiErrorNotFoundError", {
            enumerable: !0,
            get: function () {
              return j.AbiErrorNotFoundError;
            },
          }),
          Object.defineProperty(e, "AbiErrorSignatureNotFoundError", {
            enumerable: !0,
            get: function () {
              return j.AbiErrorSignatureNotFoundError;
            },
          }),
          Object.defineProperty(e, "AbiEventNotFoundError", {
            enumerable: !0,
            get: function () {
              return j.AbiEventNotFoundError;
            },
          }),
          Object.defineProperty(e, "AbiEventSignatureEmptyTopicsError", {
            enumerable: !0,
            get: function () {
              return j.AbiEventSignatureEmptyTopicsError;
            },
          }),
          Object.defineProperty(e, "AbiEventSignatureNotFoundError", {
            enumerable: !0,
            get: function () {
              return j.AbiEventSignatureNotFoundError;
            },
          }),
          Object.defineProperty(e, "AbiFunctionNotFoundError", {
            enumerable: !0,
            get: function () {
              return j.AbiFunctionNotFoundError;
            },
          }),
          Object.defineProperty(e, "AbiFunctionOutputsNotFoundError", {
            enumerable: !0,
            get: function () {
              return j.AbiFunctionOutputsNotFoundError;
            },
          }),
          Object.defineProperty(e, "AbiFunctionSignatureNotFoundError", {
            enumerable: !0,
            get: function () {
              return j.AbiFunctionSignatureNotFoundError;
            },
          }),
          Object.defineProperty(e, "BytesSizeMismatchError", {
            enumerable: !0,
            get: function () {
              return j.BytesSizeMismatchError;
            },
          }),
          Object.defineProperty(e, "DecodeLogDataMismatch", {
            enumerable: !0,
            get: function () {
              return j.DecodeLogDataMismatch;
            },
          }),
          Object.defineProperty(e, "DecodeLogTopicsMismatch", {
            enumerable: !0,
            get: function () {
              return j.DecodeLogTopicsMismatch;
            },
          }),
          Object.defineProperty(e, "InvalidAbiDecodingTypeError", {
            enumerable: !0,
            get: function () {
              return j.InvalidAbiDecodingTypeError;
            },
          }),
          Object.defineProperty(e, "InvalidAbiEncodingTypeError", {
            enumerable: !0,
            get: function () {
              return j.InvalidAbiEncodingTypeError;
            },
          }),
          Object.defineProperty(e, "InvalidArrayError", {
            enumerable: !0,
            get: function () {
              return j.InvalidArrayError;
            },
          }),
          Object.defineProperty(e, "InvalidDefinitionTypeError", {
            enumerable: !0,
            get: function () {
              return j.InvalidDefinitionTypeError;
            },
          }),
          Object.defineProperty(e, "UnsupportedPackedAbiType", {
            enumerable: !0,
            get: function () {
              return j.UnsupportedPackedAbiType;
            },
          });
        var P = oe();
        Object.defineProperty(e, "BaseError", {
          enumerable: !0,
          get: function () {
            return P.BaseError;
          },
        }),
          Object.defineProperty(e, "setErrorConfig", {
            enumerable: !0,
            get: function () {
              return P.setErrorConfig;
            },
          });
        var S = ed();
        Object.defineProperty(e, "BlockNotFoundError", {
          enumerable: !0,
          get: function () {
            return S.BlockNotFoundError;
          },
        });
        var w = zt();
        Object.defineProperty(e, "CallExecutionError", {
          enumerable: !0,
          get: function () {
            return w.CallExecutionError;
          },
        }),
          Object.defineProperty(e, "ContractFunctionExecutionError", {
            enumerable: !0,
            get: function () {
              return w.ContractFunctionExecutionError;
            },
          }),
          Object.defineProperty(e, "ContractFunctionRevertedError", {
            enumerable: !0,
            get: function () {
              return w.ContractFunctionRevertedError;
            },
          }),
          Object.defineProperty(e, "ContractFunctionZeroDataError", {
            enumerable: !0,
            get: function () {
              return w.ContractFunctionZeroDataError;
            },
          }),
          Object.defineProperty(e, "RawContractError", {
            enumerable: !0,
            get: function () {
              return w.RawContractError;
            },
          }),
          Object.defineProperty(e, "CounterfactualDeploymentFailedError", {
            enumerable: !0,
            get: function () {
              return w.CounterfactualDeploymentFailedError;
            },
          });
        var q = Ru();
        Object.defineProperty(e, "BaseFeeScalarError", {
          enumerable: !0,
          get: function () {
            return q.BaseFeeScalarError;
          },
        }),
          Object.defineProperty(e, "Eip1559FeesNotSupportedError", {
            enumerable: !0,
            get: function () {
              return q.Eip1559FeesNotSupportedError;
            },
          }),
          Object.defineProperty(e, "MaxFeePerGasTooLowError", {
            enumerable: !0,
            get: function () {
              return q.MaxFeePerGasTooLowError;
            },
          });
        var T = br();
        Object.defineProperty(e, "ChainDisconnectedError", {
          enumerable: !0,
          get: function () {
            return T.ChainDisconnectedError;
          },
        }),
          Object.defineProperty(e, "InternalRpcError", {
            enumerable: !0,
            get: function () {
              return T.InternalRpcError;
            },
          }),
          Object.defineProperty(e, "InvalidInputRpcError", {
            enumerable: !0,
            get: function () {
              return T.InvalidInputRpcError;
            },
          }),
          Object.defineProperty(e, "InvalidParamsRpcError", {
            enumerable: !0,
            get: function () {
              return T.InvalidParamsRpcError;
            },
          }),
          Object.defineProperty(e, "InvalidRequestRpcError", {
            enumerable: !0,
            get: function () {
              return T.InvalidRequestRpcError;
            },
          }),
          Object.defineProperty(e, "JsonRpcVersionUnsupportedError", {
            enumerable: !0,
            get: function () {
              return T.JsonRpcVersionUnsupportedError;
            },
          }),
          Object.defineProperty(e, "LimitExceededRpcError", {
            enumerable: !0,
            get: function () {
              return T.LimitExceededRpcError;
            },
          }),
          Object.defineProperty(e, "MethodNotFoundRpcError", {
            enumerable: !0,
            get: function () {
              return T.MethodNotFoundRpcError;
            },
          }),
          Object.defineProperty(e, "MethodNotSupportedRpcError", {
            enumerable: !0,
            get: function () {
              return T.MethodNotSupportedRpcError;
            },
          }),
          Object.defineProperty(e, "ParseRpcError", {
            enumerable: !0,
            get: function () {
              return T.ParseRpcError;
            },
          }),
          Object.defineProperty(e, "ProviderDisconnectedError", {
            enumerable: !0,
            get: function () {
              return T.ProviderDisconnectedError;
            },
          }),
          Object.defineProperty(e, "ProviderRpcError", {
            enumerable: !0,
            get: function () {
              return T.ProviderRpcError;
            },
          }),
          Object.defineProperty(e, "ResourceNotFoundRpcError", {
            enumerable: !0,
            get: function () {
              return T.ResourceNotFoundRpcError;
            },
          }),
          Object.defineProperty(e, "ResourceUnavailableRpcError", {
            enumerable: !0,
            get: function () {
              return T.ResourceUnavailableRpcError;
            },
          }),
          Object.defineProperty(e, "RpcError", {
            enumerable: !0,
            get: function () {
              return T.RpcError;
            },
          }),
          Object.defineProperty(e, "SwitchChainError", {
            enumerable: !0,
            get: function () {
              return T.SwitchChainError;
            },
          }),
          Object.defineProperty(e, "TransactionRejectedRpcError", {
            enumerable: !0,
            get: function () {
              return T.TransactionRejectedRpcError;
            },
          }),
          Object.defineProperty(e, "UnauthorizedProviderError", {
            enumerable: !0,
            get: function () {
              return T.UnauthorizedProviderError;
            },
          }),
          Object.defineProperty(e, "UnknownRpcError", {
            enumerable: !0,
            get: function () {
              return T.UnknownRpcError;
            },
          }),
          Object.defineProperty(e, "UnsupportedProviderMethodError", {
            enumerable: !0,
            get: function () {
              return T.UnsupportedProviderMethodError;
            },
          }),
          Object.defineProperty(e, "UserRejectedRequestError", {
            enumerable: !0,
            get: function () {
              return T.UserRejectedRequestError;
            },
          });
        var B = to();
        Object.defineProperty(e, "ChainDoesNotSupportContract", {
          enumerable: !0,
          get: function () {
            return B.ChainDoesNotSupportContract;
          },
        }),
          Object.defineProperty(e, "ChainMismatchError", {
            enumerable: !0,
            get: function () {
              return B.ChainMismatchError;
            },
          }),
          Object.defineProperty(e, "ChainNotFoundError", {
            enumerable: !0,
            get: function () {
              return B.ChainNotFoundError;
            },
          }),
          Object.defineProperty(e, "ClientChainNotConfiguredError", {
            enumerable: !0,
            get: function () {
              return B.ClientChainNotConfiguredError;
            },
          }),
          Object.defineProperty(e, "InvalidChainIdError", {
            enumerable: !0,
            get: function () {
              return B.InvalidChainIdError;
            },
          });
        var M = xr();
        Object.defineProperty(e, "InvalidBytesBooleanError", {
          enumerable: !0,
          get: function () {
            return M.InvalidBytesBooleanError;
          },
        }),
          Object.defineProperty(e, "IntegerOutOfRangeError", {
            enumerable: !0,
            get: function () {
              return M.IntegerOutOfRangeError;
            },
          }),
          Object.defineProperty(e, "InvalidHexBooleanError", {
            enumerable: !0,
            get: function () {
              return M.InvalidHexBooleanError;
            },
          }),
          Object.defineProperty(e, "InvalidHexValueError", {
            enumerable: !0,
            get: function () {
              return M.InvalidHexValueError;
            },
          }),
          Object.defineProperty(e, "SizeOverflowError", {
            enumerable: !0,
            get: function () {
              return M.SizeOverflowError;
            },
          });
        var A = yy();
        Object.defineProperty(e, "EnsAvatarUriResolutionError", {
          enumerable: !0,
          get: function () {
            return A.EnsAvatarUriResolutionError;
          },
        }),
          Object.defineProperty(e, "EnsAvatarInvalidNftUriError", {
            enumerable: !0,
            get: function () {
              return A.EnsAvatarInvalidNftUriError;
            },
          }),
          Object.defineProperty(e, "EnsAvatarUnsupportedNamespaceError", {
            enumerable: !0,
            get: function () {
              return A.EnsAvatarUnsupportedNamespaceError;
            },
          });
        var x = Ly();
        Object.defineProperty(e, "InvalidDecimalNumberError", {
          enumerable: !0,
          get: function () {
            return x.InvalidDecimalNumberError;
          },
        });
        var $ = Yg();
        Object.defineProperty(e, "EstimateGasExecutionError", {
          enumerable: !0,
          get: function () {
            return $.EstimateGasExecutionError;
          },
        });
        var F = Ut();
        Object.defineProperty(e, "ExecutionRevertedError", {
          enumerable: !0,
          get: function () {
            return F.ExecutionRevertedError;
          },
        }),
          Object.defineProperty(e, "FeeCapTooHighError", {
            enumerable: !0,
            get: function () {
              return F.FeeCapTooHighError;
            },
          }),
          Object.defineProperty(e, "FeeCapTooLowError", {
            enumerable: !0,
            get: function () {
              return F.FeeCapTooLowError;
            },
          }),
          Object.defineProperty(e, "InsufficientFundsError", {
            enumerable: !0,
            get: function () {
              return F.InsufficientFundsError;
            },
          }),
          Object.defineProperty(e, "IntrinsicGasTooHighError", {
            enumerable: !0,
            get: function () {
              return F.IntrinsicGasTooHighError;
            },
          }),
          Object.defineProperty(e, "IntrinsicGasTooLowError", {
            enumerable: !0,
            get: function () {
              return F.IntrinsicGasTooLowError;
            },
          }),
          Object.defineProperty(e, "NonceMaxValueError", {
            enumerable: !0,
            get: function () {
              return F.NonceMaxValueError;
            },
          }),
          Object.defineProperty(e, "NonceTooHighError", {
            enumerable: !0,
            get: function () {
              return F.NonceTooHighError;
            },
          }),
          Object.defineProperty(e, "NonceTooLowError", {
            enumerable: !0,
            get: function () {
              return F.NonceTooLowError;
            },
          }),
          Object.defineProperty(e, "TipAboveFeeCapError", {
            enumerable: !0,
            get: function () {
              return F.TipAboveFeeCapError;
            },
          }),
          Object.defineProperty(e, "TransactionTypeNotSupportedError", {
            enumerable: !0,
            get: function () {
              return F.TransactionTypeNotSupportedError;
            },
          }),
          Object.defineProperty(e, "UnknownNodeError", {
            enumerable: !0,
            get: function () {
              return F.UnknownNodeError;
            },
          });
        var H = Ug();
        Object.defineProperty(e, "FilterTypeNotSupportedError", {
          enumerable: !0,
          get: function () {
            return H.FilterTypeNotSupportedError;
          },
        });
        var R = Qe();
        Object.defineProperty(e, "HttpRequestError", {
          enumerable: !0,
          get: function () {
            return R.HttpRequestError;
          },
        }),
          Object.defineProperty(e, "RpcRequestError", {
            enumerable: !0,
            get: function () {
              return R.RpcRequestError;
            },
          }),
          Object.defineProperty(e, "TimeoutError", {
            enumerable: !0,
            get: function () {
              return R.TimeoutError;
            },
          }),
          Object.defineProperty(e, "SocketClosedError", {
            enumerable: !0,
            get: function () {
              return R.SocketClosedError;
            },
          }),
          Object.defineProperty(e, "WebSocketRequestError", {
            enumerable: !0,
            get: function () {
              return R.WebSocketRequestError;
            },
          });
        var O = Ze();
        Object.defineProperty(e, "InvalidAddressError", {
          enumerable: !0,
          get: function () {
            return O.InvalidAddressError;
          },
        });
        var I = He();
        Object.defineProperty(e, "FeeConflictError", {
          enumerable: !0,
          get: function () {
            return I.FeeConflictError;
          },
        }),
          Object.defineProperty(e, "InvalidLegacyVError", {
            enumerable: !0,
            get: function () {
              return I.InvalidLegacyVError;
            },
          }),
          Object.defineProperty(e, "InvalidSerializableTransactionError", {
            enumerable: !0,
            get: function () {
              return I.InvalidSerializableTransactionError;
            },
          }),
          Object.defineProperty(e, "InvalidSerializedTransactionError", {
            enumerable: !0,
            get: function () {
              return I.InvalidSerializedTransactionError;
            },
          }),
          Object.defineProperty(e, "InvalidSerializedTransactionTypeError", {
            enumerable: !0,
            get: function () {
              return I.InvalidSerializedTransactionTypeError;
            },
          }),
          Object.defineProperty(e, "InvalidStorageKeySizeError", {
            enumerable: !0,
            get: function () {
              return I.InvalidStorageKeySizeError;
            },
          }),
          Object.defineProperty(e, "TransactionExecutionError", {
            enumerable: !0,
            get: function () {
              return I.TransactionExecutionError;
            },
          }),
          Object.defineProperty(e, "TransactionNotFoundError", {
            enumerable: !0,
            get: function () {
              return I.TransactionNotFoundError;
            },
          }),
          Object.defineProperty(e, "TransactionReceiptNotFoundError", {
            enumerable: !0,
            get: function () {
              return I.TransactionReceiptNotFoundError;
            },
          }),
          Object.defineProperty(e, "WaitForTransactionReceiptTimeoutError", {
            enumerable: !0,
            get: function () {
              return I.WaitForTransactionReceiptTimeoutError;
            },
          });
        var C = ju();
        Object.defineProperty(e, "SizeExceedsPaddingSizeError", {
          enumerable: !0,
          get: function () {
            return C.SizeExceedsPaddingSizeError;
          },
        }),
          Object.defineProperty(e, "SliceOffsetOutOfBoundsError", {
            enumerable: !0,
            get: function () {
              return C.SliceOffsetOutOfBoundsError;
            },
          });
        var k = yd();
        Object.defineProperty(e, "UrlRequiredError", {
          enumerable: !0,
          get: function () {
            return k.UrlRequiredError;
          },
        });
        var z = Kc();
        Object.defineProperty(e, "AccountStateConflictError", {
          enumerable: !0,
          get: function () {
            return z.AccountStateConflictError;
          },
        }),
          Object.defineProperty(e, "StateAssignmentConflictError", {
            enumerable: !0,
            get: function () {
              return z.StateAssignmentConflictError;
            },
          });
        var U = Ty();
        Object.defineProperty(e, "InvalidDomainError", {
          enumerable: !0,
          get: function () {
            return U.InvalidDomainError;
          },
        }),
          Object.defineProperty(e, "InvalidPrimaryTypeError", {
            enumerable: !0,
            get: function () {
              return U.InvalidPrimaryTypeError;
            },
          }),
          Object.defineProperty(e, "InvalidStructTypeError", {
            enumerable: !0,
            get: function () {
              return U.InvalidStructTypeError;
            },
          });
        var L = hv();
        Object.defineProperty(e, "EIP1193ProviderRpcError", {
          enumerable: !0,
          get: function () {
            return L.ProviderRpcError;
          },
        });
        var V = gy();
        Object.defineProperty(e, "labelhash", {
          enumerable: !0,
          get: function () {
            return V.labelhash;
          },
        });
        var G = Ed();
        Object.defineProperty(e, "namehash", {
          enumerable: !0,
          get: function () {
            return G.namehash;
          },
        });
        var Z = Ou();
        Object.defineProperty(e, "defineBlock", {
          enumerable: !0,
          get: function () {
            return Z.defineBlock;
          },
        }),
          Object.defineProperty(e, "formatBlock", {
            enumerable: !0,
            get: function () {
              return Z.formatBlock;
            },
          });
        var ee = It();
        Object.defineProperty(e, "formatLog", {
          enumerable: !0,
          get: function () {
            return ee.formatLog;
          },
        });
        var J = Nt();
        Object.defineProperty(e, "decodeAbiParameters", {
          enumerable: !0,
          get: function () {
            return J.decodeAbiParameters;
          },
        });
        var ae = gv();
        Object.defineProperty(e, "decodeDeployData", {
          enumerable: !0,
          get: function () {
            return ae.decodeDeployData;
          },
        });
        var K = Au();
        Object.defineProperty(e, "decodeErrorResult", {
          enumerable: !0,
          get: function () {
            return K.decodeErrorResult;
          },
        });
        var X = Qn();
        Object.defineProperty(e, "decodeEventLog", {
          enumerable: !0,
          get: function () {
            return X.decodeEventLog;
          },
        });
        var Y = Ay();
        Object.defineProperty(e, "decodeFunctionData", {
          enumerable: !0,
          get: function () {
            return Y.decodeFunctionData;
          },
        });
        var W = Rt();
        Object.defineProperty(e, "decodeFunctionResult", {
          enumerable: !0,
          get: function () {
            return W.decodeFunctionResult;
          },
        });
        var D = Ye();
        Object.defineProperty(e, "encodeAbiParameters", {
          enumerable: !0,
          get: function () {
            return D.encodeAbiParameters;
          },
        });
        var se = ro();
        Object.defineProperty(e, "encodeDeployData", {
          enumerable: !0,
          get: function () {
            return se.encodeDeployData;
          },
        });
        var pe = Sy();
        Object.defineProperty(e, "encodeErrorResult", {
          enumerable: !0,
          get: function () {
            return pe.encodeErrorResult;
          },
        });
        var ce = lr();
        Object.defineProperty(e, "encodeEventTopics", {
          enumerable: !0,
          get: function () {
            return ce.encodeEventTopics;
          },
        });
        var he = Xe();
        Object.defineProperty(e, "encodeFunctionData", {
          enumerable: !0,
          get: function () {
            return he.encodeFunctionData;
          },
        });
        var ve = Gg();
        Object.defineProperty(e, "prepareEncodeFunctionData", {
          enumerable: !0,
          get: function () {
            return ve.prepareEncodeFunctionData;
          },
        });
        var _e = Iy();
        Object.defineProperty(e, "encodeFunctionResult", {
          enumerable: !0,
          get: function () {
            return _e.encodeFunctionResult;
          },
        });
        var $e = eo();
        Object.defineProperty(e, "parseEventLogs", {
          enumerable: !0,
          get: function () {
            return $e.parseEventLogs;
          },
        });
        var je = Yn();
        Object.defineProperty(e, "defineTransaction", {
          enumerable: !0,
          get: function () {
            return je.defineTransaction;
          },
        }),
          Object.defineProperty(e, "formatTransaction", {
            enumerable: !0,
            get: function () {
              return je.formatTransaction;
            },
          }),
          Object.defineProperty(e, "transactionType", {
            enumerable: !0,
            get: function () {
              return je.transactionType;
            },
          });
        var Ne = wd();
        Object.defineProperty(e, "defineTransactionReceipt", {
          enumerable: !0,
          get: function () {
            return Ne.defineTransactionReceipt;
          },
        }),
          Object.defineProperty(e, "formatTransactionReceipt", {
            enumerable: !0,
            get: function () {
              return Ne.formatTransactionReceipt;
            },
          });
        var we = Tt();
        Object.defineProperty(e, "defineTransactionRequest", {
          enumerable: !0,
          get: function () {
            return we.defineTransactionRequest;
          },
        }),
          Object.defineProperty(e, "formatTransactionRequest", {
            enumerable: !0,
            get: function () {
              return we.formatTransactionRequest;
            },
          }),
          Object.defineProperty(e, "rpcTransactionType", {
            enumerable: !0,
            get: function () {
              return we.rpcTransactionType;
            },
          });
        var ze = wt();
        Object.defineProperty(e, "getAbiItem", {
          enumerable: !0,
          get: function () {
            return ze.getAbiItem;
          },
        });
        var et = Oy();
        Object.defineProperty(e, "getContractAddress", {
          enumerable: !0,
          get: function () {
            return et.getContractAddress;
          },
        }),
          Object.defineProperty(e, "getCreate2Address", {
            enumerable: !0,
            get: function () {
              return et.getCreate2Address;
            },
          }),
          Object.defineProperty(e, "getCreateAddress", {
            enumerable: !0,
            get: function () {
              return et.getCreateAddress;
            },
          });
        var tt = Bd();
        Object.defineProperty(e, "getSerializedTransactionType", {
          enumerable: !0,
          get: function () {
            return tt.getSerializedTransactionType;
          },
        });
        var Le = xu();
        Object.defineProperty(e, "getTransactionType", {
          enumerable: !0,
          get: function () {
            return Le.getTransactionType;
          },
        });
        var De = uo();
        Object.defineProperty(e, "hashDomain", {
          enumerable: !0,
          get: function () {
            return De.hashDomain;
          },
        }),
          Object.defineProperty(e, "hashStruct", {
            enumerable: !0,
            get: function () {
              return De.hashStruct;
            },
          }),
          Object.defineProperty(e, "hashTypedData", {
            enumerable: !0,
            get: function () {
              return De.hashTypedData;
            },
          });
        var nt = yv();
        Object.defineProperty(e, "compactSignatureToSignature", {
          enumerable: !0,
          get: function () {
            return nt.compactSignatureToSignature;
          },
        });
        var Ue = pv();
        Object.defineProperty(e, "hexToCompactSignature", {
          enumerable: !0,
          get: function () {
            return Ue.parseCompactSignature;
          },
        }),
          Object.defineProperty(e, "parseCompactSignature", {
            enumerable: !0,
            get: function () {
              return Ue.parseCompactSignature;
            },
          });
        var fo = _v();
        Object.defineProperty(e, "hexToSignature", {
          enumerable: !0,
          get: function () {
            return fo.parseSignature;
          },
        }),
          Object.defineProperty(e, "parseSignature", {
            enumerable: !0,
            get: function () {
              return fo.parseSignature;
            },
          });
        var Wu = Dt();
        Object.defineProperty(e, "recoverAddress", {
          enumerable: !0,
          get: function () {
            return Wu.recoverAddress;
          },
        });
        var lo = Sd();
        Object.defineProperty(e, "recoverMessageAddress", {
          enumerable: !0,
          get: function () {
            return lo.recoverMessageAddress;
          },
        });
        var Ku = Yc();
        Object.defineProperty(e, "recoverPublicKey", {
          enumerable: !0,
          get: function () {
            return Ku.recoverPublicKey;
          },
        });
        var Zu = vv();
        Object.defineProperty(e, "recoverTransactionAddress", {
          enumerable: !0,
          get: function () {
            return Zu.recoverTransactionAddress;
          },
        });
        var Ju = Id();
        Object.defineProperty(e, "recoverTypedDataAddress", {
          enumerable: !0,
          get: function () {
            return Ju.recoverTypedDataAddress;
          },
        });
        var Yu = Ev();
        Object.defineProperty(e, "signatureToCompactSignature", {
          enumerable: !0,
          get: function () {
            return Yu.signatureToCompactSignature;
          },
        });
        var mo = jv();
        Object.defineProperty(e, "compactSignatureToHex", {
          enumerable: !0,
          get: function () {
            return mo.serializeCompactSignature;
          },
        }),
          Object.defineProperty(e, "serializeCompactSignature", {
            enumerable: !0,
            get: function () {
              return mo.serializeCompactSignature;
            },
          });
        var bo = Qy();
        Object.defineProperty(e, "signatureToHex", {
          enumerable: !0,
          get: function () {
            return bo.serializeSignature;
          },
        }),
          Object.defineProperty(e, "serializeSignature", {
            enumerable: !0,
            get: function () {
              return bo.serializeSignature;
            },
          });
        var $r = Kn();
        Object.defineProperty(e, "bytesToRlp", {
          enumerable: !0,
          get: function () {
            return $r.bytesToRlp;
          },
        }),
          Object.defineProperty(e, "hexToRlp", {
            enumerable: !0,
            get: function () {
              return $r.hexToRlp;
            },
          }),
          Object.defineProperty(e, "toRlp", {
            enumerable: !0,
            get: function () {
              return $r.toRlp;
            },
          });
        var Xu = ky();
        Object.defineProperty(e, "verifyHash", {
          enumerable: !0,
          get: function () {
            return Xu.verifyHash;
          },
        });
        var Qu = $y();
        Object.defineProperty(e, "verifyMessage", {
          enumerable: !0,
          get: function () {
            return Qu.verifyMessage;
          },
        });
        var ec = Ny();
        Object.defineProperty(e, "verifyTypedData", {
          enumerable: !0,
          get: function () {
            return ec.verifyTypedData;
          },
        });
        var tc = zy();
        Object.defineProperty(e, "parseErc6492Signature", {
          enumerable: !0,
          get: function () {
            return tc.parseErc6492Signature;
          },
        });
        var rc = Lu();
        Object.defineProperty(e, "isErc6492Signature", {
          enumerable: !0,
          get: function () {
            return rc.isErc6492Signature;
          },
        });
        var nc = Od();
        Object.defineProperty(e, "serializeErc6492Signature", {
          enumerable: !0,
          get: function () {
            return nc.serializeErc6492Signature;
          },
        });
        var oc = At();
        Object.defineProperty(e, "assertRequest", {
          enumerable: !0,
          get: function () {
            return oc.assertRequest;
          },
        });
        var Vt = Du();
        Object.defineProperty(e, "assertTransactionEIP1559", {
          enumerable: !0,
          get: function () {
            return Vt.assertTransactionEIP1559;
          },
        }),
          Object.defineProperty(e, "assertTransactionEIP2930", {
            enumerable: !0,
            get: function () {
              return Vt.assertTransactionEIP2930;
            },
          }),
          Object.defineProperty(e, "assertTransactionLegacy", {
            enumerable: !0,
            get: function () {
              return Vt.assertTransactionLegacy;
            },
          });
        var Wt = le();
        Object.defineProperty(e, "boolToBytes", {
          enumerable: !0,
          get: function () {
            return Wt.boolToBytes;
          },
        }),
          Object.defineProperty(e, "hexToBytes", {
            enumerable: !0,
            get: function () {
              return Wt.hexToBytes;
            },
          }),
          Object.defineProperty(e, "numberToBytes", {
            enumerable: !0,
            get: function () {
              return Wt.numberToBytes;
            },
          }),
          Object.defineProperty(e, "stringToBytes", {
            enumerable: !0,
            get: function () {
              return Wt.stringToBytes;
            },
          }),
          Object.defineProperty(e, "toBytes", {
            enumerable: !0,
            get: function () {
              return Wt.toBytes;
            },
          });
        var Kt = Q();
        Object.defineProperty(e, "boolToHex", {
          enumerable: !0,
          get: function () {
            return Kt.boolToHex;
          },
        }),
          Object.defineProperty(e, "bytesToHex", {
            enumerable: !0,
            get: function () {
              return Kt.bytesToHex;
            },
          }),
          Object.defineProperty(e, "numberToHex", {
            enumerable: !0,
            get: function () {
              return Kt.numberToHex;
            },
          }),
          Object.defineProperty(e, "stringToHex", {
            enumerable: !0,
            get: function () {
              return Kt.stringToHex;
            },
          }),
          Object.defineProperty(e, "toHex", {
            enumerable: !0,
            get: function () {
              return Kt.toHex;
            },
          });
        var Zt = Wc();
        Object.defineProperty(e, "bytesToBigInt", {
          enumerable: !0,
          get: function () {
            return Zt.bytesToBigInt;
          },
        }),
          Object.defineProperty(e, "bytesToBool", {
            enumerable: !0,
            get: function () {
              return Zt.bytesToBool;
            },
          }),
          Object.defineProperty(e, "bytesToNumber", {
            enumerable: !0,
            get: function () {
              return Zt.bytesToNumber;
            },
          }),
          Object.defineProperty(e, "bytesToString", {
            enumerable: !0,
            get: function () {
              return Zt.bytesToString;
            },
          }),
          Object.defineProperty(e, "fromBytes", {
            enumerable: !0,
            get: function () {
              return Zt.fromBytes;
            },
          });
        var Jt = ld();
        Object.defineProperty(e, "ccipRequest", {
          enumerable: !0,
          get: function () {
            return Jt.ccipRequest;
          },
        }),
          Object.defineProperty(e, "ccipFetch", {
            enumerable: !0,
            get: function () {
              return Jt.ccipRequest;
            },
          }),
          Object.defineProperty(e, "offchainLookup", {
            enumerable: !0,
            get: function () {
              return Jt.offchainLookup;
            },
          }),
          Object.defineProperty(e, "offchainLookupAbiItem", {
            enumerable: !0,
            get: function () {
              return Jt.offchainLookupAbiItem;
            },
          }),
          Object.defineProperty(e, "offchainLookupSignature", {
            enumerable: !0,
            get: function () {
              return Jt.offchainLookupSignature;
            },
          });
        var ic = Bu();
        Object.defineProperty(e, "blobsToCommitments", {
          enumerable: !0,
          get: function () {
            return ic.blobsToCommitments;
          },
        });
        var ac = od();
        Object.defineProperty(e, "commitmentToVersionedHash", {
          enumerable: !0,
          get: function () {
            return ac.commitmentToVersionedHash;
          },
        });
        var sc = id();
        Object.defineProperty(e, "commitmentsToVersionedHashes", {
          enumerable: !0,
          get: function () {
            return sc.commitmentsToVersionedHashes;
          },
        });
        var uc = Pv();
        Object.defineProperty(e, "sidecarsToVersionedHashes", {
          enumerable: !0,
          get: function () {
            return uc.sidecarsToVersionedHashes;
          },
        });
        var cc = Cu();
        Object.defineProperty(e, "blobsToProofs", {
          enumerable: !0,
          get: function () {
            return cc.blobsToProofs;
          },
        });
        var ho = wv();
        Object.defineProperty(e, "fromBlobs", {
          enumerable: !0,
          get: function () {
            return ho.fromBlobs;
          },
        });
        var up = qu();
        Object.defineProperty(e, "toBlobSidecars", {
          enumerable: !0,
          get: function () {
            return up.toBlobSidecars;
          },
        });
        var cp = oy();
        Object.defineProperty(e, "toBlobs", {
          enumerable: !0,
          get: function () {
            return cp.toBlobs;
          },
        });
        var dp = op();
        Object.defineProperty(e, "defineKzg", {
          enumerable: !0,
          get: function () {
            return dp.defineKzg;
          },
        });
        var fp = Tv();
        Object.defineProperty(e, "setupKzg", {
          enumerable: !0,
          get: function () {
            return fp.setupKzg;
          },
        });
        var dc = Be();
        Object.defineProperty(e, "concat", {
          enumerable: !0,
          get: function () {
            return dc.concat;
          },
        }),
          Object.defineProperty(e, "concatBytes", {
            enumerable: !0,
            get: function () {
              return dc.concatBytes;
            },
          }),
          Object.defineProperty(e, "concatHex", {
            enumerable: !0,
            get: function () {
              return dc.concatHex;
            },
          });
        var lp = ku();
        Object.defineProperty(e, "assertCurrentChain", {
          enumerable: !0,
          get: function () {
            return lp.assertCurrentChain;
          },
        });
        var mp = Ey();
        Object.defineProperty(e, "defineChain", {
          enumerable: !0,
          get: function () {
            return mp.defineChain;
          },
        });
        var bp = jy();
        Object.defineProperty(e, "extractChain", {
          enumerable: !0,
          get: function () {
            return bp.extractChain;
          },
        });
        var hp = Gt();
        Object.defineProperty(e, "getChainContractAddress", {
          enumerable: !0,
          get: function () {
            return hp.getChainContractAddress;
          },
        });
        var gp = Ry();
        Object.defineProperty(e, "encodePacked", {
          enumerable: !0,
          get: function () {
            return gp.encodePacked;
          },
        });
        var yp = gd();
        Object.defineProperty(e, "withRetry", {
          enumerable: !0,
          get: function () {
            return yp.withRetry;
          },
        });
        var pp = pd();
        Object.defineProperty(e, "withTimeout", {
          enumerable: !0,
          get: function () {
            return pp.withTimeout;
          },
        });
        var _p = Gn();
        Object.defineProperty(e, "formatEther", {
          enumerable: !0,
          get: function () {
            return _p.formatEther;
          },
        });
        var vp = mr();
        Object.defineProperty(e, "formatGwei", {
          enumerable: !0,
          get: function () {
            return vp.formatGwei;
          },
        });
        var Ep = Su();
        Object.defineProperty(e, "formatUnits", {
          enumerable: !0,
          get: function () {
            return Ep.formatUnits;
          },
        });
        var Nr = Pe();
        Object.defineProperty(e, "fromHex", {
          enumerable: !0,
          get: function () {
            return Nr.fromHex;
          },
        }),
          Object.defineProperty(e, "hexToBigInt", {
            enumerable: !0,
            get: function () {
              return Nr.hexToBigInt;
            },
          }),
          Object.defineProperty(e, "hexToBool", {
            enumerable: !0,
            get: function () {
              return Nr.hexToBool;
            },
          }),
          Object.defineProperty(e, "hexToNumber", {
            enumerable: !0,
            get: function () {
              return Nr.hexToNumber;
            },
          }),
          Object.defineProperty(e, "hexToString", {
            enumerable: !0,
            get: function () {
              return Nr.hexToString;
            },
          });
        var jp = Td();
        Object.defineProperty(e, "fromRlp", {
          enumerable: !0,
          get: function () {
            return jp.fromRlp;
          },
        });
        var Fd = ke();
        Object.defineProperty(e, "checksumAddress", {
          enumerable: !0,
          get: function () {
            return Fd.checksumAddress;
          },
        }),
          Object.defineProperty(e, "getAddress", {
            enumerable: !0,
            get: function () {
              return Fd.getAddress;
            },
          });
        var Pp = Lt();
        Object.defineProperty(e, "getContractError", {
          enumerable: !0,
          get: function () {
            return Pp.getContractError;
          },
        });
        var Hd = Mr();
        Object.defineProperty(e, "toEventSelector", {
          enumerable: !0,
          get: function () {
            return Hd.toEventSelector;
          },
        }),
          Object.defineProperty(e, "getEventSelector", {
            enumerable: !0,
            get: function () {
              return Hd.toEventSelector;
            },
          });
        var kd = fr();
        Object.defineProperty(e, "toFunctionSelector", {
          enumerable: !0,
          get: function () {
            return kd.toFunctionSelector;
          },
        }),
          Object.defineProperty(e, "getFunctionSelector", {
            enumerable: !0,
            get: function () {
              return kd.toFunctionSelector;
            },
          });
        var $d = By();
        Object.defineProperty(e, "toEventSignature", {
          enumerable: !0,
          get: function () {
            return $d.toEventSignature;
          },
        }),
          Object.defineProperty(e, "getEventSignature", {
            enumerable: !0,
            get: function () {
              return $d.toEventSignature;
            },
          });
        var Nd = Cy();
        Object.defineProperty(e, "toFunctionSignature", {
          enumerable: !0,
          get: function () {
            return Nd.toFunctionSignature;
          },
        }),
          Object.defineProperty(e, "getFunctionSignature", {
            enumerable: !0,
            get: function () {
              return Nd.toFunctionSignature;
            },
          });
        var wp = qy();
        Object.defineProperty(e, "toEventHash", {
          enumerable: !0,
          get: function () {
            return wp.toEventHash;
          },
        });
        var Tp = xy();
        Object.defineProperty(e, "toFunctionHash", {
          enumerable: !0,
          get: function () {
            return Tp.toFunctionHash;
          },
        });
        var Ap = co();
        Object.defineProperty(e, "hashMessage", {
          enumerable: !0,
          get: function () {
            return Ap.hashMessage;
          },
        });
        var Sp = Hy();
        Object.defineProperty(e, "toPrefixedMessage", {
          enumerable: !0,
          get: function () {
            return Sp.toPrefixedMessage;
          },
        });
        var Ip = Fe();
        Object.defineProperty(e, "isAddress", {
          enumerable: !0,
          get: function () {
            return Ip.isAddress;
          },
        });
        var Rp = St();
        Object.defineProperty(e, "isAddressEqual", {
          enumerable: !0,
          get: function () {
            return Rp.isAddressEqual;
          },
        });
        var Op = Pd();
        Object.defineProperty(e, "isBytes", {
          enumerable: !0,
          get: function () {
            return Op.isBytes;
          },
        });
        var Bp = Ad();
        Object.defineProperty(e, "isHash", {
          enumerable: !0,
          get: function () {
            return Bp.isHash;
          },
        });
        var Cp = Re();
        Object.defineProperty(e, "isHex", {
          enumerable: !0,
          get: function () {
            return Cp.isHex;
          },
        });
        var qp = Oe();
        Object.defineProperty(e, "keccak256", {
          enumerable: !0,
          get: function () {
            return qp.keccak256;
          },
        });
        var xp = nd();
        Object.defineProperty(e, "sha256", {
          enumerable: !0,
          get: function () {
            return xp.sha256;
          },
        });
        var Mp = My();
        Object.defineProperty(e, "ripemd160", {
          enumerable: !0,
          get: function () {
            return Mp.ripemd160;
          },
        });
        var fc = kt();
        Object.defineProperty(e, "pad", {
          enumerable: !0,
          get: function () {
            return fc.pad;
          },
        }),
          Object.defineProperty(e, "padBytes", {
            enumerable: !0,
            get: function () {
              return fc.padBytes;
            },
          }),
          Object.defineProperty(e, "padHex", {
            enumerable: !0,
            get: function () {
              return fc.padHex;
            },
          });
        var Fp = Dy();
        Object.defineProperty(e, "parseEther", {
          enumerable: !0,
          get: function () {
            return Fp.parseEther;
          },
        });
        var Hp = Uy();
        Object.defineProperty(e, "parseGwei", {
          enumerable: !0,
          get: function () {
            return Hp.parseGwei;
          },
        });
        var kp = Cd();
        Object.defineProperty(e, "parseTransaction", {
          enumerable: !0,
          get: function () {
            return kp.parseTransaction;
          },
        });
        var $p = Gu();
        Object.defineProperty(e, "parseUnits", {
          enumerable: !0,
          get: function () {
            return $p.parseUnits;
          },
        });
        var Np = qd();
        Object.defineProperty(e, "serializeAccessList", {
          enumerable: !0,
          get: function () {
            return Np.serializeAccessList;
          },
        });
        var zp = Uu();
        Object.defineProperty(e, "serializeTransaction", {
          enumerable: !0,
          get: function () {
            return zp.serializeTransaction;
          },
        });
        var Lp = Me();
        Object.defineProperty(e, "size", {
          enumerable: !0,
          get: function () {
            return Lp.size;
          },
        });
        var lc = Je();
        Object.defineProperty(e, "slice", {
          enumerable: !0,
          get: function () {
            return lc.slice;
          },
        }),
          Object.defineProperty(e, "sliceBytes", {
            enumerable: !0,
            get: function () {
              return lc.sliceBytes;
            },
          }),
          Object.defineProperty(e, "sliceHex", {
            enumerable: !0,
            get: function () {
              return lc.sliceHex;
            },
          });
        var Dp = Se();
        Object.defineProperty(e, "stringify", {
          enumerable: !0,
          get: function () {
            return Dp.stringify;
          },
        });
        var Up = $t();
        Object.defineProperty(e, "trim", {
          enumerable: !0,
          get: function () {
            return Up.trim;
          },
        });
        var go = zu();
        Object.defineProperty(e, "serializeTypedData", {
          enumerable: !0,
          get: function () {
            return go.serializeTypedData;
          },
        }),
          Object.defineProperty(e, "validateTypedData", {
            enumerable: !0,
            get: function () {
              return go.validateTypedData;
            },
          }),
          Object.defineProperty(e, "domainSeparator", {
            enumerable: !0,
            get: function () {
              return go.domainSeparator;
            },
          }),
          Object.defineProperty(e, "getTypesForEIP712Domain", {
            enumerable: !0,
            get: function () {
              return go.getTypesForEIP712Domain;
            },
          });
        var zd = Gy();
        Object.defineProperty(e, "createNonceManager", {
          enumerable: !0,
          get: function () {
            return zd.createNonceManager;
          },
        }),
          Object.defineProperty(e, "nonceManager", {
            enumerable: !0,
            get: function () {
              return zd.nonceManager;
            },
          });
      })(yc)),
    yc
  );
}
var sr = {},
  Ag;
function Sv() {
  if (Ag) return sr;
  (Ag = 1),
    Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.MAGIC_VALUE_BYTES = sr.MAGIC_VALUE = void 0);
  const e = "0x1626ba7e";
  sr.MAGIC_VALUE = e;
  const t = "0x20c13b0b";
  return (sr.MAGIC_VALUE_BYTES = t), sr;
}
var yu = {},
  Nn = {},
  ur = {},
  Sg;
function ip() {
  if (Sg) return ur;
  (Sg = 1),
    Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.PermissionsError = ur.PERMISSIONS_REQUEST_REJECTED = void 0),
    (ur.PERMISSIONS_REQUEST_REJECTED = 4001);
  class e extends Error {
    constructor(n, r, i) {
      super(n),
        (this.code = r),
        (this.data = i),
        Object.setPrototypeOf(this, e.prototype);
    }
  }
  return (ur.PermissionsError = e), ur;
}
var Ig;
function ap() {
  if (Ig) return Nn;
  (Ig = 1),
    Object.defineProperty(Nn, "__esModule", { value: !0 }),
    (Nn.Wallet = void 0);
  const e = dr(),
    t = ip();
  class n {
    constructor(i) {
      this.communicator = i;
    }
    async getPermissions() {
      return (
        await this.communicator.send(e.Methods.wallet_getPermissions, void 0)
      ).data;
    }
    async requestPermissions(i) {
      if (!this.isPermissionRequestValid(i))
        throw new t.PermissionsError(
          "Permissions request is invalid",
          t.PERMISSIONS_REQUEST_REJECTED,
        );
      try {
        return (
          await this.communicator.send(e.Methods.wallet_requestPermissions, i)
        ).data;
      } catch {
        throw new t.PermissionsError(
          "Permissions rejected",
          t.PERMISSIONS_REQUEST_REJECTED,
        );
      }
    }
    isPermissionRequestValid(i) {
      return i.every((s) =>
        typeof s == "object"
          ? Object.keys(s).every(
              (o) => !!Object.values(e.RestrictedMethods).includes(o),
            )
          : !1,
      );
    }
  }
  return (Nn.Wallet = n), Nn;
}
var Rg;
function Iv() {
  if (Rg) return yu;
  (Rg = 1), Object.defineProperty(yu, "__esModule", { value: !0 });
  const e = ap(),
    t = ip(),
    n = (i, s) => s.some((o) => o.parentCapability === i),
    r = () => (i, s, o) => {
      const a = o.value;
      return (
        (o.value = async function () {
          const u = new e.Wallet(this.communicator);
          let f = await u.getPermissions();
          if (
            (n(s, f) || (f = await u.requestPermissions([{ [s]: {} }])),
            !n(s, f))
          )
            throw new t.PermissionsError(
              "Permissions rejected",
              t.PERMISSIONS_REQUEST_REJECTED,
            );
          return a.apply(this);
        }),
        o
      );
    };
  return (yu.default = r), yu;
}
var Og;
function Rv() {
  if (Og) return Xt;
  Og = 1;
  var e =
      Xt.__decorate ||
      function (f, c, d, l) {
        var g = arguments.length,
          h =
            g < 3
              ? c
              : l === null
                ? (l = Object.getOwnPropertyDescriptor(c, d))
                : l,
          b;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          h = Reflect.decorate(f, c, d, l);
        else
          for (var v = f.length - 1; v >= 0; v--)
            (b = f[v]) &&
              (h = (g < 3 ? b(h) : g > 3 ? b(c, d, h) : b(c, d)) || h);
        return g > 3 && h && Object.defineProperty(c, d, h), h;
      },
    t =
      Xt.__importDefault ||
      function (f) {
        return f && f.__esModule ? f : { default: f };
      };
  Object.defineProperty(Xt, "__esModule", { value: !0 }), (Xt.Safe = void 0);
  const n = Av(),
    r = Sv(),
    i = dr(),
    s = Lc(),
    o = zc(),
    a = t(Iv());
  class u {
    constructor(c) {
      this.communicator = c;
    }
    async getChainInfo() {
      return (await this.communicator.send(i.Methods.getChainInfo, void 0))
        .data;
    }
    async getInfo() {
      return (await this.communicator.send(i.Methods.getSafeInfo, void 0)).data;
    }
    async experimental_getBalances({ currency: c = "usd" } = {}) {
      return (
        await this.communicator.send(i.Methods.getSafeBalances, { currency: c })
      ).data;
    }
    async check1271Signature(c, d = "0x") {
      const l = await this.getInfo(),
        g = (0, n.encodeFunctionData)({
          abi: [
            {
              constant: !1,
              inputs: [
                { name: "_dataHash", type: "bytes32" },
                { name: "_signature", type: "bytes" },
              ],
              name: "isValidSignature",
              outputs: [{ name: "", type: "bytes4" }],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          functionName: "isValidSignature",
          args: [c, d],
        }),
        h = {
          call: s.RPC_CALLS.eth_call,
          params: [{ to: l.safeAddress, data: g }, "latest"],
        };
      try {
        return (
          (await this.communicator.send(i.Methods.rpcCall, h)).data
            .slice(0, 10)
            .toLowerCase() === r.MAGIC_VALUE
        );
      } catch {
        return !1;
      }
    }
    async check1271SignatureBytes(c, d = "0x") {
      const l = await this.getInfo(),
        g = (0, n.encodeFunctionData)({
          abi: [
            {
              constant: !1,
              inputs: [
                { name: "_data", type: "bytes" },
                { name: "_signature", type: "bytes" },
              ],
              name: "isValidSignature",
              outputs: [{ name: "", type: "bytes4" }],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          functionName: "isValidSignature",
          args: [c, d],
        }),
        h = {
          call: s.RPC_CALLS.eth_call,
          params: [{ to: l.safeAddress, data: g }, "latest"],
        };
      try {
        return (
          (await this.communicator.send(i.Methods.rpcCall, h)).data
            .slice(0, 10)
            .toLowerCase() === r.MAGIC_VALUE_BYTES
        );
      } catch {
        return !1;
      }
    }
    calculateMessageHash(c) {
      return (0, n.hashMessage)(c);
    }
    calculateTypedMessageHash(c) {
      const d =
        typeof c.domain.chainId == "object"
          ? c.domain.chainId.toNumber()
          : Number(c.domain.chainId);
      let l = c.primaryType;
      if (!l) {
        const g = Object.values(c.types),
          h = Object.keys(c.types).filter((b) =>
            g.every((v) =>
              v.every(
                ({ type: _ }) => _.replace("[", "").replace("]", "") !== b,
              ),
            ),
          );
        if (h.length === 0 || h.length > 1)
          throw new Error("Please specify primaryType");
        l = h[0];
      }
      return (0, n.hashTypedData)({
        message: c.message,
        domain: {
          ...c.domain,
          chainId: d,
          verifyingContract: c.domain.verifyingContract,
          salt: c.domain.salt,
        },
        types: c.types,
        primaryType: l,
      });
    }
    async getOffChainSignature(c) {
      return (await this.communicator.send(i.Methods.getOffChainSignature, c))
        .data;
    }
    async isMessageSigned(c, d = "0x") {
      let l;
      if (
        (typeof c == "string" &&
          (l = async () => {
            const g = this.calculateMessageHash(c);
            return await this.isMessageHashSigned(g, d);
          }),
        (0, o.isObjectEIP712TypedData)(c) &&
          (l = async () => {
            const g = this.calculateTypedMessageHash(c);
            return await this.isMessageHashSigned(g, d);
          }),
        l)
      )
        return await l();
      throw new Error("Invalid message type");
    }
    async isMessageHashSigned(c, d = "0x") {
      const l = [
        this.check1271Signature.bind(this),
        this.check1271SignatureBytes.bind(this),
      ];
      for (const g of l) if (await g(c, d)) return !0;
      return !1;
    }
    async getEnvironmentInfo() {
      return (
        await this.communicator.send(i.Methods.getEnvironmentInfo, void 0)
      ).data;
    }
    async requestAddressBook() {
      return (
        await this.communicator.send(i.Methods.requestAddressBook, void 0)
      ).data;
    }
  }
  return (
    (Xt.Safe = u),
    e([(0, a.default)()], u.prototype, "requestAddressBook", null),
    Xt
  );
}
var Bg;
function Cg() {
  if (Bg) return Lr;
  Bg = 1;
  var e =
    Lr.__importDefault ||
    function (a) {
      return a && a.__esModule ? a : { default: a };
    };
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  const t = e(r1()),
    n = s1(),
    r = u1(),
    i = Rv(),
    s = ap();
  class o {
    constructor(u = {}) {
      const { allowedDomains: f = null, debug: c = !1 } = u;
      (this.communicator = new t.default(f, c)),
        (this.eth = new r.Eth(this.communicator)),
        (this.txs = new n.TXs(this.communicator)),
        (this.safe = new i.Safe(this.communicator)),
        (this.wallet = new s.Wallet(this.communicator));
    }
  }
  return (Lr.default = o), Lr;
}
var qg;
function Ov() {
  return (
    qg ||
      ((qg = 1),
      (function (e) {
        var t =
            gr.__createBinding ||
            (Object.create
              ? function (o, a, u, f) {
                  f === void 0 && (f = u);
                  var c = Object.getOwnPropertyDescriptor(a, u);
                  (!c ||
                    ("get" in c
                      ? !a.__esModule
                      : c.writable || c.configurable)) &&
                    (c = {
                      enumerable: !0,
                      get: function () {
                        return a[u];
                      },
                    }),
                    Object.defineProperty(o, f, c);
                }
              : function (o, a, u, f) {
                  f === void 0 && (f = u), (o[f] = a[u]);
                }),
          n =
            gr.__exportStar ||
            function (o, a) {
              for (var u in o)
                u !== "default" &&
                  !Object.prototype.hasOwnProperty.call(a, u) &&
                  t(a, o, u);
            },
          r =
            gr.__importDefault ||
            function (o) {
              return o && o.__esModule ? o : { default: o };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getSDKVersion = void 0);
        const i = r(Cg());
        (e.default = i.default), n(Cg(), e), n(zc(), e), n(dr(), e), n(kg(), e);
        var s = Hg();
        Object.defineProperty(e, "getSDKVersion", {
          enumerable: !0,
          get: function () {
            return s.getSDKVersion;
          },
        }),
          n(Lc(), e);
      })(gr)),
    gr
  );
}
var cr = {},
  xg;
function Bv() {
  if (xg) return cr;
  (xg = 1),
    Object.defineProperty(cr, "__esModule", { value: !0 }),
    (cr.numberToHex = cr.getLowerCase = void 0);
  function e(n) {
    return n && n.toLowerCase();
  }
  cr.getLowerCase = e;
  function t(n) {
    return `0x${n.toString(16)}`;
  }
  return (cr.numberToHex = t), cr;
}
var Mg;
function Cv() {
  if (Mg) return zr;
  (Mg = 1),
    Object.defineProperty(zr, "__esModule", { value: !0 }),
    (zr.SafeAppProvider = void 0);
  const e = Ov(),
    t = Jp(),
    n = Bv();
  class r extends t.EventEmitter {
    constructor(s, o) {
      super(), (this.submittedTxs = new Map()), (this.safe = s), (this.sdk = o);
    }
    async connect() {
      this.emit("connect", { chainId: this.chainId });
    }
    async disconnect() {}
    get chainId() {
      return this.safe.chainId;
    }
    async request(s) {
      var u, f, c, d;
      const { method: o, params: a = [] } = s;
      switch (o) {
        case "eth_accounts":
          return [this.safe.safeAddress];
        case "net_version":
        case "eth_chainId":
          return (0, n.numberToHex)(this.chainId);
        case "personal_sign": {
          const [v, _] = a;
          if (this.safe.safeAddress.toLowerCase() !== _.toLowerCase())
            throw new Error("The address or message hash is invalid");
          const E = await this.sdk.txs.signMessage(v);
          return ("signature" in E ? E.signature : void 0) || "0x";
        }
        case "eth_sign": {
          const [v, _] = a;
          if (
            this.safe.safeAddress.toLowerCase() !== v.toLowerCase() ||
            !_.startsWith("0x")
          )
            throw new Error("The address or message hash is invalid");
          const E = await this.sdk.txs.signMessage(_);
          return ("signature" in E ? E.signature : void 0) || "0x";
        }
        case "eth_signTypedData":
        case "eth_signTypedData_v4": {
          const [v, _] = a,
            E = typeof _ == "string" ? JSON.parse(_) : _;
          if (this.safe.safeAddress.toLowerCase() !== v.toLowerCase())
            throw new Error("The address is invalid");
          const m = await this.sdk.txs.signTypedMessage(E);
          return ("signature" in m ? m.signature : void 0) || "0x";
        }
        case "eth_sendTransaction":
          const l = {
            ...a[0],
            value: a[0].value || "0",
            data: a[0].data || "0x",
          };
          typeof l.gas == "string" &&
            l.gas.startsWith("0x") &&
            (l.gas = parseInt(l.gas, 16));
          const g = await this.sdk.txs.send({
            txs: [l],
            params: { safeTxGas: l.gas },
          });
          return (
            this.submittedTxs.set(g.safeTxHash, {
              from: this.safe.safeAddress,
              hash: g.safeTxHash,
              gas: 0,
              gasPrice: "0x00",
              nonce: 0,
              input: l.data,
              value: l.value,
              to: l.to,
              blockHash: null,
              blockNumber: null,
              transactionIndex: null,
            }),
            g.safeTxHash
          );
        case "eth_blockNumber":
          return (await this.sdk.eth.getBlockByNumber(["latest"])).number;
        case "eth_getBalance":
          return this.sdk.eth.getBalance([(0, n.getLowerCase)(a[0]), a[1]]);
        case "eth_getCode":
          return this.sdk.eth.getCode([(0, n.getLowerCase)(a[0]), a[1]]);
        case "eth_getTransactionCount":
          return this.sdk.eth.getTransactionCount([
            (0, n.getLowerCase)(a[0]),
            a[1],
          ]);
        case "eth_getStorageAt":
          return this.sdk.eth.getStorageAt([
            (0, n.getLowerCase)(a[0]),
            a[1],
            a[2],
          ]);
        case "eth_getBlockByNumber":
          return this.sdk.eth.getBlockByNumber([a[0], a[1]]);
        case "eth_getBlockByHash":
          return this.sdk.eth.getBlockByHash([a[0], a[1]]);
        case "eth_getTransactionByHash":
          let b = a[0];
          try {
            b = (await this.sdk.txs.getBySafeTxHash(b)).txHash || b;
          } catch {}
          return this.submittedTxs.has(b)
            ? this.submittedTxs.get(b)
            : this.sdk.eth
                .getTransactionByHash([b])
                .then((v) => (v && (v.hash = a[0]), v));
        case "eth_getTransactionReceipt": {
          let v = a[0];
          try {
            v = (await this.sdk.txs.getBySafeTxHash(v)).txHash || v;
          } catch {}
          return this.sdk.eth
            .getTransactionReceipt([v])
            .then((_) => (_ && (_.transactionHash = a[0]), _));
        }
        case "eth_estimateGas":
          return this.sdk.eth.getEstimateGas(a[0]);
        case "eth_call":
          return this.sdk.eth.call([a[0], a[1]]);
        case "eth_getLogs":
          return this.sdk.eth.getPastLogs([a[0]]);
        case "eth_gasPrice":
          return this.sdk.eth.getGasPrice();
        case "wallet_getPermissions":
          return this.sdk.wallet.getPermissions();
        case "wallet_requestPermissions":
          return this.sdk.wallet.requestPermissions(a[0]);
        case "safe_setSettings":
          return this.sdk.eth.setSafeSettings([a[0]]);
        case "wallet_sendCalls": {
          if (a[0].from !== this.safe.safeAddress)
            throw Error("Invalid from address");
          const v = a[0].calls.map((E, m) => {
              if (E.chainId !== (0, n.numberToHex)(this.chainId))
                throw new Error(
                  `Invalid call #${m}: Safe is not on chain ${E.chainId}`,
                );
              if (!E.to)
                throw new Error(`Invalid call #${m}: missing "to" field`);
              return {
                to: E.to,
                data: E.data ?? "0x",
                value: E.value ?? (0, n.numberToHex)(0),
              };
            }),
            { safeTxHash: _ } = await this.sdk.txs.send({ txs: v });
          return _;
        }
        case "wallet_getCallsStatus": {
          const v = {
              [e.TransactionStatus.AWAITING_CONFIRMATIONS]: "PENDING",
              [e.TransactionStatus.AWAITING_EXECUTION]: "PENDING",
              [e.TransactionStatus.CANCELLED]: "CONFIRMED",
              [e.TransactionStatus.FAILED]: "CONFIRMED",
              [e.TransactionStatus.SUCCESS]: "CONFIRMED",
            },
            _ = await this.sdk.txs.getBySafeTxHash(a[0]),
            E = v[_.txStatus];
          if (!_.txHash) return { status: E };
          const m = await this.sdk.eth.getTransactionReceipt([_.txHash]);
          if (!m) return { status: E };
          const p =
              ((f = (u = _.txData) == null ? void 0 : u.dataDecoded) == null
                ? void 0
                : f.method) !== "multiSend"
                ? 1
                : (((d =
                    (c = _.txData.dataDecoded.parameters) == null
                      ? void 0
                      : c[0].valueDecoded) == null
                    ? void 0
                    : d.length) ?? 1),
            y = Number(m.blockNumber),
            j = Number(m.gasUsed),
            P = Array(p).fill({
              logs: m.logs,
              status: (0, n.numberToHex)(
                _.txStatus === e.TransactionStatus.SUCCESS ? 1 : 0,
              ),
              chainId: (0, n.numberToHex)(this.chainId),
              blockHash: m.blockHash,
              blockNumber: (0, n.numberToHex)(y),
              gasUsed: (0, n.numberToHex)(j),
              transactionHash: _.txHash,
            });
          return { status: E, receipts: P };
        }
        case "wallet_showCallsStatus":
          throw new Error(`"${s.method}" not supported`);
        case "wallet_getCapabilities":
          return {
            [(0, n.numberToHex)(this.chainId)]: {
              atomicBatch: { supported: !0 },
            },
          };
        default:
          throw Error(`"${s.method}" not implemented`);
      }
    }
    send(s, o) {
      s || o("Undefined request"),
        this.request(s)
          .then((a) => o(null, { jsonrpc: "2.0", id: s.id, result: a }))
          .catch((a) => o(a, null));
    }
  }
  return (zr.SafeAppProvider = r), zr;
}
var Fg;
function qv() {
  return (
    Fg ||
      ((Fg = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.SafeAppProvider = void 0);
        var t = Cv();
        Object.defineProperty(e, "SafeAppProvider", {
          enumerable: !0,
          get: function () {
            return t.SafeAppProvider;
          },
        });
      })(mc)),
    mc
  );
}
var sp = qv();
const xv = Vp(sp),
  Nv = Yp({ __proto__: null, default: xv }, [sp]);
export { Nv as i };
