const audioCtx = new AudioContext();
audioCtx.audioWorklet.addModule('juno60-processor.js').then(() => {
  // Do stuff with the now-registered processor
});

const hello = 'world';

export { hello };
//# sourceMappingURL=entry-index.es.js.map
