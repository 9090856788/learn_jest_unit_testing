import React, { useState } from "react";

const InputOnChangeEvent = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <h1>Welcome to Jest onChange event Tutorial</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
};

export default InputOnChangeEvent;
