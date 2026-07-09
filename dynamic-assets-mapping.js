/*
 * Hirundo — dynamic asset mapping
 * Lists the self-hosted webfont files Publii must ship with the site.
 * All brand fonts are self-hosted (no external Google request).
 */
module.exports = function () {
    return [
        '/fonts/cormorantgaramond/cormorantgaramond-500.woff2',
        '/fonts/cormorantgaramond/cormorantgaramond-600.woff2',
        '/fonts/cormorantgaramond/cormorantgaramond-500-italic.woff2',
        '/fonts/inter/inter-400.woff2',
        '/fonts/inter/inter-500.woff2',
        '/fonts/inter/inter-600.woff2',
        '/fonts/inter/inter-700.woff2',
        '/fonts/jetbrainsmono/jetbrainsmono.woff2'
    ];
};
