//Player variables

player1_name = localStorage.getItem(player_1_name);
player2_name = localStorage.getItem(player_2_name);

player_1_score = 0;
player_2_score = 0;

//Showing in the page

document.getElementById('player_1_name').innerHTML = player1_name + " : ";
document.getElementById('player_2_name').innerHTML = player2_name + " : ";
document.getElementById('player_1_score').innerHTML = player_1_score + " : ";
document.getElementById('player_2_score').innerHTML = player_2_score + " : ";

//Showing Q&A (turns)




//Sending answers

function send(){
    getInput = document.getElementById('word').value;
    word_lowercased = getInput.toLowerCase();
    console.log('Word in lowercase: ' + word_lowercased);

    //Getting characters of the word
    character_at_one = word.charAt('1')
    console.log(character_at_one + "is the 2nd letter of " + word_lowercased);

    //Finding length of the word
    length_divide_two = Math.floor(word_lowercased.length / 2);
    character_at_two = word_lowercased.charAt(length_divide_two);
    console.log(character_at_two);

    length_minus_one = word_lowercased.length - 1;
    character_at_three = word_lowercased.charAt(length_minus_one);
    console.log(character_at_three);

    removed_character_at_one = word_lowercased.replace(character_at_one, "_");
    removed_character_at_two = removed_character_at_one.replace(character_at_two, "_");
    removed_character_at_three = removed_character_at_two.replace(character_at_three, "_");
    console.log(removed_character_at_three);

    //Making div parameters
    question = "<h4 id='word_display'>Q. " + removed_character_at_three + "</h4>";
    input_box = "<br> Answer: <input type='text' id='input_checkbox'>";
    check_button = "<br> <br> <button class='btn btn-primary' onclick='check()'>Check</button>"

    //Making a row and showing all outputs
    row = question + input_box + check_button;
    document.getElementById('output').innerHTML = row;
    document.getElementById('word').value = "";
}
player_question = player1_name;
player_answer = player2_name;
console.log(player1_name, player2_name)
document.getElementById('player_question').innerHTML = "QUESTION TURN: " + player1_name;
document.getElementById('player_answer').innerHTML = "ANSWER TURN: " + player2_name;
//Functions for changing turns

function check(){
    get_answer = document.getElementById('word').value;
    answer = get_answer.toLowerCase();
    console.log("User's answer in lowercase " + answer);
    if(answer == word){
        score()
    }
    question_turn()
    answer_turn()
    
    
}
function score(){
    if(player_answer==player1_name){
        player_1_score = player_1_score + 1; 
        document.getElementById('player_1_score').innerHTML = player_1_score;
    }
    else{
        player_2_score = player_2_score + 1; 
        document.getElementById('player_2_score').innerHTML = player_2_score;
    }
}
function question_turn(){
    if(player_question == player1_name){
        player_question = player2_name;
        document.getElementById('player_question').innerHTML = "QUESTION TURN: " + player_question;
    }
    else{
        player_question = player1_name;
        document.getElementById('player_question').innerHTML = "QUESTION TURN: " + player_question;
    }
}
function answer_turn(){
    if(player_answer == player1_name){
        player_answer = player2_name;
        document.getElementById('player_answer').innerHTML = "ANSWER TURN: " + player_answer;
    }
    else{
        player_answer = player1_name;
        document.getElementById('player_answer').innerHTML = "ANSWER TURN: " + player_answer;
    }
}