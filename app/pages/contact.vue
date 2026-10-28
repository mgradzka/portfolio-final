<script setup lang="ts">
import { contact } from '~/data/site'

useHead({ title: 'Contact' })
useSeoMeta({
  description: 'Get in touch with Martyna Grądzka by e-mail, LinkedIn, GitHub or the contact form.',
})

const form = reactive({ name: '', email: '', message: '' })
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

// The form is prerendered into static HTML, so Netlify Forms detects it at deploy time.
// Here it is submitted with fetch, so the visitor stays on the page and sees the result.
const onSubmit = async (event: Event) => {
  status.value = 'sending'
  try {
    const body = new URLSearchParams(new FormData(event.target as HTMLFormElement) as unknown as Record<string, string>)
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    if (!response.ok) throw new Error(`Form submission failed: ${response.status}`)
    status.value = 'sent'
    Object.assign(form, { name: '', email: '', message: '' })
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div class="contact container">
    <header class="contact__header">
      <p class="eyebrow">Contact</p>
      <h1>Let’s have a chat!</h1>
      <p>
        Have a project in mind or just want to say hi? Write to me at
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        or use the form.
      </p>
      <ul role="list" class="contact__socials">
        <li>
          <a :href="contact.github" target="_blank" rel="noopener">
            <Icon name="ph:github-logo" size="1.75rem" aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a :href="contact.linkedin" target="_blank" rel="noopener">
            <Icon name="ph:linkedin-logo" size="1.75rem" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a :href="`mailto:${contact.email}`">
            <Icon name="ph:envelope-simple" size="1.75rem" aria-hidden="true" />
            <span>E-mail</span>
          </a>
        </li>
      </ul>
    </header>

    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      class="contact__form"
      @submit.prevent="onSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="visually-hidden" aria-hidden="true">
        <label>Don’t fill this out: <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>

      <h2>Contact me</h2>

      <div class="field">
        <label for="name">Name</label>
        <input id="name" v-model="form.name" name="name" type="text" autocomplete="name" required />
      </div>

      <div class="field">
        <label for="email">E-mail</label>
        <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required />
      </div>

      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" name="message" rows="6" required />
      </div>

      <BaseButton type="submit" icon="ph:arrow-right" :disabled="status === 'sending'">
        {{ status === 'sending' ? 'Sending…' : 'Send' }}
      </BaseButton>

      <p v-if="status === 'sent'" class="form-status form-status--success" role="status">
        <Icon name="ph:check-circle" size="1.25rem" aria-hidden="true" />
        Thank you! Your message has been sent. I will get back to you soon.
      </p>
      <p v-else-if="status === 'error'" class="form-status form-status--error" role="alert">
        <Icon name="ph:warning-circle" size="1.25rem" aria-hidden="true" />
        <span>
          Something went wrong. Please try again or write to me directly at
          <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>.
        </span>
      </p>
    </form>
  </div>
</template>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: start;
  gap: clamp(2.5rem, 6vw, 5rem);
  padding-block: clamp(3rem, 8vw, 6rem) var(--section-space);
}

.contact__header h1 {
  font-size: clamp(2.25rem, 1.6rem + 3vw, 3.5rem);
  color: var(--pink-text);
  margin-block: 0.5rem 1.25rem;
}

.contact__header p {
  font-size: 1.0625rem;
}

.contact__header a {
  color: var(--text-strong);
  font-weight: 600;
  text-underline-offset: 0.2em;
  text-decoration-color: var(--pink);
}

.contact__socials {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
}

.contact__socials a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--text-strong);
  transition: color 0.2s;
}

.contact__socials a:hover {
  color: var(--pink-text);
}

.contact__form {
  display: grid;
  gap: 1.5rem;
  padding: clamp(1.5rem, 5vw, 3rem);
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}

.contact__form h2 {
  font-size: 1.5rem;
}

.field {
  display: grid;
  gap: 0.4rem;
}

.field label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-strong);
}

.field input,
.field textarea {
  width: 100%;
  padding: 0.75rem 0.9rem;
  font-size: 1rem;
  background: var(--bg-soft);
  border: 1.5px solid var(--border);
  border-radius: 0.5rem;
  transition:
    border-color 0.2s,
    background-color 0.2s;
}

.field textarea {
  resize: vertical;
}

.field input:hover,
.field textarea:hover {
  border-color: var(--text-muted);
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--blue-text);
  background: var(--surface);
  box-shadow: 0 0 0 3px var(--blue-light);
}

.contact__form .btn {
  justify-self: start;
}

.form-status {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  padding: 0.9rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

.form-status svg {
  flex: none;
  margin-top: 0.15rem;
}

.form-status--success {
  background: #e3f3ea;
  color: #1f6b43;
}

.form-status--error {
  background: #fbe7ee;
  color: var(--pink-text);
}

.form-status a {
  color: inherit;
}

@media (max-width: 55rem) {
  .contact {
    grid-template-columns: 1fr;
  }
}
</style>
