document.addEventListener('DOMContentLoaded', () => {

    // Dialogue entry click to show/hide translation
    const dialogueEntries = document.querySelectorAll('.dialogue-entry');

    dialogueEntries.forEach(entry => {
        const sourceLangDiv = entry.querySelector('.source-language'); // Click on this part
        const translationBlock = entry.querySelector('.translation-block');

        if (sourceLangDiv && translationBlock) {
            // Ensure translation is hidden initially by JS as a fallback
            translationBlock.style.display = 'none';

            sourceLangDiv.addEventListener('click', () => {
                if (translationBlock.style.display === 'none' || translationBlock.style.display === '') {
                    translationBlock.style.display = 'block';
                } else {
                    translationBlock.style.display = 'none';
                }
            });
        }
    });

    // If you add interactive elements to Pinyin sections later, their JS will go here.
    // For now, Pinyin sections are static text and tables.

});
