/*
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
*/
const listaSpesa = [
    'pasta',
    'pesto',
    'farina',
    'carne',
    'uova',
    'formaggio',
    'patatine',
    'salse',
    'verdura'
  ];
const lista = document.querySelector('ul');
let counter = 0;
while (counter < listaSpesa.length){
    const listItem = document.createElement('li');
    listItem.innerText = listaSpesa[counter];
    lista.appendChild(listItem);
    counter++;
}
