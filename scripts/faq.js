var changeId;

let info = [
    { id: 1, frame: "Angular", type: "Typescript" },
    { id: 2, frame: "React", type: "Javascript" },
    { id: 3, frame: "Laravel", type: "PHP" },
];

const containerList = document.getElementById("list");
var lista = "";
lista += "<table>";
for (let index = 0; index < info.length; index++) {
    lista += `<tr><td onClick='openRows(${index})'><div class='icon-option'><div id='icon-${index}'><i class="fas fa-plus-circle"></i></div>${info[index].frame}</div></td></tr>`;
    lista += `<tr><td class='content-data-expant' id='expant-info-${index}'><div> <div>${info[index].type}: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,architecto exercitationem iste fuga placeat, qui consequatur fugiat corporis,expedita totam similique incidunt aliquam mollitia quis magnam voluptas eaquesapiente eos? </div> </div></td></tr>`;
}
lista += "</table>";

containerList.innerHTML = lista;


function openRows(i) {
    if (changeId != i) {
        (changeId >= 0) ? document.getElementById(`expant-info-${changeId}`).style.display = 'none' : false;
        (changeId >= 0) ? document.getElementById(`icon-${changeId}`).innerHTML = '<i class="fas fa-plus-circle"></i>' : false;
        changeId = i;
        var open = document.getElementById(`expant-info-${i}`);
        var icon = document.getElementById(`icon-${i}`);
        icon.innerHTML = '<i class="fas fa-minus-circle"></i>';
        open.style.display = 'block';
    }
}