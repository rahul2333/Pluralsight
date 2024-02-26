let autoNext = () => {
  Array.from(document.querySelectorAll('button'))
    .filter(b => b.textContent.toLowerCase().includes('start module'))
    .forEach(b => b.click());
};

setInterval(autoNext, 5000);
