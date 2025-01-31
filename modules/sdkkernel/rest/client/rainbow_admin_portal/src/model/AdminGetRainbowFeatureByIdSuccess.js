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
    root.RainbowAdminPortal.AdminGetRainbowFeatureByIdSuccess = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AdminGetRainbowFeatureByIdSuccess model module.
   * @module model/AdminGetRainbowFeatureByIdSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>AdminGetRainbowFeatureByIdSuccess</code>.
   * @alias module:model/AdminGetRainbowFeatureByIdSuccess
   * @class
   * @param id {String} Feature unique identifier
   * @param name {String} Feature name
   * @param uniqueRef {String} Feature unique reference (to be used for controls on limitations linked to this feature in server/client code)
   * @param description {String} Feature description
   * @param type {String} Feature limitation type (`boolean`, `number`, `string`, `undefined`)
   * @param creationDate {Date} Feature creation date
   */
  var exports = function(id, name, uniqueRef, description, type, creationDate) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['uniqueRef'] = uniqueRef;
    _this['description'] = description;
    _this['type'] = type;
    _this['creationDate'] = creationDate;
  };

  /**
   * Constructs a <code>AdminGetRainbowFeatureByIdSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdminGetRainbowFeatureByIdSuccess} obj Optional instance to populate.
   * @return {module:model/AdminGetRainbowFeatureByIdSuccess} The populated <code>AdminGetRainbowFeatureByIdSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('uniqueRef')) {
        obj['uniqueRef'] = ApiClient.convertToType(data['uniqueRef'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Feature unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Feature name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Feature unique reference (to be used for controls on limitations linked to this feature in server/client code)
   * @member {String} uniqueRef
   */
  exports.prototype['uniqueRef'] = undefined;
  /**
   * Feature description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Feature limitation type (`boolean`, `number`, `string`, `undefined`)
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Feature creation date
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;



  return exports;
}));


