(function(r, o) {
    const c = z,
        Y = r();
    while (!![]) {
        try {
            const R = -parseInt(c(0x128)) / (-0xe76 + 0x251e + 0x78d * -0x3) * (parseInt(c(0xee)) / (0x2e2 * -0x9 + 0x206c + 0x678 * -0x1)) + parseInt(c(0x11f)) / (-0x281 + 0xb * 0x21e + -0x14c6 * 0x1) * (parseInt(c(0x106)) / (-0x845 + -0x26d5 + 0x2f1e)) + -parseInt(c(0xe8)) / (-0x1 * -0x17c7 + 0x18a9 + -0x306b) * (parseInt(c(0x103)) / (0xfd6 + 0x2 * -0x2e4 + -0xa08)) + -parseInt(c(0x10a)) / (0xc65 + -0xd9c + 0x2 * 0x9f) + -parseInt(c(0xf3)) / (0x1d63 * 0x1 + 0x49 * 0x83 + -0x2 * 0x215b) * (-parseInt(c(0x122)) / (0xc76 + 0x1065 + -0x1cd2)) + parseInt(c(0x11a)) / (-0x1b2 + -0x104a + -0x1 * -0x1206) * (-parseInt(c(0x10d)) / (0x1372 + 0xc7 * -0x2e + -0x105b * -0x1)) + parseInt(c(0x12b)) / (0x1 * 0x24f2 + -0x52a * 0x3 + -0x224 * 0xa) * (parseInt(c(0xf5)) / (0x2 * 0xaa6 + -0x2be + 0x1 * -0x1281));
            if (R === o) break;
            else Y['push'](Y['shift']());
        } catch (t) {
            Y['push'](Y['shift']());
        }
    }
}(D, -0x11 * -0x84ef + -0x81f76 + 0x53a21));

function z(r, o) {
    const Y = D();
    return z = function(R, t) {
        R = R - (0x7 * 0x2c2 + 0x13c8 + 0x23f * -0x11);
        let m = Y[R];
        return m;
    }, z(r, o);
}
const Notipin = {
    'Confirm'(o) {
        const f = z,
            Y = {};
        Y[f(0xf8)] = '', Y['yes'] = f(0x10b), Y['no'] = 'CANCEL', Y[f(0x12d)] = 'NORMAL', Y[f(0x107)] = f(0xe7), Y[f(0xf4)] = () => {}, Y[f(0x111)] = () => {}, o = Object['assign']({}, Y, o);
        const R = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22Notipin\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22symbol\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20⚠️\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22msg\x22>' + o[f(0xf8)] + f(0x11d) + o['no'] + f(0x109) + o[f(0x12a)] + f(0x11b),
            t = document[f(0x12c)](f(0x10c));
        t[f(0xfc)] = R;
        const m = t[f(0xfe)][f(0xe9)]('.Notipin'),
            Z = t[f(0xfe)]['querySelector'](f(0x110)),
            p = t[f(0xfe)][f(0xe9)]('.box\x20.buttons\x20.no'),
            C = o[f(0x12d)]['toLowerCase'](),
            y = o[f(0x107)][f(0x123)]();
        y == f(0xfa) && m[f(0x12f)][f(0x114)](f(0xfa));
        if (C == f(0x12e) || C == f(0x125)) m['classList'][f(0x114)]('danger');
        else {
            if (C == 'info' || C == f(0x11e)) m['classList'][f(0x114)]('info');
            else C == f(0x10f) && m[f(0x12f)][f(0x114)](f(0x10f));
        }
        m['addEventListener'](f(0xed), M => {
            const F = f;
            M[F(0xeb)] === m && (o[F(0x111)](), this['end'](m));
        }), Z[f(0xfb)](f(0xed), () => {
            const U = f;
            o[U(0xf4)](), this[U(0x127)](m);
        }), p[f(0xfb)]('click', () => {
            const N = f;
            o[N(0x111)](), this['end'](m);
        });
        try {
            document['querySelector']('.Notipin')[f(0xf7)]();
        } catch {}
        document[f(0x102)][f(0xec)](t['content']);
    },
    'Alert'(o) {
        const Q = z,
            Y = {};
        Y[Q(0xf8)] = '', Y[Q(0x12a)] = 'OK', Y[Q(0x12d)] = 'NORMAL', Y[Q(0x107)] = Q(0xe7), Y[Q(0xf4)] = () => {}, o = Object[Q(0xfd)]({}, Y, o);
        const R = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22Notipin\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22symbol\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20⚠️\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22msg\x22>' + o[Q(0xf8)] + Q(0x10e) + o[Q(0x12a)] + Q(0x120),
            t = document[Q(0x12c)]('template');
        t[Q(0xfc)] = R;
        const m = t[Q(0xfe)][Q(0xe9)](Q(0x11c)),
            Z = t['content'][Q(0xe9)](Q(0x110)),
            p = o[Q(0x12d)][Q(0x123)](),
            C = o[Q(0x107)][Q(0x123)]();
        C == Q(0xfa) && m[Q(0x12f)][Q(0x114)]('dark');
        if (p == Q(0x12e) || p == 'red') m[Q(0x12f)][Q(0x114)]('danger');
        else {
            if (p == Q(0xff) || p == Q(0x11e)) m[Q(0x12f)][Q(0x114)](Q(0xff));
            else p == Q(0x10f) && m[Q(0x12f)][Q(0x114)](Q(0x10f));
        }
        m[Q(0xfb)](Q(0xed), y => {
            const k = Q;
            y['target'] === m && (o[k(0xf4)](), this[k(0x127)](m));
        }), Z[Q(0xfb)]('click', () => {
            const O = Q;
            o[O(0xf4)](), this[O(0x127)](m);
        });
        try {
            document[Q(0xe9)](Q(0x11c))[Q(0xf7)]();
        } catch {}
        document[Q(0x102)]['appendChild'](t[Q(0xfe)]);
    },
    'Prompt'(o) {
        const S = z,
            Y = {};
        Y[S(0xf8)] = '', Y[S(0x12a)] = S(0x132), Y['no'] = S(0x126), Y[S(0x121)] = S(0xea), Y['type'] = S(0x105), Y['mode'] = S(0xe7), Y[S(0x118)] = ![], Y[S(0x124)] = 0x0, Y[S(0xf4)] = () => {}, Y[S(0x111)] = () => {}, o = Object[S(0xfd)]({}, Y, o);
        const R = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22Notipin\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22msg\x22>' + o[S(0xf8)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22field\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20confirm\x20no\x22>' + o['no'] + S(0x109) + o[S(0x12a)] + S(0x11b),
            t = document[S(0x12c)](S(0x10c));
        t['innerHTML'] = R;
        const m = t[S(0xfe)][S(0xe9)](S(0x11c)),
            Z = t[S(0xfe)][S(0xe9)](S(0x110)),
            p = t[S(0xfe)][S(0xe9)](S(0xf0)),
            C = o['type']['toLowerCase'](),
            y = o[S(0x107)][S(0x123)]();
        y == 'dark' && m[S(0x12f)][S(0x114)]('dark');
        let M;
        o['textarea'] === !![] ? (M = document['createElement'](S(0x118)), M['placeholder'] = o[S(0x121)]) : (M = document[S(0x12c)](S(0xef)), M['placeholder'] = o[S(0x121)]);
        o['max'] > -0x7cd * 0x1 + -0xf1 * 0x1d + -0x118d * -0x2 && M['setAttribute']('maxlength', o[S(0x124)]);
        m[S(0xe9)](S(0xf1))['appendChild'](M);
        if (C == 'danger' || C == S(0x125)) m['classList'][S(0x114)](S(0x12e));
        else {
            if (C == S(0xff) || C == 'green') m[S(0x12f)][S(0x114)](S(0xff));
            else C == S(0x10f) && m['classList'][S(0x114)](S(0x10f));
        }
        m[S(0xfb)]('click', d => {
            const u = S;
            d[u(0xeb)] === m && (o['onNo'](), this[u(0x127)](m));
        }), Z['addEventListener'](S(0xed), () => {
            const b = S;
            o['onYes'](M[b(0x101)]), this[b(0x127)](m);
        }), p[S(0xfb)]('click', () => {
            const w = S;
            o[w(0x111)](), this[w(0x127)](m);
        });
        try {
            document['querySelector'](S(0x11c))['remove']();
        } catch {}
        document[S(0x102)][S(0xec)](t[S(0xfe)]), M[S(0x130)]();
    },
    'end'(r) {
        const L = z;
        r['querySelector'](L(0xf6))[L(0x12f)][L(0x114)]('fade'), setTimeout(() => {
            const B = L;
            document[B(0x102)]['removeChild'](r);
        }, 0x1ea4 + 0x1 * -0x669 + -0x170f * 0x1);
    },
    'custom'() {
        const K = z,
            r = document['querySelector'](K(0x119));
        if (r) return r[K(0xf7)]();
    },
    'full'() {
        const n = z,
            r = document[n(0xe9)]('[data-notipin=\x27fullCSS\x27]');
        if (r) return r[n(0xf7)]();
        this['custom']();
    },
    'font'(r) {
        const v = z,
            o = document[v(0x12c)]('style');
        o['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.Notipin\x20{font-family:\x20' + r + v(0x115) + r + v(0x100), document[v(0xe9)]('head')[v(0xec)](o);
    }
};
((() => {
    const g = z,
        r = document['createElement'](g(0x117));
    r[g(0x129)] = g(0x104), r['href'] = g(0xf2), r[g(0x131)]('data-notipin', g(0x113)), document['querySelector'](g(0xf9))[g(0xec)](r);
    const o = document[g(0x12c)]('link');
    o[g(0x129)] = g(0x104), o[g(0x112)] = 'https://cdn.jsdelivr.net/gh/devanka761/notipin@main/src/JnC3tgADSagnwv7FrUJq.css', o[g(0x131)](g(0x108), g(0x116)), document[g(0xe9)](g(0xf9))[g(0xec)](o);
})());

function D() {
    const V = [';}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.Notipin\x20.box\x20.buttons\x20.btn\x20{font-family:\x20', 'customCSS', 'link', 'textarea', '[data-notipin=\x27customCSS\x27]', '20hAYUKL', '</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', '.Notipin', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20confirm\x20no\x22>', 'green', '925215RFOpQD', '</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'placeholder', '8037VCPsiy', 'toLowerCase', 'max', 'red', 'CANCEL', 'end', '740534FwyXhs', 'rel', 'yes', '72tuzbCm', 'createElement', 'type', 'danger', 'classList', 'focus', 'setAttribute', 'OK', 'LIGHT', '10925LwDtuQ', 'querySelector', 'Tulis\x20Sesuatu..', 'target', 'appendChild', 'click', '2tYKBTv', 'input', '.box\x20.buttons\x20.no', '.box\x20.field', 'https://cdn.jsdelivr.net/gh/devanka761/notipin@main/src/3hz2qvGHEaRVRD7fMHD2.css', '1376AoydDP', 'onYes', '4063813STxszw', '.box', 'remove', 'msg', 'head', 'dark', 'addEventListener', 'innerHTML', 'assign', 'content', 'info', ';}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'value', 'body', '1338DztUiG', 'stylesheet', 'NORMAL', '4TWkbnX', 'mode', 'data-notipin', '</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20confirm\x20yes\x22>', '618212OQnvKG', 'OK', 'template', '3480158aHDSwT', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20alert\x20yes\x22>', 'blue', '.box\x20.buttons\x20.yes', 'onNo', 'href', 'fullCSS', 'add'];
    D = function() {
        return V;
    };
    return D();
}
