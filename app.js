const express = require ('express');
const app = express();
let items = [];
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){

res.render("list", {addedItem: items});

});
app.post("/", function(req, res){
var item = req.body.addItem;
items.push(item);
 res.redirect("/");
})
app.listen(3000, function(){
 console.log("Server started on port 3000")
});