import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    )
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'aa',
            email: 'aa@gamil.com'
        },
        {
            id: 2,
            username: 'bb',
            email: 'bb@gamil.com'
        },
        {
            id: 3,
            username: 'cc',
            email: 'cc@gamil.com'
        }
    ];

    return (
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    )
};


// function User({ user }) {
//     return (
//         <div>
//             <b>{user.username}</b> <span>({user.email})</span>
//         </div>
//     )
// }

// function UserList() {
//     const users = [
//         {
//             id: 1,
//             username: 'aa',
//             email: 'aa@gmail.com'
//         },
//         {
//             id: 2,
//             username: 'bb',
//             email: 'bb@gmail.com'
//         },
//         {
//             id: 3,
//             username: 'cc',
//             email: 'cc@gmail.com'
//         }
//     ];

//     return (
//         <div>
//             {/* <User user={users[0]}/>
//             <User user={users[1]}/>
//             <User user={users[2]}/> */}

//             {
//                 users.map(
//                     // 배열을 렌더링 할 경우 key 값이 있어야 배열이 추가/삭제될 경우에 효율적으로 업데이트 가능
//                     user => (<User user={user} key={user.id}/>)
//                     // (user, index) => (<User user={user} key={index}/>) // 설정할 key 값이 없을 경우 idx 값 활용 (but, 권장 X)
//                 )
//             }
//         </div>
//     )
// }

export default UserList;

