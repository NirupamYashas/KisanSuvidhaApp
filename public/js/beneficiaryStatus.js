window.onload = function(){
    var SubmitBtn = document.getElementById("toggle");
    SubmitBtn.onclick = function(){
      var DataBox = document.getElementById("data-box");
      DataBox.style.display = "block";
    }
    let  idSel = document.getElementById("id_type");
    idSel.onchange = function() {validate()};
    function validate()
    {
       idSel.size = "1";
    }
};

if(annyang){
    console.log("Annyang works!");

    var commands = {
        'show id type options' : function(){
          let dropdown_idtype = document.getElementById("id_type");
          dropdown_idtype.size = dropdown_idtype.options.length; 
        },
        'select id type *tag' : function(variable) {
            let id_value = variable;
            let selectBox = document.getElementById("id_type");
            for(var i=1 ; i<selectBox.length;i++){
              if(id_value.toUpperCase() === selectBox.options[i].text.toUpperCase()){
                selectBox.selectedIndex = selectBox.options[i].value;
                selectBox.size = "1";
              }
            };
        },
        'Enter value *tag' : function(variable){
            let id_value = variable.split(" ").join('');
            let selectBox = document.getElementById("enter_value");
            selectBox.value = id_value;
        },
        'Go to previous Page': function(){
            let btn_previous = document.getElementById("btn_previous");
            btn_previous.click();
        },
        'Get Active Installment': function(){
          var SubmitBtn = document.getElementById("toggle");
          SubmitBtn.click();
        }
    }
    //Add commands
    annyang.addCommands(commands);

    // Tell KITT to use annyang
    SpeechKITT.annyang();

    // Define a stylesheet for KITT to use
    SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat-pomegranate.css');

    // Render KITT's interface
    SpeechKITT.vroom();

    SpeechKITT.setInstructionsText("Some sample commands to try...")

    SpeechKITT.setSampleCommands(["show id type options","select idtype <value>","Enter value <value>","Go to previous page"]);

    annyang.start({ autoRestart: true, continuous: false });

    annyang.setLanguage = "en-IN";

    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
    });    
}


