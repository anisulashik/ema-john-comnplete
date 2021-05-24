import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)
    const total = cart.reduce((total,pd)=> total+pd.price,0)
    let shipping =0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping =12.49
    }

    const tax = total/10;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }
    const grandTotal = total+tax+shipping;
    return (
        <div>
            Order Summery
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping :{shipping}</p>
            <p> <small> Tax : {formatNumber(tax)}</small></p>
            <p>Total Price : {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;