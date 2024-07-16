<script lang="ts">
    import { onMount } from "svelte";
    import { fetchTodos } from "$lib/fetch_functions";
    import TodoItem from "./TodoItem.svelte";

    let todos:any;

    onMount(async () => {
        todos = await fetchTodos();
    });

 

</script>

<div>
    <h1>Yet another Todo App</h1>

    <div id="inputs">
        <input type="text" placeholder="Add a new todo" />
        <button>Add</button>
    </div>
    <hr>

    {#if todos}
        {#if todos.length > 0}
            {#each todos as item}
                <TodoItem title={item.title} completed={item.complete} />
            {/each}
        {:else}
            <p>No todos found</p>
        {/if}
    {:else}
        <p>Todos not loaded</p>
    {/if}
</div>

<style>
    #inputs {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
</style>