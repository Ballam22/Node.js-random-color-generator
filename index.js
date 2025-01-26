import chalk from 'chalk';
import randomColor from 'randomcolor';

// Todo: Recive these values from the user

const hue = process.argv[2];
const luminosity = process.argv[3];

// Todo: Chack that this generates matching random colors with huew and luminosity
const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

console.log(chalk.hex(color).bold('################################'));
console.log(chalk.hex(color).bold('################################'));
console.log(chalk.hex(color).bold('################################'));
console.log(chalk.hex(color).bold('#####                      #####'));
console.log(chalk.hex(color).bold(`#####         #${color}     #####`));
console.log(chalk.hex(color).bold('#####                      #####'));
console.log(chalk.hex(color).bold('################################'));
console.log(chalk.hex(color).bold('################################'));
console.log(chalk.hex(color).bold('################################'));
console.log(chalk.hex(color).bold('################################'));
