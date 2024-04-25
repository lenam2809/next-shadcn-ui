export async function POST(request: Request) {
  return Response.json({
    status: 200,
    headers: {
      // Xóa cookie sessionToken
      'Set-Cookie': `sessionToken=; Path=/; HttpOnly; Max-Age=0`
    }
  })
}
