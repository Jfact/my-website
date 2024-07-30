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
