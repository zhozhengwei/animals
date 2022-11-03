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
    <a-card-meta title="用户名" description="自我描述（限制字数）">
      <template #avatar>
        <!-- 用户头像 -->
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
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