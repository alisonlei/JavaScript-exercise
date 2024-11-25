// EXERCISE 2 (Week 8)


item_names  = [ "Mountain bike", "Pool cue", "Piton" ];
item_prices = [ 1399,            35,         18      ];


function getPrice(name,item_names,item_prices){
    
    for (let i=0;i<item_names.length;i++){
        if (name===item_names[i]){
            return item_prices[i];
           
        }
    }
    
    return 'unavailable';
    
}


// Some tests
console.log( getPrice( "Pool cue",       item_names, item_prices ) );     // Should return "35"
console.log( getPrice( "Scuba cylinder", item_names, item_prices ) );     // Should return "Unavailable"

