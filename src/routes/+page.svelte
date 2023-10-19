<!-- SSR -->
<script lang="ts">
	import { invalidate } from "$app/navigation";
	import type { PageData } from "./$types";
    

    export let data: PageData
    $: ({posts} = data)

    function rerunLoadFunction() {
        invalidate('posts')
    }

   function formatDate(date: Date){
        return new Intl.DateTimeFormat('en', {dateStyle: 'full'}).format(date)
    }
</script>

<h1>Posts</h1>

<button on:click={rerunLoadFunction}>Show Random Posts</button>

<p class="show">Showing {posts.length} posts.</p>


    {#each posts as post}

        <ul>
            <li class="home">
                <a href="/posts/{post.slug}" class="content">
                <div class="content wrapper">
                    <h1 class="content title">{post.title}</h1>
                    <p class="content publish">Published: {post.published ? "This had been published ": "Not published"}</p>
                </div>
                </a>
            </li>
        </ul>
    {/each}


<style>
    /* .mig{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        background-color: blue;
    } */

    .show{
        font-size: 1.5rem;
        color: red;
    }

    ul{
        text-decoration: none;
    }

    a {
        text-decoration: none;
        
    }

    .content {
        background-color: rgb(15, 44, 189);
    }

    .title {
        font-size: 1.5rem;
    }

    .publish {
        color: red;
    }

    .home{
       list-style-type: none;
    
    }
    .wrapper{
        padding: 2rem;
    }
    /*
   


    .publish {
        color: red;
    } */
</style>





















<!-- Client-side rendering csr -->
<!-- <script lang="ts">
	import type { Post } from "@prisma/client";
	import { error } from "@sveltejs/kit";

    async function getPosts(){
        const response = await fetch('api/posts')
        const posts: Post[] =await response.json()
        return posts
    }
</script>

<h1>Posts</h1>

{#await getPosts()}
    <p>Loading...</p>
{:then posts}
    
    <p>Showing {posts.length} posts.</p>

    {#each posts as {slug, title}}
        <ul>
            <li>
                <a href="/posts/{slug}">{title}</a>
            </li>
        </ul>
    {/each}
{:catch error}
    <p>{error.message}</p>
{/await} -->



 <!-- <pre>
    {JSON.stringify(posts, null, 2)}
</pre> -->
<!-- {#each posts as post} -->
<!-- <a href="/posts/{post.slug}">{post.title}</a> -->





<!-- <script lang="ts">
    async function subscribe(event: Event) {
        const form = event.target as HTMLFormElement
        const data = new FormData(form)

        await fetch('/api/newsletter', {
            method: 'POST',
            body: data
        })
    }
</script>

<h1>Newsletter</h1>

<form on:submit|preventDefault={subscribe}>
    <input type="email" name="email"/>
    <button>Subscribe</button>
</form> -->


