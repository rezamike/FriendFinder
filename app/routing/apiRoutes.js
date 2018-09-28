var friends = require("../data/friends");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  
    app.post("/api/friends", function(req, res) {
        //add code to push into your static database
        //i.e. friends.push(req.body) or something like that
        res.json(friends);
    });
  
    app.post("/api/clear", function(req, res) {
      friends.length = [];
  
      res.json({ ok: true });
    });
  };
  