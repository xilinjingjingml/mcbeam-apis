package mahjong

const (
	EventRoundStatsChange = "evt-round-stats-change" // 回合变更
	EventPlayerCardMode   = "evt-card-mode"          // 玩家打出牌型 参数必选: type 和 value. 例如: {"type":"zhadan", "value": "256"}  炸弹 256倍，value的具体含义由游戏自己定义。这里只是提供了 type和value用于记录
)

const (
	// 游戏玩家事件 message: RoundSettleNot
	TopicRoundSettleEvent = "game.round.settle"
)
