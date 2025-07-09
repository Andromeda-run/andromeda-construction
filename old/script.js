function faqToggle(id) {
    var item = document.getElementsByClassName("faq-item")[id];

    if (item.classList.contains("shown")) {
        item.classList.remove("shown");
        item.children[0].children[0].innerText = "+";
    } else {
        item.classList.add("shown");
        item.children[0].children[0].innerText = "-";
    }
}