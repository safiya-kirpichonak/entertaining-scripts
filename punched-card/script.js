const symbols = {
    "12": "&",
    "11": "-",
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",

    "121": "A",
    "122": "B",
    "123": "C",
    "124": "D",
    "125": "E",
    "126": "F",
    "127": "G",
    "128": "H",
    "129": "I",

    "111": "J",
    "112": "K",
    "113": "L",
    "114": "M",
    "115": "N",
    "116": "O",
    "117": "P",
    "118": "Q",
    "119": "R",

    "01": "/",
    "02": "S",
    "03": "T",
    "04": "U",
    "05": "V",
    "06": "W",
    "07": "X",
    "08": "Y",
    "09": "Z",

    "28": ":",
    "38": "#",
    "48": "@",
    "58": "'",
    "68": "=",
    "78": '"',

    "1228": "[",
    "1238": ".",
    "1248": "<",
    "1258": "(",
    "1268": "+",
    "1278": "|",

    "1128": "]",
    "1138": "$",
    "1148": "*",
    "1158": ")",
    "1168": ";",
    "1178": "^",

    "028": "\\",
    "038": ",",
    "048": "%",
    "058": "_",
    "068": ">",
    "078": "?"
};

const dashbord = document.getElementById('dashbord');
const numbers = [12, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    const tr = document.createElement('tr');
    const p = document.createElement('p');
    const td = document.createElement('td');
    p.innerText = number;
    td.appendChild(p);
    tr.appendChild(td);

    for (let j = 0; j < 42; j++) {
        const td = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        td.appendChild(checkbox);
        tr.appendChild(td);
    }
    dashbord.appendChild(tr);
}

const decode = document.getElementById('decode');

decode.addEventListener("click", () => {
    let result = ""
    for (let i = 0; i < 42; i++) {
        const column = [];
        const columnTds = document.querySelectorAll(`#dashbord tr td:nth-child(${i + 2}) input`);
        columnTds.forEach((checkbox) => {
            if (checkbox.checked) {
                const rowNumber = checkbox.parentNode.parentNode.firstChild.innerText;
                column.push(rowNumber);
            }
        });
        if (symbols[column.join('')]) {
            result += symbols[column.join('')];
        }
    }

    const resultP = document.getElementById('result');
    resultP.innerHTML = result;
});
