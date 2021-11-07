
function pascalsTriangle(k) {
    if(k === 1) {
        return 1
    } else {
    let subArr = [1,1];
    //console.log(subArr.length)

    function getIndex(k , currentIndex) {
        if(subArr.length === k) {
            return;
        }
        for (let i = 0; i < subArr.length - 1; i++) {
            currentIndex.push(subArr[i] + subArr[i+1]);
            //console.log(i, currentIndex)
        }
        currentIndex.unshift(1);
        currentIndex.push(1);
        subArr = currentIndex;
        //console.log(subArr)
        getIndex(k, [])

    
    }
    getIndex(k, [])

    return subArr;
    }
}

//callstack k = 5, i = 0 currentIndex = 3
// i = 1 , currentindex = 3,3
// currentindex = 1,3,3,1
// subArray = 1,3,3,1
