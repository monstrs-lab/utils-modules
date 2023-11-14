export const modExp = (a: bigint, b: bigint, n: bigint): bigint => {
  let result = BigInt(1)
  let x = a % n
  let y = b

  while (y > BigInt(0)) {
    const leastSignificantBit = y % BigInt(2)

    y /= BigInt(2)

    if (leastSignificantBit === BigInt(1)) {
      result *= x
      result %= n
    }

    x *= x
    x %= n
  }

  return result
}
