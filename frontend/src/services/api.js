// api.js

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

/**
 * Generic fetch helper that automatically attaches:
 * - JSON Content-Type
 * - Bearer token from getToken()
 *
 * @param {string} endpoint
 * @param {Function} getToken - async function that returns a token string
 * @param {RequestInit} [options]
 */
export async function fetchWithAuth(endpoint, getToken, options = {}) {
  const token = await getToken();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...(options.headers || {}),
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    // Try to read JSON error body; fall back to text; then generic
    let message = "Request failed";
    try {
      const data = await response.json();
      message = data?.detail || data?.message || message;
    } catch {
      try {
        const text = await response.text();
        if (text) message = text;
      } catch {
        // ignore
      }
    }
    throw new Error(message);
  }

  // No content
  if (response.status === 204) return null;

  // If server returns non-JSON sometimes, handle it safely
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
}

/** Tasks API */
export function getTasks(getToken) {
  return fetchWithAuth("/api/tasks", getToken);
}

export function createTask(getToken, task) {
  return fetchWithAuth("/api/tasks", getToken, {
    method: "POST",
    body: JSON.stringify(task),
  });
}

export function updateTask(getToken, taskId, task) {
  return fetchWithAuth(`/api/tasks/${taskId}`, getToken, {
    method: "PUT",
    body: JSON.stringify(task),
  });
}

export function deleteTask(getToken, taskId) {
  return fetchWithAuth(`/api/tasks/${taskId}`, getToken, {
    method: "DELETE",
  });
}
