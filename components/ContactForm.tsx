"use client";

import { useState } from "react";
import { sendContactForm } from "@/app/actions/contact";
import type { ContactFormData, ContactFormResponse } from "@/types";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({ name: "", email: "", subject: "", message: "" });
  const [response, setResponse] = useState<ContactFormResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await sendContactForm(form);
    setResponse(result);
    setLoading(false);
    if (result.success) setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section style={{ backgroundColor: '#1f2937', padding: '48px 16px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '32px', color: 'white' }}>
          Contacto
        </h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { field: 'name', label: 'Nombre:', type: 'text', placeholder: '' },
            { field: 'subject', label: 'Asunto:', type: 'text', placeholder: '' },
            { field: 'email', label: 'Email:', type: 'email', placeholder: '' },
          ].map(({ field, label, type }) => (
            <div key={field}>
              <label style={{ color: 'white', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>{label}</label>
              <input
                type={type}
                name={field}
                value={form[field as keyof ContactFormData]}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: 'none', boxSizing: 'border-box' }}
              />
              {response?.errors?.[field as keyof ContactFormData] && (
                <p style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '4px' }}>
                  {response.errors[field as keyof ContactFormData]}
                </p>
              )}
            </div>
          ))}
          <div>
            <label style={{ color: 'white', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Mensaje:</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: 'none', boxSizing: 'border-box' }}
            />
            {response?.errors?.message && <p style={{ color: '#f87171', fontSize: '0.875rem' }}>{response.errors.message}</p>}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              disabled={loading}
              style={{ padding: '10px 32px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
          {response?.success && <p style={{ color: '#4ade80', textAlign: 'center', fontWeight: '500' }}>{response.message}</p>}
        </form>
      </div>
    </section>
  );
}