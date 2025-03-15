

document.addEventListener('DOMContentLoaded', () => {
    // 定义包含10组文字的数组（其中第3~10组开发者可自行修改）
    const texts = [
        "人类的幸福和欢乐在于奋斗，而最有价值的是为理想而奋斗！",
        "暗恋是世界上最美丽的爱情。",
        "一个人能否有成就，只看他是否具备自尊心与自信心两个条件。",
        "骄傲是无知的产物。",
        "世上只有一种善，那就是知识，也只有一种恶，那就是无知。",
        "逆境是人类获得知识的最高学府，难题是人们取得智慧之门。",
        "认识自己，方能认识人生。",
        "唯有孤独的人才强大。",
        "知足是天赋的财富，奢侈是人为的贫穷。",
        "如果你能抓住死去的我，想怎么埋葬就怎么埋葬。"
    ];

    let index = 0;
    const typingEl = document.querySelector('.typing-text');

    function runCycle() {
        // 先清除任何内联动画，重置宽度
        typingEl.style.animation = "none";
        typingEl.style.width = '0';
        // 设置当前组文字
        const currentText = texts[index];
        typingEl.textContent = currentText;

        // 计算当前文字的字符数，作为 steps 参数
        const stepsCount = currentText.length;

        // 强制触发 reflow，确保动画重置生效
        void typingEl.offsetWidth;

        // 启动打字动画：根据当前字符数动态设置 steps 参数
        typingEl.style.animation = `typing 4s steps(${stepsCount}) forwards, blink 0.75s step-end infinite`;

        // 4秒打字动画后，再等待3秒（即7秒后）开始删除动画
        setTimeout(() => {
            // 设置删除动画，同样动态设置 steps 参数
            typingEl.style.animation = `deleting 4s steps(${stepsCount}) forwards, blink 0.75s step-end infinite`;
        }, 7000); // 7秒后触发删除动画

        // 删除动画持续4秒，总时间11秒后切换下一组文字
        setTimeout(() => {
            index = (index + 1) % texts.length; // 循环显示文本，如需播放一轮后停止，请自行修改逻辑
            runCycle();
        }, 11000);
    }

    runCycle();
});