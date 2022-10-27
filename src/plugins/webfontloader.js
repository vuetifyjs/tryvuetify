/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  console.log('here')
  webFontLoader.load({
    google: {
      families: [
        'Roboto+Mono:100,300,400,500,700,900&display=swap',
      ],
    },
  })
}
