webpackJsonp(
  [1],
  {
    '/Muf': function (e, t) {},
    '809j': function (e, t) {},
    '8DNi': function (e, t) {},
    '9SiY': function (e, t) {},
    Aw40: function (e, t) {},
    C0Js: function (e, t) {},
    EFfJ: function (e, t) {},
    Iyms: function (e, t) {},
    KxB8: function (e, t) {},
    N0fi: function (e, t) {},
    NALb: function (e, t) {},
    NHnr: function (e, t, s) {
      'use strict';
      function r(e) {
        s('8DNi');
      }
      function a(e) {
        s('QUVa');
      }
      function o(e) {
        s('NALb');
      }
      function n(e) {
        s('N0fi');
      }
      function i(e) {
        if (window.hljs) window.hljs.highlightBlock(e);
        else
          var t = 0,
            s = setInterval(function () {
              window.hljs ? (window.hljs.highlightBlock(e), clearInterval(s)) : ++t >= 50 && clearInterval(s);
            }, 100);
      }
      function c(e, t, s, r, a) {
        return Object(Rt.resolve)(e, t + '/' + s + (r ? '/' + r : '') + (a ? '#L' + a : ''));
      }
      function l(e, t) {
        var s = e.match(/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/i);
        s && (e = s[1]);
        var r = s ? s[2] : null,
          a = e.split(/(\.|#)/);
        return t.links[a[0]]
          ? {
              text: r || e,
              link:
                'object' === Pt()(t.links[a[0]])
                  ? {
                      name: t.links[a[0]].name,
                      params: t.links[a[0]].params,
                      query: { scrollTo: a[1] ? ('.' === a[1] ? 's-' : '') + a[2] : void 0 }
                    }
                  : t.links[a[0]]
            }
          : e.match(/^https?:\/\//i)
            ? { text: r || e, link: e }
            : { text: r || e };
      }
      function d(e, t, s, r) {
        if (!e) return null;
        for (var a = /\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/gi, o = void 0, n = '', i = 0; (o = a.exec(e)); ) {
          n += e.slice(i, o.index);
          var c = l(o[0], t);
          if (c.link) {
            var d = void 0;
            'object' === Pt()(c.link)
              ? (c.link.params || (c.link.params = {}),
                (c.link.params.source = r.params.source),
                (c.link.params.tag = r.params.tag),
                (d = s.resolve(c.link).href))
              : (d = c.link),
              (n += '[' + c.text + '](' + d + ')');
          } else n += c.text;
          i = o.index + o[0].length;
        }
        return n ? (n += e.slice(i)) : e;
      }
      function u(e) {
        return ('static' === e.scope ? 's-' : '') + e.name;
      }
      function p(e) {
        return 'string' == typeof e ? e : e.join('-');
      }
      function m(e) {
        s('EFfJ');
      }
      function h(e) {
        s('frPy');
      }
      function v(e) {
        s('n1Fm');
      }
      function f(e) {
        s('t5H2');
      }
      function g(e) {
        s('809j');
      }
      function _(e) {
        s('R+Wx');
      }
      function y(e) {
        s('i34D');
      }
      function b(e) {
        s('/Muf');
      }
      function k(e) {
        s('KxB8');
      }
      function w(e) {
        s('SQv5');
      }
      function x(e) {
        s('qvys');
      }
      function C(e) {
        s('C0Js');
      }
      function T(e) {
        s('SVOi');
      }
      function $(e) {
        s('pgmh');
      }
      function M(e) {
        s('9SiY');
      }
      function S(e) {
        s('t2Up');
      }
      function P(e) {
        s('PBIT');
      }
      function R(e, t) {
        return t + ('static' === e.scope ? '.' : '#') + e.name;
      }
      function E(e) {
        s('q4Z2');
      }
      function F(e) {
        s('Iyms');
      }
      function q(e) {
        s('tzlZ');
      }
      function D(e) {
        s('Aw40');
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var A = s('/5sW'),
        U = s('EFqf'),
        N = s.n(U),
        j = s('woOf'),
        V = s.n(j),
        Z = { name: 'logoSquare', props: ['light'] },
        L = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'svg',
            {
              attrs: {
                width: '512',
                height: '512',
                version: '1.1',
                viewBox: '0 0 512 512',
                xmlns: 'http://www.w3.org/2000/svg',
                'xmlns:cc': 'http://creativecommons.org/ns#',
                'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
                'xmlns:rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
              }
            },
            [
              s('g', { attrs: { transform: 'translate(-29.301 -54.73)' } }, [
                s('g', { attrs: { transform: 'translate(146.01 60.11)', 'aria-label': '丩 ' } }, [
                  s('path', {
                    attrs: {
                      d: 'M183.133,0.808h55.854a10.83,10.83,0,0,1,3.852,1.926,17.309,17.309,0,0,1,1.926,1.926,19.2,19.2,0,0,1,1.926,1.926c1.526,2.231,1.447,5.544,0,9.63a17.768,17.768,0,0,1-1.926,3.852l-1.926,1.926-3.852,3.852V507.34s-1.247,1.246-1.926,1.926l-1.926,1.926h-44.3s-1.926,0-1.926,0a11.734,11.734,0,0,1-3.852-1.926,10.61,10.61,0,0,1-1.926-1.926V357.114L46.389,403.337a32.941,32.941,0,0,0-3.852,1.926,18.662,18.662,0,0,0-5.778,5.778,6.809,6.809,0,0,1-5.778,5.778,8.878,8.878,0,0,1-7.7-1.926c-0.651-1.284-1.289-2.559-1.926-3.852-8.882-18.023-18.182-43.578-21.186-52l50.075-17.334V64.366h52l5.777,1.926,1.926,1.926L111.872,74v3.852L109.946,81.7l-1.926,1.926-1.926,1.926V324.372l77.039-23.112V0.808Z',
                      fill: '#ffffff'
                    }
                  })
                ])
              ])
            ]
          );
        },
        O = [],
        H = { render: L, staticRenderFns: O },
        B = H,
        W = s('VU/8'),
        I = W(Z, B, !1, null, null, null),
        J = I.exports,
        G = s('lHA8'),
        z = s.n(G),
        K = s('6S2P'),
        Q = s.n(K),
        Y = s('BO1k'),
        X = s.n(Y),
        ee = s('mvHQ'),
        te = s.n(ee),
        se = s('d7EF'),
        re = s.n(se),
        ae = s('//Fk'),
        oe = s.n(ae),
        ne = s('Zrlr'),
        ie = s.n(ne),
        ce = s('wxAW'),
        le = s.n(ce),
        de = function (e) {
          if (!e.ok) throw new Error('Failed to fetch github data');
          return e.json();
        },
        ue = (function () {
          function e(t) {
            ie()(this, e),
              (this.id = t.id),
              (this.name = t.name),
              (this.global = t.global),
              (this.repo = t.repo),
              (this.defaultTag = t.defaultTag || 'master'),
              (this.defaultClass = t.defaultClass),
              (this.defaultFile = t.defaultFile || { category: 'general', id: 'welcome' }),
              (this.source = t.source || 'https://github.com/' + this.repo + '/blob/'),
              (this.branchFilter =
                t.branchFilter ||
                function (e) {
                  return 'master' !== e;
                }),
              (this.tagFilter =
                t.tagFilter ||
                function () {
                  return !0;
                }),
              (this.tags = null),
              (this.recentTag = null);
          }
          return (
            le()(e, [
              {
                key: 'fetchTags',
                value: function () {
                  var e = this;
                  return this.tags
                    ? oe.a.resolve(this.tags)
                    : oe.a
                        .all([
                          fetch('https://api.github.com/repos/' + this.repo + '/branches').then(de),
                          fetch('https://api.github.com/repos/' + this.repo + '/tags').then(de)
                        ])
                        .catch(function (t) {
                          if (localStorage['source-' + e.id]) {
                            console.error(t);
                            var s = JSON.parse(localStorage['source-' + e.id]);
                            return [s.branches, s.tags];
                          }
                          throw t;
                        })
                        .then(function (t) {
                          var s = re()(t, 2),
                            r = s[0],
                            a = s[1];
                          (e.tags = [e.defaultTag]), (localStorage['source-' + e.id] = te()({ branches: r, tags: a }));
                          var o = !0,
                            n = !1,
                            i = void 0;
                          try {
                            for (var c, l = X()(r); !(o = (c = l.next()).done); o = !0) {
                              var d = c.value;
                              d.name !== e.defaultTag && e.branchFilter(d.name) && e.tags.push(d.name);
                            }
                          } catch (e) {
                            (n = !0), (i = e);
                          } finally {
                            try {
                              !o && l.return && l.return();
                            } finally {
                              if (n) throw i;
                            }
                          }
                          var u = {},
                            p = !0,
                            m = !1,
                            h = void 0;
                          try {
                            for (var v, f = X()(a); !(p = (v = f.next()).done); p = !0) {
                              var g = v.value;
                              if (Q.a.valid(g.name)) {
                                var _ = Q.a.major(g.name) + '.' + Q.a.minor(g.name),
                                  y = Q.a.patch(g.name);
                                if (y < u[_]) continue;
                                u[_] = y;
                              }
                            }
                          } catch (e) {
                            (m = !0), (h = e);
                          } finally {
                            try {
                              !p && f.return && f.return();
                            } finally {
                              if (m) throw h;
                            }
                          }
                          var b = !0,
                            k = !1,
                            w = void 0;
                          try {
                            for (var x, C = X()(a); !(b = (x = C.next()).done); b = !0) {
                              var T = x.value;
                              if (T.name !== e.defaultTag && e.tagFilter(T.name)) {
                                if (Q.a.valid(T.name)) {
                                  var $ = Q.a.major(T.name) + '.' + Q.a.minor(T.name);
                                  if (Q.a.patch(T.name) < u[$]) continue;
                                }
                                e.tags.push(T.name);
                              }
                            }
                          } catch (e) {
                            (k = !0), (w = e);
                          } finally {
                            try {
                              !b && C.return && C.return();
                            } finally {
                              if (k) throw w;
                            }
                          }
                          return e.tags;
                        });
                }
              },
              {
                key: 'fetchDocs',
                value: function (e) {
                  return fetch('https://raw.githubusercontent.com/' + this.repo + '/docs/' + e + '.json').then(de);
                }
              }
            ]),
            e
          );
        })(),
        pe = ue,
        me = new z.a(['docs', 'parsers', 'typehandler', 'stable', '7.x']),
        he = new pe({
          id: 'main',
          name: 'Main library',
          global: 'Hypixel',
          repo: 'hypixel-api-reborn/hypixel-api-reborn',
          defaultTag: 'master',
          defaultClass: 'Client',
          branchFilter: function (e) {
            return !me.has(e);
          },
          tagFilter: function (e) {
            return Q.a.gte(e, '3.0.0');
          }
        }),
        ve = {
          name: 'navbar',
          props: ['repository'],
          components: { LogoSquare: J },
          data: function () {
            return {
              docs: { class: he.defaultClass },
              tutorials: { category: he.defaultFile.category, file: he.defaultFile.id }
            };
          },
          computed: {
            tag: function () {
              return this.$route.params.tag || he.defaultTag;
            },
            source: function () {
              return this.$route.params.source || he.id;
            }
          }
        },
        fe = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'header',
            [
              s(
                'container',
                [
                  s('router-link', { attrs: { to: '/' } }, [s('logoSquare', { attrs: { id: 'logo' } })], 1),
                  e._v(' '),
                  s(
                    'nav',
                    [
                      s(
                        'router-link',
                        {
                          attrs: {
                            to: {
                              name: 'docs-class',
                              params: Object.assign({}, { source: e.source, tag: e.tag }, e.docs)
                            }
                          }
                        },
                        [e._v('Reference')]
                      ),
                      e._v(' '),
                      s(
                        'router-link',
                        {
                          attrs: {
                            to: {
                              name: 'docs-file',
                              params: Object.assign({}, { source: e.source, tag: e.tag }, e.tutorials)
                            }
                          }
                        },
                        [e._v('Guide')]
                      ),
                      e._v(' '),
                      s('a', { attrs: { href: 'https://github.com/' + e.repository } }, [e._v('GitHub')])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          );
        },
        ge = [],
        _e = { render: fe, staticRenderFns: ge },
        ye = _e,
        be = s('VU/8'),
        ke = r,
        we = be(ve, ye, !1, ke, null, null),
        xe = we.exports,
        Ce = s('Xxa5'),
        Te = s.n(Ce),
        $e = s('exGp'),
        Me = s.n($e),
        Se = function (e) {
          return e.json();
        },
        Pe = function () {},
        Re = { downloads: 'many', stars: 'a lot', contributors: 'some', fetching: !1 },
        Ee = {
          name: 'stats',
          data: function () {
            return Re;
          },
          beforeMount: function () {
            this.fetch();
          },
          methods: {
            fetch: (function (e) {
              function t() {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function () {
              var e = this;
              return Me()(
                Te.a.mark(function t() {
                  var s, r, a, o, n, i, c, l, d, u, p;
                  return Te.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!e.fetching) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt('return');
                          case 2:
                            return (
                              (e.fetching = !0),
                              (t.next = 5),
                              oe.a.all([
                                fetch(
                                  'https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/hypixel-api-reborn'
                                ).then(Se, Pe),
                                fetch('https://api.github.com/repos/hypixel-api-reborn/hypixel-api-reborn').then(
                                  Se,
                                  Pe
                                ),
                                fetch(
                                  'https://api.github.com/repos/hypixel-api-reborn/hypixel-api-reborn/stats/contributors'
                                ).then(Se, Pe)
                              ])
                            );
                          case 5:
                            if (((s = t.sent), (r = re()(s, 3)), (a = r[0]), (o = r[1]), (n = r[2]), !a)) {
                              t.next = 32;
                              break;
                            }
                            for (
                              e.downloads = 0, i = !0, c = !1, l = void 0, t.prev = 15, d = X()(a.downloads);
                              !(i = (u = d.next()).done);
                              i = !0
                            )
                              (p = u.value), (e.downloads += p.downloads);
                            t.next = 23;
                            break;
                          case 19:
                            (t.prev = 19), (t.t0 = t.catch(15)), (c = !0), (l = t.t0);
                          case 23:
                            (t.prev = 23), (t.prev = 24), !i && d.return && d.return();
                          case 26:
                            if (((t.prev = 26), !c)) {
                              t.next = 29;
                              break;
                            }
                            throw l;
                          case 29:
                            return t.finish(26);
                          case 30:
                            return t.finish(23);
                          case 31:
                            e.downloads = e.downloads.toLocaleString();
                          case 32:
                            o && (e.stars = o.stargazers_count.toLocaleString()),
                              n && (e.contributors = n.length.toLocaleString());
                          case 34:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e,
                    [
                      [15, 19, 23, 31],
                      [24, , 26, 30]
                    ]
                  );
                })
              )();
            })
          }
        },
        Fe = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s('ul', { staticClass: 'stats' }, [
            s('li', [e._v(e._s(e.downloads) + ' downloads')]),
            e._v(' '),
            s('li', [e._v(e._s(e.stars) + ' stars')]),
            e._v(' '),
            s('li', [e._v(e._s(e.contributors) + ' contributors')])
          ]);
        },
        qe = [],
        De = { render: Fe, staticRenderFns: qe },
        Ae = De,
        Ue = s('VU/8'),
        Ne = Ue(Ee, Ae, !1, null, null, null),
        je = Ne.exports,
        Ve = {
          name: 'footer',
          props: ['darkMode'],
          components: { Stats: je },
          methods: {
            toggleDarkMode: function (e) {
              this.$emit('toggleDarkMode'), e.preventDefault();
            }
          }
        },
        Ze = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'footer',
            [
              s(
                'container',
                [
                  s('strong', [s('router-link', { attrs: { to: '/' } }, [e._v('hypixel-api-reborn')])], 1),
                  e._v(' '),
                  s('p', [e._v('A lightweight wrapper for Hypixel API with intellisense support')]),
                  e._v(' '),
                  s('p', [
                    e._v('Website originally created by the '),
                    s('a', { attrs: { href: 'https://github.com/discord-akairo/website' } }, [e._v('discord-akairo')]),
                    e._v(' team')
                  ]),
                  e._v(' '),
                  s('stats'),
                  e._v(' '),
                  s('a', { attrs: { href: '', id: 'dark-mode-link' }, on: { click: e.toggleDarkMode } }, [
                    s('em', { staticClass: 'fa', class: e.darkMode ? 'fa-sun-o' : 'fa-moon-o' }),
                    e._v('\n      Turn ' + e._s(e.darkMode ? 'on' : 'off') + ' the lights\n    ')
                  ])
                ],
                1
              )
            ],
            1
          );
        },
        Le = [],
        Oe = { render: Ze, staticRenderFns: Le },
        He = Oe,
        Be = s('VU/8'),
        We = a,
        Ie = Be(Ve, He, !1, We, null, null),
        Je = Ie.exports,
        Ge = s('7ljE'),
        ze = s.n(Ge),
        Ke = null,
        Qe = {
          name: 'app',
          components: { AppNavbar: xe, AppFooter: Je },
          data: function () {
            var e = localStorage.getItem('dark-mode');
            return { darkMode: 'false' !== e && null !== e, repository: he.repo, konami: !1 };
          },
          methods: {
            toggleDarkMode: function () {
              (this.darkMode = !this.darkMode),
                localStorage.setItem('dark-mode', this.darkMode),
                this.darkMode ? this.$el.classList.add('dark') : this.$el.classList.remove('dark');
            },
            setRepository: function (e) {
              this.repository = e;
            },
            poop: function () {
              var e = this,
                t = document.createElement('div');
              (t.className = 'poop'), (t.innerHTML = '💩');
              var s = 4e3 * Math.random() + 1e3;
              (t.style.transition = 'top ' + s + 'ms linear, left ' + s + 'ms linear'),
                (t.style.animation = 'spin ' + s / 3e3 + 's infinite linear');
              var r = Math.floor(4 * Math.random()) + 1,
                a = {
                  top:
                    (2 === r || 4 === r
                      ? Math.random() * window.innerHeight
                      : 1 === r
                        ? -200
                        : window.innerHeight + 200) + 'px',
                  left:
                    (1 === r || 3 === r
                      ? Math.random() * window.innerWidth
                      : 4 === r
                        ? -200
                        : window.innerWidth + 200) + 'px'
                },
                o = {
                  top:
                    (2 === r || 4 === r
                      ? Math.random() * window.innerHeight
                      : 1 === r
                        ? window.innerHeight + 200
                        : -200) + 'px',
                  left:
                    (1 === r || 3 === r
                      ? Math.random() * window.innerWidth
                      : 4 === r
                        ? window.innerWidth + 200
                        : -200) + 'px'
                };
              V()(t.style, a),
                window.setTimeout(function () {
                  V()(t.style, o);
                }, 100),
                document.body.appendChild(t),
                window.setTimeout(function () {
                  document.body.removeChild(t);
                }, s + 100),
                window.setTimeout(
                  function () {
                    return e.poop();
                  },
                  1e4 * Math.random() + 1e3
                );
            }
          },
          mounted: function () {
            var e = this;
            this.darkMode && this.$el.classList.add('dark'),
              Ke ||
                (Ke = new ze.a(function () {
                  (e.konami = !0), e.poop(), Ke.disable();
                }));
          }
        },
        Ye = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'div',
            { attrs: { id: 'app' } },
            [
              s('app-navbar', { attrs: { repository: e.repository } }),
              e._v(' '),
              s('router-view', {
                attrs: { darkMode: e.darkMode, konami: e.konami },
                on: { toggleDarkMode: e.toggleDarkMode, setRepository: e.setRepository }
              }),
              e._v(' '),
              s('app-footer', { attrs: { darkMode: e.darkMode }, on: { toggleDarkMode: e.toggleDarkMode } })
            ],
            1
          );
        },
        Xe = [],
        et = { render: Ye, staticRenderFns: Xe },
        tt = et,
        st = s('VU/8'),
        rt = o,
        at = st(Qe, tt, !1, rt, null, null),
        ot = at.exports,
        nt = s('/ocq'),
        it = { name: 'logo', props: ['light', 'konami'] },
        ct = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'svg',
            {
              attrs: {
                width: '1500',
                height: '350',
                version: '1.1',
                viewBox: '0 0 1500 350',
                xmlns: 'http://www.w3.org/2000/svg',
                'xmlns:cc': 'http://creativecommons.org/ns#',
                'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
                'xmlns:rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
              }
            },
            [
              s('g', { attrs: { transform: 'translate(552.69 25.689)' } }, [
                s('path', {
                  attrs: {
                    transform: 'translate(-790.68 78.726)',
                    d: 'M603,42.5h29a5.617,5.617,0,0,1,2,1,8.992,8.992,0,0,1,1,1,9.925,9.925,0,0,1,1,1c0.792,1.158.751,2.879,0,5a9.22,9.22,0,0,1-1,2l-1,1-2,2v250l-1,1-1,1H606a6.094,6.094,0,0,1-2-1,5.473,5.473,0,0,1-1-1v-78l-71,24a17.179,17.179,0,0,0-2,1,9.694,9.694,0,0,0-3,3,3.536,3.536,0,0,1-3,3,4.61,4.61,0,0,1-4-1c-0.338-.667-0.669-1.329-1-2-4.612-9.358-9.441-22.626-11-27l26-9V75.5h27l3,1,1,1q0.5,1.5,1,3v2l-1,2-1,1-1,1v124l40-12V42.5Zm424,8a13.6,13.6,0,0,1,15,5c0.33,1,.67,2,1,3a11.313,11.313,0,0,1,0,6,12.279,12.279,0,0,1-8,8,14.281,14.281,0,0,1-8,0c-3.39-1.01-5.75-2.719-7-5a9.145,9.145,0,0,1-1-3v-6a8.98,8.98,0,0,1,1-3A10.509,10.509,0,0,1,1027,50.5Zm187,6h20v92h-20v-92Zm-458,5h21v34h39v-34h21v87H816v-36H777v36H756v-87Zm562,0h20l39,87h-21q-4.005-9.5-8-19h-41q-3.495,9.5-7,19h-21Q1298.5,105,1318,61.5Zm69,0h38c1.69-.031,3.33-0.031,5,0a48.484,48.484,0,0,1,10,1,30.423,30.423,0,0,1,9,4,30.976,30.976,0,0,1,10,11,33.676,33.676,0,0,1,4,15c0.34,7.331-1.52,13.335-3,16-1.6,2.881-5.5,7.485-12,11a38.783,38.783,0,0,1-12,4c-6.56,1.2-11.27,1.083-18,1-3.33-.041-6.62-0.041-10,0v24h-21v-87Zm92,0h21v87h-21v-87Zm-71,16v31c10.75,0.473,23.64,1.085,29-4,3.55-2.325,4.29-4.858,6-9,0.02-7.177-1.39-11.406-6-14C1431.57,76.368,1418.81,77.132,1408,77.5Zm-454,95H934v-91h19v7c19.964-15.364,49.05-5.223,54,18,7.77,36.469-29.119,51.871-53,36v30Zm246-52h-51a16.89,16.89,0,0,0,6,9,20.9,20.9,0,0,0,7,3,26.5,26.5,0,0,0,12,0c5.28-1.215,11-5,11-5s1.84,1.82,3,3a95.794,95.794,0,0,1,7,8,16.181,16.181,0,0,1-6,6c-0.38.206-1.32,0.659-2,1s-1.62.8-2,1c-0.69.357-1.37,0.724-2,1a17.517,17.517,0,0,1-3,1c-1.67.415-3.33,0.748-5,1a45.556,45.556,0,0,1-15,0,40.418,40.418,0,0,1-7-2c-8.54-3.259-17.99-9.382-22-19-1.35-3.249-2.59-9.594-2-17a38.536,38.536,0,0,1,2-10c5.08-12.871,19.85-21.1,34-21,8.05,0.054,18.34,2.781,26,11A35.392,35.392,0,0,1,1200,120.5Zm-352-39h20s2.024,5.209,4,10c2.26,5.48,5.043,11.432,7,16,2.525,5.892,4.827,11.816,7,18h2l18-44h19c-10.5,25.6-28.342,67.571-35,79a25.568,25.568,0,0,1-7,8,27.594,27.594,0,0,1-18,5,28.886,28.886,0,0,1-17-7l7-13a20.67,20.67,0,0,0,15,4,9.325,9.325,0,0,0,5-4,9.23,9.23,0,0,0,1-7Q862,114,848,81.5Zm173,0h20v67h-20v-67Zm31,0h22c4.26,6.08,14,20,14,20h1q7.005-10,14-20h21c-1.37,1.642-2.68,3.281-4,5-0.62.809-1.99,2.654-3,4-0.99,1.327-1.99,2.642-2.98,3.968-1.01,1.344-2.01,2.687-3.02,4.032-0.57.757-2,2.666-3,4-1.03,1.375-2.52,3.288-3,4-1.1,1.628-1.76,2.972-3,4-0.32.263-1.37,1.368-2,2a2.966,2.966,0,0,0-1,2,3,3,0,0,0,1,2c1.52,1.519,2.3,3.272,4,5a33.194,33.194,0,0,1,4,5q1.515,2,3,4c1.01,1.353,2.31,3.108,3,4,1.33,1.72,2.67,3.278,4,5,1.03,1.338,1.97,2.656,3,4,1.31,1.71,2.62,3.349,4,5h-23c-3.48-4.908-11.79-16.579-13-19a1.6,1.6,0,0,0-1-1,5.04,5.04,0,0,0-1,1s-5.26,7.287-8,11c-1.99,2.7-3.98,5.343-6,8h-22s0.99-.989,2-2c1.38-1.651,2.69-3.29,4-5,1.03-1.344,1.97-2.662,3-4,1.33-1.719,2.66-3.286,4-5,1.03-1.325,2.02-2.636,3-4a30.1,30.1,0,0,0,4-5,25.333,25.333,0,0,1,3-4c0.34-.351.78-0.8,1-1a8.433,8.433,0,0,0,1-1,5.514,5.514,0,0,0,1-2Q1064.505,98.5,1052,81.5Zm275,1q-6.495,16-13,32h27Q1334,98.5,1327,82.5Zm-166,13-3,1c-0.67.333-1.33,0.667-2,1s-1.33.667-2,1c-0.33.333-.67,0.667-1,1s-0.67.667-1,1c0,0-.67.666-1,1a5.668,5.668,0,0,0-1,1,7.214,7.214,0,0,0-1,2,11.184,11.184,0,0,1-1,2v3h33v-4c-0.33-.668-1-2-1-2a6.2,6.2,0,0,0-1-2,5.473,5.473,0,0,0-1-1c-0.33-.333-0.67-0.667-1-1s-0.67-.667-1-1c-0.67-.333-1.33-0.667-2-1l-3-1a15.831,15.831,0,0,0-3-1A16.179,16.179,0,0,0,1161,95.5Zm-195,2-3,1-5,4a20.55,20.55,0,0,0-4,9,20.048,20.048,0,0,0,0,7,18.745,18.745,0,0,0,5,10,17.386,17.386,0,0,0,4,3,18.789,18.789,0,0,0,3,1,19.534,19.534,0,0,0,9,0,17.47,17.47,0,0,0,10-8,21.07,21.07,0,0,0,2-10,24.48,24.48,0,0,0-2-9,17.678,17.678,0,0,0-7-7,18.75,18.75,0,0,0-3-1A19.538,19.538,0,0,0,966,97.5Zm102,109h20v31a30.477,30.477,0,0,1,14-7,30.928,30.928,0,0,1,12,0c13.11,2.479,20.94,12.888,23,16a26.234,26.234,0,0,1,3,6,24.28,24.28,0,0,1,1,4,36.5,36.5,0,0,1-6,30,37.215,37.215,0,0,1-21,13,29.784,29.784,0,0,1-13,0,28.894,28.894,0,0,1-14-8v7h-19v-92Zm-172,5h34c2.371,0.038,4.667.038,7,0,1.763-.029,3.511-0.111,5,0a32.849,32.849,0,0,1,16,6c7.155,4.845,12.077,11.051,14,18a27.8,27.8,0,0,1,1,7,27.481,27.481,0,0,1-1,8c-2.506,8.947-9.441,15.818-18,20l20,28c-4.389.048-8.726,0.067-13.115,0.058-2.97-.006-5.915-0.026-8.885-0.058l-16-24H917v24H896v-87Zm21,16v31h5c1.651,0,3.331,0,5,0a49.354,49.354,0,0,0,12-1,37.314,37.314,0,0,0,6-2,17.22,17.22,0,0,0,4-4,13.509,13.509,0,0,0,0-17,16.936,16.936,0,0,0-4-4,38.154,38.154,0,0,0-6-2,43.264,43.264,0,0,0-12-1C923.746,227.555,920.4,227.551,917,227.5Zm137,43h-51a16.16,16.16,0,0,0,5,8,18.5,18.5,0,0,0,3,2,22.187,22.187,0,0,0,5,2,47.34,47.34,0,0,0,12,0,16.846,16.846,0,0,0,8-3c0.67-.572,2-2,2-2h1l1,1c0.33,0.333.67,0.667,1,1s0.67,0.667,1,1c0.31,0.352.62,0.689,0.96,1.022s0.71,0.661,1.04.978c0.24,0.232.66,0.659,1,1s0.66,0.666,1,1,0.67,0.667,1,1,0.67,0.667,1,1,0.67,0.667,1,1v2l-3,3a45.351,45.351,0,0,1-24,7c-13.6-.051-31.273-6.686-37-21a41.489,41.489,0,0,1-2-12c-0.215-6.369.884-12.205,2-15,4.687-11.736,16.13-17.08,22-19,7.96-2.6,25.32-5.213,38,8C1052.66,248.48,1055.6,259.69,1054,270.5Zm126-40a41.159,41.159,0,0,1,14,0,37.133,37.133,0,0,1,18,8,35.151,35.151,0,0,1,12,21,33.836,33.836,0,0,1,0,11,34.847,34.847,0,0,1-9,18,37.481,37.481,0,0,1-21,11,40.048,40.048,0,0,1-14,0,36.336,36.336,0,0,1-30-28,34.247,34.247,0,0,1,0-13,34.629,34.629,0,0,1,7-15A36.731,36.731,0,0,1,1180,230.5Zm100,0v18a17.9,17.9,0,0,0-19,7,9.771,9.771,0,0,0-2,2,5.785,5.785,0,0,0-1,2,6.1,6.1,0,0,0,0,2c0.03,0.35,0,1.3,0,2v35h-20v-67h19v8A24.89,24.89,0,0,1,1280,230.5Zm82,68h-20v-41c-2.99-6.144-8.41-9.944-14-10-2.94-.029-6.28,1.03-10,4a19.6,19.6,0,0,0-5,6v41h-20v-67h19v7a33.136,33.136,0,0,1,16-8,34.126,34.126,0,0,1,12,0,29.867,29.867,0,0,1,7,2,25.605,25.605,0,0,1,11,10c1.61,2.643,3.65,8.2,4,15a38.121,38.121,0,0,1,0,4v37Zm-348-52a16.4,16.4,0,0,0-8,5,26.932,26.932,0,0,0-2.8,4.788,26.147,26.147,0,0,0-1.2,3.212h33c-0.33-1-.67-2-1-3a26.369,26.369,0,0,0-5-8A22.107,22.107,0,0,0,1014,246.5Zm85,1c-7.84,2.713-10.35,10.578-11,14a17.7,17.7,0,0,0,0,7c1.31,6.29,6.07,11.208,12,14a16.432,16.432,0,0,0,9,0c7.25-2.137,10.99-8.892,12-14a18.518,18.518,0,0,0,0-7c-1.53-6.382-5.8-11.976-12-14A15.819,15.819,0,0,0,1099,247.5Zm83,0a19.589,19.589,0,0,0-11,12,18.745,18.745,0,0,0,0,11c1.44,4.695,5.2,10.118,11,12,3.02,0.978,5.76.554,10,0a19.839,19.839,0,0,0,11-12,20.173,20.173,0,0,0,0-11,18.7,18.7,0,0,0-2-5A16.491,16.491,0,0,0,1182,247.5Z',
                    fill: '#ffffff'
                  }
                })
              ])
            ]
          );
        },
        lt = [],
        dt = { render: ct, staticRenderFns: lt },
        ut = dt,
        pt = s('VU/8'),
        mt = pt(it, ut, !1, null, null, null),
        ht = mt.exports,
        vt = {
          name: 'home',
          props: ['konami'],
          components: { Logo: ht },
          mounted: function () {
            this.$emit('setRepository', he.repo);
          }
        },
        ft = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'div',
            { attrs: { id: 'home' } },
            [
              s(
                'slide',
                { attrs: { id: 'jumbotron' } },
                [
                  s('logo', { attrs: { light: !0, konami: e.konami, id: 'logo' } }),
                  e._v(' '),
                  s('code', [e._v('npm install hypixel-api-reborn')]),
                  s('br')
                ],
                1
              ),
              e._v(' '),
              s('section', { attrs: { id: 'info' } }, [
                e._m(0),
                e._v(' '),
                e._m(1),
                e._v(' '),
                s(
                  'div',
                  { staticClass: 'full-info-item' },
                  [
                    s('router-link', { staticClass: 'big-ass-btn', attrs: { to: '/docs' } }, [e._v('Get started')]),
                    e._v(' '),
                    s('a', { staticClass: 'big-ass-btn discord', attrs: { href: 'https://discord.gg/NSEBNMM' } }, [
                      e._v('Discord')
                    ])
                  ],
                  1
                )
              ])
            ],
            1
          );
        },
        gt = [
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s('div', { staticClass: 'info-item' }, [
              s('h2', [e._v('About')]),
              e._v(' '),
              s('p', [
                s('strong', [e._v('hypixel-api-reborn')]),
                e._v(' is a lightweight wrapper for '),
                s('a', { attrs: { href: 'https://api.hypixel.net' } }, [e._v('Hypixel API')]),
                e._v('. '),
                s('br'),
                e._v('\n        This is the only Hypixel API wrapper for Node.js with intellisense support.\n      ')
              ])
            ]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s('div', { staticClass: 'info-item' }, [
              s('h2', [e._v('Features')]),
              e._v(' '),
              s('p', [
                s('ul', [
                  s('li', [e._v('100% Promise-based.')]),
                  e._v(' '),
                  s('li', [e._v('Speedy and efficient.')]),
                  e._v(' '),
                  s('li', [
                    e._v('Intellisense support. '),
                    s(
                      'a',
                      {
                        attrs: {
                          href: 'https://code.visualstudio.com/docs/editor/intellisense',
                          title: 'https://code.visualstudio.com/docs/editor/intellisense'
                        }
                      },
                      [e._v('(?)')]
                    )
                  ])
                ])
              ])
            ]);
          }
        ],
        _t = { render: ft, staticRenderFns: gt },
        yt = _t,
        bt = s('VU/8'),
        kt = n,
        wt = bt(vt, yt, !1, kt, null, null),
        xt = wt.exports,
        Ct = s('bOdI'),
        Tt = s.n(Ct),
        $t = s('Dd8w'),
        Mt = s.n($t),
        St = s('pFYg'),
        Pt = s.n(St),
        Rt = s('UZ5h'),
        Et = { switching: !1 },
        Ft = {
          name: 'docs-navbar',
          props: ['sources', 'source'],
          data: function () {
            return { sourceChoice: this.source.id, tagChoice: null, tags: null, search: this.$route.query.q };
          },
          methods: {
            loadTags: function () {
              var e = this;
              if (((this.tags = this.source.tags), !this.tags)) {
                var t = this.source;
                this.source.fetchTags().then(function (s) {
                  e.source.id === t.id && (e.tags = s);
                });
              }
            },
            updateTagChoice: function () {
              this.tags && (this.tagChoice = this.$route.params.tag || this.source.recentTag || this.source.defaultTag);
            },
            goToSearch: function () {
              'docs-search' !== this.$route.name &&
                this.$router.push({ name: 'docs-search', query: { q: this.search } });
            }
          },
          watch: {
            sourceChoice: function (e) {
              this.$route.params.source !== e && this.$router.push({ name: 'docs-source', params: { source: e } });
            },
            tagChoice: function (e) {
              e &&
                this.$route.params.tag !== e &&
                ((Et.switching = !0),
                this.$router.push({
                  name: this.$route.name,
                  params: Mt()({}, this.$route.params, { tag: e }),
                  query: this.$route.query
                }));
            },
            source: function (e) {
              (this.sourceChoice = e.id), (this.tagChoice = null), this.loadTags();
            },
            search: function (e) {
              this.$route.query.q
                ? this.$router.replace({ name: 'docs-search', query: { q: e } })
                : this.$router.push({ name: 'docs-search', query: { q: e } });
            },
            $route: function (e) {
              this.tagChoice && e.params.tag && this.tagChoice !== e.params.tag && (this.tagChoice = e.params.tag);
            }
          },
          created: function () {
            this.loadTags();
          },
          mounted: function () {
            this.updateTagChoice();
          }
        },
        qt = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'div',
            { attrs: { id: 'docs-navbar' } },
            [
              s(
                'container',
                [
                  e._v('\n    View docs for\n\n    '),
                  s(
                    'select',
                    {
                      directives: [
                        { name: 'model', rawName: 'v-model', value: e.sourceChoice, expression: 'sourceChoice' }
                      ],
                      on: {
                        change: function (t) {
                          var s = Array.prototype.filter
                            .call(t.target.options, function (e) {
                              return e.selected;
                            })
                            .map(function (e) {
                              return '_value' in e ? e._value : e.value;
                            });
                          e.sourceChoice = t.target.multiple ? s : s[0];
                        }
                      }
                    },
                    e._l(e.sources, function (t) {
                      return s('option', { domProps: { value: t.id } }, [e._v(e._s(t.name))]);
                    }),
                    0
                  ),
                  e._v(' '),
                  s(
                    'transition',
                    { attrs: { name: 'fade', mode: 'out-in' }, on: { enter: e.updateTagChoice } },
                    [
                      e.tags
                        ? s(
                            'select',
                            {
                              directives: [
                                { name: 'model', rawName: 'v-model', value: e.tagChoice, expression: 'tagChoice' }
                              ],
                              key: e.source.id,
                              on: {
                                change: function (t) {
                                  var s = Array.prototype.filter
                                    .call(t.target.options, function (e) {
                                      return e.selected;
                                    })
                                    .map(function (e) {
                                      return '_value' in e ? e._value : e.value;
                                    });
                                  e.tagChoice = t.target.multiple ? s : s[0];
                                }
                              }
                            },
                            e._l(e.tags, function (t) {
                              return s('option', { domProps: { value: t } }, [e._v(e._s(t))]);
                            }),
                            0
                          )
                        : s('loading')
                    ],
                    1
                  ),
                  e._v(' '),
                  s('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model.trim',
                        value: e.search,
                        expression: 'search',
                        modifiers: { trim: !0 }
                      }
                    ],
                    attrs: { type: 'search', placeholder: 'Search' },
                    domProps: { value: e.search },
                    on: {
                      keypress: function (t) {
                        return !t.type.indexOf('key') && e._k(t.keyCode, 'enter', 13, t.key, 'Enter')
                          ? null
                          : e.goToSearch(t);
                      },
                      input: function (t) {
                        t.target.composing || (e.search = t.target.value.trim());
                      },
                      blur: function (t) {
                        return e.$forceUpdate();
                      }
                    }
                  }),
                  e._v(' '),
                  s('router-link', { attrs: { to: { name: 'docs-search' } } }, [
                    s('em', { staticClass: 'fa fa-search' })
                  ])
                ],
                1
              )
            ],
            1
          );
        },
        Dt = [],
        At = { render: qt, staticRenderFns: Dt },
        Ut = At,
        Nt = s('VU/8'),
        jt = m,
        Vt = Nt(Ft, Ut, !1, jt, null, null),
        Zt = Vt.exports,
        Lt = {
          name: 'documentation',
          props: ['darkMode'],
          components: { DocsNavbar: Zt },
          data: function () {
            return { sources: Tt()({}, he.id, he), source: he, tag: he.defaultTag };
          },
          methods: {
            setSource: function (e) {
              this.source = this.sources[e];
            },
            setTag: function (e) {
              (this.tag = e), (this.source.recentTag = e);
            },
            handleRoute: function (e) {
              return e.params.source && this.sources[e.params.source]
                ? (this.setSource(e.params.source),
                  e.params.tag
                    ? (this.setTag(e.params.tag),
                      void (
                        e.params.file ||
                        e.params.class ||
                        e.params.typedef ||
                        'docs-search' === e.name ||
                        this.$router.replace({
                          name: 'docs-file',
                          params: {
                            source: this.source.id,
                            tag: this.tag,
                            category: this.source.defaultFile.category,
                            file: this.source.defaultFile.id
                          }
                        })
                      ))
                    : void this.$router.replace({
                        name: 'docs-file',
                        params: {
                          source: this.source.id,
                          tag: this.source.recentTag || this.source.defaultTag,
                          category: this.source.defaultFile.category,
                          file: this.source.defaultFile.id
                        }
                      }))
                : void this.$router.replace({
                    name: 'docs-class',
                    params: { source: he.id, tag: he.defaultTag, class: he.defaultClass }
                  });
            },
            toggleDarkMode: function () {
              this.$emit('toggleDarkMode');
            },
            setRepository: function (e) {
              this.$emit('setRepository', e);
            }
          },
          watch: {
            $route: function (e) {
              this.handleRoute(e);
            }
          },
          created: function () {
            this.handleRoute(this.$route);
          }
        },
        Ot = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'div',
            { attrs: { id: 'docs' } },
            [
              s('docs-navbar', { attrs: { sources: e.sources, source: e.source } }),
              e._v(' '),
              s('router-view', {
                attrs: { source: e.source, tag: e.tag, darkMode: e.darkMode },
                on: { toggleDarkMode: e.toggleDarkMode, setRepository: e.setRepository }
              })
            ],
            1
          );
        },
        Ht = [],
        Bt = { render: Ot, staticRenderFns: Ht },
        Wt = Bt,
        It = s('VU/8'),
        Jt = It(Lt, Wt, !1, null, null, null),
        Gt = Jt.exports,
        zt = { name: 'unknown-route', props: ['darkMode'] },
        Kt = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'slide',
            { attrs: { id: 'unknown-route' } },
            [s('unknown-page', { attrs: { type: 'route', darkMode: e.darkMode } })],
            1
          );
        },
        Qt = [],
        Yt = { render: Kt, staticRenderFns: Qt },
        Xt = Yt,
        es = s('VU/8'),
        ts = h,
        ss = es(zt, Xt, !1, ts, null, null),
        rs = ss.exports,
        as = {
          name: 'docs-loader',
          props: ['source', 'tag', 'darkMode'],
          data: function () {
            return { docs: null, error: null, loadingTag: null };
          },
          methods: {
            loadDocs: function () {
              var e = this;
              if (this.loadingTag !== this.tag) {
                (this.docs = null), (this.error = null);
                var t = this.source,
                  s = this.tag;
                (this.loadingTag = this.tag),
                  this.setRepository(this.source.repo),
                  this.source
                    .fetchDocs(this.tag)
                    .then(function (r) {
                      if (e.source === t && e.tag === s) {
                        console.log('Loading', t, s),
                          r.classes.sort(function (e, t) {
                            return e.name.localeCompare(t.name);
                          }),
                          r.typedefs.sort(function (e, t) {
                            return e.name.localeCompare(t.name);
                          });
                        var a = !0,
                          o = !1,
                          n = void 0;
                        try {
                          for (var i, c = X()(r.classes); !(a = (i = c.next()).done); a = !0) {
                            var l = i.value;
                            l.props &&
                              l.props.sort(function (e, t) {
                                return e.name.localeCompare(t.name);
                              }),
                              l.methods &&
                                l.methods.sort(function (e, t) {
                                  return e.name.localeCompare(t.name);
                                }),
                              l.events &&
                                l.events.sort(function (e, t) {
                                  return e.name.localeCompare(t.name);
                                });
                          }
                        } catch (e) {
                          (o = !0), (n = e);
                        } finally {
                          try {
                            !a && c.return && c.return();
                          } finally {
                            if (o) throw n;
                          }
                        }
                        (r.links = {
                          string:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
                          number:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
                          boolean:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
                          symbol:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol',
                          void: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined',
                          Object:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
                          Function:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
                          function:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
                          Array:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
                          Set: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set',
                          Map: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
                          Date: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date',
                          RegExp:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp',
                          Promise:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
                          Error:
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error',
                          EventEmitter: 'https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter',
                          Timeout: 'https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout',
                          Buffer: 'https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer',
                          ReadableStream:
                            'https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable',
                          ChildProcess:
                            'https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess',
                          Worker: 'https://nodejs.org/api/worker_threads.html#worker_threads_class_worker',
                          MessagePort: 'https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport'
                        }),
                          (r.externals = r.externals || []),
                          (r.classes = r.classes || []),
                          (r.typedefs = r.typedefs || []);
                        var d = !0,
                          u = !1,
                          p = void 0;
                        try {
                          for (var m, h = X()(r.externals); !(d = (m = h.next()).done); d = !0) {
                            var v = m.value;
                            r.links[v.name] = v.see[0].replace(/\{@link\s+(.+?)\s*\}/i, '$1');
                          }
                        } catch (e) {
                          (u = !0), (p = e);
                        } finally {
                          try {
                            !d && h.return && h.return();
                          } finally {
                            if (u) throw p;
                          }
                        }
                        var f = !0,
                          g = !1,
                          _ = void 0;
                        try {
                          for (var y, b = X()(r.classes); !(f = (y = b.next()).done); f = !0) {
                            var k = y.value;
                            r.links[k.name] = { name: 'docs-class', params: { class: k.name } };
                          }
                        } catch (e) {
                          (g = !0), (_ = e);
                        } finally {
                          try {
                            !f && b.return && b.return();
                          } finally {
                            if (g) throw _;
                          }
                        }
                        var w = !0,
                          x = !1,
                          C = void 0;
                        try {
                          for (var T, $ = X()(r.typedefs); !(w = (T = $.next()).done); w = !0) {
                            var M = T.value;
                            r.links[M.name] = { name: 'docs-typedef', params: { typedef: M.name } };
                          }
                        } catch (e) {
                          (x = !0), (C = e);
                        } finally {
                          try {
                            !w && $.return && $.return();
                          } finally {
                            if (x) throw C;
                          }
                        }
                        if (
                          ('commando' === e.source.id &&
                            (r.links.Message = {
                              name: 'docs-class',
                              params: { source: 'main', tag: 'master', class: 'Message' }
                            }),
                          (r.global = e.source.global),
                          (r.source = e.source.source),
                          (r.tag = e.tag),
                          (e.docs = r),
                          (e.loadingTag = null),
                          console.log('Finished loading', t, s),
                          Et.switching)
                        ) {
                          var S = e.$route;
                          (Et.switching = !1),
                            'docs-class' === S.name
                              ? r.classes.some(function (e) {
                                  return e.name === S.params.class;
                                }) || e.goHome()
                              : 'docs-typedef' === S.name
                                ? r.typedefs.some(function (e) {
                                    return e.name === S.params.typedef;
                                  }) || e.goHome()
                                : 'docs-file' === S.name &&
                                  ((r.custom[S.params.category] && r.custom[S.params.category].files[S.params.file]) ||
                                    e.goHome());
                        }
                      }
                    })
                    .catch(function (r) {
                      console.error('Error while loading', t, s, r), (e.error = r), (e.loadingTag = null);
                    });
              }
            },
            scroll: function (e) {
              var t = this;
              if (this.$route.query.scrollTo && this.docs) {
                var s = function () {
                  var e = document.getElementById('doc-for-' + t.$route.query.scrollTo);
                  e || (e = document.getElementById('doc-for-e-' + t.$route.query.scrollTo)),
                    e || (e = document.getElementById(t.$route.query.scrollTo)),
                    e &&
                      (e.setAttribute('data-scrolled', !0),
                      setTimeout(function () {
                        return e.setAttribute('data-scrolled', !1);
                      }, 1e3),
                      setTimeout(function () {
                        return e.removeAttribute('data-scrolled');
                      }, 2e3),
                      e.scrollIntoView(),
                      window.scrollBy(0, -50));
                };
                e &&
                (this.$route.name !== e.name ||
                  this.$route.params.class !== e.params.class ||
                  this.$route.params.typedef !== e.params.typedef ||
                  this.$route.params.file !== e.params.file)
                  ? setTimeout(s, 400)
                  : s();
              }
            },
            goHome: function () {
              console.log(
                "Redirecting to default file due to the current page not existing in the newly-loaded tag's docs."
              ),
                this.$router.replace({
                  name: 'docs-file',
                  params: {
                    source: this.source.id,
                    tag: this.tag,
                    category: this.source.defaultFile.category,
                    file: this.source.defaultFile.id
                  }
                });
            },
            toggleDarkMode: function () {
              this.$emit('toggleDarkMode');
            },
            setRepository: function (e) {
              this.$emit('setRepository', e);
            }
          },
          watch: {
            source: function () {
              this.loadDocs();
            },
            tag: function () {
              this.loadDocs();
            },
            docs: function (e, t) {
              t || setTimeout(this.scroll, 700);
            },
            $route: function (e, t) {
              this.scroll(t);
            }
          },
          created: function () {
            this.loadDocs();
          },
          mounted: function () {
            this.$nextTick(this.scroll);
          }
        },
        os = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'div',
            { attrs: { id: 'docs-body' } },
            [
              s(
                'transition',
                { attrs: { name: 'fade-resize', mode: 'out-in' } },
                [
                  e.docs
                    ? s('router-view', {
                        attrs: { docs: e.docs, darkMode: e.darkMode },
                        on: { toggleDarkMode: e.toggleDarkMode, setRepository: e.setRepository }
                      })
                    : s(
                        'slide',
                        [
                          e.error
                            ? s('p', { attrs: { id: 'docs-error' } }, [
                                e._v("\n        Couldn't load the documentation data.\n        "),
                                s('pre', [e._v(e._s(e.error.toString()))])
                              ])
                            : s('loading')
                        ],
                        1
                      )
                ],
                1
              )
            ],
            1
          );
        },
        ns = [],
        is = { render: os, staticRenderFns: ns },
        cs = is,
        ls = s('VU/8'),
        ds = v,
        us = ls(as, cs, !1, ds, null, null),
        ps = us.exports,
        ms = {
          name: 'docs-sidebar',
          props: ['docs', 'darkMode'],
          data: function () {
            return { visible: !1, showPrivate: !1 };
          },
          computed: {
            showTutorialsSidebar: function () {
              return null != this.$route.params.category;
            },
            togglePrivateLabel: function () {
              return 'Private items are ' + (this.showPrivate ? 'shown' : 'hidden') + '. Click to toggle.';
            },
            toggleDarkModeLabel: function () {
              return 'The lights are ' + (this.darkMode ? 'off' : 'on') + '. Click to toggle.';
            }
          },
          methods: {
            toggle: function () {
              this.visible = !this.visible;
            },
            togglePrivate: function () {
              this.showPrivate = !this.showPrivate;
            },
            toggleDarkMode: function () {
              this.$emit('toggleDarkMode');
            }
          },
          watch: {
            showPrivate: function (e) {
              this.$emit('showPrivate', e);
            },
            $route: function (e) {
              this.visible && (this.visible = !1),
                !e.query.scrollTo &&
                  (window.pageYOffset || document.documentElement.scrollTop) > 300 &&
                  window.scrollTo(0, 90);
            }
          }
        },
        hs = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s('div', { attrs: { id: 'docs-sidebar' } }, [
            s('div', { attrs: { id: 'open-btn' }, on: { click: e.toggle } }, [s('em', { staticClass: 'fa fa-bars' })]),
            e._v(' '),
            s(
              'div',
              { class: e.visible ? 'open' : 'closed', attrs: { id: 'docs-sidebar-content' } },
              [
                s('div', { attrs: { id: 'close-btn' }, on: { click: e.toggle } }, [
                  s('em', { staticClass: 'fa fa-arrow-left', attrs: { 'aria-hidden': 'true' } })
                ]),
                e._v(' '),
                e.showTutorialsSidebar
                  ? void 0
                  : s('em', {
                      staticClass: 'fa toggle',
                      class: e.showPrivate ? 'fa-eye' : 'fa-eye-slash',
                      attrs: { id: 'docs-visibility', title: e.togglePrivateLabel },
                      on: { click: e.togglePrivate }
                    }),
                e._v(' '),
                s('em', {
                  staticClass: 'fa toggle',
                  class: e.darkMode ? 'fa-moon-o' : 'fa-sun-o',
                  attrs: { id: 'docs-brightness', title: e.toggleDarkModeLabel },
                  on: { click: e.toggleDarkMode }
                }),
                e._v(' '),
                s('transition', { attrs: { name: 'fade-slide', mode: 'out-in' } }, [
                  e.showTutorialsSidebar
                    ? s(
                        'ul',
                        e._l(e.docs.custom, function (t, r) {
                          return s('li', { key: r }, [
                            e._v('\n          ' + e._s(t.name) + '\n          '),
                            s(
                              'ul',
                              e._l(t.files, function (t, a) {
                                return s(
                                  'li',
                                  { key: a },
                                  [
                                    s(
                                      'router-link',
                                      { attrs: { to: { name: 'docs-file', params: { category: r, file: a } } } },
                                      [e._v('\n                ' + e._s(t.name) + '\n              ')]
                                    )
                                  ],
                                  1
                                );
                              }),
                              0
                            )
                          ]);
                        }),
                        0
                      )
                    : s('ul', { key: 'docs-sidebar' }, [
                        s(
                          'li',
                          [
                            e._v('\n          Classes\n          '),
                            s(
                              'transition-group',
                              { attrs: { name: 'animated-list', tag: 'ul' } },
                              e._l(e.docs.classes, function (t) {
                                return e.showPrivate || 'private' !== t.access
                                  ? s(
                                      'li',
                                      { key: t.name, staticClass: 'animated-list-item' },
                                      [
                                        s(
                                          'router-link',
                                          {
                                            attrs: { exact: '', to: { name: 'docs-class', params: { class: t.name } } }
                                          },
                                          [e._v('\n                ' + e._s(t.name) + '\n              ')]
                                        )
                                      ],
                                      1
                                    )
                                  : e._e();
                              }),
                              0
                            )
                          ],
                          1
                        ),
                        e._v(' '),
                        s(
                          'li',
                          [
                            e._v('\n          Typedefs\n          '),
                            s(
                              'transition-group',
                              { attrs: { name: 'animated-list', tag: 'ul' } },
                              e._l(e.docs.typedefs, function (t) {
                                return e.showPrivate || 'private' !== t.access
                                  ? s(
                                      'li',
                                      { key: t.name, staticClass: 'animated-list-item' },
                                      [
                                        s(
                                          'router-link',
                                          {
                                            attrs: {
                                              exact: '',
                                              to: { name: 'docs-typedef', params: { typedef: t.name } }
                                            }
                                          },
                                          [e._v('\n                ' + e._s(t.name) + '\n              ')]
                                        )
                                      ],
                                      1
                                    )
                                  : e._e();
                              }),
                              0
                            )
                          ],
                          1
                        )
                      ])
                ])
              ],
              2
            )
          ]);
        },
        vs = [],
        fs = { render: hs, staticRenderFns: vs },
        gs = fs,
        _s = s('VU/8'),
        ys = f,
        bs = _s(ms, gs, !1, ys, null, null),
        ks = bs.exports,
        ws = {
          name: 'docs-viewer',
          props: ['docs', 'darkMode'],
          components: { Sidebar: ks },
          data: function () {
            return { showPrivate: !1 };
          },
          computed: {
            key: function () {
              var e = this.$route.params;
              return e.file ? e.category + '/' + e.file : e.search ? 'search' : e.class || e.typedef;
            }
          },
          methods: {
            setShowPrivate: function (e) {
              this.showPrivate = e;
            },
            scrollTop: function () {
              window.scrollTo(0, 0);
            },
            toggleDarkMode: function () {
              this.$emit('toggleDarkMode');
            }
          },
          mounted: function () {
            this.$nextTick(function () {
              var e = document.getElementById('scroll-top'),
                t = void 0,
                s = void 0,
                r = function r() {
                  (window.pageYOffset || document.documentElement.scrollTop) > 300 &&
                    (clearTimeout(t),
                    clearTimeout(s),
                    (e.style.display = 'block'),
                    (s = setTimeout(function () {
                      e.style.opacity = '1';
                    }, 20)),
                    window.removeEventListener('scroll', r),
                    window.addEventListener('scroll', a));
                },
                a = function a() {
                  (window.pageYOffset || document.documentElement.scrollTop) < 300 &&
                    (clearTimeout(t),
                    clearTimeout(s),
                    (e.style.opacity = '0'),
                    (t = setTimeout(function () {
                      e.style.display = 'none';
                    }, 1e3)),
                    window.removeEventListener('scroll', a),
                    window.addEventListener('scroll', r));
                };
              window.addEventListener('scroll', r);
            });
          }
        },
        xs = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'div',
            { attrs: { id: 'docs-viewer' } },
            [
              s(
                'container',
                [
                  s('sidebar', {
                    attrs: { docs: e.docs, darkMode: e.darkMode },
                    on: { showPrivate: e.setShowPrivate, toggleDarkMode: e.toggleDarkMode }
                  }),
                  e._v(' '),
                  s(
                    'transition',
                    { attrs: { name: 'fade-slide', mode: 'out-in' } },
                    [
                      s('router-view', {
                        key: e.key,
                        attrs: { docs: e.docs, showPrivate: e.showPrivate, darkMode: e.darkMode }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              e._v(' '),
              s('div', { attrs: { id: 'docs-meta' } }, [
                s('p', [
                  e._v('\n      Documentation built at ' + e._s(new Date(e.docs.meta.date).toUTCString()) + '.'),
                  s('br'),
                  e._v(
                    '\n      Generator: v' +
                      e._s(e.docs.meta.generator) +
                      '   Format: ' +
                      e._s(e.docs.meta.format) +
                      '\n    '
                  )
                ])
              ]),
              e._v(' '),
              s('div', { attrs: { id: 'scroll-top', title: 'Scroll to top' }, on: { click: e.scrollTop } }, [
                s('em', { staticClass: 'fa fa-arrow-up' })
              ])
            ],
            1
          );
        },
        Cs = [],
        Ts = { render: xs, staticRenderFns: Cs },
        $s = Ts,
        Ms = s('VU/8'),
        Ss = g,
        Ps = Ms(ws, $s, !1, Ss, null, null),
        Rs = Ps.exports,
        Es = {
          name: 'source-button',
          props: ['meta', 'path', 'docs'],
          methods: {
            sourceURL: function (e, t, s) {
              return c(this.docs.source, this.docs.tag, e, t, s);
            }
          }
        },
        Fs = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s('div', { staticClass: 'source-button' }, [
            s(
              'a',
              {
                attrs: {
                  href: '' + (e.meta ? e.sourceURL(e.meta.path, e.meta.file, e.meta.line) : e.sourceURL(e.path)),
                  title: 'Source'
                }
              },
              [s('em', { staticClass: 'fa fa-code' })]
            )
          ]);
        },
        qs = [],
        Ds = { render: Fs, staticRenderFns: qs },
        As = Ds,
        Us = s('VU/8'),
        Ns = _,
        js = Us(Es, As, !1, Ns, null, null),
        Vs = js.exports,
        Zs = {
          name: 'file-viewer',
          props: ['docs', 'darkMode'],
          components: { SourceButton: Vs },
          data: function () {
            return this.docs.custom[this.$route.params.category]
              ? { file: this.docs.custom[this.$route.params.category].files[this.$route.params.file] }
              : { file: null };
          },
          computed: {
            html: function () {
              var e = void 0;
              return (
                (e =
                  'md' === this.file.type
                    ? this.file.content
                    : '# ' + this.file.name + '\n```' + this.file.type + '\n' + this.file.content + '\n```'),
                A.a.filter('marked')(e)
              );
            }
          },
          mounted: function () {
            var e = this;
            this.$nextTick(function () {
              var t = !0,
                s = !1,
                r = void 0;
              try {
                for (var a, o = X()(e.$el.querySelectorAll('pre code')); !(t = (a = o.next()).done); t = !0) {
                  i(a.value);
                }
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  !t && o.return && o.return();
                } finally {
                  if (s) throw r;
                }
              }
            });
          }
        },
        Ls = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return e.file
            ? s(
                'div',
                { staticClass: 'docs-page', attrs: { id: 'file-viewer' } },
                [
                  s('source-button', { attrs: { path: e.file.path, docs: e.docs } }),
                  e._v(' '),
                  s('div', { domProps: { innerHTML: e._s(e.html) } })
                ],
                1
              )
            : s('unknown-page', { staticClass: 'docs-page', attrs: { darkMode: e.darkMode } });
        },
        Os = [],
        Hs = { render: Ls, staticRenderFns: Os },
        Bs = Hs,
        Ws = s('VU/8'),
        Is = y,
        Js = Ws(Zs, Bs, !1, Is, null, null),
        Gs = Js.exports,
        zs = {
          name: 'type-link',
          props: ['docs', 'type'],
          computed: {
            typeName: function () {
              return 'function' === this.type[0] ? 'Function' : this.type[0];
            },
            link: function () {
              return this.docs.links[this.type[0]] ? this.docs.links[this.type[0]] : null;
            }
          }
        },
        Ks = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'span',
            { staticClass: 'docs-type-link' },
            [
              e.link
                ? 'object' == typeof e.link
                  ? s('router-link', { attrs: { to: e.link } }, [e._v(e._s(e.typeName))])
                  : s('a', { attrs: { href: e.link } }, [e._v(e._s(e.typeName))])
                : s('span', { attrs: { title: '*' === e.type[0] ? 'Any type' : null } }, [e._v(e._s(e.typeName))]),
              e.type[1] ? s('span', [e._v(e._s(e.type[1]))]) : e._e()
            ],
            1
          );
        },
        Qs = [],
        Ys = { render: Ks, staticRenderFns: Qs },
        Xs = Ys,
        er = s('VU/8'),
        tr = er(zs, Xs, !1, null, null, null),
        sr = tr.exports,
        rr = {
          name: 'types',
          props: ['names', 'variable', 'nullable', 'docs'],
          components: { TypeLink: sr },
          methods: { typeKey: p }
        },
        ar = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'span',
            { staticClass: 'docs-type' },
            [
              e._v('\n  ' + e._s(e.nullable ? '?' : '') + e._s(e.variable ? '...' : '')),
              e._l(e.names, function (t) {
                return s('type-link', { key: e.typeKey(t), attrs: { type: t, docs: e.docs } });
              })
            ],
            2
          );
        },
        or = [],
        nr = { render: ar, staticRenderFns: or },
        ir = nr,
        cr = s('VU/8'),
        lr = b,
        dr = cr(rr, ir, !1, lr, null, null),
        ur = dr.exports,
        pr = {
          name: 'param-table',
          props: ['params', 'docs'],
          components: { Types: ur },
          computed: {
            hasOptional: function () {
              return this.params.some(function (e) {
                return e.optional;
              });
            }
          },
          methods: {
            typeKey: p,
            paramDescription: function (e) {
              return A.a.filter('marked')(d(e.description, this.docs, this.$router, this.$route));
            },
            paramDefault: function (e) {
              return e.optional ? '<code>' + e.default + '</code>' : '';
            }
          }
        },
        mr = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s('div', { staticClass: 'param-table-wrapper' }, [
            s('table', { staticClass: 'param-table' }, [
              s('thead', [
                s('tr', [
                  s('th', [e._v('Parameter')]),
                  e._v(' '),
                  s('th', [e._v('Type')]),
                  e._v(' '),
                  e.hasOptional ? s('th', [e._v('Optional')]) : e._e(),
                  e._v(' '),
                  e.hasOptional ? s('th', [e._v('Default')]) : e._e(),
                  e._v(' '),
                  s('th', [e._v('Description')])
                ])
              ]),
              e._v(' '),
              s(
                'tbody',
                e._l(e.params, function (t) {
                  return s('tr', [
                    s('td', [e._v(e._s(t.name))]),
                    e._v(' '),
                    s(
                      'td',
                      e._l(t.type, function (r) {
                        return s('types', {
                          key: e.typeKey(r),
                          attrs: { names: r, variable: t.variable, nullable: t.nullable, docs: e.docs }
                        });
                      }),
                      1
                    ),
                    e._v(' '),
                    e.hasOptional ? s('td', [t.optional ? s('em', { staticClass: 'fa fa-check' }) : e._e()]) : e._e(),
                    e._v(' '),
                    e.hasOptional
                      ? s('td', [
                          t.optional && void 0 === t.default
                            ? s('em', [e._v('none')])
                            : s('span', { domProps: { innerHTML: e._s(e.paramDefault(t)) } })
                        ])
                      : e._e(),
                    e._v(' '),
                    s('td', { domProps: { innerHTML: e._s(e.paramDescription(t)) } })
                  ]);
                }),
                0
              )
            ])
          ]);
        },
        hr = [],
        vr = { render: mr, staticRenderFns: hr },
        fr = vr,
        gr = s('VU/8'),
        _r = k,
        yr = gr(pr, fr, !1, _r, null, null),
        br = yr.exports,
        kr = {
          name: 'class-overview',
          props: ['properties', 'methods', 'events'],
          methods: {
            scopedName: u,
            scroll: function (e) {
              var t = document.getElementById('doc-for-' + e);
              t.setAttribute('data-scrolled', !0),
                setTimeout(function () {
                  return t.setAttribute('data-scrolled', !1);
                }, 1e3),
                setTimeout(function () {
                  return t.removeAttribute('data-scrolled');
                }, 2e3),
                t.scrollIntoView(),
                window.scrollBy(0, -50);
            }
          }
        },
        wr = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s('div', { attrs: { id: 'class-overview' } }, [
            e.properties && e.properties.length > 0
              ? s(
                  'div',
                  { staticClass: 'col' },
                  [
                    s('div', { staticClass: 'title' }, [e._v('Properties')]),
                    e._v(' '),
                    s(
                      'transition-group',
                      { attrs: { name: 'animated-list', tag: 'ul' } },
                      e._l(e.properties, function (t) {
                        return s(
                          'li',
                          {
                            key: e.scopedName(t),
                            staticClass: 'animated-list-item',
                            on: {
                              click: function (s) {
                                e.scroll(e.scopedName(t));
                              }
                            }
                          },
                          [
                            s(
                              'router-link',
                              { attrs: { to: { name: 'docs-class', query: { scrollTo: e.scopedName(t) } } } },
                              [
                                e._v('\n          ' + e._s(t.name) + '\n          '),
                                'static' === t.scope ? s('span', { staticClass: 'small-badge' }, [e._v('S')]) : e._e(),
                                e._v(' '),
                                t.abstract ? s('span', { staticClass: 'small-badge' }, [e._v('A')]) : e._e(),
                                e._v(' '),
                                t.deprecated ? s('span', { staticClass: 'small-badge warn' }, [e._v('D')]) : e._e(),
                                e._v(' '),
                                'private' === t.access
                                  ? s('span', { staticClass: 'small-badge warn' }, [e._v('P')])
                                  : e._e()
                              ]
                            )
                          ],
                          1
                        );
                      }),
                      0
                    )
                  ],
                  1
                )
              : e._e(),
            e._v(' '),
            e.methods && e.methods.length > 0
              ? s(
                  'div',
                  { staticClass: 'col' },
                  [
                    s('div', { staticClass: 'title' }, [e._v('Methods')]),
                    e._v(' '),
                    s(
                      'transition-group',
                      { attrs: { name: 'animated-list', tag: 'ul' } },
                      e._l(e.methods, function (t) {
                        return s(
                          'li',
                          {
                            key: e.scopedName(t),
                            staticClass: 'animated-list-item',
                            on: {
                              click: function (s) {
                                e.scroll(e.scopedName(t));
                              }
                            }
                          },
                          [
                            s(
                              'router-link',
                              { attrs: { to: { name: 'docs-class', query: { scrollTo: e.scopedName(t) } } } },
                              [
                                e._v('\n          ' + e._s(t.name) + '\n          '),
                                'static' === t.scope ? s('span', { staticClass: 'small-badge' }, [e._v('S')]) : e._e(),
                                e._v(' '),
                                t.abstract ? s('span', { staticClass: 'small-badge' }, [e._v('A')]) : e._e(),
                                e._v(' '),
                                t.deprecated ? s('span', { staticClass: 'small-badge warn' }, [e._v('D')]) : e._e(),
                                e._v(' '),
                                'private' === t.access
                                  ? s('span', { staticClass: 'small-badge warn' }, [e._v('P')])
                                  : e._e()
                              ]
                            )
                          ],
                          1
                        );
                      }),
                      0
                    )
                  ],
                  1
                )
              : e._e(),
            e._v(' '),
            e.events && e.events.length > 0
              ? s('div', { staticClass: 'col' }, [
                  s('div', { staticClass: 'title' }, [e._v('Events')]),
                  e._v(' '),
                  s(
                    'ul',
                    e._l(e.events, function (t) {
                      return s(
                        'li',
                        {
                          on: {
                            click: function (s) {
                              return e.scroll('e-' + t.name);
                            }
                          }
                        },
                        [
                          s(
                            'router-link',
                            { attrs: { to: { name: 'docs-class', query: { scrollTo: 'e-' + t.name } } } },
                            [
                              e._v('\n          ' + e._s(t.name) + '\n          '),
                              t.deprecated ? s('span', { staticClass: 'small-badge warn' }, [e._v('D')]) : e._e()
                            ]
                          )
                        ],
                        1
                      );
                    }),
                    0
                  )
                ])
              : e._e()
          ]);
        },
        xr = [],
        Cr = { render: wr, staticRenderFns: xr },
        Tr = Cr,
        $r = s('VU/8'),
        Mr = w,
        Sr = $r(kr, Tr, !1, Mr, null, null),
        Pr = Sr.exports,
        Rr = {
          name: 'docs-see',
          props: ['see', 'docs'],
          computed: {
            parsed: function () {
              for (var e = new Array(this.see.length), t = 0; t < this.see.length; t++)
                e[t] = l(this.see[t], this.docs);
              return e;
            }
          }
        },
        Er = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s('p', { staticClass: 'docs-see' }, [
            e._v('\n  See also:\n\n  '),
            e.see.length > 1
              ? s(
                  'ul',
                  e._l(e.parsed, function (t) {
                    return s(
                      'li',
                      [
                        'object' == typeof t.link
                          ? s('router-link', { staticClass: 'docs-type', attrs: { to: t.link } }, [e._v(e._s(t.text))])
                          : 'string' == typeof t.link
                            ? s('a', { attrs: { href: t.link } }, [e._v(e._s(t.text))])
                            : s('span', [e._v(e._s(t.text))])
                      ],
                      1
                    );
                  }),
                  0
                )
              : s(
                  'span',
                  [
                    'object' == typeof e.parsed[0].link
                      ? s('router-link', { staticClass: 'docs-type', attrs: { to: e.parsed[0].link } }, [
                          e._v(e._s(e.parsed[0].text))
                        ])
                      : 'string' == typeof e.parsed[0].link
                        ? s('a', { attrs: { href: e.parsed[0].link } }, [e._v(e._s(e.parsed[0].text))])
                        : s('span', [e._v(e._s(e.parsed[0].text))])
                  ],
                  1
                )
          ]);
        },
        Fr = [],
        qr = { render: Er, staticRenderFns: Fr },
        Dr = qr,
        Ar = s('VU/8'),
        Ur = x,
        Nr = Ar(Rr, Dr, !1, Ur, null, null),
        jr = Nr.exports,
        Vr = {
          name: 'class-property',
          props: ['prop', 'docs'],
          components: { Types: ur, ParamTable: br, SourceButton: Vs, See: jr },
          computed: {
            description: function () {
              return A.a.filter('marked')(d(this.prop.description, this.docs, this.$router, this.$route));
            },
            scrollTo: function () {
              return ('static' === this.prop.scope ? 's-' : '') + this.prop.name;
            }
          },
          methods: { typeKey: p }
        },
        Zr = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'div',
            { staticClass: 'class-prop class-item', attrs: { id: 'doc-for-' + e.scrollTo } },
            [
              s('source-button', { attrs: { meta: e.prop.meta, docs: e.docs } }),
              e._v(' '),
              s(
                'h3',
                [
                  s('router-link', { attrs: { to: { name: 'docs-class', query: { scrollTo: e.scrollTo } } } }, [
                    e._v('.' + e._s(e.prop.name))
                  ])
                ],
                1
              ),
              e._v(' '),
              'static' === e.prop.scope
                ? s(
                    'span',
                    {
                      staticClass: 'badge',
                      attrs: { title: 'This property is on the class constructor function, not instances.' }
                    },
                    [e._v('Static')]
                  )
                : e._e(),
              e._v(' '),
              e.prop.readonly
                ? s('span', { staticClass: 'badge', attrs: { title: 'This property cannot be modified.' } }, [
                    e._v('Read-only')
                  ])
                : e._e(),
              e._v(' '),
              e.prop.deprecated
                ? s(
                    'span',
                    {
                      staticClass: 'badge warn',
                      attrs: { title: 'This property is deprecated, and may be removed in a future version.' }
                    },
                    [e._v('Deprecated')]
                  )
                : e._e(),
              e._v(' '),
              'private' === e.prop.access
                ? s(
                    'span',
                    {
                      staticClass: 'badge warn',
                      attrs: { title: 'This property is private, and may change or be removed at any time.' }
                    },
                    [e._v('Private')]
                  )
                : e._e(),
              e._v(' '),
              s(
                'div',
                { staticClass: 'class-item-details' },
                [
                  s('p', { domProps: { innerHTML: e._s(e.description) } }),
                  e._v(' '),
                  e.prop.props && e.prop.props.length > 0
                    ? s('param-table', { attrs: { params: e.prop.props, docs: e.docs } })
                    : e._e(),
                  e._v(' '),
                  s(
                    'div',
                    { staticClass: 'prop-type' },
                    [
                      e._v('\n      Type:\n      '),
                      e._l(e.prop.type, function (t) {
                        return s('types', {
                          key: e.typeKey(t),
                          attrs: { names: t, nullable: e.prop.nullable, docs: e.docs }
                        });
                      })
                    ],
                    2
                  ),
                  e._v(' '),
                  e.prop.default
                    ? s('div', { staticClass: 'prop-default' }, [
                        e._v('\n      Default: '),
                        s('code', [e._v(e._s(e.prop.default))])
                      ])
                    : e._e(),
                  e._v(' '),
                  e.prop.see ? s('see', { attrs: { see: e.prop.see, docs: e.docs } }) : e._e()
                ],
                1
              )
            ],
            1
          );
        },
        Lr = [],
        Or = { render: Zr, staticRenderFns: Lr },
        Hr = Or,
        Br = s('VU/8'),
        Wr = C,
        Ir = Br(Vr, Hr, !1, Wr, null, null),
        Jr = Ir.exports,
        Gr = {
          name: 'class-method',
          props: ['method', 'docs'],
          components: { Types: ur, TypeLink: sr, ParamTable: br, SourceButton: Vs, See: jr },
          computed: {
            params: function () {
              return this.method.params
                ? this.method.params.filter(function (e) {
                    return !e.name.includes('.');
                  })
                : null;
            },
            description: function () {
              return A.a.filter('marked')(d(this.method.description, this.docs, this.$router, this.$route));
            },
            emits: function () {
              var e = this;
              return this.method.emits
                ? this.method.emits.map(function (t) {
                    return l(t.replace(/:event/i, ''), e.docs);
                  })
                : null;
            },
            scrollTo: function () {
              return ('static' === this.method.scope ? 's-' : '') + this.method.name;
            }
          },
          methods: { typeKey: p }
        },
        zr = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'div',
            { staticClass: 'class-method class-item', attrs: { id: 'doc-for-' + e.scrollTo } },
            [
              s('source-button', { attrs: { meta: e.method.meta, docs: e.docs } }),
              e._v(' '),
              s(
                'h3',
                [
                  s(
                    'router-link',
                    { attrs: { to: { name: 'docs-class', query: { scrollTo: e.scrollTo } } } },
                    [
                      e._v('\n\t\t\t\t.' + e._s(e.method.name) + '('),
                      e._l(e.params, function (t) {
                        return s('span', { staticClass: 'method-param', class: t.optional ? 'optional' : '' }, [
                          e._v(e._s(t.variable ? '...' : '') + e._s(t.name))
                        ]);
                      }),
                      e._v(')\n\t\t\t')
                    ],
                    2
                  )
                ],
                1
              ),
              e._v(' '),
              'static' === e.method.scope
                ? s(
                    'span',
                    {
                      staticClass: 'badge',
                      attrs: { title: 'This method is on the class constructor function, not instances.' }
                    },
                    [e._v('Static')]
                  )
                : e._e(),
              e._v(' '),
              e.method.abstract
                ? s(
                    'span',
                    {
                      staticClass: 'badge',
                      attrs: { title: 'This method is abstract, and must be implemented in a child class.' }
                    },
                    [e._v('Abstract')]
                  )
                : e._e(),
              e._v(' '),
              e.method.deprecated
                ? s(
                    'span',
                    {
                      staticClass: 'badge warn',
                      attrs: { title: 'This method is deprecated, and may be removed in a future version.' }
                    },
                    [e._v('Deprecated')]
                  )
                : e._e(),
              e._v(' '),
              'private' === e.method.access
                ? s(
                    'span',
                    {
                      staticClass: 'badge warn',
                      attrs: { title: 'This method is private, and may change or be removed at any time.' }
                    },
                    [e._v('Private')]
                  )
                : e._e(),
              e._v(' '),
              s(
                'div',
                { staticClass: 'class-item-details' },
                [
                  s('p', { domProps: { innerHTML: e._s(e.description) } }),
                  e._v(' '),
                  e.method.params ? s('param-table', { attrs: { params: e.method.params, docs: e.docs } }) : e._e(),
                  e._v(' '),
                  s(
                    'div',
                    { staticClass: 'method-return' },
                    [
                      e._v('\n        Returns:\n        '),
                      e.method.returns
                        ? s(
                            'span',
                            e._l(e.method.returns.types || e.method.returns, function (t) {
                              return s('types', {
                                key: e.typeKey(t),
                                attrs: {
                                  names: t,
                                  variable: e.method.returns.variable,
                                  nullable: e.method.returns.nullable,
                                  docs: e.docs
                                }
                              });
                            }),
                            1
                          )
                        : s('type-link', { staticClass: 'docs-type', attrs: { type: ['void'], docs: e.docs } }),
                      e._v(' '),
                      e.method.returns && e.method.returns.description
                        ? s('p', [e._v(e._s(e.method.returns.description))])
                        : e._e()
                    ],
                    1
                  ),
                  e._v(' '),
                  e.method.throws
                    ? s(
                        'div',
                        { staticClass: 'method-throws' },
                        [
                          e._v('\n        Throws:\n        '),
                          e._l(e.method.throws, function (t) {
                            return s('types', { key: t, attrs: { names: t, docs: e.docs } });
                          })
                        ],
                        2
                      )
                    : e._e(),
                  e._v(' '),
                  e.emits
                    ? s(
                        'div',
                        { staticClass: 'method-emits' },
                        [
                          e._v('\n        Emits:\n        '),
                          e.emits.length > 1
                            ? s(
                                'ul',
                                e._l(e.emits, function (t) {
                                  return s(
                                    'li',
                                    [
                                      s('router-link', { staticClass: 'docs-type', attrs: { to: t.link } }, [
                                        e._v(e._s(t.text))
                                      ])
                                    ],
                                    1
                                  );
                                }),
                                0
                              )
                            : s('router-link', { staticClass: 'docs-type', attrs: { to: e.emits[0].link } }, [
                                e._v(e._s(e.emits[0].text))
                              ])
                        ],
                        1
                      )
                    : e._e(),
                  e._v(' '),
                  e.method.examples
                    ? s(
                        'div',
                        { staticClass: 'method-examples' },
                        [
                          e._v('\n\t\t\t\tExamples:\n\t\t\t\t'),
                          e._l(e.method.examples, function (t) {
                            return s('pre', [s('code', { staticClass: 'javascript' }, [e._v(e._s(t))])]);
                          })
                        ],
                        2
                      )
                    : e._e(),
                  e._v(' '),
                  e.method.see ? s('see', { attrs: { see: e.method.see, docs: e.docs } }) : e._e()
                ],
                1
              )
            ],
            1
          );
        },
        Kr = [],
        Qr = { render: zr, staticRenderFns: Kr },
        Yr = Qr,
        Xr = s('VU/8'),
        ea = T,
        ta = Xr(Gr, Yr, !1, ea, null, null),
        sa = ta.exports,
        ra = {
          name: 'class-event',
          props: ['event', 'docs'],
          components: { ParamTable: br, SourceButton: Vs, See: jr },
          computed: {
            description: function () {
              return A.a.filter('marked')(d(this.event.description, this.docs, this.$router, this.$route));
            }
          }
        },
        aa = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'div',
            { staticClass: 'class-event class-item', attrs: { id: 'doc-for-e-' + e.event.name } },
            [
              s('source-button', { attrs: { meta: e.event.meta, docs: e.docs } }),
              e._v(' '),
              s(
                'h3',
                [
                  s(
                    'router-link',
                    { attrs: { to: { name: 'docs-class', query: { scrollTo: 'e-' + e.event.name } } } },
                    [e._v(e._s(e.event.name))]
                  )
                ],
                1
              ),
              e._v(' '),
              e.event.deprecated
                ? s(
                    'span',
                    {
                      staticClass: 'badge warn',
                      attrs: { title: 'This event is deprecated, and may be removed in a future version.' }
                    },
                    [e._v('Deprecated')]
                  )
                : e._e(),
              e._v(' '),
              s(
                'div',
                { staticClass: 'class-item-details' },
                [
                  s('p', { domProps: { innerHTML: e._s(e.description) } }),
                  e._v(' '),
                  e.event.params && e.event.params.length > 0
                    ? s('param-table', { attrs: { params: e.event.params, docs: e.docs } })
                    : e._e(),
                  e._v(' '),
                  e.event.see ? s('see', { attrs: { see: e.event.see, docs: e.docs } }) : e._e()
                ],
                1
              )
            ],
            1
          );
        },
        oa = [],
        na = { render: aa, staticRenderFns: oa },
        ia = na,
        ca = s('VU/8'),
        la = $,
        da = ca(ra, ia, !1, la, null, null),
        ua = da.exports,
        pa = {
          name: 'class-viewer',
          props: ['docs', 'showPrivate', 'darkMode'],
          components: {
            TypeLink: sr,
            ParamTable: br,
            Overview: Pr,
            Property: Jr,
            Method: sa,
            Event: ua,
            SourceButton: Vs,
            See: jr
          },
          data: function () {
            var e = this;
            return (
              console.log(this.$route.params.class),
              {
                clarse: this.docs.classes.find(function (t) {
                  return t.name === e.$route.params.class;
                })
              }
            );
          },
          computed: {
            constructorParams: function () {
              return this.clarse.construct && this.clarse.construct.params
                ? this.clarse.construct.params.filter(function (e) {
                    return !e.name.includes('.');
                  })
                : null;
            },
            properties: function () {
              if (!this.clarse.props) return null;
              var e = void 0;
              return (
                (e = this.showPrivate
                  ? this.clarse.props
                  : this.clarse.props.filter(function (e) {
                      return 'private' !== e.access;
                    })),
                e.sort(function (e, t) {
                  return (('static' === e.scope ? 'ZZZ' : '') + e.name).localeCompare(
                    ('static' === t.scope ? 'ZZZ' : '') + t.name
                  );
                })
              );
            },
            methods: function () {
              if (!this.clarse.methods) return null;
              var e = void 0;
              return (
                (e = this.showPrivate
                  ? this.clarse.methods
                  : this.clarse.methods.filter(function (e) {
                      return 'private' !== e.access;
                    })),
                e.sort(function (e, t) {
                  return (('static' === e.scope ? 'ZZZ' : '') + e.name).localeCompare(
                    ('static' === t.scope ? 'ZZZ' : '') + t.name
                  );
                })
              );
            },
            description: function () {
              return A.a.filter('marked')(d(this.clarse.description, this.docs, this.$router, this.$route));
            }
          },
          methods: { scopedName: u },
          mounted: function () {
            var e = this;
            this.$nextTick(function () {
              var t = !0,
                s = !1,
                r = void 0;
              try {
                for (var a, o = X()(e.$el.querySelectorAll('pre code')); !(t = (a = o.next()).done); t = !0) {
                  i(a.value);
                }
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  !t && o.return && o.return();
                } finally {
                  if (s) throw r;
                }
              }
            });
          }
        },
        ma = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return e.clarse
            ? s(
                'div',
                { staticClass: 'docs-page', attrs: { id: 'class-viewer' } },
                [
                  s('source-button', { attrs: { meta: e.clarse.meta, docs: e.docs } }),
                  e._v(' '),
                  s('h1', [e._v(e._s(e.clarse.name))]),
                  e._v(' '),
                  s('p', { staticClass: 'class-name-extra' }, [
                    e.clarse.extends
                      ? s(
                          'span',
                          [e._v('extends '), s('type-link', { attrs: { type: e.clarse.extends, docs: e.docs } })],
                          1
                        )
                      : e._e(),
                    e._v(' '),
                    e.clarse.implements
                      ? s(
                          'span',
                          [e._v('implements '), s('type-link', { attrs: { type: e.clarse.implements, docs: e.docs } })],
                          1
                        )
                      : e._e()
                  ]),
                  e._v(' '),
                  e.clarse.abstract
                    ? s(
                        'span',
                        {
                          staticClass: 'badge class-badge',
                          attrs: { title: 'This class is abstract, and may not be instantiated itself.' }
                        },
                        [e._v('Abstract')]
                      )
                    : e._e(),
                  e._v(' '),
                  e.clarse.deprecated
                    ? s(
                        'span',
                        {
                          staticClass: 'badge class-badge warn',
                          attrs: { title: 'This class is deprecated, and may be removed in a future version.' }
                        },
                        [e._v('Deprecated')]
                      )
                    : e._e(),
                  e._v(' '),
                  'private' === e.clarse.access
                    ? s(
                        'span',
                        {
                          staticClass: 'badge class-badge warn',
                          attrs: { title: 'This class is private, and may change or be removed at any time.' }
                        },
                        [e._v('Private')]
                      )
                    : e._e(),
                  e._v(' '),
                  e.clarse.description
                    ? s('p', { staticClass: 'class-desc', domProps: { innerHTML: e._s(e.description) } })
                    : e._e(),
                  e._v(' '),
                  e.clarse.see ? s('see', { attrs: { see: e.clarse.see, docs: e.docs } }) : e._e(),
                  e._v(' '),
                  e.clarse.construct && (e.showPrivate || 'private' !== e.clarse.construct.access)
                    ? s(
                        'div',
                        { attrs: { id: 'class-constructor' } },
                        [
                          s('h2', [e._v('Constructor')]),
                          e._v(' '),
                          s('pre', [
                            s(
                              'code',
                              { staticClass: 'js' },
                              [
                                e._v('new ' + e._s(e.docs.global) + '.' + e._s(e.clarse.name) + '('),
                                e._l(e.constructorParams, function (t) {
                                  return s('span', { staticClass: 'constructor-param' }, [e._v(e._s(t.name))]);
                                }),
                                e._v(');')
                              ],
                              2
                            )
                          ]),
                          e._v(' '),
                          s('param-table', { attrs: { params: e.clarse.construct.params, docs: e.docs } })
                        ],
                        1
                      )
                    : e._e(),
                  e._v(' '),
                  s('overview', { attrs: { properties: e.properties, methods: e.methods, events: e.clarse.events } }),
                  e._v(' '),
                  e.properties && e.properties.length > 0 ? s('h2', [e._v('Properties')]) : e._e(),
                  e._v(' '),
                  e._l(e.properties, function (t) {
                    return s('property', { key: e.scopedName(t), attrs: { prop: t, docs: e.docs } });
                  }),
                  e._v(' '),
                  e.methods && e.methods.length > 0 ? s('h2', [e._v('Methods')]) : e._e(),
                  e._v(' '),
                  e._l(e.methods, function (t) {
                    return s('method', { key: e.scopedName(t), attrs: { method: t, docs: e.docs } });
                  }),
                  e._v(' '),
                  e.clarse.events && e.clarse.events.length > 0 ? s('h2', [e._v('Events')]) : e._e(),
                  e._v(' '),
                  e._l(e.clarse.events, function (t) {
                    return s('event', { key: 'e-' + t.name, attrs: { event: t, docs: e.docs } });
                  })
                ],
                2
              )
            : s('unknown-page', { staticClass: 'docs-page', attrs: { darkMode: e.darkMode } });
        },
        ha = [],
        va = { render: ma, staticRenderFns: ha },
        fa = va,
        ga = s('VU/8'),
        _a = M,
        ya = ga(pa, fa, !1, _a, null, null),
        ba = ya.exports,
        ka = {
          name: 'typedef-viewer',
          props: ['docs', 'darkMode'],
          components: { Types: ur, ParamTable: br, SourceButton: Vs, See: jr },
          data: function () {
            var e = this;
            return {
              typedef: this.docs.typedefs.find(function (t) {
                return t.name === e.$route.params.typedef;
              })
            };
          },
          computed: {
            description: function () {
              return A.a.filter('marked')(d(this.typedef.description, this.docs, this.$router, this.$route));
            },
            returnsDescription: function () {
              var e = this.typedef.returns;
              return e ? A.a.filter('marked')(d(e.description, this.docs, this.$router, this.$route)) : '';
            }
          },
          methods: { typeKey: p },
          mounted: function () {
            var e = this;
            this.$nextTick(function () {
              var t = !0,
                s = !1,
                r = void 0;
              try {
                for (var a, o = X()(e.$el.querySelectorAll('pre code')); !(t = (a = o.next()).done); t = !0) {
                  i(a.value);
                }
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  !t && o.return && o.return();
                } finally {
                  if (s) throw r;
                }
              }
            });
          }
        },
        wa = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return e.typedef
            ? s(
                'div',
                { staticClass: 'docs-page', attrs: { id: 'typedef-viewer' } },
                [
                  s('source-button', { attrs: { meta: e.typedef.meta, docs: e.docs } }),
                  e._v(' '),
                  s('h1', [e._v(e._s(e.typedef.name))]),
                  e._v(' '),
                  e.typedef.deprecated
                    ? s(
                        'span',
                        {
                          staticClass: 'badge warn',
                          attrs: { title: 'This typedef is deprecated, and may be removed in a future version.' }
                        },
                        [e._v('Deprecated')]
                      )
                    : e._e(),
                  e._v(' '),
                  'private' === e.typedef.access
                    ? s(
                        'span',
                        {
                          staticClass: 'badge class-badge warn',
                          attrs: { title: 'This typedef is private, and may change or be removed at any time.' }
                        },
                        [e._v('Private')]
                      )
                    : e._e(),
                  e._v(' '),
                  e.typedef.description
                    ? s('p', { staticClass: 'typedef-desc', domProps: { innerHTML: e._s(e.description) } })
                    : e._e(),
                  e._v(' '),
                  e.typedef.see ? s('see', { attrs: { see: e.typedef.see, docs: e.docs } }) : e._e(),
                  e._v(' '),
                  s('h2', [e._v('Types')]),
                  e._v(' '),
                  s(
                    'ul',
                    { attrs: { id: 'typedef-types' } },
                    e._l(e.typedef.type, function (t) {
                      return s('li', { key: e.typeKey(t) }, [s('types', { attrs: { names: t, docs: e.docs } })], 1);
                    }),
                    0
                  ),
                  e._v(' '),
                  e.typedef.props && e.typedef.props.length > 0
                    ? s(
                        'div',
                        { attrs: { id: 'typedef-props' } },
                        [
                          s('h2', [e._v('Properties')]),
                          e._v(' '),
                          s('param-table', { attrs: { params: e.typedef.props, docs: e.docs } })
                        ],
                        1
                      )
                    : e._e(),
                  e._v(' '),
                  e.typedef.params && e.typedef.params.length > 0
                    ? s(
                        'div',
                        { attrs: { id: 'typedef-params' } },
                        [
                          s('h2', [e._v('Parameters')]),
                          e._v(' '),
                          s('param-table', { attrs: { params: e.typedef.params, docs: e.docs } })
                        ],
                        1
                      )
                    : e._e(),
                  e._v(' '),
                  e.typedef.returns
                    ? s('div', { attrs: { id: 'typedef-returns' } }, [
                        s('h2', [e._v('Returns')]),
                        e._v(' '),
                        s(
                          'p',
                          { attrs: { id: 'typedef-returns-types' } },
                          e._l(e.typedef.returns.types || e.typedef.returns, function (t) {
                            return s('types', {
                              key: e.typeKey(t),
                              attrs: {
                                names: t,
                                variable: e.typedef.returns.variable,
                                nullable: e.typedef.returns.nullable,
                                docs: e.docs
                              }
                            });
                          }),
                          1
                        ),
                        e._v(' '),
                        e.typedef.returns.description
                          ? s('p', { domProps: { innerHTML: e._s(e.returnsDescription) } })
                          : e._e()
                      ])
                    : e._e()
                ],
                1
              )
            : s('unknown-page', { staticClass: 'docs-page', attrs: { darkMode: e.darkMode } });
        },
        xa = [],
        Ca = { render: wa, staticRenderFns: xa },
        Ta = Ca,
        $a = s('VU/8'),
        Ma = S,
        Sa = $a(ka, Ta, !1, Ma, null, null),
        Pa = Sa.exports,
        Ra = s('BDm9'),
        Ea = s.n(Ra),
        Fa = {
          props: ['results', 'showScores', 'searchTerm'],
          methods: {
            highlightName: function (e) {
              return e.replace(this.searchRegex, function (e) {
                return '<strong>' + e + '</strong>';
              });
            }
          },
          computed: {
            searchRegex: function () {
              return new RegExp(this.searchTerm, 'ig');
            }
          }
        },
        qa = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'transition-group',
            { staticClass: 'results-list', attrs: { name: 'animated-list', tag: 'ul' } },
            e._l(e.results, function (t) {
              return s(
                'li',
                { key: t.item.key || t.item.fullName || t.item.name, staticClass: 'animated-list-item' },
                [
                  e.showScores
                    ? s('span', { staticClass: 'score' }, [e._v(e._s(Math.round(100 * (1 - t.score))) + '%')])
                    : e._e(),
                  e._v(' '),
                  s('router-link', { attrs: { to: t.item.route } }, [
                    s('span', { staticClass: 'badge', attrs: { title: t.item.type } }, [e._v(e._s(t.item.type[0]))]),
                    e._v(' '),
                    s('span', { domProps: { innerHTML: e._s(e.highlightName(t.item.fullName || t.item.name)) } }),
                    e._v(e._s('Method' === t.item.type ? '()' : '') + '\n    ')
                  ])
                ],
                1
              );
            }),
            0
          );
        },
        Da = [],
        Aa = { render: qa, staticRenderFns: Da },
        Ua = Aa,
        Na = s('VU/8'),
        ja = P,
        Va = Na(Fa, Ua, !1, ja, null, null),
        Za = Va.exports,
        La = {
          name: 'docs-search',
          props: ['docs', 'showPrivate'],
          components: { SearchResults: Za },
          data: function () {
            var e = { classes: !0, props: !0, methods: !0, events: !0, typedefs: !0 };
            return { toggles: e, search: this.$route.query.q, showScores: !1, fuse: this.buildFuse(e) };
          },
          computed: {
            results: function () {
              var e = this.fuse.search(this.search),
                t = !0,
                s = !1,
                r = void 0;
              try {
                for (var a, o = X()(e); !(t = (a = o.next()).done); t = !0) {
                  var n = a.value;
                  'Class' !== n.item.type
                    ? 'Property' !== n.item.type && 'Method' !== n.item.type
                      ? 'Event' !== n.item.type
                        ? 'Typedef' !== n.item.type ||
                          (n.item.route = { name: 'docs-typedef', params: { typedef: n.item.name } })
                        : ((n.item.key = 'e-' + n.item.parent + '#' + n.item.name),
                          (n.item.fullName = R(n.item, n.item.parent)),
                          (n.item.route = {
                            name: 'docs-class',
                            params: { class: n.item.parent },
                            query: { scrollTo: 'e-' + n.item.name }
                          }))
                      : ((n.item.fullName = R(n.item, n.item.parent)),
                        (n.item.route = {
                          name: 'docs-class',
                          params: { class: n.item.parent },
                          query: { scrollTo: u(n.item) }
                        }))
                    : (n.item.route = { name: 'docs-class', params: { class: n.item.name } });
                }
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  !t && o.return && o.return();
                } finally {
                  if (s) throw r;
                }
              }
              for (var i = 0; i < e.length; ) {
                var c = e[i];
                if ('Property' === c.item.type || 'Method' === c.item.type || 'Event' === c.item.type) {
                  var l = [],
                    d = !0,
                    p = !1,
                    m = void 0;
                  try {
                    for (var h, v = X()(c.matches); !(d = (h = v.next()).done); d = !0) {
                      var f = h.value;
                      l.push(f.key);
                    }
                  } catch (e) {
                    (p = !0), (m = e);
                  } finally {
                    try {
                      !d && v.return && v.return();
                    } finally {
                      if (p) throw m;
                    }
                  }
                  if (2 === l.length && l.includes('parent') && l.includes('fullName')) {
                    e.splice(i, 1);
                    continue;
                  }
                }
                i++;
              }
              return e;
            },
            fullMatches: function () {
              return this.results.filter(function (e) {
                return 100 === Math.round(100 * (1 - e.score));
              });
            },
            partialMatches: function () {
              return this.results.filter(function (e) {
                return 100 !== Math.round(100 * (1 - e.score));
              });
            },
            toggleScoresLabel: function () {
              return 'Scores are ' + (this.showScores ? 'shown' : 'hidden') + '. Click to toggle.';
            }
          },
          methods: {
            toggleScores: function () {
              this.showScores = !this.showScores;
            },
            buildFuse: function (e) {
              var t = [],
                s = !0,
                r = !1,
                a = void 0;
              try {
                for (var o, n = X()(this.docs.classes); !(s = (o = n.next()).done); s = !0) {
                  var i = o.value;
                  if (this.showPrivate || 'private' !== i.access) {
                    if (
                      (e.classes &&
                        t.push({
                          type: 'Class',
                          parent: i.name,
                          name: i.name,
                          fullName: i.name,
                          scope: i.scope,
                          access: i.access,
                          route: null
                        }),
                      i.props && e.props)
                    ) {
                      var c = !0,
                        l = !1,
                        d = void 0;
                      try {
                        for (var u, p = X()(i.props); !(c = (u = p.next()).done); c = !0) {
                          var m = u.value;
                          (this.showPrivate || 'private' !== m.access) &&
                            t.push({
                              type: 'Property',
                              parent: i.name,
                              name: m.name,
                              fullName: R(m, i.name),
                              scope: m.scope,
                              access: m.access,
                              route: null
                            });
                        }
                      } catch (e) {
                        (l = !0), (d = e);
                      } finally {
                        try {
                          !c && p.return && p.return();
                        } finally {
                          if (l) throw d;
                        }
                      }
                    }
                    if (i.methods && e.methods) {
                      var h = !0,
                        v = !1,
                        f = void 0;
                      try {
                        for (var g, _ = X()(i.methods); !(h = (g = _.next()).done); h = !0) {
                          var y = g.value;
                          (this.showPrivate || 'private' !== y.access) &&
                            t.push({
                              type: 'Method',
                              parent: i.name,
                              name: y.name,
                              fullName: R(y, i.name),
                              scope: y.scope,
                              access: y.access,
                              route: null
                            });
                        }
                      } catch (e) {
                        (v = !0), (f = e);
                      } finally {
                        try {
                          !h && _.return && _.return();
                        } finally {
                          if (v) throw f;
                        }
                      }
                    }
                    if (i.events && e.events) {
                      var b = !0,
                        k = !1,
                        w = void 0;
                      try {
                        for (var x, C = X()(i.events); !(b = (x = C.next()).done); b = !0) {
                          var T = x.value;
                          (this.showPrivate || 'private' !== T.access) &&
                            t.push({
                              type: 'Event',
                              parent: i.name,
                              name: T.name,
                              fullName: i.name + '#' + T.name,
                              scope: T.scope,
                              access: T.access,
                              key: null,
                              route: null
                            });
                        }
                      } catch (e) {
                        (k = !0), (w = e);
                      } finally {
                        try {
                          !b && C.return && C.return();
                        } finally {
                          if (k) throw w;
                        }
                      }
                    }
                  }
                }
              } catch (e) {
                (r = !0), (a = e);
              } finally {
                try {
                  !s && n.return && n.return();
                } finally {
                  if (r) throw a;
                }
              }
              if (e.typedefs) {
                var $ = !0,
                  M = !1,
                  S = void 0;
                try {
                  for (var P, E = X()(this.docs.typedefs); !($ = (P = E.next()).done); $ = !0) {
                    var F = P.value;
                    (this.showPrivate || 'private' !== F.access) &&
                      t.push({
                        type: 'Typedef',
                        parent: F.name,
                        name: F.name,
                        fullName: F.name,
                        scope: F.scope,
                        access: F.access,
                        route: null
                      });
                  }
                } catch (e) {
                  (M = !0), (S = e);
                } finally {
                  try {
                    !$ && E.return && E.return();
                  } finally {
                    if (M) throw S;
                  }
                }
              }
              return new Ea.a(t, {
                keys: [
                  { name: 'name', weight: 0.5 },
                  { name: 'parent', weight: 0.2 },
                  { name: 'fullName', weight: 0.3 }
                ],
                shouldSort: !0,
                includeScore: !0,
                includeMatches: !0,
                threshold: 0.4,
                minMatchCharLength: 3
              });
            }
          },
          watch: {
            $route: function (e) {
              this.search = e.query.q;
            },
            search: function (e) {
              this.$route.query.q !== e &&
                (this.$route.query.q
                  ? this.$router.replace({ name: 'docs-search', query: { q: e } })
                  : this.$router.push({ name: 'docs-search', query: { q: e } }));
            },
            toggles: {
              deep: !0,
              handler: function () {
                this.fuse = this.buildFuse(this.toggles);
              }
            },
            showPrivate: function () {
              this.fuse = this.buildFuse(this.toggles);
            }
          }
        },
        Oa = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'div',
            { staticClass: 'docs-page', attrs: { id: 'docs-search' } },
            [
              s('em', {
                class: 'fa fa-bar-chart ' + (e.showScores ? '' : 'disabled'),
                attrs: { id: 'show-scores', title: e.toggleScoresLabel },
                on: { click: e.toggleScores }
              }),
              e._v(' '),
              s('h1', [e._v('Search')]),
              e._v(' '),
              s('input', {
                directives: [
                  {
                    name: 'model',
                    rawName: 'v-model.trim',
                    value: e.search,
                    expression: 'search',
                    modifiers: { trim: !0 }
                  }
                ],
                attrs: { type: 'search' },
                domProps: { value: e.search },
                on: {
                  input: function (t) {
                    t.target.composing || (e.search = t.target.value.trim());
                  },
                  blur: function (t) {
                    return e.$forceUpdate();
                  }
                }
              }),
              e._v(' '),
              s('div', { attrs: { id: 'toggles' } }, [
                s('label', [
                  s('input', {
                    directives: [
                      { name: 'model', rawName: 'v-model', value: e.toggles.classes, expression: "toggles['classes']" }
                    ],
                    attrs: { type: 'checkbox' },
                    domProps: {
                      checked: Array.isArray(e.toggles.classes) ? e._i(e.toggles.classes, null) > -1 : e.toggles.classes
                    },
                    on: {
                      change: function (t) {
                        var s = e.toggles.classes,
                          r = t.target,
                          a = !!r.checked;
                        if (Array.isArray(s)) {
                          var o = e._i(s, null);
                          r.checked
                            ? o < 0 && e.$set(e.toggles, 'classes', s.concat([null]))
                            : o > -1 && e.$set(e.toggles, 'classes', s.slice(0, o).concat(s.slice(o + 1)));
                        } else e.$set(e.toggles, 'classes', a);
                      }
                    }
                  }),
                  e._v(' Classes')
                ]),
                e._v(' '),
                s('label', [
                  s('input', {
                    directives: [
                      { name: 'model', rawName: 'v-model', value: e.toggles.props, expression: "toggles['props']" }
                    ],
                    attrs: { type: 'checkbox' },
                    domProps: {
                      checked: Array.isArray(e.toggles.props) ? e._i(e.toggles.props, null) > -1 : e.toggles.props
                    },
                    on: {
                      change: function (t) {
                        var s = e.toggles.props,
                          r = t.target,
                          a = !!r.checked;
                        if (Array.isArray(s)) {
                          var o = e._i(s, null);
                          r.checked
                            ? o < 0 && e.$set(e.toggles, 'props', s.concat([null]))
                            : o > -1 && e.$set(e.toggles, 'props', s.slice(0, o).concat(s.slice(o + 1)));
                        } else e.$set(e.toggles, 'props', a);
                      }
                    }
                  }),
                  e._v(' Properties')
                ]),
                e._v(' '),
                s('label', [
                  s('input', {
                    directives: [
                      { name: 'model', rawName: 'v-model', value: e.toggles.methods, expression: "toggles['methods']" }
                    ],
                    attrs: { type: 'checkbox' },
                    domProps: {
                      checked: Array.isArray(e.toggles.methods) ? e._i(e.toggles.methods, null) > -1 : e.toggles.methods
                    },
                    on: {
                      change: function (t) {
                        var s = e.toggles.methods,
                          r = t.target,
                          a = !!r.checked;
                        if (Array.isArray(s)) {
                          var o = e._i(s, null);
                          r.checked
                            ? o < 0 && e.$set(e.toggles, 'methods', s.concat([null]))
                            : o > -1 && e.$set(e.toggles, 'methods', s.slice(0, o).concat(s.slice(o + 1)));
                        } else e.$set(e.toggles, 'methods', a);
                      }
                    }
                  }),
                  e._v(' Methods')
                ]),
                e._v(' '),
                s('label', [
                  s('input', {
                    directives: [
                      { name: 'model', rawName: 'v-model', value: e.toggles.events, expression: "toggles['events']" }
                    ],
                    attrs: { type: 'checkbox' },
                    domProps: {
                      checked: Array.isArray(e.toggles.events) ? e._i(e.toggles.events, null) > -1 : e.toggles.events
                    },
                    on: {
                      change: function (t) {
                        var s = e.toggles.events,
                          r = t.target,
                          a = !!r.checked;
                        if (Array.isArray(s)) {
                          var o = e._i(s, null);
                          r.checked
                            ? o < 0 && e.$set(e.toggles, 'events', s.concat([null]))
                            : o > -1 && e.$set(e.toggles, 'events', s.slice(0, o).concat(s.slice(o + 1)));
                        } else e.$set(e.toggles, 'events', a);
                      }
                    }
                  }),
                  e._v(' Events')
                ]),
                e._v(' '),
                s('label', [
                  s('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: e.toggles.typedefs,
                        expression: "toggles['typedefs']"
                      }
                    ],
                    attrs: { type: 'checkbox' },
                    domProps: {
                      checked: Array.isArray(e.toggles.typedefs)
                        ? e._i(e.toggles.typedefs, null) > -1
                        : e.toggles.typedefs
                    },
                    on: {
                      change: function (t) {
                        var s = e.toggles.typedefs,
                          r = t.target,
                          a = !!r.checked;
                        if (Array.isArray(s)) {
                          var o = e._i(s, null);
                          r.checked
                            ? o < 0 && e.$set(e.toggles, 'typedefs', s.concat([null]))
                            : o > -1 && e.$set(e.toggles, 'typedefs', s.slice(0, o).concat(s.slice(o + 1)));
                        } else e.$set(e.toggles, 'typedefs', a);
                      }
                    }
                  }),
                  e._v(' Typedefs')
                ])
              ]),
              e._v(' '),
              s('transition', { attrs: { name: 'fade', mode: 'out-in' } }, [
                e.search && e.search.length >= 2
                  ? s(
                      'div',
                      [
                        s(
                          'transition',
                          { attrs: { name: 'fade', mode: 'out-in' } },
                          [
                            e.results.length
                              ? s('transition-group', { attrs: { name: 'fade' } }, [
                                  e.fullMatches.length
                                    ? s(
                                        'div',
                                        {
                                          key: 'fullMatches',
                                          class: {
                                            'results-separator': e.fullMatches.length && e.partialMatches.length
                                          }
                                        },
                                        [
                                          s('h2', [e._v('Results for "' + e._s(e.search) + '"')]),
                                          e._v(' '),
                                          s('search-results', {
                                            attrs: {
                                              results: e.fullMatches,
                                              showScores: e.showScores,
                                              searchTerm: e.search
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : e._e(),
                                  e._v(' '),
                                  e.partialMatches.length
                                    ? s(
                                        'div',
                                        { key: 'partialMatches' },
                                        [
                                          s('h2', [e._v('Similar results for "' + e._s(e.search) + '"')]),
                                          e._v(' '),
                                          s('search-results', {
                                            attrs: {
                                              results: e.partialMatches,
                                              showScores: e.showScores,
                                              searchTerm: e.search
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : e._e()
                                ])
                              : s('p', [e._v('No results.')])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : s('p', { key: 'short' }, [e._v('Your search query must be at least two characters.')])
              ])
            ],
            1
          );
        },
        Ha = [],
        Ba = { render: Oa, staticRenderFns: Ha },
        Wa = Ba,
        Ia = s('VU/8'),
        Ja = E,
        Ga = Ia(La, Wa, !1, Ja, null, null),
        za = Ga.exports;
      A.a.use(nt.a);
      var Ka = new nt.a({
          routes: [
            { path: '/', name: 'home', component: xt },
            {
              path: '/docs',
              name: 'docs',
              component: Gt,
              children: [
                {
                  path: ':source',
                  name: 'docs-source',
                  component: ps,
                  children: [
                    {
                      path: ':tag',
                      name: 'docs-tag',
                      component: Rs,
                      children: [
                        { path: 'search', name: 'docs-search', component: za },
                        { path: 'class/:class', name: 'docs-class', component: ba },
                        { path: 'typedef/:typedef', name: 'docs-typedef', component: Pa },
                        { path: ':category/:file', name: 'docs-file', component: Gs }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              path: '/!',
              redirect: { name: 'home' },
              children: [
                {
                  path: 'docs',
                  redirect: { name: 'docs' },
                  children: [
                    {
                      path: 'tag/:tag',
                      redirect: function (e) {
                        return {
                          name: 'docs-tag',
                          params: { source: 'main', tag: e.params.tag },
                          query: { scrollTo: e.query.scrollto }
                        };
                      },
                      children: [
                        {
                          path: 'file/:category/:file',
                          redirect: function (e) {
                            return {
                              name: 'docs-file',
                              params: {
                                source: 'main',
                                tag: e.params.tag,
                                category: e.params.category,
                                file: e.params.file
                              },
                              query: { scrollTo: e.query.scrollto }
                            };
                          }
                        },
                        {
                          path: 'class/:class',
                          redirect: function (e) {
                            return {
                              name: 'docs-class',
                              params: { source: 'main', tag: e.params.tag, class: e.params.class },
                              query: { scrollTo: e.query.scrollto }
                            };
                          }
                        },
                        {
                          path: 'typedef/:typedef',
                          redirect: function (e) {
                            return {
                              name: 'docs-typedef',
                              params: { source: 'main', tag: e.params.tag, typedef: e.params.typedef },
                              query: { scrollTo: e.query.scrollto }
                            };
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { path: '*', component: rs }
          ]
        }),
        Qa = { name: 'container' },
        Ya = function () {
          var e = this,
            t = e.$createElement;
          return (e._self._c || t)('div', { staticClass: 'container' }, [e._t('default')], 2);
        },
        Xa = [],
        eo = { render: Ya, staticRenderFns: Xa },
        to = eo,
        so = s('VU/8'),
        ro = F,
        ao = so(Qa, to, !1, ro, null, null),
        oo = ao.exports,
        no = { name: 'slide' },
        io = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s('div', { staticClass: 'slide' }, [s('container', [e._t('default')], 2)], 1);
        },
        co = [],
        lo = { render: io, staticRenderFns: co },
        uo = lo,
        po = s('VU/8'),
        mo = q,
        ho = po(no, uo, !1, mo, null, null),
        vo = ho.exports,
        fo = { name: 'loading' },
        go = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
          return e._m(0);
        },
        _o = [
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s('div', { staticClass: 'sk-folding-cube' }, [
              s('div', { staticClass: 'sk-cube1 sk-cube' }),
              e._v(' '),
              s('div', { staticClass: 'sk-cube2 sk-cube' }),
              e._v(' '),
              s('div', { staticClass: 'sk-cube4 sk-cube' }),
              e._v(' '),
              s('div', { staticClass: 'sk-cube3 sk-cube' })
            ]);
          }
        ],
        yo = { render: go, staticRenderFns: _o },
        bo = yo,
        ko = s('VU/8'),
        wo = D,
        xo = ko(fo, bo, !1, wo, null, null),
        Co = xo.exports,
        To = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s('div', [
            s('h1', [e._v('Unknown ' + e._s(e.type || 'page'))]),
            e._v(' '),
            s('p', [e._v("This page doesn't actually exist. Oh no!")])
          ]);
        },
        $o = [],
        Mo = { render: To, staticRenderFns: $o },
        So = Mo,
        Po = s('VU/8'),
        Ro = Po(null, So, !1, null, null, null),
        Eo = Ro.exports;
      (A.a.config.productionTip = !1),
        s('srIy'),
        A.a.component('container', oo),
        A.a.component('slide', vo),
        A.a.component('loading', Co),
        A.a.component('unknown-page', Eo),
        A.a.directive('hljs', i),
        A.a.filter('marked', function (e) {
          return (
            e || (e = '**Documentation missing.**'),
            (e = e.replace(/<(info|warn)>([\s\S]+)<\/\1>/gi, '<div class="$1">$2</div>')),
            N()(e)
          );
        }),
        new A.a({
          el: '#app',
          router: Ka,
          render: function (e) {
            return e(ot);
          }
        });
    },
    PBIT: function (e, t) {},
    QUVa: function (e, t) {},
    'R+Wx': function (e, t) {},
    SQv5: function (e, t) {},
    SVOi: function (e, t) {},
    frPy: function (e, t) {},
    i34D: function (e, t) {},
    n1Fm: function (e, t) {},
    pgmh: function (e, t) {},
    q4Z2: function (e, t) {},
    qvys: function (e, t) {},
    srIy: function (e, t) {},
    t2Up: function (e, t) {},
    t5H2: function (e, t) {},
    tzlZ: function (e, t) {}
  },
  ['NHnr']
);
//# sourceMappingURL=app.b6a74653c8b49b51d984.js.map
