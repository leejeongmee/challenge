function star4(line) {
  for (let i = 0; i < line; i++) {
    for (let j = 0; j < line - 1 - i; j++) {
      process.stdout.write(' ');
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      process.stdout.write('*');
    }
    console.log('');
  }
  for (let i = 0; i < line; i++) {
    for (let j = 1; j <= i + 1; j++) {
      process.stdout.write(' ');
    }
    for (let k = 1; k <= line + (2 - 2 * i); k++) {
      process.stdout.write('*');
    }
    console.log('');
  }
}
star4(5);
