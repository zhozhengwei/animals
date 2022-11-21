<template>
  <a-card hoverable style="width: 300px" class="card">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        
      />
    </template>
    <template #actions>
      <solution-outlined />
      <edit-outlined key="edit" @click="toEdit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta :title="userinfo.username" description="用户可以使用该组件前往创作">
      <template #avatar>
        <!-- 用户头像 -->
        <a-avatar :src="userinfo.avatar" />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
import { SolutionOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    SolutionOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
  setup(){
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    return{
      userinfo
    }
  },
  methods: {
    toEdit(){
      this.$router.push({
        name: "Edtior"
      })
    }
  }
});
</script>

<style>

</style>