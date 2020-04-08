<template>
  <a-locale-provider :locale="locale[$i18n.locale]">
    <a-layout  class="main-wrapper">
      <a-layout-header class="b-w">
        <img src='./../assets/img/logo.png' />
      </a-layout-header>
      <a-layout-content class="b-w height-100 main-wrapper-content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-locale-provider>
</template>

<script>
import antdMsg from './../settings/antdMsg'

export default {
  data () {
    return {
      locale: antdMsg
    }
  },
  computed: {
    isPointer() {
      if(this.$route.path == '/home') {
        return false
      }
      return true
    }
  },
  mounted() {
    this.$store.dispatch('settings/init')
  },
  methods: {
    
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if(vm.$route.hash) {
        vm.$router.push({path: to.path});
      }
    })
  },
}
</script>

<style>

.main-wrapper {
  display: flex;
  height: 100%;

}
.ant-layout-header {
  border: 1px solid #e8e8e8;
}
.is-pointer {
  cursor: pointer;
}
.ant-layout-header > h2 {
  display: inline-block;
  width: 200px;
  margin-left: 40px;
  color: #333;
}
.main-wrapper-content {
  box-shadow: inset 0 3px 5px #e8e8e8;
}
</style>