function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ['Ethical Hacker','Penetration Tester', 'Network Admin'];
const element = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const typeloop = async () => {
    while (true){
        let curWord = phrases[curPhraseIndex];
        // console.log(curWord);
        for (let i=0; i<curWord.length; i++) {
            element.innerText = curWord.substring(0, i+1);
            await sleep(sleepTime);
        }

        await sleep(1000);
    
        for (let i=curWord.length; i>0; i--) {
            element.innerText = curWord.substring(0, i-1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime*5);

        if(curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
        }
        else {
            curPhraseIndex++;
        }
    }
}

typeloop();