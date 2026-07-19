const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function request(path, options) {
  const response = await fetch(`${API_URL}${path}`, options);

  if (!response.ok) {
    throw new Error(`A API respondeu com o status ${response.status}.`);
  }

  if (response.status === 204) return null;
  return response.json();
}

export function getComments({ signal } = {}) {
  return request("/comments", { signal });
}

export function createComment(comment) {
  return request("/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
}

export function updateComment(id, comment) {
  return request(`/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comment }),
  });
}

export function deleteComment(id) {
  return request(`/comments/${id}`, { method: "DELETE" });
}
