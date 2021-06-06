document.title = "js-CV";

const body = document.body;
const fild = document.createElement("fieldset");
body.appendChild(fild);
fild.classList.add("fild");
const leg = document.createElement("legend")
leg.classList.add("leg");
fild.appendChild(leg);
const h1 = document.createElement("h1");
leg.appendChild(h1);
h1.textContent = "CV Template";
const sec1 = document.createElement("section");
fild.appendChild(sec1);
const img = document.createElement("img")
sec1.appendChild(img);
img.setAttribute("src", "./img/default-user.png");
img.setAttribute("alt", "image");
img.classList.add("img");
const h2 = document.createElement("h2");
sec1.appendChild(h2);
h2.textContent = "Jhon Smith";

function hrr(){
    const hr = document.createElement("hr");
    fild.appendChild(hr);
}
hrr();

const sec2 = document.createElement("section");
fild.appendChild(sec2);
const sm = document.createElement("small");
sec2.appendChild(sm);
sm.textContent = "335 Name Street, JavaScript, Town: Yerevan, N2h 3Y6";
const ul1 = document.createElement("ul");
sec2.appendChild(ul1);

ul1.lenght = 3;

for (let i = 0; i < ul1.lenght; i++) {
   const li = document.createElement("li");
   ul1.appendChild(li);
   const a = document.createElement("a");
   li.appendChild(a);
   a.setAttribute("href", "#");
   a.classList.add("a1");
}

const a1 = document.getElementsByClassName("a1");
a1[0].textContent = "emailaddres@gmail.com";
a1[1].textContent = "facebook.com";
a1[2].textContent = "github.com";

hrr();

const h22 = document.createElement("h2");
fild.appendChild(h22);
h22.textContent = "Work Experience";

hrr();

const sec3 = document.createElement("section");
fild.appendChild(sec3);
const table = document.createElement("table");
sec3.appendChild(table);
table.setAttribute("cellspacing", "30");
const tbody = document.createElement("tbody");
table.appendChild(tbody);

function trr(){
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    const td1 = document.createElement("td");
    tr.appendChild(td1);
    const h2_3 = document.createElement("h2");
    td1.appendChild(h2_3);
    h2_3.textContent = "Start >> End Year";
    const td2 = document.createElement("td");
    tr.appendChild(td2);
    const h2_4 = document.createElement("h2");
    td2.appendChild(h2_4);
    h2_4.textContent = "Job Title One";
    const sm_2 = document.createElement("small");
    td2.appendChild(sm_2);
    sm_2.textContent = "Company Name, Address, City Province";
    const ul2 = document.createElement("ul");
    td2.appendChild(ul2);

    ul2.lenght = 2;

    for (let y = 0; y < ul2.lenght; y++) {
        const li2 = document.createElement("li");
        ul2.appendChild(li2);
        li2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    }
}
trr();

trr();

hrr();

const sec4 = document.createElement("section");
fild.appendChild(sec4);
const h2_5 = document.createElement("h2");
sec4.appendChild(h2_5);
h2_5.textContent = "About";
const pe = document.createElement("p");
sec4.appendChild(pe);
pe.innerHTML = "<strong>Lorem ipsum</strong>  dolor sit amet consectetur adipisicing <b><u>elit</u></b> . At aspernatur in, <i>doloribus tempora non tempore accusantium</i> , officia quibusdam voluptates architecto dolorum laboriosam fugit vero quis vel deleniti? <small>Quae, perferendis saepe?</small>";

hrr();

const sec5 = document.createElement("section");
fild.appendChild(sec5);
const h2_6 = document.createElement("h2");
sec5.appendChild(h2_6);
h2_6.textContent = "Skills";
const table2 = document.createElement("table");
sec5.appendChild(table2);
table2.setAttribute("width", "100%");
const tbody2 = document.createElement("tbody");
table2.appendChild(tbody2);
const tr2 = document.createElement("tr");
tbody2.appendChild(tr2);

function tdd(){
    const td3 = document.createElement("td");
    tr2.appendChild(td3);
    const ul3 = document.createElement("ul");
    td3.appendChild(ul3);

    ul3.lenght = 4;

    for (let c = 0; c < ul3.lenght; c++) {
        const li3 = document.createElement("li");
        ul3.appendChild(li3);
        li3.textContent = "List";
    }
}
tdd();
tdd();
tdd();
tdd();







