<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 d-flex justify-content-center">
        <div class="CourseCard cardStyle">
          <CourseCard />
          <button
            data-bs-target="#GroupModal"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            class="ms-5"
          >
            See Details
          </button>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 d-flex justify-content-center gy-5 gy-md-0">
        <div class="CourseCard cardStyle">
          <CourseCard />
          <button
            data-bs-target="#GroupModal"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            class="ms-5"
          >
            See Details
          </button>
        </div>
      </div>
      <div class="col-lg-4 d-flex justify-content-center gy-5 gy-lg-0">
        <div class="CourseCard cardStyle">
          <CourseCard />
          <button
            data-bs-target="#GroupModal"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            class="ms-5"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "./CoursesSection/Course_Card.vue";
export default {
  name: "CoursesSection",
  components: { CourseCard },
};
</script>

<style lang="scss" scoped>
@import "../../components/global/scss/main.scss";
.container {
  .cardStyle {
    border-top: 4px solid #7293ff;
  }
  .CourseCard {
    background-color: white;
    box-shadow: 0px 3px 15px #00000029;
    padding: 50px 0;
    border-radius: 15px;
    width: 100%;
    max-width: 350px;
    @include breakpoints(small) {
      max-width: 450px;
    }
    button {
      width: 100%;
      max-width: 150px;
      margin-top: 15px;
      padding: 8px 0;
      font-weight: 500;
      border-radius: 20px;
      border: 0;
      background-color: #7293ff;
      color: white;
      transition: 0.3s;
      &:hover {
        transform: translateY(-3px);
      }
    }
  }
}
</style>
