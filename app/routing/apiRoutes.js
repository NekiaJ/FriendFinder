// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friendData = require("../data/friends");


module.exports = function(app) {

    //returns all the friends in the friend.js as JSON
    app.get ("/data/friends",function (request,response) {
         response.json(friendData);  
        });
///// 
        app.post("/api/friends", function (request,response){
            // scores refers to the array in friendArray in friend.js
            console.log(request.body.scores);
               // takes in all user details (name,pic,scores from survey)
               var user = request.body;

               //parse data for scores
               for(var i = 0; i < user.scores.length; i++){
                   user.scores[i] = parseInt(user.scores[i]);
               }
               
               //starting point for matching friends
               var friendMatchIndx = 0;
               //scores cant be any lower than this numb
               var minDiff = 40;

               // this loop is for comparing the user and the [i] friend scores. 
               //then it will add  whatever the diff is  to the total diff

               for (var i=0; i < friendData.length; i++){
                   var totalDiff = 0;

                    for(var a = 0; a < friendData[i].scores.length; a++){
                        var diffrence = Math.abs(user.scores[a] - friendData[i].scores[a]);

                        totalDiff += diffrence;
                    }
                    // this is for when there is a new minimum. it changes the bf index and sets the a new min
                    if(totalDiff < minDiff){
                        friendMatchIndx = i;
                        minDiff = totalDiff;
                    }

                    // when match is found, add the user to friend array
                    friendData.push(user);

                    //sends the bf match to the browser
                    response.json(friendData[friendMatchIndx]);
               }
     });


            // //clear out the table while working with the functionality.

            // app.post("/api/clear", function(req, res) {
            //     // Empty out the arrays of data
            //     tableData.length = 0;
            //     waitListData.length = 0;
            
            //     res.json({ ok: true });
            //   });
            
};
