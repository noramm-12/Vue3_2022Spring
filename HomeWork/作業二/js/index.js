import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";
const apiUrl = "https://vue3-course-api.hexschool.io/v2";
const apiPath = "nora-end-hexschool";
createApp({
  data() {
    return {
      user: {
        username:'',
        password:'',
      },
    };
  },
  computed: {},
  methods: {
    signIn() {
      axios.post(`${apiUrl}/admin/signin`,this.user)
      .then((res)=>{
        console.log(res)
        //set cookie
        const {token,expired}=res.data;
        document.cookie=`userToken=${token};expires=${new Date(expired)};`;
        //轉向
        window.location='products.html';
      })
      .catch((error)=>{
        console.dir(error);
        alert(err.data.message);
      })
    },
  },
}).mount("#app");
