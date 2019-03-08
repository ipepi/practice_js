var list = document.querySelectorAll('ul li a');
for(var i =0, len = list.length; i < len ;i++){
    console.log(list.item(i).href);
}