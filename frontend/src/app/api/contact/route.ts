import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const cleanPhone = (body.phoneNum || "").replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length !== 10) {
      errors.phoneNum = "Please enter a valid 10-digit phone number.";
    }

    if (body.emailAdd && body.emailAdd.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.emailAdd)) {
        errors.emailAdd = "Please enter a valid email address.";
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, message: "Please fix the highlighted errors.", errors },
        { status: 400 }
      );
    }

    // In a production backend, save to database / send email / alert sales team
    console.log("[VisionSquare Infra] New Enquiry Submitted:", {
      fullName: body.fullName,
      phoneNum: body.phoneNum,
      emailAdd: body.emailAdd || "N/A",
      propReq: body.propReq || "Residential Project",
      budgetRange: body.budgetRange || "Not specified",
      contactTime: body.contactTime || "Anytime",
      messageText: body.messageText || "N/A",
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has been received. Opening WhatsApp to share your request directly with our team...",
      data: body,
    });
  } catch (err) {
    console.error("API /api/contact error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
