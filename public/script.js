const fetchPets = async () => {
    try {
        const res = await fetch('http://localhost:8080/api/v1/pets');
        const pets = await res.json();

        const petsContainer = document.getElementById('petsContainer');
        
        petsContainer.innerHTML = '';

        pets.forEach(pet => {
            const petElement = document.createElement('div');
            petElement.classList.add('pet');
            petElement.innerHTML = `
                <h2>${pet.name}</h2>
                <p>Species: ${pet.species}</p>
                <p>Owner: ${pet.owner}</p>
            `;
            petsContainer.appendChild(petElement);
        });
    } catch (err) {
        console.err('No pets to be found:', err.message)
    }
}

window.onload = fetchPets;
