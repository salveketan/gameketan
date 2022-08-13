
let ARR = { A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, S: 1, T: 1, R: 1, D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10 }

let consonents = ["B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const nums = new Set();
while (nums.size !== 15) {


    let M = (Math.floor(Math.random() * 15) + 1);
    nums.add(consonents[M])

}

let A = [...nums]


let arr = [];

for (let j = 0; j < A.length; j++) {

    let obj = [];
    let b = getRandomIntInclusive(1, 4);
    obj.push(A[j], b)

    arr.push(obj)

}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let vowels = [];

function arrvowel() {

    let vowel = ["A", "E", "I", "O", "U"];

    for (let i = 0; i < vowel.length; i++) {
        let m = [];
        let dd = getRandomIntInclusive(1, 4);
        m.push(vowel[i])
        m.push(dd)
        vowels.push(m);
    }
}

arrvowel();

let finalarr = [...vowels, ...arr]

// console.log(finalarr)

let count = 0;

for (let k = 0; k < finalarr.length; k++) {
    count += finalarr[k][1];
}

document.getElementById("tilesleft").innerHTML = count





var timeleft = 100;



var downloadTimer = setInterval(function () {
    if (timeleft <= 1) {
        clearInterval(downloadTimer);
    }
    document.getElementById("timer").innerHTML = timeleft - 1;
    timeleft -= 1;

    if (timeleft == 0) {
        window.location.href = "result.html"
    }

}, 1000);



finalarr.map((e) => {


    let p = document.createElement("p");
    let counter = document.createElement("p");
    let d = document.createElement("div");


    p.innerHTML = e[0]
    counter.innerHTML = e[1]
    counter.setAttribute("id", e[0])


    d.setAttribute("class", e[0])
    d.addEventListener("click", function () {


        str(e)
    })
    document.getElementById("result").append(d)

    d.append(p, counter)
})




let totalscore = 0;
document.getElementById("Score").innerHTML = totalscore

function str(e) {

    let cc = document.getElementById(e[0]);
    let current = cc.innerText;
    tilesleft

    let tiles = document.getElementById("tilesleft");
    let m = tiles.innerText;



    let neww = document.getElementsByClassName(e[0]);


    let strings = document.getElementById("str1");
    let latest = strings.innerText


    strings.addEventListener("click", function () {
        let newstr = latest.split("");
        let N = newstr.splice(0, newstr.length)

        strings.innerHTML = N.join("");

    })


    document.getElementById("Score").innerHTML = totalscore


    let AA = [totalscore];
    let AB = [latest]

    document.getElementById("submit").addEventListener("click", function () {

        sessionStorage.setItem("mumbai", AA);
        sessionStorage.setItem("delhi", AB);

        window.location.href = "result.html"
    })


    if (current >= 1) {
        totalscore += ARR[e[0]]
        cc.innerHTML = current - 1
        tiles.innerHTML = m - 1;
        strings.innerHTML = latest + e[0];

    }
    else if (current == 0) {


        neww.outerHTML = "";


    }

}