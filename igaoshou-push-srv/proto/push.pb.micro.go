// Code generated by protoc-gen-micro. DO NOT EDIT.
// source: proto/push.proto

package push

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

// Api Endpoints for Push service

func NewPushEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Push service

type PushService interface {
	// 注册到 push server
	Register(ctx context.Context, in *RegisterReq, opts ...client.CallOption) (*Empty, error)
	Heartbeat(ctx context.Context, in *Ping, opts ...client.CallOption) (*Pong, error)
	// 邀请好友
	PushMessage(ctx context.Context, in *PushMessageReq, opts ...client.CallOption) (*PushMessageRsp, error)
}

type pushService struct {
	c    client.Client
	name string
}

func NewPushService(name string, c client.Client) PushService {
	return &pushService{
		c:    c,
		name: name,
	}
}

func (c *pushService) Register(ctx context.Context, in *RegisterReq, opts ...client.CallOption) (*Empty, error) {
	req := c.c.NewRequest(c.name, "Push.Register", in)
	out := new(Empty)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *pushService) Heartbeat(ctx context.Context, in *Ping, opts ...client.CallOption) (*Pong, error) {
	req := c.c.NewRequest(c.name, "Push.Heartbeat", in)
	out := new(Pong)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *pushService) PushMessage(ctx context.Context, in *PushMessageReq, opts ...client.CallOption) (*PushMessageRsp, error) {
	req := c.c.NewRequest(c.name, "Push.PushMessage", in)
	out := new(PushMessageRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Push service

type PushHandler interface {
	// 注册到 push server
	Register(context.Context, *RegisterReq, *Empty) error
	Heartbeat(context.Context, *Ping, *Pong) error
	// 邀请好友
	PushMessage(context.Context, *PushMessageReq, *PushMessageRsp) error
}

func RegisterPushHandler(s server.Server, hdlr PushHandler, opts ...server.HandlerOption) error {
	type push interface {
		Register(ctx context.Context, in *RegisterReq, out *Empty) error
		Heartbeat(ctx context.Context, in *Ping, out *Pong) error
		PushMessage(ctx context.Context, in *PushMessageReq, out *PushMessageRsp) error
	}
	type Push struct {
		push
	}
	h := &pushHandler{hdlr}
	return s.Handle(s.NewHandler(&Push{h}, opts...))
}

type pushHandler struct {
	PushHandler
}

func (h *pushHandler) Register(ctx context.Context, in *RegisterReq, out *Empty) error {
	return h.PushHandler.Register(ctx, in, out)
}

func (h *pushHandler) Heartbeat(ctx context.Context, in *Ping, out *Pong) error {
	return h.PushHandler.Heartbeat(ctx, in, out)
}

func (h *pushHandler) PushMessage(ctx context.Context, in *PushMessageReq, out *PushMessageRsp) error {
	return h.PushHandler.PushMessage(ctx, in, out)
}

// Api Endpoints for PushRpc service

func NewPushRpcEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for PushRpc service

type PushRpcService interface {
	// 获取在线人数
	GetOnlineNum(ctx context.Context, in *GetOnlineNumReq, opts ...client.CallOption) (*GetOnlineNumRsp, error)
	// 发送消息到客户端
	Push(ctx context.Context, in *PushReq, opts ...client.CallOption) (*PushRsp, error)
}

type pushRpcService struct {
	c    client.Client
	name string
}

func NewPushRpcService(name string, c client.Client) PushRpcService {
	return &pushRpcService{
		c:    c,
		name: name,
	}
}

func (c *pushRpcService) GetOnlineNum(ctx context.Context, in *GetOnlineNumReq, opts ...client.CallOption) (*GetOnlineNumRsp, error) {
	req := c.c.NewRequest(c.name, "PushRpc.GetOnlineNum", in)
	out := new(GetOnlineNumRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *pushRpcService) Push(ctx context.Context, in *PushReq, opts ...client.CallOption) (*PushRsp, error) {
	req := c.c.NewRequest(c.name, "PushRpc.Push", in)
	out := new(PushRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for PushRpc service

type PushRpcHandler interface {
	// 获取在线人数
	GetOnlineNum(context.Context, *GetOnlineNumReq, *GetOnlineNumRsp) error
	// 发送消息到客户端
	Push(context.Context, *PushReq, *PushRsp) error
}

func RegisterPushRpcHandler(s server.Server, hdlr PushRpcHandler, opts ...server.HandlerOption) error {
	type pushRpc interface {
		GetOnlineNum(ctx context.Context, in *GetOnlineNumReq, out *GetOnlineNumRsp) error
		Push(ctx context.Context, in *PushReq, out *PushRsp) error
	}
	type PushRpc struct {
		pushRpc
	}
	h := &pushRpcHandler{hdlr}
	return s.Handle(s.NewHandler(&PushRpc{h}, opts...))
}

type pushRpcHandler struct {
	PushRpcHandler
}

func (h *pushRpcHandler) GetOnlineNum(ctx context.Context, in *GetOnlineNumReq, out *GetOnlineNumRsp) error {
	return h.PushRpcHandler.GetOnlineNum(ctx, in, out)
}

func (h *pushRpcHandler) Push(ctx context.Context, in *PushReq, out *PushRsp) error {
	return h.PushRpcHandler.Push(ctx, in, out)
}
