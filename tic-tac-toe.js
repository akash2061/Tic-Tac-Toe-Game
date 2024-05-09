let moves = document.querySelectorAll(".sbox");
let reset = document.querySelector("#rb");
let msgcon = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");

let turn = true;
let count = 0;
let win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const res = () => {
    turn = true;
    count = 0;
    for (let b of moves) {
        b.disabled = false;
        b.innerText = "";
    }
    msgcon.classList.add("hide");
}

reset.addEventListener("click", res);



const showW = (win) => {
    for (let b of moves) {
        b.disabled = true;
    }
    msg.innerText = `Congratulation !!!...Winner is ${win}`;
    msgcon.classList.remove("hide");
}

moves.forEach(move => {
    move.addEventListener("click", () => {
        // alert("Game is In Progress...!");
        if (turn) {
            move.innerText = "O";
            turn = false;
        } else {
            move.innerText = "X";
            turn = true;
        }
        move.disabled = true;
        count++;
        let iswin = checkwin();
        if(count === 9 && !iswin){
            draw();
        }
    });
});

const draw =()=>{
    msg.innerText ="Oops ! -_- It is tie";
    msgcon.classList.remove("hide");
    for (let b of moves) {
        b.disabled = true;
    }
};

function checkwin() {
    for (let p of win) {
        let p1 = moves[p[0]].innerText;
        let p2 = moves[p[1]].innerText;
        let p3 = moves[p[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                showW(p1);
                return true;
            }
        }
    }
};

let modebtn = document.querySelector("#c_btw");
let body = document.querySelector("body");
let cmode = "light";
modebtn.addEventListener("click", () => {
    if (cmode === "light") {
        cmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        cmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});