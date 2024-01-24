<template>
  <div class="Profile">
    <div class="mainProfile">
      <MainProfile />
    </div>
    <div class="editProfile">
      <div class="d-flex align-items-center">
        <h1>Edit Profile</h1>
        <div class="ms-4 d-flex align-items-center">
          <span><i class="fa-solid fa-eye pe-1"></i></span>
          <p class="ms-1 mb-0 d-inline-block">View Profile</p>
        </div>
      </div>
      <div class="mt-5 dynamicTabs">
        <div class="row justify-content-center text-center text-sm-start">
          <div class="col-lg-2 col-md-3 col-4">
            <span
              class="hovered activeInfo Clicked"
              @click="Show_Sections('.activeInfo', '.BasicInfo')"
              >Basic Info</span
            >
          </div>
          <div class="col-lg-2 col-md-3 col-4 p-0">
            <span
              class="activeBg Clicked"
              @click="Show_Sections('.activeBg', '.Background')"
              >Background</span
            >
          </div>

          <div class="col-lg-2 col-md-3 col-4">
            <span
              class="activeExp Clicked"
              @click="Show_Sections('.activeExp', '.Experience')"
              >Experiance</span
            >
          </div>

          <div class="col-lg-2 col-md-3 col-4 gy-4 gy-md-0">
            <span
              class="activeSkills Clicked"
              @click="Show_Sections('.activeSkills', '.Skills')"
              >Skills</span
            >
          </div>
          <div class="col-lg-2 col-md-3 col-4 gy-4 gy-lg-0">
            <span class="Clicked">Projects</span>
          </div>
          <div class="col-lg-2 col-md-3 col-4 gy-4 gy-lg-0">
            <span class="Clicked">Video Intro</span>
          </div>
        </div>
      </div>
      <div>
        <div class="BasicInfo">
          <BasicInfo />
        </div>
        <div class="Background">
          <Background />
        </div>
        <div class="Experience">
          <Experience />
        </div>
        <div class="Skills">
          <Skills />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainProfile from "./Profile/MainProfile.vue";
import show_sections from "../../../mixin/show_sections.vue";
import Background from "./Profile/Background.vue";
import BasicInfo from "./Profile/BasicInfo.vue";
import Experience from "./Profile/Experience.vue";
import Skills from "./Profile/Skills.vue";
export default {
  name: "ProfileSection",
  components: { BasicInfo, Background, Experience, Skills, MainProfile },
  mixins: [show_sections],
};
</script>

<style lang="scss" scoped>
@import "../global/scss/main.scss";
.Profile {
  overflow: hidden;
  > div:nth-child(2) {
    > div:first-of-type {
      h1 {
        font-weight: normal;
      }
      > div {
        color: #233fd0;
        cursor: pointer;
        p {
          font-size: 13.5px;
        }
        span {
          font-size: 20px;
        }
      }
    }
    > div:nth-child(2) {
      span {
        color: #57184e;
        font-weight: 500;
        cursor: pointer;
        @include breakpoints(mobile) {
          font-size: 14px;
          font-weight: normal;
        }
      }
      span.hovered {
        background-color: #23003a;
        color: white;
        padding: 10px 13px;
        border-radius: 20px;
        @include breakpoints(mobile) {
          padding: 10px 5px;
        }
      }
    }
  }
}
</style>
