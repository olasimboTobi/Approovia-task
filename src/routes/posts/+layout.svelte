<script lang="ts">
	import type { LayoutData } from "./$types";

    export let data: LayoutData
</script>

<div class="layout">
    <aside>
        <nav>
            <h4>Posts</h4>

            <ul>
                {#each data.posts as {slug, title}}
                    <li>
                        <a href="/posts/{slug}">{title}</a>
                    </li>
                {/each}
            </ul>
        </nav>
    </aside>

    <main>
        <slot/>
    </main>

</div>

<style>
   .layout {

      display: flex;
      flex-direction: row; 
      justify-content: space-between;
      align-items: start;
      flex-wrap: nowrap;
      gap:5;
      

   } 
   aside {
    width: 80%;
   }
</style>

