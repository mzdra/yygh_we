<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="医院名称">
        <el-input v-model="hospitalSet.hosname" />
      </el-form-item>
      <el-form-item label="医院编号">
        <el-input v-model="hospitalSet.hoscode" />
      </el-form-item>
      <el-form-item label="api基础路径">
        <el-input v-model="hospitalSet.apiUrl" />
      </el-form-item>
      <el-form-item label="联系人姓名">
        <el-input v-model="hospitalSet.contactsName" />
      </el-form-item>
      <el-form-item label="联系人手机">
        <el-input v-model="hospitalSet.contactsPhone" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="UpdateOrsave">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import hospSet from "@/api/hospSet";
export default {
  data() {
    return {
      hospitalSet: {hosname:"",hoscode:"",contactsName:"",contactsPhone:""},
    };
  },
  created() {
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id;
      this.getHospitalSet(id);
    }else{
      this.hospitalSet={};
    }
  },
  methods: {
    // 根据路径id查询显示
    getHospitalSet(id) {
      hospSet
        .getHospitalSet(id)
        .then((response) => {
          this.hospitalSet = response.data;
        })
        .catch((error) => {});
    },

    // 判断
    UpdateOrsave() {
      if (this.hospitalSet.contactsPhone == null || this.hospitalSet.contactsPhone.length != 11) {
        this.$message({
            type: "warning",
            message: "请注意手机号码位数!",
          }); 
      } else {
        if (this.hospitalSet.id) {
          this.updateHospSet();
        } else {
          this.saveHospSet();
        }
      }
    },

    // 编辑
    updateHospSet() {
      hospSet
        .updateHospset(this.hospitalSet)
        .then((response) => {
          //提示
          this.$message({
            type: "success",
            message: "修改成功!",
          }); //跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: "/hospSet/list" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //添加
    saveHospSet() {
      hospSet
        .saveHospSet(this.hospitalSet)
        .then((response) => {
          //提示
          this.$message({
            type: "success",
            message: "添加成功!",
          }); //跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: "/hospSet/list" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>