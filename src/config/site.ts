/** Texts and constants shared by the whole app. Change them here instead of inside components. */
export const siteConfig = {
  name: 'Abstract app',
  title: 'Your app starts here',
  description: 'Describe what you want to build in the chat and Abstract will write it live.',
  /** Base URL for src/services/http.ts. Empty means the same origin. */
  apiUrl: '',
} as const;
