/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gsbase = (function() {

    /**
     * Namespace gsbase.
     * @exports gsbase
     * @namespace
     */
    var gsbase = {};

    /**
     * RoomStatus enum.
     * @name gsbase.RoomStatus
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} Initialized=1 Initialized value
     * @property {number} Started=2 Started value
     * @property {number} Dismissed=3 Dismissed value
     */
    gsbase.RoomStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "Initialized"] = 1;
        values[valuesById[2] = "Started"] = 2;
        values[valuesById[3] = "Dismissed"] = 3;
        return values;
    })();

    /**
     * RoomType enum.
     * @name gsbase.RoomType
     * @enum {number}
     * @property {number} NormalRoom=0 NormalRoom value
     * @property {number} PrivateRoom=1 PrivateRoom value
     * @property {number} ClubRoom=2 ClubRoom value
     */
    gsbase.RoomType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NormalRoom"] = 0;
        values[valuesById[1] = "PrivateRoom"] = 1;
        values[valuesById[2] = "ClubRoom"] = 2;
        return values;
    })();

    /**
     * PlayerGameStatus enum.
     * @name gsbase.PlayerGameStatus
     * @enum {number}
     * @property {number} Invalid=0 Invalid value
     * @property {number} Joined=1 Joined value
     * @property {number} Leave=2 Leave value
     */
    gsbase.PlayerGameStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Invalid"] = 0;
        values[valuesById[1] = "Joined"] = 1;
        values[valuesById[2] = "Leave"] = 2;
        return values;
    })();

    /**
     * DismissCode enum.
     * @name gsbase.DismissCode
     * @enum {number}
     * @property {number} GameOver=0 GameOver value
     * @property {number} System=1 System value
     * @property {number} TimeOut=2 TimeOut value
     * @property {number} GameDismiss=3 GameDismiss value
     * @property {number} DismissCodePlayerNotEnough=4 DismissCodePlayerNotEnough value
     * @property {number} DismissCodeAdmin=255 DismissCodeAdmin value
     */
    gsbase.DismissCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GameOver"] = 0;
        values[valuesById[1] = "System"] = 1;
        values[valuesById[2] = "TimeOut"] = 2;
        values[valuesById[3] = "GameDismiss"] = 3;
        values[valuesById[4] = "DismissCodePlayerNotEnough"] = 4;
        values[valuesById[255] = "DismissCodeAdmin"] = 255;
        return values;
    })();

    gsbase.GameResult = (function() {

        /**
         * Properties of a GameResult.
         * @memberof gsbase
         * @interface IGameResult
         * @property {string|null} [roomId] GameResult roomId
         * @property {string|null} [gameGid] GameResult gameGid
         * @property {string|null} [properties] GameResult properties
         * @property {number|Long|null} [createAt] GameResult createAt
         * @property {number|Long|null} [expireAt] GameResult expireAt
         * @property {string|null} [shareCode] GameResult shareCode
         * @property {number|null} [platAid] GameResult platAid
         * @property {number|null} [settleItem] GameResult settleItem
         * @property {number|null} [date] GameResult date
         * @property {gsbase.RoomStatus|null} [status] GameResult status
         * @property {number|null} [type] GameResult type
         * @property {string|null} [matchCid] GameResult matchCid
         * @property {Array.<gsbase.IPlayerGameData>|null} [players] GameResult players
         * @property {Array.<gsbase.IRoundData>|null} [rounds] GameResult rounds
         * @property {string|null} [serverId] GameResult serverId
         * @property {Object.<string,string>|null} [tags] GameResult tags
         * @property {string|null} [matchId] GameResult matchId
         * @property {number|Long|null} [updateTime] GameResult updateTime
         * @property {number|null} [maxRoundNum] GameResult maxRoundNum
         * @property {Array.<string>|null} [labels] GameResult labels
         * @property {number|null} [dismissCode] GameResult dismissCode
         * @property {Array.<string>|null} [aliases] GameResult aliases
         */

        /**
         * Constructs a new GameResult.
         * @memberof gsbase
         * @classdesc Represents a GameResult.
         * @implements IGameResult
         * @constructor
         * @param {gsbase.IGameResult=} [properties] Properties to set
         */
        function GameResult(properties) {
            this.players = [];
            this.rounds = [];
            this.tags = {};
            this.labels = [];
            this.aliases = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResult roomId.
         * @member {string} roomId
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.roomId = "";

        /**
         * GameResult gameGid.
         * @member {string} gameGid
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.gameGid = "";

        /**
         * GameResult properties.
         * @member {string} properties
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.properties = "";

        /**
         * GameResult createAt.
         * @member {number|Long} createAt
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.createAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult expireAt.
         * @member {number|Long} expireAt
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.expireAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult shareCode.
         * @member {string} shareCode
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.shareCode = "";

        /**
         * GameResult platAid.
         * @member {number} platAid
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.platAid = 0;

        /**
         * GameResult settleItem.
         * @member {number} settleItem
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.settleItem = 0;

        /**
         * GameResult date.
         * @member {number} date
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.date = 0;

        /**
         * GameResult status.
         * @member {gsbase.RoomStatus} status
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.status = 0;

        /**
         * GameResult type.
         * @member {number} type
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.type = 0;

        /**
         * GameResult matchCid.
         * @member {string} matchCid
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.matchCid = "";

        /**
         * GameResult players.
         * @member {Array.<gsbase.IPlayerGameData>} players
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.players = $util.emptyArray;

        /**
         * GameResult rounds.
         * @member {Array.<gsbase.IRoundData>} rounds
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.rounds = $util.emptyArray;

        /**
         * GameResult serverId.
         * @member {string} serverId
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.serverId = "";

        /**
         * GameResult tags.
         * @member {Object.<string,string>} tags
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.tags = $util.emptyObject;

        /**
         * GameResult matchId.
         * @member {string} matchId
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.matchId = "";

        /**
         * GameResult updateTime.
         * @member {number|Long} updateTime
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult maxRoundNum.
         * @member {number} maxRoundNum
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.maxRoundNum = 0;

        /**
         * GameResult labels.
         * @member {Array.<string>} labels
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.labels = $util.emptyArray;

        /**
         * GameResult dismissCode.
         * @member {number} dismissCode
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.dismissCode = 0;

        /**
         * GameResult aliases.
         * @member {Array.<string>} aliases
         * @memberof gsbase.GameResult
         * @instance
         */
        GameResult.prototype.aliases = $util.emptyArray;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @function create
         * @memberof gsbase.GameResult
         * @static
         * @param {gsbase.IGameResult=} [properties] Properties to set
         * @returns {gsbase.GameResult} GameResult instance
         */
        GameResult.create = function create(properties) {
            return new GameResult(properties);
        };

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link gsbase.GameResult.verify|verify} messages.
         * @function encode
         * @memberof gsbase.GameResult
         * @static
         * @param {gsbase.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.gameGid != null && Object.hasOwnProperty.call(message, "gameGid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameGid);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.properties);
            if (message.createAt != null && Object.hasOwnProperty.call(message, "createAt"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createAt);
            if (message.expireAt != null && Object.hasOwnProperty.call(message, "expireAt"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.expireAt);
            if (message.shareCode != null && Object.hasOwnProperty.call(message, "shareCode"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.shareCode);
            if (message.platAid != null && Object.hasOwnProperty.call(message, "platAid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.platAid);
            if (message.settleItem != null && Object.hasOwnProperty.call(message, "settleItem"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.settleItem);
            if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.date);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.status);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.type);
            if (message.matchCid != null && Object.hasOwnProperty.call(message, "matchCid"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.matchCid);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.gsbase.PlayerGameData.encode(message.players[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.rounds != null && message.rounds.length)
                for (var i = 0; i < message.rounds.length; ++i)
                    $root.gsbase.RoundData.encode(message.rounds[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.serverId);
            if (message.tags != null && Object.hasOwnProperty.call(message, "tags"))
                for (var keys = Object.keys(message.tags), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 16, wireType 2 =*/130).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.tags[keys[i]]).ldelim();
            if (message.matchId != null && Object.hasOwnProperty.call(message, "matchId"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.matchId);
            if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
                writer.uint32(/* id 18, wireType 0 =*/144).int64(message.updateTime);
            if (message.maxRoundNum != null && Object.hasOwnProperty.call(message, "maxRoundNum"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.maxRoundNum);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 20, wireType 2 =*/162).string(message.labels[i]);
            if (message.dismissCode != null && Object.hasOwnProperty.call(message, "dismissCode"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.dismissCode);
            if (message.aliases != null && message.aliases.length)
                for (var i = 0; i < message.aliases.length; ++i)
                    writer.uint32(/* id 22, wireType 2 =*/178).string(message.aliases[i]);
            return writer;
        };

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link gsbase.GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.GameResult
         * @static
         * @param {gsbase.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.GameResult(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.gameGid = reader.string();
                        break;
                    }
                case 3: {
                        message.properties = reader.string();
                        break;
                    }
                case 4: {
                        message.createAt = reader.int64();
                        break;
                    }
                case 5: {
                        message.expireAt = reader.int64();
                        break;
                    }
                case 6: {
                        message.shareCode = reader.string();
                        break;
                    }
                case 7: {
                        message.platAid = reader.int32();
                        break;
                    }
                case 8: {
                        message.settleItem = reader.int32();
                        break;
                    }
                case 9: {
                        message.date = reader.int32();
                        break;
                    }
                case 10: {
                        message.status = reader.int32();
                        break;
                    }
                case 11: {
                        message.type = reader.int32();
                        break;
                    }
                case 12: {
                        message.matchCid = reader.string();
                        break;
                    }
                case 13: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.gsbase.PlayerGameData.decode(reader, reader.uint32()));
                        break;
                    }
                case 14: {
                        if (!(message.rounds && message.rounds.length))
                            message.rounds = [];
                        message.rounds.push($root.gsbase.RoundData.decode(reader, reader.uint32()));
                        break;
                    }
                case 15: {
                        message.serverId = reader.string();
                        break;
                    }
                case 16: {
                        if (message.tags === $util.emptyObject)
                            message.tags = {};
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
                        message.tags[key] = value;
                        break;
                    }
                case 17: {
                        message.matchId = reader.string();
                        break;
                    }
                case 18: {
                        message.updateTime = reader.int64();
                        break;
                    }
                case 19: {
                        message.maxRoundNum = reader.int32();
                        break;
                    }
                case 20: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push(reader.string());
                        break;
                    }
                case 21: {
                        message.dismissCode = reader.int32();
                        break;
                    }
                case 22: {
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
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResult message.
         * @function verify
         * @memberof gsbase.GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                if (!$util.isString(message.gameGid))
                    return "gameGid: string expected";
            if (message.properties != null && message.hasOwnProperty("properties"))
                if (!$util.isString(message.properties))
                    return "properties: string expected";
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (!$util.isInteger(message.createAt) && !(message.createAt && $util.isInteger(message.createAt.low) && $util.isInteger(message.createAt.high)))
                    return "createAt: integer|Long expected";
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                if (!$util.isInteger(message.expireAt) && !(message.expireAt && $util.isInteger(message.expireAt.low) && $util.isInteger(message.expireAt.high)))
                    return "expireAt: integer|Long expected";
            if (message.shareCode != null && message.hasOwnProperty("shareCode"))
                if (!$util.isString(message.shareCode))
                    return "shareCode: string expected";
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                if (!$util.isInteger(message.platAid))
                    return "platAid: integer expected";
            if (message.settleItem != null && message.hasOwnProperty("settleItem"))
                if (!$util.isInteger(message.settleItem))
                    return "settleItem: integer expected";
            if (message.date != null && message.hasOwnProperty("date"))
                if (!$util.isInteger(message.date))
                    return "date: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.matchCid != null && message.hasOwnProperty("matchCid"))
                if (!$util.isString(message.matchCid))
                    return "matchCid: string expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.gsbase.PlayerGameData.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.rounds != null && message.hasOwnProperty("rounds")) {
                if (!Array.isArray(message.rounds))
                    return "rounds: array expected";
                for (var i = 0; i < message.rounds.length; ++i) {
                    var error = $root.gsbase.RoundData.verify(message.rounds[i]);
                    if (error)
                        return "rounds." + error;
                }
            }
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!$util.isObject(message.tags))
                    return "tags: object expected";
                var key = Object.keys(message.tags);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.tags[key[i]]))
                        return "tags: string{k:string} expected";
            }
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isString(message.matchId))
                    return "matchId: string expected";
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                    return "updateTime: integer|Long expected";
            if (message.maxRoundNum != null && message.hasOwnProperty("maxRoundNum"))
                if (!$util.isInteger(message.maxRoundNum))
                    return "maxRoundNum: integer expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (var i = 0; i < message.labels.length; ++i)
                    if (!$util.isString(message.labels[i]))
                        return "labels: string[] expected";
            }
            if (message.dismissCode != null && message.hasOwnProperty("dismissCode"))
                if (!$util.isInteger(message.dismissCode))
                    return "dismissCode: integer expected";
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
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.GameResult} GameResult
         */
        GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.GameResult)
                return object;
            var message = new $root.gsbase.GameResult();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.gameGid != null)
                message.gameGid = String(object.gameGid);
            if (object.properties != null)
                message.properties = String(object.properties);
            if (object.createAt != null)
                if ($util.Long)
                    (message.createAt = $util.Long.fromValue(object.createAt)).unsigned = false;
                else if (typeof object.createAt === "string")
                    message.createAt = parseInt(object.createAt, 10);
                else if (typeof object.createAt === "number")
                    message.createAt = object.createAt;
                else if (typeof object.createAt === "object")
                    message.createAt = new $util.LongBits(object.createAt.low >>> 0, object.createAt.high >>> 0).toNumber();
            if (object.expireAt != null)
                if ($util.Long)
                    (message.expireAt = $util.Long.fromValue(object.expireAt)).unsigned = false;
                else if (typeof object.expireAt === "string")
                    message.expireAt = parseInt(object.expireAt, 10);
                else if (typeof object.expireAt === "number")
                    message.expireAt = object.expireAt;
                else if (typeof object.expireAt === "object")
                    message.expireAt = new $util.LongBits(object.expireAt.low >>> 0, object.expireAt.high >>> 0).toNumber();
            if (object.shareCode != null)
                message.shareCode = String(object.shareCode);
            if (object.platAid != null)
                message.platAid = object.platAid | 0;
            if (object.settleItem != null)
                message.settleItem = object.settleItem | 0;
            if (object.date != null)
                message.date = object.date | 0;
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.status = 0;
                break;
            case "Initialized":
            case 1:
                message.status = 1;
                break;
            case "Started":
            case 2:
                message.status = 2;
                break;
            case "Dismissed":
            case 3:
                message.status = 3;
                break;
            }
            if (object.type != null)
                message.type = object.type | 0;
            if (object.matchCid != null)
                message.matchCid = String(object.matchCid);
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".gsbase.GameResult.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".gsbase.GameResult.players: object expected");
                    message.players[i] = $root.gsbase.PlayerGameData.fromObject(object.players[i]);
                }
            }
            if (object.rounds) {
                if (!Array.isArray(object.rounds))
                    throw TypeError(".gsbase.GameResult.rounds: array expected");
                message.rounds = [];
                for (var i = 0; i < object.rounds.length; ++i) {
                    if (typeof object.rounds[i] !== "object")
                        throw TypeError(".gsbase.GameResult.rounds: object expected");
                    message.rounds[i] = $root.gsbase.RoundData.fromObject(object.rounds[i]);
                }
            }
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.tags) {
                if (typeof object.tags !== "object")
                    throw TypeError(".gsbase.GameResult.tags: object expected");
                message.tags = {};
                for (var keys = Object.keys(object.tags), i = 0; i < keys.length; ++i)
                    message.tags[keys[i]] = String(object.tags[keys[i]]);
            }
            if (object.matchId != null)
                message.matchId = String(object.matchId);
            if (object.updateTime != null)
                if ($util.Long)
                    (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
                else if (typeof object.updateTime === "string")
                    message.updateTime = parseInt(object.updateTime, 10);
                else if (typeof object.updateTime === "number")
                    message.updateTime = object.updateTime;
                else if (typeof object.updateTime === "object")
                    message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
            if (object.maxRoundNum != null)
                message.maxRoundNum = object.maxRoundNum | 0;
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".gsbase.GameResult.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i)
                    message.labels[i] = String(object.labels[i]);
            }
            if (object.dismissCode != null)
                message.dismissCode = object.dismissCode | 0;
            if (object.aliases) {
                if (!Array.isArray(object.aliases))
                    throw TypeError(".gsbase.GameResult.aliases: array expected");
                message.aliases = [];
                for (var i = 0; i < object.aliases.length; ++i)
                    message.aliases[i] = String(object.aliases[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.GameResult
         * @static
         * @param {gsbase.GameResult} message GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.players = [];
                object.rounds = [];
                object.labels = [];
                object.aliases = [];
            }
            if (options.objects || options.defaults)
                object.tags = {};
            if (options.defaults) {
                object.roomId = "";
                object.gameGid = "";
                object.properties = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expireAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expireAt = options.longs === String ? "0" : 0;
                object.shareCode = "";
                object.platAid = 0;
                object.settleItem = 0;
                object.date = 0;
                object.status = options.enums === String ? "Unknown" : 0;
                object.type = 0;
                object.matchCid = "";
                object.serverId = "";
                object.matchId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updateTime = options.longs === String ? "0" : 0;
                object.maxRoundNum = 0;
                object.dismissCode = 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                object.gameGid = message.gameGid;
            if (message.properties != null && message.hasOwnProperty("properties"))
                object.properties = message.properties;
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (typeof message.createAt === "number")
                    object.createAt = options.longs === String ? String(message.createAt) : message.createAt;
                else
                    object.createAt = options.longs === String ? $util.Long.prototype.toString.call(message.createAt) : options.longs === Number ? new $util.LongBits(message.createAt.low >>> 0, message.createAt.high >>> 0).toNumber() : message.createAt;
            if (message.expireAt != null && message.hasOwnProperty("expireAt"))
                if (typeof message.expireAt === "number")
                    object.expireAt = options.longs === String ? String(message.expireAt) : message.expireAt;
                else
                    object.expireAt = options.longs === String ? $util.Long.prototype.toString.call(message.expireAt) : options.longs === Number ? new $util.LongBits(message.expireAt.low >>> 0, message.expireAt.high >>> 0).toNumber() : message.expireAt;
            if (message.shareCode != null && message.hasOwnProperty("shareCode"))
                object.shareCode = message.shareCode;
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                object.platAid = message.platAid;
            if (message.settleItem != null && message.hasOwnProperty("settleItem"))
                object.settleItem = message.settleItem;
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.gsbase.RoomStatus[message.status] === undefined ? message.status : $root.gsbase.RoomStatus[message.status] : message.status;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.matchCid != null && message.hasOwnProperty("matchCid"))
                object.matchCid = message.matchCid;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.gsbase.PlayerGameData.toObject(message.players[j], options);
            }
            if (message.rounds && message.rounds.length) {
                object.rounds = [];
                for (var j = 0; j < message.rounds.length; ++j)
                    object.rounds[j] = $root.gsbase.RoundData.toObject(message.rounds[j], options);
            }
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            var keys2;
            if (message.tags && (keys2 = Object.keys(message.tags)).length) {
                object.tags = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.tags[keys2[j]] = message.tags[keys2[j]];
            }
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                object.matchId = message.matchId;
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (typeof message.updateTime === "number")
                    object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
                else
                    object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
            if (message.maxRoundNum != null && message.hasOwnProperty("maxRoundNum"))
                object.maxRoundNum = message.maxRoundNum;
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (var j = 0; j < message.labels.length; ++j)
                    object.labels[j] = message.labels[j];
            }
            if (message.dismissCode != null && message.hasOwnProperty("dismissCode"))
                object.dismissCode = message.dismissCode;
            if (message.aliases && message.aliases.length) {
                object.aliases = [];
                for (var j = 0; j < message.aliases.length; ++j)
                    object.aliases[j] = message.aliases[j];
            }
            return object;
        };

        /**
         * Converts this GameResult to JSON.
         * @function toJSON
         * @memberof gsbase.GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameResult
         * @function getTypeUrl
         * @memberof gsbase.GameResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.GameResult";
        };

        return GameResult;
    })();

    gsbase.PlayerGameData = (function() {

        /**
         * Properties of a PlayerGameData.
         * @memberof gsbase
         * @interface IPlayerGameData
         * @property {string|null} [openid] PlayerGameData openid
         * @property {number|Long|null} [winLose] PlayerGameData winLose
         * @property {gsbase.PlayerGameStatus|null} [status] PlayerGameData status
         * @property {number|Long|null} [updateTime] PlayerGameData updateTime
         * @property {Array.<string>|null} [labels] PlayerGameData labels
         * @property {Object.<string,string>|null} [tags] PlayerGameData tags
         * @property {string|null} [nickname] PlayerGameData nickname
         */

        /**
         * Constructs a new PlayerGameData.
         * @memberof gsbase
         * @classdesc Represents a PlayerGameData.
         * @implements IPlayerGameData
         * @constructor
         * @param {gsbase.IPlayerGameData=} [properties] Properties to set
         */
        function PlayerGameData(properties) {
            this.labels = [];
            this.tags = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerGameData openid.
         * @member {string} openid
         * @memberof gsbase.PlayerGameData
         * @instance
         */
        PlayerGameData.prototype.openid = "";

        /**
         * PlayerGameData winLose.
         * @member {number|Long} winLose
         * @memberof gsbase.PlayerGameData
         * @instance
         */
        PlayerGameData.prototype.winLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerGameData status.
         * @member {gsbase.PlayerGameStatus} status
         * @memberof gsbase.PlayerGameData
         * @instance
         */
        PlayerGameData.prototype.status = 0;

        /**
         * PlayerGameData updateTime.
         * @member {number|Long} updateTime
         * @memberof gsbase.PlayerGameData
         * @instance
         */
        PlayerGameData.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerGameData labels.
         * @member {Array.<string>} labels
         * @memberof gsbase.PlayerGameData
         * @instance
         */
        PlayerGameData.prototype.labels = $util.emptyArray;

        /**
         * PlayerGameData tags.
         * @member {Object.<string,string>} tags
         * @memberof gsbase.PlayerGameData
         * @instance
         */
        PlayerGameData.prototype.tags = $util.emptyObject;

        /**
         * PlayerGameData nickname.
         * @member {string} nickname
         * @memberof gsbase.PlayerGameData
         * @instance
         */
        PlayerGameData.prototype.nickname = "";

        /**
         * Creates a new PlayerGameData instance using the specified properties.
         * @function create
         * @memberof gsbase.PlayerGameData
         * @static
         * @param {gsbase.IPlayerGameData=} [properties] Properties to set
         * @returns {gsbase.PlayerGameData} PlayerGameData instance
         */
        PlayerGameData.create = function create(properties) {
            return new PlayerGameData(properties);
        };

        /**
         * Encodes the specified PlayerGameData message. Does not implicitly {@link gsbase.PlayerGameData.verify|verify} messages.
         * @function encode
         * @memberof gsbase.PlayerGameData
         * @static
         * @param {gsbase.IPlayerGameData} message PlayerGameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerGameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
            if (message.winLose != null && Object.hasOwnProperty.call(message, "winLose"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.winLose);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.updateTime);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.labels[i]);
            if (message.tags != null && Object.hasOwnProperty.call(message, "tags"))
                for (var keys = Object.keys(message.tags), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.tags[keys[i]]).ldelim();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified PlayerGameData message, length delimited. Does not implicitly {@link gsbase.PlayerGameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.PlayerGameData
         * @static
         * @param {gsbase.IPlayerGameData} message PlayerGameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerGameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerGameData message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.PlayerGameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.PlayerGameData} PlayerGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerGameData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.PlayerGameData(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.openid = reader.string();
                        break;
                    }
                case 2: {
                        message.winLose = reader.int64();
                        break;
                    }
                case 3: {
                        message.status = reader.int32();
                        break;
                    }
                case 4: {
                        message.updateTime = reader.int64();
                        break;
                    }
                case 5: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push(reader.string());
                        break;
                    }
                case 6: {
                        if (message.tags === $util.emptyObject)
                            message.tags = {};
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
                        message.tags[key] = value;
                        break;
                    }
                case 7: {
                        message.nickname = reader.string();
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
         * Decodes a PlayerGameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.PlayerGameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.PlayerGameData} PlayerGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerGameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerGameData message.
         * @function verify
         * @memberof gsbase.PlayerGameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerGameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            if (message.winLose != null && message.hasOwnProperty("winLose"))
                if (!$util.isInteger(message.winLose) && !(message.winLose && $util.isInteger(message.winLose.low) && $util.isInteger(message.winLose.high)))
                    return "winLose: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                    return "updateTime: integer|Long expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (var i = 0; i < message.labels.length; ++i)
                    if (!$util.isString(message.labels[i]))
                        return "labels: string[] expected";
            }
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!$util.isObject(message.tags))
                    return "tags: object expected";
                var key = Object.keys(message.tags);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.tags[key[i]]))
                        return "tags: string{k:string} expected";
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates a PlayerGameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.PlayerGameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.PlayerGameData} PlayerGameData
         */
        PlayerGameData.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.PlayerGameData)
                return object;
            var message = new $root.gsbase.PlayerGameData();
            if (object.openid != null)
                message.openid = String(object.openid);
            if (object.winLose != null)
                if ($util.Long)
                    (message.winLose = $util.Long.fromValue(object.winLose)).unsigned = false;
                else if (typeof object.winLose === "string")
                    message.winLose = parseInt(object.winLose, 10);
                else if (typeof object.winLose === "number")
                    message.winLose = object.winLose;
                else if (typeof object.winLose === "object")
                    message.winLose = new $util.LongBits(object.winLose.low >>> 0, object.winLose.high >>> 0).toNumber();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Invalid":
            case 0:
                message.status = 0;
                break;
            case "Joined":
            case 1:
                message.status = 1;
                break;
            case "Leave":
            case 2:
                message.status = 2;
                break;
            }
            if (object.updateTime != null)
                if ($util.Long)
                    (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
                else if (typeof object.updateTime === "string")
                    message.updateTime = parseInt(object.updateTime, 10);
                else if (typeof object.updateTime === "number")
                    message.updateTime = object.updateTime;
                else if (typeof object.updateTime === "object")
                    message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".gsbase.PlayerGameData.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i)
                    message.labels[i] = String(object.labels[i]);
            }
            if (object.tags) {
                if (typeof object.tags !== "object")
                    throw TypeError(".gsbase.PlayerGameData.tags: object expected");
                message.tags = {};
                for (var keys = Object.keys(object.tags), i = 0; i < keys.length; ++i)
                    message.tags[keys[i]] = String(object.tags[keys[i]]);
            }
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from a PlayerGameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.PlayerGameData
         * @static
         * @param {gsbase.PlayerGameData} message PlayerGameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerGameData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.labels = [];
            if (options.objects || options.defaults)
                object.tags = {};
            if (options.defaults) {
                object.openid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.winLose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.winLose = options.longs === String ? "0" : 0;
                object.status = options.enums === String ? "Invalid" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updateTime = options.longs === String ? "0" : 0;
                object.nickname = "";
            }
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            if (message.winLose != null && message.hasOwnProperty("winLose"))
                if (typeof message.winLose === "number")
                    object.winLose = options.longs === String ? String(message.winLose) : message.winLose;
                else
                    object.winLose = options.longs === String ? $util.Long.prototype.toString.call(message.winLose) : options.longs === Number ? new $util.LongBits(message.winLose.low >>> 0, message.winLose.high >>> 0).toNumber() : message.winLose;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.gsbase.PlayerGameStatus[message.status] === undefined ? message.status : $root.gsbase.PlayerGameStatus[message.status] : message.status;
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (typeof message.updateTime === "number")
                    object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
                else
                    object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (var j = 0; j < message.labels.length; ++j)
                    object.labels[j] = message.labels[j];
            }
            var keys2;
            if (message.tags && (keys2 = Object.keys(message.tags)).length) {
                object.tags = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.tags[keys2[j]] = message.tags[keys2[j]];
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this PlayerGameData to JSON.
         * @function toJSON
         * @memberof gsbase.PlayerGameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerGameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerGameData
         * @function getTypeUrl
         * @memberof gsbase.PlayerGameData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerGameData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.PlayerGameData";
        };

        return PlayerGameData;
    })();

    gsbase.BattleData = (function() {

        /**
         * Properties of a BattleData.
         * @memberof gsbase
         * @interface IBattleData
         * @property {string|null} [openid] BattleData openid
         * @property {number|Long|null} [winLose] BattleData winLose
         * @property {Array.<string>|null} [labels] BattleData labels
         */

        /**
         * Constructs a new BattleData.
         * @memberof gsbase
         * @classdesc Represents a BattleData.
         * @implements IBattleData
         * @constructor
         * @param {gsbase.IBattleData=} [properties] Properties to set
         */
        function BattleData(properties) {
            this.labels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleData openid.
         * @member {string} openid
         * @memberof gsbase.BattleData
         * @instance
         */
        BattleData.prototype.openid = "";

        /**
         * BattleData winLose.
         * @member {number|Long} winLose
         * @memberof gsbase.BattleData
         * @instance
         */
        BattleData.prototype.winLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattleData labels.
         * @member {Array.<string>} labels
         * @memberof gsbase.BattleData
         * @instance
         */
        BattleData.prototype.labels = $util.emptyArray;

        /**
         * Creates a new BattleData instance using the specified properties.
         * @function create
         * @memberof gsbase.BattleData
         * @static
         * @param {gsbase.IBattleData=} [properties] Properties to set
         * @returns {gsbase.BattleData} BattleData instance
         */
        BattleData.create = function create(properties) {
            return new BattleData(properties);
        };

        /**
         * Encodes the specified BattleData message. Does not implicitly {@link gsbase.BattleData.verify|verify} messages.
         * @function encode
         * @memberof gsbase.BattleData
         * @static
         * @param {gsbase.IBattleData} message BattleData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
            if (message.winLose != null && Object.hasOwnProperty.call(message, "winLose"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.winLose);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.labels[i]);
            return writer;
        };

        /**
         * Encodes the specified BattleData message, length delimited. Does not implicitly {@link gsbase.BattleData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.BattleData
         * @static
         * @param {gsbase.IBattleData} message BattleData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleData message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.BattleData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.BattleData} BattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.BattleData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.openid = reader.string();
                        break;
                    }
                case 2: {
                        message.winLose = reader.int64();
                        break;
                    }
                case 3: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push(reader.string());
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
         * Decodes a BattleData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.BattleData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.BattleData} BattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleData message.
         * @function verify
         * @memberof gsbase.BattleData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            if (message.winLose != null && message.hasOwnProperty("winLose"))
                if (!$util.isInteger(message.winLose) && !(message.winLose && $util.isInteger(message.winLose.low) && $util.isInteger(message.winLose.high)))
                    return "winLose: integer|Long expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (var i = 0; i < message.labels.length; ++i)
                    if (!$util.isString(message.labels[i]))
                        return "labels: string[] expected";
            }
            return null;
        };

        /**
         * Creates a BattleData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.BattleData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.BattleData} BattleData
         */
        BattleData.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.BattleData)
                return object;
            var message = new $root.gsbase.BattleData();
            if (object.openid != null)
                message.openid = String(object.openid);
            if (object.winLose != null)
                if ($util.Long)
                    (message.winLose = $util.Long.fromValue(object.winLose)).unsigned = false;
                else if (typeof object.winLose === "string")
                    message.winLose = parseInt(object.winLose, 10);
                else if (typeof object.winLose === "number")
                    message.winLose = object.winLose;
                else if (typeof object.winLose === "object")
                    message.winLose = new $util.LongBits(object.winLose.low >>> 0, object.winLose.high >>> 0).toNumber();
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".gsbase.BattleData.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i)
                    message.labels[i] = String(object.labels[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.BattleData
         * @static
         * @param {gsbase.BattleData} message BattleData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.labels = [];
            if (options.defaults) {
                object.openid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.winLose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.winLose = options.longs === String ? "0" : 0;
            }
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            if (message.winLose != null && message.hasOwnProperty("winLose"))
                if (typeof message.winLose === "number")
                    object.winLose = options.longs === String ? String(message.winLose) : message.winLose;
                else
                    object.winLose = options.longs === String ? $util.Long.prototype.toString.call(message.winLose) : options.longs === Number ? new $util.LongBits(message.winLose.low >>> 0, message.winLose.high >>> 0).toNumber() : message.winLose;
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (var j = 0; j < message.labels.length; ++j)
                    object.labels[j] = message.labels[j];
            }
            return object;
        };

        /**
         * Converts this BattleData to JSON.
         * @function toJSON
         * @memberof gsbase.BattleData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BattleData
         * @function getTypeUrl
         * @memberof gsbase.BattleData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.BattleData";
        };

        return BattleData;
    })();

    gsbase.RoundData = (function() {

        /**
         * Properties of a RoundData.
         * @memberof gsbase
         * @interface IRoundData
         * @property {number|null} [index] RoundData index
         * @property {Array.<gsbase.IBattleData>|null} [players] RoundData players
         * @property {number|Long|null} [startTime] RoundData startTime
         * @property {number|Long|null} [finishTime] RoundData finishTime
         */

        /**
         * Constructs a new RoundData.
         * @memberof gsbase
         * @classdesc Represents a RoundData.
         * @implements IRoundData
         * @constructor
         * @param {gsbase.IRoundData=} [properties] Properties to set
         */
        function RoundData(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundData index.
         * @member {number} index
         * @memberof gsbase.RoundData
         * @instance
         */
        RoundData.prototype.index = 0;

        /**
         * RoundData players.
         * @member {Array.<gsbase.IBattleData>} players
         * @memberof gsbase.RoundData
         * @instance
         */
        RoundData.prototype.players = $util.emptyArray;

        /**
         * RoundData startTime.
         * @member {number|Long} startTime
         * @memberof gsbase.RoundData
         * @instance
         */
        RoundData.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoundData finishTime.
         * @member {number|Long} finishTime
         * @memberof gsbase.RoundData
         * @instance
         */
        RoundData.prototype.finishTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RoundData instance using the specified properties.
         * @function create
         * @memberof gsbase.RoundData
         * @static
         * @param {gsbase.IRoundData=} [properties] Properties to set
         * @returns {gsbase.RoundData} RoundData instance
         */
        RoundData.create = function create(properties) {
            return new RoundData(properties);
        };

        /**
         * Encodes the specified RoundData message. Does not implicitly {@link gsbase.RoundData.verify|verify} messages.
         * @function encode
         * @memberof gsbase.RoundData
         * @static
         * @param {gsbase.IRoundData} message RoundData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.gsbase.BattleData.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.startTime);
            if (message.finishTime != null && Object.hasOwnProperty.call(message, "finishTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.finishTime);
            return writer;
        };

        /**
         * Encodes the specified RoundData message, length delimited. Does not implicitly {@link gsbase.RoundData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.RoundData
         * @static
         * @param {gsbase.IRoundData} message RoundData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundData message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.RoundData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.RoundData} RoundData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.RoundData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.index = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.gsbase.BattleData.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.startTime = reader.int64();
                        break;
                    }
                case 4: {
                        message.finishTime = reader.int64();
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
         * Decodes a RoundData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.RoundData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.RoundData} RoundData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundData message.
         * @function verify
         * @memberof gsbase.RoundData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.gsbase.BattleData.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                    return "startTime: integer|Long expected";
            if (message.finishTime != null && message.hasOwnProperty("finishTime"))
                if (!$util.isInteger(message.finishTime) && !(message.finishTime && $util.isInteger(message.finishTime.low) && $util.isInteger(message.finishTime.high)))
                    return "finishTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a RoundData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.RoundData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.RoundData} RoundData
         */
        RoundData.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.RoundData)
                return object;
            var message = new $root.gsbase.RoundData();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".gsbase.RoundData.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".gsbase.RoundData.players: object expected");
                    message.players[i] = $root.gsbase.BattleData.fromObject(object.players[i]);
                }
            }
            if (object.startTime != null)
                if ($util.Long)
                    (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = false;
                else if (typeof object.startTime === "string")
                    message.startTime = parseInt(object.startTime, 10);
                else if (typeof object.startTime === "number")
                    message.startTime = object.startTime;
                else if (typeof object.startTime === "object")
                    message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber();
            if (object.finishTime != null)
                if ($util.Long)
                    (message.finishTime = $util.Long.fromValue(object.finishTime)).unsigned = false;
                else if (typeof object.finishTime === "string")
                    message.finishTime = parseInt(object.finishTime, 10);
                else if (typeof object.finishTime === "number")
                    message.finishTime = object.finishTime;
                else if (typeof object.finishTime === "object")
                    message.finishTime = new $util.LongBits(object.finishTime.low >>> 0, object.finishTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RoundData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.RoundData
         * @static
         * @param {gsbase.RoundData} message RoundData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.index = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.finishTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.finishTime = options.longs === String ? "0" : 0;
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.gsbase.BattleData.toObject(message.players[j], options);
            }
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (typeof message.startTime === "number")
                    object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                else
                    object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber() : message.startTime;
            if (message.finishTime != null && message.hasOwnProperty("finishTime"))
                if (typeof message.finishTime === "number")
                    object.finishTime = options.longs === String ? String(message.finishTime) : message.finishTime;
                else
                    object.finishTime = options.longs === String ? $util.Long.prototype.toString.call(message.finishTime) : options.longs === Number ? new $util.LongBits(message.finishTime.low >>> 0, message.finishTime.high >>> 0).toNumber() : message.finishTime;
            return object;
        };

        /**
         * Converts this RoundData to JSON.
         * @function toJSON
         * @memberof gsbase.RoundData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoundData
         * @function getTypeUrl
         * @memberof gsbase.RoundData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoundData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.RoundData";
        };

        return RoundData;
    })();

    gsbase.GameRoomStats = (function() {

        /**
         * Properties of a GameRoomStats.
         * @memberof gsbase
         * @interface IGameRoomStats
         * @property {string|null} [roomId] GameRoomStats roomId
         * @property {string|null} [gameGid] GameRoomStats gameGid
         * @property {gsbase.RoomType|null} [type] GameRoomStats type
         * @property {number|Long|null} [createAt] GameRoomStats createAt
         * @property {string|null} [matchCid] GameRoomStats matchCid
         * @property {string|null} [shareCode] GameRoomStats shareCode
         * @property {number|null} [platAid] GameRoomStats platAid
         * @property {number|null} [curPlayerNum] GameRoomStats curPlayerNum
         * @property {number|null} [maxPlayerNum] GameRoomStats maxPlayerNum
         * @property {Array.<string>|null} [labels] GameRoomStats labels
         * @property {Array.<string>|null} [aliases] GameRoomStats aliases
         * @property {gsbase.RoomStatus|null} [status] GameRoomStats status
         * @property {Array.<gsbase.IGamePlayerStats>|null} [players] GameRoomStats players
         * @property {string|null} [creator] GameRoomStats creator
         * @property {string|null} [properties] GameRoomStats properties
         * @property {number|Long|null} [version] GameRoomStats version
         * @property {string|null} [serverId] GameRoomStats serverId
         * @property {string|null} [stats] GameRoomStats stats
         */

        /**
         * Constructs a new GameRoomStats.
         * @memberof gsbase
         * @classdesc Represents a GameRoomStats.
         * @implements IGameRoomStats
         * @constructor
         * @param {gsbase.IGameRoomStats=} [properties] Properties to set
         */
        function GameRoomStats(properties) {
            this.labels = [];
            this.aliases = [];
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRoomStats roomId.
         * @member {string} roomId
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.roomId = "";

        /**
         * GameRoomStats gameGid.
         * @member {string} gameGid
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.gameGid = "";

        /**
         * GameRoomStats type.
         * @member {gsbase.RoomType} type
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.type = 0;

        /**
         * GameRoomStats createAt.
         * @member {number|Long} createAt
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.createAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameRoomStats matchCid.
         * @member {string} matchCid
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.matchCid = "";

        /**
         * GameRoomStats shareCode.
         * @member {string} shareCode
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.shareCode = "";

        /**
         * GameRoomStats platAid.
         * @member {number} platAid
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.platAid = 0;

        /**
         * GameRoomStats curPlayerNum.
         * @member {number} curPlayerNum
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.curPlayerNum = 0;

        /**
         * GameRoomStats maxPlayerNum.
         * @member {number} maxPlayerNum
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.maxPlayerNum = 0;

        /**
         * GameRoomStats labels.
         * @member {Array.<string>} labels
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.labels = $util.emptyArray;

        /**
         * GameRoomStats aliases.
         * @member {Array.<string>} aliases
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.aliases = $util.emptyArray;

        /**
         * GameRoomStats status.
         * @member {gsbase.RoomStatus} status
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.status = 0;

        /**
         * GameRoomStats players.
         * @member {Array.<gsbase.IGamePlayerStats>} players
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.players = $util.emptyArray;

        /**
         * GameRoomStats creator.
         * @member {string} creator
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.creator = "";

        /**
         * GameRoomStats properties.
         * @member {string} properties
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.properties = "";

        /**
         * GameRoomStats version.
         * @member {number|Long} version
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameRoomStats serverId.
         * @member {string} serverId
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.serverId = "";

        /**
         * GameRoomStats stats.
         * @member {string} stats
         * @memberof gsbase.GameRoomStats
         * @instance
         */
        GameRoomStats.prototype.stats = "";

        /**
         * Creates a new GameRoomStats instance using the specified properties.
         * @function create
         * @memberof gsbase.GameRoomStats
         * @static
         * @param {gsbase.IGameRoomStats=} [properties] Properties to set
         * @returns {gsbase.GameRoomStats} GameRoomStats instance
         */
        GameRoomStats.create = function create(properties) {
            return new GameRoomStats(properties);
        };

        /**
         * Encodes the specified GameRoomStats message. Does not implicitly {@link gsbase.GameRoomStats.verify|verify} messages.
         * @function encode
         * @memberof gsbase.GameRoomStats
         * @static
         * @param {gsbase.IGameRoomStats} message GameRoomStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRoomStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.gameGid != null && Object.hasOwnProperty.call(message, "gameGid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameGid);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.createAt != null && Object.hasOwnProperty.call(message, "createAt"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createAt);
            if (message.matchCid != null && Object.hasOwnProperty.call(message, "matchCid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.matchCid);
            if (message.shareCode != null && Object.hasOwnProperty.call(message, "shareCode"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.shareCode);
            if (message.platAid != null && Object.hasOwnProperty.call(message, "platAid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.platAid);
            if (message.curPlayerNum != null && Object.hasOwnProperty.call(message, "curPlayerNum"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.curPlayerNum);
            if (message.maxPlayerNum != null && Object.hasOwnProperty.call(message, "maxPlayerNum"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.maxPlayerNum);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.labels[i]);
            if (message.aliases != null && message.aliases.length)
                for (var i = 0; i < message.aliases.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.aliases[i]);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.status);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.gsbase.GamePlayerStats.encode(message.players[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.creator != null && Object.hasOwnProperty.call(message, "creator"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.creator);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.properties);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 17, wireType 0 =*/136).int64(message.version);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.serverId);
            if (message.stats != null && Object.hasOwnProperty.call(message, "stats"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.stats);
            return writer;
        };

        /**
         * Encodes the specified GameRoomStats message, length delimited. Does not implicitly {@link gsbase.GameRoomStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.GameRoomStats
         * @static
         * @param {gsbase.IGameRoomStats} message GameRoomStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRoomStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRoomStats message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.GameRoomStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.GameRoomStats} GameRoomStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRoomStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.GameRoomStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.gameGid = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.createAt = reader.int64();
                        break;
                    }
                case 5: {
                        message.matchCid = reader.string();
                        break;
                    }
                case 6: {
                        message.shareCode = reader.string();
                        break;
                    }
                case 7: {
                        message.platAid = reader.int32();
                        break;
                    }
                case 8: {
                        message.curPlayerNum = reader.int32();
                        break;
                    }
                case 9: {
                        message.maxPlayerNum = reader.int32();
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
                case 13: {
                        message.status = reader.int32();
                        break;
                    }
                case 14: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.gsbase.GamePlayerStats.decode(reader, reader.uint32()));
                        break;
                    }
                case 15: {
                        message.creator = reader.string();
                        break;
                    }
                case 16: {
                        message.properties = reader.string();
                        break;
                    }
                case 17: {
                        message.version = reader.int64();
                        break;
                    }
                case 18: {
                        message.serverId = reader.string();
                        break;
                    }
                case 19: {
                        message.stats = reader.string();
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
         * Decodes a GameRoomStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.GameRoomStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.GameRoomStats} GameRoomStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRoomStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRoomStats message.
         * @function verify
         * @memberof gsbase.GameRoomStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRoomStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                if (!$util.isString(message.gameGid))
                    return "gameGid: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (!$util.isInteger(message.createAt) && !(message.createAt && $util.isInteger(message.createAt.low) && $util.isInteger(message.createAt.high)))
                    return "createAt: integer|Long expected";
            if (message.matchCid != null && message.hasOwnProperty("matchCid"))
                if (!$util.isString(message.matchCid))
                    return "matchCid: string expected";
            if (message.shareCode != null && message.hasOwnProperty("shareCode"))
                if (!$util.isString(message.shareCode))
                    return "shareCode: string expected";
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                if (!$util.isInteger(message.platAid))
                    return "platAid: integer expected";
            if (message.curPlayerNum != null && message.hasOwnProperty("curPlayerNum"))
                if (!$util.isInteger(message.curPlayerNum))
                    return "curPlayerNum: integer expected";
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                if (!$util.isInteger(message.maxPlayerNum))
                    return "maxPlayerNum: integer expected";
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
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.gsbase.GamePlayerStats.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.creator != null && message.hasOwnProperty("creator"))
                if (!$util.isString(message.creator))
                    return "creator: string expected";
            if (message.properties != null && message.hasOwnProperty("properties"))
                if (!$util.isString(message.properties))
                    return "properties: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.stats != null && message.hasOwnProperty("stats"))
                if (!$util.isString(message.stats))
                    return "stats: string expected";
            return null;
        };

        /**
         * Creates a GameRoomStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.GameRoomStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.GameRoomStats} GameRoomStats
         */
        GameRoomStats.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.GameRoomStats)
                return object;
            var message = new $root.gsbase.GameRoomStats();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.gameGid != null)
                message.gameGid = String(object.gameGid);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "NormalRoom":
            case 0:
                message.type = 0;
                break;
            case "PrivateRoom":
            case 1:
                message.type = 1;
                break;
            case "ClubRoom":
            case 2:
                message.type = 2;
                break;
            }
            if (object.createAt != null)
                if ($util.Long)
                    (message.createAt = $util.Long.fromValue(object.createAt)).unsigned = false;
                else if (typeof object.createAt === "string")
                    message.createAt = parseInt(object.createAt, 10);
                else if (typeof object.createAt === "number")
                    message.createAt = object.createAt;
                else if (typeof object.createAt === "object")
                    message.createAt = new $util.LongBits(object.createAt.low >>> 0, object.createAt.high >>> 0).toNumber();
            if (object.matchCid != null)
                message.matchCid = String(object.matchCid);
            if (object.shareCode != null)
                message.shareCode = String(object.shareCode);
            if (object.platAid != null)
                message.platAid = object.platAid | 0;
            if (object.curPlayerNum != null)
                message.curPlayerNum = object.curPlayerNum | 0;
            if (object.maxPlayerNum != null)
                message.maxPlayerNum = object.maxPlayerNum | 0;
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".gsbase.GameRoomStats.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i)
                    message.labels[i] = String(object.labels[i]);
            }
            if (object.aliases) {
                if (!Array.isArray(object.aliases))
                    throw TypeError(".gsbase.GameRoomStats.aliases: array expected");
                message.aliases = [];
                for (var i = 0; i < object.aliases.length; ++i)
                    message.aliases[i] = String(object.aliases[i]);
            }
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.status = 0;
                break;
            case "Initialized":
            case 1:
                message.status = 1;
                break;
            case "Started":
            case 2:
                message.status = 2;
                break;
            case "Dismissed":
            case 3:
                message.status = 3;
                break;
            }
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".gsbase.GameRoomStats.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".gsbase.GameRoomStats.players: object expected");
                    message.players[i] = $root.gsbase.GamePlayerStats.fromObject(object.players[i]);
                }
            }
            if (object.creator != null)
                message.creator = String(object.creator);
            if (object.properties != null)
                message.properties = String(object.properties);
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.stats != null)
                message.stats = String(object.stats);
            return message;
        };

        /**
         * Creates a plain object from a GameRoomStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.GameRoomStats
         * @static
         * @param {gsbase.GameRoomStats} message GameRoomStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRoomStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.labels = [];
                object.aliases = [];
                object.players = [];
            }
            if (options.defaults) {
                object.roomId = "";
                object.gameGid = "";
                object.type = options.enums === String ? "NormalRoom" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createAt = options.longs === String ? "0" : 0;
                object.matchCid = "";
                object.shareCode = "";
                object.platAid = 0;
                object.curPlayerNum = 0;
                object.maxPlayerNum = 0;
                object.status = options.enums === String ? "Unknown" : 0;
                object.creator = "";
                object.properties = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.serverId = "";
                object.stats = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                object.gameGid = message.gameGid;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.gsbase.RoomType[message.type] === undefined ? message.type : $root.gsbase.RoomType[message.type] : message.type;
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (typeof message.createAt === "number")
                    object.createAt = options.longs === String ? String(message.createAt) : message.createAt;
                else
                    object.createAt = options.longs === String ? $util.Long.prototype.toString.call(message.createAt) : options.longs === Number ? new $util.LongBits(message.createAt.low >>> 0, message.createAt.high >>> 0).toNumber() : message.createAt;
            if (message.matchCid != null && message.hasOwnProperty("matchCid"))
                object.matchCid = message.matchCid;
            if (message.shareCode != null && message.hasOwnProperty("shareCode"))
                object.shareCode = message.shareCode;
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                object.platAid = message.platAid;
            if (message.curPlayerNum != null && message.hasOwnProperty("curPlayerNum"))
                object.curPlayerNum = message.curPlayerNum;
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                object.maxPlayerNum = message.maxPlayerNum;
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
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.gsbase.RoomStatus[message.status] === undefined ? message.status : $root.gsbase.RoomStatus[message.status] : message.status;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.gsbase.GamePlayerStats.toObject(message.players[j], options);
            }
            if (message.creator != null && message.hasOwnProperty("creator"))
                object.creator = message.creator;
            if (message.properties != null && message.hasOwnProperty("properties"))
                object.properties = message.properties;
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.stats != null && message.hasOwnProperty("stats"))
                object.stats = message.stats;
            return object;
        };

        /**
         * Converts this GameRoomStats to JSON.
         * @function toJSON
         * @memberof gsbase.GameRoomStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRoomStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameRoomStats
         * @function getTypeUrl
         * @memberof gsbase.GameRoomStats
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameRoomStats.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.GameRoomStats";
        };

        return GameRoomStats;
    })();

    gsbase.GamePlayerStats = (function() {

        /**
         * Properties of a GamePlayerStats.
         * @memberof gsbase
         * @interface IGamePlayerStats
         * @property {string|null} [openid] GamePlayerStats openid
         * @property {Object.<string,string>|null} [metadata] GamePlayerStats metadata
         * @property {string|null} [nickname] GamePlayerStats nickname
         * @property {string|null} [avatar] GamePlayerStats avatar
         * @property {gsbase.PlayerGameStatus|null} [status] GamePlayerStats status
         */

        /**
         * Constructs a new GamePlayerStats.
         * @memberof gsbase
         * @classdesc Represents a GamePlayerStats.
         * @implements IGamePlayerStats
         * @constructor
         * @param {gsbase.IGamePlayerStats=} [properties] Properties to set
         */
        function GamePlayerStats(properties) {
            this.metadata = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GamePlayerStats openid.
         * @member {string} openid
         * @memberof gsbase.GamePlayerStats
         * @instance
         */
        GamePlayerStats.prototype.openid = "";

        /**
         * GamePlayerStats metadata.
         * @member {Object.<string,string>} metadata
         * @memberof gsbase.GamePlayerStats
         * @instance
         */
        GamePlayerStats.prototype.metadata = $util.emptyObject;

        /**
         * GamePlayerStats nickname.
         * @member {string} nickname
         * @memberof gsbase.GamePlayerStats
         * @instance
         */
        GamePlayerStats.prototype.nickname = "";

        /**
         * GamePlayerStats avatar.
         * @member {string} avatar
         * @memberof gsbase.GamePlayerStats
         * @instance
         */
        GamePlayerStats.prototype.avatar = "";

        /**
         * GamePlayerStats status.
         * @member {gsbase.PlayerGameStatus} status
         * @memberof gsbase.GamePlayerStats
         * @instance
         */
        GamePlayerStats.prototype.status = 0;

        /**
         * Creates a new GamePlayerStats instance using the specified properties.
         * @function create
         * @memberof gsbase.GamePlayerStats
         * @static
         * @param {gsbase.IGamePlayerStats=} [properties] Properties to set
         * @returns {gsbase.GamePlayerStats} GamePlayerStats instance
         */
        GamePlayerStats.create = function create(properties) {
            return new GamePlayerStats(properties);
        };

        /**
         * Encodes the specified GamePlayerStats message. Does not implicitly {@link gsbase.GamePlayerStats.verify|verify} messages.
         * @function encode
         * @memberof gsbase.GamePlayerStats
         * @static
         * @param {gsbase.IGamePlayerStats} message GamePlayerStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePlayerStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (var keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.avatar);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified GamePlayerStats message, length delimited. Does not implicitly {@link gsbase.GamePlayerStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.GamePlayerStats
         * @static
         * @param {gsbase.IGamePlayerStats} message GamePlayerStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePlayerStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePlayerStats message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.GamePlayerStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.GamePlayerStats} GamePlayerStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePlayerStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.GamePlayerStats(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.openid = reader.string();
                        break;
                    }
                case 2: {
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
                case 3: {
                        message.nickname = reader.string();
                        break;
                    }
                case 5: {
                        message.avatar = reader.string();
                        break;
                    }
                case 6: {
                        message.status = reader.int32();
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
         * Decodes a GamePlayerStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.GamePlayerStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.GamePlayerStats} GamePlayerStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePlayerStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GamePlayerStats message.
         * @function verify
         * @memberof gsbase.GamePlayerStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GamePlayerStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
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
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a GamePlayerStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.GamePlayerStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.GamePlayerStats} GamePlayerStats
         */
        GamePlayerStats.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.GamePlayerStats)
                return object;
            var message = new $root.gsbase.GamePlayerStats();
            if (object.openid != null)
                message.openid = String(object.openid);
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".gsbase.GamePlayerStats.metadata: object expected");
                message.metadata = {};
                for (var keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Invalid":
            case 0:
                message.status = 0;
                break;
            case "Joined":
            case 1:
                message.status = 1;
                break;
            case "Leave":
            case 2:
                message.status = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a GamePlayerStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.GamePlayerStats
         * @static
         * @param {gsbase.GamePlayerStats} message GamePlayerStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GamePlayerStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults) {
                object.openid = "";
                object.nickname = "";
                object.avatar = "";
                object.status = options.enums === String ? "Invalid" : 0;
            }
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
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
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.gsbase.PlayerGameStatus[message.status] === undefined ? message.status : $root.gsbase.PlayerGameStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this GamePlayerStats to JSON.
         * @function toJSON
         * @memberof gsbase.GamePlayerStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePlayerStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GamePlayerStats
         * @function getTypeUrl
         * @memberof gsbase.GamePlayerStats
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GamePlayerStats.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.GamePlayerStats";
        };

        return GamePlayerStats;
    })();

    /**
     * Version enum.
     * @name gsbase.Version
     * @enum {number}
     * @property {number} major=0 major value
     * @property {number} minor=1 minor value
     */
    gsbase.Version = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "major"] = 0;
        values[valuesById[1] = "minor"] = 1;
        return values;
    })();

    gsbase.GsBase = (function() {

        /**
         * Constructs a new GsBase service.
         * @memberof gsbase
         * @classdesc Represents a GsBase
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function GsBase(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (GsBase.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GsBase;

        /**
         * Creates new GsBase service using the specified rpc implementation.
         * @function create
         * @memberof gsbase.GsBase
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {GsBase} RPC service. Useful where requests and/or responses are streamed.
         */
        GsBase.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link gsbase.GsBase#joinRoom}.
         * @memberof gsbase.GsBase
         * @typedef JoinRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.Empty} [response] Empty
         */

        /**
         * Calls JoinRoom.
         * @function joinRoom
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IJoinRoomReq} request JoinRoomReq message or plain object
         * @param {gsbase.GsBase.JoinRoomCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsBase.prototype.joinRoom = function joinRoom(request, callback) {
            return this.rpcCall(joinRoom, $root.gsbase.JoinRoomReq, $root.gsbase.Empty, request, callback);
        }, "name", { value: "JoinRoom" });

        /**
         * Calls JoinRoom.
         * @function joinRoom
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IJoinRoomReq} request JoinRoomReq message or plain object
         * @returns {Promise<gsbase.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsbase.GsBase#leaveRoom}.
         * @memberof gsbase.GsBase
         * @typedef LeaveRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.Empty} [response] Empty
         */

        /**
         * Calls LeaveRoom.
         * @function leaveRoom
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.ILeaveRoomReq} request LeaveRoomReq message or plain object
         * @param {gsbase.GsBase.LeaveRoomCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsBase.prototype.leaveRoom = function leaveRoom(request, callback) {
            return this.rpcCall(leaveRoom, $root.gsbase.LeaveRoomReq, $root.gsbase.Empty, request, callback);
        }, "name", { value: "LeaveRoom" });

        /**
         * Calls LeaveRoom.
         * @function leaveRoom
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.ILeaveRoomReq} request LeaveRoomReq message or plain object
         * @returns {Promise<gsbase.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsbase.GsBase#ping}.
         * @memberof gsbase.GsBase
         * @typedef PingCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.Empty} [response] Empty
         */

        /**
         * Calls Ping.
         * @function ping
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IGsbPing} request GsbPing message or plain object
         * @param {gsbase.GsBase.PingCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsBase.prototype.ping = function ping(request, callback) {
            return this.rpcCall(ping, $root.gsbase.GsbPing, $root.gsbase.Empty, request, callback);
        }, "name", { value: "Ping" });

        /**
         * Calls Ping.
         * @function ping
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IGsbPing} request GsbPing message or plain object
         * @returns {Promise<gsbase.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsbase.GsBase#chat}.
         * @memberof gsbase.GsBase
         * @typedef ChatCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.Empty} [response] Empty
         */

        /**
         * Calls Chat.
         * @function chat
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IChatReq} request ChatReq message or plain object
         * @param {gsbase.GsBase.ChatCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsBase.prototype.chat = function chat(request, callback) {
            return this.rpcCall(chat, $root.gsbase.ChatReq, $root.gsbase.Empty, request, callback);
        }, "name", { value: "Chat" });

        /**
         * Calls Chat.
         * @function chat
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IChatReq} request ChatReq message or plain object
         * @returns {Promise<gsbase.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsbase.GsBase#applyDismiss}.
         * @memberof gsbase.GsBase
         * @typedef ApplyDismissCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.Empty} [response] Empty
         */

        /**
         * Calls ApplyDismiss.
         * @function applyDismiss
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IApplyDismissReq} request ApplyDismissReq message or plain object
         * @param {gsbase.GsBase.ApplyDismissCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsBase.prototype.applyDismiss = function applyDismiss(request, callback) {
            return this.rpcCall(applyDismiss, $root.gsbase.ApplyDismissReq, $root.gsbase.Empty, request, callback);
        }, "name", { value: "ApplyDismiss" });

        /**
         * Calls ApplyDismiss.
         * @function applyDismiss
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IApplyDismissReq} request ApplyDismissReq message or plain object
         * @returns {Promise<gsbase.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsbase.GsBase#replyDismiss}.
         * @memberof gsbase.GsBase
         * @typedef ReplyDismissCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.Empty} [response] Empty
         */

        /**
         * Calls ReplyDismiss.
         * @function replyDismiss
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IReplyDismissReq} request ReplyDismissReq message or plain object
         * @param {gsbase.GsBase.ReplyDismissCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsBase.prototype.replyDismiss = function replyDismiss(request, callback) {
            return this.rpcCall(replyDismiss, $root.gsbase.ReplyDismissReq, $root.gsbase.Empty, request, callback);
        }, "name", { value: "ReplyDismiss" });

        /**
         * Calls ReplyDismiss.
         * @function replyDismiss
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IReplyDismissReq} request ReplyDismissReq message or plain object
         * @returns {Promise<gsbase.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsbase.GsBase#kickOut}.
         * @memberof gsbase.GsBase
         * @typedef KickOutCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.Empty} [response] Empty
         */

        /**
         * Calls KickOut.
         * @function kickOut
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IKickOutReq} request KickOutReq message or plain object
         * @param {gsbase.GsBase.KickOutCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsBase.prototype.kickOut = function kickOut(request, callback) {
            return this.rpcCall(kickOut, $root.gsbase.KickOutReq, $root.gsbase.Empty, request, callback);
        }, "name", { value: "KickOut" });

        /**
         * Calls KickOut.
         * @function kickOut
         * @memberof gsbase.GsBase
         * @instance
         * @param {gsbase.IKickOutReq} request KickOutReq message or plain object
         * @returns {Promise<gsbase.Empty>} Promise
         * @variation 2
         */

        return GsBase;
    })();

    gsbase.GsRpc = (function() {

        /**
         * Constructs a new GsRpc service.
         * @memberof gsbase
         * @classdesc Represents a GsRpc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function GsRpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (GsRpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GsRpc;

        /**
         * Creates new GsRpc service using the specified rpc implementation.
         * @function create
         * @memberof gsbase.GsRpc
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {GsRpc} RPC service. Useful where requests and/or responses are streamed.
         */
        GsRpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link gsbase.GsRpc#createRoom}.
         * @memberof gsbase.GsRpc
         * @typedef CreateRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.CreateRoomRsp} [response] CreateRoomRsp
         */

        /**
         * Calls CreateRoom.
         * @function createRoom
         * @memberof gsbase.GsRpc
         * @instance
         * @param {gsbase.ICreateRoomReq} request CreateRoomReq message or plain object
         * @param {gsbase.GsRpc.CreateRoomCallback} callback Node-style callback called with the error, if any, and CreateRoomRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsRpc.prototype.createRoom = function createRoom(request, callback) {
            return this.rpcCall(createRoom, $root.gsbase.CreateRoomReq, $root.gsbase.CreateRoomRsp, request, callback);
        }, "name", { value: "CreateRoom" });

        /**
         * Calls CreateRoom.
         * @function createRoom
         * @memberof gsbase.GsRpc
         * @instance
         * @param {gsbase.ICreateRoomReq} request CreateRoomReq message or plain object
         * @returns {Promise<gsbase.CreateRoomRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsbase.GsRpc#dismissRoom}.
         * @memberof gsbase.GsRpc
         * @typedef DismissRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.DismissRoomRsp} [response] DismissRoomRsp
         */

        /**
         * Calls DismissRoom.
         * @function dismissRoom
         * @memberof gsbase.GsRpc
         * @instance
         * @param {gsbase.IDismissRoomReq} request DismissRoomReq message or plain object
         * @param {gsbase.GsRpc.DismissRoomCallback} callback Node-style callback called with the error, if any, and DismissRoomRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsRpc.prototype.dismissRoom = function dismissRoom(request, callback) {
            return this.rpcCall(dismissRoom, $root.gsbase.DismissRoomReq, $root.gsbase.DismissRoomRsp, request, callback);
        }, "name", { value: "DismissRoom" });

        /**
         * Calls DismissRoom.
         * @function dismissRoom
         * @memberof gsbase.GsRpc
         * @instance
         * @param {gsbase.IDismissRoomReq} request DismissRoomReq message or plain object
         * @returns {Promise<gsbase.DismissRoomRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsbase.GsRpc#checkRoomStatus}.
         * @memberof gsbase.GsRpc
         * @typedef CheckRoomStatusCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.CheckRoomStatusRsp} [response] CheckRoomStatusRsp
         */

        /**
         * Calls CheckRoomStatus.
         * @function checkRoomStatus
         * @memberof gsbase.GsRpc
         * @instance
         * @param {gsbase.ICheckRoomStatusReq} request CheckRoomStatusReq message or plain object
         * @param {gsbase.GsRpc.CheckRoomStatusCallback} callback Node-style callback called with the error, if any, and CheckRoomStatusRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsRpc.prototype.checkRoomStatus = function checkRoomStatus(request, callback) {
            return this.rpcCall(checkRoomStatus, $root.gsbase.CheckRoomStatusReq, $root.gsbase.CheckRoomStatusRsp, request, callback);
        }, "name", { value: "CheckRoomStatus" });

        /**
         * Calls CheckRoomStatus.
         * @function checkRoomStatus
         * @memberof gsbase.GsRpc
         * @instance
         * @param {gsbase.ICheckRoomStatusReq} request CheckRoomStatusReq message or plain object
         * @returns {Promise<gsbase.CheckRoomStatusRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsbase.GsRpc#getRoomInfo}.
         * @memberof gsbase.GsRpc
         * @typedef GetRoomInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.GetRoomInfoRsp} [response] GetRoomInfoRsp
         */

        /**
         * Calls GetRoomInfo.
         * @function getRoomInfo
         * @memberof gsbase.GsRpc
         * @instance
         * @param {gsbase.IGetRoomInfoReq} request GetRoomInfoReq message or plain object
         * @param {gsbase.GsRpc.GetRoomInfoCallback} callback Node-style callback called with the error, if any, and GetRoomInfoRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsRpc.prototype.getRoomInfo = function getRoomInfo(request, callback) {
            return this.rpcCall(getRoomInfo, $root.gsbase.GetRoomInfoReq, $root.gsbase.GetRoomInfoRsp, request, callback);
        }, "name", { value: "GetRoomInfo" });

        /**
         * Calls GetRoomInfo.
         * @function getRoomInfo
         * @memberof gsbase.GsRpc
         * @instance
         * @param {gsbase.IGetRoomInfoReq} request GetRoomInfoReq message or plain object
         * @returns {Promise<gsbase.GetRoomInfoRsp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link gsbase.GsRpc#kickOut}.
         * @memberof gsbase.GsRpc
         * @typedef KickOutCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {gsbase.KickOutRsp} [response] KickOutRsp
         */

        /**
         * Calls KickOut.
         * @function kickOut
         * @memberof gsbase.GsRpc
         * @instance
         * @param {gsbase.IKickOutReq} request KickOutReq message or plain object
         * @param {gsbase.GsRpc.KickOutCallback} callback Node-style callback called with the error, if any, and KickOutRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GsRpc.prototype.kickOut = function kickOut(request, callback) {
            return this.rpcCall(kickOut, $root.gsbase.KickOutReq, $root.gsbase.KickOutRsp, request, callback);
        }, "name", { value: "KickOut" });

        /**
         * Calls KickOut.
         * @function kickOut
         * @memberof gsbase.GsRpc
         * @instance
         * @param {gsbase.IKickOutReq} request KickOutReq message or plain object
         * @returns {Promise<gsbase.KickOutRsp>} Promise
         * @variation 2
         */

        return GsRpc;
    })();

    gsbase.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof gsbase
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof gsbase
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {gsbase.IEmpty=} [properties] Properties to set
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
         * @memberof gsbase.Empty
         * @static
         * @param {gsbase.IEmpty=} [properties] Properties to set
         * @returns {gsbase.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link gsbase.Empty.verify|verify} messages.
         * @function encode
         * @memberof gsbase.Empty
         * @static
         * @param {gsbase.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link gsbase.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.Empty
         * @static
         * @param {gsbase.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.Empty();
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
         * @memberof gsbase.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.Empty} Empty
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
         * @memberof gsbase.Empty
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
         * @memberof gsbase.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.Empty)
                return object;
            return new $root.gsbase.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.Empty
         * @static
         * @param {gsbase.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof gsbase.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof gsbase.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.Empty";
        };

        return Empty;
    })();

    gsbase.JoinRoomReq = (function() {

        /**
         * Properties of a JoinRoomReq.
         * @memberof gsbase
         * @interface IJoinRoomReq
         * @property {string|null} [roomId] JoinRoomReq roomId
         * @property {string|null} [token] JoinRoomReq token
         * @property {Object.<string,string>|null} [metadata] JoinRoomReq metadata
         */

        /**
         * Constructs a new JoinRoomReq.
         * @memberof gsbase
         * @classdesc Represents a JoinRoomReq.
         * @implements IJoinRoomReq
         * @constructor
         * @param {gsbase.IJoinRoomReq=} [properties] Properties to set
         */
        function JoinRoomReq(properties) {
            this.metadata = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomReq roomId.
         * @member {string} roomId
         * @memberof gsbase.JoinRoomReq
         * @instance
         */
        JoinRoomReq.prototype.roomId = "";

        /**
         * JoinRoomReq token.
         * @member {string} token
         * @memberof gsbase.JoinRoomReq
         * @instance
         */
        JoinRoomReq.prototype.token = "";

        /**
         * JoinRoomReq metadata.
         * @member {Object.<string,string>} metadata
         * @memberof gsbase.JoinRoomReq
         * @instance
         */
        JoinRoomReq.prototype.metadata = $util.emptyObject;

        /**
         * Creates a new JoinRoomReq instance using the specified properties.
         * @function create
         * @memberof gsbase.JoinRoomReq
         * @static
         * @param {gsbase.IJoinRoomReq=} [properties] Properties to set
         * @returns {gsbase.JoinRoomReq} JoinRoomReq instance
         */
        JoinRoomReq.create = function create(properties) {
            return new JoinRoomReq(properties);
        };

        /**
         * Encodes the specified JoinRoomReq message. Does not implicitly {@link gsbase.JoinRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.JoinRoomReq
         * @static
         * @param {gsbase.IJoinRoomReq} message JoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (var keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link gsbase.JoinRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.JoinRoomReq
         * @static
         * @param {gsbase.IJoinRoomReq} message JoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.JoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.JoinRoomReq} JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.JoinRoomReq(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.token = reader.string();
                        break;
                    }
                case 3: {
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.JoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.JoinRoomReq} JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomReq message.
         * @function verify
         * @memberof gsbase.JoinRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                var key = Object.keys(message.metadata);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a JoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.JoinRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.JoinRoomReq} JoinRoomReq
         */
        JoinRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.JoinRoomReq)
                return object;
            var message = new $root.gsbase.JoinRoomReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.token != null)
                message.token = String(object.token);
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".gsbase.JoinRoomReq.metadata: object expected");
                message.metadata = {};
                for (var keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.JoinRoomReq
         * @static
         * @param {gsbase.JoinRoomReq} message JoinRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults) {
                object.roomId = "";
                object.token = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            var keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this JoinRoomReq to JSON.
         * @function toJSON
         * @memberof gsbase.JoinRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinRoomReq
         * @function getTypeUrl
         * @memberof gsbase.JoinRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.JoinRoomReq";
        };

        return JoinRoomReq;
    })();

    gsbase.JoinRoomRsp = (function() {

        /**
         * Properties of a JoinRoomRsp.
         * @memberof gsbase
         * @interface IJoinRoomRsp
         * @property {string|null} [err] JoinRoomRsp err
         * @property {gsbase.IRoomInfo|null} [room] JoinRoomRsp room
         */

        /**
         * Constructs a new JoinRoomRsp.
         * @memberof gsbase
         * @classdesc Represents a JoinRoomRsp.
         * @implements IJoinRoomRsp
         * @constructor
         * @param {gsbase.IJoinRoomRsp=} [properties] Properties to set
         */
        function JoinRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomRsp err.
         * @member {string} err
         * @memberof gsbase.JoinRoomRsp
         * @instance
         */
        JoinRoomRsp.prototype.err = "";

        /**
         * JoinRoomRsp room.
         * @member {gsbase.IRoomInfo|null|undefined} room
         * @memberof gsbase.JoinRoomRsp
         * @instance
         */
        JoinRoomRsp.prototype.room = null;

        /**
         * Creates a new JoinRoomRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.JoinRoomRsp
         * @static
         * @param {gsbase.IJoinRoomRsp=} [properties] Properties to set
         * @returns {gsbase.JoinRoomRsp} JoinRoomRsp instance
         */
        JoinRoomRsp.create = function create(properties) {
            return new JoinRoomRsp(properties);
        };

        /**
         * Encodes the specified JoinRoomRsp message. Does not implicitly {@link gsbase.JoinRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.JoinRoomRsp
         * @static
         * @param {gsbase.IJoinRoomRsp} message JoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.gsbase.RoomInfo.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinRoomRsp message, length delimited. Does not implicitly {@link gsbase.JoinRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.JoinRoomRsp
         * @static
         * @param {gsbase.IJoinRoomRsp} message JoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.JoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.JoinRoomRsp} JoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.JoinRoomRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
                        break;
                    }
                case 2: {
                        message.room = $root.gsbase.RoomInfo.decode(reader, reader.uint32());
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
         * Decodes a JoinRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.JoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.JoinRoomRsp} JoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomRsp message.
         * @function verify
         * @memberof gsbase.JoinRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.gsbase.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates a JoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.JoinRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.JoinRoomRsp} JoinRoomRsp
         */
        JoinRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.JoinRoomRsp)
                return object;
            var message = new $root.gsbase.JoinRoomRsp();
            if (object.err != null)
                message.err = String(object.err);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".gsbase.JoinRoomRsp.room: object expected");
                message.room = $root.gsbase.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.JoinRoomRsp
         * @static
         * @param {gsbase.JoinRoomRsp} message JoinRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomRsp.toObject = function toObject(message, options) {
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
                object.room = $root.gsbase.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this JoinRoomRsp to JSON.
         * @function toJSON
         * @memberof gsbase.JoinRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinRoomRsp
         * @function getTypeUrl
         * @memberof gsbase.JoinRoomRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinRoomRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.JoinRoomRsp";
        };

        return JoinRoomRsp;
    })();

    gsbase.JoinRoomNot = (function() {

        /**
         * Properties of a JoinRoomNot.
         * @memberof gsbase
         * @interface IJoinRoomNot
         * @property {string|null} [openid] JoinRoomNot openid
         * @property {gsbase.IRoomInfo|null} [room] JoinRoomNot room
         */

        /**
         * Constructs a new JoinRoomNot.
         * @memberof gsbase
         * @classdesc Represents a JoinRoomNot.
         * @implements IJoinRoomNot
         * @constructor
         * @param {gsbase.IJoinRoomNot=} [properties] Properties to set
         */
        function JoinRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomNot openid.
         * @member {string} openid
         * @memberof gsbase.JoinRoomNot
         * @instance
         */
        JoinRoomNot.prototype.openid = "";

        /**
         * JoinRoomNot room.
         * @member {gsbase.IRoomInfo|null|undefined} room
         * @memberof gsbase.JoinRoomNot
         * @instance
         */
        JoinRoomNot.prototype.room = null;

        /**
         * Creates a new JoinRoomNot instance using the specified properties.
         * @function create
         * @memberof gsbase.JoinRoomNot
         * @static
         * @param {gsbase.IJoinRoomNot=} [properties] Properties to set
         * @returns {gsbase.JoinRoomNot} JoinRoomNot instance
         */
        JoinRoomNot.create = function create(properties) {
            return new JoinRoomNot(properties);
        };

        /**
         * Encodes the specified JoinRoomNot message. Does not implicitly {@link gsbase.JoinRoomNot.verify|verify} messages.
         * @function encode
         * @memberof gsbase.JoinRoomNot
         * @static
         * @param {gsbase.IJoinRoomNot} message JoinRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.gsbase.RoomInfo.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinRoomNot message, length delimited. Does not implicitly {@link gsbase.JoinRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.JoinRoomNot
         * @static
         * @param {gsbase.IJoinRoomNot} message JoinRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.JoinRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.JoinRoomNot} JoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.JoinRoomNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.openid = reader.string();
                        break;
                    }
                case 2: {
                        message.room = $root.gsbase.RoomInfo.decode(reader, reader.uint32());
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
         * Decodes a JoinRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.JoinRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.JoinRoomNot} JoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomNot message.
         * @function verify
         * @memberof gsbase.JoinRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.gsbase.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates a JoinRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.JoinRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.JoinRoomNot} JoinRoomNot
         */
        JoinRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.JoinRoomNot)
                return object;
            var message = new $root.gsbase.JoinRoomNot();
            if (object.openid != null)
                message.openid = String(object.openid);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".gsbase.JoinRoomNot.room: object expected");
                message.room = $root.gsbase.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.JoinRoomNot
         * @static
         * @param {gsbase.JoinRoomNot} message JoinRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.openid = "";
                object.room = null;
            }
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.gsbase.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this JoinRoomNot to JSON.
         * @function toJSON
         * @memberof gsbase.JoinRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinRoomNot
         * @function getTypeUrl
         * @memberof gsbase.JoinRoomNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinRoomNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.JoinRoomNot";
        };

        return JoinRoomNot;
    })();

    gsbase.LeaveRoomReq = (function() {

        /**
         * Properties of a LeaveRoomReq.
         * @memberof gsbase
         * @interface ILeaveRoomReq
         */

        /**
         * Constructs a new LeaveRoomReq.
         * @memberof gsbase
         * @classdesc Represents a LeaveRoomReq.
         * @implements ILeaveRoomReq
         * @constructor
         * @param {gsbase.ILeaveRoomReq=} [properties] Properties to set
         */
        function LeaveRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LeaveRoomReq instance using the specified properties.
         * @function create
         * @memberof gsbase.LeaveRoomReq
         * @static
         * @param {gsbase.ILeaveRoomReq=} [properties] Properties to set
         * @returns {gsbase.LeaveRoomReq} LeaveRoomReq instance
         */
        LeaveRoomReq.create = function create(properties) {
            return new LeaveRoomReq(properties);
        };

        /**
         * Encodes the specified LeaveRoomReq message. Does not implicitly {@link gsbase.LeaveRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.LeaveRoomReq
         * @static
         * @param {gsbase.ILeaveRoomReq} message LeaveRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LeaveRoomReq message, length delimited. Does not implicitly {@link gsbase.LeaveRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.LeaveRoomReq
         * @static
         * @param {gsbase.ILeaveRoomReq} message LeaveRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.LeaveRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.LeaveRoomReq} LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.LeaveRoomReq();
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
         * Decodes a LeaveRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.LeaveRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.LeaveRoomReq} LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveRoomReq message.
         * @function verify
         * @memberof gsbase.LeaveRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LeaveRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.LeaveRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.LeaveRoomReq} LeaveRoomReq
         */
        LeaveRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.LeaveRoomReq)
                return object;
            return new $root.gsbase.LeaveRoomReq();
        };

        /**
         * Creates a plain object from a LeaveRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.LeaveRoomReq
         * @static
         * @param {gsbase.LeaveRoomReq} message LeaveRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveRoomReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LeaveRoomReq to JSON.
         * @function toJSON
         * @memberof gsbase.LeaveRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LeaveRoomReq
         * @function getTypeUrl
         * @memberof gsbase.LeaveRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LeaveRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.LeaveRoomReq";
        };

        return LeaveRoomReq;
    })();

    gsbase.LeaveRoomRsp = (function() {

        /**
         * Properties of a LeaveRoomRsp.
         * @memberof gsbase
         * @interface ILeaveRoomRsp
         * @property {string|null} [err] LeaveRoomRsp err
         * @property {string|null} [openid] LeaveRoomRsp openid
         */

        /**
         * Constructs a new LeaveRoomRsp.
         * @memberof gsbase
         * @classdesc Represents a LeaveRoomRsp.
         * @implements ILeaveRoomRsp
         * @constructor
         * @param {gsbase.ILeaveRoomRsp=} [properties] Properties to set
         */
        function LeaveRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveRoomRsp err.
         * @member {string} err
         * @memberof gsbase.LeaveRoomRsp
         * @instance
         */
        LeaveRoomRsp.prototype.err = "";

        /**
         * LeaveRoomRsp openid.
         * @member {string} openid
         * @memberof gsbase.LeaveRoomRsp
         * @instance
         */
        LeaveRoomRsp.prototype.openid = "";

        /**
         * Creates a new LeaveRoomRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.LeaveRoomRsp
         * @static
         * @param {gsbase.ILeaveRoomRsp=} [properties] Properties to set
         * @returns {gsbase.LeaveRoomRsp} LeaveRoomRsp instance
         */
        LeaveRoomRsp.create = function create(properties) {
            return new LeaveRoomRsp(properties);
        };

        /**
         * Encodes the specified LeaveRoomRsp message. Does not implicitly {@link gsbase.LeaveRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.LeaveRoomRsp
         * @static
         * @param {gsbase.ILeaveRoomRsp} message LeaveRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.openid);
            return writer;
        };

        /**
         * Encodes the specified LeaveRoomRsp message, length delimited. Does not implicitly {@link gsbase.LeaveRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.LeaveRoomRsp
         * @static
         * @param {gsbase.ILeaveRoomRsp} message LeaveRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.LeaveRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.LeaveRoomRsp} LeaveRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.LeaveRoomRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
                        break;
                    }
                case 2: {
                        message.openid = reader.string();
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
         * Decodes a LeaveRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.LeaveRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.LeaveRoomRsp} LeaveRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveRoomRsp message.
         * @function verify
         * @memberof gsbase.LeaveRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            return null;
        };

        /**
         * Creates a LeaveRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.LeaveRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.LeaveRoomRsp} LeaveRoomRsp
         */
        LeaveRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.LeaveRoomRsp)
                return object;
            var message = new $root.gsbase.LeaveRoomRsp();
            if (object.err != null)
                message.err = String(object.err);
            if (object.openid != null)
                message.openid = String(object.openid);
            return message;
        };

        /**
         * Creates a plain object from a LeaveRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.LeaveRoomRsp
         * @static
         * @param {gsbase.LeaveRoomRsp} message LeaveRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err = "";
                object.openid = "";
            }
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            return object;
        };

        /**
         * Converts this LeaveRoomRsp to JSON.
         * @function toJSON
         * @memberof gsbase.LeaveRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LeaveRoomRsp
         * @function getTypeUrl
         * @memberof gsbase.LeaveRoomRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LeaveRoomRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.LeaveRoomRsp";
        };

        return LeaveRoomRsp;
    })();

    gsbase.LeaveRoomNot = (function() {

        /**
         * Properties of a LeaveRoomNot.
         * @memberof gsbase
         * @interface ILeaveRoomNot
         * @property {string|null} [plyId] LeaveRoomNot plyId
         * @property {gsbase.LeaveRoomNot.Type|null} [reason] LeaveRoomNot reason
         */

        /**
         * Constructs a new LeaveRoomNot.
         * @memberof gsbase
         * @classdesc Represents a LeaveRoomNot.
         * @implements ILeaveRoomNot
         * @constructor
         * @param {gsbase.ILeaveRoomNot=} [properties] Properties to set
         */
        function LeaveRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveRoomNot plyId.
         * @member {string} plyId
         * @memberof gsbase.LeaveRoomNot
         * @instance
         */
        LeaveRoomNot.prototype.plyId = "";

        /**
         * LeaveRoomNot reason.
         * @member {gsbase.LeaveRoomNot.Type} reason
         * @memberof gsbase.LeaveRoomNot
         * @instance
         */
        LeaveRoomNot.prototype.reason = 0;

        /**
         * Creates a new LeaveRoomNot instance using the specified properties.
         * @function create
         * @memberof gsbase.LeaveRoomNot
         * @static
         * @param {gsbase.ILeaveRoomNot=} [properties] Properties to set
         * @returns {gsbase.LeaveRoomNot} LeaveRoomNot instance
         */
        LeaveRoomNot.create = function create(properties) {
            return new LeaveRoomNot(properties);
        };

        /**
         * Encodes the specified LeaveRoomNot message. Does not implicitly {@link gsbase.LeaveRoomNot.verify|verify} messages.
         * @function encode
         * @memberof gsbase.LeaveRoomNot
         * @static
         * @param {gsbase.ILeaveRoomNot} message LeaveRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.plyId != null && Object.hasOwnProperty.call(message, "plyId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.plyId);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified LeaveRoomNot message, length delimited. Does not implicitly {@link gsbase.LeaveRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.LeaveRoomNot
         * @static
         * @param {gsbase.ILeaveRoomNot} message LeaveRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.LeaveRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.LeaveRoomNot} LeaveRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.LeaveRoomNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.plyId = reader.string();
                        break;
                    }
                case 2: {
                        message.reason = reader.int32();
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
         * Decodes a LeaveRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.LeaveRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.LeaveRoomNot} LeaveRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveRoomNot message.
         * @function verify
         * @memberof gsbase.LeaveRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.plyId != null && message.hasOwnProperty("plyId"))
                if (!$util.isString(message.plyId))
                    return "plyId: string expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                switch (message.reason) {
                default:
                    return "reason: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a LeaveRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.LeaveRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.LeaveRoomNot} LeaveRoomNot
         */
        LeaveRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.LeaveRoomNot)
                return object;
            var message = new $root.gsbase.LeaveRoomNot();
            if (object.plyId != null)
                message.plyId = String(object.plyId);
            switch (object.reason) {
            default:
                if (typeof object.reason === "number") {
                    message.reason = object.reason;
                    break;
                }
                break;
            case "Leave":
            case 0:
                message.reason = 0;
                break;
            case "Kick":
            case 1:
                message.reason = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a LeaveRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.LeaveRoomNot
         * @static
         * @param {gsbase.LeaveRoomNot} message LeaveRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.plyId = "";
                object.reason = options.enums === String ? "Leave" : 0;
            }
            if (message.plyId != null && message.hasOwnProperty("plyId"))
                object.plyId = message.plyId;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.gsbase.LeaveRoomNot.Type[message.reason] === undefined ? message.reason : $root.gsbase.LeaveRoomNot.Type[message.reason] : message.reason;
            return object;
        };

        /**
         * Converts this LeaveRoomNot to JSON.
         * @function toJSON
         * @memberof gsbase.LeaveRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LeaveRoomNot
         * @function getTypeUrl
         * @memberof gsbase.LeaveRoomNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LeaveRoomNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.LeaveRoomNot";
        };

        /**
         * Type enum.
         * @name gsbase.LeaveRoomNot.Type
         * @enum {number}
         * @property {number} Leave=0 Leave value
         * @property {number} Kick=1 Kick value
         */
        LeaveRoomNot.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Leave"] = 0;
            values[valuesById[1] = "Kick"] = 1;
            return values;
        })();

        return LeaveRoomNot;
    })();

    gsbase.DismissNot = (function() {

        /**
         * Properties of a DismissNot.
         * @memberof gsbase
         * @interface IDismissNot
         * @property {string|null} [msg] DismissNot msg
         * @property {gsbase.DismissNot.Type|null} [code] DismissNot code
         */

        /**
         * Constructs a new DismissNot.
         * @memberof gsbase
         * @classdesc Represents a DismissNot.
         * @implements IDismissNot
         * @constructor
         * @param {gsbase.IDismissNot=} [properties] Properties to set
         */
        function DismissNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissNot msg.
         * @member {string} msg
         * @memberof gsbase.DismissNot
         * @instance
         */
        DismissNot.prototype.msg = "";

        /**
         * DismissNot code.
         * @member {gsbase.DismissNot.Type} code
         * @memberof gsbase.DismissNot
         * @instance
         */
        DismissNot.prototype.code = 0;

        /**
         * Creates a new DismissNot instance using the specified properties.
         * @function create
         * @memberof gsbase.DismissNot
         * @static
         * @param {gsbase.IDismissNot=} [properties] Properties to set
         * @returns {gsbase.DismissNot} DismissNot instance
         */
        DismissNot.create = function create(properties) {
            return new DismissNot(properties);
        };

        /**
         * Encodes the specified DismissNot message. Does not implicitly {@link gsbase.DismissNot.verify|verify} messages.
         * @function encode
         * @memberof gsbase.DismissNot
         * @static
         * @param {gsbase.IDismissNot} message DismissNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified DismissNot message, length delimited. Does not implicitly {@link gsbase.DismissNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.DismissNot
         * @static
         * @param {gsbase.IDismissNot} message DismissNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissNot message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.DismissNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.DismissNot} DismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.DismissNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.string();
                        break;
                    }
                case 2: {
                        message.code = reader.int32();
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
         * Decodes a DismissNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.DismissNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.DismissNot} DismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissNot message.
         * @function verify
         * @memberof gsbase.DismissNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a DismissNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.DismissNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.DismissNot} DismissNot
         */
        DismissNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.DismissNot)
                return object;
            var message = new $root.gsbase.DismissNot();
            if (object.msg != null)
                message.msg = String(object.msg);
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "GameOverDismiss":
            case 0:
                message.code = 0;
                break;
            case "OwnerDismiss":
            case 1:
                message.code = 1;
                break;
            case "UserDismiss":
            case 2:
                message.code = 2;
                break;
            case "TimeOutDismiss":
            case 3:
                message.code = 3;
                break;
            case "AdminDismiss":
            case 4:
                message.code = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a DismissNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.DismissNot
         * @static
         * @param {gsbase.DismissNot} message DismissNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msg = "";
                object.code = options.enums === String ? "GameOverDismiss" : 0;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.gsbase.DismissNot.Type[message.code] === undefined ? message.code : $root.gsbase.DismissNot.Type[message.code] : message.code;
            return object;
        };

        /**
         * Converts this DismissNot to JSON.
         * @function toJSON
         * @memberof gsbase.DismissNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DismissNot
         * @function getTypeUrl
         * @memberof gsbase.DismissNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DismissNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.DismissNot";
        };

        /**
         * Type enum.
         * @name gsbase.DismissNot.Type
         * @enum {number}
         * @property {number} GameOverDismiss=0 GameOverDismiss value
         * @property {number} OwnerDismiss=1 OwnerDismiss value
         * @property {number} UserDismiss=2 UserDismiss value
         * @property {number} TimeOutDismiss=3 TimeOutDismiss value
         * @property {number} AdminDismiss=4 AdminDismiss value
         */
        DismissNot.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GameOverDismiss"] = 0;
            values[valuesById[1] = "OwnerDismiss"] = 1;
            values[valuesById[2] = "UserDismiss"] = 2;
            values[valuesById[3] = "TimeOutDismiss"] = 3;
            values[valuesById[4] = "AdminDismiss"] = 4;
            return values;
        })();

        return DismissNot;
    })();

    gsbase.GsbPing = (function() {

        /**
         * Properties of a GsbPing.
         * @memberof gsbase
         * @interface IGsbPing
         * @property {number|Long|null} [now] GsbPing now
         */

        /**
         * Constructs a new GsbPing.
         * @memberof gsbase
         * @classdesc Represents a GsbPing.
         * @implements IGsbPing
         * @constructor
         * @param {gsbase.IGsbPing=} [properties] Properties to set
         */
        function GsbPing(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GsbPing now.
         * @member {number|Long} now
         * @memberof gsbase.GsbPing
         * @instance
         */
        GsbPing.prototype.now = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GsbPing instance using the specified properties.
         * @function create
         * @memberof gsbase.GsbPing
         * @static
         * @param {gsbase.IGsbPing=} [properties] Properties to set
         * @returns {gsbase.GsbPing} GsbPing instance
         */
        GsbPing.create = function create(properties) {
            return new GsbPing(properties);
        };

        /**
         * Encodes the specified GsbPing message. Does not implicitly {@link gsbase.GsbPing.verify|verify} messages.
         * @function encode
         * @memberof gsbase.GsbPing
         * @static
         * @param {gsbase.IGsbPing} message GsbPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GsbPing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.now != null && Object.hasOwnProperty.call(message, "now"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.now);
            return writer;
        };

        /**
         * Encodes the specified GsbPing message, length delimited. Does not implicitly {@link gsbase.GsbPing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.GsbPing
         * @static
         * @param {gsbase.IGsbPing} message GsbPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GsbPing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GsbPing message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.GsbPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.GsbPing} GsbPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GsbPing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.GsbPing();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.now = reader.int64();
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
         * Decodes a GsbPing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.GsbPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.GsbPing} GsbPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GsbPing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GsbPing message.
         * @function verify
         * @memberof gsbase.GsbPing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GsbPing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.now != null && message.hasOwnProperty("now"))
                if (!$util.isInteger(message.now) && !(message.now && $util.isInteger(message.now.low) && $util.isInteger(message.now.high)))
                    return "now: integer|Long expected";
            return null;
        };

        /**
         * Creates a GsbPing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.GsbPing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.GsbPing} GsbPing
         */
        GsbPing.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.GsbPing)
                return object;
            var message = new $root.gsbase.GsbPing();
            if (object.now != null)
                if ($util.Long)
                    (message.now = $util.Long.fromValue(object.now)).unsigned = false;
                else if (typeof object.now === "string")
                    message.now = parseInt(object.now, 10);
                else if (typeof object.now === "number")
                    message.now = object.now;
                else if (typeof object.now === "object")
                    message.now = new $util.LongBits(object.now.low >>> 0, object.now.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GsbPing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.GsbPing
         * @static
         * @param {gsbase.GsbPing} message GsbPing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GsbPing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.now = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.now = options.longs === String ? "0" : 0;
            if (message.now != null && message.hasOwnProperty("now"))
                if (typeof message.now === "number")
                    object.now = options.longs === String ? String(message.now) : message.now;
                else
                    object.now = options.longs === String ? $util.Long.prototype.toString.call(message.now) : options.longs === Number ? new $util.LongBits(message.now.low >>> 0, message.now.high >>> 0).toNumber() : message.now;
            return object;
        };

        /**
         * Converts this GsbPing to JSON.
         * @function toJSON
         * @memberof gsbase.GsbPing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GsbPing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GsbPing
         * @function getTypeUrl
         * @memberof gsbase.GsbPing
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GsbPing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.GsbPing";
        };

        return GsbPing;
    })();

    gsbase.GsbPong = (function() {

        /**
         * Properties of a GsbPong.
         * @memberof gsbase
         * @interface IGsbPong
         * @property {string|null} [err] GsbPong err
         * @property {number|Long|null} [cliNow] GsbPong cliNow
         * @property {number|Long|null} [now] GsbPong now
         */

        /**
         * Constructs a new GsbPong.
         * @memberof gsbase
         * @classdesc Represents a GsbPong.
         * @implements IGsbPong
         * @constructor
         * @param {gsbase.IGsbPong=} [properties] Properties to set
         */
        function GsbPong(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GsbPong err.
         * @member {string} err
         * @memberof gsbase.GsbPong
         * @instance
         */
        GsbPong.prototype.err = "";

        /**
         * GsbPong cliNow.
         * @member {number|Long} cliNow
         * @memberof gsbase.GsbPong
         * @instance
         */
        GsbPong.prototype.cliNow = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GsbPong now.
         * @member {number|Long} now
         * @memberof gsbase.GsbPong
         * @instance
         */
        GsbPong.prototype.now = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GsbPong instance using the specified properties.
         * @function create
         * @memberof gsbase.GsbPong
         * @static
         * @param {gsbase.IGsbPong=} [properties] Properties to set
         * @returns {gsbase.GsbPong} GsbPong instance
         */
        GsbPong.create = function create(properties) {
            return new GsbPong(properties);
        };

        /**
         * Encodes the specified GsbPong message. Does not implicitly {@link gsbase.GsbPong.verify|verify} messages.
         * @function encode
         * @memberof gsbase.GsbPong
         * @static
         * @param {gsbase.IGsbPong} message GsbPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GsbPong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            if (message.cliNow != null && Object.hasOwnProperty.call(message, "cliNow"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.cliNow);
            if (message.now != null && Object.hasOwnProperty.call(message, "now"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.now);
            return writer;
        };

        /**
         * Encodes the specified GsbPong message, length delimited. Does not implicitly {@link gsbase.GsbPong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.GsbPong
         * @static
         * @param {gsbase.IGsbPong} message GsbPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GsbPong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GsbPong message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.GsbPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.GsbPong} GsbPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GsbPong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.GsbPong();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
                        break;
                    }
                case 2: {
                        message.cliNow = reader.int64();
                        break;
                    }
                case 3: {
                        message.now = reader.int64();
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
         * Decodes a GsbPong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.GsbPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.GsbPong} GsbPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GsbPong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GsbPong message.
         * @function verify
         * @memberof gsbase.GsbPong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GsbPong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            if (message.cliNow != null && message.hasOwnProperty("cliNow"))
                if (!$util.isInteger(message.cliNow) && !(message.cliNow && $util.isInteger(message.cliNow.low) && $util.isInteger(message.cliNow.high)))
                    return "cliNow: integer|Long expected";
            if (message.now != null && message.hasOwnProperty("now"))
                if (!$util.isInteger(message.now) && !(message.now && $util.isInteger(message.now.low) && $util.isInteger(message.now.high)))
                    return "now: integer|Long expected";
            return null;
        };

        /**
         * Creates a GsbPong message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.GsbPong
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.GsbPong} GsbPong
         */
        GsbPong.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.GsbPong)
                return object;
            var message = new $root.gsbase.GsbPong();
            if (object.err != null)
                message.err = String(object.err);
            if (object.cliNow != null)
                if ($util.Long)
                    (message.cliNow = $util.Long.fromValue(object.cliNow)).unsigned = false;
                else if (typeof object.cliNow === "string")
                    message.cliNow = parseInt(object.cliNow, 10);
                else if (typeof object.cliNow === "number")
                    message.cliNow = object.cliNow;
                else if (typeof object.cliNow === "object")
                    message.cliNow = new $util.LongBits(object.cliNow.low >>> 0, object.cliNow.high >>> 0).toNumber();
            if (object.now != null)
                if ($util.Long)
                    (message.now = $util.Long.fromValue(object.now)).unsigned = false;
                else if (typeof object.now === "string")
                    message.now = parseInt(object.now, 10);
                else if (typeof object.now === "number")
                    message.now = object.now;
                else if (typeof object.now === "object")
                    message.now = new $util.LongBits(object.now.low >>> 0, object.now.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GsbPong message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.GsbPong
         * @static
         * @param {gsbase.GsbPong} message GsbPong
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GsbPong.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.cliNow = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cliNow = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.now = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.now = options.longs === String ? "0" : 0;
            }
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            if (message.cliNow != null && message.hasOwnProperty("cliNow"))
                if (typeof message.cliNow === "number")
                    object.cliNow = options.longs === String ? String(message.cliNow) : message.cliNow;
                else
                    object.cliNow = options.longs === String ? $util.Long.prototype.toString.call(message.cliNow) : options.longs === Number ? new $util.LongBits(message.cliNow.low >>> 0, message.cliNow.high >>> 0).toNumber() : message.cliNow;
            if (message.now != null && message.hasOwnProperty("now"))
                if (typeof message.now === "number")
                    object.now = options.longs === String ? String(message.now) : message.now;
                else
                    object.now = options.longs === String ? $util.Long.prototype.toString.call(message.now) : options.longs === Number ? new $util.LongBits(message.now.low >>> 0, message.now.high >>> 0).toNumber() : message.now;
            return object;
        };

        /**
         * Converts this GsbPong to JSON.
         * @function toJSON
         * @memberof gsbase.GsbPong
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GsbPong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GsbPong
         * @function getTypeUrl
         * @memberof gsbase.GsbPong
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GsbPong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.GsbPong";
        };

        return GsbPong;
    })();

    /**
     * ChatType enum.
     * @name gsbase.ChatType
     * @enum {number}
     * @property {number} Text=0 Text value
     * @property {number} Emoji=1 Emoji value
     */
    gsbase.ChatType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Text"] = 0;
        values[valuesById[1] = "Emoji"] = 1;
        return values;
    })();

    gsbase.ChatReq = (function() {

        /**
         * Properties of a ChatReq.
         * @memberof gsbase
         * @interface IChatReq
         * @property {gsbase.ChatType|null} [type] ChatReq type
         * @property {string|null} [content] ChatReq content
         * @property {string|null} [to] ChatReq to
         */

        /**
         * Constructs a new ChatReq.
         * @memberof gsbase
         * @classdesc Represents a ChatReq.
         * @implements IChatReq
         * @constructor
         * @param {gsbase.IChatReq=} [properties] Properties to set
         */
        function ChatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatReq type.
         * @member {gsbase.ChatType} type
         * @memberof gsbase.ChatReq
         * @instance
         */
        ChatReq.prototype.type = 0;

        /**
         * ChatReq content.
         * @member {string} content
         * @memberof gsbase.ChatReq
         * @instance
         */
        ChatReq.prototype.content = "";

        /**
         * ChatReq to.
         * @member {string} to
         * @memberof gsbase.ChatReq
         * @instance
         */
        ChatReq.prototype.to = "";

        /**
         * Creates a new ChatReq instance using the specified properties.
         * @function create
         * @memberof gsbase.ChatReq
         * @static
         * @param {gsbase.IChatReq=} [properties] Properties to set
         * @returns {gsbase.ChatReq} ChatReq instance
         */
        ChatReq.create = function create(properties) {
            return new ChatReq(properties);
        };

        /**
         * Encodes the specified ChatReq message. Does not implicitly {@link gsbase.ChatReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.ChatReq
         * @static
         * @param {gsbase.IChatReq} message ChatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.to);
            return writer;
        };

        /**
         * Encodes the specified ChatReq message, length delimited. Does not implicitly {@link gsbase.ChatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.ChatReq
         * @static
         * @param {gsbase.IChatReq} message ChatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.ChatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.ChatReq} ChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ChatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.to = reader.string();
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
         * Decodes a ChatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.ChatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.ChatReq} ChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatReq message.
         * @function verify
         * @memberof gsbase.ChatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            return null;
        };

        /**
         * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.ChatReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.ChatReq} ChatReq
         */
        ChatReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.ChatReq)
                return object;
            var message = new $root.gsbase.ChatReq();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Text":
            case 0:
                message.type = 0;
                break;
            case "Emoji":
            case 1:
                message.type = 1;
                break;
            }
            if (object.content != null)
                message.content = String(object.content);
            if (object.to != null)
                message.to = String(object.to);
            return message;
        };

        /**
         * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.ChatReq
         * @static
         * @param {gsbase.ChatReq} message ChatReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "Text" : 0;
                object.content = "";
                object.to = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.gsbase.ChatType[message.type] === undefined ? message.type : $root.gsbase.ChatType[message.type] : message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            return object;
        };

        /**
         * Converts this ChatReq to JSON.
         * @function toJSON
         * @memberof gsbase.ChatReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatReq
         * @function getTypeUrl
         * @memberof gsbase.ChatReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.ChatReq";
        };

        return ChatReq;
    })();

    gsbase.ChatRsp = (function() {

        /**
         * Properties of a ChatRsp.
         * @memberof gsbase
         * @interface IChatRsp
         * @property {string|null} [err] ChatRsp err
         */

        /**
         * Constructs a new ChatRsp.
         * @memberof gsbase
         * @classdesc Represents a ChatRsp.
         * @implements IChatRsp
         * @constructor
         * @param {gsbase.IChatRsp=} [properties] Properties to set
         */
        function ChatRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatRsp err.
         * @member {string} err
         * @memberof gsbase.ChatRsp
         * @instance
         */
        ChatRsp.prototype.err = "";

        /**
         * Creates a new ChatRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.ChatRsp
         * @static
         * @param {gsbase.IChatRsp=} [properties] Properties to set
         * @returns {gsbase.ChatRsp} ChatRsp instance
         */
        ChatRsp.create = function create(properties) {
            return new ChatRsp(properties);
        };

        /**
         * Encodes the specified ChatRsp message. Does not implicitly {@link gsbase.ChatRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.ChatRsp
         * @static
         * @param {gsbase.IChatRsp} message ChatRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified ChatRsp message, length delimited. Does not implicitly {@link gsbase.ChatRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.ChatRsp
         * @static
         * @param {gsbase.IChatRsp} message ChatRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.ChatRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.ChatRsp} ChatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ChatRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
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
         * Decodes a ChatRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.ChatRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.ChatRsp} ChatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatRsp message.
         * @function verify
         * @memberof gsbase.ChatRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates a ChatRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.ChatRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.ChatRsp} ChatRsp
         */
        ChatRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.ChatRsp)
                return object;
            var message = new $root.gsbase.ChatRsp();
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from a ChatRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.ChatRsp
         * @static
         * @param {gsbase.ChatRsp} message ChatRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = "";
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this ChatRsp to JSON.
         * @function toJSON
         * @memberof gsbase.ChatRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatRsp
         * @function getTypeUrl
         * @memberof gsbase.ChatRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.ChatRsp";
        };

        return ChatRsp;
    })();

    gsbase.ChatNot = (function() {

        /**
         * Properties of a ChatNot.
         * @memberof gsbase
         * @interface IChatNot
         * @property {string|null} [from] ChatNot from
         * @property {string|null} [to] ChatNot to
         * @property {gsbase.ChatType|null} [type] ChatNot type
         * @property {string|null} [content] ChatNot content
         */

        /**
         * Constructs a new ChatNot.
         * @memberof gsbase
         * @classdesc Represents a ChatNot.
         * @implements IChatNot
         * @constructor
         * @param {gsbase.IChatNot=} [properties] Properties to set
         */
        function ChatNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatNot from.
         * @member {string} from
         * @memberof gsbase.ChatNot
         * @instance
         */
        ChatNot.prototype.from = "";

        /**
         * ChatNot to.
         * @member {string} to
         * @memberof gsbase.ChatNot
         * @instance
         */
        ChatNot.prototype.to = "";

        /**
         * ChatNot type.
         * @member {gsbase.ChatType} type
         * @memberof gsbase.ChatNot
         * @instance
         */
        ChatNot.prototype.type = 0;

        /**
         * ChatNot content.
         * @member {string} content
         * @memberof gsbase.ChatNot
         * @instance
         */
        ChatNot.prototype.content = "";

        /**
         * Creates a new ChatNot instance using the specified properties.
         * @function create
         * @memberof gsbase.ChatNot
         * @static
         * @param {gsbase.IChatNot=} [properties] Properties to set
         * @returns {gsbase.ChatNot} ChatNot instance
         */
        ChatNot.create = function create(properties) {
            return new ChatNot(properties);
        };

        /**
         * Encodes the specified ChatNot message. Does not implicitly {@link gsbase.ChatNot.verify|verify} messages.
         * @function encode
         * @memberof gsbase.ChatNot
         * @static
         * @param {gsbase.IChatNot} message ChatNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.from);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.to);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified ChatNot message, length delimited. Does not implicitly {@link gsbase.ChatNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.ChatNot
         * @static
         * @param {gsbase.IChatNot} message ChatNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatNot message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.ChatNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.ChatNot} ChatNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ChatNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.from = reader.string();
                        break;
                    }
                case 2: {
                        message.to = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.content = reader.string();
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
         * Decodes a ChatNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.ChatNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.ChatNot} ChatNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatNot message.
         * @function verify
         * @memberof gsbase.ChatNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a ChatNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.ChatNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.ChatNot} ChatNot
         */
        ChatNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.ChatNot)
                return object;
            var message = new $root.gsbase.ChatNot();
            if (object.from != null)
                message.from = String(object.from);
            if (object.to != null)
                message.to = String(object.to);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Text":
            case 0:
                message.type = 0;
                break;
            case "Emoji":
            case 1:
                message.type = 1;
                break;
            }
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a ChatNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.ChatNot
         * @static
         * @param {gsbase.ChatNot} message ChatNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.from = "";
                object.to = "";
                object.type = options.enums === String ? "Text" : 0;
                object.content = "";
            }
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.gsbase.ChatType[message.type] === undefined ? message.type : $root.gsbase.ChatType[message.type] : message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this ChatNot to JSON.
         * @function toJSON
         * @memberof gsbase.ChatNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatNot
         * @function getTypeUrl
         * @memberof gsbase.ChatNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.ChatNot";
        };

        return ChatNot;
    })();

    gsbase.CreateRoomReq = (function() {

        /**
         * Properties of a CreateRoomReq.
         * @memberof gsbase
         * @interface ICreateRoomReq
         * @property {string|null} [roomId] CreateRoomReq roomId
         * @property {string|null} [properties] CreateRoomReq properties
         * @property {string|null} [owner] CreateRoomReq owner
         * @property {Array.<string>|null} [labels] CreateRoomReq labels
         * @property {Array.<string>|null} [aliases] CreateRoomReq aliases
         */

        /**
         * Constructs a new CreateRoomReq.
         * @memberof gsbase
         * @classdesc Represents a CreateRoomReq.
         * @implements ICreateRoomReq
         * @constructor
         * @param {gsbase.ICreateRoomReq=} [properties] Properties to set
         */
        function CreateRoomReq(properties) {
            this.labels = [];
            this.aliases = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomReq roomId.
         * @member {string} roomId
         * @memberof gsbase.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.roomId = "";

        /**
         * CreateRoomReq properties.
         * @member {string} properties
         * @memberof gsbase.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.properties = "";

        /**
         * CreateRoomReq owner.
         * @member {string} owner
         * @memberof gsbase.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.owner = "";

        /**
         * CreateRoomReq labels.
         * @member {Array.<string>} labels
         * @memberof gsbase.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.labels = $util.emptyArray;

        /**
         * CreateRoomReq aliases.
         * @member {Array.<string>} aliases
         * @memberof gsbase.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.aliases = $util.emptyArray;

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @function create
         * @memberof gsbase.CreateRoomReq
         * @static
         * @param {gsbase.ICreateRoomReq=} [properties] Properties to set
         * @returns {gsbase.CreateRoomReq} CreateRoomReq instance
         */
        CreateRoomReq.create = function create(properties) {
            return new CreateRoomReq(properties);
        };

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link gsbase.CreateRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.CreateRoomReq
         * @static
         * @param {gsbase.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.properties);
            if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.owner);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.labels[i]);
            if (message.aliases != null && message.aliases.length)
                for (var i = 0; i < message.aliases.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.aliases[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link gsbase.CreateRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.CreateRoomReq
         * @static
         * @param {gsbase.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.CreateRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.properties = reader.string();
                        break;
                    }
                case 3: {
                        message.owner = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push(reader.string());
                        break;
                    }
                case 5: {
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
         * @memberof gsbase.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.CreateRoomReq} CreateRoomReq
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
         * @memberof gsbase.CreateRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.properties != null && message.hasOwnProperty("properties"))
                if (!$util.isString(message.properties))
                    return "properties: string expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isString(message.owner))
                    return "owner: string expected";
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
         * @memberof gsbase.CreateRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.CreateRoomReq} CreateRoomReq
         */
        CreateRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.CreateRoomReq)
                return object;
            var message = new $root.gsbase.CreateRoomReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.properties != null)
                message.properties = String(object.properties);
            if (object.owner != null)
                message.owner = String(object.owner);
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".gsbase.CreateRoomReq.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i)
                    message.labels[i] = String(object.labels[i]);
            }
            if (object.aliases) {
                if (!Array.isArray(object.aliases))
                    throw TypeError(".gsbase.CreateRoomReq.aliases: array expected");
                message.aliases = [];
                for (var i = 0; i < object.aliases.length; ++i)
                    message.aliases[i] = String(object.aliases[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.CreateRoomReq
         * @static
         * @param {gsbase.CreateRoomReq} message CreateRoomReq
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
            if (options.defaults) {
                object.roomId = "";
                object.properties = "";
                object.owner = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.properties != null && message.hasOwnProperty("properties"))
                object.properties = message.properties;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
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
         * @memberof gsbase.CreateRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateRoomReq
         * @function getTypeUrl
         * @memberof gsbase.CreateRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.CreateRoomReq";
        };

        return CreateRoomReq;
    })();

    gsbase.CreateRoomRsp = (function() {

        /**
         * Properties of a CreateRoomRsp.
         * @memberof gsbase
         * @interface ICreateRoomRsp
         * @property {string|null} [err] CreateRoomRsp err
         * @property {string|null} [serverId] CreateRoomRsp serverId
         * @property {string|null} [roomId] CreateRoomRsp roomId
         * @property {string|null} [gameGid] CreateRoomRsp gameGid
         * @property {string|null} [metadata] CreateRoomRsp metadata
         * @property {string|null} [creator] CreateRoomRsp creator
         * @property {number|Long|null} [createAt] CreateRoomRsp createAt
         * @property {number|null} [minPlayerNum] CreateRoomRsp minPlayerNum
         * @property {number|null} [maxPlayerNum] CreateRoomRsp maxPlayerNum
         * @property {Array.<string>|null} [labels] CreateRoomRsp labels
         * @property {Array.<string>|null} [aliases] CreateRoomRsp aliases
         * @property {Array.<gsbase.IGamePlayerStats>|null} [players] CreateRoomRsp players
         * @property {number|null} [platAid] CreateRoomRsp platAid
         * @property {string|null} [shareCode] CreateRoomRsp shareCode
         * @property {string|null} [ruleId] CreateRoomRsp ruleId
         * @property {gsbase.RoomType|null} [type] CreateRoomRsp type
         * @property {string|null} [stats] CreateRoomRsp stats
         */

        /**
         * Constructs a new CreateRoomRsp.
         * @memberof gsbase
         * @classdesc Represents a CreateRoomRsp.
         * @implements ICreateRoomRsp
         * @constructor
         * @param {gsbase.ICreateRoomRsp=} [properties] Properties to set
         */
        function CreateRoomRsp(properties) {
            this.labels = [];
            this.aliases = [];
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomRsp err.
         * @member {string} err
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.err = "";

        /**
         * CreateRoomRsp serverId.
         * @member {string} serverId
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.serverId = "";

        /**
         * CreateRoomRsp roomId.
         * @member {string} roomId
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.roomId = "";

        /**
         * CreateRoomRsp gameGid.
         * @member {string} gameGid
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.gameGid = "";

        /**
         * CreateRoomRsp metadata.
         * @member {string} metadata
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.metadata = "";

        /**
         * CreateRoomRsp creator.
         * @member {string} creator
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.creator = "";

        /**
         * CreateRoomRsp createAt.
         * @member {number|Long} createAt
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.createAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateRoomRsp minPlayerNum.
         * @member {number} minPlayerNum
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.minPlayerNum = 0;

        /**
         * CreateRoomRsp maxPlayerNum.
         * @member {number} maxPlayerNum
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.maxPlayerNum = 0;

        /**
         * CreateRoomRsp labels.
         * @member {Array.<string>} labels
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.labels = $util.emptyArray;

        /**
         * CreateRoomRsp aliases.
         * @member {Array.<string>} aliases
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.aliases = $util.emptyArray;

        /**
         * CreateRoomRsp players.
         * @member {Array.<gsbase.IGamePlayerStats>} players
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.players = $util.emptyArray;

        /**
         * CreateRoomRsp platAid.
         * @member {number} platAid
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.platAid = 0;

        /**
         * CreateRoomRsp shareCode.
         * @member {string} shareCode
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.shareCode = "";

        /**
         * CreateRoomRsp ruleId.
         * @member {string} ruleId
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.ruleId = "";

        /**
         * CreateRoomRsp type.
         * @member {gsbase.RoomType} type
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.type = 0;

        /**
         * CreateRoomRsp stats.
         * @member {string} stats
         * @memberof gsbase.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.stats = "";

        /**
         * Creates a new CreateRoomRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.CreateRoomRsp
         * @static
         * @param {gsbase.ICreateRoomRsp=} [properties] Properties to set
         * @returns {gsbase.CreateRoomRsp} CreateRoomRsp instance
         */
        CreateRoomRsp.create = function create(properties) {
            return new CreateRoomRsp(properties);
        };

        /**
         * Encodes the specified CreateRoomRsp message. Does not implicitly {@link gsbase.CreateRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.CreateRoomRsp
         * @static
         * @param {gsbase.ICreateRoomRsp} message CreateRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverId);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomId);
            if (message.gameGid != null && Object.hasOwnProperty.call(message, "gameGid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameGid);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.metadata);
            if (message.creator != null && Object.hasOwnProperty.call(message, "creator"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.creator);
            if (message.createAt != null && Object.hasOwnProperty.call(message, "createAt"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.createAt);
            if (message.minPlayerNum != null && Object.hasOwnProperty.call(message, "minPlayerNum"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.minPlayerNum);
            if (message.maxPlayerNum != null && Object.hasOwnProperty.call(message, "maxPlayerNum"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.maxPlayerNum);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.labels[i]);
            if (message.aliases != null && message.aliases.length)
                for (var i = 0; i < message.aliases.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.aliases[i]);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.gsbase.GamePlayerStats.encode(message.players[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.platAid != null && Object.hasOwnProperty.call(message, "platAid"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.platAid);
            if (message.shareCode != null && Object.hasOwnProperty.call(message, "shareCode"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.shareCode);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.ruleId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.type);
            if (message.stats != null && Object.hasOwnProperty.call(message, "stats"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.stats);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomRsp message, length delimited. Does not implicitly {@link gsbase.CreateRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.CreateRoomRsp
         * @static
         * @param {gsbase.ICreateRoomRsp} message CreateRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.CreateRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.CreateRoomRsp} CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.CreateRoomRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
                        break;
                    }
                case 2: {
                        message.serverId = reader.string();
                        break;
                    }
                case 3: {
                        message.roomId = reader.string();
                        break;
                    }
                case 4: {
                        message.gameGid = reader.string();
                        break;
                    }
                case 5: {
                        message.metadata = reader.string();
                        break;
                    }
                case 6: {
                        message.creator = reader.string();
                        break;
                    }
                case 7: {
                        message.createAt = reader.int64();
                        break;
                    }
                case 8: {
                        message.minPlayerNum = reader.int32();
                        break;
                    }
                case 9: {
                        message.maxPlayerNum = reader.int32();
                        break;
                    }
                case 10: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push(reader.string());
                        break;
                    }
                case 11: {
                        if (!(message.aliases && message.aliases.length))
                            message.aliases = [];
                        message.aliases.push(reader.string());
                        break;
                    }
                case 12: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.gsbase.GamePlayerStats.decode(reader, reader.uint32()));
                        break;
                    }
                case 13: {
                        message.platAid = reader.int32();
                        break;
                    }
                case 14: {
                        message.shareCode = reader.string();
                        break;
                    }
                case 15: {
                        message.ruleId = reader.string();
                        break;
                    }
                case 16: {
                        message.type = reader.int32();
                        break;
                    }
                case 17: {
                        message.stats = reader.string();
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
         * @memberof gsbase.CreateRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.CreateRoomRsp} CreateRoomRsp
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
         * @memberof gsbase.CreateRoomRsp
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
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                if (!$util.isString(message.gameGid))
                    return "gameGid: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                if (!$util.isString(message.metadata))
                    return "metadata: string expected";
            if (message.creator != null && message.hasOwnProperty("creator"))
                if (!$util.isString(message.creator))
                    return "creator: string expected";
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (!$util.isInteger(message.createAt) && !(message.createAt && $util.isInteger(message.createAt.low) && $util.isInteger(message.createAt.high)))
                    return "createAt: integer|Long expected";
            if (message.minPlayerNum != null && message.hasOwnProperty("minPlayerNum"))
                if (!$util.isInteger(message.minPlayerNum))
                    return "minPlayerNum: integer expected";
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                if (!$util.isInteger(message.maxPlayerNum))
                    return "maxPlayerNum: integer expected";
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
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.gsbase.GamePlayerStats.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                if (!$util.isInteger(message.platAid))
                    return "platAid: integer expected";
            if (message.shareCode != null && message.hasOwnProperty("shareCode"))
                if (!$util.isString(message.shareCode))
                    return "shareCode: string expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.stats != null && message.hasOwnProperty("stats"))
                if (!$util.isString(message.stats))
                    return "stats: string expected";
            return null;
        };

        /**
         * Creates a CreateRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.CreateRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.CreateRoomRsp} CreateRoomRsp
         */
        CreateRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.CreateRoomRsp)
                return object;
            var message = new $root.gsbase.CreateRoomRsp();
            if (object.err != null)
                message.err = String(object.err);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.gameGid != null)
                message.gameGid = String(object.gameGid);
            if (object.metadata != null)
                message.metadata = String(object.metadata);
            if (object.creator != null)
                message.creator = String(object.creator);
            if (object.createAt != null)
                if ($util.Long)
                    (message.createAt = $util.Long.fromValue(object.createAt)).unsigned = false;
                else if (typeof object.createAt === "string")
                    message.createAt = parseInt(object.createAt, 10);
                else if (typeof object.createAt === "number")
                    message.createAt = object.createAt;
                else if (typeof object.createAt === "object")
                    message.createAt = new $util.LongBits(object.createAt.low >>> 0, object.createAt.high >>> 0).toNumber();
            if (object.minPlayerNum != null)
                message.minPlayerNum = object.minPlayerNum | 0;
            if (object.maxPlayerNum != null)
                message.maxPlayerNum = object.maxPlayerNum | 0;
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".gsbase.CreateRoomRsp.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i)
                    message.labels[i] = String(object.labels[i]);
            }
            if (object.aliases) {
                if (!Array.isArray(object.aliases))
                    throw TypeError(".gsbase.CreateRoomRsp.aliases: array expected");
                message.aliases = [];
                for (var i = 0; i < object.aliases.length; ++i)
                    message.aliases[i] = String(object.aliases[i]);
            }
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".gsbase.CreateRoomRsp.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".gsbase.CreateRoomRsp.players: object expected");
                    message.players[i] = $root.gsbase.GamePlayerStats.fromObject(object.players[i]);
                }
            }
            if (object.platAid != null)
                message.platAid = object.platAid | 0;
            if (object.shareCode != null)
                message.shareCode = String(object.shareCode);
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "NormalRoom":
            case 0:
                message.type = 0;
                break;
            case "PrivateRoom":
            case 1:
                message.type = 1;
                break;
            case "ClubRoom":
            case 2:
                message.type = 2;
                break;
            }
            if (object.stats != null)
                message.stats = String(object.stats);
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.CreateRoomRsp
         * @static
         * @param {gsbase.CreateRoomRsp} message CreateRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.labels = [];
                object.aliases = [];
                object.players = [];
            }
            if (options.defaults) {
                object.err = "";
                object.serverId = "";
                object.roomId = "";
                object.gameGid = "";
                object.metadata = "";
                object.creator = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createAt = options.longs === String ? "0" : 0;
                object.minPlayerNum = 0;
                object.maxPlayerNum = 0;
                object.platAid = 0;
                object.shareCode = "";
                object.ruleId = "";
                object.type = options.enums === String ? "NormalRoom" : 0;
                object.stats = "";
            }
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                object.gameGid = message.gameGid;
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = message.metadata;
            if (message.creator != null && message.hasOwnProperty("creator"))
                object.creator = message.creator;
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (typeof message.createAt === "number")
                    object.createAt = options.longs === String ? String(message.createAt) : message.createAt;
                else
                    object.createAt = options.longs === String ? $util.Long.prototype.toString.call(message.createAt) : options.longs === Number ? new $util.LongBits(message.createAt.low >>> 0, message.createAt.high >>> 0).toNumber() : message.createAt;
            if (message.minPlayerNum != null && message.hasOwnProperty("minPlayerNum"))
                object.minPlayerNum = message.minPlayerNum;
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                object.maxPlayerNum = message.maxPlayerNum;
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
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.gsbase.GamePlayerStats.toObject(message.players[j], options);
            }
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                object.platAid = message.platAid;
            if (message.shareCode != null && message.hasOwnProperty("shareCode"))
                object.shareCode = message.shareCode;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.gsbase.RoomType[message.type] === undefined ? message.type : $root.gsbase.RoomType[message.type] : message.type;
            if (message.stats != null && message.hasOwnProperty("stats"))
                object.stats = message.stats;
            return object;
        };

        /**
         * Converts this CreateRoomRsp to JSON.
         * @function toJSON
         * @memberof gsbase.CreateRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateRoomRsp
         * @function getTypeUrl
         * @memberof gsbase.CreateRoomRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRoomRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.CreateRoomRsp";
        };

        return CreateRoomRsp;
    })();

    gsbase.DismissRoomReq = (function() {

        /**
         * Properties of a DismissRoomReq.
         * @memberof gsbase
         * @interface IDismissRoomReq
         * @property {string|null} [openid] DismissRoomReq openid
         * @property {string|null} [roomId] DismissRoomReq roomId
         */

        /**
         * Constructs a new DismissRoomReq.
         * @memberof gsbase
         * @classdesc Represents a DismissRoomReq.
         * @implements IDismissRoomReq
         * @constructor
         * @param {gsbase.IDismissRoomReq=} [properties] Properties to set
         */
        function DismissRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissRoomReq openid.
         * @member {string} openid
         * @memberof gsbase.DismissRoomReq
         * @instance
         */
        DismissRoomReq.prototype.openid = "";

        /**
         * DismissRoomReq roomId.
         * @member {string} roomId
         * @memberof gsbase.DismissRoomReq
         * @instance
         */
        DismissRoomReq.prototype.roomId = "";

        /**
         * Creates a new DismissRoomReq instance using the specified properties.
         * @function create
         * @memberof gsbase.DismissRoomReq
         * @static
         * @param {gsbase.IDismissRoomReq=} [properties] Properties to set
         * @returns {gsbase.DismissRoomReq} DismissRoomReq instance
         */
        DismissRoomReq.create = function create(properties) {
            return new DismissRoomReq(properties);
        };

        /**
         * Encodes the specified DismissRoomReq message. Does not implicitly {@link gsbase.DismissRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.DismissRoomReq
         * @static
         * @param {gsbase.IDismissRoomReq} message DismissRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified DismissRoomReq message, length delimited. Does not implicitly {@link gsbase.DismissRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.DismissRoomReq
         * @static
         * @param {gsbase.IDismissRoomReq} message DismissRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.DismissRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.DismissRoomReq} DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.DismissRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.openid = reader.string();
                        break;
                    }
                case 2: {
                        message.roomId = reader.string();
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
         * Decodes a DismissRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.DismissRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.DismissRoomReq} DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissRoomReq message.
         * @function verify
         * @memberof gsbase.DismissRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            return null;
        };

        /**
         * Creates a DismissRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.DismissRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.DismissRoomReq} DismissRoomReq
         */
        DismissRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.DismissRoomReq)
                return object;
            var message = new $root.gsbase.DismissRoomReq();
            if (object.openid != null)
                message.openid = String(object.openid);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from a DismissRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.DismissRoomReq
         * @static
         * @param {gsbase.DismissRoomReq} message DismissRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.openid = "";
                object.roomId = "";
            }
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this DismissRoomReq to JSON.
         * @function toJSON
         * @memberof gsbase.DismissRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DismissRoomReq
         * @function getTypeUrl
         * @memberof gsbase.DismissRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DismissRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.DismissRoomReq";
        };

        return DismissRoomReq;
    })();

    gsbase.DismissRoomRsp = (function() {

        /**
         * Properties of a DismissRoomRsp.
         * @memberof gsbase
         * @interface IDismissRoomRsp
         * @property {string|null} [err] DismissRoomRsp err
         */

        /**
         * Constructs a new DismissRoomRsp.
         * @memberof gsbase
         * @classdesc Represents a DismissRoomRsp.
         * @implements IDismissRoomRsp
         * @constructor
         * @param {gsbase.IDismissRoomRsp=} [properties] Properties to set
         */
        function DismissRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissRoomRsp err.
         * @member {string} err
         * @memberof gsbase.DismissRoomRsp
         * @instance
         */
        DismissRoomRsp.prototype.err = "";

        /**
         * Creates a new DismissRoomRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.DismissRoomRsp
         * @static
         * @param {gsbase.IDismissRoomRsp=} [properties] Properties to set
         * @returns {gsbase.DismissRoomRsp} DismissRoomRsp instance
         */
        DismissRoomRsp.create = function create(properties) {
            return new DismissRoomRsp(properties);
        };

        /**
         * Encodes the specified DismissRoomRsp message. Does not implicitly {@link gsbase.DismissRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.DismissRoomRsp
         * @static
         * @param {gsbase.IDismissRoomRsp} message DismissRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified DismissRoomRsp message, length delimited. Does not implicitly {@link gsbase.DismissRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.DismissRoomRsp
         * @static
         * @param {gsbase.IDismissRoomRsp} message DismissRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.DismissRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.DismissRoomRsp} DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.DismissRoomRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
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
         * Decodes a DismissRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.DismissRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.DismissRoomRsp} DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissRoomRsp message.
         * @function verify
         * @memberof gsbase.DismissRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates a DismissRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.DismissRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.DismissRoomRsp} DismissRoomRsp
         */
        DismissRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.DismissRoomRsp)
                return object;
            var message = new $root.gsbase.DismissRoomRsp();
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from a DismissRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.DismissRoomRsp
         * @static
         * @param {gsbase.DismissRoomRsp} message DismissRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = "";
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this DismissRoomRsp to JSON.
         * @function toJSON
         * @memberof gsbase.DismissRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DismissRoomRsp
         * @function getTypeUrl
         * @memberof gsbase.DismissRoomRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DismissRoomRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.DismissRoomRsp";
        };

        return DismissRoomRsp;
    })();

    gsbase.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof gsbase
         * @interface IRoomInfo
         * @property {string|null} [roomId] RoomInfo roomId
         * @property {string|null} [matchCode] RoomInfo matchCode
         * @property {string|null} [metadata] RoomInfo metadata
         * @property {Array.<gsbase.IGamePlayerStats>|null} [players] RoomInfo players
         * @property {string|null} [owner] RoomInfo owner
         * @property {number|Long|null} [createAt] RoomInfo createAt
         * @property {number|null} [minPlayerNum] RoomInfo minPlayerNum
         * @property {number|null} [maxPlayerNum] RoomInfo maxPlayerNum
         * @property {string|null} [gameGid] RoomInfo gameGid
         * @property {string|null} [serverId] RoomInfo serverId
         * @property {Array.<string>|null} [labels] RoomInfo labels
         * @property {Array.<string>|null} [aliases] RoomInfo aliases
         * @property {number|null} [platAid] RoomInfo platAid
         * @property {string|null} [shareCode] RoomInfo shareCode
         * @property {gsbase.RoomType|null} [type] RoomInfo type
         * @property {string|null} [stats] RoomInfo stats
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof gsbase
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {gsbase.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            this.players = [];
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
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomId = "";

        /**
         * RoomInfo matchCode.
         * @member {string} matchCode
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.matchCode = "";

        /**
         * RoomInfo metadata.
         * @member {string} metadata
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.metadata = "";

        /**
         * RoomInfo players.
         * @member {Array.<gsbase.IGamePlayerStats>} players
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.players = $util.emptyArray;

        /**
         * RoomInfo owner.
         * @member {string} owner
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.owner = "";

        /**
         * RoomInfo createAt.
         * @member {number|Long} createAt
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.createAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomInfo minPlayerNum.
         * @member {number} minPlayerNum
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.minPlayerNum = 0;

        /**
         * RoomInfo maxPlayerNum.
         * @member {number} maxPlayerNum
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.maxPlayerNum = 0;

        /**
         * RoomInfo gameGid.
         * @member {string} gameGid
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.gameGid = "";

        /**
         * RoomInfo serverId.
         * @member {string} serverId
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.serverId = "";

        /**
         * RoomInfo labels.
         * @member {Array.<string>} labels
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.labels = $util.emptyArray;

        /**
         * RoomInfo aliases.
         * @member {Array.<string>} aliases
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.aliases = $util.emptyArray;

        /**
         * RoomInfo platAid.
         * @member {number} platAid
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.platAid = 0;

        /**
         * RoomInfo shareCode.
         * @member {string} shareCode
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.shareCode = "";

        /**
         * RoomInfo type.
         * @member {gsbase.RoomType} type
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.type = 0;

        /**
         * RoomInfo stats.
         * @member {string} stats
         * @memberof gsbase.RoomInfo
         * @instance
         */
        RoomInfo.prototype.stats = "";

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof gsbase.RoomInfo
         * @static
         * @param {gsbase.IRoomInfo=} [properties] Properties to set
         * @returns {gsbase.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gsbase.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof gsbase.RoomInfo
         * @static
         * @param {gsbase.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.matchCode != null && Object.hasOwnProperty.call(message, "matchCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.matchCode);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.metadata);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.gsbase.GamePlayerStats.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.owner);
            if (message.createAt != null && Object.hasOwnProperty.call(message, "createAt"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createAt);
            if (message.minPlayerNum != null && Object.hasOwnProperty.call(message, "minPlayerNum"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.minPlayerNum);
            if (message.maxPlayerNum != null && Object.hasOwnProperty.call(message, "maxPlayerNum"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.maxPlayerNum);
            if (message.gameGid != null && Object.hasOwnProperty.call(message, "gameGid"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.gameGid);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.serverId);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.labels[i]);
            if (message.aliases != null && message.aliases.length)
                for (var i = 0; i < message.aliases.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.aliases[i]);
            if (message.platAid != null && Object.hasOwnProperty.call(message, "platAid"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.platAid);
            if (message.shareCode != null && Object.hasOwnProperty.call(message, "shareCode"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.shareCode);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.type);
            if (message.stats != null && Object.hasOwnProperty.call(message, "stats"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.stats);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link gsbase.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.RoomInfo
         * @static
         * @param {gsbase.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.matchCode = reader.string();
                        break;
                    }
                case 3: {
                        message.metadata = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.gsbase.GamePlayerStats.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.owner = reader.string();
                        break;
                    }
                case 6: {
                        message.createAt = reader.int64();
                        break;
                    }
                case 7: {
                        message.minPlayerNum = reader.int32();
                        break;
                    }
                case 8: {
                        message.maxPlayerNum = reader.int32();
                        break;
                    }
                case 9: {
                        message.gameGid = reader.string();
                        break;
                    }
                case 10: {
                        message.serverId = reader.string();
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
                case 13: {
                        message.platAid = reader.int32();
                        break;
                    }
                case 14: {
                        message.shareCode = reader.string();
                        break;
                    }
                case 16: {
                        message.type = reader.int32();
                        break;
                    }
                case 17: {
                        message.stats = reader.string();
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
         * @memberof gsbase.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.RoomInfo} RoomInfo
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
         * @memberof gsbase.RoomInfo
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
            if (message.matchCode != null && message.hasOwnProperty("matchCode"))
                if (!$util.isString(message.matchCode))
                    return "matchCode: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                if (!$util.isString(message.metadata))
                    return "metadata: string expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.gsbase.GamePlayerStats.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isString(message.owner))
                    return "owner: string expected";
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (!$util.isInteger(message.createAt) && !(message.createAt && $util.isInteger(message.createAt.low) && $util.isInteger(message.createAt.high)))
                    return "createAt: integer|Long expected";
            if (message.minPlayerNum != null && message.hasOwnProperty("minPlayerNum"))
                if (!$util.isInteger(message.minPlayerNum))
                    return "minPlayerNum: integer expected";
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                if (!$util.isInteger(message.maxPlayerNum))
                    return "maxPlayerNum: integer expected";
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                if (!$util.isString(message.gameGid))
                    return "gameGid: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
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
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                if (!$util.isInteger(message.platAid))
                    return "platAid: integer expected";
            if (message.shareCode != null && message.hasOwnProperty("shareCode"))
                if (!$util.isString(message.shareCode))
                    return "shareCode: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.stats != null && message.hasOwnProperty("stats"))
                if (!$util.isString(message.stats))
                    return "stats: string expected";
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.RoomInfo)
                return object;
            var message = new $root.gsbase.RoomInfo();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.matchCode != null)
                message.matchCode = String(object.matchCode);
            if (object.metadata != null)
                message.metadata = String(object.metadata);
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".gsbase.RoomInfo.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".gsbase.RoomInfo.players: object expected");
                    message.players[i] = $root.gsbase.GamePlayerStats.fromObject(object.players[i]);
                }
            }
            if (object.owner != null)
                message.owner = String(object.owner);
            if (object.createAt != null)
                if ($util.Long)
                    (message.createAt = $util.Long.fromValue(object.createAt)).unsigned = false;
                else if (typeof object.createAt === "string")
                    message.createAt = parseInt(object.createAt, 10);
                else if (typeof object.createAt === "number")
                    message.createAt = object.createAt;
                else if (typeof object.createAt === "object")
                    message.createAt = new $util.LongBits(object.createAt.low >>> 0, object.createAt.high >>> 0).toNumber();
            if (object.minPlayerNum != null)
                message.minPlayerNum = object.minPlayerNum | 0;
            if (object.maxPlayerNum != null)
                message.maxPlayerNum = object.maxPlayerNum | 0;
            if (object.gameGid != null)
                message.gameGid = String(object.gameGid);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".gsbase.RoomInfo.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i)
                    message.labels[i] = String(object.labels[i]);
            }
            if (object.aliases) {
                if (!Array.isArray(object.aliases))
                    throw TypeError(".gsbase.RoomInfo.aliases: array expected");
                message.aliases = [];
                for (var i = 0; i < object.aliases.length; ++i)
                    message.aliases[i] = String(object.aliases[i]);
            }
            if (object.platAid != null)
                message.platAid = object.platAid | 0;
            if (object.shareCode != null)
                message.shareCode = String(object.shareCode);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "NormalRoom":
            case 0:
                message.type = 0;
                break;
            case "PrivateRoom":
            case 1:
                message.type = 1;
                break;
            case "ClubRoom":
            case 2:
                message.type = 2;
                break;
            }
            if (object.stats != null)
                message.stats = String(object.stats);
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.RoomInfo
         * @static
         * @param {gsbase.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.players = [];
                object.labels = [];
                object.aliases = [];
            }
            if (options.defaults) {
                object.roomId = "";
                object.matchCode = "";
                object.metadata = "";
                object.owner = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createAt = options.longs === String ? "0" : 0;
                object.minPlayerNum = 0;
                object.maxPlayerNum = 0;
                object.gameGid = "";
                object.serverId = "";
                object.platAid = 0;
                object.shareCode = "";
                object.type = options.enums === String ? "NormalRoom" : 0;
                object.stats = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.matchCode != null && message.hasOwnProperty("matchCode"))
                object.matchCode = message.matchCode;
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = message.metadata;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.gsbase.GamePlayerStats.toObject(message.players[j], options);
            }
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (typeof message.createAt === "number")
                    object.createAt = options.longs === String ? String(message.createAt) : message.createAt;
                else
                    object.createAt = options.longs === String ? $util.Long.prototype.toString.call(message.createAt) : options.longs === Number ? new $util.LongBits(message.createAt.low >>> 0, message.createAt.high >>> 0).toNumber() : message.createAt;
            if (message.minPlayerNum != null && message.hasOwnProperty("minPlayerNum"))
                object.minPlayerNum = message.minPlayerNum;
            if (message.maxPlayerNum != null && message.hasOwnProperty("maxPlayerNum"))
                object.maxPlayerNum = message.maxPlayerNum;
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                object.gameGid = message.gameGid;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
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
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                object.platAid = message.platAid;
            if (message.shareCode != null && message.hasOwnProperty("shareCode"))
                object.shareCode = message.shareCode;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.gsbase.RoomType[message.type] === undefined ? message.type : $root.gsbase.RoomType[message.type] : message.type;
            if (message.stats != null && message.hasOwnProperty("stats"))
                object.stats = message.stats;
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof gsbase.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomInfo
         * @function getTypeUrl
         * @memberof gsbase.RoomInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.RoomInfo";
        };

        return RoomInfo;
    })();

    gsbase.CheckRoomStatusReq = (function() {

        /**
         * Properties of a CheckRoomStatusReq.
         * @memberof gsbase
         * @interface ICheckRoomStatusReq
         * @property {string|null} [roomId] CheckRoomStatusReq roomId
         */

        /**
         * Constructs a new CheckRoomStatusReq.
         * @memberof gsbase
         * @classdesc Represents a CheckRoomStatusReq.
         * @implements ICheckRoomStatusReq
         * @constructor
         * @param {gsbase.ICheckRoomStatusReq=} [properties] Properties to set
         */
        function CheckRoomStatusReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckRoomStatusReq roomId.
         * @member {string} roomId
         * @memberof gsbase.CheckRoomStatusReq
         * @instance
         */
        CheckRoomStatusReq.prototype.roomId = "";

        /**
         * Creates a new CheckRoomStatusReq instance using the specified properties.
         * @function create
         * @memberof gsbase.CheckRoomStatusReq
         * @static
         * @param {gsbase.ICheckRoomStatusReq=} [properties] Properties to set
         * @returns {gsbase.CheckRoomStatusReq} CheckRoomStatusReq instance
         */
        CheckRoomStatusReq.create = function create(properties) {
            return new CheckRoomStatusReq(properties);
        };

        /**
         * Encodes the specified CheckRoomStatusReq message. Does not implicitly {@link gsbase.CheckRoomStatusReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.CheckRoomStatusReq
         * @static
         * @param {gsbase.ICheckRoomStatusReq} message CheckRoomStatusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckRoomStatusReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified CheckRoomStatusReq message, length delimited. Does not implicitly {@link gsbase.CheckRoomStatusReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.CheckRoomStatusReq
         * @static
         * @param {gsbase.ICheckRoomStatusReq} message CheckRoomStatusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckRoomStatusReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckRoomStatusReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.CheckRoomStatusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.CheckRoomStatusReq} CheckRoomStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckRoomStatusReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.CheckRoomStatusReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
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
         * Decodes a CheckRoomStatusReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.CheckRoomStatusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.CheckRoomStatusReq} CheckRoomStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckRoomStatusReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckRoomStatusReq message.
         * @function verify
         * @memberof gsbase.CheckRoomStatusReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckRoomStatusReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            return null;
        };

        /**
         * Creates a CheckRoomStatusReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.CheckRoomStatusReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.CheckRoomStatusReq} CheckRoomStatusReq
         */
        CheckRoomStatusReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.CheckRoomStatusReq)
                return object;
            var message = new $root.gsbase.CheckRoomStatusReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from a CheckRoomStatusReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.CheckRoomStatusReq
         * @static
         * @param {gsbase.CheckRoomStatusReq} message CheckRoomStatusReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckRoomStatusReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomId = "";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this CheckRoomStatusReq to JSON.
         * @function toJSON
         * @memberof gsbase.CheckRoomStatusReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckRoomStatusReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CheckRoomStatusReq
         * @function getTypeUrl
         * @memberof gsbase.CheckRoomStatusReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CheckRoomStatusReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.CheckRoomStatusReq";
        };

        return CheckRoomStatusReq;
    })();

    gsbase.CheckRoomStatusRsp = (function() {

        /**
         * Properties of a CheckRoomStatusRsp.
         * @memberof gsbase
         * @interface ICheckRoomStatusRsp
         * @property {boolean|null} [exists] CheckRoomStatusRsp exists
         */

        /**
         * Constructs a new CheckRoomStatusRsp.
         * @memberof gsbase
         * @classdesc Represents a CheckRoomStatusRsp.
         * @implements ICheckRoomStatusRsp
         * @constructor
         * @param {gsbase.ICheckRoomStatusRsp=} [properties] Properties to set
         */
        function CheckRoomStatusRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckRoomStatusRsp exists.
         * @member {boolean} exists
         * @memberof gsbase.CheckRoomStatusRsp
         * @instance
         */
        CheckRoomStatusRsp.prototype.exists = false;

        /**
         * Creates a new CheckRoomStatusRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.CheckRoomStatusRsp
         * @static
         * @param {gsbase.ICheckRoomStatusRsp=} [properties] Properties to set
         * @returns {gsbase.CheckRoomStatusRsp} CheckRoomStatusRsp instance
         */
        CheckRoomStatusRsp.create = function create(properties) {
            return new CheckRoomStatusRsp(properties);
        };

        /**
         * Encodes the specified CheckRoomStatusRsp message. Does not implicitly {@link gsbase.CheckRoomStatusRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.CheckRoomStatusRsp
         * @static
         * @param {gsbase.ICheckRoomStatusRsp} message CheckRoomStatusRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckRoomStatusRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.exists != null && Object.hasOwnProperty.call(message, "exists"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.exists);
            return writer;
        };

        /**
         * Encodes the specified CheckRoomStatusRsp message, length delimited. Does not implicitly {@link gsbase.CheckRoomStatusRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.CheckRoomStatusRsp
         * @static
         * @param {gsbase.ICheckRoomStatusRsp} message CheckRoomStatusRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckRoomStatusRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckRoomStatusRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.CheckRoomStatusRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.CheckRoomStatusRsp} CheckRoomStatusRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckRoomStatusRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.CheckRoomStatusRsp();
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
         * Decodes a CheckRoomStatusRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.CheckRoomStatusRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.CheckRoomStatusRsp} CheckRoomStatusRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckRoomStatusRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckRoomStatusRsp message.
         * @function verify
         * @memberof gsbase.CheckRoomStatusRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckRoomStatusRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.exists != null && message.hasOwnProperty("exists"))
                if (typeof message.exists !== "boolean")
                    return "exists: boolean expected";
            return null;
        };

        /**
         * Creates a CheckRoomStatusRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.CheckRoomStatusRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.CheckRoomStatusRsp} CheckRoomStatusRsp
         */
        CheckRoomStatusRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.CheckRoomStatusRsp)
                return object;
            var message = new $root.gsbase.CheckRoomStatusRsp();
            if (object.exists != null)
                message.exists = Boolean(object.exists);
            return message;
        };

        /**
         * Creates a plain object from a CheckRoomStatusRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.CheckRoomStatusRsp
         * @static
         * @param {gsbase.CheckRoomStatusRsp} message CheckRoomStatusRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckRoomStatusRsp.toObject = function toObject(message, options) {
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
         * Converts this CheckRoomStatusRsp to JSON.
         * @function toJSON
         * @memberof gsbase.CheckRoomStatusRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckRoomStatusRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CheckRoomStatusRsp
         * @function getTypeUrl
         * @memberof gsbase.CheckRoomStatusRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CheckRoomStatusRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.CheckRoomStatusRsp";
        };

        return CheckRoomStatusRsp;
    })();

    gsbase.GetRoomInfoReq = (function() {

        /**
         * Properties of a GetRoomInfoReq.
         * @memberof gsbase
         * @interface IGetRoomInfoReq
         * @property {string|null} [roomId] GetRoomInfoReq roomId
         */

        /**
         * Constructs a new GetRoomInfoReq.
         * @memberof gsbase
         * @classdesc Represents a GetRoomInfoReq.
         * @implements IGetRoomInfoReq
         * @constructor
         * @param {gsbase.IGetRoomInfoReq=} [properties] Properties to set
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
         * @memberof gsbase.GetRoomInfoReq
         * @instance
         */
        GetRoomInfoReq.prototype.roomId = "";

        /**
         * Creates a new GetRoomInfoReq instance using the specified properties.
         * @function create
         * @memberof gsbase.GetRoomInfoReq
         * @static
         * @param {gsbase.IGetRoomInfoReq=} [properties] Properties to set
         * @returns {gsbase.GetRoomInfoReq} GetRoomInfoReq instance
         */
        GetRoomInfoReq.create = function create(properties) {
            return new GetRoomInfoReq(properties);
        };

        /**
         * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link gsbase.GetRoomInfoReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.GetRoomInfoReq
         * @static
         * @param {gsbase.IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link gsbase.GetRoomInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.GetRoomInfoReq
         * @static
         * @param {gsbase.IGetRoomInfoReq} message GetRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.GetRoomInfoReq} GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.GetRoomInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
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
         * @memberof gsbase.GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.GetRoomInfoReq} GetRoomInfoReq
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
         * @memberof gsbase.GetRoomInfoReq
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
            return null;
        };

        /**
         * Creates a GetRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.GetRoomInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.GetRoomInfoReq} GetRoomInfoReq
         */
        GetRoomInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.GetRoomInfoReq)
                return object;
            var message = new $root.gsbase.GetRoomInfoReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.GetRoomInfoReq
         * @static
         * @param {gsbase.GetRoomInfoReq} message GetRoomInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomId = "";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this GetRoomInfoReq to JSON.
         * @function toJSON
         * @memberof gsbase.GetRoomInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRoomInfoReq
         * @function getTypeUrl
         * @memberof gsbase.GetRoomInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRoomInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.GetRoomInfoReq";
        };

        return GetRoomInfoReq;
    })();

    gsbase.GetRoomInfoRsp = (function() {

        /**
         * Properties of a GetRoomInfoRsp.
         * @memberof gsbase
         * @interface IGetRoomInfoRsp
         * @property {gsbase.IRoomInfo|null} [room] GetRoomInfoRsp room
         * @property {string|null} [err] GetRoomInfoRsp err
         */

        /**
         * Constructs a new GetRoomInfoRsp.
         * @memberof gsbase
         * @classdesc Represents a GetRoomInfoRsp.
         * @implements IGetRoomInfoRsp
         * @constructor
         * @param {gsbase.IGetRoomInfoRsp=} [properties] Properties to set
         */
        function GetRoomInfoRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoomInfoRsp room.
         * @member {gsbase.IRoomInfo|null|undefined} room
         * @memberof gsbase.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.room = null;

        /**
         * GetRoomInfoRsp err.
         * @member {string} err
         * @memberof gsbase.GetRoomInfoRsp
         * @instance
         */
        GetRoomInfoRsp.prototype.err = "";

        /**
         * Creates a new GetRoomInfoRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.GetRoomInfoRsp
         * @static
         * @param {gsbase.IGetRoomInfoRsp=} [properties] Properties to set
         * @returns {gsbase.GetRoomInfoRsp} GetRoomInfoRsp instance
         */
        GetRoomInfoRsp.create = function create(properties) {
            return new GetRoomInfoRsp(properties);
        };

        /**
         * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link gsbase.GetRoomInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.GetRoomInfoRsp
         * @static
         * @param {gsbase.IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.gsbase.RoomInfo.encode(message.room, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link gsbase.GetRoomInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.GetRoomInfoRsp
         * @static
         * @param {gsbase.IGetRoomInfoRsp} message GetRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoomInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.GetRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.GetRoomInfoRsp} GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoomInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.GetRoomInfoRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.room = $root.gsbase.RoomInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.err = reader.string();
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
         * @memberof gsbase.GetRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.GetRoomInfoRsp} GetRoomInfoRsp
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
         * @memberof gsbase.GetRoomInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoomInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.gsbase.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates a GetRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.GetRoomInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.GetRoomInfoRsp} GetRoomInfoRsp
         */
        GetRoomInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.GetRoomInfoRsp)
                return object;
            var message = new $root.gsbase.GetRoomInfoRsp();
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".gsbase.GetRoomInfoRsp.room: object expected");
                message.room = $root.gsbase.RoomInfo.fromObject(object.room);
            }
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.GetRoomInfoRsp
         * @static
         * @param {gsbase.GetRoomInfoRsp} message GetRoomInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoomInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.room = null;
                object.err = "";
            }
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.gsbase.RoomInfo.toObject(message.room, options);
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this GetRoomInfoRsp to JSON.
         * @function toJSON
         * @memberof gsbase.GetRoomInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoomInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRoomInfoRsp
         * @function getTypeUrl
         * @memberof gsbase.GetRoomInfoRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRoomInfoRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.GetRoomInfoRsp";
        };

        return GetRoomInfoRsp;
    })();

    gsbase.UpdateRoomInfoReq = (function() {

        /**
         * Properties of an UpdateRoomInfoReq.
         * @memberof gsbase
         * @interface IUpdateRoomInfoReq
         * @property {string|null} [roomId] UpdateRoomInfoReq roomId
         * @property {Object.<string,string>|null} [properties] UpdateRoomInfoReq properties
         */

        /**
         * Constructs a new UpdateRoomInfoReq.
         * @memberof gsbase
         * @classdesc Represents an UpdateRoomInfoReq.
         * @implements IUpdateRoomInfoReq
         * @constructor
         * @param {gsbase.IUpdateRoomInfoReq=} [properties] Properties to set
         */
        function UpdateRoomInfoReq(properties) {
            this.properties = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateRoomInfoReq roomId.
         * @member {string} roomId
         * @memberof gsbase.UpdateRoomInfoReq
         * @instance
         */
        UpdateRoomInfoReq.prototype.roomId = "";

        /**
         * UpdateRoomInfoReq properties.
         * @member {Object.<string,string>} properties
         * @memberof gsbase.UpdateRoomInfoReq
         * @instance
         */
        UpdateRoomInfoReq.prototype.properties = $util.emptyObject;

        /**
         * Creates a new UpdateRoomInfoReq instance using the specified properties.
         * @function create
         * @memberof gsbase.UpdateRoomInfoReq
         * @static
         * @param {gsbase.IUpdateRoomInfoReq=} [properties] Properties to set
         * @returns {gsbase.UpdateRoomInfoReq} UpdateRoomInfoReq instance
         */
        UpdateRoomInfoReq.create = function create(properties) {
            return new UpdateRoomInfoReq(properties);
        };

        /**
         * Encodes the specified UpdateRoomInfoReq message. Does not implicitly {@link gsbase.UpdateRoomInfoReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.UpdateRoomInfoReq
         * @static
         * @param {gsbase.IUpdateRoomInfoReq} message UpdateRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoomInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                for (var keys = Object.keys(message.properties), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.properties[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateRoomInfoReq message, length delimited. Does not implicitly {@link gsbase.UpdateRoomInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.UpdateRoomInfoReq
         * @static
         * @param {gsbase.IUpdateRoomInfoReq} message UpdateRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateRoomInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.UpdateRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.UpdateRoomInfoReq} UpdateRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoomInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.UpdateRoomInfoReq(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        if (message.properties === $util.emptyObject)
                            message.properties = {};
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
                        message.properties[key] = value;
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
         * Decodes an UpdateRoomInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.UpdateRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.UpdateRoomInfoReq} UpdateRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoomInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateRoomInfoReq message.
         * @function verify
         * @memberof gsbase.UpdateRoomInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateRoomInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.properties != null && message.hasOwnProperty("properties")) {
                if (!$util.isObject(message.properties))
                    return "properties: object expected";
                var key = Object.keys(message.properties);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.properties[key[i]]))
                        return "properties: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an UpdateRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.UpdateRoomInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.UpdateRoomInfoReq} UpdateRoomInfoReq
         */
        UpdateRoomInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.UpdateRoomInfoReq)
                return object;
            var message = new $root.gsbase.UpdateRoomInfoReq();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.properties) {
                if (typeof object.properties !== "object")
                    throw TypeError(".gsbase.UpdateRoomInfoReq.properties: object expected");
                message.properties = {};
                for (var keys = Object.keys(object.properties), i = 0; i < keys.length; ++i)
                    message.properties[keys[i]] = String(object.properties[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateRoomInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.UpdateRoomInfoReq
         * @static
         * @param {gsbase.UpdateRoomInfoReq} message UpdateRoomInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateRoomInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.properties = {};
            if (options.defaults)
                object.roomId = "";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            var keys2;
            if (message.properties && (keys2 = Object.keys(message.properties)).length) {
                object.properties = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.properties[keys2[j]] = message.properties[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this UpdateRoomInfoReq to JSON.
         * @function toJSON
         * @memberof gsbase.UpdateRoomInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateRoomInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateRoomInfoReq
         * @function getTypeUrl
         * @memberof gsbase.UpdateRoomInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateRoomInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.UpdateRoomInfoReq";
        };

        return UpdateRoomInfoReq;
    })();

    gsbase.UpdateRoomInfoRsp = (function() {

        /**
         * Properties of an UpdateRoomInfoRsp.
         * @memberof gsbase
         * @interface IUpdateRoomInfoRsp
         * @property {string|null} [err] UpdateRoomInfoRsp err
         */

        /**
         * Constructs a new UpdateRoomInfoRsp.
         * @memberof gsbase
         * @classdesc Represents an UpdateRoomInfoRsp.
         * @implements IUpdateRoomInfoRsp
         * @constructor
         * @param {gsbase.IUpdateRoomInfoRsp=} [properties] Properties to set
         */
        function UpdateRoomInfoRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateRoomInfoRsp err.
         * @member {string} err
         * @memberof gsbase.UpdateRoomInfoRsp
         * @instance
         */
        UpdateRoomInfoRsp.prototype.err = "";

        /**
         * Creates a new UpdateRoomInfoRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.UpdateRoomInfoRsp
         * @static
         * @param {gsbase.IUpdateRoomInfoRsp=} [properties] Properties to set
         * @returns {gsbase.UpdateRoomInfoRsp} UpdateRoomInfoRsp instance
         */
        UpdateRoomInfoRsp.create = function create(properties) {
            return new UpdateRoomInfoRsp(properties);
        };

        /**
         * Encodes the specified UpdateRoomInfoRsp message. Does not implicitly {@link gsbase.UpdateRoomInfoRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.UpdateRoomInfoRsp
         * @static
         * @param {gsbase.IUpdateRoomInfoRsp} message UpdateRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoomInfoRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified UpdateRoomInfoRsp message, length delimited. Does not implicitly {@link gsbase.UpdateRoomInfoRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.UpdateRoomInfoRsp
         * @static
         * @param {gsbase.IUpdateRoomInfoRsp} message UpdateRoomInfoRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoomInfoRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateRoomInfoRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.UpdateRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.UpdateRoomInfoRsp} UpdateRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoomInfoRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.UpdateRoomInfoRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
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
         * Decodes an UpdateRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.UpdateRoomInfoRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.UpdateRoomInfoRsp} UpdateRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoomInfoRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateRoomInfoRsp message.
         * @function verify
         * @memberof gsbase.UpdateRoomInfoRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateRoomInfoRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates an UpdateRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.UpdateRoomInfoRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.UpdateRoomInfoRsp} UpdateRoomInfoRsp
         */
        UpdateRoomInfoRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.UpdateRoomInfoRsp)
                return object;
            var message = new $root.gsbase.UpdateRoomInfoRsp();
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from an UpdateRoomInfoRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.UpdateRoomInfoRsp
         * @static
         * @param {gsbase.UpdateRoomInfoRsp} message UpdateRoomInfoRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateRoomInfoRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = "";
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this UpdateRoomInfoRsp to JSON.
         * @function toJSON
         * @memberof gsbase.UpdateRoomInfoRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateRoomInfoRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateRoomInfoRsp
         * @function getTypeUrl
         * @memberof gsbase.UpdateRoomInfoRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateRoomInfoRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.UpdateRoomInfoRsp";
        };

        return UpdateRoomInfoRsp;
    })();

    gsbase.SystemMessage = (function() {

        /**
         * Properties of a SystemMessage.
         * @memberof gsbase
         * @interface ISystemMessage
         * @property {number|null} [code] SystemMessage code
         * @property {string|null} [err] SystemMessage err
         * @property {string|null} [request] SystemMessage request
         */

        /**
         * Constructs a new SystemMessage.
         * @memberof gsbase
         * @classdesc Represents a SystemMessage.
         * @implements ISystemMessage
         * @constructor
         * @param {gsbase.ISystemMessage=} [properties] Properties to set
         */
        function SystemMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SystemMessage code.
         * @member {number} code
         * @memberof gsbase.SystemMessage
         * @instance
         */
        SystemMessage.prototype.code = 0;

        /**
         * SystemMessage err.
         * @member {string} err
         * @memberof gsbase.SystemMessage
         * @instance
         */
        SystemMessage.prototype.err = "";

        /**
         * SystemMessage request.
         * @member {string} request
         * @memberof gsbase.SystemMessage
         * @instance
         */
        SystemMessage.prototype.request = "";

        /**
         * Creates a new SystemMessage instance using the specified properties.
         * @function create
         * @memberof gsbase.SystemMessage
         * @static
         * @param {gsbase.ISystemMessage=} [properties] Properties to set
         * @returns {gsbase.SystemMessage} SystemMessage instance
         */
        SystemMessage.create = function create(properties) {
            return new SystemMessage(properties);
        };

        /**
         * Encodes the specified SystemMessage message. Does not implicitly {@link gsbase.SystemMessage.verify|verify} messages.
         * @function encode
         * @memberof gsbase.SystemMessage
         * @static
         * @param {gsbase.ISystemMessage} message SystemMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.err);
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.request);
            return writer;
        };

        /**
         * Encodes the specified SystemMessage message, length delimited. Does not implicitly {@link gsbase.SystemMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.SystemMessage
         * @static
         * @param {gsbase.ISystemMessage} message SystemMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SystemMessage message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.SystemMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.SystemMessage} SystemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.SystemMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.err = reader.string();
                        break;
                    }
                case 3: {
                        message.request = reader.string();
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
         * Decodes a SystemMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.SystemMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.SystemMessage} SystemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SystemMessage message.
         * @function verify
         * @memberof gsbase.SystemMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SystemMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            if (message.request != null && message.hasOwnProperty("request"))
                if (!$util.isString(message.request))
                    return "request: string expected";
            return null;
        };

        /**
         * Creates a SystemMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.SystemMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.SystemMessage} SystemMessage
         */
        SystemMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.SystemMessage)
                return object;
            var message = new $root.gsbase.SystemMessage();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.err != null)
                message.err = String(object.err);
            if (object.request != null)
                message.request = String(object.request);
            return message;
        };

        /**
         * Creates a plain object from a SystemMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.SystemMessage
         * @static
         * @param {gsbase.SystemMessage} message SystemMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SystemMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.err = "";
                object.request = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = message.request;
            return object;
        };

        /**
         * Converts this SystemMessage to JSON.
         * @function toJSON
         * @memberof gsbase.SystemMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SystemMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SystemMessage
         * @function getTypeUrl
         * @memberof gsbase.SystemMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SystemMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.SystemMessage";
        };

        return SystemMessage;
    })();

    gsbase.GameEvent = (function() {

        /**
         * Properties of a GameEvent.
         * @memberof gsbase
         * @interface IGameEvent
         * @property {string|null} [roomId] GameEvent roomId
         * @property {string|null} [gameGid] GameEvent gameGid
         * @property {number|null} [platAid] GameEvent platAid
         * @property {string|null} [ruleId] GameEvent ruleId
         * @property {string|null} [matchId] GameEvent matchId
         * @property {string|null} [eventId] GameEvent eventId
         * @property {Object.<string,string>|null} [eventParams] GameEvent eventParams
         * @property {number|Long|null} [createAt] GameEvent createAt
         */

        /**
         * Constructs a new GameEvent.
         * @memberof gsbase
         * @classdesc Represents a GameEvent.
         * @implements IGameEvent
         * @constructor
         * @param {gsbase.IGameEvent=} [properties] Properties to set
         */
        function GameEvent(properties) {
            this.eventParams = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameEvent roomId.
         * @member {string} roomId
         * @memberof gsbase.GameEvent
         * @instance
         */
        GameEvent.prototype.roomId = "";

        /**
         * GameEvent gameGid.
         * @member {string} gameGid
         * @memberof gsbase.GameEvent
         * @instance
         */
        GameEvent.prototype.gameGid = "";

        /**
         * GameEvent platAid.
         * @member {number} platAid
         * @memberof gsbase.GameEvent
         * @instance
         */
        GameEvent.prototype.platAid = 0;

        /**
         * GameEvent ruleId.
         * @member {string} ruleId
         * @memberof gsbase.GameEvent
         * @instance
         */
        GameEvent.prototype.ruleId = "";

        /**
         * GameEvent matchId.
         * @member {string} matchId
         * @memberof gsbase.GameEvent
         * @instance
         */
        GameEvent.prototype.matchId = "";

        /**
         * GameEvent eventId.
         * @member {string} eventId
         * @memberof gsbase.GameEvent
         * @instance
         */
        GameEvent.prototype.eventId = "";

        /**
         * GameEvent eventParams.
         * @member {Object.<string,string>} eventParams
         * @memberof gsbase.GameEvent
         * @instance
         */
        GameEvent.prototype.eventParams = $util.emptyObject;

        /**
         * GameEvent createAt.
         * @member {number|Long} createAt
         * @memberof gsbase.GameEvent
         * @instance
         */
        GameEvent.prototype.createAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GameEvent instance using the specified properties.
         * @function create
         * @memberof gsbase.GameEvent
         * @static
         * @param {gsbase.IGameEvent=} [properties] Properties to set
         * @returns {gsbase.GameEvent} GameEvent instance
         */
        GameEvent.create = function create(properties) {
            return new GameEvent(properties);
        };

        /**
         * Encodes the specified GameEvent message. Does not implicitly {@link gsbase.GameEvent.verify|verify} messages.
         * @function encode
         * @memberof gsbase.GameEvent
         * @static
         * @param {gsbase.IGameEvent} message GameEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.gameGid != null && Object.hasOwnProperty.call(message, "gameGid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameGid);
            if (message.platAid != null && Object.hasOwnProperty.call(message, "platAid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.platAid);
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ruleId);
            if (message.matchId != null && Object.hasOwnProperty.call(message, "matchId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.matchId);
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.eventId);
            if (message.eventParams != null && Object.hasOwnProperty.call(message, "eventParams"))
                for (var keys = Object.keys(message.eventParams), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.eventParams[keys[i]]).ldelim();
            if (message.createAt != null && Object.hasOwnProperty.call(message, "createAt"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.createAt);
            return writer;
        };

        /**
         * Encodes the specified GameEvent message, length delimited. Does not implicitly {@link gsbase.GameEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.GameEvent
         * @static
         * @param {gsbase.IGameEvent} message GameEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameEvent message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.GameEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.GameEvent} GameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.GameEvent(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.gameGid = reader.string();
                        break;
                    }
                case 3: {
                        message.platAid = reader.int32();
                        break;
                    }
                case 4: {
                        message.ruleId = reader.string();
                        break;
                    }
                case 5: {
                        message.matchId = reader.string();
                        break;
                    }
                case 6: {
                        message.eventId = reader.string();
                        break;
                    }
                case 7: {
                        if (message.eventParams === $util.emptyObject)
                            message.eventParams = {};
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
                        message.eventParams[key] = value;
                        break;
                    }
                case 8: {
                        message.createAt = reader.int64();
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
         * Decodes a GameEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.GameEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.GameEvent} GameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameEvent message.
         * @function verify
         * @memberof gsbase.GameEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                if (!$util.isString(message.gameGid))
                    return "gameGid: string expected";
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                if (!$util.isInteger(message.platAid))
                    return "platAid: integer expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isString(message.matchId))
                    return "matchId: string expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.eventParams != null && message.hasOwnProperty("eventParams")) {
                if (!$util.isObject(message.eventParams))
                    return "eventParams: object expected";
                var key = Object.keys(message.eventParams);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.eventParams[key[i]]))
                        return "eventParams: string{k:string} expected";
            }
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (!$util.isInteger(message.createAt) && !(message.createAt && $util.isInteger(message.createAt.low) && $util.isInteger(message.createAt.high)))
                    return "createAt: integer|Long expected";
            return null;
        };

        /**
         * Creates a GameEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.GameEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.GameEvent} GameEvent
         */
        GameEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.GameEvent)
                return object;
            var message = new $root.gsbase.GameEvent();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.gameGid != null)
                message.gameGid = String(object.gameGid);
            if (object.platAid != null)
                message.platAid = object.platAid | 0;
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            if (object.matchId != null)
                message.matchId = String(object.matchId);
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.eventParams) {
                if (typeof object.eventParams !== "object")
                    throw TypeError(".gsbase.GameEvent.eventParams: object expected");
                message.eventParams = {};
                for (var keys = Object.keys(object.eventParams), i = 0; i < keys.length; ++i)
                    message.eventParams[keys[i]] = String(object.eventParams[keys[i]]);
            }
            if (object.createAt != null)
                if ($util.Long)
                    (message.createAt = $util.Long.fromValue(object.createAt)).unsigned = false;
                else if (typeof object.createAt === "string")
                    message.createAt = parseInt(object.createAt, 10);
                else if (typeof object.createAt === "number")
                    message.createAt = object.createAt;
                else if (typeof object.createAt === "object")
                    message.createAt = new $util.LongBits(object.createAt.low >>> 0, object.createAt.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GameEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.GameEvent
         * @static
         * @param {gsbase.GameEvent} message GameEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.eventParams = {};
            if (options.defaults) {
                object.roomId = "";
                object.gameGid = "";
                object.platAid = 0;
                object.ruleId = "";
                object.matchId = "";
                object.eventId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createAt = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                object.gameGid = message.gameGid;
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                object.platAid = message.platAid;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                object.matchId = message.matchId;
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            var keys2;
            if (message.eventParams && (keys2 = Object.keys(message.eventParams)).length) {
                object.eventParams = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.eventParams[keys2[j]] = message.eventParams[keys2[j]];
            }
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (typeof message.createAt === "number")
                    object.createAt = options.longs === String ? String(message.createAt) : message.createAt;
                else
                    object.createAt = options.longs === String ? $util.Long.prototype.toString.call(message.createAt) : options.longs === Number ? new $util.LongBits(message.createAt.low >>> 0, message.createAt.high >>> 0).toNumber() : message.createAt;
            return object;
        };

        /**
         * Converts this GameEvent to JSON.
         * @function toJSON
         * @memberof gsbase.GameEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameEvent
         * @function getTypeUrl
         * @memberof gsbase.GameEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.GameEvent";
        };

        return GameEvent;
    })();

    gsbase.PlayerEvent = (function() {

        /**
         * Properties of a PlayerEvent.
         * @memberof gsbase
         * @interface IPlayerEvent
         * @property {string|null} [roomId] PlayerEvent roomId
         * @property {string|null} [gameGid] PlayerEvent gameGid
         * @property {number|null} [platAid] PlayerEvent platAid
         * @property {string|null} [eventId] PlayerEvent eventId
         * @property {string|null} [openid] PlayerEvent openid
         * @property {Object.<string,string>|null} [eventParams] PlayerEvent eventParams
         * @property {string|null} [ruleId] PlayerEvent ruleId
         * @property {string|null} [matchId] PlayerEvent matchId
         * @property {number|Long|null} [createAt] PlayerEvent createAt
         */

        /**
         * Constructs a new PlayerEvent.
         * @memberof gsbase
         * @classdesc Represents a PlayerEvent.
         * @implements IPlayerEvent
         * @constructor
         * @param {gsbase.IPlayerEvent=} [properties] Properties to set
         */
        function PlayerEvent(properties) {
            this.eventParams = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerEvent roomId.
         * @member {string} roomId
         * @memberof gsbase.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.roomId = "";

        /**
         * PlayerEvent gameGid.
         * @member {string} gameGid
         * @memberof gsbase.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.gameGid = "";

        /**
         * PlayerEvent platAid.
         * @member {number} platAid
         * @memberof gsbase.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.platAid = 0;

        /**
         * PlayerEvent eventId.
         * @member {string} eventId
         * @memberof gsbase.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.eventId = "";

        /**
         * PlayerEvent openid.
         * @member {string} openid
         * @memberof gsbase.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.openid = "";

        /**
         * PlayerEvent eventParams.
         * @member {Object.<string,string>} eventParams
         * @memberof gsbase.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.eventParams = $util.emptyObject;

        /**
         * PlayerEvent ruleId.
         * @member {string} ruleId
         * @memberof gsbase.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.ruleId = "";

        /**
         * PlayerEvent matchId.
         * @member {string} matchId
         * @memberof gsbase.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.matchId = "";

        /**
         * PlayerEvent createAt.
         * @member {number|Long} createAt
         * @memberof gsbase.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.createAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PlayerEvent instance using the specified properties.
         * @function create
         * @memberof gsbase.PlayerEvent
         * @static
         * @param {gsbase.IPlayerEvent=} [properties] Properties to set
         * @returns {gsbase.PlayerEvent} PlayerEvent instance
         */
        PlayerEvent.create = function create(properties) {
            return new PlayerEvent(properties);
        };

        /**
         * Encodes the specified PlayerEvent message. Does not implicitly {@link gsbase.PlayerEvent.verify|verify} messages.
         * @function encode
         * @memberof gsbase.PlayerEvent
         * @static
         * @param {gsbase.IPlayerEvent} message PlayerEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.gameGid != null && Object.hasOwnProperty.call(message, "gameGid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameGid);
            if (message.platAid != null && Object.hasOwnProperty.call(message, "platAid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.platAid);
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.eventId);
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.openid);
            if (message.eventParams != null && Object.hasOwnProperty.call(message, "eventParams"))
                for (var keys = Object.keys(message.eventParams), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.eventParams[keys[i]]).ldelim();
            if (message.ruleId != null && Object.hasOwnProperty.call(message, "ruleId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ruleId);
            if (message.matchId != null && Object.hasOwnProperty.call(message, "matchId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.matchId);
            if (message.createAt != null && Object.hasOwnProperty.call(message, "createAt"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.createAt);
            return writer;
        };

        /**
         * Encodes the specified PlayerEvent message, length delimited. Does not implicitly {@link gsbase.PlayerEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.PlayerEvent
         * @static
         * @param {gsbase.IPlayerEvent} message PlayerEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerEvent message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.PlayerEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.PlayerEvent} PlayerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.PlayerEvent(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.gameGid = reader.string();
                        break;
                    }
                case 3: {
                        message.platAid = reader.int32();
                        break;
                    }
                case 4: {
                        message.eventId = reader.string();
                        break;
                    }
                case 5: {
                        message.openid = reader.string();
                        break;
                    }
                case 6: {
                        if (message.eventParams === $util.emptyObject)
                            message.eventParams = {};
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
                        message.eventParams[key] = value;
                        break;
                    }
                case 7: {
                        message.ruleId = reader.string();
                        break;
                    }
                case 8: {
                        message.matchId = reader.string();
                        break;
                    }
                case 9: {
                        message.createAt = reader.int64();
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
         * Decodes a PlayerEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.PlayerEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.PlayerEvent} PlayerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerEvent message.
         * @function verify
         * @memberof gsbase.PlayerEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                if (!$util.isString(message.gameGid))
                    return "gameGid: string expected";
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                if (!$util.isInteger(message.platAid))
                    return "platAid: integer expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            if (message.eventParams != null && message.hasOwnProperty("eventParams")) {
                if (!$util.isObject(message.eventParams))
                    return "eventParams: object expected";
                var key = Object.keys(message.eventParams);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.eventParams[key[i]]))
                        return "eventParams: string{k:string} expected";
            }
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isString(message.ruleId))
                    return "ruleId: string expected";
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isString(message.matchId))
                    return "matchId: string expected";
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (!$util.isInteger(message.createAt) && !(message.createAt && $util.isInteger(message.createAt.low) && $util.isInteger(message.createAt.high)))
                    return "createAt: integer|Long expected";
            return null;
        };

        /**
         * Creates a PlayerEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.PlayerEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.PlayerEvent} PlayerEvent
         */
        PlayerEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.PlayerEvent)
                return object;
            var message = new $root.gsbase.PlayerEvent();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.gameGid != null)
                message.gameGid = String(object.gameGid);
            if (object.platAid != null)
                message.platAid = object.platAid | 0;
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.openid != null)
                message.openid = String(object.openid);
            if (object.eventParams) {
                if (typeof object.eventParams !== "object")
                    throw TypeError(".gsbase.PlayerEvent.eventParams: object expected");
                message.eventParams = {};
                for (var keys = Object.keys(object.eventParams), i = 0; i < keys.length; ++i)
                    message.eventParams[keys[i]] = String(object.eventParams[keys[i]]);
            }
            if (object.ruleId != null)
                message.ruleId = String(object.ruleId);
            if (object.matchId != null)
                message.matchId = String(object.matchId);
            if (object.createAt != null)
                if ($util.Long)
                    (message.createAt = $util.Long.fromValue(object.createAt)).unsigned = false;
                else if (typeof object.createAt === "string")
                    message.createAt = parseInt(object.createAt, 10);
                else if (typeof object.createAt === "number")
                    message.createAt = object.createAt;
                else if (typeof object.createAt === "object")
                    message.createAt = new $util.LongBits(object.createAt.low >>> 0, object.createAt.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PlayerEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.PlayerEvent
         * @static
         * @param {gsbase.PlayerEvent} message PlayerEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.eventParams = {};
            if (options.defaults) {
                object.roomId = "";
                object.gameGid = "";
                object.platAid = 0;
                object.eventId = "";
                object.openid = "";
                object.ruleId = "";
                object.matchId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createAt = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                object.gameGid = message.gameGid;
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                object.platAid = message.platAid;
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            var keys2;
            if (message.eventParams && (keys2 = Object.keys(message.eventParams)).length) {
                object.eventParams = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.eventParams[keys2[j]] = message.eventParams[keys2[j]];
            }
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                object.matchId = message.matchId;
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (typeof message.createAt === "number")
                    object.createAt = options.longs === String ? String(message.createAt) : message.createAt;
                else
                    object.createAt = options.longs === String ? $util.Long.prototype.toString.call(message.createAt) : options.longs === Number ? new $util.LongBits(message.createAt.low >>> 0, message.createAt.high >>> 0).toNumber() : message.createAt;
            return object;
        };

        /**
         * Converts this PlayerEvent to JSON.
         * @function toJSON
         * @memberof gsbase.PlayerEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerEvent
         * @function getTypeUrl
         * @memberof gsbase.PlayerEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.PlayerEvent";
        };

        return PlayerEvent;
    })();

    gsbase.ApplyDismissReq = (function() {

        /**
         * Properties of an ApplyDismissReq.
         * @memberof gsbase
         * @interface IApplyDismissReq
         */

        /**
         * Constructs a new ApplyDismissReq.
         * @memberof gsbase
         * @classdesc Represents an ApplyDismissReq.
         * @implements IApplyDismissReq
         * @constructor
         * @param {gsbase.IApplyDismissReq=} [properties] Properties to set
         */
        function ApplyDismissReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ApplyDismissReq instance using the specified properties.
         * @function create
         * @memberof gsbase.ApplyDismissReq
         * @static
         * @param {gsbase.IApplyDismissReq=} [properties] Properties to set
         * @returns {gsbase.ApplyDismissReq} ApplyDismissReq instance
         */
        ApplyDismissReq.create = function create(properties) {
            return new ApplyDismissReq(properties);
        };

        /**
         * Encodes the specified ApplyDismissReq message. Does not implicitly {@link gsbase.ApplyDismissReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.ApplyDismissReq
         * @static
         * @param {gsbase.IApplyDismissReq} message ApplyDismissReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDismissReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ApplyDismissReq message, length delimited. Does not implicitly {@link gsbase.ApplyDismissReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.ApplyDismissReq
         * @static
         * @param {gsbase.IApplyDismissReq} message ApplyDismissReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDismissReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApplyDismissReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.ApplyDismissReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.ApplyDismissReq} ApplyDismissReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDismissReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ApplyDismissReq();
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
         * Decodes an ApplyDismissReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.ApplyDismissReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.ApplyDismissReq} ApplyDismissReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDismissReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApplyDismissReq message.
         * @function verify
         * @memberof gsbase.ApplyDismissReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApplyDismissReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ApplyDismissReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.ApplyDismissReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.ApplyDismissReq} ApplyDismissReq
         */
        ApplyDismissReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.ApplyDismissReq)
                return object;
            return new $root.gsbase.ApplyDismissReq();
        };

        /**
         * Creates a plain object from an ApplyDismissReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.ApplyDismissReq
         * @static
         * @param {gsbase.ApplyDismissReq} message ApplyDismissReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApplyDismissReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ApplyDismissReq to JSON.
         * @function toJSON
         * @memberof gsbase.ApplyDismissReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApplyDismissReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ApplyDismissReq
         * @function getTypeUrl
         * @memberof gsbase.ApplyDismissReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ApplyDismissReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.ApplyDismissReq";
        };

        return ApplyDismissReq;
    })();

    gsbase.ApplyDismissRsp = (function() {

        /**
         * Properties of an ApplyDismissRsp.
         * @memberof gsbase
         * @interface IApplyDismissRsp
         * @property {string|null} [err] ApplyDismissRsp err
         */

        /**
         * Constructs a new ApplyDismissRsp.
         * @memberof gsbase
         * @classdesc Represents an ApplyDismissRsp.
         * @implements IApplyDismissRsp
         * @constructor
         * @param {gsbase.IApplyDismissRsp=} [properties] Properties to set
         */
        function ApplyDismissRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApplyDismissRsp err.
         * @member {string} err
         * @memberof gsbase.ApplyDismissRsp
         * @instance
         */
        ApplyDismissRsp.prototype.err = "";

        /**
         * Creates a new ApplyDismissRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.ApplyDismissRsp
         * @static
         * @param {gsbase.IApplyDismissRsp=} [properties] Properties to set
         * @returns {gsbase.ApplyDismissRsp} ApplyDismissRsp instance
         */
        ApplyDismissRsp.create = function create(properties) {
            return new ApplyDismissRsp(properties);
        };

        /**
         * Encodes the specified ApplyDismissRsp message. Does not implicitly {@link gsbase.ApplyDismissRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.ApplyDismissRsp
         * @static
         * @param {gsbase.IApplyDismissRsp} message ApplyDismissRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDismissRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified ApplyDismissRsp message, length delimited. Does not implicitly {@link gsbase.ApplyDismissRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.ApplyDismissRsp
         * @static
         * @param {gsbase.IApplyDismissRsp} message ApplyDismissRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDismissRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApplyDismissRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.ApplyDismissRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.ApplyDismissRsp} ApplyDismissRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDismissRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ApplyDismissRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
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
         * Decodes an ApplyDismissRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.ApplyDismissRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.ApplyDismissRsp} ApplyDismissRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDismissRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApplyDismissRsp message.
         * @function verify
         * @memberof gsbase.ApplyDismissRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApplyDismissRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates an ApplyDismissRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.ApplyDismissRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.ApplyDismissRsp} ApplyDismissRsp
         */
        ApplyDismissRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.ApplyDismissRsp)
                return object;
            var message = new $root.gsbase.ApplyDismissRsp();
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from an ApplyDismissRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.ApplyDismissRsp
         * @static
         * @param {gsbase.ApplyDismissRsp} message ApplyDismissRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApplyDismissRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = "";
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this ApplyDismissRsp to JSON.
         * @function toJSON
         * @memberof gsbase.ApplyDismissRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApplyDismissRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ApplyDismissRsp
         * @function getTypeUrl
         * @memberof gsbase.ApplyDismissRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ApplyDismissRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.ApplyDismissRsp";
        };

        return ApplyDismissRsp;
    })();

    gsbase.ApplyDismissNot = (function() {

        /**
         * Properties of an ApplyDismissNot.
         * @memberof gsbase
         * @interface IApplyDismissNot
         * @property {string|null} [openid] ApplyDismissNot openid
         * @property {number|Long|null} [applyTime] ApplyDismissNot applyTime
         * @property {number|Long|null} [expire] ApplyDismissNot expire
         * @property {Array.<gsbase.ApplyDismissNot.IStatus>|null} [status] ApplyDismissNot status
         */

        /**
         * Constructs a new ApplyDismissNot.
         * @memberof gsbase
         * @classdesc Represents an ApplyDismissNot.
         * @implements IApplyDismissNot
         * @constructor
         * @param {gsbase.IApplyDismissNot=} [properties] Properties to set
         */
        function ApplyDismissNot(properties) {
            this.status = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApplyDismissNot openid.
         * @member {string} openid
         * @memberof gsbase.ApplyDismissNot
         * @instance
         */
        ApplyDismissNot.prototype.openid = "";

        /**
         * ApplyDismissNot applyTime.
         * @member {number|Long} applyTime
         * @memberof gsbase.ApplyDismissNot
         * @instance
         */
        ApplyDismissNot.prototype.applyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ApplyDismissNot expire.
         * @member {number|Long} expire
         * @memberof gsbase.ApplyDismissNot
         * @instance
         */
        ApplyDismissNot.prototype.expire = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ApplyDismissNot status.
         * @member {Array.<gsbase.ApplyDismissNot.IStatus>} status
         * @memberof gsbase.ApplyDismissNot
         * @instance
         */
        ApplyDismissNot.prototype.status = $util.emptyArray;

        /**
         * Creates a new ApplyDismissNot instance using the specified properties.
         * @function create
         * @memberof gsbase.ApplyDismissNot
         * @static
         * @param {gsbase.IApplyDismissNot=} [properties] Properties to set
         * @returns {gsbase.ApplyDismissNot} ApplyDismissNot instance
         */
        ApplyDismissNot.create = function create(properties) {
            return new ApplyDismissNot(properties);
        };

        /**
         * Encodes the specified ApplyDismissNot message. Does not implicitly {@link gsbase.ApplyDismissNot.verify|verify} messages.
         * @function encode
         * @memberof gsbase.ApplyDismissNot
         * @static
         * @param {gsbase.IApplyDismissNot} message ApplyDismissNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDismissNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
            if (message.applyTime != null && Object.hasOwnProperty.call(message, "applyTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.applyTime);
            if (message.expire != null && Object.hasOwnProperty.call(message, "expire"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.expire);
            if (message.status != null && message.status.length)
                for (var i = 0; i < message.status.length; ++i)
                    $root.gsbase.ApplyDismissNot.Status.encode(message.status[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ApplyDismissNot message, length delimited. Does not implicitly {@link gsbase.ApplyDismissNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.ApplyDismissNot
         * @static
         * @param {gsbase.IApplyDismissNot} message ApplyDismissNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDismissNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApplyDismissNot message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.ApplyDismissNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.ApplyDismissNot} ApplyDismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDismissNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ApplyDismissNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.openid = reader.string();
                        break;
                    }
                case 2: {
                        message.applyTime = reader.int64();
                        break;
                    }
                case 3: {
                        message.expire = reader.int64();
                        break;
                    }
                case 4: {
                        if (!(message.status && message.status.length))
                            message.status = [];
                        message.status.push($root.gsbase.ApplyDismissNot.Status.decode(reader, reader.uint32()));
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
         * Decodes an ApplyDismissNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.ApplyDismissNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.ApplyDismissNot} ApplyDismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDismissNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApplyDismissNot message.
         * @function verify
         * @memberof gsbase.ApplyDismissNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApplyDismissNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                if (!$util.isInteger(message.applyTime) && !(message.applyTime && $util.isInteger(message.applyTime.low) && $util.isInteger(message.applyTime.high)))
                    return "applyTime: integer|Long expected";
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (!$util.isInteger(message.expire) && !(message.expire && $util.isInteger(message.expire.low) && $util.isInteger(message.expire.high)))
                    return "expire: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                if (!Array.isArray(message.status))
                    return "status: array expected";
                for (var i = 0; i < message.status.length; ++i) {
                    var error = $root.gsbase.ApplyDismissNot.Status.verify(message.status[i]);
                    if (error)
                        return "status." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ApplyDismissNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.ApplyDismissNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.ApplyDismissNot} ApplyDismissNot
         */
        ApplyDismissNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.ApplyDismissNot)
                return object;
            var message = new $root.gsbase.ApplyDismissNot();
            if (object.openid != null)
                message.openid = String(object.openid);
            if (object.applyTime != null)
                if ($util.Long)
                    (message.applyTime = $util.Long.fromValue(object.applyTime)).unsigned = false;
                else if (typeof object.applyTime === "string")
                    message.applyTime = parseInt(object.applyTime, 10);
                else if (typeof object.applyTime === "number")
                    message.applyTime = object.applyTime;
                else if (typeof object.applyTime === "object")
                    message.applyTime = new $util.LongBits(object.applyTime.low >>> 0, object.applyTime.high >>> 0).toNumber();
            if (object.expire != null)
                if ($util.Long)
                    (message.expire = $util.Long.fromValue(object.expire)).unsigned = false;
                else if (typeof object.expire === "string")
                    message.expire = parseInt(object.expire, 10);
                else if (typeof object.expire === "number")
                    message.expire = object.expire;
                else if (typeof object.expire === "object")
                    message.expire = new $util.LongBits(object.expire.low >>> 0, object.expire.high >>> 0).toNumber();
            if (object.status) {
                if (!Array.isArray(object.status))
                    throw TypeError(".gsbase.ApplyDismissNot.status: array expected");
                message.status = [];
                for (var i = 0; i < object.status.length; ++i) {
                    if (typeof object.status[i] !== "object")
                        throw TypeError(".gsbase.ApplyDismissNot.status: object expected");
                    message.status[i] = $root.gsbase.ApplyDismissNot.Status.fromObject(object.status[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ApplyDismissNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.ApplyDismissNot
         * @static
         * @param {gsbase.ApplyDismissNot} message ApplyDismissNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApplyDismissNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.status = [];
            if (options.defaults) {
                object.openid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.applyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.applyTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expire = options.longs === String ? "0" : 0;
            }
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                if (typeof message.applyTime === "number")
                    object.applyTime = options.longs === String ? String(message.applyTime) : message.applyTime;
                else
                    object.applyTime = options.longs === String ? $util.Long.prototype.toString.call(message.applyTime) : options.longs === Number ? new $util.LongBits(message.applyTime.low >>> 0, message.applyTime.high >>> 0).toNumber() : message.applyTime;
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (typeof message.expire === "number")
                    object.expire = options.longs === String ? String(message.expire) : message.expire;
                else
                    object.expire = options.longs === String ? $util.Long.prototype.toString.call(message.expire) : options.longs === Number ? new $util.LongBits(message.expire.low >>> 0, message.expire.high >>> 0).toNumber() : message.expire;
            if (message.status && message.status.length) {
                object.status = [];
                for (var j = 0; j < message.status.length; ++j)
                    object.status[j] = $root.gsbase.ApplyDismissNot.Status.toObject(message.status[j], options);
            }
            return object;
        };

        /**
         * Converts this ApplyDismissNot to JSON.
         * @function toJSON
         * @memberof gsbase.ApplyDismissNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApplyDismissNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ApplyDismissNot
         * @function getTypeUrl
         * @memberof gsbase.ApplyDismissNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ApplyDismissNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.ApplyDismissNot";
        };

        ApplyDismissNot.Status = (function() {

            /**
             * Properties of a Status.
             * @memberof gsbase.ApplyDismissNot
             * @interface IStatus
             * @property {string|null} [openid] Status openid
             * @property {number|Long|null} [opTime] Status opTime
             * @property {boolean|null} [reply] Status reply
             */

            /**
             * Constructs a new Status.
             * @memberof gsbase.ApplyDismissNot
             * @classdesc Represents a Status.
             * @implements IStatus
             * @constructor
             * @param {gsbase.ApplyDismissNot.IStatus=} [properties] Properties to set
             */
            function Status(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Status openid.
             * @member {string} openid
             * @memberof gsbase.ApplyDismissNot.Status
             * @instance
             */
            Status.prototype.openid = "";

            /**
             * Status opTime.
             * @member {number|Long} opTime
             * @memberof gsbase.ApplyDismissNot.Status
             * @instance
             */
            Status.prototype.opTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Status reply.
             * @member {boolean} reply
             * @memberof gsbase.ApplyDismissNot.Status
             * @instance
             */
            Status.prototype.reply = false;

            /**
             * Creates a new Status instance using the specified properties.
             * @function create
             * @memberof gsbase.ApplyDismissNot.Status
             * @static
             * @param {gsbase.ApplyDismissNot.IStatus=} [properties] Properties to set
             * @returns {gsbase.ApplyDismissNot.Status} Status instance
             */
            Status.create = function create(properties) {
                return new Status(properties);
            };

            /**
             * Encodes the specified Status message. Does not implicitly {@link gsbase.ApplyDismissNot.Status.verify|verify} messages.
             * @function encode
             * @memberof gsbase.ApplyDismissNot.Status
             * @static
             * @param {gsbase.ApplyDismissNot.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
                if (message.opTime != null && Object.hasOwnProperty.call(message, "opTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.opTime);
                if (message.reply != null && Object.hasOwnProperty.call(message, "reply"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.reply);
                return writer;
            };

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link gsbase.ApplyDismissNot.Status.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gsbase.ApplyDismissNot.Status
             * @static
             * @param {gsbase.ApplyDismissNot.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @function decode
             * @memberof gsbase.ApplyDismissNot.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gsbase.ApplyDismissNot.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ApplyDismissNot.Status();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.openid = reader.string();
                            break;
                        }
                    case 2: {
                            message.opTime = reader.int64();
                            break;
                        }
                    case 3: {
                            message.reply = reader.bool();
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
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gsbase.ApplyDismissNot.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gsbase.ApplyDismissNot.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Status message.
             * @function verify
             * @memberof gsbase.ApplyDismissNot.Status
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Status.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.openid != null && message.hasOwnProperty("openid"))
                    if (!$util.isString(message.openid))
                        return "openid: string expected";
                if (message.opTime != null && message.hasOwnProperty("opTime"))
                    if (!$util.isInteger(message.opTime) && !(message.opTime && $util.isInteger(message.opTime.low) && $util.isInteger(message.opTime.high)))
                        return "opTime: integer|Long expected";
                if (message.reply != null && message.hasOwnProperty("reply"))
                    if (typeof message.reply !== "boolean")
                        return "reply: boolean expected";
                return null;
            };

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gsbase.ApplyDismissNot.Status
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gsbase.ApplyDismissNot.Status} Status
             */
            Status.fromObject = function fromObject(object) {
                if (object instanceof $root.gsbase.ApplyDismissNot.Status)
                    return object;
                var message = new $root.gsbase.ApplyDismissNot.Status();
                if (object.openid != null)
                    message.openid = String(object.openid);
                if (object.opTime != null)
                    if ($util.Long)
                        (message.opTime = $util.Long.fromValue(object.opTime)).unsigned = false;
                    else if (typeof object.opTime === "string")
                        message.opTime = parseInt(object.opTime, 10);
                    else if (typeof object.opTime === "number")
                        message.opTime = object.opTime;
                    else if (typeof object.opTime === "object")
                        message.opTime = new $util.LongBits(object.opTime.low >>> 0, object.opTime.high >>> 0).toNumber();
                if (object.reply != null)
                    message.reply = Boolean(object.reply);
                return message;
            };

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gsbase.ApplyDismissNot.Status
             * @static
             * @param {gsbase.ApplyDismissNot.Status} message Status
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Status.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.openid = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.opTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.opTime = options.longs === String ? "0" : 0;
                    object.reply = false;
                }
                if (message.openid != null && message.hasOwnProperty("openid"))
                    object.openid = message.openid;
                if (message.opTime != null && message.hasOwnProperty("opTime"))
                    if (typeof message.opTime === "number")
                        object.opTime = options.longs === String ? String(message.opTime) : message.opTime;
                    else
                        object.opTime = options.longs === String ? $util.Long.prototype.toString.call(message.opTime) : options.longs === Number ? new $util.LongBits(message.opTime.low >>> 0, message.opTime.high >>> 0).toNumber() : message.opTime;
                if (message.reply != null && message.hasOwnProperty("reply"))
                    object.reply = message.reply;
                return object;
            };

            /**
             * Converts this Status to JSON.
             * @function toJSON
             * @memberof gsbase.ApplyDismissNot.Status
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Status.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Status
             * @function getTypeUrl
             * @memberof gsbase.ApplyDismissNot.Status
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/gsbase.ApplyDismissNot.Status";
            };

            return Status;
        })();

        return ApplyDismissNot;
    })();

    gsbase.ReplyDismissReq = (function() {

        /**
         * Properties of a ReplyDismissReq.
         * @memberof gsbase
         * @interface IReplyDismissReq
         * @property {boolean|null} [reply] ReplyDismissReq reply
         */

        /**
         * Constructs a new ReplyDismissReq.
         * @memberof gsbase
         * @classdesc Represents a ReplyDismissReq.
         * @implements IReplyDismissReq
         * @constructor
         * @param {gsbase.IReplyDismissReq=} [properties] Properties to set
         */
        function ReplyDismissReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplyDismissReq reply.
         * @member {boolean} reply
         * @memberof gsbase.ReplyDismissReq
         * @instance
         */
        ReplyDismissReq.prototype.reply = false;

        /**
         * Creates a new ReplyDismissReq instance using the specified properties.
         * @function create
         * @memberof gsbase.ReplyDismissReq
         * @static
         * @param {gsbase.IReplyDismissReq=} [properties] Properties to set
         * @returns {gsbase.ReplyDismissReq} ReplyDismissReq instance
         */
        ReplyDismissReq.create = function create(properties) {
            return new ReplyDismissReq(properties);
        };

        /**
         * Encodes the specified ReplyDismissReq message. Does not implicitly {@link gsbase.ReplyDismissReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.ReplyDismissReq
         * @static
         * @param {gsbase.IReplyDismissReq} message ReplyDismissReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyDismissReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reply != null && Object.hasOwnProperty.call(message, "reply"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.reply);
            return writer;
        };

        /**
         * Encodes the specified ReplyDismissReq message, length delimited. Does not implicitly {@link gsbase.ReplyDismissReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.ReplyDismissReq
         * @static
         * @param {gsbase.IReplyDismissReq} message ReplyDismissReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyDismissReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplyDismissReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.ReplyDismissReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.ReplyDismissReq} ReplyDismissReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyDismissReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ReplyDismissReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.reply = reader.bool();
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
         * Decodes a ReplyDismissReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.ReplyDismissReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.ReplyDismissReq} ReplyDismissReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyDismissReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplyDismissReq message.
         * @function verify
         * @memberof gsbase.ReplyDismissReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplyDismissReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reply != null && message.hasOwnProperty("reply"))
                if (typeof message.reply !== "boolean")
                    return "reply: boolean expected";
            return null;
        };

        /**
         * Creates a ReplyDismissReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.ReplyDismissReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.ReplyDismissReq} ReplyDismissReq
         */
        ReplyDismissReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.ReplyDismissReq)
                return object;
            var message = new $root.gsbase.ReplyDismissReq();
            if (object.reply != null)
                message.reply = Boolean(object.reply);
            return message;
        };

        /**
         * Creates a plain object from a ReplyDismissReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.ReplyDismissReq
         * @static
         * @param {gsbase.ReplyDismissReq} message ReplyDismissReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplyDismissReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reply = false;
            if (message.reply != null && message.hasOwnProperty("reply"))
                object.reply = message.reply;
            return object;
        };

        /**
         * Converts this ReplyDismissReq to JSON.
         * @function toJSON
         * @memberof gsbase.ReplyDismissReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplyDismissReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplyDismissReq
         * @function getTypeUrl
         * @memberof gsbase.ReplyDismissReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplyDismissReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.ReplyDismissReq";
        };

        return ReplyDismissReq;
    })();

    gsbase.ReplyDismissRsp = (function() {

        /**
         * Properties of a ReplyDismissRsp.
         * @memberof gsbase
         * @interface IReplyDismissRsp
         * @property {string|null} [err] ReplyDismissRsp err
         */

        /**
         * Constructs a new ReplyDismissRsp.
         * @memberof gsbase
         * @classdesc Represents a ReplyDismissRsp.
         * @implements IReplyDismissRsp
         * @constructor
         * @param {gsbase.IReplyDismissRsp=} [properties] Properties to set
         */
        function ReplyDismissRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplyDismissRsp err.
         * @member {string} err
         * @memberof gsbase.ReplyDismissRsp
         * @instance
         */
        ReplyDismissRsp.prototype.err = "";

        /**
         * Creates a new ReplyDismissRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.ReplyDismissRsp
         * @static
         * @param {gsbase.IReplyDismissRsp=} [properties] Properties to set
         * @returns {gsbase.ReplyDismissRsp} ReplyDismissRsp instance
         */
        ReplyDismissRsp.create = function create(properties) {
            return new ReplyDismissRsp(properties);
        };

        /**
         * Encodes the specified ReplyDismissRsp message. Does not implicitly {@link gsbase.ReplyDismissRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.ReplyDismissRsp
         * @static
         * @param {gsbase.IReplyDismissRsp} message ReplyDismissRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyDismissRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified ReplyDismissRsp message, length delimited. Does not implicitly {@link gsbase.ReplyDismissRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.ReplyDismissRsp
         * @static
         * @param {gsbase.IReplyDismissRsp} message ReplyDismissRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyDismissRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplyDismissRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.ReplyDismissRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.ReplyDismissRsp} ReplyDismissRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyDismissRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ReplyDismissRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
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
         * Decodes a ReplyDismissRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.ReplyDismissRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.ReplyDismissRsp} ReplyDismissRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyDismissRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplyDismissRsp message.
         * @function verify
         * @memberof gsbase.ReplyDismissRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplyDismissRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates a ReplyDismissRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.ReplyDismissRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.ReplyDismissRsp} ReplyDismissRsp
         */
        ReplyDismissRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.ReplyDismissRsp)
                return object;
            var message = new $root.gsbase.ReplyDismissRsp();
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from a ReplyDismissRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.ReplyDismissRsp
         * @static
         * @param {gsbase.ReplyDismissRsp} message ReplyDismissRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplyDismissRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = "";
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this ReplyDismissRsp to JSON.
         * @function toJSON
         * @memberof gsbase.ReplyDismissRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplyDismissRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplyDismissRsp
         * @function getTypeUrl
         * @memberof gsbase.ReplyDismissRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplyDismissRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.ReplyDismissRsp";
        };

        return ReplyDismissRsp;
    })();

    gsbase.ReplyDismissNot = (function() {

        /**
         * Properties of a ReplyDismissNot.
         * @memberof gsbase
         * @interface IReplyDismissNot
         * @property {string|null} [openid] ReplyDismissNot openid
         * @property {boolean|null} [reply] ReplyDismissNot reply
         * @property {Array.<gsbase.ReplyDismissNot.IReplyInfo>|null} [replyList] ReplyDismissNot replyList
         */

        /**
         * Constructs a new ReplyDismissNot.
         * @memberof gsbase
         * @classdesc Represents a ReplyDismissNot.
         * @implements IReplyDismissNot
         * @constructor
         * @param {gsbase.IReplyDismissNot=} [properties] Properties to set
         */
        function ReplyDismissNot(properties) {
            this.replyList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplyDismissNot openid.
         * @member {string} openid
         * @memberof gsbase.ReplyDismissNot
         * @instance
         */
        ReplyDismissNot.prototype.openid = "";

        /**
         * ReplyDismissNot reply.
         * @member {boolean} reply
         * @memberof gsbase.ReplyDismissNot
         * @instance
         */
        ReplyDismissNot.prototype.reply = false;

        /**
         * ReplyDismissNot replyList.
         * @member {Array.<gsbase.ReplyDismissNot.IReplyInfo>} replyList
         * @memberof gsbase.ReplyDismissNot
         * @instance
         */
        ReplyDismissNot.prototype.replyList = $util.emptyArray;

        /**
         * Creates a new ReplyDismissNot instance using the specified properties.
         * @function create
         * @memberof gsbase.ReplyDismissNot
         * @static
         * @param {gsbase.IReplyDismissNot=} [properties] Properties to set
         * @returns {gsbase.ReplyDismissNot} ReplyDismissNot instance
         */
        ReplyDismissNot.create = function create(properties) {
            return new ReplyDismissNot(properties);
        };

        /**
         * Encodes the specified ReplyDismissNot message. Does not implicitly {@link gsbase.ReplyDismissNot.verify|verify} messages.
         * @function encode
         * @memberof gsbase.ReplyDismissNot
         * @static
         * @param {gsbase.IReplyDismissNot} message ReplyDismissNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyDismissNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
            if (message.reply != null && Object.hasOwnProperty.call(message, "reply"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.reply);
            if (message.replyList != null && message.replyList.length)
                for (var i = 0; i < message.replyList.length; ++i)
                    $root.gsbase.ReplyDismissNot.ReplyInfo.encode(message.replyList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReplyDismissNot message, length delimited. Does not implicitly {@link gsbase.ReplyDismissNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.ReplyDismissNot
         * @static
         * @param {gsbase.IReplyDismissNot} message ReplyDismissNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyDismissNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplyDismissNot message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.ReplyDismissNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.ReplyDismissNot} ReplyDismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyDismissNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ReplyDismissNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.openid = reader.string();
                        break;
                    }
                case 2: {
                        message.reply = reader.bool();
                        break;
                    }
                case 3: {
                        if (!(message.replyList && message.replyList.length))
                            message.replyList = [];
                        message.replyList.push($root.gsbase.ReplyDismissNot.ReplyInfo.decode(reader, reader.uint32()));
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
         * Decodes a ReplyDismissNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.ReplyDismissNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.ReplyDismissNot} ReplyDismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyDismissNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplyDismissNot message.
         * @function verify
         * @memberof gsbase.ReplyDismissNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplyDismissNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            if (message.reply != null && message.hasOwnProperty("reply"))
                if (typeof message.reply !== "boolean")
                    return "reply: boolean expected";
            if (message.replyList != null && message.hasOwnProperty("replyList")) {
                if (!Array.isArray(message.replyList))
                    return "replyList: array expected";
                for (var i = 0; i < message.replyList.length; ++i) {
                    var error = $root.gsbase.ReplyDismissNot.ReplyInfo.verify(message.replyList[i]);
                    if (error)
                        return "replyList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ReplyDismissNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.ReplyDismissNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.ReplyDismissNot} ReplyDismissNot
         */
        ReplyDismissNot.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.ReplyDismissNot)
                return object;
            var message = new $root.gsbase.ReplyDismissNot();
            if (object.openid != null)
                message.openid = String(object.openid);
            if (object.reply != null)
                message.reply = Boolean(object.reply);
            if (object.replyList) {
                if (!Array.isArray(object.replyList))
                    throw TypeError(".gsbase.ReplyDismissNot.replyList: array expected");
                message.replyList = [];
                for (var i = 0; i < object.replyList.length; ++i) {
                    if (typeof object.replyList[i] !== "object")
                        throw TypeError(".gsbase.ReplyDismissNot.replyList: object expected");
                    message.replyList[i] = $root.gsbase.ReplyDismissNot.ReplyInfo.fromObject(object.replyList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ReplyDismissNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.ReplyDismissNot
         * @static
         * @param {gsbase.ReplyDismissNot} message ReplyDismissNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplyDismissNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.replyList = [];
            if (options.defaults) {
                object.openid = "";
                object.reply = false;
            }
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            if (message.reply != null && message.hasOwnProperty("reply"))
                object.reply = message.reply;
            if (message.replyList && message.replyList.length) {
                object.replyList = [];
                for (var j = 0; j < message.replyList.length; ++j)
                    object.replyList[j] = $root.gsbase.ReplyDismissNot.ReplyInfo.toObject(message.replyList[j], options);
            }
            return object;
        };

        /**
         * Converts this ReplyDismissNot to JSON.
         * @function toJSON
         * @memberof gsbase.ReplyDismissNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplyDismissNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplyDismissNot
         * @function getTypeUrl
         * @memberof gsbase.ReplyDismissNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplyDismissNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.ReplyDismissNot";
        };

        ReplyDismissNot.ReplyInfo = (function() {

            /**
             * Properties of a ReplyInfo.
             * @memberof gsbase.ReplyDismissNot
             * @interface IReplyInfo
             * @property {string|null} [openid] ReplyInfo openid
             * @property {boolean|null} [reply] ReplyInfo reply
             * @property {number|Long|null} [opTime] ReplyInfo opTime
             */

            /**
             * Constructs a new ReplyInfo.
             * @memberof gsbase.ReplyDismissNot
             * @classdesc Represents a ReplyInfo.
             * @implements IReplyInfo
             * @constructor
             * @param {gsbase.ReplyDismissNot.IReplyInfo=} [properties] Properties to set
             */
            function ReplyInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReplyInfo openid.
             * @member {string} openid
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.openid = "";

            /**
             * ReplyInfo reply.
             * @member {boolean} reply
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.reply = false;

            /**
             * ReplyInfo opTime.
             * @member {number|Long} opTime
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.opTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ReplyInfo instance using the specified properties.
             * @function create
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @static
             * @param {gsbase.ReplyDismissNot.IReplyInfo=} [properties] Properties to set
             * @returns {gsbase.ReplyDismissNot.ReplyInfo} ReplyInfo instance
             */
            ReplyInfo.create = function create(properties) {
                return new ReplyInfo(properties);
            };

            /**
             * Encodes the specified ReplyInfo message. Does not implicitly {@link gsbase.ReplyDismissNot.ReplyInfo.verify|verify} messages.
             * @function encode
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @static
             * @param {gsbase.ReplyDismissNot.IReplyInfo} message ReplyInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReplyInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
                if (message.reply != null && Object.hasOwnProperty.call(message, "reply"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.reply);
                if (message.opTime != null && Object.hasOwnProperty.call(message, "opTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.opTime);
                return writer;
            };

            /**
             * Encodes the specified ReplyInfo message, length delimited. Does not implicitly {@link gsbase.ReplyDismissNot.ReplyInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @static
             * @param {gsbase.ReplyDismissNot.IReplyInfo} message ReplyInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReplyInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReplyInfo message from the specified reader or buffer.
             * @function decode
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gsbase.ReplyDismissNot.ReplyInfo} ReplyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReplyInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.ReplyDismissNot.ReplyInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.openid = reader.string();
                            break;
                        }
                    case 2: {
                            message.reply = reader.bool();
                            break;
                        }
                    case 3: {
                            message.opTime = reader.int64();
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
             * Decodes a ReplyInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gsbase.ReplyDismissNot.ReplyInfo} ReplyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReplyInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReplyInfo message.
             * @function verify
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReplyInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.openid != null && message.hasOwnProperty("openid"))
                    if (!$util.isString(message.openid))
                        return "openid: string expected";
                if (message.reply != null && message.hasOwnProperty("reply"))
                    if (typeof message.reply !== "boolean")
                        return "reply: boolean expected";
                if (message.opTime != null && message.hasOwnProperty("opTime"))
                    if (!$util.isInteger(message.opTime) && !(message.opTime && $util.isInteger(message.opTime.low) && $util.isInteger(message.opTime.high)))
                        return "opTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a ReplyInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gsbase.ReplyDismissNot.ReplyInfo} ReplyInfo
             */
            ReplyInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.gsbase.ReplyDismissNot.ReplyInfo)
                    return object;
                var message = new $root.gsbase.ReplyDismissNot.ReplyInfo();
                if (object.openid != null)
                    message.openid = String(object.openid);
                if (object.reply != null)
                    message.reply = Boolean(object.reply);
                if (object.opTime != null)
                    if ($util.Long)
                        (message.opTime = $util.Long.fromValue(object.opTime)).unsigned = false;
                    else if (typeof object.opTime === "string")
                        message.opTime = parseInt(object.opTime, 10);
                    else if (typeof object.opTime === "number")
                        message.opTime = object.opTime;
                    else if (typeof object.opTime === "object")
                        message.opTime = new $util.LongBits(object.opTime.low >>> 0, object.opTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a ReplyInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @static
             * @param {gsbase.ReplyDismissNot.ReplyInfo} message ReplyInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReplyInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.openid = "";
                    object.reply = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.opTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.opTime = options.longs === String ? "0" : 0;
                }
                if (message.openid != null && message.hasOwnProperty("openid"))
                    object.openid = message.openid;
                if (message.reply != null && message.hasOwnProperty("reply"))
                    object.reply = message.reply;
                if (message.opTime != null && message.hasOwnProperty("opTime"))
                    if (typeof message.opTime === "number")
                        object.opTime = options.longs === String ? String(message.opTime) : message.opTime;
                    else
                        object.opTime = options.longs === String ? $util.Long.prototype.toString.call(message.opTime) : options.longs === Number ? new $util.LongBits(message.opTime.low >>> 0, message.opTime.high >>> 0).toNumber() : message.opTime;
                return object;
            };

            /**
             * Converts this ReplyInfo to JSON.
             * @function toJSON
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReplyInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReplyInfo
             * @function getTypeUrl
             * @memberof gsbase.ReplyDismissNot.ReplyInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReplyInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/gsbase.ReplyDismissNot.ReplyInfo";
            };

            return ReplyInfo;
        })();

        return ReplyDismissNot;
    })();

    gsbase.KickOutReq = (function() {

        /**
         * Properties of a KickOutReq.
         * @memberof gsbase
         * @interface IKickOutReq
         * @property {string|null} [openid] KickOutReq openid
         * @property {string|null} [roomId] KickOutReq roomId
         * @property {string|null} [operator] KickOutReq operator
         */

        /**
         * Constructs a new KickOutReq.
         * @memberof gsbase
         * @classdesc Represents a KickOutReq.
         * @implements IKickOutReq
         * @constructor
         * @param {gsbase.IKickOutReq=} [properties] Properties to set
         */
        function KickOutReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickOutReq openid.
         * @member {string} openid
         * @memberof gsbase.KickOutReq
         * @instance
         */
        KickOutReq.prototype.openid = "";

        /**
         * KickOutReq roomId.
         * @member {string} roomId
         * @memberof gsbase.KickOutReq
         * @instance
         */
        KickOutReq.prototype.roomId = "";

        /**
         * KickOutReq operator.
         * @member {string} operator
         * @memberof gsbase.KickOutReq
         * @instance
         */
        KickOutReq.prototype.operator = "";

        /**
         * Creates a new KickOutReq instance using the specified properties.
         * @function create
         * @memberof gsbase.KickOutReq
         * @static
         * @param {gsbase.IKickOutReq=} [properties] Properties to set
         * @returns {gsbase.KickOutReq} KickOutReq instance
         */
        KickOutReq.create = function create(properties) {
            return new KickOutReq(properties);
        };

        /**
         * Encodes the specified KickOutReq message. Does not implicitly {@link gsbase.KickOutReq.verify|verify} messages.
         * @function encode
         * @memberof gsbase.KickOutReq
         * @static
         * @param {gsbase.IKickOutReq} message KickOutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
            if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.operator);
            return writer;
        };

        /**
         * Encodes the specified KickOutReq message, length delimited. Does not implicitly {@link gsbase.KickOutReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.KickOutReq
         * @static
         * @param {gsbase.IKickOutReq} message KickOutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickOutReq message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.KickOutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.KickOutReq} KickOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.KickOutReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.openid = reader.string();
                        break;
                    }
                case 2: {
                        message.roomId = reader.string();
                        break;
                    }
                case 3: {
                        message.operator = reader.string();
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
         * Decodes a KickOutReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.KickOutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.KickOutReq} KickOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickOutReq message.
         * @function verify
         * @memberof gsbase.KickOutReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickOutReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.operator != null && message.hasOwnProperty("operator"))
                if (!$util.isString(message.operator))
                    return "operator: string expected";
            return null;
        };

        /**
         * Creates a KickOutReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.KickOutReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.KickOutReq} KickOutReq
         */
        KickOutReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.KickOutReq)
                return object;
            var message = new $root.gsbase.KickOutReq();
            if (object.openid != null)
                message.openid = String(object.openid);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.operator != null)
                message.operator = String(object.operator);
            return message;
        };

        /**
         * Creates a plain object from a KickOutReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.KickOutReq
         * @static
         * @param {gsbase.KickOutReq} message KickOutReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickOutReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.openid = "";
                object.roomId = "";
                object.operator = "";
            }
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.operator != null && message.hasOwnProperty("operator"))
                object.operator = message.operator;
            return object;
        };

        /**
         * Converts this KickOutReq to JSON.
         * @function toJSON
         * @memberof gsbase.KickOutReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickOutReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KickOutReq
         * @function getTypeUrl
         * @memberof gsbase.KickOutReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KickOutReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.KickOutReq";
        };

        return KickOutReq;
    })();

    gsbase.KickOutRsp = (function() {

        /**
         * Properties of a KickOutRsp.
         * @memberof gsbase
         * @interface IKickOutRsp
         * @property {string|null} [err] KickOutRsp err
         */

        /**
         * Constructs a new KickOutRsp.
         * @memberof gsbase
         * @classdesc Represents a KickOutRsp.
         * @implements IKickOutRsp
         * @constructor
         * @param {gsbase.IKickOutRsp=} [properties] Properties to set
         */
        function KickOutRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickOutRsp err.
         * @member {string} err
         * @memberof gsbase.KickOutRsp
         * @instance
         */
        KickOutRsp.prototype.err = "";

        /**
         * Creates a new KickOutRsp instance using the specified properties.
         * @function create
         * @memberof gsbase.KickOutRsp
         * @static
         * @param {gsbase.IKickOutRsp=} [properties] Properties to set
         * @returns {gsbase.KickOutRsp} KickOutRsp instance
         */
        KickOutRsp.create = function create(properties) {
            return new KickOutRsp(properties);
        };

        /**
         * Encodes the specified KickOutRsp message. Does not implicitly {@link gsbase.KickOutRsp.verify|verify} messages.
         * @function encode
         * @memberof gsbase.KickOutRsp
         * @static
         * @param {gsbase.IKickOutRsp} message KickOutRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified KickOutRsp message, length delimited. Does not implicitly {@link gsbase.KickOutRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gsbase.KickOutRsp
         * @static
         * @param {gsbase.IKickOutRsp} message KickOutRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickOutRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gsbase.KickOutRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gsbase.KickOutRsp} KickOutRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gsbase.KickOutRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
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
         * Decodes a KickOutRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gsbase.KickOutRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gsbase.KickOutRsp} KickOutRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickOutRsp message.
         * @function verify
         * @memberof gsbase.KickOutRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickOutRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates a KickOutRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gsbase.KickOutRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gsbase.KickOutRsp} KickOutRsp
         */
        KickOutRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.gsbase.KickOutRsp)
                return object;
            var message = new $root.gsbase.KickOutRsp();
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from a KickOutRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gsbase.KickOutRsp
         * @static
         * @param {gsbase.KickOutRsp} message KickOutRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickOutRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = "";
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this KickOutRsp to JSON.
         * @function toJSON
         * @memberof gsbase.KickOutRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickOutRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KickOutRsp
         * @function getTypeUrl
         * @memberof gsbase.KickOutRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KickOutRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gsbase.KickOutRsp";
        };

        return KickOutRsp;
    })();

    return gsbase;
})();

$root.mahjong = (function() {

    /**
     * Namespace mahjong.
     * @exports mahjong
     * @namespace
     */
    var mahjong = {};

    mahjong.Table = (function() {

        /**
         * Constructs a new Table service.
         * @memberof mahjong
         * @classdesc Represents a Table
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Table(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Table.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Table;

        /**
         * Creates new Table service using the specified rpc implementation.
         * @function create
         * @memberof mahjong.Table
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Table} RPC service. Useful where requests and/or responses are streamed.
         */
        Table.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link mahjong.Table#ready}.
         * @memberof mahjong.Table
         * @typedef ReadyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mahjong.Empty} [response] Empty
         */

        /**
         * Calls Ready.
         * @function ready
         * @memberof mahjong.Table
         * @instance
         * @param {mahjong.IReadyReq} request ReadyReq message or plain object
         * @param {mahjong.Table.ReadyCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Table.prototype.ready = function ready(request, callback) {
            return this.rpcCall(ready, $root.mahjong.ReadyReq, $root.mahjong.Empty, request, callback);
        }, "name", { value: "Ready" });

        /**
         * Calls Ready.
         * @function ready
         * @memberof mahjong.Table
         * @instance
         * @param {mahjong.IReadyReq} request ReadyReq message or plain object
         * @returns {Promise<mahjong.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link mahjong.Table#startGame}.
         * @memberof mahjong.Table
         * @typedef StartGameCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {mahjong.Empty} [response] Empty
         */

        /**
         * Calls StartGame.
         * @function startGame
         * @memberof mahjong.Table
         * @instance
         * @param {mahjong.IStartGameReq} request StartGameReq message or plain object
         * @param {mahjong.Table.StartGameCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Table.prototype.startGame = function startGame(request, callback) {
            return this.rpcCall(startGame, $root.mahjong.StartGameReq, $root.mahjong.Empty, request, callback);
        }, "name", { value: "StartGame" });

        /**
         * Calls StartGame.
         * @function startGame
         * @memberof mahjong.Table
         * @instance
         * @param {mahjong.IStartGameReq} request StartGameReq message or plain object
         * @returns {Promise<mahjong.Empty>} Promise
         * @variation 2
         */

        return Table;
    })();

    mahjong.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof mahjong
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof mahjong
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {mahjong.IEmpty=} [properties] Properties to set
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
         * @memberof mahjong.Empty
         * @static
         * @param {mahjong.IEmpty=} [properties] Properties to set
         * @returns {mahjong.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link mahjong.Empty.verify|verify} messages.
         * @function encode
         * @memberof mahjong.Empty
         * @static
         * @param {mahjong.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link mahjong.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.Empty
         * @static
         * @param {mahjong.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.Empty();
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
         * @memberof mahjong.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.Empty} Empty
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
         * @memberof mahjong.Empty
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
         * @memberof mahjong.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.Empty)
                return object;
            return new $root.mahjong.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.Empty
         * @static
         * @param {mahjong.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof mahjong.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof mahjong.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.Empty";
        };

        return Empty;
    })();

    mahjong.ReadyReq = (function() {

        /**
         * Properties of a ReadyReq.
         * @memberof mahjong
         * @interface IReadyReq
         * @property {boolean|null} [isReady] ReadyReq isReady
         */

        /**
         * Constructs a new ReadyReq.
         * @memberof mahjong
         * @classdesc Represents a ReadyReq.
         * @implements IReadyReq
         * @constructor
         * @param {mahjong.IReadyReq=} [properties] Properties to set
         */
        function ReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyReq isReady.
         * @member {boolean} isReady
         * @memberof mahjong.ReadyReq
         * @instance
         */
        ReadyReq.prototype.isReady = false;

        /**
         * Creates a new ReadyReq instance using the specified properties.
         * @function create
         * @memberof mahjong.ReadyReq
         * @static
         * @param {mahjong.IReadyReq=} [properties] Properties to set
         * @returns {mahjong.ReadyReq} ReadyReq instance
         */
        ReadyReq.create = function create(properties) {
            return new ReadyReq(properties);
        };

        /**
         * Encodes the specified ReadyReq message. Does not implicitly {@link mahjong.ReadyReq.verify|verify} messages.
         * @function encode
         * @memberof mahjong.ReadyReq
         * @static
         * @param {mahjong.IReadyReq} message ReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isReady != null && Object.hasOwnProperty.call(message, "isReady"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isReady);
            return writer;
        };

        /**
         * Encodes the specified ReadyReq message, length delimited. Does not implicitly {@link mahjong.ReadyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.ReadyReq
         * @static
         * @param {mahjong.IReadyReq} message ReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyReq message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.ReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.ReadyReq} ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.ReadyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.isReady = reader.bool();
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
         * Decodes a ReadyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.ReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.ReadyReq} ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyReq message.
         * @function verify
         * @memberof mahjong.ReadyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                if (typeof message.isReady !== "boolean")
                    return "isReady: boolean expected";
            return null;
        };

        /**
         * Creates a ReadyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.ReadyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.ReadyReq} ReadyReq
         */
        ReadyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.ReadyReq)
                return object;
            var message = new $root.mahjong.ReadyReq();
            if (object.isReady != null)
                message.isReady = Boolean(object.isReady);
            return message;
        };

        /**
         * Creates a plain object from a ReadyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.ReadyReq
         * @static
         * @param {mahjong.ReadyReq} message ReadyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.isReady = false;
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                object.isReady = message.isReady;
            return object;
        };

        /**
         * Converts this ReadyReq to JSON.
         * @function toJSON
         * @memberof mahjong.ReadyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadyReq
         * @function getTypeUrl
         * @memberof mahjong.ReadyReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadyReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.ReadyReq";
        };

        return ReadyReq;
    })();

    mahjong.ReadyRsp = (function() {

        /**
         * Properties of a ReadyRsp.
         * @memberof mahjong
         * @interface IReadyRsp
         * @property {string|null} [err] ReadyRsp err
         */

        /**
         * Constructs a new ReadyRsp.
         * @memberof mahjong
         * @classdesc Represents a ReadyRsp.
         * @implements IReadyRsp
         * @constructor
         * @param {mahjong.IReadyRsp=} [properties] Properties to set
         */
        function ReadyRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyRsp err.
         * @member {string} err
         * @memberof mahjong.ReadyRsp
         * @instance
         */
        ReadyRsp.prototype.err = "";

        /**
         * Creates a new ReadyRsp instance using the specified properties.
         * @function create
         * @memberof mahjong.ReadyRsp
         * @static
         * @param {mahjong.IReadyRsp=} [properties] Properties to set
         * @returns {mahjong.ReadyRsp} ReadyRsp instance
         */
        ReadyRsp.create = function create(properties) {
            return new ReadyRsp(properties);
        };

        /**
         * Encodes the specified ReadyRsp message. Does not implicitly {@link mahjong.ReadyRsp.verify|verify} messages.
         * @function encode
         * @memberof mahjong.ReadyRsp
         * @static
         * @param {mahjong.IReadyRsp} message ReadyRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified ReadyRsp message, length delimited. Does not implicitly {@link mahjong.ReadyRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.ReadyRsp
         * @static
         * @param {mahjong.IReadyRsp} message ReadyRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyRsp message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.ReadyRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.ReadyRsp} ReadyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.ReadyRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
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
         * Decodes a ReadyRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.ReadyRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.ReadyRsp} ReadyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyRsp message.
         * @function verify
         * @memberof mahjong.ReadyRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates a ReadyRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.ReadyRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.ReadyRsp} ReadyRsp
         */
        ReadyRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.ReadyRsp)
                return object;
            var message = new $root.mahjong.ReadyRsp();
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from a ReadyRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.ReadyRsp
         * @static
         * @param {mahjong.ReadyRsp} message ReadyRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = "";
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this ReadyRsp to JSON.
         * @function toJSON
         * @memberof mahjong.ReadyRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadyRsp
         * @function getTypeUrl
         * @memberof mahjong.ReadyRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadyRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.ReadyRsp";
        };

        return ReadyRsp;
    })();

    mahjong.ReadyNot = (function() {

        /**
         * Properties of a ReadyNot.
         * @memberof mahjong
         * @interface IReadyNot
         * @property {string|null} [uid] ReadyNot uid
         * @property {boolean|null} [isReady] ReadyNot isReady
         */

        /**
         * Constructs a new ReadyNot.
         * @memberof mahjong
         * @classdesc Represents a ReadyNot.
         * @implements IReadyNot
         * @constructor
         * @param {mahjong.IReadyNot=} [properties] Properties to set
         */
        function ReadyNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyNot uid.
         * @member {string} uid
         * @memberof mahjong.ReadyNot
         * @instance
         */
        ReadyNot.prototype.uid = "";

        /**
         * ReadyNot isReady.
         * @member {boolean} isReady
         * @memberof mahjong.ReadyNot
         * @instance
         */
        ReadyNot.prototype.isReady = false;

        /**
         * Creates a new ReadyNot instance using the specified properties.
         * @function create
         * @memberof mahjong.ReadyNot
         * @static
         * @param {mahjong.IReadyNot=} [properties] Properties to set
         * @returns {mahjong.ReadyNot} ReadyNot instance
         */
        ReadyNot.create = function create(properties) {
            return new ReadyNot(properties);
        };

        /**
         * Encodes the specified ReadyNot message. Does not implicitly {@link mahjong.ReadyNot.verify|verify} messages.
         * @function encode
         * @memberof mahjong.ReadyNot
         * @static
         * @param {mahjong.IReadyNot} message ReadyNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.isReady != null && Object.hasOwnProperty.call(message, "isReady"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReady);
            return writer;
        };

        /**
         * Encodes the specified ReadyNot message, length delimited. Does not implicitly {@link mahjong.ReadyNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.ReadyNot
         * @static
         * @param {mahjong.IReadyNot} message ReadyNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyNot message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.ReadyNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.ReadyNot} ReadyNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.ReadyNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.isReady = reader.bool();
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
         * Decodes a ReadyNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.ReadyNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.ReadyNot} ReadyNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyNot message.
         * @function verify
         * @memberof mahjong.ReadyNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                if (typeof message.isReady !== "boolean")
                    return "isReady: boolean expected";
            return null;
        };

        /**
         * Creates a ReadyNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.ReadyNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.ReadyNot} ReadyNot
         */
        ReadyNot.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.ReadyNot)
                return object;
            var message = new $root.mahjong.ReadyNot();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.isReady != null)
                message.isReady = Boolean(object.isReady);
            return message;
        };

        /**
         * Creates a plain object from a ReadyNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.ReadyNot
         * @static
         * @param {mahjong.ReadyNot} message ReadyNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.isReady = false;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                object.isReady = message.isReady;
            return object;
        };

        /**
         * Converts this ReadyNot to JSON.
         * @function toJSON
         * @memberof mahjong.ReadyNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadyNot
         * @function getTypeUrl
         * @memberof mahjong.ReadyNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadyNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.ReadyNot";
        };

        return ReadyNot;
    })();

    mahjong.RoundStartNot = (function() {

        /**
         * Properties of a RoundStartNot.
         * @memberof mahjong
         * @interface IRoundStartNot
         * @property {string|null} [roundId] RoundStartNot roundId
         * @property {number|null} [curRound] RoundStartNot curRound
         * @property {number|Long|null} [startTime] RoundStartNot startTime
         */

        /**
         * Constructs a new RoundStartNot.
         * @memberof mahjong
         * @classdesc Represents a RoundStartNot.
         * @implements IRoundStartNot
         * @constructor
         * @param {mahjong.IRoundStartNot=} [properties] Properties to set
         */
        function RoundStartNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundStartNot roundId.
         * @member {string} roundId
         * @memberof mahjong.RoundStartNot
         * @instance
         */
        RoundStartNot.prototype.roundId = "";

        /**
         * RoundStartNot curRound.
         * @member {number} curRound
         * @memberof mahjong.RoundStartNot
         * @instance
         */
        RoundStartNot.prototype.curRound = 0;

        /**
         * RoundStartNot startTime.
         * @member {number|Long} startTime
         * @memberof mahjong.RoundStartNot
         * @instance
         */
        RoundStartNot.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RoundStartNot instance using the specified properties.
         * @function create
         * @memberof mahjong.RoundStartNot
         * @static
         * @param {mahjong.IRoundStartNot=} [properties] Properties to set
         * @returns {mahjong.RoundStartNot} RoundStartNot instance
         */
        RoundStartNot.create = function create(properties) {
            return new RoundStartNot(properties);
        };

        /**
         * Encodes the specified RoundStartNot message. Does not implicitly {@link mahjong.RoundStartNot.verify|verify} messages.
         * @function encode
         * @memberof mahjong.RoundStartNot
         * @static
         * @param {mahjong.IRoundStartNot} message RoundStartNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roundId != null && Object.hasOwnProperty.call(message, "roundId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roundId);
            if (message.curRound != null && Object.hasOwnProperty.call(message, "curRound"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.curRound);
            if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.startTime);
            return writer;
        };

        /**
         * Encodes the specified RoundStartNot message, length delimited. Does not implicitly {@link mahjong.RoundStartNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.RoundStartNot
         * @static
         * @param {mahjong.IRoundStartNot} message RoundStartNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundStartNot message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.RoundStartNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.RoundStartNot} RoundStartNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.RoundStartNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roundId = reader.string();
                        break;
                    }
                case 2: {
                        message.curRound = reader.int32();
                        break;
                    }
                case 3: {
                        message.startTime = reader.int64();
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
         * Decodes a RoundStartNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.RoundStartNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.RoundStartNot} RoundStartNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundStartNot message.
         * @function verify
         * @memberof mahjong.RoundStartNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundStartNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                if (!$util.isString(message.roundId))
                    return "roundId: string expected";
            if (message.curRound != null && message.hasOwnProperty("curRound"))
                if (!$util.isInteger(message.curRound))
                    return "curRound: integer expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                    return "startTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a RoundStartNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.RoundStartNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.RoundStartNot} RoundStartNot
         */
        RoundStartNot.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.RoundStartNot)
                return object;
            var message = new $root.mahjong.RoundStartNot();
            if (object.roundId != null)
                message.roundId = String(object.roundId);
            if (object.curRound != null)
                message.curRound = object.curRound | 0;
            if (object.startTime != null)
                if ($util.Long)
                    (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = false;
                else if (typeof object.startTime === "string")
                    message.startTime = parseInt(object.startTime, 10);
                else if (typeof object.startTime === "number")
                    message.startTime = object.startTime;
                else if (typeof object.startTime === "object")
                    message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RoundStartNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.RoundStartNot
         * @static
         * @param {mahjong.RoundStartNot} message RoundStartNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundStartNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roundId = "";
                object.curRound = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTime = options.longs === String ? "0" : 0;
            }
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                object.roundId = message.roundId;
            if (message.curRound != null && message.hasOwnProperty("curRound"))
                object.curRound = message.curRound;
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (typeof message.startTime === "number")
                    object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                else
                    object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber() : message.startTime;
            return object;
        };

        /**
         * Converts this RoundStartNot to JSON.
         * @function toJSON
         * @memberof mahjong.RoundStartNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundStartNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoundStartNot
         * @function getTypeUrl
         * @memberof mahjong.RoundStartNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoundStartNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.RoundStartNot";
        };

        return RoundStartNot;
    })();

    mahjong.RoundEndNot = (function() {

        /**
         * Properties of a RoundEndNot.
         * @memberof mahjong
         * @interface IRoundEndNot
         * @property {string|null} [roundId] RoundEndNot roundId
         * @property {number|null} [curRound] RoundEndNot curRound
         * @property {number|Long|null} [endTime] RoundEndNot endTime
         */

        /**
         * Constructs a new RoundEndNot.
         * @memberof mahjong
         * @classdesc Represents a RoundEndNot.
         * @implements IRoundEndNot
         * @constructor
         * @param {mahjong.IRoundEndNot=} [properties] Properties to set
         */
        function RoundEndNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundEndNot roundId.
         * @member {string} roundId
         * @memberof mahjong.RoundEndNot
         * @instance
         */
        RoundEndNot.prototype.roundId = "";

        /**
         * RoundEndNot curRound.
         * @member {number} curRound
         * @memberof mahjong.RoundEndNot
         * @instance
         */
        RoundEndNot.prototype.curRound = 0;

        /**
         * RoundEndNot endTime.
         * @member {number|Long} endTime
         * @memberof mahjong.RoundEndNot
         * @instance
         */
        RoundEndNot.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RoundEndNot instance using the specified properties.
         * @function create
         * @memberof mahjong.RoundEndNot
         * @static
         * @param {mahjong.IRoundEndNot=} [properties] Properties to set
         * @returns {mahjong.RoundEndNot} RoundEndNot instance
         */
        RoundEndNot.create = function create(properties) {
            return new RoundEndNot(properties);
        };

        /**
         * Encodes the specified RoundEndNot message. Does not implicitly {@link mahjong.RoundEndNot.verify|verify} messages.
         * @function encode
         * @memberof mahjong.RoundEndNot
         * @static
         * @param {mahjong.IRoundEndNot} message RoundEndNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundEndNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roundId != null && Object.hasOwnProperty.call(message, "roundId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roundId);
            if (message.curRound != null && Object.hasOwnProperty.call(message, "curRound"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.curRound);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.endTime);
            return writer;
        };

        /**
         * Encodes the specified RoundEndNot message, length delimited. Does not implicitly {@link mahjong.RoundEndNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.RoundEndNot
         * @static
         * @param {mahjong.IRoundEndNot} message RoundEndNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundEndNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundEndNot message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.RoundEndNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.RoundEndNot} RoundEndNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundEndNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.RoundEndNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roundId = reader.string();
                        break;
                    }
                case 2: {
                        message.curRound = reader.int32();
                        break;
                    }
                case 3: {
                        message.endTime = reader.int64();
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
         * Decodes a RoundEndNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.RoundEndNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.RoundEndNot} RoundEndNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundEndNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundEndNot message.
         * @function verify
         * @memberof mahjong.RoundEndNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundEndNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                if (!$util.isString(message.roundId))
                    return "roundId: string expected";
            if (message.curRound != null && message.hasOwnProperty("curRound"))
                if (!$util.isInteger(message.curRound))
                    return "curRound: integer expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                    return "endTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a RoundEndNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.RoundEndNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.RoundEndNot} RoundEndNot
         */
        RoundEndNot.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.RoundEndNot)
                return object;
            var message = new $root.mahjong.RoundEndNot();
            if (object.roundId != null)
                message.roundId = String(object.roundId);
            if (object.curRound != null)
                message.curRound = object.curRound | 0;
            if (object.endTime != null)
                if ($util.Long)
                    (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = false;
                else if (typeof object.endTime === "string")
                    message.endTime = parseInt(object.endTime, 10);
                else if (typeof object.endTime === "number")
                    message.endTime = object.endTime;
                else if (typeof object.endTime === "object")
                    message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RoundEndNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.RoundEndNot
         * @static
         * @param {mahjong.RoundEndNot} message RoundEndNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundEndNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roundId = "";
                object.curRound = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endTime = options.longs === String ? "0" : 0;
            }
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                object.roundId = message.roundId;
            if (message.curRound != null && message.hasOwnProperty("curRound"))
                object.curRound = message.curRound;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (typeof message.endTime === "number")
                    object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                else
                    object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber() : message.endTime;
            return object;
        };

        /**
         * Converts this RoundEndNot to JSON.
         * @function toJSON
         * @memberof mahjong.RoundEndNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundEndNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoundEndNot
         * @function getTypeUrl
         * @memberof mahjong.RoundEndNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoundEndNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.RoundEndNot";
        };

        return RoundEndNot;
    })();

    mahjong.EnterRoomNot = (function() {

        /**
         * Properties of an EnterRoomNot.
         * @memberof mahjong
         * @interface IEnterRoomNot
         * @property {string|null} [roomId] EnterRoomNot roomId
         * @property {string|null} [uid] EnterRoomNot uid
         * @property {string|null} [nickname] EnterRoomNot nickname
         * @property {number|Long|null} [money] EnterRoomNot money
         * @property {number|null} [type] EnterRoomNot type
         * @property {number|null} [chairId] EnterRoomNot chairId
         */

        /**
         * Constructs a new EnterRoomNot.
         * @memberof mahjong
         * @classdesc Represents an EnterRoomNot.
         * @implements IEnterRoomNot
         * @constructor
         * @param {mahjong.IEnterRoomNot=} [properties] Properties to set
         */
        function EnterRoomNot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomNot roomId.
         * @member {string} roomId
         * @memberof mahjong.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.roomId = "";

        /**
         * EnterRoomNot uid.
         * @member {string} uid
         * @memberof mahjong.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.uid = "";

        /**
         * EnterRoomNot nickname.
         * @member {string} nickname
         * @memberof mahjong.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.nickname = "";

        /**
         * EnterRoomNot money.
         * @member {number|Long} money
         * @memberof mahjong.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EnterRoomNot type.
         * @member {number} type
         * @memberof mahjong.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.type = 0;

        /**
         * EnterRoomNot chairId.
         * @member {number} chairId
         * @memberof mahjong.EnterRoomNot
         * @instance
         */
        EnterRoomNot.prototype.chairId = 0;

        /**
         * Creates a new EnterRoomNot instance using the specified properties.
         * @function create
         * @memberof mahjong.EnterRoomNot
         * @static
         * @param {mahjong.IEnterRoomNot=} [properties] Properties to set
         * @returns {mahjong.EnterRoomNot} EnterRoomNot instance
         */
        EnterRoomNot.create = function create(properties) {
            return new EnterRoomNot(properties);
        };

        /**
         * Encodes the specified EnterRoomNot message. Does not implicitly {@link mahjong.EnterRoomNot.verify|verify} messages.
         * @function encode
         * @memberof mahjong.EnterRoomNot
         * @static
         * @param {mahjong.IEnterRoomNot} message EnterRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.money != null && Object.hasOwnProperty.call(message, "money"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.money);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
            if (message.chairId != null && Object.hasOwnProperty.call(message, "chairId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.chairId);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomNot message, length delimited. Does not implicitly {@link mahjong.EnterRoomNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.EnterRoomNot
         * @static
         * @param {mahjong.IEnterRoomNot} message EnterRoomNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomNot message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.EnterRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.EnterRoomNot} EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.EnterRoomNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.string();
                        break;
                    }
                case 3: {
                        message.nickname = reader.string();
                        break;
                    }
                case 4: {
                        message.money = reader.int64();
                        break;
                    }
                case 5: {
                        message.type = reader.int32();
                        break;
                    }
                case 6: {
                        message.chairId = reader.int32();
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
         * Decodes an EnterRoomNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.EnterRoomNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.EnterRoomNot} EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomNot message.
         * @function verify
         * @memberof mahjong.EnterRoomNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
                    return "money: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                if (!$util.isInteger(message.chairId))
                    return "chairId: integer expected";
            return null;
        };

        /**
         * Creates an EnterRoomNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.EnterRoomNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.EnterRoomNot} EnterRoomNot
         */
        EnterRoomNot.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.EnterRoomNot)
                return object;
            var message = new $root.mahjong.EnterRoomNot();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.money != null)
                if ($util.Long)
                    (message.money = $util.Long.fromValue(object.money)).unsigned = false;
                else if (typeof object.money === "string")
                    message.money = parseInt(object.money, 10);
                else if (typeof object.money === "number")
                    message.money = object.money;
                else if (typeof object.money === "object")
                    message.money = new $util.LongBits(object.money.low >>> 0, object.money.high >>> 0).toNumber();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.chairId != null)
                message.chairId = object.chairId | 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.EnterRoomNot
         * @static
         * @param {mahjong.EnterRoomNot} message EnterRoomNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = "";
                object.uid = "";
                object.nickname = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.money = options.longs === String ? "0" : 0;
                object.type = 0;
                object.chairId = 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.money != null && message.hasOwnProperty("money"))
                if (typeof message.money === "number")
                    object.money = options.longs === String ? String(message.money) : message.money;
                else
                    object.money = options.longs === String ? $util.Long.prototype.toString.call(message.money) : options.longs === Number ? new $util.LongBits(message.money.low >>> 0, message.money.high >>> 0).toNumber() : message.money;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.chairId != null && message.hasOwnProperty("chairId"))
                object.chairId = message.chairId;
            return object;
        };

        /**
         * Converts this EnterRoomNot to JSON.
         * @function toJSON
         * @memberof mahjong.EnterRoomNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnterRoomNot
         * @function getTypeUrl
         * @memberof mahjong.EnterRoomNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterRoomNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.EnterRoomNot";
        };

        return EnterRoomNot;
    })();

    mahjong.RoundSettleNot = (function() {

        /**
         * Properties of a RoundSettleNot.
         * @memberof mahjong
         * @interface IRoundSettleNot
         * @property {number|null} [index] RoundSettleNot index
         * @property {string|null} [gameGid] RoundSettleNot gameGid
         * @property {string|null} [serverId] RoundSettleNot serverId
         * @property {string|null} [matchCid] RoundSettleNot matchCid
         * @property {string|null} [matchId] RoundSettleNot matchId
         * @property {string|null} [roomId] RoundSettleNot roomId
         * @property {string|null} [roundId] RoundSettleNot roundId
         * @property {string|null} [rules] RoundSettleNot rules
         * @property {number|Long|null} [finishedTime] RoundSettleNot finishedTime
         * @property {number|null} [settleItem] RoundSettleNot settleItem
         * @property {number|null} [platAid] RoundSettleNot platAid
         * @property {Array.<mahjong.RoundSettleNot.IPlayerData>|null} [playerList] RoundSettleNot playerList
         * @property {Array.<string>|null} [winners] RoundSettleNot winners
         */

        /**
         * Constructs a new RoundSettleNot.
         * @memberof mahjong
         * @classdesc Represents a RoundSettleNot.
         * @implements IRoundSettleNot
         * @constructor
         * @param {mahjong.IRoundSettleNot=} [properties] Properties to set
         */
        function RoundSettleNot(properties) {
            this.playerList = [];
            this.winners = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundSettleNot index.
         * @member {number} index
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.index = 0;

        /**
         * RoundSettleNot gameGid.
         * @member {string} gameGid
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.gameGid = "";

        /**
         * RoundSettleNot serverId.
         * @member {string} serverId
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.serverId = "";

        /**
         * RoundSettleNot matchCid.
         * @member {string} matchCid
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.matchCid = "";

        /**
         * RoundSettleNot matchId.
         * @member {string} matchId
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.matchId = "";

        /**
         * RoundSettleNot roomId.
         * @member {string} roomId
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.roomId = "";

        /**
         * RoundSettleNot roundId.
         * @member {string} roundId
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.roundId = "";

        /**
         * RoundSettleNot rules.
         * @member {string} rules
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.rules = "";

        /**
         * RoundSettleNot finishedTime.
         * @member {number|Long} finishedTime
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.finishedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoundSettleNot settleItem.
         * @member {number} settleItem
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.settleItem = 0;

        /**
         * RoundSettleNot platAid.
         * @member {number} platAid
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.platAid = 0;

        /**
         * RoundSettleNot playerList.
         * @member {Array.<mahjong.RoundSettleNot.IPlayerData>} playerList
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.playerList = $util.emptyArray;

        /**
         * RoundSettleNot winners.
         * @member {Array.<string>} winners
         * @memberof mahjong.RoundSettleNot
         * @instance
         */
        RoundSettleNot.prototype.winners = $util.emptyArray;

        /**
         * Creates a new RoundSettleNot instance using the specified properties.
         * @function create
         * @memberof mahjong.RoundSettleNot
         * @static
         * @param {mahjong.IRoundSettleNot=} [properties] Properties to set
         * @returns {mahjong.RoundSettleNot} RoundSettleNot instance
         */
        RoundSettleNot.create = function create(properties) {
            return new RoundSettleNot(properties);
        };

        /**
         * Encodes the specified RoundSettleNot message. Does not implicitly {@link mahjong.RoundSettleNot.verify|verify} messages.
         * @function encode
         * @memberof mahjong.RoundSettleNot
         * @static
         * @param {mahjong.IRoundSettleNot} message RoundSettleNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundSettleNot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.gameGid != null && Object.hasOwnProperty.call(message, "gameGid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameGid);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.serverId);
            if (message.matchCid != null && Object.hasOwnProperty.call(message, "matchCid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.matchCid);
            if (message.matchId != null && Object.hasOwnProperty.call(message, "matchId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.matchId);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.roomId);
            if (message.roundId != null && Object.hasOwnProperty.call(message, "roundId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.roundId);
            if (message.rules != null && Object.hasOwnProperty.call(message, "rules"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.rules);
            if (message.finishedTime != null && Object.hasOwnProperty.call(message, "finishedTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.finishedTime);
            if (message.settleItem != null && Object.hasOwnProperty.call(message, "settleItem"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.settleItem);
            if (message.platAid != null && Object.hasOwnProperty.call(message, "platAid"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.platAid);
            if (message.playerList != null && message.playerList.length)
                for (var i = 0; i < message.playerList.length; ++i)
                    $root.mahjong.RoundSettleNot.PlayerData.encode(message.playerList[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.winners != null && message.winners.length)
                for (var i = 0; i < message.winners.length; ++i)
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.winners[i]);
            return writer;
        };

        /**
         * Encodes the specified RoundSettleNot message, length delimited. Does not implicitly {@link mahjong.RoundSettleNot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.RoundSettleNot
         * @static
         * @param {mahjong.IRoundSettleNot} message RoundSettleNot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundSettleNot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundSettleNot message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.RoundSettleNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.RoundSettleNot} RoundSettleNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundSettleNot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.RoundSettleNot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.index = reader.int32();
                        break;
                    }
                case 2: {
                        message.gameGid = reader.string();
                        break;
                    }
                case 3: {
                        message.serverId = reader.string();
                        break;
                    }
                case 4: {
                        message.matchCid = reader.string();
                        break;
                    }
                case 5: {
                        message.matchId = reader.string();
                        break;
                    }
                case 6: {
                        message.roomId = reader.string();
                        break;
                    }
                case 7: {
                        message.roundId = reader.string();
                        break;
                    }
                case 8: {
                        message.rules = reader.string();
                        break;
                    }
                case 9: {
                        message.finishedTime = reader.int64();
                        break;
                    }
                case 10: {
                        message.settleItem = reader.int32();
                        break;
                    }
                case 11: {
                        message.platAid = reader.int32();
                        break;
                    }
                case 12: {
                        if (!(message.playerList && message.playerList.length))
                            message.playerList = [];
                        message.playerList.push($root.mahjong.RoundSettleNot.PlayerData.decode(reader, reader.uint32()));
                        break;
                    }
                case 13: {
                        if (!(message.winners && message.winners.length))
                            message.winners = [];
                        message.winners.push(reader.string());
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
         * Decodes a RoundSettleNot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.RoundSettleNot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.RoundSettleNot} RoundSettleNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundSettleNot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundSettleNot message.
         * @function verify
         * @memberof mahjong.RoundSettleNot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundSettleNot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                if (!$util.isString(message.gameGid))
                    return "gameGid: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.matchCid != null && message.hasOwnProperty("matchCid"))
                if (!$util.isString(message.matchCid))
                    return "matchCid: string expected";
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isString(message.matchId))
                    return "matchId: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                if (!$util.isString(message.roundId))
                    return "roundId: string expected";
            if (message.rules != null && message.hasOwnProperty("rules"))
                if (!$util.isString(message.rules))
                    return "rules: string expected";
            if (message.finishedTime != null && message.hasOwnProperty("finishedTime"))
                if (!$util.isInteger(message.finishedTime) && !(message.finishedTime && $util.isInteger(message.finishedTime.low) && $util.isInteger(message.finishedTime.high)))
                    return "finishedTime: integer|Long expected";
            if (message.settleItem != null && message.hasOwnProperty("settleItem"))
                if (!$util.isInteger(message.settleItem))
                    return "settleItem: integer expected";
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                if (!$util.isInteger(message.platAid))
                    return "platAid: integer expected";
            if (message.playerList != null && message.hasOwnProperty("playerList")) {
                if (!Array.isArray(message.playerList))
                    return "playerList: array expected";
                for (var i = 0; i < message.playerList.length; ++i) {
                    var error = $root.mahjong.RoundSettleNot.PlayerData.verify(message.playerList[i]);
                    if (error)
                        return "playerList." + error;
                }
            }
            if (message.winners != null && message.hasOwnProperty("winners")) {
                if (!Array.isArray(message.winners))
                    return "winners: array expected";
                for (var i = 0; i < message.winners.length; ++i)
                    if (!$util.isString(message.winners[i]))
                        return "winners: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RoundSettleNot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.RoundSettleNot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.RoundSettleNot} RoundSettleNot
         */
        RoundSettleNot.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.RoundSettleNot)
                return object;
            var message = new $root.mahjong.RoundSettleNot();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.gameGid != null)
                message.gameGid = String(object.gameGid);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.matchCid != null)
                message.matchCid = String(object.matchCid);
            if (object.matchId != null)
                message.matchId = String(object.matchId);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.roundId != null)
                message.roundId = String(object.roundId);
            if (object.rules != null)
                message.rules = String(object.rules);
            if (object.finishedTime != null)
                if ($util.Long)
                    (message.finishedTime = $util.Long.fromValue(object.finishedTime)).unsigned = false;
                else if (typeof object.finishedTime === "string")
                    message.finishedTime = parseInt(object.finishedTime, 10);
                else if (typeof object.finishedTime === "number")
                    message.finishedTime = object.finishedTime;
                else if (typeof object.finishedTime === "object")
                    message.finishedTime = new $util.LongBits(object.finishedTime.low >>> 0, object.finishedTime.high >>> 0).toNumber();
            if (object.settleItem != null)
                message.settleItem = object.settleItem | 0;
            if (object.platAid != null)
                message.platAid = object.platAid | 0;
            if (object.playerList) {
                if (!Array.isArray(object.playerList))
                    throw TypeError(".mahjong.RoundSettleNot.playerList: array expected");
                message.playerList = [];
                for (var i = 0; i < object.playerList.length; ++i) {
                    if (typeof object.playerList[i] !== "object")
                        throw TypeError(".mahjong.RoundSettleNot.playerList: object expected");
                    message.playerList[i] = $root.mahjong.RoundSettleNot.PlayerData.fromObject(object.playerList[i]);
                }
            }
            if (object.winners) {
                if (!Array.isArray(object.winners))
                    throw TypeError(".mahjong.RoundSettleNot.winners: array expected");
                message.winners = [];
                for (var i = 0; i < object.winners.length; ++i)
                    message.winners[i] = String(object.winners[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoundSettleNot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.RoundSettleNot
         * @static
         * @param {mahjong.RoundSettleNot} message RoundSettleNot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundSettleNot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.playerList = [];
                object.winners = [];
            }
            if (options.defaults) {
                object.index = 0;
                object.gameGid = "";
                object.serverId = "";
                object.matchCid = "";
                object.matchId = "";
                object.roomId = "";
                object.roundId = "";
                object.rules = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.finishedTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.finishedTime = options.longs === String ? "0" : 0;
                object.settleItem = 0;
                object.platAid = 0;
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.gameGid != null && message.hasOwnProperty("gameGid"))
                object.gameGid = message.gameGid;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.matchCid != null && message.hasOwnProperty("matchCid"))
                object.matchCid = message.matchCid;
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                object.matchId = message.matchId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                object.roundId = message.roundId;
            if (message.rules != null && message.hasOwnProperty("rules"))
                object.rules = message.rules;
            if (message.finishedTime != null && message.hasOwnProperty("finishedTime"))
                if (typeof message.finishedTime === "number")
                    object.finishedTime = options.longs === String ? String(message.finishedTime) : message.finishedTime;
                else
                    object.finishedTime = options.longs === String ? $util.Long.prototype.toString.call(message.finishedTime) : options.longs === Number ? new $util.LongBits(message.finishedTime.low >>> 0, message.finishedTime.high >>> 0).toNumber() : message.finishedTime;
            if (message.settleItem != null && message.hasOwnProperty("settleItem"))
                object.settleItem = message.settleItem;
            if (message.platAid != null && message.hasOwnProperty("platAid"))
                object.platAid = message.platAid;
            if (message.playerList && message.playerList.length) {
                object.playerList = [];
                for (var j = 0; j < message.playerList.length; ++j)
                    object.playerList[j] = $root.mahjong.RoundSettleNot.PlayerData.toObject(message.playerList[j], options);
            }
            if (message.winners && message.winners.length) {
                object.winners = [];
                for (var j = 0; j < message.winners.length; ++j)
                    object.winners[j] = message.winners[j];
            }
            return object;
        };

        /**
         * Converts this RoundSettleNot to JSON.
         * @function toJSON
         * @memberof mahjong.RoundSettleNot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundSettleNot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoundSettleNot
         * @function getTypeUrl
         * @memberof mahjong.RoundSettleNot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoundSettleNot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.RoundSettleNot";
        };

        RoundSettleNot.PlayerData = (function() {

            /**
             * Properties of a PlayerData.
             * @memberof mahjong.RoundSettleNot
             * @interface IPlayerData
             * @property {string|null} [openid] PlayerData openid
             * @property {string|null} [nickname] PlayerData nickname
             * @property {number|Long|null} [curWinLost] PlayerData curWinLost
             * @property {number|Long|null} [totalWinLost] PlayerData totalWinLost
             */

            /**
             * Constructs a new PlayerData.
             * @memberof mahjong.RoundSettleNot
             * @classdesc Represents a PlayerData.
             * @implements IPlayerData
             * @constructor
             * @param {mahjong.RoundSettleNot.IPlayerData=} [properties] Properties to set
             */
            function PlayerData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerData openid.
             * @member {string} openid
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @instance
             */
            PlayerData.prototype.openid = "";

            /**
             * PlayerData nickname.
             * @member {string} nickname
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @instance
             */
            PlayerData.prototype.nickname = "";

            /**
             * PlayerData curWinLost.
             * @member {number|Long} curWinLost
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @instance
             */
            PlayerData.prototype.curWinLost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PlayerData totalWinLost.
             * @member {number|Long} totalWinLost
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @instance
             */
            PlayerData.prototype.totalWinLost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PlayerData instance using the specified properties.
             * @function create
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @static
             * @param {mahjong.RoundSettleNot.IPlayerData=} [properties] Properties to set
             * @returns {mahjong.RoundSettleNot.PlayerData} PlayerData instance
             */
            PlayerData.create = function create(properties) {
                return new PlayerData(properties);
            };

            /**
             * Encodes the specified PlayerData message. Does not implicitly {@link mahjong.RoundSettleNot.PlayerData.verify|verify} messages.
             * @function encode
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @static
             * @param {mahjong.RoundSettleNot.IPlayerData} message PlayerData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
                if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                if (message.curWinLost != null && Object.hasOwnProperty.call(message, "curWinLost"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.curWinLost);
                if (message.totalWinLost != null && Object.hasOwnProperty.call(message, "totalWinLost"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.totalWinLost);
                return writer;
            };

            /**
             * Encodes the specified PlayerData message, length delimited. Does not implicitly {@link mahjong.RoundSettleNot.PlayerData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @static
             * @param {mahjong.RoundSettleNot.IPlayerData} message PlayerData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerData message from the specified reader or buffer.
             * @function decode
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mahjong.RoundSettleNot.PlayerData} PlayerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.RoundSettleNot.PlayerData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.openid = reader.string();
                            break;
                        }
                    case 2: {
                            message.nickname = reader.string();
                            break;
                        }
                    case 3: {
                            message.curWinLost = reader.int64();
                            break;
                        }
                    case 4: {
                            message.totalWinLost = reader.int64();
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
             * Decodes a PlayerData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mahjong.RoundSettleNot.PlayerData} PlayerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerData message.
             * @function verify
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.openid != null && message.hasOwnProperty("openid"))
                    if (!$util.isString(message.openid))
                        return "openid: string expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.curWinLost != null && message.hasOwnProperty("curWinLost"))
                    if (!$util.isInteger(message.curWinLost) && !(message.curWinLost && $util.isInteger(message.curWinLost.low) && $util.isInteger(message.curWinLost.high)))
                        return "curWinLost: integer|Long expected";
                if (message.totalWinLost != null && message.hasOwnProperty("totalWinLost"))
                    if (!$util.isInteger(message.totalWinLost) && !(message.totalWinLost && $util.isInteger(message.totalWinLost.low) && $util.isInteger(message.totalWinLost.high)))
                        return "totalWinLost: integer|Long expected";
                return null;
            };

            /**
             * Creates a PlayerData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mahjong.RoundSettleNot.PlayerData} PlayerData
             */
            PlayerData.fromObject = function fromObject(object) {
                if (object instanceof $root.mahjong.RoundSettleNot.PlayerData)
                    return object;
                var message = new $root.mahjong.RoundSettleNot.PlayerData();
                if (object.openid != null)
                    message.openid = String(object.openid);
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.curWinLost != null)
                    if ($util.Long)
                        (message.curWinLost = $util.Long.fromValue(object.curWinLost)).unsigned = false;
                    else if (typeof object.curWinLost === "string")
                        message.curWinLost = parseInt(object.curWinLost, 10);
                    else if (typeof object.curWinLost === "number")
                        message.curWinLost = object.curWinLost;
                    else if (typeof object.curWinLost === "object")
                        message.curWinLost = new $util.LongBits(object.curWinLost.low >>> 0, object.curWinLost.high >>> 0).toNumber();
                if (object.totalWinLost != null)
                    if ($util.Long)
                        (message.totalWinLost = $util.Long.fromValue(object.totalWinLost)).unsigned = false;
                    else if (typeof object.totalWinLost === "string")
                        message.totalWinLost = parseInt(object.totalWinLost, 10);
                    else if (typeof object.totalWinLost === "number")
                        message.totalWinLost = object.totalWinLost;
                    else if (typeof object.totalWinLost === "object")
                        message.totalWinLost = new $util.LongBits(object.totalWinLost.low >>> 0, object.totalWinLost.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a PlayerData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @static
             * @param {mahjong.RoundSettleNot.PlayerData} message PlayerData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.openid = "";
                    object.nickname = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.curWinLost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.curWinLost = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.totalWinLost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.totalWinLost = options.longs === String ? "0" : 0;
                }
                if (message.openid != null && message.hasOwnProperty("openid"))
                    object.openid = message.openid;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.curWinLost != null && message.hasOwnProperty("curWinLost"))
                    if (typeof message.curWinLost === "number")
                        object.curWinLost = options.longs === String ? String(message.curWinLost) : message.curWinLost;
                    else
                        object.curWinLost = options.longs === String ? $util.Long.prototype.toString.call(message.curWinLost) : options.longs === Number ? new $util.LongBits(message.curWinLost.low >>> 0, message.curWinLost.high >>> 0).toNumber() : message.curWinLost;
                if (message.totalWinLost != null && message.hasOwnProperty("totalWinLost"))
                    if (typeof message.totalWinLost === "number")
                        object.totalWinLost = options.longs === String ? String(message.totalWinLost) : message.totalWinLost;
                    else
                        object.totalWinLost = options.longs === String ? $util.Long.prototype.toString.call(message.totalWinLost) : options.longs === Number ? new $util.LongBits(message.totalWinLost.low >>> 0, message.totalWinLost.high >>> 0).toNumber() : message.totalWinLost;
                return object;
            };

            /**
             * Converts this PlayerData to JSON.
             * @function toJSON
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlayerData
             * @function getTypeUrl
             * @memberof mahjong.RoundSettleNot.PlayerData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mahjong.RoundSettleNot.PlayerData";
            };

            return PlayerData;
        })();

        return RoundSettleNot;
    })();

    mahjong.KickOutReq = (function() {

        /**
         * Properties of a KickOutReq.
         * @memberof mahjong
         * @interface IKickOutReq
         * @property {string|null} [openid] KickOutReq openid
         */

        /**
         * Constructs a new KickOutReq.
         * @memberof mahjong
         * @classdesc Represents a KickOutReq.
         * @implements IKickOutReq
         * @constructor
         * @param {mahjong.IKickOutReq=} [properties] Properties to set
         */
        function KickOutReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickOutReq openid.
         * @member {string} openid
         * @memberof mahjong.KickOutReq
         * @instance
         */
        KickOutReq.prototype.openid = "";

        /**
         * Creates a new KickOutReq instance using the specified properties.
         * @function create
         * @memberof mahjong.KickOutReq
         * @static
         * @param {mahjong.IKickOutReq=} [properties] Properties to set
         * @returns {mahjong.KickOutReq} KickOutReq instance
         */
        KickOutReq.create = function create(properties) {
            return new KickOutReq(properties);
        };

        /**
         * Encodes the specified KickOutReq message. Does not implicitly {@link mahjong.KickOutReq.verify|verify} messages.
         * @function encode
         * @memberof mahjong.KickOutReq
         * @static
         * @param {mahjong.IKickOutReq} message KickOutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
            return writer;
        };

        /**
         * Encodes the specified KickOutReq message, length delimited. Does not implicitly {@link mahjong.KickOutReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.KickOutReq
         * @static
         * @param {mahjong.IKickOutReq} message KickOutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickOutReq message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.KickOutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.KickOutReq} KickOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.KickOutReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.openid = reader.string();
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
         * Decodes a KickOutReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.KickOutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.KickOutReq} KickOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickOutReq message.
         * @function verify
         * @memberof mahjong.KickOutReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickOutReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            return null;
        };

        /**
         * Creates a KickOutReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.KickOutReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.KickOutReq} KickOutReq
         */
        KickOutReq.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.KickOutReq)
                return object;
            var message = new $root.mahjong.KickOutReq();
            if (object.openid != null)
                message.openid = String(object.openid);
            return message;
        };

        /**
         * Creates a plain object from a KickOutReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.KickOutReq
         * @static
         * @param {mahjong.KickOutReq} message KickOutReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickOutReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.openid = "";
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            return object;
        };

        /**
         * Converts this KickOutReq to JSON.
         * @function toJSON
         * @memberof mahjong.KickOutReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickOutReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KickOutReq
         * @function getTypeUrl
         * @memberof mahjong.KickOutReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KickOutReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.KickOutReq";
        };

        return KickOutReq;
    })();

    mahjong.KickOutRsp = (function() {

        /**
         * Properties of a KickOutRsp.
         * @memberof mahjong
         * @interface IKickOutRsp
         * @property {string|null} [err] KickOutRsp err
         */

        /**
         * Constructs a new KickOutRsp.
         * @memberof mahjong
         * @classdesc Represents a KickOutRsp.
         * @implements IKickOutRsp
         * @constructor
         * @param {mahjong.IKickOutRsp=} [properties] Properties to set
         */
        function KickOutRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickOutRsp err.
         * @member {string} err
         * @memberof mahjong.KickOutRsp
         * @instance
         */
        KickOutRsp.prototype.err = "";

        /**
         * Creates a new KickOutRsp instance using the specified properties.
         * @function create
         * @memberof mahjong.KickOutRsp
         * @static
         * @param {mahjong.IKickOutRsp=} [properties] Properties to set
         * @returns {mahjong.KickOutRsp} KickOutRsp instance
         */
        KickOutRsp.create = function create(properties) {
            return new KickOutRsp(properties);
        };

        /**
         * Encodes the specified KickOutRsp message. Does not implicitly {@link mahjong.KickOutRsp.verify|verify} messages.
         * @function encode
         * @memberof mahjong.KickOutRsp
         * @static
         * @param {mahjong.IKickOutRsp} message KickOutRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified KickOutRsp message, length delimited. Does not implicitly {@link mahjong.KickOutRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.KickOutRsp
         * @static
         * @param {mahjong.IKickOutRsp} message KickOutRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickOutRsp message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.KickOutRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.KickOutRsp} KickOutRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.KickOutRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
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
         * Decodes a KickOutRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.KickOutRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.KickOutRsp} KickOutRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickOutRsp message.
         * @function verify
         * @memberof mahjong.KickOutRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickOutRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates a KickOutRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.KickOutRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.KickOutRsp} KickOutRsp
         */
        KickOutRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.KickOutRsp)
                return object;
            var message = new $root.mahjong.KickOutRsp();
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from a KickOutRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.KickOutRsp
         * @static
         * @param {mahjong.KickOutRsp} message KickOutRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickOutRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = "";
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this KickOutRsp to JSON.
         * @function toJSON
         * @memberof mahjong.KickOutRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickOutRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KickOutRsp
         * @function getTypeUrl
         * @memberof mahjong.KickOutRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KickOutRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.KickOutRsp";
        };

        return KickOutRsp;
    })();

    mahjong.StartGameReq = (function() {

        /**
         * Properties of a StartGameReq.
         * @memberof mahjong
         * @interface IStartGameReq
         */

        /**
         * Constructs a new StartGameReq.
         * @memberof mahjong
         * @classdesc Represents a StartGameReq.
         * @implements IStartGameReq
         * @constructor
         * @param {mahjong.IStartGameReq=} [properties] Properties to set
         */
        function StartGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new StartGameReq instance using the specified properties.
         * @function create
         * @memberof mahjong.StartGameReq
         * @static
         * @param {mahjong.IStartGameReq=} [properties] Properties to set
         * @returns {mahjong.StartGameReq} StartGameReq instance
         */
        StartGameReq.create = function create(properties) {
            return new StartGameReq(properties);
        };

        /**
         * Encodes the specified StartGameReq message. Does not implicitly {@link mahjong.StartGameReq.verify|verify} messages.
         * @function encode
         * @memberof mahjong.StartGameReq
         * @static
         * @param {mahjong.IStartGameReq} message StartGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link mahjong.StartGameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.StartGameReq
         * @static
         * @param {mahjong.IStartGameReq} message StartGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartGameReq message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.StartGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.StartGameReq} StartGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.StartGameReq();
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
         * Decodes a StartGameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.StartGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.StartGameReq} StartGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGameReq message.
         * @function verify
         * @memberof mahjong.StartGameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a StartGameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.StartGameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.StartGameReq} StartGameReq
         */
        StartGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.StartGameReq)
                return object;
            return new $root.mahjong.StartGameReq();
        };

        /**
         * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.StartGameReq
         * @static
         * @param {mahjong.StartGameReq} message StartGameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartGameReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this StartGameReq to JSON.
         * @function toJSON
         * @memberof mahjong.StartGameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StartGameReq
         * @function getTypeUrl
         * @memberof mahjong.StartGameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StartGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.StartGameReq";
        };

        return StartGameReq;
    })();

    mahjong.StartGameRsp = (function() {

        /**
         * Properties of a StartGameRsp.
         * @memberof mahjong
         * @interface IStartGameRsp
         * @property {string|null} [err] StartGameRsp err
         */

        /**
         * Constructs a new StartGameRsp.
         * @memberof mahjong
         * @classdesc Represents a StartGameRsp.
         * @implements IStartGameRsp
         * @constructor
         * @param {mahjong.IStartGameRsp=} [properties] Properties to set
         */
        function StartGameRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartGameRsp err.
         * @member {string} err
         * @memberof mahjong.StartGameRsp
         * @instance
         */
        StartGameRsp.prototype.err = "";

        /**
         * Creates a new StartGameRsp instance using the specified properties.
         * @function create
         * @memberof mahjong.StartGameRsp
         * @static
         * @param {mahjong.IStartGameRsp=} [properties] Properties to set
         * @returns {mahjong.StartGameRsp} StartGameRsp instance
         */
        StartGameRsp.create = function create(properties) {
            return new StartGameRsp(properties);
        };

        /**
         * Encodes the specified StartGameRsp message. Does not implicitly {@link mahjong.StartGameRsp.verify|verify} messages.
         * @function encode
         * @memberof mahjong.StartGameRsp
         * @static
         * @param {mahjong.IStartGameRsp} message StartGameRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.err);
            return writer;
        };

        /**
         * Encodes the specified StartGameRsp message, length delimited. Does not implicitly {@link mahjong.StartGameRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.StartGameRsp
         * @static
         * @param {mahjong.IStartGameRsp} message StartGameRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartGameRsp message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.StartGameRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.StartGameRsp} StartGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.StartGameRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err = reader.string();
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
         * Decodes a StartGameRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.StartGameRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.StartGameRsp} StartGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGameRsp message.
         * @function verify
         * @memberof mahjong.StartGameRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGameRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates a StartGameRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mahjong.StartGameRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mahjong.StartGameRsp} StartGameRsp
         */
        StartGameRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.StartGameRsp)
                return object;
            var message = new $root.mahjong.StartGameRsp();
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from a StartGameRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mahjong.StartGameRsp
         * @static
         * @param {mahjong.StartGameRsp} message StartGameRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartGameRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = "";
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            return object;
        };

        /**
         * Converts this StartGameRsp to JSON.
         * @function toJSON
         * @memberof mahjong.StartGameRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartGameRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StartGameRsp
         * @function getTypeUrl
         * @memberof mahjong.StartGameRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StartGameRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mahjong.StartGameRsp";
        };

        return StartGameRsp;
    })();

    return mahjong;
})();

module.exports = $root;
