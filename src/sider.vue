<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=!visible">close</button>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'GuluSider',
  data(){
    return{
      visible:true,
    }
  }
};
</script>

<style lang="scss" scoped>
.sider{
  position:relative;
  > button{
    position:absolute;
    top:0;
    right:0;
  }
}
.sider-enter-active, .slide-leave-active{
  transition:all 1.5s;
}
.slide-enter, .slide-leave-to{
  margin-left: -200px;
}
</style>