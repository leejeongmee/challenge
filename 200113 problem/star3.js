function star3(line) {
  for (let i = 0; i < line; i++) {
    for (let j = 0; j < line - 1 - i; j++) {
      process.stdout.write(' ');
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      process.stdout.write('*');
    }
    console.log(' ');
  }
}

star3(5);
