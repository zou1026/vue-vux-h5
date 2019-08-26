<template>
    <div>
        <div class="loc">
            <div class="loc-res" @click="showList=!showList">
                <i class="loc-icon"></i>{{location.community.name + location.building.name + location.unit.name || '请选择社区'}}<i class="fa fa-angle-right"></i>
            </div>
            <div class="loc-list" v-show="showList === true">
                <ul class="community">
                    <li v-for="(v,i) in communityOptions" :key="i"
                    @click="select('communityOptions',i)" :class="{active:community.index == i}">{{v.name}}</li>
                </ul>
                <ul class="building">
                    <li v-for="(v,i) in buildingOptions" :key="i"
                    @click="select('buildingOptions',i)" :class="{active:building.index == i}">{{v.name}}</li>
                </ul>
                <ul class="unit">
                    <li v-for="(v,i) in unitOptions" :key="i"
                    @click="select('unitOptions',i)" :class="{active:unit.index == i}">{{v.name}}</li>                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import { getOfficeList } from '@/api/roomApi'
    import {getLocations,getBuildings,getUnits} from "@/api/tertiaryRoom";

    const community = {name:"",id:undefined,index:undefined};
    const building = {name:"",id:undefined,index:undefined};
    const unit  = {name:"",id:undefined,index:undefined};

    const location ={
        community:Object.assign({},community),
        building:Object.assign({},building),
        unit:Object.assign({},unit),
    }
export default {
    data(){
        return {
            communityOptions:[],
            buildingOptions:[],
            unitOptions:[],
            location,
            community:{},
            building:{},
            unit:{},
            showList:false,
        }
    },
    methods:{
        async getCommunityOptions(){
            // let res = await getLocations({})
            let res = await getOfficeList({type: 0})
            this.communityOptions = res.data
        },
        async getBuildingOptions(data){
            // let res = await getBuildings(data)
            let res = await getOfficeList(Object.assign({type: 1},data))
            this.buildingOptions = res.data
        },
        async getUnitOptions(data){
            // let res = await getUnits(data)
            let res = await getOfficeList(Object.assign({type: 2},data))
            this.unitOptions = res.data
        },
        select(data,index){
            if(data=='communityOptions'){
                this.community = {
                    name:this[data][index].name,
                    id:this[data][index].id,
                    index:index
                }
                this.building = Object.assign({},building)
                this.unit = Object.assign({},unit)
                // this.getBuildingOptions({location_id:this.community.id})
                this.getBuildingOptions({parent_id:this.community.id})
                this.unitOptions = []
            }else if(data=='buildingOptions'){
                this.building = {
                    name:this[data][index].name,
                    id:this[data][index].id,
                    index:index
                }
                this.unit = Object.assign({},unit)
                // this.getUnitOptions({location_id:this.community.id, building_id:this.building.id})
                this.getUnitOptions({parent_id:this.building.id})
            }else if(data=='unitOptions'){
                this.unit = {
                    name:this[data][index].name,
                    id:this[data][index].id,
                    index:index
                }
                this.location = {
                    community:this.community,
                    building:this.building,
                    unit:this.unit}
                localStorage.setItem('location',JSON.stringify(this.location))
                this.showList = false;
                this.$emit('getRoomListData',{unitId:this.unit.id})
            }
        },
        init(){
            this.initSelect();
            if(this.location.unit.id){
                this.$emit('getRoomListData',{unitId:this.unit.id})
            }
        },
        initSelect(){
            this.location = JSON.parse(localStorage.getItem('location') || '[]')
            if(this.location.length==0){
                this.location = location
                this.community = Object.assign({},community)
                this.building = Object.assign({},building)
                this.unit = Object.assign({},unit)
            }else{
                this.community = this.location.community
                this.building = this.location.building
                this.unit = this.location.unit
            }
            if(this.location.community.id){
                // this.getBuildingOptions({location_id:this.community.id})
                this.getBuildingOptions({parent_id:this.community.id})
            }
            if(this.location.building.id){
                // this.getUnitOptions({location_id:this.community.id,building_id:this.building.id})
                this.getUnitOptions({parent_id:this.building.id})
            }
        }
    },
    created(){
        this.getCommunityOptions({})
        this.init();
    },
    watch:{
        'showList'(val){
            if(val==true){
                this.initSelect();
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/reset');
.loc{
    position: relative;
    z-index: 999;
    .loc-res{
        padding-top: 30px;
        height: 98px;
        background-color: @mainColor;
        color: #fff;
        font-size: 30px;
        .flex();
        .loc-icon{
            display: inline-block;
            width: 24px;
            height: 32px;
            background:url('../../assets/icon_mark@2x.png');
            margin-left: 24px;
            margin-right: 10px;
            vertical-align: middle;
        }   
    }
    .loc-list{
        position: absolute;
        width: 100%;
        height: 382px;
        top: 98px;
        background-color: #fff;
        ul{ 
            height: 100%;
            float: left;
            overflow: auto;
            background: #f3f3f3;
            width: 25%;
            li{
                text-align: center;
                font-size: 30px;
                .elips();
                margin: 20px 10px;
                color: #333;
                &.active{
                    color: @mainColor;
                }
            }
        }
        .community{
            width: 50%;
            background-color: #bfbfc1;
        }
    }
}
</style>


