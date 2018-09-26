scope = 'Global Value';

function getValue(){
    scope = 'Local Value';
    return scope;
}

console.log(getValue());
console.log(scope);
