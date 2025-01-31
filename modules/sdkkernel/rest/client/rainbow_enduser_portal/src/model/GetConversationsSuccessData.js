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
    root.RainbowEnduserPortal.GetConversationsSuccessData = factory(root.RainbowEnduserPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetConversationsSuccessData model module.
   * @module model/GetConversationsSuccessData
   * @version 1.84.0
   */

  /**
   * Constructs a new <code>GetConversationsSuccessData</code>.
   * @alias module:model/GetConversationsSuccessData
   * @class
   * @param id {String} Conversation unique identifier.
   * @param creationDate {Date} Conversation creation date.
   * @param peerId {String} userId or roomId of the peer involved in the conversation.
   * @param mute {Boolean} true if conversation is muted, false otherwise
   * @param isFavorite {Boolean} Is conversation flagged as favorite.
   * @param type {module:model/GetConversationsSuccessData.TypeEnum} Type of the conversation peer:   * `user` for User to User conversation type, * `room` for User to Room conversation type. * `bot` for User to Bot service conversation type.  
   * @param loginEmail {String} If conversation type is `user`, email address (login) of the peer user
   * @param firstName {String} If conversation type is `user`, first name of the peer user
   * @param lastName {String} If conversation type is `user`, last name of the peer user
   * @param displayName {String} If conversation type is `user`, display name of the peer user (firstName + lastName concatenated on server side)
   * @param jidIm {String} User, Room or Bot Jabber IM identifier
   * @param lastAvatarUpdateDate {String} User last avatar update date
   * @param name {String} If conversation type is `room` or `bot`, name of the peer room/bot
   * @param topic {String} If conversation type is `room`, topic of the peer room
   */
  var exports = function(id, creationDate, peerId, mute, isFavorite, type, loginEmail, firstName, lastName, displayName, jidIm, lastAvatarUpdateDate, name, topic) {
    var _this = this;

    _this['id'] = id;
    _this['creationDate'] = creationDate;
    _this['peerId'] = peerId;
    _this['mute'] = mute;
    _this['isFavorite'] = isFavorite;
    _this['type'] = type;
    _this['loginEmail'] = loginEmail;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['displayName'] = displayName;
    _this['jid_im'] = jidIm;
    _this['lastAvatarUpdateDate'] = lastAvatarUpdateDate;
    _this['name'] = name;
    _this['topic'] = topic;
  };

  /**
   * Constructs a <code>GetConversationsSuccessData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetConversationsSuccessData} obj Optional instance to populate.
   * @return {module:model/GetConversationsSuccessData} The populated <code>GetConversationsSuccessData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('peerId')) {
        obj['peerId'] = ApiClient.convertToType(data['peerId'], 'String');
      }
      if (data.hasOwnProperty('mute')) {
        obj['mute'] = ApiClient.convertToType(data['mute'], 'Boolean');
      }
      if (data.hasOwnProperty('isFavorite')) {
        obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('loginEmail')) {
        obj['loginEmail'] = ApiClient.convertToType(data['loginEmail'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('jid_im')) {
        obj['jid_im'] = ApiClient.convertToType(data['jid_im'], 'String');
      }
      if (data.hasOwnProperty('lastAvatarUpdateDate')) {
        obj['lastAvatarUpdateDate'] = ApiClient.convertToType(data['lastAvatarUpdateDate'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('topic')) {
        obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
      }
      if (data.hasOwnProperty('lastMessageText')) {
        obj['lastMessageText'] = ApiClient.convertToType(data['lastMessageText'], 'String');
      }
      if (data.hasOwnProperty('lastMessageDate')) {
        obj['lastMessageDate'] = ApiClient.convertToType(data['lastMessageDate'], 'Date');
      }
      if (data.hasOwnProperty('unreceivedMessageNumber')) {
        obj['unreceivedMessageNumber'] = ApiClient.convertToType(data['unreceivedMessageNumber'], 'String');
      }
      if (data.hasOwnProperty('unreadMessageNumber')) {
        obj['unreadMessageNumber'] = ApiClient.convertToType(data['unreadMessageNumber'], 'String');
      }
      if (data.hasOwnProperty('call')) {
        obj['call'] = ApiClient.convertToType(data['call'], Object);
      }
    }
    return obj;
  }

  /**
   * Conversation unique identifier.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Conversation creation date.
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * userId or roomId of the peer involved in the conversation.
   * @member {String} peerId
   */
  exports.prototype['peerId'] = undefined;
  /**
   * true if conversation is muted, false otherwise
   * @member {Boolean} mute
   * @default false
   */
  exports.prototype['mute'] = false;
  /**
   * Is conversation flagged as favorite.
   * @member {Boolean} isFavorite
   * @default false
   */
  exports.prototype['isFavorite'] = false;
  /**
   * Type of the conversation peer:   * `user` for User to User conversation type, * `room` for User to Room conversation type. * `bot` for User to Bot service conversation type.  
   * @member {module:model/GetConversationsSuccessData.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * If conversation type is `user`, email address (login) of the peer user
   * @member {String} loginEmail
   */
  exports.prototype['loginEmail'] = undefined;
  /**
   * If conversation type is `user`, first name of the peer user
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * If conversation type is `user`, last name of the peer user
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * If conversation type is `user`, display name of the peer user (firstName + lastName concatenated on server side)
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * User, Room or Bot Jabber IM identifier
   * @member {String} jid_im
   */
  exports.prototype['jid_im'] = undefined;
  /**
   * User last avatar update date
   * @member {String} lastAvatarUpdateDate
   */
  exports.prototype['lastAvatarUpdateDate'] = undefined;
  /**
   * If conversation type is `room` or `bot`, name of the peer room/bot
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * If conversation type is `room`, topic of the peer room
   * @member {String} topic
   */
  exports.prototype['topic'] = undefined;
  /**
   * If available, text of the last message for this conversation (otherwise empty string)
   * @member {String} lastMessageText
   */
  exports.prototype['lastMessageText'] = undefined;
  /**
   * If available, date of the last message for this conversation (otherwise null)
   * @member {Date} lastMessageDate
   */
  exports.prototype['lastMessageDate'] = undefined;
  /**
   * If available, number of unreceived messages for this conversation (otherwise 0)
   * @member {String} unreceivedMessageNumber
   */
  exports.prototype['unreceivedMessageNumber'] = undefined;
  /**
   * If available, number of unread messages for this conversation (otherwise 0)
   * @member {String} unreadMessageNumber
   */
  exports.prototype['unreadMessageNumber'] = undefined;
  /**
   * @member {Object} call
   */
  exports.prototype['call'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "room"
     * @const
     */
    "room": "room",
    /**
     * value: "bot"
     * @const
     */
    "bot": "bot"  };


  return exports;
}));


