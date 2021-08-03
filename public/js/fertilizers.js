if(annyang){
    console.log("Annyang works!");

    var commands = {
        'click fertilizer stock position' : function(){
          let btn_fertilizer_stock_position = document.getElementById("fertilizer_stock_position");
          btn_fertilizer_stock_position.click();
        },
        'click fertilizer price' : function(){
            let btn_fertilizer_price = document.getElementById("fertilizer_price");
            btn_fertilizer_price.click();
        },
        'click fertilizer retailers' : function(){
            let btn_fertilizer_retailers = document.getElementById("fertilizer_retailers");
            btn_fertilizer_retailers.click();
        },
        'Go to previous Page': function(){
            let btn_previous = document.getElementById("btn_previous");
            btn_previous.click();
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

    SpeechKITT.setSampleCommands(["click fertilizer stock position","click fertilizer price","click fertilizer retailers"]);

    annyang.start({ autoRestart: true, continuous: false });

    // //start listening
    // annyang.start();
    annyang.setLanguage = "en-IN";

    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
    });
    
}