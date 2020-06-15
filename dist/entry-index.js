'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const audioCtx = new AudioContext();
audioCtx.audioWorklet.addModule('juno60-processor.js').then(() => {
  // Do stuff with the now-registered processor
});

const hello = 'world';

exports.hello = hello;
//# sourceMappingURL=entry-index.js.map
