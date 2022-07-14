// import PropTypes from 'prop-types';
import {Component} from 'react';

// // 88p 컴포넌트 생성
// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };


// // 92p props
// const MyComponent = (props) => {
//   return <div>안녕하세요. 제 이름은 {props.name}입니다.</div>;
// };
// MyComponent.defaultProps = {
//   name: '기본 이름',
// };


// // 94p children
// // const MyComponent = (props) => {
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   //   const { children, name, favoriteNumber } = props; // 비구조화 할당 문법 (내부의 순서는 값을 불러오는 데에 영향X)
//   // console.log(props);
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다.
//       <br></br>
//       children 값은 {children}입니다.
//       <br></br>
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// const MyComponent2 = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다.
//       <br></br>
//       children 값은 {children}입니다.
//       <br></br>
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// const MyComponent3 = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다.
//       <br></br>
//       children 값은 {children}입니다.
//       <br></br>
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };


// MyComponent.defaultProps = {
//   name: '기본 이름',
// };
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };


// 클래스형 컴포넌트에서 props 사용하기
class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
          <div>
            안녕하세요, 제 이름은 {name}입니다. 
            <br></br>
            children 값은 {children}입니다. 
            <br></br>
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
          </div>
        );
    }
}


export default MyComponent;
// export {MyComponent2, MyComponent3};
