/** 
 * 游戏计数器
 * @type {number}
 */
let score = 0;

/** 
 * 当前点击次数
 * @type {number}
 */
let currentClicks = 0;

/** 
 * 剩余时间
 * @type {number}
 */
let remainingTime = 10;

/** 
 * 游戏时间
 * @type {number}
 */
const gameDuration = 10;

/** 
 * 开始游戏
 */
function startGame() {
    score = 0;
    currentClicks = 0;
    remainingTime = gameDuration;
    document.getElementById('score').innerText = score;
    document.getElementById('currentClicks').innerText = currentClicks;
    document.getElementById('remainingTime').innerText = remainingTime;
    document.getElementById('message').innerText = '';
    
    const button = document.getElementById('clickButton');
    button.disabled = false;

    const timer = setInterval(() => {
        remainingTime--;
        document.getElementById('remainingTime').innerText = remainingTime;
        if (remainingTime <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

/** 
 * 点击按钮时增加分数和当前点击次数
 */
document.getElementById('clickButton').addEventListener('click', function() {
    score++;
    currentClicks++;
    document.getElementById('score').innerText = score;
    document.getElementById('currentClicks').innerText = currentClicks;
});

/** 
 * 结束游戏
 */
function endGame() {
    const button = document.getElementById('clickButton');
    button.disabled = true;
    document.getElementById('message').innerText = `游戏结束！你的得分是: ${score}`;
}

// 开始游戏
startGame();
