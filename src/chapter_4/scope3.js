var scope = 'Global Value';

function getValue(){
    console.log(scope);
    var scope = 'Local Value';
    return scope;
}

console.log(getValue());
console.log(scope);
