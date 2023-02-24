//1
function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//2
function checkSpam(str) {
  return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
}

//3
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

//4
function extractCurrencyValue(str) {
  return +str.slice(1);
}