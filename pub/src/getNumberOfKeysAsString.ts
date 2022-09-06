import * as pt from "pareto-core-types"

export function _getNumberOfKeysAsString<T>(
    dict: pt.Dictionary<T>,
): string {
    let count = 0
    dict.map(($, key) => {
       count +=1 
    })
    return `${count}`
}