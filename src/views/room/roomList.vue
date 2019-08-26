<template>
    <div class="container-btm">
         <x-header :left-options="{backText: ''}" title="房间管理" style="background: #29bba8;" ></x-header>
        <select-community @getRoomListData="getRoomListData"></select-community>
        <div class="room-count">
            <div class="item" v-for="(item,index) in roomState" :key="item.name" @click="chooseRoom(index,item.status)"  :class="{active:isActive==index}">
                <span>{{item.name}}</span>
                <span>{{list&&list[item.count] || 0}}</span>
            </div>
        </div>
        <div class="show-des">
            <span class="title">房态展示</span>
            <span v-for="v in roomState" :key="v.status" v-if="v.status!=undefined"
            :class="{'free':v.status==0,'have-leased':v.status==1,'freeze':v.status==2}">{{v.name}}</span>
        </div>
        <div v-if="list">
            <Floor :data="list"></Floor>
        </div>
    </div>
</template>
<script>
  import { getOfficeList } from '@/api/roomApi'
  import {getLocations,getBuildings,getUnits,getFloors,getRoomList} from "@/api/tertiaryRoom";

const roomState = [
    {name: '全部',status:undefined,count:'total'},
    {name: '已出租',status:1, count:'haveLeased'},
    {name: '空闲',status:0, count:'free'},
    {name: '冻结',status:2, count:'freeze'},
]

import SelectCommunity from './selectCommunity'
import Floor from './Floor'

export default {
    components:{
        SelectCommunity,
        Floor
    },
    data(){
        return{
            roomState,
            isActive:0,
            
            list:undefined,
            activeFloor:[],
            unitId:undefined
        }
    },
    methods:{
        chooseRoom(index,status){
            this.isActive = index
            this.getRoomListData({unitId:this.unitId,room_status:status})
        },
        async getRoomListData(data){
            this.unitId = data.unitId
            let res = await getFloors(data)
            this.list = res.data
        },
    },
    created(){
         
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/reset');
.c-nav{
    background-color: @mainColor!important;
    color: #fff!important;
}

.room-count{
    background-color: @mainColor;
    color: #fff;
    font-size: 15px;
    height: 80px;
    display: flex;
    .item{
        position: relative;
        flex:1;
        .flex(center,center, column);
        &.active::after{
            content: "";
            position: absolute;
            bottom: -1px;
            left: 50%;
            width: 0;
            height: 0;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent #fff;
        }
    }
}

.show-des{
    line-height: 44px;
    border-bottom: 1px solid #ddd;
    font-size: 15px;
    color: #666;
    text-align: right;
    padding: 0 25px;
    .title{
        float: left;
    }
    span{
        margin-left: 15px;
        &::before{
            content: "";
            display: inline-block;
            width: 5px;
            height: 5px;
            vertical-align: middle;
            border-radius: 5px;
            margin-right: 5px;
        }
        &.free::before{
            background-color: @mainColor;
        }
        &.have-leased::before{
            background-color: #999;          
        }
        &.freeze::before{
            background-color: #FE7437;
        }
    }

}
/deep/.vux-header .vux-header-title{
    font-size: 15px;
    color: #fff;
}
// /deep/.vux-header .vux-header-left .left-arrow:before {
//     width: 7px;
//     height: 12px;
//     background-size: 7px 12px;
// }
</style>

