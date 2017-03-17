var candles = [
  {
    id: 0,
    name: 'Peace Becomes Her',
    description: 'Fend off death with this peaceful mixture of aged juniper and winter cranberry. Burns for 100 hours. Wood wick.',
    price: 16.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    id: 1,
    name: 'Serenity, NOW!',
    description: 'Don\'t beat around the bush, get serene NOW. Peppermint and basil medle together for ahh..serenity. Burns for 100 hours. Wood wick.',
    price: 16.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    id: 2,
    name: 'Shangri-lovely',
    description: 'Mandarin and vanilla channel the scents of Shangri-La, whisking you away to the jungle. Burns for 100 hours. Wood wick.',
    price: 16.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1073481.jpg'
  },
  {
    id: 3,
    name: 'Aloahhhh',
    description: 'Feel like you\'re beachside in Hawaii with coconut and sugar filling the air. Burns for 110 hours. Wood wick.',
    price: 16.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1073481.jpg'
  },
  {
    id: 4,
    name: 'The Office',
    description: 'Maybe you\'re most relaxed at work. This clean, sterile mixture of mint and cotton will bring you back to your desk, feeling productive. Burns for 100 hours. Wood wick.',
    price: 16.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    id: 5,
    name: 'Spring Meadow',
    description: 'Bambi was rarely stressed. Feel like a fawn in Spring with this delicious lavander and orange mixture. Burns for 110 hours. Wood wick.',
    price: 16.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
]
var cart = []

for(var i = 0; i < candles.length; i++) {
  createCandleItem(i);
}

document.addEventListener('click', function(event) {
  var id = event.target.getAttribute('data-id')

  if(id) {
    var $description = document.querySelector('div[data-id="' + id + '"]')
     $description.classList.add('visible')
  }
})

document.addEventListener('click', function(event) {
  var $button = event.target

  if($button.tagName !== 'BUTTON') {
    return
  } else {
    var $buttonId = $button.getAttribute('data-id')
  }
  for (var i = 0; i < candles.length; i++) {
    if(parseInt($buttonId) === candles[i].id) {
      cart.push(candles[i])
      var $count = document.querySelector('#count')
      $count.textContent = cart.length
      cartTotal(cart)
    }
  }

})

// var $cartIcon = docuemt.querySelector('#cartIcon')
// $cartIcon.addEventListener('click', function(event) {
//
// }

function cartTotal(cart) {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]
    total += item.price
    var $userTotal = document.querySelector('#userTotal')
    $userTotal.textContent = total
  }
   }

function createCandleItem(i) {

  var $candleContainer = document.createElement('div')
  $candleContainer.classList.add('col-sm-6', 'style')

  var $name = document.createElement('div')
  $name.textContent = candles[i].name
  $name.classList.add('title')

  var $picture = document.createElement('img')
  $picture.src = candles[i].source
  $picture.setAttribute('data-id', candles[i].id)

  var $description = document.createElement('div')
  $description.textContent = candles[i].description
  $description.setAttribute('data-id', candles[i].id)
  $description.classList.add('hidden')
  $description.classList.add('style')

  var $price = document.createElement('div')
  $price.textContent = candles[i].price
  $price.classList.add('style')
  $price.classList.add('price')

  var $button = document.createElement('button')
  $button.textContent = "Add to cart"
  $button.setAttribute('class', "button")
  $button.setAttribute('data-id', candles[i].id)

  var $gallery = document.querySelector('#gallery')
  $gallery.appendChild($candleContainer)
  $candleContainer.appendChild($name)
  $candleContainer.appendChild($picture)
  $candleContainer.appendChild($description)
  $description.appendChild($price)
  $description.appendChild($button)
}
