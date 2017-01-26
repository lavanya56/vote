process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");
var server = require('../app');
var vote = require("../vote");
var should = chai.should();
chai.use(chaiHttp);
describe('vote', function() {
    vote.collection.drop();

  beforeEach(function(done){
    var newvote = new vote({
	_id: '1',
     voterName: 'ashok',
     voterEmail: 'ashokpidugu4@gmail',
	voterOrganization:'ashokpidugu',
		voterSubscribe:'ashoksub',
	vote:'ash',
		create_date:'2016-05-18T16:00:00Z'
	 
      });
    newvote.save(function(err) {
  done();
    });
  });
  it('Should success insert the data on /api/form/insert  POST', function(done) {
    chai.request(server )
      .post('/api/form/insert')
      .send({'id': '1',
     'voterName': 'ashok',
     'voterEmail': 'ashokpidugu4@gmail',
	'voterOrganization':'ashokpidugu',
		'voterSubscribe':'ashoksub',
	'vote':'ashok',
		'create_date':'2016-05-18T16:00:00Z'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        // res.body.should.have.property('res');
 done();
        
		
        
      });
  });
  
  
  
});