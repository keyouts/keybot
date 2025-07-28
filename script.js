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
      return 'KeyBot: Design • eCommerce • Widgets • SEO';
    case 'eCommerce':
      return 'KeyBot: We provide assistance with setting up eCommerce sites, and migrating data to third party platforms like eBay and Etsy to reach more customers.';
    case 'Design':
      return 'KeyBot: Looking to make your site design cohesive with your brand? We assist with front end development.';
    case 'Widgets':
      return 'KeyBot: Have a widget idea? We can design customized widgets for your site.';
    case 'SEO':
      return 'KeyBot: Want help with your SEO? We assist in improving user experience and providing technical SEO support.';
    case 'help':
      return 'KeyBot: Available commands: eCommerce, Design, Widgets, SEO';
    default:
      return 'KeyBot: Unknown command. Try "help" for options.';
  }
}

});
