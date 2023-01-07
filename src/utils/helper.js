import Cell from "./cell"

export function valueToColor(value) {
    let res = 0
    let temp = value
    while (temp > 1) {
        temp /= 2
        res += 1
    }
    return (res%20)+1
}

export function intervalToSec (interval, times=100) {
    // Convert interval time to second of one cycle
    // Ex: 70ms * 100 / 1000
    return interval * times / 1000
}

export function createField() {
    let res = []
    for (let i = 0; i<6; i++) {
        res[i] = []
        for (let j = 0; j<4; j++) {
            res[i][j] = new Cell()
        }
    }
    return res
}

export function createTestField() {
    let res = []
    for (let i = 0; i<6; i++) {
        res[i] = []
        for (let j = 0; j<4; j++) {
            res[i][j] = new Cell()
        }
    }
    res[0][0].value = 1048576
    res[0][0].setColor()
    res[0][1].value = 512
    res[0][1].setColor()
    res[0][2].value = 256
    res[0][2].setColor()
    res[0][3].value = 128
    res[0][3].setColor()
    res[1][0].value = 64
    res[1][0].setColor()
    return res
}

export function sumOfField(field) {
    let sum = 0
    for (let i = 0; i<6; i++) {
        for (let j = 0; j<4; j++) {
            sum += field[i][j].value
        }
    }
    return sum
}

export function valueToRead (value) {
    if (value === null)
        return ''
    let arr = String(value).split('');
        let time = '';
        let res = '';
        for (let i = 1; i<=arr.length; i++){
            time = arr[arr.length-i];
            res = time+res;
            if (i%3===0){
                time = ','
                res = time+res;
            }
        }
        if (res[0]===','){
            res = res.split('').splice(1).join('');
        }
    return res;
}

export function readbleValue (value) {
    let temp = value
    let res = ''
    let postfixes = ['', 
        'k', 'm', 'b', 't', 'q', 'sk', 'sp', 
        'K', 'M', 'B', 'T', 'Q', 'SK', 'SP',
        'KK', 'MM', 'BB', 'TT', 'QQ', 'SSK', 'SSP'
    ]
    let index = 0
    let max_index = postfixes.length - 1
    if (temp === null) return res
    while (temp>999 && index < max_index) {
        temp /= 1000
        index++
    }
    return `${temp.toFixed(0)}${postfixes[index]}`
}