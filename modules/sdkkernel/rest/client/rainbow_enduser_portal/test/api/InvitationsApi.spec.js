/**
 * Rainbow Enduser portal
 * # Rainbow end user portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow End user portal. This portal is dedicated to end user features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.84.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RainbowEnduserPortal);
  }
}(this, function(expect, RainbowEnduserPortal) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RainbowEnduserPortal.InvitationsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InvitationsApi', function() {
    describe('acceptUserInvitation', function() {
      it('should call acceptUserInvitation successfully', function(done) {
        //uncomment below and update the code to test acceptUserInvitation
        //instance.acceptUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cancelUserInvitation', function() {
      it('should call cancelUserInvitation successfully', function(done) {
        //uncomment below and update the code to test cancelUserInvitation
        //instance.cancelUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUserBulkInvitations', function() {
      it('should call createUserBulkInvitations successfully', function(done) {
        //uncomment below and update the code to test createUserBulkInvitations
        //instance.createUserBulkInvitations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUserInvitation', function() {
      it('should call createUserInvitation successfully', function(done) {
        //uncomment below and update the code to test createUserInvitation
        //instance.createUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('declineUserInvitation', function() {
      it('should call declineUserInvitation successfully', function(done) {
        //uncomment below and update the code to test declineUserInvitation
        //instance.declineUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserInvitation', function() {
      it('should call deleteUserInvitation successfully', function(done) {
        //uncomment below and update the code to test deleteUserInvitation
        //instance.deleteUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllReceivedInvitation', function() {
      it('should call getAllReceivedInvitation successfully', function(done) {
        //uncomment below and update the code to test getAllReceivedInvitation
        //instance.getAllReceivedInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllSentInvition', function() {
      it('should call getAllSentInvition successfully', function(done) {
        //uncomment below and update the code to test getAllSentInvition
        //instance.getAllSentInvition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserInvitation', function() {
      it('should call getUserInvitation successfully', function(done) {
        //uncomment below and update the code to test getUserInvitation
        //instance.getUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resendUserInvitation', function() {
      it('should call resendUserInvitation successfully', function(done) {
        //uncomment below and update the code to test resendUserInvitation
        //instance.resendUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
