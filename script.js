const symbols = ['apple.png', 'mango.png', 'strawberry.png'];
// const symb/ols = ['symbol1.png', 'symbol2.png', 'symbol3.png', 'symbol4.png', 'symbol5.png', 'symbol6.png'];
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const themeSong = document.getElementById('themeSong');

let spinning = false;

function getRandomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

function spin() {
  if (spinning) {
    return; // Don't allow spinning while already spinning
  }
  
  spinning = true;

  const spins = 10; // Number of spins
  const duration = 5000; // Duration of each spin in milliseconds
  const interval = duration / spins;

  let spinCount = 0;
  let intervalId;

  intervalId = setInterval(() => {
    reel1.style.backgroundImage = `url(${getRandomSymbol()})`;
    reel2.style.backgroundImage = `url(${getRandomSymbol()})`;
    reel3.style.backgroundImage = `url(${getRandomSymbol()})`;

    spinCount++;

    if (spinCount === spins) {
      themeSong.play();
      clearInterval(intervalId);
      spinning = false;

      // Play the theme song
    //   themeSong.play();
    }
  }, interval);
}
