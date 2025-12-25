import { useEffect, useState } from 'react';

export default function PaymentSuccessPage() {
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const run = async () => {
      setStatus('loading');
      setError('');

      try {
        const apiBaseUrl = import.meta?.env?.VITE_API_BASE_URL || '';
        const paymentIdFromStorage = window?.localStorage?.getItem('lastPaymentId') || '';

        if (!paymentIdFromStorage) {
          setStatus('unknown');
          return;
        }

        const response = await fetch(`${apiBaseUrl}/api/payments/status/${encodeURIComponent(paymentIdFromStorage)}`);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        const paymentStatus = data?.status;
        if (!paymentStatus) {
          setStatus('unknown');
          return;
        }

        if (!isMounted) return;
        setStatus(paymentStatus);
      } catch (e) {
        if (!isMounted) return;
        setError(e?.message || 'Failed to verify payment');
        setStatus('unknown');
      }
    };

    run();
    return () => {
      isMounted = false;
    };
  }, []);

  const isSucceeded = status === 'succeeded';
  const isCanceled = status === 'canceled';
  const isPending = status === 'pending' || status === 'waiting_for_capture';

  return (
    <main className="bg-black min-h-screen text-white px-6 py-12">
      <div className="max-w-[720px] mx-auto">
        <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8">
          {status === 'loading' ? (
            <>
              <h1 className="text-3xl md:text-4xl font-semibold text-glow-purple-strong">Проверяем оплату…</h1>
              <p className="text-[#A3A3A3] mt-3">Подождите, мы уточняем статус платежа.</p>
            </>
          ) : isSucceeded ? (
            <>
              <h1 className="text-3xl md:text-4xl font-semibold text-glow-purple-strong">Оплата прошла успешно</h1>
              <p className="text-[#A3A3A3] mt-3">
                Спасибо! Если чек был указан, он придет на e-mail. Вы можете вернуться на главную страницу.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-semibold text-glow-purple-strong">
                {isCanceled ? 'Платеж отменен' : isPending ? 'Платеж не завершен' : 'Не удалось подтвердить оплату'}
              </h1>
              <p className="text-[#A3A3A3] mt-3">
                {isCanceled
                  ? 'Вы вышли из оплаты или платеж был отменен. Оплата не была списана.'
                  : isPending
                    ? 'Платеж еще обрабатывается. Если вы не завершили оплату, вернитесь и попробуйте снова.'
                    : 'Мы не получили подтверждение успешной оплаты. Попробуйте повторить оплату.'}
              </p>
            </>
          )}

          {error ? <p className="text-sm text-red-400 mt-3">{error}</p> : null}

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {isSucceeded ? (
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-4 text-lg font-semibold bg-[#8B5CF6] text-white button-glow-animate"
              >
                На главную
              </a>
            ) : (
              <a
                href="/payment"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-4 text-lg font-semibold bg-[#8B5CF6] text-white button-glow-animate"
              >
                Повторить оплату
              </a>
            )}
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-4 text-lg font-semibold bg-[#1f1f1f] text-white"
            >
              Тарифы
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
