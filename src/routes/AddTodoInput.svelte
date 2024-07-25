<script lang="ts">
    import { createEventDispatcher } from "svelte";

    // initialise the dispatcher object
    const dispatch = createEventDispatcher();

    let itemText: string;

    function addButtonClickHandler() {
        dispatch("addTodo", {
            title: itemText
        })
    }
</script>

<div id="inputs">
    <input type="text" placeholder="Add a new todo" bind:value={itemText}/>
    <button on:click={addButtonClickHandler}>Add</button>
</div>