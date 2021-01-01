javascript: (() => {
    const link = window.location.href;
    const title = document.title;
    const md = "[" + title + "]" + "(" + link + ")";
    let textArea = document.createElement("textarea");
    textArea.value = md
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    console.log("Markdown link " + textArea.value + " has been copied to your clipboard!");
    textArea.remove();
})();
