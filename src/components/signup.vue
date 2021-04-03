<template>
  <nav class="position-absolute top-0 start-0 w-100" style="border-bottom:1px solid #e6e6e6">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <router-link
            to="/"
            class="navbar-brand"
            style="width:200px;display: block; margin-top: 15px; margin-left: 35.5px"
            href="#"
          >
            <img src="../../img/logo.png" alt="" height="65" />
          </router-link>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <div class="d-flex align-items-center">
            <router-link
              to="/login"
              class="btn"
              style="
                display: block;
                margin-right: 45px;
                padding: 3.8px 16.5px;
              "
              >เข้าสู่ระบบ</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>
<style scoped>
.btn{
  color: black;
  font-size: 19px;
  font-weight: 700;
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
    return {
      email: this.$route.params.email,
    };
  },
};
</script>