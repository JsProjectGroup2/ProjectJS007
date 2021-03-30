<template>
  <nav class="position-absolute top-0 start-0 w-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <a
            class="navbar-brand"
            style="display: block; margin-top: 15px; margin-left: 35.5px"
            href="#"
          >
            <img src="../../img/logo.png" alt="" height="65" />
          </a>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <div class="d-flex align-items-center">
            <router-link
              to="/"
              class="btn btn-y"
              style="
                display: block;
                margin-right: 61px;
                color: white;
                padding: 3.8px 16.5px;
              "
              >เข้าสู่ระบบ</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="bg">
    <div class="gradiant">
      <div class="position-absolute top-50 start-50 translate-middle">
        <div class="text1 text-center">
          ภาพยนตร์ รายการทีวี และ <br />
          ความบันเทิงอีกนิดหน่อย
        </div>
        <div class="text2 mt-3 mb-3 text-center">
          รับชมได้ที่เดียว ห้ามยกเลิก
        </div>
        <div class="text3 text-center mb-3">
          หากพร้อมรับชม ป้อนอีเมลเพื่อสร้างหรือเริ่มต้นการเป็นสมาชิกอีกครั้ง
        </div>
        <div class="d-flex flex-row">
          <div class="form-floating" style="width:70%;height:70px">
            <input
            style="height:70px"
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">ที่อยู่อีเมล</label>
          </div>
          <button class="btn btn-primary" style="width:30%;font-size:1.875rem;background: #ff4f00;">เริ่มต้นใช้งาน ></button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
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
  background: url("../../img/bg.jpg") no-repeat;
  background-size: cover;
  background-position: 50% 78%;
}
</style>
<script>
export default {
  data() {
    return {};
  },
};
</script>
