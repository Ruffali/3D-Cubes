    
$(document).ready(function () {

    var dropArea = $("#dropArea .container-fluid .col-md-8 .dropArea");
    var divs = $("#dragArea .container-fluid .col-md-8 .dragArea .innerDiv");
    var dropAreas = $("#dropArea .container-fluid .col-md-8 .dropArea .innerDivDrop");


    for(var div of divs){
        div.addEventListener("dragstart", function(e){
            e.dataTransfer.setData("Id", this.id);
        })
    }
    for(dropElements of dropAreas){
        dropElements.addEventListener("dragover", function(e){
            e.preventDefault();
        })
    }
    
    for (let i = 0; i < dropAreas.length; i++) {
        dropAreas[i].addEventListener("drop", function(e){
            var ids = e.dataTransfer.getData('Id');
            if(dropAreas[i].id == ids){
                dropAreas[i].appendChild(document.getElementById(ids));
            }else{
                alert("Duz at qaqash");
            }
        })
    }
});
