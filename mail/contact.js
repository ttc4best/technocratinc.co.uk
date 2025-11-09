$(function () {
    const $form = $("#contactForm");
    const $submitBtn = $("#sendMessageButton");
    const $successBox = $("#success");

    $form.find("input, textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function () {
            // Optional: handle client-side validation errors
        },
        submitSuccess: function (form, event) {
            event.preventDefault();

            const formData = {
                name: $("#name").val(),
                email: $("#email").val(),
                subject: $("#subject").val(),
                message: $("#message").val()
            };

            $submitBtn.prop("disabled", true);

            $.ajax({
                url: 'mail/contact.php',
                type: "POST",
                data: formData,
                cache: false,
                success: function () {
                    $successBox.html(`
                        <div class="alert alert-success">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <strong>Your message has been sent.</strong>
                        </div>
                    `);
                    $form.trigger("reset");
                },
                error: function () {
                    $successBox.html(`
                        <div class="alert alert-danger">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <strong>Sorry ${formData.name}, it seems our mail server is not responding. Please try again later!</strong>
                        </div>
                    `);
                    $form.trigger("reset");
                },
                complete: function () {
                    setTimeout(() => {
                        $submitBtn.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        }
    });

    $("a[data-toggle='tab']").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

    $("#name").focus(function () {
        $successBox.html('');
    });
});
