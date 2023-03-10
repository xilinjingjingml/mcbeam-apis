// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.13.0
// source: proto/anti-addiction.proto

package proto

import (
	proto "github.com/golang/protobuf/proto"
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

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type CheckReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name  string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	IdNum string `protobuf:"bytes,2,opt,name=idNum,proto3" json:"idNum,omitempty"`
}

func (x *CheckReq) Reset() {
	*x = CheckReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_anti_addiction_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CheckReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CheckReq) ProtoMessage() {}

func (x *CheckReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_anti_addiction_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CheckReq.ProtoReflect.Descriptor instead.
func (*CheckReq) Descriptor() ([]byte, []int) {
	return file_proto_anti_addiction_proto_rawDescGZIP(), []int{0}
}

func (x *CheckReq) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CheckReq) GetIdNum() string {
	if x != nil {
		return x.IdNum
	}
	return ""
}

type CheckRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code   string `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
	Msg    string `protobuf:"bytes,2,opt,name=msg,proto3" json:"msg,omitempty"`
	Status string `protobuf:"bytes,3,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *CheckRes) Reset() {
	*x = CheckRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_anti_addiction_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CheckRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CheckRes) ProtoMessage() {}

func (x *CheckRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_anti_addiction_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CheckRes.ProtoReflect.Descriptor instead.
func (*CheckRes) Descriptor() ([]byte, []int) {
	return file_proto_anti_addiction_proto_rawDescGZIP(), []int{1}
}

func (x *CheckRes) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *CheckRes) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

func (x *CheckRes) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type QueryReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *QueryReq) Reset() {
	*x = QueryReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_anti_addiction_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QueryReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QueryReq) ProtoMessage() {}

func (x *QueryReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_anti_addiction_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QueryReq.ProtoReflect.Descriptor instead.
func (*QueryReq) Descriptor() ([]byte, []int) {
	return file_proto_anti_addiction_proto_rawDescGZIP(), []int{2}
}

type QueryRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code   string `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
	Msg    string `protobuf:"bytes,2,opt,name=msg,proto3" json:"msg,omitempty"`
	Status string `protobuf:"bytes,3,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *QueryRes) Reset() {
	*x = QueryRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_anti_addiction_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QueryRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QueryRes) ProtoMessage() {}

func (x *QueryRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_anti_addiction_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QueryRes.ProtoReflect.Descriptor instead.
func (*QueryRes) Descriptor() ([]byte, []int) {
	return file_proto_anti_addiction_proto_rawDescGZIP(), []int{3}
}

func (x *QueryRes) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *QueryRes) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

func (x *QueryRes) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type AntiAddictionLog struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//@inject_tag: bson:"plat_aid"
	PlatAid int32 `protobuf:"varint,1,opt,name=plat_aid,json=platAid,proto3" json:"plat_aid,omitempty" bson:"plat_aid"`
	//@inject_tag: bson:"uuid"
	Uuid string `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty" bson:"uuid"`
	//@inject_tag: bson:"ai"
	Ai string `protobuf:"bytes,3,opt,name=ai,proto3" json:"ai,omitempty" bson:"ai"`
	//@inject_tag: bson:"status"
	Status string `protobuf:"bytes,4,opt,name=status,proto3" json:"status,omitempty" bson:"status"`
	//@inject_tag: bson:"pi"
	Pi string `protobuf:"bytes,5,opt,name=pi,proto3" json:"pi,omitempty" bson:"pi"`
	//@inject_tag: bson:"name"
	Name string `protobuf:"bytes,6,opt,name=name,proto3" json:"name,omitempty" bson:"name"`
	//@inject_tag: bson:"idNum"
	IdNum string `protobuf:"bytes,7,opt,name=idNum,proto3" json:"idNum,omitempty" bson:"idNum"`
	//@inject_tag: bson:"time"
	Time int64 `protobuf:"varint,8,opt,name=time,proto3" json:"time,omitempty" bson:"time"`
}

func (x *AntiAddictionLog) Reset() {
	*x = AntiAddictionLog{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_anti_addiction_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AntiAddictionLog) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AntiAddictionLog) ProtoMessage() {}

func (x *AntiAddictionLog) ProtoReflect() protoreflect.Message {
	mi := &file_proto_anti_addiction_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AntiAddictionLog.ProtoReflect.Descriptor instead.
func (*AntiAddictionLog) Descriptor() ([]byte, []int) {
	return file_proto_anti_addiction_proto_rawDescGZIP(), []int{4}
}

func (x *AntiAddictionLog) GetPlatAid() int32 {
	if x != nil {
		return x.PlatAid
	}
	return 0
}

func (x *AntiAddictionLog) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *AntiAddictionLog) GetAi() string {
	if x != nil {
		return x.Ai
	}
	return ""
}

func (x *AntiAddictionLog) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *AntiAddictionLog) GetPi() string {
	if x != nil {
		return x.Pi
	}
	return ""
}

func (x *AntiAddictionLog) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *AntiAddictionLog) GetIdNum() string {
	if x != nil {
		return x.IdNum
	}
	return ""
}

func (x *AntiAddictionLog) GetTime() int64 {
	if x != nil {
		return x.Time
	}
	return 0
}

var File_proto_anti_addiction_proto protoreflect.FileDescriptor

var file_proto_anti_addiction_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x61, 0x6e, 0x74, 0x69, 0x2d, 0x61, 0x64, 0x64,
	0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x34, 0x0a, 0x08, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x69, 0x64, 0x4e, 0x75, 0x6d, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x69, 0x64, 0x4e, 0x75, 0x6d, 0x22, 0x48, 0x0a, 0x08, 0x43, 0x68, 0x65,
	0x63, 0x6b, 0x52, 0x65, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x73, 0x67, 0x12, 0x16, 0x0a, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x22, 0x0a, 0x0a, 0x08, 0x51, 0x75, 0x65, 0x72, 0x79, 0x52, 0x65, 0x71, 0x22,
	0x48, 0x0a, 0x08, 0x51, 0x75, 0x65, 0x72, 0x79, 0x52, 0x65, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x63,
	0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12,
	0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x73,
	0x67, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0xb7, 0x01, 0x0a, 0x10, 0x41, 0x6e,
	0x74, 0x69, 0x41, 0x64, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x4c, 0x6f, 0x67, 0x12, 0x19,
	0x0a, 0x08, 0x70, 0x6c, 0x61, 0x74, 0x5f, 0x61, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x07, 0x70, 0x6c, 0x61, 0x74, 0x41, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x0e, 0x0a,
	0x02, 0x61, 0x69, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x61, 0x69, 0x12, 0x16, 0x0a,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x0e, 0x0a, 0x02, 0x70, 0x69, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x70, 0x69, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x69, 0x64, 0x4e,
	0x75, 0x6d, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x64, 0x4e, 0x75, 0x6d, 0x12,
	0x12, 0x0a, 0x04, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x74,
	0x69, 0x6d, 0x65, 0x32, 0x69, 0x0a, 0x0d, 0x41, 0x6e, 0x74, 0x69, 0x41, 0x64, 0x64, 0x69, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2b, 0x0a, 0x05, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x12, 0x0f, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x1a, 0x0f,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x22,
	0x00, 0x12, 0x2b, 0x0a, 0x05, 0x51, 0x75, 0x65, 0x72, 0x79, 0x12, 0x0f, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x51, 0x75, 0x65, 0x72, 0x79, 0x52, 0x65, 0x71, 0x1a, 0x0f, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x2e, 0x51, 0x75, 0x65, 0x72, 0x79, 0x52, 0x65, 0x73, 0x22, 0x00, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_anti_addiction_proto_rawDescOnce sync.Once
	file_proto_anti_addiction_proto_rawDescData = file_proto_anti_addiction_proto_rawDesc
)

func file_proto_anti_addiction_proto_rawDescGZIP() []byte {
	file_proto_anti_addiction_proto_rawDescOnce.Do(func() {
		file_proto_anti_addiction_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_anti_addiction_proto_rawDescData)
	})
	return file_proto_anti_addiction_proto_rawDescData
}

var file_proto_anti_addiction_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_proto_anti_addiction_proto_goTypes = []interface{}{
	(*CheckReq)(nil),         // 0: proto.CheckReq
	(*CheckRes)(nil),         // 1: proto.CheckRes
	(*QueryReq)(nil),         // 2: proto.QueryReq
	(*QueryRes)(nil),         // 3: proto.QueryRes
	(*AntiAddictionLog)(nil), // 4: proto.AntiAddictionLog
}
var file_proto_anti_addiction_proto_depIdxs = []int32{
	0, // 0: proto.AntiAddiction.Check:input_type -> proto.CheckReq
	2, // 1: proto.AntiAddiction.Query:input_type -> proto.QueryReq
	1, // 2: proto.AntiAddiction.Check:output_type -> proto.CheckRes
	3, // 3: proto.AntiAddiction.Query:output_type -> proto.QueryRes
	2, // [2:4] is the sub-list for method output_type
	0, // [0:2] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_proto_anti_addiction_proto_init() }
func file_proto_anti_addiction_proto_init() {
	if File_proto_anti_addiction_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_anti_addiction_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CheckReq); i {
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
		file_proto_anti_addiction_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CheckRes); i {
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
		file_proto_anti_addiction_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QueryReq); i {
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
		file_proto_anti_addiction_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QueryRes); i {
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
		file_proto_anti_addiction_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AntiAddictionLog); i {
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
			RawDescriptor: file_proto_anti_addiction_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_anti_addiction_proto_goTypes,
		DependencyIndexes: file_proto_anti_addiction_proto_depIdxs,
		MessageInfos:      file_proto_anti_addiction_proto_msgTypes,
	}.Build()
	File_proto_anti_addiction_proto = out.File
	file_proto_anti_addiction_proto_rawDesc = nil
	file_proto_anti_addiction_proto_goTypes = nil
	file_proto_anti_addiction_proto_depIdxs = nil
}
