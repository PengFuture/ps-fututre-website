// @ts-ignore
import {reactive} from "vue";

export let loginUser = reactive({
    username: "",
    password: "",
});

export let loginRules = reactive({
    username: [
        {required: true, message: '请输入用户名', trigger: 'blur'},
    ],
    password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
    ],
});


export let registerUser = reactive({
    username: "",
    passwordOne: "",
    passwordTwo: "",
    email: "",
})

export let registerRules = reactive({
    username: [
        {required: true, message: '请输入用户名', trigger: 'blur'},
    ],
    email: [
        {required: true, message: '请输入邮箱', trigger: 'blur'},
    ],
    passwordOne: [
        {required: true, message: '请输入密码', trigger: 'blur'},
    ],
    passwordTwo: [
        {required: true, message: '请确认密码', trigger: 'blur'},
    ],
});