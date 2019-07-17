<template>
<div class="login">

    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>管理员登陆</span>
        </div>
        <div class="text item">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
</div>
</template>

<script>
export default {
    data() {
        var validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    // this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        
        return {
            ruleForm: {
                name: '',
                pass: '',
            },
            rules: {
                name: [{
                    validator: validateName,
                    trigger: 'blur'
                }],
                pass: [{
                    validator: validatePass,
                    trigger: 'blur'
                }],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style scoped>
.el-card__header {
    text-align: center;
}

.el-card__body {
    padding: 0.5rem;
}

.el-form-item__content {
    text-align: center;
}

.text {
    font-size: 0.16rem;
}

.item {
    margin-bottom: 0.018rem;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.box-card {
    margin: 3rem auto;
    width: 10rem;
    /* background-color: #002140; */
}
</style>
