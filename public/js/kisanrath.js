if(annyang){
    console.log("Annyang works!");

    var commands = {
        'click transport service' : function(){
            let btn_transportservice = document.getElementById("transport_service");
            btn_transportservice.click();
        },
        'click buy requests' : function(){
            let btn_buyrequests = document.getElementById("buy_requests");
            btn_buyrequests.click();
        },
        'click sell offers' : function(){
            let btn_selloffers = document.getElementById("sell_offers");
            btn_selloffers.click();
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

    SpeechKITT.setSampleCommands(["click transport service","click Buy requests","click sell offers"]);

    annyang.start({ autoRestart: true, continuous: false });

    annyang.setLanguage = "en-IN";

    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
    });

}