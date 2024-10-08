export default defineCachedEventHandler(async (event) => {

    const { code } = event.context.params
    const { currencyKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?currenies=${code}&apiKey=${currencyKey}`

    const { data } = await $fetch(uri)
    return data
})