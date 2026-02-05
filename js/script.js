$(document).ready(function () {
  console.log("jQuery cargado y página lista");

  // Crear modal de galería
  const modalHTML = `
        <div id="gallery-modal" class="modal-overlay">
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img id="modal-image" src="" alt="Imagen ampliada">
                <div class="modal-caption"></div>
                <div class="modal-navigation">
                    <button id="prev-image" class="nav-btn">&#10094; Anterior</button>
                    <button id="next-image" class="nav-btn">Siguiente &#10095;</button>
                </div>
            </div>
        </div>
    `;
  $("body").append(modalHTML);

  let currentImageIndex = 0;
  const galleryImages = $(".galeria-item");

  // EVENTO 1: Click en imágenes de la galería
  $(".galeria-item img").on("click", function () {
    currentImageIndex = $(this).closest(".galeria-item").index();
    openModal(currentImageIndex);
  });

  // EVENTO 2: Click en cerrar modal
  $(".modal-close, .modal-overlay").on("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  // EVENTO 3: Navegación entre imágenes (Anterior)
  $("#prev-image").on("click", function (e) {
    e.stopPropagation();
    currentImageIndex =
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateModalImage(currentImageIndex);
  });

  // EVENTO 4: Navegación entre imágenes (Siguiente)
  $("#next-image").on("click", function (e) {
    e.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateModalImage(currentImageIndex);
  });

  // Función para abrir el modal
  function openModal(index) {
    updateModalImage(index);
    $("#gallery-modal").fadeIn(300);
    $("body").css("overflow", "hidden");
  }

  // Función para cerrar el modal
  function closeModal() {
    $("#gallery-modal").fadeOut(300);
    $("body").css("overflow", "auto");
  }

  // Función para actualizar imagen del modal
  function updateModalImage(index) {
    const selectedItem = galleryImages.eq(index);
    const imgSrc = selectedItem.find("img").attr("src");
    const caption = selectedItem.find("figcaption").text();

    $("#modal-image").attr("src", imgSrc).attr("alt", caption);
    $(".modal-caption").text(caption);
  }

  // EVENTO 5: Cerrar modal con tecla ESC
  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && $("#gallery-modal").is(":visible")) {
      closeModal();
    }
  });

  // Añadir botones de toggle a las secciones
  $("#experiencia h1, #habilidades h2").each(function () {
    $(this)
      .css("cursor", "pointer")
      .append(' <span class="toggle-icon">▼</span>');
  });

  // EVENTO 6: Click para mostrar/ocultar secciones
  $("#experiencia h1").on("click", function () {
    const content = $("#experiencia").find("article, hr").not("h1");
    content.slideToggle(400);
    $(this)
      .find(".toggle-icon")
      .text(content.is(":visible") ? "▼" : "▶");
  });

  $("#habilidades h2").on("click", function () {
    const content = $("#habilidades ul");
    content.slideToggle(400);
    $(this)
      .find(".toggle-icon")
      .text(content.is(":visible") ? "▼" : "▶");
  });

  // Inicializar barras en 0
  $("progress").each(function () {
    $(this).data("target-value", $(this).val());
    $(this).val(0);
  });

  // EVENTO 7: Animación al hacer scroll (Intersection Observer simulado con scroll)
  function animateProgressBars() {
    const skillsSection = $("#habilidades");
    const scrollTop = $(window).scrollTop();
    const sectionOffset = skillsSection.offset().top;
    const windowHeight = $(window).height();

    if (scrollTop + windowHeight > sectionOffset + 100) {
      $("progress").each(function () {
        const targetValue = $(this).data("target-value");
        if ($(this).val() < targetValue) {
          $(this).animate({ value: targetValue }, 1500);
        }
      });
      // Quitar el evento una vez animado
      $(window).off("scroll", animateProgressBars);
    }
  }

  $(window).on("scroll", animateProgressBars);

  if ($("#contacto form").length > 0) {
    $('<div id="form-messages" class="form-messages"></div>').insertBefore(
      "#contacto form",
    );

    // EVENTO 8: Focus en campos del formulario
    $("#contacto input, #contacto textarea").on("focus", function () {
      $(this).css({
        "border-color": "#4facfe",
        "box-shadow": "0 0 0 3px rgba(79, 172, 254, 0.3)",
      });
    });

    // EVENTO 9: Blur
    $("#contacto input, #contacto textarea").on("blur", function () {
      $(this).css({
        "border-color": "#dfe6e9",
        "box-shadow": "none",
      });
      validateField($(this));
    });

    // EVENTO 10: Submit del formulario
    $("#contacto form").on("submit", function (e) {
      e.preventDefault();

      let isValid = true;
      const formFields = $(this).find("input[required], textarea[required]");

      // Validar todos los campos
      formFields.each(function () {
        if (!validateField($(this))) {
          isValid = false;
        }
      });

      if (isValid) {
        showMessage(
          "¡Mensaje enviado correctamente! Te contactaremos pronto.",
          "success",
        );
        $(this)[0].reset();

        // Simular envío
        setTimeout(function () {
          $("#form-messages").fadeOut(300, function () {
            $(this).empty().show();
          });
        }, 3000);
      } else {
        showMessage(
          "Por favor, corrige los errores en el formulario.",
          "error",
        );
      }
    });

    // Función de validación de campo individual
    function validateField($field) {
      const value = $field.val().trim();
      const fieldName = $field.attr("name");
      let isValid = true;
      let errorMsg = "";
      $field.next(".field-error").remove();

      if (value === "") {
        errorMsg = "Este campo es obligatorio";
        isValid = false;
      } else if (fieldName === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMsg = "Por favor, introduce un email válido";
          isValid = false;
        }
      } else if (fieldName === "nombre" && value.length < 2) {
        errorMsg = "El nombre debe tener al menos 2 caracteres";
        isValid = false;
      } else if (fieldName === "mensaje" && value.length < 10) {
        errorMsg = "El mensaje debe tener al menos 10 caracteres";
        isValid = false;
      }

      if (!isValid) {
        $field.css("border-color", "#d53927");
        $('<span class="field-error">' + errorMsg + "</span>").insertAfter(
          $field,
        );
      } else {
        $field.css("border-color", "#14b858");
      }

      return isValid;
    }

    // Función para mostrar mensajes generales
    function showMessage(message, type) {
      const messageClass =
        type === "success" ? "message-success" : "message-error";
      $("#form-messages")
        .removeClass("message-success message-error")
        .addClass(messageClass)
        .html("<p>" + message + "</p>")
        .hide()
        .fadeIn(300);
    }
  }

  // EVENTO 11: Click en enlaces de navegación interna
  $('a[href^="#"]').on("click", function (e) {
    const target = $(this).attr("href");

    if (target !== "#" && $(target).length > 0) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - 80,
        },
        600,
        "swing",
      );
    }
  });

  // EVENTO 12: Hover en tarjetas de experiencia
  $("#experiencia article")
    .on("mouseenter", function () {
      $(this).css({
        "background-color": "#f8fafc",
        padding: "1rem",
        "border-radius": "0.5rem",
        transition: "all 0.3s ease",
      });
    })
    .on("mouseleave", function () {
      $(this).css({
        "background-color": "transparent",
        padding: "0",
      });
    });

  // EVENTO 13: Hover en iconos de redes sociales
  $("#social img")
    .on("mouseenter", function () {
      $(this).css("transform", "scale(1.2) rotate(5deg)");
    })
    .on("mouseleave", function () {
      $(this).css("transform", "scale(1) rotate(0deg)");
    });

  // Crear botón dinámicamente
  $("body").append('<button id="back-to-top" title="Volver arriba">↑</button>');

  // EVENTO 14: Mostrar/ocultar botón según scroll
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("#back-to-top").fadeIn(300);
    } else {
      $("#back-to-top").fadeOut(300);
    }
  });

  // EVENTO 15: Click en botón volver arriba
  $("#back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  if ($("#mensaje").length > 0) {
    const maxChars = 500;
    const counterHTML =
      '<div id="char-counter" style="text-align: right; font-size: 0.85rem; color: #777; margin-top: 0.25rem;">0 / ' +
      maxChars +
      " caracteres</div>";
    $(counterHTML).insertAfter("#mensaje");

    // EVENTO 16: Input en textarea
    $("#mensaje").on("input", function () {
      const currentLength = $(this).val().length;
      $("#char-counter").text(currentLength + " / " + maxChars + " caracteres");

      if (currentLength > maxChars) {
        $("#char-counter").css("color", "#e74c3c");
        $(this).val($(this).val().substring(0, maxChars));
      } else if (currentLength > maxChars * 0.9) {
        $("#char-counter").css("color", "#f39c12");
      } else {
        $("#char-counter").css("color", "#777");
      }
    });
  }

  // EVENTO 17: Hover en barras de progreso para mostrar tooltip
  $("progress, meter").each(function () {
    const percentage = Math.round(($(this).val() / $(this).attr("max")) * 100);
    $(this).attr("title", "Nivel: " + percentage + "%");

    $(this)
      .on("mouseenter", function () {
        const tooltip = $(
          '<div class="skill-tooltip">' + percentage + "%</div>",
        );
        $(this).after(tooltip);
        tooltip.fadeIn(200);
      })
      .on("mouseleave", function () {
        $(this)
          .next(".skill-tooltip")
          .fadeOut(200, function () {
            $(this).remove();
          });
      });
  });

  // Añadir clase inicial a secciones
  $("main section").addClass("fade-in-section");

  // EVENTO 18: Scroll para animar secciones
  function revealSections() {
    $(".fade-in-section").each(function () {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom > elementTop + 50) {
        $(this).addClass("section-visible");
      }
    });
  }

  $(window).on("scroll", revealSections);
  revealSections();

  console.log("Todos los elementos interactivos cargados correctamente");
  console.log($(".galeria-item").length + " imágenes en galería interactiva");
  console.log("Formulario cargado");
  console.log($("progress").length + " barras de progreso animadas");
});
