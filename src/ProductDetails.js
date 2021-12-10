import React from "react";
import classes from './App.module.css';
// import BuyNow from './BuyNow.js';


const ProductDetails=(props)=>{
  const colorOptions=props.data.colorOptions.map((item,pos)=>{
    const classArr=[classes.productimage]
    if(pos===props.currentpreviewimagepos){
      classArr.push(classes.selectedproductimage);
    }
    return(
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} 
      onClick={()=>props.oncoloroptionclick(pos)}/>
    );
  })
  const featureList=props.data.featureList.map((item, pos)=>{
     const classArr=[classes.featurename];

    if(pos===1 && props.currentselectedfeature){
         classArr.push(classes.selectedfeature);
      }
     else if(pos===0 && !props.currentselectedfeature){
      classArr.push(classes.selectedfeature);
     }
     else{
       classArr.push(classes.featurename)
     }

    return(
      <button onClick ={() => props.onFeatureItemClick(pos)} key={pos} 
      className={classArr.join(' ')}>{item}</button>
    );



  })

  return(
    <div>
            <h1 className={classes.producttitle}>{props.data.title}</h1>
            <p className={classes.productdescription}>{props.data.description}</p>
            <h3 className={classes.selectionheading}>Select color</h3>
            <div>
              {colorOptions}
            </div>
            <h3 className={classes.selectionheading}>Features</h3>
            <div>
              {featureList}
            </div>
            <a href="https://www.fitbit.com/global/us/products/smartwatches/sense?sku=512SRSG"  className={classes.buynowbtn}>Buy Now</a>
    </div>
  );
}
export default ProductDetails;