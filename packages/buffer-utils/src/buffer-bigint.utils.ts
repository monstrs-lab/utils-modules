/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */

import { getBitLength } from '@monstrs/bigint-utils'
import { bitwise }      from '@monstrs/bigint-utils'

export const fromBufferToBigInt = (buffer: Buffer, little = true, signed = false): bigint => {
  const target = little ? buffer.reverse() : buffer
  const bytes = target.length

  const bigInt = BigInt(`0x${target.toString('hex')}`)

  if (signed && Math.floor(bigInt.toString(2).length / 8) >= bytes) {
    return bigInt - BigInt(2) ** BigInt(bytes * 8)
  }

  return bigInt
}

export const fromBigIntToBuffer = (
  target: bigint,
  bytesNumber: number,
  little = true,
  signed = false
): Buffer => {
  let bigInt = target

  const bitLength = getBitLength(bigInt)
  const bytes = Math.ceil(Number(bitLength / BigInt(8)))

  if (bytesNumber < bytes) {
    throw new Error('Overflow error: int too big to convert')
  }

  if (!signed && bigInt < BigInt(0)) {
    throw new Error('Cannot convert to unsigned')
  }

  let below = false

  if (bigInt < BigInt(0)) {
    below = true
    bigInt = bigInt >= BigInt(0) ? bigInt : bigInt * BigInt(-1)
  }

  const hex = bigInt.toString(16).padStart(bytesNumber * 2, '0')

  let l = Buffer.from(hex, 'hex')

  if (little) {
    l = l.reverse()
  }

  if (signed && below) {
    if (little) {
      let reminder = false

      if (l[0] !== 0) {
        l[0] -= 1
      }

      for (let i = 0; i < l.length; i++) {
        if (l[i] === 0) {
          reminder = true

          continue // eslint-disable-line no-continue
        }

        if (reminder) {
          l[i] -= 1

          reminder = false
        }

        l[i] = 255 - l[i]
      }
    } else {
      l[l.length - 1] = 256 - l[l.length - 1]

      for (let i = 0; i < l.length - 1; i++) {
        l[i] = 255 - l[i]
      }
    }
  }

  return l
}

export const fromBigIntToSignedLittleBuffer = (value: bigint, number = 0): Buffer => {
  const byteArray: Array<any> = []

  for (let i = 0; i < number; i++) {
    byteArray[i] = Number(bitwise(value >> BigInt(8 * i), BigInt(255), (a, b) => a & b))
  }

  return Buffer.from(byteArray)
}

export const fromBigIntToByteArrayBuffer = (target: bigint, signed = false): Buffer => {
  const bits = target.toString(2).length
  const byteLength = Math.floor((bits + 8 - 1) / 8)

  return fromBigIntToBuffer(target, byteLength, false, signed)
}
