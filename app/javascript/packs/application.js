// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

require('packs/vendor/jquery-1.12.4.min')
require('packs/vendor/bootstrap.min')
require('packs/vendor/bootstrap-select.min')
require('packs/vendor/jquery.bootstrap-touchspin.min')
require('packs/vendor/magnific-popup.min')
require('packs/vendor/counterup.min')
require('packs/vendor/waypoints.min')
require('packs/vendor/waypoints-sticky.min')
require('packs/vendor/isotope.pkgd.min')
require('packs/vendor/owl.carousel.min')
require('packs/vendor/jquery.owl-filter')
require('packs/vendor/stellar.min')
require('packs/vendor/scrolla.min')
require('packs/custom')
require('packs/vendor/shortcode')
require('packs/vendor/switcher')
require('packs/vendor/jquery.bgscroll')


window.jQuery = jQuery
window.$ = $

Rails.start()
Turbolinks.start()
ActiveStorage.start()
