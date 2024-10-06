document.addEventListener("DOMContentLoaded", function () {
  const applyButton = document.getElementById("applyButton");

  // Ensure no duplicate event listeners
  applyButton.removeEventListener("click", applyFunctions);
  applyButton.addEventListener("click", applyFunctions);
});

function applyFunctions() {
  const selectedFunction = document.querySelector('input[name="function"]:checked').value;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Inject the script and handle prompt logic per click
    chrome.tabs.executeScript(tabs[0].id, { code: `
      if (!window.promptActive) {
        window.promptActive = true; // Prevent duplicate prompts within the same click
        // Trigger prompt and handle its display here
        console.log('Function with prompt is running');
        
        setTimeout(() => { window.promptActive = false; }, 0); // Reset prompt status after execution
      }
    ` });
    
    // Send the message to content script with selected function
    chrome.tabs.sendMessage(tabs[0].id, { functionToApply: selectedFunction });
  });
}
