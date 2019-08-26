<template>
    <div class="list">
      <ul>
        <router-link :to="item.route" tag="li" class="list-item" v-for="(item, index) in list" :key="index">
          <i class="img" v-bind:class="'item' + (index + 1)"></i>
          <span class="list-item">{{item.name}}</span>
          <span class="iconfont">&#xe62d;</span>
        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
   return {
      list: [
        {
          name: "房间管理",
          route: "/room" 
        },
        {
          name: "房客管理",
          route: "/guest/list"
        },
        {
          name: "合同审核",
          route: "/contract/contract-list"
        },
        {
          name: "房租账单",
          route: "/rentBill/list"
        },
        {
          name: "来访管理",
          route: "/visit/visit-list"
        },
        {
          name: "入驻管理",
          route: "/admission/list"
        },
        {
          name: "退租管理",
          route: "/surrenderTenancy/list"
        },
        {
          name: "延期审核",
          route: "/extension/list"
        },
        {
          name: "报修管理",
          route: "/order/list"
        },
        {
          name: "换租管理",
          route: "/change/list"
        },
        {
          name: "资产管理",
          route: "/assets/index"
        }
      ],
    };
  }
}
</script>
<style scoped>
.list{
  padding: 25px;
}
.list li{
  display: flex;
  height: 64px;
  line-height: 64px;
  border-radius: 32px;
  padding: 8px;
  margin-bottom: 20px;
  background-color: #fff
}
.list-item{
  flex: 1;
  padding-left: 10px;
  height: 50px;
  line-height: 50px
}
.list .img{
    height: 48px;
    width: 48px;
}
.list .img.item1 {
  background-image: url("../../../assets/newhome/color_room.png");
  background-size: 100% 100%;
}
.list .img.item2 {
background: url("../../../assets/newhome/color_client.png");
background-size: 100% 100%;
}

.list .img.item3 {
  background: url("../../../assets/newhome/color_contract.png");
  background-size: 100% 100%;
}

.list .img.item4 {
  background: url("../../../assets/newhome/color_bill.png");
  background-size: 100% 100%;
}

.list .img.item5 {
  background: url("../../../assets/newhome/color_visit.png");
  background-size: 100% 100%;
}

.list .img.item6 {
  background: url("../../../assets/newhome/color_shop.png");
  background-size: 100% 100%;
}

.list .img.item7 {
  background: url("../../../assets/newhome/color_return.png");
  background-size: 100% 100%;
}

.list .img.item8 {
  background: url("../../../assets/newhome/color_delay.png");
  background-size: 100% 100%;
}

.list .img.item9 {
  background: url("../../../assets/newhome/color_repair.png");
  background-size: 100% 100%;
}
.list .img.item10 {
  background: url("../../../assets/newhome/color_exchange.png");
  background-size: 100% 100%;
}
.list .img.item11 {
  background: url("../../../assets/newhome/color_property.png");
  background-size: 100% 100%;
}
.iconfont{
  height: 48px;
  line-height: 48px;
  font-size: 30px;
  color: #bfbfbf;
}
</style>