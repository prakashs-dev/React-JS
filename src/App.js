import React from "react";
import { useState } from "react";

// const bold = <b>Bold paragraph</b>;
// const bold1 = <div>Bold paragraph</div>;
// const bold2 = <div>Bold paragraph</div>;

// let arr = [bold, bold1, bold2];
// export const app = (
//   <div>
//     {arr}
//     <p>{10 + 20}</p>
//   </div>
// );

// export const app = function ({id, className}) {
//   console.log(id, className);
//   return (
//     <div>
//       <p>paragraph tag</p>
//       <button>click me</button>
//     </div>
//   );
// };

// export const App = () => {
//   const styele = {
//     card: {
//       backgroundColor: "red",
//       fontSize: "5rem",
//     },
//   };
//   return (
//     <div>
//       <p style={styele.card}>Hello</p>
//     </div>
//   );
// };

// const App = () => {
//   // console.log("renderd");
//   let [count, setCount] = useState(0);
//   const inc = () => {
//     count++;
//     setCount(count);
//     console.log("render",count);
//   };
//   const dec = () => {
//     setCount;
//   };
//   return (
//     <div className="counter" style={styele.counter}>
//       <button onClick={dec}>-</button>
//       <h1>{count}</h1>
//       <button onClick={inc}>+</button>
//     </div>
//   );
// };

// const styele = {
//   counter: {
//     display: "flex",
//   },
// };

// const report = [
//   {
//       city: "Hyderbad",
//       temparature: 30,
//   },
//   {
//       city: "Mumbai",
//       temparature: 22,
//   },
//   {
//       city: "Rajasthan",
//       temparature: 40,
//   },
//   {
//       city: "Jammu",
//       temparature: 6,
//   },
//   {
//       city: "Assam",
//       temparature: 13,
//   },
//   {
//       city: "Bangalore",
//       temparature: 21,
//   }
// ]

// const mapper = (location) => {
//   const text = location.temparature > 25 ? "Too hot" :
//       location.temparature <= 15 ? "Too cold" : "Moderate";

//   const textColor = location.temparature > 25 ? "red" :
//       location.temparature <= 15 ? "blue" : "orange";

//   return <p>{location.city}  : <span style={{ color: textColor }}>{text}</span></p>
// }

// const App = () => {
//   return (
//       <div>{report.map(mapper)}</div>
//   )
// }

const App = () => {
  const [inputvalue, setValue] = useState("");

  const onChageText = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="name">Enter Your Name </label>
      <input onChange={onChageText} />
      {inputvalue && <p>{`Hello ${inputvalue}!`}</p>}
    </div>
  );
};

export default App;
