/* eslint-disable no-plusplus */

export const fromBufferToLittleBuffer = (target: Buffer | Uint32Array): Buffer => {
  const correct = Buffer.alloc(target.length * 4)

  for (let i = 0; i < target.length; i++) {
    correct.writeUInt32BE(target[i], i * 4)
  }

  return correct
}
