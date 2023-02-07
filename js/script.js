$(function(){
  var x = 1; 
  setInterval(function() {
  $(".slider_foto").hide();
  $("#slider_fotos").find(".slider_foto:nth-child(" + x + ")").show();
 
    if(x == $(".slider_foto").length){
      x = 1;
    }else{
      x++;
    }
  }, 3000);
});

    $(document).mouseover(function(e){
      let woid = $(".category");
      if(woid.has(e.target).length == 0){
        $(".category_menu_klein ul li").hide();
        $('#category_item span.category_logo').css({background: '#FFF'})
      }
    })
    
    $('.category_menu_klein_item ul li').hide();
    $("#category_item li").mouseover(function(){
      // var jhis = $(this).index();
      // var tr = $('.category_menu_klein_item').find($("ul:nth-child(" + jhis + ")")).show();
      // $('.category_menu_klein_item ul').hide();
      // $("html").find(tr).show();
      // alert(tkr);
      $("#category_item li").find("span.category_logo").css({background: "#fff"})
      $(this).find("span.category_logo").css({background: "#FFDB4D"})
      var ttr = $(this).attr("ttr");
      $('.category_menu_klein_item ul li').hide();
      $(".category_menu_klein_item ul:nth-child(1)").find('li[ttr=' + ttr + ']').show().delay(1000);
    });
    $(".category_menu_klein_item ul:nth-child(1) li").mouseover(function(){
      var ear = $(this).attr("atr")
      $(".category_menu_klein_item ul:nth-child(2) li").hide()
      $(".category_menu_klein_item ul:nth-child(2)").find("li[atr= " + ear + "]").show()
    })
    $(".category_menu_klein_item ul:nth-child(2) li").mouseover(function(){
      var ear = $(this).attr("ttr")
      $(".category_menu_klein_item ul:nth-child(3) li").hide()
      $(".category_menu_klein_item ul:nth-child(3)").find("li[ttr= " + ear + "]").show()
    })
    $(".sms_item img").click(function(){
      $(".modal_box").show();
      let ids = $(this).attr("ttr");
      $("#id_tovar").val(ids);
      alert(ids);

    })
    $(".hearth_item img").click(function(){
      if ($(this).attr("src") == String('/img/icons8-favorite-96 (1).png')) {
        $(this).attr("src", '/img/icons8-favorite-96.png' )
      }
      else{
        $(this).attr("src", '/img/icons8-favorite-96 (1).png' )
      }
    })
    // $(".category_menu_klein_item").find("ul:nth-child(2) li").hide();
    // $(".category_menu_klein_item").find("ul:nth-child(3) li").hide();
    
    // $(".category_menu_klein_item ul li").mouseover(function(){
    //     var letz = $(this).index() + parseInt(1);
    //     var indeu = $(".category_menu_klein_item ul").find("li:nth-child(" + letz + ")").attr("ttr");
        // alert(indeu)
    //     $(".category_menu_klein_item").find("ul:nth-child(2) li").hide();
    // $(".category_menu_klein_item").find("ul:nth-child(3) li").hide();
    //     $(".category_menu_klein_item ul:nth-child(2)").find("li[ttr='" + indeu + "']").show();
    // })
    // $(function(){
    //   var i = 1;
    //   setInterval(function(){
      
    //   $('.uhr').html(i);
    //   if(i >= 10){
    //     i = 0;
    //   }else{i++}
    // },1000);
    // })
    // let strs = $(".add_tovar span").text().replace(/\s+/g,'');
    // $(".add_tovar span").html(strs)
    $(".alles_stadte").hide();
    $('.alle_stadt').mouseup(function(){
      $(".alles_stadte").slideToggle();
    })
    $(".unlock img").mouseup(function(){
      let link = String("/img/icons8-padlock-outline-96.png");
      let link2 = String("/img/icons8-padlock-96.png");
      let dei = $(this).parent().parent().find('.password_registers input');
      let dieses = $(this);
      if(dieses.attr('src') === link){
        dieses.attr("src", link2)
        dei.attr("type", "text");
      } else{
        dieses.attr("src", link)
        dei.attr("type", "password")
      }
    })
    $(".text_register_forms:nth-child(1)").click(function(){
      $(".form_register").show();
      $(".form_register_2").hide();
      $(".form_register .input_item input").val("");
    })
    $(".text_register_forms:nth-child(2)").click(function(){
      $(".form_register").hide();
      $(".form_register_2").show();
      $(".form_register_2 .input_item input").val("");
    })
     
    
    // $(".passy input").on("keyup",function(){
    //   if($(this).val().length >= 5){
    //     $(this).value = this.value.slice(0, 1);
       
    //   }
    //  })
    
     $(".passy input").on("keyup", function(){
        if (this.value.length >= this.maxLength){
            this.value = this.value.slice(0, this.maxLength);
        $(this).parent().parent().parent().find(".message").show();
        } else{
        $(".message").hide();
      }
    });
    $('.password_registers input').keyup(function(){
      if(this.value.length >= this.maxLength){
        $(this).parent().parent().parent().find('.message').show();
      }
      else{
        $(this).parent().parent().parent().find('.message').hide();
      }
    })
    
      $(".close_sms_user").click(function(){
        $(".modal_box").hide(100)
      })
    
      $(document).mouseup(function(e){
        if($(".modal_box_item").has(e.target).length == 0){
          $('.modal_box').hide()
        }
      })
    $(".sms_input input").keyup(function(){
      if($(".sms_input input").val().length > 0){
        $(".user_sms_submit input").prop("disabled", false);
        $(".user_sms_submit input").removeClass("sms_input_disabled_true");
        $(".user_sms_submit input").addClass("sms_input_disabled_false");
      }else{
        $(".user_sms_submit input").prop("disabled", true);
        $(".user_sms_submit input").removeClass("sms_input_disabled_false");
        $(".user_sms_submit input").addClass("sms_input_disabled_true");
      }
    })
    $(document).ready(function(){
      if($(".sms_input input").val().length == 0){
        $(".user_sms_submit input").prop("disabled", true).addClass("sms_input_disabled_true");
      }else{
        $(".user_sms_submit input").prop("disabled", false).addClass("sms_input_disabled_false");
      }
    })
    $(".sms_arte_item").click(function(){
      let kat = $(this).attr("ttr");
      $(".sms_input input").val("");
      $(".sms_input input").val(kat);
      // $(".user_sms_submit input").removeClass("sms_input_disabled_true ");
      $(".user_sms_submit input").prop("disabled", false).removeClass("sms_input_disabled_true").addClass("sms_input_disabled_false");
      $(".user_sms_submit input").click();
      alert("Отправлено");
      // alert();
    })
    $(document).ready(function(e){
      $(".menu_zeigen ul li a").text() + String("/");
     
    })




    let child_1, child_2, category_item, category_item_1, ttr;
    child_1 = $(".alle_category #category_items");
    child_2 = $(".alle_category #category_items_2");
    category_item = $(".category_item");
    category_item_1 = $(".category_item_1");
    $(".div_zuruck").hide()
    $(".alle_category ul#category_items li").click(function(){
      ttr = $(this).attr('ttr');
      child_1.hide()
      child_2.find("li").hide()
      // alert(ttr)
      $("#category").val(ttr);
      $(".category_item").text($(this).text() + "   /   ")

      child_2.find("li[ttr=" + ttr + "]").show();
      $(".div_zuruck").show();
    })
    // $("#category_items_2 li").click(function(){
    //   atr = $(this).attr('ttr');
    //   $(".category_item_1").text($(this).text())
    //   $("#category_item").val(atr);
    // })


    $(".div_zuruck").click(function(){
      child_1.show()
      child_2.find("li").hide()
      $(".div_zuruck").hide();
      $("#category").val("");
      category_item.text("")
    })
    $("#category_items_2 li").click(function(){
      atr = $(this).attr('atr');
      $(".category_item_1").text($(this).text())
      $("#category_item").val(atr);
      $("#add_category").hide()

    })
    $("#add_category").hide()
    $(".category_button").click(function(){
      $("#add_category").show();
      child_2.val("");
      child_1.val("")
      category_item.text("")
      category_item_1.text("")
      child_1.show()
      child_2.find("li").hide()
      $(".div_zuruck").hide();
    })
    $('#add_category').mouseup(function(){
      if($(".add_category").has(e.target).length == 0 && $(".category_item_1").text() == 0){

        $("#add_category").show()
      }
      else{
        $("#add_category").hide()
      }
    })

    $("#standard-select").change(function (event) {
      $("#stadt").val($(this).val());
  });
  $(".foto_modal_img").hide();
  let full_foto, mini_foto;
  full_foto = $(".foto_full_view img");
  mini_foto = $(".foto_mini_view .foto_view_mini_item img");
  mini_foto.mouseover(function(){
    let src = $(this).attr("src");
    full_foto.attr("src", src);
    $('.foto_mini_view .foto_view_mini_item img').css("border","none");
    $(this).css("border","2px solid red");
  })
  $(".vier_ecke").click(function(){
    $(".foto_modal_img").show();
  })
  $(".foto_modal_img").mouseup(function(e){
    if($(".foto_modal_img_item").has(e.target).length == 0){
      $(".foto_modal_img").hide();
    } else{
      $(".foto_modal_img").show();
    }
  })
  $(".inpau").click(function(){
    $(".foto_input input").click();
  })
    $("#category").on("change", function(e){
      if($("#category").val() == "Транспорт"){
        alert("Транспорт");
        }
    })
    $("#form_gap").submit(function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "/form.php",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
        success: function(data){
          alert(data);
         if(data == "Daten erfolgreich hinzugefügt"){
          $("#form_gap textarea").val("");
          $("#form_gap input").val("");
          location.href= "/index.php";
         }else{
          alert("Falsch")
         }
         
        }
      })
    });

    $('.ordnet_product_item').each(function(){
      $(this).text($(this).text().substring(0,50) + " ...");
    })
    // $("#message").submit(function(e){
    //   e.preventDefault()

    // })
$(".decoration #tes").keyup(function(){
  
  $("#text_area").val($(this).val());
})