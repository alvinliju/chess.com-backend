import React from "react";

export const Button = ({onClick, children}: {onClick:()=> void, children:React.ReactNode}) =>{
    return <button className='bg-green-600 hover:bg-green-800 cursor-pointer text-white text-2xl font-bold px-6 py-4 rounded shadow-md shadow-green-800 '> {children} </button>

}