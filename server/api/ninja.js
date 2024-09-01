export default defineEventHandler(async (event) => {
    // event param contains request info

    // handle query params
    let message = `Hello, `;
    const { name } = getQuery(event)


    // handle post data
    const { age } = await readBody(event)

    return {
        message: (name) 
        ? `${message} ${name} | You are ${age} years old`
        : `${message} Ninjas`
    }
})