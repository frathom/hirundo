/*
 * Hirundo — dynamic asset mapping
 * Tells Publii which self-hosted dynamic font files must ship with the site.
 * Cormorant Garamond and Inter are loaded from Google Fonts (see partials/fonts.hbs);
 * only JetBrains Mono is self-hosted, so it is the single dynamic asset here.
 */
module.exports = function () {
    return [
        '/fonts/jetbrainsmono/jetbrainsmono.woff2'
    ];
};
