var scope = 'Global Value';

function getValue(){
    var scope = 'Local Value';
    return scope;
}

console.log(getValue());
console.log(scope);
