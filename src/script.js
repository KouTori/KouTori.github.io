let data = {
    players : [
        {"name":"たいこう","star":4,"team":"blue","schedule":{"1/3":"O","1/4":"O","1/5":"O"}},
        {"name":"たつみ","star":3,"team":"red","schedule":{"1/3":"x","1/4":"?","1/5":"AM"}},
        {"name":"はるみち","star":1,"team":"blue","schedule":{"1/3":"O","1/4":"O","1/5":"O"}},
        {"name":"こうむら","star":2,"team":"red","schedule":{"1/3":"O","1/4":"O","1/5":"O"}},
        {"name":"キム・ツヨシ","star":2,"team":"red","schedule":{"1/3":"?","1/4":"?","1/5":"?"}},
        {"name":"ほり","star":0,"team":"blue","schedule":{"1/3":"O","1/4":"O","1/5":"▲"}},
        {"name":"サカナ","star":2,"team":"blue","schedule":{"1/3":"?","1/4":"?","1/5":"?"}},
        {"name":"おっかー","star":3,"team":"red","schedule":{"1/3":"O","1/4":"O","1/5":"AM"}},
        {"name":"みっつー","star":5,"team":"red","schedule":{"1/3":"x","1/4":"?","1/5":"?"}},
        {"name":"こーよ","star":4,"team":"blue","schedule":{"1/3":"?","1/4":"?","1/5":"?"}},
        {"name":"ゆーま","star":2,"team":"red","schedule":{"1/3":"▲","1/4":"O","1/5":"O"}},
        {"name":"ねっつん","star":3,"team":"red","schedule":{"1/3":"O","1/4":"x","1/5":"PM"}},
        {"name":"じゅん","star":3,"team":"blue","schedule":{"1/3":"?","1/4":"?","1/5":"?"}},
        {"name":"いっせい","star":3,"team":"blue","schedule":{"1/3":"?","1/4":"O","1/5":"O"}}
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

function renderSchedule(){
    let table = document.createElement("table");
    let target = document.getElementById("schedule");
    target.appendChild(table);
    table.innerHTML = '<tr><td>来れる日</td><td>1/3</td><td>1/4</td><td>1/5</td></tr>';
    for(let pl of data.players){
        table.innerHTML += '<tr><td>'+pl.name+'</td><td>'+pl.schedule["1/3"]+'</td><td>'+pl.schedule["1/4"]+'</td><td>'+pl.schedule["1/5"]+'</td></tr>';
    }
}

renderSchedule();
renderAllPlayers();