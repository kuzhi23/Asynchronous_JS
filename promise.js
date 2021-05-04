// Promise is a JavaScript object for asynchronous operations
// state: Promise가 만들어져서 내가 지정한 oprations가 진행중이  pending ->  완료가 되면 fulfilled or 파일을 찾을수 없거나 네트워크의 문제가 있다면 rejected
// 원하는 기능을 수행해서 해당하는 데이터를 만들어 내는 Producer(promise object)
// 우리가 원하는 데이터를 소비하는 Consumer 로 나눌수 있다

// 1. Producer
//promise 는 클래스 형태이다.
// 새로운 promise가 만들어 질때 우리가 전달한 excutor 라는 콜백 함수가 바로 자동으로 실행한다. -> 이점 유의 빠끄!빠끄!
const promise = new Promise((resolve,reject) => {
    // doing some heavy work(network, read files)
    // network 통신 or read files 는 비동기적으로 처리하는것이 핵 좋다 (빠끄!)
    // 유의할점
    // 만약 네트워크 요청을 사용자가 요구했을때만 해야 한다면 즉 사용자가 버튼을 눌럿을때 네트워크 요청을 해야하는 경우할때
    // Promise를 사용한다면 사용자가 요구하지않았는데 불필요한 네트워크 통신이 일어날 수 있다. -> 이점을 유의해야한다 빠끄
    console.log('일중이다 빠끄!')
    setTimeout(() => {
        // 값이 성공적으로 들어왓을때
        // resolve('ellie');
        // 값이 잘못들어 왓다면???????? 물음표 *100 큰일다. 하지만 괜찮다 reject를 쓰면 된다.
        reject(new Error('no network'))
    },2000)
})

// 2.Consumer: then, catch 로 값을 받아올수 있다.
// promise 값이 정상적으로 수행이 된다면(then) 값을 받아올꺼임 어떤 value의 값 받아와서 우리가 원하는 기능을 수행하는 callback함수로 전달
// 요기서 value라는 파라미터는 promise가 정상적으로 수행이 되어서 마지막으로 resolve 콜백한수로 전달된 ellie 가 전달 된다. 빠끄!
promise
    // promise의 then을 호출하게 되면 똑같은 promise를 return 한다 유노 롸잇뎃!!! ㅋㄷ
    .then((value) => {
    console.log(value)
    })
    // then을 이용해서 성공정인 케이스를 다뤗다면
    // error catch를 이용해서 다룬다. 빠끄!! 롸잇뎃
    // 이렇게 가능한이유는 then은 똑같은 promise를 return 하기 때문에
    // return 된 promise의 catch를 등록한다
    .catch(error =>{
        console.log(error)
    })

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(() => resolve(1),1000)
});

fetchNumber
    .then(num => num *2)
    .then(num => num*3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>resolve(num-1),1000)
        })
    })
    .then(num => console.log(num))

//4. Error Handling

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() =>resolve('🐓'),1000)
    })

const getEgg = hen =>
    new Promise((resolve, reject) =>{
        // 성공한경우
        // setTimeout(() =>resolve(`${hen} => 🥚`),1000)
        // 만약 실패했을떈
        setTimeout(() =>reject(new Error(`error ${hen} => 🥚`)),1000)
    })

const cook = egg =>
    new Promise((resolve,reject) => {
        setTimeout(() =>resolve(`${egg} => 🍳`),1000)
    })

// 먼저 getHen을 받아오고
// 그런다음에 getHen이 받아오지면 getHen의 값을 이용해서 getEgg함수 호출
// getEgg의 값을 정상적으로 받아지면 getEgg의 값을 이용해서 cook 함수 호출
// cook 함수의 값이 정삭적으로 받아지면 이값을 이용해서 최종적으로 meal을 console.log 를 이용해서 값을 호출 한다 빠끄
getHen()
.then(hen => getEgg(hen))
    .catch(error =>{
        return '🍞'
    })
.then(egg => cook(egg))
.then(meal => console.log(meal))
// .catch(meal => console.log(meal))