'use strict';

let Interface = require('../core/interface');
let Step = require('../models/step');
let math = require('../util/math');
let util = require('../util/util');

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


/*
  - add param for changeFactor
  - add param for decimal pad
  - add format method
  - if step is int, prevent change events on float value change
*/

export default class Number extends Interface {

  constructor() {

    let options = ['value'];

    let defaults = {
      'size': [60,30],
      'value': 0,
      'min': 0,
      'max': 20000,
      'step': 1
    };

    super(arguments,options,defaults);

    this._value = new Step(this.settings.min,this.settings.max,this.settings.step,this.settings.value);

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
    window.NUMBER = this
  }

  buildFrame() {
    this.element = document.createElement('input');
    this.element.type = 'text';

    this.element.addEventListener('blur', function () {
      this.element.style.backgroundColor = this.colors.fill;
      this.element.style.color = this.colors.dark;
      if (this.element.value !== this.value) {
        this.value = parseFloat(this.element.value);
        this.render();
        // console.log('blur', this.element.value, this.value)
      }
    }.bind(this));

    util.setInputFilter(this.element, function(value) {
      // TODO: allow format override
      // return /^-?\d*\.?\d*$/.test(value); // only decimals
      // return /^[0-9a-zA-Z]+$/.test(value); // all alphanumeric 
      if(window._debug='nexus') console.log("input filter", value, /^[ A-Za-z0-9./+-]*$/.test(value));
      return /^[ A-Za-z0-9./+-]*$/.test(value); // all alphanumeric plus decimal
    });

    this.element.addEventListener('keydown', function (e) {
      if (e.which===13) {
        this.element.blur();
        this.value = this.element.value;
        // this.emit('change',this.value);
        // console.log('emit:change:keydown', this.value, this._value)
        this.render();
      }
    }.bind(this), true);

    this.parent.appendChild(this.element);

  }

  sizeInterface() {

    this._minDimension = Math.min(this.width,this.height);

    let styles = 'width: ' + this.width + 'px;';
    styles += 'height: ' + this.height + 'px;';
    styles += 'background-color: #e7e7e7;';
    styles += 'color: #333;';
    styles += 'font-family: arial;';
    styles += 'font-weight: 500;';
    styles += 'font-size:' + this._minDimension/2 + 'px;';
  //  styles += 'highlight: #d18;';
    styles += 'border: none;';
    styles += 'outline: none;';
    styles += 'padding: '+this._minDimension/4+'px '+this._minDimension/4+'px;';
    styles += 'box-sizing: border-box;';
    styles += 'userSelect: text;';
    styles += 'mozUserSelect: text;';
    styles += 'webkitUserSelect: text;';
    this.element.style.cssText += styles;

    // to add eventually
    // var css = '#'+this.elementID+'::selection{ background-color: transparent }';

    this.element.value = this.value;

  }

  colorInterface() {
      this.element.style.backgroundColor = this.colors.fill;
      this.element.style.color = this.colors.dark;
  }

  render() {
    this.element.value = math.prune(this.value,this.decimalPlaces);
  }

  click() {
    this.hasMoved = false;
    this.element.readOnly = true;
	  this.actual = this.value;
    this.initial = { y: this.mouse.y };
    this.changeFactor = math.invert( this.mouse.x / this.width );
  }

  move() {
    this.hasMoved = true;
    if (this.clicked) {

      let newvalue = this.actual - (this.mouse.y - this.initial.y) * ( math.clip( this.max-this.min, 0, 1000 ) / 200 ) * Math.pow(this.changeFactor,2);
      this.value = newvalue;

  		this.render();
      if (this._value.changed) {
        // this.emit('change',this.value);
        // console.log('emit:change:move', this.value, this.step)
      }

  	}
  }

  release() {
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

  /**
  Connect this number interface to a dial or slider
  @param {Interface} element Element to connect to.
  @example number.link(slider)
  */
  link(destination) {
    this.min = destination.min;
    this.max = destination.max;
    this.step = destination.step;
    destination.on('change',(v) => {
      this.passiveUpdate(v);
    });
    this.on('change',(v) => {
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

  passiveUpdate(v) {
    this._value.update(v);
    this.render();
  }

  format() {

  }

  /**
  The interface's current value. If set manually, will update the interface and trigger the output event.
  @type {number}
  @example number.value = 10;
  */
  get value() {
    return this._value.value;
  }
  set value(v) {
    if(this.step % 1 === 0) {
      // console.log('int step', this.step, this.value, v)
    } else {
      // console.log('float step', this.step, this.value, v)
    }

    this._value.update(v);

    if(this._value.changed) {
      // console.log('emit:change:set', this.value, v, this.step, 'changed',this._value.changed)
      this.emit('change',this.value);
    }

    this.render();
  }

  /**
  Lower limit of the number's output range
  @type {number}
  @example number.min = 1000;
  */
  get min() {
    return this._value.min;
  }
  set min(v) {
    this._value.min = v;
  }

  /**
  Upper limit of the number's output range
  @type {number}
  @example number.max = 1000;
  */
  get max() {
    return this._value.max;
  }
  set max(v) {
    this._value.max = v;
  }

  /**
  The increment that the number's value changes by.
  @type {number}
  @example number.step = 5;
  */
  get step() {
    return this._value.step;
  }
  set step(v) {
    this._value.step = v;
  }

}
