console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5

function addItem (item) {
    if (isFull(basket) === false && typeof item === 'string'){ // item can fit and be defined
        basket.push(item);
        console.log('added', item);
        return true;
    }
    else if (item != undefined && isFull(basket) === true){ // item cant fit
        console.log(item + ' wont fit');
        return false
    }
    else {
        console.log('unable to be added'); // item is undefined
        return false
    }
}

function empty (emptyArray){
    for (let i = 0; i < emptyArray.length;) {
        emptyArray.pop();
    }
    console.log('emptied array:'); 
    return emptyArray
}

function listItems (listArray){
    console.log('listed items:');
    for (let i = 0; i < listArray.length; i++) {
        console.log(listArray[i]);
    }
}

function isFull(arrayFull){
    if (arrayFull.length < maxItems){
        return false;
    }
    else {
        return true;
    }
}

function removeItem(item){   

   if(basket.includes(item)){
        basket.splice(basket.indexOf(item), 1); 
        console.log(item + ' was removed');
        return item;
    }
   else{
       return null;
   }
}

addItem('Fork');
addItem('Knife');
addItem('Spoon');
addItem();          // unable to be added

console.log('basket is now', basket);

listItems(basket);

empty(basket);

console.log('basket is now', basket);

addItem('Fork');
addItem('Knife');
addItem('Spoon');
addItem('Bowl'); // will fit
addItem('Plate') // will fit
addItem('Burger');  // wont fit
addItem();       // unable to be added

console.log('basket is now', basket);

isFull(basket);

removeItem('Spoon');
removeItem('Bowl');
removeItem('Taco'); // wont show up // wasnt in basket

addItem('Steak');

console.log('basket is now', basket);

