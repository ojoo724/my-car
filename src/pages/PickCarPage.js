import { useState } from "react";
import "./PickCarPage.module.css";
import Tap from "../components/Tap";
import TapButton from "../components/TapButton";

function PickCarPage() {
  const [type, setType] = useState("");
  const [fuel, setFuel] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [price, setPrice] = useState("");
  const [lugagge, setLugagge] = useState("");

  const typeButtonClick = (type) => {
    setType(type);
  };

  return (
    <div>
      <TapButton
        onClick={typeButtonClick}
        value="fuel"
        name="연료타입"
      ></TapButton>
      <TapButton
        onClick={typeButtonClick}
        value="body"
        name="바디타입"
      ></TapButton>
      <TapButton
        onClick={typeButtonClick}
        value="price"
        name="예산범위"
      ></TapButton>
      <TapButton
        onClick={typeButtonClick}
        value="lugagge"
        name="공간활용"
      ></TapButton>
      <Tap type={type}></Tap>
      <div>
        <h2>고른 값들</h2>
        <p>연료: </p>
        <p>바디: </p>
        <p>짐: </p>
        <p>금액: </p>
      </div>
    </div>
  );
}

export default PickCarPage;
