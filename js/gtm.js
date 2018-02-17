// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 4
(function(w, g) { w[g] = w[g] || {}; })(window, 'google_tag_manager');
(function() {

    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Hb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ib = function(a) { if (null == a) return String(a); var b = Hb.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        Jb = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        Na = function(a) {
            if (!a || "object" != Ib(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !Jb(a, "constructor") && !Jb(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || Jb(a, b)
        },
        W = function(a, b) {
            var c = b || ("array" == Ib(a) ? [] : {}),
                d;
            for (d in a)
                if (Jb(a, d)) { var e = a[d]; "array" == Ib(e) ? ("array" != Ib(c[d]) && (c[d] = []), c[d] = W(e, c[d])) : Na(e) ? (Na(c[d]) || (c[d] = {}), c[d] = W(e, c[d])) : c[d] = e }
            return c
        };
    var Ia = {},
        qb = null,
        Kb = Math.random();
    Ia.f = "GTM-5STFQV";
    var Lb = null,
        Da = null,
        jb = !1,
        Mb = "//www.googletagmanager.com/a?id=" + Ia.f + "&cv=4",
        Nb = {},
        Ob = {},
        kb = {};
    var Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, ad, bd, cd, dd, ed, fd, gd, hd, id, jd, kd, ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, zd, $a, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, ab, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, we, xe, ye, ze, Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie, Je, Ke, Le, Me, Ne, Oe, Pe, Qe, Re, Se, Te,
        Ue, Ve, We, Xe, Ye, Ze, $e, af, bf, cf, df, ef, ff, gf, hf, jf, kf, lf, mf, nf, of, pf, qf, rf, sf, tf, uf, vf, wf, xf, yf, zf, Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, If, Jf, Kf, Lf;
    (function() {
        var a = function(a) { return { toString: function() { return a } } };
        Pb = a("");
        Qb = a("");
        Rb = "";
        Sb = a("");
        Tb = a("");
        Ub = a("");
        Vb = a("");
        Wb = a("");
        Xb = a("");
        Yb = a("");
        Zb = a("");
        $b = a("");
        ac = a("");
        bc = a("");
        cc = a("");
        dc = a("");
        ec = a("");
        fc = a("");
        gc = a("");
        hc = a("");
        ic = a("");
        jc = a("");
        kc = a("");
        lc = a("");
        mc = a("");
        nc = a("");
        oc = a("");
        pc = a("");
        qc = a("");
        rc = a("");
        sc = a("");
        tc = a("");
        uc = a("");
        vc = a("");
        wc = a("");
        xc = a("");
        yc = a("0");
        zc = a("");
        Ac = a("");
        Bc = a("");
        Cc = a("");
        Dc = a("");
        Ec = a("");
        Fc = a("");
        Gc = a("");
        Hc = a("");
        Ic = a("");
        Jc = a("");
        Kc = a("");
        Lc = a("");
        Mc = a("");
        Nc = a("");
        Oc = a("");
        Pc = a("");
        Qc = a("");
        Rc = a("");
        Sc = a("");
        Tc = a("");
        Uc = a("");
        Vc = a("");
        Wc = a("");
        Xc = a("");
        Yc = a("");
        Zc = a("");
        $c = a("");
        ad = a("");
        bd = a("");
        cd = a("");
        dd = a("");
        ed = a("");
        fd = a("");
        gd = a("");
        hd = a("");
        id = a("");
        jd = a("");
        kd = a("");
        ld = a("");
        md = a("");
        nd = a("");
        od = a("");
        pd = a("");
        qd = a("");
        rd = a("");
        sd = a("");
        td = a("");
        ud = a("");
        vd = a("");
        wd = a("");
        xd = a("");
        yd = a("");
        zd = a("");
        $a = a("1");
        Ad = a("");
        Bd = a("4");
        Cd = a("5");
        Dd = a("");
        Ed = a("");
        Fd = a("");
        Gd = a("");
        Hd = a("");
        Id = a("");
        Jd = a("");
        Kd = a("");
        ab = a("2");
        Ld = a("");
        Md = a("");
        Nd = a("");
        Od = a("");
        Pd = a("");
        Qd = a("");
        Rd = a("");
        Sd = a("");
        Td = a("");
        Ud = a("");
        Vd = a("");
        Wd = a("");
        Xd = a("");
        Yd = a("");
        Zd = a("");
        $d = a("");
        ae = a("");
        be = a("");
        ce = a("");
        de = a("");
        ee = a("");
        fe = a("3");
        ge = a("");
        he = a("");
        ie = a("");
        je = a("");
        ke = a("");
        le = a("");
        me = a("");
        ne = a("");
        oe = a("");
        pe = a("");
        qe = a("");
        re = a("");
        se = a("");
        te = a("");
        ue = a("");
        ve = a("");
        we = a("");
        xe = a("");
        ye = a("");
        ze = a("");
        Ae = a("");
        Be = a("");
        Ce = a("");
        De = a("");
        Ee = a("");
        Fe = a("");
        Ge = a("");
        He = a("");
        Ie = a("");
        Je = a("");
        Ke = a("");
        Le = a("");
        Me = a("");
        Ne = a("");
        Oe = a("");
        Pe = a("");
        Qe = a("");
        Re = a("");
        Se = a("");
        Te = a("");
        Ue = a("");
        Ve = a("");
        We = a("");
        Xe = a("");
        Ye = a("");
        Ze =
            a("");
        $e = a("");
        af = a("");
        bf = a("");
        cf = a("");
        df = a("");
        ef = a("");
        ff = a("");
        gf = a("");
        hf = a("");
        jf = a("");
        kf = a("");
        lf = a("");
        mf = a("");
        nf = a("");
        of = a("");
        pf = a("");
        qf = a("");
        rf = a("");
        sf = a("");
        tf = a("");
        uf = a("");
        vf = "";
        wf = a("");
        xf = a("");
        yf = a("");
        zf = a("");
        Af = a("");
        Bf = a("");
        Cf = a("");
        Df = a("");
        Ef = a("");
        Ff = a("");
        Gf = a("");
        Hf =
            a("");
        If = a("");
        Jf = a("");
        Kf = a("");
        Lf = a("")
    })();
    var Gb = function(a, b) { W(a, b) },
        Mf = function() {},
        S = function(a) { return "function" == typeof a },
        bb = function(a) { return "[object Array]" == Object.prototype.toString.call(Object(a)) },
        Nf = function(a) { return "number" == Ib(a) && !isNaN(a) },
        Of = function(a) { return /^[0-9]+$/.test(a) },
        nb = function(a) { return "string" == Ib(a) },
        Pf = function(a, b) {
            if (Array.prototype.indexOf) { var c = a.indexOf(b); return "number" == typeof c ? c : -1 }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        Qf = function(a, b) {
            if (a && bb(a) && 0 != a.length)
                for (var c =
                        0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ca = function(a) { return a ? a.replace(/^\s+|\s+$/g, "") : "" },
        X = function(a) { return Math.round(Number(a)) || 0 },
        Pa = function(a) { return "false" == String(a).toLowerCase() ? !1 : !!a },
        Rf = function(a) {
            var b = [];
            if (bb(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        K = function() { return new Date },
        Ha = function(a, b) { if (!Nf(a) || !Nf(b) || a > b) a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a) },
        Sf = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Sf.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    Sf.prototype.get = function(a) { return this.values[this.prefix + a] };
    Sf.prototype.contains = function(a) { return void 0 !== this.get(a) };
    var Tf = function(a, b, c) {
            try {
                if (!a[$d]) return a[$a](a, b || Mf, c || Mf);
                c && c()
            } catch (d) {}
            return !1
        },
        Uf = function(a, b) {
            function c(b, c) {
                a.contains(b) || a.set(b, []);
                a.get(b).push(c)
            }
            for (var d = Ca(b).split("&"), e = 0; e < d.length; e++)
                if (d[e]) {
                    var f = d[e].indexOf("=");
                    0 > f ? c(d[e], "1") : c(d[e].substring(0, f), d[e].substring(f + 1))
                }
        },
        Vf = function(a) { var b = a ? a.length : 0; return 0 < b ? a[b - 1] : "" },
        Wf = function(a) { var b = Ia.f; return function() { return a(b) } },
        Xf = function(a) { for (var b = 0; b < a.length; b++) a[b]() },
        La = function() { return "gtm" + Yf() },
        Yf = function() {
            var a = qb.sequence || 0;
            qb.sequence = a + 1;
            return a
        },
        Oa = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        Zf = function(a) { return null !== a && void 0 !== a && void 0 !== a.length },
        $f = function(a, b) {
            0 == b ? a.fc = !0 : a.la = !0;
            var c = a.i;
            a.G && (a.G.wb[c] = b);
            Nb[c] && (Nb[c].state = b)
        },
        ag = function(a, b) { return "function" != typeof String.prototype.startsWith ? 0 === a.indexOf(b) : a.startsWith(b) },
        bg = function(a, b) { a.sort(function(a, d) { return b(a, d) ? -1 : b(d, a) ? 1 : 0 }) };
    var y = window,
        P = document,
        hg = navigator,
        ib = function(a, b) {
            var c = y[a];
            y[a] = void 0 === c ? b : c;
            return y[a]
        },
        ka = function(a, b, c, d) { return (d || "http:" != y.location.protocol ? a : b) + c },
        ig = function(a) {
            var b = P.getElementsByTagName("script")[0] || P.body || P.head;
            b.parentNode.insertBefore(a, b)
        },
        ub = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        u = function(a, b, c) {
            var d = P.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            ub(d, b);
            c && (d.onerror = c);
            ig(d);
            return d
        },
        Ya = function(a, b) {
            var c = P.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            ig(c);
            ub(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        E = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        wa = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        sa = function(a, b, c, d) {
            a.removeEventListener ?
                a.removeEventListener(b, c, !!d) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        w = function(a) { y.setTimeout(a, 0) },
        jg = !1,
        kg = [],
        lg = function(a) {
            if (!jg) {
                var b = P.createEventObject,
                    c = "complete" == P.readyState,
                    d = "interactive" == P.readyState;
                if (!a || "readystatechange" != a.type || c || !b && d) { jg = !0; for (var e = 0; e < kg.length; e++) w(kg[e]) }
                kg.push = function() { for (var a = 0; a < arguments.length; a++) w(arguments[a]); return 0 }
            }
        },
        mg = 0,
        ng = function() {
            if (!jg && 140 > mg) {
                mg++;
                try { P.documentElement.doScroll("left"), lg() } catch (a) {
                    y.setTimeout(ng,
                        50)
                }
            }
        },
        ha = function(a) {
            var b = P.getElementById(a);
            if (b && Aa(b, "id") != a)
                for (var c = 1; c < document.all[a].length; c++)
                    if (Aa(document.all[a][c], "id") == a) return document.all[a][c];
            return b
        },
        Aa = function(a, b) { return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null },
        og = function(a) { return a.target || a.srcElement || {} },
        Ba = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Ab = function(a) {
            var b =
                P.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        pg = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            var f = a;
            for (e = 0; f && e <= c; e++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        qg = !1,
        rg = [],
        sg = function() { if (!qg) { qg = !0; for (var a = 0; a < rg.length; a++) w(rg[a]) } },
        tg = function(a) {
            a = a || y;
            var b = a.location.href,
                c = b.indexOf("#");
            return 0 > c ? "" : b.substring(c + 1)
        },
        yb = function(a) {
            window.console &&
                window.console.log && window.console.log(a)
        };
    var ug = function(a, b) { for (var c = a.split("&"), d = 0; d < c.length; d++) { var e = c[d].split("="); if (decodeURIComponent(e[0]).replace(/\+/g, " ") == b) return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g, " ") } },
        V = function(a, b, c, d, e) {
            var f, g = (a.protocol.replace(":", "") || y.location.protocol.replace(":", "")).toLowerCase();
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = (a.hostname || y.location.hostname).split(":")[0].toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f =
                            f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(1 * (a.hostname ? a.port : y.location.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= Pf(d || [], k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = ug(f, e));
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Ea = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0,
                    c)
            }
            return b
        },
        U = function(a) {
            var b = P.createElement("a");
            a && (b.href = a);
            return b
        };
    var xa = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var ob = function(a) { return encodeURIComponent(a) },
        da = function(a) {
            var b = ["veinteractive.com", "ve-interactive.cn"];
            if (!a) return !1;
            var c = V(U(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        };
    var R = function(a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null },
        sb = function(a, b) { for (var c = [], d = 0; a && d < a.length; d++) a[d] && a[d].hasOwnProperty(b) && c.push(a[d][b]); return c },
        Ja = function(a, b) { W(a, b) },
        Qa = function(a) { return X(a) },
        Bb = function(a, b) { return Pf(a, b) };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var wg = {
        event: function(a) {
            var b = a[1];
            if (nb(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Na(a[2])) return;
                    c = a[2]
                }
                var d = c,
                    e = { event: b };
                d && (d = W(d, void 0), e.eventModel = d, e.eventCallback = d.eventCallback);
                return e
            }
        },
        set: function(a) {
            var b;
            2 == a.length && Na(a[1]) ? b = W(a[1], void 0) : 3 == a.length && nb(a[1]) && (b = {}, b[a[1]] = a[2]);
            if (b) return b._clear = !0, b
        },
        js: function(a) { if (2 == a.length && a[1].getTime) return { event: "gtm.js", "gtm.start": a[1].getTime() } }
    };
    var xg = new Sf,
        yg = {},
        Ag = {
            set: function(a, b) { W(zg(a, b), yg) },
            get: function(a) { return Z(a, 2) },
            reset: function() {
                xg = new Sf;
                yg = {}
            }
        },
        Z = function(a, b) { return 2 != b ? xg.get(a) : Bg(a) },
        Bg = function(a) {
            for (var b = a.split("."), c = 0, d = yg.eventModel; void 0 !== d && c < b.length; c++) {
                if (null === d) return !1;
                d = d[b[c]]
            }
            if (void 0 !== d || 1 < c) return d;
            var e = yg;
            for (c = 0; c < b.length; c++) {
                if (null === e) return !1;
                if (void 0 === e[b[c]]) return;
                e = e[b[c]]
            }
            return e
        },
        Cg = function(a, b) {
            xg.set(a, b);
            W(zg(a, b), yg)
        },
        zg = function(a, b) {
            for (var c = {}, d = c, e = a.split("."),
                    f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        };
    var Dg = !1,
        Eg = !1;
    var Fg = Math.random(),
        Gg = "0.050000" > Fg;
    var Hg = function(a, b) {
            if (Gg) {
                var c = Mb,
                    d = function(a, b) { b && (c += a + encodeURIComponent(b)) };
                d("&v=", "t");
                d("&n=", a);
                d("&s=", b && b.state);
                d("&h=", b && b.hideLatency);
                d("&g=", b && b.gaLatency);
                d("&p=", b && b.loadBy);
                d("&o=", b && b.timeout);
                d("&l=", K().getTime() - X(Lb));
                c += "&sr=0.050000";
                d("&ps=", Fg);
                d("&cb=", Ha());
                E(c)
            }
        },
        Ig = Mf,
        Jg = function() {
            var a = !1;
        };
    var Lg = function(a) { var b = qb.zones; return b ? b.checkState(Ia.f, a) : Kg },
        Kg = { active: !0, isWhitelisted: function() { return !0 } };
    var Ng = Mf,
        Og = [],
        Pg = !1,
        Qg = function(a) { return y["dataLayer"].push(a) },
        Rg = function(a) {
            var b = !1;
            return function() {
                !b && S(a) && w(Wf(a));
                b = !0
            }
        },
        $g = function() {
            for (var a = !1; !Pg && 0 < Og.length;) {
                Pg = !0;
                delete yg.eventModel;
                var b = Og.shift();
                if (S(b)) try { b.call(Ag) } catch (Ma) {} else if (bb(b)) a: {
                        var c = b;
                        if (nb(c[0])) {
                            for (var d = c[0].split("."), e = d.pop(), f = c.slice(1), g = yg, h = 0; h < d.length; h++) {
                                if (void 0 === g[d[h]]) break a;
                                g = g[d[h]]
                            }
                            try { g[e].apply(g, f) } catch (Ma) {}
                        }
                    }
                    else {
                        var k = b;
                        if (k && ("[object Arguments]" == Object.prototype.toString.call(k) ||
                                Object.prototype.hasOwnProperty.call(k, "callee"))) {
                            a: {
                                var l = b;
                                if (l.length && nb(l[0])) { var m = wg[l[0]]; if (m) { b = m(l); break a } }
                                b = void 0
                            }
                            if (!b) { Pg = !1; continue }
                        }
                        var n = void 0,
                            p = void 0,
                            r = b,
                            t = r._clear;
                        for (p in r) r.hasOwnProperty(p) && "_clear" !== p && (t && Cg(p, void 0), Cg(p, r[p]));
                        var v = !1,
                            A = r.event;
                        if (A) {
                            r.hasOwnProperty("gtm.uniqueEventId") || (r["gtm.uniqueEventId"] = Yf(), Cg("gtm.uniqueEventId", r["gtm.uniqueEventId"]));
                            n = r["gtm.uniqueEventId"];
                            Da = A;
                            var J = Lg(n);
                            if (J.active) {
                                var I = Rg(r.eventCallback),
                                    F = r.eventTimeout;
                                F && y.setTimeout(I, Number(F));
                                v = Ng(n, A, J.isWhitelisted, I, r.eventReporter)
                            }
                        }
                        Lb || (Lb = r["gtm.start"]) && Ig();
                        var L, B = r,
                            D = n,
                            z = A,
                            C = yg;
                        Da = null;
                        a = v || a
                    }
                Pg = !1
            }
            return !a
        },
        ah = function() {
            var a = $g();
            try {
                var b = y["dataLayer"].hide;
                if (b && void 0 !== b[Ia.f] && b.end) {
                    b[Ia.f] = !1;
                    var c = !0,
                        d;
                    for (d in b)
                        if (b.hasOwnProperty(d) && !0 === b[d]) { c = !1; break }
                    c && (b.end(), b.end = null)
                }
            } catch (e) {}
            return a
        },
        bh = function() {
            var a = ib("dataLayer", []),
                b = ib("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            kg.push(function() { b.gtmDom || (b.gtmDom = !0, a.push({ event: "gtm.dom" })) });
            rg.push(function() {
                b.gtmLoad ||
                    (b.gtmLoad = !0, a.push({ event: "gtm.load" }))
            });
            var c = a.push;
            a.push = function() {
                var b = [].slice.call(arguments, 0);
                c.apply(a, b);
                for (Og.push.apply(Og, b); 300 < this.length;) this.shift();
                return $g()
            };
            Og.push.apply(Og, a.slice(0));
            w(ah)
        };
    var ch, dh, eh;
    var Fa = function(a, b) {
            var c = { "gtm.element": a, "gtm.elementClasses": a.className, "gtm.elementId": a["for"] || Aa(a, "id") || "", "gtm.elementTarget": a.formTarget || a.target || "" };
            if (b && gh)
                if ("LINK_CLICK" == b) c["gtm.elementUrl"] = a.href;
                else if ("FORM_SUBMIT" == b) {
                var d = a.action;
                d && d.tagName && (d = a.cloneNode(!1).action);
                c["gtm.elementUrl"] = d
            }
            c.hasOwnProperty("gtm.elementUrl") || (c["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "");
            return c
        },
        vh =
        function(a) {
            qb.hasOwnProperty("autoEventsSettings") || (qb.autoEventsSettings = {});
            var b = qb.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        pa = function(a, b, c) { vh(a)[b] = c },
        hb = function(a, b, c, d) {
            var e = vh(a),
                f = Oa(e, b, d);
            e[b] = c(f)
        },
        ua = function(a, b, c) { var d = vh(a); return Oa(d, b, c) },
        ra = function(a) { return !!ua(a, "init", !1) },
        va = function(a) { pa(a, "init", !0) },
        wh = function() {};
    var xh = /(^|\.)doubleclick\.net$/i,
        yh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Ga = function(a, b, c) {
            for (var d = String(b || P.cookie).split(";"), e = [], f = 0; f < d.length; f++) {
                var g = d[f].split("="),
                    h = Ca(g[0]);
                if (h && h == a) {
                    var k = Ca(g.slice(1).join("="));
                    k && !1 !== c && (k = decodeURIComponent(k));
                    e.push(k)
                }
            }
            return e
        },
        Ah = function(a, b, c, d, e, f) {
            f && (b = encodeURIComponent(b));
            var g = a + "=" + b + "; ";
            c && (g += "path=" + c + "; ");
            e && (g += "expires=" + e.toGMTString() + "; ");
            var h;
            h = "auto" == d ? zh() : [d || "none"];
            for (var k = 0; k < h.length; k++) {
                var l =
                    g,
                    m = h[k],
                    n = c;
                if (xh.test(y.location.hostname) || "/" == n && yh.test(m)) break;
                "none" != h[k] && (l += "domain=" + h[k] + ";");
                var p = P.cookie;
                P.cookie = l;
                if (p != P.cookie || 0 <= Pf(Ga(a), b)) return !0
            }
            return !1
        },
        Bh = function(a) {
            if ("none" == a) return 0;
            0 == a.indexOf(".") && (a = a.substr(1));
            return a.split(".").length
        },
        Ch = function(a) {
            var b = a;
            b ? (1 < b.length && b.lastIndexOf("/") == b.length - 1 && (b = b.substr(0, b.length - 1)), 0 != b.indexOf("/") && (b = "/" + b), a = b) : a = "/";
            return "/" == a ? 1 : a.split("/").length
        },
        zh = function() {
            var a = V(y.location, "host", !0).split(".");
            if (4 == a.length && /^[0-9]*$/.exec(a[3])) return ["none"];
            for (var b = [], c = a.length - 2; 0 <= c; c--) b.push(a.slice(c).join("."));
            b.push("none");
            return b
        };
    var fa = function(a) { var b = P; return Dh ? b.querySelectorAll(a) : null },
        Eh = !1;
    if (P.querySelectorAll) try {
        var Fh = P.querySelectorAll(":root");
        Fh && 1 == Fh.length && Fh[0] == P.documentElement && (Eh = !0)
    } catch (a) {}
    var Dh = Eh;
    var Gh = function(a) {
        for (var b = [], c = P.cookie.split(";"), d = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push(f[1])
        }
        var g = [];
        if (!b || 0 == b.length) return g;
        for (var h = 0; h < b.length; h++) {
            var k = b[h].split(".");
            3 == k.length && "GCL" == k[0] && k[1] && g.push(k[2])
        }
        return g
    };
    var Hh = /^\w+$/,
        Ih = /^[\w-]+$/,
        Jh = /^\d+\.fls\.doubleclick\.net$/;

    function Kh(a) { return a && "string" == typeof a && a.match(Hh) ? a : "_gcl" }

    function Lh(a) { if (a) { if ("string" == typeof a) { var b = Kh(a); return { na: b, ka: b } } if (a && "object" == typeof a) return { na: Kh(a.dc), ka: Kh(a.aw) } } return { na: "_gcl", ka: "_gcl" } }

    function Mh(a) {
        var b = U(y.location.href),
            c = V(b, "host", !1);
        if (c && c.match(Jh)) { var d = V(b, "path").split(a + "="); if (1 < d.length) return d[1].split(";")[0].split("?")[0] }
    }

    function Nh(a) { return a.filter(function(a) { return Ih.test(a) }) }
    var Ph = function(a) { var b = Mh("gclaw"); if (b) return b.split("."); var c = Lh(a); if ("_gcl" == c.ka) { var d = Oh(); if (d && (null == d.L || "aw.ds" == d.L)) return [d.qa] } return Nh(Gh(c.ka + "_aw")) },
        Qh = function(a) { var b = Mh("gcldc"); if (b) return b.split("."); var c = Lh(a); if ("_gcl" == c.na) { var d = Oh(); if (d && ("ds" == d.L || "aw.ds" == d.L)) return [d.qa] } return Nh(Gh(c.na + "_dc")) };

    function Oh() {
        var a = U(y.location.href),
            b = V(a, "query", !1, void 0, "gclid"),
            c = V(a, "query", !1, void 0, "gclsrc");
        if (!b || !c) {
            var d = V(a, "fragment");
            b = b || ug(d, "gclid");
            c = c || ug(d, "gclsrc")
        }
        return void 0 !== b && b.match(Ih) ? { qa: b, L: c } : null
    }
    var Za = function(a, b, c) {
            var d = Lh(a);
            c = c || "auto";
            b = b || "/";
            var e = Oh();
            if (null !== e) {
                var f = (new Date).getTime(),
                    g = new Date(f + 7776E6),
                    h = ["GCL", Math.round(f / 1E3), e.qa].join(".");
                e.L && "aw.ds" != e.L || Ah(d.ka + "_aw", h, b, c, g, !0);
                "aw.ds" != e.L && "ds" != e.L || Ah(d.na + "_dc", h, b, c, g, !0)
            }
        },
        Rh = function() {
            var a = Mh("gac");
            if (a) return decodeURIComponent(a);
            for (var b = [], c = P.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
                var f = c[e].match(d);
                f && b.push({ yb: f[1], value: f[2] })
            }
            var g = {};
            if (b && b.length)
                for (var h =
                        0; h < b.length; h++) { var k = b[h].value.split("."); "1" == k[0] && 3 == k.length && k[1] && (g[b[h].yb] || (g[b[h].yb] = []), g[b[h].yb].push({ timestamp: k[1], qa: k[2] })) }
            var l = [],
                m;
            for (m in g)
                if (g.hasOwnProperty(m)) {
                    for (var n = [], p = g[m], r = 0; r < p.length; r++) n.push(p[r].qa);
                    n = Nh(n);
                    n.length && l.push(m + ":" + n.join(","))
                }
            return l.join(";")
        };
    var Sh;
    a: { Sh = "G" }
    var Th = { "": "n", UA: "u", AW: "a", DC: "d", GTM: Sh },
        za = function(a) {
            var b = Ia.f.split("-"),
                c = b[0].toUpperCase();
            return (Th[c] || "i") + "26" + (a && "GTM" === c ? b[1] : "")
        };
    var lb = new String("undefined"),
        Xh = function(a) { this.resolve = function(b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === lb ? b : a[d]); return c.join("") } };
    Xh.prototype.toString = function() { return this.resolve("undefined") };
    Xh.prototype.valueOf = Xh.prototype.toString;
    var Yh = {},
        Zh = function(a, b) {
            var c = Yf();
            Yh[c] = [a, b];
            return c
        },
        $h = function(a) {
            var b = a ? 0 : 1;
            return function(a) {
                var c = Yh[a];
                if (c && S(c[b])) c[b]();
                Yh[a] = void 0
            }
        };
    var ai = {},
        bi, ci;
    var li = function() {};
    var ti = "www.googletagmanager.com/gtm.js";
    var ui = ti,
        cb = function(a, b, c, d) { wa(a, b, c, d) },
        qa = function(a, b) { return y.setTimeout(a, b) },
        ba = function(a, b, c) { u(a, b, c) },
        eb = {},
        Ta = function(a, b, c) {
            var d = eb[a];
            if (void 0 === d) {
                var e = function(a, b) { return function() { a.status = b; for (var c = 2 == b ? a.ub : a.ab, d = 0; d < c.length; d++) y.setTimeout(c[d], 0) } };
                d = { status: 1, ub: [], ab: [], bc: void 0 };
                d.qd = u(a, e(d, 2), e(d, 3));
                eb[a] = d
            }
            0 === d.status && (d.bc(), d.status = 2);
            2 === d.status ? b && b() : 3 === d.status ? c && c() : 1 === d.status && (b && d.ub.push(b), c && d.ab.push(c))
        },
        vi = function(a, b) {
            eb[a] = {
                status: 0,
                ub: [],
                ab: [],
                bc: b,
                qd: null
            }
        },
        ca = function() { return y.location.href },
        db = function(a) { return V(U(a), "fragment") },
        T = function(a, b) { return Z(a, b || 2) },
        na = function(a, b, c) { b && (a.eventCallback = b, c && (a.eventTimeout = c)); return Qg(a) },
        aa = function(a, b) { y[a] = b },
        q = function(a, b, c) {
            var d = y;
            b && (void 0 === d[a] || c && !d[a]) && (d[a] = b);
            return d[a]
        },
        fb = function(a, b) { return pg(a, b, 100) },
        x = function(a, b, c, d) {
            var e = !d && "http:" == y.location.protocol;
            e && (e = 2 !== pb());
            return (e ? b : a) + c
        },
        vb = function(a) { jg ? a() : kg.push(a) };
    var ia = function(a) { var b = 0; return b },
        Db = function(a) {},
        ja = function(a) { var b = !1; return b },
        gb = function(a, b) {
            return Qf(a,
                b)
        },
        oa = function(a, b, c, d) { hb(a, b, c, d) },
        ta = function(a, b, c) { return ua(a, b, c) };
    var Fb = void 0,
        Wa = function(a) {
            if (!Fb) {
                var b = function() {
                    var a = P.body;
                    if (a)
                        if (q("MutationObserver"))(new MutationObserver(function() { for (var a = 0; a < Fb.length; a++) w(Fb[a]) })).observe(a, { childList: !0, subtree: !0 });
                        else {
                            var b = !1;
                            cb(a, "DOMNodeInserted", function() { b || (b = !0, w(function() { b = !1; for (var a = 0; a < Fb.length; a++) w(Fb[a]) })) })
                        }
                };
                Fb = [];
                P.body ? b() : w(b)
            }
            Fb.push(a)
        },
        pb = function() {
            var a = ui;
            a = a.toLowerCase();
            for (var b = "https://" + a, c = "http://" + a, d = 1, e = P.getElementsByTagName("script"), f = 0; f < e.length && 100 > f; f++) {
                var g =
                    e[f].src;
                if (g) {
                    g = g.toLowerCase();
                    if (ag(g, c)) return 3;
                    1 === d && ag(g, b) && (d = 2)
                }
            }
            return d
        };
    var xb = function(a, b, c) { a instanceof Xh && (a = a.resolve(Zh(b, c)), b = Mf); return { fb: a, w: b } };
    var wi = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        xi = { customPixels: ["nonGooglePixels"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        yi = {
            customPixels: ["customScripts", "html"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels",
                "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"
            ],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        zi = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c },
        Tg = function(a) {
            var b = Z("gtm.whitelist");
            var c = b && zi(Rf(b), xi),
                d = Z("gtm.blacklist") || Z("tagTypeBlacklist") || [];
            wi.test(y.location && y.location.hostname) && (d = Rf(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            var e = d && zi(Rf(d), yi),
                f = {};
            return function(g) {
                var h = g && g[$a];
                if (!h) return !0;
                if (void 0 !== f[h.a]) return f[h.a];
                var k = a(h.a);
                if (b) {
                    var l;
                    if (l = k) a: {
                        if (0 > Pf(c, h.a))
                            if (h.b && 0 < h.b.length)
                                for (var m = 0; m < h.b.length; m++) {
                                    if (0 >
                                        Pf(c, h.b[m])) { l = !1; break a }
                                } else { l = !1; break a }
                        l = !0
                    }
                    k = l
                }
                var n = !1;
                if (d) {
                    var p;
                    if (!(p = 0 <= Pf(e, h.a))) a: {
                        for (var r = h.b || [], t = new Sf, v = 0; v < e.length; v++) t.set(e[v], !0);
                        for (v = 0; v < r.length; v++)
                            if (t.get(r[v])) { p = !0; break a }
                        p = !1
                    }
                    n = p
                }
                return f[h.a] = !k || n
            }
        };
    var Ai = void 0,
        Bi = "",
        Ci = 0,
        Di = void 0,
        _et = function(a) {
            var b, c = Z("gtm.element"),
                d = Z("event"),
                e = Number(K());
            Ai === c && Bi === d && Ci > e - 250 ? b = Di : (Di = b = c ? Ba(c) : "", Ai = c, Bi = d);
            Ci = e;
            return b ? b : a[Yc]
        };
    _et.a = "et";
    _et.b = ["google"];
    var _eu = function(a) {
        var b = String(Z("gtm.elementUrl") || a[Yc] || ""),
            c = U(b);
        return b
    };
    _eu.a = "eu";
    _eu.b = ["google"];
    var _e = function() { return Da };
    _e.a = "e";
    _e.b = ["google"];
    var Ei = function(a, b) {
        this.h = a;
        this.s = b
    };
    Ei.prototype.toString = function() {
        var a = "" + this.h;
        1 < this.s && (a = a + "-" + this.s);
        return a
    };
    var Fi = function(a, b) {
        this.tb = a;
        this.Ka = b
    };
    Fi.prototype.toString = function() { return "" + this.Ka + "." + this.tb };
    var Ii = function(a, b) {
            var c = new Gi(null, a, b);
            Hi(c);
            return c
        },
        Gi = function(a, b, c) {
            this.Nb = Math.floor(K().getTime() / 864E5);
            this.Ia = b || "auto";
            this.ta = c || "/";
            var d = Bh(this.Ia),
                e = Ch(this.ta);
            this.N = a || new Ei(d, e);
            this.m = [];
            this.I = new Sf
        },
        Ki = function(a, b, c) { b && ("" == c.tb ? Ji(a, b) : (a.I.contains(b) || a.m.push(b), a.I.set(b, c))) },
        Li = function(a, b) { for (var c = 0; c < b.length; c++) Ki(a, b[c][0], b[c][1]) },
        Ji = function(a, b) {
            var c = Pf(a.m, b);
            0 <= c && a.m.splice(c, 1);
            a.I.set(b, void 0)
        },
        Mi = function(a) {
            for (var b = [], c = 0; c < a.m.length; c++) {
                var d =
                    a.m[c];
                b.push([d, a.I.get(d)])
            }
            return b
        },
        Ni = function(a) { for (var b = 0, c = 0; c < a.m.length; c++) b = Math.max(b, a.I.get(a.m[c]).Ka); return 864E5 * b };
    Gi.prototype.toString = function() {
        if (0 == this.m.length) return "";
        for (var a = [], b = 0; b < this.m.length; b++) {
            var c = this.m[b];
            a.push("" + c + "." + this.I.get(c).toString())
        }
        return "GAX1." + this.N.toString() + "." + a.join("!")
    };
    var Oi = function(a, b) {
            for (var c = new Date, d = Ch(a.ta), e = [], f = 0; f < a.m.length; f++) {
                var g = a.m[f];
                a.I.get(g).Ka < a.Nb && e.push(g)
            }
            for (f = 0; f < e.length; f++) Ji(a, e[f]);
            if (a.m.length > (b || 10)) return !1;
            c.setTime(Ni(a));
            if ("auto" != a.Ia) return Ah("_gaexp", a.toString(), a.ta, a.Ia, c);
            for (var h = zh(), k = 0; k < h.length; k++)
                if ("none" != h[k] && (a.N = new Ei(Bh(h[k]), d), Ah("_gaexp", a.toString(), a.ta, h[k], c))) return !0;
            return !1
        },
        Hi = function(a) {
            for (var b = a.N.h, c = a.N.s, d = Ga("_gaexp"), e = [], f = 0; f < d.length; f++) {
                var g = Pi(a, d[f]);
                g && e.push(g)
            }
            bg(e,
                function(a, d) {
                    var e = a.N,
                        f = d.N;
                    return e.h == f.h && e.s == f.s ? !1 : e.h == b && e.s == c ? !0 : f.h == b && f.s == c ? !1 : e.h == b ? f.h != b || e.s < f.s : f.h == b ? !1 : e.s == c ? f.h != b && (f.s != c || e.h < f.h) : f.s == c ? !1 : e.h < f.h || e.h == f.h && e.s < f.s
                });
            a.N = 0 < e.length ? e[0].N : new Ei(b, c);
            for (f = e.length - 1; 0 <= f; f--) Li(a, Mi(e[f]))
        },
        Pi = function(a, b) {
            var c = b.match(/GAX1\.([^.]+).(.*)/);
            if (c) {
                var d;
                a: {
                    var e = (c[1] || "").split("-");
                    if (!(0 == e.length || 2 < e.length)) {
                        var f = Ca(e[0]);
                        if (0 != f.length) {
                            var g = 2 == e.length ? Ca(e[1]) : "1";
                            if (Of(f) && Of(g)) {
                                d = new Ei(X(f), X(g));
                                break a
                            }
                        }
                    }
                    d = void 0
                }
                if (d) {
                    for (var h = new Gi(d, a.Ia, a.ta), k = (c[2] || "").split("!"), l = 0; l < k.length; l++) {
                        var m = k[l].split(".");
                        if (3 == m.length) {
                            if (!Of(m[1])) return;
                            Ki(h, m[0], new Fi(m[2], X(m[1])))
                        }
                    }
                    return h
                }
            }
        };
    var _v = function(a) { var b = Z(a[fe].replace(/\\\./g, "."), a[Qc]); return void 0 !== b ? b : a[Yc] };
    _v.a = "v";
    _v.b = ["google"];
    var _f = function(a) { var b = String(Z("gtm.referrer") || P.referrer); if (!b) return b; var c = U(b); return b };
    _f.a = "f";
    _f.b = ["google"];
    var Ti = function(a) {
            var b = y.location,
                c;
            (c = a[Nc] ? a[Nc] : Z("gtm.url")) && (b = U(String(c)));
            var d = b.href,
                e = d.indexOf("#"),
                f = 0 > e ? d : d.substr(0, e);
            a[yc] && (f = V(b, a[yc], a[Se], a[Xc], a[Fe]));
            return f
        },
        _u = Ti;
    _u.a = "u";
    _u.b = ["google"];
    var _eq = function(a) { return String(a[$b]) == String(a[ac]) };
    _eq.a = "eq";
    _eq.b = ["google"];
    var qj = function(a, b, c, d, e) {
            var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
            e && (f = e + "{" + f + "}");
            var g = document;
            if (g.createStyleSheet) {
                var h = nj(g),
                    k = h.rules.length;
                h.insertRule(f, k);
                return function() {
                    h.deleteRule ? h.deleteRule(k) : h.removeRule(k);
                    h.insertRule("x {}", k)
                }
            }
            var l = oj(f, g);
            pj(l, g);
            var m = l.parentNode;
            return function() { m.removeChild(l) }
        },
        rj = null,
        nj = function(a) {
            if (rj) return rj;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var c = a.styleSheets[b],
                    d = c.ownerNode;
                if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return rj =
                    c
            }
            0 == a.styleSheets.length && a.createStyleSheet();
            return rj = a.styleSheets[0]
        },
        oj = function(a, b) {
            var c = (b || document).createElement("style");
            void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
            return c
        },
        pj = function(a, b) {
            var c = b || document,
                d = c.getElementsByTagName("head")[0];
            d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
            d.appendChild(a)
        };
    var yj = {},
        zj = void 0,
        Aj = function(a) {
            var b = yj[a];
            b || (b = { id: a, A: [], pa: 0, zb: null, ib: void 0, ob: !1 }, yj[a] = b);
            zj = b
        },
        Cj = function(a, b, c, d) {
            var e = zj;
            if (!Dh || !e) return !1;
            var f = { id: e.id + ":" + e.A.length, tc: b, ea: [], oc: c, O: a, Wa: 0, Sa: d || null, Mb: 0, oa: !1 };
            e.A.push(f);
            null === a ? (f.oa = !0, b(null)) : Bj(e);
            return !0
        },
        Dj = function(a) {
            var b = qj(a, "visibility", "hidden", !0);
            return function() {
                S(b) && b.apply();
                b = null
            }
        },
        Ej = function(a, b, c, d) {
            var e = b;
            if (!jg) {
                var f = Dj(a.F);
                kg.push(f);
                e = function(a, c) {
                    var d = b(a, c);
                    f();
                    return d
                }
            }
            return Cj(a,
                e, c, d)
        },
        Bj = function(a) {
            if (!a.ob) {
                for (var b = a.pa; b < a.A.length; b++) {
                    var c = a.A[b],
                        d = b == a.pa;
                    if (!c.oa && !Fj(d, c)) break;
                    c.oa && d && a.pa++
                }
                a.A.length > a.pa ? (a.zb || (a.zb = y.setTimeout(function() {
                    a.zb = null;
                    Bj(a)
                }, 80)), jg || a.ib || (a.ib = function() { w(function() { Bj(a) }) }, wa(P, "DOMContentLoaded", a.ib))) : Gj(a)
            }
        },
        Gj = function(a) {
            for (var b = 0; b < a.A.length; b++) {
                var c = a.A[b];
                if (c.O)
                    for (var d = fa(c.O.F) || [], e = 0; e < d.length; e++) {
                        var f = d[e];
                        f.gtmProgressiveApplied && f.gtmProgressiveApplied[c.id] || (Hj(f, c.id), c.ea.push(Ij(f, c.id)))
                    }
            }
        },
        Fj = function(a, b) {
            var c = [];
            if (b.O) {
                var d = Jj(b.O, b.id),
                    e = null;
                b.Sa && (e = Jj(b.Sa, b.id + "-t"));
                for (var f = 0; f < d.length; f++) {
                    var g = d[f],
                        h;
                    if (null != e && (h = e.length > f ? e[f] : null, !h && !jg && (null === b.Sa.v || b.Mb + c.length < b.Sa.v))) break;
                    c.push({ element: g, td: h })
                }
            }
            if (!jg && b.oc && (!a || null == b.O.v || b.O.v != b.Wa + c.length)) return !1;
            for (var k = 0; k < c.length; k++) {
                var l = c[k].element,
                    m = c[k].td,
                    n;
                b.Wa++;
                Hj(l, b.id);
                m && (b.Mb++, n = b.id + "-t", Hj(m, n));
                var p = b.tc(l, m);
                S(p) && b.ea.push(p);
                b.ea.push(Ij(l, b.id));
                m && n && b.ea.push(Ij(m, n))
            }
            if (b.O.v &&
                b.O.v == b.Wa || jg) b.oa = !0;
            return !0
        },
        Hj = function(a, b) {
            a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
            a.gtmProgressiveApplied[b] = !0
        },
        Ij = function(a, b) { return function() { a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b] } },
        Jj = function(a, b) {
            for (var c = fa(a.F) || [], d = [], e = 0; e < c.length; e++) {
                var f = c[e];
                if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                    if (a.M && !Kj(f)) break;
                    d.push(f)
                }
            }
            return d
        },
        Kj = function(a) {
            if (jg) return !0;
            for (; a;) {
                if (a.nextSibling) return !0;
                a = a.parentNode
            }
            return !1
        };
    var Ck = function(a) {
        if (!a) return !1;
        if (a[Zb] && bb(a[ac])) {
            for (var b = a[ac], c = 0; c < b.length; c++)
                if (a[ac] = b[c], Tf(a)) return !0;
            return !1
        }
        return Tf(a)
    };
    var Dk = 33,
        Ek = [],
        Fk = [],
        Ug = [],
        Gk = new Sf,
        Hk = [],
        Ik = [],
        sh = [],
        th = [],
        Jk = function() { this.U = [] };
    Jk.prototype.set = function(a, b) { this.U.push([a, b]); return this };
    Jk.prototype.resolve = function(a, b) {
        for (var c = {}, d = 0; d < this.U.length; d++) {
            var e = Xg(this.U[d][0], a, b),
                f = Xg(this.U[d][1], a, b);
            c[e] = f
        }
        return c
    };
    var Kk = function(a) { this.index = a };
    Kk.prototype.resolve = function(a, b) {
        var c = Ug[this.index];
        if (c && !b(c)) {
            var d = c[ab];
            if (a) {
                if (a.get(d)) return;
                a.set(d, !0)
            }
            c = Xg(c, a, b);
            a && a.set(d, !1);
            return Tf(c)
        }
    };
    var _M = function(a) { return new Kk(a) },
        Lk = function(a) {
            this.resolve = function(b, c) {
                for (var d = [], e = !1, f = 0; f < a.length; f++) {
                    var g = Xg(Ek[a[f]], b, c);
                    g === lb && (e = !0);
                    d.push(g)
                }
                return e ? new Xh(d) : d.join("")
            }
        },
        _T = function(a) { return new Lk(arguments) },
        Mk = function(a) {
            function b(b) {
                for (var c = 1; c < a.length; c++)
                    if (a[c] == b) return !0;
                return !1
            }
            this.resolve =
                function(c, d) {
                    var e = Xg(a[0], c, d);
                    if (a[0] instanceof Kk && b(8) && b(16)) {
                        if (e === lb) return e;
                        var f = La();
                        Gk.set(f, e);
                        return 'google_tag_manager["' + Ia.f + "\"].macro('" + f + "')"
                    }
                    e = String(e);
                    for (var g = 1; g < a.length; g++) e = hk[a[g]](e);
                    return e
                }
        },
        _E = function(a, b) { return new Mk(arguments) },
        Nk = function(a, b) {
            this.D = a;
            this.xa = b
        },
        _R = function(a, b) { return new Nk(a, b) };
    var Xg = function(a, b, c) {
            var d = a;
            if (a instanceof Kk || a instanceof Jk || a instanceof Lk || a instanceof Mk) return a.resolve(b, c);
            if (!(a instanceof Nk))
                if (bb(a)) { d = []; for (var e = 0; e < a.length; e++) d[e] = Xg(a[e], b, c) } else if (a && "object" == typeof a) { d = {}; for (var f in a) a.hasOwnProperty(f) && (d[f] = Xg(a[f], b, c)) }
            return d
        },
        Qk = function() {
            for (var a = [_u, 'url', 'url hostname', 'host', 'url path', 'path', _f, 'referrer', _e, 'event', _v, 'element', 'gtm.element', 'element classes', 'gtm.elementClasses', 'element id', 'gtm.elementId', 'element target', 'gtm.elementTarget', _et, 'element text', 'element url', 'gtm.elementUrl', 'history new url fragment', 'gtm.newUrlFragment', 'history old url fragment', 'gtm.oldUrlFragment', 'history new state', 'gtm.newHistoryState', 'history old state', 'gtm.oldHistoryState', 'history change source', 'gtm.historyChangeSource'], b = [], c = 0; c < a.length; c++) b[c] =
                Pk(c, a);
            return b
        },
        Pk = function(a, b) {
            var c = b[a],
                d = c;
            if (c instanceof Kk || c instanceof Mk || c instanceof Lk || c instanceof Nk) d = c;
            else if (bb(c)) { d = []; for (var e = 0; e < c.length; e++) d[e] = Pk(c[e], b) } else if ("object" == typeof c) { d = new Jk; for (var f in c) c.hasOwnProperty(f) && d.set(b[f], Pk(c[f], b)) }
            return d
        },
        Sk = function(a, b) {
            for (var c = b ? b.split(",") : [], d = 0; d < c.length; d++) {
                var e = c[d] = c[d].split(":");
                0 == a && (e[1] =
                    Ek[e[1]]);
                if (1 == a) {
                    var f = Rk(e[0]);
                    e = c[d] = {};
                    for (var g = 0; g < f.length; g++) {
                        var h = Fk[f[g]];
                        e[h[0]] = h[1]
                    }
                }
                if (2 == a)
                    for (g = 0; 4 > g; g++) e[g] = Rk(e[g]);
                3 == a && (c[d] = Ek[e[0]]);
                if (4 == a)
                    for (g = 0; 2 > g; g++)
                        if (e[g]) { e[g] = e[g].split("."); for (var k = 0; k < e[g].length; k++) e[g][k] = Ek[e[g][k]] } else e[g] = [];
                5 == a && (c[d] = e[0])
            }
            return c
        },
        Rk = function(a) {
            var b = [];
            if (!a) return b;
            for (var c = 0, d = 0; d < a.length && c < Dk; c += 6, d++) {
                var e = a && a.charCodeAt(d) || 65;
                if (65 != e) {
                    var f;
                    f = 65 < e && 90 >= e ? e - 65 : 97 <= e && 122 >= e ? e - 97 + 26 : 95 == e ? 63 : 48 <= e ? e - 48 + 52 : 62;
                    1 &
                        f && b.push(c);
                    2 & f && b.push(c + 1);
                    4 & f && b.push(c + 2);
                    8 & f && b.push(c + 3);
                    16 & f && b.push(c + 4);
                    32 & f && b.push(c + 5)
                }
            }
            return b
        },
        Tk = function(a, b, c) { a.push.apply(a, Sk(b, c)) };
    var Uk;
    var Wg = function(a, b) {
            if (null === a || void 0 === a) return a;
            if (b.propertyRenamingRequired) {
                var c = {},
                    d;
                for (d in a)
                    if (a.hasOwnProperty(d)) {
                        var e = Xk[d];
                        e && 0 == e.indexOf("vtp_") && (c[e] = a[d])
                    }
                c.__metadata = b;
                return c
            }
            return a
        },
        $k = function(a) {},
        al = function(a, b) {},
        Zg = function(a) {};
    var bl, cl;
    var nl = function(a) { return function() {} },
        ol = function(a) { return function() {} };
    var pl = function(a) {
            var b = this;
            this.i = a;
            this.la = this.fc = !1;
            this.Ra = [];
            this.La = [];
            this.w = function() {
                b.la || Xf(b.Ra);
                $f(b, 1);
                if (Ob[a])
                    for (var c = 0; c < Ob[a].length; c++) Ob[a].shift().w()
            };
            this.C = function() {
                b.la || Xf(b.La);
                $f(b, 2);
                if (Ob[a])
                    for (var c = 0; c < Ob[a].length; c++) Ob[a].shift().C()
            };
            this.H = Mf
        },
        ql = function(a, b) { a.Ra.push(b) },
        rl = function(a, b) { a.La.push(b) },
        sl = function(a) {
            this.P = [];
            this.vb = [];
            this.Pb = {};
            this.Vb = [];
            this.ba = 0;
            this.sb = {};
            this.xb = {};
            this.wb = {};
            this.event = a
        };
    sl.prototype.addListener = function(a) { this.Vb.push(a) };
    var tl = function(a) { 0 < a.ba || Xf(a.Vb) },
        ul = function(a, b, c, d, e, f) {
            if (!c.la) {
                a.P[b] = c;
                void 0 == d && (d = []);
                void 0 == e && (e = []);
                void 0 == f && (f = []);
                d = bb(d) ? d.slice() : ["or", d];
                e = bb(e) ? e.slice() : [e];
                f = bb(f) ? f.slice() : [f];
                a.Pb[b] = d;
                a.sb[b] = 0 < e.length;
                a.xb[b] = 0 < f.length;
                a.ba++;
                var g = function() {
                    0 < a.ba && !a.sb[b] && !a.xb[b] && a.ba--;
                    tl(a)
                };
                ql(c, g);
                rl(c, g)
            }
        },
        zl = function(a) {
            for (var b = [], c = {}, d = 0; d < a.P.length; c = { W: c.W }, d++)
                if (c.W = a.P[d], c.W) {
                    var e = a.Pb[d],
                        f = a.sb[d],
                        g = a.xb[d];
                    if (0 != e.length || f || g) {
                        if (0 < e.length)
                            for (var h =
                                    vl(e, c.W.H), k = 0; k < e.length; k++) e[k] instanceof Nk && e[k].D != d && wl(a, e[k].D, h);
                        (f || g) && xl(a, d, function(a) {
                            return function() {
                                0 < a.W.G.ba && a.W.G.ba--;
                                tl(a.W.G)
                            }
                        }(c))
                    } else b.push(d)
                }
            for (d = 0; d < b.length; d++) a.P[b[d]].H();
            for (d = 0; d < a.vb.length; d++) {
                var l = a.vb[d];
                yl(l);
                0 < l.length && l[0].H()
            }
        },
        wl = function(a, b, c) { a.P[b] && (ql(a.P[b], function() { c(b, !0) }), rl(a.P[b], function() { c(b, !1) })) },
        vl = function(a, b) {
            var c = !1;
            return function(d, e) {
                var f;
                a: {
                    for (var g = 0; g < a.length; g++)
                        if (a[g] instanceof Nk && a[g].D === d || a[g] === d) {
                            f =
                                g;
                            break a
                        }
                    f = -1
                }
                c || 0 > f || ("or" == a[0] ? e ? (c = !0, b()) : (a.splice(f, 1), 1 == a.length && (c = !0)) : e ? (a.splice(f, 1), 1 == a.length && (c = !0, b())) : c = !0)
            }
        },
        xl = function(a, b, c) {
            var d = [],
                e = !1,
                f = function(b) {
                    var c, g, h = Ik[b];
                    if (a.event.g(h)) {} else g = Al(h, b, a.event.g, a);
                    if (c = g) {
                        var k = Bl(b, !0);
                        0 < k.length && f(k[0].D);
                        d.push(c);
                        var l = Bl(b, !1);
                        0 < l.length && f(l[0].D)
                    } else e = !0
                };
            f(b);
            if (!e) {
                for (var g = 0; g < d.length; g++) {
                    var h = d[g],
                        k = Bl(h.i, !0);
                    if (0 < k.length) {
                        var l = d[g - 1],
                            m = Cl(h);
                        ql(l, m);
                        0 == k[0].xa ? rl(l, m) : rl(l, c)
                    }
                    var n = Bl(h.i, !1);
                    0 < n.length && (m = Cl(d[g + 1]), ql(h, m), 0 == n[0].xa ? rl(h, m) : rl(h, c))
                }
                ql(d[d.length - 1], c);
                rl(d[d.length - 1], c);
                a.vb.push(d)
            }
        },
        Bl = function(a, b) {
            var c = b ? Pe : ff,
                d = Ik[a],
                e = void 0 === d[c] ? [] : d[c];
            return bb(e) ? e : [e]
        },
        Cl = function(a) { return function() { a.H() } },
        yl = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.i,
                    f = Nb[e],
                    g = f.firingOption;
                if (0 != g && (1 == g &&
                        void 0 !== d.G.wb[e] || 2 == g && void 0 !== f.state) && (b.push(d), 2 == f.state && c != a.length - 1)) {
                    var h = Bl(a[c + 1].i, !0);
                    if (0 < h.length && 1 == h[0].xa)
                        for (++c; c < a.length; c++) b.push(a[c])
                }
            }
            var k = Dl(b),
                l;
            for (l in k)
                if (k.hasOwnProperty(l)) {
                    for (var m = void 0, n = void 0, p = k[l], r = p[0], t = p[p.length - 1], v, A = 0; A < a.length; A++) {
                        var J = a[A];
                        !m && J.i == r && 0 < A && (m = a[A - 1]);
                        J.i == t && A < a.length - 1 && (n = a[A + 1]);
                        if (-1 < Pf(p, J.i))
                            if (v = a.splice(A, 1)[0], J.i == t) break;
                            else A--
                    }
                    if (v) {
                        var I = Number(l),
                            F = m,
                            L = n;
                        if (F) {
                            var B = F.Ra[0],
                                D = F.La[0],
                                z = F;
                            z.Ra = [];
                            z.La = [];
                            ql(F, B);
                            rl(F, D)
                        }
                        if (F && L) {
                            var C = Cl(L);
                            ql(F, C);
                            var G = Bl(F.i, !1);
                            0 < G.length && G[0].D != I && 0 == G[0].xa && rl(F, C);
                            var H = Bl(L.i, !0);
                            0 < H.length && H[0].D != I && 0 == H[0].xa && rl(F, C)
                        }
                    }
                }
        },
        Dl = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [],
                    f = function(a) {
                        var b = Bl(a, !0);
                        0 < b.length && f(b[0].D);
                        e.push(a);
                        var c = Bl(a, !1);
                        0 < c.length && f(c[0].D)
                    };
                f(d.i);
                b[d.i] = e
            }
            El(a, b);
            return b
        },
        El = function(a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c].i,
                    e;
                for (e in b)
                    if (b.hasOwnProperty(e) && e != d && -1 < Pf(b[e], d)) { delete b[d]; break }
            }
        };
    var Fl = function(a, b, c) {
            return function() {
                a[Bd] = b.w;
                a[Cd] = b.C;
                var d = b.i,
                    e = b.G && b.G.wb[d],
                    f = Nb[d] && Nb[d].state,
                    g = e ? void 0 !== e : b.fc || b.la,
                    h = Nb[d] && Nb[d].firingOption,
                    k = h && 2 == h,
                    l = h && 1 == h;
                if (!g && void 0 === f || !g && !k || !k && !l) {
                    $f(b, 0);
                    var m = b.G ? b.G.event : void 0,
                        n = a;
                    n = Xg(n, new Sf, c);
                    a = n;
                    if (m) {}
                    Tf(a, b.w, b.C)
                } else k && 0 == f || l && 0 == e ? Ob[d].push(b) : k && 1 == f || l && 1 == e ? b.w() : b.C()
            }
        },
        Al = function(a, b, c, d) {
            function e(a) { return a.i === b }
            var f = function() { var a = d && d.P; return a && Qf(a, e) }() || new pl(b);
            f.G = d;
            ql(f, nl(a));
            rl(f, ol(a));
            f.H = Fl(a, f, c);
            return f
        };
    var Ml = function() {
            var a = [];
            return function(b, c) {
                if (void 0 === a[b]) {
                    var d = Hk[b] && Xg(Hk[b], new Sf, c),
                        e = d;
                    d && (e = Ck(d));
                    a[b] = [e, d]
                }
                return a[b]
            }
        },
        Nl = function(a, b) {
            for (var c = b[0], d = 0; d < c.length; d++)
                if (!a.aa(c[d], a.g)[0]) return !1;
            var e = b[2];
            for (d = 0; d < e.length; d++)
                if (a.aa(e[d], a.g)[0]) return !1;
            return !0
        },
        Ol = !1;
    Ng = function(a, b, c, d, e) {
        switch (b) {
            case "gtm.js":
                if (Ol) return !1;
                Ol = !0;
                break;
            case "gtm.sync":
                if (Z("gtm.snippet") != Kb) return !1
        }
        for (var f = { id: a, name: b, Fa: d || Mf, ja: Rk(), Pa: Rk(), aa: Ml(), g: Tg(c) }, g = [], h = 0; h < sh.length; h++)
            if (Nl(f, sh[h])) { g[h] = !0; for (var k = f, l = sh[h], m = l[1], n = 0; n < m.length; n++) k.ja[m[n]] = !0; var p = l[3]; for (n = 0; n < p.length; n++) k.Pa[p[n]] = !0 } else g[h] = !1;
        var Q = [];
        for (var M = 0; M < Dk; M++)
            if (f.ja[M] && !f.Pa[M])
                if (f.g(Ik[M])) {} else {
                    Q[M] =
                        Ik[M];
                }
        f.ua = Q;
        for (var ma = new sl(f), ea = 0; ea < Dk; ea++)
            if (f.ja[ea] && !f.Pa[ea])
                if (f.g(Ik[ea])) {} else {
                    var Ma = f.ua[ea],
                        Qj = Al(Ma, ea, f.g, ma);
                    ul(ma, ea, Qj, Ma[Zc], Ma[Pe], Ma[ff]);
                    if (Ma[Pb]) break
                }
        ma.addListener(f.Fa);
        zl(ma);
        tl(ma);
        e && S(e) && e({ passingRules: g, resolvedTags: f.ua });
        if ("gtm.js" == b || "gtm.sync" == b) a: {}
        for (var cg in f.ua)
            if (f.ua.hasOwnProperty(cg)) { var dg = f.ua[cg]; if (void 0 == dg[ab] || !ag(dg[ab], "_implicit")) return !0 }
        return !1
    };
    var Ql = function() {};
    var Rl = {};
    var Wl = function() {};
    var Pl = { macro: function(a) { if (Gk.contains(a)) return Gk.get(a) } };
    Pl.dataLayer = Ag;
    Pl.onHtmlSuccess = $h(!0);
    Pl.onHtmlFailure = $h(!1);
    Pl.callback = function(a) {
        kb.hasOwnProperty(a) && S(kb[a]) && kb[a]();
        delete kb[a]
    };
    Pl.Bc = function() {
        var a = y.google_tag_manager;
        a || (a = y.google_tag_manager = {});
        qb = a;
        if (a[Ia.f]) {
            var b = qb.zones;
            b && b.registerNatural(Ia.f)
        } else {
            a[Ia.f] = Pl;
            li();
            wh();
            Ek.push.apply(Ek, Qk());
            Tk(Fk, 0, "1:0,2:1,2:2,0:3,2:4,0:5,1:6,2:7,1:8,2:9,1:10,2:11,3:12,2:13,3:14,2:15,3:16,2:17,3:18,1:19,2:20,2:21,3:22,2:23,3:24,2:25,3:26,2:27,3:28,2:29,3:30,2:31,3:32");
            Tk(Ug, 1, "D,N,x,AD,AM,AwB,AQG,AQY,AQgB,AAAG,AQAY,AQAgB,AQAAG,AQAAY,AQAAgB,AQAAAG");
            Tk(Hk, 1, "");
            Tk(Ik, 1, "");
            Tk(sh, 2, "");
            Tk(th, 4, "");
            for (var c = 0; c < Ik.length; c++) {
                var d = Ik[c],
                    e = 1;
                d[me] ? e = 2 :
                    d[yf] && (e = 0);
                Nb[c] = { firingOption: e, state: void 0 };
                Ob[c] = []
            }
            Jg();
            bh();
            var n = y;
            if ("interactive" == P.readyState && !P.createEventObject || "complete" == P.readyState) lg();
            else {
                wa(P, "DOMContentLoaded", lg);
                wa(P, "readystatechange", lg);
                if (P.createEventObject && P.documentElement.doScroll) {
                    var p = !0;
                    try { p = !n.frameElement } catch (J) {}
                    p && ng()
                }
                wa(n, "load", lg)
            }
            "complete" === P.readyState ? sg() : wa(y, "load", sg);
            Wl();
            Ql();
            a: {}
        }
    };
    Pl.Bc();
    var _vs = "res_ts:1512552217598000,srv_cl:184697699,ds:live,cv:4";
})()