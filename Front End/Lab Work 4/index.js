const cards = document.getElementsByClassName('text'),
btn1 = document.getElementById('btn-1'),
btn2 = document.getElementById('btn-2'),
btn3 = document.getElementById('btn-3')
const array1 = [
{
    id: 'Animals',
    arr: ['Aikyn','Aidos','Peter','Alex','Anderson','Ruslan','Alim','Gordon']
},
{
    id: 'Cars',
    arr: ['Alisher','Shirali','Anderson','Ronaldo','Messi','Son','Kane','Zoey']
},
{
    id: 'Anime',
    arr: ['Adlet','Yerrasyl','Brad','Elizabeth','Rustam','Anuar','Sultan','Dana']
}
]

btn1.addEventListener('click', () => {
    const animals = array1.filter(id => id.id === 'Animals')
    const mapped = animals.map(id => id.arr)
    for (let i = 0;i < cards.length;i++ ) {
        cards[i].innerHTML = mapped[0][i]
    }
})
btn2.addEventListener('click', () => {
    const cars = array1.filter(id => id.id === 'Cars')
    const mapped = cars.map(id => id.arr)
    for (let i = 0;i < cards.length;i++ ) {
        cards[i].innerHTML = mapped[0][i]
    }
})
btn3.addEventListener('click', () => {
    const Anime = array1.filter(id => id.id === 'Anime')
    const mapped = Anime.map(id => id.arr)
    for (let i = 0;i < cards.length;i++ ) {
        cards[i].innerHTML = mapped[0][i]
    }
})
