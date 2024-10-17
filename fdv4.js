function replaceShortcodes() {
    const shortcodes = {
        fd: { name: '720p', regex: /\[fd id='(.*?)'\]/g, url: 'https://www.fastdrama.icu/p/' },
        egf: { name: 'GDFLIX', regex: /\[egf id='(.*?)'\]/g, url: 'https://new5.gdflix.cfd/file/' },
        egft: { name: 'GDTOT', regex: /\[egt id='(.*?)'\]/g, url: 'https://new7.gdtot.dad/file/' },
    };

    const contentContainers = document.querySelectorAll('.download-links');
    contentContainers.forEach(contentContainer => {
        let content = contentContainer.innerHTML;
        for (const key in shortcodes) {
            if (shortcodes.hasOwnProperty(key)) {
                content = content.replace(shortcodes[key].regex, function(match, id) {
                    return `<a href='${shortcodes[key].url}${id}' target='_blank'>
                                ${shortcodes[key].name}
                            </a>`;
                });
            }
        }
        contentContainer.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', replaceShortcodes);
