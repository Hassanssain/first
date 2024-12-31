let items = [];


function add(item) {
    if (!items.includes(item)) {
        items.push(item);
    }
}


function remove(item) {
    const index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
    }
}


function lastChar(str) {
    if (str.length === 0) return null; 
    return str[str.length - 1];
}


function reverse(str) {
    return str.split('').reverse().join('');
}


add('apples');
add('bananas');
console.log(items); 
remove('apples');
console.log(items); 

console.log(lastChar('JavaScript')); 
console.log(reverse('JavaScript')); 
console.log(reverse(reverse('JavaScript'))); 