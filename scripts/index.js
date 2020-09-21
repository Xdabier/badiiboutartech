let isOpen = false;

function openSideNav() {
    isOpen = true;
    document.getElementById('sideBar').style.left = '0';
}

function closeSideNav() {
    if (isOpen) {
        document.getElementById('sideBar').style.left = '-380px';
        isOpen = false;
    }
}

function openEmail() {
    window.open('mailto:bbadii@protonmail.com');
    closeSideNav();
}

function openLink(url) {
    window.open(url, '_blank');
    closeSideNav();
}

function setTime() {
    const NOW = new Date();
    document.getElementById('current-time').innerText = `${NOW.getHours()}:${NOW.getMinutes()}`
}

setTime();