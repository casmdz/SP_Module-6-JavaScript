//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. 

The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(s, names){
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        if (s.includes(name)){
            console.log(`Matched with ${name}`);
        } else {
            console.log('No Matches');
        }
        return "Done"
    }
};
findWords(dog_string, dog_names);
//console.log(findWords(dog_string, dog_names));


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

const replaceEvens = (givenArr) =>{
    let i = 0;
    while (i < givenArr.length ){
        givenArr.splice(i, 1, 'even index');
        i += 2;
    }
    return givenArr
}

console.log(replaceEvens(givenArr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
