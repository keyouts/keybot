document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleChat');
  const chatWindow = document.getElementById('devbot-window');
  const closeChatBtn = document.getElementById('closeChatBtn');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('user-input');
  const output = document.getElementById('chat-output');

  toggleButton.addEventListener('click', () => {
    chatWindow.classList.remove('hidden');
    toggleButton.classList.add('hidden');
    input.focus();

    const welcomeLine = document.createElement('div');
    welcomeLine.className = 'bot-line';
    output.appendChild(welcomeLine);

    typeText(
      welcomeLine,
      'KeyBot: Hello, want to know more about our services? Enter one of the following: Design • eCommerce • Widgets • SEO • Pricing',
      40
    );
  });

  closeChatBtn.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
    toggleButton.classList.remove('hidden');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userText = input.value.trim();
    if (!userText) return;

    const userLine = document.createElement('div');
    userLine.className = 'bot-line';
    userLine.textContent = `> ${userText}`;
    output.appendChild(userLine);

    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'bot-line';
    typingIndicator.textContent = 'KeyBot is typing...';
    output.appendChild(typingIndicator);

    const botLine = document.createElement('div');
    botLine.className = 'bot-line';
    output.appendChild(botLine);

    setTimeout(() => {
      typingIndicator.remove();
      typeText(botLine, generateResponse(userText), 40);
    }, 600);

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
        return 'KeyBot: Design • eCommerce • Widgets • SEO • Pricing';
      case 'eCommerce':
        return 'KeyBot: We provide assistance with setting up eCommerce sites, and migrating data to third party platforms like eBay and Etsy to reach more customers.';
      case 'ecommerce':
        return 'KeyBot: We provide assistance with setting up eCommerce sites, and migrating data to third party platforms like eBay and Etsy to reach more customers.';
      case 'Design':
        return 'KeyBot: Looking to make your site design cohesive with your brand? We assist with front end development.';
      case 'design':
        return 'KeyBot: Looking to make your site design cohesive with your brand? We assist with front end development.';
      case 'Widgets':
        return 'KeyBot: Have a widget idea? We can provide custom code for your site.';
      case 'widgets':
        return 'KeyBot: Have a widget idea? We can provide custom code for your site.';
      case 'SEO':
        return 'KeyBot: Want help with your SEO? We assist in improving user experience and providing technical SEO support.';
      case 'seo':
        return 'KeyBot: Want help with your SEO? We assist in improving user experience and providing technical SEO support.';
      case 'Pricing':
        return 'We offer structured, per hour pricing for small businesses not looking to commit to a contract.';
      case 'pricing':
        return 'We offer structured, per hour pricing for small businesses not looking to commit to a contract.';
      case 'Help':
        return 'KeyBot: Available commands: eCommerce, Design, Widgets, SEO';
      case 'help':
        return 'KeyBot: Available commands: eCommerce, Design, Widgets, SEO';
      default:
        return 'KeyBot: Unknown command. Try "help" for options.';
    }
  }
});

