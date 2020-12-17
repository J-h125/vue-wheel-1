<template>
  <div class="wrapper" :class="{'error':error}">
    <input :readonly="readonly" :disabled="disabled" v-bind:value="value" type="text">
    <template v-if="error">
    <icon name="error" class="icon-error">  </icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  components:{
    'icon':Icon
  },
  name:'Guluinput',
  props:{
    value:{
      type:String
    },
    disabled:{
      type:Boolean,
      default:false,
    },
    readonly:{
      type:Boolean,
      default: false
    },
    error:{
      type:String
    }
  }
}
</script>
<style lang="scss" scoped>

$height : 32px;
$border-color:#999;
$border-color-hover: #666;
$border-radius:4px;
$font-size:12px;
$box-shadow-color:rgba(0,0,0,0.5);
$red:#F1453D;
.wrapper{
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > *{margin-right: 0.5em;
    &:last-child{margin-right: 0}
  }

  > icon{
    margin: 20px ;
    border:1px solid red;
  }
  > input{
    height: $height;
    border-color: $border-color;
    border-radius:$border-radius ;
    padding: 0 8px;
    font-size: inherit;
    &:hover{
      border-color:$border-color-hover;
    }
    &:active{
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],&[readonly]{
      border-color: #bbb;
      color:#bbb;
      cursor:not-allowed;
    }
  }
  &.error{
    > input{
      border-color: $red;
    }
  }
   .icon-error{
    fill: $red;
  }
  .errorMessage{
    color:$red;
  }
}

</style>