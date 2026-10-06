import type { ContactFormData } from "@/types/contact";

export async function submitContactForm(data: ContactFormData) {
  return { accepted: true, data };
}
