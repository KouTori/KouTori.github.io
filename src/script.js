let data = {
    players : [
        {"name":"たいこう","star":4,"team":"blue"},
        {"name":"たつみ","star":3,"team":"red"},
        {"name":"はるみち","star":1,"team":"none"},
        {"name":"こうむら","star":2,"team":"none"},
        {"name":"キム・ツヨシ","star":2,"team":"none"},
        {"name":"ほり","star":0,"team":"none"},
        {"name":"サカナ","star":2,"team":"none"},
        {"name":"おっかー","star":3,"team":"none"},
        {"name":"みっつー","star":5,"team":"none"},
        {"name":"こーよ","star":4,"team":"none"},
        {"name":"ゆーま","star":2,"team":"none"}
    ]
}

function renderAllPlayers(){
    let blue = document.getElementById("teamBlue");
    let red = document.getElementById("teamRed");
    let none = document.getElementById("participants_none");
    for(let pl of data.players){
        let playerBox = document.createElement("div");
        playerBox.classList.add("player");
        let playerName_con = document.createElement("div");
        playerName_con.classList.add("player_nameCon");
        let face_img = document.createElement("img");
        face_img.setAttribute("src","./src/face.png");
        face_img.setAttribute("alt", "顔");
        let name = document.createElement("p");
        name.classList.add("player_name");
        name.innerText = pl.name;
        playerName_con.appendChild(face_img);
        playerName_con.appendChild(name);
        let rare = document.createElement("p");
        rare.classList.add("player_rare");
        rare.innerText = "★"+pl.star.toString();
        playerBox.appendChild(playerName_con);
        playerBox.appendChild(rare);
        switch (pl.team) {
            case "blue":
                playerBox.classList.add("blue");
                blue.appendChild(playerBox);
                break;
            case "red":
                playerBox.classList.add("red");
                red.appendChild(playerBox);
                break;
            default:
                playerBox.classList.add("none");
                none.appendChild(playerBox);
                break;
        }
    }
}

renderAllPlayers();