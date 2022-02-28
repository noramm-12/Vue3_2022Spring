import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';
import { testData} from './testData.js';

createApp({
  data() {
    return {
      products:testData,
      tempProduct:{},
    }
   },
   computed:{

   },
   methods:{
    
   }
}).mount('#app');

