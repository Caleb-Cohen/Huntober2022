function decodeString(string){
    function getObjKey(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
    }
    const decodeObject = {
        "0":"O",
        "1":"I",
        "2":"Z",
        "3":"E",
        "4":"h",
        "5":"S",
        "6":"G",
        "7":"L",
        "8":"B",
        "9":"q",
    }
    return string.split("").map(ele => decodeObject[ele] ? decodeObject[ele] : 
                    getObjKey(decodeObject, ele) ? getObjKey(decodeObject, ele) : ele).join("")
}

decodeString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")
decodeString("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs")