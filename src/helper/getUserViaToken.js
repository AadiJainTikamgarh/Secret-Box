import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers';

export const getUserViaToken =async (request) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token")?.value;
    console.log(token)
    const decodeToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    return decodeToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
};