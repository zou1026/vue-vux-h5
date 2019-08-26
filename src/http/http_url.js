let localhostDev = false;
let _host = localhostDev ? 'http://localhost:8080' : 'http://180.76.166.187/ovulive/employee/';
let httpUrl = {
  // 来访模块
  'visitingManagement': _host + 'visitManager/getVisitList', //来访管理记录 query_type ：查询类型   查询类型   0：预约参观 ，1：访客邀请，2：已完成的预约参观
  'visitorSubmit': _host + 'visitManager/saveVisit',//提交访客邀请   invitation_tel:被邀请人电话   必填    invitation_name:被邀请人姓名   必填      invitation_time：邀请时间
  //房间管理模块
  'officeList': _host + 'officeRoom/getOfficeList', //站点楼栋单元级联信息  type //查询类型   0：站点 ，1：楼栋，2：单元 3：房间
  'roomList': _host + 'officeRoom/getRoomList', //房间管理列表查询  unit_id:单元id 必填   room_status:房间状态  非必填
  'roomDetail': _host + 'officeRoom/getRoomDetail',//获取房间详细信息     room_id ：房间id 必填
  'frozenRoom': _host + 'officeRoom/frozenRoom', //冻结房间  room_id：房间ID 必填  remark：备注/原因 必填
  'thawRoom': _host + 'officeLocation/thawRoom', //解冻房间 room_id：房间id 必填
  'roomLogList': _host + 'officeLocation/getRoomLogList',//房间日志列表  room_id：房间id 必填
  // 资产管理模块
  'roomInfo' : _host + 'assets/getRoomInfo',//获取房间信息  room_id：房间id 必填
  'AssetListByHouseId' : _host + 'assets/getAssetListByHouseId', //获取房间资产信息   room_id：房间id 必填
  'moveAssetForRoom': _host + 'assets/moveAssetForRoom', //移除所属房间  qr_id：二维码id 必填
  'tabulation': _host + 'assets/tabulation',//造册  qr_id：二维码id 必填
  'assetDetail': _host + 'assets/assetDetail',//获取资产信息 （根据二维码获取） qr_id：二维码id 必填
  // 员工端接口
  'lodgerManage': _host + 'owner/companion/lodgerManage',//房间管理接口

}
export{httpUrl}