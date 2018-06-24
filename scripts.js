



addEventListener('DOMContentLoaded', function () {
    //create button
    let btnDiv = document.createElement('div');
    let btn = document.createElement('button');
    let btnLabel = document.createTextNode('Add Square');
    document.body.appendChild(btnDiv);
    btnDiv.appendChild(btn);
    btn.appendChild(btnLabel);
    let linebreak = document.createElement("br");
    linebreak.id = 'linebreak';
    document.body.appendChild(linebreak);


    //create boxes 
    let colors = ['hotpink', 'red', 'darkorange', 'limegreen', 'gold', 'royalblue', 'indigo', 'mediumpurple'];

    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    let count = 0;
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


        //create count id
        let a = count++;
        divBox.id = a;
        let textId = document.createTextNode('id = ');
        boxId.appendChild(textId);
        let text = document.createTextNode(divBox.id);
        boxId.appendChild(text);

        //random color on click
        divBox.addEventListener('click', function () {
            divBox.style.background = randomColor(colors);
        })

        //remove box on dblclick
        divBox.addEventListener('dblclick', function () {

            if (divBox.id % 2 === 0) {

                if (divBox.nextSibling == null) {
                    alert('No square there!!!')
                } else { divBox.nextSibling.remove() }
            } else {

                if (this.previousSibling.id == 'linebreak') {
                    alert('No square there!!!')
                } else {
                    this.previousSibling.remove()
                }
            }
        })
    })






















});
