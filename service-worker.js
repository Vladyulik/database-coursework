/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "a9c3ef66c5f10a5c0d45d21a56a99d73"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.07799b51.css",
    "revision": "e2694897af5072c3c9441558e38454c0"
  },
  {
    "url": "assets/img/projectsDelete.d1c4baaa.png",
    "revision": "d1c4baaa0a969c9427199edc6e2130d0"
  },
  {
    "url": "assets/img/projectsGetAll.43c83cdb.png",
    "revision": "43c83cdba729868dc444157947bc7883"
  },
  {
    "url": "assets/img/projectsGetOne.65ba0f4e.png",
    "revision": "65ba0f4eb6477a69c6fd37e4e0de6b7f"
  },
  {
    "url": "assets/img/projectsGetOneNotFound.43ae8291.png",
    "revision": "43ae829186c0077d3fa4bba4e9726bc4"
  },
  {
    "url": "assets/img/projectsInitialData.396e7350.png",
    "revision": "396e7350f7a168e2882cdbc6cb911f67"
  },
  {
    "url": "assets/img/projectsPost.0cbfc9d0.png",
    "revision": "0cbfc9d0a4ada9f47f0a040a683ba08f"
  },
  {
    "url": "assets/img/projectsPostBadReq.5c2fce1e.png",
    "revision": "5c2fce1e611917610280858e7546eadb"
  },
  {
    "url": "assets/img/projectsPut.345f282a.png",
    "revision": "345f282afb3768f2758ced22a9915f7a"
  },
  {
    "url": "assets/img/relational_scheme.44c970b0.png",
    "revision": "44c970b0a143ec6fead87694514ea610"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cbb323a7.js",
    "revision": "8f1cc1d9e5767a6930e0cbf13df31945"
  },
  {
    "url": "assets/js/10.5fa97fa5.js",
    "revision": "266ac7d94d5ae16655657069635c41f2"
  },
  {
    "url": "assets/js/13.34fc696c.js",
    "revision": "f43cbcc5e002360038310b13eb2b6464"
  },
  {
    "url": "assets/js/14.1dd08197.js",
    "revision": "89bc0b0b4810dcc2e7a0a0e4caba1119"
  },
  {
    "url": "assets/js/15.e2f70e3b.js",
    "revision": "79c78b49260ea691eac787909aa52f11"
  },
  {
    "url": "assets/js/16.0f118410.js",
    "revision": "24a20045bc121045b8299f100b53c303"
  },
  {
    "url": "assets/js/17.a925781f.js",
    "revision": "36e86eef3170d7a41c1f5d3850458fd0"
  },
  {
    "url": "assets/js/18.aef473c8.js",
    "revision": "d12dba1a9a7706c8b37cca889e347d37"
  },
  {
    "url": "assets/js/19.f18a3f78.js",
    "revision": "4892856f92a3216b9bba4673ac4d367d"
  },
  {
    "url": "assets/js/2.f73f0004.js",
    "revision": "cf19d18a834fcf2cc089247ebefeae55"
  },
  {
    "url": "assets/js/20.1d9edb13.js",
    "revision": "23b882a282ebbf40f5fd4b5c6cecdc73"
  },
  {
    "url": "assets/js/21.c88a9ae9.js",
    "revision": "4a55c78f428654422992b19cbfcb6c9e"
  },
  {
    "url": "assets/js/22.ad07a126.js",
    "revision": "2d2aefcd7cb000ccfc7354d5c4d7992b"
  },
  {
    "url": "assets/js/23.7279c42d.js",
    "revision": "05c3867aa6d44f09d35b28d89ffa8c7b"
  },
  {
    "url": "assets/js/24.63ac7122.js",
    "revision": "ad901a0fc4c42502b21b9ae437181434"
  },
  {
    "url": "assets/js/25.b48850fb.js",
    "revision": "b9f0f7fdbd160f6264d23c9893ce1523"
  },
  {
    "url": "assets/js/26.75d636b7.js",
    "revision": "25097d4b15d164877a074855c62d5254"
  },
  {
    "url": "assets/js/27.b358dde4.js",
    "revision": "ee41162037347f14957e9ace8e0a2224"
  },
  {
    "url": "assets/js/28.1ed81488.js",
    "revision": "33df1aa387a15c4636c147e0238a65ef"
  },
  {
    "url": "assets/js/29.333f03a6.js",
    "revision": "178976665ef9bfb9f143a398d231d8bc"
  },
  {
    "url": "assets/js/3.693a1b30.js",
    "revision": "ba785f5ef9f15b19603ffb18aee7c990"
  },
  {
    "url": "assets/js/30.273a9ae3.js",
    "revision": "7f312b8a5954fa8204b09e375ea5f827"
  },
  {
    "url": "assets/js/31.44ac589d.js",
    "revision": "e00aaeb779a99143b0b32bbb102fe97a"
  },
  {
    "url": "assets/js/32.62d13395.js",
    "revision": "c96e0071184aa6f5d762ed4fafd61291"
  },
  {
    "url": "assets/js/33.a0d37d83.js",
    "revision": "fe97181152c4fea9c9d54613ecff7fde"
  },
  {
    "url": "assets/js/34.38d97f9f.js",
    "revision": "5c6c93f1990e7b18b529ddf8b18aee2a"
  },
  {
    "url": "assets/js/35.213eb9da.js",
    "revision": "34e00d52eb48d76c37f78443c05f5e07"
  },
  {
    "url": "assets/js/36.3956d00a.js",
    "revision": "9446f0de357d6f65b034d039e54c4cc9"
  },
  {
    "url": "assets/js/37.2d2cda2b.js",
    "revision": "506730840d9747ac6878dd413638d3ae"
  },
  {
    "url": "assets/js/38.6640d8d3.js",
    "revision": "86e1d98daa0f21c93b0b02c4f309fdcf"
  },
  {
    "url": "assets/js/39.a35598ba.js",
    "revision": "c983ac3651b6757f9df7a51c7a330134"
  },
  {
    "url": "assets/js/4.dfe9e91b.js",
    "revision": "c51b135ca857a86c8176c5090eb7edf4"
  },
  {
    "url": "assets/js/41.b7ad4f39.js",
    "revision": "4a64eabbfdab15775cabe77202431645"
  },
  {
    "url": "assets/js/5.0ce4d9b8.js",
    "revision": "fc1c1de0ef901ad47e938f2936309ac1"
  },
  {
    "url": "assets/js/6.346be5de.js",
    "revision": "91a28d89fb888881c7f1003ead2bd8a7"
  },
  {
    "url": "assets/js/7.edb3c360.js",
    "revision": "16f5237900ada65db99d1c8670fac4a0"
  },
  {
    "url": "assets/js/8.284f823d.js",
    "revision": "69a6d1499586d7290b3301c901582bfd"
  },
  {
    "url": "assets/js/9.150e6a2b.js",
    "revision": "919b9f0643e716960e5f9ac6db6310d1"
  },
  {
    "url": "assets/js/app.c10b6003.js",
    "revision": "3198a3388b936f19dbaa782fea2015a1"
  },
  {
    "url": "assets/js/vendors~docsearch.3cefa927.js",
    "revision": "a771ffaa589785db57bba23b6f8f053b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "921f74ed99d84b3fe2271fbf901cb33d"
  },
  {
    "url": "design/index.html",
    "revision": "c3283fcb038e5ed4b869d0260c6d86fa"
  },
  {
    "url": "index.html",
    "revision": "41c38d8e7c89eccde8659e4e88807858"
  },
  {
    "url": "intro/index.html",
    "revision": "21a0b6f217b2fa8b72df5e1edc7e356a"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "dde31303db77079c705cc2143d054a23"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "dcee66897f0b9939a7d906d5fe938ea9"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1933b4dbc9ab058bcac9ece34336848f"
  },
  {
    "url": "software/index.html",
    "revision": "cee4c6114c3a4bf9fd19d72005f60c43"
  },
  {
    "url": "test/index.html",
    "revision": "953f259ff241f77ce4b88e44fe2232ac"
  },
  {
    "url": "use cases/index.html",
    "revision": "7af74021deae496451f4e699ca888336"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
