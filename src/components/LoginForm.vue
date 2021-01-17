<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginUser.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="handleLogin('loginForm')"
        >提交</el-button
      >
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码?<a>立即找回</a></p>
    </div>
  </el-form>
</template>
<script lang="ts">
import { ref,getCurrentInstance } from 'vue'
export default {
    props:{
        loginUser:{
            type:Object,
            required:true
        },
        rules:{
            type:Object,
            required:true
        }
    },
    setup() {
        //@ts-ignore
        const { ctx } = getCurrentInstance()
        const handleLogin = (formName:string) =>{
			ctx.$refs[formName].validate((valid:boolean) => {
				if (valid) {
					alert('submit!');
				} else {
					console.log('error submit!!');
					return false;
				}
			});
        }
        return {
            handleLogin
        }
    }
}
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>
