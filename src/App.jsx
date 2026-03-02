import Lottery from "./Lottery";
import { sum } from "./helper.js";

export default function App() {
     
    const winRule = (ticket) => sum(ticket) === 15;

    return (
        <div className="App">
            <Lottery n={3} winCondition={winRule} />
        </div>
    );
}