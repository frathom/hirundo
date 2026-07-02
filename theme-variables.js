/*
 * Hirundo — theme variables
 * Publii calls this on every render and injects the returned CSS (an
 * `:root {}` block) after style.css, so the editor colour-pickers below
 * override the brand defaults baked into the stylesheet.
 */

var generateThemeVariables = function (params) {
    // Small helpers so an empty picker never emits `--x: ;`
    var val = function (v, fallback) {
        return (v === undefined || v === null || v === '') ? fallback : v;
    };

    // Derive a translucent version of a hex colour for soft fills / borders.
    var withAlpha = function (hex, alpha) {
        hex = String(hex || '').replace('#', '');
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) { return 'rgba(47,62,90,' + alpha + ')'; }
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
    };

    var navy  = val(params.colorNavy,  '#2F3E5A');
    var gold  = val(params.colorGold,  '#D4B968');
    var cream = val(params.colorCream, '#FBF8F1');
    var ink   = val(params.colorInk,   '#15171C');
    var logoH = parseInt(val(params.logoHeight, 46), 10) || 46;

    var output = '\n:root {\n' +
        '  --navy: ' + navy + ';\n' +
        '  --gold: ' + gold + ';\n' +
        '  --cream: ' + cream + ';\n' +
        '  --ink: ' + ink + ';\n' +
        '  --navy-soft: ' + withAlpha(navy, 0.08) + ';\n' +
        '  --navy-line: ' + withAlpha(navy, 0.16) + ';\n' +
        '  --gold-soft: ' + withAlpha(gold, 0.18) + ';\n' +
        '  --gold-ring: ' + withAlpha(gold, 0.45) + ';\n' +
        '  --ink-soft: ' + withAlpha(ink, 0.64) + ';\n' +
        '  --ink-line: ' + withAlpha(ink, 0.12) + ';\n' +
        '  --logo-height: ' + logoH + 'px;\n' +
        '  --header-h: ' + (logoH + 42) + 'px;\n' +
        '}\n';

    return output;
};

module.exports = generateThemeVariables;
