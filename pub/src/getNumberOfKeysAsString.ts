import * as pt from "pareto-core-types"

export function getNumberOfKeysAsString<T>(
    dict: pt.Dictionary<T>,
): string {
    let count = 0
    dict.forEach(() => false, ($, key) => {
       count +=1 
    })
    return `${count}`
}