const observer = new MutationObserver(() => {
  const messages = Array.from(document.getElementsByClassName("timelineMessage__message"));
  eyeToUnti(messages);
});

observer.observe(document.body, {
  childList: true,
  characterData: true,
  subtree: true
});

const eyeToUnti = nodes => {
  Array.from(nodes).forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      if (text.match(/👁️/)) {
        node.textContent = text.replace("👁️", "💩");
      }
    } else {
      eyeToUnti(node.childNodes);
    }
  });
};