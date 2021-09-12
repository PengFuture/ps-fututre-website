<!--
<template>
    <el-form ref="loginForm" :model="loginUser" :rules="rules" label-width="100px" class="loginForm sign-in-form">
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginUser.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="loginUser.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="handleLogin('loginForm')" type="primary" class="submit-btn">提交</el-button>
        </el-form-item>
        &lt;!&ndash; 找回密码 &ndash;&gt;
        <div class="tip-area">
            <p>忘记密码？ <a>立即找回</a></p>
        </div>
    </el-form>

</template>

<script>
import {reactive} from "vue";

export default {
    name: "loginForm",

    setup(){
        let loginUser = reactive({
            username: "",
            password: "",
        })

        return {
            loginUser
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
.tip-area {
    text-align: right;
    font-size: 12px;
    color: #333;
}
.tip-area p a {
    color: #409eff;
}



</style>-->
