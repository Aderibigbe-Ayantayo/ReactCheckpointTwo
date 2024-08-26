import React from 'react';
import product from './product';

const Image = ({name, image, price, click}) => {
  return (
    <div style={{width:"300px" , marginLeft:"10px", marginTop: '4px' , border: 'solid', borderRadius : '15px', borderWidth: '8px', borderColor: 'yellow' }} onClick={click} >
          
        <img src={image} alt={product.name}  style={{height:"200px" , borderRadius:"30px"}}/>
          <h2>{name}</h2>
          <p>${price}</p>
          






   </div>

   
      
   

 
  );
};

export default Image;