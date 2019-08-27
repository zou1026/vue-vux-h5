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
          <input type="password" v-model="cfmPwd" placeholder="再次输入新密码" />
        </div>
        <x-button @click.native="submit" class="btn-login" type="primary">确认修改</x-button>
      </div>
    </div>
    <toast
      v-model="showPositionValue"
      type="text"
      :time="2000"
      is-show-mask
      :text="toastText"
      :position="position"
    ></toast>
  </div>
</template>
<script>
import {getCaptcha,resetPwd} from '@/api/setting'
export default {
  data() {
    return {
      phone:'',
      code: "",
      newPwd: "",
      cfmPwd: "",
      isActive: 0,
      number: 60,
      // toast
      showPositionValue: false, //是否显示提示
      position: "middle", //提示信息的位置
      toastText: "" // 提示文本
    };
  },
  methods: {
    getCode() {
      if(!this.phone || !(/^1[34578]\d{9}$/.test(this.phone))){
        this.showPositionValue = true;
        this.toastText = '请输入合法的手机号';
        return
      }
      getCaptcha({phone:this.phone}).then(res=>{
        if(res.code==='0000'){
          console.log('获取成功')
          this.showPositionValue = true;
          this.toastText = "验证码已发送";
          this.isActive = 1;
          let tick = setInterval(() => {
            this.number = this.number - 1;
            if (this.number === 0) {
              window.clearInterval(tick);
              this.number = 60;
              this.isActive = 2;
            }
          }, 1000);
        }else{
            this.showPositionValue = true;
            this.toastText = res.msg;
        }
      })
      
    },
    submit() {
  //   let _this = this;
      if(!this.phone || !(/^1[34578]\d{9}$/.test(this.phone))){
        this.showPositionValue = true;
        this.toastText = '请输入合法的手机号';
        return
      }
      if(!this.code){
        this.showPositionValue = true;
        this.toastText = '请输入验证码';
        return
      }
      if(!this.newPwd){
        this.showPositionValue = true;
        this.toastText = '新密码不能为空';
        return
      }
      if(!this.cfmPwd){
        this.showPositionValue = true;
        this.toastText = '确认新密码不能为空';
        return
      }
      if(this.newPwd !== this.cfmPwd){
        this.showPositionValue = true;
        this.toastText = '密码输入不一致';
        return
      }
      this.$vux.confirm.show({
        title: '提示',
        content: '是否确定修改?',
        onCancel () {
        console.log('取消')
        },
        onConfirm () {
          resetPwd({
            phone:this.phone,
            captcha:this.code,
            new_pwd:this.newPwd,
            confirm_pwd:this.cfmPwd
          }).then(res=>{
            if(res.code === '0000'){
              localStorage.clear();
              sessionStorage.clear();
              this.$router.push({ path: "/" });
            }else{
              this.showPositionValue = true;
              this.toastText = res.msg;
            }
          })
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
          background-color :#fff
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