'use client'

import { useState } from "react"

export default function ButtonQuantity() {

    const [quantity, setQuantity] = useState(1);

    console.log('Button render')

    function increment () {
        setQuantity(quantity + 1)
    }

    function decrement () {
        if (quantity === 1) {
            return;
        }

        setQuantity(quantity - 1)
    }

    function handleInput(event) {
        setQuantity(Number(event.target.value))
    }
    
    return (
        <div className="quantity w-fit p-2 border *:inline leading-none text-gray-500 ">
            <button className='w-8 h-full text-lg' onClick={decrement}>-</button>
            <input type="number" name="quantity" className='w-10 text-center' value={quantity} onInput={handleInput}/>
            <button className='w-8 h-full text-lg' onClick={increment}>+</button>
        </div>
    )
}