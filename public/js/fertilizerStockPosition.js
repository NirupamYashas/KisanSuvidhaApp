var stateObject = {
  
    "Andhra Pradesh": {
       "Srikakulam": ["Adilakshmi Traders(250982)","Aditya Traders(772329)","ANNAPURNA AGROS, SINGIDI(1116691)","ANJANEYA TRADERS-RAJAM(1136984)","Annapurna Traders(251805)","Ayyappa Traders(524466)","Srinivasa Enterprises(255033)","Srinivasa Enterprises(255037)"],
      "Vizianagaram": ["Sri Ramalaxmi Rythu Depo and Generals(246538)", "Sri Ramanjaneya Traders(246539)", "Sri Ravi Teja Traders(246540)", "Sri Sai Lamxi Fertilizers and Generals(246541)", "Sri Satyamani Traders(246542)", "Sri Satyanarayana Traders(246543)", "Sri Satya Rythu Depot(246544)", "Sri Satya Sai Traders(246545)", "Sri Satya Traders(246546)", "Sri Seetharamalaxmi Traders(246547)", "Sri Srinivasa Trading Co(246549)", "Sri Srinivasa Trading Co(246550)", "Sri Vasavi Fertilizers and Generals(246551)", "Sri Vasavi Fertilizers and Generals(246552)", "Sri Vasavi Kanyakaparameswari(246553)", "Sri Vasavi Stores(246554)", "Sri Venkataganesh General Stores(246555)", "Sri Venkatalaxmi Fertilizers(246556)", "SVS MALLIKARJUNA GENERAL STORE(246557)", "VENKATA LAKSHMI TRADERS(246558)", ],
      "Visakhapatnam": [],
      "East Godavari": [],
      "West Godavari": [],
      "Krishna": [],
      "Guntur": [],
      "Prakasam": [],
      "Nellore": [],
      "Chittoor": [],
      "Kadapa": [],
      "Anantapur": [],
      "Kurnool": []
    },
    "Kerala": {
      "Thiruvananthapuram" :[],
       "Kollam" :[], 
       "Pathanamthitta" :[], 
       "Alappuzha" :[], 
       "Kottayam" :[], 
       "Idukki" :[], 
       "Ernakulam" :[], 
       "Thrissur" :[], 
       "Palakkad" :[], 
       "Malappuram" :[], 
       "Kozhikode" :[], 
       "Wayanad" :[], 
       "Kannur" :[], 
       "Kasargod" : []
    },
    "Assam" : {
      "Kokrajhar": [],
      "Dhubri": [],
      "Goalpara": [],
      "Barpeta": [],
      "Morigaon": [],
      "Nagaon": [],
      "Sonitpur": [],
      "Lakhimpur": [],
      "Dhemaji": [],
      "Tinsukia": [],
      "Dibrugarh": [],
      "Sivasagar": [],
      "Jorhat": [],
      "Golaghat": [],
      "Karbi Anglong": [],
      "Dima Hasao": [],
      "Cachar": [],
      "Karimganj": [],
      "Hailakandi": [],
      "Bongaigaon": [],
      "Chirang": [],
      "Kamrup": [],
      "Kamrup Metropolitan": [],
      "Nalbari": [],
      "Baksa": [],
      "Darrang": [],
      "Udalguri":  [],
      "Hojai": [],
      "Biswanath": [],
      "Charaideo": [],
      "Majuli": [],
      "South Salmara Mancachar": [],
      "West Karbi Anglong": []
    }
}

window.onload = function() {
    var stateSel = document.getElementById("select_state");
    var DistrictSel = document.getElementById("select_district");
    var RetailerSel = document.getElementById("select_retailer");
    var SubmitBtn = document.getElementById("toggle");
    SubmitBtn.onclick = function(){
      var DataBox = document.getElementById("data-box");
      DataBox.style.display = "block";
    }
    for (var x=0;x<Object.keys(stateObject).length;x++) {
      stateSel.options[stateSel.options.length] = new Option(Object.keys(stateObject)[x],x+1);
    }
    stateSel.onchange = function() {
      //empty Districts dropdown
      DistrictSel.length = 1;
      RetailerSel.length = 1;
      //display correct values
      var selectedStateObject = stateObject[this.options[this.selectedIndex].text];
      for (var y=0;y<Object.keys(selectedStateObject).length;y++) {
        DistrictSel.options[DistrictSel.options.length] = new Option(Object.keys(selectedStateObject)[y], y+1);
      }
      stateSel.size = "1";
    }
    DistrictSel.onchange = function() {
        //empty Chapters dropdown
      RetailerSel.length = 1;
      //display correct values
      var val = stateSel.selectedIndex;
      var selectedStateObject = stateObject[stateSel.options[val].text];
      var selectedDistrictList = selectedStateObject[this.options[this.selectedIndex].text];
      for (var i = 0; i <selectedDistrictList.length; i++) {
        RetailerSel.options[RetailerSel.options.length] = new Option(selectedDistrictList[i], i+1);
      }
      DistrictSel.size = "1";
    }
};


if(annyang){ 
    console.log("Annyang works!");

    var commands = {
        '(show) state options' : function(){
          let dropdown_state = document.getElementById("select_state");
          dropdown_state.size = dropdown_state.options.length;
        },
        '(show) district options' : function(){
           let dropdown_district = document.getElementById("select_district");
           dropdown_district.size = dropdown_district.options.length;
        },
        '(show) retailer options' : function(){
            let dropdown_retailer = document.getElementById("select_retailer");
            if(dropdown_retailer.options.length < 15){
                dropdown_retailer.size = dropdown_retailer.options.length;
            }else{
              dropdown_retailer.size = "15";
            }
        },
        'select state *tag' : function(variable) {
            let selectBox = document.getElementById("select_state");
            DropdownEntry(variable,selectBox);
        },
        'select district *tag' : function(variable){
            let selectBox = document.getElementById("select_district");
            DropdownEntry(variable,selectBox);
        },
        'select retailer *tag' : function(variable){
          let selectBox = document.getElementById("select_retailer");
          var Num =  variable.split(" ").join('')
          if(Number.isInteger(parseInt(Num))){
            var id_value = Num;
            console.log(id_value);
            for(var i=1 ; i<selectBox.length;i++){
              var dropdownItem = selectBox.options[i].text.toLowerCase();
              if(dropdownItem.includes(id_value)){
                selectBox.selectedIndex = selectBox.options[i].value;
                selectBox.size = "1";
              }
            }
          }else{
            var id_value = variable;
            console.log(id_value);
            var PercentageList = [];
            for(var i=1;i<selectBox.length;i++){
              var dropdownItem = selectBox.options[i].text;
              var itemPercentage = similarity(id_value,dropdownItem)
              PercentageList.push(itemPercentage);
            }
            console.log(PercentageList);
            var MaxVal = Math.max(...PercentageList);
            var indexList = [];
            for(var r=0;r<PercentageList.length;r++){
              if(PercentageList[r] === MaxVal){
                indexList.push(r+1);
              }
            }
            console.log(indexList);
              if(indexList.length === 1){
                selectBox.selectedIndex = selectBox.options[indexList[0]].value;
                selectBox.size = "1";
              }else{
                var $options = $("#select_retailer").clone();
                var alertBox = "";
                $.each(indexList, function(index, value) {
                  $options.find("option").each(function(optionIndex,option) { 
                    if ($(option).val() === String(value)){
                      alertBox += ($(option).text()) +"\n";
                    }
                  });
                });
                console.log(alertBox);
                alert(alertBox);
              }
          }
        },
        'Go to previous Page': function(){
            let btn_previous = document.getElementById("btn_previous");
            btn_previous.click();
        },
        '(Click) Submit': function(){
          var SubmitBtn = document.getElementById("toggle");
          SubmitBtn.click();
        }
    }

    function DropdownEntry(variable,selectBox){
      console.log(variable);
      var stateSel = document.getElementById("select_state");
      var DistrictSel = document.getElementById("select_district");
      var RetailerSel = document.getElementById("select_retailer");

      let id_value = variable;
      var PercentageList = [];
      for(var i=1;i<selectBox.length;i++){
        var dropdownItem = selectBox.options[i].text;
        var itemPercentage = similarity(id_value,dropdownItem)
        PercentageList.push(itemPercentage);
      }
      console.log(PercentageList);
      var MaxVal = 0;
      var indexVal = -1;
      for(var r=0;r<PercentageList.length;r++){
        if(PercentageList[r] > MaxVal){
          MaxVal = PercentageList[r];
          indexVal = r+1;
        }
      }
      console.log(indexVal);
      if(indexVal !== -1 && selectBox === document.getElementById("select_state")){
        selectBox.selectedIndex = selectBox.options[indexVal].value;
        selectBox.size = "1";
        
        //empty next dropdown
        DistrictSel.length = 1;
        RetailerSel.length = 1;
        //display correct values
        var selectedStateObject = stateObject[selectBox.options[selectBox.selectedIndex].text];
        for (var y=0;y<Object.keys(selectedStateObject).length;y++) {
            DistrictSel.options[DistrictSel.options.length] = new Option(Object.keys(selectedStateObject)[y], y+1);
        };
      }else if(indexVal !== -1 && selectBox === document.getElementById("select_district")){
        selectBox.selectedIndex = selectBox.options[indexVal].value;
        selectBox.size = "1";

        //empty next dropdown
        RetailerSel.length = 1;
        //display correct values
        var Stateval = stateSel.selectedIndex;
        var Districtval = DistrictSel.selectedIndex;
        var selectedStateObject = stateObject[stateSel.options[Stateval].text];
        var selectedDistrictList = selectedStateObject[DistrictSel.options[Districtval].text];
        for (var j = 0; j <selectedDistrictList.length;j++) {
          RetailerSel.options[RetailerSel.options.length] = new Option(selectedDistrictList[j], j+1);
        }
      }
    }

    function similarity(s1, s2) {
      var longer = s1;
      var shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      var longerLength = longer.length;
      if (longerLength == 0) {
        return 1.0;
      }
      return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    function editDistance(s1, s2) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();
    
      var costs = new Array();
      for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
          if (i == 0)
            costs[j] = j;
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                  costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0)
          costs[s2.length] = lastValue;
      }
      return costs[s2.length];
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

    SpeechKITT.setSampleCommands(["show state options","show district options","select state <value>","select district <value>"]);

    annyang.start({ autoRestart: true, continuous: false });

    annyang.setLanguage = "en-IN";

    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, All these could be possible phrases: ", phrases);
    });
   
}