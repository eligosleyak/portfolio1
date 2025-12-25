document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const options = document.getElementById("options");
  
    options.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;
  
      const id = e.target.dataset.id;
      const data = portfolioResponses[id];
      if (!data) return;
  
      // Show user message
      const userMsg = document.createElement("div");
      userMsg.className = "message user";
      userMsg.innerText = e.target.innerText;
      chatBox.appendChild(userMsg);
  
      // Show bot response
      const botMsg = document.createElement("div");
      botMsg.className = "message bot";
  
      if (id === "cv" && data.link) {
        botMsg.innerText = data.text;
        const link = document.createElement("a");
        link.href = data.link;
        link.target = "_blank";
        link.className = "cv-link";
        link.innerText = "Download CV";
        botMsg.appendChild(document.createElement("br"));
        botMsg.appendChild(link);
      } else {
        botMsg.innerText = data;
      }
  
      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    });
  });
  