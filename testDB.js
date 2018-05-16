var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Schema = require('mongoose').Schema;
var schema = new Schema({
    name: String,
    role: { type: String, default: 'guitarist' }
  });


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var Person = db.model('Person', schema);
  
    var slash = new Person({ name: 'Slash' });

    Person.create(slash, function(error) {
      Person.find({ name: 'Slash' }, function(error, docs) {
          console.log(docs);
      });
    });
    
});





  