//use combining checks and guard clauses to simplify code

function myExampleFunction(arr) {
    if (arr != null) {
        if (arr.length !== 0) {
            if (arr[0].length !== 0) {
                if (arr.length > 10) {
                    arr.push('maximum')
                } else if (arr.length === 10) {
                    arr.push('maximum')
                } else {
                    if (arr[0] === 'must be maximum') {
                        arr.push('failure')
                    } else if (arr[0] === 'flexible') {
                        arr.push('success')
                    }
                }
            }
        }
    }
    return arr
}

function myExampleFunction(arr) {
    if(arr == null) return arr
    if(arr.length === 0) return arr
    if (arr.length >= 10) { arr.push('maximum'); return arr }
    if (arr[0] === 'must be maximum') { arr.push('failure') } 
    if (arr[0] === 'flexible') { arr.push('success') }
    return arr
}
