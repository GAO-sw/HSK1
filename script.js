document.addEventListener('DOMContentLoaded', () => {

    // --- HSK1 Lesson Tab/Content Switching Logic ---
    const hsk1TocItems = document.querySelectorAll('#hsk1-toc .toc-item');
    const hsk1LessonContents = document.querySelectorAll('.lesson-content');

    function showLesson(targetId) {
        // 1. Deactivate all ToC items and hide all lesson contents
        hsk1TocItems.forEach(item => {
            item.classList.remove('active');
        });
        hsk1LessonContents.forEach(content => {
            content.classList.remove('active-content');
            content.style.display = 'none'; // Explicitly hide
        });

        // 2. Activate the clicked/target ToC item
        const activeTocItem = document.querySelector(`#hsk1-toc .toc-item[data-target="${targetId}"]`);
        if (activeTocItem) {
            activeTocItem.classList.add('active');
        }

        // 3. Show the target lesson content
        const targetLesson = document.getElementById(targetId);
        if (targetLesson) {
            targetLesson.classList.add('active-content');
            targetLesson.style.display = 'block'; // Explicitly show
        } else {
            console.error('Target lesson content not found:', targetId);
        }
    }

    // Add click listeners to ToC items
    hsk1TocItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            showLesson(targetId);
        });
    });

    // Determine which lesson to show on initial load
    // Option 1: If a lesson already has 'active-content' in HTML (e.g., for deeplinking or remembering state)
    let initiallyActiveLessonId = null;
    const preActiveLesson = document.querySelector('.lesson-content.active-content');
    if (preActiveLesson) {
        initiallyActiveLessonId = preActiveLesson.id;
    } else if (hsk1TocItems.length > 0) {
        // Option 2: Default to the first lesson in the ToC
        initiallyActiveLessonId = hsk1TocItems[0].getAttribute('data-target');
    }

    if (initiallyActiveLessonId) {
        showLesson(initiallyActiveLessonId);
    } else {
        // Fallback if no lessons are defined (though unlikely with your structure)
        console.warn("No lessons found to display initially.");
    }


    // Dialogue entry click to show/hide translation
    const dialogueEntries = document.querySelectorAll('.dialogue-entry');

    dialogueEntries.forEach(entry => {
        const sourceLangDiv = entry.querySelector('.source-language');
        const translationBlock = entry.querySelector('.translation-block');

        if (sourceLangDiv && translationBlock) {
            translationBlock.style.display = 'none'; // Ensure hidden

            sourceLangDiv.addEventListener('click', () => {
                translationBlock.style.display = (translationBlock.style.display === 'none' || translationBlock.style.display === '') ? 'block' : 'none';
            });
        }
    });

});
