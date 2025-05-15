async function fn(){
    return new Promise(function(res,rej){
        res("hello");
    })
}
console.log(fn());