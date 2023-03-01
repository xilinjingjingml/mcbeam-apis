/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gsm = (function() {

    /**
     * Namespace gsm.
     * @exports gsm
     * @namespace
     */
    var gsm = {};

    gsm.Rooms = (function() {

        /**
         * Constructs a new Rooms service.
         * @memberof gsm
         * @classdesc Represents a Rooms
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Rooms(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Rooms.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Rooms;

        /**
         * Creates new Rooms service using the specified rpc implementation.
         * @function create
         * @memberof gsm.Rooms
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Rooms} RPC service. Useful where requests and/or responses are streamed.
         */
        Rooms.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link gsm.Rooms#createRoom}.
         * @memberof gsm.Rooms
         * @typedef CreateRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsm.CreateRoomRsp} [response] CreateRoomRsp
         */

        /**
         * Calls CreateRoom.
         * @function createRoom
         * @memberof gsm.Rooms
         * @instance
         * @param {gsm.ICreateRoomReq} request CreateRoomReq message or plain object
         * @param {gsm.Rooms.CreateRoomCallback} callback Node-style callback called with the error, if any, and CreateRoomRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rooms.prototype.createRoom = function createRoom(request, callback) {
            return this.rpcCall(createRoom, $root.gsm.CreateRoomReq, $root.gsm.CreateRoomRsp, request, callback);
        }, "name", { value: "CreateRoom" });

        /**
         * Calls CreateRoom.
         * @function createRoom
         * @memberof gsm.Rooms
         * @instance
         * @param {gsm.ICreateRoomReq} request CreateRoomReq message or plain object
         * @returns {Promise<gsm.CreateRoomRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsm.Rooms#getRoomInfo}.
         * @memberof gsm.Rooms
         * @typedef GetRoomInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsm.GetRoomInfoRsp} [response] GetRoomInfoRsp
         */

        /**
         * Calls GetRoomInfo.
         * @function getRoomInfo
         * @memberof gsm.Rooms
         * @instance
         * @param {gsm.IGetRoomInfoReq} request GetRoomInfoReq message or plain object
         * @param {gsm.Rooms.GetRoomInfoCallback} callback Node-style callback called with the error, if any, and GetRoomInfoRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rooms.prototype.getRoomInfo = function getRoomInfo(request, callback) {
            return this.rpcCall(getRoomInfo, $root.gsm.GetRoomInfoReq, $root.gsm.GetRoomInfoRsp, request, callback);
        }, "name", { value: "GetRoomInfo" });

        /**
         * Calls GetRoomInfo.
         * @function getRoomInfo
         * @memberof gsm.Rooms
         * @instance
         * @param {gsm.IGetRoomInfoReq} request GetRoomInfoReq message or plain object
         * @returns {Promise<gsm.GetRoomInfoRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsm.Rooms#checkRoomExists}.
         * @memberof gsm.Rooms
         * @typedef CheckRoomExistsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsm.CheckRoomExistsRsp} [response] CheckRoomExistsRsp
         */

        /**
         * Calls CheckRoomExists.
         * @function checkRoomExists
         * @memberof gsm.Rooms
         * @instance
         * @param {gsm.ICheckRoomExistsReq} request CheckRoomExistsReq message or plain object
         * @param {gsm.Rooms.CheckRoomExistsCallback} callback Node-style callback called with the error, if any, and CheckRoomExistsRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rooms.prototype.checkRoomExists = function checkRoomExists(request, callback) {
            return this.rpcCall(checkRoomExists, $root.gsm.CheckRoomExistsReq, $root.gsm.CheckRoomExistsRsp, request, callback);
        }, "name", { value: "CheckRoomExists" });

        /**
         * Calls CheckRoomExists.
         * @function checkRoomExists
         * @memberof gsm.Rooms
         * @instance
         * @param {gsm.ICheckRoomExistsReq} request CheckRoomExistsReq message or plain object
         * @returns {Promise<gsm.CheckRoomExistsRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsm.Rooms#getRoomByAlias}.
         * @memberof gsm.Rooms
         * @typedef GetRoomByAliasCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsm.GetRoomByAliasRsp} [response] GetRoomByAliasRsp
         */

        /**
         * Calls GetRoomByAlias.
         * @function getRoomByAlias
         * @memberof gsm.Rooms
         * @instance
         * @param {gsm.IGetRoomByAliasReq} request GetRoomByAliasReq message or plain object
         * @param {gsm.Rooms.GetRoomByAliasCallback} callback Node-style callback called with the error, if any, and GetRoomByAliasRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rooms.prototype.getRoomByAlias = function getRoomByAlias(request, callback) {
            return this.rpcCall(getRoomByAlias, $root.gsm.GetRoomByAliasReq, $root.gsm.GetRoomByAliasRsp, request, callback);
        }, "name", { value: "GetRoomByAlias" });

        /**
         * Calls GetRoomByAlias.
         * @function getRoomByAlias
         * @memberof gsm.Rooms
         * @instance
         * @param {gsm.IGetRoomByAliasReq} request GetRoomByAliasReq message or plain object
         * @returns {Promise<gsm.GetRoomByAliasRsp>} Promise
         * @variation 2
         */

        return Rooms;
    })();

    gsm.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof gsm
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof gsm
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {gsm.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof gsm.Empty
         * @static
         * @param {gsm.IEmpty=} [properties] Properties to set
         * @returns {gsm.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link gsm.Empty.verify|verify} messages.
         * @function encode
         * @memberof gsm.Empty
         * @static
         * @param {gsm.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link gsm.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.Empty
         * @static
         * @param {gsm.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof gsm.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.Empty)
                return object;
            return new $root.gsm.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.Empty
         * @static
         * @param {gsm.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof gsm.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof gsm.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.Empty";
        };

        return Empty;
    })();

    gsm.CreateRoomReq = (function() {

        /**
         * Properties of a CreateRoomReq.
         * @memberof gsm
         * @interface ICreateRoomReq
         * @property {string|null} [gameId] CreateRoomReq gameId
         * @property {string|null} [properties] CreateRoomReq properties
         * @property {string|null} [roomId] CreateRoomReq roomId
         * @property {Object.<string,string>|null} [metadata] CreateRoomReq metadata
         * @property {Array.<string>|null} [labels] CreateRoomReq labels
         * @property {Array.<string>|null} [aliases] CreateRoomReq aliases
         */

        /**
         * Constructs a new CreateRoomReq.
         * @memberof gsm
         * @classdesc Represents a CreateRoomReq.
         * @implements ICreateRoomReq
         * @constructor
         * @param {gsm.ICreateRoomReq=} [properties] Properties to set
         */
        function CreateRoomReq(properties) {
            this.metadata = {};
            this.labels = [];
            this.aliases = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomReq gameId.
         * @member {string} gameId
         * @memberof gsm.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.gameId = "";

        /**
         * CreateRoomReq properties.
         * @member {string} properties
         * @memberof gsm.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.properties = "";

        /**
         * CreateRoomReq roomId.
         * @member {string} roomId
         * @memberof gsm.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.roomId = "";

        /**
         * CreateRoomReq metadata.
         * @member {Object.<string,string>} metadata
         * @memberof gsm.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.metadata = $util.emptyObject;

        /**
         * CreateRoomReq labels.
         * @member {Array.<string>} labels
         * @memberof gsm.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.labels = $util.emptyArray;

        /**
         * CreateRoomReq aliases.
         * @member {Array.<string>} aliases
         * @memberof gsm.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.aliases = $util.emptyArray;

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @function create
         * @memberof gsm.CreateRoomReq
         * @static
         * @param {gsm.ICreateRoomReq=} [properties] Properties to set
         * @returns {gsm.CreateRoomReq} CreateRoomReq instance
         */
        CreateRoomReq.create = function create(properties) {
            return new CreateRoomReq(properties);
        };

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link gsm.CreateRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gsm.CreateRoomReq
         * @static
         * @param {gsm.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameId);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.properties);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomId);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (var keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.labels[i]);
            if (message.aliases != null && message.aliases.length)
                for (var i = 0; i < message.aliases.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.aliases[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link gsm.CreateRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.CreateRoomReq
         * @static
         * @param {gsm.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.CreateRoomReq(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gameId = reader.string();
                        break;
                    }
                case 2: {
                        message.properties = reader.string();
                        break;
                    }
                case 3: {
                        message.roomId = reader.string();
                        break;
                    }
                case 4: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                case 5: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push(reader.string());
                        break;
                    }
                case 6: {
                        if (!(message.aliases && message.aliases.length))
                            message.aliases = [];
                        message.aliases.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomReq message.
         * @function verify
         * @memberof gsm.CreateRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            if (message.properties != null && message.hasOwnProperty("properties"))
                if (!$util.isString(message.properties))
                    return "properties: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                var key = Object.keys(message.metadata);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (var i = 0; i < message.labels.length; ++i)
                    if (!$util.isString(message.labels[i]))
                        return "labels: string[] expected";
            }
            if (message.aliases != null && message.hasOwnProperty("aliases")) {
                if (!Array.isArray(message.aliases))
                    return "aliases: array expected";
                for (var i = 0; i < message.aliases.length; ++i)
                    if (!$util.isString(message.aliases[i]))
                        return "aliases: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.CreateRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.CreateRoomReq} CreateRoomReq
         */
        CreateRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.CreateRoomReq)
                return object;
            var message = new $root.gsm.CreateRoomReq();
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.properties != null)
                message.properties = String(object.properties);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".gsm.CreateRoomReq.metadata: object expected");
                message.metadata = {};
                for (var keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".gsm.CreateRoomReq.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i)
                    message.labels[i] = String(object.labels[i]);
            }
            if (object.aliases) {
                if (!Array.isArray(object.aliases))
                    throw TypeError(".gsm.CreateRoomReq.aliases: array expected");
                message.aliases = [];
                for (var i = 0; i < object.aliases.length; ++i)
                    message.aliases[i] = String(object.aliases[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.CreateRoomReq
         * @static
         * @param {gsm.CreateRoomReq} message CreateRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.labels = [];
                object.aliases = [];
            }
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults) {
                object.gameId = "";
                object.properties = "";
                object.roomId = "";
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.properties != null && message.hasOwnProperty("properties"))
                object.properties = message.properties;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            var keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (var j = 0; j < message.labels.length; ++j)
                    object.labels[j] = message.labels[j];
            }
            if (message.aliases && message.aliases.length) {
                object.aliases = [];
                for (var j = 0; j < message.aliases.length; ++j)
                    object.aliases[j] = message.aliases[j];
            }
            return object;
        };

        /**
         * Converts this CreateRoomReq to JSON.
         * @function toJSON
         * @memberof gsm.CreateRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateRoomReq
         * @function getTypeUrl
         * @memberof gsm.CreateRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.CreateRoomReq";
        };

        return CreateRoomReq;
    })();

    gsm.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof gsm
         * @interface IPlayerInfo
         * @property {string|null} [openid] PlayerInfo openid
         * @property {gsm.PlayerInfo.Status|null} [status] PlayerInfo status
         * @property {number|Long|null} [joinTime] PlayerInfo joinTime
         * @property {number|Long|null} [leaveTime] PlayerInfo leaveTime
         * @property {Object.<string,string>|null} [metadata] PlayerInfo metadata
         * @property {string|null} [nickname] PlayerInfo nickname
         * @property {string|null} [avatar] PlayerInfo avatar
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof gsm
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {gsm.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            this.metadata = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo openid.
         * @member {string} openid
         * @memberof gsm.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.openid = "";

        /**
         * PlayerInfo status.
         * @member {gsm.PlayerInfo.Status} status
         * @memberof gsm.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.status = 0;

        /**
         * PlayerInfo joinTime.
         * @member {number|Long} joinTime
         * @memberof gsm.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.joinTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerInfo leaveTime.
         * @member {number|Long} leaveTime
         * @memberof gsm.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.leaveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerInfo metadata.
         * @member {Object.<string,string>} metadata
         * @memberof gsm.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.metadata = $util.emptyObject;

        /**
         * PlayerInfo nickname.
         * @member {string} nickname
         * @memberof gsm.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.nickname = "";

        /**
         * PlayerInfo avatar.
         * @member {string} avatar
         * @memberof gsm.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.avatar = "";

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof gsm.PlayerInfo
         * @static
         * @param {gsm.IPlayerInfo=} [properties] Properties to set
         * @returns {gsm.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link gsm.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof gsm.PlayerInfo
         * @static
         * @param {gsm.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.joinTime != null && Object.hasOwnProperty.call(message, "joinTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.joinTime);
            if (message.leaveTime != null && Object.hasOwnProperty.call(message, "leaveTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.leaveTime);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (var keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.nickname);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.avatar);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link gsm.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.PlayerInfo
         * @static
         * @param {gsm.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.PlayerInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.openid = reader.string();
                        break;
                    }
                case 2: {
                        message.status = reader.int32();
                        break;
                    }
                case 3: {
                        message.joinTime = reader.int64();
                        break;
                    }
                case 4: {
                        message.leaveTime = reader.int64();
                        break;
                    }
                case 5: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                case 6: {
                        message.nickname = reader.string();
                        break;
                    }
                case 7: {
                        message.avatar = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof gsm.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.joinTime != null && message.hasOwnProperty("joinTime"))
                if (!$util.isInteger(message.joinTime) && !(message.joinTime && $util.isInteger(message.joinTime.low) && $util.isInteger(message.joinTime.high)))
                    return "joinTime: integer|Long expected";
            if (message.leaveTime != null && message.hasOwnProperty("leaveTime"))
                if (!$util.isInteger(message.leaveTime) && !(message.leaveTime && $util.isInteger(message.leaveTime.low) && $util.isInteger(message.leaveTime.high)))
                    return "leaveTime: integer|Long expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                var key = Object.keys(message.metadata);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.PlayerInfo)
                return object;
            var message = new $root.gsm.PlayerInfo();
            if (object.openid != null)
                message.openid = String(object.openid);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "DEFAULT":
            case 0:
                message.status = 0;
                break;
            case "JOINED":
            case 1:
                message.status = 1;
                break;
            case "LEAVED":
            case 2:
                message.status = 2;
                break;
            }
            if (object.joinTime != null)
                if ($util.Long)
                    (message.joinTime = $util.Long.fromValue(object.joinTime)).unsigned = false;
                else if (typeof object.joinTime === "string")
                    message.joinTime = parseInt(object.joinTime, 10);
                else if (typeof object.joinTime === "number")
                    message.joinTime = object.joinTime;
                else if (typeof object.joinTime === "object")
                    message.joinTime = new $util.LongBits(object.joinTime.low >>> 0, object.joinTime.high >>> 0).toNumber();
            if (object.leaveTime != null)
                if ($util.Long)
                    (message.leaveTime = $util.Long.fromValue(object.leaveTime)).unsigned = false;
                else if (typeof object.leaveTime === "string")
                    message.leaveTime = parseInt(object.leaveTime, 10);
                else if (typeof object.leaveTime === "number")
                    message.leaveTime = object.leaveTime;
                else if (typeof object.leaveTime === "object")
                    message.leaveTime = new $util.LongBits(object.leaveTime.low >>> 0, object.leaveTime.high >>> 0).toNumber();
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".gsm.PlayerInfo.metadata: object expected");
                message.metadata = {};
                for (var keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.PlayerInfo
         * @static
         * @param {gsm.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults) {
                object.openid = "";
                object.status = options.enums === String ? "DEFAULT" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.joinTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.joinTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.leaveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.leaveTime = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.avatar = "";
            }
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.gsm.PlayerInfo.Status[message.status] === undefined ? message.status : $root.gsm.PlayerInfo.Status[message.status] : message.status;
            if (message.joinTime != null && message.hasOwnProperty("joinTime"))
                if (typeof message.joinTime === "number")
                    object.joinTime = options.longs === String ? String(message.joinTime) : message.joinTime;
                else
                    object.joinTime = options.longs === String ? $util.Long.prototype.toString.call(message.joinTime) : options.longs === Number ? new $util.LongBits(message.joinTime.low >>> 0, message.joinTime.high >>> 0).toNumber() : message.joinTime;
            if (message.leaveTime != null && message.hasOwnProperty("leaveTime"))
                if (typeof message.leaveTime === "number")
                    object.leaveTime = options.longs === String ? String(message.leaveTime) : message.leaveTime;
                else
                    object.leaveTime = options.longs === String ? $util.Long.prototype.toString.call(message.leaveTime) : options.longs === Number ? new $util.LongBits(message.leaveTime.low >>> 0, message.leaveTime.high >>> 0).toNumber() : message.leaveTime;
            var keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof gsm.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerInfo
         * @function getTypeUrl
         * @memberof gsm.PlayerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.PlayerInfo";
        };

        /**
         * Status enum.
         * @name gsm.PlayerInfo.Status
         * @enum {number}
         * @property {number} DEFAULT=0 DEFAULT value
         * @property {number} JOINED=1 JOINED value
         * @property {number} LEAVED=2 LEAVED value
         */
        PlayerInfo.Status = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "JOINED"] = 1;
            values[valuesById[2] = "LEAVED"] = 2;
            return values;
        })();

        return PlayerInfo;
    })();

    gsm.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof gsm
         * @interface IRoomInfo
         * @property {string|null} [roomId] RoomInfo roomId
         * @property {string|null} [serverId] RoomInfo serverId
         * @property {string|null} [gameGid] RoomInfo gameGid
         * @property {string|null} [matchCode] RoomInfo matchCode
         * @property {number|null} [maxPlayerNum] RoomInfo maxPlayerNum
         * @property {string|null} [owner] RoomInfo owner
         * @property {string|null} [properties] RoomInfo properties
         * @property {Object.<string,gsm.IPlayerInfo>|null} [players] RoomInfo players
         * @property {number|Long|null} [createTime] RoomInfo createTime
         * @property {Array.<string>|null} [labels] RoomInfo labels
         * @property {Array.<string>|null} [aliases] RoomInfo aliases
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof gsm
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {gsm.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            this.players = {};
            this.labels = [];
            this.aliases = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo roomId.
         * @member {string} roomId
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomId = "";

        /**
         * RoomInfo serverId.
         * @member {string} serverId
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.serverId = "";

        /**
         * RoomInfo gameGid.
         * @member {string} gameGid
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.gameGid = "";

        /**
         * RoomInfo matchCode.
         * @member {string} matchCode
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.matchCode = "";

        /**
         * RoomInfo maxPlayerNum.
         * @member {number} maxPlayerNum
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.maxPlayerNum = 0;

        /**
         * RoomInfo owner.
         * @member {string} owner
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.owner = "";

        /**
         * RoomInfo properties.
         * @member {string} properties
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.properties = "";

        /**
         * RoomInfo players.
         * @member {Object.<string,gsm.IPlayerInfo>} players
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.players = $util.emptyObject;

        /**
         * RoomInfo createTime.
         * @member {number|Long} createTime
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomInfo labels.
         * @member {Array.<string>} labels
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.labels = $util.emptyArray;

        /**
         * RoomInfo aliases.
         * @member {Array.<string>} aliases
         * @memberof gsm.RoomInfo
         * @instance
         */
        RoomInfo.prototype.aliases = $util.emptyArray;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof gsm.RoomInfo
         * @static
         * @param {gsm.IRoomInfo=} [properties] Properties to set
         * @returns {gsm.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gsm.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof gsm.RoomInfo
         * @static
         * @param {gsm.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverId);
            if (message.gameGid != null && Object.hasOwnProperty.call(message, "gameGid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameGid);
            if (message.matchCode != null && Object.hasOwnProperty.call(message, "matchCode"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.matchCode);
            if (message.maxPlayerNum != null && Object.hasOwnProperty.call(message, "maxPlayerNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maxPlayerNum);
            if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.owner);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.properties);
            if (message.players != null && Object.hasOwnProperty.call(message, "players"))
                for (var keys = Object.keys(message.players), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.gsm.PlayerInfo.encode(message.players[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.createTime);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.labels[i]);
            if (message.aliases != null && message.aliases.length)
                for (var i = 0; i < message.aliases.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.aliases[i]);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link gsm.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.RoomInfo
         * @static
         * @param {gsm.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.RoomInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.serverId = reader.string();
                        break;
                    }
                case 3: {
                        message.gameGid = reader.string();
                        break;
                    }
                case 4: {
                        message.matchCode = reader.string();
                        break;
                    }
                case 5: {
                        message.maxPlayerNum = reader.int32();
                        break;
                    }
                case 6: {
                        message.owner = reader.string();
                        break;
                    }
                case 7: {
                        message.properties = reader.string();
                        break;
                    }
                case 8: {
                        if (message.players === $util.emptyObject)
                            message.players = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.gsm.PlayerInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.players[key] = value;
                        break;
                    }
                case 10: {
                        message.createTime = reader.int64();
                        break;
                    }
                case 11: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push(reader.string());
                        break;
                    }
                case 12: {
                        if (!(message.aliases && message.aliases.length))
                            message.aliases = [];
                        message.aliases.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof gsm.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                if (!$util.isString(message.gameGid))
                    return "gameGid: string expected";
            if (message.matchCode != null && message.hasOwnProperty("matchCode"))
                if (!$util.isString(message.matchCode))
                    return "matchCode: string expected";
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                if (!$util.isInteger(message.maxPlayerNum))
                    return "maxPlayerNum: integer expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isString(message.owner))
                    return "owner: string expected";
            if (message.properties != null && message.hasOwnProperty("properties"))
                if (!$util.isString(message.properties))
                    return "properties: string expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!$util.isObject(message.players))
                    return "players: object expected";
                var key = Object.keys(message.players);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.gsm.PlayerInfo.verify(message.players[key[i]]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (var i = 0; i < message.labels.length; ++i)
                    if (!$util.isString(message.labels[i]))
                        return "labels: string[] expected";
            }
            if (message.aliases != null && message.hasOwnProperty("aliases")) {
                if (!Array.isArray(message.aliases))
                    return "aliases: array expected";
                for (var i = 0; i < message.aliases.length; ++i)
                    if (!$util.isString(message.aliases[i]))
                        return "aliases: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.RoomInfo)
                return object;
            var message = new $root.gsm.RoomInfo();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.gameGid != null)
                message.gameGid = String(object.gameGid);
            if (object.matchCode != null)
                message.matchCode = String(object.matchCode);
            if (object.maxPlayerNum != null)
                message.maxPlayerNum = object.maxPlayerNum | 0;
            if (object.owner != null)
                message.owner = String(object.owner);
            if (object.properties != null)
                message.properties = String(object.properties);
            if (object.players) {
                if (typeof object.players !== "object")
                    throw TypeError(".gsm.RoomInfo.players: object expected");
                message.players = {};
                for (var keys = Object.keys(object.players), i = 0; i < keys.length; ++i) {
                    if (typeof object.players[keys[i]] !== "object")
                        throw TypeError(".gsm.RoomInfo.players: object expected");
                    message.players[keys[i]] = $root.gsm.PlayerInfo.fromObject(object.players[keys[i]]);
                }
            }
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".gsm.RoomInfo.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i)
                    message.labels[i] = String(object.labels[i]);
            }
            if (object.aliases) {
                if (!Array.isArray(object.aliases))
                    throw TypeError(".gsm.RoomInfo.aliases: array expected");
                message.aliases = [];
                for (var i = 0; i < object.aliases.length; ++i)
                    message.aliases[i] = String(object.aliases[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.RoomInfo
         * @static
         * @param {gsm.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.labels = [];
                object.aliases = [];
            }
            if (options.objects || options.defaults)
                object.players = {};
            if (options.defaults) {
                object.roomId = "";
                object.serverId = "";
                object.gameGid = "";
                object.matchCode = "";
                object.maxPlayerNum = 0;
                object.owner = "";
                object.properties = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                object.gameGid = message.gameGid;
            if (message.matchCode != null && message.hasOwnProperty("matchCode"))
                object.matchCode = message.matchCode;
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                object.maxPlayerNum = message.maxPlayerNum;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.properties != null && message.hasOwnProperty("properties"))
                object.properties = message.properties;
            var keys2;
            if (message.players && (keys2 = Object.keys(message.players)).length) {
                object.players = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.players[keys2[j]] = $root.gsm.PlayerInfo.toObject(message.players[keys2[j]], options);
            }
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (var j = 0; j < message.labels.length; ++j)
                    object.labels[j] = message.labels[j];
            }
            if (message.aliases && message.aliases.length) {
                object.aliases = [];
                for (var j = 0; j < message.aliases.length; ++j)
                    object.aliases[j] = message.aliases[j];
            }
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof gsm.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomInfo
         * @function getTypeUrl
         * @memberof gsm.RoomInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.RoomInfo";
        };

        return RoomInfo;
    })();

    gsm.CreateRoomRsp = (function() {

        /**
         * Properties of a CreateRoomRsp.
         * @memberof gsm
         * @interface ICreateRoomRsp
         * @property {string|null} [err] CreateRoomRsp err
         * @property {gsm.IRoomInfo|null} [room] CreateRoomRsp room
         */

        /**
         * Constructs a new CreateRoomRsp.
         * @memberof gsm
         * @classdesc Represents a CreateRoomRsp.
         * @implements ICreateRoomRsp
         * @constructor
         * @param {gsm.ICreateRoomRsp=} [properties] Properties to set
         */
        function CreateRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomRsp err.
         * @member {string} err
         * @memberof gsm.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.err = "";

        /**
         * CreateRoomRsp room.
         * @member {gsm.IRoomInfo|null|undefined} room
         * @memberof gsm.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.room = null;

        /**
         * Creates a new CreateRoomRsp instance using the specified properties.
         * @function create
         * @memberof gsm.CreateRoomRsp
         * @static
         * @param {gsm.ICreateRoomRsp=} [properties] Properties to set
         * @returns {gsm.CreateRoomRsp} CreateRoomRsp instance
         */
        CreateRoomRsp.create = function create(properties) {
            return new CreateRoomRsp(properties);
        };

        /**
         * Encodes the specified CreateRoomRsp message. Does not implicitly {@link gsm.CreateRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gsm.CreateRoomRsp
         * @static
         * @param {gsm.ICreateRoomRsp} message CreateRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.gsm.RoomInfo.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateRoomRsp message, length delimited. Does not implicitly {@link gsm.CreateRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.CreateRoomRsp
         * @static
         * @param {gsm.ICreateRoomRsp} message CreateRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.CreateRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.CreateRoomRsp} CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.CreateRoomRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
                        break;
                    }
                case 2: {
                        message.room = $root.gsm.RoomInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.CreateRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.CreateRoomRsp} CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomRsp message.
         * @function verify
         * @memberof gsm.CreateRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.gsm.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates a CreateRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.CreateRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.CreateRoomRsp} CreateRoomRsp
         */
        CreateRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.CreateRoomRsp)
                return object;
            var message = new $root.gsm.CreateRoomRsp();
            if (object.err != null)
                message.err = String(object.err);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".gsm.CreateRoomRsp.room: object expected");
                message.room = $root.gsm.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.CreateRoomRsp
         * @static
         * @param {gsm.CreateRoomRsp} message CreateRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err = "";
                object.room = null;
            }
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.gsm.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this CreateRoomRsp to JSON.
         * @function toJSON
         * @memberof gsm.CreateRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateRoomRsp
         * @function getTypeUrl
         * @memberof gsm.CreateRoomRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRoomRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.CreateRoomRsp";
        };

        return CreateRoomRsp;
    })();

    gsm.CheckRoomExistsReq = (function() {

        /**
         * Properties of a CheckRoomExistsReq.
         * @memberof gsm
         * @interface ICheckRoomExistsReq
         * @property {string|null} [roomId] CheckRoomExistsReq roomId
         * @property {string|null} [serverId] CheckRoomExistsReq serverId
         * @property {string|null} [gameGid] CheckRoomExistsReq gameGid
         */

        /**
         * Constructs a new CheckRoomExistsReq.
         * @memberof gsm
         * @classdesc Represents a CheckRoomExistsReq.
         * @implements ICheckRoomExistsReq
         * @constructor
         * @param {gsm.ICheckRoomExistsReq=} [properties] Properties to set
         */
        function CheckRoomExistsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckRoomExistsReq roomId.
         * @member {string} roomId
         * @memberof gsm.CheckRoomExistsReq
         * @instance
         */
        CheckRoomExistsReq.prototype.roomId = "";

        /**
         * CheckRoomExistsReq serverId.
         * @member {string} serverId
         * @memberof gsm.CheckRoomExistsReq
         * @instance
         */
        CheckRoomExistsReq.prototype.serverId = "";

        /**
         * CheckRoomExistsReq gameGid.
         * @member {string} gameGid
         * @memberof gsm.CheckRoomExistsReq
         * @instance
         */
        CheckRoomExistsReq.prototype.gameGid = "";

        /**
         * Creates a new CheckRoomExistsReq instance using the specified properties.
         * @function create
         * @memberof gsm.CheckRoomExistsReq
         * @static
         * @param {gsm.ICheckRoomExistsReq=} [properties] Properties to set
         * @returns {gsm.CheckRoomExistsReq} CheckRoomExistsReq instance
         */
        CheckRoomExistsReq.create = function create(properties) {
            return new CheckRoomExistsReq(properties);
        };

        /**
         * Encodes the specified CheckRoomExistsReq message. Does not implicitly {@link gsm.CheckRoomExistsReq.verify|verify} messages.
         * @function encode
         * @memberof gsm.CheckRoomExistsReq
         * @static
         * @param {gsm.ICheckRoomExistsReq} message CheckRoomExistsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckRoomExistsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverId);
            if (message.gameGid != null && Object.hasOwnProperty.call(message, "gameGid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameGid);
            return writer;
        };

        /**
         * Encodes the specified CheckRoomExistsReq message, length delimited. Does not implicitly {@link gsm.CheckRoomExistsReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.CheckRoomExistsReq
         * @static
         * @param {gsm.ICheckRoomExistsReq} message CheckRoomExistsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckRoomExistsReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckRoomExistsReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.CheckRoomExistsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.CheckRoomExistsReq} CheckRoomExistsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckRoomExistsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.CheckRoomExistsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.serverId = reader.string();
                        break;
                    }
                case 3: {
                        message.gameGid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckRoomExistsReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.CheckRoomExistsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.CheckRoomExistsReq} CheckRoomExistsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckRoomExistsReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckRoomExistsReq message.
         * @function verify
         * @memberof gsm.CheckRoomExistsReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckRoomExistsReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                if (!$util.isString(message.gameGid))
                    return "gameGid: string expected";
            return null;
        };

        /**
         * Creates a CheckRoomExistsReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.CheckRoomExistsReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.CheckRoomExistsReq} CheckRoomExistsReq
         */
        CheckRoomExistsReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.CheckRoomExistsReq)
                return object;
            var message = new $root.gsm.CheckRoomExistsReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.gameGid != null)
                message.gameGid = String(object.gameGid);
            return message;
        };

        /**
         * Creates a plain object from a CheckRoomExistsReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.CheckRoomExistsReq
         * @static
         * @param {gsm.CheckRoomExistsReq} message CheckRoomExistsReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckRoomExistsReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                object.serverId = "";
                object.gameGid = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                object.gameGid = message.gameGid;
            return object;
        };

        /**
         * Converts this CheckRoomExistsReq to JSON.
         * @function toJSON
         * @memberof gsm.CheckRoomExistsReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckRoomExistsReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CheckRoomExistsReq
         * @function getTypeUrl
         * @memberof gsm.CheckRoomExistsReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CheckRoomExistsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.CheckRoomExistsReq";
        };

        return CheckRoomExistsReq;
    })();

    gsm.CheckRoomExistsRsp = (function() {

        /**
         * Properties of a CheckRoomExistsRsp.
         * @memberof gsm
         * @interface ICheckRoomExistsRsp
         * @property {boolean|null} [exists] CheckRoomExistsRsp exists
         */

        /**
         * Constructs a new CheckRoomExistsRsp.
         * @memberof gsm
         * @classdesc Represents a CheckRoomExistsRsp.
         * @implements ICheckRoomExistsRsp
         * @constructor
         * @param {gsm.ICheckRoomExistsRsp=} [properties] Properties to set
         */
        function CheckRoomExistsRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckRoomExistsRsp exists.
         * @member {boolean} exists
         * @memberof gsm.CheckRoomExistsRsp
         * @instance
         */
        CheckRoomExistsRsp.prototype.exists = false;

        /**
         * Creates a new CheckRoomExistsRsp instance using the specified properties.
         * @function create
         * @memberof gsm.CheckRoomExistsRsp
         * @static
         * @param {gsm.ICheckRoomExistsRsp=} [properties] Properties to set
         * @returns {gsm.CheckRoomExistsRsp} CheckRoomExistsRsp instance
         */
        CheckRoomExistsRsp.create = function create(properties) {
            return new CheckRoomExistsRsp(properties);
        };

        /**
         * Encodes the specified CheckRoomExistsRsp message. Does not implicitly {@link gsm.CheckRoomExistsRsp.verify|verify} messages.
         * @function encode
         * @memberof gsm.CheckRoomExistsRsp
         * @static
         * @param {gsm.ICheckRoomExistsRsp} message CheckRoomExistsRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckRoomExistsRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.exists != null && Object.hasOwnProperty.call(message, "exists"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.exists);
            return writer;
        };

        /**
         * Encodes the specified CheckRoomExistsRsp message, length delimited. Does not implicitly {@link gsm.CheckRoomExistsRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.CheckRoomExistsRsp
         * @static
         * @param {gsm.ICheckRoomExistsRsp} message CheckRoomExistsRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckRoomExistsRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckRoomExistsRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.CheckRoomExistsRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.CheckRoomExistsRsp} CheckRoomExistsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckRoomExistsRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.CheckRoomExistsRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.exists = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckRoomExistsRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.CheckRoomExistsRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.CheckRoomExistsRsp} CheckRoomExistsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckRoomExistsRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckRoomExistsRsp message.
         * @function verify
         * @memberof gsm.CheckRoomExistsRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckRoomExistsRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.exists != null && message.hasOwnProperty("exists"))
                if (typeof message.exists !== "boolean")
                    return "exists: boolean expected";
            return null;
        };

        /**
         * Creates a CheckRoomExistsRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.CheckRoomExistsRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.CheckRoomExistsRsp} CheckRoomExistsRsp
         */
        CheckRoomExistsRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.CheckRoomExistsRsp)
                return object;
            var message = new $root.gsm.CheckRoomExistsRsp();
            if (object.exists != null)
                message.exists = Boolean(object.exists);
            return message;
        };

        /**
         * Creates a plain object from a CheckRoomExistsRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.CheckRoomExistsRsp
         * @static
         * @param {gsm.CheckRoomExistsRsp} message CheckRoomExistsRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckRoomExistsRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.exists = false;
            if (message.exists != null && message.hasOwnProperty("exists"))
                object.exists = message.exists;
            return object;
        };

        /**
         * Converts this CheckRoomExistsRsp to JSON.
         * @function toJSON
         * @memberof gsm.CheckRoomExistsRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckRoomExistsRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CheckRoomExistsRsp
         * @function getTypeUrl
         * @memberof gsm.CheckRoomExistsRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CheckRoomExistsRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.CheckRoomExistsRsp";
        };

        return CheckRoomExistsRsp;
    })();

    gsm.GetRoomInfoReq = (function() {

        /**
         * Properties of a GetRoomInfoReq.
         * @memberof gsm
         * @interface IGetRoomInfoReq
         * @property {string|null} [roomId] GetRoomInfoReq roomId
         * @property {string|null} [serverId] GetRoomInfoReq serverId
         */

        /**
         * Constructs a new GetRoomInfoReq.
         * @memberof gsm
         * @classdesc Represents a GetRoomInfoReq.
         * @implements IGetRoomInfoReq
         * @constructor
         * @param {gsm.IGetRoomInfoReq=} [properties] Properties to set
         */
        function GetRoomInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoomInfoReq roomId.
         * @member {string} roomId
         * @memberof gsm.GetRoomInfoReq
         * @instance
         */
        GetRoomInfoReq.prototype.roomId = "";

        /**
         * GetRoomInfoReq serverId.
         * @member {string} serverId
         * @memberof gsm.GetRoomInfoReq
         * @instance
         */
        GetRoomInfoReq.prototype.serverId = "";

        /**
         * Creates a new GetRoomInfoReq instance using the specified properties.
         * @function create
         * @memberof gsm.GetRoomInfoReq
         * @static
         * @param {gsm.IGetRoomInfoReq=} [properties] Properties to set
         * @returns {gsm.GetRoomInfoReq} GetRoomInfoReq instance
         */
        GetRoomInfoReq.create = function create(properties) {
            return new GetRoomInfoReq(properties);
        };

        /**
         * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link gsm.GetRoomInfoReq.verify|verify} messages.
         * @function encode
         * @memberof gsm.GetRoomInfoReq
         * @static
         * @param {gsm.IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverId);
            return writer;
        };

        /**
         * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link gsm.GetRoomInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.GetRoomInfoReq
         * @static
         * @param {gsm.IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.GetRoomInfoReq} GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.GetRoomInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.serverId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.GetRoomInfoReq} GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoomInfoReq message.
         * @function verify
         * @memberof gsm.GetRoomInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            return null;
        };

        /**
         * Creates a GetRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.GetRoomInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.GetRoomInfoReq} GetRoomInfoReq
         */
        GetRoomInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.GetRoomInfoReq)
                return object;
            var message = new $root.gsm.GetRoomInfoReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            return message;
        };

        /**
         * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.GetRoomInfoReq
         * @static
         * @param {gsm.GetRoomInfoReq} message GetRoomInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                object.serverId = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            return object;
        };

        /**
         * Converts this GetRoomInfoReq to JSON.
         * @function toJSON
         * @memberof gsm.GetRoomInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRoomInfoReq
         * @function getTypeUrl
         * @memberof gsm.GetRoomInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRoomInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.GetRoomInfoReq";
        };

        return GetRoomInfoReq;
    })();

    gsm.GetRoomInfoRsp = (function() {

        /**
         * Properties of a GetRoomInfoRsp.
         * @memberof gsm
         * @interface IGetRoomInfoRsp
         * @property {string|null} [err] GetRoomInfoRsp err
         * @property {gsm.IRoomInfo|null} [room] GetRoomInfoRsp room
         */

        /**
         * Constructs a new GetRoomInfoRsp.
         * @memberof gsm
         * @classdesc Represents a GetRoomInfoRsp.
         * @implements IGetRoomInfoRsp
         * @constructor
         * @param {gsm.IGetRoomInfoRsp=} [properties] Properties to set
         */
        function GetRoomInfoRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoomInfoRsp err.
         * @member {string} err
         * @memberof gsm.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.err = "";

        /**
         * GetRoomInfoRsp room.
         * @member {gsm.IRoomInfo|null|undefined} room
         * @memberof gsm.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.room = null;

        /**
         * Creates a new GetRoomInfoRsp instance using the specified properties.
         * @function create
         * @memberof gsm.GetRoomInfoRsp
         * @static
         * @param {gsm.IGetRoomInfoRsp=} [properties] Properties to set
         * @returns {gsm.GetRoomInfoRsp} GetRoomInfoRsp instance
         */
        GetRoomInfoRsp.create = function create(properties) {
            return new GetRoomInfoRsp(properties);
        };

        /**
         * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link gsm.GetRoomInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof gsm.GetRoomInfoRsp
         * @static
         * @param {gsm.IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.gsm.RoomInfo.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link gsm.GetRoomInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.GetRoomInfoRsp
         * @static
         * @param {gsm.IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.GetRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.GetRoomInfoRsp} GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.GetRoomInfoRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
                        break;
                    }
                case 2: {
                        message.room = $root.gsm.RoomInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.GetRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.GetRoomInfoRsp} GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoomInfoRsp message.
         * @function verify
         * @memberof gsm.GetRoomInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.gsm.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates a GetRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.GetRoomInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.GetRoomInfoRsp} GetRoomInfoRsp
         */
        GetRoomInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.GetRoomInfoRsp)
                return object;
            var message = new $root.gsm.GetRoomInfoRsp();
            if (object.err != null)
                message.err = String(object.err);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".gsm.GetRoomInfoRsp.room: object expected");
                message.room = $root.gsm.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.GetRoomInfoRsp
         * @static
         * @param {gsm.GetRoomInfoRsp} message GetRoomInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err = "";
                object.room = null;
            }
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.gsm.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this GetRoomInfoRsp to JSON.
         * @function toJSON
         * @memberof gsm.GetRoomInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRoomInfoRsp
         * @function getTypeUrl
         * @memberof gsm.GetRoomInfoRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRoomInfoRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.GetRoomInfoRsp";
        };

        return GetRoomInfoRsp;
    })();

    gsm.GetRoomByAliasReq = (function() {

        /**
         * Properties of a GetRoomByAliasReq.
         * @memberof gsm
         * @interface IGetRoomByAliasReq
         */

        /**
         * Constructs a new GetRoomByAliasReq.
         * @memberof gsm
         * @classdesc Represents a GetRoomByAliasReq.
         * @implements IGetRoomByAliasReq
         * @constructor
         * @param {gsm.IGetRoomByAliasReq=} [properties] Properties to set
         */
        function GetRoomByAliasReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetRoomByAliasReq instance using the specified properties.
         * @function create
         * @memberof gsm.GetRoomByAliasReq
         * @static
         * @param {gsm.IGetRoomByAliasReq=} [properties] Properties to set
         * @returns {gsm.GetRoomByAliasReq} GetRoomByAliasReq instance
         */
        GetRoomByAliasReq.create = function create(properties) {
            return new GetRoomByAliasReq(properties);
        };

        /**
         * Encodes the specified GetRoomByAliasReq message. Does not implicitly {@link gsm.GetRoomByAliasReq.verify|verify} messages.
         * @function encode
         * @memberof gsm.GetRoomByAliasReq
         * @static
         * @param {gsm.IGetRoomByAliasReq} message GetRoomByAliasReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomByAliasReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetRoomByAliasReq message, length delimited. Does not implicitly {@link gsm.GetRoomByAliasReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.GetRoomByAliasReq
         * @static
         * @param {gsm.IGetRoomByAliasReq} message GetRoomByAliasReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomByAliasReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomByAliasReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.GetRoomByAliasReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.GetRoomByAliasReq} GetRoomByAliasReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomByAliasReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.GetRoomByAliasReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoomByAliasReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.GetRoomByAliasReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.GetRoomByAliasReq} GetRoomByAliasReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomByAliasReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoomByAliasReq message.
         * @function verify
         * @memberof gsm.GetRoomByAliasReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomByAliasReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetRoomByAliasReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.GetRoomByAliasReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.GetRoomByAliasReq} GetRoomByAliasReq
         */
        GetRoomByAliasReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.GetRoomByAliasReq)
                return object;
            return new $root.gsm.GetRoomByAliasReq();
        };

        /**
         * Creates a plain object from a GetRoomByAliasReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.GetRoomByAliasReq
         * @static
         * @param {gsm.GetRoomByAliasReq} message GetRoomByAliasReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomByAliasReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetRoomByAliasReq to JSON.
         * @function toJSON
         * @memberof gsm.GetRoomByAliasReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomByAliasReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRoomByAliasReq
         * @function getTypeUrl
         * @memberof gsm.GetRoomByAliasReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRoomByAliasReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.GetRoomByAliasReq";
        };

        return GetRoomByAliasReq;
    })();

    gsm.GetRoomByAliasRsp = (function() {

        /**
         * Properties of a GetRoomByAliasRsp.
         * @memberof gsm
         * @interface IGetRoomByAliasRsp
         */

        /**
         * Constructs a new GetRoomByAliasRsp.
         * @memberof gsm
         * @classdesc Represents a GetRoomByAliasRsp.
         * @implements IGetRoomByAliasRsp
         * @constructor
         * @param {gsm.IGetRoomByAliasRsp=} [properties] Properties to set
         */
        function GetRoomByAliasRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetRoomByAliasRsp instance using the specified properties.
         * @function create
         * @memberof gsm.GetRoomByAliasRsp
         * @static
         * @param {gsm.IGetRoomByAliasRsp=} [properties] Properties to set
         * @returns {gsm.GetRoomByAliasRsp} GetRoomByAliasRsp instance
         */
        GetRoomByAliasRsp.create = function create(properties) {
            return new GetRoomByAliasRsp(properties);
        };

        /**
         * Encodes the specified GetRoomByAliasRsp message. Does not implicitly {@link gsm.GetRoomByAliasRsp.verify|verify} messages.
         * @function encode
         * @memberof gsm.GetRoomByAliasRsp
         * @static
         * @param {gsm.IGetRoomByAliasRsp} message GetRoomByAliasRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomByAliasRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetRoomByAliasRsp message, length delimited. Does not implicitly {@link gsm.GetRoomByAliasRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsm.GetRoomByAliasRsp
         * @static
         * @param {gsm.IGetRoomByAliasRsp} message GetRoomByAliasRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomByAliasRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomByAliasRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsm.GetRoomByAliasRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsm.GetRoomByAliasRsp} GetRoomByAliasRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomByAliasRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsm.GetRoomByAliasRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoomByAliasRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsm.GetRoomByAliasRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsm.GetRoomByAliasRsp} GetRoomByAliasRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomByAliasRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoomByAliasRsp message.
         * @function verify
         * @memberof gsm.GetRoomByAliasRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomByAliasRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetRoomByAliasRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsm.GetRoomByAliasRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsm.GetRoomByAliasRsp} GetRoomByAliasRsp
         */
        GetRoomByAliasRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsm.GetRoomByAliasRsp)
                return object;
            return new $root.gsm.GetRoomByAliasRsp();
        };

        /**
         * Creates a plain object from a GetRoomByAliasRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsm.GetRoomByAliasRsp
         * @static
         * @param {gsm.GetRoomByAliasRsp} message GetRoomByAliasRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomByAliasRsp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetRoomByAliasRsp to JSON.
         * @function toJSON
         * @memberof gsm.GetRoomByAliasRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomByAliasRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRoomByAliasRsp
         * @function getTypeUrl
         * @memberof gsm.GetRoomByAliasRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRoomByAliasRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsm.GetRoomByAliasRsp";
        };

        return GetRoomByAliasRsp;
    })();

    return gsm;
})();

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.gsm = (function() {

        /**
         * Namespace gsm.
         * @memberof proto
         * @namespace
         */
        var gsm = {};

        gsm.GamePlayerStatus = (function() {

            /**
             * Properties of a GamePlayerStatus.
             * @memberof proto.gsm
             * @interface IGamePlayerStatus
             * @property {string|null} [openid] GamePlayerStatus openid
             * @property {string|null} [gameGid] GamePlayerStatus gameGid
             * @property {string|null} [roomId] GamePlayerStatus roomId
             * @property {string|null} [serverId] GamePlayerStatus serverId
             */

            /**
             * Constructs a new GamePlayerStatus.
             * @memberof proto.gsm
             * @classdesc Represents a GamePlayerStatus.
             * @implements IGamePlayerStatus
             * @constructor
             * @param {proto.gsm.IGamePlayerStatus=} [properties] Properties to set
             */
            function GamePlayerStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GamePlayerStatus openid.
             * @member {string} openid
             * @memberof proto.gsm.GamePlayerStatus
             * @instance
             */
            GamePlayerStatus.prototype.openid = "";

            /**
             * GamePlayerStatus gameGid.
             * @member {string} gameGid
             * @memberof proto.gsm.GamePlayerStatus
             * @instance
             */
            GamePlayerStatus.prototype.gameGid = "";

            /**
             * GamePlayerStatus roomId.
             * @member {string} roomId
             * @memberof proto.gsm.GamePlayerStatus
             * @instance
             */
            GamePlayerStatus.prototype.roomId = "";

            /**
             * GamePlayerStatus serverId.
             * @member {string} serverId
             * @memberof proto.gsm.GamePlayerStatus
             * @instance
             */
            GamePlayerStatus.prototype.serverId = "";

            /**
             * Creates a new GamePlayerStatus instance using the specified properties.
             * @function create
             * @memberof proto.gsm.GamePlayerStatus
             * @static
             * @param {proto.gsm.IGamePlayerStatus=} [properties] Properties to set
             * @returns {proto.gsm.GamePlayerStatus} GamePlayerStatus instance
             */
            GamePlayerStatus.create = function create(properties) {
                return new GamePlayerStatus(properties);
            };

            /**
             * Encodes the specified GamePlayerStatus message. Does not implicitly {@link proto.gsm.GamePlayerStatus.verify|verify} messages.
             * @function encode
             * @memberof proto.gsm.GamePlayerStatus
             * @static
             * @param {proto.gsm.IGamePlayerStatus} message GamePlayerStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GamePlayerStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
                if (message.gameGid != null && Object.hasOwnProperty.call(message, "gameGid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameGid);
                if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomId);
                if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.serverId);
                return writer;
            };

            /**
             * Encodes the specified GamePlayerStatus message, length delimited. Does not implicitly {@link proto.gsm.GamePlayerStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.gsm.GamePlayerStatus
             * @static
             * @param {proto.gsm.IGamePlayerStatus} message GamePlayerStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GamePlayerStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GamePlayerStatus message from the specified reader or buffer.
             * @function decode
             * @memberof proto.gsm.GamePlayerStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.gsm.GamePlayerStatus} GamePlayerStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GamePlayerStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.gsm.GamePlayerStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.openid = reader.string();
                            break;
                        }
                    case 2: {
                            message.gameGid = reader.string();
                            break;
                        }
                    case 3: {
                            message.roomId = reader.string();
                            break;
                        }
                    case 4: {
                            message.serverId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GamePlayerStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.gsm.GamePlayerStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.gsm.GamePlayerStatus} GamePlayerStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GamePlayerStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GamePlayerStatus message.
             * @function verify
             * @memberof proto.gsm.GamePlayerStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GamePlayerStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.openid != null && message.hasOwnProperty("openid"))
                    if (!$util.isString(message.openid))
                        return "openid: string expected";
                if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                    if (!$util.isString(message.gameGid))
                        return "gameGid: string expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isString(message.roomId))
                        return "roomId: string expected";
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    if (!$util.isString(message.serverId))
                        return "serverId: string expected";
                return null;
            };

            /**
             * Creates a GamePlayerStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.gsm.GamePlayerStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.gsm.GamePlayerStatus} GamePlayerStatus
             */
            GamePlayerStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.gsm.GamePlayerStatus)
                    return object;
                var message = new $root.proto.gsm.GamePlayerStatus();
                if (object.openid != null)
                    message.openid = String(object.openid);
                if (object.gameGid != null)
                    message.gameGid = String(object.gameGid);
                if (object.roomId != null)
                    message.roomId = String(object.roomId);
                if (object.serverId != null)
                    message.serverId = String(object.serverId);
                return message;
            };

            /**
             * Creates a plain object from a GamePlayerStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.gsm.GamePlayerStatus
             * @static
             * @param {proto.gsm.GamePlayerStatus} message GamePlayerStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GamePlayerStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.openid = "";
                    object.gameGid = "";
                    object.roomId = "";
                    object.serverId = "";
                }
                if (message.openid != null && message.hasOwnProperty("openid"))
                    object.openid = message.openid;
                if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                    object.gameGid = message.gameGid;
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    object.serverId = message.serverId;
                return object;
            };

            /**
             * Converts this GamePlayerStatus to JSON.
             * @function toJSON
             * @memberof proto.gsm.GamePlayerStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GamePlayerStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GamePlayerStatus
             * @function getTypeUrl
             * @memberof proto.gsm.GamePlayerStatus
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GamePlayerStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.gsm.GamePlayerStatus";
            };

            return GamePlayerStatus;
        })();

        return gsm;
    })();

    return proto;
})();

module.exports = $root;
