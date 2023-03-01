// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.12.1
// source: proto/labels.proto

package analysis

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

type UserLabel int32

const (
	UserLabel_Normal   UserLabel = 0 // 普通玩家
	UserLabel_Recharge UserLabel = 1 // 付费玩家
)

// Enum value maps for UserLabel.
var (
	UserLabel_name = map[int32]string{
		0: "Normal",
		1: "Recharge",
	}
	UserLabel_value = map[string]int32{
		"Normal":   0,
		"Recharge": 1,
	}
)

func (x UserLabel) Enum() *UserLabel {
	p := new(UserLabel)
	*p = x
	return p
}

func (x UserLabel) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (UserLabel) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_labels_proto_enumTypes[0].Descriptor()
}

func (UserLabel) Type() protoreflect.EnumType {
	return &file_proto_labels_proto_enumTypes[0]
}

func (x UserLabel) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use UserLabel.Descriptor instead.
func (UserLabel) EnumDescriptor() ([]byte, []int) {
	return file_proto_labels_proto_rawDescGZIP(), []int{0}
}

var File_proto_labels_proto protoreflect.FileDescriptor

var file_proto_labels_proto_rawDesc = []byte{
	0x0a, 0x12, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x61, 0x6e, 0x61, 0x6c, 0x79, 0x73, 0x69, 0x73, 0x2a, 0x25,
	0x0a, 0x09, 0x55, 0x73, 0x65, 0x72, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x12, 0x0a, 0x0a, 0x06, 0x4e,
	0x6f, 0x72, 0x6d, 0x61, 0x6c, 0x10, 0x00, 0x12, 0x0c, 0x0a, 0x08, 0x52, 0x65, 0x63, 0x68, 0x61,
	0x72, 0x67, 0x65, 0x10, 0x01, 0x42, 0x10, 0x5a, 0x0e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x3b, 0x61,
	0x6e, 0x61, 0x6c, 0x79, 0x73, 0x69, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_labels_proto_rawDescOnce sync.Once
	file_proto_labels_proto_rawDescData = file_proto_labels_proto_rawDesc
)

func file_proto_labels_proto_rawDescGZIP() []byte {
	file_proto_labels_proto_rawDescOnce.Do(func() {
		file_proto_labels_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_labels_proto_rawDescData)
	})
	return file_proto_labels_proto_rawDescData
}

var file_proto_labels_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_proto_labels_proto_goTypes = []interface{}{
	(UserLabel)(0), // 0: analysis.UserLabel
}
var file_proto_labels_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_proto_labels_proto_init() }
func file_proto_labels_proto_init() {
	if File_proto_labels_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_labels_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_labels_proto_goTypes,
		DependencyIndexes: file_proto_labels_proto_depIdxs,
		EnumInfos:         file_proto_labels_proto_enumTypes,
	}.Build()
	File_proto_labels_proto = out.File
	file_proto_labels_proto_rawDesc = nil
	file_proto_labels_proto_goTypes = nil
	file_proto_labels_proto_depIdxs = nil
}
