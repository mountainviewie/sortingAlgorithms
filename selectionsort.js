var x = [];

for (k=0;k<100;k++) {
  x.push(Math.floor((Math.random()*(10000) + 1)));
}


for (i=0;i<x.length;i++) {
  var temp = 0;
  var pos = 0;
  var min = x[i];
  for (j=i;j<x.length;j++) {
    if (x[j] < min) {
      min = x[j];
      pos = j;
    }
  }
  if (min < x[i]) {
    temp = x[i];
    x[i] = min;
    x[pos] = temp;
  }
}

console.log(x);