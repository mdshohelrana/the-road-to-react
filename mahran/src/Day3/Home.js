import React, { useState } from "react";
import InputText from "./components/InputText";
import Button from "./components/Button";

export default function Home() {
  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const handleText = () => setText(value);
  const handleClear = () => (setText(""), setValue(""));
  return (
    <div>
      <label htmlFor="">Type some Text: </label>
      <InputText
        type="input"
        onChange={onChange}
        value={value}
        placeholder="Write some text"
      />

      <Button type="button" onClick={handleText} text="Show Text " />
      <Button type="button" onClick={handleClear} text="Clear Text" />
      <h2>{text}</h2>
    </div>
  );
}
