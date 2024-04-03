const FILE_CSS_NAME = 'grid.css';
const FILE_CSS_DESKTOP_NAME = 'grid-desktop.css';
const FILE_CSS_MINIFY_NAME = 'grid.min.css';
const FILE_CSS_MINIFY_DESKTOP_NAME = 'grid-desktop.min.css';
const FILE_SASS_NAME = 'grid.scss';
const FILE_SASS_DESKTOP_NAME = 'grid-desktop-first.scss';
const CDN_LINK = 'https://cdn.jsdelivr.net/gh/777hanh777hanh/';
const REPO_NAME = 'grid-css';

const copyButton = document.querySelectorAll('.copy-btn');
const urlResetCSS = {
    minified: CDN_LINK + REPO_NAME + '/assets/css/' + FILE_CSS_MINIFY_NAME,
    original: CDN_LINK + REPO_NAME + '/assets/css/' + FILE_CSS_NAME,
    downloaded: './assets/css/' + FILE_CSS_MINIFY_NAME,
    sass: './assets/sass/' + FILE_SASS_NAME,
    sass_D: './assets/sass/' + FILE_SASS_DESKTOP_NAME,
    minified_D: CDN_LINK + REPO_NAME + '/assets/css/' + FILE_CSS_MINIFY_DESKTOP_NAME,
    original_D: CDN_LINK + REPO_NAME + '/assets/css/' + FILE_CSS_DESKTOP_NAME,
    downloaded_D: './assets/css/' + FILE_CSS_MINIFY_DESKTOP_NAME,
};

const handleCopy = () => {
    const content = document.querySelector('code.code').innerHTML;

    if (content) {
        copyContent(content);
    }
};

copyButton.forEach((button) => {
    button.addEventListener('click', handleCopy);
});

// Call To Action

const addAction = (btn, action) => {
    btn.addEventListener('click', action);
};

const downloadFile = (url, fileName) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = typeof fileName == 'string' ? fileName : FILE_CSS_NAME;
    link.click();
    link.remove();
};

const copyContent = async (content) => {
    await navigator.clipboard.writeText(content);
    console.log('URL copied to clipboard');
};

// MobileFirst Button
const downloadFileBtns = document.querySelectorAll('.download_file');
const copyMinifiedBtns = document.querySelectorAll('.copy_minified');
const copyOriginalBtns = document.querySelectorAll('.copy_original');
const copySassBtns = document.querySelectorAll('.copy_sass');

downloadFileBtns.forEach((btn) => {
    const link = urlResetCSS.downloaded;
    addAction(btn, () => downloadFile(link, FILE_CSS_NAME));
});
copyOriginalBtns.forEach((btn) => {
    const link = urlResetCSS.original;
    addAction(btn, () => copyContent(link));
});
copyMinifiedBtns.forEach((btn) => {
    const link = urlResetCSS.minified;
    addAction(btn, () => copyContent(link));
});
copySassBtns.forEach((btn) => {
    const link = urlResetCSS.sass;
    addAction(btn, () => downloadFile(link, FILE_SASS_NAME));
});

// DesktopFirst Button
const downloadFileBtnDs = document.querySelectorAll('.download_file_D');
const copyMinifiedBtnDs = document.querySelectorAll('.copy_minified_D');
const copyOriginalBtnDs = document.querySelectorAll('.copy_original_D');
const copySassBtnDs = document.querySelectorAll('.copy_sass_D');

downloadFileBtnDs.forEach((btn) => {
    const link = urlResetCSS.downloaded_D;
    addAction(btn, () => downloadFile(link, FILE_CSS_NAME));
});
copyOriginalBtnDs.forEach((btn) => {
    const link = urlResetCSS.original_D;
    addAction(btn, () => copyContent(link));
});
copyMinifiedBtnDs.forEach((btn) => {
    const link = urlResetCSS.minified_D;
    addAction(btn, () => copyContent(link));
});
copySassBtnDs.forEach((btn) => {
    const link = urlResetCSS.sass_D;
    addAction(btn, () => downloadFile(link, FILE_SASS_DESKTOP_NAME));
});
