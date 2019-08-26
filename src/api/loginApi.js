import fetch from '../utils/fetch'

// 房间下的合同
export function roomContracts(data) {
    return fetch({
        url: 'electroniccontract/roomContracts',
        method: 'get',
        params: data
    });
}

export function login(data) {
    return fetch({
        url: 'user/login',
        method: 'post',
        data
    });
}

export function updateImg(data) {
    return fetch({
        url: 'user/update',
        method: 'post',
        data
    });
}

export function resetPwd(data) {
    return fetch({
        url: 'user/resetPwd',
        method: 'post',
        data
    });
}

export function getCaptcha(data) {
    return fetch({
        url: 'user/getCaptcha',
        method: 'post',
        data
    });
}

export function Aidoor(data) {
    return fetch({
        url: 'lock/getLockInfo',
        method: 'post',
        data
    })
}

export function Aidoor2(data) {
    return fetch({
        url: 'officeRoom/getRoomDetail',
        method: 'post',
        data
    })
}

export function AidoorDj(data) {
    return fetch({
        url: 'officeRoom/frozenRoom',
        method: 'post',
        data
    })
}

export function AidoorPsd(data) {
    return fetch({
        url: 'lock/freezePassword',
        method: 'post',
        data
    })
}

export function hetongCon(data) {
    return fetch({
        url: 'electroniccontract/queryRoomContractList',
        method: 'post',
        data
    })
}

export function hydropower(data) {
    return fetch({
        url: 'hydropower/detail',
        method: 'post',
        data
    })
}

export function hydropowerStop(data) {
    return fetch({
        url: 'hydropower/detail/refresh',
        method: 'post',
        data
    })
}

export function reject(data) {
    return fetch({
        url: 'electroniccontract/rejectContractApply',
        method: 'post',
        data
    })
}

export function hetong2(data) {
    return fetch({
        url: 'electroniccontract/contractDetail',
        method: 'post',
        data
    })
}

export function hetongSh(data) {
    return fetch({
        url: 'electroniccontract/pageExamineContract',
        method: 'post',
        data
    })
}

export function hetongSh2(data) {
    return fetch({
        url: 'electroniccontract/pageExamineContract',
        method: 'post',
        data
    })
}

export function guest1(data) {
    return fetch({
        url: 'owner/companion/lodgerManage',
        method: 'post',
        data
    })
}

export function guest2(data) {
    return fetch({
        url: 'officeRoom/getOfficeList',
        method: 'post',
        data
    })
}

export function guestDetail(data) {
    return fetch({
        url: '/owner/companion/lodgerDetail',
        method: 'post',
        data
    })
}

export function assets1(data) {
    return fetch({
        url: 'assets/getAssetListByHouseId',
        method: 'post',
        data
    })
}

export function assets2(data) {
    return fetch({
        url: 'assets/moveAssetForRoom',
        method: 'post',
        data
    })
}

export function assets3(data) {
    return fetch({
        url: 'assets/tabulation',
        method: 'post',
        data
    })
}

export function RoomOtherApplyInfo(data) {
    return fetch({
        url: 'electroniccontract/queryContractRoomOtherApplyInfo',
        method: 'post',
        data
    });
}

export function assetDetail(data) {
    return fetch({
        url: 'assets/assetDetail',
        method: 'post',
        data
    })
}


export function wechatsLogin(data) {
    return fetch({
        url: '/wechats/login',
        method: 'get',
        params:data
    })
}

