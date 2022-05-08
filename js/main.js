
document.querySelector('button').addEventListener('click', getPokèmon)
function getPokèmon(){
  let pokemonVal = document.querySelector('input').value
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonVal}/`
  fetch(url.toLowerCase())
  .then(res => res.json())
  .then(data => {
  let urlTwo = `https://g.tenor.com/v1/search?q=${data.name}&key=LNY6YHE897NU&limit=1`
    fetch(urlTwo.toLowerCase())
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector('.gifImg').src = data.results[0].media[0].gif.url
      })
      .catch(err => {
        console.log(`err ${err}`)
      })
    document.querySelector('.mainImg').src = data.sprites.front_default
    document.querySelector('.secondPic').src = data.sprites.back_default
    document.querySelector('h3').innerText = data.abilities[1].ability.name
    document.querySelector('h2').innerText = data.name
  })
  .catch(err => {
    console.log(`err ${err}`)
  })
}