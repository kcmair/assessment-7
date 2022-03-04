const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}

// Runtime complexity - O(n^2)
// Space complexity - O(n)



const hasUniqueChars = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

// Runtime complexity - O(n^2)
// Space complexity - O(n)



const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function isPangram (str) {
    let alpha = [...alphabet]
    str = str.toLowerCase()
    alphabet.forEach((e) => {
        if (str.includes(e)){
            alpha.splice(alpha.indexOf(e),1)
        }
    })

    if (alpha.length === 0) {
        return true
    } else {
        return false
    }
}



// Runtime complexity - O(n)
// Space complexity - O(n)



const findLongestWord = (arr) => {
    let longest = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > longest){
            longest = arr[i].length
        }
    }
    return longest
}

// Runtime complexity - O(n)
// Space complexity - O(n)