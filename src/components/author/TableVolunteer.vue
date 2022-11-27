<template>
  <section class="pt-5 mt-5">
  <div class="container">
    <div class="row" >
          <div class="col-lg-6">
            <h3 class="mb-5" align="left">查看我的志愿者申请</h3>
          </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">申请用户名</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">用户名</th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">申请状态</th>
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
                  <td class="align-middle text-center text-sm">
                    <span class="badge badge-dot me-4" v-if="item.status == 0">
                      <i class="bg-danger"></i>
                      <span class="text-dark text-xs">未同意</span>
                    </span>
                    <span class="badge badge-dot me-4" v-if="item.status == 1">
                      <i class="bg-info"></i>
                      <span class="text-dark text-xs">审核中</span>
                    </span>
                    <span class="badge badge-dot me-4" v-if="item.status == 2">
                      <i class="bg-success"></i>
                      <span class="text-dark text-xs">已同意</span>
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
  name:"TableVolunteer",
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
        url: "applyVolunteer/listSearch",
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