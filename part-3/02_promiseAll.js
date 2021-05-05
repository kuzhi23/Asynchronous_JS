var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  let news = fetch(newsURL)
      .then(nData => nData.json())
      .then(newsData => {
        return newsData.data;
      })

  let weather = fetch(weatherURL)
      .then(wData => wData.json())
      // .then(weatherData => {
      //   console.log(weatherData)
      //   return weatherData
      // })


  return Promise.all([news,weather])
      .then(([newsData,weatherData])=>{
        return{
          news:newsData,
          weather: weatherData
        }
      })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}