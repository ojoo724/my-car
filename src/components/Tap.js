function Tap({ type }) {
  let typeList = [];
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

  if (type === "fuel") {
    typeList = fuels;
  } else if (type === "body") {
    typeList = bodyTypes;
  } else if (type === "lugagge") {
    typeList = luggage;
  }

  return (
    <div>
      <h2>{type}</h2>
      <ul>
        {typeList.map((t) => (
          <li onClick={pickValue} value={t.type}>
            {t.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tap;
