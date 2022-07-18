// import logo from "./logo.svg";
import { Component } from 'react';
import './App.css';
// import { Fragment } from "react";
// import { Component } from 'react';
// import MyComponent, {MyComponent2, MyComponent3} from './MyComponent';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import FormInput from './FormInput';
// import IterationSample from './IterationSample';
// import ValidationSample from './ValidationSample';
// import RefSample from './RefSample';
// import ScrollBox from './ScrollBox';

// 함수 컴포넌트
// function App() {
//   const name = '리액트';
//   return <div className="react">{name}</div>;
// }

// 클래스형 컴포넌트
// class App extends Component {
//     render() {
//         const name = 'react';
//         return <div className="react">{name}</div>;
//     }
// }

// // 컴포넌트 생성
// const App = () => {
//   return <MyComponent name="리액트" />; // 자동완성으로 넣을 시 해당 파일이 열려있는 경우 자동 import됨
// };

// // children
// const App = () => {
//   return (
//     <>
//       <MyComponent name={3} favoriteNumber={1}>
//         React
//       </MyComponent>
//       <br></br>
//       <MyComponent2 name={"React"} favoriteNumber={2}>
//         React2
//       </MyComponent2>
//       <br></br>
//       <MyComponent3 name={"리액트"} favoriteNumber={3}>
//         React3
//       </MyComponent3>
//     </>
//   );
// };

// // 클래스형 컴포넌트
// const App = () => {
//   return (
//       <MyComponent name={'React'} favoriteNumber={1}>
//         리이이이이이액애애애애애트트트트트트
//       </MyComponent>
//   );
// };

// // p104. 클래스형 컴포넌트의 state
// const App = () => {
//   return <Counter />;
// };

// // p112. 함수 컴포넌트의 useState
// const App = () => {
//   return <Say />;
// };

// // p124. 컴포넌트 생성 / 이벤트 핸들링
// const App = () => {
//   return <EventPractice></EventPractice>;
// };


// // FormInput
// const App = () => {
//   return <FormInput />;
// };


// // p145. ref 예제 컴포넌트
// const App = () => {
//   // return <ValidationSample />
//   // return <RefSample />
  
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => this.scrollBox=ref} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
//         {/* <button onClick={this.scrollBox.scrollToBottom}>맨 밑으로</button> 
//             이렇게 작성하면 문법상으로 오류는 없으나 버튼 생성 시점에 scrollBox가 생성이 되지않아 undefined상태임.
//             그렇기 때문에 콜백함수로 만들어서 호출하면 시점을 조절할 수 있다. 
//             (함수는 먼저 렌더링 된 후에 함수를 호출하기 때문) */}
//         <button onClick={() => this.scrollBox.scrollToTop()}>맨 위로</button>
//       </div>
//     );
//   }
// }


// // p160. 데이터 배열을 컴포넌트 배열로 변환하기
// class App extends Component {
//   render() {
//     return (
//       <IterationSample />
//     );
//   }
// }


// p181. 라이프사이클메서드 사용하기
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {color:'#000000'};

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
