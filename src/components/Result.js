import items from "../assets/json/car.json";

function ResultDiv({ car }) {
  const { name, imgUrl, price, buyUrl } = car;

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={name} />
      <div>{name}</div>
      <div>{price}</div>
      <a href={buyUrl} target="_blank" rel="noopener noreferrer">
        구매하러가기
      </a>
    </div>
  );
}

function Result({ fuel, bodyType, luggage, minPrice, maxPrice }) {
  const pickFuel = fuel.type;
  const pickBodyType = bodyType.type;
  const pickLuggage = luggage.type;
  const pickMinPrice = minPrice;
  const pickMaxPrice = maxPrice;

  let pickCar = [];
  let pickIndex = [];
  for (let i = 0; i < items.length; i++) {
    // 01. 선택한 연료 확인
    if (items[i].fuel.indexOf(pickFuel) === -1) {
      console.log(i + " | 연료 X");
      continue;
    }
    // 02. 선택한 바디타입 확인
    if (items[i].bodyType !== pickBodyType) {
      console.log(i + " | 바디 X");
      continue;
    }
    // 03. 선택한 짐크기 확인
    if (pickLuggage === "M") {
      if (items[i].luggage === "S") {
        console.log(i + " | 짐 X");
        continue;
      }
    } else if (pickLuggage === "L") {
      if (items[i].luggage === "S") {
        console.log(i + " | 짐 X");
        continue;
      }
      if (items[i].luggage === "M") {
        console.log(i + " | 짐 X");
        continue;
      }
    }
    // 04. 선택한 가격 확인
    if (items[i].price < pickMinPrice || items[i].price > pickMaxPrice) {
      console.log(i + " | 금액 X");
      continue;
    }

    pickIndex.push(i);
  }
  // TODO: 중복을 처리하는 대신에 하나씩 확인하고 멈추는게 좋을듯 하다.
  let count = 1;
  for (let i = 0; i < pickIndex.length; i++) {
    if (count === 3) {
      break;
    }
    pickCar.push(items[pickIndex[i]]);
    count++;
  }

  return (
    <div>
      {pickCar.map((car) => (
        <ResultDiv car={car} />
      ))}
    </div>
  );
}

export default Result;
