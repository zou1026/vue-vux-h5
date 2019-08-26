<template>
  <div class="login">
    <x-header :left-options="{showBack: false}" title="员工登录"></x-header>
    <div class="container">
      <div class="form-content">
        <div class="account-input border-bottom">
          <span class="iconfont">&#xe682;</span>
          <input v-model="account" placeholder="请输入登录名" />
        </div>
        <div class="c-input border-bottom">
          <span class="iconfont">&#xe850;</span>
          <input type="password" v-model="password" placeholder="请输入密码" />
          <button class="right-part" @click="forgetPassword">忘记密码?</button>
        </div>
        <x-button @click.native="submit" class="btn-login" type="primary">登录</x-button>
      </div>
    </div>
    <toast
      v-model="showPositionValue"
      type="text"
      :time="1000"
      is-show-mask
      :text="toastText"
      :position="position"
    ></toast>
  </div>
</template>

<script>
import { login ,wechatsLogin} from "@/api/loginApi";
export default {
  data() {
    return {
      account: "",
      password: "",
      // phone: 'admin',
      // password: '123456ovu',
      showPositionValue: false, //是否显示提示
      position: "middle", //提示信息的位置
      toastText: "", // 提示文本
      openId: this.$route.query.openId
    };
  },
   created() {
    let user_info = JSON.parse(localStorage.getItem("user_info") || "{}");
    if (user_info.login_name) {
      this.phone = user_info.login_name;
    }
    // this.password = sessionStorage.getItem("pwd");
    this.init()
  },
  methods: {
     init(){
          let token=sessionStorage.getItem('user_token') || localStorage.getItem('user_token')
          if(token!=null&&token!=""){
              this.$router.push("/")
          }
          // this.GetUrlParame('code')
      },
    forgetPassword() {
      this.$router.push({ path: "/user/resetPwd" });
    },
    // submit() {
    //   let _this = this;
    //   console.log("dneglu");
    //   this.showPositionValue = true;
    //   this.toastText = "登录失败";
    // }
    submit() {
      let data = {
        login_name: this.account,
        password: this.password,
        openId:this.openId
      };
      login(data).then(res => {
        console.log(res)
        if(res.code !== '0000'){
          this.showPositionValue = true;
          this.toastText = "登录失败";
        }
        this.$store.dispatch("saveUserInfo", res.data); //本地存储用户信息
        sessionStorage.setItem("user_token", res.data.token); //当前会话存储token
        // if (this.value) {
        //   //自动登录
        //   this.$store.dispatch("saveUserToken", res.data); //token本地存储
        //   // sessionStorage.setItem("pwd", this.password);
        // } else {
        // }
        localStorage.removeItem('location_name')
        localStorage.removeItem('unit_id')
        this.$router.push({ path: "/" });
      });
    },
  }
};
</script>
<style lang="stylus" scoped>
.container {
  background: white;

  .form-content {
    padding: 0 15px;

    .account-input {
      height: 60px;
      line-height: 60px;

      input {
        width: 90%;
      }
    }

    .c-input {
      height: 60px;
      line-height: 60px;

      input {
        width: 64%;
      }

      .right-part {
        color: #1fb6b5;
      }
    }
    .btn-login {
      width: 100%;
      height: 45px;
      margin: 40px auto 0;
      background-color: #20b6b5;
      text-align: center;
      line-height: 45px;
      color: #fff;
      font-size: 16px;
      border-radius: 6px;
    }
  }
}
</style>