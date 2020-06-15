'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var processorBase64 = "data:undefined;base64,Ly8gVE9ETy4NCmNvbnN0IGhlbGxvID0gdW5kZWZpbmVkOw0KLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkNCmhlbGxvLndpYmJsZSA9IDI7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb2Nlc3Nvci5lcy5qcy5tYXAK";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
const audioCtx = new AudioContext();
audioCtx.audioWorklet.addModule(processorBase64).then(() => {
    // Do stuff with the now-registered processor
});
const hello = 'world';

exports.hello = hello;
//# sourceMappingURL=entry-index.js.map
