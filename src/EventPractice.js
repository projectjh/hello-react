// import { Component } from 'react';

// class EventPractice extends Component {
  // state = {
  //   message: '',
  // };
  // render() {
  //   return (
  //     <div>
  //       <h1>이벤트 연습</h1>
  //       <input type="text" name="message" placeholder="아무거나 입력해 보세요" value={this.state.message}
  //         onChange={(e) => {
  //           // console.log(e);
  //           // console.log(e.target.value); // target -> input태그 / value -> input태그의 value값
  //           this.setState({message: e.target.value});
  //           console.log(this.state.message);
  //         }}/>
  //       <button onClick={() => {alert(this.state.message); this.setState({message: ''}); console.log(this.state.message);}}>확인</button>
  //     </div>
  //   );
  // }
// }

// // p130 임의 메서드 만들기
// class EventPractice extends Component {
//   state = {message:''}                          // 상태를 나타내기때문에 속성

//   constructor(props) {                          // 생성자 함수 -> 클래스 안에 정의된 함수이므로 '메서드'라고 부른다. ∴ 생성자 메서드
//     super(props);                               // 부모의 생성자를 호출하기 위한 작업 (component안의 생성자)
//     this.handleChange = this.handleChange.bind(this);   // handleChange 함수를 변수에 대입한 형식과 똑같음 / (this)는 객체와 기능을 매핑시켜주는 역할 -> 함수리터럴에서 함수 이름을 선언해주는 것과 같은 역할
//     this.handleClick = this.handleClick.bind(this);     // 함수가 호출될때 메서드와 this의 관계가 끊어지기때문에 바인딩(binding) 작업이 필요
//   }

//   handleChange(e) {                             // e : 이벤트 파라미터를 객체로 전달받는 역할
//     this.setState({message: e.target.value});   // 상태값 저장 작업
//   }

//   handleClick() {                               // 클릭시 경고창으로 메시지 출럭해주고 상태를 빈공간으로 만들어주기 위한 메서드
//     alert(this.state.message);
//     this.setState({message:''});
//   }

//   render() {                                    // render도 메서드!
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input type="text" name="message" placeholder="아무거나 입력해보세요" value={this.state.message} onChange={this.handleChange}></input>
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }

// }


// // p132. 화살표 함수로 변경
// class EventPractice extends Component {
//   state = {message:''}

//   handleChange = (e) => {                     // 앞에 const와같은 변수명을 붙이면 클래스의 멤버가 아닌게 되므로 오류 발생
//     this.setState({message: e.target.value});
//   }

//   handleClick = () => {
//     alert(this.state.message);
//     this.setState({message:''});
//   }

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input type="text" name="message" placeholder="아무거나 입력해보세요" value={this.state.message} onChange={this.handleChange}></input>
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }


// // p134. input 여러개 다루기
// class EventPractice extends Component {
//   state = {
//     id:'',
//     username : '',
//     message: ''
//   }

//   handleChange = (e) => {
//     this.setState({[e.target.name]: e.target.value});
//   }

//   handleClick = () => {
//     alert(this.state.id + ' (' + this.state.username + ') : ' + this.state.message);

//     this.setState({id:'', username:'', message:''});
//   }

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input type="text" name="id" placeholder="아이디" value={this.state.id} onChange={this.handleChange}></input>
//         <input type="text" name="username" placeholder="사용자명" value={this.state.username} onChange={this.handleChange}></input>
//         <input type="text" name="message" placeholder="아무거나 입력해 보세요" value={this.state.message} onChange={this.handleChange}></input>
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }


// // p136. onKeyPress 이벤트 핸들링
// class EventPractice extends Component {
//   state = {
//     id:'',
//     username : '',
//     message: ''
//   }

//   handleChange = (e) => {
//     this.setState({[e.target.name]: e.target.value});
//   }

//   handleClick = () => {
//     alert(this.state.id + ' (' + this.state.username + ') : ' + this.state.message);

//     this.setState({id:'', username:'', message:''});
//   }

//   handleKeyPress = (e) => {
//     if(e.key === 'Enter') {
//       this.handleClick();
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input type="text" name="id" placeholder="아이디" value={this.state.id} onChange={this.handleChange}></input>
//         <input type="text" name="username" placeholder="사용자명" value={this.state.username} onChange={this.handleChange}></input>
//         <input type="text" name="message" placeholder="아무거나 입력해 보세요" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }



// p138. 함수 컴포넌트로 변경
import { useState } from 'react';

// const EventPractice = () => {
//   const [username, setUsername] = useState('');
//   const [message, setMessage] = useState('');
//   const onChangeUsername = e => setUsername(e.target.value);
//   const onChangeMessage = e => setMessage(e.target.value);
  
//   const onClick = () => {
//     alert(`${username}: ${message}`);
//     setUsername('');
//     setMessage('');
//   };

//   const onKeyPress = e => {
//     if (e.key === 'Enter') {
//       onClick();
//     }
//   };

//   return (
//     <div>
//         <h1>이벤트 연습</h1>
//         <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChangeUsername}></input>
//         <input type="text" name="message" placeholder="아무거나 입력해 보세요" value={message} onChange={onChangeMessage} onKeyPress={onKeyPress}></input>
//         <button onClick={onClick}>확인</button>
//      </div>
//   );
// };

const EventPractice = () => {
  const [form, setForm] = useState({      // useState에 객체 값이 주어짐 -> form양식과 같이 항목이 많은 경우 form양식을 객체로 만들어서 배치 
        // 객체, 함수 -> 배열의 첫번째는 객체값 저장, 두번째는 함수값 저장
    username:'', 
    message:''
  });                                 
  const {username, message} = form;       // 비구조화 할당 (form의 객체를 각자 저장)
  const onChange = e => {
    // setTimeout(() => console.log(e), 500);
    const nextForm = {
      ...form,                            // ...는 spread 연산자 / 기존의 form 내용 복사
      [e.target.name]: e.target.value     // 복사본 객체에 수정할 내용 저장
    };
    setForm(nextForm);                    // 수정된 복사본을 원본인 form에 반영시켜주는 역할
  };
  
  const onClick = () => {
    alert(`${username}: ${message}`);
    setForm({username: '', message:''});
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange}></input>
        <input type="text" name="message" placeholder="아무거나 입력해 보세요" value={message} onChange={onChange} onKeyPress={onKeyPress}></input>
        <button onClick={onClick}>확인</button>
     </div>
  );
};

export default EventPractice;
