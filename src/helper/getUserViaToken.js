import jwt from 'json'

export const getUserViaToken = (request) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodeToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    return decodeToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
};