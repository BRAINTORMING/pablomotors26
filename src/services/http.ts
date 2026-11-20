import { siteConfig } from '../config/site';

export class ApiError extends Error {
  status: number;
  body: unknown;

  constructor(status: number, message: string, body?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
  }
}

export interface HttpOptions extends Omit<RequestInit, 'body' | 'headers'> {
  /** Sent as JSON, with the right Content-Type. */
  json?: unknown;
  headers?: Record<string, string>;
}

function parse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

/** Typed fetch wrapper: const users = await http<User[]>('/users'). Throws ApiError when the response is not ok. */
export async function http<T>(path: string, { json, headers, ...init }: HttpOptions = {}): Promise<T> {
  const response = await fetch(siteConfig.apiUrl + path, {
    ...init,
    headers: json === undefined ? headers : { 'Content-Type': 'application/json', ...headers },
    body: json === undefined ? undefined : JSON.stringify(json),
  });

  const text = await response.text();
  const data = text ? parse(text) : undefined;

  if (!response.ok) throw new ApiError(response.status, response.statusText || 'Request failed', data);
  return data as T;
}
