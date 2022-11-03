<template>
  <section class="my-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 m-auto">
            <h4>和我们一起行动！</h4>
            <p class="mb-4 text-justify">
                春天的鸟鸣，夏天的蛙叫，秋天的蝉噪，冬天的鸡啼。可爱的动物为我们奏响一年四季的欢歌。世界动物日，让我们一起保护动物！
                您将有机会随时取消订阅我们的电子邮件。野生动物保护新闻每周三发布。
            </p>
            <div class="row">
              <div class="col-8">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control mb-sm-0"
                    placeholder="输入你的邮箱"
                  />
                </div>
              </div>
              <div class="col-4 ps-0">
                <button
                  type="button"
                  class="btn bg-gradient-info mb-0 h-100 position-relative z-index-2"
                >
                订阅
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-5 ms-auto">
            <div class="position-relative">
              <img
                class="max-width-50 w-100 position-relative z-index-2"
                src="../../assets/img/illustrations/sign-up.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
export default {
  name:"SubscribeBox",
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