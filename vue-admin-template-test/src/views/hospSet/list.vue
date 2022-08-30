<template>
  <div class="app-container">
    医院设置列表
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="seatchObj.hosname" placeholder="医院名称" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="seatchObj.hoscode" placeholder="医院编号" />
      </el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="getList()"
        >查询</el-button
      >
      <el-button type="danger" size="mini" @click="removeBatchHosp()"
        >批量删除</el-button
      >
    </el-form>

    <el-table
      :data="list"
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" width="50" label="序号" />
      <el-table-column prop="hosname" label="医院名称" />
      <el-table-column prop="hoscode" label="医院编号" />
      <el-table-column prop="apiUrl" label="api基础路径" width="200" />
      <el-table-column prop="contactsName" label="联系人姓名" />
      <el-table-column prop="contactsPhone" label="联系人手机" />
      <el-table-column label="状态" width="80">
        <template slot-scope="scope">
          {{ scope.row.status === 1 ? "可用" : "不可用" }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="removeDataById(scope.row.id, scope.row.hosname)"
            >删除</el-button
          >
           <el-button
            v-if="scope.row.status == 1"
            type="primary"
            size="mini"
            icon="el-icon-delete"
            @click="lockHostSet(scope.row.id, 0)"
            >锁定</el-button
          >
          <el-button 
            v-if="scope.row.status == 0"
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="lockHostSet(scope.row.id, 1)"
            >取消锁定</el-button> 
          <router-link :to="'/hospSet/edit/' + scope.row.id" style="margin-left: 10px">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
            >编辑</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="current"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0;  text-align: center"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />
  </div>
</template>
</el-table-column>
</el-table></div>
</template>
<script>
import hospSet from "@/api/hospSet";
export default {
  data() {
    return {
      current: 1,
      limit: 3,
      seatchObj: {},
      list: [],
      total: 1,
      multiSelection: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    lockHostSet(id, status) {
      this.$confirm("此操作将锁定医院的设置信息,是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          hospSet.islockHostSet(id, status).then((response) => {
            this.$message({
              type: "success",
              message: "锁定成功!",
            }); //刷新页面
            this.getList(this.current);
          });
        })
        .catch((error) => {});
    },
    handleSelectionChange(selection) {
      this.multiSelection = selection;
    },
    removeBatchHosp() {
      this.$confirm("此操作将永久删除医院的设置信息,是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //确定执行then方法
          //调用接口
          var obj = this.multiSelection;
          var idList = [];
          for (var i = 0; i < obj.length; i++) {
            idList.push(obj[i].id);
          }
          hospSet.removeBatchByIdList(idList).then((response) => {
            //提示
            this.$message({
              type: "success",
              message: "删除成功!",
            }); //刷新页面
            this.getList(1);
          });
        })
        .catch((error) => {});
    },

    getList(page = 1) {
      this.current = page;
      hospSet
        .getHospSetList(this.current, this.limit, this.seatchObj)
        .then((response) => {
          this.list = response.data.records;
          this.total = response.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeDataById(id, hosname) {
      this.$confirm(
        "此操作将永久删除" + hosname + "的设置信息,是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          //确定执行then方法
          //调用接口
          hospSet.removeHospSetById(id).then((response) => {
            //提示
            this.$message({
              type: "success",
              message: "删除成功!",
            }); //刷新页面
            this.getList(1);
          });
        })
        .catch((error) => {});
    },
  },
};
</script>