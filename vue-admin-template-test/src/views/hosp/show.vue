<template >
  <div class="app-container" v-if="hospital.param != null" >
    <h4>基本信息</h4>
    <table
      class="table table-striped table-condenseda table-bordered"
      width="100%"
    >
      <tbody>
        <tr>
          <th width="15%" style="text-align: center;" >医院名称</th>
          <td width="35%">
            <b style="font-size: 14px">{{ hospital.hosname }}</b>
          </td>
          <th width="15%" rowspan="2"  style="text-align: center;padding-top:40px;">医院logo</th>
          <td width="35%"  rowspan="2">
            <img
              :src="'data:image/jpeg;base64,' + hospital.logoData"
              width="80"
            />
          </td>
        </tr>
        <tr>
          <th width="15%">医院级别</th>
          <td width="35%">
            {{ hospital.param.hostypeString }}
          </td>
        </tr>
        <tr>
          <th>医院编码</th>
          <td>{{ hospital.hoscode }}</td>
          <th>地址</th>
          <td>{{ hospital.param.fullAddress }}</td>
        </tr>

        <tr>
          <th>坐车路线</th>

          <td colspan="3">{{ hospital.route }}</td>
        </tr>

        <tr>
          <th>医院简介</th>

          <td colspan="3">{{ hospital.intro }}</td>
        </tr>
      </tbody>
    </table>

    <h4>预约规则信息</h4>

    <table
      class="table table-striped table-condenseda table-bordered"
      width="100%"
    >
      <tbody>
        <tr>
          <th width="15%">预约周期</th>

          <td width="35%">{{ bookingRule.cycle }}天</td>

          <th width="15%">放号时间</th>

          <td width="35%">{{ bookingRule.releaseTime }}</td>
        </tr>

        <tr>
          <th>停挂时间</th>

          <td>{{ bookingRule.stopTime }}</td>

          <th>退号时间</th>

          <td>
            {{ bookingRule.quitDay == -1 ? "就诊前一工作日" : "就诊当日"
            }}{{ bookingRule.quitTime }} 前取消
          </td>
        </tr>

        <tr>
          <th>预约规则</th>

          <td colspan="3">
            <ol>
              <li v-for="item in bookingRule.rule" :key="item">{{ item }}</li>
            </ol>
          </td>
        </tr>
        
      </tbody>
    </table>
    <br />
    <el-row style="text-align: center;">
      <el-button @click="back" type="primary">返回</el-button>
    </el-row>
  </div>
</template>
<script>
import hosp from "@/api/hosp";
export default {
  data() {
    return {
      hospital: {},
      bookingRule: {},
      // address:{},
      // logoData:"",
    };
  },
  created() {
    const id = this.$route.params.id;
    this.showHosp(id);
  },
  methods: {
    showHosp(id) {
      hosp.showHospById(id).then((response) => {
        this.hospital = response.data.hospital;
        this.bookingRule = response.data.bookingRule;
      });
    },
    back() {
      this.$router.push({ path: "/hospSet/hosp/list" });
    },
  },
};
</script>