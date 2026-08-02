document.addEventListener("DOMContentLoaded", function () {

    const cpu = document.getElementById("cpuArchitecture");

    if (!cpu) return;

    cpu.innerHTML = `
    <div class="cpu-box">

        <h2>🖥️ CPU Architecture</h2>

        <div class="cpu-grid">

            <button class="cpu-card" data-info="The Control Unit (CU) fetches instructions, decodes them and controls the execution of every operation inside the computer.">
                Control Unit (CU)
            </button>

            <button class="cpu-card" data-info="The Arithmetic Logic Unit (ALU) performs arithmetic operations (+, −, ×, ÷) and logical comparisons.">
                ALU
            </button>

            <button class="cpu-card" data-info="Registers are the fastest memory inside the CPU used to temporarily store data and instructions.">
                Registers
            </button>

        </div>

        <div id="cpuInfo" class="cpu-info">
            👆 Click any component to learn about it.
        </div>

    </div>
    `;

    const cards = document.querySelectorAll(".cpu-card");
    const info = document.getElementById("cpuInfo");

    cards.forEach(card => {

        card.addEventListener("click", function () {

            info.innerHTML = this.dataset.info;

        });

    });

});
