<template>
  <div class="Card">
    <div class="row">
      <div class="col-lg-8 col-md-7">
        <div class="d-flex flex-column flex-sm-row align-items-center">
          <img class="img-fluid" src="../../../assets/UserPhoto.jpg" alt="" />
          <div class="ms-lg-5 ms-sm-4 ms-0 mt-3 mt-sm-0">
            <h4 class="fw-normal text-center text-sm-start">Bassel Allam</h4>
            <div class="d-flex flex-column flex-xl-row">
              <span>Lead</span
              ><span class="ms-xl-4">Cairo, Egypt ( GMT +02:00 )</span
              ><span class="ms-xl-4">Member since Jun 14, 2023</span>
            </div>
            <p class="mt-3">Can Join Within a Week</p>
          </div>
        </div>
        <div class="mt-4 text-center text-sm-start">
          <p>About</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            ad eius alias consectetur itaque aperiam ipsum, voluptas placeat
            cupiditate neque iste ipsa assumenda illum officiis. Qui mollitia
            molestiae omnis dolore? Lorem ipsum dolor sit amet Lorem ipsum
            dolor.
          </p>
        </div>
        <div class="text-center text-sm-start">
          <div class="pb-4 mt-4">
            <span class="me-3"><i class="fa-solid fa-briefcase"></i></span
            ><span>Experience</span>
          </div>
          <div>
            <div
              class="mt-1 d-flex flex-column flex-lg-row align-items-lg-center ms-sm-3 pb-4 pb-lg-0 align-items-center align-items-sm-start"
            >
              <div>
                <p class="mb-1">Technical Manager</p>
                <p>Mentor Seven</p>
              </div>
              <div class="ms-lg-5 ms-0">
                <span>Sep'22- present</span>
              </div>
            </div>
            <p class="mb-0 ms-sm-3">
              As a technical manager i'm responsible for
            </p>
            <ul class="text-start">
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus, non!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus, non! Lorem, ipsum dolor.
              </li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing</li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus, non! Lorem, ipsum.
              </li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            </ul>
            <p class="ms-sm-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              recusandae asperiores consectetur.
            </p>
          </div>
          <div
            class="d-flex flex-column flex-lg-row align-items-lg-center ms-sm-3 mt-5 align-items-center align-items-sm-start"
          >
            <div>
              <p class="mb-1">Founder & CEO</p>
              <p>Bassel Allam for Software Solution</p>
            </div>
            <div class="ms-lg-5 ms-0"><span>May'22-present</span></div>
          </div>
        </div>
        <div class="ms-4 mt-5 pb-4">
          <div><p>Framework</p></div>
          <div><p>Language</p></div>
          <div><p>API</p></div>
          <div><p>Database</p></div>
          <div><p>Technology</p></div>
          <div><p>General</p></div>
        </div>
      </div>
      <div class="col-lg-4 col-md-5">
        <div class="d-flex justify-content-between align-items-center">
          <div class="col-5">
            <div @click="Show_EditProfile">
              <span><i class="fa-solid fa-pen"></i></span>
              <span class="ms-3">Edit Profile</span>
            </div>
          </div>
          <div class="col-6">
            <div>
              <span><i class="fa-solid fa-copy"></i></span>
              <span class="ms-3">Copy Profile Link</span>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <p>Top Skills</p>
          <div class="d-flex justify-content-between">
            <span>REST APIs</span>
            <span>5 year(s)</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Google Maps API</span>
            <span>5 year(s)</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>JSON</span>
            <span>5 year(s)</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Firebase</span>
            <span>5 year(s)</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Flutter</span>
            <span>5 year(s)</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Python</span>
            <span>4 year(s)</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Git</span>
            <span>4 year(s)</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Linux</span>
            <span>4 year(s)</span>
          </div>
        </div>
        <div class="mt-3">
          <div class="d-flex align-items-center">
            <span><i class="fa-regular fa-calendar"></i></span>
            <div class="ms-5">
              <p class="mb-0">Experience :</p>
              <span>5 Years</span>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span><i class="fa-regular fa-hourglass"></i></span>
            <div class="ms-5">
              <p class="mb-0">Date of Birth :</p>
              <span>1995-07-16</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <span>LinkedIn</span>
          <span><i class="fa-brands fa-linkedin"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Show_EditProfile from "../../../../mixin/show_sections.vue";
export default {
  name: "MainProfile",
  mixins: [Show_EditProfile],
};
</script>

<style lang="scss" scoped>
@import "../../global/scss/main.scss";
%Style {
  background-color: #eef3fc;
  color: #244cd8;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 13px;
}
%Style2 {
  background-color: #eef3fc;
  padding: 14px 28px;
  border-radius: 8px;
}
.Card {
  background-color: white;
  border-radius: 10px;
  padding: 20px 30px;
  @include breakpoints(mobile) {
    padding: 20px 15px;
  }
  .row {
    > div:first-child {
      > div:first-child {
        > img {
          width: 160px;
          height: 160px;
          border-radius: 8px;
        }
        > div {
          h4 {
            color: #23003a;
          }
          span {
            color: rgb(91, 91, 91);
            font-size: 15px;
          }
          p {
            background-color: #23003a;
            color: white;
            padding: 6px 0px;
            border-radius: 25px;
            width: 100%;
            max-width: 180px;
            text-align: center;
            font-size: 13px;
          }
        }
      }
      > div:nth-child(2) {
        p:first-child {
          font-weight: 500;
          letter-spacing: 0.5px;
          font-size: 22px;
        }
        p:nth-child(2) {
          color: rgb(110, 110, 110);
          font-size: 15px;
          line-height: 1.7;
          @include breakpoints(smaller) {
            width: 100%;
            max-width: 280px;
            margin: auto;
          }
        }
      }
      > div:nth-child(3) {
        > div:first-child {
          span:first-child {
            color: #233fd0;
            font-size: 22px;
          }
          span:nth-child(2) {
            font-size: 20px;
            font-weight: 500;
          }
        }
        > div:nth-child(2) {
          div:first-child {
            > div:first-child {
              p:first-child {
                font-size: 19px;
                font-weight: 600;
              }
              p:nth-child(2) {
                color: #244cd8;
              }
            }
            > div:nth-child(2) {
              @extend %Style;
              width: 100%;
              max-width: 140px;
            }
          }
          > p {
            font-size: 14.5px;
          }
          > ul {
            font-size: 14.5px;
          }
        }
        > div:nth-child(3) {
          p:first-child {
            font-size: 19px;
            font-weight: 600;
          }
          p:nth-child(2) {
            color: #244cd8;
          }
          > div:nth-child(2) {
            @extend %Style;
            width: 100%;
            max-width: 140px;
          }
        }
      }
      > div:nth-child(4) {
        div {
          p {
            font-size: 19px;
            font-weight: 500;
          }
        }
      }
    }
    > div:nth-child(2) {
      > div:first-child {
        div:first-child,
        div:nth-child(2) {
          text-align: center;
          color: #244cd8;
          @extend %Style2;
          padding: 4px 0px !important;
          font-size: 14px;
          cursor: pointer;
          > span:first-child {
            font-size: 16px;
          }
          > span:nth-child(2) {
            font-size: 13px;
          }
        }
        > div:first-child {
        }
        div:nth-child(2) {
        }
      }
      > div:nth-child(2) {
        @extend %Style2;
        > p {
          color: black !important;
          font-weight: 600;
          font-size: 14.5px;
        }
        div:last-child {
          padding-bottom: 20px;
        }
        div {
          margin-top: 18px;
          font-size: 15px;
          > span:first-child {
            color: #244cd8;
          }
          > span:nth-child(2) {
            color: rgb(84, 84, 84);
          }
        }
      }
      > div:nth-child(3) {
        @extend %Style2;
        > div {
          padding-bottom: 14px;
          > span {
            color: #244cd8;
            font-size: 20px;
          }
          > div {
            font-size: 14px;
            > p {
              font-weight: 600;
            }
          }
        }
      }
      > div:nth-child(4) {
        @extend %Style2;
        > span:first-child {
          font-size: 14px;
          font-weight: bold;
        }
        > span:nth-child(2) {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
