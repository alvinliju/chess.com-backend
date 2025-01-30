import React from 'react';
import chessImage from '../assets/chess.png';
import {Button} from '../components/Button'
import { useNavigate } from 'react-router-dom';
export const Landing = () => {
    const navigate = useNavigate();
    return (
    <div>
        <div className='mt-2'>
            <div className='mt-10 p-2 grid grid-cols gap-4 md:grid-cols-2'>
                <div className='flex justify-center '>
                    <img className='rounded-lg h-96 ' src={chessImage} alt="Chess"/>
                </div>
                <div className='flex flex-col justify-center items-center flex-wrap gap-10 p-6 md:p-0 '>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold  text-center justify-center mx-auto'>
                        Play Chess Online on the #1 Site!
                    </h1>
                    <div className='mt-4'>
                    <Button onClick={() => navigate("/game")} >
                        Play Now
                    </Button>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )}