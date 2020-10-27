const p1 = new Promise(function(resolve, reject){
    console.log("프라미스 함수제작");
    //0.5초 뒤에 콘솔에 찍습니다.
    setTimeout(
        () => {
            //프라미스 이행 될때 실행할 부분을 resolve로 적습니다.
            reject("error 입니다.")
        }, 3000 );
})

const p2 = new Promise(
    (resolve, reject) => {
        console.log("프라미스 함수제작");
        //0.3초 뒤에 콘솔에 찍습니다.
        setTimeout(
            function() {
                resolve({ p2 : "-_-" });
            }, 300 );
    }
);


async function test(){
    try{
        const a= await p1
        const b= await p2
    } catch(err){
        console.log(err)
    }
    
    
}

test().then((result)=>{
    console.log(result)
}).catch((result)=>{
    console.log(err)
})