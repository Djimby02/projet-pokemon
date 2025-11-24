COMPTE RENDU WEB :
PROJET WEB:
INDEX.html :la page d’accueil ,on trouve des boutons vers l’interface apprendre jeu et statistique et des lots qui permettent de se diriger vers l’interface jeu pour commencer le jeu.

INTERFACE APPRENDRE :
fetchData():permet d’extraire balises <question> dans un document.getElementsByTageName
declarer un tableau vide et ajouter les questtions dans le tableau data et la fonction displayData est appelée pour afficher les données extraites,
displayeData():permet d’afficher les données dans le tableau avec un lien détails qui permets d’avoir plus d’information sur la question choisie
FiltrerData(): permet de récuperer la valeur des  questions selon la thematique choisie et si la question choisie correspond au thematique ou correspond à toute la liste de question on l’ajoute dans le tableau data la fonction displayData() est appellée pour afficher les données filtrer.

La fonction trie(a,b) permet de comparer par ordre alphabetique selon le thematique et sortData() permet le trie par thematique.

Details.js() :
displayById() permet de recuperer l’id dans la chaine de requete avec une boucle for afficher les informations liées à l’id de la question la bonne réponse et le point 
INTERFACE JEU :
fetchData() : on recupère lot dans la chaine de requete ,parcourir  avec une boucle for et afficher dans une division toute la liste des questions sont afficher avec des boutons  radios ainsi à la fin un bouton valider qui permet de valider les reponses choisies par l’utilisateur
avec le lien statistique qui permet d’afficher les scores ,
la fonction Validation():recupère la balise <question> parcourir la boucle en recuperat les id la bonne reponse et la reponse choisie on pose une condition le choix du joueur correspond au reponse cochée  on peut plus cocher une autre réponse.
On compare le choix du playeur  correspond à la bonne reponse on ajoute le point,recupérer la valeur du score convertit en tableau puis enregistrer le nouveau dans le local et afficher
la fonction resultat() : recuperer les scores enregistrer ajouter dans le set créer un table avec les scores et afficher dans la table HTML
INTERFACE STATISTIQUE :
une table vide qui permet d’afficher le score final apres avoir jouer 

Compte Rendu TD/TP :
TD1:exercice3 :
<id></id>:identifiant de la questions
<image><:image>:contient une image afficher avec la questions
<contenu>< /contenu> : contenant un texte lié au questions
<response></response> contenant les responses possibles 
<bonne_reponse><bonne_reponse>:le numero de la bonne reponse
<point></point> : affiche le nombre de point pour la bonne réponse
TD2:exercice2 :
la fonction fetchData() recupère la balise <question> qu ‘on va parcourir avec une boucle for pour afficher les données dans la table html data

et le filtrerData() meme que la fonction fetch permet de filtrer en fonction des thematiques et appel la fonction



 