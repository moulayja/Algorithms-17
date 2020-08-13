
/*
Given a number (positive, negative, or 0), return the logical negation (as a 1 or 0) of that number. Do so using only bitwise operators:

~, &, |, ^, >>, <<, +
Any of these characters / constructs are not allowed:

if, do, while, for, switch, -, ?, :, !, ||, &&, <, >, == , [,], functions
Examples
bitwiseLogicalNegation(1) ➞ 0

bitwiseLogicalNegation(5) ➞ 0

bitwiseLogicalNegation(0) ➞ 1

bitwiseLogicalNegation(3) ➞ 0
*/

const bitwiseLogicalNegation = x =>  1 + ((x | (1 + ~x)) >> 31)