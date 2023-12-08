
export { numbers };

class Number {
    constructor(value, color, even, half, third) {
        this.value = value;
        this.color = color;
        this.even = even;
        this.half = half;
        this.third = third;
    }
}

let zero = new Number('0', false, false, false, false);

let num1 = new Number('1', 'red', false, 'low', 'first12');
let num2 = new Number('2', 'black', true, 'low', 'first12');
let num3 = new Number('3', 'red', false, 'low', 'first12');
let num4 = new Number('4', 'black', true, 'low', 'first12');
let num5 = new Number('5', 'red', false, 'low', 'first12');
let num6 = new Number('6', 'black', true, 'low', 'first12');
let num7 = new Number('7', 'red', false, 'low', 'first12');
let num8 = new Number('8', 'black', true, 'low', 'first12');
let num9 = new Number('9', 'red', false, 'low', 'first12');
let num10 = new Number('10', 'black', true, 'low', 'first12');
let num11 = new Number('11', 'black', false, 'low', 'first12');
let num12 = new Number('12', 'red', true, 'low', 'first12');

let num13 = new Number('13', 'black', false, 'low', 'second12');
let num14 = new Number('14', 'red', true, 'low', 'second12');
let num15 = new Number('15', 'black', false, 'low', 'second12');
let num16 = new Number('16', 'red', true, 'low', 'second12');
let num17 = new Number('17', 'black', false, 'low', 'second12');
let num18 = new Number('18', 'red', true, 'low', 'second12');

let num19 = new Number('19', 'red', false, 'high', 'second12');
let num20 = new Number('20', 'black', true, 'high', 'second12');
let num21 = new Number('21', 'red', false, 'high', 'second12');
let num22 = new Number('22', 'black', true, 'high', 'second12');
let num23 = new Number('23', 'red', false, 'high', 'second12');
let num24 = new Number('24', 'black', true, 'high', 'second12');

let num25 = new Number('25', 'red', false, 'high', 'third12');
let num26 = new Number('26', 'black', true, 'high', 'third12');
let num27 = new Number('27', 'red', false, 'high', 'third12');
let num28 = new Number('28', 'black', true, 'high', 'third12');
let num29 = new Number('29', 'black', false, 'high', 'third12');
let num30 = new Number('30', 'red', true, 'high', 'third12');
let num31 = new Number('31', 'black', false, 'high', 'third12');
let num32 = new Number('32', 'red', true, 'high', 'third12');
let num33 = new Number('33', 'black', false, 'high', 'third12');
let num34 = new Number('34', 'red', true, 'high', 'third12');
let num35 = new Number('35', 'black', false, 'high', 'third12');
let num36 = new Number('36', 'red', true, 'high', 'third12');

const numbers = [ zero, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18, num19, num20, num21, num22, num23, num24, num25, num26, num27, num28, num29, num30, num31, num32, num33, num34, num35, num36];
Object.freeze(numbers);
