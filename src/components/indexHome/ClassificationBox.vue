<template>
    <div class="row">
        <div class="row mt-5">
            <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="javascript:;">
                  <div class="card card-background move-on-hover">
                    <div
                      class="full-background"
                      style="
                        background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/103296.jpg');
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link :to="{ path: '/biology/animals', query: { id: 1 } }" class="text-white">陆地动物</router-link></h4>
                      <a-divider style="height: 7px; background-color: #7cb305" />
                    </div>
                  </div>
                </a>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="javascript:;">
                  <div class="card card-background move-on-hover">
                    <div
                      class="full-background"
                      style="
                        background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/121834.jpg');
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link  :to="{ path: '/biology/animals', query: { id: 2 } }" class="text-white">海洋动物</router-link></h4>
                      <a-divider style="height: 7px; background-color: #7cb305" />
                    </div>
                  </div>
                </a>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="javascript:;">
                  <div class="card card-background move-on-hover">
                    <div
                      class="full-background"
                      style="
                        background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/30253.jpg');
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link :to="{ path: '/biology/animals', query: { id: 3 } }" class="text-white">两栖动物</router-link></h4>
                      <a-divider style="height: 7px; background-color: #7cb305" />
                    </div>
                  </div>
                </a>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="javascript:;">
                  <div class="card card-background move-on-hover">
                    <div
                      class="full-background"
                      style="
                        background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/404196.jpg');
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link :to="{ path: '/biology/animals', query: { id: 4 } }" class="text-white">淡水动物</router-link></h4>
                      <a-divider style="height: 7px; background-color: #7cb305" />
                    </div>
                  </div>
                </a>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="javascript:;">
                  <div class="card card-background move-on-hover">
                    <div
                      class="full-background"
                      style="
                        background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/468374.jpg');
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link :to="{ path: '/biology/animals', query: { id: 5 } }" class="text-white">野生动物</router-link></h4>
                      <a-divider style="height: 7px; background-color: #7cb305" />
                    </div>
                  </div>
                </a>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="javascript:;">
                  <div class="card card-background move-on-hover">
                    <div
                      class="full-background"
                      style="
                        background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/718555.png');
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link to="/humanity/book" class="text-white">人文教育</router-link></h4>
                      <a-divider style="height: 7px; background-color: #7cb305" />
                    </div>
                  </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:"ClassificationBox",
  data(){
    return{

    }
  },
  components:{

  }
}
</script>

<style>

</style>