<template>
  <div>
    <div
      class="position-fixed p-3 text-white bg-dark"
      style="width: 280px; height: 100vh; top: 0"
    >
      <a
        href="/admin/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span class="fs-4"
          ><img style="width: 100%" src="../../img/admin.png" alt=""
        /></span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="/admin" class="nav-link text-white">
            <svg
              style="padding-right: 5px"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-speedometer2"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"
              />
              <path
                fill-rule="evenodd"
                d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
              />
            </svg>
            แดชบอร์ด
          </a>
        </li>
        <li>
          <a href="/admin/user" class="nav-link text-white">
            <svg
              style="padding-right: 5px"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
              />
            </svg>
            ผู้ใช้
          </a>
        </li>
        <li>
          <a href="/admin/view" class="nav-link text-white">
            <svg
              style="padding-right: 5px"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-view-stacked"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3z"
              />
            </svg>
            ยอดคนดู
          </a>
        </li>
        <li>
          <a href="/admin/video" class="nav-link active">
            <svg
              style="padding-right: 5px"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-camera-reels"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
              />
              <path
                d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"
              />
              <path
                d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
              />
            </svg>
            วิดีโอ
          </a>
        </li>
      </ul>
      <hr />
      <div>
        <a href="/logout" class="nav-link text-white">
          <svg
            style="padding-right: 5px"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-box-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
            />
            <path
              fill-rule="evenodd"
              d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
            />
          </svg>
          ออกจากระบบ
        </a>
      </div>
    </div>
    <div class="container mt-3" style="padding-left: 280px">
      <div class="row">
        <div class="col-12">
          <p style="font-size: 22px; padding-left: 1rem">วิดีโอทั้งหมด</p>
          <hr />
          <div class="row">
            <div class="col-6" style="padding-left: 30px">
              ค้นหาข้อมูลด้วยชื่อหนัง
              <input
                type="text"
                class="form-control"
                placeholder="ค้นหา"
                v-model="search"
              />
            </div>
            <div class="col-6" style="padding-left: 30px">
              เลือกประเภทของหนัง
              <select class="form-select" v-model="cate">
                <option>รายการทีวี</option>
                <option>คอมเมดี้</option>
                <option>แอ็คชั่น</option>
                <option>ผจญภัย</option>
                <option>สยองขวัญ</option>
              </select>
            </div>

            <div class="col-12 mt-3" style="height: 500px; overflow-y: scroll">
              <table class="table table-hover table-dark">
                <thead>
                  <tr align="center">
                    <th>ปกวิดีโอ</th>
                    <th>ชื่อวิดีโอ</th>
                    <th>คะแนน</th>
                    <th>ประเภท</th>
                    <th>แก้ไข/ลบ</th>
                  </tr>
                </thead>
                <tbody align="center">
                  <tr v-for="bases in searchbar" :key="bases._id">
                    <td>{{ bases.thumbnail }}</td>
                    <td>{{ bases.vname }}</td>
                    <td>
                      <div id="app" v-html="bases.score"></div>
                    </td>
                    <td>{{ bases.category }}</td>
                    <td width="130px">
                      <button
                        @click="editt(bases._id)"
                        class="btn btn-warning"
                        style="margin-right: 5px"
                      >
                        แก้ไข
                      </button>
                      <button
                        type="button"
                        @click.prevent="delvid(bases._id)"
                        class="btn btn-danger"
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <form id="add" @submit.prevent="AddVideo" enctype="multipart/form-data">
        <div class="row">
          <div class="col-12 mt-3">
            <p style="font-size: 22px; padding-left: 1rem">เพิ่มวีดีโอ</p>
            <hr />
          </div>
          <div class="col-6 mb-3">
            <label for="file" class="form-label">รูปปกวีดีโอ</label>
            <input type="file" id="file" ref="file" class="form-control" />
          </div>
          <div class="col-6 mb-3">
            <label for="video_name" class="form-label">ชื่อวิดีโอ</label>
            <input type="text" class="form-control" v-model="video.vname" />
            {{ video.vname }}
          </div>
          <div class="col-12 mb-3">
            <label for="des" class="form-label">รายละเอียด </label>
            <textarea
              name="des"
              id="des"
              cols="30"
              rows="10"
              class="form-control"
              v-model="video.des"
            ></textarea>
          </div>
          <div class="col-12 mb-3">
            <label for="" class="form-label">IMDB</label>
            <input type="text" v-model="video.score" class="form-control" />
          </div>
          <div class="col-4 mb-3">
            <label for="category" class="form-label">ประเภท</label>
            <select
              name="category"
              id="category"
              class="form-select"
              v-model="video.category"
            >
              <option>รายการทีวี</option>
              <option>คอมเมดี้</option>
              <option>แอ็คชั่น</option>
              <option>ผจญภัย</option>
              <option>สยองขวัญ</option>
            </select>
          </div>
          <div class="col-6 mb-3">
            <label for="videolink" class="form-label">ลิงค์วีดีโอ</label>
            <input type="text" class="form-control" v-model="video.videolink" />
          </div>
          <div class="col-2 mb-3">
            <label for="videolink" class="form-label">ปีที่ฉาย</label>
            <input
              type="text"
              class="form-control"
              maxlength="4"
              v-model="video.year"
            />
          </div>
          <div class="col-12 mb-5 d-flex justify-content-center">
            <div class="col-4">
              <button class="btn btn-success form-control">เพิ่มวีดีโอ</button>
            </div>
          </div>
        </div>
      </form>

      <form
        id="edit"
        style="display: none"
        @submit.prevent="EditVideo"
        enctype="multipart/form-data"
      >
        <div class="row">
          <div class="col-12 mt-3">
            <p style="font-size: 22px; padding-left: 1rem">แก้ไขวีดีโอ</p>
            <hr />
          </div>
          <div class="col-6 mb-3">
            <label for="file" class="form-label">รูปปกวีดีโอ</label>
            <input type="file" id="file" ref="file" class="form-control" />
          </div>
          <div class="col-6 mb-3">
            <label for="video_name" class="form-label">ชื่อวิดีโอ</label>
            <input type="text" class="form-control" v-model="video.vname" />
            {{ video.vname }}
          </div>
          <div class="col-12 mb-3">
            <label for="des" class="form-label">รายละเอียด </label>
            <textarea
              name="des"
              id="des"
              cols="30"
              rows="10"
              class="form-control"
              v-model="video.des"
            ></textarea>
          </div>
          <div class="col-12 mb-3">
            <label for="" class="form-label">IMDB</label>
            <input type="text" v-model="video.score" class="form-control" />
          </div>
          <div class="col-4 mb-3">
            <label for="category" class="form-label">ประเภท</label>
            <select
              name="category"
              id="category"
              class="form-select"
              v-model="video.category"
            >
              <option>รายการทีวี</option>
              <option>คอมเมดี้</option>
              <option>แอ็คชั่น</option>
              <option>ผจญภัย</option>
              <option>สยองขวัญ</option>
            </select>
          </div>
          <div class="col-6 mb-3">
            <label for="videolink" class="form-label">ลิงค์วีดีโอ</label>
            <input type="text" class="form-control" v-model="video.videolink" />
          </div>
          <div class="col-2 mb-3">
            <label for="videolink" class="form-label">ปีที่ฉาย</label>
            <input
              type="text"
              class="form-control"
              maxlength="4"
              v-model="video.year"
            />
          </div>
          <div class="col-12 mb-5 d-flex justify-content-center">
            <div class="col-4">
              <button class="btn btn-success form-control">แก้ไขวีดีโอ</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import axios from "axios";
import jquery from "jquery";
export default {
  
  data() {
    return {
      cate: "",
      base: [],
      search: '',
      video: {
        thumbnail: "",
        vname: "",
        score: "",
        des: "",
        category: "",
        videolink: "",
        year: "",
      },
      upload: "",
    };
  },
  created() {
    axios.get("http://localhost:4000/vidapi/").then((res) => {
      this.base = res.data;
    });
  },
  computed:{
    searchbar(){
      return this.base.filter((value)=>{
        if(this.search != ''){
          return value.vname.toLowerCase().includes(this.search.toLowerCase())
        }
        else if(this.cate != ''){
          return value.category.toLowerCase().includes(this.cate.toLowerCase())
        }
        else{
          return value;
        }
        
      })
    }
  },
  methods: {
    editt(id) {
      jquery("#add").fadeOut();
      jquery("#edit").fadeIn();
      this.call(id);
    },
    call(id) {
      axios.get(`http://localhost:4000/vidapi/${id}`).then((res) => {
        this.video = res.data;
      });
    },
    AddVideo() {
      this.video.thumbnail = this.$refs.file.files[0].name;
      this.upload = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append("file", this.upload);
      axios.post("http://localhost:4000/upload", formData).then(() => {
        axios
          .post("http://localhost:4000/vidapi/create-video", this.video)
          .then(() => {
            this.$swal.fire("เพิ่มวีดีโอสำเร็จ", "เย้ !", "successs");
            this.video = {
              thumbnail: "",
              name: "",
              score: "",
              des: "",
              category: "",
              videolink: "",
              year: "",
            };
          });
      });
    },
    EditVideo() {
      if (this.$refs.file.files[0] != undefined) {
        this.video.thumbnail = this.$refs.file.files[0].name;
        this.upload = this.$refs.file.files[0];
      }

      const formData = new FormData();
      formData.append("file", this.upload);
      axios.post("http://localhost:4000/upload", formData).then(() => {
        axios
          .put(
            `http://localhost:4000/vidapi/update/${this.video._id}`,
            this.video
          )
          .then(() => {
            this.$swal.fire("แก้ไขวีดีโอสำเร็จ", "เย้ !", "successs");
            this.video = {
              thumbnail: "",
              name: "",
              score: "",
              des: "",
              category: "",
              videolink: "",
              year: "",
            };
            location.reload();
          });
      });
    },
    delvid(id) {
      axios.delete(`http://localhost:4000/vidapi/del/${id}`).then(() => {
        location.reload();
      });
    },
  },
};
</script>