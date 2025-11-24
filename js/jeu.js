let xmlhttp = new XMLHttpRequest();
let result = new Set();

function loadXMLDoc() {
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            fetchData();
        }
    };

    xmlhttp.open("GET", " https://obiwan.univ-brest.fr/~e22209009/data/bdd.xml", true);
    xmlhttp.send();
}

function fetchData() {
    // Récupérer lot dans la chaîne de requête   
    let xmlDoc = xmlhttp.responseXML;
    let table = "";
    let questions = xmlDoc.getElementsByTagName("question");
    let lot = new URLSearchParams(window.location.search).get('lot');

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].getElementsByTagName("lot")[0].textContent == lot) {
            let questionId = questions[i].getElementsByTagName("id")[0].textContent;
            table += "<div class='question-item'>";
            table += "<h3>ID: " + questionId + "</h3>";
            table += "<p><strong>Question:</strong> " + questions[i].getElementsByTagName("contenu")[0].textContent + "</p>";
            table += "<ul>";
            table += "<li><input type='radio' name='question_" + questionId + "' value='1'> " + questions[i].getElementsByTagName("response1")[0].textContent + "</li>";
            table += "<li><input type='radio' name='question_" + questionId + "' value='2'> " + questions[i].getElementsByTagName("response2")[0].textContent + "</li>";
            table += "<li><input type='radio' name='question_" + questionId + "' value='3'> " + questions[i].getElementsByTagName("response3")[0].textContent + "</li>";
            table += "</ul></div>";
            table += "<hr>";
        }
    }
    table += "<button id='validate-btn' onclick='validation()'>Valider</button>";

    document.getElementById("question").innerHTML = table;
}

function validation() {
    let xmlDoc = xmlhttp.responseXML;
    let questions = xmlDoc.getElementsByTagName("question");
    let point = 0;

    for (let i = 0; i < questions.length; i++) {
        let questionId = questions[i].getElementsByTagName("id")[0].textContent;
        let goodResponse = questions[i].getElementsByTagName("bonne_reponse")[0].textContent;
        let boutons = document.getElementsByName('question_' + questionId);
        let choixplayeur = null;


        for (let n=0; n< boutons.length; n++) {
            if (boutons[n].checked) {
                choixplayeur = boutons[n].value;
                break;
            }
        }
        if (choixplayeur !== null && choixplayeur == goodResponse) {
            point += parseInt(questions[i].getElementsByTagName("point")[0].textContent);
        }
    }

    let total = localStorage.getItem("valeur");
    let tabArray;
    if (total == null) {
        tabArray = [];
    } else {
        tabArray = total.split(',');
    }
    tabArray.push(point);
    localStorage.setItem("valeur", tabArray.join(','));

    alert("Le nombre de points est : " + point);
}

function resultat() {
    let total = localStorage.getItem("valeur");
    if (!total) {
        alert("Aucun score enregistré.");
        return;
    }

    let tab = total.split(',');
    for (let i = 0; i < tab.length; i++) {
        result.add(tab[i]);
    }

    let table = "<table><tr><th>Numéro</th><th>Point</th></tr>";
    let i = 0;
    for (const val of result) {
        table += "<tr><td>" +
            i +
            "</td><td>" +
            val +
            "</td></tr>";
        i++;ss
    }
 
    document.getElementById("score").innerHTML = table;
}
function supprimer() {
    
        localStorage.removeItem("valeur"); // Supprime les scores enregistrés
       
    
}

