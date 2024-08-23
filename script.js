function pokeBusca(){
    let nome = document.querySelector('#nome').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then(response => response.json())
    .then(dados => {
        console.log(dados.name);
        document.querySelector('#pokeNome').innerHTML = "Nome: " + dados.name.charAt(0).toUpperCase() + dados.name.slice(1);
        console.log(dados.id);
        document.querySelector('#pokeID').innerHTML = "ID: " + dados.id;
        console.log(dados.sprites.versions['generation-v']['black-white'].animated.front_default);
        document.querySelector('#pokeImg').src = dados.sprites.versions['generation-v']['black-white'].animated.front_default;
    })
    .catch(error => console.log(error));
}
