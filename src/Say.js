import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState(''); // useState안에 값을 넣어주면 클릭 전 초기값이 들어간다.
  // useState의 값은 객체여도 아니어도 된다.
  const onClickEnter = () => setMessage('안녕하세요🙋‍♀️'); // 함수의 내용이 변경될 일은 거의 없기 때문에 const 변수명 사용
  const onClickLeave = () => setMessage('안녕히 가세요🙇');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      {/* <h1>{message}</h1> */}

      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        {/* 익명함수를 직접 onclick에 대입한 구조 (일회성으로 여기에만 사용가능함) */}
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
