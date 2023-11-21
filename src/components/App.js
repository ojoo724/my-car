import { Component } from "react";
import "../assets/css/App.css";
import Fuel from "./Fuel";
import Result from "./Result";

const fuels = [
  {
    id: 1,
    name: "가솔린",
    type: "G",
  },
  {
    id: 2,
    name: "디젤",
    type: "D",
  },
  {
    id: 3,
    name: "친환경",
    type: "E",
  },
  {
    id: 4,
    name: "LPG",
    type: "L",
  },
];

const bodyTypes = [
  {
    id: 1,
    name: "경차",
    type: "light",
  },
  {
    id: 2,
    name: "승용차",
    type: "sedan",
  },
  {
    id: 3,
    name: "SUV",
    type: "suv",
  },
  {
    id: 4,
    name: "MPV",
    type: "mpv",
  },
];

const luggage = [
  {
    id: 1,
    name: "소형짐",
    type: "S",
  },
  {
    id: 2,
    name: "중형짐",
    type: "M",
  },
  {
    id: 3,
    name: "대형짐",
    type: "L",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <h1>자동차 추천 서비스</h1>
        <div className="fuel__div">
          <h2>연료 타입</h2>
          <div>
            {fuels.map((f, idx) => {
              return (
                <Fuel idx={idx + 1} key={f.id} name={f.name} type={f.type} />
              );
            })}
          </div>
        </div>
        <div>
          <h2>Result</h2>
          <Result
            fuel={fuels[0]}
            bodyType={bodyTypes[1]}
            luggage={luggage[1]}
            minPrice="20000000"
            maxPrice="30000000"
          />
        </div>
      </div>
    );
  }
}

export default App;
