function zeroFuel(distanceToPump, mpg, fuelLeft) {
  distanceToPump = Math.abs(distanceToPump);
  mpg = Math.abs(mpg);
  fuelLeft = Math.abs(fuelLeft);

  if (mpg * fuelLeft >= distanceToPump) {
    console.log('true');
  } else {
    console.log('false');
  }
}

//zeroFuel(50, 25, 2);
//zeroFuel(100, 50, 1);
zeroFuel(50, 25, -2);
