/**
 * Rainbow Application Portal
 * # Rainbow application portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow Application portal. This portal is dedicated to app features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.78.0
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
    factory(root.expect, root.RainbowApplicationPortal);
  }
}(this, function(expect, RainbowApplicationPortal) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
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

  describe('ApplicationsApplicationsRestartAppSuccess', function() {
    it('should create an instance of ApplicationsApplicationsRestartAppSuccess', function() {
      // uncomment below and update the code to test ApplicationsApplicationsRestartAppSuccess
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be.a(RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess);
    });

    it('should have the property appId (base name: "appId")', function() {
      // uncomment below and update the code to test the property appId
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property appSecret (base name: "appSecret")', function() {
      // uncomment below and update the code to test the property appSecret
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property origin (base name: "origin")', function() {
      // uncomment below and update the code to test the property origin
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property latinName (base name: "latin_name")', function() {
      // uncomment below and update the code to test the property latinName
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property dateOfCreation (base name: "dateOfCreation")', function() {
      // uncomment below and update the code to test the property dateOfCreation
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property dateOfDeploymentRequest (base name: "dateOfDeploymentRequest")', function() {
      // uncomment below and update the code to test the property dateOfDeploymentRequest
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property dateOfDeployment (base name: "dateOfDeployment")', function() {
      // uncomment below and update the code to test the property dateOfDeployment
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property activity (base name: "activity")', function() {
      // uncomment below and update the code to test the property activity
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

    it('should have the property env (base name: "env")', function() {
      // uncomment below and update the code to test the property env
      //var instance = new RainbowApplicationPortal.ApplicationsApplicationsRestartAppSuccess();
      //expect(instance).to.be();
    });

  });

}));
