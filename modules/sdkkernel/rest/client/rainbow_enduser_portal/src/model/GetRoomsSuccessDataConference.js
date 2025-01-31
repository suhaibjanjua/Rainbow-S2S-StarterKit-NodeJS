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
    root.RainbowEnduserPortal.GetRoomsSuccessDataConference = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetRoomsSuccessDataConference model module.
   * @module model/GetRoomsSuccessDataConference
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>GetRoomsSuccessDataConference</code>.
   * @alias module:model/GetRoomsSuccessDataConference
   * @class
   * @param scheduledEndDate {Date} Scheduled meeting end date
   * @param guestEmails {Array.<String>} Array of non rainbow users email
   * @param scheduled {Boolean} Kind of meeting (false: instant meeting, true: scheduled meeting)
   * @param lastUpdateDate {Date} Scheduled meeting creation or update date
   * @param scheduledDuration {Number} Scheduled meeting duration
   * @param mediaType {String} Conference type [pstnAudio, webrtc]
   * @param scheduledStartDate {Date} Scheduled meeting start date
   */
  var exports = function(scheduledEndDate, guestEmails, scheduled, lastUpdateDate, scheduledDuration, mediaType, scheduledStartDate) {
    var _this = this;

    _this['scheduledEndDate'] = scheduledEndDate;
    _this['guestEmails'] = guestEmails;
    _this['scheduled'] = scheduled;
    _this['lastUpdateDate'] = lastUpdateDate;
    _this['scheduledDuration'] = scheduledDuration;
    _this['mediaType'] = mediaType;
    _this['scheduledStartDate'] = scheduledStartDate;
  };

  /**
   * Constructs a <code>GetRoomsSuccessDataConference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRoomsSuccessDataConference} obj Optional instance to populate.
   * @return {module:model/GetRoomsSuccessDataConference} The populated <code>GetRoomsSuccessDataConference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('scheduledEndDate')) {
        obj['scheduledEndDate'] = ApiClient.convertToType(data['scheduledEndDate'], 'Date');
      }
      if (data.hasOwnProperty('guestEmails')) {
        obj['guestEmails'] = ApiClient.convertToType(data['guestEmails'], ['String']);
      }
      if (data.hasOwnProperty('scheduled')) {
        obj['scheduled'] = ApiClient.convertToType(data['scheduled'], 'Boolean');
      }
      if (data.hasOwnProperty('lastUpdateDate')) {
        obj['lastUpdateDate'] = ApiClient.convertToType(data['lastUpdateDate'], 'Date');
      }
      if (data.hasOwnProperty('scheduledDuration')) {
        obj['scheduledDuration'] = ApiClient.convertToType(data['scheduledDuration'], 'Number');
      }
      if (data.hasOwnProperty('mediaType')) {
        obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
      }
      if (data.hasOwnProperty('scheduledStartDate')) {
        obj['scheduledStartDate'] = ApiClient.convertToType(data['scheduledStartDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Scheduled meeting end date
   * @member {Date} scheduledEndDate
   */
  exports.prototype['scheduledEndDate'] = undefined;
  /**
   * Array of non rainbow users email
   * @member {Array.<String>} guestEmails
   */
  exports.prototype['guestEmails'] = undefined;
  /**
   * Kind of meeting (false: instant meeting, true: scheduled meeting)
   * @member {Boolean} scheduled
   */
  exports.prototype['scheduled'] = undefined;
  /**
   * Scheduled meeting creation or update date
   * @member {Date} lastUpdateDate
   */
  exports.prototype['lastUpdateDate'] = undefined;
  /**
   * Scheduled meeting duration
   * @member {Number} scheduledDuration
   */
  exports.prototype['scheduledDuration'] = undefined;
  /**
   * Conference type [pstnAudio, webrtc]
   * @member {String} mediaType
   */
  exports.prototype['mediaType'] = undefined;
  /**
   * Scheduled meeting start date
   * @member {Date} scheduledStartDate
   */
  exports.prototype['scheduledStartDate'] = undefined;



  return exports;
}));


