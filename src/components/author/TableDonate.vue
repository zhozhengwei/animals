<template>
  <section class="pt-5 mt-5">
  <div class="container">
    <div class="row" >
          <div class="col-lg-6">
            <h3 class="mb-5" align="left">查看我的捐献记录</h3>
          </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">捐献者姓名</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">用户名</th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">金额</th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">支付状态</th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">创建时间</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in list" :key="item">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-xs">{{item.name}}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-xs">{{item.username}}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">￥{{item.amount}}</p>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="badge badge-dot me-4" v-if="item.note == 0">
                      <i class="bg-danger"></i>
                      <span class="text-dark text-xs">未支付</span>
                    </span>
                    <span class="badge badge-dot me-4" v-if="item.note == 1">
                      <i class="bg-success"></i>
                      <span class="text-dark text-xs">已支付</span>
                    </span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">{{item.createdAt}}</span>
                  </td>
                </tr> 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import API from "../../plugins/axios/index.js";
export default {
  name:"TableDonate",
  data(){
    return{
        id: this.$route.query.id,
        list:[]
    }
  },
  components:{

  },
  created(){
    API({
        url: "donationRecord/listSearch",
        method: "post",
        data: {
            uid: this.id
        },
        headers: {
          'token': localStorage.getItem("token")
        }
    }).then((res)=>{
        this.list = res.data.data;
    })
  }
}
</script>

<style>

</style>