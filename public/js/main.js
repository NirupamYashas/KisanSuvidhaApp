if(annyang){
    console.log("Annyang works!");

  var commands = {
        'click pm kisan' : pmKisan,
        '(open) pm kisan' : pmKisan,
        'click fertilizers' : function(){
            let btn_fertilizers = document.getElementById("fertilizers");
            btn_fertilizers.click();
        },
        'click kisan rath' : function(){
            let btn_kisanrath = document.getElementById("kisan_rath");
            btn_kisanrath.click();
        },
        'click crop insurance' : function(){
            let btn_cropinsurance = document.getElementById("crop_insurance");
            btn_cropinsurance.click();
        },
    };

     function  pmKisan(){
      let btn_pmkisan = document.getElementById("pm_kisan");
      btn_pmkisan.click();
    };
    //Add commands
    annyang.addCommands(commands);

    // Tell KITT to use annyang
    SpeechKITT.annyang();

    // Define a stylesheet for KITT to use
    SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat-pomegranate.css');

    // Render KITT's interface
    SpeechKITT.vroom();

    SpeechKITT.setInstructionsText("Some sample commands to try...")

    SpeechKITT.setSampleCommands(["click pm kisan","click kisan rath"]);

    annyang.start({ autoRestart: true, continuous: false });

    annyang.setLanguage = "en-IN";

    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
    });

}