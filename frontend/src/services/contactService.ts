import type { ContactFormData, ContactApiResponse } from "@/types/contact";

export async function submitContactForm(data: ContactFormData): Promise<ContactApiResponse> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Form submission service error:", error);
    return {
      success: false,
      message: "Failed to connect to the server. Please check your connection or contact us via WhatsApp.",
    };
  }
}
