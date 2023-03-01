// Code generated by protoc-gen-micro. DO NOT EDIT.
// source: proto/task.proto

package task

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

// Api Endpoints for Task service

func NewTaskEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Task service

type TaskService interface {
	// 拉取进行中的任务列表
	GetTaskList(ctx context.Context, in *GetTaskListReq, opts ...client.CallOption) (*GetTaskListRsp, error)
	// 获取任务奖励
	GetAward(ctx context.Context, in *GetAwardReq, opts ...client.CallOption) (*GetAwardRsp, error)
	// 获取当前任务组的下一个任务
	GetNextTask(ctx context.Context, in *GetNextTaskReq, opts ...client.CallOption) (*GetNextTaskRsp, error)
	// 获取宝箱任务奖励
	GetBoxTaskAward(ctx context.Context, in *GetAwardReq, opts ...client.CallOption) (*GetAwardRsp, error)
	// 拉取宝箱任务
	GetBoxTaskList(ctx context.Context, in *GetTaskListReq, opts ...client.CallOption) (*GetTaskListRsp, error)
	// 更新宝箱任务
	RefreshBoxTaskList(ctx context.Context, in *GetTaskListReq, opts ...client.CallOption) (*GetTaskListRsp, error)
	// 更新任务进度
	UpdateTaskStatus(ctx context.Context, in *UpdateTaskStatusReq, opts ...client.CallOption) (*UpdateTaskStatusRsp, error)
}

type taskService struct {
	c    client.Client
	name string
}

func NewTaskService(name string, c client.Client) TaskService {
	return &taskService{
		c:    c,
		name: name,
	}
}

func (c *taskService) GetTaskList(ctx context.Context, in *GetTaskListReq, opts ...client.CallOption) (*GetTaskListRsp, error) {
	req := c.c.NewRequest(c.name, "Task.GetTaskList", in)
	out := new(GetTaskListRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *taskService) GetAward(ctx context.Context, in *GetAwardReq, opts ...client.CallOption) (*GetAwardRsp, error) {
	req := c.c.NewRequest(c.name, "Task.GetAward", in)
	out := new(GetAwardRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *taskService) GetNextTask(ctx context.Context, in *GetNextTaskReq, opts ...client.CallOption) (*GetNextTaskRsp, error) {
	req := c.c.NewRequest(c.name, "Task.GetNextTask", in)
	out := new(GetNextTaskRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *taskService) GetBoxTaskAward(ctx context.Context, in *GetAwardReq, opts ...client.CallOption) (*GetAwardRsp, error) {
	req := c.c.NewRequest(c.name, "Task.GetBoxTaskAward", in)
	out := new(GetAwardRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *taskService) GetBoxTaskList(ctx context.Context, in *GetTaskListReq, opts ...client.CallOption) (*GetTaskListRsp, error) {
	req := c.c.NewRequest(c.name, "Task.GetBoxTaskList", in)
	out := new(GetTaskListRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *taskService) RefreshBoxTaskList(ctx context.Context, in *GetTaskListReq, opts ...client.CallOption) (*GetTaskListRsp, error) {
	req := c.c.NewRequest(c.name, "Task.RefreshBoxTaskList", in)
	out := new(GetTaskListRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *taskService) UpdateTaskStatus(ctx context.Context, in *UpdateTaskStatusReq, opts ...client.CallOption) (*UpdateTaskStatusRsp, error) {
	req := c.c.NewRequest(c.name, "Task.UpdateTaskStatus", in)
	out := new(UpdateTaskStatusRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Task service

type TaskHandler interface {
	// 拉取进行中的任务列表
	GetTaskList(context.Context, *GetTaskListReq, *GetTaskListRsp) error
	// 获取任务奖励
	GetAward(context.Context, *GetAwardReq, *GetAwardRsp) error
	// 获取当前任务组的下一个任务
	GetNextTask(context.Context, *GetNextTaskReq, *GetNextTaskRsp) error
	// 获取宝箱任务奖励
	GetBoxTaskAward(context.Context, *GetAwardReq, *GetAwardRsp) error
	// 拉取宝箱任务
	GetBoxTaskList(context.Context, *GetTaskListReq, *GetTaskListRsp) error
	// 更新宝箱任务
	RefreshBoxTaskList(context.Context, *GetTaskListReq, *GetTaskListRsp) error
	// 更新任务进度
	UpdateTaskStatus(context.Context, *UpdateTaskStatusReq, *UpdateTaskStatusRsp) error
}

func RegisterTaskHandler(s server.Server, hdlr TaskHandler, opts ...server.HandlerOption) error {
	type task interface {
		GetTaskList(ctx context.Context, in *GetTaskListReq, out *GetTaskListRsp) error
		GetAward(ctx context.Context, in *GetAwardReq, out *GetAwardRsp) error
		GetNextTask(ctx context.Context, in *GetNextTaskReq, out *GetNextTaskRsp) error
		GetBoxTaskAward(ctx context.Context, in *GetAwardReq, out *GetAwardRsp) error
		GetBoxTaskList(ctx context.Context, in *GetTaskListReq, out *GetTaskListRsp) error
		RefreshBoxTaskList(ctx context.Context, in *GetTaskListReq, out *GetTaskListRsp) error
		UpdateTaskStatus(ctx context.Context, in *UpdateTaskStatusReq, out *UpdateTaskStatusRsp) error
	}
	type Task struct {
		task
	}
	h := &taskHandler{hdlr}
	return s.Handle(s.NewHandler(&Task{h}, opts...))
}

type taskHandler struct {
	TaskHandler
}

func (h *taskHandler) GetTaskList(ctx context.Context, in *GetTaskListReq, out *GetTaskListRsp) error {
	return h.TaskHandler.GetTaskList(ctx, in, out)
}

func (h *taskHandler) GetAward(ctx context.Context, in *GetAwardReq, out *GetAwardRsp) error {
	return h.TaskHandler.GetAward(ctx, in, out)
}

func (h *taskHandler) GetNextTask(ctx context.Context, in *GetNextTaskReq, out *GetNextTaskRsp) error {
	return h.TaskHandler.GetNextTask(ctx, in, out)
}

func (h *taskHandler) GetBoxTaskAward(ctx context.Context, in *GetAwardReq, out *GetAwardRsp) error {
	return h.TaskHandler.GetBoxTaskAward(ctx, in, out)
}

func (h *taskHandler) GetBoxTaskList(ctx context.Context, in *GetTaskListReq, out *GetTaskListRsp) error {
	return h.TaskHandler.GetBoxTaskList(ctx, in, out)
}

func (h *taskHandler) RefreshBoxTaskList(ctx context.Context, in *GetTaskListReq, out *GetTaskListRsp) error {
	return h.TaskHandler.RefreshBoxTaskList(ctx, in, out)
}

func (h *taskHandler) UpdateTaskStatus(ctx context.Context, in *UpdateTaskStatusReq, out *UpdateTaskStatusRsp) error {
	return h.TaskHandler.UpdateTaskStatus(ctx, in, out)
}