


addEventListener('DOMContentLoaded', function () {

    let btn = document.createElement('button');
    let btnLabel = document.createTextNode('Add Square');
    document.body.appendChild(btn);
    btn.appendChild(btnLabel);
    let linebreak = document.createElement("br");
    document.body.appendChild(linebreak);

    let count = 0;

    btn.addEventListener('click', function () {

        let divBox = document.createElement('div');
        document.body.appendChild(divBox);
        divBox.className = 'blackBox';
        divBox.style.cssFloat = 'left';

        divBox.addEventListener('click', function () {
            divBox.style.background = randomColor(colors);
        })

        let a = count++
        divBox.id =  a;
        
        let text = document.createTextNode(divBox.id);
        divBox.appendChild(text);

        console.log(divBox.id)

        text.id = 'textId';

        console.log(a);

        divBox.addEventListener('dblclick', function () {
           
           
        })
    })




    let colors = ['hotpink', 'red', 'orange', 'mediumturquoise', 'green', 'blue', 'indigo', 'purple'];

    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }

















    console.log('fail')
});
console.log('fail')