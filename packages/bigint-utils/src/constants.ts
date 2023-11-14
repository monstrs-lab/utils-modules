export const BASE = 1e7

export const calculatePowersOfTwo = (): { length: number; highest: number } => {
  const powersOfTwo = [1]

  while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE)
    powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1])

  const powers2Length = powersOfTwo.length
  const highestPower2 = powersOfTwo[powers2Length - 1]

  return {
    length: powers2Length,
    highest: highestPower2,
  }
}

const { length: POWERS_2_LENGTH, highest: HIGHEST_POWER_2 } = calculatePowersOfTwo()

export { POWERS_2_LENGTH, HIGHEST_POWER_2 }
