import { ip } from 'address';
import Vue from 'vue';
import App from './App.vue';
import './index.css';

new Vue({
  el: '#root',
  render: (h) => h(App),
});


console.log(ip('localhost'));
