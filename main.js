let currentStatus = document.querySelector("h5")
let addFriend = document.querySelector("#add")
var check = 0;

addFriend.addEventListener("click", ()=>{
    if(check == 0){
        currentStatus.innerHTML = "Friends";
        currentStatus.style.color = "green";
        addFriend.innerHTML = "Remove Friend";
        addFriend.style.backgroundColor = "gray"
        addFriend.style.color = "#000"
        check = 1;
    }else{
        currentStatus.innerHTML = "Stranger";
        currentStatus.style.color = "red";
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "green"
        addFriend.style.color = "#fff"
        check = 0;
    }
})
