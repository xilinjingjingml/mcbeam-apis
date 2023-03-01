import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace gsbase. */
export namespace gsbase {

    /** RoomStatus enum. */
    enum RoomStatus {
        Unknown = 0,
        Initialized = 1,
        Started = 2,
        Dismissed = 3
    }

    /** RoomType enum. */
    enum RoomType {
        NormalRoom = 0,
        PrivateRoom = 1,
        ClubRoom = 2
    }

    /** PlayerGameStatus enum. */
    enum PlayerGameStatus {
        Invalid = 0,
        Joined = 1,
        Leave = 2
    }

    /** DismissCode enum. */
    enum DismissCode {
        GameOver = 0,
        System = 1,
        TimeOut = 2,
        GameDismiss = 3,
        DismissCodePlayerNotEnough = 4,
        DismissCodeAdmin = 255
    }

    /** Properties of a GameResult. */
    interface IGameResult {

        /** GameResult roomId */
        roomId?: (string|null);

        /** GameResult gameGid */
        gameGid?: (string|null);

        /** GameResult properties */
        properties?: (string|null);

        /** GameResult createAt */
        createAt?: (number|Long|null);

        /** GameResult expireAt */
        expireAt?: (number|Long|null);

        /** GameResult shareCode */
        shareCode?: (string|null);

        /** GameResult platAid */
        platAid?: (number|null);

        /** GameResult settleItem */
        settleItem?: (number|null);

        /** GameResult date */
        date?: (number|null);

        /** GameResult status */
        status?: (gsbase.RoomStatus|null);

        /** GameResult type */
        type?: (number|null);

        /** GameResult matchCid */
        matchCid?: (string|null);

        /** GameResult players */
        players?: (gsbase.IPlayerGameData[]|null);

        /** GameResult rounds */
        rounds?: (gsbase.IRoundData[]|null);

        /** GameResult serverId */
        serverId?: (string|null);

        /** GameResult tags */
        tags?: ({ [k: string]: string }|null);

        /** GameResult matchId */
        matchId?: (string|null);

        /** GameResult updateTime */
        updateTime?: (number|Long|null);

        /** GameResult maxRoundNum */
        maxRoundNum?: (number|null);

        /** GameResult labels */
        labels?: (string[]|null);

        /** GameResult dismissCode */
        dismissCode?: (number|null);

        /** GameResult aliases */
        aliases?: (string[]|null);
    }

    /** Represents a GameResult. */
    class GameResult implements IGameResult {

        /**
         * Constructs a new GameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IGameResult);

        /** GameResult roomId. */
        public roomId: string;

        /** GameResult gameGid. */
        public gameGid: string;

        /** GameResult properties. */
        public properties: string;

        /** GameResult createAt. */
        public createAt: (number|Long);

        /** GameResult expireAt. */
        public expireAt: (number|Long);

        /** GameResult shareCode. */
        public shareCode: string;

        /** GameResult platAid. */
        public platAid: number;

        /** GameResult settleItem. */
        public settleItem: number;

        /** GameResult date. */
        public date: number;

        /** GameResult status. */
        public status: gsbase.RoomStatus;

        /** GameResult type. */
        public type: number;

        /** GameResult matchCid. */
        public matchCid: string;

        /** GameResult players. */
        public players: gsbase.IPlayerGameData[];

        /** GameResult rounds. */
        public rounds: gsbase.IRoundData[];

        /** GameResult serverId. */
        public serverId: string;

        /** GameResult tags. */
        public tags: { [k: string]: string };

        /** GameResult matchId. */
        public matchId: string;

        /** GameResult updateTime. */
        public updateTime: (number|Long);

        /** GameResult maxRoundNum. */
        public maxRoundNum: number;

        /** GameResult labels. */
        public labels: string[];

        /** GameResult dismissCode. */
        public dismissCode: number;

        /** GameResult aliases. */
        public aliases: string[];

        /**
         * Creates a new GameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResult instance
         */
        public static create(properties?: gsbase.IGameResult): gsbase.GameResult;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link gsbase.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link gsbase.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.GameResult;

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.GameResult;

        /**
         * Verifies a GameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameResult
         */
        public static fromObject(object: { [k: string]: any }): gsbase.GameResult;

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @param message GameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.GameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerGameData. */
    interface IPlayerGameData {

        /** PlayerGameData openid */
        openid?: (string|null);

        /** PlayerGameData winLose */
        winLose?: (number|Long|null);

        /** PlayerGameData status */
        status?: (gsbase.PlayerGameStatus|null);

        /** PlayerGameData updateTime */
        updateTime?: (number|Long|null);

        /** PlayerGameData labels */
        labels?: (string[]|null);

        /** PlayerGameData tags */
        tags?: ({ [k: string]: string }|null);

        /** PlayerGameData nickname */
        nickname?: (string|null);
    }

    /** Represents a PlayerGameData. */
    class PlayerGameData implements IPlayerGameData {

        /**
         * Constructs a new PlayerGameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IPlayerGameData);

        /** PlayerGameData openid. */
        public openid: string;

        /** PlayerGameData winLose. */
        public winLose: (number|Long);

        /** PlayerGameData status. */
        public status: gsbase.PlayerGameStatus;

        /** PlayerGameData updateTime. */
        public updateTime: (number|Long);

        /** PlayerGameData labels. */
        public labels: string[];

        /** PlayerGameData tags. */
        public tags: { [k: string]: string };

        /** PlayerGameData nickname. */
        public nickname: string;

        /**
         * Creates a new PlayerGameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerGameData instance
         */
        public static create(properties?: gsbase.IPlayerGameData): gsbase.PlayerGameData;

        /**
         * Encodes the specified PlayerGameData message. Does not implicitly {@link gsbase.PlayerGameData.verify|verify} messages.
         * @param message PlayerGameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IPlayerGameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerGameData message, length delimited. Does not implicitly {@link gsbase.PlayerGameData.verify|verify} messages.
         * @param message PlayerGameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IPlayerGameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerGameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.PlayerGameData;

        /**
         * Decodes a PlayerGameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.PlayerGameData;

        /**
         * Verifies a PlayerGameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerGameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerGameData
         */
        public static fromObject(object: { [k: string]: any }): gsbase.PlayerGameData;

        /**
         * Creates a plain object from a PlayerGameData message. Also converts values to other types if specified.
         * @param message PlayerGameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.PlayerGameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerGameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerGameData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleData. */
    interface IBattleData {

        /** BattleData openid */
        openid?: (string|null);

        /** BattleData winLose */
        winLose?: (number|Long|null);

        /** BattleData labels */
        labels?: (string[]|null);
    }

    /** Represents a BattleData. */
    class BattleData implements IBattleData {

        /**
         * Constructs a new BattleData.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IBattleData);

        /** BattleData openid. */
        public openid: string;

        /** BattleData winLose. */
        public winLose: (number|Long);

        /** BattleData labels. */
        public labels: string[];

        /**
         * Creates a new BattleData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleData instance
         */
        public static create(properties?: gsbase.IBattleData): gsbase.BattleData;

        /**
         * Encodes the specified BattleData message. Does not implicitly {@link gsbase.BattleData.verify|verify} messages.
         * @param message BattleData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IBattleData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleData message, length delimited. Does not implicitly {@link gsbase.BattleData.verify|verify} messages.
         * @param message BattleData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IBattleData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.BattleData;

        /**
         * Decodes a BattleData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.BattleData;

        /**
         * Verifies a BattleData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleData
         */
        public static fromObject(object: { [k: string]: any }): gsbase.BattleData;

        /**
         * Creates a plain object from a BattleData message. Also converts values to other types if specified.
         * @param message BattleData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.BattleData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BattleData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoundData. */
    interface IRoundData {

        /** RoundData index */
        index?: (number|null);

        /** RoundData players */
        players?: (gsbase.IBattleData[]|null);

        /** RoundData startTime */
        startTime?: (number|Long|null);

        /** RoundData finishTime */
        finishTime?: (number|Long|null);
    }

    /** Represents a RoundData. */
    class RoundData implements IRoundData {

        /**
         * Constructs a new RoundData.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IRoundData);

        /** RoundData index. */
        public index: number;

        /** RoundData players. */
        public players: gsbase.IBattleData[];

        /** RoundData startTime. */
        public startTime: (number|Long);

        /** RoundData finishTime. */
        public finishTime: (number|Long);

        /**
         * Creates a new RoundData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundData instance
         */
        public static create(properties?: gsbase.IRoundData): gsbase.RoundData;

        /**
         * Encodes the specified RoundData message. Does not implicitly {@link gsbase.RoundData.verify|verify} messages.
         * @param message RoundData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IRoundData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundData message, length delimited. Does not implicitly {@link gsbase.RoundData.verify|verify} messages.
         * @param message RoundData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IRoundData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.RoundData;

        /**
         * Decodes a RoundData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.RoundData;

        /**
         * Verifies a RoundData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundData
         */
        public static fromObject(object: { [k: string]: any }): gsbase.RoundData;

        /**
         * Creates a plain object from a RoundData message. Also converts values to other types if specified.
         * @param message RoundData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.RoundData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoundData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameRoomStats. */
    interface IGameRoomStats {

        /** GameRoomStats roomId */
        roomId?: (string|null);

        /** GameRoomStats gameGid */
        gameGid?: (string|null);

        /** GameRoomStats type */
        type?: (gsbase.RoomType|null);

        /** GameRoomStats createAt */
        createAt?: (number|Long|null);

        /** GameRoomStats matchCid */
        matchCid?: (string|null);

        /** GameRoomStats shareCode */
        shareCode?: (string|null);

        /** GameRoomStats platAid */
        platAid?: (number|null);

        /** GameRoomStats curPlayerNum */
        curPlayerNum?: (number|null);

        /** GameRoomStats maxPlayerNum */
        maxPlayerNum?: (number|null);

        /** GameRoomStats labels */
        labels?: (string[]|null);

        /** GameRoomStats aliases */
        aliases?: (string[]|null);

        /** GameRoomStats status */
        status?: (gsbase.RoomStatus|null);

        /** GameRoomStats players */
        players?: (gsbase.IGamePlayerStats[]|null);

        /** GameRoomStats creator */
        creator?: (string|null);

        /** GameRoomStats properties */
        properties?: (string|null);

        /** GameRoomStats version */
        version?: (number|Long|null);

        /** GameRoomStats serverId */
        serverId?: (string|null);

        /** GameRoomStats stats */
        stats?: (string|null);
    }

    /** Represents a GameRoomStats. */
    class GameRoomStats implements IGameRoomStats {

        /**
         * Constructs a new GameRoomStats.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IGameRoomStats);

        /** GameRoomStats roomId. */
        public roomId: string;

        /** GameRoomStats gameGid. */
        public gameGid: string;

        /** GameRoomStats type. */
        public type: gsbase.RoomType;

        /** GameRoomStats createAt. */
        public createAt: (number|Long);

        /** GameRoomStats matchCid. */
        public matchCid: string;

        /** GameRoomStats shareCode. */
        public shareCode: string;

        /** GameRoomStats platAid. */
        public platAid: number;

        /** GameRoomStats curPlayerNum. */
        public curPlayerNum: number;

        /** GameRoomStats maxPlayerNum. */
        public maxPlayerNum: number;

        /** GameRoomStats labels. */
        public labels: string[];

        /** GameRoomStats aliases. */
        public aliases: string[];

        /** GameRoomStats status. */
        public status: gsbase.RoomStatus;

        /** GameRoomStats players. */
        public players: gsbase.IGamePlayerStats[];

        /** GameRoomStats creator. */
        public creator: string;

        /** GameRoomStats properties. */
        public properties: string;

        /** GameRoomStats version. */
        public version: (number|Long);

        /** GameRoomStats serverId. */
        public serverId: string;

        /** GameRoomStats stats. */
        public stats: string;

        /**
         * Creates a new GameRoomStats instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRoomStats instance
         */
        public static create(properties?: gsbase.IGameRoomStats): gsbase.GameRoomStats;

        /**
         * Encodes the specified GameRoomStats message. Does not implicitly {@link gsbase.GameRoomStats.verify|verify} messages.
         * @param message GameRoomStats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IGameRoomStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRoomStats message, length delimited. Does not implicitly {@link gsbase.GameRoomStats.verify|verify} messages.
         * @param message GameRoomStats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IGameRoomStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRoomStats message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRoomStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.GameRoomStats;

        /**
         * Decodes a GameRoomStats message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRoomStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.GameRoomStats;

        /**
         * Verifies a GameRoomStats message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRoomStats message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRoomStats
         */
        public static fromObject(object: { [k: string]: any }): gsbase.GameRoomStats;

        /**
         * Creates a plain object from a GameRoomStats message. Also converts values to other types if specified.
         * @param message GameRoomStats
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.GameRoomStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRoomStats to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameRoomStats
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GamePlayerStats. */
    interface IGamePlayerStats {

        /** GamePlayerStats openid */
        openid?: (string|null);

        /** GamePlayerStats metadata */
        metadata?: ({ [k: string]: string }|null);

        /** GamePlayerStats nickname */
        nickname?: (string|null);

        /** GamePlayerStats avatar */
        avatar?: (string|null);

        /** GamePlayerStats status */
        status?: (gsbase.PlayerGameStatus|null);
    }

    /** Represents a GamePlayerStats. */
    class GamePlayerStats implements IGamePlayerStats {

        /**
         * Constructs a new GamePlayerStats.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IGamePlayerStats);

        /** GamePlayerStats openid. */
        public openid: string;

        /** GamePlayerStats metadata. */
        public metadata: { [k: string]: string };

        /** GamePlayerStats nickname. */
        public nickname: string;

        /** GamePlayerStats avatar. */
        public avatar: string;

        /** GamePlayerStats status. */
        public status: gsbase.PlayerGameStatus;

        /**
         * Creates a new GamePlayerStats instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GamePlayerStats instance
         */
        public static create(properties?: gsbase.IGamePlayerStats): gsbase.GamePlayerStats;

        /**
         * Encodes the specified GamePlayerStats message. Does not implicitly {@link gsbase.GamePlayerStats.verify|verify} messages.
         * @param message GamePlayerStats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IGamePlayerStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GamePlayerStats message, length delimited. Does not implicitly {@link gsbase.GamePlayerStats.verify|verify} messages.
         * @param message GamePlayerStats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IGamePlayerStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GamePlayerStats message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GamePlayerStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.GamePlayerStats;

        /**
         * Decodes a GamePlayerStats message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GamePlayerStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.GamePlayerStats;

        /**
         * Verifies a GamePlayerStats message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GamePlayerStats message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GamePlayerStats
         */
        public static fromObject(object: { [k: string]: any }): gsbase.GamePlayerStats;

        /**
         * Creates a plain object from a GamePlayerStats message. Also converts values to other types if specified.
         * @param message GamePlayerStats
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.GamePlayerStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GamePlayerStats to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GamePlayerStats
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Version enum. */
    enum Version {
        major = 0,
        minor = 1
    }

    /** Represents a GsBase */
    class GsBase extends $protobuf.rpc.Service {

        /**
         * Constructs a new GsBase service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new GsBase service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GsBase;

        /**
         * Calls JoinRoom.
         * @param request JoinRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public joinRoom(request: gsbase.IJoinRoomReq, callback: gsbase.GsBase.JoinRoomCallback): void;

        /**
         * Calls JoinRoom.
         * @param request JoinRoomReq message or plain object
         * @returns Promise
         */
        public joinRoom(request: gsbase.IJoinRoomReq): Promise<gsbase.Empty>;

        /**
         * Calls LeaveRoom.
         * @param request LeaveRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public leaveRoom(request: gsbase.ILeaveRoomReq, callback: gsbase.GsBase.LeaveRoomCallback): void;

        /**
         * Calls LeaveRoom.
         * @param request LeaveRoomReq message or plain object
         * @returns Promise
         */
        public leaveRoom(request: gsbase.ILeaveRoomReq): Promise<gsbase.Empty>;

        /**
         * Calls Ping.
         * @param request GsbPing message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public ping(request: gsbase.IGsbPing, callback: gsbase.GsBase.PingCallback): void;

        /**
         * Calls Ping.
         * @param request GsbPing message or plain object
         * @returns Promise
         */
        public ping(request: gsbase.IGsbPing): Promise<gsbase.Empty>;

        /**
         * Calls Chat.
         * @param request ChatReq message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public chat(request: gsbase.IChatReq, callback: gsbase.GsBase.ChatCallback): void;

        /**
         * Calls Chat.
         * @param request ChatReq message or plain object
         * @returns Promise
         */
        public chat(request: gsbase.IChatReq): Promise<gsbase.Empty>;

        /**
         * Calls ApplyDismiss.
         * @param request ApplyDismissReq message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public applyDismiss(request: gsbase.IApplyDismissReq, callback: gsbase.GsBase.ApplyDismissCallback): void;

        /**
         * Calls ApplyDismiss.
         * @param request ApplyDismissReq message or plain object
         * @returns Promise
         */
        public applyDismiss(request: gsbase.IApplyDismissReq): Promise<gsbase.Empty>;

        /**
         * Calls ReplyDismiss.
         * @param request ReplyDismissReq message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public replyDismiss(request: gsbase.IReplyDismissReq, callback: gsbase.GsBase.ReplyDismissCallback): void;

        /**
         * Calls ReplyDismiss.
         * @param request ReplyDismissReq message or plain object
         * @returns Promise
         */
        public replyDismiss(request: gsbase.IReplyDismissReq): Promise<gsbase.Empty>;

        /**
         * Calls KickOut.
         * @param request KickOutReq message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public kickOut(request: gsbase.IKickOutReq, callback: gsbase.GsBase.KickOutCallback): void;

        /**
         * Calls KickOut.
         * @param request KickOutReq message or plain object
         * @returns Promise
         */
        public kickOut(request: gsbase.IKickOutReq): Promise<gsbase.Empty>;
    }

    namespace GsBase {

        /**
         * Callback as used by {@link gsbase.GsBase#joinRoom}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type JoinRoomCallback = (error: (Error|null), response?: gsbase.Empty) => void;

        /**
         * Callback as used by {@link gsbase.GsBase#leaveRoom}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type LeaveRoomCallback = (error: (Error|null), response?: gsbase.Empty) => void;

        /**
         * Callback as used by {@link gsbase.GsBase#ping}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type PingCallback = (error: (Error|null), response?: gsbase.Empty) => void;

        /**
         * Callback as used by {@link gsbase.GsBase#chat}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type ChatCallback = (error: (Error|null), response?: gsbase.Empty) => void;

        /**
         * Callback as used by {@link gsbase.GsBase#applyDismiss}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type ApplyDismissCallback = (error: (Error|null), response?: gsbase.Empty) => void;

        /**
         * Callback as used by {@link gsbase.GsBase#replyDismiss}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type ReplyDismissCallback = (error: (Error|null), response?: gsbase.Empty) => void;

        /**
         * Callback as used by {@link gsbase.GsBase#kickOut}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type KickOutCallback = (error: (Error|null), response?: gsbase.Empty) => void;
    }

    /** Represents a GsRpc */
    class GsRpc extends $protobuf.rpc.Service {

        /**
         * Constructs a new GsRpc service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new GsRpc service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GsRpc;

        /**
         * Calls CreateRoom.
         * @param request CreateRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateRoomRsp
         */
        public createRoom(request: gsbase.ICreateRoomReq, callback: gsbase.GsRpc.CreateRoomCallback): void;

        /**
         * Calls CreateRoom.
         * @param request CreateRoomReq message or plain object
         * @returns Promise
         */
        public createRoom(request: gsbase.ICreateRoomReq): Promise<gsbase.CreateRoomRsp>;

        /**
         * Calls DismissRoom.
         * @param request DismissRoomReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DismissRoomRsp
         */
        public dismissRoom(request: gsbase.IDismissRoomReq, callback: gsbase.GsRpc.DismissRoomCallback): void;

        /**
         * Calls DismissRoom.
         * @param request DismissRoomReq message or plain object
         * @returns Promise
         */
        public dismissRoom(request: gsbase.IDismissRoomReq): Promise<gsbase.DismissRoomRsp>;

        /**
         * Calls CheckRoomStatus.
         * @param request CheckRoomStatusReq message or plain object
         * @param callback Node-style callback called with the error, if any, and CheckRoomStatusRsp
         */
        public checkRoomStatus(request: gsbase.ICheckRoomStatusReq, callback: gsbase.GsRpc.CheckRoomStatusCallback): void;

        /**
         * Calls CheckRoomStatus.
         * @param request CheckRoomStatusReq message or plain object
         * @returns Promise
         */
        public checkRoomStatus(request: gsbase.ICheckRoomStatusReq): Promise<gsbase.CheckRoomStatusRsp>;

        /**
         * Calls GetRoomInfo.
         * @param request GetRoomInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRoomInfoRsp
         */
        public getRoomInfo(request: gsbase.IGetRoomInfoReq, callback: gsbase.GsRpc.GetRoomInfoCallback): void;

        /**
         * Calls GetRoomInfo.
         * @param request GetRoomInfoReq message or plain object
         * @returns Promise
         */
        public getRoomInfo(request: gsbase.IGetRoomInfoReq): Promise<gsbase.GetRoomInfoRsp>;

        /**
         * Calls KickOut.
         * @param request KickOutReq message or plain object
         * @param callback Node-style callback called with the error, if any, and KickOutRsp
         */
        public kickOut(request: gsbase.IKickOutReq, callback: gsbase.GsRpc.KickOutCallback): void;

        /**
         * Calls KickOut.
         * @param request KickOutReq message or plain object
         * @returns Promise
         */
        public kickOut(request: gsbase.IKickOutReq): Promise<gsbase.KickOutRsp>;
    }

    namespace GsRpc {

        /**
         * Callback as used by {@link gsbase.GsRpc#createRoom}.
         * @param error Error, if any
         * @param [response] CreateRoomRsp
         */
        type CreateRoomCallback = (error: (Error|null), response?: gsbase.CreateRoomRsp) => void;

        /**
         * Callback as used by {@link gsbase.GsRpc#dismissRoom}.
         * @param error Error, if any
         * @param [response] DismissRoomRsp
         */
        type DismissRoomCallback = (error: (Error|null), response?: gsbase.DismissRoomRsp) => void;

        /**
         * Callback as used by {@link gsbase.GsRpc#checkRoomStatus}.
         * @param error Error, if any
         * @param [response] CheckRoomStatusRsp
         */
        type CheckRoomStatusCallback = (error: (Error|null), response?: gsbase.CheckRoomStatusRsp) => void;

        /**
         * Callback as used by {@link gsbase.GsRpc#getRoomInfo}.
         * @param error Error, if any
         * @param [response] GetRoomInfoRsp
         */
        type GetRoomInfoCallback = (error: (Error|null), response?: gsbase.GetRoomInfoRsp) => void;

        /**
         * Callback as used by {@link gsbase.GsRpc#kickOut}.
         * @param error Error, if any
         * @param [response] KickOutRsp
         */
        type KickOutCallback = (error: (Error|null), response?: gsbase.KickOutRsp) => void;
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
        constructor(properties?: gsbase.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: gsbase.IEmpty): gsbase.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link gsbase.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link gsbase.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.Empty;

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
        public static fromObject(object: { [k: string]: any }): gsbase.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a JoinRoomReq. */
    interface IJoinRoomReq {

        /** JoinRoomReq roomId */
        roomId?: (string|null);

        /** JoinRoomReq token */
        token?: (string|null);

        /** JoinRoomReq metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents a JoinRoomReq. */
    class JoinRoomReq implements IJoinRoomReq {

        /**
         * Constructs a new JoinRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IJoinRoomReq);

        /** JoinRoomReq roomId. */
        public roomId: string;

        /** JoinRoomReq token. */
        public token: string;

        /** JoinRoomReq metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new JoinRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomReq instance
         */
        public static create(properties?: gsbase.IJoinRoomReq): gsbase.JoinRoomReq;

        /**
         * Encodes the specified JoinRoomReq message. Does not implicitly {@link gsbase.JoinRoomReq.verify|verify} messages.
         * @param message JoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link gsbase.JoinRoomReq.verify|verify} messages.
         * @param message JoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.JoinRoomReq;

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.JoinRoomReq;

        /**
         * Verifies a JoinRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gsbase.JoinRoomReq;

        /**
         * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
         * @param message JoinRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.JoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JoinRoomRsp. */
    interface IJoinRoomRsp {

        /** JoinRoomRsp err */
        err?: (string|null);

        /** JoinRoomRsp room */
        room?: (gsbase.IRoomInfo|null);
    }

    /** Represents a JoinRoomRsp. */
    class JoinRoomRsp implements IJoinRoomRsp {

        /**
         * Constructs a new JoinRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IJoinRoomRsp);

        /** JoinRoomRsp err. */
        public err: string;

        /** JoinRoomRsp room. */
        public room?: (gsbase.IRoomInfo|null);

        /**
         * Creates a new JoinRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomRsp instance
         */
        public static create(properties?: gsbase.IJoinRoomRsp): gsbase.JoinRoomRsp;

        /**
         * Encodes the specified JoinRoomRsp message. Does not implicitly {@link gsbase.JoinRoomRsp.verify|verify} messages.
         * @param message JoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRoomRsp message, length delimited. Does not implicitly {@link gsbase.JoinRoomRsp.verify|verify} messages.
         * @param message JoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.JoinRoomRsp;

        /**
         * Decodes a JoinRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.JoinRoomRsp;

        /**
         * Verifies a JoinRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gsbase.JoinRoomRsp;

        /**
         * Creates a plain object from a JoinRoomRsp message. Also converts values to other types if specified.
         * @param message JoinRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.JoinRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinRoomRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JoinRoomNot. */
    interface IJoinRoomNot {

        /** JoinRoomNot openid */
        openid?: (string|null);

        /** JoinRoomNot room */
        room?: (gsbase.IRoomInfo|null);
    }

    /** Represents a JoinRoomNot. */
    class JoinRoomNot implements IJoinRoomNot {

        /**
         * Constructs a new JoinRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IJoinRoomNot);

        /** JoinRoomNot openid. */
        public openid: string;

        /** JoinRoomNot room. */
        public room?: (gsbase.IRoomInfo|null);

        /**
         * Creates a new JoinRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomNot instance
         */
        public static create(properties?: gsbase.IJoinRoomNot): gsbase.JoinRoomNot;

        /**
         * Encodes the specified JoinRoomNot message. Does not implicitly {@link gsbase.JoinRoomNot.verify|verify} messages.
         * @param message JoinRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IJoinRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRoomNot message, length delimited. Does not implicitly {@link gsbase.JoinRoomNot.verify|verify} messages.
         * @param message JoinRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IJoinRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.JoinRoomNot;

        /**
         * Decodes a JoinRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.JoinRoomNot;

        /**
         * Verifies a JoinRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomNot
         */
        public static fromObject(object: { [k: string]: any }): gsbase.JoinRoomNot;

        /**
         * Creates a plain object from a JoinRoomNot message. Also converts values to other types if specified.
         * @param message JoinRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.JoinRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinRoomNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LeaveRoomReq. */
    interface ILeaveRoomReq {
    }

    /** Represents a LeaveRoomReq. */
    class LeaveRoomReq implements ILeaveRoomReq {

        /**
         * Constructs a new LeaveRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.ILeaveRoomReq);

        /**
         * Creates a new LeaveRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveRoomReq instance
         */
        public static create(properties?: gsbase.ILeaveRoomReq): gsbase.LeaveRoomReq;

        /**
         * Encodes the specified LeaveRoomReq message. Does not implicitly {@link gsbase.LeaveRoomReq.verify|verify} messages.
         * @param message LeaveRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.ILeaveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LeaveRoomReq message, length delimited. Does not implicitly {@link gsbase.LeaveRoomReq.verify|verify} messages.
         * @param message LeaveRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.ILeaveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LeaveRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.LeaveRoomReq;

        /**
         * Decodes a LeaveRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.LeaveRoomReq;

        /**
         * Verifies a LeaveRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gsbase.LeaveRoomReq;

        /**
         * Creates a plain object from a LeaveRoomReq message. Also converts values to other types if specified.
         * @param message LeaveRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.LeaveRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LeaveRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LeaveRoomRsp. */
    interface ILeaveRoomRsp {

        /** LeaveRoomRsp err */
        err?: (string|null);

        /** LeaveRoomRsp openid */
        openid?: (string|null);
    }

    /** Represents a LeaveRoomRsp. */
    class LeaveRoomRsp implements ILeaveRoomRsp {

        /**
         * Constructs a new LeaveRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.ILeaveRoomRsp);

        /** LeaveRoomRsp err. */
        public err: string;

        /** LeaveRoomRsp openid. */
        public openid: string;

        /**
         * Creates a new LeaveRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveRoomRsp instance
         */
        public static create(properties?: gsbase.ILeaveRoomRsp): gsbase.LeaveRoomRsp;

        /**
         * Encodes the specified LeaveRoomRsp message. Does not implicitly {@link gsbase.LeaveRoomRsp.verify|verify} messages.
         * @param message LeaveRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.ILeaveRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LeaveRoomRsp message, length delimited. Does not implicitly {@link gsbase.LeaveRoomRsp.verify|verify} messages.
         * @param message LeaveRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.ILeaveRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LeaveRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.LeaveRoomRsp;

        /**
         * Decodes a LeaveRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.LeaveRoomRsp;

        /**
         * Verifies a LeaveRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gsbase.LeaveRoomRsp;

        /**
         * Creates a plain object from a LeaveRoomRsp message. Also converts values to other types if specified.
         * @param message LeaveRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.LeaveRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LeaveRoomRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LeaveRoomNot. */
    interface ILeaveRoomNot {

        /** LeaveRoomNot plyId */
        plyId?: (string|null);

        /** LeaveRoomNot reason */
        reason?: (gsbase.LeaveRoomNot.Type|null);
    }

    /** Represents a LeaveRoomNot. */
    class LeaveRoomNot implements ILeaveRoomNot {

        /**
         * Constructs a new LeaveRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.ILeaveRoomNot);

        /** LeaveRoomNot plyId. */
        public plyId: string;

        /** LeaveRoomNot reason. */
        public reason: gsbase.LeaveRoomNot.Type;

        /**
         * Creates a new LeaveRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveRoomNot instance
         */
        public static create(properties?: gsbase.ILeaveRoomNot): gsbase.LeaveRoomNot;

        /**
         * Encodes the specified LeaveRoomNot message. Does not implicitly {@link gsbase.LeaveRoomNot.verify|verify} messages.
         * @param message LeaveRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.ILeaveRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LeaveRoomNot message, length delimited. Does not implicitly {@link gsbase.LeaveRoomNot.verify|verify} messages.
         * @param message LeaveRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.ILeaveRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LeaveRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.LeaveRoomNot;

        /**
         * Decodes a LeaveRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.LeaveRoomNot;

        /**
         * Verifies a LeaveRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveRoomNot
         */
        public static fromObject(object: { [k: string]: any }): gsbase.LeaveRoomNot;

        /**
         * Creates a plain object from a LeaveRoomNot message. Also converts values to other types if specified.
         * @param message LeaveRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.LeaveRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LeaveRoomNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace LeaveRoomNot {

        /** Type enum. */
        enum Type {
            Leave = 0,
            Kick = 1
        }
    }

    /** Properties of a DismissNot. */
    interface IDismissNot {

        /** DismissNot msg */
        msg?: (string|null);

        /** DismissNot code */
        code?: (gsbase.DismissNot.Type|null);
    }

    /** Represents a DismissNot. */
    class DismissNot implements IDismissNot {

        /**
         * Constructs a new DismissNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IDismissNot);

        /** DismissNot msg. */
        public msg: string;

        /** DismissNot code. */
        public code: gsbase.DismissNot.Type;

        /**
         * Creates a new DismissNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissNot instance
         */
        public static create(properties?: gsbase.IDismissNot): gsbase.DismissNot;

        /**
         * Encodes the specified DismissNot message. Does not implicitly {@link gsbase.DismissNot.verify|verify} messages.
         * @param message DismissNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IDismissNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissNot message, length delimited. Does not implicitly {@link gsbase.DismissNot.verify|verify} messages.
         * @param message DismissNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IDismissNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.DismissNot;

        /**
         * Decodes a DismissNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.DismissNot;

        /**
         * Verifies a DismissNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissNot
         */
        public static fromObject(object: { [k: string]: any }): gsbase.DismissNot;

        /**
         * Creates a plain object from a DismissNot message. Also converts values to other types if specified.
         * @param message DismissNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.DismissNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DismissNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DismissNot {

        /** Type enum. */
        enum Type {
            GameOverDismiss = 0,
            OwnerDismiss = 1,
            UserDismiss = 2,
            TimeOutDismiss = 3,
            AdminDismiss = 4
        }
    }

    /** Properties of a GsbPing. */
    interface IGsbPing {

        /** GsbPing now */
        now?: (number|Long|null);
    }

    /** Represents a GsbPing. */
    class GsbPing implements IGsbPing {

        /**
         * Constructs a new GsbPing.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IGsbPing);

        /** GsbPing now. */
        public now: (number|Long);

        /**
         * Creates a new GsbPing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GsbPing instance
         */
        public static create(properties?: gsbase.IGsbPing): gsbase.GsbPing;

        /**
         * Encodes the specified GsbPing message. Does not implicitly {@link gsbase.GsbPing.verify|verify} messages.
         * @param message GsbPing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IGsbPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GsbPing message, length delimited. Does not implicitly {@link gsbase.GsbPing.verify|verify} messages.
         * @param message GsbPing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IGsbPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GsbPing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GsbPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.GsbPing;

        /**
         * Decodes a GsbPing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GsbPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.GsbPing;

        /**
         * Verifies a GsbPing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GsbPing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GsbPing
         */
        public static fromObject(object: { [k: string]: any }): gsbase.GsbPing;

        /**
         * Creates a plain object from a GsbPing message. Also converts values to other types if specified.
         * @param message GsbPing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.GsbPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GsbPing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GsbPing
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GsbPong. */
    interface IGsbPong {

        /** GsbPong err */
        err?: (string|null);

        /** GsbPong cliNow */
        cliNow?: (number|Long|null);

        /** GsbPong now */
        now?: (number|Long|null);
    }

    /** Represents a GsbPong. */
    class GsbPong implements IGsbPong {

        /**
         * Constructs a new GsbPong.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IGsbPong);

        /** GsbPong err. */
        public err: string;

        /** GsbPong cliNow. */
        public cliNow: (number|Long);

        /** GsbPong now. */
        public now: (number|Long);

        /**
         * Creates a new GsbPong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GsbPong instance
         */
        public static create(properties?: gsbase.IGsbPong): gsbase.GsbPong;

        /**
         * Encodes the specified GsbPong message. Does not implicitly {@link gsbase.GsbPong.verify|verify} messages.
         * @param message GsbPong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IGsbPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GsbPong message, length delimited. Does not implicitly {@link gsbase.GsbPong.verify|verify} messages.
         * @param message GsbPong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IGsbPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GsbPong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GsbPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.GsbPong;

        /**
         * Decodes a GsbPong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GsbPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.GsbPong;

        /**
         * Verifies a GsbPong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GsbPong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GsbPong
         */
        public static fromObject(object: { [k: string]: any }): gsbase.GsbPong;

        /**
         * Creates a plain object from a GsbPong message. Also converts values to other types if specified.
         * @param message GsbPong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.GsbPong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GsbPong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GsbPong
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ChatType enum. */
    enum ChatType {
        Text = 0,
        Emoji = 1
    }

    /** Properties of a ChatReq. */
    interface IChatReq {

        /** ChatReq type */
        type?: (gsbase.ChatType|null);

        /** ChatReq content */
        content?: (string|null);

        /** ChatReq to */
        to?: (string|null);
    }

    /** Represents a ChatReq. */
    class ChatReq implements IChatReq {

        /**
         * Constructs a new ChatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IChatReq);

        /** ChatReq type. */
        public type: gsbase.ChatType;

        /** ChatReq content. */
        public content: string;

        /** ChatReq to. */
        public to: string;

        /**
         * Creates a new ChatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatReq instance
         */
        public static create(properties?: gsbase.IChatReq): gsbase.ChatReq;

        /**
         * Encodes the specified ChatReq message. Does not implicitly {@link gsbase.ChatReq.verify|verify} messages.
         * @param message ChatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IChatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatReq message, length delimited. Does not implicitly {@link gsbase.ChatReq.verify|verify} messages.
         * @param message ChatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IChatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ChatReq;

        /**
         * Decodes a ChatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ChatReq;

        /**
         * Verifies a ChatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatReq
         */
        public static fromObject(object: { [k: string]: any }): gsbase.ChatReq;

        /**
         * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
         * @param message ChatReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.ChatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatRsp. */
    interface IChatRsp {

        /** ChatRsp err */
        err?: (string|null);
    }

    /** Represents a ChatRsp. */
    class ChatRsp implements IChatRsp {

        /**
         * Constructs a new ChatRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IChatRsp);

        /** ChatRsp err. */
        public err: string;

        /**
         * Creates a new ChatRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatRsp instance
         */
        public static create(properties?: gsbase.IChatRsp): gsbase.ChatRsp;

        /**
         * Encodes the specified ChatRsp message. Does not implicitly {@link gsbase.ChatRsp.verify|verify} messages.
         * @param message ChatRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IChatRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatRsp message, length delimited. Does not implicitly {@link gsbase.ChatRsp.verify|verify} messages.
         * @param message ChatRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IChatRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ChatRsp;

        /**
         * Decodes a ChatRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ChatRsp;

        /**
         * Verifies a ChatRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatRsp
         */
        public static fromObject(object: { [k: string]: any }): gsbase.ChatRsp;

        /**
         * Creates a plain object from a ChatRsp message. Also converts values to other types if specified.
         * @param message ChatRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.ChatRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatNot. */
    interface IChatNot {

        /** ChatNot from */
        from?: (string|null);

        /** ChatNot to */
        to?: (string|null);

        /** ChatNot type */
        type?: (gsbase.ChatType|null);

        /** ChatNot content */
        content?: (string|null);
    }

    /** Represents a ChatNot. */
    class ChatNot implements IChatNot {

        /**
         * Constructs a new ChatNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IChatNot);

        /** ChatNot from. */
        public from: string;

        /** ChatNot to. */
        public to: string;

        /** ChatNot type. */
        public type: gsbase.ChatType;

        /** ChatNot content. */
        public content: string;

        /**
         * Creates a new ChatNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatNot instance
         */
        public static create(properties?: gsbase.IChatNot): gsbase.ChatNot;

        /**
         * Encodes the specified ChatNot message. Does not implicitly {@link gsbase.ChatNot.verify|verify} messages.
         * @param message ChatNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IChatNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatNot message, length delimited. Does not implicitly {@link gsbase.ChatNot.verify|verify} messages.
         * @param message ChatNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IChatNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ChatNot;

        /**
         * Decodes a ChatNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ChatNot;

        /**
         * Verifies a ChatNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatNot
         */
        public static fromObject(object: { [k: string]: any }): gsbase.ChatNot;

        /**
         * Creates a plain object from a ChatNot message. Also converts values to other types if specified.
         * @param message ChatNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.ChatNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateRoomReq. */
    interface ICreateRoomReq {

        /** CreateRoomReq roomId */
        roomId?: (string|null);

        /** CreateRoomReq properties */
        properties?: (string|null);

        /** CreateRoomReq owner */
        owner?: (string|null);

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
        constructor(properties?: gsbase.ICreateRoomReq);

        /** CreateRoomReq roomId. */
        public roomId: string;

        /** CreateRoomReq properties. */
        public properties: string;

        /** CreateRoomReq owner. */
        public owner: string;

        /** CreateRoomReq labels. */
        public labels: string[];

        /** CreateRoomReq aliases. */
        public aliases: string[];

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomReq instance
         */
        public static create(properties?: gsbase.ICreateRoomReq): gsbase.CreateRoomReq;

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link gsbase.CreateRoomReq.verify|verify} messages.
         * @param message CreateRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link gsbase.CreateRoomReq.verify|verify} messages.
         * @param message CreateRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.CreateRoomReq;

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.CreateRoomReq;

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
        public static fromObject(object: { [k: string]: any }): gsbase.CreateRoomReq;

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @param message CreateRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.CreateRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a CreateRoomRsp. */
    interface ICreateRoomRsp {

        /** CreateRoomRsp err */
        err?: (string|null);

        /** CreateRoomRsp serverId */
        serverId?: (string|null);

        /** CreateRoomRsp roomId */
        roomId?: (string|null);

        /** CreateRoomRsp gameGid */
        gameGid?: (string|null);

        /** CreateRoomRsp metadata */
        metadata?: (string|null);

        /** CreateRoomRsp creator */
        creator?: (string|null);

        /** CreateRoomRsp createAt */
        createAt?: (number|Long|null);

        /** CreateRoomRsp minPlayerNum */
        minPlayerNum?: (number|null);

        /** CreateRoomRsp maxPlayerNum */
        maxPlayerNum?: (number|null);

        /** CreateRoomRsp labels */
        labels?: (string[]|null);

        /** CreateRoomRsp aliases */
        aliases?: (string[]|null);

        /** CreateRoomRsp players */
        players?: (gsbase.IGamePlayerStats[]|null);

        /** CreateRoomRsp platAid */
        platAid?: (number|null);

        /** CreateRoomRsp shareCode */
        shareCode?: (string|null);

        /** CreateRoomRsp ruleId */
        ruleId?: (string|null);

        /** CreateRoomRsp type */
        type?: (gsbase.RoomType|null);

        /** CreateRoomRsp stats */
        stats?: (string|null);
    }

    /** Represents a CreateRoomRsp. */
    class CreateRoomRsp implements ICreateRoomRsp {

        /**
         * Constructs a new CreateRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.ICreateRoomRsp);

        /** CreateRoomRsp err. */
        public err: string;

        /** CreateRoomRsp serverId. */
        public serverId: string;

        /** CreateRoomRsp roomId. */
        public roomId: string;

        /** CreateRoomRsp gameGid. */
        public gameGid: string;

        /** CreateRoomRsp metadata. */
        public metadata: string;

        /** CreateRoomRsp creator. */
        public creator: string;

        /** CreateRoomRsp createAt. */
        public createAt: (number|Long);

        /** CreateRoomRsp minPlayerNum. */
        public minPlayerNum: number;

        /** CreateRoomRsp maxPlayerNum. */
        public maxPlayerNum: number;

        /** CreateRoomRsp labels. */
        public labels: string[];

        /** CreateRoomRsp aliases. */
        public aliases: string[];

        /** CreateRoomRsp players. */
        public players: gsbase.IGamePlayerStats[];

        /** CreateRoomRsp platAid. */
        public platAid: number;

        /** CreateRoomRsp shareCode. */
        public shareCode: string;

        /** CreateRoomRsp ruleId. */
        public ruleId: string;

        /** CreateRoomRsp type. */
        public type: gsbase.RoomType;

        /** CreateRoomRsp stats. */
        public stats: string;

        /**
         * Creates a new CreateRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomRsp instance
         */
        public static create(properties?: gsbase.ICreateRoomRsp): gsbase.CreateRoomRsp;

        /**
         * Encodes the specified CreateRoomRsp message. Does not implicitly {@link gsbase.CreateRoomRsp.verify|verify} messages.
         * @param message CreateRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.ICreateRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomRsp message, length delimited. Does not implicitly {@link gsbase.CreateRoomRsp.verify|verify} messages.
         * @param message CreateRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.ICreateRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.CreateRoomRsp;

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.CreateRoomRsp;

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
        public static fromObject(object: { [k: string]: any }): gsbase.CreateRoomRsp;

        /**
         * Creates a plain object from a CreateRoomRsp message. Also converts values to other types if specified.
         * @param message CreateRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.CreateRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a DismissRoomReq. */
    interface IDismissRoomReq {

        /** DismissRoomReq openid */
        openid?: (string|null);

        /** DismissRoomReq roomId */
        roomId?: (string|null);
    }

    /** Represents a DismissRoomReq. */
    class DismissRoomReq implements IDismissRoomReq {

        /**
         * Constructs a new DismissRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IDismissRoomReq);

        /** DismissRoomReq openid. */
        public openid: string;

        /** DismissRoomReq roomId. */
        public roomId: string;

        /**
         * Creates a new DismissRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissRoomReq instance
         */
        public static create(properties?: gsbase.IDismissRoomReq): gsbase.DismissRoomReq;

        /**
         * Encodes the specified DismissRoomReq message. Does not implicitly {@link gsbase.DismissRoomReq.verify|verify} messages.
         * @param message DismissRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IDismissRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissRoomReq message, length delimited. Does not implicitly {@link gsbase.DismissRoomReq.verify|verify} messages.
         * @param message DismissRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IDismissRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.DismissRoomReq;

        /**
         * Decodes a DismissRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.DismissRoomReq;

        /**
         * Verifies a DismissRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissRoomReq
         */
        public static fromObject(object: { [k: string]: any }): gsbase.DismissRoomReq;

        /**
         * Creates a plain object from a DismissRoomReq message. Also converts values to other types if specified.
         * @param message DismissRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.DismissRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DismissRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DismissRoomRsp. */
    interface IDismissRoomRsp {

        /** DismissRoomRsp err */
        err?: (string|null);
    }

    /** Represents a DismissRoomRsp. */
    class DismissRoomRsp implements IDismissRoomRsp {

        /**
         * Constructs a new DismissRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IDismissRoomRsp);

        /** DismissRoomRsp err. */
        public err: string;

        /**
         * Creates a new DismissRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissRoomRsp instance
         */
        public static create(properties?: gsbase.IDismissRoomRsp): gsbase.DismissRoomRsp;

        /**
         * Encodes the specified DismissRoomRsp message. Does not implicitly {@link gsbase.DismissRoomRsp.verify|verify} messages.
         * @param message DismissRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IDismissRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissRoomRsp message, length delimited. Does not implicitly {@link gsbase.DismissRoomRsp.verify|verify} messages.
         * @param message DismissRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IDismissRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.DismissRoomRsp;

        /**
         * Decodes a DismissRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.DismissRoomRsp;

        /**
         * Verifies a DismissRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): gsbase.DismissRoomRsp;

        /**
         * Creates a plain object from a DismissRoomRsp message. Also converts values to other types if specified.
         * @param message DismissRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.DismissRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DismissRoomRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo roomId */
        roomId?: (string|null);

        /** RoomInfo matchCode */
        matchCode?: (string|null);

        /** RoomInfo metadata */
        metadata?: (string|null);

        /** RoomInfo players */
        players?: (gsbase.IGamePlayerStats[]|null);

        /** RoomInfo owner */
        owner?: (string|null);

        /** RoomInfo createAt */
        createAt?: (number|Long|null);

        /** RoomInfo minPlayerNum */
        minPlayerNum?: (number|null);

        /** RoomInfo maxPlayerNum */
        maxPlayerNum?: (number|null);

        /** RoomInfo gameGid */
        gameGid?: (string|null);

        /** RoomInfo serverId */
        serverId?: (string|null);

        /** RoomInfo labels */
        labels?: (string[]|null);

        /** RoomInfo aliases */
        aliases?: (string[]|null);

        /** RoomInfo platAid */
        platAid?: (number|null);

        /** RoomInfo shareCode */
        shareCode?: (string|null);

        /** RoomInfo type */
        type?: (gsbase.RoomType|null);

        /** RoomInfo stats */
        stats?: (string|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IRoomInfo);

        /** RoomInfo roomId. */
        public roomId: string;

        /** RoomInfo matchCode. */
        public matchCode: string;

        /** RoomInfo metadata. */
        public metadata: string;

        /** RoomInfo players. */
        public players: gsbase.IGamePlayerStats[];

        /** RoomInfo owner. */
        public owner: string;

        /** RoomInfo createAt. */
        public createAt: (number|Long);

        /** RoomInfo minPlayerNum. */
        public minPlayerNum: number;

        /** RoomInfo maxPlayerNum. */
        public maxPlayerNum: number;

        /** RoomInfo gameGid. */
        public gameGid: string;

        /** RoomInfo serverId. */
        public serverId: string;

        /** RoomInfo labels. */
        public labels: string[];

        /** RoomInfo aliases. */
        public aliases: string[];

        /** RoomInfo platAid. */
        public platAid: number;

        /** RoomInfo shareCode. */
        public shareCode: string;

        /** RoomInfo type. */
        public type: gsbase.RoomType;

        /** RoomInfo stats. */
        public stats: string;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: gsbase.IRoomInfo): gsbase.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gsbase.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link gsbase.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.RoomInfo;

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
        public static fromObject(object: { [k: string]: any }): gsbase.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a CheckRoomStatusReq. */
    interface ICheckRoomStatusReq {

        /** CheckRoomStatusReq roomId */
        roomId?: (string|null);
    }

    /** Represents a CheckRoomStatusReq. */
    class CheckRoomStatusReq implements ICheckRoomStatusReq {

        /**
         * Constructs a new CheckRoomStatusReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.ICheckRoomStatusReq);

        /** CheckRoomStatusReq roomId. */
        public roomId: string;

        /**
         * Creates a new CheckRoomStatusReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckRoomStatusReq instance
         */
        public static create(properties?: gsbase.ICheckRoomStatusReq): gsbase.CheckRoomStatusReq;

        /**
         * Encodes the specified CheckRoomStatusReq message. Does not implicitly {@link gsbase.CheckRoomStatusReq.verify|verify} messages.
         * @param message CheckRoomStatusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.ICheckRoomStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckRoomStatusReq message, length delimited. Does not implicitly {@link gsbase.CheckRoomStatusReq.verify|verify} messages.
         * @param message CheckRoomStatusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.ICheckRoomStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckRoomStatusReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckRoomStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.CheckRoomStatusReq;

        /**
         * Decodes a CheckRoomStatusReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckRoomStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.CheckRoomStatusReq;

        /**
         * Verifies a CheckRoomStatusReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckRoomStatusReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckRoomStatusReq
         */
        public static fromObject(object: { [k: string]: any }): gsbase.CheckRoomStatusReq;

        /**
         * Creates a plain object from a CheckRoomStatusReq message. Also converts values to other types if specified.
         * @param message CheckRoomStatusReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.CheckRoomStatusReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckRoomStatusReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CheckRoomStatusReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CheckRoomStatusRsp. */
    interface ICheckRoomStatusRsp {

        /** CheckRoomStatusRsp exists */
        exists?: (boolean|null);
    }

    /** Represents a CheckRoomStatusRsp. */
    class CheckRoomStatusRsp implements ICheckRoomStatusRsp {

        /**
         * Constructs a new CheckRoomStatusRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.ICheckRoomStatusRsp);

        /** CheckRoomStatusRsp exists. */
        public exists: boolean;

        /**
         * Creates a new CheckRoomStatusRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckRoomStatusRsp instance
         */
        public static create(properties?: gsbase.ICheckRoomStatusRsp): gsbase.CheckRoomStatusRsp;

        /**
         * Encodes the specified CheckRoomStatusRsp message. Does not implicitly {@link gsbase.CheckRoomStatusRsp.verify|verify} messages.
         * @param message CheckRoomStatusRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.ICheckRoomStatusRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckRoomStatusRsp message, length delimited. Does not implicitly {@link gsbase.CheckRoomStatusRsp.verify|verify} messages.
         * @param message CheckRoomStatusRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.ICheckRoomStatusRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckRoomStatusRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckRoomStatusRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.CheckRoomStatusRsp;

        /**
         * Decodes a CheckRoomStatusRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckRoomStatusRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.CheckRoomStatusRsp;

        /**
         * Verifies a CheckRoomStatusRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckRoomStatusRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckRoomStatusRsp
         */
        public static fromObject(object: { [k: string]: any }): gsbase.CheckRoomStatusRsp;

        /**
         * Creates a plain object from a CheckRoomStatusRsp message. Also converts values to other types if specified.
         * @param message CheckRoomStatusRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.CheckRoomStatusRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckRoomStatusRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CheckRoomStatusRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetRoomInfoReq. */
    interface IGetRoomInfoReq {

        /** GetRoomInfoReq roomId */
        roomId?: (string|null);
    }

    /** Represents a GetRoomInfoReq. */
    class GetRoomInfoReq implements IGetRoomInfoReq {

        /**
         * Constructs a new GetRoomInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IGetRoomInfoReq);

        /** GetRoomInfoReq roomId. */
        public roomId: string;

        /**
         * Creates a new GetRoomInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomInfoReq instance
         */
        public static create(properties?: gsbase.IGetRoomInfoReq): gsbase.GetRoomInfoReq;

        /**
         * Encodes the specified GetRoomInfoReq message. Does not implicitly {@link gsbase.GetRoomInfoReq.verify|verify} messages.
         * @param message GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomInfoReq message, length delimited. Does not implicitly {@link gsbase.GetRoomInfoReq.verify|verify} messages.
         * @param message GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IGetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.GetRoomInfoReq;

        /**
         * Decodes a GetRoomInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.GetRoomInfoReq;

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
        public static fromObject(object: { [k: string]: any }): gsbase.GetRoomInfoReq;

        /**
         * Creates a plain object from a GetRoomInfoReq message. Also converts values to other types if specified.
         * @param message GetRoomInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.GetRoomInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** GetRoomInfoRsp room */
        room?: (gsbase.IRoomInfo|null);

        /** GetRoomInfoRsp err */
        err?: (string|null);
    }

    /** Represents a GetRoomInfoRsp. */
    class GetRoomInfoRsp implements IGetRoomInfoRsp {

        /**
         * Constructs a new GetRoomInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IGetRoomInfoRsp);

        /** GetRoomInfoRsp room. */
        public room?: (gsbase.IRoomInfo|null);

        /** GetRoomInfoRsp err. */
        public err: string;

        /**
         * Creates a new GetRoomInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoomInfoRsp instance
         */
        public static create(properties?: gsbase.IGetRoomInfoRsp): gsbase.GetRoomInfoRsp;

        /**
         * Encodes the specified GetRoomInfoRsp message. Does not implicitly {@link gsbase.GetRoomInfoRsp.verify|verify} messages.
         * @param message GetRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoomInfoRsp message, length delimited. Does not implicitly {@link gsbase.GetRoomInfoRsp.verify|verify} messages.
         * @param message GetRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IGetRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.GetRoomInfoRsp;

        /**
         * Decodes a GetRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.GetRoomInfoRsp;

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
        public static fromObject(object: { [k: string]: any }): gsbase.GetRoomInfoRsp;

        /**
         * Creates a plain object from a GetRoomInfoRsp message. Also converts values to other types if specified.
         * @param message GetRoomInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.GetRoomInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of an UpdateRoomInfoReq. */
    interface IUpdateRoomInfoReq {

        /** UpdateRoomInfoReq roomId */
        roomId?: (string|null);

        /** UpdateRoomInfoReq properties */
        properties?: ({ [k: string]: string }|null);
    }

    /** Represents an UpdateRoomInfoReq. */
    class UpdateRoomInfoReq implements IUpdateRoomInfoReq {

        /**
         * Constructs a new UpdateRoomInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IUpdateRoomInfoReq);

        /** UpdateRoomInfoReq roomId. */
        public roomId: string;

        /** UpdateRoomInfoReq properties. */
        public properties: { [k: string]: string };

        /**
         * Creates a new UpdateRoomInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRoomInfoReq instance
         */
        public static create(properties?: gsbase.IUpdateRoomInfoReq): gsbase.UpdateRoomInfoReq;

        /**
         * Encodes the specified UpdateRoomInfoReq message. Does not implicitly {@link gsbase.UpdateRoomInfoReq.verify|verify} messages.
         * @param message UpdateRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IUpdateRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRoomInfoReq message, length delimited. Does not implicitly {@link gsbase.UpdateRoomInfoReq.verify|verify} messages.
         * @param message UpdateRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IUpdateRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRoomInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.UpdateRoomInfoReq;

        /**
         * Decodes an UpdateRoomInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.UpdateRoomInfoReq;

        /**
         * Verifies an UpdateRoomInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRoomInfoReq
         */
        public static fromObject(object: { [k: string]: any }): gsbase.UpdateRoomInfoReq;

        /**
         * Creates a plain object from an UpdateRoomInfoReq message. Also converts values to other types if specified.
         * @param message UpdateRoomInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.UpdateRoomInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRoomInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateRoomInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateRoomInfoRsp. */
    interface IUpdateRoomInfoRsp {

        /** UpdateRoomInfoRsp err */
        err?: (string|null);
    }

    /** Represents an UpdateRoomInfoRsp. */
    class UpdateRoomInfoRsp implements IUpdateRoomInfoRsp {

        /**
         * Constructs a new UpdateRoomInfoRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IUpdateRoomInfoRsp);

        /** UpdateRoomInfoRsp err. */
        public err: string;

        /**
         * Creates a new UpdateRoomInfoRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRoomInfoRsp instance
         */
        public static create(properties?: gsbase.IUpdateRoomInfoRsp): gsbase.UpdateRoomInfoRsp;

        /**
         * Encodes the specified UpdateRoomInfoRsp message. Does not implicitly {@link gsbase.UpdateRoomInfoRsp.verify|verify} messages.
         * @param message UpdateRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IUpdateRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRoomInfoRsp message, length delimited. Does not implicitly {@link gsbase.UpdateRoomInfoRsp.verify|verify} messages.
         * @param message UpdateRoomInfoRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IUpdateRoomInfoRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRoomInfoRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.UpdateRoomInfoRsp;

        /**
         * Decodes an UpdateRoomInfoRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRoomInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.UpdateRoomInfoRsp;

        /**
         * Verifies an UpdateRoomInfoRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRoomInfoRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRoomInfoRsp
         */
        public static fromObject(object: { [k: string]: any }): gsbase.UpdateRoomInfoRsp;

        /**
         * Creates a plain object from an UpdateRoomInfoRsp message. Also converts values to other types if specified.
         * @param message UpdateRoomInfoRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.UpdateRoomInfoRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRoomInfoRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateRoomInfoRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SystemMessage. */
    interface ISystemMessage {

        /** SystemMessage code */
        code?: (number|null);

        /** SystemMessage err */
        err?: (string|null);

        /** SystemMessage request */
        request?: (string|null);
    }

    /** Represents a SystemMessage. */
    class SystemMessage implements ISystemMessage {

        /**
         * Constructs a new SystemMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.ISystemMessage);

        /** SystemMessage code. */
        public code: number;

        /** SystemMessage err. */
        public err: string;

        /** SystemMessage request. */
        public request: string;

        /**
         * Creates a new SystemMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SystemMessage instance
         */
        public static create(properties?: gsbase.ISystemMessage): gsbase.SystemMessage;

        /**
         * Encodes the specified SystemMessage message. Does not implicitly {@link gsbase.SystemMessage.verify|verify} messages.
         * @param message SystemMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.ISystemMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SystemMessage message, length delimited. Does not implicitly {@link gsbase.SystemMessage.verify|verify} messages.
         * @param message SystemMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.ISystemMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SystemMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SystemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.SystemMessage;

        /**
         * Decodes a SystemMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SystemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.SystemMessage;

        /**
         * Verifies a SystemMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SystemMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SystemMessage
         */
        public static fromObject(object: { [k: string]: any }): gsbase.SystemMessage;

        /**
         * Creates a plain object from a SystemMessage message. Also converts values to other types if specified.
         * @param message SystemMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.SystemMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SystemMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SystemMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameEvent. */
    interface IGameEvent {

        /** GameEvent roomId */
        roomId?: (string|null);

        /** GameEvent gameGid */
        gameGid?: (string|null);

        /** GameEvent platAid */
        platAid?: (number|null);

        /** GameEvent ruleId */
        ruleId?: (string|null);

        /** GameEvent matchId */
        matchId?: (string|null);

        /** GameEvent eventId */
        eventId?: (string|null);

        /** GameEvent eventParams */
        eventParams?: ({ [k: string]: string }|null);

        /** GameEvent createAt */
        createAt?: (number|Long|null);
    }

    /** Represents a GameEvent. */
    class GameEvent implements IGameEvent {

        /**
         * Constructs a new GameEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IGameEvent);

        /** GameEvent roomId. */
        public roomId: string;

        /** GameEvent gameGid. */
        public gameGid: string;

        /** GameEvent platAid. */
        public platAid: number;

        /** GameEvent ruleId. */
        public ruleId: string;

        /** GameEvent matchId. */
        public matchId: string;

        /** GameEvent eventId. */
        public eventId: string;

        /** GameEvent eventParams. */
        public eventParams: { [k: string]: string };

        /** GameEvent createAt. */
        public createAt: (number|Long);

        /**
         * Creates a new GameEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameEvent instance
         */
        public static create(properties?: gsbase.IGameEvent): gsbase.GameEvent;

        /**
         * Encodes the specified GameEvent message. Does not implicitly {@link gsbase.GameEvent.verify|verify} messages.
         * @param message GameEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameEvent message, length delimited. Does not implicitly {@link gsbase.GameEvent.verify|verify} messages.
         * @param message GameEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.GameEvent;

        /**
         * Decodes a GameEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.GameEvent;

        /**
         * Verifies a GameEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameEvent
         */
        public static fromObject(object: { [k: string]: any }): gsbase.GameEvent;

        /**
         * Creates a plain object from a GameEvent message. Also converts values to other types if specified.
         * @param message GameEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.GameEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerEvent. */
    interface IPlayerEvent {

        /** PlayerEvent roomId */
        roomId?: (string|null);

        /** PlayerEvent gameGid */
        gameGid?: (string|null);

        /** PlayerEvent platAid */
        platAid?: (number|null);

        /** PlayerEvent eventId */
        eventId?: (string|null);

        /** PlayerEvent openid */
        openid?: (string|null);

        /** PlayerEvent eventParams */
        eventParams?: ({ [k: string]: string }|null);

        /** PlayerEvent ruleId */
        ruleId?: (string|null);

        /** PlayerEvent matchId */
        matchId?: (string|null);

        /** PlayerEvent createAt */
        createAt?: (number|Long|null);
    }

    /** Represents a PlayerEvent. */
    class PlayerEvent implements IPlayerEvent {

        /**
         * Constructs a new PlayerEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IPlayerEvent);

        /** PlayerEvent roomId. */
        public roomId: string;

        /** PlayerEvent gameGid. */
        public gameGid: string;

        /** PlayerEvent platAid. */
        public platAid: number;

        /** PlayerEvent eventId. */
        public eventId: string;

        /** PlayerEvent openid. */
        public openid: string;

        /** PlayerEvent eventParams. */
        public eventParams: { [k: string]: string };

        /** PlayerEvent ruleId. */
        public ruleId: string;

        /** PlayerEvent matchId. */
        public matchId: string;

        /** PlayerEvent createAt. */
        public createAt: (number|Long);

        /**
         * Creates a new PlayerEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerEvent instance
         */
        public static create(properties?: gsbase.IPlayerEvent): gsbase.PlayerEvent;

        /**
         * Encodes the specified PlayerEvent message. Does not implicitly {@link gsbase.PlayerEvent.verify|verify} messages.
         * @param message PlayerEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IPlayerEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerEvent message, length delimited. Does not implicitly {@link gsbase.PlayerEvent.verify|verify} messages.
         * @param message PlayerEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IPlayerEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.PlayerEvent;

        /**
         * Decodes a PlayerEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.PlayerEvent;

        /**
         * Verifies a PlayerEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerEvent
         */
        public static fromObject(object: { [k: string]: any }): gsbase.PlayerEvent;

        /**
         * Creates a plain object from a PlayerEvent message. Also converts values to other types if specified.
         * @param message PlayerEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.PlayerEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ApplyDismissReq. */
    interface IApplyDismissReq {
    }

    /** Represents an ApplyDismissReq. */
    class ApplyDismissReq implements IApplyDismissReq {

        /**
         * Constructs a new ApplyDismissReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IApplyDismissReq);

        /**
         * Creates a new ApplyDismissReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApplyDismissReq instance
         */
        public static create(properties?: gsbase.IApplyDismissReq): gsbase.ApplyDismissReq;

        /**
         * Encodes the specified ApplyDismissReq message. Does not implicitly {@link gsbase.ApplyDismissReq.verify|verify} messages.
         * @param message ApplyDismissReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IApplyDismissReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApplyDismissReq message, length delimited. Does not implicitly {@link gsbase.ApplyDismissReq.verify|verify} messages.
         * @param message ApplyDismissReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IApplyDismissReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyDismissReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyDismissReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ApplyDismissReq;

        /**
         * Decodes an ApplyDismissReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplyDismissReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ApplyDismissReq;

        /**
         * Verifies an ApplyDismissReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApplyDismissReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApplyDismissReq
         */
        public static fromObject(object: { [k: string]: any }): gsbase.ApplyDismissReq;

        /**
         * Creates a plain object from an ApplyDismissReq message. Also converts values to other types if specified.
         * @param message ApplyDismissReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.ApplyDismissReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApplyDismissReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ApplyDismissReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ApplyDismissRsp. */
    interface IApplyDismissRsp {

        /** ApplyDismissRsp err */
        err?: (string|null);
    }

    /** Represents an ApplyDismissRsp. */
    class ApplyDismissRsp implements IApplyDismissRsp {

        /**
         * Constructs a new ApplyDismissRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IApplyDismissRsp);

        /** ApplyDismissRsp err. */
        public err: string;

        /**
         * Creates a new ApplyDismissRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApplyDismissRsp instance
         */
        public static create(properties?: gsbase.IApplyDismissRsp): gsbase.ApplyDismissRsp;

        /**
         * Encodes the specified ApplyDismissRsp message. Does not implicitly {@link gsbase.ApplyDismissRsp.verify|verify} messages.
         * @param message ApplyDismissRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IApplyDismissRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApplyDismissRsp message, length delimited. Does not implicitly {@link gsbase.ApplyDismissRsp.verify|verify} messages.
         * @param message ApplyDismissRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IApplyDismissRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyDismissRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyDismissRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ApplyDismissRsp;

        /**
         * Decodes an ApplyDismissRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplyDismissRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ApplyDismissRsp;

        /**
         * Verifies an ApplyDismissRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApplyDismissRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApplyDismissRsp
         */
        public static fromObject(object: { [k: string]: any }): gsbase.ApplyDismissRsp;

        /**
         * Creates a plain object from an ApplyDismissRsp message. Also converts values to other types if specified.
         * @param message ApplyDismissRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.ApplyDismissRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApplyDismissRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ApplyDismissRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ApplyDismissNot. */
    interface IApplyDismissNot {

        /** ApplyDismissNot openid */
        openid?: (string|null);

        /** ApplyDismissNot applyTime */
        applyTime?: (number|Long|null);

        /** ApplyDismissNot expire */
        expire?: (number|Long|null);

        /** ApplyDismissNot status */
        status?: (gsbase.ApplyDismissNot.IStatus[]|null);
    }

    /** Represents an ApplyDismissNot. */
    class ApplyDismissNot implements IApplyDismissNot {

        /**
         * Constructs a new ApplyDismissNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IApplyDismissNot);

        /** ApplyDismissNot openid. */
        public openid: string;

        /** ApplyDismissNot applyTime. */
        public applyTime: (number|Long);

        /** ApplyDismissNot expire. */
        public expire: (number|Long);

        /** ApplyDismissNot status. */
        public status: gsbase.ApplyDismissNot.IStatus[];

        /**
         * Creates a new ApplyDismissNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApplyDismissNot instance
         */
        public static create(properties?: gsbase.IApplyDismissNot): gsbase.ApplyDismissNot;

        /**
         * Encodes the specified ApplyDismissNot message. Does not implicitly {@link gsbase.ApplyDismissNot.verify|verify} messages.
         * @param message ApplyDismissNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IApplyDismissNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApplyDismissNot message, length delimited. Does not implicitly {@link gsbase.ApplyDismissNot.verify|verify} messages.
         * @param message ApplyDismissNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IApplyDismissNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyDismissNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyDismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ApplyDismissNot;

        /**
         * Decodes an ApplyDismissNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplyDismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ApplyDismissNot;

        /**
         * Verifies an ApplyDismissNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApplyDismissNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApplyDismissNot
         */
        public static fromObject(object: { [k: string]: any }): gsbase.ApplyDismissNot;

        /**
         * Creates a plain object from an ApplyDismissNot message. Also converts values to other types if specified.
         * @param message ApplyDismissNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.ApplyDismissNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApplyDismissNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ApplyDismissNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ApplyDismissNot {

        /** Properties of a Status. */
        interface IStatus {

            /** Status openid */
            openid?: (string|null);

            /** Status opTime */
            opTime?: (number|Long|null);

            /** Status reply */
            reply?: (boolean|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: gsbase.ApplyDismissNot.IStatus);

            /** Status openid. */
            public openid: string;

            /** Status opTime. */
            public opTime: (number|Long);

            /** Status reply. */
            public reply: boolean;

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: gsbase.ApplyDismissNot.IStatus): gsbase.ApplyDismissNot.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link gsbase.ApplyDismissNot.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gsbase.ApplyDismissNot.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link gsbase.ApplyDismissNot.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gsbase.ApplyDismissNot.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ApplyDismissNot.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ApplyDismissNot.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): gsbase.ApplyDismissNot.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gsbase.ApplyDismissNot.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ReplyDismissReq. */
    interface IReplyDismissReq {

        /** ReplyDismissReq reply */
        reply?: (boolean|null);
    }

    /** Represents a ReplyDismissReq. */
    class ReplyDismissReq implements IReplyDismissReq {

        /**
         * Constructs a new ReplyDismissReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IReplyDismissReq);

        /** ReplyDismissReq reply. */
        public reply: boolean;

        /**
         * Creates a new ReplyDismissReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplyDismissReq instance
         */
        public static create(properties?: gsbase.IReplyDismissReq): gsbase.ReplyDismissReq;

        /**
         * Encodes the specified ReplyDismissReq message. Does not implicitly {@link gsbase.ReplyDismissReq.verify|verify} messages.
         * @param message ReplyDismissReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IReplyDismissReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplyDismissReq message, length delimited. Does not implicitly {@link gsbase.ReplyDismissReq.verify|verify} messages.
         * @param message ReplyDismissReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IReplyDismissReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplyDismissReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplyDismissReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ReplyDismissReq;

        /**
         * Decodes a ReplyDismissReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplyDismissReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ReplyDismissReq;

        /**
         * Verifies a ReplyDismissReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplyDismissReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplyDismissReq
         */
        public static fromObject(object: { [k: string]: any }): gsbase.ReplyDismissReq;

        /**
         * Creates a plain object from a ReplyDismissReq message. Also converts values to other types if specified.
         * @param message ReplyDismissReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.ReplyDismissReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplyDismissReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplyDismissReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReplyDismissRsp. */
    interface IReplyDismissRsp {

        /** ReplyDismissRsp err */
        err?: (string|null);
    }

    /** Represents a ReplyDismissRsp. */
    class ReplyDismissRsp implements IReplyDismissRsp {

        /**
         * Constructs a new ReplyDismissRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IReplyDismissRsp);

        /** ReplyDismissRsp err. */
        public err: string;

        /**
         * Creates a new ReplyDismissRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplyDismissRsp instance
         */
        public static create(properties?: gsbase.IReplyDismissRsp): gsbase.ReplyDismissRsp;

        /**
         * Encodes the specified ReplyDismissRsp message. Does not implicitly {@link gsbase.ReplyDismissRsp.verify|verify} messages.
         * @param message ReplyDismissRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IReplyDismissRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplyDismissRsp message, length delimited. Does not implicitly {@link gsbase.ReplyDismissRsp.verify|verify} messages.
         * @param message ReplyDismissRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IReplyDismissRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplyDismissRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplyDismissRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ReplyDismissRsp;

        /**
         * Decodes a ReplyDismissRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplyDismissRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ReplyDismissRsp;

        /**
         * Verifies a ReplyDismissRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplyDismissRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplyDismissRsp
         */
        public static fromObject(object: { [k: string]: any }): gsbase.ReplyDismissRsp;

        /**
         * Creates a plain object from a ReplyDismissRsp message. Also converts values to other types if specified.
         * @param message ReplyDismissRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.ReplyDismissRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplyDismissRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplyDismissRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReplyDismissNot. */
    interface IReplyDismissNot {

        /** ReplyDismissNot openid */
        openid?: (string|null);

        /** ReplyDismissNot reply */
        reply?: (boolean|null);

        /** ReplyDismissNot replyList */
        replyList?: (gsbase.ReplyDismissNot.IReplyInfo[]|null);
    }

    /** Represents a ReplyDismissNot. */
    class ReplyDismissNot implements IReplyDismissNot {

        /**
         * Constructs a new ReplyDismissNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IReplyDismissNot);

        /** ReplyDismissNot openid. */
        public openid: string;

        /** ReplyDismissNot reply. */
        public reply: boolean;

        /** ReplyDismissNot replyList. */
        public replyList: gsbase.ReplyDismissNot.IReplyInfo[];

        /**
         * Creates a new ReplyDismissNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplyDismissNot instance
         */
        public static create(properties?: gsbase.IReplyDismissNot): gsbase.ReplyDismissNot;

        /**
         * Encodes the specified ReplyDismissNot message. Does not implicitly {@link gsbase.ReplyDismissNot.verify|verify} messages.
         * @param message ReplyDismissNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IReplyDismissNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplyDismissNot message, length delimited. Does not implicitly {@link gsbase.ReplyDismissNot.verify|verify} messages.
         * @param message ReplyDismissNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IReplyDismissNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplyDismissNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplyDismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ReplyDismissNot;

        /**
         * Decodes a ReplyDismissNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplyDismissNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ReplyDismissNot;

        /**
         * Verifies a ReplyDismissNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplyDismissNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplyDismissNot
         */
        public static fromObject(object: { [k: string]: any }): gsbase.ReplyDismissNot;

        /**
         * Creates a plain object from a ReplyDismissNot message. Also converts values to other types if specified.
         * @param message ReplyDismissNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.ReplyDismissNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplyDismissNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplyDismissNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ReplyDismissNot {

        /** Properties of a ReplyInfo. */
        interface IReplyInfo {

            /** ReplyInfo openid */
            openid?: (string|null);

            /** ReplyInfo reply */
            reply?: (boolean|null);

            /** ReplyInfo opTime */
            opTime?: (number|Long|null);
        }

        /** Represents a ReplyInfo. */
        class ReplyInfo implements IReplyInfo {

            /**
             * Constructs a new ReplyInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: gsbase.ReplyDismissNot.IReplyInfo);

            /** ReplyInfo openid. */
            public openid: string;

            /** ReplyInfo reply. */
            public reply: boolean;

            /** ReplyInfo opTime. */
            public opTime: (number|Long);

            /**
             * Creates a new ReplyInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReplyInfo instance
             */
            public static create(properties?: gsbase.ReplyDismissNot.IReplyInfo): gsbase.ReplyDismissNot.ReplyInfo;

            /**
             * Encodes the specified ReplyInfo message. Does not implicitly {@link gsbase.ReplyDismissNot.ReplyInfo.verify|verify} messages.
             * @param message ReplyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gsbase.ReplyDismissNot.IReplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReplyInfo message, length delimited. Does not implicitly {@link gsbase.ReplyDismissNot.ReplyInfo.verify|verify} messages.
             * @param message ReplyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gsbase.ReplyDismissNot.IReplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReplyInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReplyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.ReplyDismissNot.ReplyInfo;

            /**
             * Decodes a ReplyInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReplyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.ReplyDismissNot.ReplyInfo;

            /**
             * Verifies a ReplyInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReplyInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReplyInfo
             */
            public static fromObject(object: { [k: string]: any }): gsbase.ReplyDismissNot.ReplyInfo;

            /**
             * Creates a plain object from a ReplyInfo message. Also converts values to other types if specified.
             * @param message ReplyInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gsbase.ReplyDismissNot.ReplyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReplyInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReplyInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a KickOutReq. */
    interface IKickOutReq {

        /** KickOutReq openid */
        openid?: (string|null);

        /** KickOutReq roomId */
        roomId?: (string|null);

        /** KickOutReq operator */
        operator?: (string|null);
    }

    /** Represents a KickOutReq. */
    class KickOutReq implements IKickOutReq {

        /**
         * Constructs a new KickOutReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IKickOutReq);

        /** KickOutReq openid. */
        public openid: string;

        /** KickOutReq roomId. */
        public roomId: string;

        /** KickOutReq operator. */
        public operator: string;

        /**
         * Creates a new KickOutReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickOutReq instance
         */
        public static create(properties?: gsbase.IKickOutReq): gsbase.KickOutReq;

        /**
         * Encodes the specified KickOutReq message. Does not implicitly {@link gsbase.KickOutReq.verify|verify} messages.
         * @param message KickOutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IKickOutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickOutReq message, length delimited. Does not implicitly {@link gsbase.KickOutReq.verify|verify} messages.
         * @param message KickOutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IKickOutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickOutReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.KickOutReq;

        /**
         * Decodes a KickOutReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.KickOutReq;

        /**
         * Verifies a KickOutReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickOutReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickOutReq
         */
        public static fromObject(object: { [k: string]: any }): gsbase.KickOutReq;

        /**
         * Creates a plain object from a KickOutReq message. Also converts values to other types if specified.
         * @param message KickOutReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.KickOutReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickOutReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KickOutReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KickOutRsp. */
    interface IKickOutRsp {

        /** KickOutRsp err */
        err?: (string|null);
    }

    /** Represents a KickOutRsp. */
    class KickOutRsp implements IKickOutRsp {

        /**
         * Constructs a new KickOutRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gsbase.IKickOutRsp);

        /** KickOutRsp err. */
        public err: string;

        /**
         * Creates a new KickOutRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickOutRsp instance
         */
        public static create(properties?: gsbase.IKickOutRsp): gsbase.KickOutRsp;

        /**
         * Encodes the specified KickOutRsp message. Does not implicitly {@link gsbase.KickOutRsp.verify|verify} messages.
         * @param message KickOutRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gsbase.IKickOutRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickOutRsp message, length delimited. Does not implicitly {@link gsbase.KickOutRsp.verify|verify} messages.
         * @param message KickOutRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gsbase.IKickOutRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickOutRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickOutRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gsbase.KickOutRsp;

        /**
         * Decodes a KickOutRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickOutRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gsbase.KickOutRsp;

        /**
         * Verifies a KickOutRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickOutRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickOutRsp
         */
        public static fromObject(object: { [k: string]: any }): gsbase.KickOutRsp;

        /**
         * Creates a plain object from a KickOutRsp message. Also converts values to other types if specified.
         * @param message KickOutRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gsbase.KickOutRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickOutRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KickOutRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace mahjong. */
export namespace mahjong {

    /** Represents a Table */
    class Table extends $protobuf.rpc.Service {

        /**
         * Constructs a new Table service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Table service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Table;

        /**
         * Calls Ready.
         * @param request ReadyReq message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public ready(request: mahjong.IReadyReq, callback: mahjong.Table.ReadyCallback): void;

        /**
         * Calls Ready.
         * @param request ReadyReq message or plain object
         * @returns Promise
         */
        public ready(request: mahjong.IReadyReq): Promise<mahjong.Empty>;

        /**
         * Calls StartGame.
         * @param request StartGameReq message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public startGame(request: mahjong.IStartGameReq, callback: mahjong.Table.StartGameCallback): void;

        /**
         * Calls StartGame.
         * @param request StartGameReq message or plain object
         * @returns Promise
         */
        public startGame(request: mahjong.IStartGameReq): Promise<mahjong.Empty>;
    }

    namespace Table {

        /**
         * Callback as used by {@link mahjong.Table#ready}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type ReadyCallback = (error: (Error|null), response?: mahjong.Empty) => void;

        /**
         * Callback as used by {@link mahjong.Table#startGame}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type StartGameCallback = (error: (Error|null), response?: mahjong.Empty) => void;
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
        constructor(properties?: mahjong.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: mahjong.IEmpty): mahjong.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link mahjong.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link mahjong.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.Empty;

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
        public static fromObject(object: { [k: string]: any }): mahjong.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a ReadyReq. */
    interface IReadyReq {

        /** ReadyReq isReady */
        isReady?: (boolean|null);
    }

    /** Represents a ReadyReq. */
    class ReadyReq implements IReadyReq {

        /**
         * Constructs a new ReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IReadyReq);

        /** ReadyReq isReady. */
        public isReady: boolean;

        /**
         * Creates a new ReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyReq instance
         */
        public static create(properties?: mahjong.IReadyReq): mahjong.ReadyReq;

        /**
         * Encodes the specified ReadyReq message. Does not implicitly {@link mahjong.ReadyReq.verify|verify} messages.
         * @param message ReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyReq message, length delimited. Does not implicitly {@link mahjong.ReadyReq.verify|verify} messages.
         * @param message ReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.ReadyReq;

        /**
         * Decodes a ReadyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.ReadyReq;

        /**
         * Verifies a ReadyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyReq
         */
        public static fromObject(object: { [k: string]: any }): mahjong.ReadyReq;

        /**
         * Creates a plain object from a ReadyReq message. Also converts values to other types if specified.
         * @param message ReadyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.ReadyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadyReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadyRsp. */
    interface IReadyRsp {

        /** ReadyRsp err */
        err?: (string|null);
    }

    /** Represents a ReadyRsp. */
    class ReadyRsp implements IReadyRsp {

        /**
         * Constructs a new ReadyRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IReadyRsp);

        /** ReadyRsp err. */
        public err: string;

        /**
         * Creates a new ReadyRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyRsp instance
         */
        public static create(properties?: mahjong.IReadyRsp): mahjong.ReadyRsp;

        /**
         * Encodes the specified ReadyRsp message. Does not implicitly {@link mahjong.ReadyRsp.verify|verify} messages.
         * @param message ReadyRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IReadyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyRsp message, length delimited. Does not implicitly {@link mahjong.ReadyRsp.verify|verify} messages.
         * @param message ReadyRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IReadyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.ReadyRsp;

        /**
         * Decodes a ReadyRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.ReadyRsp;

        /**
         * Verifies a ReadyRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyRsp
         */
        public static fromObject(object: { [k: string]: any }): mahjong.ReadyRsp;

        /**
         * Creates a plain object from a ReadyRsp message. Also converts values to other types if specified.
         * @param message ReadyRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.ReadyRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadyRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadyNot. */
    interface IReadyNot {

        /** ReadyNot uid */
        uid?: (string|null);

        /** ReadyNot isReady */
        isReady?: (boolean|null);
    }

    /** Represents a ReadyNot. */
    class ReadyNot implements IReadyNot {

        /**
         * Constructs a new ReadyNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IReadyNot);

        /** ReadyNot uid. */
        public uid: string;

        /** ReadyNot isReady. */
        public isReady: boolean;

        /**
         * Creates a new ReadyNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyNot instance
         */
        public static create(properties?: mahjong.IReadyNot): mahjong.ReadyNot;

        /**
         * Encodes the specified ReadyNot message. Does not implicitly {@link mahjong.ReadyNot.verify|verify} messages.
         * @param message ReadyNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IReadyNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyNot message, length delimited. Does not implicitly {@link mahjong.ReadyNot.verify|verify} messages.
         * @param message ReadyNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IReadyNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.ReadyNot;

        /**
         * Decodes a ReadyNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.ReadyNot;

        /**
         * Verifies a ReadyNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyNot
         */
        public static fromObject(object: { [k: string]: any }): mahjong.ReadyNot;

        /**
         * Creates a plain object from a ReadyNot message. Also converts values to other types if specified.
         * @param message ReadyNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.ReadyNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadyNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoundStartNot. */
    interface IRoundStartNot {

        /** RoundStartNot roundId */
        roundId?: (string|null);

        /** RoundStartNot curRound */
        curRound?: (number|null);

        /** RoundStartNot startTime */
        startTime?: (number|Long|null);
    }

    /** Represents a RoundStartNot. */
    class RoundStartNot implements IRoundStartNot {

        /**
         * Constructs a new RoundStartNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IRoundStartNot);

        /** RoundStartNot roundId. */
        public roundId: string;

        /** RoundStartNot curRound. */
        public curRound: number;

        /** RoundStartNot startTime. */
        public startTime: (number|Long);

        /**
         * Creates a new RoundStartNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundStartNot instance
         */
        public static create(properties?: mahjong.IRoundStartNot): mahjong.RoundStartNot;

        /**
         * Encodes the specified RoundStartNot message. Does not implicitly {@link mahjong.RoundStartNot.verify|verify} messages.
         * @param message RoundStartNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IRoundStartNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundStartNot message, length delimited. Does not implicitly {@link mahjong.RoundStartNot.verify|verify} messages.
         * @param message RoundStartNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IRoundStartNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundStartNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundStartNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.RoundStartNot;

        /**
         * Decodes a RoundStartNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundStartNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.RoundStartNot;

        /**
         * Verifies a RoundStartNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundStartNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundStartNot
         */
        public static fromObject(object: { [k: string]: any }): mahjong.RoundStartNot;

        /**
         * Creates a plain object from a RoundStartNot message. Also converts values to other types if specified.
         * @param message RoundStartNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.RoundStartNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundStartNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoundStartNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoundEndNot. */
    interface IRoundEndNot {

        /** RoundEndNot roundId */
        roundId?: (string|null);

        /** RoundEndNot curRound */
        curRound?: (number|null);

        /** RoundEndNot endTime */
        endTime?: (number|Long|null);
    }

    /** Represents a RoundEndNot. */
    class RoundEndNot implements IRoundEndNot {

        /**
         * Constructs a new RoundEndNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IRoundEndNot);

        /** RoundEndNot roundId. */
        public roundId: string;

        /** RoundEndNot curRound. */
        public curRound: number;

        /** RoundEndNot endTime. */
        public endTime: (number|Long);

        /**
         * Creates a new RoundEndNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundEndNot instance
         */
        public static create(properties?: mahjong.IRoundEndNot): mahjong.RoundEndNot;

        /**
         * Encodes the specified RoundEndNot message. Does not implicitly {@link mahjong.RoundEndNot.verify|verify} messages.
         * @param message RoundEndNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IRoundEndNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundEndNot message, length delimited. Does not implicitly {@link mahjong.RoundEndNot.verify|verify} messages.
         * @param message RoundEndNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IRoundEndNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundEndNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundEndNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.RoundEndNot;

        /**
         * Decodes a RoundEndNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundEndNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.RoundEndNot;

        /**
         * Verifies a RoundEndNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundEndNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundEndNot
         */
        public static fromObject(object: { [k: string]: any }): mahjong.RoundEndNot;

        /**
         * Creates a plain object from a RoundEndNot message. Also converts values to other types if specified.
         * @param message RoundEndNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.RoundEndNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundEndNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoundEndNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnterRoomNot. */
    interface IEnterRoomNot {

        /** EnterRoomNot roomId */
        roomId?: (string|null);

        /** EnterRoomNot uid */
        uid?: (string|null);

        /** EnterRoomNot nickname */
        nickname?: (string|null);

        /** EnterRoomNot money */
        money?: (number|Long|null);

        /** EnterRoomNot type */
        type?: (number|null);

        /** EnterRoomNot chairId */
        chairId?: (number|null);
    }

    /** Represents an EnterRoomNot. */
    class EnterRoomNot implements IEnterRoomNot {

        /**
         * Constructs a new EnterRoomNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IEnterRoomNot);

        /** EnterRoomNot roomId. */
        public roomId: string;

        /** EnterRoomNot uid. */
        public uid: string;

        /** EnterRoomNot nickname. */
        public nickname: string;

        /** EnterRoomNot money. */
        public money: (number|Long);

        /** EnterRoomNot type. */
        public type: number;

        /** EnterRoomNot chairId. */
        public chairId: number;

        /**
         * Creates a new EnterRoomNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomNot instance
         */
        public static create(properties?: mahjong.IEnterRoomNot): mahjong.EnterRoomNot;

        /**
         * Encodes the specified EnterRoomNot message. Does not implicitly {@link mahjong.EnterRoomNot.verify|verify} messages.
         * @param message EnterRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IEnterRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomNot message, length delimited. Does not implicitly {@link mahjong.EnterRoomNot.verify|verify} messages.
         * @param message EnterRoomNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IEnterRoomNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.EnterRoomNot;

        /**
         * Decodes an EnterRoomNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.EnterRoomNot;

        /**
         * Verifies an EnterRoomNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomNot
         */
        public static fromObject(object: { [k: string]: any }): mahjong.EnterRoomNot;

        /**
         * Creates a plain object from an EnterRoomNot message. Also converts values to other types if specified.
         * @param message EnterRoomNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.EnterRoomNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnterRoomNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoundSettleNot. */
    interface IRoundSettleNot {

        /** RoundSettleNot index */
        index?: (number|null);

        /** RoundSettleNot gameGid */
        gameGid?: (string|null);

        /** RoundSettleNot serverId */
        serverId?: (string|null);

        /** RoundSettleNot matchCid */
        matchCid?: (string|null);

        /** RoundSettleNot matchId */
        matchId?: (string|null);

        /** RoundSettleNot roomId */
        roomId?: (string|null);

        /** RoundSettleNot roundId */
        roundId?: (string|null);

        /** RoundSettleNot rules */
        rules?: (string|null);

        /** RoundSettleNot finishedTime */
        finishedTime?: (number|Long|null);

        /** RoundSettleNot settleItem */
        settleItem?: (number|null);

        /** RoundSettleNot platAid */
        platAid?: (number|null);

        /** RoundSettleNot playerList */
        playerList?: (mahjong.RoundSettleNot.IPlayerData[]|null);

        /** RoundSettleNot winners */
        winners?: (string[]|null);
    }

    /** Represents a RoundSettleNot. */
    class RoundSettleNot implements IRoundSettleNot {

        /**
         * Constructs a new RoundSettleNot.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IRoundSettleNot);

        /** RoundSettleNot index. */
        public index: number;

        /** RoundSettleNot gameGid. */
        public gameGid: string;

        /** RoundSettleNot serverId. */
        public serverId: string;

        /** RoundSettleNot matchCid. */
        public matchCid: string;

        /** RoundSettleNot matchId. */
        public matchId: string;

        /** RoundSettleNot roomId. */
        public roomId: string;

        /** RoundSettleNot roundId. */
        public roundId: string;

        /** RoundSettleNot rules. */
        public rules: string;

        /** RoundSettleNot finishedTime. */
        public finishedTime: (number|Long);

        /** RoundSettleNot settleItem. */
        public settleItem: number;

        /** RoundSettleNot platAid. */
        public platAid: number;

        /** RoundSettleNot playerList. */
        public playerList: mahjong.RoundSettleNot.IPlayerData[];

        /** RoundSettleNot winners. */
        public winners: string[];

        /**
         * Creates a new RoundSettleNot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundSettleNot instance
         */
        public static create(properties?: mahjong.IRoundSettleNot): mahjong.RoundSettleNot;

        /**
         * Encodes the specified RoundSettleNot message. Does not implicitly {@link mahjong.RoundSettleNot.verify|verify} messages.
         * @param message RoundSettleNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IRoundSettleNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundSettleNot message, length delimited. Does not implicitly {@link mahjong.RoundSettleNot.verify|verify} messages.
         * @param message RoundSettleNot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IRoundSettleNot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundSettleNot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundSettleNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.RoundSettleNot;

        /**
         * Decodes a RoundSettleNot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundSettleNot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.RoundSettleNot;

        /**
         * Verifies a RoundSettleNot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundSettleNot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundSettleNot
         */
        public static fromObject(object: { [k: string]: any }): mahjong.RoundSettleNot;

        /**
         * Creates a plain object from a RoundSettleNot message. Also converts values to other types if specified.
         * @param message RoundSettleNot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.RoundSettleNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundSettleNot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoundSettleNot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RoundSettleNot {

        /** Properties of a PlayerData. */
        interface IPlayerData {

            /** PlayerData openid */
            openid?: (string|null);

            /** PlayerData nickname */
            nickname?: (string|null);

            /** PlayerData curWinLost */
            curWinLost?: (number|Long|null);

            /** PlayerData totalWinLost */
            totalWinLost?: (number|Long|null);
        }

        /** Represents a PlayerData. */
        class PlayerData implements IPlayerData {

            /**
             * Constructs a new PlayerData.
             * @param [properties] Properties to set
             */
            constructor(properties?: mahjong.RoundSettleNot.IPlayerData);

            /** PlayerData openid. */
            public openid: string;

            /** PlayerData nickname. */
            public nickname: string;

            /** PlayerData curWinLost. */
            public curWinLost: (number|Long);

            /** PlayerData totalWinLost. */
            public totalWinLost: (number|Long);

            /**
             * Creates a new PlayerData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerData instance
             */
            public static create(properties?: mahjong.RoundSettleNot.IPlayerData): mahjong.RoundSettleNot.PlayerData;

            /**
             * Encodes the specified PlayerData message. Does not implicitly {@link mahjong.RoundSettleNot.PlayerData.verify|verify} messages.
             * @param message PlayerData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mahjong.RoundSettleNot.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerData message, length delimited. Does not implicitly {@link mahjong.RoundSettleNot.PlayerData.verify|verify} messages.
             * @param message PlayerData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mahjong.RoundSettleNot.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.RoundSettleNot.PlayerData;

            /**
             * Decodes a PlayerData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.RoundSettleNot.PlayerData;

            /**
             * Verifies a PlayerData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerData
             */
            public static fromObject(object: { [k: string]: any }): mahjong.RoundSettleNot.PlayerData;

            /**
             * Creates a plain object from a PlayerData message. Also converts values to other types if specified.
             * @param message PlayerData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mahjong.RoundSettleNot.PlayerData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayerData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a KickOutReq. */
    interface IKickOutReq {

        /** KickOutReq openid */
        openid?: (string|null);
    }

    /** Represents a KickOutReq. */
    class KickOutReq implements IKickOutReq {

        /**
         * Constructs a new KickOutReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IKickOutReq);

        /** KickOutReq openid. */
        public openid: string;

        /**
         * Creates a new KickOutReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickOutReq instance
         */
        public static create(properties?: mahjong.IKickOutReq): mahjong.KickOutReq;

        /**
         * Encodes the specified KickOutReq message. Does not implicitly {@link mahjong.KickOutReq.verify|verify} messages.
         * @param message KickOutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IKickOutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickOutReq message, length delimited. Does not implicitly {@link mahjong.KickOutReq.verify|verify} messages.
         * @param message KickOutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IKickOutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickOutReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.KickOutReq;

        /**
         * Decodes a KickOutReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.KickOutReq;

        /**
         * Verifies a KickOutReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickOutReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickOutReq
         */
        public static fromObject(object: { [k: string]: any }): mahjong.KickOutReq;

        /**
         * Creates a plain object from a KickOutReq message. Also converts values to other types if specified.
         * @param message KickOutReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.KickOutReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickOutReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KickOutReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KickOutRsp. */
    interface IKickOutRsp {

        /** KickOutRsp err */
        err?: (string|null);
    }

    /** Represents a KickOutRsp. */
    class KickOutRsp implements IKickOutRsp {

        /**
         * Constructs a new KickOutRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IKickOutRsp);

        /** KickOutRsp err. */
        public err: string;

        /**
         * Creates a new KickOutRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickOutRsp instance
         */
        public static create(properties?: mahjong.IKickOutRsp): mahjong.KickOutRsp;

        /**
         * Encodes the specified KickOutRsp message. Does not implicitly {@link mahjong.KickOutRsp.verify|verify} messages.
         * @param message KickOutRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IKickOutRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickOutRsp message, length delimited. Does not implicitly {@link mahjong.KickOutRsp.verify|verify} messages.
         * @param message KickOutRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IKickOutRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickOutRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickOutRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.KickOutRsp;

        /**
         * Decodes a KickOutRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickOutRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.KickOutRsp;

        /**
         * Verifies a KickOutRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickOutRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickOutRsp
         */
        public static fromObject(object: { [k: string]: any }): mahjong.KickOutRsp;

        /**
         * Creates a plain object from a KickOutRsp message. Also converts values to other types if specified.
         * @param message KickOutRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.KickOutRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickOutRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KickOutRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StartGameReq. */
    interface IStartGameReq {
    }

    /** Represents a StartGameReq. */
    class StartGameReq implements IStartGameReq {

        /**
         * Constructs a new StartGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IStartGameReq);

        /**
         * Creates a new StartGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartGameReq instance
         */
        public static create(properties?: mahjong.IStartGameReq): mahjong.StartGameReq;

        /**
         * Encodes the specified StartGameReq message. Does not implicitly {@link mahjong.StartGameReq.verify|verify} messages.
         * @param message StartGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IStartGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link mahjong.StartGameReq.verify|verify} messages.
         * @param message StartGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IStartGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.StartGameReq;

        /**
         * Decodes a StartGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.StartGameReq;

        /**
         * Verifies a StartGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartGameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartGameReq
         */
        public static fromObject(object: { [k: string]: any }): mahjong.StartGameReq;

        /**
         * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
         * @param message StartGameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.StartGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartGameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StartGameReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StartGameRsp. */
    interface IStartGameRsp {

        /** StartGameRsp err */
        err?: (string|null);
    }

    /** Represents a StartGameRsp. */
    class StartGameRsp implements IStartGameRsp {

        /**
         * Constructs a new StartGameRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IStartGameRsp);

        /** StartGameRsp err. */
        public err: string;

        /**
         * Creates a new StartGameRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartGameRsp instance
         */
        public static create(properties?: mahjong.IStartGameRsp): mahjong.StartGameRsp;

        /**
         * Encodes the specified StartGameRsp message. Does not implicitly {@link mahjong.StartGameRsp.verify|verify} messages.
         * @param message StartGameRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IStartGameRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartGameRsp message, length delimited. Does not implicitly {@link mahjong.StartGameRsp.verify|verify} messages.
         * @param message StartGameRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IStartGameRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartGameRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.StartGameRsp;

        /**
         * Decodes a StartGameRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.StartGameRsp;

        /**
         * Verifies a StartGameRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartGameRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartGameRsp
         */
        public static fromObject(object: { [k: string]: any }): mahjong.StartGameRsp;

        /**
         * Creates a plain object from a StartGameRsp message. Also converts values to other types if specified.
         * @param message StartGameRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.StartGameRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartGameRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StartGameRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
