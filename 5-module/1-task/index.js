function hideSelf() {
  document.addEventListener('click', e => {
    if (e.target.closest('.hide-self-button')) {
      e.target.hidden = true;
    }
  });
}
