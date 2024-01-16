
//TEAMOFTWO AS A CLASS

class TeamOfTwo {
    constructor(player1, player2) {
        //describing the team
        this._nameP1 = player1;
        this._nameP2 = player2;
        this._nameTeam = player1 + ' / ' + player2;
        this._groupTeam = '';

        //stats
        this._gamesPlayed = 0;
        this._gamesWon = 0;
        this._gamesLost = 0;
        this._setsWon = 0;
        this._setsLost = 0;
        this._pointsWon = 0;
        this._pointsLost = 0;
        this._rank = 0;

        }

        //getters
        get nameP1() {return this._nameP1;}
        get nameP2() {return this._nameP2;}
        get nameTeam() {return this._nameTeam;}
        get groupTeam() {return this._groupTeam;}
        get gamesPlayed() {return this._gamesPlayed;}
        get gamesWon() {return this._gamesWon;}
        get gamesLost() {return this._gamesLost;}
        get setsWon() {return this._setsWon;}
        get setsLost() {return this._setsLost;}
        get pointsWon() {return this._pointsWon;}
        get pointsLost() {return this._pointsLost;}
        get rank() {return this._rank;}

        //setters
        set gamePlayed (setsFor, setsAgainst, pointsFor, pointsAgainst) {
            if (typeof (setsFor && setsAgainst && pointsFor && pointsAgainst) === 'number') {
                this.gamesPlayed++;
                this.setsWon = setsFor;
                this.setsLost = setsAgainst;
                this.pointsWon = pointsFor;
                this.pointsLost = pointsAgainst;
                if (setsWon > setsLost) {
                    this.gamesWon++;
                } else if (setsFor < setsAgainst) {
                    this.gamesLost++;
                } else {
                    console.log('Invalid - setsFor and setsAgainst can not be equal');
                }
            } else {
                console.log('Invalid - only numbers are allowed as values');
            }   
        }

}







// const teamOfTwo = function (player1,player2) {
    
//     //create teamOfTwo object
//     let teamOfTwo = {};

//     //Player Info and Team-Name (static) - possibly prepend '_' and write getters?
//     teamOfTwo.player1 = player1;
//     teamOfTwo.player2 = player2;
//     teamOfTwo.name = teamOfTwo.player1 + ' / ' + teamOfTwo.player2;

//     //Play-mode parameters
//     teamOfTwo.group = ''; //groups named A, B, ...

//     //Team Stats (to be updated throughout the tournament)
//     teamOfTwo.gamesWon = 0;
//     teamOfTwo.gamesLost = 0;
    
//     //add setsWon/lost pointsWon/Lost, group, rankInGroup etc. later

//     return teamOfTwo; //return statement required to create object
// };



// INPUT ARRAY FROM FORM
teamsInputArray = [
    ['Mol', 'Sorum'],
    ['Ehlers', 'Wickler'],
    ['Perusic', 'Schweiner'],
    ['Ahman', 'Hellvig'],
    ['Alison', 'Filho'],
    ['Brouwer', 'Meeuwsen'],
    ['Dalhausser', 'Rogers'],
    ['Cherif', 'Tijan']
];

//FUNCTION TO RETURN SHUFFLED VERSION OF INPUT-ARRAY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

//CREATES RANDOM ORDER ARRAY OF TEAM OBJECTS
const createTeams = function (inputArray) {    
    let teams = [];
    for (i = 0; i < inputArray.length; i++) {
        teams.push(teamOfTwo(inputArray[i][0], inputArray[i][1]));
    };
    let teamsRandomized = shuffleArray(teams);
    return teamsRandomized;
};

//CALL CREATETEAMS ON INPUT-ARRAY FROM FORM TO CREATE TEAM OBJECTS
const teams = createTeams(teamsInputArray);

// #### TEAMS ARRAY COMPLETE AND ORDER RANDOMIZED ####
// any Team Name can now be accessed via teams[#].name
//################################################################################

//CREATE GROUPS











// //TEST ### PRINT TEAMS IN RANDOM ORDER
// const printTeams = function (array) {
//     for (i = 0; i < array.length; i++) {
//         console.log(array[i].name);
//     }
// };

// printTeams(teams);
// console.log(teams[3].name);
// // console.log(teams[2].gamesWon);



//TEST SPACE ############

// teamsInputArray = [
//     ['Mol', 'Sorum'],
//     ['Ehlers', 'Wickler'],
//     ['Perusic', 'Schweiner'],
//     ['Ahman', 'Hellvig'],
//     ['Alison', 'Filho'],
//     ['Brouwer', 'Meeuwsen'],
//     ['Dalhausser', 'Rogers'],
//     ['Cherif', 'Tijan']
// ];



// const createTeams = function (inputArray) {
//     //create array of team numbers
//     // let numsInput = inputArray.length; - kann weg?
//     let numsArrayStart = [];
//     for (i = 0; i < inputArray.length; i++) {
//         numsArrayStart.push(i);
//     };

//     let numsArray = shuffleArray(numsArrayStart)

//     return numsArray;
// }


// const teams = createTeams(teamsInputArray);
// console.log(teams);
// // console.log(teams[2].gamesWon);

