<template>
  <div class="Interviews">
    <div class="row">
      <div class="col-md-12">
        <h2 class="ms-2 pb-4">
          <span class="pe-2"><i class="fa-regular fa-calendar-check"></i></span>
          Interviews
        </h2>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div
          data-bs-target="#InterviewPopup"
          data-bs-toggle="modal"
          data-bs-dismiss="modal"
          class="small-card d-flex flex-column align-items-center justify-content-center"
        >
          <span>Front-end</span>
          <span>Monday</span>
          <span class="pt-1 pb-1">20/8/2023</span>
          <span class="text-success"
            ><i class="fa-solid fa-circle-check me-1"></i> Done</span
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div
          data-bs-target="#InterviewPopup"
          data-bs-toggle="modal"
          data-bs-dismiss="modal"
          class="small-card d-flex flex-column align-items-center justify-content-center"
        >
          <span>Back-end</span>
          <span>wednesday</span>
          <span class="pt-1 pb-2">20/8/2023</span>
          <span class="text-danger"
            ><i class="fa-solid fa-circle-xmark me-1"></i> Canceled</span
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div
          data-bs-target="#InterviewPopup"
          data-bs-toggle="modal"
          data-bs-dismiss="modal"
          class="small-card d-flex flex-column align-items-center justify-content-center"
        >
          <span>Flutter</span>
          <span>Thursday</span>
          <span class="pt-1 pb-2">20/8/2023</span>
          <span class="text-primary"
            ><i class="fa-solid fa-circle-pause me-1"></i> On hold</span
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div
          data-bs-target="#InterviewPopup"
          data-bs-toggle="modal"
          data-bs-dismiss="modal"
          class="small-card d-flex flex-column align-items-center justify-content-center"
        >
          <span>Flutter</span>
          <span>Thursday</span>
          <span class="pt-1 pb-2">20/8/2023</span>
          <span>On hold</span>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div
          data-bs-target="#InterviewPopup"
          data-bs-toggle="modal"
          data-bs-dismiss="modal"
          class="small-card d-flex flex-column align-items-center justify-content-center"
        >
          <span>Flutter</span>
          <span>Thursday</span>
          <span class="pt-1 pb-2">20/8/2023</span>
          <span>On hold</span>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div
          data-bs-target="#InterviewPopup"
          data-bs-toggle="modal"
          data-bs-dismiss="modal"
          class="small-card d-flex flex-column align-items-center justify-content-center"
        >
          <span>Flutter</span>
          <span>Thursday</span>
          <span class="pt-1 pb-2">20/8/2023</span>
          <span>On hold</span>
        </div>
      </div>
    </div>
    <InterviewPopup />
  </div>
</template>

<script>
import InterviewPopup from "./Interviews/InterviewPopup.vue";
export default {
  components: { InterviewPopup },
  name: "InterviewsSection",
};
</script>

<style lang="scss" scoped>
@import "../global/scss/main.scss";
.Interviews {
  .small-card {
    box-shadow: 0px 3px 6px #2923417a;
    background-color: white;
    margin: auto;
    margin-bottom: 35px;
    padding: 30px 0;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transform: translateY(-6px);
    }
    > span:first-child {
      color: black;
      font-size: 28px;
      padding-bottom: 10px;
    }
    > span:not(span:first-child) {
      font-size: 17px;
      color: rgb(85, 85, 85);
    }
  }
}
</style>
