// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.12.1
// source: proto/status.proto

package status

import (
	proto "gitee.com/microbeam/mcbeam-apis/mcbeam-common/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GameType int32

const (
	GameType_AsyncGame    GameType = 0
	GameType_RealTimeGame GameType = 1
)

// Enum value maps for GameType.
var (
	GameType_name = map[int32]string{
		0: "AsyncGame",
		1: "RealTimeGame",
	}
	GameType_value = map[string]int32{
		"AsyncGame":    0,
		"RealTimeGame": 1,
	}
)

func (x GameType) Enum() *GameType {
	p := new(GameType)
	*p = x
	return p
}

func (x GameType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (GameType) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_status_proto_enumTypes[0].Descriptor()
}

func (GameType) Type() protoreflect.EnumType {
	return &file_proto_status_proto_enumTypes[0]
}

func (x GameType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use GameType.Descriptor instead.
func (GameType) EnumDescriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{0}
}

type GameStatus_Status int32

const (
	GameStatus_Idle   GameStatus_Status = 0
	GameStatus_Gaming GameStatus_Status = 1
)

// Enum value maps for GameStatus_Status.
var (
	GameStatus_Status_name = map[int32]string{
		0: "Idle",
		1: "Gaming",
	}
	GameStatus_Status_value = map[string]int32{
		"Idle":   0,
		"Gaming": 1,
	}
)

func (x GameStatus_Status) Enum() *GameStatus_Status {
	p := new(GameStatus_Status)
	*p = x
	return p
}

func (x GameStatus_Status) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (GameStatus_Status) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_status_proto_enumTypes[1].Descriptor()
}

func (GameStatus_Status) Type() protoreflect.EnumType {
	return &file_proto_status_proto_enumTypes[1]
}

func (x GameStatus_Status) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use GameStatus_Status.Descriptor instead.
func (GameStatus_Status) EnumDescriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{0, 0}
}

type GameStatus struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//@inject_tag: bson:"openid"
	Openid string `protobuf:"bytes,1,opt,name=openid,proto3" json:"openid,omitempty" bson:"openid"`
	//@inject_tag: bson:"game_gid"
	GameGid string `protobuf:"bytes,2,opt,name=game_gid,json=gameGid,proto3" json:"game_gid,omitempty" bson:"game_gid"`
	//@inject_tag: bson:"match_cid"
	MatchCid string `protobuf:"bytes,3,opt,name=match_cid,json=matchCid,proto3" json:"match_cid,omitempty" bson:"match_cid"`
	//@inject_tag: bson:"update_time"
	UpdateTime int64 `protobuf:"varint,4,opt,name=update_time,json=updateTime,proto3" json:"update_time,omitempty" bson:"update_time"`
	//@inject_tag: bson:"type"
	Type GameType `protobuf:"varint,5,opt,name=type,proto3,enum=status.GameType" json:"type,omitempty" bson:"type"`
	//@inject_tag: bson:"lock_by"
	LockBy string `protobuf:"bytes,6,opt,name=lock_by,json=lockBy,proto3" json:"lock_by,omitempty" bson:"lock_by"`
	//@inject_tag: bson:"room_id"
	RoomId string `protobuf:"bytes,7,opt,name=room_id,json=roomId,proto3" json:"room_id,omitempty" bson:"room_id"`
	//@inject_tag: bson:"match_id"
	MatchId string `protobuf:"bytes,8,opt,name=match_id,json=matchId,proto3" json:"match_id,omitempty" bson:"match_id"`
	//@inject_tag: bson:"status"
	Status GameStatus_Status `protobuf:"varint,9,opt,name=status,proto3,enum=status.GameStatus_Status" json:"status,omitempty" bson:"status"` // 当前状态 0空闲中 1游戏中
	//@inject_tag: bson:"metadata"
	Metadata map[string]string `protobuf:"bytes,10,rep,name=metadata,proto3" json:"metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3" bson:"metadata"`
}

func (x *GameStatus) Reset() {
	*x = GameStatus{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_status_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GameStatus) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameStatus) ProtoMessage() {}

func (x *GameStatus) ProtoReflect() protoreflect.Message {
	mi := &file_proto_status_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameStatus.ProtoReflect.Descriptor instead.
func (*GameStatus) Descriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{0}
}

func (x *GameStatus) GetOpenid() string {
	if x != nil {
		return x.Openid
	}
	return ""
}

func (x *GameStatus) GetGameGid() string {
	if x != nil {
		return x.GameGid
	}
	return ""
}

func (x *GameStatus) GetMatchCid() string {
	if x != nil {
		return x.MatchCid
	}
	return ""
}

func (x *GameStatus) GetUpdateTime() int64 {
	if x != nil {
		return x.UpdateTime
	}
	return 0
}

func (x *GameStatus) GetType() GameType {
	if x != nil {
		return x.Type
	}
	return GameType_AsyncGame
}

func (x *GameStatus) GetLockBy() string {
	if x != nil {
		return x.LockBy
	}
	return ""
}

func (x *GameStatus) GetRoomId() string {
	if x != nil {
		return x.RoomId
	}
	return ""
}

func (x *GameStatus) GetMatchId() string {
	if x != nil {
		return x.MatchId
	}
	return ""
}

func (x *GameStatus) GetStatus() GameStatus_Status {
	if x != nil {
		return x.Status
	}
	return GameStatus_Idle
}

func (x *GameStatus) GetMetadata() map[string]string {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type AsyncGameData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	MatchId string `protobuf:"bytes,1,opt,name=match_id,json=matchId,proto3" json:"match_id,omitempty"`
}

func (x *AsyncGameData) Reset() {
	*x = AsyncGameData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_status_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AsyncGameData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AsyncGameData) ProtoMessage() {}

func (x *AsyncGameData) ProtoReflect() protoreflect.Message {
	mi := &file_proto_status_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AsyncGameData.ProtoReflect.Descriptor instead.
func (*AsyncGameData) Descriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{1}
}

func (x *AsyncGameData) GetMatchId() string {
	if x != nil {
		return x.MatchId
	}
	return ""
}

type UpdatePlyStatusReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *proto.PlayerStatus `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *UpdatePlyStatusReq) Reset() {
	*x = UpdatePlyStatusReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_status_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdatePlyStatusReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdatePlyStatusReq) ProtoMessage() {}

func (x *UpdatePlyStatusReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_status_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdatePlyStatusReq.ProtoReflect.Descriptor instead.
func (*UpdatePlyStatusReq) Descriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{2}
}

func (x *UpdatePlyStatusReq) GetStatus() *proto.PlayerStatus {
	if x != nil {
		return x.Status
	}
	return nil
}

type UpdatePlyStatusRsp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Err string `protobuf:"bytes,1,opt,name=err,proto3" json:"err,omitempty"`
}

func (x *UpdatePlyStatusRsp) Reset() {
	*x = UpdatePlyStatusRsp{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_status_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdatePlyStatusRsp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdatePlyStatusRsp) ProtoMessage() {}

func (x *UpdatePlyStatusRsp) ProtoReflect() protoreflect.Message {
	mi := &file_proto_status_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdatePlyStatusRsp.ProtoReflect.Descriptor instead.
func (*UpdatePlyStatusRsp) Descriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{3}
}

func (x *UpdatePlyStatusRsp) GetErr() string {
	if x != nil {
		return x.Err
	}
	return ""
}

type GetPlyStatusReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	IdList []string `protobuf:"bytes,1,rep,name=id_list,json=idList,proto3" json:"id_list,omitempty"`
}

func (x *GetPlyStatusReq) Reset() {
	*x = GetPlyStatusReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_status_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPlyStatusReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPlyStatusReq) ProtoMessage() {}

func (x *GetPlyStatusReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_status_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPlyStatusReq.ProtoReflect.Descriptor instead.
func (*GetPlyStatusReq) Descriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{4}
}

func (x *GetPlyStatusReq) GetIdList() []string {
	if x != nil {
		return x.IdList
	}
	return nil
}

type GetPlyStatusRsp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Err        string                `protobuf:"bytes,1,opt,name=err,proto3" json:"err,omitempty"`
	StatusList []*proto.PlayerStatus `protobuf:"bytes,2,rep,name=status_list,json=statusList,proto3" json:"status_list,omitempty"`
}

func (x *GetPlyStatusRsp) Reset() {
	*x = GetPlyStatusRsp{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_status_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPlyStatusRsp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPlyStatusRsp) ProtoMessage() {}

func (x *GetPlyStatusRsp) ProtoReflect() protoreflect.Message {
	mi := &file_proto_status_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPlyStatusRsp.ProtoReflect.Descriptor instead.
func (*GetPlyStatusRsp) Descriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{5}
}

func (x *GetPlyStatusRsp) GetErr() string {
	if x != nil {
		return x.Err
	}
	return ""
}

func (x *GetPlyStatusRsp) GetStatusList() []*proto.PlayerStatus {
	if x != nil {
		return x.StatusList
	}
	return nil
}

// 玩家游戏状态
type UpdatePlyGameStatusReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type     GameType          `protobuf:"varint,1,opt,name=type,proto3,enum=status.GameType" json:"type,omitempty"`
	LockedBy string            `protobuf:"bytes,2,opt,name=locked_by,json=lockedBy,proto3" json:"locked_by,omitempty"` // 服务器ID
	GameGid  string            `protobuf:"bytes,3,opt,name=game_gid,json=gameGid,proto3" json:"game_gid,omitempty"`
	Openid   string            `protobuf:"bytes,4,opt,name=openid,proto3" json:"openid,omitempty"`
	RoomId   string            `protobuf:"bytes,5,opt,name=room_id,json=roomId,proto3" json:"room_id,omitempty"`
	MatchCid string            `protobuf:"bytes,6,opt,name=match_cid,json=matchCid,proto3" json:"match_cid,omitempty"`
	MatchId  string            `protobuf:"bytes,7,opt,name=match_id,json=matchId,proto3" json:"match_id,omitempty"`
	Metadata map[string]string `protobuf:"bytes,8,rep,name=metadata,proto3" json:"metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *UpdatePlyGameStatusReq) Reset() {
	*x = UpdatePlyGameStatusReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_status_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdatePlyGameStatusReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdatePlyGameStatusReq) ProtoMessage() {}

func (x *UpdatePlyGameStatusReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_status_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdatePlyGameStatusReq.ProtoReflect.Descriptor instead.
func (*UpdatePlyGameStatusReq) Descriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{6}
}

func (x *UpdatePlyGameStatusReq) GetType() GameType {
	if x != nil {
		return x.Type
	}
	return GameType_AsyncGame
}

func (x *UpdatePlyGameStatusReq) GetLockedBy() string {
	if x != nil {
		return x.LockedBy
	}
	return ""
}

func (x *UpdatePlyGameStatusReq) GetGameGid() string {
	if x != nil {
		return x.GameGid
	}
	return ""
}

func (x *UpdatePlyGameStatusReq) GetOpenid() string {
	if x != nil {
		return x.Openid
	}
	return ""
}

func (x *UpdatePlyGameStatusReq) GetRoomId() string {
	if x != nil {
		return x.RoomId
	}
	return ""
}

func (x *UpdatePlyGameStatusReq) GetMatchCid() string {
	if x != nil {
		return x.MatchCid
	}
	return ""
}

func (x *UpdatePlyGameStatusReq) GetMatchId() string {
	if x != nil {
		return x.MatchId
	}
	return ""
}

func (x *UpdatePlyGameStatusReq) GetMetadata() map[string]string {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type UpdatePlyGameStatusRsp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Err    string      `protobuf:"bytes,1,opt,name=err,proto3" json:"err,omitempty"`
	Status *GameStatus `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *UpdatePlyGameStatusRsp) Reset() {
	*x = UpdatePlyGameStatusRsp{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_status_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdatePlyGameStatusRsp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdatePlyGameStatusRsp) ProtoMessage() {}

func (x *UpdatePlyGameStatusRsp) ProtoReflect() protoreflect.Message {
	mi := &file_proto_status_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdatePlyGameStatusRsp.ProtoReflect.Descriptor instead.
func (*UpdatePlyGameStatusRsp) Descriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{7}
}

func (x *UpdatePlyGameStatusRsp) GetErr() string {
	if x != nil {
		return x.Err
	}
	return ""
}

func (x *UpdatePlyGameStatusRsp) GetStatus() *GameStatus {
	if x != nil {
		return x.Status
	}
	return nil
}

type GetPlyGameStatusReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Openid string `protobuf:"bytes,1,opt,name=openid,proto3" json:"openid,omitempty"`
}

func (x *GetPlyGameStatusReq) Reset() {
	*x = GetPlyGameStatusReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_status_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPlyGameStatusReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPlyGameStatusReq) ProtoMessage() {}

func (x *GetPlyGameStatusReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_status_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPlyGameStatusReq.ProtoReflect.Descriptor instead.
func (*GetPlyGameStatusReq) Descriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{8}
}

func (x *GetPlyGameStatusReq) GetOpenid() string {
	if x != nil {
		return x.Openid
	}
	return ""
}

type GetPlyGameStatusRsp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Err    string      `protobuf:"bytes,1,opt,name=err,proto3" json:"err,omitempty"`
	Status *GameStatus `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"` // 玩家游戏状态
}

func (x *GetPlyGameStatusRsp) Reset() {
	*x = GetPlyGameStatusRsp{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_status_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPlyGameStatusRsp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPlyGameStatusRsp) ProtoMessage() {}

func (x *GetPlyGameStatusRsp) ProtoReflect() protoreflect.Message {
	mi := &file_proto_status_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPlyGameStatusRsp.ProtoReflect.Descriptor instead.
func (*GetPlyGameStatusRsp) Descriptor() ([]byte, []int) {
	return file_proto_status_proto_rawDescGZIP(), []int{9}
}

func (x *GetPlyGameStatusRsp) GetErr() string {
	if x != nil {
		return x.Err
	}
	return ""
}

func (x *GetPlyGameStatusRsp) GetStatus() *GameStatus {
	if x != nil {
		return x.Status
	}
	return nil
}

var File_proto_status_proto protoreflect.FileDescriptor

var file_proto_status_proto_rawDesc = []byte{
	0x0a, 0x12, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x1a, 0x40, 0x67, 0x69,
	0x74, 0x65, 0x65, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x69, 0x63, 0x72, 0x6f, 0x62, 0x65, 0x61,
	0x6d, 0x2f, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x2d, 0x61, 0x70, 0x69, 0x73, 0x2f, 0x6d, 0x63,
	0x62, 0x65, 0x61, 0x6d, 0x2d, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xbe,
	0x03, 0x0a, 0x0a, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x16, 0x0a,
	0x06, 0x6f, 0x70, 0x65, 0x6e, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6f,
	0x70, 0x65, 0x6e, 0x69, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x67, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x47, 0x69, 0x64,
	0x12, 0x1b, 0x0a, 0x09, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x5f, 0x63, 0x69, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x43, 0x69, 0x64, 0x12, 0x1f, 0x0a,
	0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x24,
	0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x10, 0x2e, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x62, 0x79, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6c, 0x6f, 0x63, 0x6b, 0x42, 0x79, 0x12, 0x17, 0x0a,
	0x07, 0x72, 0x6f, 0x6f, 0x6d, 0x5f, 0x69, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x72, 0x6f, 0x6f, 0x6d, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x5f,
	0x69, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x49,
	0x64, 0x12, 0x31, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x09, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x19, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x53,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x12, 0x3c, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x18, 0x0a, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e,
	0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x1a, 0x3b, 0x0a, 0x0d, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22,
	0x1e, 0x0a, 0x06, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x08, 0x0a, 0x04, 0x49, 0x64, 0x6c,
	0x65, 0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x47, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x10, 0x01, 0x22,
	0x2a, 0x0a, 0x0d, 0x41, 0x73, 0x79, 0x6e, 0x63, 0x47, 0x61, 0x6d, 0x65, 0x44, 0x61, 0x74, 0x61,
	0x12, 0x19, 0x0a, 0x08, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x49, 0x64, 0x22, 0x3b, 0x0a, 0x12, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x6c, 0x79, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65,
	0x71, 0x12, 0x25, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x0d, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x26, 0x0a, 0x12, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x50, 0x6c, 0x79, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x73, 0x70, 0x12, 0x10,
	0x0a, 0x03, 0x65, 0x72, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x65, 0x72, 0x72,
	0x22, 0x2a, 0x0a, 0x0f, 0x47, 0x65, 0x74, 0x50, 0x6c, 0x79, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x52, 0x65, 0x71, 0x12, 0x17, 0x0a, 0x07, 0x69, 0x64, 0x5f, 0x6c, 0x69, 0x73, 0x74, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x06, 0x69, 0x64, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x53, 0x0a, 0x0f,
	0x47, 0x65, 0x74, 0x50, 0x6c, 0x79, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x73, 0x70, 0x12,
	0x10, 0x0a, 0x03, 0x65, 0x72, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x65, 0x72,
	0x72, 0x12, 0x2e, 0x0a, 0x0b, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x5f, 0x6c, 0x69, 0x73, 0x74,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x0a, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x4c, 0x69, 0x73,
	0x74, 0x22, 0xe6, 0x02, 0x0a, 0x16, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x6c, 0x79, 0x47,
	0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x71, 0x12, 0x24, 0x0a, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x10, 0x2e, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79,
	0x70, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x6c, 0x6f, 0x63, 0x6b, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6c, 0x6f, 0x63, 0x6b, 0x65, 0x64, 0x42, 0x79, 0x12,
	0x19, 0x0a, 0x08, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x67, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x47, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x70,
	0x65, 0x6e, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6f, 0x70, 0x65, 0x6e,
	0x69, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x72, 0x6f, 0x6f, 0x6d, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x06, 0x72, 0x6f, 0x6f, 0x6d, 0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x6d,
	0x61, 0x74, 0x63, 0x68, 0x5f, 0x63, 0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x6d, 0x61, 0x74, 0x63, 0x68, 0x43, 0x69, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x6d, 0x61, 0x74, 0x63,
	0x68, 0x5f, 0x69, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x61, 0x74, 0x63,
	0x68, 0x49, 0x64, 0x12, 0x48, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18,
	0x08, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2c, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x6c, 0x79, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x52, 0x65, 0x71, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x3b, 0x0a,
	0x0d, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10,
	0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79,
	0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x56, 0x0a, 0x16, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x50, 0x6c, 0x79, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x52, 0x73, 0x70, 0x12, 0x10, 0x0a, 0x03, 0x65, 0x72, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x65, 0x72, 0x72, 0x12, 0x2a, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e,
	0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x22, 0x2d, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x50, 0x6c, 0x79, 0x47, 0x61, 0x6d, 0x65,
	0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x71, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x70, 0x65,
	0x6e, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6f, 0x70, 0x65, 0x6e, 0x69,
	0x64, 0x22, 0x53, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x50, 0x6c, 0x79, 0x47, 0x61, 0x6d, 0x65, 0x53,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x73, 0x70, 0x12, 0x10, 0x0a, 0x03, 0x65, 0x72, 0x72, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x65, 0x72, 0x72, 0x12, 0x2a, 0x0a, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2a, 0x2b, 0x0a, 0x08, 0x47, 0x61, 0x6d, 0x65, 0x54, 0x79,
	0x70, 0x65, 0x12, 0x0d, 0x0a, 0x09, 0x41, 0x73, 0x79, 0x6e, 0x63, 0x47, 0x61, 0x6d, 0x65, 0x10,
	0x00, 0x12, 0x10, 0x0a, 0x0c, 0x52, 0x65, 0x61, 0x6c, 0x54, 0x69, 0x6d, 0x65, 0x47, 0x61, 0x6d,
	0x65, 0x10, 0x01, 0x32, 0xf9, 0x01, 0x0a, 0x0a, 0x55, 0x73, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x12, 0x42, 0x0a, 0x0c, 0x47, 0x65, 0x74, 0x50, 0x6c, 0x79, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x12, 0x17, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x50,
	0x6c, 0x79, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x71, 0x1a, 0x17, 0x2e, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x6c, 0x79, 0x53, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x52, 0x73, 0x70, 0x22, 0x00, 0x12, 0x57, 0x0a, 0x13, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x50, 0x6c, 0x79, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1e, 0x2e,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x6c, 0x79,
	0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x71, 0x1a, 0x1e, 0x2e,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x6c, 0x79,
	0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x73, 0x70, 0x22, 0x00, 0x12,
	0x4e, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x50, 0x6c, 0x79, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x12, 0x1b, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x47, 0x65, 0x74,
	0x50, 0x6c, 0x79, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x71,
	0x1a, 0x1b, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x6c, 0x79,
	0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x73, 0x70, 0x22, 0x00, 0x42,
	0x10, 0x5a, 0x0e, 0x2e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_status_proto_rawDescOnce sync.Once
	file_proto_status_proto_rawDescData = file_proto_status_proto_rawDesc
)

func file_proto_status_proto_rawDescGZIP() []byte {
	file_proto_status_proto_rawDescOnce.Do(func() {
		file_proto_status_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_status_proto_rawDescData)
	})
	return file_proto_status_proto_rawDescData
}

var file_proto_status_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_proto_status_proto_msgTypes = make([]protoimpl.MessageInfo, 12)
var file_proto_status_proto_goTypes = []interface{}{
	(GameType)(0),                  // 0: status.GameType
	(GameStatus_Status)(0),         // 1: status.GameStatus.Status
	(*GameStatus)(nil),             // 2: status.GameStatus
	(*AsyncGameData)(nil),          // 3: status.AsyncGameData
	(*UpdatePlyStatusReq)(nil),     // 4: status.UpdatePlyStatusReq
	(*UpdatePlyStatusRsp)(nil),     // 5: status.UpdatePlyStatusRsp
	(*GetPlyStatusReq)(nil),        // 6: status.GetPlyStatusReq
	(*GetPlyStatusRsp)(nil),        // 7: status.GetPlyStatusRsp
	(*UpdatePlyGameStatusReq)(nil), // 8: status.UpdatePlyGameStatusReq
	(*UpdatePlyGameStatusRsp)(nil), // 9: status.UpdatePlyGameStatusRsp
	(*GetPlyGameStatusReq)(nil),    // 10: status.GetPlyGameStatusReq
	(*GetPlyGameStatusRsp)(nil),    // 11: status.GetPlyGameStatusRsp
	nil,                            // 12: status.GameStatus.MetadataEntry
	nil,                            // 13: status.UpdatePlyGameStatusReq.MetadataEntry
	(*proto.PlayerStatus)(nil),     // 14: PlayerStatus
}
var file_proto_status_proto_depIdxs = []int32{
	0,  // 0: status.GameStatus.type:type_name -> status.GameType
	1,  // 1: status.GameStatus.status:type_name -> status.GameStatus.Status
	12, // 2: status.GameStatus.metadata:type_name -> status.GameStatus.MetadataEntry
	14, // 3: status.UpdatePlyStatusReq.status:type_name -> PlayerStatus
	14, // 4: status.GetPlyStatusRsp.status_list:type_name -> PlayerStatus
	0,  // 5: status.UpdatePlyGameStatusReq.type:type_name -> status.GameType
	13, // 6: status.UpdatePlyGameStatusReq.metadata:type_name -> status.UpdatePlyGameStatusReq.MetadataEntry
	2,  // 7: status.UpdatePlyGameStatusRsp.status:type_name -> status.GameStatus
	2,  // 8: status.GetPlyGameStatusRsp.status:type_name -> status.GameStatus
	6,  // 9: status.UserStatus.GetPlyStatus:input_type -> status.GetPlyStatusReq
	8,  // 10: status.UserStatus.UpdatePlyGameStatus:input_type -> status.UpdatePlyGameStatusReq
	10, // 11: status.UserStatus.GetPlyGameStatus:input_type -> status.GetPlyGameStatusReq
	7,  // 12: status.UserStatus.GetPlyStatus:output_type -> status.GetPlyStatusRsp
	9,  // 13: status.UserStatus.UpdatePlyGameStatus:output_type -> status.UpdatePlyGameStatusRsp
	11, // 14: status.UserStatus.GetPlyGameStatus:output_type -> status.GetPlyGameStatusRsp
	12, // [12:15] is the sub-list for method output_type
	9,  // [9:12] is the sub-list for method input_type
	9,  // [9:9] is the sub-list for extension type_name
	9,  // [9:9] is the sub-list for extension extendee
	0,  // [0:9] is the sub-list for field type_name
}

func init() { file_proto_status_proto_init() }
func file_proto_status_proto_init() {
	if File_proto_status_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_status_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GameStatus); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_status_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AsyncGameData); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_status_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdatePlyStatusReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_status_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdatePlyStatusRsp); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_status_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetPlyStatusReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_status_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetPlyStatusRsp); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_status_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdatePlyGameStatusReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_status_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdatePlyGameStatusRsp); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_status_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetPlyGameStatusReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_status_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetPlyGameStatusRsp); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_status_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   12,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_status_proto_goTypes,
		DependencyIndexes: file_proto_status_proto_depIdxs,
		EnumInfos:         file_proto_status_proto_enumTypes,
		MessageInfos:      file_proto_status_proto_msgTypes,
	}.Build()
	File_proto_status_proto = out.File
	file_proto_status_proto_rawDesc = nil
	file_proto_status_proto_goTypes = nil
	file_proto_status_proto_depIdxs = nil
}
