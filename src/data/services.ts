export const SERVICE_CATEGORIES = [
  { id: 'hair', label: 'Hair Services' },
  { id: 'grooming', label: "Men's Grooming" },
  { id: 'beauty', label: 'Beauty Services' },
  { id: 'bridal', label: 'Bridal & Makeup' },
] as const;

export type ServiceCategoryId = (typeof SERVICE_CATEGORIES)[number]['id'];

export interface Service {
  name: string;
  description: string;
  image: string;
  category: ServiceCategoryId;
}

export const SERVICES: Service[] = [
  { category: 'hair', name: 'Haircut & Styling', description: 'Precision cuts and finishing styles shaped around your face and daily routine.', image: 'https://images.pexels.com/photos/3993290/pexels-photo-3993290.jpeg' },
  { category: 'hair', name: 'Hair Wash', description: 'A relaxing wash and conditioning ritual to refresh your hair and scalp.', image: 'https://images.pexels.com/photos/11360227/pexels-photo-11360227.jpeg' },
  { category: 'hair', name: 'Hair Spa', description: 'Nourishing treatments and scalp massage for healthier, softer hair.', image: 'https://images.pexels.com/photos/33380403/pexels-photo-33380403.jpeg' },
  { category: 'hair', name: 'Hair Colour', description: 'Shades chosen to complement your skin tone and personal style.', image: 'https://images.pexels.com/photos/8468038/pexels-photo-8468038.jpeg' },
  { category: 'hair', name: 'Hair Highlights', description: 'Dimensional highlights that add light, depth and movement.', image: 'https://images.pexels.com/photos/8468126/pexels-photo-8468126.jpeg' },
  { category: 'hair', name: 'Hair Smoothening', description: 'Smoother, more manageable hair with a polished, glossy finish.', image: 'https://images.pexels.com/photos/30661047/pexels-photo-30661047.jpeg' },
  { category: 'hair', name: 'Hair Straightening', description: 'Sleek, straight results tailored to your hair type and texture.', image: 'https://images.pexels.com/photos/20010869/pexels-photo-20010869.jpeg' },
  { category: 'grooming', name: "Men's Haircut", description: 'Clean, contemporary cuts and fades for every hair type.', image: 'https://images.pexels.com/photos/4625626/pexels-photo-4625626.jpeg' },
  { category: 'grooming', name: 'Beard Styling', description: 'Shape and style your beard to suit your face and personality.', image: 'https://images.pexels.com/photos/9992820/pexels-photo-9992820.jpeg' },
  { category: 'grooming', name: 'Beard Trimming', description: 'Precise trims that keep your beard neat, defined and well kept.', image: 'https://images.pexels.com/photos/3998412/pexels-photo-3998412.jpeg' },
  { category: 'grooming', name: 'Hair Styling', description: 'Modern styling for a polished, confident look for everyday or occasions.', image: 'https://images.pexels.com/photos/7781848/pexels-photo-7781848.jpeg' },
  { category: 'beauty', name: 'Facial', description: 'Cleansing and nourishing facial care for a fresh, glowing complexion.', image: 'https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg' },
  { category: 'beauty', name: 'Cleanup', description: 'A quick refresh that cleanses and brightens for a clear, even skin tone.', image: 'https://images.pexels.com/photos/37229298/pexels-photo-37229298.jpeg' },
  { category: 'beauty', name: 'Skin Care', description: 'Personalised skin care sessions to support your everyday routine.', image: 'https://images.pexels.com/photos/37229309/pexels-photo-37229309.jpeg' },
  { category: 'beauty', name: 'Threading', description: 'Clean, precise threading for defined brows and facial grooming.', image: 'https://images.pexels.com/photos/2761928/pexels-photo-2761928.jpeg' },
  { category: 'beauty', name: 'Waxing', description: 'Gentle waxing services for smooth, polished results.', image: 'https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg' },
  { category: 'bridal', name: 'Party Makeup', description: 'Bold or soft party makeup designed to last through the evening.', image: 'https://images.pexels.com/photos/10208121/pexels-photo-10208121.jpeg' },
  { category: 'bridal', name: 'Bridal Makeup', description: 'Timeless bridal looks crafted for your special day.', image: 'https://images.pexels.com/photos/35983894/pexels-photo-35983894.jpeg' },
  { category: 'bridal', name: 'Hairstyling', description: 'Elegant updos, waves and occasion hairstyles.', image: 'https://images.pexels.com/photos/7440134/pexels-photo-7440134.jpeg' },
  { category: 'bridal', name: 'Special Occasion Makeup', description: 'Refined makeup for celebrations, events and photo-ready moments.', image: 'https://images.pexels.com/photos/18719146/pexels-photo-18719146.jpeg' },
];
