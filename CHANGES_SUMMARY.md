# Что добавлено на сайт Atrix Kazakhstan

## Дата: 9 июля 2026
## Общий архитектурный аудит: КРИТИЧЕСКИЕ проблемы + 11 новых файлов

---

## 1. КРИТИЧЕСКИЕ проблемы, найденные аудитом

### 1.1 Дублирование Яндекс.Метрики (index.html)
- На главной странице установлены ДВА счётчика Метрики
- Нужно удалить один счётчик (ID `109128783` — оставить `109421551`)

### 1.2 Некорректные URL в Schema.org Product (index.html)
- Все 4 товара имеют `"url": "https://atrixkz.kz/"` вместо своих URL
- Нужно исправить:
  - VACOMEGAS220F → `"url": "https://atrixkz.kz/vacomegas220f.html"`
  - VACOMEGAUM2F → `"url": "https://atrixkz.kz/vacomegaum2f.html"`
  - VACO22VESD → `"url": "https://atrixkz.kz/vaco22vesd.html"`
  - VACO22VDC → `"url": "https://atrixkz.kz/vaco22vdc.html"`

### 1.3 Нет Cookie-баннера
- На сайте есть Метрика + Analytics, но нет уведомления о cookies
- Юридический риск по закону РК

### 1.4 Нет политики конфиденциальности
- Обязательно для сбора любых данных

---

## 2. НОВЫЕ ФАЙЛЫ (11 штук)

| # | Файл | Размер | Описание |
|---|------|--------|----------|
| 1 | `404.html` | 10 KB | Страница ошибки 404 — навигация, популярные разделы, WhatsApp |
| 2 | `privacy-policy.html` | 20 KB | Политика конфиденциальности — 8 разделов, реквизиты |
| 3 | `cookie-banner.js` | 11 KB | Cookie-баннер с localStorage, золотой дизайн |
| 4 | `chat-widget.html` | 15 KB | Плавающий чат-виджет — 4 кнопки быстрых действий |
| 5 | `about.html` | 15 KB | О компании — история, миссия, 6 преимуществ |
| 6 | `delivery.html` | 13 KB | Доставка и оплата — сроки, условия, таблица по городам |
| 7 | `warranty.html` | 14 KB | Гарантия 18 мес — что покрывает, сервис, запчасти |
| 8 | `contacts.html` | 15 KB | Контакты — форма, карта, мессенджеры |
| 9 | `thank-you.html` | 12 KB | Страница благодарности после заявки (noindex) |
| 10 | `kp-form.html` | 14 KB | Форма запроса коммерческого предложения (8 полей) |
| 11 | `roi-calculator.html` | 23 KB | Интерактивный калькулятор экономии с Atrix |

**Общий объём:** 162 KB (очень лёгкие файлы)

---

## 3. КАК ВНЕДРИТЬ

### Шаг 1: Загрузить новые файлы
```bash
# Добавьте все 11 файлов в корень вашего репозитория
git add 404.html privacy-policy.html cookie-banner.js chat-widget.html about.html delivery.html warranty.html contacts.html thank-you.html kp-form.html roi-calculator.html
git commit -m "feat: add 11 new pages — 404, privacy, about, contacts, delivery, warranty, thank-you, kp-form, roi-calculator, chat widget, cookie banner"
git push origin main
```

### Шаг 2: Подключить cookie-баннер
Добавьте в `<head>` или перед `</body>` на index.html и других страницах:
```html
<script src="/cookie-banner.js"></script>
```

### Шаг 3: Подключить чат-виджет
Добавьте в конец `<body>` на index.html:
```html
<div id="chat-widget-container"></div>
<script>
  fetch('/chat-widget.html')
    .then(r => r.text())
    .then(html => document.getElementById('chat-widget-container').innerHTML = html);
</script>
```
Или скопируйте содержимое chat-widget.html в шаблон.

### Шаг 4: Исправить критические ошибки в index.html
- Удалить дубль Яндекс.Метрики
- Исправить URL в Schema.org Product

### Шаг 5: Обновить навигацию
Добавьте в меню ссылки на новые страницы:
- О компании → /about.html
- Доставка → /delivery.html
- Гарантия → /warranty.html
- Контакты → /contacts.html
- Калькулятор → /roi-calculator.html

### Шаг 6: Добавить в sitemap.xml
```xml
<url><loc>https://atrixkz.kz/about.html</loc><priority>0.8</priority></url>
<url><loc>https://atrixkz.kz/delivery.html</loc><priority>0.7</priority></url>
<url><loc>https://atrixkz.kz/warranty.html</loc><priority>0.7</priority></url>
<url><loc>https://atrixkz.kz/contacts.html</loc><priority>0.8</priority></url>
<url><loc>https://atrixkz.kz/kp-form.html</loc><priority>0.6</priority></url>
<url><loc>https://atrixkz.kz/roi-calculator.html</loc><priority>0.7</priority></url>
<url><loc>https://atrixkz.kz/privacy-policy.html</loc><priority>0.3</priority></url>
```

---

## 4. ЧТО ДАЁТ КАЖДЫЙ ФАЙЛ

| Файл | Бизнес-эффект |
|------|---------------|
| **404.html** | Удерживает пользователей, уходящих на битые ссылки |
| **privacy-policy.html** | Юридическая защита + доверие |
| **cookie-banner.js** | Соответствие закону РК о персональных данных |
| **chat-widget.html** | +30-50% конверсия — мгновенный контакт |
| **about.html** | Доверие B2B — "с кем имею дело" |
| **delivery.html** | Снимает возражения "а как купить?" |
| **warranty.html** | Снимает страх "а если сломается?" |
| **contacts.html** | Центральная точка входа для лидов |
| **thank-you.html** | Управление ожиданиями после заявки |
| **kp-form.html** | Структурированный сбор лидов с квалификацией |
| **roi-calculator.html** | Инструмент вирусного маркетинга + аргументация |

---

## 5. СЛЕДУЮЩИЕ ШАГИ (рекомендации)

1. **Добавить аналитику** на новые страницы (Яндекс.Метрика + Google Analytics)
2. **Настроить цели** в Метрике: отправка формы КП, клик WhatsApp, расчёт ROI
3. **Создать email-рассылку** для сбора подписчиков в блоге
4. **Добавить отзывы** казахстанских клиентов по мере поступления
5. **Снять видеообзоры** пылесосов (критично для продуктов 500K+ тг)

---

Подготовлено: 9 июля 2026
