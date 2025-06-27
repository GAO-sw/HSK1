document.addEventListener('DOMContentLoaded', () => {
    const tocItems = document.querySelectorAll('#hsk1-toc .toc-item');
    const lessonContainer = document.getElementById('lesson-container');

    // 函数：加载并显示课程内容
    async function loadLesson(lessonFile) {
        // 如果没有提供课程文件，则直接返回
        if (!lessonFile) {
            lessonContainer.innerHTML = '<p style="text-align:center;">请从目录中选择一课。</p>';
            return;
        }

        const lessonPath = `lessons/${lessonFile}`;

        try {
            // 使用fetch API获取课程文件内容
            const response = await fetch(lessonPath);
            if (!response.ok) {
                // 如果文件未找到或出现其他错误
                throw new Error(`无法加载课程: ${response.statusText}`);
            }
            const lessonHtml = await response.text();
            
            // 将获取到的HTML内容注入到容器中
            lessonContainer.innerHTML = lessonHtml;

            // 更新目录的激活状态
            tocItems.forEach(item => {
                item.classList.toggle('active', item.getAttribute('data-target') === lessonFile);
            });

            // 为新加载的内容中的对话条目添加点击事件
            addDialogueClickListeners();

        } catch (error) {
            console.error('加载课程时出错:', error);
            lessonContainer.innerHTML = `<p style="text-align:center; color:red;">加载课程失败。请检查文件是否存在: ${lessonPath}</p>`;
        }
    }

    // 函数：为对话条目添加显示/隐藏翻译的点击功能
    function addDialogueClickListeners() {
        const dialogueEntries = lessonContainer.querySelectorAll('.dialogue-entry');
        dialogueEntries.forEach(entry => {
            const sourceLangDiv = entry.querySelector('.source-language');
            const translationBlock = entry.querySelector('.translation-block');

            if (sourceLangDiv && translationBlock) {
                // 确保翻译默认是隐藏的
                translationBlock.style.display = 'none';
                
                // 防止重复添加监听器
                if (!sourceLangDiv.hasAttribute('data-listener-added')) {
                    sourceLangDiv.addEventListener('click', () => {
                        translationBlock.style.display = (translationBlock.style.display === 'none' || translationBlock.style.display === '') ? 'block' : 'none';
                    });
                    sourceLangDiv.setAttribute('data-listener-added', 'true');
                }
            }
        });
    }

    // 为目录项添加点击事件
    tocItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetFile = item.getAttribute('data-target');
            loadLesson(targetFile);
        });
    });

    // 页面初始加载时，默认加载第一课
    const firstLesson = tocItems.length > 0 ? tocItems[0].getAttribute('data-target') : null;
    loadLesson(firstLesson);
});
