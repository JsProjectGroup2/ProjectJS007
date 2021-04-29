<template>
  <nav
    class="position-absolute top-0 start-0 w-100"
    style="border-bottom: 1px solid #e6e6e6;padding-top:85px"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <router-link
            to="/"
            class="navbar-brand"
            style="
              width: 200px;
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
              to="/login"
              class="btn"
              style="display: block; margin-right: 45px; padding: 3.8px 16.5px"
              >เข้าสู่ระบบ</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div id="first" class="position-absolute top-50 start-50 translate-middle">
    <div class="text-center">
      <img
        src="../../img/Devices.png
    "
        alt=""
        style="height: 70px; margin-bottom: 20px"
      />
    </div>
    <div style="font-size: 13px" class="text-center">
      ขั้นตอน <b>1</b> จาก <b>3</b>
    </div>
    <div
      style="font-size: 23px; font-weight: 1000; margin-bottom: 9.2px"
      class="text-center"
    >
      ตั้งค่าบัญชีของคุณให้เสร็จ<br />สมบูรณ์
    </div>
    <div class="text-center" style="font-size: 17px; line-height: 23px">
      Dedphrik ปรับแต่งมาเพื่อคุณโดยเฉพาะ สร้าง<br />รหัสผ่านเพื่อรับชม Dedphrik
      ได้ทุกเวลาไม่ว่า<br />ในอุปกรณ์ใด
    </div>
    <div class="text-center">
      <button @click="reform" id="sbmit" class="btn2">ดำเนินการต่อ</button>
    </div>
  </div>
  <div
    id="sec"
    class="position-absolute top-50 start-50 translate-middle"
    style="display: none"
  >
    <div
      id="err"
      class="alert mt-5 position-absolute"
      style="
        top: -145px;
        background-color: rgb(255, 160, 10);
        color: white;
        display: none;
      "
    >
      <div class="d-flex align-items-center" style="gap: 12px">
        <div class="left">
          <img src="../../img/alert.png" style="height: 28px" alt="" />
        </div>
        <div class="right">
          <b>มีบัญชีนี้อยู่แล้ว </b>
          <router-link to="/login" style="color: white"
            >เข้าสู่ระบบบัญชีดังกล่าว</router-link
          >
          หรือลองใช้<br />อีเมลอื่น
        </div>
      </div>
    </div>
    <div style="font-size: 13px">ขั้นตอน <b>2</b> จาก <b>3</b></div>
    <div style="font-size: 23px; font-weight: 1000; margin-bottom: 9.2px">
      สร้างรหัสผ่านเพื่อเริ่มต้นการเป็นสมาชิก
    </div>
    <div style="font-size: 17px; line-height: 23px">
      เหลืออีกไม่กี่ขั้นตอนก็จะเสร็จเรียบร้อยแล้ว!<br />เราก็ไม่ชอบงานเอกสารเช่นกัน
    </div>

    <form @submit.prevent="registerinp">
      <div class="form-floating mt-2 mb-2" style="width: 440px">
        <input
          v-model="member.mail"
          type="email"
          class="form-control"
          id="1"
          placeholder="name@example.com"
        />
        <label for="floatingInput" style="color: #8c8c8c">อีเมล</label>
        <span
          v-show="isMail"
          style="color: #e87c03; display: block; font-size: 13px"
          >ต้องป้อนอีเมล!</span
        >
      </div>

      <div class="form-floating">
        <input
          v-model="member.password"
          type="password"
          class="form-control"
          id="2"
          placeholder="Password"
        />
        <label for="floatingPassword" style="color: #8c8c8c"
          >เพิ่มรหัสผ่าน</label
        >
        <span
          v-show="isPass"
          style="
            color: #e87c03;

            display: block;
            font-size: 13px;
          "
          >ต้องป้อนรหัสผ่าน!</span
        >
      </div>

      <div class="text-center">
        <button id="sbmit" class="btn3">ดำเนินการต่อ</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.btn3 {
  margin-top: 25px;
  width: 100%;
  height: 48px;
  color: white;
  border: 0;
  background: #ff4f00;
  border-radius: 2px;
}
.btn2 {
  margin-top: 25px;
  width: 360px;
  height: 48px;
  color: white;
  border: 0;
  background: #ff4f00;
  border-radius: 2px;
}
.btn {
  color: black;
  font-size: 19px;
  font-weight: 700;
}

.form-control {
  border-radius: 2px;
  border-width: 0.1px;
  border-color: #8c8c8c;
}
</style>
<script>
import axios from "axios";
import jquery from "jquery";
export default {
  created(){
      if(localStorage.getItem('setlogin')){
        this.$router.push("/pacage")
      }
    },
  data() {
    return {
      member: {
        mail: localStorage.getItem("regismail"),
        tel: "",
        password: "",
        profile: {
          nickname: "",
          pic: "",
        },
      },
      isMail: false,
      isPass: false,
      Interval:null
    };
  },
  methods: {
    
    proces() {
      clearInterval(this.Interval);
      let apicheck = `http://project007.app.ruk-com.cloud/api/signup/${this.member.mail}`;
      axios.post(apicheck).then((res) => {
        if (res.data != null) {
          jquery("#err").fadeIn();
        } else {
          let apiregis = "http://project007.app.ruk-com.cloud/api/create-member/";
          axios.post(apiregis, this.member).then((abc) => {
            localStorage.removeItem('regismail')
            localStorage.setItem('mail',this.member.mail)
             localStorage.setItem('setlogin',true)
             localStorage.setItem('accountmem',JSON.stringify(abc.data))
            this.$router.push("/pacage");
          });
        }
      });
    },
    reform() {
      jquery("#first").fadeOut();
      jquery("#sec").delay(500).fadeIn();
    },
    registerinp() {
      let $1 = jquery("#1").val();
      let $2 = jquery("#2").val();
      jquery("#err").fadeOut();
      if ($1 == "") {
        this.isMail = true;
        jquery("#1").css("border-color", "#e87c03");
      }

      if ($2 == "") {
        this.isPass = true;
        jquery("#2").css("border-color", "#e87c03");
      }
      
      if ($1 != "" && $2 != "") {
        jquery("#sec").fadeOut();
        this.Interval = setInterval(this.proces,250)
      }
    },
  },
};
</script>