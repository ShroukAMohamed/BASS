<template>
  <div class="Recommend">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h3 class="mb-0">Task 1</h3>
      <div class="star-icon">
        <p class="text-black me-2 mb-0 text-center fw-semibold d-inline-block">
          Rate:
        </p>
        <span> <i class="fa-solid fa-star"></i></span>
        <span> <i class="fa-solid fa-star"></i></span>
        <span> <i class="fa-solid fa-star"></i></span>
        <span> <i class="fa-solid fa-star"></i></span>
      </div>
    </div>
    <div class="line"></div>
    <p class="mt-3 mb-2">
      {{ DetailsR }}
    </p>
    <form class="d-sm-flex" action="">
      <input
        required
        value="Upload"
        class="Taskfile mt-sm-3 mt-2"
        type="file"
        name=""
        id="Taskfile"
      />

      <div class="d-flex justify-content-center mt-3">
        <input class="" type="submit" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ReCommend",
  props: ["DetailsR", "Num_Tracks", "Num_Groups"],
};
</script>

<style lang="scss" scoped>
@import "../global/scss/main.scss";
.Recommend {
  position: relative;
  background-color: #dbddf780;
  padding: 25px 20px;
  margin-top: 20px;
  @include breakpoints(mobile) {
    padding: 20px 15px;
  }

  .star-icon {
    span {
      color: #ffb12b !important;
      font-size: 17px !important;
      margin: 0 2px;
    }
  }

  input[type="file"] {
    position: relative;
    cursor: pointer;
    &::before {
      content: "Upload Task";
      position: absolute;
      color: #6561b0;
      margin-right: 10px;
      margin-top: 3px;
      font-weight: 500;
    }
  }
  input[type="submit"] {
    background-color: #6561b0;
    color: white;
    border: 0;
    padding: 5px 20px;
    border-radius: 5px;
  }
  .Taskfile::-webkit-file-upload-button {
    visibility: hidden;
  }
}
</style>
