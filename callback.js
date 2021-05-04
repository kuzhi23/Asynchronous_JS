// JavaScript is synchronous.
// hoisting: var,function 함수 선언들이 자동적으로 제일 위로 올라가는 것

//동기
// console.log('1')
// console.log('2')
// console.log('3')

//비동기
console.log('1')
setTimeout(() => {
    console.log('2')
},1000)
console.log('3')

// 동기(Synchronous) callback
    function printImmediately(print){
        print();
    }

    printImmediately(() => console.log('hello'))

// 비동기(Asynchronous) callback

    function printWithDelay(print, timeout){
        setTimeout(print,timeout)
    }

    printWithDelay(()=>console.log('async callback'),2000)