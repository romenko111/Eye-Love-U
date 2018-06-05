document.addEventListener("DOMSubtreeModified", function (event) {
  const messages = Array.from(document.getElementsByClassName("timelineMessage__message"));
  eyeToUnti(messages);
});

const eyeToUnti = (nodes) => {
  Array.from(nodes).forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      if (text.match(/👁️/)) {
        node.textContent = text.replace("👁️", "💩");
      }
    } else {
      eyeToUnti(node.childNodes)
    }
  });
}