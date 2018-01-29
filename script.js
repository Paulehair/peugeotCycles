var left = document.querySelector('.left');
var right = document.querySelector('.right');
var imgs = document.querySelectorAll('.container');

var index = 1;

left.addEventListener("click", function() {
  index -= 1;
  var counter = index;
  if (counter > imgs.length) {
    index = 1;
  }
  if (counter < 1) {
    index = imgs.length;
  }
  for (i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('is-active');
  }
  imgs[index - 1].classList.add('is-active');
});


right.addEventListener("click", function() {
  index += 1;
  var counter = index;
  if (counter > imgs.length) {
    index = 1;
  }
  if (counter < 1) {
    index = imgs.length;
  }
  for (i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('is-active');
  }
  imgs[index - 1].classList.add('is-active');
});

window.addEventListener('keydown', function(event) {
  if (event.which == 37) {
    index -= 1;
    var counter = index;
    if (counter > imgs.length) {
      index = 1;
    }
    if (counter < 1) {
      index = imgs.length;
    }
    for (i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove('is-active');
    }
    imgs[index - 1].classList.add('is-active');
  }
});

window.addEventListener('keydown', function(event) {
  if (event.which == 39) {
    index -= 1;
    var counter = index;
    if (counter > imgs.length) {
      index = 1;
    }
    if (counter < 1) {
      index = imgs.length;
    }
    for (i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove('is-active');
    }
    imgs[index - 1].classList.add('is-active');
  }
});