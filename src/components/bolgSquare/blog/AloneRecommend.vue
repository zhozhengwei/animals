<template>
  <section class="py-7">
      <div class="container">
        <div class="row">
          <div class="col-9 text-center mx-auto">
            <h3 class="mb-5">博文推荐</h3>
          </div>
          <div class="col-lg-4 mb-lg-0 mb-4">
            <div class="card">
              <div
                class="card-header p-0 mx-3 mt-3 position-relative z-index-1"
              >
                <a href="javascript:;" class="d-block blur-shadow-image">
                  <img
                    src="../../../assets/img/anastasia.jpg"
                    class="img-fluid border-radius-md"
                    alt="anastasia"
                  />
                </a>
              </div>
              <div class="card-body">
                <span
                  class="text-gradient text-primary text-uppercase text-xs font-weight-bold"
                  >House</span
                >
                <a
                  href="javascript:;"
                  class="card-title mt-3 h5 d-block text-darker"
                >
                  标题
                </a>
                <p class="card-description mb-4">
                  测试测试测试测试测试测试测试
                  测试测试测试测试测试测试测试
                </p>
                <div class="author align-items-center">
                  <img
                    src="../../../assets/img/team-2.jpg"
                    alt="..."
                    class="avatar shadow"
                  />
                  <div class="name ps-2">
                    <span>周政伟</span>
                    <div class="stats">
                      <small>发布于：{时间}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name:"AloneRecommend",
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