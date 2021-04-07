<template>
  <div class="wrapper">
    <!-- Sidebar Holder -->
    <nav id="sidebar">
      <div class="sidebar-header text-center">
        <img style="height:50px" src="../../img/admin.png" alt="">
      </div>

      <ul class="list-unstyled components">
       
        <li class="active">
          
        </li>
        <li>
          <a href="#">เพิ่มหนัง</a>
          
        </li>
        <li>
          <a href="#">ลบหนัง</a>
        </li>
        <li>
          <a href="#">แก้ไขหนัง</a>
        </li>
      </ul>

      <ul class="list-unstyled components">
       
        <li class="active">
          
        </li>
        <li>
          <a href="#">เพิ่มสมาชิก</a>
          
        </li>
        <li>
          <a href="#">ลบสมาชิก</a>
        </li>
        <li>
          <a href="#">แก้ไขสมาชิก</a>
        </li>
      </ul>

      <ul class="list-unstyled CTAs">
        <li>
          <router-link to="/logout"
            >ออกจากระบบ</router-link
          >
        </li>
        
      </ul>
    </nav>

    <!-- Page Content Holder -->
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button type="button" id="sidebarCollapse" class="navbar-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button
            class="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-align-justify"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Page</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Page</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Page</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Page</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2>Collapsible Sidebar Using Bootstrap 4</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div class="line"></div>

      <h2>Lorem Ipsum Dolor</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div class="line"></div>

      <h2>Lorem Ipsum Dolor</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div class="line"></div>

      <h3>Lorem Ipsum Dolor</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>
<style scoped>
p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
  perspective: 1500px;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #333;
  color: #fff;
  transition: all 0.6s cubic-bezier(0.945, 0.02, 0.27, 0.665);
  transform-origin: bottom left;
}

#sidebar.active {
  margin-left: -250px;
  transform: rotateY(100deg);
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #ff4f00;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #ff4f00;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}
#sidebar ul li a:hover {
  color: rgb(65, 65, 65);
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #333;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #333;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #ff4f00;
  color: white;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #333 !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}

#sidebarCollapse {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  cursor: pointer;
}

#sidebarCollapse span {
  width: 80%;
  height: 2px;
  margin: 0 auto;
  display: block;
  background: #555;
  transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);
  transition-delay: 0.2s;
}

#sidebarCollapse span:first-of-type {
  transform: rotate(45deg) translate(2px, 2px);
}
#sidebarCollapse span:nth-of-type(2) {
  opacity: 0;
}
#sidebarCollapse span:last-of-type {
  transform: rotate(-45deg) translate(1px, -1px);
}

#sidebarCollapse.active span {
  transform: none;
  opacity: 1;
  margin: 5px auto;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */
@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
    transform: rotateY(90deg);
  }
  #sidebar.active {
    margin-left: 0;
    transform: none;
  }
  #sidebarCollapse span:first-of-type,
  #sidebarCollapse span:nth-of-type(2),
  #sidebarCollapse span:last-of-type {
    transform: none;
    opacity: 1;
    margin: 5px auto;
  }
  #sidebarCollapse.active span {
    margin: 0 auto;
  }
  #sidebarCollapse.active span:first-of-type {
    transform: rotate(45deg) translate(2px, 2px);
  }
  #sidebarCollapse.active span:nth-of-type(2) {
    opacity: 0;
  }
  #sidebarCollapse.active span:last-of-type {
    transform: rotate(-45deg) translate(1px, -1px);
  }
}
</style>

<script>
import jquery from "jquery";
export default {
  created() {
    let x = JSON.parse(localStorage.getItem("accountmem"));
    console.log(x);
    if (x.isAdmin != true) {
      this.$router.push("/login");
    }
  },
  mounted() {
    jquery(document).ready(function () {
      jquery("#sidebarCollapse").on("click", function () {
        jquery("#sidebar").toggleClass("active");
        jquery(this).toggleClass("active");
      });
    });
  },
};
</script>