import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";

const apiUrl = "https://vue3-course-api.hexschool.io/v2";
const apiPath = "nora-end-hexschool";

createApp({
  data() {
    return {
      products: [],
      tempProduct: {},
    };
  },
  computed: {},
  methods: {
    checkToken() {
      //get cookie and set header(default)
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)userToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      axios.defaults.headers.common["Authorization"] = token;
    },
    checkAdmin() {
      const url = `${apiUrl}/api/user/check`;
      console.log(url);
      axios
        .post(url)
        .then((res) => {
          console.log("成功");
          this.getProducts();
        })
        .catch((err) => {
          console.log('失敗')
          alert(err.data.message)
          window.location = "index.html";
        });
    },
    getProducts() {
      const url = `${apiUrl}/api/${apiPath}/admin/products`;
      console.log(url);
      axios
        .get(url)
        .then((res) => {
          console.log("取得商品");
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log('取得失敗')
          alert(err.data.message);
        });
    },
    OpenProduct(item){
      this.tempProduct=item;
    },
    // createProduct() {},
    // editProduct() {},
    // deleteProduct() {},
  },
  mounted() {
    this.checkToken();
    this.checkAdmin();
  },
}).mount("#app");
