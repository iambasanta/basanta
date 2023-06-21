#!/usr/bin/env node

import chalk from "chalk";

const blue = chalk.hex(`#94D0FF`).bold.inverse;
const green = chalk.hex(`#5AF78E`).bold.inverse;
const pink = chalk.hex(`#FF85B8`).bold.inverse;
const silver = chalk.hex(`#B7C5D3`).italic;

console.log(`
(6_9)
${chalk.hex(`#89DDFF`).bold(`Basanta Rai`)}

${silver(
  `Hi I'm Basanta Rai, a passionate BSc.CSIT student from Nepal, captivated by web development and finding immense satisfaction in unraveling the complexities of coding and constructing resilient systems. Driven by curiosity, I strive for excellence in my studies while nurturing my interests in web development, music, and fitness.`
)}

${blue(` Twitter `)} ${chalk.dim(`https://twitter.com/iambasantarai`)}
${green(` Github `)} ${chalk.dim(`https://github.com/iambasanta`)}
${pink(` Web `)} ${chalk.dim(`https://www.basantarai.com.np`)}

`);
