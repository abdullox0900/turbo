export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white px-6 py-12 min-h-screen">
      <div className="max-w-[1136px] mx-auto space-y-10">
        <header className="space-y-3">
          <p className="text-sm text-[#A3A3A3]">Обновлено: 10.02.2025</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-glow-purple-strong">
            Политика конфиденциальности сервиса «Турбо Интернет»
          </h1>
          <p className="text-[#A3A3A3] text-base leading-relaxed max-w-3xl">
            Настоящая Политика описывает, какие персональные данные мы собираем, как их обрабатываем и какие права имеют пользователи в соответствии с законодательством РФ, включая 152-ФЗ «О персональных данных».
          </p>
        </header>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-semibold">1. Общие положения</h2>
          <div className="text-[#A3A3A3] space-y-4 leading-relaxed">
            <p>
              Оператор персональных данных: сервис «Турбо Интернет» (далее — «Оператор»). Политика распространяется на всех пользователей сайта и сервисов, включая оплату подписки и пробного периода.
            </p>
            <p>
              Используя сайт и оформляя заказ, вы подтверждаете согласие с настоящей Политикой и условиями обработки данных.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">2. Какие данные мы собираем</h2>
          <ul className="list-disc list-inside text-[#A3A3A3] space-y-3 leading-relaxed">
            <li>Контактные данные: имя, номер телефона, e-mail, данные аккаунта.</li>
            <li>Платежные данные: данные транзакций, сумма, статус оплаты, срок подписки (платежные реквизиты хранятся у платежного провайдера).</li>
            <li>Технические данные: IP-адрес, данные файлов cookie, сведения о браузере и устройстве.</li>
            <li>Обращения в поддержку и записи чатов, связанные с обслуживанием подписки.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">3. Цели обработки данных</h2>
          <ul className="list-disc list-inside text-[#A3A3A3] space-y-3 leading-relaxed">
            <li>Заключение и исполнение договора на предоставление сервиса и доступа к подписке.</li>
            <li>Прием платежей, учет пробного периода, продление подписки и выставление счетов.</li>
            <li>Обработка обращений, техническая поддержка, уведомления об обновлениях и акциях.</li>
            <li>Выполнение требований законодательства РФ, бухгалтерский и налоговый учет.</li>
            <li>Повышение качества сервиса, аналитика и улучшение работы сайта.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">4. Правовые основания</h2>
          <ul className="list-disc list-inside text-[#A3A3A3] space-y-3 leading-relaxed">
            <li>Согласие пользователя, выраженное при оформлении заказа и акцепте оферты.</li>
            <li>Необходимость исполнения договора (оказание услуг связи/доступа к сервису).</li>
            <li>Законные интересы Оператора, не нарушающие права и свободы пользователя.</li>
            <li>Требования законодательства РФ, включая 152-ФЗ «О персональных данных» и 54-ФЗ.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#3a2a63] bg-[#120c1f]/80 p-6 md:p-8 space-y-4 shadow-[0_0_60px_rgba(139,92,246,0.2)]">
          <h2 className="text-2xl font-semibold text-[#C7A5FF]">5. Платежи, пробный период и автопродление</h2>
          <ul className="list-disc list-inside text-[#C7A5FF] space-y-3 leading-relaxed">
            <li>Пробный период предоставляется на условиях, указанных при оформлении заказа.</li>
            <li>После оплаты пробного периода и его окончания стоимость месячной подписки списывается автоматически на привязанной карте до отмены автопродления.</li>
            <li>Вы можете отключить автопродление в личном кабинете или через поддержку до даты следующего списания, указанной в чеке/уведомлении.</li>
            <li>При невозможности списания доступ может быть приостановлен до успешной оплаты.</li>
          </ul>
          <p className="text-[#A3A3A3] leading-relaxed">
            Оплату обрабатывает сертифицированный платежный провайдер; реквизиты карты передаются и хранятся у него с соблюдением стандартов PCI DSS.
          </p>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">6. Передача третьим лицам</h2>
          <ul className="list-disc list-inside text-[#A3A3A3] space-y-3 leading-relaxed">
            <li>Платежные провайдеры для проведения операций и возвратов.</li>
            <li>Хостинг-провайдеры, службы аналитики и связи (e-mail/SMS/push) для отправки уведомлений.</li>
            <li>Государственные органы — только по законным запросам на основании законодательства РФ.</li>
          </ul>
          <p className="text-[#A3A3A3] leading-relaxed">
            Передача осуществляется на основании договоров и при условии соблюдения конфиденциальности и требований 152-ФЗ.
          </p>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">7. Сроки хранения</h2>
          <p className="text-[#A3A3A3] leading-relaxed">
            Данные хранятся в течение срока действия договора, а также в сроки, установленные законодательством РФ (например, для бухгалтерской отчетности и претензионной работы). После истечения сроков данные удаляются или обезличиваются.
          </p>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">8. Права пользователя</h2>
          <ul className="list-disc list-inside text-[#A3A3A3] space-y-3 leading-relaxed">
            <li>Получать информацию об обработке персональных данных и копию Политики.</li>
            <li>Требовать уточнения, блокирования или удаления данных при наличии оснований.</li>
            <li>Отозвать согласие на обработку, связавшись с поддержкой (при этом доступ к сервису может быть ограничен).</li>
            <li>Оспорить действия Оператора в порядке, установленном законодательством РФ.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">9. Безопасность</h2>
          <ul className="list-disc list-inside text-[#A3A3A3] space-y-3 leading-relaxed">
            <li>Используем шифрование при передаче данных и ограниченный доступ сотрудников.</li>
            <li>Регулярно обновляем программное обеспечение и применяем многоуровневую защиту учетных записей.</li>
            <li>Платежные операции проходят через защищенные каналы по стандарту PCI DSS.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">10. Cookie и аналитика</h2>
          <p className="text-[#A3A3A3] leading-relaxed">
            Мы используем cookie-файлы и схожие технологии для авторизации, персонализации, аналитики и повышения качества сервиса. Вы можете ограничить использование cookie в настройках браузера, однако это может снизить стабильность работы сайта.
          </p>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">11. Изменение Политики</h2>
          <p className="text-[#A3A3A3] leading-relaxed">
            Политика может обновляться. Актуальная редакция размещена на этой странице; дата обновления указана в начале документа. Продолжая пользоваться сервисом после изменения Политики, вы подтверждаете согласие с обновленной редакцией.
          </p>
        </section>

        <section className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">12. Контакты</h2>
          <p className="text-[#A3A3A3] leading-relaxed">
            По вопросам обработки персональных данных и отключения автопродления обращайтесь через службу поддержки, указанную на сайте. Мы ответим в сроки, установленные законодательством РФ.
          </p>
        </section>
      </div>
    </main>
  )
}
