import React from 'react';
import { WeatherContainer, Card, CityDiv, CityName, TempertureDiv, TemperatureText, FeelsLikeDiv, FeelsLikeText, WeatherDiv, WeatherText, DateDiv, DateText } from '../../style/styled';
import { Search, SearchIcon, SearchDiv } from '../../style/styled';
export default function WeatherApp() {

  const api = {
    key: "55b61754175b5d05afaf196fc9c76dfd",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [city, setCity] = React.useState('');
  const [weatherData, setWeatherData] = React.useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}&lang=pt_br`)
        .then(res => res.json())
        .then(result => {
          setWeatherData(result);
          setCity('');
        });
    }
  }

  const iconBuilder = (iconId) => {
    let icon = `https://openweathermap.org/img/w/${iconId}.png`;
    return icon;
  }

  const dateBuilder = (date) => {
    let text = date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', weekday: 'long', day: 'numeric', month: 'long' });
    return text
  }

  return (    
    <div>
      <SearchDiv className="searchDiv">
        <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
        <Search type="text" placeholder="Pesquise uma cidade..." onChange={(e => {setCity(e.target.value)})} value={city} onKeyPress={search} />
      </SearchDiv>
      <WeatherContainer className="container">
        <Card className="card">
          {typeof weatherData.main != "undefined" ? (
            <>
            <CityDiv className="city">
              <i class="fa-solid fa-location-dot"></i>
              <CityName>{weatherData.name}, {weatherData.sys.country}</CityName>
            </CityDiv>
            <TempertureDiv className="temperature">
              <img src={iconBuilder(weatherData.weather[0].icon)} alt="" />
              <TemperatureText>{Math.round(weatherData.main.temp)}°C</TemperatureText>
            </TempertureDiv>
            <FeelsLikeDiv className="feelsLike">
              <FeelsLikeText>Sensação {Math.round(weatherData.main.feels_like)}°C</FeelsLikeText>
            </FeelsLikeDiv>
            <WeatherDiv className="weather">
              <WeatherText>{weatherData.weather[0].description}</WeatherText>
            </WeatherDiv>
            <DateDiv className="date">
              {<DateText>{dateBuilder(new Date())}</DateText>}
            </DateDiv>
          </> ) : (
            <div align="center">
              <h2>Seja bem vindo!</h2>
              <h4>Pesquise uma cidade para ver o tempo...</h4>
            </div>
          )}
          
        </Card>
      </WeatherContainer>
    </div>
  );
}
