// Code generated by protoc-gen-micro. DO NOT EDIT.
// source: proto/pubsub.proto

package pubsub

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

// Api Endpoints for Pubsub service

func NewPubsubEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Pubsub service

type PubsubService interface {
	Call(ctx context.Context, in *Request, opts ...client.CallOption) (*Response, error)
	Stream(ctx context.Context, in *StreamingRequest, opts ...client.CallOption) (Pubsub_StreamService, error)
	PingPong(ctx context.Context, opts ...client.CallOption) (Pubsub_PingPongService, error)
}

type pubsubService struct {
	c    client.Client
	name string
}

func NewPubsubService(name string, c client.Client) PubsubService {
	return &pubsubService{
		c:    c,
		name: name,
	}
}

func (c *pubsubService) Call(ctx context.Context, in *Request, opts ...client.CallOption) (*Response, error) {
	req := c.c.NewRequest(c.name, "Pubsub.Call", in)
	out := new(Response)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *pubsubService) Stream(ctx context.Context, in *StreamingRequest, opts ...client.CallOption) (Pubsub_StreamService, error) {
	req := c.c.NewRequest(c.name, "Pubsub.Stream", &StreamingRequest{})
	stream, err := c.c.Stream(ctx, req, opts...)
	if err != nil {
		return nil, err
	}
	if err := stream.Send(in); err != nil {
		return nil, err
	}
	return &pubsubServiceStream{stream}, nil
}

type Pubsub_StreamService interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Recv() (*StreamingResponse, error)
}

type pubsubServiceStream struct {
	stream client.Stream
}

func (x *pubsubServiceStream) Close() error {
	return x.stream.Close()
}

func (x *pubsubServiceStream) Context() context.Context {
	return x.stream.Context()
}

func (x *pubsubServiceStream) SendMsg(m interface{}) error {
	return x.stream.Send(m)
}

func (x *pubsubServiceStream) RecvMsg(m interface{}) error {
	return x.stream.Recv(m)
}

func (x *pubsubServiceStream) Recv() (*StreamingResponse, error) {
	m := new(StreamingResponse)
	err := x.stream.Recv(m)
	if err != nil {
		return nil, err
	}
	return m, nil
}

func (c *pubsubService) PingPong(ctx context.Context, opts ...client.CallOption) (Pubsub_PingPongService, error) {
	req := c.c.NewRequest(c.name, "Pubsub.PingPong", &Ping{})
	stream, err := c.c.Stream(ctx, req, opts...)
	if err != nil {
		return nil, err
	}
	return &pubsubServicePingPong{stream}, nil
}

type Pubsub_PingPongService interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Send(*Ping) error
	Recv() (*Pong, error)
}

type pubsubServicePingPong struct {
	stream client.Stream
}

func (x *pubsubServicePingPong) Close() error {
	return x.stream.Close()
}

func (x *pubsubServicePingPong) Context() context.Context {
	return x.stream.Context()
}

func (x *pubsubServicePingPong) SendMsg(m interface{}) error {
	return x.stream.Send(m)
}

func (x *pubsubServicePingPong) RecvMsg(m interface{}) error {
	return x.stream.Recv(m)
}

func (x *pubsubServicePingPong) Send(m *Ping) error {
	return x.stream.Send(m)
}

func (x *pubsubServicePingPong) Recv() (*Pong, error) {
	m := new(Pong)
	err := x.stream.Recv(m)
	if err != nil {
		return nil, err
	}
	return m, nil
}

// Server API for Pubsub service

type PubsubHandler interface {
	Call(context.Context, *Request, *Response) error
	Stream(context.Context, *StreamingRequest, Pubsub_StreamStream) error
	PingPong(context.Context, Pubsub_PingPongStream) error
}

func RegisterPubsubHandler(s server.Server, hdlr PubsubHandler, opts ...server.HandlerOption) error {
	type pubsub interface {
		Call(ctx context.Context, in *Request, out *Response) error
		Stream(ctx context.Context, stream server.Stream) error
		PingPong(ctx context.Context, stream server.Stream) error
	}
	type Pubsub struct {
		pubsub
	}
	h := &pubsubHandler{hdlr}
	return s.Handle(s.NewHandler(&Pubsub{h}, opts...))
}

type pubsubHandler struct {
	PubsubHandler
}

func (h *pubsubHandler) Call(ctx context.Context, in *Request, out *Response) error {
	return h.PubsubHandler.Call(ctx, in, out)
}

func (h *pubsubHandler) Stream(ctx context.Context, stream server.Stream) error {
	m := new(StreamingRequest)
	if err := stream.Recv(m); err != nil {
		return err
	}
	return h.PubsubHandler.Stream(ctx, m, &pubsubStreamStream{stream})
}

type Pubsub_StreamStream interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Send(*StreamingResponse) error
}

type pubsubStreamStream struct {
	stream server.Stream
}

func (x *pubsubStreamStream) Close() error {
	return x.stream.Close()
}

func (x *pubsubStreamStream) Context() context.Context {
	return x.stream.Context()
}

func (x *pubsubStreamStream) SendMsg(m interface{}) error {
	return x.stream.Send(m)
}

func (x *pubsubStreamStream) RecvMsg(m interface{}) error {
	return x.stream.Recv(m)
}

func (x *pubsubStreamStream) Send(m *StreamingResponse) error {
	return x.stream.Send(m)
}

func (h *pubsubHandler) PingPong(ctx context.Context, stream server.Stream) error {
	return h.PubsubHandler.PingPong(ctx, &pubsubPingPongStream{stream})
}

type Pubsub_PingPongStream interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Send(*Pong) error
	Recv() (*Ping, error)
}

type pubsubPingPongStream struct {
	stream server.Stream
}

func (x *pubsubPingPongStream) Close() error {
	return x.stream.Close()
}

func (x *pubsubPingPongStream) Context() context.Context {
	return x.stream.Context()
}

func (x *pubsubPingPongStream) SendMsg(m interface{}) error {
	return x.stream.Send(m)
}

func (x *pubsubPingPongStream) RecvMsg(m interface{}) error {
	return x.stream.Recv(m)
}

func (x *pubsubPingPongStream) Send(m *Pong) error {
	return x.stream.Send(m)
}

func (x *pubsubPingPongStream) Recv() (*Ping, error) {
	m := new(Ping)
	if err := x.stream.Recv(m); err != nil {
		return nil, err
	}
	return m, nil
}