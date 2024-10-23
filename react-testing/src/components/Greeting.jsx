import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <h2>Lorem ipsum dolor sit.</h2>
      {!click && <Output>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, obcaecati?</Output>}
      {click && <Output>Changed!</Output>}
      <button onClick={handleClick}>Change</button>
    </div>
  );
}
