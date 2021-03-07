if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let a = Promise.resolve();
      return (
        c[e] ||
          (a = new Promise(async (a) => {
            if ('document' in self) {
              const c = document.createElement('script');
              (c.src = e),
                document.head.appendChild(c),
                (c.onload = a);
            } else importScripts(e), a();
          })),
        a.then(() => {
          if (!c[e])
            throw new Error(`Module ${e} didn’t register its module`);
          return c[e];
        })
      );
    },
    a = (a, c) => {
      Promise.all(a.map(e)).then((e) => c(1 === e.length ? e[0] : e));
    },
    c = { require: Promise.resolve(a) };
  self.define = (a, i, n) => {
    c[a] ||
      (c[a] = Promise.resolve().then(() => {
        let c = {};
        const s = { uri: location.origin + a.slice(1) };
        return Promise.all(
          i.map((a) => {
            switch (a) {
              case 'exports':
                return c;
              case 'module':
                return s;
              default:
                return e(a);
            }
          }),
        ).then((e) => {
          const a = n(...e);
          return c.default || (c.default = a), c;
        });
      }));
  };
}
define('./sw.js', ['./workbox-c2b5e142'], function (e) {
  'use strict';
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url:
            '/_next/static/1AxDOqif_ACsSSwck7-PH/_buildManifest.js',
          revision: '8fa8068f8fab76a7714f5898a79a42d0',
        },
        {
          url: '/_next/static/1AxDOqif_ACsSSwck7-PH/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff',
        },
        {
          url: '/_next/static/chunks/33.4952e9d9c51bcdd57703.js',
          revision: 'a6f360e306472097137786d3ae99a27f',
        },
        {
          url:
            '/_next/static/chunks/5ca5c56f799d13b4e8f9bf82275cbe0d6bf0524b.7124556efd97ae6e399a.js',
          revision: '12976d5f520d425fd3ea3a1598b7cab9',
        },
        {
          url:
            '/_next/static/chunks/641b24d28a4683a1a06449b26862f883fca9cf14.4ff82ebeef35c1f3fba9.js',
          revision: 'd9de5cf41ddbcf298670f51db838cefd',
        },
        {
          url:
            '/_next/static/chunks/a9a7754c.38e58b1eb1981260f1c6.js',
          revision: '1f233bce8433948b246443da0e4bc1f1',
        },
        {
          url:
            '/_next/static/chunks/cb1608f2.f647b6287f4880b306fb.js',
          revision: '6b36e7ade17da86ed569a83ff4643414',
        },
        {
          url: '/_next/static/chunks/commons.c8d1389054d40cb0213d.js',
          revision: '39a664b9b5d734fbff00a5179db48baf',
        },
        {
          url:
            '/_next/static/chunks/dc84b7dc.4d62413f4da81be1e932.js',
          revision: '99e6d6dc6704694222e663251c1f8deb',
        },
        {
          url:
            '/_next/static/chunks/framework.3e75d4130136e9c8f6f1.js',
          revision: 'e3f6316885b0193818e61e632ae01b10',
        },
        {
          url: '/_next/static/chunks/main-29351f31e129c3ee4de5.js',
          revision: '6cf1301df0bec90e670c59206f47faea',
        },
        {
          url:
            '/_next/static/chunks/pages/2019/album-4b8c74566c5cfc0848b6.js',
          revision: '16fbdd9f241594606dc42cc8e9e2b489',
        },
        {
          url:
            '/_next/static/chunks/pages/2019/speakers-26b348f74b90123e2e2c.js',
          revision: '9eb00f8eacb33541ed64bbe0dc9b52f6',
        },
        {
          url:
            '/_next/static/chunks/pages/2020/hacktober-812f6e8f98f6066062be.js',
          revision: '7ffc5fb51f450d53e2fd141daa19ca19',
        },
        {
          url:
            '/_next/static/chunks/pages/2020/notable-companies-7fec0a402f9dbd8fac2c.js',
          revision: '74c6aa6283db6c8ff971b90343bf6a87',
        },
        {
          url:
            '/_next/static/chunks/pages/2020/sponsor-a2f6291ef0c1b5290c0b.js',
          revision: 'd5e9c98bc7019e81654661c516b89435',
        },
        {
          url:
            '/_next/static/chunks/pages/_app-5c186207cacc4534772a.js',
          revision: 'c2662fbd31b09de214a5bf5aa9bc6798',
        },
        {
          url:
            '/_next/static/chunks/pages/_error-4c1aaf617c9ee361bffb.js',
          revision: '6ab2b4fc089b27901db6c0da75f3e756',
        },
        {
          url:
            '/_next/static/chunks/pages/agenda-629dc21c20cfa1d46a9c.js',
          revision: '5e122f4f921469fc280c5596057b3db8',
        },
        {
          url:
            '/_next/static/chunks/pages/code-of-conduct-56c84a2d9fbf04a280ed.js',
          revision: 'e988b40a9d26a0852dc6f121c060c49c',
        },
        {
          url:
            '/_next/static/chunks/pages/contact-9c63477e14589ba8b259.js',
          revision: 'e621628b5f94114babb8aa960dd0beb0',
        },
        {
          url:
            '/_next/static/chunks/pages/index-6b91219ae7a457635d13.js',
          revision: 'e9c45fc43468d496b184db42caf6c45c',
        },
        {
          url:
            '/_next/static/chunks/pages/information/accessibility-information-ef8033b6c1a84a9a6c7e.js',
          revision: '5be2d19f50cfaf0dbe68ed739b49ed4c',
        },
        {
          url:
            '/_next/static/chunks/pages/information/application-information-617bbe0149a82571ac60.js',
          revision: '1cb63ea4c5f8f3f868cb9eb8acd0fbc7',
        },
        {
          url:
            '/_next/static/chunks/pages/information/attendee-information-f4633241de1be9c25231.js',
          revision: 'bbc466d00aff5e6c2257ec7ea299ac97',
        },
        {
          url:
            '/_next/static/chunks/pages/information/conference-information-278d7fb4471d85d99ac1.js',
          revision: 'a8607233822a263f9807ec8ed3e2266b',
        },
        {
          url:
            '/_next/static/chunks/pages/information/crew-information-b9a40ad4de9b4af91315.js',
          revision: '75cc95c0fdb79d804cecca3556a81b31',
        },
        {
          url:
            '/_next/static/chunks/pages/information/hacktoberfest-information-db2b21e772779096aa29.js',
          revision: 'f89f745681d9eb629584d43adedb803d',
        },
        {
          url:
            '/_next/static/chunks/pages/information/main-page-69d86c4077e854f9e3c6.js',
          revision: 'd09cc3deb0f0af22b9f42160a12414bb',
        },
        {
          url:
            '/_next/static/chunks/pages/information/speaker-information-fe9fe1cd0bb4b60c748b.js',
          revision: 'c2328e8961777337c83d71610d77fcba',
        },
        {
          url:
            '/_next/static/chunks/pages/information/sponsor-information-583dc6ab6820945b99a1.js',
          revision: '6f635ee68ce7b568d5ca187eb4e3886e',
        },
        {
          url:
            '/_next/static/chunks/pages/information/ticket-information-46c5da0df06ceb630256.js',
          revision: '3e5a4c0583668c9ad2f498bc8669445c',
        },
        {
          url:
            '/_next/static/chunks/pages/information/venue-information-dfd3298871d4422f4919.js',
          revision: '0d0bf4086869b2920790d0963297559d',
        },
        {
          url:
            '/_next/static/chunks/pages/talks-de19650dc9e3bceffc5e.js',
          revision: '5c80e22943758edd0f7e9c4854612813',
        },
        {
          url:
            '/_next/static/chunks/polyfills-16a647303b65c72e1931.js',
          revision: '5605f30be9368237f961753a11cb3e0e',
        },
        {
          url: '/_next/static/chunks/webpack-9fbdbae62a0a63c14841.js',
          revision: 'bae5d55bc1f3e8faac58714544805c61',
        },
        {
          url: '/_next/static/css/dc84b7dc.3af9dcad.chunk.css',
          revision: 'f5e056a337f3e5d446b6560ec8713acf',
        },
        {
          url:
            '/icons/android-icon-192x192-dunplab-manifest-20421.jpg',
          revision: 'eb164e10f2869767e94f1425d2c7e919',
        },
        {
          url: '/icons/apple-icon-114x114-dunplab-manifest-20421.jpg',
          revision: '925c7fd02f1d1234ed8c07931bb8ac98',
        },
        {
          url: '/icons/apple-icon-120x120-dunplab-manifest-20421.jpg',
          revision: '9a33be577a8ee1326eb4ad25c457f05d',
        },
        {
          url: '/icons/apple-icon-144x144-dunplab-manifest-20421.jpg',
          revision: 'e45c0f0cc7a75845c8980033ac7d8dc9',
        },
        {
          url: '/icons/apple-icon-152x152-dunplab-manifest-20421.jpg',
          revision: 'f46dcaa7423efdbb36d2c1f8da5d81e9',
        },
        {
          url: '/icons/apple-icon-180x180-dunplab-manifest-20421.jpg',
          revision: '7a90a997edc3a049fafaab391554cd22',
        },
        {
          url: '/icons/apple-icon-57x57-dunplab-manifest-20421.jpg',
          revision: '04275ecd370621240d92aa22808f1123',
        },
        {
          url: '/icons/apple-icon-60x60-dunplab-manifest-20421.jpg',
          revision: '5fad6f002e0a6f43a979eafa1aa8238c',
        },
        {
          url: '/icons/apple-icon-72x72-dunplab-manifest-20421.jpg',
          revision: '0d9a8e92963f5e7764201e7832c76e64',
        },
        {
          url: '/icons/apple-icon-76x76-dunplab-manifest-20421.jpg',
          revision: 'ca0b323da808cff29e1ecb2c0c102706',
        },
        {
          url: '/icons/favicon-16x16-dunplab-manifest-20421.jpg',
          revision: '1f2f57b64eb5afad75e3fb4924aeb99f',
        },
        {
          url: '/icons/favicon-32x32-dunplab-manifest-20421.jpg',
          revision: '3d4938b52b1f3587f4ef2a165fc98bfb',
        },
        {
          url: '/icons/favicon-96x96-dunplab-manifest-20421.jpg',
          revision: '2b35afc5edb6a7c156222584a8dd9001',
        },
        {
          url: '/manifest.json',
          revision: '6f7a87c0996ba0750b3268156ffdf897',
        },
        {
          url: '/static/banners/album.jpg',
          revision: '0fa0546804846429c4784ece97fbf444',
        },
        {
          url: '/static/banners/autumn-header.jpg',
          revision: 'b2cdda3e0e830a4b82b9a869c455c34e',
        },
        {
          url: '/static/banners/christmas-header.jpg',
          revision: 'aefe32e5b8cc4ebd2ed941338bd4b23c',
        },
        {
          url: '/static/banners/christmas-header.png',
          revision: '3e6ce748e0a60b7600e5e1b25eecbacf',
        },
        {
          url: '/static/banners/coc.jpg',
          revision: '06d70df1d227f04eb130e3cb1013d921',
        },
        {
          url: '/static/banners/contact.jpg',
          revision: '2005311ca148d0dab06b0528366c8aa3',
        },
        {
          url: '/static/banners/home.jpg',
          revision: '4e12cff4b48c50eebee4cdf43f05d4e1',
        },
        {
          url: '/static/banners/information/accessibility.jpg',
          revision: '964cfa726ecea3fbc05a249e68ca50f6',
        },
        {
          url: '/static/banners/information/apply.jpg',
          revision: '1d94a35add27b8918aa5a730a663afbf',
        },
        {
          url: '/static/banners/information/attendee.jpg',
          revision: 'a3f596387ddd8a0f7c5c1f1b8a968406',
        },
        {
          url: '/static/banners/information/crew.jpg',
          revision: '255ddcaceb0bb5a1c2049c384a7bd326',
        },
        {
          url: '/static/banners/information/hacktober.jpg',
          revision: '473ed91210a1a14cf2d939f287dfb293',
        },
        {
          url: '/static/banners/information/header.jpg',
          revision: '60471d0076cd1a847705f3c0aec16e66',
        },
        {
          url: '/static/banners/information/organisers.jpg',
          revision: 'bc2d5326c33462af29a92296243d1224',
        },
        {
          url: '/static/banners/information/speakers.jpg',
          revision: 'bcca87831ed5b041a24719f6f1506ff1',
        },
        {
          url: '/static/banners/information/sponsor.jpg',
          revision: '49789b6802474c0c009a24d7acff5ca3',
        },
        {
          url: '/static/banners/information/swagbag.jpg',
          revision: '59072f490336584982a3d698fffc2cdf',
        },
        {
          url: '/static/banners/information/thencc.jpg',
          revision: 'c92f03efab4dab403dbc1d897f1c1982',
        },
        {
          url: '/static/banners/notable.jpg',
          revision: '8f0cd2d315c86617b0977653c2f11293',
        },
        {
          url: '/static/banners/pride-header.jpg',
          revision: '951bcfa52658e5cfecb3e8fc081d800a',
        },
        {
          url: '/static/banners/pride-header.png',
          revision: '58e403d3278ccfc8778ba72c0946399b',
        },
        {
          url: '/static/banners/pubconf.jpg',
          revision: '81f9e1b72be662358071b4ab962a22c3',
        },
        {
          url: '/static/banners/pubconf.png',
          revision: '739209dc5e592ba7f0375416c8be174a',
        },
        {
          url: '/static/banners/sponsor.jpg',
          revision: 'fd7eedbbf937675ff81b83ab2b33b57b',
        },
        {
          url: '/static/banners/talks.jpg',
          revision: '99a731bf536e501912266215342d4a9f',
        },
        {
          url: '/static/client/object-assign-auto.min.js',
          revision: '3bddb8b52a177c246d12eadec8728688',
        },
        {
          url: '/static/client/sessionize.css',
          revision: '8fcd72ec7b91a0e1f444fa4b61fd3cc1',
        },
        {
          url: '/static/client/sessionize.js',
          revision: '3270900301c2f7ed1d04fe5de60357ef',
        },
        {
          url: '/static/ddd_avatar_300.jpg',
          revision: '7fd3ee7ef153f4de6c1ab0c08816a9e5',
        },
        {
          url: '/static/ddd_avatar_400x400.jpg',
          revision: '3870bc09feb731805cd3fa700ad1ff3e',
        },
        {
          url: '/static/favicon/android-icon-144x144.png',
          revision: '977c3fc692f196f11cb817a8716a6c8a',
        },
        {
          url: '/static/favicon/android-icon-192x192.png',
          revision: 'e8de5dd1ee9443fb0c1cf156c22e9bca',
        },
        {
          url: '/static/favicon/android-icon-36x36.png',
          revision: '4e2b8f703e1816cd34026fbf98eeed66',
        },
        {
          url: '/static/favicon/android-icon-48x48.png',
          revision: '18d7e980ed26ab9ca92868392814fe04',
        },
        {
          url: '/static/favicon/android-icon-72x72.png',
          revision: '6d903f6a9881a66419855a453bcbcc3e',
        },
        {
          url: '/static/favicon/android-icon-96x96.png',
          revision: 'df7df7836ef02bcda240cc8479bff849',
        },
        {
          url: '/static/favicon/apple-icon-114x114.png',
          revision: '34a5c2cfffe9260c65faaa70017afd5e',
        },
        {
          url: '/static/favicon/apple-icon-120x120.png',
          revision: 'e72c068fe41a6be9c6617534a86d075d',
        },
        {
          url: '/static/favicon/apple-icon-144x144.png',
          revision: '977c3fc692f196f11cb817a8716a6c8a',
        },
        {
          url: '/static/favicon/apple-icon-152x152.png',
          revision: 'd37ae8818ffad2fa798c1ce7ae3cbb08',
        },
        {
          url: '/static/favicon/apple-icon-180x180.png',
          revision: '010c25ed2003c0741a1509bc4bad8327',
        },
        {
          url: '/static/favicon/apple-icon-57x57.png',
          revision: 'a554531bf21758e4b9551443f23d4651',
        },
        {
          url: '/static/favicon/apple-icon-60x60.png',
          revision: 'c9a31345a96bf99db75c7ee65173f45d',
        },
        {
          url: '/static/favicon/apple-icon-72x72.png',
          revision: '6d903f6a9881a66419855a453bcbcc3e',
        },
        {
          url: '/static/favicon/apple-icon-76x76.png',
          revision: '90196e6c0b67e4dfc3faad47143bca2e',
        },
        {
          url: '/static/favicon/apple-icon-precomposed.png',
          revision: 'a98cdcfb2caaeaa8fc972bfe40f4a97f',
        },
        {
          url: '/static/favicon/apple-icon.png',
          revision: 'a98cdcfb2caaeaa8fc972bfe40f4a97f',
        },
        {
          url: '/static/favicon/browserconfig.xml',
          revision: '653d077300a12f09a69caeea7a8947f8',
        },
        {
          url: '/static/favicon/favicon-16x16.png',
          revision: 'dc07f821fc9c0596d98ac8ae2d998fa8',
        },
        {
          url: '/static/favicon/favicon-32x32.png',
          revision: 'eec482697f77dc4e9b942f96d587e771',
        },
        {
          url: '/static/favicon/favicon-96x96.png',
          revision: 'df7df7836ef02bcda240cc8479bff849',
        },
        {
          url: '/static/favicon/favicon.ico',
          revision: '7279ed3ca87d28e3a53f5e07b4ead74f',
        },
        {
          url: '/static/favicon/manifest.json',
          revision: 'f92495f5c65456e414d93695b52ed231',
        },
        {
          url: '/static/favicon/ms-icon-144x144.png',
          revision: '977c3fc692f196f11cb817a8716a6c8a',
        },
        {
          url: '/static/favicon/ms-icon-150x150.png',
          revision: '675e9eeb4a9164e983ea7d928b5ad2ec',
        },
        {
          url: '/static/favicon/ms-icon-310x310.png',
          revision: '33083e2f487e529e2e99ac8dc65ecb8d',
        },
        {
          url: '/static/favicon/ms-icon-70x70.png',
          revision: 'fedfdf5460d6f26ad592b9c9f8b68522',
        },
        {
          url: '/static/hacktoberfest.svg',
          revision: '00a9aabe6a0e7b20783f41819ee131d3',
        },
        {
          url: '/static/hacktoberfest/hacktoberfest.png',
          revision: 'f43a931c14a6c7de1993f535f5e83f46',
        },
        {
          url: '/static/hacktoberfest/screenshot.png',
          revision: '7c2cf79fc44edc264207bffd3b0d2212',
        },
        {
          url: '/static/info/sponsors/promo.png',
          revision: '5b154d1fdc101670388c527c0c4ec552',
        },
        {
          url: '/static/organisers/jess.jpg',
          revision: 'd32899f87de9713971f4226590bb0e8a',
        },
        {
          url: '/static/organisers/mort.jpg',
          revision: '3cdf9199bbcfb5e7b46d3c5b76ea06a5',
        },
        {
          url: '/static/organisers/rachel.jpg',
          revision: '0dcc860cd4540329ff7e6b4377768268',
        },
        {
          url: '/static/rooms/LT2.jpg',
          revision: '700e611df21f01c719b202d4e2bd7ce3',
        },
        {
          url: '/static/rooms/LT2.png',
          revision: '68231b81e8e60475ac7a5da2b6a94352',
        },
        {
          url: '/static/rooms/LT4.jpg',
          revision: '71de93fa61af7f2265cbd74d0d5b464c',
        },
        {
          url: '/static/rooms/LT4.png',
          revision: '07bf80cb74474f45e5f9ca135bc75af3',
        },
        {
          url: '/static/rooms/LT4_Back.jpg',
          revision: '8d563e3054f5c34e433efe340c6c49d2',
        },
        {
          url: '/static/rooms/LT5.jpg',
          revision: '27934ce26dd805e8b276eedd96984ce4',
        },
        {
          url: '/static/rooms/LT5.png',
          revision: '5de6a1d524ef1255963f3f3c67e76610',
        },
        {
          url: '/static/rooms/LT5_Back.jpg',
          revision: '78c437336caf647b0775416bc3949447',
        },
        {
          url: '/static/sponsors/20i.png',
          revision: 'd4a0f1709979cdb8e83de3bcf218963e',
        },
        {
          url: '/static/sponsors/DistinctRec.png',
          revision: '1acdc5553f757e587f380b22dad2f1fd',
        },
        {
          url: '/static/sponsors/ERT.png',
          revision: 'df6ff7c5e9838f1ea3063c85a92162bd',
        },
        {
          url: '/static/sponsors/Experian.png',
          revision: '86ad081752f750f62471e6a4167118df',
        },
        {
          url: '/static/sponsors/Mindera.png',
          revision: '8547be6d62dfc0ab865fe8a73d9f2eeb',
        },
        {
          url: '/static/sponsors/NDC_Conferences.png',
          revision: '848e275a79b51443f881e9399a52fa4b',
        },
        {
          url: '/static/sponsors/Razor.png',
          revision: 'ab52396695e430a173516dfe71414799',
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    );
});
