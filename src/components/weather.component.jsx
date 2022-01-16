import React from 'react';
import "./weather.style.css";


const Weather=(props)=>{
return(
  <div className="container">
     <div className="cards pt-4">
     <h1 id="cityNcountry">{props.city}</h1>
     <h5 className="py-4">
 <i className={`wi ${props.icon} display-1`}/>
     </h5>
     {props.celsius?(<h1 className="py-2">{props.celsius}&deg;</h1>):null}


<div id="minMax">{minMaxTemp(props.min, props.max)}</div>
   <h4 className="py-3">{props.description}</h4>
     </div>
  </div>
);
};

function minMaxTemp(min, max){
  if(min && max){return(
      <h3>
       <span className="px-4">{min}&deg;</span>
       <span className="px-4">{max}&deg;</span>
      </h3>

  );}

}
export default Weather;
