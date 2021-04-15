window.addEventListener("load", () => {
    block = $("div", {
        className: "block"
    });
    document.body.append(block)



    window.addEventListener("mousemove", (event) => {
        block.style.transform = "rotateZ(" + event.pageX + "deg)";
    })










})