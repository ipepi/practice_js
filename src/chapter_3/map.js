let m = new Map();
m.set('dog', 'わんわん');
m.set('cat', 'にゃー');
m.set('mouse', 'チュー');

console.log(m.size);
console.log(m.get('dog'));
console.log(m.has('cat'));

for(let key of m.keys()){
    console.log(key);
}

for(let value of m.values()){
    console.log(value);
}

m.delete('dog');
console.log(m.size);


m.delete('にゃー');
console.log(m.size);

m.clear();
console.log(m.size);