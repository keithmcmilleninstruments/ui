(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Nexus"] = factory();
	else
		root["Nexus"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var NexusUI = _interopRequire(__webpack_require__(1));
	
	module.exports = NexusUI;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.colors = colors;
	exports.context = context;
	exports.clock = clock;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	"use strict";
	
	var Interfaces = _interopRequire(__webpack_require__(2));
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Rack = _interopRequire(__webpack_require__(38));
	
	var Tune = _interopRequire(__webpack_require__(40));
	
	var Transform = _interopRequireWildcard(__webpack_require__(39));
	
	var Counter = __webpack_require__(28);
	var Radio = __webpack_require__(41);
	var Drunk = __webpack_require__(27);
	var Sequence = __webpack_require__(26);
	var Matrix = __webpack_require__(25);
	
	// import WAAClock from 'waaclock';
	
	var Interval = _interopRequire(__webpack_require__(29));
	
	/**
	NexusUI => created as Nexus
	*/
	
	var NexusUI = (function () {
	  function NexusUI(context) {
	    _classCallCheck(this, NexusUI);
	
	    for (var key in Interfaces) {
	      this[key] = Interfaces[key];
	    }
	
	    for (var key in math) {
	      this[key] = math[key];
	    }
	
	    var Core = {
	      Rack: Rack
	    };
	
	    var Models = {
	      Counter: Counter,
	      Radio: Radio,
	      Drunk: Drunk,
	      Sequence: Sequence,
	      Matrix: Matrix
	    };
	
	    for (var key in Models) {
	      this[key] = Models[key];
	    }
	
	    for (var key in Core) {
	      this[key] = Core[key];
	    }
	
	    // let DefaultContext = window.AudioContext || window.webkitAudioContext;
	    // this._context = context || new DefaultContext();
	
	    this.tune = new Tune();
	    this.note = this.tune.note.bind(this.tune);
	
	    // this.clock = new WAAClock(this._context);
	    // this.clock.start();
	    this.Interval = Interval;
	
	    this.colors = {
	      accent: "#2bb",
	      fill: "#eee",
	      light: "#fff",
	      dark: "#333",
	      mediumLight: "#ccc",
	      mediumDark: "#666"
	    };
	
	    this.transform = Transform;
	    this.add = Transform.add;
	
	    this.Add = {};
	    for (var key in Interfaces) {
	      this.Add[key] = Transform.add.bind(this, key);
	    }
	
	    /* create default component size as 1st style element in document */
	    var defaultStyleNode = document.createElement("style");
	    defaultStyleNode.type = "text/css";
	    defaultStyleNode.innerHTML = "[nexus-ui]{height:5000px;width:5000px}";
	    var h = document.head;
	    h.insertBefore(defaultStyleNode, h.firstElementChild);
	  }
	
	  _createClass(NexusUI, {
	    context: {
	      get: function () {
	        // return this._context;
	        return null;
	      }
	
	      // set context(ctx) {
	      // this.clock.stop();
	      // this._context = ctx;
	      // this.clock = new WAAClock(this.context);
	      // this.clock.start();
	      //   return null;
	      // }
	
	    }
	  });
	
	  return NexusUI;
	})();
	
	var Nexus = new NexusUI();
	
	function colors() {
	  return Nexus.colors;
	}
	
	function context() {}
	
	function clock() {}
	
	exports["default"] = Nexus;
	
	// return Nexus.context;

	// return Nexus.clock;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	  Position: __webpack_require__(3),
	  Slider: __webpack_require__(14),
	  Toggle: __webpack_require__(15),
	  /*  Range: require('./rangeslider'),
	    Waveform: require('./waveform'), */
	  Button: __webpack_require__(16),
	  TextButton: __webpack_require__(18),
	  RadioButton: __webpack_require__(19),
	  Number: __webpack_require__(20),
	  Select: __webpack_require__(21),
	  Dial: __webpack_require__(22),
	  Piano: __webpack_require__(23),
	  Sequencer: __webpack_require__(24),
	  Pan2D: __webpack_require__(30),
	  Tilt: __webpack_require__(31),
	  Multislider: __webpack_require__(32),
	  Pan: __webpack_require__(33),
	  Envelope: __webpack_require__(34),
	  Spectrogram: __webpack_require__(35),
	  Meter: __webpack_require__(36),
	  Oscilloscope: __webpack_require__(37)
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	
	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	* Position
	*
	* @description Two-dimensional touch slider.
	*
	* @demo <span nexus-ui="position"></span>
	*
	* @example
	* var position = new Nexus.Position('#target')
	*
	* @example
	* var position = new Nexus.Position('#target',{
	*   'size': [200,200],
	*   'mode': 'absolute',  // "absolute" or "relative"
	*   'x': 0.5,  // initial x value
	*   'minX': 0,
	*   'maxX': 1,
	*   'stepX': 0,
	*   'y': 0.5,  // initial y value
	*   'minY': 0,
	*   'maxY': 1,
	*   'stepY': 0
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is an object with x and y properties containing the x and y values of the interface.
	*
	* @outputexample
	* position.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Position = (function (_Interface) {
	  function Position() {
	    _classCallCheck(this, Position);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [200, 200],
	      mode: "absolute",
	      minX: 0,
	      maxX: 1,
	      stepX: 0,
	      x: 0.5,
	      minY: 0,
	      maxY: 1,
	      stepY: 0,
	      y: 0.5
	    };
	
	    _get(Object.getPrototypeOf(Position.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._x = new Step(this.settings.minX, this.settings.maxX, this.settings.stepX, this.settings.x);
	    this._y = new Step(this.settings.minY, this.settings.maxY, this.settings.stepY, this.settings.y);
	
	    this.position = {
	      x: new Interaction.Handle(this.settings.mode, "horizontal", [0, this.width], [this.height, 0]),
	      y: new Interaction.Handle(this.settings.mode, "vertical", [0, this.width], [this.height, 0])
	    };
	    this.position.x.value = this._x.normalized;
	    this.position.y.value = this._y.normalized;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Position, _Interface);
	
	  _createClass(Position, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.knob = svg.create("circle");
	        this.element.appendChild(this.knob);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.position.x.resize([0, this.width], [this.height, 0]);
	        this.position.y.resize([0, this.width], [this.height, 0]);
	
	        this._minDimension = Math.min(this.width, this.height);
	
	        this.knobRadius = {
	          off: ~ ~(this._minDimension / 100) * 5 + 5 };
	        this.knobRadius.on = this.knobRadius.off * 2;
	
	        this.knob.setAttribute("cx", this.width / 2);
	        this.knob.setAttribute("cy", this.height / 2);
	        this.knob.setAttribute("r", this.knobRadius.off);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.backgroundColor = this.colors.fill;
	        this.knob.setAttribute("fill", this.colors.accent);
	      }
	    },
	    render: {
	      value: function render() {
	        if (this.clicked) {
	          //  this.knobRadius = 30;
	          this.knob.setAttribute("r", this.knobRadius.on);
	        } else {
	          //  this.knobRadius = 15;
	          this.knob.setAttribute("r", this.knobRadius.off);
	        }
	
	        this.knobCoordinates = {
	          x: this._x.normalized * this.width,
	          y: this.height - this._y.normalized * this.height
	        };
	
	        this.knob.setAttribute("cx", this.knobCoordinates.x);
	        this.knob.setAttribute("cy", this.knobCoordinates.y);
	      }
	    },
	    click: {
	      value: function click() {
	        this.position.x.anchor = this.mouse;
	        this.position.y.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.x.update(this.mouse);
	          this.position.y.update(this.mouse);
	          this._x.updateNormal(this.position.x.value);
	          this._y.updateNormal(this.position.y.value);
	          this.emit("change", {
	            x: this._x.value,
	            y: this._y.value
	          });
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    x: {
	
	      /**
	      * The interface's x value. When set, it will automatically adjust to fit min/max/step settings of the interface.
	      * @type {object}
	      * @example position.x = 0.5;
	      */
	
	      get: function () {
	        return this._x.value;
	      },
	      set: function (value) {
	        this._x.update(value);
	        this.emit("change", {
	          x: this._x.value,
	          y: this._y.value
	        });
	        this.render();
	      }
	    },
	    y: {
	
	      /**
	      * The interface's y values. When set, it will automatically adjust to fit min/max/step settings of the interface.
	      * @type {object}
	      * @example position.x = 0.5;
	      */
	
	      get: function () {
	        return this._y.value;
	      },
	      set: function (value) {
	        this._y.update(value);
	        this.emit("change", {
	          x: this._x.value,
	          y: this._y.value
	        });
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return {
	          x: this._x.normalized,
	          y: this._y.normalized
	        };
	      }
	    },
	    minX: {
	
	      /**
	      * The lower limit of value on the x axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._x.min;
	      },
	      set: function (v) {
	        this._x.min = v;
	        this.render();
	      }
	    },
	    minY: {
	
	      /**
	      * The lower limit of value on the y axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._y.min;
	      },
	      set: function (v) {
	        this._y.min = v;
	        this.render();
	      }
	    },
	    maxX: {
	
	      /**
	      * The upper limit of value on the x axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._x.max;
	      },
	      set: function (v) {
	        this._x.max = v;
	        this.render();
	      }
	    },
	    maxY: {
	
	      /**
	      * The upper limit of value on the y axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._y.max;
	      },
	      set: function (v) {
	        this._y.max = v;
	        this.render();
	      }
	    },
	    stepX: {
	
	      /**
	      * The incremental step of values on the x axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._x.step;
	      },
	      set: function (v) {
	        this._x.step = v;
	        this.render();
	      }
	    },
	    stepY: {
	
	      /**
	      * The incremental step of values on the y axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._y.step;
	      },
	      set: function (v) {
	        this._y.step = v;
	        this.render();
	      }
	    },
	    mode: {
	
	      /**
	      Absolute mode (position's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "absolute".
	      @type {string}
	      @example position.mode = "relative";
	      */
	
	      get: function () {
	        return this.position.x.mode;
	      },
	      set: function (v) {
	        this.position.x.mode = v;
	        this.position.y.mode = v;
	      }
	    }
	  });
	
	  return Position;
	})(Interface);
	
	module.exports = Position;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var math = __webpack_require__(5);
	
	module.exports = {
	
	  create: function (type) {
	    return document.createElementNS("http://www.w3.org/2000/svg", type);
	  },
	
	  arc: function (x, y, radius, startAngle, endAngle) {
	
	    var start = math.toCartesian(radius, endAngle);
	    var end = math.toCartesian(radius, startAngle);
	
	    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
	
	    var d = ["M", start.x + x, start.y + y, "A", radius, radius, 0, largeArcFlag, 0, end.x + x, end.y + y].join(" ");
	
	    return d;
	  },
	
	  radialGradient: function (defs, numberOfStops) {
	
	    var id = "gradient" + math.ri(100000000000);
	    var stops = [];
	
	    var gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
	    gradient.setAttribute("id", id);
	    gradient.setAttribute("cx", "50%");
	    gradient.setAttribute("cy", "50%");
	    gradient.setAttribute("r", "50%");
	
	    defs.appendChild(gradient);
	
	    for (var i = 0; i < numberOfStops; i++) {
	      var _stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
	      _stop.setAttribute("id", "stop" + i);
	      //stop.setAttribute('offset', '70%');
	      //stop.setAttribute('stop-color', 'White');
	      gradient.appendChild(_stop);
	      stops.push(_stop);
	    }
	
	    return {
	      id: id,
	      stops: stops,
	      element: gradient
	    };
	  }
	
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Limit a number to within a minimum and maximum
	 * @param  {number} value Input value
	 * @param  {number} min   Lower limit
	 * @param  {number} max   Upper limit
	 * @return {number}       The input value constrained within the lower and upper limits
	 * @example
	 * Nexus.clip(11,0,10)   // returns 10
	 * Nexus.clip(-1,0,10)   // returns 0
	 * Nexus.clip(5,0,10)    // returns 5
	 */
	
	exports.clip = function (value, min, max) {
	  return Math.min(Math.max(value, min), max);
	};
	
	exports.normalize = function (value, min, max) {
	  return (value - min) / (max - min);
	};
	
	/**
	 * Scale a value from one range to another range.
	 * @param  {number} inNum  Input value
	 * @param  {number} inMin  Input range minimum
	 * @param  {number} inMax  Input range maximum
	 * @param  {number} outMin Output range minimum
	 * @param  {number} outMax Output range maximum
	 * @return {number}        The input value scaled to its new range
	 * @example
	 * Nexus.scale(0.5,0,1,0,10)   // returns 5
	 * Nexus.scale(0.9,0,1,1,0)    // returns 0.1
	 */
	exports.scale = function (inNum, inMin, inMax, outMin, outMax) {
	  if (inMin === inMax) {
	    return outMin;
	  }
	  return (inNum - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
	};
	
	exports.toPolar = function (x, y) {
	  var r = Math.sqrt(x * x + y * y);
	
	  var theta = Math.atan2(y, x);
	  if (theta < 0) {
	    theta = theta + 2 * Math.PI;
	  }
	  return { radius: r, angle: theta };
	};
	
	exports.toCartesian = function (radius, angle) {
	  var cos = Math.cos(angle);
	  var sin = Math.sin(angle);
	  return { x: radius * cos, y: radius * sin * -1 };
	};
	/*
	exports.polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
	
	  return {
	    x: centerX + (radius * Math.cos(angleInRadians)),
	    y: centerY + (radius * Math.sin(angleInRadians))
	  };
	}  */
	
	exports.prune = function (data, scale) {
	  return parseFloat(data.toFixed(scale));
	};
	
	exports.invert = function (inNum) {
	  return exports.scale(inNum, 1, 0, 0, 1);
	};
	
	/**
	 * Convert a MIDi note number to a frequency value in equal temperament.
	 * @param  {number} midi MIDI note value
	 * @return {number}      Frequence value
	 * @example
	 * Nexus.mtof(60)  // returns the frequency number of Middle C
	 */
	exports.mtof = function (midi) {
	  return Math.pow(2, (midi - 69) / 12) * 440;
	};
	
	/**
	 * Interpolate between two numbers
	 * @param  {number} loc Interpolation index (0-1)
	 * @param  {number} min Lower value
	 * @param  {number} max Upper value
	 * @return {number}     Interpolated value
	 * @example
	 * Nexus.interp(0.5,2,4)   // returns 3
	 * Nexus.interp(0.1,0,10)     // returns 1
	 */
	exports.interp = function (loc, min, max) {
	  return loc * (max - min) + min;
	};
	
	/**
	 * Return a random choice from a list of arguments
	 * @return {various} One random argument
	 * @example
	 * Nexus.pick(1,2,3,4)   // returns 1, 2, 3, or 4
	 * Nexus.pick(function1,function2)   // returns either function1 or function2
	 */
	exports.pick = function () {
	  return arguments[~ ~(Math.random() * arguments.length)];
	};
	
	/**
	 * Returns an octave multiplier for frequency values
	 * @param  {number} num Relative octave number (e.g. -1 for one octave down, 1 for one octave up)
	 * @return {number}     Octave multiplier
	 * @example
	 * Nexus.octave(-1)  // returns 0.5
	 * Nexus.octave(0)   // returns 1
	 * Nexus.octave(1)   // returns 2
	 * Nexus.octave(2)   // returns 4
	 */
	exports.octave = function (num) {
	  return Math.pow(2, num);
	};
	
	/**
	 * Random integer generator. If no second argument is given, will return random integer from 0 to bound1.
	 * @param  {number} bound1 Minimum random value
	 * @param  {number} bound2 Maximum random value
	 * @return {number}        Random integer between lower and upper boundary
	 * @example
	 * Nexus.ri(10)    // returns random int from 0 to 10
	 * Nexus.ri(20,2000) // returns random int from 20 to 2000
	 */
	exports.ri = function (bound1, bound2) {
	  if (!bound2) {
	    bound2 = bound1;
	    bound1 = 0;
	  }
	  var low = Math.min(bound1, bound2);
	  var high = Math.max(bound1, bound2);
	  return Math.floor(Math.random() * (high - low) + low);
	};
	
	/**
	 * Random float number generator. If no second argument is given, will return random float from 0 to bound1.
	 * @param  {number} bound1 Minimum random value
	 * @param  {number} bound2 Maximum random value
	 * @return {number}        Random float between lower and upper boundary
	 * @example
	 * Nexus.rf(1)    // returns random float from 0 to 1
	 * Nexus.rf(1,2) // returns random float from 1 to 2
	 */
	exports.rf = function (bound1, bound2) {
	  if (!bound2) {
	    bound2 = bound1;
	    bound1 = 0;
	  }
	  var low = Math.min(bound1, bound2);
	  var high = Math.max(bound1, bound2);
	  return Math.random() * (high - low) + low;
	};
	
	exports.cycle = function (input, min, max) {
	  input++;
	  if (input >= max) {
	    input = min;
	  }
	  return input;
	};
	
	/**
	 * Average an array of numbers
	 * @param  {Array} data Array of numbers to average
	 * @return {number}      Average of the input data
	 * @example
	 * Nexus.average([0,2,4,6,8,10])   // returns 5
	 */
	exports.average = function (data) {
	  var total = 0;
	  for (var i = 0; i < data.length; i++) {
	    total += data[i];
	  }
	  return total / data.length;
	};
	
	/**
	 * Get the distance from one (x,y) point to another (x,y) point
	 * @param  {number} x1 x of first point
	 * @param  {number} y1 y of first point
	 * @param  {number} x2 x of second point
	 * @param  {number} y2 y of second poiny
	 * @return {number}    Distance
	 * @example
	 * Nexus.distance(0,0,3,4)   // returns 5
	 */
	exports.distance = function (x1, y1, x2, y2) {
	  var a = x1 - x2;
	  var b = y1 - y2;
	  return Math.sqrt(a * a + b * b);
	};
	
	exports.gainToDB = function (gain) {
	  return 20 * Math.log10(gain);
	};
	
	/**
	 * Flip a coin, returning either 0 or 1 according to a probability
	 * @param  {number} [odds=0.5] Likelihood of returning 1
	 * @return {number}            1 or 0
	 * @example
	 * Nexus.coin(0.1)   // returns 1 (10% of the time) or 0 (90% of the time)
	 */
	exports.coin = function () {
	  var odds = arguments[0] === undefined ? 0.5 : arguments[0];
	
	  if (exports.rf(0, 1) < odds) {
	    return 1;
	  } else {
	    return 0;
	  }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var dom = __webpack_require__(7);
	var util = __webpack_require__(8);
	var touch = __webpack_require__(9);
	var EventEmitter = __webpack_require__(10);
	
	var colors = __webpack_require__(1).colors;
	
	/**
	Interface
	*/
	
	var Interface = (function (_EventEmitter) {
	  function Interface(args, options, defaults) {
	    _classCallCheck(this, Interface);
	
	    _get(Object.getPrototypeOf(Interface.prototype), "constructor", this).call(this);
	    this.type = this.constructor.name;
	    this.settings = this.parseSettings(args, options, defaults);
	    this.mouse = {};
	    this.wait = false;
	    this.colors = {};
	    var defaultColors = colors(); // jshint ignore:line
	    this.colors.accent = defaultColors.accent;
	    this.colors.fill = defaultColors.fill;
	    this.colors.light = defaultColors.light;
	    this.colors.dark = defaultColors.dark;
	    this.colors.mediumLight = defaultColors.mediumLight;
	    this.colors.mediumDark = defaultColors.mediumDark;
	  }
	
	  _inherits(Interface, _EventEmitter);
	
	  _createClass(Interface, {
	    parseSettings: {
	      value: function parseSettings(args, options, defaults) {
	
	        options.unshift("target");
	        defaults.defaultSize = defaults.size.splice(0, 2);
	        defaults.size = false;
	
	        var settings = {
	          target: document.body,
	          colors: {}, // should inherit from a colors module,
	          snapWithParent: true,
	          event: function event() {},
	          component: false
	        };
	
	        for (var key in defaults) {
	          settings[key] = defaults[key];
	        }
	
	        for (var i = 0; i < args.length; i++) {
	          // grabs the next argument
	          var setting = args[i];
	          // if it's an object, it must be the settings object
	          if (util.isObject(setting)) {
	            for (var key in setting) {
	              settings[key] = setting[key];
	            }
	            // if it's a function, it must be the event setting
	          } else if (typeof setting === "function") {
	            settings.event = setting;
	            // otherwise, consider it one of the widget's custom options
	          } else if (options.length >= 1) {
	            // grab the first option -- i.e. 'target'
	            var key = options.splice(0, 1)[0];
	            settings[key] = setting;
	          }
	        }
	
	        /*  handle common settings  */
	
	        // target
	        this.parent = dom.parseElement(settings.target);
	
	        // nexus-ui attribute
	        if (this.parent && this.parent instanceof HTMLElement && !settings.component) {
	          if (!this.parent.hasAttribute("nexus-ui")) {
	            this.parent.setAttribute("nexus-ui", "");
	          }
	        }
	
	        // size
	
	        if (settings.size && Array.isArray(settings.size) && settings.snapWithParent) {
	          this.width = settings.size[0];
	          this.height = settings.size[1];
	          this.parent.style.width = this.width + "px";
	          this.parent.style.height = this.height + "px";
	        } else if (settings.snapWithParent && !settings.component) {
	
	          this.width = parseFloat(window.getComputedStyle(this.parent, null).getPropertyValue("width").replace("px", ""));
	          this.height = parseFloat(window.getComputedStyle(this.parent, null).getPropertyValue("height").replace("px", ""));
	
	          if (this.width == 5000) {
	            this.width = settings.defaultSize[0];
	            this.parent.style.width = this.parent.width = this.width + "px";
	          }
	          if (this.height == 5000) {
	            this.height = settings.defaultSize[1];
	            this.parent.style.height = this.parent.height = this.height + "px";
	          }
	        } else {
	          settings.size = settings.defaultSize;
	          this.width = settings.size[0];
	          this.height = settings.size[1];
	        }
	
	        // event
	        if (settings.event) {
	          this.event = this.on("change", settings.event);
	        } else {
	          this.event = false;
	        }
	
	        return settings;
	      }
	    },
	    init: {
	      value: function init() {
	        this.buildFrame();
	        this.buildInterface();
	        this.sizeInterface();
	        this.attachListeners();
	        this.colorInterface();
	        this.finalTouches();
	      }
	    },
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = svg.create("svg");
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {}
	    },
	    sizeInterface: {
	      value: function sizeInterface() {}
	    },
	    colorInterface: {
	      value: function colorInterface() {}
	    },
	    attachListeners: {
	      value: function attachListeners() {
	        var _this = this;
	
	        this.interactionTarget = this.interactionTarget || this.element;
	
	        // Setup interaction
	        if (touch.exists) {
	          this.interactionTarget.addEventListener("touchstart", function (evt) {
	            return _this.preTouch(evt);
	          });
	          this.interactionTarget.addEventListener("touchmove", function (evt) {
	            return _this.preTouchMove(evt);
	          });
	          this.interactionTarget.addEventListener("touchend", function (evt) {
	            return _this.preTouchRelease(evt);
	          });
	        }
	        this.boundPreMove = function (evt) {
	          return _this.preMove(evt);
	        };
	        this.boundPreRelease = function (evt) {
	          return _this.preRelease(evt);
	        };
	        this.interactionTarget.addEventListener("mousedown", function (evt) {
	          return _this.preClick(evt);
	        });
	      }
	    },
	    finalTouches: {
	      value: function finalTouches() {
	        this.element.style.cursor = "pointer";
	      }
	    },
	    preClick: {
	      value: function preClick(e) {
	        // 10000 getComputedStyle calls takes 100 ms.
	        // .:. one takes about .01ms
	        if (this.element instanceof HTMLElement) {
	          this.width = window.getComputedStyle(this.element, null).getPropertyValue("width").replace("px", "");
	        }
	        // 10000 getComputedStyle calls takes 40 ms.
	        // .:. one takes about .004ms
	        this.offset = dom.findPosition(this.element);
	        this.mouse = dom.locateMouse(e, this.offset);
	        this.clicked = true;
	        this.click();
	        this.moveEvent = document.addEventListener("mousemove", this.boundPreMove);
	        this.releaseEvent = document.addEventListener("mouseup", this.boundPreRelease);
	        this.emit("click");
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    preMove: {
	      value: function preMove(e) {
	        var _this = this;
	
	        if (!this.wait) {
	          this.mouse = dom.locateMouse(e, this.offset);
	          this.move();
	          this.wait = true;
	          setTimeout(function () {
	            _this.wait = false;
	          }, 25);
	        }
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    preRelease: {
	      value: function preRelease(e) {
	        this.mouse = dom.locateMouse(e, this.offset);
	        this.clicked = false;
	        this.release();
	        this.emit("release");
	        document.removeEventListener("mousemove", this.boundPreMove);
	        document.removeEventListener("mouseup", this.boundPreRelease);
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    click: {
	      value: function click() {}
	    },
	    move: {
	      value: function move() {}
	    },
	    release: {
	      value: function release() {}
	    },
	    preTouch: {
	
	      /* touch */
	
	      value: function preTouch(e) {
	        if (this.element instanceof HTMLElement) {
	          this.width = window.getComputedStyle(this.element, null).getPropertyValue("width").replace("px", "");
	        }
	        this.offset = dom.findPosition(this.element);
	        this.mouse = dom.locateTouch(e, this.offset);
	        this.clicked = true;
	        this.touch(e);
	        this.emit("click");
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    preTouchMove: {
	      value: function preTouchMove(e) {
	        if (this.clicked) {
	          this.mouse = dom.locateTouch(e, this.offset);
	          this.touchMove();
	          e.preventDefault();
	          e.stopPropagation();
	        }
	      }
	    },
	    preTouchRelease: {
	      value: function preTouchRelease(e) {
	        this.mouse = dom.locateTouch(e, this.offset);
	        this.clicked = false;
	        this.touchRelease();
	        this.emit("release");
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    touch: {
	      value: function touch() {
	        this.click();
	      }
	    },
	    touchMove: {
	      value: function touchMove() {
	        this.move();
	      }
	    },
	    touchRelease: {
	      value: function touchRelease() {
	        this.release();
	      }
	    },
	    resize: {
	
	      /**
	      * Resize the interface
	      * @param width {number} New width in pixels
	      * @param height {number} New height in pixels
	      *
	      * @example
	      * button.resize(100,100);
	      */
	
	      value: function resize(width, height) {
	        this.width = width;
	        this.height = height;
	        this.parent.style.width = this.width + "px";
	        this.parent.style.height = this.height + "px";
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.sizeInterface();
	      }
	    },
	    empty: {
	      value: function empty() {
	        while (this.element.lastChild) {
	          this.element.removeChild(this.element.lastChild);
	        }
	      }
	    },
	    destroy: {
	
	      /**
	      * Remove the interface from the page and cancel its event listener(s).
	      *
	      * @example
	      * button.destroy();
	      */
	
	      value: function destroy() {
	        this.empty();
	        this.parent.removeChild(this.element);
	        this.removeAllListeners();
	        if (this.instrument) {
	          delete this.instrument[this.id];
	        }
	        this.customDestroy();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {}
	    },
	    colorize: {
	      value: function colorize(type, color) {
	        this.colors[type] = color;
	        this.colorInterface();
	      }
	    }
	  });
	
	  return Interface;
	})(EventEmitter);
	
	module.exports = Interface;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.findPosition = function (el) {
	  var viewportOffset = el.getBoundingClientRect();
	  var top = viewportOffset.top + window.scrollY;
	  var left = viewportOffset.left + window.scrollX;
	  return { top: top, left: left };
	};
	
	exports.parseElement = function (parent) {
	  if (typeof parent === "string") {
	    parent = document.getElementById(parent.replace("#", ""));
	  }
	
	  if (parent instanceof HTMLElement || parent instanceof SVGElement) {
	    return parent;
	  } else {
	    return "No valid parent argument";
	  }
	};
	
	exports.locateMouse = function (e, offset) {
	  return {
	    x: e.pageX - offset.left,
	    y: e.pageY - offset.top
	  };
	};
	
	exports.locateTouch = function (e, offset) {
	  return {
	    x: e.targetTouches.length ? e.targetTouches[0].pageX - offset.left : false,
	    y: e.targetTouches.length ? e.targetTouches[0].pageY - offset.top : false
	  };
	};
	
	exports.SmartCanvas = function (parent) {
	  var _this = this;
	
	  this.element = document.createElement("canvas");
	  this.context = this.element.getContext("2d");
	  parent.appendChild(this.element);
	
	  this.resize = function (w, h) {
	    _this.element.width = w * 2;
	    _this.element.height = h * 2;
	    _this.element.style.width = w + "px";
	    _this.element.style.height = h + "px";
	  };
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.isObject = function (obj) {
	  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null && obj instanceof SVGElement === false && obj instanceof HTMLElement === false) {
	    return true;
	  } else {
	    return false;
	  }
	};
	
	// Restricts input for the given textbox to the given inputFilter function
	// cf https://stackoverflow.com/a/469362
	exports.setInputFilter = function (textbox, inputFilter) {
	  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
	    textbox.addEventListener(event, function () {
	      if (inputFilter(this.value)) {
	        this.oldValue = this.value;
	        this.oldSelectionStart = this.selectionStart;
	        this.oldSelectionEnd = this.selectionEnd;
	      } else if (this.hasOwnProperty("oldValue")) {
	        this.value = this.oldValue;
	        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
	      } else {
	        this.value = "";
	      }
	    });
	  });
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.exists = "ontouchstart" in document.documentElement;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = __webpack_require__(5);
	
	/**
	  Creates a steppable value with minimum, maximum, and step size. This is used in many interfaces to constrict their values to certain ranges.
	  @param {number} [min=0] minimum
	  @param {number} [max=1] maximum
	  @param {number} [step=0]
	  @param {number} [value=0] initial value
	  @returns {Object} Step
	*/
	
	var Step = (function () {
	  function Step() {
	    var min = arguments[0] === undefined ? 0 : arguments[0];
	    var max = arguments[1] === undefined ? 1 : arguments[1];
	    var step = arguments[2] === undefined ? 0 : arguments[2];
	    var value = arguments[3] === undefined ? 0 : arguments[3];
	
	    _classCallCheck(this, Step);
	
	    //Object.assign(this,{min,max,step});
	    //Cannot use Object.assign because not supported in Safari.
	    //I would expect for Babel to take care of this but it is not.
	    this.min = min;
	    this.max = max;
	    this.step = step;
	    this.value = value;
	    this.changed = false;
	    this.oldValue = false;
	    this.update(this.value);
	  }
	
	  _createClass(Step, {
	    update: {
	
	      /**
	        Update with a new value. The value will be auto-adjusted to fit the min/max/step.
	        @param {number} value
	      */
	
	      value: function update(value) {
	        if (this.step) {
	          // this.value = math.clip(Math.round(value / (this.step)) * this.step, this.min,this.max);
	          this.value = math.clip(Math.round((value - this.min) / this.step) * this.step + this.min, this.min, this.max);
	        } else {
	          this.value = math.clip(value, this.min, this.max);
	        }
	        if (this.oldValue !== this.value) {
	          this.oldValue = this.value;
	          this.changed = true;
	        } else {
	          this.changed = false;
	        }
	        return this.value;
	      }
	    },
	    updateNormal: {
	
	      /**
	        Update with a normalized value 0-1.
	        @param {number} value
	      */
	
	      value: function updateNormal(value) {
	        this.value = math.scale(value, 0, 1, this.min, this.max);
	        return this.update(this.value);
	      }
	    },
	    normalized: {
	
	      /**
	        Get a normalized version of this.value . Not settable.
	      */
	
	      get: function () {
	        return math.normalize(this.value, this.min, this.max);
	      }
	    }
	  });
	
	  return Step;
	})();
	
	module.exports = Step;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	"use strict";
	
	var math = _interopRequire(__webpack_require__(5));
	
	var ToggleModel = _interopRequire(__webpack_require__(13));
	
	/*
	how to use :
	
	dial.interaction = new Handle('radial','relative',this.width,this.height);
	// dial.interaction.mode = 'relative'
	// dial.interaction.direction = 'radial'
	
	on click:
	dial.interaction.anchor = this.mouse;
	
	on move:
	dial.interaction.update(this.mouse);
	
	console.log( dial.interaction.value ); should be a normalized value.
	
	*/
	
	/*
	  absolute/relative are property: mode
	  radial/vertical/horizontal/2d are property: direction
	
	  plan :
	
	  if relative --
	  NO on click, get value offset between current value and click value.
	  NO on move, use click value - offset
	  INSTEAD
	  use delta -- bc vertical motion on dial is impossible otherwise
	  also allow to set sensitivity
	
	*/
	
	var Handle = exports.Handle = (function () {
	  function Handle() {
	    var mode = arguments[0] === undefined ? "absolute" : arguments[0];
	    var direction = arguments[1] === undefined ? "vertical" : arguments[1];
	    var xbound = arguments[2] === undefined ? [0, 100] : arguments[2];
	    var ybound = arguments[3] === undefined ? [0, 100] : arguments[3];
	
	    _classCallCheck(this, Handle);
	
	    this.mode = mode;
	    this.direction = direction;
	    this.previous = 0;
	    this.value = 0;
	    this.sensitivity = 1;
	    this.resize(xbound, ybound);
	  }
	
	  _createClass(Handle, {
	    resize: {
	      value: function resize(xbound, ybound) {
	        this.boundary = {
	          min: {
	            x: xbound[0],
	            y: ybound[0]
	          },
	          max: {
	            x: xbound[1],
	            y: ybound[1]
	          },
	          center: {
	            x: (xbound[1] - xbound[0]) / 2 + xbound[0],
	            y: (ybound[1] - ybound[0]) / 2 + ybound[0]
	          }
	        };
	      }
	    },
	    anchor: {
	      set: function (mouse) {
	        this._anchor = this.convertPositionToValue(mouse);
	      },
	      get: function () {
	        return this._anchor;
	      }
	    },
	    update: {
	      value: function update(mouse) {
	        if (this.mode === "relative") {
	          var increment = this.convertPositionToValue(mouse) - this.anchor;
	          if (Math.abs(increment) > 0.5) {
	            increment = 0;
	          }
	          this.anchor = mouse;
	          this.value = this.value + increment * this.sensitivity;
	        } else {
	          this.value = this.convertPositionToValue(mouse);
	        }
	        this.value = math.clip(this.value, 0, 1);
	      }
	    },
	    convertPositionToValue: {
	      value: function convertPositionToValue(current) {
	        switch (this.direction) {
	          case "radial":
	            var position = math.toPolar(current.x - this.boundary.center.x, current.y - this.boundary.center.y);
	            position = position.angle / (Math.PI * 2);
	            position = (position - 0.25 + 1) % 1;
	            return position;
	          case "vertical":
	            return math.scale(current.y, this.boundary.min.y, this.boundary.max.y, 0, 1);
	          case "horizontal":
	            return math.scale(current.x, this.boundary.min.x, this.boundary.max.x, 0, 1);
	        }
	      }
	    }
	  });
	
	  return Handle;
	})();
	
	var Button = exports.Button = (function () {
	  function Button() {
	    var mode = arguments[0] === undefined ? "button" : arguments[0];
	
	    _classCallCheck(this, Button);
	
	    this.mode = mode;
	    this.state = new ToggleModel();
	    this.paintbrush = false;
	  }
	
	  _createClass(Button, {
	    click: {
	      value: function click() {
	        switch (this.mode) {
	          case "impulse":
	            this.state.on();
	            if (this.timeout) {
	              clearTimeout(this.timeout);
	            }
	            this.timeout = setTimeout(this.state.off.bind(this), 30);
	            this.emit("change", this.state);
	            break;
	          case "button":
	            this.turnOn();
	            this.emit("change", this.state);
	            break;
	          case "aftertouch":
	            this.position = {
	              x: math.clip(this.mouse.x / this.width, 0, 1),
	              y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	            };
	            this.turnOn();
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	            break;
	          case "toggle":
	            this.flip();
	            this.emit("change", this.state);
	            break;
	        }
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.mode === "aftertouch") {
	          this.position = {
	            x: math.clip(this.mouse.x / this.width, 0, 1),
	            y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	          };
	          this.emit("change", {
	            state: this.state,
	            x: this.position.x,
	            y: this.position.y });
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        switch (this.mode) {
	          case "button":
	            this.turnOff();
	            this.emit("change", this.state);
	            break;
	          case "aftertouch":
	            this.turnOff();
	            this.position = {
	              x: this.mouse.x / this.width,
	              y: 1 - this.mouse.y / this.height
	            };
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	            break;
	        }
	      }
	    }
	  });
	
	  return Button;
	})();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Toggle = (function () {
	  function Toggle(state) {
	    _classCallCheck(this, Toggle);
	
	    this.state = state || false;
	  }
	
	  _createClass(Toggle, {
	    flip: {
	      value: function flip(state) {
	        if (state || state === false) {
	          this.state = state;
	        } else {
	          this.state = !this.state;
	        }
	      }
	    },
	    on: {
	      value: function on() {
	        this.state = true;
	      }
	    },
	    off: {
	      value: function off() {
	        this.state = false;
	      }
	    }
	  });
	
	  return Toggle;
	})();
	
	module.exports = Toggle;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	* Slider
	*
	* @description Horizontal or vertical slider with settable interaction modes.
	*
	* @demo <span nexus-ui="slider" step=0.2></span>
	*
	* @example
	* var slider = new Nexus.Slider('#target')
	*
	* @example
	* var slider = new Nexus.Slider('#target',{
	*     'size': [120,20],
	*     'mode': 'relative',  // 'relative' or 'absolute'
	*     'min': 0,
	*     'max': 1,
	*     'step': 0,
	*     'value': 0
	* })
	*
	* @output
	* change
	* Fires when the interface's value changes. <br>
	* Event data: <i>number</i> The number value of the interface.
	*
	* @outputexample
	* slider.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Slider = (function (_Interface) {
	  function Slider() {
	    _classCallCheck(this, Slider);
	
	    var options = ["min", "max", "value"];
	
	    var defaults = {
	      size: [120, 20],
	      mode: "relative", // 'relative' or 'absolute'
	      min: 0,
	      max: 1,
	      step: 0,
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(Slider.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.orientation = "vertical"; // This will change automatically to 'horizontal'if the interface is wider than it is tall.
	
	    this._value = new Step(this.settings.min, this.settings.max, this.settings.step, this.settings.value);
	
	    this.position = new Interaction.Handle(this.settings.mode, this.orientation, [0, this.width], [this.height, 0]);
	    this.position.value = this._value.normalized;
	
	    this.init();
	
	    this.position.direction = this.orientation;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(Slider, _Interface);
	
	  _createClass(Slider, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.fillbar = svg.create("rect");
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.fillbar);
	        this.element.appendChild(this.knob);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (this.width < this.height) {
	          this.orientation = "vertical";
	          this.position.direction = "vertical";
	        } else {
	          this.orientation = "horizontal";
	          this.position.direction = "horizontal";
	        }
	
	        if (this.position) {
	          this.position.resize([0, this.width], [this.height, 0]);
	        }
	
	        var x = undefined,
	            y = undefined,
	            w = undefined,
	            h = undefined,
	            barOffset = undefined,
	            cornerRadius = undefined;
	        this.knobData = {
	          level: 0,
	          r: 0
	        };
	
	        if (this.orientation === "vertical") {
	          this.thickness = this.width / 2;
	          x = this.width / 2;
	          y = 0;
	          w = this.thickness;
	          h = this.height;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = h - this.knobData.r - this.normalized * (h - this.knobData.r * 2);
	          barOffset = "translate(" + this.thickness * -1 / 2 + ",0)";
	          cornerRadius = w / 2;
	        } else {
	          this.thickness = this.height / 2;
	          x = 0;
	          y = this.height / 2;
	          w = this.width;
	          h = this.thickness;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = this.normalized * (w - this.knobData.r * 2) + this.knobData.r;
	          barOffset = "translate(0," + this.thickness * -1 / 2 + ")";
	          cornerRadius = h / 2;
	        }
	
	        this.bar.setAttribute("x", x);
	        this.bar.setAttribute("y", y);
	        this.bar.setAttribute("transform", barOffset);
	        this.bar.setAttribute("rx", cornerRadius); // corner radius
	        this.bar.setAttribute("ry", cornerRadius);
	        this.bar.setAttribute("width", w);
	        this.bar.setAttribute("height", h);
	
	        if (this.orientation === "vertical") {
	          this.fillbar.setAttribute("x", x);
	          this.fillbar.setAttribute("y", this.knobData.level);
	          this.fillbar.setAttribute("width", w);
	          this.fillbar.setAttribute("height", h - this.knobData.level);
	        } else {
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("y", y);
	          this.fillbar.setAttribute("width", this.knobData.level);
	          this.fillbar.setAttribute("height", h);
	        }
	        this.fillbar.setAttribute("transform", barOffset);
	        this.fillbar.setAttribute("rx", cornerRadius);
	        this.fillbar.setAttribute("ry", cornerRadius);
	
	        if (this.orientation === "vertical") {
	          this.knob.setAttribute("cx", x);
	          this.knob.setAttribute("cy", this.knobData.level);
	        } else {
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.knob.setAttribute("cy", y);
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.bar.setAttribute("fill", this.colors.fill);
	        this.fillbar.setAttribute("fill", this.colors.accent);
	        this.knob.setAttribute("fill", this.colors.accent);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.clicked) {
	          this.knobData.r = this.thickness * 0.75;
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	
	        if (this.orientation === "vertical") {
	          this.knobData.level = this.knobData.r + this._value.normalized * (this.height - this.knobData.r * 2);
	          this.knob.setAttribute("cy", this.height - this.knobData.level);
	          this.fillbar.setAttribute("y", this.height - this.knobData.level);
	          this.fillbar.setAttribute("height", this.knobData.level);
	        } else {
	          this.knobData.level = this._value.normalized * (this.width - this.knobData.r * 2) + this.knobData.r;
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("width", this.knobData.level);
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.knobData.r = this.thickness * 0.9;
	        this.position.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.update(this.mouse);
	          this._value.updateNormal(this.position.value);
	          this.emit("change", this._value.value);
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return this._value.normalized;
	      }
	    },
	    value: {
	
	      /**
	      The slider's current value. If set manually, will update the interface and trigger the output event.
	      @type {number}
	      @example slider.value = 10;
	      */
	
	      get: function () {
	        return this._value.value;
	      },
	      set: function (v) {
	        this._value.update(v);
	        this.position.value = this._value.normalized;
	        this.emit("change", this._value.value);
	        this.render();
	      }
	    },
	    min: {
	
	      /**
	      Lower limit of the sliders's output range
	      @type {number}
	      @example slider.min = 1000;
	      */
	
	      get: function () {
	        return this._value.min;
	      },
	      set: function (v) {
	        this._value.min = v;
	      }
	    },
	    max: {
	
	      /**
	      Upper limit of the slider's output range
	      @type {number}
	      @example slider.max = 1000;
	      */
	
	      get: function () {
	        return this._value.max;
	      },
	      set: function (v) {
	        this._value.max = v;
	      }
	    },
	    step: {
	
	      /**
	      The increment that the slider's value changes by.
	      @type {number}
	      @example slider.step = 5;
	      */
	
	      get: function () {
	        return this._value.step;
	      },
	      set: function (v) {
	        this._value.step = v;
	      }
	    },
	    mode: {
	
	      /**
	      Absolute mode (slider's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "relative".
	      @type {string}
	      @example slider.mode = "relative";
	      */
	
	      get: function () {
	        return this.position.mode;
	      },
	      set: function (v) {
	        this.position.mode = v;
	      }
	    }
	  });
	
	  return Slider;
	})(Interface);
	
	module.exports = Slider;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var ToggleModel = __webpack_require__(13);
	var Interface = __webpack_require__(6);
	
	/**
	* Toggle
	*
	* @description Binary switch
	*
	* @demo <span nexus-ui="toggle"></span>
	*
	* @example
	* var toggle = new Nexus.Toggle('#target')
	*
	* @example
	* var toggle = new Nexus.Toggle('#target',{
	*     'size': [40,20],
	*     'state': false
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* Parameter: The boolean state of the interface.
	*
	* @outputexample
	* toggle.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Toggle = (function (_Interface) {
	  function Toggle() {
	    _classCallCheck(this, Toggle);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [40, 20],
	      target: false,
	      state: false
	    };
	
	    _get(Object.getPrototypeOf(Toggle.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._state = new ToggleModel(this.settings.state);
	
	    this.init();
	  }
	
	  _inherits(Toggle, _Interface);
	
	  _createClass(Toggle, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.knob = svg.create("circle");
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.knob);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (this.height < this.width / 2) {
	          this.knobSize = this.height / 2;
	        } else {
	          this.knobSize = this.width / 4;
	        }
	
	        this.bar.setAttribute("x", this.width / 2 - this.knobSize * 1.5);
	        this.bar.setAttribute("y", this.height / 2 - this.knobSize / 2);
	        this.bar.setAttribute("rx", this.knobSize / 2);
	        this.bar.setAttribute("ry", this.knobSize / 2);
	        this.bar.setAttribute("width", this.knobSize * 3);
	        this.bar.setAttribute("height", this.knobSize);
	
	        this.knob.setAttribute("cx", this.width / 2 - this.knobSize);
	        this.knob.setAttribute("cy", this.height / 2);
	        this.knob.setAttribute("r", this.knobSize);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.knob.setAttribute("fill", this.colors.accent);
	        this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.knob.setAttribute("cx", this.width / 2 - this.knobSize);
	          this.bar.setAttribute("fill", this.colors.fill);
	        } else {
	          this.knob.setAttribute("cx", this.width / 2 + this.knobSize);
	          this.bar.setAttribute("fill", this.colors.accent);
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.flip();
	        this.render();
	        this.emit("change", this.state);
	      }
	    },
	    state: {
	
	      /**
	      Whether the toggle is currently on or off. Setting this property will update the toggle interface and trigger the output event.
	      @type {boolean}
	      @example toggle.state = false;
	      */
	
	      get: function () {
	        return this._state.state;
	      },
	      set: function (value) {
	        this._state.flip(value);
	        this.emit("change", this.state);
	        this.render();
	      }
	    },
	    flip: {
	
	      /**
	      * Switch the toggle state to its opposite state
	      * @example
	      * toggle.flip();
	      */
	
	      value: function flip() {
	        this._state.flip();
	        this.render();
	      }
	    }
	  });
	
	  return Toggle;
	})(Interface);
	
	module.exports = Toggle;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var ButtonTemplate = __webpack_require__(17);
	
	/**
	* Button
	*
	* @description Circular button with optional aftertouch.
	*
	* @demo <span nexus-ui="button"></span>
	*
	* @example
	* var button = new Nexus.Button('#target')
	*
	* @example
	* var button = new Nexus.Button('#target',{
	*   'size': [80,80],
	*   'mode': 'aftertouch',
	*   'state': false
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* In <b>button mode</b>, <b>toggle mode</b>, and <b>impulse mode</b>, the output data is a boolean describing the state of the button.<br>
	* In <b>aftertouch mode</b>, the output data is an object containing x (0-1) and y (0-1) positions of aftertouch.
	*
	* @outputexample
	* button.on('change',function(v) {
	*   // v is the value of the button
	*   console.log(v);
	* })
	*
	*/
	
	var Button = (function (_ButtonTemplate) {
	  function Button() {
	    _classCallCheck(this, Button);
	
	    var options = ["mode"];
	
	    var defaults = {
	      size: [80, 80],
	      mode: "aftertouch", // button, aftertouch, impulse, toggle
	      state: false
	    };
	
	    _get(Object.getPrototypeOf(Button.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    /**
	    * Interaction mode: supports "button", "aftertouch", "impulse", or "toggle"
	    * @type {string}
	    * @example button.mode = 'toggle';
	    */
	    this.mode = this.settings.mode;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Button, _ButtonTemplate);
	
	  _createClass(Button, {
	    buildInterface: {
	      value: function buildInterface() {
	        this.pad = svg.create("circle");
	        this.element.appendChild(this.pad);
	
	        this.interactionTarget = this.pad;
	
	        // only used if in 'aftertouch' mode
	        this.defs = svg.create("defs");
	        this.element.appendChild(this.defs);
	
	        this.gradient = svg.radialGradient(this.defs, 2);
	
	        this.gradient.stops[0].setAttribute("offset", "30%");
	
	        this.gradient.stops[1].setAttribute("offset", "100%");
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.pad.setAttribute("cx", this.width / 2);
	        this.pad.setAttribute("cy", this.height / 2);
	        this.pad.setAttribute("r", Math.min(this.width, this.height) / 2 - this.width / 40);
	        this.pad.setAttribute("stroke-width", this.width / 20);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        this.gradient.stops[0].setAttribute("stop-color", this.colors.accent);
	        this.gradient.stops[1].setAttribute("stop-color", this.colors.fill);
	        this.render();
	      }
	    },
	    render: {
	
	      /*
	      * Update the visual interface using its current state
	      *
	      * @example
	      * button.render();
	      */
	
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", this.colors.fill);
	          this.pad.setAttribute("stroke", this.colors.mediumLight);
	        } else {
	          if (this.mode === "aftertouch") {
	            this.pad.setAttribute("stroke", "url(#" + this.gradient.id + ")");
	            this.gradient.element.setAttribute("cx", this.position.x * 100 + "%");
	            this.gradient.element.setAttribute("cy", (1 - this.position.y) * 100 + "%");
	          } else {
	            this.pad.setAttribute("stroke", this.colors.accent);
	          }
	          this.pad.setAttribute("fill", this.colors.accent);
	        }
	      }
	    }
	  });
	
	  return Button;
	})(ButtonTemplate);
	
	module.exports = Button;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var ToggleModel = __webpack_require__(13);
	var Interface = __webpack_require__(6);
	
	/**
	Button Template
	*/
	
	var ButtonTemplate = (function (_Interface) {
	  function ButtonTemplate(args, options, defaults) {
	    _classCallCheck(this, ButtonTemplate);
	
	    _get(Object.getPrototypeOf(ButtonTemplate.prototype), "constructor", this).call(this, args, options, defaults);
	
	    this.mode = this.settings.mode || "button";
	
	    this.position = {
	      x: 0,
	      y: 0
	    };
	
	    this._state = new ToggleModel(this.settings.state);
	  }
	
	  _inherits(ButtonTemplate, _Interface);
	
	  _createClass(ButtonTemplate, {
	    buildInterface: {
	      value: function buildInterface() {
	        this.pad = svg.create("circle");
	        this.pad.setAttribute("fill", "#d18");
	        this.pad.setAttribute("stroke", "#d18");
	        this.pad.setAttribute("stroke-width", 4);
	
	        this.element.appendChild(this.pad);
	
	        this.interactionTarget = this.pad;
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.pad.setAttribute("cx", this.width / 2);
	        this.pad.setAttribute("cy", this.height / 2);
	        this.pad.setAttribute("r", Math.min(this.width, this.height) / 2 - 2);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", this.colors.fill);
	          this.pad.setAttribute("stroke", this.colors.mediumLight);
	        } else {
	          this.pad.setAttribute("fill", this.colors.accent);
	          this.pad.setAttribute("stroke", this.colors.accent);
	        }
	      }
	    },
	    down: {
	      value: function down(paintbrush) {
	        switch (this.mode) {
	          case "impulse":
	            this.turnOn();
	            if (this.timeout) {
	              clearTimeout(this.timeout);
	            }
	            this.timeout = setTimeout(this.turnOff.bind(this), 30);
	            //    this.emit('change',this.state);
	            break;
	          case "button":
	            this.turnOn();
	            //    this.emit('change',this.state);
	            break;
	          case "aftertouch":
	            this.position = {
	              x: math.clip(this.mouse.x / this.width, 0, 1),
	              y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	            };
	            this.turnOn();
	            //    this.emit('change',{
	            //      state: this.state,
	            //      x: this.position.x,
	            //      y: this.position.y,
	            //    });
	            break;
	          case "toggle":
	            this.flip(paintbrush);
	            //    this.emit('change',this.state);
	            break;
	        }
	      }
	    },
	    bend: {
	      value: function bend(mouse) {
	        if (this.mode === "aftertouch") {
	          this.mouse = mouse || this.mouse;
	          this.position = {
	            x: math.clip(this.mouse.x / this.width, 0, 1),
	            y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	          };
	          this.emit("change", {
	            state: this.state,
	            x: this.position.x,
	            y: this.position.y });
	          this.render();
	        }
	      }
	    },
	    up: {
	      value: function up() {
	        switch (this.mode) {
	          case "button":
	            this.turnOff();
	            //  this.emit('change',this.state);
	            break;
	          case "aftertouch":
	            this.turnOff();
	            this.position = {
	              x: math.clip(this.mouse.x / this.width, 0, 1),
	              y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	            };
	            //  this.emit('change',{
	            //    state: this.state,
	            //    x: this.position.x,
	            //    y: this.position.y,
	            //  });
	            break;
	        }
	      }
	    },
	    click: {
	
	      /* overwritable interaction handlers */
	
	      value: function click() {
	        this.down();
	      }
	    },
	    move: {
	      value: function move() {
	        this.bend();
	      }
	    },
	    release: {
	      value: function release() {
	        this.up();
	      }
	    },
	    state: {
	
	      /**
	      Whether the button is on (pressed) or off (not pressed)
	      @type {boolean}
	      @example button.state = true;
	      */
	
	      get: function () {
	        return this._state.state;
	      },
	      set: function (value) {
	        this._state.flip(value);
	        if (this.mode === "aftertouch") {
	          this.emit("change", {
	            state: this.state,
	            x: this.position.x,
	            y: this.position.y });
	        } else {
	          this.emit("change", this.state);
	        }
	        this.render();
	      }
	    },
	    flip: {
	
	      /**
	      Change the button to its alternate state (off=>on, on=>off), or flip it to a specified state.
	      @param value {boolean} (Optional) State to flip to.
	      @example button.flip();
	      */
	
	      value: function flip(value) {
	        this._state.flip(value);
	        if (this.mode === "aftertouch") {
	          this.emit("change", {
	            state: this.state,
	            x: this.position.x,
	            y: this.position.y });
	        } else {
	          this.emit("change", this.state);
	        }
	        this.render();
	      }
	    },
	    turnOn: {
	
	      /**
	      Turn the button's state to true.
	      @example button.turnOn();
	      */
	
	      value: function turnOn(emitting) {
	        this._state.on();
	        if (emitting !== false) {
	          if (this.mode === "aftertouch") {
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	          } else {
	            this.emit("change", this.state);
	          }
	        }
	        this.render();
	      }
	    },
	    turnOff: {
	
	      /**
	      Turn the button's state to false.
	      @example button.turnOff();
	      */
	
	      value: function turnOff(emitting) {
	        this._state.off();
	        if (emitting !== false) {
	          if (this.mode === "aftertouch") {
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	          } else {
	            this.emit("change", this.state);
	          }
	        }
	        this.render();
	      }
	    }
	  });
	
	  return ButtonTemplate;
	})(Interface);
	
	module.exports = ButtonTemplate;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var ButtonTemplate = __webpack_require__(17);
	
	/**
	* TextButton
	*
	* @description Text button
	*
	* @demo <span nexus-ui="textButton"></span>
	*
	* @example
	* var textbutton = new Nexus.TextButton('#target')
	*
	* @example
	* var textbutton = new Nexus.TextButton('#target',{
	*     'size': [150,50],
	*     'state': false,
	*     'text': 'Play',
	*     'alternateText': 'Stop'
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is a <i>string</i> of the text on the button at the moment it was clicked.
	*
	* @outputexample
	* textbutton.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*/
	
	var TextButton = (function (_ButtonTemplate) {
	  function TextButton() {
	    _classCallCheck(this, TextButton);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [150, 50],
	      state: false,
	      text: "Play"
	    };
	
	    _get(Object.getPrototypeOf(TextButton.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._text = this.settings.text;
	
	    if (this.settings.alternate) {
	      //TODO: Remove this conditional in a breaking-changes release
	      this.settings.alternateText = this.settings.alternate;
	      console.warn("'alternate' initiator is deprecated. Use 'alternateText' instead.");
	    }
	    this._alternateText = this.settings.alternateText;
	    this.mode = this.settings.alternateText ? "toggle" : "button";
	    this.init();
	    this.render();
	
	    this.state = this.settings.state;
	  }
	
	  _inherits(TextButton, _ButtonTemplate);
	
	  _createClass(TextButton, {
	    buildFrame: {
	      value: function buildFrame() {
	
	        this.element = document.createElement("div");
	        this.parent.appendChild(this.element);
	
	        this.textElement = document.createElement("div");
	        this.textElement.innerHTML = this._text;
	        this.element.appendChild(this.textElement);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {}
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.color = this.colors.dark;
	        this.render();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        var textsize = this.height / 3;
	        var textsize2 = this.width / (this._text.length + 2);
	        textsize = Math.min(textsize, textsize2);
	        if (this.alternateText) {
	          var textsize3 = this.width / (this.alternateText.length + 2);
	          textsize = Math.min(textsize, textsize3);
	        }
	        var styles = "width: " + this.width + "px;";
	        styles += "height: " + this.height + "px;";
	        styles += "padding: " + (this.height - textsize) / 2 + "px 0px;";
	        styles += "box-sizing: border-box;";
	        styles += "text-align: center;";
	        styles += "font-family: inherit;";
	        styles += "font-weight: 700;";
	        styles += "opacity: 1;";
	        styles += "font-size:" + textsize + "px;";
	        this.textElement.style.cssText = styles;
	        this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.element.style.backgroundColor = this.colors.fill;
	          this.textElement.style.color = this.colors.dark;
	          this.textElement.innerHTML = this._text;
	        } else {
	          this.element.style.backgroundColor = this.colors.accent;
	          this.textElement.style.color = this.colors.fill;
	          if (this.alternateText) {
	            this.textElement.innerHTML = this._alternateText;
	          } else {
	            this.textElement.innerHTML = this._text;
	          }
	        }
	      }
	    },
	    alternateText: {
	
	      /**
	      The text to display when the button is in its "on" state. If set, this puts the button in "toggle" mode.
	      @type {String}
	      */
	
	      get: function () {
	        return this._alternateText;
	      },
	      set: function (text) {
	        if (text) {
	          this.mode = "toggle";
	        } else {
	          this.mode = "button";
	        }
	        this._alternateText = text;
	        this.render();
	      }
	    },
	    text: {
	
	      /**
	      The text to display. (If .alternateText exists, then this .text will only be displayed when the button is in its "off" state.)
	      @type {String}
	      */
	
	      get: function () {
	        return this._text;
	      },
	      set: function (text) {
	        this._text = text;
	        this.sizeInterface();
	        this.render();
	      }
	    }
	  });
	
	  return TextButton;
	})(ButtonTemplate);
	
	module.exports = TextButton;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	//let svg = require('../util/svg');
	var Interface = __webpack_require__(6);
	var Button = __webpack_require__(16);
	
	/**
	 * RadioButton
	 *
	 * @description An array of buttons. By default, selecting one button will deselect all other buttons, but this can be customized using the API below.
	 *
	 * @demo <div nexus-ui="RadioButton"></div>
	 *
	 * @example
	 * var radiobutton = new Nexus.RadioButton('#target')
	 *
	 * @example
	 * var radiobutton = new Nexus.RadioButton('#target',{
	 *   'size': [120,25],
	 *   'numberOfButtons': 4,
	 *   'active': -1
	 * })
	 *
	 * @output
	 * change
	 * Fires any time the interface's value changes. <br>
	 * The event data an <i>integer</i>, the index of the button that is currently on. If no button is selected, the value will be -1.
	 *
	 * @outputexample
	 * radiobutton.on('change',function(v) {
	 *   console.log(v);
	 * })
	 *
	 */
	
	var RadioButton = (function (_Interface) {
	  function RadioButton() {
	    _classCallCheck(this, RadioButton);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [120, 25],
	      numberOfButtons: 4,
	      active: -1
	    };
	
	    _get(Object.getPrototypeOf(RadioButton.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.buttons = [];
	    this._numberOfButtons = this.settings.numberOfButtons;
	    this.active = this.settings.active;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(RadioButton, _Interface);
	
	  _createClass(RadioButton, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        for (var i = 0; i < this._numberOfButtons; i++) {
	          var container = document.createElement("span");
	
	          var button = new Button(container, {
	            mode: "toggle",
	            component: true
	          }, this.update.bind(this, i));
	
	          this.buttons.push(button);
	          this.element.appendChild(container);
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        var orientation = undefined;
	        if (this.width > this.height) {
	          orientation = "horizontal";
	        } else {
	          orientation = "vertical";
	        }
	
	        var buttonWidth = this.width / (orientation === "vertical" ? 1 : this._numberOfButtons);
	        var buttonHeight = this.height / (orientation === "vertical" ? this._numberOfButtons : 1);
	
	        for (var i = 0; i < this._numberOfButtons; i++) {
	          this.buttons[i].resize(buttonWidth, buttonHeight);
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        for (var i = 0; i < this._numberOfButtons; i++) {
	          this.buttons[i].colors = this.colors;
	          this.buttons[i].render();
	        }
	      }
	    },
	    update: {
	      value: function update(index) {
	        if (this.buttons[index].state) {
	          this.select(index);
	        } else {
	          this.deselect();
	        }
	        //  this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        for (var i = 0; i < this.buttons.length; i++) {
	          if (i === this.active) {
	            this.buttons[i].turnOn(false);
	          } else {
	            this.buttons[i].turnOff(false);
	          }
	        }
	      }
	    },
	    select: {
	
	      /**
	      Select one button and deselect all other buttons.
	      @param index {number} The index of the button to select
	      */
	
	      value: function select(index) {
	        if (index >= 0 && index < this.buttons.length) {
	          this.active = index;
	          this.emit("change", this.active);
	          this.render();
	        }
	      }
	    },
	    deselect: {
	
	      /**
	      Deselect all buttons.
	      */
	
	      value: function deselect() {
	        this.active = -1;
	        this.emit("change", this.active);
	        this.render();
	      }
	    },
	    numberOfButtons: {
	      get: function () {
	        return this._numberOfButtons;
	      },
	
	      /**
	       * Update how many buttons are in the interface
	       * @param  {number} buttons How many buttons are in the interface
	       */
	      set: function (buttons) {
	        this._numberOfButtons = buttons;
	        for (var i = 0; i < this.buttons.length; i++) {
	          this.buttons[i].destroy();
	        }
	        this.buttons = [];
	        //  for (let i=0;i<this.buttons.length;i++) {
	        //    this.buttons[i].destroy();
	        //  }
	        this.empty();
	        this.buildInterface();
	      }
	    }
	  });
	
	  return RadioButton;
	})(Interface);
	
	module.exports = RadioButton;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	var math = __webpack_require__(5);
	var util = __webpack_require__(8);
	
	/**
	* Number
	*
	* @description Number interface which is controllable by dragging or typing.
	*
	* @demo <span nexus-ui="number"></span>
	*
	* @example
	* var number = new Nexus.Number('#target')
	*
	* @example
	* var number = new Nexus.Number('#target',{
	*   'size': [60,30],
	*   'value': 0,
	*   'min': 0,
	*   'max': 20000,
	*   'step': 1
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is the number value of the interface.
	*
	* @outputexample
	* number.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Number = (function (_Interface) {
	  function Number() {
	    _classCallCheck(this, Number);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [60, 30],
	      value: 0,
	      min: 0,
	      max: 20000,
	      step: 1
	    };
	
	    _get(Object.getPrototypeOf(Number.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._value = new Step(this.settings.min, this.settings.max, this.settings.step, this.settings.value);
	
	    /*
	    Default: 2. How many decimal places to clip the number's visual rendering to. This does not affect number's actual value output -- for that, set the step property to .01, .1, or 1.
	    @type {number}
	    @example number.decimalPlaces = 2;
	    */
	    this.decimalPlaces = 2;
	    this.actual = 0;
	
	    this.max = this._value.max;
	
	    this.min = this._value.min;
	
	    this.step = this._value.step;
	
	    this.init();
	    this.render();
	    window.NUMBER = this;
	  }
	
	  _inherits(Number, _Interface);
	
	  _createClass(Number, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("input");
	        this.element.type = "text";
	
	        this.element.addEventListener("blur", (function () {
	          this.element.style.backgroundColor = this.colors.fill;
	          this.element.style.color = this.colors.dark;
	          if (this.element.value !== this.value) {
	            this.value = parseFloat(this.element.value);
	            this.render();
	            // console.log('blur', this.element.value, this.value)
	          }
	        }).bind(this));
	
	        util.setInputFilter(this.element, function (value) {
	          // console.log('input filter', value, /^-?\d*\.?\d*$/.test(value))
	          return /^-?\d*\.?\d*$/.test(value);
	        });
	
	        this.element.addEventListener("keydown", (function (e) {
	          if (e.which === 13) {
	            this.element.blur();
	            this.value = this.element.value;
	            // this.emit('change',this.value);
	            // console.log('emit:change:keydown', this.value, this._value)
	            this.render();
	          }
	        }).bind(this), true);
	
	        this.parent.appendChild(this.element);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this._minDimension = Math.min(this.width, this.height);
	
	        var styles = "width: " + this.width + "px;";
	        styles += "height: " + this.height + "px;";
	        styles += "background-color: #e7e7e7;";
	        styles += "color: #333;";
	        styles += "font-family: arial;";
	        styles += "font-weight: 500;";
	        styles += "font-size:" + this._minDimension / 2 + "px;";
	        //  styles += 'highlight: #d18;';
	        styles += "border: none;";
	        styles += "outline: none;";
	        styles += "padding: " + this._minDimension / 4 + "px " + this._minDimension / 4 + "px;";
	        styles += "box-sizing: border-box;";
	        styles += "userSelect: text;";
	        styles += "mozUserSelect: text;";
	        styles += "webkitUserSelect: text;";
	        this.element.style.cssText += styles;
	
	        // to add eventually
	        // var css = '#'+this.elementID+'::selection{ background-color: transparent }';
	
	        this.element.value = this.value;
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.backgroundColor = this.colors.fill;
	        this.element.style.color = this.colors.dark;
	      }
	    },
	    render: {
	      value: function render() {
	
	        this.element.value = math.prune(this.value, this.decimalPlaces);
	      }
	    },
	    click: {
	      value: function click() {
	        this.hasMoved = false;
	        this.element.readOnly = true;
	        this.actual = this.value;
	        this.initial = { y: this.mouse.y };
	        this.changeFactor = math.invert(this.mouse.x / this.width);
	      }
	    },
	    move: {
	      value: function move() {
	        this.hasMoved = true;
	        if (this.clicked) {
	
	          var newvalue = this.actual - (this.mouse.y - this.initial.y) * (math.clip(this.max - this.min, 0, 1000) / 200) * Math.pow(this.changeFactor, 2);
	          this.value = newvalue;
	
	          this.render();
	          if (this._value.changed) {}
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        if (!this.hasMoved) {
	          this.element.readOnly = false;
	          this.element.focus();
	          this.element.setSelectionRange(0, this.element.value.length);
	          this.element.style.backgroundColor = this.colors.accent;
	          this.element.style.color = this.colors.light;
	        } else {
	          document.body.focus();
	        }
	      }
	    },
	    link: {
	
	      /**
	      Connect this number interface to a dial or slider
	      @param {Interface} element Element to connect to.
	      @example number.link(slider)
	      */
	
	      value: function link(destination) {
	        var _this = this;
	
	        this.min = destination.min;
	        this.max = destination.max;
	        this.step = destination.step;
	        destination.on("change", function (v) {
	          _this.passiveUpdate(v);
	        });
	        this.on("change", function (v) {
	          destination.value = v;
	        });
	        this.value = destination.value;
	        /*  return {
	            listener1: listener1,
	            listener2: listener2,
	            destroy: () => {
	              listener1.remove() (or similar)
	              listener2.remove() (or similar)
	            }
	          } */
	      }
	    },
	    passiveUpdate: {
	      value: function passiveUpdate(v) {
	        this._value.update(v);
	        this.render();
	      }
	    },
	    format: {
	      value: function format() {}
	    },
	    value: {
	
	      /**
	      The interface's current value. If set manually, will update the interface and trigger the output event.
	      @type {number}
	      @example number.value = 10;
	      */
	
	      get: function () {
	        return this._value.value;
	      },
	      set: function (v) {
	        if (this.step % 1 === 0) {} else {}
	
	        this._value.update(v);
	
	        if (this._value.changed) {
	          // console.log('emit:change:set', this.value, v, this.step, 'changed',this._value.changed)
	          this.emit("change", this.value);
	        }
	
	        this.render();
	      }
	    },
	    min: {
	
	      /**
	      Lower limit of the number's output range
	      @type {number}
	      @example number.min = 1000;
	      */
	
	      get: function () {
	        return this._value.min;
	      },
	      set: function (v) {
	        this._value.min = v;
	      }
	    },
	    max: {
	
	      /**
	      Upper limit of the number's output range
	      @type {number}
	      @example number.max = 1000;
	      */
	
	      get: function () {
	        return this._value.max;
	      },
	      set: function (v) {
	        this._value.max = v;
	      }
	    },
	    step: {
	
	      /**
	      The increment that the number's value changes by.
	      @type {number}
	      @example number.step = 5;
	      */
	
	      get: function () {
	        return this._value.step;
	      },
	      set: function (v) {
	        this._value.step = v;
	      }
	    }
	  });
	
	  return Number;
	})(Interface);
	
	module.exports = Number;
	
	// this.emit('change',this.value);
	// console.log('emit:change:move', this.value, this.step)

	// console.log('int step', this.step, this.value, v)

	// console.log('float step', this.step, this.value, v)

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Interface = __webpack_require__(6);
	
	/**
	* Select
	*
	* @description Dropdown menu
	*
	* @demo <span nexus-ui="select"></span>
	*
	* @example
	* var select = new Nexus.Select('#target')
	*
	* @example
	* var select = new Nexus.Select('#target',{
	*   'size': [100,30],
	*   'options': ['default','options']
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is an object containing the text value of the selected option, as well as the numeric index of the selection.
	*
	* @outputexample
	* select.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Select = (function (_Interface) {
	  function Select() {
	    _classCallCheck(this, Select);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [100, 30],
	      options: ["default", "options"]
	    };
	
	    _get(Object.getPrototypeOf(Select.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._selectedIndex = -1;
	    this._value = false;
	
	    this._options = this.settings.options;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Select, _Interface);
	
	  _createClass(Select, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("select");
	        this.element.style.fontSize = this.height / 2 + "px";
	        this.element.style.outline = "none";
	        this.element.style.highlight = "none";
	        this.element.style.width = this.width + "px";
	        this.element.style.height = this.height + "px";
	
	        this.boundRender = this.render.bind(this);
	
	        this.element.addEventListener("change", this.boundRender);
	
	        this.parent.appendChild(this.element);
	      }
	    },
	    attachListeners: {
	      value: function attachListeners() {}
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.defineOptions();
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.backgroundColor = this.colors.fill;
	        this.element.style.color = this.colors.dark;
	        this.element.style.border = "solid 0px " + this.colors.mediumLight;
	      }
	    },
	    render: {
	      value: function render() {
	
	        this._value = this.element.options[this.element.selectedIndex].text;
	        this._selectedIndex = this.element.selectedIndex;
	        this.emit("change", {
	          value: this._value,
	          index: this._selectedIndex
	        });
	      }
	    },
	    click: {
	      value: function click() {}
	    },
	    move: {
	      value: function move() {}
	    },
	    release: {
	      value: function release() {}
	    },
	    defineOptions: {
	
	      /**
	       * Update the list of options. This removes all existing options and creates a new list of options.
	       * @param  {array} options New array of options
	       */
	
	      value: function defineOptions(options) {
	
	        /*  function removeOptions(selectbox)
	          {
	              var i;
	              for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
	              {
	                  selectbox.remove(i);
	              }
	          }
	          //using the function:
	          removeOptions(document.getElementById("mySelectObject")); */
	
	        if (options) {
	          this._options = options;
	        }
	
	        for (var i = this.element.options.length - 1; i >= 0; i--) {
	          this.element.remove(i);
	        }
	
	        for (var i = 0; i < this._options.length; i++) {
	          this.element.options.add(new Option(this._options[i], i));
	        }
	      }
	    },
	    value: {
	
	      /**
	      The text of the option that is currently selected. If set, will update the interface and trigger the output event.
	      @type {String}
	      @example select.value = "sawtooth";
	      */
	
	      get: function () {
	        return this._value;
	      },
	      set: function (v) {
	        this._value = v;
	        for (var i = 0; i < this.element.options.length; i++) {
	          if (v === this.element.options[i].text) {
	            this.selectedIndex = i;
	            break;
	          }
	        }
	      }
	    },
	    selectedIndex: {
	
	      /**
	      The numeric index of the option that is currently selected. If set, will update the interface and trigger the output event.
	      @type {number}
	      @example select.selectedIndex = 2;
	      */
	
	      get: function () {
	        return this._selectedIndex;
	      },
	      set: function (v) {
	        this._selectedIndex = v;
	        this.element.selectedIndex = v;
	        this.render();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {
	        this.element.removeEventListener("change", this.boundRender);
	      }
	    }
	  });
	
	  return Select;
	})(Interface);
	
	module.exports = Select;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	* Dial
	*
	*
	* @description Dial with radial or linear interaction.
	*
	* @demo <span nexus-ui="dial"></span>
	*
	* @example
	* var dial = new Nexus.Dial('#target')
	*
	* @example
	* var dial = new Nexus.Dial('#target',{
	*   'size': [75,75],
	*   'interaction': 'radial', // "radial", "vertical", or "horizontal"
	*   'mode': 'relative', // "absolute" or "relative"
	*   'min': 0,
	*   'max': 1,
	*   'step': 0,
	*   'value': 0
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is the number value of the interface.
	*
	* @outputexample
	* dial.on('change',function(v) {
	*   console.log(v);
	* })
	*
	* @tutorial
	* Dial
	* ygGMxq
	*
	*/
	
	var Dial = (function (_Interface) {
	  function Dial() {
	    _classCallCheck(this, Dial);
	
	    var options = ["min", "max", "value"];
	
	    var defaults = {
	      size: [75, 75],
	      interaction: "radial", // radial, vertical, horizontal
	      mode: "relative", // absolute, relative
	      min: 0,
	      max: 1,
	      step: 0,
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(Dial.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.interaction = this.settings.interaction;
	
	    this._value = new Step(this.settings.min, this.settings.max, this.settings.step, this.settings.value);
	
	    this.position = new Interaction.Handle(this.settings.mode, this.interaction, [0, this.width], [this.height, 0]);
	
	    this.init();
	
	    this.value = this._value.value;
	
	    this.position.value = this._value.normalized;
	
	    this.previousAngle = false;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(Dial, _Interface);
	
	  _createClass(Dial, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.background = svg.create("circle");
	        this.screw = svg.create("circle");
	        this.handle = svg.create("path");
	        this.handle2 = svg.create("path");
	        this.handleFill = svg.create("path");
	        this.handle2Fill = svg.create("path");
	        this.handleLine = svg.create("path");
	
	        this.element.appendChild(this.background);
	        this.element.appendChild(this.handle);
	        this.element.appendChild(this.handle2);
	        this.element.appendChild(this.handleFill);
	        this.element.appendChild(this.handle2Fill);
	        this.element.appendChild(this.handleLine);
	        this.element.appendChild(this.screw);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.position.resize([0, this.width], [this.height, 0]);
	
	        var center = {
	          x: this.width / 2,
	          y: this.height / 2
	        };
	
	        var diameter = Math.min(this.width, this.height);
	
	        this.background.setAttribute("cx", center.x);
	        this.background.setAttribute("cy", center.y);
	        this.background.setAttribute("r", diameter / 2 - diameter / 40);
	
	        this.screw.setAttribute("cx", center.x);
	        this.screw.setAttribute("cy", center.y);
	        this.screw.setAttribute("r", diameter / 12);
	
	        var value = this.value;
	
	        var handlePoints = {
	          start: Math.PI * 1.5,
	          end: math.clip(math.scale(value, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	        };
	        var handle2Points = {
	          start: Math.PI * 2.5,
	          end: math.clip(math.scale(value, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	        };
	
	        var handlePath = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handlePoints.start, handlePoints.end);
	        var handle2Path = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handle2Points.start, handle2Points.end);
	
	        this.handle.setAttribute("d", handlePath);
	        this.handle.setAttribute("stroke-width", diameter / 20);
	        this.handle.setAttribute("fill", "none");
	
	        this.handle2.setAttribute("d", handle2Path);
	        this.handle2.setAttribute("stroke-width", diameter / 20);
	        this.handle2.setAttribute("fill", "none");
	
	        handlePath += " L " + center.x + " " + center.y;
	
	        this.handleFill.setAttribute("d", handlePath);
	        this.handleFill.setAttribute("fill-opacity", "0.3");
	
	        handle2Path += " L " + center.x + " " + center.y;
	
	        this.handle2Fill.setAttribute("d", handle2Path);
	        this.handle2Fill.setAttribute("fill-opacity", "0.3");
	
	        var arcEndingA = undefined;
	        if (value < 0.5) {
	          arcEndingA = handlePoints.end;
	        } else {
	          arcEndingA = handle2Points.end;
	        }
	
	        var arcEndingX = center.x + Math.cos(arcEndingA) * (diameter / 2);
	        var arcEndingY = center.y + Math.sin(arcEndingA) * (diameter / 2) * -1;
	
	        this.handleLine.setAttribute("d", "M " + center.x + " " + center.y + " L " + arcEndingX + " " + arcEndingY);
	        this.handleLine.setAttribute("stroke-width", diameter / 20);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.background.setAttribute("fill", this.colors.fill);
	        this.screw.setAttribute("fill", this.colors.accent);
	        this.handle.setAttribute("stroke", this.colors.accent);
	        this.handle2.setAttribute("stroke", this.colors.accent);
	        this.handleFill.setAttribute("fill", this.colors.accent);
	        this.handle2Fill.setAttribute("fill", this.colors.accent);
	        this.handleLine.setAttribute("stroke", this.colors.accent);
	      }
	    },
	    render: {
	      value: function render() {
	        var value = this._value.normalized;
	
	        var center = {
	          x: this.width / 2,
	          y: this.height / 2
	        };
	
	        var diameter = Math.min(this.width, this.height);
	
	        var handlePoints = {
	          start: Math.PI * 1.5,
	          end: math.clip(math.scale(value, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	        };
	        var handle2Points = {
	          start: Math.PI * 2.5,
	          end: math.clip(math.scale(value, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	        };
	
	        var handlePath = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handlePoints.start, handlePoints.end);
	        var handle2Path = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handle2Points.start, handle2Points.end);
	
	        this.handle.setAttribute("d", handlePath);
	        this.handle2.setAttribute("d", handle2Path);
	
	        handlePath += " L " + center.x + " " + center.y;
	
	        this.handleFill.setAttribute("d", handlePath);
	
	        handle2Path += " L " + center.x + " " + center.y;
	
	        this.handle2Fill.setAttribute("d", handle2Path);
	
	        var arcEndingA = undefined;
	        if (value <= 0.5) {
	          arcEndingA = handlePoints.end;
	        } else {
	          arcEndingA = handle2Points.end;
	        }
	
	        var arcEndingX = center.x + Math.cos(arcEndingA) * (diameter / 2);
	        var arcEndingY = center.y + Math.sin(arcEndingA) * (diameter / 2) * -1;
	
	        this.handleLine.setAttribute("d", "M " + center.x + " " + center.y + " L " + arcEndingX + " " + arcEndingY);
	      }
	    },
	    click: {
	      value: function click() {
	        if (this.mode === "relative") {
	          this.previousAngle = false;
	        }
	        this.position.anchor = this.mouse;
	        this.position.value = this._value.normalized;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	
	          this.position.update(this.mouse);
	
	          var angle = this.position.value * Math.PI * 2;
	
	          if (angle < 0) {
	            angle += Math.PI * 2;
	          }
	
	          if (this.mode === "relative") {
	            if (this.previousAngle !== false && Math.abs(this.previousAngle - angle) > 2) {
	              if (this.previousAngle > 3) {
	                angle = Math.PI * 2;
	              } else {
	                angle = 0;
	              }
	            }
	          } /* else {
	            if (this.previousAngle !== false && Math.abs(this.previousAngle - angle) > 2) {
	              if (this.previousAngle > 3) {
	                angle = Math.PI*2;
	              } else {
	                angle = 0;
	              }
	            }
	            } */
	          this.previousAngle = angle;
	
	          var realValue = angle / (Math.PI * 2);
	
	          this.value = this._value.updateNormal(realValue);
	
	          if (this.mode === "relative") {
	            this.position.value = realValue;
	          }
	
	          this.emit("change", this._value.value);
	
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {}
	    },
	    value: {
	
	      /*
	      Dial's value. When set, it will automatically be adjust to fit min/max/step settings of the interface.
	      @type {number}
	      @example dial.value = 10;
	       get value() {
	        return this._value.value;
	      }
	       set value(value) {
	        this._value.update(value);
	        this.emit('change',this.value);
	        this.render();
	      }
	      */
	
	      /**
	      Dial's value. When set, it will automatically be adjust to fit min/max/step settings of the interface.
	      @type {number}
	      @example dial.value = 10;
	      */
	
	      get: function () {
	        return this._value.value;
	      },
	      set: function (v) {
	        this._value.update(v);
	        this.position.value = this._value.normalized;
	        this.emit("change", this._value.value);
	        this.render();
	      }
	    },
	    min: {
	
	      /**
	      Lower limit of the dial's output range
	      @type {number}
	      @example dial.min = 1000;
	      */
	
	      get: function () {
	        return this._value.min;
	      },
	      set: function (v) {
	        this._value.min = v;
	      }
	    },
	    max: {
	
	      /**
	      Upper limit of the dial's output range
	      @type {number}
	      @example dial.max = 1000;
	      */
	
	      get: function () {
	        return this._value.max;
	      },
	      set: function (v) {
	        this._value.max = v;
	      }
	    },
	    step: {
	
	      /**
	      The increment that the dial's value changes by.
	      @type {number}
	      @example dial.step = 5;
	      */
	
	      get: function () {
	        return this._value.step;
	      },
	      set: function (v) {
	        this._value.step = v;
	      }
	    },
	    mode: {
	
	      /**
	      Absolute mode (dial's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "relative".
	      @type {string}
	      @example dial.mode = "relative";
	      */
	
	      get: function () {
	        return this.position.mode;
	      },
	      set: function (v) {
	        this.position.mode = v;
	      }
	    },
	    normalized: {
	
	      /**
	      Normalized value of the dial.
	      @type {number}
	      @example dial.normalized = 0.5;
	      */
	
	      get: function () {
	        return this._value.normalized;
	      },
	      set: function (v) {
	        this._value.updateNormal(v);
	        this.emit("change", this.value);
	      }
	    }
	  });
	
	  return Dial;
	})(Interface);
	
	module.exports = Dial;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	var ButtonTemplate = __webpack_require__(17);
	var touch = __webpack_require__(9);
	
	var PianoKey = (function (_ButtonTemplate) {
	  function PianoKey() {
	    _classCallCheck(this, PianoKey);
	
	    var options = ["value", "note", "color"];
	
	    var defaults = {
	      size: [80, 80],
	      target: false,
	      mode: "button",
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(PianoKey.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.note = this.settings.note;
	    this.color = this.settings.color;
	
	    this.colors = {
	      w: "#fff",
	      b: "#666" };
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(PianoKey, _ButtonTemplate);
	
	  _createClass(PianoKey, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = svg.create("svg");
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.pad = svg.create("rect");
	
	        this.element.appendChild(this.pad);
	
	        this.interactionTarget = this.pad;
	
	        /* events */
	
	        if (!touch.exists) {
	
	          this.click = function () {
	            //  console.log('click');
	            _this.piano.interacting = true;
	            _this.piano.paintbrush = !_this.state;
	            _this.down(_this.piano.paintbrush);
	          };
	
	          this.pad.addEventListener("mouseover", function () {
	            if (_this.piano.interacting) {
	              //    console.log('mouseover');
	              _this.down(_this.piano.paintbrush);
	            }
	          });
	
	          this.move = function () {
	            if (_this.piano.interacting) {
	              //  console.log('move');
	              _this.bend();
	            }
	          };
	
	          this.release = function () {
	            _this.piano.interacting = false;
	            //  console.log('release');
	            //  this.up();
	          };
	          this.pad.addEventListener("mouseup", function () {
	            if (_this.piano.interacting) {
	              //  console.log('mouseup');
	              _this.up();
	            }
	          });
	          this.pad.addEventListener("mouseout", function () {
	            if (_this.piano.interacting) {
	              //  console.log('mouseout');
	              _this.up();
	            }
	          });
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        //let radius = Math.min(this.width,this.height) / 5;
	        var radius = 0;
	
	        this.pad.setAttribute("x", 0.5);
	        this.pad.setAttribute("y", 0.5);
	        if (this.width > 2) {
	          this.pad.setAttribute("width", this.width - 1);
	        } else {
	          this.pad.setAttribute("width", this.width);
	        }
	        if (this.height > 2) {
	          this.pad.setAttribute("height", this.height);
	        } else {
	          this.pad.setAttribute("height", this.height);
	        }
	        this.pad.setAttribute("rx", radius);
	        this.pad.setAttribute("ry", radius);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", this.colors[this.color]);
	        } else {
	          this.pad.setAttribute("fill", this.colors.accent);
	        }
	      }
	    }
	  });
	
	  return PianoKey;
	})(ButtonTemplate);
	
	/**
	* Piano
	*
	* @description Piano keyboard interface
	*
	* @demo <div nexus-ui="piano"></div>
	*
	* @example
	* var piano = new Nexus.Piano('#target')
	*
	* @example
	* var piano = new Nexus.Piano('#target',{
	*     'size': [500,125],
	*     'mode': 'button',  // 'button', 'toggle', or 'impulse'
	*     'lowNote': 24,
	*     'highNote': 60
	* })
	*
	* @output
	* change
	* Fires any time a new key is pressed or released <br>
	* The event data is an object containing <i>note</i> and <i>state</i> properties.
	*
	* @outputexample
	* piano.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*/
	
	var Piano = (function (_Interface) {
	  function Piano() {
	    _classCallCheck(this, Piano);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [500, 125],
	      lowNote: 24,
	      highNote: 60,
	      mode: "button"
	    };
	
	    _get(Object.getPrototypeOf(Piano.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.keyPattern = ["w", "b", "w", "b", "w", "w", "b", "w", "b", "w", "b", "w"];
	
	    this.paintbrush = false;
	
	    this.mode = this.settings.mode;
	
	    this.range = {
	      low: this.settings.lowNote,
	      high: this.settings.highNote
	    };
	
	    this.range.size = this.range.high - this.range.low + 1;
	
	    this.keys = [];
	
	    this.toggleTo = false;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Piano, _Interface);
	
	  _createClass(Piano, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.element.style.position = "relative";
	        this.element.style.borderRadius = "0px";
	        this.element.style.display = "block";
	        this.element.style.width = "100%";
	        this.element.style.height = "100%";
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.keys = [];
	
	        for (var i = 0; i < this.range.size; i++) {
	
	          var container = document.createElement("span");
	          var scaleIndex = (i + this.range.low) % this.keyPattern.length;
	
	          var key = new PianoKey(container, {
	            component: true,
	            note: i + this.range.low,
	            color: this.keyPattern[scaleIndex],
	            mode: this.mode
	          }, this.keyChange.bind(this, i + this.range.low));
	
	          key.piano = this;
	
	          if (touch.exists) {
	            key.pad.index = i;
	            key.preClick = key.preMove = key.preRelease = function () {};
	            key.click = key.move = key.release = function () {};
	            key.preTouch = key.preTouchMove = key.preTouchRelease = function () {};
	            key.touch = key.touchMove = key.touchRelease = function () {};
	          }
	
	          this.keys.push(key);
	          this.element.appendChild(container);
	        }
	        if (touch.exists) {
	          this.addTouchListeners();
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        var keyX = 0;
	
	        var keyPositions = [];
	
	        for (var i = 0; i < this.range.size; i++) {
	
	          keyPositions.push(keyX);
	
	          var scaleIndex = (i + this.range.low) % this.keyPattern.length;
	          var nextScaleIndex = (i + 1 + this.range.low) % this.keyPattern.length;
	          if (i + 1 + this.range.low >= this.range.high) {
	            keyX += 1;
	          } else if (this.keyPattern[scaleIndex] === "w" && this.keyPattern[nextScaleIndex] === "w") {
	            keyX += 1;
	          } else {
	            keyX += 0.5;
	          }
	        }
	        var keysWide = keyX;
	
	        //  let padding = this.width / 120;
	        var padding = 1;
	        var buttonWidth = (this.width - padding * 2) / keysWide;
	        var buttonHeight = (this.height - padding * 2) / 2;
	
	        for (var i = 0; i < this.keys.length; i++) {
	
	          var container = this.keys[i].parent;
	          container.style.position = "absolute";
	          container.style.left = keyPositions[i] * buttonWidth + padding + "px";
	          if (this.keys[i].color === "w") {
	            container.style.top = padding + "px";
	            this.keys[i].resize(buttonWidth, buttonHeight * 2);
	          } else {
	            container.style.zIndex = 1;
	            container.style.top = padding + "px";
	            this.keys[i].resize(buttonWidth, buttonHeight * 1.1);
	          }
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        // Piano keys don't actually have a stroke border
	        // They have space between them, which shows the Piano bg color
	        this.element.style.backgroundColor = this.colors.mediumLight;
	
	        for (var i = 0; i < this.keys.length; i++) {
	          this.keys[i].colors = {
	            w: this.colors.light,
	            b: this.colors.dark,
	            accent: this.colors.accent,
	            border: this.colors.mediumLight
	          };
	          this.keys[i].colorInterface();
	          this.keys[i].render();
	        }
	      }
	    },
	    keyChange: {
	      value: function keyChange(note, on) {
	        // emit data for any key turning on/off
	        // "note" is the note value
	        // "on" is a boolean whether it is on or off
	        // in aftertouch mode, "on: is an object with state/x/y properties
	        var data = {
	          note: note
	        };
	        if (typeof on === "object") {
	          data.state = on.state;
	          //  data.x = on.x
	          //  data.y = on.y
	        } else {
	          data.state = on;
	        }
	        this.emit("change", data);
	      }
	    },
	    render: {
	
	      /* drag(note,on) {
	        this.emit('change',{
	          note: note,
	          state: on
	        });
	      } */
	
	      value: function render() {}
	    },
	    addTouchListeners: {
	      value: function addTouchListeners() {
	        this.preClick = this.preMove = this.preRelease = function () {};
	        this.click = this.move = this.release = function () {};
	        this.preTouch = this.preTouchMove = this.preTouchRelease = function () {};
	        this.touch = this.touchMove = this.touchRelease = function () {};
	
	        var allActiveTouches = {};
	        var keys = this.keys;
	
	        function cloneTouch(touch) {
	          return { identifier: touch.identifier, clientX: touch.clientX, clientY: touch.clientY };
	        }
	
	        function updateKeyState() {
	          var allActiveKeys = {};
	
	          // Check/set "key-down" status for all keys that are currently touched.
	          Object.keys(allActiveTouches).forEach(function (id) {
	            var touch = allActiveTouches[id];
	            var el = document.elementFromPoint(touch.clientX, touch.clientY);
	            var key = el ? keys[el.index] : null;
	            if (key) {
	              allActiveKeys[el.index] = id;
	              if (!key.state) {
	                key.down();
	              }
	            } else {
	              delete allActiveTouches[id];
	            }
	          });
	
	          // Set "key-up" status for all keys that are untouched.
	          keys.forEach(function (key) {
	            if (key.state && !allActiveKeys[key.pad.index]) {
	              key.up();
	            }
	          });
	        }
	
	        function handleTouchStartAndMove(e) {
	          e.preventDefault();
	          e.stopPropagation();
	          for (var i = 0; i < e.changedTouches.length; i++) {
	            var _touch = e.changedTouches[i];
	            allActiveTouches[_touch.identifier] = cloneTouch(_touch);
	          }
	          updateKeyState();
	        }
	
	        function handleTouchEnd(e) {
	          e.preventDefault();
	          e.stopPropagation();
	          for (var i = 0; i < e.changedTouches.length; i++) {
	            var _touch = e.changedTouches[i];
	            delete allActiveTouches[_touch.identifier];
	          }
	          updateKeyState();
	        }
	
	        this.element.addEventListener("touchstart", handleTouchStartAndMove);
	        this.element.addEventListener("touchmove", handleTouchStartAndMove);
	        this.element.addEventListener("touchend", handleTouchEnd);
	      }
	    },
	    setRange: {
	
	      /**
	      Define the pitch range (lowest and highest note) of the piano keyboard.
	      @param low {number} MIDI note value of the lowest note on the keyboard
	      @param high {number} MIDI note value of the highest note on the keyboard
	      */
	
	      value: function setRange(low, high) {
	        this.range.low = low;
	        this.range.high = high;
	        this.empty();
	        this.buildInterface();
	      }
	    },
	    toggleKey: {
	
	      /**
	      Turn a key on or off using its MIDI note value;
	      @param note {number} MIDI note value of the key to change
	      @param on {boolean} Whether the note should turn on or off
	      */
	
	      value: function toggleKey(note, on) {
	        this.keys[note - this.range.low].flip(on);
	      }
	    },
	    toggleIndex: {
	
	      /**
	      Turn a key on or off using its key index on the piano interface.
	      @param index {number} Index of the key to change
	      @param on {boolean} Whether the note should turn on or off
	      */
	
	      value: function toggleIndex(index, on) {
	        this.keys[index].flip(on);
	      }
	    }
	  });
	
	  return Piano;
	})(Interface);
	
	module.exports = Piano;
	
	// loop through and render the keys?

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var dom = __webpack_require__(7);
	var Interface = __webpack_require__(6);
	var ButtonTemplate = __webpack_require__(17);
	var MatrixModel = __webpack_require__(25);
	var CounterModel = __webpack_require__(28);
	var Interval = __webpack_require__(29);
	var touch = __webpack_require__(9);
	
	var MatrixCell = (function (_ButtonTemplate) {
	  function MatrixCell() {
	    _classCallCheck(this, MatrixCell);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [80, 80],
	      target: false,
	      mode: "toggle",
	      value: 0,
	      paddingRow: 2,
	      paddingColumn: 2
	    };
	
	    _get(Object.getPrototypeOf(MatrixCell.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.index = this.settings.index;
	    this.row = this.settings.row;
	    this.column = this.settings.column;
	
	    this.matrix = this.settings.matrix;
	
	    /**
	     *  Amount of row padding
	     *  @type {number}
	     */
	    this.paddingRow = this.settings.paddingRow || defaults.paddingRow;
	
	    /**
	     *  Amount of column padding
	     *  @type {number}
	     */
	    this.paddingColumn = this.settings.paddingColumn || defaults.paddingColumn;
	
	    this.interacting = false;
	    this.paintbrush = false;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(MatrixCell, _ButtonTemplate);
	
	  _createClass(MatrixCell, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = svg.create("svg");
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.element.style.top = "0px";
	        this.element.style.left = "0px";
	        this.element.style.position = "absolute";
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.pad = svg.create("rect");
	        this.element.appendChild(this.pad);
	
	        this.interactionTarget = this.pad;
	
	        /* events */
	
	        if (!touch.exists) {
	          this.click = function () {
	            _this.matrix.interacting = true;
	            _this.matrix.paintbrush = !_this.state;
	            _this.down(_this.matrix.paintbrush);
	          };
	          this.pad.addEventListener("mouseover", function () {
	            if (_this.matrix.interacting) {
	              _this.down(_this.matrix.paintbrush);
	            }
	          });
	
	          this.move = function () {};
	          this.pad.addEventListener("mousemove", function (e) {
	            if (_this.matrix.interacting) {
	              if (!_this.offset) {
	                _this.offset = dom.findPosition(_this.element);
	              }
	              _this.mouse = dom.locateMouse(e, _this.offset);
	              _this.bend();
	            }
	          });
	
	          this.release = function () {
	            _this.matrix.interacting = false;
	          };
	          this.pad.addEventListener("mouseup", function () {
	            if (_this.matrix.interacting) {
	              _this.up();
	            }
	          });
	          this.pad.addEventListener("mouseout", function () {
	            if (_this.matrix.interacting) {
	              _this.up();
	            }
	          });
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.pad.setAttribute("x", this.paddingColumn / 2);
	        this.pad.setAttribute("y", this.paddingRow / 2);
	        if (this.width > 2) {
	          this.pad.setAttribute("width", this.width - this.paddingColumn);
	        } else {
	          this.pad.setAttribute("width", this.width);
	        }
	        if (this.height > 2) {
	          this.pad.setAttribute("height", this.height - this.paddingRow);
	        } else {
	          this.pad.setAttribute("height", this.height);
	        }
	        this.pad.setAttribute("fill", this.matrix.colors.fill);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", this.matrix.colors.fill);
	        } else {
	          this.pad.setAttribute("fill", this.matrix.colors.accent);
	        }
	      }
	    }
	  });
	
	  return MatrixCell;
	})(ButtonTemplate);
	
	/**
	 * Sequencer
	 *
	 * @description Grid of buttons with built-in step sequencer.
	 *
	 * @demo <div nexus-ui="sequencer" style="width:400px;height:200px;"></div>
	 *
	 * @example
	 * var sequencer = new Nexus.Sequencer('#target')
	 *
	 * @example
	 * var sequencer = new Nexus.Sequencer('#target',{
	 *  'size': [400,200],
	 *  'mode': 'toggle',
	 *  'rows': 5,
	 *  'columns': 10,
	 *  'paddingRow': 10,
	 *  'paddingColumn': 20
	 *})
	 *
	 * @output
	 * change
	 * Fires whenever a value is received. For example, when clicking a cell from off to on. <br>
	 * The event data is an object containing <i>row</i> (number), <i>column</i> (number), and <i>state</i> (boolean) properties.
	 *
	 * @outputexample
	 * sequencer.on('change',function(v) {
	 *   console.log(v);
	 * })
	 *
	 * @output
	 * step
	 * Fires any time the sequencer steps to the next column, in sequece mode. <br>
	 * The event data is an <i>array</i> containing all values in the column, <i>bottom row first</i>.
	 *
	 * @outputexample
	 * sequencer.on('step',function(v) {
	 *   console.log(v);
	 * })
	 */
	
	var Sequencer = (function (_Interface) {
	  function Sequencer() {
	    _classCallCheck(this, Sequencer);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [400, 200],
	      mode: "toggle",
	      rows: 5,
	      columns: 10
	    };
	
	    _get(Object.getPrototypeOf(Sequencer.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.active = -1;
	
	    /**
	     * Button interaction mode: see Button
	     * @type {string}
	     * @example button.mode = 'toggle';
	     */
	    this.mode = this.settings.mode;
	
	    /**
	     * The interval object which controls timing and sequence scheduling.
	     * @type {interval}
	     */
	    this.interval = new Interval(200, function () {}, false); // jshint ignore:line
	
	    /**
	     * A Matrix model containing methods for manipulating the sequencer's array of values. To learn how to manipulate the matrix, read about the matrix model.
	     * @type {matrix}
	     */
	    this.matrix = new MatrixModel(this.settings.rows, this.settings.columns);
	    this.matrix.ui = this;
	
	    /**
	     * A Counter model which the sequencer steps through. For example, you could use this model to step through the sequencer in reverse, randomly, or in a drunk walk.
	     * @type {counter}
	     */
	    this.stepper = new CounterModel(0, this.columns);
	
	    this.paddingRow = this.settings.paddingRow;
	    this.paddingColumn = this.settings.paddingColumn;
	
	    this.init();
	  }
	
	  _inherits(Sequencer, _Interface);
	
	  _createClass(Sequencer, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.element.style.position = "relative";
	        this.element.style.display = "block";
	        this.element.style.width = "100%";
	        this.element.style.height = "100%";
	        this.parent.appendChild(this.element);
	        if (touch.exists) {
	          this.addTouchListeners();
	        }
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        this.cells = [];
	        for (var i = 0; i < this.matrix.length; i++) {
	          var _location = this.matrix.locate(i);
	          // returns {row,col}
	
	          var container = document.createElement("span");
	          container.style.position = "absolute";
	
	          var cell = new MatrixCell(container, {
	            component: true,
	            index: i,
	            row: _location.row,
	            column: _location.column,
	            mode: this.mode,
	            matrix: this,
	            paddingRow: this.paddingRow,
	            paddingColumn: this.paddingColumn
	          }, this.keyChange.bind(this, i));
	
	          //  cell.matrix = this;
	          if (touch.exists) {
	            cell.pad.index = i;
	            cell.preClick = cell.preMove = cell.preRelease = function () {};
	            cell.click = cell.move = cell.release = function () {};
	            cell.preTouch = cell.preTouchMove = cell.preTouchRelease = function () {};
	            cell.touch = cell.touchMove = cell.touchRelease = function () {};
	          }
	
	          this.cells.push(cell);
	          this.element.appendChild(container);
	        }
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        var cellWidth = this.width / this.columns;
	        var cellHeight = this.height / this.rows;
	
	        for (var i = 0; i < this.cells.length; i++) {
	          var container = this.cells[i].parent;
	          container.style.left = this.cells[i].column * cellWidth + "px";
	          container.style.top = this.cells[i].row * cellHeight + "px";
	          this.cells[i].resize(cellWidth, cellHeight);
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        for (var i = 0; i < this.cells.length; i++) {
	          this.cells[i].render();
	        }
	      }
	    },
	    update: {
	      value: function update() {
	        var _this = this;
	
	        //  console.log("updating...")
	        //on = on || false;
	        this.matrix.iterate(function (r, c, i) {
	          //  console.log(this.matrix.pattern[r][c], this.cells[i].state);
	          if (_this.matrix.pattern[r][c] !== _this.cells[i].state) {
	            if (_this.matrix.pattern[r][c] > 0) {
	              _this.cells[i].turnOn();
	            } else {
	              _this.cells[i].turnOff();
	            }
	          }
	        });
	      }
	    },
	    keyChange: {
	
	      // update => cell.turnOn => cell.emit => keyChange (seq.emit) => matrix.set.cell => update
	      //
	      // interaction => keyChange => matrix.set.cell => update => cell.turnOn
	      //                                             => emit
	      //
	      // set.cell => update => needs to emit.
	
	      value: function keyChange(note, on) {
	        // emit data for any key turning on/off
	        // i is the note index
	        // v is whether it is on or off
	        var cell = this.matrix.locate(note);
	        //  this.matrix.set.cell(cell.column,cell.row,on);
	        this.matrix.pattern[cell.row][cell.column] = on;
	        var data = {
	          row: cell.row,
	          column: cell.column,
	          state: on
	        };
	        this.emit("change", data);
	      }
	    },
	    render: {
	      value: function render() {
	        var _this = this;
	
	        if (this.stepper.value >= 0) {
	          this.matrix.iterate(function (r, c, i) {
	            if (c === _this.stepper.value) {
	              _this.cells[i].pad.setAttribute("stroke", _this.colors.mediumLight);
	              _this.cells[i].pad.setAttribute("stroke-width", "1");
	              _this.cells[i].pad.setAttribute("stroke-opacity", "1");
	            } else {
	              _this.cells[i].pad.setAttribute("stroke", "none");
	            }
	          });
	        }
	      }
	    },
	    start: {
	
	      /**
	       * Start sequencing
	       * @param  {number} ms Beat tempo in milliseconds
	       */
	
	      value: function start(ms) {
	        this.interval.event = this.next.bind(this);
	        if (ms) {
	          this.interval.ms(ms);
	        }
	        this.interval.start();
	      }
	    },
	    stop: {
	
	      /**
	      Stop sequencing
	      */
	
	      value: function stop() {
	        this.interval.stop();
	      }
	    },
	    next: {
	
	      /**
	      Manually jump to the next column and trigger the 'change' event. The "next" column is determined by your mode of sequencing.
	      */
	
	      value: function next() {
	        this.stepper.next();
	        this.emit("step", this.matrix.column(this.stepper.value).reverse());
	        this.render();
	      }
	    },
	    addTouchListeners: {
	      value: function addTouchListeners() {
	        var _this = this;
	
	        this.preClick = this.preMove = this.preRelease = function () {};
	        this.click = this.move = this.release = function () {};
	        this.preTouch = this.preTouchMove = this.preTouchRelease = function () {};
	        this.touch = this.touchMove = this.touchRelease = function () {};
	
	        this.currentElement = false;
	
	        this.element.addEventListener("touchstart", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var cell = _this.cells[element.index];
	          _this.paintbrush = !cell.state;
	          cell.down(_this.paintbrush);
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchmove", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var cell = _this.cells[element.index];
	          if (element.index !== _this.currentElement) {
	            if (_this.currentElement >= 0) {
	              var pastCell = _this.cells[_this.currentElement];
	              pastCell.up();
	            }
	            cell.down(_this.paintbrush);
	          } else {
	            cell.bend();
	          }
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchend", function (e) {
	          // no touches to calculate because none remaining
	          var cell = _this.cells[_this.currentElement];
	          cell.up();
	          _this.interacting = false;
	          _this.currentElement = false;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	      }
	    },
	    rows: {
	
	      /**
	      Number of rows in the sequencer
	      @type {number}
	      */
	
	      get: function () {
	        return this.matrix.rows;
	      },
	      set: function (v) {
	        this.matrix.rows = v;
	        this.empty();
	        this.buildInterface();
	        this.update();
	      }
	    },
	    columns: {
	
	      /**
	      Number of columns in the sequencer
	      @type {number}
	      */
	
	      get: function () {
	        return this.matrix.columns;
	      },
	      set: function (v) {
	        this.matrix.columns = v;
	        this.stepper.max = v;
	        this.empty();
	        this.buildInterface();
	        this.update();
	      }
	    }
	  });
	
	  return Sequencer;
	})(Interface);
	
	module.exports = Sequencer;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Sequence = _interopRequire(__webpack_require__(26));
	
	// For the tutorial, looking at
	
	//Pattern section:
	// .create(), .rows, .columns,
	// .pattern, .length, .formatAsText(), .log(),
	// .locate(i), .indexOf(c,r)
	// row(), column() (returns contents of row or colum)
	
	//Control section:
	// toggle x3
	// set x4
	// rotate x3
	// populate x3
	// erase x3
	
	// should some version of this have a float value for each cell?
	// could be like a mirror .pattern that has values. by default, everything is 1, but could be set...
	// not a good way to do that on interface, but as a model it would be nice...
	// for .formatAsText(), could multiply by 100 and floor, so each cell is an int from 0 to 9
	
	var Matrix = (function () {
	  function Matrix(rows, columns) {
	    var _this = this;
	
	    _classCallCheck(this, Matrix);
	
	    // should also have ability to create using an existing matrix (2d array)
	    this.pattern = [];
	    this.create(rows, columns);
	
	    this.toggle = {
	      cell: function (column, row) {
	        _this.pattern[row][column] = !_this.pattern[row][column]; // math.invert(this.pattern[row][column]);
	        if (_this.ui) {
	          _this.ui.update();
	        }
	        return _this.pattern[row][column];
	      },
	      all: function () {
	        _this.iterate(function (r, c) {
	          _this.toggle.cell(c, r);
	        });
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      row: function (row) {
	        for (var i = 0; i < _this.columns; i++) {
	          _this.toggle.cell(i, row);
	        }
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      column: function (column) {
	        for (var i = 0; i < _this.rows; i++) {
	          _this.toggle.cell(column, i);
	        }
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      }
	    };
	
	    this.set = {
	      cell: function (column, row, value) {
	        _this.pattern[row][column] = value;
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      all: function (values) {
	        // set the whole matrix using a 2d array as input
	        // this should also resize the array?
	        _this.pattern = values;
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      row: function (row, values) {
	        // set a row using an array as input
	        _this.pattern[row] = values;
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      column: function (column, values) {
	        // set a column using an array as input
	        _this.pattern.forEach(function (row, i) {
	          _this.pattern[i][column] = values[i];
	        });
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      }
	    };
	
	    this.rotate = {
	      //should eventually do (amountX, amountY) here
	      // could just use a loop and this.rotate.row(i,amountX);
	      all: function (amount) {
	        if (!amount && amount !== 0) {
	          amount = 1;
	        }
	        amount %= _this.pattern[0].length;
	        if (amount < 0) {
	          amount = _this.pattern[0].length + amount;
	        }
	        for (var i = 0; i < _this.rows; i++) {
	          var cut = _this.pattern[i].splice(_this.pattern[i].length - amount, amount);
	          _this.pattern[i] = cut.concat(_this.pattern[i]);
	        }
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      row: function (row, amount) {
	        if (!amount && amount !== 0) {
	          amount = 1;
	        }
	        amount %= _this.pattern[0].length;
	        if (amount < 0) {
	          amount = _this.pattern[0].length + amount;
	        }
	        var cut = _this.pattern[row].splice(_this.pattern[row].length - amount, amount);
	        _this.pattern[row] = cut.concat(_this.pattern[row]);
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      column: function (column, amount) {
	        if (!amount && amount !== 0) {
	          amount = 1;
	        }
	        amount %= _this.pattern.length;
	        if (amount < 0) {
	          amount = _this.pattern.length + amount;
	        }
	        var proxy = [];
	        _this.pattern.forEach(function (row) {
	          proxy.push(row[column]);
	        });
	        var cut = proxy.splice(proxy.length - amount, amount);
	        proxy = cut.concat(proxy);
	        _this.pattern.forEach(function (row, i) {
	          row[column] = proxy[i];
	        });
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      }
	    };
	
	    // the idea behind populate is to be able to set a whole row or column to 0 or 1
	    // IF the value is a float, such as 0.7, then it would become a probability
	    // so populate(0.7) would give each cell a 70% chance of being 1
	    this.populate = {
	      all: function (odds) {
	        var oddsSequence = new Sequence(odds);
	        _this.iterate(function (r, c) {
	          _this.pattern[r][c] = math.coin(oddsSequence.next());
	        });
	        // This could be used so that each row has same odds pattern, even if row length is not divisibly by sequence length.
	        //,() => {
	        //  odds.pos = -1;
	        // }
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      row: function () {
	        var row = arguments[0] === undefined ? 0 : arguments[0];
	        var odds = arguments[1] === undefined ? 1 : arguments[1];
	
	        var oddsSequence = new Sequence(odds);
	        _this.pattern[row].forEach(function (cell, i) {
	          _this.pattern[row][i] = math.coin(oddsSequence.next());
	        });
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      column: function () {
	        var column = arguments[0] === undefined ? 0 : arguments[0];
	        var odds = arguments[1] === undefined ? 1 : arguments[1];
	
	        var oddsSequence = new Sequence(odds);
	        _this.pattern.forEach(function (row, i) {
	          _this.pattern[i][column] = math.coin(oddsSequence.next());
	        });
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      }
	    };
	
	    // essentiall populate(0) so i'm not sure if this is necessary but is nice
	    this.erase = {
	      all: function () {
	        _this.set.all(0);
	      },
	      row: function (row) {
	        _this.set.row(row, 0);
	      },
	      column: function (column) {
	        _this.set.column(column, 0);
	      }
	    };
	
	    // end constructor
	  }
	
	  _createClass(Matrix, {
	    create: {
	      value: function create(rows, columns) {
	        var _this = this;
	
	        this.pattern = [];
	        for (var row = 0; row < rows; row++) {
	          var arr = new Array(columns);
	          this.pattern.push(arr);
	        }
	        this.iterate(function (r, c) {
	          _this.pattern[r][c] = false;
	        });
	      }
	    },
	    iterate: {
	      value: function iterate(f, f2) {
	        var i = 0;
	        for (var row = 0; row < this.rows; row++) {
	          if (f2) {
	            f2(row);
	          }
	          for (var column = 0; column < this.columns; column++) {
	            f(row, column, i);
	            i++;
	          }
	        }
	      }
	    },
	    formatAsText: {
	      value: function formatAsText() {
	        var _this = this;
	
	        var patternString = "";
	        this.iterate(function (r, c) {
	          patternString += (_this.pattern[r][c] ? 1 : 0) + " ";
	        }, function () {
	          patternString += "\n";
	        });
	        return patternString;
	      }
	    },
	    log: {
	      value: function log() {
	        console.log(this.formatAsText());
	      }
	    },
	    update: {
	      value: function update(pattern) {
	        this.pattern = pattern || this.pattern;
	      }
	    },
	    length: {
	      get: function () {
	        return this.rows * this.columns;
	      }
	    },
	    locate: {
	      value: function locate(index) {
	        // returns row and column of cell by index
	        return {
	          row: ~ ~(index / this.columns),
	          column: index % this.columns
	        };
	      }
	    },
	    indexOf: {
	      value: function indexOf(row, column) {
	        return column + row * this.columns;
	        // returns index of cell by row and column
	      }
	    },
	    row: {
	      value: (function (_row) {
	        var _rowWrapper = function row(_x) {
	          return _row.apply(this, arguments);
	        };
	
	        _rowWrapper.toString = function () {
	          return _row.toString();
	        };
	
	        return _rowWrapper;
	      })(function (row) {
	        var data = [];
	        for (var i = 0; i < this.columns; i++) {
	          data.push(this.pattern[row] ? 1 : 0);
	        }
	        return data;
	      })
	    },
	    column: {
	      value: (function (_column) {
	        var _columnWrapper = function column(_x2) {
	          return _column.apply(this, arguments);
	        };
	
	        _columnWrapper.toString = function () {
	          return _column.toString();
	        };
	
	        return _columnWrapper;
	      })(function (column) {
	        var data = [];
	        for (var i = 0; i < this.rows; i++) {
	          data.push(this.pattern[i][column] ? 1 : 0);
	        }
	        return data;
	      })
	    },
	    rows: {
	      get: function () {
	        return this.pattern.length;
	      },
	      set: function (v) {
	        var _this = this;
	
	        var previous = this.pattern.slice(0);
	        this.create(v, this.columns);
	        this.iterate(function (r, c) {
	          if (previous[r] && previous[r][c]) {
	            _this.pattern[r][c] = previous[r][c];
	          }
	        });
	      }
	    },
	    columns: {
	      get: function () {
	        return this.pattern[0].length;
	      },
	      set: function (v) {
	        var _this = this;
	
	        var previous = this.pattern.slice(0);
	        this.create(this.rows, v);
	        this.iterate(function (r, c) {
	          if (previous[r] && previous[r][c]) {
	            _this.pattern[r][c] = previous[r][c];
	          }
	        });
	      }
	    }
	  });
	
	  return Matrix;
	})();
	
	module.exports = Matrix;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Drunk = _interopRequire(__webpack_require__(27));
	
	var Sequence = (function () {
	  function Sequence() {
	    var sequence = arguments[0] === undefined ? [0, 10, 20, 30] : arguments[0];
	    var mode = arguments[1] === undefined ? "up" : arguments[1];
	    var position = arguments[2] === undefined ? false : arguments[2];
	
	    _classCallCheck(this, Sequence);
	
	    this.values = sequence;
	    if (!Array.isArray(this.values)) {
	      this.values = [this.values];
	    }
	    this._mode = mode;
	    this.position = position;
	
	    this.drunkWalk = new Drunk(0, this.values.length - 1);
	
	    this.startValues = {
	      up: 0,
	      down: this.values.length - 1,
	      drunk: ~ ~(this.values.length / 2),
	      random: math.ri(this.values.length)
	    };
	
	    if (this.position !== false) {
	      this.next = this[this._mode];
	    } else {
	      this.next = this.first;
	    }
	  }
	
	  _createClass(Sequence, {
	    mode: {
	      get: function () {
	        return this._mode;
	      },
	      set: function (mode) {
	        if (!(mode === "up" || mode === "down" || mode === "random" || mode === "drunk")) {
	          console.error("The only modes currently allowed are: up, down, random, drunk");
	          return;
	        }
	        this._mode = mode;
	        if (this.position) {
	          this.next = this[this._mode];
	        }
	      }
	    },
	    value: {
	      get: function () {
	        return this.values[this.position];
	      },
	      set: function (v) {
	        this.position = this.values.indexOf(v);
	      }
	    },
	    first: {
	      value: function first() {
	        if (this.position !== false) {
	          this.next = this[this._mode];
	          return this.next();
	        }
	        this.position = this.startValues[this._mode];
	        this.next = this[this._mode];
	        return this.value;
	      }
	    },
	    up: {
	      value: function up() {
	        this.position++;
	        this.position %= this.values.length;
	        return this.value;
	      }
	    },
	    down: {
	      value: function down() {
	        this.position--;
	        if (this.position < 0) {
	          this.position = (this.position + this.values.length) % this.values.length;
	        }
	        return this.value;
	      }
	    },
	    random: {
	      value: function random() {
	        this.position = math.ri(0, this.values.length);
	        return this.value;
	      }
	    },
	    drunk: {
	      value: function drunk() {
	        this.drunkWalk.max = this.values.length;
	        this.drunkWalk.value = this.position;
	        this.position = this.drunkWalk.next();
	        return this.value;
	      }
	
	      /* future methods
	      .group(start,stop) -- outputs a group of n items from the list, with wrapping
	      .loop(start,stop) -- confines sequencing to a subset of the values
	          (could even have a distinction between .originalValues and the array of values being used)
	      */
	
	    }
	  });
	
	  return Sequence;
	})();
	
	module.exports = Sequence;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Drunk = (function () {
	    function Drunk() {
	        var min = arguments[0] === undefined ? 0 : arguments[0];
	        var max = arguments[1] === undefined ? 9 : arguments[1];
	        var value = arguments[2] === undefined ? 0 : arguments[2];
	        var increment = arguments[3] === undefined ? 1 : arguments[3];
	        var loop = arguments[4] === undefined ? false : arguments[4];
	
	        _classCallCheck(this, Drunk);
	
	        this.min = min;
	        this.max = max;
	        this.value = value;
	        this.increment = increment;
	        this.loop = loop;
	    }
	
	    _createClass(Drunk, {
	        next: {
	            value: function next() {
	                this.value += math.pick(-1 * this.increment, this.increment);
	                if (this.value > this.max) {
	                    if (this.loop) {
	                        this.value = this.min;
	                    } else {
	                        this.value = this.max - this.increment;
	                    }
	                }
	
	                if (this.value < this.min) {
	                    if (this.loop) {
	                        this.value = this.max;
	                    } else {
	                        this.value = this.min + this.increment;
	                    }
	                }
	                return this.value;
	            }
	        }
	    });
	
	    return Drunk;
	})();
	
	module.exports = Drunk;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Drunk = _interopRequire(__webpack_require__(27));
	
	var Counter = (function () {
	    function Counter() {
	        var min = arguments[0] === undefined ? 0 : arguments[0];
	        var max = arguments[1] === undefined ? 10 : arguments[1];
	        var mode = arguments[2] === undefined ? "up" : arguments[2];
	        var value = arguments[3] === undefined ? false : arguments[3];
	
	        _classCallCheck(this, Counter);
	
	        this.min = min;
	        this.max = max;
	        this.value = value;
	        this.mode = mode;
	        this.drunkWalk = new Drunk(this.min, this.max);
	        if (this.value !== false) {
	            this.next = this[this._mode];
	        } else {
	            this.next = this.first;
	        }
	    }
	
	    _createClass(Counter, {
	        mode: {
	            set: function (mode) {
	                if (!(mode === "up" || mode === "down" || mode === "random" || mode === "drunk")) {
	                    console.error("The only modes currently allowed are: up, down, random, drunk");
	                    return;
	                }
	                this._mode = mode;
	                if (this.value) {
	                    this.next = this[this._mode];
	                }
	            },
	            get: function () {
	                return this._mode;
	            }
	        },
	        first: {
	            value: function first() {
	                if (this.value !== false) {
	                    this.next = this[this._mode];
	                    return this.next();
	                }
	                this.startValues = {
	                    up: this.min,
	                    down: this.max,
	                    drunk: ~ ~math.average(this.min, this.max),
	                    random: math.ri(this.min, this.max)
	                };
	                this.value = this.startValues[this._mode];
	                this.next = this[this._mode];
	                return this.value;
	            }
	        },
	        up: {
	            value: function up() {
	                this.value++;
	                if (this.value >= this.max) {
	                    this.value = this.min;
	                }
	                return this.value;
	            }
	        },
	        down: {
	            value: function down() {
	                this.value--;
	                if (this.value < this.min) {
	                    this.value = this.max;
	                }
	                return this.value;
	            }
	        },
	        random: {
	            value: function random() {
	                this.value = math.ri(this.min, this.max);
	                return this.value;
	            }
	        },
	        drunk: {
	            value: function drunk() {
	                this.drunkWalk.min = this.min;
	                this.drunkWalk.max = this.max;
	                this.drunkWalk.value = this.value;
	                this.value = this.drunkWalk.next();
	                return this.value;
	            }
	        }
	    });
	
	    return Counter;
	})();
	
	module.exports = Counter;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var clock = __webpack_require__(1).clock;
	
	var Interval = (function () {
	  function Interval(rate, func, on) {
	    _classCallCheck(this, Interval);
	
	    this.rate = rate;
	    this.on = on;
	    this.clock = clock(); // jshint ignore:line
	
	    this.pattern = [1];
	    this.index = 0;
	
	    this.event = func ? func : function () {};
	
	    if (this.on) {
	      this.start();
	    }
	  }
	
	  _createClass(Interval, {
	    _event: {
	      value: function _event(e) {
	        //  if (this.pattern[this.index%this.pattern.length]) {
	        this.event(e);
	        //  }
	        this.index++;
	      }
	    },
	    stop: {
	      value: function stop() {
	        this.on = false;
	        this.interval.clear();
	      }
	    },
	    start: {
	      value: function start() {
	        this.on = true;
	        this.interval = this.clock.callbackAtTime(this._event.bind(this), this.clock.context.currentTime).repeat(this.rate / 1000).tolerance({ early: 0.1, late: 1 });
	      }
	    },
	    ms: {
	      value: function ms(newrate) {
	        if (this.on) {
	          var ratio = newrate / this.rate;
	          this.rate = newrate;
	          this.clock.timeStretch(this.clock.context.currentTime, [this.interval], ratio);
	        } else {
	          this.rate = newrate;
	        }
	      }
	    }
	  });
	
	  return Interval;
	})();
	
	module.exports = Interval;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	* Pan2D
	*
	* @description Interface for moving a sound around an array of speakers. Speaker locations can be customized. The interface calculates the closeness of the sound source to each speaker and returns that distance as a numeric value.
	*
	* @demo <span nexus-ui="pan2D"></span>
	*
	* @example
	* var pan2d = new Nexus.Pan2d('#target')
	*
	* @example
	* var pan2d = new Nexus.Pan2D('#target',{
	*   'size': [200,200],
	*   'range': 0.5,  // detection radius of each speaker
	*   'mode': 'absolute',   // 'absolute' or 'relative' sound movement
	*   'speakers': [  // the speaker [x,y] positions
	*       [0.5,0.2],
	*       [0.75,0.25],
	*       [0.8,0.5],
	*       [0.75,0.75],
	*       [0.5,0.8],
	*       [0.25,0.75]
	*       [0.2,0.5],
	*       [0.25,0.25]
	*   ]
	* })
	*
	* @output
	* change
	* Fires any time the "source" node's position changes. <br>
	* The event data is an array of the amplitudes (0-1), representing the level of each speaker (as calculated by its distance to the audio source).
	*
	* @outputexample
	* pan2d.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*/
	
	var Pan2D = (function (_Interface) {
	  function Pan2D() {
	    _classCallCheck(this, Pan2D);
	
	    var options = ["range"];
	
	    var defaults = {
	      size: [200, 200],
	      range: 0.5,
	      mode: "absolute",
	      speakers: [[0.5, 0.2], [0.75, 0.25], [0.8, 0.5], [0.75, 0.75], [0.5, 0.8], [0.25, 0.75], [0.2, 0.5], [0.25, 0.25]]
	    };
	
	    _get(Object.getPrototypeOf(Pan2D.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.value = {
	      x: new Step(0, 1, 0, 0.5),
	      y: new Step(0, 1, 0, 0.5)
	    };
	
	    /**
	    Absolute or relative mouse interaction. In "absolute" mode, the source node will jump to your mouse position on mouse click. In "relative" mode, it does not.
	    */
	    this.mode = this.settings.mode;
	
	    this.position = {
	      x: new Interaction.Handle(this.mode, "horizontal", [0, this.width], [this.height, 0]),
	      y: new Interaction.Handle(this.mode, "vertical", [0, this.width], [this.height, 0])
	    };
	    this.position.x.value = this.value.x.normalized;
	    this.position.y.value = this.value.y.normalized;
	
	    /**
	    An array of speaker locations. Update this with .moveSpeaker() or .moveAllSpeakers()
	    */
	    this.speakers = this.settings.speakers;
	
	    /**
	    Rewrite: The maximum distance from a speaker that the source node can be for it to be heard from that speaker. A low range (0.1) will result in speakers only playing when the sound is very close it. Default is 0.5 (half of the interface).
	    */
	    this.range = this.settings.range;
	
	    /**
	    The current levels for each speaker. This is calculated when a source node or speaker node is moved through interaction or programatically.
	    */
	    this.levels = [];
	
	    this.init();
	
	    this.calculateLevels();
	    this.render();
	  }
	
	  _inherits(Pan2D, _Interface);
	
	  _createClass(Pan2D, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.knob);
	
	        // add speakers
	        this.speakerElements = [];
	
	        for (var i = 0; i < this.speakers.length; i++) {
	          var speakerElement = svg.create("circle");
	
	          this.element.appendChild(speakerElement);
	
	          this.speakerElements.push(speakerElement);
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this._minDimension = Math.min(this.width, this.height);
	
	        this.knobRadius = {
	          off: ~ ~(this._minDimension / 100) * 3 + 5 };
	        this.knobRadius.on = this.knobRadius.off * 2;
	
	        this.knob.setAttribute("cx", this.width / 2);
	        this.knob.setAttribute("cy", this.height / 2);
	        this.knob.setAttribute("r", this.knobRadius.off);
	
	        for (var i = 0; i < this.speakers.length; i++) {
	          var speakerElement = this.speakerElements[i];
	          var speaker = this.speakers[i];
	          speakerElement.setAttribute("cx", speaker[0] * this.width);
	          speakerElement.setAttribute("cy", speaker[1] * this.height);
	          speakerElement.setAttribute("r", this._minDimension / 20 + 5);
	          speakerElement.setAttribute("fill-opacity", "0");
	        }
	
	        this.position.x.resize([0, this.width], [this.height, 0]);
	        this.position.y.resize([0, this.width], [this.height, 0]);
	
	        // next, need to
	        // resize positions
	        // calculate speaker distances
	        this.calculateLevels();
	        this.render();
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        this.element.style.backgroundColor = this.colors.fill;
	        this.knob.setAttribute("fill", this.colors.mediumLight);
	
	        for (var i = 0; i < this.speakers.length; i++) {
	          var speakerElement = this.speakerElements[i];
	          speakerElement.setAttribute("fill", this.colors.accent);
	          speakerElement.setAttribute("stroke", this.colors.accent);
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        this.knobCoordinates = {
	          x: this.value.x.normalized * this.width,
	          y: this.height - this.value.y.normalized * this.height
	        };
	
	        this.knob.setAttribute("cx", this.knobCoordinates.x);
	        this.knob.setAttribute("cy", this.knobCoordinates.y);
	      }
	    },
	    click: {
	      value: function click() {
	        this.position.x.anchor = this.mouse;
	        this.position.y.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.x.update(this.mouse);
	          this.position.y.update(this.mouse);
	          // position.x and position.y are normalized
	          // so are the levels
	          // likely don't need this.value at all -- only used for drawing
	          // not going to be a 'step' or 'min' and 'max' in this one.
	          this.calculateLevels();
	          this.emit("change", this.levels);
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return {
	          x: this.value.x.normalized,
	          y: this.value.y.normalized
	        };
	      }
	    },
	    calculateLevels: {
	      value: function calculateLevels() {
	        var _this = this;
	
	        this.value.x.updateNormal(this.position.x.value);
	        this.value.y.updateNormal(this.position.y.value);
	        this.levels = [];
	        this.speakers.forEach(function (s, i) {
	          var distance = math.distance(s[0] * _this.width, s[1] * _this.height, _this.position.x.value * _this.width, (1 - _this.position.y.value) * _this.height);
	          var level = math.clip(1 - distance / (_this.range * _this.width), 0, 1);
	          _this.levels.push(level);
	          _this.speakerElements[i].setAttribute("fill-opacity", level);
	        });
	      }
	    },
	    moveSource: {
	
	      /**
	      Move the audio source node and trigger the output event.
	      @param x {number} New x location, normalized 0-1
	      @param y {number} New y location, normalized 0-1
	      */
	
	      value: function moveSource(x, y) {
	        var location = {
	          x: x * this.width,
	          y: y * this.height
	        };
	        this.position.x.update(location);
	        this.position.y.update(location);
	        this.calculateLevels();
	        this.emit("change", this.levels);
	        this.render();
	      }
	    },
	    moveSpeaker: {
	
	      /**
	      Move a speaker node and trigger the output event.
	      @param index {number} Index of the speaker to move
	      @param x {number} New x location, normalized 0-1
	      @param y {number} New y location, normalized 0-1
	      */
	
	      value: function moveSpeaker(index, x, y) {
	
	        this.speakers[index] = [x, y];
	        this.speakerElements[index].setAttribute("cx", x * this.width);
	        this.speakerElements[index].setAttribute("cy", y * this.height);
	        this.calculateLevels();
	        this.emit("change", this.levels);
	        this.render();
	      }
	
	      /**
	      Set all speaker locations
	      @param locations {Array} Array of speaker locations. Each item in the array should be an array of normalized x and y coordinates.
	       setSpeakers(locations) {
	       }
	      */
	
	    }
	  });
	
	  return Pan2D;
	})(Interface);
	
	module.exports = Pan2D;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = __webpack_require__(5);
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	
	/**
	* Tilt
	*
	* @description Device tilt sensor with 2 or 3 axes (depending on your device and browser).
	*
	* @demo <span nexus-ui='tilt'></span>
	*
	* @example
	* var tilt = new Nexus.Tilt('#target')
	*
	* @output
	* change
	* Fires at a regular interval, as long as this interface is active (see the interface's <i>.active</i> property)<br>
	* The event data is an <i>object</i> containing x (number) and y (number) properties which represent the current tilt state of the device.
	*
	* @outputexample
	* tilt.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Tilt = (function (_Interface) {
	  function Tilt() {
	    _classCallCheck(this, Tilt);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [80, 80]
	    };
	
	    _get(Object.getPrototypeOf(Tilt.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._active = true;
	
	    this.init();
	
	    // add event listener for device orientation
	
	    this.boundUpdate = this.update.bind(this);
	    //	this.boundMozTilt = this.mozTilt.bind(this)
	
	    if (window.DeviceOrientationEvent) {
	      this.orientationListener = window.addEventListener("deviceorientation", this.boundUpdate, false);
	    } else {
	      this._active = false;
	      this.colorInterface();
	    }
	
	    /*else if (window.OrientationEvent) {
	    //	  	window.addEventListener('MozOrientation', this.boundMozTilt, false);
	    } else {
	    console.log('Not supported on your device or browser.');
	    } */
	  }
	
	  _inherits(Tilt, _Interface);
	
	  _createClass(Tilt, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.title = svg.create("text");
	        this.circleX = svg.create("circle");
	        this.circleY = svg.create("circle");
	        this.circleZ = svg.create("circle");
	
	        this.barX = svg.create("path");
	        this.barY = svg.create("path");
	        this.barZ = svg.create("path");
	
	        this.barX2 = svg.create("path");
	        this.barY2 = svg.create("path");
	        this.barZ2 = svg.create("path");
	
	        this.barX.setAttribute("opacity", "0.8");
	        this.barY.setAttribute("opacity", "0.8");
	        this.barZ.setAttribute("opacity", "0.8");
	        this.barX2.setAttribute("opacity", "0.8");
	        this.barY2.setAttribute("opacity", "0.8");
	        this.barZ2.setAttribute("opacity", "0.8");
	
	        this.circleX.setAttribute("cx", this.width * 3 / 12);
	        this.circleX.setAttribute("cy", this.height * 3 / 4);
	        this.circleX.setAttribute("r", this.height / 10);
	        this.circleX.setAttribute("opacity", "0.4");
	
	        this.circleY.setAttribute("cx", this.width * 6 / 12);
	        this.circleY.setAttribute("cy", this.height * 3 / 4);
	        this.circleY.setAttribute("r", this.height / 10);
	        this.circleY.setAttribute("opacity", "0.4");
	
	        this.circleZ.setAttribute("cx", this.width * 9 / 12);
	        this.circleZ.setAttribute("cy", this.height * 3 / 4);
	        this.circleZ.setAttribute("r", this.height / 10);
	        this.circleZ.setAttribute("opacity", "0.4");
	
	        this.barX.setAttribute("stroke-width", Math.round(this.height / 30));
	        this.barY.setAttribute("stroke-width", Math.round(this.height / 30));
	        this.barZ.setAttribute("stroke-width", Math.round(this.height / 30));
	
	        this.barX.setAttribute("fill", "none");
	        this.barY.setAttribute("fill", "none");
	        this.barZ.setAttribute("fill", "none");
	
	        this.barX2.setAttribute("stroke-width", Math.round(this.height / 30));
	        this.barY2.setAttribute("stroke-width", Math.round(this.height / 30));
	        this.barZ2.setAttribute("stroke-width", Math.round(this.height / 30));
	
	        this.barX2.setAttribute("fill", "none");
	        this.barY2.setAttribute("fill", "none");
	        this.barZ2.setAttribute("fill", "none");
	
	        this.title.setAttribute("x", this.width / 2);
	        this.title.setAttribute("y", this.height / 3 + 7);
	        this.title.setAttribute("font-size", "15px");
	        this.title.setAttribute("font-weight", "bold");
	        this.title.setAttribute("letter-spacing", "2px");
	        this.title.setAttribute("opacity", "0.7");
	        this.title.setAttribute("text-anchor", "middle");
	        this.title.textContent = "TILT";
	
	        this.element.appendChild(this.circleX);
	        this.element.appendChild(this.circleY);
	        this.element.appendChild(this.circleZ);
	
	        this.element.appendChild(this.barX);
	        this.element.appendChild(this.barY);
	        this.element.appendChild(this.barZ);
	
	        this.element.appendChild(this.barX2);
	        this.element.appendChild(this.barY2);
	        this.element.appendChild(this.barZ2);
	
	        this.element.appendChild(this.title);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        if (this._active) {
	          this.element.style.backgroundColor = this.colors.accent;
	          this.circleX.setAttribute("fill", this.colors.light);
	          this.circleY.setAttribute("fill", this.colors.light);
	          this.circleZ.setAttribute("fill", this.colors.light);
	          this.circleX.setAttribute("stroke", this.colors.light);
	          this.circleY.setAttribute("stroke", this.colors.light);
	          this.circleZ.setAttribute("stroke", this.colors.light);
	          this.barX.setAttribute("stroke", this.colors.light);
	          this.barY.setAttribute("stroke", this.colors.light);
	          this.barZ.setAttribute("stroke", this.colors.light);
	          this.barX2.setAttribute("stroke", this.colors.light);
	          this.barY2.setAttribute("stroke", this.colors.light);
	          this.barZ2.setAttribute("stroke", this.colors.light);
	          this.title.setAttribute("fill", this.colors.light);
	        } else {
	          this.element.style.backgroundColor = this.colors.fill;
	          this.circleX.setAttribute("fill", this.colors.mediumLight);
	          this.circleY.setAttribute("fill", this.colors.mediumLight);
	          this.circleZ.setAttribute("fill", this.colors.mediumLight);
	          this.circleX.setAttribute("stroke", this.colors.mediumLight);
	          this.circleY.setAttribute("stroke", this.colors.mediumLight);
	          this.circleZ.setAttribute("stroke", this.colors.mediumLight);
	          this.barX.setAttribute("stroke", this.colors.mediumLight);
	          this.barY.setAttribute("stroke", this.colors.mediumLight);
	          this.barZ.setAttribute("stroke", this.colors.mediumLight);
	          this.barX2.setAttribute("stroke", this.colors.mediumLight);
	          this.barY2.setAttribute("stroke", this.colors.mediumLight);
	          this.barZ2.setAttribute("stroke", this.colors.mediumLight);
	          this.title.setAttribute("fill", this.colors.mediumLight);
	        }
	      }
	    },
	    update: {
	      value: function update(v) {
	        if (this._active) {
	
	          var y = v.beta;
	          var x = v.gamma;
	          var z = v.alpha;
	
	          // take the original -90 to 90 scale and normalize it 0-1
	          x = math.scale(x, -90, 90, 0, 1);
	          y = math.scale(y, -90, 90, 0, 1);
	          z = math.scale(z, 0, 360, 0, 1);
	
	          var handlePoints = {
	            start: Math.PI * 1.5,
	            end: math.clip(math.scale(x, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	          };
	          var handle2Points = {
	            start: Math.PI * 2.5,
	            end: math.clip(math.scale(x, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	          };
	
	          var handlePath = svg.arc(this.circleX.cx.baseVal.value, this.circleX.cy.baseVal.value, this.circleX.r.baseVal.value, handlePoints.start, handlePoints.end);
	          var handle2Path = svg.arc(this.circleX.cx.baseVal.value, this.circleX.cy.baseVal.value, this.circleX.r.baseVal.value, handle2Points.start, handle2Points.end);
	
	          this.barX.setAttribute("d", handlePath);
	          this.barX2.setAttribute("d", handle2Path);
	
	          handlePoints = {
	            start: Math.PI * 1.5,
	            end: math.clip(math.scale(y, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	          };
	          handle2Points = {
	            start: Math.PI * 2.5,
	            end: math.clip(math.scale(y, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	          };
	
	          handlePath = svg.arc(this.circleY.cx.baseVal.value, this.circleY.cy.baseVal.value, this.circleY.r.baseVal.value, handlePoints.start, handlePoints.end);
	          handle2Path = svg.arc(this.circleY.cx.baseVal.value, this.circleY.cy.baseVal.value, this.circleY.r.baseVal.value, handle2Points.start, handle2Points.end);
	
	          this.barY.setAttribute("d", handlePath);
	          this.barY2.setAttribute("d", handle2Path);
	
	          handlePoints = {
	            start: Math.PI * 1.5,
	            end: math.clip(math.scale(z, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	          };
	          handle2Points = {
	            start: Math.PI * 2.5,
	            end: math.clip(math.scale(z, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	          };
	
	          handlePath = svg.arc(this.circleZ.cx.baseVal.value, this.circleZ.cy.baseVal.value, this.circleZ.r.baseVal.value, handlePoints.start, handlePoints.end);
	          handle2Path = svg.arc(this.circleZ.cx.baseVal.value, this.circleZ.cy.baseVal.value, this.circleZ.r.baseVal.value, handle2Points.start, handle2Points.end);
	
	          this.barZ.setAttribute("d", handlePath);
	          this.barZ2.setAttribute("d", handle2Path);
	
	          /*
	           let pointsX = {
	            start: 0,
	            end: math.scale( x, 0, 1, 0, Math.PI*2 )
	          };
	          //  console.log(this.circleX.cx.baseVal.value);
	           let pathX = svg.arc(this.circleX.cx.baseVal.value, this.circleX.cy.baseVal.value, this.circleX.r.baseVal.value*2, pointsX.start, pointsX.end);
	           this.barX.setAttribute('d',pathX); */
	
	          //this.textH.textContent = math.prune(x,2);
	          //this.textV.textContent = math.prune(y,2);
	          //
	          //  this.circleX.setAttribute('opacity',x);
	          //  this.circleY.setAttribute('opacity',y);
	          //  this.circleZ.setAttribute('opacity',z);
	
	          this.emit("change", {
	            x: x,
	            y: y,
	            z: z
	          });
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        if (window.DeviceOrientationEvent) {
	          this.active = !this.active;
	        }
	      }
	    },
	    active: {
	
	      /**
	      Whether the interface is on (emitting values) or off (paused & not emitting values). Setting this property will update it.
	      @type {boolean}
	      */
	
	      get: function () {
	        return this._active;
	      },
	      set: function (on) {
	        this._active = on;
	        this.colorInterface();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {
	        window.removeEventListener("deviceorientation", this.boundUpdate, false);
	      }
	    }
	  });
	
	  return Tilt;
	})(Interface);
	
	module.exports = Tilt;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = __webpack_require__(5);
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	
	/**
	 * Multislider
	 *
	 * @description Multislider
	 *
	 * @demo <span nexus-ui="multislider"></span>
	 *
	 * @example
	 * var multislider = new Nexus.Multislider('#target')
	 *
	 * @example
	 * var multislider = new Nexus.Multislider('#target',{
	 *  'size': [200,100],
	 *  'numberOfSliders': 5,
	 *  'min': 0,
	 *  'max': 1,
	 *  'step': 0,
	 *  'candycane': 3,
	 *  'values': [0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1],
	 *  'smoothing': 0,
	 *  'mode': 'bar'  // 'bar' or 'line'
	 *})
	 *
	 * @output
	 * change
	 * Fires any time the interface's value changes. <br>
	 * The event data is an object containing <i>index</i> and <i>value</i> properties
	 *
	 * @outputexample
	 * multislider.on('change',function(v) {
	 *   console.log(v);
	 * })
	 *
	 */
	
	var Multislider = (function (_Interface) {
	  function Multislider() {
	    _classCallCheck(this, Multislider);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [200, 100],
	      numberOfSliders: 5,
	      min: 0,
	      max: 1,
	      step: 0,
	      candycane: 3,
	      values: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
	      smoothing: 0,
	      mode: "bar" // 'bar', 'line'
	    };
	
	    _get(Object.getPrototypeOf(Multislider.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._numberOfSliders = this.settings.numberOfSliders;
	    this._min = this.settings.min;
	    this._max = this.settings.max;
	    this._step = this.settings.step;
	
	    this._mode = this.settings.mode;
	
	    /**
	    The current values of the slider. NOTE: Use this only to get the current values. Setting this array will not update the multislider. To set the multislider's values, use setSlider() or setAllSliders()
	    @type {Array}
	    */
	    var vs = this.settings.values;
	    this.values = vs.length > this._numberOfSliders ? vs.slice(0, this._numberOfSliders) : vs.concat(Array(this._numberOfSliders - vs.length).fill(0));
	
	    this.candycane = this.settings.candycane;
	
	    this.sliderWidth = this.width / this.values.length;
	
	    /**
	    Applies a simple low-pass filter to the multislider as it is interacted with. A smoothing of 0 will be no smoothing. A smoothing of 1 will smooth 1 slider on each side of the interaction. A smoothing of 2 will smooth 2 sliders on each side, and so on.
	    @type {Number}
	    */
	    this.smoothing = this.settings.smoothing;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Multislider, _Interface);
	
	  _createClass(Multislider, {
	    buildInterface: {
	      value: function buildInterface() {
	        if (this._mode == "line") {
	          this.line = svg.create("polyline");
	          this.line.setAttribute("stroke-width", 2);
	          this.line.setAttribute("fill", "none");
	
	          this.element.appendChild(this.line);
	
	          this.fill = svg.create("polyline");
	          this.fill.setAttribute("fill-opacity", "0.2");
	
	          this.element.appendChild(this.fill);
	
	          this.nodes = [];
	
	          this.values.forEach((function (value, index) {
	            var node = svg.create("circle");
	
	            node.setAttribute("cx", this.getX(index));
	            node.setAttribute("cy", this.getY(value));
	
	            this.element.appendChild(node);
	            this.nodes.push(node);
	          }).bind(this));
	        } else {
	          this.bars = [];
	          this.caps = [];
	
	          this.values.forEach((function (value, index) {
	            var bar = svg.create("rect");
	
	            var x = this.getBarX(index);
	            var y = this.getY(value);
	
	            bar.setAttribute("x", x - 0.1);
	            bar.setAttribute("y", y);
	            bar.setAttribute("width", this.sliderWidth + 0.2);
	            bar.setAttribute("height", this.height);
	            bar.setAttribute("opacity", 1 - (index % this.candycane + 1) / (this.candycane + 1));
	
	            this.element.appendChild(bar);
	            this.bars.push(bar);
	
	            var cap = svg.create("rect");
	
	            cap.setAttribute("x", x - 0.1);
	            cap.setAttribute("y", y);
	            cap.setAttribute("width", this.sliderWidth + 0.2);
	            cap.setAttribute("height", 5);
	
	            this.element.appendChild(cap);
	            this.caps.push(cap);
	          }).bind(this));
	        }
	      }
	    },
	    getBarX: {
	      value: function getBarX(index) {
	        return this.getX(index) - this.sliderWidth / 2;
	      }
	    },
	    getX: {
	      value: function getX(index) {
	        //return Math.floor( index * this.sliderWidth + this.sliderWidth/2 );
	        return index * this.sliderWidth + this.sliderWidth / 2;
	      }
	    },
	    getY: {
	      value: function getY(value) {
	        return math.scale(value, this._min, this._max, this.height, 0); //(1 - value) * this.height;
	      }
	    },
	    getValueFromY: {
	      value: function getValueFromY(y) {
	        var scaleAdjusted = math.scale(y, this.height, 0, this._min, this._max);
	        return this.adjustValueToStep(scaleAdjusted);
	      }
	    },
	    getIndexFromX: {
	      value: function getIndexFromX(x) {
	        return math.clip(Math.floor(x / this.width * this.values.length), 0, this.values.length - 1);
	      }
	    },
	    adjustValueToStep: {
	      value: function adjustValueToStep(value) {
	        if (!this._step) {
	          return value;
	        }
	        var offset = value % this._step;
	        value = value - value % this._step;
	        if (offset > this._step / 2) {
	          value += this._step;
	        }
	        return value;
	      }
	    },
	    adjustAllValues: {
	      value: function adjustAllValues() {
	        this.values.forEach((function (value, index) {
	          value = this.adjustValueToStep(value);
	          this.values[index] = math.clip(value, this._min, this._max);
	        }).bind(this));
	      }
	    },
	    getNormalizedValues: {
	      value: function getNormalizedValues() {
	        this.normalizedValues = [];
	        this.values.forEach((function (value) {
	          this.normalizedValues.push(math.scale(value, this._min, this._max, 0, 1));
	        }).bind(this));
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        var _this = this;
	
	        this.element.style.backgroundColor = this.colors.fill;
	
	        if (this._mode == "line") {
	          this.line.setAttribute("stroke", this.colors.accent);
	          this.fill.setAttribute("fill", this.colors.accent);
	          this.nodes.forEach(function (node) {
	            node.setAttribute("fill", _this.colors.accent);
	          });
	        } else {
	          this.bars.forEach(function (bar) {
	            bar.setAttribute("fill", _this.colors.accent);
	          });
	          this.caps.forEach(function (cap) {
	            cap.setAttribute("fill", _this.colors.accent);
	          });
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.sliderWidth = this.width / this.values.length;
	
	        if (this._mode == "line") {
	          this.nodes.forEach((function (node) {
	            var r = ~ ~(Math.min(this.width, this.height) / 50) + 2;
	            r = Math.min(this.sliderWidth, r);
	            node.setAttribute("r", r);
	          }).bind(this));
	        }
	
	        this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        var _this = this;
	
	        if (this._mode == "line") {
	          (function () {
	            var data = "0 " + _this.getY(_this.values[0]) + ", ";
	
	            _this.values.forEach(function (value, index) {
	              var x = _this.getX(index);
	              var y = _this.getY(value);
	              data += x + " " + y + ", ";
	              _this.nodes[index].setAttribute("cx", _this.getX(index));
	              _this.nodes[index].setAttribute("cy", _this.getY(value));
	            });
	
	            data += _this.width + " " + _this.getY(_this.values[_this.values.length - 1]);
	
	            _this.line.setAttribute("points", data);
	
	            // fill data
	            // add bottom corners
	
	            data += ", " + _this.width + " " + _this.height + ", ";
	            data += "0 " + _this.height;
	
	            _this.fill.setAttribute("points", data);
	          })();
	        } else {
	          this.values.forEach(function (value, index) {
	            _this.bars[index].setAttribute("y", _this.getY(value));
	            _this.caps[index].setAttribute("y", _this.getY(value));
	          });
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.hasMoved = false;
	        this.previousSlider = false;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.mouse.x = math.clip(this.mouse.x, 0, this.width);
	          this.mouse.y = math.clip(this.mouse.y, 0, this.height);
	          this.hasMoved = true;
	
	          this.selectedSlider = this.getIndexFromX(this.mouse.x);
	
	          this.values[this.selectedSlider] = this.getValueFromY(this.mouse.y);
	
	          /* handle interpolation for in-between sliders */
	
	          if (this.previousSlider !== false) {
	            var distance = Math.abs(this.previousSlider - this.selectedSlider);
	            if (distance > 1) {
	              var low = Math.min(this.previousSlider, this.selectedSlider);
	              var high = Math.max(this.previousSlider, this.selectedSlider);
	              var lowValue = this.values[low];
	              var highValue = this.values[high];
	              for (var _i = low; _i < high; _i++) {
	                this.values[_i] = math.interp((_i - low) / distance, lowValue, highValue);
	                this.values[_i] = this.adjustValueToStep(this.values[_i]);
	              }
	            }
	          }
	
	          if (this.smoothing > 0) {
	            for (var i = 1; i <= this.smoothing; i++) {
	              var downCenter = this.selectedSlider - i;
	              var upCenter = this.selectedSlider + i;
	
	              if (downCenter >= 1) {
	                var downLowerNeighbor = downCenter - 1 >= 0 ? downCenter - 1 : 0;
	                var downUpperNeighbor = downCenter + 1;
	                this.values[downCenter] = (this.values[downLowerNeighbor] + this.values[downUpperNeighbor]) / 2;
	                this.values[downCenter] = this.adjustValueToStep(this.values[downCenter]);
	              }
	
	              if (upCenter < this.values.length - 1) {
	                var upLowerNeighbor = upCenter - 1;
	                var upUpperNeighbor = upCenter + 1 < this.values.length ? upCenter + 1 : this.values.length - 1;
	                this.values[upCenter] = (this.values[upLowerNeighbor] + this.values[upUpperNeighbor]) / 2;
	                this.values[upCenter] = this.adjustValueToStep(this.values[upCenter]);
	              }
	            }
	          }
	
	          this.previousSlider = this.selectedSlider;
	
	          this.emit("change", this.values);
	          this.render();
	        }
	      }
	    },
	    scan: {
	
	      // would be a cool API call to have for later...
	
	      value: function scan() {}
	    },
	    update: {
	      value: function update(index, value) {
	        this.values[index] = this.adjustValueToStep(value);
	        this.emit("change", {
	          index: index,
	          value: value
	        });
	      }
	    },
	    numberOfSliders: {
	
	      /**
	      Get the number of sliders
	      @type {Number}
	      */
	
	      get: function () {
	        return this.values.length;
	      }
	    },
	    min: {
	
	      /**
	      Lower limit of the multislider's output range
	      @type {number}
	      @example multislider.min = 1000;
	      */
	
	      get: function () {
	        return this._min;
	      },
	      set: function (v) {
	        this._min = v;
	        this.adjustAllValues();
	        this.render();
	      }
	    },
	    max: {
	
	      /**
	      Upper limit of the multislider's output range
	      @type {number}
	      @example multislider.max = 1000;
	      */
	
	      get: function () {
	        return this._max;
	      },
	      set: function (v) {
	        this._max = v;
	        this.adjustAllValues();
	        this.render();
	      }
	    },
	    step: {
	
	      /**
	      The increment that the multislider's value changes by.
	      @type {number}
	      @example multislider.step = 5;
	      */
	
	      get: function () {
	        return this._step;
	      },
	      set: function (v) {
	        this._step = v;
	        this.adjustAllValues();
	        this.render();
	      }
	    },
	    setSlider: {
	
	      /**
	      Set the value of an individual slider
	      @param index {number} Slider index
	      @param value {number} New slider value
	      @example
	      // Set the first slider to value 0.5
	      multislider.setSlider(0,0.5)
	      */
	
	      value: function setSlider(index, value) {
	        this.values[index] = this.adjustValueToStep(value);
	        this.values[index] = math.clip(this.values[index], this._min, this._max);
	        this.emit("change", {
	          index: index,
	          value: value
	        });
	      }
	    },
	    setAllSliders: {
	
	      /**
	      Set the value of all sliders at once. If the size of the input array does not match the current number of sliders, the value array will repeat until all sliders have been set. I.e. an input array of length 1 will set all sliders to that value.
	      @param values {Array} All slider values
	      @example
	      multislider.setAllSliders([0.2,0.3,0.4,0.5,0.6])
	      */
	
	      value: function setAllSliders(values) {
	        var previousLength = this.values.length;
	        var newLength = values.length;
	        this.values = values;
	        this.adjustAllValues();
	        if (previousLength != newLength) {
	          this.empty();
	          this.buildInterface();
	          this.colorInterface();
	        }
	        this.sizeInterface();
	      }
	    }
	  });
	
	  return Multislider;
	})(Interface);
	
	module.exports = Multislider;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	* Pan
	*
	* @description Stereo crossfader.
	*
	* @demo <span nexus-ui="pan"></span>
	*
	* @example
	* var pan = new Nexus.Pan('#target')
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is an object containing the interface's <i>value</i> (-1 to 1), as well as <i>L</i> and <i>R</i> amplitude values (0-1) for left and right speakers, calculated by a square-root crossfade algorithm.
	*
	* @outputexample
	* pan.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Pan = (function (_Interface) {
	  function Pan() {
	    _classCallCheck(this, Pan);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [120, 20],
	      orientation: "horizontal",
	      mode: "relative",
	      scale: [-1, 1],
	      step: 0,
	      value: 0,
	      hasKnob: true
	    };
	
	    _get(Object.getPrototypeOf(Pan.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.orientation = this.settings.orientation;
	
	    this.mode = this.settings.mode;
	
	    this.hasKnob = this.settings.hasKnob;
	
	    // this.step should eventually be get/set
	    // updating it will update the _value step model
	    this.step = this.settings.step; // float
	
	    this._value = new Step(this.settings.scale[0], this.settings.scale[1], this.settings.step, this.settings.value);
	
	    this.init();
	
	    this.position = new Interaction.Handle(this.mode, this.orientation, [0, this.width], [this.height, 0]);
	    this.position.value = this._value.normalized;
	
	    this.value = this._value.value;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(Pan, _Interface);
	
	  _createClass(Pan, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.knob);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (this.position) {
	          this.position.resize([0, this.width], [this.height, 0]);
	        }
	
	        if (this.width < this.height) {
	          this.orientation = "vertical";
	        } else {
	          this.orientation = "horizontal";
	        }
	
	        var x = undefined,
	            y = undefined,
	            w = undefined,
	            h = undefined,
	            barOffset = undefined,
	            cornerRadius = undefined;
	        this.knobData = {
	          level: 0,
	          r: 0
	        };
	
	        if (this.orientation === "vertical") {
	          this.thickness = this.width / 2;
	          x = this.width / 2;
	          y = 0;
	          w = this.thickness;
	          h = this.height;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = h - this.knobData.r - this.normalized * (h - this.knobData.r * 2);
	          barOffset = "translate(" + this.thickness * -1 / 2 + ",0)";
	          cornerRadius = w / 2;
	        } else {
	          this.thickness = this.height / 2;
	          x = 0;
	          y = this.height / 2;
	          w = this.width;
	          h = this.thickness;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = this.normalized * (w - this.knobData.r * 2) + this.knobData.r;
	          barOffset = "translate(0," + this.thickness * -1 / 2 + ")";
	          cornerRadius = h / 2;
	        }
	
	        this.bar.setAttribute("x", x);
	        this.bar.setAttribute("y", y);
	        this.bar.setAttribute("transform", barOffset);
	        this.bar.setAttribute("rx", cornerRadius); // corner radius
	        this.bar.setAttribute("ry", cornerRadius);
	        this.bar.setAttribute("width", w);
	        this.bar.setAttribute("height", h);
	
	        if (this.orientation === "vertical") {
	          this.knob.setAttribute("cx", x);
	          this.knob.setAttribute("cy", this.knobData.level);
	        } else {
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.knob.setAttribute("cy", y);
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        this.bar.setAttribute("fill", this.colors.fill);
	        this.knob.setAttribute("fill", this.colors.accent);
	
	        if (!this.hasKnob) {
	          this.knob.setAttribute("fill", "transparent");
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.clicked) {
	          this.knobData.r = this.thickness * 0.75;
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	
	        if (this.orientation === "vertical") {
	          this.knobData.level = this.knobData.r + this._value.normalized * (this.height - this.knobData.r * 2);
	          this.knob.setAttribute("cy", this.height - this.knobData.level);
	        } else {
	          this.knobData.level = this._value.normalized * (this.width - this.knobData.r * 2) + this.knobData.r;
	          this.knob.setAttribute("cx", this.knobData.level);
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.knobData.r = this.thickness * 0.9;
	        this.position.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.update(this.mouse);
	
	          this.value = this._value.updateNormal(this.position.value);
	
	          this.emit("change", {
	            value: this.value,
	            L: Math.pow(math.scale(this.value, -1, 1, 1, 0), 2),
	            R: Math.pow(math.scale(this.value, -1, 1, 0, 1), 2)
	          });
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    value: {
	
	      /**
	      The position of crossfader, from -1 (left) to 1 (right). Setting this value updates the interface and triggers the output event.
	      @type {number}
	      */
	
	      get: function () {
	        return this._value.value;
	      },
	      set: function (value) {
	        this._value.update(value);
	        this.position.value = this._value.normalized;
	        this.emit("change", {
	          value: this.value,
	          L: Math.pow(math.scale(this.value, -1, 1, 1, 0), 2),
	          R: Math.pow(math.scale(this.value, -1, 1, 0, 1), 2)
	        });
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return this._value.normalized;
	      }
	    }
	  });
	
	  return Pan;
	})(Interface);
	
	module.exports = Pan;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = __webpack_require__(5);
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	
	var Point = function Point(point, envelope) {
	
	  this.x = point.x;
	  this.y = point.y;
	
	  this.xMin = point.xMin || 0;
	  this.xMax = point.xMax || 1;
	  this.yMin = point.yMin || 0;
	  this.yMax = point.yMax || 1;
	
	  this.envelope = envelope;
	
	  this.element = svg.create("circle");
	  this.element.setAttribute("fill", this.envelope.colors.accent);
	
	  this.envelope.element.appendChild(this.element);
	
	  this.resize = function () {
	    var r = ~ ~(Math.min(this.envelope.width, this.envelope.height) / 50) + 2;
	    this.element.setAttribute("r", r);
	  };
	
	  this.move = function (x, y) {
	
	    this.x = x || x === 0 ? x : this.x;
	    this.y = y || y === 0 ? y : this.y;
	
	    if (this.envelope.nodes.indexOf(this) >= 0) {
	
	      var prevIndex = this.envelope.nodes.indexOf(this) - 1;
	      var nextIndex = this.envelope.nodes.indexOf(this) + 1;
	
	      var prevNode = this.envelope.nodes[prevIndex];
	      var nextNode = this.envelope.nodes[nextIndex];
	
	      var lowX = prevIndex >= 0 ? prevNode.x : 0;
	      lowX = lowX < this.xMin ? this.xMin : lowX;
	
	      var highX = nextIndex < this.envelope.nodes.length ? nextNode.x : 1;
	      highX = highX > this.xMax ? this.xMax : highX;
	
	      if (this.x < lowX) {
	        this.x = lowX;
	      }
	      if (this.x > highX) {
	        this.x = highX;
	      }
	
	      if (this.y < this.yMin) {
	        this.y = this.yMin;
	      }
	      if (this.y > this.yMax) {
	        this.y = this.yMax;
	      }
	    }
	
	    this.location = this.getCoordinates();
	    this.element.setAttribute("cx", this.location.x);
	    this.element.setAttribute("cy", this.location.y);
	  };
	
	  this.getCoordinates = function () {
	    return {
	      x: this.x * this.envelope.width,
	      y: (1 - this.y) * this.envelope.height
	    };
	  };
	
	  this.move(this.x, this.y, true);
	  this.resize();
	
	  this.destroy = function () {
	    this.envelope.element.removeChild(this.element);
	    this.envelope.nodes.splice(this.envelope.nodes.indexOf(this), 1);
	  };
	};
	
	/**
	* Envelope
	*
	* @description Interactive linear ramp visualization.
	*
	* @demo <span nexus-ui="envelope"></span>
	*
	* @example
	* var envelope = new Nexus.Envelope('#target')
	*
	* @example
	* var envelope = new Nexus.Envelope('#target',{
	*   'size': [300,150],
	*   'noNewPoints': false,
	*   'points': [
	*     {
	*       x: 0.1,
	*       y: 0.4
	*     },
	*     {
	*       x: 0.35,
	*       y: 0.6
	*     },
	*     {
	*       x: 0.65,
	*       y: 0.2
	*     },
	*     {
	*       x: 0.9,
	*       y: 0.4
	*     },
	*   ]
	* })
	*
	* @output
	* change
	* Fires any time a node is moved. <br>
	* The event data is an array of point locations. Each item in the array is an object containing <i>x</i> and <i>y</i> properties describing the location of a point on the envelope.
	*
	* @outputexample
	* envelope.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*/
	
	var Envelope = (function (_Interface) {
	  function Envelope() {
	    _classCallCheck(this, Envelope);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [300, 150],
	      noNewPoints: false,
	      points: [{
	        x: 0.1,
	        y: 0.4
	      }, {
	        x: 0.35,
	        y: 0.6
	      }, {
	        x: 0.65,
	        y: 0.2
	      }, {
	        x: 0.9,
	        y: 0.4
	      }]
	    };
	
	    _get(Object.getPrototypeOf(Envelope.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.points = this.settings.points;
	
	    this.nodes = [];
	
	    this.selected = false;
	
	    this.init();
	  }
	
	  _inherits(Envelope, _Interface);
	
	  _createClass(Envelope, {
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.points.forEach(function (point) {
	          var node = new Point(point, _this);
	          _this.nodes.push(node);
	        });
	
	        this.sortPoints();
	
	        this.line = svg.create("polyline");
	        this.line.setAttribute("stroke-width", 2);
	        this.line.setAttribute("fill", "none");
	
	        this.element.appendChild(this.line);
	
	        this.fill = svg.create("polyline");
	        this.fill.setAttribute("fill-opacity", "0.2");
	
	        this.element.appendChild(this.fill);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        for (var i = 0; i < this.nodes.length; i++) {
	          this.nodes[i].resize();
	          this.nodes[i].move();
	        }
	
	        this.render();
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        var _this = this;
	
	        this.element.style.backgroundColor = this.colors.fill;
	        this.line.setAttribute("stroke", this.colors.accent);
	        this.fill.setAttribute("fill", this.colors.accent);
	        this.nodes.forEach(function (node) {
	          node.element.setAttribute("fill", _this.colors.accent);
	        });
	      }
	    },
	    render: {
	      value: function render() {
	        //  this.nodes[this.selected].move( this.points )
	        this.calculatePath();
	      }
	    },
	    calculatePoints: {
	      value: function calculatePoints() {
	        var _this = this;
	
	        this.points = [];
	        this.nodes.forEach(function (node) {
	          _this.points.push({ x: node.x, y: node.y });
	        });
	      }
	    },
	    calculatePath: {
	      value: function calculatePath() {
	
	        //stroke data
	        var data = "0 " + this.nodes[0].location.y + ", ";
	
	        // data should be re-ordered based on x location.
	        // whatever function adds a node should add it at the right index
	
	        this.nodes.forEach(function (node) {
	          //  let location = node.getCoordinates();
	          data += node.location.x + " " + node.location.y + ", ";
	        });
	
	        //  data += point.x*this.width+' '+ point.y*this.height+', ';
	        data += this.width + " " + this.nodes[this.nodes.length - 1].location.y;
	
	        this.line.setAttribute("points", data);
	
	        // fill data
	        // add bottom corners
	
	        data += ", " + this.width + " " + this.height + ", ";
	        data += "0 " + this.height;
	
	        this.fill.setAttribute("points", data);
	      }
	    },
	    click: {
	      value: function click() {
	        // find nearest node and set this.selected (index)
	        this.hasMoved = false;
	        this.selected = this.findNearestNode();
	
	        this.nodes[this.selected].move(this.mouse.x / this.width, 1 - this.mouse.y / this.height);
	        this.scaleNode(this.selected);
	
	        // must do this b/c new node may have been created
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.mouse.x = math.clip(this.mouse.x, 0, this.width);
	          this.hasMoved = true;
	
	          this.nodes[this.selected].move(this.mouse.x / this.width, 1 - this.mouse.y / this.height);
	          this.scaleNode(this.selected);
	
	          this.calculatePoints();
	          this.emit("change", this.points);
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	
	        if (!this.hasMoved) {
	          this.nodes[this.selected].destroy();
	        }
	
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	
	        // reset this.selected
	        this.selected = null;
	      }
	    },
	    findNearestNode: {
	      value: function findNearestNode() {
	        var nearestIndex = null;
	        // set this unreasonably high so that every distance will be lower than it.
	        var nearestDist = 10000;
	        var before = false;
	        var x = this.mouse.x / this.width;
	        var y = 1 - this.mouse.y / this.height;
	        var nodes = this.nodes;
	        for (var i = 0; i < nodes.length; i++) {
	
	          // calculate the distance from mouse to this node using pythagorean theorem
	          var distance = Math.sqrt(Math.pow(nodes[i].x - x, 2) + Math.pow(nodes[i].y - y, 2));
	
	          // if this distance is less than the previous shortest distance, use this index
	          if (distance < nearestDist) {
	            nearestDist = distance;
	            nearestIndex = i;
	            before = x > nodes[i].x;
	          }
	        }
	
	        // if not very close to any node, create a node
	        if (!this.settings.noNewPoints && nearestDist > 0.07) {
	
	          nearestIndex = this.getIndexFromX(this.mouse.x / this.width);
	
	          this.nodes.splice(nearestIndex, 0, new Point({
	            x: this.mouse.x / this.width,
	            y: 1 - this.mouse.y / this.height
	          }, this));
	          this.hasMoved = true;
	        }
	
	        return nearestIndex;
	      }
	    },
	    getIndexFromX: {
	      value: function getIndexFromX(x) {
	        var _this = this;
	
	        var index = 0;
	        this.nodes.forEach(function (node, i) {
	          if (_this.nodes[i].x <= x) {
	            index = i + 1;
	          }
	        });
	        return index;
	      }
	    },
	    scaleNode: {
	      value: function scaleNode(i) {
	
	        var clippedX = math.clip(this.nodes[i].x, 0, 1);
	        var clippedY = math.clip(this.nodes[i].y, 0, 1);
	
	        this.nodes[i].move(clippedX, clippedY);
	      }
	    },
	    sortPoints: {
	
	      /**
	      Sort the this.points array from left-most point to right-most point. You should not regularly need to use this, however it may be useful if the points get unordered.
	      */
	
	      value: function sortPoints() {
	        this.nodes.sort(function (a, b) {
	          return a.x > b.x;
	        });
	      }
	    },
	    addPoint: {
	
	      /**
	      Add a breakpoint on the envelope.
	      @param x {number} x location of the point, normalized (0-1)
	      @param y {number} y location of the point, normalized (0-1)
	      */
	
	      value: function addPoint(x, y) {
	        var index = this.nodes.length;
	
	        this.sortPoints();
	
	        for (var i = 0; i < this.nodes.length; i++) {
	          if (x < this.nodes[i].x) {
	            index = i;
	            break;
	          }
	        }
	
	        this.nodes.splice(index, 0, new Point({
	          x: x,
	          y: y
	        }, this));
	
	        this.scaleNode(index);
	
	        this.calculatePoints();
	        this.emit("change", this.points);
	
	        this.render();
	      }
	    },
	    scan: {
	
	      /**
	      Find the level at a certain x location on the envelope.
	      @param x {number} The x location to find the level of, normalized 0-1
	      */
	
	      value: function scan(x) {
	        // find surrounding points
	        var nextIndex = this.getIndexFromX(x);
	        var priorIndex = nextIndex - 1;
	        if (priorIndex < 0) {
	          priorIndex = 0;
	        }
	        if (nextIndex >= this.nodes.length) {
	          nextIndex = this.nodes.length - 1;
	        }
	        var priorPoint = this.nodes[priorIndex];
	        var nextPoint = this.nodes[nextIndex];
	        var loc = math.scale(x, priorPoint.x, nextPoint.x, 0, 1);
	        var value = math.interp(loc, priorPoint.y, nextPoint.y);
	        this.emit("scan", value);
	        return value;
	      }
	    },
	    movePoint: {
	
	      /**
	      Move a breakpoint on the envelope.
	      @param index {number} The index of the breakpoint to move
	      @param x {number} New x location, normalized 0-1
	      @param y {number} New y location, normalized 0-1
	      */
	
	      value: function movePoint(index, x, y) {
	        this.nodes[index].move(x, y);
	        this.scaleNode(index);
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    },
	    adjustPoint: {
	
	      /**
	      Move a breakpoint on the envelope by a certain amount.
	      @param index {number} The index of the breakpoint to move
	      @param xOffset {number} X displacement, normalized 0-1
	      @param yOffset {number} Y displacement, normalized 0-1
	      */
	
	      value: function adjustPoint(index, xOffset, yOffset) {
	        this.nodes[index].move(this.nodes[index].x + xOffset, this.nodes[index].y + yOffset);
	        this.scaleNode(index);
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    },
	    destroyPoint: {
	
	      /**
	      Remove a breakpoint from the envelope.
	      @param index {number} Index of the breakpoint to remove
	      */
	
	      value: function destroyPoint(index) {
	        this.nodes[index].destroy();
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    },
	    setPoints: {
	
	      /**
	      Remove all existing breakpoints and add an entirely new set of breakpoints.
	      @param allPoints {array} An array of objects with x/y properties (normalized 0-1). Each object in the array specifices the x/y location of a new breakpoint to be added.
	      */
	
	      value: function setPoints(allPoints) {
	        var _this = this;
	
	        while (this.nodes.length) {
	          this.nodes[0].destroy();
	        }
	        allPoints.forEach(function (point) {
	          _this.addPoint(point.x, point.y);
	        });
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    }
	  });
	
	  return Envelope;
	})(Interface);
	
	module.exports = Envelope;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	var Interface = __webpack_require__(6);
	
	/**
	 * Spectrogram
	 *
	 * @description Audio spectrum visualization
	 *
	 * @demo <span nexus-ui="spectrogram"></span>
	 *
	 * @example
	 * var spectrogram = new Nexus.Spectrogram('#target')
	 * spectrogram.connect(myWebAudioNode)
	 *
	 * @example
	 * var spectrogram = new Nexus.Spectrogram('#target',{
	 *   'size': [300,150]
	 * })
	 * spectrogram.connect(myWebAudioNode)
	 *
	 * @output
	 * &nbsp;
	 * No events
	 *
	 */
	
	var Spectrogram = (function (_Interface) {
	  function Spectrogram() {
	    _classCallCheck(this, Spectrogram);
	
	    var options = [];
	
	    var defaults = {
	      size: [300, 150]
	    };
	
	    _get(Object.getPrototypeOf(Spectrogram.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.analyser = null;
	    this.bufferLength = 0;
	    this.dataArray = null;
	    this.active = false;
	    this.source = null;
	
	    this.init();
	  }
	
	  _inherits(Spectrogram, _Interface);
	
	  _createClass(Spectrogram, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.canvas = new dom.SmartCanvas(this.parent);
	        this.element = this.canvas.element;
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.canvas.resize(this.width, this.height);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.canvas.element.style.backgroundColor = this.colors.fill;
	      }
	    },
	    render: {
	      value: function render() {
	        if (this.active) {
	          requestAnimationFrame(this.render.bind(this));
	        }
	
	        if (this.analyser) {
	          this.analyser.getByteFrequencyData(this.dataArray);
	        }
	
	        this.canvas.context.fillStyle = this.colors.fill;
	        this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);
	
	        if (this.source && this.dataArray) {
	          //console.log(this.dataArray);
	
	          var barWidth = this.canvas.element.width / this.bufferLength;
	          var barHeight = undefined;
	          var x = 0;
	
	          var definition = this.canvas.element.width / 50;
	
	          for (var i = 0; i < this.bufferLength; i = i + definition) {
	            barHeight = Math.max.apply(null, this.dataArray.subarray(i, i + definition));
	            barHeight /= 255;
	            barHeight *= this.canvas.element.height;
	
	            this.canvas.context.fillStyle = this.colors.accent;
	            this.canvas.context.fillRect(x, this.canvas.element.height - barHeight, barWidth * definition, barHeight);
	
	            x += barWidth * definition;
	          }
	        }
	      }
	    },
	    connect: {
	
	      /**
	      Equivalent to "patching in" an audio node to visualize.
	      @param node {AudioNode} The audio node to visualize
	      @example spectrogram.connect( Tone.Master );
	      */
	
	      value: function connect(node) {
	        if (this.source) {
	          this.disconnect();
	        }
	
	        this.analyser = node.context.createAnalyser();
	        this.analyser.fftSize = 2048;
	        this.bufferLength = this.analyser.frequencyBinCount;
	        this.dataArray = new Uint8Array(this.bufferLength);
	
	        this.active = true;
	
	        this.source = node;
	        this.source.connect(this.analyser);
	
	        this.render();
	      }
	    },
	    disconnect: {
	
	      /**
	      Stop visualizing the source node and disconnect it.
	      */
	
	      value: function disconnect() {
	        if (this.source) {
	          this.source.disconnect(this.analyser);
	        }
	
	        this.analyser = null;
	        this.bufferLength = 0;
	        this.dataArray = null;
	        this.active = false;
	        this.source = null;
	      }
	    },
	    click: {
	      value: function click() {
	        this.active = !this.active && this.source;
	        this.render();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {
	        this.active = false;
	      }
	    }
	  });
	
	  return Spectrogram;
	})(Interface);
	
	module.exports = Spectrogram;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	
	/**
	 * Meter
	 *
	 * @description Stereo decibel meter
	 *
	 * @demo <span nexus-ui="meter"></span>
	 *
	 * @example
	 * var meter = new Nexus.Meter('#target')
	 * meter.connect(myWebAudioNode)
	 *
	 * @example
	 * var meter = new Nexus.Meter('#target', {
	 *   size: [75,75]
	 * })
	 * meter.connect(myWebAudioNode)
	 *
	 * @output
	 * &nbsp;
	 * No events
	 *
	 */
	
	var Meter = (function (_Interface) {
	  function Meter() {
	    _classCallCheck(this, Meter);
	
	    var options = [];
	
	    var defaults = {
	      size: [30, 100]
	    };
	
	    _get(Object.getPrototypeOf(Meter.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.channels = 2;
	    this.splitter = null;
	    this.analysers = [];
	    this.bufferLength = 0;
	    this.dataArray = null;
	    this.active = false;
	    this.source = null;
	    this.db = -Infinity;
	
	    this.init();
	
	    this.meterWidth = this.canvas.element.width / this.channels;
	
	    this.render();
	  }
	
	  _inherits(Meter, _Interface);
	
	  _createClass(Meter, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.canvas = new dom.SmartCanvas(this.parent);
	        this.element = this.canvas.element;
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.canvas.resize(this.width, this.height);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.canvas.element.style.backgroundColor = this.colors.fill;
	      }
	    },
	    render: {
	      value: function render() {
	        if (this.active) {
	          requestAnimationFrame(this.render.bind(this));
	        }
	
	        this.canvas.context.fillStyle = this.colors.fill;
	        this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);
	
	        for (var i = 0; i < this.analysers.length; i++) {
	          if (this.source) {
	            this.analysers[i].getFloatTimeDomainData(this.dataArray);
	
	            var rms = 0;
	
	            for (var _i = 0; _i < this.dataArray.length; _i++) {
	              rms += this.dataArray[_i] * this.dataArray[_i];
	            }
	
	            rms = Math.sqrt(rms / this.dataArray.length);
	
	            this.db = 20 * Math.log10(rms);
	          } else if (this.db > -200 && this.db !== -Infinity) {
	            this.db -= 1;
	          } else {
	            this.db = -Infinity;
	          }
	
	          //console.log(db)
	
	          if (this.db > -70) {
	            var linear = math.normalize(this.db, -70, 5);
	            var exp = linear * linear;
	            var y = math.scale(exp, 0, 1, this.element.height, 0);
	
	            this.canvas.context.fillStyle = this.colors.accent;
	            this.canvas.context.fillRect(this.meterWidth * i, y, this.meterWidth, this.canvas.element.height - y);
	
	            //console.log("rendering...")
	          }
	        }
	      }
	    },
	    connect: {
	
	      /**
	      Equivalent to "patching in" an audio node to visualize.
	      @param node {AudioNode} The audio node to visualize
	      @param channels {number} (optional) The number of channels in the source node to watch. If not specified, the interface will look for a .channelCount property on the input node. If it does not exist, the interface will default to 1 channel.
	      @example meter.connect( Tone.Master, 2 );
	      */
	
	      value: function connect(node, channels) {
	        if (this.source) {
	          this.disconnect();
	        }
	
	        this.channels = channels || node.channelCount || 2;
	
	        this.splitter = node.context.createChannelSplitter(this.channels);
	
	        this.analysers = [];
	        for (var i = 0; i < this.channels; i++) {
	          var analyser = node.context.createAnalyser();
	          analyser.fftSize = 1024;
	          analyser.smoothingTimeConstant = 1;
	          this.splitter.connect(analyser, i);
	          this.analysers.push(analyser);
	        }
	        this.bufferLength = this.analysers[0].frequencyBinCount;
	        this.dataArray = new Float32Array(this.bufferLength);
	
	        this.active = true;
	
	        this.meterWidth = this.canvas.element.width / this.channels;
	
	        this.source = node;
	        this.source.connect(this.splitter);
	
	        this.render();
	      }
	    },
	    disconnect: {
	
	      /**
	      Stop visualizing the source node and disconnect it.
	      */
	
	      value: function disconnect() {
	        if (this.source) {
	          this.source.disconnect(this.splitter);
	        }
	
	        this.splitter = null;
	        this.analysers = [];
	        this.bufferLength = 0;
	        this.dataArray = null;
	        this.active = false;
	        this.source = null;
	      }
	    },
	    click: {
	      value: function click() {
	        this.active = !this.active && this.source;
	        this.render();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {
	        this.active = false;
	      }
	    }
	  });
	
	  return Meter;
	})(Interface);
	
	module.exports = Meter;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	var Interface = __webpack_require__(6);
	
	/**
	 * Oscilloscope
	 *
	 * @description Visualizes a waveform's stream of values.
	 *
	 * @demo <span nexus-ui="oscilloscope"></span>
	 *
	 * @example
	 * var oscilloscope = new Nexus.Oscilloscope('#target')
	 * oscilloscope.connect(myWebAudioNode)
	 *
	 * @example
	 * var oscilloscope = new Nexus.Oscilloscope('#target',{
	 *   'size': [300,150]
	 * })
	 * oscilloscope.connect(myWebAudioNode)
	 *
	 * @output
	 * &nbsp;
	 * No events
	 *
	 */
	
	var Oscilloscope = (function (_Interface) {
	  function Oscilloscope() {
	    _classCallCheck(this, Oscilloscope);
	
	    var options = [];
	
	    var defaults = {
	      size: [300, 150]
	    };
	
	    _get(Object.getPrototypeOf(Oscilloscope.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.analyser = null;
	    this.bufferLength = 0;
	    this.dataArray = null;
	
	    this.active = false;
	
	    this.source = null;
	
	    this.init();
	
	    this.render();
	  }
	
	  _inherits(Oscilloscope, _Interface);
	
	  _createClass(Oscilloscope, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.canvas = new dom.SmartCanvas(this.parent);
	        this.element = this.canvas.element;
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.canvas.resize(this.width, this.height);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.canvas.element.style.backgroundColor = this.colors.fill;
	      }
	    },
	    render: {
	      value: function render() {
	        if (this.active) {
	          requestAnimationFrame(this.render.bind(this));
	        }
	
	        if (this.analyser) {
	          this.analyser.getByteTimeDomainData(this.dataArray);
	        }
	
	        this.canvas.context.fillStyle = this.colors.fill;
	        this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);
	
	        this.canvas.context.lineWidth = ~ ~(this.height / 100 + 2);
	        this.canvas.context.strokeStyle = this.colors.accent;
	
	        this.canvas.context.beginPath();
	
	        if (this.source) {
	          var sliceWidth = this.canvas.element.width * 1 / this.bufferLength;
	          var x = 0;
	
	          for (var i = 0; i < this.bufferLength; i++) {
	            var v = this.dataArray[i] / 128;
	            var y = v * this.canvas.element.height / 2;
	
	            if (i === 0) {
	              this.canvas.context.moveTo(x, y);
	            } else {
	              this.canvas.context.lineTo(x, y);
	            }
	
	            x += sliceWidth;
	          }
	        } else {
	          this.canvas.context.moveTo(0, this.canvas.element.height / 2);
	          this.canvas.context.lineTo(this.canvas.element.width, this.canvas.element.height / 2);
	        }
	
	        this.canvas.context.stroke();
	      }
	    },
	    connect: {
	
	      /**
	      Equivalent to "patching in" an audio node to visualize.
	      @param node {AudioNode} The audio node to visualize
	      @example oscilloscope.connect( Tone.Master );
	      */
	
	      value: function connect(node) {
	        if (this.source) {
	          this.disconnect();
	        }
	
	        this.analyser = node.context.createAnalyser();
	        this.analyser.fftSize = 2048;
	        this.bufferLength = this.analyser.frequencyBinCount;
	        this.dataArray = new Uint8Array(this.bufferLength);
	        this.analyser.getByteTimeDomainData(this.dataArray);
	
	        this.active = true;
	
	        this.source = node;
	        this.source.connect(this.analyser);
	
	        this.render();
	      }
	    },
	    disconnect: {
	
	      /**
	      Stop visualizing the source node and disconnect it.
	      */
	
	      value: function disconnect() {
	        if (this.source) {
	          this.source.disconnect(this.analyser);
	        }
	
	        this.analyser = null;
	        this.bufferLength = 0;
	        this.dataArray = null;
	        this.active = false;
	        this.source = null;
	      }
	    },
	    click: {
	      value: function click() {
	        this.active = !this.active && this.source;
	        this.render();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {
	        this.active = false;
	      }
	    }
	  });
	
	  return Oscilloscope;
	})(Interface);
	
	module.exports = Oscilloscope;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	/*
	Main concept:
	synth = new Nexus.Rack('elementID');
	
	Transform all elements inside the div
	synth.elementID will hold the first slider interface
	
	2) In future, potentially writing a rack that is re-usable?
	Could also take JSON
	
	new Nexus.Rack('#target',{
	  pre: () => {
	    create some divs here, or some audio code
	  },
	  interface: {
	    slider1: Nexus.add.slider({
	      top:10,
	      left:10,
	      width:50,
	      height:100,
	      min: 0,
	      max: 100,
	      step: 1
	    }),
	    wave1: Nexus.add.waveform({
	      file: './path/to/file.mp3',
	      width:500,
	      height:100,
	      mode: 'range'
	    })
	  },
	  init: () => {
	    // some audio init code goes here...
	  }
	});
	
	*/
	
	var transform = _interopRequireWildcard(__webpack_require__(39));
	
	var dom = _interopRequire(__webpack_require__(7));
	
	var colors = __webpack_require__(1).colors;
	
	var Rack = (function () {
	  function Rack(target, settings) {
	    _classCallCheck(this, Rack);
	
	    this.meta = {};
	    this.meta.target = target;
	    this.meta.parent = dom.parseElement(target); // should be a generic function for parsing a 'target' argument that checks for string/DOM/jQUERY
	    this.meta.colors = {};
	
	    if (settings) {
	      this.meta.attribute = settings.attribute || "nexus-ui";
	      this.meta.title = settings.name || false;
	      this.meta.open = settings.open || false;
	    } else {
	      this.meta.attribute = "nexus-ui";
	      this.meta.title = false;
	      this.meta.open = false;
	    }
	
	    var defaultColors = colors(); // jshint ignore:line
	    this.meta.colors.accent = defaultColors.accent;
	    this.meta.colors.fill = defaultColors.fill;
	    this.meta.colors.light = defaultColors.light;
	    this.meta.colors.dark = defaultColors.dark;
	    this.meta.colors.mediumLight = defaultColors.mediumLight;
	    this.meta.colors.mediumDark = defaultColors.mediumDark;
	    this.buildInterface();
	    this.colorInterface();
	  }
	
	  _createClass(Rack, {
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.meta.parent.style.boxSizing = "border-box";
	        this.meta.parent.style.userSelect = "none";
	        this.meta.parent.style.mozUserSelect = "none";
	        this.meta.parent.style.webkitUserSelect = "none";
	
	        this.meta.contents = document.createElement("div");
	
	        while (this.meta.parent.childNodes.length > 0) {
	          this.meta.contents.appendChild(this.meta.parent.childNodes[0]);
	        }
	
	        this.meta.contents.style.padding = "0px";
	        this.meta.contents.style.boxSizing = "border-box";
	
	        if (this.meta.title) {
	          this.meta.titleBar = document.createElement("div");
	          this.meta.titleBar.innerHTML = this.meta.title;
	          this.meta.titleBar.style.fontFamily = "arial";
	          this.meta.titleBar.style.position = "relative";
	          this.meta.titleBar.style.color = "#888";
	          this.meta.titleBar.style.padding = "7px";
	          this.meta.titleBar.style.fontSize = "12px";
	
	          this.meta.button = document.createElement("div");
	          this.meta.button.style.position = "absolute";
	          this.meta.button.style.top = "5px";
	          this.meta.button.style.right = "5px";
	          this.meta.button.innerHTML = "-";
	          this.meta.button.style.padding = "0px 5px 2px";
	          this.meta.button.style.lineHeight = "12px";
	          this.meta.button.style.fontSize = "15px";
	
	          this.meta.button.style.cursor = "pointer";
	
	          this.meta.button.addEventListener("mouseover", function () {
	            _this.meta.button.style.backgroundColor = _this.meta.colors.mediumDark;
	          });
	          this.meta.button.addEventListener("mouseleave", function () {
	            _this.meta.button.style.backgroundColor = _this.meta.colors.mediumLight;
	          });
	          this.meta.button.addEventListener("click", function () {
	            if (_this.meta.open) {
	              _this.hide();
	            } else {
	              _this.show();
	            }
	          });
	
	          this.meta.titleBar.appendChild(this.meta.button);
	
	          this.meta.parent.appendChild(this.meta.titleBar);
	        }
	        this.meta.parent.appendChild(this.meta.contents);
	
	        //  var width = this.meta.parent.style.width = getComputedStyle(this.meta.parent).getPropertyValue('width');
	        //    this.meta.parent.style.width = width;
	
	        var ui = transform.section(this.meta.target, this.meta.attribute);
	        for (var key in ui) {
	          this[key] = ui[key];
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        if (this.meta.title) {
	          this.meta.button.style.backgroundColor = this.meta.colors.mediumLight;
	          this.meta.button.style.border = "solid 0px " + this.meta.colors.fill;
	          this.meta.parent.style.border = "solid 1px " + this.meta.colors.mediumLight;
	          this.meta.parent.style.backgroundColor = this.meta.colors.light;
	          this.meta.titleBar.style.backgroundColor = this.meta.colors.fill;
	        }
	      }
	    },
	    show: {
	      value: function show() {
	        this.meta.contents.style.display = "block";
	        this.meta.open = true;
	      }
	    },
	    hide: {
	      value: function hide() {
	        this.meta.contents.style.display = "none";
	        this.meta.open = false;
	      }
	    },
	    colorize: {
	      value: function colorize(type, color) {
	        for (var key in this) {
	          if (this[key].colorize) {
	            this[key].colorize(type, color);
	          }
	        }
	        this.meta.colors[type] = color;
	        this.colorInterface();
	      }
	    },
	    empty: {
	      value: function empty() {
	        for (var key in this) {
	          if (this[key].destroy) {
	            this[key].destroy();
	          }
	        }
	      }
	    }
	  });
	
	  return Rack;
	})();
	
	module.exports = Rack;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	"use strict";
	
	var dom = _interopRequire(__webpack_require__(7));
	
	var Interfaces = _interopRequire(__webpack_require__(2));
	
	var createInterfaceID = function (widget, interfaceIDs) {
	  var type = widget.type;
	  if (interfaceIDs[type]) {
	    interfaceIDs[type]++;
	  } else {
	    interfaceIDs[type] = 1;
	  }
	  return type + interfaceIDs[type];
	};
	
	var element = function (element, type, options) {
	  options = options || {};
	  for (var i = 0; i < element.attributes.length; i++) {
	    var att = element.attributes[i];
	    //  try {
	    //    options[att.nodeName] = eval(att.nodeValue);
	    //  } catch(e) {
	    options[att.nodeName] = att.nodeValue;
	    //  }
	  }
	  type = type[0].toUpperCase() + type.slice(1);
	  var widget = new Interfaces[type](element, options);
	  widget.id = element.id;
	  return widget;
	};
	
	var section = function (parent, keyword) {
	
	  keyword = keyword || "nexus-ui";
	
	  var interfaceIDs = {};
	
	  var container = dom.parseElement(parent);
	
	  var ui = {};
	
	  var htmlElements = container.getElementsByTagName("*");
	  var elements = [];
	  for (var i = 0; i < htmlElements.length; i++) {
	    elements.push(htmlElements[i]);
	  }
	  for (var i = 0; i < elements.length; i++) {
	    var type = elements[i].getAttribute(keyword);
	    if (type) {
	      var formattedType = false;
	      for (var key in Interfaces) {
	        if (type.toLowerCase() === key.toLowerCase()) {
	          formattedType = key;
	        }
	      }
	      console.log(formattedType);
	      var widget = element(elements[i], formattedType);
	      if (widget.id) {
	        ui[widget.id] = widget;
	      } else {
	        var id = createInterfaceID(widget, interfaceIDs);
	        ui[id] = widget;
	      }
	    }
	  }
	
	  return ui;
	};
	
	var add = function (type, parent, options) {
	  var target = document.createElement("div");
	  options = options || {};
	  if (parent) {
	    parent = dom.parseElement(parent);
	  } else {
	    parent = document.body;
	  }
	  parent.appendChild(target);
	  options.target = target;
	  if (options.size) {
	    target.style.width = options.size[0] + "px";
	    target.style.height = options.size[1] + "px";
	  }
	  return element(target, type, options);
	};
	
	exports.element = element;
	exports.section = section;
	exports.add = add;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Tune = (function () {
	  function Tune() {
	    _classCallCheck(this, Tune);
	
	    // the scale as ratios
	    this.scale = [];
	
	    // i/o modes
	    this.mode = {
	      output: "frequency",
	      input: "step"
	    };
	
	    // ET major
	    this.etmajor = [261.62558, 293.664764, 329.627563, 349.228241, 391.995422, 440, 493.883301, 523.25116];
	
	    // Root frequency.
	    this.root = math.mtof(60); // * Math.pow(2,(60-69)/12);
	
	    // default is a major scale
	    this.createScale(0, 2, 4, 5, 7, 9, 11);
	  }
	
	  _createClass(Tune, {
	    note: {
	
	      /* Return data in the mode you are in (freq, ratio, or midi) */
	
	      value: function note(input, octave) {
	        var newvalue = undefined;
	
	        if (this.mode.output === "frequency") {
	          newvalue = this.frequency(input, octave);
	        } else if (this.mode.output === "ratio") {
	          newvalue = this.ratio(input, octave);
	        } else if (this.mode.output === "MIDI") {
	          newvalue = this.MIDI(input, octave);
	        } else {
	          newvalue = this.frequency(input, octave);
	        }
	
	        return newvalue;
	      }
	    },
	    frequency: {
	
	      /* Return freq data */
	
	      value: function frequency(stepIn, octaveIn) {
	        if (this.mode.input === "midi" || this.mode.input === "MIDI") {
	          this.stepIn += 60;
	        }
	
	        // what octave is our input
	        var octave = Math.floor(stepIn / this.scale.length);
	
	        if (octaveIn) {
	          octave += octaveIn;
	        }
	
	        // which scale degree (0 - scale length) is our input
	        var scaleDegree = stepIn % this.scale.length;
	
	        while (scaleDegree < 0) {
	          scaleDegree += this.scale.length;
	        }
	
	        var ratio = this.scale[scaleDegree];
	
	        var freq = this.root * ratio;
	
	        freq = freq * Math.pow(2, octave);
	
	        // truncate irrational numbers
	        freq = Math.floor(freq * 100000000000) / 100000000000;
	
	        return freq;
	      }
	    },
	    ratio: {
	
	      /* Force return ratio data */
	
	      value: function ratio(stepIn, octaveIn) {
	        if (this.mode.input === "midi" || this.mode.input === "MIDI") {
	          this.stepIn += 60;
	        }
	
	        // what octave is our input
	        var octave = Math.floor(stepIn / this.scale.length);
	
	        if (octaveIn) {
	          octave += octaveIn;
	        }
	
	        // which scale degree (0 - scale length) is our input
	        var scaleDegree = stepIn % this.scale.length;
	
	        // what ratio is our input to our key
	        var ratio = Math.pow(2, octave) * this.scale[scaleDegree];
	
	        ratio = Math.floor(ratio * 100000000000) / 100000000000;
	
	        return ratio;
	      }
	    },
	    MIDI: {
	
	      /* Force return adjusted MIDI data */
	
	      value: function MIDI(stepIn, octaveIn) {
	        var newvalue = this.frequency(stepIn, octaveIn);
	
	        var n = 69 + 12 * Math.log(newvalue / 440) / Math.log(2);
	
	        n = Math.floor(n * 1000000000) / 1000000000;
	
	        return n;
	      }
	    },
	    createScale: {
	      value: function createScale() {
	        var newScale = [];
	        for (var i = 0; i < arguments.length; i++) {
	          newScale.push(math.mtof(60 + arguments[i]));
	        }
	        this.loadScaleFromFrequencies(newScale);
	      }
	    },
	    createJIScale: {
	      value: function createJIScale() {
	        this.scale = [];
	        for (var i = 0; i < arguments.length; i++) {
	          this.scale.push(arguments[i]);
	        }
	      }
	    },
	    loadScaleFromFrequencies: {
	      value: function loadScaleFromFrequencies(freqs) {
	        this.scale = [];
	        for (var i = 0; i < freqs.length; i++) {
	          this.scale.push(freqs[i] / freqs[0]);
	        }
	      }
	    },
	    loadScale: {
	
	      /* Load a new scale */
	
	      value: function loadScale(name) {
	        /* load the scale */
	        var freqs = this.scales[name].frequencies;
	        this.loadScaleFromFrequencies(freqs);
	      }
	    },
	    search: {
	
	      /* Search the names of tunings
	      	 Returns an array of names of tunings */
	
	      value: function search(letters) {
	        var possible = [];
	        for (var key in this.scales) {
	          if (key.toLowerCase().indexOf(letters.toLowerCase()) !== -1) {
	            possible.push(key);
	          }
	        }
	        return possible;
	      }
	    },
	    chord: {
	
	      /* Return a collection of notes as an array */
	
	      value: function chord(midis) {
	        var output = [];
	        for (var i = 0; i < midis.length; i++) {
	          output.push(this.note(midis[i]));
	        }
	        return output;
	      }
	    }
	  });
	
	  return Tune;
	})();
	
	module.exports = Tune;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	//Disable jshint warning concerning trailing regular params
	/*jshint -W138 */
	
	var Radio = (function () {
	    //if non-existent buttons are switched, they are ignored
	
	    function Radio() {
	        for (var _len = arguments.length, onVals = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            onVals[_key - 1] = arguments[_key];
	        }
	
	        var length = arguments[0] === undefined ? 3 : arguments[0];
	
	        _classCallCheck(this, Radio);
	
	        //each optional 'onVals' argument switches on that value in the Radio if it exists
	        //In the example below, a 3-button radio is created, index 0 is switched on, index 1 is switched on then then attempted again producing an warning, and the final argument produces a warning because the index value does not exist.
	        //Example:
	        //`  radio = new Radio(3, 0, 1, 1, 3);
	        //…  [1,1,0]
	
	        if (length < 0) {
	            length = 1;
	        }
	
	        this.length = length;
	        this.onVals = onVals;
	        this.array = new Array(length).fill(0);
	
	        if (onVals.length > 0) {
	            this.on.apply(this, onVals);
	        }
	    }
	
	    _createClass(Radio, {
	        select: {
	            value: function select(value) {
	                this.array.fill(0);
	                this.array[value] = 1;
	                return this.array;
	            }
	        },
	        flip: {
	            value: function flip() {
	                for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	                    values[_key] = arguments[_key];
	                }
	
	                //flips the specified values. if no value is specified, flips all buttons
	                var a = this.array;
	                if (values.length > 0) {
	                    values.forEach(function (v) {
	                        if (v > a.length - 1) {
	                            console.warn("Warning: AnonRadio[" + v + "] does not exist");
	                        } else {
	                            a[v] = a[v] ? 0 : 1;
	                        }
	                    });
	                } else {
	                    a.forEach(function (v, i, arr) {
	                        arr[i] = v ? 0 : 1;
	                    });
	                }
	                return a;
	            }
	        },
	        on: {
	            value: function on() {
	                for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	                    values[_key] = arguments[_key];
	                }
	
	                //switch on the specified values. if no value specified, flips on all buttons
	                var a = this.array;
	                if (values.length > 0) {
	                    values.forEach(function (v) {
	                        if (v > a.length - 1) {
	                            console.warn("Warning: AnonRadio[" + v + "] exceeds size of object");
	                        } else {
	                            if (a[v] === 1) {
	                                console.warn("Warning: AnonRadio[" + v + "] was already on.");
	                            }
	                            a[v] = 1;
	                        }
	                    });
	                } else {
	                    a.fill(1);
	                }
	                return a;
	            }
	        },
	        off: {
	            value: function off() {
	                for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	                    values[_key] = arguments[_key];
	                }
	
	                //switch off the specified values. if no value specified, flips off all buttons
	                var a = this.array;
	                if (values.length > 0) {
	                    values.forEach(function (v) {
	                        a[v] = 0;
	                    });
	                } else {
	                    a.fill(0);
	                }
	                return a;
	            }
	        }
	    });
	
	    return Radio;
	})();
	
	module.exports = Radio;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4ZGY4OGNjMmIzN2ZhZDBjNDVkMCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbC9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWwvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29yZS9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWwvZG9tLmpzIiwid2VicGFjazovLy8uL2xpYi91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWwvdG91Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL2xpYi9tb2RlbHMvc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbC9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbW9kZWxzL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2ludGVyZmFjZXMvdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL2xpYi9pbnRlcmZhY2VzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy9idXR0b250ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy90ZXh0YnV0dG9uLmpzIiwid2VicGFjazovLy8uL2xpYi9pbnRlcmZhY2VzL3JhZGlvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2xpYi9pbnRlcmZhY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2ludGVyZmFjZXMvZGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9waWFuby5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9zZXF1ZW5jZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21vZGVscy9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21vZGVscy9zZXF1ZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbW9kZWxzL2RydW5rLmpzIiwid2VicGFjazovLy8uL2xpYi9tb2RlbHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdGltZS9pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9wYW4yZC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy90aWx0LmpzIiwid2VicGFjazovLy8uL2xpYi9pbnRlcmZhY2VzL211bHRpc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbnRlcmZhY2VzL3Bhbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9lbnZlbG9wZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9zcGVjdHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9tZXRlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9vc2NpbGxvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvcmUvcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbC90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3R1bmluZy90dW5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21vZGVscy9yYWRpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7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QUMsR0FBRyxFQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLEVBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUU7VUFDN0YsQ0FBQztBQUNGLGFBQUksYUFBYSxHQUFHO0FBQ2xCLGdCQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRSxHQUFHO0FBQ25CLGNBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsRUFBRyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBRTtVQUM3RixDQUFDOztBQUVGLGFBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBQyxDQUFDLEdBQUMsUUFBUSxHQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzRyxhQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUMsQ0FBQyxHQUFDLFFBQVEsR0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRTlHLGFBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxVQUFVLENBQUMsQ0FBQztBQUN6QyxhQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsV0FBVyxDQUFDLENBQUM7O0FBRzNDLG1CQUFV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QUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxlQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RCxlQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RCxlQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RCxlQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRCxlQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRCxlQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRCxlQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxlQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxlQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxlQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztVQUNuRCxNQUFNO0FBQ0wsZUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3RELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzVELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzVELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzVELGVBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pELGVBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pELGVBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pELGVBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELGVBQUksQ0FBQyxLQUFL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QVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQzs7QUFFcEQsV0FBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsV0FBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRTlDLFdBQUksSUFBSSxHQUFHLFNBQVMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUMsV0FBSSxHQUFHLElBQUksR0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDOztBQUVwQyxXQUFJLEtBQUssR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JFLFlBQUssR0FBRyxLQUFLLEdBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQzs7QUFFeEMsV0FBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRTtBQUFFLGFBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQUU7QUFDcEMsV0FBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRTtBQUFFLGFBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQUU7O0FBRXZDLFdBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQUUsYUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQUU7QUFDL0MsV0FBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBRSxhQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFBRTtNQUVoRDs7QUFFRCxTQUFJLENBQUMs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Q0FBQyxFQUFFO0FBQ2xCLG9DQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsR0FBRywwQkFBMEIsQ0FBQyxDQUFDOzBCQUN4RSxNQUFNO0FBQ0gsaUNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUFFLHdDQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDOzhCQUFFO0FBQ2xGLDhCQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzBCQUNaO3NCQUNKLENBQUMsQ0FBQztrQkFDTixNQUFNO0FBQ0gsc0JBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7a0JBQ2I7QUFDRCx3QkFBTyxDQUFDLENBQUM7Y0FDWjs7QUFFRCxZQUFHO29CQUFBLGVBQVk7bURBQVIsTUFBTTtBQUFOLDJCQUFNOzs7O0FBRVQscUJBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDbkIscUJBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDbkIsMkJBQU0sQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDLEVBQUU7QUFDdkIsMEJBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7c0JBQ1osQ0FBQyxDQUFDO2tCQUNOLE1BQU07QUFDSCxzQkFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztrQkFDYjtBQUNELHdCQUFPLENBQUMsQ0FBQztjQUNaOzs7O1lBM0VnQixLQUFLOzs7a0JBQUwsS0FBSyxDIiwiZmlsZSI6Ii4vZGlzdC9OZXh1c1VJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTmV4dXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTmV4dXNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGRmODhjYzJiMzdmYWQwYzQ1ZDAiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBOZXh1c1VJIGZyb20gJy4vbGliL21haW4nO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh1c1VJO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBJbnRlcmZhY2VzIGZyb20gJy4vaW50ZXJmYWNlcy8nO1xuaW1wb3J0IG1hdGggZnJvbSAnLi91dGlsL21hdGgnO1xuaW1wb3J0IFJhY2sgZnJvbSAnLi9jb3JlL3JhY2snO1xuaW1wb3J0IFR1bmUgZnJvbSAnLi90dW5pbmcvdHVuaW5nJztcbmltcG9ydCAqIGFzIFRyYW5zZm9ybSBmcm9tICcuL3V0aWwvdHJhbnNmb3JtJztcblxubGV0IENvdW50ZXIgPSByZXF1aXJlKCcuL21vZGVscy9jb3VudGVyJyk7XG5sZXQgUmFkaW8gPSByZXF1aXJlKCcuL21vZGVscy9yYWRpbycpO1xubGV0IERydW5rID0gcmVxdWlyZSgnLi9tb2RlbHMvZHJ1bmsnKTtcbmxldCBTZXF1ZW5jZSA9IHJlcXVpcmUoJy4vbW9kZWxzL3NlcXVlbmNlJyk7XG5sZXQgTWF0cml4ID0gcmVxdWlyZSgnLi9tb2RlbHMvbWF0cml4Jyk7XG5cbi8vIGltcG9ydCBXQUFDbG9jayBmcm9tICd3YWFjbG9jayc7XG5pbXBvcnQgSW50ZXJ2YWwgZnJvbSAnLi90aW1lL2ludGVydmFsJztcblxuXG4vKipcbk5leHVzVUkgPT4gY3JlYXRlZCBhcyBOZXh1c1xuKi9cblxuY2xhc3MgTmV4dXNVSSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIEludGVyZmFjZXMpIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IEludGVyZmFjZXNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBtYXRoKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBtYXRoW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgQ29yZSA9IHtcbiAgICAgICAgICAnUmFjayc6IFJhY2tcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgTW9kZWxzID0ge1xuICAgICAgICAgICdDb3VudGVyJzogQ291bnRlcixcbiAgICAgICAgICAnUmFkaW8nOiBSYWRpbyxcbiAgICAgICAgICAnRHJ1bmsnOiBEcnVuayxcbiAgICAgICAgICAnU2VxdWVuY2UnOiBTZXF1ZW5jZSxcbiAgICAgICAgICAnTWF0cml4JzogTWF0cml4XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIE1vZGVscykge1xuICAgICAgICAgIHRoaXNba2V5XSA9IE1vZGVsc1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIENvcmUpIHtcbiAgICAgICAgICB0aGlzW2tleV0gPSBDb3JlW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgRGVmYXVsdENvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4gICAgICAgIC8vIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBEZWZhdWx0Q29udGV4dCgpO1xuXG4gICAgICAgIHRoaXMudHVuZSA9IG5ldyBUdW5lKCk7XG4gICAgICAgIHRoaXMubm90ZSA9IHRoaXMudHVuZS5ub3RlLmJpbmQodGhpcy50dW5lKTtcblxuICAgICAgICAvLyB0aGlzLmNsb2NrID0gbmV3IFdBQUNsb2NrKHRoaXMuX2NvbnRleHQpO1xuICAgICAgICAvLyB0aGlzLmNsb2NrLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuSW50ZXJ2YWwgPSBJbnRlcnZhbDtcblxuICAgICAgICB0aGlzLmNvbG9ycyA9IHtcbiAgICAgICAgICBhY2NlbnQ6ICcjMmJiJyxcbiAgICAgICAgICBmaWxsOiAnI2VlZScsXG4gICAgICAgICAgbGlnaHQ6ICcjZmZmJyxcbiAgICAgICAgICBkYXJrOiAnIzMzMycsXG4gICAgICAgICAgbWVkaXVtTGlnaHQ6ICcjY2NjJyxcbiAgICAgICAgICBtZWRpdW1EYXJrOiAnIzY2NidcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IFRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5hZGQgPSBUcmFuc2Zvcm0uYWRkO1xuXG5cbiAgICAgICAgdGhpcy5BZGQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIEludGVyZmFjZXMpIHtcbiAgICAgICAgICB0aGlzLkFkZFtrZXldID0gVHJhbnNmb3JtLmFkZC5iaW5kKHRoaXMsa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGNyZWF0ZSBkZWZhdWx0IGNvbXBvbmVudCBzaXplIGFzIDFzdCBzdHlsZSBlbGVtZW50IGluIGRvY3VtZW50ICovXG4gICAgICAgIHZhciBkZWZhdWx0U3R5bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgZGVmYXVsdFN0eWxlTm9kZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgZGVmYXVsdFN0eWxlTm9kZS5pbm5lckhUTUwgPSAnW25leHVzLXVpXXtoZWlnaHQ6NTAwMHB4O3dpZHRoOjUwMDBweH0nO1xuICAgICAgICB2YXIgaCA9IGRvY3VtZW50LmhlYWQ7XG4gICAgICAgIGguaW5zZXJ0QmVmb3JlKGRlZmF1bHRTdHlsZU5vZGUsIGguZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgLy8gcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzZXQgY29udGV4dChjdHgpIHtcbiAgICAgIC8vIHRoaXMuY2xvY2suc3RvcCgpO1xuICAgICAgLy8gdGhpcy5fY29udGV4dCA9IGN0eDtcbiAgICAgIC8vIHRoaXMuY2xvY2sgPSBuZXcgV0FBQ2xvY2sodGhpcy5jb250ZXh0KTtcbiAgICAgIC8vIHRoaXMuY2xvY2suc3RhcnQoKTtcbiAgICAvLyAgIHJldHVybiBudWxsO1xuICAgIC8vIH1cblxuXG5cbn1cblxubGV0IE5leHVzID0gbmV3IE5leHVzVUkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9ycygpIHtcbiAgICByZXR1cm4gTmV4dXMuY29sb3JzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoKSB7XG4gICAgLy8gcmV0dXJuIE5leHVzLmNvbnRleHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xvY2soKSB7XG4gICAgLy8gcmV0dXJuIE5leHVzLmNsb2NrO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh1cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9tYWluLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBQb3NpdGlvbjogcmVxdWlyZSgnLi9wb3NpdGlvbicpLFxuICBTbGlkZXI6IHJlcXVpcmUoJy4vc2xpZGVyJyksXG4gIFRvZ2dsZTogcmVxdWlyZSgnLi90b2dnbGUnKSxcbi8qICBSYW5nZTogcmVxdWlyZSgnLi9yYW5nZXNsaWRlcicpLFxuICBXYXZlZm9ybTogcmVxdWlyZSgnLi93YXZlZm9ybScpLCAqL1xuICBCdXR0b246IHJlcXVpcmUoJy4vYnV0dG9uJyksXG4gIFRleHRCdXR0b246IHJlcXVpcmUoJy4vdGV4dGJ1dHRvbicpLFxuICBSYWRpb0J1dHRvbjogcmVxdWlyZSgnLi9yYWRpb2J1dHRvbicpLFxuICBOdW1iZXI6IHJlcXVpcmUoJy4vbnVtYmVyJyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9zZWxlY3QnKSxcbiAgRGlhbDogcmVxdWlyZSgnLi9kaWFsJyksXG4gIFBpYW5vOiByZXF1aXJlKCcuL3BpYW5vJyksXG4gIFNlcXVlbmNlcjogcmVxdWlyZSgnLi9zZXF1ZW5jZXInKSxcbiAgUGFuMkQ6IHJlcXVpcmUoJy4vcGFuMmQnKSxcbiAgVGlsdDogcmVxdWlyZSgnLi90aWx0JyksXG4gIE11bHRpc2xpZGVyOiByZXF1aXJlKCcuL211bHRpc2xpZGVyJyksXG4gIFBhbjogcmVxdWlyZSgnLi9wYW4nKSxcbiAgRW52ZWxvcGU6IHJlcXVpcmUoJy4vZW52ZWxvcGUnKSxcbiAgU3BlY3Ryb2dyYW06IHJlcXVpcmUoJy4vc3BlY3Ryb2dyYW0nKSxcbiAgTWV0ZXI6IHJlcXVpcmUoJy4vbWV0ZXInKSxcbiAgT3NjaWxsb3Njb3BlOiByZXF1aXJlKCcuL29zY2lsbG9zY29wZScpXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2ludGVyZmFjZXMvaW5kZXguanMiLCJcbid1c2Ugc3RyaWN0JztcblxubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcbmxldCBTdGVwID0gcmVxdWlyZSgnLi4vbW9kZWxzL3N0ZXAnKTtcbmltcG9ydCAqIGFzIEludGVyYWN0aW9uIGZyb20gJy4uL3V0aWwvaW50ZXJhY3Rpb24nO1xuXG4vKipcbiogUG9zaXRpb25cbipcbiogQGRlc2NyaXB0aW9uIFR3by1kaW1lbnNpb25hbCB0b3VjaCBzbGlkZXIuXG4qXG4qIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwicG9zaXRpb25cIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBwb3NpdGlvbiA9IG5ldyBOZXh1cy5Qb3NpdGlvbignI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciBwb3NpdGlvbiA9IG5ldyBOZXh1cy5Qb3NpdGlvbignI3RhcmdldCcse1xuKiAgICdzaXplJzogWzIwMCwyMDBdLFxuKiAgICdtb2RlJzogJ2Fic29sdXRlJywgIC8vIFwiYWJzb2x1dGVcIiBvciBcInJlbGF0aXZlXCJcbiogICAneCc6IDAuNSwgIC8vIGluaXRpYWwgeCB2YWx1ZVxuKiAgICdtaW5YJzogMCxcbiogICAnbWF4WCc6IDEsXG4qICAgJ3N0ZXBYJzogMCxcbiogICAneSc6IDAuNSwgIC8vIGluaXRpYWwgeSB2YWx1ZVxuKiAgICdtaW5ZJzogMCxcbiogICAnbWF4WSc6IDEsXG4qICAgJ3N0ZXBZJzogMFxuKiB9KVxuKlxuKiBAb3V0cHV0XG4qIGNoYW5nZVxuKiBGaXJlcyBhbnkgdGltZSB0aGUgaW50ZXJmYWNlJ3MgdmFsdWUgY2hhbmdlcy4gPGJyPlxuKiBUaGUgZXZlbnQgZGF0YSBpcyBhbiBvYmplY3Qgd2l0aCB4IGFuZCB5IHByb3BlcnRpZXMgY29udGFpbmluZyB0aGUgeCBhbmQgeSB2YWx1ZXMgb2YgdGhlIGludGVyZmFjZS5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogcG9zaXRpb24ub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuKiAgIGNvbnNvbGUubG9nKHYpO1xuKiB9KVxuKlxuKlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24gZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ3ZhbHVlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAnc2l6ZSc6IFsyMDAsMjAwXSxcbiAgICAgICdtb2RlJzogJ2Fic29sdXRlJyxcbiAgICAgICdtaW5YJzogMCxcbiAgICAgICdtYXhYJzogMSxcbiAgICAgICdzdGVwWCc6IDAsXG4gICAgICAneCc6IDAuNSxcbiAgICAgICdtaW5ZJzogMCxcbiAgICAgICdtYXhZJzogMSxcbiAgICAgICdzdGVwWSc6IDAsXG4gICAgICAneSc6IDAuNVxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cblxuICAgIHRoaXMuX3ggPSBuZXcgU3RlcCggdGhpcy5zZXR0aW5ncy5taW5YLCB0aGlzLnNldHRpbmdzLm1heFgsIHRoaXMuc2V0dGluZ3Muc3RlcFgsIHRoaXMuc2V0dGluZ3MueCApO1xuICAgIHRoaXMuX3kgPSBuZXcgU3RlcCggdGhpcy5zZXR0aW5ncy5taW5ZLCB0aGlzLnNldHRpbmdzLm1heFksIHRoaXMuc2V0dGluZ3Muc3RlcFksIHRoaXMuc2V0dGluZ3MueSApO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IG5ldyBJbnRlcmFjdGlvbi5IYW5kbGUodGhpcy5zZXR0aW5ncy5tb2RlLCdob3Jpem9udGFsJyxbMCx0aGlzLndpZHRoXSxbdGhpcy5oZWlnaHQsMF0pLFxuICAgICAgeTogbmV3IEludGVyYWN0aW9uLkhhbmRsZSh0aGlzLnNldHRpbmdzLm1vZGUsJ3ZlcnRpY2FsJyxbMCx0aGlzLndpZHRoXSxbdGhpcy5oZWlnaHQsMF0pXG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uLngudmFsdWUgPSB0aGlzLl94Lm5vcm1hbGl6ZWQ7XG4gICAgdGhpcy5wb3NpdGlvbi55LnZhbHVlID0gdGhpcy5feS5ub3JtYWxpemVkO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmtub2IgPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5rbm9iKTtcbiAgICBcbiAgfVxuXG4gIHNpemVJbnRlcmZhY2UoKSB7XG5cbiAgICAgIHRoaXMucG9zaXRpb24ueC5yZXNpemUoWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcbiAgICAgIHRoaXMucG9zaXRpb24ueS5yZXNpemUoWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcblxuICAgICAgdGhpcy5fbWluRGltZW5zaW9uID0gTWF0aC5taW4odGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG5cbiAgICAgIHRoaXMua25vYlJhZGl1cyA9IHtcbiAgICAgICAgb2ZmOiB+fih0aGlzLl9taW5EaW1lbnNpb24vMTAwKSAqIDUgKyA1LFxuICAgICAgfTtcbiAgICAgIHRoaXMua25vYlJhZGl1cy5vbiA9IHRoaXMua25vYlJhZGl1cy5vZmYgKiAyO1xuXG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy53aWR0aC8yKTtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N5Jyx0aGlzLmhlaWdodC8yKTtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ3InLHRoaXMua25vYlJhZGl1cy5vZmYpO1xuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnMuZmlsbDtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmNsaWNrZWQpIHtcbiAgICAvLyAgdGhpcy5rbm9iUmFkaXVzID0gMzA7XG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdyJyx0aGlzLmtub2JSYWRpdXMub24pO1xuICAgIH0gZWxzZSB7XG4gICAgLy8gIHRoaXMua25vYlJhZGl1cyA9IDE1O1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgncicsdGhpcy5rbm9iUmFkaXVzLm9mZik7XG4gICAgfVxuXG4gICAgdGhpcy5rbm9iQ29vcmRpbmF0ZXMgPSB7XG4gICAgICB4OiB0aGlzLl94Lm5vcm1hbGl6ZWQgKiB0aGlzLndpZHRoLFxuICAgICAgeTogdGhpcy5oZWlnaHQgLSB0aGlzLl95Lm5vcm1hbGl6ZWQgKiB0aGlzLmhlaWdodFxuICAgIH07XG5cbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy5rbm9iQ29vcmRpbmF0ZXMueCk7XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3knLHRoaXMua25vYkNvb3JkaW5hdGVzLnkpO1xuICB9XG5cblxuICBjbGljaygpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnguYW5jaG9yID0gdGhpcy5tb3VzZTtcbiAgICB0aGlzLnBvc2l0aW9uLnkuYW5jaG9yID0gdGhpcy5tb3VzZTtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54LnVwZGF0ZSh0aGlzLm1vdXNlKTtcbiAgICAgIHRoaXMucG9zaXRpb24ueS51cGRhdGUodGhpcy5tb3VzZSk7XG4gICAgICB0aGlzLl94LnVwZGF0ZU5vcm1hbCggdGhpcy5wb3NpdGlvbi54LnZhbHVlICk7XG4gICAgICB0aGlzLl95LnVwZGF0ZU5vcm1hbCggdGhpcy5wb3NpdGlvbi55LnZhbHVlICk7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgICB4OiB0aGlzLl94LnZhbHVlLFxuICAgICAgICB5OiB0aGlzLl95LnZhbHVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVsZWFzZSgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICogVGhlIGludGVyZmFjZSdzIHggdmFsdWUuIFdoZW4gc2V0LCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYWRqdXN0IHRvIGZpdCBtaW4vbWF4L3N0ZXAgc2V0dGluZ3Mgb2YgdGhlIGludGVyZmFjZS5cbiAgKiBAdHlwZSB7b2JqZWN0fVxuICAqIEBleGFtcGxlIHBvc2l0aW9uLnggPSAwLjU7XG4gICovXG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3gudmFsdWU7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3gudXBkYXRlKHZhbHVlKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgeDogdGhpcy5feC52YWx1ZSxcbiAgICAgIHk6IHRoaXMuX3kudmFsdWVcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICogVGhlIGludGVyZmFjZSdzIHkgdmFsdWVzLiBXaGVuIHNldCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGFkanVzdCB0byBmaXQgbWluL21heC9zdGVwIHNldHRpbmdzIG9mIHRoZSBpbnRlcmZhY2UuXG4gICogQHR5cGUge29iamVjdH1cbiAgKiBAZXhhbXBsZSBwb3NpdGlvbi54ID0gMC41O1xuICAqL1xuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95LnZhbHVlO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLl95LnVwZGF0ZSh2YWx1ZSk7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgIHg6IHRoaXMuX3gudmFsdWUsXG4gICAgICB5OiB0aGlzLl95LnZhbHVlXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG5cblxuICBnZXQgbm9ybWFsaXplZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdGhpcy5feC5ub3JtYWxpemVkLFxuICAgICAgeTogdGhpcy5feS5ub3JtYWxpemVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAqIFRoZSBsb3dlciBsaW1pdCBvZiB2YWx1ZSBvbiB0aGUgeCBheGlzXG4gICogQHR5cGUge29iamVjdH1cbiAgKi9cbiAgZ2V0IG1pblgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3gubWluO1xuICB9XG5cbiAgc2V0IG1pblgodikge1xuICAgIHRoaXMuX3gubWluID0gdjtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICogVGhlIGxvd2VyIGxpbWl0IG9mIHZhbHVlIG9uIHRoZSB5IGF4aXNcbiAgKiBAdHlwZSB7b2JqZWN0fVxuICAqL1xuICBnZXQgbWluWSgpIHtcbiAgICByZXR1cm4gdGhpcy5feS5taW47XG4gIH1cblxuICBzZXQgbWluWSh2KSB7XG4gICAgdGhpcy5feS5taW4gPSB2O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICAqIFRoZSB1cHBlciBsaW1pdCBvZiB2YWx1ZSBvbiB0aGUgeCBheGlzXG4gICogQHR5cGUge29iamVjdH1cbiAgKi9cbiAgZ2V0IG1heFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3gubWF4O1xuICB9XG5cbiAgc2V0IG1heFgodikge1xuICAgIHRoaXMuX3gubWF4ID0gdjtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cblxuICAvKipcbiAgKiBUaGUgdXBwZXIgbGltaXQgb2YgdmFsdWUgb24gdGhlIHkgYXhpc1xuICAqIEB0eXBlIHtvYmplY3R9XG4gICovXG4gIGdldCBtYXhZKCkge1xuICAgIHJldHVybiB0aGlzLl95Lm1heDtcbiAgfVxuXG4gIHNldCBtYXhZKHYpIHtcbiAgICB0aGlzLl95Lm1heCA9IHY7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICogVGhlIGluY3JlbWVudGFsIHN0ZXAgb2YgdmFsdWVzIG9uIHRoZSB4IGF4aXNcbiAgKiBAdHlwZSB7b2JqZWN0fVxuICAqL1xuICBnZXQgc3RlcFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3guc3RlcDtcbiAgfVxuXG4gIHNldCBzdGVwWCh2KSB7XG4gICAgdGhpcy5feC5zdGVwID0gdjtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cblxuICAvKipcbiAgKiBUaGUgaW5jcmVtZW50YWwgc3RlcCBvZiB2YWx1ZXMgb24gdGhlIHkgYXhpc1xuICAqIEB0eXBlIHtvYmplY3R9XG4gICovXG4gIGdldCBzdGVwWSgpIHtcbiAgICByZXR1cm4gdGhpcy5feS5zdGVwO1xuICB9XG5cbiAgc2V0IHN0ZXBZKHYpIHtcbiAgICB0aGlzLl95LnN0ZXAgPSB2O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICBBYnNvbHV0ZSBtb2RlIChwb3NpdGlvbidzIHZhbHVlIGp1bXBzIHRvIG1vdXNlIGNsaWNrIHBvc2l0aW9uKSBvciByZWxhdGl2ZSBtb2RlIChtb3VzZSBkcmFnIGNoYW5nZXMgdmFsdWUgcmVsYXRpdmUgdG8gaXRzIGN1cnJlbnQgcG9zaXRpb24pLiBEZWZhdWx0OiBcImFic29sdXRlXCIuXG4gIEB0eXBlIHtzdHJpbmd9XG4gIEBleGFtcGxlIHBvc2l0aW9uLm1vZGUgPSBcInJlbGF0aXZlXCI7XG4gICovXG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLngubW9kZTtcbiAgfVxuICBzZXQgbW9kZSh2KSB7XG4gICAgdGhpcy5wb3NpdGlvbi54Lm1vZGUgPSB2O1xuICAgIHRoaXMucG9zaXRpb24ueS5tb2RlID0gdjtcbiAgfVxuXG5cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9wb3NpdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1hdGggPSByZXF1aXJlKCcuLi91dGlsL21hdGgnKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNyZWF0ZTogKHR5cGUpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICB9LFxuXG4gIGFyYzogKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpID0+IHtcblxuICAgIHZhciBzdGFydCA9IG1hdGgudG9DYXJ0ZXNpYW4ocmFkaXVzLCBlbmRBbmdsZSk7XG4gICAgdmFyIGVuZCA9IG1hdGgudG9DYXJ0ZXNpYW4ocmFkaXVzLCBzdGFydEFuZ2xlKTtcblxuICAgIHZhciBsYXJnZUFyY0ZsYWcgPSBlbmRBbmdsZSAtIHN0YXJ0QW5nbGUgPD0gMTgwID8gJzAnIDogJzEnO1xuXG4gICAgdmFyIGQgPSBbXG4gICAgICAgICdNJywgc3RhcnQueCt4LCBzdGFydC55K3ksXG4gICAgICAgICdBJywgcmFkaXVzLCByYWRpdXMsIDAsIGxhcmdlQXJjRmxhZywgMCwgZW5kLngreCwgZW5kLnkreVxuICAgIF0uam9pbignICcpO1xuXG4gICAgcmV0dXJuIGQ7XG4gIH0sXG5cbiAgcmFkaWFsR3JhZGllbnQ6IChkZWZzLG51bWJlck9mU3RvcHMpID0+IHtcblxuICAgIGxldCBpZCA9ICdncmFkaWVudCcgKyBtYXRoLnJpKDEwMDAwMDAwMDAwMCk7XG4gICAgbGV0IHN0b3BzID0gW107XG5cbiAgICBsZXQgZ3JhZGllbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3JhZGlhbEdyYWRpZW50Jyk7XG4gICAgZ3JhZGllbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBncmFkaWVudC5zZXRBdHRyaWJ1dGUoJ2N4JywgJzUwJScpO1xuICAgIGdyYWRpZW50LnNldEF0dHJpYnV0ZSgnY3knLCAnNTAlJyk7XG4gICAgZ3JhZGllbnQuc2V0QXR0cmlidXRlKCdyJywgJzUwJScpO1xuXG4gICAgZGVmcy5hcHBlbmRDaGlsZChncmFkaWVudCk7XG5cbiAgICBmb3IgKGxldCBpPTA7aTxudW1iZXJPZlN0b3BzO2krKykge1xuICAgICAgbGV0IHN0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N0b3AnKTtcbiAgICAgIHN0b3Auc2V0QXR0cmlidXRlKCdpZCcsICdzdG9wJytpKTtcbiAgICAgIC8vc3RvcC5zZXRBdHRyaWJ1dGUoJ29mZnNldCcsICc3MCUnKTtcbiAgICAgIC8vc3RvcC5zZXRBdHRyaWJ1dGUoJ3N0b3AtY29sb3InLCAnV2hpdGUnKTtcbiAgICAgIGdyYWRpZW50LmFwcGVuZENoaWxkKHN0b3ApO1xuICAgICAgc3RvcHMucHVzaChzdG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgc3RvcHM6IHN0b3BzLFxuICAgICAgZWxlbWVudDogZ3JhZGllbnRcbiAgICB9O1xuXG4gIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi91dGlsL3N2Zy5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBMaW1pdCBhIG51bWJlciB0byB3aXRoaW4gYSBtaW5pbXVtIGFuZCBtYXhpbXVtXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlIElucHV0IHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pbiAgIExvd2VyIGxpbWl0XG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heCAgIFVwcGVyIGxpbWl0XG4gKiBAcmV0dXJuIHtudW1iZXJ9ICAgICAgIFRoZSBpbnB1dCB2YWx1ZSBjb25zdHJhaW5lZCB3aXRoaW4gdGhlIGxvd2VyIGFuZCB1cHBlciBsaW1pdHNcbiAqIEBleGFtcGxlXG4gKiBOZXh1cy5jbGlwKDExLDAsMTApICAgLy8gcmV0dXJucyAxMFxuICogTmV4dXMuY2xpcCgtMSwwLDEwKSAgIC8vIHJldHVybnMgMFxuICogTmV4dXMuY2xpcCg1LDAsMTApICAgIC8vIHJldHVybnMgNVxuICovXG5cbmV4cG9ydHMuY2xpcCA9ICh2YWx1ZSxtaW4sbWF4KSA9PiB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSxtaW4pLG1heCk7XG59O1xuXG5leHBvcnRzLm5vcm1hbGl6ZSA9ICh2YWx1ZSxtaW4sbWF4KSA9PiB7XG4gIHJldHVybiAoICh2YWx1ZS1taW4pIC8gKG1heC1taW4pICk7XG59O1xuXG4vKipcbiAqIFNjYWxlIGEgdmFsdWUgZnJvbSBvbmUgcmFuZ2UgdG8gYW5vdGhlciByYW5nZS5cbiAqIEBwYXJhbSAge251bWJlcn0gaW5OdW0gIElucHV0IHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGluTWluICBJbnB1dCByYW5nZSBtaW5pbXVtXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGluTWF4ICBJbnB1dCByYW5nZSBtYXhpbXVtXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG91dE1pbiBPdXRwdXQgcmFuZ2UgbWluaW11bVxuICogQHBhcmFtICB7bnVtYmVyfSBvdXRNYXggT3V0cHV0IHJhbmdlIG1heGltdW1cbiAqIEByZXR1cm4ge251bWJlcn0gICAgICAgIFRoZSBpbnB1dCB2YWx1ZSBzY2FsZWQgdG8gaXRzIG5ldyByYW5nZVxuICogQGV4YW1wbGVcbiAqIE5leHVzLnNjYWxlKDAuNSwwLDEsMCwxMCkgICAvLyByZXR1cm5zIDVcbiAqIE5leHVzLnNjYWxlKDAuOSwwLDEsMSwwKSAgICAvLyByZXR1cm5zIDAuMVxuICovXG5leHBvcnRzLnNjYWxlID0gKGluTnVtLCBpbk1pbiwgaW5NYXgsIG91dE1pbiwgb3V0TWF4KSA9PiB7XG4gIGlmIChpbk1pbiA9PT0gaW5NYXgpIHtcbiAgICByZXR1cm4gb3V0TWluO1xuICB9XG4gIHJldHVybiAoKChpbk51bSAtIGluTWluKSAqIChvdXRNYXggLSBvdXRNaW4pKSAvIChpbk1heCAtIGluTWluKSkgKyBvdXRNaW47XG59O1xuXG5leHBvcnRzLnRvUG9sYXIgPSAoeCx5KSA9PiB7XG4gIHZhciByID0gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG5cbiAgdmFyIHRoZXRhID0gTWF0aC5hdGFuMih5LHgpO1xuICBpZiAodGhldGEgPCAwKSB7XG4gICAgdGhldGEgPSB0aGV0YSArICgyICogTWF0aC5QSSk7XG4gIH1cbiAgcmV0dXJuIHtyYWRpdXM6IHIsIGFuZ2xlOiB0aGV0YX07XG59O1xuXG5leHBvcnRzLnRvQ2FydGVzaWFuID0gZnVuY3Rpb24ocmFkaXVzLCBhbmdsZSl7XG4gIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gIHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gIHJldHVybiB7eDogcmFkaXVzKmNvcywgeTogcmFkaXVzKnNpbiotMX07XG59O1xuLypcbmV4cG9ydHMucG9sYXJUb0NhcnRlc2lhbihjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIGFuZ2xlSW5EZWdyZWVzKSB7XG4gIHZhciBhbmdsZUluUmFkaWFucyA9IChhbmdsZUluRGVncmVlcy05MCkgKiBNYXRoLlBJIC8gMTgwLjA7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBjZW50ZXJYICsgKHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSksXG4gICAgeTogY2VudGVyWSArIChyYWRpdXMgKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucykpXG4gIH07XG59ICAqL1xuXG5cblxuZXhwb3J0cy5wcnVuZSA9IGZ1bmN0aW9uKGRhdGEsIHNjYWxlKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KGRhdGEudG9GaXhlZChzY2FsZSkpO1xufTtcblxuZXhwb3J0cy5pbnZlcnQgPSBmdW5jdGlvbiAoaW5OdW0pIHtcbiAgcmV0dXJuIGV4cG9ydHMuc2NhbGUoaW5OdW0sIDEsIDAsIDAsIDEpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgTUlEaSBub3RlIG51bWJlciB0byBhIGZyZXF1ZW5jeSB2YWx1ZSBpbiBlcXVhbCB0ZW1wZXJhbWVudC5cbiAqIEBwYXJhbSAge251bWJlcn0gbWlkaSBNSURJIG5vdGUgdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gICAgICBGcmVxdWVuY2UgdmFsdWVcbiAqIEBleGFtcGxlXG4gKiBOZXh1cy5tdG9mKDYwKSAgLy8gcmV0dXJucyB0aGUgZnJlcXVlbmN5IG51bWJlciBvZiBNaWRkbGUgQ1xuICovXG5leHBvcnRzLm10b2YgPSBmdW5jdGlvbihtaWRpKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAoKG1pZGktNjkpLzEyKSkgKiA0NDA7XG59O1xuXG4vKipcbiAqIEludGVycG9sYXRlIGJldHdlZW4gdHdvIG51bWJlcnNcbiAqIEBwYXJhbSAge251bWJlcn0gbG9jIEludGVycG9sYXRpb24gaW5kZXggKDAtMSlcbiAqIEBwYXJhbSAge251bWJlcn0gbWluIExvd2VyIHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heCBVcHBlciB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSAgICAgSW50ZXJwb2xhdGVkIHZhbHVlXG4gKiBAZXhhbXBsZVxuICogTmV4dXMuaW50ZXJwKDAuNSwyLDQpICAgLy8gcmV0dXJucyAzXG4gKiBOZXh1cy5pbnRlcnAoMC4xLDAsMTApICAgICAvLyByZXR1cm5zIDFcbiAqL1xuZXhwb3J0cy5pbnRlcnAgPSBmdW5jdGlvbihsb2MsbWluLG1heCkge1xuICByZXR1cm4gbG9jICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKipcbiAqIFJldHVybiBhIHJhbmRvbSBjaG9pY2UgZnJvbSBhIGxpc3Qgb2YgYXJndW1lbnRzXG4gKiBAcmV0dXJuIHt2YXJpb3VzfSBPbmUgcmFuZG9tIGFyZ3VtZW50XG4gKiBAZXhhbXBsZVxuICogTmV4dXMucGljaygxLDIsMyw0KSAgIC8vIHJldHVybnMgMSwgMiwgMywgb3IgNFxuICogTmV4dXMucGljayhmdW5jdGlvbjEsZnVuY3Rpb24yKSAgIC8vIHJldHVybnMgZWl0aGVyIGZ1bmN0aW9uMSBvciBmdW5jdGlvbjJcbiAqL1xuZXhwb3J0cy5waWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBhcmd1bWVudHNbfn4oTWF0aC5yYW5kb20oKSphcmd1bWVudHMubGVuZ3RoKV07XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2N0YXZlIG11bHRpcGxpZXIgZm9yIGZyZXF1ZW5jeSB2YWx1ZXNcbiAqIEBwYXJhbSAge251bWJlcn0gbnVtIFJlbGF0aXZlIG9jdGF2ZSBudW1iZXIgKGUuZy4gLTEgZm9yIG9uZSBvY3RhdmUgZG93biwgMSBmb3Igb25lIG9jdGF2ZSB1cClcbiAqIEByZXR1cm4ge251bWJlcn0gICAgIE9jdGF2ZSBtdWx0aXBsaWVyXG4gKiBAZXhhbXBsZVxuICogTmV4dXMub2N0YXZlKC0xKSAgLy8gcmV0dXJucyAwLjVcbiAqIE5leHVzLm9jdGF2ZSgwKSAgIC8vIHJldHVybnMgMVxuICogTmV4dXMub2N0YXZlKDEpICAgLy8gcmV0dXJucyAyXG4gKiBOZXh1cy5vY3RhdmUoMikgICAvLyByZXR1cm5zIDRcbiAqL1xuZXhwb3J0cy5vY3RhdmUgPSBmdW5jdGlvbihudW0pIHtcbiAgcmV0dXJuIE1hdGgucG93KDIsbnVtKTtcbn07XG5cbi8qKlxuICogUmFuZG9tIGludGVnZXIgZ2VuZXJhdG9yLiBJZiBubyBzZWNvbmQgYXJndW1lbnQgaXMgZ2l2ZW4sIHdpbGwgcmV0dXJuIHJhbmRvbSBpbnRlZ2VyIGZyb20gMCB0byBib3VuZDEuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGJvdW5kMSBNaW5pbXVtIHJhbmRvbSB2YWx1ZVxuICogQHBhcmFtICB7bnVtYmVyfSBib3VuZDIgTWF4aW11bSByYW5kb20gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gICAgICAgIFJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGJvdW5kYXJ5XG4gKiBAZXhhbXBsZVxuICogTmV4dXMucmkoMTApICAgIC8vIHJldHVybnMgcmFuZG9tIGludCBmcm9tIDAgdG8gMTBcbiAqIE5leHVzLnJpKDIwLDIwMDApIC8vIHJldHVybnMgcmFuZG9tIGludCBmcm9tIDIwIHRvIDIwMDBcbiAqL1xuZXhwb3J0cy5yaSA9IGZ1bmN0aW9uKGJvdW5kMSxib3VuZDIpIHtcbiAgaWYgKCFib3VuZDIpIHtcbiAgICBib3VuZDIgPSBib3VuZDE7XG4gICAgYm91bmQxID0gMDtcbiAgfVxuICB2YXIgbG93ID0gTWF0aC5taW4oYm91bmQxLGJvdW5kMik7XG4gIHZhciBoaWdoID0gTWF0aC5tYXgoYm91bmQxLGJvdW5kMik7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKGhpZ2gtbG93KStsb3cpO1xufTtcblxuLyoqXG4gKiBSYW5kb20gZmxvYXQgbnVtYmVyIGdlbmVyYXRvci4gSWYgbm8gc2Vjb25kIGFyZ3VtZW50IGlzIGdpdmVuLCB3aWxsIHJldHVybiByYW5kb20gZmxvYXQgZnJvbSAwIHRvIGJvdW5kMS5cbiAqIEBwYXJhbSAge251bWJlcn0gYm91bmQxIE1pbmltdW0gcmFuZG9tIHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGJvdW5kMiBNYXhpbXVtIHJhbmRvbSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSAgICAgICAgUmFuZG9tIGZsb2F0IGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGJvdW5kYXJ5XG4gKiBAZXhhbXBsZVxuICogTmV4dXMucmYoMSkgICAgLy8gcmV0dXJucyByYW5kb20gZmxvYXQgZnJvbSAwIHRvIDFcbiAqIE5leHVzLnJmKDEsMikgLy8gcmV0dXJucyByYW5kb20gZmxvYXQgZnJvbSAxIHRvIDJcbiAqL1xuZXhwb3J0cy5yZiA9IGZ1bmN0aW9uKGJvdW5kMSxib3VuZDIpIHtcbiAgaWYgKCFib3VuZDIpIHtcbiAgICBib3VuZDIgPSBib3VuZDE7XG4gICAgYm91bmQxID0gMDtcbiAgfVxuICB2YXIgbG93ID0gTWF0aC5taW4oYm91bmQxLGJvdW5kMik7XG4gIHZhciBoaWdoID0gTWF0aC5tYXgoYm91bmQxLGJvdW5kMik7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpKihoaWdoLWxvdykrbG93O1xufTtcblxuXG5leHBvcnRzLmN5Y2xlID0gZnVuY3Rpb24oaW5wdXQsbWluLG1heCkge1xuICBpbnB1dCsrO1xuICBpZiAoaW5wdXQgPj0gbWF4KSB7XG4gICAgaW5wdXQgPSBtaW47XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuLyoqXG4gKiBBdmVyYWdlIGFuIGFycmF5IG9mIG51bWJlcnNcbiAqIEBwYXJhbSAge0FycmF5fSBkYXRhIEFycmF5IG9mIG51bWJlcnMgdG8gYXZlcmFnZVxuICogQHJldHVybiB7bnVtYmVyfSAgICAgIEF2ZXJhZ2Ugb2YgdGhlIGlucHV0IGRhdGFcbiAqIEBleGFtcGxlXG4gKiBOZXh1cy5hdmVyYWdlKFswLDIsNCw2LDgsMTBdKSAgIC8vIHJldHVybnMgNVxuICovXG5leHBvcnRzLmF2ZXJhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKykge1xuICAgIHRvdGFsICs9IGRhdGFbaV07XG4gIH1cbiAgcmV0dXJuIHRvdGFsIC8gZGF0YS5sZW5ndGg7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGlzdGFuY2UgZnJvbSBvbmUgKHgseSkgcG9pbnQgdG8gYW5vdGhlciAoeCx5KSBwb2ludFxuICogQHBhcmFtICB7bnVtYmVyfSB4MSB4IG9mIGZpcnN0IHBvaW50XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHkxIHkgb2YgZmlyc3QgcG9pbnRcbiAqIEBwYXJhbSAge251bWJlcn0geDIgeCBvZiBzZWNvbmQgcG9pbnRcbiAqIEBwYXJhbSAge251bWJlcn0geTIgeSBvZiBzZWNvbmQgcG9pbnlcbiAqIEByZXR1cm4ge251bWJlcn0gICAgRGlzdGFuY2VcbiAqIEBleGFtcGxlXG4gKiBOZXh1cy5kaXN0YW5jZSgwLDAsMyw0KSAgIC8vIHJldHVybnMgNVxuICovXG5leHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24oeDEseTEseDIseTIpIHtcbiAgbGV0IGEgPSB4MSAtIHgyO1xuICBsZXQgYiA9IHkxIC0geTI7XG4gIHJldHVybiBNYXRoLnNxcnQoIGEqYSArIGIqYiApO1xufTtcblxuZXhwb3J0cy5nYWluVG9EQiA9IGZ1bmN0aW9uKGdhaW4pIHtcbiAgcmV0dXJuIDIwICogTWF0aC5sb2cxMChnYWluKTtcbn07XG5cbi8qKlxuICogRmxpcCBhIGNvaW4sIHJldHVybmluZyBlaXRoZXIgMCBvciAxIGFjY29yZGluZyB0byBhIHByb2JhYmlsaXR5XG4gKiBAcGFyYW0gIHtudW1iZXJ9IFtvZGRzPTAuNV0gTGlrZWxpaG9vZCBvZiByZXR1cm5pbmcgMVxuICogQHJldHVybiB7bnVtYmVyfSAgICAgICAgICAgIDEgb3IgMFxuICogQGV4YW1wbGVcbiAqIE5leHVzLmNvaW4oMC4xKSAgIC8vIHJldHVybnMgMSAoMTAlIG9mIHRoZSB0aW1lKSBvciAwICg5MCUgb2YgdGhlIHRpbWUpXG4gKi9cbmV4cG9ydHMuY29pbiA9IGZ1bmN0aW9uKG9kZHM9MC41KSB7XG4gIGlmIChleHBvcnRzLnJmKDAsMSkgPCBvZGRzKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvdXRpbC9tYXRoLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgc3ZnID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKTtcbmxldCBkb20gPSByZXF1aXJlKCcuLi91dGlsL2RvbScpO1xubGV0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsL3V0aWwnKTtcbmxldCB0b3VjaCA9IHJlcXVpcmUoJy4uL3V0aWwvdG91Y2gnKTtcbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9tYWluJztcblxuLyoqXG5JbnRlcmZhY2VcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmZhY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3Msb3B0aW9ucyxkZWZhdWx0cykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnBhcnNlU2V0dGluZ3MoYXJncyxvcHRpb25zLGRlZmF1bHRzKTtcbiAgICB0aGlzLm1vdXNlID0ge307XG4gICAgdGhpcy53YWl0ID0gZmFsc2U7XG4gICAgdGhpcy5jb2xvcnMgPSB7fTtcbiAgICBsZXQgZGVmYXVsdENvbG9ycyA9IGNvbG9ycygpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICB0aGlzLmNvbG9ycy5hY2NlbnQgPSBkZWZhdWx0Q29sb3JzLmFjY2VudDtcbiAgICB0aGlzLmNvbG9ycy5maWxsID0gZGVmYXVsdENvbG9ycy5maWxsO1xuICAgIHRoaXMuY29sb3JzLmxpZ2h0ID0gZGVmYXVsdENvbG9ycy5saWdodDtcbiAgICB0aGlzLmNvbG9ycy5kYXJrID0gZGVmYXVsdENvbG9ycy5kYXJrO1xuICAgIHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0ID0gZGVmYXVsdENvbG9ycy5tZWRpdW1MaWdodDtcbiAgICB0aGlzLmNvbG9ycy5tZWRpdW1EYXJrID0gZGVmYXVsdENvbG9ycy5tZWRpdW1EYXJrO1xuICB9XG5cbiAgcGFyc2VTZXR0aW5ncyhhcmdzLG9wdGlvbnMsZGVmYXVsdHMpIHtcblxuICAgIG9wdGlvbnMudW5zaGlmdCgndGFyZ2V0Jyk7XG4gICAgZGVmYXVsdHMuZGVmYXVsdFNpemUgPSBkZWZhdWx0cy5zaXplLnNwbGljZSgwLDIpO1xuICAgIGRlZmF1bHRzLnNpemUgPSBmYWxzZTtcblxuICAgIGxldCBzZXR0aW5ncyA9IHtcbiAgICAgICd0YXJnZXQnOiBkb2N1bWVudC5ib2R5LFxuICAgICAgJ2NvbG9ycyc6IHt9LCAvLyBzaG91bGQgaW5oZXJpdCBmcm9tIGEgY29sb3JzIG1vZHVsZSxcbiAgICAgICdzbmFwV2l0aFBhcmVudCc6IHRydWUsXG4gICAgICAnZXZlbnQnOiBmdW5jdGlvbigpIHt9LFxuICAgICAgJ2NvbXBvbmVudCc6IGZhbHNlXG4gICAgfTtcblxuICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IGRlZmF1bHRzW2tleV07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpPGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGdyYWJzIHRoZSBuZXh0IGFyZ3VtZW50XG4gICAgICBsZXQgc2V0dGluZyA9IGFyZ3NbaV07XG4gICAgICAvLyBpZiBpdCdzIGFuIG9iamVjdCwgaXQgbXVzdCBiZSB0aGUgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICBpZiAoIHV0aWwuaXNPYmplY3Qoc2V0dGluZykgKSB7XG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gc2V0dGluZyApIHtcbiAgICAgICAgICBzZXR0aW5nc1trZXldID0gc2V0dGluZ1trZXldO1xuICAgICAgICB9XG4gICAgICAvLyBpZiBpdCdzIGEgZnVuY3Rpb24sIGl0IG11c3QgYmUgdGhlIGV2ZW50IHNldHRpbmdcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2V0dGluZ3MuZXZlbnQgPSBzZXR0aW5nO1xuICAgICAgLy8gb3RoZXJ3aXNlLCBjb25zaWRlciBpdCBvbmUgb2YgdGhlIHdpZGdldCdzIGN1c3RvbSBvcHRpb25zXG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubGVuZ3RoPj0xKSB7XG4gICAgICAgIC8vIGdyYWIgdGhlIGZpcnN0IG9wdGlvbiAtLSBpLmUuICd0YXJnZXQnXG4gICAgICAgIGxldCBrZXkgPSBvcHRpb25zLnNwbGljZSgwLDEpWzBdO1xuICAgICAgICBzZXR0aW5nc1trZXldID0gc2V0dGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAgaGFuZGxlIGNvbW1vbiBzZXR0aW5ncyAgKi9cblxuICAgIC8vIHRhcmdldFxuICAgIHRoaXMucGFyZW50ID0gZG9tLnBhcnNlRWxlbWVudChzZXR0aW5ncy50YXJnZXQpO1xuXG4gICAgLy8gbmV4dXMtdWkgYXR0cmlidXRlXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIXNldHRpbmdzLmNvbXBvbmVudCkge1xuICAgICAgaWYgKCF0aGlzLnBhcmVudC5oYXNBdHRyaWJ1dGUoJ25leHVzLXVpJykpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuc2V0QXR0cmlidXRlKCduZXh1cy11aScsJycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNpemVcblxuICAgIGlmIChzZXR0aW5ncy5zaXplICYmIEFycmF5LmlzQXJyYXkoc2V0dGluZ3Muc2l6ZSkgJiYgc2V0dGluZ3Muc25hcFdpdGhQYXJlbnQpIHtcbiAgICAgIHRoaXMud2lkdGggPSBzZXR0aW5ncy5zaXplWzBdO1xuICAgICAgdGhpcy5oZWlnaHQgPSBzZXR0aW5ncy5zaXplWzFdO1xuICAgICAgdGhpcy5wYXJlbnQuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMucGFyZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9IGVsc2UgaWYgKHNldHRpbmdzLnNuYXBXaXRoUGFyZW50ICYmICFzZXR0aW5ncy5jb21wb25lbnQpIHtcblxuICAgICAgdGhpcy53aWR0aCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5wYXJlbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykucmVwbGFjZSgncHgnLCcnKSk7XG4gICAgICB0aGlzLmhlaWdodCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5wYXJlbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykpO1xuXG4gICAgICBpZiAodGhpcy53aWR0aD09NTAwMCkge1xuICAgICAgICB0aGlzLndpZHRoID0gc2V0dGluZ3MuZGVmYXVsdFNpemVbMF07XG4gICAgICAgIHRoaXMucGFyZW50LnN0eWxlLndpZHRoID0gdGhpcy5wYXJlbnQud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhlaWdodD09NTAwMCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IHNldHRpbmdzLmRlZmF1bHRTaXplWzFdO1xuICAgICAgICB0aGlzLnBhcmVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLnBhcmVudC5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0dGluZ3Muc2l6ZSA9IHNldHRpbmdzLmRlZmF1bHRTaXplO1xuICAgICAgdGhpcy53aWR0aCA9IHNldHRpbmdzLnNpemVbMF07XG4gICAgICB0aGlzLmhlaWdodCA9IHNldHRpbmdzLnNpemVbMV07XG4gICAgfVxuXG4gICAgLy8gZXZlbnRcbiAgICBpZiAoc2V0dGluZ3MuZXZlbnQpIHtcbiAgICAgIHRoaXMuZXZlbnQgPSB0aGlzLm9uKCdjaGFuZ2UnLCBzZXR0aW5ncy5ldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXZlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2V0dGluZ3M7XG5cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5idWlsZEZyYW1lKCk7XG4gICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICAgIHRoaXMuc2l6ZUludGVyZmFjZSgpO1xuICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5jb2xvckludGVyZmFjZSgpO1xuICAgIHRoaXMuZmluYWxUb3VjaGVzKCk7XG4gIH1cblxuICBidWlsZEZyYW1lKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHN2Zy5jcmVhdGUoJ3N2ZycpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx0aGlzLndpZHRoKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7fVxuICBzaXplSW50ZXJmYWNlKCkge31cbiAgY29sb3JJbnRlcmZhY2UoKSB7fVxuXG4gIGF0dGFjaExpc3RlbmVycygpIHtcblxuICAgIHRoaXMuaW50ZXJhY3Rpb25UYXJnZXQgPSB0aGlzLmludGVyYWN0aW9uVGFyZ2V0IHx8IHRoaXMuZWxlbWVudDtcblxuICAgIC8vIFNldHVwIGludGVyYWN0aW9uXG4gICAgaWYgKHRvdWNoLmV4aXN0cykge1xuICAgICAgdGhpcy5pbnRlcmFjdGlvblRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZ0ID0+IHRoaXMucHJlVG91Y2goZXZ0KSk7XG4gICAgICB0aGlzLmludGVyYWN0aW9uVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2dCA9PiB0aGlzLnByZVRvdWNoTW92ZShldnQpKTtcbiAgICAgIHRoaXMuaW50ZXJhY3Rpb25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldnQgPT4gdGhpcy5wcmVUb3VjaFJlbGVhc2UoZXZ0KSk7XG4gICAgfVxuICAgIHRoaXMuYm91bmRQcmVNb3ZlID0gZXZ0ID0+IHRoaXMucHJlTW92ZShldnQpO1xuICAgIHRoaXMuYm91bmRQcmVSZWxlYXNlID0gZXZ0ID0+IHRoaXMucHJlUmVsZWFzZShldnQpO1xuICAgIHRoaXMuaW50ZXJhY3Rpb25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZ0ID0+IHRoaXMucHJlQ2xpY2soZXZ0KSk7XG4gIH1cblxuICBmaW5hbFRvdWNoZXMoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgfVxuXG4gIHByZUNsaWNrKGUpIHtcbiAgICAvLyAxMDAwMCBnZXRDb21wdXRlZFN0eWxlIGNhbGxzIHRha2VzIDEwMCBtcy5cbiAgICAvLyAuOi4gb25lIHRha2VzIGFib3V0IC4wMW1zXG4gICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0aGlzLndpZHRoID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnJlcGxhY2UoJ3B4JywnJyk7XG4gICAgfVxuICAgIC8vIDEwMDAwIGdldENvbXB1dGVkU3R5bGUgY2FsbHMgdGFrZXMgNDAgbXMuXG4gICAgLy8gLjouIG9uZSB0YWtlcyBhYm91dCAuMDA0bXNcbiAgICB0aGlzLm9mZnNldCA9IGRvbS5maW5kUG9zaXRpb24odGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLm1vdXNlID0gZG9tLmxvY2F0ZU1vdXNlKGUsdGhpcy5vZmZzZXQpO1xuICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gICAgdGhpcy5jbGljaygpO1xuICAgIHRoaXMubW92ZUV2ZW50ID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5ib3VuZFByZU1vdmUpO1xuICAgIHRoaXMucmVsZWFzZUV2ZW50ID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRQcmVSZWxlYXNlKTtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwcmVNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMud2FpdCkge1xuICAgICAgdGhpcy5tb3VzZSA9IGRvbS5sb2NhdGVNb3VzZShlLHRoaXMub2Zmc2V0KTtcbiAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgdGhpcy53YWl0ID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLndhaXQgPSBmYWxzZTsgfSwyNSk7XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJlUmVsZWFzZShlKSB7XG4gICAgdGhpcy5tb3VzZSA9IGRvbS5sb2NhdGVNb3VzZShlLHRoaXMub2Zmc2V0KTtcbiAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICB0aGlzLmVtaXQoJ3JlbGVhc2UnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLHRoaXMuYm91bmRQcmVNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJyx0aGlzLmJvdW5kUHJlUmVsZWFzZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjbGljaygpIHtcblxuICB9XG5cbiAgbW92ZSgpIHtcblxuICB9XG5cbiAgcmVsZWFzZSgpIHtcblxuICB9XG5cblxuICAvKiB0b3VjaCAqL1xuXG4gIHByZVRvdWNoKGUpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykucmVwbGFjZSgncHgnLCcnKTtcbiAgICB9XG4gICAgdGhpcy5vZmZzZXQgPSBkb20uZmluZFBvc2l0aW9uKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5tb3VzZSA9IGRvbS5sb2NhdGVUb3VjaChlLHRoaXMub2Zmc2V0KTtcbiAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudG91Y2goZSk7XG4gICAgdGhpcy5lbWl0KCdjbGljaycpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJlVG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLm1vdXNlID0gZG9tLmxvY2F0ZVRvdWNoKGUsdGhpcy5vZmZzZXQpO1xuICAgICAgdGhpcy50b3VjaE1vdmUoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJlVG91Y2hSZWxlYXNlKGUpIHtcbiAgICB0aGlzLm1vdXNlID0gZG9tLmxvY2F0ZVRvdWNoKGUsIHRoaXMub2Zmc2V0KTtcbiAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRvdWNoUmVsZWFzZSgpO1xuICAgIHRoaXMuZW1pdCgncmVsZWFzZScpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgdG91Y2goKSB7XG4gICAgdGhpcy5jbGljaygpO1xuICB9XG5cbiAgdG91Y2hNb3ZlKCkge1xuICAgIHRoaXMubW92ZSgpO1xuICB9XG5cbiAgdG91Y2hSZWxlYXNlKCkge1xuICAgIHRoaXMucmVsZWFzZSgpO1xuICB9XG5cbiAgLyoqXG4gICogUmVzaXplIHRoZSBpbnRlcmZhY2VcbiAgKiBAcGFyYW0gd2lkdGgge251bWJlcn0gTmV3IHdpZHRoIGluIHBpeGVsc1xuICAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gTmV3IGhlaWdodCBpbiBwaXhlbHNcbiAgKlxuICAqIEBleGFtcGxlXG4gICogYnV0dG9uLnJlc2l6ZSgxMDAsMTAwKTtcbiAgKi9cbiAgcmVzaXplKHdpZHRoLGhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnBhcmVudC5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGgrJ3B4JztcbiAgICB0aGlzLnBhcmVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCsncHgnO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx0aGlzLndpZHRoKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLnNpemVJbnRlcmZhY2UoKTtcbiAgfVxuXG4gIGVtcHR5KCkge1xuICAgIHdoaWxlICh0aGlzLmVsZW1lbnQubGFzdENoaWxkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogUmVtb3ZlIHRoZSBpbnRlcmZhY2UgZnJvbSB0aGUgcGFnZSBhbmQgY2FuY2VsIGl0cyBldmVudCBsaXN0ZW5lcihzKS5cbiAgKlxuICAqIEBleGFtcGxlXG4gICogYnV0dG9uLmRlc3Ryb3koKTtcbiAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIGlmICh0aGlzLmluc3RydW1lbnQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmluc3RydW1lbnRbdGhpcy5pZF07XG4gICAgfVxuICAgIHRoaXMuY3VzdG9tRGVzdHJveSgpO1xuICB9XG5cbiAgY3VzdG9tRGVzdHJveSgpIHtcblxuICB9XG5cbiAgY29sb3JpemUodHlwZSxjb2xvcikge1xuICAgIHRoaXMuY29sb3JzW3R5cGVdID0gY29sb3I7XG4gICAgdGhpcy5jb2xvckludGVyZmFjZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9jb3JlL2ludGVyZmFjZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5maW5kUG9zaXRpb24gPSAoZWwpID0+IHtcbiAgbGV0IHZpZXdwb3J0T2Zmc2V0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCB0b3AgPSB2aWV3cG9ydE9mZnNldC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgbGV0IGxlZnQgPSB2aWV3cG9ydE9mZnNldC5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gIHJldHVybiB7dG9wLGxlZnR9O1xufTtcblxuZXhwb3J0cy5wYXJzZUVsZW1lbnQgPSAocGFyZW50KSA9PiB7XG4gIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudC5yZXBsYWNlKCcjJywnJykpO1xuICB9XG5cbiAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHBhcmVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpe1xuICAgIHJldHVybiBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdObyB2YWxpZCBwYXJlbnQgYXJndW1lbnQnO1xuICB9XG59O1xuXG5leHBvcnRzLmxvY2F0ZU1vdXNlID0gKGUsb2Zmc2V0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgeDogZS5wYWdlWCAtIG9mZnNldC5sZWZ0LFxuICAgIHk6IGUucGFnZVkgLSBvZmZzZXQudG9wXG4gIH07XG59O1xuXG5leHBvcnRzLmxvY2F0ZVRvdWNoID0gKGUsb2Zmc2V0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgeDogZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIG9mZnNldC5sZWZ0IDogZmFsc2UsXG4gICAgeTogZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIG9mZnNldC50b3AgOiBmYWxzZVxuICB9O1xufTtcblxuZXhwb3J0cy5TbWFydENhbnZhcyA9IGZ1bmN0aW9uKHBhcmVudCkge1xuXG4gIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICB0aGlzLmNvbnRleHQgPSB0aGlzLmVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cbiAgdGhpcy5yZXNpemUgPSAodyxoKSA9PiB7XG4gICAgdGhpcy5lbGVtZW50LndpZHRoID0gdyoyO1xuICAgIHRoaXMuZWxlbWVudC5oZWlnaHQgPSBoKjI7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gdysncHgnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoKydweCc7XG4gIH07XG5cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvdXRpbC9kb20uanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuaXNPYmplY3QgPSAob2JqKSA9PiB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmopICYmIG9iaiAhPT0gbnVsbCAmJiBvYmogaW5zdGFuY2VvZiBTVkdFbGVtZW50ID09PSBmYWxzZSAmJiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA9PT0gZmFsc2UgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4vLyBSZXN0cmljdHMgaW5wdXQgZm9yIHRoZSBnaXZlbiB0ZXh0Ym94IHRvIHRoZSBnaXZlbiBpbnB1dEZpbHRlciBmdW5jdGlvblxuLy8gY2YgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2OTM2MlxuZXhwb3J0cy5zZXRJbnB1dEZpbHRlciA9ICh0ZXh0Ym94LCBpbnB1dEZpbHRlcikgPT4ge1xuICBbXCJpbnB1dFwiLCBcImtleWRvd25cIiwgXCJrZXl1cFwiLCBcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJzZWxlY3RcIiwgXCJjb250ZXh0bWVudVwiLCBcImRyb3BcIl0uZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuICAgIHRleHRib3guYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaW5wdXRGaWx0ZXIodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMub2xkU2VsZWN0aW9uU3RhcnQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB0aGlzLm9sZFNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uRW5kO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwib2xkVmFsdWVcIikpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub2xkVmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UodGhpcy5vbGRTZWxlY3Rpb25TdGFydCwgdGhpcy5vbGRTZWxlY3Rpb25FbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL3V0aWwvdXRpbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5leGlzdHMgPSAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi91dGlsL3RvdWNoLmpzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1hdGggPSByZXF1aXJlKCcuLi91dGlsL21hdGgnKTtcblxuLyoqXG4gIENyZWF0ZXMgYSBzdGVwcGFibGUgdmFsdWUgd2l0aCBtaW5pbXVtLCBtYXhpbXVtLCBhbmQgc3RlcCBzaXplLiBUaGlzIGlzIHVzZWQgaW4gbWFueSBpbnRlcmZhY2VzIHRvIGNvbnN0cmljdCB0aGVpciB2YWx1ZXMgdG8gY2VydGFpbiByYW5nZXMuXG4gIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIG1pbmltdW1cbiAgQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gbWF4aW11bVxuICBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MF1cbiAgQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZT0wXSBpbml0aWFsIHZhbHVlXG4gIEByZXR1cm5zIHtPYmplY3R9IFN0ZXBcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXAge1xuXG4gIGNvbnN0cnVjdG9yKG1pbiA9IDAsbWF4ID0gMSxzdGVwID0gMCx2YWx1ZSA9IDApIHtcbiAgICAvL09iamVjdC5hc3NpZ24odGhpcyx7bWluLG1heCxzdGVwfSk7XG4gICAgLy9DYW5ub3QgdXNlIE9iamVjdC5hc3NpZ24gYmVjYXVzZSBub3Qgc3VwcG9ydGVkIGluIFNhZmFyaS5cbiAgICAvL0kgd291bGQgZXhwZWN0IGZvciBCYWJlbCB0byB0YWtlIGNhcmUgb2YgdGhpcyBidXQgaXQgaXMgbm90LlxuICAgIHRoaXMubWluID0gbWluO1xuICAgIHRoaXMubWF4ID0gbWF4O1xuICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMub2xkVmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgIFVwZGF0ZSB3aXRoIGEgbmV3IHZhbHVlLiBUaGUgdmFsdWUgd2lsbCBiZSBhdXRvLWFkanVzdGVkIHRvIGZpdCB0aGUgbWluL21heC9zdGVwLlxuICAgIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAqL1xuXG4gIHVwZGF0ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnN0ZXApIHtcbiAgICAgIC8vIHRoaXMudmFsdWUgPSBtYXRoLmNsaXAoTWF0aC5yb3VuZCh2YWx1ZSAvICh0aGlzLnN0ZXApKSAqIHRoaXMuc3RlcCwgdGhpcy5taW4sdGhpcy5tYXgpO1xuICAgICAgdGhpcy52YWx1ZSA9IG1hdGguY2xpcChNYXRoLnJvdW5kKCh2YWx1ZS10aGlzLm1pbikgLyAodGhpcy5zdGVwKSkgKiB0aGlzLnN0ZXAgKyB0aGlzLm1pbiwgdGhpcy5taW4sdGhpcy5tYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gbWF0aC5jbGlwKHZhbHVlLHRoaXMubWluLHRoaXMubWF4KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAgVXBkYXRlIHdpdGggYSBub3JtYWxpemVkIHZhbHVlIDAtMS5cbiAgICBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgKi9cbiAgdXBkYXRlTm9ybWFsKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG1hdGguc2NhbGUodmFsdWUsMCwxLHRoaXMubWluLHRoaXMubWF4KTtcbiAgICByZXR1cm4gdGhpcy51cGRhdGUodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICBHZXQgYSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhpcy52YWx1ZSAuIE5vdCBzZXR0YWJsZS5cbiAgKi9cbiAgZ2V0IG5vcm1hbGl6ZWQoKSB7XG4gICAgcmV0dXJuIG1hdGgubm9ybWFsaXplKHRoaXMudmFsdWUsdGhpcy5taW4sdGhpcy5tYXgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9tb2RlbHMvc3RlcC5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IG1hdGggZnJvbSAnLi4vdXRpbC9tYXRoJztcbmltcG9ydCBUb2dnbGVNb2RlbCBmcm9tICcuLi9tb2RlbHMvdG9nZ2xlJztcblxuXG4vKlxuaG93IHRvIHVzZSA6XG5cbmRpYWwuaW50ZXJhY3Rpb24gPSBuZXcgSGFuZGxlKCdyYWRpYWwnLCdyZWxhdGl2ZScsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG4vLyBkaWFsLmludGVyYWN0aW9uLm1vZGUgPSAncmVsYXRpdmUnXG4vLyBkaWFsLmludGVyYWN0aW9uLmRpcmVjdGlvbiA9ICdyYWRpYWwnXG5cbm9uIGNsaWNrOlxuZGlhbC5pbnRlcmFjdGlvbi5hbmNob3IgPSB0aGlzLm1vdXNlO1xuXG5vbiBtb3ZlOlxuZGlhbC5pbnRlcmFjdGlvbi51cGRhdGUodGhpcy5tb3VzZSk7XG5cbmNvbnNvbGUubG9nKCBkaWFsLmludGVyYWN0aW9uLnZhbHVlICk7IHNob3VsZCBiZSBhIG5vcm1hbGl6ZWQgdmFsdWUuXG5cbiovXG5cbi8qXG4gIGFic29sdXRlL3JlbGF0aXZlIGFyZSBwcm9wZXJ0eTogbW9kZVxuICByYWRpYWwvdmVydGljYWwvaG9yaXpvbnRhbC8yZCBhcmUgcHJvcGVydHk6IGRpcmVjdGlvblxuXG4gIHBsYW4gOlxuXG4gIGlmIHJlbGF0aXZlIC0tXG4gIE5PIG9uIGNsaWNrLCBnZXQgdmFsdWUgb2Zmc2V0IGJldHdlZW4gY3VycmVudCB2YWx1ZSBhbmQgY2xpY2sgdmFsdWUuXG4gIE5PIG9uIG1vdmUsIHVzZSBjbGljayB2YWx1ZSAtIG9mZnNldFxuICBJTlNURUFEXG4gIHVzZSBkZWx0YSAtLSBiYyB2ZXJ0aWNhbCBtb3Rpb24gb24gZGlhbCBpcyBpbXBvc3NpYmxlIG90aGVyd2lzZVxuICBhbHNvIGFsbG93IHRvIHNldCBzZW5zaXRpdml0eVxuXG4qL1xuXG5leHBvcnQgY2xhc3MgSGFuZGxlIHtcblxuICBjb25zdHJ1Y3Rvcihtb2RlPSdhYnNvbHV0ZScsZGlyZWN0aW9uPSd2ZXJ0aWNhbCcseGJvdW5kPVswLDEwMF0seWJvdW5kPVswLDEwMF0pIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMucHJldmlvdXMgPSAwO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSAxO1xuICAgIHRoaXMucmVzaXplKHhib3VuZCx5Ym91bmQpO1xuICB9XG5cbiAgcmVzaXplKHhib3VuZCx5Ym91bmQpIHtcbiAgICB0aGlzLmJvdW5kYXJ5ID0ge1xuICAgICAgbWluOiB7XG4gICAgICAgIHg6IHhib3VuZFswXSxcbiAgICAgICAgeTogeWJvdW5kWzBdXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHg6IHhib3VuZFsxXSxcbiAgICAgICAgeTogeWJvdW5kWzFdXG4gICAgICB9LFxuICAgICAgY2VudGVyOiB7XG4gICAgICAgIHg6ICh4Ym91bmRbMV0gLSB4Ym91bmRbMF0pLzIgKyB4Ym91bmRbMF0sXG4gICAgICAgIHk6ICh5Ym91bmRbMV0gLSB5Ym91bmRbMF0pLzIgKyB5Ym91bmRbMF1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc2V0IGFuY2hvcihtb3VzZSkge1xuICAgIHRoaXMuX2FuY2hvciA9IHRoaXMuY29udmVydFBvc2l0aW9uVG9WYWx1ZShtb3VzZSk7XG4gIH1cblxuICBnZXQgYW5jaG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmNob3I7XG4gIH1cblxuXG4gIHVwZGF0ZShtb3VzZSkge1xuICAgIGlmICh0aGlzLm1vZGU9PT0ncmVsYXRpdmUnKSB7XG4gICAgICBsZXQgaW5jcmVtZW50ID0gdGhpcy5jb252ZXJ0UG9zaXRpb25Ub1ZhbHVlKG1vdXNlKSAtIHRoaXMuYW5jaG9yO1xuICAgICAgaWYgKE1hdGguYWJzKGluY3JlbWVudCkgPiAwLjUpIHsgaW5jcmVtZW50ID0gMDsgfVxuICAgICAgdGhpcy5hbmNob3IgPSBtb3VzZTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgaW5jcmVtZW50ICogdGhpcy5zZW5zaXRpdml0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY29udmVydFBvc2l0aW9uVG9WYWx1ZShtb3VzZSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBtYXRoLmNsaXAodGhpcy52YWx1ZSwwLDEpO1xuICB9XG5cbiAgY29udmVydFBvc2l0aW9uVG9WYWx1ZShjdXJyZW50KSB7XG4gICAgc3dpdGNoKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdyYWRpYWwnOlxuICAgICAgICBsZXQgcG9zaXRpb24gPSBtYXRoLnRvUG9sYXIoY3VycmVudC54IC0gdGhpcy5ib3VuZGFyeS5jZW50ZXIueCwgY3VycmVudC55IC0gdGhpcy5ib3VuZGFyeS5jZW50ZXIueSk7XG4gICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uYW5nbGUgLyAoTWF0aC5QSSoyKTtcbiAgICAgICAgcG9zaXRpb24gPSAoKHBvc2l0aW9uIC0gMC4yNSkgKyAxKSAlIDE7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgcmV0dXJuIG1hdGguc2NhbGUoY3VycmVudC55LHRoaXMuYm91bmRhcnkubWluLnksdGhpcy5ib3VuZGFyeS5tYXgueSwwLDEpO1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgIHJldHVybiBtYXRoLnNjYWxlKGN1cnJlbnQueCx0aGlzLmJvdW5kYXJ5Lm1pbi54LHRoaXMuYm91bmRhcnkubWF4LngsMCwxKTtcbiAgICB9XG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xuXG4gIGNvbnN0cnVjdG9yKG1vZGU9J2J1dHRvbicpIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuc3RhdGUgPSBuZXcgVG9nZ2xlTW9kZWwoKTtcbiAgICB0aGlzLnBhaW50YnJ1c2ggPSBmYWxzZTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICBjYXNlICdpbXB1bHNlJzpcbiAgICAgICAgdGhpcy5zdGF0ZS5vbigpO1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnN0YXRlLm9mZi5iaW5kKHRoaXMpLDMwKTtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgIHRoaXMudHVybk9uKCk7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZnRlcnRvdWNoJzpcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBtYXRoLmNsaXAodGhpcy5tb3VzZS54IC8gdGhpcy53aWR0aCwwLDEpLFxuICAgICAgICAgIHk6IG1hdGguY2xpcCgxIC0gdGhpcy5tb3VzZS55IC8gdGhpcy5oZWlnaHQsMCwxKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR1cm5PbigpO1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvZ2dsZSc6XG4gICAgICAgIHRoaXMuZmxpcCgpO1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5zdGF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAodGhpcy5tb2RlPT09J2FmdGVydG91Y2gnKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICB4OiBtYXRoLmNsaXAodGhpcy5tb3VzZS54IC8gdGhpcy53aWR0aCwwLDEpLFxuICAgICAgICB5OiBtYXRoLmNsaXAoMSAtIHRoaXMubW91c2UueSAvIHRoaXMuaGVpZ2h0LDAsMSlcbiAgICAgIH07XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVsZWFzZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgdGhpcy50dXJuT2ZmKCk7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZnRlcnRvdWNoJzpcbiAgICAgICAgdGhpcy50dXJuT2ZmKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgeDogdGhpcy5tb3VzZS54IC8gdGhpcy53aWR0aCxcbiAgICAgICAgICB5OiAxIC0gdGhpcy5tb3VzZS55IC8gdGhpcy5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvdXRpbC9pbnRlcmFjdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlIHtcblxuICBjb25zdHJ1Y3RvcihzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZSB8fCBmYWxzZTtcbiAgfVxuXG4gIGZsaXAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUgfHwgc3RhdGUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAhdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH1cblxuICBvbigpIHtcbiAgICB0aGlzLnN0YXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG9mZigpIHtcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL21vZGVscy90b2dnbGUuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBzdmcgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpO1xubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5sZXQgU3RlcCA9IHJlcXVpcmUoJy4uL21vZGVscy9zdGVwJyk7XG5pbXBvcnQgKiBhcyBJbnRlcmFjdGlvbiBmcm9tICcuLi91dGlsL2ludGVyYWN0aW9uJztcblxuLyoqXG4qIFNsaWRlclxuKlxuKiBAZGVzY3JpcHRpb24gSG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBzbGlkZXIgd2l0aCBzZXR0YWJsZSBpbnRlcmFjdGlvbiBtb2Rlcy5cbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJzbGlkZXJcIiBzdGVwPTAuMj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBzbGlkZXIgPSBuZXcgTmV4dXMuU2xpZGVyKCcjdGFyZ2V0JylcbipcbiogQGV4YW1wbGVcbiogdmFyIHNsaWRlciA9IG5ldyBOZXh1cy5TbGlkZXIoJyN0YXJnZXQnLHtcbiogICAgICdzaXplJzogWzEyMCwyMF0sXG4qICAgICAnbW9kZSc6ICdyZWxhdGl2ZScsICAvLyAncmVsYXRpdmUnIG9yICdhYnNvbHV0ZSdcbiogICAgICdtaW4nOiAwLFxuKiAgICAgJ21heCc6IDEsXG4qICAgICAnc3RlcCc6IDAsXG4qICAgICAndmFsdWUnOiAwXG4qIH0pXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIHdoZW4gdGhlIGludGVyZmFjZSdzIHZhbHVlIGNoYW5nZXMuIDxicj5cbiogRXZlbnQgZGF0YTogPGk+bnVtYmVyPC9pPiBUaGUgbnVtYmVyIHZhbHVlIG9mIHRoZSBpbnRlcmZhY2UuXG4qXG4qIEBvdXRwdXRleGFtcGxlXG4qIHNsaWRlci5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4qICAgY29uc29sZS5sb2codik7XG4qIH0pXG4qXG4qXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ21pbicsJ21heCcsJ3ZhbHVlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAnc2l6ZSc6IFsxMjAsMjBdLFxuICAgICAgJ21vZGUnOiAncmVsYXRpdmUnLCAgLy8gJ3JlbGF0aXZlJyBvciAnYWJzb2x1dGUnXG4gICAgICAnbWluJzogMCxcbiAgICAgICdtYXgnOiAxLFxuICAgICAgJ3N0ZXAnOiAwLFxuICAgICAgJ3ZhbHVlJzogMFxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cbiAgICB0aGlzLm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJzsgLy8gVGhpcyB3aWxsIGNoYW5nZSBhdXRvbWF0aWNhbGx5IHRvICdob3Jpem9udGFsJ2lmIHRoZSBpbnRlcmZhY2UgaXMgd2lkZXIgdGhhbiBpdCBpcyB0YWxsLlxuXG4gICAgdGhpcy5fdmFsdWUgPSBuZXcgU3RlcCh0aGlzLnNldHRpbmdzLm1pbiwgdGhpcy5zZXR0aW5ncy5tYXgsIHRoaXMuc2V0dGluZ3Muc3RlcCwgdGhpcy5zZXR0aW5ncy52YWx1ZSk7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEludGVyYWN0aW9uLkhhbmRsZSh0aGlzLnNldHRpbmdzLm1vZGUsdGhpcy5vcmllbnRhdGlvbixbMCx0aGlzLndpZHRoXSxbdGhpcy5oZWlnaHQsMF0pO1xuICAgIHRoaXMucG9zaXRpb24udmFsdWUgPSB0aGlzLl92YWx1ZS5ub3JtYWxpemVkO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICB0aGlzLnBvc2l0aW9uLmRpcmVjdGlvbiA9IHRoaXMub3JpZW50YXRpb247XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy52YWx1ZSk7XG5cbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5iYXIgPSBzdmcuY3JlYXRlKCdyZWN0Jyk7XG4gICAgdGhpcy5maWxsYmFyID0gc3ZnLmNyZWF0ZSgncmVjdCcpO1xuICAgIHRoaXMua25vYiA9IHN2Zy5jcmVhdGUoJ2NpcmNsZScpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYmFyKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5maWxsYmFyKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5rbm9iKTtcblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuICAgIGlmICh0aGlzLndpZHRoIDwgdGhpcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgdGhpcy5wb3NpdGlvbi5kaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgdGhpcy5wb3NpdGlvbi5kaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMucG9zaXRpb24ucmVzaXplKFswLHRoaXMud2lkdGhdLFt0aGlzLmhlaWdodCwwXSk7XG4gICAgfVxuXG4gICAgbGV0IHgsIHksIHcsIGgsIGJhck9mZnNldCwgY29ybmVyUmFkaXVzO1xuICAgIHRoaXMua25vYkRhdGEgPSB7XG4gICAgICBsZXZlbDogMCxcbiAgICAgIHI6IDBcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMudGhpY2tuZXNzID0gdGhpcy53aWR0aCAvIDI7XG4gICAgXHR4ID0gdGhpcy53aWR0aC8yO1xuICAgIFx0eSA9IDA7XG4gICAgXHR3ID0gdGhpcy50aGlja25lc3M7XG4gICAgXHRoID0gdGhpcy5oZWlnaHQ7XG4gICAgICB0aGlzLmtub2JEYXRhLnIgPSB0aGlzLnRoaWNrbmVzcyAqIDAuODtcbiAgICBcdHRoaXMua25vYkRhdGEubGV2ZWwgPSBoLXRoaXMua25vYkRhdGEuci10aGlzLm5vcm1hbGl6ZWQqKGgtdGhpcy5rbm9iRGF0YS5yKjIpO1xuICAgICAgYmFyT2Zmc2V0ID0gJ3RyYW5zbGF0ZSgnK3RoaXMudGhpY2tuZXNzKigtMSkvMisnLDApJztcbiAgICAgIGNvcm5lclJhZGl1cyA9IHcvMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aGlja25lc3MgPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgXHR4ID0gMDtcbiAgICBcdHkgPSB0aGlzLmhlaWdodC8yO1xuICAgIFx0dyA9IHRoaXMud2lkdGg7XG4gICAgXHRoID0gdGhpcy50aGlja25lc3M7XG4gICAgICB0aGlzLmtub2JEYXRhLnIgPSB0aGlzLnRoaWNrbmVzcyAqIDAuODtcbiAgICBcdHRoaXMua25vYkRhdGEubGV2ZWwgPSB0aGlzLm5vcm1hbGl6ZWQqKHctdGhpcy5rbm9iRGF0YS5yKjIpK3RoaXMua25vYkRhdGEucjtcbiAgICAgIGJhck9mZnNldCA9ICd0cmFuc2xhdGUoMCwnK3RoaXMudGhpY2tuZXNzKigtMSkvMisnKSc7XG4gICAgICBjb3JuZXJSYWRpdXMgPSBoLzI7XG4gICAgfVxuXG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd4Jyx4KTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3knLHkpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJyxiYXJPZmZzZXQpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgncngnLGNvcm5lclJhZGl1cyk7IC8vIGNvcm5lciByYWRpdXNcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3J5Jyxjb3JuZXJSYWRpdXMpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLHcpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JyxoKTtcblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCd4Jyx4KTtcbiAgICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ3knLHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLHcpO1xuICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JyxoLXRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCd4JywwKTtcbiAgICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ3knLHkpO1xuICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JyxoKTtcbiAgICB9XG4gICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJyxiYXJPZmZzZXQpO1xuICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ3J4Jyxjb3JuZXJSYWRpdXMpO1xuICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ3J5Jyxjb3JuZXJSYWRpdXMpO1xuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N4Jyx4KTtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N5Jyx0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3gnLHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3knLHkpO1xuICAgIH1cbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdyJyx0aGlzLmtub2JEYXRhLnIpO1xuXG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5maWxsKTtcbiAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLmtub2JEYXRhLnIgPSB0aGlzLnRoaWNrbmVzcyowLjc1O1xuICAgIH1cbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdyJyx0aGlzLmtub2JEYXRhLnIpO1xuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgXHQgICB0aGlzLmtub2JEYXRhLmxldmVsID0gdGhpcy5rbm9iRGF0YS5yK3RoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQqKHRoaXMuaGVpZ2h0LXRoaXMua25vYkRhdGEucioyKTtcbiAgICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeScsdGhpcy5oZWlnaHQgLSB0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCd5Jyx0aGlzLmhlaWdodCAtIHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgfSBlbHNlIHtcbiAgXHQgICB0aGlzLmtub2JEYXRhLmxldmVsID0gdGhpcy5fdmFsdWUubm9ybWFsaXplZCoodGhpcy53aWR0aC10aGlzLmtub2JEYXRhLnIqMikrdGhpcy5rbm9iRGF0YS5yO1xuICAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N4Jyx0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCd4JywwKTtcbiAgICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgfVxuICB9XG5cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmtub2JEYXRhLnIgPSB0aGlzLnRoaWNrbmVzcyowLjk7XG4gICAgdGhpcy5wb3NpdGlvbi5hbmNob3IgPSB0aGlzLm1vdXNlO1xuICAgIHRoaXMubW92ZSgpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnVwZGF0ZSh0aGlzLm1vdXNlKTtcbiAgICAgIHRoaXMuX3ZhbHVlLnVwZGF0ZU5vcm1hbCggdGhpcy5wb3NpdGlvbi52YWx1ZSApO1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuX3ZhbHVlLnZhbHVlKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICB9XG4gIH1cblxuICByZWxlYXNlKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgbm9ybWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUubm9ybWFsaXplZDtcbiAgfVxuXG4gIC8qKlxuICBUaGUgc2xpZGVyJ3MgY3VycmVudCB2YWx1ZS4gSWYgc2V0IG1hbnVhbGx5LCB3aWxsIHVwZGF0ZSB0aGUgaW50ZXJmYWNlIGFuZCB0cmlnZ2VyIHRoZSBvdXRwdXQgZXZlbnQuXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIHNsaWRlci52YWx1ZSA9IDEwO1xuICAqL1xuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLnZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2KSB7XG4gICAgdGhpcy5fdmFsdWUudXBkYXRlKHYpO1xuICAgIHRoaXMucG9zaXRpb24udmFsdWUgPSB0aGlzLl92YWx1ZS5ub3JtYWxpemVkO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLl92YWx1ZS52YWx1ZSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICBMb3dlciBsaW1pdCBvZiB0aGUgc2xpZGVycydzIG91dHB1dCByYW5nZVxuICBAdHlwZSB7bnVtYmVyfVxuICBAZXhhbXBsZSBzbGlkZXIubWluID0gMTAwMDtcbiAgKi9cbiAgZ2V0IG1pbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUubWluO1xuICB9XG4gIHNldCBtaW4odikge1xuICAgIHRoaXMuX3ZhbHVlLm1pbiA9IHY7XG4gIH1cblxuICAvKipcbiAgVXBwZXIgbGltaXQgb2YgdGhlIHNsaWRlcidzIG91dHB1dCByYW5nZVxuICBAdHlwZSB7bnVtYmVyfVxuICBAZXhhbXBsZSBzbGlkZXIubWF4ID0gMTAwMDtcbiAgKi9cbiAgZ2V0IG1heCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUubWF4O1xuICB9XG4gIHNldCBtYXgodikge1xuICAgIHRoaXMuX3ZhbHVlLm1heCA9IHY7XG4gIH1cblxuICAvKipcbiAgVGhlIGluY3JlbWVudCB0aGF0IHRoZSBzbGlkZXIncyB2YWx1ZSBjaGFuZ2VzIGJ5LlxuICBAdHlwZSB7bnVtYmVyfVxuICBAZXhhbXBsZSBzbGlkZXIuc3RlcCA9IDU7XG4gICovXG4gIGdldCBzdGVwKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS5zdGVwO1xuICB9XG4gIHNldCBzdGVwKHYpIHtcbiAgICB0aGlzLl92YWx1ZS5zdGVwID0gdjtcbiAgfVxuXG4gIC8qKlxuICBBYnNvbHV0ZSBtb2RlIChzbGlkZXIncyB2YWx1ZSBqdW1wcyB0byBtb3VzZSBjbGljayBwb3NpdGlvbikgb3IgcmVsYXRpdmUgbW9kZSAobW91c2UgZHJhZyBjaGFuZ2VzIHZhbHVlIHJlbGF0aXZlIHRvIGl0cyBjdXJyZW50IHBvc2l0aW9uKS4gRGVmYXVsdDogXCJyZWxhdGl2ZVwiLlxuICBAdHlwZSB7c3RyaW5nfVxuICBAZXhhbXBsZSBzbGlkZXIubW9kZSA9IFwicmVsYXRpdmVcIjtcbiAgKi9cbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ubW9kZTtcbiAgfVxuICBzZXQgbW9kZSh2KSB7XG4gICAgdGhpcy5wb3NpdGlvbi5tb2RlID0gdjtcbiAgfVxuXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2ludGVyZmFjZXMvc2xpZGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgc3ZnID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKTtcbmxldCBUb2dnbGVNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVscy90b2dnbGUnKTtcbmxldCBJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi9jb3JlL2ludGVyZmFjZScpO1xuXG4vKipcbiogVG9nZ2xlXG4qXG4qIEBkZXNjcmlwdGlvbiBCaW5hcnkgc3dpdGNoXG4qXG4qIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwidG9nZ2xlXCI+PC9zcGFuPlxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgdG9nZ2xlID0gbmV3IE5leHVzLlRvZ2dsZSgnI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciB0b2dnbGUgPSBuZXcgTmV4dXMuVG9nZ2xlKCcjdGFyZ2V0Jyx7XG4qICAgICAnc2l6ZSc6IFs0MCwyMF0sXG4qICAgICAnc3RhdGUnOiBmYWxzZVxuKiB9KVxuKlxuKiBAb3V0cHV0XG4qIGNoYW5nZVxuKiBGaXJlcyBhbnkgdGltZSB0aGUgaW50ZXJmYWNlJ3MgdmFsdWUgY2hhbmdlcy4gPGJyPlxuKiBQYXJhbWV0ZXI6IFRoZSBib29sZWFuIHN0YXRlIG9mIHRoZSBpbnRlcmZhY2UuXG4qXG4qIEBvdXRwdXRleGFtcGxlXG4qIHRvZ2dsZS5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4qICAgY29uc29sZS5sb2codik7XG4qIH0pXG4qXG4qXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlIGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbNDAsMjBdLFxuICAgICAgJ3RhcmdldCc6IGZhbHNlLFxuICAgICAgJ3N0YXRlJzogZmFsc2VcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5fc3RhdGUgPSBuZXcgVG9nZ2xlTW9kZWwodGhpcy5zZXR0aW5ncy5zdGF0ZSk7XG5cbiAgICB0aGlzLmluaXQoKTtcblxuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmJhciA9IHN2Zy5jcmVhdGUoJ3JlY3QnKTtcbiAgICB0aGlzLmtub2IgPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5iYXIpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmtub2IpO1xuXG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuXG4gICAgaWYgKHRoaXMuaGVpZ2h0IDwgdGhpcy53aWR0aC8yKSB7XG4gICAgICB0aGlzLmtub2JTaXplID0gdGhpcy5oZWlnaHQvMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rbm9iU2l6ZSA9IHRoaXMud2lkdGgvNDtcbiAgICB9XG5cbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3gnLHRoaXMud2lkdGgvMiAtIHRoaXMua25vYlNpemUqMS41KTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3knLHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmtub2JTaXplLzIpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgncngnLHRoaXMua25vYlNpemUvMik7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCdyeScsdGhpcy5rbm9iU2l6ZS8yKTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx0aGlzLmtub2JTaXplKjMpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jyx0aGlzLmtub2JTaXplKTtcblxuICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N4Jyx0aGlzLndpZHRoLzIgLSB0aGlzLmtub2JTaXplKTtcbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeScsdGhpcy5oZWlnaHQvMik7XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgncicsdGhpcy5rbm9iU2l6ZSk7XG5cbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlKSB7XG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy53aWR0aC8yIC0gdGhpcy5rbm9iU2l6ZSk7XG4gICAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5maWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3gnLHRoaXMud2lkdGgvMiArIHRoaXMua25vYlNpemUpO1xuICAgICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB9XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmZsaXAoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICBXaGV0aGVyIHRoZSB0b2dnbGUgaXMgY3VycmVudGx5IG9uIG9yIG9mZi4gU2V0dGluZyB0aGlzIHByb3BlcnR5IHdpbGwgdXBkYXRlIHRoZSB0b2dnbGUgaW50ZXJmYWNlIGFuZCB0cmlnZ2VyIHRoZSBvdXRwdXQgZXZlbnQuXG4gIEB0eXBlIHtib29sZWFufVxuICBAZXhhbXBsZSB0b2dnbGUuc3RhdGUgPSBmYWxzZTtcbiAgKi9cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5zdGF0ZTtcbiAgfVxuICBzZXQgc3RhdGUodmFsdWUpIHtcbiAgICB0aGlzLl9zdGF0ZS5mbGlwKHZhbHVlKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICogU3dpdGNoIHRoZSB0b2dnbGUgc3RhdGUgdG8gaXRzIG9wcG9zaXRlIHN0YXRlXG4gICogQGV4YW1wbGVcbiAgKiB0b2dnbGUuZmxpcCgpO1xuICAqL1xuICBmbGlwKCkge1xuICAgIHRoaXMuX3N0YXRlLmZsaXAoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL3RvZ2dsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgQnV0dG9uVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2J1dHRvbnRlbXBsYXRlJyk7XG5cbi8qKlxuKiBCdXR0b25cbipcbiogQGRlc2NyaXB0aW9uIENpcmN1bGFyIGJ1dHRvbiB3aXRoIG9wdGlvbmFsIGFmdGVydG91Y2guXG4qXG4qIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwiYnV0dG9uXCI+PC9zcGFuPlxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgYnV0dG9uID0gbmV3IE5leHVzLkJ1dHRvbignI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciBidXR0b24gPSBuZXcgTmV4dXMuQnV0dG9uKCcjdGFyZ2V0Jyx7XG4qICAgJ3NpemUnOiBbODAsODBdLFxuKiAgICdtb2RlJzogJ2FmdGVydG91Y2gnLFxuKiAgICdzdGF0ZSc6IGZhbHNlXG4qIH0pXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIGFueSB0aW1lIHRoZSBpbnRlcmZhY2UncyB2YWx1ZSBjaGFuZ2VzLiA8YnI+XG4qIEluIDxiPmJ1dHRvbiBtb2RlPC9iPiwgPGI+dG9nZ2xlIG1vZGU8L2I+LCBhbmQgPGI+aW1wdWxzZSBtb2RlPC9iPiwgdGhlIG91dHB1dCBkYXRhIGlzIGEgYm9vbGVhbiBkZXNjcmliaW5nIHRoZSBzdGF0ZSBvZiB0aGUgYnV0dG9uLjxicj5cbiogSW4gPGI+YWZ0ZXJ0b3VjaCBtb2RlPC9iPiwgdGhlIG91dHB1dCBkYXRhIGlzIGFuIG9iamVjdCBjb250YWluaW5nIHggKDAtMSkgYW5kIHkgKDAtMSkgcG9zaXRpb25zIG9mIGFmdGVydG91Y2guXG4qXG4qIEBvdXRwdXRleGFtcGxlXG4qIGJ1dHRvbi5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4qICAgLy8gdiBpcyB0aGUgdmFsdWUgb2YgdGhlIGJ1dHRvblxuKiAgIGNvbnNvbGUubG9nKHYpO1xuKiB9KVxuKlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQnV0dG9uVGVtcGxhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ21vZGUnXTtcblxuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbODAsODBdLFxuICAgICAgJ21vZGUnOiAnYWZ0ZXJ0b3VjaCcsIC8vIGJ1dHRvbiwgYWZ0ZXJ0b3VjaCwgaW1wdWxzZSwgdG9nZ2xlXG4gICAgICAnc3RhdGUnOiBmYWxzZVxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cblxuICAgIC8qKlxuICAgICogSW50ZXJhY3Rpb24gbW9kZTogc3VwcG9ydHMgXCJidXR0b25cIiwgXCJhZnRlcnRvdWNoXCIsIFwiaW1wdWxzZVwiLCBvciBcInRvZ2dsZVwiXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICogQGV4YW1wbGUgYnV0dG9uLm1vZGUgPSAndG9nZ2xlJztcbiAgICAqL1xuICAgIHRoaXMubW9kZSA9IHRoaXMuc2V0dGluZ3MubW9kZTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuICAgIHRoaXMucGFkID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMucGFkKTtcblxuICAgIHRoaXMuaW50ZXJhY3Rpb25UYXJnZXQgPSB0aGlzLnBhZDtcblxuICAgIC8vIG9ubHkgdXNlZCBpZiBpbiAnYWZ0ZXJ0b3VjaCcgbW9kZVxuICAgIHRoaXMuZGVmcyA9IHN2Zy5jcmVhdGUoJ2RlZnMnKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kZWZzKTtcblxuICAgIHRoaXMuZ3JhZGllbnQgPSBzdmcucmFkaWFsR3JhZGllbnQodGhpcy5kZWZzLDIpO1xuXG4gICAgdGhpcy5ncmFkaWVudC5zdG9wc1swXS5zZXRBdHRyaWJ1dGUoJ29mZnNldCcsICczMCUnKTtcblxuICAgIHRoaXMuZ3JhZGllbnQuc3RvcHNbMV0uc2V0QXR0cmlidXRlKCdvZmZzZXQnLCAnMTAwJScpO1xuXG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy53aWR0aC8yKTtcbiAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ2N5Jyx0aGlzLmhlaWdodC8yKTtcbiAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3InLCBNYXRoLm1pbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KSAvIDIgLSB0aGlzLndpZHRoLzQwKTtcbiAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMud2lkdGgvMjApO1xuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmdyYWRpZW50LnN0b3BzWzBdLnNldEF0dHJpYnV0ZSgnc3RvcC1jb2xvcicsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgdGhpcy5ncmFkaWVudC5zdG9wc1sxXS5zZXRBdHRyaWJ1dGUoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9ycy5maWxsKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLypcbiAgKiBVcGRhdGUgdGhlIHZpc3VhbCBpbnRlcmZhY2UgdXNpbmcgaXRzIGN1cnJlbnQgc3RhdGVcbiAgKlxuICAqIEBleGFtcGxlXG4gICogYnV0dG9uLnJlbmRlcigpO1xuICAqL1xuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlKSB7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5maWxsKTtcbiAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5jb2xvcnMubWVkaXVtTGlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlPT09J2FmdGVydG91Y2gnKSB7XG4gICAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3VybCgjJyt0aGlzLmdyYWRpZW50LmlkKycpJyk7XG4gICAgICAgIHRoaXMuZ3JhZGllbnQuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N4JywgKHRoaXMucG9zaXRpb24ueCoxMDApKyclJyk7XG4gICAgICAgIHRoaXMuZ3JhZGllbnQuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JywgKCgxLXRoaXMucG9zaXRpb24ueSkqMTAwKSsnJScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2ludGVyZmFjZXMvYnV0dG9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgc3ZnID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKTtcbmxldCBtYXRoID0gcmVxdWlyZSgnLi4vdXRpbC9tYXRoJyk7XG5sZXQgVG9nZ2xlTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbHMvdG9nZ2xlJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcblxuLyoqXG5CdXR0b24gVGVtcGxhdGVcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvblRlbXBsYXRlIGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcihhcmdzLG9wdGlvbnMsZGVmYXVsdHMpIHtcblxuICAgIHN1cGVyKGFyZ3Msb3B0aW9ucyxkZWZhdWx0cyk7XG5cbiAgICB0aGlzLm1vZGUgPSB0aGlzLnNldHRpbmdzLm1vZGUgfHwgJ2J1dHRvbic7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuXG4gICAgdGhpcy5fc3RhdGUgPSBuZXcgVG9nZ2xlTW9kZWwodGhpcy5zZXR0aW5ncy5zdGF0ZSk7XG5cbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuICAgIHRoaXMucGFkID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG4gICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdmaWxsJywgJyNkMTgnKTtcbiAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcjZDE4Jyk7XG4gICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCA0KTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnBhZCk7XG5cbiAgICB0aGlzLmludGVyYWN0aW9uVGFyZ2V0ID0gdGhpcy5wYWQ7XG5cbiAgICB0aGlzLnNpemVJbnRlcmZhY2UoKTtcbiAgfVxuXG4gIHNpemVJbnRlcmZhY2UoKSB7XG4gICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy53aWR0aC8yKTtcbiAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ2N5Jyx0aGlzLmhlaWdodC8yKTtcbiAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3InLCBNYXRoLm1pbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KSAvIDIgLSAyKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmZpbGwpO1xuICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgZG93bihwYWludGJydXNoKSB7XG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgIGNhc2UgJ2ltcHVsc2UnOlxuICAgICAgICB0aGlzLnR1cm5PbigpO1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnR1cm5PZmYuYmluZCh0aGlzKSwzMCk7XG4gICAgLy8gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgIHRoaXMudHVybk9uKCk7XG4gICAgLy8gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FmdGVydG91Y2gnOlxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgIHg6IG1hdGguY2xpcCh0aGlzLm1vdXNlLnggLyB0aGlzLndpZHRoLDAsMSksXG4gICAgICAgICAgeTogbWF0aC5jbGlwKDEtdGhpcy5tb3VzZS55IC8gdGhpcy5oZWlnaHQsMCwxKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR1cm5PbigpO1xuICAgIC8vICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx7XG4gICAgLy8gICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAvLyAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcbiAgICAvLyAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAvLyAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgICB0aGlzLmZsaXAocGFpbnRicnVzaCk7XG4gICAgLy8gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgfVxuXG4gIGJlbmQobW91c2UpIHtcbiAgICBpZiAodGhpcy5tb2RlPT09J2FmdGVydG91Y2gnKSB7XG4gICAgICB0aGlzLm1vdXNlID0gbW91c2UgfHwgdGhpcy5tb3VzZTtcbiAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgIHg6IG1hdGguY2xpcCh0aGlzLm1vdXNlLnggLyB0aGlzLndpZHRoLDAsMSksXG4gICAgICAgIHk6IG1hdGguY2xpcCgxIC0gdGhpcy5tb3VzZS55IC8gdGhpcy5oZWlnaHQsMCwxKVxuICAgICAgfTtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx7XG4gICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB1cCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgdGhpcy50dXJuT2ZmKCk7XG4gICAgICAvLyAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FmdGVydG91Y2gnOlxuICAgICAgICB0aGlzLnR1cm5PZmYoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBtYXRoLmNsaXAodGhpcy5tb3VzZS54IC8gdGhpcy53aWR0aCwwLDEpLFxuICAgICAgICAgIHk6IG1hdGguY2xpcCgxIC0gdGhpcy5tb3VzZS55IC8gdGhpcy5oZWlnaHQsMCwxKVxuICAgICAgICB9O1xuICAgICAgLy8gIHRoaXMuZW1pdCgnY2hhbmdlJyx7XG4gICAgICAvLyAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgIC8vICAgIHg6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgIC8vICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIC8vICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyogb3ZlcndyaXRhYmxlIGludGVyYWN0aW9uIGhhbmRsZXJzICovXG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5kb3duKCk7XG4gIH1cbiAgbW92ZSgpIHtcbiAgICB0aGlzLmJlbmQoKTtcbiAgfVxuICByZWxlYXNlKCkge1xuICAgIHRoaXMudXAoKTtcbiAgfVxuXG4gIC8qKlxuICBXaGV0aGVyIHRoZSBidXR0b24gaXMgb24gKHByZXNzZWQpIG9yIG9mZiAobm90IHByZXNzZWQpXG4gIEB0eXBlIHtib29sZWFufVxuICBAZXhhbXBsZSBidXR0b24uc3RhdGUgPSB0cnVlO1xuICAqL1xuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLnN0YXRlO1xuICB9XG4gIHNldCBzdGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3N0YXRlLmZsaXAodmFsdWUpO1xuICAgIGlmICh0aGlzLm1vZGU9PT0nYWZ0ZXJ0b3VjaCcpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx7XG4gICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgQ2hhbmdlIHRoZSBidXR0b24gdG8gaXRzIGFsdGVybmF0ZSBzdGF0ZSAob2ZmPT5vbiwgb249Pm9mZiksIG9yIGZsaXAgaXQgdG8gYSBzcGVjaWZpZWQgc3RhdGUuXG4gIEBwYXJhbSB2YWx1ZSB7Ym9vbGVhbn0gKE9wdGlvbmFsKSBTdGF0ZSB0byBmbGlwIHRvLlxuICBAZXhhbXBsZSBidXR0b24uZmxpcCgpO1xuICAqL1xuICBmbGlwKHZhbHVlKSB7XG4gICAgdGhpcy5fc3RhdGUuZmxpcCh2YWx1ZSk7XG4gICAgaWYgKHRoaXMubW9kZT09PSdhZnRlcnRvdWNoJykge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICBUdXJuIHRoZSBidXR0b24ncyBzdGF0ZSB0byB0cnVlLlxuICBAZXhhbXBsZSBidXR0b24udHVybk9uKCk7XG4gICovXG4gIHR1cm5PbihlbWl0dGluZykge1xuICAgIHRoaXMuX3N0YXRlLm9uKCk7XG4gICAgaWYgKGVtaXR0aW5nIT09ZmFsc2UpIHtcbiAgICAgIGlmICh0aGlzLm1vZGU9PT0nYWZ0ZXJ0b3VjaCcpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICBUdXJuIHRoZSBidXR0b24ncyBzdGF0ZSB0byBmYWxzZS5cbiAgQGV4YW1wbGUgYnV0dG9uLnR1cm5PZmYoKTtcbiAgKi9cbiAgdHVybk9mZihlbWl0dGluZykge1xuICAgIHRoaXMuX3N0YXRlLm9mZigpO1xuICAgIGlmIChlbWl0dGluZyE9PWZhbHNlKSB7XG4gICAgICBpZiAodGhpcy5tb2RlPT09J2FmdGVydG91Y2gnKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx7XG4gICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5zdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2NvbXBvbmVudHMvYnV0dG9udGVtcGxhdGUuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBCdXR0b25UZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvYnV0dG9udGVtcGxhdGUnKTtcblxuLyoqXG4qIFRleHRCdXR0b25cbipcbiogQGRlc2NyaXB0aW9uIFRleHQgYnV0dG9uXG4qXG4qIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwidGV4dEJ1dHRvblwiPjwvc3Bhbj5cbipcbiogQGV4YW1wbGVcbiogdmFyIHRleHRidXR0b24gPSBuZXcgTmV4dXMuVGV4dEJ1dHRvbignI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciB0ZXh0YnV0dG9uID0gbmV3IE5leHVzLlRleHRCdXR0b24oJyN0YXJnZXQnLHtcbiogICAgICdzaXplJzogWzE1MCw1MF0sXG4qICAgICAnc3RhdGUnOiBmYWxzZSxcbiogICAgICd0ZXh0JzogJ1BsYXknLFxuKiAgICAgJ2FsdGVybmF0ZVRleHQnOiAnU3RvcCdcbiogfSlcbipcbiogQG91dHB1dFxuKiBjaGFuZ2VcbiogRmlyZXMgYW55IHRpbWUgdGhlIGludGVyZmFjZSdzIHZhbHVlIGNoYW5nZXMuIDxicj5cbiogVGhlIGV2ZW50IGRhdGEgaXMgYSA8aT5zdHJpbmc8L2k+IG9mIHRoZSB0ZXh0IG9uIHRoZSBidXR0b24gYXQgdGhlIG1vbWVudCBpdCB3YXMgY2xpY2tlZC5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogdGV4dGJ1dHRvbi5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4qICAgY29uc29sZS5sb2codik7XG4qIH0pXG4qXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QnV0dG9uIGV4dGVuZHMgQnV0dG9uVGVtcGxhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ3ZhbHVlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAnc2l6ZSc6IFsxNTAsNTBdLFxuICAgICAgJ3N0YXRlJzogZmFsc2UsXG4gICAgICAndGV4dCc6ICdQbGF5J1xuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cbiAgICB0aGlzLl90ZXh0ID0gdGhpcy5zZXR0aW5ncy50ZXh0O1xuXG4gICAgaWYodGhpcy5zZXR0aW5ncy5hbHRlcm5hdGUpeyAvL1RPRE86IFJlbW92ZSB0aGlzIGNvbmRpdGlvbmFsIGluIGEgYnJlYWtpbmctY2hhbmdlcyByZWxlYXNlXG4gICAgICB0aGlzLnNldHRpbmdzLmFsdGVybmF0ZVRleHQgPSB0aGlzLnNldHRpbmdzLmFsdGVybmF0ZTtcbiAgICAgIGNvbnNvbGUud2FybihcIidhbHRlcm5hdGUnIGluaXRpYXRvciBpcyBkZXByZWNhdGVkLiBVc2UgJ2FsdGVybmF0ZVRleHQnIGluc3RlYWQuXCIpO1xuICAgIH1cbiAgICB0aGlzLl9hbHRlcm5hdGVUZXh0ID0gdGhpcy5zZXR0aW5ncy5hbHRlcm5hdGVUZXh0O1xuICAgIHRoaXMubW9kZSA9ICh0aGlzLnNldHRpbmdzLmFsdGVybmF0ZVRleHQpID8gJ3RvZ2dsZScgOiAnYnV0dG9uJztcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuc2V0dGluZ3Muc3RhdGU7XG5cbiAgfVxuXG4gIGJ1aWxkRnJhbWUoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgdGhpcy50ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMudGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fdGV4dDtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0RWxlbWVudCk7XG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcnMuZGFyaztcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcbiAgICAgIGxldCB0ZXh0c2l6ZSA9IHRoaXMuaGVpZ2h0LzM7XG4gICAgICBsZXQgdGV4dHNpemUyID0gKHRoaXMud2lkdGggLyAodGhpcy5fdGV4dC5sZW5ndGggKyAyKSApO1xuICAgICAgdGV4dHNpemUgPSBNYXRoLm1pbih0ZXh0c2l6ZSx0ZXh0c2l6ZTIpO1xuICAgICAgaWYgKHRoaXMuYWx0ZXJuYXRlVGV4dCkge1xuICAgICAgICBsZXQgdGV4dHNpemUzID0gKHRoaXMud2lkdGggLyAodGhpcy5hbHRlcm5hdGVUZXh0Lmxlbmd0aCArIDIpICk7XG4gICAgICAgIHRleHRzaXplID0gTWF0aC5taW4odGV4dHNpemUsdGV4dHNpemUzKTtcbiAgICAgIH1cbiAgICAgIGxldCBzdHlsZXMgPSAnd2lkdGg6ICcgKyB0aGlzLndpZHRoICsgJ3B4Oyc7XG4gICAgICBzdHlsZXMgKz0gJ2hlaWdodDogJyArIHRoaXMuaGVpZ2h0ICsgJ3B4Oyc7XG4gICAgICBzdHlsZXMgKz0gJ3BhZGRpbmc6ICcrKHRoaXMuaGVpZ2h0LXRleHRzaXplKS8yKydweCAwcHg7JztcbiAgICAgIHN0eWxlcyArPSAnYm94LXNpemluZzogYm9yZGVyLWJveDsnO1xuICAgICAgc3R5bGVzICs9ICd0ZXh0LWFsaWduOiBjZW50ZXI7JztcbiAgICAgIHN0eWxlcyArPSAnZm9udC1mYW1pbHk6IGluaGVyaXQ7JztcbiAgICAgIHN0eWxlcyArPSAnZm9udC13ZWlnaHQ6IDcwMDsnO1xuICAgICAgc3R5bGVzICs9ICdvcGFjaXR5OiAxOyc7XG4gICAgICBzdHlsZXMgKz0gJ2ZvbnQtc2l6ZTonICsgdGV4dHNpemUgKyAncHg7JztcbiAgICAgIHRoaXMudGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlcztcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnMuZmlsbDtcbiAgICAgIHRoaXMudGV4dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9ycy5kYXJrO1xuICAgICAgdGhpcy50ZXh0RWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl90ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnMuYWNjZW50O1xuICAgICAgdGhpcy50ZXh0RWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gICAgICBpZiAodGhpcy5hbHRlcm5hdGVUZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fYWx0ZXJuYXRlVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgVGhlIHRleHQgdG8gZGlzcGxheSB3aGVuIHRoZSBidXR0b24gaXMgaW4gaXRzIFwib25cIiBzdGF0ZS4gSWYgc2V0LCB0aGlzIHB1dHMgdGhlIGJ1dHRvbiBpbiBcInRvZ2dsZVwiIG1vZGUuXG4gIEB0eXBlIHtTdHJpbmd9XG4gICovXG4gIGdldCBhbHRlcm5hdGVUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbHRlcm5hdGVUZXh0O1xuICB9XG5cbiAgc2V0IGFsdGVybmF0ZVRleHQodGV4dCkge1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICB0aGlzLm1vZGUgPSAndG9nZ2xlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlID0gJ2J1dHRvbic7XG4gICAgfVxuICAgIHRoaXMuX2FsdGVybmF0ZVRleHQgPSB0ZXh0O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICBUaGUgdGV4dCB0byBkaXNwbGF5LiAoSWYgLmFsdGVybmF0ZVRleHQgZXhpc3RzLCB0aGVuIHRoaXMgLnRleHQgd2lsbCBvbmx5IGJlIGRpc3BsYXllZCB3aGVuIHRoZSBidXR0b24gaXMgaW4gaXRzIFwib2ZmXCIgc3RhdGUuKVxuICBAdHlwZSB7U3RyaW5nfVxuICAqL1xuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuXG4gIHNldCB0ZXh0KHRleHQpIHtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnNpemVJbnRlcmZhY2UoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2ludGVyZmFjZXMvdGV4dGJ1dHRvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuLy9sZXQgc3ZnID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKTtcbmxldCBJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi9jb3JlL2ludGVyZmFjZScpO1xubGV0IEJ1dHRvbiA9IHJlcXVpcmUoJy4uL2ludGVyZmFjZXMvYnV0dG9uJyk7XG5cbi8qKlxuICogUmFkaW9CdXR0b25cbiAqXG4gKiBAZGVzY3JpcHRpb24gQW4gYXJyYXkgb2YgYnV0dG9ucy4gQnkgZGVmYXVsdCwgc2VsZWN0aW5nIG9uZSBidXR0b24gd2lsbCBkZXNlbGVjdCBhbGwgb3RoZXIgYnV0dG9ucywgYnV0IHRoaXMgY2FuIGJlIGN1c3RvbWl6ZWQgdXNpbmcgdGhlIEFQSSBiZWxvdy5cbiAqXG4gKiBAZGVtbyA8ZGl2IG5leHVzLXVpPVwiUmFkaW9CdXR0b25cIj48L2Rpdj5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHJhZGlvYnV0dG9uID0gbmV3IE5leHVzLlJhZGlvQnV0dG9uKCcjdGFyZ2V0JylcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHJhZGlvYnV0dG9uID0gbmV3IE5leHVzLlJhZGlvQnV0dG9uKCcjdGFyZ2V0Jyx7XG4gKiAgICdzaXplJzogWzEyMCwyNV0sXG4gKiAgICdudW1iZXJPZkJ1dHRvbnMnOiA0LFxuICogICAnYWN0aXZlJzogLTFcbiAqIH0pXG4gKlxuICogQG91dHB1dFxuICogY2hhbmdlXG4gKiBGaXJlcyBhbnkgdGltZSB0aGUgaW50ZXJmYWNlJ3MgdmFsdWUgY2hhbmdlcy4gPGJyPlxuICogVGhlIGV2ZW50IGRhdGEgYW4gPGk+aW50ZWdlcjwvaT4sIHRoZSBpbmRleCBvZiB0aGUgYnV0dG9uIHRoYXQgaXMgY3VycmVudGx5IG9uLiBJZiBubyBidXR0b24gaXMgc2VsZWN0ZWQsIHRoZSB2YWx1ZSB3aWxsIGJlIC0xLlxuICpcbiAqIEBvdXRwdXRleGFtcGxlXG4gKiByYWRpb2J1dHRvbi5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4gKiAgIGNvbnNvbGUubG9nKHYpO1xuICogfSlcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFsndmFsdWUnXTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIHNpemU6IFsxMjAsIDI1XSxcbiAgICAgIG51bWJlck9mQnV0dG9uczogNCxcbiAgICAgIGFjdGl2ZTogLTFcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLCBvcHRpb25zLCBkZWZhdWx0cyk7XG5cbiAgICB0aGlzLmJ1dHRvbnMgPSBbXTtcbiAgICB0aGlzLl9udW1iZXJPZkJ1dHRvbnMgPSB0aGlzLnNldHRpbmdzLm51bWJlck9mQnV0dG9ucztcbiAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGJ1aWxkRnJhbWUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtYmVyT2ZCdXR0b25zOyBpKyspIHtcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlOiAndG9nZ2xlJyxcbiAgICAgICAgICBjb21wb25lbnQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy51cGRhdGUuYmluZCh0aGlzLCBpKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5idXR0b25zLnB1c2goYnV0dG9uKTtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIHNpemVJbnRlcmZhY2UoKSB7XG4gICAgbGV0IG9yaWVudGF0aW9uO1xuICAgIGlmICh0aGlzLndpZHRoID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvbldpZHRoID1cbiAgICAgIHRoaXMud2lkdGggLyAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyAxIDogdGhpcy5fbnVtYmVyT2ZCdXR0b25zKTtcbiAgICBsZXQgYnV0dG9uSGVpZ2h0ID1cbiAgICAgIHRoaXMuaGVpZ2h0IC8gKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8gdGhpcy5fbnVtYmVyT2ZCdXR0b25zIDogMSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bWJlck9mQnV0dG9uczsgaSsrKSB7XG4gICAgICB0aGlzLmJ1dHRvbnNbaV0ucmVzaXplKGJ1dHRvbldpZHRoLCBidXR0b25IZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtYmVyT2ZCdXR0b25zOyBpKyspIHtcbiAgICAgIHRoaXMuYnV0dG9uc1tpXS5jb2xvcnMgPSB0aGlzLmNvbG9ycztcbiAgICAgIHRoaXMuYnV0dG9uc1tpXS5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5idXR0b25zW2luZGV4XS5zdGF0ZSkge1xuICAgICAgdGhpcy5zZWxlY3QoaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgfVxuICAgIC8vICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5idXR0b25zW2ldLnR1cm5PbihmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJ1dHRvbnNbaV0udHVybk9mZihmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gIFNlbGVjdCBvbmUgYnV0dG9uIGFuZCBkZXNlbGVjdCBhbGwgb3RoZXIgYnV0dG9ucy5cbiAgQHBhcmFtIGluZGV4IHtudW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgYnV0dG9uIHRvIHNlbGVjdFxuICAqL1xuICBzZWxlY3QoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuYnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gaW5kZXg7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHRoaXMuYWN0aXZlKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gIERlc2VsZWN0IGFsbCBidXR0b25zLlxuICAqL1xuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IC0xO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgdGhpcy5hY3RpdmUpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgbnVtYmVyT2ZCdXR0b25zKCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJPZkJ1dHRvbnM7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGhvdyBtYW55IGJ1dHRvbnMgYXJlIGluIHRoZSBpbnRlcmZhY2VcbiAgICogQHBhcmFtICB7bnVtYmVyfSBidXR0b25zIEhvdyBtYW55IGJ1dHRvbnMgYXJlIGluIHRoZSBpbnRlcmZhY2VcbiAgICovXG4gIHNldCBudW1iZXJPZkJ1dHRvbnMoYnV0dG9ucykge1xuICAgIHRoaXMuX251bWJlck9mQnV0dG9ucyA9IGJ1dHRvbnM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYnV0dG9uc1tpXS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgIC8vICBmb3IgKGxldCBpPTA7aTx0aGlzLmJ1dHRvbnMubGVuZ3RoO2krKykge1xuICAgIC8vICAgIHRoaXMuYnV0dG9uc1tpXS5kZXN0cm95KCk7XG4gICAgLy8gIH1cbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9yYWRpb2J1dHRvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5sZXQgU3RlcCA9IHJlcXVpcmUoJy4uL21vZGVscy9zdGVwJyk7XG5sZXQgbWF0aCA9IHJlcXVpcmUoJy4uL3V0aWwvbWF0aCcpO1xubGV0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsL3V0aWwnKTtcblxuLyoqXG4qIE51bWJlclxuKlxuKiBAZGVzY3JpcHRpb24gTnVtYmVyIGludGVyZmFjZSB3aGljaCBpcyBjb250cm9sbGFibGUgYnkgZHJhZ2dpbmcgb3IgdHlwaW5nLlxuKlxuKiBAZGVtbyA8c3BhbiBuZXh1cy11aT1cIm51bWJlclwiPjwvc3Bhbj5cbipcbiogQGV4YW1wbGVcbiogdmFyIG51bWJlciA9IG5ldyBOZXh1cy5OdW1iZXIoJyN0YXJnZXQnKVxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgbnVtYmVyID0gbmV3IE5leHVzLk51bWJlcignI3RhcmdldCcse1xuKiAgICdzaXplJzogWzYwLDMwXSxcbiogICAndmFsdWUnOiAwLFxuKiAgICdtaW4nOiAwLFxuKiAgICdtYXgnOiAyMDAwMCxcbiogICAnc3RlcCc6IDFcbiogfSlcbipcbiogQG91dHB1dFxuKiBjaGFuZ2VcbiogRmlyZXMgYW55IHRpbWUgdGhlIGludGVyZmFjZSdzIHZhbHVlIGNoYW5nZXMuIDxicj5cbiogVGhlIGV2ZW50IGRhdGEgaXMgdGhlIG51bWJlciB2YWx1ZSBvZiB0aGUgaW50ZXJmYWNlLlxuKlxuKiBAb3V0cHV0ZXhhbXBsZVxuKiBudW1iZXIub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuKiAgIGNvbnNvbGUubG9nKHYpO1xuKiB9KVxuKlxuKlxuKi9cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXIgZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ3ZhbHVlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAnc2l6ZSc6IFs2MCwzMF0sXG4gICAgICAndmFsdWUnOiAwLFxuICAgICAgJ21pbic6IDAsXG4gICAgICAnbWF4JzogMjAwMDAsXG4gICAgICAnc3RlcCc6IDFcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5fdmFsdWUgPSBuZXcgU3RlcCh0aGlzLnNldHRpbmdzLm1pbix0aGlzLnNldHRpbmdzLm1heCx0aGlzLnNldHRpbmdzLnN0ZXAsdGhpcy5zZXR0aW5ncy52YWx1ZSk7XG5cbiAgICAvKlxuICAgIERlZmF1bHQ6IDIuIEhvdyBtYW55IGRlY2ltYWwgcGxhY2VzIHRvIGNsaXAgdGhlIG51bWJlcidzIHZpc3VhbCByZW5kZXJpbmcgdG8uIFRoaXMgZG9lcyBub3QgYWZmZWN0IG51bWJlcidzIGFjdHVhbCB2YWx1ZSBvdXRwdXQgLS0gZm9yIHRoYXQsIHNldCB0aGUgc3RlcCBwcm9wZXJ0eSB0byAuMDEsIC4xLCBvciAxLlxuICAgIEB0eXBlIHtudW1iZXJ9XG4gICAgQGV4YW1wbGUgbnVtYmVyLmRlY2ltYWxQbGFjZXMgPSAyO1xuICAgICovXG4gICAgdGhpcy5kZWNpbWFsUGxhY2VzID0gMjtcbiAgICB0aGlzLmFjdHVhbCA9IDA7XG5cbiAgICB0aGlzLm1heCA9IHRoaXMuX3ZhbHVlLm1heDtcblxuICAgIHRoaXMubWluID0gdGhpcy5fdmFsdWUubWluO1xuXG4gICAgdGhpcy5zdGVwID0gdGhpcy5fdmFsdWUuc3RlcDtcblxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgd2luZG93Lk5VTUJFUiA9IHRoaXNcbiAgfVxuXG4gIGJ1aWxkRnJhbWUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aGlzLmVsZW1lbnQudHlwZSA9ICd0ZXh0JztcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9ycy5kYXJrO1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC52YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLmVsZW1lbnQudmFsdWUpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYmx1cicsIHRoaXMuZWxlbWVudC52YWx1ZSwgdGhpcy52YWx1ZSlcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdXRpbC5zZXRJbnB1dEZpbHRlcih0aGlzLmVsZW1lbnQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW5wdXQgZmlsdGVyJywgdmFsdWUsIC9eLT9cXGQqXFwuP1xcZCokLy50ZXN0KHZhbHVlKSlcbiAgICAgIHJldHVybiAvXi0/XFxkKlxcLj9cXGQqJC8udGVzdCh2YWx1ZSk7IH0pO1xuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUud2hpY2g9PT0xMykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYmx1cigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICAvLyB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy52YWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbWl0OmNoYW5nZTprZXlkb3duJywgdGhpcy52YWx1ZSwgdGhpcy5fdmFsdWUpXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpLCB0cnVlKTtcblxuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cbiAgfVxuXG4gIHNpemVJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLl9taW5EaW1lbnNpb24gPSBNYXRoLm1pbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcblxuICAgIGxldCBzdHlsZXMgPSAnd2lkdGg6ICcgKyB0aGlzLndpZHRoICsgJ3B4Oyc7XG4gICAgc3R5bGVzICs9ICdoZWlnaHQ6ICcgKyB0aGlzLmhlaWdodCArICdweDsnO1xuICAgIHN0eWxlcyArPSAnYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzsnO1xuICAgIHN0eWxlcyArPSAnY29sb3I6ICMzMzM7JztcbiAgICBzdHlsZXMgKz0gJ2ZvbnQtZmFtaWx5OiBhcmlhbDsnO1xuICAgIHN0eWxlcyArPSAnZm9udC13ZWlnaHQ6IDUwMDsnO1xuICAgIHN0eWxlcyArPSAnZm9udC1zaXplOicgKyB0aGlzLl9taW5EaW1lbnNpb24vMiArICdweDsnO1xuICAvLyAgc3R5bGVzICs9ICdoaWdobGlnaHQ6ICNkMTg7JztcbiAgICBzdHlsZXMgKz0gJ2JvcmRlcjogbm9uZTsnO1xuICAgIHN0eWxlcyArPSAnb3V0bGluZTogbm9uZTsnO1xuICAgIHN0eWxlcyArPSAncGFkZGluZzogJyt0aGlzLl9taW5EaW1lbnNpb24vNCsncHggJyt0aGlzLl9taW5EaW1lbnNpb24vNCsncHg7JztcbiAgICBzdHlsZXMgKz0gJ2JveC1zaXppbmc6IGJvcmRlci1ib3g7JztcbiAgICBzdHlsZXMgKz0gJ3VzZXJTZWxlY3Q6IHRleHQ7JztcbiAgICBzdHlsZXMgKz0gJ21velVzZXJTZWxlY3Q6IHRleHQ7JztcbiAgICBzdHlsZXMgKz0gJ3dlYmtpdFVzZXJTZWxlY3Q6IHRleHQ7JztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBzdHlsZXM7XG5cbiAgICAvLyB0byBhZGQgZXZlbnR1YWxseVxuICAgIC8vIHZhciBjc3MgPSAnIycrdGhpcy5lbGVtZW50SUQrJzo6c2VsZWN0aW9ueyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCB9JztcblxuICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9ycy5kYXJrO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdGhpcy5lbGVtZW50LnZhbHVlID0gbWF0aC5wcnVuZSh0aGlzLnZhbHVlLHRoaXMuZGVjaW1hbFBsYWNlcyk7XG5cbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVsZW1lbnQucmVhZE9ubHkgPSB0cnVlO1xuXHQgIHRoaXMuYWN0dWFsID0gdGhpcy52YWx1ZTtcbiAgICB0aGlzLmluaXRpYWwgPSB7IHk6IHRoaXMubW91c2UueSB9O1xuICAgIHRoaXMuY2hhbmdlRmFjdG9yID0gbWF0aC5pbnZlcnQoIHRoaXMubW91c2UueCAvIHRoaXMud2lkdGggKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5oYXNNb3ZlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuY2xpY2tlZCkge1xuXG4gICAgICBsZXQgbmV3dmFsdWUgPSB0aGlzLmFjdHVhbCAtICh0aGlzLm1vdXNlLnkgLSB0aGlzLmluaXRpYWwueSkgKiAoIG1hdGguY2xpcCggdGhpcy5tYXgtdGhpcy5taW4sIDAsIDEwMDAgKSAvIDIwMCApICogTWF0aC5wb3codGhpcy5jaGFuZ2VGYWN0b3IsMik7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3dmFsdWU7XG5cbiAgXHRcdHRoaXMucmVuZGVyKCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUuY2hhbmdlZCkge1xuICAgICAgICAvLyB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy52YWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbWl0OmNoYW5nZTptb3ZlJywgdGhpcy52YWx1ZSwgdGhpcy5zdGVwKVxuICAgICAgfVxuXG4gIFx0fVxuICB9XG5cbiAgcmVsZWFzZSgpIHtcbiAgICBpZiAoIXRoaXMuaGFzTW92ZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZWFkT25seSA9IGZhbHNlO1xuICBcdFx0dGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gIFx0XHR0aGlzLmVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCk7XG4gIFx0XHR0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnMuYWNjZW50O1xuICBcdFx0dGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcnMubGlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgQ29ubmVjdCB0aGlzIG51bWJlciBpbnRlcmZhY2UgdG8gYSBkaWFsIG9yIHNsaWRlclxuICBAcGFyYW0ge0ludGVyZmFjZX0gZWxlbWVudCBFbGVtZW50IHRvIGNvbm5lY3QgdG8uXG4gIEBleGFtcGxlIG51bWJlci5saW5rKHNsaWRlcilcbiAgKi9cbiAgbGluayhkZXN0aW5hdGlvbikge1xuICAgIHRoaXMubWluID0gZGVzdGluYXRpb24ubWluO1xuICAgIHRoaXMubWF4ID0gZGVzdGluYXRpb24ubWF4O1xuICAgIHRoaXMuc3RlcCA9IGRlc3RpbmF0aW9uLnN0ZXA7XG4gICAgZGVzdGluYXRpb24ub24oJ2NoYW5nZScsKHYpID0+IHtcbiAgICAgIHRoaXMucGFzc2l2ZVVwZGF0ZSh2KTtcbiAgICB9KTtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCh2KSA9PiB7XG4gICAgICBkZXN0aW5hdGlvbi52YWx1ZSA9IHY7XG4gICAgfSk7XG4gICAgdGhpcy52YWx1ZSA9IGRlc3RpbmF0aW9uLnZhbHVlO1xuICAvKiAgcmV0dXJuIHtcbiAgICAgIGxpc3RlbmVyMTogbGlzdGVuZXIxLFxuICAgICAgbGlzdGVuZXIyOiBsaXN0ZW5lcjIsXG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIGxpc3RlbmVyMS5yZW1vdmUoKSAob3Igc2ltaWxhcilcbiAgICAgICAgbGlzdGVuZXIyLnJlbW92ZSgpIChvciBzaW1pbGFyKVxuICAgICAgfVxuICAgIH0gKi9cbiAgfVxuXG4gIHBhc3NpdmVVcGRhdGUodikge1xuICAgIHRoaXMuX3ZhbHVlLnVwZGF0ZSh2KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZm9ybWF0KCkge1xuXG4gIH1cblxuICAvKipcbiAgVGhlIGludGVyZmFjZSdzIGN1cnJlbnQgdmFsdWUuIElmIHNldCBtYW51YWxseSwgd2lsbCB1cGRhdGUgdGhlIGludGVyZmFjZSBhbmQgdHJpZ2dlciB0aGUgb3V0cHV0IGV2ZW50LlxuICBAdHlwZSB7bnVtYmVyfVxuICBAZXhhbXBsZSBudW1iZXIudmFsdWUgPSAxMDtcbiAgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS52YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodikge1xuICAgIGlmKHRoaXMuc3RlcCAlIDEgPT09IDApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnQgc3RlcCcsIHRoaXMuc3RlcCwgdGhpcy52YWx1ZSwgdilcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2Zsb2F0IHN0ZXAnLCB0aGlzLnN0ZXAsIHRoaXMudmFsdWUsIHYpXG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUudXBkYXRlKHYpO1xuXG4gICAgaWYodGhpcy5fdmFsdWUuY2hhbmdlZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2VtaXQ6Y2hhbmdlOnNldCcsIHRoaXMudmFsdWUsIHYsIHRoaXMuc3RlcCwgJ2NoYW5nZWQnLHRoaXMuX3ZhbHVlLmNoYW5nZWQpXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICBMb3dlciBsaW1pdCBvZiB0aGUgbnVtYmVyJ3Mgb3V0cHV0IHJhbmdlXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIG51bWJlci5taW4gPSAxMDAwO1xuICAqL1xuICBnZXQgbWluKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS5taW47XG4gIH1cbiAgc2V0IG1pbih2KSB7XG4gICAgdGhpcy5fdmFsdWUubWluID0gdjtcbiAgfVxuXG4gIC8qKlxuICBVcHBlciBsaW1pdCBvZiB0aGUgbnVtYmVyJ3Mgb3V0cHV0IHJhbmdlXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIG51bWJlci5tYXggPSAxMDAwO1xuICAqL1xuICBnZXQgbWF4KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS5tYXg7XG4gIH1cbiAgc2V0IG1heCh2KSB7XG4gICAgdGhpcy5fdmFsdWUubWF4ID0gdjtcbiAgfVxuXG4gIC8qKlxuICBUaGUgaW5jcmVtZW50IHRoYXQgdGhlIG51bWJlcidzIHZhbHVlIGNoYW5nZXMgYnkuXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIG51bWJlci5zdGVwID0gNTtcbiAgKi9cbiAgZ2V0IHN0ZXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLnN0ZXA7XG4gIH1cbiAgc2V0IHN0ZXAodikge1xuICAgIHRoaXMuX3ZhbHVlLnN0ZXAgPSB2O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL251bWJlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5cbi8qKlxuKiBTZWxlY3RcbipcbiogQGRlc2NyaXB0aW9uIERyb3Bkb3duIG1lbnVcbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJzZWxlY3RcIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBzZWxlY3QgPSBuZXcgTmV4dXMuU2VsZWN0KCcjdGFyZ2V0JylcbipcbiogQGV4YW1wbGVcbiogdmFyIHNlbGVjdCA9IG5ldyBOZXh1cy5TZWxlY3QoJyN0YXJnZXQnLHtcbiogICAnc2l6ZSc6IFsxMDAsMzBdLFxuKiAgICdvcHRpb25zJzogWydkZWZhdWx0Jywnb3B0aW9ucyddXG4qIH0pXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIGFueSB0aW1lIHRoZSBpbnRlcmZhY2UncyB2YWx1ZSBjaGFuZ2VzLiA8YnI+XG4qIFRoZSBldmVudCBkYXRhIGlzIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0ZXh0IHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBvcHRpb24sIGFzIHdlbGwgYXMgdGhlIG51bWVyaWMgaW5kZXggb2YgdGhlIHNlbGVjdGlvbi5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogc2VsZWN0Lm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbipcbiovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgICdzaXplJzogWzEwMCwzMF0sXG4gICAgICAgJ29wdGlvbnMnOiBbJ2RlZmF1bHQnLCdvcHRpb25zJ11cbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgIHRoaXMuX3ZhbHVlID0gZmFsc2U7XG5cbiAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5zZXR0aW5ncy5vcHRpb25zO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbiAgYnVpbGRGcmFtZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSB0aGlzLmhlaWdodC8yKydweCc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmhpZ2hsaWdodCA9ICdub25lJztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoKydweCc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0KydweCc7XG5cbiAgICB0aGlzLmJvdW5kUmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kUmVuZGVyKTtcblxuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cbiAgfVxuXG4gIGF0dGFjaExpc3RlbmVycygpIHtcblxuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmRlZmluZU9wdGlvbnMoKTtcblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcnMuZGFyaztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDBweCAnK3RoaXMuY29sb3JzLm1lZGl1bUxpZ2h0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmVsZW1lbnQub3B0aW9uc1t0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgIHZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgIGluZGV4OiB0aGlzLl9zZWxlY3RlZEluZGV4XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNsaWNrKCkge1xuXG4gIH1cblxuICBtb3ZlKCkge1xuXG4gIH1cblxuICByZWxlYXNlKCkge1xuXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBsaXN0IG9mIG9wdGlvbnMuIFRoaXMgcmVtb3ZlcyBhbGwgZXhpc3Rpbmcgb3B0aW9ucyBhbmQgY3JlYXRlcyBhIG5ldyBsaXN0IG9mIG9wdGlvbnMuXG4gICAqIEBwYXJhbSAge2FycmF5fSBvcHRpb25zIE5ldyBhcnJheSBvZiBvcHRpb25zXG4gICAqL1xuXG4gIGRlZmluZU9wdGlvbnMob3B0aW9ucykge1xuXG4gIC8qICBmdW5jdGlvbiByZW1vdmVPcHRpb25zKHNlbGVjdGJveClcbiAgICB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBmb3IoaSA9IHNlbGVjdGJveC5vcHRpb25zLmxlbmd0aCAtIDEgOyBpID49IDAgOyBpLS0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdGJveC5yZW1vdmUoaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy91c2luZyB0aGUgZnVuY3Rpb246XG4gICAgcmVtb3ZlT3B0aW9ucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2VsZWN0T2JqZWN0XCIpKTsgKi9cblxuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIGZvcihsZXQgaT10aGlzLmVsZW1lbnQub3B0aW9ucy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoaSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpPTA7aTx0aGlzLl9vcHRpb25zLmxlbmd0aDtpKyspIHtcbiAgICAgIHRoaXMuZWxlbWVudC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKHRoaXMuX29wdGlvbnNbaV0sIGkpKTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gIFRoZSB0ZXh0IG9mIHRoZSBvcHRpb24gdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuIElmIHNldCwgd2lsbCB1cGRhdGUgdGhlIGludGVyZmFjZSBhbmQgdHJpZ2dlciB0aGUgb3V0cHV0IGV2ZW50LlxuICBAdHlwZSB7U3RyaW5nfVxuICBAZXhhbXBsZSBzZWxlY3QudmFsdWUgPSBcInNhd3Rvb3RoXCI7XG4gICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHYpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgZm9yKGxldCBpPTA7aTx0aGlzLmVsZW1lbnQub3B0aW9ucy5sZW5ndGg7aSsrKSB7XG4gICAgICBpZiAodiA9PT0gdGhpcy5lbGVtZW50Lm9wdGlvbnNbaV0udGV4dCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICBUaGUgbnVtZXJpYyBpbmRleCBvZiB0aGUgb3B0aW9uIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLiBJZiBzZXQsIHdpbGwgdXBkYXRlIHRoZSBpbnRlcmZhY2UgYW5kIHRyaWdnZXIgdGhlIG91dHB1dCBldmVudC5cbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAyO1xuICAqL1xuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2KSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHY7XG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdGVkSW5kZXggPSB2O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjdXN0b21EZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kUmVuZGVyKTtcbiAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL3NlbGVjdC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgbWF0aCA9IHJlcXVpcmUoJy4uL3V0aWwvbWF0aCcpO1xubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5sZXQgU3RlcCA9IHJlcXVpcmUoJy4uL21vZGVscy9zdGVwJyk7XG5pbXBvcnQgKiBhcyBJbnRlcmFjdGlvbiBmcm9tICcuLi91dGlsL2ludGVyYWN0aW9uJztcblxuLyoqXG4qIERpYWxcbipcbipcbiogQGRlc2NyaXB0aW9uIERpYWwgd2l0aCByYWRpYWwgb3IgbGluZWFyIGludGVyYWN0aW9uLlxuKlxuKiBAZGVtbyA8c3BhbiBuZXh1cy11aT1cImRpYWxcIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBkaWFsID0gbmV3IE5leHVzLkRpYWwoJyN0YXJnZXQnKVxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgZGlhbCA9IG5ldyBOZXh1cy5EaWFsKCcjdGFyZ2V0Jyx7XG4qICAgJ3NpemUnOiBbNzUsNzVdLFxuKiAgICdpbnRlcmFjdGlvbic6ICdyYWRpYWwnLCAvLyBcInJhZGlhbFwiLCBcInZlcnRpY2FsXCIsIG9yIFwiaG9yaXpvbnRhbFwiXG4qICAgJ21vZGUnOiAncmVsYXRpdmUnLCAvLyBcImFic29sdXRlXCIgb3IgXCJyZWxhdGl2ZVwiXG4qICAgJ21pbic6IDAsXG4qICAgJ21heCc6IDEsXG4qICAgJ3N0ZXAnOiAwLFxuKiAgICd2YWx1ZSc6IDBcbiogfSlcbipcbiogQG91dHB1dFxuKiBjaGFuZ2VcbiogRmlyZXMgYW55IHRpbWUgdGhlIGludGVyZmFjZSdzIHZhbHVlIGNoYW5nZXMuIDxicj5cbiogVGhlIGV2ZW50IGRhdGEgaXMgdGhlIG51bWJlciB2YWx1ZSBvZiB0aGUgaW50ZXJmYWNlLlxuKlxuKiBAb3V0cHV0ZXhhbXBsZVxuKiBkaWFsLm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbiogQHR1dG9yaWFsXG4qIERpYWxcbiogeWdHTXhxXG4qXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsIGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWydtaW4nLCdtYXgnLCd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbNzUsNzVdLFxuICAgICAgJ2ludGVyYWN0aW9uJzogJ3JhZGlhbCcsIC8vIHJhZGlhbCwgdmVydGljYWwsIGhvcml6b250YWxcbiAgICAgICdtb2RlJzogJ3JlbGF0aXZlJywgLy8gYWJzb2x1dGUsIHJlbGF0aXZlXG4gICAgICAnbWluJzogMCxcbiAgICAgICdtYXgnOiAxLFxuICAgICAgJ3N0ZXAnOiAwLFxuICAgICAgJ3ZhbHVlJzogMFxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cbiAgICB0aGlzLmludGVyYWN0aW9uID0gdGhpcy5zZXR0aW5ncy5pbnRlcmFjdGlvbjtcblxuICAgIHRoaXMuX3ZhbHVlID0gbmV3IFN0ZXAodGhpcy5zZXR0aW5ncy5taW4sIHRoaXMuc2V0dGluZ3MubWF4LCB0aGlzLnNldHRpbmdzLnN0ZXAsIHRoaXMuc2V0dGluZ3MudmFsdWUpO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBJbnRlcmFjdGlvbi5IYW5kbGUodGhpcy5zZXR0aW5ncy5tb2RlLHRoaXMuaW50ZXJhY3Rpb24sWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlLnZhbHVlO1xuXG4gICAgdGhpcy5wb3NpdGlvbi52YWx1ZSA9IHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG5cbiAgICB0aGlzLnByZXZpb3VzQW5nbGUgPSBmYWxzZTtcblxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnZhbHVlKTtcblxuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmJhY2tncm91bmQgPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcbiAgICB0aGlzLnNjcmV3ID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG4gICAgdGhpcy5oYW5kbGUgPSBzdmcuY3JlYXRlKCdwYXRoJyk7XG4gICAgdGhpcy5oYW5kbGUyID0gc3ZnLmNyZWF0ZSgncGF0aCcpO1xuICAgIHRoaXMuaGFuZGxlRmlsbCA9IHN2Zy5jcmVhdGUoJ3BhdGgnKTtcbiAgICB0aGlzLmhhbmRsZTJGaWxsID0gc3ZnLmNyZWF0ZSgncGF0aCcpO1xuICAgIHRoaXMuaGFuZGxlTGluZSA9IHN2Zy5jcmVhdGUoJ3BhdGgnKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJhY2tncm91bmQpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmhhbmRsZSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaGFuZGxlMik7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaGFuZGxlRmlsbCk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaGFuZGxlMkZpbGwpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmhhbmRsZUxpbmUpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcmV3KTtcblxuICB9XG5cblxuICBzaXplSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5wb3NpdGlvbi5yZXNpemUoWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcblxuICAgIGxldCBjZW50ZXIgPSB7XG4gICAgICB4OiB0aGlzLndpZHRoLzIsXG4gICAgICB5OiB0aGlzLmhlaWdodC8yXG4gICAgfTtcblxuICAgIGxldCBkaWFtZXRlciA9IE1hdGgubWluKHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnY3gnLCBjZW50ZXIueCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnY3knLCBjZW50ZXIueSk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgncicsIGRpYW1ldGVyLzItZGlhbWV0ZXIvNDApO1xuXG4gICAgdGhpcy5zY3Jldy5zZXRBdHRyaWJ1dGUoJ2N4JywgY2VudGVyLngpO1xuICAgIHRoaXMuc2NyZXcuc2V0QXR0cmlidXRlKCdjeScsIGNlbnRlci55KTtcbiAgICB0aGlzLnNjcmV3LnNldEF0dHJpYnV0ZSgncicsIGRpYW1ldGVyLzEyKTtcblxuICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICBsZXQgaGFuZGxlUG9pbnRzID0ge1xuICAgICAgc3RhcnQ6IE1hdGguUEkqMS41LFxuICAgICAgZW5kOiBtYXRoLmNsaXAoIG1hdGguc2NhbGUodmFsdWUsMCwwLjUsTWF0aC5QSSoxLjUsTWF0aC5QSSowLjUpICwgTWF0aC5QSSowLjUsIE1hdGguUEkqMS41IClcbiAgICB9O1xuICAgIGxldCBoYW5kbGUyUG9pbnRzID0ge1xuICAgICAgc3RhcnQ6IE1hdGguUEkqMi41LFxuICAgICAgZW5kOiBtYXRoLmNsaXAoIG1hdGguc2NhbGUodmFsdWUsMC41LDEsTWF0aC5QSSoyLjUsTWF0aC5QSSoxLjUpICwgTWF0aC5QSSoxLjUsIE1hdGguUEkqMi41IClcbiAgICB9O1xuXG4gICAgbGV0IGhhbmRsZVBhdGggPSBzdmcuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgZGlhbWV0ZXIvMi1kaWFtZXRlci80MCwgaGFuZGxlUG9pbnRzLnN0YXJ0LCBoYW5kbGVQb2ludHMuZW5kKTtcbiAgICBsZXQgaGFuZGxlMlBhdGggPSBzdmcuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgZGlhbWV0ZXIvMi1kaWFtZXRlci80MCwgaGFuZGxlMlBvaW50cy5zdGFydCwgaGFuZGxlMlBvaW50cy5lbmQpO1xuXG4gICAgdGhpcy5oYW5kbGUuc2V0QXR0cmlidXRlKCdkJyxoYW5kbGVQYXRoKTtcbiAgICB0aGlzLmhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGRpYW1ldGVyLzIwKTtcbiAgICB0aGlzLmhhbmRsZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuXG4gICAgdGhpcy5oYW5kbGUyLnNldEF0dHJpYnV0ZSgnZCcsaGFuZGxlMlBhdGgpO1xuICAgIHRoaXMuaGFuZGxlMi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGRpYW1ldGVyLzIwKTtcbiAgICB0aGlzLmhhbmRsZTIuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGhhbmRsZVBhdGggKz0gJyBMICcrY2VudGVyLngrJyAnK2NlbnRlci55O1xuXG4gICAgdGhpcy5oYW5kbGVGaWxsLnNldEF0dHJpYnV0ZSgnZCcsaGFuZGxlUGF0aCk7XG4gICAgdGhpcy5oYW5kbGVGaWxsLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5JywgJzAuMycpO1xuXG4gICAgaGFuZGxlMlBhdGggKz0gJyBMICcrY2VudGVyLngrJyAnK2NlbnRlci55O1xuXG4gICAgdGhpcy5oYW5kbGUyRmlsbC5zZXRBdHRyaWJ1dGUoJ2QnLGhhbmRsZTJQYXRoKTtcbiAgICB0aGlzLmhhbmRsZTJGaWxsLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5JywgJzAuMycpO1xuXG4gICAgbGV0IGFyY0VuZGluZ0E7XG4gICAgaWYgKHZhbHVlIDwgMC41KSB7XG4gICAgICBhcmNFbmRpbmdBID0gaGFuZGxlUG9pbnRzLmVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJjRW5kaW5nQSA9IGhhbmRsZTJQb2ludHMuZW5kO1xuICAgIH1cblxuICAgIGxldCBhcmNFbmRpbmdYID0gY2VudGVyLnggKyBNYXRoLmNvcyhhcmNFbmRpbmdBKSAqIChkaWFtZXRlci8yKTtcbiAgICBsZXQgYXJjRW5kaW5nWSA9IGNlbnRlci55ICsgTWF0aC5zaW4oYXJjRW5kaW5nQSkgKiAoZGlhbWV0ZXIvMikgKiAtMTtcblxuICAgIHRoaXMuaGFuZGxlTGluZS5zZXRBdHRyaWJ1dGUoJ2QnLCdNICcrY2VudGVyLngrJyAnK2NlbnRlci55KycgTCAnK2FyY0VuZGluZ1grJyAnK2FyY0VuZGluZ1kpO1xuICAgIHRoaXMuaGFuZGxlTGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGRpYW1ldGVyLzIwKTtcblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmZpbGwpO1xuICAgIHRoaXMuc2NyZXcuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB0aGlzLmhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgdGhpcy5oYW5kbGUyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB0aGlzLmhhbmRsZUZpbGwuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB0aGlzLmhhbmRsZTJGaWxsLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgdGhpcy5oYW5kbGVMaW5lLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG5cbiAgICBsZXQgY2VudGVyID0ge1xuICAgICAgeDogdGhpcy53aWR0aC8yLFxuICAgICAgeTogdGhpcy5oZWlnaHQvMlxuICAgIH07XG5cbiAgICBsZXQgZGlhbWV0ZXIgPSBNYXRoLm1pbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcblxuICAgIGxldCBoYW5kbGVQb2ludHMgPSB7XG4gICAgICBzdGFydDogTWF0aC5QSSoxLjUsXG4gICAgICBlbmQ6IG1hdGguY2xpcCggbWF0aC5zY2FsZSh2YWx1ZSwwLDAuNSxNYXRoLlBJKjEuNSxNYXRoLlBJKjAuNSkgLCBNYXRoLlBJKjAuNSwgTWF0aC5QSSoxLjUgKVxuICAgIH07XG4gICAgbGV0IGhhbmRsZTJQb2ludHMgPSB7XG4gICAgICBzdGFydDogTWF0aC5QSSAqMi41LFxuICAgICAgZW5kOiBtYXRoLmNsaXAoIG1hdGguc2NhbGUodmFsdWUsMC41LDEsTWF0aC5QSSoyLjUsTWF0aC5QSSoxLjUpICwgTWF0aC5QSSoxLjUsIE1hdGguUEkqMi41IClcbiAgICB9O1xuXG4gICAgbGV0IGhhbmRsZVBhdGggPSBzdmcuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgZGlhbWV0ZXIvMi1kaWFtZXRlci80MCwgaGFuZGxlUG9pbnRzLnN0YXJ0LCBoYW5kbGVQb2ludHMuZW5kKTtcbiAgICBsZXQgaGFuZGxlMlBhdGggPSBzdmcuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgZGlhbWV0ZXIvMi1kaWFtZXRlci80MCwgaGFuZGxlMlBvaW50cy5zdGFydCwgaGFuZGxlMlBvaW50cy5lbmQpO1xuXG4gICAgdGhpcy5oYW5kbGUuc2V0QXR0cmlidXRlKCdkJyxoYW5kbGVQYXRoKTtcbiAgICB0aGlzLmhhbmRsZTIuc2V0QXR0cmlidXRlKCdkJyxoYW5kbGUyUGF0aCk7XG5cblxuICAgIGhhbmRsZVBhdGggKz0gJyBMICcrY2VudGVyLngrJyAnK2NlbnRlci55O1xuXG4gICAgdGhpcy5oYW5kbGVGaWxsLnNldEF0dHJpYnV0ZSgnZCcsaGFuZGxlUGF0aCk7XG5cbiAgICBoYW5kbGUyUGF0aCArPSAnIEwgJytjZW50ZXIueCsnICcrY2VudGVyLnk7XG5cbiAgICB0aGlzLmhhbmRsZTJGaWxsLnNldEF0dHJpYnV0ZSgnZCcsaGFuZGxlMlBhdGgpO1xuXG4gICAgbGV0IGFyY0VuZGluZ0E7XG4gICAgaWYgKHZhbHVlIDw9IDAuNSkge1xuICAgICAgYXJjRW5kaW5nQSA9IGhhbmRsZVBvaW50cy5lbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyY0VuZGluZ0EgPSBoYW5kbGUyUG9pbnRzLmVuZDtcbiAgICB9XG5cbiAgICBsZXQgYXJjRW5kaW5nWCA9IGNlbnRlci54ICsgTWF0aC5jb3MoYXJjRW5kaW5nQSkgKiAoZGlhbWV0ZXIvMik7XG4gICAgbGV0IGFyY0VuZGluZ1kgPSBjZW50ZXIueSArIE1hdGguc2luKGFyY0VuZGluZ0EpICogKGRpYW1ldGVyLzIpICogLTE7XG5cbiAgICB0aGlzLmhhbmRsZUxpbmUuc2V0QXR0cmlidXRlKCdkJywnTSAnK2NlbnRlci54KycgJytjZW50ZXIueSsnIEwgJythcmNFbmRpbmdYKycgJythcmNFbmRpbmdZKTtcblxuICB9XG5cblxuICBjbGljaygpIHtcbiAgICBpZiAodGhpcy5tb2RlPT09J3JlbGF0aXZlJykge1xuICAgICAgdGhpcy5wcmV2aW91c0FuZ2xlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMucG9zaXRpb24uYW5jaG9yID0gdGhpcy5tb3VzZTtcbiAgICB0aGlzLnBvc2l0aW9uLnZhbHVlID0gdGhpcy5fdmFsdWUubm9ybWFsaXplZDtcbiAgICB0aGlzLm1vdmUoKTtcbiAgIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICh0aGlzLmNsaWNrZWQpIHtcblxuICAgICAgdGhpcy5wb3NpdGlvbi51cGRhdGUodGhpcy5tb3VzZSk7XG5cbiAgICAgIGxldCBhbmdsZSA9IHRoaXMucG9zaXRpb24udmFsdWUqTWF0aC5QSSoyO1xuXG4gICAgICBpZiAoYW5nbGUgPCAwICkgeyBhbmdsZSArPSAoTWF0aC5QSSoyKTsgfVxuXG4gICAgICBpZiAodGhpcy5tb2RlID09PSAncmVsYXRpdmUnKSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzQW5nbGUgIT09IGZhbHNlICYmIE1hdGguYWJzKHRoaXMucHJldmlvdXNBbmdsZSAtIGFuZ2xlKSA+IDIpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c0FuZ2xlID4gMykge1xuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLlBJKjI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuZ2xlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLyogZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzQW5nbGUgIT09IGZhbHNlICYmIE1hdGguYWJzKHRoaXMucHJldmlvdXNBbmdsZSAtIGFuZ2xlKSA+IDIpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c0FuZ2xlID4gMykge1xuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLlBJKjI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuZ2xlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gKi9cbiAgICAgIHRoaXMucHJldmlvdXNBbmdsZSA9IGFuZ2xlO1xuXG4gICAgICBsZXQgcmVhbFZhbHVlID0gYW5nbGUgLyAoTWF0aC5QSSoyKTtcblxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlLnVwZGF0ZU5vcm1hbCggcmVhbFZhbHVlICk7XG5cbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi52YWx1ZSA9IHJlYWxWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuX3ZhbHVlLnZhbHVlKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIH1cbiAgfVxuXG4gIHJlbGVhc2UoKSB7XG4gIH1cblxuICAvKlxuICBEaWFsJ3MgdmFsdWUuIFdoZW4gc2V0LCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgYWRqdXN0IHRvIGZpdCBtaW4vbWF4L3N0ZXAgc2V0dGluZ3Mgb2YgdGhlIGludGVyZmFjZS5cbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgZGlhbC52YWx1ZSA9IDEwO1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUudmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZS51cGRhdGUodmFsdWUpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4qL1xuXG4gICAgLyoqXG4gICAgRGlhbCdzIHZhbHVlLiBXaGVuIHNldCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGFkanVzdCB0byBmaXQgbWluL21heC9zdGVwIHNldHRpbmdzIG9mIHRoZSBpbnRlcmZhY2UuXG4gICAgQHR5cGUge251bWJlcn1cbiAgICBAZXhhbXBsZSBkaWFsLnZhbHVlID0gMTA7XG4gICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWUudmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICB0aGlzLl92YWx1ZS51cGRhdGUodik7XG4gICAgICB0aGlzLnBvc2l0aW9uLnZhbHVlID0gdGhpcy5fdmFsdWUubm9ybWFsaXplZDtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLl92YWx1ZS52YWx1ZSk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgIExvd2VyIGxpbWl0IG9mIHRoZSBkaWFsJ3Mgb3V0cHV0IHJhbmdlXG4gICAgQHR5cGUge251bWJlcn1cbiAgICBAZXhhbXBsZSBkaWFsLm1pbiA9IDEwMDA7XG4gICAgKi9cbiAgICBnZXQgbWluKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm1pbjtcbiAgICB9XG4gICAgc2V0IG1pbih2KSB7XG4gICAgICB0aGlzLl92YWx1ZS5taW4gPSB2O1xuICAgIH1cblxuICAgIC8qKlxuICAgIFVwcGVyIGxpbWl0IG9mIHRoZSBkaWFsJ3Mgb3V0cHV0IHJhbmdlXG4gICAgQHR5cGUge251bWJlcn1cbiAgICBAZXhhbXBsZSBkaWFsLm1heCA9IDEwMDA7XG4gICAgKi9cbiAgICBnZXQgbWF4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm1heDtcbiAgICB9XG4gICAgc2V0IG1heCh2KSB7XG4gICAgICB0aGlzLl92YWx1ZS5tYXggPSB2O1xuICAgIH1cblxuICAgIC8qKlxuICAgIFRoZSBpbmNyZW1lbnQgdGhhdCB0aGUgZGlhbCdzIHZhbHVlIGNoYW5nZXMgYnkuXG4gICAgQHR5cGUge251bWJlcn1cbiAgICBAZXhhbXBsZSBkaWFsLnN0ZXAgPSA1O1xuICAgICovXG4gICAgZ2V0IHN0ZXAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWUuc3RlcDtcbiAgICB9XG4gICAgc2V0IHN0ZXAodikge1xuICAgICAgdGhpcy5fdmFsdWUuc3RlcCA9IHY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgQWJzb2x1dGUgbW9kZSAoZGlhbCdzIHZhbHVlIGp1bXBzIHRvIG1vdXNlIGNsaWNrIHBvc2l0aW9uKSBvciByZWxhdGl2ZSBtb2RlIChtb3VzZSBkcmFnIGNoYW5nZXMgdmFsdWUgcmVsYXRpdmUgdG8gaXRzIGN1cnJlbnQgcG9zaXRpb24pLiBEZWZhdWx0OiBcInJlbGF0aXZlXCIuXG4gICAgQHR5cGUge3N0cmluZ31cbiAgICBAZXhhbXBsZSBkaWFsLm1vZGUgPSBcInJlbGF0aXZlXCI7XG4gICAgKi9cbiAgICBnZXQgbW9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLm1vZGU7XG4gICAgfVxuICAgIHNldCBtb2RlKHYpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubW9kZSA9IHY7XG4gICAgfVxuXG5cbiAgLyoqXG4gIE5vcm1hbGl6ZWQgdmFsdWUgb2YgdGhlIGRpYWwuXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIGRpYWwubm9ybWFsaXplZCA9IDAuNTtcbiAgKi9cbiAgZ2V0IG5vcm1hbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG4gIH1cblxuICBzZXQgbm9ybWFsaXplZCh2KSB7XG4gICAgdGhpcy5fdmFsdWUudXBkYXRlTm9ybWFsKHYpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnZhbHVlKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9kaWFsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgc3ZnID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKTtcbmxldCBJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi9jb3JlL2ludGVyZmFjZScpO1xubGV0IEJ1dHRvblRlbXBsYXRlID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9idXR0b250ZW1wbGF0ZScpO1xubGV0IHRvdWNoID0gcmVxdWlyZSgnLi4vdXRpbC90b3VjaCcpO1xuXG5jbGFzcyBQaWFub0tleSBleHRlbmRzIEJ1dHRvblRlbXBsYXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZScsJ25vdGUnLCdjb2xvciddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbODAsODBdLFxuICAgICAgJ3RhcmdldCc6IGZhbHNlLFxuICAgICAgJ21vZGUnOiAnYnV0dG9uJyxcbiAgICAgICd2YWx1ZSc6IDBcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5ub3RlID0gdGhpcy5zZXR0aW5ncy5ub3RlO1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLnNldHRpbmdzLmNvbG9yO1xuXG4gICAgdGhpcy5jb2xvcnMgPSB7XG4gICAgICAndyc6ICcjZmZmJyxcbiAgICAgICdiJzogJyM2NjYnLFxuICAgIH07XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBidWlsZEZyYW1lKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHN2Zy5jcmVhdGUoJ3N2ZycpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx0aGlzLndpZHRoKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLnBhZCA9IHN2Zy5jcmVhdGUoJ3JlY3QnKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnBhZCk7XG5cbiAgICB0aGlzLmludGVyYWN0aW9uVGFyZ2V0ID0gdGhpcy5wYWQ7XG5cbiAgICAvKiBldmVudHMgKi9cblxuICAgIGlmICghdG91Y2guZXhpc3RzKSB7XG5cbiAgICAgIHRoaXMuY2xpY2sgPSAoKSA9PiB7XG4gICAgICAvLyAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgICAgIHRoaXMucGlhbm8uaW50ZXJhY3RpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnBpYW5vLnBhaW50YnJ1c2ggPSAhdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5kb3duKHRoaXMucGlhbm8ucGFpbnRicnVzaCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnBhZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBpYW5vLmludGVyYWN0aW5nKSB7XG4gICAgICAvLyAgICBjb25zb2xlLmxvZygnbW91c2VvdmVyJyk7XG4gICAgICAgICAgdGhpcy5kb3duKHRoaXMucGlhbm8ucGFpbnRicnVzaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cbiAgICAgIHRoaXMubW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGlhbm8uaW50ZXJhY3RpbmcpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdtb3ZlJyk7XG4gICAgICAgICAgdGhpcy5iZW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cblxuICAgICAgdGhpcy5yZWxlYXNlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnBpYW5vLmludGVyYWN0aW5nID0gZmFsc2U7XG4gICAgICAvLyAgY29uc29sZS5sb2coJ3JlbGVhc2UnKTtcbiAgICAgIC8vICB0aGlzLnVwKCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5wYWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGlhbm8uaW50ZXJhY3RpbmcpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdtb3VzZXVwJyk7XG4gICAgICAgICAgdGhpcy51cCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucGFkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5waWFuby5pbnRlcmFjdGluZykge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coJ21vdXNlb3V0Jyk7XG4gICAgICAgICAgdGhpcy51cCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH1cblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuICAgICAgICAvL2xldCByYWRpdXMgPSBNYXRoLm1pbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KSAvIDU7XG4gICAgICAgIGxldCByYWRpdXMgPSAwO1xuXG4gICAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgneCcsMC41KTtcbiAgICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCd5JywwLjUpO1xuICAgICAgICBpZiAodGhpcy53aWR0aCA+IDIpIHtcbiAgICAgICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy53aWR0aCAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLndpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPiAyKSB7XG4gICAgICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdyeCcsIHJhZGl1cyk7XG4gICAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgncnknLCByYWRpdXMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlKSB7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9yc1t0aGlzLmNvbG9yXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4qIFBpYW5vXG4qXG4qIEBkZXNjcmlwdGlvbiBQaWFubyBrZXlib2FyZCBpbnRlcmZhY2VcbipcbiogQGRlbW8gPGRpdiBuZXh1cy11aT1cInBpYW5vXCI+PC9kaXY+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBwaWFubyA9IG5ldyBOZXh1cy5QaWFubygnI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciBwaWFubyA9IG5ldyBOZXh1cy5QaWFubygnI3RhcmdldCcse1xuKiAgICAgJ3NpemUnOiBbNTAwLDEyNV0sXG4qICAgICAnbW9kZSc6ICdidXR0b24nLCAgLy8gJ2J1dHRvbicsICd0b2dnbGUnLCBvciAnaW1wdWxzZSdcbiogICAgICdsb3dOb3RlJzogMjQsXG4qICAgICAnaGlnaE5vdGUnOiA2MFxuKiB9KVxuKlxuKiBAb3V0cHV0XG4qIGNoYW5nZVxuKiBGaXJlcyBhbnkgdGltZSBhIG5ldyBrZXkgaXMgcHJlc3NlZCBvciByZWxlYXNlZCA8YnI+XG4qIFRoZSBldmVudCBkYXRhIGlzIGFuIG9iamVjdCBjb250YWluaW5nIDxpPm5vdGU8L2k+IGFuZCA8aT5zdGF0ZTwvaT4gcHJvcGVydGllcy5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogcGlhbm8ub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuKiAgIGNvbnNvbGUubG9nKHYpO1xuKiB9KVxuKlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm8gZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ3ZhbHVlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAnc2l6ZSc6IFs1MDAsMTI1XSxcbiAgICAgICdsb3dOb3RlJzogMjQsXG4gICAgICAnaGlnaE5vdGUnOiA2MCxcbiAgICAgICdtb2RlJzogJ2J1dHRvbidcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5rZXlQYXR0ZXJuID0gWyd3JywnYicsJ3cnLCdiJywndycsJ3cnLCdiJywndycsJ2InLCd3JywnYicsJ3cnXTtcblxuICAgIHRoaXMucGFpbnRicnVzaCA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb2RlID0gdGhpcy5zZXR0aW5ncy5tb2RlO1xuXG4gICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgIGxvdzogdGhpcy5zZXR0aW5ncy5sb3dOb3RlLFxuICAgICAgaGlnaDogdGhpcy5zZXR0aW5ncy5oaWdoTm90ZVxuICAgIH07XG5cbiAgICB0aGlzLnJhbmdlLnNpemUgPSB0aGlzLnJhbmdlLmhpZ2ggLSB0aGlzLnJhbmdlLmxvdyArIDE7XG5cbiAgICB0aGlzLmtleXMgPSBbXTtcblxuICAgIHRoaXMudG9nZ2xlVG8gPSBmYWxzZTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG4gIGJ1aWxkRnJhbWUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzBweCc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcblxuICAgIHRoaXMua2V5cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaT0wO2k8dGhpcy5yYW5nZS5zaXplO2krKykge1xuXG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbGV0IHNjYWxlSW5kZXggPSAoaSt0aGlzLnJhbmdlLmxvdykgJSB0aGlzLmtleVBhdHRlcm4ubGVuZ3RoO1xuXG4gICAgICBsZXQga2V5ID0gbmV3IFBpYW5vS2V5KGNvbnRhaW5lciwge1xuICAgICAgICAgIGNvbXBvbmVudDogdHJ1ZSxcbiAgICAgICAgICBub3RlOiBpK3RoaXMucmFuZ2UubG93LFxuICAgICAgICAgIGNvbG9yOiB0aGlzLmtleVBhdHRlcm5bc2NhbGVJbmRleF0sXG4gICAgICAgICAgbW9kZTogdGhpcy5tb2RlXG4gICAgICAgIH0sIHRoaXMua2V5Q2hhbmdlLmJpbmQodGhpcyxpK3RoaXMucmFuZ2UubG93KSk7XG5cbiAgICAgIGtleS5waWFubyA9IHRoaXM7XG5cbiAgICAgIGlmICh0b3VjaC5leGlzdHMpIHtcbiAgICAgICAga2V5LnBhZC5pbmRleCA9IGk7XG4gICAgICAgIGtleS5wcmVDbGljayA9IGtleS5wcmVNb3ZlID0ga2V5LnByZVJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgICAga2V5LmNsaWNrID0ga2V5Lm1vdmUgPSBrZXkucmVsZWFzZSA9ICgpID0+IHt9O1xuICAgICAgICBrZXkucHJlVG91Y2ggPSBrZXkucHJlVG91Y2hNb3ZlID0ga2V5LnByZVRvdWNoUmVsZWFzZSA9ICgpID0+IHt9O1xuICAgICAgICBrZXkudG91Y2ggPSBrZXkudG91Y2hNb3ZlID0ga2V5LnRvdWNoUmVsZWFzZSA9ICgpID0+IHt9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmtleXMucHVzaChrZXkpO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICB9XG4gICAgaWYgKHRvdWNoLmV4aXN0cykge1xuICAgICAgdGhpcy5hZGRUb3VjaExpc3RlbmVycygpO1xuICAgIH1cblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuICAgIGxldCBrZXlYID0gMDtcblxuICAgIGxldCBrZXlQb3NpdGlvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGk9MDtpPHRoaXMucmFuZ2Uuc2l6ZTtpKyspIHtcblxuICAgICAga2V5UG9zaXRpb25zLnB1c2goa2V5WCk7XG5cbiAgICAgIGxldCBzY2FsZUluZGV4ID0gKGkrdGhpcy5yYW5nZS5sb3cpICUgdGhpcy5rZXlQYXR0ZXJuLmxlbmd0aDtcbiAgICAgIGxldCBuZXh0U2NhbGVJbmRleCA9IChpKzErdGhpcy5yYW5nZS5sb3cpICUgdGhpcy5rZXlQYXR0ZXJuLmxlbmd0aDtcbiAgICAgIGlmIChpKzErdGhpcy5yYW5nZS5sb3cgPj0gdGhpcy5yYW5nZS5oaWdoKSB7XG4gICAgICAgIGtleVggKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlQYXR0ZXJuW3NjYWxlSW5kZXhdID09PSAndycgJiYgdGhpcy5rZXlQYXR0ZXJuW25leHRTY2FsZUluZGV4XSA9PT0gJ3cnKSB7XG4gICAgICAgIGtleVggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleVggKz0gMC41O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQga2V5c1dpZGUgPSBrZXlYO1xuXG5cbiAgLy8gIGxldCBwYWRkaW5nID0gdGhpcy53aWR0aCAvIDEyMDtcbiAgICBsZXQgcGFkZGluZyA9IDE7XG4gICAgbGV0IGJ1dHRvbldpZHRoID0gKHRoaXMud2lkdGgtcGFkZGluZyoyKSAvIGtleXNXaWRlO1xuICAgIGxldCBidXR0b25IZWlnaHQgPSAodGhpcy5oZWlnaHQtcGFkZGluZyoyKSAvIDI7XG5cbiAgICBmb3IgKGxldCBpPTA7aTx0aGlzLmtleXMubGVuZ3RoO2krKykge1xuXG4gICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5rZXlzW2ldLnBhcmVudDtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9IChrZXlQb3NpdGlvbnNbaV0qYnV0dG9uV2lkdGgrcGFkZGluZykgKyAncHgnO1xuICAgICAgaWYgKHRoaXMua2V5c1tpXS5jb2xvciA9PT0gJ3cnKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSAocGFkZGluZykgKyAncHgnO1xuICAgICAgICB0aGlzLmtleXNbaV0ucmVzaXplKGJ1dHRvbldpZHRoLCBidXR0b25IZWlnaHQqMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuekluZGV4ID0gMTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnRvcCA9IHBhZGRpbmcrJ3B4JztcbiAgICAgICAgdGhpcy5rZXlzW2ldLnJlc2l6ZShidXR0b25XaWR0aCwgYnV0dG9uSGVpZ2h0KjEuMSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuXG4gICAgLy8gUGlhbm8ga2V5cyBkb24ndCBhY3R1YWxseSBoYXZlIGEgc3Ryb2tlIGJvcmRlclxuICAgIC8vIFRoZXkgaGF2ZSBzcGFjZSBiZXR3ZWVuIHRoZW0sIHdoaWNoIHNob3dzIHRoZSBQaWFubyBiZyBjb2xvclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9ycy5tZWRpdW1MaWdodDtcblxuICAgIGZvciAobGV0IGk9MDtpPHRoaXMua2V5cy5sZW5ndGg7aSsrKSB7XG4gICAgICB0aGlzLmtleXNbaV0uY29sb3JzID0ge1xuICAgICAgICAndyc6IHRoaXMuY29sb3JzLmxpZ2h0LFxuICAgICAgICAnYic6IHRoaXMuY29sb3JzLmRhcmssXG4gICAgICAgICdhY2NlbnQnOiB0aGlzLmNvbG9ycy5hY2NlbnQsXG4gICAgICAgICdib3JkZXInOiB0aGlzLmNvbG9ycy5tZWRpdW1MaWdodFxuICAgICAgfTtcbiAgICAgIHRoaXMua2V5c1tpXS5jb2xvckludGVyZmFjZSgpO1xuICAgICAgdGhpcy5rZXlzW2ldLnJlbmRlcigpO1xuICAgIH1cblxuXG4gIH1cblxuICBrZXlDaGFuZ2Uobm90ZSxvbikge1xuICAgIC8vIGVtaXQgZGF0YSBmb3IgYW55IGtleSB0dXJuaW5nIG9uL29mZlxuICAgIC8vIFwibm90ZVwiIGlzIHRoZSBub3RlIHZhbHVlXG4gICAgLy8gXCJvblwiIGlzIGEgYm9vbGVhbiB3aGV0aGVyIGl0IGlzIG9uIG9yIG9mZlxuICAgIC8vIGluIGFmdGVydG91Y2ggbW9kZSwgXCJvbjogaXMgYW4gb2JqZWN0IHdpdGggc3RhdGUveC95IHByb3BlcnRpZXNcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIG5vdGU6IG5vdGVcbiAgICB9O1xuICAgIGlmICh0eXBlb2Ygb24gPT09ICdvYmplY3QnKSB7XG4gICAgICBkYXRhLnN0YXRlID0gb24uc3RhdGU7XG4gICAgLy8gIGRhdGEueCA9IG9uLnhcbiAgICAvLyAgZGF0YS55ID0gb24ueVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLnN0YXRlID0gb247XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyxkYXRhKTtcbiAgfVxuXG4gIC8qIGRyYWcobm90ZSxvbikge1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx7XG4gICAgICBub3RlOiBub3RlLFxuICAgICAgc3RhdGU6IG9uXG4gICAgfSk7XG4gIH0gKi9cblxuICByZW5kZXIoKSB7XG4gICAgLy8gbG9vcCB0aHJvdWdoIGFuZCByZW5kZXIgdGhlIGtleXM/XG4gIH1cblxuICBhZGRUb3VjaExpc3RlbmVycygpIHtcbiAgICB0aGlzLnByZUNsaWNrID0gdGhpcy5wcmVNb3ZlID0gdGhpcy5wcmVSZWxlYXNlID0gKCkgPT4ge307XG4gICAgdGhpcy5jbGljayA9IHRoaXMubW92ZSA9IHRoaXMucmVsZWFzZSA9ICgpID0+IHt9O1xuICAgIHRoaXMucHJlVG91Y2ggPSB0aGlzLnByZVRvdWNoTW92ZSA9IHRoaXMucHJlVG91Y2hSZWxlYXNlID0gKCkgPT4ge307XG4gICAgdGhpcy50b3VjaCA9IHRoaXMudG91Y2hNb3ZlID0gdGhpcy50b3VjaFJlbGVhc2UgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0IGFsbEFjdGl2ZVRvdWNoZXMgPSB7fTtcbiAgICBjb25zdCBrZXlzID0gdGhpcy5rZXlzO1xuXG4gICAgZnVuY3Rpb24gY2xvbmVUb3VjaCh0b3VjaCkge1xuICAgICAgcmV0dXJuIHsgaWRlbnRpZmllcjogdG91Y2guaWRlbnRpZmllciwgY2xpZW50WDogdG91Y2guY2xpZW50WCwgY2xpZW50WTogdG91Y2guY2xpZW50WSB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUtleVN0YXRlKCkge1xuICAgICAgY29uc3QgYWxsQWN0aXZlS2V5cyA9IHt9O1xuXG4gICAgICAvLyBDaGVjay9zZXQgXCJrZXktZG93blwiIHN0YXR1cyBmb3IgYWxsIGtleXMgdGhhdCBhcmUgY3VycmVudGx5IHRvdWNoZWQuXG4gICAgICBPYmplY3Qua2V5cyhhbGxBY3RpdmVUb3VjaGVzKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgY29uc3QgdG91Y2ggPSBhbGxBY3RpdmVUb3VjaGVzW2lkXTtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpO1xuICAgICAgICBsZXQga2V5ID0gZWwgPyBrZXlzW2VsLmluZGV4XSA6IG51bGw7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICBhbGxBY3RpdmVLZXlzW2VsLmluZGV4XSA9IGlkO1xuICAgICAgICAgIGlmICgha2V5LnN0YXRlKSB7XG4gICAgICAgICAgICBrZXkuZG93bigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgYWxsQWN0aXZlVG91Y2hlc1tpZF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXQgXCJrZXktdXBcIiBzdGF0dXMgZm9yIGFsbCBrZXlzIHRoYXQgYXJlIHVudG91Y2hlZC5cbiAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoa2V5LnN0YXRlICYmICFhbGxBY3RpdmVLZXlzW2tleS5wYWQuaW5kZXhdKSB7XG4gICAgICAgICAga2V5LnVwKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRBbmRNb3ZlKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICAgIGFsbEFjdGl2ZVRvdWNoZXNbdG91Y2guaWRlbnRpZmllcl0gPSBjbG9uZVRvdWNoKHRvdWNoKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZUtleVN0YXRlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1tpXTtcbiAgICAgICAgZGVsZXRlIGFsbEFjdGl2ZVRvdWNoZXNbdG91Y2guaWRlbnRpZmllcl07XG4gICAgICB9XG4gICAgICB1cGRhdGVLZXlTdGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydEFuZE1vdmUpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaFN0YXJ0QW5kTW92ZSk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpO1xuICB9XG5cbiAgLyoqXG4gIERlZmluZSB0aGUgcGl0Y2ggcmFuZ2UgKGxvd2VzdCBhbmQgaGlnaGVzdCBub3RlKSBvZiB0aGUgcGlhbm8ga2V5Ym9hcmQuXG4gIEBwYXJhbSBsb3cge251bWJlcn0gTUlESSBub3RlIHZhbHVlIG9mIHRoZSBsb3dlc3Qgbm90ZSBvbiB0aGUga2V5Ym9hcmRcbiAgQHBhcmFtIGhpZ2gge251bWJlcn0gTUlESSBub3RlIHZhbHVlIG9mIHRoZSBoaWdoZXN0IG5vdGUgb24gdGhlIGtleWJvYXJkXG4gICovXG4gIHNldFJhbmdlKGxvdyxoaWdoKSB7XG4gICAgdGhpcy5yYW5nZS5sb3cgPSBsb3c7XG4gICAgdGhpcy5yYW5nZS5oaWdoID0gaGlnaDtcbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICB9XG5cbiAgLyoqXG4gIFR1cm4gYSBrZXkgb24gb3Igb2ZmIHVzaW5nIGl0cyBNSURJIG5vdGUgdmFsdWU7XG4gIEBwYXJhbSBub3RlIHtudW1iZXJ9IE1JREkgbm90ZSB2YWx1ZSBvZiB0aGUga2V5IHRvIGNoYW5nZVxuICBAcGFyYW0gb24ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIG5vdGUgc2hvdWxkIHR1cm4gb24gb3Igb2ZmXG4gICovXG4gIHRvZ2dsZUtleShub3RlLCBvbikge1xuICAgIHRoaXMua2V5c1tub3RlLXRoaXMucmFuZ2UubG93XS5mbGlwKG9uKTtcbiAgfVxuXG4gIC8qKlxuICBUdXJuIGEga2V5IG9uIG9yIG9mZiB1c2luZyBpdHMga2V5IGluZGV4IG9uIHRoZSBwaWFubyBpbnRlcmZhY2UuXG4gIEBwYXJhbSBpbmRleCB7bnVtYmVyfSBJbmRleCBvZiB0aGUga2V5IHRvIGNoYW5nZVxuICBAcGFyYW0gb24ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIG5vdGUgc2hvdWxkIHR1cm4gb24gb3Igb2ZmXG4gICovXG4gIHRvZ2dsZUluZGV4KGluZGV4LCBvbikge1xuICAgIHRoaXMua2V5c1tpbmRleF0uZmxpcChvbik7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2ludGVyZmFjZXMvcGlhbm8uanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBzdmcgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpO1xubGV0IGRvbSA9IHJlcXVpcmUoJy4uL3V0aWwvZG9tJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcbmxldCBCdXR0b25UZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvYnV0dG9udGVtcGxhdGUnKTtcbmxldCBNYXRyaXhNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVscy9tYXRyaXgnKTtcbmxldCBDb3VudGVyTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbHMvY291bnRlcicpO1xubGV0IEludGVydmFsID0gcmVxdWlyZSgnLi4vdGltZS9pbnRlcnZhbCcpO1xubGV0IHRvdWNoID0gcmVxdWlyZSgnLi4vdXRpbC90b3VjaCcpO1xuXG5jbGFzcyBNYXRyaXhDZWxsIGV4dGVuZHMgQnV0dG9uVGVtcGxhdGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFsndmFsdWUnXTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIHNpemU6IFs4MCwgODBdLFxuICAgICAgdGFyZ2V0OiBmYWxzZSxcbiAgICAgIG1vZGU6ICd0b2dnbGUnLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICBwYWRkaW5nUm93OiAyLFxuICAgICAgcGFkZGluZ0NvbHVtbjogMlxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsIG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgIHRoaXMuaW5kZXggPSB0aGlzLnNldHRpbmdzLmluZGV4O1xuICAgIHRoaXMucm93ID0gdGhpcy5zZXR0aW5ncy5yb3c7XG4gICAgdGhpcy5jb2x1bW4gPSB0aGlzLnNldHRpbmdzLmNvbHVtbjtcblxuICAgIHRoaXMubWF0cml4ID0gdGhpcy5zZXR0aW5ncy5tYXRyaXg7XG5cbiAgICAvKipcbiAgICAgKiAgQW1vdW50IG9mIHJvdyBwYWRkaW5nXG4gICAgICogIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5wYWRkaW5nUm93ID0gdGhpcy5zZXR0aW5ncy5wYWRkaW5nUm93IHx8IGRlZmF1bHRzLnBhZGRpbmdSb3c7XG5cbiAgICAvKipcbiAgICAgKiAgQW1vdW50IG9mIGNvbHVtbiBwYWRkaW5nXG4gICAgICogIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5wYWRkaW5nQ29sdW1uID0gdGhpcy5zZXR0aW5ncy5wYWRkaW5nQ29sdW1uIHx8IGRlZmF1bHRzLnBhZGRpbmdDb2x1bW47XG5cbiAgICB0aGlzLmludGVyYWN0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wYWludGJydXNoID0gZmFsc2U7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYnVpbGRGcmFtZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBzdmcuY3JlYXRlKCdzdmcnKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMud2lkdGgpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcbiAgICB0aGlzLnBhZCA9IHN2Zy5jcmVhdGUoJ3JlY3QnKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5wYWQpO1xuXG4gICAgdGhpcy5pbnRlcmFjdGlvblRhcmdldCA9IHRoaXMucGFkO1xuXG4gICAgLyogZXZlbnRzICovXG5cbiAgICBpZiAoIXRvdWNoLmV4aXN0cykge1xuICAgICAgdGhpcy5jbGljayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5tYXRyaXguaW50ZXJhY3RpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm1hdHJpeC5wYWludGJydXNoID0gIXRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuZG93bih0aGlzLm1hdHJpeC5wYWludGJydXNoKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnBhZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm1hdHJpeC5pbnRlcmFjdGluZykge1xuICAgICAgICAgIHRoaXMuZG93bih0aGlzLm1hdHJpeC5wYWludGJydXNoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubW92ZSA9ICgpID0+IHt9O1xuICAgICAgdGhpcy5wYWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm1hdHJpeC5pbnRlcmFjdGluZykge1xuICAgICAgICAgIGlmICghdGhpcy5vZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gZG9tLmZpbmRQb3NpdGlvbih0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm1vdXNlID0gZG9tLmxvY2F0ZU1vdXNlKGUsIHRoaXMub2Zmc2V0KTtcbiAgICAgICAgICB0aGlzLmJlbmQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5tYXRyaXguaW50ZXJhY3RpbmcgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgICB0aGlzLnBhZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tYXRyaXguaW50ZXJhY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnVwKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5wYWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm1hdHJpeC5pbnRlcmFjdGluZykge1xuICAgICAgICAgIHRoaXMudXAoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcbiAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3gnLCB0aGlzLnBhZGRpbmdDb2x1bW4gLyAyKTtcbiAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3knLCB0aGlzLnBhZGRpbmdSb3cgLyAyKTtcbiAgICBpZiAodGhpcy53aWR0aCA+IDIpIHtcbiAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLndpZHRoIC0gdGhpcy5wYWRkaW5nQ29sdW1uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMud2lkdGgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oZWlnaHQgPiAyKSB7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0IC0gdGhpcy5wYWRkaW5nUm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMubWF0cml4LmNvbG9ycy5maWxsKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMubWF0cml4LmNvbG9ycy5maWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5tYXRyaXguY29sb3JzLmFjY2VudCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogU2VxdWVuY2VyXG4gKlxuICogQGRlc2NyaXB0aW9uIEdyaWQgb2YgYnV0dG9ucyB3aXRoIGJ1aWx0LWluIHN0ZXAgc2VxdWVuY2VyLlxuICpcbiAqIEBkZW1vIDxkaXYgbmV4dXMtdWk9XCJzZXF1ZW5jZXJcIiBzdHlsZT1cIndpZHRoOjQwMHB4O2hlaWdodDoyMDBweDtcIj48L2Rpdj5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHNlcXVlbmNlciA9IG5ldyBOZXh1cy5TZXF1ZW5jZXIoJyN0YXJnZXQnKVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgc2VxdWVuY2VyID0gbmV3IE5leHVzLlNlcXVlbmNlcignI3RhcmdldCcse1xuICogICdzaXplJzogWzQwMCwyMDBdLFxuICogICdtb2RlJzogJ3RvZ2dsZScsXG4gKiAgJ3Jvd3MnOiA1LFxuICogICdjb2x1bW5zJzogMTAsXG4gKiAgJ3BhZGRpbmdSb3cnOiAxMCxcbiAqICAncGFkZGluZ0NvbHVtbic6IDIwXG4gKn0pXG4gKlxuICogQG91dHB1dFxuICogY2hhbmdlXG4gKiBGaXJlcyB3aGVuZXZlciBhIHZhbHVlIGlzIHJlY2VpdmVkLiBGb3IgZXhhbXBsZSwgd2hlbiBjbGlja2luZyBhIGNlbGwgZnJvbSBvZmYgdG8gb24uIDxicj5cbiAqIFRoZSBldmVudCBkYXRhIGlzIGFuIG9iamVjdCBjb250YWluaW5nIDxpPnJvdzwvaT4gKG51bWJlciksIDxpPmNvbHVtbjwvaT4gKG51bWJlciksIGFuZCA8aT5zdGF0ZTwvaT4gKGJvb2xlYW4pIHByb3BlcnRpZXMuXG4gKlxuICogQG91dHB1dGV4YW1wbGVcbiAqIHNlcXVlbmNlci5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4gKiAgIGNvbnNvbGUubG9nKHYpO1xuICogfSlcbiAqXG4gKiBAb3V0cHV0XG4gKiBzdGVwXG4gKiBGaXJlcyBhbnkgdGltZSB0aGUgc2VxdWVuY2VyIHN0ZXBzIHRvIHRoZSBuZXh0IGNvbHVtbiwgaW4gc2VxdWVjZSBtb2RlLiA8YnI+XG4gKiBUaGUgZXZlbnQgZGF0YSBpcyBhbiA8aT5hcnJheTwvaT4gY29udGFpbmluZyBhbGwgdmFsdWVzIGluIHRoZSBjb2x1bW4sIDxpPmJvdHRvbSByb3cgZmlyc3Q8L2k+LlxuICpcbiAqIEBvdXRwdXRleGFtcGxlXG4gKiBzZXF1ZW5jZXIub24oJ3N0ZXAnLGZ1bmN0aW9uKHYpIHtcbiAqICAgY29uc29sZS5sb2codik7XG4gKiB9KVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlciBleHRlbmRzIEludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgc2l6ZTogWzQwMCwgMjAwXSxcbiAgICAgIG1vZGU6ICd0b2dnbGUnLFxuICAgICAgcm93czogNSxcbiAgICAgIGNvbHVtbnM6IDEwXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cywgb3B0aW9ucywgZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEJ1dHRvbiBpbnRlcmFjdGlvbiBtb2RlOiBzZWUgQnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAZXhhbXBsZSBidXR0b24ubW9kZSA9ICd0b2dnbGUnO1xuICAgICAqL1xuICAgIHRoaXMubW9kZSA9IHRoaXMuc2V0dGluZ3MubW9kZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlcnZhbCBvYmplY3Qgd2hpY2ggY29udHJvbHMgdGltaW5nIGFuZCBzZXF1ZW5jZSBzY2hlZHVsaW5nLlxuICAgICAqIEB0eXBlIHtpbnRlcnZhbH1cbiAgICAgKi9cbiAgICB0aGlzLmludGVydmFsID0gbmV3IEludGVydmFsKDIwMCwgZnVuY3Rpb24oKSB7fSwgZmFsc2UpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuICAgIC8qKlxuICAgICAqIEEgTWF0cml4IG1vZGVsIGNvbnRhaW5pbmcgbWV0aG9kcyBmb3IgbWFuaXB1bGF0aW5nIHRoZSBzZXF1ZW5jZXIncyBhcnJheSBvZiB2YWx1ZXMuIFRvIGxlYXJuIGhvdyB0byBtYW5pcHVsYXRlIHRoZSBtYXRyaXgsIHJlYWQgYWJvdXQgdGhlIG1hdHJpeCBtb2RlbC5cbiAgICAgKiBAdHlwZSB7bWF0cml4fVxuICAgICAqL1xuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeE1vZGVsKHRoaXMuc2V0dGluZ3Mucm93cywgdGhpcy5zZXR0aW5ncy5jb2x1bW5zKTtcbiAgICB0aGlzLm1hdHJpeC51aSA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBBIENvdW50ZXIgbW9kZWwgd2hpY2ggdGhlIHNlcXVlbmNlciBzdGVwcyB0aHJvdWdoLiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIHVzZSB0aGlzIG1vZGVsIHRvIHN0ZXAgdGhyb3VnaCB0aGUgc2VxdWVuY2VyIGluIHJldmVyc2UsIHJhbmRvbWx5LCBvciBpbiBhIGRydW5rIHdhbGsuXG4gICAgICogQHR5cGUge2NvdW50ZXJ9XG4gICAgICovXG4gICAgdGhpcy5zdGVwcGVyID0gbmV3IENvdW50ZXJNb2RlbCgwLCB0aGlzLmNvbHVtbnMpO1xuXG4gICAgdGhpcy5wYWRkaW5nUm93ID0gdGhpcy5zZXR0aW5ncy5wYWRkaW5nUm93O1xuICAgIHRoaXMucGFkZGluZ0NvbHVtbiA9IHRoaXMuc2V0dGluZ3MucGFkZGluZ0NvbHVtbjtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgYnVpbGRGcmFtZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIGlmICh0b3VjaC5leGlzdHMpIHtcbiAgICAgIHRoaXMuYWRkVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcbiAgICB0aGlzLmNlbGxzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hdHJpeC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy5tYXRyaXgubG9jYXRlKGkpO1xuICAgICAgLy8gcmV0dXJucyB7cm93LGNvbH1cblxuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiAgICAgIGxldCBjZWxsID0gbmV3IE1hdHJpeENlbGwoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAge1xuICAgICAgICAgIGNvbXBvbmVudDogdHJ1ZSxcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICByb3c6IGxvY2F0aW9uLnJvdyxcbiAgICAgICAgICBjb2x1bW46IGxvY2F0aW9uLmNvbHVtbixcbiAgICAgICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICAgICAgbWF0cml4OiB0aGlzLFxuICAgICAgICAgIHBhZGRpbmdSb3c6IHRoaXMucGFkZGluZ1JvdyxcbiAgICAgICAgICBwYWRkaW5nQ29sdW1uOiB0aGlzLnBhZGRpbmdDb2x1bW5cbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5rZXlDaGFuZ2UuYmluZCh0aGlzLCBpKVxuICAgICAgKTtcblxuICAgICAgLy8gIGNlbGwubWF0cml4ID0gdGhpcztcbiAgICAgIGlmICh0b3VjaC5leGlzdHMpIHtcbiAgICAgICAgY2VsbC5wYWQuaW5kZXggPSBpO1xuICAgICAgICBjZWxsLnByZUNsaWNrID0gY2VsbC5wcmVNb3ZlID0gY2VsbC5wcmVSZWxlYXNlID0gKCkgPT4ge307XG4gICAgICAgIGNlbGwuY2xpY2sgPSBjZWxsLm1vdmUgPSBjZWxsLnJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgICAgY2VsbC5wcmVUb3VjaCA9IGNlbGwucHJlVG91Y2hNb3ZlID0gY2VsbC5wcmVUb3VjaFJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgICAgY2VsbC50b3VjaCA9IGNlbGwudG91Y2hNb3ZlID0gY2VsbC50b3VjaFJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jZWxscy5wdXNoKGNlbGwpO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIHRoaXMuc2l6ZUludGVyZmFjZSgpO1xuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcbiAgICBsZXQgY2VsbFdpZHRoID0gdGhpcy53aWR0aCAvIHRoaXMuY29sdW1ucztcbiAgICBsZXQgY2VsbEhlaWdodCA9IHRoaXMuaGVpZ2h0IC8gdGhpcy5yb3dzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5jZWxsc1tpXS5wYXJlbnQ7XG4gICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9IHRoaXMuY2VsbHNbaV0uY29sdW1uICogY2VsbFdpZHRoICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSB0aGlzLmNlbGxzW2ldLnJvdyAqIGNlbGxIZWlnaHQgKyAncHgnO1xuICAgICAgdGhpcy5jZWxsc1tpXS5yZXNpemUoY2VsbFdpZHRoLCBjZWxsSGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY2VsbHNbaV0ucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vICBjb25zb2xlLmxvZyhcInVwZGF0aW5nLi4uXCIpXG4gICAgLy9vbiA9IG9uIHx8IGZhbHNlO1xuICAgIHRoaXMubWF0cml4Lml0ZXJhdGUoKHIsIGMsIGkpID0+IHtcbiAgICAgIC8vICBjb25zb2xlLmxvZyh0aGlzLm1hdHJpeC5wYXR0ZXJuW3JdW2NdLCB0aGlzLmNlbGxzW2ldLnN0YXRlKTtcbiAgICAgIGlmICh0aGlzLm1hdHJpeC5wYXR0ZXJuW3JdW2NdICE9PSB0aGlzLmNlbGxzW2ldLnN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLm1hdHJpeC5wYXR0ZXJuW3JdW2NdID4gMCkge1xuICAgICAgICAgIHRoaXMuY2VsbHNbaV0udHVybk9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jZWxsc1tpXS50dXJuT2ZmKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSA9PiBjZWxsLnR1cm5PbiA9PiBjZWxsLmVtaXQgPT4ga2V5Q2hhbmdlIChzZXEuZW1pdCkgPT4gbWF0cml4LnNldC5jZWxsID0+IHVwZGF0ZVxuICAvL1xuICAvLyBpbnRlcmFjdGlvbiA9PiBrZXlDaGFuZ2UgPT4gbWF0cml4LnNldC5jZWxsID0+IHVwZGF0ZSA9PiBjZWxsLnR1cm5PblxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0+IGVtaXRcbiAgLy9cbiAgLy8gc2V0LmNlbGwgPT4gdXBkYXRlID0+IG5lZWRzIHRvIGVtaXQuXG5cbiAga2V5Q2hhbmdlKG5vdGUsIG9uKSB7XG4gICAgLy8gZW1pdCBkYXRhIGZvciBhbnkga2V5IHR1cm5pbmcgb24vb2ZmXG4gICAgLy8gaSBpcyB0aGUgbm90ZSBpbmRleFxuICAgIC8vIHYgaXMgd2hldGhlciBpdCBpcyBvbiBvciBvZmZcbiAgICBsZXQgY2VsbCA9IHRoaXMubWF0cml4LmxvY2F0ZShub3RlKTtcbiAgICAvLyAgdGhpcy5tYXRyaXguc2V0LmNlbGwoY2VsbC5jb2x1bW4sY2VsbC5yb3csb24pO1xuICAgIHRoaXMubWF0cml4LnBhdHRlcm5bY2VsbC5yb3ddW2NlbGwuY29sdW1uXSA9IG9uO1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgcm93OiBjZWxsLnJvdyxcbiAgICAgIGNvbHVtbjogY2VsbC5jb2x1bW4sXG4gICAgICBzdGF0ZTogb25cbiAgICB9O1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgZGF0YSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RlcHBlci52YWx1ZSA+PSAwKSB7XG4gICAgICB0aGlzLm1hdHJpeC5pdGVyYXRlKChyLCBjLCBpKSA9PiB7XG4gICAgICAgIGlmIChjID09PSB0aGlzLnN0ZXBwZXIudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmNlbGxzW2ldLnBhZC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgICAgICB0aGlzLmNlbGxzW2ldLnBhZC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG4gICAgICAgICAgdGhpcy5jZWxsc1tpXS5wYWQuc2V0QXR0cmlidXRlKCdzdHJva2Utb3BhY2l0eScsICcxJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jZWxsc1tpXS5wYWQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnbm9uZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgc2VxdWVuY2luZ1xuICAgKiBAcGFyYW0gIHtudW1iZXJ9IG1zIEJlYXQgdGVtcG8gaW4gbWlsbGlzZWNvbmRzXG4gICAqL1xuICBzdGFydChtcykge1xuICAgIHRoaXMuaW50ZXJ2YWwuZXZlbnQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcbiAgICBpZiAobXMpIHtcbiAgICAgIHRoaXMuaW50ZXJ2YWwubXMobXMpO1xuICAgIH1cbiAgICB0aGlzLmludGVydmFsLnN0YXJ0KCk7XG4gIH1cblxuICAvKipcbiAgU3RvcCBzZXF1ZW5jaW5nXG4gICovXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5pbnRlcnZhbC5zdG9wKCk7XG4gIH1cblxuICAvKipcbiAgTWFudWFsbHkganVtcCB0byB0aGUgbmV4dCBjb2x1bW4gYW5kIHRyaWdnZXIgdGhlICdjaGFuZ2UnIGV2ZW50LiBUaGUgXCJuZXh0XCIgY29sdW1uIGlzIGRldGVybWluZWQgYnkgeW91ciBtb2RlIG9mIHNlcXVlbmNpbmcuXG4gICovXG4gIG5leHQoKSB7XG4gICAgdGhpcy5zdGVwcGVyLm5leHQoKTtcbiAgICB0aGlzLmVtaXQoJ3N0ZXAnLCB0aGlzLm1hdHJpeC5jb2x1bW4odGhpcy5zdGVwcGVyLnZhbHVlKS5yZXZlcnNlKCkpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBhZGRUb3VjaExpc3RlbmVycygpIHtcbiAgICB0aGlzLnByZUNsaWNrID0gdGhpcy5wcmVNb3ZlID0gdGhpcy5wcmVSZWxlYXNlID0gKCkgPT4ge307XG4gICAgdGhpcy5jbGljayA9IHRoaXMubW92ZSA9IHRoaXMucmVsZWFzZSA9ICgpID0+IHt9O1xuICAgIHRoaXMucHJlVG91Y2ggPSB0aGlzLnByZVRvdWNoTW92ZSA9IHRoaXMucHJlVG91Y2hSZWxlYXNlID0gKCkgPT4ge307XG4gICAgdGhpcy50b3VjaCA9IHRoaXMudG91Y2hNb3ZlID0gdGhpcy50b3VjaFJlbGVhc2UgPSAoKSA9PiB7fTtcblxuICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBmYWxzZTtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoXG4gICAgICAgIGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgKTtcbiAgICAgIGxldCBjZWxsID0gdGhpcy5jZWxsc1tlbGVtZW50LmluZGV4XTtcbiAgICAgIHRoaXMucGFpbnRicnVzaCA9ICFjZWxsLnN0YXRlO1xuICAgICAgY2VsbC5kb3duKHRoaXMucGFpbnRicnVzaCk7XG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWxlbWVudC5pbmRleDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoXG4gICAgICAgIGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgKTtcbiAgICAgIGxldCBjZWxsID0gdGhpcy5jZWxsc1tlbGVtZW50LmluZGV4XTtcbiAgICAgIGlmIChlbGVtZW50LmluZGV4ICE9PSB0aGlzLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbGVtZW50ID49IDApIHtcbiAgICAgICAgICBsZXQgcGFzdENlbGwgPSB0aGlzLmNlbGxzW3RoaXMuY3VycmVudEVsZW1lbnRdO1xuICAgICAgICAgIHBhc3RDZWxsLnVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2VsbC5kb3duKHRoaXMucGFpbnRicnVzaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsLmJlbmQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBlbGVtZW50LmluZGV4O1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGUgPT4ge1xuICAgICAgLy8gbm8gdG91Y2hlcyB0byBjYWxjdWxhdGUgYmVjYXVzZSBub25lIHJlbWFpbmluZ1xuICAgICAgbGV0IGNlbGwgPSB0aGlzLmNlbGxzW3RoaXMuY3VycmVudEVsZW1lbnRdO1xuICAgICAgY2VsbC51cCgpO1xuICAgICAgdGhpcy5pbnRlcmFjdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGZhbHNlO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICBOdW1iZXIgb2Ygcm93cyBpbiB0aGUgc2VxdWVuY2VyXG4gIEB0eXBlIHtudW1iZXJ9XG4gICovXG4gIGdldCByb3dzKCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeC5yb3dzO1xuICB9XG5cbiAgc2V0IHJvd3Modikge1xuICAgIHRoaXMubWF0cml4LnJvd3MgPSB2O1xuICAgIHRoaXMuZW1wdHkoKTtcbiAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICBOdW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgc2VxdWVuY2VyXG4gIEB0eXBlIHtudW1iZXJ9XG4gICovXG4gIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeC5jb2x1bW5zO1xuICB9XG5cbiAgc2V0IGNvbHVtbnModikge1xuICAgIHRoaXMubWF0cml4LmNvbHVtbnMgPSB2O1xuICAgIHRoaXMuc3RlcHBlci5tYXggPSB2O1xuICAgIHRoaXMuZW1wdHkoKTtcbiAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2ludGVyZmFjZXMvc2VxdWVuY2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWF0aCBmcm9tICcuLi91dGlsL21hdGgnO1xuaW1wb3J0IFNlcXVlbmNlIGZyb20gJy4uL21vZGVscy9zZXF1ZW5jZSc7XG5cbi8vIEZvciB0aGUgdHV0b3JpYWwsIGxvb2tpbmcgYXRcblxuLy9QYXR0ZXJuIHNlY3Rpb246XG4vLyAuY3JlYXRlKCksIC5yb3dzLCAuY29sdW1ucyxcbi8vIC5wYXR0ZXJuLCAubGVuZ3RoLCAuZm9ybWF0QXNUZXh0KCksIC5sb2coKSxcbi8vIC5sb2NhdGUoaSksIC5pbmRleE9mKGMscilcbi8vIHJvdygpLCBjb2x1bW4oKSAocmV0dXJucyBjb250ZW50cyBvZiByb3cgb3IgY29sdW0pXG5cbi8vQ29udHJvbCBzZWN0aW9uOlxuLy8gdG9nZ2xlIHgzXG4vLyBzZXQgeDRcbi8vIHJvdGF0ZSB4M1xuLy8gcG9wdWxhdGUgeDNcbi8vIGVyYXNlIHgzXG5cblxuLy8gc2hvdWxkIHNvbWUgdmVyc2lvbiBvZiB0aGlzIGhhdmUgYSBmbG9hdCB2YWx1ZSBmb3IgZWFjaCBjZWxsP1xuLy8gY291bGQgYmUgbGlrZSBhIG1pcnJvciAucGF0dGVybiB0aGF0IGhhcyB2YWx1ZXMuIGJ5IGRlZmF1bHQsIGV2ZXJ5dGhpbmcgaXMgMSwgYnV0IGNvdWxkIGJlIHNldC4uLlxuLy8gbm90IGEgZ29vZCB3YXkgdG8gZG8gdGhhdCBvbiBpbnRlcmZhY2UsIGJ1dCBhcyBhIG1vZGVsIGl0IHdvdWxkIGJlIG5pY2UuLi5cbi8vIGZvciAuZm9ybWF0QXNUZXh0KCksIGNvdWxkIG11bHRpcGx5IGJ5IDEwMCBhbmQgZmxvb3IsIHNvIGVhY2ggY2VsbCBpcyBhbiBpbnQgZnJvbSAwIHRvIDlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4IHtcblxuICBjb25zdHJ1Y3Rvcihyb3dzLGNvbHVtbnMpIHtcbiAgICAvLyBzaG91bGQgYWxzbyBoYXZlIGFiaWxpdHkgdG8gY3JlYXRlIHVzaW5nIGFuIGV4aXN0aW5nIG1hdHJpeCAoMmQgYXJyYXkpXG4gICAgdGhpcy5wYXR0ZXJuID0gW107XG4gICAgdGhpcy5jcmVhdGUocm93cyxjb2x1bW5zKTtcblxuICAgIHRoaXMudG9nZ2xlID0ge1xuICAgICAgY2VsbDogKGNvbHVtbiwgcm93KSA9PiB7XG4gICAgICAgIHRoaXMucGF0dGVybltyb3ddW2NvbHVtbl0gPSAhdGhpcy5wYXR0ZXJuW3Jvd11bY29sdW1uXTsgLy8gbWF0aC5pbnZlcnQodGhpcy5wYXR0ZXJuW3Jvd11bY29sdW1uXSk7XG4gICAgICAgIGlmICh0aGlzLnVpKSB7IHRoaXMudWkudXBkYXRlKCk7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGF0dGVybltyb3ddW2NvbHVtbl07XG4gICAgICB9LFxuICAgICAgYWxsOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuaXRlcmF0ZSgocixjKSA9PiB7IHRoaXMudG9nZ2xlLmNlbGwoYyxyKTsgfSk7XG4gICAgICAgIGlmICh0aGlzLnVpKSB7IHRoaXMudWkudXBkYXRlKCk7IH1cbiAgICAgIH0sXG4gICAgICByb3c6IChyb3cpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGUuY2VsbChpLHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudWkpIHsgdGhpcy51aS51cGRhdGUoKTsgfVxuICAgICAgfSxcbiAgICAgIGNvbHVtbjogKGNvbHVtbikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZS5jZWxsKGNvbHVtbixpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51aSkgeyB0aGlzLnVpLnVwZGF0ZSgpOyB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc2V0ID0ge1xuICAgICAgY2VsbDogKGNvbHVtbiwgcm93LCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLnBhdHRlcm5bcm93XVtjb2x1bW5dID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnVpKSB7IHRoaXMudWkudXBkYXRlKCk7IH1cbiAgICAgIH0sXG4gICAgICBhbGw6ICh2YWx1ZXMpID0+IHtcbiAgICAgICAgLy8gc2V0IHRoZSB3aG9sZSBtYXRyaXggdXNpbmcgYSAyZCBhcnJheSBhcyBpbnB1dFxuICAgICAgICAvLyB0aGlzIHNob3VsZCBhbHNvIHJlc2l6ZSB0aGUgYXJyYXk/XG4gICAgICAgIHRoaXMucGF0dGVybiA9IHZhbHVlcztcbiAgICAgICAgaWYgKHRoaXMudWkpIHsgdGhpcy51aS51cGRhdGUoKTsgfVxuICAgICAgfSxcbiAgICAgIHJvdzogKHJvdyx2YWx1ZXMpID0+IHtcbiAgICAgICAgLy8gc2V0IGEgcm93IHVzaW5nIGFuIGFycmF5IGFzIGlucHV0XG4gICAgICAgIHRoaXMucGF0dGVybltyb3ddID0gdmFsdWVzO1xuICAgICAgICBpZiAodGhpcy51aSkgeyB0aGlzLnVpLnVwZGF0ZSgpOyB9XG4gICAgICB9LFxuICAgICAgY29sdW1uOiAoY29sdW1uLHZhbHVlcykgPT4ge1xuICAgICAgICAvLyBzZXQgYSBjb2x1bW4gdXNpbmcgYW4gYXJyYXkgYXMgaW5wdXRcbiAgICAgICAgdGhpcy5wYXR0ZXJuLmZvckVhY2goKHJvdyxpKSA9PiB7XG4gICAgICAgICAgdGhpcy5wYXR0ZXJuW2ldW2NvbHVtbl0gPSB2YWx1ZXNbaV07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy51aSkgeyB0aGlzLnVpLnVwZGF0ZSgpOyB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMucm90YXRlID0ge1xuICAgICAgLy9zaG91bGQgZXZlbnR1YWxseSBkbyAoYW1vdW50WCwgYW1vdW50WSkgaGVyZVxuICAgICAgLy8gY291bGQganVzdCB1c2UgYSBsb29wIGFuZCB0aGlzLnJvdGF0ZS5yb3coaSxhbW91bnRYKTtcbiAgICAgIGFsbDogKGFtb3VudCkgPT4ge1xuICAgICAgICBpZiAoIWFtb3VudCAmJiBhbW91bnQhPT0wKSB7XG4gICAgICAgICAgYW1vdW50ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBhbW91bnQgJT0gdGhpcy5wYXR0ZXJuWzBdLmxlbmd0aDtcbiAgICAgICAgaWYgKGFtb3VudCA8IDApIHtcbiAgICAgICAgICBhbW91bnQgPSB0aGlzLnBhdHRlcm5bMF0ubGVuZ3RoICsgYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgIGxldCBjdXQgPSB0aGlzLnBhdHRlcm5baV0uc3BsaWNlKCB0aGlzLnBhdHRlcm5baV0ubGVuZ3RoIC0gYW1vdW50LCBhbW91bnQgKTtcbiAgICAgICAgICB0aGlzLnBhdHRlcm5baV0gPSBjdXQuY29uY2F0KCB0aGlzLnBhdHRlcm5baV0gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51aSkgeyB0aGlzLnVpLnVwZGF0ZSgpOyB9XG4gICAgICB9LFxuICAgICAgcm93OiAocm93LGFtb3VudCkgPT4ge1xuICAgICAgICBpZiAoIWFtb3VudCAmJiBhbW91bnQhPT0wKSB7XG4gICAgICAgICAgYW1vdW50ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBhbW91bnQgJT0gdGhpcy5wYXR0ZXJuWzBdLmxlbmd0aDtcbiAgICAgICAgaWYgKGFtb3VudCA8IDApIHtcbiAgICAgICAgICBhbW91bnQgPSB0aGlzLnBhdHRlcm5bMF0ubGVuZ3RoICsgYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXQgPSB0aGlzLnBhdHRlcm5bcm93XS5zcGxpY2UoIHRoaXMucGF0dGVybltyb3ddLmxlbmd0aCAtIGFtb3VudCwgYW1vdW50ICk7XG4gICAgICAgIHRoaXMucGF0dGVybltyb3ddID0gY3V0LmNvbmNhdCggdGhpcy5wYXR0ZXJuW3Jvd10gKTtcbiAgICAgICAgaWYgKHRoaXMudWkpIHsgdGhpcy51aS51cGRhdGUoKTsgfVxuICAgICAgfSxcbiAgICAgIGNvbHVtbjogKGNvbHVtbiwgYW1vdW50KSA9PiB7XG4gICAgICAgIGlmICghYW1vdW50ICYmIGFtb3VudCE9PTApIHtcbiAgICAgICAgICBhbW91bnQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGFtb3VudCAlPSB0aGlzLnBhdHRlcm4ubGVuZ3RoO1xuICAgICAgICBpZiAoYW1vdW50IDwgMCkge1xuICAgICAgICAgIGFtb3VudCA9IHRoaXMucGF0dGVybi5sZW5ndGggKyBhbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb3h5ID0gW107XG4gICAgICAgIHRoaXMucGF0dGVybi5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBwcm94eS5wdXNoKCByb3dbY29sdW1uXSApO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGN1dCA9IHByb3h5LnNwbGljZSggcHJveHkubGVuZ3RoIC0gYW1vdW50LCBhbW91bnQgKTtcbiAgICAgICAgcHJveHkgPSBjdXQuY29uY2F0KCBwcm94eSApO1xuICAgICAgICB0aGlzLnBhdHRlcm4uZm9yRWFjaCgocm93LGkpID0+IHtcbiAgICAgICAgICByb3dbY29sdW1uXSA9IHByb3h5W2ldO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMudWkpIHsgdGhpcy51aS51cGRhdGUoKTsgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB0aGUgaWRlYSBiZWhpbmQgcG9wdWxhdGUgaXMgdG8gYmUgYWJsZSB0byBzZXQgYSB3aG9sZSByb3cgb3IgY29sdW1uIHRvIDAgb3IgMVxuICAgIC8vIElGIHRoZSB2YWx1ZSBpcyBhIGZsb2F0LCBzdWNoIGFzIDAuNywgdGhlbiBpdCB3b3VsZCBiZWNvbWUgYSBwcm9iYWJpbGl0eVxuICAgIC8vIHNvIHBvcHVsYXRlKDAuNykgd291bGQgZ2l2ZSBlYWNoIGNlbGwgYSA3MCUgY2hhbmNlIG9mIGJlaW5nIDFcbiAgICB0aGlzLnBvcHVsYXRlID0ge1xuICAgICAgYWxsOiAob2RkcykgPT4ge1xuICAgICAgICBsZXQgb2Rkc1NlcXVlbmNlID0gbmV3IFNlcXVlbmNlKG9kZHMpO1xuICAgICAgICB0aGlzLml0ZXJhdGUoKHIsYykgPT4ge1xuICAgICAgICAgIHRoaXMucGF0dGVybltyXVtjXSA9IG1hdGguY29pbihvZGRzU2VxdWVuY2UubmV4dCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgY291bGQgYmUgdXNlZCBzbyB0aGF0IGVhY2ggcm93IGhhcyBzYW1lIG9kZHMgcGF0dGVybiwgZXZlbiBpZiByb3cgbGVuZ3RoIGlzIG5vdCBkaXZpc2libHkgYnkgc2VxdWVuY2UgbGVuZ3RoLlxuICAgICAgICAvLywoKSA9PiB7XG4gICAgICAgIC8vICBvZGRzLnBvcyA9IC0xO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLnVpKSB7IHRoaXMudWkudXBkYXRlKCk7IH1cbiAgICAgIH0sXG4gICAgICByb3c6IChyb3c9MCxvZGRzPTEpID0+IHtcbiAgICAgICAgbGV0IG9kZHNTZXF1ZW5jZSA9IG5ldyBTZXF1ZW5jZShvZGRzKTtcbiAgICAgICAgdGhpcy5wYXR0ZXJuW3Jvd10uZm9yRWFjaCgoY2VsbCxpKSA9PiB7XG4gICAgICAgICAgdGhpcy5wYXR0ZXJuW3Jvd11baV0gPSBtYXRoLmNvaW4ob2Rkc1NlcXVlbmNlLm5leHQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy51aSkgeyB0aGlzLnVpLnVwZGF0ZSgpOyB9XG4gICAgICB9LFxuICAgICAgY29sdW1uOiAoY29sdW1uPTAsb2Rkcz0xKSA9PiB7XG4gICAgICAgIGxldCBvZGRzU2VxdWVuY2UgPSBuZXcgU2VxdWVuY2Uob2Rkcyk7XG4gICAgICAgIHRoaXMucGF0dGVybi5mb3JFYWNoKChyb3csaSkgPT4ge1xuICAgICAgICAgIHRoaXMucGF0dGVybltpXVtjb2x1bW5dID0gbWF0aC5jb2luKG9kZHNTZXF1ZW5jZS5uZXh0KCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMudWkpIHsgdGhpcy51aS51cGRhdGUoKTsgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBlc3NlbnRpYWxsIHBvcHVsYXRlKDApIHNvIGknbSBub3Qgc3VyZSBpZiB0aGlzIGlzIG5lY2Vzc2FyeSBidXQgaXMgbmljZVxuICAgIHRoaXMuZXJhc2UgPSB7XG4gICAgICBhbGw6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXQuYWxsKDApO1xuICAgICAgfSxcbiAgICAgIHJvdzogKHJvdykgPT4ge1xuICAgICAgICB0aGlzLnNldC5yb3cocm93LDApO1xuICAgICAgfSxcbiAgICAgIGNvbHVtbjogKGNvbHVtbikgPT4ge1xuICAgICAgICB0aGlzLnNldC5jb2x1bW4oY29sdW1uLDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgLy8gZW5kIGNvbnN0cnVjdG9yXG4gIH1cblxuXG4gIGNyZWF0ZShyb3dzLGNvbHVtbnMpIHtcbiAgICB0aGlzLnBhdHRlcm4gPSBbXTtcbiAgICBmb3IgKCBsZXQgcm93PTA7IHJvdyA8IHJvd3M7IHJvdysrICkge1xuICAgICAgbGV0IGFyciA9IG5ldyBBcnJheShjb2x1bW5zKTtcbiAgICAgIHRoaXMucGF0dGVybi5wdXNoKGFycik7XG4gICAgfVxuICAgIHRoaXMuaXRlcmF0ZSgocixjKSA9PiB7IHRoaXMucGF0dGVybltyXVtjXSA9IGZhbHNlOyB9KTtcbiAgfVxuXG4gIGl0ZXJhdGUoZiwgZjIpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yICggbGV0IHJvdz0wOyByb3cgPCB0aGlzLnJvd3M7IHJvdysrICkge1xuICAgICAgaWYgKGYyKSB7IGYyKHJvdyk7IH1cbiAgICAgIGZvciAoIGxldCBjb2x1bW49MDsgY29sdW1uIDwgdGhpcy5jb2x1bW5zOyBjb2x1bW4rKyApIHtcbiAgICAgICAgZihyb3csY29sdW1uLGkpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0QXNUZXh0KCkge1xuICAgIGxldCBwYXR0ZXJuU3RyaW5nID0gJyc7XG4gICAgdGhpcy5pdGVyYXRlKFxuICAgICAgKHIsYykgPT4geyBwYXR0ZXJuU3RyaW5nICs9ICh0aGlzLnBhdHRlcm5bcl1bY10gPyAxIDogMCkgKyAnICc7IH0sXG4gICAgICAoKSA9PiB7IHBhdHRlcm5TdHJpbmcgKz0gJ1xcbic7IH1cbiAgICApO1xuICAgIHJldHVybiBwYXR0ZXJuU3RyaW5nO1xuICB9XG5cbiAgbG9nKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWF0QXNUZXh0KCkpO1xuICB9XG5cbiAgdXBkYXRlKHBhdHRlcm4pIHtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuIHx8IHRoaXMucGF0dGVybjtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93cyp0aGlzLmNvbHVtbnM7XG4gIH1cblxuICBsb2NhdGUoaW5kZXgpIHtcbiAgICAvLyByZXR1cm5zIHJvdyBhbmQgY29sdW1uIG9mIGNlbGwgYnkgaW5kZXhcbiAgICByZXR1cm4ge1xuICAgICAgcm93OiB+figgaW5kZXggLyB0aGlzLmNvbHVtbnMgKSxcbiAgICAgIGNvbHVtbjogaW5kZXggJSB0aGlzLmNvbHVtbnNcbiAgICB9O1xuICB9XG5cbiAgaW5kZXhPZihyb3csY29sdW1uKSB7XG4gICAgcmV0dXJuIGNvbHVtbiArIHJvdyAqIHRoaXMuY29sdW1ucztcbiAgICAvLyByZXR1cm5zIGluZGV4IG9mIGNlbGwgYnkgcm93IGFuZCBjb2x1bW5cbiAgfVxuXG4gIHJvdyhyb3cpIHtcbiAgICBsZXQgZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgZGF0YS5wdXNoKHRoaXMucGF0dGVybltyb3ddID8gMSA6IDApO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbHVtbihjb2x1bW4pIHtcbiAgICBsZXQgZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZGF0YS5wdXNoKHRoaXMucGF0dGVybltpXVtjb2x1bW5dID8gMSA6IDApO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGdldCByb3dzKCkge1xuICAgIHJldHVybiB0aGlzLnBhdHRlcm4ubGVuZ3RoO1xuICB9XG4gIHNldCByb3dzKHYpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB0aGlzLnBhdHRlcm4uc2xpY2UoMCk7XG4gICAgdGhpcy5jcmVhdGUodix0aGlzLmNvbHVtbnMpO1xuICAgIHRoaXMuaXRlcmF0ZSgocixjKSA9PiB7XG4gICAgICBpZiAocHJldmlvdXNbcl0gJiYgcHJldmlvdXNbcl1bY10pIHtcbiAgICAgICAgdGhpcy5wYXR0ZXJuW3JdW2NdID0gcHJldmlvdXNbcl1bY107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgY29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXR0ZXJuWzBdLmxlbmd0aDtcbiAgfVxuICBzZXQgY29sdW1ucyh2KSB7XG4gICAgbGV0IHByZXZpb3VzID0gdGhpcy5wYXR0ZXJuLnNsaWNlKDApO1xuICAgIHRoaXMuY3JlYXRlKHRoaXMucm93cyx2KTtcbiAgICB0aGlzLml0ZXJhdGUoKHIsYykgPT4ge1xuICAgICAgaWYgKHByZXZpb3VzW3JdICYmIHByZXZpb3VzW3JdW2NdKSB7XG4gICAgICAgIHRoaXMucGF0dGVybltyXVtjXSA9IHByZXZpb3VzW3JdW2NdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9tb2RlbHMvbWF0cml4LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IG1hdGggZnJvbSAnLi4vdXRpbC9tYXRoJztcclxuaW1wb3J0IERydW5rIGZyb20gJy4vZHJ1bmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlcXVlbmNlID0gWzAsMTAsMjAsMzBdLCBtb2RlPSd1cCcsIHBvc2l0aW9uPWZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBzZXF1ZW5jZTtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZXMpKSB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlcyA9IFt0aGlzLnZhbHVlc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX21vZGUgPSBtb2RlO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5kcnVua1dhbGsgPSBuZXcgRHJ1bmsoMCwgdGhpcy52YWx1ZXMubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRWYWx1ZXMgPSB7XHJcbiAgICAgICAgICAndXAnOiAwLFxyXG4gICAgICAgICAgJ2Rvd24nOiB0aGlzLnZhbHVlcy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgJ2RydW5rJzogfn4odGhpcy52YWx1ZXMubGVuZ3RoLzIpLFxyXG4gICAgICAgICAgJ3JhbmRvbSc6IG1hdGgucmkodGhpcy52YWx1ZXMubGVuZ3RoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uIT09ZmFsc2UpIHtcclxuICAgICAgICAgIHRoaXMubmV4dCA9IHRoaXNbdGhpcy5fbW9kZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubmV4dCA9IHRoaXMuZmlyc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtb2RlKG1vZGUpIHtcclxuICAgICAgICBpZiAoIShtb2RlID09PSAndXAnIHx8IG1vZGUgPT09ICdkb3duJyB8fCBtb2RlID09PSAncmFuZG9tJyB8fCBtb2RlID09PSAnZHJ1bmsnKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgb25seSBtb2RlcyBjdXJyZW50bHkgYWxsb3dlZCBhcmU6IHVwLCBkb3duLCByYW5kb20sIGRydW5rJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24pIHtcclxuICAgICAgICAgIHRoaXMubmV4dCA9IHRoaXNbdGhpcy5fbW9kZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzW3RoaXMucG9zaXRpb25dO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB2YWx1ZSh2KSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnZhbHVlcy5pbmRleE9mKHYpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0KCkge1xyXG4gICAgICBpZiAodGhpcy5wb3NpdGlvbiE9PWZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpc1t0aGlzLl9tb2RlXTtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXh0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuc3RhcnRWYWx1ZXNbdGhpcy5fbW9kZV07XHJcbiAgICAgIHRoaXMubmV4dCA9IHRoaXNbdGhpcy5fbW9kZV07XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwKCkge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uKys7XHJcbiAgICAgIHRoaXMucG9zaXRpb24gJT0gdGhpcy52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkb3duKCkge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLS07XHJcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uIDwgMCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAodGhpcy5wb3NpdGlvbiArIHRoaXMudmFsdWVzLmxlbmd0aCkgJSB0aGlzLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tKCkge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uID0gbWF0aC5yaSgwLCB0aGlzLnZhbHVlcy5sZW5ndGgpO1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkcnVuaygpIHtcclxuICAgICAgdGhpcy5kcnVua1dhbGsubWF4ID0gdGhpcy52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmRydW5rV2Fsay52YWx1ZSA9IHRoaXMucG9zaXRpb247XHJcbiAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmRydW5rV2Fsay5uZXh0KCk7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGZ1dHVyZSBtZXRob2RzXHJcbiAgICAuZ3JvdXAoc3RhcnQsc3RvcCkgLS0gb3V0cHV0cyBhIGdyb3VwIG9mIG4gaXRlbXMgZnJvbSB0aGUgbGlzdCwgd2l0aCB3cmFwcGluZ1xyXG4gICAgLmxvb3Aoc3RhcnQsc3RvcCkgLS0gY29uZmluZXMgc2VxdWVuY2luZyB0byBhIHN1YnNldCBvZiB0aGUgdmFsdWVzXHJcbiAgICAgICAgKGNvdWxkIGV2ZW4gaGF2ZSBhIGRpc3RpbmN0aW9uIGJldHdlZW4gLm9yaWdpbmFsVmFsdWVzIGFuZCB0aGUgYXJyYXkgb2YgdmFsdWVzIGJlaW5nIHVzZWQpXHJcbiAgICAqL1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9tb2RlbHMvc2VxdWVuY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBtYXRoIGZyb20gJy4uL3V0aWwvbWF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERydW5rIHtcblxuICAgIGNvbnN0cnVjdG9yKG1pbj0wLCBtYXg9OSwgdmFsdWU9MCwgaW5jcmVtZW50PTEsIGxvb3A9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy5taW4gPSBtaW47XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50ID0gaW5jcmVtZW50O1xuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgKz0gbWF0aC5waWNrKC0xICogdGhpcy5pbmNyZW1lbnQsIHRoaXMuaW5jcmVtZW50KTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPiB0aGlzLm1heCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWF4IC0gdGhpcy5pbmNyZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy52YWx1ZSA8IHRoaXMubWluKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWF4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5taW4gKyB0aGlzLmluY3JlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvbW9kZWxzL2RydW5rLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWF0aCBmcm9tICcuLi91dGlsL21hdGgnO1xuaW1wb3J0IERydW5rIGZyb20gJy4vZHJ1bmsnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKG1pbj0wLCBtYXg9MTAsIG1vZGU9J3VwJywgdmFsdWU9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy5taW4gPSBtaW47XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgIHRoaXMuZHJ1bmtXYWxrID0gbmV3IERydW5rKHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlIT09ZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLm5leHQgPSB0aGlzW3RoaXMuX21vZGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubmV4dCA9IHRoaXMuZmlyc3Q7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgbW9kZShtb2RlKSB7XG4gICAgICAgIGlmICghKG1vZGUgPT09ICd1cCcgfHwgbW9kZSA9PT0gJ2Rvd24nIHx8IG1vZGUgPT09ICdyYW5kb20nIHx8IG1vZGUgPT09ICdkcnVuaycpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgb25seSBtb2RlcyBjdXJyZW50bHkgYWxsb3dlZCBhcmU6IHVwLCBkb3duLCByYW5kb20sIGRydW5rJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5uZXh0ID0gdGhpc1t0aGlzLl9tb2RlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBtb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBmaXJzdCgpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlIT09ZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpc1t0aGlzLl9tb2RlXTtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV4dCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFydFZhbHVlcyA9IHtcbiAgICAgICAgJ3VwJzogdGhpcy5taW4sXG4gICAgICAgICdkb3duJzogdGhpcy5tYXgsXG4gICAgICAgICdkcnVuayc6IH5+bWF0aC5hdmVyYWdlKHRoaXMubWluLHRoaXMubWF4KSxcbiAgICAgICAgJ3JhbmRvbSc6IG1hdGgucmkodGhpcy5taW4sdGhpcy5tYXgpXG4gICAgICB9O1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc3RhcnRWYWx1ZXNbdGhpcy5fbW9kZV07XG4gICAgICB0aGlzLm5leHQgPSB0aGlzW3RoaXMuX21vZGVdO1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgdXAoKSB7XG4gICAgICAgIHRoaXMudmFsdWUrKztcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPj0gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBkb3duKCkge1xuICAgICAgICB0aGlzLnZhbHVlLS07XG4gICAgICAgIGlmICh0aGlzLnZhbHVlIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1heDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICByYW5kb20oKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBtYXRoLnJpKHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGRydW5rKCkge1xuICAgICAgICB0aGlzLmRydW5rV2Fsay5taW4gPSB0aGlzLm1pbjtcbiAgICAgICAgdGhpcy5kcnVua1dhbGsubWF4ID0gdGhpcy5tYXg7XG4gICAgICAgIHRoaXMuZHJ1bmtXYWxrLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZHJ1bmtXYWxrLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL21vZGVscy9jb3VudGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBjbG9jayB9IGZyb20gJy4uL21haW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcnZhbCB7XG5cbiAgY29uc3RydWN0b3IocmF0ZSxmdW5jLG9uKSB7XG5cbiAgICB0aGlzLnJhdGUgPSByYXRlO1xuICAgIHRoaXMub24gPSBvbjtcbiAgICB0aGlzLmNsb2NrID0gY2xvY2soKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbiAgICB0aGlzLnBhdHRlcm4gPSBbMV07XG4gICAgdGhpcy5pbmRleCA9IDA7XG5cbiAgICB0aGlzLmV2ZW50ID0gZnVuYyA/IGZ1bmMgOiBmdW5jdGlvbigpIHsgfTtcblxuICAgIGlmICh0aGlzLm9uKSB7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gIH1cblxuICBfZXZlbnQoZSkge1xuICAvLyAgaWYgKHRoaXMucGF0dGVyblt0aGlzLmluZGV4JXRoaXMucGF0dGVybi5sZW5ndGhdKSB7XG4gICAgICB0aGlzLmV2ZW50KGUpO1xuICAvLyAgfVxuICAgIHRoaXMuaW5kZXgrKztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5vbiA9IGZhbHNlO1xuICAgIHRoaXMuaW50ZXJ2YWwuY2xlYXIoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMub24gPSB0cnVlO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSB0aGlzLmNsb2NrLmNhbGxiYWNrQXRUaW1lKHRoaXMuX2V2ZW50LmJpbmQodGhpcyksIHRoaXMuY2xvY2suY29udGV4dC5jdXJyZW50VGltZSkucmVwZWF0KHRoaXMucmF0ZS8xMDAwKS50b2xlcmFuY2Uoe2Vhcmx5OiAwLjEsIGxhdGU6MX0pO1xuICB9XG5cbiAgbXMobmV3cmF0ZSkge1xuICAgIGlmICh0aGlzLm9uKSB7XG4gICAgICB2YXIgcmF0aW8gPSBuZXdyYXRlL3RoaXMucmF0ZTtcbiAgICAgIHRoaXMucmF0ZSA9IG5ld3JhdGU7XG4gICAgICB0aGlzLmNsb2NrLnRpbWVTdHJldGNoKHRoaXMuY2xvY2suY29udGV4dC5jdXJyZW50VGltZSwgW3RoaXMuaW50ZXJ2YWxdLCByYXRpbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmF0ZSA9IG5ld3JhdGU7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi90aW1lL2ludGVydmFsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgc3ZnID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKTtcbmxldCBtYXRoID0gcmVxdWlyZSgnLi4vdXRpbC9tYXRoJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcbmxldCBTdGVwID0gcmVxdWlyZSgnLi4vbW9kZWxzL3N0ZXAnKTtcbmltcG9ydCAqIGFzIEludGVyYWN0aW9uIGZyb20gJy4uL3V0aWwvaW50ZXJhY3Rpb24nO1xuXG4vKipcbiogUGFuMkRcbipcbiogQGRlc2NyaXB0aW9uIEludGVyZmFjZSBmb3IgbW92aW5nIGEgc291bmQgYXJvdW5kIGFuIGFycmF5IG9mIHNwZWFrZXJzLiBTcGVha2VyIGxvY2F0aW9ucyBjYW4gYmUgY3VzdG9taXplZC4gVGhlIGludGVyZmFjZSBjYWxjdWxhdGVzIHRoZSBjbG9zZW5lc3Mgb2YgdGhlIHNvdW5kIHNvdXJjZSB0byBlYWNoIHNwZWFrZXIgYW5kIHJldHVybnMgdGhhdCBkaXN0YW5jZSBhcyBhIG51bWVyaWMgdmFsdWUuXG4qXG4qIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwicGFuMkRcIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBwYW4yZCA9IG5ldyBOZXh1cy5QYW4yZCgnI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciBwYW4yZCA9IG5ldyBOZXh1cy5QYW4yRCgnI3RhcmdldCcse1xuKiAgICdzaXplJzogWzIwMCwyMDBdLFxuKiAgICdyYW5nZSc6IDAuNSwgIC8vIGRldGVjdGlvbiByYWRpdXMgb2YgZWFjaCBzcGVha2VyXG4qICAgJ21vZGUnOiAnYWJzb2x1dGUnLCAgIC8vICdhYnNvbHV0ZScgb3IgJ3JlbGF0aXZlJyBzb3VuZCBtb3ZlbWVudFxuKiAgICdzcGVha2Vycyc6IFsgIC8vIHRoZSBzcGVha2VyIFt4LHldIHBvc2l0aW9uc1xuKiAgICAgICBbMC41LDAuMl0sXG4qICAgICAgIFswLjc1LDAuMjVdLFxuKiAgICAgICBbMC44LDAuNV0sXG4qICAgICAgIFswLjc1LDAuNzVdLFxuKiAgICAgICBbMC41LDAuOF0sXG4qICAgICAgIFswLjI1LDAuNzVdXG4qICAgICAgIFswLjIsMC41XSxcbiogICAgICAgWzAuMjUsMC4yNV1cbiogICBdXG4qIH0pXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIGFueSB0aW1lIHRoZSBcInNvdXJjZVwiIG5vZGUncyBwb3NpdGlvbiBjaGFuZ2VzLiA8YnI+XG4qIFRoZSBldmVudCBkYXRhIGlzIGFuIGFycmF5IG9mIHRoZSBhbXBsaXR1ZGVzICgwLTEpLCByZXByZXNlbnRpbmcgdGhlIGxldmVsIG9mIGVhY2ggc3BlYWtlciAoYXMgY2FsY3VsYXRlZCBieSBpdHMgZGlzdGFuY2UgdG8gdGhlIGF1ZGlvIHNvdXJjZSkuXG4qXG4qIEBvdXRwdXRleGFtcGxlXG4qIHBhbjJkLm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbjJEIGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWydyYW5nZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbMjAwLDIwMF0sXG4gICAgICAncmFuZ2UnOiAwLjUsXG4gICAgICAnbW9kZSc6ICdhYnNvbHV0ZScsXG4gICAgICAnc3BlYWtlcnMnOiBbXG4gICAgICAgIFswLjUsMC4yXSxcbiAgICAgICAgWzAuNzUsMC4yNV0sXG4gICAgICAgIFswLjgsMC41XSxcbiAgICAgICAgWzAuNzUsMC43NV0sXG4gICAgICAgIFswLjUsMC44XSxcbiAgICAgICAgWzAuMjUsMC43NV0sXG4gICAgICAgIFswLjIsMC41XSxcbiAgICAgICAgWzAuMjUsMC4yNV1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHtcbiAgICAgIHg6IG5ldyBTdGVwKDAsMSwwLDAuNSksXG4gICAgICB5OiBuZXcgU3RlcCgwLDEsMCwwLjUpXG4gICAgfTtcblxuICAgIC8qKlxuICAgIEFic29sdXRlIG9yIHJlbGF0aXZlIG1vdXNlIGludGVyYWN0aW9uLiBJbiBcImFic29sdXRlXCIgbW9kZSwgdGhlIHNvdXJjZSBub2RlIHdpbGwganVtcCB0byB5b3VyIG1vdXNlIHBvc2l0aW9uIG9uIG1vdXNlIGNsaWNrLiBJbiBcInJlbGF0aXZlXCIgbW9kZSwgaXQgZG9lcyBub3QuXG4gICAgKi9cbiAgICB0aGlzLm1vZGUgPSB0aGlzLnNldHRpbmdzLm1vZGU7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogbmV3IEludGVyYWN0aW9uLkhhbmRsZSh0aGlzLm1vZGUsJ2hvcml6b250YWwnLFswLHRoaXMud2lkdGhdLFt0aGlzLmhlaWdodCwwXSksXG4gICAgICB5OiBuZXcgSW50ZXJhY3Rpb24uSGFuZGxlKHRoaXMubW9kZSwndmVydGljYWwnLFswLHRoaXMud2lkdGhdLFt0aGlzLmhlaWdodCwwXSlcbiAgICB9O1xuICAgIHRoaXMucG9zaXRpb24ueC52YWx1ZSA9IHRoaXMudmFsdWUueC5ub3JtYWxpemVkO1xuICAgIHRoaXMucG9zaXRpb24ueS52YWx1ZSA9IHRoaXMudmFsdWUueS5ub3JtYWxpemVkO1xuXG4gICAgLyoqXG4gICAgQW4gYXJyYXkgb2Ygc3BlYWtlciBsb2NhdGlvbnMuIFVwZGF0ZSB0aGlzIHdpdGggLm1vdmVTcGVha2VyKCkgb3IgLm1vdmVBbGxTcGVha2VycygpXG4gICAgKi9cbiAgICB0aGlzLnNwZWFrZXJzID0gdGhpcy5zZXR0aW5ncy5zcGVha2VycztcblxuICAgIC8qKlxuICAgIFJld3JpdGU6IFRoZSBtYXhpbXVtIGRpc3RhbmNlIGZyb20gYSBzcGVha2VyIHRoYXQgdGhlIHNvdXJjZSBub2RlIGNhbiBiZSBmb3IgaXQgdG8gYmUgaGVhcmQgZnJvbSB0aGF0IHNwZWFrZXIuIEEgbG93IHJhbmdlICgwLjEpIHdpbGwgcmVzdWx0IGluIHNwZWFrZXJzIG9ubHkgcGxheWluZyB3aGVuIHRoZSBzb3VuZCBpcyB2ZXJ5IGNsb3NlIGl0LiBEZWZhdWx0IGlzIDAuNSAoaGFsZiBvZiB0aGUgaW50ZXJmYWNlKS5cbiAgICAqL1xuICAgIHRoaXMucmFuZ2UgPSB0aGlzLnNldHRpbmdzLnJhbmdlO1xuXG4gICAgLyoqXG4gICAgVGhlIGN1cnJlbnQgbGV2ZWxzIGZvciBlYWNoIHNwZWFrZXIuIFRoaXMgaXMgY2FsY3VsYXRlZCB3aGVuIGEgc291cmNlIG5vZGUgb3Igc3BlYWtlciBub2RlIGlzIG1vdmVkIHRocm91Z2ggaW50ZXJhY3Rpb24gb3IgcHJvZ3JhbWF0aWNhbGx5LlxuICAgICovXG4gICAgdGhpcy5sZXZlbHMgPSBbXTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5jYWxjdWxhdGVMZXZlbHMoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcblxuICAgIHRoaXMua25vYiA9IHN2Zy5jcmVhdGUoJ2NpcmNsZScpO1xuXG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5rbm9iKTtcblxuXG4gICAgLy8gYWRkIHNwZWFrZXJzXG4gICAgdGhpcy5zcGVha2VyRWxlbWVudHMgPSBbXTtcblxuICAgIGZvciAobGV0IGk9MDtpPHRoaXMuc3BlYWtlcnMubGVuZ3RoO2krKykge1xuICAgICAgbGV0IHNwZWFrZXJFbGVtZW50ID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzcGVha2VyRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuc3BlYWtlckVsZW1lbnRzLnB1c2goc3BlYWtlckVsZW1lbnQpO1xuICAgIH1cblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuICAgICAgICB0aGlzLl9taW5EaW1lbnNpb24gPSBNYXRoLm1pbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLmtub2JSYWRpdXMgPSB7XG4gICAgICAgICAgb2ZmOiB+fih0aGlzLl9taW5EaW1lbnNpb24vMTAwKSAqIDMgKyA1LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmtub2JSYWRpdXMub24gPSB0aGlzLmtub2JSYWRpdXMub2ZmICogMjtcblxuICAgICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy53aWR0aC8yKTtcbiAgICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3knLHRoaXMuaGVpZ2h0LzIpO1xuICAgICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdyJyx0aGlzLmtub2JSYWRpdXMub2ZmKTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7aTx0aGlzLnNwZWFrZXJzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICBsZXQgc3BlYWtlckVsZW1lbnQgPSB0aGlzLnNwZWFrZXJFbGVtZW50c1tpXTtcbiAgICAgICAgICBsZXQgc3BlYWtlciA9IHRoaXMuc3BlYWtlcnNbaV07XG4gICAgICAgICAgc3BlYWtlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeCcsc3BlYWtlclswXSp0aGlzLndpZHRoKTtcbiAgICAgICAgICBzcGVha2VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JyxzcGVha2VyWzFdKnRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICBzcGVha2VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3InLHRoaXMuX21pbkRpbWVuc2lvbi8yMCArIDUpO1xuICAgICAgICAgIHNwZWFrZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5JywgJzAnKTtcbiAgICAgICAgfVxuXG4gICAgICB0aGlzLnBvc2l0aW9uLngucmVzaXplKFswLHRoaXMud2lkdGhdLFt0aGlzLmhlaWdodCwwXSk7XG4gICAgICB0aGlzLnBvc2l0aW9uLnkucmVzaXplKFswLHRoaXMud2lkdGhdLFt0aGlzLmhlaWdodCwwXSk7XG5cbiAgICAgICAgLy8gbmV4dCwgbmVlZCB0b1xuICAgICAgICAvLyByZXNpemUgcG9zaXRpb25zXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBzcGVha2VyIGRpc3RhbmNlc1xuICAgICAgdGhpcy5jYWxjdWxhdGVMZXZlbHMoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcblxuICAgIGZvciAobGV0IGk9MDtpPHRoaXMuc3BlYWtlcnMubGVuZ3RoO2krKykge1xuICAgICAgbGV0IHNwZWFrZXJFbGVtZW50ID0gdGhpcy5zcGVha2VyRWxlbWVudHNbaV07XG4gICAgICBzcGVha2VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgICAgc3BlYWtlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMua25vYkNvb3JkaW5hdGVzID0ge1xuICAgICAgeDogdGhpcy52YWx1ZS54Lm5vcm1hbGl6ZWQgKiB0aGlzLndpZHRoLFxuICAgICAgeTogdGhpcy5oZWlnaHQgLSB0aGlzLnZhbHVlLnkubm9ybWFsaXplZCAqIHRoaXMuaGVpZ2h0XG4gICAgfTtcblxuICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N4Jyx0aGlzLmtub2JDb29yZGluYXRlcy54KTtcbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeScsdGhpcy5rbm9iQ29vcmRpbmF0ZXMueSk7XG4gIH1cblxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMucG9zaXRpb24ueC5hbmNob3IgPSB0aGlzLm1vdXNlO1xuICAgIHRoaXMucG9zaXRpb24ueS5hbmNob3IgPSB0aGlzLm1vdXNlO1xuICAgIHRoaXMubW92ZSgpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLngudXBkYXRlKHRoaXMubW91c2UpO1xuICAgICAgdGhpcy5wb3NpdGlvbi55LnVwZGF0ZSh0aGlzLm1vdXNlKTtcbiAgICAgIC8vIHBvc2l0aW9uLnggYW5kIHBvc2l0aW9uLnkgYXJlIG5vcm1hbGl6ZWRcbiAgICAgIC8vIHNvIGFyZSB0aGUgbGV2ZWxzXG4gICAgICAvLyBsaWtlbHkgZG9uJ3QgbmVlZCB0aGlzLnZhbHVlIGF0IGFsbCAtLSBvbmx5IHVzZWQgZm9yIGRyYXdpbmdcbiAgICAgIC8vIG5vdCBnb2luZyB0byBiZSBhICdzdGVwJyBvciAnbWluJyBhbmQgJ21heCcgaW4gdGhpcyBvbmUuXG4gICAgICB0aGlzLmNhbGN1bGF0ZUxldmVscygpO1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMubGV2ZWxzKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVsZWFzZSgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IG5vcm1hbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHRoaXMudmFsdWUueC5ub3JtYWxpemVkLFxuICAgICAgeTogdGhpcy52YWx1ZS55Lm5vcm1hbGl6ZWRcbiAgICB9O1xuICB9XG5cbiAgY2FsY3VsYXRlTGV2ZWxzKCkge1xuICAgIHRoaXMudmFsdWUueC51cGRhdGVOb3JtYWwoIHRoaXMucG9zaXRpb24ueC52YWx1ZSApO1xuICAgIHRoaXMudmFsdWUueS51cGRhdGVOb3JtYWwoIHRoaXMucG9zaXRpb24ueS52YWx1ZSApO1xuICAgIHRoaXMubGV2ZWxzID0gW107XG4gICAgdGhpcy5zcGVha2Vycy5mb3JFYWNoKChzLGkpID0+IHtcbiAgICAgIGxldCBkaXN0YW5jZSA9IG1hdGguZGlzdGFuY2Uoc1swXSp0aGlzLndpZHRoLHNbMV0qdGhpcy5oZWlnaHQsdGhpcy5wb3NpdGlvbi54LnZhbHVlKnRoaXMud2lkdGgsKDEtdGhpcy5wb3NpdGlvbi55LnZhbHVlKSp0aGlzLmhlaWdodCk7XG4gICAgICBsZXQgbGV2ZWwgPSBtYXRoLmNsaXAoMS1kaXN0YW5jZS8odGhpcy5yYW5nZSp0aGlzLndpZHRoKSwwLDEpO1xuICAgICAgdGhpcy5sZXZlbHMucHVzaChsZXZlbCk7XG4gICAgICB0aGlzLnNwZWFrZXJFbGVtZW50c1tpXS5zZXRBdHRyaWJ1dGUoJ2ZpbGwtb3BhY2l0eScsIGxldmVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICBNb3ZlIHRoZSBhdWRpbyBzb3VyY2Ugbm9kZSBhbmQgdHJpZ2dlciB0aGUgb3V0cHV0IGV2ZW50LlxuICBAcGFyYW0geCB7bnVtYmVyfSBOZXcgeCBsb2NhdGlvbiwgbm9ybWFsaXplZCAwLTFcbiAgQHBhcmFtIHkge251bWJlcn0gTmV3IHkgbG9jYXRpb24sIG5vcm1hbGl6ZWQgMC0xXG4gICovXG4gIG1vdmVTb3VyY2UoeCx5KSB7XG4gICAgbGV0IGxvY2F0aW9uID0ge1xuICAgICAgeDogeCp0aGlzLndpZHRoLFxuICAgICAgeTogeSp0aGlzLmhlaWdodFxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbi54LnVwZGF0ZShsb2NhdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbi55LnVwZGF0ZShsb2NhdGlvbik7XG4gICAgdGhpcy5jYWxjdWxhdGVMZXZlbHMoKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5sZXZlbHMpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgTW92ZSBhIHNwZWFrZXIgbm9kZSBhbmQgdHJpZ2dlciB0aGUgb3V0cHV0IGV2ZW50LlxuICBAcGFyYW0gaW5kZXgge251bWJlcn0gSW5kZXggb2YgdGhlIHNwZWFrZXIgdG8gbW92ZVxuICBAcGFyYW0geCB7bnVtYmVyfSBOZXcgeCBsb2NhdGlvbiwgbm9ybWFsaXplZCAwLTFcbiAgQHBhcmFtIHkge251bWJlcn0gTmV3IHkgbG9jYXRpb24sIG5vcm1hbGl6ZWQgMC0xXG4gICovXG4gIG1vdmVTcGVha2VyKGluZGV4LHgseSkge1xuXG4gICAgdGhpcy5zcGVha2Vyc1tpbmRleF0gPSBbeCx5XTtcbiAgICB0aGlzLnNwZWFrZXJFbGVtZW50c1tpbmRleF0uc2V0QXR0cmlidXRlKCdjeCcsIHgqdGhpcy53aWR0aCk7XG4gICAgdGhpcy5zcGVha2VyRWxlbWVudHNbaW5kZXhdLnNldEF0dHJpYnV0ZSgnY3knLCB5KnRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLmNhbGN1bGF0ZUxldmVscygpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLmxldmVscyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbiAgLyoqXG4gIFNldCBhbGwgc3BlYWtlciBsb2NhdGlvbnNcbiAgQHBhcmFtIGxvY2F0aW9ucyB7QXJyYXl9IEFycmF5IG9mIHNwZWFrZXIgbG9jYXRpb25zLiBFYWNoIGl0ZW0gaW4gdGhlIGFycmF5IHNob3VsZCBiZSBhbiBhcnJheSBvZiBub3JtYWxpemVkIHggYW5kIHkgY29vcmRpbmF0ZXMuXG5cbiAgc2V0U3BlYWtlcnMobG9jYXRpb25zKSB7XG5cbiAgfVxuICAqL1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9wYW4yZC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1hdGggPSByZXF1aXJlKCcuLi91dGlsL21hdGgnKTtcbmxldCBzdmcgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpO1xubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5cbi8qKlxuKiBUaWx0XG4qXG4qIEBkZXNjcmlwdGlvbiBEZXZpY2UgdGlsdCBzZW5zb3Igd2l0aCAyIG9yIDMgYXhlcyAoZGVwZW5kaW5nIG9uIHlvdXIgZGV2aWNlIGFuZCBicm93c2VyKS5cbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9J3RpbHQnPjwvc3Bhbj5cbipcbiogQGV4YW1wbGVcbiogdmFyIHRpbHQgPSBuZXcgTmV4dXMuVGlsdCgnI3RhcmdldCcpXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIGF0IGEgcmVndWxhciBpbnRlcnZhbCwgYXMgbG9uZyBhcyB0aGlzIGludGVyZmFjZSBpcyBhY3RpdmUgKHNlZSB0aGUgaW50ZXJmYWNlJ3MgPGk+LmFjdGl2ZTwvaT4gcHJvcGVydHkpPGJyPlxuKiBUaGUgZXZlbnQgZGF0YSBpcyBhbiA8aT5vYmplY3Q8L2k+IGNvbnRhaW5pbmcgeCAobnVtYmVyKSBhbmQgeSAobnVtYmVyKSBwcm9wZXJ0aWVzIHdoaWNoIHJlcHJlc2VudCB0aGUgY3VycmVudCB0aWx0IHN0YXRlIG9mIHRoZSBkZXZpY2UuXG4qXG4qIEBvdXRwdXRleGFtcGxlXG4qIHRpbHQub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuKiAgIGNvbnNvbGUubG9nKHYpO1xuKiB9KVxuKlxuKlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsdCBleHRlbmRzIEludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsndmFsdWUnXTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICdzaXplJzogWzgwLDgwXVxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cbiAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGRldmljZSBvcmllbnRhdGlvblxuXG4gIFx0dGhpcy5ib3VuZFVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gIC8vXHR0aGlzLmJvdW5kTW96VGlsdCA9IHRoaXMubW96VGlsdC5iaW5kKHRoaXMpXG5cbiAgXHRpZiAod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQpIHtcbiAgXHRcdHRoaXMub3JpZW50YXRpb25MaXN0ZW5lciA9IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMuYm91bmRVcGRhdGUsIGZhbHNlKTtcbiAgXHR9IGVsc2Uge1xuICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbG9ySW50ZXJmYWNlKCk7XG4gICAgfVxuXG5cblxuICAgICAgLyplbHNlIGlmICh3aW5kb3cuT3JpZW50YXRpb25FdmVudCkge1xuICAvL1x0ICBcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdNb3pPcmllbnRhdGlvbicsIHRoaXMuYm91bmRNb3pUaWx0LCBmYWxzZSk7XG4gIFx0fSBlbHNlIHtcbiAgXHQgIFx0Y29uc29sZS5sb2coJ05vdCBzdXBwb3J0ZWQgb24geW91ciBkZXZpY2Ugb3IgYnJvd3Nlci4nKTtcbiAgXHR9ICovXG5cblxuICB9XG5cblxuICBidWlsZEludGVyZmFjZSgpIHtcblxuICAgIHRoaXMudGl0bGUgPSBzdmcuY3JlYXRlKCd0ZXh0Jyk7XG4gICAgdGhpcy5jaXJjbGVYID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG4gICAgdGhpcy5jaXJjbGVZID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG4gICAgdGhpcy5jaXJjbGVaID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG5cbiAgICB0aGlzLmJhclggPSBzdmcuY3JlYXRlKCdwYXRoJyk7XG4gICAgdGhpcy5iYXJZID0gc3ZnLmNyZWF0ZSgncGF0aCcpO1xuICAgIHRoaXMuYmFyWiA9IHN2Zy5jcmVhdGUoJ3BhdGgnKTtcblxuICAgIHRoaXMuYmFyWDIgPSBzdmcuY3JlYXRlKCdwYXRoJyk7XG4gICAgdGhpcy5iYXJZMiA9IHN2Zy5jcmVhdGUoJ3BhdGgnKTtcbiAgICB0aGlzLmJhcloyID0gc3ZnLmNyZWF0ZSgncGF0aCcpO1xuXG4gICAgdGhpcy5iYXJYLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsJzAuOCcpO1xuICAgIHRoaXMuYmFyWS5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLCcwLjgnKTtcbiAgICB0aGlzLmJhclouc2V0QXR0cmlidXRlKCdvcGFjaXR5JywnMC44Jyk7XG4gICAgdGhpcy5iYXJYMi5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLCcwLjgnKTtcbiAgICB0aGlzLmJhclkyLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsJzAuOCcpO1xuICAgIHRoaXMuYmFyWjIuc2V0QXR0cmlidXRlKCdvcGFjaXR5JywnMC44Jyk7XG5cbiAgICB0aGlzLmNpcmNsZVguc2V0QXR0cmlidXRlKCdjeCcsdGhpcy53aWR0aCozLzEyKTtcbiAgICB0aGlzLmNpcmNsZVguc2V0QXR0cmlidXRlKCdjeScsdGhpcy5oZWlnaHQqMy80KTtcbiAgICB0aGlzLmNpcmNsZVguc2V0QXR0cmlidXRlKCdyJyx0aGlzLmhlaWdodC8xMCk7XG4gICAgdGhpcy5jaXJjbGVYLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsJzAuNCcpO1xuXG4gICAgdGhpcy5jaXJjbGVZLnNldEF0dHJpYnV0ZSgnY3gnLHRoaXMud2lkdGgqNi8xMik7XG4gICAgdGhpcy5jaXJjbGVZLnNldEF0dHJpYnV0ZSgnY3knLHRoaXMuaGVpZ2h0KjMvNCk7XG4gICAgdGhpcy5jaXJjbGVZLnNldEF0dHJpYnV0ZSgncicsdGhpcy5oZWlnaHQvMTApO1xuICAgIHRoaXMuY2lyY2xlWS5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLCcwLjQnKTtcblxuICAgIHRoaXMuY2lyY2xlWi5zZXRBdHRyaWJ1dGUoJ2N4Jyx0aGlzLndpZHRoKjkvMTIpO1xuICAgIHRoaXMuY2lyY2xlWi5zZXRBdHRyaWJ1dGUoJ2N5Jyx0aGlzLmhlaWdodCozLzQpO1xuICAgIHRoaXMuY2lyY2xlWi5zZXRBdHRyaWJ1dGUoJ3InLHRoaXMuaGVpZ2h0LzEwKTtcbiAgICB0aGlzLmNpcmNsZVouc2V0QXR0cmlidXRlKCdvcGFjaXR5JywnMC40Jyk7XG5cblxuICAgIHRoaXMuYmFyWC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsTWF0aC5yb3VuZCh0aGlzLmhlaWdodC8zMCkpO1xuICAgIHRoaXMuYmFyWS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsTWF0aC5yb3VuZCh0aGlzLmhlaWdodC8zMCkpO1xuICAgIHRoaXMuYmFyWi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsTWF0aC5yb3VuZCh0aGlzLmhlaWdodC8zMCkpO1xuXG4gICAgdGhpcy5iYXJYLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgdGhpcy5iYXJZLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgdGhpcy5iYXJaLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG5cbiAgICB0aGlzLmJhclgyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJyxNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0LzMwKSk7XG4gICAgdGhpcy5iYXJZMi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsTWF0aC5yb3VuZCh0aGlzLmhlaWdodC8zMCkpO1xuICAgIHRoaXMuYmFyWjIuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLE1hdGgucm91bmQodGhpcy5oZWlnaHQvMzApKTtcblxuICAgIHRoaXMuYmFyWDIuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICB0aGlzLmJhclkyLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgdGhpcy5iYXJaMi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuXG5cbiAgICB0aGlzLnRpdGxlLnNldEF0dHJpYnV0ZSgneCcsdGhpcy53aWR0aC8yKTtcbiAgICB0aGlzLnRpdGxlLnNldEF0dHJpYnV0ZSgneScsdGhpcy5oZWlnaHQvMys3KTtcbiAgICB0aGlzLnRpdGxlLnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywnMTVweCcpO1xuICAgIHRoaXMudGl0bGUuc2V0QXR0cmlidXRlKCdmb250LXdlaWdodCcsJ2JvbGQnKTtcbiAgICB0aGlzLnRpdGxlLnNldEF0dHJpYnV0ZSgnbGV0dGVyLXNwYWNpbmcnLCcycHgnKTtcbiAgICB0aGlzLnRpdGxlLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsJzAuNycpO1xuICAgIHRoaXMudGl0bGUuc2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicsJ21pZGRsZScpO1xuICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSAnVElMVCc7XG5cblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNpcmNsZVgpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNpcmNsZVkpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNpcmNsZVopO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYmFyWCk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYmFyWSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYmFyWik7XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5iYXJYMik7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYmFyWTIpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJhcloyKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKTtcblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnMuYWNjZW50O1xuICAgICAgdGhpcy5jaXJjbGVYLnNldEF0dHJpYnV0ZSgnZmlsbCcsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgICAgdGhpcy5jaXJjbGVZLnNldEF0dHJpYnV0ZSgnZmlsbCcsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgICAgdGhpcy5jaXJjbGVaLnNldEF0dHJpYnV0ZSgnZmlsbCcsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgICAgdGhpcy5jaXJjbGVYLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5saWdodCk7XG4gICAgICB0aGlzLmNpcmNsZVkuc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLmxpZ2h0KTtcbiAgICAgIHRoaXMuY2lyY2xlWi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgICAgdGhpcy5iYXJYLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5saWdodCk7XG4gICAgICB0aGlzLmJhclkuc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLmxpZ2h0KTtcbiAgICAgIHRoaXMuYmFyWi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgICAgdGhpcy5iYXJYMi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgICAgdGhpcy5iYXJZMi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgICAgdGhpcy5iYXJaMi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgICAgdGhpcy50aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLHRoaXMuY29sb3JzLmxpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gICAgICB0aGlzLmNpcmNsZVguc2V0QXR0cmlidXRlKCdmaWxsJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICB0aGlzLmNpcmNsZVkuc2V0QXR0cmlidXRlKCdmaWxsJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICB0aGlzLmNpcmNsZVouc2V0QXR0cmlidXRlKCdmaWxsJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICB0aGlzLmNpcmNsZVguc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgIHRoaXMuY2lyY2xlWS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubWVkaXVtTGlnaHQpO1xuICAgICAgdGhpcy5jaXJjbGVaLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICB0aGlzLmJhclguc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgIHRoaXMuYmFyWS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubWVkaXVtTGlnaHQpO1xuICAgICAgdGhpcy5iYXJaLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICB0aGlzLmJhclgyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICB0aGlzLmJhclkyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICB0aGlzLmJhcloyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICB0aGlzLnRpdGxlLnNldEF0dHJpYnV0ZSgnZmlsbCcsdGhpcy5jb2xvcnMubWVkaXVtTGlnaHQpO1xuICAgIH1cblxuICB9XG5cbiAgdXBkYXRlKHYpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlKXtcblxuICAgICAgbGV0IHkgPSB2LmJldGE7XG4gICAgICBsZXQgeCA9IHYuZ2FtbWE7XG4gICAgICBsZXQgeiA9IHYuYWxwaGE7XG5cbiAgICAgIC8vIHRha2UgdGhlIG9yaWdpbmFsIC05MCB0byA5MCBzY2FsZSBhbmQgbm9ybWFsaXplIGl0IDAtMVxuICAgICAgeCA9IG1hdGguc2NhbGUoeCwtOTAsOTAsMCwxKTtcbiAgICAgIHkgPSBtYXRoLnNjYWxlKHksLTkwLDkwLDAsMSk7XG4gICAgICB6ID0gbWF0aC5zY2FsZSh6LDAsMzYwLDAsMSk7XG5cblxuICAgICAgbGV0IGhhbmRsZVBvaW50cyA9IHtcbiAgICAgICAgc3RhcnQ6IE1hdGguUEkqMS41LFxuICAgICAgICBlbmQ6IG1hdGguY2xpcCggbWF0aC5zY2FsZSh4LDAsMC41LE1hdGguUEkqMS41LE1hdGguUEkqMC41KSAsIE1hdGguUEkqMC41LCBNYXRoLlBJKjEuNSApXG4gICAgICB9O1xuICAgICAgbGV0IGhhbmRsZTJQb2ludHMgPSB7XG4gICAgICAgIHN0YXJ0OiBNYXRoLlBJKjIuNSxcbiAgICAgICAgZW5kOiBtYXRoLmNsaXAoIG1hdGguc2NhbGUoeCwwLjUsMSxNYXRoLlBJKjIuNSxNYXRoLlBJKjEuNSkgLCBNYXRoLlBJKjEuNSwgTWF0aC5QSSoyLjUgKVxuICAgICAgfTtcblxuICAgICAgbGV0IGhhbmRsZVBhdGggPSBzdmcuYXJjKHRoaXMuY2lyY2xlWC5jeC5iYXNlVmFsLnZhbHVlLCB0aGlzLmNpcmNsZVguY3kuYmFzZVZhbC52YWx1ZSwgdGhpcy5jaXJjbGVYLnIuYmFzZVZhbC52YWx1ZSwgaGFuZGxlUG9pbnRzLnN0YXJ0LCBoYW5kbGVQb2ludHMuZW5kKTtcbiAgICAgIGxldCBoYW5kbGUyUGF0aCA9IHN2Zy5hcmModGhpcy5jaXJjbGVYLmN4LmJhc2VWYWwudmFsdWUsIHRoaXMuY2lyY2xlWC5jeS5iYXNlVmFsLnZhbHVlLCB0aGlzLmNpcmNsZVguci5iYXNlVmFsLnZhbHVlLCBoYW5kbGUyUG9pbnRzLnN0YXJ0LCBoYW5kbGUyUG9pbnRzLmVuZCk7XG5cbiAgICAgIHRoaXMuYmFyWC5zZXRBdHRyaWJ1dGUoJ2QnLCBoYW5kbGVQYXRoKTtcbiAgICAgIHRoaXMuYmFyWDIuc2V0QXR0cmlidXRlKCdkJywgaGFuZGxlMlBhdGgpO1xuXG5cblxuXG5cbiAgICAgIGhhbmRsZVBvaW50cyA9IHtcbiAgICAgICAgc3RhcnQ6IE1hdGguUEkqMS41LFxuICAgICAgICBlbmQ6IG1hdGguY2xpcCggbWF0aC5zY2FsZSh5LDAsMC41LE1hdGguUEkqMS41LE1hdGguUEkqMC41KSAsIE1hdGguUEkqMC41LCBNYXRoLlBJKjEuNSApXG4gICAgICB9O1xuICAgICAgaGFuZGxlMlBvaW50cyA9IHtcbiAgICAgICAgc3RhcnQ6IE1hdGguUEkqMi41LFxuICAgICAgICBlbmQ6IG1hdGguY2xpcCggbWF0aC5zY2FsZSh5LDAuNSwxLE1hdGguUEkqMi41LE1hdGguUEkqMS41KSAsIE1hdGguUEkqMS41LCBNYXRoLlBJKjIuNSApXG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVQYXRoID0gc3ZnLmFyYyh0aGlzLmNpcmNsZVkuY3guYmFzZVZhbC52YWx1ZSwgdGhpcy5jaXJjbGVZLmN5LmJhc2VWYWwudmFsdWUsIHRoaXMuY2lyY2xlWS5yLmJhc2VWYWwudmFsdWUsIGhhbmRsZVBvaW50cy5zdGFydCwgaGFuZGxlUG9pbnRzLmVuZCk7XG4gICAgICBoYW5kbGUyUGF0aCA9IHN2Zy5hcmModGhpcy5jaXJjbGVZLmN4LmJhc2VWYWwudmFsdWUsIHRoaXMuY2lyY2xlWS5jeS5iYXNlVmFsLnZhbHVlLCB0aGlzLmNpcmNsZVkuci5iYXNlVmFsLnZhbHVlLCBoYW5kbGUyUG9pbnRzLnN0YXJ0LCBoYW5kbGUyUG9pbnRzLmVuZCk7XG5cbiAgICAgIHRoaXMuYmFyWS5zZXRBdHRyaWJ1dGUoJ2QnLCBoYW5kbGVQYXRoKTtcbiAgICAgIHRoaXMuYmFyWTIuc2V0QXR0cmlidXRlKCdkJywgaGFuZGxlMlBhdGgpO1xuXG5cblxuXG5cblxuICAgICAgaGFuZGxlUG9pbnRzID0ge1xuICAgICAgICBzdGFydDogTWF0aC5QSSoxLjUsXG4gICAgICAgIGVuZDogbWF0aC5jbGlwKCBtYXRoLnNjYWxlKHosMCwwLjUsTWF0aC5QSSoxLjUsTWF0aC5QSSowLjUpICwgTWF0aC5QSSowLjUsIE1hdGguUEkqMS41IClcbiAgICAgIH07XG4gICAgICBoYW5kbGUyUG9pbnRzID0ge1xuICAgICAgICBzdGFydDogTWF0aC5QSSoyLjUsXG4gICAgICAgIGVuZDogbWF0aC5jbGlwKCBtYXRoLnNjYWxlKHosMC41LDEsTWF0aC5QSSoyLjUsTWF0aC5QSSoxLjUpICwgTWF0aC5QSSoxLjUsIE1hdGguUEkqMi41IClcbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZVBhdGggPSBzdmcuYXJjKHRoaXMuY2lyY2xlWi5jeC5iYXNlVmFsLnZhbHVlLCB0aGlzLmNpcmNsZVouY3kuYmFzZVZhbC52YWx1ZSwgdGhpcy5jaXJjbGVaLnIuYmFzZVZhbC52YWx1ZSwgaGFuZGxlUG9pbnRzLnN0YXJ0LCBoYW5kbGVQb2ludHMuZW5kKTtcbiAgICAgIGhhbmRsZTJQYXRoID0gc3ZnLmFyYyh0aGlzLmNpcmNsZVouY3guYmFzZVZhbC52YWx1ZSwgdGhpcy5jaXJjbGVaLmN5LmJhc2VWYWwudmFsdWUsIHRoaXMuY2lyY2xlWi5yLmJhc2VWYWwudmFsdWUsIGhhbmRsZTJQb2ludHMuc3RhcnQsIGhhbmRsZTJQb2ludHMuZW5kKTtcblxuICAgICAgdGhpcy5iYXJaLnNldEF0dHJpYnV0ZSgnZCcsIGhhbmRsZVBhdGgpO1xuICAgICAgdGhpcy5iYXJaMi5zZXRBdHRyaWJ1dGUoJ2QnLCBoYW5kbGUyUGF0aCk7XG5cblxuICAgICAgLypcblxuICAgICAgbGV0IHBvaW50c1ggPSB7XG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IG1hdGguc2NhbGUoIHgsIDAsIDEsIDAsIE1hdGguUEkqMiApXG4gICAgICB9O1xuXG4gICAgLy8gIGNvbnNvbGUubG9nKHRoaXMuY2lyY2xlWC5jeC5iYXNlVmFsLnZhbHVlKTtcblxuICAgICAgbGV0IHBhdGhYID0gc3ZnLmFyYyh0aGlzLmNpcmNsZVguY3guYmFzZVZhbC52YWx1ZSwgdGhpcy5jaXJjbGVYLmN5LmJhc2VWYWwudmFsdWUsIHRoaXMuY2lyY2xlWC5yLmJhc2VWYWwudmFsdWUqMiwgcG9pbnRzWC5zdGFydCwgcG9pbnRzWC5lbmQpO1xuXG4gICAgICB0aGlzLmJhclguc2V0QXR0cmlidXRlKCdkJyxwYXRoWCk7ICovXG5cbiAgICAgIC8vdGhpcy50ZXh0SC50ZXh0Q29udGVudCA9IG1hdGgucHJ1bmUoeCwyKTtcbiAgICAgIC8vdGhpcy50ZXh0Vi50ZXh0Q29udGVudCA9IG1hdGgucHJ1bmUoeSwyKTtcbiAgICAgIC8vXG4gICAgLy8gIHRoaXMuY2lyY2xlWC5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLHgpO1xuICAgIC8vICB0aGlzLmNpcmNsZVkuc2V0QXR0cmlidXRlKCdvcGFjaXR5Jyx5KTtcbiAgICAvLyAgdGhpcy5jaXJjbGVaLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScseik7XG5cbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5LFxuICAgICAgICB6OiB6XG4gICAgICB9KTtcblxuICAgIH1cblxuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgaWYgKHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50KSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgV2hldGhlciB0aGUgaW50ZXJmYWNlIGlzIG9uIChlbWl0dGluZyB2YWx1ZXMpIG9yIG9mZiAocGF1c2VkICYgbm90IGVtaXR0aW5nIHZhbHVlcykuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHVwZGF0ZSBpdC5cbiAgQHR5cGUge2Jvb2xlYW59XG4gICovXG5cbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgc2V0IGFjdGl2ZShvbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IG9uO1xuICAgIHRoaXMuY29sb3JJbnRlcmZhY2UoKTtcbiAgfVxuXG4gIGN1c3RvbURlc3Ryb3koKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy5ib3VuZFVwZGF0ZSwgZmFsc2UpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL3RpbHQuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtYXRoID0gcmVxdWlyZSgnLi4vdXRpbC9tYXRoJyk7XG5sZXQgc3ZnID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKTtcbmxldCBJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi9jb3JlL2ludGVyZmFjZScpO1xuXG4vKipcbiAqIE11bHRpc2xpZGVyXG4gKlxuICogQGRlc2NyaXB0aW9uIE11bHRpc2xpZGVyXG4gKlxuICogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJtdWx0aXNsaWRlclwiPjwvc3Bhbj5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpc2xpZGVyID0gbmV3IE5leHVzLk11bHRpc2xpZGVyKCcjdGFyZ2V0JylcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpc2xpZGVyID0gbmV3IE5leHVzLk11bHRpc2xpZGVyKCcjdGFyZ2V0Jyx7XG4gKiAgJ3NpemUnOiBbMjAwLDEwMF0sXG4gKiAgJ251bWJlck9mU2xpZGVycyc6IDUsXG4gKiAgJ21pbic6IDAsXG4gKiAgJ21heCc6IDEsXG4gKiAgJ3N0ZXAnOiAwLFxuICogICdjYW5keWNhbmUnOiAzLFxuICogICd2YWx1ZXMnOiBbMC45LDAuOCwwLjcsMC42LDAuNSwwLjQsMC4zLDAuMiwwLjFdLFxuICogICdzbW9vdGhpbmcnOiAwLFxuICogICdtb2RlJzogJ2JhcicgIC8vICdiYXInIG9yICdsaW5lJ1xuICp9KVxuICpcbiAqIEBvdXRwdXRcbiAqIGNoYW5nZVxuICogRmlyZXMgYW55IHRpbWUgdGhlIGludGVyZmFjZSdzIHZhbHVlIGNoYW5nZXMuIDxicj5cbiAqIFRoZSBldmVudCBkYXRhIGlzIGFuIG9iamVjdCBjb250YWluaW5nIDxpPmluZGV4PC9pPiBhbmQgPGk+dmFsdWU8L2k+IHByb3BlcnRpZXNcbiAqXG4gKiBAb3V0cHV0ZXhhbXBsZVxuICogbXVsdGlzbGlkZXIub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuICogICBjb25zb2xlLmxvZyh2KTtcbiAqIH0pXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpc2xpZGVyIGV4dGVuZHMgSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBbJ3ZhbHVlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICBzaXplOiBbMjAwLCAxMDBdLFxuICAgICAgbnVtYmVyT2ZTbGlkZXJzOiA1LFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxLFxuICAgICAgc3RlcDogMCxcbiAgICAgIGNhbmR5Y2FuZTogMyxcbiAgICAgIHZhbHVlczogWzAuOSwgMC44LCAwLjcsIDAuNiwgMC41LCAwLjQsIDAuMywgMC4yLCAwLjFdLFxuICAgICAgc21vb3RoaW5nOiAwLFxuICAgICAgbW9kZTogJ2JhcicgLy8gJ2JhcicsICdsaW5lJ1xuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsIG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgIHRoaXMuX251bWJlck9mU2xpZGVycyA9IHRoaXMuc2V0dGluZ3MubnVtYmVyT2ZTbGlkZXJzO1xuICAgIHRoaXMuX21pbiA9IHRoaXMuc2V0dGluZ3MubWluO1xuICAgIHRoaXMuX21heCA9IHRoaXMuc2V0dGluZ3MubWF4O1xuICAgIHRoaXMuX3N0ZXAgPSB0aGlzLnNldHRpbmdzLnN0ZXA7XG5cbiAgICB0aGlzLl9tb2RlID0gdGhpcy5zZXR0aW5ncy5tb2RlO1xuXG4gICAgLyoqXG4gICAgVGhlIGN1cnJlbnQgdmFsdWVzIG9mIHRoZSBzbGlkZXIuIE5PVEU6IFVzZSB0aGlzIG9ubHkgdG8gZ2V0IHRoZSBjdXJyZW50IHZhbHVlcy4gU2V0dGluZyB0aGlzIGFycmF5IHdpbGwgbm90IHVwZGF0ZSB0aGUgbXVsdGlzbGlkZXIuIFRvIHNldCB0aGUgbXVsdGlzbGlkZXIncyB2YWx1ZXMsIHVzZSBzZXRTbGlkZXIoKSBvciBzZXRBbGxTbGlkZXJzKClcbiAgICBAdHlwZSB7QXJyYXl9XG4gICAgKi9cbiAgICBjb25zdCB2cyA9IHRoaXMuc2V0dGluZ3MudmFsdWVzO1xuICAgIHRoaXMudmFsdWVzID0gdnMubGVuZ3RoID4gdGhpcy5fbnVtYmVyT2ZTbGlkZXJzID8gdnMuc2xpY2UoMCwgdGhpcy5fbnVtYmVyT2ZTbGlkZXJzKSA6IHZzLmNvbmNhdChBcnJheSh0aGlzLl9udW1iZXJPZlNsaWRlcnMgLSB2cy5sZW5ndGgpLmZpbGwoMCkpO1xuXG4gICAgdGhpcy5jYW5keWNhbmUgPSB0aGlzLnNldHRpbmdzLmNhbmR5Y2FuZTtcblxuICAgIHRoaXMuc2xpZGVyV2lkdGggPSB0aGlzLndpZHRoIC8gdGhpcy52YWx1ZXMubGVuZ3RoO1xuXG4gICAgLyoqXG4gICAgQXBwbGllcyBhIHNpbXBsZSBsb3ctcGFzcyBmaWx0ZXIgdG8gdGhlIG11bHRpc2xpZGVyIGFzIGl0IGlzIGludGVyYWN0ZWQgd2l0aC4gQSBzbW9vdGhpbmcgb2YgMCB3aWxsIGJlIG5vIHNtb290aGluZy4gQSBzbW9vdGhpbmcgb2YgMSB3aWxsIHNtb290aCAxIHNsaWRlciBvbiBlYWNoIHNpZGUgb2YgdGhlIGludGVyYWN0aW9uLiBBIHNtb290aGluZyBvZiAyIHdpbGwgc21vb3RoIDIgc2xpZGVycyBvbiBlYWNoIHNpZGUsIGFuZCBzbyBvbi5cbiAgICBAdHlwZSB7TnVtYmVyfVxuICAgICovXG4gICAgdGhpcy5zbW9vdGhpbmcgPSB0aGlzLnNldHRpbmdzLnNtb290aGluZztcblxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcbiAgICBpZiAodGhpcy5fbW9kZSA9PSAnbGluZScpIHtcbiAgICAgIHRoaXMubGluZSA9IHN2Zy5jcmVhdGUoJ3BvbHlsaW5lJyk7XG4gICAgICB0aGlzLmxpbmUuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAyKTtcbiAgICAgIHRoaXMubGluZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5saW5lKTtcblxuICAgICAgdGhpcy5maWxsID0gc3ZnLmNyZWF0ZSgncG9seWxpbmUnKTtcbiAgICAgIHRoaXMuZmlsbC5zZXRBdHRyaWJ1dGUoJ2ZpbGwtb3BhY2l0eScsICcwLjInKTtcblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZmlsbCk7XG5cbiAgICAgIHRoaXMubm9kZXMgPSBbXTtcblxuICAgICAgdGhpcy52YWx1ZXMuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IG5vZGUgPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcblxuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjeCcsIHRoaXMuZ2V0WChpbmRleCkpO1xuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjeScsIHRoaXMuZ2V0WSh2YWx1ZSkpO1xuXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhcnMgPSBbXTtcbiAgICAgIHRoaXMuY2FwcyA9IFtdO1xuXG4gICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgYmFyID0gc3ZnLmNyZWF0ZSgncmVjdCcpO1xuXG4gICAgICAgICAgbGV0IHggPSB0aGlzLmdldEJhclgoaW5kZXgpO1xuICAgICAgICAgIGxldCB5ID0gdGhpcy5nZXRZKHZhbHVlKTtcblxuICAgICAgICAgIGJhci5zZXRBdHRyaWJ1dGUoJ3gnLCB4IC0gMC4xKTtcbiAgICAgICAgICBiYXIuc2V0QXR0cmlidXRlKCd5JywgeSk7XG4gICAgICAgICAgYmFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLnNsaWRlcldpZHRoICsgMC4yKTtcbiAgICAgICAgICBiYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgYmFyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICdvcGFjaXR5JyxcbiAgICAgICAgICAgIDEgLSAoKGluZGV4ICUgdGhpcy5jYW5keWNhbmUpICsgMSkgLyAodGhpcy5jYW5keWNhbmUgKyAxKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFyKTtcbiAgICAgICAgICB0aGlzLmJhcnMucHVzaChiYXIpO1xuXG4gICAgICAgICAgbGV0IGNhcCA9IHN2Zy5jcmVhdGUoJ3JlY3QnKTtcblxuICAgICAgICAgIGNhcC5zZXRBdHRyaWJ1dGUoJ3gnLCB4IC0gMC4xKTtcbiAgICAgICAgICBjYXAuc2V0QXR0cmlidXRlKCd5JywgeSk7XG4gICAgICAgICAgY2FwLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLnNsaWRlcldpZHRoICsgMC4yKTtcbiAgICAgICAgICBjYXAuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCA1KTtcblxuICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjYXApO1xuICAgICAgICAgIHRoaXMuY2Fwcy5wdXNoKGNhcCk7XG4gICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXRCYXJYKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0WChpbmRleCkgLSB0aGlzLnNsaWRlcldpZHRoIC8gMjtcbiAgfVxuXG4gIGdldFgoaW5kZXgpIHtcbiAgICAvL3JldHVybiBNYXRoLmZsb29yKCBpbmRleCAqIHRoaXMuc2xpZGVyV2lkdGggKyB0aGlzLnNsaWRlcldpZHRoLzIgKTtcbiAgICByZXR1cm4gaW5kZXggKiB0aGlzLnNsaWRlcldpZHRoICsgdGhpcy5zbGlkZXJXaWR0aCAvIDI7XG4gIH1cblxuICBnZXRZKHZhbHVlKSB7XG4gICAgcmV0dXJuIG1hdGguc2NhbGUodmFsdWUsIHRoaXMuX21pbiwgdGhpcy5fbWF4LCB0aGlzLmhlaWdodCwgMCk7IC8vKDEgLSB2YWx1ZSkgKiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldFZhbHVlRnJvbVkoeSkge1xuICAgIGxldCBzY2FsZUFkanVzdGVkID0gbWF0aC5zY2FsZSh5LCB0aGlzLmhlaWdodCwgMCwgdGhpcy5fbWluLCB0aGlzLl9tYXgpO1xuICAgIHJldHVybiB0aGlzLmFkanVzdFZhbHVlVG9TdGVwKHNjYWxlQWRqdXN0ZWQpO1xuICB9XG5cbiAgZ2V0SW5kZXhGcm9tWCh4KSB7XG4gICAgcmV0dXJuIG1hdGguY2xpcChcbiAgICAgIE1hdGguZmxvb3IoKHggLyB0aGlzLndpZHRoKSAqIHRoaXMudmFsdWVzLmxlbmd0aCksXG4gICAgICAwLFxuICAgICAgdGhpcy52YWx1ZXMubGVuZ3RoIC0gMVxuICAgICk7XG4gIH1cblxuICBhZGp1c3RWYWx1ZVRvU3RlcCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5fc3RlcCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBsZXQgb2Zmc2V0ID0gdmFsdWUgJSB0aGlzLl9zdGVwO1xuICAgIHZhbHVlID0gdmFsdWUgLSAodmFsdWUgJSB0aGlzLl9zdGVwKTtcbiAgICBpZiAob2Zmc2V0ID4gdGhpcy5fc3RlcCAvIDIpIHtcbiAgICAgIHZhbHVlICs9IHRoaXMuX3N0ZXA7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGFkanVzdEFsbFZhbHVlcygpIHtcbiAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKFxuICAgICAgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5hZGp1c3RWYWx1ZVRvU3RlcCh2YWx1ZSk7XG4gICAgICAgIHRoaXMudmFsdWVzW2luZGV4XSA9IG1hdGguY2xpcCh2YWx1ZSwgdGhpcy5fbWluLCB0aGlzLl9tYXgpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIGdldE5vcm1hbGl6ZWRWYWx1ZXMoKSB7XG4gICAgdGhpcy5ub3JtYWxpemVkVmFsdWVzID0gW107XG4gICAgdGhpcy52YWx1ZXMuZm9yRWFjaChcbiAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9ybWFsaXplZFZhbHVlcy5wdXNoKFxuICAgICAgICAgIG1hdGguc2NhbGUodmFsdWUsIHRoaXMuX21pbiwgdGhpcy5fbWF4LCAwLCAxKVxuICAgICAgICApO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9ycy5maWxsO1xuXG4gICAgaWYgKHRoaXMuX21vZGUgPT0gJ2xpbmUnKSB7XG4gICAgICB0aGlzLmxpbmUuc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgICAgdGhpcy5maWxsLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgICB0aGlzLm5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhcnMuZm9yRWFjaChiYXIgPT4ge1xuICAgICAgICBiYXIuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jYXBzLmZvckVhY2goY2FwID0+IHtcbiAgICAgICAgY2FwLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuICAgIHRoaXMuc2xpZGVyV2lkdGggPSB0aGlzLndpZHRoIC8gdGhpcy52YWx1ZXMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuX21vZGUgPT0gJ2xpbmUnKSB7XG4gICAgICB0aGlzLm5vZGVzLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICBsZXQgciA9IH5+KE1hdGgubWluKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSAvIDUwKSArIDI7XG4gICAgICAgICAgciA9IE1hdGgubWluKHRoaXMuc2xpZGVyV2lkdGgsIHIpO1xuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdyJywgcik7XG4gICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLl9tb2RlID09ICdsaW5lJykge1xuICAgICAgbGV0IGRhdGEgPSAnMCAnICsgdGhpcy5nZXRZKHRoaXMudmFsdWVzWzBdKSArICcsICc7XG5cbiAgICAgIHRoaXMudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgeCA9IHRoaXMuZ2V0WChpbmRleCk7XG4gICAgICAgIGxldCB5ID0gdGhpcy5nZXRZKHZhbHVlKTtcbiAgICAgICAgZGF0YSArPSB4ICsgJyAnICsgeSArICcsICc7XG4gICAgICAgIHRoaXMubm9kZXNbaW5kZXhdLnNldEF0dHJpYnV0ZSgnY3gnLCB0aGlzLmdldFgoaW5kZXgpKTtcbiAgICAgICAgdGhpcy5ub2Rlc1tpbmRleF0uc2V0QXR0cmlidXRlKCdjeScsIHRoaXMuZ2V0WSh2YWx1ZSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGRhdGEgKz0gdGhpcy53aWR0aCArICcgJyArIHRoaXMuZ2V0WSh0aGlzLnZhbHVlc1t0aGlzLnZhbHVlcy5sZW5ndGggLSAxXSk7XG5cbiAgICAgIHRoaXMubGluZS5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIGRhdGEpO1xuXG4gICAgICAvLyBmaWxsIGRhdGFcbiAgICAgIC8vIGFkZCBib3R0b20gY29ybmVyc1xuXG4gICAgICBkYXRhICs9ICcsICcgKyB0aGlzLndpZHRoICsgJyAnICsgdGhpcy5oZWlnaHQgKyAnLCAnO1xuICAgICAgZGF0YSArPSAnMCAnICsgdGhpcy5oZWlnaHQ7XG5cbiAgICAgIHRoaXMuZmlsbC5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5iYXJzW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ3knLCB0aGlzLmdldFkodmFsdWUpKTtcbiAgICAgICAgdGhpcy5jYXBzW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ3knLCB0aGlzLmdldFkodmFsdWUpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzU2xpZGVyID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICh0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMubW91c2UueCA9IG1hdGguY2xpcCh0aGlzLm1vdXNlLngsIDAsIHRoaXMud2lkdGgpO1xuICAgICAgdGhpcy5tb3VzZS55ID0gbWF0aC5jbGlwKHRoaXMubW91c2UueSwgMCwgdGhpcy5oZWlnaHQpO1xuICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWU7XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRTbGlkZXIgPSB0aGlzLmdldEluZGV4RnJvbVgodGhpcy5tb3VzZS54KTtcblxuICAgICAgdGhpcy52YWx1ZXNbdGhpcy5zZWxlY3RlZFNsaWRlcl0gPSB0aGlzLmdldFZhbHVlRnJvbVkodGhpcy5tb3VzZS55KTtcblxuICAgICAgLyogaGFuZGxlIGludGVycG9sYXRpb24gZm9yIGluLWJldHdlZW4gc2xpZGVycyAqL1xuXG4gICAgICBpZiAodGhpcy5wcmV2aW91c1NsaWRlciAhPT0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5wcmV2aW91c1NsaWRlciAtIHRoaXMuc2VsZWN0ZWRTbGlkZXIpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPiAxKSB7XG4gICAgICAgICAgbGV0IGxvdyA9IE1hdGgubWluKHRoaXMucHJldmlvdXNTbGlkZXIsIHRoaXMuc2VsZWN0ZWRTbGlkZXIpO1xuICAgICAgICAgIGxldCBoaWdoID0gTWF0aC5tYXgodGhpcy5wcmV2aW91c1NsaWRlciwgdGhpcy5zZWxlY3RlZFNsaWRlcik7XG4gICAgICAgICAgbGV0IGxvd1ZhbHVlID0gdGhpcy52YWx1ZXNbbG93XTtcbiAgICAgICAgICBsZXQgaGlnaFZhbHVlID0gdGhpcy52YWx1ZXNbaGlnaF07XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGxvdzsgaSA8IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaV0gPSBtYXRoLmludGVycChcbiAgICAgICAgICAgICAgKGkgLSBsb3cpIC8gZGlzdGFuY2UsXG4gICAgICAgICAgICAgIGxvd1ZhbHVlLFxuICAgICAgICAgICAgICBoaWdoVmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IHRoaXMuYWRqdXN0VmFsdWVUb1N0ZXAodGhpcy52YWx1ZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zbW9vdGhpbmcgPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHRoaXMuc21vb3RoaW5nOyBpKyspIHtcbiAgICAgICAgICBsZXQgZG93bkNlbnRlciA9IHRoaXMuc2VsZWN0ZWRTbGlkZXIgLSBpO1xuICAgICAgICAgIGxldCB1cENlbnRlciA9IHRoaXMuc2VsZWN0ZWRTbGlkZXIgKyBpO1xuXG4gICAgICAgICAgaWYgKGRvd25DZW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgbGV0IGRvd25Mb3dlck5laWdoYm9yID0gZG93bkNlbnRlciAtIDEgPj0gMCA/IGRvd25DZW50ZXIgLSAxIDogMDtcbiAgICAgICAgICAgIGxldCBkb3duVXBwZXJOZWlnaGJvciA9IGRvd25DZW50ZXIgKyAxO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNbZG93bkNlbnRlcl0gPVxuICAgICAgICAgICAgICAodGhpcy52YWx1ZXNbZG93bkxvd2VyTmVpZ2hib3JdICtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1tkb3duVXBwZXJOZWlnaGJvcl0pIC9cbiAgICAgICAgICAgICAgMjtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2Rvd25DZW50ZXJdID0gdGhpcy5hZGp1c3RWYWx1ZVRvU3RlcChcbiAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbZG93bkNlbnRlcl1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHVwQ2VudGVyIDwgdGhpcy52YWx1ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGV0IHVwTG93ZXJOZWlnaGJvciA9IHVwQ2VudGVyIC0gMTtcbiAgICAgICAgICAgIGxldCB1cFVwcGVyTmVpZ2hib3IgPSB1cENlbnRlciArIDEgPCB0aGlzLnZhbHVlcy5sZW5ndGggPyB1cENlbnRlciArIDEgOiB0aGlzLnZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNbdXBDZW50ZXJdID1cbiAgICAgICAgICAgICAgKHRoaXMudmFsdWVzW3VwTG93ZXJOZWlnaGJvcl0gKyB0aGlzLnZhbHVlc1t1cFVwcGVyTmVpZ2hib3JdKSAvIDI7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1t1cENlbnRlcl0gPSB0aGlzLmFkanVzdFZhbHVlVG9TdGVwKFxuICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t1cENlbnRlcl1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJldmlvdXNTbGlkZXIgPSB0aGlzLnNlbGVjdGVkU2xpZGVyO1xuXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHRoaXMudmFsdWVzKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gd291bGQgYmUgYSBjb29sIEFQSSBjYWxsIHRvIGhhdmUgZm9yIGxhdGVyLi4uXG4gIHNjYW4oKSB7fVxuXG4gIHVwZGF0ZShpbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlc1tpbmRleF0gPSB0aGlzLmFkanVzdFZhbHVlVG9TdGVwKHZhbHVlKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHtcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gIEdldCB0aGUgbnVtYmVyIG9mIHNsaWRlcnNcbiAgQHR5cGUge051bWJlcn1cbiAgKi9cbiAgZ2V0IG51bWJlck9mU2xpZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gIExvd2VyIGxpbWl0IG9mIHRoZSBtdWx0aXNsaWRlcidzIG91dHB1dCByYW5nZVxuICBAdHlwZSB7bnVtYmVyfVxuICBAZXhhbXBsZSBtdWx0aXNsaWRlci5taW4gPSAxMDAwO1xuICAqL1xuICBnZXQgbWluKCkge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cbiAgc2V0IG1pbih2KSB7XG4gICAgdGhpcy5fbWluID0gdjtcbiAgICB0aGlzLmFkanVzdEFsbFZhbHVlcygpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgVXBwZXIgbGltaXQgb2YgdGhlIG11bHRpc2xpZGVyJ3Mgb3V0cHV0IHJhbmdlXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIG11bHRpc2xpZGVyLm1heCA9IDEwMDA7XG4gICovXG4gIGdldCBtYXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuICBzZXQgbWF4KHYpIHtcbiAgICB0aGlzLl9tYXggPSB2O1xuICAgIHRoaXMuYWRqdXN0QWxsVmFsdWVzKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICBUaGUgaW5jcmVtZW50IHRoYXQgdGhlIG11bHRpc2xpZGVyJ3MgdmFsdWUgY2hhbmdlcyBieS5cbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgbXVsdGlzbGlkZXIuc3RlcCA9IDU7XG4gICovXG4gIGdldCBzdGVwKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGVwO1xuICB9XG4gIHNldCBzdGVwKHYpIHtcbiAgICB0aGlzLl9zdGVwID0gdjtcbiAgICB0aGlzLmFkanVzdEFsbFZhbHVlcygpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgU2V0IHRoZSB2YWx1ZSBvZiBhbiBpbmRpdmlkdWFsIHNsaWRlclxuICBAcGFyYW0gaW5kZXgge251bWJlcn0gU2xpZGVyIGluZGV4XG4gIEBwYXJhbSB2YWx1ZSB7bnVtYmVyfSBOZXcgc2xpZGVyIHZhbHVlXG4gIEBleGFtcGxlXG4gIC8vIFNldCB0aGUgZmlyc3Qgc2xpZGVyIHRvIHZhbHVlIDAuNVxuICBtdWx0aXNsaWRlci5zZXRTbGlkZXIoMCwwLjUpXG4gICovXG4gIHNldFNsaWRlcihpbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlc1tpbmRleF0gPSB0aGlzLmFkanVzdFZhbHVlVG9TdGVwKHZhbHVlKTtcbiAgICB0aGlzLnZhbHVlc1tpbmRleF0gPSBtYXRoLmNsaXAodGhpcy52YWx1ZXNbaW5kZXhdLCB0aGlzLl9taW4sIHRoaXMuX21heCk7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICBTZXQgdGhlIHZhbHVlIG9mIGFsbCBzbGlkZXJzIGF0IG9uY2UuIElmIHRoZSBzaXplIG9mIHRoZSBpbnB1dCBhcnJheSBkb2VzIG5vdCBtYXRjaCB0aGUgY3VycmVudCBudW1iZXIgb2Ygc2xpZGVycywgdGhlIHZhbHVlIGFycmF5IHdpbGwgcmVwZWF0IHVudGlsIGFsbCBzbGlkZXJzIGhhdmUgYmVlbiBzZXQuIEkuZS4gYW4gaW5wdXQgYXJyYXkgb2YgbGVuZ3RoIDEgd2lsbCBzZXQgYWxsIHNsaWRlcnMgdG8gdGhhdCB2YWx1ZS5cbiAgQHBhcmFtIHZhbHVlcyB7QXJyYXl9IEFsbCBzbGlkZXIgdmFsdWVzXG4gIEBleGFtcGxlXG4gIG11bHRpc2xpZGVyLnNldEFsbFNsaWRlcnMoWzAuMiwwLjMsMC40LDAuNSwwLjZdKVxuICAqL1xuICBzZXRBbGxTbGlkZXJzKHZhbHVlcykge1xuICAgIGxldCBwcmV2aW91c0xlbmd0aCA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICBsZXQgbmV3TGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLmFkanVzdEFsbFZhbHVlcygpO1xuICAgIGlmIChwcmV2aW91c0xlbmd0aCAhPSBuZXdMZW5ndGgpIHtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuYnVpbGRJbnRlcmZhY2UoKTtcbiAgICAgIHRoaXMuY29sb3JJbnRlcmZhY2UoKTtcbiAgICB9XG4gICAgdGhpcy5zaXplSW50ZXJmYWNlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL211bHRpc2xpZGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgc3ZnID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKTtcbmxldCBtYXRoID0gcmVxdWlyZSgnLi4vdXRpbC9tYXRoJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcbmxldCBTdGVwID0gcmVxdWlyZSgnLi4vbW9kZWxzL3N0ZXAnKTtcbmltcG9ydCAqIGFzIEludGVyYWN0aW9uIGZyb20gJy4uL3V0aWwvaW50ZXJhY3Rpb24nO1xuXG4vKipcbiogUGFuXG4qXG4qIEBkZXNjcmlwdGlvbiBTdGVyZW8gY3Jvc3NmYWRlci5cbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJwYW5cIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBwYW4gPSBuZXcgTmV4dXMuUGFuKCcjdGFyZ2V0JylcbipcbiogQG91dHB1dFxuKiBjaGFuZ2VcbiogRmlyZXMgYW55IHRpbWUgdGhlIGludGVyZmFjZSdzIHZhbHVlIGNoYW5nZXMuIDxicj5cbiogVGhlIGV2ZW50IGRhdGEgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGludGVyZmFjZSdzIDxpPnZhbHVlPC9pPiAoLTEgdG8gMSksIGFzIHdlbGwgYXMgPGk+TDwvaT4gYW5kIDxpPlI8L2k+IGFtcGxpdHVkZSB2YWx1ZXMgKDAtMSkgZm9yIGxlZnQgYW5kIHJpZ2h0IHNwZWFrZXJzLCBjYWxjdWxhdGVkIGJ5IGEgc3F1YXJlLXJvb3QgY3Jvc3NmYWRlIGFsZ29yaXRobS5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogcGFuLm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbipcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbiBleHRlbmRzIEludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsnc2NhbGUnLCd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbMTIwLDIwXSxcbiAgICAgICdvcmllbnRhdGlvbic6ICdob3Jpem9udGFsJyxcbiAgICAgICdtb2RlJzogJ3JlbGF0aXZlJyxcbiAgICAgICdzY2FsZSc6IFstMSwxXSxcbiAgICAgICdzdGVwJzogMCxcbiAgICAgICd2YWx1ZSc6IDAsXG4gICAgICAnaGFzS25vYic6IHRydWVcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IHRoaXMuc2V0dGluZ3Mub3JpZW50YXRpb247XG5cbiAgICB0aGlzLm1vZGUgPSB0aGlzLnNldHRpbmdzLm1vZGU7XG5cbiAgICB0aGlzLmhhc0tub2IgPSB0aGlzLnNldHRpbmdzLmhhc0tub2I7XG5cbiAgICAvLyB0aGlzLnN0ZXAgc2hvdWxkIGV2ZW50dWFsbHkgYmUgZ2V0L3NldFxuICAgIC8vIHVwZGF0aW5nIGl0IHdpbGwgdXBkYXRlIHRoZSBfdmFsdWUgc3RlcCBtb2RlbFxuICAgIHRoaXMuc3RlcCA9IHRoaXMuc2V0dGluZ3Muc3RlcDsgLy8gZmxvYXRcblxuICAgIHRoaXMuX3ZhbHVlID0gbmV3IFN0ZXAodGhpcy5zZXR0aW5ncy5zY2FsZVswXSwgdGhpcy5zZXR0aW5ncy5zY2FsZVsxXSwgdGhpcy5zZXR0aW5ncy5zdGVwLCB0aGlzLnNldHRpbmdzLnZhbHVlKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBJbnRlcmFjdGlvbi5IYW5kbGUodGhpcy5tb2RlLHRoaXMub3JpZW50YXRpb24sWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcbiAgICB0aGlzLnBvc2l0aW9uLnZhbHVlID0gdGhpcy5fdmFsdWUubm9ybWFsaXplZDtcblxuICAgIHRoaXMudmFsdWUgPSB0aGlzLl92YWx1ZS52YWx1ZTtcblxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnZhbHVlKTtcblxuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmJhciA9IHN2Zy5jcmVhdGUoJ3JlY3QnKTtcbiAgICB0aGlzLmtub2IgPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJhcik7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMua25vYik7XG5cbiAgfVxuXG4gIHNpemVJbnRlcmZhY2UoKSB7XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbi5yZXNpemUoWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy53aWR0aCA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB9XG5cbiAgICBsZXQgeCwgeSwgdywgaCwgYmFyT2Zmc2V0LCBjb3JuZXJSYWRpdXM7XG4gICAgdGhpcy5rbm9iRGF0YSA9IHtcbiAgICAgIGxldmVsOiAwLFxuICAgICAgcjogMFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy50aGlja25lc3MgPSB0aGlzLndpZHRoIC8gMjtcbiAgICBcdHggPSB0aGlzLndpZHRoLzI7XG4gICAgXHR5ID0gMDtcbiAgICBcdHcgPSB0aGlzLnRoaWNrbmVzcztcbiAgICBcdGggPSB0aGlzLmhlaWdodDtcbiAgICAgIHRoaXMua25vYkRhdGEuciA9IHRoaXMudGhpY2tuZXNzICogMC44O1xuICAgIFx0dGhpcy5rbm9iRGF0YS5sZXZlbCA9IGgtdGhpcy5rbm9iRGF0YS5yLXRoaXMubm9ybWFsaXplZCooaC10aGlzLmtub2JEYXRhLnIqMik7XG4gICAgICBiYXJPZmZzZXQgPSAndHJhbnNsYXRlKCcrdGhpcy50aGlja25lc3MqKC0xKS8yKycsMCknO1xuICAgICAgY29ybmVyUmFkaXVzID0gdy8yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRoaWNrbmVzcyA9IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICBcdHggPSAwO1xuICAgIFx0eSA9IHRoaXMuaGVpZ2h0LzI7XG4gICAgXHR3ID0gdGhpcy53aWR0aDtcbiAgICBcdGggPSB0aGlzLnRoaWNrbmVzcztcbiAgICAgIHRoaXMua25vYkRhdGEuciA9IHRoaXMudGhpY2tuZXNzICogMC44O1xuICAgIFx0dGhpcy5rbm9iRGF0YS5sZXZlbCA9IHRoaXMubm9ybWFsaXplZCoody10aGlzLmtub2JEYXRhLnIqMikrdGhpcy5rbm9iRGF0YS5yO1xuICAgICAgYmFyT2Zmc2V0ID0gJ3RyYW5zbGF0ZSgwLCcrdGhpcy50aGlja25lc3MqKC0xKS8yKycpJztcbiAgICAgIGNvcm5lclJhZGl1cyA9IGgvMjtcbiAgICB9XG5cbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3gnLHgpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgneScseSk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLGJhck9mZnNldCk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCdyeCcsY29ybmVyUmFkaXVzKTsgLy8gY29ybmVyIHJhZGl1c1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgncnknLGNvcm5lclJhZGl1cyk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsdyk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLGgpO1xuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N4Jyx4KTtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N5Jyx0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3gnLHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3knLHkpO1xuICAgIH1cbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdyJyx0aGlzLmtub2JEYXRhLnIpO1xuXG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcblxuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmZpbGwpO1xuICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuXG4gICAgaWYgKCF0aGlzLmhhc0tub2IpIHtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCd0cmFuc3BhcmVudCcpO1xuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLmtub2JEYXRhLnIgPSB0aGlzLnRoaWNrbmVzcyowLjc1O1xuICAgIH1cbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdyJyx0aGlzLmtub2JEYXRhLnIpO1xuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgXHQgICB0aGlzLmtub2JEYXRhLmxldmVsID0gdGhpcy5rbm9iRGF0YS5yK3RoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQqKHRoaXMuaGVpZ2h0LXRoaXMua25vYkRhdGEucioyKTtcbiAgICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeScsdGhpcy5oZWlnaHQgLSB0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICB9IGVsc2Uge1xuICBcdCAgIHRoaXMua25vYkRhdGEubGV2ZWwgPSB0aGlzLl92YWx1ZS5ub3JtYWxpemVkKih0aGlzLndpZHRoLXRoaXMua25vYkRhdGEucioyKSt0aGlzLmtub2JEYXRhLnI7XG4gICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3gnLHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgIH1cbiAgfVxuXG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5rbm9iRGF0YS5yID0gdGhpcy50aGlja25lc3MqMC45O1xuICAgIHRoaXMucG9zaXRpb24uYW5jaG9yID0gdGhpcy5tb3VzZTtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi51cGRhdGUodGhpcy5tb3VzZSk7XG5cbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl92YWx1ZS51cGRhdGVOb3JtYWwoIHRoaXMucG9zaXRpb24udmFsdWUgKTtcblxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIEw6IE1hdGgucG93KCBtYXRoLnNjYWxlKHRoaXMudmFsdWUsLTEsMSwxLDApLCAyKSxcbiAgICAgICAgUjogTWF0aC5wb3coIG1hdGguc2NhbGUodGhpcy52YWx1ZSwtMSwxLDAsMSksIDIpXG4gICAgICB9KTtcblxuICAgIH1cbiAgfVxuXG4gIHJlbGVhc2UoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICBUaGUgcG9zaXRpb24gb2YgY3Jvc3NmYWRlciwgZnJvbSAtMSAobGVmdCkgdG8gMSAocmlnaHQpLiBTZXR0aW5nIHRoaXMgdmFsdWUgdXBkYXRlcyB0aGUgaW50ZXJmYWNlIGFuZCB0cmlnZ2VycyB0aGUgb3V0cHV0IGV2ZW50LlxuICBAdHlwZSB7bnVtYmVyfVxuICAqL1xuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLnZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWUudXBkYXRlKHZhbHVlKTtcbiAgICB0aGlzLnBvc2l0aW9uLnZhbHVlID0gdGhpcy5fdmFsdWUubm9ybWFsaXplZDtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBMOiBNYXRoLnBvdyggbWF0aC5zY2FsZSh0aGlzLnZhbHVlLC0xLDEsMSwwKSwgMiksXG4gICAgICBSOiBNYXRoLnBvdyggbWF0aC5zY2FsZSh0aGlzLnZhbHVlLC0xLDEsMCwxKSwgMilcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IG5vcm1hbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2ludGVyZmFjZXMvcGFuLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWF0aCA9IHJlcXVpcmUoJy4uL3V0aWwvbWF0aCcpO1xubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcblxuXG5sZXQgUG9pbnQgPSBmdW5jdGlvbihwb2ludCxlbnZlbG9wZSkge1xuXG4gIHRoaXMueCA9IHBvaW50Lng7XG4gIHRoaXMueSA9IHBvaW50Lnk7XG5cbiAgdGhpcy54TWluID0gcG9pbnQueE1pbiB8fCAwO1xuICB0aGlzLnhNYXggPSBwb2ludC54TWF4IHx8IDE7XG4gIHRoaXMueU1pbiA9IHBvaW50LnlNaW4gfHwgMDtcbiAgdGhpcy55TWF4ID0gcG9pbnQueU1heCB8fCAxO1xuXG4gIHRoaXMuZW52ZWxvcGUgPSBlbnZlbG9wZTtcblxuICB0aGlzLmVsZW1lbnQgPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcbiAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlsbCcsdGhpcy5lbnZlbG9wZS5jb2xvcnMuYWNjZW50KTtcblxuICB0aGlzLmVudmVsb3BlLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcblxuICB0aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByID0gfn4oTWF0aC5taW4odGhpcy5lbnZlbG9wZS53aWR0aCx0aGlzLmVudmVsb3BlLmhlaWdodCkvNTApKzI7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgncicscik7XG4gIH07XG5cbiAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oeCx5KSB7XG5cbiAgICB0aGlzLnggPSAoeCB8fCB4PT09MCkgPyB4IDogdGhpcy54O1xuICAgIHRoaXMueSA9ICh5IHx8IHk9PT0wKSA/IHkgOiB0aGlzLnk7XG5cbiAgICBpZiAodGhpcy5lbnZlbG9wZS5ub2Rlcy5pbmRleE9mKHRoaXMpPj0wKSB7XG5cbiAgICAgIGxldCBwcmV2SW5kZXggPSB0aGlzLmVudmVsb3BlLm5vZGVzLmluZGV4T2YodGhpcyktMTtcbiAgICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmVudmVsb3BlLm5vZGVzLmluZGV4T2YodGhpcykrMTtcblxuICAgICAgbGV0IHByZXZOb2RlID0gdGhpcy5lbnZlbG9wZS5ub2Rlc1twcmV2SW5kZXhdO1xuICAgICAgbGV0IG5leHROb2RlID0gdGhpcy5lbnZlbG9wZS5ub2Rlc1tuZXh0SW5kZXhdO1xuXG4gICAgICBsZXQgbG93WCA9IHByZXZJbmRleCA+PSAwID8gcHJldk5vZGUueCA6IDA7XG5cdCAgICBsb3dYID0gbG93WDx0aGlzLnhNaW4/dGhpcy54TWluOmxvd1g7XG5cbiAgICAgIGxldCBoaWdoWCA9IG5leHRJbmRleCA8IHRoaXMuZW52ZWxvcGUubm9kZXMubGVuZ3RoID8gbmV4dE5vZGUueCA6IDE7XG5cdCAgICBoaWdoWCA9IGhpZ2hYPnRoaXMueE1heD90aGlzLnhNYXg6aGlnaFg7XG5cbiAgXHQgIGlmICh0aGlzLnggPCBsb3dYKSB7IHRoaXMueCA9IGxvd1g7IH1cbiAgICAgIGlmICh0aGlzLnggPiBoaWdoWCkgeyB0aGlzLnggPSBoaWdoWDsgfVxuXG4gICAgICBpZiAodGhpcy55IDwgdGhpcy55TWluKSB7IHRoaXMueSA9IHRoaXMueU1pbjsgfVxuICAgICAgaWYgKHRoaXMueSA+IHRoaXMueU1heCkgeyB0aGlzLnkgPSB0aGlzLnlNYXg7IH1cblxuICAgIH1cblxuICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmdldENvb3JkaW5hdGVzKCk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY3gnLCB0aGlzLmxvY2F0aW9uLngpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JywgdGhpcy5sb2NhdGlvbi55KTtcbiAgfTtcblxuICB0aGlzLmdldENvb3JkaW5hdGVzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHRoaXMueCAqIHRoaXMuZW52ZWxvcGUud2lkdGgsXG4gICAgICB5OiAoMS10aGlzLnkpICogdGhpcy5lbnZlbG9wZS5oZWlnaHRcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMubW92ZSh0aGlzLngsdGhpcy55LHRydWUpO1xuICB0aGlzLnJlc2l6ZSgpO1xuXG4gIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZW52ZWxvcGUuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuZW52ZWxvcGUubm9kZXMuc3BsaWNlKHRoaXMuZW52ZWxvcGUubm9kZXMuaW5kZXhPZih0aGlzKSwxKTtcbiAgfTtcblxuXG59O1xuXG5cbi8qKlxuKiBFbnZlbG9wZVxuKlxuKiBAZGVzY3JpcHRpb24gSW50ZXJhY3RpdmUgbGluZWFyIHJhbXAgdmlzdWFsaXphdGlvbi5cbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJlbnZlbG9wZVwiPjwvc3Bhbj5cbipcbiogQGV4YW1wbGVcbiogdmFyIGVudmVsb3BlID0gbmV3IE5leHVzLkVudmVsb3BlKCcjdGFyZ2V0JylcbipcbiogQGV4YW1wbGVcbiogdmFyIGVudmVsb3BlID0gbmV3IE5leHVzLkVudmVsb3BlKCcjdGFyZ2V0Jyx7XG4qICAgJ3NpemUnOiBbMzAwLDE1MF0sXG4qICAgJ25vTmV3UG9pbnRzJzogZmFsc2UsXG4qICAgJ3BvaW50cyc6IFtcbiogICAgIHtcbiogICAgICAgeDogMC4xLFxuKiAgICAgICB5OiAwLjRcbiogICAgIH0sXG4qICAgICB7XG4qICAgICAgIHg6IDAuMzUsXG4qICAgICAgIHk6IDAuNlxuKiAgICAgfSxcbiogICAgIHtcbiogICAgICAgeDogMC42NSxcbiogICAgICAgeTogMC4yXG4qICAgICB9LFxuKiAgICAge1xuKiAgICAgICB4OiAwLjksXG4qICAgICAgIHk6IDAuNFxuKiAgICAgfSxcbiogICBdXG4qIH0pXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIGFueSB0aW1lIGEgbm9kZSBpcyBtb3ZlZC4gPGJyPlxuKiBUaGUgZXZlbnQgZGF0YSBpcyBhbiBhcnJheSBvZiBwb2ludCBsb2NhdGlvbnMuIEVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgPGk+eDwvaT4gYW5kIDxpPnk8L2k+IHByb3BlcnRpZXMgZGVzY3JpYmluZyB0aGUgbG9jYXRpb24gb2YgYSBwb2ludCBvbiB0aGUgZW52ZWxvcGUuXG4qXG4qIEBvdXRwdXRleGFtcGxlXG4qIGVudmVsb3BlLm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudmVsb3BlIGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbMzAwLDE1MF0sXG4gICAgICAnbm9OZXdQb2ludHMnOmZhbHNlLFxuICAgICAgJ3BvaW50cyc6IFtcbiAgXHRcdFx0e1xuICBcdFx0XHRcdHg6IDAuMSxcbiAgXHRcdFx0XHR5OiAwLjRcbiAgXHRcdFx0fSxcbiAgXHRcdFx0e1xuICBcdFx0XHRcdHg6IDAuMzUsXG4gIFx0XHRcdFx0eTogMC42XG4gIFx0XHRcdH0sXG4gIFx0XHRcdHtcbiAgXHRcdFx0XHR4OiAwLjY1LFxuICBcdFx0XHRcdHk6IDAuMlxuICBcdFx0XHR9LFxuICBcdFx0XHR7XG4gIFx0XHRcdFx0eDogMC45LFxuICBcdFx0XHRcdHk6IDAuNFxuICBcdFx0XHR9XG4gIFx0XHRdXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cyxvcHRpb25zLGRlZmF1bHRzKTtcblxuICAgIHRoaXMucG9pbnRzID0gdGhpcy5zZXR0aW5ncy5wb2ludHM7XG5cbiAgICB0aGlzLm5vZGVzID0gW107XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmluaXQoKTtcblxuXG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcblxuXG4gICAgdGhpcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgIGxldCBub2RlID0gbmV3IFBvaW50KHBvaW50LHRoaXMpO1xuICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb3J0UG9pbnRzKCk7XG5cbiAgICB0aGlzLmxpbmUgPSBzdmcuY3JlYXRlKCdwb2x5bGluZScpO1xuICAgIHRoaXMubGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDIpO1xuICAgIHRoaXMubGluZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubGluZSk7XG5cbiAgICB0aGlzLmZpbGwgPSBzdmcuY3JlYXRlKCdwb2x5bGluZScpO1xuICAgIHRoaXMuZmlsbC5zZXRBdHRyaWJ1dGUoJ2ZpbGwtb3BhY2l0eScsICcwLjInKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmZpbGwpO1xuXG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMubm9kZXNbaV0ucmVzaXplKCk7XG4gICAgICB0aGlzLm5vZGVzW2ldLm1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9ycy5maWxsO1xuICAgIHRoaXMubGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgdGhpcy5maWxsLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgdGhpcy5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaWxsJyx0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgIH0pO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gIC8vICB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWRdLm1vdmUoIHRoaXMucG9pbnRzIClcbiAgICB0aGlzLmNhbGN1bGF0ZVBhdGgoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBvaW50cygpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMubm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgdGhpcy5wb2ludHMucHVzaCh7IHg6IG5vZGUueCwgeTogbm9kZS55IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlUGF0aCgpIHtcblxuICAgIC8vc3Ryb2tlIGRhdGFcbiAgICBsZXQgZGF0YSA9ICcwICcrIHRoaXMubm9kZXNbMF0ubG9jYXRpb24ueSsnLCAnO1xuXG4gICAgLy8gZGF0YSBzaG91bGQgYmUgcmUtb3JkZXJlZCBiYXNlZCBvbiB4IGxvY2F0aW9uLlxuICAgIC8vIHdoYXRldmVyIGZ1bmN0aW9uIGFkZHMgYSBub2RlIHNob3VsZCBhZGQgaXQgYXQgdGhlIHJpZ2h0IGluZGV4XG5cbiAgICB0aGlzLm5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAvLyAgbGV0IGxvY2F0aW9uID0gbm9kZS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgZGF0YSArPSBub2RlLmxvY2F0aW9uLnggKyAnICcgKyBub2RlLmxvY2F0aW9uLnkgKyAnLCAnO1xuICAgIH0pO1xuXG5cbiAgLy8gIGRhdGEgKz0gcG9pbnQueCp0aGlzLndpZHRoKycgJysgcG9pbnQueSp0aGlzLmhlaWdodCsnLCAnO1xuICAgIGRhdGEgKz0gdGhpcy53aWR0aCArICcgJysgdGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aC0xXS5sb2NhdGlvbi55O1xuXG4gICAgdGhpcy5saW5lLnNldEF0dHJpYnV0ZSgncG9pbnRzJywgZGF0YSk7XG5cbiAgICAvLyBmaWxsIGRhdGFcbiAgICAvLyBhZGQgYm90dG9tIGNvcm5lcnNcblxuICAgIGRhdGEgKz0gJywgJyt0aGlzLndpZHRoICsnICcrdGhpcy5oZWlnaHQrJywgJztcbiAgICBkYXRhICs9ICcwICcrdGhpcy5oZWlnaHQ7XG5cbiAgICB0aGlzLmZpbGwuc2V0QXR0cmlidXRlKCdwb2ludHMnLCBkYXRhKTtcblxuICB9XG5cblxuXG4gIGNsaWNrKCkge1xuICBcdC8vIGZpbmQgbmVhcmVzdCBub2RlIGFuZCBzZXQgdGhpcy5zZWxlY3RlZCAoaW5kZXgpXG4gICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlO1xuICBcdHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmZpbmROZWFyZXN0Tm9kZSgpO1xuXG4gICAgdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkXS5tb3ZlKHRoaXMubW91c2UueC90aGlzLndpZHRoLDEtdGhpcy5tb3VzZS55L3RoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLnNjYWxlTm9kZSh0aGlzLnNlbGVjdGVkKTtcblxuICAgIC8vIG11c3QgZG8gdGhpcyBiL2MgbmV3IG5vZGUgbWF5IGhhdmUgYmVlbiBjcmVhdGVkXG4gICAgdGhpcy5jYWxjdWxhdGVQb2ludHMoKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5wb2ludHMpO1xuICBcdHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICBcdGlmICh0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMubW91c2UueCA9IG1hdGguY2xpcCh0aGlzLm1vdXNlLngsMCx0aGlzLndpZHRoKTtcbiAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWRdLm1vdmUodGhpcy5tb3VzZS54L3RoaXMud2lkdGgsMS10aGlzLm1vdXNlLnkvdGhpcy5oZWlnaHQpO1xuICAgIFx0dGhpcy5zY2FsZU5vZGUodGhpcy5zZWxlY3RlZCk7XG5cbiAgICAgIHRoaXMuY2FsY3VsYXRlUG9pbnRzKCk7XG4gIFx0XHR0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5wb2ludHMpO1xuICBcdFx0dGhpcy5yZW5kZXIoKTtcbiAgXHR9XG4gIH1cblxuICByZWxlYXNlKCkge1xuXG4gIFx0aWYgKCF0aGlzLmhhc01vdmVkKSB7XG4gICAgICB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWRdLmRlc3Ryb3koKTtcbiAgXHR9XG5cbiAgICB0aGlzLmNhbGN1bGF0ZVBvaW50cygpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnBvaW50cyk7XG4gIFx0dGhpcy5yZW5kZXIoKTtcblxuICBcdC8vIHJlc2V0IHRoaXMuc2VsZWN0ZWRcbiAgXHR0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgfVxuXG5cbiAgZmluZE5lYXJlc3ROb2RlKCkge1xuICBcdHZhciBuZWFyZXN0SW5kZXggPSBudWxsO1xuICAgIC8vIHNldCB0aGlzIHVucmVhc29uYWJseSBoaWdoIHNvIHRoYXQgZXZlcnkgZGlzdGFuY2Ugd2lsbCBiZSBsb3dlciB0aGFuIGl0LlxuICBcdHZhciBuZWFyZXN0RGlzdCA9IDEwMDAwO1xuICBcdHZhciBiZWZvcmUgPSBmYWxzZTtcbiAgICBsZXQgeCA9IHRoaXMubW91c2UueC90aGlzLndpZHRoO1xuICAgIGxldCB5ID0gMS10aGlzLm1vdXNlLnkvdGhpcy5oZWlnaHQ7XG4gICAgbGV0IG5vZGVzID0gdGhpcy5ub2RlcztcbiAgXHRmb3IgKGxldCBpID0gMDsgaTxub2Rlcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGZyb20gbW91c2UgdG8gdGhpcyBub2RlIHVzaW5nIHB5dGhhZ29yZWFuIHRoZW9yZW1cbiAgXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggIE1hdGgucG93KCAobm9kZXNbaV0ueCAtIHgpLCAyKSArIE1hdGgucG93KChub2Rlc1tpXS55IC0geSksIDIpICk7XG5cbiAgICAgIC8vIGlmIHRoaXMgZGlzdGFuY2UgaXMgbGVzcyB0aGFuIHRoZSBwcmV2aW91cyBzaG9ydGVzdCBkaXN0YW5jZSwgdXNlIHRoaXMgaW5kZXhcbiAgXHRcdGlmIChkaXN0YW5jZSA8IG5lYXJlc3REaXN0KSB7XG4gIFx0XHRcdG5lYXJlc3REaXN0ID0gZGlzdGFuY2U7XG4gIFx0XHRcdG5lYXJlc3RJbmRleCA9IGk7XG4gIFx0XHRcdGJlZm9yZSA9IHggPiBub2Rlc1tpXS54O1xuICBcdFx0fVxuXG4gIFx0fVxuXG4gICAgLy8gaWYgbm90IHZlcnkgY2xvc2UgdG8gYW55IG5vZGUsIGNyZWF0ZSBhIG5vZGVcbiAgXHRpZiAoIXRoaXMuc2V0dGluZ3Mubm9OZXdQb2ludHMgJiYgbmVhcmVzdERpc3Q+MC4wNykge1xuXG4gICAgICBuZWFyZXN0SW5kZXggPSB0aGlzLmdldEluZGV4RnJvbVgodGhpcy5tb3VzZS54L3RoaXMud2lkdGgpO1xuXG4gIFx0XHR0aGlzLm5vZGVzLnNwbGljZShuZWFyZXN0SW5kZXgsMCwgbmV3IFBvaW50KHtcbiAgXHRcdFx0eDogdGhpcy5tb3VzZS54L3RoaXMud2lkdGgsXG4gIFx0XHRcdHk6IDEtdGhpcy5tb3VzZS55L3RoaXMuaGVpZ2h0XG4gIFx0XHR9LCB0aGlzKSk7XG4gICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZTtcblxuICBcdH1cblxuICBcdHJldHVybiBuZWFyZXN0SW5kZXg7XG4gIH1cblxuICBnZXRJbmRleEZyb21YKHgpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHRoaXMubm9kZXMuZm9yRWFjaCgobm9kZSxpKSA9PiB7XG4gICAgICBpZiAodGhpcy5ub2Rlc1tpXS54IDw9IHgpIHtcbiAgICAgICAgaW5kZXggPSBpKzE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgc2NhbGVOb2RlKGkpIHtcblxuICBcdGxldCBjbGlwcGVkWCA9IG1hdGguY2xpcCh0aGlzLm5vZGVzW2ldLngsIDAsIDEpO1xuICBcdGxldCBjbGlwcGVkWSA9IG1hdGguY2xpcCh0aGlzLm5vZGVzW2ldLnksIDAsIDEpO1xuXG4gICAgdGhpcy5ub2Rlc1tpXS5tb3ZlKCBjbGlwcGVkWCwgY2xpcHBlZFkgKTtcblxuICB9XG5cbiAgLyoqXG4gIFNvcnQgdGhlIHRoaXMucG9pbnRzIGFycmF5IGZyb20gbGVmdC1tb3N0IHBvaW50IHRvIHJpZ2h0LW1vc3QgcG9pbnQuIFlvdSBzaG91bGQgbm90IHJlZ3VsYXJseSBuZWVkIHRvIHVzZSB0aGlzLCBob3dldmVyIGl0IG1heSBiZSB1c2VmdWwgaWYgdGhlIHBvaW50cyBnZXQgdW5vcmRlcmVkLlxuICAqL1xuICBzb3J0UG9pbnRzKCkge1xuICAgIHRoaXMubm9kZXMuc29ydChmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBhLnggPiBiLng7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICBBZGQgYSBicmVha3BvaW50IG9uIHRoZSBlbnZlbG9wZS5cbiAgQHBhcmFtIHgge251bWJlcn0geCBsb2NhdGlvbiBvZiB0aGUgcG9pbnQsIG5vcm1hbGl6ZWQgKDAtMSlcbiAgQHBhcmFtIHkge251bWJlcn0geSBsb2NhdGlvbiBvZiB0aGUgcG9pbnQsIG5vcm1hbGl6ZWQgKDAtMSlcbiAgKi9cbiAgYWRkUG9pbnQoeCx5KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5ub2Rlcy5sZW5ndGg7XG5cbiAgICB0aGlzLnNvcnRQb2ludHMoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpPHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh4IDwgdGhpcy5ub2Rlc1tpXS54KSB7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIFx0fVxuXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDAsIG5ldyBQb2ludCh7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH0sIHRoaXMpKTtcblxuICAgIHRoaXMuc2NhbGVOb2RlKGluZGV4KTtcblxuICAgIHRoaXMuY2FsY3VsYXRlUG9pbnRzKCk7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMucG9pbnRzKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICBGaW5kIHRoZSBsZXZlbCBhdCBhIGNlcnRhaW4geCBsb2NhdGlvbiBvbiB0aGUgZW52ZWxvcGUuXG4gIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSB4IGxvY2F0aW9uIHRvIGZpbmQgdGhlIGxldmVsIG9mLCBub3JtYWxpemVkIDAtMVxuICAqL1xuICBzY2FuKHgpIHtcbiAgICAvLyBmaW5kIHN1cnJvdW5kaW5nIHBvaW50c1xuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmdldEluZGV4RnJvbVgoeCk7XG4gICAgbGV0IHByaW9ySW5kZXggPSBuZXh0SW5kZXgtMTtcbiAgICBpZiAocHJpb3JJbmRleCA8IDApIHtcbiAgICAgIHByaW9ySW5kZXggPSAwO1xuICAgIH1cbiAgICBpZiAobmV4dEluZGV4ID49IHRoaXMubm9kZXMubGVuZ3RoKSB7XG4gICAgICBuZXh0SW5kZXggPSB0aGlzLm5vZGVzLmxlbmd0aC0xO1xuICAgIH1cbiAgICBsZXQgcHJpb3JQb2ludCA9IHRoaXMubm9kZXNbcHJpb3JJbmRleF07XG4gICAgbGV0IG5leHRQb2ludCA9IHRoaXMubm9kZXNbbmV4dEluZGV4XTtcbiAgICBsZXQgbG9jID0gbWF0aC5zY2FsZSh4LHByaW9yUG9pbnQueCwgbmV4dFBvaW50LngsIDAsIDEpO1xuICAgIGxldCB2YWx1ZSA9IG1hdGguaW50ZXJwKGxvYyxwcmlvclBvaW50LnksbmV4dFBvaW50LnkpO1xuICAgIHRoaXMuZW1pdCgnc2NhbicsdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG5cbiAgLyoqXG4gIE1vdmUgYSBicmVha3BvaW50IG9uIHRoZSBlbnZlbG9wZS5cbiAgQHBhcmFtIGluZGV4IHtudW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgYnJlYWtwb2ludCB0byBtb3ZlXG4gIEBwYXJhbSB4IHtudW1iZXJ9IE5ldyB4IGxvY2F0aW9uLCBub3JtYWxpemVkIDAtMVxuICBAcGFyYW0geSB7bnVtYmVyfSBOZXcgeSBsb2NhdGlvbiwgbm9ybWFsaXplZCAwLTFcbiAgKi9cbiAgbW92ZVBvaW50KGluZGV4LHgseSkge1xuICAgIHRoaXMubm9kZXNbaW5kZXhdLm1vdmUoeCx5KTtcbiAgICB0aGlzLnNjYWxlTm9kZShpbmRleCk7XG4gICAgdGhpcy5jYWxjdWxhdGVQb2ludHMoKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5wb2ludHMpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICBNb3ZlIGEgYnJlYWtwb2ludCBvbiB0aGUgZW52ZWxvcGUgYnkgYSBjZXJ0YWluIGFtb3VudC5cbiAgQHBhcmFtIGluZGV4IHtudW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgYnJlYWtwb2ludCB0byBtb3ZlXG4gIEBwYXJhbSB4T2Zmc2V0IHtudW1iZXJ9IFggZGlzcGxhY2VtZW50LCBub3JtYWxpemVkIDAtMVxuICBAcGFyYW0geU9mZnNldCB7bnVtYmVyfSBZIGRpc3BsYWNlbWVudCwgbm9ybWFsaXplZCAwLTFcbiAgKi9cbiAgYWRqdXN0UG9pbnQoaW5kZXgseE9mZnNldCx5T2Zmc2V0KSB7XG4gICAgdGhpcy5ub2Rlc1tpbmRleF0ubW92ZSh0aGlzLm5vZGVzW2luZGV4XS54K3hPZmZzZXQsdGhpcy5ub2Rlc1tpbmRleF0ueSt5T2Zmc2V0KTtcbiAgICB0aGlzLnNjYWxlTm9kZShpbmRleCk7XG4gICAgdGhpcy5jYWxjdWxhdGVQb2ludHMoKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5wb2ludHMpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICBSZW1vdmUgYSBicmVha3BvaW50IGZyb20gdGhlIGVudmVsb3BlLlxuICBAcGFyYW0gaW5kZXgge251bWJlcn0gSW5kZXggb2YgdGhlIGJyZWFrcG9pbnQgdG8gcmVtb3ZlXG4gICovXG4gIGRlc3Ryb3lQb2ludChpbmRleCkge1xuICAgIHRoaXMubm9kZXNbaW5kZXhdLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBvaW50cygpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnBvaW50cyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG5cbiAgLyoqXG4gIFJlbW92ZSBhbGwgZXhpc3RpbmcgYnJlYWtwb2ludHMgYW5kIGFkZCBhbiBlbnRpcmVseSBuZXcgc2V0IG9mIGJyZWFrcG9pbnRzLlxuICBAcGFyYW0gYWxsUG9pbnRzIHthcnJheX0gQW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHgveSBwcm9wZXJ0aWVzIChub3JtYWxpemVkIDAtMSkuIEVhY2ggb2JqZWN0IGluIHRoZSBhcnJheSBzcGVjaWZpY2VzIHRoZSB4L3kgbG9jYXRpb24gb2YgYSBuZXcgYnJlYWtwb2ludCB0byBiZSBhZGRlZC5cbiAgKi9cbiAgc2V0UG9pbnRzKGFsbFBvaW50cykge1xuICAgIHdoaWxlICh0aGlzLm5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5ub2Rlc1swXS5kZXN0cm95KCk7XG4gICAgfVxuICAgIGFsbFBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgdGhpcy5hZGRQb2ludChwb2ludC54LHBvaW50LnkpO1xuICAgIH0pO1xuICAgIHRoaXMuY2FsY3VsYXRlUG9pbnRzKCk7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMucG9pbnRzKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL2VudmVsb3BlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZG9tID0gcmVxdWlyZSgnLi4vdXRpbC9kb20nKTtcbmxldCBJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi9jb3JlL2ludGVyZmFjZScpO1xuXG4vKipcbiAqIFNwZWN0cm9ncmFtXG4gKlxuICogQGRlc2NyaXB0aW9uIEF1ZGlvIHNwZWN0cnVtIHZpc3VhbGl6YXRpb25cbiAqXG4gKiBAZGVtbyA8c3BhbiBuZXh1cy11aT1cInNwZWN0cm9ncmFtXCI+PC9zcGFuPlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgc3BlY3Ryb2dyYW0gPSBuZXcgTmV4dXMuU3BlY3Ryb2dyYW0oJyN0YXJnZXQnKVxuICogc3BlY3Ryb2dyYW0uY29ubmVjdChteVdlYkF1ZGlvTm9kZSlcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHNwZWN0cm9ncmFtID0gbmV3IE5leHVzLlNwZWN0cm9ncmFtKCcjdGFyZ2V0Jyx7XG4gKiAgICdzaXplJzogWzMwMCwxNTBdXG4gKiB9KVxuICogc3BlY3Ryb2dyYW0uY29ubmVjdChteVdlYkF1ZGlvTm9kZSlcbiAqXG4gKiBAb3V0cHV0XG4gKiAmbmJzcDtcbiAqIE5vIGV2ZW50c1xuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVjdHJvZ3JhbSBleHRlbmRzIEludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICBzaXplOiBbMzAwLCAxNTBdXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cywgb3B0aW9ucywgZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5hbmFseXNlciA9IG51bGw7XG4gICAgdGhpcy5idWZmZXJMZW5ndGggPSAwO1xuICAgIHRoaXMuZGF0YUFycmF5ID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc291cmNlID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgYnVpbGRGcmFtZSgpIHtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBkb20uU21hcnRDYW52YXModGhpcy5wYXJlbnQpO1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY2FudmFzLmVsZW1lbnQ7XG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcbiAgICB0aGlzLmNhbnZhcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYW5hbHlzZXIpIHtcbiAgICAgIHRoaXMuYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEodGhpcy5kYXRhQXJyYXkpO1xuICAgIH1cblxuICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcnMuZmlsbDtcbiAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICB0aGlzLmNhbnZhcy5lbGVtZW50LndpZHRoLFxuICAgICAgdGhpcy5jYW52YXMuZWxlbWVudC5oZWlnaHRcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuc291cmNlICYmIHRoaXMuZGF0YUFycmF5KSB7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YUFycmF5KTtcblxuICAgICAgbGV0IGJhcldpZHRoID0gdGhpcy5jYW52YXMuZWxlbWVudC53aWR0aCAvIHRoaXMuYnVmZmVyTGVuZ3RoO1xuICAgICAgbGV0IGJhckhlaWdodDtcbiAgICAgIGxldCB4ID0gMDtcblxuICAgICAgbGV0IGRlZmluaXRpb24gPSB0aGlzLmNhbnZhcy5lbGVtZW50LndpZHRoIC8gNTA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWZmZXJMZW5ndGg7IGkgPSBpICsgZGVmaW5pdGlvbikge1xuICAgICAgICBiYXJIZWlnaHQgPSBNYXRoLm1heC5hcHBseShcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuZGF0YUFycmF5LnN1YmFycmF5KGksIGkgKyBkZWZpbml0aW9uKVxuICAgICAgICApO1xuICAgICAgICBiYXJIZWlnaHQgLz0gMjU1O1xuICAgICAgICBiYXJIZWlnaHQgKj0gdGhpcy5jYW52YXMuZWxlbWVudC5oZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9ycy5hY2NlbnQ7XG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgICAgeCxcbiAgICAgICAgICB0aGlzLmNhbnZhcy5lbGVtZW50LmhlaWdodCAtIGJhckhlaWdodCxcbiAgICAgICAgICBiYXJXaWR0aCAqIGRlZmluaXRpb24sXG4gICAgICAgICAgYmFySGVpZ2h0XG4gICAgICAgICk7XG5cbiAgICAgICAgeCArPSBiYXJXaWR0aCAqIGRlZmluaXRpb247XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gIEVxdWl2YWxlbnQgdG8gXCJwYXRjaGluZyBpblwiIGFuIGF1ZGlvIG5vZGUgdG8gdmlzdWFsaXplLlxuICBAcGFyYW0gbm9kZSB7QXVkaW9Ob2RlfSBUaGUgYXVkaW8gbm9kZSB0byB2aXN1YWxpemVcbiAgQGV4YW1wbGUgc3BlY3Ryb2dyYW0uY29ubmVjdCggVG9uZS5NYXN0ZXIgKTtcbiAgKi9cbiAgY29ubmVjdChub2RlKSB7XG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFuYWx5c2VyID0gbm9kZS5jb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgdGhpcy5hbmFseXNlci5mZnRTaXplID0gMjA0ODtcbiAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgdGhpcy5kYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlckxlbmd0aCk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLnNvdXJjZSA9IG5vZGU7XG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLmFuYWx5c2VyKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgU3RvcCB2aXN1YWxpemluZyB0aGUgc291cmNlIG5vZGUgYW5kIGRpc2Nvbm5lY3QgaXQuXG4gICovXG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZS5kaXNjb25uZWN0KHRoaXMuYW5hbHlzZXIpO1xuICAgIH1cblxuICAgIHRoaXMuYW5hbHlzZXIgPSBudWxsO1xuICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gMDtcbiAgICB0aGlzLmRhdGFBcnJheSA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZSAmJiB0aGlzLnNvdXJjZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY3VzdG9tRGVzdHJveSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9zcGVjdHJvZ3JhbS5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGRvbSA9IHJlcXVpcmUoJy4uL3V0aWwvZG9tJyk7XG5sZXQgbWF0aCA9IHJlcXVpcmUoJy4uL3V0aWwvbWF0aCcpO1xubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5cbi8qKlxuICogTWV0ZXJcbiAqXG4gKiBAZGVzY3JpcHRpb24gU3RlcmVvIGRlY2liZWwgbWV0ZXJcbiAqXG4gKiBAZGVtbyA8c3BhbiBuZXh1cy11aT1cIm1ldGVyXCI+PC9zcGFuPlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWV0ZXIgPSBuZXcgTmV4dXMuTWV0ZXIoJyN0YXJnZXQnKVxuICogbWV0ZXIuY29ubmVjdChteVdlYkF1ZGlvTm9kZSlcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG1ldGVyID0gbmV3IE5leHVzLk1ldGVyKCcjdGFyZ2V0Jywge1xuICogICBzaXplOiBbNzUsNzVdXG4gKiB9KVxuICogbWV0ZXIuY29ubmVjdChteVdlYkF1ZGlvTm9kZSlcbiAqXG4gKiBAb3V0cHV0XG4gKiAmbmJzcDtcbiAqIE5vIGV2ZW50c1xuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRlciBleHRlbmRzIEludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICBzaXplOiBbMzAsIDEwMF1cbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLCBvcHRpb25zLCBkZWZhdWx0cyk7XG5cbiAgICB0aGlzLmNoYW5uZWxzID0gMjtcbiAgICB0aGlzLnNwbGl0dGVyID0gbnVsbDtcbiAgICB0aGlzLmFuYWx5c2VycyA9IFtdO1xuICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gMDtcbiAgICB0aGlzLmRhdGFBcnJheSA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5kYiA9IC1JbmZpbml0eTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5tZXRlcldpZHRoID0gdGhpcy5jYW52YXMuZWxlbWVudC53aWR0aCAvIHRoaXMuY2hhbm5lbHM7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYnVpbGRGcmFtZSgpIHtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBkb20uU21hcnRDYW52YXModGhpcy5wYXJlbnQpO1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY2FudmFzLmVsZW1lbnQ7XG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcbiAgICB0aGlzLmNhbnZhcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9ycy5maWxsO1xuICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFJlY3QoXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIHRoaXMuY2FudmFzLmVsZW1lbnQud2lkdGgsXG4gICAgICB0aGlzLmNhbnZhcy5lbGVtZW50LmhlaWdodFxuICAgICk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5hbHlzZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlcnNbaV0uZ2V0RmxvYXRUaW1lRG9tYWluRGF0YSh0aGlzLmRhdGFBcnJheSk7XG5cbiAgICAgICAgbGV0IHJtcyA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGFBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJtcyArPSB0aGlzLmRhdGFBcnJheVtpXSAqIHRoaXMuZGF0YUFycmF5W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcm1zID0gTWF0aC5zcXJ0KHJtcyAvIHRoaXMuZGF0YUFycmF5Lmxlbmd0aCk7XG5cbiAgICAgICAgdGhpcy5kYiA9IDIwICogTWF0aC5sb2cxMChybXMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRiID4gLTIwMCAmJiB0aGlzLmRiICE9PSAtSW5maW5pdHkpIHtcbiAgICAgICAgdGhpcy5kYiAtPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYiA9IC1JbmZpbml0eTtcbiAgICAgIH1cblxuICAgICAgLy9jb25zb2xlLmxvZyhkYilcblxuICAgICAgaWYgKHRoaXMuZGIgPiAtNzApIHtcbiAgICAgICAgbGV0IGxpbmVhciA9IG1hdGgubm9ybWFsaXplKHRoaXMuZGIsIC03MCwgNSk7XG4gICAgICAgIGxldCBleHAgPSBsaW5lYXIgKiBsaW5lYXI7XG4gICAgICAgIGxldCB5ID0gbWF0aC5zY2FsZShleHAsIDAsIDEsIHRoaXMuZWxlbWVudC5oZWlnaHQsIDApO1xuXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcnMuYWNjZW50O1xuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICAgIHRoaXMubWV0ZXJXaWR0aCAqIGksXG4gICAgICAgICAgeSxcbiAgICAgICAgICB0aGlzLm1ldGVyV2lkdGgsXG4gICAgICAgICAgdGhpcy5jYW52YXMuZWxlbWVudC5oZWlnaHQgLSB5XG4gICAgICAgICk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlcmluZy4uLlwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICBFcXVpdmFsZW50IHRvIFwicGF0Y2hpbmcgaW5cIiBhbiBhdWRpbyBub2RlIHRvIHZpc3VhbGl6ZS5cbiAgQHBhcmFtIG5vZGUge0F1ZGlvTm9kZX0gVGhlIGF1ZGlvIG5vZGUgdG8gdmlzdWFsaXplXG4gIEBwYXJhbSBjaGFubmVscyB7bnVtYmVyfSAob3B0aW9uYWwpIFRoZSBudW1iZXIgb2YgY2hhbm5lbHMgaW4gdGhlIHNvdXJjZSBub2RlIHRvIHdhdGNoLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgaW50ZXJmYWNlIHdpbGwgbG9vayBmb3IgYSAuY2hhbm5lbENvdW50IHByb3BlcnR5IG9uIHRoZSBpbnB1dCBub2RlLiBJZiBpdCBkb2VzIG5vdCBleGlzdCwgdGhlIGludGVyZmFjZSB3aWxsIGRlZmF1bHQgdG8gMSBjaGFubmVsLlxuICBAZXhhbXBsZSBtZXRlci5jb25uZWN0KCBUb25lLk1hc3RlciwgMiApO1xuICAqL1xuICBjb25uZWN0KG5vZGUsIGNoYW5uZWxzKSB7XG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5uZWxzID0gY2hhbm5lbHMgfHwgbm9kZS5jaGFubmVsQ291bnQgfHwgMjtcblxuICAgIHRoaXMuc3BsaXR0ZXIgPSBub2RlLmNvbnRleHQuY3JlYXRlQ2hhbm5lbFNwbGl0dGVyKHRoaXMuY2hhbm5lbHMpO1xuXG4gICAgdGhpcy5hbmFseXNlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hhbm5lbHM7IGkrKykge1xuICAgICAgY29uc3QgYW5hbHlzZXIgPSBub2RlLmNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgIGFuYWx5c2VyLmZmdFNpemUgPSAxMDI0O1xuICAgICAgYW5hbHlzZXIuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gMTtcbiAgICAgIHRoaXMuc3BsaXR0ZXIuY29ubmVjdChhbmFseXNlciwgaSk7XG4gICAgICB0aGlzLmFuYWx5c2Vycy5wdXNoKGFuYWx5c2VyKTtcbiAgICB9XG4gICAgdGhpcy5idWZmZXJMZW5ndGggPSB0aGlzLmFuYWx5c2Vyc1swXS5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICB0aGlzLmRhdGFBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXJMZW5ndGgpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5tZXRlcldpZHRoID0gdGhpcy5jYW52YXMuZWxlbWVudC53aWR0aCAvIHRoaXMuY2hhbm5lbHM7XG5cbiAgICB0aGlzLnNvdXJjZSA9IG5vZGU7XG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLnNwbGl0dGVyKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgU3RvcCB2aXN1YWxpemluZyB0aGUgc291cmNlIG5vZGUgYW5kIGRpc2Nvbm5lY3QgaXQuXG4gICovXG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZS5kaXNjb25uZWN0KHRoaXMuc3BsaXR0ZXIpO1xuICAgIH1cblxuICAgIHRoaXMuc3BsaXR0ZXIgPSBudWxsO1xuICAgIHRoaXMuYW5hbHlzZXJzID0gW107XG4gICAgdGhpcy5idWZmZXJMZW5ndGggPSAwO1xuICAgIHRoaXMuZGF0YUFycmF5ID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlICYmIHRoaXMuc291cmNlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjdXN0b21EZXN0cm95KCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL21ldGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZG9tID0gcmVxdWlyZSgnLi4vdXRpbC9kb20nKTtcbmxldCBJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi9jb3JlL2ludGVyZmFjZScpO1xuXG4vKipcbiAqIE9zY2lsbG9zY29wZVxuICpcbiAqIEBkZXNjcmlwdGlvbiBWaXN1YWxpemVzIGEgd2F2ZWZvcm0ncyBzdHJlYW0gb2YgdmFsdWVzLlxuICpcbiAqIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwib3NjaWxsb3Njb3BlXCI+PC9zcGFuPlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgb3NjaWxsb3Njb3BlID0gbmV3IE5leHVzLk9zY2lsbG9zY29wZSgnI3RhcmdldCcpXG4gKiBvc2NpbGxvc2NvcGUuY29ubmVjdChteVdlYkF1ZGlvTm9kZSlcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG9zY2lsbG9zY29wZSA9IG5ldyBOZXh1cy5Pc2NpbGxvc2NvcGUoJyN0YXJnZXQnLHtcbiAqICAgJ3NpemUnOiBbMzAwLDE1MF1cbiAqIH0pXG4gKiBvc2NpbGxvc2NvcGUuY29ubmVjdChteVdlYkF1ZGlvTm9kZSlcbiAqXG4gKiBAb3V0cHV0XG4gKiAmbmJzcDtcbiAqIE5vIGV2ZW50c1xuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPc2NpbGxvc2NvcGUgZXh0ZW5kcyBJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgc2l6ZTogWzMwMCwgMTUwXVxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsIG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgIHRoaXMuYW5hbHlzZXIgPSBudWxsO1xuICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gMDtcbiAgICB0aGlzLmRhdGFBcnJheSA9IG51bGw7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYnVpbGRGcmFtZSgpIHtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBkb20uU21hcnRDYW52YXModGhpcy5wYXJlbnQpO1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY2FudmFzLmVsZW1lbnQ7XG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcbiAgICB0aGlzLmNhbnZhcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYW5hbHlzZXIpIHtcbiAgICAgIHRoaXMuYW5hbHlzZXIuZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKHRoaXMuZGF0YUFycmF5KTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JzLmZpbGw7XG4gICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdChcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgdGhpcy5jYW52YXMuZWxlbWVudC53aWR0aCxcbiAgICAgIHRoaXMuY2FudmFzLmVsZW1lbnQuaGVpZ2h0XG4gICAgKTtcblxuICAgIHRoaXMuY2FudmFzLmNvbnRleHQubGluZVdpZHRoID0gfn4odGhpcy5oZWlnaHQgLyAxMDAgKyAyKTtcbiAgICB0aGlzLmNhbnZhcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcnMuYWNjZW50O1xuXG4gICAgdGhpcy5jYW52YXMuY29udGV4dC5iZWdpblBhdGgoKTtcblxuICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgdmFyIHNsaWNlV2lkdGggPSAodGhpcy5jYW52YXMuZWxlbWVudC53aWR0aCAqIDEuMCkgLyB0aGlzLmJ1ZmZlckxlbmd0aDtcbiAgICAgIHZhciB4ID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ1ZmZlckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB2ID0gdGhpcy5kYXRhQXJyYXlbaV0gLyAxMjguMDtcbiAgICAgICAgdmFyIHkgPSAodiAqIHRoaXMuY2FudmFzLmVsZW1lbnQuaGVpZ2h0KSAvIDI7XG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0Lm1vdmVUbyh4LCB5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmxpbmVUbyh4LCB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHggKz0gc2xpY2VXaWR0aDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5tb3ZlVG8oMCwgdGhpcy5jYW52YXMuZWxlbWVudC5oZWlnaHQgLyAyKTtcbiAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQubGluZVRvKFxuICAgICAgICB0aGlzLmNhbnZhcy5lbGVtZW50LndpZHRoLFxuICAgICAgICB0aGlzLmNhbnZhcy5lbGVtZW50LmhlaWdodCAvIDJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5jYW52YXMuY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIC8qKlxuICBFcXVpdmFsZW50IHRvIFwicGF0Y2hpbmcgaW5cIiBhbiBhdWRpbyBub2RlIHRvIHZpc3VhbGl6ZS5cbiAgQHBhcmFtIG5vZGUge0F1ZGlvTm9kZX0gVGhlIGF1ZGlvIG5vZGUgdG8gdmlzdWFsaXplXG4gIEBleGFtcGxlIG9zY2lsbG9zY29wZS5jb25uZWN0KCBUb25lLk1hc3RlciApO1xuICAqL1xuXG4gIGNvbm5lY3Qobm9kZSkge1xuICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmFseXNlciA9IG5vZGUuY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgIHRoaXMuYW5hbHlzZXIuZmZ0U2l6ZSA9IDIwNDg7XG4gICAgdGhpcy5idWZmZXJMZW5ndGggPSB0aGlzLmFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIHRoaXMuZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXJMZW5ndGgpO1xuICAgIHRoaXMuYW5hbHlzZXIuZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKHRoaXMuZGF0YUFycmF5KTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMuc291cmNlID0gbm9kZTtcbiAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMuYW5hbHlzZXIpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICBTdG9wIHZpc3VhbGl6aW5nIHRoZSBzb3VyY2Ugbm9kZSBhbmQgZGlzY29ubmVjdCBpdC5cbiAgKi9cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlLmRpc2Nvbm5lY3QodGhpcy5hbmFseXNlcik7XG4gICAgfVxuXG4gICAgdGhpcy5hbmFseXNlciA9IG51bGw7XG4gICAgdGhpcy5idWZmZXJMZW5ndGggPSAwO1xuICAgIHRoaXMuZGF0YUFycmF5ID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlICYmIHRoaXMuc291cmNlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjdXN0b21EZXN0cm95KCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL29zY2lsbG9zY29wZS5qcyIsIi8qXG5NYWluIGNvbmNlcHQ6XG5zeW50aCA9IG5ldyBOZXh1cy5SYWNrKCdlbGVtZW50SUQnKTtcblxuVHJhbnNmb3JtIGFsbCBlbGVtZW50cyBpbnNpZGUgdGhlIGRpdlxuc3ludGguZWxlbWVudElEIHdpbGwgaG9sZCB0aGUgZmlyc3Qgc2xpZGVyIGludGVyZmFjZVxuXG4yKSBJbiBmdXR1cmUsIHBvdGVudGlhbGx5IHdyaXRpbmcgYSByYWNrIHRoYXQgaXMgcmUtdXNhYmxlP1xuQ291bGQgYWxzbyB0YWtlIEpTT05cblxubmV3IE5leHVzLlJhY2soJyN0YXJnZXQnLHtcbiAgcHJlOiAoKSA9PiB7XG4gICAgY3JlYXRlIHNvbWUgZGl2cyBoZXJlLCBvciBzb21lIGF1ZGlvIGNvZGVcbiAgfSxcbiAgaW50ZXJmYWNlOiB7XG4gICAgc2xpZGVyMTogTmV4dXMuYWRkLnNsaWRlcih7XG4gICAgICB0b3A6MTAsXG4gICAgICBsZWZ0OjEwLFxuICAgICAgd2lkdGg6NTAsXG4gICAgICBoZWlnaHQ6MTAwLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxMDAsXG4gICAgICBzdGVwOiAxXG4gICAgfSksXG4gICAgd2F2ZTE6IE5leHVzLmFkZC53YXZlZm9ybSh7XG4gICAgICBmaWxlOiAnLi9wYXRoL3RvL2ZpbGUubXAzJyxcbiAgICAgIHdpZHRoOjUwMCxcbiAgICAgIGhlaWdodDoxMDAsXG4gICAgICBtb2RlOiAncmFuZ2UnXG4gICAgfSlcbiAgfSxcbiAgaW5pdDogKCkgPT4ge1xuICAgIC8vIHNvbWUgYXVkaW8gaW5pdCBjb2RlIGdvZXMgaGVyZS4uLlxuICB9XG59KTtcblxuKi9cblxuaW1wb3J0ICogYXMgdHJhbnNmb3JtIGZyb20gJy4uL3V0aWwvdHJhbnNmb3JtJztcbmltcG9ydCBkb20gZnJvbSAnLi4vdXRpbC9kb20nO1xuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9tYWluJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFjayB7XG5cbiAgY29uc3RydWN0b3IodGFyZ2V0LCBzZXR0aW5ncykge1xuXG4gICAgdGhpcy5tZXRhID0ge307XG4gICAgdGhpcy5tZXRhLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLm1ldGEucGFyZW50ID0gZG9tLnBhcnNlRWxlbWVudCh0YXJnZXQpOyAvLyBzaG91bGQgYmUgYSBnZW5lcmljIGZ1bmN0aW9uIGZvciBwYXJzaW5nIGEgJ3RhcmdldCcgYXJndW1lbnQgdGhhdCBjaGVja3MgZm9yIHN0cmluZy9ET00valFVRVJZXG4gICAgdGhpcy5tZXRhLmNvbG9ycyA9IHt9O1xuXG4gICAgaWYgKHNldHRpbmdzKSB7XG4gICAgICB0aGlzLm1ldGEuYXR0cmlidXRlID0gc2V0dGluZ3MuYXR0cmlidXRlIHx8ICduZXh1cy11aSc7XG4gICAgICB0aGlzLm1ldGEudGl0bGUgPSBzZXR0aW5ncy5uYW1lIHx8IGZhbHNlO1xuICAgICAgdGhpcy5tZXRhLm9wZW4gPSBzZXR0aW5ncy5vcGVuIHx8IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGEuYXR0cmlidXRlID0gJ25leHVzLXVpJztcbiAgICAgIHRoaXMubWV0YS50aXRsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5tZXRhLm9wZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgZGVmYXVsdENvbG9ycyA9IGNvbG9ycygpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICB0aGlzLm1ldGEuY29sb3JzLmFjY2VudCA9IGRlZmF1bHRDb2xvcnMuYWNjZW50O1xuICAgIHRoaXMubWV0YS5jb2xvcnMuZmlsbCA9IGRlZmF1bHRDb2xvcnMuZmlsbDtcbiAgICB0aGlzLm1ldGEuY29sb3JzLmxpZ2h0ID0gZGVmYXVsdENvbG9ycy5saWdodDtcbiAgICB0aGlzLm1ldGEuY29sb3JzLmRhcmsgPSBkZWZhdWx0Q29sb3JzLmRhcms7XG4gICAgdGhpcy5tZXRhLmNvbG9ycy5tZWRpdW1MaWdodCA9IGRlZmF1bHRDb2xvcnMubWVkaXVtTGlnaHQ7XG4gICAgdGhpcy5tZXRhLmNvbG9ycy5tZWRpdW1EYXJrID0gZGVmYXVsdENvbG9ycy5tZWRpdW1EYXJrO1xuICAgIHRoaXMuYnVpbGRJbnRlcmZhY2UoKTtcbiAgICB0aGlzLmNvbG9ySW50ZXJmYWNlKCk7XG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcbiAgICB0aGlzLm1ldGEucGFyZW50LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICB0aGlzLm1ldGEucGFyZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgdGhpcy5tZXRhLnBhcmVudC5zdHlsZS5tb3pVc2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHRoaXMubWV0YS5wYXJlbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICdub25lJztcblxuICAgIHRoaXMubWV0YS5jb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgd2hpbGUgKHRoaXMubWV0YS5wYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMubWV0YS5jb250ZW50cy5hcHBlbmRDaGlsZCh0aGlzLm1ldGEucGFyZW50LmNoaWxkTm9kZXNbMF0pO1xuICAgIH1cblxuICAgIHRoaXMubWV0YS5jb250ZW50cy5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG4gICAgdGhpcy5tZXRhLmNvbnRlbnRzLnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICAgIGlmICh0aGlzLm1ldGEudGl0bGUpIHtcbiAgICAgIHRoaXMubWV0YS50aXRsZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5tZXRhLnRpdGxlQmFyLmlubmVySFRNTCA9IHRoaXMubWV0YS50aXRsZTtcbiAgICAgIHRoaXMubWV0YS50aXRsZUJhci5zdHlsZS5mb250RmFtaWx5ID0gJ2FyaWFsJztcbiAgICAgIHRoaXMubWV0YS50aXRsZUJhci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB0aGlzLm1ldGEudGl0bGVCYXIuc3R5bGUuY29sb3IgPSAnIzg4OCc7XG4gICAgICB0aGlzLm1ldGEudGl0bGVCYXIuc3R5bGUucGFkZGluZyA9ICc3cHgnO1xuICAgICAgdGhpcy5tZXRhLnRpdGxlQmFyLnN0eWxlLmZvbnRTaXplID0gJzEycHgnO1xuXG4gICAgICB0aGlzLm1ldGEuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRoaXMubWV0YS5idXR0b24uc3R5bGUudG9wID0gJzVweCcgO1xuICAgICAgdGhpcy5tZXRhLmJ1dHRvbi5zdHlsZS5yaWdodCA9ICc1cHgnIDtcbiAgICAgIHRoaXMubWV0YS5idXR0b24uaW5uZXJIVE1MID0gJy0nO1xuICAgICAgdGhpcy5tZXRhLmJ1dHRvbi5zdHlsZS5wYWRkaW5nID0gJzBweCA1cHggMnB4JztcbiAgICAgIHRoaXMubWV0YS5idXR0b24uc3R5bGUubGluZUhlaWdodCA9ICcxMnB4JztcbiAgICAgIHRoaXMubWV0YS5idXR0b24uc3R5bGUuZm9udFNpemUgPSAnMTVweCc7XG5cbiAgICAgIHRoaXMubWV0YS5idXR0b24uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgdGhpcy5tZXRhLmJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm1ldGEuY29sb3JzLm1lZGl1bURhcms7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWV0YS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5tZXRhLmJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm1ldGEuY29sb3JzLm1lZGl1bUxpZ2h0O1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tZXRhLm9wZW4pIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuICAgICAgdGhpcy5tZXRhLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRoaXMubWV0YS5idXR0b24pO1xuXG4gICAgICB0aGlzLm1ldGEucGFyZW50LmFwcGVuZENoaWxkKHRoaXMubWV0YS50aXRsZUJhcik7XG4gICAgfVxuICAgIHRoaXMubWV0YS5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5tZXRhLmNvbnRlbnRzKTtcblxuICAvLyAgdmFyIHdpZHRoID0gdGhpcy5tZXRhLnBhcmVudC5zdHlsZS53aWR0aCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5tZXRhLnBhcmVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKTtcbi8vICAgIHRoaXMubWV0YS5wYXJlbnQuc3R5bGUud2lkdGggPSB3aWR0aDtcblxuICAgIGxldCB1aSA9IHRyYW5zZm9ybS5zZWN0aW9uKHRoaXMubWV0YS50YXJnZXQsIHRoaXMubWV0YS5hdHRyaWJ1dGUpO1xuICAgIGZvciAodmFyIGtleSBpbiB1aSkge1xuICAgICAgdGhpc1trZXldID0gdWlba2V5XTtcbiAgICB9XG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcbiAgICBpZiAodGhpcy5tZXRhLnRpdGxlKSB7XG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMubWV0YS5jb2xvcnMubWVkaXVtTGlnaHQ7XG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLnN0eWxlLmJvcmRlciA9ICdzb2xpZCAwcHggJyt0aGlzLm1ldGEuY29sb3JzLmZpbGw7XG4gICAgICB0aGlzLm1ldGEucGFyZW50LnN0eWxlLmJvcmRlciA9ICdzb2xpZCAxcHggJyt0aGlzLm1ldGEuY29sb3JzLm1lZGl1bUxpZ2h0O1xuICAgICAgdGhpcy5tZXRhLnBhcmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm1ldGEuY29sb3JzLmxpZ2h0O1xuICAgICAgdGhpcy5tZXRhLnRpdGxlQmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMubWV0YS5jb2xvcnMuZmlsbDtcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMubWV0YS5jb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLm1ldGEub3BlbiA9IHRydWU7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMubWV0YS5jb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMubWV0YS5vcGVuID0gZmFsc2U7XG4gIH1cblxuICBjb2xvcml6ZSh0eXBlLGNvbG9yKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMpIHtcbiAgICAgIGlmICh0aGlzW2tleV0uY29sb3JpemUpIHtcbiAgICAgICAgdGhpc1trZXldLmNvbG9yaXplKHR5cGUsY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1ldGEuY29sb3JzW3R5cGVdID0gY29sb3I7XG4gICAgdGhpcy5jb2xvckludGVyZmFjZSgpO1xuICB9XG5cbiAgZW1wdHkoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMpIHtcbiAgICAgIGlmICh0aGlzW2tleV0uZGVzdHJveSkge1xuICAgICAgICB0aGlzW2tleV0uZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvY29yZS9yYWNrLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZG9tIGZyb20gJy4uL3V0aWwvZG9tJztcbmltcG9ydCBJbnRlcmZhY2VzIGZyb20gJy4uL2ludGVyZmFjZXMvJztcblxubGV0IGNyZWF0ZUludGVyZmFjZUlEID0gKHdpZGdldCxpbnRlcmZhY2VJRHMpID0+IHtcbiAgbGV0IHR5cGUgPSB3aWRnZXQudHlwZTtcbiAgaWYgKGludGVyZmFjZUlEc1t0eXBlXSkge1xuICAgIGludGVyZmFjZUlEc1t0eXBlXSsrO1xuICB9IGVsc2Uge1xuICAgIGludGVyZmFjZUlEc1t0eXBlXSA9IDE7XG4gIH1cbiAgcmV0dXJuICggdHlwZSArIGludGVyZmFjZUlEc1t0eXBlXSApO1xufTtcblxubGV0IGVsZW1lbnQgPSAoZWxlbWVudCx0eXBlLG9wdGlvbnMpID0+IHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgYXR0ID0gZWxlbWVudC5hdHRyaWJ1dGVzW2ldO1xuICAvLyAgdHJ5IHtcbiAgLy8gICAgb3B0aW9uc1thdHQubm9kZU5hbWVdID0gZXZhbChhdHQubm9kZVZhbHVlKTtcbiAgLy8gIH0gY2F0Y2goZSkge1xuICAgICAgb3B0aW9uc1thdHQubm9kZU5hbWVdID0gYXR0Lm5vZGVWYWx1ZTtcbiAgLy8gIH1cbiAgfVxuICB0eXBlID0gdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgbGV0IHdpZGdldCA9IG5ldyBJbnRlcmZhY2VzW3R5cGVdKGVsZW1lbnQsb3B0aW9ucyk7XG4gIHdpZGdldC5pZCA9IGVsZW1lbnQuaWQ7XG4gIHJldHVybiB3aWRnZXQ7XG59O1xuXG5cbmxldCBzZWN0aW9uID0gKHBhcmVudCxrZXl3b3JkKSA9PiB7XG5cbiAga2V5d29yZCA9IGtleXdvcmQgfHwgJ25leHVzLXVpJztcblxuICBsZXQgaW50ZXJmYWNlSURzID0ge307XG5cbiAgbGV0IGNvbnRhaW5lciA9IGRvbS5wYXJzZUVsZW1lbnQocGFyZW50KTtcblxuICBsZXQgdWkgPSB7fTtcblxuICBsZXQgaHRtbEVsZW1lbnRzID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJyk7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBmb3IgKGxldCBpPTA7IGk8aHRtbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZWxlbWVudHMucHVzaChodG1sRWxlbWVudHNbaV0pO1xuICB9XG4gIGZvciAobGV0IGk9MDtpPGVsZW1lbnRzLmxlbmd0aDtpKyspIHtcbiAgICBsZXQgdHlwZSA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShrZXl3b3JkKTtcbiAgICBpZiAodHlwZSkge1xuICAgICAgbGV0IGZvcm1hdHRlZFR5cGUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGtleSBpbiBJbnRlcmZhY2VzKSB7XG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCk9PT1rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIGZvcm1hdHRlZFR5cGUgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGZvcm1hdHRlZFR5cGUpO1xuICAgICAgbGV0IHdpZGdldCA9IGVsZW1lbnQoZWxlbWVudHNbaV0sZm9ybWF0dGVkVHlwZSk7XG4gICAgICBpZiAod2lkZ2V0LmlkKSB7XG4gICAgICAgIHVpW3dpZGdldC5pZF0gPSB3aWRnZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaWQgPSBjcmVhdGVJbnRlcmZhY2VJRCh3aWRnZXQsaW50ZXJmYWNlSURzKTtcbiAgICAgICAgdWlbaWRdID0gd2lkZ2V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1aTtcblxufTtcblxubGV0IGFkZCA9ICh0eXBlLHBhcmVudCxvcHRpb25zKSA9PiB7XG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmIChwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBkb20ucGFyc2VFbGVtZW50KHBhcmVudCk7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgfVxuICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KTtcbiAgb3B0aW9ucy50YXJnZXQgPSB0YXJnZXQ7XG4gIGlmIChvcHRpb25zLnNpemUpIHtcbiAgICB0YXJnZXQuc3R5bGUud2lkdGggPSBvcHRpb25zLnNpemVbMF0gKyAncHgnO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLnNpemVbMV0gKyAncHgnO1xuICB9XG4gIHJldHVybiBlbGVtZW50KHRhcmdldCx0eXBlLG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IHsgZWxlbWVudCB9O1xuZXhwb3J0IHsgc2VjdGlvbiB9O1xuZXhwb3J0IHsgYWRkIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvdXRpbC90cmFuc2Zvcm0uanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBtYXRoIGZyb20gJy4uL3V0aWwvbWF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1bmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0aGUgc2NhbGUgYXMgcmF0aW9zXG4gICAgdGhpcy5zY2FsZSA9IFtdO1xuXG4gICAgLy8gaS9vIG1vZGVzXG4gICAgdGhpcy5tb2RlID0ge1xuICAgICAgb3V0cHV0OiAnZnJlcXVlbmN5JyxcbiAgICAgIGlucHV0OiAnc3RlcCdcbiAgICB9O1xuXG4gICAgLy8gRVQgbWFqb3JcbiAgICB0aGlzLmV0bWFqb3IgPSBbXG4gICAgICAyNjEuNjI1NTgsXG4gICAgICAyOTMuNjY0NzY0LFxuICAgICAgMzI5LjYyNzU2MyxcbiAgICAgIDM0OS4yMjgyNDEsXG4gICAgICAzOTEuOTk1NDIyLFxuICAgICAgNDQwLFxuICAgICAgNDkzLjg4MzMwMSxcbiAgICAgIDUyMy4yNTExNlxuICAgIF07XG5cbiAgICAvLyBSb290IGZyZXF1ZW5jeS5cbiAgICB0aGlzLnJvb3QgPSBtYXRoLm10b2YoNjApOyAvLyAqIE1hdGgucG93KDIsKDYwLTY5KS8xMik7XG5cbiAgICAvLyBkZWZhdWx0IGlzIGEgbWFqb3Igc2NhbGVcbiAgICB0aGlzLmNyZWF0ZVNjYWxlKDAsIDIsIDQsIDUsIDcsIDksIDExKTtcbiAgfVxuXG4gIC8qIFJldHVybiBkYXRhIGluIHRoZSBtb2RlIHlvdSBhcmUgaW4gKGZyZXEsIHJhdGlvLCBvciBtaWRpKSAqL1xuICBub3RlKGlucHV0LCBvY3RhdmUpIHtcbiAgICBsZXQgbmV3dmFsdWU7XG5cbiAgICBpZiAodGhpcy5tb2RlLm91dHB1dCA9PT0gJ2ZyZXF1ZW5jeScpIHtcbiAgICAgIG5ld3ZhbHVlID0gdGhpcy5mcmVxdWVuY3koaW5wdXQsIG9jdGF2ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUub3V0cHV0ID09PSAncmF0aW8nKSB7XG4gICAgICBuZXd2YWx1ZSA9IHRoaXMucmF0aW8oaW5wdXQsIG9jdGF2ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUub3V0cHV0ID09PSAnTUlESScpIHtcbiAgICAgIG5ld3ZhbHVlID0gdGhpcy5NSURJKGlucHV0LCBvY3RhdmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXd2YWx1ZSA9IHRoaXMuZnJlcXVlbmN5KGlucHV0LCBvY3RhdmUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXd2YWx1ZTtcbiAgfVxuXG4gIC8qIFJldHVybiBmcmVxIGRhdGEgKi9cbiAgZnJlcXVlbmN5KHN0ZXBJbiwgb2N0YXZlSW4pIHtcbiAgICBpZiAodGhpcy5tb2RlLmlucHV0ID09PSAnbWlkaScgfHwgdGhpcy5tb2RlLmlucHV0ID09PSAnTUlESScpIHtcbiAgICAgIHRoaXMuc3RlcEluICs9IDYwO1xuICAgIH1cblxuICAgIC8vIHdoYXQgb2N0YXZlIGlzIG91ciBpbnB1dFxuICAgIGxldCBvY3RhdmUgPSBNYXRoLmZsb29yKHN0ZXBJbiAvIHRoaXMuc2NhbGUubGVuZ3RoKTtcblxuICAgIGlmIChvY3RhdmVJbikge1xuICAgICAgb2N0YXZlICs9IG9jdGF2ZUluO1xuICAgIH1cblxuICAgIC8vIHdoaWNoIHNjYWxlIGRlZ3JlZSAoMCAtIHNjYWxlIGxlbmd0aCkgaXMgb3VyIGlucHV0XG4gICAgbGV0IHNjYWxlRGVncmVlID0gc3RlcEluICUgdGhpcy5zY2FsZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoc2NhbGVEZWdyZWUgPCAwKSB7XG4gICAgICBzY2FsZURlZ3JlZSArPSB0aGlzLnNjYWxlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBsZXQgcmF0aW8gPSB0aGlzLnNjYWxlW3NjYWxlRGVncmVlXTtcblxuICAgIGxldCBmcmVxID0gdGhpcy5yb290ICogcmF0aW87XG5cbiAgICBmcmVxID0gZnJlcSAqIE1hdGgucG93KDIsIG9jdGF2ZSk7XG5cbiAgICAvLyB0cnVuY2F0ZSBpcnJhdGlvbmFsIG51bWJlcnNcbiAgICBmcmVxID0gTWF0aC5mbG9vcihmcmVxICogMTAwMDAwMDAwMDAwKSAvIDEwMDAwMDAwMDAwMDtcblxuICAgIHJldHVybiBmcmVxO1xuICB9XG5cbiAgLyogRm9yY2UgcmV0dXJuIHJhdGlvIGRhdGEgKi9cblxuICByYXRpbyhzdGVwSW4sIG9jdGF2ZUluKSB7XG4gICAgaWYgKHRoaXMubW9kZS5pbnB1dCA9PT0gJ21pZGknIHx8IHRoaXMubW9kZS5pbnB1dCA9PT0gJ01JREknKSB7XG4gICAgICB0aGlzLnN0ZXBJbiArPSA2MDtcbiAgICB9XG5cbiAgICAvLyB3aGF0IG9jdGF2ZSBpcyBvdXIgaW5wdXRcbiAgICBsZXQgb2N0YXZlID0gTWF0aC5mbG9vcihzdGVwSW4gLyB0aGlzLnNjYWxlLmxlbmd0aCk7XG5cbiAgICBpZiAob2N0YXZlSW4pIHtcbiAgICAgIG9jdGF2ZSArPSBvY3RhdmVJbjtcbiAgICB9XG5cbiAgICAvLyB3aGljaCBzY2FsZSBkZWdyZWUgKDAgLSBzY2FsZSBsZW5ndGgpIGlzIG91ciBpbnB1dFxuICAgIGxldCBzY2FsZURlZ3JlZSA9IHN0ZXBJbiAlIHRoaXMuc2NhbGUubGVuZ3RoO1xuXG4gICAgLy8gd2hhdCByYXRpbyBpcyBvdXIgaW5wdXQgdG8gb3VyIGtleVxuICAgIGxldCByYXRpbyA9IE1hdGgucG93KDIsIG9jdGF2ZSkgKiB0aGlzLnNjYWxlW3NjYWxlRGVncmVlXTtcblxuICAgIHJhdGlvID0gTWF0aC5mbG9vcihyYXRpbyAqIDEwMDAwMDAwMDAwMCkgLyAxMDAwMDAwMDAwMDA7XG5cbiAgICByZXR1cm4gcmF0aW87XG4gIH1cblxuICAvKiBGb3JjZSByZXR1cm4gYWRqdXN0ZWQgTUlESSBkYXRhICovXG5cbiAgTUlESShzdGVwSW4sIG9jdGF2ZUluKSB7XG4gICAgbGV0IG5ld3ZhbHVlID0gdGhpcy5mcmVxdWVuY3koc3RlcEluLCBvY3RhdmVJbik7XG5cbiAgICBsZXQgbiA9IDY5ICsgKDEyICogTWF0aC5sb2cobmV3dmFsdWUgLyA0NDApKSAvIE1hdGgubG9nKDIpO1xuXG4gICAgbiA9IE1hdGguZmxvb3IobiAqIDEwMDAwMDAwMDApIC8gMTAwMDAwMDAwMDtcblxuICAgIHJldHVybiBuO1xuICB9XG5cbiAgY3JlYXRlU2NhbGUoKSB7XG4gICAgbGV0IG5ld1NjYWxlID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5ld1NjYWxlLnB1c2gobWF0aC5tdG9mKDYwICsgYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHRoaXMubG9hZFNjYWxlRnJvbUZyZXF1ZW5jaWVzKG5ld1NjYWxlKTtcbiAgfVxuXG4gIGNyZWF0ZUpJU2NhbGUoKSB7XG4gICAgdGhpcy5zY2FsZSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnNjYWxlLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gIH1cblxuICBsb2FkU2NhbGVGcm9tRnJlcXVlbmNpZXMoZnJlcXMpIHtcbiAgICB0aGlzLnNjYWxlID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmVxcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zY2FsZS5wdXNoKGZyZXFzW2ldIC8gZnJlcXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIExvYWQgYSBuZXcgc2NhbGUgKi9cblxuICBsb2FkU2NhbGUobmFtZSkge1xuICAgIC8qIGxvYWQgdGhlIHNjYWxlICovXG4gICAgbGV0IGZyZXFzID0gdGhpcy5zY2FsZXNbbmFtZV0uZnJlcXVlbmNpZXM7XG4gICAgdGhpcy5sb2FkU2NhbGVGcm9tRnJlcXVlbmNpZXMoZnJlcXMpO1xuICB9XG5cbiAgLyogU2VhcmNoIHRoZSBuYW1lcyBvZiB0dW5pbmdzXG4gIFx0IFJldHVybnMgYW4gYXJyYXkgb2YgbmFtZXMgb2YgdHVuaW5ncyAqL1xuXG4gIHNlYXJjaChsZXR0ZXJzKSB7XG4gICAgbGV0IHBvc3NpYmxlID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc2NhbGVzKSB7XG4gICAgICBpZiAoa2V5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsZXR0ZXJzLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICBwb3NzaWJsZS5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwb3NzaWJsZTtcbiAgfVxuXG4gIC8qIFJldHVybiBhIGNvbGxlY3Rpb24gb2Ygbm90ZXMgYXMgYW4gYXJyYXkgKi9cblxuICBjaG9yZChtaWRpcykge1xuICAgIGxldCBvdXRwdXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pZGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvdXRwdXQucHVzaCh0aGlzLm5vdGUobWlkaXNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL3R1bmluZy90dW5pbmcuanMiLCIndXNlIHN0cmljdCc7XG5cbi8vRGlzYWJsZSBqc2hpbnQgd2FybmluZyBjb25jZXJuaW5nIHRyYWlsaW5nIHJlZ3VsYXIgcGFyYW1zXG4vKmpzaGludCAtVzEzOCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyB7XG4gICAgLy9pZiBub24tZXhpc3RlbnQgYnV0dG9ucyBhcmUgc3dpdGNoZWQsIHRoZXkgYXJlIGlnbm9yZWRcblxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCA9IDMsIC4uLm9uVmFscykge1xuICAgICAgICAvL2VhY2ggb3B0aW9uYWwgJ29uVmFscycgYXJndW1lbnQgc3dpdGNoZXMgb24gdGhhdCB2YWx1ZSBpbiB0aGUgUmFkaW8gaWYgaXQgZXhpc3RzXG4gICAgICAgIC8vSW4gdGhlIGV4YW1wbGUgYmVsb3csIGEgMy1idXR0b24gcmFkaW8gaXMgY3JlYXRlZCwgaW5kZXggMCBpcyBzd2l0Y2hlZCBvbiwgaW5kZXggMSBpcyBzd2l0Y2hlZCBvbiB0aGVuIHRoZW4gYXR0ZW1wdGVkIGFnYWluIHByb2R1Y2luZyBhbiB3YXJuaW5nLCBhbmQgdGhlIGZpbmFsIGFyZ3VtZW50IHByb2R1Y2VzIGEgd2FybmluZyBiZWNhdXNlIHRoZSBpbmRleCB2YWx1ZSBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgLy9FeGFtcGxlOlxuICAgICAgICAvL2AgIHJhZGlvID0gbmV3IFJhZGlvKDMsIDAsIDEsIDEsIDMpO1xuICAgICAgICAvL+KApiAgWzEsMSwwXVxuXG4gICAgICAgIGlmIChsZW5ndGggPCAwKSB7IGxlbmd0aCA9IDE7IH1cblxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5vblZhbHMgPSBvblZhbHM7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDApO1xuXG4gICAgICAgIGlmIChvblZhbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5vbiguLi5vblZhbHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXJyYXkuZmlsbCgwKTtcbiAgICAgICAgdGhpcy5hcnJheVt2YWx1ZV0gPSAxO1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgICB9XG5cbiAgICBmbGlwKC4uLnZhbHVlcykge1xuICAgICAgICAvL2ZsaXBzIHRoZSBzcGVjaWZpZWQgdmFsdWVzLiBpZiBubyB2YWx1ZSBpcyBzcGVjaWZpZWQsIGZsaXBzIGFsbCBidXR0b25zXG4gICAgICAgIGxldCBhID0gdGhpcy5hcnJheTtcbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYgPiBhLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiBBbm9uUmFkaW9bJyArIHYgKyAnXSBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFbdl0gPSAoYVt2XSA/IDAgOiAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGEuZm9yRWFjaChmdW5jdGlvbih2LCBpLCBhcnIpIHtcbiAgICAgICAgICAgICAgICBhcnJbaV0gPSAodiA/IDAgOiAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIG9uKC4uLnZhbHVlcykge1xuICAgICAgICAvL3N3aXRjaCBvbiB0aGUgc3BlY2lmaWVkIHZhbHVlcy4gaWYgbm8gdmFsdWUgc3BlY2lmaWVkLCBmbGlwcyBvbiBhbGwgYnV0dG9uc1xuICAgICAgICBsZXQgYSA9IHRoaXMuYXJyYXk7XG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGlmICh2ID4gYS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignV2FybmluZzogQW5vblJhZGlvWycgKyB2ICsgJ10gZXhjZWVkcyBzaXplIG9mIG9iamVjdCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhW3ZdID09PSAxKSB7IGNvbnNvbGUud2FybignV2FybmluZzogQW5vblJhZGlvWycgKyB2ICsgJ10gd2FzIGFscmVhZHkgb24uJyk7IH1cbiAgICAgICAgICAgICAgICAgICAgYVt2XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhLmZpbGwoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgb2ZmKC4uLnZhbHVlcykge1xuICAgICAgICAvL3N3aXRjaCBvZmYgdGhlIHNwZWNpZmllZCB2YWx1ZXMuIGlmIG5vIHZhbHVlIHNwZWNpZmllZCwgZmxpcHMgb2ZmIGFsbCBidXR0b25zXG4gICAgICAgIGxldCBhID0gdGhpcy5hcnJheTtcbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgYVt2XSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGEuZmlsbCgwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvbW9kZWxzL3JhZGlvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==