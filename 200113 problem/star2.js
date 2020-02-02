function star2(line) {
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= line - i; j++) {
      process.stdout.write(' ');
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write('*');
    }
    console.log(' ');
  }
}

star2(5);
