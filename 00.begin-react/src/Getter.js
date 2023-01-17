import React from 'react';

// function Getter() {
//     const numbers = {
//         a : 1,
//         b : 2,
//         get sum() {
//             console.log('sum함수 실행')
//             return this.a + this.b;
//         }
//     }
// }

// 객체 내 변수의 이름(key값)이랑 Setter 함수와는 이름이 중복될 수 없으나, 
// Getter 함수와 Setter 함수의 이름을 똑같이 넣어줄 순 있다.

// Getter 함수와 Setter 함수를 같은 이름으로 선언
function Getter() {
    // ********************* 예시 1 *********************
    // const dog = {
    //     _name : '멍멍이', // 객체 내 변수의 이름(key값)
    //     get name() {
    //         console.log('이름을 조회합니다.');
    //         return this._name;
    //     },
    //     set name(value) { // Setter 함수는 앞에 set 키워드를 붙이고 무조건 어떤 값을 입력으로 줘야함
    //         console.log('이름이 바뀝니다~~' + value) // 특정 코드를 실행할 수 있다.
    //         this._name = value;
    //     }
    // };

    // console.log(dog.name); // dog._name이 아닌 dog.name으로 호출하면 Getter 함수를 사용할 수 있다.
    // dog.name = '초코'; 
    // console.log(dog.name); // Getter 함수 사용


    // ********************* 예시 2 *********************
    const numbers = {
        _a : 1,
        _b : 2,
        sum : 3,
        calculate() {
            console.log('calculate');
            this.sum = this._a + this._b;
        },
        get a() {
            return this._a;
        },
        get b() {
            return this._b;
        },
        set a(value) { // Setter 함수에서는 a값 변경 후 calculate() 호출해서 값 업데이트 해줌!
            this._a = value;
            this.calculate();
        },
        set b(value) {
            this._b = value;
            this.calculate();
        }
    }

    const number2 = {
        a : 1,
        b : 2,
        get() {
            console.log('sum() 함수 실행');
            return this.a + this.b;
        }
    }

    console.log(numbers.sum); // '3' 출력
    numbers.a = 5; // a값 업데이트 하고, calculate()함수 실행하여 'calculate' 출력
    numbers.b = 7; // a값 업데이트 하고, calculate()함수 실행하여 'calculate' 출력
    numbers.a = 9; // a값 업데이트 하고, calculate()함수 실행하여 'calculate' 출력
    console.log(numbers.sum); // '16' 출력


    return(
        <></>
    )
}

export default Getter;