import items from "../assets/json/car.json";

function Result({ fuel, bodyType, luggage, minPrice, maxPrice }) {
  const pickFuel = fuel.type;
  const pickBodyType = bodyType.type;
  const pickLuggage = luggage.type;
  const pickMinPrice = minPrice;
  const pickMaxPrice = maxPrice;

  let pickCar = items;
  let delIndex = [];
  for (let i = 0; i < items.length; i++) {
    // 01. 선택한 연료 확인
    if (items[i].fuel.indexOf(pickFuel) === -1) {
      delIndex.push(i);
    }
    // 02. 선택한 바디타입 확인
    if (items[i].bodyType !== pickBodyType) {
      delIndex.push(i);
    }
    // 03. 선택한 짐크기 확인
    if (items[i].luggage !== pickLuggage) {
      delIndex.push(i);
    }
    // 04. 선택한 가격 확인
    if (items[i].price < pickMinPrice || items[i].price > pickMaxPrice) {
      delIndex.push(i);
    }
  }

  const uniqueDelIndex = delIndex.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  let pickIndex = 0;

  for (let i = 0; i < pickCar.length; i++) {
    if (i !== uniqueDelIndex[i]) {
      pickIndex = i;
      break;
    }
  }

  // 하나만 뽑아 낼수 있음 여러개를 뽑을때는 어떤식으로 하면 좋을지 고민해보자
  console.log(pickCar[pickIndex]);

  return <ul></ul>;
}

export default Result;
