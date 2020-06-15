// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import processorBase64 from '../../dist/processor.es.js'

const audioCtx = new AudioContext()
audioCtx.audioWorklet.addModule(processorBase64).then(() => {
  // Do stuff with the now-registered processor
})

export const hello = 'world'
