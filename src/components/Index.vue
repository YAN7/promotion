<template>
  <div class="page has-navbar" v-nav="{ title: '分享赚钱' }">
    <div class="page-content text-center">
      <img src="http://placehold.it/300x120" style="width: 100%" alt="">
      <router-link class="button button-assertive" to="/about">
        <i class="ion-information-circled"></i> About
      </router-link>
      <router-link class="button button-balanced" to="/personal">
        个人推广
      </router-link>
      <router-link class="button button-energized" to="/inStore">
        入驻医美店
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hello! Vonic.'
      }
    }
  }
</script>
<style>
</style>
