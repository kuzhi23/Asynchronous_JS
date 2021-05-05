const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 맟 getDataFromFilePromise(user2Path) 를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  return getDataFromFilePromise(user1Path)
      .then((value) => {
        let result = []
        return getDataFromFilePromise(user2Path).then((value1) => {

          result.push(JSON.parse(value))
          result.push(JSON.parse(value1))
          return result;
        })
      })
  // return getDataFromFilePromise(user1Path)
  //     .then((user1) => {
  //       return getDataFromFilePromise(user2Path).then((user2) => {
  //         return '[' + user1 + ',' + user2 + ']';
  //       });
  //     })
  //     .then((text) => JSON.parse(text));
}


// readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}