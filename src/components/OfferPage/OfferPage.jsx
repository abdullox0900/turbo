export default function OfferPage() {
  return (
    <main className="bg-black text-white px-6 py-12 min-h-screen">
      <div className="max-w-[1136px] mx-auto space-y-10">
        <header className="space-y-3">
          <p className="text-sm text-[#A3A3A3]">Обновлено: 10.02.2025</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-glow-purple-strong">
            Публичная оферта сервиса «Турбо Интернет»
          </h1>
          <p className="text-[#A3A3A3] text-base leading-relaxed max-w-3xl">
            Настоящий документ является официальным предложением заключить договор возмездного оказания услуг в порядке ст. 437 ГК РФ. Оплата через ЮKassa означает акцепт оферты и заключение договора.
          </p>
        </header>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">1. Стороны и предмет договора</h2>
          <p className="text-[#A3A3A3] leading-relaxed">
            Оферент: сервис «Турбо Интернет» (Оператор). Акцептант: пользователь, принимающий условия оферты. Предмет — предоставление доступа к сервису и услугам связи/ускорения трафика согласно выбранному тарифу.
          </p>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">2. Порядок оплаты</h2>
          <ul className="list-disc list-inside text-[#A3A3A3] space-y-3 leading-relaxed">
            <li>Оплата производится онлайн через ЮKassa. Платежи принимаются банковскими картами, а также иными способами, поддерживаемыми ЮKassa.</li>
            <li>Платеж обрабатывается на защищенной странице провайдера; реквизиты карты не передаются Оференту.</li>
            <li>Чек направляется на указанный e-mail. Стоимость и периодичность списаний соответствуют выбранному тарифу.</li>
            <li>При повторяющихся платежах/подписке пользователь дает согласие на регулярные списания до отключения автопродления.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">3. Условия оказания услуг</h2>
          <ul className="list-disc list-inside text-[#A3A3A3] space-y-3 leading-relaxed">
            <li>Доступ предоставляется после подтверждения оплаты или в рамках оплаченного пробного периода.</li>
            <li>Качество и доступность услуг зависят от технических возможностей оборудования и каналов связи пользователя.</li>
            <li>Оферент вправе проводить профилактические работы с временным ограничением доступа, уведомляя пользователей.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">4. Права и обязанности пользователя</h2>
          <ul className="list-disc list-inside text-[#A3A3A3] space-y-3 leading-relaxed">
            <li>Указывать достоверные данные (e-mail, телефон) для получения уведомлений и чеков.</li>
            <li>Не передавать доступ к аккаунту третьим лицам и соблюдать требования законодательства РФ.</li>
            <li>Отключить автопродление до даты следующего списания, указанной в уведомлениях/чеке, если не планируете продление.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">5. Возвраты и претензии</h2>
          <ul className="list-disc list-inside text-[#A3A3A3] space-y-3 leading-relaxed">
            <li>Возвраты за оплаченный период осуществляются по правилам сервиса и в пределах, указанных в описании тарифа (например, 14 дней). Финансовые операции проводит ЮKassa.</li>
            <li>Претензии направляются в поддержку с описанием проблемы и чеком оплаты.</li>
            <li>Срок рассмотрения претензий — до 10 рабочих дней, если иное не требуется по закону.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">6. Персональные данные</h2>
          <p className="text-[#A3A3A3] leading-relaxed">
            Обработка персональных данных осуществляется по Политике конфиденциальности. При оплате через ЮKassa данные платежа обрабатываются провайдером в соответствии с его правилами и стандартом PCI DSS.
          </p>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">7. Заключительные положения</h2>
          <p className="text-[#A3A3A3] leading-relaxed">
            Оферта действует с момента размещения и до ее отзыва. Оферент вправе изменять условия, размещая новую редакцию. Акцепт оферты означает согласие с актуальными условиями.
          </p>
          <p className="text-sm text-[#6b6b6b]">
            В случае расхождений между описанием тарифов и настоящей офертой применяются условия, опубликованные на сайте в момент оплаты.
          </p>
        </section>
      </div>
    </main>
  );
}
