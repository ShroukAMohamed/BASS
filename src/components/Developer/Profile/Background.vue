<template>
  <div>
    <form class="mt-4" action="">
      <div class="row justify-content-center">
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="Title">Title</label>
          <input
            id="Title"
            class="form-control border-0"
            type="text"
            placeholder="Enter Your Title"
          />
        </div>
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="English"
            >English Proficiency</label
          >
          <select
            id="English"
            class="form-select border-0"
            aria-label="Default select example"
          >
            <option selected>None</option>
            <option value="1">Weak</option>
            <option value="2">Good</option>
            <option value="3">Very Good</option>
            <option value="4">Excellent</option>
          </select>
        </div>
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="qualify"
            >Highest Academic Qualification</label
          >
          <select
            id="qualify"
            class="form-select border-0"
            aria-label="Default select example"
          >
            <option selected>None</option>
            <option value="1">Bachelor</option>
            <option value="2">Graduated</option>
            <option value="3">High School</option>
          </select>
        </div>
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="University"
            >University</label
          >
          <input
            id="University"
            class="form-control border-0"
            type="text"
            placeholder="Enter Your University"
          />
        </div>
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="degree"
            >Name of Degree</label
          >
          <input
            id="degree"
            class="form-control border-0"
            type="text"
            placeholder="Enter Your Degree"
          />
        </div>
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="Graduation"
            >Year of Graduation</label
          >
          <input id="Graduation" class="form-control border-0" type="month" />
        </div>
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="technical"
            >Technical Focus</label
          >
          <select
            id="technical"
            class="form-select border-0"
            aria-label="Default select example"
          >
            <option selected>None</option>
            <option value="1">Mobile Development</option>
            <option value="2">Web Development</option>
            <option value="3">Cyber Security</option>
            <option value="4">Embedded System</option>
            <option value="5">Cloud</option>
            <option value="6">Network</option>
          </select>
        </div>
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="Level"
            >Seniority Level</label
          >
          <select
            id="Level"
            class="form-select border-0"
            aria-label="Default select example"
          >
            <option selected>None</option>
            <option value="1">Lead</option>
            <option value="2">Option</option>
            <option value="3">Option</option>
            <option value="4">Option</option>
          </select>
        </div>
        <div class="col-12 pb-3">
          <label class="pt-4 pb-2 text-secondary" for="Link"
            >Github / Bitbucket / Behance / LinkedIn Link</label
          >
          <input
            id="Link"
            class="form-control border-0"
            type="url"
            placeholder="https://example.com"
          />
        </div>
        <div class="mt-4 pb-5">
          <input type="Submit" value="Save Changes" name="" id="" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BackgroundVue",
};
</script>

<style lang="scss" scoped>
div {
  form {
    width: 100%;
    max-width: 800px;
    select {
      cursor: pointer;
    }
    input[type="submit"] {
      width: 100%;
      border: 0;
      color: white;
      background-color: #2046cd;
      border-radius: 5px;
      padding: 8px 0;
    }
  }
}
</style>
