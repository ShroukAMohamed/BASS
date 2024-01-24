<template>
  <div>
    <form class="mt-4" action="">
      <div class="row">
        <div class="col-8">
          <label class="pt-4 pb-2 text-secondary" for="TotalExp"
            >Total Experience</label
          >
          <input
            id="TotalExp"
            class="form-control border-0"
            type="text"
            placeholder="yrs"
          />
          <p class="mt-3">
            Following job experiences were extracted from your CV, please verify
          </p>
        </div>
        <div class="col-12 mt-3">
          <span class="fw-bold">Job #1</span> <span class="ms-2">Delete</span>
          <br />
          <label class="pt-4 pb-2 text-secondary" for="Company"
            >Company Name</label
          >
          <input
            id="Company"
            class="form-control border-0"
            type="text"
            placeholder="Enter Company Name"
          />
        </div>
        <div class="col-12 mt-3">
          <label class="pt-4 pb-2 text-secondary" for="Position"
            >Position</label
          >
          <input
            id="Position"
            class="form-control border-0"
            type="text"
            placeholder="Enter Company Name"
          />
        </div>
        <div class="col-lg-3">
          <label class="pt-4 pb-2 text-secondary" for="startDate"
            >Start Date</label
          >
          <input id="startDate" class="form-control border-0" type="date" />
        </div>
        <div class="col-lg-6">
          <div>
            <label class="pt-4 pb-2 text-secondary" for="endDate"
              >End Date</label
            >
            <input id="endDate" class="form-control border-0" type="date" />
          </div>
        </div>
        <div class="col-lg-3">
          <label class="pt-4 pb-1 text-secondary d-block">No</label>
          <div class="d-flex align-items-center">
            <input id="stillWork" class="border-0 mt-2" type="checkbox" />
            <label for="stillWork" class="ms-2 mt-2">Still Work There</label>
          </div>
        </div>
        <div class="col-12">
          <label class="pt-4 pb-3 text-secondary" for="Responsibilities"
            >Responsibilities</label
          >
          <ckeditor id="Responsibilities"></ckeditor>
        </div>
      </div>
      <p class="AddJobs mt-4 ms-3">Add Another Job</p>
      <div class="mt-5 pb-5">
        <input type="Submit" value="Save Changes" name="" id="" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ExperienceVue",
};
</script>

<style lang="scss" scoped>
@import "../../../components/global/scss/main.scss";
div {
  form {
    width: 100%;
    max-width: 800px;
    div.row {
      > div:first-child {
        input {
          &::placeholder {
            text-align: end;
          }
        }
        p {
          font-size: 14px;
        }
      }
      > div:nth-child(2) {
        span:nth-of-type(2) {
          color: red;
          cursor: pointer;
        }
      }
      > div:nth-child(5) {
        position: relative;
        div {
          width: 100%;
          max-width: 200px;
          position: absolute;
          right: 0;
          @include breakpoints(mobile) {
            position: static;
            right: auto;
            max-width: none;
          }
        }
      }
      > div:nth-child(6) {
        > label:first-of-type {
          color: transparent !important;
        }
        div {
          label {
            cursor: pointer;
            font-size: 14px;
          }
          input {
            cursor: pointer;
            background-color: rgb(207, 206, 206);
            border-radius: 2px;
            width: 20px;
            height: 20px;
            font-size: 16px;
            appearance: none;
            display: flex;
            justify-content: center;
            align-items: center;
            &:checked {
              background-color: #233fd0 !important;
              &::after {
                display: block;
              }
            }
            &::after {
              font-family: "Font Awesome 6 Free";
              content: "\f00c";
              font-weight: 900;
              font-size: 15px;
              color: white;
              display: none;
            }
            &:hover {
              background-color: rgb(156, 155, 155);
            }
          }
        }
      }
    }
  }
  input[type="submit"] {
    width: 100%;
    border: 0;
    color: white;
    background-color: #2046cd;
    border-radius: 5px;
    padding: 8px 0;
  }
  .AddJobs {
    color: #233fd0;
    cursor: pointer;
  }
}
</style>
