<template>
  <div class="about-us">
    <!-- 完成活动中心的设计 -->
    <!--    1.两个活动列表页面 （都一样可以套用）-->
    <!--    2.活动具体页面（自己设计使用UI框架） -->
    <!--    3.捐赠的步骤化页面 -->
    <!-- 活动中心得活动列表 -->
    <!-- 页面介绍(页头) -->
    <ListHeader></ListHeader>
    <!-- 主体列表 -->
    <section class="py-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 ms-auto me-auto">
            <h3 class="text-justify mb-4">活动列表</h3>
            <!-- 活动组件 -->
            <!-- v-for 子父组件的通信 -->
            <ListCenter
              v-for="item in activityList"
              :key="item"
              :activity="item"
            ></ListCenter>
            <!-- 分页组件 -->
            <ul class="pagination pagination-info">
              <li class="page-item">
                <a class="page-link" href="javascript:;" aria-label="Previous">
                  <span aria-hidden="true">
                    <!-- <i class="fa fa-angle-left" aria-hidden="true"></i> -->
                    {{ pageInfo.total }} 条
                  </span>
                </a>
              </li>
              <li
                v-for="i in pageInfo.pages"
                @click.prevent="initData(i)"
                :key="i"
                :class="{ 'page-item  active': pageInfo.pageNum == i }"
                class="page-item"
              >
                <a class="page-link">{{ i }}</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:;" aria-label="Next">
                  <span aria-hidden="true">
                    <!-- <i class="fa fa-angle-right" aria-hidden="true"></i> -->
                    {{ pageInfo.pageNum }}/{{ pageInfo.pages }} 页
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- 订阅 -->
    <SubscribeBox></SubscribeBox>
    <!-- 页尾 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import ListCenter from "@/components/activity/activityCenter/ListCenter.vue";
import ListHeader from "@/components/activity/activityCenter/ListHeader.vue";
import SubscribeBox from "@/components/subscribe/SubscribeBox.vue";
import AgainFooter from "@/components/AgainFooter.vue";
import API from "../../plugins/axios/index.js";

export default {
  name: "ActivityCenter",
  data() {
    return {
      activityList: [],
      pageInfo: {},
    };
  },
  components: {
    ListCenter,
    ListHeader,
    SubscribeBox,
    AgainFooter,
  },
  created() {
    this.initData(1);
  },
  methods: {
    initData: function (pageNum) {
      API({
        url: "activity/listAll/" + pageNum,
        method: "get",
      }).then((res) => {
        console.log("收到的数据活动数据", res.data.data);
        this.activityList = res.data.data.list;
        this.pageInfo = res.data.data;
      });
    },
  },
};
</script>

<style>
</style>