import axios from "axios";
import React, { useEffect } from "react";

function FetchData() {
  useEffect(() => {
    axios("https://api.postalpincode.in/pincode/631003").then((res) =>
      console.log(res)
    );
  }, []);
  return <div>fetchData</div>;
}

export default FetchData;
