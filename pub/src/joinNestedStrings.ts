import * as pt from "pareto-core-types"
import * as pi from "pareto-core-internals"

export function joinNestedStrings(
    array: pt.Nested<string>,
): string {
    return pi.flatten(array).join("")
}