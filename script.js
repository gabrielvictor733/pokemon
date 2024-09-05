function pokeBusca() {
    let nome = document.querySelector('#nome').value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then(response => response.json())
        .then(dados => {
            document.querySelector('#pokeNome').innerHTML = "Nome: " + dados.name.charAt(0).toUpperCase() + dados.name.slice(1);
            document.querySelector('#pokeID').innerHTML = "ID: " + dados.id;
            document.querySelector('#pokeImg').src = dados.sprites.versions['generation-v']['black-white'].animated.front_default;
        })
        .catch(error => console.log('Erro:', error));
}

document.getElementById('nome').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        pokeBusca();
    }
});

