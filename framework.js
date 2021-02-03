function insertSquares(){
    //the refNode inserts the elements into the chess_board class
    var refNode = document.getElementById("chess_board");
    //the flag sets a reference point for what color squares go where
    var flag = 0;
    for(var i = 0; i < 64; i++){
        var new_square = document.createElement("div");
        if(flag <= 7){
            if(i % 2 == 0){
                new_square.className = "white_sq";
            }
            else{
                new_square.className = "green_sq";
            }
            flag++
        }
        else{
            if(i % 2 == 0){
                new_square.className = "green_sq";
            }
            else{
                new_square.className = "white_sq";
            }
            flag++
            if(flag == 16){
                flag = 0;
            }
        }
        for(var j = 0; j < 8; j++){
            
        }
        refNode.appendChild(new_square);
    }
}

insertSquares();
