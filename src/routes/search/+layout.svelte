<script lang="ts">
	import { createSearchStore, searchHandler } from '$lib/stores/+search';
	import { onDestroy } from 'svelte';
    import type {PageData} from './$types';

    export let data: PageData;

    const searchPosts = data.posts.map((post) =>( {
        ...post,
        searchTerms: `${post.title}`
    }))

    const searchStore = createSearchStore(searchPosts)

    const unsubscribe = searchStore.subscribe((model) => searchHandler(model)) ;

    onDestroy(() => {
        unsubscribe();
    })
</script>

<div class="container">
    <h1>Search/Filter</h1>
    <input type="search" placeholder="Search..." bind:value={$searchStore.search}/>
</div>

<ul class="post-grid">
    {#each $searchStore.filtered as post}
        <li class="post">
           <a href="/posts/{post.slug}">{post.title}</a> 
        </li>
    {/each}
</ul>

<slot/>

<style>
    .container {
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1.5rem;
    }

    
</style>

