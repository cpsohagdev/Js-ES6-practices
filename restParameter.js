var arrowFunction = (...items) => {
    var sum = 0
    for (let i of items) {
        var sum = sum + i
    }
    console.log(sum)
}
arrowFunction(10, 20, 30)