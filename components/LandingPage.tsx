"use client";

import Link from "next/link";
import { useState } from "react";

type Vacancy = {
  title: string;
  description: string;
  isOpen: boolean;
  points: string[];
};

type Direction = {
  id: string;
  title: string;
  description: string;
  vacancies: Vacancy[];
};

const directions: Direction[] = [
  {
    id: "analytics",
    title: "Аналитика",
    description:
      "Трек для тех, кто хочет переводить бизнес-задачи в понятные решения, работать с данными и видеть, как устроены продукты банка.",
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
        points: ["SQL и витрины", "Продуктовые метрики", "Отчеты и инсайты"],
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
    id: "management",
    title: "Менеджмент",
    description:
      "Трек для будущих продуктовых и проектных менеджеров, которым важно видеть путь от идеи до результата.",
    vacancies: [
      {
        title: "Продуктовый менеджмент",
        description:
          "Приоритизация задач, работа с гипотезами и поддержка продуктовой команды на этапах развития сервиса.",
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
      "Направление с фокусом на показатели, отчетность и внутреннюю экономику банка как большого бизнеса.",
    vacancies: [
      {
        title: "Финансы",
        description:
          "Поддержка финансового блока, работа с отчетностью и анализом показателей для управленческих решений.",
        isOpen: false,
        points: ["Отчетность", "Финансовые показатели", "Поддержка решений"],
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
        points: ["Компонентный UI", "Интерактивные сценарии", "Работа с макетом"],
      },
      {
        title: "Backend разработка",
        description:
          "Поддержка серверной логики, работа с сервисами и участие в построении устойчивых интеграционных решений.",
        isOpen: false,
        points: ["Сервисы и API", "Бизнес-логика", "Интеграции"],
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
        title: "C&B",
        description:
          "Участие в проектах по вознаграждению, льготам и аналитике HR-показателей для команды персонала.",
        isOpen: false,
        points: ["Льготы и бонусы", "HR-аналитика", "Поддержка программ"],
      },
    ],
  },
];

const initialDirectionId = "it-digital";

function getVacancyKey(directionId: string, vacancyTitle: string) {
  return `${directionId}:${vacancyTitle}`;
}

function getVacancyEnding(count: number) {
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

export default function LandingPage() {
  const [activeDirectionId, setActiveDirectionId] = useState(initialDirectionId);
  const activeDirection = directions.find((direction) => direction.id === activeDirectionId) ?? directions[0];
  const firstOpenVacancy = activeDirection.vacancies.find((vacancy) => vacancy.isOpen) ?? activeDirection.vacancies[0];
  const [selectedVacancyKey, setSelectedVacancyKey] = useState(
    getVacancyKey(activeDirection.id, firstOpenVacancy.title),
  );
  const selectedVacancy =
    activeDirection.vacancies.find(
      (vacancy) => getVacancyKey(activeDirection.id, vacancy.title) === selectedVacancyKey,
    ) ?? firstOpenVacancy;
  const openCount = activeDirection.vacancies.filter((vacancy) => vacancy.isOpen).length;

  function selectDirection(direction: Direction) {
    const nextVacancy = direction.vacancies.find((vacancy) => vacancy.isOpen) ?? direction.vacancies[0];
    setActiveDirectionId(direction.id);
    setSelectedVacancyKey(getVacancyKey(direction.id, nextVacancy.title));
  }

  return (
    <main className="bg-white text-mkb-dark">
      <section className="mx-auto flex min-h-screen max-w-[1920px] flex-col px-6 py-8 sm:px-10 lg:px-20">
        <header className="flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-4 text-mkb-red">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[radial-gradient(circle_at_70%_20%,#12a7d9_0_18%,transparent_34%),radial-gradient(circle_at_30%_18%,#a5d594_0_16%,transparent_35%),linear-gradient(135deg,#ffd866_0%,#ff7d20_43%,#dd0a34_80%)]">
              <span className="h-5 w-9 -rotate-45 skew-x-[-12deg] border-b-[7px] border-l-[7px] border-white" />
            </span>
            <span className="font-display text-6xl font-black tracking-[-0.04em]">МКБ</span>
          </Link>

          <nav className="hidden items-center gap-14 text-3xl font-black tracking-[-0.04em] lg:flex">
            <a className="relative pb-4 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-mkb-red" href="#internships">
              Стажерам
            </a>
            <a href="#internships" className="transition hover:text-mkb-red">
              Вакансии
            </a>
            <a href="#journey" className="transition hover:text-mkb-red">
              Карьера в МКБ
            </a>
          </nav>

          <button className="rounded-2xl bg-mkb-red px-8 py-4 text-3xl font-black tracking-[-0.04em] text-white transition hover:-translate-y-0.5 hover:bg-[#c9082f]">
            Войти
          </button>
        </header>

        <div className="flex flex-1 flex-col justify-center py-16">
          <h1 className="font-display text-7xl font-black leading-[0.88] tracking-[-0.06em] text-mkb-red sm:text-8xl lg:text-[126px]">
            Стажировка в МКБ
          </h1>
          <p className="mt-16 max-w-4xl text-5xl font-black tracking-[-0.045em]">
            Начни свою карьеру с нами!
          </p>
          <p className="mt-16 max-w-7xl text-3xl font-black leading-tight tracking-[-0.045em] lg:text-[42px]">
            Программа МКБ Universe — это оплачиваемая стажировка, которую можно совмещать с учебой. Ты выбираешь направление и работаешь над прикладными задачами в команде специалистов.
          </p>
          <a
            href="#internships"
            className="mt-12 inline-flex min-h-20 w-fit items-center justify-center rounded-2xl bg-mkb-red px-9 text-4xl font-black tracking-[-0.05em] text-white transition hover:-translate-y-1 hover:bg-[#c9082f] hover:shadow-mkb-red"
          >
            Выбрать стажировку
          </a>
        </div>
      </section>

      <section id="internships" className="bg-mkb-soft px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1720px]">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-mkb-red">Стажировки MKB</p>
          <h2 className="mt-5 max-w-5xl font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">
            Направления и актуальные вакансии
          </h2>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-relaxed text-mkb-muted">
            Выбери направление, посмотри открытые роли и подай заявку на стажировку в несколько кликов.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            {directions.map((direction) => (
              <button
                key={direction.id}
                type="button"
                onClick={() => selectDirection(direction)}
                className={`min-h-20 rounded-full border px-8 text-2xl font-black tracking-[-0.03em] transition hover:-translate-y-1 hover:shadow-mkb ${
                  direction.id === activeDirection.id
                    ? "border-mkb-red bg-mkb-red text-white shadow-mkb-red"
                    : "border-mkb-red/55 bg-white text-mkb-dark"
                }`}
              >
                {direction.title}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.72fr)]">
            <div className="rounded-[2rem] bg-white p-8 shadow-mkb">
              <h3 className="font-display text-5xl font-black uppercase leading-none tracking-[-0.045em]">
                {activeDirection.title}
              </h3>
              <p className="mt-6 max-w-3xl text-xl font-semibold leading-relaxed text-mkb-muted">
                {activeDirection.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <span className="rounded-full bg-mkb-soft px-6 py-4 text-lg font-black">
                  {activeDirection.vacancies.length} ваканс{getVacancyEnding(activeDirection.vacancies.length)}
                </span>
                <span className="rounded-full bg-[#d8eef8] px-6 py-4 text-lg font-black text-[#0f5b7d]">
                  {openCount} открыто сейчас
                </span>
              </div>
            </div>

            <aside className="rounded-[2rem] bg-gradient-to-b from-[#bd0a31] to-mkb-red p-8 text-white shadow-mkb-red">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/70">Выбранная вакансия</p>
              <h3 className="mt-4 font-display text-5xl font-black leading-none tracking-[-0.045em]">
                {selectedVacancy.title}
              </h3>
              <p className="mt-6 text-xl font-semibold leading-relaxed text-white/90">
                {selectedVacancy.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/15 px-5 py-3 text-base font-black">
                  {activeDirection.title}
                </span>
                <span className="rounded-full bg-white px-5 py-3 text-base font-black text-mkb-red">
                  {selectedVacancy.isOpen ? "Набор открыт" : "Набор закрыт"}
                </span>
              </div>
              <div className="mt-8 grid gap-3">
                {selectedVacancy.points.map((point) => (
                  <div key={point} className="rounded-2xl bg-white/12 px-5 py-4 text-lg font-bold">
                    {point}
                  </div>
                ))}
              </div>
              {selectedVacancy.isOpen ? (
                <Link
                  href="/apply"
                  className="mt-8 flex min-h-16 items-center justify-center rounded-2xl bg-white px-8 text-2xl font-black tracking-[-0.03em] text-mkb-red transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Подать заявку
                </Link>
              ) : (
                <button
                  type="button"
                  disabled
                  className="mt-8 flex min-h-16 w-full cursor-not-allowed items-center justify-center rounded-2xl bg-white/75 px-8 text-2xl font-black tracking-[-0.03em] text-mkb-red/70"
                >
                  Набор закрыт
                </button>
              )}
            </aside>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activeDirection.vacancies.map((vacancy) => {
              const key = getVacancyKey(activeDirection.id, vacancy.title);
              const isSelected = key === selectedVacancyKey;

              return (
                <article
                  key={key}
                  className={`flex min-h-72 flex-col rounded-[2rem] p-7 shadow-mkb transition ${
                    vacancy.isOpen ? "bg-mkb-red text-white hover:-translate-y-1" : "bg-white text-mkb-dark opacity-75"
                  } ${isSelected ? "ring-4 ring-white" : ""}`}
                >
                  <button
                    type="button"
                    disabled={!vacancy.isOpen}
                    onClick={() => setSelectedVacancyKey(key)}
                    className="text-left disabled:cursor-not-allowed"
                  >
                    <h3 className="font-display text-4xl font-black leading-none tracking-[-0.045em]">
                      {vacancy.title}
                    </h3>
                    <p className={`mt-5 text-lg font-semibold leading-relaxed ${vacancy.isOpen ? "text-white/88" : "text-mkb-muted"}`}>
                      {vacancy.description}
                    </p>
                  </button>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                    <span className={`rounded-full px-5 py-3 text-sm font-black uppercase tracking-[0.04em] ${vacancy.isOpen ? "bg-[#419cc7] text-white" : "bg-[#fcd29b] text-[#734315]"}`}>
                      {vacancy.isOpen ? "Набор открыт" : "Набор закрыт"}
                    </span>
                    {vacancy.isOpen ? (
                      <Link href="/apply" className="rounded-full bg-white px-5 py-3 text-base font-black text-mkb-red transition hover:-translate-y-0.5">
                        Подать заявку
                      </Link>
                    ) : (
                      <span className="rounded-full bg-black/5 px-5 py-3 text-base font-black text-mkb-muted">
                        Недоступно
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="journey" className="bg-mkb-soft px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1720px] rounded-[2rem] bg-white p-8 shadow-mkb">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-mkb-red">Следующий шаг</p>
          <h2 className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em]">
            Выбери роль и отправь заявку
          </h2>
        </div>
      </section>
    </main>
  );
}
