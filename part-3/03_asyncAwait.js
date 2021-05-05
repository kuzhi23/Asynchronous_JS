var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  let news = await fetch(newsURL)
      .then(newsData => newsData.json())
      .then( data => {
        return data.data
      })
  let weather = await fetch(weatherURL) .then(wData =>wData.json())

  return {
    news: news,
    weather: weather
  }
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}