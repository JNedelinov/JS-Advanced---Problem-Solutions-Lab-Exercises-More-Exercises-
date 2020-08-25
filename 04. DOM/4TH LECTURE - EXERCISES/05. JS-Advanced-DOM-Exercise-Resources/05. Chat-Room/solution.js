function solve() {
   document.querySelector("#send").addEventListener("click", function(e) {
      let textArea = document.querySelector("#chat_input");
      
      if (textArea.value === '') { return; }

      let newDiv = document.createElement("div");
      newDiv.textContent = textArea.value;
      newDiv.classList.add("message");
      newDiv.classList.add("my-message");

      document.querySelector("#chat_messages").appendChild(newDiv);

      textArea.value = '';
   });
}