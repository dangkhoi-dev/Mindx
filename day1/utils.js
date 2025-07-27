export function productInfo(product, cost) {
    return `Sản phẩm: ${product}, Giá: ${cost}`
}

export function greet(username) {
    return `Xin chào, ${username}`
}



export function sumUpTo(n) {
    if (n == 1) {
        return 1
    }
    return n + sumUpTo(n - 1)
}

export function square(n) {return n*n}
export function isEven(n) {return n % 2 == 0}
export function firstElement(array) {return array[0]}
export function sum(...array) {
    return array.reduce((acc, cur) => acc + cur,  0)
}
export function stringLength(str) {
    if (str === "") return 0;
    return 1 + stringLength(str.slice(1));
}

export function toUpperCase(str) {
    return str.toUpperCase()
}

export function formatCurrency(price) {
    return `${price} VNĐ` 
}

export function max(...array) {
    return Math.max(...array)
}

export function isPrime(n) {
    // return Math.isPrime(n)
    for (let i = 0; i < Math.sqrt(n); i++) {
        if (n % i == 0) return false
    }
    return true
}

export function repeatString(str, times) {
    if (times == 0) return ""
    return `${str} ${repeatString(str, times - 1)}`
}