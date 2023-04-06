import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../fakedb';
import Card from '../Card/Card';
import './Container.css'
const Container = () => {
    const [cartitem,setCartitem]=useState([]);
    useEffect(()=>{
        fetch('fakedata.js')
        .then(res=>res.json())
        .then(data=>setCartitem(data))
    },[cartitem])
const [cart,setCart]=useState([]);
useEffect(()=>{
    let getlocalvalue2=[];
    // console.log(cartitem);
   let shopcart=getShoppingCart();
for(let id in shopcart){
// console.log(id)
 let getlocalvalue=cartitem.find(index=>index.id===id)
if(getlocalvalue){
    // console.log(getlocalvalue.quantity);
    // console.log(shopcart[id]);
    getlocalvalue.quantity=shopcart[id];

getlocalvalue2.push(getlocalvalue);
//    console.log(getlocalvalue);

 
}

}
setCart(getlocalvalue2);



},[cartitem])
function handler(product){
    addToDb(product.id);
    
     let newArray=[];
     let newArray2=[];

    let exist=cartitem.find(pd=>pd.id==cart.id);
    if(!exist){
        // if(product.quantity==0){
            product.quantity=1;
            
            newArray=[...cart,product];
        // }
        

    }
    else{
        exist.quantity=exist.quantity+1;
        let remain=cartitem.filter(index=>index.id!==cart.id)
        newArray=[...remain,exist];
    }


setCart(newArray);
}
let sum=0;
let quantity=0;
let name=[];
let tax;
for(let i of cart){
 
    name.push(i);
    sum=sum+(i.price*i.quantity);
    tax=(sum*7)/100
    quantity=quantity+i.quantity;

}
// let totalprice=0;
 
// for(let i of cart){
// totalprice=totalprice+i.price
// }


//Get LocalStorage Values




// console.log(cart);

    return (
        <div className='container'>
<div className="card_container">
{
    cartitem.map(index=><Card values={index} key={index.id} handler={handler}></Card>)
}

</div>
<div className="side_container">

<h6>Total item:{quantity} </h6>
<h6>Total price:{sum} </h6>
<h6>Tax:{tax}</h6>
 {/* <p>Cricketer Name: {name}</p> */}

{
    name.map(index=><li>{index.name}</li>)
}
</div>
            
        </div>
    );
};

export default Container;