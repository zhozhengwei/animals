<template>
  <section class="py-lg-5 mt-lg-5">
    <div class="container">
      <div class="row my-5">
        <div class="col-md-6 mx-auto text-center">
          <h2>对于动物的保护行为</h2>
          <p>
            在生活中如何保护野生动物的一些举措，当然也欢迎广大网友提出建议。
            如果有网站组织解决不了的问题将会上报到有关部门，当然有如何问题可以自行举报<a href="#">网站外部链接</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="accordion" id="accordionRental">
            <!-- 循环数据 -->
            <div class="accordion-item mb-3" v-for="item in message" :key="item">
              <h5 class="accordion-header" id="headingOne">
                <button
                  class="
                    accordion-button
                    border-bottom
                    font-weight-bold
                    text-start
                  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {item.content}
                  <i
                    class="
                      collapse-close
                      fa fa-plus
                      text-xs
                      pt-1
                      position-absolute
                      end-0
                      me-3
                    "
                  ></i>
                  <i
                    class="
                      collapse-open
                      fa fa-minus
                      text-xs
                      pt-1
                      position-absolute
                      end-0
                      me-3
                    "
                  ></i>
                </button>
              </h5>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionRental"
              >
                <div class="accordion-body text-sm opacity-8">
                  {{item.pcontent}}
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
import API from "../../plugins/axios/index.js";

export default {
  name: "ActionContent",
  data() {
    return {
      message: []
    };
  },
  components: {},
  created(){
    API({
      url: "message/listAnswer",
      method: "get"
    }).then((res)=>{
      console.log("数据为问题数据===>",res.data.data);
      this.message = res.data.data;
    })
  }
};
</script>

<style>
</style>