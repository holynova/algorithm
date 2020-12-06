// class Finder(){
//     constructor(){

//     }
// }


function format(num) {
    if (typeof num === 'number') {
        return {
            result: num,
            formula: `${num}`
        }
    }
    return num
}

// 从arr中取两个数字,放到数组的前两个, 剩余的放到后面
function splitArr(arr) {
    // let arr = [...nums]
    let results = []
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        // const element = arr[i];
        let first = arr[i]
        for (let j = i + 1; j < len; j++) {
            let second = arr[j]
            // const element = array[j];
            let cloneArr = [...arr]
            cloneArr.splice(j, 1)
            cloneArr.splice(i, 1)
            // results.push([first, second, ...cloneArr])
            results.push({
                first,
                second,
                rest: cloneArr
            })
        }
    }
    return results
}

function isEqual(a, b, threshould = 1e-6) {
    return Math.abs(a - b) <= threshould
}

let finalResults = []

function dealWithTwo(oa, ob, isFinal = false) {
    let { result: a, formula: fa } = format(oa)
    let { result: b, formula: fb } = format(ob)
    let results = [
        { result: a + b, formula: `(${fa} + ${fb})` },
        { result: a - b, formula: `(${fa} - ${fb})` },
        { result: -a + b, formula: `(${fb} - ${fa})` },
        { result: a * b, formula: `(${fa} * ${fb})` },
    ]
    if (a !== 0) {
        results.push({ result: b / a, formula: `(${fb} / ${fa})` })
    }
    if (b !== 0) {
        results.push({ result: a / b, formula: `(${fa} / ${fb})` })
    }
    if (isFinal) {

        let finals = results.filter(o => isEqual(24, o.result))
        if (finals.length > 0) {
            log(finals)
        }
        finalResults = [...finalResults, ...finals]
        return finals
    }
    return results
}

function find(arr, target = 24) {
    let len = arr.length
    if (len === 2) {
        return dealWithTwo(...arr, true)
    }

    let groups = splitArr(arr)
    for (let group of groups) {
        let { first, second, rest } = group
        let combinations = dealWithTwo(first, second, false)
        for (let c of combinations) {
            find([c, ...rest], target)
        }
    }
    // return true
}

function removeRepeat(results) {

    let m = new Map()
    let formulas = results.map(r => r.formula)
    for (const f of formulas) {
        m.set(f, 1)
    }
    let result = []
    for (const key of m.keys()) {
        result.push(key)
    }
    return result
    // return m.keys().map(k => k)
}

const log = console.log.bind(console)
let input = [2, 3, 4, 5]
// find(input, 24)
// log(finalResults)

const debugMode = true
function test() {

    // let results = dealWithTwo(2, 3)
    // log(results)
    // log(dealWithTwo(results[1], results[2]))

    // log(splitArr(input))
    let inputs = [
        // '1 2 3 4',
        '10 10 4 4 13 7 22 21',
        // '3 8 3 8',
        // '5 5 1 5'
    ]
    for (let str of inputs) {
        let input = str.split(' ').map(s => parseInt(s, 10))
        // log(input)
        finalResults = []
        find(input, 24)
        if (finalResults.length === 0) {
            // log(str)  
            log(`${str}:无解`)
        } else {
            log(str)
            let cleanResults = removeRepeat(finalResults)
            for (let r of cleanResults) {
                let v = eval(r)
                if (isEqual(24, v)) {
                    // log(`pass:${r}`)
                    log(`pass:${v} = ${r} `)
                } else {
                    log(`fail:${v} = ${r} `)
                }
            }
        }
    }
}
function unitTest() {
    let a = 24
    let b = 26
    log(`${a},${b},${isEqual(a, b)}`)
}

if (debugMode) {
    test()
    // unitTest()
}

