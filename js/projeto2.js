const toggleButton = document.getElementsByClassName('toggle-button')[0]
const areaMapaDoSite = document.getElementsByClassName('area-mapadosite')[0]

toggleButton.addEventListener('click', () => {
    areaMapaDoSite.classList.toggle('active')
})
