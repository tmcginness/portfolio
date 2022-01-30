const tools = ['Teeth', 'Rusty Scissors', 'Push Mower', 'Battery-Powered Mower', 'Team of Starving Students'];
let currentTool = tools[0];
let currentWallet = 0;
let earningPerDay = 1;
let tool = document.getElementById("tool");
let wallet = document.getElementById("wallet");
let earn = document.getElementById("earn");
let summary = document.getElementById("summary");

// Updates amount in wallet after working 1 day
const workADay = () => {
    currentWallet = currentWallet + earningPerDay;
    wallet.innerHTML = `$${currentWallet}`;
}

// Gives player a blurb of what they just did
const updateSummary = () => {

    summary.innerHTML = `You worked 1 day with your ${currentTool} and earned $${earningPerDay}`;
}

// Upgrades from teeth to scissors if they have money

const upgradeTeeth = () => {

    if (currentWallet > 4 && currentTool == tools[0]) {
        currentWallet = currentWallet - 5;
        earningPerDay = 5;
        earn.innerHTML = `$${earningPerDay}`
        wallet.innerHTML = `$${currentWallet}`
        tool.innerHTML = `You are using rusty scissors`
        summary.innerHTML = `You paid $5 to upgrade from ${tools[0]} to ${tools[1]}`;
        currentTool = tools[1];
    } else if (currentWallet < 4) {
        summary.innerHTML = `You don't have enough money for that!`;
    } else if (currentTool != tools[0]) {
        summary.innerHTML = `You don't need that tool!`;
    }
}

// Upgrades from scissors to push if they have money

const upgradeScissors = () => {

    if (currentWallet > 24 && currentTool == tools[1]) {
        currentWallet = currentWallet - 25;
        earningPerDay = 50;
        earn.innerHTML = `$${earningPerDay}`
        wallet.innerHTML = `$${currentWallet}`
        tool.innerHTML = `You are using a ${tools[2]}!`
        summary.innerHTML = `You paid $25 to upgrade from ${tools[1]} to ${tools[2]}`;
        currentTool = tools[2];
    } else if (currentWallet < 25) {
        summary.innerHTML = `You don't have enough money for that!`;
    } else if (currentTool != tools[1]) {
        summary.innerHTML = `You don't need that tool!`;
    }
}

// Upgrades from push to battery powered if they have money

const upgradeMower = () => {

    if (currentWallet > 249 && currentTool == tools[2]) {
        currentWallet = currentWallet - 250;
        earningPerDay = 100;
        earn.innerHTML = `$${earningPerDay}`
        wallet.innerHTML = `$${currentWallet}`
        tool.innerHTML = `You are using a ${tools[3]}!`
        summary.innerHTML = `You paid $250 to upgrade from ${tools[2]} to ${tools[3]}`;
        currentTool = tools[3];
    } else if (currentWallet < 250) {
        summary.innerHTML = `You don't have enough money for that!`;
    } else if (currentTool != tools[2]) {
        summary.innerHTML = `You don't need that tool!`;
    }
}
// Upgrades from battery powered to a team of starving students if they have money

const upgradeBattery = () => {

    if (currentWallet > 499 && currentTool == tools[3]) {
        currentWallet = currentWallet - 500;
        earningPerDay = 250;
        earn.innerHTML = `$${earningPerDay}`
        wallet.innerHTML = `$${currentWallet}`
        tool.innerHTML = `You are using a ${tools[4]}!`
        summary.innerHTML = `You paid $500 to upgrade from ${tools[3]} to ${tools[4]}`;
        currentTool = tools[4];
    } else if (currentWallet < 500) {
        summary.innerHTML = `You don't have enough money for that!`;
    } else if (currentTool != tools[3]) {
        summary.innerHTML = `You don't need that tool!`;
    }
}

const winnerWinner = () => {
    if (currentWallet > 999 && currentTool == tools[4]) {

        summary.innerHTML = `You Win! Your Landscaping Company Is A Cut Above The Rest!!!`;
        document.getElementById("work").style.display = "none";
        document.getElementById("reset").style.visibility = "visible";
    }
}


const reset = () => {
    window.location.reload();
}