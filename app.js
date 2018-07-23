const data = [
  {
    product: "Haori Jacket",
    url: "haorijacket.html",
    image: "img/haori-jacket.jpg",
    altDesc: "Jacket",
    price: "$210.00",
    category: "outwear"
  },
  {
    product: "Swing Dress",
    url: "swingdress.html",
    image: "img/swing-dress.jpg",
    altDesc: "Dress",
    price: "$218.00",
    category: "dresses"
  },
  {
    product: "Lounge Jumpsuit",
    url: "",
    image: "img/lounge-jumpsuit.jpg",
    altDesc: "Jumpsuit",
    price: "$298.00",
    category: "dresses"
  },
  {
    product: "Linen Top",
    url: "",
    image: "img/linen-top.jpg",
    altDesc: "Blouse",
    price: "$125.00",
    category: "tops"
  },
  {
    product: "Lounge Tunic",
    url: "",
    image: "img/lounge-tunic.jpg",
    altDesc: "Dress",
    price: "$258.00",
    category: "dresses"
  },
  {
    product: "Sonia Dress",
    url: "",
    image: "img/sonia-dress.jpg",
    altDesc: "Dress",
    price: "$268.00",
    category: "dresses"
  },
  {
    product: "White Studio Top",
    url: "",
    image: "img/white-studio-top.jpg",
    altDesc: "Blouse",
    price: "$158.00",
    category: "tops"
  },
  {
    product: "Swing Top",
    url: "",
    image: "img/swing-top.jpg",
    altDesc: "Blouse",
    price: "$128.00",
    category: "tops"
  },
  {
    product: "Terra Cota Studio Top",
    url: "",
    image: "img/terracota-studio-top.jpg",
    altDesc: "Blouse",
    price: "$158.00",
    category: "tops"
  },
  {
    product: "Wide Pant",
    url: "",
    image: "img/wide-pant.jpg",
    altDesc: "Pants",
    price: "$190.00",
    category: "bottoms"
  },
  {
    product: "Charcoal Long Shorts",
    url: "",
    image: "img/charcoal-long-shorts.jpg",
    altDesc: "Pants",
    price: "$200.00",
    category: "bottoms"
  },
  {
    product: "Linen Long Shorts",
    url: "",
    image: "img/linen-long-shorts.jpg",
    altDesc: "Pants",
    price: "$200.00",
    category: "bottoms"
  },
  {
    product: "Diana Jacket",
    url: "",
    image: "img/diana-jacket.jpg",
    altDesc: "Jacket",
    price: "$368.00",
    category: "outwear"
  },
  {
    product: "Poplin Chef Shirt",
    url: "",
    image: "img/poplin-chef-shirt.jpg",
    altDesc: "Shirt",
    price: "$216.00",
    category: "tops"
  },
  {
    product: "Poplin Dress",
    url: "",
    image: "img/poplin-dress.jpg",
    altDesc: "Dress",
    price: "$231.00",
    category: "dresses"
  },
  {
    product: "Layer Dress",
    url: "",
    image: "img/layer-dress.jpg",
    altDesc: "Dress",
    price: "$309.00",
    category: "dresses"
  },
  {
    product: "Poplin V Top",
    url: "",
    image: "img/poplin-vtop.jpg",
    altDesc: "Blouse",
    price: "$143.00",
    category: "tops"
  },
  {
    product: "3 Button Tunic",
    url: "",
    image: "img/3button-tunic.jpg",
    altDesc: "Blouse",
    price: "$250.00",
    category: "dresses"
  },
  {
    product: "Charcoal Tunic",
    url: "",
    image: "img/charcoal-tunic.jpg",
    altDesc: "Blouse",
    price: "$250.00",
    category: "dresses"
  },
  {
    product: "Dusty Jumpsuit",
    url: "",
    image: "img/dusty-jumpsuit.jpg",
    altDesc: "Jumpsuit",
    price: "$299.00",
    sale: "$399.00",
    category: "dresses"
  },
  {
    product: "Jacky Trousers",
    url: "",
    image: "img/jacky-trousers.jpg",
    altDesc: "Pants",
    price: "$228.00",
    category: "bottoms"
  },
  {
    product: "Lisa Shirt",
    url: "",
    image: "img/lisa-shirt.jpg",
    altDesc: "Shirt",
    price: "$253.00",
    category: "tops"
  },
  {
    product: "Jane Skirt",
    url: "",
    image: "img/jane-skirt.jpg",
    altDesc: "Shirt",
    price: "$150.00",
    sale: "$263.00",
    category: "bottoms"
  },
  {
    product: "Romy Top",
    url: "",
    image: "img/romy-top.jpg",
    altDesc: "Blouse",
    price: "$199.00",
    sale: "$300.00",
    category: "tops"
  },
  {
    product: "Romy Trousers",
    url: "",
    image: "img/romy-trousers.jpg",
    altDesc: "Pants",
    price: "$250.00",
    sale: "$310.00",
    category: "bottoms"
  },
  {
    product: "Twiggy Dress",
    url: "",
    image: "img/twiggy-dress.jpg",
    altDesc: "Dress",
    price: "$200.00",
    category: "dresses"
  },
  {
    product: "Sonia Skirt",
    url: "",
    image: "img/sonia-skirt.jpg",
    altDesc: "Skirt",
    price: "$228.00",
    category: "bottoms"
  },
  {
    product: "Duo-tone Backpack",
    url: "",
    image: "img/duotone-backpack.jpeg",
    altDesc: "Backpack",
    price: "$420.00",
    category: "accessories"
  },
  {
    product: "Black Backpack",
    url: "",
    image: "img/black-backpack.jpeg",
    altDesc: "Backpack",
    price: "$420.00",
    category: "accessories"
  },
  {
    product: "Bucket Tote",
    url: "",
    image: "img/bucket-tote.jpeg",
    altDesc: "Backpack",
    price: "$500.00",
    category: "accessories"
  },
  {
    product: "Black Crossbody",
    url: "",
    image: "img/black-crossbody.jpeg",
    altDesc: "Backpack",
    price: "$175.00",
    sale: "$250.00",
    category: "accessories"
  },
  {
    product: "Tan Crossbody",
    url: "",
    image: "img/tan-crossbody.jpeg",
    altDesc: "Backpack",
    price: "$175.00",
    sale: "$250.00",
    category: "accessories"
  },
  {
    product: "Black Tote",
    url: "",
    image: "img/black-tote.jpeg",
    altDesc: "Backpack",
    price: "$350.00",
    sale: "$475.00",
    category: "accessories"
  },
  {
    product: "Tan Tote",
    url: "",
    image: "img/tan-tote.jpeg",
    altDesc: "Backpack",
    price: "$350.00",
    sale: "$475.00",
    category: "accessories",
  },
  {
    product: "Sunglasses Nº 1",
    url: "",
    image: "img/sunglasses-n1.jpeg",
    altDesc: "Sunglasses",
    price: "$125.00",
    category: "accessories"
  },
  {
    product: "Sunglasses Nº 2",
    url: "",
    image: "img/sunglasses-n2.jpeg",
    altDesc: "Sunglasses",
    price: "$125.00",
    category: "accessories"
  },
  {
    product: "Sunglasses Nº 3",
    url: "",
    image: "img/sunglasses-n3.jpeg",
    altDesc: "Sunglasses",
    price: "$125.00",
    category: "accessories"
  },
  {
    product: "Sunglasses Nº 4",
    url: "",
    image: "img/sunglasses-n4.jpeg",
    altDesc: "Sunglasses",
    price: "$125.00",
    category: "accessories"
  }
];

// Generate template literal
  const clothingView = (item, index) => `
    <a href="${item.url}" class="shop-item" id="clothingLink">
    ${item.sale ? `<span class="shop-item__sale">Sale</span>`: ''}
      <img src="${item.image}" alt="${item.altDesc}" class="shop-item__img">
      <div class="quickview">
        <span class="quickview__icon">Quick View</span>
        <span class="quickview__info">${item.product}
          <br>
          <span class="quickview__price">${item.price}
            ${item.sale ? `<span class="quickview__price--sale">${item.sale}</span>`: ''}
          </span>
        </span>
        <span class="shop-item__index">${index}</span>
      </div>
    </a>
    `;

let appData = [...data];
let currentPopup;

function init(data) {
  registerCategory(data);
  setProductsView(data);
};

// Filter data based on category
function registerCategory(data) {
 $('.categories__link').click(function() {
   const category = this.id;

   category === 'all' ? appData = [...data] : appData = data.filter(item => item.category === category);
   category === 'sale' ? appData = data.filter(item => item.sale) : null;

   setProductsView(appData);
  });
};

// Append template literal to html structure
function setProductsView(items) {
  const container = $('.products').css('display', 'none').fadeIn('slow');
  container.empty();

  items.map( (item, i) => container.append(clothingView(item, i)) );
  // Re-wrting quickview handler is necessary
  // because previous quickviews are unregistered when the container is empty.
  registerQuickView();
};

// Change popup clothing item img and info
const swapPopup = clothing => {
  $('#clothingLink').prop('href', clothing.url)
  $('#clothingImg').prop('src', clothing.image)
  $('#clothingName').text(clothing.product)
  $('#clothingPrice').text(clothing.price)

  clothing.sale ? $('#clothingSale').text(clothing.sale) : $('#clothingSale').text(null);
};

function registerQuickView() {
 $('.quickview__icon').click(function(e) {
    event.preventDefault();
    $('.overlay').css({'opacity': '1', 'visibility': 'visible'});

    currentPopup = Number( $(e.target).parent().children('.shop-item__index').text() );
    swapPopup(appData[currentPopup]);
  });
};

$('.btn-add').click(function() {
  $('#cart').css('color', 'red');
});

$(document).ready(function() {

init(data);

// Popup clothing item prev and next button
$('#popupPrev, #popupNext').click(function() {
    let end = appData.length - 1;
    let direction = $(this).attr('id') === 'popupPrev' ? -1 : 1;
    currentPopup += direction;

    if (currentPopup < 0) {
      currentPopup = end
    } else if (currentPopup > end) {
      currentPopup = 0
    }
    swapPopup(appData[currentPopup]);
  });

  // Popup close
  $('#closeIcon').click(function() {
    $('.popup, .overlay').css({
      'opacity': '0',
      'visibility': 'hidden'});
      $('body').css('overflow', 'visible');
  })

  // Open home popup gallery
  $('.gallery__item > img').click(function() {
    $('.popup').css({
      'opacity': '1',
      'visibility': 'visible'});
    $('body').css('overflow', 'hidden');

    // Change popup gallery img source
     $(".popup__img").prop("src", $(this).prop("src"))
  });

  // Hide sale icon on clothing-item hovering
  $('.shop-item').hover(
    function() { // Mouse in
    $('.shop-item__sale', this).fadeOut();
    },
    function() { // Mouse out
    $('.shop-item__sale', this).fadeIn();
    }
  );

  // Zoom in/out clothing img
  $('#clothingImg').click(function() {
    $(this).toggleClass('normal-zoom zoom-in');
  });

  // Move clothing image around on mouse move
  $('#clothingImg').mousemove(function(event) {
    // This gives you the position of the image on the page
    var bbox = event.target.getBoundingClientRect();

    // Then we measure how far into the image the mouse is in both x and y directions
    var mouseX = event.clientX - bbox.left;
    var mouseY = event.clientY - bbox.top;

    // Then work out how far through the image as a percentage the mouse is
    var xPercent = (mouseX / bbox.width) * 100;
    var yPercent = (mouseY / bbox.height) * 100;

    // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
    //event.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';
    $(this).css('transform-origin', (xPercent+'% ' + yPercent+ '%') );
    // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.
  });

  // Return clothing img to normal state when not hovering
  $('#popupImg').mouseleave(function() {
    $(this).addClass('normal-zoom');
    $(this).removeClass('zoom-in');
  });

  // Parallax effect
  $(window).scroll(function() {
    var wScroll = $(window).scrollTop();
    $('.parallax').css('background-position', 'center ' +(wScroll*0.30)+'px')
  });

  // Change img src liked button
  $('#liked').click(function(){
    $('#likedImg').attr('src', 'img/heart-red.png');
  });

  // Hide prev and next blogs buttons
  $('#firstButton').css({'opacity': '0', 'visibility': 'hidden'});
  $('#lastButton').css({'opacity': '0', 'visibility': 'hidden'});

  // Toggle size active class
  $('.sizes__span').click(function() {
    $('.sizes__span').toggleClass('size-active');
    $('.size-type').toggleClass('showType');
  });

});

$(function() {

  // Lazyload images effect
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
    img.removeAttribute('data-src');
    };
  });

  // Load header and footer in html files
  $('.header').load('header.html');
  $('.footer').load('footer.html');

});
