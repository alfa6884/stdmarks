(function($) {

    "use strict";

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });

})(jQuery);




let fno = 1;
$('.btnAdd').on("click", function(e) {
    e.preventDefault();
    let sbj = $("#sub").val();
    let grd = $("#grade").val();

    if (sbj == null || grd == null) {
        alert("Please select the subject and the grade you obtained in your ssce");
    } else {
        $("#tbody").append(`<tr class="len">
		<td style="height:20px;font-size:10px;align-item:center">${fno++}<input type="hidden" name="no_sits[]"value="1"></td>
		<td><input type="text" class="form-control bg-light border-0" style="height:20px;font-size:10px;align-item:center"readonly name="subject[]"value="${sbj}"></td>
		<td><input type="text" class="form-control bg-light border-0" style="height:20px;font-size:10px;align-item:center"readonly name="grade[]"value="${grd}"></td>
		<td><button type="button" class="btn  btn-danger rem" style="font-size:7px"><i class="fa fa-times"></i></button></td>
	</tr>`);
    }

    let len = document.querySelectorAll(".len");
    if (len.length >= 9) {
        $(".btnAdd").attr("disabled", true);
    }
});


$(document).on('click', '.rem', function(e) {
    e.preventDefault();
    let del_row = $(this).parent().parent();
    $(del_row).remove();
    $(".btnAdd").attr("disabled", false);
});





$(document).on('click', '.rem', function(e) {
    e.preventDefault();
    let del_row = $(this).parent().parent();
    $(del_row).remove();
});


let sno = 1;
$('.sbtnAdd').on("click", function(e) {
    e.preventDefault();
    let sbj2 = $("#ssub").val();
    let grd2 = $("#sgrade").val();

    if (sbj2 == null || grd2 == null) {
        alert("Please select the subject and the grade you obtained in your ssce");
    } else {
        $("#stbody").append(`<tr class="lens">
        <td style="height:20px;font-size:10px;align-item:center">${sno++}<input type="hidden" name="no_sitss[]"value="2"></td>
		<td><input type="text" class="form-control bg-light border-0" style="height:20px;font-size:10px;align-item:center"readonly name="subjects[]"value="${sbj2}"></td>
		<td><input type="text" class="form-control bg-light border-0" style="height:20px;font-size:10px;align-item:center"readonly name="grades[]"value="${grd2}"></td>
		<td><button type="button" class="btn btn-danger srem" style="font-size:7px"><i class="fa fa-times"></i></button></td>
	</tr>`);
    }
    let lens = document.querySelectorAll(".lens");
    if (lens.length >= 9) {
        $(".sbtnAdd").attr("disabled", true);
    }
});


$(document).on('click', '.srem', function(e) {
    e.preventDefault();
    let del_row = $(this).parent().parent();
    $(del_row).remove();
    $(".sbtnAdd").attr("disabled", false);
});


$("#final").change(function() {
    if ($(this).is(":checked")) {
        $("#fsubmit").attr("disabled", false);
    } else {
        $("#fsubmit").attr("disabled", true);
    }
});





// $(document).ready(function() {

//     // $('#checkAll').change(function() {
//     //     if ($(this).is(':checked')) {
//     //         $('input[name="add[]"]').prop('checked', true);
//     //     } else {
//     //         $('input[name="add[]"]').each(function() {
//     //             $(this).prop('checked', false);
//     //         });
//     //     }

//     // });

//     $('.btnc').click(function() {
//         let total = 0;
//         $('.btnc:checked').each(function() {
//             total = total + parseInt($("#unitf").val());
//         });
//         $("#totalUf").val(total.toFixed(3));
//         if (total == 0) {
//             $("#totalUf").val('');
//         } else {
//             $("#totalUf").val(total);
//         }



//     });


//     $('input[name="add[]"]').click(function() {

//         let total_chk = $('input[name="add[]"]').length;
//         let total_chk_c = $('input[name="add[]"]:checked').length;

//         if (total_chk_c == total_chk) {
//             $("#checkAll").prop('checked', true);
//         } else {
//             $("#checkAll").prop('checked', false);

//         }

//     })


//     $('#checkAlls').change(function() {
//         if ($(this).is(':checked')) {
//             $('input[name="adds[]"]').prop('checked', true);
//         } else {
//             $('input[name="adds[]"]').each(function() {
//                 $(this).prop('checked', false);
//             });
//         }
//     })

//     $('input[name="adds[]"]').click(function() {
//         let total_chk = $('input[name="adds[]"]').length;
//         let total_chk_c = $('input[name="adds[]"]:checked').length;

//         if (total_chk_c == total_chk) {
//             $("#checkAlls").prop('checked', true);
//             $("#units").val(sum);
//         } else {
//             $("#checkAlls").prop('checked', false);
//             $("#units").val(sum);
//         }
//     })
// });

$(document).ready(function() {
    $("#second").change(function() {
        if ($("#second").is(":checked")) {
            $(".secSit").attr("disabled", false);
        } else {
            $(".secSit").attr("disabled", true);
        }
    })
    $("#first").change(function() {
        if ($("#first").is(":checked")) {
            $(".fSit").attr("disabled", false);
        } else {
            $(".fSit").attr("disabled", true);
        }
    })

    $("#eng").change(function() {
        $("#engg").val($(this).val());
        // console.log($(this).val());
    });
    $("#mth").change(function() {
        $("#mthg").val($(this).val());
        // console.log($(this).val());
    });

    $("#engs").change(function() {
        $("#enggs").val($(this).val());
        // console.log($(this).val());
    });
    $("#mths").change(function() {
        $("#mthgs").val($(this).val());
        // console.log($(this).val());
    });
});


/*
$("#addform").submit(function(e) { 
    e.preventDefault();
    $("addData").val("Adding...");
    $.ajax({
        url: 'addcourse.php',
        method: 'post',
        data: $(this).serialize(),
        success: function(data) {
            $("#addData").val("Add");
            $("#addform")[0].reset();
            $("#showalert");
        }
    });
})*/