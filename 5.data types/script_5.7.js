//1 
function unique(arr) {
  const set = new Set();

  for (const value of arr) {
    set.add(value);
  }

  return Array.from(set)
}

//2
function aclean(arr) {
  const result = {};

  for (let item of arr) {
    let itemSort = item.toLowerCase().split('').sort().join('');
    result[itemSort] = item
  }

  return Object.values(result)
}

