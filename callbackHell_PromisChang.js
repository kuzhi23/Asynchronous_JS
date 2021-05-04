// const loginUser = (id,password) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (
//                 (id === 'ellie' && password === 'dream') ||
//                 (id === 'coder' && password === 'academy')
//             ) {
//                 resolve(id)
//             } else {
//                 reject(new Error('아이디 비번 오류'))
//             }
//         }, 2000)
//     })
// }

// const getRoles = id => {
//   return  new Promise((resolve,reject) => {
//        setTimeout(() => {
//            if(id === 'ellie'){
//                resolve({name:'ellie', role: 'admin'})
//            }else{
//                reject(new Error('어드민 계정이 아닙니다.'))
//            }
//        })
//    })
// }


// const id = prompt('enter your id')
// const password = prompt('enter your password')

// loginUser(id,password)
//     .then(value => getRoles(value))
//     .then(value => alert(`hello ${value.name}, you have a ${value.role} role`))
//     .catch(console.log)


class UserStorage{
    loginUser(id, password){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             if(
                 (id === 'ellie' && password === 'dream') ||
                 (id === 'coder' && password === 'academy')
             ){
                 resolve(id)
             } else {
                 reject(new Error('아이디 비번 오류'))
             }
         },2000);
     })
    }

    getRoles(id){
       return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(id === 'ellie'){
                    resolve({name:'ellie', role: 'admin'})
                }else{
                    reject(new Error('어드민 계정이 아닙니다.'))
                }
            })
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(id, password)
    .then(value => userStorage.getRoles(value))
    .then(value => alert(`hello ${value.name}, you have a ${value.role} role`))
    .catch(value => console.log(value))


