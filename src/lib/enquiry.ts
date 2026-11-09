import { BUSINESS, buildWhatsAppUrl } from '@/lib/business';
import { supabase } from '@/lib/supabase';
import { SERVICES } from '@/data/services';

export const GENDER_OPTIONS = ['Male', 'Female', 'Other'] as const;
export type Gender = (typeof GENDER_OPTIONS)[number];

export const OTHER_SERVICE = 'Other / Not sure';

export interface EnquiryValues {
  customerName: string;
  mobile: string;
  gender: Gender | '';
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

export interface EnquiryPrefill {
  service: string;
  gender?: Gender;
  key: number;
}

export const EMPTY_ENQUIRY: EnquiryValues = {
  customerName: '',
  mobile: '',
  gender: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

const MOBILE_PATTERN = /^\+?\d{10,13}$/;
const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;

export function normalizeMobile(mobile: string) {
  return mobile.replace(/[\s()-]/g, '');
}

export function todayIso() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const name = values.customerName.trim();
  const serviceNames: string[] = [...SERVICES.map((service) => service.name), OTHER_SERVICE];

  if (!name) errors.customerName = 'Please enter your name.';
  else if (name.length > 100) errors.customerName = 'Please keep your name under 100 characters.';

  if (!values.mobile.trim()) errors.mobile = 'Please enter your mobile number.';
  else if (!MOBILE_PATTERN.test(normalizeMobile(values.mobile))) {
    errors.mobile = 'Please enter a valid mobile number with 10 to 13 digits.';
  }

  if (!values.gender) errors.gender = 'Please select an option.';

  if (!values.service) errors.service = 'Please choose a service.';
  else if (!serviceNames.includes(values.service)) errors.service = 'Please choose a service from the list.';

  if (!values.preferredDate) errors.preferredDate = 'Please choose a date.';
  else if (values.preferredDate < todayIso()) errors.preferredDate = 'Please choose today or a future date.';

  if (!values.preferredTime) errors.preferredTime = 'Please choose a time.';
  else if (!TIME_PATTERN.test(values.preferredTime)) errors.preferredTime = 'Please choose a valid time.';

  if (values.message.trim().length > 1000) errors.message = 'Please keep your message under 1000 characters.';

  return errors;
}

function formatDate(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function buildEnquiryMessage(values: EnquiryValues) {
  const lines = [
    `Hello ${BUSINESS.name},`,
    '',
    'I would like to book an appointment. Here are my details:',
    '',
    `Name: ${values.customerName.trim()}`,
    `Mobile: ${normalizeMobile(values.mobile)}`,
    `Gender: ${values.gender}`,
    `Service required: ${values.service}`,
    `Preferred date: ${formatDate(values.preferredDate)}`,
    `Preferred time: ${values.preferredTime}`,
  ];

  const note = values.message.trim();
  if (note) lines.push(`Additional message: ${note}`);

  lines.push('', 'Thank you.');
  return lines.join('\n');
}

export function openEnquiryWhatsApp(values: EnquiryValues) {
  const url = buildWhatsAppUrl(buildEnquiryMessage(values));
  const popup = window.open(url, '_blank', 'noopener,noreferrer');
  return { url, opened: popup !== null };
}

export async function saveEnquiry(values: EnquiryValues): Promise<boolean> {
  if (!supabase) return false;
  try {
    const { error } = await supabase.from('appointment_enquiries').insert({
      customer_name: values.customerName.trim(),
      mobile_number: normalizeMobile(values.mobile),
      gender: values.gender,
      service_required: values.service,
      preferred_date: values.preferredDate,
      preferred_time: values.preferredTime,
      message: values.message.trim() || null,
    });
    return !error;
  } catch {
    return false;
  }
}
