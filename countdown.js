document.querySelectorAll(".exam-countdown").forEach(box => {

    const examId = box.dataset.exam;

    const exam = examData[examId];

    if (!exam) return;

    const today = new Date();

    const difference = exam.date - today;

    const daysLeft = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    let color = "#2e7d32";

    if (daysLeft <= 90)
        color = "#ff9800";

    if (daysLeft <= 30)
        color = "#d32f2f";

    box.innerHTML = `
        <div class="count-title">
            ⏳ ${exam.name}
        </div>

        <div class="count-days"
             style="color:${color}">
             ${daysLeft} Days Remaining
        </div>

        <div class="count-message">
            Stay focused. Every revision matters.
        </div>
    `;

});
