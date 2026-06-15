const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY;

export async function submitWeb3Form(
  fields: Record<string, string | undefined | null>,
  subject = "New PURCURE Website Submission"
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const payload: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: fields.from_name || fields.name || fields.full_name || "PURCURE Website",
    };
    for (const [k, v] of Object.entries(fields)) {
      if (v != null && v !== "") payload[k] = String(v);
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({} as any));
    if (res.ok && data.success !== false) return { ok: true };
    return { ok: false, error: data.message || `Submission failed (${res.status})` };
  } catch (err) {
    console.error("web3forms error:", err);
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
