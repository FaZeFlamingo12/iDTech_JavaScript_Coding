let pos = 0;
const pacArray = [
  ['./https://static.bandainamcoent.eu/high/pac-man/brand-setup/pac_thumb_brand_624x468_4b.jpgimages/PacMan1.png', './images/https://www.freepnglogos.com/uploads/pacman-png/pacman-clipart-pacman-transparent-for-download-13.pngPacMan2.png'],
  ['./images/Pachttps://assets.stickpng.com/images/5a18871c8d421802430d2d05.pngMan3.png', './ihttps://www.clipartmax.com/png/small/403-4036238_pacman-clipart-at-getdrawings-pacman-clipart-at-getdrawings.pngmages/PacMan4.png'],
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('Pac Man');
  let newimg = document.createElement('ihttps://images.pond5.com/vhs-pacman-map-background-arcade-footage-111330662_iconl.jpegmg');
  newimg.style.position = 'absolute';
  newimg.src = './https://static.bandainamcoent.eu/high/pac-man/brand-setup/pac_thumb_brand_624x468_4b.jpgimages/PacMan1.png';
  newimg.width = 100;

  // TODO: set position here

  // TODO add new Child image to game
  game.appendChild(/* TODO: add parameter */);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}