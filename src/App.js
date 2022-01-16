
import './App.css';
import Weather from './components/weather.component.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import React from "react";
import Form from "./components/form.component.jsx";

const API_KEY="086d7cb37a600cb49ea24ffb3a2238d3";


class App extends React.Component{


   constructor(){

     super();
     this.state={
    city:undefined,
     country:undefined,
     max:undefined,
      min:undefined,
     description:"",
      icon:undefined,
      celsius:undefined,
      error:false,
    };


     this.weatherIcon={
       Thunderstorm:"wi-thunderstorm",
       Drizzle:"wi-sleet",
       Rain:"wi-storm-showers",
       Snow:"wi-snow",
       Atmosphere:"wi-fog",
       Clear:"wi-day-sunny",
       Clouds:"wi-day-fog"
     };
   }


get_WeatherIcon=(icon, rangeId)=>{
   console.log(this);
  switch(true){
    case rangeId>=200 && rangeId<=232:
    this.setState({icon:this.weatherIcon.Thunderstorm});
    break;

    case rangeId>=300 && rangeId<=321:
    this.setState({icon:this.weatherIcon.Drizzle});
    break;

    case rangeId>=500 && rangeId<=531:
    this.setState({icon:this.weatherIcon.Rain});
    break;

    case rangeId>=600 && rangeId<=622:
    this.setState({icon:this.weatherIcon.Snow});
    break;

    case rangeId>=701 && rangeId<=781:
    this.setState({icon:this.weatherIcon.Atmosphere});
    break;

    case rangeId>=800:
    this.setState({icon:this.weatherIcon.Clouds});
    break;

    case rangeId===800:
    this.setState({icon:this.weatherIcon.Clear});
    break;
    default:
    console.log(`Sorry, we are out of`);
  }
}

converToCelsius(temp){
  let celsius= Math.floor(temp-273.15);
  return celsius;
}
   getWeather=async(e)=>{

    e.preventDefault();

    const city= e.target.elements.city.value;

    const country= e.target.elements.country.value;

     if(city&& country){
        this.setState({error:false})
       const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

       const response=await api_call.json();

       console.log(response)

       this.setState({
            city:`${response.name}  ${response.sys.country}`,
            max:this.converToCelsius(response.main.temp_max),
            min:this.converToCelsius(response.main.temp_min),
            description:response.weather[0].description,
            celsius:this.converToCelsius(response.main.temp)
       });

       this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
     }

     else{ this.setState({error:true})}
   }
const

  render(){
    return(
      <div className="App" style={{background:"rgba(0,0,0,0.8)"}}>
       <Form loadWeather={this.getWeather} error={this.state.error}/>

     <Weather city={this.state.city}
      country={this.state.country}
      max={this.state.max}
       min={this.state.min}
       description={this.state.description}
        celsius={this.state.celsius}
        icon={this.state.icon}
        />

      </div>
    );
  }


  }


export default App;
