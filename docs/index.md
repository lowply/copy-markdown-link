# Copy markdown link bookmarklet

Drag this link to your bookmark bar to save the bookmarklet:

[Copy markdown link](javascript:(()=%3E%7Bconst%20e=window.location.href,o=%22%5B%22+document.title+%22%5D(%22+e+%22)%22;let%20t=document.createElement(%22textarea%22);t.value=o,document.body.appendChild(t),t.select(),document.execCommand(%22copy%22),console.log(%22Markdown%20link%20%22+t.value+%22%20has%20been%20copied%20to%20your%20clipboard!%22),t.remove()%7D)();)

See [github.com/lowply/copy-markdown-link](https://github.com/lowply/copy-markdown-link) for more information.
