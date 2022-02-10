/*
Student: Talha Farid - M00795345
Description: leaderboard.js (contains objects, array object sort function and innerHTML for the Leaderboard)
*/

const leaderTable = document.getElementById("scoreTable");


let leaderArray = [];

for (let i = 0; i < localStorage.length; i++) {

    // this object contains username and scores
    let userObject = {
        username: localStorage.key(i),
        score: JSON.parse(localStorage.getItem(localStorage.key(i))).maxscore
    };
    leaderArray.push(userObject);
}

// sort by highscore

leaderArray.sort(function(a,b) {
    return b.score - a.score;
});
console.log("This is how Talha sorts! Yaas!");
console.log(leaderArray);

// innerHTML for the Leaderboard table

leaderArray.forEach(element => {
    leaderTable.innerHTML +=    '<tr>'+
                                    '<td style="color: black">' + element.username + '</td>'+
                                    '<td>' + element.score + '</td>'+
                                '</tr>';
})

