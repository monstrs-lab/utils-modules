export const fromBufferToBigInt = (buffer: Buffer, little = true, signed = false): bigint => {
  const target = little ? buffer.reverse() : buffer
  const bytes = target.length

  const bigInt = BigInt(`0x${target.toString('hex')}`)

  if (signed && Math.floor(bigInt.toString(2).length / 8) >= bytes) {
    return bigInt - BigInt(2) ** BigInt(bytes * 8)
  }

  return bigInt
}
