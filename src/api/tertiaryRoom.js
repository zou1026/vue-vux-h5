import fetch from '../utils/fetch'

//分散式房源获取房间列表
export function getRoomList(data) {
    return fetch({
        url: "roomInfo/rooms",
        method: "get",
        params: data
    })
}

//获取房间入住信息
export function getRoomDetail(data) {
    return fetch({
        url: `roomInfo/room/getRoomPerson/${data.roomId}`,
        method: "get",
    })
}

//获取房间所在环节
export function getRoomState(data) {
    return fetch({
        url: `roomInfo/room/State_link/${data.id}`,
        method: "get"
    })
}

export function getLocations(data) {
    return fetch({
        url: 'tertiaryOfficeLocation/locations',
        method: "get",
        params: data
    })
}
// 楼栋列表查询 location_id location_type 1
export function getBuildings(data) {
    return fetch({
        url: 'officeBuilding/officeBuildings',
        method: "get",
        params: data
    })
}

// 获取单元 building_id
export function getUnits(data) {
    return fetch({
        url: 'officeBuilding/officeUnits',
        method: "get",
        params: data
    })
}
// 通过单元id楼层房间信息 unitId
export function getFloors(data) {
    return fetch({
        url: 'officeBuilding/getFloorInfo',
        method: "get",
        params: data
    })
}

//水电
export function getOfficeHydropowerInfo(data) {
    return fetch({
        url: `hydropower/getOfficeHydropowerInfo/${data.id}`,
        method: "get"
    })
}
// 设备通断电hydropower/openElec/{deviceCode}
export function openElec(data) {
    return fetch({
        url: `hydropower/openElec/${data.meter_addr}`,
        method: "get"
    })
}
export function closeElec(data) {
    return fetch({
        url: `hydropower/closeElec/${data.meter_addr}`,
        method: "get"
    })
}
// 获取电表读数
export function queryDevice(data) {
    return fetch({
        url: `lock/query`,
        method: "get",
        params: data
    })
}
// 删除资产
export function deleteEstate(data) {
    return fetch({
        url: `EstateAsset/deleteEstate`,
        method: "delete",
        params: data
    })
}
