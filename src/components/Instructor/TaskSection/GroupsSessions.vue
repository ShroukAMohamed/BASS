<template>
  <div class="SessionSlider ps-sm-4 pe-sm-4">
    <div
      :id="carouselNo"
      class="carousel slide w-100"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div class="carousel-inner Sessions">
        <div class="carousel-item active">
          <div class="d-flex flex-column align-items-center">
            <div class="mt-4">
              <a href="#SessionState" class="me-3 btn-group">Session 1</a>
              <a href="#SessionState" class="btn-group">Session 2</a>
            </div>
            <div class="mt-4">
              <a href="#SessionState" class="me-3 btn-group">Session 3</a>
              <a href="#SessionState" class="btn-group">Session 4</a>
            </div>
            <div class="mt-4">
              <a href="#SessionState" class="me-3 btn-group">Session 5</a>
              <a href="#SessionState" class="btn-group">Session 6</a>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex flex-column align-items-center">
            <div class="mt-4">
              <a href="#SessionState" class="me-3 btn-group">Session 7</a>
              <a href="#SessionState" class="btn-group">Session 8</a>
            </div>
            <div class="mt-4">
              <a href="#SessionState" class="me-3 btn-group">Session 9</a>
              <a href="#SessionState" class="btn-group">Session 10</a>
            </div>
            <div class="mt-4">
              <a href="#SessionState" class="me-3 btn-group">Session 11</a>
              <a href="#SessionState" class="btn-group">Session 12</a>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        :data-bs-target="carouselNoBtn"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        :data-bs-target="carouselNoBtn"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupsSessions",
  props: ["carouselNo", "carouselNoBtn"],
};
</script>

<style lang="scss" scoped>
div {
  .btn-group {
    text-decoration: none;
    color: #7f8eff;
    border: 1px solid #7293ff;
    padding: 6px 10px;
    transition: 0.3s;
    &:hover {
      background-color: #7293ff;
      color: white;
    }
  }
  .Hidden {
    display: none;
  }

  .carousel-control-prev,
  .carousel-control-next {
    opacity: 1 !important;
  }
  .carousel-control-next-icon {
    background-image: url("../../../assets/9055181_bxs_chevron_right_circle_icon.png");
  }
  .carousel-control-prev-icon {
    background-image: url("../../../assets/9055097_bxs_chevron_left_circle_icon.png");
  }
}
</style>
