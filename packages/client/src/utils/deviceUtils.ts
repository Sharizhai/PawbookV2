export function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i;
    // return regex.test(navigator.userAgent);
    const isUserAgentMobile = regex.test(navigator.userAgent);
    const isScreenSizeMobile = window.innerWidth <= 768;
    return isUserAgentMobile || isScreenSizeMobile;
}