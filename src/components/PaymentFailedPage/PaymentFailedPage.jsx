export default function PaymentFailedPage() {
  return (
    <main className="bg-black min-h-screen text-white px-6 py-12">
      <div className="max-w-[720px] mx-auto">
        <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]/70 p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-glow-purple-strong">Оплата не прошла</h1>
          <p className="text-[#A3A3A3] mt-3">
            Платеж не был завершен или был отклонен. Попробуйте еще раз или выберите другой способ оплаты.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/payment"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-4 text-lg font-semibold bg-[#8B5CF6] text-white button-glow-animate"
            >
              Повторить оплату
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-4 text-lg font-semibold bg-[#1f1f1f] text-white"
            >
              На главную
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
