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
    define(['ApiClient', 'model/CreateConversation', 'model/CreateConversationSuccess', 'model/DeleteConversationSuccess', 'model/GetConversationsSuccess', 'model/MarkAllUnreadConversationAsReadSuccess', 'model/SendConversationContentByEmailSuccess', 'model/UpdateConversation', 'model/UpdateConversationSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateConversation'), require('../model/CreateConversationSuccess'), require('../model/DeleteConversationSuccess'), require('../model/GetConversationsSuccess'), require('../model/MarkAllUnreadConversationAsReadSuccess'), require('../model/SendConversationContentByEmailSuccess'), require('../model/UpdateConversation'), require('../model/UpdateConversationSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.ConversationsApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.CreateConversation, root.RainbowEnduserPortal.CreateConversationSuccess, root.RainbowEnduserPortal.DeleteConversationSuccess, root.RainbowEnduserPortal.GetConversationsSuccess, root.RainbowEnduserPortal.MarkAllUnreadConversationAsReadSuccess, root.RainbowEnduserPortal.SendConversationContentByEmailSuccess, root.RainbowEnduserPortal.UpdateConversation, root.RainbowEnduserPortal.UpdateConversationSuccess);
  }
}(this, function(ApiClient, CreateConversation, CreateConversationSuccess, DeleteConversationSuccess, GetConversationsSuccess, MarkAllUnreadConversationAsReadSuccess, SendConversationContentByEmailSuccess, UpdateConversation, UpdateConversationSuccess) {
  'use strict';

  /**
   * Conversations service.
   * @module api/ConversationsApi
   * @version 1.84.0
   */

  /**
   * Constructs a new ConversationsApi. 
   * @alias module:api/ConversationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a conversation
     * This API can be used to create a conversation for a given user with either another rainbow user, a room or with a bot. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Tree kinds of conversations are managed: user to user, user to room and user to bot. Conversation field &#x60;type&#x60; indicates for each conversation if it is related to a user, a room or to a bot.       If the conversation is successfully created, http code 201 is returned. If the conversation already exists, http code 200 is returned.    Peer data and lastMessage information are returned in response (lastMessage information can exist if conversation with messages is deleted and then re-created later).       Example: POST http://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/conversations
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5).
     * @param {module:model/CreateConversation} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateConversationSuccess} and HTTP response
     */
    this.createConversationWithHttpInfo = function(userId, body) {
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createConversation");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createConversation");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateConversationSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/conversations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a conversation
     * This API can be used to create a conversation for a given user with either another rainbow user, a room or with a bot. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       Tree kinds of conversations are managed: user to user, user to room and user to bot. Conversation field &#x60;type&#x60; indicates for each conversation if it is related to a user, a room or to a bot.       If the conversation is successfully created, http code 201 is returned. If the conversation already exists, http code 200 is returned.    Peer data and lastMessage information are returned in response (lastMessage information can exist if conversation with messages is deleted and then re-created later).       Example: POST http://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/conversations
     * @param {String} userId User unique identifier (like 56d0277a0261b53142a5cab5).
     * @param {module:model/CreateConversation} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateConversationSuccess}
     */
    this.createConversation = function(userId, body) {
      return this.createConversationWithHttpInfo(userId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a conversation
     * This API can be used to delete a conversation for a given user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a conversation is deleted using this API, all user&#39;s XMPP resources will receive the following message indicating them that a conversation has been deleted:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;conversation id&#x3D;\&quot;573f1883f8a74ed086816789\&quot; action&#x3D;\&quot;delete\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;       Example: DELETE http://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/conversations/56d85476ebe1b48b115d4311
     * @param {String} userId User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
     * @param {String} conversationId Conversation unique identifier (like 56d0277a0261b53142a5c000).
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteConversationSuccess} and HTTP response
     */
    this.deleteConversationWithHttpInfo = function(userId, conversationId, accept) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteConversation");
      }

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling deleteConversation");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling deleteConversation");
      }


      var pathParams = {
        'userId': userId,
        'conversationId': conversationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'accept': accept
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeleteConversationSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/conversations/{conversationId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a conversation
     * This API can be used to delete a conversation for a given user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a conversation is deleted using this API, all user&#39;s XMPP resources will receive the following message indicating them that a conversation has been deleted:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;conversation id&#x3D;\&quot;573f1883f8a74ed086816789\&quot; action&#x3D;\&quot;delete\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;       Example: DELETE http://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/conversations/56d85476ebe1b48b115d4311
     * @param {String} userId User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
     * @param {String} conversationId Conversation unique identifier (like 56d0277a0261b53142a5c000).
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteConversationSuccess}
     */
    this.deleteConversation = function(userId, conversationId, accept) {
      return this.deleteConversationWithHttpInfo(userId, conversationId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all conversations
     * This API can be used to retrieve the list of user&#39;s conversations. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a client starts, it has to get all conversations using this API.    It is up to clients to manage the set of conversations currently active (when a new conversation is initiated or a conversation is deleted by the user) using the conversations APIs [POST /api/rainbow/enduser/v1.0/users/:userId/conversations][0] and [DELETE /api/rainbow/enduser/v1.0/users/:userId/conversations][1].       This API calls XMPP server for each conversation to get the last IM with the peerId, the date of the last message, the number of unread messages, the number of unreceived messages and the call information if last message is a call log. If no xmpp data has been found, lastMessageText is set to \&quot;\&quot;, lastMessageDate is set to null, unreceivedMessageNumber and unreadMessageNumber are set to 0.       The conversation list is not sorted by the API. Each client has to handle conversations sorting: according to creationDate, lastMessageDate field, call log and presence state, it should be able to rank conversations in the desired order.       Three kinds of conversations are managed: user to user, user to room, and user to bot. Conversation field &#x60;type&#x60; indicates for each conversation if it is related to a user, a room or a bot.       Example: GET http://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/conversations  [0]: #api-enduser_conversations-enduser_users_PostConversations [1]: #api-enduser_conversations-enduser_users_DeleteConversations
     * @param {String} userId User unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetConversationsSuccess} and HTTP response
     */
    this.getConversationsWithHttpInfo = function(userId, accept) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getConversations");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getConversations");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'accept': accept
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetConversationsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/conversations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all conversations
     * This API can be used to retrieve the list of user&#39;s conversations. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a client starts, it has to get all conversations using this API.    It is up to clients to manage the set of conversations currently active (when a new conversation is initiated or a conversation is deleted by the user) using the conversations APIs [POST /api/rainbow/enduser/v1.0/users/:userId/conversations][0] and [DELETE /api/rainbow/enduser/v1.0/users/:userId/conversations][1].       This API calls XMPP server for each conversation to get the last IM with the peerId, the date of the last message, the number of unread messages, the number of unreceived messages and the call information if last message is a call log. If no xmpp data has been found, lastMessageText is set to \&quot;\&quot;, lastMessageDate is set to null, unreceivedMessageNumber and unreadMessageNumber are set to 0.       The conversation list is not sorted by the API. Each client has to handle conversations sorting: according to creationDate, lastMessageDate field, call log and presence state, it should be able to rank conversations in the desired order.       Three kinds of conversations are managed: user to user, user to room, and user to bot. Conversation field &#x60;type&#x60; indicates for each conversation if it is related to a user, a room or a bot.       Example: GET http://openrainbow.com/api/rainbow/enduser/v1.0/users/56d0277a0261b53142a5cab5/conversations  [0]: #api-enduser_conversations-enduser_users_PostConversations [1]: #api-enduser_conversations-enduser_users_DeleteConversations
     * @param {String} userId User unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetConversationsSuccess}
     */
    this.getConversations = function(userId, accept) {
      return this.getConversationsWithHttpInfo(userId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Mark all unread messages in the conversation as read
     * This API can be used to mark all unread messages in a conversation as read. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)
     * @param {String} userId User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
     * @param {String} conversationId Conversation unique identifier (like 56d0277a0261b53142a5c000).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MarkAllUnreadConversationAsReadSuccess} and HTTP response
     */
    this.markAllUnreadConversationAsReadWithHttpInfo = function(userId, conversationId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling markAllUnreadConversationAsRead");
      }

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling markAllUnreadConversationAsRead");
      }


      var pathParams = {
        'userId': userId,
        'conversationId': conversationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = MarkAllUnreadConversationAsReadSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/conversations/{conversationId}/markallread', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Mark all unread messages in the conversation as read
     * This API can be used to mark all unread messages in a conversation as read. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)
     * @param {String} userId User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
     * @param {String} conversationId Conversation unique identifier (like 56d0277a0261b53142a5c000).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MarkAllUnreadConversationAsReadSuccess}
     */
    this.markAllUnreadConversationAsRead = function(userId, conversationId) {
      return this.markAllUnreadConversationAsReadWithHttpInfo(userId, conversationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download a conversation
     * This API can be used to backup a conversation between a rainbow user and another one, or between a user and a room. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)   * Two kinds of conversations are allowed: user to user, user to room. User to bot is not allowed yet. * An email is sent to the endUser email address.  
     * @param {String} userId User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
     * @param {String} conversationId Conversation unique identifier (like 56d0277a0261b53142a5c000).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendConversationContentByEmailSuccess} and HTTP response
     */
    this.sendConversationContentByEmailWithHttpInfo = function(userId, conversationId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling sendConversationContentByEmail");
      }

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling sendConversationContentByEmail");
      }


      var pathParams = {
        'userId': userId,
        'conversationId': conversationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SendConversationContentByEmailSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/conversations/{conversationId}/downloads', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Download a conversation
     * This API can be used to backup a conversation between a rainbow user and another one, or between a user and a room. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)   * Two kinds of conversations are allowed: user to user, user to room. User to bot is not allowed yet. * An email is sent to the endUser email address.  
     * @param {String} userId User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
     * @param {String} conversationId Conversation unique identifier (like 56d0277a0261b53142a5c000).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendConversationContentByEmailSuccess}
     */
    this.sendConversationContentByEmail = function(userId, conversationId) {
      return this.sendConversationContentByEmailWithHttpInfo(userId, conversationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a conversation
     * This API can be used to update a conversation for a given user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a conversation is updated, all user&#39;s XMPP resources will receive the following message, containing the up-to-date conversation data:        &#x60;&#x60;&#x60;html &lt;﻿message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;d7601d6d-30a4-4adc-86be-42705a01f766_3\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;425fc895cac04b079261cee2fdc4f8ad@opentouch.cloud\&quot;            xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;﻿no-store xmlns&#x3D;\&quot;urn:xmpp:hints\&quot;/&gt;        &lt;conversation id&#x3D;\&quot;56d0000a0261b53142a5c022\&quot; action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;&gt;            &lt;peerId&gt;56d0277a0261b53142a5c000&lt;/peerId&gt;            &lt;type&gt;user&lt;/type&gt;            &lt;mute&gt;false&lt;/mute&gt;            &lt;isFavorite&gt;true&lt;/mute&gt;        &lt;/conversation&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;       For legacy reasons, when a conversation is muted/unmuted using this API, all user&#39;s XMPP resources will also receive the following message indicating them that a conversation has been muted/unmuted:    Mute:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;mute conversation&#x3D;\&quot;573f1883f8a74ed086816789\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60; Unmute:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;unmute conversation&#x3D;\&quot;573f1883f8a74ed086816789\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    
     * @param {String} userId User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
     * @param {String} conversationId Conversation unique identifier (like 56d0277a0261b53142a5c000).
     * @param {module:model/UpdateConversation} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateConversationSuccess} and HTTP response
     */
    this.updateConversationWithHttpInfo = function(userId, conversationId, body) {
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateConversation");
      }

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling updateConversation");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateConversation");
      }


      var pathParams = {
        'userId': userId,
        'conversationId': conversationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UpdateConversationSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/conversations/{conversationId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a conversation
     * This API can be used to update a conversation for a given user. This API can only be used by user himself (i.e. userId of logged in user &#x3D; value of userId parameter in URL)       When a conversation is updated, all user&#39;s XMPP resources will receive the following message, containing the up-to-date conversation data:        &#x60;&#x60;&#x60;html &lt;﻿message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;d7601d6d-30a4-4adc-86be-42705a01f766_3\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;425fc895cac04b079261cee2fdc4f8ad@opentouch.cloud\&quot;            xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;﻿no-store xmlns&#x3D;\&quot;urn:xmpp:hints\&quot;/&gt;        &lt;conversation id&#x3D;\&quot;56d0000a0261b53142a5c022\&quot; action&#x3D;\&quot;update\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;&gt;            &lt;peerId&gt;56d0277a0261b53142a5c000&lt;/peerId&gt;            &lt;type&gt;user&lt;/type&gt;            &lt;mute&gt;false&lt;/mute&gt;            &lt;isFavorite&gt;true&lt;/mute&gt;        &lt;/conversation&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;       For legacy reasons, when a conversation is muted/unmuted using this API, all user&#39;s XMPP resources will also receive the following message indicating them that a conversation has been muted/unmuted:    Mute:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;mute conversation&#x3D;\&quot;573f1883f8a74ed086816789\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60; Unmute:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;\&quot;management\&quot; id&#x3D;\&quot;8413b42e-563c-4437-9a53-06f638b5ab69_0\&quot;            from&#x3D;\&quot;pcloud@openrainbow.com/172440802160413612281463752830017532\&quot;            to&#x3D;\&quot;85a456023ad249bea7a0cb1d5b4fb34a@openrainbow.com\&quot; xmlns&#x3D;\&quot;jabber:client\&quot;&gt;        &lt;unmute conversation&#x3D;\&quot;573f1883f8a74ed086816789\&quot; xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;/&gt;    &lt;/message&gt; &#x60;&#x60;&#x60;    
     * @param {String} userId User unique identifier, owner of the conversation (like 56d0277a0261b53142a5cab5)
     * @param {String} conversationId Conversation unique identifier (like 56d0277a0261b53142a5c000).
     * @param {module:model/UpdateConversation} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateConversationSuccess}
     */
    this.updateConversation = function(userId, conversationId, body) {
      return this.updateConversationWithHttpInfo(userId, conversationId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
