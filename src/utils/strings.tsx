function excerpt(
  string: string,
  length: number,
  hellip: boolean = true,
): string {
  let result = string
  if (string && string.length > length) {
    result = `${string.substring(0, length)}${hellip ? '...' : ''}`
  }
  return result
}

export default { excerpt }
