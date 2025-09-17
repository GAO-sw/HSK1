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


    // ========== 新增：可折叠菜单的逻辑 ==========
    const collapsibles = document.querySelectorAll('.level-title');

    collapsibles.forEach(button => {
        button.addEventListener('click', function() {
            // 切换 active class, 用于改变 +/- 图标
            this.classList.toggle('active');

            // 获取内容区域
            const content = this.nextElementSibling;

            // 如果内容区域已展开, 则折叠它
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                // 否则, 展开它 (scrollHeight 是元素内容的总高度)
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    });

});
