function showExperiment(){
    experiment = document.getElementById("experiment").value;

    if(experiment == "071823 tiam2 lgfbpl1 gad2"){
        document.getElementById("071823 tiam2 lgfbpl1 gad2").style.display="block";
        document.getElementById("072823 lrp8 lgfbpl1 gad2").style.display="none";
    }

    if(experiment == "072823 lrp8 lgfbpl1 gad2"){
        document.getElementById("071823 tiam2 lgfbpl1 gad2").style.display="none";
        document.getElementById("072823 lrp8 lgfbpl1 gad2").style.display="block";
    }
}

function showBrain071823(){
    brain = document.getElementById("071823").value;

    if(brain == "p35 m1 bottom L"){
        document.getElementById("p35 m1 bottom L").style.display="block";
        document.getElementById("p35 m1 top L").style.display="none";
        document.getElementById("p55 m1 bottom L").style.display="none";
        document.getElementById("p55 m1 top L").style.display="none";
        document.getElementById("p120 m1 bottom L").style.display="none";
        document.getElementById("p120 m1 top L").style.display="none";
    }

    if(brain == "p35 m1 top L"){
        document.getElementById("p35 m1 bottom L").style.display="none";
        document.getElementById("p35 m1 top L").style.display="block";
        document.getElementById("p55 m1 bottom L").style.display="none";
        document.getElementById("p55 m1 top L").style.display="none";
        document.getElementById("p120 m1 bottom L").style.display="none";
        document.getElementById("p120 m1 top L").style.display="none";
    }

    if(brain == "p55 m1 bottom L"){
        document.getElementById("p35 m1 bottom L").style.display="none";
        document.getElementById("p35 m1 top L").style.display="none";
        document.getElementById("p55 m1 bottom L").style.display="block";
        document.getElementById("p55 m1 top L").style.display="none";
        document.getElementById("p120 m1 bottom L").style.display="none";
        document.getElementById("p120 m1 top L").style.display="none";
    }

    if(brain == "p55 m1 top L"){
        document.getElementById("p35 m1 bottom L").style.display="none";
        document.getElementById("p35 m1 top L").style.display="none";
        document.getElementById("p55 m1 bottom L").style.display="none";
        document.getElementById("p55 m1 top L").style.display="block";
        document.getElementById("p120 m1 bottom L").style.display="none";
        document.getElementById("p120 m1 top L").style.display="none";
    }

    if(brain == "p120 m1 bottom L"){
        document.getElementById("p35 m1 bottom L").style.display="none";
        document.getElementById("p35 m1 top L").style.display="none";
        document.getElementById("p55 m1 bottom L").style.display="none";
        document.getElementById("p55 m1 top L").style.display="none";
        document.getElementById("p120 m1 bottom L").style.display="block";
        document.getElementById("p120 m1 top L").style.display="none";
    }

    if(brain == "p120 m1 top L"){
        document.getElementById("p35 m1 bottom L").style.display="none";
        document.getElementById("p35 m1 top L").style.display="none";
        document.getElementById("p55 m1 bottom L").style.display="none";
        document.getElementById("p55 m1 top L").style.display="none";
        document.getElementById("p120 m1 bottom L").style.display="none";
        document.getElementById("p120 m1 top L").style.display="block";
    }
}

function showBrain072823(){
    brain = document.getElementById("072823").value;

    if(brain == "p35 m2 breg0.7 L"){
        document.getElementById("p35 m2 breg0.7 L").style.display="block";
        document.getElementById("p35 m2 breg1 L").style.display="none";
        document.getElementById("p35 m2 breg1.4 L").style.display="none";
        document.getElementById("p55 m2 breg0.7 L").style.display="none";
        document.getElementById("p55 m2 breg1 L").style.display="none";
        document.getElementById("p55 m2 breg1.4 L").style.display="none";
        document.getElementById("p120 m2 breg0.7 R").style.display="none";
        document.getElementById("p120 m2 breg1 L").style.display="none";
        document.getElementById("p120 m2 breg1.4 L").style.display="none";
    }
    
    if(brain == "p35 m2 breg1 L"){
        document.getElementById("p35 m2 breg0.7 L").style.display="none";
        document.getElementById("p35 m2 breg1 L").style.display="block";
        document.getElementById("p35 m2 breg1.4 L").style.display="none";
        document.getElementById("p55 m2 breg0.7 L").style.display="none";
        document.getElementById("p55 m2 breg1 L").style.display="none";
        document.getElementById("p55 m2 breg1.4 L").style.display="none";
        document.getElementById("p120 m2 breg0.7 R").style.display="none";
        document.getElementById("p120 m2 breg1 L").style.display="none";
        document.getElementById("p120 m2 breg1.4 L").style.display="none";
    }

    if(brain == "p35 m2 breg1.4 L"){
        document.getElementById("p35 m2 breg0.7 L").style.display="none";
        document.getElementById("p35 m2 breg1 L").style.display="none";
        document.getElementById("p35 m2 breg1.4 L").style.display="block";
        document.getElementById("p55 m2 breg0.7 L").style.display="none";
        document.getElementById("p55 m2 breg1 L").style.display="none";
        document.getElementById("p55 m2 breg1.4 L").style.display="none";
        document.getElementById("p120 m2 breg0.7 R").style.display="none";
        document.getElementById("p120 m2 breg1 L").style.display="none";
        document.getElementById("p120 m2 breg1.4 L").style.display="none";
    }

    if(brain == "p55 m2 breg0.7 L"){
        document.getElementById("p35 m2 breg0.7 L").style.display="none";
        document.getElementById("p35 m2 breg1 L").style.display="none";
        document.getElementById("p35 m2 breg1.4 L").style.display="none";
        document.getElementById("p55 m2 breg0.7 L").style.display="block";
        document.getElementById("p55 m2 breg1 L").style.display="none";
        document.getElementById("p55 m2 breg1.4 L").style.display="none";
        document.getElementById("p120 m2 breg0.7 R").style.display="none";
        document.getElementById("p120 m2 breg1 L").style.display="none";
        document.getElementById("p120 m2 breg1.4 L").style.display="none";
    }
    
    if(brain == "p55 m2 breg1 L"){
        document.getElementById("p35 m2 breg0.7 L").style.display="none";
        document.getElementById("p35 m2 breg1 L").style.display="none";
        document.getElementById("p35 m2 breg1.4 L").style.display="none";
        document.getElementById("p55 m2 breg0.7 L").style.display="none";
        document.getElementById("p55 m2 breg1 L").style.display="block";
        document.getElementById("p55 m2 breg1.4 L").style.display="none";
        document.getElementById("p120 m2 breg0.7 R").style.display="none";
        document.getElementById("p120 m2 breg1 L").style.display="none";
        document.getElementById("p120 m2 breg1.4 L").style.display="none";
    }

    if(brain == "p55 m2 breg1.4 L"){
        document.getElementById("p35 m2 breg0.7 L").style.display="none";
        document.getElementById("p35 m2 breg1 L").style.display="none";
        document.getElementById("p35 m2 breg1.4 L").style.display="none";
        document.getElementById("p55 m2 breg0.7 L").style.display="none";
        document.getElementById("p55 m2 breg1 L").style.display="none";
        document.getElementById("p55 m2 breg1.4 L").style.display="block";
        document.getElementById("p120 m2 breg0.7 R").style.display="none";
        document.getElementById("p120 m2 breg1 L").style.display="none";
        document.getElementById("p120 m2 breg1.4 L").style.display="none";
    }

    if(brain == "p120 m2 breg0.7 R"){
        document.getElementById("p35 m2 breg0.7 L").style.display="none";
        document.getElementById("p35 m2 breg1 L").style.display="none";
        document.getElementById("p35 m2 breg1.4 L").style.display="none";
        document.getElementById("p55 m2 breg0.7 L").style.display="none";
        document.getElementById("p55 m2 breg1 L").style.display="none";
        document.getElementById("p55 m2 breg1.4 L").style.display="none";
        document.getElementById("p120 m2 breg0.7 R").style.display="block";
        document.getElementById("p120 m2 breg1 L").style.display="none";
        document.getElementById("p120 m2 breg1.4 L").style.display="none";
    }
    
    if(brain == "p120 m2 breg1 L"){
        document.getElementById("p35 m2 breg0.7 L").style.display="none";
        document.getElementById("p35 m2 breg1 L").style.display="none";
        document.getElementById("p35 m2 breg1.4 L").style.display="none";
        document.getElementById("p55 m2 breg0.7 L").style.display="none";
        document.getElementById("p55 m2 breg1 L").style.display="none";
        document.getElementById("p55 m2 breg1.4 L").style.display="none";
        document.getElementById("p120 m2 breg0.7 R").style.display="none";
        document.getElementById("p120 m2 breg1 L").style.display="block";
        document.getElementById("p120 m2 breg1.4 L").style.display="none";
    }

    if(brain == "p120 m2 breg1.4 L"){
        document.getElementById("p35 m2 breg0.7 L").style.display="none";
        document.getElementById("p35 m2 breg1 L").style.display="none";
        document.getElementById("p35 m2 breg1.4 L").style.display="none";
        document.getElementById("p55 m2 breg0.7 L").style.display="none";
        document.getElementById("p55 m2 breg1 L").style.display="none";
        document.getElementById("p55 m2 breg1.4 L").style.display="none";
        document.getElementById("p120 m2 breg0.7 R").style.display="none";
        document.getElementById("p120 m2 breg1 L").style.display="none";
        document.getElementById("p120 m2 breg1.4 L").style.display="block";
    }
}

function checkbox(id) {
    var img = document.getElementById(id);

    if (img.style.visibility=="hidden"){
        img.style.visibility="visible";
    } else {
        img.style.visibility="hidden";
    }
}