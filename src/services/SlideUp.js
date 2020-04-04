const SlideUp = (target, duration) => {
  target.style.transitionProperty = 'height, margin, padding'; /* [1.1] */
  target.style.transitionDuration = duration + 'ms'; /* [1.2] */
  target.style.boxSizing = 'border-box'; /* [2] */
  target.style.height = target.offsetHeight + 'px'; /* [3] */
}

export default SlideUp;