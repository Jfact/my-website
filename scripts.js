const languages = {
  en: 'en',
  ru: 'ru'
};

const language = {
  welcome: {
    [languages.ru]: "Добро пожаловать",
    [languages.en]: "Welcome"
  },
  welcomeSubtitle: {
    [languages.ru]: "Профессиональные услуги по созданию контента",
    [languages.en]: "Professional content creation services"
  },
  services: {
    [languages.ru]: "Услуги",
    [languages.en]: "Services"
  },
  order: {
    [languages.ru]: "Заказать",
    [languages.en]: "Order"
  },
  contact: {
    [languages.ru]: "Контакты",
    [languages.en]: "Contact"
  },
  textWriting: {
    [languages.ru]: "Написание текста под ключ",
    [languages.en]: "Text Writing"
  },
  textWritingDescription: {
    [languages.ru]: "Профессиональное написание текста для различных нужд.",
    [languages.en]: "Professional text writing for various needs."
  },
  poetryWriting: {
    [languages.ru]: "Написание стихов и историй",
    [languages.en]: "Poetry and Story Writing"
  },
  poetryWritingDescription: {
    [languages.ru]: "Создание оригинальных стихов и историй по вашему запросу.",
    [languages.en]: "Creation of original poems and stories upon request."
  },
  imageCreation: {
    [languages.ru]: "Создание уникальных изображений",
    [languages.en]: "Unique Image Creation"
  },
  imageCreationDescription: {
    [languages.ru]: "Разработка эксклюзивных визуальных материалов.",
    [languages.en]: "Development of exclusive visual materials."
  },
  musicCreation: {
    [languages.ru]: "Создание музыки или аккомпанировки",
    [languages.en]: "Music and Accompaniment Creation"
  },
  musicCreationDescription: {
    [languages.ru]: "Написание оригинальной музыки или создание аккомпанемента.",
    [languages.en]: "Original music writing or accompaniment creation."
  },
  webCreation: {
    [languages.ru]: "Создание веб-страниц и приложений",
    [languages.en]: "Web Pages and Applications"
  },
  webCreationDescription: {
    [languages.ru]: "Разработка простых и сложных веб-приложений.",
    [languages.en]: "Development of simple and complex web applications."
  },
  orderForm: {
    [languages.ru]: "Форма заказа",
    [languages.en]: "Order Form"
  },
  name: {
    [languages.ru]: "Имя",
    [languages.en]: "Name"
  },
  email: {
    [languages.ru]: "Email",
    [languages.en]: "Email"
  },
  selectService: {
    [languages.ru]: "Выберите услугу",
    [languages.en]: "Select a Service"
  },
  orderDetails: {
    [languages.ru]: "Детали заказа",
    [languages.en]: "Order Details"
  },
  submitOrder: {
    [languages.ru]: "Отправить заказ",
    [languages.en]: "Submit Order"
  },
  footerText: {
    [languages.ru]: "© 2024 Мои Услуги. Все права защищены.",
    [languages.en]: "© 2024 My Services. All rights reserved."
  }
};

document.querySelector('#orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Заказ отправлен!');
  // Здесь можно добавить отправку формы на сервер или другие действия
});

function autoExpand(textarea) {
  // Минимальное количество строк
  const minRows = 5;

  // Сначала сбрасываем высоту до начального состояния, чтобы вычислить новую высоту корректно
  textarea.style.height = 'auto';

  // Устанавливаем количество строк по количеству видимых строк, но не меньше минимального
  textarea.rows = Math.max(minRows, textarea.value.split('\n').length);

  // Устанавливаем новую высоту
  textarea.style.height = textarea.scrollHeight + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
  const defaultLanguage = languages.ru;
  setLanguage(defaultLanguage);

  document.getElementById('languageSwitcher').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    if (Object.values(languages).includes(selectedLanguage)) {
      setLanguage(selectedLanguage);
    } else {
      throw new Error('Language is not supported');
    }
  });
});

function setLanguage(languageCode) {
  const setTextContent = (selector, text) => {
    console.log(`Setting content for selector: ${selector} with text: ${text}`);
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = text;
      console.log(`Updated element:`, element);
    } else {
      console.warn(`Element not found for selector: ${selector}`);
    }
  };

  // Log the languageCode being used
  console.log(`Setting language to: ${languageCode}`);

  setTextContent('h1', language.welcome[languageCode]);
  setTextContent('header p', language.welcomeSubtitle[languageCode]);
  setTextContent('nav ul li:nth-child(1) a', language.services[languageCode]);
  setTextContent('nav ul li:nth-child(2) a', language.order[languageCode]);
  setTextContent('nav ul li:nth-child(3) a', language.contact[languageCode]);
  setTextContent('#services h2', language.services[languageCode]);

  const services = document.querySelectorAll('.service-content');
  const serviceData = [
    { title: 'textWriting', desc: 'textWritingDescription' },
    { title: 'poetryWriting', desc: 'poetryWritingDescription' },
    { title: 'imageCreation', desc: 'imageCreationDescription' },
    { title: 'musicCreation', desc: 'musicCreationDescription' },
    { title: 'webCreation', desc: 'webCreationDescription' }
  ];

  services.forEach((service, index) => {
    const titleSelector = 'h3';
    const descSelector = '.description';

    console.log(`Processing service ${index}:`);
    console.log(`Title selector: ${titleSelector}`);
    console.log(`Description selector: ${descSelector}`);

    const titleElement = service.querySelector(titleSelector);
    const descElement = service.querySelector(descSelector);

    console.log(`Title element:`, titleElement);
    console.log(`Description element:`, descElement);

    if (titleElement && descElement) {
      titleElement.textContent = language[serviceData[index].title][languageCode];
      descElement.textContent = language[serviceData[index].desc][languageCode];
      console.log(`Updated title element:`, titleElement);
      console.log(`Updated description element:`, descElement);
    } else {
      console.warn(`Element not found for title or description in service ${index}`);
    }
  });

  setTextContent('#order h2', language.orderForm[languageCode]);
  setTextContent('label[for="name"]', language.name[languageCode]);
  setTextContent('label[for="email"]', language.email[languageCode]);
  setTextContent('label[for="service"]', language.selectService[languageCode]);
  setTextContent('label[for="details"]', language.orderDetails[languageCode]);
  setTextContent('form button', language.submitOrder[languageCode]);
  setTextContent('footer p', language.footerText[languageCode]);
}


