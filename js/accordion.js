const accordionItemHeaders = document.querySelectorAll(".conditions__head");
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".conditions__head.conditions__head--active");
    if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("conditions__head--active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      currentlyActiveAccordionItemHeader.nextElementSibling.style.marginBottom = 0;
    }
    accordionItemHeader.classList.toggle("conditions__head--active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("conditions__head--active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      accordionItemBody.style.marginBottom = "15px";
    } else {
      accordionItemBody.style.maxHeight = 0;
      accordionItemBody.style.marginBottom = 0;
    }
  });
});