 <template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perferendis quia molestiae, magni modi earum omnis voluptates 
            mollitia placeat nam cupiditate facere reprehenderit dolore 
            aperiam quaerat optio error enim tempore. Cumque?</p>
            <p> {{ data }}</p>
    </div>
 </template>

 <script setup>
 // normal fetch using params
 // const { data } = await useFetch('/api/ninja?name=mario')

 // fetch sending a post request
//  const { data } = await useFetch('/api/ninja?name=mario', {
//     method: 'post',
//     body: { age: 30 }
//  })

// call custiom endpoint
const { data } = await $fetch('api/currency/USD');
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>