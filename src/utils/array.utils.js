export const getArrayFromRange = (start, end) => {
    let length = end - start
    const result = [start]
    while (length) {
        result.push(++start)
        length--
    }
    return result
}
