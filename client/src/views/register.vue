<template>
  <div class="container">
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @clicl-left="goBack"></van-nav-bar>
    <div class="register-panel">
      <van-field v-model="username" label="用户名" icon="clear" placeholder="请输入用户名" required @click-icon="username=''"></van-field>
      <van-field v-model="password" label="密码" type="password" placeholder="请输入密码" required></van-field>
      <div class="register-button">
        <van-button type="primary" size="large" @click="register">马上注册</van-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { register } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    register () {
      const user = {
        username: this.username,
        password: this.password
      }
      register(user).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="less">
.register-panel {
  margin: 20px auto;
  padding-bottom: 50px;
  width: 96%;
  border-radius: 5px;
}
.register-button {
  padding-top: 10px;
}
</style>
