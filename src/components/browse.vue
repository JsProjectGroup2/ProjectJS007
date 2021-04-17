<template >
  <nav style="z-index: 4" class="position-absolute top-0 start-0 w-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <router-link
            to="/"
            class="navbar-brand"
            style="
              width: 100px;
              display: block;
              margin-top: 15px;
              margin-left: 35.5px;
            "
            href="#"
          >
            <img src="../../img/logo.png" alt="" height="65" />
          </router-link>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <div class="d-flex align-items-center">
            <router-link
              to="/logout"
              class="btn btn-y"
              style="
                display: block;
                margin-right: 61px;
                color: white;
                padding: 3.8px 16.5px;
              "
            >
              ออกจากระบบ
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div>
    <div
      style="
        position: relative;
        z-index: -1;
        width: 100%;
        height: 100vh;
        overflow: hidden;
      "
    >
      <video id="Vidy" style="width: 100%" autoplay loop>
        <source src="../../img/99.mp4" />
      </video>
      <div
        class="gradiant"
        style="position: absolute; z-index: 1; top: 0"
      ></div>
    </div>

    <div class="content text-white">
      <div class="container-fluid">
        <div style="padding-left: 2.3rem;margin-bottom:100px">
          <div class="lf">
            <img
              style="width: 270px;"
              src="../../img/Brooklyn_Nine-Nine_Logo.png"
              alt=""
            />
          </div>
          <div class="lf mt-5">
            <button
              class="btn btn-j"
              style="height:56px;width: 147px; font-weight: 900; font-size: 20px"
            >
              <img src="../../img/play1.png" style="width: 45px" alt="" />
              เล่น
            </button>
            <button
              @click="infor"
              class="btn btn-k"
              style="
                pading-left: 35px;
                width: 247px;
                font-weight: 900;
                font-size: 23px;
                color: white;
              "
            >
              <img src="../../img/info.jpg" style="width: 42px" alt="" />
              ข้อมูลเพิ่มเติม
            </button>
          </div>
        </div>

        <div class="row" style="padding-left: 2.3rem">
          <div class="category col-12 mt-3 mb-3">รายการทีวี</div>
          <div class="col-12">
            <vueper-slides
              class="no-shadow"
              :visible-slides="6"
              :slide-ratio="1 / 4"
              :gap="3"
              :dragging-distance="70"
            >
              <vueper-slide
                v-for="i in tv"
                :key="i._id"
                :image="'../../Thumbnail/' + i.thumbnail"
              />
            </vueper-slides>
          </div>
        </div>

        <div class="row" style="padding-left: 2.3rem">
          <div class="category mt-3 col-12 mb-3">คอมเมดี้</div>
          <div class="col-12">
            <vueper-slides
              class="no-shadow"
              :visible-slides="6"
              :slide-ratio="1 / 4"
              :gap="3"
              :dragging-distance="70"
            >
              <vueper-slide
                v-for="i in com"
                :key="i._id"
                :image="'../../Thumbnail/' + i.thumbnail"
              />
            </vueper-slides>
          </div>
        </div>

        <div class="row" style="padding-left: 2.3rem">
          <div class="category mt-3 col-12 mb-3">แอ็คชั่น</div>
          <div class="col-12">
            <vueper-slides
              class="no-shadow"
              :visible-slides="6"
              :slide-ratio="1 / 4"
              :gap="3"
              :dragging-distance="70"
            >
              <vueper-slide
                v-for="i in ac"
                :key="i._id"
                :image="'../../Thumbnail/' + i.thumbnail"
              />
            </vueper-slides>
          </div>
        </div>

        <div class="row" style="padding-left: 2.3rem">
          <div class="category mt-3 col-12 mb-3">ผจญภัย</div>
          <div class="col-12">
            <vueper-slides
              class="no-shadow"
              :visible-slides="6"
              :slide-ratio="1 / 4"
              :gap="3"
              :dragging-distance="70"
            >
              <vueper-slide
                v-for="i in ad"
                :key="i._id"
                :image="'../../Thumbnail/' + i.thumbnail"
              />
            </vueper-slides>
          </div>
        </div>

        <div class="row" style="padding-left: 2.3rem">
          <div class="category mt-3 col-12 mb-3">สยองขวัญ</div>
          <div class="col-12">
            <vueper-slides
              class="no-shadow"
              :visible-slides="6"
              :slide-ratio="1 / 4"
              :gap="3"
              :dragging-distance="70"
            >
              <vueper-slide
                v-for="i in hr"
                :key="i._id"
                :image="'../../Thumbnail/' + i.thumbnail"
              />
            </vueper-slides>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  margin-top: -450px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 87%,
    rgba(255, 255, 255, 0) 100%
  );
}
.category {
  font-size: 26.88px;
  font-weight: 900;
}
.text1 {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 4rem;
  font-weight: 900;
  line-height: normal;
}
.text2 {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.625rem;
  /*font-weight: 900;*/
}
.text3 {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  /*font-weight: 900;*/
}
.btn-y {
  background: #ff4f00;
}
.btn-j {
  margin-right: 10px;
  background: #ffff;
}
.btn-k {
  background: #6d6d6eb3;
}
.gradiant {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 8%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 94%
  );
}
.bg {
  width: 100%;
  height: 100vh;
}

</style>
<script>
//import jquery from "jquery";
import axios from "axios";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  methods: {
    infor(){
      document.getElementById('Vidy').pause();
      
    }
  },
  data() {
    return {
      tv: [],
      com: [],
      ac: [],
      ad: [],
      hr: [],
    };
  },
  
  created() {
    axios.get(`http://localhost:4000/vidapi/getvid/รายการทีวี`).then((cate) => {
      this.tv = cate.data;
    });
    axios.get(`http://localhost:4000/vidapi/getvid/คอมเมดี้`).then((cate) => {
      this.com = cate.data;
    });
    axios.get(`http://localhost:4000/vidapi/getvid/แอ็คชั่น`).then((cate) => {
      this.ac = cate.data;
    });
    axios.get(`http://localhost:4000/vidapi/getvid/ผจญภัย`).then((cate) => {
      this.ad = cate.data;
    });
    axios.get(`http://localhost:4000/vidapi/getvid/สยองขวัญ`).then((cate) => {
      this.hr = cate.data;
    });
  },
};
</script>
