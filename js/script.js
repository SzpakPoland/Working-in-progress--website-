document.getElementById("language-toggle").addEventListener("click", function() {
    let headerText = document.getElementById("header-text");
    if (this.innerText === "EN") {
        this.innerText = "PL";
        headerText.innerText = "Website under construction";
        sidebarKontakt.innerText = "Contact";
    } else {
        this.innerText = "EN";
        headerText.innerText = "Trwają prace nad nową stroną";
        sidebarKontakt.innerText = "Kontakt";
    }
});
