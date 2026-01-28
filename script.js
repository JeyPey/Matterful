const slider = document.getElementById('compare-slider');
const wrapper = document.querySelector('.img-wrapper');
const handle = document.querySelector('.handle');
const labelAfter = document.querySelector('.label-after');

slider.addEventListener('input', (e) => {
  const val = e.target.value;
  wrapper.style.width = `${val}%`;
  handle.style.left = `${val}%`;

  // Якщо повзунок заїжджає за 80% (приблизно де починається AFTER), 
  // або навпаки — ховаємо написи, щоб не "різалися" навпіл.
  if (val > 85) {
    labelAfter.style.opacity = '0';
  } else {
    labelAfter.style.opacity = '1';
  }
});