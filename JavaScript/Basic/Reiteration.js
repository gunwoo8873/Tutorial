function EX1_for() {
    const arr = []
    console.log(arr.length);

    for (let i = 0; i < 10; i++) {
        arr.push(`2 * ` + i + ` = ` + (2 * i))
        i++
    }
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}
EX1_for()

function EX1_while() {
    let a = 0
    while (a < 10) {
        a++
        if (a % 2 == 0) {
            continue
        }
        console.log(a);
    }
}
EX1_while()

function EX2_while() {
    let a = 2;
    outside: while (a < 10) { 
        let b = 1;
        while (b < 10) {
            if (a == 6 && b == 1) break outside;
            console.log(a, '*', b, '=', a * b);
            b++;
        }
        a++;
    }
}
EX2_while();