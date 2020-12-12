AOS.init({
  duration: 1000,
  once: 'true'
});



function hideShowcase() {
  var showcase = document.getElementById('showcase');
  if (showcase.style.display != 'none') {
    showcase.style.display = 'none';
  } else {
    showcase.style.display = 'block';
  }
}
var toggler = document.querySelector('.toggler');
toggler.addEventListener('click', hideShowcase, false);