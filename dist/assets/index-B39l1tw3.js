var R = {},
  A = {},
  _ = {},
  K;
function Ve() {
  if (K) return _;
  K = 1;
  var e =
    _.__awaiter ||
    function (t, d, o, f) {
      function N(h) {
        return h instanceof o
          ? h
          : new o(function (T) {
              T(h);
            });
      }
      return new (o || (o = Promise))(function (h, T) {
        function S(v) {
          try {
            D(f.next(v));
          } catch (C) {
            T(C);
          }
        }
        function M(v) {
          try {
            D(f.throw(v));
          } catch (C) {
            T(C);
          }
        }
        function D(v) {
          v.done ? h(v.value) : N(v.value).then(S, M);
        }
        D((f = f.apply(t, d || [])).next());
      });
    };
  Object.defineProperty(_, "__esModule", { value: !0 }),
    (_.getData = _.fetchData = _.stringifyQuery = _.insertParams = void 0);
  const n = (t) =>
    typeof t == "object" && t !== null && "code" in t && "message" in t;
  function E(t, d, o) {
    return t.replace(new RegExp(`\\{${d}\\}`, "g"), o);
  }
  function u(t, d) {
    return d ? Object.keys(d).reduce((o, f) => E(o, f, String(d[f])), t) : t;
  }
  _.insertParams = u;
  function O(t) {
    if (!t) return "";
    const d = new URLSearchParams();
    Object.keys(t).forEach((f) => {
      t[f] != null && d.append(f, String(t[f]));
    });
    const o = d.toString();
    return o ? `?${o}` : "";
  }
  _.stringifyQuery = O;
  function c(t) {
    return e(this, void 0, void 0, function* () {
      let d;
      try {
        d = yield t.json();
      } catch {
        d = {};
      }
      if (!t.ok) {
        const o = n(d)
          ? `CGW error - ${d.code}: ${d.message}`
          : `CGW error - status ${t.statusText}`;
        throw new Error(o);
      }
      return d;
    });
  }
  function l(t, d, o, f, N) {
    return e(this, void 0, void 0, function* () {
      const h = Object.assign({ "Content-Type": "application/json" }, f),
        T = { method: d ?? "POST", headers: h };
      N && (T.credentials = N),
        o != null && (T.body = typeof o == "string" ? o : JSON.stringify(o));
      const S = yield fetch(t, T);
      return c(S);
    });
  }
  _.fetchData = l;
  function g(t, d, o) {
    return e(this, void 0, void 0, function* () {
      const f = { method: "GET" };
      d &&
        (f.headers = Object.assign(Object.assign({}, d), {
          "Content-Type": "application/json",
        })),
        o && (f.credentials = o);
      const N = yield fetch(t, f);
      return c(N);
    });
  }
  return (_.getData = g), _;
}
var V;
function Be() {
  if (V) return A;
  (V = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.getEndpoint =
      A.deleteEndpoint =
      A.putEndpoint =
      A.postEndpoint =
        void 0);
  const e = Ve();
  function n(l, g, t, d) {
    const o = (0, e.insertParams)(g, t),
      f = (0, e.stringifyQuery)(d);
    return `${l}${o}${f}`;
  }
  function E(l, g, t) {
    const d = n(
      l,
      g,
      t == null ? void 0 : t.path,
      t == null ? void 0 : t.query,
    );
    return (0, e.fetchData)(
      d,
      "POST",
      t == null ? void 0 : t.body,
      t == null ? void 0 : t.headers,
      t == null ? void 0 : t.credentials,
    );
  }
  A.postEndpoint = E;
  function u(l, g, t) {
    const d = n(
      l,
      g,
      t == null ? void 0 : t.path,
      t == null ? void 0 : t.query,
    );
    return (0, e.fetchData)(
      d,
      "PUT",
      t == null ? void 0 : t.body,
      t == null ? void 0 : t.headers,
      t == null ? void 0 : t.credentials,
    );
  }
  A.putEndpoint = u;
  function O(l, g, t) {
    const d = n(
      l,
      g,
      t == null ? void 0 : t.path,
      t == null ? void 0 : t.query,
    );
    return (0, e.fetchData)(
      d,
      "DELETE",
      t == null ? void 0 : t.body,
      t == null ? void 0 : t.headers,
      t == null ? void 0 : t.credentials,
    );
  }
  A.deleteEndpoint = O;
  function c(l, g, t, d) {
    if (d) return (0, e.getData)(d, void 0, t == null ? void 0 : t.credentials);
    const o = n(
      l,
      g,
      t == null ? void 0 : t.path,
      t == null ? void 0 : t.query,
    );
    return (0, e.getData)(
      o,
      t == null ? void 0 : t.headers,
      t == null ? void 0 : t.credentials,
    );
  }
  return (A.getEndpoint = c), A;
}
var L = {},
  B;
function Fe() {
  return (
    B ||
      ((B = 1),
      Object.defineProperty(L, "__esModule", { value: !0 }),
      (L.DEFAULT_BASE_URL = void 0),
      (L.DEFAULT_BASE_URL = "https://safe-client.safe.global")),
    L
  );
}
var y = {},
  F;
function Xe() {
  return (
    F ||
      ((F = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ImplementationVersionState = void 0),
          (function (n) {
            (n.UP_TO_DATE = "UP_TO_DATE"),
              (n.OUTDATED = "OUTDATED"),
              (n.UNKNOWN = "UNKNOWN");
          })(
            e.ImplementationVersionState || (e.ImplementationVersionState = {}),
          );
      })(y)),
    y
  );
}
var P = {},
  X;
function me() {
  return (
    X ||
      ((X = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.SafeAppSocialPlatforms =
            e.SafeAppFeatures =
            e.SafeAppAccessPolicyTypes =
              void 0),
          (function (n) {
            (n.NoRestrictions = "NO_RESTRICTIONS"),
              (n.DomainAllowlist = "DOMAIN_ALLOWLIST");
          })(e.SafeAppAccessPolicyTypes || (e.SafeAppAccessPolicyTypes = {})),
          (function (n) {
            n.BATCHED_TRANSACTIONS = "BATCHED_TRANSACTIONS";
          })(e.SafeAppFeatures || (e.SafeAppFeatures = {})),
          (function (n) {
            (n.TWITTER = "TWITTER"),
              (n.GITHUB = "GITHUB"),
              (n.DISCORD = "DISCORD");
          })(e.SafeAppSocialPlatforms || (e.SafeAppSocialPlatforms = {}));
      })(P)),
    P
  );
}
var b = {},
  m;
function Qe() {
  return (
    m ||
      ((m = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.LabelValue =
            e.StartTimeValue =
            e.DurationType =
            e.DetailedExecutionInfoType =
            e.TransactionListItemType =
            e.ConflictType =
            e.TransactionInfoType =
            e.SettingsInfoType =
            e.TransactionTokenType =
            e.TransferDirection =
            e.TransactionStatus =
            e.Operation =
              void 0),
          (function (n) {
            (n[(n.CALL = 0)] = "CALL"), (n[(n.DELEGATE = 1)] = "DELEGATE");
          })(e.Operation || (e.Operation = {})),
          (function (n) {
            (n.AWAITING_CONFIRMATIONS = "AWAITING_CONFIRMATIONS"),
              (n.AWAITING_EXECUTION = "AWAITING_EXECUTION"),
              (n.CANCELLED = "CANCELLED"),
              (n.FAILED = "FAILED"),
              (n.SUCCESS = "SUCCESS");
          })(e.TransactionStatus || (e.TransactionStatus = {})),
          (function (n) {
            (n.INCOMING = "INCOMING"),
              (n.OUTGOING = "OUTGOING"),
              (n.UNKNOWN = "UNKNOWN");
          })(e.TransferDirection || (e.TransferDirection = {})),
          (function (n) {
            (n.ERC20 = "ERC20"),
              (n.ERC721 = "ERC721"),
              (n.NATIVE_COIN = "NATIVE_COIN");
          })(e.TransactionTokenType || (e.TransactionTokenType = {})),
          (function (n) {
            (n.SET_FALLBACK_HANDLER = "SET_FALLBACK_HANDLER"),
              (n.ADD_OWNER = "ADD_OWNER"),
              (n.REMOVE_OWNER = "REMOVE_OWNER"),
              (n.SWAP_OWNER = "SWAP_OWNER"),
              (n.CHANGE_THRESHOLD = "CHANGE_THRESHOLD"),
              (n.CHANGE_IMPLEMENTATION = "CHANGE_IMPLEMENTATION"),
              (n.ENABLE_MODULE = "ENABLE_MODULE"),
              (n.DISABLE_MODULE = "DISABLE_MODULE"),
              (n.SET_GUARD = "SET_GUARD"),
              (n.DELETE_GUARD = "DELETE_GUARD");
          })(e.SettingsInfoType || (e.SettingsInfoType = {})),
          (function (n) {
            (n.TRANSFER = "Transfer"),
              (n.SETTINGS_CHANGE = "SettingsChange"),
              (n.CUSTOM = "Custom"),
              (n.CREATION = "Creation"),
              (n.SWAP_ORDER = "SwapOrder"),
              (n.TWAP_ORDER = "TwapOrder"),
              (n.SWAP_TRANSFER = "SwapTransfer"),
              (n.NATIVE_STAKING_DEPOSIT = "NativeStakingDeposit"),
              (n.NATIVE_STAKING_VALIDATORS_EXIT =
                "NativeStakingValidatorsExit"),
              (n.NATIVE_STAKING_WITHDRAW = "NativeStakingWithdraw");
          })(e.TransactionInfoType || (e.TransactionInfoType = {})),
          (function (n) {
            (n.NONE = "None"), (n.HAS_NEXT = "HasNext"), (n.END = "End");
          })(e.ConflictType || (e.ConflictType = {})),
          (function (n) {
            (n.TRANSACTION = "TRANSACTION"),
              (n.LABEL = "LABEL"),
              (n.CONFLICT_HEADER = "CONFLICT_HEADER"),
              (n.DATE_LABEL = "DATE_LABEL");
          })(e.TransactionListItemType || (e.TransactionListItemType = {})),
          (function (n) {
            (n.MULTISIG = "MULTISIG"), (n.MODULE = "MODULE");
          })(e.DetailedExecutionInfoType || (e.DetailedExecutionInfoType = {})),
          (function (n) {
            (n.AUTO = "AUTO"), (n.LIMIT_DURATION = "LIMIT_DURATION");
          })(e.DurationType || (e.DurationType = {})),
          (function (n) {
            (n.AT_MINING_TIME = "AT_MINING_TIME"), (n.AT_EPOCH = "AT_EPOCH");
          })(e.StartTimeValue || (e.StartTimeValue = {})),
          (function (n) {
            (n.Queued = "Queued"), (n.Next = "Next");
          })(e.LabelValue || (e.LabelValue = {}));
      })(b)),
    b
  );
}
var G = {},
  Q;
function $e() {
  return (
    Q ||
      ((Q = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FEATURES = e.GAS_PRICE_TYPE = e.RPC_AUTHENTICATION = void 0),
          (function (n) {
            (n.API_KEY_PATH = "API_KEY_PATH"),
              (n.NO_AUTHENTICATION = "NO_AUTHENTICATION"),
              (n.UNKNOWN = "UNKNOWN");
          })(e.RPC_AUTHENTICATION || (e.RPC_AUTHENTICATION = {})),
          (function (n) {
            (n.ORACLE = "ORACLE"),
              (n.FIXED = "FIXED"),
              (n.FIXED_1559 = "FIXED1559"),
              (n.UNKNOWN = "UNKNOWN");
          })(e.GAS_PRICE_TYPE || (e.GAS_PRICE_TYPE = {})),
          (function (n) {
            (n.ERC721 = "ERC721"),
              (n.SAFE_APPS = "SAFE_APPS"),
              (n.CONTRACT_INTERACTION = "CONTRACT_INTERACTION"),
              (n.DOMAIN_LOOKUP = "DOMAIN_LOOKUP"),
              (n.SPENDING_LIMIT = "SPENDING_LIMIT"),
              (n.EIP1559 = "EIP1559"),
              (n.SAFE_TX_GAS_OPTIONAL = "SAFE_TX_GAS_OPTIONAL"),
              (n.TX_SIMULATION = "TX_SIMULATION"),
              (n.EIP1271 = "EIP1271");
          })(e.FEATURES || (e.FEATURES = {}));
      })(G)),
    G
  );
}
var U = {},
  $;
function Ye() {
  return (
    $ ||
      (($ = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TokenType = void 0),
          (function (n) {
            (n.ERC20 = "ERC20"),
              (n.ERC721 = "ERC721"),
              (n.NATIVE_TOKEN = "NATIVE_TOKEN");
          })(e.TokenType || (e.TokenType = {}));
      })(U)),
    U
  );
}
var W = {},
  Y;
function Je() {
  return (
    Y || ((Y = 1), Object.defineProperty(W, "__esModule", { value: !0 })), W
  );
}
var H = {},
  J;
function ze() {
  return (
    J ||
      ((J = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.NativeStakingStatus = e.ConfirmationViewTypes = void 0),
          (function (n) {
            (n.GENERIC = "GENERIC"),
              (n.COW_SWAP_ORDER = "COW_SWAP_ORDER"),
              (n.COW_SWAP_TWAP_ORDER = "COW_SWAP_TWAP_ORDER"),
              (n.KILN_NATIVE_STAKING_DEPOSIT = "KILN_NATIVE_STAKING_DEPOSIT"),
              (n.KILN_NATIVE_STAKING_VALIDATORS_EXIT =
                "KILN_NATIVE_STAKING_VALIDATORS_EXIT"),
              (n.KILN_NATIVE_STAKING_WITHDRAW = "KILN_NATIVE_STAKING_WITHDRAW");
          })(e.ConfirmationViewTypes || (e.ConfirmationViewTypes = {})),
          (function (n) {
            (n.NOT_STAKED = "NOT_STAKED"),
              (n.ACTIVATING = "ACTIVATING"),
              (n.DEPOSIT_IN_PROGRESS = "DEPOSIT_IN_PROGRESS"),
              (n.ACTIVE = "ACTIVE"),
              (n.EXIT_REQUESTED = "EXIT_REQUESTED"),
              (n.EXITING = "EXITING"),
              (n.EXITED = "EXITED"),
              (n.SLASHED = "SLASHED");
          })(e.NativeStakingStatus || (e.NativeStakingStatus = {}));
      })(H)),
    H
  );
}
var j = {},
  z;
function Ze() {
  return (
    z ||
      ((z = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.SafeMessageStatus = e.SafeMessageListItemType = void 0),
          (function (n) {
            (n.DATE_LABEL = "DATE_LABEL"), (n.MESSAGE = "MESSAGE");
          })(e.SafeMessageListItemType || (e.SafeMessageListItemType = {})),
          (function (n) {
            (n.NEEDS_CONFIRMATION = "NEEDS_CONFIRMATION"),
              (n.CONFIRMED = "CONFIRMED");
          })(e.SafeMessageStatus || (e.SafeMessageStatus = {}));
      })(j)),
    j
  );
}
var q = {},
  Z;
function pe() {
  return (
    Z ||
      ((Z = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.DeviceType = void 0),
          (function (n) {
            (n.ANDROID = "ANDROID"), (n.IOS = "IOS"), (n.WEB = "WEB");
          })(e.DeviceType || (e.DeviceType = {}));
      })(q)),
    q
  );
}
var w = {},
  p;
function ke() {
  return (
    p || ((p = 1), Object.defineProperty(w, "__esModule", { value: !0 })), w
  );
}
var k;
function xe() {
  return (
    k ||
      ((k = 1),
      (function (e) {
        var n =
            R.__createBinding ||
            (Object.create
              ? function (i, a, s, r) {
                  r === void 0 && (r = s);
                  var I = Object.getOwnPropertyDescriptor(a, s);
                  (!I ||
                    ("get" in I
                      ? !a.__esModule
                      : I.writable || I.configurable)) &&
                    (I = {
                      enumerable: !0,
                      get: function () {
                        return a[s];
                      },
                    }),
                    Object.defineProperty(i, r, I);
                }
              : function (i, a, s, r) {
                  r === void 0 && (r = s), (i[r] = a[s]);
                }),
          E =
            R.__exportStar ||
            function (i, a) {
              for (var s in i)
                s !== "default" &&
                  !Object.prototype.hasOwnProperty.call(a, s) &&
                  n(a, i, s);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getAccount =
            e.createAccount =
            e.verifyAuth =
            e.getAuthNonce =
            e.getContract =
            e.getSafeOverviews =
            e.unsubscribeAll =
            e.unsubscribeSingle =
            e.registerRecoveryModule =
            e.deleteRegisteredEmail =
            e.getRegisteredEmail =
            e.verifyEmail =
            e.resendEmailVerificationCode =
            e.changeEmail =
            e.registerEmail =
            e.unregisterDevice =
            e.unregisterSafe =
            e.registerDevice =
            e.getDelegates =
            e.confirmSafeMessage =
            e.proposeSafeMessage =
            e.getSafeMessage =
            e.getSafeMessages =
            e.getDecodedData =
            e.getMasterCopies =
            e.getSafeApps =
            e.getChainConfig =
            e.getChainsConfig =
            e.getTxPreview =
            e.getConfirmationView =
            e.proposeTransaction =
            e.getNonces =
            e.postSafeGasEstimation =
            e.deleteTransaction =
            e.getTransactionDetails =
            e.getTransactionQueue =
            e.getTransactionHistory =
            e.getCollectiblesPage =
            e.getCollectibles =
            e.getAllOwnedSafes =
            e.getOwnedSafes =
            e.getFiatCurrencies =
            e.getBalances =
            e.getMultisigTransactions =
            e.getModuleTransactions =
            e.getIncomingTransfers =
            e.getSafeInfo =
            e.getRelayCount =
            e.relayTransaction =
            e.setBaseUrl =
              void 0),
          (e.getIndexingStatus =
            e.putAccountDataSettings =
            e.getAccountDataSettings =
            e.getAccountDataTypes =
            e.deleteAccount =
              void 0);
        const u = Be(),
          O = Fe();
        E(Xe(), e),
          E(me(), e),
          E(Qe(), e),
          E($e(), e),
          E(Ye(), e),
          E(Je(), e),
          E(ze(), e),
          E(Ze(), e),
          E(pe(), e),
          E(ke(), e);
        let c = O.DEFAULT_BASE_URL;
        const l = (i) => {
          c = i;
        };
        e.setBaseUrl = l;
        function g(i, a) {
          return (0, u.postEndpoint)(c, "/v1/chains/{chainId}/relay", {
            path: { chainId: i },
            body: a,
          });
        }
        e.relayTransaction = g;
        function t(i, a) {
          return (0, u.getEndpoint)(c, "/v1/chains/{chainId}/relay/{address}", {
            path: { chainId: i, address: a },
          });
        }
        e.getRelayCount = t;
        function d(i, a) {
          return (0, u.getEndpoint)(c, "/v1/chains/{chainId}/safes/{address}", {
            path: { chainId: i, address: a },
          });
        }
        e.getSafeInfo = d;
        function o(i, a, s, r) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{address}/incoming-transfers/",
            { path: { chainId: i, address: a }, query: s },
            r,
          );
        }
        e.getIncomingTransfers = o;
        function f(i, a, s, r) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{address}/module-transactions/",
            { path: { chainId: i, address: a }, query: s },
            r,
          );
        }
        e.getModuleTransactions = f;
        function N(i, a, s, r) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{address}/multisig-transactions/",
            { path: { chainId: i, address: a }, query: s },
            r,
          );
        }
        e.getMultisigTransactions = N;
        function h(i, a, s = "usd", r = {}) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{address}/balances/{currency}",
            { path: { chainId: i, address: a, currency: s }, query: r },
          );
        }
        e.getBalances = h;
        function T() {
          return (0, u.getEndpoint)(c, "/v1/balances/supported-fiat-codes");
        }
        e.getFiatCurrencies = T;
        function S(i, a) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/owners/{address}/safes",
            { path: { chainId: i, address: a } },
          );
        }
        e.getOwnedSafes = S;
        function M(i) {
          return (0, u.getEndpoint)(c, "/v1/owners/{address}/safes", {
            path: { address: i },
          });
        }
        e.getAllOwnedSafes = M;
        function D(i, a, s = {}) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{address}/collectibles",
            { path: { chainId: i, address: a }, query: s },
          );
        }
        e.getCollectibles = D;
        function v(i, a, s = {}, r) {
          return (0, u.getEndpoint)(
            c,
            "/v2/chains/{chainId}/safes/{address}/collectibles",
            { path: { chainId: i, address: a }, query: s },
            r,
          );
        }
        e.getCollectiblesPage = v;
        function C(i, a, s = {}, r) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/transactions/history",
            { path: { chainId: i, safe_address: a }, query: s },
            r,
          );
        }
        e.getTransactionHistory = C;
        function x(i, a, s = {}, r) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/transactions/queued",
            { path: { chainId: i, safe_address: a }, query: s },
            r,
          );
        }
        e.getTransactionQueue = x;
        function ee(i, a) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/transactions/{transactionId}",
            { path: { chainId: i, transactionId: a } },
          );
        }
        e.getTransactionDetails = ee;
        function ne(i, a, s) {
          return (0, u.deleteEndpoint)(
            c,
            "/v1/chains/{chainId}/transactions/{safeTxHash}",
            { path: { chainId: i, safeTxHash: a }, body: { signature: s } },
          );
        }
        e.deleteTransaction = ne;
        function ie(i, a, s) {
          return (0, u.postEndpoint)(
            c,
            "/v2/chains/{chainId}/safes/{safe_address}/multisig-transactions/estimations",
            { path: { chainId: i, safe_address: a }, body: s },
          );
        }
        e.postSafeGasEstimation = ie;
        function te(i, a) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/nonces",
            { path: { chainId: i, safe_address: a } },
          );
        }
        e.getNonces = te;
        function ae(i, a, s) {
          return (0, u.postEndpoint)(
            c,
            "/v1/chains/{chainId}/transactions/{safe_address}/propose",
            { path: { chainId: i, safe_address: a }, body: s },
          );
        }
        e.proposeTransaction = ae;
        function ce(i, a, s, r, I) {
          return (0, u.postEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/views/transaction-confirmation",
            {
              path: { chainId: i, safe_address: a },
              body: { data: s, to: r, value: I },
            },
          );
        }
        e.getConfirmationView = ce;
        function se(i, a, s, r, I) {
          return (0, u.postEndpoint)(
            c,
            "/v1/chains/{chainId}/transactions/{safe_address}/preview",
            {
              path: { chainId: i, safe_address: a },
              body: { data: s, to: r, value: I },
            },
          );
        }
        e.getTxPreview = se;
        function ue(i) {
          return (0, u.getEndpoint)(c, "/v1/chains", { query: i });
        }
        e.getChainsConfig = ue;
        function de(i) {
          return (0, u.getEndpoint)(c, "/v1/chains/{chainId}", {
            path: { chainId: i },
          });
        }
        e.getChainConfig = de;
        function re(i, a = {}) {
          return (0, u.getEndpoint)(c, "/v1/chains/{chainId}/safe-apps", {
            path: { chainId: i },
            query: a,
          });
        }
        e.getSafeApps = re;
        function oe(i) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/about/master-copies",
            { path: { chainId: i } },
          );
        }
        e.getMasterCopies = oe;
        function fe(i, a, s) {
          return (0, u.postEndpoint)(c, "/v1/chains/{chainId}/data-decoder", {
            path: { chainId: i },
            body: { data: a, to: s },
          });
        }
        e.getDecodedData = fe;
        function Ee(i, a, s) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/messages",
            { path: { chainId: i, safe_address: a }, query: {} },
            s,
          );
        }
        e.getSafeMessages = Ee;
        function le(i, a) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/messages/{message_hash}",
            { path: { chainId: i, message_hash: a } },
          );
        }
        e.getSafeMessage = le;
        function ge(i, a, s) {
          return (0, u.postEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/messages",
            { path: { chainId: i, safe_address: a }, body: s },
          );
        }
        e.proposeSafeMessage = ge;
        function Ie(i, a, s) {
          return (0, u.postEndpoint)(
            c,
            "/v1/chains/{chainId}/messages/{message_hash}/signatures",
            { path: { chainId: i, message_hash: a }, body: s },
          );
        }
        e.confirmSafeMessage = Ie;
        function _e(i, a = {}) {
          return (0, u.getEndpoint)(c, "/v2/chains/{chainId}/delegates", {
            path: { chainId: i },
            query: a,
          });
        }
        e.getDelegates = _e;
        function Ae(i) {
          return (0, u.postEndpoint)(c, "/v1/register/notifications", {
            body: i,
          });
        }
        e.registerDevice = Ae;
        function Te(i, a, s) {
          return (0, u.deleteEndpoint)(
            c,
            "/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safe_address}",
            { path: { chainId: i, safe_address: a, uuid: s } },
          );
        }
        e.unregisterSafe = Te;
        function he(i, a) {
          return (0, u.deleteEndpoint)(
            c,
            "/v1/chains/{chainId}/notifications/devices/{uuid}",
            { path: { chainId: i, uuid: a } },
          );
        }
        e.unregisterDevice = he;
        function ve(i, a, s, r) {
          return (0, u.postEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/emails",
            { path: { chainId: i, safe_address: a }, body: s, headers: r },
          );
        }
        e.registerEmail = ve;
        function Ne(i, a, s, r, I) {
          return (0, u.putEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",
            {
              path: { chainId: i, safe_address: a, signer: s },
              body: r,
              headers: I,
            },
          );
        }
        e.changeEmail = Ne;
        function Oe(i, a, s) {
          return (0, u.postEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify-resend",
            { path: { chainId: i, safe_address: a, signer: s }, body: "" },
          );
        }
        e.resendEmailVerificationCode = Oe;
        function Se(i, a, s, r) {
          return (0, u.putEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify",
            { path: { chainId: i, safe_address: a, signer: s }, body: r },
          );
        }
        e.verifyEmail = Se;
        function De(i, a, s, r) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",
            { path: { chainId: i, safe_address: a, signer: s }, headers: r },
          );
        }
        e.getRegisteredEmail = De;
        function Ce(i, a, s, r) {
          return (0, u.deleteEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",
            { path: { chainId: i, safe_address: a, signer: s }, headers: r },
          );
        }
        e.deleteRegisteredEmail = Ce;
        function Re(i, a, s) {
          return (0, u.postEndpoint)(
            c,
            "/v1/chains/{chainId}/safes/{safe_address}/recovery",
            { path: { chainId: i, safe_address: a }, body: s },
          );
        }
        e.registerRecoveryModule = Re;
        function Le(i) {
          return (0, u.deleteEndpoint)(c, "/v1/subscriptions", { query: i });
        }
        e.unsubscribeSingle = Le;
        function Me(i) {
          return (0, u.deleteEndpoint)(c, "/v1/subscriptions/all", {
            query: i,
          });
        }
        e.unsubscribeAll = Me;
        function ye(i, a) {
          return (0, u.getEndpoint)(c, "/v1/safes", {
            query: Object.assign(Object.assign({}, a), { safes: i.join(",") }),
          });
        }
        e.getSafeOverviews = ye;
        function Pe(i, a) {
          return (0, u.getEndpoint)(
            c,
            "/v1/chains/{chainId}/contracts/{contractAddress}",
            { path: { chainId: i, contractAddress: a } },
          );
        }
        e.getContract = Pe;
        function be() {
          return (0, u.getEndpoint)(c, "/v1/auth/nonce", {
            credentials: "include",
          });
        }
        e.getAuthNonce = be;
        function Ge(i) {
          return (0, u.postEndpoint)(c, "/v1/auth/verify", {
            body: i,
            credentials: "include",
          });
        }
        e.verifyAuth = Ge;
        function Ue(i) {
          return (0, u.postEndpoint)(c, "/v1/accounts", {
            body: i,
            credentials: "include",
          });
        }
        e.createAccount = Ue;
        function We(i) {
          return (0, u.getEndpoint)(c, "/v1/accounts/{address}", {
            path: { address: i },
            credentials: "include",
          });
        }
        e.getAccount = We;
        function He(i) {
          return (0, u.deleteEndpoint)(c, "/v1/accounts/{address}", {
            path: { address: i },
            credentials: "include",
          });
        }
        e.deleteAccount = He;
        function je() {
          return (0, u.getEndpoint)(c, "/v1/accounts/data-types");
        }
        e.getAccountDataTypes = je;
        function qe(i) {
          return (0, u.getEndpoint)(c, "/v1/accounts/{address}/data-settings", {
            path: { address: i },
            credentials: "include",
          });
        }
        e.getAccountDataSettings = qe;
        function we(i, a) {
          return (0, u.putEndpoint)(c, "/v1/accounts/{address}/data-settings", {
            path: { address: i },
            body: a,
            credentials: "include",
          });
        }
        e.putAccountDataSettings = we;
        function Ke(i) {
          return (0, u.getEndpoint)(c, "/v1/chains/{chainId}/about/indexing", {
            path: { chainId: i },
          });
        }
        e.getIndexingStatus = Ke;
      })(R)),
    R
  );
}
export { xe as r };
