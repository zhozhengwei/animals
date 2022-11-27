<template>
  <div class="privacy">
    <!-- 导航栏 -->
    <NavDefault :toshow="toshow"></NavDefault>
    <!-- 主题文字宣传 -->
    <section class="pt-3 pt-md-5 pb-md-5 pt-lg-7 bg-gray-200">
      <div class="container">
        <div class="col-lg-8 col-md-10 mx-auto pb-5">
          <div class="card shadow-lg">
            <div class="card-header bg-gradient-dark p-5 position-relative">
              <h3 class="text-white mb-0">组织加入计划</h3>
              <p class="text-white opacity-8 mb-4">
                联系我们加入合作
              </p>
              <div class="position-absolute w-100 z-index-1 bottom-0 ms-n5">
                <svg
                  class="waves"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 24 150 40"
                  preserveAspectRatio="none"
                  shape-rendering="auto"
                  style="height: 7vh; min-height: 50px"
                >
                  <defs>
                    <path
                      id="gentle-wave"
                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    ></path>
                  </defs>
                  <g class="moving-waves">
                    <use
                      xlink:href="#gentle-wave"
                      x="48"
                      y="-1"
                      fill="rgba(255,255,255,0.40"
                    ></use>
                    <use
                      xlink:href="#gentle-wave"
                      x="48"
                      y="3"
                      fill="rgba(255,255,255,0.35)"
                    ></use>
                    <use
                      xlink:href="#gentle-wave"
                      x="48"
                      y="5"
                      fill="rgba(255,255,255,0.25)"
                    ></use>
                    <use
                      xlink:href="#gentle-wave"
                      x="48"
                      y="8"
                      fill="rgba(255,255,255,0.20)"
                    ></use>
                    <use
                      xlink:href="#gentle-wave"
                      x="48"
                      y="13"
                      fill="rgba(255,255,255,0.15)"
                    ></use>
                    <use
                      xlink:href="#gentle-wave"
                      x="48"
                      y="16"
                      fill="rgba(255,255,255,0.95"
                    ></use>
                  </g>
                </svg>
              </div>
            </div>
            <div class="card-body p-5 pt-0">
              <p class="contentImage">
                <img
                  data-index="0"
                  src="https://awionline.org/sites/default/files/styles/art/public/page/image/dolphin-flickr-JohnLiu.webp?itok=u5niaj78"
                  data-width="500px"
                  data-height="332px"
                />
              </p>
              <p class="contentFont">
                有许多方法可以支持野生动物保护的工作。我们感谢现金和非现金捐赠。要通过移动支付捐款，<router-link to="/activity/donate">请单击此处</router-link>；支票捐款可支付给“动物福利协会”，并发送至本页底部列出的邮寄地址。你也可以通过遗赠、加入保护计划和证券（股票、债券和共同基金）进行捐赠。
              </p>
              <p class="contentImage">
                <img
                  data-index="1"
                  src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/172.jpg"
                  data-width="501px"
                  data-height="244px"
                />
              </p>
              <p class="contentFont">
                历史总是惊人的相似，近日，新型冠状病毒感染的肺炎同样引起了全国人民的注意和重视，纷纷开始预防起来。据调查显示，此次疫情的根源地正是武汉的华南海鲜市场。专家表示，确定这个病毒是由野生动物身上传出，第一批感染此病毒的，无一例外都和野生动物售卖有关。如今，“食野味”成为众矢之的，“保护野生动物”的呼声也愈发高涨。今天，我们就来看一下我国的《野生动物保护法》吧。
              </p>
              <p class="contentFont">中华人民共和国野生动物保护法</p>
              <p class="contentFont">
                动物福利协会是一个慈善组织，所有捐赠都可以免税。野生动物保护的免税号码为13-xxxxx。野生动物保护不会以任何理由与任何第三方交易、分享或出售捐赠者的地址或其他个人信息。
              </p>
              <p class="contentFont">
                成员资格
              </p>
              <p class="contentFont">
                会员享有许多福利，并有机会在出版时免费获得我们的书籍和其他材料以及我们的年度报告。35元及以上的捐款符合会员资格（学生或老年人10元）。<router-link to="/apply">请单击此处。</router-link>
              </p>
              <p class="contentFont">
                遗赠
              </p>
              <p class="contentFont">
                为动物及其栖息地的未来做出贡献的最有效方式之一是通过遗嘱中的遗赠
              </p>
              <p class="contentFont">
                剩余遗产在为您的家人、朋友和其他人做好准备后，您的剩余财产（您的“剩余遗产”）将捐赠给野生动物保护
              </p>
              <p class="contentFont">第三条 野生动物资源属于国家所有。</p>
              <p class="contentFont">
                我向位于北京的动物福利协会捐赠、设计和遗赠金额为_______________________元和/或_______________________（具体描述的财产）。<router-link to="/contactus">请点击此处，联系我们</router-link>
              </p>
              <p class="contentFont">增值证券</p>
              <p class="contentFont">
                如果您的非现金财产（如股票、债券、共同基金）价值增长（升值），
                且持有时间超过一年，您通常可以从捐赠此类财产中获得比捐赠等量现金更大的税收节省。
                原因是，如果你出售了资产，你可以通过赠送升值的财产来规避资本利得税。
                您也有权根据财产的当前价值获得慈善扣除，包括您自首次购买该财产以来获得的“账面利润”。点击此处查看野生动物保护的股票转让说明。
              </p>
              <p class="contentFont">贬值证券</p>
              <p class="contentFont">
                如果你的股票或其他财产价值有所下降，
                你通常会通过出售并将所得收益返还来节省更多的税款。然后，
                您可以在纳税申报表上申请资本损失。你还可以扣除你作为慈善礼物赠送的现金收益。
                这有时会导致扣除的税款超过资产的当前价值。
              </p>
              <p class="contentFont">其他给予方式</p>
              <p class="contentFont">
                捐赠车辆-通过慈善成人游乐设施（CARS）捐赠您的汽车、卡车、摩托车、房车或船只，支持AWI。CARS会主动联系您，免费安排您的车辆捐赠。访问careasy。org获取更多信息。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 页脚 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavDefault from "@/components/nav/NavDefault.vue";
import AgainFooter from "@/components/AgainFooter.vue";
export default {
  name: "LowText",
  data() {
    return {
      toshow: true,
    };
  },
  components: {
    NavDefault,
    AgainFooter,
  },
};
</script>

<style>
</style>