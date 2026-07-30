export const CONTACT_INFO = {
  phoneDisplay: '(403) 899-0277',
  phoneRaw: '14038990277', // Format for tel: and whatsapp: country code + area code + number
  whatsappNumber: '14038990277', // Paramjit Kaur's WhatsApp number
  email: 'info@paramdayhome.ca',
  address: 'Citadel Way NW, Calgary, AB T3R 1J4',
  ownerName: 'Paramjit Kaur',
};

export interface BookingFormData {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  program: string;
  preferredDate: string;
  message?: string;
}

export function generateWhatsAppBookingUrl(data: BookingFormData): string {
  const text = `Hello ${CONTACT_INFO.ownerName}! 👋\n\nI would like to book a visit to Param Dayhome:\n\n👤 *Parent Name:* ${data.parentName}\n📞 *Phone:* ${data.phone}\n📧 *Email:* ${data.email}\n👶 *Child Age:* ${data.childAge}\n📚 *Program Interested:* ${data.program}\n📅 *Preferred Visit Date:* ${data.preferredDate}${data.message ? `\n💬 *Notes:* ${data.message}` : ''}\n\nThank you!`;

  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
