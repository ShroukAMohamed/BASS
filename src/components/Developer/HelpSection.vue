<template>
  <div class="HelpSection">
    <div class="row justify-content-center">
      <div class="col-xl-8 col-lg-7 col-sm-8 col-12 mb-5">
        <div>
          <SubmitTicket />
          <TicketsVue
            id="Ticket1"
            class="RaisedTicket"
            :TicketSubject="TicketSubject"
            :TicketDescription="TicketDescription"
            :TicketName="TicketName"
            :TicketEmail="TicketEmail"
            :TicketReply="TicketReply"
          />
          <TicketsVue
            id="Ticket2"
            class="RaisedTicket"
            :TicketSubject="TicketSubject"
            :TicketDescription="TicketDescription"
            :TicketName="TicketName"
            :TicketEmail="TicketEmail"
            :TicketReply="TicketReply"
          />
          <TicketsVue
            id="Ticket3"
            class="RaisedTicket"
            :TicketSubject="TicketSubject"
            :TicketDescription="TicketDescription"
            :TicketName="TicketName"
            :TicketEmail="TicketEmail"
            :TicketReply="TicketReply"
          />
          <TicketsVue
            id="Ticket4"
            class="RaisedTicket"
            :TicketSubject="TicketSubject"
            :TicketDescription="TicketDescription"
            :TicketName="TicketName"
            :TicketEmail="TicketEmail"
            :TicketReply="TicketReply"
          />
        </div>
      </div>
      <div class="col-xl-4 col-lg-5 col-sm-4">
        <div class="row">
          <div class="col-12">
            <h4>
              <span class="pe-2 text-secondary"
                ><i class="fa-regular fa-calendar-check"></i
              ></span>
              Raised Tickets
            </h4>
          </div>
          <div class="col-lg-6 col-sm-12" @click="ShowTickets('#Ticket1')">
            <img class="img-fluid" src="../../assets/SubmitTicket.png" alt="" />
          </div>
          <div class="col-lg-6 col-sm-12" @click="ShowTickets('#Ticket2')">
            <img class="img-fluid" src="../../assets/SubmitTicket.png" alt="" />
          </div>
          <div class="col-lg-6 col-sm-12" @click="ShowTickets('#Ticket3')">
            <img class="img-fluid" src="../../assets/SubmitTicket.png" alt="" />
          </div>
          <div class="col-lg-6 col-sm-12" @click="ShowTickets('#Ticket4')">
            <img class="img-fluid" src="../../assets/SubmitTicket.png" alt="" />
          </div>
          <div class="col-12 d-flex justify-content-center mt-5">
            <button @click="AddTicket()" class="btn btn-success">
              Add New Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitTicket from "./Help/SubmitTicket.vue";
import TicketsVue from "./Help/Tickets.vue";
import show_sections from "../../../mixin/show_sections.vue";
export default {
  name: "HelpSection",
  data() {
    return {
      TicketSubject: "Developer's Response",
      TicketDescription: "Developer's Response",
      TicketName: "Developer's Response",
      TicketEmail: "Developer's Response",
      TicketReply:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cupiditate cumque ipsa repellat animi, at deleniti autem maiores rerum magni iusto facere odit illum id eius rem alias possimus doloremque",
    };
  },
  components: { TicketsVue, SubmitTicket },
  mixins: [show_sections],
};
</script>

<style lang="scss" scoped>
@import "../../components/global/scss/main.scss";
.HelpSection {
  .RaisedTicket {
    display: none;
  }
  > .row:first-of-type {
    > div:first-child {
      > div {
        max-width: 700px;
        margin: 0 auto;
        background-color: white;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 3px 6px #2923417a;
        @include breakpoints(smaller) {
          width: 100%;
        }
        @include HelpForm;
      }
    }
    div:nth-child(2) {
      img {
        box-shadow: 1px 2px 3px #0000005c;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          transform: translateY(-6px);
        }
      }
      > .row {
        > div:not(div:first-child) {
          margin-top: 25px;
        }
        > div:first-child {
          h4 {
            @include breakpoints(mobile) {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
