<template>
  <div>
    <div class="row mt-5 align-items-center">
      <div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <img
          class="img-fluid rounded-3"
          src="../../../assets/UserPhoto.jpg"
          alt=""
        />
      </div>
      <div class="col-2">
        <input type="file" class="profilePic ms-2" />
      </div>
    </div>
    <form action="">
      <div class="row">
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="email">Email</label>
          <input
            id="email"
            class="form-control border-0"
            type="text"
            placeholder="Enter Your Email"
          />
        </div>
        <div class="col-lg-6">
          <label class="pt-4 pb-2 text-secondary" for="fName">First Name</label>
          <input
            id="fName"
            class="form-control border-0"
            type="text"
            placeholder="Enter Your First Name"
          />
        </div>
        <div class="col-lg-6">
          <label class="pt-4 pb-2 text-secondary" for="lName">Last Name</label>
          <input
            id="lName"
            class="form-control border-0"
            type="text"
            placeholder="Enter Your Last Name"
          />
        </div>
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="BD">Date of Birth</label>
          <input id="BD" class="form-control border-0" type="date" />
        </div>
        <div class="col-md-2 col-sm-3 col-5">
          <label class="pt-4 pb-2 text-secondary" for="phone"
            >Country Code</label
          >
          <input
            id="phone"
            class="form-control border-0"
            type="tel"
            value="+20"
          />
        </div>
        <div class="col-md-10 col-sm-9 col-12">
          <label class="pt-4 pb-2 text-secondary" for="phone"
            >Phone Number</label
          >
          <input
            class="form-control border-0"
            type="tel"
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div class="line"></div>
        <div class="col-lg-6">
          <label class="pt-4 pb-2 text-secondary" for="country">Country</label>
          <input
            id="country"
            class="form-control border-0"
            type="text"
            placeholder="Enter Your Country"
          />
        </div>
        <div class="col-lg-6">
          <label class="pt-4 pb-2 text-secondary" for="city">City</label>
          <input
            id="city"
            class="form-control border-0"
            type="text"
            placeholder="Enter Your City"
          />
        </div>
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="address">Address</label>
          <input
            id="address"
            class="form-control border-0"
            type="text"
            placeholder="Enter Your Address"
          />
        </div>
        <div class="col-12">
          <label class="pt-4 pb-2 text-secondary" for="biography"
            >Biography</label
          >
          <textarea
            class="form-control border-0"
            maxlength="1500"
            name=""
            id="biography"
            cols="10"
            rows="6"
            placeholder="Enter Your Biography"
            @keyup="charCount"
          ></textarea>
          <p class="text-end mb-0 mt-2 Count">
            <span id="textcount">0</span> / 1500
          </p>
        </div>
        <div class="col-12 pb-3">
          <label class="pt-4 pb-2 text-secondary" for="quote"
            >Optional Quote</label
          >
          <textarea
            class="form-control border-0"
            @keyup="charCount"
            name=""
            id="quote"
            maxlength="150"
            cols="10"
            rows="6"
            placeholder="Enter your favorite line or quote (max 150 characters)"
          ></textarea>
          <p class="text-end mb-0 mt-2 Count">
            <span id="textquote">0</span> / 150
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/intlTelInput.js";
import intlTelInput from "intl-tel-input";
import $ from "jquery";
export default {
  name: "BasicInfo",
  mounted() {
    const input = document.querySelector("#phone");
    intlTelInput(input, {});
  },
  methods: {
    charCount() {
      var Length = $("#biography").val().length;
      var Lengthquote = $("#quote").val().length;
      $("#textcount").text(Length);
      $("#textquote").text(Lengthquote);
    },
  },
};
</script>

<style lang="scss" scoped>
.profilePic {
  position: relative;
  outline: none;
  color: transparent;
  &::before {
    content: "Click to change";
    position: absolute;
    color: #233fd0;
    cursor: pointer;
    background-color: white;
    padding: 8px 15px;
    margin-top: -5.5px;
    border-radius: 10px;
  }
}
.profilePic::-webkit-file-upload-button {
  visibility: hidden;
}

form {
  width: 100%;
  max-width: 800px;
  textarea {
    resize: none;
  }
  .Count {
    font-size: 13.5px;
  }
}
</style>
