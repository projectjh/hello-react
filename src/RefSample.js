import React, { Component } from "react";

class RefSample extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus(); // jsx의 input태그를 가리킴
        // 콜백함수로 만들지 않을때는 current사용
    }

    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        );
    }
}

export default RefSample;