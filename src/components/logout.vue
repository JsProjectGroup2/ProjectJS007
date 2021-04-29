<template>
  <nav style="" class="position-absolute top-0 start-0 w-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <router-link
            to="/"
            class="navbar-brand"
            style="
              width: 200px;
              display: block;
              margin-top: 15px;
              margin-left: 35.5px;
            "
          >
            <img src="../../img/logo.png" alt="" height="65" />
          </router-link>
        </div>
        <div class="col d-flex justify-content-end">
          <div class="d-flex align-items-center">
            <button

              @click="loginz"
              class="btn btn-y"
              style="
                display: block;
                margin-right: 61px;
                color: white;
                padding: 3.8px 16.5px;
              "
              >เข้าสู่ระบบ</button
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="bg">
    <div class="gradiant">
      <div
        class="position-absolute top-50 start-50 translate-middle"
        style="
          background-color: white;
          width: 440px;
          border-radius: 2px;
          padding: 30px 45px;
        "
      >
        <div>
          <p style="font-size: 30px; color: #333">
            <b>ต้องการออกจากระบบใช่<br />ไหม</b>
          </p>
        </div>
        <div style="margin: 16px 0px">
          โปรดทราบว่าคุณไม่จำเป็นต้องออกจากระบบของ Dedphrik ทุกครั้ง
          แต่อาจต้องดำเนินการดังกล่าวเมื่อใช้คอมพิวเตอร์สาธารณะหรือคอมพิวเตอร์ที่ใช้ร่วมกันเท่านั้น
          <br /><br />ระบบจะเปลี่ยนเส้นทางไปที่หน้าหลักของ Dedphrik ใน 30 วินาที
        </div>
        <div>
          <router-link
            class="btn btn-primary form-control"
            to="/"
            style="margin: 10px 10px 10px 0px; padding: 14px 40px"
            >ออกจากระบบ</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
  background: url("../../img/nTzUgs.jpg") no-repeat;
  background-size: cover;
  background-position: 50% 78%;
}
.btn-y {
  background: #ff4f00;
}
</style>
<script>
export default {
  data() {
    return {
      Interval: null,
    };
  },
  created() {
    localStorage.removeItem("user");
    localStorage.removeItem("setlogin");
    localStorage.removeItem("accountmem");
    this.Interval = setInterval(this.logoutt, 30000);
  },
  methods: {
    loginz() {
      clearInterval(this.Interval);
      this.$router.push("/login");
    },
    logoutz() {
      clearInterval(this.Interval);
      this.$router.push("/");
    },
  },
};
</script>

