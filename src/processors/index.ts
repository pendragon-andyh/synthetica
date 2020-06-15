// TODO.
const hello = (<unknown>this) as wobble

interface wobble {
  wibble: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
hello.wibble = 2
