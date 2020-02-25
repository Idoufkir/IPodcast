function menuPodcast () {
        var global = document.getElementById("diva");
        
        // global.setAttribute("class", "global");
        var input1 = document.getElementById("input1");
        var input2 = document.getElementById("input2");
        var input3 = document.getElementById("input3");
        var input4 = document.getElementById("input4");
        var input5 = document.getElementById("input5");
        var input6 = document.getElementById("input6");
        var input7 = document.getElementById("input7");

        var gp = document.createElement("div");
        gp.setAttribute("class", "g-podcast");

        var test = document.createElement("div");
        test.setAttribute("class", "test1");
        test.style.backgroundImage = "url("+ input5.value + ")";

        var h1 = document.createElement("h1");
        
        var h1text = document.createTextNode(input1.value);

        gp.appendChild(test);
        
        test.appendChild(h1);
        h1.appendChild(h1text);
        var discrption = document.createElement("p");
        var dis = document.createTextNode(input2.value);
        discrption.appendChild(dis);
        gp.appendChild(discrption);

        var podcast = document.createElement("p");
        var pod = document.createTextNode(input3.value);
        podcast.appendChild(pod);
        gp.appendChild(podcast);

        var owner = document.createElement("p");
        var ow = document.createTextNode(input4.value);
        owner.appendChild(ow);
        gp.appendChild(owner);

        var categorie = document.createElement("p");
        // var ca = document.createTextNode(input5.value);
        // categorie.appendChild(ca);
        categorie
        gp.appendChild(categorie);

        var podcaster = document.createElement("p");
        var podr = document.createTextNode(input6.value);
        podcaster.appendChild(podr);
        gp.appendChild(podcaster);


        global.appendChild(gp);

        // var list = document.getElementsByClassName("inputs");
        // list.insertBefore(global);
        
        document.body.appendChild(global);

      
        


        

}
function href() {
        window.location = "pod1.html";
}
function href() {
        window.location = "pod2.html";
}
function href() {
        window.location = "pod3.html";
        
}