<template>
  <nav class="position-absolute top-0 start-0 w-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <router-link
            to="/"
            class="navbar-brand"
            style="display: block; margin-top: 15px; margin-left: 35.5px"
            href="#"
          >
            <img src="../../img/logo.png" alt="" height="65" />
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <div class="bg">
    <div class="gradiant">
      <div
        class="position-absolute top-50 start-50 translate-middle"
        style="
          padding: 60px 68px 40px;
          margin-bottom: 90px;
          background: rgba(0, 0, 0, 0.75);
          border-radius: 5px;
          height: 550px;
        "
      >
        <form @submit.prevent="login"> 
          <div>
            <h1 class="h1">เข้าสู่ระบบ</h1>
            <div style="padding: 0px 0px 16px">
              <div class="form-floating">
                <input
                  v-model="member.mail"
                  style="background: #333; border: 0;color:white"
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput" class="input"
                  >อีเมลหรือหมายเลขโทรศัพท์</label
                >
              </div>
            </div>
            <div style="padding: 0px 0px 16px">
              <div class="form-floating">
                <input
                  v-model="member.password"
                  style="background: #333; border: 0;color:white"
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword" class="input">รหัสผ่าน</label>
              </div>
            </div>
            <div>
              <button class="btn" style="color: white; font-weight: 900">
                เข้าสู่ระบบ
                
              </button>
            </div>
            <div style="margin-top:30px;color:#737373;">
              หากยังใหม่กับการใช้ Dedphrik <router-link to="/" class="link">สมัครลงทะเบียน<br>ตอนนี้</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.gradiant {
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 8%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 94%
  );
}
.input {
  color: #8c8c8c;
}
input:focus{
  caret-color: white;
}
.link{
  color: white;
  text-decoration: none;
}
.link:hover{
  color: white;
  text-decoration: underline;
}
.btn {
  margin-top: 24px;
  margin-bottom: 12px;
  border-radius: 4px;
  width: 100%;
  height: 48px;
  border: 0;
  background: #ff4f00;
}
.bg {
  width: 100%;
  height: 100vh;
  background: url("../../img/bg.jpg") no-repeat;
  background-size: cover;
  background-position: 50% 78%;
}
.form-floating {
  width: 314px;
  height: 50px;
}
.h1 {
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
}
</style>
<script>

export default {
  data() {
    return {
      member:{
        mail:"",
        password:"",
      }
    }
  },
  methods:{
    login(){
      let apilogin = `http://localhost:4000/api/login/${this.member.mail}/${this.member.password}`
    }
  }
};
</script>
