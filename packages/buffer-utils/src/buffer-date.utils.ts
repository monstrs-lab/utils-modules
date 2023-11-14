export const fromDateToBuffer = (date: Date): Buffer => {
  if (!date) {
    return Buffer.alloc(4).fill(0)
  }

  const time = Buffer.alloc(4)

  time.writeInt32LE(
    date instanceof Date ? Math.floor((Date.now() - date.getTime()) / 1000) : date,
    0
  )

  return time
}
