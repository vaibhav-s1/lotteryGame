import { useState } from "react";
import { genTicket, sum as calculateSum } from "./helper.js";
import Ticket from "./Ticket";

 
export default function Lottery({ n = 3, winCondition }) {
    const [ticket, setTicket] = useState(genTicket(n));
    
     
    let isWinning = winCondition(ticket);

    const buyTicket = () => {
        setTicket(genTicket(n));
    };

    return (
        <div className="Lottery">
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket} />
            <button onClick={buyTicket} className="btn">Buy New Ticket</button>
            <h3 className={isWinning ? "win" : ""}>
                {isWinning && "Congratulations, you won! 🎉"}
            </h3>
        </div>
    );
}