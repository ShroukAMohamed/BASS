<template>
  <div>
    <div
      class="modal fade"
      id="InterviewPopup"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content rounded-4">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form action="">
            <div class="modal-body mb-4">
              <div class="modal-card d-flex justify-content-center">
                <div class="mt-2">
                  <h2 class="text-center">Interview Details</h2>
                  <div class="mt-4 ms-3">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolores praesentium et nisi magni vel est facere possimus
                      optio cupiditate qui aliquam tempore, provident, rerum ab?
                      Atque nam suscipit modi quis nulla, delectus optio
                      incidunt cumque. In temporibus rem nam, fuga modi placeat.
                      Similique, facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InterviewPopup",
};
</script>

<style lang="scss" scoped>
div.modal-card {
  p {
    width: 100%;
    max-width: 400px;
    color: rgb(89, 89, 89);
  }
}
</style>
