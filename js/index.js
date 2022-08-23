// common function

function getValueFromTextField(elementId){
    const gettingElement = document.getElementById(elementId);
    const getValueString = gettingElement.value;
    const getValue = parseInt(getValueString);

    gettingElement.value = '';
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

// selected player

let playerName = [];

document.getElementById('select').addEventListener('click', function(){
    playerName.push(getInnerTextString('Messi')) ;
})



// Budget section


document.getElementById('cal-player-expenses').addEventListener('click', function(){
    alart("Please input number!!!");

    if (isNaN(getValueFromTextField('perPlayerBudget'))){
    }
    else{
    let playerExpense = getValueFromTextField('perPlayerBudget')*5;
    setInnerText('player-expense', playerExpense);
    }
})

document.getElementById('calculate-total').addEventListener('click', function(){
    let playerExpense = getInnerTextNumeber('player-expense');
    let managerExpense = getValueFromTextField('managerBudget');
    let coachExpense = getValueFromTextField('coachBudget');
    
    let total = playerExpense + managerExpense + coachExpense;
    setInnerText('total', total);
})