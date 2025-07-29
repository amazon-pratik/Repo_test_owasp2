//{fact rule=method-input-validation@v1.0 defects=0}

function endsWith(x, y) {
  let index = x.lastIndexOf(y);
  return index !== -1 && index === x.length - y.length;
}


//{/fact}