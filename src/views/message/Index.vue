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
        <li>列表</li>
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
  }
}
</style>