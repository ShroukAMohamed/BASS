<template>
  <div class="pb-3 TicketStyle SubmitTicket">
    <h3 class="mt-5 pb-3">Raise an IT Ticket</h3>
    <form action="">
      <div>
        <label for="Subject" class="pb-3 ms-1">Subject</label>
        <input
          class="form-control rounded-0"
          type="text"
          name=""
          id="Subject"
        />
      </div>
      <div class="mt-4">
        <label for="Description" class="pb-3 ms-1">Description</label>
        <textarea
          class="form-control"
          name=""
          id="Description"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div class="mt-4">
        <label for="attachment" class="pb-3 ms-1"
          >Add relevant attachment</label
        >
        <div>
          <input class="d-block" id="attachment" type="file" />
        </div>
      </div>
      <div class="mt-4">
        <label for="Type" class="pb-3 ms-1">Type</label>
        <select
          id="Type"
          class="form-select"
          aria-label="Default select example"
        >
          <option class="text-secondary" disabled selected>
            Select your answer
          </option>
          <option value="1">Weak</option>
          <option value="2">Good</option>
          <option value="3">Very Good</option>
          <option value="4">Excellent</option>
        </select>
      </div>
      <div class="mt-4">
        <label for="Name" class="pb-3 ms-1">What is your name ?</label>
        <input class="form-control rounded-0" type="text" name="" id="Name" />
      </div>
      <div class="mt-4">
        <label for="Email" class="pb-3 ms-1">What is your email ?</label>
        <input class="form-control rounded-0" type="text" name="" id="Email" />
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary mt-4">Submit</button>
      </div>
      <p class="pt-4 text-center">
        Never submit passwords or credit card details through monday.com forms
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "SubmitTicket",
};
</script>
<style lang="scss" scoped>
@import "../../global/scss/main.scss";
@include HelpForm;
</style>
