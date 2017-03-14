var candles = [
  {
    name: 'Peace Becomes Her',
    description: 'Fend off death with this peaceful mixture of aged juniper and winter cranberry. Burns for 100 hours. Wood Wick.',
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    name: 'Serentiy, NOW!',
    description: 'Don\'t beat around the bush, get serene NOW. Peppermint and basil medle together for ahh..serenity. Burns for 100 hours. Wood Wick.',
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    name: 'Shangri-lovely',
    description: 'Madarin and vanilla channel the scents of Shangria-La, whisking you away to the jungle. Burns for 100 hours. Wood Wick',
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    name: 'Aloahhhh',
    description: 'Feel like your beachside in Hawaii with coconut and sugar filling the air. Burns for 110 hours. Wood Wick.',
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    name: 'The Office',
    description: 'Maybe you\'re most relaxed at work. This clean, sterile mixture of mint and cotton will bring you back to your desk, feeling productive. Burns for 100 hours. Wood Wick.',
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    name: 'Meadow Spring',
    description: 'Bambi was rarely stressed. Feel like a fawn in Spring with this delicious lavander and orange mixture. Burns for 110 hours. Wood Wick.',
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
]

for(i = 0; i<candles.length; i++) {
  var $candleContainer = document.createElement('div')
  $candleContainer.classList.add('col-sm-6', 'style')


  var $name = document.createElement('div')
  $name.textContent = candles[i].name
  $name.classList.add('title')

  var $picture = document.createElement('img')
  $picture.src = candles[i].source


  var $description = document.createElement('div')
  $description.textContent = candles[i].description
  $description.classList.add('style')

  var $gallery = document.querySelector('#gallery')
  $gallery.appendChild($candleContainer)
  $candleContainer.appendChild($name)
  $candleContainer.appendChild($picture)
  $candleContainer.appendChild($description)
}

// document.addEventListner('click', function(event) {
//   if (event === 'click') {
//     $description.classList.add('visibility')
//   } else {
//     $description.classList.remove('visibility')
//   }
// }
