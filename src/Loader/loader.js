import React from "react";
import "./loader.css";

const Loader = ({isLoading}) => {
    
    return isLoading ? <div> <p> Your Image is Loading... Please wait for few seconds.</p> <div className="loader"> </div> </div> : <div></div>
}

export default Loader;