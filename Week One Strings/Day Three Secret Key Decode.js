
function decodeString(string){
    const arr = ["S", "p", "a", "c", "e"]
    return string.split("").map(ele => arr.includes(ele) === true ? " " : ele).join("")
}

decodeString('e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs')