import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRight, Check, MessageCircle, Phone, RotateCcw, TriangleAlert } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { BUSINESS } from '@/lib/business';
import {
  EMPTY_ENQUIRY,
  GENDER_OPTIONS,
  OTHER_SERVICE,
  openEnquiryWhatsApp,
  saveEnquiry,
  todayIso,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryPrefill,
  type EnquiryValues,
} from '@/lib/enquiry';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';

type SubmitState =
  | { status: 'idle' }
  | { status: 'sent'; whatsappUrl: string }
  | { status: 'unsaved'; whatsappUrl: string };

interface BookingFormProps {
  prefill: EnquiryPrefill | null;
}

const CONTROL_BASE = 'field';

function controlClass(hasError: boolean) {
  return hasError
    ? `${CONTROL_BASE} !border-error-500 focus:!border-error-500 focus:!ring-error-50`
    : CONTROL_BASE;
}

function Field({ label, error, htmlFor, children }: { label: string; error?: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink-800">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs font-medium text-error-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default function BookingForm({ prefill }: BookingFormProps) {
  const [values, setValues] = useState<EnquiryValues>(EMPTY_ENQUIRY);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitState>({ status: 'idle' });

  useEffect(() => {
    if (!prefill) return;
    setValues((current) => ({
      ...current,
      service: prefill.service,
      gender: prefill.gender ?? current.gender,
    }));
    setErrors({});
    setResult({ status: 'idle' });
  }, [prefill]);

  const updateField = <K extends keyof EnquiryValues>(field: K, value: EnquiryValues[K]) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateEnquiry(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const { url } = openEnquiryWhatsApp(values);
    setSubmitting(true);
    const saved = await saveEnquiry(values);
    setSubmitting(false);
    setResult(saved ? { status: 'sent', whatsappUrl: url } : { status: 'unsaved', whatsappUrl: url });
  };

  const resetForm = () => {
    setValues(EMPTY_ENQUIRY);
    setErrors({});
    setResult({ status: 'idle' });
  };

  return (
    <section id="book" className="scroll-mt-20 bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <p className="section-label">Appointments</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">Book Your Appointment</h2>
          <span aria-hidden="true" className="mt-6 block h-px w-16 bg-gradient-to-r from-gold-300 to-gold-600" />
          <p className="mt-6 text-base leading-[1.5] text-ink-600">
            Share your details and preferred time. We will open WhatsApp with your enquiry already written, so you only need to press send.
          </p>

          <ol className="mt-10 space-y-6">
            {[
              'Fill in your name, mobile number and the service you want.',
              'Pick your preferred date and time.',
              'Send the pre-filled WhatsApp message to confirm.',
            ].map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500/60 text-lg text-gold-700">
                  {index + 1}
                </span>
                <span className="pt-1.5 text-sm leading-[1.5] text-ink-600">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border border-beige-300 bg-beige-50 p-6">
            <p className="text-sm font-semibold text-ink-900">Prefer to speak with us?</p>
            <a
              href={`tel:${BUSINESS.phoneIntl}`}
              className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-gold-800 transition hover:text-ink-900"
            >
              <Phone size={16} aria-hidden="true" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <div className="rounded-[2rem] bg-ivory-50 p-6 shadow-[0_30px_60px_-40px_rgba(18,17,14,0.45)] ring-1 ring-beige-300/70 sm:p-10">
            {result.status !== 'idle' ? (
              <BookingResult result={result} onReset={resetForm} />
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label="Customer Name" htmlFor="customerName" error={errors.customerName}>
                    <input
                      id="customerName"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={values.customerName}
                      onChange={(event) => updateField('customerName', event.target.value)}
                      aria-invalid={Boolean(errors.customerName)}
                      className={controlClass(Boolean(errors.customerName))}
                    />
                  </Field>
                </div>

                <Field label="Mobile Number" htmlFor="mobile" error={errors.mobile}>
                  <input
                    id="mobile"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="e.g. 98xxxxxxxx"
                    value={values.mobile}
                    onChange={(event) => updateField('mobile', event.target.value)}
                    aria-invalid={Boolean(errors.mobile)}
                    className={controlClass(Boolean(errors.mobile))}
                  />
                </Field>

                <Field label="Select Gender" htmlFor="gender" error={errors.gender}>
                  <select
                    id="gender"
                    value={values.gender}
                    onChange={(event) => updateField('gender', event.target.value as EnquiryValues['gender'])}
                    aria-invalid={Boolean(errors.gender)}
                    className={controlClass(Boolean(errors.gender))}
                  >
                    <option value="">Choose one</option>
                    {GENDER_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Service Required" htmlFor="service" error={errors.service}>
                    <select
                      id="service"
                      value={values.service}
                      onChange={(event) => updateField('service', event.target.value)}
                      aria-invalid={Boolean(errors.service)}
                      className={controlClass(Boolean(errors.service))}
                    >
                      <option value="">Choose a service</option>
                      {SERVICE_CATEGORIES.map((category) => (
                        <optgroup key={category.id} label={category.label}>
                          {SERVICES.filter((service) => service.category === category.id).map((service) => (
                            <option key={service.name} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      <option value={OTHER_SERVICE}>{OTHER_SERVICE}</option>
                    </select>
                  </Field>
                </div>

                <Field label="Preferred Date" htmlFor="preferredDate" error={errors.preferredDate}>
                  <input
                    id="preferredDate"
                    type="date"
                    min={todayIso()}
                    value={values.preferredDate}
                    onChange={(event) => updateField('preferredDate', event.target.value)}
                    aria-invalid={Boolean(errors.preferredDate)}
                    className={controlClass(Boolean(errors.preferredDate))}
                  />
                </Field>

                <Field label="Preferred Time" htmlFor="preferredTime" error={errors.preferredTime}>
                  <input
                    id="preferredTime"
                    type="time"
                    value={values.preferredTime}
                    onChange={(event) => updateField('preferredTime', event.target.value)}
                    aria-invalid={Boolean(errors.preferredTime)}
                    className={controlClass(Boolean(errors.preferredTime))}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Additional Message (optional)" htmlFor="message" error={errors.message}>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your hair, skin or style goals"
                      value={values.message}
                      onChange={(event) => updateField('message', event.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      className={`${controlClass(Boolean(errors.message))} resize-none`}
                    />
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold group w-full disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    {submitting ? 'Preparing your enquiry...' : 'Book Your Appointment'}
                    {!submitting && (
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    )}
                  </button>
                  <p className="mt-4 text-center text-xs text-ink-400">
                    Your details open in WhatsApp with the message pre-filled.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BookingResult({ result, onReset }: { result: SubmitState; onReset: () => void }) {
  if (result.status === 'idle') return null;
  const saved = result.status === 'sent';
  return (
    <div className="flex flex-col items-center py-6 text-center sm:py-10" role="status">
      <span
        className={`flex h-16 w-16 items-center justify-center rounded-full ${
          saved ? 'bg-success-50 text-success-500' : 'bg-warning-50 text-warning-500'
        }`}
      >
        {saved ? <Check size={28} aria-hidden="true" /> : <TriangleAlert size={28} aria-hidden="true" />}
      </span>
      <h3 className="mt-6 text-3xl font-medium text-ink-900">
        {saved ? 'Your enquiry is ready' : 'Your WhatsApp message is ready'}
      </h3>
      <p className="mt-4 max-w-md text-sm leading-[1.5] text-ink-600">
        {saved
          ? 'We have noted your details. Send the pre-filled WhatsApp message to confirm your appointment with our team.'
          : 'We could not save your enquiry on our website just now. Please send the pre-filled WhatsApp message so our team receives it.'}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={result.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
          <MessageCircle size={16} aria-hidden="true" />
          Open WhatsApp
        </a>
        <button
          type="button"
          onClick={onReset}
          className="btn-outline-dark"
        >
          <RotateCcw size={15} aria-hidden="true" />
          Make another enquiry
        </button>
      </div>
    </div>
  );
}
