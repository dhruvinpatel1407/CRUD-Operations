$(document).ready(function () {

    // code checkbox hide content 
  $("#checkbtn").click(function () {
    if ($(this).is(":checked")) {
      $("#bucketlist").hide();
    } else {
      $("#bucketlist").show();
    }
  });

//   delete bucket code 
  $("ul").on("click", "li button, li i", function (e) {
    $(this).closest("li").hide();
  });

//   code for search 
  $("#search").keyup(function (e) {
    let input = $("#search").val().toLowerCase();

    let x = $(".dhr");

    for (i = 0; i < x.length; i++) {
      let elementHtml = $(x[i]).html().toLowerCase();
      if (!elementHtml.includes(input)) {
        $(x[i]).parent().addClass("hidden");
      } else {
        $(x[i]).parent().removeClass("hidden");
      }
    }
  });


//   code for adding buckets 
  $("#btn-1").on("click", function () {
    var inputvalue = $("#enter").val();
    var selectvalue = $("#selectbox").val();
    
    // code for adding bucket with value 
    let newitem = `<li><h5 class="dhr">${inputvalue}</h5> 
         <button type="button"><i class="bi bi-trash"></i></button> 
       </li>`;

    if (selectvalue === "adventure") {
      $("#adventure").append(newitem);
    } else if (selectvalue === "travel") {
      $("#travel").append(newitem);
    } else if (selectvalue === "food") {
      $("#food").append(newitem);
    } else {
      $("#skill").append(newitem);
    }
    $("#enter").val("");
  });
});
