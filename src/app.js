import Vue from 'vue'
import Button from "./button";
import Icon from './icon';
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Content from "./content";
import Header from "./header";
import Footer from "./footer";
import Layout from "./layout";
import Sider from "./sider";
import Toast from "./toast";
import Plugin from "./plugin"


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-content',Content)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
Vue.component('g-toast',Toast)
Vue.use(Plugin)

new Vue({
    el:'#app',
    data:{
        loading1 :false,
        loading2 :false,
        loading3 :false,
        message : 'hi'
    },
    created(){

    },
    methods:{
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('bottom')
        },
        showToast3(){
            this.showToast('middle')
        },
       showToast(position){
           this.$toast('有一条message',{
               position,
               enableHtml: false,
               closeButton: {
                   text:'知道了',
                   callback(){
                       console.log('用户已收到,已关闭')
                   }
               },
               autoClose: true,
               autoCloseDelay: 3,
           })
       }
    }
})

