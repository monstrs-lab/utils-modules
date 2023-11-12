export const fromBufferToBigInt = (buffer: Buffer, little = true, signed = false): bigint => {
  let randBuffer = Buffer.from(buffer)

  const bytesNumber = randBuffer.length

  if (little) {
    randBuffer = randBuffer.reverse()
  }

  const bigInt = BigInt(`0x${randBuffer.toString('hex')}`)

  if (signed && Math.floor(bigInt.toString(2).length / 8) >= bytesNumber) {
    return bigInt - BigInt(2) ** BigInt(bytesNumber * 8)
  }

  return bigInt
}
