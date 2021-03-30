<template>
  <nav class="position-absolute top-0 start-0 w-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <router-link
            to="/"
            class="navbar-brand"
            style="display: block; margin-top: 15px; margin-left: 35.5px"
            href="#">
            <img src="../../img/logo.png" alt="" height="65" />
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <div class="bg">
    <div class="gradiant">
        <div class="position-absolute top-50 start-50 translate-middle">
            <form></form>
        </div>
    </div>
  </div>
</template>
<style> 
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
