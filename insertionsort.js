var x = [50,32,2,77,25];


for (i=0;i<x.length;i++) {
  if (x[i]<x[i-1]) {
    for (j=i; j>=0 && x[j]<x[j-1]; j--) {
      temp = x[j];
      x[j]=x[j-1];
      x[j-1]=temp;
    }
  }
}
  
  
  
console.log(x);