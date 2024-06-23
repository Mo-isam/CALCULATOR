let v;
document.getElementById("but1").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "1";
};
document.getElementById("but2").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "2";
};
document.getElementById("but3").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "3";
};
document.getElementById("but4").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "4";
};
document.getElementById("but5").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "5";
};
document.getElementById("but6").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "6";
};
document.getElementById("but7").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "7";
};
document.getElementById("but8").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "8";
};
document.getElementById("but9").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "9";
};
document.getElementById("but0").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "0";
};
document.getElementById("butdo").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + ".";
};
document.getElementById("butp").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + 3.14;
};

document.getElementById("butd").onclick = function () {
    v = document.getElementById("text").value.slice(0, -1);
    document.getElementById("text").value = v;
};
document.getElementById("buta").onclick = function () {
    document.getElementById("text").value = "";
};
document.getElementById("but+").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "+";
};
document.getElementById("but-").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "-";
};
document.getElementById("but/").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "/";
};
document.getElementById("but(").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "(";
};
document.getElementById("but)").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + ")";
};
document.getElementById("butx").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "x";
};
document.getElementById("butpower").onclick = function () {
    v = document.getElementById("text").value;
    document.getElementById("text").value = v + "^";
};

document.getElementById("bute").onclick = function () {
    let text = document.getElementById("text").value;
    console.log(text);
    document.getElementById("text").value = calc2(text);
    // console.log(calc2(text));
    // console.log(sign('+--+-++'));
};
let a, b;

function calc0(a, b, key) {
    let c;
    console.log("switch calc-->", a, key, b);
    switch (key) {
        case "+":
            c = a + b;
            break;
        case "-":
            c = a - b;
            break;
        case "x":
            c = a * b;
            break;
        case "/":
            c = a / b;
            break;
        case "^":
            c = a ** b;
            break;
        default:
            break;
    }
    return c;
}
function calc2(text) {
    //!__________________Pattern
    const pat = /([x/^][-+]*|[-+]+)|[\(\)]/g;
    const patnum = /[-+]*\d+(\.\d*)?/g;
    text = "1+(1+(6+(4+(1+1))))";
    // text = "1+(1+(6+2)-2)+1";
    console.log(text);

    console.log(text.match(patnum));
    console.log(text.match(pat));
    a = text.match(pat);
    b = text.match(patnum);
    let out;
    //!__________________End Pattern

    //!_____________(sign)
    if (b[0].slice(0, 1) == "-" || b[0].slice(0, 1) == "+") {
        for (let index = 0; index < a.length; index++) {
            a[index] = a[index + 1];
        }
        a.pop();
    }
    let i = 0;
    for (let h = 0; h < a.length; h++) {
        let p;
        if (a[h] == "(" || a[h] == ")") {
            i++;
        } else {
            p = h - i;
            if (
                a[h].length == 1 &&
                (a[h] == "+" || a[h] == "-") &&
                a[h + 1] != "("
            ) {
                console.log("----->", a[h], b[p + 1], p);
                b[p + 1] = b[p + 1].slice(1);
                console.log("----->", a[h], b[p + 1]);
            } else if (a[h].length > 1) {
                let si = sign(b[p + 1]);
                if (
                    a[h].slice(0, 1) == "/" ||
                    a[h].slice(0, 1) == "x" ||
                    a[h].slice(0, 1) == "^"
                ) {
                    a[h] = a[h].slice(0, 1);
                    b[p + 1] = si[2];
                } else {
                    a[h] = si[0];
                    b[p + 1] = si[1];
                }
            }
        }

        console.log(a, b, p, h);
    }
    console.log("sign-->", b, a);
    //!_____________(end sign)
    return core(0, a.length);
}
function core(i, end) {
    let out;
    while (a.length > 0) {
        let place,
            counter = 0;
        if (a[i + 2] == "^" && a[i + 1] != "(") {
            place = i + 2;
        } else if (
            a[i + 1] == "x" ||
            a[i + 1] == "/" ||
            a[i + 1] == "^" ||
            a[i + 1] == "("
        ) {
            place = i + 1;
        } else {
            place = i;
        }
        //!______________________________________________________________cc
        while (a[place] == "(") {
            counter++;
            if (a[place + 1] == ")") {
                console.log("1------------>", a);

                for (let j = place; j < a.length; j++) {
                    a[j] = a[j + 1];
                }
                console.log("1------------>", a);
                a.pop();
                console.log("1------------>", a);
                for (let j = place; j < a.length; j++) {
                    a[j] = a[j + 1];
                }
                a.pop();
                console.log("1------------>", a);
                place--;
                counter--;
            } else {
                place++;
                if (a[place] != "(") {
                    counter++;
                }
                if (a[place + 1] == "(" && a[place] != "(") {
                    // counter++;
                    place++;
                }
            }
        }
        //!______________________________________________________________

        // if (a[place] == "(") {
        //     if (a[place + 1] == ")") {
        //         console.log("1------------>", a);

        //         for (let j = place; j < b.length; j++) {
        //             a[j] = a[j + 1];
        //         }
        //         console.log("1------------>", a);
        //         a.pop();
        //         console.log("1------------>", a);
        //         for (let j = place; j < b.length; j++) {
        //             a[j] = a[j + 1];
        //         }
        //         a.pop();
        //         console.log("1------------>", a);
        //         place = place;
        //     } else {
        //         console.log("before while--------->", a[place], place);

        //         do {
        //             counter++;
        //             place++;
        //             console.log("while--------->", a[place], place);
        //         } while (a[place] == "(");
        //         // place = place + counter;
        //         console.log("after while--------->", a[place], place);

        //         console.log("2------------>", a, a[place]);
        //     }
        // } else {
        //     console.log("3------------>", a);
        //     place = place;
        // }
        //!______________________________________________________________

        console.log("4------------>", a);
        let numplace = place - counter;
        if (a[place - 1] == "(") {
            // place = place+counter;
            out = calc0(Number(b[numplace]), Number(b[numplace + 1]), a[place]);
            b[numplace] = out;
            console.log("place=", place, counter);
            for (let j = place; j < a.length; j++) {
                a[j] = a[j + 1];
            }
            for (let j = numplace + 1; j < b.length; j++) {
                b[j] = b[j + 1];
            }
            //!!_________________________________________
        } else {
            out = calc0(Number(b[numplace]), Number(b[numplace + 1]), a[place]);
            b[numplace] = out;
            // for (let j = place + 1; j < b.length - 1; j++) {
            //     b[j] = b[j + 1];
            //     a[j - 1] = a[j];
            // }
            for (let j = place; j < a.length; j++) {
                a[j] = a[j + 1];
            }
            for (let j = numplace + 1; j < b.length; j++) {
                b[j] = b[j + 1];
            }
        }

        console.log("---------->>>>", place, counter);
        b.pop();
        a.pop();
        console.log(b, a, out);
    }
    return out;
}
function sign(sig) {
    console.log(sig);

    let frist = sig.slice(0, 1),
        scande;
    sig = sig.slice(1);
    while (sig.slice(0, 1) == "-" || sig.slice(0, 1) == "+") {
        scande = sig.slice(0, 1);
        sig = sig.slice(1);
        if (frist == scande) {
            frist = "+";
        } else {
            frist = "-";
        }
        console.log(frist, sig, frist + sig);
    }
    return [frist, sig, frist + sig];
}
