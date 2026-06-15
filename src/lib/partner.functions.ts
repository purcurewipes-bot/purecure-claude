import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const PartnerSchema = z.object({
  full_name: z.string().trim().min(1).max(120),
  company_name: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(3).max(40),
  country: z.string().trim().min(1).max(80),
  business_type: z.string().trim().min(1).max(80),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(4000),
});

export const submitPartnerInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => PartnerSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("partner_inquiries").insert({
      full_name: data.full_name,
      company_name: data.company_name,
      email: data.email,
      phone: data.phone,
      country: data.country,
      business_type: data.business_type,
      website: data.website || null,
      message: data.message,
    });
    if (error) {
      console.error("Partner inquiry error:", error);
      return { ok: false as const, error: "Could not submit inquiry. Please try again." };
    }
    return { ok: true as const };
  });
