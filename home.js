const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  // header container

  ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay: 2000,
  });

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header_container h2", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".header_container .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".header_container img", {
    ...scrollRevealOption,
    origin: "right",
  });

  // why container
ScrollReveal().reveal(".why_container .section_header", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".why_container p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".why_container li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
  });
  
  ScrollReveal().reveal(".why_container img", {
    ...scrollRevealOption,
    origin: "left",
  });

  // hero container
ScrollReveal().reveal(".hero__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  // classes container
ScrollReveal().reveal(".classes__image", {
    duration: 1000,
    interval: 500,
  });
  
  // stories container
ScrollReveal().reveal(".stories__card", {
    ...scrollRevealOption,
    interval: 500,
  });

// posts container
ScrollReveal().reveal(".posts__card", {
    ...scrollRevealOption,
    interval: 500,
  });