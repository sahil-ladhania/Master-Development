import React from 'react';

const Cart = () => {
    return (
        <div className="container my-10 mx-auto p-8 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Cart</h1>
            <p className="text-gray-700 mb-4">
                Your cart is currently empty. Browse our restaurant listings to add items to your cart.
            </p>
            <div className="bg-gray-100 p-4 rounded">
                <h2 className="text-xl font-semibold">Items in Cart</h2>
                <p>No items in cart</p>
            </div>
        </div>
    );
}

export default Cart;