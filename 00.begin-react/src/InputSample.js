import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({ // 객체 상태
        keyName: '',
        keyNickname: ''
    });
    const nameInput = useRef();

    const {keyName, keyNickname} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {name, value} = e.target // 우선 e.target에서 name, value 를 추출

        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            keyName: '',
            keyNickname: ''
        })
        nameInput.current.focus();
    };

    return (
        <div>
            <input 
                name='keyName' 
                placeholder='이름' 
                onChange={onChange} 
                value={keyName}
                ref={nameInput}
            />
            <input 
                name='keyNickname' 
                placeholder='닉네임' 
                onChange={onChange} 
                value={keyNickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {keyName} ({keyNickname})
            </div>
        </div>
    )
}

export default InputSample;