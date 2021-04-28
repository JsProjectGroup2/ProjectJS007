<template>
  <nav
    class="position-absolute top-0 start-0 w-100"
    style="border-bottom: 1px solid #e6e6e6"
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
              to="/logout"
              class="btn"
              style="display: block; margin-right: 45px; padding: 3.8px 16.5px"
              >ออกจากระบบ</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div
    id="first"
    class="position-absolute top-50 start-50 translate-middle"
    style="display: "
  >
    <div class="text-center">
      <img
        src="../../img/Checkmark.png
    "
        alt=""
        style="height: 70px; margin-bottom: 20px"
      />
    </div>
    <div style="font-size: 13px" class="text-center">
      ขั้นตอน <b>3</b> จาก <b>3</b>
    </div>
    <div
      style="font-size: 23px; font-weight: 1000; margin-bottom: 9.2px"
      class="text-center"
    >
      ชำระเงิน
    </div>
    <div class="text-center" style="font-size: 17px; line-height: 23px">
      เพียงแค่ <b>9,999</b> บาท
      คุณก็สามารถรับชมหนังและซีรีย์ที่ดีที่สุดในโลกได้แล้ว !
      <div style="width: 550px">
        <form @submit.prevent="updt">
          <div class="p-3 mt-3" style="border: 1px solid #dee2e6">
            <div class="row" style="text-align: left">
              <div class="col-6 mb-4">
                <div style="font-size: 1.5rem">Payment</div>
              </div>
              <div class="col-6">
                <div style="float: right">
                  <img
                    style="height: 32px"
                    src="../../img/payment.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-11 mb-3">
                <label for="" class="form-label" style="color: #b3b3b3"
                  >Cardholder's name:</label
                >
                <input
                  style="background-color: #f7f7f7; width: "
                  type="text"
                  class="form-control"
                  placeholder="Name Lastname"
                  required
                />
              </div>
              <div class="col-11 mb-3">
                <label for="" class="form-label" style="color: #b3b3b3"
                  >Card Number:</label
                >
                <input
                  style="background-color: #f7f7f7"
                  type="text"
                  class="form-control"
                  maxlength="16"
                  placeholder="1111 1111 1111 1111"
                  required
                />
              </div>
              <div class="col-3 mb-3">
                <label for="" class="form-label" style="color: #b3b3b3"
                  >Expiry date:</label
                >
                <input
                  style="background-color: #f7f7f7"
                  type="text"
                  class="form-control"
                  maxlength="5"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div class="col-3 mb-3">
                <label for="" class="form-label" style="color: #b3b3b3"
                  >CVV:</label
                >
                <input
                  style="background-color: #f7f7f7"
                  type="text"
                  class="form-control"
                  maxlength="3"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>
          <div class="text-center">
            <button id="sbmit" class="btn2">ชำระเงิน</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
::placeholder {
  color: #b3b3b3;
}
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
  width: 100%;
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

  data() {
    return {
      id: "",
    };
  },
  mounted() {
    jquery("#first").delay(250).fadeIn();
  },
  created() {
    let x = JSON.parse(localStorage.getItem('accountmem'))
    if(x.package == 1){
      this.$router.push('/browse')
    }
    let chmail = localStorage.getItem("mail");
    axios.post(`http://project007.app.ruk-com.cloud/api//signup/${chmail}`).then((bn) => {
      this.id = bn.data;
    });
  },
  methods: {
    updt() {
      this.id.package = 1
      console.log(this.id);
      let api = `http://project007.app.ruk-com.cloud/api/pacage/${this.id._id}`;
      axios.put(api, this.id).then((flert) => {
        if (flert.data != null) {
          this.$swal.fire("ชำระเงินเสร็จสิ้น !", "ขอให้สนุกกับบริการของเรา", "success").then(() => {
            localStorage.setItem('accountmem',JSON.stringify(flert.data))
              this.$router.push("/browse");
            });
        }
      });
    },
  },
};
</script>