const list = [];



function displayProduct() {

    const totalPlayers = document.getElementById("total-players");

    if (list.length > 5) {
        alert('You can not add more then 5 players')
        return;
    }
    totalPlayers.innerText = list.length;

    const listContainer = document.getElementById("players-list");
    listContainer.textContent = '';

    for (let i = 0; i < list.length; i++) {

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th> ${i + 1}. ${list[i].playerName}</th>
        `;
        listContainer.appendChild(tr);
    }
}


function addToList(element) {
    const playerName = element.parentNode.children[0].innerText;
    const pn = {
        playerName: playerName,
    }
    list.push(pn);
    displayProduct();
}

document.getElementById('caltulate-total').addEventListener('click', function () {
    const totalPlayers = getTextElementValueById("total-players");
    const perPlayerCost = getFieldValueById("per-player-field");
    const totalPlayerCost = totalPlayers * perPlayerCost;
    setTextElementValueById('player-expenses', totalPlayerCost);
    return totalPlayerCost;

})
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerCost = getFieldValueById("manager-field");
    const coachCost = getFieldValueById("coach-field");
    const playertotalCost = getTextElementValueById("player-expenses");

    const totalCost = coachCost + managerCost + playertotalCost;

    setTextElementValueById('calculate-total', totalCost);


})