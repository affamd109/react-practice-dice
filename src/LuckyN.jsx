import { useState } from "react"
// import { getRolls , sum } from "./utils"
import { getRolls  } from "./utils"
import Dice from "./Dice";


// export default function LuckyN({numDice = 2, goal=7 ,color}){

export default function LuckyN({numDice = 2, winCheck}){

  const [dice , setDice] = useState(getRolls(numDice));
  // const isWinner = sum(dice) === goal;
  const isWinner = winCheck(dice);

  const roll = () =>{
    setDice(getRolls(numDice));
  }


  return (
    <main className="LuckyN">
      <h1>Lucky {isWinner && "You win!" } </h1>
      <Dice dice={dice}  />
      <button onClick={roll} >Roll again </button>



    </main>
  )
}