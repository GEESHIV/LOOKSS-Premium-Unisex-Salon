export interface GalleryItem {
  alt: string;
  image: string;
  caption: string;
  span: 'tall' | 'wide' | 'square';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { caption: 'Modern Salon Interior', alt: 'Bright modern salon interior with round mirrors', image: 'https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg', span: 'wide' },
  { caption: "Men's Haircut", alt: 'Close-up of a man receiving a precise haircut', image: 'https://images.pexels.com/photos/12304510/pexels-photo-12304510.jpeg', span: 'tall' },
  { caption: 'Professional Hairstyling', alt: 'Stylist cutting a client hair in a salon', image: 'https://images.pexels.com/photos/3993445/pexels-photo-3993445.jpeg', span: 'square' },
  { caption: 'Hair Colouring', alt: 'Hairstylist applying colour to a client hair', image: 'https://images.pexels.com/photos/8468127/pexels-photo-8468127.jpeg', span: 'square' },
  { caption: "Women's Hairstyles", alt: 'Woman with long straight hair in a salon chair', image: 'https://images.pexels.com/photos/30661047/pexels-photo-30661047.jpeg', span: 'tall' },
  { caption: 'Salon Chairs and Mirrors', alt: 'Contemporary salon with sleek chairs and illuminated mirrors', image: 'https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg', span: 'wide' },
  { caption: 'Beard Grooming', alt: "Barber grooming a bearded man's beard", image: 'https://images.pexels.com/photos/3998427/pexels-photo-3998427.jpeg', span: 'square' },
  { caption: 'Hair Treatments', alt: 'Relaxing scalp massage during a hair treatment', image: 'https://images.pexels.com/photos/33380403/pexels-photo-33380403.jpeg', span: 'square' },
  { caption: 'Makeup Looks', alt: 'Close-up of a woman with bold eye makeup', image: 'https://images.pexels.com/photos/5693815/pexels-photo-5693815.jpeg', span: 'tall' },
  { caption: 'Hair Wash Ritual', alt: 'Man enjoying a relaxing hair wash at a salon sink', image: 'https://images.pexels.com/photos/20092123/pexels-photo-20092123.jpeg', span: 'wide' },
  { caption: 'Bold Beauty', alt: 'Portrait with bold red lipstick and dramatic eye makeup', image: 'https://images.pexels.com/photos/20670742/pexels-photo-20670742.jpeg', span: 'square' },
  { caption: 'Barber Precision', alt: "Barber trimming a client's hair with clippers", image: 'https://images.pexels.com/photos/18503604/pexels-photo-18503604.jpeg', span: 'square' },
];
