import React from "react";
import classes from './App.module.css';
import heartbeat from './heartbeat.png';


const ProductPreview = (props)=>{
  const currenthour=new Date().getHours()> 9 ? new Date().getHours(): '0'+ new Date().getHours();
  const currentminute=new Date().getMinutes()> 9 ? new Date().getMinutes(): '0'+ new Date().getMinutes();
  return(
    <div className={classes.ProductPreview}>
         <img src={props.currentpreviewimage} alt={props.styleName}/>
         {
           props.currentselectedfeature === 1 ?
           
            <div className={classes.heartbeatdata}>
              <img src={heartbeat} alt="heartbeat-icon"/>
              <p>78</p>
            </div>

           :

            <div className={classes.timedata}>
                <p>{currenthour}:{currentminute}</p>
            </div>
          }
          
    </div>
  );
}
export default ProductPreview;