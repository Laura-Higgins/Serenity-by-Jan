var products = [
  {
    id: 0,
    name: 'Glow Kit',
    description: "A collection of four metallic powder highlighters for intense luminosity. Layer shades of Anastasia Beverly Hills Glow Kit, or wear them separately, on the face and body for a radiant glow. Ideal for use with Brush #23.",
    price: 40.00,
    source: 'http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dwa30986f8/images/products/FACE/Glow%20Kits/Sweets/glow-kit-sweets.jpg?sw=348&sh=348&sm=fit',
    type: 'normal'
  },
  {
    id: 1,
    name: 'Dip Brow Pomade',
    description: "An award-winning waterproof, multitasking, and buildable matte pomade that stays put. Apply and blend a small amount of Anastasia Beverly Hills DIPBROW® Pomade with an angled brow brush to effortlessly outline, fill, and texturize brows.",
    price: 18.00,
    source: 'http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw231ab3a8/images/products/BROWS/Dipbrow/Dipbrow-Medium-Brown/dipbrow-medium-brown.jpg?sw=348&sh=348&sm=fit',
    type: 'normal'
  },
  {
    id: 2,
    name: 'Detail Scissors',
    description: "High-quality, straight-length stainless steel scissors with an ultra-thin blade to precisely trim brows. Brush brows with an ABH custom spooley, then gently apply pressure to the hair with fingers before trimming with Anastasia Beverly Hills Scissors. ",
    price: 22.00,
    source: 'http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw3fff0d25/images/products/BROWS/Scissors/ABH01-10002%20scissors/scissors.jpg?sw=348&sh=348&sm=fit',
    type: 'normal'
  },
  {
    id: 3,
    name: 'Contour Kit',
    description: "A best-selling set of three highlight and three contour shades in one must-have kit. Use Anastasia Beverly Hills Contour Cream Kit to sculpt, define, and enhance bone structure and features.",
    price: 40.00,
    source: "http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw5749f1f2/images/products/FACE/Contour%20Cream%20Kit/Medium/contour-cream-kit-medium.jpg?sw=348&sh=348&sm=fit",
    type: 'normal'
  },
  {
    id: 4,
    name: 'Pro Brush A-20',
    description: "A large powder brush with tapered natural hair for the face. Use the Anastasia Beverly Hills Large Powder Brush A20 to apply and blend face and body products seamlessly.",
    price: 35.00,
    source: "http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw8fe1fd4f/images/products/BRUSHES/Pro%20Brushes/A20/A20.jpg?sw=348&sh=348&sm=fit",
    type: 'normal'
  },
  {
    id: 5,
    name: 'Ultimate Glow Kit',
    description: "A collection of six limited edition powder highlighters available in shimmering luster and metallic pearl finishes. Layer shades of Anastasia Beverly Hills Ultimate Glow, or wear them separately, on the face or body for a smooth, even glow that lasts. Ideal for use with Brush #23.",
    price: 45.00,
    source: "http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw6d365d17/images/products/FACE/Glow%20Kits/Ultimate%20Glow/ultimate-glow-kit.jpg?sw=348&sh=348&sm=fit",
    type: 'normal'
  },
  {
    id: 6,
    name: 'Eyeshadow Singles',
    description: "A collection of single, fine-milled powder eye shadows in individual pans. Use Anastasia Beverly Hills Eye Shadow Singles to create a professional-style four or eight-pan custom, refillable palette.",
    price: 12.00,
    source: "http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw1ac0ad6b/images/products/EYES/Eye%20Shadow%20Singles/Macaroon/macaroon-eye-shadow-a.jpg?sw=348&sh=348&sm=fit",
    type: 'normal'
  },
  {
    id: 7,
    name: 'Duality Brow Highlighter',
    description: "A double-sided pencil that highlights and defines brows—and makes arches pop. Use Anastasia Beverly Hills Highlighting Duo Pencil’s shimmery end to illuminate brow bones, and the matte end to softly define.",
    price: 22.00,
    source: "http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dwc2937eec/images/products/BROWS/Highlighting%20Duo%20Pencil/ABH01-19201%20duality%20CAMILLE%20SAND/brow-duality-camille-sand.jpg?sw=348&sh=348&sm=fit",
    type: 'normal'
  },
  {
    id: 8,
    name: 'Powder Contour Kit',
    description: 'A best-selling set of three powder highlight and three powder contour shades. Use Anastasia Beverly Hills Contour Powder Kit to create the illusions of higher cheekbones, a slimmer nose, softer jawline, or smaller forehead. ',
    price: 40.00,
    source: "http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw719fa809/images/products/FACE/Contour%20Kit/LIGHT%20TO%20MEDIUM/Contour-Kit-Light-to-medium.jpg?sw=348&sh=348&sm=fit",
    type: 'normal'
  },
  {
    id: 9,
    name: 'Pro Tool Sharpener',
    description: "A professional-quality pencil sharpener that creates a sharp tip. Use Anastasia Beverly Hills Sharpener with brow, makeup, and lip pencils for expert precision and peak performance.",
    price: 6.00,
    source: "http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw2dc3afd7/images/products/BROWS/Sharpener/ABH01-12001%20sharpener/sharpener.jpg?sw=348&sh=348&sm=fit",
    type: 'normal'
  },
  {
    id: 10,
    name: 'Brow Definer',
    description: 'Bambi was rarely stressed. Feel like a fawn in Spring with this delicious lavander and orange mixture. Burns for 110 hours. Wood wick.',
    price: 23.00,
    source: 'http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw54aa39ef/images/products/BROWS/BROW%20DEFINER/ABH01-04409%20Dark%20Brown/brow-definer-dark-brown.jpg?sw=348&sh=348&sm=fit',
    type: 'normal'
  },
  {
    id: 11,
    name: 'Pro Brush A-26',
    description: "A fluffy round brush with synthetic fibers for soft, seamless blending of powder and emollient-based products. Use the Anastasia Beverly Hills Crease Blending Brush A26 to soften and diffuse edges. ",
    price: 22.00,
    source: "http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dwb00c1d30/images/products/BRUSHES/Pro%20Brushes/A26/A26.jpg?sw=348&sh=348&sm=fit",
    type: 'normal'
  },
  {
    id: 12,
    name: 'Limited Edition SUN DIPPED: Glow Kit',
    description: "Limited edition Anastasia Beverly Hills Glow Kit featuring six metallic powder highlighters created in collaboration with YouTuber Nicole Guerriero. Layer multiple shades or apply separately on face and body for a luminous finish. Ideal for use with Brush A23. For added radiance, apply with a damp makeup brush or sponge.",
    price: 40.00,
    source: "http://demandware.edgesuite.net/sits_pod46/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw90c113bb/images/products/FACE/Glow%20Kits/Nicole-Guerriero/abh-nicole-guerriero-glow-kit-a.png?sw=348&sh=348&sm=fit",
    type: 'promo'
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
var $firstPicture = document.querySelector('#firstPicture')
var $searchForm = document.querySelector('#search-form')


for(var i = 0; i < products.length; i++) {
  if(products[i].type !== 'promo') {
  createProductItem(products[i]);
  }
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
    var product = findProduct(parseInt(id));

    if(parseInt(id) === product.id) {
      showProduct(product)
      changeView($description)

    }
  })
})

document.querySelector("#firstPicture").addEventListener('click', function(event) {
  var product = findProduct(12);
  showProduct(product)
  changeView($description)
})

$description.addEventListener('click', function (event) {
  if(event.target.tagName === 'BUTTON') {

    var buttonId = event.target.getAttribute('data-id')

    if(buttonId === 'goback2') {
      changeView($gallery)

    } else {

      for(var i = 0; i< products.length; i++) {
        if(parseInt(buttonId) === products[i].id) {
          cart.push(products[i])
          $count.textContent = cart.length
          cartTotal(cart)
        }
      }
    }
  }
})

$searchForm.addEventListener('submit', function(event) {
  event.preventDefault()
  console.log('hi')
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

function createProductItem(product) {
  var $productContainer = document.createElement('div')
  $productContainer.classList.add('col-sm-4', 'text-center')

  var $name = document.createElement('div')
  $name.textContent = product.name
  $name.classList.add('title')

  var $picture = document.createElement('img')
  $picture.src = product.source

  var $viewDetailsButton = document.createElement('button')
  $viewDetailsButton.textContent = "view details"
  $viewDetailsButton.classList.add("button", "show-description")
  $viewDetailsButton.setAttribute('data-id', product.id)


  $gallery.appendChild($productContainer)
  $productContainer.appendChild($name)
  $productContainer.appendChild($picture)
  $productContainer.appendChild($viewDetailsButton)
}

function findProduct(id) {
  for(var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i]
    }
  }
}

function showProduct(product) {
  var $deletePrevious = document.querySelector('.descriptionContainer')
  if($deletePrevious) {
    $deletePrevious.parentNode.removeChild($deletePrevious)
  }

  var $descriptionContainer = document.createElement('div')
  $descriptionContainer.classList.add("text-center", "descriptionContainer")

  var $picture = document.createElement('img')
  $picture.src = product.source

  var $productDescription = document.createElement('div')
  $productDescription.classList.add('col-sm-4', 'offset-sm-4')
  $productDescription.textContent = product.description

  var $title = document.createElement('div')
  $title.textContent = product.name
  $title.classList.add('title')

  var $price = document.createElement('div')
  $price.textContent = "$"+ product.price + ".00"
  $price.classList.add('price')

  var $addToCartButton = document.createElement('button')
  $addToCartButton.textContent = "add to cart!"
  $addToCartButton.setAttribute('data-id', product.id)
  $addToCartButton.classList.add("button")

  var $goback2 = document.createElement('button')
  $goback2.textContent = 'return to main page'
  $goback2.setAttribute('data-id', 'goback2')
  $goback2.classList.add('button')

  $description.appendChild($descriptionContainer)
  $descriptionContainer.appendChild($title)
  $descriptionContainer.appendChild($picture)
  $descriptionContainer.appendChild($productDescription)
  $descriptionContainer.appendChild($price)
  $descriptionContainer.appendChild($addToCartButton)
  $descriptionContainer.appendChild($goback2)
}
