



addEventListener('DOMContentLoaded', function () {

    let btn = document.createElement('button');
    let btnLabel = document.createTextNode('Add Square');
    document.body.appendChild(btn);
    btn.appendChild(btnLabel);
    let linebreak = document.createElement("br");
    document.body.appendChild(linebreak);

    let count = 0;
    let colors = ['hotpink', 'red', 'darkorange', 'limegreen', 'gold', 'royalblue', 'indigo', 'mediumpurple'];

    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    btn.addEventListener('click', function () {

        let divBox = document.createElement('div');
        document.body.appendChild(divBox);
        divBox.className = 'blackBox';
        divBox.style.cssFloat = 'left';
        let boxId = document.createElement('p');
        divBox.appendChild(boxId);

        divBox.onselectstart = function () {
            return false;
        };

        let a = count++
        divBox.id = a;
        let textId = document.createTextNode('id = ');
        boxId.appendChild(textId);
        let text = document.createTextNode(divBox.id);
        boxId.appendChild(text);


        divBox.addEventListener('click', function () {
            divBox.style.background = randomColor(colors);

        })
       

        divBox.addEventListener('dblclick', function () {

            if (divBox.id % 2 === 0) {

                if (divBox.nextSibling == null) {
                    alert('No square there!!!')
                } else  {divBox.nextSibling.remove()}
            } else { 

                if (divBox.previousSibling == null) {
                    alert('No square there!!!')
                } else {divBox.previousSibling.remove()}



            }
            

           

        })








    })





















    console.log('fail')
});
console.log('fail')