var x = [6,5,3,1,8,7,2,4];

for (i=x.length; i>0; i--) {
  for (j=0; j<x.length; j++) {
    if (x[j] > x[j+1]) {
      temp = x[j];
      x[j] = x[j+1];
      x[j+1] = temp;
    }
  }
  console.log(x);
}