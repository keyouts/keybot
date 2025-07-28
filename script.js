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
    output.appendChild(botLine);

    typeText(botLine, generateResponse(userText), 40);

    input.value = '';
    output.scrollTop = output.scrollHeight;
  });

  function typeText(element, text, speed = 50) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  function generateResponse(command) {
    const cmd = command.toLowerCase();
    switch (cmd) {
      case 'list-services':
        return 'KeyBot: Design • eCommerce • Widgets • SEO';
      case 'ecommerce':
        return 'KeyBot: We provide assistance with setting up eCommerce sites, and migrating data to third party platforms like eBay and Etsy to reach more customers.';
      case 'design':
        return 'KeyBot: Looking to make your site design cohesive with your brand? We assist with front end development.';
      case 'widgets':
        return 'KeyBot: Have a widget idea? We can design customized widgets for your site.';
      case 'seo':
        return 'KeyBot: Want help with your SEO? We assist in improving user experience and providing technical SEO support.';
      case 'help':
        return 'KeyBot: Available commands: eCommerce, Design, Widgets, SEO';
      default:
        return 'KeyBot: Unknown command. Try "help" for options.';
    }
  }
});

