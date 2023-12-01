export const fromBigIntToNumber = (target: bigint): number => {
  const buffer = Buffer.alloc(8)

  buffer.writeBigInt64BE(target)

  return buffer.readInt32BE()
}
