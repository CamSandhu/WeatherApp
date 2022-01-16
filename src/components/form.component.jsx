import React from "react";
import "./form.style.css";

const Form=(props)=>{
   return(
     <div className="container">
     <div className="mt-3 mb-4  ">{props.error? error():null}</div>
      <form onSubmit ={props.loadWeather} >
       <div className="row ">
         <div className="  col-5">
             <input type="text" className="form-control"  name="city" autoComplete="off"  placeholder="City"/>
          </div>

          <div className= " col-7">
              <input type="text" className="form-control"  name="country" autoComplete="off" placeholder="Country"></input>
            <button type="submit"><i className="fas fa-search "></i></button>
           </div>

       </div>
       </form>
     </div>
   );

function error(){
  return(
<span className="alert alert-danger" role="alert">
     Please enter city and country
</span>

  );
}
}

export default Form;
