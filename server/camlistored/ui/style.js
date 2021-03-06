/*
Copyright 2013 The Camlistore Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * @fileoverview Some extra style utilties above what's included in goog.style.
 */
goog.provide('camlistore.style');

goog.require('goog.math.Coordinate');
goog.require('goog.string');
goog.require('goog.style');

/**
 * Returns |url| wrapped in url() so that it can be used as a CSS property
 * value.
 * @param {string} url
 * @returns {string}
 */
camlistore.style.getURLValue = function(url) {
  return goog.string.subs('url(%s)', url);
};

/**
 * Sets a style property to a URL value.
 * @param {Element} elm
 * @param {string} dashedCSSProperty The CSS property to set, formatted with
 * dashes, in the CSS style, not camelCase.
 * @param {string} url
 */
camlistore.style.setURLStyle = function(elm, dashedCSSProperty, url) {
  goog.style.setStyle(elm, dashedCSSProperty,
                      camlistore.style.getURLValue(url));
};

/**
 * @param {Element} elm
 * @param {goog.math.Coordinate} origin
 * @param {string=} opt_unit The CSS units the origin is in. If unspecified,
 * defaults to pixels.
 */
camlistore.style.setTransformOrigin = function(elm, origin, opt_unit) {
  var unit = opt_unit || 'px';
  goog.style.setStyle(elm, 'transform-origin',
                      goog.string.subs('%s%s %s%s', origin.x, unit, origin.y,
                                       unit));
};

/**
 * Note that this currently clears any previous CSS transform. Currently we only
 * needs to support rotate().
 * @param {Element} elm
 * @param {number} degrees
 */
camlistore.style.setRotation = function(elm, degrees) {
  goog.style.setStyle(elm, 'transform',
                      goog.string.subs('rotate(%sdeg)', degrees));
};
