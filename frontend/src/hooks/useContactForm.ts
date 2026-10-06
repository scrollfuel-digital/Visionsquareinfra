"use client";

import { useState } from "react";

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return { isSubmitting, setIsSubmitting };
}
