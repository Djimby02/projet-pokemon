let xmlhttp = new XMLHttpRequest();

function loadXMLDoc(){       
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            displayById();
        }
    };

    xmlhttp.open("GET", " https://obiwan.univ-brest.fr/~e22209009/data/bdd.xml", true);
    xmlhttp.send();    
}

function displayById() {  

    let txtbonnereponse= document.getElementById("txtbonnereponse");
    let txtid = document.getElementById("txtid");
    let txtpoint = document.getElementById("txtpoint");
    let txtexp = document.getElementById("txtexp");
  
    //Récupérer id dans la chaîne de requête
    let urlParams = new URLSearchParams(window.location.search);
    let qstid= urlParams.get('id');
    let i;        
    let xmlDoc = xmlhttp.responseXML;    
    let x = xmlDoc.getElementsByTagName("question");    
    
    for (i = 0; i < x.length; i++) {        
        if (x[i].getElementsByTagName("id")[0].textContent== qstid){
            
            txtid.value=x[i].getElementsByTagName("id")[0].textContent;
            txtbonnereponse.value=x[i].getElementsByTagName("bonne_reponse")[0].textContent;
            txtpoint.value=x[i].getElementsByTagName("point")[0].textContent;
            txtexp.value=x[i].getElementsByTagName("explication")[0].textContent;

        }
    }
    document.getElementById("data").innerHTML = table;

} 