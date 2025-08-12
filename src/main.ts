import "./style.css"

const userBodySizeInput = document.getElementById("size") as HTMLInputElement
const userAgeInput = document.getElementById("age") as HTMLInputElement

const smallAnatomy = document.querySelector<HTMLInputElement>('input[value="small"]')
const bigAnatomy = document.querySelector<HTMLInputElement>('input[value="big"]')

const formElement = document.querySelector("form") as HTMLFormElement
// const calculatorButton = document.getElementById("submit") as HTMLButtonElement
const result = document.getElementById("result") as HTMLDivElement

formElement.addEventListener("submit", function (e) {
  e.preventDefault()

  const userBodySizeValue = Number(userBodySizeInput.value)
  const userAgeValue = Number(userAgeInput.value)

  const userSmall = smallAnatomy?.checked
  const userBig = bigAnatomy?.checked

  if (userSmall) {
    const userSmallWeight = userBodySizeValue - 100 + (userAgeValue / 10) * 0.9 * 0.9
    result.innerText = `Dein Idealgewicht ist ${userSmallWeight}`
  } else if (userBig) {
    const userBigWeight = userBodySizeValue - 100 + (userAgeValue / 10) * 0.9 * 1.1
    result.innerText = `Dein Idealgewicht ist ${userBigWeight}`
  }

  // console.log(userSmall)
  // console.log(userBig)
})
