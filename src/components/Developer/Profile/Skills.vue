<template>
  <div>
    <form action="">
      <div class="row mt-5">
        <div class="col-md-6 col-sm-10">
          <label class="pb-2 text-secondary ms-2" for="Skills"
            >Skills <span class="text-danger">*</span></label
          >
          <select
            id="Skills"
            class="form-select border-0"
            aria-label="Default select example"
          >
            <option selected disabled>Choose</option>
            <option value="1">Weak</option>
            <option value="2">Good</option>
            <option value="3">Very Good</option>
            <option value="4">Excellent</option>
          </select>
        </div>
        <div class="col-md-4 col-sm-10">
          <label class="pb-2 text-secondary ms-1" for="Experience"
            >Experience</label
          >
          <input
            id="Experience"
            class="form-control border-0"
            type="text"
            placeholder="How many years"
          />
        </div>
        <div class="col-md-2 col-sm-10">
          <label class="text-secondary ms-1" for="Add"></label>
          <input
            @click.prevent
            class="btn btn-secondary w-100 mt-1"
            type="submit"
            value="Add"
            name=""
            id="Add"
          />
        </div>
        <p class="mt-3">
          Please add your skills and it's number of years to enable recruiters
          and tech companies to easily find you.
        </p>
        <p>
          To update a skill you can
          <span class="fw-bold text-black">click</span> on the name of the skill
          and it will show up on the input field above
        </p>
        <h4 class="mt-5">Framework</h4>
        <div class="col-lg-12">
          <div class="d-flex"></div>
        </div>
        <h4 class="mt-4">Language</h4>
        <div class="col-lg-12">
          <div class="d-flex"></div>
        </div>
        <h4 class="mt-4">API</h4>
        <div class="col-lg-12">
          <div class="d-flex"></div>
        </div>
        <h4 class="mt-4">Technology</h4>
        <div class="col-lg-12">
          <div class="d-flex"></div>
        </div>
        <h4 class="mt-4">General</h4>
        <div class="col-lg-12">
          <div class="d-flex"></div>
        </div>
        <div class="mt-5 pb-5">
          <input type="Submit" value="Save Changes" name="" id="" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SkillsVue",
};
</script>

<style lang="scss" scoped>
div {
  form {
    width: 100%;
    max-width: 1000px;
    input[type="submit"] {
      width: 100%;
      max-width: 750px;
      border: 0;
      color: white;
      background-color: #2046cd;
      border-radius: 5px;
      padding: 8px 0;
    }
  }
  > p {
    font-size: 14px;
  }
}
</style>
