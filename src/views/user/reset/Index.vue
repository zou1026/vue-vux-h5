<template>
  <div class="reset">
    <x-header :left-options="{backText: ''}" title="重置密码"></x-header>
    <div class="container">
      <div class="form-content">
        <div class="account-input border-bottom">
          <span class="iconfont">&#xe682;</span>
          <input maxlength="11" v-model="phone" placeholder="请输入手机号" />
          <div class="code">

        
            <button v-if="isActive ==0" class="right-part" @click="getCode">获取验证码</button>
            <button class="right-part" v-else-if="isActive ==1">{{`已发送(${number}s)`}}</button>
            <button class="right-part" v-else="isActive == 2" @click="getCode">重新发送验证码</button>
           </div>
        </div>
        <div class="c-input border-bottom">
          <span class="iconfont">&#xe68f;</span>
          <input v-model="code" placeholder="请输入验证码" />
        </div>
        <div class="c-input border-bottom">
          <span class="iconfont">&#xe850;</span>
          <input type="password" v-model="newPwd" placeholder="请输入新密码" />
        </div>
        <div class="c-input border-bottom">
          <span class="iconfont">&#xe850;</span>
          <input type="password" v-model="oldPwd" placeholder="再次输入新密码" />
        </div>
        <x-button @click.native="submit" class="btn-login" type="primary">确认修改</x-button>
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
export default {
  data() {
    return {
      phone:'',
      code: "",
      newPwd: "",
      oldPwd: "",
      number: "",
      isActive: 0,
      number: 60,
      showPositionValue: false, //是否显示提示
      position: "middle", //提示信息的位置
      toastText: "" // 提示文本
    };
  },
  methods: {
    getCode() {
      this.showPositionValue = true;
      this.toastText = "正在获取验证码";
      this.isActive = 1;
      let tick = setInterval(() => {
        this.number = this.number - 1;
        if (this.number === 0) {
          window.clearInterval(tick);
          this.number = 60;
          this.isActive = 2;
        }
      }, 1000);
    },
    submit() {
    //   let _this = this;
      console.log("dneglu");
    //   this.showPositionValue = true;
    //   this.toastText = "修改失败";
        this.$vux.confirm.show({
            title: '确定修改',
            content: '是否真的要修改?',
            onShow () {
            console.log('plugin show')
            },
            onHide () {
            console.log('plugin hide')
            },
            onCancel () {
            console.log('plugin cancel')
            },
            onConfirm () {
            console.log('plugin confirm')
            }
        })
    }
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
        width: 50%;
      }
      .code{
       display inline-block
       width 140px
       text-align right 
       .right-part {
          color: #1fb6b5;
          }
        }
      
    }
    .c-input {
      height: 60px;
      line-height: 60px;
      input {
        width: 90%;
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