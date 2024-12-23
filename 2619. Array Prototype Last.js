Array.prototype.last = function () {
    let size = this.length
    if(!size){
        return -1
    }else{
        return this[size-1]
    }
};
const arr = [1, 2, 3];

console.log(arr.last())