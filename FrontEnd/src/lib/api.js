const BASE_URL = "/api";

// ─── Helper ───────────────────────────────────────────────────────────────────
// Every request goes through this. It sets headers, sends cookies,
// and throws a clean error if the response is not OK.
const request = async (endpoint, method, body) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: { "Content-Type": "application/json" },
    credentials: "include", // sends & receives cookies (needed for JWT)
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// ─── Auth ─────────────────────────────────────────────────────────────────────
export const authAPI = {
  signup: (fullName, email, password) =>
    request("/auth/signup", "POST", { fullName, email, password }),

  login: (email, password) =>
    request("/auth/login", "POST", { email, password }),

  logout: () => request("/auth/logout", "POST"),

  checkAuth: () => request("/auth/check", "GET"),

  updateProfile: (profilePic) =>
    request("/auth/update-profile", "PUT", { profilePic }),
};

// ─── Messages ─────────────────────────────────────────────────────────────────
export const messageAPI = {
  getUsers: () => request("/message/users", "GET"),

  getMessages: (userId) => request(`/message/${userId}`, "GET"),

  sendMessage: (userId, text, image) =>
    request(`/message/send/${userId}`, "POST", { text, image }),
};
