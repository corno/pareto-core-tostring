import * as pt from "pareto-core-types"

export function getKeysAsString<T>(
    dict: pt.Dictionary<T>,
): string {
    const maxAmount = 10
    const foundKeys: string[] = []
    dict.forEach(() => false, ($, key) => {
       foundKeys.push(key)
    })

    const formatted = foundKeys.map($ => `'${$}'`)
    if (foundKeys.length > maxAmount) {
        formatted.splice(maxAmount)
        formatted.push("...")
    }
    return `${foundKeys.join(", ")}`
}