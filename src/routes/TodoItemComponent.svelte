<script lang="ts">
    export let completed = false;
    export let title = "Placeholder"
    let checked = null;
    let className = "";

    $: checked = completed ? true : null;
    $: className = checked ? "checked" : "";

    function clickHandler(event:any) {
        if (event.target.checked) {
            className = "checked";
        } else {
            className = "";
        }
    }

    // code below is equivalent to the line above
    // $: if (completed === true) {
    //     checked = "checked";
    // } else {
    //     checked = "";
    // }

</script>
<div>
    <input type="checkbox" {checked} on:click={clickHandler}/>
    <span class={className}>{title}</span>
</div>

<style>
    .checked {
        text-decoration: line-through;
    }
</style>