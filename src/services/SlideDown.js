const SlideDown = (target, duration) => {
  target.style.removeProperty('display'); /* [1] */
  let display = window.getComputedStyle(target).display;
  if (display === 'none') { /* [2] */
    display = 'block';
  }
  target.style.display = display;
}

export default SlideDown;