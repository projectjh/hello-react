import {Component} from 'react';

class LifeCycleSample extends Component {
    state = {                               // 이 state 구조를 생성자 내부에 작성해도 상관은 없다.
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props) {
        super(props);                       // 부모 component 클래스의 생성자 호출
        console.log('constructor');
    }

    // 컴포넌트가 마운트 될때 & 업데이트 될때 호출
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            return {color:nextProps.color};         // 이후 색상이 이전 색상과 같지 않으면 색상 값을 바꿔줌
        }
        return null;
    }

    // props 또는 state를 변경했을때 호출
    // true냐 false냐에 따라 render함수가 수행될지 결정이된다.
    // 이 메서드 생략시 default는 true
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);

        // 숫자의 마지막 자리가 4면 리렌더링하지 않는다.
        return nextState.number % 10 !== 4;
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    render() {
        console.log('render');

        const style={color:this.props.color};   // 부모 apps로 부터 전달받은 색상

        return (
            <div>
                {/* {this.props.missing.value} */}
                <h1 style={style} ref={ref => this.myRef=ref}>{this.state.number}</h1>      {/* 여기서 ref가 가르키는건 h1객체의 파라미터 */}
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }

    // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행
    componentDidMount() {
        console.log('componentDidMount');
    }

    // render에서 만들어진 결과물이 브라우저에 실제 반영되기 직전에 호출
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    // 리렌더링을 완료한 후 실행
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    }

    // 컴포넌트를 DOM에서 제거할때 호출됨
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

}

export default LifeCycleSample;