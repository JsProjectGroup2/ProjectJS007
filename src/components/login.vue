<template>
  <nav class="position-absolute top-0 start-0 w-100">
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
            <div v-show="isCorrect" class="alert">
              ขออภัย ไม่พบบัญชีที่ใช้ที่อยู่อีเมลนี้ โปรดลอง<br />อีกครั้งหรือ
              <router-link to="/" class="link2">สร้างบัญชีใหม่</router-link>
            </div>
            <div style="padding: 0px 0px 16px">
              <div class="form-floating">
                <input
                  v-model="member.mail"
                  style="background: #333; border: 0; color: white"
                  type="text"
                  class="form-control"
                  id="1"
                  placeholder="name@example.com"
                />
                <label for="1" class="input">อีเมลหรือหมายเลขโทรศัพท์</label>
              </div>
              <span
                v-show="isMail"
                style="
                  color: #e87c03;
                  margin-top: 12px;
                  display: block;
                  font-size: 13px;
                "
                >โปรดป้อนอีเมลหรือหมายเลขโทรศัพท์ที่ถูกต้อง</span
              >
            </div>
            <div style="padding: 0px 0px 16px">
              <div class="form-floating">
                <input
                  v-model="member.password"
                  style="background: #333; border: 0; color: white"
                  type="password"
                  class="form-control"
                  id="2"
                  placeholder="Password"
                />
                <label for="2" class="input">รหัสผ่าน</label>
              </div>
              <span
                v-show="isPass"
                style="
                  color: #e87c03;
                  margin-top: 12px;
                  display: block;
                  font-size: 13px;
                "
                >รหัสผ่านต้องมีจำนวนระหว่าง 4 ถึง 60 อักขระ</span
              >
            </div>
            <div>
              <button
                class="btn"
                style="color: white; font-weight: 900"
              >
                เข้าสู่ระบบ
              </button>
            </div>
            <div style="margin-top: 30px; color: #737373">
              หากยังใหม่กับการใช้ Dedphrik
              <router-link to="/" class="link"
                >สมัครลงทะเบียน<br />ตอนนี้</router-link
              >
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
  height: 100vh;
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
input:focus {
  caret-color: white;
}
.link {
  color: white;
  text-decoration: none;
}
.link:hover {
  color: white;
  text-decoration: underline;
}
.alert {
  background: #e87c03;
  color: white;
  font-size: 14px;
  line-height: 18px;
  padding: 10px 20px;
  vertical-align: center;
}
.link2 {
  color: white;
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
import jquery from "jquery";
import axios from "axios";
export default {
  data() {
    return {
      member: {
        mail: "",
        password: "",
      },
      isCorrect: false,
      isMail: false,
      isPass: false,
    };
  },
  created() {
    if (localStorage.getItem("setlogin")) {
      //this.$router.push("/browse")
      let mmm = JSON.parse(localStorage.getItem("accountmem"));
      if (mmm.package == 0) {
        this.$router.push("/pacage");
      } else {
        this.$router.push("/browse");
      }
    }
    if (localStorage.getItem("mail") != undefined) {
      this.member.mail = localStorage.getItem("mail");
    } else {
      console.log("no");
    }
  },
  methods: {
    login() {
      let $1 = jquery("#1").val();
      let $2 = jquery("#2").val();
      if ($1 == "") {
        this.isMail = true;
        jquery("#1").css("border-bottom", "2px solid #e87c03");
      } else if ($1 != "") {
        this.isMail = false;
        jquery("#1").css("border-bottom", "none");
      }
      if ($2 == "") {
        this.isPass = true;
        jquery("#2").css("border-bottom", "2px solid #e87c03");
      } else if ($2 != "") {
        this.isPass = false;
        jquery("#2").css("border-bottom", "none");
      }
      if ($1 != "" && $2 != "") {
        let apilogin = `http://localhost:4000/api/login/${this.member.mail}/${this.member.password}`;
        axios.post(apilogin).then((res) => {
          if (res.data == null) {
            this.isCorrect = true;
          } else {
            localStorage.setItem("setlogin", true);
            localStorage.removeItem("mail");
            localStorage.setItem("accountmem", JSON.stringify(res.data));
            if (res.data.isAdmin == true) {
              this.$router.push("/admin");
            } else {
              this.$router.push("/browse");
            }
          }
        });
      }
    },
  },
};
</script>
