function fn1(){
    var name = document.getElementById("num").value;
    var name1 = document.getElementById("num1").value;
    // var getx = /^[0-9]$/
    var getx1 = /^[a-zA-Z ]+$/;
    var getx2 = /^[a-zA-Z ]+$/;

    if(name == ""){
        document.getElementById("demo").innerHTML="Must be filled";
        return false;
    }
    else if(name.length<=2){
        document.getElementById("demo").innerHTML="Invalid username";
        return false;
    }
    else if(!name.match(getx1)){
        document.getElementById("demo").innerHTML="Numbers are not allowed";
        return false;
    }
   
    else if(name.match(getx1)){
        document.getElementById("demo").innerHTML="";
        return;
    
    }

        

    if(name1 == ""){
        document.getElementById("demo1").innerHTML="Must be filled";
        return false;
        
    }
    else if(name1.length<=2){
        document.getElementById("demo1").innerHTML="Invalid username";
        return false;
    }
    else if(!name1.match(getx2)){
        document.getElementById("demo1").innerHTML="Numbers are not allowed";
        return false;
    }
    else if(name1.match(getx2)){
        document.getElementById("demo1").innerHTML="";
        return true;
    }
}
   
