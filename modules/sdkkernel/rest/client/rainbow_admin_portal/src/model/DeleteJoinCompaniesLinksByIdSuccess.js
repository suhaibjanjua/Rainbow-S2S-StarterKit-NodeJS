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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.DeleteJoinCompaniesLinksByIdSuccess = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The DeleteJoinCompaniesLinksByIdSuccess model module.
   * @module model/DeleteJoinCompaniesLinksByIdSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>DeleteJoinCompaniesLinksByIdSuccess</code>.
   * @alias module:model/DeleteJoinCompaniesLinksByIdSuccess
   * @class
   * @param status {String} Deletion status
   * @param id {String} Join company link unique Id
   * @param creationDate {Date} Creation date of the join company link
   * @param createdByAdminId {String} Unique Id of the admin who created the join company link
   * @param createdByAdminLoginEmail {String} LoginEmail of the admin who created the join company link
   * @param maxNumberUsers {Number} Maximum number of users allowed to send a Join company request using this join company link
   * @param expirationDate {Date} Date of expiration of the Join company link
   */
  var exports = function(status, id, creationDate, createdByAdminId, createdByAdminLoginEmail, maxNumberUsers, expirationDate) {
    var _this = this;

    _this['Status'] = status;
    _this['id'] = id;
    _this['creationDate'] = creationDate;
    _this['createdByAdminId'] = createdByAdminId;
    _this['createdByAdminLoginEmail'] = createdByAdminLoginEmail;
    _this['maxNumberUsers'] = maxNumberUsers;
    _this['expirationDate'] = expirationDate;
  };

  /**
   * Constructs a <code>DeleteJoinCompaniesLinksByIdSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteJoinCompaniesLinksByIdSuccess} obj Optional instance to populate.
   * @return {module:model/DeleteJoinCompaniesLinksByIdSuccess} The populated <code>DeleteJoinCompaniesLinksByIdSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('createdByAdminId')) {
        obj['createdByAdminId'] = ApiClient.convertToType(data['createdByAdminId'], 'String');
      }
      if (data.hasOwnProperty('createdByAdminLoginEmail')) {
        obj['createdByAdminLoginEmail'] = ApiClient.convertToType(data['createdByAdminLoginEmail'], 'String');
      }
      if (data.hasOwnProperty('maxNumberUsers')) {
        obj['maxNumberUsers'] = ApiClient.convertToType(data['maxNumberUsers'], 'Number');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Deletion status
   * @member {String} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * Join company link unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Creation date of the join company link
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * Unique Id of the admin who created the join company link
   * @member {String} createdByAdminId
   */
  exports.prototype['createdByAdminId'] = undefined;
  /**
   * LoginEmail of the admin who created the join company link
   * @member {String} createdByAdminLoginEmail
   */
  exports.prototype['createdByAdminLoginEmail'] = undefined;
  /**
   * Maximum number of users allowed to send a Join company request using this join company link
   * @member {Number} maxNumberUsers
   */
  exports.prototype['maxNumberUsers'] = undefined;
  /**
   * Date of expiration of the Join company link
   * @member {Date} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;



  return exports;
}));


