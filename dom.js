var items=document.getElementsByClassName('list-group-item')
console.log(items)
items[2].style.backgroundColor="green"
items[2].textContent="Hello"
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold"
}
var li=document.getElementsByTagName('li')
li[1].textContent="hello"
