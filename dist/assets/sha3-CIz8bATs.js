var y = {},
  B = {},
  P;
function D() {
  if (P) return B;
  (P = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.anumber = s),
    (B.number = s),
    (B.abytes = p),
    (B.bytes = p),
    (B.ahash = H),
    (B.aexists = S),
    (B.aoutput = O);
  function s(h) {
    if (!Number.isSafeInteger(h) || h < 0)
      throw new Error("positive integer expected, got " + h);
  }
  function b(h) {
    return (
      h instanceof Uint8Array ||
      (ArrayBuffer.isView(h) && h.constructor.name === "Uint8Array")
    );
  }
  function p(h, ..._) {
    if (!b(h)) throw new Error("Uint8Array expected");
    if (_.length > 0 && !_.includes(h.length))
      throw new Error(
        "Uint8Array expected of length " + _ + ", got length=" + h.length,
      );
  }
  function H(h) {
    if (typeof h != "function" || typeof h.create != "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    s(h.outputLen), s(h.blockLen);
  }
  function S(h, _ = !0) {
    if (h.destroyed) throw new Error("Hash instance has been destroyed");
    if (_ && h.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function O(h, _) {
    p(h);
    const I = _.outputLen;
    if (h.length < I)
      throw new Error(
        "digestInto() expects output buffer of length at least " + I,
      );
  }
  const E = { number: s, bytes: p, hash: H, exists: S, output: O };
  return (B.default = E), B;
}
var i = {},
  V;
function z() {
  if (V) return i;
  (V = 1),
    Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.add5L =
      i.add5H =
      i.add4H =
      i.add4L =
      i.add3H =
      i.add3L =
      i.rotlBL =
      i.rotlBH =
      i.rotlSL =
      i.rotlSH =
      i.rotr32L =
      i.rotr32H =
      i.rotrBL =
      i.rotrBH =
      i.rotrSL =
      i.rotrSH =
      i.shrSL =
      i.shrSH =
      i.toBig =
        void 0),
    (i.fromBig = p),
    (i.split = H),
    (i.add = A);
  const s = BigInt(2 ** 32 - 1),
    b = BigInt(32);
  function p(n, e = !1) {
    return e
      ? { h: Number(n & s), l: Number((n >> b) & s) }
      : { h: Number((n >> b) & s) | 0, l: Number(n & s) | 0 };
  }
  function H(n, e = !1) {
    let t = new Uint32Array(n.length),
      r = new Uint32Array(n.length);
    for (let a = 0; a < n.length; a++) {
      const { h: f, l: w } = p(n[a], e);
      [t[a], r[a]] = [f, w];
    }
    return [t, r];
  }
  const S = (n, e) => (BigInt(n >>> 0) << b) | BigInt(e >>> 0);
  i.toBig = S;
  const O = (n, e, t) => n >>> t;
  i.shrSH = O;
  const E = (n, e, t) => (n << (32 - t)) | (e >>> t);
  i.shrSL = E;
  const h = (n, e, t) => (n >>> t) | (e << (32 - t));
  i.rotrSH = h;
  const _ = (n, e, t) => (n << (32 - t)) | (e >>> t);
  i.rotrSL = _;
  const I = (n, e, t) => (n << (64 - t)) | (e >>> (t - 32));
  i.rotrBH = I;
  const j = (n, e, t) => (n >>> (t - 32)) | (e << (64 - t));
  i.rotrBL = j;
  const q = (n, e) => e;
  i.rotr32H = q;
  const C = (n, e) => n;
  i.rotr32L = C;
  const L = (n, e, t) => (n << t) | (e >>> (32 - t));
  i.rotlSH = L;
  const T = (n, e, t) => (e << t) | (n >>> (32 - t));
  i.rotlSL = T;
  const x = (n, e, t) => (e << (t - 32)) | (n >>> (64 - t));
  i.rotlBH = x;
  const U = (n, e, t) => (n << (t - 32)) | (e >>> (64 - t));
  i.rotlBL = U;
  function A(n, e, t, r) {
    const a = (e >>> 0) + (r >>> 0);
    return { h: (n + t + ((a / 2 ** 32) | 0)) | 0, l: a | 0 };
  }
  const k = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0);
  i.add3L = k;
  const m = (n, e, t, r) => (e + t + r + ((n / 2 ** 32) | 0)) | 0;
  i.add3H = m;
  const u = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0);
  i.add4L = u;
  const o = (n, e, t, r, a) => (e + t + r + a + ((n / 2 ** 32) | 0)) | 0;
  i.add4H = o;
  const c = (n, e, t, r, a) =>
    (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (a >>> 0);
  i.add5L = c;
  const l = (n, e, t, r, a, f) => (e + t + r + a + f + ((n / 2 ** 32) | 0)) | 0;
  i.add5H = l;
  const d = {
    fromBig: p,
    split: H,
    toBig: S,
    shrSH: O,
    shrSL: E,
    rotrSH: h,
    rotrSL: _,
    rotrBH: I,
    rotrBL: j,
    rotr32H: q,
    rotr32L: C,
    rotlSH: L,
    rotlSL: T,
    rotlBH: x,
    rotlBL: U,
    add: A,
    add3L: k,
    add3H: m,
    add4L: u,
    add4H: o,
    add5H: l,
    add5L: c,
  };
  return (i.default = d), i;
}
var R = {},
  F = {},
  X;
function G() {
  return (
    X ||
      ((X = 1),
      Object.defineProperty(F, "__esModule", { value: !0 }),
      (F.crypto = void 0),
      (F.crypto =
        typeof globalThis == "object" && "crypto" in globalThis
          ? globalThis.crypto
          : void 0)),
    F
  );
}
var N;
function J() {
  return (
    N ||
      ((N = 1),
      (function (s) {
        /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
          s,
          "__esModule",
          { value: !0 },
        ),
          (s.Hash =
            s.nextTick =
            s.byteSwapIfBE =
            s.byteSwap =
            s.isLE =
            s.rotl =
            s.rotr =
            s.createView =
            s.u32 =
            s.u8 =
              void 0),
          (s.isBytes = H),
          (s.byteSwap32 = j),
          (s.bytesToHex = C),
          (s.hexToBytes = x),
          (s.asyncLoop = A),
          (s.utf8ToBytes = k),
          (s.toBytes = m),
          (s.concatBytes = u),
          (s.checkOpts = c),
          (s.wrapConstructor = l),
          (s.wrapConstructorWithOpts = d),
          (s.wrapXOFConstructorWithOpts = n),
          (s.randomBytes = e);
        const b = G(),
          p = D();
        function H(t) {
          return (
            t instanceof Uint8Array ||
            (ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array")
          );
        }
        const S = (t) => new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        s.u8 = S;
        const O = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
        s.u32 = O;
        const E = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
        s.createView = E;
        const h = (t, r) => (t << (32 - r)) | (t >>> r);
        s.rotr = h;
        const _ = (t, r) => (t << r) | ((t >>> (32 - r)) >>> 0);
        (s.rotl = _),
          (s.isLE =
            new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68);
        const I = (t) =>
          ((t << 24) & 4278190080) |
          ((t << 8) & 16711680) |
          ((t >>> 8) & 65280) |
          ((t >>> 24) & 255);
        (s.byteSwap = I),
          (s.byteSwapIfBE = s.isLE ? (t) => t : (t) => (0, s.byteSwap)(t));
        function j(t) {
          for (let r = 0; r < t.length; r++) t[r] = (0, s.byteSwap)(t[r]);
        }
        const q = Array.from({ length: 256 }, (t, r) =>
          r.toString(16).padStart(2, "0"),
        );
        function C(t) {
          (0, p.abytes)(t);
          let r = "";
          for (let a = 0; a < t.length; a++) r += q[t[a]];
          return r;
        }
        const L = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
        function T(t) {
          if (t >= L._0 && t <= L._9) return t - L._0;
          if (t >= L.A && t <= L.F) return t - (L.A - 10);
          if (t >= L.a && t <= L.f) return t - (L.a - 10);
        }
        function x(t) {
          if (typeof t != "string")
            throw new Error("hex string expected, got " + typeof t);
          const r = t.length,
            a = r / 2;
          if (r % 2)
            throw new Error(
              "hex string expected, got unpadded hex of length " + r,
            );
          const f = new Uint8Array(a);
          for (let w = 0, g = 0; w < a; w++, g += 2) {
            const v = T(t.charCodeAt(g)),
              M = T(t.charCodeAt(g + 1));
            if (v === void 0 || M === void 0) {
              const K = t[g] + t[g + 1];
              throw new Error(
                'hex string expected, got non-hex character "' +
                  K +
                  '" at index ' +
                  g,
              );
            }
            f[w] = v * 16 + M;
          }
          return f;
        }
        const U = async () => {};
        s.nextTick = U;
        async function A(t, r, a) {
          let f = Date.now();
          for (let w = 0; w < t; w++) {
            a(w);
            const g = Date.now() - f;
            (g >= 0 && g < r) || (await (0, s.nextTick)(), (f += g));
          }
        }
        function k(t) {
          if (typeof t != "string")
            throw new Error("utf8ToBytes expected string, got " + typeof t);
          return new Uint8Array(new TextEncoder().encode(t));
        }
        function m(t) {
          return typeof t == "string" && (t = k(t)), (0, p.abytes)(t), t;
        }
        function u(...t) {
          let r = 0;
          for (let f = 0; f < t.length; f++) {
            const w = t[f];
            (0, p.abytes)(w), (r += w.length);
          }
          const a = new Uint8Array(r);
          for (let f = 0, w = 0; f < t.length; f++) {
            const g = t[f];
            a.set(g, w), (w += g.length);
          }
          return a;
        }
        class o {
          clone() {
            return this._cloneInto();
          }
        }
        s.Hash = o;
        function c(t, r) {
          if (r !== void 0 && {}.toString.call(r) !== "[object Object]")
            throw new Error("Options should be object or undefined");
          return Object.assign(t, r);
        }
        function l(t) {
          const r = (f) => t().update(m(f)).digest(),
            a = t();
          return (
            (r.outputLen = a.outputLen),
            (r.blockLen = a.blockLen),
            (r.create = () => t()),
            r
          );
        }
        function d(t) {
          const r = (f, w) => t(w).update(m(f)).digest(),
            a = t({});
          return (
            (r.outputLen = a.outputLen),
            (r.blockLen = a.blockLen),
            (r.create = (f) => t(f)),
            r
          );
        }
        function n(t) {
          const r = (f, w) => t(w).update(m(f)).digest(),
            a = t({});
          return (
            (r.outputLen = a.outputLen),
            (r.blockLen = a.blockLen),
            (r.create = (f) => t(f)),
            r
          );
        }
        function e(t = 32) {
          if (b.crypto && typeof b.crypto.getRandomValues == "function")
            return b.crypto.getRandomValues(new Uint8Array(t));
          if (b.crypto && typeof b.crypto.randomBytes == "function")
            return b.crypto.randomBytes(t);
          throw new Error("crypto.getRandomValues must be defined");
        }
      })(R)),
    R
  );
}
var W;
function Q() {
  if (W) return y;
  (W = 1),
    Object.defineProperty(y, "__esModule", { value: !0 }),
    (y.shake256 =
      y.shake128 =
      y.keccak_512 =
      y.keccak_384 =
      y.keccak_256 =
      y.keccak_224 =
      y.sha3_512 =
      y.sha3_384 =
      y.sha3_256 =
      y.sha3_224 =
      y.Keccak =
        void 0),
    (y.keccakP = U);
  const s = D(),
    b = z(),
    p = J(),
    H = [],
    S = [],
    O = [],
    E = BigInt(0),
    h = BigInt(1),
    _ = BigInt(2),
    I = BigInt(7),
    j = BigInt(256),
    q = BigInt(113);
  for (let u = 0, o = h, c = 1, l = 0; u < 24; u++) {
    ([c, l] = [l, (2 * c + 3 * l) % 5]),
      H.push(2 * (5 * l + c)),
      S.push((((u + 1) * (u + 2)) / 2) % 64);
    let d = E;
    for (let n = 0; n < 7; n++)
      (o = ((o << h) ^ ((o >> I) * q)) % j),
        o & _ && (d ^= h << ((h << BigInt(n)) - h));
    O.push(d);
  }
  const [C, L] = (0, b.split)(O, !0),
    T = (u, o, c) => (c > 32 ? (0, b.rotlBH)(u, o, c) : (0, b.rotlSH)(u, o, c)),
    x = (u, o, c) => (c > 32 ? (0, b.rotlBL)(u, o, c) : (0, b.rotlSL)(u, o, c));
  function U(u, o = 24) {
    const c = new Uint32Array(10);
    for (let l = 24 - o; l < 24; l++) {
      for (let e = 0; e < 10; e++)
        c[e] = u[e] ^ u[e + 10] ^ u[e + 20] ^ u[e + 30] ^ u[e + 40];
      for (let e = 0; e < 10; e += 2) {
        const t = (e + 8) % 10,
          r = (e + 2) % 10,
          a = c[r],
          f = c[r + 1],
          w = T(a, f, 1) ^ c[t],
          g = x(a, f, 1) ^ c[t + 1];
        for (let v = 0; v < 50; v += 10) (u[e + v] ^= w), (u[e + v + 1] ^= g);
      }
      let d = u[2],
        n = u[3];
      for (let e = 0; e < 24; e++) {
        const t = S[e],
          r = T(d, n, t),
          a = x(d, n, t),
          f = H[e];
        (d = u[f]), (n = u[f + 1]), (u[f] = r), (u[f + 1] = a);
      }
      for (let e = 0; e < 50; e += 10) {
        for (let t = 0; t < 10; t++) c[t] = u[e + t];
        for (let t = 0; t < 10; t++)
          u[e + t] ^= ~c[(t + 2) % 10] & c[(t + 4) % 10];
      }
      (u[0] ^= C[l]), (u[1] ^= L[l]);
    }
    c.fill(0);
  }
  class A extends p.Hash {
    constructor(o, c, l, d = !1, n = 24) {
      if (
        (super(),
        (this.blockLen = o),
        (this.suffix = c),
        (this.outputLen = l),
        (this.enableXOF = d),
        (this.rounds = n),
        (this.pos = 0),
        (this.posOut = 0),
        (this.finished = !1),
        (this.destroyed = !1),
        (0, s.anumber)(l),
        0 >= this.blockLen || this.blockLen >= 200)
      )
        throw new Error("Sha3 supports only keccak-f1600 function");
      (this.state = new Uint8Array(200)),
        (this.state32 = (0, p.u32)(this.state));
    }
    keccak() {
      p.isLE || (0, p.byteSwap32)(this.state32),
        U(this.state32, this.rounds),
        p.isLE || (0, p.byteSwap32)(this.state32),
        (this.posOut = 0),
        (this.pos = 0);
    }
    update(o) {
      (0, s.aexists)(this);
      const { blockLen: c, state: l } = this;
      o = (0, p.toBytes)(o);
      const d = o.length;
      for (let n = 0; n < d; ) {
        const e = Math.min(c - this.pos, d - n);
        for (let t = 0; t < e; t++) l[this.pos++] ^= o[n++];
        this.pos === c && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = !0;
      const { state: o, suffix: c, pos: l, blockLen: d } = this;
      (o[l] ^= c),
        c & 128 && l === d - 1 && this.keccak(),
        (o[d - 1] ^= 128),
        this.keccak();
    }
    writeInto(o) {
      (0, s.aexists)(this, !1), (0, s.abytes)(o), this.finish();
      const c = this.state,
        { blockLen: l } = this;
      for (let d = 0, n = o.length; d < n; ) {
        this.posOut >= l && this.keccak();
        const e = Math.min(l - this.posOut, n - d);
        o.set(c.subarray(this.posOut, this.posOut + e), d),
          (this.posOut += e),
          (d += e);
      }
      return o;
    }
    xofInto(o) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(o);
    }
    xof(o) {
      return (0, s.anumber)(o), this.xofInto(new Uint8Array(o));
    }
    digestInto(o) {
      if (((0, s.aoutput)(o, this), this.finished))
        throw new Error("digest() was already called");
      return this.writeInto(o), this.destroy(), o;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      (this.destroyed = !0), this.state.fill(0);
    }
    _cloneInto(o) {
      const {
        blockLen: c,
        suffix: l,
        outputLen: d,
        rounds: n,
        enableXOF: e,
      } = this;
      return (
        o || (o = new A(c, l, d, e, n)),
        o.state32.set(this.state32),
        (o.pos = this.pos),
        (o.posOut = this.posOut),
        (o.finished = this.finished),
        (o.rounds = n),
        (o.suffix = l),
        (o.outputLen = d),
        (o.enableXOF = e),
        (o.destroyed = this.destroyed),
        o
      );
    }
  }
  y.Keccak = A;
  const k = (u, o, c) => (0, p.wrapConstructor)(() => new A(o, u, c));
  (y.sha3_224 = k(6, 144, 224 / 8)),
    (y.sha3_256 = k(6, 136, 256 / 8)),
    (y.sha3_384 = k(6, 104, 384 / 8)),
    (y.sha3_512 = k(6, 72, 512 / 8)),
    (y.keccak_224 = k(1, 144, 224 / 8)),
    (y.keccak_256 = k(1, 136, 256 / 8)),
    (y.keccak_384 = k(1, 104, 384 / 8)),
    (y.keccak_512 = k(1, 72, 512 / 8));
  const m = (u, o, c) =>
    (0, p.wrapXOFConstructorWithOpts)(
      (l = {}) => new A(o, u, l.dkLen === void 0 ? c : l.dkLen, !0),
    );
  return (
    (y.shake128 = m(31, 168, 128 / 8)), (y.shake256 = m(31, 136, 256 / 8)), y
  );
}
export { D as a, J as b, Q as r };
