// Code generated by protoc-gen-micro. DO NOT EDIT.
// source: proto/authapi.proto

package proto

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

// Api Endpoints for Auth service

func NewAuthEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Auth service

type AuthService interface {
	AccountLogin(ctx context.Context, in *AccountLoginReq, opts ...client.CallOption) (*LoginRes, error)
	SendPhoneCode(ctx context.Context, in *SendPhoneCodeReq, opts ...client.CallOption) (*SendPhoneCodeRes, error)
	WeChatMiniSessionKey(ctx context.Context, in *WeChatMiniSessionKeyReq, opts ...client.CallOption) (*WeChatMiniSessionKeyRes, error)
	ByteDanceMiniSessionKey(ctx context.Context, in *ByteDanceMiniSessionKeyReq, opts ...client.CallOption) (*ByteDanceMiniSessionKeyRes, error)
	KsMonitor(ctx context.Context, in *KsMonitorReq, opts ...client.CallOption) (*KsMonitorRes, error)
	AddressInfo(ctx context.Context, in *AddressInfoReq, opts ...client.CallOption) (*AddressInfoRes, error)
	GetUserUuid(ctx context.Context, in *GetUserUuidReq, opts ...client.CallOption) (*GetUserUuidRes, error)
	UpdateAccountInfo(ctx context.Context, in *UpdateAccountInfoReq, opts ...client.CallOption) (*UpdateAccountInfoRes, error)
	SendEmail(ctx context.Context, in *SendEmailReq, opts ...client.CallOption) (*SendEmailRes, error)
	VerifyEmail(ctx context.Context, in *VerifyEmailReq, opts ...client.CallOption) (*VerifyEmailRes, error)
	ResetEmailPassword(ctx context.Context, in *ResetEmailPasswordReq, opts ...client.CallOption) (*ResetEmailPasswordRes, error)
	AccessToken(ctx context.Context, in *AccessTokenReq, opts ...client.CallOption) (*AccessTokenRes, error)
}

type authService struct {
	c    client.Client
	name string
}

func NewAuthService(name string, c client.Client) AuthService {
	return &authService{
		c:    c,
		name: name,
	}
}

func (c *authService) AccountLogin(ctx context.Context, in *AccountLoginReq, opts ...client.CallOption) (*LoginRes, error) {
	req := c.c.NewRequest(c.name, "Auth.AccountLogin", in)
	out := new(LoginRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) SendPhoneCode(ctx context.Context, in *SendPhoneCodeReq, opts ...client.CallOption) (*SendPhoneCodeRes, error) {
	req := c.c.NewRequest(c.name, "Auth.SendPhoneCode", in)
	out := new(SendPhoneCodeRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) WeChatMiniSessionKey(ctx context.Context, in *WeChatMiniSessionKeyReq, opts ...client.CallOption) (*WeChatMiniSessionKeyRes, error) {
	req := c.c.NewRequest(c.name, "Auth.WeChatMiniSessionKey", in)
	out := new(WeChatMiniSessionKeyRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) ByteDanceMiniSessionKey(ctx context.Context, in *ByteDanceMiniSessionKeyReq, opts ...client.CallOption) (*ByteDanceMiniSessionKeyRes, error) {
	req := c.c.NewRequest(c.name, "Auth.ByteDanceMiniSessionKey", in)
	out := new(ByteDanceMiniSessionKeyRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) KsMonitor(ctx context.Context, in *KsMonitorReq, opts ...client.CallOption) (*KsMonitorRes, error) {
	req := c.c.NewRequest(c.name, "Auth.KsMonitor", in)
	out := new(KsMonitorRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) AddressInfo(ctx context.Context, in *AddressInfoReq, opts ...client.CallOption) (*AddressInfoRes, error) {
	req := c.c.NewRequest(c.name, "Auth.AddressInfo", in)
	out := new(AddressInfoRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) GetUserUuid(ctx context.Context, in *GetUserUuidReq, opts ...client.CallOption) (*GetUserUuidRes, error) {
	req := c.c.NewRequest(c.name, "Auth.GetUserUuid", in)
	out := new(GetUserUuidRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) UpdateAccountInfo(ctx context.Context, in *UpdateAccountInfoReq, opts ...client.CallOption) (*UpdateAccountInfoRes, error) {
	req := c.c.NewRequest(c.name, "Auth.UpdateAccountInfo", in)
	out := new(UpdateAccountInfoRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) SendEmail(ctx context.Context, in *SendEmailReq, opts ...client.CallOption) (*SendEmailRes, error) {
	req := c.c.NewRequest(c.name, "Auth.SendEmail", in)
	out := new(SendEmailRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) VerifyEmail(ctx context.Context, in *VerifyEmailReq, opts ...client.CallOption) (*VerifyEmailRes, error) {
	req := c.c.NewRequest(c.name, "Auth.VerifyEmail", in)
	out := new(VerifyEmailRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) ResetEmailPassword(ctx context.Context, in *ResetEmailPasswordReq, opts ...client.CallOption) (*ResetEmailPasswordRes, error) {
	req := c.c.NewRequest(c.name, "Auth.ResetEmailPassword", in)
	out := new(ResetEmailPasswordRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authService) AccessToken(ctx context.Context, in *AccessTokenReq, opts ...client.CallOption) (*AccessTokenRes, error) {
	req := c.c.NewRequest(c.name, "Auth.AccessToken", in)
	out := new(AccessTokenRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Auth service

type AuthHandler interface {
	AccountLogin(context.Context, *AccountLoginReq, *LoginRes) error
	SendPhoneCode(context.Context, *SendPhoneCodeReq, *SendPhoneCodeRes) error
	WeChatMiniSessionKey(context.Context, *WeChatMiniSessionKeyReq, *WeChatMiniSessionKeyRes) error
	ByteDanceMiniSessionKey(context.Context, *ByteDanceMiniSessionKeyReq, *ByteDanceMiniSessionKeyRes) error
	KsMonitor(context.Context, *KsMonitorReq, *KsMonitorRes) error
	AddressInfo(context.Context, *AddressInfoReq, *AddressInfoRes) error
	GetUserUuid(context.Context, *GetUserUuidReq, *GetUserUuidRes) error
	UpdateAccountInfo(context.Context, *UpdateAccountInfoReq, *UpdateAccountInfoRes) error
	SendEmail(context.Context, *SendEmailReq, *SendEmailRes) error
	VerifyEmail(context.Context, *VerifyEmailReq, *VerifyEmailRes) error
	ResetEmailPassword(context.Context, *ResetEmailPasswordReq, *ResetEmailPasswordRes) error
	AccessToken(context.Context, *AccessTokenReq, *AccessTokenRes) error
}

func RegisterAuthHandler(s server.Server, hdlr AuthHandler, opts ...server.HandlerOption) error {
	type auth interface {
		AccountLogin(ctx context.Context, in *AccountLoginReq, out *LoginRes) error
		SendPhoneCode(ctx context.Context, in *SendPhoneCodeReq, out *SendPhoneCodeRes) error
		WeChatMiniSessionKey(ctx context.Context, in *WeChatMiniSessionKeyReq, out *WeChatMiniSessionKeyRes) error
		ByteDanceMiniSessionKey(ctx context.Context, in *ByteDanceMiniSessionKeyReq, out *ByteDanceMiniSessionKeyRes) error
		KsMonitor(ctx context.Context, in *KsMonitorReq, out *KsMonitorRes) error
		AddressInfo(ctx context.Context, in *AddressInfoReq, out *AddressInfoRes) error
		GetUserUuid(ctx context.Context, in *GetUserUuidReq, out *GetUserUuidRes) error
		UpdateAccountInfo(ctx context.Context, in *UpdateAccountInfoReq, out *UpdateAccountInfoRes) error
		SendEmail(ctx context.Context, in *SendEmailReq, out *SendEmailRes) error
		VerifyEmail(ctx context.Context, in *VerifyEmailReq, out *VerifyEmailRes) error
		ResetEmailPassword(ctx context.Context, in *ResetEmailPasswordReq, out *ResetEmailPasswordRes) error
		AccessToken(ctx context.Context, in *AccessTokenReq, out *AccessTokenRes) error
	}
	type Auth struct {
		auth
	}
	h := &authHandler{hdlr}
	return s.Handle(s.NewHandler(&Auth{h}, opts...))
}

type authHandler struct {
	AuthHandler
}

func (h *authHandler) AccountLogin(ctx context.Context, in *AccountLoginReq, out *LoginRes) error {
	return h.AuthHandler.AccountLogin(ctx, in, out)
}

func (h *authHandler) SendPhoneCode(ctx context.Context, in *SendPhoneCodeReq, out *SendPhoneCodeRes) error {
	return h.AuthHandler.SendPhoneCode(ctx, in, out)
}

func (h *authHandler) WeChatMiniSessionKey(ctx context.Context, in *WeChatMiniSessionKeyReq, out *WeChatMiniSessionKeyRes) error {
	return h.AuthHandler.WeChatMiniSessionKey(ctx, in, out)
}

func (h *authHandler) ByteDanceMiniSessionKey(ctx context.Context, in *ByteDanceMiniSessionKeyReq, out *ByteDanceMiniSessionKeyRes) error {
	return h.AuthHandler.ByteDanceMiniSessionKey(ctx, in, out)
}

func (h *authHandler) KsMonitor(ctx context.Context, in *KsMonitorReq, out *KsMonitorRes) error {
	return h.AuthHandler.KsMonitor(ctx, in, out)
}

func (h *authHandler) AddressInfo(ctx context.Context, in *AddressInfoReq, out *AddressInfoRes) error {
	return h.AuthHandler.AddressInfo(ctx, in, out)
}

func (h *authHandler) GetUserUuid(ctx context.Context, in *GetUserUuidReq, out *GetUserUuidRes) error {
	return h.AuthHandler.GetUserUuid(ctx, in, out)
}

func (h *authHandler) UpdateAccountInfo(ctx context.Context, in *UpdateAccountInfoReq, out *UpdateAccountInfoRes) error {
	return h.AuthHandler.UpdateAccountInfo(ctx, in, out)
}

func (h *authHandler) SendEmail(ctx context.Context, in *SendEmailReq, out *SendEmailRes) error {
	return h.AuthHandler.SendEmail(ctx, in, out)
}

func (h *authHandler) VerifyEmail(ctx context.Context, in *VerifyEmailReq, out *VerifyEmailRes) error {
	return h.AuthHandler.VerifyEmail(ctx, in, out)
}

func (h *authHandler) ResetEmailPassword(ctx context.Context, in *ResetEmailPasswordReq, out *ResetEmailPasswordRes) error {
	return h.AuthHandler.ResetEmailPassword(ctx, in, out)
}

func (h *authHandler) AccessToken(ctx context.Context, in *AccessTokenReq, out *AccessTokenRes) error {
	return h.AuthHandler.AccessToken(ctx, in, out)
}

// Api Endpoints for User service

func NewUserEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for User service

type UserService interface {
	GetUserInfo(ctx context.Context, in *GetUserInfoReq, opts ...client.CallOption) (*GetUserInfoRes, error)
	DelFBUserData(ctx context.Context, in *DelFBUserDataReq, opts ...client.CallOption) (*DelFBUserDataRes, error)
	GetDelFBUserDataInfo(ctx context.Context, in *GetDelFBUserDataInfoReq, opts ...client.CallOption) (*GetDelFBUserDataInfoRes, error)
	LoadMessages(ctx context.Context, in *LoadMessagesReq, opts ...client.CallOption) (*LoadMessagesRes, error)
	ReportProblem(ctx context.Context, in *ReportProblemReq, opts ...client.CallOption) (*ReportProblemRes, error)
	LoadReport(ctx context.Context, in *LoadReportReq, opts ...client.CallOption) (*LoadReportRes, error)
	WeChatScribeMsg(ctx context.Context, in *WeChatScribeMsgReq, opts ...client.CallOption) (*WeChatScribeMsgRes, error)
}

type userService struct {
	c    client.Client
	name string
}

func NewUserService(name string, c client.Client) UserService {
	return &userService{
		c:    c,
		name: name,
	}
}

func (c *userService) GetUserInfo(ctx context.Context, in *GetUserInfoReq, opts ...client.CallOption) (*GetUserInfoRes, error) {
	req := c.c.NewRequest(c.name, "User.GetUserInfo", in)
	out := new(GetUserInfoRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userService) DelFBUserData(ctx context.Context, in *DelFBUserDataReq, opts ...client.CallOption) (*DelFBUserDataRes, error) {
	req := c.c.NewRequest(c.name, "User.DelFBUserData", in)
	out := new(DelFBUserDataRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userService) GetDelFBUserDataInfo(ctx context.Context, in *GetDelFBUserDataInfoReq, opts ...client.CallOption) (*GetDelFBUserDataInfoRes, error) {
	req := c.c.NewRequest(c.name, "User.GetDelFBUserDataInfo", in)
	out := new(GetDelFBUserDataInfoRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userService) LoadMessages(ctx context.Context, in *LoadMessagesReq, opts ...client.CallOption) (*LoadMessagesRes, error) {
	req := c.c.NewRequest(c.name, "User.LoadMessages", in)
	out := new(LoadMessagesRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userService) ReportProblem(ctx context.Context, in *ReportProblemReq, opts ...client.CallOption) (*ReportProblemRes, error) {
	req := c.c.NewRequest(c.name, "User.ReportProblem", in)
	out := new(ReportProblemRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userService) LoadReport(ctx context.Context, in *LoadReportReq, opts ...client.CallOption) (*LoadReportRes, error) {
	req := c.c.NewRequest(c.name, "User.LoadReport", in)
	out := new(LoadReportRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userService) WeChatScribeMsg(ctx context.Context, in *WeChatScribeMsgReq, opts ...client.CallOption) (*WeChatScribeMsgRes, error) {
	req := c.c.NewRequest(c.name, "User.WeChatScribeMsg", in)
	out := new(WeChatScribeMsgRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for User service

type UserHandler interface {
	GetUserInfo(context.Context, *GetUserInfoReq, *GetUserInfoRes) error
	DelFBUserData(context.Context, *DelFBUserDataReq, *DelFBUserDataRes) error
	GetDelFBUserDataInfo(context.Context, *GetDelFBUserDataInfoReq, *GetDelFBUserDataInfoRes) error
	LoadMessages(context.Context, *LoadMessagesReq, *LoadMessagesRes) error
	ReportProblem(context.Context, *ReportProblemReq, *ReportProblemRes) error
	LoadReport(context.Context, *LoadReportReq, *LoadReportRes) error
	WeChatScribeMsg(context.Context, *WeChatScribeMsgReq, *WeChatScribeMsgRes) error
}

func RegisterUserHandler(s server.Server, hdlr UserHandler, opts ...server.HandlerOption) error {
	type user interface {
		GetUserInfo(ctx context.Context, in *GetUserInfoReq, out *GetUserInfoRes) error
		DelFBUserData(ctx context.Context, in *DelFBUserDataReq, out *DelFBUserDataRes) error
		GetDelFBUserDataInfo(ctx context.Context, in *GetDelFBUserDataInfoReq, out *GetDelFBUserDataInfoRes) error
		LoadMessages(ctx context.Context, in *LoadMessagesReq, out *LoadMessagesRes) error
		ReportProblem(ctx context.Context, in *ReportProblemReq, out *ReportProblemRes) error
		LoadReport(ctx context.Context, in *LoadReportReq, out *LoadReportRes) error
		WeChatScribeMsg(ctx context.Context, in *WeChatScribeMsgReq, out *WeChatScribeMsgRes) error
	}
	type User struct {
		user
	}
	h := &userHandler{hdlr}
	return s.Handle(s.NewHandler(&User{h}, opts...))
}

type userHandler struct {
	UserHandler
}

func (h *userHandler) GetUserInfo(ctx context.Context, in *GetUserInfoReq, out *GetUserInfoRes) error {
	return h.UserHandler.GetUserInfo(ctx, in, out)
}

func (h *userHandler) DelFBUserData(ctx context.Context, in *DelFBUserDataReq, out *DelFBUserDataRes) error {
	return h.UserHandler.DelFBUserData(ctx, in, out)
}

func (h *userHandler) GetDelFBUserDataInfo(ctx context.Context, in *GetDelFBUserDataInfoReq, out *GetDelFBUserDataInfoRes) error {
	return h.UserHandler.GetDelFBUserDataInfo(ctx, in, out)
}

func (h *userHandler) LoadMessages(ctx context.Context, in *LoadMessagesReq, out *LoadMessagesRes) error {
	return h.UserHandler.LoadMessages(ctx, in, out)
}

func (h *userHandler) ReportProblem(ctx context.Context, in *ReportProblemReq, out *ReportProblemRes) error {
	return h.UserHandler.ReportProblem(ctx, in, out)
}

func (h *userHandler) LoadReport(ctx context.Context, in *LoadReportReq, out *LoadReportRes) error {
	return h.UserHandler.LoadReport(ctx, in, out)
}

func (h *userHandler) WeChatScribeMsg(ctx context.Context, in *WeChatScribeMsgReq, out *WeChatScribeMsgRes) error {
	return h.UserHandler.WeChatScribeMsg(ctx, in, out)
}
