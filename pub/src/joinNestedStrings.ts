import * as pt from "pareto-core-types"
import * as pi from "pareto-core-internals"

export function joinNestedStrings(
    array: pt.Nested<string>, separator: string,
): string {
    return pi.flatten(array).join(separator)
}