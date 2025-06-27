document.addEventListener('DOMContentLoaded', () => {

    // Logic for Dialogue Entries (works in lesson pages)
    const dialogueEntries = document.querySelectorAll('.dialogue-entry');
    dialogueEntries.forEach(entry => {
        const sourceLangDiv = entry.querySelector('.source-language');
        const translationBlock = entry.querySelector('.translation-block');

        if (sourceLangDiv && translationBlock) {
            // Hide translation initially by default
            translationBlock.style.display = 'none'; 

            sourceLangDiv.addEventListener('click', () => {
                const isHidden = translationBlock.style.display === 'none' || translationBlock.style.display === '';
                translationBlock.style.display = isHidden ? 'block' : 'none';
            });
        }
    });

    // Logic for Exercise Sentences (works in exercises.html)
    const exerciseSentences = document.querySelectorAll('.exercise-sentence');
    exerciseSentences.forEach(sentence => {
        const translation = sentence.nextElementSibling; // Gets the translation right after it
        if (translation && translation.classList.contains('exercise-translation')) {
             // The translation is already hidden by inline style, no need to hide again.
            sentence.addEventListener('click', () => {
                const isHidden = translation.style.display === 'none' || translation.style.display === '';
                translation.style.display = isHidden ? 'block' : 'none';
            });
        }
    });

});
