import * as pt from "pareto-core-types"

export function getArrayAsString(
    array: pt.Array<string>,
    separator: string,
): string {
    const tmp: string[] = []
    array.forEach(($) => {
        tmp.push($)
    })
    return tmp.join(separator)
}