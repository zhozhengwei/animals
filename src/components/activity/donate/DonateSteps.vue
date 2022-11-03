<template>
   <section class="py-5 mt-5">
  <div class="container py-5">
    <div class="row align-items-center">
      <div class="col-md-6 mb-md-0 mb-4">
        <h3 class="text-gradient text-success mb-0">向野生动物保护捐款</h3>
        <p class="lead mb-md-5 mb-4">
            如果没有每年收到的慷慨捐款，我们就不可能开展保护动物的工作。动物福利协会致力于将我们
            捐赠者的捐款直接用于动物的利益。35￥及以上的捐款有资格成为野生动物保护的会员（学生或老年人为10￥）。野生动物保护对所有捐赠者的信息进行保密。
            
        </p>
        <p class="lead mb-md-5 mb-4">
          我们从不公布、分享或出售任何捐赠者的姓名、地址、电话或电子邮件。
            了解更多关于<a href="#">野生动物保护会员的好处</a>并加入我们!如果你想更新你的地址和/或联系信息，请<a href="#">点击这里</a>
        </p>
      </div>
      <div class="col-md-5">
        <div class="blur-shadow-image ">
          <!-- <div>
            <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
          </div>
            
    <div class="steps-content">
      {{ steps[current].content }}
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">Previous</a-button>
    </div> -->
    <Steps></Steps>
      </div>
    </div>
  </div>
  </div>
</section>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';
import Steps from '@/components/card/Steps.vue';

export default defineComponent({
    setup() {
        const current = ref(0);
        const next = () => {
            current.value++;
        };
        const prev = () => {
            current.value--;
        };
        return {
            message,
            current,
            steps: [{
                    title: "First",
                    content: "First-content",
                }, {
                    title: "Second",
                    content: "Second-content",
                }, {
                    title: "Last",
                    content: "Last-content",
                }],
            next,
            prev,
        };
    },
    components: { Steps }
});
</script>

<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}

</style>