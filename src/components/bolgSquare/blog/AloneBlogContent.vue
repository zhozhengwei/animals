<template>
  <section class="pt-3 pt-md-5 pb-md-5 pt-lg-7 bg-gray-200">
    <div class="container">
      <div class="row">
        <!-- 文章目录 -->
        <!-- <div class="col-lg-3 mb-lg-0 mb-3">
          <ul
            class="
              nav
              flex-column
              bg-white
              border-radius-lg
              p-3
              position-sticky
              top-1
            "
          >
            
          </ul>
        </div> -->
        <!-- 文章文本 -->
        <div class="col-lg-8 col-md-10 mx-auto pb-5">
          <div class="card shadow-lg">
            <!-- 渲染的效果 -->
            <div class="card-header bg-gradient-info p-5 position-relative">
              <!-- 文章封面 -->
              <img
                style="width: 100%"
                :src="article.cover"
              />
              <!-- 第一子标题 -->
              <h2 class="text-white mb-0">{{article.title}}</h2>
              <p class="text-gradient text-dark mb-2 text-sm"> by <a href="javascript:;" class="ms-1"><span class="font-weight-bold text-info">{{article.username}}</span></a> • {{article.lookCount}} loook • {{article.commentCount}} comment • {{article.createTime}} time</p>
              <p class="text-white opacity-8 mb-1">
                <a-tag v-for="item in tag" :key="item" color="#2db7f5">{{item.title}}</a-tag>
              </p>
              <!-- 头部特效 -->
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
            <div class="card-body p-5">
              <p v-html="article.text"></p>
              <a-divider />
            </div>
            <!-- 评论 -->
            <div class="card-body p-5">
              <a-list
                class="comment-list"
                v-if="comments.length"
                :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
                item-layout="horizontal"
                :data-source="comments"
              >
                <template #renderItem="{ item }">
                  <a-list-item>
                    <a-comment :author="item.username" :avatar="item.avatar">
                      <template #actions>
                        <span
                          @click="showReply"
                          >{{ item.action }}</span
                        >
                      </template>
                      <!-- 回复框 -->
                      <a-comment v-if="ifshow">
                        <template #avatar>
                          <a-avatar
                            src="https://joeschmoe.io/api/v1/random"
                            alt="Han Solo"
                          />
                        </template>
                        <template #content>
                          <a-form-item>
                            <a-textarea v-model:value="value1" :rows="4" />
                          </a-form-item>
                          <a-form-item>
                            <a-button
                              html-type="submit"
                              :loading="submitting"
                              type="primary"
                              @click="handleSubmit1(item.cid)"
                            >
                              回复
                            </a-button>
                          </a-form-item>
                        </template>
                      </a-comment>
                      <!-- end -->
                      <template #content>
                        <p>
                          {{ item.content }}
                        </p>
                      </template>
                      <!-- 子评论 -->
                      <a-comment v-for="item in children" :key="item">
                        <template #actions>
                          <span>Reply to</span>
                        </template>
                        <template #author>
                          <a>{{item.username}}</a>
                        </template>
                        <template #avatar>
                          <a-avatar :src="item.avatar" alt="Han Solo" />
                        </template>
                        <template #content>
                          <p>
                            {{item.content}}
                          </p>
                        </template>
                      </a-comment>
                      <!-- end -->
                      <template #datetime>
                        <a-tooltip
                          :title="item.datetime"
                        >
                          <span>{{ item.datetime }}</span>
                        </a-tooltip>
                      </template>
                    </a-comment>
                  </a-list-item>
                </template>
              </a-list>
            </div>
            <div class="card-body p-5">
              <a-comment>
                <template #avatar>
                  <a-avatar
                    :src="userinfo == null ? '#' : userinfo.avatar"
                    alt="Han Solo"
                  />
                </template>
                <template #content>
                  <a-form-item>
                    <a-textarea v-model:value="value" :rows="4" />
                  </a-form-item>
                  <a-form-item>
                    <a-button
                      html-type="submit"
                      :loading="submitting"
                      type="primary"
                      @click="handleSubmit"
                    >
                      发表评论
                    </a-button>
                  </a-form-item>
                </template>
              </a-comment>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dayjs from "dayjs";
//import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from "vue";
import { message } from "ant-design-vue";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from 'vue-router'
import API from "../../../plugins/axios/index.js"

dayjs.extend(relativeTime);
export default defineComponent({
  components: {
},
data(){
  return {
    id: this.$route.query.id,
    article:{},
    commentList:[],
    children:[],
    tag:[]
  }
},
  setup() {
    const comments = ref([]);
    const childrenList = ref([]);
    const submitting = ref(false);
    const submitting1 = ref(false);
    const value = ref("");
    const value1 = ref("");
    const ifshow = ref(false);
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    const router = useRouter()

    const handleSubmit = () => {
      if (!value.value) {
        message.error({
          content: () => "评论不能为空",
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        return;
      }
      submitting.value = true;
      setTimeout(() => {
        submitting.value = false;
        comments.value = [
          {
            uid: userinfo.uid,
            actions: "回复",
            username: userinfo.username,
            avatar: userinfo.avatar,
            content: value.value,
            datetime: dayjs().fromNow(),
          },
          ...comments.value,
        ];
        //添加评论
        API({
          url: "articleComment/save",
          method: "post",
          data: {
            aid: router.currentRoute.value.query.id,
            uid: userinfo.uid,
            content: value.value,
            datetime: dayjs().fromNow(),
          }
        }).then((res)=>{
          console.log("收到的数据", res.data.data);
          if(res.data.code === 0){
            message.success({
          content: () => "评论成功",
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
          }
        })
        value.value = "";
      }, 1000);
    };

    const handleSubmit1 = (cid) => {
      if (!value1.value) {
        return;
      }

      submitting1.value = true;
      setTimeout(() => {
        submitting1.value = false;
        childrenList.value = [{
          uid: userinfo.uid,
          actions: "回复",
          username: userinfo.username,
          avatar: userinfo.avatar,
          content: value1.value,
          datetime: dayjs().fromNow(),
        }, ...childrenList.value];

        for(var i = 0; i < childrenList.value.length; i++){
          this.children.push(childrenList.value[i]);
        }

        API({
          url: "articleComment/save",
          method: "post",
          data: {
            aid: this.newpaper.id,
            uid: userinfo.uid,
            parentId: cid,
            content: value1.value,
            datetime: dayjs().fromNow(),
          }
        }).then((res)=>{
          console.log("收到的数据", res.data.data);
          if(res.data.code === 0){
            message.success({
          content: () => "评论成功",
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
          }
        })
        value1.value = '';
      }, 1000);
    };

    return {
      dayjs,
      comments,
      submitting,
      value,
      handleSubmit,
      handleSubmit1,
      submitting1,
      childrenList,
      userinfo,
      ifshow,
      toshow: true,
      value1
    };
  },
  methods: {
    showReply(){
        this.ifshow=true;
    }
  },
  created(){
    API({
      url: "article/searchId/"+this.id,
      method: "get"
    }).then((res)=>{
      console.log("收到的数据", res.data.data);
      this.article = res.data.data;
      this.tag = res.data.data.tagList;
      console.log("========>", this.newpaper);
    })

    API({
      url: "articleComment/list/"+this.id,
      method: "get"
    }).then((res)=>{
      console.log("收到的数据", res.data.data);
      this.comments = res.data.data;
      console.log("========>", res.data.data.children);
      this.children = res.data.data.children;
    })
  }
});
</script>

<style>
</style>