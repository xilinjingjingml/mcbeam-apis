// Code generated by protoc-gen-micro. DO NOT EDIT.
// source: proto/robot.proto

package robot

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

import (
	context "context"
	api "github.com/micro/micro/v3/service/api"
	client "github.com/micro/micro/v3/service/client"
	server "github.com/micro/micro/v3/service/server"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// Reference imports to suppress errors if they are not otherwise used.
var _ api.Endpoint
var _ context.Context
var _ client.Option
var _ server.Option

// Api Endpoints for Robot service

func NewRobotEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Robot service

type RobotService interface {
	// 通知机器人入桌
	NotifyJoinRoom(ctx context.Context, in *NotifyJoinRoomReq, opts ...client.CallOption) (*NotifyJoinRoomRsp, error)
}

type robotService struct {
	c    client.Client
	name string
}

func NewRobotService(name string, c client.Client) RobotService {
	return &robotService{
		c:    c,
		name: name,
	}
}

func (c *robotService) NotifyJoinRoom(ctx context.Context, in *NotifyJoinRoomReq, opts ...client.CallOption) (*NotifyJoinRoomRsp, error) {
	req := c.c.NewRequest(c.name, "Robot.NotifyJoinRoom", in)
	out := new(NotifyJoinRoomRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Robot service

type RobotHandler interface {
	// 通知机器人入桌
	NotifyJoinRoom(context.Context, *NotifyJoinRoomReq, *NotifyJoinRoomRsp) error
}

func RegisterRobotHandler(s server.Server, hdlr RobotHandler, opts ...server.HandlerOption) error {
	type robot interface {
		NotifyJoinRoom(ctx context.Context, in *NotifyJoinRoomReq, out *NotifyJoinRoomRsp) error
	}
	type Robot struct {
		robot
	}
	h := &robotHandler{hdlr}
	return s.Handle(s.NewHandler(&Robot{h}, opts...))
}

type robotHandler struct {
	RobotHandler
}

func (h *robotHandler) NotifyJoinRoom(ctx context.Context, in *NotifyJoinRoomReq, out *NotifyJoinRoomRsp) error {
	return h.RobotHandler.NotifyJoinRoom(ctx, in, out)
}