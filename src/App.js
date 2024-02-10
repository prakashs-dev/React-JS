import React from "react";

const bold = <b>Bold paragraph</b>;
const bold1 = <div>Bold paragraph</div>;
const bold2 = <div>Bold paragraph</div>;

let arr = [bold, bold1, bold2];
// export const app = (
//   <div>
//     {arr}
//     <p>{10 + 20}</p>
//   </div>
// );

export const app = function ({id, className}) {
  console.log(id, className);
  return (
    <div>
      <p>paragraph tag</p>
      <button>click me</button>
    </div>
  );
};
