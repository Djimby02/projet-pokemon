let xmlhttp = new XMLHttpRequest(); 

let nbPage = 0;
let pageSize = 5;
let startIndex = 0;
let endIndex = 0;
let page = 1;

let data=[] ;
let filtredata=[];
let filtre=false;


function loadXMLDoc() {
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            fetchData();
            showPageLinks();
      
        }
    };
    xmlhttp.open("GET", " https://obiwan.univ-brest.fr/~e22209009/data/bdd.xml", true);
    xmlhttp.send();
}
function fetchData() {

    if(filtre) return;
    let i;
    let xmlDoc = xmlhttp.responseXML;
    let x = xmlDoc.getElementsByTagName("question");


    data = [];
    //Calculer nbPage  
    nbPage=Math.ceil(x.length/pageSize);
     

    //Calculer startIndex et endIndex    
    startIndex=(page-1)*pageSize;
    endIndex=Math.min(startIndex + pageSize-1,x.length);

    //Mettre à jour la boucle en tenant compte startIndex et endIndex
    for (i = startIndex; i < endIndex; i++) {   

        data.push(x[i]);
    }
    console.log(data);
    displayData();

}

 function loadPage(pageNumber) {
    //Mettre à jour la valeur de page en fonction de pageNumber

    page = pageNumber;
    if(filtre){
            startIndex=(page-1)*pageSize;
            endIndex=Math.min(startIndex + pageSize-1,filtredata.length);


            data = filtredata.slice(startIndex,endIndex);

            displayData();
            showPageLinks();
            return;
    }

    //Appeler la fonction fetchData 
    fetchData();
    showPageLinks();
}   

function showPageLinks() {
    let divpl = document.getElementById("pageLinks");
    divpl.style.display = "block";
    let pageLinks="";
    let i;
    for (i = 1; i <= nbPage; i++) {
        pageLinks += "<input type='button' onclick='loadPage(" + i
        +")' value='"+i+"'></input>";
        }
        divpl.innerHTML = pageLinks;

    }

function displayData() {
    let table = "<tr><th>Questions</th><th>response 1</th><th>response 2</th><th>response 3</th><th>Thématique</th><th>Détails</th></tr>";
    for (i = 0; i < data.length; i++) {
        table += "<tr>"
            + "<td>"
            + data[i].getElementsByTagName("contenu")[0].textContent
            + "</td>"
            + "<td>"
            + data[i].getElementsByTagName("response1")[0].textContent
            + "</td>"
            + "<td>"
            + data[i].getElementsByTagName("response2")[0].textContent
            + "</td>"
            + "<td>"
            + data[i].getElementsByTagName("response3")[0].textContent
            + "</td>"
            + "<td>"
            + data[i].getElementsByTagName("thematique")[0].textContent
            + "</td>"
            +"<td>"
            +"<a href='details.html?id="+data[i].getElementsByTagName("id")[0].textContent
            +"'>Details</a>"
            +"</td></tr>";
    }
    document.getElementById("data").innerHTML = table;

}


function filterData() {
    let i;
    let xmlDoc = xmlhttp.responseXML;
    let x = xmlDoc.getElementsByTagName("question");
    let theme=document.getElementById("thematique").value;
    
   
    data = [];
    for (i = 0; i < x.length; i++) {
        if(x[i].getElementsByTagName("thematique")[0].textContent == theme || theme== "Tout"){

          data.push(x[i]);
        }
    } 
    filtre=true;
    filtredata=data.slice();

    page=1
    nbPage=Math.ceil(filtredata.length/pageSize);


    loadPage(1);
}

function trie(a, b) {
   let nameA=a.getElementsByTagName("contenu")[0].textContent;
   let nameB=b.getElementsByTagName("contenu")[0].textContent;
    if(nameA<nameB){
        return -1;

    }
    if(nameA>nameB){
        return 1;
    }
    return 0;
}

function sortData() {
   data.sort(trie);
   displayData();
  

}

