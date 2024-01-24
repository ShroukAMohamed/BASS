<template>
  <div>
    <div class="pb-4">
      <h2>Hello Bassel Allam</h2>
    </div>
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <div class="Card">
          <p>APPLICATIONS</p>
          <div>
            <p>0</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 gy-sm-0 gy-4">
        <div class="Card">
          <p>UPCOMING INTERVIEWS</p>
          <div>
            <p>0</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 gy-lg-0 gy-4">
        <div class="Card">
          <p>AWAITING INVITATIONS</p>
          <div>
            <p>0</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 gy-lg-0 gy-4">
        <div class="Card">
          <p>TOTAL VIEWS</p>
          <div>
            <p>6</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <div class="invCard">
          <p>Invitations and Applications</p>
          <div class="text-center pt-4">
            <div class="Icon"><i class="fa-regular fa-calendar"></i></div>
            <p class="mt-4 pb-4">There are no pending invitations</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4 pb-4">
      <div class="col-12">
        <div class="invCard">
          <p>Interviews</p>
          <div class="text-center pt-4">
            <div class="Icon"><i class="fa-regular fa-calendar"></i></div>
            <p class="mt-4 pb-4">There are currently no scheduled interviews</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PulseSection",
};
</script>

<style lang="scss" scoped>
.row {
  .Card {
    position: relative;
    background-color: white;
    padding: 18px 15px;
    height: 160px;
    border-radius: 5px;
    p {
      font-weight: bold;
    }
    > div {
      position: absolute;
      right: 8%;
      bottom: 0;
      p {
        font-size: 40px;
      }
    }
  }
  > div:nth-child(1) {
    color: #3500c5;
  }
  > div:nth-child(2) {
    color: #f30064;
  }
  > div:nth-child(3) {
    color: #ffae15;
  }
  > div:nth-child(4) {
    color: #00ba58;
  }
  .invCard {
    padding: 22px 18px;
    font-size: 19px;
    background-color: white;
    color: rgb(104, 103, 103);
    border-radius: 5px;
    .Icon {
      font-size: 25px;
    }
    p:last-child {
      color: rgb(24, 24, 24);
    }
  }
}
</style>
