/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
(function (root, factory) {
	if (typeof exports === "object" && typeof module === "object") 
	  module.exports = factory();
	else if (typeof define === "function" && define.amd) 
	  define([], factory);
	else if (typeof exports === "object") 
	  exports["Typed"] = factory();
	else 
	  root["Typed"] = factory();
  })(this, function () {
	return (function (modules) {
	  var installedModules = {};
	  
	  // The require function
	  function __webpack_require__(moduleId) {
		if (installedModules[moduleId]) 
		  return installedModules[moduleId].exports;
		
		var module = (installedModules[moduleId] = { exports: {}, id: moduleId, loaded: false });
		
		// Execute the module function
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		
		// Mark the module as loaded
		module.loaded = true;
		return module.exports;
	  }
	  
	  __webpack_require__.m = modules;
	  __webpack_require__.c = installedModules;
	  __webpack_require__.p = "";
	  
	  // Load entry module and return exports
	  return __webpack_require__(0);
	})([
	  function (module, exports, __webpack_require__) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		
		var _initializerJs = __webpack_require__(1);
		var _htmlParserJs = __webpack_require__(3);
		
		// Ensure proper class instantiation
		function _classCallCheck(instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		  }
		}
		
		/**
		 * Typed.js - Handles typing animations
		 */
		var Typed = (function () {
		  function Typed(elementId, options) {
			_classCallCheck(this, Typed);
			
			// Initialize typed animation
			_initializerJs.initializer.load(this, options, elementId);
			this.begin();
		  }
		  
		  /**
		   * Toggle start/stop typing
		   */
		  Typed.prototype.toggle = function () {
			this.pause.status ? this.start() : this.stop();
		  };
		  
		  /**
		   * Stop typing animation
		   */
		  Typed.prototype.stop = function () {
			if (this.typingComplete || this.pause.status) return;
			this.toggleBlinking(true);
			this.pause.status = true;
			this.options.onStop(this.arrayPos, this);
		  };
		  
		  /**
		   * Resume typing animation
		   */
		  Typed.prototype.start = function () {
			if (this.typingComplete || !this.pause.status) return;
			this.pause.status = false;
			if (this.pause.typewrite) {
			  this.typewrite(this.pause.curString, this.pause.curStrPos);
			} else {
			  this.backspace(this.pause.curString, this.pause.curStrPos);
			}
			this.options.onStart(this.arrayPos, this);
		  };
		  
		  return Typed;
		})();
		
		exports["default"] = Typed;
		module.exports = exports["default"];
	  },
	]);
  });