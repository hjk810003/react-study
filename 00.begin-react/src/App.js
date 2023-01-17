import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreatUser';


function App() {
  // JSX: 리액트에서 컴포넌트의 생김새를 정의할때 사용하는 문법


  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const users = [
    {
      id: 1,
      username: 'aa',
      email: 'aa@gmail.com'
    },
    {
      id: 2,
      username: 'bb',
      email: 'bb@gmail.com'
    },
    {
      id: 3,
      username: 'cc',
      email: 'cc@gmail.com'
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    setInputs({
      username: '',
      email: ''
    });

    console.log(nextId.current); //4
    nextId.current += 1;
  }

  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}/>
    </>
  );
}

export default App;
