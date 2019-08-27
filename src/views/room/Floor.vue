<template>
    <div>
        <div class="floor"  v-for="(floor,i) in data.floorList" :key="i">
            <div class="title" @click="showRoomList(i)">
                <div>{{floor.floorName}} {{floor.free}}/{{floor.total}}</div><i :class="{up:activeFloor[i]}"></i>
            </div>
            <div v-show="activeFloor[i]">
                <div class="house" v-for="(house,ii) in floor.houseList" :key="ii">
                    <!-- <div class="house-resouce">{{house.houseResources.room_number}}{{house.houseResources.house_type | houseType}}</div> -->
                    <div class="room" @click="checkRoomDetail(room.id)" v-for="(room,ii) in house.roomList" :key="ii"
                    :class="{'free':room.room_status==0,'have-leased':room.room_status==1,'freeze':room.room_status==2}">{{room.room_number}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data:[Object,Array]
    },
    data(){
        return{
            activeFloor:[],
        }
    },
    methods:{
        showRoomList(index){
            this.$set(this.activeFloor,index,!this.activeFloor[index])
        },
        checkRoomDetail(id){
            console.log(id)
            this.$router.push({
                path:"/room/tertiaryDetail",
                query:{
                    id:id
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/reset');

.floor{
    border-bottom: 1px solid #ddd;
    padding: 0 25px;
    .title{
        line-height: 44px;
        font-size: 15px;
        color: black;
        .flex(space-between);
        i{
            width: 6px;
            height: 4px;
            background: url("../../assets/zhangkai2@2x.png");
            transition: all .5s;
            &.up{
                transform: rotate(180deg);
            }
        }
    }
    .house{
        overflow: hidden;
        display: inline-block;
        padding-top: 10px;
        .house-resouce{
            line-height: 44px;
            font-size: 12px;
            padding-left: 15px;
        }
        .room{
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border-radius: 50%;
            color: #fff;
            font-size: 12px;
            float: left;
            margin-right: 25px;
            margin-bottom: 25px;

        }
        .free{
            background-color: @mainColor;
        }
        .have-leased{
            background-color: #999;          
        }
        .freeze{
            background-color: #FE7437;
        }
    }
}
</style>
