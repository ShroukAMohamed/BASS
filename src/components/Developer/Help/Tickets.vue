<template>
  <div class="pb-3 TicketStyle">
    <h3 class="mt-5 pb-3">Raise an IT Ticket</h3>
    <form action="">
      <div>
        <label for="Subject" class="pb-3 ms-1">Subject</label>
        <input
          disabled
          class="form-control rounded-0"
          type="text"
          name=""
          id="Subject"
          :placeholder="TicketSubject"
        />
      </div>
      <div class="mt-4">
        <label for="Description" class="pb-3 ms-1">Description</label>
        <textarea
          disabled
          class="form-control"
          name=""
          id="Description"
          cols="30"
          rows="5"
          :placeholder="TicketDescription"
        ></textarea>
      </div>
      <div class="mt-4">
        <label for="attachment" class="pb-3 ms-1"
          >Add relevant attachment</label
        >
        <div>
          <input disabled class="d-block" id="attachment" type="file" />
        </div>
      </div>
      <div class="mt-4">
        <label for="Type" class="pb-3 ms-1">Type</label>
        <select
          disabled
          id="Type"
          class="form-select"
          aria-label="Default select example"
        >
          <option class="text-secondary" disabled selected>
            Software Issues
          </option>
          <option value="1">Weak</option>
          <option value="2">Good</option>
          <option value="3">Very Good</option>
          <option value="4">Excellent</option>
        </select>
      </div>
      <div class="mt-4">
        <label for="Name" class="pb-3 ms-1">What is your name ?</label>
        <input
          disabled
          :placeholder="TicketName"
          class="form-control rounded-0"
          type="text"
          name=""
          id="Name"
        />
      </div>
      <div class="mt-4">
        <label for="Email" class="pb-3 ms-1">What is your email ?</label>
        <input
          disabled
          :placeholder="TicketEmail"
          class="form-control rounded-0"
          type="text"
          name=""
          id="Email"
        />
      </div>
      <div class="pb-4 Reply">
        <p class="mt-4 mb-2">Reply</p>
        <span>{{ TicketReply }}</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TicketsVue",
  props: [
    "TicketSubject",
    "TicketDescription",
    "TicketName",
    "TicketEmail",
    "TicketReply",
  ],
};
</script>

<style lang="scss" scoped>
@import "../../global/scss/main.scss";
@include HelpForm;
.Reply {
  span {
    font-size: 14px;
    color: rgb(81, 81, 81);
  }
}
</style>
