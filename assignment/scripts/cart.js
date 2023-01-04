console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem (item) {
    if (item != undefined){
        basket.push(item);
        console.log('added', item + ':', basket);
        return true;
    }
    else{
        console.log('nothing added');
    }
    
}

function empty (array){
    array = [];
    console.log('emptied array:', array);
}

function listItems (array){
    console.log('listing items in');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

addItem('Fork');
addItem();
addItem('Knife');
addItem('Spoon');

listItems(basket);

empty(basket);


