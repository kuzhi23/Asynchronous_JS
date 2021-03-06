var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다

  return fetch(newsURL)
      .then(nData => nData.json())
      .then(newsData => {
        return fetch(weatherURL)
            .then(wData => wData.json())
            .then(weatherData =>{
              return {
                news:newsData.data,
                weather:weatherData
              }
            })
      })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}