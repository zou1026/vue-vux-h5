<template>
  <div class>
    <x-header :left-options="{backText: ''}" title="消息"></x-header>
    <hr class="line" />
    <div class="container">
      <div class="header">
        <span class="pic">
          <i class="img"></i>
        </span>
        <span class="list-item">系统通知</span>
        <span class="iconfont">&#xe62d;</span>
      </div>
      <hr class="line" />
      <ul>
        <!-- <li
          v-for="(item,index) in userData"
          :key="index"
          @touchstart="touchin(index)"
          @touchend="cleartime(index)"
          @touchmove="touchmove"
        > -->
        <li>
          <!-- <li v-for="(item,index) in userData" :key="index" @click="dialogue(index)"> -->
          <div class="userbox">
            <div class="user">
              <span class="tuxiang">
                <!-- <i class="img icon"></i> -->
                <img class="icon-img" src="http://static.inzhiyu.com/FqT5AmxkrdMzn-7qCk5iy89GWtC1?imageslim" alt />
                <div class="text">
                  <p class="text1">住户111111</p>
                  <p class="text2">什么什么山山水水是sacked</p>
                </div>
                <div v-if="!u_isRead" class="notice"></div>
              </span>
              <span>
                <p class="time">2019-07-01 14:12:56</p>
              </span>
            </div>
            <!-- <div v-if="item.delShow" class="del" @click="deleteItem(index)"><p>删除</p></div> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
.line {
  height: 8px;
  background: #F3F5F7;
  border: none;
}

.header {
  display: flex;
  padding: 0 20px;

  .pic {
    display: block;
    position: relative;
    margin-top: 5px;

    .img {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: url('../../assets/message/ic_color_system@2x.png') no-repeat center center;
      background-size: 100%;
    }
  }

  .list-item {
    flex: 1;
    padding-left: 10px;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
    vertical-align: middle;
  }
  .iconfont {
    height: 48px;
    line-height: 48px;
    font-size: 26px;
    color: #bfbfbf;
  }
}
ul {
  li {
    padding: 0 20px;
    height 50px
  }
}
.text {
  position: absolute;
  top: 10px;
  left: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  .text1 {
    font-size: 14px;
    height 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .text2 {
    width: 250px;
    height 18px;
    font-size: 11px;
    color: #999999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.userbox {
  position: relative;
  height 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.del {
  width: 75px;
  height: 50px;
  line-height: 50px;
  position: absolute;
  bottom: -35px;
  right: 10%;
  box-shadow: 1px 3px 5px 2px #ccc;
  text-align: center;
  background: #fff;
  p {
    font-size: 25px;
  }
}
.tuxiang {
  position: relative;
}
.icon-img{
  width 40px
  height 40px
  border-radius 50%
}
.notice {
  width: 10px;
  height: 10px;
  line-height: 10px;
  font-size: 5px;
  color: #fff;
  text-align: center;
  background-color: #f00;
  border-radius: 50%;
  position: absolute;
  right: -5px;
  top: -5px;
}

.time {
  font-size: 10px;
  color: #ccc;
  position: absolute;
  top: 3px;
  right: 3px;
}
</style>