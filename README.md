Commonjs-modules
===
Lavoriamo con i moduli commonjs esportando e importando valori e funzioni. Segui questi tre step creando i rispettivi files:

1.  names.js
 - Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
 - Esporta la funzione dal file.
2. hobbies.js
 - Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. 
 - La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
 -  Esporta la funzione dal file.
3. people.js
 -  Importa la tua funzione da names.js
 -  Importa la tua funzione da hobbies.js
 -  Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.

## Papar Information
- Ho creato innanzitutto i miei tre file js dove andare poi a creare le mie funzioni come da consegna.
- Ho inizializzato il mio file people.js dal terminale e ho creato i miei scripts start e watch con il percorso relativo al loro interno per lanciare il file.
- Ho quindi iniziato dalla creazione semplice delle due funzioni esterne da utilizzare nei miei file names.js e hobbies.js.
- Ho in seguito esportato i miei file e li ho importati nel mio file people.js.
- Qui ho utilizzato le mie funzioni precedentemente create per creare la funzione finale che mi restituisca l'oggetto completo.