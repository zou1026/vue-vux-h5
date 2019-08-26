import fetch from '../utils/fetch'

export function getOfficeList (data) {
  return fetch({
    url: 'officeRoom/getOfficeList',
    method: 'post',
    data
  })
}

export function getRoomList (data) {
  return fetch({
    url: 'officeRoom/getRoomList',
    method: 'post',
    data
  })
}

export function getRoomDetail (data) {
  return fetch({
    url: 'officeRoom/getRoomDetail',
    method: 'post',
    data
  })
}

export function getTenantLog (data) {
  return fetch({
    url: 'officeRoom/getTenantLog',
    method: 'post',
    data
  })
}

export function getRoomLogList (data) {
  return fetch({
    url: 'officeRoom/getRoomLogList',
    method: 'post',
    data
  })
}

export function getContractList (data) {
  return fetch({
    url: 'officeRoom/getContractList',
    method: 'post',
    data
  })
}

export function frozenRoom (data) {
  return fetch({
    url: 'officeRoom/frozenRoom',
    method: 'post',
    data
  })
}

export function thawRoom (data) {
  return fetch({
    url: 'officeRoom/thawRoom',
    method: 'post',
    data
  })
}

export function getTempPwd (data) {
  return fetch({
    url: 'lock/getTempPwd',
    method: 'post',
    data
  })
}

export function getLockInfo (data) {
  return fetch({
    url: 'lock/getLockInfo',
    method: 'post',
    data
  })
}

export function freezePassword (data) {
  return fetch({
    url: 'lock/freezePassword',
    method: 'post',
    data
  })
}

export function pageElectronicReceipt (data) {
  return fetch({
    url: 'electroniccontract/pageElectronicReceipt',
    method: 'post',
    data
  })
}

export function receiptDetail (data) {
  return fetch({
    url: 'electroniccontract/receiptDetail',
    method: 'post',
    data
  })
}

export function noticePressingForPayment (data) {
  return fetch({
    url: 'electroniccontract/noticePressingForPayment',
    method: 'post',
    data
  })
}

export function stayList (data) {
  return fetch({
    url: 'stay/list',
    method: 'post',
    data
  })
}

export function stayDetail (data) {
  return fetch({
    url: 'stay/detail',
    method: 'post',
    data
  })
}

export function officeRoomElecMeterOperation (data) {
  return fetch({
    url: 'officeRoom/officeRoomElecMeterOperation',
    method: 'post',
    data
  })
}

export function getWxConfig (data) {
  return fetch({
    url: '/weixin/common/getWxConfig',
    method: 'post',
    data
  })
}

export function billingList (data) {
  return fetch({
    url: 'hydropower/billingList',
    method: 'post',
    data
  })
}


