// Code generated by protoc-gen-micro. DO NOT EDIT.
// source: proto/shop.proto

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

// Api Endpoints for Box service

func NewBoxEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Box service

type BoxService interface {
	BoxList(ctx context.Context, in *BoxListReq, opts ...client.CallOption) (*BoxListRsp, error)
	BoxInfo(ctx context.Context, in *BoxInfoReq, opts ...client.CallOption) (*BoxInfoRsp, error)
	SendItem(ctx context.Context, in *PayNotifyReq, opts ...client.CallOption) (*PayNotifyRes, error)
	GetVipItem(ctx context.Context, in *GetVipItemReq, opts ...client.CallOption) (*GetVipItemRes, error)
}

type boxService struct {
	c    client.Client
	name string
}

func NewBoxService(name string, c client.Client) BoxService {
	return &boxService{
		c:    c,
		name: name,
	}
}

func (c *boxService) BoxList(ctx context.Context, in *BoxListReq, opts ...client.CallOption) (*BoxListRsp, error) {
	req := c.c.NewRequest(c.name, "Box.BoxList", in)
	out := new(BoxListRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *boxService) BoxInfo(ctx context.Context, in *BoxInfoReq, opts ...client.CallOption) (*BoxInfoRsp, error) {
	req := c.c.NewRequest(c.name, "Box.BoxInfo", in)
	out := new(BoxInfoRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *boxService) SendItem(ctx context.Context, in *PayNotifyReq, opts ...client.CallOption) (*PayNotifyRes, error) {
	req := c.c.NewRequest(c.name, "Box.SendItem", in)
	out := new(PayNotifyRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *boxService) GetVipItem(ctx context.Context, in *GetVipItemReq, opts ...client.CallOption) (*GetVipItemRes, error) {
	req := c.c.NewRequest(c.name, "Box.GetVipItem", in)
	out := new(GetVipItemRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Box service

type BoxHandler interface {
	BoxList(context.Context, *BoxListReq, *BoxListRsp) error
	BoxInfo(context.Context, *BoxInfoReq, *BoxInfoRsp) error
	SendItem(context.Context, *PayNotifyReq, *PayNotifyRes) error
	GetVipItem(context.Context, *GetVipItemReq, *GetVipItemRes) error
}

func RegisterBoxHandler(s server.Server, hdlr BoxHandler, opts ...server.HandlerOption) error {
	type box interface {
		BoxList(ctx context.Context, in *BoxListReq, out *BoxListRsp) error
		BoxInfo(ctx context.Context, in *BoxInfoReq, out *BoxInfoRsp) error
		SendItem(ctx context.Context, in *PayNotifyReq, out *PayNotifyRes) error
		GetVipItem(ctx context.Context, in *GetVipItemReq, out *GetVipItemRes) error
	}
	type Box struct {
		box
	}
	h := &boxHandler{hdlr}
	return s.Handle(s.NewHandler(&Box{h}, opts...))
}

type boxHandler struct {
	BoxHandler
}

func (h *boxHandler) BoxList(ctx context.Context, in *BoxListReq, out *BoxListRsp) error {
	return h.BoxHandler.BoxList(ctx, in, out)
}

func (h *boxHandler) BoxInfo(ctx context.Context, in *BoxInfoReq, out *BoxInfoRsp) error {
	return h.BoxHandler.BoxInfo(ctx, in, out)
}

func (h *boxHandler) SendItem(ctx context.Context, in *PayNotifyReq, out *PayNotifyRes) error {
	return h.BoxHandler.SendItem(ctx, in, out)
}

func (h *boxHandler) GetVipItem(ctx context.Context, in *GetVipItemReq, out *GetVipItemRes) error {
	return h.BoxHandler.GetVipItem(ctx, in, out)
}

// Api Endpoints for Goods service

func NewGoodsEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Goods service

type GoodsService interface {
	HomeInfo(ctx context.Context, in *HomeInfoReq, opts ...client.CallOption) (*HomeInfoRsp, error)
	CategoryGoods(ctx context.Context, in *CategoryGoodsReq, opts ...client.CallOption) (*CategoryGoodsRsp, error)
	GoodsDetail(ctx context.Context, in *GoodsDetailReq, opts ...client.CallOption) (*GoodsDetailRsp, error)
	CartList(ctx context.Context, in *CartListReq, opts ...client.CallOption) (*CartListRsp, error)
	CartAdd(ctx context.Context, in *CartAddReq, opts ...client.CallOption) (*CartListRsp, error)
	CartDelete(ctx context.Context, in *CartDeleteReq, opts ...client.CallOption) (*CartListRsp, error)
	CheckCart(ctx context.Context, in *CheckCartReq, opts ...client.CallOption) (*CartListRsp, error)
	RearrangeOrder(ctx context.Context, in *RearrangeOrderReq, opts ...client.CallOption) (*RearrangeOrderRsp, error)
	SubmitOrder(ctx context.Context, in *SubmitOrderReq, opts ...client.CallOption) (*SubmitOrderRsp, error)
	OrderList(ctx context.Context, in *OrderListReq, opts ...client.CallOption) (*OrderListRsp, error)
	OrderDetail(ctx context.Context, in *OrderDetailReq, opts ...client.CallOption) (*OrderDetailRsp, error)
	RefreshGoods(ctx context.Context, in *RefreshGoodsReq, opts ...client.CallOption) (*RefreshGoodsRsp, error)
	SubmitOrderBlh(ctx context.Context, in *PayNotifyReq, opts ...client.CallOption) (*PayNotifyRes, error)
	GetOrderStatusInfoBlh(ctx context.Context, in *GetOrderInfoBlhReq, opts ...client.CallOption) (*GetOrderInfoBlhRsp, error)
	GetOrderShipmentBlh(ctx context.Context, in *GetOrderShipmentBlhReq, opts ...client.CallOption) (*GetOrderShipmentBlhRsp, error)
	ConfirmOrder(ctx context.Context, in *ConfirmOrderReq, opts ...client.CallOption) (*ConfirmOrderRsp, error)
}

type goodsService struct {
	c    client.Client
	name string
}

func NewGoodsService(name string, c client.Client) GoodsService {
	return &goodsService{
		c:    c,
		name: name,
	}
}

func (c *goodsService) HomeInfo(ctx context.Context, in *HomeInfoReq, opts ...client.CallOption) (*HomeInfoRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.HomeInfo", in)
	out := new(HomeInfoRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) CategoryGoods(ctx context.Context, in *CategoryGoodsReq, opts ...client.CallOption) (*CategoryGoodsRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.CategoryGoods", in)
	out := new(CategoryGoodsRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) GoodsDetail(ctx context.Context, in *GoodsDetailReq, opts ...client.CallOption) (*GoodsDetailRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.GoodsDetail", in)
	out := new(GoodsDetailRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) CartList(ctx context.Context, in *CartListReq, opts ...client.CallOption) (*CartListRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.CartList", in)
	out := new(CartListRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) CartAdd(ctx context.Context, in *CartAddReq, opts ...client.CallOption) (*CartListRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.CartAdd", in)
	out := new(CartListRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) CartDelete(ctx context.Context, in *CartDeleteReq, opts ...client.CallOption) (*CartListRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.CartDelete", in)
	out := new(CartListRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) CheckCart(ctx context.Context, in *CheckCartReq, opts ...client.CallOption) (*CartListRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.CheckCart", in)
	out := new(CartListRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) RearrangeOrder(ctx context.Context, in *RearrangeOrderReq, opts ...client.CallOption) (*RearrangeOrderRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.RearrangeOrder", in)
	out := new(RearrangeOrderRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) SubmitOrder(ctx context.Context, in *SubmitOrderReq, opts ...client.CallOption) (*SubmitOrderRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.SubmitOrder", in)
	out := new(SubmitOrderRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) OrderList(ctx context.Context, in *OrderListReq, opts ...client.CallOption) (*OrderListRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.OrderList", in)
	out := new(OrderListRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) OrderDetail(ctx context.Context, in *OrderDetailReq, opts ...client.CallOption) (*OrderDetailRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.OrderDetail", in)
	out := new(OrderDetailRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) RefreshGoods(ctx context.Context, in *RefreshGoodsReq, opts ...client.CallOption) (*RefreshGoodsRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.RefreshGoods", in)
	out := new(RefreshGoodsRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) SubmitOrderBlh(ctx context.Context, in *PayNotifyReq, opts ...client.CallOption) (*PayNotifyRes, error) {
	req := c.c.NewRequest(c.name, "Goods.SubmitOrderBlh", in)
	out := new(PayNotifyRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) GetOrderStatusInfoBlh(ctx context.Context, in *GetOrderInfoBlhReq, opts ...client.CallOption) (*GetOrderInfoBlhRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.GetOrderStatusInfoBlh", in)
	out := new(GetOrderInfoBlhRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) GetOrderShipmentBlh(ctx context.Context, in *GetOrderShipmentBlhReq, opts ...client.CallOption) (*GetOrderShipmentBlhRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.GetOrderShipmentBlh", in)
	out := new(GetOrderShipmentBlhRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *goodsService) ConfirmOrder(ctx context.Context, in *ConfirmOrderReq, opts ...client.CallOption) (*ConfirmOrderRsp, error) {
	req := c.c.NewRequest(c.name, "Goods.ConfirmOrder", in)
	out := new(ConfirmOrderRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Goods service

type GoodsHandler interface {
	HomeInfo(context.Context, *HomeInfoReq, *HomeInfoRsp) error
	CategoryGoods(context.Context, *CategoryGoodsReq, *CategoryGoodsRsp) error
	GoodsDetail(context.Context, *GoodsDetailReq, *GoodsDetailRsp) error
	CartList(context.Context, *CartListReq, *CartListRsp) error
	CartAdd(context.Context, *CartAddReq, *CartListRsp) error
	CartDelete(context.Context, *CartDeleteReq, *CartListRsp) error
	CheckCart(context.Context, *CheckCartReq, *CartListRsp) error
	RearrangeOrder(context.Context, *RearrangeOrderReq, *RearrangeOrderRsp) error
	SubmitOrder(context.Context, *SubmitOrderReq, *SubmitOrderRsp) error
	OrderList(context.Context, *OrderListReq, *OrderListRsp) error
	OrderDetail(context.Context, *OrderDetailReq, *OrderDetailRsp) error
	RefreshGoods(context.Context, *RefreshGoodsReq, *RefreshGoodsRsp) error
	SubmitOrderBlh(context.Context, *PayNotifyReq, *PayNotifyRes) error
	GetOrderStatusInfoBlh(context.Context, *GetOrderInfoBlhReq, *GetOrderInfoBlhRsp) error
	GetOrderShipmentBlh(context.Context, *GetOrderShipmentBlhReq, *GetOrderShipmentBlhRsp) error
	ConfirmOrder(context.Context, *ConfirmOrderReq, *ConfirmOrderRsp) error
}

func RegisterGoodsHandler(s server.Server, hdlr GoodsHandler, opts ...server.HandlerOption) error {
	type goods interface {
		HomeInfo(ctx context.Context, in *HomeInfoReq, out *HomeInfoRsp) error
		CategoryGoods(ctx context.Context, in *CategoryGoodsReq, out *CategoryGoodsRsp) error
		GoodsDetail(ctx context.Context, in *GoodsDetailReq, out *GoodsDetailRsp) error
		CartList(ctx context.Context, in *CartListReq, out *CartListRsp) error
		CartAdd(ctx context.Context, in *CartAddReq, out *CartListRsp) error
		CartDelete(ctx context.Context, in *CartDeleteReq, out *CartListRsp) error
		CheckCart(ctx context.Context, in *CheckCartReq, out *CartListRsp) error
		RearrangeOrder(ctx context.Context, in *RearrangeOrderReq, out *RearrangeOrderRsp) error
		SubmitOrder(ctx context.Context, in *SubmitOrderReq, out *SubmitOrderRsp) error
		OrderList(ctx context.Context, in *OrderListReq, out *OrderListRsp) error
		OrderDetail(ctx context.Context, in *OrderDetailReq, out *OrderDetailRsp) error
		RefreshGoods(ctx context.Context, in *RefreshGoodsReq, out *RefreshGoodsRsp) error
		SubmitOrderBlh(ctx context.Context, in *PayNotifyReq, out *PayNotifyRes) error
		GetOrderStatusInfoBlh(ctx context.Context, in *GetOrderInfoBlhReq, out *GetOrderInfoBlhRsp) error
		GetOrderShipmentBlh(ctx context.Context, in *GetOrderShipmentBlhReq, out *GetOrderShipmentBlhRsp) error
		ConfirmOrder(ctx context.Context, in *ConfirmOrderReq, out *ConfirmOrderRsp) error
	}
	type Goods struct {
		goods
	}
	h := &goodsHandler{hdlr}
	return s.Handle(s.NewHandler(&Goods{h}, opts...))
}

type goodsHandler struct {
	GoodsHandler
}

func (h *goodsHandler) HomeInfo(ctx context.Context, in *HomeInfoReq, out *HomeInfoRsp) error {
	return h.GoodsHandler.HomeInfo(ctx, in, out)
}

func (h *goodsHandler) CategoryGoods(ctx context.Context, in *CategoryGoodsReq, out *CategoryGoodsRsp) error {
	return h.GoodsHandler.CategoryGoods(ctx, in, out)
}

func (h *goodsHandler) GoodsDetail(ctx context.Context, in *GoodsDetailReq, out *GoodsDetailRsp) error {
	return h.GoodsHandler.GoodsDetail(ctx, in, out)
}

func (h *goodsHandler) CartList(ctx context.Context, in *CartListReq, out *CartListRsp) error {
	return h.GoodsHandler.CartList(ctx, in, out)
}

func (h *goodsHandler) CartAdd(ctx context.Context, in *CartAddReq, out *CartListRsp) error {
	return h.GoodsHandler.CartAdd(ctx, in, out)
}

func (h *goodsHandler) CartDelete(ctx context.Context, in *CartDeleteReq, out *CartListRsp) error {
	return h.GoodsHandler.CartDelete(ctx, in, out)
}

func (h *goodsHandler) CheckCart(ctx context.Context, in *CheckCartReq, out *CartListRsp) error {
	return h.GoodsHandler.CheckCart(ctx, in, out)
}

func (h *goodsHandler) RearrangeOrder(ctx context.Context, in *RearrangeOrderReq, out *RearrangeOrderRsp) error {
	return h.GoodsHandler.RearrangeOrder(ctx, in, out)
}

func (h *goodsHandler) SubmitOrder(ctx context.Context, in *SubmitOrderReq, out *SubmitOrderRsp) error {
	return h.GoodsHandler.SubmitOrder(ctx, in, out)
}

func (h *goodsHandler) OrderList(ctx context.Context, in *OrderListReq, out *OrderListRsp) error {
	return h.GoodsHandler.OrderList(ctx, in, out)
}

func (h *goodsHandler) OrderDetail(ctx context.Context, in *OrderDetailReq, out *OrderDetailRsp) error {
	return h.GoodsHandler.OrderDetail(ctx, in, out)
}

func (h *goodsHandler) RefreshGoods(ctx context.Context, in *RefreshGoodsReq, out *RefreshGoodsRsp) error {
	return h.GoodsHandler.RefreshGoods(ctx, in, out)
}

func (h *goodsHandler) SubmitOrderBlh(ctx context.Context, in *PayNotifyReq, out *PayNotifyRes) error {
	return h.GoodsHandler.SubmitOrderBlh(ctx, in, out)
}

func (h *goodsHandler) GetOrderStatusInfoBlh(ctx context.Context, in *GetOrderInfoBlhReq, out *GetOrderInfoBlhRsp) error {
	return h.GoodsHandler.GetOrderStatusInfoBlh(ctx, in, out)
}

func (h *goodsHandler) GetOrderShipmentBlh(ctx context.Context, in *GetOrderShipmentBlhReq, out *GetOrderShipmentBlhRsp) error {
	return h.GoodsHandler.GetOrderShipmentBlh(ctx, in, out)
}

func (h *goodsHandler) ConfirmOrder(ctx context.Context, in *ConfirmOrderReq, out *ConfirmOrderRsp) error {
	return h.GoodsHandler.ConfirmOrder(ctx, in, out)
}

// Api Endpoints for Exchange service

func NewExchangeEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Exchange service

type ExchangeService interface {
	ExchangeTemplateInfo(ctx context.Context, in *ExchangeTemplateInfoReq, opts ...client.CallOption) (*ExchangeTemplateInfoRsp, error)
	ExchangeInfo(ctx context.Context, in *ExchangeInfoReq, opts ...client.CallOption) (*ExchangeInfoRsp, error)
	ExchangeLogList(ctx context.Context, in *ExchangeLogListReq, opts ...client.CallOption) (*ExchangeLogListRsp, error)
	SendRedPacket(ctx context.Context, in *SendRedPacketReq, opts ...client.CallOption) (*SendRedPacketRsp, error)
	CodeAward(ctx context.Context, in *CodeAwardReq, opts ...client.CallOption) (*CodeAwardRes, error)
	OutGold(ctx context.Context, in *OutGoldReq, opts ...client.CallOption) (*OutGoldRes, error)
	LoadInOutGoldLog(ctx context.Context, in *LoadInOutGoldLogReq, opts ...client.CallOption) (*LoadInOutGoldLogRes, error)
	VipOutGoldNotify(ctx context.Context, in *VipOutGoldNotifyReq, opts ...client.CallOption) (*VipOutGoldNotifyRsp, error)
	SendOutGold(ctx context.Context, in *SendOutGoldReq, opts ...client.CallOption) (*SendOutGoldRsp, error)
}

type exchangeService struct {
	c    client.Client
	name string
}

func NewExchangeService(name string, c client.Client) ExchangeService {
	return &exchangeService{
		c:    c,
		name: name,
	}
}

func (c *exchangeService) ExchangeTemplateInfo(ctx context.Context, in *ExchangeTemplateInfoReq, opts ...client.CallOption) (*ExchangeTemplateInfoRsp, error) {
	req := c.c.NewRequest(c.name, "Exchange.ExchangeTemplateInfo", in)
	out := new(ExchangeTemplateInfoRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *exchangeService) ExchangeInfo(ctx context.Context, in *ExchangeInfoReq, opts ...client.CallOption) (*ExchangeInfoRsp, error) {
	req := c.c.NewRequest(c.name, "Exchange.ExchangeInfo", in)
	out := new(ExchangeInfoRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *exchangeService) ExchangeLogList(ctx context.Context, in *ExchangeLogListReq, opts ...client.CallOption) (*ExchangeLogListRsp, error) {
	req := c.c.NewRequest(c.name, "Exchange.ExchangeLogList", in)
	out := new(ExchangeLogListRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *exchangeService) SendRedPacket(ctx context.Context, in *SendRedPacketReq, opts ...client.CallOption) (*SendRedPacketRsp, error) {
	req := c.c.NewRequest(c.name, "Exchange.SendRedPacket", in)
	out := new(SendRedPacketRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *exchangeService) CodeAward(ctx context.Context, in *CodeAwardReq, opts ...client.CallOption) (*CodeAwardRes, error) {
	req := c.c.NewRequest(c.name, "Exchange.CodeAward", in)
	out := new(CodeAwardRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *exchangeService) OutGold(ctx context.Context, in *OutGoldReq, opts ...client.CallOption) (*OutGoldRes, error) {
	req := c.c.NewRequest(c.name, "Exchange.OutGold", in)
	out := new(OutGoldRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *exchangeService) LoadInOutGoldLog(ctx context.Context, in *LoadInOutGoldLogReq, opts ...client.CallOption) (*LoadInOutGoldLogRes, error) {
	req := c.c.NewRequest(c.name, "Exchange.LoadInOutGoldLog", in)
	out := new(LoadInOutGoldLogRes)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *exchangeService) VipOutGoldNotify(ctx context.Context, in *VipOutGoldNotifyReq, opts ...client.CallOption) (*VipOutGoldNotifyRsp, error) {
	req := c.c.NewRequest(c.name, "Exchange.VipOutGoldNotify", in)
	out := new(VipOutGoldNotifyRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *exchangeService) SendOutGold(ctx context.Context, in *SendOutGoldReq, opts ...client.CallOption) (*SendOutGoldRsp, error) {
	req := c.c.NewRequest(c.name, "Exchange.SendOutGold", in)
	out := new(SendOutGoldRsp)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Exchange service

type ExchangeHandler interface {
	ExchangeTemplateInfo(context.Context, *ExchangeTemplateInfoReq, *ExchangeTemplateInfoRsp) error
	ExchangeInfo(context.Context, *ExchangeInfoReq, *ExchangeInfoRsp) error
	ExchangeLogList(context.Context, *ExchangeLogListReq, *ExchangeLogListRsp) error
	SendRedPacket(context.Context, *SendRedPacketReq, *SendRedPacketRsp) error
	CodeAward(context.Context, *CodeAwardReq, *CodeAwardRes) error
	OutGold(context.Context, *OutGoldReq, *OutGoldRes) error
	LoadInOutGoldLog(context.Context, *LoadInOutGoldLogReq, *LoadInOutGoldLogRes) error
	VipOutGoldNotify(context.Context, *VipOutGoldNotifyReq, *VipOutGoldNotifyRsp) error
	SendOutGold(context.Context, *SendOutGoldReq, *SendOutGoldRsp) error
}

func RegisterExchangeHandler(s server.Server, hdlr ExchangeHandler, opts ...server.HandlerOption) error {
	type exchange interface {
		ExchangeTemplateInfo(ctx context.Context, in *ExchangeTemplateInfoReq, out *ExchangeTemplateInfoRsp) error
		ExchangeInfo(ctx context.Context, in *ExchangeInfoReq, out *ExchangeInfoRsp) error
		ExchangeLogList(ctx context.Context, in *ExchangeLogListReq, out *ExchangeLogListRsp) error
		SendRedPacket(ctx context.Context, in *SendRedPacketReq, out *SendRedPacketRsp) error
		CodeAward(ctx context.Context, in *CodeAwardReq, out *CodeAwardRes) error
		OutGold(ctx context.Context, in *OutGoldReq, out *OutGoldRes) error
		LoadInOutGoldLog(ctx context.Context, in *LoadInOutGoldLogReq, out *LoadInOutGoldLogRes) error
		VipOutGoldNotify(ctx context.Context, in *VipOutGoldNotifyReq, out *VipOutGoldNotifyRsp) error
		SendOutGold(ctx context.Context, in *SendOutGoldReq, out *SendOutGoldRsp) error
	}
	type Exchange struct {
		exchange
	}
	h := &exchangeHandler{hdlr}
	return s.Handle(s.NewHandler(&Exchange{h}, opts...))
}

type exchangeHandler struct {
	ExchangeHandler
}

func (h *exchangeHandler) ExchangeTemplateInfo(ctx context.Context, in *ExchangeTemplateInfoReq, out *ExchangeTemplateInfoRsp) error {
	return h.ExchangeHandler.ExchangeTemplateInfo(ctx, in, out)
}

func (h *exchangeHandler) ExchangeInfo(ctx context.Context, in *ExchangeInfoReq, out *ExchangeInfoRsp) error {
	return h.ExchangeHandler.ExchangeInfo(ctx, in, out)
}

func (h *exchangeHandler) ExchangeLogList(ctx context.Context, in *ExchangeLogListReq, out *ExchangeLogListRsp) error {
	return h.ExchangeHandler.ExchangeLogList(ctx, in, out)
}

func (h *exchangeHandler) SendRedPacket(ctx context.Context, in *SendRedPacketReq, out *SendRedPacketRsp) error {
	return h.ExchangeHandler.SendRedPacket(ctx, in, out)
}

func (h *exchangeHandler) CodeAward(ctx context.Context, in *CodeAwardReq, out *CodeAwardRes) error {
	return h.ExchangeHandler.CodeAward(ctx, in, out)
}

func (h *exchangeHandler) OutGold(ctx context.Context, in *OutGoldReq, out *OutGoldRes) error {
	return h.ExchangeHandler.OutGold(ctx, in, out)
}

func (h *exchangeHandler) LoadInOutGoldLog(ctx context.Context, in *LoadInOutGoldLogReq, out *LoadInOutGoldLogRes) error {
	return h.ExchangeHandler.LoadInOutGoldLog(ctx, in, out)
}

func (h *exchangeHandler) VipOutGoldNotify(ctx context.Context, in *VipOutGoldNotifyReq, out *VipOutGoldNotifyRsp) error {
	return h.ExchangeHandler.VipOutGoldNotify(ctx, in, out)
}

func (h *exchangeHandler) SendOutGold(ctx context.Context, in *SendOutGoldReq, out *SendOutGoldRsp) error {
	return h.ExchangeHandler.SendOutGold(ctx, in, out)
}