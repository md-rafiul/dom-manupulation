function getValueFromTextField(elementId){
    const gettingElement = document.getElementById(elementId);
    const getValueString = gettingElement.value;
    const getValue = parseInt(getValueString);

    // gettingElement.value = '';
    return getValue;  
}

function getInnerTextNumeber(elementId){
    const gettingElement = document.getElementById(elementId);
    const getTextString = gettingElement.innerText;
    const getText = parseInt(getTextString);

    return getText; 
}

function getInnerTextString(elementId){
    const gettingElement = document.getElementById(elementId);
    const getTextString = gettingElement.innerText;

    return getTextString; 
}

function setInnerText (elementId, value){
    const gettingElement = document.getElementById(elementId);
    gettingElement.innerText = value;
}

function addPlayerOnList(name){
    const listContainer = document.getElementById('player-list');
    if(listContainer.childNodes.length >4){
        alert('you can not add more than five player')
    this.setAttribute ('disabled', false)
    }
    else{
        const li = document.createElement('li');
        li.innerText = name;
        listContainer.appendChild(li);
    }
}

function disableSelect (buttonId){
    const button = document.getElementById(buttonId);
    button.setAttribute ('disabled', true)
    button.style.backgroundColor = "gray";
}

// player list
// let hudai = document.getElementsByClassName('hudai')

// .addEventListener('click', function(event){
//     console.log("shit");
//     let text = event.target.parentNode.fristChild.innerText;
//     console.log(text);
// }) 
document.getElementById('selectMessi').addEventListener('click', function(){
    addPlayerOnList(document.getElementById('Messi').innerText);
    disableSelect('selectMessi');
})
document.getElementById('selectNeymar').addEventListener('click', function(){
    addPlayerOnList(document.getElementById('Neymar').innerText);
    disableSelect('selectNeymar');
})
document.getElementById('selectRonaldo').addEventListener('click', function(){
    addPlayerOnList(document.getElementById('Ronaldo').innerText);
    disableSelect('selectRonaldo');
})
document.getElementById('selectKylian').addEventListener('click', function(){
    addPlayerOnList(document.getElementById('Kylian').innerText);
    disableSelect('selectKylian');
})
document.getElementById('selectLewan').addEventListener('click', function(){
    addPlayerOnList(document.getElementById('Lewan').innerText);
    disableSelect('selectLewan');
})
document.getElementById('selectKane').addEventListener('click', function(){
    addPlayerOnList(document.getElementById('Kane').innerText);
    disableSelect('selectKane');
})





document.getElementById('cal-player-expenses').addEventListener('click', function(){
    const totalPlayer = document.getElementById('player-list');
    const length = totalPlayer.childNodes.length;
    let playerExpense = getValueFromTextField('perPlayerBudgetInput');
    
    if(isNaN(playerExpense)){
        alert("Please input number!!!");
    }else{
        playerExpense = playerExpense * length;
        setInnerText('player-expense', playerExpense);
    }    
})

document.getElementById('calculate-total').addEventListener('click', function(){
    let playerExpense = getInnerTextNumeber('player-expense');
    let managerExpense = getValueFromTextField('managerBudget');
    let coachExpense = getValueFromTextField('coachBudget');
    console.log(playerExpense , managerExpense , coachExpense);

    if (isNaN(playerExpense) || isNaN(managerExpense) || isNaN(coachExpense)){
        alert("Please input number!!!");
    }else{
    let total = playerExpense + managerExpense + coachExpense;
    setInnerText('total', total);
}
})