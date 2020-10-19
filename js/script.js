var nome = prompt("Qual è il tuo nome?"); // il nome che verrà inserito dall'utente diventerà il valore della variabile nome
var cognome = prompt("Qual è il tuo cognome?"); // il cognome che verrà inserito dall'utente diventerà il valore della variabile cognome
var colorePreferito = prompt("Qual è il tuo colore preferito?"); // il colore che verrà inserito dall'utente diventerà il valore della variabile colorePreferito
document.getElementById("password").innerHTML = nome + cognome + colorePreferito + "19"; // verrà restituito, come testo dell'h1, il valore della varibile nome, seguito dal valore della variabile cognome, seguito dal valore della variabile colorePreferito, seguito da numero 19, il tutto senza spazi
