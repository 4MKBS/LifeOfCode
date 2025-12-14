// Clipboard API basics

// navigator.clipboard.writeText('hello');
// navigator.clipboard.readText().then(console.log);
// Real-world example: Copy button for code snippets
const copyButton = document.getElementById('copy-btn');
const codeSnippet = document.getElementById('code-snippet');

if (copyButton) {
    copyButton.addEventListener('click', async () => {
        try {
            const text = codeSnippet.textContent;
            await navigator.clipboard.writeText(text);
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy Code';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
}

// Real-world example: Paste input handler
const pasteArea = document.getElementById('paste-area');

if (pasteArea) {
    pasteArea.addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            pasteArea.value = text;
        } catch (err) {
            console.error('Failed to read clipboard:', err);
        }
    });
}