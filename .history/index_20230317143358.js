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
//cau 24
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
function canbacn(n){
    return Math.sqrt(n)
}
function tinhSn(n){
    
}