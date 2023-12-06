let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    event.preventDefault();
    let country = document.querySelector("select").value;

    if (country === "Doctor") {
        window.open("https://www.practo.com/", "_blank");
    }
    if (country === "Teacher") {
        window.open("https://openeducat.org/feature-online-appointment", "_blank");
    }
    if (country === "Physchologist") {
        window.open("https://www.apollo247.com/specialties/psychology", "_blank");
    }
    if (country === "Mental") {
        window.open("https://www.psychonline.in/mental-health-providers-lp/?gad_source=1&gclid=Cj0KCQiAsburBhCIARIsAExmsu6J12DJ6SHY76tNgn7TOKT9NOVgoSpwJpQwrDITpRTa9EWBZ_Z30CgaApNUEALw_wcB", "_blank");
    }
    if (country === "Counsellor") {
        window.open("https://www.talktoangel.com/?gad_source=1&gclid=Cj0KCQiAsburBhCIARIsAExmsu6J12DJ6SHY76tNgn7TOKT9NOVgoSpwJpQwrDITpRTa9EWBZ_Z30CgaApNUEALw_wcB", "_blank");
    }
});
