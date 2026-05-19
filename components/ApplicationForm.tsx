"use client";

import Link from "next/link";
import { useState } from "react";
import FormField from "./FormField";

const fields = [
  { label: "ФИО", placeholder: "Введите ФИО" },
  { label: "Дата рождения", placeholder: "дд.мм.гггг", type: "text" },
  { label: "Гражданство", placeholder: "Например, Россия" },
  { label: "Город проживания", placeholder: "Введите город" },
  { label: "Телефон", placeholder: "+7 999 000-00-00", type: "tel" },
  { label: "Почта", placeholder: "mail@example.com", type: "email" },
  { label: "Ник в Telegram", placeholder: "@username" },
  { label: "ВУЗ", placeholder: "Введите название ВУЗа" },
  { label: "Курс обучения", placeholder: "Например, 3 курс" },
  { label: "Специальность", placeholder: "Введите специальность" },
];

export default function ApplicationForm() {
  const [isSent, setIsSent] = useState(false);

  if (isSent) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white px-5 py-16">
        <div className="animate-fade-up text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-mkb-red">
            Заявка принята
          </p>
          <h1 className="font-display text-5xl font-black leading-none tracking-[-0.05em] text-mkb-dark sm:text-7xl">
            Отклик успешно отправлен
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-mkb-muted">
            Мы свяжемся с вами в течение 5 рабочих дней
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex min-h-16 items-center justify-center rounded-2xl bg-mkb-red px-10 text-xl font-black text-white shadow-mkb-red transition hover:-translate-y-1 hover:bg-[#c9082f] focus:outline-none focus:ring-4 focus:ring-mkb-red/25"
          >
            Вернуться на главную
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-white px-5 py-8 text-mkb-dark sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-6 rounded-[2rem] bg-mkb-soft p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link
              href="/"
              className="mb-8 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-mkb-red transition hover:text-[#b8072a]"
            >
              ← На главную
            </Link>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-mkb-red">
              МКБ Universe
            </p>
            <h1 className="font-display text-5xl font-black leading-none tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Заявка на стажировку
            </h1>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-relaxed text-mkb-muted">
            Заполни визуальную форму прототипа. Данные никуда не отправляются и не сохраняются.
          </p>
        </header>

        <form
          className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-mkb sm:p-8 lg:p-10"
          onSubmit={(event) => {
            event.preventDefault();
            setIsSent(true);
          }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {fields.map((field) => (
              <FormField key={field.label} {...field} />
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
            <label className="block">
              <span className="mb-2 block text-sm font-bold uppercase tracking-[0.08em] text-mkb-muted">
                Сопроводительное письмо
              </span>
              <textarea
                placeholder="Расскажите о себе"
                className="min-h-44 w-full resize-none rounded-2xl border border-black/10 bg-white px-5 py-4 text-base font-semibold text-mkb-dark outline-none transition placeholder:text-black/35 hover:border-mkb-red/45 focus:border-mkb-red focus:ring-4 focus:ring-mkb-red/10"
              />
            </label>

            <div className="flex flex-col justify-between gap-6 rounded-3xl bg-mkb-soft p-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-mkb-muted">
                  Резюме
                </p>
                <p className="mt-3 text-base font-semibold leading-relaxed text-mkb-dark">
                  Можно показать будущий сценарий загрузки файла без реальной отправки.
                </p>
              </div>
              <button
                type="button"
                className="min-h-14 rounded-2xl border border-mkb-red bg-white px-5 text-base font-black text-mkb-red transition hover:-translate-y-0.5 hover:bg-mkb-red hover:text-white focus:outline-none focus:ring-4 focus:ring-mkb-red/20"
              >
                Прикрепить резюме
              </button>
            </div>
          </div>

          <label className="mt-8 flex items-center gap-4 text-base font-semibold text-mkb-dark">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-black/20 text-mkb-red focus:ring-mkb-red"
            />
            <span>Согласен на обработку персональных данных</span>
          </label>

          <button
            type="submit"
            className="mt-10 flex min-h-16 w-full items-center justify-center rounded-2xl bg-mkb-red px-8 text-xl font-black text-white shadow-mkb-red transition hover:-translate-y-1 hover:bg-[#c9082f] focus:outline-none focus:ring-4 focus:ring-mkb-red/25"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </main>
  );
}
