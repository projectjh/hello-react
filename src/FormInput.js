// Q. form 양식 값을 받아 입력버튼 누르면 경고창으로 출력
// 아이디, 비밀번호, 주민번호, 전화번호


// 함수 컴포넌트
// import { useState } from "react";

// const FormInput = () => {
//     const [form, setForm] = useState({
//         id:'',
//         pw:'',
//         jumin1:'',
//         jumin2:'',
//         tel1:'',
//         tel2:'',
//         tel3:''
//     });

//     const {id, pw, jumin1, jumin2, tel1, tel2, tel3} = form;
    
//     const onChange = e => {
//         const nextForm = {
//             ...form,
//             [e.target.name]: e.target.value
//         };
//         setForm(nextForm);
//     };

//     const onClick = () => {
//         alert(`
//             아이디 : ${id}
//             비밀번호 : ${pw}
//             주민번호 : ${jumin1} - ${jumin2}
//             전화번호 : ${tel1} - ${tel2} - ${tel3}
//         `);
//         setForm({
//             id:'',
//             pw:'',
//             jumin1:'',
//             jumin2:'',
//             tel1:'',
//             tel2:'',
//             tel3:''
//         });
//     };

//     return (
//         <div>
//             <h1 align="center">회원 가입</h1>
//             <table align="center" border="1">
//                 <tbody>
//                     <tr>
//                         <td>아이디</td>
//                         <td>
//                             <input type="text" name="id" size="30" required
//                                 placeholder="아이디" value={id} onChange={onChange} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>비밀번호</td>
//                         <td>
//                             <input type="password" name="pw" size="30"
//                                 placeholder="패스워드" value={pw} onChange={onChange} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>주민번호</td>
//                         <td><input type="text" name="jumin1" size="6" maxLength="6" placeholder="앞자리6자리" value={jumin1} onChange={onChange} /> -
//                             <input type="text" name="jumin2" size="7" maxLength="7" placeholder="뒷자리7자리" value={jumin2} onChange={onChange} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>전화번호</td>
//                         <td><input type="tel" name="tel1" size="3" maxLength="3" placeholder="3자리" value={tel1} onChange={onChange} /> -
//                             <input type="tel" name="tel2" size="4" maxLength="4" placeholder="4자리" value={tel2} onChange={onChange} /> -
//                             <input type="tel" name="tel3" size="4" maxLength="4" placeholder="4자리" value={tel3} onChange={onChange} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td colSpan="2" align="center">
//                             <button onClick={onClick}>입력</button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };


// 클래스형 컴포넌트
import {Component} from 'react';

class FormInput extends Component {
    state = {
        id:'',
        pw:'',
        jumin1:'',
        jumin2:'',
        tel1:'',
        tel2:'',
        tel3:''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick = () => {
        alert(`
            아이디 : ${this.state.id}
            비밀번호 : ${this.state.pw}
            주민번호 : ${this.state.jumin1} - ${this.state.jumin2}
            전화번호 : ${this.state.tel1} - ${this.state.tel2} - ${this.state.tel3}
        `);
        this.setState({
            id:'',
            pw:'',
            jumin1:'',
            jumin2:'',
            tel1:'',
            tel2:'',
            tel3:''
        });
    }

    render() {
        return(
            <div>
            <h1 align="center">회원 가입</h1>
            <table align="center" border="1">
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>
                            <input type="text" name="id" size="30" required
                                placeholder="아이디" value={this.state.id} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td>
                            <input type="password" name="pw" size="30"
                                placeholder="패스워드" value={this.state.pw} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>주민번호</td>
                        <td><input type="text" name="jumin1" size="6" maxLength="6" placeholder="앞자리6자리" value={this.state.jumin1} onChange={this.handleChange} /> -
                            <input type="text" name="jumin2" size="7" maxLength="7" placeholder="뒷자리7자리" value={this.state.jumin2} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td><input type="tel" name="tel1" size="3" maxLength="3" placeholder="3자리" value={this.state.tel1} onChange={this.handleChange} /> -
                            <input type="tel" name="tel2" size="4" maxLength="4" placeholder="4자리" value={this.state.tel2} onChange={this.handleChange} /> -
                            <input type="tel" name="tel3" size="4" maxLength="4" placeholder="4자리" value={this.state.tel3} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                            <button onClick={this.handleClick}>입력</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default FormInput;