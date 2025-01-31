/**
 * Rainbow admin portal
 * # Rainbow administrator portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow management portal system. Services are used to manage OT Rainbow system entities  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.82.0
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
    factory(root.expect, root.RainbowAdminPortal);
  }
}(this, function(expect, RainbowAdminPortal) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
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

  describe('AdminPostRainbowOffersSuccess', function() {
    it('should create an instance of AdminPostRainbowOffersSuccess', function() {
      // uncomment below and update the code to test AdminPostRainbowOffersSuccess
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be.a(RainbowAdminPortal.AdminPostRainbowOffersSuccess);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property technicalDescription (base name: "technicalDescription")', function() {
      // uncomment below and update the code to test the property technicalDescription
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "isDefault")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property profileId (base name: "profileId")', function() {
      // uncomment below and update the code to test the property profileId
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property canBeSold (base name: "canBeSold")', function() {
      // uncomment below and update the code to test the property canBeSold
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property businessModel (base name: "businessModel")', function() {
      // uncomment below and update the code to test the property businessModel
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property businessSpecific (base name: "businessSpecific")', function() {
      // uncomment below and update the code to test the property businessSpecific
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property autoSubscribe (base name: "autoSubscribe")', function() {
      // uncomment below and update the code to test the property autoSubscribe
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isExclusive (base name: "isExclusive")', function() {
      // uncomment below and update the code to test the property isExclusive
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isPrepaid (base name: "isPrepaid")', function() {
      // uncomment below and update the code to test the property isPrepaid
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property prepaidDuration (base name: "prepaidDuration")', function() {
      // uncomment below and update the code to test the property prepaidDuration
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property provisioningNeeded (base name: "provisioningNeeded")', function() {
      // uncomment below and update the code to test the property provisioningNeeded
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property zuoraOfferId (base name: "zuoraOfferId")', function() {
      // uncomment below and update the code to test the property zuoraOfferId
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property zuoraProductRatePlanId (base name: "zuoraProductRatePlanId")', function() {
      // uncomment below and update the code to test the property zuoraProductRatePlanId
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property zuoraProductRatePlanChargeId (base name: "zuoraProductRatePlanChargeId")', function() {
      // uncomment below and update the code to test the property zuoraProductRatePlanChargeId
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property hasConference (base name: "hasConference")', function() {
      // uncomment below and update the code to test the property hasConference
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isDemo (base name: "isDemo")', function() {
      // uncomment below and update the code to test the property isDemo
      //var instance = new RainbowAdminPortal.AdminPostRainbowOffersSuccess();
      //expect(instance).to.be();
    });

  });

}));
