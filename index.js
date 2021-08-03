const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/",function(req,res){
    res.render("main");
});
  
app.get("/pmkisan",function(req,res){
  res.render("pmkisan");
});

app.get("/beneficiaryStatus",function(req,res){
  res.render("beneficiaryStatus");
});
  
app.get("/kisanrath",function(req,res){
   res.render("kisanrath");
});
  
app.get("/transportService",function(req,res){
  res.render("transportService");
});
  
app.get("/cropInsurance",function(req,res){
  res.render("cropInsurance");
});
  
app.get("/fertilizers",function(req,res){
  res.render("fertilizers");
});

app.get("/fertilizerStockPosition",function(req,res){
  res.render("fertilizerStockPosition");
});

app.get("/fertilizerPrice",function(req,res){
  res.render("fertilizerPrice");
});

app.get("/fertilizerRetailers",function(req,res){
  res.render("fertilizerRetailers");
});

app.get("/editAadhaarDetails",function(req,res){
  res.render("editAadhaarDetails");
})

app.get("/knowStatus",function(req,res){
  res.render("knowStatus");
})

app.get("/faq",function(req,res){
  res.render("faq");
})

app.get("/contactUs",function(req,res){
  res.render("contactUs");
})

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
