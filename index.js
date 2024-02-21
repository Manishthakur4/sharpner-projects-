<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Board</title>
</head>
<body>
    <div id="messageList">
    </div>
  <form id="messageForm">
    <textarea id="messageInput" placeholder="Type your message"></textarea>
    <button type="button" onclick="addMessage()">Add Message</button>
  </form>

<script>
    function addMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
  
    if (message !== '') {
      localStorage.setItem('latestMessage', message);
  
      messageInput.value = '';
  
      displayMessages();
    }
  }
  
  function displayMessages() {
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = '';
  
    const latestMessage = localStorage.getItem('latestMessage');
  
    if (latestMessage) {
      const messageItem = document.createElement('div');
      
      console.log(latestMessage);
      messageItem.textContent = latestMessage;
      messageList.appendChild(messageItem);
    }
  }
  
  displayMessages();
  
</script>

</body>
</html>
