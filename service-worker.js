/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/app-layout/app-drawer/app-drawer.html","ce6cab984504a604f64fb92f43e26086"],["bower_components/app-layout/app-header/app-header.html","0f23a6b89e8a46bb868388f2cbf9a492"],["bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","6a2deaf272c848ee6d021d629809aecc"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","e99ddafa0f5f96176a423603814c4c3e"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","aa9d5034b83205bc978b79c0b2ba91ee"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","95223fc62f691718c3ac8be9fc573def"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","b6bd6d98c07721b9264002bc63d68bd8"],["bower_components/app-layout/app-toolbar/app-toolbar.html","60a7731775c84a7452c91411adc28870"],["bower_components/app-layout/helpers/helpers.html","e2991a53692b1b32c6919f99a6cdb13f"],["bower_components/app-route/app-location.html","0b9bf992c84f9e6b593e53e2fb90ce94"],["bower_components/app-route/app-route-converter-behavior.html","81ef142e077589a025b974df1ed5294f"],["bower_components/app-route/app-route.html","b3dfb53ca3d6ff163afd7fd194e33417"],["bower_components/google-apis/google-maps-api.html","6249af7af609a6efde092ab38e6808f1"],["bower_components/google-map/google-map-marker.html","bce42f25339a2d6c69e10f8c288504a8"],["bower_components/google-map/google-map.html","f035771c17739b13f01e12c58a0e5d3e"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","42396138cc38fbd2636f2a6fb8942b6b"],["bower_components/iron-behaviors/iron-button-state.html","831d9a328563834852895ce01ca5a408"],["bower_components/iron-behaviors/iron-control-state.html","6eb4361fe3b449ddb4f45de16217296d"],["bower_components/iron-flex-layout/iron-flex-layout.html","1c82b019ba37ff7b3fd9a40fc8b81401"],["bower_components/iron-icon/iron-icon.html","d4b7a82c9ccbbeca2b0c89f4e53ffb05"],["bower_components/iron-icons/communication-icons.html","c925584546136159469d54a186a4f31c"],["bower_components/iron-icons/image-icons.html","56aeefb5517b2cf02ae016cb53c9358f"],["bower_components/iron-icons/iron-icons.html","b06b48bbd24e44ce5f592c008e254376"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","733bb402db804182cf5c98419d9dec8e"],["bower_components/iron-image/iron-image.html","6e108702e4ccad0176f12785266280c9"],["bower_components/iron-jsonp-library/iron-jsonp-library.html","166554153f8620e2b25b884d5e484677"],["bower_components/iron-location/iron-location.html","8f8d12a683937bb2e58d21413524c8b6"],["bower_components/iron-location/iron-query-params.html","202ab9d2102acc73b019107ceb09d6c3"],["bower_components/iron-media-query/iron-media-query.html","5fb17283155ca3ad912dafebc9f06a74"],["bower_components/iron-meta/iron-meta.html","d9d0c288be4ccfc5bb61e5d86cb735e5"],["bower_components/iron-pages/iron-pages.html","d7893c5f677936005928834a5f1f9a5e"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","26731b518fc39146a6ef617bf2446cab"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","91b9ca67d7d4ec2d314a3bcecefa4c26"],["bower_components/iron-selector/iron-multi-selectable.html","d4765be6d51eb9e5e170b7191b222aec"],["bower_components/iron-selector/iron-selectable.html","872a606cfac214c20a25f79edbd467f4"],["bower_components/iron-selector/iron-selection.html","26f52458e73121973cb392990b3b5820"],["bower_components/iron-selector/iron-selector.html","fd5fa9e6f3bf894b065f43d2711bba45"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","076ea49b740c67294508a82783e9f002"],["bower_components/paper-behaviors/paper-ripple-behavior.html","7f9ed2c18f5ec26ead9bbd1a0a3d6595"],["bower_components/paper-card/paper-card.html","48274a55841d4f658ceeb445b0ca719e"],["bower_components/paper-icon-button/paper-icon-button.html","d4deec8dbd0995906bff155f2f1be093"],["bower_components/paper-ripple/paper-ripple.html","6c3b599529cc92477489feafe0951810"],["bower_components/paper-styles/color.html","2b6b926e5bd4005bdbdcd15a34a50b95"],["bower_components/paper-styles/default-theme.html","9480969fcd665e90201b506a4737fa1a"],["bower_components/paper-styles/element-styles/paper-material-styles.html","b0a38bd2eb6f4c4844d4903a46268c92"],["bower_components/paper-styles/shadow.html","2fbe595f966eebe419b9b91611d6392a"],["bower_components/polymer/lib/elements/array-selector.html","fc98a800e76e329192a91bbfa74bd3a0"],["bower_components/polymer/lib/elements/custom-style.html","acc139917be0db12b64330d5479e4341"],["bower_components/polymer/lib/elements/dom-bind.html","fed8cc0191aa5b42e200c4f507442dca"],["bower_components/polymer/lib/elements/dom-if.html","709a1d239f847f88f01af471d5fc9842"],["bower_components/polymer/lib/elements/dom-module.html","7e1806a0ae7f9dd0e86d1f58c8e4de94"],["bower_components/polymer/lib/elements/dom-repeat.html","810367c934f47bd7de49659fe08c9dd2"],["bower_components/polymer/lib/legacy/class.html","e2547e46ac48bd81302731f9d27d496d"],["bower_components/polymer/lib/legacy/legacy-element-mixin.html","ffab575da5c8a825eec4bf373180b02a"],["bower_components/polymer/lib/legacy/mutable-data-behavior.html","60d6f00d3bcdba91caa980d0f95bbd1f"],["bower_components/polymer/lib/legacy/polymer-fn.html","87dfc8ba0cfaa818de2104555796acb1"],["bower_components/polymer/lib/legacy/polymer.dom.html","d21ba9e3a12efe3327fec6e84a1cb064"],["bower_components/polymer/lib/legacy/templatizer-behavior.html","a03a77ac3d550617f7d98bd44fa3f8e5"],["bower_components/polymer/lib/mixins/dir-mixin.html","2dcb1a5cb1e8f5fe8e69968e904b80f8"],["bower_components/polymer/lib/mixins/element-mixin.html","3bebbf669f649adfb65e523153cbdb1d"],["bower_components/polymer/lib/mixins/gesture-event-listeners.html","9abdf4fe75e1edde220afaed877bd197"],["bower_components/polymer/lib/mixins/mutable-data.html","7d6306b27c2a552ee86bdc124c16f8f9"],["bower_components/polymer/lib/mixins/properties-changed.html","fa5ba8ca4c9d1354936546cdb6e20511"],["bower_components/polymer/lib/mixins/properties-mixin.html","3773c992a29d22d7e3d3920ece53ec5d"],["bower_components/polymer/lib/mixins/property-accessors.html","aef83992fe771d255c8669ff6876a8e3"],["bower_components/polymer/lib/mixins/property-effects.html","b80da5c982fd0a4ff06c333a868152b4"],["bower_components/polymer/lib/mixins/template-stamp.html","ee6624f654509b35da5ed7fa232e4f96"],["bower_components/polymer/lib/utils/array-splice.html","91c51eb22fa823770e193e81ac058cf5"],["bower_components/polymer/lib/utils/async.html","2811675798618031f52cf2e3daa81a70"],["bower_components/polymer/lib/utils/boot.html","c821993216f3ab156d818f84d885f6c6"],["bower_components/polymer/lib/utils/case-map.html","61c3f85b8314adf2d309fdf3e97fddba"],["bower_components/polymer/lib/utils/debounce.html","2d22467c796a67e369340c3dec794436"],["bower_components/polymer/lib/utils/flattened-nodes-observer.html","de508c97a9975ebefb1fe2d2dcfc20cf"],["bower_components/polymer/lib/utils/flush.html","115a54a7039ff525913c6a5d5989c33a"],["bower_components/polymer/lib/utils/gestures.html","9d742bf6ed76a8ee62f35320a4eb2070"],["bower_components/polymer/lib/utils/html-tag.html","218076b340b4ed426cd4ab5b00b47bde"],["bower_components/polymer/lib/utils/import-href.html","5165e33a33ed338b6878086ea014f372"],["bower_components/polymer/lib/utils/mixin.html","dec0a5d64903fbb41d4599ea30e74936"],["bower_components/polymer/lib/utils/path.html","1f0eba2e68c6ee5a823107fa2cfd9814"],["bower_components/polymer/lib/utils/render-status.html","7dc9a501d01a61bf4e157775217a61ea"],["bower_components/polymer/lib/utils/resolve-url.html","d96a0e47616a36cfae5a217525828b21"],["bower_components/polymer/lib/utils/settings.html","433ac461291a73440fca2ddfe9a708b9"],["bower_components/polymer/lib/utils/style-gather.html","07a03f0d93efb651792ac04f5b8e44a4"],["bower_components/polymer/lib/utils/templatize.html","d6128cb4f64f7e46f7278195b44f95e4"],["bower_components/polymer/lib/utils/unresolved.html","a1ede4a050418cf897d096dcc8b3bc01"],["bower_components/polymer/polymer-element.html","cdc9a39660a154ec8886fc7aa6e1d6c3"],["bower_components/polymer/polymer.html","d948dd7a52e887b0779748f9ad3545d4"],["bower_components/shadycss/apply-shim.html","f220299c2be1b5040111843d640b70a5"],["bower_components/shadycss/apply-shim.min.js","eabbd9af22a6d2c0fd46e56f50eefff8"],["bower_components/shadycss/custom-style-interface.html","0a68ea0f3af7bcb1ca6617e512f720cb"],["bower_components/shadycss/custom-style-interface.min.js","9d7ccbd58300a6ef52a9108de2b6cb7f"],["index.html","00363b0782cd685c6dbcc23c01b21bd4"],["src/portfolio-about.html","7b2ee649c2860441ac556936875ab175"],["src/portfolio-app.html","851e2c64c967df58f1806c3f62597491"],["src/portfolio-contact.html","6d96054dcd7ea27c11dce13d0208b79a"],["src/portfolio-experience.html","1136cda5889c8e9067560085e29d8fd2"],["src/portfolio-portfolio.html","bc03543534e7e003a1df91ee642c6e17"],["src/portfolio-project-card.html","41d24ab13165eaa537694a534d1e840f"],["src/portfolio-section-title.html","ba9cec5c06f6128e40a409584ec6f822"],["src/portfolio-sidebar.html","97eae46cf1ab3e9f4444b1ca5f9731ef"],["src/portfolio-skill-bar.html","d84cb2ca8d25cc1617559272db549a8b"],["src/portfolio-skill-section.html","58d2de049aa4097ff11a3029f3cb2c6d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







