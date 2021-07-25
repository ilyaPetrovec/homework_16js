const dataTypes = [
    true,
    's',
    0,
    null,
    undefined,
    {},
    [],
    0n,
    Symbol(),
    () => {},
];


const map = new Map();
map.set(dataTypes[0], {'значение':dataTypes[0], 'тип':typeof dataTypes[0], 'преобразование к числу': +dataTypes[0], 
'преобразование к строке':String(dataTypes[0]), 'преобразование к булеву':!!dataTypes[0]},);
map.set(dataTypes[1], {'значение':dataTypes[1], 'тип':typeof dataTypes[1], 'преобразование к числу': +dataTypes[1], 
'преобразование к строке':String(dataTypes[1]), 'преобразование к булеву':!!dataTypes[1]},);
map.set(dataTypes[2], {'значение':dataTypes[2], 'тип':typeof dataTypes[2], 'преобразование к числу': +dataTypes[2], 
'преобразование к строке':String(dataTypes[2]), 'преобразование к булеву':!!dataTypes[2]},);
map.set(dataTypes[3], {'значение':dataTypes[3], 'тип':typeof dataTypes[3], 'преобразование к числу': +dataTypes[3], 
'преобразование к строке':String(dataTypes[3]), 'преобразование к булеву':!!dataTypes[3]},);
map.set(dataTypes[4], {'значение':dataTypes[4], 'тип':typeof dataTypes[4], 'преобразование к числу': +dataTypes[4], 
'преобразование к строке':String(dataTypes[4]), 'преобразование к булеву':!!dataTypes[4]},);
map.set(dataTypes[5], {'значение':dataTypes[5], 'тип':typeof dataTypes[5], 'преобразование к числу': +dataTypes[5], 
'преобразование к строке':String(dataTypes[5]), 'преобразование к булеву':!!dataTypes[5]},);
map.set(dataTypes[6], {'значение':dataTypes[6], 'тип':typeof dataTypes[6], 'преобразование к числу': +dataTypes[6], 
'преобразование к строке':String(dataTypes[6]), 'преобразование к булеву':!!dataTypes[6]},);
map.set(dataTypes[7], {'значение':dataTypes[7], 'тип':typeof dataTypes[7], 'преобразование к числу': '--', 
'преобразование к строке':String(dataTypes[7]), 'преобразование к булеву':!!dataTypes[7]},);
map.set(dataTypes[8], {'значение':dataTypes[8], 'тип':typeof dataTypes[8], 'преобразование к числу': '--', 
'преобразование к строке':String(dataTypes[8]), 'преобразование к булеву':!!dataTypes[8]},);
map.set(dataTypes[9], {'значение':dataTypes[9], 'тип':typeof dataTypes[9], 'преобразование к числу': +dataTypes[9], 
'преобразование к строке':String(dataTypes[9]), 'преобразование к булеву':!!dataTypes[9]},);
map.forEach((map) => {
    console.log(map) 
});







let text = document.querySelector("textarea");
let table = document.querySelector("table");
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let button = document.querySelector("button");
const maps = new Map();
maps.set(text, button.addEventListener("click", () => { t1.textContent = text.value, t2.textContent = maps.forEach((text) => {
    
})}))

console.log(maps)



