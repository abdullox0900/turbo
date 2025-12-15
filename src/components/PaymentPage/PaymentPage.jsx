import { useMemo, useState } from 'react';
import { pricingPlans } from '../../data/pricingPlans';

export default function PaymentPage({ planSlug }) {
  const [email, setEmail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const selectedPlan = useMemo(() => {
    return pricingPlans.find((plan) => plan.slug === planSlug) || pricingPlans[0];
  }, [planSlug]);

  const isFormValid = isAgreed && email.trim().length > 3;

  return (
    <main className="bg-black min-h-screen text-white px-6 py-12">
      <div className="max-w-[960px] mx-auto">
        <div className="mb-8">
          <p className="text-sm text-[#A3A3A3]">Шаг 2 из 2</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-glow-purple-strong">
            Подтвердите оплату
          </h1>
          <p className="text-[#A3A3A3] mt-3 max-w-2xl">
            Проверьте выбранный тариф, укажите e-mail для чека и подтвердите согласие с политикой и офертой перед переходом на защищенную платежную страницу.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className={`${selectedPlan.badgeColor} text-white text-xs px-[12px] py-[6px] rounded-full`}>
                  {selectedPlan.badge}
                </span>
                <span className="text-sm text-[#A3A3A3]">{selectedPlan.duration}</span>
              </div>
              <div className="flex items-baseline gap-3">
                <p className="text-4xl font-semibold">{selectedPlan.price}</p>
                <p className="text-sm text-[#A3A3A3]">{selectedPlan.note}</p>
              </div>
              <p className="text-sm text-[#A3A3A3]">
                Оплата проводится через защищённый платежный шлюз. После успешной оплаты вам будет отправлен чек на указанный e-mail.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-7 space-y-4">
              <label className="space-y-2 block">
                <span className="text-base font-medium text-white">E-mail для чека</span>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-black border border-[#2a2a2a] px-4 py-3 text-white focus:border-[#8B5CF6] outline-none transition-colors"
                />
              </label>

              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="mt-1 h-5 w-5 accent-[#8B5CF6] bg-black border border-[#2a2a2a] rounded"
                />
                <span className="text-sm text-[#A3A3A3] leading-relaxed">
                  Подтверждаю, что ознакомлен(а) и согласен(на) с{' '}
                  <a href="/privacy-policy" className="text-[#C7A5FF] underline underline-offset-4 hover:text-white">политикой конфиденциальности</a>{' '}
                  и{' '}
                  <a href="/offer" className="text-[#C7A5FF] underline underline-offset-4 hover:text-white">договором оферты</a>. Автопродление можно отключить до даты следующего списания.
                </span>
              </label>

              <button
                disabled={!isFormValid}
                className={`w-full rounded-2xl px-5 py-4 text-lg font-semibold transition-all duration-300 ${
                  isFormValid
                    ? 'bg-[#8B5CF6] text-white button-glow-animate'
                    : 'bg-[#1f1f1f] text-[#6b6b6b] cursor-not-allowed'
                }`}
              >
                Перейти к оплате
              </button>
              <p className="text-xs text-[#555]">
                Нажимая кнопку, вы переходите на защищенную страницу оплаты банка. Списание по тарифу выполняется после подтверждения платежа.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-7 space-y-4">
            <h3 className="text-xl font-semibold">Чек-лист перед оплатой</h3>
            <ul className="space-y-3 text-sm text-[#A3A3A3]">
              <li className="flex gap-2">
                <span className="text-[#8B5CF6] mt-[2px]">•</span>
                Убедитесь, что выбран нужный тариф и стоимость совпадает.
              </li>
              <li className="flex gap-2">
                <span className="text-[#8B5CF6] mt-[2px]">•</span>
                Проверьте e-mail — на него придет чек и информация о продлении.
              </li>
              <li className="flex gap-2">
                <span className="text-[#8B5CF6] mt-[2px]">•</span>
                Оплата проходит через защищенный шлюз; реквизиты карты обрабатываются платежным провайдером.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
