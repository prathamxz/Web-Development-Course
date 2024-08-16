// console.log("Hey jack you are good")
// console.log("Hey jack you are best")
// console.log("Hey jack you are good friend")
// console.log("Hey jack you are good cook")
// console.log("Hey jack you are not bad")

// if we decide to change name "jack" in every line it will be quite difficult so we will use functions in js


function nice(name) {
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " you are best")
    console.log("Hey " + name + " you are good friend")
    console.log("Hey " + name + " you are good cook")
    console.log("Hey " + name + " you are not bad")

}



nice("Will")
console.log("\n")

nice("kery")
console.log("\n")

nice("watson")
console.log("\n")

function sum(a, b, c =3) { // C default value will be 3
    // console.log(a + b)
    return a+b+c
}

result = sum(10, 9)
result1 = sum(10, 91)
result2 = sum(10, 93)


console.log("The sum of this numbers is", result)
console.log("The sum of this numbers is", result2)
console.log("The sum of this numbers is", result1)

const func1 = (x) =>{
    console.log("Im arrow function", x)
}
func1(34);
func1(64);
func1(74);
func1(44);