export const BUSINESS = {
  name: 'LOOKSS PREMIUM UNISEX SALON',
  shortName: 'LOOKSS',
  category: 'Premium Unisex Salon',
  addressLines: ['Raipur Khadar, Sector 126', 'Noida, Uttar Pradesh 201313'],
  phone: '08130826066',
  phoneIntl: '+918130826066',
  altPhone: '08447990849',
  whatsappNumber: '918130826066',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=LOOKSS+PREMIUM+UNISEX+SALON+Raipur+Khadar+Sector+126+Noida',
  generalMessage:
    'Hello LOOKSS PREMIUM UNISEX SALON! I would like to enquire about your salon services and appointment availability.',
} as const;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WHATSAPP_URL = buildWhatsAppUrl(BUSINESS.generalMessage);
