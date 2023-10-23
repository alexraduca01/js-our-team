// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// Trasformare la stringa foto in una immagine effettiva

const row = document.querySelector('.row');

const ourTeam = [
    
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg",
    },
];

console.log(ourTeam);

for (let a = 0; a < ourTeam.length; a++){
    stamp(ourTeam[a]);
}

function stamp(ourTeam){

    let col = document.createElement('div');
    col.classList.add('col-4');
    col.innerHTML = 
    `
        <div class="card my-3 text-start">
            <img class="card-img-top img-fluid" src="img/${ourTeam.picture}" alt="propic">
                <div class="card-body">
                    <h4 class="card-title text-center">${ourTeam.name}</h4>
                    <p class="card-text text-center">${ourTeam.role}</p>
                </div>
        </div>
    `;
    row.append(col);
};

// BONUS :
// Organizzare i singoli membri in card/schede
// Aggiungere un nuovo membro al team

const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    
    const newUser = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        picture: document.getElementById('picture').value,
    };

    ourTeam.push(newUser);
    stamp(newUser);
    reset();
})

function reset(){
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('picture').value = '';
}