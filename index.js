const person = {
  alive: true,
  name: 'Himanshu',
};

const details = {
  play: 'code',
  like: 'Na',
  Music: 'Heavy',
  get fullDetails() {
    return this.Music;
  },
  set fullDetails(data) {
    this.Music = data;
  },
};
function Band(bands) {
  this.bands = bands;
}

Band.prototype.likes = function () {
  return `A  ${this.band} is famous  `;
};

const band = new Band('iron');
console.log(band.likes());

const vacations = {
  destination: 'J',
  start: 'A',
  __proto__: details,
};

const fullInfo = {};
Object.setPrototypeOf(details, person);

Object.setPrototypeOf(fullInfo, details);

fullInfo.fullDetails = 'heavy metal';
console.log(details);

console.log(fullInfo.valueOf());
console.log(fullInfo.valueOf());
console.log(details.name);
console.log(details.start);
console.log(vacations.play);
console.log(vacations.Music);
