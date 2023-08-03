export var Calculate = function() {
    let xuly = (a, b, pheptinh)=> {
        switch (pheptinh) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return (b) ? a / b : 'Lỗi phép tính!!!';
        };
    }
    return {
        cong(a, b){
            return xuly(a, b, '+');
        },
        tru(a, b){
            return xuly(a, b, '-');
        },
        nhan(a, b){
            return xuly(a, b, '*');
        },
        chia(a, b){
            return xuly(a, b, '/');
        }
    };
};

export let Person = {
    name: "Tín",
    age: 21,
    job: 'Front End Dev',
};

// let calc = Calculate();
// console.log(calc.cong(1,2));

// // calc.abc = function() {
// //     console.log(xuly);
// // }
// (Calculate().abc = function(params) {
//     console.log(xuly);
// })();

// calc.abc();


// console.log(calc.cong());
// console.log(calc.tru());
// console.log(calc.nhan());
// console.log(calc.chia());

// console.log(calc.cong);

// console.log(Array.prototype.map);

// let v = {};
// function B() {
//     this.C = function A() {
//         console.log("ABC");
//         console.log(this);
//     }
//     // A();
//     console.log(this);
// };

// // console.log(this.A);
// B.call(v);
// v.C();
// this.C();