function tv(channelNo = 1){
    let name;
    if(channelNo === 101){
        name = "Sony Max"
    }else if(channelNo === 102){
        name = "Ten Sports"
    }else if(channelNo === 1){
        name = "bhakti sagar"
    }else{
        name = "Invalid Channel number"
    }
    return name
}

let res;//initilization

res = tv(101) //Sony Max
console.log(res)

res = tv(102) //Ten Sports
console.log(res)

res = tv(103) // Invalid ...
console.log(res)

res = tv()
console.log(res)