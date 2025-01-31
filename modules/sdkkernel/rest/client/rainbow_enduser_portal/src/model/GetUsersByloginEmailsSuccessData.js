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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.GetUsersByloginEmailsSuccessData = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetUsersByloginEmailsSuccessData model module.
   * @module model/GetUsersByloginEmailsSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>GetUsersByloginEmailsSuccessData</code>.
   * @alias module:model/GetUsersByloginEmailsSuccessData
   * @class
   * @param loginEmail {String} User email address (used for login)
   * @param id {String} User unique identifier
   * @param firstName {String} User first name
   * @param lastName {String} User last name
   * @param jidIm {String} User Jabber IM identifier
   * @param companyId {String} User company unique identifier
   * @param companyName {String} User company name
   * @param lastUpdateDate {Date} Date of last user update (whatever the field updated)
   * @param lastAvatarUpdateDate {Date} Date of last user avatar create/update, null if no avatar
   * @param isTerminated {Boolean} Indicates if the Rainbow account of this user has been deleted
   * @param guestMode {Boolean} Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration.
   */
  var exports = function(loginEmail, id, firstName, lastName, jidIm, companyId, companyName, lastUpdateDate, lastAvatarUpdateDate, isTerminated, guestMode) {
    var _this = this;

    _this['loginEmail'] = loginEmail;
    _this['id'] = id;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['jid_im'] = jidIm;
    _this['companyId'] = companyId;
    _this['companyName'] = companyName;
    _this['lastUpdateDate'] = lastUpdateDate;
    _this['lastAvatarUpdateDate'] = lastAvatarUpdateDate;
    _this['isTerminated'] = isTerminated;
    _this['guestMode'] = guestMode;
  };

  /**
   * Constructs a <code>GetUsersByloginEmailsSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUsersByloginEmailsSuccessData} obj Optional instance to populate.
   * @return {module:model/GetUsersByloginEmailsSuccessData} The populated <code>GetUsersByloginEmailsSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('loginEmail')) {
        obj['loginEmail'] = ApiClient.convertToType(data['loginEmail'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('jid_im')) {
        obj['jid_im'] = ApiClient.convertToType(data['jid_im'], 'String');
      }
      if (data.hasOwnProperty('companyId')) {
        obj['companyId'] = ApiClient.convertToType(data['companyId'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('lastUpdateDate')) {
        obj['lastUpdateDate'] = ApiClient.convertToType(data['lastUpdateDate'], 'Date');
      }
      if (data.hasOwnProperty('lastAvatarUpdateDate')) {
        obj['lastAvatarUpdateDate'] = ApiClient.convertToType(data['lastAvatarUpdateDate'], 'Date');
      }
      if (data.hasOwnProperty('isTerminated')) {
        obj['isTerminated'] = ApiClient.convertToType(data['isTerminated'], 'Boolean');
      }
      if (data.hasOwnProperty('guestMode')) {
        obj['guestMode'] = ApiClient.convertToType(data['guestMode'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * User email address (used for login)
   * @member {String} loginEmail
   */
  exports.prototype['loginEmail'] = undefined;
  /**
   * User unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * User first name
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * User last name
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * User Jabber IM identifier
   * @member {String} jid_im
   */
  exports.prototype['jid_im'] = undefined;
  /**
   * User company unique identifier
   * @member {String} companyId
   */
  exports.prototype['companyId'] = undefined;
  /**
   * User company name
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * Date of last user update (whatever the field updated)
   * @member {Date} lastUpdateDate
   */
  exports.prototype['lastUpdateDate'] = undefined;
  /**
   * Date of last user avatar create/update, null if no avatar
   * @member {Date} lastAvatarUpdateDate
   */
  exports.prototype['lastAvatarUpdateDate'] = undefined;
  /**
   * Indicates if the Rainbow account of this user has been deleted
   * @member {Boolean} isTerminated
   */
  exports.prototype['isTerminated'] = undefined;
  /**
   * Indicated a user embedded in a chat or conference room, as guest, with limited rights until he finalizes his registration.
   * @member {Boolean} guestMode
   */
  exports.prototype['guestMode'] = undefined;



  return exports;
}));


