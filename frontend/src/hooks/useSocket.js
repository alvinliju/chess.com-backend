import { Socket } from "dgram";
import { useEffect, useState } from "react"

export const useSocket = () => {
    const [socket, setScokets] = useState<WebSocket | null>(null)
     useEffect(()=>{
        const ws = new WebSocket();
        ws.onopen = () => {
            console.log("connected")
            setScokets(ws)
        }

        ws.onclose = () => {
            console.log("disconnected")
            setScokets(null)
        }

        return () => {
            ws.close()
        }
     },[])

     return socket
}