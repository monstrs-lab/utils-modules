import { HIGHEST_POWER_2 } from './constants.js'

export const compare = (a: bigint, b: bigint): number => {
  if (b === BigInt(Number.MAX_SAFE_INTEGER)) {
    return -1
  }

  if (b === BigInt(-Number.MAX_SAFE_INTEGER)) {
    return 1
  }

  if (a === b) {
    return 0
  }

  return a > b ? 1 : -1
}

export const bitwise = (
  x: bigint,
  y: bigint,
  callback: (a: number, b: number) => number
): bigint => {
  const xSign = x < BigInt(0)
  const ySign = y < BigInt(0)

  let xRem = xSign ? x * BigInt(-1) - BigInt(1) : x
  let yRem = ySign ? y * BigInt(-1) - BigInt(1) : y

  let xDigit = 0
  let yDigit = 0
  let xDivMod = null
  let yDivMod = null

  const result = []

  while (xRem !== BigInt(0) || yRem !== BigInt(0)) {
    xDivMod = [xRem / BigInt(HIGHEST_POWER_2), xRem % BigInt(HIGHEST_POWER_2)]
    xDigit = Number(xDivMod[1])

    if (xSign) {
      xDigit = HIGHEST_POWER_2 - 1 - xDigit
    }

    yDivMod = [yRem / BigInt(HIGHEST_POWER_2), yRem % BigInt(HIGHEST_POWER_2)]
    yDigit = Number(yDivMod[1])

    if (ySign) {
      yDigit = HIGHEST_POWER_2 - 1 - yDigit
    }

    xRem = xDivMod[0] // eslint-disable-line prefer-destructuring
    yRem = yDivMod[0] // eslint-disable-line prefer-destructuring

    result.push(callback(xDigit, yDigit))
  }

  let sum = callback(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? BigInt(-1) : BigInt(0)

  for (let i = result.length - 1; i >= 0; i -= 1) {
    sum = sum * BigInt(HIGHEST_POWER_2) + BigInt(result[i])
  }

  return sum
}
