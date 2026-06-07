const sumOfHryvniInput = document.getElementById(
  "sumOfHryvni",
) as HTMLInputElement;
const sumOfEuroInput = document.getElementById("sumOfEuro") as HTMLInputElement;
const sumOfDollarInput = document.getElementById(
  "sumOfDollar",
) as HTMLInputElement;

const convertarBtn = document.querySelector(
  ".btn-convertar",
) as HTMLButtonElement;

const euroRate: number = 42;
const dollarRate: number = 39;

convertarBtn.addEventListener("click", function (): void {
  const hryvni: number = Number(sumOfHryvniInput.value);

  const euro: number = hryvni / euroRate;
  const dollar: number = hryvni / dollarRate;

  sumOfEuroInput.value = euro.toFixed(2);
  sumOfDollarInput.value = dollar.toFixed(2);
});
