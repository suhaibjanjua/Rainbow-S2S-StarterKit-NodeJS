# s2_s_api

S2SApi - JavaScript client for s2_s_api
# Rainbow S2S API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow S2S portal. This portal is dedicated to s2s features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.86.0
- Package version: 1.86.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install s2_s_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your s2_s_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('s2_s_api')` in javascript files from the directory you ran the last command above from.

### git

If the library is hosted at a git repository, e.g. https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var S2SApi = require('s2_s_api');

var defaultClient = S2SApi.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new S2SApi.ConnectionApi()
var opts = {
  'connectionCreate': new S2SApi.ConnectionCreate() // {ConnectionCreate} Connection creation data
};
api.connectionCreate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:4000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*S2SApi.ConnectionApi* | [**connectionCreate**](docs/ConnectionApi.md#connectionCreate) | **POST** /api/rainbow/ucs/v1.0/connections | Create a new user connection
*S2SApi.ConnectionApi* | [**connectionDelete**](docs/ConnectionApi.md#connectionDelete) | **DELETE** /api/rainbow/ucs/v1.0/connections/{id} | Delete a connection
*S2SApi.ConnectionApi* | [**connectionIndex**](docs/ConnectionApi.md#connectionIndex) | **GET** /api/rainbow/ucs/v1.0/connections | List all user connections
*S2SApi.ConnectionApi* | [**connectionShow**](docs/ConnectionApi.md#connectionShow) | **GET** /api/rainbow/ucs/v1.0/connections/{id} | Get the data of a connection
*S2SApi.ConversationApi* | [**conversationChatstate**](docs/ConversationApi.md#conversationChatstate) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/chatstate/{state} | Send a chat state
*S2SApi.MessageApi* | [**messageCreate**](docs/MessageApi.md#messageCreate) | **POST** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages | Send a new message
*S2SApi.MessageApi* | [**messageIndex**](docs/MessageApi.md#messageIndex) | **GET** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages | List the messages of a conversation
*S2SApi.MessageApi* | [**messageReadReceipt**](docs/MessageApi.md#messageReadReceipt) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages/{id}/read | Send a read receipt
*S2SApi.MessageApi* | [**messageReceivedReceipt**](docs/MessageApi.md#messageReceivedReceipt) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/conversations/{cvId}/messages/{id}/received | Send a received receipt
*S2SApi.PresenceApi* | [**presenceShow**](docs/PresenceApi.md#presenceShow) | **GET** /api/rainbow/ucs/v1.0/connections/{cnxId}/presences/{userId} | Probe a user&#39;s presence
*S2SApi.PresenceApi* | [**presenceUpdate**](docs/PresenceApi.md#presenceUpdate) | **PUT** /api/rainbow/ucs/v1.0/connections/{cnxId}/presences | Set the user&#39;s presence
*S2SApi.RoomApi* | [**roomJoin**](docs/RoomApi.md#roomJoin) | **POST** /api/rainbow/ucs/v1.0/connections/{cnxId}/rooms/{roomId}/join | Join a room


## Documentation for Models

 - [S2SApi.Connection](docs/Connection.md)
 - [S2SApi.ConnectionCreate](docs/ConnectionCreate.md)
 - [S2SApi.ConnectionCreateResponse](docs/ConnectionCreateResponse.md)
 - [S2SApi.ConnectionCreateResponseData](docs/ConnectionCreateResponseData.md)
 - [S2SApi.Connections](docs/Connections.md)
 - [S2SApi.Message](docs/Message.md)
 - [S2SApi.MessageCreate](docs/MessageCreate.md)
 - [S2SApi.MessageCreateMessage](docs/MessageCreateMessage.md)
 - [S2SApi.MessageCreateResponse](docs/MessageCreateResponse.md)
 - [S2SApi.MessageCreateResponseData](docs/MessageCreateResponseData.md)
 - [S2SApi.Presence](docs/Presence.md)
 - [S2SApi.PresenceUpdate](docs/PresenceUpdate.md)
 - [S2SApi.ReceiptStatus](docs/ReceiptStatus.md)
 - [S2SApi.RoomStatus](docs/RoomStatus.md)


## Documentation for Authorization



### Bearer


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

