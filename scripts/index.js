let isOpen = false;

function openSideNav() {
    isOpen = true;
    document.getElementById('sideBar').style.left = '0';
}

function closeSideNav() {
    if (isOpen) {
        document.getElementById('sideBar').style.left = '-300px';
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