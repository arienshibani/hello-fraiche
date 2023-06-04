<script>
    import { Card } from 'flowbite-svelte';

    // Retreived from +server.js load function
    export let data;
    $: ({recipes} = data)
</script>

<h1 class="text-5xl text-center pt-16 pb-10">Rediger Oppskrifter</h1>

  <!-- Search Bar #TODO: Make a functional search bar here -->
<!-- <div class="flex justify-center p-10">
    <form class="flex items-center w-full max-w-4xl">   
        <label for="simple-search" class="sr-only">Søk</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder="Søk etter oppskrifter, ingredienser eller ukemenyer" required>
        </div>
        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-slate-700 rounded-lg border border-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span class="sr-only">Søk</span>
        </button>
    </form>
</div> -->

<div class="flex justify-evenly flex-wrap">
    {#each recipes as recipe}
    <!-- Recipe items -->
    <Card class="border-none shadow-none" padding="sm">
        <div class="flex justify-end">

        </div>
        <div class="flex flex-col items-center pb-4">
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{recipe.title}</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{recipe.subtitle}</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
           <a href="editor/recipes/{recipe.recipeId}">     
              <button class="items-center self-center border border-black border-r-4 border-b-4  rounded-sm h-10 w-fit pr-4 pl-4 m-5" >
                Rediger Oppskrift
             </button>
            </a>
          </div>
        </div>
      </Card>
    {/each}
</div>


<style>
    button:hover{
    color: white;
    background-color: black;
    border-color: white;
  }
</style>
