<template>
  <div class="settings">
    <div class="row justify-content-center">
      <h2>Settings</h2>
      <p class="mt-4">Password</p>
      <div class="col-lg-4">
        <button class="w-100">
          <span class="me-2"><i class="fa-solid fa-key"></i></span> Change
          Password
        </button>
      </div>
      <div class="col-12 Line mt-4"></div>
      <p class="mt-3">Email Reminders</p>
      <div class="col-12">
        <div class="d-sm-flex justify-content-sm-between">
          <div class="d-flex">
            <div class="light-checkbox">
              <input type="checkbox" id="light" />
              <label for="light"></label>
            </div>
            <span class="ms-3">Invitation reminders is On</span>
          </div>
          <div class="d-flex mt-3 mt-sm-0">
            <div class="light-checkbox">
              <input type="checkbox" id="Emails" />
              <label for="Emails"></label>
            </div>
            <span class="ms-3">System Emails is On</span>
          </div>
        </div>
        <div class="d-flex mt-3">
          <div class="light-checkbox">
            <input type="checkbox" id="notify" />
            <label for="notify"></label>
          </div>
          <span class="ms-3">Pending notifications reminders is On</span>
        </div>
      </div>
      <div class="col-12 Line mt-4"></div>
      <p class="mt-3 pb-3">Account Settings</p>
      <div class="col-lg-5">
        <button class="w-100">
          <span class="me-2"><i class="fa-regular fa-copy"></i></span> Invite
          Your Friends
        </button>
      </div>
      <div class="col-lg-5 gy-5 gy-lg-0">
        <button class="w-100">
          <span class="me-2"><i class="fa-solid fa-circle-minus"></i></span>
          Delete Account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsSection",
};
</script>

<style lang="scss" scoped>
.settings {
  width: 90%;
  margin: auto;
  .row {
    h2 {
      font-size: 35px;
    }
    > p {
      font-weight: 500;
      font-size: 19px;
    }
    .Line {
      border-bottom: 1px solid rgb(110, 110, 110);
    }
    .light-checkbox {
      input[type="checkbox"] {
        cursor: pointer;
        appearance: none;
        height: 27px;
        width: 53px;
        background-color: #7d7d7d;
        position: relative;
        border-radius: 4.68em;
        &::before {
          position: absolute;
          content: "";
          height: 22px;
          width: 22px;
          background-color: #bbbbbb;
          border-radius: 50%;
          top: 2.3px;
          left: 2.3px;
          transition: 0.3s;
        }
        &:checked {
          background-color: #2342d0;
        }
        &:checked::before {
          background-color: #f5f5f5;
          left: 28px;
          box-shadow: 0 0 8.75em 1.87em rgba(196, 241, 255, 0.5);
        }
      }
      label[for="light"],
      label[for="notify"],
      label[for="Emails"] {
        cursor: pointer;
      }
    }
    > div:nth-of-type(5),
    div:first-of-type,
    div:last-of-type {
      button {
        border: 0;
        color: white;
        padding: 8px;
        border-radius: 8px;
        transition: 0.4s;
        &:hover {
          transform: translateY(-3px);
        }
      }
    }
    > div:nth-of-type(5),
    div:first-of-type {
      button {
        background-color: #2342d0;
      }
    }
    div:last-of-type {
      button {
        background-color: rgb(212, 11, 11);
      }
    }
  }
}
</style>
