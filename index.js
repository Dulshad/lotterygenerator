const mainBtnEle = document.getElementById('main-btn');

mainBtnEle.addEventListener('click', () => {
    let lotteryNumbers = generateRandomNumbers()
    for (let i = 0; i < 5; i+= 1) {
        document.getElementById(`disc-${i}`).innerText = lotteryNumbers[i].toString();
    }
})

function generateRandomNumbers() {
    let randomNumbers = new Set();
    while (randomNumbers.size < 5) {
        randomNumbers.add(Math.floor(Math.random() * 90) + 1);
    }

    return Array.from(randomNumbers).sort(sortNumbers)
}

function sortNumbers(a,b) {
    return a > b ? 1 : b > a ? -1 : 0;
}