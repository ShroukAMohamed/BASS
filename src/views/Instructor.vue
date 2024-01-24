<template>
  <div class="Instructor">
    <GroupPopup />
    <div class="topbar">
      <div>
        <div @click="activeMenu" class="toggle">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
      <div class="Text">
        <h4 class="mb-0 d-none d-sm-block ms-5">Welcome Back Jerry</h4>
      </div>
      <div class="user d-flex align-items-center me-3">
        <img class="me-3" src="../assets/cheif1.jpg" alt="" />
        <div class="d-flex flex-column">
          <span class="fw-bold">Jerry Garret</span>
          <span>Instructor</span>
        </div>
      </div>
    </div>
    <div class="navigation">
      <ul class="ps-2">
        <li class="logo">
          <router-link to="/">
            <span class="icon"
              ><img src="../assets/Logo-Png.png" alt=""
            /></span>
            <span class="title fw-bold mt-1">Bassel Allam</span>
          </router-link>
        </li>

        <li
          class="hovered activeHome"
          @click="Show_Sections('.activeHome', '.HomeSection')"
        >
          <a href="#">
            <span class="icon">
              <i class="fa-solid fa-house"></i>
            </span>
            <span class="title">Home</span>
          </a>
        </li>

        <li
          class="activeTask"
          @click="Show_Sections('.activeTask', '.TaskSection')"
        >
          <a href="#">
            <span class="icon"><i class="fa-solid fa-user-check"></i></span>
            <span class="title">Student Task</span>
          </a>
        </li>

        <li
          class="activePayment"
          @click="Show_Sections('.activePayment', '.PaymentSection')"
        >
          <a href="#">
            <span class="icon"
              ><i class="fa-solid fa-money-check-dollar"></i
            ></span>
            <span class="title">Payment</span>
          </a>
        </li>

        <li
          class="activeCourses"
          @click="Show_Sections('.activeCourses', '.CoursesSection')"
        >
          <a href="#">
            <span class="icon"
              ><i class="fa-solid fa-chalkboard-user"></i
            ></span>
            <span class="title">Courses</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="main d-flex flex-column justify-content-center">
      <div class="HomeSection">
        <HomeSection />
      </div>
      <div class="TaskSection">
        <TaskSection />
      </div>
      <div class="PaymentSection">
        <PaymentSection />
      </div>
      <div class="CoursesSection">
        <CourseSection />
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import CourseSection from "@/components/Instructor/CoursesSection.vue";
import TaskSection from "@/components/Instructor/TaskSection.vue";
import GroupPopup from "@/components/Instructor/CoursesSection/GroupPopup.vue";
import HomeSection from "@/components/Instructor/HomeSection.vue";
import PaymentSection from "@/components/Instructor/PaymentSection.vue";
import show_sections from "../../mixin/show_sections.vue";
export default {
  name: "IstructorDashboard",

  components: {
    GroupPopup,
    HomeSection,
    TaskSection,
    PaymentSection,
    CourseSection,
  },
  mixins: [show_sections],
  mounted() {},
  methods: {
    activeMenu() {
      $(".navigation").toggleClass("active");
      $(".main").toggleClass("active");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../components/global/scss/main.scss";
.Instructor {
  font-family: "Ubuntu", sans-serif;
  width: 100%;

  .navigation.active {
    width: 75px;
    @include breakpoints(medium) {
      width: 250px;
      left: 0;
    }
    @include breakpoints(smaller) {
      width: 100%;
      left: 0;
    }
  }
  .navigation {
    position: fixed;
    width: 310px;
    height: 100%;
    background-color: rgb(252, 251, 251);
    transition: 0.5s;
    overflow: hidden;
    @include breakpoints(medium) {
      left: -250px;
      width: 250px;
    }
    @include breakpoints(smaller) {
      width: 100%;
      left: -100%;
      z-index: 200;
      transition: 0.3s;
    }
    ul {
      position: absolute;
      margin-top: 60px;
      width: 100%;
      max-width: 285px;
      @include breakpoints(mobile) {
        max-width: 350px;
      }
      a {
        text-decoration: none;
      }
      > li:first-child {
        .title {
          font-size: 16px;
        }
      }

      li.hovered:not(.logo) {
        a {
          color: #2342d0;
        }
      }
      li {
        position: relative;
        width: 100%;
        list-style: none;
        margin: 20px 0;
        &:not(.logo):hover,
        &:not(.logo).hovered {
          background-color: #e9ecfa;
          border-radius: 8px;
        }
        a {
          position: relative;
          display: block;
          width: 100%;
          display: flex;
          text-decoration: none;
          color: #606161;
          cursor: pointer;
          &:not(.logo a):hover {
            color: #2342d0;
          }
          .icon {
            position: relative;
            display: block;
            min-width: 60px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 20px;
            padding-left: 8px;
          }
          .title {
            position: relative;
            display: block;
            padding-left: 9px;
            font-size: 15px;
            height: 50px;
            line-height: 50px;
            text-align: start;
            white-space: nowrap;
          }
        }
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }
  .main.active {
    width: calc(100% - 80px);
    left: 75px;

    @include breakpoints(medium) {
      left: 250px;
    }
    @include breakpoints(smaller) {
      left: 0;
      width: 100%;

      .toggle {
        color: black !important;
        position: fixed !important;
        left: initial !important;
        right: 0 !important;
      }
    }
  }
  .topbar {
    position: fixed;
    z-index: 500;
    background-color: white;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.155);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    div {
      .toggle {
        position: relative;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        cursor: pointer;
        color: black !important;
        @include breakpoints(smaller) {
          z-index: 201;
        }
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      span {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .main {
    position: absolute;
    min-height: 100vh;
    width: calc(100% - 310px);
    left: 310px;
    background-color: #ecf0fa;
    transition: 0.5s;
    @include breakpoints(medium) {
      width: 100%;
      left: 0;
    }
    .PaymentSection,
    .CoursesSection {
      @include breakpoints(small) {
        margin-top: 80px;
      }
    }

    .container {
      max-width: 1400px;
    }
  }
}
</style>
