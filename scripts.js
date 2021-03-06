// change play speed by clicking speed setting element
function changePlaybackRate(speed) {
    let setting = document.getElementsByClassName("ytp-button ytp-settings-button")[0];

    setting.click();
    selectSpeedSetting();
    selectSpeed(speed);
    setting.click();
}

function selectSpeedSetting() {
    Array.from(getSettingElement()).find(x => x.textContent == "再生速度").click();
}

function selectSpeed(speed) {
    Array.from(getSettingElement()).find(x => x.textContent == speed).click();
    console.info("INFO:  Change playback speed to: " + speed);
}

function getSettingElement() {
    // this element actually has settings other than ones related to playback rate
    return document.getElementsByClassName("ytp-menuitem-label");
}

window.onload = () => {
    changePlaybackRate("標準");

    // It may not load speed settings if after clicked a link and moved.
    // So setting the speed when on clicking the link.
    let videoLinks = document.getElementsByClassName("style-scope ytd-watch-next-secondary-results-renderer");
    Array.from(videoLinks).map(x => x.onclick = () => changePlaybackRate("標準"));
};
