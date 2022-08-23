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








    
    
    // const playerExpense = getValueFromTextField('perPlayerBudget');
    // console.log(playerExpense);
    // setInnerText('player-expense', playerExpense);
   
    // if (isNaN(getValueFromTextField('perPlayerBudget'))){
    //     console.log(isNaN(getValueFromTextField('perPlayerBudget')));
    //     alert("Please input number!!!");
    // }
    // else{
    // }
})

document.getElementById('calculate-total').addEventListener('click', function(){
    let playerExpense = getInnerTextNumeber('player-expense');
    let managerExpense = getValueFromTextField('managerBudget');
    let coachExpense = getValueFromTextField('coachBudget');
    
    let total = playerExpense + managerExpense + coachExpense;
    setInnerText('total', total);
})