const yearOfBirthInput = document.getElementById(
  "yearOfBirth",
) as HTMLInputElement;
const currentOfYearInput = document.getElementById(
  "currentOfYear",
) as HTMLInputElement;
const ourAgeInput = document.getElementById("ourAge") as HTMLInputElement;

const generateBtn = document.querySelector(
  ".btn-generate",
) as HTMLButtonElement | null;

if (generateBtn) {
  generateBtn.addEventListener("click", function (): void {
    const currentOfYear: number = Number(currentOfYearInput.value);
    const yearOfBirth: number = Number(yearOfBirthInput.value);

    const ourAge: number = currentOfYear - yearOfBirth;

    ourAgeInput.value = String(ourAge);
  });
}
