document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleChat');
  const chatWindow = document.getElementById('devbot-window');

  toggleButton.addEventListener('click', () => {
    toggleButton.remove();                
    chatWindow.classList.remove('hidden'); 
  });

  const form = document.getElementById('chat-form');
  const input = document.getElementById('user-input');
  const output = document.getElementById('chat-output');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userText = input.value.trim();
    if (!userText) return;

    const userLine = document.createElement('div');
    userLine.className = 'bot-line';
    userLine.textContent = `> ${userText}`;
    output.appendChild(userLine);

    const botLine = document.createElement('div');
    botLine.className = 'bot-line';
    botLine.textContent = generateResponse(userText);
    output.appendChild(botLine);

    input.value = '';
    output.scrollTop = output.scrollHeight;
  });

  function generateResponse(command) {
    const cmd = command.toLowerCase();
    switch (cmd) {
      case 'list-services':
        return 'KeyBot: Web Dev • UI Design • Branding • SEO';
      case 'help':
        return 'KeyBot: Available commands: hello, list-services, joke, contact, help';
      default:
        return 'KeyBot: Unknown command. Try \"help\" for options.';
    }
  }
});
