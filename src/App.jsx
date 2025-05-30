import LuckyN from "./LuckyN";
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";
import Box from "./Box";

function lessThan4(dice){
  return sum(dice) < 4;
}

function allSame(dice){
  return dice.every( (v) => v=== dice[0]);
}

function App() {
  return (
    <>

    <BoxGrid/>

      {/* <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      /> */}

{/* //U can put numDice if u want or not.. cuz in LuckyN.jsx , the default value is already set
//  */}
      {/* <LuckyN winCheck={lessThan4}  />
      <LuckyN winCheck={allSame}  numDice={3} /> */}

      {/* <LuckyN numDice={4} goal={10} color={"red"} /> */}
      {/* <LuckyN numDice={5} goal={10} color={"blue"} /> */}

    </>
  );
}

export default App;
