import { compare } from './compare.utils.js'

export const integerLogarithm = (value: bigint, base: bigint): { p: bigint; e: number } => {
  if (compare(base, value) <= 0) {
    const { p, e } = integerLogarithm(value, base ** base)
    const t = p * base

    return compare(t, value) <= 0 ? { p: t, e: e * 2 + 1 } : { p, e: e * 2 }
  }

  return { p: BigInt(1), e: 0 }
}

export const getBitLength = (value: bigint): bigint => {
  let target = value

  if (compare(value, BigInt(0)) < 0) {
    target = target * BigInt(-1) - BigInt(1)
  }

  if (compare(value, BigInt(0)) === 0) {
    return BigInt(0)
  }

  return BigInt(integerLogarithm(target, BigInt(2)).e) + BigInt(1)
}
