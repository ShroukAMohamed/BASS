<template>
  <div class="container">
    <bankAccount />
    <TotalEarning />
    <DueAmount />
    <div class="row justify-content-between align-items-center">
      <div class="col-lg-4 col-md-6 col-12 gy-5 gy-md-0 order-2 order-lg-1">
        <div
          class="paymentCard bgStyle d-flex flex-column justify-content-center"
        >
          <div class="ms-4">
            <p class="mb-2">Due Amount</p>
            <p>Not Transferred</p>
            <h3>$276</h3>
            <div class="d-flex justify-content-end me-3">
              <button
                data-bs-target="#AmountModal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-12 gy-lg-0 order-1 order-lg-2">
        <div class="paymentCard d-flex flex-column justify-content-center">
          <div class="ms-4">
            <p class="mb-2">Total Earnings</p>
            <p>From All Previous Courses</p>
            <h3>$500</h3>
            <div class="d-flex justify-content-end me-3">
              <button
                data-bs-target="#TotalModal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-12 gy-5 gy-lg-0 order-3 order-lg-3">
        <div class="paymentCard">
          <div class="ms-4">
            <p>Your Bank Account</p>
            <p class="text-danger accepted">Only One Accepted</p>
            <p>Account Number: <span>11256748</span></p>
            <p>Bank Name: <span>Armenia, Cape Town</span></p>
            <div class="d-flex justify-content-end me-3">
              <button
                data-bs-target="#AccountModal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 gy-5 d-none d-lg-block order-4">
        <img
          class="img-fluid"
          src="../../assets/undraw_profile_data_re_v81r.svg"
          alt=""
        />
      </div>
      <div class="col-lg-4 col-8 gy-5 order-last">
        <img
          class="img-fluid"
          src="../../assets/undraw_mobile_pay_re_sjb8.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import bankAccount from "./PaymentSection/bankAccount.vue";
import TotalEarning from "./PaymentSection/TotalEarning.vue";
import DueAmount from "./PaymentSection/DueAmount.vue";
export default {
  name: "PaymentSection",
  components: { bankAccount, TotalEarning, DueAmount },
};
</script>

<style lang="scss" scoped>
@import "../global/scss/main.scss";
.container {
  .bgStyle {
    background: transparent linear-gradient(90deg, #4f78ff 0%, #97bdff) 0% 0%
      no-repeat padding-box;
    p {
      color: white !important;
    }
    h3 {
      color: white !important;
    }
    button {
      background: transparent !important;
      background-color: white !important;
      color: #4f78ff !important;
      font-weight: bold;
    }
  }
  .paymentCard {
    background-color: white;
    box-shadow: 0px 3px 15px #00000029;
    width: 98%;
    margin: auto;
    height: 100%;
    max-height: 300px;
    padding: 30px 0;
    p {
      color: rgb(108, 108, 108);
      font-size: 15px;
    }
    p:first-child {
      color: #4f78ff;
      font-weight: bold;
      font-size: 20px;
    }
    .accepted {
      font-size: 14px;
    }
    h3 {
      font-size: 50px;
      font-weight: 400;
      color: #4f78ff;
    }
    button {
      width: 100%;
      max-width: 120px;
      background: transparent linear-gradient(90deg, #4f78ff 0%, #97bdff) 0% 0%
        no-repeat padding-box;
      border: 0;
      color: white;
      padding: 9px 0;
      border-radius: 20px;
      font-size: 14px;
    }
  }
}
</style>
