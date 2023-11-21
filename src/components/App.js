import { Component } from "react";
import "./assets/css/App.css";
import Fuel from "./Fuel";

const fuels = [
  {
    id: 1,
    kname: "가솔린",
    type: "gasoline",
  },
  {
    id: 2,
    kname: "디젤",
    type: "diesel",
  },
  {
    id: 3,
    kname: "친환경",
    type: "eco",
  },
  {
    id: 4,
    kname: "LPG",
    type: "lpg",
  },
];

const bodyTypes = [
  {
    id: 1,
    kname: "경차",
    type: "light",
  },
  {
    id: 2,
    kname: "승용차",
    type: "sedan",
  },
  {
    id: 3,
    kname: "SUV",
    type: "SUV",
  },
  {
    id: 4,
    kname: "MPV",
    type: "MPV",
  },
];

const luggage = [
  {
    id: 1,
    kname: "소형짐",
    type: "small",
  },
  {
    id: 2,
    kname: "중형짐",
    type: "medium",
  },
  {
    id: 3,
    kname: "대형짐",
    type: "large",
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
                <Fuel idx={idx + 1} key={f.id} kname={f.kname} type={f.type} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
