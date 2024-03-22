!function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.PureCounter = t() : e.PureCounter = t()
}(self, (function() {
      return e = {
        638: function(e) {
          function t(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r,
                e
          }
          function r(e) {
            return function(e) {
              if (Array.isArray(e))
                return n(e)
            }(e) || function(e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
            }(e) || function(e, t) {
              if (e) {
                if ("string" == typeof e)
                  return n(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
              }
            }(e) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
          }
          function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
              n[r] = e[r];
            return n
          }
          function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , r = {};
            for (var n in e)
              if (t == {} || t.hasOwnProperty(n)) {
                var o = c(e[n]);
                r[n] = o,
                n.match(/duration|pulse/) && (r[n] = "boolean" != typeof o ? 1e3 * o : o)
              }
            return Object.assign({}, t, r)
          }
          function i(e, t) {
            var r = (t.end - t.start) / (t.duration / t.delay)
                , n = "inc";
            t.start > t.end && (n = "dec",
                r *= -1);
            var o = c(t.start);
            e.innerHTML = u(o, t),
            !0 === t.once && e.setAttribute("data-purecounter-duration", 0);
            var i = setInterval((function() {
                  var a = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "inc";
                    return e = c(e),
                        t = c(t),
                        parseFloat("inc" === r ? e + t : e - t)
                  }(o, r, n);
                  e.innerHTML = u(a, t),
                  ((o = a) >= t.end && "inc" == n || o <= t.end && "dec" == n) && (e.innerHTML = u(t.end, t),
                  t.pulse && (e.setAttribute("data-purecounter-duration", 0),
                      setTimeout((function() {
                            e.setAttribute("data-purecounter-duration", t.duration / 1e3)
                          }
                      ), t.pulse)),
                      clearInterval(i))
                }
            ), t.delay)
          }
          function a(e, t) {
            return Math.pow(e, t)
          }
          function u(e, t) {
            var r = {
              minimumFractionDigits: t.decimals,
              maximumFractionDigits: t.decimals
            }
                , n = "string" == typeof t.formater ? t.formater : void 0;
            return e = function(e, t) {
              if (t.filesizing || t.currency) {
                e = Math.abs(Number(e));
                var r = 1e3
                    , n = t.currency && "string" == typeof t.currency ? t.currency : ""
                    , o = t.decimals || 1
                    , i = ["", "K", "M", "B", "T"]
                    , u = "";
                t.filesizing && (r = 1024,
                    i = ["bytes", "KB", "MB", "GB", "TB"]);
                for (var c = 4; c >= 0; c--)
                  if (0 === c && (u = "".concat(e.toFixed(o), " ").concat(i[c])),
                  e >= a(r, c)) {
                    u = "".concat((e / a(r, c)).toFixed(o), " ").concat(i[c]);
                    break
                  }
                return n + u
              }
              return parseFloat(e)
            }(e, t),
                function(e, t) {
                  if (t.formater) {
                    var r = t.separator ? "string" == typeof t.separator ? t.separator : "," : "";
                    return "en-US" !== t.formater && !0 === t.separator ? e : (n = r,
                        e.replace(/^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([\.,]?\d{0,2}?)$/gi, (function(e, t, r, o, i) {
                              var a = ""
                                  , u = "";
                              if (void 0 !== t ? (a = t.replace(new RegExp(/,/gi,"gi"), n),
                                  u = ",") : void 0 !== r ? a = r.replace(new RegExp(/\./gi,"gi"), n) : void 0 !== o && (a = o.replace(new RegExp(/ /gi,"gi"), n)),
                              void 0 !== i) {
                                var c = "," !== u && "," !== n ? "," : ".";
                                a += void 0 !== i ? i.replace(new RegExp(/\.|,/gi,"gi"), c) : ""
                              }
                              return a
                            }
                        )))
                  }
                  var n;
                  return e
                }(e = t.formater ? e.toLocaleString(n, r) : parseInt(e).toString(), t)
          }
          function c(e) {
            return /^[0-9]+\.[0-9]+$/.test(e) ? parseFloat(e) : /^[0-9]+$/.test(e) ? parseInt(e) : /^true|false/i.test(e) ? /^true/i.test(e) : e
          }
          function f(e) {
            for (var t = e.offsetTop, r = e.offsetLeft, n = e.offsetWidth, o = e.offsetHeight; e.offsetParent; )
              t += (e = e.offsetParent).offsetTop,
                  r += e.offsetLeft;
            return t >= window.pageYOffset && r >= window.pageXOffset && t + o <= window.pageYOffset + window.innerHeight && r + n <= window.pageXOffset + window.innerWidth
          }
          function s() {
            return "IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype
          }
          e.exports = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , n = {
              start: 0,
              end: 100,
              duration: 2e3,
              delay: 10,
              once: !0,
              pulse: !1,
              decimals: 0,
              legacy: !0,
              filesizing: !1,
              currency: !1,
              separator: !1,
              formater: "us-US",
              selector: ".purecounter"
            }
                , a = o(e, n);
            function d() {
              var e = document.querySelectorAll(a.selector);
              if (0 !== e.length)
                if (s()) {
                  var t = new IntersectionObserver(p.bind(this),{
                    root: null,
                    rootMargin: "20px",
                    threshold: .5
                  });
                  e.forEach((function(e) {
                        t.observe(e)
                      }
                  ))
                } else
                  window.addEventListener && (l(e),
                      window.addEventListener("scroll", (function(t) {
                            l(e)
                          }
                      ), {
                        passive: !0
                      }))
            }
            function l(e) {
              e.forEach((function(e) {
                    !0 === v(e).legacy && f(e) && p([e])
                  }
              ))
            }
            function p(e, t) {
              e.forEach((function(e) {
                    var r = e.target || e
                        , n = v(r);
                    if (n.duration <= 0)
                      return r.innerHTML = u(n.end, n);
                    if (!t && !f(e) || t && e.intersectionRatio < .5) {
                      var o = n.start > n.end ? n.end : n.start;
                      return r.innerHTML = u(o, n)
                    }
                    setTimeout((function() {
                          return i(r, n)
                        }
                    ), n.delay)
                  }
              ))
            }
            function v(e) {
              var n = a
                  , i = [].filter.call(e.attributes, (function(e) {
                    return /^data-purecounter-/.test(e.name)
                  }
              ));
              return o(0 != i.length ? Object.assign.apply(Object, [{}].concat(r(i.map((function(e) {
                    var r = e.name
                        , n = e.value;
                    return t({}, r.replace("data-purecounter-", "").toLowerCase(), c(n))
                  }
              ))))) : {}, n)
            }
            d()
          }
        }
      },
          t = {},
          r = function r(n) {
            var o = t[n];
            if (void 0 !== o)
              return o.exports;
            var i = t[n] = {
              exports: {}
            };
            return e[n](i, i.exports, r),
                i.exports
          }(638),
          r;
      var e, t, r
    }
));
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.AOS = t()
}(this, function() {
  "use strict";
  var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
      , t = "Expected a function"
      , n = NaN
      , o = "[object Symbol]"
      , i = /^\s+|\s+$/g
      , a = /^[-+]0x[0-9a-f]+$/i
      , r = /^0b[01]+$/i
      , c = /^0o[0-7]+$/i
      , s = parseInt
      , u = "object" == typeof e && e && e.Object === Object && e
      , d = "object" == typeof self && self && self.Object === Object && self
      , l = u || d || Function("return this")()
      , f = Object.prototype.toString
      , m = Math.max
      , p = Math.min
      , b = function() {
    return l.Date.now()
  };
  function v(e, n, o) {
    var i, a, r, c, s, u, d = 0, l = !1, f = !1, v = !0;
    if ("function" != typeof e)
      throw new TypeError(t);
    function y(t) {
      var n = i
          , o = a;
      return i = a = void 0,
          d = t,
          c = e.apply(o, n)
    }
    function h(e) {
      var t = e - u;
      return void 0 === u || t >= n || t < 0 || f && e - d >= r
    }
    function k() {
      var e = b();
      if (h(e))
        return x(e);
      s = setTimeout(k, function(e) {
        var t = n - (e - u);
        return f ? p(t, r - (e - d)) : t
      }(e))
    }
    function x(e) {
      return s = void 0,
          v && i ? y(e) : (i = a = void 0,
              c)
    }
    function O() {
      var e = b()
          , t = h(e);
      if (i = arguments,
          a = this,
          u = e,
          t) {
        if (void 0 === s)
          return function(e) {
            return d = e,
                s = setTimeout(k, n),
                l ? y(e) : c
          }(u);
        if (f)
          return s = setTimeout(k, n),
              y(u)
      }
      return void 0 === s && (s = setTimeout(k, n)),
          c
    }
    return n = w(n) || 0,
    g(o) && (l = !!o.leading,
        r = (f = "maxWait"in o) ? m(w(o.maxWait) || 0, n) : r,
        v = "trailing"in o ? !!o.trailing : v),
        O.cancel = function() {
          void 0 !== s && clearTimeout(s),
              d = 0,
              i = u = a = s = void 0
        }
        ,
        O.flush = function() {
          return void 0 === s ? c : x(b())
        }
        ,
        O
  }
  function g(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t)
  }
  function w(e) {
    if ("number" == typeof e)
      return e;
    if (function(e) {
      return "symbol" == typeof e || function(e) {
        return !!e && "object" == typeof e
      }(e) && f.call(e) == o
    }(e))
      return n;
    if (g(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = g(t) ? t + "" : t
    }
    if ("string" != typeof e)
      return 0 === e ? e : +e;
    e = e.replace(i, "");
    var u = r.test(e);
    return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e
  }
  var y = function(e, n, o) {
    var i = !0
        , a = !0;
    if ("function" != typeof e)
      throw new TypeError(t);
    return g(o) && (i = "leading"in o ? !!o.leading : i,
        a = "trailing"in o ? !!o.trailing : a),
        v(e, n, {
          leading: i,
          maxWait: n,
          trailing: a
        })
  }
      , h = "Expected a function"
      , k = NaN
      , x = "[object Symbol]"
      , O = /^\s+|\s+$/g
      , j = /^[-+]0x[0-9a-f]+$/i
      , E = /^0b[01]+$/i
      , N = /^0o[0-7]+$/i
      , z = parseInt
      , C = "object" == typeof e && e && e.Object === Object && e
      , A = "object" == typeof self && self && self.Object === Object && self
      , q = C || A || Function("return this")()
      , L = Object.prototype.toString
      , T = Math.max
      , M = Math.min
      , S = function() {
    return q.Date.now()
  };
  function D(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t)
  }
  function H(e) {
    if ("number" == typeof e)
      return e;
    if (function(e) {
      return "symbol" == typeof e || function(e) {
        return !!e && "object" == typeof e
      }(e) && L.call(e) == x
    }(e))
      return k;
    if (D(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = D(t) ? t + "" : t
    }
    if ("string" != typeof e)
      return 0 === e ? e : +e;
    e = e.replace(O, "");
    var n = E.test(e);
    return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e
  }
  var $ = function(e, t, n) {
    var o, i, a, r, c, s, u = 0, d = !1, l = !1, f = !0;
    if ("function" != typeof e)
      throw new TypeError(h);
    function m(t) {
      var n = o
          , a = i;
      return o = i = void 0,
          u = t,
          r = e.apply(a, n)
    }
    function p(e) {
      var n = e - s;
      return void 0 === s || n >= t || n < 0 || l && e - u >= a
    }
    function b() {
      var e = S();
      if (p(e))
        return v(e);
      c = setTimeout(b, function(e) {
        var n = t - (e - s);
        return l ? M(n, a - (e - u)) : n
      }(e))
    }
    function v(e) {
      return c = void 0,
          f && o ? m(e) : (o = i = void 0,
              r)
    }
    function g() {
      var e = S()
          , n = p(e);
      if (o = arguments,
          i = this,
          s = e,
          n) {
        if (void 0 === c)
          return function(e) {
            return u = e,
                c = setTimeout(b, t),
                d ? m(e) : r
          }(s);
        if (l)
          return c = setTimeout(b, t),
              m(s)
      }
      return void 0 === c && (c = setTimeout(b, t)),
          r
    }
    return t = H(t) || 0,
    D(n) && (d = !!n.leading,
        a = (l = "maxWait"in n) ? T(H(n.maxWait) || 0, t) : a,
        f = "trailing"in n ? !!n.trailing : f),
        g.cancel = function() {
          void 0 !== c && clearTimeout(c),
              u = 0,
              o = s = i = c = void 0
        }
        ,
        g.flush = function() {
          return void 0 === c ? r : v(S())
        }
        ,
        g
  }
      , W = function() {};
  function P(e) {
    e && e.forEach(function(e) {
      var t = Array.prototype.slice.call(e.addedNodes)
          , n = Array.prototype.slice.call(e.removedNodes);
      if (function e(t) {
        var n = void 0
            , o = void 0;
        for (n = 0; n < t.length; n += 1) {
          if ((o = t[n]).dataset && o.dataset.aos)
            return !0;
          if (o.children && e(o.children))
            return !0
        }
        return !1
      }(t.concat(n)))
        return W()
    })
  }
  function Y() {
    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
  }
  var _ = {
    isSupported: function() {
      return !!Y()
    },
    ready: function(e, t) {
      var n = window.document
          , o = new (Y())(P);
      W = t,
          o.observe(n.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0
          })
    }
  }
      , B = function(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function")
  }
      , F = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1,
            o.configurable = !0,
        "value"in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
      }
    }
    return function(t, n, o) {
      return n && e(t.prototype, n),
      o && e(t, o),
          t
    }
  }()
      , I = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
    }
    return e
  }
      , K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
      , G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
      , J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
      , Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function R() {
    return navigator.userAgent || navigator.vendor || window.opera || ""
  }
  var U = new (function() {
    function e() {
      B(this, e)
    }
    return F(e, [{
      key: "phone",
      value: function() {
        var e = R();
        return !(!K.test(e) && !G.test(e.substr(0, 4)))
      }
    }, {
      key: "mobile",
      value: function() {
        var e = R();
        return !(!J.test(e) && !Q.test(e.substr(0, 4)))
      }
    }, {
      key: "tablet",
      value: function() {
        return this.mobile() && !this.phone()
      }
    }, {
      key: "ie11",
      value: function() {
        return "-ms-scroll-limit"in document.documentElement.style && "-ms-ime-align"in document.documentElement.style
      }
    }]),
        e
  }())
      , V = function(e, t) {
    var n = void 0;
    return U.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
      detail: t
    }) : n = new CustomEvent(e,{
      detail: t
    }),
        document.dispatchEvent(n)
  }
      , X = function(e) {
    return e.forEach(function(e, t) {
      return function(e, t) {
        var n = e.options
            , o = e.position
            , i = e.node
            , a = (e.data,
                function() {
                  e.animated && (function(e, t) {
                    t && t.forEach(function(t) {
                      return e.classList.remove(t)
                    })
                  }(i, n.animatedClassNames),
                      V("aos:out", i),
                  e.options.id && V("aos:in:" + e.options.id, i),
                      e.animated = !1)
                }
        );
        n.mirror && t >= o.out && !n.once ? a() : t >= o.in ? e.animated || (function(e, t) {
          t && t.forEach(function(t) {
            return e.classList.add(t)
          })
        }(i, n.animatedClassNames),
            V("aos:in", i),
        e.options.id && V("aos:in:" + e.options.id, i),
            e.animated = !0) : e.animated && !n.once && a()
      }(e, window.pageYOffset)
    })
  }
      , Z = function(e) {
    for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
      t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
          n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
          e = e.offsetParent;
    return {
      top: n,
      left: t
    }
  }
      , ee = function(e, t, n) {
    var o = e.getAttribute("data-aos-" + t);
    if (void 0 !== o) {
      if ("true" === o)
        return !0;
      if ("false" === o)
        return !1
    }
    return o || n
  }
      , te = function(e, t) {
    return e.forEach(function(e, n) {
      var o = ee(e.node, "mirror", t.mirror)
          , i = ee(e.node, "once", t.once)
          , a = ee(e.node, "id")
          , r = t.useClassNames && e.node.getAttribute("data-aos")
          , c = [t.animatedClassName].concat(r ? r.split(" ") : []).filter(function(e) {
        return "string" == typeof e
      });
      t.initClassName && e.node.classList.add(t.initClassName),
          e.position = {
            in: function(e, t, n) {
              var o = window.innerHeight
                  , i = ee(e, "anchor")
                  , a = ee(e, "anchor-placement")
                  , r = Number(ee(e, "offset", a ? 0 : t))
                  , c = a || n
                  , s = e;
              i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
              var u = Z(s).top - o;
              switch (c) {
                case "top-bottom":
                  break;
                case "center-bottom":
                  u += s.offsetHeight / 2;
                  break;
                case "bottom-bottom":
                  u += s.offsetHeight;
                  break;
                case "top-center":
                  u += o / 2;
                  break;
                case "center-center":
                  u += o / 2 + s.offsetHeight / 2;
                  break;
                case "bottom-center":
                  u += o / 2 + s.offsetHeight;
                  break;
                case "top-top":
                  u += o;
                  break;
                case "bottom-top":
                  u += o + s.offsetHeight;
                  break;
                case "center-top":
                  u += o + s.offsetHeight / 2
              }
              return u + r
            }(e.node, t.offset, t.anchorPlacement),
            out: o && function(e, t) {
              window.innerHeight;
              var n = ee(e, "anchor")
                  , o = ee(e, "offset", t)
                  , i = e;
              return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]),
              Z(i).top + i.offsetHeight - o
            }(e.node, t.offset)
          },
          e.options = {
            once: i,
            mirror: o,
            animatedClassNames: c,
            id: a
          }
    }),
        e
  }
      , ne = function() {
    var e = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(e, function(e) {
      return {
        node: e
      }
    })
  }
      , oe = []
      , ie = !1
      , ae = {
    offset: 120,
    delay: 0,
    easing: "ease",
    duration: 400,
    disable: !1,
    once: !1,
    mirror: !1,
    anchorPlacement: "top-bottom",
    startEvent: "DOMContentLoaded",
    animatedClassName: "aos-animate",
    initClassName: "aos-init",
    useClassNames: !1,
    disableMutationObserver: !1,
    throttleDelay: 99,
    debounceDelay: 50
  }
      , re = function() {
    return document.all && !window.atob
  }
      , ce = function() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = !0),
    ie && (oe = te(oe, ae),
        X(oe),
        window.addEventListener("scroll", y(function() {
          X(oe, ae.once)
        }, ae.throttleDelay)))
  }
      , se = function() {
    if (oe = ne(),
    de(ae.disable) || re())
      return ue();
    ce()
  }
      , ue = function() {
    oe.forEach(function(e, t) {
      e.node.removeAttribute("data-aos"),
          e.node.removeAttribute("data-aos-easing"),
          e.node.removeAttribute("data-aos-duration"),
          e.node.removeAttribute("data-aos-delay"),
      ae.initClassName && e.node.classList.remove(ae.initClassName),
      ae.animatedClassName && e.node.classList.remove(ae.animatedClassName)
    })
  }
      , de = function(e) {
    return !0 === e || "mobile" === e && U.mobile() || "phone" === e && U.phone() || "tablet" === e && U.tablet() || "function" == typeof e && !0 === e()
  };
  return {
    init: function(e) {
      return ae = I(ae, e),
          oe = ne(),
      ae.disableMutationObserver || _.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
          ae.disableMutationObserver = !0),
      ae.disableMutationObserver || _.ready("[data-aos]", se),
          de(ae.disable) || re() ? ue() : (document.querySelector("body").setAttribute("data-aos-easing", ae.easing),
              document.querySelector("body").setAttribute("data-aos-duration", ae.duration),
              document.querySelector("body").setAttribute("data-aos-delay", ae.delay),
              -1 === ["DOMContentLoaded", "load"].indexOf(ae.startEvent) ? document.addEventListener(ae.startEvent, function() {
                ce(!0)
              }) : window.addEventListener("load", function() {
                ce(!0)
              }),
          "DOMContentLoaded" === ae.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && ce(!0),
              window.addEventListener("resize", $(ce, ae.debounceDelay, !0)),
              window.addEventListener("orientationchange", $(ce, ae.debounceDelay, !0)),
              oe)
    },
    refresh: ce,
    refreshHard: se
  }
});

/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
      "use strict";
      const t = new Map
          , e = {
        set(e, i, n) {
          t.has(e) || t.set(e, new Map);
          const s = t.get(e);
          s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        },
        get: (e,i)=>t.has(e) && t.get(e).get(i) || null,
        remove(e, i) {
          if (!t.has(e))
            return;
          const n = t.get(e);
          n.delete(i),
          0 === n.size && t.delete(e)
        }
      }
          , i = "transitionend"
          , n = t=>(t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ((t,e)=>`#${CSS.escape(e)}`))),
          t)
          , s = t=>{
        t.dispatchEvent(new Event(i))
      }
          , o = t=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
      void 0 !== t.nodeType)
          , r = t=>o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null
          , a = t=>{
        if (!o(t) || 0 === t.getClientRects().length)
          return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility")
            , i = t.closest("details:not([open])");
        if (!i)
          return e;
        if (i !== t) {
          const e = t.closest("summary");
          if (e && e.parentNode !== i)
            return !1;
          if (null === e)
            return !1
        }
        return e
      }
          , l = t=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
          , c = t=>{
        if (!document.documentElement.attachShadow)
          return null;
        if ("function" == typeof t.getRootNode) {
          const e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
      }
          , h = ()=>{}
          , d = t=>{
        t.offsetHeight
      }
          , u = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
          , f = []
          , p = ()=>"rtl" === document.documentElement.dir
          , m = t=>{
        var e;
        e = ()=>{
          const e = u();
          if (e) {
            const i = t.NAME
                , n = e.fn[i];
            e.fn[i] = t.jQueryInterface,
                e.fn[i].Constructor = t,
                e.fn[i].noConflict = ()=>(e.fn[i] = n,
                    t.jQueryInterface)
          }
        }
            ,
            "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (()=>{
                  for (const t of f)
                    t()
                }
            )),
                f.push(e)) : e()
      }
          , g = (t,e=[],i=t)=>"function" == typeof t ? t(...e) : i
          , _ = (t,e,n=!0)=>{
        if (!n)
          return void g(t);
        const o = (t=>{
              if (!t)
                return 0;
              let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
              const n = Number.parseFloat(e)
                  , s = Number.parseFloat(i);
              return n || s ? (e = e.split(",")[0],
                  i = i.split(",")[0],
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            }
        )(e) + 5;
        let r = !1;
        const a = ({target: n})=>{
              n === e && (r = !0,
                  e.removeEventListener(i, a),
                  g(t))
            }
        ;
        e.addEventListener(i, a),
            setTimeout((()=>{
                  r || s(e)
                }
            ), o)
      }
          , b = (t,e,i,n)=>{
        const s = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1,
        n && (o = (o + s) % s),
            t[Math.max(0, Math.min(o, s - 1))])
      }
          , v = /[^.]*(?=\..*)\.|.*/
          , y = /\..*/
          , w = /::\d+$/
          , A = {};
      let E = 1;
      const T = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      }
          , C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
      function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++
      }
      function x(t) {
        const e = O(t);
        return t.uidEvent = e,
            A[e] = A[e] || {},
            A[e]
      }
      function k(t, e, i=null) {
        return Object.values(t).find((t=>t.callable === e && t.delegationSelector === i))
      }
      function L(t, e, i) {
        const n = "string" == typeof e
            , s = n ? i : e || i;
        let o = I(t);
        return C.has(o) || (o = t),
            [n, s, o]
      }
      function S(t, e, i, n, s) {
        if ("string" != typeof e || !t)
          return;
        let[o,r,a] = L(e, i, n);
        if (e in T) {
          const t = t=>function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                  return t.call(this, e)
              }
          ;
          r = t(r)
        }
        const l = x(t)
            , c = l[a] || (l[a] = {})
            , h = k(c, r, o ? i : null);
        if (h)
          return void (h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, ""))
            , u = o ? function(t, e, i) {
          return function n(s) {
            const o = t.querySelectorAll(e);
            for (let {target: r} = s; r && r !== this; r = r.parentNode)
              for (const a of o)
                if (a === r)
                  return P(s, {
                    delegateTarget: r
                  }),
                  n.oneOff && N.off(t, s.type, e, i),
                      i.apply(r, [s])
          }
        }(t, i, r) : function(t, e) {
          return function i(n) {
            return P(n, {
              delegateTarget: t
            }),
            i.oneOff && N.off(t, n.type, e),
                e.apply(t, [n])
          }
        }(t, r);
        u.delegationSelector = o ? i : null,
            u.callable = r,
            u.oneOff = s,
            u.uidEvent = d,
            c[d] = u,
            t.addEventListener(a, u, o)
      }
      function D(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)),
            delete e[i][o.uidEvent])
      }
      function $(t, e, i, n) {
        const s = e[i] || {};
        for (const [o,r] of Object.entries(s))
          o.includes(n) && D(t, e, i, r.callable, r.delegationSelector)
      }
      function I(t) {
        return t = t.replace(y, ""),
        T[t] || t
      }
      const N = {
        on(t, e, i, n) {
          S(t, e, i, n, !1)
        },
        one(t, e, i, n) {
          S(t, e, i, n, !0)
        },
        off(t, e, i, n) {
          if ("string" != typeof e || !t)
            return;
          const [s,o,r] = L(e, i, n)
              , a = r !== e
              , l = x(t)
              , c = l[r] || {}
              , h = e.startsWith(".");
          if (void 0 === o) {
            if (h)
              for (const i of Object.keys(l))
                $(t, l, i, e.slice(1));
            for (const [i,n] of Object.entries(c)) {
              const s = i.replace(w, "");
              a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector)
            }
          } else {
            if (!Object.keys(c).length)
              return;
            D(t, l, r, o, s ? i : null)
          }
        },
        trigger(t, e, i) {
          if ("string" != typeof e || !t)
            return null;
          const n = u();
          let s = null
              , o = !0
              , r = !0
              , a = !1;
          e !== I(e) && n && (s = n.Event(e, i),
              n(t).trigger(s),
              o = !s.isPropagationStopped(),
              r = !s.isImmediatePropagationStopped(),
              a = s.isDefaultPrevented());
          const l = P(new Event(e,{
            bubbles: o,
            cancelable: !0
          }), i);
          return a && l.preventDefault(),
          r && t.dispatchEvent(l),
          l.defaultPrevented && s && s.preventDefault(),
              l
        }
      };
      function P(t, e={}) {
        for (const [i,n] of Object.entries(e))
          try {
            t[i] = n
          } catch (e) {
            Object.defineProperty(t, i, {
              configurable: !0,
              get: ()=>n
            })
          }
        return t
      }
      function M(t) {
        if ("true" === t)
          return !0;
        if ("false" === t)
          return !1;
        if (t === Number(t).toString())
          return Number(t);
        if ("" === t || "null" === t)
          return null;
        if ("string" != typeof t)
          return t;
        try {
          return JSON.parse(decodeURIComponent(t))
        } catch (e) {
          return t
        }
      }
      function j(t) {
        return t.replace(/[A-Z]/g, (t=>`-${t.toLowerCase()}`))
      }
      const F = {
        setDataAttribute(t, e, i) {
          t.setAttribute(`data-bs-${j(e)}`, i)
        },
        removeDataAttribute(t, e) {
          t.removeAttribute(`data-bs-${j(e)}`)
        },
        getDataAttributes(t) {
          if (!t)
            return {};
          const e = {}
              , i = Object.keys(t.dataset).filter((t=>t.startsWith("bs") && !t.startsWith("bsConfig")));
          for (const n of i) {
            let i = n.replace(/^bs/, "");
            i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                e[i] = M(t.dataset[n])
          }
          return e
        },
        getDataAttribute: (t,e)=>M(t.getAttribute(`data-bs-${j(e)}`))
      };
      class H {
        static get Default() {
          return {}
        }
        static get DefaultType() {
          return {}
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
          return t = this._mergeConfigObj(t),
              t = this._configAfterMerge(t),
              this._typeCheckConfig(t),
              t
        }
        _configAfterMerge(t) {
          return t
        }
        _mergeConfigObj(t, e) {
          const i = o(e) ? F.getDataAttribute(e, "config") : {};
          return {
            ...this.constructor.Default,
            ..."object" == typeof i ? i : {},
            ...o(e) ? F.getDataAttributes(e) : {},
            ..."object" == typeof t ? t : {}
          }
        }
        _typeCheckConfig(t, e=this.constructor.DefaultType) {
          for (const [n,s] of Object.entries(e)) {
            const e = t[n]
                , r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(s).test(r))
              throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
          }
          var i
        }
      }
      class W extends H {
        constructor(t, i) {
          super(),
          (t = r(t)) && (this._element = t,
              this._config = this._getConfig(i),
              e.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
          e.remove(this._element, this.constructor.DATA_KEY),
              N.off(this._element, this.constructor.EVENT_KEY);
          for (const t of Object.getOwnPropertyNames(this))
            this[t] = null
        }
        _queueCallback(t, e, i=!0) {
          _(t, e, i)
        }
        _getConfig(t) {
          return t = this._mergeConfigObj(t, this._element),
              t = this._configAfterMerge(t),
              this._typeCheckConfig(t),
              t
        }
        static getInstance(t) {
          return e.get(r(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
          return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
          return "5.3.2"
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`
        }
        static eventName(t) {
          return `${t}${this.EVENT_KEY}`
        }
      }
      const B = t=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
          let i = t.getAttribute("href");
          if (!i || !i.includes("#") && !i.startsWith("."))
            return null;
          i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
              e = i && "#" !== i ? n(i.trim()) : null
        }
        return e
      }
          , z = {
        find: (t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t,e=document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),
        parents(t, e) {
          const i = [];
          let n = t.parentNode.closest(e);
          for (; n; )
            i.push(n),
                n = n.parentNode.closest(e);
          return i
        },
        prev(t, e) {
          let i = t.previousElementSibling;
          for (; i; ) {
            if (i.matches(e))
              return [i];
            i = i.previousElementSibling
          }
          return []
        },
        next(t, e) {
          let i = t.nextElementSibling;
          for (; i; ) {
            if (i.matches(e))
              return [i];
            i = i.nextElementSibling
          }
          return []
        },
        focusableChildren(t) {
          const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");
          return this.find(e, t).filter((t=>!l(t) && a(t)))
        },
        getSelectorFromElement(t) {
          const e = B(t);
          return e && z.findOne(e) ? e : null
        },
        getElementFromSelector(t) {
          const e = B(t);
          return e ? z.findOne(e) : null
        },
        getMultipleElementsFromSelector(t) {
          const e = B(t);
          return e ? z.find(e) : []
        }
      }
          , R = (t,e="hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`
            , n = t.NAME;
        N.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
              if (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
                  l(this))
                return;
              const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
              t.getOrCreateInstance(s)[e]()
            }
        ))
      }
          , q = ".bs.alert"
          , V = `close${q}`
          , K = `closed${q}`;
      class Q extends W {
        static get NAME() {
          return "alert"
        }
        close() {
          if (N.trigger(this._element, V).defaultPrevented)
            return;
          this._element.classList.remove("show");
          const t = this._element.classList.contains("fade");
          this._queueCallback((()=>this._destroyElement()), this._element, t)
        }
        _destroyElement() {
          this._element.remove(),
              N.trigger(this._element, K),
              this.dispose()
        }
        static jQueryInterface(t) {
          return this.each((function() {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                    throw new TypeError(`No method named "${t}"`);
                  e[t](this)
                }
              }
          ))
        }
      }
      R(Q, "close"),
          m(Q);
      const X = '[data-bs-toggle="button"]';
      class Y extends W {
        static get NAME() {
          return "button"
        }
        toggle() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
          return this.each((function() {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]()
              }
          ))
        }
      }
      N.on(document, "click.bs.button.data-api", X, (t=>{
            t.preventDefault();
            const e = t.target.closest(X);
            Y.getOrCreateInstance(e).toggle()
          }
      )),
          m(Y);
      const U = ".bs.swipe"
          , G = `touchstart${U}`
          , J = `touchmove${U}`
          , Z = `touchend${U}`
          , tt = `pointerdown${U}`
          , et = `pointerup${U}`
          , it = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
      }
          , nt = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
      };
      class st extends H {
        constructor(t, e) {
          super(),
              this._element = t,
          t && st.isSupported() && (this._config = this._getConfig(e),
              this._deltaX = 0,
              this._supportPointerEvents = Boolean(window.PointerEvent),
              this._initEvents())
        }
        static get Default() {
          return it
        }
        static get DefaultType() {
          return nt
        }
        static get NAME() {
          return "swipe"
        }
        dispose() {
          N.off(this._element, U)
        }
        _start(t) {
          this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
          this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX),
              this._handleSwipe(),
              g(this._config.endCallback)
        }
        _move(t) {
          this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
          const t = Math.abs(this._deltaX);
          if (t <= 40)
            return;
          const e = t / this._deltaX;
          this._deltaX = 0,
          e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
          this._supportPointerEvents ? (N.on(this._element, tt, (t=>this._start(t))),
              N.on(this._element, et, (t=>this._end(t))),
              this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t=>this._start(t))),
              N.on(this._element, J, (t=>this._move(t))),
              N.on(this._element, Z, (t=>this._end(t))))
        }
        _eventIsPointerPenTouch(t) {
          return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
          return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
        }
      }
      const ot = ".bs.carousel"
          , rt = ".data-api"
          , at = "next"
          , lt = "prev"
          , ct = "left"
          , ht = "right"
          , dt = `slide${ot}`
          , ut = `slid${ot}`
          , ft = `keydown${ot}`
          , pt = `mouseenter${ot}`
          , mt = `mouseleave${ot}`
          , gt = `dragstart${ot}`
          , _t = `load${ot}${rt}`
          , bt = `click${ot}${rt}`
          , vt = "carousel"
          , yt = "active"
          , wt = ".active"
          , At = ".carousel-item"
          , Et = wt + At
          , Tt = {
        ArrowLeft: ht,
        ArrowRight: ct
      }
          , Ct = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
      }
          , Ot = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
      };
      class xt extends W {
        constructor(t, e) {
          super(t, e),
              this._interval = null,
              this._activeElement = null,
              this._isSliding = !1,
              this.touchTimeout = null,
              this._swipeHelper = null,
              this._indicatorsElement = z.findOne(".carousel-indicators", this._element),
              this._addEventListeners(),
          this._config.ride === vt && this.cycle()
        }
        static get Default() {
          return Ct
        }
        static get DefaultType() {
          return Ot
        }
        static get NAME() {
          return "carousel"
        }
        next() {
          this._slide(at)
        }
        nextWhenVisible() {
          !document.hidden && a(this._element) && this.next()
        }
        prev() {
          this._slide(lt)
        }
        pause() {
          this._isSliding && s(this._element),
              this._clearInterval()
        }
        cycle() {
          this._clearInterval(),
              this._updateInterval(),
              this._interval = setInterval((()=>this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
          this._config.ride && (this._isSliding ? N.one(this._element, ut, (()=>this.cycle())) : this.cycle())
        }
        to(t) {
          const e = this._getItems();
          if (t > e.length - 1 || t < 0)
            return;
          if (this._isSliding)
            return void N.one(this._element, ut, (()=>this.to(t)));
          const i = this._getItemIndex(this._getActive());
          if (i === t)
            return;
          const n = t > i ? at : lt;
          this._slide(n, e[t])
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(),
              super.dispose()
        }
        _configAfterMerge(t) {
          return t.defaultInterval = t.interval,
              t
        }
        _addEventListeners() {
          this._config.keyboard && N.on(this._element, ft, (t=>this._keydown(t))),
          "hover" === this._config.pause && (N.on(this._element, pt, (()=>this.pause())),
              N.on(this._element, mt, (()=>this._maybeEnableCycle()))),
          this._config.touch && st.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
          for (const t of z.find(".carousel-item img", this._element))
            N.on(t, gt, (t=>t.preventDefault()));
          const t = {
            leftCallback: ()=>this._slide(this._directionToOrder(ct)),
            rightCallback: ()=>this._slide(this._directionToOrder(ht)),
            endCallback: ()=>{
              "hover" === this._config.pause && (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
                  this.touchTimeout = setTimeout((()=>this._maybeEnableCycle()), 500 + this._config.interval))
            }
          };
          this._swipeHelper = new st(this._element,t)
        }
        _keydown(t) {
          if (/input|textarea/i.test(t.target.tagName))
            return;
          const e = Tt[t.key];
          e && (t.preventDefault(),
              this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
          return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
          if (!this._indicatorsElement)
            return;
          const e = z.findOne(wt, this._indicatorsElement);
          e.classList.remove(yt),
              e.removeAttribute("aria-current");
          const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
          i && (i.classList.add(yt),
              i.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
          const t = this._activeElement || this._getActive();
          if (!t)
            return;
          const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
          this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e=null) {
          if (this._isSliding)
            return;
          const i = this._getActive()
              , n = t === at
              , s = e || b(this._getItems(), i, n, this._config.wrap);
          if (s === i)
            return;
          const o = this._getItemIndex(s)
              , r = e=>N.trigger(this._element, e, {
            relatedTarget: s,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o
          });
          if (r(dt).defaultPrevented)
            return;
          if (!i || !s)
            return;
          const a = Boolean(this._interval);
          this.pause(),
              this._isSliding = !0,
              this._setActiveIndicatorElement(o),
              this._activeElement = s;
          const l = n ? "carousel-item-start" : "carousel-item-end"
              , c = n ? "carousel-item-next" : "carousel-item-prev";
          s.classList.add(c),
              d(s),
              i.classList.add(l),
              s.classList.add(l),
              this._queueCallback((()=>{
                    s.classList.remove(l, c),
                        s.classList.add(yt),
                        i.classList.remove(yt, c, l),
                        this._isSliding = !1,
                        r(ut)
                  }
              ), i, this._isAnimated()),
          a && this.cycle()
        }
        _isAnimated() {
          return this._element.classList.contains("slide")
        }
        _getActive() {
          return z.findOne(Et, this._element)
        }
        _getItems() {
          return z.find(At, this._element)
        }
        _clearInterval() {
          this._interval && (clearInterval(this._interval),
              this._interval = null)
        }
        _directionToOrder(t) {
          return p() ? t === ct ? lt : at : t === ct ? at : lt
        }
        _orderToDirection(t) {
          return p() ? t === lt ? ct : ht : t === lt ? ht : ct
        }
        static jQueryInterface(t) {
          return this.each((function() {
                const e = xt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                  if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                      throw new TypeError(`No method named "${t}"`);
                    e[t]()
                  }
                } else
                  e.to(t)
              }
          ))
        }
      }
      N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", (function(t) {
            const e = z.getElementFromSelector(this);
            if (!e || !e.classList.contains(vt))
              return;
            t.preventDefault();
            const i = xt.getOrCreateInstance(e)
                , n = this.getAttribute("data-bs-slide-to");
            return n ? (i.to(n),
                void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(),
                void i._maybeEnableCycle()) : (i.prev(),
                void i._maybeEnableCycle())
          }
      )),
          N.on(window, _t, (()=>{
                const t = z.find('[data-bs-ride="carousel"]');
                for (const e of t)
                  xt.getOrCreateInstance(e)
              }
          )),
          m(xt);
      const kt = ".bs.collapse"
          , Lt = `show${kt}`
          , St = `shown${kt}`
          , Dt = `hide${kt}`
          , $t = `hidden${kt}`
          , It = `click${kt}.data-api`
          , Nt = "show"
          , Pt = "collapse"
          , Mt = "collapsing"
          , jt = `:scope .${Pt} .${Pt}`
          , Ft = '[data-bs-toggle="collapse"]'
          , Ht = {
        parent: null,
        toggle: !0
      }
          , Wt = {
        parent: "(null|element)",
        toggle: "boolean"
      };
      class Bt extends W {
        constructor(t, e) {
          super(t, e),
              this._isTransitioning = !1,
              this._triggerArray = [];
          const i = z.find(Ft);
          for (const t of i) {
            const e = z.getSelectorFromElement(t)
                , i = z.find(e).filter((t=>t === this._element));
            null !== e && i.length && this._triggerArray.push(t)
          }
          this._initializeChildren(),
          this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle()
        }
        static get Default() {
          return Ht
        }
        static get DefaultType() {
          return Wt
        }
        static get NAME() {
          return "collapse"
        }
        toggle() {
          this._isShown() ? this.hide() : this.show()
        }
        show() {
          if (this._isTransitioning || this._isShown())
            return;
          let t = [];
          if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t !== this._element)).map((t=>Bt.getOrCreateInstance(t, {
            toggle: !1
          })))),
          t.length && t[0]._isTransitioning)
            return;
          if (N.trigger(this._element, Lt).defaultPrevented)
            return;
          for (const e of t)
            e.hide();
          const e = this._getDimension();
          this._element.classList.remove(Pt),
              this._element.classList.add(Mt),
              this._element.style[e] = 0,
              this._addAriaAndCollapsedClass(this._triggerArray, !0),
              this._isTransitioning = !0;
          const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
          this._queueCallback((()=>{
                this._isTransitioning = !1,
                    this._element.classList.remove(Mt),
                    this._element.classList.add(Pt, Nt),
                    this._element.style[e] = "",
                    N.trigger(this._element, St)
              }
          ), this._element, !0),
              this._element.style[e] = `${this._element[i]}px`
        }
        hide() {
          if (this._isTransitioning || !this._isShown())
            return;
          if (N.trigger(this._element, Dt).defaultPrevented)
            return;
          const t = this._getDimension();
          this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
              d(this._element),
              this._element.classList.add(Mt),
              this._element.classList.remove(Pt, Nt);
          for (const t of this._triggerArray) {
            const e = z.getElementFromSelector(t);
            e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
          }
          this._isTransitioning = !0,
              this._element.style[t] = "",
              this._queueCallback((()=>{
                    this._isTransitioning = !1,
                        this._element.classList.remove(Mt),
                        this._element.classList.add(Pt),
                        N.trigger(this._element, $t)
                  }
              ), this._element, !0)
        }
        _isShown(t=this._element) {
          return t.classList.contains(Nt)
        }
        _configAfterMerge(t) {
          return t.toggle = Boolean(t.toggle),
              t.parent = r(t.parent),
              t
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
          if (!this._config.parent)
            return;
          const t = this._getFirstLevelChildren(Ft);
          for (const e of t) {
            const t = z.getElementFromSelector(e);
            t && this._addAriaAndCollapsedClass([e], this._isShown(t))
          }
        }
        _getFirstLevelChildren(t) {
          const e = z.find(jt, this._config.parent);
          return z.find(t, this._config.parent).filter((t=>!e.includes(t)))
        }
        _addAriaAndCollapsedClass(t, e) {
          if (t.length)
            for (const i of t)
              i.classList.toggle("collapsed", !e),
                  i.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
          const e = {};
          return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
              this.each((function() {
                    const i = Bt.getOrCreateInstance(this, e);
                    if ("string" == typeof t) {
                      if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                      i[t]()
                    }
                  }
              ))
        }
      }
      N.on(document, It, Ft, (function(t) {
            ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
            for (const t of z.getMultipleElementsFromSelector(this))
              Bt.getOrCreateInstance(t, {
                toggle: !1
              }).toggle()
          }
      )),
          m(Bt);
      var zt = "top"
          , Rt = "bottom"
          , qt = "right"
          , Vt = "left"
          , Kt = "auto"
          , Qt = [zt, Rt, qt, Vt]
          , Xt = "start"
          , Yt = "end"
          , Ut = "clippingParents"
          , Gt = "viewport"
          , Jt = "popper"
          , Zt = "reference"
          , te = Qt.reduce((function(t, e) {
            return t.concat([e + "-" + Xt, e + "-" + Yt])
          }
      ), [])
          , ee = [].concat(Qt, [Kt]).reduce((function(t, e) {
            return t.concat([e, e + "-" + Xt, e + "-" + Yt])
          }
      ), [])
          , ie = "beforeRead"
          , ne = "read"
          , se = "afterRead"
          , oe = "beforeMain"
          , re = "main"
          , ae = "afterMain"
          , le = "beforeWrite"
          , ce = "write"
          , he = "afterWrite"
          , de = [ie, ne, se, oe, re, ae, le, ce, he];
      function ue(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
      }
      function fe(t) {
        if (null == t)
          return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return e && e.defaultView || window
        }
        return t
      }
      function pe(t) {
        return t instanceof fe(t).Element || t instanceof Element
      }
      function me(t) {
        return t instanceof fe(t).HTMLElement || t instanceof HTMLElement
      }
      function ge(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot)
      }
      const _e = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
          var e = t.state;
          Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {}
                    , n = e.attributes[t] || {}
                    , s = e.elements[t];
                me(s) && ue(s) && (Object.assign(s.style, i),
                    Object.keys(n).forEach((function(t) {
                          var e = n[t];
                          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                        }
                    )))
              }
          ))
        },
        effect: function(t) {
          var e = t.state
              , i = {
            popper: {
              position: e.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
          return Object.assign(e.elements.popper.style, i.popper),
              e.styles = i,
          e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
              function() {
                Object.keys(e.elements).forEach((function(t) {
                      var n = e.elements[t]
                          , s = e.attributes[t] || {}
                          , o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                            return t[e] = "",
                                t
                          }
                      ), {});
                      me(n) && ue(n) && (Object.assign(n.style, o),
                          Object.keys(s).forEach((function(t) {
                                n.removeAttribute(t)
                              }
                          )))
                    }
                ))
              }
        },
        requires: ["computeStyles"]
      };
      function be(t) {
        return t.split("-")[0]
      }
      var ve = Math.max
          , ye = Math.min
          , we = Math.round;
      function Ae() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map((function(t) {
              return t.brand + "/" + t.version
            }
        )).join(" ") : navigator.userAgent
      }
      function Ee() {
        return !/^((?!chrome|android).)*safari/i.test(Ae())
      }
      function Te(t, e, i) {
        void 0 === e && (e = !1),
        void 0 === i && (i = !1);
        var n = t.getBoundingClientRect()
            , s = 1
            , o = 1;
        e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1,
            o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
        var r = (pe(t) ? fe(t) : window).visualViewport
            , a = !Ee() && i
            , l = (n.left + (a && r ? r.offsetLeft : 0)) / s
            , c = (n.top + (a && r ? r.offsetTop : 0)) / o
            , h = n.width / s
            , d = n.height / o;
        return {
          width: h,
          height: d,
          top: c,
          right: l + h,
          bottom: c + d,
          left: l,
          x: l,
          y: c
        }
      }
      function Ce(t) {
        var e = Te(t)
            , i = t.offsetWidth
            , n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width),
        Math.abs(e.height - n) <= 1 && (n = e.height),
            {
              x: t.offsetLeft,
              y: t.offsetTop,
              width: i,
              height: n
            }
      }
      function Oe(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e))
          return !0;
        if (i && ge(i)) {
          var n = e;
          do {
            if (n && t.isSameNode(n))
              return !0;
            n = n.parentNode || n.host
          } while (n)
        }
        return !1
      }
      function xe(t) {
        return fe(t).getComputedStyle(t)
      }
      function ke(t) {
        return ["table", "td", "th"].indexOf(ue(t)) >= 0
      }
      function Le(t) {
        return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement
      }
      function Se(t) {
        return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t)
      }
      function De(t) {
        return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null
      }
      function $e(t) {
        for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position; )
          i = De(i);
        return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function(t) {
          var e = /firefox/i.test(Ae());
          if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position)
            return null;
          var i = Se(t);
          for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0; ) {
            var n = xe(i);
            if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter)
              return i;
            i = i.parentNode
          }
          return null
        }(t) || e
      }
      function Ie(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
      }
      function Ne(t, e, i) {
        return ve(t, ye(e, i))
      }
      function Pe(t) {
        return Object.assign({}, {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, t)
      }
      function Me(t, e) {
        return e.reduce((function(e, i) {
              return e[i] = t,
                  e
            }
        ), {})
      }
      const je = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
          var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = be(i.placement), l = Ie(a), c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";
          if (o && r) {
            var h = function(t, e) {
              return Pe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                placement: e.placement
              })) : t) ? t : Me(t, Qt))
            }(s.padding, i)
                , d = Ce(o)
                , u = "y" === l ? zt : Vt
                , f = "y" === l ? Rt : qt
                , p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c]
                , m = r[l] - i.rects.reference[l]
                , g = $e(o)
                , _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0
                , b = p / 2 - m / 2
                , v = h[u]
                , y = _ - d[c] - h[f]
                , w = _ / 2 - d[c] / 2 + b
                , A = Ne(v, w, y)
                , E = l;
            i.modifiersData[n] = ((e = {})[E] = A,
                e.centerOffset = A - w,
                e)
          }
        },
        effect: function(t) {
          var e = t.state
              , i = t.options.element
              , n = void 0 === i ? "[data-popper-arrow]" : i;
          null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function Fe(t) {
        return t.split("-")[1]
      }
      var He = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function We(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u, p = r.y, m = void 0 === p ? 0 : p, g = "function" == typeof h ? h({
          x: f,
          y: m
        }) : {
          x: f,
          y: m
        };
        f = g.x,
            m = g.y;
        var _ = r.hasOwnProperty("x")
            , b = r.hasOwnProperty("y")
            , v = Vt
            , y = zt
            , w = window;
        if (c) {
          var A = $e(i)
              , E = "clientHeight"
              , T = "clientWidth";
          A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight",
              T = "scrollWidth"),
          (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt,
              m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height,
              m *= l ? 1 : -1),
          s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt,
              f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width,
              f *= l ? 1 : -1)
        }
        var C, O = Object.assign({
          position: a
        }, c && He), x = !0 === h ? function(t, e) {
          var i = t.x
              , n = t.y
              , s = e.devicePixelRatio || 1;
          return {
            x: we(i * s) / s || 0,
            y: we(n * s) / s || 0
          }
        }({
          x: f,
          y: m
        }, fe(i)) : {
          x: f,
          y: m
        };
        return f = x.x,
            m = x.y,
            l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "",
                C[v] = _ ? "0" : "",
                C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)",
                C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "",
                e[v] = _ ? f + "px" : "",
                e.transform = "",
                e))
      }
      const Be = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
          var e = t.state
              , i = t.options
              , n = i.gpuAcceleration
              , s = void 0 === n || n
              , o = i.adaptive
              , r = void 0 === o || o
              , a = i.roundOffsets
              , l = void 0 === a || a
              , c = {
            placement: be(e.placement),
            variation: Fe(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: s,
            isFixed: "fixed" === e.options.strategy
          };
          null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: r,
            roundOffsets: l
          })))),
          null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l
          })))),
              e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
              })
        },
        data: {}
      };
      var ze = {
        passive: !0
      };
      const Re = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
          var e = t.state
              , i = t.instance
              , n = t.options
              , s = n.scroll
              , o = void 0 === s || s
              , r = n.resize
              , a = void 0 === r || r
              , l = fe(e.elements.popper)
              , c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return o && c.forEach((function(t) {
                t.addEventListener("scroll", i.update, ze)
              }
          )),
          a && l.addEventListener("resize", i.update, ze),
              function() {
                o && c.forEach((function(t) {
                      t.removeEventListener("scroll", i.update, ze)
                    }
                )),
                a && l.removeEventListener("resize", i.update, ze)
              }
        },
        data: {}
      };
      var qe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function Ve(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
              return qe[t]
            }
        ))
      }
      var Ke = {
        start: "end",
        end: "start"
      };
      function Qe(t) {
        return t.replace(/start|end/g, (function(t) {
              return Ke[t]
            }
        ))
      }
      function Xe(t) {
        var e = fe(t);
        return {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        }
      }
      function Ye(t) {
        return Te(Le(t)).left + Xe(t).scrollLeft
      }
      function Ue(t) {
        var e = xe(t)
            , i = e.overflow
            , n = e.overflowX
            , s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
      }
      function Ge(t) {
        return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t))
      }
      function Je(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ge(t)
            , s = n === (null == (i = t.ownerDocument) ? void 0 : i.body)
            , o = fe(n)
            , r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n
            , a = e.concat(r);
        return s ? a : a.concat(Je(Se(r)))
      }
      function Ze(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height
        })
      }
      function ti(t, e, i) {
        return e === Gt ? Ze(function(t, e) {
          var i = fe(t)
              , n = Le(t)
              , s = i.visualViewport
              , o = n.clientWidth
              , r = n.clientHeight
              , a = 0
              , l = 0;
          if (s) {
            o = s.width,
                r = s.height;
            var c = Ee();
            (c || !c && "fixed" === e) && (a = s.offsetLeft,
                l = s.offsetTop)
          }
          return {
            width: o,
            height: r,
            x: a + Ye(t),
            y: l
          }
        }(t, i)) : pe(e) ? function(t, e) {
          var i = Te(t, !1, "fixed" === e);
          return i.top = i.top + t.clientTop,
              i.left = i.left + t.clientLeft,
              i.bottom = i.top + t.clientHeight,
              i.right = i.left + t.clientWidth,
              i.width = t.clientWidth,
              i.height = t.clientHeight,
              i.x = i.left,
              i.y = i.top,
              i
        }(e, i) : Ze(function(t) {
          var e, i = Le(t), n = Xe(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + Ye(t), l = -n.scrollTop;
          return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o),
              {
                width: o,
                height: r,
                x: a,
                y: l
              }
        }(Le(t)))
      }
      function ei(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? be(s) : null, r = s ? Fe(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
          case zt:
            e = {
              x: a,
              y: i.y - n.height
            };
            break;
          case Rt:
            e = {
              x: a,
              y: i.y + i.height
            };
            break;
          case qt:
            e = {
              x: i.x + i.width,
              y: l
            };
            break;
          case Vt:
            e = {
              x: i.x - n.width,
              y: l
            };
            break;
          default:
            e = {
              x: i.x,
              y: i.y
            }
        }
        var c = o ? Ie(o) : null;
        if (null != c) {
          var h = "y" === c ? "height" : "width";
          switch (r) {
            case Xt:
              e[c] = e[c] - (i[h] / 2 - n[h] / 2);
              break;
            case Yt:
              e[c] = e[c] + (i[h] / 2 - n[h] / 2)
          }
        }
        return e
      }
      function ii(t, e) {
        void 0 === e && (e = {});
        var i = e
            , n = i.placement
            , s = void 0 === n ? t.placement : n
            , o = i.strategy
            , r = void 0 === o ? t.strategy : o
            , a = i.boundary
            , l = void 0 === a ? Ut : a
            , c = i.rootBoundary
            , h = void 0 === c ? Gt : c
            , d = i.elementContext
            , u = void 0 === d ? Jt : d
            , f = i.altBoundary
            , p = void 0 !== f && f
            , m = i.padding
            , g = void 0 === m ? 0 : m
            , _ = Pe("number" != typeof g ? g : Me(g, Qt))
            , b = u === Jt ? Zt : Jt
            , v = t.rects.popper
            , y = t.elements[p ? b : u]
            , w = function(t, e, i, n) {
          var s = "clippingParents" === e ? function(t) {
            var e = Je(Se(t))
                , i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
            return pe(i) ? e.filter((function(t) {
                  return pe(t) && Oe(t, i) && "body" !== ue(t)
                }
            )) : []
          }(t) : [].concat(e)
              , o = [].concat(s, [i])
              , r = o[0]
              , a = o.reduce((function(e, i) {
                var s = ti(t, i, n);
                return e.top = ve(s.top, e.top),
                    e.right = ye(s.right, e.right),
                    e.bottom = ye(s.bottom, e.bottom),
                    e.left = ve(s.left, e.left),
                    e
              }
          ), ti(t, r, n));
          return a.width = a.right - a.left,
              a.height = a.bottom - a.top,
              a.x = a.left,
              a.y = a.top,
              a
        }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r)
            , A = Te(t.elements.reference)
            , E = ei({
          reference: A,
          element: v,
          strategy: "absolute",
          placement: s
        })
            , T = Ze(Object.assign({}, v, E))
            , C = u === Jt ? T : A
            , O = {
          top: w.top - C.top + _.top,
          bottom: C.bottom - w.bottom + _.bottom,
          left: w.left - C.left + _.left,
          right: C.right - w.right + _.right
        }
            , x = t.modifiersData.offset;
        if (u === Jt && x) {
          var k = x[s];
          Object.keys(O).forEach((function(t) {
                var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1
                    , i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e
              }
          ))
        }
        return O
      }
      function ni(t, e) {
        void 0 === e && (e = {});
        var i = e
            , n = i.placement
            , s = i.boundary
            , o = i.rootBoundary
            , r = i.padding
            , a = i.flipVariations
            , l = i.allowedAutoPlacements
            , c = void 0 === l ? ee : l
            , h = Fe(n)
            , d = h ? a ? te : te.filter((function(t) {
              return Fe(t) === h
            }
        )) : Qt
            , u = d.filter((function(t) {
              return c.indexOf(t) >= 0
            }
        ));
        0 === u.length && (u = d);
        var f = u.reduce((function(e, i) {
              return e[i] = ii(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
              })[be(i)],
                  e
            }
        ), {});
        return Object.keys(f).sort((function(t, e) {
              return f[t] - f[e]
            }
        ))
      }
      const si = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
          var e = t.state
              , i = t.options
              , n = t.name;
          if (!e.modifiersData[n]._skip) {
            for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function(t) {
              if (be(t) === Kt)
                return [];
              var e = Ve(t);
              return [Qe(t), e, Qe(e)]
            }(g) : [Ve(g)]), v = [g].concat(b).reduce((function(t, i) {
                  return t.concat(be(i) === Kt ? ni(e, {
                    placement: i,
                    boundary: h,
                    rootBoundary: d,
                    padding: c,
                    flipVariations: p,
                    allowedAutoPlacements: m
                  }) : i)
                }
            ), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
              var O = v[C]
                  , x = be(O)
                  , k = Fe(O) === Xt
                  , L = [zt, Rt].indexOf(x) >= 0
                  , S = L ? "width" : "height"
                  , D = ii(e, {
                placement: O,
                boundary: h,
                rootBoundary: d,
                altBoundary: u,
                padding: c
              })
                  , $ = L ? k ? qt : Vt : k ? Rt : zt;
              y[S] > w[S] && ($ = Ve($));
              var I = Ve($)
                  , N = [];
              if (o && N.push(D[x] <= 0),
              a && N.push(D[$] <= 0, D[I] <= 0),
                  N.every((function(t) {
                        return t
                      }
                  ))) {
                T = O,
                    E = !1;
                break
              }
              A.set(O, N)
            }
            if (E)
              for (var P = function(t) {
                var e = v.find((function(e) {
                      var i = A.get(e);
                      if (i)
                        return i.slice(0, t).every((function(t) {
                              return t
                            }
                        ))
                    }
                ));
                if (e)
                  return T = e,
                      "break"
              }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--)
                ;
            e.placement !== T && (e.modifiersData[n]._skip = !0,
                e.placement = T,
                e.reset = !0)
          }
        },
        requiresIfExists: ["offset"],
        data: {
          _skip: !1
        }
      };
      function oi(t, e, i) {
        return void 0 === i && (i = {
          x: 0,
          y: 0
        }),
            {
              top: t.top - e.height - i.y,
              right: t.right - e.width + i.x,
              bottom: t.bottom - e.height + i.y,
              left: t.left - e.width - i.x
            }
      }
      function ri(t) {
        return [zt, qt, Rt, Vt].some((function(e) {
              return t[e] >= 0
            }
        ))
      }
      const ai = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
          var e = t.state
              , i = t.name
              , n = e.rects.reference
              , s = e.rects.popper
              , o = e.modifiersData.preventOverflow
              , r = ii(e, {
            elementContext: "reference"
          })
              , a = ii(e, {
            altBoundary: !0
          })
              , l = oi(r, n)
              , c = oi(a, s, o)
              , h = ri(l)
              , d = ri(c);
          e.modifiersData[i] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: h,
            hasPopperEscaped: d
          },
              e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
              })
        }
      }
          , li = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
          var e = t.state
              , i = t.options
              , n = t.name
              , s = i.offset
              , o = void 0 === s ? [0, 0] : s
              , r = ee.reduce((function(t, i) {
                return t[i] = function(t, e, i) {
                  var n = be(t)
                      , s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1
                      , o = "function" == typeof i ? i(Object.assign({}, e, {
                    placement: t
                  })) : i
                      , r = o[0]
                      , a = o[1];
                  return r = r || 0,
                      a = (a || 0) * s,
                      [Vt, qt].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                      } : {
                        x: r,
                        y: a
                      }
                }(i, e.rects, o),
                    t
              }
          ), {})
              , a = r[e.placement]
              , l = a.x
              , c = a.y;
          null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l,
              e.modifiersData.popperOffsets.y += c),
              e.modifiersData[n] = r
        }
      }
          , ci = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
          var e = t.state
              , i = t.name;
          e.modifiersData[i] = ei({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement
          })
        },
        data: {}
      }
          , hi = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
          var e = t.state
              , i = t.options
              , n = t.name
              , s = i.mainAxis
              , o = void 0 === s || s
              , r = i.altAxis
              , a = void 0 !== r && r
              , l = i.boundary
              , c = i.rootBoundary
              , h = i.altBoundary
              , d = i.padding
              , u = i.tether
              , f = void 0 === u || u
              , p = i.tetherOffset
              , m = void 0 === p ? 0 : p
              , g = ii(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h
          })
              , _ = be(e.placement)
              , b = Fe(e.placement)
              , v = !b
              , y = Ie(_)
              , w = "x" === y ? "y" : "x"
              , A = e.modifiersData.popperOffsets
              , E = e.rects.reference
              , T = e.rects.popper
              , C = "function" == typeof m ? m(Object.assign({}, e.rects, {
            placement: e.placement
          })) : m
              , O = "number" == typeof C ? {
            mainAxis: C,
            altAxis: C
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, C)
              , x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null
              , k = {
            x: 0,
            y: 0
          };
          if (A) {
            if (o) {
              var L, S = "y" === y ? zt : Vt, D = "y" === y ? Rt : qt, $ = "y" === y ? "height" : "width", I = A[y], N = I + g[S], P = I - g[D], M = f ? -T[$] / 2 : 0, j = b === Xt ? E[$] : T[$], F = b === Xt ? -T[$] : -E[$], H = e.elements.arrow, W = f && H ? Ce(H) : {
                width: 0,
                height: 0
              }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }, z = B[S], R = B[D], q = Ne(0, E[$], W[$]), V = v ? E[$] / 2 - M - q - z - O.mainAxis : j - q - z - O.mainAxis, K = v ? -E[$] / 2 + M + q + R + O.mainAxis : F + q + R + O.mainAxis, Q = e.elements.arrow && $e(e.elements.arrow), X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = I + K - Y, G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
              A[y] = G,
                  k[y] = G - I
            }
            if (a) {
              var J, Z = "x" === y ? zt : Vt, tt = "x" === y ? Rt : qt, et = A[w], it = "y" === w ? "height" : "width", nt = et + g[Z], st = et - g[tt], ot = -1 !== [zt, Vt].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0, at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis, lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function(t, e, i) {
                var n = Ne(t, e, i);
                return n > i ? i : n
              }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
              A[w] = ct,
                  k[w] = ct - et
            }
            e.modifiersData[n] = k
          }
        },
        requiresIfExists: ["offset"]
      };
      function di(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = me(e), r = me(e) && function(t) {
          var e = t.getBoundingClientRect()
              , i = we(e.width) / t.offsetWidth || 1
              , n = we(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n
        }(e), a = Le(e), l = Te(t, r, i), c = {
          scrollLeft: 0,
          scrollTop: 0
        }, h = {
          x: 0,
          y: 0
        };
        return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
          scrollLeft: (s = n).scrollLeft,
          scrollTop: s.scrollTop
        } : Xe(n)),
            me(e) ? ((h = Te(e, !0)).x += e.clientLeft,
                h.y += e.clientTop) : a && (h.x = Ye(a))),
            {
              x: l.left + c.scrollLeft - h.x,
              y: l.top + c.scrollTop - h.y,
              width: l.width,
              height: l.height
            }
      }
      function ui(t) {
        var e = new Map
            , i = new Set
            , n = [];
        function s(t) {
          i.add(t.name),
              [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                    if (!i.has(t)) {
                      var n = e.get(t);
                      n && s(n)
                    }
                  }
              )),
              n.push(t)
        }
        return t.forEach((function(t) {
              e.set(t.name, t)
            }
        )),
            t.forEach((function(t) {
                  i.has(t.name) || s(t)
                }
            )),
            n
      }
      var fi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function pi() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        return !e.some((function(t) {
              return !(t && "function" == typeof t.getBoundingClientRect)
            }
        ))
      }
      function mi(t) {
        void 0 === t && (t = {});
        var e = t
            , i = e.defaultModifiers
            , n = void 0 === i ? [] : i
            , s = e.defaultOptions
            , o = void 0 === s ? fi : s;
        return function(t, e, i) {
          void 0 === i && (i = o);
          var s, r, a = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, fi, o),
            modifiersData: {},
            elements: {
              reference: t,
              popper: e
            },
            attributes: {},
            styles: {}
          }, l = [], c = !1, h = {
            state: a,
            setOptions: function(i) {
              var s = "function" == typeof i ? i(a.options) : i;
              d(),
                  a.options = Object.assign({}, o, a.options, s),
                  a.scrollParents = {
                    reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
                    popper: Je(e)
                  };
              var r, c, u = function(t) {
                var e = ui(t);
                return de.reduce((function(t, i) {
                      return t.concat(e.filter((function(t) {
                            return t.phase === i
                          }
                      )))
                    }
                ), [])
              }((r = [].concat(n, a.options.modifiers),
                  c = r.reduce((function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data)
                        }) : e,
                            t
                      }
                  ), {}),
                  Object.keys(c).map((function(t) {
                        return c[t]
                      }
                  ))));
              return a.orderedModifiers = u.filter((function(t) {
                    return t.enabled
                  }
              )),
                  a.orderedModifiers.forEach((function(t) {
                        var e = t.name
                            , i = t.options
                            , n = void 0 === i ? {} : i
                            , s = t.effect;
                        if ("function" == typeof s) {
                          var o = s({
                            state: a,
                            name: e,
                            instance: h,
                            options: n
                          });
                          l.push(o || function() {}
                          )
                        }
                      }
                  )),
                  h.update()
            },
            forceUpdate: function() {
              if (!c) {
                var t = a.elements
                    , e = t.reference
                    , i = t.popper;
                if (pi(e, i)) {
                  a.rects = {
                    reference: di(e, $e(i), "fixed" === a.options.strategy),
                    popper: Ce(i)
                  },
                      a.reset = !1,
                      a.placement = a.options.placement,
                      a.orderedModifiers.forEach((function(t) {
                            return a.modifiersData[t.name] = Object.assign({}, t.data)
                          }
                      ));
                  for (var n = 0; n < a.orderedModifiers.length; n++)
                    if (!0 !== a.reset) {
                      var s = a.orderedModifiers[n]
                          , o = s.fn
                          , r = s.options
                          , l = void 0 === r ? {} : r
                          , d = s.name;
                      "function" == typeof o && (a = o({
                        state: a,
                        options: l,
                        name: d,
                        instance: h
                      }) || a)
                    } else
                      a.reset = !1,
                          n = -1
                }
              }
            },
            update: (s = function() {
                  return new Promise((function(t) {
                        h.forceUpdate(),
                            t(a)
                      }
                  ))
                }
                    ,
                    function() {
                      return r || (r = new Promise((function(t) {
                            Promise.resolve().then((function() {
                                  r = void 0,
                                      t(s())
                                }
                            ))
                          }
                      ))),
                          r
                    }
            ),
            destroy: function() {
              d(),
                  c = !0
            }
          };
          if (!pi(t, e))
            return h;
          function d() {
            l.forEach((function(t) {
                  return t()
                }
            )),
                l = []
          }
          return h.setOptions(i).then((function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
              }
          )),
              h
        }
      }
      var gi = mi()
          , _i = mi({
        defaultModifiers: [Re, ci, Be, _e]
      })
          , bi = mi({
        defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai]
      });
      const vi = Object.freeze(Object.defineProperty({
        __proto__: null,
        afterMain: ae,
        afterRead: se,
        afterWrite: he,
        applyStyles: _e,
        arrow: je,
        auto: Kt,
        basePlacements: Qt,
        beforeMain: oe,
        beforeRead: ie,
        beforeWrite: le,
        bottom: Rt,
        clippingParents: Ut,
        computeStyles: Be,
        createPopper: bi,
        createPopperBase: gi,
        createPopperLite: _i,
        detectOverflow: ii,
        end: Yt,
        eventListeners: Re,
        flip: si,
        hide: ai,
        left: Vt,
        main: re,
        modifierPhases: de,
        offset: li,
        placements: ee,
        popper: Jt,
        popperGenerator: mi,
        popperOffsets: ci,
        preventOverflow: hi,
        read: ne,
        reference: Zt,
        right: qt,
        start: Xt,
        top: zt,
        variationPlacements: te,
        viewport: Gt,
        write: ce
      }, Symbol.toStringTag, {
        value: "Module"
      }))
          , yi = "dropdown"
          , wi = ".bs.dropdown"
          , Ai = ".data-api"
          , Ei = "ArrowUp"
          , Ti = "ArrowDown"
          , Ci = `hide${wi}`
          , Oi = `hidden${wi}`
          , xi = `show${wi}`
          , ki = `shown${wi}`
          , Li = `click${wi}${Ai}`
          , Si = `keydown${wi}${Ai}`
          , Di = `keyup${wi}${Ai}`
          , $i = "show"
          , Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
          , Ni = `${Ii}.${$i}`
          , Pi = ".dropdown-menu"
          , Mi = p() ? "top-end" : "top-start"
          , ji = p() ? "top-start" : "top-end"
          , Fi = p() ? "bottom-end" : "bottom-start"
          , Hi = p() ? "bottom-start" : "bottom-end"
          , Wi = p() ? "left-start" : "right-start"
          , Bi = p() ? "right-start" : "left-start"
          , zi = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
      }
          , Ri = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
      };
      class qi extends W {
        constructor(t, e) {
          super(t, e),
              this._popper = null,
              this._parent = this._element.parentNode,
              this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent),
              this._inNavbar = this._detectNavbar()
        }
        static get Default() {
          return zi
        }
        static get DefaultType() {
          return Ri
        }
        static get NAME() {
          return yi
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show()
        }
        show() {
          if (l(this._element) || this._isShown())
            return;
          const t = {
            relatedTarget: this._element
          };
          if (!N.trigger(this._element, xi, t).defaultPrevented) {
            if (this._createPopper(),
            "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
              for (const t of [].concat(...document.body.children))
                N.on(t, "mouseover", h);
            this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add($i),
                this._element.classList.add($i),
                N.trigger(this._element, ki, t)
          }
        }
        hide() {
          if (l(this._element) || !this._isShown())
            return;
          const t = {
            relatedTarget: this._element
          };
          this._completeHide(t)
        }
        dispose() {
          this._popper && this._popper.destroy(),
              super.dispose()
        }
        update() {
          this._inNavbar = this._detectNavbar(),
          this._popper && this._popper.update()
        }
        _completeHide(t) {
          if (!N.trigger(this._element, Ci, t).defaultPrevented) {
            if ("ontouchstart"in document.documentElement)
              for (const t of [].concat(...document.body.children))
                N.off(t, "mouseover", h);
            this._popper && this._popper.destroy(),
                this._menu.classList.remove($i),
                this._element.classList.remove($i),
                this._element.setAttribute("aria-expanded", "false"),
                F.removeDataAttribute(this._menu, "popper"),
                N.trigger(this._element, Oi, t)
          }
        }
        _getConfig(t) {
          if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
            throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
          return t
        }
        _createPopper() {
          if (void 0 === vi)
            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          let t = this._element;
          "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
          const e = this._getPopperConfig();
          this._popper = bi(t, this._menu, e)
        }
        _isShown() {
          return this._menu.classList.contains($i)
        }
        _getPlacement() {
          const t = this._parent;
          if (t.classList.contains("dropend"))
            return Wi;
          if (t.classList.contains("dropstart"))
            return Bi;
          if (t.classList.contains("dropup-center"))
            return "top";
          if (t.classList.contains("dropdown-center"))
            return "bottom";
          const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
          return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi
        }
        _detectNavbar() {
          return null !== this._element.closest(".navbar")
        }
        _getOffset() {
          const {offset: t} = this._config;
          return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
          const t = {
            placement: this._getPlacement(),
            modifiers: [{
              name: "preventOverflow",
              options: {
                boundary: this._config.boundary
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }]
          };
          return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"),
              t.modifiers = [{
                name: "applyStyles",
                enabled: !1
              }]),
              {
                ...t,
                ...g(this._config.popperConfig, [t])
              }
        }
        _selectMenuItem({key: t, target: e}) {
          const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t=>a(t)));
          i.length && b(i, e, t === Ti, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
          return this.each((function() {
                const e = qi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t])
                    throw new TypeError(`No method named "${t}"`);
                  e[t]()
                }
              }
          ))
        }
        static clearMenus(t) {
          if (2 === t.button || "keyup" === t.type && "Tab" !== t.key)
            return;
          const e = z.find(Ni);
          for (const i of e) {
            const e = qi.getInstance(i);
            if (!e || !1 === e._config.autoClose)
              continue;
            const n = t.composedPath()
                , s = n.includes(e._menu);
            if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s)
              continue;
            if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
              continue;
            const o = {
              relatedTarget: e._element
            };
            "click" === t.type && (o.clickEvent = t),
                e._completeHide(o)
          }
        }
        static dataApiKeydownHandler(t) {
          const e = /input|textarea/i.test(t.target.tagName)
              , i = "Escape" === t.key
              , n = [Ei, Ti].includes(t.key);
          if (!n && !i)
            return;
          if (e && !i)
            return;
          t.preventDefault();
          const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode)
              , o = qi.getOrCreateInstance(s);
          if (n)
            return t.stopPropagation(),
                o.show(),
                void o._selectMenuItem(t);
          o._isShown() && (t.stopPropagation(),
              o.hide(),
              s.focus())
        }
      }
      N.on(document, Si, Ii, qi.dataApiKeydownHandler),
          N.on(document, Si, Pi, qi.dataApiKeydownHandler),
          N.on(document, Li, qi.clearMenus),
          N.on(document, Di, qi.clearMenus),
          N.on(document, Li, Ii, (function(t) {
                t.preventDefault(),
                    qi.getOrCreateInstance(this).toggle()
              }
          )),
          m(qi);
      const Vi = "backdrop"
          , Ki = "show"
          , Qi = `mousedown.bs.${Vi}`
          , Xi = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
      }
          , Yi = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
      };
      class Ui extends H {
        constructor(t) {
          super(),
              this._config = this._getConfig(t),
              this._isAppended = !1,
              this._element = null
        }
        static get Default() {
          return Xi
        }
        static get DefaultType() {
          return Yi
        }
        static get NAME() {
          return Vi
        }
        show(t) {
          if (!this._config.isVisible)
            return void g(t);
          this._append();
          const e = this._getElement();
          this._config.isAnimated && d(e),
              e.classList.add(Ki),
              this._emulateAnimation((()=>{
                    g(t)
                  }
              ))
        }
        hide(t) {
          this._config.isVisible ? (this._getElement().classList.remove(Ki),
              this._emulateAnimation((()=>{
                    this.dispose(),
                        g(t)
                  }
              ))) : g(t)
        }
        dispose() {
          this._isAppended && (N.off(this._element, Qi),
              this._element.remove(),
              this._isAppended = !1)
        }
        _getElement() {
          if (!this._element) {
            const t = document.createElement("div");
            t.className = this._config.className,
            this._config.isAnimated && t.classList.add("fade"),
                this._element = t
          }
          return this._element
        }
        _configAfterMerge(t) {
          return t.rootElement = r(t.rootElement),
              t
        }
        _append() {
          if (this._isAppended)
            return;
          const t = this._getElement();
          this._config.rootElement.append(t),
              N.on(t, Qi, (()=>{
                    g(this._config.clickCallback)
                  }
              )),
              this._isAppended = !0
        }
        _emulateAnimation(t) {
          _(t, this._getElement(), this._config.isAnimated)
        }
      }
      const Gi = ".bs.focustrap"
          , Ji = `focusin${Gi}`
          , Zi = `keydown.tab${Gi}`
          , tn = "backward"
          , en = {
        autofocus: !0,
        trapElement: null
      }
          , nn = {
        autofocus: "boolean",
        trapElement: "element"
      };
      class sn extends H {
        constructor(t) {
          super(),
              this._config = this._getConfig(t),
              this._isActive = !1,
              this._lastTabNavDirection = null
        }
        static get Default() {
          return en
        }
        static get DefaultType() {
          return nn
        }
        static get NAME() {
          return "focustrap"
        }
        activate() {
          this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
              N.off(document, Gi),
              N.on(document, Ji, (t=>this._handleFocusin(t))),
              N.on(document, Zi, (t=>this._handleKeydown(t))),
              this._isActive = !0)
        }
        deactivate() {
          this._isActive && (this._isActive = !1,
              N.off(document, Gi))
        }
        _handleFocusin(t) {
          const {trapElement: e} = this._config;
          if (t.target === document || t.target === e || e.contains(t.target))
            return;
          const i = z.focusableChildren(e);
          0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
          "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward")
        }
      }
      const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
          , rn = ".sticky-top"
          , an = "padding-right"
          , ln = "margin-right";
      class cn {
        constructor() {
          this._element = document.body
        }
        getWidth() {
          const t = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - t)
        }
        hide() {
          const t = this.getWidth();
          this._disableOverFlow(),
              this._setElementAttributes(this._element, an, (e=>e + t)),
              this._setElementAttributes(on, an, (e=>e + t)),
              this._setElementAttributes(rn, ln, (e=>e - t))
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"),
              this._resetElementAttributes(this._element, an),
              this._resetElementAttributes(on, an),
              this._resetElementAttributes(rn, ln)
        }
        isOverflowing() {
          return this.getWidth() > 0
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"),
              this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
          const n = this.getWidth();
          this._applyManipulationCallback(t, (t=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + n)
                  return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
              }
          ))
        }
        _saveInitialAttribute(t, e) {
          const i = t.style.getPropertyValue(e);
          i && F.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
          this._applyManipulationCallback(t, (t=>{
                const i = F.getDataAttribute(t, e);
                null !== i ? (F.removeDataAttribute(t, e),
                    t.style.setProperty(e, i)) : t.style.removeProperty(e)
              }
          ))
        }
        _applyManipulationCallback(t, e) {
          if (o(t))
            e(t);
          else
            for (const i of z.find(t, this._element))
              e(i)
        }
      }
      const hn = ".bs.modal"
          , dn = `hide${hn}`
          , un = `hidePrevented${hn}`
          , fn = `hidden${hn}`
          , pn = `show${hn}`
          , mn = `shown${hn}`
          , gn = `resize${hn}`
          , _n = `click.dismiss${hn}`
          , bn = `mousedown.dismiss${hn}`
          , vn = `keydown.dismiss${hn}`
          , yn = `click${hn}.data-api`
          , wn = "modal-open"
          , An = "show"
          , En = "modal-static"
          , Tn = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
      }
          , Cn = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
      };
      class On extends W {
        constructor(t, e) {
          super(t, e),
              this._dialog = z.findOne(".modal-dialog", this._element),
              this._backdrop = this._initializeBackDrop(),
              this._focustrap = this._initializeFocusTrap(),
              this._isShown = !1,
              this._isTransitioning = !1,
              this._scrollBar = new cn,
              this._addEventListeners()
        }
        static get Default() {
          return Tn
        }
        static get DefaultType() {
          return Cn
        }
        static get NAME() {
          return "modal"
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
          this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
            relatedTarget: t
          }).defaultPrevented || (this._isShown = !0,
              this._isTransitioning = !0,
              this._scrollBar.hide(),
              document.body.classList.add(wn),
              this._adjustDialog(),
              this._backdrop.show((()=>this._showElement(t))))
        }
        hide() {
          this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1,
              this._isTransitioning = !0,
              this._focustrap.deactivate(),
              this._element.classList.remove(An),
              this._queueCallback((()=>this._hideModal()), this._element, this._isAnimated())))
        }
        dispose() {
          N.off(window, hn),
              N.off(this._dialog, hn),
              this._backdrop.dispose(),
              this._focustrap.deactivate(),
              super.dispose()
        }
        handleUpdate() {
          this._adjustDialog()
        }
        _initializeBackDrop() {
          return new Ui({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated()
          })
        }
        _initializeFocusTrap() {
          return new sn({
            trapElement: this._element
          })
        }
        _showElement(t) {
          document.body.contains(this._element) || document.body.append(this._element),
              this._element.style.display = "block",
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              this._element.scrollTop = 0;
          const e = z.findOne(".modal-body", this._dialog);
          e && (e.scrollTop = 0),
              d(this._element),
              this._element.classList.add(An),
              this._queueCallback((()=>{
                    this._config.focus && this._focustrap.activate(),
                        this._isTransitioning = !1,
                        N.trigger(this._element, mn, {
                          relatedTarget: t
                        })
                  }
              ), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
          N.on(this._element, vn, (t=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
              }
          )),
              N.on(window, gn, (()=>{
                    this._isShown && !this._isTransitioning && this._adjustDialog()
                  }
              )),
              N.on(this._element, bn, (t=>{
                    N.one(this._element, _n, (e=>{
                          this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                        }
                    ))
                  }
              ))
        }
        _hideModal() {
          this._element.style.display = "none",
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              this._isTransitioning = !1,
              this._backdrop.hide((()=>{
                    document.body.classList.remove(wn),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        N.trigger(this._element, fn)
                  }
              ))
        }
        _isAnimated() {
          return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
          if (N.trigger(this._element, un).defaultPrevented)
            return;
          const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._element.style.overflowY;
          "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"),
              this._element.classList.add(En),
              this._queueCallback((()=>{
                    this._element.classList.remove(En),
                        this._queueCallback((()=>{
                              this._element.style.overflowY = e
                            }
                        ), this._dialog)
                  }
              ), this._dialog),
              this._element.focus())
        }
        _adjustDialog() {
          const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , i = e > 0;
          if (i && !t) {
            const t = p() ? "paddingLeft" : "paddingRight";
            this._element.style[t] = `${e}px`
          }
          if (!i && t) {
            const t = p() ? "paddingRight" : "paddingLeft";
            this._element.style[t] = `${e}px`
          }
        }
        _resetAdjustments() {
          this._element.style.paddingLeft = "",
              this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
          return this.each((function() {
                const i = On.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === i[t])
                    throw new TypeError(`No method named "${t}"`);
                  i[t](e)
                }
              }
          ))
        }
      }
      N.on(document, yn, '[data-bs-toggle="modal"]', (function(t) {
            const e = z.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                N.one(e, pn, (t=>{
                      t.defaultPrevented || N.one(e, fn, (()=>{
                            a(this) && this.focus()
                          }
                      ))
                    }
                ));
            const i = z.findOne(".modal.show");
            i && On.getInstance(i).hide(),
                On.getOrCreateInstance(e).toggle(this)
          }
      )),
          R(On),
          m(On);
      const xn = ".bs.offcanvas"
          , kn = ".data-api"
          , Ln = `load${xn}${kn}`
          , Sn = "show"
          , Dn = "showing"
          , $n = "hiding"
          , In = ".offcanvas.show"
          , Nn = `show${xn}`
          , Pn = `shown${xn}`
          , Mn = `hide${xn}`
          , jn = `hidePrevented${xn}`
          , Fn = `hidden${xn}`
          , Hn = `resize${xn}`
          , Wn = `click${xn}${kn}`
          , Bn = `keydown.dismiss${xn}`
          , zn = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
      }
          , Rn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
      };
      class qn extends W {
        constructor(t, e) {
          super(t, e),
              this._isShown = !1,
              this._backdrop = this._initializeBackDrop(),
              this._focustrap = this._initializeFocusTrap(),
              this._addEventListeners()
        }
        static get Default() {
          return zn
        }
        static get DefaultType() {
          return Rn
        }
        static get NAME() {
          return "offcanvas"
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
          this._isShown || N.trigger(this._element, Nn, {
            relatedTarget: t
          }).defaultPrevented || (this._isShown = !0,
              this._backdrop.show(),
          this._config.scroll || (new cn).hide(),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              this._element.classList.add(Dn),
              this._queueCallback((()=>{
                    this._config.scroll && !this._config.backdrop || this._focustrap.activate(),
                        this._element.classList.add(Sn),
                        this._element.classList.remove(Dn),
                        N.trigger(this._element, Pn, {
                          relatedTarget: t
                        })
                  }
              ), this._element, !0))
        }
        hide() {
          this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(),
              this._element.blur(),
              this._isShown = !1,
              this._element.classList.add($n),
              this._backdrop.hide(),
              this._queueCallback((()=>{
                    this._element.classList.remove(Sn, $n),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                    this._config.scroll || (new cn).reset(),
                        N.trigger(this._element, Fn)
                  }
              ), this._element, !0)))
        }
        dispose() {
          this._backdrop.dispose(),
              this._focustrap.deactivate(),
              super.dispose()
        }
        _initializeBackDrop() {
          const t = Boolean(this._config.backdrop);
          return new Ui({
            className: "offcanvas-backdrop",
            isVisible: t,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: t ? ()=>{
                  "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, jn)
                }
                : null
          })
        }
        _initializeFocusTrap() {
          return new sn({
            trapElement: this._element
          })
        }
        _addEventListeners() {
          N.on(this._element, Bn, (t=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, jn))
              }
          ))
        }
        static jQueryInterface(t) {
          return this.each((function() {
                const e = qn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                    throw new TypeError(`No method named "${t}"`);
                  e[t](this)
                }
              }
          ))
        }
      }
      N.on(document, Wn, '[data-bs-toggle="offcanvas"]', (function(t) {
            const e = z.getElementFromSelector(this);
            if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                l(this))
              return;
            N.one(e, Fn, (()=>{
                  a(this) && this.focus()
                }
            ));
            const i = z.findOne(In);
            i && i !== e && qn.getInstance(i).hide(),
                qn.getOrCreateInstance(e).toggle(this)
          }
      )),
          N.on(window, Ln, (()=>{
                for (const t of z.find(In))
                  qn.getOrCreateInstance(t).show()
              }
          )),
          N.on(window, Hn, (()=>{
                for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))
                  "fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide()
              }
          )),
          R(qn),
          m(qn);
      const Vn = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      }
          , Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
          , Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i
          , Xn = (t,e)=>{
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))
      }
          , Yn = {
        allowList: Vn,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
      }
          , Un = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
      }
          , Gn = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
      };
      class Jn extends H {
        constructor(t) {
          super(),
              this._config = this._getConfig(t)
        }
        static get Default() {
          return Yn
        }
        static get DefaultType() {
          return Un
        }
        static get NAME() {
          return "TemplateFactory"
        }
        getContent() {
          return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)
        }
        hasContent() {
          return this.getContent().length > 0
        }
        changeContent(t) {
          return this._checkContent(t),
              this._config.content = {
                ...this._config.content,
                ...t
              },
              this
        }
        toHtml() {
          const t = document.createElement("div");
          t.innerHTML = this._maybeSanitize(this._config.template);
          for (const [e,i] of Object.entries(this._config.content))
            this._setContent(t, i, e);
          const e = t.children[0]
              , i = this._resolvePossibleFunction(this._config.extraClass);
          return i && e.classList.add(...i.split(" ")),
              e
        }
        _typeCheckConfig(t) {
          super._typeCheckConfig(t),
              this._checkContent(t.content)
        }
        _checkContent(t) {
          for (const [e,i] of Object.entries(t))
            super._typeCheckConfig({
              selector: e,
              entry: i
            }, Gn)
        }
        _setContent(t, e, i) {
          const n = z.findOne(i, t);
          n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
        }
        _maybeSanitize(t) {
          return this._config.sanitize ? function(t, e, i) {
            if (!t.length)
              return t;
            if (i && "function" == typeof i)
              return i(t);
            const n = (new window.DOMParser).parseFromString(t, "text/html")
                , s = [].concat(...n.body.querySelectorAll("*"));
            for (const t of s) {
              const i = t.nodeName.toLowerCase();
              if (!Object.keys(e).includes(i)) {
                t.remove();
                continue
              }
              const n = [].concat(...t.attributes)
                  , s = [].concat(e["*"] || [], e[i] || []);
              for (const e of n)
                Xn(e, s) || t.removeAttribute(e.nodeName)
            }
            return n.body.innerHTML
          }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
          return g(t, [this])
        }
        _putElementInTemplate(t, e) {
          if (this._config.html)
            return e.innerHTML = "",
                void e.append(t);
          e.textContent = t.textContent
        }
      }
      const Zn = new Set(["sanitize", "allowList", "sanitizeFn"])
          , ts = "fade"
          , es = "show"
          , is = ".modal"
          , ns = "hide.bs.modal"
          , ss = "hover"
          , os = "focus"
          , rs = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: p() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: p() ? "right" : "left"
      }
          , as = {
        allowList: Vn,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
      }
          , ls = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
      };
      class cs extends W {
        constructor(t, e) {
          if (void 0 === vi)
            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          super(t, e),
              this._isEnabled = !0,
              this._timeout = 0,
              this._isHovered = null,
              this._activeTrigger = {},
              this._popper = null,
              this._templateFactory = null,
              this._newContent = null,
              this.tip = null,
              this._setListeners(),
          this._config.selector || this._fixTitle()
        }
        static get Default() {
          return as
        }
        static get DefaultType() {
          return ls
        }
        static get NAME() {
          return "tooltip"
        }
        enable() {
          this._isEnabled = !0
        }
        disable() {
          this._isEnabled = !1
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled
        }
        toggle() {
          this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click,
              this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
          clearTimeout(this._timeout),
              N.off(this._element.closest(is), ns, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
              this._disposePopper(),
              super.dispose()
        }
        show() {
          if ("none" === this._element.style.display)
            throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled)
            return;
          const t = N.trigger(this._element, this.constructor.eventName("show"))
              , e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
          if (t.defaultPrevented || !e)
            return;
          this._disposePopper();
          const i = this._getTipElement();
          this._element.setAttribute("aria-describedby", i.getAttribute("id"));
          const {container: n} = this._config;
          if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i),
              N.trigger(this._element, this.constructor.eventName("inserted"))),
              this._popper = this._createPopper(i),
              i.classList.add(es),
          "ontouchstart"in document.documentElement)
            for (const t of [].concat(...document.body.children))
              N.on(t, "mouseover", h);
          this._queueCallback((()=>{
                N.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                    this._isHovered = !1
              }
          ), this.tip, this._isAnimated())
        }
        hide() {
          if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
            if (this._getTipElement().classList.remove(es),
            "ontouchstart"in document.documentElement)
              for (const t of [].concat(...document.body.children))
                N.off(t, "mouseover", h);
            this._activeTrigger.click = !1,
                this._activeTrigger[os] = !1,
                this._activeTrigger[ss] = !1,
                this._isHovered = null,
                this._queueCallback((()=>{
                      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                          this._element.removeAttribute("aria-describedby"),
                          N.trigger(this._element, this.constructor.eventName("hidden")))
                    }
                ), this.tip, this._isAnimated())
          }
        }
        update() {
          this._popper && this._popper.update()
        }
        _isWithContent() {
          return Boolean(this._getTitle())
        }
        _getTipElement() {
          return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
              this.tip
        }
        _createTipElement(t) {
          const e = this._getTemplateFactory(t).toHtml();
          if (!e)
            return null;
          e.classList.remove(ts, es),
              e.classList.add(`bs-${this.constructor.NAME}-auto`);
          const i = (t=>{
                do {
                  t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
              }
          )(this.constructor.NAME).toString();
          return e.setAttribute("id", i),
          this._isAnimated() && e.classList.add(ts),
              e
        }
        setContent(t) {
          this._newContent = t,
          this._isShown() && (this._disposePopper(),
              this.show())
        }
        _getTemplateFactory(t) {
          return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
          }),
              this._templateFactory
        }
        _getContentForTemplate() {
          return {
            ".tooltip-inner": this._getTitle()
          }
        }
        _getTitle() {
          return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(t) {
          return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
          return this._config.animation || this.tip && this.tip.classList.contains(ts)
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(es)
        }
        _createPopper(t) {
          const e = g(this._config.placement, [this, t, this._element])
              , i = rs[e.toUpperCase()];
          return bi(this._element, t, this._getPopperConfig(i))
        }
        _getOffset() {
          const {offset: t} = this._config;
          return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
          return g(t, [this._element])
        }
        _getPopperConfig(t) {
          const e = {
            placement: t,
            modifiers: [{
              name: "flip",
              options: {
                fallbackPlacements: this._config.fallbackPlacements
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }, {
              name: "preventOverflow",
              options: {
                boundary: this._config.boundary
              }
            }, {
              name: "arrow",
              options: {
                element: `.${this.constructor.NAME}-arrow`
              }
            }, {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: t=>{
                this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
              }
            }]
          };
          return {
            ...e,
            ...g(this._config.popperConfig, [e])
          }
        }
        _setListeners() {
          const t = this._config.trigger.split(" ");
          for (const e of t)
            if ("click" === e)
              N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t=>{
                    this._initializeOnDelegatedTarget(t).toggle()
                  }
              ));
            else if ("manual" !== e) {
              const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                  , i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
              N.on(this._element, t, this._config.selector, (t=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? os : ss] = !0,
                        e._enter()
                  }
              )),
                  N.on(this._element, i, this._config.selector, (t=>{
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget),
                            e._leave()
                      }
                  ))
            }
          this._hideModalHandler = ()=>{
            this._element && this.hide()
          }
              ,
              N.on(this._element.closest(is), ns, this._hideModalHandler)
        }
        _fixTitle() {
          const t = this._element.getAttribute("title");
          t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t),
              this._element.setAttribute("data-bs-original-title", t),
              this._element.removeAttribute("title"))
        }
        _enter() {
          this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
              this._setTimeout((()=>{
                    this._isHovered && this.show()
                  }
              ), this._config.delay.show))
        }
        _leave() {
          this._isWithActiveTrigger() || (this._isHovered = !1,
              this._setTimeout((()=>{
                    this._isHovered || this.hide()
                  }
              ), this._config.delay.hide))
        }
        _setTimeout(t, e) {
          clearTimeout(this._timeout),
              this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
          const e = F.getDataAttributes(this._element);
          for (const t of Object.keys(e))
            Zn.has(t) && delete e[t];
          return t = {
            ...e,
            ..."object" == typeof t && t ? t : {}
          },
              t = this._mergeConfigObj(t),
              t = this._configAfterMerge(t),
              this._typeCheckConfig(t),
              t
        }
        _configAfterMerge(t) {
          return t.container = !1 === t.container ? document.body : r(t.container),
          "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
          }),
          "number" == typeof t.title && (t.title = t.title.toString()),
          "number" == typeof t.content && (t.content = t.content.toString()),
              t
        }
        _getDelegateConfig() {
          const t = {};
          for (const [e,i] of Object.entries(this._config))
            this.constructor.Default[e] !== i && (t[e] = i);
          return t.selector = !1,
              t.trigger = "manual",
              t
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(),
              this._popper = null),
          this.tip && (this.tip.remove(),
              this.tip = null)
        }
        static jQueryInterface(t) {
          return this.each((function() {
                const e = cs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t])
                    throw new TypeError(`No method named "${t}"`);
                  e[t]()
                }
              }
          ))
        }
      }
      m(cs);
      const hs = {
        ...cs.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
      }
          , ds = {
        ...cs.DefaultType,
        content: "(null|string|element|function)"
      };
      class us extends cs {
        static get Default() {
          return hs
        }
        static get DefaultType() {
          return ds
        }
        static get NAME() {
          return "popover"
        }
        _isWithContent() {
          return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
          return {
            ".popover-header": this._getTitle(),
            ".popover-body": this._getContent()
          }
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
          return this.each((function() {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t])
                    throw new TypeError(`No method named "${t}"`);
                  e[t]()
                }
              }
          ))
        }
      }
      m(us);
      const fs = ".bs.scrollspy"
          , ps = `activate${fs}`
          , ms = `click${fs}`
          , gs = `load${fs}.data-api`
          , _s = "active"
          , bs = "[href]"
          , vs = ".nav-link"
          , ys = `${vs}, .nav-item > ${vs}, .list-group-item`
          , ws = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
      }
          , As = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
      };
      class Es extends W {
        constructor(t, e) {
          super(t, e),
              this._targetLinks = new Map,
              this._observableSections = new Map,
              this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
              this._activeTarget = null,
              this._observer = null,
              this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
              },
              this.refresh()
        }
        static get Default() {
          return ws
        }
        static get DefaultType() {
          return As
        }
        static get NAME() {
          return "scrollspy"
        }
        refresh() {
          this._initializeTargetsAndObservables(),
              this._maybeEnableSmoothScroll(),
              this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
          for (const t of this._observableSections.values())
            this._observer.observe(t)
        }
        dispose() {
          this._observer.disconnect(),
              super.dispose()
        }
        _configAfterMerge(t) {
          return t.target = r(t.target) || document.body,
              t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin,
          "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t=>Number.parseFloat(t)))),
              t
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll && (N.off(this._config.target, ms),
              N.on(this._config.target, ms, bs, (t=>{
                    const e = this._observableSections.get(t.target.hash);
                    if (e) {
                      t.preventDefault();
                      const i = this._rootElement || window
                          , n = e.offsetTop - this._element.offsetTop;
                      if (i.scrollTo)
                        return void i.scrollTo({
                          top: n,
                          behavior: "smooth"
                        });
                      i.scrollTop = n
                    }
                  }
              )))
        }
        _getNewObserver() {
          const t = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin
          };
          return new IntersectionObserver((t=>this._observerCallback(t)),t)
        }
        _observerCallback(t) {
          const e = t=>this._targetLinks.get(`#${t.target.id}`)
              , i = t=>{
            this._previousScrollData.visibleEntryTop = t.target.offsetTop,
                this._process(e(t))
          }
              , n = (this._rootElement || document.documentElement).scrollTop
              , s = n >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = n;
          for (const o of t) {
            if (!o.isIntersecting) {
              this._activeTarget = null,
                  this._clearActiveClass(e(o));
              continue
            }
            const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (s && t) {
              if (i(o),
                  !n)
                return
            } else
              s || t || i(o)
          }
        }
        _initializeTargetsAndObservables() {
          this._targetLinks = new Map,
              this._observableSections = new Map;
          const t = z.find(bs, this._config.target);
          for (const e of t) {
            if (!e.hash || l(e))
              continue;
            const t = z.findOne(decodeURI(e.hash), this._element);
            a(t) && (this._targetLinks.set(decodeURI(e.hash), e),
                this._observableSections.set(e.hash, t))
          }
        }
        _process(t) {
          this._activeTarget !== t && (this._clearActiveClass(this._config.target),
              this._activeTarget = t,
              t.classList.add(_s),
              this._activateParents(t),
              N.trigger(this._element, ps, {
                relatedTarget: t
              }))
        }
        _activateParents(t) {
          if (t.classList.contains("dropdown-item"))
            z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);
          else
            for (const e of z.parents(t, ".nav, .list-group"))
              for (const t of z.prev(e, ys))
                t.classList.add(_s)
        }
        _clearActiveClass(t) {
          t.classList.remove(_s);
          const e = z.find(`${bs}.${_s}`, t);
          for (const t of e)
            t.classList.remove(_s)
        }
        static jQueryInterface(t) {
          return this.each((function() {
                const e = Es.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                    throw new TypeError(`No method named "${t}"`);
                  e[t]()
                }
              }
          ))
        }
      }
      N.on(window, gs, (()=>{
            for (const t of z.find('[data-bs-spy="scroll"]'))
              Es.getOrCreateInstance(t)
          }
      )),
          m(Es);
      const Ts = ".bs.tab"
          , Cs = `hide${Ts}`
          , Os = `hidden${Ts}`
          , xs = `show${Ts}`
          , ks = `shown${Ts}`
          , Ls = `click${Ts}`
          , Ss = `keydown${Ts}`
          , Ds = `load${Ts}`
          , $s = "ArrowLeft"
          , Is = "ArrowRight"
          , Ns = "ArrowUp"
          , Ps = "ArrowDown"
          , Ms = "Home"
          , js = "End"
          , Fs = "active"
          , Hs = "fade"
          , Ws = "show"
          , Bs = ".dropdown-toggle"
          , zs = `:not(${Bs})`
          , Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
          , qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`
          , Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
      class Ks extends W {
        constructor(t) {
          super(t),
              this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
          this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
              N.on(this._element, Ss, (t=>this._keydown(t))))
        }
        static get NAME() {
          return "tab"
        }
        show() {
          const t = this._element;
          if (this._elemIsActive(t))
            return;
          const e = this._getActiveElem()
              , i = e ? N.trigger(e, Cs, {
            relatedTarget: t
          }) : null;
          N.trigger(t, xs, {
            relatedTarget: e
          }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t),
              this._activate(t, e))
        }
        _activate(t, e) {
          t && (t.classList.add(Fs),
              this._activate(z.getElementFromSelector(t)),
              this._queueCallback((()=>{
                    "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"),
                        t.setAttribute("aria-selected", !0),
                        this._toggleDropDown(t, !0),
                        N.trigger(t, ks, {
                          relatedTarget: e
                        })) : t.classList.add(Ws)
                  }
              ), t, t.classList.contains(Hs)))
        }
        _deactivate(t, e) {
          t && (t.classList.remove(Fs),
              t.blur(),
              this._deactivate(z.getElementFromSelector(t)),
              this._queueCallback((()=>{
                    "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1),
                        t.setAttribute("tabindex", "-1"),
                        this._toggleDropDown(t, !1),
                        N.trigger(t, Os, {
                          relatedTarget: e
                        })) : t.classList.remove(Ws)
                  }
              ), t, t.classList.contains(Hs)))
        }
        _keydown(t) {
          if (![$s, Is, Ns, Ps, Ms, js].includes(t.key))
            return;
          t.stopPropagation(),
              t.preventDefault();
          const e = this._getChildren().filter((t=>!l(t)));
          let i;
          if ([Ms, js].includes(t.key))
            i = e[t.key === Ms ? 0 : e.length - 1];
          else {
            const n = [Is, Ps].includes(t.key);
            i = b(e, t.target, n, !0)
          }
          i && (i.focus({
            preventScroll: !0
          }),
              Ks.getOrCreateInstance(i).show())
        }
        _getChildren() {
          return z.find(qs, this._parent)
        }
        _getActiveElem() {
          return this._getChildren().find((t=>this._elemIsActive(t))) || null
        }
        _setInitialAttributes(t, e) {
          this._setAttributeIfNotExists(t, "role", "tablist");
          for (const t of e)
            this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
          t = this._getInnerElement(t);
          const e = this._elemIsActive(t)
              , i = this._getOuterElement(t);
          t.setAttribute("aria-selected", e),
          i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
          e || t.setAttribute("tabindex", "-1"),
              this._setAttributeIfNotExists(t, "role", "tab"),
              this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
          const e = z.getElementFromSelector(t);
          e && (this._setAttributeIfNotExists(e, "role", "tabpanel"),
          t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
        }
        _toggleDropDown(t, e) {
          const i = this._getOuterElement(t);
          if (!i.classList.contains("dropdown"))
            return;
          const n = (t,n)=>{
                const s = z.findOne(t, i);
                s && s.classList.toggle(n, e)
              }
          ;
          n(Bs, Fs),
              n(".dropdown-menu", Ws),
              i.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, i) {
          t.hasAttribute(e) || t.setAttribute(e, i)
        }
        _elemIsActive(t) {
          return t.classList.contains(Fs)
        }
        _getInnerElement(t) {
          return t.matches(qs) ? t : z.findOne(qs, t)
        }
        _getOuterElement(t) {
          return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryInterface(t) {
          return this.each((function() {
                const e = Ks.getOrCreateInstance(this);
                if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                    throw new TypeError(`No method named "${t}"`);
                  e[t]()
                }
              }
          ))
        }
      }
      N.on(document, Ls, Rs, (function(t) {
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            l(this) || Ks.getOrCreateInstance(this).show()
          }
      )),
          N.on(window, Ds, (()=>{
                for (const t of z.find(Vs))
                  Ks.getOrCreateInstance(t)
              }
          )),
          m(Ks);
      const Qs = ".bs.toast"
          , Xs = `mouseover${Qs}`
          , Ys = `mouseout${Qs}`
          , Us = `focusin${Qs}`
          , Gs = `focusout${Qs}`
          , Js = `hide${Qs}`
          , Zs = `hidden${Qs}`
          , to = `show${Qs}`
          , eo = `shown${Qs}`
          , io = "hide"
          , no = "show"
          , so = "showing"
          , oo = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
      }
          , ro = {
        animation: !0,
        autohide: !0,
        delay: 5e3
      };
      class ao extends W {
        constructor(t, e) {
          super(t, e),
              this._timeout = null,
              this._hasMouseInteraction = !1,
              this._hasKeyboardInteraction = !1,
              this._setListeners()
        }
        static get Default() {
          return ro
        }
        static get DefaultType() {
          return oo
        }
        static get NAME() {
          return "toast"
        }
        show() {
          N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
              this._element.classList.remove(io),
              d(this._element),
              this._element.classList.add(no, so),
              this._queueCallback((()=>{
                    this._element.classList.remove(so),
                        N.trigger(this._element, eo),
                        this._maybeScheduleHide()
                  }
              ), this._element, this._config.animation))
        }
        hide() {
          this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so),
              this._queueCallback((()=>{
                    this._element.classList.add(io),
                        this._element.classList.remove(so, no),
                        N.trigger(this._element, Zs)
                  }
              ), this._element, this._config.animation)))
        }
        dispose() {
          this._clearTimeout(),
          this.isShown() && this._element.classList.remove(no),
              super.dispose()
        }
        isShown() {
          return this._element.classList.contains(no)
        }
        _maybeScheduleHide() {
          this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((()=>{
                this.hide()
              }
          ), this._config.delay)))
        }
        _onInteraction(t, e) {
          switch (t.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = e;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = e
          }
          if (e)
            return void this._clearTimeout();
          const i = t.relatedTarget;
          this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
          N.on(this._element, Xs, (t=>this._onInteraction(t, !0))),
              N.on(this._element, Ys, (t=>this._onInteraction(t, !1))),
              N.on(this._element, Us, (t=>this._onInteraction(t, !0))),
              N.on(this._element, Gs, (t=>this._onInteraction(t, !1)))
        }
        _clearTimeout() {
          clearTimeout(this._timeout),
              this._timeout = null
        }
        static jQueryInterface(t) {
          return this.each((function() {
                const e = ao.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t])
                    throw new TypeError(`No method named "${t}"`);
                  e[t](this)
                }
              }
          ))
        }
      }
      return R(ao),
          m(ao),
          {
            Alert: Q,
            Button: Y,
            Carousel: xt,
            Collapse: Bt,
            Dropdown: qi,
            Modal: On,
            Offcanvas: qn,
            Popover: us,
            ScrollSpy: Es,
            Tab: Ks,
            Toast: ao,
            Tooltip: cs
          }
    }
));
//# sourceMappingURL=bootstrap.bundle.min.js.map
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, (function() {
      "use strict";
      function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
                }
                : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        )(t)
      }
      function t(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      function i(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1,
              n.configurable = !0,
          "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
        }
      }
      function n(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
            e
      }
      var s = Date.now();
      function l() {
        var e = {}
            , t = !0
            , i = 0
            , n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0],
            i++);
        for (var s = function(i) {
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = l(!0, e[n], i[n]) : e[n] = i[n])
        }; i < n; i++) {
          var o = arguments[i];
          s(o)
        }
        return e
      }
      function o(e, t) {
        if ((k(e) || e === window || e === document) && (e = [e]),
        A(e) || L(e) || (e = [e]),
        0 != P(e))
          if (A(e) && !L(e))
            for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++)
              ;
          else if (L(e))
            for (var s in e)
              if (O(e, s) && !1 === t.call(e[s], e[s], s, e))
                break
      }
      function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
            , n = e[s] = e[s] || []
            , l = {
          all: n,
          evt: null,
          found: null
        };
        return t && i && P(n) > 0 && o(n, (function(e, n) {
              if (e.eventName == t && e.fn.toString() == i.toString())
                return l.found = !0,
                    l.evt = n,
                    !1
            }
        )),
            l
      }
      function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            , i = t.onElement
            , n = t.withCallback
            , s = t.avoidDuplicate
            , l = void 0 === s || s
            , a = t.once
            , h = void 0 !== a && a
            , d = t.useCapture
            , c = void 0 !== d && d
            , u = arguments.length > 2 ? arguments[2] : void 0
            , g = i || [];
        function v(e) {
          T(n) && n.call(u, e, this),
          h && v.destroy()
        }
        return C(g) && (g = document.querySelectorAll(g)),
            v.destroy = function() {
              o(g, (function(t) {
                    var i = r(t, e, v);
                    i.found && i.all.splice(i.evt, 1),
                    t.removeEventListener && t.removeEventListener(e, v, c)
                  }
              ))
            }
            ,
            o(g, (function(t) {
                  var i = r(t, e, v);
                  (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, c),
                      i.all.push({
                        eventName: e,
                        fn: v
                      }))
                }
            )),
            v
      }
      function h(e, t) {
        o(t.split(" "), (function(t) {
              return e.classList.add(t)
            }
        ))
      }
      function d(e, t) {
        o(t.split(" "), (function(t) {
              return e.classList.remove(t)
            }
        ))
      }
      function c(e, t) {
        return e.classList.contains(t)
      }
      function u(e, t) {
        for (; e !== document.body; ) {
          if (!(e = e.parentElement))
            return !1;
          if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t))
            return e
        }
      }
      function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
            , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t)
          return !1;
        if ("none" === t)
          return T(i) && i(),
              !1;
        var n = x()
            , s = t.split(" ");
        o(s, (function(t) {
              h(e, "g" + t)
            }
        )),
            a(n, {
              onElement: e,
              avoidDuplicate: !1,
              once: !0,
              withCallback: function(e, t) {
                o(s, (function(e) {
                      d(t, "g" + e)
                    }
                )),
                T(i) && i()
              }
            })
      }
      function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t)
          return e.style.webkitTransform = "",
              e.style.MozTransform = "",
              e.style.msTransform = "",
              e.style.OTransform = "",
              e.style.transform = "",
              !1;
        e.style.webkitTransform = t,
            e.style.MozTransform = t,
            e.style.msTransform = t,
            e.style.OTransform = t,
            e.style.transform = t
      }
      function f(e) {
        e.style.display = "block"
      }
      function p(e) {
        e.style.display = "none"
      }
      function m(e) {
        var t = document.createDocumentFragment()
            , i = document.createElement("div");
        for (i.innerHTML = e; i.firstChild; )
          t.appendChild(i.firstChild);
        return t
      }
      function y() {
        return {
          width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
      }
      function x() {
        var e, t = document.createElement("fakeelement"), i = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "animationend",
          WebkitAnimation: "webkitAnimationEnd"
        };
        for (e in i)
          if (void 0 !== t.style[e])
            return i[e]
      }
      function b(e, t, i, n) {
        if (e())
          t();
        else {
          var s;
          i || (i = 100);
          var l = setInterval((function() {
                e() && (clearInterval(l),
                s && clearTimeout(s),
                    t())
              }
          ), i);
          n && (s = setTimeout((function() {
                clearInterval(l)
              }
          ), n))
        }
      }
      function S(e, t, i) {
        if (I(e))
          console.error("Inject assets error");
        else if (T(t) && (i = t,
            t = !1),
        C(t) && t in window)
          T(i) && i();
        else {
          var n;
          if (-1 !== e.indexOf(".css")) {
            if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0)
              return void (T(i) && i());
            var s = document.getElementsByTagName("head")[0]
                , l = s.querySelectorAll('link[rel="stylesheet"]')
                , o = document.createElement("link");
            return o.rel = "stylesheet",
                o.type = "text/css",
                o.href = e,
                o.media = "all",
                l ? s.insertBefore(o, l[0]) : s.appendChild(o),
                void (T(i) && i())
          }
          if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
            if (T(i)) {
              if (C(t))
                return b((function() {
                      return void 0 !== window[t]
                    }
                ), (function() {
                      i()
                    }
                )),
                    !1;
              i()
            }
          } else {
            var r = document.createElement("script");
            r.type = "text/javascript",
                r.src = e,
                r.onload = function() {
                  if (T(i)) {
                    if (C(t))
                      return b((function() {
                            return void 0 !== window[t]
                          }
                      ), (function() {
                            i()
                          }
                      )),
                          !1;
                    i()
                  }
                }
                ,
                document.body.appendChild(r)
          }
        }
      }
      function w() {
        return "navigator"in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
      }
      function T(e) {
        return "function" == typeof e
      }
      function C(e) {
        return "string" == typeof e
      }
      function k(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType)
      }
      function E(e) {
        return Array.isArray(e)
      }
      function A(e) {
        return e && e.length && isFinite(e.length)
      }
      function L(t) {
        return "object" === e(t) && null != t && !T(t) && !E(t)
      }
      function I(e) {
        return null == e
      }
      function O(e, t) {
        return null !== e && hasOwnProperty.call(e, t)
      }
      function P(e) {
        if (L(e)) {
          if (e.keys)
            return e.keys().length;
          var t = 0;
          for (var i in e)
            O(e, i) && t++;
          return t
        }
        return e.length
      }
      function M(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
      }
      function z() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1
            , t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length)
          return !1;
        if (1 == t.length)
          return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = [];
        o(t, (function(e) {
              i.push(e.getAttribute("data-taborder"))
            }
        ));
        var n = Math.max.apply(Math, i.map((function(e) {
              return parseInt(e)
            }
        )))
            , s = e < 0 ? 1 : e + 1;
        s > n && (s = "1");
        var l = i.filter((function(e) {
              return e >= parseInt(s)
            }
        ))
            , r = l.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(r, '"]'))
      }
      function X(e) {
        if (e.events.hasOwnProperty("keyboard"))
          return !1;
        e.events.keyboard = a("keydown", {
          onElement: window,
          withCallback: function(t, i) {
            var n = (t = t || window.event).keyCode;
            if (9 == n) {
              var s = document.querySelector(".gbtn.focused");
              if (!s) {
                var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                if ("input" == l || "textarea" == l || "button" == l)
                  return
              }
              t.preventDefault();
              var o = document.querySelectorAll(".gbtn[data-taborder]");
              if (!o || o.length <= 0)
                return;
              if (!s) {
                var r = z();
                return void (r && (r.focus(),
                    h(r, "focused")))
              }
              var a = z(s.getAttribute("data-taborder"));
              d(s, "focused"),
              a && (a.focus(),
                  h(a, "focused"))
            }
            39 == n && e.nextSlide(),
            37 == n && e.prevSlide(),
            27 == n && e.close()
          }
        })
      }
      function Y(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y)
      }
      function q(e, t) {
        var i = function(e, t) {
          var i = Y(e) * Y(t);
          if (0 === i)
            return 0;
          var n = function(e, t) {
            return e.x * t.x + e.y * t.y
          }(e, t) / i;
          return n > 1 && (n = 1),
              Math.acos(n)
        }(e, t);
        return function(e, t) {
          return e.x * t.y - t.x * e.y
        }(e, t) > 0 && (i *= -1),
        180 * i / Math.PI
      }
      var N = function() {
        function e(i) {
          t(this, e),
              this.handlers = [],
              this.el = i
        }
        return n(e, [{
          key: "add",
          value: function(e) {
            this.handlers.push(e)
          }
        }, {
          key: "del",
          value: function(e) {
            e || (this.handlers = []);
            for (var t = this.handlers.length; t >= 0; t--)
              this.handlers[t] === e && this.handlers.splice(t, 1)
          }
        }, {
          key: "dispatch",
          value: function() {
            for (var e = 0, t = this.handlers.length; e < t; e++) {
              var i = this.handlers[e];
              "function" == typeof i && i.apply(this.el, arguments)
            }
          }
        }]),
            e
      }();
      function D(e, t) {
        var i = new N(e);
        return i.add(t),
            i
      }
      var _ = function() {
        function e(i, n) {
          t(this, e),
              this.element = "string" == typeof i ? document.querySelector(i) : i,
              this.start = this.start.bind(this),
              this.move = this.move.bind(this),
              this.end = this.end.bind(this),
              this.cancel = this.cancel.bind(this),
              this.element.addEventListener("touchstart", this.start, !1),
              this.element.addEventListener("touchmove", this.move, !1),
              this.element.addEventListener("touchend", this.end, !1),
              this.element.addEventListener("touchcancel", this.cancel, !1),
              this.preV = {
                x: null,
                y: null
              },
              this.pinchStartLen = null,
              this.zoom = 1,
              this.isDoubleTap = !1;
          var s = function() {};
          this.rotate = D(this.element, n.rotate || s),
              this.touchStart = D(this.element, n.touchStart || s),
              this.multipointStart = D(this.element, n.multipointStart || s),
              this.multipointEnd = D(this.element, n.multipointEnd || s),
              this.pinch = D(this.element, n.pinch || s),
              this.swipe = D(this.element, n.swipe || s),
              this.tap = D(this.element, n.tap || s),
              this.doubleTap = D(this.element, n.doubleTap || s),
              this.longTap = D(this.element, n.longTap || s),
              this.singleTap = D(this.element, n.singleTap || s),
              this.pressMove = D(this.element, n.pressMove || s),
              this.twoFingerPressMove = D(this.element, n.twoFingerPressMove || s),
              this.touchMove = D(this.element, n.touchMove || s),
              this.touchEnd = D(this.element, n.touchEnd || s),
              this.touchCancel = D(this.element, n.touchCancel || s),
              this.translateContainer = this.element,
              this._cancelAllHandler = this.cancelAll.bind(this),
              window.addEventListener("scroll", this._cancelAllHandler),
              this.delta = null,
              this.last = null,
              this.now = null,
              this.tapTimeout = null,
              this.singleTapTimeout = null,
              this.longTapTimeout = null,
              this.swipeTimeout = null,
              this.x1 = this.x2 = this.y1 = this.y2 = null,
              this.preTapPosition = {
                x: null,
                y: null
              }
        }
        return n(e, [{
          key: "start",
          value: function(e) {
            if (e.touches) {
              if (e.target && e.target.nodeName && ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) >= 0)
                console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
              else {
                this.now = Date.now(),
                    this.x1 = e.touches[0].pageX,
                    this.y1 = e.touches[0].pageY,
                    this.delta = this.now - (this.last || this.now),
                    this.touchStart.dispatch(e, this.element),
                null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30,
                this.isDoubleTap && clearTimeout(this.singleTapTimeout)),
                    this.preTapPosition.x = this.x1,
                    this.preTapPosition.y = this.y1,
                    this.last = this.now;
                var t = this.preV;
                if (e.touches.length > 1) {
                  this._cancelLongTap(),
                      this._cancelSingleTap();
                  var i = {
                    x: e.touches[1].pageX - this.x1,
                    y: e.touches[1].pageY - this.y1
                  };
                  t.x = i.x,
                      t.y = i.y,
                      this.pinchStartLen = Y(t),
                      this.multipointStart.dispatch(e, this.element)
                }
                this._preventTap = !1,
                    this.longTapTimeout = setTimeout(function() {
                      this.longTap.dispatch(e, this.element),
                          this._preventTap = !0
                    }
                        .bind(this), 750)
              }
            }
          }
        }, {
          key: "move",
          value: function(e) {
            if (e.touches) {
              var t = this.preV
                  , i = e.touches.length
                  , n = e.touches[0].pageX
                  , s = e.touches[0].pageY;
              if (this.isDoubleTap = !1,
              i > 1) {
                var l = e.touches[1].pageX
                    , o = e.touches[1].pageY
                    , r = {
                  x: e.touches[1].pageX - n,
                  y: e.touches[1].pageY - s
                };
                null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y(r) / this.pinchStartLen,
                    this.pinch.dispatch(e, this.element)),
                    e.angle = q(r, t),
                    this.rotate.dispatch(e, this.element)),
                    t.x = r.x,
                    t.y = r.y,
                    null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2,
                        e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0,
                        e.deltaY = 0),
                    this.twoFingerPressMove.dispatch(e, this.element),
                    this.sx2 = l,
                    this.sy2 = o
              } else {
                if (null !== this.x2) {
                  e.deltaX = n - this.x2,
                      e.deltaY = s - this.y2;
                  var a = Math.abs(this.x1 - this.x2)
                      , h = Math.abs(this.y1 - this.y2);
                  (a > 10 || h > 10) && (this._preventTap = !0)
                } else
                  e.deltaX = 0,
                      e.deltaY = 0;
                this.pressMove.dispatch(e, this.element)
              }
              this.touchMove.dispatch(e, this.element),
                  this._cancelLongTap(),
                  this.x2 = n,
                  this.y2 = s,
              i > 1 && e.preventDefault()
            }
          }
        }, {
          key: "end",
          value: function(e) {
            if (e.changedTouches) {
              this._cancelLongTap();
              var t = this;
              e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element),
                  this.sx2 = this.sy2 = null),
                  this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2),
                      this.swipeTimeout = setTimeout((function() {
                            t.swipe.dispatch(e, t.element)
                          }
                      ), 0)) : (this.tapTimeout = setTimeout((function() {
                        t._preventTap || t.tap.dispatch(e, t.element),
                        t.isDoubleTap && (t.doubleTap.dispatch(e, t.element),
                            t.isDoubleTap = !1)
                      }
                  ), 0),
                  t.isDoubleTap || (t.singleTapTimeout = setTimeout((function() {
                        t.singleTap.dispatch(e, t.element)
                      }
                  ), 250))),
                  this.touchEnd.dispatch(e, this.element),
                  this.preV.x = 0,
                  this.preV.y = 0,
                  this.zoom = 1,
                  this.pinchStartLen = null,
                  this.x1 = this.x2 = this.y1 = this.y2 = null
            }
          }
        }, {
          key: "cancelAll",
          value: function() {
            this._preventTap = !0,
                clearTimeout(this.singleTapTimeout),
                clearTimeout(this.tapTimeout),
                clearTimeout(this.longTapTimeout),
                clearTimeout(this.swipeTimeout)
          }
        }, {
          key: "cancel",
          value: function(e) {
            this.cancelAll(),
                this.touchCancel.dispatch(e, this.element)
          }
        }, {
          key: "_cancelLongTap",
          value: function() {
            clearTimeout(this.longTapTimeout)
          }
        }, {
          key: "_cancelSingleTap",
          value: function() {
            clearTimeout(this.singleTapTimeout)
          }
        }, {
          key: "_swipeDirection",
          value: function(e, t, i, n) {
            return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
          }
        }, {
          key: "on",
          value: function(e, t) {
            this[e] && this[e].add(t)
          }
        }, {
          key: "off",
          value: function(e, t) {
            this[e] && this[e].del(t)
          }
        }, {
          key: "destroy",
          value: function() {
            return this.singleTapTimeout && clearTimeout(this.singleTapTimeout),
            this.tapTimeout && clearTimeout(this.tapTimeout),
            this.longTapTimeout && clearTimeout(this.longTapTimeout),
            this.swipeTimeout && clearTimeout(this.swipeTimeout),
                this.element.removeEventListener("touchstart", this.start),
                this.element.removeEventListener("touchmove", this.move),
                this.element.removeEventListener("touchend", this.end),
                this.element.removeEventListener("touchcancel", this.cancel),
                this.rotate.del(),
                this.touchStart.del(),
                this.multipointStart.del(),
                this.multipointEnd.del(),
                this.pinch.del(),
                this.swipe.del(),
                this.tap.del(),
                this.doubleTap.del(),
                this.longTap.del(),
                this.singleTap.del(),
                this.pressMove.del(),
                this.twoFingerPressMove.del(),
                this.touchMove.del(),
                this.touchEnd.del(),
                this.touchCancel.del(),
                this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null,
                window.removeEventListener("scroll", this._cancelAllHandler),
                null
          }
        }]),
            e
      }();
      function W(e) {
        var t = function() {
          var e, t = document.createElement("fakeelement"), i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
          for (e in i)
            if (void 0 !== t.style[e])
              return i[e]
        }()
            , i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            , n = c(e, "gslide-media") ? e : e.querySelector(".gslide-media")
            , s = u(n, ".ginner-container")
            , l = e.querySelector(".gslide-description");
        i > 769 && (n = s),
            h(n, "greset"),
            v(n, "translate3d(0, 0, 0)"),
            a(t, {
              onElement: n,
              once: !0,
              withCallback: function(e, t) {
                d(n, "greset")
              }
            }),
            n.style.opacity = "",
        l && (l.style.opacity = "")
      }
      function B(e) {
        if (e.events.hasOwnProperty("touch"))
          return !1;
        var t, i, n, s = y(), l = s.width, o = s.height, r = !1, a = null, g = null, f = null, p = !1, m = 1, x = 1, b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {}, P = {}, M = 0, z = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"), q = new _(X,{
          touchStart: function(t) {
            if (r = !0,
            (c(t.targetTouches[0].target, "ginner-container") || u(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1),
            u(t.targetTouches[0].target, ".gslide-inline") && !c(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1),
                r) {
              if (P = t.targetTouches[0],
                  O.pageX = t.targetTouches[0].pageX,
                  O.pageY = t.targetTouches[0].pageY,
                  M = t.targetTouches[0].clientX,
                  z = t.targetTouches[0].clientY,
                  a = e.activeSlide,
                  g = a.querySelector(".gslide-media"),
                  n = a.querySelector(".gslide-inline"),
                  f = null,
              c(g, "gslide-image") && (f = g.querySelector("img")),
              (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g = a.querySelector(".ginner-container")),
                  d(Y, "greset"),
              t.pageX > 20 && t.pageX < window.innerWidth - 20)
                return;
              t.preventDefault()
            }
          },
          touchMove: function(s) {
            if (r && (P = s.targetTouches[0],
            !b && !S)) {
              if (n && n.offsetHeight > o) {
                var a = O.pageX - P.pageX;
                if (Math.abs(a) <= 13)
                  return !1
              }
              p = !0;
              var h, d = s.targetTouches[0].clientX, c = s.targetTouches[0].clientY, u = M - d, m = z - c;
              if (Math.abs(u) > Math.abs(m) ? (L = !1,
                  I = !0) : (I = !1,
                  L = !0),
                  t = P.pageX - O.pageX,
                  E = 100 * t / l,
                  i = P.pageY - O.pageY,
                  A = 100 * i / o,
              L && f && (h = 1 - Math.abs(i) / o,
                  Y.style.opacity = h,
              e.settings.touchFollowAxis && (E = 0)),
              I && (h = 1 - Math.abs(t) / l,
                  g.style.opacity = h,
              e.settings.touchFollowAxis && (A = 0)),
                  !f)
                return v(g, "translate3d(".concat(E, "%, 0, 0)"));
              v(g, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"))
            }
          },
          touchEnd: function() {
            if (r) {
              if (p = !1,
              S || b)
                return C = w,
                    void (k = T);
              var t = Math.abs(parseInt(A))
                  , i = Math.abs(parseInt(E));
              if (!(t > 29 && f))
                return t < 29 && i < 25 ? (h(Y, "greset"),
                    Y.style.opacity = 1,
                    W(g)) : void 0;
              e.close()
            }
          },
          multipointEnd: function() {
            setTimeout((function() {
                  b = !1
                }
            ), 50)
          },
          multipointStart: function() {
            b = !0,
                m = x || 1
          },
          pinch: function(e) {
            if (!f || p)
              return !1;
            b = !0,
                f.scaleX = f.scaleY = m * e.zoom;
            var t = m * e.zoom;
            if (S = !0,
            t <= 1)
              return S = !1,
                  t = 1,
                  k = null,
                  C = null,
                  w = null,
                  T = null,
                  void f.setAttribute("style", "");
            t > 4.5 && (t = 4.5),
                f.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"),
                x = t
          },
          pressMove: function(e) {
            if (S && !b) {
              var t = P.pageX - O.pageX
                  , i = P.pageY - O.pageY;
              C && (t += C),
              k && (i += k),
                  w = t,
                  T = i;
              var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
              x && (n += " scale3d(".concat(x, ", ").concat(x, ", 1)")),
                  v(f, n)
            }
          },
          swipe: function(t) {
            if (!S)
              if (b)
                b = !1;
              else {
                if ("Left" == t.direction) {
                  if (e.index == e.elements.length - 1)
                    return W(g);
                  e.nextSlide()
                }
                if ("Right" == t.direction) {
                  if (0 == e.index)
                    return W(g);
                  e.prevSlide()
                }
              }
          }
        });
        e.events.touch = q
      }
      var H = function() {
        function e(i, n) {
          var s = this
              , l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          if (t(this, e),
              this.img = i,
              this.slide = n,
              this.onclose = l,
              this.img.setZoomEvents)
            return !1;
          this.active = !1,
              this.zoomedIn = !1,
              this.dragging = !1,
              this.currentX = null,
              this.currentY = null,
              this.initialX = null,
              this.initialY = null,
              this.xOffset = 0,
              this.yOffset = 0,
              this.img.addEventListener("mousedown", (function(e) {
                    return s.dragStart(e)
                  }
              ), !1),
              this.img.addEventListener("mouseup", (function(e) {
                    return s.dragEnd(e)
                  }
              ), !1),
              this.img.addEventListener("mousemove", (function(e) {
                    return s.drag(e)
                  }
              ), !1),
              this.img.addEventListener("click", (function(e) {
                    return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(),
                        !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn()
                  }
              ), !1),
              this.img.setZoomEvents = !0
        }
        return n(e, [{
          key: "zoomIn",
          value: function() {
            var e = this.widowWidth();
            if (!(this.zoomedIn || e <= 768)) {
              var t = this.img;
              if (t.setAttribute("data-style", t.getAttribute("style")),
                  t.style.maxWidth = t.naturalWidth + "px",
                  t.style.maxHeight = t.naturalHeight + "px",
              t.naturalWidth > e) {
                var i = e / 2 - t.naturalWidth / 2;
                this.setTranslate(this.img.parentNode, i, 0)
              }
              this.slide.classList.add("zoomed"),
                  this.zoomedIn = !0
            }
          }
        }, {
          key: "zoomOut",
          value: function() {
            this.img.parentNode.setAttribute("style", ""),
                this.img.setAttribute("style", this.img.getAttribute("data-style")),
                this.slide.classList.remove("zoomed"),
                this.zoomedIn = !1,
                this.currentX = null,
                this.currentY = null,
                this.initialX = null,
                this.initialY = null,
                this.xOffset = 0,
                this.yOffset = 0,
            this.onclose && "function" == typeof this.onclose && this.onclose()
          }
        }, {
          key: "dragStart",
          value: function(e) {
            e.preventDefault(),
                this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset,
                    this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset,
                    this.initialY = e.clientY - this.yOffset),
                e.target === this.img && (this.active = !0,
                    this.img.classList.add("dragging"))) : this.active = !1
          }
        }, {
          key: "dragEnd",
          value: function(e) {
            var t = this;
            e.preventDefault(),
                this.initialX = this.currentX,
                this.initialY = this.currentY,
                this.active = !1,
                setTimeout((function() {
                      t.dragging = !1,
                          t.img.isDragging = !1,
                          t.img.classList.remove("dragging")
                    }
                ), 100)
          }
        }, {
          key: "drag",
          value: function(e) {
            this.active && (e.preventDefault(),
                "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX,
                    this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX,
                    this.currentY = e.clientY - this.initialY),
                this.xOffset = this.currentX,
                this.yOffset = this.currentY,
                this.img.isDragging = !0,
                this.dragging = !0,
                this.setTranslate(this.img, this.currentX, this.currentY))
          }
        }, {
          key: "onMove",
          value: function(e) {
            if (this.zoomedIn) {
              var t = e.clientX - this.img.naturalWidth / 2
                  , i = e.clientY - this.img.naturalHeight / 2;
              this.setTranslate(this.img, t, i)
            }
          }
        }, {
          key: "setTranslate",
          value: function(e, t, i) {
            e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
          }
        }, {
          key: "widowWidth",
          value: function() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          }
        }]),
            e
      }()
          , V = function() {
        function e() {
          var i = this
              , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t(this, e);
          var s = n.dragEl
              , l = n.toleranceX
              , o = void 0 === l ? 40 : l
              , r = n.toleranceY
              , a = void 0 === r ? 65 : r
              , h = n.slide
              , d = void 0 === h ? null : h
              , c = n.instance
              , u = void 0 === c ? null : c;
          this.el = s,
              this.active = !1,
              this.dragging = !1,
              this.currentX = null,
              this.currentY = null,
              this.initialX = null,
              this.initialY = null,
              this.xOffset = 0,
              this.yOffset = 0,
              this.direction = null,
              this.lastDirection = null,
              this.toleranceX = o,
              this.toleranceY = a,
              this.toleranceReached = !1,
              this.dragContainer = this.el,
              this.slide = d,
              this.instance = u,
              this.el.addEventListener("mousedown", (function(e) {
                    return i.dragStart(e)
                  }
              ), !1),
              this.el.addEventListener("mouseup", (function(e) {
                    return i.dragEnd(e)
                  }
              ), !1),
              this.el.addEventListener("mousemove", (function(e) {
                    return i.drag(e)
                  }
              ), !1)
        }
        return n(e, [{
          key: "dragStart",
          value: function(e) {
            if (this.slide.classList.contains("zoomed"))
              this.active = !1;
            else {
              "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset,
                  this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset,
                  this.initialY = e.clientY - this.yOffset);
              var t = e.target.nodeName.toLowerCase();
              e.target.classList.contains("nodrag") || u(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(),
              (e.target === this.el || "img" !== t && u(e.target, ".gslide-inline")) && (this.active = !0,
                  this.el.classList.add("dragging"),
                  this.dragContainer = u(e.target, ".ginner-container")))
            }
          }
        }, {
          key: "dragEnd",
          value: function(e) {
            var t = this;
            e && e.preventDefault(),
                this.initialX = 0,
                this.initialY = 0,
                this.currentX = null,
                this.currentY = null,
                this.initialX = null,
                this.initialY = null,
                this.xOffset = 0,
                this.yOffset = 0,
                this.active = !1,
            this.doSlideChange && (this.instance.preventOutsideClick = !0,
            "right" == this.doSlideChange && this.instance.prevSlide(),
            "left" == this.doSlideChange && this.instance.nextSlide()),
            this.doSlideClose && this.instance.close(),
            this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0),
                setTimeout((function() {
                      t.instance.preventOutsideClick = !1,
                          t.toleranceReached = !1,
                          t.lastDirection = null,
                          t.dragging = !1,
                          t.el.isDragging = !1,
                          t.el.classList.remove("dragging"),
                          t.slide.classList.remove("dragging-nav"),
                          t.dragContainer.style.transform = "",
                          t.dragContainer.style.transition = ""
                    }
                ), 100)
          }
        }, {
          key: "drag",
          value: function(e) {
            if (this.active) {
              e.preventDefault(),
                  this.slide.classList.add("dragging-nav"),
                  "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX,
                      this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX,
                      this.currentY = e.clientY - this.initialY),
                  this.xOffset = this.currentX,
                  this.yOffset = this.currentY,
                  this.el.isDragging = !0,
                  this.dragging = !0,
                  this.doSlideChange = !1,
                  this.doSlideClose = !1;
              var t = Math.abs(this.currentX)
                  , i = Math.abs(this.currentY);
              if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                this.yOffset = 0,
                    this.lastDirection = "x",
                    this.setTranslate(this.dragContainer, this.currentX, 0);
                var n = this.shouldChange();
                if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n),
                this.instance.settings.dragAutoSnap && n)
                  return this.instance.preventOutsideClick = !0,
                      this.toleranceReached = !0,
                      this.active = !1,
                      this.instance.preventOutsideClick = !0,
                      this.dragEnd(null),
                  "right" == n && this.instance.prevSlide(),
                      void ("left" == n && this.instance.nextSlide())
              }
              if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                this.xOffset = 0,
                    this.lastDirection = "y",
                    this.setTranslate(this.dragContainer, 0, this.currentY);
                var s = this.shouldClose();
                return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0),
                    void (this.instance.settings.dragAutoSnap && s && this.instance.close())
              }
            }
          }
        }, {
          key: "shouldChange",
          value: function() {
            var e = !1;
            if (Math.abs(this.currentX) >= this.toleranceX) {
              var t = this.currentX > 0 ? "right" : "left";
              ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t)
            }
            return e
          }
        }, {
          key: "shouldClose",
          value: function() {
            var e = !1;
            return Math.abs(this.currentY) >= this.toleranceY && (e = !0),
                e
          }
        }, {
          key: "setTranslate",
          value: function(e, t, i) {
            var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            e.style.transition = n ? "all .2s ease" : "",
                e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
          }
        }]),
            e
      }();
      function j(e, t, i, n) {
        var s = e.querySelector(".gslide-media")
            , l = new Image
            , o = "gSlideTitle_" + i
            , r = "gSlideDesc_" + i;
        l.addEventListener("load", (function() {
              T(n) && n()
            }
        ), !1),
            l.src = t.href,
        "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes,
            l.srcset = t.srcset),
            l.alt = "",
        I(t.alt) || "" === t.alt || (l.alt = t.alt),
        "" !== t.title && l.setAttribute("aria-labelledby", o),
        "" !== t.description && l.setAttribute("aria-describedby", r),
        t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width),
        t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height),
            s.insertBefore(l, s.firstChild)
      }
      function F(e, t, i, n) {
        var s = this
            , l = e.querySelector(".ginner-container")
            , o = "gvideo" + i
            , r = e.querySelector(".gslide-media")
            , a = this.getAllPlayers();
        h(l, "gvideo-container"),
            r.insertBefore(m('<div class="gvideo-wrapper"></div>'), r.firstChild);
        var d = e.querySelector(".gvideo-wrapper");
        S(this.settings.plyr.css, "Plyr");
        var c = t.href
            , u = null == t ? void 0 : t.videoProvider
            , g = !1;
        r.style.maxWidth = t.width,
            S(this.settings.plyr.js, "Plyr", (function() {
                  if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"),
                  !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"),
                  "local" === u || !u) {
                    u = "local";
                    var l = '<video id="' + o + '" ';
                    l += 'style="background:#000; max-width: '.concat(t.width, ';" '),
                        l += 'preload="metadata" ',
                        l += 'x-webkit-airplay="allow" ',
                        l += "playsinline ",
                        l += "controls ",
                        l += 'class="gvideo-local">',
                        l += '<source src="'.concat(c, '">'),
                        g = m(l += "</video>")
                  }
                  var r = g || m('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
                  h(d, "".concat(u, "-video gvideo")),
                      d.appendChild(r),
                      d.setAttribute("data-id", o),
                      d.setAttribute("data-index", i);
                  var v = O(s.settings.plyr, "config") ? s.settings.plyr.config : {}
                      , f = new Plyr("#" + o,v);
                  f.on("ready", (function(e) {
                        a[o] = e.detail.plyr,
                        T(n) && n()
                      }
                  )),
                      b((function() {
                            return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready
                          }
                      ), (function() {
                            s.resize(e)
                          }
                      )),
                      f.on("enterfullscreen", R),
                      f.on("exitfullscreen", R)
                }
            ))
      }
      function R(e) {
        var t = u(e.target, ".gslide-media");
        "enterfullscreen" === e.type && h(t, "fullscreen"),
        "exitfullscreen" === e.type && d(t, "fullscreen")
      }
      function G(e, t, i, n) {
        var s, l = this, o = e.querySelector(".gslide-media"), r = !(!O(t, "href") || !t.href) && t.href.split("#").pop().trim(), d = !(!O(t, "content") || !t.content) && t.content;
        if (d && (C(d) && (s = m('<div class="ginlined-content">'.concat(d, "</div>"))),
            k(d))) {
          "none" == d.style.display && (d.style.display = "block");
          var c = document.createElement("div");
          c.className = "ginlined-content",
              c.appendChild(d),
              s = c
        }
        if (r) {
          var u = document.getElementById(r);
          if (!u)
            return !1;
          var g = u.cloneNode(!0);
          g.style.height = t.height,
              g.style.maxWidth = t.width,
              h(g, "ginlined-content"),
              s = g
        }
        if (!s)
          return console.error("Unable to append inline slide content", t),
              !1;
        o.style.height = t.height,
            o.style.width = t.width,
            o.appendChild(s),
            this.events["inlineclose" + r] = a("click", {
              onElement: o.querySelectorAll(".gtrigger-close"),
              withCallback: function(e) {
                e.preventDefault(),
                    l.close()
              }
            }),
        T(n) && n()
      }
      function Z(e, t, i, n) {
        var s = e.querySelector(".gslide-media")
            , l = function(e) {
          var t = e.url
              , i = e.allow
              , n = e.callback
              , s = e.appendTo
              , l = document.createElement("iframe");
          return l.className = "vimeo-video gvideo",
              l.src = t,
              l.style.width = "100%",
              l.style.height = "100%",
          i && l.setAttribute("allow", i),
              l.onload = function() {
                l.onload = null,
                    h(l, "node-ready"),
                T(n) && n()
              }
              ,
          s && s.appendChild(l),
              l
        }({
          url: t.href,
          callback: n
        });
        s.parentNode.style.maxWidth = t.width,
            s.parentNode.style.height = t.height,
            s.appendChild(l)
      }
      var U = function() {
        function e() {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t(this, e),
              this.defaults = {
                href: "",
                sizes: "",
                srcset: "",
                title: "",
                type: "",
                videoProvider: "",
                description: "",
                alt: "",
                descPosition: "bottom",
                effect: "",
                width: "",
                height: "",
                content: !1,
                zoomable: !0,
                draggable: !0
              },
          L(i) && (this.defaults = l(this.defaults, i))
        }
        return n(e, [{
          key: "sourceType",
          value: function(e) {
            var t = e;
            if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/))
              return "image";
            if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))
              return "video";
            if (e.match(/vimeo\.com\/([0-9]*)/))
              return "video";
            if (null !== e.match(/\.(mp4|ogg|webm|mov)/))
              return "video";
            if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/))
              return "audio";
            if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim())
              return "inline";
            return e.indexOf("goajax=true") > -1 ? "ajax" : "external"
          }
        }, {
          key: "parseConfig",
          value: function(e, t) {
            var i = this
                , n = l({
              descPosition: t.descPosition
            }, this.defaults);
            if (L(e) && !k(e)) {
              O(e, "type") || (O(e, "content") && e.content ? e.type = "inline" : O(e, "href") && (e.type = this.sourceType(e.href)));
              var s = l(n, e);
              return this.setSize(s, t),
                  s
            }
            var r = ""
                , a = e.getAttribute("data-glightbox")
                , h = e.nodeName.toLowerCase();
            if ("a" === h && (r = e.href),
            "img" === h && (r = e.src,
                n.alt = e.alt),
                n.href = r,
                o(n, (function(s, l) {
                      O(t, l) && "width" !== l && (n[l] = t[l]);
                      var o = e.dataset[l];
                      I(o) || (n[l] = i.sanitizeValue(o))
                    }
                )),
            n.content && (n.type = "inline"),
            !n.type && r && (n.type = this.sourceType(r)),
                I(a)) {
              if (!n.title && "a" == h) {
                var d = e.title;
                I(d) || "" === d || (n.title = d)
              }
              if (!n.title && "img" == h) {
                var c = e.alt;
                I(c) || "" === c || (n.title = c)
              }
            } else {
              var u = [];
              o(n, (function(e, t) {
                    u.push(";\\s?" + t)
                  }
              )),
                  u = u.join("\\s?:|"),
              "" !== a.trim() && o(n, (function(e, t) {
                    var s = a
                        , l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)")
                        , o = s.match(l);
                    if (o && o.length && o[1]) {
                      var r = o[1].trim().replace(/;\s*$/, "");
                      n[t] = i.sanitizeValue(r)
                    }
                  }
              ))
            }
            if (n.description && "." === n.description.substring(0, 1)) {
              var g;
              try {
                g = document.querySelector(n.description).innerHTML
              } catch (e) {
                if (!(e instanceof DOMException))
                  throw e
              }
              g && (n.description = g)
            }
            if (!n.description) {
              var v = e.querySelector(".glightbox-desc");
              v && (n.description = v.innerHTML)
            }
            return this.setSize(n, t, e),
                this.slideConfig = n,
                n
          }
        }, {
          key: "setSize",
          value: function(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                , n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width)
                , s = this.checkSize(t.height);
            return e.width = O(e, "width") && "" !== e.width ? this.checkSize(e.width) : n,
                e.height = O(e, "height") && "" !== e.height ? this.checkSize(e.height) : s,
            i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width,
                e._hasCustomHeight = !!i.dataset.height),
                e
          }
        }, {
          key: "checkSize",
          value: function(e) {
            return M(e) ? "".concat(e, "px") : e
          }
        }, {
          key: "sanitizeValue",
          value: function(e) {
            return "true" !== e && "false" !== e ? e : "true" === e
          }
        }]),
            e
      }()
          , $ = function() {
        function e(i, n, s) {
          t(this, e),
              this.element = i,
              this.instance = n,
              this.index = s
        }
        return n(e, [{
          key: "setContent",
          value: function() {
            var e = this
                , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (c(t, "loaded"))
              return !1;
            var n = this.instance.settings
                , s = this.slideConfig
                , l = w();
            T(n.beforeSlideLoad) && n.beforeSlideLoad({
              index: this.index,
              slide: t,
              player: !1
            });
            var o = s.type
                , r = s.descPosition
                , a = t.querySelector(".gslide-media")
                , d = t.querySelector(".gslide-title")
                , u = t.querySelector(".gslide-desc")
                , g = t.querySelector(".gdesc-inner")
                , v = i
                , f = "gSlideTitle_" + this.index
                , p = "gSlideDesc_" + this.index;
            if (T(n.afterSlideLoad) && (v = function() {
                  T(i) && i(),
                      n.afterSlideLoad({
                        index: e.index,
                        slide: t,
                        player: e.instance.getSlidePlayerInstance(e.index)
                      })
                }
            ),
                "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (d && "" !== s.title ? (d.id = f,
                    d.innerHTML = s.title) : d.parentNode.removeChild(d),
                    u && "" !== s.description ? (u.id = p,
                        l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText),
                            u.innerHTML = s.smallDescription,
                            this.descriptionEvents(u, s)) : u.innerHTML = s.description) : u.parentNode.removeChild(u),
                    h(a.parentNode, "desc-".concat(r)),
                    h(g.parentNode, "description-".concat(r))),
                h(a, "gslide-".concat(o)),
                h(t, "loaded"),
            "video" !== o) {
              if ("external" !== o)
                return "inline" === o ? (G.apply(this.instance, [t, s, this.index, v]),
                    void (s.draggable && new V({
                      dragEl: t.querySelector(".gslide-inline"),
                      toleranceX: n.dragToleranceX,
                      toleranceY: n.dragToleranceY,
                      slide: t,
                      instance: this.instance
                    }))) : void ("image" !== o ? T(v) && v() : j(t, s, this.index, (function() {
                      var i = t.querySelector("img");
                      s.draggable && new V({
                        dragEl: i,
                        toleranceX: n.dragToleranceX,
                        toleranceY: n.dragToleranceY,
                        slide: t,
                        instance: e.instance
                      }),
                      s.zoomable && i.naturalWidth > i.offsetWidth && (h(i, "zoomable"),
                          new H(i,t,(function() {
                                e.instance.resize()
                              }
                          ))),
                      T(v) && v()
                    }
                )));
              Z.apply(this, [t, s, this.index, v])
            } else
              F.apply(this.instance, [t, s, this.index, v])
          }
        }, {
          key: "slideShortDesc",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50
                , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                , n = document.createElement("div");
            n.innerHTML = e;
            var s = n.innerText
                , l = i;
            if ((e = s.trim()).length <= t)
              return e;
            var o = e.substr(0, t - 1);
            return l ? (n = null,
            o + '... <a href="#" class="desc-more">' + i + "</a>") : o
          }
        }, {
          key: "descriptionEvents",
          value: function(e, t) {
            var i = this
                , n = e.querySelector(".desc-more");
            if (!n)
              return !1;
            a("click", {
              onElement: n,
              withCallback: function(e, n) {
                e.preventDefault();
                var s = document.body
                    , l = u(n, ".gslide-desc");
                if (!l)
                  return !1;
                l.innerHTML = t.description,
                    h(s, "gdesc-open");
                var o = a("click", {
                  onElement: [s, u(l, ".gslide-description")],
                  withCallback: function(e, n) {
                    "a" !== e.target.nodeName.toLowerCase() && (d(s, "gdesc-open"),
                        h(s, "gdesc-closed"),
                        l.innerHTML = t.smallDescription,
                        i.descriptionEvents(l, t),
                        setTimeout((function() {
                              d(s, "gdesc-closed")
                            }
                        ), 400),
                        o.destroy())
                  }
                })
              }
            })
          }
        }, {
          key: "create",
          value: function() {
            return m(this.instance.settings.slideHTML)
          }
        }, {
          key: "getConfig",
          value: function() {
            k(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
            var e = new U(this.instance.settings.slideExtraAttributes);
            return this.slideConfig = e.parseConfig(this.element, this.instance.settings),
                this.slideConfig
          }
        }]),
            e
      }()
          , J = w()
          , K = null !== w() || void 0 !== document.createTouch || "ontouchstart"in window || "onmsgesturechange"in window || navigator.msMaxTouchPoints
          , Q = document.getElementsByTagName("html")[0]
          , ee = {
        selector: ".glightbox",
        elements: null,
        skin: "clean",
        theme: "clean",
        closeButton: !0,
        startAt: null,
        autoplayVideos: !0,
        autofocusVideos: !0,
        descPosition: "bottom",
        width: "900px",
        height: "506px",
        videosWidth: "960px",
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        slideInserted: null,
        slideRemoved: null,
        slideExtraAttributes: null,
        onOpen: null,
        onClose: null,
        loop: !1,
        zoomable: !0,
        draggable: !0,
        dragAutoSnap: !1,
        dragToleranceX: 40,
        dragToleranceY: 65,
        preload: !0,
        oneSlidePerOpen: !1,
        touchNavigation: !0,
        touchFollowAxis: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        plugins: !1,
        plyr: {
          css: "https://cdn.plyr.io/3.6.12/plyr.css",
          js: "https://cdn.plyr.io/3.6.12/plyr.js",
          config: {
            ratio: "16:9",
            fullscreen: {
              enabled: !0,
              iosNative: !0
            },
            youtube: {
              noCookie: !0,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3
            },
            vimeo: {
              byline: !1,
              portrait: !1,
              title: !1,
              transparent: !1
            }
          }
        },
        openEffect: "zoom",
        closeEffect: "zoom",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        cssEfects: {
          fade: {
            in: "fadeIn",
            out: "fadeOut"
          },
          zoom: {
            in: "zoomIn",
            out: "zoomOut"
          },
          slide: {
            in: "slideInRight",
            out: "slideOutLeft"
          },
          slideBack: {
            in: "slideInLeft",
            out: "slideOutRight"
          },
          none: {
            in: "none",
            out: "none"
          }
        },
        svg: {
          close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
          next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
          prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
        },
        slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
        lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
      }
          , te = function() {
        function e() {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t(this, e),
              this.customOptions = i,
              this.settings = l(ee, i),
              this.effectsClasses = this.getAnimationClasses(),
              this.videoPlayers = {},
              this.apiEvents = [],
              this.fullElementsList = !1
        }
        return n(e, [{
          key: "init",
          value: function() {
            var e = this
                , t = this.getSelector();
            t && (this.baseEvents = a("click", {
              onElement: t,
              withCallback: function(t, i) {
                t.preventDefault(),
                    e.open(i)
              }
            })),
                this.elements = this.getElements()
          }
        }, {
          key: "open",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (0 === this.elements.length)
              return !1;
            this.activeSlide = null,
                this.prevActiveSlideIndex = null,
                this.prevActiveSlide = null;
            var i = M(t) ? t : this.settings.startAt;
            if (k(e)) {
              var n = e.getAttribute("data-gallery");
              n && (this.fullElementsList = this.elements,
                  this.elements = this.getGalleryElements(this.elements, n)),
              I(i) && (i = this.getElementIndex(e)) < 0 && (i = 0)
            }
            M(i) || (i = 0),
                this.build(),
                g(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
            var s = document.body
                , l = window.innerWidth - document.documentElement.clientWidth;
            if (l > 0) {
              var o = document.createElement("style");
              o.type = "text/css",
                  o.className = "gcss-styles",
                  o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"),
                  document.head.appendChild(o),
                  h(s, "gscrollbar-fixer")
            }
            h(s, "glightbox-open"),
                h(Q, "glightbox-open"),
            J && (h(document.body, "glightbox-mobile"),
                this.settings.slideEffect = "slide"),
                this.showSlide(i, !0),
                1 === this.elements.length ? (h(this.prevButton, "glightbox-button-hidden"),
                    h(this.nextButton, "glightbox-button-hidden")) : (d(this.prevButton, "glightbox-button-hidden"),
                    d(this.nextButton, "glightbox-button-hidden")),
                this.lightboxOpen = !0,
                this.trigger("open"),
            T(this.settings.onOpen) && this.settings.onOpen(),
            K && this.settings.touchNavigation && B(this),
            this.settings.keyboardNavigation && X(this)
          }
        }, {
          key: "openAt",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.open(null, e)
          }
        }, {
          key: "showSlide",
          value: function() {
            var e = this
                , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            f(this.loader),
                this.index = parseInt(t);
            var n = this.slidesContainer.querySelector(".current");
            n && d(n, "current"),
                this.slideAnimateOut();
            var s = this.slidesContainer.querySelectorAll(".gslide")[t];
            if (c(s, "loaded"))
              this.slideAnimateIn(s, i),
                  p(this.loader);
            else {
              f(this.loader);
              var l = this.elements[t]
                  , o = {
                index: this.index,
                slide: s,
                slideNode: s,
                slideConfig: l.slideConfig,
                slideIndex: this.index,
                trigger: l.node,
                player: null
              };
              this.trigger("slide_before_load", o),
                  l.instance.setContent(s, (function() {
                        p(e.loader),
                            e.resize(),
                            e.slideAnimateIn(s, i),
                            e.trigger("slide_after_load", o)
                      }
                  ))
            }
            this.slideDescription = s.querySelector(".gslide-description"),
                this.slideDescriptionContained = this.slideDescription && c(this.slideDescription.parentNode, "gslide-media"),
            this.settings.preload && (this.preloadSlide(t + 1),
                this.preloadSlide(t - 1)),
                this.updateNavigationClasses(),
                this.activeSlide = s
          }
        }, {
          key: "preloadSlide",
          value: function(e) {
            var t = this;
            if (e < 0 || e > this.elements.length - 1)
              return !1;
            if (I(this.elements[e]))
              return !1;
            var i = this.slidesContainer.querySelectorAll(".gslide")[e];
            if (c(i, "loaded"))
              return !1;
            var n = this.elements[e]
                , s = n.type
                , l = {
              index: e,
              slide: i,
              slideNode: i,
              slideConfig: n.slideConfig,
              slideIndex: e,
              trigger: n.node,
              player: null
            };
            this.trigger("slide_before_load", l),
                "video" === s || "external" === s ? setTimeout((function() {
                      n.instance.setContent(i, (function() {
                            t.trigger("slide_after_load", l)
                          }
                      ))
                    }
                ), 200) : n.instance.setContent(i, (function() {
                      t.trigger("slide_after_load", l)
                    }
                ))
          }
        }, {
          key: "prevSlide",
          value: function() {
            this.goToSlide(this.index - 1)
          }
        }, {
          key: "nextSlide",
          value: function() {
            this.goToSlide(this.index + 1)
          }
        }, {
          key: "goToSlide",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.prevActiveSlide = this.activeSlide,
                this.prevActiveSlideIndex = this.index,
            !this.loop() && (e < 0 || e > this.elements.length - 1))
              return !1;
            e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0),
                this.showSlide(e)
          }
        }, {
          key: "insertSlide",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
            t < 0 && (t = this.elements.length);
            var i = new $(e,this,t)
                , n = i.getConfig()
                , s = l({}, n)
                , o = i.create()
                , r = this.elements.length - 1;
            s.index = t,
                s.node = !1,
                s.instance = i,
                s.slideConfig = n,
                this.elements.splice(t, 0, s);
            var a = null
                , h = null;
            if (this.slidesContainer) {
              if (t > r)
                this.slidesContainer.appendChild(o);
              else {
                var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                this.slidesContainer.insertBefore(o, d)
              }
              (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t),
              0 === this.index && 0 === t && (this.index = 1),
                  this.updateNavigationClasses(),
                  a = this.slidesContainer.querySelectorAll(".gslide")[t],
                  h = this.getSlidePlayerInstance(t),
                  s.slideNode = a
            }
            this.trigger("slide_inserted", {
              index: t,
              slide: a,
              slideNode: a,
              slideConfig: n,
              slideIndex: t,
              trigger: null,
              player: h
            }),
            T(this.settings.slideInserted) && this.settings.slideInserted({
              index: t,
              slide: a,
              player: h
            })
          }
        }, {
          key: "removeSlide",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
            if (e < 0 || e > this.elements.length - 1)
              return !1;
            var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
            t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()),
                t.parentNode.removeChild(t)),
                this.elements.splice(e, 1),
                this.trigger("slide_removed", e),
            T(this.settings.slideRemoved) && this.settings.slideRemoved(e)
          }
        }, {
          key: "slideAnimateIn",
          value: function(e, t) {
            var i = this
                , n = e.querySelector(".gslide-media")
                , s = e.querySelector(".gslide-description")
                , l = {
              index: this.prevActiveSlideIndex,
              slide: this.prevActiveSlide,
              slideNode: this.prevActiveSlide,
              slideIndex: this.prevActiveSlide,
              slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
              trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
              player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
            }
                , o = {
              index: this.index,
              slide: this.activeSlide,
              slideNode: this.activeSlide,
              slideConfig: this.elements[this.index].slideConfig,
              slideIndex: this.index,
              trigger: this.elements[this.index].node,
              player: this.getSlidePlayerInstance(this.index)
            };
            if (n.offsetWidth > 0 && s && (p(s),
                s.style.display = ""),
                d(e, this.effectsClasses),
                t)
              g(e, this.settings.cssEfects[this.settings.openEffect].in, (function() {
                    i.settings.autoplayVideos && i.slidePlayerPlay(e),
                        i.trigger("slide_changed", {
                          prev: l,
                          current: o
                        }),
                    T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
                  }
              ));
            else {
              var r = this.settings.slideEffect
                  , a = "none" !== r ? this.settings.cssEfects[r].in : r;
              this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in),
                  g(e, a, (function() {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e),
                            i.trigger("slide_changed", {
                              prev: l,
                              current: o
                            }),
                        T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
                      }
                  ))
            }
            setTimeout((function() {
                  i.resize(e)
                }
            ), 100),
                h(e, "current")
          }
        }, {
          key: "slideAnimateOut",
          value: function() {
            if (!this.prevActiveSlide)
              return !1;
            var e = this.prevActiveSlide;
            d(e, this.effectsClasses),
                h(e, "prev");
            var t = this.settings.slideEffect
                , i = "none" !== t ? this.settings.cssEfects[t].out : t;
            this.slidePlayerPause(e),
                this.trigger("slide_before_change", {
                  prev: {
                    index: this.prevActiveSlideIndex,
                    slide: this.prevActiveSlide,
                    slideNode: this.prevActiveSlide,
                    slideIndex: this.prevActiveSlideIndex,
                    slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                    trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                    player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                  },
                  current: {
                    index: this.index,
                    slide: this.activeSlide,
                    slideNode: this.activeSlide,
                    slideIndex: this.index,
                    slideConfig: this.elements[this.index].slideConfig,
                    trigger: this.elements[this.index].node,
                    player: this.getSlidePlayerInstance(this.index)
                  }
                }),
            T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
              index: this.prevActiveSlideIndex,
              slide: this.prevActiveSlide,
              player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
            }, {
              index: this.index,
              slide: this.activeSlide,
              player: this.getSlidePlayerInstance(this.index)
            }]),
            this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out),
                g(e, i, (function() {
                      var t = e.querySelector(".ginner-container")
                          , i = e.querySelector(".gslide-media")
                          , n = e.querySelector(".gslide-description");
                      t.style.transform = "",
                          i.style.transform = "",
                          d(i, "greset"),
                          i.style.opacity = "",
                      n && (n.style.opacity = ""),
                          d(e, "prev")
                    }
                ))
          }
        }, {
          key: "getAllPlayers",
          value: function() {
            return this.videoPlayers
          }
        }, {
          key: "getSlidePlayerInstance",
          value: function(e) {
            var t = "gvideo" + e
                , i = this.getAllPlayers();
            return !(!O(i, t) || !i[t]) && i[t]
          }
        }, {
          key: "stopSlideVideo",
          value: function(e) {
            if (k(e)) {
              var t = e.querySelector(".gvideo-wrapper");
              t && (e = t.getAttribute("data-index"))
            }
            console.log("stopSlideVideo is deprecated, use slidePlayerPause");
            var i = this.getSlidePlayerInstance(e);
            i && i.playing && i.pause()
          }
        }, {
          key: "slidePlayerPause",
          value: function(e) {
            if (k(e)) {
              var t = e.querySelector(".gvideo-wrapper");
              t && (e = t.getAttribute("data-index"))
            }
            var i = this.getSlidePlayerInstance(e);
            i && i.playing && i.pause()
          }
        }, {
          key: "playSlideVideo",
          value: function(e) {
            if (k(e)) {
              var t = e.querySelector(".gvideo-wrapper");
              t && (e = t.getAttribute("data-index"))
            }
            console.log("playSlideVideo is deprecated, use slidePlayerPlay");
            var i = this.getSlidePlayerInstance(e);
            i && !i.playing && i.play()
          }
        }, {
          key: "slidePlayerPlay",
          value: function(e) {
            var t;
            if (!J || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
              if (k(e)) {
                var i = e.querySelector(".gvideo-wrapper");
                i && (e = i.getAttribute("data-index"))
              }
              var n = this.getSlidePlayerInstance(e);
              n && !n.playing && (n.play(),
              this.settings.autofocusVideos && n.elements.container.focus())
            }
          }
        }, {
          key: "setElements",
          value: function(e) {
            var t = this;
            this.settings.elements = !1;
            var i = [];
            e && e.length && o(e, (function(e, n) {
                  var s = new $(e,t,n)
                      , o = s.getConfig()
                      , r = l({}, o);
                  r.slideConfig = o,
                      r.instance = s,
                      r.index = n,
                      i.push(r)
                }
            )),
                this.elements = i,
            this.lightboxOpen && (this.slidesContainer.innerHTML = "",
            this.elements.length && (o(this.elements, (function() {
                  var e = m(t.settings.slideHTML);
                  t.slidesContainer.appendChild(e)
                }
            )),
                this.showSlide(0, !0)))
          }
        }, {
          key: "getElementIndex",
          value: function(e) {
            var t = !1;
            return o(this.elements, (function(i, n) {
                  if (O(i, "node") && i.node == e)
                    return t = n,
                        !0
                }
            )),
                t
          }
        }, {
          key: "getElements",
          value: function() {
            var e = this
                , t = [];
            this.elements = this.elements ? this.elements : [],
            !I(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, (function(i, n) {
                  var s = new $(i,e,n)
                      , o = s.getConfig()
                      , r = l({}, o);
                  r.node = !1,
                      r.index = n,
                      r.instance = s,
                      r.slideConfig = o,
                      t.push(r)
                }
            ));
            var i = !1;
            return this.getSelector() && (i = document.querySelectorAll(this.getSelector())),
                i ? (o(i, (function(i, n) {
                      var s = new $(i,e,n)
                          , o = s.getConfig()
                          , r = l({}, o);
                      r.node = i,
                          r.index = n,
                          r.instance = s,
                          r.slideConfig = o,
                          r.gallery = i.getAttribute("data-gallery"),
                          t.push(r)
                    }
                )),
                    t) : t
          }
        }, {
          key: "getGalleryElements",
          value: function(e, t) {
            return e.filter((function(e) {
                  return e.gallery == t
                }
            ))
          }
        }, {
          key: "getSelector",
          value: function() {
            return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
          }
        }, {
          key: "getActiveSlide",
          value: function() {
            return this.slidesContainer.querySelectorAll(".gslide")[this.index]
          }
        }, {
          key: "getActiveSlideIndex",
          value: function() {
            return this.index
          }
        }, {
          key: "getAnimationClasses",
          value: function() {
            var e = [];
            for (var t in this.settings.cssEfects)
              if (this.settings.cssEfects.hasOwnProperty(t)) {
                var i = this.settings.cssEfects[t];
                e.push("g".concat(i.in)),
                    e.push("g".concat(i.out))
              }
            return e.join(" ")
          }
        }, {
          key: "build",
          value: function() {
            var e = this;
            if (this.built)
              return !1;
            var t = document.body.childNodes
                , i = [];
            o(t, (function(e) {
                  e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e),
                      e.setAttribute("aria-hidden", "true"))
                }
            ));
            var n = O(this.settings.svg, "next") ? this.settings.svg.next : ""
                , s = O(this.settings.svg, "prev") ? this.settings.svg.prev : ""
                , l = O(this.settings.svg, "close") ? this.settings.svg.close : ""
                , r = this.settings.lightboxHTML;
            r = m(r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)),
                document.body.appendChild(r);
            var d = document.getElementById("glightbox-body");
            this.modal = d;
            var g = d.querySelector(".gclose");
            this.prevButton = d.querySelector(".gprev"),
                this.nextButton = d.querySelector(".gnext"),
                this.overlay = d.querySelector(".goverlay"),
                this.loader = d.querySelector(".gloader"),
                this.slidesContainer = document.getElementById("glightbox-slider"),
                this.bodyHiddenChildElms = i,
                this.events = {},
                h(this.modal, "glightbox-" + this.settings.skin),
            this.settings.closeButton && g && (this.events.close = a("click", {
              onElement: g,
              withCallback: function(t, i) {
                t.preventDefault(),
                    e.close()
              }
            })),
            g && !this.settings.closeButton && g.parentNode.removeChild(g),
            this.nextButton && (this.events.next = a("click", {
              onElement: this.nextButton,
              withCallback: function(t, i) {
                t.preventDefault(),
                    e.nextSlide()
              }
            })),
            this.prevButton && (this.events.prev = a("click", {
              onElement: this.prevButton,
              withCallback: function(t, i) {
                t.preventDefault(),
                    e.prevSlide()
              }
            })),
            this.settings.closeOnOutsideClick && (this.events.outClose = a("click", {
              onElement: d,
              withCallback: function(t, i) {
                e.preventOutsideClick || c(document.body, "glightbox-mobile") || u(t.target, ".ginner-container") || u(t.target, ".gbtn") || c(t.target, "gnext") || c(t.target, "gprev") || e.close()
              }
            })),
                o(this.elements, (function(t, i) {
                      e.slidesContainer.appendChild(t.instance.create()),
                          t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]
                    }
                )),
            K && h(document.body, "glightbox-touch"),
                this.events.resize = a("resize", {
                  onElement: window,
                  withCallback: function() {
                    e.resize()
                  }
                }),
                this.built = !0
          }
        }, {
          key: "resize",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if ((e = e || this.activeSlide) && !c(e, "zoomed")) {
              var t = y()
                  , i = e.querySelector(".gvideo-wrapper")
                  , n = e.querySelector(".gslide-image")
                  , s = this.slideDescription
                  , l = t.width
                  , o = t.height;
              if (l <= 768 ? h(document.body, "glightbox-mobile") : d(document.body, "glightbox-mobile"),
              i || n) {
                var r = !1;
                if (s && (c(s, "description-bottom") || c(s, "description-top")) && !c(s, "gabsolute") && (r = !0),
                    n)
                  if (l <= 768)
                    n.querySelector("img");
                  else if (r) {
                    var a = s.offsetHeight
                        , u = n.querySelector("img");
                    u.setAttribute("style", "max-height: calc(100vh - ".concat(a, "px)")),
                        s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"))
                  }
                if (i) {
                  var g = O(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                  if (!g) {
                    var v = i.clientWidth
                        , f = i.clientHeight
                        , p = v / f;
                    g = "".concat(v / p, ":").concat(f / p)
                  }
                  var m = g.split(":")
                      , x = this.settings.videosWidth
                      , b = this.settings.videosWidth
                      , S = (b = M(x) || -1 !== x.indexOf("px") ? parseInt(x) : -1 !== x.indexOf("vw") ? l * parseInt(x) / 100 : -1 !== x.indexOf("vh") ? o * parseInt(x) / 100 : -1 !== x.indexOf("%") ? l * parseInt(x) / 100 : parseInt(i.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));
                  if (S = Math.floor(S),
                  r && (o -= s.offsetHeight),
                  b > l || S > o || o < S && l > b) {
                    var w = i.offsetWidth
                        , T = i.offsetHeight
                        , C = o / T
                        , k = {
                      width: w * C,
                      height: T * C
                    };
                    i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")),
                    r && s.setAttribute("style", "max-width: ".concat(k.width, "px;"))
                  } else
                    i.parentNode.style.maxWidth = "".concat(x),
                    r && s.setAttribute("style", "max-width: ".concat(x, ";"))
                }
              }
            }
          }
        }, {
          key: "reload",
          value: function() {
            this.init()
          }
        }, {
          key: "updateNavigationClasses",
          value: function() {
            var e = this.loop();
            d(this.nextButton, "disabled"),
                d(this.prevButton, "disabled"),
                0 == this.index && this.elements.length - 1 == 0 ? (h(this.prevButton, "disabled"),
                    h(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || h(this.nextButton, "disabled") : h(this.prevButton, "disabled")
          }
        }, {
          key: "loop",
          value: function() {
            var e = O(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
            return e = O(this.settings, "loop") ? this.settings.loop : e,
                e
          }
        }, {
          key: "close",
          value: function() {
            var e = this;
            if (!this.lightboxOpen) {
              if (this.events) {
                for (var t in this.events)
                  this.events.hasOwnProperty(t) && this.events[t].destroy();
                this.events = null
              }
              return !1
            }
            if (this.closing)
              return !1;
            this.closing = !0,
                this.slidePlayerPause(this.activeSlide),
            this.fullElementsList && (this.elements = this.fullElementsList),
            this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, (function(e) {
                  e.removeAttribute("aria-hidden")
                }
            )),
                h(this.modal, "glightbox-closing"),
                g(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out),
                g(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, (function() {
                      if (e.activeSlide = null,
                          e.prevActiveSlideIndex = null,
                          e.prevActiveSlide = null,
                          e.built = !1,
                          e.events) {
                        for (var t in e.events)
                          e.events.hasOwnProperty(t) && e.events[t].destroy();
                        e.events = null
                      }
                      var i = document.body;
                      d(Q, "glightbox-open"),
                          d(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),
                          e.modal.parentNode.removeChild(e.modal),
                          e.trigger("close"),
                      T(e.settings.onClose) && e.settings.onClose();
                      var n = document.querySelector(".gcss-styles");
                      n && n.parentNode.removeChild(n),
                          e.lightboxOpen = !1,
                          e.closing = null
                    }
                ))
          }
        }, {
          key: "destroy",
          value: function() {
            this.close(),
                this.clearAllEvents(),
            this.baseEvents && this.baseEvents.destroy()
          }
        }, {
          key: "on",
          value: function(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e || !T(t))
              throw new TypeError("Event name and callback must be defined");
            this.apiEvents.push({
              evt: e,
              once: i,
              callback: t
            })
          }
        }, {
          key: "once",
          value: function(e, t) {
            this.on(e, t, !0)
          }
        }, {
          key: "trigger",
          value: function(e) {
            var t = this
                , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                , n = [];
            o(this.apiEvents, (function(t, s) {
                  var l = t.evt
                      , o = t.once
                      , r = t.callback;
                  l == e && (r(i),
                  o && n.push(s))
                }
            )),
            n.length && o(n, (function(e) {
                  return t.apiEvents.splice(e, 1)
                }
            ))
          }
        }, {
          key: "clearAllEvents",
          value: function() {
            this.apiEvents.splice(0, this.apiEvents.length)
          }
        }, {
          key: "version",
          value: function() {
            return "3.1.0"
          }
        }]),
            e
      }();
      return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            , t = new te(e);
        return t.init(),
            t
      }
    }
));
!function(t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n, s = "$()." + i + '("' + e + '")';
      return t.each(function(t, u) {
        var h = a.data(u, i);
        if (!h)
          return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0))
          return void r(s + " is not a valid method");
        var l = d.apply(h, o);
        n = void 0 === n ? l : n
      }),
          void 0 !== n ? n : t
    }
    function h(t, e) {
      t.each(function(t, o) {
        var n = a.data(o, i);
        n ? (n.option(e),
            n._init()) : (n = new s(o,e),
            a.data(o, i, n))
      })
    }
    a = a || e || t.jQuery,
    a && (s.prototype.option || (s.prototype.option = function(t) {
          a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
    ),
        a.fn[i] = function(t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e)
          }
          return h(this, t),
              this
        }
        ,
        o(a))
  }
  function o(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var n = Array.prototype.slice
      , s = t.console
      , r = "undefined" == typeof s ? function() {}
      : function(t) {
        s.error(t)
      }
  ;
  return o(e || t.jQuery),
      i
}),
    function(t, e) {
      "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
      function t() {}
      var e = t.prototype;
      return e.on = function(t, e) {
        if (t && e) {
          var i = this._events = this._events || {}
              , o = i[t] = i[t] || [];
          return o.indexOf(e) == -1 && o.push(e),
              this
        }
      }
          ,
          e.once = function(t, e) {
            if (t && e) {
              this.on(t, e);
              var i = this._onceEvents = this._onceEvents || {}
                  , o = i[t] = i[t] || {};
              return o[e] = !0,
                  this
            }
          }
          ,
          e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
              var o = i.indexOf(e);
              return o != -1 && i.splice(o, 1),
                  this
            }
          }
          ,
          e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
              i = i.slice(0),
                  e = e || [];
              for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n]
                    , r = o && o[s];
                r && (this.off(t, s),
                    delete o[s]),
                    s.apply(this, e)
              }
              return this
            }
          }
          ,
          e.allOff = function() {
            delete this._events,
                delete this._onceEvents
          }
          ,
          t
    }),
    function(t, e) {
      "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
      "use strict";
      function t(t) {
        var e = parseFloat(t)
            , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
      }
      function e() {}
      function i() {
        for (var t = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, e = 0; e < h; e++) {
          var i = u[e];
          t[i] = 0
        }
        return t
      }
      function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
            e
      }
      function n() {
        if (!d) {
          d = !0;
          var e = document.createElement("div");
          e.style.width = "200px",
              e.style.padding = "1px 2px 3px 4px",
              e.style.borderStyle = "solid",
              e.style.borderWidth = "1px 2px 3px 4px",
              e.style.boxSizing = "border-box";
          var i = document.body || document.documentElement;
          i.appendChild(e);
          var n = o(e);
          r = 200 == Math.round(t(n.width)),
              s.isBoxSizeOuter = r,
              i.removeChild(e)
        }
      }
      function s(e) {
        if (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
          var s = o(e);
          if ("none" == s.display)
            return i();
          var a = {};
          a.width = e.offsetWidth,
              a.height = e.offsetHeight;
          for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
            var f = u[l]
                , c = s[f]
                , m = parseFloat(c);
            a[f] = isNaN(m) ? 0 : m
          }
          var p = a.paddingLeft + a.paddingRight
              , y = a.paddingTop + a.paddingBottom
              , g = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , z = a.borderTopWidth + a.borderBottomWidth
              , I = d && r
              , x = t(s.width);
          x !== !1 && (a.width = x + (I ? 0 : p + _));
          var S = t(s.height);
          return S !== !1 && (a.height = S + (I ? 0 : y + z)),
              a.innerWidth = a.width - (p + _),
              a.innerHeight = a.height - (y + z),
              a.outerWidth = a.width + g,
              a.outerHeight = a.height + v,
              a
        }
      }
      var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
      }
          , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
      return s
    }),
    function(t, e) {
      "use strict";
      "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
      "use strict";
      var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
          return "matches";
        if (t.matchesSelector)
          return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
          var o = e[i]
              , n = o + "MatchesSelector";
          if (t[n])
            return n
        }
      }();
      return function(e, i) {
        return e[t](i)
      }
    }),
    function(t, e) {
      "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
      }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
      var i = {};
      i.extend = function(t, e) {
        for (var i in e)
          t[i] = e[i];
        return t
      }
          ,
          i.modulo = function(t, e) {
            return (t % e + e) % e
          }
      ;
      var o = Array.prototype.slice;
      i.makeArray = function(t) {
        if (Array.isArray(t))
          return t;
        if (null === t || void 0 === t)
          return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? o.call(t) : [t]
      }
          ,
          i.removeFrom = function(t, e) {
            var i = t.indexOf(e);
            i != -1 && t.splice(i, 1)
          }
          ,
          i.getParent = function(t, i) {
            for (; t.parentNode && t != document.body; )
              if (t = t.parentNode,
                  e(t, i))
                return t
          }
          ,
          i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
          }
          ,
          i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
          }
          ,
          i.filterFindElements = function(t, o) {
            t = i.makeArray(t);
            var n = [];
            return t.forEach(function(t) {
              if (t instanceof HTMLElement) {
                if (!o)
                  return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                  n.push(i[s])
              }
            }),
                n
          }
          ,
          i.debounceMethod = function(t, e, i) {
            i = i || 100;
            var o = t.prototype[e]
                , n = e + "Timeout";
            t.prototype[e] = function() {
              var t = this[n];
              clearTimeout(t);
              var e = arguments
                  , s = this;
              this[n] = setTimeout(function() {
                o.apply(s, e),
                    delete s[n]
              }, i)
            }
          }
          ,
          i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
          }
          ,
          i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
              return e + "-" + i
            }).toLowerCase()
          }
      ;
      var n = t.console;
      return i.htmlInit = function(e, o) {
        i.docReady(function() {
          var s = i.toDashed(o)
              , r = "data-" + s
              , a = document.querySelectorAll("[" + r + "]")
              , u = document.querySelectorAll(".js-" + s)
              , h = i.makeArray(a).concat(i.makeArray(u))
              , d = r + "-options"
              , l = t.jQuery;
          h.forEach(function(t) {
            var i, s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s)
            } catch (a) {
              return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
            }
            var u = new e(t,i);
            l && l.data(t, o, u)
          })
        })
      }
          ,
          i
    }),
    function(t, e) {
      "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
          t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
      "use strict";
      function i(t) {
        for (var e in t)
          return !1;
        return e = null,
            !0
      }
      function o(t, e) {
        t && (this.element = t,
            this.layout = e,
            this.position = {
              x: 0,
              y: 0
            },
            this._create())
      }
      function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
          return "-" + t.toLowerCase()
        })
      }
      var s = document.documentElement.style
          , r = "string" == typeof s.transition ? "transition" : "WebkitTransition"
          , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
          , u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      }[r]
          , h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
      }
          , d = o.prototype = Object.create(t.prototype);
      d.constructor = o,
          d._create = function() {
            this._transn = {
              ingProperties: {},
              clean: {},
              onEnd: {}
            },
                this.css({
                  position: "absolute"
                })
          }
          ,
          d.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
          }
          ,
          d.getSize = function() {
            this.size = e(this.element)
          }
          ,
          d.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
              var o = h[i] || i;
              e[o] = t[i]
            }
          }
          ,
          d.getPosition = function() {
            var t = getComputedStyle(this.element)
                , e = this.layout._getOption("originLeft")
                , i = this.layout._getOption("originTop")
                , o = t[e ? "left" : "right"]
                , n = t[i ? "top" : "bottom"]
                , s = parseFloat(o)
                , r = parseFloat(n)
                , a = this.layout.size;
            o.indexOf("%") != -1 && (s = s / 100 * a.width),
            n.indexOf("%") != -1 && (r = r / 100 * a.height),
                s = isNaN(s) ? 0 : s,
                r = isNaN(r) ? 0 : r,
                s -= e ? a.paddingLeft : a.paddingRight,
                r -= i ? a.paddingTop : a.paddingBottom,
                this.position.x = s,
                this.position.y = r
          }
          ,
          d.layoutPosition = function() {
            var t = this.layout.size
                , e = {}
                , i = this.layout._getOption("originLeft")
                , o = this.layout._getOption("originTop")
                , n = i ? "paddingLeft" : "paddingRight"
                , s = i ? "left" : "right"
                , r = i ? "right" : "left"
                , a = this.position.x + t[n];
            e[s] = this.getXValue(a),
                e[r] = "";
            var u = o ? "paddingTop" : "paddingBottom"
                , h = o ? "top" : "bottom"
                , d = o ? "bottom" : "top"
                , l = this.position.y + t[u];
            e[h] = this.getYValue(l),
                e[d] = "",
                this.css(e),
                this.emitEvent("layout", [this])
          }
          ,
          d.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
          }
          ,
          d.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
          }
          ,
          d._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x
                , o = this.position.y
                , n = t == this.position.x && e == this.position.y;
            if (this.setPosition(t, e),
            n && !this.isTransitioning)
              return void this.layoutPosition();
            var s = t - i
                , r = e - o
                , a = {};
            a.transform = this.getTranslate(s, r),
                this.transition({
                  to: a,
                  onTransitionEnd: {
                    transform: this.layoutPosition
                  },
                  isCleaning: !0
                })
          }
          ,
          d.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft")
                , o = this.layout._getOption("originTop");
            return t = i ? t : -t,
                e = o ? e : -e,
            "translate3d(" + t + "px, " + e + "px, 0)"
          }
          ,
          d.goTo = function(t, e) {
            this.setPosition(t, e),
                this.layoutPosition()
          }
          ,
          d.moveTo = d._transitionTo,
          d.setPosition = function(t, e) {
            this.position.x = parseFloat(t),
                this.position.y = parseFloat(e)
          }
          ,
          d._nonTransition = function(t) {
            this.css(t.to),
            t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
              t.onTransitionEnd[e].call(this)
          }
          ,
          d.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration))
              return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd)
              e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
              e.ingProperties[i] = !0,
              t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
              this.css(t.from);
              var o = this.element.offsetHeight;
              o = null
            }
            this.enableTransition(t.to),
                this.css(t.to),
                this.isTransitioning = !0
          }
      ;
      var l = "opacity," + n(a);
      d.enableTransition = function() {
        if (!this.isTransitioning) {
          var t = this.layout.options.transitionDuration;
          t = "number" == typeof t ? t + "ms" : t,
              this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
              }),
              this.element.addEventListener(u, this, !1)
        }
      }
          ,
          d.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
          }
          ,
          d.onotransitionend = function(t) {
            this.ontransitionend(t)
          }
      ;
      var f = {
        "-webkit-transform": "transform"
      };
      d.ontransitionend = function(t) {
        if (t.target === this.element) {
          var e = this._transn
              , o = f[t.propertyName] || t.propertyName;
          if (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean && (this.element.style[t.propertyName] = "",
              delete e.clean[o]),
          o in e.onEnd) {
            var n = e.onEnd[o];
            n.call(this),
                delete e.onEnd[o]
          }
          this.emitEvent("transitionEnd", [this])
        }
      }
          ,
          d.disableTransition = function() {
            this.removeTransitionStyles(),
                this.element.removeEventListener(u, this, !1),
                this.isTransitioning = !1
          }
          ,
          d._removeStyles = function(t) {
            var e = {};
            for (var i in t)
              e[i] = "";
            this.css(e)
          }
      ;
      var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
      };
      return d.removeTransitionStyles = function() {
        this.css(c)
      }
          ,
          d.stagger = function(t) {
            t = isNaN(t) ? 0 : t,
                this.staggerDelay = t + "ms"
          }
          ,
          d.removeElem = function() {
            this.element.parentNode.removeChild(this.element),
                this.css({
                  display: ""
                }),
                this.emitEvent("remove", [this])
          }
          ,
          d.remove = function() {
            return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
              this.removeElem()
            }),
                void this.hide()) : void this.removeElem()
          }
          ,
          d.reveal = function() {
            delete this.isHidden,
                this.css({
                  display: ""
                });
            var t = this.layout.options
                , e = {}
                , i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd,
                this.transition({
                  from: t.hiddenStyle,
                  to: t.visibleStyle,
                  isCleaning: !0,
                  onTransitionEnd: e
                })
          }
          ,
          d.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
          }
          ,
          d.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity)
              return "opacity";
            for (var i in e)
              return i
          }
          ,
          d.hide = function() {
            this.isHidden = !0,
                this.css({
                  display: ""
                });
            var t = this.layout.options
                , e = {}
                , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd,
                this.transition({
                  from: t.visibleStyle,
                  to: t.hiddenStyle,
                  isCleaning: !0,
                  onTransitionEnd: e
                })
          }
          ,
          d.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
              display: "none"
            }),
                this.emitEvent("hide"))
          }
          ,
          d.destroy = function() {
            this.css({
              position: "",
              left: "",
              right: "",
              top: "",
              bottom: "",
              transition: "",
              transform: ""
            })
          }
          ,
          o
    }),
    function(t, e) {
      "use strict";
      "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
      }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, o, n) {
      "use strict";
      function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
          return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        h && (this.$element = h(this.element)),
            this.options = o.extend({}, this.constructor.defaults),
            this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n,
            f[n] = this,
            this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
      }
      function r(t) {
        function e() {
          t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            e
      }
      function a(t) {
        if ("number" == typeof t)
          return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
            , i = e && e[1]
            , o = e && e[2];
        if (!i.length)
          return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
      }
      var u = t.console
          , h = t.jQuery
          , d = function() {}
          , l = 0
          , f = {};
      s.namespace = "outlayer",
          s.Item = n,
          s.defaults = {
            containerStyle: {
              position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
              opacity: 0,
              transform: "scale(0.001)"
            },
            visibleStyle: {
              opacity: 1,
              transform: "scale(1)"
            }
          };
      var c = s.prototype;
      o.extend(c, e.prototype),
          c.option = function(t) {
            o.extend(this.options, t)
          }
          ,
          c._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
          }
          ,
          s.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
          },
          c._create = function() {
            this.reloadItems(),
                this.stamps = [],
                this.stamp(this.options.stamp),
                o.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
          }
          ,
          c.reloadItems = function() {
            this.items = this._itemize(this.element.children)
          }
          ,
          c._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
              var s = e[n]
                  , r = new i(s,this);
              o.push(r)
            }
            return o
          }
          ,
          c._filterFindItemElements = function(t) {
            return o.filterFindElements(t, this.options.itemSelector)
          }
          ,
          c.getItemElements = function() {
            return this.items.map(function(t) {
              return t.element
            })
          }
          ,
          c.layout = function() {
            this._resetLayout(),
                this._manageStamps();
            var t = this._getOption("layoutInstant")
                , e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e),
                this._isLayoutInited = !0
          }
          ,
          c._init = c.layout,
          c._resetLayout = function() {
            this.getSize()
          }
          ,
          c.getSize = function() {
            this.size = i(this.element)
          }
          ,
          c._getMeasurement = function(t, e) {
            var o, n = this.options[t];
            n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n),
                this[t] = o ? i(o)[e] : n) : this[t] = 0
          }
          ,
          c.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t),
                this._layoutItems(t, e),
                this._postLayout()
          }
          ,
          c._getItemsForLayout = function(t) {
            return t.filter(function(t) {
              return !t.isIgnored
            })
          }
          ,
          c._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t),
            t && t.length) {
              var i = [];
              t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t,
                    o.isInstant = e || t.isLayoutInstant,
                    i.push(o)
              }, this),
                  this._processLayoutQueue(i)
            }
          }
          ,
          c._getItemLayoutPosition = function() {
            return {
              x: 0,
              y: 0
            }
          }
          ,
          c._processLayoutQueue = function(t) {
            this.updateStagger(),
                t.forEach(function(t, e) {
                  this._positionItem(t.item, t.x, t.y, t.isInstant, e)
                }, this)
          }
          ,
          c.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
                this.stagger)
          }
          ,
          c._positionItem = function(t, e, i, o, n) {
            o ? t.goTo(e, i) : (t.stagger(n * this.stagger),
                t.moveTo(e, i))
          }
          ,
          c._postLayout = function() {
            this.resizeContainer()
          }
          ,
          c.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
              var e = this._getContainerSize();
              e && (this._setContainerMeasure(e.width, !0),
                  this._setContainerMeasure(e.height, !1))
            }
          }
          ,
          c._getContainerSize = d,
          c._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
              var i = this.size;
              i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                  t = Math.max(t, 0),
                  this.element.style[e ? "width" : "height"] = t + "px"
            }
          }
          ,
          c._emitCompleteOnItems = function(t, e) {
            function i() {
              n.dispatchEvent(t + "Complete", null, [e])
            }
            function o() {
              r++,
              r == s && i()
            }
            var n = this
                , s = e.length;
            if (!e || !s)
              return void i();
            var r = 0;
            e.forEach(function(e) {
              e.once(t, o)
            })
          }
          ,
          c.dispatchEvent = function(t, e, i) {
            var o = e ? [e].concat(i) : i;
            if (this.emitEvent(t, o),
                h)
              if (this.$element = this.$element || h(this.element),
                  e) {
                var n = h.Event(e);
                n.type = t,
                    this.$element.trigger(n, i)
              } else
                this.$element.trigger(t, i)
          }
          ,
          c.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
          }
          ,
          c.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
          }
          ,
          c.stamp = function(t) {
            t = this._find(t),
            t && (this.stamps = this.stamps.concat(t),
                t.forEach(this.ignore, this))
          }
          ,
          c.unstamp = function(t) {
            t = this._find(t),
            t && t.forEach(function(t) {
              o.removeFrom(this.stamps, t),
                  this.unignore(t)
            }, this)
          }
          ,
          c._find = function(t) {
            if (t)
              return "string" == typeof t && (t = this.element.querySelectorAll(t)),
                  t = o.makeArray(t)
          }
          ,
          c._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(),
                this.stamps.forEach(this._manageStamp, this))
          }
          ,
          c._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect()
                , e = this.size;
            this._boundingRect = {
              left: t.left + e.paddingLeft + e.borderLeftWidth,
              top: t.top + e.paddingTop + e.borderTopWidth,
              right: t.right - (e.paddingRight + e.borderRightWidth),
              bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
          }
          ,
          c._manageStamp = d,
          c._getElementOffset = function(t) {
            var e = t.getBoundingClientRect()
                , o = this._boundingRect
                , n = i(t)
                , s = {
              left: e.left - o.left - n.marginLeft,
              top: e.top - o.top - n.marginTop,
              right: o.right - e.right - n.marginRight,
              bottom: o.bottom - e.bottom - n.marginBottom
            };
            return s
          }
          ,
          c.handleEvent = o.handleEvent,
          c.bindResize = function() {
            t.addEventListener("resize", this),
                this.isResizeBound = !0
          }
          ,
          c.unbindResize = function() {
            t.removeEventListener("resize", this),
                this.isResizeBound = !1
          }
          ,
          c.onresize = function() {
            this.resize()
          }
          ,
          o.debounceMethod(s, "onresize", 100),
          c.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
          }
          ,
          c.needsResizeLayout = function() {
            var t = i(this.element)
                , e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
          }
          ,
          c.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)),
                e
          }
          ,
          c.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0),
                this.reveal(e))
          }
          ,
          c.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
              var i = this.items.slice(0);
              this.items = e.concat(i),
                  this._resetLayout(),
                  this._manageStamps(),
                  this.layoutItems(e, !0),
                  this.reveal(e),
                  this.layoutItems(i)
            }
          }
          ,
          c.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t),
            t && t.length) {
              var e = this.updateStagger();
              t.forEach(function(t, i) {
                t.stagger(i * e),
                    t.reveal()
              })
            }
          }
          ,
          c.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t),
            t && t.length) {
              var e = this.updateStagger();
              t.forEach(function(t, i) {
                t.stagger(i * e),
                    t.hide()
              })
            }
          }
          ,
          c.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
          }
          ,
          c.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
          }
          ,
          c.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
              var i = this.items[e];
              if (i.element == t)
                return i
            }
          }
          ,
          c.getItems = function(t) {
            t = o.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
              var i = this.getItem(t);
              i && e.push(i)
            }, this),
                e
          }
          ,
          c.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e),
            e && e.length && e.forEach(function(t) {
              t.remove(),
                  o.removeFrom(this.items, t)
            }, this)
          }
          ,
          c.destroy = function() {
            var t = this.element.style;
            t.height = "",
                t.position = "",
                t.width = "",
                this.items.forEach(function(t) {
                  t.destroy()
                }),
                this.unbindResize();
            var e = this.element.outlayerGUID;
            delete f[e],
                delete this.element.outlayerGUID,
            h && h.removeData(this.element, this.constructor.namespace)
          }
          ,
          s.data = function(t) {
            t = o.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && f[e]
          }
          ,
          s.create = function(t, e) {
            var i = r(s);
            return i.defaults = o.extend({}, s.defaults),
                o.extend(i.defaults, e),
                i.compatOptions = o.extend({}, s.compatOptions),
                i.namespace = t,
                i.data = s.data,
                i.Item = r(n),
                o.htmlInit(i, t),
            h && h.bridget && h.bridget(t, i),
                i
          }
      ;
      var m = {
        ms: 1,
        s: 1e3
      };
      return s.Item = n,
          s
    }),
    function(t, e) {
      "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
          t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
      "use strict";
      function e() {
        t.Item.apply(this, arguments)
      }
      var i = e.prototype = Object.create(t.Item.prototype)
          , o = i._create;
      i._create = function() {
        this.id = this.layout.itemGUID++,
            o.call(this),
            this.sortData = {}
      }
          ,
          i.updateSortData = function() {
            if (!this.isIgnored) {
              this.sortData.id = this.id,
                  this.sortData["original-order"] = this.id,
                  this.sortData.random = Math.random();
              var t = this.layout.options.getSortData
                  , e = this.layout._sorters;
              for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
              }
            }
          }
      ;
      var n = i.destroy;
      return i.destroy = function() {
        n.apply(this, arguments),
            this.css({
              display: ""
            })
      }
          ,
          e
    }),
    function(t, e) {
      "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
          t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
      "use strict";
      function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace],
            this.element = t.element,
            this.items = t.filteredItems,
            this.size = t.size)
      }
      var o = i.prototype
          , n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
      return n.forEach(function(t) {
        o[t] = function() {
          return e.prototype[t].apply(this.isotope, arguments)
        }
      }),
          o.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element)
                , i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
          }
          ,
          o._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
          }
          ,
          o.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
          }
          ,
          o.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
          }
          ,
          o.getSegmentSize = function(t, e) {
            var i = t + e
                , o = "outer" + e;
            if (this._getMeasurement(i, o),
                !this[i]) {
              var n = this.getFirstItemSize();
              this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
          }
          ,
          o.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
          }
          ,
          o.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
          }
          ,
          o.getSize = function() {
            this.isotope.getSize(),
                this.size = this.isotope.size
          }
          ,
          i.modes = {},
          i.create = function(t, e) {
            function n() {
              i.apply(this, arguments)
            }
            return n.prototype = Object.create(o),
                n.prototype.constructor = n,
            e && (n.options = e),
                n.prototype.namespace = t,
                i.modes[t] = n,
                n
          }
          ,
          i
    }),
    function(t, e) {
      "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
      var i = t.create("masonry");
      i.compatOptions.fitWidth = "isFitWidth";
      var o = i.prototype;
      return o._resetLayout = function() {
        this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns(),
            this.colYs = [];
        for (var t = 0; t < this.cols; t++)
          this.colYs.push(0);
        this.maxY = 0,
            this.horizontalColIndex = 0
      }
          ,
          o.measureColumns = function() {
            if (this.getContainerWidth(),
                !this.columnWidth) {
              var t = this.items[0]
                  , i = t && t.element;
              this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var o = this.columnWidth += this.gutter
                , n = this.containerWidth + this.gutter
                , s = n / o
                , r = o - n % o
                , a = r && r < 1 ? "round" : "floor";
            s = Math[a](s),
                this.cols = Math.max(s, 1)
          }
          ,
          o.getContainerWidth = function() {
            var t = this._getOption("fitWidth")
                , i = t ? this.element.parentNode : this.element
                , o = e(i);
            this.containerWidth = o && o.innerWidth
          }
          ,
          o._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth
                , i = e && e < 1 ? "round" : "ceil"
                , o = Math[i](t.size.outerWidth / this.columnWidth);
            o = Math.min(o, this.cols);
            for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
              x: this.columnWidth * s.col,
              y: s.y
            }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++)
              this.colYs[h] = a;
            return r
          }
          ,
          o._getTopColPosition = function(t) {
            var e = this._getTopColGroup(t)
                , i = Math.min.apply(Math, e);
            return {
              col: e.indexOf(i),
              y: i
            }
          }
          ,
          o._getTopColGroup = function(t) {
            if (t < 2)
              return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
              e[o] = this._getColGroupY(o, t);
            return e
          }
          ,
          o._getColGroupY = function(t, e) {
            if (e < 2)
              return this.colYs[t];
            var i = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, i)
          }
          ,
          o._getHorizontalColPosition = function(t, e) {
            var i = this.horizontalColIndex % this.cols
                , o = t > 1 && i + t > this.cols;
            i = o ? 0 : i;
            var n = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = n ? i + t : this.horizontalColIndex,
                {
                  col: i,
                  y: this._getColGroupY(i, t)
                }
          }
          ,
          o._manageStamp = function(t) {
            var i = e(t)
                , o = this._getElementOffset(t)
                , n = this._getOption("originLeft")
                , s = n ? o.left : o.right
                , r = s + i.outerWidth
                , a = Math.floor(s / this.columnWidth);
            a = Math.max(0, a);
            var u = Math.floor(r / this.columnWidth);
            u -= r % this.columnWidth ? 0 : 1,
                u = Math.min(this.cols - 1, u);
            for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)
              this.colYs[l] = Math.max(d, this.colYs[l])
          }
          ,
          o._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
              height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
                t
          }
          ,
          o._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
              t++;
            return (this.cols - t) * this.columnWidth - this.gutter
          }
          ,
          o.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(),
            t != this.containerWidth
          }
          ,
          i
    }),
    function(t, e) {
      "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
      "use strict";
      var i = t.create("masonry")
          , o = i.prototype
          , n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
      };
      for (var s in e.prototype)
        n[s] || (o[s] = e.prototype[s]);
      var r = o.measureColumns;
      o.measureColumns = function() {
        this.items = this.isotope.filteredItems,
            r.call(this)
      }
      ;
      var a = o._getOption;
      return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
      }
          ,
          i
    }),
    function(t, e) {
      "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
      "use strict";
      var e = t.create("fitRows")
          , i = e.prototype;
      return i._resetLayout = function() {
        this.x = 0,
            this.y = 0,
            this.maxY = 0,
            this._getMeasurement("gutter", "outerWidth")
      }
          ,
          i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter
                , i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0,
                this.y = this.maxY);
            var o = {
              x: this.x,
              y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
                this.x += e,
                o
          }
          ,
          i._getContainerSize = function() {
            return {
              height: this.maxY
            }
          }
          ,
          e
    }),
    function(t, e) {
      "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
      "use strict";
      var e = t.create("vertical", {
        horizontalAlignment: 0
      })
          , i = e.prototype;
      return i._resetLayout = function() {
        this.y = 0
      }
          ,
          i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
                , i = this.y;
            return this.y += t.size.outerHeight,
                {
                  x: e,
                  y: i
                }
          }
          ,
          i._getContainerSize = function() {
            return {
              height: this.y
            }
          }
          ,
          e
    }),
    function(t, e) {
      "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
      }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, o, n, s, r) {
      function a(t, e) {
        return function(i, o) {
          for (var n = 0; n < t.length; n++) {
            var s = t[n]
                , r = i.sortData[s]
                , a = o.sortData[s];
            if (r > a || r < a) {
              var u = void 0 !== e[s] ? e[s] : e
                  , h = u ? 1 : -1;
              return (r > a ? 1 : -1) * h
            }
          }
          return 0
        }
      }
      var u = t.jQuery
          , h = String.prototype.trim ? function(t) {
            return t.trim()
          }
          : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
          }
          , d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
      });
      d.Item = s,
          d.LayoutMode = r;
      var l = d.prototype;
      l._create = function() {
        this.itemGUID = 0,
            this._sorters = {},
            this._getSorters(),
            e.prototype._create.call(this),
            this.modes = {},
            this.filteredItems = this.items,
            this.sortHistory = ["original-order"];
        for (var t in r.modes)
          this._initLayoutMode(t)
      }
          ,
          l.reloadItems = function() {
            this.itemGUID = 0,
                e.prototype.reloadItems.call(this)
          }
          ,
          l._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
              var o = t[i];
              o.id = this.itemGUID++
            }
            return this._updateItemsSortData(t),
                t
          }
          ,
          l._initLayoutMode = function(t) {
            var e = r.modes[t]
                , i = this.options[t] || {};
            this.options[t] = e.options ? n.extend(e.options, i) : i,
                this.modes[t] = new e(this)
          }
          ,
          l.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
          }
          ,
          l._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(this.filteredItems, t),
                this._isLayoutInited = !0
          }
          ,
          l.arrange = function(t) {
            this.option(t),
                this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches,
                this._bindArrangeComplete(),
                this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
                this._sort(),
                this._layout()
          }
          ,
          l._init = l.arrange,
          l._hideReveal = function(t) {
            this.reveal(t.needReveal),
                this.hide(t.needHide)
          }
          ,
          l._getIsInstant = function() {
            var t = this._getOption("layoutInstant")
                , e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e,
                e
          }
          ,
          l._bindArrangeComplete = function() {
            function t() {
              e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
            }
            var e, i, o, n = this;
            this.once("layoutComplete", function() {
              e = !0,
                  t()
            }),
                this.once("hideComplete", function() {
                  i = !0,
                      t()
                }),
                this.once("revealComplete", function() {
                  o = !0,
                      t()
                })
          }
          ,
          l._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
              var a = t[r];
              if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a),
                    u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
              }
            }
            return {
              matches: i,
              needReveal: o,
              needHide: n
            }
          }
          ,
          l._getFilterTest = function(t) {
            return u && this.options.isJQueryFiltering ? function(e) {
                  return u(e.element).is(t);
                }
                : "function" == typeof t ? function(e) {
                      return t(e.element)
                    }
                    : function(e) {
                      return o(e.element, t)
                    }
          }
          ,
          l.updateSortData = function(t) {
            var e;
            t ? (t = n.makeArray(t),
                e = this.getItems(t)) : e = this.items,
                this._getSorters(),
                this._updateItemsSortData(e)
          }
          ,
          l._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
              var i = t[e];
              this._sorters[e] = f(i)
            }
          }
          ,
          l._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
              var o = t[i];
              o.updateSortData()
            }
          }
      ;
      var f = function() {
        function t(t) {
          if ("string" != typeof t)
            return t;
          var i = h(t).split(" ")
              , o = i[0]
              , n = o.match(/^\[(.+)\]$/)
              , s = n && n[1]
              , r = e(s, o)
              , a = d.sortDataParsers[i[1]];
          return t = a ? function(t) {
                return t && a(r(t))
              }
              : function(t) {
                return t && r(t)
              }
        }
        function e(t, e) {
          return t ? function(e) {
                return e.getAttribute(t)
              }
              : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
              }
        }
        return t
      }();
      d.sortDataParsers = {
        parseInt: function(t) {
          return parseInt(t, 10)
        },
        parseFloat: function(t) {
          return parseFloat(t)
        }
      },
          l._sort = function() {
            if (this.options.sortBy) {
              var t = n.makeArray(this.options.sortBy);
              this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
              var e = a(this.sortHistory, this.options.sortAscending);
              this.filteredItems.sort(e)
            }
          }
          ,
          l._getIsSameSortBy = function(t) {
            for (var e = 0; e < t.length; e++)
              if (t[e] != this.sortHistory[e])
                return !1;
            return !0
          }
          ,
          l._mode = function() {
            var t = this.options.layoutMode
                , e = this.modes[t];
            if (!e)
              throw new Error("No layout mode: " + t);
            return e.options = this.options[t],
                e
          }
          ,
          l._resetLayout = function() {
            e.prototype._resetLayout.call(this),
                this._mode()._resetLayout()
          }
          ,
          l._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
          }
          ,
          l._manageStamp = function(t) {
            this._mode()._manageStamp(t)
          }
          ,
          l._getContainerSize = function() {
            return this._mode()._getContainerSize()
          }
          ,
          l.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
          }
          ,
          l.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
              var i = this._filterRevealAdded(e);
              this.filteredItems = this.filteredItems.concat(i)
            }
          }
          ,
          l.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
              this._resetLayout(),
                  this._manageStamps();
              var i = this._filterRevealAdded(e);
              this.layoutItems(this.filteredItems),
                  this.filteredItems = i.concat(this.filteredItems),
                  this.items = e.concat(this.items)
            }
          }
          ,
          l._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide),
                this.reveal(e.matches),
                this.layoutItems(e.matches, !0),
                e.matches
          }
          ,
          l.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
              var i, o, n = e.length;
              for (i = 0; i < n; i++)
                o = e[i],
                    this.element.appendChild(o.element);
              var s = this._filter(e).matches;
              for (i = 0; i < n; i++)
                e[i].isLayoutInstant = !0;
              for (this.arrange(),
                       i = 0; i < n; i++)
                delete e[i].isLayoutInstant;
              this.reveal(s)
            }
          }
      ;
      var c = l.remove;
      return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s)
        }
      }
          ,
          l.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
              var e = this.items[t];
              e.sortData.random = Math.random()
            }
            this.options.sortBy = "random",
                this._sort(),
                this._layout()
          }
          ,
          l._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var o = t.apply(this, e);
            return this.options.transitionDuration = i,
                o
          }
          ,
          l.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
              return t.element
            })
          }
          ,
          d
    });
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
      "use strict";
      function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
      }
      function t(s, a) {
        void 0 === s && (s = {}),
        void 0 === a && (a = {}),
            Object.keys(a).forEach((i=>{
                  void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
                }
            ))
      }
      const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: ()=>null,
        querySelectorAll: ()=>[],
        getElementById: ()=>null,
        createEvent: ()=>({
          initEvent() {}
        }),
        createElement: ()=>({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: ()=>[]
        }),
        createElementNS: ()=>({}),
        importNode: ()=>null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };
      function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s),
            e
      }
      const i = {
        document: s,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: ()=>({
          getPropertyValue: ()=>""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: ()=>({}),
        requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
            null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };
      function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i),
            e
      }
      class n extends Array {
        constructor(e) {
          "number" == typeof e ? super(e) : (super(...e || []),
              function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: ()=>t,
                  set(e) {
                    t.__proto__ = e
                  }
                })
              }(this))
        }
      }
      function l(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach((e=>{
              Array.isArray(e) ? t.push(...l(e)) : t.push(e)
            }
        )),
            t
      }
      function o(e, t) {
        return Array.prototype.filter.call(e, t)
      }
      function d(e, t) {
        const s = r()
            , i = a();
        let l = [];
        if (!t && e instanceof n)
          return e;
        if (!e)
          return new n(l);
        if ("string" == typeof e) {
          const s = e.trim();
          if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
            let e = "div";
            0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = s;
            for (let e = 0; e < t.childNodes.length; e += 1)
              l.push(t.childNodes[e])
          } else
            l = function(e, t) {
              if ("string" != typeof e)
                return [e];
              const s = []
                  , a = t.querySelectorAll(e);
              for (let e = 0; e < a.length; e += 1)
                s.push(a[e]);
              return s
            }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i)
          l.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof n)
            return e;
          l = e
        }
        return new n(function(e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t
        }(l))
      }
      d.fn = n.prototype;
      const c = {
        addClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          const a = l(t.map((e=>e.split(" "))));
          return this.forEach((e=>{
                e.classList.add(...a)
              }
          )),
              this
        },
        removeClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          const a = l(t.map((e=>e.split(" "))));
          return this.forEach((e=>{
                e.classList.remove(...a)
              }
          )),
              this
        },
        hasClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          const a = l(t.map((e=>e.split(" "))));
          return o(this, (e=>a.filter((t=>e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          const a = l(t.map((e=>e.split(" "))));
          this.forEach((e=>{
                a.forEach((t=>{
                      e.classList.toggle(t)
                    }
                ))
              }
          ))
        },
        attr: function(e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let s = 0; s < this.length; s += 1)
            if (2 === arguments.length)
              this[s].setAttribute(e, t);
            else
              for (const t in e)
                this[s][t] = e[t],
                    this[s].setAttribute(t, e[t]);
          return this
        },
        removeAttr: function(e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].removeAttribute(e);
          return this
        },
        transform: function(e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transform = e;
          return this
        },
        transition: function(e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
          return this
        },
        on: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          let[a,i,r,n] = t;
          function l(e) {
            const t = e.target;
            if (!t)
              return;
            const s = e.target.dom7EventData || [];
            if (s.indexOf(e) < 0 && s.unshift(e),
                d(t).is(i))
              r.apply(t, s);
            else {
              const e = d(t).parents();
              for (let t = 0; t < e.length; t += 1)
                d(e[t]).is(i) && r.apply(e[t], s)
            }
          }
          function o(e) {
            const t = e && e.target && e.target.dom7EventData || [];
            t.indexOf(e) < 0 && t.unshift(e),
                r.apply(this, t)
          }
          "function" == typeof t[1] && ([a,r,n] = t,
              i = void 0),
          n || (n = !1);
          const c = a.split(" ");
          let p;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (i)
              for (p = 0; p < c.length; p += 1) {
                const e = c[p];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                    t.dom7LiveListeners[e].push({
                      listener: r,
                      proxyListener: l
                    }),
                    t.addEventListener(e, l, n)
              }
            else
              for (p = 0; p < c.length; p += 1) {
                const e = c[p];
                t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                    t.dom7Listeners[e].push({
                      listener: r,
                      proxyListener: o
                    }),
                    t.addEventListener(e, o, n)
              }
          }
          return this
        },
        off: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          let[a,i,r,n] = t;
          "function" == typeof t[1] && ([a,r,n] = t,
              i = void 0),
          n || (n = !1);
          const l = a.split(" ");
          for (let e = 0; e < l.length; e += 1) {
            const t = l[e];
            for (let e = 0; e < this.length; e += 1) {
              const s = this[e];
              let a;
              if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
              a && a.length)
                for (let e = a.length - 1; e >= 0; e -= 1) {
                  const i = a[e];
                  r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n),
                      a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n),
                      a.splice(e, 1))
                }
            }
          }
          return this
        },
        trigger: function() {
          const e = r();
          for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
            s[a] = arguments[a];
          const i = s[0].split(" ")
              , n = s[1];
          for (let t = 0; t < i.length; t += 1) {
            const a = i[t];
            for (let t = 0; t < this.length; t += 1) {
              const i = this[t];
              if (e.CustomEvent) {
                const t = new e.CustomEvent(a,{
                  detail: n,
                  bubbles: !0,
                  cancelable: !0
                });
                i.dom7EventData = s.filter(((e,t)=>t > 0)),
                    i.dispatchEvent(t),
                    i.dom7EventData = [],
                    delete i.dom7EventData
              }
            }
          }
          return this
        },
        transitionEnd: function(e) {
          const t = this;
          return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a),
                    t.off("transitionend", s))
              }
          )),
              this
        },
        outerWidth: function(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
            }
            return this[0].offsetWidth
          }
          return null
        },
        outerHeight: function(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
            }
            return this[0].offsetHeight
          }
          return null
        },
        styles: function() {
          const e = r();
          return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
          if (this.length > 0) {
            const e = r()
                , t = a()
                , s = this[0]
                , i = s.getBoundingClientRect()
                , n = t.body
                , l = s.clientTop || n.clientTop || 0
                , o = s.clientLeft || n.clientLeft || 0
                , d = s === e ? e.scrollY : s.scrollTop
                , c = s === e ? e.scrollX : s.scrollLeft;
            return {
              top: i.top + d - l,
              left: i.left + c - o
            }
          }
          return null
        },
        css: function(e, t) {
          const s = r();
          let a;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (a = 0; a < this.length; a += 1)
                for (const t in e)
                  this[a].style[t] = e[t];
              return this
            }
            if (this[0])
              return s.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (a = 0; a < this.length; a += 1)
              this[a].style[e] = t;
            return this
          }
          return this
        },
        each: function(e) {
          return e ? (this.forEach(((t,s)=>{
                e.apply(t, [t, s])
              }
          )),
              this) : this
        },
        html: function(e) {
          if (void 0 === e)
            return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1)
            this[t].innerHTML = e;
          return this
        },
        text: function(e) {
          if (void 0 === e)
            return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1)
            this[t].textContent = e;
          return this
        },
        is: function(e) {
          const t = r()
              , s = a()
              , i = this[0];
          let l, o;
          if (!i || void 0 === e)
            return !1;
          if ("string" == typeof e) {
            if (i.matches)
              return i.matches(e);
            if (i.webkitMatchesSelector)
              return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector)
              return i.msMatchesSelector(e);
            for (l = d(e),
                     o = 0; o < l.length; o += 1)
              if (l[o] === i)
                return !0;
            return !1
          }
          if (e === s)
            return i === s;
          if (e === t)
            return i === t;
          if (e.nodeType || e instanceof n) {
            for (l = e.nodeType ? [e] : e,
                     o = 0; o < l.length; o += 1)
              if (l[o] === i)
                return !0;
            return !1
          }
          return !1
        },
        index: function() {
          let e, t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e
          }
        },
        eq: function(e) {
          if (void 0 === e)
            return this;
          const t = this.length;
          if (e > t - 1)
            return d([]);
          if (e < 0) {
            const s = t + e;
            return d(s < 0 ? [] : [this[s]])
          }
          return d([this[e]])
        },
        append: function() {
          let e;
          const t = a();
          for (let s = 0; s < arguments.length; s += 1) {
            e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            for (let s = 0; s < this.length; s += 1)
              if ("string" == typeof e) {
                const a = t.createElement("div");
                for (a.innerHTML = e; a.firstChild; )
                  this[s].appendChild(a.firstChild)
              } else if (e instanceof n)
                for (let t = 0; t < e.length; t += 1)
                  this[s].appendChild(e[t]);
              else
                this[s].appendChild(e)
          }
          return this
        },
        prepend: function(e) {
          const t = a();
          let s, i;
          for (s = 0; s < this.length; s += 1)
            if ("string" == typeof e) {
              const a = t.createElement("div");
              for (a.innerHTML = e,
                       i = a.childNodes.length - 1; i >= 0; i -= 1)
                this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
            } else if (e instanceof n)
              for (i = 0; i < e.length; i += 1)
                this[s].insertBefore(e[i], this[s].childNodes[0]);
            else
              this[s].insertBefore(e, this[s].childNodes[0]);
          return this
        },
        next: function(e) {
          return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        },
        nextAll: function(e) {
          const t = [];
          let s = this[0];
          if (!s)
            return d([]);
          for (; s.nextElementSibling; ) {
            const a = s.nextElementSibling;
            e ? d(a).is(e) && t.push(a) : t.push(a),
                s = a
          }
          return d(t)
        },
        prev: function(e) {
          if (this.length > 0) {
            const t = this[0];
            return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
          }
          return d([])
        },
        prevAll: function(e) {
          const t = [];
          let s = this[0];
          if (!s)
            return d([]);
          for (; s.previousElementSibling; ) {
            const a = s.previousElementSibling;
            e ? d(a).is(e) && t.push(a) : t.push(a),
                s = a
          }
          return d(t)
        },
        parent: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1)
            null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
          return d(t)
        },
        parents: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            let a = this[s].parentNode;
            for (; a; )
              e ? d(a).is(e) && t.push(a) : t.push(a),
                  a = a.parentNode
          }
          return d(t)
        },
        closest: function(e) {
          let t = this;
          return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)),
              t)
        },
        find: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const a = this[s].querySelectorAll(e);
            for (let e = 0; e < a.length; e += 1)
              t.push(a[e])
          }
          return d(t)
        },
        children: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const a = this[s].children;
            for (let s = 0; s < a.length; s += 1)
              e && !d(a[s]).is(e) || t.push(a[s])
          }
          return d(t)
        },
        filter: function(e) {
          return d(o(this, e))
        },
        remove: function() {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this
        }
      };
      function p(e, t) {
        return void 0 === t && (t = 0),
            setTimeout(e, t)
      }
      function u() {
        return Date.now()
      }
      function h(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
          const t = r();
          let s;
          return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
              s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform,
        i.split(",").length > 6 && (i = i.split(", ").map((e=>e.replace(",", "."))).join(", ")),
            n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
            a = n.toString().split(",")),
        "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
        "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
        i || 0
      }
      function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }
      function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
      }
      function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
            , t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
          const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
          if (null != a && !f(a)) {
            const s = Object.keys(Object(a)).filter((e=>t.indexOf(e) < 0));
            for (let t = 0, i = s.length; t < i; t += 1) {
              const i = s[t]
                  , r = Object.getOwnPropertyDescriptor(a, i);
              void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {},
                  a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
            }
          }
        }
        return e
      }
      function v(e, t, s) {
        e.style.setProperty(t, s)
      }
      function w(e) {
        let {swiper: t, targetPosition: s, side: a} = e;
        const i = r()
            , n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none",
            i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev"
            , p = (e,t)=>"next" === c && e >= t || "prev" === c && e <= t
            , u = ()=>{
              l = (new Date).getTime(),
              null === o && (o = l);
              const e = Math.max(Math.min((l - o) / d, 1), 0)
                  , r = .5 - Math.cos(e * Math.PI) / 2;
              let c = n + r * (s - n);
              if (p(c, s) && (c = s),
                  t.wrapperEl.scrollTo({
                    [a]: c
                  }),
                  p(c, s))
                return t.wrapperEl.style.overflow = "hidden",
                    t.wrapperEl.style.scrollSnapType = "",
                    setTimeout((()=>{
                          t.wrapperEl.style.overflow = "",
                              t.wrapperEl.scrollTo({
                                [a]: c
                              })
                        }
                    )),
                    void i.cancelAnimationFrame(t.cssModeFrameID);
              t.cssModeFrameID = i.requestAnimationFrame(u)
            }
        ;
        u()
      }
      let b, x, y;
      function E() {
        return b || (b = function() {
          const e = r()
              , t = a();
          return {
            smoothScroll: t.documentElement && "scrollBehavior"in t.documentElement.style,
            touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
            passiveListener: function() {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0
                  }
                });
                e.addEventListener("testPassiveListener", null, s)
              } catch (e) {}
              return t
            }(),
            gestures: "ongesturestart"in e
          }
        }()),
            b
      }
      function C(e) {
        return void 0 === e && (e = {}),
        x || (x = function(e) {
          let {userAgent: t} = void 0 === e ? {} : e;
          const s = E()
              , a = r()
              , i = a.navigator.platform
              , n = t || a.navigator.userAgent
              , l = {
            ios: !1,
            android: !1
          }
              , o = a.screen.width
              , d = a.screen.height
              , c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/)
              , h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , m = "Win32" === i;
          let f = "MacIntel" === i;
          return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/),
          p || (p = [0, 1, "13_0_0"]),
              f = !1),
          c && !m && (l.os = "android",
              l.android = !0),
          (p || h || u) && (l.os = "ios",
              l.ios = !0),
              l
        }(e)),
            x
      }
      function T() {
        return y || (y = function() {
          const e = r();
          return {
            isSafari: function() {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
          }
        }()),
            y
      }
      Object.keys(c).forEach((e=>{
            Object.defineProperty(d.fn, e, {
              value: c[e],
              writable: !0
            })
          }
      ));
      var $ = {
        on(e, t, s) {
          const a = this;
          if (!a.eventsListeners || a.destroyed)
            return a;
          if ("function" != typeof t)
            return a;
          const i = s ? "unshift" : "push";
          return e.split(" ").forEach((e=>{
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                    a.eventsListeners[e][i](t)
              }
          )),
              a
        },
        once(e, t, s) {
          const a = this;
          if (!a.eventsListeners || a.destroyed)
            return a;
          if ("function" != typeof t)
            return a;
          function i() {
            a.off(e, i),
            i.__emitterProxy && delete i.__emitterProxy;
            for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
              r[n] = arguments[n];
            t.apply(a, r)
          }
          return i.__emitterProxy = t,
              a.on(e, i, s)
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed)
            return s;
          if ("function" != typeof e)
            return s;
          const a = t ? "unshift" : "push";
          return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
              s
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed)
            return t;
          if (!t.eventsAnyListeners)
            return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1),
              t
        },
        off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e=>{
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a,i)=>{
                      (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                    }
                ))
              }
          )),
              s) : s
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed)
            return e;
          if (!e.eventsListeners)
            return e;
          let t, s, a;
          for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
            r[n] = arguments[n];
          "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0],
              s = r.slice(1, r.length),
              a = e) : (t = r[0].events,
              s = r[0].data,
              a = r[0].context || e),
              s.unshift(a);
          return (Array.isArray(t) ? t : t.split(" ")).forEach((t=>{
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e=>{
                      e.apply(a, [t, ...s])
                    }
                )),
                e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e=>{
                      e.apply(a, s)
                    }
                ))
              }
          )),
              e
        }
      };
      var S = {
        updateSize: function() {
          const e = this;
          let t, s;
          const a = e.$el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth,
              s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight,
          0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10),
              s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
              }))
        },
        updateSlides: function() {
          const e = this;
          function t(t) {
            return e.isHorizontal() ? t : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            }[t]
          }
          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0)
          }
          const a = e.params
              , {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e
              , o = e.virtual && a.virtual.enabled
              , d = o ? e.virtual.slides.length : e.slides.length
              , c = i.children(`.${e.params.slideClass}`)
              , p = o ? e.virtual.slides.length : c.length;
          let u = [];
          const h = []
              , m = [];
          let f = a.slidesOffsetBefore;
          "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
          let g = a.slidesOffsetAfter;
          "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length
              , b = e.slidesGrid.length;
          let x = a.spaceBetween
              , y = -f
              , E = 0
              , C = 0;
          if (void 0 === r)
            return;
          "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r),
              e.virtualSize = -x,
              n ? c.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
              }) : c.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
              }),
          a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""),
              v(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const T = a.grid && a.grid.rows > 1 && e.grid;
          let $;
          T && e.grid.initSlides(p);
          const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e=>void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
          for (let i = 0; i < p; i += 1) {
            $ = 0;
            const n = c.eq(i);
            if (T && e.grid.updateSlide(i, n, p, t),
            "none" !== n.css("display")) {
              if ("auto" === a.slidesPerView) {
                S && (c[i].style[t("width")] = "");
                const r = getComputedStyle(n[0])
                    , l = n[0].style.transform
                    , o = n[0].style.webkitTransform;
                if (l && (n[0].style.transform = "none"),
                o && (n[0].style.webkitTransform = "none"),
                    a.roundLengths)
                  $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                else {
                  const e = s(r, "width")
                      , t = s(r, "padding-left")
                      , a = s(r, "padding-right")
                      , i = s(r, "margin-left")
                      , l = s(r, "margin-right")
                      , o = r.getPropertyValue("box-sizing");
                  if (o && "border-box" === o)
                    $ = e + i + l;
                  else {
                    const {clientWidth: s, offsetWidth: r} = n[0];
                    $ = e + t + a + i + l + (r - s)
                  }
                }
                l && (n[0].style.transform = l),
                o && (n[0].style.webkitTransform = o),
                a.roundLengths && ($ = Math.floor($))
              } else
                $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView,
                a.roundLengths && ($ = Math.floor($)),
                c[i] && (c[i].style[t("width")] = `${$}px`);
              c[i] && (c[i].swiperSlideSize = $),
                  m.push($),
                  a.centeredSlides ? (y = y + $ / 2 + E / 2 + x,
                  0 === E && 0 !== i && (y = y - r / 2 - x),
                  0 === i && (y = y - r / 2 - x),
                  Math.abs(y) < .001 && (y = 0),
                  a.roundLengths && (y = Math.floor(y)),
                  C % a.slidesPerGroup == 0 && u.push(y),
                      h.push(y)) : (a.roundLengths && (y = Math.floor(y)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y),
                      h.push(y),
                      y = y + $ + x),
                  e.virtualSize += $ + x,
                  E = $,
                  C += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, r) + g,
          n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
            width: `${e.virtualSize + a.spaceBetween}px`
          }),
          a.setWrapperSize && i.css({
            [t("width")]: `${e.virtualSize + a.spaceBetween}px`
          }),
          T && e.grid.updateWrapperSize($, u, t),
              !a.centeredSlides) {
            const t = [];
            for (let s = 0; s < u.length; s += 1) {
              let i = u[s];
              a.roundLengths && (i = Math.floor(i)),
              u[s] <= e.virtualSize - r && t.push(i)
            }
            u = t,
            Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
          }
          if (0 === u.length && (u = [0]),
          0 !== a.spaceBetween) {
            const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
            c.filter(((e,t)=>!a.cssMode || t !== c.length - 1)).css({
              [s]: `${x}px`
            })
          }
          if (a.centeredSlides && a.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t=>{
                  e += t + (a.spaceBetween ? a.spaceBetween : 0)
                }
            )),
                e -= a.spaceBetween;
            const t = e - r;
            u = u.map((e=>e < 0 ? -f : e > t ? t + g : e))
          }
          if (a.centerInsufficientSlides) {
            let e = 0;
            if (m.forEach((t=>{
                  e += t + (a.spaceBetween ? a.spaceBetween : 0)
                }
            )),
                e -= a.spaceBetween,
            e < r) {
              const t = (r - e) / 2;
              u.forEach(((e,s)=>{
                    u[s] = e - t
                  }
              )),
                  h.forEach(((e,s)=>{
                        h[s] = e + t
                      }
                  ))
            }
          }
          if (Object.assign(e, {
            slides: c,
            snapGrid: u,
            slidesGrid: h,
            slidesSizesGrid: m
          }),
          a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
            v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
                v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
            const t = -e.snapGrid[0]
                , s = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e=>e + t)),
                e.slidesGrid = e.slidesGrid.map((e=>e + s))
          }
          if (p !== d && e.emit("slidesLengthChange"),
          u.length !== w && (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
          h.length !== b && e.emit("slidesGridLengthChange"),
          a.watchSlidesProgress && e.updateSlidesOffset(),
              !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
            const t = `${a.containerModifierClass}backface-hidden`
                , s = e.$el.hasClass(t);
            p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this
              , s = []
              , a = t.virtual && t.params.virtual.enabled;
          let i, r = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const n = e=>a ? t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || d([])).each((e=>{
                    s.push(e)
                  }
              ));
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !a)
                  break;
                s.push(n(e))
              }
          else
            s.push(n(t.activeIndex));
          for (i = 0; i < s.length; i += 1)
            if (void 0 !== s[i]) {
              const e = s[i].offsetHeight;
              r = e > r ? e : r
            }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
        },
        updateSlidesOffset: function() {
          const e = this
              , t = e.slides;
          for (let s = 0; s < t.length; s += 1)
            t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this
              , s = t.params
              , {slides: a, rtlTranslate: i, snapGrid: r} = t;
          if (0 === a.length)
            return;
          void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
          let n = -e;
          i && (n = e),
              a.removeClass(s.slideVisibleClass),
              t.visibleSlidesIndexes = [],
              t.visibleSlides = [];
          for (let e = 0; e < a.length; e += 1) {
            const l = a[e];
            let o = l.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
            const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween)
                , c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween)
                , p = -(n - o)
                , u = p + t.slidesSizesGrid[e];
            (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(e),
                a.eq(e).addClass(s.slideVisibleClass)),
                l.progress = i ? -d : d,
                l.originalProgress = i ? -c : c
          }
          t.visibleSlides = d(t.visibleSlides)
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * s || 0
          }
          const s = t.params
              , a = t.maxTranslate() - t.minTranslate();
          let {progress: i, isBeginning: r, isEnd: n} = t;
          const l = r
              , o = n;
          0 === a ? (i = 0,
              r = !0,
              n = !0) : (i = (e - t.minTranslate()) / a,
              r = i <= 0,
              n = i >= 1),
              Object.assign(t, {
                progress: i,
                isBeginning: r,
                isEnd: n
              }),
          (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          n && !o && t.emit("reachEnd toEdge"),
          (l && !r || o && !n) && t.emit("fromEdge"),
              t.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const e = this
              , {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e
              , n = e.virtual && s.virtual.enabled;
          let l;
          t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
              l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i),
              l.addClass(s.slideActiveClass),
          s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
          let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
          s.loop && 0 === o.length && (o = t.eq(0),
              o.addClass(s.slideNextClass));
          let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
          s.loop && 0 === d.length && (d = t.eq(-1),
              d.addClass(s.slidePrevClass)),
          s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
              d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),
              e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this
              , s = t.rtlTranslate ? t.translate : -t.translate
              , {slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o} = t;
          let d, c = e;
          if (void 0 === c) {
            for (let e = 0; e < a.length; e += 1)
              void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
            r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
          }
          if (i.indexOf(s) >= 0)
            d = i.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, c);
            d = e + Math.floor((c - e) / r.slidesPerGroup)
          }
          if (d >= i.length && (d = i.length - 1),
          c === n)
            return void (d !== o && (t.snapIndex = d,
                t.emit("snapIndexChange")));
          const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
          Object.assign(t, {
            snapIndex: d,
            realIndex: p,
            previousIndex: n,
            activeIndex: c
          }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
          l !== p && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
          const t = this
              , s = t.params
              , a = d(e).closest(`.${s.slideClass}`)[0];
          let i, r = !1;
          if (a)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === a) {
                r = !0,
                    i = e;
                break
              }
          if (!a || !r)
            return t.clickedSlide = void 0,
                void (t.clickedIndex = void 0);
          t.clickedSlide = a,
              t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i,
          s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
      };
      var M = {
        getTranslate: function(e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
          if (t.virtualTranslate)
            return s ? -a : a;
          if (t.cssMode)
            return a;
          let r = h(i[0], e);
          return s && (r = -r),
          r || 0
        },
        setTranslate: function(e, t) {
          const s = this
              , {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
          let o, d = 0, c = 0;
          s.isHorizontal() ? d = a ? -e : e : c = e,
          i.roundLengths && (d = Math.floor(d),
              c = Math.floor(c)),
              i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`),
              s.previousTranslate = s.translate,
              s.translate = s.isHorizontal() ? d : c;
          const p = s.maxTranslate() - s.minTranslate();
          o = 0 === p ? 0 : (e - s.minTranslate()) / p,
          o !== l && s.updateProgress(e),
              s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
          return -this.snapGrid[0]
        },
        maxTranslate: function() {
          return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, s, a, i) {
          void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === a && (a = !0);
          const r = this
              , {params: n, wrapperEl: l} = r;
          if (r.animating && n.preventInteractionOnTransition)
            return !1;
          const o = r.minTranslate()
              , d = r.maxTranslate();
          let c;
          if (c = a && e > o ? o : a && e < d ? d : e,
              r.updateProgress(c),
              n.cssMode) {
            const e = r.isHorizontal();
            if (0 === t)
              l[e ? "scrollLeft" : "scrollTop"] = -c;
            else {
              if (!r.support.smoothScroll)
                return w({
                  swiper: r,
                  targetPosition: -c,
                  side: e ? "left" : "top"
                }),
                    !0;
              l.scrollTo({
                [e ? "left" : "top"]: -c,
                behavior: "smooth"
              })
            }
            return !0
          }
          return 0 === t ? (r.setTransition(0),
              r.setTranslate(c),
          s && (r.emit("beforeTransitionStart", t, i),
              r.emit("transitionEnd"))) : (r.setTransition(t),
              r.setTranslate(c),
          s && (r.emit("beforeTransitionStart", t, i),
              r.emit("transitionStart")),
          r.animating || (r.animating = !0,
          r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                    r.onTranslateToWrapperTransitionEnd = null,
                    delete r.onTranslateToWrapperTransitionEnd,
                s && r.emit("transitionEnd"))
              }
          ),
              r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
              r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
              !0
        }
      };
      function P(e) {
        let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
        const {activeIndex: r, previousIndex: n} = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
            t.emit(`transition${i}`),
        s && r !== n) {
          if ("reset" === l)
            return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`),
              "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      var k = {
        slideTo: function(e, t, s, a, i) {
          if (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "number" != typeof e && "string" != typeof e)
            throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const r = this;
          let n = e;
          n < 0 && (n = 0);
          const {params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m} = r;
          if (r.animating && l.preventInteractionOnTransition || !m && !a && !i)
            return !1;
          const f = Math.min(r.params.slidesPerGroupSkip, n);
          let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
          g >= o.length && (g = o.length - 1);
          const v = -o[g];
          if (l.normalizeSlideIndex)
            for (let e = 0; e < d.length; e += 1) {
              const t = -Math.floor(100 * v)
                  , s = Math.floor(100 * d[e])
                  , a = Math.floor(100 * d[e + 1]);
              void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
            }
          if (r.initialized && n !== p) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n)
              return !1
          }
          let b;
          if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
              r.updateProgress(v),
              b = n > p ? "next" : n < p ? "prev" : "reset",
          u && -v === r.translate || !u && v === r.translate)
            return r.updateActiveIndex(n),
            l.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
            "slide" !== l.effect && r.setTranslate(v),
            "reset" !== b && (r.transitionStart(s, b),
                r.transitionEnd(s, b)),
                !1;
          if (l.cssMode) {
            const e = r.isHorizontal()
                , s = u ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t && (r.wrapperEl.style.scrollSnapType = "none",
                  r._immediateVirtual = !0),
                  h[e ? "scrollLeft" : "scrollTop"] = s,
              t && requestAnimationFrame((()=>{
                    r.wrapperEl.style.scrollSnapType = "",
                        r._swiperImmediateVirtual = !1
                  }
              ))
            } else {
              if (!r.support.smoothScroll)
                return w({
                  swiper: r,
                  targetPosition: s,
                  side: e ? "left" : "top"
                }),
                    !0;
              h.scrollTo({
                [e ? "left" : "top"]: s,
                behavior: "smooth"
              })
            }
            return !0
          }
          return r.setTransition(t),
              r.setTranslate(v),
              r.updateActiveIndex(n),
              r.updateSlidesClasses(),
              r.emit("beforeTransitionStart", t, a),
              r.transitionStart(s, b),
              0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0,
              r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                        r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                        r.onSlideToWrapperTransitionEnd = null,
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(s, b))
                  }
              ),
                  r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                  r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)),
              !0
        },
        slideToLoop: function(e, t, s, a) {
          if (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const i = this;
          let r = e;
          return i.params.loop && (r += i.loopedSlides),
              i.slideTo(r, t, s, a)
        },
        slideNext: function(e, t, s) {
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0);
          const a = this
              , {animating: i, enabled: r, params: n} = a;
          if (!r)
            return a;
          let l = n.slidesPerGroup;
          "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
          const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
          if (n.loop) {
            if (i && n.loopPreventsSlide)
              return !1;
            a.loopFix(),
                a._clientLeft = a.$wrapperEl[0].clientLeft
          }
          return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e, t, s) {
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0);
          const a = this
              , {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
          if (!d)
            return a;
          if (i.loop) {
            if (r && i.loopPreventsSlide)
              return !1;
            a.loopFix(),
                a._clientLeft = a.$wrapperEl[0].clientLeft
          }
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const p = c(o ? a.translate : -a.translate)
              , u = n.map((e=>c(e)));
          let h = n[u.indexOf(p) - 1];
          if (void 0 === h && i.cssMode) {
            let e;
            n.forEach(((t,s)=>{
                  p >= t && (e = s)
                }
            )),
            void 0 !== e && (h = n[e > 0 ? e - 1 : e])
          }
          let m = 0;
          if (void 0 !== h && (m = l.indexOf(h),
          m < 0 && (m = a.activeIndex - 1),
          "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1,
              m = Math.max(m, 0))),
          i.rewind && a.isBeginning) {
            const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
            return a.slideTo(i, e, t, s)
          }
          return a.slideTo(m, e, t, s)
        },
        slideReset: function(e, t, s) {
          return void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
              this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, a) {
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === a && (a = .5);
          const i = this;
          let r = i.activeIndex;
          const n = Math.min(i.params.slidesPerGroupSkip, r)
              , l = n + Math.floor((r - n) / i.params.slidesPerGroup)
              , o = i.rtlTranslate ? i.translate : -i.translate;
          if (o >= i.snapGrid[l]) {
            const e = i.snapGrid[l];
            o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
          } else {
            const e = i.snapGrid[l - 1];
            o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
          }
          return r = Math.max(r, 0),
              r = Math.min(r, i.slidesGrid.length - 1),
              i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
          const e = this
              , {params: t, $wrapperEl: s} = e
              , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          let i, r = e.clickedIndex;
          if (t.loop) {
            if (e.animating)
              return;
            i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
                    r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                    p((()=>{
                          e.slideTo(r)
                        }
                    ))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(),
                    r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                    p((()=>{
                          e.slideTo(r)
                        }
                    ))) : e.slideTo(r)
          } else
            e.slideTo(r)
        }
      };
      var z = {
        loopCreate: function() {
          const e = this
              , t = a()
              , {params: s, $wrapperEl: i} = e
              , r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
          r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
          let n = r.children(`.${s.slideClass}`);
          if (s.loopFillGroupWithBlank) {
            const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
            if (e !== s.slidesPerGroup) {
              for (let a = 0; a < e; a += 1) {
                const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                r.append(e)
              }
              n = r.children(`.${s.slideClass}`)
            }
          }
          "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length),
              e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)),
              e.loopedSlides += s.loopAdditionalSlides,
          e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
          const l = []
              , o = [];
          n.each(((e,t)=>{
                d(e).attr("data-swiper-slide-index", t)
              }
          ));
          for (let t = 0; t < e.loopedSlides; t += 1) {
            const e = t - Math.floor(t / n.length) * n.length;
            o.push(n.eq(e)[0]),
                l.unshift(n.eq(n.length - e - 1)[0])
          }
          for (let e = 0; e < o.length; e += 1)
            r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let e = l.length - 1; e >= 0; e -= 1)
            r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
        },
        loopFix: function() {
          const e = this;
          e.emit("beforeLoopFix");
          const {activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l} = e;
          let o;
          e.allowSlidePrev = !0,
              e.allowSlideNext = !0;
          const d = -n[t] - e.getTranslate();
          if (t < a) {
            o = s.length - 3 * a + t,
                o += a;
            e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
          } else if (t >= s.length - a) {
            o = -s.length + t + a,
                o += a;
            e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
          }
          e.allowSlidePrev = i,
              e.allowSlideNext = r,
              e.emit("loopFix")
        },
        loopDestroy: function() {
          const {$wrapperEl: e, params: t, slides: s} = this;
          e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
              s.removeAttr("data-swiper-slide-index")
        }
      };
      function L(e) {
        const t = this
            , s = a()
            , i = r()
            , n = t.touchEventsData
            , {params: l, touches: o, enabled: c} = t;
        if (!c)
          return;
        if (t.animating && l.preventInteractionOnTransition)
          return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
          return;
        if (n.isTouchEvent = "touchstart" === p.type,
        !n.isTouchEvent && "which"in p && 3 === p.which)
          return;
        if (!n.isTouchEvent && "button"in p && p.button > 0)
          return;
        if (n.isTouched && n.isMoved)
          return;
        const m = !!l.noSwipingClass && "" !== l.noSwipingClass
            , f = e.composedPath ? e.composedPath() : e.path;
        m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
        const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
            , v = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (v ? function(e, t) {
          return void 0 === t && (t = this),
              function t(s) {
                if (!s || s === a() || s === r())
                  return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
              }(t)
        }(g, h[0]) : h.closest(g)[0]))
          return void (t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0])
          return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX,
            o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const w = o.currentX
            , b = o.currentY
            , x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection
            , y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (x && (w <= y || w >= i.innerWidth - y)) {
          if ("prevent" !== x)
            return;
          e.preventDefault()
        }
        if (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }),
            o.startX = w,
            o.startY = b,
            n.touchStartTime = u(),
            t.allowClick = !0,
            t.updateSize(),
            t.swipeDirection = void 0,
        l.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== p.type) {
          let e = !0;
          h.is(n.focusableElements) && (e = !1,
          "SELECT" === h[0].nodeName && (n.isTouched = !1)),
          s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
          const a = e && t.allowTouchMove && l.touchStartPreventDefault;
          !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
            t.emit("touchStart", p)
      }
      function O(e) {
        const t = a()
            , s = this
            , i = s.touchEventsData
            , {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
        if (!o)
          return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent),
            !i.isTouched)
          return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type)
          return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0])
            , h = "touchmove" === c.type ? p.pageX : c.pageX
            , m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper)
          return n.startX = h,
              void (n.startY = m);
        if (!s.allowTouchMove)
          return d(c.target).is(i.focusableElements) || (s.allowClick = !1),
              void (i.isTouched && (Object.assign(n, {
                startX: h,
                startY: m,
                currentX: h,
                currentY: m
              }),
                  i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
          if (s.isVertical()) {
            if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate())
              return i.isTouched = !1,
                  void (i.isMoved = !1)
          } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate())
            return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements))
          return i.isMoved = !0,
              void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
          return;
        n.currentX = h,
            n.currentY = m;
        const f = n.currentX - n.startX
            , g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
          return;
        if (void 0 === i.isScrolling) {
          let e;
          s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI,
              i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c),
        void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)),
            i.isScrolling)
          return void (i.isTouched = !1);
        if (!i.startMoving)
          return;
        s.allowClick = !1,
        !r.cssMode && c.cancelable && c.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
        i.isMoved || (r.loop && !r.cssMode && s.loopFix(),
            i.startTranslate = s.getTranslate(),
            s.setTransition(0),
        s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            i.allowMomentumBounce = !1,
        !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
            s.emit("sliderFirstMove", c)),
            s.emit("sliderMove", c),
            i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v,
            v *= r.touchRatio,
        l && (v = -v),
            s.swipeDirection = v > 0 ? "prev" : "next",
            i.currentTranslate = v + i.startTranslate;
        let w = !0
            , b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0),
            v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1,
            r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1,
            r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)),
        w && (c.preventedByNestedSwiper = !0),
        !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
        r.threshold > 0) {
          if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return i.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                i.currentTranslate = i.startTranslate,
                void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(),
            s.updateSlidesClasses()),
        s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
            s.updateProgress(i.currentTranslate),
            s.setTranslate(i.currentTranslate))
      }
      function I(e) {
        const t = this
            , s = t.touchEventsData
            , {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
        if (!l)
          return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", o),
            s.allowTouchCallbacks = !1,
            !s.isTouched)
          return s.isMoved && a.grabCursor && t.setGrabCursor(!1),
              s.isMoved = !1,
              void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u()
            , c = d - s.touchStartTime;
        if (t.allowClick) {
          const e = o.path || o.composedPath && o.composedPath();
          t.updateClickedSlide(e && e[0] || o.target),
              t.emit("tap click", o),
          c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(),
            p((()=>{
                  t.destroyed || (t.allowClick = !0)
                }
            )),
        !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
          return s.isTouched = !1,
              s.isMoved = !1,
              void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1,
            s.isMoved = !1,
            s.startMoving = !1,
            h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate,
            a.cssMode)
          return;
        if (t.params.freeMode && a.freeMode.enabled)
          return void t.freeMode.onTouchEnd({
            currentPos: h
          });
        let m = 0
            , f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e,
              f = n[e + t] - n[e]) : h >= n[e] && (m = e,
              f = n[n.length - 1] - n[n.length - 2])
        }
        let g = null
            , v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f
            , b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
          if (!a.longSwipes)
            return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)),
          "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
          if (!a.shortSwipes)
            return void t.slideTo(t.activeIndex);
          t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b),
          "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
        }
      }
      function A() {
        const e = this
            , {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth)
          return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
        e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            e.allowSlidePrev = i,
            e.allowSlideNext = a,
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
      }
      function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation())))
      }
      function G() {
        const e = this
            , {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a)
          return;
        let i;
        e.previousTranslate = e.translate,
            e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1)
      }
      let N = !1;
      function B() {}
      const H = (e,t)=>{
            const s = a()
                , {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e
                , c = !!i.nested
                , p = "on" === t ? "addEventListener" : "removeEventListener"
                , u = t;
            if (d.touch) {
              const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              n[p](r.start, e.onTouchStart, t),
                  n[p](r.move, e.onTouchMove, d.passiveListener ? {
                    passive: !1,
                    capture: c
                  } : c),
                  n[p](r.end, e.onTouchEnd, t),
              r.cancel && n[p](r.cancel, e.onTouchEnd, t)
            } else
              n[p](r.start, e.onTouchStart, !1),
                  s[p](r.move, e.onTouchMove, c),
                  s[p](r.end, e.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0),
            i.cssMode && l[p]("scroll", e.onScroll),
                i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
          }
      ;
      var X = {
        attachEvents: function() {
          const e = this
              , t = a()
              , {params: s, support: i} = e;
          e.onTouchStart = L.bind(e),
              e.onTouchMove = O.bind(e),
              e.onTouchEnd = I.bind(e),
          s.cssMode && (e.onScroll = G.bind(e)),
              e.onClick = D.bind(e),
          i.touch && !N && (t.addEventListener("touchstart", B),
              N = !0),
              H(e, "on")
        },
        detachEvents: function() {
          H(this, "off")
        }
      };
      const Y = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
      var R = {
        addClasses: function() {
          const e = this
              , {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e
              , l = function(e, t) {
            const s = [];
            return e.forEach((e=>{
                  "object" == typeof e ? Object.keys(e).forEach((a=>{
                        e[a] && s.push(t + a)
                      }
                  )) : "string" == typeof e && s.push(t + e)
                }
            )),
                s
          }(["initialized", s.direction, {
            "pointer-events": !n.touch
          }, {
            "free-mode": e.params.freeMode && s.freeMode.enabled
          }, {
            autoheight: s.autoHeight
          }, {
            rtl: a
          }, {
            grid: s.grid && s.grid.rows > 1
          }, {
            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
          }, {
            android: r.android
          }, {
            ios: r.ios
          }, {
            "css-mode": s.cssMode
          }, {
            centered: s.cssMode && s.centeredSlides
          }, {
            "watch-progress": s.watchSlidesProgress
          }], s.containerModifierClass);
          t.push(...l),
              i.addClass([...t].join(" ")),
              e.emitContainerClasses()
        },
        removeClasses: function() {
          const {$el: e, classNames: t} = this;
          e.removeClass(t.join(" ")),
              this.emitContainerClasses()
        }
      };
      var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };
      function q(e, t) {
        return function(s) {
          void 0 === s && (s = {});
          const a = Object.keys(s)[0]
              , i = s[a];
          "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
            auto: !0
          }),
              a in e && "enabled"in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
              }),
              "object" != typeof e[a] || "enabled"in e[a] || (e[a].enabled = !0),
              e[a] || (e[a] = {
                enabled: !1
              }),
                  g(t, s)) : g(t, s)) : g(t, s)
        }
      }
      const j = {
        eventsEmitter: $,
        update: S,
        translate: M,
        transition: {
          setTransition: function(e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
                s.emit("setTransition", e, t)
          },
          transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            const s = this
                , {params: a} = s;
            a.cssMode || (a.autoHeight && s.updateAutoHeight(),
                P({
                  swiper: s,
                  runCallbacks: e,
                  direction: t,
                  step: "Start"
                }))
          },
          transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            const s = this
                , {params: a} = s;
            s.animating = !1,
            a.cssMode || (s.setTransition(0),
                P({
                  swiper: s,
                  runCallbacks: e,
                  direction: t,
                  step: "End"
                }))
          }
        },
        slide: k,
        loop: z,
        grabCursor: {
          setGrabCursor: function(e) {
            const t = this;
            if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
              return;
            const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            s.style.cursor = "move",
                s.style.cursor = e ? "grabbing" : "grab"
          },
          unsetGrabCursor: function() {
            const e = this;
            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
          }
        },
        events: X,
        breakpoints: {
          setBreakpoint: function() {
            const e = this
                , {activeIndex: t, initialized: s, loopedSlides: a=0, params: i, $el: r} = e
                , n = i.breakpoints;
            if (!n || n && 0 === Object.keys(n).length)
              return;
            const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
            if (!l || e.currentBreakpoint === l)
              return;
            const o = (l in n ? n[l] : void 0) || e.originalParams
                , d = Y(e, i)
                , c = Y(e, o)
                , p = i.enabled;
            d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`),
            (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach((t=>{
                      const s = i[t] && i[t].enabled
                          , a = o[t] && o[t].enabled;
                      s && !a && e[t].disable(),
                      !s && a && e[t].enable()
                    }
                ));
            const u = o.direction && o.direction !== i.direction
                , h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
            u && s && e.changeDirection(),
                g(e.params, o);
            const m = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev
            }),
                p && !m ? e.disable() : !p && m && e.enable(),
                e.currentBreakpoint = l,
                e.emit("_beforeBreakpoint", o),
            h && s && (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - a + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", o)
          },
          getBreakpoint: function(e, t, s) {
            if (void 0 === t && (t = "window"),
            !e || "container" === t && !s)
              return;
            let a = !1;
            const i = r()
                , n = "window" === t ? i.innerHeight : s.clientHeight
                , l = Object.keys(e).map((e=>{
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: n * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }
            ));
            l.sort(((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10)));
            for (let e = 0; e < l.length; e += 1) {
              const {point: r, value: n} = l[e];
              "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
            }
            return a || "max"
          }
        },
        checkOverflow: {
          checkOverflow: function() {
            const e = this
                , {isLocked: t, params: s} = e
                , {slidesOffsetBefore: a} = s;
            if (a) {
              const t = e.slides.length - 1
                  , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
              e.isLocked = e.size > s
            } else
              e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
          }
        },
        classes: R,
        images: {
          loadImage: function(e, t, s, a, i, n) {
            const l = r();
            let o;
            function c() {
              n && n()
            }
            d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image,
                o.onload = c,
                o.onerror = c,
            a && (o.sizes = a),
            s && (o.srcset = s),
            t && (o.src = t)) : c()
          },
          preloadImages: function() {
            const e = this;
            function t() {
              null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")))
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const a = e.imagesToLoad[s];
              e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
            }
          }
        }
      }
          , _ = {};
      class V {
        constructor() {
          let e, t;
          for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
            a[i] = arguments[i];
          if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e,t] = a,
          t || (t = {}),
              t = g({}, t),
          e && !t.el && (t.el = e),
          t.el && d(t.el).length > 1) {
            const e = [];
            return d(t.el).each((s=>{
                  const a = g({}, t, {
                    el: s
                  });
                  e.push(new V(a))
                }
            )),
                e
          }
          const r = this;
          r.__swiper__ = !0,
              r.support = E(),
              r.device = C({
                userAgent: t.userAgent
              }),
              r.browser = T(),
              r.eventsListeners = {},
              r.eventsAnyListeners = [],
              r.modules = [...r.__modules__],
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
          const n = {};
          r.modules.forEach((e=>{
                e({
                  swiper: r,
                  extendParams: q(t, n),
                  on: r.on.bind(r),
                  once: r.once.bind(r),
                  off: r.off.bind(r),
                  emit: r.emit.bind(r)
                })
              }
          ));
          const l = g({}, W, n);
          return r.params = g({}, l, _, t),
              r.originalParams = g({}, r.params),
              r.passedParams = g({}, t),
          r.params && r.params.on && Object.keys(r.params.on).forEach((e=>{
                r.on(e, r.params.on[e])
              }
          )),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
              r.$ = d,
              Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === r.params.direction,
                isVertical: ()=>"vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                  const e = ["touchstart", "touchmove", "touchend", "touchcancel"]
                      , t = ["pointerdown", "pointermove", "pointerup"];
                  return r.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3]
                  },
                      r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                      },
                      r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: r.params.focusableElements,
                  lastClickTime: u(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
              }),
              r.emit("_swiper"),
          r.params.init && r.init(),
              r
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0,
          e.params.grabCursor && e.setGrabCursor(),
              e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1,
          e.params.grabCursor && e.unsetGrabCursor(),
              e.emit("disable"))
        }
        setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const a = s.minTranslate()
              , i = (s.maxTranslate() - a) * e + a;
          s.translateTo(i, void 0 === t ? 0 : t),
              s.updateActiveIndex(),
              s.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el)
            return;
          const t = e.el.className.split(" ").filter((t=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el)
            return;
          const t = [];
          e.slides.each((s=>{
                const a = e.getSlideClasses(s);
                t.push({
                  slideEl: s,
                  classNames: a
                }),
                    e.emit("_slideClass", s, a)
              }
          )),
              e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"),
          void 0 === t && (t = !1);
          const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
          let o = 1;
          if (s.centeredSlides) {
            let e, t = a[l].swiperSlideSize;
            for (let s = l + 1; s < a.length; s += 1)
              a[s] && !e && (t += a[s].swiperSlideSize,
                  o += 1,
              t > n && (e = !0));
            for (let s = l - 1; s >= 0; s -= 1)
              a[s] && !e && (t += a[s].swiperSlideSize,
                  o += 1,
              t > n && (e = !0))
          } else if ("current" === e)
            for (let e = l + 1; e < a.length; e += 1) {
              (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
            }
          else
            for (let e = l - 1; e >= 0; e -= 1) {
              i[l] - i[e] < n && (o += 1)
            }
          return o
        }
        update() {
          const e = this;
          if (!e || e.destroyed)
            return;
          const {snapGrid: t, params: s} = e;
          function a() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate
                , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
          }
          let i;
          s.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode && e.params.freeMode.enabled ? (a(),
              e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
              i || a()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this
              , a = s.params.direction;
          return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
          e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),
              s.emitContainerClasses(),
              s.params.direction = e,
              s.slides.each((t=>{
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                  }
              )),
              s.emit("changeDirection"),
          t && s.update()),
              s
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
              t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
              t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                  t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                  t.el.dir = "ltr"),
              t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted)
            return !0;
          const s = d(e || t.params.el);
          if (!(e = s[0]))
            return !1;
          e.swiper = t;
          const i = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let r = (()=>{
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                  const t = d(e.shadowRoot.querySelector(i()));
                  return t.children = e=>s.children(e),
                      t
                }
                return s.children ? s.children(i()) : d(s).children(i())
              }
          )();
          if (0 === r.length && t.params.createElements) {
            const e = a().createElement("div");
            r = d(e),
                e.className = t.params.wrapperClass,
                s.append(e),
                s.children(`.${t.params.slideClass}`).each((e=>{
                      r.append(e)
                    }
                ))
          }
          return Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display")
          }),
              !0
        }
        init(e) {
          const t = this;
          if (t.initialized)
            return t;
          return !1 === t.mount(e) || (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
          t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
              t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
              t.attachEvents(),
              t.initialized = !0,
              t.emit("init"),
              t.emit("afterInit")),
              t
        }
        destroy(e, t) {
          void 0 === e && (e = !0),
          void 0 === t && (t = !0);
          const s = this
              , {params: a, $el: i, $wrapperEl: r, slides: n} = s;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
              s.initialized = !1,
              s.detachEvents(),
          a.loop && s.loopDestroy(),
          t && (s.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
          n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach((e=>{
                    s.off(e)
                  }
              )),
          !1 !== e && (s.$el[0].swiper = null,
              function(e) {
                const t = e;
                Object.keys(t).forEach((e=>{
                      try {
                        t[e] = null
                      } catch (e) {}
                      try {
                        delete t[e]
                      } catch (e) {}
                    }
                ))
              }(s)),
              s.destroyed = !0),
              null
        }
        static extendDefaults(e) {
          g(_, e)
        }
        static get extendedDefaults() {
          return _
        }
        static get defaults() {
          return W
        }
        static installModule(e) {
          V.prototype.__modules__ || (V.prototype.__modules__ = []);
          const t = V.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e=>V.installModule(e))),
              V) : (V.installModule(e),
              V)
        }
      }
      function F(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a=>{
              if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"),
                    n.className = i[a],
                    e.$el.append(n)),
                    s[a] = n,
                    t[a] = n
              }
            }
        )),
            s
      }
      function U(e) {
        return void 0 === e && (e = ""),
            `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
      }
      function K(e) {
        const t = this
            , {$wrapperEl: s, params: a} = t;
        if (a.loop && t.loopDestroy(),
        "object" == typeof e && "length"in e)
          for (let t = 0; t < e.length; t += 1)
            e[t] && s.append(e[t]);
        else
          s.append(e);
        a.loop && t.loopCreate(),
        a.observer || t.update()
      }
      function Z(e) {
        const t = this
            , {params: s, $wrapperEl: a, activeIndex: i} = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length"in e) {
          for (let t = 0; t < e.length; t += 1)
            e[t] && a.prepend(e[t]);
          r = i + e.length
        } else
          a.prepend(e);
        s.loop && t.loopCreate(),
        s.observer || t.update(),
            t.slideTo(r, 0, !1)
      }
      function Q(e, t) {
        const s = this
            , {$wrapperEl: a, params: i, activeIndex: r} = s;
        let n = r;
        i.loop && (n -= s.loopedSlides,
            s.loopDestroy(),
            s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0)
          return void s.prependSlide(t);
        if (e >= l)
          return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
          const e = s.slides.eq(t);
          e.remove(),
              d.unshift(e)
        }
        if ("object" == typeof t && "length"in t) {
          for (let e = 0; e < t.length; e += 1)
            t[e] && a.append(t[e]);
          o = n > e ? n + t.length : n
        } else
          a.append(t);
        for (let e = 0; e < d.length; e += 1)
          a.append(d[e]);
        i.loop && s.loopCreate(),
        i.observer || s.update(),
            i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
      }
      function J(e) {
        const t = this
            , {params: s, $wrapperEl: a, activeIndex: i} = t;
        let r = i;
        s.loop && (r -= t.loopedSlides,
            t.loopDestroy(),
            t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length"in e) {
          for (let s = 0; s < e.length; s += 1)
            n = e[s],
            t.slides[n] && t.slides.eq(n).remove(),
            n < l && (l -= 1);
          l = Math.max(l, 0)
        } else
          n = e,
          t.slides[n] && t.slides.eq(n).remove(),
          n < l && (l -= 1),
              l = Math.max(l, 0);
        s.loop && t.loopCreate(),
        s.observer || t.update(),
            s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
      }
      function ee() {
        const e = this
            , t = [];
        for (let s = 0; s < e.slides.length; s += 1)
          t.push(s);
        e.removeSlide(t)
      }
      function te(e) {
        const {effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d} = e;
        let c;
        a("beforeInit", (()=>{
              if (s.params.effect !== t)
                return;
              s.classNames.push(`${s.params.containerModifierClass}${t}`),
              l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
              const e = n ? n() : {};
              Object.assign(s.params, e),
                  Object.assign(s.originalParams, e)
            }
        )),
            a("setTranslate", (()=>{
                  s.params.effect === t && i()
                }
            )),
            a("setTransition", ((e,a)=>{
                  s.params.effect === t && r(a)
                }
            )),
            a("transitionEnd", (()=>{
                  if (s.params.effect === t && o) {
                    if (!d || !d().slideShadows)
                      return;
                    s.slides.each((e=>{
                          s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                        }
                    )),
                        o()
                  }
                }
            )),
            a("virtualUpdate", (()=>{
                  s.params.effect === t && (s.slides.length || (c = !0),
                      requestAnimationFrame((()=>{
                            c && s.slides && s.slides.length && (i(),
                                c = !1)
                          }
                      )))
                }
            ))
      }
      function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden"
        }) : t
      }
      function ae(e) {
        let {swiper: t, duration: s, transformEl: a, allSlides: i} = e;
        const {slides: r, activeIndex: n, $wrapperEl: l} = t;
        if (t.params.virtualTranslate && 0 !== s) {
          let e, s = !1;
          e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n),
              e.transitionEnd((()=>{
                    if (s)
                      return;
                    if (!t || t.destroyed)
                      return;
                    s = !0,
                        t.animating = !1;
                    const e = ["webkitTransitionEnd", "transitionend"];
                    for (let t = 0; t < e.length; t += 1)
                      l.trigger(e[t])
                  }
              ))
        }
      }
      function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : "")
            , i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`),
            i.append(r)),
            r
      }
      Object.keys(j).forEach((e=>{
            Object.keys(j[e]).forEach((t=>{
                  V.prototype[t] = j[e][t]
                }
            ))
          }
      )),
          V.use([function(e) {
            let {swiper: t, on: s, emit: a} = e;
            const i = r();
            let n = null
                , l = null;
            const o = ()=>{
                  t && !t.destroyed && t.initialized && (a("beforeResize"),
                      a("resize"))
                }
                , d = ()=>{
                  t && !t.destroyed && t.initialized && a("orientationchange")
                }
            ;
            s("init", (()=>{
                  t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e=>{
                        l = i.requestAnimationFrame((()=>{
                              const {width: s, height: a} = t;
                              let i = s
                                  , r = a;
                              e.forEach((e=>{
                                    let {contentBoxSize: s, contentRect: a, target: n} = e;
                                    n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize,
                                        r = a ? a.height : (s[0] || s).blockSize)
                                  }
                              )),
                              i === s && r === a || o()
                            }
                        ))
                      }
                  )),
                      n.observe(t.el)) : (i.addEventListener("resize", o),
                      i.addEventListener("orientationchange", d))
                }
            )),
                s("destroy", (()=>{
                      l && i.cancelAnimationFrame(l),
                      n && n.unobserve && t.el && (n.unobserve(t.el),
                          n = null),
                          i.removeEventListener("resize", o),
                          i.removeEventListener("orientationchange", d)
                    }
                ))
          }
            , function(e) {
              let {swiper: t, extendParams: s, on: a, emit: i} = e;
              const n = []
                  , l = r()
                  , o = function(e, t) {
                void 0 === t && (t = {});
                const s = new (l.MutationObserver || l.WebkitMutationObserver)((e=>{
                      if (1 === e.length)
                        return void i("observerUpdate", e[0]);
                      const t = function() {
                        i("observerUpdate", e[0])
                      };
                      l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
                    }
                ));
                s.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData
                }),
                    n.push(s)
              };
              s({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
              }),
                  a("init", (()=>{
                        if (t.params.observer) {
                          if (t.params.observeParents) {
                            const e = t.$el.parents();
                            for (let t = 0; t < e.length; t += 1)
                              o(e[t])
                          }
                          o(t.$el[0], {
                            childList: t.params.observeSlideChildren
                          }),
                              o(t.$wrapperEl[0], {
                                attributes: !1
                              })
                        }
                      }
                  )),
                  a("destroy", (()=>{
                        n.forEach((e=>{
                              e.disconnect()
                            }
                        )),
                            n.splice(0, n.length)
                      }
                  ))
            }
          ]);
      const re = [function(e) {
        let t, {swiper: s, extendParams: a, on: i, emit: r} = e;
        function n(e, t) {
          const a = s.params.virtual;
          if (a.cache && s.virtual.cache[t])
            return s.virtual.cache[t];
          const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
          return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t),
          a.cache && (s.virtual.cache[t] = i),
              i
        }
        function l(e) {
          const {slidesPerView: t, slidesPerGroup: a, centeredSlides: i} = s.params
              , {addSlidesBefore: l, addSlidesAfter: o} = s.params.virtual
              , {from: d, to: c, slides: p, slidesGrid: u, offset: h} = s.virtual;
          s.params.cssMode || s.updateActiveIndex();
          const m = s.activeIndex || 0;
          let f, g, v;
          f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top",
              i ? (g = Math.floor(t / 2) + a + o,
                  v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o,
                  v = a + l);
          const w = Math.max((m || 0) - v, 0)
              , b = Math.min((m || 0) + g, p.length - 1)
              , x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
          function y() {
            s.updateSlides(),
                s.updateProgress(),
                s.updateSlidesClasses(),
            s.lazy && s.params.lazy.enabled && s.lazy.load(),
                r("virtualUpdate")
          }
          if (Object.assign(s.virtual, {
            from: w,
            to: b,
            offset: x,
            slidesGrid: s.slidesGrid
          }),
          d === w && c === b && !e)
            return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`),
                s.updateProgress(),
                void r("virtualUpdate");
          if (s.params.virtual.renderExternal)
            return s.params.virtual.renderExternal.call(s, {
              offset: x,
              from: w,
              to: b,
              slides: function() {
                const e = [];
                for (let t = w; t <= b; t += 1)
                  e.push(p[t]);
                return e
              }()
            }),
                void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
          const E = []
              , C = [];
          if (e)
            s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
          else
            for (let e = d; e <= c; e += 1)
              (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
          for (let t = 0; t < p.length; t += 1)
            t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t),
            t < d && E.push(t)));
          C.forEach((e=>{
                s.$wrapperEl.append(n(p[e], e))
              }
          )),
              E.sort(((e,t)=>t - e)).forEach((e=>{
                    s.$wrapperEl.prepend(n(p[e], e))
                  }
              )),
              s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`),
              y()
        }
        a({
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0
          }
        }),
            s.virtual = {
              cache: {},
              from: void 0,
              to: void 0,
              slides: [],
              offset: 0,
              slidesGrid: []
            },
            i("beforeInit", (()=>{
                  s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides,
                      s.classNames.push(`${s.params.containerModifierClass}virtual`),
                      s.params.watchSlidesProgress = !0,
                      s.originalParams.watchSlidesProgress = !0,
                  s.params.initialSlide || l())
                }
            )),
            i("setTranslate", (()=>{
                  s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t),
                      t = setTimeout((()=>{
                            l()
                          }
                      ), 100)) : l())
                }
            )),
            i("init update resize", (()=>{
                  s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
                }
            )),
            Object.assign(s.virtual, {
              appendSlide: function(e) {
                if ("object" == typeof e && "length"in e)
                  for (let t = 0; t < e.length; t += 1)
                    e[t] && s.virtual.slides.push(e[t]);
                else
                  s.virtual.slides.push(e);
                l(!0)
              },
              prependSlide: function(e) {
                const t = s.activeIndex;
                let a = t + 1
                    , i = 1;
                if (Array.isArray(e)) {
                  for (let t = 0; t < e.length; t += 1)
                    e[t] && s.virtual.slides.unshift(e[t]);
                  a = t + e.length,
                      i = e.length
                } else
                  s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                  const e = s.virtual.cache
                      , t = {};
                  Object.keys(e).forEach((s=>{
                        const a = e[s]
                            , r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                            t[parseInt(s, 10) + i] = a
                      }
                  )),
                      s.virtual.cache = t
                }
                l(!0),
                    s.slideTo(a, 0)
              },
              removeSlide: function(e) {
                if (null == e)
                  return;
                let t = s.activeIndex;
                if (Array.isArray(e))
                  for (let a = e.length - 1; a >= 0; a -= 1)
                    s.virtual.slides.splice(e[a], 1),
                    s.params.virtual.cache && delete s.virtual.cache[e[a]],
                    e[a] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                  s.virtual.slides.splice(e, 1),
                  s.params.virtual.cache && delete s.virtual.cache[e],
                  e < t && (t -= 1),
                      t = Math.max(t, 0);
                l(!0),
                    s.slideTo(t, 0)
              },
              removeAllSlides: function() {
                s.virtual.slides = [],
                s.params.virtual.cache && (s.virtual.cache = {}),
                    l(!0),
                    s.slideTo(0, 0)
              },
              update: l
            })
      }
        , function(e) {
          let {swiper: t, extendParams: s, on: i, emit: n} = e;
          const l = a()
              , o = r();
          function c(e) {
            if (!t.enabled)
              return;
            const {rtlTranslate: s} = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode
                , r = t.params.keyboard.pageUpDown
                , d = r && 33 === i
                , c = r && 34 === i
                , p = 37 === i
                , u = 39 === i
                , h = 38 === i
                , m = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c))
              return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d))
              return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
              if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                let e = !1;
                if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length)
                  return;
                const a = t.$el
                    , i = a[0].clientWidth
                    , r = a[0].clientHeight
                    , n = o.innerWidth
                    , l = o.innerHeight
                    , d = t.$el.offset();
                s && (d.left -= t.$el[0].scrollLeft);
                const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                for (let t = 0; t < c.length; t += 1) {
                  const s = c[t];
                  if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                    if (0 === s[0] && 0 === s[1])
                      continue;
                    e = !0
                  }
                }
                if (!e)
                  return
              }
              t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
              ((c || u) && !s || (d || p) && s) && t.slideNext(),
              ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
              (c || m) && t.slideNext(),
              (d || h) && t.slidePrev()),
                  n("keyPress", i)
            }
          }
          function p() {
            t.keyboard.enabled || (d(l).on("keydown", c),
                t.keyboard.enabled = !0)
          }
          function u() {
            t.keyboard.enabled && (d(l).off("keydown", c),
                t.keyboard.enabled = !1)
          }
          t.keyboard = {
            enabled: !1
          },
              s({
                keyboard: {
                  enabled: !1,
                  onlyInViewport: !0,
                  pageUpDown: !0
                }
              }),
              i("init", (()=>{
                    t.params.keyboard.enabled && p()
                  }
              )),
              i("destroy", (()=>{
                    t.keyboard.enabled && u()
                  }
              )),
              Object.assign(t.keyboard, {
                enable: p,
                disable: u
              })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a, emit: i} = e;
          const n = r();
          let l;
          s({
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: "container",
              thresholdDelta: null,
              thresholdTime: null
            }
          }),
              t.mousewheel = {
                enabled: !1
              };
          let o, c = u();
          const h = [];
          function m() {
            t.enabled && (t.mouseEntered = !0)
          }
          function f() {
            t.enabled && (t.mouseEntered = !1)
          }
          function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
                i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
                i("scroll", e.raw)),
                c = (new n.Date).getTime(),
                !1)))
          }
          function v(e) {
            let s = e
                , a = !0;
            if (!t.enabled)
              return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)),
            !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges)
              return !0;
            s.originalEvent && (s = s.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1
                , f = function(e) {
              let t = 0
                  , s = 0
                  , a = 0
                  , i = 0;
              return "detail"in e && (s = e.detail),
              "wheelDelta"in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY"in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
              "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
                  s = 0),
                  a = 10 * t,
                  i = 10 * s,
              "deltaY"in e && (i = e.deltaY),
              "deltaX"in e && (a = e.deltaX),
              e.shiftKey && !a && (a = i,
                  i = 0),
              (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40,
                  i *= 40) : (a *= 800,
                  i *= 800)),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
                  {
                    spinX: t,
                    spinY: s,
                    pixelX: a,
                    pixelY: i
                  }
            }(s);
            if (r.forceToAxis)
              if (t.isHorizontal()) {
                if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY)))
                  return !0;
                c = -f.pixelX * m
              } else {
                if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX)))
                  return !0;
                c = -f.pixelY
              }
            else
              c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
            if (0 === c)
              return !0;
            r.invert && (c = -c);
            let v = t.getTranslate() + c * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
                a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()),
            a && t.params.nested && s.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled) {
              const e = {
                time: u(),
                delta: Math.abs(c),
                direction: Math.sign(c)
              }
                  , a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
              if (!a) {
                o = void 0,
                t.params.loop && t.loopFix();
                let n = t.getTranslate() + c * r.sensitivity;
                const d = t.isBeginning
                    , u = t.isEnd;
                if (n >= t.minTranslate() && (n = t.minTranslate()),
                n <= t.maxTranslate() && (n = t.maxTranslate()),
                    t.setTransition(0),
                    t.setTranslate(n),
                    t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses(),
                (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(),
                    t.params.freeMode.sticky) {
                  clearTimeout(l),
                      l = void 0,
                  h.length >= 15 && h.shift();
                  const s = h.length ? h[h.length - 1] : void 0
                      , a = h[0];
                  if (h.push(e),
                  s && (e.delta > s.delta || e.direction !== s.direction))
                    h.splice(0);
                  else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                    const s = c > 0 ? .8 : .2;
                    o = e,
                        h.splice(0),
                        l = p((()=>{
                              t.slideToClosest(t.params.speed, !0, void 0, s)
                            }
                        ), 0)
                  }
                  l || (l = p((()=>{
                        o = e,
                            h.splice(0),
                            t.slideToClosest(t.params.speed, !0, void 0, .5)
                      }
                  ), 500))
                }
                if (a || i("scroll", s),
                t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
                n === t.minTranslate() || n === t.maxTranslate())
                  return !0
              }
            } else {
              const s = {
                time: u(),
                delta: Math.abs(c),
                direction: Math.sign(c),
                raw: e
              };
              h.length >= 2 && h.shift();
              const a = h.length ? h[h.length - 1] : void 0;
              if (h.push(s),
                  a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s),
                  function(e) {
                    const s = t.params.mousewheel;
                    if (e.direction < 0) {
                      if (t.isEnd && !t.params.loop && s.releaseOnEdges)
                        return !0
                    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                      return !0;
                    return !1
                  }(s))
                return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1,
                !1
          }
          function w(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)),
                s[e]("mouseenter", m),
                s[e]("mouseleave", f),
                s[e]("wheel", v)
          }
          function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v),
                !0) : !t.mousewheel.enabled && (w("on"),
                t.mousewheel.enabled = !0,
                !0)
          }
          function x() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v),
                !0) : !!t.mousewheel.enabled && (w("off"),
                t.mousewheel.enabled = !1,
                !0)
          }
          a("init", (()=>{
                !t.params.mousewheel.enabled && t.params.cssMode && x(),
                t.params.mousewheel.enabled && b()
              }
          )),
              a("destroy", (()=>{
                    t.params.cssMode && b(),
                    t.mousewheel.enabled && x()
                  }
              )),
              Object.assign(t.mousewheel, {
                enable: b,
                disable: x
              })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a, emit: i} = e;
          function r(e) {
            let s;
            return e && (s = d(e),
            t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))),
                s
          }
          function n(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
            t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
          }
          function l() {
            if (t.params.loop)
              return;
            const {$nextEl: e, $prevEl: s} = t.navigation;
            n(s, t.isBeginning && !t.params.rewind),
                n(e, t.isEnd && !t.params.rewind)
          }
          function o(e) {
            e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(),
                i("navigationPrev"))
          }
          function c(e) {
            e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(),
                i("navigationNext"))
          }
          function p() {
            const e = t.params.navigation;
            if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }),
            !e.nextEl && !e.prevEl)
              return;
            const s = r(e.nextEl)
                , a = r(e.prevEl);
            s && s.length > 0 && s.on("click", c),
            a && a.length > 0 && a.on("click", o),
                Object.assign(t.navigation, {
                  $nextEl: s,
                  nextEl: s && s[0],
                  $prevEl: a,
                  prevEl: a && a[0]
                }),
            t.enabled || (s && s.addClass(e.lockClass),
            a && a.addClass(e.lockClass))
          }
          function u() {
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e.length && (e.off("click", c),
                e.removeClass(t.params.navigation.disabledClass)),
            s && s.length && (s.off("click", o),
                s.removeClass(t.params.navigation.disabledClass))
          }
          s({
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
              navigationDisabledClass: "swiper-navigation-disabled"
            }
          }),
              t.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
              },
              a("init", (()=>{
                    !1 === t.params.navigation.enabled ? h() : (p(),
                        l())
                  }
              )),
              a("toEdge fromEdge lock unlock", (()=>{
                    l()
                  }
              )),
              a("destroy", (()=>{
                    u()
                  }
              )),
              a("enable disable", (()=>{
                    const {$nextEl: e, $prevEl: s} = t.navigation;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass),
                    s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
                  }
              )),
              a("click", ((e,s)=>{
                    const {$nextEl: a, $prevEl: r} = t.navigation
                        , n = s.target;
                    if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                      if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n)))
                        return;
                      let e;
                      a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                          i(!0 === e ? "navigationShow" : "navigationHide"),
                      a && a.toggleClass(t.params.navigation.hiddenClass),
                      r && r.toggleClass(t.params.navigation.hiddenClass)
                    }
                  }
              ));
          const h = ()=>{
                t.$el.addClass(t.params.navigation.navigationDisabledClass),
                    u()
              }
          ;
          Object.assign(t.navigation, {
            enable: ()=>{
              t.$el.removeClass(t.params.navigation.navigationDisabledClass),
                  p(),
                  l()
            }
            ,
            disable: h,
            update: l,
            init: p,
            destroy: u
          })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a, emit: i} = e;
          const r = "swiper-pagination";
          let n;
          s({
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: e=>e,
              formatFractionTotal: e=>e,
              bulletClass: `${r}-bullet`,
              bulletActiveClass: `${r}-bullet-active`,
              modifierClass: `${r}-`,
              currentClass: `${r}-current`,
              totalClass: `${r}-total`,
              hiddenClass: `${r}-hidden`,
              progressbarFillClass: `${r}-progressbar-fill`,
              progressbarOppositeClass: `${r}-progressbar-opposite`,
              clickableClass: `${r}-clickable`,
              lockClass: `${r}-lock`,
              horizontalClass: `${r}-horizontal`,
              verticalClass: `${r}-vertical`,
              paginationDisabledClass: `${r}-disabled`
            }
          }),
              t.pagination = {
                el: null,
                $el: null,
                bullets: []
              };
          let l = 0;
          function o() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
          }
          function c(e, s) {
            const {bulletActiveClass: a} = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
          }
          function p() {
            const e = t.rtl
                , s = t.params.pagination;
            if (o())
              return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
                , r = t.pagination.$el;
            let p;
            const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup),
            p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides),
            p > u - 1 && (p -= u),
            p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0,
            "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
              const a = t.pagination.bullets;
              let i, o, u;
              if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                  r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"),
              s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0),
                  l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)),
                  i = Math.max(p - l, 0),
                  o = i + (Math.min(a.length, s.dynamicMainBullets) - 1),
                  u = (o + i) / 2),
                  a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),
              r.length > 1)
                a.each((e=>{
                      const t = d(e)
                          , a = t.index();
                      a === p && t.addClass(s.bulletActiveClass),
                      s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`),
                      a === i && c(t, "prev"),
                      a === o && c(t, "next"))
                    }
                ));
              else {
                const e = a.eq(p)
                    , r = e.index();
                if (e.addClass(s.bulletActiveClass),
                    s.dynamicBullets) {
                  const e = a.eq(i)
                      , n = a.eq(o);
                  for (let e = i; e <= o; e += 1)
                    a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                  if (t.params.loop)
                    if (r >= a.length) {
                      for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                        a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                      a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                    } else
                      c(e, "prev"),
                          c(n, "next");
                  else
                    c(e, "prev"),
                        c(n, "next")
                }
              }
              if (s.dynamicBullets) {
                const i = Math.min(a.length, s.dynamicMainBullets + 4)
                    , r = (n * i - n) / 2 - u * n
                    , l = e ? "right" : "left";
                a.css(t.isHorizontal() ? l : "top", `${r}px`)
              }
            }
            if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
                r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
            "progressbar" === s.type) {
              let e;
              e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const a = (p + 1) / u;
              let i = 1
                  , n = 1;
              "horizontal" === e ? i = a : n = a,
                  r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)),
                i("paginationRender", r[0])) : i("paginationUpdate", r[0]),
            t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
          }
          function u() {
            const e = t.params.pagination;
            if (o())
              return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
                , a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
              let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
              t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
              for (let s = 0; s < i; s += 1)
                e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
              a.html(r),
                  t.pagination.bullets = a.find(U(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,
                a.html(r)),
            "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`,
                a.html(r)),
            "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
          }
          function h() {
            t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
              el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el)
              return;
            let s = d(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el),
            s.length > 1 && (s = s.filter((e=>d(e).parents(".swiper")[0] === t.el)))),
            "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
                s.addClass(e.modifierClass + e.type),
                s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
                l = 0,
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass),
            e.clickable && s.on("click", U(e.bulletClass), (function(e) {
                  e.preventDefault();
                  let s = d(this).index() * t.params.slidesPerGroup;
                  t.params.loop && (s += t.loopedSlides),
                      t.slideTo(s)
                }
            )),
                Object.assign(t.pagination, {
                  $el: s,
                  el: s[0]
                }),
            t.enabled || s.addClass(e.lockClass))
          }
          function m() {
            const e = t.params.pagination;
            if (o())
              return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass),
                s.removeClass(e.modifierClass + e.type),
                s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && s.off("click", U(e.bulletClass))
          }
          a("init", (()=>{
                !1 === t.params.pagination.enabled ? f() : (h(),
                    u(),
                    p())
              }
          )),
              a("activeIndexChange", (()=>{
                    (t.params.loop || void 0 === t.snapIndex) && p()
                  }
              )),
              a("snapIndexChange", (()=>{
                    t.params.loop || p()
                  }
              )),
              a("slidesLengthChange", (()=>{
                    t.params.loop && (u(),
                        p())
                  }
              )),
              a("snapGridLengthChange", (()=>{
                    t.params.loop || (u(),
                        p())
                  }
              )),
              a("destroy", (()=>{
                    m()
                  }
              )),
              a("enable disable", (()=>{
                    const {$el: e} = t.pagination;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
                  }
              )),
              a("lock unlock", (()=>{
                    p()
                  }
              )),
              a("click", ((e,s)=>{
                    const a = s.target
                        , {$el: r} = t.pagination;
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                      if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl))
                        return;
                      const e = r.hasClass(t.params.pagination.hiddenClass);
                      i(!0 === e ? "paginationShow" : "paginationHide"),
                          r.toggleClass(t.params.pagination.hiddenClass)
                    }
                  }
              ));
          const f = ()=>{
                t.$el.addClass(t.params.pagination.paginationDisabledClass),
                t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),
                    m()
              }
          ;
          Object.assign(t.pagination, {
            enable: ()=>{
              t.$el.removeClass(t.params.pagination.paginationDisabledClass),
              t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),
                  h(),
                  u(),
                  p()
            }
            ,
            disable: f,
            render: u,
            update: p,
            init: h,
            destroy: m
          })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: i, emit: r} = e;
          const n = a();
          let l, o, c, u, h = !1, m = null, f = null;
          function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el)
              return;
            const {scrollbar: e, rtlTranslate: s, progress: a} = t
                , {$dragEl: i, $el: r} = e
                , n = t.params.scrollbar;
            let l = o
                , d = (c - o) * a;
            s ? (d = -d,
                d > 0 ? (l = o - d,
                    d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d,
                d = 0) : d + o > c && (l = c - d),
                t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`),
                    i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`),
                    i[0].style.height = `${l}px`),
            n.hide && (clearTimeout(m),
                r[0].style.opacity = 1,
                m = setTimeout((()=>{
                      r[0].style.opacity = 0,
                          r.transition(400)
                    }
                ), 1e3))
          }
          function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el)
              return;
            const {scrollbar: e} = t
                , {$dragEl: s, $el: a} = e;
            s[0].style.width = "",
                s[0].style.height = "",
                c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
                u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)),
                o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10),
                t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`,
                a[0].style.display = u >= 1 ? "none" : "",
            t.params.scrollbar.hide && (a[0].style.opacity = 0),
            t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
          }
          function w(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
          }
          function b(e) {
            const {scrollbar: s, rtlTranslate: a} = t
                , {$el: i} = s;
            let r;
            r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o),
                r = Math.max(Math.min(r, 1), 0),
            a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n),
                t.setTranslate(n),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
          }
          function x(e) {
            const s = t.params.scrollbar
                , {scrollbar: a, $wrapperEl: i} = t
                , {$el: n, $dragEl: o} = a;
            h = !0,
                l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
                e.preventDefault(),
                e.stopPropagation(),
                i.transition(100),
                o.transition(100),
                b(e),
                clearTimeout(f),
                n.transition(0),
            s.hide && n.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
                r("scrollbarDragStart", e)
          }
          function y(e) {
            const {scrollbar: s, $wrapperEl: a} = t
                , {$el: i, $dragEl: n} = s;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                b(e),
                a.transition(0),
                i.transition(0),
                n.transition(0),
                r("scrollbarDragMove", e))
          }
          function E(e) {
            const s = t.params.scrollbar
                , {scrollbar: a, $wrapperEl: i} = t
                , {$el: n} = a;
            h && (h = !1,
            t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""),
                i.transition("")),
            s.hide && (clearTimeout(f),
                f = p((()=>{
                      n.css("opacity", 0),
                          n.transition(400)
                    }
                ), 1e3)),
                r("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest())
          }
          function C(e) {
            const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l} = t
                , o = s.$el;
            if (!o)
              return;
            const d = o[0]
                , c = !(!l.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1
            }
                , p = !(!l.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            if (!d)
              return;
            const u = "on" === e ? "addEventListener" : "removeEventListener";
            l.touch ? (d[u](a.start, x, c),
                d[u](a.move, y, c),
                d[u](a.end, E, p)) : (d[u](i.start, x, c),
                n[u](i.move, y, c),
                n[u](i.end, E, p))
          }
          function T() {
            const {scrollbar: e, $el: s} = t;
            t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
              el: "swiper-scrollbar"
            });
            const a = t.params.scrollbar;
            if (!a.el)
              return;
            let i = d(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)),
                i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
            let r = i.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`),
                i.append(r)),
                Object.assign(e, {
                  $el: i,
                  el: i[0],
                  $dragEl: r,
                  dragEl: r[0]
                }),
            a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"),
            i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
          }
          function $() {
            const e = t.params.scrollbar
                , s = t.scrollbar.$el;
            s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            t.params.scrollbar.el && t.scrollbar.el && C("off")
          }
          s({
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
              scrollbarDisabledClass: "swiper-scrollbar-disabled",
              horizontalClass: "swiper-scrollbar-horizontal",
              verticalClass: "swiper-scrollbar-vertical"
            }
          }),
              t.scrollbar = {
                el: null,
                dragEl: null,
                $el: null,
                $dragEl: null
              },
              i("init", (()=>{
                    !1 === t.params.scrollbar.enabled ? S() : (T(),
                        v(),
                        g())
                  }
              )),
              i("update resize observerUpdate lock unlock", (()=>{
                    v()
                  }
              )),
              i("setTranslate", (()=>{
                    g()
                  }
              )),
              i("setTransition", ((e,s)=>{
                    !function(e) {
                      t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                    }(s)
                  }
              )),
              i("enable disable", (()=>{
                    const {$el: e} = t.scrollbar;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
                  }
              )),
              i("destroy", (()=>{
                    $()
                  }
              ));
          const S = ()=>{
                t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
                t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
                    $()
              }
          ;
          Object.assign(t.scrollbar, {
            enable: ()=>{
              t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
              t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
                  T(),
                  v(),
                  g()
            }
            ,
            disable: S,
            updateSize: v,
            setTranslate: g,
            init: T,
            destroy: $
          })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          s({
            parallax: {
              enabled: !1
            }
          });
          const i = (e,s)=>{
                const {rtl: a} = t
                    , i = d(e)
                    , r = a ? -1 : 1
                    , n = i.attr("data-swiper-parallax") || "0";
                let l = i.attr("data-swiper-parallax-x")
                    , o = i.attr("data-swiper-parallax-y");
                const c = i.attr("data-swiper-parallax-scale")
                    , p = i.attr("data-swiper-parallax-opacity");
                if (l || o ? (l = l || "0",
                    o = o || "0") : t.isHorizontal() ? (l = n,
                    o = "0") : (o = n,
                    l = "0"),
                    l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px",
                    o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px",
                null != p) {
                  const e = p - (p - 1) * (1 - Math.abs(s));
                  i[0].style.opacity = e
                }
                if (null == c)
                  i.transform(`translate3d(${l}, ${o}, 0px)`);
                else {
                  const e = c - (c - 1) * (1 - Math.abs(s));
                  i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
                }
              }
              , r = ()=>{
                const {$el: e, slides: s, progress: a, snapGrid: r} = t;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{
                      i(e, a)
                    }
                )),
                    s.each(((e,s)=>{
                          let n = e.progress;
                          t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)),
                              n = Math.min(Math.max(n, -1), 1),
                              d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{
                                    i(e, n)
                                  }
                              ))
                        }
                    ))
              }
          ;
          a("beforeInit", (()=>{
                t.params.parallax.enabled && (t.params.watchSlidesProgress = !0,
                    t.originalParams.watchSlidesProgress = !0)
              }
          )),
              a("init", (()=>{
                    t.params.parallax.enabled && r()
                  }
              )),
              a("setTranslate", (()=>{
                    t.params.parallax.enabled && r()
                  }
              )),
              a("setTransition", ((e,s)=>{
                    t.params.parallax.enabled && function(e) {
                      void 0 === e && (e = t.params.speed);
                      const {$el: s} = t;
                      s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{
                            const s = d(t);
                            let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (a = 0),
                                s.transition(a)
                          }
                      ))
                    }(s)
                  }
              ))
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a, emit: i} = e;
          const n = r();
          s({
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed"
            }
          }),
              t.zoom = {
                enabled: !1
              };
          let l, o, c, p = 1, u = !1;
          const m = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          }
              , f = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          }
              , g = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          };
          let v = 1;
          function w(e) {
            if (e.targetTouches.length < 2)
              return 1;
            const t = e.targetTouches[0].pageX
                , s = e.targetTouches[0].pageY
                , a = e.targetTouches[1].pageX
                , i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
          }
          function b(e) {
            const s = t.support
                , a = t.params.zoom;
            if (o = !1,
                c = !1,
                !s.gestures) {
              if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                return;
              o = !0,
                  m.scaleStart = w(e)
            }
            m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`),
            0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)),
                m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
                m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`),
                m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0),
                u = !0) : m.$imageEl = void 0
          }
          function x(e) {
            const s = t.support
                , a = t.params.zoom
                , i = t.zoom;
            if (!s.gestures) {
              if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                return;
              c = !0,
                  m.scaleMove = w(e)
            }
            m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p,
            i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5),
            i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5),
                m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
          }
          function y(e) {
            const s = t.device
                , a = t.support
                , i = t.params.zoom
                , r = t.zoom;
            if (!a.gestures) {
              if (!o || !c)
                return;
              if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android)
                return;
              o = !1,
                  c = !1
            }
            m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio),
                m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),
                p = r.scale,
                u = !1,
            1 === r.scale && (m.$slideEl = void 0))
          }
          function E(e) {
            const s = t.zoom;
            if (!m.$imageEl || 0 === m.$imageEl.length)
              return;
            if (t.allowClick = !1,
            !f.isTouched || !m.$slideEl)
              return;
            f.isMoved || (f.width = m.$imageEl[0].offsetWidth,
                f.height = m.$imageEl[0].offsetHeight,
                f.startX = h(m.$imageWrapEl[0], "x") || 0,
                f.startY = h(m.$imageWrapEl[0], "y") || 0,
                m.slideWidth = m.$slideEl[0].offsetWidth,
                m.slideHeight = m.$slideEl[0].offsetHeight,
                m.$imageWrapEl.transition(0));
            const a = f.width * s.scale
                , i = f.height * s.scale;
            if (!(a < m.slideWidth && i < m.slideHeight)) {
              if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0),
                  f.maxX = -f.minX,
                  f.minY = Math.min(m.slideHeight / 2 - i / 2, 0),
                  f.maxY = -f.minY,
                  f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                  f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
              !f.isMoved && !u) {
                if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x))
                  return void (f.isTouched = !1);
                if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y))
                  return void (f.isTouched = !1)
              }
              e.cancelable && e.preventDefault(),
                  e.stopPropagation(),
                  f.isMoved = !0,
                  f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX,
                  f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY,
              f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8),
              f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8),
              f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8),
              f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8),
              g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
              g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
              g.prevTime || (g.prevTime = Date.now()),
                  g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2,
                  g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2,
              Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
              Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
                  g.prevPositionX = f.touchesCurrent.x,
                  g.prevPositionY = f.touchesCurrent.y,
                  g.prevTime = Date.now(),
                  m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }
          }
          function C() {
            const e = t.zoom;
            m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"),
                e.scale = 1,
                p = 1,
                m.$slideEl = void 0,
                m.$imageEl = void 0,
                m.$imageWrapEl = void 0)
          }
          function T(e) {
            const s = t.zoom
                , a = t.params.zoom;
            if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)),
                m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
                m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
            !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length)
              return;
            let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden",
                t.wrapperEl.style.touchAction = "none"),
                m.$slideEl.addClass(`${a.zoomedSlideClass}`),
                void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
                    r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x,
                    r = f.touchesStart.y),
                s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
                p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
                e ? ($ = m.$slideEl[0].offsetWidth,
                    S = m.$slideEl[0].offsetHeight,
                    l = m.$slideEl.offset().left + n.scrollX,
                    o = m.$slideEl.offset().top + n.scrollY,
                    c = l + $ / 2 - i,
                    u = o + S / 2 - r,
                    v = m.$imageEl[0].offsetWidth,
                    w = m.$imageEl[0].offsetHeight,
                    b = v * s.scale,
                    x = w * s.scale,
                    y = Math.min($ / 2 - b / 2, 0),
                    E = Math.min(S / 2 - x / 2, 0),
                    C = -y,
                    T = -E,
                    h = c * s.scale,
                    g = u * s.scale,
                h < y && (h = y),
                h > C && (h = C),
                g < E && (g = E),
                g > T && (g = T)) : (h = 0,
                    g = 0),
                m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),
                m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
          }
          function $() {
            const e = t.zoom
                , s = t.params.zoom;
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex),
                m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
                m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)),
            m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "",
                t.wrapperEl.style.touchAction = ""),
                e.scale = 1,
                p = 1,
                m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
                m.$slideEl = void 0)
          }
          function S(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? $() : T(e)
          }
          function M() {
            const e = t.support;
            return {
              passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
              },
              activeListenerWithCapture: !e.passiveListener || {
                passive: !1,
                capture: !0
              }
            }
          }
          function P() {
            return `.${t.params.slideClass}`
          }
          function k(e) {
            const {passiveListener: s} = M()
                , a = P();
            t.$wrapperEl[e]("gesturestart", a, b, s),
                t.$wrapperEl[e]("gesturechange", a, x, s),
                t.$wrapperEl[e]("gestureend", a, y, s)
          }
          function z() {
            l || (l = !0,
                k("on"))
          }
          function L() {
            l && (l = !1,
                k("off"))
          }
          function O() {
            const e = t.zoom;
            if (e.enabled)
              return;
            e.enabled = !0;
            const s = t.support
                , {passiveListener: a, activeListenerWithCapture: i} = M()
                , r = P();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a),
                t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
                t.$wrapperEl.on(t.touchEvents.move, r, x, i),
                t.$wrapperEl.on(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
                t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
          }
          function I() {
            const e = t.zoom;
            if (!e.enabled)
              return;
            const s = t.support;
            e.enabled = !1;
            const {passiveListener: a, activeListenerWithCapture: i} = M()
                , r = P();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a),
                t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
                t.$wrapperEl.off(t.touchEvents.move, r, x, i),
                t.$wrapperEl.off(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
                t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
          }
          Object.defineProperty(t.zoom, "scale", {
            get: ()=>v,
            set(e) {
              if (v !== e) {
                const t = m.$imageEl ? m.$imageEl[0] : void 0
                    , s = m.$slideEl ? m.$slideEl[0] : void 0;
                i("zoomChange", e, t, s)
              }
              v = e
            }
          }),
              a("init", (()=>{
                    t.params.zoom.enabled && O()
                  }
              )),
              a("destroy", (()=>{
                    I()
                  }
              )),
              a("touchStart", ((e,s)=>{
                    t.zoom.enabled && function(e) {
                      const s = t.device;
                      m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(),
                          f.isTouched = !0,
                          f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                          f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                    }(s)
                  }
              )),
              a("touchEnd", ((e,s)=>{
                    t.zoom.enabled && function() {
                      const e = t.zoom;
                      if (!m.$imageEl || 0 === m.$imageEl.length)
                        return;
                      if (!f.isTouched || !f.isMoved)
                        return f.isTouched = !1,
                            void (f.isMoved = !1);
                      f.isTouched = !1,
                          f.isMoved = !1;
                      let s = 300
                          , a = 300;
                      const i = g.x * s
                          , r = f.currentX + i
                          , n = g.y * a
                          , l = f.currentY + n;
                      0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
                      0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                      const o = Math.max(s, a);
                      f.currentX = r,
                          f.currentY = l;
                      const d = f.width * e.scale
                          , c = f.height * e.scale;
                      f.minX = Math.min(m.slideWidth / 2 - d / 2, 0),
                          f.maxX = -f.minX,
                          f.minY = Math.min(m.slideHeight / 2 - c / 2, 0),
                          f.maxY = -f.minY,
                          f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX),
                          f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY),
                          m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
                    }()
                  }
              )),
              a("doubleTap", ((e,s)=>{
                    !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
                  }
              )),
              a("transitionEnd", (()=>{
                    t.zoom.enabled && t.params.zoom.enabled && C()
                  }
              )),
              a("slideChange", (()=>{
                    t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
                  }
              )),
              Object.assign(t.zoom, {
                enable: O,
                disable: I,
                in: T,
                out: $,
                toggle: S
              })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a, emit: i} = e;
          s({
            lazy: {
              checkInView: !1,
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              scrollingElement: "",
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader"
            }
          }),
              t.lazy = {};
          let n = !1
              , l = !1;
          function o(e, s) {
            void 0 === s && (s = !0);
            const a = t.params.lazy;
            if (void 0 === e)
              return;
            if (0 === t.slides.length)
              return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e)
                , n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]),
            0 !== n.length && n.each((e=>{
                  const n = d(e);
                  n.addClass(a.loadingClass);
                  const l = n.attr("data-background")
                      , c = n.attr("data-src")
                      , p = n.attr("data-srcset")
                      , u = n.attr("data-sizes")
                      , h = n.parent("picture");
                  t.loadImage(n[0], c || l, p, u, !1, (()=>{
                        if (null != t && t && (!t || t.params) && !t.destroyed) {
                          if (l ? (n.css("background-image", `url("${l}")`),
                              n.removeAttr("data-background")) : (p && (n.attr("srcset", p),
                              n.removeAttr("data-srcset")),
                          u && (n.attr("sizes", u),
                              n.removeAttr("data-sizes")),
                          h.length && h.children("source").each((e=>{
                                const t = d(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")),
                                    t.removeAttr("data-srcset"))
                              }
                          )),
                          c && (n.attr("src", c),
                              n.removeAttr("data-src"))),
                              n.addClass(a.loadedClass).removeClass(a.loadingClass),
                              r.find(`.${a.preloaderClass}`).remove(),
                          t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            if (r.hasClass(t.params.slideDuplicateClass)) {
                              o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                            } else {
                              o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                          }
                          i("lazyImageReady", r[0], n[0]),
                          t.params.autoHeight && t.updateAutoHeight()
                        }
                      }
                  )),
                      i("lazyImageLoad", r[0], n[0])
                }
            ))
          }
          function c() {
            const {$wrapperEl: e, params: s, slides: a, activeIndex: i} = t
                , r = t.virtual && s.virtual.enabled
                , n = s.lazy;
            let c = s.slidesPerView;
            function p(t) {
              if (r) {
                if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)
                  return !0
              } else if (a[t])
                return !0;
              return !1
            }
            function u(e) {
              return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }
            if ("auto" === c && (c = 0),
            l || (l = !0),
                t.params.watchSlidesProgress)
              e.children(`.${s.slideVisibleClass}`).each((e=>{
                    o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
                  }
              ));
            else if (c > 1)
              for (let e = i; e < i + c; e += 1)
                p(e) && o(e);
            else
              o(i);
            if (n.loadPrevNext)
              if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                const e = n.loadPrevNextAmount
                    , t = Math.ceil(c)
                    , s = Math.min(i + t + Math.max(e, t), a.length)
                    , r = Math.max(i - Math.max(t, e), 0);
                for (let e = i + t; e < s; e += 1)
                  p(e) && o(e);
                for (let e = r; e < i; e += 1)
                  p(e) && o(e)
              } else {
                const t = e.children(`.${s.slideNextClass}`);
                t.length > 0 && o(u(t));
                const a = e.children(`.${s.slidePrevClass}`);
                a.length > 0 && o(u(a))
              }
          }
          function p() {
            const e = r();
            if (!t || t.destroyed)
              return;
            const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e)
                , a = s[0] === e
                , i = a ? e.innerWidth : s[0].offsetWidth
                , l = a ? e.innerHeight : s[0].offsetHeight
                , o = t.$el.offset()
                , {rtlTranslate: u} = t;
            let h = !1;
            u && (o.left -= t.$el[0].scrollLeft);
            const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];
            for (let e = 0; e < m.length; e += 1) {
              const t = m[e];
              if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                if (0 === t[0] && 0 === t[1])
                  continue;
                h = !0
              }
            }
            const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            h ? (c(),
                s.off("scroll", p, f)) : n || (n = !0,
                s.on("scroll", p, f))
          }
          a("beforeInit", (()=>{
                t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
              }
          )),
              a("init", (()=>{
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
                  }
              )),
              a("scroll", (()=>{
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
                  }
              )),
              a("scrollbarDragMove resize _freeModeNoMomentumRelease", (()=>{
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
                  }
              )),
              a("transitionStart", (()=>{
                    t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
                  }
              )),
              a("transitionEnd", (()=>{
                    t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
                  }
              )),
              a("slideChange", (()=>{
                    const {lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = t.params;
                    e.enabled && (s || a && (i || 0 === r)) && c()
                  }
              )),
              a("destroy", (()=>{
                    t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
                  }
              )),
              Object.assign(t.lazy, {
                load: c,
                loadInSlide: o
              })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          function i(e, t) {
            const s = function() {
              let e, t, s;
              return (a,i)=>{
                for (t = -1,
                         e = a.length; e - t > 1; )
                  s = e + t >> 1,
                      a[s] <= i ? t = s : e = s;
                return e
              }
            }();
            let a, i;
            return this.x = e,
                this.y = t,
                this.lastIndex = e.length - 1,
                this.interpolate = function(e) {
                  return e ? (i = s(this.x, e),
                      a = i - 1,
                  (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
                }
                ,
                this
          }
          function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0,
                delete t.controller.spline)
          }
          s({
            controller: {
              control: void 0,
              inverse: !1,
              by: "slide"
            }
          }),
              t.controller = {
                control: void 0
              },
              a("beforeInit", (()=>{
                    t.controller.control = t.params.controller.control
                  }
              )),
              a("update", (()=>{
                    r()
                  }
              )),
              a("resize", (()=>{
                    r()
                  }
              )),
              a("observerUpdate", (()=>{
                    r()
                  }
              )),
              a("setTranslate", ((e,s,a)=>{
                    t.controller.control && t.controller.setTranslate(s, a)
                  }
              )),
              a("setTransition", ((e,s,a)=>{
                    t.controller.control && t.controller.setTransition(s, a)
                  }
              )),
              Object.assign(t.controller, {
                setTranslate: function(e, s) {
                  const a = t.controller.control;
                  let r, n;
                  const l = t.constructor;
                  function o(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (!function(e) {
                      t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid,e.slidesGrid) : new i(t.snapGrid,e.snapGrid))
                    }(e),
                        n = -t.controller.spline.interpolate(-s)),
                    n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()),
                        n = (s - t.minTranslate()) * r + e.minTranslate()),
                    t.params.controller.inverse && (n = e.maxTranslate() - n),
                        e.updateProgress(n),
                        e.setTranslate(n, t),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                  }
                  if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1)
                      a[e] !== s && a[e]instanceof l && o(a[e]);
                  else
                    a instanceof l && s !== a && o(a)
                },
                setTransition: function(e, s) {
                  const a = t.constructor
                      , i = t.controller.control;
                  let r;
                  function n(s) {
                    s.setTransition(e, t),
                    0 !== e && (s.transitionStart(),
                    s.params.autoHeight && p((()=>{
                          s.updateAutoHeight()
                        }
                    )),
                        s.$wrapperEl.transitionEnd((()=>{
                              i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(),
                                  s.transitionEnd())
                            }
                        )))
                  }
                  if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1)
                      i[r] !== s && i[r]instanceof a && n(i[r]);
                  else
                    i instanceof a && s !== i && n(i)
                }
              })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          s({
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
              slideLabelMessage: "{{index}} / {{slidesLength}}",
              containerMessage: null,
              containerRoleDescriptionMessage: null,
              itemRoleDescriptionMessage: null,
              slideRole: "group",
              id: null
            }
          }),
              t.a11y = {
                clicked: !1
              };
          let i = null;
          function r(e) {
            const t = i;
            0 !== t.length && (t.html(""),
                t.html(e))
          }
          function n(e) {
            e.attr("tabIndex", "0")
          }
          function l(e) {
            e.attr("tabIndex", "-1")
          }
          function o(e, t) {
            e.attr("role", t)
          }
          function c(e, t) {
            e.attr("aria-roledescription", t)
          }
          function p(e, t) {
            e.attr("aria-label", t)
          }
          function u(e) {
            e.attr("aria-disabled", !0)
          }
          function h(e) {
            e.attr("aria-disabled", !1)
          }
          function m(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode)
              return;
            const s = t.params.a11y
                , a = d(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
            t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
            t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
          }
          function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
          }
          function g() {
            return f() && t.params.pagination.clickable
          }
          const v = (e,t,s)=>{
                n(e),
                "BUTTON" !== e[0].tagName && (o(e, "button"),
                    e.on("keydown", m)),
                    p(e, s),
                    function(e, t) {
                      e.attr("aria-controls", t)
                    }(e, t)
              }
              , w = ()=>{
                t.a11y.clicked = !0
              }
              , b = ()=>{
                requestAnimationFrame((()=>{
                      requestAnimationFrame((()=>{
                            t.destroyed || (t.a11y.clicked = !1)
                          }
                      ))
                    }
                ))
              }
              , x = e=>{
                if (t.a11y.clicked)
                  return;
                const s = e.target.closest(`.${t.params.slideClass}`);
                if (!s || !t.slides.includes(s))
                  return;
                const a = t.slides.indexOf(s) === t.activeIndex
                    , i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0,
                    t.slideTo(t.slides.indexOf(s), 0))
              }
              , y = ()=>{
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage),
                e.slideRole && o(d(t.slides), e.slideRole);
                const s = t.params.loop ? t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
                e.slideLabelMessage && t.slides.each(((a,i)=>{
                      const r = d(a)
                          , n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                      p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s))
                    }
                ))
              }
              , E = ()=>{
                const e = t.params.a11y;
                t.$el.append(i);
                const s = t.$el;
                e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage),
                e.containerMessage && p(s, e.containerMessage);
                const a = t.$wrapperEl
                    , r = e.id || a.attr("id") || `swiper-wrapper-${n = 16,
                void 0 === n && (n = 16),
                    "x".repeat(n).replace(/x/g, (()=>Math.round(16 * Math.random()).toString(16)))}`;
                var n;
                const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var o;
                let d, u;
                o = r,
                    a.attr("id", o),
                    function(e, t) {
                      e.attr("aria-live", t)
                    }(a, l),
                    y(),
                t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl),
                t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl),
                d && d.length && v(d, r, e.nextSlideMessage),
                u && u.length && v(u, r, e.prevSlideMessage),
                g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m),
                    t.$el.on("focus", x, !0),
                    t.$el.on("pointerdown", w, !0),
                    t.$el.on("pointerup", b, !0)
              }
          ;
          a("beforeInit", (()=>{
                i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
              }
          )),
              a("afterInit", (()=>{
                    t.params.a11y.enabled && E()
                  }
              )),
              a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (()=>{
                    t.params.a11y.enabled && y()
                  }
              )),
              a("fromEdge toEdge afterInit lock unlock", (()=>{
                    t.params.a11y.enabled && function() {
                      if (t.params.loop || t.params.rewind || !t.navigation)
                        return;
                      const {$nextEl: e, $prevEl: s} = t.navigation;
                      s && s.length > 0 && (t.isBeginning ? (u(s),
                          l(s)) : (h(s),
                          n(s))),
                      e && e.length > 0 && (t.isEnd ? (u(e),
                          l(e)) : (h(e),
                          n(e)))
                    }()
                  }
              )),
              a("paginationUpdate", (()=>{
                    t.params.a11y.enabled && function() {
                      const e = t.params.a11y;
                      f() && t.pagination.bullets.each((s=>{
                            const a = d(s);
                            t.params.pagination.clickable && (n(a),
                            t.params.pagination.renderBullet || (o(a, "button"),
                                p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))),
                                a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                          }
                      ))
                    }()
                  }
              )),
              a("destroy", (()=>{
                    t.params.a11y.enabled && function() {
                      let e, s;
                      i && i.length > 0 && i.remove(),
                      t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
                      t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl),
                      e && e.off("keydown", m),
                      s && s.off("keydown", m),
                      g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m),
                          t.$el.off("focus", x, !0),
                          t.$el.off("pointerdown", w, !0),
                          t.$el.off("pointerup", b, !0)
                    }()
                  }
              ))
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          s({
            history: {
              enabled: !1,
              root: "",
              replaceState: !1,
              key: "slides",
              keepQuery: !1
            }
          });
          let i = !1
              , n = {};
          const l = e=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
              , o = e=>{
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e=>"" !== e))
                    , i = a.length;
                return {
                  key: a[i - 2],
                  value: a[i - 1]
                }
              }
              , d = (e,s)=>{
                const a = r();
                if (!i || !t.params.history.enabled)
                  return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.slides.eq(s);
                let d = l(o.attr("data-history"));
                if (t.params.history.root.length > 0) {
                  let s = t.params.history.root;
                  "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
                      d = `${s}/${e}/${d}`
                } else
                  n.pathname.includes(e) || (d = `${e}/${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                  value: d
                }, null, d) : a.history.pushState({
                  value: d
                }, null, d))
              }
              , c = (e,s,a)=>{
                if (s)
                  for (let i = 0, r = t.slides.length; i < r; i += 1) {
                    const r = t.slides.eq(i);
                    if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                      const s = r.index();
                      t.slideTo(s, e, a)
                    }
                  }
                else
                  t.slideTo(0, e, a)
              }
              , p = ()=>{
                n = o(t.params.url),
                    c(t.params.speed, n.value, !1)
              }
          ;
          a("init", (()=>{
                t.params.history.enabled && (()=>{
                      const e = r();
                      if (t.params.history) {
                        if (!e.history || !e.history.pushState)
                          return t.params.history.enabled = !1,
                              void (t.params.hashNavigation.enabled = !0);
                        i = !0,
                            n = o(t.params.url),
                        (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit),
                        t.params.history.replaceState || e.addEventListener("popstate", p))
                      }
                    }
                )()
              }
          )),
              a("destroy", (()=>{
                    t.params.history.enabled && (()=>{
                          const e = r();
                          t.params.history.replaceState || e.removeEventListener("popstate", p)
                        }
                    )()
                  }
              )),
              a("transitionEnd _freeModeNoMomentumRelease", (()=>{
                    i && d(t.params.history.key, t.activeIndex)
                  }
              )),
              a("slideChange", (()=>{
                    i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
                  }
              ))
        }
        , function(e) {
          let {swiper: t, extendParams: s, emit: i, on: n} = e
              , l = !1;
          const o = a()
              , c = r();
          s({
            hashNavigation: {
              enabled: !1,
              replaceState: !1,
              watchState: !1
            }
          });
          const p = ()=>{
                i("hashChange");
                const e = o.location.hash.replace("#", "");
                if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                  const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                  if (void 0 === s)
                    return;
                  t.slideTo(s)
                }
              }
              , u = ()=>{
                if (l && t.params.hashNavigation.enabled)
                  if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState)
                    c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""),
                        i("hashSet");
                  else {
                    const e = t.slides.eq(t.activeIndex)
                        , s = e.attr("data-hash") || e.attr("data-history");
                    o.location.hash = s || "",
                        i("hashSet")
                  }
              }
          ;
          n("init", (()=>{
                t.params.hashNavigation.enabled && (()=>{
                      if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)
                        return;
                      l = !0;
                      const e = o.location.hash.replace("#", "");
                      if (e) {
                        const s = 0;
                        for (let a = 0, i = t.slides.length; a < i; a += 1) {
                          const i = t.slides.eq(a);
                          if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                            const e = i.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                          }
                        }
                      }
                      t.params.hashNavigation.watchState && d(c).on("hashchange", p)
                    }
                )()
              }
          )),
              n("destroy", (()=>{
                    t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
                  }
              )),
              n("transitionEnd _freeModeNoMomentumRelease", (()=>{
                    l && u()
                  }
              )),
              n("slideChange", (()=>{
                    l && t.params.cssMode && u()
                  }
              ))
        }
        , function(e) {
          let t, {swiper: s, extendParams: i, on: r, emit: n} = e;
          function l() {
            if (!s.size)
              return s.autoplay.running = !1,
                  void (s.autoplay.paused = !1);
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
                clearTimeout(t),
                t = p((()=>{
                      let e;
                      s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(),
                          e = s.slidePrev(s.params.speed, !0, !0),
                          n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0),
                          n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0),
                          n("autoplay")) : s.params.loop ? (s.loopFix(),
                          e = s.slideNext(s.params.speed, !0, !0),
                          n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0),
                          n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0),
                          n("autoplay")),
                      (s.params.cssMode && s.autoplay.running || !1 === e) && l()
                    }
                ), a)
          }
          function o() {
            return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0,
                n("autoplayStart"),
                l(),
                !0))
          }
          function d() {
            return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t),
                t = void 0),
                s.autoplay.running = !1,
                n("autoplayStop"),
                !0))
          }
          function c(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t),
                s.autoplay.paused = !0,
                0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e=>{
                      s.$wrapperEl[0].addEventListener(e, h)
                    }
                )) : (s.autoplay.paused = !1,
                    l())))
          }
          function u() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && c(),
            "visible" === e.visibilityState && s.autoplay.paused && (l(),
                s.autoplay.paused = !1)
          }
          function h(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e=>{
                  s.$wrapperEl[0].removeEventListener(e, h)
                }
            )),
                s.autoplay.paused = !1,
                s.autoplay.running ? l() : d())
          }
          function m() {
            s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"),
                c()),
                ["transitionend", "webkitTransitionEnd"].forEach((e=>{
                      s.$wrapperEl[0].removeEventListener(e, h)
                    }
                ))
          }
          function f() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1,
                n("autoplayResume"),
                l())
          }
          s.autoplay = {
            running: !1,
            paused: !1
          },
              i({
                autoplay: {
                  enabled: !1,
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !0,
                  stopOnLastSlide: !1,
                  reverseDirection: !1,
                  pauseOnMouseEnter: !1
                }
              }),
              r("init", (()=>{
                    if (s.params.autoplay.enabled) {
                      o();
                      a().addEventListener("visibilitychange", u),
                      s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m),
                          s.$el.on("mouseleave", f))
                    }
                  }
              )),
              r("beforeTransitionStart", ((e,t,a)=>{
                    s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
                  }
              )),
              r("sliderFirstMove", (()=>{
                    s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
                  }
              )),
              r("touchEnd", (()=>{
                    s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
                  }
              )),
              r("destroy", (()=>{
                    s.$el.off("mouseenter", m),
                        s.$el.off("mouseleave", f),
                    s.autoplay.running && d();
                    a().removeEventListener("visibilitychange", u)
                  }
              )),
              Object.assign(s.autoplay, {
                pause: c,
                run: l,
                start: o,
                stop: d
              })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          s({
            thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-thumbs"
            }
          });
          let i = !1
              , r = !1;
          function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed)
              return;
            const s = e.clickedIndex
                , a = e.clickedSlide;
            if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass))
              return;
            if (null == s)
              return;
            let i;
            if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s,
                t.params.loop) {
              let e = t.activeIndex;
              t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                  t._clientLeft = t.$wrapperEl[0].clientLeft,
                  e = t.activeIndex);
              const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index()
                  , a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
              i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
            }
            t.slideTo(i)
          }
          function l() {
            const {thumbs: e} = t.params;
            if (i)
              return !1;
            i = !0;
            const s = t.constructor;
            if (e.swiper instanceof s)
              t.thumbs.swiper = e.swiper,
                  Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                  }),
                  Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                  });
            else if (m(e.swiper)) {
              const a = Object.assign({}, e.swiper);
              Object.assign(a, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
              }),
                  t.thumbs.swiper = new s(a),
                  r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
                t.thumbs.swiper.on("tap", n),
                !0
          }
          function o(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed)
              return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (i = 1),
                i = Math.floor(i),
                s.slides.removeClass(r),
            s.params.loop || s.params.virtual && s.params.virtual.enabled)
              for (let e = 0; e < i; e += 1)
                s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r);
            else
              for (let e = 0; e < i; e += 1)
                s.slides.eq(t.realIndex + e).addClass(r);
            const n = t.params.thumbs.autoScrollOffset
                , l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
              let i, r, o = s.activeIndex;
              if (s.params.loop) {
                s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(),
                    s._clientLeft = s.$wrapperEl[0].clientLeft,
                    o = s.activeIndex);
                const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index()
                    , a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e,
                    r = t.activeIndex > t.previousIndex ? "next" : "prev"
              } else
                i = t.realIndex,
                    r = i > t.previousIndex ? "next" : "prev";
              l && (i += "next" === r ? n : -1 * n),
              s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup,
                  s.slideTo(i, e ? 0 : void 0))
            }
          }
          t.thumbs = {
            swiper: null
          },
              a("beforeInit", (()=>{
                    const {thumbs: e} = t.params;
                    e && e.swiper && (l(),
                        o(!0))
                  }
              )),
              a("slideChange update resize observerUpdate", (()=>{
                    o()
                  }
              )),
              a("setTransition", ((e,s)=>{
                    const a = t.thumbs.swiper;
                    a && !a.destroyed && a.setTransition(s)
                  }
              )),
              a("beforeDestroy", (()=>{
                    const e = t.thumbs.swiper;
                    e && !e.destroyed && r && e.destroy()
                  }
              )),
              Object.assign(t.thumbs, {
                init: l,
                update: o
              })
        }
        , function(e) {
          let {swiper: t, extendParams: s, emit: a, once: i} = e;
          s({
            freeMode: {
              enabled: !1,
              momentum: !0,
              momentumRatio: 1,
              momentumBounce: !0,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: !1,
              minimumVelocity: .02
            }
          }),
              Object.assign(t, {
                freeMode: {
                  onTouchStart: function() {
                    const e = t.getTranslate();
                    t.setTranslate(e),
                        t.setTransition(0),
                        t.touchEventsData.velocities.length = 0,
                        t.freeMode.onTouchEnd({
                          currentPos: t.rtl ? t.translate : -t.translate
                        })
                  },
                  onTouchMove: function() {
                    const {touchEventsData: e, touches: s} = t;
                    0 === e.velocities.length && e.velocities.push({
                      position: s[t.isHorizontal() ? "startX" : "startY"],
                      time: e.touchStartTime
                    }),
                        e.velocities.push({
                          position: s[t.isHorizontal() ? "currentX" : "currentY"],
                          time: u()
                        })
                  },
                  onTouchEnd: function(e) {
                    let {currentPos: s} = e;
                    const {params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d} = t
                        , c = u() - d.touchStartTime;
                    if (s < -t.minTranslate())
                      t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate())
                      t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                      if (r.freeMode.momentum) {
                        if (d.velocities.length > 1) {
                          const e = d.velocities.pop()
                              , s = d.velocities.pop()
                              , a = e.position - s.position
                              , i = e.time - s.time;
                          t.velocity = a / i,
                              t.velocity /= 2,
                          Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0),
                          (i > 150 || u() - e.time > 300) && (t.velocity = 0)
                        } else
                          t.velocity = 0;
                        t.velocity *= r.freeMode.momentumVelocityRatio,
                            d.velocities.length = 0;
                        let e = 1e3 * r.freeMode.momentumRatio;
                        const s = t.velocity * e;
                        let c = t.translate + s;
                        l && (c = -c);
                        let p, h = !1;
                        const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                        let f;
                        if (c < t.maxTranslate())
                          r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m),
                              p = t.maxTranslate(),
                              h = !0,
                              d.allowMomentumBounce = !0) : c = t.maxTranslate(),
                          r.loop && r.centeredSlides && (f = !0);
                        else if (c > t.minTranslate())
                          r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m),
                              p = t.minTranslate(),
                              h = !0,
                              d.allowMomentumBounce = !0) : c = t.minTranslate(),
                          r.loop && r.centeredSlides && (f = !0);
                        else if (r.freeMode.sticky) {
                          let e;
                          for (let t = 0; t < o.length; t += 1)
                            if (o[t] > -c) {
                              e = t;
                              break
                            }
                          c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1],
                              c = -c
                        }
                        if (f && i("transitionEnd", (()=>{
                              t.loopFix()
                            }
                        )),
                        0 !== t.velocity) {
                          if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity),
                              r.freeMode.sticky) {
                            const s = Math.abs((l ? -c : c) - t.translate)
                                , a = t.slidesSizesGrid[t.activeIndex];
                            e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                          }
                        } else if (r.freeMode.sticky)
                          return void t.slideToClosest();
                        r.freeMode.momentumBounce && h ? (t.updateProgress(p),
                            t.setTransition(e),
                            t.setTranslate(c),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating = !0,
                            n.transitionEnd((()=>{
                                  t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"),
                                      t.setTransition(r.speed),
                                      setTimeout((()=>{
                                            t.setTranslate(p),
                                                n.transitionEnd((()=>{
                                                      t && !t.destroyed && t.transitionEnd()
                                                    }
                                                ))
                                          }
                                      ), 0))
                                }
                            ))) : t.velocity ? (a("_freeModeNoMomentumRelease"),
                            t.updateProgress(c),
                            t.setTransition(e),
                            t.setTranslate(c),
                            t.transitionStart(!0, t.swipeDirection),
                        t.animating || (t.animating = !0,
                            n.transitionEnd((()=>{
                                  t && !t.destroyed && t.transitionEnd()
                                }
                            )))) : t.updateProgress(c),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                      } else {
                        if (r.freeMode.sticky)
                          return void t.slideToClosest();
                        r.freeMode && a("_freeModeNoMomentumRelease")
                      }
                      (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(),
                          t.updateActiveIndex(),
                          t.updateSlidesClasses())
                    }
                  }
                }
              })
        }
        , function(e) {
          let t, s, a, {swiper: i, extendParams: r} = e;
          r({
            grid: {
              rows: 1,
              fill: "column"
            }
          }),
              i.grid = {
                initSlides: e=>{
                  const {slidesPerView: r} = i.params
                      , {rows: n, fill: l} = i.params.grid;
                  s = t / n,
                      a = Math.floor(e / n),
                      t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n,
                  "auto" !== r && "row" === l && (t = Math.max(t, r * n))
                }
                ,
                updateSlide: (e,r,n,l)=>{
                  const {slidesPerGroup: o, spaceBetween: d} = i.params
                      , {rows: c, fill: p} = i.params.grid;
                  let u, h, m;
                  if ("row" === p && o > 1) {
                    const s = Math.floor(e / (o * c))
                        , a = e - c * o * s
                        , i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                    m = Math.floor(a / i),
                        h = a - m * i + s * o,
                        u = h + m * t / c,
                        r.css({
                          "-webkit-order": u,
                          order: u
                        })
                  } else
                    "column" === p ? (h = Math.floor(e / c),
                        m = e - h * c,
                    (h > a || h === a && m === c - 1) && (m += 1,
                    m >= c && (m = 0,
                        h += 1))) : (m = Math.floor(e / s),
                        h = e - m * s);
                  r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
                }
                ,
                updateWrapperSize: (e,s,a)=>{
                  const {spaceBetween: r, centeredSlides: n, roundLengths: l} = i.params
                      , {rows: o} = i.params.grid;
                  if (i.virtualSize = (e + r) * t,
                      i.virtualSize = Math.ceil(i.virtualSize / o) - r,
                      i.$wrapperEl.css({
                        [a("width")]: `${i.virtualSize + r}px`
                      }),
                      n) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                      let a = s[t];
                      l && (a = Math.floor(a)),
                      s[t] < i.virtualSize + s[0] && e.push(a)
                    }
                    s.push(...e)
                  }
                }
              }
        }
        , function(e) {
          let {swiper: t} = e;
          Object.assign(t, {
            appendSlide: K.bind(t),
            prependSlide: Z.bind(t),
            addSlide: Q.bind(t),
            removeSlide: J.bind(t),
            removeAllSlides: ee.bind(t)
          })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          s({
            fadeEffect: {
              crossFade: !1,
              transformEl: null
            }
          }),
              te({
                effect: "fade",
                swiper: t,
                on: a,
                setTranslate: ()=>{
                  const {slides: e} = t
                      , s = t.params.fadeEffect;
                  for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let i = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (i -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = i,
                        i = 0);
                    const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({
                      opacity: n
                    }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                  }
                }
                ,
                setTransition: e=>{
                  const {transformEl: s} = t.params.fadeEffect;
                  (s ? t.slides.find(s) : t.slides).transition(e),
                      ae({
                        swiper: t,
                        duration: e,
                        transformEl: s,
                        allSlides: !0
                      })
                }
                ,
                overwriteParams: ()=>({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !t.params.cssMode
                })
              })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          s({
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: .94
            }
          });
          const i = (e,t,s)=>{
                let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
                    , i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`),
                    e.append(a)),
                0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`),
                    e.append(i)),
                a.length && (a[0].style.opacity = Math.max(-t, 0)),
                i.length && (i[0].style.opacity = Math.max(t, 0))
              }
          ;
          te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: ()=>{
              const {$el: e, $wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: c} = t
                  , p = t.params.cubeEffect
                  , u = t.isHorizontal()
                  , h = t.virtual && t.params.virtual.enabled;
              let m, f = 0;
              p.shadow && (u ? (m = s.find(".swiper-cube-shadow"),
              0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'),
                  s.append(m)),
                  m.css({
                    height: `${r}px`
                  })) : (m = e.find(".swiper-cube-shadow"),
              0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'),
                  e.append(m))));
              for (let e = 0; e < a.length; e += 1) {
                const t = a.eq(e);
                let s = e;
                h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                let r = 90 * s
                    , n = Math.floor(r / 360);
                l && (r = -r,
                    n = Math.floor(-r / 360));
                const d = Math.max(Math.min(t[0].progress, 1), -1);
                let c = 0
                    , m = 0
                    , g = 0;
                s % 4 == 0 ? (c = 4 * -n * o,
                    g = 0) : (s - 1) % 4 == 0 ? (c = 0,
                    g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o,
                    g = o) : (s - 3) % 4 == 0 && (c = -o,
                    g = 3 * o + 4 * o * n),
                l && (c = -c),
                u || (m = c,
                    c = 0);
                const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                d <= 1 && d > -1 && (f = 90 * s + 90 * d,
                l && (f = 90 * -s - 90 * d)),
                    t.transform(v),
                p.slideShadows && i(t, d, u)
              }
              if (s.css({
                "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                "transform-origin": `50% 50% -${o / 2}px`
              }),
                  p.shadow)
                if (u)
                  m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);
                else {
                  const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90)
                      , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                      , s = p.shadowScale
                      , a = p.shadowScale / t
                      , i = p.shadowOffset;
                  m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`)
                }
              const g = c.isSafari || c.isWebView ? -o / 2 : 0;
              s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`),
                  s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            }
            ,
            setTransition: e=>{
              const {$el: s, slides: a} = t;
              a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
              t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            }
            ,
            recreateShadows: ()=>{
              const e = t.isHorizontal();
              t.slides.each((t=>{
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(d(t), s, e)
                  }
              ))
            }
            ,
            getEffectParams: ()=>t.params.cubeEffect,
            perspective: ()=>!0,
            overwriteParams: ()=>({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            })
          })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          s({
            flipEffect: {
              slideShadows: !0,
              limitRotation: !0,
              transformEl: null
            }
          });
          const i = (e,s,a)=>{
                let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
                    , r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")),
                0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")),
                i.length && (i[0].style.opacity = Math.max(-s, 0)),
                r.length && (r[0].style.opacity = Math.max(s, 0))
              }
          ;
          te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: ()=>{
              const {slides: e, rtlTranslate: s} = t
                  , a = t.params.flipEffect;
              for (let r = 0; r < e.length; r += 1) {
                const n = e.eq(r);
                let l = n[0].progress;
                t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                const o = n[0].swiperSlideOffset;
                let d = -180 * l
                    , c = 0
                    , p = t.params.cssMode ? -o - t.translate : -o
                    , u = 0;
                t.isHorizontal() ? s && (d = -d) : (u = p,
                    p = 0,
                    c = -d,
                    d = 0),
                    n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length,
                a.slideShadows && i(n, l, a);
                const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                se(a, n).transform(h)
              }
            }
            ,
            setTransition: e=>{
              const {transformEl: s} = t.params.flipEffect;
              (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                  ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                  })
            }
            ,
            recreateShadows: ()=>{
              const e = t.params.flipEffect;
              t.slides.each((s=>{
                    const a = d(s);
                    let r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)),
                        i(a, r, e)
                  }
              ))
            }
            ,
            getEffectParams: ()=>t.params.flipEffect,
            perspective: ()=>!0,
            overwriteParams: ()=>({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode
            })
          })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          s({
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
              transformEl: null
            }
          }),
              te({
                effect: "coverflow",
                swiper: t,
                on: a,
                setTranslate: ()=>{
                  const {width: e, height: s, slides: a, slidesSizesGrid: i} = t
                      , r = t.params.coverflowEffect
                      , n = t.isHorizontal()
                      , l = t.translate
                      , o = n ? e / 2 - l : s / 2 - l
                      , d = n ? r.rotate : -r.rotate
                      , c = r.depth;
                  for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e)
                        , s = i[e]
                        , l = (o - t[0].swiperSlideOffset - s / 2) / s
                        , p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let u = n ? d * p : 0
                        , h = n ? 0 : d * p
                        , m = -c * Math.abs(p)
                        , f = r.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                    let g = n ? 0 : f * p
                        , v = n ? f * p : 0
                        , w = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < .001 && (v = 0),
                    Math.abs(g) < .001 && (g = 0),
                    Math.abs(m) < .001 && (m = 0),
                    Math.abs(u) < .001 && (u = 0),
                    Math.abs(h) < .001 && (h = 0),
                    Math.abs(w) < .001 && (w = 0);
                    const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (se(r, t).transform(b),
                        t[0].style.zIndex = 1 - Math.abs(Math.round(p)),
                        r.slideShadows) {
                      let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                          , s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                      0 === e.length && (e = ie(r, t, n ? "left" : "top")),
                      0 === s.length && (s = ie(r, t, n ? "right" : "bottom")),
                      e.length && (e[0].style.opacity = p > 0 ? p : 0),
                      s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                    }
                  }
                }
                ,
                setTransition: e=>{
                  const {transformEl: s} = t.params.coverflowEffect;
                  (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
                ,
                perspective: ()=>!0,
                overwriteParams: ()=>({
                  watchSlidesProgress: !0
                })
              })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          s({
            creativeEffect: {
              transformEl: null,
              limitProgress: 1,
              shadowPerProgress: !1,
              progressMultiplier: 1,
              perspective: !0,
              prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
              },
              next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
              }
            }
          });
          const i = e=>"string" == typeof e ? e : `${e}px`;
          te({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: ()=>{
              const {slides: e, $wrapperEl: s, slidesSizesGrid: a} = t
                  , r = t.params.creativeEffect
                  , {progressMultiplier: n} = r
                  , l = t.params.centeredSlides;
              if (l) {
                const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                s.transform(`translateX(calc(50% - ${e}px))`)
              }
              for (let s = 0; s < e.length; s += 1) {
                const a = e.eq(s)
                    , o = a[0].progress
                    , d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                let c = d;
                l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                const p = a[0].swiperSlideOffset
                    , u = [t.params.cssMode ? -p - t.translate : -p, 0, 0]
                    , h = [0, 0, 0];
                let m = !1;
                t.isHorizontal() || (u[1] = u[0],
                    u[0] = 0);
                let f = {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  scale: 1,
                  opacity: 1
                };
                d < 0 ? (f = r.next,
                    m = !0) : d > 0 && (f = r.prev,
                    m = !0),
                    u.forEach(((e,t)=>{
                          u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
                        }
                    )),
                    h.forEach(((e,t)=>{
                          h[t] = f.rotate[t] * Math.abs(d * n)
                        }
                    )),
                    a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                const g = u.join(", ")
                    , v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`
                    , w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`
                    , b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n
                    , x = `translate3d(${g}) ${v} ${w}`;
                if (m && f.shadow || !m) {
                  let e = a.children(".swiper-slide-shadow");
                  if (0 === e.length && f.shadow && (e = ie(r, a)),
                      e.length) {
                    const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                    e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                  }
                }
                const y = se(r, a);
                y.transform(x).css({
                  opacity: b
                }),
                f.origin && y.css("transform-origin", f.origin)
              }
            }
            ,
            setTransition: e=>{
              const {transformEl: s} = t.params.creativeEffect;
              (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                  ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                  })
            }
            ,
            perspective: ()=>t.params.creativeEffect.perspective,
            overwriteParams: ()=>({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode
            })
          })
        }
        , function(e) {
          let {swiper: t, extendParams: s, on: a} = e;
          s({
            cardsEffect: {
              slideShadows: !0,
              transformEl: null,
              rotate: !0,
              perSlideRotate: 2,
              perSlideOffset: 8
            }
          }),
              te({
                effect: "cards",
                swiper: t,
                on: a,
                setTranslate: ()=>{
                  const {slides: e, activeIndex: s} = t
                      , a = t.params.cardsEffect
                      , {startTranslate: i, isTouched: r} = t.touchEventsData
                      , n = t.translate;
                  for (let l = 0; l < e.length; l += 1) {
                    const o = e.eq(l)
                        , d = o[0].progress
                        , c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                    t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let u = t.params.cssMode ? -p - t.translate : -p
                        , h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1
                        , g = -a.perSlideRotate * c
                        , v = a.perSlideOffset - .75 * Math.abs(c);
                    const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l
                        , b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i
                        , x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                    if (b || x) {
                      const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                      g += -28 * c * e,
                          f += -.5 * e,
                          v += 96 * e,
                          h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`,
                        !t.isHorizontal()) {
                      const e = h;
                      h = u,
                          u = e
                    }
                    const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)
                        , E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
                    if (a.slideShadows) {
                      let e = o.find(".swiper-slide-shadow");
                      0 === e.length && (e = ie(a, o)),
                      e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    se(a, o).transform(E)
                  }
                }
                ,
                setTransition: e=>{
                  const {transformEl: s} = t.params.cardsEffect;
                  (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                      ae({
                        swiper: t,
                        duration: e,
                        transformEl: s
                      })
                }
                ,
                perspective: ()=>!0,
                overwriteParams: ()=>({
                  watchSlidesProgress: !0,
                  virtualTranslate: !t.params.cssMode
                })
              })
        }
      ];
      return V.use(re),
          V
    }
));
//# sourceMappingURL=swiper-bundle.min.js.map
!function(t, s) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = s() : "function" == typeof define && define.amd ? define(s) : (t || self).Typed = s()
}(this, function() {
  function t() {
    return t = Object.assign ? Object.assign.bind() : function(t) {
      for (var s = 1; s < arguments.length; s++) {
        var e = arguments[s];
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
      }
      return t
    }
        ,
        t.apply(this, arguments)
  }
  var s = {
    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: Infinity,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function(t) {},
    onComplete: function(t) {},
    preStringTyped: function(t, s) {},
    onStringTyped: function(t, s) {},
    onLastStringBackspaced: function(t) {},
    onTypingPaused: function(t, s) {},
    onTypingResumed: function(t, s) {},
    onReset: function(t) {},
    onStop: function(t, s) {},
    onStart: function(t, s) {},
    onDestroy: function(t) {}
  }
      , e = new (/*#__PURE__*/
      function() {
        function e() {}
        var n = e.prototype;
        return n.load = function(e, n, i) {
          if (e.el = "string" == typeof i ? document.querySelector(i) : i,
              e.options = t({}, s, n),
              e.isInput = "input" === e.el.tagName.toLowerCase(),
              e.attr = e.options.attr,
              e.bindInputFocusEvents = e.options.bindInputFocusEvents,
              e.showCursor = !e.isInput && e.options.showCursor,
              e.cursorChar = e.options.cursorChar,
              e.cursorBlinking = !0,
              e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent,
              e.contentType = e.options.contentType,
              e.typeSpeed = e.options.typeSpeed,
              e.startDelay = e.options.startDelay,
              e.backSpeed = e.options.backSpeed,
              e.smartBackspace = e.options.smartBackspace,
              e.backDelay = e.options.backDelay,
              e.fadeOut = e.options.fadeOut,
              e.fadeOutClass = e.options.fadeOutClass,
              e.fadeOutDelay = e.options.fadeOutDelay,
              e.isPaused = !1,
              e.strings = e.options.strings.map(function(t) {
                return t.trim()
              }),
              e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement,
              e.stringsElement) {
            e.strings = [],
                e.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
            var r = Array.prototype.slice.apply(e.stringsElement.children)
                , o = r.length;
            if (o)
              for (var a = 0; a < o; a += 1)
                e.strings.push(r[a].innerHTML.trim())
          }
          for (var u in e.strPos = 0,
              e.currentElContent = this.getCurrentElContent(e),
          e.currentElContent && e.currentElContent.length > 0 && (e.strPos = e.currentElContent.length - 1,
              e.strings.unshift(e.currentElContent)),
              e.sequence = [],
              e.strings)
            e.sequence[u] = u;
          e.arrayPos = 0,
              e.stopNum = 0,
              e.loop = e.options.loop,
              e.loopCount = e.options.loopCount,
              e.curLoop = 0,
              e.shuffle = e.options.shuffle,
              e.pause = {
                status: !1,
                typewrite: !0,
                curString: "",
                curStrPos: 0
              },
              e.typingComplete = !1,
              e.autoInsertCss = e.options.autoInsertCss,
          e.autoInsertCss && (this.appendCursorAnimationCss(e),
              this.appendFadeOutAnimationCss(e))
        }
            ,
            n.getCurrentElContent = function(t) {
              return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
            }
            ,
            n.appendCursorAnimationCss = function(t) {
              var s = "data-typed-js-cursor-css";
              if (t.showCursor && !document.querySelector("[" + s + "]")) {
                var e = document.createElement("style");
                e.setAttribute(s, "true"),
                    e.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",
                    document.body.appendChild(e)
              }
            }
            ,
            n.appendFadeOutAnimationCss = function(t) {
              var s = "data-typed-fadeout-js-css";
              if (t.fadeOut && !document.querySelector("[" + s + "]")) {
                var e = document.createElement("style");
                e.setAttribute(s, "true"),
                    e.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",
                    document.body.appendChild(e)
              }
            }
            ,
            e
      }())
      , n = new (/*#__PURE__*/
      function() {
        function t() {}
        var s = t.prototype;
        return s.typeHtmlChars = function(t, s, e) {
          if ("html" !== e.contentType)
            return s;
          var n = t.substring(s).charAt(0);
          if ("<" === n || "&" === n) {
            var i;
            for (i = "<" === n ? ">" : ";"; t.substring(s + 1).charAt(0) !== i && !(1 + ++s > t.length); )
              ;
            s++
          }
          return s
        }
            ,
            s.backSpaceHtmlChars = function(t, s, e) {
              if ("html" !== e.contentType)
                return s;
              var n = t.substring(s).charAt(0);
              if (">" === n || ";" === n) {
                var i;
                for (i = ">" === n ? "<" : "&"; t.substring(s - 1).charAt(0) !== i && !(--s < 0); )
                  ;
                s--
              }
              return s
            }
            ,
            t
      }());
  /*#__PURE__*/
  return function() {
    function t(t, s) {
      e.load(this, s, t),
          this.begin()
    }
    var s = t.prototype;
    return s.toggle = function() {
      this.pause.status ? this.start() : this.stop()
    }
        ,
        s.stop = function() {
          this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
              this.pause.status = !0,
              this.options.onStop(this.arrayPos, this))
        }
        ,
        s.start = function() {
          this.typingComplete || this.pause.status && (this.pause.status = !1,
              this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
              this.options.onStart(this.arrayPos, this))
        }
        ,
        s.destroy = function() {
          this.reset(!1),
              this.options.onDestroy(this)
        }
        ,
        s.reset = function(t) {
          void 0 === t && (t = !0),
              clearInterval(this.timeout),
              this.replaceText(""),
          this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor),
              this.cursor = null),
              this.strPos = 0,
              this.arrayPos = 0,
              this.curLoop = 0,
          t && (this.insertCursor(),
              this.options.onReset(this),
              this.begin())
        }
        ,
        s.begin = function() {
          var t = this;
          this.options.onBegin(this),
              this.typingComplete = !1,
              this.shuffleStringsIfNeeded(this),
              this.insertCursor(),
          this.bindInputFocusEvents && this.bindFocusEvents(),
              this.timeout = setTimeout(function() {
                0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos)
              }, this.startDelay)
        }
        ,
        s.typewrite = function(t, s) {
          var e = this;
          this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
          this.cursor && this.cursor.classList.remove(this.fadeOutClass));
          var i = this.humanizer(this.typeSpeed)
              , r = 1;
          !0 !== this.pause.status ? this.timeout = setTimeout(function() {
            s = n.typeHtmlChars(t, s, e);
            var i = 0
                , o = t.substring(s);
            if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
              var a = 1;
              a += (o = /\d+/.exec(o)[0]).length,
                  i = parseInt(o),
                  e.temporaryPause = !0,
                  e.options.onTypingPaused(e.arrayPos, e),
                  t = t.substring(0, s) + t.substring(s + a),
                  e.toggleBlinking(!0)
            }
            if ("`" === o.charAt(0)) {
              for (; "`" !== t.substring(s + r).charAt(0) && (r++,
                  !(s + r > t.length)); )
                ;
              var u = t.substring(0, s)
                  , p = t.substring(u.length + 1, s + r)
                  , c = t.substring(s + r + 1);
              t = u + p + c,
                  r--
            }
            e.timeout = setTimeout(function() {
              e.toggleBlinking(!1),
                  s >= t.length ? e.doneTyping(t, s) : e.keepTyping(t, s, r),
              e.temporaryPause && (e.temporaryPause = !1,
                  e.options.onTypingResumed(e.arrayPos, e))
            }, i)
          }, i) : this.setPauseStatus(t, s, !0)
        }
        ,
        s.keepTyping = function(t, s, e) {
          0 === s && (this.toggleBlinking(!1),
              this.options.preStringTyped(this.arrayPos, this));
          var n = t.substring(0, s += e);
          this.replaceText(n),
              this.typewrite(t, s)
        }
        ,
        s.doneTyping = function(t, s) {
          var e = this;
          this.options.onStringTyped(this.arrayPos, this),
              this.toggleBlinking(!0),
          this.arrayPos === this.strings.length - 1 && (this.complete(),
          !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
            e.backspace(t, s)
          }, this.backDelay))
        }
        ,
        s.backspace = function(t, s) {
          var e = this;
          if (!0 !== this.pause.status) {
            if (this.fadeOut)
              return this.initFadeOut();
            this.toggleBlinking(!1);
            var i = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function() {
              s = n.backSpaceHtmlChars(t, s, e);
              var i = t.substring(0, s);
              if (e.replaceText(i),
                  e.smartBackspace) {
                var r = e.strings[e.arrayPos + 1];
                e.stopNum = r && i === r.substring(0, s) ? s : 0
              }
              s > e.stopNum ? (s--,
                  e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++,
                  e.arrayPos === e.strings.length ? (e.arrayPos = 0,
                      e.options.onLastStringBackspaced(),
                      e.shuffleStringsIfNeeded(),
                      e.begin()) : e.typewrite(e.strings[e.sequence[e.arrayPos]], s))
            }, i)
          } else
            this.setPauseStatus(t, s, !1)
        }
        ,
        s.complete = function() {
          this.options.onComplete(this),
              this.loop ? this.curLoop++ : this.typingComplete = !0
        }
        ,
        s.setPauseStatus = function(t, s, e) {
          this.pause.typewrite = e,
              this.pause.curString = t,
              this.pause.curStrPos = s
        }
        ,
        s.toggleBlinking = function(t) {
          this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t,
              t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
        }
        ,
        s.humanizer = function(t) {
          return Math.round(Math.random() * t / 2) + t
        }
        ,
        s.shuffleStringsIfNeeded = function() {
          this.shuffle && (this.sequence = this.sequence.sort(function() {
            return Math.random() - .5
          }))
        }
        ,
        s.initFadeOut = function() {
          var t = this;
          return this.el.className += " " + this.fadeOutClass,
          this.cursor && (this.cursor.className += " " + this.fadeOutClass),
              setTimeout(function() {
                t.arrayPos++,
                    t.replaceText(""),
                    t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0),
                        t.arrayPos = 0)
              }, this.fadeOutDelay)
        }
        ,
        s.replaceText = function(t) {
          this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
        }
        ,
        s.bindFocusEvents = function() {
          var t = this;
          this.isInput && (this.el.addEventListener("focus", function(s) {
            t.stop()
          }),
              this.el.addEventListener("blur", function(s) {
                t.el.value && 0 !== t.el.value.length || t.start()
              }))
        }
        ,
        s.insertCursor = function() {
          this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
              this.cursor.className = "typed-cursor",
              this.cursor.setAttribute("aria-hidden", !0),
              this.cursor.innerHTML = this.cursorChar,
          this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
        }
        ,
        t
  }()
});

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.Context.refreshAll()
    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true
    }
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}());
(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1
    if (!Waypoint.windowContext) {
      Waypoint.windowContext = true
      Waypoint.windowContext = new Context(window)
    }

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    var isWindow = this.element == this.element.window
    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        if (waypoint.triggerPoint === null) {
          continue
        }
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = isWindow ? undefined : this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        } else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > -1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment)
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        } else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        } else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    Waypoint.requestAnimationFrame(function() {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
    })

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }

  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}());
(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}());
(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function isWindow(element) {
    return element === element.window
  }

  function getWindow(element) {
    if (isWindow(element)) {
      return element
    }
    return element.defaultView
  }

  function NoFrameworkAdapter(element) {
    this.element = element
    this.handlers = {}
  }

  NoFrameworkAdapter.prototype.innerHeight = function() {
    var isWin = isWindow(this.element)
    return isWin ? this.element.innerHeight : this.element.clientHeight
  }

  NoFrameworkAdapter.prototype.innerWidth = function() {
    var isWin = isWindow(this.element)
    return isWin ? this.element.innerWidth : this.element.clientWidth
  }

  NoFrameworkAdapter.prototype.off = function(event, handler) {
    function removeListeners(element, listeners, handler) {
      for (var i = 0, end = listeners.length - 1; i < end; i++) {
        var listener = listeners[i]
        if (!handler || handler === listener) {
          element.removeEventListener(listener)
        }
      }
    }

    var eventParts = event.split('.')
    var eventType = eventParts[0]
    var namespace = eventParts[1]
    var element = this.element

    if (namespace && this.handlers[namespace] && eventType) {
      removeListeners(element, this.handlers[namespace][eventType], handler)
      this.handlers[namespace][eventType] = []
    } else if (eventType) {
      for (var ns in this.handlers) {
        removeListeners(element, this.handlers[ns][eventType] || [], handler)
        this.handlers[ns][eventType] = []
      }
    } else if (namespace && this.handlers[namespace]) {
      for (var type in this.handlers[namespace]) {
        removeListeners(element, this.handlers[namespace][type], handler)
      }
      this.handlers[namespace] = {}
    }
  }

  /* Adapted from jQuery 1.x offset() */
  NoFrameworkAdapter.prototype.offset = function() {
    if (!this.element.ownerDocument) {
      return null
    }

    var documentElement = this.element.ownerDocument.documentElement
    var win = getWindow(this.element.ownerDocument)
    var rect = {
      top: 0,
      left: 0
    }

    if (this.element.getBoundingClientRect) {
      rect = this.element.getBoundingClientRect()
    }

    return {
      top: rect.top + win.pageYOffset - documentElement.clientTop,
      left: rect.left + win.pageXOffset - documentElement.clientLeft
    }
  }

  NoFrameworkAdapter.prototype.on = function(event, handler) {
    var eventParts = event.split('.')
    var eventType = eventParts[0]
    var namespace = eventParts[1] || '__default'
    var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {}
    var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || []

    nsTypeList.push(handler)
    this.element.addEventListener(eventType, handler)
  }

  NoFrameworkAdapter.prototype.outerHeight = function(includeMargin) {
    var height = this.innerHeight()
    var computedStyle

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element)
      height += parseInt(computedStyle.marginTop, 10)
      height += parseInt(computedStyle.marginBottom, 10)
    }

    return height
  }

  NoFrameworkAdapter.prototype.outerWidth = function(includeMargin) {
    var width = this.innerWidth()
    var computedStyle

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element)
      width += parseInt(computedStyle.marginLeft, 10)
      width += parseInt(computedStyle.marginRight, 10)
    }

    return width
  }

  NoFrameworkAdapter.prototype.scrollLeft = function() {
    var win = getWindow(this.element)
    return win ? win.pageXOffset : this.element.scrollLeft
  }

  NoFrameworkAdapter.prototype.scrollTop = function() {
    var win = getWindow(this.element)
    return win ? win.pageYOffset : this.element.scrollTop
  }

  NoFrameworkAdapter.extend = function() {
    var args = Array.prototype.slice.call(arguments)

    function merge(target, obj) {
      if (typeof target === 'object' && typeof obj === 'object') {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            target[key] = obj[key]
          }
        }
      }

      return target
    }

    for (var i = 1, end = args.length; i < end; i++) {
      merge(args[0], args[i])
    }
    return args[0]
  }

  NoFrameworkAdapter.inArray = function(element, array, i) {
    return array == null ? -1 : array.indexOf(element, i)
  }

  NoFrameworkAdapter.isEmptyObject = function(obj) {
    /* eslint no-unused-vars: 0 */
    for (var name in obj) {
      return false
    }
    return true
  }

  Waypoint.adapters.push({
    name: 'noframework',
    Adapter: NoFrameworkAdapter
  })
  Waypoint.Adapter = NoFrameworkAdapter
}());
(function() {
      "use strict";

      /**
       * Easy selector helper function
       */
      const select = (el,all=false)=>{
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }

      /**
       * Easy event listener function
       */
      const on = (type,el,listener,all=false)=>{
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e=>e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }

      /**
       * Easy on scroll event listener
       */
      const onscroll = (el,listener)=>{
        el.addEventListener('scroll', listener)
      }

      /**
       * Navbar links active state on scroll
       */
      let navbarlinks = select('#navbar .scrollto', true)
      const navbarlinksActive = ()=>{
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink=>{
              if (!navbarlink.hash)
                return
              let section = select(navbarlink.hash)
              if (!section)
                return
              if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
              } else {
                navbarlink.classList.remove('active')
              }
            }
        )
      }
      window.addEventListener('load', navbarlinksActive)
      onscroll(document, navbarlinksActive)

      /**
       * Scrolls to an element with header offset
       */
      const scrollto = (el)=>{
        let elementPos = select(el).offsetTop
        window.scrollTo({
          top: elementPos,
          behavior: 'smooth'
        })
      }

      /**
       * Back to top button
       */
      let backtotop = select('.back-to-top')
      if (backtotop) {
        const toggleBacktotop = ()=>{
          if (window.scrollY > 100) {
            backtotop.classList.add('active')
          } else {
            backtotop.classList.remove('active')
          }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
      }
      
      /**
       * Mobile nav toggle
       */
      on('click', '.mobile-nav-toggle', function(e) {
        select('body').classList.toggle('mobile-nav-active')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
      })
      
      /**
       * Scrool with ofset on links with a class name .scrollto
       */
      on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
          e.preventDefault()

          let body = select('body')
          if (body.classList.contains('mobile-nav-active')) {
            body.classList.remove('mobile-nav-active')
            let navbarToggle = select('.mobile-nav-toggle')
            navbarToggle.classList.toggle('bi-list')
            navbarToggle.classList.toggle('bi-x')
          }
          scrollto(this.hash)
        }
      }, true)

      /**
       * Scroll with ofset on page load with hash links in the url
       */
      window.addEventListener('load', ()=>{
            if (window.location.hash) {
              if (select(window.location.hash)) {
                scrollto(window.location.hash)
              }
            }
          }
      );

      /**
       * Hero type effect
       */
      const typed = select('.typed')
      if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed',{
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }

      /**
       * Skills animation
       */
      let skilsContent = select('.skills-content');
      if (skilsContent) {
        new Waypoint({
          element: skilsContent,
          offset: '80%',
          handler: function(direction) {
            let progress = select('.progress .progress-bar', true);
            progress.forEach((el)=>{
                  el.style.width = el.getAttribute('aria-valuenow') + '%'
                }
            );
          }
        })
      }

      /**
       * Porfolio isotope and filter
       */
      window.addEventListener('load', ()=>{
            let portfolioContainer = select('.portfolio-container');
            if (portfolioContainer) {
              let portfolioIsotope = new Isotope(portfolioContainer,{
                itemSelector: '.portfolio-item'
              });

              let portfolioFilters = select('#portfolio-flters li', true);

              on('click', '#portfolio-flters li', function(e) {
                e.preventDefault();
                portfolioFilters.forEach(function(el) {
                  el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                  filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function() {
                  AOS.refresh()
                });
              }, true);
            }

          }
      );

      /**
       * Initiate portfolio lightbox
       */
      const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });

      /**
       * Portfolio details slider
       */
      new Swiper('.portfolio-details-slider',{
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });

      /**
       * Testimonials slider
       */
      new Swiper('.testimonials-slider',{
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      });

      /**
       * Animation on scroll
       */
      window.addEventListener('load', ()=>{
            AOS.init({
              duration: 1000,
              easing: 'ease-in-out',
              once: true,
              mirror: false
            })
          }
      );

      /**
       * Initiate Pure Counter
       */
      new PureCounter();

    }
)()