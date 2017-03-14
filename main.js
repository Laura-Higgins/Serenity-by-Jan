var images = ['candle1', 'candle2', 'candle3', 'candle4', 'candle5', 'candle6']

for(i = 0; i<images.length; i++) {
  var $imageContainer = document.createElement('div')
  $imageContainer.classList.add('col-sm-6')
  $imageContainer.textContent = images[i]
  var $gallery = document.querySelector('#gallery')
  $gallery.appendChild($imageContainer)
}
