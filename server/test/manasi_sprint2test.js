/**
 * This is an unit test intended to show the getall tags within the user_api 
 * The goal of this test is to get all the tags and list them
*/

const chai   = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('Getting all tags', function() {
    /**
     *This is a pending test 
     *
     */
    it('GET to getAllUserTags(user) -  should display all tags'){
        var data = db
        .query("SELECT tag"  + " FROM post_tags WHERE user ='" + user + "';")
        expect(getAllUserTags.tag).to.be.a('string');
    }
  }