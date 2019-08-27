<template>
  <div class="header">
    <div class="header-top">
      <div class="row">
        <p class="user-name">{{ueseName}}</p>
        <p class="user-type">社区运营官</p>
      </div>
      <router-link to="/user/setting" tag="div" class="avatar">    
        <img src="http://static.inzhiyu.com/FqT5AmxkrdMzn-7qCk5iy89GWtC1?imageslim" alt />
      </router-link>
    </div>
    <div class="header-bottom">
      <div class="row">
        <div class="icon">
          <span class="iconfont">&#xe603;</span>
          合肥
        </div>
        <div class="icon">
          <span class="iconfont">&#xe627;</span>
          金融港ovu国际服务公寓
        </div>
      </div>
      <div class="icon-set">
        <router-link to="/message/list">  
            <span class="iconfont" >&#xe674;</span>
        </router-link>
        <span class="iconfont" @click="userLogout">&#xe734;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ueseName: "你好,欢迎您ovu"
    };
  },
  methods: {
    userLogout() {
      window.localStorage.clear();
      window.sessionStorage.clear();
      this.$router.push({ path: "/user/login" });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.header {
  height: 200px;
  background-color: #fff;
  padding: 25px;
  .header-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    .row {
      width: 70%;
      flex: 1;
      .user-name {
        // width 50px
        // ellipsis();
        overflow: hidden
        // white-space: nowrap
        text-overflow: ellipsis
        font-size: 24px;
      }
      .user-type {
        font-size: 10px;
        color: #fff;
        background-color: #45ae9f;
        margin-top: 10px;
        width: 72px;
        height: 20px;
        line-height: 20px;
        border-radius: 20px;
        text-align: center;
      }
    }
    .avatar {
      width: 25%;
      height: 72px;
      img {
        width: 72px;
        height: 72px;
        overflow: hidden;
        border-radius: 50%;
      }
    }
  }
  .header-bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    .row {
      .icon {
        padding: 5px 0px;
      }
    }
    .icon-set {
      height: 40px;
      line-height: 40px;
      vertical-align: middle;
      padding-top: 15px;
      .iconfont {
        margin: 0 10px;
        color :#666
      }
    }
  }
}
</style>