<template>
  <div class="p-setting">
    <x-header :left-options="{backText: ''}" title="账号管理"></x-header>
    <div class="c-container">
      <div class="l-info">
        <div class="photo">
          <a class="update-photo" @click="getToken">
            <img
              :src="img_path|imgConnect"
              alt="暂无头像"
              onerror="this.src='http://static.inzhiyu.com/defaultimage.jpg'"
            />
            <input type="file" accept="image/*" multiple @change="upload" />
          </a>
        </div>
        <div class="nickname">{{name}}</div>
        <div class="rolename">{{position}}</div>
      </div>
      <div class="l-control">
        <!-- <router-link :to="{path:'/'}" class="control-item setPas">重置密码</router-link> -->
        <router-link :to="{path:'/user/resetPwd'}" class="control-item setPas">
          <span style="display:inline-block;width:90%">重置密码</span>
          <span class="iconfont">&#xe62d;</span>
        </router-link>
        <div class="control-item loginOut" @click="userLogout">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import {updateImg,getUpToken} from '@/api/setting'
import Axios from "axios";
export default {
  data() {
    return {
      name: undefined,
      img_path: undefined,
      position: undefined,
      qiniuToken: undefined
    };
  },
  created() {
    this.getUser();
    this.getToken();
  },
  methods: {
    getUser() {
      let data = JSON.parse(localStorage.getItem("user_info"));
      this.name = data.name;
      this.img_path = data.avatar;
      this.position = data.roles[0].name;
    },
     getToken() {
      getUpToken({}).then(res=>{
        this.qiniuToken = res.data.uptoken;
      })
    },
    upload(e) {
      let img = e.target.files[0];
      let data = new FormData();
      data.append("token", this.qiniuToken);
      data.append("file", img);
      Axios({
        method: "post",
        url: "https://upload.qiniup.com/",
        data
      }).then(res => {
        this.img_path = res.data.key;
        let data = {
          img_path: this.img_path,
          name: this.name
        };
        updateImg(data).then(res => {
          console.log(res);
          localStorage.setItem("user_info", JSON.stringify(res.data));
        });
      });
    },
    userLogout() {
      // let _this=this;
      this.$vux.confirm.show({
        title: "提示",
        content: "是否确定退出登录?",
        onCancel:()=>{
          console.log("取消");
        },
        onConfirm:()=>{
          window.localStorage.clear();
          window.sessionStorage.clear();
          this.$router.push({ path: "/user/login" });
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.p-setting {
  height: 100vh;
  background: #f1f3f6;
}
.p-setting .l-info {
  position: relative;
  background-color: #29bba8;
  text-align: center;
  font-size: 15px;
  color: #fff;
  padding-top: 15px;
  padding-bottom: 30px;
}

.p-setting .l-info .photo {
  display: inline-block;
  position: relative;
  width: 92px;
  height: 92px;
  .update-photo {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    input {
      opacity: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      position: absolute;
      top: 0;
      left: 0;
    }
    img {
      width: 92px;
      height: 92px;
      border-radius: 50%;
      z-index: 2;
    }
  }
}

.p-setting .l-info .photo:after {
  display: inline-block;
  position: absolute;
  bottom: 5px;
  right: 0;
  content: "";
  width: 22px;
  height: 22px;
  // background: url("../../../assets/user/icon-camera.png") no-repeat;
  background-size: 100% 100%;
  z-index: 3;
}
.p-setting .l-info .nickname {
  margin-top: 10px;
}
.p-setting .l-info .rolename {
  margin-top: 5px;
}
.p-setting .l-control .control-item {
  display: block;
  width: 100%;
  height: 44px;
  line-height: 44px;
  margin-top: 15px;
  background-color: #fff;
  font-size: 15px;
  color: #000;
}
.iconfont {
  font-size: 25px;
}
.p-setting .l-control .control-item.loginOut {
  text-align: center;
}

.p-setting .l-control .control-item.setPas {
  padding-left: 15px;
  box-sizing: border-box;
  background: white;
}
</style>