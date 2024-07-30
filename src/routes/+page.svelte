<script lang="ts">
    import { onMount } from "svelte";
    import { fetchTodos, addTodos } from "$lib/fetch_functions";
    import TodoItemComponent from "./TodoItemComponent.svelte";
    import AddTodoInput from "./AddTodoInput.svelte";
    import type { TodoItem, AddTodoTemplate } from "$lib/types";
    

    let todos:TodoItem[];
    let newTodoTitle: string = ""

    onMount(async () => {
        todos = await fetchTodos();
    });

 
    async function addTodo(event:any) {

        const newTodoTitle = event.detail.title;

        const newItem = {
            title: newTodoTitle,
            complete: false
        }

        const newTsItem:TodoItem = {
            id: null,
            title: newTodoTitle,
            complete: false
        }

        const addItemTemplate: AddTodoTemplate = {
            title: newTodoTitle,
            complete: false
        }

        const result = await addTodos(newItem);
        // todos = await fetchTodos();
        
        // todos.push(tempTestItem);
        // todos = todos;
        
        //todos = [...todos, <TodoItem>addItemTemplate];
        todos = [...todos, addItemTemplate as TodoItem];

        console.log(result);
    }

</script>

<div>
    <!-- <div id="inputs">
        <input type="text" placeholder="Add a new todo" bind:value={newTodoTitle}/>
        <button on:click={addButtonClickHandler}>Add</button>
    </div> -->

    <AddTodoInput on:addTodo={addTodo}/>
    <hr>

    {#if todos}
        {#if todos.length > 0}
            {#each todos as item}
                <TodoItemComponent title={item.title} completed={item.complete} />
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