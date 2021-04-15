window.addEventListener("load", () => {
    document.getElementById("elem").onclick = function() {
        const N = document.getElementById("N").value;
        const M = document.getElementById("M").value;

        console.log(N)
        console.log(M)
    }
});