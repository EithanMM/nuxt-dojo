<!-- \products\{id} -->

<template>
    <div>
        <!-- using built-in components to modify metadata -->
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>

        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
import ProductDetails from '~/components/ProductDetails.vue';

    // get route params
    const  { id } = useRoute().params

    // constrcut the url - can be refactored
    const url = 'https://fakestoreapi.com/products/' + id

    // fetch the product
    // the use of a {key: } param could be used if necesary
    const { data: product } = await useFetch(url);

    if (!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found' })
    }

    // invokes custom layout
    definePageMeta({ layout: 'products' })
</script>

<style scoped>

</style>