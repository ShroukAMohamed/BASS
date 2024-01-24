<script>
import $ from "jquery";
export default {
  mounted() {
    $(".navigation li").click(function () {
      $(this).addClass("hovered").siblings().removeClass("hovered");
      $(".navigation").removeClass("active");
      $(".main").removeClass("active");
    });

    $(".dynamicTabs .Clicked").click(function () {
      $(".Clicked").removeClass("hovered");
      $(this).addClass("hovered");
    });

    $(".HomeSection").siblings().hide();
    $(".PulseSection").siblings().hide();
    $(".BasicInfo").siblings().hide();
    $(".editProfile").hide();

    if ($(".AvJobs").hasClass("Enrolled")) {
      $(".Enrolled button").attr("disabled", true);
      $(".Enrolled button").text("Enrolled");
    }
  },
  methods: {
    Show_Sections(Active, Section) {
      $(Active).click(function () {
        $(Section).show().siblings().hide();
      });
    },
    Show_EditProfile() {
      $(".mainProfile").fadeOut();
      $(".editProfile").fadeIn();
    },
    ShowTickets(Ticket) {
      $(".SubmitTicket").hide();
      $(".RaisedTicket").hide();
      $(Ticket).fadeIn();
      $(window).scrollTop(0);
    },
    AddTicket() {
      $(".RaisedTicket").hide();
      $(".SubmitTicket").fadeIn();
      $(window).scrollTop(0);
    },
  },
};
</script>
