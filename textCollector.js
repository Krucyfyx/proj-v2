let collectedData = [];

// Create a TreeWalker to traverse the DOM and collect text content and CSS properties
let walker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT,
  {
    acceptNode: (node) => {
      // Only accept text nodes that have non-empty content
      if (node.textContent.trim().length > 0) {
        // Check if the parent element is already processed
        if (
          node.parentElement &&
          !collectedData.includes(node.parentElement)
        ) {
          const elementData = {
            text: node.textContent.trim(),
            css: window.getComputedStyle(node.parentElement), // Store the CSS properties here if needed
          };
          collectedData.push(elementData); // Store the text content and CSS properties
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
      } else {
        return NodeFilter.FILTER_SKIP;
      }
    },
  },
  false
);

// Loop through the elements and collect the text content and CSS properties
while (walker.nextNode()) {
  // No need to store the text node itself, only store its content and CSS properties
}

localStorage.setItem("collectedData", JSON.stringify(collectedData));




