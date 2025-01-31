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
    define(['ApiClient', 'model/GetRoomsSuccessConfEndpoints', 'model/GetRoomsSuccessDataConference', 'model/GetRoomsSuccessUsers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetRoomsSuccessConfEndpoints'), require('./GetRoomsSuccessDataConference'), require('./GetRoomsSuccessUsers'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.GetRoomsSuccessData = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.GetRoomsSuccessConfEndpoints, root.RainbowEnduserPortal.GetRoomsSuccessDataConference, root.RainbowEnduserPortal.GetRoomsSuccessUsers);
  }
}(this, function(ApiClient, GetRoomsSuccessConfEndpoints, GetRoomsSuccessDataConference, GetRoomsSuccessUsers) {
  'use strict';



  /**
   * The GetRoomsSuccessData model module.
   * @module model/GetRoomsSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>GetRoomsSuccessData</code>.
   * @alias module:model/GetRoomsSuccessData
   * @class
   * @param id {String} Room unique identifier (like 56d0277a0261b53142a5cab5)
   * @param name {String} Room name.
   * @param visibility {module:model/GetRoomsSuccessData.VisibilityEnum} Public/private group visibility for search
   * @param topic {String} Room topic
   * @param jid {String} Room MUC JID
   * @param creationDate {Date} Creation date of the room (read only, set automatically during room creation)
   * @param creator {String} Rainbow Id of creator
   * @param users {Array.<module:model/GetRoomsSuccessUsers>} List of users members of the room.
   * @param customData {Object} 
   * @param confEndpoints {Array.<module:model/GetRoomsSuccessConfEndpoints>} Conference end point of a room user. This user is always a 'moderator'. Only one confEndPoint per room.
   * @param conference {module:model/GetRoomsSuccessDataConference} 
   * @param guestEmails {Array.<String>} Array of non rainbow users email. The former conference.guestEmails field should be deprecated sooner or later
   * @param disableNotifications {Boolean} When set to true, there is no more notifications to be sent by a room in all cases with text body (user join/leave, conference start/end)
   * @param activeUsersCounter {Number} The number of users with the status 'accepted' or 'invited'. Only available when format=full
   * @param isActive {Boolean} When set to true all room users are invited to share their presence. Else they have to wait an event from XMPP server. This flag is reset when the room is inactive for a while (basically 60 days), and set when the first user share his presence. This flag is read-only.
   * @param autoRegister {String} A user can create a room and not have to register users. He can share instead a public link also called 'public URL'([users public link][0]). According with autoRegister value, if another person uses the link to join the room:   * autoRegister = 'unlock': If this user is not yet registered inside this room, he is automatically included with the status 'accepted' and join the room. * autoRegister = 'lock': If this user is not yet registered inside this room, he can't access to the room. So that he can't join the room. * autoRegister = 'unlock_ack': If this user is not yet registered inside this room, he can't access to the room waiting for the room's owner acknowledgment.   [0]: #api-users_rooms_public_link
   */
  var exports = function(id, name, visibility, topic, jid, creationDate, creator, users, customData, confEndpoints, conference, guestEmails, disableNotifications, activeUsersCounter, isActive, autoRegister) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['visibility'] = visibility;
    _this['topic'] = topic;
    _this['jid'] = jid;
    _this['creationDate'] = creationDate;
    _this['creator'] = creator;
    _this['users'] = users;
    _this['customData'] = customData;
    _this['confEndpoints'] = confEndpoints;
    _this['conference'] = conference;
    _this['guestEmails'] = guestEmails;
    _this['disableNotifications'] = disableNotifications;
    _this['activeUsersCounter'] = activeUsersCounter;
    _this['isActive'] = isActive;
    _this['autoRegister'] = autoRegister;
  };

  /**
   * Constructs a <code>GetRoomsSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRoomsSuccessData} obj Optional instance to populate.
   * @return {module:model/GetRoomsSuccessData} The populated <code>GetRoomsSuccessData</code> instance.
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
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
      if (data.hasOwnProperty('topic')) {
        obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
      }
      if (data.hasOwnProperty('jid')) {
        obj['jid'] = ApiClient.convertToType(data['jid'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = ApiClient.convertToType(data['creator'], 'String');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [GetRoomsSuccessUsers]);
      }
      if (data.hasOwnProperty('customData')) {
        obj['customData'] = ApiClient.convertToType(data['customData'], Object);
      }
      if (data.hasOwnProperty('confEndpoints')) {
        obj['confEndpoints'] = ApiClient.convertToType(data['confEndpoints'], [GetRoomsSuccessConfEndpoints]);
      }
      if (data.hasOwnProperty('conference')) {
        obj['conference'] = GetRoomsSuccessDataConference.constructFromObject(data['conference']);
      }
      if (data.hasOwnProperty('guestEmails')) {
        obj['guestEmails'] = ApiClient.convertToType(data['guestEmails'], ['String']);
      }
      if (data.hasOwnProperty('disableNotifications')) {
        obj['disableNotifications'] = ApiClient.convertToType(data['disableNotifications'], 'Boolean');
      }
      if (data.hasOwnProperty('activeUsersCounter')) {
        obj['activeUsersCounter'] = ApiClient.convertToType(data['activeUsersCounter'], 'Number');
      }
      if (data.hasOwnProperty('isActive')) {
        obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
      }
      if (data.hasOwnProperty('autoRegister')) {
        obj['autoRegister'] = ApiClient.convertToType(data['autoRegister'], 'String');
      }
    }
    return obj;
  }

  /**
   * Room unique identifier (like 56d0277a0261b53142a5cab5)
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Room name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Public/private group visibility for search
   * @member {module:model/GetRoomsSuccessData.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;
  /**
   * Room topic
   * @member {String} topic
   */
  exports.prototype['topic'] = undefined;
  /**
   * Room MUC JID
   * @member {String} jid
   */
  exports.prototype['jid'] = undefined;
  /**
   * Creation date of the room (read only, set automatically during room creation)
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * Rainbow Id of creator
   * @member {String} creator
   */
  exports.prototype['creator'] = undefined;
  /**
   * List of users members of the room.
   * @member {Array.<module:model/GetRoomsSuccessUsers>} users
   */
  exports.prototype['users'] = undefined;
  /**
   * @member {Object} customData
   */
  exports.prototype['customData'] = undefined;
  /**
   * Conference end point of a room user. This user is always a 'moderator'. Only one confEndPoint per room.
   * @member {Array.<module:model/GetRoomsSuccessConfEndpoints>} confEndpoints
   */
  exports.prototype['confEndpoints'] = undefined;
  /**
   * @member {module:model/GetRoomsSuccessDataConference} conference
   */
  exports.prototype['conference'] = undefined;
  /**
   * Array of non rainbow users email. The former conference.guestEmails field should be deprecated sooner or later
   * @member {Array.<String>} guestEmails
   */
  exports.prototype['guestEmails'] = undefined;
  /**
   * When set to true, there is no more notifications to be sent by a room in all cases with text body (user join/leave, conference start/end)
   * @member {Boolean} disableNotifications
   */
  exports.prototype['disableNotifications'] = undefined;
  /**
   * The number of users with the status 'accepted' or 'invited'. Only available when format=full
   * @member {Number} activeUsersCounter
   */
  exports.prototype['activeUsersCounter'] = undefined;
  /**
   * When set to true all room users are invited to share their presence. Else they have to wait an event from XMPP server. This flag is reset when the room is inactive for a while (basically 60 days), and set when the first user share his presence. This flag is read-only.
   * @member {Boolean} isActive
   */
  exports.prototype['isActive'] = undefined;
  /**
   * A user can create a room and not have to register users. He can share instead a public link also called 'public URL'([users public link][0]). According with autoRegister value, if another person uses the link to join the room:   * autoRegister = 'unlock': If this user is not yet registered inside this room, he is automatically included with the status 'accepted' and join the room. * autoRegister = 'lock': If this user is not yet registered inside this room, he can't access to the room. So that he can't join the room. * autoRegister = 'unlock_ack': If this user is not yet registered inside this room, he can't access to the room waiting for the room's owner acknowledgment.   [0]: #api-users_rooms_public_link
   * @member {String} autoRegister
   */
  exports.prototype['autoRegister'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: "private"
     * @const
     */
    "private": "private",
    /**
     * value: "public"
     * @const
     */
    "public": "public"  };


  return exports;
}));


