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

});```

---

**操作指南:**

1.  用上面提供的代码替换您项目中对应的 `index.html`, `style.css`, 和 `script.js` 文件的全部内容。
2.  保存文件并刷新您的网页。
3.  您现在应该能看到一个深色的 "HSK1" 标题栏，HSK1的课程默认是隐藏的。
4.  点击 "HSK1" 标题栏，课程列表会平滑地展开；再次点击，列表会收起。

现在，您的目录结构已经准备好了。请提供HSK2第一课的内容，我会为您创建新的课程文件并更新主目录。
