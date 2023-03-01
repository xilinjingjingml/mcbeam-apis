package gsbase

import (
	"errors"
	"fmt"
	"strings"
)

const (
	// TopicGameEvent 游戏事件 message: GameEvent
	TopicGameEvent = "game.event"

	// TopicGamePlayerEvent 游戏玩家事件 message: PlayerEvent
	TopicGamePlayerEvent = "game.player.event"

	// TopicGameRoomStats 房间状态 message: GameRoomStats
	TopicGameRoomStats = "game.room.stats"
)

// 房间ID
func GenerateRoomId(gameId string, sid string, seq int64) string {
	return fmt.Sprintf("%s.%s.%d", gameId, sid, seq)
}

// 返回 gameId  serverId
func ParseServerInfo(roomId string) (string, string, error) {
	sl := strings.Split(roomId, ".")
	if len(sl) != 3 {
		return "", "", errors.New("unknown format")
	}
	return sl[0], sl[1], nil
}
