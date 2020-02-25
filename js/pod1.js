class LinkedList {
    constructor() {
        this.head = null;
        this.curser = null;
    }

    add(data) {
        var title =document.getElementById("title");
        var Data =document.getElementById("data");
        var description =document.getElementById("Description");
        var duration =document.getElementById("Duration");
        var date =document.getElementById("Date");
        var tags =document.getElementById("Tags");

        var liste = document.getElementById('liste');
        // CREATE NEW DIV
        var div = document.createElement('div');
        div.setAttribute("id","list");

        var div2 =document.createElement("div");
        div2.setAttribute("id","listeT");

        // CRATE H1
        var h1 = document.createElement('h1');
        var h1text = document.createTextNode(title.value);
        h1.appendChild(h1text);


        var h2 = document.createElement('h1');
        var h2text = document.createTextNode(date.value);
        h2.appendChild(h2text);


        var h3 = document.createElement('h1');
        var h3text = document.createTextNode(duration.value);
        h3.appendChild(h3text);

        div2.appendChild(h1);
        div2.appendChild(h2);
        div2.appendChild(h3);


        var h4 = document.createElement('h4');
        var h4text = document.createTextNode(description.value);
        h4.appendChild(h4text);


        var h5 = document.createElement('h5');
        var h5text = document.createTextNode(tags.value);
        h5.appendChild(h5text);

        div.appendChild(div2);


div.appendChild(h4);
div.appendChild(h5);
liste.appendChild(div);

liste.appendChild(div);
        if (!this.head) {
            this.head = new Node(data);
            this.curser = this.head;
        } else {
            let temp = this.head;
            this.head = new Node(data);
            temp.next = this.head;
            this.head.prev = temp;
        }
    }
    pop() {
        if(this.head === this.curser){
            this.curser = this.curser.prev;
        }
        if (this.head && this.head.prev) {
            this.head = this.head.prev;
            this.head.next = null;
        }
    }
    showCurrent() {
        if (this.curser) {
            return this.curser.data;
        } else {
            return;
        }
    }
    next() {
        if (this.curser && this.curser.next) {
            this.curser = this.curser.next;
        }
    }
    prev() {
        if (this.curser && this.curser.prev) {
            this.curser = this.curser.prev;
        }
    }
}
class Node {
    constructor(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}

let list = new LinkedList();

function add() {
    list.add(document.getElementById("data").value);
    document.getElementById("audio").src = list.showCurrent();
    document.getElementById("data").value = "";

}

function pop() {
    list.pop();
    document.getElementById("audio").src = list.showCurrent();
}

function next() {
    list.next();
    document.getElementById("audio").src = list.showCurrent();
}

function prev() {
    list.prev();
    document.getElementById("audio").src = list.showCurrent();
}
function liste1() {
    var aud = document.getElementById("audio");
    aud.src="1.mp3";
    aud.autoplay= true;
}
function liste2() {
    var aud = document.getElementById("audio");
    aud.src="2.mp3";
    aud.autoplay= true;
}
function liste3() {
    var aud = document.getElementById("audio");
    aud.src="3.mp3";
    aud.autoplay= true;
}


// Pod 2 
function liste4() {
    var aud = document.getElementById("audio");
    aud.src="4.mp3";
    aud.autoplay= true;
}
function liste5() {
    var aud = document.getElementById("audio");
    aud.src="5.mp3";
    aud.autoplay= true;
}
function liste6() {
    var aud = document.getElementById("audio");
    aud.src="6.mp3";
    aud.autoplay= true;
}
// Pod  
function liste7() {
    var aud = document.getElementById("audio");
    aud.src="7.mp3";
    aud.autoplay= true;
}
function liste8() {
    var aud = document.getElementById("audio");
    aud.src="8.mp3";
    aud.autoplay= true;
}
function liste9() {
    var aud = document.getElementById("audio");
    aud.src="9.mp3";
    aud.autoplay= true;
}
// call add method by defaut
document.getElementById("audio").autoplay=true;


