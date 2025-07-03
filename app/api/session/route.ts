// app/api/session/route.ts
// import { getSession } from "@/app/actions/auth";

import { getSession } from "@/actions/auth";

export async function GET() {
  const session = await getSession();
  return Response.json(session);
}

// import { cookies } from "next/headers";
// import { getSession } from "@/actions/auth";

// export async function GET() {
//   const session = await getSession();
//   const cookieStore = cookies();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//   const accessToken = cookieStore.get("accessToken")?.value;

//   return Response.json({
//     ...session,
//     accessToken, // ⬅️ Include the token in the response
//   });
// }
