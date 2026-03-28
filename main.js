const directions = [
  {
    id: "analytics",
    title: "Аналитика",
    description:
      "Трек для тех, кто хочет переводить бизнес-задачи в понятные решения, работать с данными и находить точки роста сервисов.",
    vacancies: [
      {
        title: "Бизнес-аналитика",
        description:
          "Погружение в банковские процессы, карта клиентского пути и подготовка понятных решений вместе с командой продукта.",
        isOpen: true,
        points: ["Интервью с командами", "Описание процессов", "Проверка гипотез"],
      },
      {
        title: "Аналитика данных",
        description:
          "Работа с продуктовыми метриками, поиск закономерностей в данных и поддержка решений для цифровых сервисов банка.",
        isOpen: true,
        points: ["SQL и витрины", "Продуктовые метрики", "Отчёты и инсайты"],
      },
      {
        title: "Финансовая аналитика",
        description:
          "Подготовка аналитических материалов по портфелю, динамике показателей и бизнес-гипотезам для внутренних команд.",
        isOpen: false,
        points: ["Финмодели", "Портфельная аналитика", "Презентации для бизнеса"],
      },
    ],
  },
  {
    id: "security",
    title: "Безопасность",
    description:
      "Стажировка для тех, кому интересно защищать цифровую среду банка и разбираться в инфраструктурных рисках.",
    vacancies: [
      {
        title: "Кибербезопасность",
        description:
          "Участие в мониторинге инцидентов, базовой проверке уязвимостей и сопровождении защитных практик банка.",
        isOpen: true,
        points: ["Мониторинг событий", "Проверка уязвимостей", "Поддержка SOC-процессов"],
      },
      {
        title: "Техническая безопасность",
        description:
          "Поддержка инфраструктурных проверок, контроль защищенности среды и работа с внутренними стандартами.",
        isOpen: false,
        points: ["Контроль доступов", "Проверка среды", "Технические регламенты"],
      },
    ],
  },
  {
    id: "marketing-design",
    title: "Маркетолог / дизайн",
    description:
      "Трек про коммуникацию бренда, интерфейсы и контент, который делает цифровой опыт банка яснее и сильнее.",
    vacancies: [
      {
        title: "Маркетолог",
        description:
          "Исследование аудитории, помощь в запуске кампаний и работа с digital-каналами привлечения.",
        isOpen: true,
        points: ["Анализ аудитории", "Кампании и креатив", "Digital-каналы"],
      },
      {
        title: "UX-редактор",
        description:
          "Подготовка интерфейсных текстов, микрокопирайта и сценариев коммуникации для цифровых продуктов банка.",
        isOpen: false,
        points: ["Tone of voice", "Интерфейсные тексты", "Контент-сценарии"],
      },
      {
        title: "Дизайнер",
        description:
          "Поддержка продуктовой дизайн-команды: макеты, визуальные концепции и улучшение пользовательского опыта.",
        isOpen: true,
        points: ["UI-макеты", "Дизайн-система", "Пользовательские сценарии"],
      },
    ],
  },
  {
    id: "sales",
    title: "Продажи",
    description:
      "Для тех, кто хочет понять корпоративный сегмент, клиентскую коммуникацию и коммерческую сторону банковского продукта.",
    vacancies: [
      {
        title: "Корпоративные продажи",
        description:
          "Участие в подготовке коммерческих предложений, клиентских встреч и анализе запросов бизнеса.",
        isOpen: false,
        points: ["Работа с клиентом", "Коммерческие материалы", "Поддержка сделок"],
      },
    ],
  },
  {
    id: "strategy",
    title: "Стратегия",
    description:
      "Направление для стажёров, которым интересно смотреть на банк системно и анализировать долгосрочные решения.",
    vacancies: [
      {
        title: "Стратегия",
        description:
          "Анализ рынка, конкурентной среды и стратегических инициатив, влияющих на развитие банка и его сервисов.",
        isOpen: true,
        points: ["Рынок и конкуренты", "Стратегические инициативы", "Синтез аналитики"],
      },
    ],
  },
  {
    id: "management",
    title: "Менеджмент",
    description:
      "Трек для будущих продуктовых и проектных менеджеров, которым важно видеть путь от идеи до результата.",
    vacancies: [
      {
        title: "Продуктовый менеджмент",
        description:
          "Приоритизация задач, работа с гипотезами и поддержка продуктовой команды на всех этапах развития сервиса.",
        isOpen: true,
        points: ["Приоритизация", "CustDev и гипотезы", "Работа с командой"],
      },
      {
        title: "Проектный менеджмент",
        description:
          "Контроль сроков, координация команд и сопровождение внутренних инициатив от постановки до результата.",
        isOpen: false,
        points: ["Планирование", "Контроль сроков", "Командная координация"],
      },
    ],
  },
  {
    id: "finance",
    title: "Финансы",
    description:
      "Направление с фокусом на показатели, отчётность и внутреннюю экономику банка как большого бизнеса.",
    vacancies: [
      {
        title: "Финансы",
        description:
          "Поддержка финансового блока, работа с отчетностью и анализом показателей для управленческих решений.",
        isOpen: false,
        points: ["Отчётность", "Финансовые показатели", "Поддержка решений"],
      },
    ],
  },
  {
    id: "it-digital",
    title: "IT и цифровой бизнес",
    description:
      "Крупнейший цифровой трек: разработка, тестирование, инфраструктура и данные для клиентских и внутренних продуктов.",
    vacancies: [
      {
        title: "Тестирование",
        description:
          "Проверка цифровых сервисов, оформление баг-репортов и помощь в улучшении качества релизов.",
        isOpen: true,
        points: ["Ручное тестирование", "Баг-репорты", "Поддержка релизов"],
      },
      {
        title: "FrontEnd разработка",
        description:
          "Создание интерфейсов, работа с компонентами и развитие пользовательской части внутренних и клиентских продуктов.",
        isOpen: true,
        points: ["Компонентный UI", "Интерактивные сценарии", "Работа с дизайн-макетом"],
      },
      {
        title: "Backend разработка",
        description:
          "Поддержка серверной логики, работа с сервисами и участие в построении устойчивых интеграционных решений.",
        isOpen: false,
        points: ["Сервисы и API", "Бизнес-логика", "Интеграции"],
      },
      {
        title: "Администрирование данных",
        description:
          "Поддержка витрин, контроль качества данных и работа с потоками, важными для продуктовых и аналитических команд.",
        isOpen: false,
        points: ["Витрины данных", "Качество данных", "Поддержка потоков"],
      },
      {
        title: "DevOps",
        description:
          "Помощь в сопровождении инфраструктуры, автоматизации поставки и улучшении стабильности среды разработки.",
        isOpen: false,
        points: ["CI/CD", "Инфраструктура", "Стабильность среды"],
      },
      {
        title: "FullStack разработка",
        description:
          "Работа на стыке интерфейса и сервисной логики, быстрое прототипирование и развитие цифровых сценариев.",
        isOpen: true,
        points: ["Frontend + backend", "Быстрые прототипы", "Сквозные сценарии"],
      },
    ],
  },
  {
    id: "hr",
    title: "HR",
    description:
      "Для тех, кто хочет заниматься людьми, наймом и внутренними HR-сервисами, влияющими на опыт сотрудников.",
    vacancies: [
      {
        title: "Рекрутмент",
        description:
          "Помощь в поиске кандидатов, коммуникация с командами и участие в воронке найма.",
        isOpen: true,
        points: ["Сорсинг", "Коммуникация с кандидатами", "Поддержка воронки"],
      },
      {
        title: "Кадровое администрирование",
        description:
          "Поддержка HR-процессов, работа с документами и сопровождение внутренних кадровых операций.",
        isOpen: false,
        points: ["Документооборот", "HR-процессы", "Кадровые операции"],
      },
      {
        title: "C&B (Compensation and Benefits)",
        description:
          "Участие в проектах по вознаграждению, льготам и аналитике HR-показателей для команды персонала.",
        isOpen: false,
        points: ["Льготы и бонусы", "HR-аналитика", "Поддержка программ"],
      },
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    description:
      "Трек для тех, кто хочет применять машинное обучение и инженерный подход к большим данным банка.",
    vacancies: [
      {
        title: "Data Science",
        description:
          "Подготовка моделей, тестирование гипотез и работа с задачами персонализации и прогнозирования.",
        isOpen: true,
        points: ["ML-гипотезы", "Прогнозирование", "Эксперименты"],
      },
      {
        title: "Data Engineering",
        description:
          "Построение и поддержка потоков данных, подготовка основ для аналитики и ML-задач.",
        isOpen: false,
        points: ["ETL-потоки", "Хранилища", "Подготовка данных"],
      },
    ],
  },
];

const initialDirectionId = "it-digital";

const state = {
  activeDirectionId: initialDirectionId,
  selectedVacancyKey: "",
};

const tracksNode = document.querySelector("#tracks");
const vacanciesNode = document.querySelector("#vacancies");
const directionTitleNode = document.querySelector("#direction-title");
const directionDescriptionNode = document.querySelector("#direction-description");
const directionTotalNode = document.querySelector("#direction-total");
const directionOpenNode = document.querySelector("#direction-open");
const spotlightTitleNode = document.querySelector("#spotlight-title");
const spotlightDescriptionNode = document.querySelector("#spotlight-description");
const spotlightDirectionNode = document.querySelector("#spotlight-direction");
const spotlightStatusNode = document.querySelector("#spotlight-status");
const spotlightListNode = document.querySelector("#spotlight-list");
const spotlightButtonNode = document.querySelector("#spotlight-button");
const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const revealNodes = document.querySelectorAll("[data-reveal]");

function getDirection(directionId) {
  return directions.find((direction) => direction.id === directionId) ?? directions[0];
}

function getVacancyKey(directionId, vacancyTitle) {
  return `${directionId}:${vacancyTitle}`;
}

function getVacancyEnding(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return "ия";
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return "ии";
  }

  return "ий";
}

function getSelectedVacancy(direction) {
  return (
    direction.vacancies.find(
      (vacancy) => getVacancyKey(direction.id, vacancy.title) === state.selectedVacancyKey,
    ) ?? direction.vacancies.find((vacancy) => vacancy.isOpen) ?? direction.vacancies[0]
  );
}

function renderTracks() {
  tracksNode.innerHTML = "";

  directions.forEach((direction) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "track-button";
    button.textContent = direction.title;
    button.dataset.directionId = direction.id;

    if (direction.id === state.activeDirectionId) {
      button.classList.add("track-button--active");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }

    button.addEventListener("click", () => {
      if (state.activeDirectionId === direction.id) {
        return;
      }

      state.activeDirectionId = direction.id;
      state.selectedVacancyKey = "";
      render();
    });

    tracksNode.append(button);
  });
}

function renderSummary(direction) {
  const total = direction.vacancies.length;
  const open = direction.vacancies.filter((vacancy) => vacancy.isOpen).length;

  directionTitleNode.textContent = direction.title;
  directionDescriptionNode.textContent = direction.description;
  directionTotalNode.textContent = `${total} ваканс${getVacancyEnding(total)}`;
  directionOpenNode.textContent = `${open} открыто сейчас`;
}

function renderSpotlight(direction) {
  const vacancy = getSelectedVacancy(direction);
  const isOpen = vacancy.isOpen;

  spotlightTitleNode.textContent = vacancy.title;
  spotlightDescriptionNode.textContent = vacancy.description;
  spotlightDirectionNode.textContent = direction.title;
  spotlightStatusNode.textContent = isOpen ? "Набор открыт" : "Набор закрыт";
  spotlightListNode.innerHTML = "";

  vacancy.points.forEach((point) => {
    const item = document.createElement("div");
    item.className = "spotlight__point";
    item.textContent = point;
    spotlightListNode.append(item);
  });

  spotlightButtonNode.textContent = isOpen
    ? "Открыть карточку стажировки"
    : "Набор по этой роли закрыт";
  spotlightButtonNode.disabled = !isOpen;
}

function renderVacancies(direction) {
  vacanciesNode.innerHTML = "";
  vacanciesNode.classList.remove("vacancies--animated");
  requestAnimationFrame(() => vacanciesNode.classList.add("vacancies--animated"));

  direction.vacancies.forEach((vacancy) => {
    const key = getVacancyKey(direction.id, vacancy.title);
    const card = document.createElement(vacancy.isOpen ? "button" : "article");
    const isSelected = state.selectedVacancyKey === key;

    card.className = "vacancy-card";

    if (vacancy.isOpen) {
      card.type = "button";
      card.classList.add("vacancy-card--interactive");

      if (isSelected) {
        card.classList.add("vacancy-card--selected");
      }

      card.addEventListener("click", () => {
        state.selectedVacancyKey = key;
        render();
      });
    } else {
      card.classList.add("vacancy-card--closed");
      card.setAttribute("aria-disabled", "true");
    }

    const statusClass = vacancy.isOpen
      ? "vacancy-card__status vacancy-card__status--open"
      : "vacancy-card__status vacancy-card__status--closed";

    const arrowLabel = vacancy.isOpen ? "->" : "x";
    const statusLabel = vacancy.isOpen ? "Набор открыт" : "Набор закрыт";

    card.innerHTML = `
      <h3 class="vacancy-card__title">${vacancy.title}</h3>
      <p class="vacancy-card__description">${vacancy.description}</p>
      <div class="vacancy-card__footer">
        <span class="${statusClass}">${statusLabel}</span>
        <span class="vacancy-card__arrow" aria-hidden="true">${arrowLabel}</span>
      </div>
    `;

    vacanciesNode.append(card);
  });
}

function render() {
  const direction = getDirection(state.activeDirectionId);
  const fallbackVacancy = getSelectedVacancy(direction);

  if (!state.selectedVacancyKey && fallbackVacancy) {
    state.selectedVacancyKey = getVacancyKey(direction.id, fallbackVacancy.title);
  }

  renderTracks();
  renderSummary(direction);
  renderSpotlight(direction);
  renderVacancies(direction);
}

function setupRevealAnimations() {
  if (!("IntersectionObserver" in globalThis)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealNodes.forEach((node) => observer.observe(node));
}

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetSelector = button.dataset.scrollTarget;
    const targetNode = document.querySelector(targetSelector);

    targetNode?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

spotlightButtonNode?.addEventListener("click", () => {
  const direction = getDirection(state.activeDirectionId);
  const vacancy = getSelectedVacancy(direction);

  if (!vacancy.isOpen) {
    return;
  }

  document.querySelector("#journey")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

setupRevealAnimations();
render();
