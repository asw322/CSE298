<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 60 ? 'warm' : ''">
    <main>
      
        <div class="search-box">
          <input 
            type="text" 
            class="search-bar" 
            placeholder="Search..."
            v-model="query"
            @keypress="fetchWeather"
          />

          <!-- text with instructions  -->
          <div style="margin-top: 5px; text-align: center;">
            <p style="font-size: 1em; color: white">Enter the "city, state" e.g. "madison, wisconsin"</p>
          </div>
        </div>
        
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location" v-if="city !== ''">{{ this.capitalizeFirstLetter(city)}}, {{ weather.sys.country }}</div>
          <div class="location" v-else>{{  weather.name  }}, {{ weather.sys.country }}</div>
          
          <div class="weather-box">
            <div class="temp">{{ Math.round(weather.main.temp) }}°f</div>
            <div class="min_max">{{Math.round(weather.main.temp_min)}} ↓ {{Math.round(weather.main.temp_max)}} ↑</div>
            <div class="weather">{{weather.weather[0].description}} </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      api_key: '38999729e8c4a9563ab7381ed0187db1',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      city: '',
      state: ''
    }
  },
  methods: {
    fetchWeather(e) {
      for (var i = 0; i < 2; i++) {
        if (e.key == "Enter") {
          // fetch() is from JS
          if (this.query.split(",").length == 2) {
            this.city = this.query.split(",")[0].trim();
            this.state = this.query.split(",")[1].trim();
          }
          fetch(`${this.url_base}weather?q=${this.state},${this.city}&units=imperial&APPID=${this.api_key}`)
            .then(res => {
              return res.json();
            }).then(this.setResults);
        }
      }
    },
    setResults(results) {
      this.weather = results;
    },

    // from https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
    capitalizeFirstLetter(string) {
      return string.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
  z-index: -1;
  background: linear-gradient(rgba(47,150,163), rgba(48,62,143));
}

#app {
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#app.warm {
  background-image: url('./assets/warm-bg.jpg')
}

main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  
  color: #313131;
  font-size: 20px;

  appearance: none;
  border:none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 016px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  color: #FFF;
  text-align: center;
  margin-bottom: 5px;

  font-size: 40px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 20px 0px 0px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .min_max {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
