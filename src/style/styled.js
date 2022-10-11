import styled from 'styled-components';
export const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2vh 0 5vh 0;
`;

export const Search = styled.input`
  width: 18vw;
  min-width: 250px;
  height: 4vh;
  min-height: 25px;
  border: 1px solid rgb(255, 255, 255, 0.25);
  border-radius: 4px;
  transition: all 0.5s ease-out;
  font-size: 1.2em;
  background-color: rgb(255, 255, 255, 0.25);
  &:focus {
    outline: none;
    background-color: #ebebe0;
  }
  ::placeholder {
    font-size: 0.7em;
    color: #000000;
  }
`;

export const SearchIcon = styled.i`
  font-size: 1.2em;
  margin: 0.3vh 0.5vw 0 -1vw;
`;

export const WeatherContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  min-height: 468px;
  width: 20vw;
  min-width: 260px;
  padding: 1vw;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #333333;
  background-color: rgb(255, 255, 255, 0.10);
  backdrop-filter: blur(5px);
`;

export const CityDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5vw;
  margin: 10vh 0 8vh 0;
`;


export const CityName = styled.h1`
  font-size: 1.8em;
  font-weight: 600;
`;

export const TempertureDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5vh;
`;

export const TemperatureText = styled.h1`
  font-size: 4em;
  font-weight: 200;
`;

export const FeelsLikeDiv = styled.div`
  margin-bottom: 5vh;
`;

export const FeelsLikeText = styled.p`
  font-size: 1.2em;
`;

export const WeatherDiv = styled.div`
  margin-top: 3vh;
`;

export const WeatherText = styled.p`
  font-weight: 600;
  font-size: 1.1em;
`;

export const DateDiv = styled.div`
  margin-top: 8vh;
`;

export const DateText = styled.p`
  font-size: 1.1em;
  font-weight: 600;
`;
