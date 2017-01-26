process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");
var server = require('../app');
var vote = require("../vote");
var should = chai.should();
chai.use(chaiHttp);


// describe('vote', function() {

 // vote.collection.drop();

  // beforeEach(function(done){
    // var newvote = new vote({
	// '_id': '1',
     // 'voterName': 'ashok',
     // 'voterEmail': 'ashokpidugu4@gmail',
	// 'voterOrganization':'ashokpidugu',
		// 'voterSubscribe':'ashoksub',
	// 'vote':'ash',
		// 'create_date':'2016-05-18T16:00:00Z',
	 
      // });
    // newvote.save(function(err) {
      // done();
    // });
  // });
  // afterEach(function(done){
    // vote.collection.drop();
    // done();
  // });


describe('/GET vote', () => {
      it('it should GET all votes', (done) => {
        chai.request(server)
            .get(' /api/retrieve')
            .end(function(err, res){
				//expect(err).to.be.null;
        //expect(res).to.have.status(200);
        //res.should.have.status(200);
        //res.should.be.json;
        //res.body.should.be.a('object');
        //res.body.should.have.property('response');
 done();
        
		
        
      });
  });
});

