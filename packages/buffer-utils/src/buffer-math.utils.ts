/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */

export const bufferXor = (a: ArrayLike<number>, b: ArrayLike<number>): Buffer => {
  const result = []

  for (let i = 0; i < a.length; i++) {
    result.push(a[i] ^ b[i])
  }

  return Buffer.from(result)
}
