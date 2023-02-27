const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const cont = document.getElementById("light-img");

const images = cont.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('click', e => {
      lightbox.classList.add('active')
      const img = document.createElement('img')
      img.src = image.src
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(img)
    })
  })

  lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
  })