// async & await

//1.async

async function fetchUser() {
    return 'ellie'
}

const user = fetchUser()
user.then(v => console.log(v))
console.log(user)


//2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function getApple(){
    await delay(2000);
    return '🍎'
}

async function getBanana(){
    await delay(1000)
    return '🍌'
}

async function pickFruits(){
    // const applePromise = getApple()
    // const bananaPromise = getBanana()
    // const apple = await applePromise
    // const banana = await bananaPromise
    const apple = await getApple()
    const banana = await getBanana()
    return `${apple} + ${banana}`
}

pickFruits().then(v => console.log(v))

// 3. useFul Promise APIs

function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
        .then(value => value.join(' + zeze'))
}

pickAllFruits().then(v =>console.log(v))

function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()])
}

pickOnlyOne().then(v => console.log(v))