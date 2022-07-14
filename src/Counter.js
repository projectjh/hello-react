import { Component } from 'react';

class Counter extends Component {
  //   constructor(props) {              // 생성자 : 객체가 생성될때 자동으로 호출되는 메서드 (여기서는 상태에 대한 정보를 설정하기 위해 생성자 사용)
  //     super(props);                   // super는 부모인 component를 불러오는 값으로 default값 (순서 중요!)

  //     this.state = {                  // this는 counter로 만들어진 객체
  //       number: 0,                    // counter에 state라는 객체를 생성하겠다는 의미
  //       fixedNumber : 0
  //     };
  //   }

  // 생성자 없이 state 초기값 설정
  // 상태정보 말고 다른 정보를 가져올 일 없을때는 이렇게만 서술해도 된다.
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // 비구조화 할당
    return (
      <div>
        <h1>{number}</h1> {/* 상태정보 출력 */}
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        {/* 이벤트 출력할때 화살표 함수를 사용하자 
            state 값을 변경하기 위해서는 setState와 함께 사용

            렌더링은 상태값의 변화가 발생했을때 발생 
        */}
        {/* 비동기 업데이트 */}
        {/* <button
          onClick={() => {
            this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +1
        </button> */}
        <button
          onClick={() => {
            // this.setState((prevState) => {
            //     return {
            //         number:prevState.number+1,
            //     };
            // });
            // this.setState((prevState) => ({
            //     number:prevState.number+1,
            // }));

            this.setState({ number: number + 1 }, () => {
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
