# ТЕХНИЧЕСКИЙ SEO-АУДИТ: Atrix Kazakhstan
## Дата аудита: 09.07.2025
## Домен: atrixkz.kz
## Всего проанализировано: 8 ключевых файлов + robots.txt + sitemap.xml + файловая структура

---

# 1. КРИТИЧЕСКИЕ ПРОБЛЕМЫ (требуют немедленного исправления)

## 1.1 Дублирование счетчиков Яндекс.Метрики
**Файл:** `index.html`  
**Строки:** 776-786 (counter 109421551) и 806-811 (counter 109128783)  
**Проблема:** На странице установлены ДВА разных счетчика Яндекс.Метрики:
- Counter ID 109421551 (в `<head>`)
- Counter ID 109128783 (в `<body>`)

**Эффект:** Дублирование отправки данных, искажение статистики, замедление загрузки.  
**Решение:** Оставить только один активный счетчик (предпочтительно тот, который настроен в вебвизором — 109421551), второй удалить.

## 1.2 Отсутствие страницы 404.html
**Файл:** `404.html` — ФАЙЛ ОТСУТСТВУЕТ в корне проекта  
**Проблема:** При обращении к несуществующей странице сервер отдает стандартную страницу хостинга, а не кастомную 404.  
**Эффект:** Потеря трафика, плохой UX, отрицательный сигнал для SEO.  
**Решение:** Создать `/mnt/agents/output/atrixkz-main/404.html` с навигацией, поиском, ссылками на основные разделы.

## 1.3 Отсутствие страницы политики конфиденциальности
**Файл:** `privacy-policy.html` — ФАЙЛ ОТСУТСТВУЕТ  
**Проблема:** На сайте установлены Яндекс.Метрика и Google Analytics, которые собирают персональные данные пользователей. Без политики конфиденциальности это нарушение:
- Закона РК "О персональных данных"
- GDPR (если есть посетители из ЕС)
- Условий использования Google Analytics / Yandex.Metrika  
**Решение:** Создать `/mnt/agents/output/atrixkz-main/privacy-policy.html` и добавить ссылку в футер всех страниц.

## 1.4 Отсутствие Cookie-баннера / согласия на обработку данных
**Файл:** Все HTML-файлы  
**Проблема:** Сайт использует:
- Яндекс.Метрика (вебвизор, карта кликов)
- Google Analytics (gtag)
- НО отсутствует уведомление пользователям о сборе данных и механизм согласия.  
**Решение:** Внедрить cookie-consent баннер (можно через Cookiebot или кастомный).

## 1.5 Schema.org Product URL ведет на главную, а не на продуктовую страницу
**Файл:** `index.html`, строки 790-797  
**Проблема:** Все 4 Product schema имеют `"url": "https://atrixkz.kz/"` вместо соответствующих продуктовых URL:
- VACOMEGAS220F → url должен быть `https://atrixkz.kz/vacomegas220f.html`
- VACOMEGAUM2F → url должен быть `https://atrixkz.kz/vacomegaum2f.html`
- VACO22VESD → url должен быть `https://atrixkz.kz/vaco22vesd.html`
- VACO22VDC → url должен быть `https://atrixkz.kz/vaco22vdc.html`  
**Эффект:** Google может неправильно связывать rich snippets с продуктовыми страницами.  
**Решение:** Исправить url в каждом Product schema на соответствующий продуктовый URL.

---

# 2. ВАЖНЫЕ УЛУЧШЕНИЯ (высокий приоритет)

## 2.1 Продуктовые страницы — отсутствие Open Graph
**Файлы:**
- `vacomegas220f.html`
- `vacomegaum2f.html`
- `vaco22vesd.html`
- `vaco22vdc.html`

**Проблема:** Ни одна продуктовая страница не имеет Open Graph тегов (og:title, og:description, og:image, og:url). При шаринге в Telegram/WhatsApp/Facebook будет отображаться некорректный или пустой превью.  
**Решение:** Добавить в `<head>` каждой продуктовой страницы:
```html
<meta property="og:type" content="product">
<meta property="og:url" content="https://atrixkz.kz/vacomegas220f.html">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://atrixkz.kz/img/vacomegas220f.jpg">
```

## 2.2 Продуктовые страницы — отсутствие Twitter Card
**Файлы:** Все 4 продуктовые страницы  
**Проблема:** Нет Twitter Card разметки.  
**Решение:** Добавить `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.

## 2.3 Продуктовые страницы — отсутствие аналитики
**Файлы:** Все 4 продуктовые страницы  
**Проблема:** Ни на одной продуктовой странице нет кода:
- Яндекс.Метрики
- Google Analytics (gtag)

Это означает, что переходы и конверсии с этих страниц НЕ отслеживаются.  
**Решение:** Добавить единый JS-файл аналитики или вставить коды напрямую в каждую страницу.

## 2.4 Landing pages — отсутствие аналитики
**Файлы:**
- `kaspi-serverniye-cod-esd-pylesos.html`
- `tengizchevroil-tco-pylesos.html`
- `hepa-pylesos-meditsina.html`

**Проблема:** На landing pages нет кодов Яндекс.Метрики и Google Analytics. Это критично, т.к. landing pages — основной источник целевого трафика.  
**Решение:** Добавить коды аналитики.

## 2.5 Некорректные даты lastmod в sitemap.xml
**Файл:** `sitemap.xml`  
**Проблема:** Все даты `lastmod` установлены в 2026 год (например, `2026-06-04`, `2026-06-20`). Это даты из будущего, что может вызвать недоверие поисковых систем.  
**Решение:** Обновить lastmod на реальные даты последнего изменения файлов.

## 2.6 Отсутствие чат-виджета
**Файл:** Все HTML-страницы  
**Проблема:** На сайте нет онлайн-чата (JivoSite, Tawk.to, Talk-Me, Bitrix24 и т.д.). Для B2B-сегмента с высоким чеком (489K-957K тг) чат — важный канал захвата лидов.  
**Решение:** Установить JivoSite или Tawk.to (бесплатные версии достаточны).

## 2.7 Отсутствие настоящей формы обратной связи
**Файл:** `index.html`, строки 585-608  
**Проблема:** В CTA-секции есть `<input>` поле для email, но НЕТ `<form>` тега и обработчика отправки. Пользователь не может отправить заявку — поле неработоспособно.  
**Решение:** Обернуть input в `<form>` с action (например, на Formspree, Getform, или собственный обработчик).

## 2.8 Отсутствие BreadcrumbList schema
**Файл:** Все продуктовые и landing страницы  
**Проблема:** Нет хлебных крошек ни в видимой навигации, ни в schema.org разметке.  
**Решение:** Добавить BreadcrumbList JSON-LD на все внутренние страницы.

## 2.9 Продуктовые страницы — отсутствие aggregateRating
**Файлы:** Все 4 продуктовые страницы + index.html Product schema  
**Проблема:** В Schema.org Product нет разметки рейтинга (`aggregateRating`). Google может не показывать звезды в сниппетах.  
**Решение:** Добавить (когда появятся реальные отзывы):
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "12"
}
```

## 2.10 Канонический URL без trailing slash
**Файл:** `index.html`, строка 14  
**Проблема:** `<link rel="canonical" href="https://atrixkz.kz">` — без слеша на конце. Сервер может отдавать как /, так и /index.html, создавая дубли.  
**Решение:** Установить единый формат — со слешем: `https://atrixkz.kz/`

---

# 3. ЖЕЛАТЕЛЬНЫЕ УЛУЧШЕНИЯ (средний приоритет)

## 3.1 Добавить Review schema
**Файлы:** Продуктовые страницы  
**Проблема:** Нет разметки отзывов. После получения первых отзывов клиентов — добавить Review schema для rich snippets.

## 3.2 Добавить HowTo schema для landing pages
**Файлы:** Landing pages (meditsina, kaspi, tengiz)  
**Проблема:** На медицинской странице есть FAQ (хорошо!), но нет HowTo разметки для процессов выбора/заказа.  
**Решение:** Добавить HowTo JSON-LD для описания процесса покупки.

## 3.3 Улучшить alt-теги изображений
**Файл:** `index.html`  
**Проблема:** Продуктовые изображения встроены как base64-data URI, alt-теги не проверены. На продуктовых страницах изображения имеют alt (например, `alt="CLASS H ULPA пылесос VACOMEGAUM2F Atrix"` — это хорошо).  
**Решение:** Проверить и добавить описательные alt-теги ко ВСЕМ изображениям.

## 3.4 Добавить preload для критических ресурсов
**Файл:** `index.html`  
**Проблема:** Нет `<link rel="preload">` для критических ресурсов (шрифты Google Fonts, основные CSS).  
**Решение:** Добавить:
```html
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700&display=swap" as="style">
```

## 3.5 Добавить meta theme-color
**Файл:** `index.html` и все остальные  
**Проблема:** Нет `<meta name="theme-color" content="#07111f">` для мобильных браузеров.  
**Решение:** Добавить theme-color для брендинга в мобильной выдаче.

## 3.6 Добавить микроразметку Article для blog-статей
**Файлы:** `blog/*.html`  
**Проблема:** Блог-статьи (более 200 файлов) могут не иметь Article/BlogPosting schema.  
**Решение:** Добавить Article JSON-LD с headline, author, datePublished, image.

## 3.7 Добавить hreflang
**Файл:** Все страницы  
**Проблема:** Сайт на русском для Казахстана, но нет hreflang разметки.  
**Решение:** Добавить:
```html
<link rel="alternate" hreflang="ru-kz" href="https://atrixkz.kz/">
<link rel="alternate" hreflang="x-default" href="https://atrixkz.kz/">
```

## 3.8 Добавить structured data для breadcrumbs (видимых)
**Файлы:** Все внутренние страницы  
**Проблема:** Нет видимых хлебных крошек на страницах.  
**Решение:** Добавить HTML-навигацию + BreadcrumbList schema.

## 3.9 Сжатие изображений (base64 в index.html)
**Файл:** `index.html`  
**Проблема:** Продуктовые изображения встроены как base64 data-URI прямо в HTML, что увеличивает размер файла. index.html весит ~563KB.  
**Решение:** Вынести изображения в отдельные файлы в `/img/`, использовать `<img src="/img/...">` с lazy loading.

## 3.10 Добавить Review и Rating rich snippets для FAQ
**Файл:** `index.html`  
**Проблема:** FAQPage schema хорошо реализован, но можно добавить Speakable schema для голосового поиска.  
**Решение:** Рассмотреть SpeakableSpecification для ключевых секций.

## 3.11 WhatsApp ссылка — незакодированный текст
**Файл:** `hepa-pylesos-meditsina.html`, строка 61  
**Проблема:** В wa.me ссылке используется HTML-кодировка с ошибкой: `%3Cspan%20class%3D%22accent%22%3Eмедицины%3C%2Fspan%3E` — теги span попадут в текст сообщения WhatsApp.  
**Решение:** Использовать чистый текст без HTML-тегов в wa.me ссылке.

## 3.12 Проверить og:image размер
**Файл:** `index.html`, строки 21-25  
**Проблема:** Указан размер 1200x630, но файл `og-image.jpg` весит 673KB. Нужно убедиться, что реальный размер изображения соответствует заявленному.  
**Решение:** Проверить реальные размеры og-image.jpg (должен быть 1200x630 px).

---

# 4. СПИСОК ФАЙЛОВ, КОТОРЫЕ НУЖНО СОЗДАТЬ / ИЗМЕНИТЬ

## Файлы для СОЗДАНИЯ:

| # | Файл | Приоритет | Описание |
|---|------|-----------|----------|
| 1 | `/mnt/agents/output/atrixkz-main/404.html` | КРИТИЧЕСКИЙ | Кастомная страница 404 с навигацией |
| 2 | `/mnt/agents/output/atrixkz-main/privacy-policy.html` | КРИТИЧЕСКИЙ | Политика конфиденциальности |
| 3 | `/mnt/agents/output/atrixkz-main/cookie-banner.js` или inline | КРИТИЧЕСКИЙ | Cookie-consent баннер |

## Файлы для ИЗМЕНЕНИЯ:

| # | Файл | Приоритет | Что исправить |
|---|------|-----------|---------------|
| 1 | `/mnt/agents/output/atrixkz-main/index.html` | КРИТИЧЕСКИЙ | Удалить дубль Яндекс.Метрики (строки 806-811) |
| 2 | `/mnt/agents/output/atrixkz-main/index.html` | КРИТИЧЕСКИЙ | Исправить Product schema URLs (строки 792-795) |
| 3 | `/mnt/agents/output/atrixkz-main/index.html` | ВЫСОКИЙ | Добавить работающую `<form>` для CTA |
| 4 | `/mnt/agents/output/atrixkz-main/index.html` | ВЫСОКИЙ | Добавить ссылку на privacy-policy в футер |
| 5 | `/mnt/agents/output/atrixkz-main/index.html` | ВЫСОКИЙ | Исправить canonical (добавить trailing slash) |
| 6 | `/mnt/agents/output/atrixkz-main/vacomegas220f.html` | ВЫСОКИЙ | Добавить Open Graph + Twitter Card + аналитику |
| 7 | `/mnt/agents/output/atrixkz-main/vacomegaum2f.html` | ВЫСОКИЙ | Добавить Open Graph + Twitter Card + аналитику |
| 8 | `/mnt/agents/output/atrixkz-main/vaco22vesd.html` | ВЫСОКИЙ | Добавить Open Graph + Twitter Card + аналитику |
| 9 | `/mnt/agents/output/atrixkz-main/vaco22vdc.html` | ВЫСОКИЙ | Добавить Open Graph + Twitter Card + аналитику |
| 10 | `/mnt/agents/output/atrixkz-main/kaspi-serverniye-cod-esd-pylesos.html` | ВЫСОКИЙ | Добавить аналитику + Open Graph |
| 11 | `/mnt/agents/output/atrixkz-main/tengizchevroil-tco-pylesos.html` | ВЫСОКИЙ | Добавить аналитику + Open Graph |
| 12 | `/mnt/agents/output/atrixkz-main/hepa-pylesos-meditsina.html` | ВЫСОКИЙ | Добавить аналитику + Open Graph |
| 13 | `/mnt/agents/output/atrixkz-main/sitemap.xml` | ВЫСОКИЙ | Исправить даты lastmod на реальные |
| 14 | `/mnt/agents/output/atrixkz-main/hepa-pylesos-meditsina.html` | СРЕДНИЙ | Исправить wa.me ссылку (убрать HTML-теги) |

---

# 5. ЧТО НА САЙТЕ РЕАЛИЗОВАНО ОТЛИЧНО (положительные находки)

1. **Schema.org разметка на высшем уровне:**
   - LocalBusiness (строка 37)
   - Organization (строка 40)
   - FAQPage с 4 вопросами (строки 43-82)
   - Product (4 товара с ценами, строки 790-797)
   - WebPage schema на landing pages
   - FAQPage + Product + LocalBusiness на `hepa-pylesos-meditsina.html`

2. **Favicon — идеальная реализация:**
   - 6 размеров PNG (16, 32, 48, 96, 192) + ICO + Apple Touch Icon + Web Manifest
   - Строка 4, index.html

3. **Open Graph на главной — полный набор:**
   - og:type, og:url, og:title, og:description, og:image, og:image:secure_url, og:image:type, og:image:width, og:image:height, og:image:alt, og:locale, og:site_name

4. **Twitter Card на главной — полный набор:**
   - twitter:card, twitter:title, twitter:description, twitter:image

5. **robots.txt — продвинутая настройка:**
   - Явное разрешение для AI-краулеров (GPTBot, ClaudeBot, PerplexityBot, и др.)
   - Корректный Sitemap

6. **sitemap.xml — 308 URL:**
   - Полное покрытие всех страниц
   - Правильные priority и changefreq

7. **Аналитика на главной:**
   - Яндекс.Метрика (вебвизор, карта кликов)
   - Google Analytics 4 (gtag)
   - Bing Site Auth
   - Yandex verification

8. **Цены на всех продуктовых страницах:**
   - VACOMEGAS220F: 489 000 тг
   - VACOMEGAUM2F: 882 000 тг
   - VACO22VESD: 887 000 тг
   - VACO22VDC: 957 000 тг

9. **CTA кнопки на всех ключевых страницах:**
   - WhatsApp (wa.me)
   - Телефон (tel:)
   - Email (mailto:)

10. **Канонические URL на всех проанализированных страницах**

11. **lang="ru" на всех проанализированных страницах**

12. **Meta viewport на всех страницах**

13. **Apple Touch Icon и Web Manifest на всех страницах**

14. **Хорошая ключевая оптимизация title и description** — ключевые слова естественно вписаны

---

# 6. СВОДНАЯ ТАБЛИЦА ПО СТРАНИЦАМ

| Элемент | index.html | vacomegas220f | vacomegaum2f | vaco22vesd | vaco22vdc | kaspi | tengiz | meditsina |
|---------|------------|---------------|--------------|------------|-----------|-------|--------|-----------|
| title | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| meta description | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| canonical | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| lang="ru" | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| viewport | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| favicon | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| apple-touch-icon | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| webmanifest | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Schema.org | ✅ (4 типа) | ✅ (Product) | ✅ (Product) | ✅ (Product) | ✅ (Product) | ✅ (WebPage) | ✅ (WebPage) | ✅ (3 типа) |
| Цена в schema | ✅ | ✅ | ✅ | ✅ | ✅ | — | — | ✅ |
| Open Graph | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Twitter Card | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Яндекс.Метрика | ⚠️ (дубль) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Google Analytics | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| WhatsApp CTA | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Телефон CTA | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Email CTA | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Форма захвата | ⚠️ (не работает) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Cookie-баннер | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Чат-виджет | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

*Отчет составлен автоматически на основе анализа 8 ключевых HTML-файлов, robots.txt, sitemap.xml и файловой структуры проекта.*
