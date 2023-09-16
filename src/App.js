import "./styles.css";
import concatArray from "./problems/concat_of_array";
import shuffleArray from "./problems/shuffle_array";
import goodPairs from "./problems/good_pairs";
import pascalTriangle from "./problems/pascal_triangle";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <p> problem: concatenation of array</p>
        <p> input value: [1, 2, 3, 4, 5] </p>
        <p> output value: {JSON.stringify(concatArray([1, 2, 3, 4, 5]))}</p>
      </div>
      <hr></hr>
      <div>
        <p>problem: shuffle of array</p>
        <p>input value: [1, 2, 3, 4, 5, 6] </p>
        <p>output value:{JSON.stringify(shuffleArray([1, 2, 3, 4, 5, 6]))}</p>
      </div>
      <hr></hr>
      <div>
        <p>problem: good pairs in an array</p>
        <p>input value: [1,2,3,1,1,3] </p>
        <p>output value:{JSON.stringify(goodPairs([1, 2, 3, 1, 1, 3]))}</p>
      </div>
      <hr></hr>
      <div>
        <p>problem: pascal's triangle</p>
        <p>input value: 5 </p>
        <p>output value:{JSON.stringify(pascalTriangle(5))}</p>
      </div>
      <hr></hr>
    </div>
  );
}
