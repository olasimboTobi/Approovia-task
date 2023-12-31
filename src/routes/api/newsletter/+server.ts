import type { RequestHandler } from "./$types";


// api/newsletter GET Request
export const GET: RequestHandler = async (event) => {
    const options: ResponseInit = {
        status: 418,
        headers: {
            X: 'Gon give it to you'
        }
    }

    return new Response('Hello', options)
}


// api/newsletter POST Request
export const POST: RequestHandler = async (event) => {
    const data = await event.request.formData()
    const email = data.get('email')

    // subscribe the user to the newsletter
    console.log(email)

    return new Response(
        JSON.stringify({ success: true }),
        {
            headers: {
            'Content-Type' : 'application/json'
            }
        }
    )
}

