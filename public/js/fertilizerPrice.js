var stateObject = {
    "Andhra Pradesh": ["Imported Neem Coated Urea(45 Kg)", "Imported Neem Coated Urea(50 Kg)", "Neem Coated Urea(45 Kg)", "Neem Coated Urea(50 Kg)", "Boronated DAP", "DAP", "DAP Lite", "Imported DAP", "Imported DAP Lite", "Imported DAP Lite-Grade II", "Imported MAP", "Imported MAP Lite", "MAP", "TSP", "Zincated DAP", "MOP", "10-26-26", "12-32-16", "13-33-0-6", "14-28-0-0"],
    "Kerala": [],
    "Assam" : [] 
}

window.onload = function() {
    var SubmitBtn = document.getElementById("toggle");
    SubmitBtn.onclick = function(){
      var DataBox = document.getElementById("data-box");
      DataBox.style.display = "block";
    }
    var stateSel = document.getElementById("select_state");
    var ProductSel = document.getElementById("select_product");
    for (var x=0;x<Object.keys(stateObject).length;x++) {
      stateSel.options[stateSel.options.length] = new Option(Object.keys(stateObject)[x],x+1);
    }
    stateSel.onchange = function() {
      //empty products dropdown
      ProductSel.length = 1;
      //display correct values
      var selectedStateObject = stateObject[this.options[this.selectedIndex].text];
      for (var y=0;y<selectedStateObject.length;y++) {
        ProductSel.options[ProductSel.options.length] = new Option(selectedStateObject[y], y+1);
      }
      stateSel.size = "1";
    }
    ProductSel.onchange = function() {
      ProductSel.size = "1";
    }
};


if(annyang){
    console.log("Annyang works!");

    var commands = {
        '(show) state options' : function(){
          let dropdown_state = document.getElementById("select_state");
          dropdown_state.size = dropdown_state.options.length;
        },
        '(show product options)' : function(){
           let dropdown_product = document.getElementById("select_product");
           if(dropdown_product.options.length < 15){
            dropdown_product.size = dropdown_product.options.length;
          }else{
            dropdown_product.size = "15";
          }
        },
        '(select) state *tag' : function(variable) {
            let selectBox = document.getElementById("select_state");
            DropdownEntry(variable,selectBox);   
        },
        '(select) product *tag' : function(variable){
          let id_value = variable;
          var PercentageList = [];
          let selectBox = document.getElementById("select_product");
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
          if(indexVal !== -1){
            selectBox.selectedIndex = selectBox.options[indexVal].value;
            selectBox.size = "1";
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
      var ProductSel = document.getElementById("select_product");

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
        
        //empty products dropdown
        ProductSel.length = 1;
        //display correct values
        var selectedStateObject = stateObject[selectBox.options[selectBox.selectedIndex].text];
        for (var y=0;y<selectedStateObject.length;y++) {
            ProductSel.options[ProductSel.options.length] = new Option(selectedStateObject[y], y+1);
        };
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

    SpeechKITT.setSampleCommands(["show state options","show product options","select state <value>","select product <value>"]);

    annyang.start({ autoRestart: true, continuous: false });

    annyang.setLanguage = "en-IN";

    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
    });
  
}