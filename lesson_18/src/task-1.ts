const firstNumberInput = document.getElementById(
  "firstNumber",
) as HTMLInputElement;
const secondNumberInput = document.getElementById(
  "secondNumber",
) as HTMLInputElement;
const resultInput = document.getElementById("result") as HTMLInputElement;

const plusButton = document.querySelector(".btn-plus") as HTMLButtonElement;
const minusButton = document.querySelector(".btn-minus") as HTMLButtonElement;
const productButton = document.querySelector(
  ".btn-product",
) as HTMLButtonElement;
const divisionButton = document.querySelector(
  ".btn-division",
) as HTMLButtonElement;

plusButton.addEventListener("click", function (): void {
  const a: number = Number(firstNumberInput.value);
  const b: number = Number(secondNumberInput.value);

  resultInput.value = String(a + b);
});

minusButton.addEventListener("click", function (): void {
  const a: number = Number(firstNumberInput.value);
  const b: number = Number(secondNumberInput.value);

  resultInput.value = String(a - b);
});

productButton.addEventListener("click", function (): void {
  const a: number = Number(firstNumberInput.value);
  const b: number = Number(secondNumberInput.value);

  resultInput.value = String(a * b);
});

divisionButton.addEventListener("click", function (): void {
  const a: number = Number(firstNumberInput.value);
  const b: number = Number(secondNumberInput.value);

  if (b === 0) {
    resultInput.value = "";
    document.write("На нуль ділити не можна");
    return;
  }

  resultInput.value = String(a / b);
});
