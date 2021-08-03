if(annyang){
    console.log("Annyang works!");

    var commands = {
        'click beneficiary status' : function(){
            let btn_beneficiarystatus = document.getElementById("beneficiary_status");
            btn_beneficiarystatus.click();
        },
        'click Edit Aadhaar Details': function(){
            let btn_EditAadhaarDetails = document.getElementById("edit_aadhaar_details");
            btn_EditAadhaarDetails.click();
        },
        'click Know Status': function(){
            let btn_KnowStatus = document.getElementById("know_status");
            btn_KnowStatus.click();
        },
        'click faq': function(){
            let btn_faq = document.getElementById("faq");
            btn_faq.click();
        },
        'click contact us': function(){
            let btn_contactUs = document.getElementById("contact_us");
            btn_contactUs.click();
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

    SpeechKITT.setSampleCommands(["click beneficiary status","click Edit Aadhaar details","click Know status","Go to previous page"]);

    annyang.start({ autoRestart: true, continuous: false });

    annyang.setLanguage = "en-IN";

    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
    });
    
}