function star1(line) {
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write('*'); //줄바꿈 없이 출력할 수 있음.
    }
    console.log('');
  }
}

star1(5);
