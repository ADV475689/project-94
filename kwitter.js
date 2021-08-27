var username= document.getElementById("user_name").value;

function login(){
    localStorage.setItem("username" , username);
    window.location="kwitter_room.html";
}

