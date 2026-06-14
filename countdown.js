const examDates = {
    "bihar-apo": new Date("2026-08-15"),
    "haryana-ada": new Date("2026-07-20"),
    "rajasthan-apo": new Date("2026-09-01"),
    "upsc-prelims": new Date("2027-05-30")
};

document.querySelectorAll(".exam-countdown").forEach(box => {

    const exam = box.dataset.exam;
    const examDate = examDates[exam];

    if (!examDate) return;

    const today = new Date();

    const diffTime = examDate - today;

    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let color = "green";

    if (daysLeft <= 90)
        color = "orange";

    if (daysLeft <= 30)
        color = "red";

    box.innerHTML =
        `⏳ ${daysLeft} days left`;

    box.style.color = color;

});
