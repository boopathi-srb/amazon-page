import React,{Component} from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar'
import ProductData from './ProductData';


class App extends Component{
  state={
    productData: ProductData,
    currentpreviewimagepos :0,
    currentselectedfeature : 0,
  }
  oncoloroptionclick = (pos) =>{
    this.setState({currentpreviewimagepos:pos});
  }
  onFeatureItemClick = (pos) => {
    
  this.setState({currentselectedfeature: pos});
  }
 
  
  render()
  {
 
  return (
    <div className="App">
      <header className="App-header">
        <Topbar/>
      </header>
      <div className={classes.maincontainer}>
        <div className={classes.productpreview}>
          <ProductPreview currentpreviewimage={
            this.state.productData.colorOptions[this.state.currentpreviewimagepos].imageUrl}
            currentselectedfeature={this.state.currentselectedfeature}
            
         />
        </div>
        <div className={classes.productdetails}>
           <ProductDetails data={this.state.productData} oncoloroptionclick={this.oncoloroptionclick} 
            currentpreviewimagepos={this.state.currentpreviewimagepos} onFeatureItemClick=
            {this.onFeatureItemClick}  currentselectedfeature={this.state.currentselectedfeature}/>
        </div>
      </div>
   </div>
  );
  }

}
  


export default App;
