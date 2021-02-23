$(document).ready(function(){
    
    (function($) {
        // "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#commentForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                var p = window.location.href.split("/");

                var pageName = p[p.length - 1];
                var inputPageName = document.createElement("input");
                inputPageName.name = "pageName";
                inputPageName.value = pageName;
                $(inputPageName).css({"display":"none"});

                form.appendChild(inputPageName);

                $.ajax({
                    url: "server-side-handler.php",
                    data: $(form).serialize(),
                    method: "POST"
                }).done(function (response) {
                    var data = JSON.parse(response);
                    if (data.status == 0) {
                        // success
                        $(".statusMsg").removeClass("d-none")
                        $(".statusMsg").text(`${data.msg}`)
                        
                        var currentPageUrl = window.location.href
                        
                        $("body").load(`${currentPageUrl}`, function (status, response) {
                            $("html, body").animate({ scrollTop: $("#comment-top").position().top }, 1000); 
                            
                        })
                        
                        
                    }else if (data.status == 1) {
                        // error
                        $(".statusMsg").removeClass("d-none")
                        $(".statusMsg").text(`${data.msg}`)
                    }
                })

                

                
                
            }
        })

        // reply comment handling and validation
        $(".submitReplyComment").click(function(e){
            e.stopPropagation();
            var replyForm = this.parentElement
            $(replyForm).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 20
                    }
                },
                messages: {
                    name: {
                        required: "come on, you have a name, don't you?",
                        minlength: "your name must consist of at least 2 characters"
                    },
                    
                    email: {
                        required: "no email, no message"
                    },
                    message: {
                        required: "um...yea, you have to write something to send this form.",
                        minlength: "thats all? really?"
                    }
                },
                submitHandler: function(form) {
                    var p = window.location.href.split("/");
    
                    var pageName = p[p.length - 1];
                    var inputPageName = document.createElement("input");
                    inputPageName.name = "pageName";
                    inputPageName.value = pageName;
                    $(inputPageName).css({"display":"none"});
    
                    form.appendChild(inputPageName);
    
                    $.ajax({
                        url: "server-side-handler.php",
                        data: $(form).serialize(),
                        method: "POST"
                    }).done(function (response) {
                        var data = JSON.parse(response);
                        if (data.status == 0) {
                            // success
                            $(".replyStatusMsg").removeClass("d-none")
                            $(".replyStatusMsg").text(`${data.msg}`)
                            $(form).fadeToggle()       
                            var currentPageUrl = window.location.href
                            $("body").load(`${currentPageUrl}`, function (status, response) { })                   
                            
                        }else if (data.status == 1) {
                            // error
                            $(".replyStatusMsg").removeClass("d-none")
                            $(".replyStatusMsg").text(`${data.msg}`)
                        }
                    })
    
                    
    
                    
                    
                }
            })

        })





        
    })
    
    
 })(jQuery)
})