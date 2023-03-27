//200 câu thuật toán
/*
//cau1
function cau1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}
function cau1(n) {
    return (n * (n + 1)) / 2;
}
console.log(cau1(5))*/
//cau2
/*
function cau2(n) {
    let S = 0;
    for (let i = 1; i <= n; i++) {
        S += i * i
    }
    return S
}
console.log(cau2(2))*/
//cau3
/*
function cau3(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += 1 / i
    }
    return s
}
console.log(cau3(3))*/
//cau4
/*
function cau4(n) {
    let s = 0
    for (let i = 1; i <= n; i++) {
        s += 1 / (i * 2)
    }
    return s
}
console.log(cau4(2))*/
//cau5
/*
function cau5(n) {
    let s = 0
    for (let i = 1; i <= n; i++) {
        s = s + 1 / ((2 * i) + 1)
    }
    return s
}
console.log(cau5(1))
console.log(1 + 1 / 3)*/
//cau6
/*
function cau6(n) {
    let s = 0
    for (let i = 1; i <= n; i++) {
        s += 1 / (i * (i + 1));
        return s
    }
}
console.log(cau6(3))*/
//cau7
/*
function cau7(n){
    let s = 0
    for(let i = 1; i<= n; i++){
        s+=i/(i+1)
    }
    return s
}
console.log(cau7(4))*/
//cau8
/*
function cau8(n) {
    let s = 0
    for (let i = 1; i <= n; i++) {
        s += (2 * i + 1) / (2 * i + 2)
    }
    return s
}
console.log(cau8(2))*/
//cau9
/*
function cau9(n) {
    let s = 1
    for (let i = 1; i <= n; i++) {
        s = s * i
    }
    return s
}
console.log(cau9(3))*/
//cau10
/*
function cau10(x, n) {
    return Math.pow(x, n)
}
console.log(cau10(2, 2))*/
//câu 11
/*
function cau11(n) {
    let s = 0;
    let x = 1
    for (let i = 1; i <= n; i++) {
        x *= i;
        s += x
    }
    return s
}
console.log(cau11(4))*/
//câu12
/*
function cau12(x, n) {
    let s = 0
    for (let i = 1; i <= n; i++) {
        s += Math.pow(x, i)
    }
    return s
}
console.log(cau12(2, 4))*/
//cau13
/*
function cau13(x, n) {
    let s = 0
    for (let i = 1; i <= n; i++) {
        s += Math.pow(x, 2 * i)
    }
    return s
}
console.log(cau13(3, 3))*/
//cau14
/*
function cau14(x,n){
    let s = 0;
    for (let i = 1; i<= n; i++){
        Math.pow(x,i)
    }
}*/
//cau15
/*
function cau15(n) {
    let s = 0
    // let t = 0
    for (let i = 1; i <= n; i++) {
        //1/1 +2 +3+n
        // t += i
        // s += 1.0 / t
        s += i
    }
    return  s
}
console.log(cau15(2))*/
//cau16
/*
function cau16(x, n) {
    let s = 0
    for (let i = 1; i <= n; i++) {
        let m = 0
        for (let j = 0; j <= i; j++) {
            m += j;
        }
        s += (x ** i) / m
    }
    return s
}
console.log(cau16(2, 3))*/
//cau17
/*
function cau17(x,n){
    let s = 1
    for(let i = 1; i<=n; i++){
        s *= i;
    }
    return(x**n)/s
}
console.log(cau17(2,4))*/
//cau18
/*
function cau18(x,n){
    let s = 1
    let f=1
    for(let i = 1; i<=n;i++){
        f*=(2*i-1)*(2*i);
        s+=(x**(2*i))/f;
    }
    console.log(f)
    return s
}
console.log(cau18(2,3))*/
//cau19
/*
function cau19(x, n) {
    let s = 1 + x
    let f = 1
    for (let i = 1; i <= n; i++) {
        f *= (2 * i) * (2 * i + 1);
        s += (x ** (2 * i + 1)) / f;
    }
    return s
}
console.log(cau19(2, 3))*/
//cau20
/*
function cau20(n) {
    let d = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            d.push(i)
        }
    }
    return d
}
console.log(cau20(15))*/
//cau21
/*
function finddiversor(n) {
    let s = 0
    let d = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            s += d.push(i)
        }
    }
    return d
}
function sumdiversor(n) {
    const d = finddiversor(n);
    let s = 0;
    for (let i = 0; i < d.length; i++) {
        console.log(d[i])
        s += d[i]

    }
    console.log(d)
    return s
}
console.log(sumdiversor(15))*/
//câu 21
/*
function finddiversor(n) {
    let diversor = []
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            diversor.push(i)
        }
    }
    return diversor
}
console.log(finddiversor(15))
function tichdiversor(n) {
    const d = finddiversor(n)
    let s = 1
    for (let i = 0; i < d.length; i++) {
        s *= d[i]
    }
    return s
}
console.log(tichdiversor(15))*/
//cau 23
/*
function finddiversor(n) {
    let diversor = []
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            diversor.push(i)
        }
    }
    return diversor.length
}
console.log(finddiversor(15))*/
//cau24
/*
function finddiversor(n) {
    let diversor = []
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            if (i % 2 === 1) {
                diversor.push(i)
            }
            console.log(i)
        }
    }
    return diversor
}
console.log(finddiversor(18))*/
//cau25 // tính tổng các số ước chung
/*
function finddiversor(n) {
    let diversor = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if (n % 2 === 0) {
                diversor.push(i)
                console.log(i)
            }
        }
    }
    return diversor
}
function sumdiversor(n) {
    const diversor = finddiversor(n)
    let s = 0;
    for (let i = 0; i < diversor.length; i++) {
        s += diversor[i]
    }
    return s
}
console.log(sumdiversor(2))*/
//câu 26
/*
function finddiversor(n) {
    let diversor = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if (i % 2 === 1) {
                diversor.push(i)
            }
        }
    }
    return diversor
}
function sumdiversor(n) {
    const diversor = finddiversor(n)
    let s = 0
    for (let i = 0; i < diversor.length; i++) {
        s += diversor[i]
    }
    return s
}
console.log(sumdiversor(15))*/
//câu 27
/*
function finddiversor(n) {
    const diversor = []
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            if (i % 2 == 0) {
                diversor.push(i)
            }
            console.log(i)
        }
    }
    return diversor
}
function sumdiversor(n) {
    const diversor = finddiversor(n)
    let s = 0
    for (let i = 0; i < diversor.length; i++) {
        s += diversor[i]
    }
    return s
}
console.log(sumdiversor(4))*/
//cau 28
/*
function finddiversor(n) {
    let diversor = []
    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            diversor.push(i)
        }
    }
    return diversor
}
function sumdiversor(n) {
    const diversor = finddiversor(n)
    let s = 0
    for (let i = 0; i < diversor.length; i++) {
        s += diversor[i]
    }
    return s;
}
console.log(sumdiversor(15))*/
//cau 29
/*
tìm ước số lẻ lớn nhất trong ước số chung
function largestOddDivisor(n) {
    while (n % 2 === 0) {
        n /= 2;
    }
    return n
}
console.log(largestOddDivisor(100))*/
// cau 30
/*
function completionNumber(n) {
    let s = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            s += i;
            console.log(i)
        }
    }
    return s === n;
}
console.log(completionNumber(28))*/
// cau31
// kiểm tra xem có phải số nguyên tố hay không
/*
function soNguyenTo(n) {
    if (n <= 1) {
        console.log('ko phai la so nguyen to')
    } else if (n == 2) {
        console.log('la so nguyen to')
    } else if (n % 2 == 0) {
        console.log('ko phai la so nguyen to')
    } else {
        for (let i = 3; i <= n; i += 2) {
            if (n % i == 0)
                break
        }
        if (i = n) {
            console.log('la so nguyen to')
        } else {
            console.log('ko phai la so nguyen to')
        }
    }
}
console.log(soNguyenTo(2))*/
//cau32
/*
function isPerfectSquare(n) {
    let sqrt = Math.sqrt(n)
    return sqrt === Math.floor(sqrt)
}
function isSquareNumber(n) {
    if (isPerfectSquare(n)) {
        console.log(n + ' la so chính phương')
    } else {
        console.log(n + ' ko phai la so chính phương')
    }
}
console.log(isSquareNumber(10))*/
//cau 33
/*
function CanBac2(n) {
    if (n === 1) {
        return Math.sqrt(2);
    } else {
        return Math.sqrt(2 + CanBac2(n - 1));
    }
}
function tinhSn(n) {
    return CanBac2(n)
}
console.log(tinhSn(4))*/
//cau34
//Tính S(n) = CanBac2(2+CanBac2(2+….+CanBac2(2 + CanBac2(2)))) có n dấu căn
/*
function sqrt(n) {
    return Math.sqrt(n)
}
function tinhSn(n) {
    if (n === 1) {
        return sqrt(1);
    } else {
        return sqrt(n + tinhSn(n - 1));
    }
}
console.log(tinhSn(3))*/
//cau36
/*
function giaithua(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * giaithua(n - 1)
    }
}
function canbac2(n) {
    return Math.sqrt(n)
}
function tinhSn(n) {
    let s = 0
    for (let i = 1; i <= n; i++) {
        s = canbac2(giaithua(i) + s)
    }
    return s
}
console.log(tinhSn(3))*/
//cau 37
//
// Tính S(n) = CanBac N(N + CanBac N – 1(N – 1 + … + CanBac3(3 + CanBac2(2))) có n – 1 dấu căn
/*
function canbacn(n) {
    return Math.sqrt(n)
}
function tinhSn(n, k) {
    if (n === 2) {
        return canbacn(k + 2)
    } else {
        return canbacn(k + tinhSn(n - 1, k + 1))
    }
}
console.log(tinhSn(2, 4))*/
//cau 38
//Tính S(n) = CanBac N + 1(N + CanBac N(N – 1 +…+CanBac3(2 + CanBac2(1)))) có n dấu căn
/*
function s(n) {
    if (n === 1) {
        return Math.sqrt(1)
    } else {
        return Math.sqrt(n + (s(n - 1)))
    }
}
console.log(s(4))*/
//cau 39
// Tính S(n) = CanBac N + 1(N! + CanBacN((N – 1)! + … + CanBac3(2! + CanBac2(1!))) có n dấu căn
/*
function s(n) {
    if (n === 1) {
        return Math.sqrt(1)
    } else {
        var factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i
        }
    }
    return Math.sqrt(factorial += s(n - 1))
}
console.log(s(4))*/
//cau40
// Tính S(n) = CanBac2(x^n + CanBac2(x^n-1 + … + CanBac2(x^2 + CanBac2(x)))) có n dấu căn
/*
function s(x, n) {
    if (n === 1) {
        return Math.sqrt(x)
    } else {
        return Math.sqrt(Math.pow(x, n) + s(x, n - 1))
    }
}
console.log(s(2, 4))*/
//cau 41: Tính S(n) = 1 / (1 + 1 / ( 1 + 1 / (…. 1 + 1 / 1 + 1))) có n dấu phân số
/*function s(n) {
    let s = 1;
    for (let i = 0; i <= n; i++) {
        s += 1 + 1.0 / s
    }
    return s
}
console.log(s(2))*/
//cau42 : Cho n là số nguyên dương. Hãy tìm giá trị nguyên dương k lớn nhất sao cho S(k)  < n. Trong đó chuỗi k được định nghĩa như sau: S(k) = 1 + 2 + 3 + … + k
/*function findK(n) {
    return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2)
}
console.log(findK(8))*/
//cau43: Hãy đếm số lượng chữ số của số nguyên dương n
/*function count(n) {
    return n.toString().length;
}
console.log(count(46546546))*/
//cau44: Hãy tính tổng các chữ số của số nguyên dương n
/*
function sum(n) {
    let count = n.toString()
    let s = 0
    for (let i = 0; i < count.length; i++) {
        s += parseInt(count[i])
        console.log(i)
    }
    return s;
}
console.log(sum(456))*/
// cau 45: hãy tính tích của các chữ số của số nguyên dương n
/*
function tich(n) {
    let count = n.toString();
    let s = 1;
    for (let i = 1; i < count.length; i++) {
        s *= parseInt(count[i])
    }
    return s
}
console.log(tich(123))*/
//cau 46:  Hãy đếm số lượng chữ số lẻ của số nguyên dương n
/*
function oldnumber(n) {
    let count = 0;
    while (n > 0) {
        const digit = n % 10;
        if (digit % 2 === 1) {
            count++
        }
        n = Math.floor(n / 10)
    }
    return count
}
console.log(oldnumber(357))*/
//cau 47: hãy tính tổng các chữ số nguyên dương n
/*function sum(n) {
    let sum = 0;
    let str = n.toString();
    for (let i = 0; i < str.length; i++) {
        let digit = parseInt(str.charAt(i));
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    return sum
}
console.log(sum(2222))*/
//cau48: hãy tính tích của các số lẻ
/*S
function oldsum(n) {
    let sum = 0
    let str = n.toString();
    for (let i = 0; i < str.length; i++) {
        let digit = parseInt(str.charAt(i));
        if (digit % 2 === 1) {
            sum += digit;
        }
    }
    return sum;
}
console.log(oldsum(123456))*/
//câu 49:Cho số nguyên dương n. Hãy tìm chữ số đầu tiên của n
/*function find(n) {
    let strn = n.toString();
    let first = strn[0]
    return first
}
console.log(find(789798))*/
//cau50: hãy tìm số đảo ngược của Nguyên dương n
/*
function find(n) {
    let strn = n.toString()
    let str_reverse = ''
    for (let i = strn.length - 1; i >= 0; i--) {
        str_reverse += strn[i];
    }
    let reverseN = parseInt(str_reverse)
    return reverseN
}
console.log(find(654321))*/
//cau 51 : Tìm chữ số lớn nhất của số nguyên dương n
/*
function find(n) {
    if (n < 10) {
        return n;
    }
    let lastdigit = n % 10;
    let restofnum = Math.floor(n / 10);
    let largestDigitOfRest = find(restofnum);
    if (lastdigit > largestDigitOfRest) {
        return lastdigit;
    } else {
        return largestDigitOfRest
    }
}
console.log(find(456))*/
//cau52 tìm chữ số nhỏ nhất của số nguyên dương
/*
function find(n) {
    if (n < 10) {
        return n
    }
    let lastdigit = n % 10;
    let restofnum = Math.floor(n / 10);
    let largestDigitOfRest = find(restofnum)
    if (lastdigit < largestDigitOfRest) {
        return lastdigit
    } else {
        return largestDigitOfRest
    }
}
console.log(find(789))*/
//cau 53: hãy đếm số lượng chữ số lớn nhất của số nguyên dương n
/*function find(n) {
    let maxdigit = 0;
    const str = n.toString();
    for (let i = 0; i < str.length; i++) {
        const digit = parseInt(str.charAt(i));
        if (digit > maxdigit) {
            maxdigit = digit;
        }
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str.charAt(i)) === maxdigit) {
            count++
        }
    }
    return count
}
console.log(find())*/
//cau 54: hãy đếm số lượng chữ số nhỏ nhất nguyên dương n
/*function find(n) {
    let mindigit = 9;
    const str = n.toString();
    for (let i = 0; i <= str.length; i++) {
        const digit = parseInt(str.charAt(i));
        if (digit < mindigit) {
            mindigit = digit;
        }
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str.charAt(i)) === mindigit) {
            count++
        }
    }
    return count
}
console.log(find(929))*/
//cau 56: Hãy kiểm tra số nguyên dương n có toàn chữ số lẻ hay không
/*function find(n) {
    let str = n.toString();
    for (let i = 0; i <= str.length; i++) {
        const digit = parseInt(str.charAt(i));
        if (digit % 2 === 0) {
            return false
        }
    }
    return true
}
console.log(find(3357))*/
//cau 57
/*function find(n) {
    const str = n.toString();
    for (let i = 0; i <= str.length; i++) {
        const digit = parseInt(str.charAt(i));
        if (digit % 2 === 1) {
            return false
        }
    }
    return true
}
console.log(find(2))*/
//cau 59: hãy kiểm tra số nguyên dương n có phải là số đối xứng ko
/*function find(n) {
    const str = n.toString();
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str.charAt(i) !== str.charAt(len - 1 - i)) {
            return false
        }
    }
    return true
}
console.log(find(122))*/
//cau60:Hãy kiểm tra các chữ số của số nguyên dương n có tăng dần từ trái sang phải hay không
/*function find(n) {
    const str = n.toString();
    const len = str.length;
    for (let i = 0; i < len; i++) {
        if (str.charAt(i) < str.charAt(i - 1)) {
            return false
        }
    }
    return true
}
console.log(find(132))*/
//cau 61: Hãy kiểm tra các chữ số của số nguyên dương n có tăng dần từ trái sang phải hay không
/*function find(n) {
    const str = n.toString()
    const len = str.length;
    for (let i = 1; i < len; i++) {
        if (str.charAt(i) > str.charAt(i - 1)) {
            return false
        }
    }
    return true
}
console.log(find(321))*/
//cau 62: cho 2 số a và b. hãy tìm ước chung lớn nhất của 2 số này;
/*function gcd(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a
}
// console.log(find(3, 3))
//cau 63:Cho 2 số nguyên dương a và b. Hãy tìm bội chung nhỏ nhất của 2 số này
function lcm(a, b) {
    return (a * b) / gcd(a, b)
}
console.log(lcm(4, 6))*/
// cau64: giai pt bac1
/*function ptb1(a, b) {
    if (a === b) {
        if (b === 0) {
            return "pt vô số nghiệm"
        } else {
            return "pt vô nghiệm"
        }
    } else {
        return `pt có nghiêm x = ${- b / a}`
    }
}
console.log(ptb1(2, 0))*/
// cau 65: giai pt bac 2
/*
function ptb2(a, b, c) {
    let d = (b * b) - (4 * a * c)
    if (d < 0) {
        return "pt vô nghiệm"
    } else if (d === 0) {
        let x = -b / 2 * a
        return `pt có nghiệm x = ${x}`
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a)
        let x2 = (-b - Math.sqrt(d)) / (2 * a)
        return `pt có 2 nghiệm phân biệt x1=${x1} và x2=${x2}`
    }
}
console.log(ptb2(1, 5, 6))*/
//cau 66: giai pt bac 4
function ptb4(a, b, c, d) {
    var d1 = b * b - 3 * a * c;
    var d2 = 2 * b * b * b - 9 * a * b * c + 27 * a * a * d;
    var delta = d2 * d2 - 4 * d1 * d1 * d1;
    if (delta > 0) {
        var alpha = (-d2 + Math.sqrt(delta)) / (2 * a)
        var beta = (-d2 - Math.sqrt(delta)) / (2 * a)
        var y1 = (-b - alpha - Math.sqrt(alpha * alpha - 4 * c)) / (2 * a)
        var y2 = (-b - alpha + Math.sqrt(alpha * alpha - 4 * c)) / (2 * a)
        var y3 = (-b - alpha - Math.sqrt(beta * beta - 4 * c)) / (2 * a)
        var y4 = (-b - alpha + Math.sqrt(beta * beta - 4 * c)) / (2 * a)
        return [y1, y2, y3, y4]
    } else if (delta == 0) {
        var alpha = -delta / (2 * a)
        var beta = -b(3 * a)
        var y1 = beta - alpha;
        var y2 = beta + 2 * alpha;
        var y3 = y4 = -b / (4 * a);
        return [y1, y2, y3, y4]
    } else {
        var alpha = Math.pow((-d + Math.sqrt(-delta)) / 2, 1 / 3).round()
        var beta = Math.pow((-d + Math.sqrt(-delta)) / 2, 1 / 3).round()
        var y1 = (-b - (alpha + beta)) / (3 * a);
        var y2 = (-b + 0.5 * (alpha + beta)) / (3 * a);
        var y3 = y4 = (-0.5 * (alpha + beta)) / (3 * a)
        return [y1, y2, y3, y4]
    }
}
console.log(ptb4(1, -1, 3, -3))
//cau 67: Tính S(x, n) = x – x^2 + x^3 + … + (-1)^n+1 * x^n
function S(x, n) {
    function
}