var candles = [
  {
    id: 0,
    name: 'Peace Becomes Her',
    description: 'Fend off death with this peaceful mixture of aged juniper and winter cranberry. Burns for 100 hours. Wood wick. ',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    id: 1,
    name: 'Serenity, NOW!',
    description: 'Don\'t beat around the bush, get serene NOW. Peppermint and basil medle together for ahh..serenity. Burns for 100 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    id: 2,
    name: 'Shangri-lovely',
    description: 'Mandarin and vanilla channel the scents of Shangri-La, whisking you away to the jungle. Burns for 100 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1073481.jpg'
  },
  {
    id: 3,
    name: 'Aloahhhh',
    description: 'Feel like you\'re beachside in Hawaii with coconut and sugar filling the air. Burns for 110 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1073481.jpg'
  },
  {
    id: 4,
    name: 'The Office',
    description: 'Maybe you\'re most relaxed at work. This clean, sterile mixture of mint and cotton will bring you back to your desk, feeling productive. Burns for 100 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    id: 5,
    name: 'Spring Meadow',
    description: 'Bambi was rarely stressed. Feel like a fawn in Spring with this delicious lavander and orange mixture. Burns for 110 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    id: 6,
    name: 'Spring Meadow',
    description: 'Bambi was rarely stressed. Feel like a fawn in Spring with this delicious lavander and orange mixture. Burns for 110 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1073481.jpg'
  },
  {
    id: 7,
    name: 'Spring Meadow',
    description: 'Bambi was rarely stressed. Feel like a fawn in Spring with this delicious lavander and orange mixture. Burns for 110 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    id: 8,
    name: 'Spring Meadow',
    description: 'Bambi was rarely stressed. Feel like a fawn in Spring with this delicious lavander and orange mixture. Burns for 110 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1073481.jpg'
  },
  {
    id: 9,
    name: 'Spring Meadow',
    description: 'Bambi was rarely stressed. Feel like a fawn in Spring with this delicious lavander and orange mixture. Burns for 110 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
  {
    id: 10,
    name: 'Spring Meadow',
    description: 'Bambi was rarely stressed. Feel like a fawn in Spring with this delicious lavander and orange mixture. Burns for 110 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1073481.jpg'
  },
  {
    id: 11,
    name: 'Spring Meadow',
    description: 'Bambi was rarely stressed. Feel like a fawn in Spring with this delicious lavander and orange mixture. Burns for 110 hours. Wood wick.',
    price: 10.00,
    source: 'http://www.yankeecandle.com/media/images/product/medium/1351702.jpg'
  },
]
var cart = []
var $cartIcon = document.querySelector('#cartIcon')
var $goback = document.querySelector('#goback')
var $gallery = document.querySelector('#gallery')
var $checkout = document.querySelector('#checkout')
var $count = document.querySelector('#count')
var $checkoutForm = document.querySelector('#checkoutForm')
var $submit = document.querySelector('#submit')
var $closeOrder = document.querySelector('#closeOrder')
var $description = document.querySelector('#description')
var views = [$gallery, $checkout, $description]


for(var i = 0; i < candles.length; i++) {
  createCandleItem(candles[i]);
}

function changeView(view) {
  views.forEach(function (v) {
    v.classList.add('hidden')
  })
  view.classList.remove('hidden')
}

document.querySelectorAll(".show-description").forEach(function ($button) {
  $button.addEventListener('click', function(event) {
    var id = event.target.getAttribute('data-id')
    var candle = findCandle(parseInt(id));

    if(parseInt(id) === candle.id) {
      showCandle(candle)
      changeView($description)

    }
  })
})

$description.addEventListener('click', function (event) {
  if(event.target.tagName === 'BUTTON') {

    var buttonId = event.target.getAttribute('data-id')

    if(buttonId === 'goback2') {
      changeView($gallery)

    } else {

      for(var i = 0; i< candles.length; i++) {
        if(parseInt(buttonId) === candles[i].id) {
          cart.push(candles[i])
          $count.textContent = cart.length
          cartTotal(cart)
        }
      }
    }
  }
})

$cartIcon.addEventListener('click', function(event) {
  changeView($checkout)
})

$checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log('submitting form!')
})

$closeOrder.addEventListener('click', function(event) {
  cart = []
  $count.textContent = cart.length
  $checkoutForm.reset()
  cartTotal()
  changeView($gallery)
})

$goback.addEventListener('click', function(event) {
  changeView($gallery)
})

function cartTotal() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]
    total += item.price
  }
  var $userTotal = document.querySelector('#userTotal')
  $userTotal.textContent = total
}

function createCandleItem(candle) {

  var $candleContainer = document.createElement('div')
  $candleContainer.classList.add('col-sm-4', 'text-center')

  var $name = document.createElement('div')
  $name.textContent = candle.name
  $name.classList.add('title')

  var $picture = document.createElement('img')
  $picture.src = candle.source

  var $viewDetailsButton = document.createElement('button')
  $viewDetailsButton.textContent = "view more details"
  $viewDetailsButton.classList.add("button", "show-description")
  $viewDetailsButton.setAttribute('data-id', candle.id)


  $gallery.appendChild($candleContainer)
  $candleContainer.appendChild($name)
  $candleContainer.appendChild($picture)
  $candleContainer.appendChild($viewDetailsButton)
}

function findCandle(id) {
  for(var i = 0; i < candles.length; i++) {
    if (candles[i].id === id) {
      return candles[i]
    }
  }
}

function showCandle(candle) {
  var $deletePrevious = document.querySelector('.descriptionContainer')
  if($deletePrevious) {
  $deletePrevious.parentNode.removeChild($deletePrevious)
}

  var $descriptionContainer = document.createElement('div')
    $descriptionContainer.classList.add("text-center", "descriptionContainer")

  var $picture = document.createElement('img')
  $picture.src = candle.source

  var $Candledescription = document.createElement('div')
  $Candledescription.textContent = candle.description

  var $title = document.createElement('div')
  $title.textContent = candle.name
  $title.classList.add('title')

  var $price = document.createElement('div')
  $price.textContent = "$"+ candle.price + ".00"
  $price.classList.add('price')

  var $addToCartButton = document.createElement('button')
  $addToCartButton.textContent = "add to cart!"
  $addToCartButton.setAttribute('data-id', candle.id)
  $addToCartButton.classList.add("button")

  var $goback2 = document.createElement('button')
  $goback2.textContent = 'return to main page'
  $goback2.setAttribute('data-id', 'goback2')
  $goback2.classList.add('button')

  $description.appendChild($descriptionContainer)
  $descriptionContainer.appendChild($title)
  $descriptionContainer.appendChild($picture)
  $descriptionContainer.appendChild($Candledescription)
  $descriptionContainer.appendChild($price)
  $descriptionContainer.appendChild($addToCartButton)
  $descriptionContainer.appendChild($goback2)
}
