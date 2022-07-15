import { useState } from "react";

const IterationSample = () => {
    // const names = ['눈사람', '얼음', '눈', '바람'];
    // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    // return <ul>{nameList}</ul>


    // 응용
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]);
    
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);    // 새로운 항목을 추가할때 사용될 id

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({        // concat 기존의 배열에 새로운 객체를 연결시켜 추가 (원본 배열은 그대로 놔두고 새로운 배열에 수정을 하기위해 사용)
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const  onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
        onClick();
        }
    };

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
    return (
        <>
            <input value={inputText} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;