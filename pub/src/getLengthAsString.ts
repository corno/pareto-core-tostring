import * as pt from "pareto-core-types"

/**
 * as long as the lenght is returned as a string there is not a lot of room for unintended use
 */
export function getLengthAsString<T>($: pt.Array<T>): string {
    let count = 0
    $.forEach(() => {
        count += 1
    })
    return `${count}`

}