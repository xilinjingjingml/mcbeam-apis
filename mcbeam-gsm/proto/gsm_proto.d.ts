import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace gsm. */
export namespace gsm {

    /** Represents a Rooms */
    class Rooms extends $protobuf.rpc.Service {

        /**
         * Constructs a new Rooms service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Rooms service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Rooms;

        /**
         * Calls CreateRoom.
         * @param request CreateRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateRoomRsp
         */
        public createRoom(request: gsm.ICreateRoomReq, callback: gsm.Rooms.CreateRoomCallback): void;

        /**
         * Calls CreateRoom.
         * @param request CreateRoomReq message or plain object
         * @returns Promise
         */
        public createRoom(request: gsm.ICreateRoomReq): Promise<gsm.CreateRoomRsp>;

        /**
         * Calls GetRoomInfo.
         * @param request GetRoomInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRoomInfoRsp
         */
        public getRoomInfo(request: gsm.IGetRoomInfoReq, callback: gsm.Rooms.GetRoomInfoCallback): void;

        /**
         * Calls GetRoomInfo.
         * @param request GetRoomInfoReq message or plain object
         * @returns Promise
         */
        public getRoomInfo(request: gsm.IGetRoomInfoReq): Promise<gsm.GetRoomInfoRsp>;

        /**
         * Calls CheckRoomExists.
         * @param request CheckRoomExistsReq message or plain object
         * @param callback Node-style callback called with the error, if any, and CheckRoomExistsRsp
         */
        public checkRoomExists(request: gsm.ICheckRoomExistsReq, callback: gsm.Rooms.CheckRoomExistsCallback): void;

        /**
         * Calls CheckRoomExists.
         * @param request CheckRoomExistsReq message or plain object
         * @returns Promise
         */
        public checkRoomExists(request: gsm.ICheckRoomExistsReq): Promise<gsm.CheckRoomExistsRsp>;

        /**
         * Calls GetRoomByAlias.
         * @param request GetRoomByAliasReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRoomByAliasRsp
         */
        public getRoomByAlias(request: gsm.IGetRoomByAliasReq, callback: gsm.Rooms.GetRoomByAliasCallback): void;

        /**
         * Calls GetRoomByAlias.
         * @param request GetRoomByAliasReq message or plain object
         * @returns Promise
         */
        public getRoomByAlias(request: gsm.IGetRoomByAliasReq): Promise<gsm.GetRoomByAliasRsp>;
    }

    namespace Rooms {

        /**
         * Callback as used by {@link gsm.Rooms#createRoom}.
         * @param error Error, if any
         * @param [response] CreateRoomRsp
         */
        type CreateRoomCallback = (error: (Error|null), response?: gsm.CreateRoomRsp) => void;

        /**
         * Callback as used by {@link gsm.Rooms#getRoomInfo}.
         * @param error Error, if any
         * @param [response] GetRoomInfoRsp
         */
        type GetRoomInfoCallback = (error: (Error|null), response?: gsm.GetRoomInfoRsp) => void;

        /**
         * Callback as used by {@link gsm.Rooms#checkRoomExists}.
         * @param error Error, if any
         * @param [response] CheckRoomExistsRsp
         */
        type CheckRoomExistsCallback = (error: (Error|null), response?: gsm.CheckRoomExistsRsp) => void;

        /**
         * Callback as used by {@link gsm.Rooms#getRoomByAlias}.
         * @param error Error, if any
         * @param [response] GetRoomByAliasRsp
         */
        type GetRoomByAliasCallback = (error: (Error|null), response?: gsm.GetRoomByAliasRsp) => void;
    }

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: gsm.IEmpty): gsm.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link gsm.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link gsm.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): gsm.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Empty
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateRoomReq. */
    interface ICreateRoomReq {

        /** CreateRoomReq gameId */
        gameId?: (string|null);

        /** CreateRoomReq properties */
        properties?: (string|null);

        /** CreateRoomReq roomId */
        roomId?: (string|null);

        /** CreateRoomReq metadata */
        metadata?: ({ [k: string]: string }|null);

        /** CreateRoomReq labels */
        labels?: (string[]|null);

        /** CreateRoomReq aliases */
        aliases?: (string[]|null);
    }

    /** Represents a CreateRoomReq. */
    class CreateRoomReq implements ICreateRoomReq {

        /**
         * Constructs a new CreateRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.ICreateRoomReq);

        /** CreateRoomReq gameId. */
        public gameId: string;

        /** CreateRoomReq properties. */
        public properties: string;

        /** CreateRoomReq roomId. */
        public roomId: string;

        /** CreateRoomReq metadata. */
        public metadata: { [k: string]: string };

        /** CreateRoomReq labels. */
        public labels: string[];

        /** CreateRoomReq aliases. */
        public aliases: string[];

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomReq instance
         */
        public static create(properties?: gsm.ICreateRoomReq): gsm.CreateRoomReq;

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link gsm.CreateRoomReq.verify|verify} messages.
         * @param message CreateRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link gsm.CreateRoomReq.verify|verify} messages.
         * @param message CreateRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.CreateRoomReq;

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.CreateRoomReq;

        /**
         * Verifies a CreateRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gsm.CreateRoomReq;

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @param message CreateRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.CreateRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo openid */
        openid?: (string|null);

        /** PlayerInfo status */
        status?: (gsm.PlayerInfo.Status|null);

        /** PlayerInfo joinTime */
        joinTime?: (number|Long|null);

        /** PlayerInfo leaveTime */
        leaveTime?: (number|Long|null);

        /** PlayerInfo metadata */
        metadata?: ({ [k: string]: string }|null);

        /** PlayerInfo nickname */
        nickname?: (string|null);

        /** PlayerInfo avatar */
        avatar?: (string|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.IPlayerInfo);

        /** PlayerInfo openid. */
        public openid: string;

        /** PlayerInfo status. */
        public status: gsm.PlayerInfo.Status;

        /** PlayerInfo joinTime. */
        public joinTime: (number|Long);

        /** PlayerInfo leaveTime. */
        public leaveTime: (number|Long);

        /** PlayerInfo metadata. */
        public metadata: { [k: string]: string };

        /** PlayerInfo nickname. */
        public nickname: string;

        /** PlayerInfo avatar. */
        public avatar: string;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: gsm.IPlayerInfo): gsm.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link gsm.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link gsm.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): gsm.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PlayerInfo {

        /** Status enum. */
        enum Status {
            DEFAULT = 0,
            JOINED = 1,
            LEAVED = 2
        }
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo roomId */
        roomId?: (string|null);

        /** RoomInfo serverId */
        serverId?: (string|null);

        /** RoomInfo gameGid */
        gameGid?: (string|null);

        /** RoomInfo matchCode */
        matchCode?: (string|null);

        /** RoomInfo maxPlayerNum */
        maxPlayerNum?: (number|null);

        /** RoomInfo owner */
        owner?: (string|null);

        /** RoomInfo properties */
        properties?: (string|null);

        /** RoomInfo players */
        players?: ({ [k: string]: gsm.IPlayerInfo }|null);

        /** RoomInfo createTime */
        createTime?: (number|Long|null);

        /** RoomInfo labels */
        labels?: (string[]|null);

        /** RoomInfo aliases */
        aliases?: (string[]|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.IRoomInfo);

        /** RoomInfo roomId. */
        public roomId: string;

        /** RoomInfo serverId. */
        public serverId: string;

        /** RoomInfo gameGid. */
        public gameGid: string;

        /** RoomInfo matchCode. */
        public matchCode: string;

        /** RoomInfo maxPlayerNum. */
        public maxPlayerNum: number;

        /** RoomInfo owner. */
        public owner: string;

        /** RoomInfo properties. */
        public properties: string;

        /** RoomInfo players. */
        public players: { [k: string]: gsm.IPlayerInfo };

        /** RoomInfo createTime. */
        public createTime: (number|Long);

        /** RoomInfo labels. */
        public labels: string[];

        /** RoomInfo aliases. */
        public aliases: string[];

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: gsm.IRoomInfo): gsm.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gsm.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link gsm.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): gsm.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoomInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateRoomRsp. */
    interface ICreateRoomRsp {

        /** CreateRoomRsp err */
        err?: (string|null);

        /** CreateRoomRsp room */
        room?: (gsm.IRoomInfo|null);
    }

    /** Represents a CreateRoomRsp. */
    class CreateRoomRsp implements ICreateRoomRsp {

        /**
         * Constructs a new CreateRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.ICreateRoomRsp);

        /** CreateRoomRsp err. */
        public err: string;

        /** CreateRoomRsp room. */
        public room?: (gsm.IRoomInfo|null);

        /**
         * Creates a new CreateRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomRsp instance
         */
        public static create(properties?: gsm.ICreateRoomRsp): gsm.CreateRoomRsp;

        /**
         * Encodes the specified CreateRoomRsp message. Does not implicitly {@link gsm.CreateRoomRsp.verify|verify} messages.
         * @param message CreateRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.ICreateRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomRsp message, length delimited. Does not implicitly {@link gsm.CreateRoomRsp.verify|verify} messages.
         * @param message CreateRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.ICreateRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.CreateRoomRsp;

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.CreateRoomRsp;

        /**
         * Verifies a CreateRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gsm.CreateRoomRsp;

        /**
         * Creates a plain object from a CreateRoomRsp message. Also converts values to other types if specified.
         * @param message CreateRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.CreateRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateRoomRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CheckRoomExistsReq. */
    interface ICheckRoomExistsReq {

        /** CheckRoomExistsReq roomId */
        roomId?: (string|null);

        /** CheckRoomExistsReq serverId */
        serverId?: (string|null);

        /** CheckRoomExistsReq gameGid */
        gameGid?: (string|null);
    }

    /** Represents a CheckRoomExistsReq. */
    class CheckRoomExistsReq implements ICheckRoomExistsReq {

        /**
         * Constructs a new CheckRoomExistsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.ICheckRoomExistsReq);

        /** CheckRoomExistsReq roomId. */
        public roomId: string;

        /** CheckRoomExistsReq serverId. */
        public serverId: string;

        /** CheckRoomExistsReq gameGid. */
        public gameGid: string;

        /**
         * Creates a new CheckRoomExistsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckRoomExistsReq instance
         */
        public static create(properties?: gsm.ICheckRoomExistsReq): gsm.CheckRoomExistsReq;

        /**
         * Encodes the specified CheckRoomExistsReq message. Does not implicitly {@link gsm.CheckRoomExistsReq.verify|verify} messages.
         * @param message CheckRoomExistsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.ICheckRoomExistsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckRoomExistsReq message, length delimited. Does not implicitly {@link gsm.CheckRoomExistsReq.verify|verify} messages.
         * @param message CheckRoomExistsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.ICheckRoomExistsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckRoomExistsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckRoomExistsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.CheckRoomExistsReq;

        /**
         * Decodes a CheckRoomExistsReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckRoomExistsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.CheckRoomExistsReq;

        /**
         * Verifies a CheckRoomExistsReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckRoomExistsReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckRoomExistsReq
         */
        public static fromObject(object: { [k: string]: any }): gsm.CheckRoomExistsReq;

        /**
         * Creates a plain object from a CheckRoomExistsReq message. Also converts values to other types if specified.
         * @param message CheckRoomExistsReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.CheckRoomExistsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckRoomExistsReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CheckRoomExistsReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CheckRoomExistsRsp. */
    interface ICheckRoomExistsRsp {

        /** CheckRoomExistsRsp exists */
        exists?: (boolean|null);
    }

    /** Represents a CheckRoomExistsRsp. */
    class CheckRoomExistsRsp implements ICheckRoomExistsRsp {

        /**
         * Constructs a new CheckRoomExistsRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.ICheckRoomExistsRsp);

        /** CheckRoomExistsRsp exists. */
        public exists: boolean;

        /**
         * Creates a new CheckRoomExistsRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckRoomExistsRsp instance
         */
        public static create(properties?: gsm.ICheckRoomExistsRsp): gsm.CheckRoomExistsRsp;

        /**
         * Encodes the specified CheckRoomExistsRsp message. Does not implicitly {@link gsm.CheckRoomExistsRsp.verify|verify} messages.
         * @param message CheckRoomExistsRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.ICheckRoomExistsRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckRoomExistsRsp message, length delimited. Does not implicitly {@link gsm.CheckRoomExistsRsp.verify|verify} messages.
         * @param message CheckRoomExistsRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.ICheckRoomExistsRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckRoomExistsRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckRoomExistsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.CheckRoomExistsRsp;

        /**
         * Decodes a CheckRoomExistsRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckRoomExistsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.CheckRoomExistsRsp;

        /**
         * Verifies a CheckRoomExistsRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckRoomExistsRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckRoomExistsRsp
         */
        public static fromObject(object: { [k: string]: any }): gsm.CheckRoomExistsRsp;

        /**
         * Creates a plain object from a CheckRoomExistsRsp message. Also converts values to other types if specified.
         * @param message CheckRoomExistsRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.CheckRoomExistsRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckRoomExistsRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CheckRoomExistsRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetRoomInfoReq. */
    interface IGetRoomInfoReq {

        /** GetRoomInfoReq roomId */
        roomId?: (string|null);

        /** GetRoomInfoReq serverId */
        serverId?: (string|null);
    }

    /** Represents a GetRoomInfoReq. */
    class GetRoomInfoReq implements IGetRoomInfoReq {

        /**
         * Constructs a new GetRoomInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.IGetRoomInfoReq);

        /** GetRoomInfoReq roomId. */
        public roomId: string;

        /** GetRoomInfoReq serverId. */
        public serverId: string;

        /**
         * Creates a new GetRoomInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomInfoReq instance
         */
        public static create(properties?: gsm.IGetRoomInfoReq): gsm.GetRoomInfoReq;

        /**
         * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link gsm.GetRoomInfoReq.verify|verify} messages.
         * @param message GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link gsm.GetRoomInfoReq.verify|verify} messages.
         * @param message GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.GetRoomInfoReq;

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.GetRoomInfoReq;

        /**
         * Verifies a GetRoomInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoomInfoReq
         */
        public static fromObject(object: { [k: string]: any }): gsm.GetRoomInfoReq;

        /**
         * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
         * @param message GetRoomInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.GetRoomInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoomInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetRoomInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetRoomInfoRsp. */
    interface IGetRoomInfoRsp {

        /** GetRoomInfoRsp err */
        err?: (string|null);

        /** GetRoomInfoRsp room */
        room?: (gsm.IRoomInfo|null);
    }

    /** Represents a GetRoomInfoRsp. */
    class GetRoomInfoRsp implements IGetRoomInfoRsp {

        /**
         * Constructs a new GetRoomInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.IGetRoomInfoRsp);

        /** GetRoomInfoRsp err. */
        public err: string;

        /** GetRoomInfoRsp room. */
        public room?: (gsm.IRoomInfo|null);

        /**
         * Creates a new GetRoomInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomInfoRsp instance
         */
        public static create(properties?: gsm.IGetRoomInfoRsp): gsm.GetRoomInfoRsp;

        /**
         * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link gsm.GetRoomInfoRsp.verify|verify} messages.
         * @param message GetRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link gsm.GetRoomInfoRsp.verify|verify} messages.
         * @param message GetRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.GetRoomInfoRsp;

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.GetRoomInfoRsp;

        /**
         * Verifies a GetRoomInfoRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoomInfoRsp
         */
        public static fromObject(object: { [k: string]: any }): gsm.GetRoomInfoRsp;

        /**
         * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
         * @param message GetRoomInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.GetRoomInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoomInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetRoomInfoRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetRoomByAliasReq. */
    interface IGetRoomByAliasReq {
    }

    /** Represents a GetRoomByAliasReq. */
    class GetRoomByAliasReq implements IGetRoomByAliasReq {

        /**
         * Constructs a new GetRoomByAliasReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.IGetRoomByAliasReq);

        /**
         * Creates a new GetRoomByAliasReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomByAliasReq instance
         */
        public static create(properties?: gsm.IGetRoomByAliasReq): gsm.GetRoomByAliasReq;

        /**
         * Encodes the specified GetRoomByAliasReq message. Does not implicitly {@link gsm.GetRoomByAliasReq.verify|verify} messages.
         * @param message GetRoomByAliasReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.IGetRoomByAliasReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomByAliasReq message, length delimited. Does not implicitly {@link gsm.GetRoomByAliasReq.verify|verify} messages.
         * @param message GetRoomByAliasReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.IGetRoomByAliasReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomByAliasReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomByAliasReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.GetRoomByAliasReq;

        /**
         * Decodes a GetRoomByAliasReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomByAliasReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.GetRoomByAliasReq;

        /**
         * Verifies a GetRoomByAliasReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRoomByAliasReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoomByAliasReq
         */
        public static fromObject(object: { [k: string]: any }): gsm.GetRoomByAliasReq;

        /**
         * Creates a plain object from a GetRoomByAliasReq message. Also converts values to other types if specified.
         * @param message GetRoomByAliasReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.GetRoomByAliasReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoomByAliasReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetRoomByAliasReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetRoomByAliasRsp. */
    interface IGetRoomByAliasRsp {
    }

    /** Represents a GetRoomByAliasRsp. */
    class GetRoomByAliasRsp implements IGetRoomByAliasRsp {

        /**
         * Constructs a new GetRoomByAliasRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsm.IGetRoomByAliasRsp);

        /**
         * Creates a new GetRoomByAliasRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomByAliasRsp instance
         */
        public static create(properties?: gsm.IGetRoomByAliasRsp): gsm.GetRoomByAliasRsp;

        /**
         * Encodes the specified GetRoomByAliasRsp message. Does not implicitly {@link gsm.GetRoomByAliasRsp.verify|verify} messages.
         * @param message GetRoomByAliasRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsm.IGetRoomByAliasRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomByAliasRsp message, length delimited. Does not implicitly {@link gsm.GetRoomByAliasRsp.verify|verify} messages.
         * @param message GetRoomByAliasRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsm.IGetRoomByAliasRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomByAliasRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomByAliasRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsm.GetRoomByAliasRsp;

        /**
         * Decodes a GetRoomByAliasRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomByAliasRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsm.GetRoomByAliasRsp;

        /**
         * Verifies a GetRoomByAliasRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRoomByAliasRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoomByAliasRsp
         */
        public static fromObject(object: { [k: string]: any }): gsm.GetRoomByAliasRsp;

        /**
         * Creates a plain object from a GetRoomByAliasRsp message. Also converts values to other types if specified.
         * @param message GetRoomByAliasRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsm.GetRoomByAliasRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoomByAliasRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetRoomByAliasRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace proto. */
export namespace proto {

    /** Namespace gsm. */
    namespace gsm {

        /** Properties of a GamePlayerStatus. */
        interface IGamePlayerStatus {

            /** GamePlayerStatus openid */
            openid?: (string|null);

            /** GamePlayerStatus gameGid */
            gameGid?: (string|null);

            /** GamePlayerStatus roomId */
            roomId?: (string|null);

            /** GamePlayerStatus serverId */
            serverId?: (string|null);
        }

        /** Represents a GamePlayerStatus. */
        class GamePlayerStatus implements IGamePlayerStatus {

            /**
             * Constructs a new GamePlayerStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gsm.IGamePlayerStatus);

            /** GamePlayerStatus openid. */
            public openid: string;

            /** GamePlayerStatus gameGid. */
            public gameGid: string;

            /** GamePlayerStatus roomId. */
            public roomId: string;

            /** GamePlayerStatus serverId. */
            public serverId: string;

            /**
             * Creates a new GamePlayerStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GamePlayerStatus instance
             */
            public static create(properties?: proto.gsm.IGamePlayerStatus): proto.gsm.GamePlayerStatus;

            /**
             * Encodes the specified GamePlayerStatus message. Does not implicitly {@link proto.gsm.GamePlayerStatus.verify|verify} messages.
             * @param message GamePlayerStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gsm.IGamePlayerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GamePlayerStatus message, length delimited. Does not implicitly {@link proto.gsm.GamePlayerStatus.verify|verify} messages.
             * @param message GamePlayerStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gsm.IGamePlayerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GamePlayerStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GamePlayerStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gsm.GamePlayerStatus;

            /**
             * Decodes a GamePlayerStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GamePlayerStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gsm.GamePlayerStatus;

            /**
             * Verifies a GamePlayerStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GamePlayerStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GamePlayerStatus
             */
            public static fromObject(object: { [k: string]: any }): proto.gsm.GamePlayerStatus;

            /**
             * Creates a plain object from a GamePlayerStatus message. Also converts values to other types if specified.
             * @param message GamePlayerStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gsm.GamePlayerStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GamePlayerStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GamePlayerStatus
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
