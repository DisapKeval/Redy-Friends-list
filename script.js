document.getElementById('add').addEventListener('click', function(){
    console.log("Friended!")
    let input = document.getElementById('hi').value;

    let elem = document.createElement('li');
    let btn1 = document.createElement('button');
    btn1.innerText = "Unfriend";
    btn1.type = "button";
    btn1.className = "btn btn-danger";
    elem.innerText = input;

    let ul = document.querySelector('ul')

    ul.appendChild(elem);
    elem.appendChild(btn1);

    btn1.addEventListener('click', function(){
        elem.remove();
        console.log("Unfriended!")
    })
})