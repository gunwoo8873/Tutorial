const EX1_Arrow = (a, b) => a + b
console.log(EX1_Arrow(10, 20));

const EX2_Arrow = a => b => c => `a:${a} b:${b} c:${c}`
console.log(EX2_Arrow(10)(20)(30));

function EX2_2_Arrow(a) {
    return function(b) {
        return function(c) {
            return `a:${a} b:${b} c:${c}`
        }
    }
}
console.log(EX2_2_Arrow(10)(20)(30));