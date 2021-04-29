<template>
  <nav style="padding-top:85px" class="position-absolute top-0 start-0 w-100">
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
          <form @submit.prevent="Sentmail" class="w-100 d-flex">
            <div class="form-floating" style="width: 70%; height: 70px">
              <input
                v-model="member.mail"
                style="height: 70px"
                type="email"
                class="form-control"
                id="1"
                placeholder="name@example.com"
              />
              <label for="1">ที่อยู่อีเมล</label>
              <span
                v-show="isMail"
                style="
                  color: #e87c03;
                  margin-top: 3px;
                  display: block;
                  font-size: 16px;
                "
                >ต้องป้อนอีเมล!</span
              >
            </div>
            <button
            
              class="btn btn-primary"
              style="width: 30%; font-size: 1.875rem; background: #ff4f00"
            >
              เริ่มต้นใช้งาน >
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
import jquery from "jquery";
import axios from "axios";
export default {
  created(){
    if(localStorage.getItem('setlogin')){
        //this.$router.push("/browse")
        let mmm=JSON.parse(localStorage.getItem('accountmem'))
        if(mmm.package==0){
          this.$router.push("/pacage")
        }else if(mmm.isAdmin==true){
          this.$router.push("/admin")
        }
        else{
          this.$router.push("/browse")
        }
      }
  },
  data() {
    return {
      member: {
        mail: "",
      },
      isMail: false,
    };
  },
  methods: {
    Sentmail() {
      let $1 = jquery("#1").val();
      if ($1 == "") {
        this.isMail = true;
        jquery("#1").css("border-bottom", "2px solid #e87c03");
      } else {
        axios
          .post(`http://project007.app.ruk-com.cloud/api/${this.member.mail}`)
          .then((tmail) => {
            if (tmail.data != null) {
              localStorage.setItem("mail",this.member.mail)
              this.$router.push("/login");
            } else {
              localStorage.setItem("regismail",this.member.mail)
              this.$router.push("/signup");
            }
          });
      }
    },
  },
};
</script>
