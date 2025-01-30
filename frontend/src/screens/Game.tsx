import React from "react"
import { ChessBoard } from "../components/ChessBoard"
export const Game = () => {
    return <div>
        <div className="justify-center flex" >
            <div className="pt-8 max-w-screen-lg w-full">
            <div className="grid grid-cols-6 gap-4 w-full">
                <div className="col-span-4 bg-red-400 w-full">
                    <ChessBoard/>
                </div>
                <div className="col-span-2 bg-blue-400 w-full">
                    <button>Play</button>
                </div>
            </div>
            </div>  
        </div>
    </div>
}