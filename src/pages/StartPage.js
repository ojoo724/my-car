import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div>
      <h1>
        <br />
        <strong>코드댓</strong>
      </h1>
      <p>
        11만 명이 넘는 비전공자, 코딩 입문자가 코드댓 무제한 멤버십을
        선택했어요.
        <br />
        지금 함께 시작해보실래요?
      </p>
      <div>
        <Link to="/pickCar">
          <button>지금 시작하기</button>
        </Link>
      </div>
    </div>
  );
}

export default StartPage;
