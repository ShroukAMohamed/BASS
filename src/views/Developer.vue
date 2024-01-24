<template>
  <div class="Developer">
    <div class="topbar">
      <div class="d-flex align-items-center">
        <div @click="activeMenu" class="toggle">
          <i class="fa-solid fa-bars"></i>
        </div>
        <img class="d-none d-sm-block" src="../assets/Logo-Png.png" alt="" />
        <span class="d-none d-sm-block">Bassel Allam</span>
      </div>

      <div class="Icon me-3">
        <i class="fa-regular fa-bell"></i>
      </div>
    </div>
    <div class="navigation">
      <ul class="ps-2 d-flex flex-column justify-content-between">
        <li
          class="hovered activePulse"
          @click="Show_Sections('.activePulse', '.PulseSection')"
        >
          <a>
            <span class="icon">
              <i class="fa-solid fa-sliders"></i>
            </span>
            <span class="title">Pulse</span>
          </a>
        </li>

        <li
          class="activeJobs"
          @click="Show_Sections('.activeJobs', '.JobsSection')"
        >
          <a>
            <span class="icon"><i class="fa-solid fa-briefcase"></i></span>
            <span class="title">Jobs</span>
          </a>
        </li>

        <li
          class="activeInterviews"
          @click="Show_Sections('.activeInterviews', '.InterviewsSection')"
        >
          <a>
            <span class="icon"><i class="fa-solid fa-calendar"></i></span>
            <span class="title">Interviews</span>
          </a>
        </li>

        <li
          class="activeProfile"
          @click="Show_Sections('.activeProfile', '.ProfileSection')"
        >
          <a>
            <span class="icon"><i class="fa-regular fa-file-lines"></i></span>
            <span class="title">Profile</span>
          </a>
        </li>
        <div class="space"></div>
        <li class="ms-2 Person">
          <a class="d-flex align-items-center">
            <img src="../assets//UserPhoto.jpg" alt="" />
            <span class="ms-3">Bassel</span>
          </a>
        </li>
        <li
          class="activeSettings"
          @click="Show_Sections('.activeSettings', '.SettingsSection')"
        >
          <a>
            <span class="icon"><i class="fa-solid fa-gear"></i></span>
            <span class="title">Settings</span>
          </a>
        </li>
        <li
          class="activeHelp"
          @click="Show_Sections('.activeHelp', '.HelpSection')"
        >
          <a>
            <span class="icon"
              ><i class="fa-solid fa-circle-question"></i
            ></span>
            <span class="title">Help</span>
          </a>
        </li>
        <router-link to="/">
          <li>
            <a>
              <span class="icon"
                ><i class="fa-solid fa-right-from-bracket"></i
              ></span>
              <span class="title">Logout</span>
            </a>
          </li>
        </router-link>
      </ul>
    </div>

    <div class="main">
      <div class="container">
        <div class="PulseSection">
          <PulseSection />
        </div>

        <div class="JobsSection">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-md-6 col-12">
              <AvJobs
                class="AvJobs Enrolled"
                :name="Job_title"
                :requirements="required"
                :details="Job_details"
              />
            </div>
            <div class="col-xl-5 col-md-6 col-12 pt-5 pt-md-0">
              <AvJobs
                class="AvJobs"
                :name="Job_title"
                :requirements="required"
                :details="Job_details"
              />
            </div>
            <div class="col-xl-5 col-md-6 col-12 pt-5">
              <AvJobs
                class="AvJobs"
                :name="Job_title"
                :requirements="required"
                :details="Job_details"
              />
            </div>
            <div class="col-xl-5 col-md-6 col-12 pt-5">
              <AvJobs
                class="AvJobs"
                :name="Job_title"
                :requirements="required"
                :details="Job_details"
              />
            </div>
            <div class="col-xl-5 col-md-6 col-12 pt-5">
              <AvJobs
                class="AvJobs"
                :name="Job_title"
                :requirements="required"
                :details="Job_details"
              />
            </div>
            <div class="col-xl-5 col-md-6 col-12 pt-5">
              <AvJobs
                class="AvJobs Enrolled"
                :name="Job_title"
                :requirements="required"
                :details="Job_details"
              />
            </div>
          </div>
        </div>
        <div class="InterviewsSection">
          <InterviewsSection />
        </div>
        <div class="ProfileSection">
          <ProfileSection />
        </div>
        <div class="SettingsSection">
          <SettingsSection />
        </div>
        <div class="HelpSection">
          <HelpSection />
        </div>
      </div>
    </div>
    <jobsPopup />
  </div>
</template>

<script>
import $ from "jquery";
import PulseSection from "@/components/Developer/PulseSection.vue";
import ProfileSection from "@/components/Developer/ProfileSection.vue";
import show_sections from "../../mixin/show_sections.vue";
import HelpSection from "@/components/Developer/HelpSection.vue";
import AvJobs from "../components/HomeView/AvailableJobs/AvJobs.vue";
import jobsPopup from "../components/HomeView/AvailableJobs/jobsPopup.vue";
import InterviewsSection from "@/components/Developer/InterviewsSection.vue";
import SettingsSection from "@/components/Developer/SettingsSection.vue";
export default {
  name: "DevDashboard",
  data() {
    return {
      Job_title: "Job Title",
      required: "3 years experience -salary: 5000 egp",
      Job_details:
        "Mauris imperdiet orci dapibus, commodo libero nec, interdum tortor. Morbi in nibh faucibus, iaculis lorem vitae, cursus velit.",
    };
  },
  components: {
    PulseSection,
    ProfileSection,
    HelpSection,
    AvJobs,
    jobsPopup,
    InterviewsSection,
    SettingsSection,
  },
  mixins: [show_sections],
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
.Developer {
  font-family: "Ubuntu", sans-serif;
  width: 100%;

  .navigation.active {
    width: 80px;
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
      margin-top: 70px;
      left: 3%;
      width: 100%;
      max-width: 285px;
      @include breakpoints(mobile) {
        max-width: 350px;
      }
      a {
        text-decoration: none;
      }
      .space {
        padding-bottom: 250px;
        @include breakpoints(mobile) {
          padding-bottom: 10px;
        }
      }
      li.hovered:not(.Person) {
        a {
          color: #2342d0;
        }
      }
      li {
        position: relative;
        width: 100%;
        list-style: none;
        margin: 10px 0;
        &:not(.Person):hover,
        &:not(.Person).hovered {
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
          &:not(.Person a):hover {
            color: #2342d0;
          }
          .icon {
            position: relative;
            display: block;
            min-width: 60px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 22px;
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
      .Person {
        pointer-events: none;
      }
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }
  }
  .main.active {
    width: calc(100% - 80px);
    left: 80px;

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
        width: 55px;
        height: 55px;
      }
      span {
        font-size: 20px;
        font-weight: 500;
      }
    }

    .Icon {
      position: relative;
      overflow: hidden;
      font-size: 22px;
      cursor: pointer;
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
    .container {
      max-width: 1400px;
      margin-top: 100px;
      .JobsSection {
        * {
          border: none;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
