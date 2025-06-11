import React, { useState } from "react";

const OnClickEventOnButton = () => {
  const [data, setData] = useState("");

  return (
    <>
      <div>
        <h2>Testing onClick event handler</h2>
        <button onClick={() => setData("Data")}>update Data</button>
        <h2>{data}</h2>
      </div>
    </>
  );
};

export default OnClickEventOnButton;
