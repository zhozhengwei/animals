<template>
  <div class="contact-us-simple">
    <!-- nav -->
    <!-- header -->
    <HeaderContact></HeaderContact>
    <!-- from -->
    <FromContact></FromContact>
    <!-- footer -->
    <FooterNewContact></FooterNewContact>
  </div>
</template>

<script>
import HeaderContact from '@/components/contact/HeaderContact.vue';
import FromContact from '@/components/contact/FromContact.vue';
import FooterNewContact from '../components/footerCopy/FooterNewContact.vue';

export default {
  name:"ContactUsSimple",
  data(){
    return{

    }
  },
  components:{
    HeaderContact,
    FromContact,
    FooterNewContact
}
}
</script>

<style>

</style>