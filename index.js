#!/usr/bin/env node

const clearScreen = () =>
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );

clearScreen();

console.log(`
Basanta Rai

I am Basanta Rai, a passionate BSc.CSIT student from Nepal, captivated by backend development and finding immense satisfaction in unraveling the complexities complexities of coding and constructing resilient systems. The guitar serves as a special creative outlet, alongside my academic pursuits. Driven by curiosity, I strive for excellence in my studies while nurturing my interests in backend development, music, and fitness.

Github: https://github.com/iambasanta
Website: https://www.basantarai.com.np

`);
