const audioCtx = new AudioContext();
audioCtx.audioWorklet.addModule('juno60-procesor.js').then(() => {
  // Do stuff with the now-registered processor
});

const hello = 'world';

export { hello };
//# sourceMappingURL=entry-index.mjs.map
