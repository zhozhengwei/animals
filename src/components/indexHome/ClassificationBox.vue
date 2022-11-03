<template>
    <div class="row">
        <div class="row mt-5">
            <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="javascript:;">
                  <div class="card card-background move-on-hover">
                    <div
                      class="full-background"
                      style="
                        background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/baloon.jpg');
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link :to="{ path: '/biology/animals', query: { id: 1 } }">陆地动物</router-link></h4>
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
                        background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-time.jpg');
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link  :to="{ path: '/biology/animals', query: { id: 2 } }">海洋动物</router-link></h4>
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
                        background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-ananas.jpg');
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link :to="{ path: '/biology/animals', query: { id: 3 } }">两栖动物</router-link></h4>
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
                        background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-ananas.jpg');
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link :to="{ path: '/biology/animals', query: { id: 4 } }">淡水动物</router-link></h4>
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
                        background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-banana.jpg'),
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link :to="{ path: '/biology/animals', query: { id: 5 } }"></router-link>野生动物</h4>
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
                        background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/baloon.jpg'),
                      "
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white"><router-link to="/humanity/book">人文教育</router-link></h4>
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