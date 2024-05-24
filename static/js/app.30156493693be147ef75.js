webpackJsonp(
  [1],
  {
    '/Muf': function (e, t) {},
    '5onU': function (e, t) {
      e.exports = {
        extends: 'tslint:recommended',
        rulesDirectory: [],
        rules: {
          'class-name': !1,
          'new-parens': !0,
          'no-arg': !0,
          'no-bitwise': !0,
          'no-conditional-assignment': !0,
          'no-consecutive-blank-lines': !1,
          'no-console': { severity: 'warning', options: ['debug', 'info', 'log', 'time', 'timeEnd', 'trace'] },
          'max-classes-per-file': 'off'
        },
        jsRules: {}
      };
    },
    '809j': function (e, t) {},
    '8DNi': function (e, t) {},
    '9SiY': function (e, t) {},
    Aw40: function (e, t) {},
    C0Js: function (e, t) {},
    'CnQ+': function (e, t) {
      e.exports = {
        name: 'hypixel-api-reborn',
        version: '4.1.0',
        description: 'This is the only Hypixel API wrapper for Node.js with intellisense support',
        main: './src/index.js',
        types: './typings/index.d.ts',
        keywords: ['node', 'client', 'hypixel', 'api', 'hypixel-api'],
        bugs: { url: 'https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/issues' },
        scripts: {
          tslint: 'tslint typings/index.d.ts',
          eslint: 'eslint src',
          'eslint:fix': 'eslint src --fix',
          test: 'npm run tslint && npm run eslint',
          docgen: 'docgen -s src -o master.json',
          prepublishOnly: 'npm run test && npm run docgen'
        },
        author: 'StavZ',
        dependencies: {
          'node-fetch': '^2.6.1',
          'object-path': '^0.11.5',
          'prismarine-nbt': '^1.3.0',
          'rss-parser': '^3.10.0'
        },
        license: 'MIT',
        readme: 'https://github.com/Hypixel-API-Reborn/hypixel-api-reborn/blob/master/README.md',
        repository: { url: 'https://github.com/Hypixel-API-Reborn/hypixel-api-reborn' },
        publisher: 'StavZ',
        devDependencies: {
          '@types/node': '^14.14.7',
          'discord.js-docgen': 'git+https://github.com/discordjs/docgen.git',
          eslint: '^7.13.0',
          'eslint-config-standard': '^14.1.1',
          'eslint-plugin-import': '^2.22.1',
          'eslint-plugin-node': '^11.1.0',
          'eslint-plugin-promise': '^4.2.1',
          'eslint-plugin-standard': '^4.1.0',
          path: '^0.12.7',
          tslint: '^6.1.3',
          typescript: '^4.0.5'
        }
      };
    },
    CzDu: function (e, t, s) {
      function r(e) {
        return s(i(e));
      }
      function i(e) {
        var t = a[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t;
      }
      var a = {
        './master.json': 'aovo',
        './package-lock.json': 'GV8Z',
        './package.json': 'CnQ+',
        './tslint.json': '5onU'
      };
      (r.keys = function () {
        return Object.keys(a);
      }),
        (r.resolve = i),
        (e.exports = r),
        (r.id = 'CzDu');
    },
    EFfJ: function (e, t) {},
    GV8Z: function (e, t) {
      e.exports = {
        name: 'hypixel-api-reborn',
        version: '4.1.0',
        lockfileVersion: 1,
        requires: !0,
        dependencies: {
          '@babel/code-frame': {
            version: '7.10.4',
            resolved: 'https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.10.4.tgz',
            integrity:
              'sha512-vG6SvB6oYEhvgisZNFRmRCUkLz11c7rp+tbNTynGqc6mS1d5ATd/sGyV6W0KZZnXRKMTzZDRgQT3Ou9jhpAfUg==',
            dev: !0,
            requires: { '@babel/highlight': '^7.10.4' }
          },
          '@babel/helper-validator-identifier': {
            version: '7.10.4',
            resolved:
              'https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.10.4.tgz',
            integrity:
              'sha512-3U9y+43hz7ZM+rzG24Qe2mufW5KhvFg/NhnNph+i9mgCtdTCtMJuI1TMkrIUiK7Ix4PYlRF9I5dhqaLYA/ADXw==',
            dev: !0
          },
          '@babel/highlight': {
            version: '7.10.4',
            resolved: 'https://registry.npmjs.org/@babel/highlight/-/highlight-7.10.4.tgz',
            integrity:
              'sha512-i6rgnR/YgPEQzZZnbTHHuZdlE8qyoBNalD6F+q4vAFlcMEcqmkoG+mPqJYJCo63qPf74+Y1UZsl3l6f7/RIkmA==',
            dev: !0,
            requires: { '@babel/helper-validator-identifier': '^7.10.4', chalk: '^2.0.0', 'js-tokens': '^4.0.0' }
          },
          '@babel/parser': {
            version: '7.12.10',
            resolved: 'https://registry.npmjs.org/@babel/parser/-/parser-7.12.10.tgz',
            integrity:
              'sha512-PJdRPwyoOqFAWfLytxrWwGrAxghCgh/yTNCYciOz8QgjflA7aZhECPZAa2VUedKg2+QMWkI0L9lynh2SNmNEgA==',
            dev: !0
          },
          '@eslint/eslintrc': {
            version: '0.2.2',
            resolved: 'https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-0.2.2.tgz',
            integrity:
              'sha512-EfB5OHNYp1F4px/LI/FEnGylop7nOqkQ1LRzCM0KccA2U8tvV8w01KBv37LbO7nW4H+YhKyo2LcJhRwjjV17QQ==',
            dev: !0,
            requires: {
              ajv: '^6.12.4',
              debug: '^4.1.1',
              espree: '^7.3.0',
              globals: '^12.1.0',
              ignore: '^4.0.6',
              'import-fresh': '^3.2.1',
              'js-yaml': '^3.13.1',
              lodash: '^4.17.19',
              minimatch: '^3.0.4',
              'strip-json-comments': '^3.1.1'
            },
            dependencies: {
              espree: {
                version: '7.3.1',
                resolved: 'https://registry.npmjs.org/espree/-/espree-7.3.1.tgz',
                integrity:
                  'sha512-v3JCNCE64umkFpmkFGqzVKsOT0tN1Zr+ueqLZfpV1Ob8e+CEgPWa+OxCoGH3tnhimMKIaBm4m/vaRpJ/krRz2g==',
                dev: !0,
                requires: { acorn: '^7.4.0', 'acorn-jsx': '^5.3.1', 'eslint-visitor-keys': '^1.3.0' }
              }
            }
          },
          '@types/json5': {
            version: '0.0.29',
            resolved: 'https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz',
            integrity: 'sha1-7ihweulOEdK4J7y+UnC86n8+ce4=',
            dev: !0
          },
          '@types/node': {
            version: '14.14.13',
            resolved: 'https://registry.npmjs.org/@types/node/-/node-14.14.13.tgz',
            integrity:
              'sha512-vbxr0VZ8exFMMAjCW8rJwaya0dMCDyYW2ZRdTyjtrCvJoENMpdUHOT/eTzvgyA5ZnqRZ/sI0NwqAxNHKYokLJQ==',
            dev: !0
          },
          acorn: {
            version: '7.4.1',
            resolved: 'https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz',
            integrity:
              'sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==',
            dev: !0
          },
          'acorn-jsx': {
            version: '5.3.1',
            resolved: 'https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.1.tgz',
            integrity:
              'sha512-K0Ptm/47OKfQRpNQ2J/oIN/3QYiK6FwW+eJbILhsdxh2WTLdl+30o8aGdTbm5JbffpFFAg/g+zi1E+jvJha5ng==',
            dev: !0
          },
          ajv: {
            version: '6.12.6',
            resolved: 'https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz',
            integrity:
              'sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==',
            requires: {
              'fast-deep-equal': '^3.1.1',
              'fast-json-stable-stringify': '^2.0.0',
              'json-schema-traverse': '^0.4.1',
              'uri-js': '^4.2.2'
            }
          },
          'ansi-colors': {
            version: '4.1.1',
            resolved: 'https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.1.tgz',
            integrity:
              'sha512-JoX0apGbHaUJBNl6yF+p6JAFYZ666/hhCGKN5t9QFjbJQKUU/g8MNbFDbvfrgKXvI1QpZplPOnwIo99lX/AAmA==',
            dev: !0
          },
          'ansi-escape-sequences': {
            version: '4.1.0',
            resolved: 'https://registry.npmjs.org/ansi-escape-sequences/-/ansi-escape-sequences-4.1.0.tgz',
            integrity:
              'sha512-dzW9kHxH011uBsidTXd14JXgzye/YLb2LzeKZ4bsgl/Knwx8AtbSFkkGxagdNOoh0DlqHCmfiEjWKBaqjOanVw==',
            dev: !0,
            requires: { 'array-back': '^3.0.1' },
            dependencies: {
              'array-back': {
                version: '3.1.0',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-3.1.0.tgz',
                integrity:
                  'sha512-TkuxA4UCOvxuDK6NZYXCalszEzj+TLszyASooky+i742l9TqsOdYCMJJupxRic61hwquNtppB3hgcuq9SVSH1Q==',
                dev: !0
              }
            }
          },
          'ansi-escapes': {
            version: '4.3.1',
            resolved: 'https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.1.tgz',
            integrity:
              'sha512-JWF7ocqNrp8u9oqpgV+wH5ftbt+cfvv+PTjOvKLT3AdYly/LmORARfEVT1iyjwN+4MqE5UmVKoAdIBqeoCHgLA==',
            dev: !0,
            requires: { 'type-fest': '^0.11.0' },
            dependencies: {
              'type-fest': {
                version: '0.11.0',
                resolved: 'https://registry.npmjs.org/type-fest/-/type-fest-0.11.0.tgz',
                integrity:
                  'sha512-OdjXJxnCN1AvyLSzeKIgXTXxV+99ZuXl3Hpo9XpJAv9MBcHrrJOQ5kV7ypXOuQie+AmWG25hLbiKdwYTifzcfQ==',
                dev: !0
              }
            }
          },
          'ansi-regex': {
            version: '5.0.0',
            resolved: 'https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz',
            integrity:
              'sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==',
            dev: !0
          },
          'ansi-styles': {
            version: '3.2.1',
            resolved: 'https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz',
            integrity:
              'sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==',
            dev: !0,
            requires: { 'color-convert': '^1.9.0' }
          },
          argparse: {
            version: '1.0.10',
            resolved: 'https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz',
            integrity:
              'sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==',
            dev: !0,
            requires: { 'sprintf-js': '~1.0.2' }
          },
          'array-back': {
            version: '4.0.1',
            resolved: 'https://registry.npmjs.org/array-back/-/array-back-4.0.1.tgz',
            integrity:
              'sha512-Z/JnaVEXv+A9xabHzN43FiiiWEE7gPCRXMrVmRm00tWbjZRul1iHm7ECzlyNq1p4a4ATXz+G9FJ3GqGOkOV3fg==',
            dev: !0
          },
          'array-includes': {
            version: '3.1.2',
            resolved: 'https://registry.npmjs.org/array-includes/-/array-includes-3.1.2.tgz',
            integrity:
              'sha512-w2GspexNQpx+PutG3QpT437/BenZBj0M/MZGn5mzv/MofYqo0xmRHzn4lFsoDlWJ+THYsGJmFlW68WlDFx7VRw==',
            dev: !0,
            requires: {
              'call-bind': '^1.0.0',
              'define-properties': '^1.1.3',
              'es-abstract': '^1.18.0-next.1',
              'get-intrinsic': '^1.0.1',
              'is-string': '^1.0.5'
            }
          },
          'array.prototype.flat': {
            version: '1.2.4',
            resolved: 'https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.2.4.tgz',
            integrity:
              'sha512-4470Xi3GAPAjZqFcljX2xzckv1qeKPizoNkiS0+O4IoPR2ZNpcjE0pkhdihlDouK+x6QOast26B4Q/O9DJnwSg==',
            dev: !0,
            requires: { 'call-bind': '^1.0.0', 'define-properties': '^1.1.3', 'es-abstract': '^1.18.0-next.1' }
          },
          'astral-regex': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz',
            integrity:
              'sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg==',
            dev: !0
          },
          'balanced-match': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz',
            integrity: 'sha1-ibTRmasr7kneFk6gK4nORi1xt2c=',
            dev: !0
          },
          bluebird: {
            version: '3.7.2',
            resolved: 'https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz',
            integrity:
              'sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg==',
            dev: !0
          },
          'brace-expansion': {
            version: '1.1.11',
            resolved: 'https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz',
            integrity:
              'sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==',
            dev: !0,
            requires: { 'balanced-match': '^1.0.0', 'concat-map': '0.0.1' }
          },
          'builtin-modules': {
            version: '1.1.1',
            resolved: 'https://registry.npmjs.org/builtin-modules/-/builtin-modules-1.1.1.tgz',
            integrity: 'sha1-Jw8HbFpywC9bZaR9+Uxf46J4iS8=',
            dev: !0
          },
          'cache-point': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/cache-point/-/cache-point-1.0.0.tgz',
            integrity:
              'sha512-ZqrZp9Hi5Uq7vfSGmNP2bUT/9DzZC2Y/GXjHB8rUJN1a+KLmbV05+vxHipNsg8+CSVgjcVVzLV8VZms6w8ZeRw==',
            dev: !0,
            requires: { 'array-back': '^4.0.0', 'fs-then-native': '^2.0.0', mkdirp2: '^1.0.4' }
          },
          'call-bind': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/call-bind/-/call-bind-1.0.0.tgz',
            integrity:
              'sha512-AEXsYIyyDY3MCzbwdhzG3Jx1R0J2wetQyUynn6dYHAO+bg8l1k7jwZtRv4ryryFs7EP+NDlikJlVe59jr0cM2w==',
            dev: !0,
            requires: { 'function-bind': '^1.1.1', 'get-intrinsic': '^1.0.0' }
          },
          callsites: {
            version: '3.1.0',
            resolved: 'https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz',
            integrity:
              'sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==',
            dev: !0
          },
          camelcase: {
            version: '5.3.1',
            resolved: 'https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz',
            integrity:
              'sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==',
            dev: !0
          },
          catharsis: {
            version: '0.8.11',
            resolved: 'https://registry.npmjs.org/catharsis/-/catharsis-0.8.11.tgz',
            integrity:
              'sha512-a+xUyMV7hD1BrDQA/3iPV7oc+6W26BgVJO05PGEoatMyIuPScQKsde6i3YorWX1qs+AZjnJ18NqdKoCtKiNh1g==',
            dev: !0,
            requires: { lodash: '^4.17.14' }
          },
          chalk: {
            version: '2.4.2',
            resolved: 'https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz',
            integrity:
              'sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==',
            dev: !0,
            requires: { 'ansi-styles': '^3.2.1', 'escape-string-regexp': '^1.0.5', 'supports-color': '^5.3.0' }
          },
          chardet: {
            version: '0.7.0',
            resolved: 'https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz',
            integrity:
              'sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==',
            dev: !0
          },
          'cli-cursor': {
            version: '3.1.0',
            resolved: 'https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz',
            integrity:
              'sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==',
            dev: !0,
            requires: { 'restore-cursor': '^3.1.0' }
          },
          'cli-width': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/cli-width/-/cli-width-3.0.0.tgz',
            integrity:
              'sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw==',
            dev: !0
          },
          cliui: {
            version: '5.0.0',
            resolved: 'https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz',
            integrity:
              'sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==',
            dev: !0,
            requires: { 'string-width': '^3.1.0', 'strip-ansi': '^5.2.0', 'wrap-ansi': '^5.1.0' },
            dependencies: {
              'emoji-regex': {
                version: '7.0.3',
                resolved: 'https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz',
                integrity:
                  'sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==',
                dev: !0
              },
              'is-fullwidth-code-point': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz',
                integrity: 'sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=',
                dev: !0
              },
              'string-width': {
                version: '3.1.0',
                resolved: 'https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz',
                integrity:
                  'sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==',
                dev: !0,
                requires: { 'emoji-regex': '^7.0.1', 'is-fullwidth-code-point': '^2.0.0', 'strip-ansi': '^5.1.0' }
              }
            }
          },
          'collect-all': {
            version: '1.0.4',
            resolved: 'https://registry.npmjs.org/collect-all/-/collect-all-1.0.4.tgz',
            integrity:
              'sha512-RKZhRwJtJEP5FWul+gkSMEnaK6H3AGPTTWOiRimCcs+rc/OmQE3Yhy1Q7A7KsdkG3ZXVdZq68Y6ONSdvkeEcKA==',
            dev: !0,
            requires: { 'stream-connect': '^1.0.2', 'stream-via': '^1.0.4' }
          },
          'color-convert': {
            version: '1.9.3',
            resolved: 'https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz',
            integrity:
              'sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==',
            dev: !0,
            requires: { 'color-name': '1.1.3' }
          },
          'color-name': {
            version: '1.1.3',
            resolved: 'https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz',
            integrity: 'sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=',
            dev: !0
          },
          'command-line-args': {
            version: '5.1.1',
            resolved: 'https://registry.npmjs.org/command-line-args/-/command-line-args-5.1.1.tgz',
            integrity:
              'sha512-hL/eG8lrll1Qy1ezvkant+trihbGnaKaeEjj6Scyr3DN+RC7iQ5Rz84IeLERfAWDGo0HBSNAakczwgCilDXnWg==',
            dev: !0,
            requires: {
              'array-back': '^3.0.1',
              'find-replace': '^3.0.0',
              'lodash.camelcase': '^4.3.0',
              typical: '^4.0.0'
            },
            dependencies: {
              'array-back': {
                version: '3.1.0',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-3.1.0.tgz',
                integrity:
                  'sha512-TkuxA4UCOvxuDK6NZYXCalszEzj+TLszyASooky+i742l9TqsOdYCMJJupxRic61hwquNtppB3hgcuq9SVSH1Q==',
                dev: !0
              },
              typical: {
                version: '4.0.0',
                resolved: 'https://registry.npmjs.org/typical/-/typical-4.0.0.tgz',
                integrity:
                  'sha512-VAH4IvQ7BDFYglMd7BPRDfLgxZZX4O4TFcRDA6EN5X7erNJJq+McIEp8np9aVtxrCJ6qx4GTYVfOWNjcqwZgRw==',
                dev: !0
              }
            }
          },
          'command-line-tool': {
            version: '0.8.0',
            resolved: 'https://registry.npmjs.org/command-line-tool/-/command-line-tool-0.8.0.tgz',
            integrity:
              'sha512-Xw18HVx/QzQV3Sc5k1vy3kgtOeGmsKIqwtFFoyjI4bbcpSgnw2CWVULvtakyw4s6fhyAdI6soQQhXc2OzJy62g==',
            dev: !0,
            requires: {
              'ansi-escape-sequences': '^4.0.0',
              'array-back': '^2.0.0',
              'command-line-args': '^5.0.0',
              'command-line-usage': '^4.1.0',
              typical: '^2.6.1'
            },
            dependencies: {
              'array-back': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-2.0.0.tgz',
                integrity:
                  'sha512-eJv4pLLufP3g5kcZry0j6WXpIbzYw9GUB4mVJZno9wfwiBxbizTnHCw3VJb07cBihbFX48Y7oSrW9y+gt4glyw==',
                dev: !0,
                requires: { typical: '^2.6.1' }
              }
            }
          },
          'command-line-usage': {
            version: '4.1.0',
            resolved: 'https://registry.npmjs.org/command-line-usage/-/command-line-usage-4.1.0.tgz',
            integrity:
              'sha512-MxS8Ad995KpdAC0Jopo/ovGIroV/m0KHwzKfXxKag6FHOkGsH8/lv5yjgablcRxCJJC0oJeUMuO/gmaq+Wq46g==',
            dev: !0,
            requires: {
              'ansi-escape-sequences': '^4.0.0',
              'array-back': '^2.0.0',
              'table-layout': '^0.4.2',
              typical: '^2.6.1'
            },
            dependencies: {
              'array-back': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-2.0.0.tgz',
                integrity:
                  'sha512-eJv4pLLufP3g5kcZry0j6WXpIbzYw9GUB4mVJZno9wfwiBxbizTnHCw3VJb07cBihbFX48Y7oSrW9y+gt4glyw==',
                dev: !0,
                requires: { typical: '^2.6.1' }
              }
            }
          },
          commander: {
            version: '2.20.3',
            resolved: 'https://registry.npmjs.org/commander/-/commander-2.20.3.tgz',
            integrity:
              'sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==',
            dev: !0
          },
          'common-sequence': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/common-sequence/-/common-sequence-2.0.0.tgz',
            integrity:
              'sha512-f0QqPLpRTgMQn/pQIynf+SdE73Lw5Q1jn4hjirHLgH/NJ71TiHjXusV16BmOyuK5rRQ1W2f++II+TFZbQOh4hA==',
            dev: !0
          },
          'concat-map': {
            version: '0.0.1',
            resolved: 'https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz',
            integrity: 'sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=',
            dev: !0
          },
          'config-master': {
            version: '3.1.0',
            resolved: 'https://registry.npmjs.org/config-master/-/config-master-3.1.0.tgz',
            integrity: 'sha1-ZnZjWQUFooO/JqSE1oSJ10xUhdo=',
            dev: !0,
            requires: { 'walk-back': '^2.0.1' },
            dependencies: {
              'walk-back': {
                version: '2.0.1',
                resolved: 'https://registry.npmjs.org/walk-back/-/walk-back-2.0.1.tgz',
                integrity: 'sha1-VU4qnYdPrEeoywBr9EwvDEmYoKQ=',
                dev: !0
              }
            }
          },
          'contains-path': {
            version: '0.1.0',
            resolved: 'https://registry.npmjs.org/contains-path/-/contains-path-0.1.0.tgz',
            integrity: 'sha1-/ozxhP9mcLa67wGp1IYaXL7EEgo=',
            dev: !0
          },
          'cross-spawn': {
            version: '6.0.5',
            resolved: 'https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz',
            integrity:
              'sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==',
            dev: !0,
            requires: {
              'nice-try': '^1.0.4',
              'path-key': '^2.0.1',
              semver: '^5.5.0',
              'shebang-command': '^1.2.0',
              which: '^1.2.9'
            },
            dependencies: {
              semver: {
                version: '5.7.1',
                resolved: 'https://registry.npmjs.org/semver/-/semver-5.7.1.tgz',
                integrity:
                  'sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==',
                dev: !0
              }
            }
          },
          debug: {
            version: '4.3.1',
            resolved: 'https://registry.npmjs.org/debug/-/debug-4.3.1.tgz',
            integrity:
              'sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==',
            dev: !0,
            requires: { ms: '2.1.2' }
          },
          decamelize: {
            version: '1.2.0',
            resolved: 'https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz',
            integrity: 'sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=',
            dev: !0
          },
          'deep-extend': {
            version: '0.6.0',
            resolved: 'https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz',
            integrity:
              'sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==',
            dev: !0
          },
          'deep-is': {
            version: '0.1.3',
            resolved: 'https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz',
            integrity: 'sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=',
            dev: !0
          },
          'define-properties': {
            version: '1.1.3',
            resolved: 'https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz',
            integrity:
              'sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==',
            dev: !0,
            requires: { 'object-keys': '^1.0.12' }
          },
          diff: {
            version: '4.0.2',
            resolved: 'https://registry.npmjs.org/diff/-/diff-4.0.2.tgz',
            integrity:
              'sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==',
            dev: !0
          },
          'discord.js-docgen': {
            version: 'git+https://github.com/discordjs/docgen.git#d40f54cfd2d0f03ff92d7ecfb29cd82694ee2c11',
            from: 'git+https://github.com/discordjs/docgen.git',
            dev: !0,
            requires: {
              eslint: '^6.3.0',
              'js-yaml': '^3.13.1',
              'jsdoc-to-markdown': '^5.0.1',
              tsubaki: '^1.3.2',
              yargs: '^14.0.0'
            },
            dependencies: {
              eslint: {
                version: '6.8.0',
                resolved: 'https://registry.npmjs.org/eslint/-/eslint-6.8.0.tgz',
                integrity:
                  'sha512-K+Iayyo2LtyYhDSYwz5D5QdWw0hCacNzyq1Y821Xna2xSJj7cijoLLYmLxTQgcgZ9mC61nryMy9S7GRbYpI5Ig==',
                dev: !0,
                requires: {
                  '@babel/code-frame': '^7.0.0',
                  ajv: '^6.10.0',
                  chalk: '^2.1.0',
                  'cross-spawn': '^6.0.5',
                  debug: '^4.0.1',
                  doctrine: '^3.0.0',
                  'eslint-scope': '^5.0.0',
                  'eslint-utils': '^1.4.3',
                  'eslint-visitor-keys': '^1.1.0',
                  espree: '^6.1.2',
                  esquery: '^1.0.1',
                  esutils: '^2.0.2',
                  'file-entry-cache': '^5.0.1',
                  'functional-red-black-tree': '^1.0.1',
                  'glob-parent': '^5.0.0',
                  globals: '^12.1.0',
                  ignore: '^4.0.6',
                  'import-fresh': '^3.0.0',
                  imurmurhash: '^0.1.4',
                  inquirer: '^7.0.0',
                  'is-glob': '^4.0.0',
                  'js-yaml': '^3.13.1',
                  'json-stable-stringify-without-jsonify': '^1.0.1',
                  levn: '^0.3.0',
                  lodash: '^4.17.14',
                  minimatch: '^3.0.4',
                  mkdirp: '^0.5.1',
                  'natural-compare': '^1.4.0',
                  optionator: '^0.8.3',
                  progress: '^2.0.0',
                  regexpp: '^2.0.1',
                  semver: '^6.1.2',
                  'strip-ansi': '^5.2.0',
                  'strip-json-comments': '^3.0.1',
                  table: '^5.2.3',
                  'text-table': '^0.2.0',
                  'v8-compile-cache': '^2.0.3'
                }
              }
            }
          },
          dmd: {
            version: '4.0.6',
            resolved: 'https://registry.npmjs.org/dmd/-/dmd-4.0.6.tgz',
            integrity:
              'sha512-7ZYAnFQ6jGm4SICArwqNPylJ83PaOdPTAkds3Z/s1ueFqSc5ilJ2F0b7uP+35W1PUbemH++gn5/VlC3KwEgiHQ==',
            dev: !0,
            requires: {
              'array-back': '^4.0.1',
              'cache-point': '^1.0.0',
              'common-sequence': '^2.0.0',
              'file-set': '^3.0.0',
              handlebars: '^4.5.3',
              marked: '^0.7.0',
              'object-get': '^2.1.0',
              'reduce-flatten': '^3.0.0',
              'reduce-unique': '^2.0.1',
              'reduce-without': '^1.0.1',
              'test-value': '^3.0.0',
              'walk-back': '^4.0.0'
            },
            dependencies: {
              'reduce-flatten': {
                version: '3.0.0',
                resolved: 'https://registry.npmjs.org/reduce-flatten/-/reduce-flatten-3.0.0.tgz',
                integrity:
                  'sha512-eczl8wAYBxJ6Egl6I1ECIF+8z6sHu+KE7BzaEDZTpPXKXfy9SUDQlVYwkRcNTjJLC3Iakxbhss50KuT/R6SYfg==',
                dev: !0
              }
            }
          },
          doctrine: {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz',
            integrity:
              'sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==',
            dev: !0,
            requires: { esutils: '^2.0.2' }
          },
          'emoji-regex': {
            version: '8.0.0',
            resolved: 'https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz',
            integrity:
              'sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==',
            dev: !0
          },
          enquirer: {
            version: '2.3.6',
            resolved: 'https://registry.npmjs.org/enquirer/-/enquirer-2.3.6.tgz',
            integrity:
              'sha512-yjNnPr315/FjS4zIsUxYguYUPP2e1NK4d7E7ZOLiyYCcbFBiTMyID+2wvm2w6+pZ/odMA7cRkjhsPbltwBOrLg==',
            dev: !0,
            requires: { 'ansi-colors': '^4.1.1' }
          },
          entities: {
            version: '2.0.3',
            resolved: 'https://registry.npmjs.org/entities/-/entities-2.0.3.tgz',
            integrity: 'sha512-MyoZ0jgnLvB2X3Lg5HqpFmn1kybDiIfEQmKzTb5apr51Rb+T3KdmMiqa70T+bhGnyv7bQ6WMj2QMHpGMmlrUYQ=='
          },
          'error-ex': {
            version: '1.3.2',
            resolved: 'https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz',
            integrity:
              'sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==',
            dev: !0,
            requires: { 'is-arrayish': '^0.2.1' }
          },
          'es-abstract': {
            version: '1.18.0-next.1',
            resolved: 'https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0-next.1.tgz',
            integrity:
              'sha512-I4UGspA0wpZXWENrdA0uHbnhte683t3qT/1VFH9aX2dA5PPSf6QW5HHXf5HImaqPmjXaVeVk4RGWnaylmV7uAA==',
            dev: !0,
            requires: {
              'es-to-primitive': '^1.2.1',
              'function-bind': '^1.1.1',
              has: '^1.0.3',
              'has-symbols': '^1.0.1',
              'is-callable': '^1.2.2',
              'is-negative-zero': '^2.0.0',
              'is-regex': '^1.1.1',
              'object-inspect': '^1.8.0',
              'object-keys': '^1.1.1',
              'object.assign': '^4.1.1',
              'string.prototype.trimend': '^1.0.1',
              'string.prototype.trimstart': '^1.0.1'
            }
          },
          'es-to-primitive': {
            version: '1.2.1',
            resolved: 'https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz',
            integrity:
              'sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==',
            dev: !0,
            requires: { 'is-callable': '^1.1.4', 'is-date-object': '^1.0.1', 'is-symbol': '^1.0.2' }
          },
          'escape-string-regexp': {
            version: '1.0.5',
            resolved: 'https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz',
            integrity: 'sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=',
            dev: !0
          },
          eslint: {
            version: '7.15.0',
            resolved: 'https://registry.npmjs.org/eslint/-/eslint-7.15.0.tgz',
            integrity:
              'sha512-Vr64xFDT8w30wFll643e7cGrIkPEU50yIiI36OdSIDoSGguIeaLzBo0vpGvzo9RECUqq7htURfwEtKqwytkqzA==',
            dev: !0,
            requires: {
              '@babel/code-frame': '^7.0.0',
              '@eslint/eslintrc': '^0.2.2',
              ajv: '^6.10.0',
              chalk: '^4.0.0',
              'cross-spawn': '^7.0.2',
              debug: '^4.0.1',
              doctrine: '^3.0.0',
              enquirer: '^2.3.5',
              'eslint-scope': '^5.1.1',
              'eslint-utils': '^2.1.0',
              'eslint-visitor-keys': '^2.0.0',
              espree: '^7.3.1',
              esquery: '^1.2.0',
              esutils: '^2.0.2',
              'file-entry-cache': '^6.0.0',
              'functional-red-black-tree': '^1.0.1',
              'glob-parent': '^5.0.0',
              globals: '^12.1.0',
              ignore: '^4.0.6',
              'import-fresh': '^3.0.0',
              imurmurhash: '^0.1.4',
              'is-glob': '^4.0.0',
              'js-yaml': '^3.13.1',
              'json-stable-stringify-without-jsonify': '^1.0.1',
              levn: '^0.4.1',
              lodash: '^4.17.19',
              minimatch: '^3.0.4',
              'natural-compare': '^1.4.0',
              optionator: '^0.9.1',
              progress: '^2.0.0',
              regexpp: '^3.1.0',
              semver: '^7.2.1',
              'strip-ansi': '^6.0.0',
              'strip-json-comments': '^3.1.0',
              table: '^5.2.3',
              'text-table': '^0.2.0',
              'v8-compile-cache': '^2.0.3'
            },
            dependencies: {
              'ansi-styles': {
                version: '4.3.0',
                resolved: 'https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz',
                integrity:
                  'sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==',
                dev: !0,
                requires: { 'color-convert': '^2.0.1' }
              },
              chalk: {
                version: '4.1.0',
                resolved: 'https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz',
                integrity:
                  'sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==',
                dev: !0,
                requires: { 'ansi-styles': '^4.1.0', 'supports-color': '^7.1.0' }
              },
              'color-convert': {
                version: '2.0.1',
                resolved: 'https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz',
                integrity:
                  'sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==',
                dev: !0,
                requires: { 'color-name': '~1.1.4' }
              },
              'color-name': {
                version: '1.1.4',
                resolved: 'https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz',
                integrity:
                  'sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==',
                dev: !0
              },
              'cross-spawn': {
                version: '7.0.3',
                resolved: 'https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz',
                integrity:
                  'sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==',
                dev: !0,
                requires: { 'path-key': '^3.1.0', 'shebang-command': '^2.0.0', which: '^2.0.1' }
              },
              'eslint-utils': {
                version: '2.1.0',
                resolved: 'https://registry.npmjs.org/eslint-utils/-/eslint-utils-2.1.0.tgz',
                integrity:
                  'sha512-w94dQYoauyvlDc43XnGB8lU3Zt713vNChgt4EWwhXAP2XkBvndfxF0AgIqKOOasjPIPzj9JqgwkwbCYD0/V3Zg==',
                dev: !0,
                requires: { 'eslint-visitor-keys': '^1.1.0' },
                dependencies: {
                  'eslint-visitor-keys': {
                    version: '1.3.0',
                    resolved: 'https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz',
                    integrity:
                      'sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==',
                    dev: !0
                  }
                }
              },
              'eslint-visitor-keys': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.0.0.tgz',
                integrity:
                  'sha512-QudtT6av5WXels9WjIM7qz1XD1cWGvX4gGXvp/zBn9nXG02D0utdU3Em2m/QjTnrsk6bBjmCygl3rmj118msQQ==',
                dev: !0
              },
              espree: {
                version: '7.3.1',
                resolved: 'https://registry.npmjs.org/espree/-/espree-7.3.1.tgz',
                integrity:
                  'sha512-v3JCNCE64umkFpmkFGqzVKsOT0tN1Zr+ueqLZfpV1Ob8e+CEgPWa+OxCoGH3tnhimMKIaBm4m/vaRpJ/krRz2g==',
                dev: !0,
                requires: { acorn: '^7.4.0', 'acorn-jsx': '^5.3.1', 'eslint-visitor-keys': '^1.3.0' },
                dependencies: {
                  'eslint-visitor-keys': {
                    version: '1.3.0',
                    resolved: 'https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz',
                    integrity:
                      'sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==',
                    dev: !0
                  }
                }
              },
              'file-entry-cache': {
                version: '6.0.0',
                resolved: 'https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.0.tgz',
                integrity:
                  'sha512-fqoO76jZ3ZnYrXLDRxBR1YvOvc0k844kcOg40bgsPrE25LAb/PDqTY+ho64Xh2c8ZXgIKldchCFHczG2UVRcWA==',
                dev: !0,
                requires: { 'flat-cache': '^3.0.4' }
              },
              'flat-cache': {
                version: '3.0.4',
                resolved: 'https://registry.npmjs.org/flat-cache/-/flat-cache-3.0.4.tgz',
                integrity:
                  'sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==',
                dev: !0,
                requires: { flatted: '^3.1.0', rimraf: '^3.0.2' }
              },
              flatted: {
                version: '3.1.0',
                resolved: 'https://registry.npmjs.org/flatted/-/flatted-3.1.0.tgz',
                integrity:
                  'sha512-tW+UkmtNg/jv9CSofAKvgVcO7c2URjhTdW1ZTkcAritblu8tajiYy7YisnIflEwtKssCtOxpnBRoCB7iap0/TA==',
                dev: !0
              },
              'has-flag': {
                version: '4.0.0',
                resolved: 'https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz',
                integrity:
                  'sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==',
                dev: !0
              },
              levn: {
                version: '0.4.1',
                resolved: 'https://registry.npmjs.org/levn/-/levn-0.4.1.tgz',
                integrity:
                  'sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==',
                dev: !0,
                requires: { 'prelude-ls': '^1.2.1', 'type-check': '~0.4.0' }
              },
              optionator: {
                version: '0.9.1',
                resolved: 'https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz',
                integrity:
                  'sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==',
                dev: !0,
                requires: {
                  'deep-is': '^0.1.3',
                  'fast-levenshtein': '^2.0.6',
                  levn: '^0.4.1',
                  'prelude-ls': '^1.2.1',
                  'type-check': '^0.4.0',
                  'word-wrap': '^1.2.3'
                }
              },
              'path-key': {
                version: '3.1.1',
                resolved: 'https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz',
                integrity:
                  'sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==',
                dev: !0
              },
              'prelude-ls': {
                version: '1.2.1',
                resolved: 'https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz',
                integrity:
                  'sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==',
                dev: !0
              },
              regexpp: {
                version: '3.1.0',
                resolved: 'https://registry.npmjs.org/regexpp/-/regexpp-3.1.0.tgz',
                integrity:
                  'sha512-ZOIzd8yVsQQA7j8GCSlPGXwg5PfmA1mrq0JP4nGhh54LaKN3xdai/vHUDu74pKwV8OxseMS65u2NImosQcSD0Q==',
                dev: !0
              },
              rimraf: {
                version: '3.0.2',
                resolved: 'https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz',
                integrity:
                  'sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==',
                dev: !0,
                requires: { glob: '^7.1.3' }
              },
              semver: {
                version: '7.3.4',
                resolved: 'https://registry.npmjs.org/semver/-/semver-7.3.4.tgz',
                integrity:
                  'sha512-tCfb2WLjqFAtXn4KEdxIhalnRtoKFN7nAwj0B3ZXCbQloV2tq5eDbcTmT68JJD3nRJq24/XgxtQKFIpQdtvmVw==',
                dev: !0,
                requires: { 'lru-cache': '^6.0.0' }
              },
              'shebang-command': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz',
                integrity:
                  'sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==',
                dev: !0,
                requires: { 'shebang-regex': '^3.0.0' }
              },
              'shebang-regex': {
                version: '3.0.0',
                resolved: 'https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz',
                integrity:
                  'sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==',
                dev: !0
              },
              'strip-ansi': {
                version: '6.0.0',
                resolved: 'https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz',
                integrity:
                  'sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==',
                dev: !0,
                requires: { 'ansi-regex': '^5.0.0' }
              },
              'supports-color': {
                version: '7.2.0',
                resolved: 'https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz',
                integrity:
                  'sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==',
                dev: !0,
                requires: { 'has-flag': '^4.0.0' }
              },
              'type-check': {
                version: '0.4.0',
                resolved: 'https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz',
                integrity:
                  'sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==',
                dev: !0,
                requires: { 'prelude-ls': '^1.2.1' }
              },
              which: {
                version: '2.0.2',
                resolved: 'https://registry.npmjs.org/which/-/which-2.0.2.tgz',
                integrity:
                  'sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==',
                dev: !0,
                requires: { isexe: '^2.0.0' }
              }
            }
          },
          'eslint-config-standard': {
            version: '14.1.1',
            resolved: 'https://registry.npmjs.org/eslint-config-standard/-/eslint-config-standard-14.1.1.tgz',
            integrity:
              'sha512-Z9B+VR+JIXRxz21udPTL9HpFMyoMUEeX1G251EQ6e05WD9aPVtVBn09XUmZ259wCMlCDmYDSZG62Hhm+ZTJcUg==',
            dev: !0
          },
          'eslint-import-resolver-node': {
            version: '0.3.4',
            resolved: 'https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.4.tgz',
            integrity:
              'sha512-ogtf+5AB/O+nM6DIeBUNr2fuT7ot9Qg/1harBfBtaP13ekEWFQEEMP94BCB7zaNW3gyY+8SHYF00rnqYwXKWOA==',
            dev: !0,
            requires: { debug: '^2.6.9', resolve: '^1.13.1' },
            dependencies: {
              debug: {
                version: '2.6.9',
                resolved: 'https://registry.npmjs.org/debug/-/debug-2.6.9.tgz',
                integrity:
                  'sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==',
                dev: !0,
                requires: { ms: '2.0.0' }
              },
              ms: {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/ms/-/ms-2.0.0.tgz',
                integrity: 'sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=',
                dev: !0
              }
            }
          },
          'eslint-module-utils': {
            version: '2.6.0',
            resolved: 'https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.6.0.tgz',
            integrity:
              'sha512-6j9xxegbqe8/kZY8cYpcp0xhbK0EgJlg3g9mib3/miLaExuuwc3n5UEfSnU6hWMbT0FAYVvDbL9RrRgpUeQIvA==',
            dev: !0,
            requires: { debug: '^2.6.9', 'pkg-dir': '^2.0.0' },
            dependencies: {
              debug: {
                version: '2.6.9',
                resolved: 'https://registry.npmjs.org/debug/-/debug-2.6.9.tgz',
                integrity:
                  'sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==',
                dev: !0,
                requires: { ms: '2.0.0' }
              },
              ms: {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/ms/-/ms-2.0.0.tgz',
                integrity: 'sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=',
                dev: !0
              }
            }
          },
          'eslint-plugin-es': {
            version: '3.0.1',
            resolved: 'https://registry.npmjs.org/eslint-plugin-es/-/eslint-plugin-es-3.0.1.tgz',
            integrity:
              'sha512-GUmAsJaN4Fc7Gbtl8uOBlayo2DqhwWvEzykMHSCZHU3XdJ+NSzzZcVhXh3VxX5icqQ+oQdIEawXX8xkR3mIFmQ==',
            dev: !0,
            requires: { 'eslint-utils': '^2.0.0', regexpp: '^3.0.0' },
            dependencies: {
              'eslint-utils': {
                version: '2.1.0',
                resolved: 'https://registry.npmjs.org/eslint-utils/-/eslint-utils-2.1.0.tgz',
                integrity:
                  'sha512-w94dQYoauyvlDc43XnGB8lU3Zt713vNChgt4EWwhXAP2XkBvndfxF0AgIqKOOasjPIPzj9JqgwkwbCYD0/V3Zg==',
                dev: !0,
                requires: { 'eslint-visitor-keys': '^1.1.0' }
              },
              regexpp: {
                version: '3.1.0',
                resolved: 'https://registry.npmjs.org/regexpp/-/regexpp-3.1.0.tgz',
                integrity:
                  'sha512-ZOIzd8yVsQQA7j8GCSlPGXwg5PfmA1mrq0JP4nGhh54LaKN3xdai/vHUDu74pKwV8OxseMS65u2NImosQcSD0Q==',
                dev: !0
              }
            }
          },
          'eslint-plugin-import': {
            version: '2.22.1',
            resolved: 'https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.22.1.tgz',
            integrity:
              'sha512-8K7JjINHOpH64ozkAhpT3sd+FswIZTfMZTjdx052pnWrgRCVfp8op9tbjpAk3DdUeI/Ba4C8OjdC0r90erHEOw==',
            dev: !0,
            requires: {
              'array-includes': '^3.1.1',
              'array.prototype.flat': '^1.2.3',
              'contains-path': '^0.1.0',
              debug: '^2.6.9',
              doctrine: '1.5.0',
              'eslint-import-resolver-node': '^0.3.4',
              'eslint-module-utils': '^2.6.0',
              has: '^1.0.3',
              minimatch: '^3.0.4',
              'object.values': '^1.1.1',
              'read-pkg-up': '^2.0.0',
              resolve: '^1.17.0',
              'tsconfig-paths': '^3.9.0'
            },
            dependencies: {
              debug: {
                version: '2.6.9',
                resolved: 'https://registry.npmjs.org/debug/-/debug-2.6.9.tgz',
                integrity:
                  'sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==',
                dev: !0,
                requires: { ms: '2.0.0' }
              },
              doctrine: {
                version: '1.5.0',
                resolved: 'https://registry.npmjs.org/doctrine/-/doctrine-1.5.0.tgz',
                integrity: 'sha1-N53Ocw9hZvds76TmcHoVmwLFpvo=',
                dev: !0,
                requires: { esutils: '^2.0.2', isarray: '^1.0.0' }
              },
              ms: {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/ms/-/ms-2.0.0.tgz',
                integrity: 'sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=',
                dev: !0
              }
            }
          },
          'eslint-plugin-node': {
            version: '11.1.0',
            resolved: 'https://registry.npmjs.org/eslint-plugin-node/-/eslint-plugin-node-11.1.0.tgz',
            integrity:
              'sha512-oUwtPJ1W0SKD0Tr+wqu92c5xuCeQqB3hSCHasn/ZgjFdA9iDGNkNf2Zi9ztY7X+hNuMib23LNGRm6+uN+KLE3g==',
            dev: !0,
            requires: {
              'eslint-plugin-es': '^3.0.0',
              'eslint-utils': '^2.0.0',
              ignore: '^5.1.1',
              minimatch: '^3.0.4',
              resolve: '^1.10.1',
              semver: '^6.1.0'
            },
            dependencies: {
              'eslint-utils': {
                version: '2.1.0',
                resolved: 'https://registry.npmjs.org/eslint-utils/-/eslint-utils-2.1.0.tgz',
                integrity:
                  'sha512-w94dQYoauyvlDc43XnGB8lU3Zt713vNChgt4EWwhXAP2XkBvndfxF0AgIqKOOasjPIPzj9JqgwkwbCYD0/V3Zg==',
                dev: !0,
                requires: { 'eslint-visitor-keys': '^1.1.0' }
              },
              ignore: {
                version: '5.1.8',
                resolved: 'https://registry.npmjs.org/ignore/-/ignore-5.1.8.tgz',
                integrity:
                  'sha512-BMpfD7PpiETpBl/A6S498BaIJ6Y/ABT93ETbby2fP00v4EbvPBXWEoaR1UBPKs3iR53pJY7EtZk5KACI57i1Uw==',
                dev: !0
              }
            }
          },
          'eslint-plugin-promise': {
            version: '4.2.1',
            resolved: 'https://registry.npmjs.org/eslint-plugin-promise/-/eslint-plugin-promise-4.2.1.tgz',
            integrity:
              'sha512-VoM09vT7bfA7D+upt+FjeBO5eHIJQBUWki1aPvB+vbNiHS3+oGIJGIeyBtKQTME6UPXXy3vV07OL1tHd3ANuDw==',
            dev: !0
          },
          'eslint-plugin-standard': {
            version: '4.1.0',
            resolved: 'https://registry.npmjs.org/eslint-plugin-standard/-/eslint-plugin-standard-4.1.0.tgz',
            integrity:
              'sha512-ZL7+QRixjTR6/528YNGyDotyffm5OQst/sGxKDwGb9Uqs4In5Egi4+jbobhqJoyoCM6/7v/1A5fhQ7ScMtDjaQ==',
            dev: !0
          },
          'eslint-scope': {
            version: '5.1.1',
            resolved: 'https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz',
            integrity:
              'sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==',
            dev: !0,
            requires: { esrecurse: '^4.3.0', estraverse: '^4.1.1' }
          },
          'eslint-utils': {
            version: '1.4.3',
            resolved: 'https://registry.npmjs.org/eslint-utils/-/eslint-utils-1.4.3.tgz',
            integrity:
              'sha512-fbBN5W2xdY45KulGXmLHZ3c3FHfVYmKg0IrAKGOkT/464PQsx2UeIzfz1RmEci+KLm1bBaAzZAh8+/E+XAeZ8Q==',
            dev: !0,
            requires: { 'eslint-visitor-keys': '^1.1.0' }
          },
          'eslint-visitor-keys': {
            version: '1.3.0',
            resolved: 'https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz',
            integrity:
              'sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==',
            dev: !0
          },
          espree: {
            version: '6.2.1',
            resolved: 'https://registry.npmjs.org/espree/-/espree-6.2.1.tgz',
            integrity:
              'sha512-ysCxRQY3WaXJz9tdbWOwuWr5Y/XrPTGX9Kiz3yoUXwW0VZ4w30HTkQLaGx/+ttFjF8i+ACbArnB4ce68a9m5hw==',
            dev: !0,
            requires: { acorn: '^7.1.1', 'acorn-jsx': '^5.2.0', 'eslint-visitor-keys': '^1.1.0' }
          },
          esprima: {
            version: '4.0.1',
            resolved: 'https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz',
            integrity:
              'sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==',
            dev: !0
          },
          esquery: {
            version: '1.3.1',
            resolved: 'https://registry.npmjs.org/esquery/-/esquery-1.3.1.tgz',
            integrity:
              'sha512-olpvt9QG0vniUBZspVRN6lwB7hOZoTRtT+jzR+tS4ffYx2mzbw+z0XCOk44aaLYKApNX5nMm+E+P6o25ip/DHQ==',
            dev: !0,
            requires: { estraverse: '^5.1.0' },
            dependencies: {
              estraverse: {
                version: '5.2.0',
                resolved: 'https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz',
                integrity:
                  'sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==',
                dev: !0
              }
            }
          },
          esrecurse: {
            version: '4.3.0',
            resolved: 'https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz',
            integrity:
              'sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==',
            dev: !0,
            requires: { estraverse: '^5.2.0' },
            dependencies: {
              estraverse: {
                version: '5.2.0',
                resolved: 'https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz',
                integrity:
                  'sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==',
                dev: !0
              }
            }
          },
          estraverse: {
            version: '4.3.0',
            resolved: 'https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz',
            integrity:
              'sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==',
            dev: !0
          },
          esutils: {
            version: '2.0.3',
            resolved: 'https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz',
            integrity:
              'sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==',
            dev: !0
          },
          'external-editor': {
            version: '3.1.0',
            resolved: 'https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz',
            integrity:
              'sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==',
            dev: !0,
            requires: { chardet: '^0.7.0', 'iconv-lite': '^0.4.24', tmp: '^0.0.33' }
          },
          'fast-deep-equal': {
            version: '3.1.3',
            resolved: 'https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz',
            integrity: 'sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q=='
          },
          'fast-json-stable-stringify': {
            version: '2.1.0',
            resolved: 'https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz',
            integrity: 'sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=='
          },
          'fast-levenshtein': {
            version: '2.0.6',
            resolved: 'https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz',
            integrity: 'sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=',
            dev: !0
          },
          figures: {
            version: '3.2.0',
            resolved: 'https://registry.npmjs.org/figures/-/figures-3.2.0.tgz',
            integrity:
              'sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==',
            dev: !0,
            requires: { 'escape-string-regexp': '^1.0.5' }
          },
          'file-entry-cache': {
            version: '5.0.1',
            resolved: 'https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-5.0.1.tgz',
            integrity:
              'sha512-bCg29ictuBaKUwwArK4ouCaqDgLZcysCFLmM/Yn/FDoqndh/9vNuQfXRDvTuXKLxfD/JtZQGKFT8MGcJBK644g==',
            dev: !0,
            requires: { 'flat-cache': '^2.0.1' }
          },
          'file-set': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/file-set/-/file-set-3.0.0.tgz',
            integrity:
              'sha512-B/SdeSIeRv7VlOgIjtH3dkxMI+tEy5m+OeCXfAUsirBoVoY+bGtsmvmmTFPm/G23TBY4RiTtjpcgePCfwXRjqA==',
            dev: !0,
            requires: { 'array-back': '^4.0.0', glob: '^7.1.5' }
          },
          'find-replace': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/find-replace/-/find-replace-3.0.0.tgz',
            integrity:
              'sha512-6Tb2myMioCAgv5kfvP5/PkZZ/ntTpVK39fHY7WkWBgvbeE+VHd/tZuZ4mrC+bxh4cfOZeYKVPaJIZtZXV7GNCQ==',
            dev: !0,
            requires: { 'array-back': '^3.0.1' },
            dependencies: {
              'array-back': {
                version: '3.1.0',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-3.1.0.tgz',
                integrity:
                  'sha512-TkuxA4UCOvxuDK6NZYXCalszEzj+TLszyASooky+i742l9TqsOdYCMJJupxRic61hwquNtppB3hgcuq9SVSH1Q==',
                dev: !0
              }
            }
          },
          'find-up': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz',
            integrity:
              'sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==',
            dev: !0,
            requires: { 'locate-path': '^3.0.0' }
          },
          'flat-cache': {
            version: '2.0.1',
            resolved: 'https://registry.npmjs.org/flat-cache/-/flat-cache-2.0.1.tgz',
            integrity:
              'sha512-LoQe6yDuUMDzQAEH8sgmh4Md6oZnc/7PjtwjNFSzveXqSHt6ka9fPBuso7IGf9Rz4uqnSnWiFH2B/zj24a5ReA==',
            dev: !0,
            requires: { flatted: '^2.0.0', rimraf: '2.6.3', write: '1.0.3' }
          },
          flatted: {
            version: '2.0.2',
            resolved: 'https://registry.npmjs.org/flatted/-/flatted-2.0.2.tgz',
            integrity:
              'sha512-r5wGx7YeOwNWNlCA0wQ86zKyDLMQr+/RB8xy74M4hTphfmjlijTSSXGuH8rnvKZnfT9i+75zmd8jcKdMR4O6jA==',
            dev: !0
          },
          'fs-then-native': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/fs-then-native/-/fs-then-native-2.0.0.tgz',
            integrity: 'sha1-GaEk2U2QwiyOBF8ujdbr6jbUjGc=',
            dev: !0
          },
          'fs.realpath': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz',
            integrity: 'sha1-FQStJSMVjKpA20onh8sBQRmU6k8=',
            dev: !0
          },
          'function-bind': {
            version: '1.1.1',
            resolved: 'https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz',
            integrity:
              'sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==',
            dev: !0
          },
          'functional-red-black-tree': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz',
            integrity: 'sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc=',
            dev: !0
          },
          'get-caller-file': {
            version: '2.0.5',
            resolved: 'https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz',
            integrity:
              'sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==',
            dev: !0
          },
          'get-intrinsic': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.0.1.tgz',
            integrity:
              'sha512-ZnWP+AmS1VUaLgTRy47+zKtjTxz+0xMpx3I52i+aalBK1QP19ggLF3Db89KJX7kjfOfP2eoa01qc++GwPgufPg==',
            dev: !0,
            requires: { 'function-bind': '^1.1.1', has: '^1.0.3', 'has-symbols': '^1.0.1' }
          },
          glob: {
            version: '7.1.6',
            resolved: 'https://registry.npmjs.org/glob/-/glob-7.1.6.tgz',
            integrity:
              'sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==',
            dev: !0,
            requires: {
              'fs.realpath': '^1.0.0',
              inflight: '^1.0.4',
              inherits: '2',
              minimatch: '^3.0.4',
              once: '^1.3.0',
              'path-is-absolute': '^1.0.0'
            }
          },
          'glob-parent': {
            version: '5.1.1',
            resolved: 'https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.1.tgz',
            integrity:
              'sha512-FnI+VGOpnlGHWZxthPGR+QhR78fuiK0sNLkHQv+bL9fQi57lNNdquIbna/WrfROrolq8GK5Ek6BiMwqL/voRYQ==',
            dev: !0,
            requires: { 'is-glob': '^4.0.1' }
          },
          globals: {
            version: '12.4.0',
            resolved: 'https://registry.npmjs.org/globals/-/globals-12.4.0.tgz',
            integrity:
              'sha512-BWICuzzDvDoH54NHKCseDanAhE3CeDorgDL5MT6LMXXj2WCnd9UC2szdk4AWLfjdgNBCXLUanXYcpBBKOSWGwg==',
            dev: !0,
            requires: { 'type-fest': '^0.8.1' }
          },
          'graceful-fs': {
            version: '4.2.4',
            resolved: 'https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.4.tgz',
            integrity:
              'sha512-WjKPNJF79dtJAVniUlGGWHYGz2jWxT6VhN/4m1NdkbZ2nOsEF+cI1Edgql5zCRhs/VsQYRvrXctxktVXZUkixw==',
            dev: !0
          },
          handlebars: {
            version: '4.7.6',
            resolved: 'https://registry.npmjs.org/handlebars/-/handlebars-4.7.6.tgz',
            integrity:
              'sha512-1f2BACcBfiwAfStCKZNrUCgqNZkGsAT7UM3kkYtXuLo0KnaVfjKOyf7PRzB6++aK9STyT1Pd2ZCPe3EGOXleXA==',
            dev: !0,
            requires: {
              minimist: '^1.2.5',
              'neo-async': '^2.6.0',
              'source-map': '^0.6.1',
              'uglify-js': '^3.1.4',
              wordwrap: '^1.0.0'
            }
          },
          has: {
            version: '1.0.3',
            resolved: 'https://registry.npmjs.org/has/-/has-1.0.3.tgz',
            integrity:
              'sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==',
            dev: !0,
            requires: { 'function-bind': '^1.1.1' }
          },
          'has-flag': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz',
            integrity: 'sha1-tdRU3CGZriJWmfNGfloH87lVuv0=',
            dev: !0
          },
          'has-symbols': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz',
            integrity:
              'sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg==',
            dev: !0
          },
          'hosted-git-info': {
            version: '2.8.8',
            resolved: 'https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.8.tgz',
            integrity:
              'sha512-f/wzC2QaWBs7t9IYqB4T3sR1xviIViXJRJTWBlx2Gf3g0Xi5vI7Yy4koXQ1c9OYDGHN9sBy1DQ2AB8fqZBWhUg==',
            dev: !0
          },
          'iconv-lite': {
            version: '0.4.24',
            resolved: 'https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz',
            integrity:
              'sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==',
            dev: !0,
            requires: { 'safer-buffer': '>= 2.1.2 < 3' }
          },
          ignore: {
            version: '4.0.6',
            resolved: 'https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz',
            integrity:
              'sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==',
            dev: !0
          },
          'import-fresh': {
            version: '3.2.2',
            resolved: 'https://registry.npmjs.org/import-fresh/-/import-fresh-3.2.2.tgz',
            integrity:
              'sha512-cTPNrlvJT6twpYy+YmKUKrTSjWFs3bjYjAhCwm+z4EOCubZxAuO+hHpRN64TqjEaYSHs7tJAE0w1CKMGmsG/lw==',
            dev: !0,
            requires: { 'parent-module': '^1.0.0', 'resolve-from': '^4.0.0' }
          },
          imurmurhash: {
            version: '0.1.4',
            resolved: 'https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz',
            integrity: 'sha1-khi5srkoojixPcT7a21XbyMUU+o=',
            dev: !0
          },
          inflight: {
            version: '1.0.6',
            resolved: 'https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz',
            integrity: 'sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=',
            dev: !0,
            requires: { once: '^1.3.0', wrappy: '1' }
          },
          inherits: {
            version: '2.0.4',
            resolved: 'https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz',
            integrity: 'sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=='
          },
          inquirer: {
            version: '7.3.3',
            resolved: 'https://registry.npmjs.org/inquirer/-/inquirer-7.3.3.tgz',
            integrity:
              'sha512-JG3eIAj5V9CwcGvuOmoo6LB9kbAYT8HXffUl6memuszlwDC/qvFAJw49XJ5NROSFNPxp3iQg1GqkFhaY/CR0IA==',
            dev: !0,
            requires: {
              'ansi-escapes': '^4.2.1',
              chalk: '^4.1.0',
              'cli-cursor': '^3.1.0',
              'cli-width': '^3.0.0',
              'external-editor': '^3.0.3',
              figures: '^3.0.0',
              lodash: '^4.17.19',
              'mute-stream': '0.0.8',
              'run-async': '^2.4.0',
              rxjs: '^6.6.0',
              'string-width': '^4.1.0',
              'strip-ansi': '^6.0.0',
              through: '^2.3.6'
            },
            dependencies: {
              'ansi-styles': {
                version: '4.3.0',
                resolved: 'https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz',
                integrity:
                  'sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==',
                dev: !0,
                requires: { 'color-convert': '^2.0.1' }
              },
              chalk: {
                version: '4.1.0',
                resolved: 'https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz',
                integrity:
                  'sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==',
                dev: !0,
                requires: { 'ansi-styles': '^4.1.0', 'supports-color': '^7.1.0' }
              },
              'color-convert': {
                version: '2.0.1',
                resolved: 'https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz',
                integrity:
                  'sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==',
                dev: !0,
                requires: { 'color-name': '~1.1.4' }
              },
              'color-name': {
                version: '1.1.4',
                resolved: 'https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz',
                integrity:
                  'sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==',
                dev: !0
              },
              'has-flag': {
                version: '4.0.0',
                resolved: 'https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz',
                integrity:
                  'sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==',
                dev: !0
              },
              'strip-ansi': {
                version: '6.0.0',
                resolved: 'https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz',
                integrity:
                  'sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==',
                dev: !0,
                requires: { 'ansi-regex': '^5.0.0' }
              },
              'supports-color': {
                version: '7.2.0',
                resolved: 'https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz',
                integrity:
                  'sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==',
                dev: !0,
                requires: { 'has-flag': '^4.0.0' }
              }
            }
          },
          'is-arrayish': {
            version: '0.2.1',
            resolved: 'https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz',
            integrity: 'sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=',
            dev: !0
          },
          'is-callable': {
            version: '1.2.2',
            resolved: 'https://registry.npmjs.org/is-callable/-/is-callable-1.2.2.tgz',
            integrity:
              'sha512-dnMqspv5nU3LoewK2N/y7KLtxtakvTuaCsU9FU50/QDmdbHNy/4/JuRtMHqRU22o3q+W89YQndQEeCVwK+3qrA==',
            dev: !0
          },
          'is-core-module': {
            version: '2.2.0',
            resolved: 'https://registry.npmjs.org/is-core-module/-/is-core-module-2.2.0.tgz',
            integrity:
              'sha512-XRAfAdyyY5F5cOXn7hYQDqh2Xmii+DEfIcQGxK/uNwMHhIkPWO0g8msXcbzLe+MpGoR951MlqM/2iIlU4vKDdQ==',
            dev: !0,
            requires: { has: '^1.0.3' }
          },
          'is-date-object': {
            version: '1.0.2',
            resolved: 'https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz',
            integrity:
              'sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==',
            dev: !0
          },
          'is-extglob': {
            version: '2.1.1',
            resolved: 'https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz',
            integrity: 'sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=',
            dev: !0
          },
          'is-fullwidth-code-point': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz',
            integrity:
              'sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==',
            dev: !0
          },
          'is-glob': {
            version: '4.0.1',
            resolved: 'https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz',
            integrity:
              'sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==',
            dev: !0,
            requires: { 'is-extglob': '^2.1.1' }
          },
          'is-negative-zero': {
            version: '2.0.1',
            resolved: 'https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.1.tgz',
            integrity:
              'sha512-2z6JzQvZRa9A2Y7xC6dQQm4FSTSTNWjKIYYTt4246eMTJmIo0Q+ZyOsU66X8lxK1AbB92dFeglPLrhwpeRKO6w==',
            dev: !0
          },
          'is-regex': {
            version: '1.1.1',
            resolved: 'https://registry.npmjs.org/is-regex/-/is-regex-1.1.1.tgz',
            integrity:
              'sha512-1+QkEcxiLlB7VEyFtyBg94e08OAsvq7FUBgApTq/w2ymCLyKJgDPsybBENVtA7XCQEgEXxKPonG+mvYRxh/LIg==',
            dev: !0,
            requires: { 'has-symbols': '^1.0.1' }
          },
          'is-string': {
            version: '1.0.5',
            resolved: 'https://registry.npmjs.org/is-string/-/is-string-1.0.5.tgz',
            integrity:
              'sha512-buY6VNRjhQMiF1qWDouloZlQbRhDPCebwxSjxMjxgemYT46YMd2NR0/H+fBhEfWX4A/w9TBJ+ol+okqJKFE6vQ==',
            dev: !0
          },
          'is-symbol': {
            version: '1.0.3',
            resolved: 'https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz',
            integrity:
              'sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==',
            dev: !0,
            requires: { 'has-symbols': '^1.0.1' }
          },
          isarray: {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz',
            integrity: 'sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=',
            dev: !0
          },
          isexe: {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz',
            integrity: 'sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=',
            dev: !0
          },
          'js-tokens': {
            version: '4.0.0',
            resolved: 'https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz',
            integrity:
              'sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==',
            dev: !0
          },
          'js-yaml': {
            version: '3.14.1',
            resolved: 'https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz',
            integrity:
              'sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==',
            dev: !0,
            requires: { argparse: '^1.0.7', esprima: '^4.0.0' }
          },
          js2xmlparser: {
            version: '4.0.1',
            resolved: 'https://registry.npmjs.org/js2xmlparser/-/js2xmlparser-4.0.1.tgz',
            integrity:
              'sha512-KrPTolcw6RocpYjdC7pL7v62e55q7qOMHvLX1UCLc5AAS8qeJ6nukarEJAF2KL2PZxlbGueEbINqZR2bDe/gUw==',
            dev: !0,
            requires: { xmlcreate: '^2.0.3' }
          },
          jsdoc: {
            version: '3.6.6',
            resolved: 'https://registry.npmjs.org/jsdoc/-/jsdoc-3.6.6.tgz',
            integrity:
              'sha512-znR99e1BHeyEkSvgDDpX0sTiTu+8aQyDl9DawrkOGZTTW8hv0deIFXx87114zJ7gRaDZKVQD/4tr1ifmJp9xhQ==',
            dev: !0,
            requires: {
              '@babel/parser': '^7.9.4',
              bluebird: '^3.7.2',
              catharsis: '^0.8.11',
              'escape-string-regexp': '^2.0.0',
              js2xmlparser: '^4.0.1',
              klaw: '^3.0.0',
              'markdown-it': '^10.0.0',
              'markdown-it-anchor': '^5.2.7',
              marked: '^0.8.2',
              mkdirp: '^1.0.4',
              requizzle: '^0.2.3',
              'strip-json-comments': '^3.1.0',
              taffydb: '2.6.2',
              underscore: '~1.10.2'
            },
            dependencies: {
              'escape-string-regexp': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz',
                integrity:
                  'sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==',
                dev: !0
              },
              marked: {
                version: '0.8.2',
                resolved: 'https://registry.npmjs.org/marked/-/marked-0.8.2.tgz',
                integrity:
                  'sha512-EGwzEeCcLniFX51DhTpmTom+dSA/MG/OBUDjnWtHbEnjAH180VzUeAw+oE4+Zv+CoYBWyRlYOTR0N8SO9R1PVw==',
                dev: !0
              },
              mkdirp: {
                version: '1.0.4',
                resolved: 'https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz',
                integrity:
                  'sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==',
                dev: !0
              }
            }
          },
          'jsdoc-api': {
            version: '5.0.4',
            resolved: 'https://registry.npmjs.org/jsdoc-api/-/jsdoc-api-5.0.4.tgz',
            integrity:
              'sha512-1KMwLnfo0FyhF06TQKzqIm8BiY1yoMIGICxRdJHUjzskaHMzHMmpLlmNFgzoa4pAC8t1CDPK5jWuQTvv1pBsEQ==',
            dev: !0,
            requires: {
              'array-back': '^4.0.0',
              'cache-point': '^1.0.0',
              'collect-all': '^1.0.3',
              'file-set': '^2.0.1',
              'fs-then-native': '^2.0.0',
              jsdoc: '^3.6.3',
              'object-to-spawn-args': '^1.1.1',
              'temp-path': '^1.0.0',
              'walk-back': '^3.0.1'
            },
            dependencies: {
              'file-set': {
                version: '2.0.1',
                resolved: 'https://registry.npmjs.org/file-set/-/file-set-2.0.1.tgz',
                integrity:
                  'sha512-XgOUUpgR6FbbfYcniLw0qm1Am7PnNYIAkd+eXxRt42LiYhjaso0WiuQ+VmrNdtwotyM+cLCfZ56AZrySP3QnKA==',
                dev: !0,
                requires: { 'array-back': '^2.0.0', glob: '^7.1.3' },
                dependencies: {
                  'array-back': {
                    version: '2.0.0',
                    resolved: 'https://registry.npmjs.org/array-back/-/array-back-2.0.0.tgz',
                    integrity:
                      'sha512-eJv4pLLufP3g5kcZry0j6WXpIbzYw9GUB4mVJZno9wfwiBxbizTnHCw3VJb07cBihbFX48Y7oSrW9y+gt4glyw==',
                    dev: !0,
                    requires: { typical: '^2.6.1' }
                  }
                }
              },
              'walk-back': {
                version: '3.0.1',
                resolved: 'https://registry.npmjs.org/walk-back/-/walk-back-3.0.1.tgz',
                integrity:
                  'sha512-umiNB2qLO731Sxbp6cfZ9pwURJzTnftxE4Gc7hq8n/ehkuXC//s9F65IEIJA2ZytQZ1ZOsm/Fju4IWx0bivkUQ==',
                dev: !0
              }
            }
          },
          'jsdoc-parse': {
            version: '4.0.1',
            resolved: 'https://registry.npmjs.org/jsdoc-parse/-/jsdoc-parse-4.0.1.tgz',
            integrity:
              'sha512-qIObw8yqYZjrP2qxWROB5eLQFLTUX2jRGLhW9hjo2CC2fQVlskidCIzjCoctwsDvauBp2a/lR31jkSleczSo8Q==',
            dev: !0,
            requires: {
              'array-back': '^4.0.0',
              'lodash.omit': '^4.5.0',
              'lodash.pick': '^4.4.0',
              'reduce-extract': '^1.0.0',
              'sort-array': '^2.0.0',
              'test-value': '^3.0.0'
            }
          },
          'jsdoc-to-markdown': {
            version: '5.0.3',
            resolved: 'https://registry.npmjs.org/jsdoc-to-markdown/-/jsdoc-to-markdown-5.0.3.tgz',
            integrity:
              'sha512-tQv5tBV0fTYidRQtE60lJKxE98mmuLcYuITFDKQiDPE9hGccpeEGUNFcVkInq1vigyuPnZmt79bQ8wv2GKjY0Q==',
            dev: !0,
            requires: {
              'array-back': '^4.0.1',
              'command-line-tool': '^0.8.0',
              'config-master': '^3.1.0',
              dmd: '^4.0.5',
              'jsdoc-api': '^5.0.4',
              'jsdoc-parse': '^4.0.1',
              'walk-back': '^4.0.0'
            }
          },
          'json-schema-traverse': {
            version: '0.4.1',
            resolved: 'https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz',
            integrity: 'sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=='
          },
          'json-stable-stringify-without-jsonify': {
            version: '1.0.1',
            resolved:
              'https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz',
            integrity: 'sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=',
            dev: !0
          },
          json5: {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/json5/-/json5-1.0.1.tgz',
            integrity:
              'sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==',
            dev: !0,
            requires: { minimist: '^1.2.0' }
          },
          klaw: {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/klaw/-/klaw-3.0.0.tgz',
            integrity:
              'sha512-0Fo5oir+O9jnXu5EefYbVK+mHMBeEVEy2cmctR1O1NECcCkPRreJKrS6Qt/j3KC2C148Dfo9i3pCmCMsdqGr0g==',
            dev: !0,
            requires: { 'graceful-fs': '^4.1.9' }
          },
          levn: {
            version: '0.3.0',
            resolved: 'https://registry.npmjs.org/levn/-/levn-0.3.0.tgz',
            integrity: 'sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=',
            dev: !0,
            requires: { 'prelude-ls': '~1.1.2', 'type-check': '~0.3.2' }
          },
          'linkify-it': {
            version: '2.2.0',
            resolved: 'https://registry.npmjs.org/linkify-it/-/linkify-it-2.2.0.tgz',
            integrity:
              'sha512-GnAl/knGn+i1U/wjBz3akz2stz+HrHLsxMwHQGofCDfPvlf+gDKN58UtfmUquTY4/MXeE2x7k19KQmeoZi94Iw==',
            dev: !0,
            requires: { 'uc.micro': '^1.0.1' }
          },
          'load-json-file': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz',
            integrity: 'sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=',
            dev: !0,
            requires: { 'graceful-fs': '^4.1.2', 'parse-json': '^2.2.0', pify: '^2.0.0', 'strip-bom': '^3.0.0' }
          },
          'locate-path': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz',
            integrity:
              'sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==',
            dev: !0,
            requires: { 'p-locate': '^3.0.0', 'path-exists': '^3.0.0' }
          },
          lodash: {
            version: '4.17.20',
            resolved: 'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
            integrity:
              'sha512-PlhdFcillOINfeV7Ni6oF1TAEayyZBoZ8bcshTHqOYJYlrqzRK5hagpagky5o4HfCzzd1TRkXPMFq6cKk9rGmA==',
            dev: !0
          },
          'lodash.camelcase': {
            version: '4.3.0',
            resolved: 'https://registry.npmjs.org/lodash.camelcase/-/lodash.camelcase-4.3.0.tgz',
            integrity: 'sha1-soqmKIorn8ZRA1x3EfZathkDMaY=',
            dev: !0
          },
          'lodash.get': {
            version: '4.4.2',
            resolved: 'https://registry.npmjs.org/lodash.get/-/lodash.get-4.4.2.tgz',
            integrity: 'sha1-LRd/ZS+jHpObRDjVNBSZ36OCXpk='
          },
          'lodash.omit': {
            version: '4.5.0',
            resolved: 'https://registry.npmjs.org/lodash.omit/-/lodash.omit-4.5.0.tgz',
            integrity: 'sha1-brGa5aHuHdnfC5aeZs4Lf6MLXmA=',
            dev: !0
          },
          'lodash.padend': {
            version: '4.6.1',
            resolved: 'https://registry.npmjs.org/lodash.padend/-/lodash.padend-4.6.1.tgz',
            integrity: 'sha1-U8y6BH0G4VjTEfRdpiX05J5vFm4=',
            dev: !0
          },
          'lodash.pick': {
            version: '4.4.0',
            resolved: 'https://registry.npmjs.org/lodash.pick/-/lodash.pick-4.4.0.tgz',
            integrity: 'sha1-UvBWEP/53tQiYRRB7R/BI6AwAbM=',
            dev: !0
          },
          'lodash.reduce': {
            version: '4.6.0',
            resolved: 'https://registry.npmjs.org/lodash.reduce/-/lodash.reduce-4.6.0.tgz',
            integrity: 'sha1-8atrg5KZrUj3hKu/R2WW8DuRTTs='
          },
          'lru-cache': {
            version: '6.0.0',
            resolved: 'https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz',
            integrity:
              'sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==',
            dev: !0,
            requires: { yallist: '^4.0.0' }
          },
          'markdown-it': {
            version: '10.0.0',
            resolved: 'https://registry.npmjs.org/markdown-it/-/markdown-it-10.0.0.tgz',
            integrity:
              'sha512-YWOP1j7UbDNz+TumYP1kpwnP0aEa711cJjrAQrzd0UXlbJfc5aAq0F/PZHjiioqDC1NKgvIMX+o+9Bk7yuM2dg==',
            dev: !0,
            requires: {
              argparse: '^1.0.7',
              entities: '~2.0.0',
              'linkify-it': '^2.0.0',
              mdurl: '^1.0.1',
              'uc.micro': '^1.0.5'
            }
          },
          'markdown-it-anchor': {
            version: '5.3.0',
            resolved: 'https://registry.npmjs.org/markdown-it-anchor/-/markdown-it-anchor-5.3.0.tgz',
            integrity:
              'sha512-/V1MnLL/rgJ3jkMWo84UR+K+jF1cxNG1a+KwqeXqTIJ+jtA8aWSHuigx8lTzauiIjBDbwF3NcWQMotd0Dm39jA==',
            dev: !0
          },
          marked: {
            version: '0.7.0',
            resolved: 'https://registry.npmjs.org/marked/-/marked-0.7.0.tgz',
            integrity:
              'sha512-c+yYdCZJQrsRjTPhUx7VKkApw9bwDkNbHUKo1ovgcfDjb2kc8rLuRbIFyXL5WOEUwzSSKo3IXpph2K6DqB/KZg==',
            dev: !0
          },
          mdurl: {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/mdurl/-/mdurl-1.0.1.tgz',
            integrity: 'sha1-/oWy7HWlkDfyrf7BAP1sYBdhFS4=',
            dev: !0
          },
          'mimic-fn': {
            version: '2.1.0',
            resolved: 'https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz',
            integrity:
              'sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==',
            dev: !0
          },
          minimatch: {
            version: '3.0.4',
            resolved: 'https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz',
            integrity:
              'sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==',
            dev: !0,
            requires: { 'brace-expansion': '^1.1.7' }
          },
          minimist: {
            version: '1.2.5',
            resolved: 'https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz',
            integrity:
              'sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==',
            dev: !0
          },
          mkdirp: {
            version: '0.5.5',
            resolved: 'https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz',
            integrity:
              'sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==',
            dev: !0,
            requires: { minimist: '^1.2.5' }
          },
          mkdirp2: {
            version: '1.0.4',
            resolved: 'https://registry.npmjs.org/mkdirp2/-/mkdirp2-1.0.4.tgz',
            integrity:
              'sha512-Q2PKB4ZR4UPtjLl76JfzlgSCUZhSV1AXQgAZa1qt5RiaALFjP/CDrGvFBrOz7Ck6McPcwMAxTsJvWOUjOU8XMw==',
            dev: !0
          },
          ms: {
            version: '2.1.2',
            resolved: 'https://registry.npmjs.org/ms/-/ms-2.1.2.tgz',
            integrity:
              'sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==',
            dev: !0
          },
          'mute-stream': {
            version: '0.0.8',
            resolved: 'https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz',
            integrity:
              'sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA==',
            dev: !0
          },
          'natural-compare': {
            version: '1.4.0',
            resolved: 'https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz',
            integrity: 'sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=',
            dev: !0
          },
          'neo-async': {
            version: '2.6.2',
            resolved: 'https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz',
            integrity:
              'sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==',
            dev: !0
          },
          'nice-try': {
            version: '1.0.5',
            resolved: 'https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz',
            integrity:
              'sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==',
            dev: !0
          },
          'node-fetch': {
            version: '2.6.1',
            resolved: 'https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.1.tgz',
            integrity: 'sha512-V4aYg89jEoVRxRb2fJdAg8FHvI7cEyYdVAh94HH0UIK8oJxUfkjlDQN9RbMx+bEjP7+ggMiFRprSti032Oipxw=='
          },
          'normalize-package-data': {
            version: '2.5.0',
            resolved: 'https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz',
            integrity:
              'sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==',
            dev: !0,
            requires: {
              'hosted-git-info': '^2.1.4',
              resolve: '^1.10.0',
              semver: '2 || 3 || 4 || 5',
              'validate-npm-package-license': '^3.0.1'
            },
            dependencies: {
              semver: {
                version: '5.7.1',
                resolved: 'https://registry.npmjs.org/semver/-/semver-5.7.1.tgz',
                integrity:
                  'sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==',
                dev: !0
              }
            }
          },
          'object-get': {
            version: '2.1.1',
            resolved: 'https://registry.npmjs.org/object-get/-/object-get-2.1.1.tgz',
            integrity:
              'sha512-7n4IpLMzGGcLEMiQKsNR7vCe+N5E9LORFrtNUVy4sO3dj9a3HedZCxEL2T7QuLhcHN1NBuBsMOKaOsAYI9IIvg==',
            dev: !0
          },
          'object-inspect': {
            version: '1.9.0',
            resolved: 'https://registry.npmjs.org/object-inspect/-/object-inspect-1.9.0.tgz',
            integrity:
              'sha512-i3Bp9iTqwhaLZBxGkRfo5ZbE07BQRT7MGu8+nNgwW9ItGp1TzCTw2DLEoWwjClxBjOFI/hWljTAmYGCEwmtnOw==',
            dev: !0
          },
          'object-keys': {
            version: '1.1.1',
            resolved: 'https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz',
            integrity:
              'sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==',
            dev: !0
          },
          'object-path': {
            version: '0.11.5',
            resolved: 'https://registry.npmjs.org/object-path/-/object-path-0.11.5.tgz',
            integrity: 'sha512-jgSbThcoR/s+XumvGMTMf81QVBmah+/Q7K7YduKeKVWL7N111unR2d6pZZarSk6kY/caeNxUDyxOvMWyzoU2eg=='
          },
          'object-to-spawn-args': {
            version: '1.1.1',
            resolved: 'https://registry.npmjs.org/object-to-spawn-args/-/object-to-spawn-args-1.1.1.tgz',
            integrity: 'sha1-d9qIJ/Bz0BHJ4bFz+JV4FHAkZ4U=',
            dev: !0
          },
          'object.assign': {
            version: '4.1.2',
            resolved: 'https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz',
            integrity:
              'sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==',
            dev: !0,
            requires: {
              'call-bind': '^1.0.0',
              'define-properties': '^1.1.3',
              'has-symbols': '^1.0.1',
              'object-keys': '^1.1.1'
            }
          },
          'object.values': {
            version: '1.1.2',
            resolved: 'https://registry.npmjs.org/object.values/-/object.values-1.1.2.tgz',
            integrity:
              'sha512-MYC0jvJopr8EK6dPBiO8Nb9mvjdypOachO5REGk6MXzujbBrAisKo3HmdEI6kZDL6fC31Mwee/5YbtMebixeag==',
            dev: !0,
            requires: {
              'call-bind': '^1.0.0',
              'define-properties': '^1.1.3',
              'es-abstract': '^1.18.0-next.1',
              has: '^1.0.3'
            }
          },
          once: {
            version: '1.4.0',
            resolved: 'https://registry.npmjs.org/once/-/once-1.4.0.tgz',
            integrity: 'sha1-WDsap3WWHUsROsF9nFC6753Xa9E=',
            dev: !0,
            requires: { wrappy: '1' }
          },
          onetime: {
            version: '5.1.2',
            resolved: 'https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz',
            integrity:
              'sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==',
            dev: !0,
            requires: { 'mimic-fn': '^2.1.0' }
          },
          optionator: {
            version: '0.8.3',
            resolved: 'https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz',
            integrity:
              'sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==',
            dev: !0,
            requires: {
              'deep-is': '~0.1.3',
              'fast-levenshtein': '~2.0.6',
              levn: '~0.3.0',
              'prelude-ls': '~1.1.2',
              'type-check': '~0.3.2',
              'word-wrap': '~1.2.3'
            }
          },
          'os-tmpdir': {
            version: '1.0.2',
            resolved: 'https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz',
            integrity: 'sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=',
            dev: !0
          },
          'p-limit': {
            version: '2.3.0',
            resolved: 'https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz',
            integrity:
              'sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==',
            dev: !0,
            requires: { 'p-try': '^2.0.0' }
          },
          'p-locate': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz',
            integrity:
              'sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==',
            dev: !0,
            requires: { 'p-limit': '^2.0.0' }
          },
          'p-try': {
            version: '2.2.0',
            resolved: 'https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz',
            integrity:
              'sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==',
            dev: !0
          },
          'parent-module': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz',
            integrity:
              'sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==',
            dev: !0,
            requires: { callsites: '^3.0.0' }
          },
          'parse-json': {
            version: '2.2.0',
            resolved: 'https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz',
            integrity: 'sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=',
            dev: !0,
            requires: { 'error-ex': '^1.2.0' }
          },
          path: {
            version: '0.12.7',
            resolved: 'https://registry.npmjs.org/path/-/path-0.12.7.tgz',
            integrity: 'sha1-1NwqUGxM4hl+tIHr/NWzbAFAsQ8=',
            dev: !0,
            requires: { process: '^0.11.1', util: '^0.10.3' }
          },
          'path-exists': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz',
            integrity: 'sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=',
            dev: !0
          },
          'path-is-absolute': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz',
            integrity: 'sha1-F0uSaHNVNP+8es5r9TpanhtcX18=',
            dev: !0
          },
          'path-key': {
            version: '2.0.1',
            resolved: 'https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz',
            integrity: 'sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=',
            dev: !0
          },
          'path-parse': {
            version: '1.0.6',
            resolved: 'https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz',
            integrity:
              'sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw==',
            dev: !0
          },
          'path-type': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz',
            integrity: 'sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=',
            dev: !0,
            requires: { pify: '^2.0.0' }
          },
          pify: {
            version: '2.3.0',
            resolved: 'https://registry.npmjs.org/pify/-/pify-2.3.0.tgz',
            integrity: 'sha1-7RQaasBDqEnqWISY59yosVMw6Qw=',
            dev: !0
          },
          'pkg-dir': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/pkg-dir/-/pkg-dir-2.0.0.tgz',
            integrity: 'sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=',
            dev: !0,
            requires: { 'find-up': '^2.1.0' },
            dependencies: {
              'find-up': {
                version: '2.1.0',
                resolved: 'https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz',
                integrity: 'sha1-RdG35QbHF93UgndaK3eSCjwMV6c=',
                dev: !0,
                requires: { 'locate-path': '^2.0.0' }
              },
              'locate-path': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz',
                integrity: 'sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=',
                dev: !0,
                requires: { 'p-locate': '^2.0.0', 'path-exists': '^3.0.0' }
              },
              'p-limit': {
                version: '1.3.0',
                resolved: 'https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz',
                integrity:
                  'sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==',
                dev: !0,
                requires: { 'p-try': '^1.0.0' }
              },
              'p-locate': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz',
                integrity: 'sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=',
                dev: !0,
                requires: { 'p-limit': '^1.1.0' }
              },
              'p-try': {
                version: '1.0.0',
                resolved: 'https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz',
                integrity: 'sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=',
                dev: !0
              }
            }
          },
          'prelude-ls': {
            version: '1.1.2',
            resolved: 'https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz',
            integrity: 'sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=',
            dev: !0
          },
          'prismarine-nbt': {
            version: '1.3.0',
            resolved: 'https://registry.npmjs.org/prismarine-nbt/-/prismarine-nbt-1.3.0.tgz',
            integrity:
              'sha512-QDXP3uaoZGFo0WsTq6yTxL/s+Syt/7wKhD5Jlq+2Ilfx0b8r8h6SlrashUnhgin7S2JKDytvQRRJu0aZfCHhTQ==',
            requires: { protodef: '^1.7.0' }
          },
          process: {
            version: '0.11.10',
            resolved: 'https://registry.npmjs.org/process/-/process-0.11.10.tgz',
            integrity: 'sha1-czIwDoQBYb2j5podHZGn1LwW8YI=',
            dev: !0
          },
          progress: {
            version: '2.0.3',
            resolved: 'https://registry.npmjs.org/progress/-/progress-2.0.3.tgz',
            integrity:
              'sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==',
            dev: !0
          },
          protodef: {
            version: '1.8.3',
            resolved: 'https://registry.npmjs.org/protodef/-/protodef-1.8.3.tgz',
            integrity:
              'sha512-q78K4/8rAwA8e7MU8+aqzO+DLAUOsjnpUAOHOh8AgzYBH9e8ugjtpkio0WI+gM6d2uwn3cz81xFlEchY8KJZtw==',
            requires: {
              'lodash.get': '^4.4.2',
              'lodash.reduce': '^4.6.0',
              'protodef-validator': '^1.2.2',
              'readable-stream': '^3.0.3'
            }
          },
          'protodef-validator': {
            version: '1.2.3',
            resolved: 'https://registry.npmjs.org/protodef-validator/-/protodef-validator-1.2.3.tgz',
            integrity:
              'sha512-dMcSMYRh8s0z0iQN0PLVlXwJOgN8cgBuM1uWzhMjkLdpKCOASwp+h7wHnTigBTRVhGLywykcb3EKiGSsXX4vvA==',
            requires: { ajv: '^6.5.4' }
          },
          punycode: {
            version: '2.1.1',
            resolved: 'https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz',
            integrity: 'sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=='
          },
          'read-pkg': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz',
            integrity: 'sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=',
            dev: !0,
            requires: { 'load-json-file': '^2.0.0', 'normalize-package-data': '^2.3.2', 'path-type': '^2.0.0' }
          },
          'read-pkg-up': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz',
            integrity: 'sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=',
            dev: !0,
            requires: { 'find-up': '^2.0.0', 'read-pkg': '^2.0.0' },
            dependencies: {
              'find-up': {
                version: '2.1.0',
                resolved: 'https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz',
                integrity: 'sha1-RdG35QbHF93UgndaK3eSCjwMV6c=',
                dev: !0,
                requires: { 'locate-path': '^2.0.0' }
              },
              'locate-path': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz',
                integrity: 'sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=',
                dev: !0,
                requires: { 'p-locate': '^2.0.0', 'path-exists': '^3.0.0' }
              },
              'p-limit': {
                version: '1.3.0',
                resolved: 'https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz',
                integrity:
                  'sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==',
                dev: !0,
                requires: { 'p-try': '^1.0.0' }
              },
              'p-locate': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz',
                integrity: 'sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=',
                dev: !0,
                requires: { 'p-limit': '^1.1.0' }
              },
              'p-try': {
                version: '1.0.0',
                resolved: 'https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz',
                integrity: 'sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=',
                dev: !0
              }
            }
          },
          'readable-stream': {
            version: '3.6.0',
            resolved: 'https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz',
            integrity:
              'sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==',
            requires: { inherits: '^2.0.3', string_decoder: '^1.1.1', 'util-deprecate': '^1.0.1' }
          },
          'reduce-extract': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/reduce-extract/-/reduce-extract-1.0.0.tgz',
            integrity: 'sha1-Z/I4W+2mUGG19fQxJmLosIDKFSU=',
            dev: !0,
            requires: { 'test-value': '^1.0.1' },
            dependencies: {
              'array-back': {
                version: '1.0.4',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-1.0.4.tgz',
                integrity: 'sha1-ZEun8JX3/898Q7Xw3DnTwfA8Bjs=',
                dev: !0,
                requires: { typical: '^2.6.0' }
              },
              'test-value': {
                version: '1.1.0',
                resolved: 'https://registry.npmjs.org/test-value/-/test-value-1.1.0.tgz',
                integrity: 'sha1-oJE29y7AQ9J8iTcHwrFZv6196T8=',
                dev: !0,
                requires: { 'array-back': '^1.0.2', typical: '^2.4.2' }
              }
            }
          },
          'reduce-flatten': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/reduce-flatten/-/reduce-flatten-1.0.1.tgz',
            integrity: 'sha1-JYx479FT3fk8tWEjf2EYTzaW4yc=',
            dev: !0
          },
          'reduce-unique': {
            version: '2.0.1',
            resolved: 'https://registry.npmjs.org/reduce-unique/-/reduce-unique-2.0.1.tgz',
            integrity:
              'sha512-x4jH/8L1eyZGR785WY+ePtyMNhycl1N2XOLxhCbzZFaqF4AXjLzqSxa2UHgJ2ZVR/HHyPOvl1L7xRnW8ye5MdA==',
            dev: !0
          },
          'reduce-without': {
            version: '1.0.1',
            resolved: 'https://registry.npmjs.org/reduce-without/-/reduce-without-1.0.1.tgz',
            integrity: 'sha1-aK0OrRGFXJo31OglbBW7+Hly/Iw=',
            dev: !0,
            requires: { 'test-value': '^2.0.0' },
            dependencies: {
              'array-back': {
                version: '1.0.4',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-1.0.4.tgz',
                integrity: 'sha1-ZEun8JX3/898Q7Xw3DnTwfA8Bjs=',
                dev: !0,
                requires: { typical: '^2.6.0' }
              },
              'test-value': {
                version: '2.1.0',
                resolved: 'https://registry.npmjs.org/test-value/-/test-value-2.1.0.tgz',
                integrity: 'sha1-Edpv9nDzRxpztiXKTz/c97t0gpE=',
                dev: !0,
                requires: { 'array-back': '^1.0.3', typical: '^2.6.0' }
              }
            }
          },
          regexpp: {
            version: '2.0.1',
            resolved: 'https://registry.npmjs.org/regexpp/-/regexpp-2.0.1.tgz',
            integrity:
              'sha512-lv0M6+TkDVniA3aD1Eg0DVpfU/booSu7Eev3TDO/mZKHBfVjgCGTV4t4buppESEYDtkArYFOxTJWv6S5C+iaNw==',
            dev: !0
          },
          'require-directory': {
            version: '2.1.1',
            resolved: 'https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz',
            integrity: 'sha1-jGStX9MNqxyXbiNE/+f3kqam30I=',
            dev: !0
          },
          'require-main-filename': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz',
            integrity:
              'sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==',
            dev: !0
          },
          requizzle: {
            version: '0.2.3',
            resolved: 'https://registry.npmjs.org/requizzle/-/requizzle-0.2.3.tgz',
            integrity:
              'sha512-YanoyJjykPxGHii0fZP0uUPEXpvqfBDxWV7s6GKAiiOsiqhX6vHNyW3Qzdmqp/iq/ExbhaGbVrjB4ruEVSM4GQ==',
            dev: !0,
            requires: { lodash: '^4.17.14' }
          },
          resolve: {
            version: '1.19.0',
            resolved: 'https://registry.npmjs.org/resolve/-/resolve-1.19.0.tgz',
            integrity:
              'sha512-rArEXAgsBG4UgRGcynxWIWKFvh/XZCcS8UJdHhwy91zwAvCZIbcs+vAbflgBnNjYMs/i/i+/Ux6IZhML1yPvxg==',
            dev: !0,
            requires: { 'is-core-module': '^2.1.0', 'path-parse': '^1.0.6' }
          },
          'resolve-from': {
            version: '4.0.0',
            resolved: 'https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz',
            integrity:
              'sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==',
            dev: !0
          },
          'restore-cursor': {
            version: '3.1.0',
            resolved: 'https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz',
            integrity:
              'sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==',
            dev: !0,
            requires: { onetime: '^5.1.0', 'signal-exit': '^3.0.2' }
          },
          rimraf: {
            version: '2.6.3',
            resolved: 'https://registry.npmjs.org/rimraf/-/rimraf-2.6.3.tgz',
            integrity:
              'sha512-mwqeW5XsA2qAejG46gYdENaxXjx9onRNCfn7L0duuP4hCuTIi/QO7PDK07KJfp1d+izWPrzEJDcSqBa0OZQriA==',
            dev: !0,
            requires: { glob: '^7.1.3' }
          },
          'rss-parser': {
            version: '3.10.0',
            resolved: 'https://registry.npmjs.org/rss-parser/-/rss-parser-3.10.0.tgz',
            integrity:
              'sha512-TC6FNvEmdFeaW6r/60MSJT7cp4d95X4M9As+mvNtxRx7YXHxpV95syMnWZthZSeD1BRN7SEKdq6c3nxMLQRopw==',
            requires: { entities: '^2.0.3', xml2js: '^0.4.19' }
          },
          'run-async': {
            version: '2.4.1',
            resolved: 'https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz',
            integrity:
              'sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ==',
            dev: !0
          },
          rxjs: {
            version: '6.6.3',
            resolved: 'https://registry.npmjs.org/rxjs/-/rxjs-6.6.3.tgz',
            integrity:
              'sha512-trsQc+xYYXZ3urjOiJOuCOa5N3jAZ3eiSpQB5hIT8zGlL2QfnHLJ2r7GMkBGuIausdJN1OneaI6gQlsqNHHmZQ==',
            dev: !0,
            requires: { tslib: '^1.9.0' }
          },
          'safe-buffer': {
            version: '5.2.1',
            resolved: 'https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz',
            integrity: 'sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=='
          },
          'safer-buffer': {
            version: '2.1.2',
            resolved: 'https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz',
            integrity:
              'sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==',
            dev: !0
          },
          sax: {
            version: '1.2.4',
            resolved: 'https://registry.npmjs.org/sax/-/sax-1.2.4.tgz',
            integrity: 'sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=='
          },
          semver: {
            version: '6.3.0',
            resolved: 'https://registry.npmjs.org/semver/-/semver-6.3.0.tgz',
            integrity:
              'sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==',
            dev: !0
          },
          'set-blocking': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz',
            integrity: 'sha1-BF+XgtARrppoA93TgrJDkrPYkPc=',
            dev: !0
          },
          'shebang-command': {
            version: '1.2.0',
            resolved: 'https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz',
            integrity: 'sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=',
            dev: !0,
            requires: { 'shebang-regex': '^1.0.0' }
          },
          'shebang-regex': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz',
            integrity: 'sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=',
            dev: !0
          },
          'signal-exit': {
            version: '3.0.3',
            resolved: 'https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz',
            integrity:
              'sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA==',
            dev: !0
          },
          'slice-ansi': {
            version: '2.1.0',
            resolved: 'https://registry.npmjs.org/slice-ansi/-/slice-ansi-2.1.0.tgz',
            integrity:
              'sha512-Qu+VC3EwYLldKa1fCxuuvULvSJOKEgk9pi8dZeCVK7TqBfUNTH4sFkk4joj8afVSfAYgJoSOetjx9QWOJ5mYoQ==',
            dev: !0,
            requires: { 'ansi-styles': '^3.2.0', 'astral-regex': '^1.0.0', 'is-fullwidth-code-point': '^2.0.0' },
            dependencies: {
              'is-fullwidth-code-point': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz',
                integrity: 'sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=',
                dev: !0
              }
            }
          },
          'sort-array': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/sort-array/-/sort-array-2.0.0.tgz',
            integrity: 'sha1-OKnG2if9fRR7QuYFVPKBGHtN9HI=',
            dev: !0,
            requires: { 'array-back': '^1.0.4', 'object-get': '^2.1.0', typical: '^2.6.0' },
            dependencies: {
              'array-back': {
                version: '1.0.4',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-1.0.4.tgz',
                integrity: 'sha1-ZEun8JX3/898Q7Xw3DnTwfA8Bjs=',
                dev: !0,
                requires: { typical: '^2.6.0' }
              }
            }
          },
          'source-map': {
            version: '0.6.1',
            resolved: 'https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz',
            integrity:
              'sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==',
            dev: !0
          },
          'spdx-correct': {
            version: '3.1.1',
            resolved: 'https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz',
            integrity:
              'sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==',
            dev: !0,
            requires: { 'spdx-expression-parse': '^3.0.0', 'spdx-license-ids': '^3.0.0' }
          },
          'spdx-exceptions': {
            version: '2.3.0',
            resolved: 'https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz',
            integrity:
              'sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==',
            dev: !0
          },
          'spdx-expression-parse': {
            version: '3.0.1',
            resolved: 'https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz',
            integrity:
              'sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==',
            dev: !0,
            requires: { 'spdx-exceptions': '^2.1.0', 'spdx-license-ids': '^3.0.0' }
          },
          'spdx-license-ids': {
            version: '3.0.7',
            resolved: 'https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.7.tgz',
            integrity:
              'sha512-U+MTEOO0AiDzxwFvoa4JVnMV6mZlJKk2sBLt90s7G0Gd0Mlknc7kxEn3nuDPNZRta7O2uy8oLcZLVT+4sqNZHQ==',
            dev: !0
          },
          'sprintf-js': {
            version: '1.0.3',
            resolved: 'https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz',
            integrity: 'sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=',
            dev: !0
          },
          'stream-connect': {
            version: '1.0.2',
            resolved: 'https://registry.npmjs.org/stream-connect/-/stream-connect-1.0.2.tgz',
            integrity: 'sha1-GLyB8u2zW4tdmoAJIAqYUxRCipc=',
            dev: !0,
            requires: { 'array-back': '^1.0.2' },
            dependencies: {
              'array-back': {
                version: '1.0.4',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-1.0.4.tgz',
                integrity: 'sha1-ZEun8JX3/898Q7Xw3DnTwfA8Bjs=',
                dev: !0,
                requires: { typical: '^2.6.0' }
              }
            }
          },
          'stream-via': {
            version: '1.0.4',
            resolved: 'https://registry.npmjs.org/stream-via/-/stream-via-1.0.4.tgz',
            integrity:
              'sha512-DBp0lSvX5G9KGRDTkR/R+a29H+Wk2xItOF+MpZLLNDWbEV9tGPnqLPxHEYjmiz8xGtJHRIqmI+hCjmNzqoA4nQ==',
            dev: !0
          },
          'string-width': {
            version: '4.2.0',
            resolved: 'https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz',
            integrity:
              'sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==',
            dev: !0,
            requires: { 'emoji-regex': '^8.0.0', 'is-fullwidth-code-point': '^3.0.0', 'strip-ansi': '^6.0.0' },
            dependencies: {
              'strip-ansi': {
                version: '6.0.0',
                resolved: 'https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz',
                integrity:
                  'sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==',
                dev: !0,
                requires: { 'ansi-regex': '^5.0.0' }
              }
            }
          },
          'string.prototype.trimend': {
            version: '1.0.3',
            resolved: 'https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.3.tgz',
            integrity:
              'sha512-ayH0pB+uf0U28CtjlLvL7NaohvR1amUvVZk+y3DYb0Ey2PUV5zPkkKy9+U1ndVEIXO8hNg18eIv9Jntbii+dKw==',
            dev: !0,
            requires: { 'call-bind': '^1.0.0', 'define-properties': '^1.1.3' }
          },
          'string.prototype.trimstart': {
            version: '1.0.3',
            resolved: 'https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.3.tgz',
            integrity:
              'sha512-oBIBUy5lea5tt0ovtOFiEQaBkoBBkyJhZXzJYrSmDo5IUUqbOPvVezuRs/agBIdZ2p2Eo1FD6bD9USyBLfl3xg==',
            dev: !0,
            requires: { 'call-bind': '^1.0.0', 'define-properties': '^1.1.3' }
          },
          string_decoder: {
            version: '1.3.0',
            resolved: 'https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz',
            integrity:
              'sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==',
            requires: { 'safe-buffer': '~5.2.0' }
          },
          'strip-ansi': {
            version: '5.2.0',
            resolved: 'https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz',
            integrity:
              'sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==',
            dev: !0,
            requires: { 'ansi-regex': '^4.1.0' },
            dependencies: {
              'ansi-regex': {
                version: '4.1.0',
                resolved: 'https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz',
                integrity:
                  'sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==',
                dev: !0
              }
            }
          },
          'strip-bom': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz',
            integrity: 'sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=',
            dev: !0
          },
          'strip-json-comments': {
            version: '3.1.1',
            resolved: 'https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz',
            integrity:
              'sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==',
            dev: !0
          },
          'supports-color': {
            version: '5.5.0',
            resolved: 'https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz',
            integrity:
              'sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==',
            dev: !0,
            requires: { 'has-flag': '^3.0.0' }
          },
          table: {
            version: '5.4.6',
            resolved: 'https://registry.npmjs.org/table/-/table-5.4.6.tgz',
            integrity:
              'sha512-wmEc8m4fjnob4gt5riFRtTu/6+4rSe12TpAELNSqHMfF3IqnA+CH37USM6/YR3qRZv7e56kAEAtd6nKZaxe0Ug==',
            dev: !0,
            requires: { ajv: '^6.10.2', lodash: '^4.17.14', 'slice-ansi': '^2.1.0', 'string-width': '^3.0.0' },
            dependencies: {
              'emoji-regex': {
                version: '7.0.3',
                resolved: 'https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz',
                integrity:
                  'sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==',
                dev: !0
              },
              'is-fullwidth-code-point': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz',
                integrity: 'sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=',
                dev: !0
              },
              'string-width': {
                version: '3.1.0',
                resolved: 'https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz',
                integrity:
                  'sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==',
                dev: !0,
                requires: { 'emoji-regex': '^7.0.1', 'is-fullwidth-code-point': '^2.0.0', 'strip-ansi': '^5.1.0' }
              }
            }
          },
          'table-layout': {
            version: '0.4.5',
            resolved: 'https://registry.npmjs.org/table-layout/-/table-layout-0.4.5.tgz',
            integrity:
              'sha512-zTvf0mcggrGeTe/2jJ6ECkJHAQPIYEwDoqsiqBjI24mvRmQbInK5jq33fyypaCBxX08hMkfmdOqj6haT33EqWw==',
            dev: !0,
            requires: {
              'array-back': '^2.0.0',
              'deep-extend': '~0.6.0',
              'lodash.padend': '^4.6.1',
              typical: '^2.6.1',
              wordwrapjs: '^3.0.0'
            },
            dependencies: {
              'array-back': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-2.0.0.tgz',
                integrity:
                  'sha512-eJv4pLLufP3g5kcZry0j6WXpIbzYw9GUB4mVJZno9wfwiBxbizTnHCw3VJb07cBihbFX48Y7oSrW9y+gt4glyw==',
                dev: !0,
                requires: { typical: '^2.6.1' }
              }
            }
          },
          taffydb: {
            version: '2.6.2',
            resolved: 'https://registry.npmjs.org/taffydb/-/taffydb-2.6.2.tgz',
            integrity: 'sha1-fLy2S1oUG2ou/CxdLGe04VCyomg=',
            dev: !0
          },
          'temp-path': {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/temp-path/-/temp-path-1.0.0.tgz',
            integrity: 'sha1-JLFUOXOrRCiW2a02fdnL2/r+kYs=',
            dev: !0
          },
          'test-value': {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/test-value/-/test-value-3.0.0.tgz',
            integrity:
              'sha512-sVACdAWcZkSU9x7AOmJo5TqE+GyNJknHaHsMrR6ZnhjVlVN9Yx6FjHrsKZ3BjIpPCT68zYesPWkakrNupwfOTQ==',
            dev: !0,
            requires: { 'array-back': '^2.0.0', typical: '^2.6.1' },
            dependencies: {
              'array-back': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/array-back/-/array-back-2.0.0.tgz',
                integrity:
                  'sha512-eJv4pLLufP3g5kcZry0j6WXpIbzYw9GUB4mVJZno9wfwiBxbizTnHCw3VJb07cBihbFX48Y7oSrW9y+gt4glyw==',
                dev: !0,
                requires: { typical: '^2.6.1' }
              }
            }
          },
          'text-table': {
            version: '0.2.0',
            resolved: 'https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz',
            integrity: 'sha1-f17oI66AUgfACvLfSoTsP8+lcLQ=',
            dev: !0
          },
          through: {
            version: '2.3.8',
            resolved: 'https://registry.npmjs.org/through/-/through-2.3.8.tgz',
            integrity: 'sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=',
            dev: !0
          },
          tmp: {
            version: '0.0.33',
            resolved: 'https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz',
            integrity:
              'sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==',
            dev: !0,
            requires: { 'os-tmpdir': '~1.0.2' }
          },
          'tsconfig-paths': {
            version: '3.9.0',
            resolved: 'https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.9.0.tgz',
            integrity:
              'sha512-dRcuzokWhajtZWkQsDVKbWyY+jgcLC5sqJhg2PSgf4ZkH2aHPvaOY8YWGhmjb68b5qqTfasSsDO9k7RUiEmZAw==',
            dev: !0,
            requires: { '@types/json5': '^0.0.29', json5: '^1.0.1', minimist: '^1.2.0', 'strip-bom': '^3.0.0' }
          },
          tslib: {
            version: '1.14.1',
            resolved: 'https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz',
            integrity:
              'sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==',
            dev: !0
          },
          tslint: {
            version: '6.1.3',
            resolved: 'https://registry.npmjs.org/tslint/-/tslint-6.1.3.tgz',
            integrity:
              'sha512-IbR4nkT96EQOvKE2PW/djGz8iGNeJ4rF2mBfiYaR/nvUWYKJhLwimoJKgjIFEIDibBtOevj7BqCRL4oHeWWUCg==',
            dev: !0,
            requires: {
              '@babel/code-frame': '^7.0.0',
              'builtin-modules': '^1.1.1',
              chalk: '^2.3.0',
              commander: '^2.12.1',
              diff: '^4.0.1',
              glob: '^7.1.1',
              'js-yaml': '^3.13.1',
              minimatch: '^3.0.4',
              mkdirp: '^0.5.3',
              resolve: '^1.3.2',
              semver: '^5.3.0',
              tslib: '^1.13.0',
              tsutils: '^2.29.0'
            },
            dependencies: {
              semver: {
                version: '5.7.1',
                resolved: 'https://registry.npmjs.org/semver/-/semver-5.7.1.tgz',
                integrity:
                  'sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==',
                dev: !0
              }
            }
          },
          tsubaki: {
            version: '1.3.8',
            resolved: 'https://registry.npmjs.org/tsubaki/-/tsubaki-1.3.8.tgz',
            integrity:
              'sha512-fct/w19g2bKfuUGKaXDrynXPrKTa2Kl/0ya2o9MP7oN38So9wXqCYZBJTI2u8uIvP4vCICuIj36Wmb7VkYeShA==',
            dev: !0
          },
          tsutils: {
            version: '2.29.0',
            resolved: 'https://registry.npmjs.org/tsutils/-/tsutils-2.29.0.tgz',
            integrity:
              'sha512-g5JVHCIJwzfISaXpXE1qvNalca5Jwob6FjI4AoPlqMusJ6ftFE7IkkFoMhVLRgK+4Kx3gkzb8UZK5t5yTTvEmA==',
            dev: !0,
            requires: { tslib: '^1.8.1' }
          },
          'type-check': {
            version: '0.3.2',
            resolved: 'https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz',
            integrity: 'sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=',
            dev: !0,
            requires: { 'prelude-ls': '~1.1.2' }
          },
          'type-fest': {
            version: '0.8.1',
            resolved: 'https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz',
            integrity:
              'sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==',
            dev: !0
          },
          typescript: {
            version: '4.1.3',
            resolved: 'https://registry.npmjs.org/typescript/-/typescript-4.1.3.tgz',
            integrity:
              'sha512-B3ZIOf1IKeH2ixgHhj6la6xdwR9QrLC5d1VKeCSY4tvkqhF2eqd9O7txNlS0PO3GrBAFIdr3L1ndNwteUbZLYg==',
            dev: !0
          },
          typical: {
            version: '2.6.1',
            resolved: 'https://registry.npmjs.org/typical/-/typical-2.6.1.tgz',
            integrity: 'sha1-XAgOXWYcu+OCWdLnCjxyU+hziB0=',
            dev: !0
          },
          'uc.micro': {
            version: '1.0.6',
            resolved: 'https://registry.npmjs.org/uc.micro/-/uc.micro-1.0.6.tgz',
            integrity:
              'sha512-8Y75pvTYkLJW2hWQHXxoqRgV7qb9B+9vFEtidML+7koHUFapnVJAZ6cKs+Qjz5Aw3aZWHMC6u0wJE3At+nSGwA==',
            dev: !0
          },
          'uglify-js': {
            version: '3.12.1',
            resolved: 'https://registry.npmjs.org/uglify-js/-/uglify-js-3.12.1.tgz',
            integrity:
              'sha512-o8lHP20KjIiQe5b/67Rh68xEGRrc2SRsCuuoYclXXoC74AfSRGblU1HKzJWH3HxPZ+Ort85fWHpSX7KwBUC9CQ==',
            dev: !0,
            optional: !0
          },
          underscore: {
            version: '1.10.2',
            resolved: 'https://registry.npmjs.org/underscore/-/underscore-1.10.2.tgz',
            integrity:
              'sha512-N4P+Q/BuyuEKFJ43B9gYuOj4TQUHXX+j2FqguVOpjkssLUUrnJofCcBccJSCoeturDoZU6GorDTHSvUDlSQbTg==',
            dev: !0
          },
          'uri-js': {
            version: '4.4.0',
            resolved: 'https://registry.npmjs.org/uri-js/-/uri-js-4.4.0.tgz',
            integrity:
              'sha512-B0yRTzYdUCCn9n+F4+Gh4yIDtMQcaJsmYBDsTSG8g/OejKBodLQ2IHfN3bM7jUsRXndopT7OIXWdYqc1fjmV6g==',
            requires: { punycode: '^2.1.0' }
          },
          util: {
            version: '0.10.4',
            resolved: 'https://registry.npmjs.org/util/-/util-0.10.4.tgz',
            integrity:
              'sha512-0Pm9hTQ3se5ll1XihRic3FDIku70C+iHUdT/W926rSgHV5QgXsYbKZN8MSC3tJtSkhuROzvsQjAaFENRXr+19A==',
            dev: !0,
            requires: { inherits: '2.0.3' },
            dependencies: {
              inherits: {
                version: '2.0.3',
                resolved: 'https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz',
                integrity: 'sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=',
                dev: !0
              }
            }
          },
          'util-deprecate': {
            version: '1.0.2',
            resolved: 'https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz',
            integrity: 'sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8='
          },
          'v8-compile-cache': {
            version: '2.2.0',
            resolved: 'https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.2.0.tgz',
            integrity:
              'sha512-gTpR5XQNKFwOd4clxfnhaqvfqMpqEwr4tOtCyz4MtYZX2JYhfr1JvBFKdS+7K/9rfpZR3VLX+YWBbKoxCgS43Q==',
            dev: !0
          },
          'validate-npm-package-license': {
            version: '3.0.4',
            resolved:
              'https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz',
            integrity:
              'sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==',
            dev: !0,
            requires: { 'spdx-correct': '^3.0.0', 'spdx-expression-parse': '^3.0.0' }
          },
          'walk-back': {
            version: '4.0.0',
            resolved: 'https://registry.npmjs.org/walk-back/-/walk-back-4.0.0.tgz',
            integrity:
              'sha512-kudCA8PXVQfrqv2mFTG72vDBRi8BKWxGgFLwPpzHcpZnSwZk93WMwUDVcLHWNsnm+Y0AC4Vb6MUNRgaHfyV2DQ==',
            dev: !0
          },
          which: {
            version: '1.3.1',
            resolved: 'https://registry.npmjs.org/which/-/which-1.3.1.tgz',
            integrity:
              'sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==',
            dev: !0,
            requires: { isexe: '^2.0.0' }
          },
          'which-module': {
            version: '2.0.0',
            resolved: 'https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz',
            integrity: 'sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=',
            dev: !0
          },
          'word-wrap': {
            version: '1.2.3',
            resolved: 'https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz',
            integrity:
              'sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==',
            dev: !0
          },
          wordwrap: {
            version: '1.0.0',
            resolved: 'https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz',
            integrity: 'sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus=',
            dev: !0
          },
          wordwrapjs: {
            version: '3.0.0',
            resolved: 'https://registry.npmjs.org/wordwrapjs/-/wordwrapjs-3.0.0.tgz',
            integrity:
              'sha512-mO8XtqyPvykVCsrwj5MlOVWvSnCdT+C+QVbm6blradR7JExAhbkZ7hZ9A+9NUtwzSqrlUo9a67ws0EiILrvRpw==',
            dev: !0,
            requires: { 'reduce-flatten': '^1.0.1', typical: '^2.6.1' }
          },
          'wrap-ansi': {
            version: '5.1.0',
            resolved: 'https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz',
            integrity:
              'sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==',
            dev: !0,
            requires: { 'ansi-styles': '^3.2.0', 'string-width': '^3.0.0', 'strip-ansi': '^5.0.0' },
            dependencies: {
              'emoji-regex': {
                version: '7.0.3',
                resolved: 'https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz',
                integrity:
                  'sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==',
                dev: !0
              },
              'is-fullwidth-code-point': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz',
                integrity: 'sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=',
                dev: !0
              },
              'string-width': {
                version: '3.1.0',
                resolved: 'https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz',
                integrity:
                  'sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==',
                dev: !0,
                requires: { 'emoji-regex': '^7.0.1', 'is-fullwidth-code-point': '^2.0.0', 'strip-ansi': '^5.1.0' }
              }
            }
          },
          wrappy: {
            version: '1.0.2',
            resolved: 'https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz',
            integrity: 'sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=',
            dev: !0
          },
          write: {
            version: '1.0.3',
            resolved: 'https://registry.npmjs.org/write/-/write-1.0.3.tgz',
            integrity:
              'sha512-/lg70HAjtkUgWPVZhZcm+T4hkL8Zbtp1nFNOn3lRrxnlv50SRBv7cR7RqR+GMsd3hUXy9hWBo4CHTbFTcOYwig==',
            dev: !0,
            requires: { mkdirp: '^0.5.1' }
          },
          xml2js: {
            version: '0.4.23',
            resolved: 'https://registry.npmjs.org/xml2js/-/xml2js-0.4.23.tgz',
            integrity:
              'sha512-ySPiMjM0+pLDftHgXY4By0uswI3SPKLDw/i3UXbnO8M/p28zqexCUoPmQFrYD+/1BzhGJSs2i1ERWKJAtiLrug==',
            requires: { sax: '>=0.6.0', xmlbuilder: '~11.0.0' }
          },
          xmlbuilder: {
            version: '11.0.1',
            resolved: 'https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-11.0.1.tgz',
            integrity: 'sha512-fDlsI/kFEx7gLvbecc0/ohLG50fugQp8ryHzMTuW9vSa1GJ0XYWKnhsUx7oie3G98+r56aTQIUB4kht42R3JvA=='
          },
          xmlcreate: {
            version: '2.0.3',
            resolved: 'https://registry.npmjs.org/xmlcreate/-/xmlcreate-2.0.3.tgz',
            integrity:
              'sha512-HgS+X6zAztGa9zIK3Y3LXuJes33Lz9x+YyTxgrkIdabu2vqcGOWwdfCpf1hWLRrd553wd4QCDf6BBO6FfdsRiQ==',
            dev: !0
          },
          y18n: {
            version: '4.0.1',
            resolved: 'https://registry.npmjs.org/y18n/-/y18n-4.0.1.tgz',
            integrity:
              'sha512-wNcy4NvjMYL8gogWWYAO7ZFWFfHcbdbE57tZO8e4cbpj8tfUcwrwqSl3ad8HxpYWCdXcJUCeKKZS62Av1affwQ==',
            dev: !0
          },
          yallist: {
            version: '4.0.0',
            resolved: 'https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz',
            integrity:
              'sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==',
            dev: !0
          },
          yargs: {
            version: '14.2.3',
            resolved: 'https://registry.npmjs.org/yargs/-/yargs-14.2.3.tgz',
            integrity:
              'sha512-ZbotRWhF+lkjijC/VhmOT9wSgyBQ7+zr13+YLkhfsSiTriYsMzkTUFP18pFhWwBeMa5gUc1MzbhrO6/VB7c9Xg==',
            dev: !0,
            requires: {
              cliui: '^5.0.0',
              decamelize: '^1.2.0',
              'find-up': '^3.0.0',
              'get-caller-file': '^2.0.1',
              'require-directory': '^2.1.1',
              'require-main-filename': '^2.0.0',
              'set-blocking': '^2.0.0',
              'string-width': '^3.0.0',
              'which-module': '^2.0.0',
              y18n: '^4.0.0',
              'yargs-parser': '^15.0.1'
            },
            dependencies: {
              'emoji-regex': {
                version: '7.0.3',
                resolved: 'https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz',
                integrity:
                  'sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==',
                dev: !0
              },
              'is-fullwidth-code-point': {
                version: '2.0.0',
                resolved: 'https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz',
                integrity: 'sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=',
                dev: !0
              },
              'string-width': {
                version: '3.1.0',
                resolved: 'https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz',
                integrity:
                  'sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==',
                dev: !0,
                requires: { 'emoji-regex': '^7.0.1', 'is-fullwidth-code-point': '^2.0.0', 'strip-ansi': '^5.1.0' }
              }
            }
          },
          'yargs-parser': {
            version: '15.0.1',
            resolved: 'https://registry.npmjs.org/yargs-parser/-/yargs-parser-15.0.1.tgz',
            integrity:
              'sha512-0OAMV2mAZQrs3FkNpDQcBk1x5HXb8X4twADss4S0Iuk+2dGnLOE/fRHrsYm542GduMveyA77OF4wrNJuanRCWw==',
            dev: !0,
            requires: { camelcase: '^5.0.0', decamelize: '^1.2.0' }
          }
        }
      };
    },
    Iyms: function (e, t) {},
    KxB8: function (e, t) {},
    N0fi: function (e, t) {},
    NALb: function (e, t) {},
    NHnr: function (e, t, s) {
      'use strict';
      function r(e) {
        s('8DNi');
      }
      function i(e) {
        s('QUVa');
      }
      function a(e) {
        s('NALb');
      }
      function n(e) {
        s('N0fi');
      }
      function o(e) {
        if (window.hljs) window.hljs.highlightBlock(e);
        else
          var t = 0,
            s = setInterval(function () {
              window.hljs ? (window.hljs.highlightBlock(e), clearInterval(s)) : ++t >= 50 && clearInterval(s);
            }, 100);
      }
      function l(e, t, s, r, i) {
        return Object(xt.resolve)(e, t + '/' + s + (r ? '/' + r : '') + (i ? '#L' + i : ''));
      }
      function c(e, t) {
        var s = e.match(/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/i);
        s && (e = s[1]);
        var r = s ? s[2] : null,
          i = e.split(/(\.|#)/);
        return t.links[i[0]]
          ? {
              text: r || e,
              link:
                'object' === qt()(t.links[i[0]])
                  ? {
                      name: t.links[i[0]].name,
                      params: t.links[i[0]].params,
                      query: { scrollTo: i[1] ? ('.' === i[1] ? 's-' : '') + i[2] : void 0 }
                    }
                  : t.links[i[0]]
            }
          : e.match(/^https?:\/\//i)
            ? { text: r || e, link: e }
            : { text: r || e };
      }
      function p(e, t, s, r) {
        if (!e) return null;
        for (var i = /\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/gi, a = void 0, n = '', o = 0; (a = i.exec(e)); ) {
          n += e.slice(o, a.index);
          var l = c(a[0], t);
          if (l.link) {
            var p = void 0;
            'object' === qt()(l.link)
              ? (l.link.params || (l.link.params = {}),
                (l.link.params.source = r.params.source),
                (l.link.params.tag = r.params.tag),
                (p = s.resolve(l.link).href))
              : (p = l.link),
              (n += '[' + l.text + '](' + p + ')');
          } else n += l.text;
          o = a.index + a[0].length;
        }
        return n ? (n += e.slice(o)) : e;
      }
      function d(e) {
        return ('static' === e.scope ? 's-' : '') + e.name;
      }
      function m(e) {
        return 'string' == typeof e ? e : e.join('-');
      }
      function u(e) {
        s('EFfJ');
      }
      function g(e) {
        s('frPy');
      }
      function h(e) {
        s('n1Fm');
      }
      function y(e) {
        s('t5H2');
      }
      function v(e) {
        s('809j');
      }
      function f(e) {
        s('R+Wx');
      }
      function b(e) {
        s('i34D');
      }
      function k(e) {
        s('/Muf');
      }
      function j(e) {
        s('KxB8');
      }
      function w(e) {
        s('SQv5');
      }
      function C(e) {
        s('qvys');
      }
      function S(e) {
        s('C0Js');
      }
      function A(e) {
        s('SVOi');
      }
      function z(e) {
        s('pgmh');
      }
      function L(e) {
        s('9SiY');
      }
      function M(e) {
        s('t2Up');
      }
      function q(e) {
        s('PBIT');
      }
      function x(e, t) {
        return t + ('static' === e.scope ? '.' : '#') + e.name;
      }
      function G(e) {
        s('q4Z2');
      }
      function B(e) {
        s('Iyms');
      }
      function T(e) {
        s('tzlZ');
      }
      function R(e) {
        s('Aw40');
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var P = s('/5sW'),
        E = s('EFqf'),
        I = s.n(E),
        D = s('woOf'),
        W = s.n(D),
        _ = { name: 'logoSquare', props: ['light'] },
        K = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'svg',
            {
              attrs: {
                width: '64',
                height: '48',
                version: '1.1',
                viewBox: '0 0 30 30',
                xmlns: 'http://www.w3.org/2000/svg',
                'xmlns:cc': 'http://creativecommons.org/ns#',
                'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
                'xmlns:rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
              }
            },
            [
              s('g', [
                s('g', [
                  s('path', {
                    attrs: {
                      d: 'M17.572 23.933l4.106 7.095L32 13.189h-8.981V7.582L11.51.972 0 7.582v13.222l11.51 6.611 6.062-3.482zm10.96-8.744l-6.855 11.846-6.855-11.846h13.71z',
                      fill: '#ffffff'
                    }
                  })
                ])
              ])
            ]
          );
        },
        U = [],
        Z = { render: K, staticRenderFns: U },
        N = Z,
        F = s('VU/8'),
        O = F(_, N, !1, null, null, null),
        Q = O.exports,
        Y = s('lHA8'),
        H = s.n(Y),
        V = s('6S2P'),
        X = s.n(V),
        J = s('BO1k'),
        $ = s.n(J),
        ee = s('mvHQ'),
        te = s.n(ee),
        se = s('d7EF'),
        re = s.n(se),
        ie = s('//Fk'),
        ae = s.n(ie),
        ne = s('Zrlr'),
        oe = s.n(ne),
        le = s('wxAW'),
        ce = s.n(le),
        pe = function (e) {
          if (!e.ok) throw new Error('Failed to fetch github data');
          return e.json();
        },
        de = (function () {
          function e(t) {
            oe()(this, e),
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
            ce()(e, [
              {
                key: 'fetchTags',
                value: function () {
                  var e = this;
                  return this.tags
                    ? ae.a.resolve(this.tags)
                    : ae.a
                        .all([
                          fetch('https://api.github.com/repos/' + this.repo + '/branches').then(pe),
                          fetch('https://api.github.com/repos/' + this.repo + '/tags').then(pe)
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
                            i = s[1];
                          (e.tags = [e.defaultTag]), (localStorage['source-' + e.id] = te()({ branches: r, tags: i }));
                          var a = !0,
                            n = !1,
                            o = void 0;
                          try {
                            for (var l, c = $()(r); !(a = (l = c.next()).done); a = !0) {
                              var p = l.value;
                              p.name !== e.defaultTag && e.branchFilter(p.name) && e.tags.push(p.name);
                            }
                          } catch (e) {
                            (n = !0), (o = e);
                          } finally {
                            try {
                              !a && c.return && c.return();
                            } finally {
                              if (n) throw o;
                            }
                          }
                          var d = {},
                            m = !0,
                            u = !1,
                            g = void 0;
                          try {
                            for (var h, y = $()(i); !(m = (h = y.next()).done); m = !0) {
                              var v = h.value;
                              if (X.a.valid(v.name)) {
                                var f = X.a.major(v.name) + '.' + X.a.minor(v.name),
                                  b = X.a.patch(v.name);
                                if (b < d[f]) continue;
                                d[f] = b;
                              }
                            }
                          } catch (e) {
                            (u = !0), (g = e);
                          } finally {
                            try {
                              !m && y.return && y.return();
                            } finally {
                              if (u) throw g;
                            }
                          }
                          var k = !0,
                            j = !1,
                            w = void 0;
                          try {
                            for (var C, S = $()(i); !(k = (C = S.next()).done); k = !0) {
                              var A = C.value;
                              if (A.name !== e.defaultTag && e.tagFilter(A.name)) {
                                if (X.a.valid(A.name)) {
                                  var z = X.a.major(A.name) + '.' + X.a.minor(A.name);
                                  if (X.a.patch(A.name) < d[z]) continue;
                                }
                                e.tags.push(A.name);
                              }
                            }
                          } catch (e) {
                            (j = !0), (w = e);
                          } finally {
                            try {
                              !k && S.return && S.return();
                            } finally {
                              if (j) throw w;
                            }
                          }
                          return e.tags;
                        });
                }
              },
              {
                key: 'fetchDocs',
                value: function (e) {
                  return new ae.a(function (t, r) {
                    t(s('CzDu')('./' + e + '.json'));
                  });
                }
              }
            ]),
            e
          );
        })(),
        me = de,
        ue = new H.a(['docs', 'parsers', 'typehandler', 'stable', '7.x']),
        ge = new me({
          id: 'main',
          name: 'Main library',
          global: 'Hypixel',
          repo: 'hypixel-api-reborn/hypixel-api-reborn',
          defaultTag: 'master',
          defaultClass: 'Client',
          branchFilter: function (e) {
            return !ue.has(e);
          },
          tagFilter: function (e) {
            return X.a.gte(e, '3.0.0');
          }
        }),
        he = {
          name: 'navbar',
          props: ['repository'],
          components: { LogoSquare: Q },
          data: function () {
            return {
              docs: { class: ge.defaultClass },
              tutorials: { category: ge.defaultFile.category, file: ge.defaultFile.id }
            };
          },
          computed: {
            tag: function () {
              return this.$route.params.tag || ge.defaultTag;
            },
            source: function () {
              return this.$route.params.source || ge.id;
            }
          }
        },
        ye = function () {
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
        ve = [],
        fe = { render: ye, staticRenderFns: ve },
        be = fe,
        ke = s('VU/8'),
        je = r,
        we = ke(he, be, !1, je, null, null),
        Ce = we.exports,
        Se = s('Xxa5'),
        Ae = s.n(Se),
        ze = s('exGp'),
        Le = s.n(ze),
        Me = function (e) {
          return e.json();
        },
        qe = function () {},
        xe = { downloads: 'many', stars: 'a lot', contributors: 'some', fetching: !1 },
        Ge = {
          name: 'stats',
          data: function () {
            return xe;
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
              return Le()(
                Ae.a.mark(function t() {
                  var s, r, i, a, n, o, l, c, p, d, m;
                  return Ae.a.wrap(
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
                              ae.a.all([
                                fetch(
                                  'https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/hypixel-api-reborn'
                                ).then(Me, qe),
                                fetch('https://api.github.com/repos/hypixel-api-reborn/hypixel-api-reborn').then(
                                  Me,
                                  qe
                                ),
                                fetch(
                                  'https://api.github.com/repos/hypixel-api-reborn/hypixel-api-reborn/stats/contributors'
                                ).then(Me, qe)
                              ])
                            );
                          case 5:
                            if (((s = t.sent), (r = re()(s, 3)), (i = r[0]), (a = r[1]), (n = r[2]), !i)) {
                              t.next = 32;
                              break;
                            }
                            for (
                              e.downloads = 0, o = !0, l = !1, c = void 0, t.prev = 15, p = $()(i.downloads);
                              !(o = (d = p.next()).done);
                              o = !0
                            )
                              (m = d.value), (e.downloads += m.downloads);
                            t.next = 23;
                            break;
                          case 19:
                            (t.prev = 19), (t.t0 = t.catch(15)), (l = !0), (c = t.t0);
                          case 23:
                            (t.prev = 23), (t.prev = 24), !o && p.return && p.return();
                          case 26:
                            if (((t.prev = 26), !l)) {
                              t.next = 29;
                              break;
                            }
                            throw c;
                          case 29:
                            return t.finish(26);
                          case 30:
                            return t.finish(23);
                          case 31:
                            e.downloads = e.downloads.toLocaleString();
                          case 32:
                            a && (e.stars = a.stargazers_count.toLocaleString()),
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
        Be = function () {
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
        Te = [],
        Re = { render: Be, staticRenderFns: Te },
        Pe = Re,
        Ee = s('VU/8'),
        Ie = Ee(Ge, Pe, !1, null, null, null),
        De = Ie.exports,
        We = {
          name: 'footer',
          props: ['darkMode'],
          components: { Stats: De },
          methods: {
            toggleDarkMode: function (e) {
              this.$emit('toggleDarkMode'), e.preventDefault();
            }
          }
        },
        _e = function () {
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
        Ke = [],
        Ue = { render: _e, staticRenderFns: Ke },
        Ze = Ue,
        Ne = s('VU/8'),
        Fe = i,
        Oe = Ne(We, Ze, !1, Fe, null, null),
        Qe = Oe.exports,
        Ye = s('7ljE'),
        He = s.n(Ye),
        Ve = null,
        Xe = {
          name: 'app',
          components: { AppNavbar: Ce, AppFooter: Qe },
          data: function () {
            var e = localStorage.getItem('dark-mode');
            return { darkMode: 'false' !== e && null !== e, repository: ge.repo, konami: !1 };
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
                i = {
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
                a = {
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
              W()(t.style, i),
                window.setTimeout(function () {
                  W()(t.style, a);
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
              Ve ||
                (Ve = new He.a(function () {
                  (e.konami = !0), e.poop(), Ve.disable();
                }));
          }
        },
        Je = function () {
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
        $e = [],
        et = { render: Je, staticRenderFns: $e },
        tt = et,
        st = s('VU/8'),
        rt = a,
        it = st(Xe, tt, !1, rt, null, null),
        at = it.exports,
        nt = s('/ocq'),
        ot = { name: 'logo', props: ['light', 'konami'] },
        lt = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            'svg',
            {
              attrs: {
                width: '1500',
                height: '149',
                version: '1.1',
                viewBox: '0 0 150 1',
                xmlns: 'http://www.w3.org/2000/svg',
                'xmlns:cc': 'http://creativecommons.org/ns#',
                'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
                'xmlns:rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
              }
            },
            [
              s('g', [
                s('path', {
                  attrs: {
                    d: 'M3.00 0.81L3.00 0.81L3.00 4.56C3.00 4.82 3.21 5.03 3.46 5.03L6.27 5.03C6.52 5.03 6.73 4.82 6.73 4.56L6.73 0.81C6.73 0.56 6.52 0.35 6.27 0.35C6.01 0.35 5.80 0.56 5.80 0.81L5.80 4.09L3.93 4.09L3.93 0.81C3.93 0.56 3.72 0.35 3.46 0.35C3.21 0.35 3.00 0.56 3.00 0.81ZM6.73 10.18L6.73 10.18L6.73 6.43C6.73 6.17 6.52 5.96 6.27 5.96L3.46 5.96C3.21 5.96 3.00 6.17 3.00 6.43L3.00 10.18C3.00 10.43 3.21 10.64 3.46 10.64C3.72 10.64 3.93 10.43 3.93 10.18L3.93 6.90L5.80 6.90L5.80 10.18C5.80 10.43 6.01 10.64 6.27 10.64C6.52 10.64 6.73 10.43 6.73 10.18ZM2.06 10.18L2.06 10.18L2.06 0.81C2.06 0.56 1.85 0.35 1.60 0.35C1.33 0.35 1.12 0.56 1.12 0.81L1.12 10.18C1.12 10.43 1.33 10.64 1.60 10.64C1.85 10.64 2.06 10.43 2.06 10.18ZM7.67 0.81L7.67 0.81L7.67 10.18C7.67 10.43 7.88 10.64 8.13 10.64C8.40 10.64 8.61 10.43 8.61 10.18L8.61 0.81C8.61 0.56 8.40 0.35 8.13 0.35C7.88 0.35 7.67 0.56 7.67 0.81ZM14.07 4.07L14.07 4.07C14.28 4.42 14.70 4.45 14.91 4.09L16.81 0.90C16.94 0.66 16.87 0.38 16.65 0.25C16.44 0.11 16.14 0.18 16.00 0.41L14.49 2.97L12.98 0.41C12.85 0.18 12.56 0.11 12.35 0.25C12.11 0.38 12.04 0.66 12.18 0.90ZM18.30 0.41L18.30 0.41L15.02 5.63C14.98 5.71 14.95 5.81 14.95 5.89L14.95 10.32C14.95 10.58 15.18 10.79 15.43 10.79C15.68 10.79 15.90 10.58 15.90 10.32L15.90 6.01L19.08 0.90C19.22 0.67 19.15 0.39 18.94 0.25C18.72 0.11 18.44 0.17 18.30 0.41ZM14.03 10.32L14.03 10.32L14.03 5.88C14.03 5.78 14 5.70 13.94 5.60L10.70 0.41C10.56 0.17 10.26 0.11 10.05 0.25C9.83 0.39 9.77 0.67 9.90 0.90L13.09 6.01L13.09 10.32C13.09 10.58 13.30 10.79 13.57 10.79C13.82 10.79 14.03 10.58 14.03 10.32ZM24.30 5.03L24.30 5.03C26.18 5.03 26.18 2.23 24.30 2.23L22.65 2.23C22.04 2.23 22.04 3.16 22.65 3.16L24.30 3.16C24.95 3.16 24.95 4.10 24.30 4.10C23.94 4.10 23.31 3.99 23.31 4.56C23.31 5.12 23.94 5.03 24.30 5.03ZM21.25 10.16L21.25 10.16L21.25 1.29L24.47 1.29C27.48 1.29 27.48 5.96 24.47 5.96L22.65 5.96C22.40 5.96 22.18 6.17 22.18 6.43L22.18 10.16C22.18 10.78 23.13 10.78 23.13 10.16L23.13 6.90L24.47 6.90C28.70 6.90 28.71 0.36 24.47 0.36L20.78 0.36C20.52 0.36 20.31 0.56 20.31 0.84L20.31 10.16C20.31 10.78 21.25 10.78 21.25 10.16ZM32.05 10.18L32.05 10.18L32.05 0.81C32.05 0.56 31.84 0.35 31.58 0.35C31.32 0.35 31.11 0.56 31.11 0.81L31.11 10.18C31.11 10.43 31.32 10.64 31.58 10.64C31.84 10.64 32.05 10.43 32.05 10.18ZM30.17 10.18L30.17 10.18L30.17 0.81C30.17 0.56 29.96 0.35 29.71 0.35C29.44 0.35 29.23 0.56 29.23 0.81L29.23 10.18C29.23 10.43 29.44 10.64 29.71 10.64C29.96 10.64 30.17 10.43 30.17 10.18ZM35.81 0.88L35.81 0.88L37.28 3.42C37.45 3.71 37.90 3.71 38.07 3.42L39.54 0.88C39.84 0.35 39.05-0.11 38.75 0.42L37.69 2.27L36.61 0.42C36.30-0.11 35.52 0.35 35.81 0.88ZM39.90 10.08L39.90 10.08L38.07 6.94C37.90 6.64 37.45 6.64 37.28 6.94L35.45 10.08C35.15 10.61 35.94 11.07 36.26 10.54L37.69 8.09L39.10 10.54C39.41 11.07 40.19 10.61 39.90 10.08ZM34.15 10.49L34.15 10.49L37.10 5.38C37.20 5.22 37.18 5.05 37.09 4.91L34.50 0.41C34.19-0.11 33.40 0.35 33.70 0.87L36.18 5.14L33.35 10.02C33.04 10.54 33.82 11.02 34.15 10.49ZM40.85 0.41L40.85 0.41L38.26 4.91C38.16 5.07 38.16 5.24 38.26 5.39L41.22 10.49C41.52 11.02 42.31 10.54 42.01 10.02L39.17 5.14L41.65 0.87C41.96 0.35 41.16-0.11 40.85 0.41ZM48.61 2.23L48.61 2.23L45.64 2.23C45.37 2.23 45.16 2.42 45.16 2.69L45.16 4.56C45.16 4.82 45.37 5.03 45.64 5.03L47.74 5.03C48.01 5.03 48.22 4.82 48.22 4.56C48.22 4.30 48.01 4.09 47.74 4.09L46.10 4.09L46.10 3.15L48.61 3.15C48.87 3.15 49.08 2.94 49.08 2.69C49.08 2.42 48.87 2.23 48.61 2.23ZM47.74 5.96L47.74 5.96L45.64 5.96C45.37 5.96 45.16 6.17 45.16 6.43L45.16 8.30C45.16 8.55 45.37 8.76 45.64 8.76L48.61 8.76C48.87 8.76 49.08 8.55 49.08 8.30C49.08 8.04 48.87 7.83 48.61 7.83L46.10 7.83L46.10 6.90L47.74 6.90C48.01 6.90 48.22 6.69 48.22 6.43C48.22 6.17 48.01 5.96 47.74 5.96ZM48.61 9.70L48.61 9.70L44.24 9.70L44.24 1.29L48.61 1.29C48.87 1.29 49.08 1.08 49.08 0.81C49.08 0.56 48.87 0.35 48.61 0.35L43.76 0.35C43.51 0.35 43.30 0.56 43.30 0.81L43.30 10.18C43.30 10.43 43.51 10.64 43.76 10.64L48.61 10.64C48.87 10.64 49.08 10.43 49.08 10.18C49.08 9.91 48.87 9.70 48.61 9.70ZM56.88 9.70L56.88 9.70L51.90 9.70L51.90 0.81C51.90 0.56 51.69 0.35 51.44 0.35C51.17 0.35 50.96 0.56 50.96 0.81L50.96 10.18C50.96 10.43 51.17 10.64 51.44 10.64L56.88 10.64C57.15 10.64 57.34 10.43 57.34 10.18C57.34 9.91 57.15 9.70 56.88 9.70ZM52.84 0.81L52.84 0.81L52.84 8.30C52.84 8.55 53.05 8.76 53.30 8.76L56.88 8.76C57.15 8.76 57.34 8.55 57.34 8.30C57.34 8.04 57.15 7.83 56.88 7.83L53.77 7.83L53.77 0.81C53.77 0.56 53.56 0.35 53.30 0.35C53.05 0.35 52.84 0.56 52.84 0.81ZM65.74 7.84L65.74 7.84L67.10 7.84C67.37 7.84 67.59 7.63 67.59 7.36C67.59 7.29 67.58 7.24 67.55 7.18L66.86 5.50C66.77 5.28 66.50 5.17 66.25 5.26C66.02 5.35 65.91 5.63 66.00 5.87L66.42 6.90L65.74 6.90C65.49 6.90 65.28 7.10 65.28 7.36C65.28 7.63 65.49 7.84 65.74 7.84ZM65.06 10.26L65.06 10.26L65.30 9.72L67.56 9.72L67.79 10.26C67.89 10.51 68.17 10.61 68.40 10.53C68.64 10.42 68.74 10.15 68.66 9.91L68.32 9.10C68.26 8.92 68.08 8.76 67.87 8.76L64.97 8.76L64.97 8.76C64.81 8.76 64.62 8.89 64.54 9.06L64.20 9.91C64.11 10.15 64.22 10.42 64.46 10.53C64.71 10.61 64.97 10.50 65.06 10.26ZM63.06 10.26L63.06 10.26L66.43 1.76L69.80 10.26C69.90 10.50 70.18 10.61 70.42 10.53C70.66 10.42 70.77 10.15 70.67 9.91L66.86 0.36C66.82 0.25 66.74 0.14 66.60 0.10C66.37 0 66.09 0.11 66.00 0.36L62.17 9.91C62.09 10.15 62.22 10.42 62.44 10.53C62.68 10.61 62.94 10.50 63.06 10.26ZM76.10 5.03L76.10 5.03C77.98 5.03 77.98 2.23 76.10 2.23L74.45 2.23C73.84 2.23 73.84 3.16 74.45 3.16L76.10 3.16C76.75 3.16 76.75 4.10 76.10 4.10C75.74 4.10 75.11 3.99 75.11 4.56C75.11 5.12 75.74 5.03 76.10 5.03ZM73.05 10.16L73.05 10.16L73.05 1.29L76.27 1.29C79.28 1.29 79.28 5.96 76.27 5.96L74.45 5.96C74.20 5.96 73.98 6.17 73.98 6.43L73.98 10.16C73.98 10.78 74.93 10.78 74.93 10.16L74.93 6.90L76.27 6.90C80.50 6.90 80.51 0.36 76.27 0.36L72.58 0.36C72.32 0.36 72.11 0.56 72.11 0.84L72.11 10.16C72.11 10.78 73.05 10.78 73.05 10.16ZM83.85 10.18L83.85 10.18L83.85 0.81C83.85 0.56 83.64 0.35 83.38 0.35C83.12 0.35 82.91 0.56 82.91 0.81L82.91 10.18C82.91 10.43 83.12 10.64 83.38 10.64C83.64 10.64 83.85 10.43 83.85 10.18ZM81.97 10.18L81.97 10.18L81.97 0.81C81.97 0.56 81.76 0.35 81.51 0.35C81.24 0.35 81.03 0.56 81.03 0.81L81.03 10.18C81.03 10.43 81.24 10.64 81.51 10.64C81.76 10.64 81.97 10.43 81.97 10.18ZM90.65 4.35C89.80 4.35 89.17 5.00 89.17 5.84C89.17 6.66 89.80 7.31 90.65 7.31C91.50 7.31 92.12 6.65 92.12 5.84C92.12 5.00 91.50 4.35 90.65 4.35ZM101.51 5.03L101.51 5.03C102.28 5.03 102.93 4.42 102.93 3.64C102.93 2.93 102.37 2.21 101.51 2.21L99.85 2.21C99.23 2.21 99.23 3.15 99.85 3.15L101.51 3.15C101.78 3.15 102.00 3.35 102.00 3.63C102.00 4.17 101.49 4.10 101.05 4.10C100.30 4.10 100.32 4.98 101.05 5.03C101.21 5.04 101.39 5.03 101.51 5.03ZM102.38 9.90L102.38 9.90L100.24 6.83C99.97 6.48 99.39 6.62 99.39 7.13L99.39 10.18C99.39 10.79 100.32 10.79 100.32 10.18L100.32 8.58L101.61 10.44C101.98 10.95 102.73 10.40 102.38 9.90ZM98.45 10.18L98.45 10.18L98.45 1.29L101.67 1.29C102.30 1.29 102.87 1.54 103.29 1.96C104.73 3.42 103.73 5.96 101.67 5.96C101.32 5.96 101.04 6.37 101.32 6.73L103.91 10.44C104.24 10.95 105.01 10.40 104.66 9.90L102.49 6.79C103.05 6.65 103.56 6.34 103.96 5.94C105.98 3.86 104.54 0.35 101.67 0.35L97.99 0.35C97.73 0.35 97.51 0.56 97.51 0.81L97.51 10.18C97.51 10.79 98.45 10.79 98.45 10.18ZM111.55 2.23L111.55 2.23L108.58 2.23C108.32 2.23 108.11 2.42 108.11 2.69L108.11 4.56C108.11 4.82 108.32 5.03 108.58 5.03L110.68 5.03C110.95 5.03 111.16 4.82 111.16 4.56C111.16 4.30 110.95 4.09 110.68 4.09L109.05 4.09L109.05 3.15L111.55 3.15C111.82 3.15 112.03 2.94 112.03 2.69C112.03 2.42 111.82 2.23 111.55 2.23ZM110.68 5.96L110.68 5.96L108.58 5.96C108.32 5.96 108.11 6.17 108.11 6.43L108.11 8.30C108.11 8.55 108.32 8.76 108.58 8.76L111.55 8.76C111.82 8.76 112.03 8.55 112.03 8.30C112.03 8.04 111.82 7.83 111.55 7.83L109.05 7.83L109.05 6.90L110.68 6.90C110.95 6.90 111.16 6.69 111.16 6.43C111.16 6.17 110.95 5.96 110.68 5.96ZM111.55 9.70L111.55 9.70L107.18 9.70L107.18 1.29L111.55 1.29C111.82 1.29 112.03 1.08 112.03 0.81C112.03 0.56 111.82 0.35 111.55 0.35L106.71 0.35C106.46 0.35 106.25 0.56 106.25 0.81L106.25 10.18C106.25 10.43 106.46 10.64 106.71 10.64L111.55 10.64C111.82 10.64 112.03 10.43 112.03 10.18C112.03 9.91 111.82 9.70 111.55 9.70ZM117.89 8.78L117.89 8.78C118.30 8.78 118.65 8.62 118.90 8.37C119.80 7.49 119.20 5.96 117.89 5.96L116.26 5.96C115.64 5.96 115.64 6.89 116.26 6.89L117.89 6.89C118.19 6.89 118.38 7.08 118.38 7.36C118.38 8.29 116.90 7.39 116.90 8.30C116.90 8.88 117.56 8.78 117.89 8.78ZM116.26 3.14L116.26 3.14L117.89 3.14C118.19 3.14 118.38 3.35 118.38 3.61C118.38 4.19 117.75 4.09 117.38 4.09C116.76 4.09 116.76 5.03 117.38 5.03C117.95 5.03 118.43 5.08 118.90 4.62C119.80 3.75 119.20 2.20 117.89 2.20L116.26 2.20C115.64 2.20 115.64 3.14 116.26 3.14ZM114.84 10.19L114.84 10.19L114.84 1.26L118.06 1.26C119.35 1.26 120.37 2.32 120.37 3.61C120.37 5.08 119.25 5.25 119.80 5.84C121.03 7.10 120.22 9.72 118.08 9.72L116.26 9.72C115.64 9.72 115.64 10.67 116.26 10.67L118.08 10.67C120.69 10.67 122.22 7.64 120.74 5.49C121.14 4.90 121.31 4.24 121.31 3.58C121.31 1.82 119.98 0.31 118.06 0.31L114.37 0.31C114.11 0.31 113.90 0.53 113.90 0.78L113.90 10.19C113.90 10.81 114.84 10.81 114.84 10.19ZM133.25 3.88L133.25 3.88C132.90 2.77 132.20 1.83 131.29 1.16C130.38 0.52 129.29 0.14 128.09 0.14C120.99 0.14 120.99 10.82 128.09 10.82C129.29 10.82 130.38 10.43 131.29 9.79C132.20 9.13 132.90 8.18 133.25 7.08C133.32 6.83 133.20 6.55 132.94 6.48C132.69 6.41 132.41 6.54 132.34 6.79C132.05 7.70 131.49 8.47 130.72 9.02C129.99 9.55 129.08 9.86 128.09 9.86C122.25 9.86 122.25 1.09 128.09 1.09C129.08 1.09 129.99 1.41 130.72 1.93C131.49 2.49 132.05 3.26 132.34 4.16C132.41 4.41 132.69 4.55 132.94 4.47C133.20 4.40 133.32 4.13 133.25 3.88ZM125.20 7.17L125.20 7.17C125.50 7.69 125.92 8.12 126.42 8.43C126.92 8.71 127.50 8.88 128.09 8.88C129.02 8.88 129.86 8.50 130.48 7.87C131.07 7.25 131.45 6.41 131.45 5.47C131.45 4.54 131.07 3.70 130.48 3.08C129.86 2.46 129.02 2.09 128.09 2.09C127.50 2.09 126.92 2.24 126.42 2.53C125.92 2.83 125.50 3.26 125.20 3.78C125.06 4.02 125.15 4.31 125.37 4.44C125.61 4.56 125.89 4.48 126.01 4.24C126.24 3.88 126.55 3.57 126.91 3.36C127.26 3.15 127.65 3.04 128.09 3.04C128.76 3.04 129.36 3.32 129.78 3.75C130.23 4.19 130.49 4.80 130.49 5.47C130.49 6.16 130.23 6.78 129.78 7.21C129.36 7.66 128.76 7.92 128.09 7.92C127.65 7.92 127.25 7.80 126.91 7.59C126.55 7.39 126.24 7.07 126.01 6.71C125.89 6.47 125.61 6.40 125.37 6.52C125.15 6.66 125.06 6.93 125.20 7.17ZM139.16 5.03L139.16 5.03C139.93 5.03 140.57 4.42 140.57 3.64C140.57 2.93 140.01 2.21 139.16 2.21L137.49 2.21C136.88 2.21 136.88 3.15 137.49 3.15L139.16 3.15C139.43 3.15 139.65 3.35 139.65 3.63C139.65 4.17 139.13 4.10 138.70 4.10C137.94 4.10 137.97 4.98 138.70 5.03C138.85 5.04 139.03 5.03 139.16 5.03ZM140.03 9.90L140.03 9.90L137.89 6.83C137.62 6.48 137.03 6.62 137.03 7.13L137.03 10.18C137.03 10.79 137.97 10.79 137.97 10.18L137.97 8.58L139.26 10.44C139.62 10.95 140.38 10.40 140.03 9.90ZM136.09 10.18L136.09 10.18L136.09 1.29L139.31 1.29C139.94 1.29 140.52 1.54 140.94 1.96C142.38 3.42 141.37 5.96 139.31 5.96C138.96 5.96 138.68 6.37 138.96 6.73L141.55 10.44C141.89 10.95 142.66 10.40 142.31 9.90L140.14 6.79C140.70 6.65 141.20 6.34 141.61 5.94C143.63 3.86 142.18 0.35 139.31 0.35L135.63 0.35C135.38 0.35 135.16 0.56 135.16 0.81L135.16 10.18C135.16 10.79 136.09 10.79 136.09 10.18ZM144.82 10.18L144.82 10.18L144.82 0.81C144.82 0.56 144.62 0.36 144.35 0.36C144.10 0.36 143.89 0.56 143.89 0.81L143.89 10.18C143.89 10.43 144.10 10.65 144.35 10.65C144.62 10.65 144.82 10.43 144.82 10.18ZM152.46 10.18L152.46 10.18L152.46 0.81C152.46 0.56 152.25 0.36 151.98 0.36C151.73 0.36 151.52 0.56 151.52 0.81L151.52 10.18C151.52 10.43 151.73 10.65 151.98 10.65C152.25 10.65 152.46 10.43 152.46 10.18ZM150.68 9.91L150.68 9.91L146.61 4.09C146.47 3.86 146.16 3.81 145.96 3.98C145.82 4.06 145.77 4.20 145.77 4.35L145.77 10.18C145.77 10.43 145.96 10.64 146.22 10.64C146.48 10.64 146.69 10.43 146.69 10.18L146.69 5.84L149.91 10.44C150.07 10.65 150.35 10.71 150.57 10.57C150.77 10.40 150.82 10.12 150.68 9.91ZM145.67 1.09L145.67 1.09L149.73 6.92C149.88 7.13 150.16 7.18 150.37 7.03C150.51 6.94 150.58 6.79 150.58 6.64L150.58 0.81C150.58 0.56 150.37 0.36 150.12 0.36C149.87 0.36 149.65 0.56 149.65 0.81L149.65 5.17L146.43 0.56C146.29 0.35 145.99 0.28 145.78 0.45C145.57 0.59 145.52 0.87 145.67 1.09Z',
                    fill: '#ffffff'
                  }
                })
              ])
            ]
          );
        },
        ct = [],
        pt = { render: lt, staticRenderFns: ct },
        dt = pt,
        mt = s('VU/8'),
        ut = mt(ot, dt, !1, null, null, null),
        gt = ut.exports,
        ht = {
          name: 'home',
          props: ['konami'],
          components: { Logo: gt },
          mounted: function () {
            this.$emit('setRepository', ge.repo);
          }
        },
        yt = function () {
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
        vt = [
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
        ft = { render: yt, staticRenderFns: vt },
        bt = ft,
        kt = s('VU/8'),
        jt = n,
        wt = kt(ht, bt, !1, jt, null, null),
        Ct = wt.exports,
        St = s('bOdI'),
        At = s.n(St),
        zt = s('Dd8w'),
        Lt = s.n(zt),
        Mt = s('pFYg'),
        qt = s.n(Mt),
        xt = s('UZ5h'),
        Gt = { switching: !1 },
        Bt = {
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
                ((Gt.switching = !0),
                this.$router.push({
                  name: this.$route.name,
                  params: Lt()({}, this.$route.params, { tag: e }),
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
        Tt = function () {
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
        Rt = [],
        Pt = { render: Tt, staticRenderFns: Rt },
        Et = Pt,
        It = s('VU/8'),
        Dt = u,
        Wt = It(Bt, Et, !1, Dt, null, null),
        _t = Wt.exports,
        Kt = {
          name: 'documentation',
          props: ['darkMode'],
          components: { DocsNavbar: _t },
          data: function () {
            return { sources: At()({}, ge.id, ge), source: ge, tag: ge.defaultTag };
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
                    params: { source: ge.id, tag: ge.defaultTag, class: ge.defaultClass }
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
        Ut = function () {
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
        Zt = [],
        Nt = { render: Ut, staticRenderFns: Zt },
        Ft = Nt,
        Ot = s('VU/8'),
        Qt = Ot(Kt, Ft, !1, null, null, null),
        Yt = Qt.exports,
        Ht = { name: 'unknown-route', props: ['darkMode'] },
        Vt = function () {
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
        Xt = [],
        Jt = { render: Vt, staticRenderFns: Xt },
        $t = Jt,
        es = s('VU/8'),
        ts = g,
        ss = es(Ht, $t, !1, ts, null, null),
        rs = ss.exports,
        is = {
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
                        var i = !0,
                          a = !1,
                          n = void 0;
                        try {
                          for (var o, l = $()(r.classes); !(i = (o = l.next()).done); i = !0) {
                            var c = o.value;
                            c.props &&
                              c.props.sort(function (e, t) {
                                return e.name.localeCompare(t.name);
                              }),
                              c.methods &&
                                c.methods.sort(function (e, t) {
                                  return e.name.localeCompare(t.name);
                                }),
                              c.events &&
                                c.events.sort(function (e, t) {
                                  return e.name.localeCompare(t.name);
                                });
                          }
                        } catch (e) {
                          (a = !0), (n = e);
                        } finally {
                          try {
                            !i && l.return && l.return();
                          } finally {
                            if (a) throw n;
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
                        var p = !0,
                          d = !1,
                          m = void 0;
                        try {
                          for (var u, g = $()(r.externals); !(p = (u = g.next()).done); p = !0) {
                            var h = u.value;
                            r.links[h.name] = h.see[0].replace(/\{@link\s+(.+?)\s*\}/i, '$1');
                          }
                        } catch (e) {
                          (d = !0), (m = e);
                        } finally {
                          try {
                            !p && g.return && g.return();
                          } finally {
                            if (d) throw m;
                          }
                        }
                        var y = !0,
                          v = !1,
                          f = void 0;
                        try {
                          for (var b, k = $()(r.classes); !(y = (b = k.next()).done); y = !0) {
                            var j = b.value;
                            r.links[j.name] = { name: 'docs-class', params: { class: j.name } };
                          }
                        } catch (e) {
                          (v = !0), (f = e);
                        } finally {
                          try {
                            !y && k.return && k.return();
                          } finally {
                            if (v) throw f;
                          }
                        }
                        var w = !0,
                          C = !1,
                          S = void 0;
                        try {
                          for (var A, z = $()(r.typedefs); !(w = (A = z.next()).done); w = !0) {
                            var L = A.value;
                            r.links[L.name] = { name: 'docs-typedef', params: { typedef: L.name } };
                          }
                        } catch (e) {
                          (C = !0), (S = e);
                        } finally {
                          try {
                            !w && z.return && z.return();
                          } finally {
                            if (C) throw S;
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
                          Gt.switching)
                        ) {
                          var M = e.$route;
                          (Gt.switching = !1),
                            'docs-class' === M.name
                              ? r.classes.some(function (e) {
                                  return e.name === M.params.class;
                                }) || e.goHome()
                              : 'docs-typedef' === M.name
                                ? r.typedefs.some(function (e) {
                                    return e.name === M.params.typedef;
                                  }) || e.goHome()
                                : 'docs-file' === M.name &&
                                  ((r.custom[M.params.category] && r.custom[M.params.category].files[M.params.file]) ||
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
        as = function () {
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
        os = { render: as, staticRenderFns: ns },
        ls = os,
        cs = s('VU/8'),
        ps = h,
        ds = cs(is, ls, !1, ps, null, null),
        ms = ds.exports,
        us = {
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
        gs = function () {
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
                              e._l(t.files, function (t, i) {
                                return s(
                                  'li',
                                  { key: i },
                                  [
                                    s(
                                      'router-link',
                                      { attrs: { to: { name: 'docs-file', params: { category: r, file: i } } } },
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
        hs = [],
        ys = { render: gs, staticRenderFns: hs },
        vs = ys,
        fs = s('VU/8'),
        bs = y,
        ks = fs(us, vs, !1, bs, null, null),
        js = ks.exports,
        ws = {
          name: 'docs-viewer',
          props: ['docs', 'darkMode'],
          components: { Sidebar: js },
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
                    window.addEventListener('scroll', i));
                },
                i = function i() {
                  (window.pageYOffset || document.documentElement.scrollTop) < 300 &&
                    (clearTimeout(t),
                    clearTimeout(s),
                    (e.style.opacity = '0'),
                    (t = setTimeout(function () {
                      e.style.display = 'none';
                    }, 1e3)),
                    window.removeEventListener('scroll', i),
                    window.addEventListener('scroll', r));
                };
              window.addEventListener('scroll', r);
            });
          }
        },
        Cs = function () {
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
        Ss = [],
        As = { render: Cs, staticRenderFns: Ss },
        zs = As,
        Ls = s('VU/8'),
        Ms = v,
        qs = Ls(ws, zs, !1, Ms, null, null),
        xs = qs.exports,
        Gs = {
          name: 'source-button',
          props: ['meta', 'path', 'docs'],
          methods: {
            sourceURL: function (e, t, s) {
              return l(this.docs.source, this.docs.tag, e, t, s);
            }
          }
        },
        Bs = function () {
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
        Ts = [],
        Rs = { render: Bs, staticRenderFns: Ts },
        Ps = Rs,
        Es = s('VU/8'),
        Is = f,
        Ds = Es(Gs, Ps, !1, Is, null, null),
        Ws = Ds.exports,
        _s = {
          name: 'file-viewer',
          props: ['docs', 'darkMode'],
          components: { SourceButton: Ws },
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
                P.a.filter('marked')(e)
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
                for (var i, a = $()(e.$el.querySelectorAll('pre code')); !(t = (i = a.next()).done); t = !0) {
                  o(i.value);
                }
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  !t && a.return && a.return();
                } finally {
                  if (s) throw r;
                }
              }
            });
          }
        },
        Ks = function () {
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
        Us = [],
        Zs = { render: Ks, staticRenderFns: Us },
        Ns = Zs,
        Fs = s('VU/8'),
        Os = b,
        Qs = Fs(_s, Ns, !1, Os, null, null),
        Ys = Qs.exports,
        Hs = {
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
        Vs = function () {
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
        Xs = [],
        Js = { render: Vs, staticRenderFns: Xs },
        $s = Js,
        er = s('VU/8'),
        tr = er(Hs, $s, !1, null, null, null),
        sr = tr.exports,
        rr = {
          name: 'types',
          props: ['names', 'variable', 'nullable', 'docs'],
          components: { TypeLink: sr },
          methods: { typeKey: m }
        },
        ir = function () {
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
        ar = [],
        nr = { render: ir, staticRenderFns: ar },
        or = nr,
        lr = s('VU/8'),
        cr = k,
        pr = lr(rr, or, !1, cr, null, null),
        dr = pr.exports,
        mr = {
          name: 'param-table',
          props: ['params', 'docs'],
          components: { Types: dr },
          computed: {
            hasOptional: function () {
              return this.params.some(function (e) {
                return e.optional;
              });
            }
          },
          methods: {
            typeKey: m,
            paramDescription: function (e) {
              return P.a.filter('marked')(p(e.description, this.docs, this.$router, this.$route));
            },
            paramDefault: function (e) {
              return e.optional ? '<code>' + e.default + '</code>' : '';
            }
          }
        },
        ur = function () {
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
        gr = [],
        hr = { render: ur, staticRenderFns: gr },
        yr = hr,
        vr = s('VU/8'),
        fr = j,
        br = vr(mr, yr, !1, fr, null, null),
        kr = br.exports,
        jr = {
          name: 'class-overview',
          props: ['properties', 'methods', 'events'],
          methods: {
            scopedName: d,
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
        Cr = [],
        Sr = { render: wr, staticRenderFns: Cr },
        Ar = Sr,
        zr = s('VU/8'),
        Lr = w,
        Mr = zr(jr, Ar, !1, Lr, null, null),
        qr = Mr.exports,
        xr = {
          name: 'docs-see',
          props: ['see', 'docs'],
          computed: {
            parsed: function () {
              for (var e = new Array(this.see.length), t = 0; t < this.see.length; t++)
                e[t] = c(this.see[t], this.docs);
              return e;
            }
          }
        },
        Gr = function () {
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
        Br = [],
        Tr = { render: Gr, staticRenderFns: Br },
        Rr = Tr,
        Pr = s('VU/8'),
        Er = C,
        Ir = Pr(xr, Rr, !1, Er, null, null),
        Dr = Ir.exports,
        Wr = {
          name: 'class-property',
          props: ['prop', 'docs'],
          components: { Types: dr, ParamTable: kr, SourceButton: Ws, See: Dr },
          computed: {
            description: function () {
              return P.a.filter('marked')(p(this.prop.description, this.docs, this.$router, this.$route));
            },
            scrollTo: function () {
              return ('static' === this.prop.scope ? 's-' : '') + this.prop.name;
            }
          },
          methods: { typeKey: m }
        },
        _r = function () {
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
        Kr = [],
        Ur = { render: _r, staticRenderFns: Kr },
        Zr = Ur,
        Nr = s('VU/8'),
        Fr = S,
        Or = Nr(Wr, Zr, !1, Fr, null, null),
        Qr = Or.exports,
        Yr = {
          name: 'class-method',
          props: ['method', 'docs'],
          components: { Types: dr, TypeLink: sr, ParamTable: kr, SourceButton: Ws, See: Dr },
          computed: {
            params: function () {
              return this.method.params
                ? this.method.params.filter(function (e) {
                    return !e.name.includes('.');
                  })
                : null;
            },
            description: function () {
              return P.a.filter('marked')(p(this.method.description, this.docs, this.$router, this.$route));
            },
            emits: function () {
              var e = this;
              return this.method.emits
                ? this.method.emits.map(function (t) {
                    return c(t.replace(/:event/i, ''), e.docs);
                  })
                : null;
            },
            scrollTo: function () {
              return ('static' === this.method.scope ? 's-' : '') + this.method.name;
            }
          },
          methods: { typeKey: m }
        },
        Hr = function () {
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
        Vr = [],
        Xr = { render: Hr, staticRenderFns: Vr },
        Jr = Xr,
        $r = s('VU/8'),
        ei = A,
        ti = $r(Yr, Jr, !1, ei, null, null),
        si = ti.exports,
        ri = {
          name: 'class-event',
          props: ['event', 'docs'],
          components: { ParamTable: kr, SourceButton: Ws, See: Dr },
          computed: {
            description: function () {
              return P.a.filter('marked')(p(this.event.description, this.docs, this.$router, this.$route));
            }
          }
        },
        ii = function () {
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
        ai = [],
        ni = { render: ii, staticRenderFns: ai },
        oi = ni,
        li = s('VU/8'),
        ci = z,
        pi = li(ri, oi, !1, ci, null, null),
        di = pi.exports,
        mi = {
          name: 'class-viewer',
          props: ['docs', 'showPrivate', 'darkMode'],
          components: {
            TypeLink: sr,
            ParamTable: kr,
            Overview: qr,
            Property: Qr,
            Method: si,
            Event: di,
            SourceButton: Ws,
            See: Dr
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
              return P.a.filter('marked')(p(this.clarse.description, this.docs, this.$router, this.$route));
            }
          },
          methods: { scopedName: d },
          mounted: function () {
            var e = this;
            this.$nextTick(function () {
              var t = !0,
                s = !1,
                r = void 0;
              try {
                for (var i, a = $()(e.$el.querySelectorAll('pre code')); !(t = (i = a.next()).done); t = !0) {
                  o(i.value);
                }
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  !t && a.return && a.return();
                } finally {
                  if (s) throw r;
                }
              }
            });
          }
        },
        ui = function () {
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
        gi = [],
        hi = { render: ui, staticRenderFns: gi },
        yi = hi,
        vi = s('VU/8'),
        fi = L,
        bi = vi(mi, yi, !1, fi, null, null),
        ki = bi.exports,
        ji = {
          name: 'typedef-viewer',
          props: ['docs', 'darkMode'],
          components: { Types: dr, ParamTable: kr, SourceButton: Ws, See: Dr },
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
              return P.a.filter('marked')(p(this.typedef.description, this.docs, this.$router, this.$route));
            },
            returnsDescription: function () {
              var e = this.typedef.returns;
              return e ? P.a.filter('marked')(p(e.description, this.docs, this.$router, this.$route)) : '';
            }
          },
          methods: { typeKey: m },
          mounted: function () {
            var e = this;
            this.$nextTick(function () {
              var t = !0,
                s = !1,
                r = void 0;
              try {
                for (var i, a = $()(e.$el.querySelectorAll('pre code')); !(t = (i = a.next()).done); t = !0) {
                  o(i.value);
                }
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  !t && a.return && a.return();
                } finally {
                  if (s) throw r;
                }
              }
            });
          }
        },
        wi = function () {
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
        Ci = [],
        Si = { render: wi, staticRenderFns: Ci },
        Ai = Si,
        zi = s('VU/8'),
        Li = M,
        Mi = zi(ji, Ai, !1, Li, null, null),
        qi = Mi.exports,
        xi = s('BDm9'),
        Gi = s.n(xi),
        Bi = {
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
        Ti = function () {
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
        Ri = [],
        Pi = { render: Ti, staticRenderFns: Ri },
        Ei = Pi,
        Ii = s('VU/8'),
        Di = q,
        Wi = Ii(Bi, Ei, !1, Di, null, null),
        _i = Wi.exports,
        Ki = {
          name: 'docs-search',
          props: ['docs', 'showPrivate'],
          components: { SearchResults: _i },
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
                for (var i, a = $()(e); !(t = (i = a.next()).done); t = !0) {
                  var n = i.value;
                  'Class' !== n.item.type
                    ? 'Property' !== n.item.type && 'Method' !== n.item.type
                      ? 'Event' !== n.item.type
                        ? 'Typedef' !== n.item.type ||
                          (n.item.route = { name: 'docs-typedef', params: { typedef: n.item.name } })
                        : ((n.item.key = 'e-' + n.item.parent + '#' + n.item.name),
                          (n.item.fullName = x(n.item, n.item.parent)),
                          (n.item.route = {
                            name: 'docs-class',
                            params: { class: n.item.parent },
                            query: { scrollTo: 'e-' + n.item.name }
                          }))
                      : ((n.item.fullName = x(n.item, n.item.parent)),
                        (n.item.route = {
                          name: 'docs-class',
                          params: { class: n.item.parent },
                          query: { scrollTo: d(n.item) }
                        }))
                    : (n.item.route = { name: 'docs-class', params: { class: n.item.name } });
                }
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  !t && a.return && a.return();
                } finally {
                  if (s) throw r;
                }
              }
              for (var o = 0; o < e.length; ) {
                var l = e[o];
                if ('Property' === l.item.type || 'Method' === l.item.type || 'Event' === l.item.type) {
                  var c = [],
                    p = !0,
                    m = !1,
                    u = void 0;
                  try {
                    for (var g, h = $()(l.matches); !(p = (g = h.next()).done); p = !0) {
                      var y = g.value;
                      c.push(y.key);
                    }
                  } catch (e) {
                    (m = !0), (u = e);
                  } finally {
                    try {
                      !p && h.return && h.return();
                    } finally {
                      if (m) throw u;
                    }
                  }
                  if (2 === c.length && c.includes('parent') && c.includes('fullName')) {
                    e.splice(o, 1);
                    continue;
                  }
                }
                o++;
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
                i = void 0;
              try {
                for (var a, n = $()(this.docs.classes); !(s = (a = n.next()).done); s = !0) {
                  var o = a.value;
                  if (this.showPrivate || 'private' !== o.access) {
                    if (
                      (e.classes &&
                        t.push({
                          type: 'Class',
                          parent: o.name,
                          name: o.name,
                          fullName: o.name,
                          scope: o.scope,
                          access: o.access,
                          route: null
                        }),
                      o.props && e.props)
                    ) {
                      var l = !0,
                        c = !1,
                        p = void 0;
                      try {
                        for (var d, m = $()(o.props); !(l = (d = m.next()).done); l = !0) {
                          var u = d.value;
                          (this.showPrivate || 'private' !== u.access) &&
                            t.push({
                              type: 'Property',
                              parent: o.name,
                              name: u.name,
                              fullName: x(u, o.name),
                              scope: u.scope,
                              access: u.access,
                              route: null
                            });
                        }
                      } catch (e) {
                        (c = !0), (p = e);
                      } finally {
                        try {
                          !l && m.return && m.return();
                        } finally {
                          if (c) throw p;
                        }
                      }
                    }
                    if (o.methods && e.methods) {
                      var g = !0,
                        h = !1,
                        y = void 0;
                      try {
                        for (var v, f = $()(o.methods); !(g = (v = f.next()).done); g = !0) {
                          var b = v.value;
                          (this.showPrivate || 'private' !== b.access) &&
                            t.push({
                              type: 'Method',
                              parent: o.name,
                              name: b.name,
                              fullName: x(b, o.name),
                              scope: b.scope,
                              access: b.access,
                              route: null
                            });
                        }
                      } catch (e) {
                        (h = !0), (y = e);
                      } finally {
                        try {
                          !g && f.return && f.return();
                        } finally {
                          if (h) throw y;
                        }
                      }
                    }
                    if (o.events && e.events) {
                      var k = !0,
                        j = !1,
                        w = void 0;
                      try {
                        for (var C, S = $()(o.events); !(k = (C = S.next()).done); k = !0) {
                          var A = C.value;
                          (this.showPrivate || 'private' !== A.access) &&
                            t.push({
                              type: 'Event',
                              parent: o.name,
                              name: A.name,
                              fullName: o.name + '#' + A.name,
                              scope: A.scope,
                              access: A.access,
                              key: null,
                              route: null
                            });
                        }
                      } catch (e) {
                        (j = !0), (w = e);
                      } finally {
                        try {
                          !k && S.return && S.return();
                        } finally {
                          if (j) throw w;
                        }
                      }
                    }
                  }
                }
              } catch (e) {
                (r = !0), (i = e);
              } finally {
                try {
                  !s && n.return && n.return();
                } finally {
                  if (r) throw i;
                }
              }
              if (e.typedefs) {
                var z = !0,
                  L = !1,
                  M = void 0;
                try {
                  for (var q, G = $()(this.docs.typedefs); !(z = (q = G.next()).done); z = !0) {
                    var B = q.value;
                    (this.showPrivate || 'private' !== B.access) &&
                      t.push({
                        type: 'Typedef',
                        parent: B.name,
                        name: B.name,
                        fullName: B.name,
                        scope: B.scope,
                        access: B.access,
                        route: null
                      });
                  }
                } catch (e) {
                  (L = !0), (M = e);
                } finally {
                  try {
                    !z && G.return && G.return();
                  } finally {
                    if (L) throw M;
                  }
                }
              }
              return new Gi.a(t, {
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
        Ui = function () {
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
                          i = !!r.checked;
                        if (Array.isArray(s)) {
                          var a = e._i(s, null);
                          r.checked
                            ? a < 0 && e.$set(e.toggles, 'classes', s.concat([null]))
                            : a > -1 && e.$set(e.toggles, 'classes', s.slice(0, a).concat(s.slice(a + 1)));
                        } else e.$set(e.toggles, 'classes', i);
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
                          i = !!r.checked;
                        if (Array.isArray(s)) {
                          var a = e._i(s, null);
                          r.checked
                            ? a < 0 && e.$set(e.toggles, 'props', s.concat([null]))
                            : a > -1 && e.$set(e.toggles, 'props', s.slice(0, a).concat(s.slice(a + 1)));
                        } else e.$set(e.toggles, 'props', i);
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
                          i = !!r.checked;
                        if (Array.isArray(s)) {
                          var a = e._i(s, null);
                          r.checked
                            ? a < 0 && e.$set(e.toggles, 'methods', s.concat([null]))
                            : a > -1 && e.$set(e.toggles, 'methods', s.slice(0, a).concat(s.slice(a + 1)));
                        } else e.$set(e.toggles, 'methods', i);
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
                          i = !!r.checked;
                        if (Array.isArray(s)) {
                          var a = e._i(s, null);
                          r.checked
                            ? a < 0 && e.$set(e.toggles, 'events', s.concat([null]))
                            : a > -1 && e.$set(e.toggles, 'events', s.slice(0, a).concat(s.slice(a + 1)));
                        } else e.$set(e.toggles, 'events', i);
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
                          i = !!r.checked;
                        if (Array.isArray(s)) {
                          var a = e._i(s, null);
                          r.checked
                            ? a < 0 && e.$set(e.toggles, 'typedefs', s.concat([null]))
                            : a > -1 && e.$set(e.toggles, 'typedefs', s.slice(0, a).concat(s.slice(a + 1)));
                        } else e.$set(e.toggles, 'typedefs', i);
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
        Zi = [],
        Ni = { render: Ui, staticRenderFns: Zi },
        Fi = Ni,
        Oi = s('VU/8'),
        Qi = G,
        Yi = Oi(Ki, Fi, !1, Qi, null, null),
        Hi = Yi.exports;
      P.a.use(nt.a);
      var Vi = new nt.a({
          routes: [
            { path: '/', name: 'home', component: Ct },
            {
              path: '/docs',
              name: 'docs',
              component: Yt,
              children: [
                {
                  path: ':source',
                  name: 'docs-source',
                  component: ms,
                  children: [
                    {
                      path: ':tag',
                      name: 'docs-tag',
                      component: xs,
                      children: [
                        { path: 'search', name: 'docs-search', component: Hi },
                        { path: 'class/:class', name: 'docs-class', component: ki },
                        { path: 'typedef/:typedef', name: 'docs-typedef', component: qi },
                        { path: ':category/:file', name: 'docs-file', component: Ys }
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
        Xi = { name: 'container' },
        Ji = function () {
          var e = this,
            t = e.$createElement;
          return (e._self._c || t)('div', { staticClass: 'container' }, [e._t('default')], 2);
        },
        $i = [],
        ea = { render: Ji, staticRenderFns: $i },
        ta = ea,
        sa = s('VU/8'),
        ra = B,
        ia = sa(Xi, ta, !1, ra, null, null),
        aa = ia.exports,
        na = { name: 'slide' },
        oa = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s('div', { staticClass: 'slide' }, [s('container', [e._t('default')], 2)], 1);
        },
        la = [],
        ca = { render: oa, staticRenderFns: la },
        pa = ca,
        da = s('VU/8'),
        ma = T,
        ua = da(na, pa, !1, ma, null, null),
        ga = ua.exports,
        ha = { name: 'loading' },
        ya = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
          return e._m(0);
        },
        va = [
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
        fa = { render: ya, staticRenderFns: va },
        ba = fa,
        ka = s('VU/8'),
        ja = R,
        wa = ka(ha, ba, !1, ja, null, null),
        Ca = wa.exports,
        Sa = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s('div', [
            s('h1', [e._v('Unknown ' + e._s(e.type || 'page'))]),
            e._v(' '),
            s('p', [e._v("This page doesn't actually exist. Oh no!")])
          ]);
        },
        Aa = [],
        za = { render: Sa, staticRenderFns: Aa },
        La = za,
        Ma = s('VU/8'),
        qa = Ma(null, La, !1, null, null, null),
        xa = qa.exports;
      (P.a.config.productionTip = !1),
        s('srIy'),
        P.a.component('container', aa),
        P.a.component('slide', ga),
        P.a.component('loading', Ca),
        P.a.component('unknown-page', xa),
        P.a.directive('hljs', o),
        P.a.filter('marked', function (e) {
          return (
            e || (e = '**Documentation missing.**'),
            (e = e.replace(/<(info|warn)>([\s\S]+)<\/\1>/gi, '<div class="$1">$2</div>')),
            I()(e)
          );
        }),
        new P.a({
          el: '#app',
          router: Vi,
          render: function (e) {
            return e(at);
          }
        });
    },
    PBIT: function (e, t) {},
    QUVa: function (e, t) {},
    'R+Wx': function (e, t) {},
    SQv5: function (e, t) {},
    SVOi: function (e, t) {},
    aovo: function (e, t) {
      e.exports = {
        meta: { generator: '0.9.0', format: 20, date: 1608729818899 },
        custom: null,
        classes: [
          {
            name: 'Client',
            description: 'Client class',
            construct: {
              name: 'Client',
              params: [
                {
                  name: 'key',
                  description: 'API key [(?)](https://stavzdev.is-inside.me/cCMiZdoy.gif)',
                  type: [[['string']]]
                },
                { name: 'options', description: 'Client options', type: [[['ClientOptions']]] }
              ]
            },
            props: [
              {
                name: 'cache',
                description: 'Returns all cache entries',
                type: [
                  [
                    ['Map', '<'],
                    ['string', ', '],
                    ['data', '>']
                  ]
                ],
                meta: { line: 33, file: 'Client.js', path: 'src' }
              }
            ],
            methods: [
              {
                name: 'sweepCache',
                description: 'Delete all cache entries',
                returns: [[['void']]],
                meta: { line: 41, file: 'Client.js', path: 'src' }
              }
            ],
            meta: { line: 10, file: 'Client.js', path: 'src' }
          },
          {
            name: 'APIIncident',
            description: 'API incident class',
            construct: {
              name: 'APIIncident',
              params: [{ name: 'data', description: 'API incident data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'link',
                description: 'Link to incident',
                type: [[['string']], [['null']]],
                meta: { line: 12, file: 'APIIncident.js', path: 'src/structures' }
              },
              {
                name: 'start',
                description: 'Timestamp when investigation was started as Date object',
                type: [[['object']], [['null']]],
                meta: { line: 17, file: 'APIIncident.js', path: 'src/structures' }
              },
              {
                name: 'startFormatted',
                description: 'Formatted timestamp when investigation was started',
                type: [[['string']], [['null']]],
                meta: { line: 22, file: 'APIIncident.js', path: 'src/structures' }
              },
              {
                name: 'startTimestamp',
                description: 'Timestamp when investigation was started as Date',
                type: [[['Date']], [['null']]],
                meta: { line: 27, file: 'APIIncident.js', path: 'src/structures' }
              },
              {
                name: 'author',
                description: 'Incident author',
                type: [[['string']], [['null']]],
                meta: { line: 32, file: 'APIIncident.js', path: 'src/structures' }
              },
              {
                name: 'HTMLContent',
                description: 'Content as HTML',
                type: [[['string']], [['null']]],
                meta: { line: 37, file: 'APIIncident.js', path: 'src/structures' }
              },
              {
                name: 'snippet',
                description: 'Content snippet',
                type: [[['string']], [['null']]],
                meta: { line: 42, file: 'APIIncident.js', path: 'src/structures' }
              },
              {
                name: 'TextContent',
                description: 'Content as plain text',
                type: [[['string']], [['null']]],
                meta: { line: 47, file: 'APIIncident.js', path: 'src/structures' }
              },
              {
                name: 'guid',
                description: 'GUID',
                type: [[['string']], [['null']]],
                meta: { line: 52, file: 'APIIncident.js', path: 'src/structures' }
              },
              {
                name: 'categories',
                description: 'Incident categories',
                type: [
                  [
                    ['Array', '<'],
                    ['string', '>']
                  ]
                ],
                meta: { line: 57, file: 'APIIncident.js', path: 'src/structures' }
              }
            ],
            meta: { line: 6, file: 'APIIncident.js', path: 'src/structures' }
          },
          {
            name: 'APIStatus',
            description: 'API status class',
            construct: {
              name: 'APIStatus',
              params: [{ name: 'data', description: 'API status data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'sourceUrl',
                description: 'Source url',
                type: [[['string']], [['null']]],
                meta: { line: 12, file: 'APIStatus.js', path: 'src/structures' }
              },
              {
                name: 'title',
                description: 'Title',
                type: [[['string']], [['null']]],
                meta: { line: 17, file: 'APIStatus.js', path: 'src/structures' }
              },
              {
                name: 'description',
                description: 'Description',
                type: [[['string']], [['null']]],
                meta: { line: 22, file: 'APIStatus.js', path: 'src/structures' }
              },
              {
                name: 'incidents',
                description: 'API incident',
                type: [
                  [
                    ['Array', '<'],
                    ['APIIncident', '>']
                  ]
                ],
                meta: { line: 27, file: 'APIStatus.js', path: 'src/structures' }
              }
            ],
            meta: { line: 6, file: 'APIStatus.js', path: 'src/structures' }
          },
          {
            name: 'Color',
            construct: {
              name: 'Color',
              params: [{ name: 'color', description: 'Color code', type: [[['ColorCode']]] }]
            },
            methods: [
              {
                name: 'toString',
                description: 'Returns regular color name',
                returns: [[['ColorString']]],
                meta: { line: 13, file: 'Color.js', path: 'src/structures' }
              },
              {
                name: 'toHex',
                description: 'Returns color HEX code',
                returns: [[['ColorHex']]],
                meta: { line: 39, file: 'Color.js', path: 'src/structures' }
              },
              {
                name: 'toCode',
                description: 'Returns color code',
                returns: [[['ColorCode']]],
                meta: { line: 65, file: 'Color.js', path: 'src/structures' }
              }
            ],
            meta: { line: 4, file: 'Color.js', path: 'src/structures' }
          },
          {
            name: 'Friend',
            description: 'Friend class',
            construct: { name: 'Friend', params: [{ name: 'data', description: 'Friend data', type: [[['object']]] }] },
            props: [
              {
                name: 'sender',
                description: "Friend request sender's UUID",
                type: [[['string']]],
                meta: { line: 11, file: 'Friend.js', path: 'src/structures' }
              },
              {
                name: 'receiver',
                description: "Friend request receiver's UUID",
                type: [[['string']]],
                meta: { line: 16, file: 'Friend.js', path: 'src/structures' }
              },
              {
                name: 'friendSinceTimestamp',
                description: 'Friend since timestamp',
                type: [[['number']]],
                meta: { line: 21, file: 'Friend.js', path: 'src/structures' }
              },
              {
                name: 'friendSince',
                description: 'Friend since as Date',
                type: [[['Date']]],
                meta: { line: 26, file: 'Friend.js', path: 'src/structures' }
              }
            ],
            meta: { line: 5, file: 'Friend.js', path: 'src/structures' }
          },
          {
            name: 'Game',
            description: 'Game class',
            construct: {
              name: 'Game',
              params: [{ name: 'game', description: 'Game ID or Game Code', type: [[['GameId']], [['GameCode']]] }]
            },
            props: [
              {
                name: 'id',
                description: 'Returns game ID',
                type: [[['GameId']]],
                meta: { line: 55, file: 'Game.js', path: 'src/structures' }
              },
              {
                name: 'code',
                description: 'Returns game code',
                type: [[['GameCode']]],
                meta: { line: 66, file: 'Game.js', path: 'src/structures' }
              }
            ],
            methods: [
              {
                name: 'toString',
                description: 'Returns regular game name',
                returns: [[['GameString']]],
                meta: { line: 43, file: 'Game.js', path: 'src/structures' }
              }
            ],
            meta: { line: 34, file: 'Game.js', path: 'src/structures' }
          },
          {
            name: 'Guild',
            description: 'Guild class',
            construct: { name: 'Guild', params: [{ name: 'data', description: 'Guild data', type: [[['data']]] }] },
            props: [
              {
                name: 'id',
                description: 'Guild ID',
                type: [[['string']]],
                meta: { line: 16, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'name',
                description: 'Guild name',
                type: [[['String']]],
                meta: { line: 21, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'description',
                description: 'Guild description',
                type: [[['String']]],
                meta: { line: 26, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'experience',
                description: 'Guild experience',
                type: [[['Number']]],
                meta: { line: 31, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'level',
                description: 'Guild level',
                type: [[['Number']]],
                meta: { line: 36, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'members',
                description: 'Guild members',
                type: [
                  [
                    ['Array', '<'],
                    ['GuildMember', '>']
                  ]
                ],
                meta: { line: 41, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'ranks',
                description: 'Guild ranks',
                type: [
                  [
                    ['Array', '<'],
                    ['GuildRank', '>']
                  ]
                ],
                meta: { line: 46, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'createdAtTimestamp',
                description: 'Date of guild creation as timestamp',
                type: [[['String']]],
                meta: { line: 77, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'createdAt',
                description: 'Date of guild creation',
                type: [[['Date']]],
                meta: { line: 82, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'joinable',
                description: 'Whether this guild can be joined using /g join',
                type: [[['boolean']]],
                meta: { line: 87, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'publiclyListed',
                description: 'Whether this guild is listed in the Guild Finder',
                type: [[['boolean']]],
                meta: { line: 92, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'chatMuteUntilTimestamp',
                description: 'Timestamp guild chat will be unmuted at.',
                type: [[['number']], [['null']]],
                meta: { line: 97, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'chatMuteUntil',
                description: 'Timestamp guild chat will be unmuted at as Date.',
                type: [[['Date']], [['null']]],
                meta: { line: 102, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'banner',
                description: 'Timestamp guild chat will be unmuted at.',
                type: [
                  [
                    ['Array', '<{'],
                    ['Pattern', ': '],
                    ['string', ', '],
                    ['Color', ': '],
                    ['string', '}>']
                  ]
                ],
                meta: { line: 107, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'tag',
                description: 'Guild tag',
                type: [[['String']]],
                meta: { line: 112, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'tagColor',
                description: 'Guild tag color',
                type: [[['Color']]],
                meta: { line: 117, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'legacyRank',
                description: 'Ranking in the number of guild coins owned in the legacy guild system. (0 - indexed)',
                deprecated: !0,
                type: [[['number']]],
                meta: { line: 123, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'expHistory',
                description: 'Experience history per day, resets at 5 am UTC',
                type: [
                  [
                    ['Array', '<{'],
                    ['day', ':'],
                    ['String', ', '],
                    ['exp', ': '],
                    ['number', '}>']
                  ]
                ],
                meta: { line: 128, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'achievements',
                description: 'Guild achievements',
                type: [[['Object']]],
                meta: { line: 133, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'preferredGames',
                description: 'Guild preferred games',
                type: [
                  [
                    ['Array', '<'],
                    ['Game', '>']
                  ]
                ],
                meta: { line: 142, file: 'Guild.js', path: 'src/structures/Guild' }
              }
            ],
            methods: [
              {
                name: 'getRanksByNewest',
                description: 'An array containing all guild ranks sorted by newest',
                returns: [
                  [
                    ['Array', '<'],
                    ['GuildRank', '>']
                  ]
                ],
                meta: { line: 52, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'getMemberUUIDMap',
                description: 'A map containing all guild members, keyed by their uuids',
                returns: [
                  [
                    ['Map', '<'],
                    ['GuildMember', '>']
                  ]
                ],
                meta: { line: 60, file: 'Guild.js', path: 'src/structures/Guild' }
              },
              {
                name: 'getRankByPriority',
                description: 'Returns a guild rank by priority',
                params: [{ name: 'priority', description: 'The priority of the guild rank', type: [[['number']]] }],
                returns: [[['GuildRank']]],
                meta: { line: 69, file: 'Guild.js', path: 'src/structures/Guild' }
              }
            ],
            meta: { line: 10, file: 'Guild.js', path: 'src/structures/Guild' }
          },
          {
            name: 'GuildMember',
            description: 'GuildMember class',
            construct: {
              name: 'GuildMember',
              params: [{ name: 'data', description: 'Guild member data', type: [[['data']]] }]
            },
            props: [
              {
                name: 'uuid',
                description: 'Guild member UUID',
                type: [[['String']]],
                meta: { line: 11, file: 'GuildMember.js', path: 'src/structures/Guild' }
              },
              {
                name: 'joinedAtTimestamp',
                description: 'Timestamp this member joined at',
                type: [[['Number']]],
                meta: { line: 16, file: 'GuildMember.js', path: 'src/structures/Guild' }
              },
              {
                name: 'joinedAt',
                description: 'Timestamp this member joined at as Date',
                type: [[['Date']]],
                meta: { line: 21, file: 'GuildMember.js', path: 'src/structures/Guild' }
              },
              {
                name: 'questParticipation',
                description: 'The number of challenges completed that count towards the current quest',
                type: [[['Number']]],
                meta: { line: 26, file: 'GuildMember.js', path: 'src/structures/Guild' }
              },
              {
                name: 'rank',
                description: "Member's rank",
                type: [[['String']]],
                meta: { line: 31, file: 'GuildMember.js', path: 'src/structures/Guild' }
              },
              {
                name: 'mutedUntilTimestamp',
                description: 'Timestamp this member will be unmuted at ( if muted )',
                type: [[['Number']], [['null']]],
                meta: { line: 36, file: 'GuildMember.js', path: 'src/structures/Guild' }
              },
              {
                name: 'mutedUntil',
                description: 'Timestamp this member will be unmuted at as Date ( if muted )',
                type: [[['Date']], [['null']]],
                meta: { line: 41, file: 'GuildMember.js', path: 'src/structures/Guild' }
              },
              {
                name: 'expHistory',
                description: 'Experience history per day, resets at 5 am UTC',
                type: [
                  [
                    ['Array', '<{'],
                    ['day', ': '],
                    ['string', ', '],
                    ['exp', ': '],
                    ['number', '}>']
                  ]
                ],
                meta: { line: 54, file: 'GuildMember.js', path: 'src/structures/Guild' }
              },
              {
                name: 'weeklyExperience',
                description: 'Experience per week, resets every Monday at 5 am UTC',
                type: [[['Number']]],
                meta: { line: 59, file: 'GuildMember.js', path: 'src/structures/Guild' }
              }
            ],
            meta: { line: 5, file: 'GuildMember.js', path: 'src/structures/Guild' }
          },
          {
            name: 'GuildRank',
            description: 'GuildRank class',
            construct: {
              name: 'GuildRank',
              params: [{ name: 'data', description: 'Guild rank data', type: [[['data']]] }]
            },
            props: [
              {
                name: 'name',
                description: 'Guild rank name',
                type: [[['String']]],
                meta: { line: 11, file: 'GuildRank.js', path: 'src/structures/Guild' }
              },
              {
                name: 'default',
                description: 'Whether this rank is the default rank a player gets when they join a guild',
                type: [[['boolean']]],
                meta: { line: 16, file: 'GuildRank.js', path: 'src/structures/Guild' }
              },
              {
                name: 'tag',
                description: 'Guild rank tag that appears in guild chat. null if none',
                type: [[['string']], [['null']]],
                meta: { line: 21, file: 'GuildRank.js', path: 'src/structures/Guild' }
              },
              {
                name: 'createdAtTimestamp',
                description: 'Timestamp this rank was created at',
                type: [[['number']]],
                meta: { line: 26, file: 'GuildRank.js', path: 'src/structures/Guild' }
              },
              {
                name: 'createdAt',
                description: 'Timestamp this rank was created at as Date',
                type: [[['Date']]],
                meta: { line: 31, file: 'GuildRank.js', path: 'src/structures/Guild' }
              },
              {
                name: 'priority',
                description: 'Guild rank priority - Higher number = higher up in the hierarchy',
                type: [[['number']]],
                meta: { line: 36, file: 'GuildRank.js', path: 'src/structures/Guild' }
              }
            ],
            meta: { line: 5, file: 'GuildRank.js', path: 'src/structures/Guild' }
          },
          {
            name: 'ItemBytes',
            description: 'Item Bytes class',
            construct: {
              name: 'ItemBytes',
              params: [{ name: 'data', description: 'base64 encoded bytes', type: [[['string']]] }]
            },
            props: [
              {
                name: 'bytesBuffer',
                description: 'Item Bytes as Buffer',
                type: [[['Buffer']]],
                meta: { line: 13, file: 'ItemBytes.js', path: 'src/structures' }
              }
            ],
            methods: [
              {
                name: 'base64',
                description: 'Returns Item Bytes in base64 encoded',
                returns: [[['String']]],
                meta: { line: 20, file: 'ItemBytes.js', path: 'src/structures' }
              },
              {
                name: 'readNBT',
                description: 'Returns NBT of Item Bytes',
                async: !0,
                returns: [
                  [
                    ['Array', '<'],
                    ['any', '>']
                  ]
                ],
                meta: { line: 28, file: 'ItemBytes.js', path: 'src/structures' }
              }
            ],
            meta: { line: 7, file: 'ItemBytes.js', path: 'src/structures' }
          },
          {
            name: 'KeyInfo',
            description: 'KeyInfo class',
            construct: { name: 'KeyInfo', params: [{ name: 'data', description: 'Key data', type: [[['object']]] }] },
            props: [
              {
                name: 'key',
                description: 'API key',
                type: [[['string']]],
                meta: { line: 12, file: 'KeyInfo.js', path: 'src/structures' }
              },
              {
                name: 'owner',
                description: 'Key owner UUID',
                type: [[['string']]],
                meta: { line: 17, file: 'KeyInfo.js', path: 'src/structures' }
              },
              {
                name: 'limitPerMinute',
                description: 'Limit per minute',
                type: [[['number']]],
                meta: { line: 22, file: 'KeyInfo.js', path: 'src/structures' }
              },
              {
                name: 'requestsInPastMin',
                description: 'Requests in past minute',
                type: [[['number']]],
                meta: { line: 27, file: 'KeyInfo.js', path: 'src/structures' }
              },
              {
                name: 'totalRequests',
                description: 'Total requests',
                type: [[['number']]],
                meta: { line: 32, file: 'KeyInfo.js', path: 'src/structures' }
              },
              {
                name: 'resetsAfter',
                description: 'Limit resets after in seconds',
                type: [[['number']]],
                meta: { line: 37, file: 'KeyInfo.js', path: 'src/structures' }
              }
            ],
            meta: { line: 5, file: 'KeyInfo.js', path: 'src/structures' }
          },
          {
            name: 'Leaderboard',
            description: 'Leaderboard class',
            construct: {
              name: 'Leaderboard',
              params: [{ name: 'data', description: 'Leaderboard data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'name',
                description: 'Leaderboard name',
                type: [[['string']], [['null']]],
                meta: { line: 11, file: 'Leaderboard.js', path: 'src/structures' }
              },
              {
                name: 'title',
                description: 'Leaderboard title',
                type: [[['string']]],
                meta: { line: 16, file: 'Leaderboard.js', path: 'src/structures' }
              },
              {
                name: 'playerCount',
                description: 'Leaderboard player count',
                type: [[['string']]],
                meta: { line: 21, file: 'Leaderboard.js', path: 'src/structures' }
              },
              {
                name: 'leaders',
                description: 'Leaderboard leaders. Array of Player UUIDs',
                type: [
                  [
                    ['Array', '<'],
                    ['string', '>']
                  ]
                ],
                meta: { line: 26, file: 'Leaderboard.js', path: 'src/structures' }
              }
            ],
            meta: { line: 5, file: 'Leaderboard.js', path: 'src/structures' }
          },
          {
            name: 'ArenaBrawl',
            description: 'ArenaBrawl class',
            construct: {
              name: 'ArenaBrawl',
              params: [{ name: 'data', description: 'ArenaBrawl data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'coins',
                description: 'Coins',
                type: [[['number']]],
                meta: { line: 12, file: 'ArenaBrawl.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'mode',
                description: 'ArenaBrawl mode stats',
                type: [[['ArenaBrawlStats']]],
                meta: { line: 17, file: 'ArenaBrawl.js', path: 'src/structures/MiniGames' }
              }
            ],
            meta: { line: 6, file: 'ArenaBrawl.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'BedWars',
            description: 'BedWars class',
            construct: {
              name: 'BedWars',
              params: [{ name: 'data', description: 'BedWars data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'coins',
                description: 'Coins',
                type: [[['number']]],
                meta: { line: 45, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'level',
                description: 'Level',
                type: [[['number']]],
                meta: { line: 50, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'prestige',
                description: 'Prestige',
                type: [[['BedWarsPrestige']]],
                meta: { line: 55, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'playedGames',
                description: 'Played games',
                type: [[['number']]],
                meta: { line: 60, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'wins',
                description: 'Wins',
                type: [[['number']]],
                meta: { line: 65, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'winstreak',
                description: 'Winstreak',
                type: [[['number']]],
                meta: { line: 70, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'kills',
                description: 'Kills',
                type: [[['number']]],
                meta: { line: 75, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'finalKills',
                description: 'Final kills',
                type: [[['number']]],
                meta: { line: 80, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'losses',
                description: 'Losses',
                type: [[['number']]],
                meta: { line: 85, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'deaths',
                description: 'Deaths',
                type: [[['number']]],
                meta: { line: 90, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'finalDeaths',
                description: 'Final deaths',
                type: [[['number']]],
                meta: { line: 95, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'collectedItemsTotal',
                description: 'Collected items',
                type: [[['BedWarsCollectedItems']]],
                meta: { line: 100, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'beds',
                description: 'Beds lost/broken/BL Ratio',
                type: [[['BedWarsBeds']]],
                meta: { line: 110, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'avg',
                description: 'Average Kills/Final kills/Beds broken',
                type: [[['BedWarsAvg']]],
                meta: { line: 119, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'KDRatio',
                description: 'Kill Death ratio',
                type: [[['number']]],
                meta: { line: 128, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'finalKDRatio',
                description: 'Final kill death ratio',
                type: [[['number']]],
                meta: { line: 133, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'WLRatio',
                description: 'Win Loss ratio',
                type: [[['number']]],
                meta: { line: 138, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'solo',
                description: 'BedWars 1v8 stats',
                type: [[['BedWarsModeStats']]],
                meta: { line: 143, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'doubles',
                description: 'BedWars 2v8 stats',
                type: [[['BedWarsModeStats']]],
                meta: { line: 148, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'three',
                description: 'BedWars 3v4 stats',
                type: [[['BedWarsModeStats']]],
                meta: { line: 153, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'four',
                description: 'BedWars 4v4 stats',
                type: [[['BedWarsModeStats']]],
                meta: { line: 158, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'fourV2',
                description: 'BedWars 2v4 stats',
                type: [[['BedWarsModeStats']]],
                meta: { line: 163, file: 'BedWars.js', path: 'src/structures/MiniGames' }
              }
            ],
            meta: { line: 39, file: 'BedWars.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'BlitzSurvivalGames',
            description: 'Blitz SG class',
            construct: {
              name: 'BlitzSurvivalGames',
              params: [{ name: 'data', description: 'Blitz SG data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'coins',
                description: 'Coins',
                type: [[['number']]],
                meta: { line: 28, file: 'BlitzSurvivalGames.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'kills',
                description: 'Kills',
                type: [[['number']]],
                meta: { line: 33, file: 'BlitzSurvivalGames.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'deaths',
                description: 'Deaths',
                type: [[['number']]],
                meta: { line: 38, file: 'BlitzSurvivalGames.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'KDRatio',
                description: 'Kill Death ratio',
                type: [[['number']]],
                meta: { line: 43, file: 'BlitzSurvivalGames.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'winsSolo',
                description: 'Solo wins',
                type: [[['number']]],
                meta: { line: 48, file: 'BlitzSurvivalGames.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'winsTeam',
                description: 'Team wins',
                type: [[['number']]],
                meta: { line: 53, file: 'BlitzSurvivalGames.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'kitStats',
                description: 'Stats for each kit',
                type: [
                  [
                    ['Array', '<'],
                    ['BlitzSGKitStats', '>']
                  ]
                ],
                meta: { line: 58, file: 'BlitzSurvivalGames.js', path: 'src/structures/MiniGames' }
              }
            ],
            meta: { line: 22, file: 'BlitzSurvivalGames.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'SkyWars',
            description: 'SkyWars class',
            construct: {
              name: 'SkyWars',
              params: [{ name: 'data', description: 'SkyWars data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'coins',
                description: 'Coins',
                type: [[['number']]],
                meta: { line: 23, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'souls',
                description: 'Souls',
                type: [[['number']]],
                meta: { line: 28, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'tokens',
                description: 'Tokens',
                type: [[['number']]],
                meta: { line: 33, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'winstreak',
                description: 'Winstreak',
                type: [[['number']]],
                meta: { line: 38, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'kills',
                description: 'Kills',
                type: [[['number']]],
                meta: { line: 43, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'losses',
                description: 'Losses',
                type: [[['number']]],
                meta: { line: 48, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'deaths',
                description: 'Deaths',
                type: [[['number']]],
                meta: { line: 53, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'wins',
                description: 'Wins',
                type: [[['number']]],
                meta: { line: 58, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'lootChests',
                description: 'Loot Chests',
                type: [[['number']]],
                meta: { line: 63, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'openedLootChests',
                description: 'Opened Loot Chests',
                type: [[['number']]],
                meta: { line: 68, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'heads',
                description: 'Heads',
                type: [[['number']]],
                meta: { line: 73, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'level',
                description: 'Level',
                type: [[['number']]],
                meta: { line: 78, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'levelFormatted',
                description: 'Formatted Level',
                type: [[['string']]],
                meta: { line: 83, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'prestige',
                description: 'Prestige',
                type: [[['SkyWarsPrestige']]],
                meta: { line: 88, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'prestigeIcon',
                description: 'Prestige Icons',
                type: [[['SkyWarsPrestigeIcons']]],
                meta: { line: 93, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'playedGames',
                description: 'Games Played ( Total )',
                type: [[['number']]],
                meta: { line: 98, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'KDRatio',
                description: 'Global Kill Death Ratio',
                type: [[['number']]],
                meta: { line: 103, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'WLRatio',
                description: 'Global Win Loss Ratio',
                type: [[['number']]],
                meta: { line: 108, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'opals',
                description: 'Opals',
                type: [[['number']]],
                meta: { line: 113, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'avarice',
                description: 'Avarice',
                type: [[['number']]],
                meta: { line: 118, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'tenacity',
                description: 'Tenacity',
                type: [[['number']]],
                meta: { line: 123, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'shards',
                description: 'Shards',
                type: [[['number']]],
                meta: { line: 128, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'shardsInMode',
                description: 'Shard By Mode',
                type: [[['SkyWarsShardsInMode']]],
                meta: { line: 133, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'solo',
                description: 'Solo Skywars Stats',
                type: [[['SkyWarsModeExtendedStats']]],
                meta: { line: 144, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'team',
                description: 'Team Skywars Stats',
                type: [[['SkyWarsModeExtendedStats']]],
                meta: { line: 163, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'ranked',
                description: 'Ranked Skywars Stats',
                type: [[['SkyWarsModeStats']]],
                meta: { line: 180, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'mega',
                description: 'Mega Skywars Stats',
                type: [[['SkyWarsModeStats']]],
                meta: { line: 193, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'lab',
                description: 'Skywars Laboratory Stats',
                type: [[['SkyWarsModeStats']]],
                meta: { line: 206, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
              }
            ],
            meta: { line: 17, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'VampireZ',
            description: 'VampireZ class',
            construct: {
              name: 'VampireZ',
              params: [{ name: 'data', description: 'VampireZ data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'coins',
                description: 'Coins',
                type: [[['number']]],
                meta: { line: 12, file: 'VampireZ.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'human',
                description: 'Role Human',
                type: [[['VampireZHumanStats']]],
                meta: { line: 17, file: 'VampireZ.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'zombie',
                description: 'Role Zombie',
                type: [[['VampireZZombieStats']]],
                meta: { line: 27, file: 'VampireZ.js', path: 'src/structures/MiniGames' }
              },
              {
                name: 'vampire',
                description: 'Role Vampire',
                type: [[['VampireZVampireStats']]],
                meta: { line: 34, file: 'VampireZ.js', path: 'src/structures/MiniGames' }
              }
            ],
            meta: { line: 6, file: 'VampireZ.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'Player',
            description: 'Player class',
            construct: { name: 'Player', params: [{ name: 'data', description: 'Player data', type: [[['object']]] }] },
            props: [
              {
                name: 'nickname',
                description: 'Player nickname',
                type: [[['string']]],
                meta: { line: 30, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'uuid',
                description: 'Player UUID',
                type: [[['string']]],
                meta: { line: 35, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'history',
                description: 'Player nickname history known to Hypixel',
                type: [
                  [
                    ['Array', '<'],
                    ['string', '>']
                  ]
                ],
                meta: { line: 40, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'rank',
                description: 'Player rank',
                type: [[['PlayerRank']]],
                meta: { line: 45, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'mcVersion',
                description: 'Player minecraft version',
                type: [[['string']], [['null']]],
                meta: { line: 50, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'firstLoginTimestamp',
                description: 'Timestamp when player last logged in',
                type: [[['number']]],
                meta: { line: 55, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'firstLogin',
                description: 'Timestamp when player last logged in as Date',
                type: [[['Date']]],
                meta: { line: 60, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'lastLoginTimestamp',
                description: "Player's recently played game",
                type: [[['Game']], [['null']]],
                meta: { line: 65, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'lastLogin',
                description: 'Timestamp when player first logged in',
                type: [[['number']]],
                meta: { line: 70, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'lastLogoutTimestamp',
                description: 'Timestamp when player last logged out as Date',
                type: [[['Date']]],
                meta: { line: 75, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'lastLogout',
                description: 'Timestamp when player first logged in as Date',
                type: [[['Date']]],
                meta: { line: 80, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'recentlyPlayedGame',
                description: 'Timestamp when player last logged out',
                type: [[['number']]],
                meta: { line: 85, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'plusColor',
                description: "Player's plus color (must be a MVP+ rank)",
                type: [[['Color']], [['null']]],
                meta: { line: 91, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'guild',
                description: "Player's guild. Guild option must be `true`",
                type: [[['Guild']]],
                meta: { line: 99, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'karma',
                description: 'Player karma',
                type: [[['number']]],
                meta: { line: 104, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'achievements',
                description: 'Player achievements',
                type: [[['Object']]],
                meta: { line: 109, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'achievementPoints',
                description: 'Player achievement points',
                type: [[['number']]],
                meta: { line: 114, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'totalExperience',
                description: 'Player total experience',
                type: [[['number']]],
                meta: { line: 119, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'level',
                description: 'Player level',
                type: [[['number']]],
                meta: { line: 124, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'socialMedia',
                description: 'Player social media, if any',
                type: [
                  [
                    ['Array', '<'],
                    ['PlayerSocialMedia', '>']
                  ]
                ],
                meta: { line: 129, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'giftsSent',
                description: 'Amount of gifts sent',
                type: [[['number']]],
                meta: { line: 134, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'giftsReceived',
                description: 'Amount of gifts received',
                type: [[['number']]],
                meta: { line: 139, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'isOnline',
                description: 'Is player online?',
                type: [[['boolean']]],
                meta: { line: 144, file: 'Player.js', path: 'src/structures' }
              },
              {
                name: 'stats',
                description: 'Player stats for each mini-game',
                type: [[['PlayerStats']]],
                meta: { line: 156, file: 'Player.js', path: 'src/structures' }
              }
            ],
            methods: [
              {
                name: 'getRecentGames',
                description: 'Player recent games',
                returns: [
                  [
                    ['Promise', '<'],
                    ['Array', '<'],
                    ['RecentGame', '>>']
                  ]
                ],
                meta: { line: 149, file: 'Player.js', path: 'src/structures' }
              }
            ],
            meta: { line: 24, file: 'Player.js', path: 'src/structures' }
          },
          {
            name: 'RecentGame',
            description: 'RecentGame class',
            extends: [[['Game']]],
            construct: {
              name: 'RecentGame',
              params: [{ name: 'data', description: 'Recent game data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'dateTimestamp',
                description: 'Date as timestamp',
                type: [[['number']]],
                meta: { line: 14, file: 'RecentGame.js', path: 'src/structures' }
              },
              {
                name: 'date',
                description: 'Date',
                type: [[['Date']]],
                meta: { line: 19, file: 'RecentGame.js', path: 'src/structures' }
              },
              {
                name: 'mode',
                description: 'Game mode',
                type: [[['string']]],
                meta: { line: 24, file: 'RecentGame.js', path: 'src/structures' }
              },
              {
                name: 'map',
                description: 'Map',
                type: [[['string']]],
                meta: { line: 29, file: 'RecentGame.js', path: 'src/structures' }
              },
              {
                name: 'ongoing',
                description: 'Is game ongoing?',
                type: [[['boolean']]],
                meta: { line: 35, file: 'RecentGame.js', path: 'src/structures' }
              },
              {
                name: 'endedAt',
                description: 'Game ended at as Date',
                type: [[['Date']]],
                meta: { line: 40, file: 'RecentGame.js', path: 'src/structures' }
              },
              {
                name: 'endedTimestamp',
                description: 'Game ended at',
                type: [[['number']]],
                meta: { line: 45, file: 'RecentGame.js', path: 'src/structures' }
              },
              {
                name: 'id',
                description: 'Returns game ID',
                type: [[['GameId']]],
                meta: { line: 55, file: 'Game.js', path: 'src/structures' }
              },
              {
                name: 'code',
                description: 'Returns game code',
                type: [[['GameCode']]],
                meta: { line: 66, file: 'Game.js', path: 'src/structures' }
              }
            ],
            methods: [
              {
                name: 'toString',
                description: 'Returns regular game name',
                inherits: 'Game#toString',
                inherited: !0,
                returns: [[['GameString']]],
                meta: { line: 43, file: 'Game.js', path: 'src/structures' }
              }
            ],
            meta: { line: 7, file: 'RecentGame.js', path: 'src/structures' }
          },
          {
            name: 'AuctionInfo',
            description: 'Auction info class',
            construct: {
              name: 'AuctionInfo',
              params: [{ name: 'data', description: 'Auction info data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'page',
                description: 'Page number',
                type: [[['number']]],
                meta: { line: 11, file: 'AuctionInfo.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'totalPages',
                description: 'Total pages',
                type: [[['number']]],
                meta: { line: 16, file: 'AuctionInfo.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'totalAuctions',
                description: 'Total auctions',
                type: [[['number']]],
                meta: { line: 21, file: 'AuctionInfo.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'lastUpdatedTimestamp',
                description: 'Last updated timestamp',
                type: [[['number']]],
                meta: { line: 26, file: 'AuctionInfo.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'lastUpdatedAt',
                description: 'Last updated timestamp as Date',
                type: [[['Date']]],
                meta: { line: 31, file: 'AuctionInfo.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'age',
                description: 'Age',
                type: [[['number']]],
                meta: { line: 36, file: 'AuctionInfo.js', path: 'src/structures/SkyBlock/Auctions' }
              }
            ],
            meta: { line: 5, file: 'AuctionInfo.js', path: 'src/structures/SkyBlock/Auctions' }
          },
          {
            name: 'BaseAuction',
            description: 'Base auction class',
            construct: {
              name: 'BaseAuction',
              params: [
                { name: 'data', description: 'Base auction data', type: [[['object']]] },
                { name: 'includeItemBytes', type: [[['boolean']]] }
              ]
            },
            props: [
              {
                name: 'auctionId',
                description: 'Auction ID',
                type: [[['string']], [['null']]],
                meta: { line: 13, file: 'BaseAuction.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'auctioneerUuid',
                description: 'Auctioneer UUID',
                type: [[['string']], [['null']]],
                meta: { line: 18, file: 'BaseAuction.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'auctioneerProfile',
                description: "Auctioneer's skyblock profile ID",
                type: [[['string']], [['null']]],
                meta: { line: 23, file: 'BaseAuction.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'bin',
                description: 'Bin',
                type: [[['boolean']]],
                meta: { line: 28, file: 'BaseAuction.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'itemBytes',
                description: 'Item bytes',
                type: [[['ItemBytes']], [['null']]],
                meta: { line: 33, file: 'BaseAuction.js', path: 'src/structures/SkyBlock/Auctions' }
              }
            ],
            meta: { line: 7, file: 'BaseAuction.js', path: 'src/structures/SkyBlock/Auctions' }
          },
          {
            name: 'Bid',
            description: 'Bid class',
            construct: { name: 'Bid', params: [{ name: 'data', description: 'Bid data', type: [[['object']]] }] },
            props: [
              {
                name: 'auctionId',
                description: 'Auction ID',
                type: [[['string']], [['null']]],
                meta: { line: 11, file: 'Bid.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'profileId',
                description: 'Skyblock profile ID',
                type: [[['string']], [['null']]],
                meta: { line: 16, file: 'Bid.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'amount',
                description: 'Amount',
                type: [[['number']]],
                meta: { line: 21, file: 'Bid.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'timestamp',
                description: 'Auction timestamp',
                type: [[['number']]],
                meta: { line: 26, file: 'Bid.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'at',
                description: 'Auction timestamp as Date',
                type: [[['Date']]],
                meta: { line: 31, file: 'Bid.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'bidder',
                description: 'Bidder',
                type: [[['string']]],
                meta: { line: 36, file: 'Bid.js', path: 'src/structures/SkyBlock/Auctions' }
              }
            ],
            meta: { line: 5, file: 'Bid.js', path: 'src/structures/SkyBlock/Auctions' }
          },
          {
            name: 'PartialAuction',
            description: 'Partial auction class',
            construct: {
              name: 'PartialAuction',
              params: [
                { name: 'data', description: 'Partial auction data', type: [[['object']]] },
                { name: 'includeItemBytes', type: [[['boolean']]] }
              ]
            },
            props: [
              {
                name: 'buyer',
                description: 'Buyer UUID',
                type: [[['string']]],
                meta: { line: 14, file: 'PartialAuction.js', path: 'src/structures/SkyBlock/Auctions' }
              },
              {
                name: 'price',
                description: 'Price',
                type: [[['number']]],
                meta: { line: 19, file: 'PartialAuction.js', path: 'src/structures/SkyBlock/Auctions' }
              }
            ],
            meta: { line: 7, file: 'PartialAuction.js', path: 'src/structures/SkyBlock/Auctions' }
          },
          {
            name: 'Order',
            description: 'Order class',
            construct: { name: 'Order', params: [{ name: 'data', description: 'Order data', type: [[['object']]] }] },
            props: [
              {
                name: 'amount',
                description: 'Amount',
                type: [[['number']]],
                meta: { line: 11, file: 'Order.js', path: 'src/structures/SkyBlock/Bazzar' }
              },
              {
                name: 'pricePerUnit',
                description: 'Price per unit',
                type: [[['number']]],
                meta: { line: 16, file: 'Order.js', path: 'src/structures/SkyBlock/Bazzar' }
              },
              {
                name: 'totalPrice',
                description: 'Total price',
                type: [[['number']]],
                meta: { line: 21, file: 'Order.js', path: 'src/structures/SkyBlock/Bazzar' }
              },
              {
                name: 'orders',
                description: 'Orders',
                type: [[['number']]],
                meta: { line: 26, file: 'Order.js', path: 'src/structures/SkyBlock/Bazzar' }
              }
            ],
            meta: { line: 5, file: 'Order.js', path: 'src/structures/SkyBlock/Bazzar' }
          },
          {
            name: 'Product',
            description: 'Product class',
            construct: {
              name: 'Product',
              params: [{ name: 'data', description: 'Product data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'productId',
                description: 'Product ID',
                type: [[['string']]],
                meta: { line: 13, file: 'Product.js', path: 'src/structures/SkyBlock/Bazzar' }
              },
              {
                name: 'sellSummary',
                description: 'Product sell orders',
                type: [
                  [
                    ['Array', '<'],
                    ['Order', '>']
                  ]
                ],
                meta: { line: 18, file: 'Product.js', path: 'src/structures/SkyBlock/Bazzar' }
              },
              {
                name: 'buySummary',
                description: 'Product buy orders',
                type: [
                  [
                    ['Array', '<'],
                    ['Order', '>']
                  ]
                ],
                meta: { line: 23, file: 'Product.js', path: 'src/structures/SkyBlock/Bazzar' }
              },
              {
                name: 'status',
                description: 'Product status',
                type: [[['ProductStatus']]],
                meta: { line: 28, file: 'Product.js', path: 'src/structures/SkyBlock/Bazzar' }
              }
            ],
            meta: { line: 7, file: 'Product.js', path: 'src/structures/SkyBlock/Bazzar' }
          },
          {
            name: 'Item',
            description: 'Item class',
            construct: { name: 'Item', params: [{ name: 'data', description: 'Item data', type: [[['object']]] }] },
            props: [
              {
                name: 'itemId',
                description: 'Item ID',
                type: [[['number']]],
                meta: { line: 11, file: 'SkyblockInventoryItem.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'count',
                description: 'Item count',
                type: [[['number']]],
                meta: { line: 16, file: 'SkyblockInventoryItem.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'name',
                description: 'Item name',
                type: [[['string']]],
                meta: { line: 21, file: 'SkyblockInventoryItem.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'lore',
                description: 'Item lore',
                type: [[['string']]],
                meta: { line: 26, file: 'SkyblockInventoryItem.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'loreArray',
                description: 'Item lore',
                type: [
                  [
                    ['Array', '<'],
                    ['string', '>']
                  ]
                ],
                meta: { line: 31, file: 'SkyblockInventoryItem.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'loreForEmbed',
                description: 'Item lore for embed',
                type: [[['string']]],
                meta: { line: 36, file: 'SkyblockInventoryItem.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'enchantments',
                description: 'Item enchantments',
                type: [[['object']]],
                meta: { line: 41, file: 'SkyblockInventoryItem.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'anvilUses',
                description: 'Anvil uses',
                type: [[['number']]],
                meta: { line: 46, file: 'SkyblockInventoryItem.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'damage',
                description: 'Damage',
                type: [[['number']]],
                meta: { line: 51, file: 'SkyblockInventoryItem.js', path: 'src/structures/SkyBlock' }
              }
            ],
            meta: { line: 5, file: 'SkyblockInventoryItem.js', path: 'src/structures/SkyBlock' }
          },
          {
            name: 'SkyblockMember',
            description: 'Skyblock member class',
            construct: {
              name: 'SkyblockMember',
              params: [{ name: 'data', description: 'Skyblock member data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'uuid',
                description: 'Skyblock member UUID',
                type: [[['string']]],
                meta: { line: 16, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'player',
                description: "Skyblock member's player profile<br>\rIf `fetchPlayer` option is `true`.",
                type: [[['Player']], [['null']]],
                meta: { line: 22, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'profileName',
                description: "Skyblock member's profile name",
                type: [[['string']]],
                meta: { line: 27, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'firstJoinTimestamp',
                description: 'Timestamp when player first joined to SkyBlock',
                type: [[['number']]],
                meta: { line: 32, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'firstJoinAt',
                description: 'Timestamp when player first joined to SkyBlock as Date',
                type: [[['Date']]],
                meta: { line: 37, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'lastSave',
                description: 'Last save timestamp',
                type: [[['number']]],
                meta: { line: 42, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'lastSaveAt',
                description: 'Last save timestamp as Date',
                type: [[['Date']]],
                meta: { line: 47, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'lastDeathAt',
                description: 'Last death timestamp as Date',
                type: [[['Date']]],
                meta: { line: 52, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'lastDeath',
                description: 'Last save timestamp',
                type: [[['number']]],
                meta: { line: 57, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'fairySouls',
                description: 'Collected fairy souls',
                type: [[['SkyblockMemberArmor']]],
                meta: { line: 77, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'skills',
                description: 'Skyblock member skills',
                type: [[['SkyblockMemberSkills']]],
                meta: { line: 82, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'slayer',
                description: 'Skyblock member slayer',
                type: [[['SkyblockMemberSlayer']], [['null']]],
                meta: { line: 87, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'dungeons',
                description: 'Skyblock member dangeons',
                type: [[['SkyblockMemberDungeons']], [['null']]],
                meta: { line: 92, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'collections',
                description: 'Skyblock member collections',
                type: [[['object']]],
                meta: { line: 97, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              }
            ],
            methods: [
              {
                name: 'getArmor',
                description: 'Equipped armor',
                meta: { line: 62, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'getEnderChest',
                description: 'Skyblock member enderchest',
                returns: [
                  [
                    ['Promise', '<('],
                    ['Array', '<'],
                    ['InventoryItem', '>|'],
                    ['null', ')>']
                  ]
                ],
                meta: { line: 102, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'getInventory',
                description: 'Skyblock member inventory',
                returns: [
                  [
                    ['Promise', '<('],
                    ['Array', '<'],
                    ['InventoryItem', '>|'],
                    ['null', ')>']
                  ]
                ],
                meta: { line: 125, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
              }
            ],
            meta: { line: 10, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
          },
          {
            name: 'SkyblockProfile',
            description: 'Skyblock Profile class',
            construct: {
              name: 'SkyblockProfile',
              params: [{ name: 'data', description: 'Skyblock profile data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'profileId',
                description: 'Skyblock profile ID',
                type: [[['string']]],
                meta: { line: 11, file: 'SkyblockProfile.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'profileName',
                description: 'Skyblock profile name',
                type: [[['string']]],
                meta: { line: 15, file: 'SkyblockProfile.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'members',
                description: 'Skyblock profile members',
                type: [
                  [
                    ['Array', '<'],
                    ['SkyblockMember', '>']
                  ]
                ],
                meta: { line: 19, file: 'SkyblockProfile.js', path: 'src/structures/SkyBlock' }
              },
              {
                name: 'me',
                description: "Queried player's member stats",
                type: [[['SkyblockMember']]],
                meta: { line: 23, file: 'SkyblockProfile.js', path: 'src/structures/SkyBlock' }
              }
            ],
            meta: { line: 6, file: 'SkyblockProfile.js', path: 'src/structures/SkyBlock' }
          },
          {
            name: 'Status',
            description: 'Status class',
            construct: { name: 'Status', params: [{ name: 'data', description: 'Status data', type: [[['object']]] }] },
            props: [
              {
                name: 'online',
                description:
                  'Player online status.<br>\r<br>\rPlayers can disable this endpoint via in-game settings. When done so the API will return as if the player is offline.',
                type: [[['boolean']]],
                meta: { line: 14, file: 'Status.js', path: 'src/structures' }
              },
              {
                name: 'game',
                description: 'Game type',
                type: [[['Game']], [['null']]],
                meta: { line: 19, file: 'Status.js', path: 'src/structures' }
              },
              {
                name: 'mode',
                description: 'Game mode',
                type: [[['string']], [['null']]],
                meta: { line: 24, file: 'Status.js', path: 'src/structures' }
              },
              {
                name: 'map',
                description: 'Map',
                type: [[['string']], [['null']]],
                meta: { line: 29, file: 'Status.js', path: 'src/structures' }
              }
            ],
            meta: { line: 6, file: 'Status.js', path: 'src/structures' }
          },
          {
            name: 'WatchdogStats',
            description: 'WatchdogStats class',
            construct: {
              name: 'WatchdogStats',
              params: [{ name: 'data', description: 'Watchdog data', type: [[['object']]] }]
            },
            props: [
              {
                name: 'byWatchdogTotal',
                description: "Total watchdog's bans",
                type: [[['number']]],
                meta: { line: 11, file: 'Stats.js', path: 'src/structures/Watchdog' }
              },
              {
                name: 'byWatchDogLastMinute',
                description: "Watchdog's bans in the last minute",
                type: [[['number']]],
                meta: { line: 16, file: 'Stats.js', path: 'src/structures/Watchdog' }
              },
              {
                name: 'byWatchdogRollingDay',
                description: "Watchdog's bans in the last day ( resets at 5 am UTC ).",
                type: [[['number']]],
                meta: { line: 21, file: 'Stats.js', path: 'src/structures/Watchdog' }
              },
              {
                name: 'byStaffTotal',
                description: 'Total staff bans',
                type: [[['number']]],
                meta: { line: 26, file: 'Stats.js', path: 'src/structures/Watchdog' }
              },
              {
                name: 'byStaffRollingDay',
                description: 'Staff bans in the last day ( resets at 5 am UTC ).',
                type: [[['number']]],
                meta: { line: 31, file: 'Stats.js', path: 'src/structures/Watchdog' }
              }
            ],
            meta: { line: 5, file: 'Stats.js', path: 'src/structures/Watchdog' }
          }
        ],
        interfaces: [],
        typedefs: [
          {
            name: 'ClientOptions',
            type: [[['object']]],
            props: [
              {
                name: 'cache',
                description: 'Enable/Disable request caching.',
                optional: !0,
                default: !1,
                nullable: !0,
                type: [[['boolean']]]
              },
              {
                name: 'cacheTime',
                description: 'Amount of time in seconds to cache the requests.',
                optional: !0,
                default: 60,
                nullable: !0,
                type: [[['number']]]
              },
              {
                name: 'rateLimit',
                description: 'Rate limit mode.',
                optional: !0,
                default: "'AUTO'",
                type: [[['AUTO']], [['HARD']], [['NONE']]]
              },
              {
                name: 'cacheSize',
                description: 'The amount how many results will be cached. (`-1` for infinity)',
                optional: !0,
                default: -1,
                nullable: !0,
                type: [[['number']]]
              }
            ],
            meta: { line: 45, file: 'Client.js', path: 'src' }
          },
          {
            name: 'ColorCode',
            description:
              '* `BLACK`\r* `DARK_BLUE`\r* `DARK_GREEN`\r* `DARK_AQUA`\r* `DARK_RED`\r* `DARK_PURPLE`\r* `GOLD`\r* `GRAY`\r* `DARK_GRAY`\r* `BLUE`\r* `GREEN`\r* `AQUA`\r* `RED`\r* `LIGHT_PURPLE`\r* `YELLOW`\r* `WHITE`',
            type: [[['string']]],
            meta: { line: 69, file: 'Color.js', path: 'src/structures' }
          },
          {
            name: 'ColorString',
            description:
              '* BLACK: `Black`\r* DARK_BLUE: `Dark Blue`\r* DARK_GREEN: `Dark Green`\r* DARK_AQUA: `Dark Aqua`\r* DARK_RED: `Dark Red`\r* DARK_PURPLE: `Dark Purple`\r* GOLD: `Gold`\r* GRAY: `Gray`\r* DARK_GRAY: `Dark Gray`\r* BLUE: `Blue`,\r* GREEN: `Green`\r* AQUA: `Aqua`\r* RED: `Red`\r* LIGHT_PURPLE: `Light Purple`\r* YELLOW: `Yellow`\r* WHITE: `White`',
            type: [[['string']]],
            meta: { line: 88, file: 'Color.js', path: 'src/structures' }
          },
          {
            name: 'ColorHex',
            description:
              '* BLACK: `#000000`\r* DARK_BLUE: `#0000AA`\r* DARK_GREEN: `#008000`\r* DARK_AQUA: `#00AAAA`\r* DARK_RED: `#AA0000`\r* DARK_PURPLE: `#AA00AA`\r* GOLD: `#FFAA00`\r* GRAY: `#AAAAAA`\r* DARK_GRAY: `#555555`\r* BLUE: `#5555FF`\r* GREEN: `#3CE63C`\r* AQUA: `#3CE6E6`\r* RED: `#FF5555`\r* LIGHT_PURPLE: `#FF55FF`\r* YELLOW: `#FFFF55`\r* WHITE: `#FFFFFF`',
            type: [[['string']]],
            meta: { line: 107, file: 'Color.js', path: 'src/structures' }
          },
          {
            name: 'GameString',
            description:
              '* QUAKECRAFT: `Quake Craft`\r* WALLS: `Walls`\r* PAINTBALL: `Paintball`\r* SURVIVAL_GAMES: `Blitz Survival Games`\r* TNTGAMES: `The TNT Games`\r* VAMPIREZ: `VAMPIREZ`\r* WALLS3: `Mega Walls`\r* ARCADE: `Arcade`\r* ARENA: `Arena Brawl`\r* UHC: `UHC Champions`\r* MCGO: `Cops And Crims`\r* WARLORDS: `Warlords`\r* SUPER_SMASH: `Smash Heroes`\r* GINGERBREAD: `Turbo Kart Racers`\r* HOUSING: `Housing`\r* SKYWARS: `SkyWars`\r* TRUE_COMBAT: `Crazy Walls`\r* SPEED_UHC: `Speed UHC`\r* SKYCLASH: `SkyClash`\r* LEGACY: `Classic Games`\r* PROTOTYPE: `Prototype`\r* BEDWARS: `BedWars`\r* MURDER_MYSTERY: `Murder Mystery`\r* BUILD_BATTLE: `Build Battle`\r* DUELS: `Duels`\r* SKYBLOCK: `SkyBlock`\r* PIT: `The Pit`',
            type: [[['string']]],
            meta: { line: 73, file: 'Game.js', path: 'src/structures' }
          },
          {
            name: 'GameCode',
            description:
              '* QUAKECRAFT\r* WALLS\r* PAINTBALL\r* SURVIVAL_GAMES\r* TNTGAMES\r* VAMPIREZ\r* WALLS3\r* ARCADE\r* ARENA\r* UHC\r* MCGO\r* WARLORDS\r* SUPER_SMASH\r* GINGERBREAD\r* HOUSING\r* SKYWARS\r* TRUE_COMBAT\r* SPEED_UHC\r* SKYCLASH\r* LEGACY\r* PROTOTYPE\r* BEDWARS\r* MURDER_MYSTERY\r* BUILD_BATTLE\r* DUELS\r* SKYBLOCK\r* PIT',
            type: [[['string']]],
            meta: { line: 103, file: 'Game.js', path: 'src/structures' }
          },
          {
            name: 'GameId',
            description:
              '* QUAKECRAFT: `2`\r* WALLS: `3`\r* PAINTBALL: `4`\r* SURVIVAL_GAMES: `5`\r* TNTGAMES: `6`\r* VAMPIREZ: `7`\r* WALLS3: `13`\r* ARCADE: `14`\r* ARENA: `17`\r* UHC: `20`\r* MCGO: `21`\r* BATTLEGROUND: `23`\r* SUPER_SMASH: `24`\r* GINGERBREAD: `25`\r* HOUSING: `26`\r* SKYWARS: `51`\r* TRUE_COMBAT: `52`\r* SPEED_UHC: `54`\r* SKYCLASH: `55`\r* LEGACY: `56`\r* PROTOTYPE: `57`\r* BEDWARS: `58`\r* MURDER_MYSTERY: `59`\r* BUILD_BATTLE: `60`\r* DUELS: `61`\r* SKYBLOCK: `63`\r* PIT: `64`',
            type: [[['number']]],
            meta: { line: 133, file: 'Game.js', path: 'src/structures' }
          },
          {
            name: 'ArenaBrawlStats',
            type: [[['Object']]],
            props: [
              { name: "'1v1'", description: 'ArenaBrawl 1v1 stats', type: [[['ArenaBrawlModeStats']]] },
              { name: "'2v2'", description: 'ArenaBrawl 2v2 stats', type: [[['ArenaBrawlModeStats']]] },
              { name: "'4v4'", description: 'ArenaBrawl 4v4 stats', type: [[['ArenaBrawlModeStats']]] }
            ],
            meta: { line: 37, file: 'ArenaBrawl.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'ArenaBrawlModeStats',
            type: [[['Object']]],
            props: [
              { name: 'kills', description: 'ArenaBrawl kills', type: [[['number']]] },
              { name: 'deaths', description: 'ArenaBrawl deaths', type: [[['number']]] },
              { name: 'KDRatio', description: 'ArenaBrawl Kill Death ratio', type: [[['number']]] },
              { name: 'wins', description: 'ArenaBrawl wins', type: [[['number']]] },
              { name: 'losses', description: 'ArenaBrawl losses', type: [[['number']]] },
              { name: 'WLRatio', description: 'ArenaBrawl Win Loss ratio', type: [[['number']]] }
            ],
            meta: { line: 43, file: 'ArenaBrawl.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'BedWarsPrestige',
            description:
              '* `Stone`\r* `Iron`\r* `Gold`\r* `Diamond`\r* `Emerald`\r* `Sapphire`\r* `Ruby`\r* `Crystal`\r* `Opal`\r* `Amethyst`\r* `Rainbow`\r* `Iron Prime`\r* `Gold Prime`\r* `Diamond Prime`\r* `Emerald Prime`\r* `Sapphire Prime`\r* `Ruby Prime`\r* `Crystal Prime`\r* `Opal Prime`\r* `Amethyst Prime`\r* `Mirror`\r* `Light`\r* `Dawn`\r* `Dusk`\r* `Air`\r* `Wind`\r* `Nebula`\r* `Thunder`\r* `Earth`\r* `Water`\r* `Fire`',
            type: [[['string']]],
            meta: { line: 221, file: 'BedWars.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'BedWarsAvg',
            type: [[['object']]],
            props: [
              { name: 'kills', description: 'Average kills', type: [[['number']]] },
              { name: 'finalKills', description: 'Average final kills', type: [[['number']]] },
              { name: 'bedsBroken', description: 'Average beds broken', type: [[['number']]] }
            ],
            meta: { line: 255, file: 'BedWars.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'BedWarsCollectedItems',
            type: [[['object']]],
            props: [
              { name: 'iron', description: 'Iron', type: [[['number']]] },
              { name: 'gold', description: 'Gold', type: [[['number']]] },
              { name: 'diamond', description: 'Diamond', type: [[['number']]] },
              { name: 'emerald', description: 'Emerald', type: [[['number']]] }
            ],
            meta: { line: 261, file: 'BedWars.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'BedWarsBeds',
            type: [[['object']]],
            props: [
              { name: 'lost', description: 'Beds lost', type: [[['number']]] },
              { name: 'broken', description: 'Beds broken', type: [[['number']]] },
              { name: 'BLRatio', description: 'Beds broken/Beds lost ratio', type: [[['number']]] }
            ],
            meta: { line: 268, file: 'BedWars.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'BedWarsModeStats',
            type: [[['Object']]],
            props: [
              { name: 'winstreak', description: 'Winstreak', type: [[['number']]] },
              { name: 'playedGames', description: 'Played games', type: [[['number']]] },
              { name: 'kills', description: 'Kills', type: [[['number']]] },
              { name: 'deaths', description: 'Deaths', type: [[['number']]] },
              { name: 'wins', description: 'Wins', type: [[['number']]] },
              { name: 'losses', description: 'Losses', type: [[['number']]] },
              { name: 'finalKills', description: 'Final kills', type: [[['number']]] },
              { name: 'finalDeaths', description: 'Final deaths', type: [[['number']]] },
              { name: 'beds', description: 'Beds', type: [[['BedWarsBeds']]] },
              { name: 'avg', description: 'Average Kills/Final kills/Beds broken', type: [[['BedWarsAvg']]] },
              { name: 'KDRatio', description: 'Kill Death ratio', type: [[['number']]] },
              { name: 'WLRatio', description: 'Win Loss ratio', type: [[['number']]] },
              { name: 'finalKDRatio', description: 'Final kills/Final deaths ratio', type: [[['number']]] }
            ],
            meta: { line: 274, file: 'BedWars.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'BlitzSGKit',
            description:
              '* `arachnologist`\r* `archer`\r* `armorer`\r* `astronaut`\r* `baker`\r* `blaze`\r* `creepertamer`\r* `fisherman`\r* `horsetamer`\r* `hunter`\r* `knight`\r* `meatmaster`\r* `necromancer`\r* `pigman`\r* `reddragon`\r* `rogue`\r* `scout`\r* `slimeyslime`\r* `speleologist`\r* `tim`\r* `toxicologist`\r* `troll`\r* `wolftamer`\r* `paladin`\r* `shadow knight`\r* `hype train`\r* `jockey`\r* `reaper`\r* `golem`\r* `farmer`\r* `florist`\r* `snowman`\r* `guardian`\r* `warlock`\r* `viking`\r* `diver`\r* `ranger`\r* `donkeytamer`\r* `phoenix`\r* `warrior`\r* `rambo`\r* `random`',
            type: [[['string']]],
            meta: { line: 83, file: 'BlitzSurvivalGames.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'BlitzSGKitStats',
            type: [[['object']]],
            props: [
              { name: 'name', description: 'Kit name', type: [[['BlitzSGKit']]] },
              { name: 'games', description: 'Played games', type: [[['number']]] },
              { name: 'level', description: 'level', type: [[['number']]] },
              { name: 'experience', description: 'Total experience', type: [[['number']]] },
              { name: 'prestige', description: 'Prestige', type: [[['number']]] },
              { name: 'kills', description: 'Kills', type: [[['number']]] },
              { name: 'deaths', description: 'Deaths', type: [[['number']]] },
              { name: 'KDRatio', description: 'Kill Death ratio', type: [[['number']]] },
              { name: 'wins', description: 'Wins', type: [[['number']]] },
              { name: 'losses', description: 'Losses', type: [[['number']]] },
              { name: 'WLRatio', description: 'Win Loss ratio', type: [[['number']]] },
              { name: 'timePlayed', description: 'Time played', type: [[['number']], [['null']]] }
            ],
            meta: { line: 128, file: 'BlitzSurvivalGames.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'SkyWarsPrestige',
            description:
              '* `Iron`\r* `Iron`\r* `Gold`\r* `Diamond`\r* `Emerald`\r* `Sapphire`\r* `Ruby`\r* `Crystal`\r* `Opal`\r* `Amethyst`\r* `Rainbow`',
            type: [[['string']]],
            meta: { line: 217, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'SkyWarsModeStats',
            type: [[['Object']]],
            props: [
              { name: 'playedGames', description: 'Played games', type: [[['number']]] },
              { name: 'kills', description: 'Kills', type: [[['number']]] },
              { name: 'deaths', description: 'Deaths', type: [[['number']]] },
              { name: 'wins', description: 'Wins', type: [[['number']]] },
              { name: 'losses', description: 'Losses', type: [[['number']]] },
              { name: 'KDRatio', description: 'Kill Death ratio', type: [[['number']]] },
              { name: 'WLRatio', description: 'Win Loss ratio', type: [[['number']]] }
            ],
            meta: { line: 231, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'SkyWarsModeExtendedStats',
            type: [[['Object']]],
            props: [
              { name: 'playedGames', description: 'Played games', type: [[['number']]] },
              { name: 'kills', description: 'Kills', type: [[['number']]] },
              { name: 'deaths', description: 'Deaths', type: [[['number']]] },
              { name: 'wins', description: 'Wins', type: [[['number']]] },
              { name: 'losses', description: 'Losses', type: [[['number']]] },
              { name: 'KDRatio', description: 'Kill Death ratio', type: [[['number']]] },
              { name: 'WLRatio', description: 'Win Loss ratio', type: [[['number']]] },
              { name: 'normal', description: 'Normal Mode Stats', type: [[['SkyWarsModeStats']]] },
              { name: 'insane', description: 'Insane Mode Stats', type: [[['SkyWarsModeStats']]] }
            ],
            meta: { line: 241, file: 'SkyWars.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'VampireZHumanStats',
            type: [[['object']]],
            props: [
              { name: 'kills', description: 'Kills', type: [[['number']]] },
              { name: 'deaths', description: 'Deaths', type: [[['number']]] },
              { name: 'KDRatio', description: 'Kill Death ratio', type: [[['number']]] },
              { name: 'wins', description: 'Wins', type: [[['number']]] }
            ],
            meta: { line: 41, file: 'VampireZ.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'VampireZZombieStats',
            type: [[['object']]],
            props: [{ name: 'kills', description: 'Kills', type: [[['number']]] }],
            meta: { line: 48, file: 'VampireZ.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'VampireZVampireStats',
            type: [[['object']]],
            props: [
              { name: 'kills', description: 'Kills', type: [[['number']]] },
              { name: 'deaths', description: 'Deaths', type: [[['number']]] },
              { name: 'KDRatio', description: 'Kill Death ratio', type: [[['number']]] }
            ],
            meta: { line: 52, file: 'VampireZ.js', path: 'src/structures/MiniGames' }
          },
          {
            name: 'PlayerRank',
            description:
              '* `Default`\r* `VIP`\r* `VIP+`\r* `MVP`\r* `MVP+`\r* `MVP++`\r* `Helper`\r* `Moderator`\r* `Admin`\r* `YouTube`\r* `Build Team`\r* `MCProHosting`',
            type: [[['string']]],
            meta: { line: 248, file: 'Player.js', path: 'src/structures' }
          },
          {
            name: 'PlayerSocialMedia',
            description: 'Player social media object',
            type: [[['Object']]],
            props: [
              {
                name: 'name',
                description: 'Twitter, YouTube, Instagram, Twitch, Mixer, Hypixel, Discord',
                type: [[['string']]]
              },
              { name: 'link', description: 'Link to social media', type: [[['string']]] },
              {
                name: 'id',
                description: 'TWITTER, YOUTUBE, INSTRAGRAM, TWITCH, MIXER, HYPIXEL, DISCORD',
                type: [[['string']]]
              }
            ],
            meta: { line: 263, file: 'Player.js', path: 'src/structures' }
          },
          {
            name: 'PlayerStats',
            description:
              'Player stats for each mini-game. `null` if player has no stats.\r<br>\rUsage: `<Player>.stats.skywars`',
            type: [[['Object']], [['null']]],
            props: [
              { name: 'skywars', description: 'SkyWars', type: [[['SkyWars']], [['null']]] },
              { name: 'bedwars', description: 'BedWars', type: [[['BedWars']], [['null']]] },
              { name: 'uhc', description: 'UHC', type: [[['UHC']], [['null']]] },
              { name: 'speedUHC', description: 'Speed UHC', type: [[['SpeedUHC']], [['null']]] },
              { name: 'murdermystery', description: 'Murder Mystery', type: [[['MurderMystery']], [['null']]] },
              { name: 'duels', description: 'Duels', type: [[['Duels']], [['null']]] },
              { name: 'crazywalls', description: 'CrazyWalls', type: [[['CrazyWalls']], [['null']]] },
              { name: 'buildbattle', description: 'BuildBattle', type: [[['BuildBattle']], [['null']]] },
              { name: 'megawalls', description: 'MegaWalls', type: [[['MegaWalls']], [['null']]] },
              { name: 'copsandcrims', description: 'Cops and Crims', type: [[['CopsAndCrims']], [['null']]] },
              { name: 'tntgames', description: 'The TNT Games', type: [[['TNTGames']], [['null']]] },
              { name: 'smashheroes', description: 'Smash Heroes', type: [[['SmashHeroes']], [['null']]] },
              { name: 'vampirez', description: 'VampireZ', type: [[['VampireZ']], [['null']]] },
              { name: 'blitzsg', description: 'Blitz Survival Games', type: [[['BlitzSurvivalGames']], [['null']]] },
              { name: 'arena', description: 'Arena Brawl', type: [[['ArenaBrawl']], [['null']]] }
            ],
            meta: { line: 270, file: 'Player.js', path: 'src/structures' }
          },
          {
            name: 'ProductStatus',
            type: [[['object']]],
            props: [
              { name: 'sellPrice', description: 'Sell price', type: [[['number']]] },
              { name: 'buyPrice', description: 'Buy price', type: [[['number']]] },
              { name: 'sellVolume', description: 'Sell volume', type: [[['number']]] },
              { name: 'buyVolume', description: 'Buy volume', type: [[['number']]] },
              { name: 'sellMovingWeek', description: 'Sell moving week', type: [[['number']]] },
              { name: 'buyMovingWeek', description: 'Sell moving week', type: [[['number']]] },
              { name: 'sellOrders', description: 'Sell orders', type: [[['number']]] },
              { name: 'buyOrders', description: 'Buy orders', type: [[['number']]] }
            ],
            meta: { line: 40, file: 'Product.js', path: 'src/structures/SkyBlock/Bazzar' }
          },
          {
            name: 'SkyblockMemberArmor',
            description: 'Equipped armor',
            type: [[['object']]],
            props: [
              { name: 'helmet', description: 'Helmet', type: [[['InventoryItem']], [['null']]] },
              { name: 'chestplate', description: 'Chestplate', type: [[['InventoryItem']], [['null']]] },
              { name: 'leggings', description: 'Leggings', type: [[['InventoryItem']], [['null']]] },
              { name: 'boots', description: 'Boots', type: [[['InventoryItem']], [['null']]] }
            ],
            meta: { line: 219, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
          },
          {
            name: 'SkyblockMemberSkills',
            type: [[['object']]],
            props: [
              { name: 'farming', description: 'Farming skill', type: [[['SkyblockSkillLevel']]] },
              { name: 'mining', description: 'Mining skill', type: [[['SkyblockSkillLevel']]] },
              { name: 'combat', description: 'Combat skill', type: [[['SkyblockSkillLevel']]] },
              { name: 'foraging', description: 'Foraging skills', type: [[['SkyblockSkillLevel']]] },
              { name: 'fishing', description: 'Fishing skill', type: [[['SkyblockSkillLevel']]] },
              { name: 'enchanting', description: 'Enchanting skill', type: [[['SkyblockSkillLevel']]] },
              { name: 'alchemy', description: 'Alchemy skill', type: [[['SkyblockSkillLevel']]] },
              { name: 'taming', description: 'Taming skill', type: [[['SkyblockSkillLevel']]] },
              { name: 'carpentry', description: 'Carpentry skill', type: [[['SkyblockSkillLevel']]] },
              { name: 'runecrafting', description: 'Runecrafting skill', type: [[['SkyblockSkillLevel']]] }
            ],
            meta: { line: 226, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
          },
          {
            name: 'SkyblockSkillLevel',
            description:
              'There is list of skills: {@link SkyblockMemberSkills}. <br>\rUsage: `<SkyblockMember>.skills.farming.xp`.',
            type: [[['object']]],
            props: [
              { name: 'xp', description: 'Total XP', type: [[['number']]] },
              { name: 'level', description: 'Level', type: [[['number']]] },
              { name: 'maxLevel', description: 'Max level', type: [[['number']]] },
              { name: 'xpCurrent', description: 'Current XP', type: [[['number']]] },
              { name: 'xpForNext', description: 'XP for next level', type: [[['number']]] },
              { name: 'progress', description: 'Progress', type: [[['number']]] }
            ],
            meta: { line: 239, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
          },
          {
            name: 'SkyblockMemberSlayer',
            type: [[['object']]],
            props: [
              { name: 'zombie', type: [[['SkyblockMemberSlayerLevel']]] },
              { name: 'spider', type: [[['SkyblockMemberSlayerLevel']]] },
              { name: 'wolf', type: [[['SkyblockMemberSlayerLevel']]] }
            ],
            meta: { line: 251, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
          },
          {
            name: 'SkyblockMemberSlayerLevel',
            type: [[['object']]],
            props: [
              { name: 'xp', description: 'Total XP', type: [[['number']]] },
              { name: 'tier1', description: 'Tier 1', type: [[['number']]] },
              { name: 'tier2', description: 'Tier 2', type: [[['number']]] },
              { name: 'tier3', description: 'Tier 3', type: [[['number']]] },
              { name: 'tier4', description: 'Tier 4', type: [[['number']]] },
              { name: 'level', description: 'Level', type: [[['number']]] }
            ],
            meta: { line: 257, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
          },
          {
            name: 'SkyblockMemberDungeons',
            type: [[['object']]],
            props: [
              { name: 'types', description: 'Dungeons types', type: [[['object']]] },
              { name: 'classes', description: 'Dungeons classes', type: [[['object']]] }
            ],
            meta: { line: 266, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
          },
          {
            name: 'SkyblockMemberDungeonsTypes',
            type: [[['object']]],
            props: [{ name: 'catacombs', type: [[['SkyblockSkillLevel']]] }],
            meta: { line: 271, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
          },
          {
            name: 'SkyblockMemberDungeonsClasses',
            type: [[['object']]],
            props: [
              { name: 'healer', description: 'Healer class', type: [[['SkyblockSkillLevel']]] },
              { name: 'mage', description: 'Mage class', type: [[['SkyblockSkillLevel']]] },
              { name: 'berserk', description: 'Berserk class', type: [[['SkyblockSkillLevel']]] },
              { name: 'archer', description: 'Archer class', type: [[['SkyblockSkillLevel']]] },
              { name: 'tank', description: 'Tank class', type: [[['SkyblockSkillLevel']]] }
            ],
            meta: { line: 275, file: 'SkyblockMember.js', path: 'src/structures/SkyBlock' }
          }
        ],
        externals: []
      };
    },
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
//# sourceMappingURL=app.30156493693be147ef75.js.map
