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
	'_id': '1',
     'voterName': 'ashok',
     'voterEmail': 'ashokpidugu4@gmail',
	'voterOrganization':'ashokpidugu',
		'voterSubscribe':'ashoksub',
	'vote':'ash',
		'create_date':'2016-05-18T16:00:00Z',
	 
      });
    newvote.save(function(err) {
      done();
    });
  });
  afterEach(function(done){
    vote.collection.drop();
    done();
  });
    it('should list a vote details by id on /api/<retrieveById> GET', function(done) {
      var newvote = new vote({
        _id: '1',
     voterName: 'ashok',
     voterEmail: 'ashokpidugu4@gmail',
	voterOrganization:'ashokpidugu',
		voterSubscribe:'ashoksub',
	vote:'ash',
		create_date:'2016-05-18T16:00:00Z'
      });
      newvote.save(function(err,response) {
        chai.request(server)
.get('/api/retrieveById')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            //res.body.should.be.a('array');
            // res.body.should.have.property('_id');
            // res.body.should.have.property('voterName');
            // res.body.should.have.property('voterEmail');
			// res.body.should.have.property('voterOrganization');
			// res.body.should.have.property('voterSubscribe');
		    // res.body.should.have.property('vote');
		    // res.body.should.have.property('create_date');
		    // res.body.id.should.equal('1');
	        // res.body.voterName.should.equal('ashok');
            // res.body.voterEmail.should.equal('ashokpidugu4@gmail.com');
			// res.body.voterOrganization.should.equal('ashokpidugu');
			// res.body.voterSubscribe.should.equal('ashoksub');
			// res.body.vote.should.should.equal('ash');
			// res.body.create_date.should.equal('2016-05-18T16:00:00Z');
			
			
   // res.body._id.should.equal(vote._id);
            done();
          });
      });
  });
  
  
  
  });