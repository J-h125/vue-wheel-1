<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>

    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>

export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 20,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭', callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()

  },
  computed: {
    toastClasses(){
      return {[`position-${this.position}`]:true}
    }
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    log() {
      console.log('测试')
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);  @keyframes fade-in {
 0%{opacity:0;}
  100%{opacity:1;}
}
.toast {
  animation: fade-in 1s;
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8em;
  position: fixed;
  left: 50%;
  display: flex;
  align-items: center;
  background: $toast-bg;
  color: white;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  padding: 0 16px;
  .message {
    padding: 8px 0;
  }

  .close {
    padding-left: 16px;

  }
  .line {
    height: 100%;
    border-left: 1px solid #bbb;
    margin-left: 16px;
  }
  &.position-top{
    top:0;
    transform: translateX(-50%);
  }
  &.position-bottom{
    bottom:0;
    transform:translateX(-50%);
  }
  &.position-middle{
    top:50%;
    transform:translateX(-50%);
  }
}


</style>