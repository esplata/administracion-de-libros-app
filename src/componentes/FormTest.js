import React, { useState } from "react";
import { useNavigation, useSubmit } from "react-router-dom";
import { Form } from "react-router";

export default function FormTest() {
  const [value, setValue] = useState(0);

  function onSubmitAction(e) {
    e.preventDefault();
    console.log(value);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <Form onSubmit={onSubmitAction}>
      <input type="number" value={value} name="num" onInput={handleChange} />
      <button type="submit">Submit</button>
    </Form>
  );
}
