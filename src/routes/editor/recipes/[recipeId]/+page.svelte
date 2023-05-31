<script>
    // @ts-nocheck
    import { PlusCircle, XCircle } from "svelte-heros-v2";

    // Load data from +page.server.js
    $: ({ ingredients, recipe } = data);
    export let data;
    console.log(data)


    const handleAddIngredient = () => {
        if(measurement !== "" && amount !== 0 && ingredientName !== ""){
            // Update the step ingredient array.
            recipeIngredients = [
                ...recipeIngredients, 
                {
                    "name": ingredientName, 
                    "amount": amount, 
                    "measurement": measurement, 
                    "ean": data.ingredients.find(el => el.name === ingredientName).ean
                }
            ]
            // Reset the step input field. 
            ingredientName = ""
            measurement = ""
            amount = ""
        }
    }

    const handleRemoveIngredient = (ingredientToRemove) => {
        recipeIngredients = recipeIngredients.filter(ingredient => ingredient.name !== ingredientToRemove)
    }

    const handleAddStep = () => {
        if(step !== ""){
        // Update the step array.
        steps = [...steps, step]
        // Reset the step input field. 
        step = ""
        }
    }

    const handleRemoveStep = (stepToRemove) => {
        // Filter out the step to remove from the steps array.
        steps = steps.filter(step => step != stepToRemove)
    }

    // Recipe General Info
    let subtitle = data.recipe.subtitle ?? ""
    let title = data.recipe.title ?? ""
    let prepTime = 0
    let mealPlanId = ""
    let recipeId = "beans"
    let count = 1;

    // Cooking directions
    let steps = data.recipe.steps ?? []
    let step = "" // Intermediate input field for array.

    let recipeIngredients = data.recipe.recipeIngredients ?? []

    let ingredientName = "" 
    let measurement = ""
    let amount = 0
</script>


<div style="text-align:center">
    <input bind:value={title} class="text-5xl text-center pb-5 pt-10" placeholder="Rediger Tittel"/>
</div>

<div style="text-align:center">
    <input bind:value={subtitle} class="text-2xl text-center  hideOnSmallScreens smallerTextOnSmallScreens max-w-full" placeholder="Rediger undertittel" />
</div>

<div class="flex justify-center flex-wrap mt-16 pb-40">
    <div class="">
        <h1 class="text-2xl font-bold">Ingredienser</h1>
        <div class="flex justify-start pt-5">
            <button class="pr-5">
              
            </button>
            <h2 class="text-1xl text-gray-900">
               
            </h2>
            <button class="pl-5">
            </button>
        </div>

        {#each recipeIngredients as ingredient}
        <p class="text-xl p-4 max-w-lg">
            {ingredient.amount}{ingredient.measurement} {ingredient.name} 
            <button on:click={handleRemoveIngredient(ingredient.name)}>
                <XCircle class="inline" />
            </button>
        </p>
        {/each}
        
        <button>
            <PlusCircle on:click={handleAddIngredient} class="inline mr-2" />    

            <input bind:value={amount} class="w-16" maxlength="3" type="number" >
            <select bind:value={measurement}>
                <option value="" disabled selected>måleenhet</option>
                <option value="ts">ts</option>
                <option value="ss">ss</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="stk">stk</option>
              </select>
            <select bind:value={ingredientName}>
                <option value="" disabled selected>Velg ingrediens</option>
                {#each ingredients as ingredientSelection}
                    <option value={ingredientSelection.name}>{ingredientSelection.name}</option>
                {/each}
            </select>
        </button>


        
    </div>

    <div class="flex-grow-1">
        <h1 class="text-2xl font-bold pb-5 topPaddingOnSmallScreens" >Slik gjør du</h1>
            {#each steps as cookingStep, index}
            <p class="text-xl p-4 max-w-lg">
                
                <span class="font-bold">{index + 1}. </span>{cookingStep} 
                <button on:click={handleRemoveStep(cookingStep)}>
                    <XCircle class="inline" />
                </button>
            </p>
            {/each}

            <button class="pl-5">
                <PlusCircle on:click={handleAddStep} class="inline" /> 
                <input bind:value={step} placeholder="Legg til steg..">
            </button>
    
    </div>
</div>







<style>
.bigPaddingOnLargeScreens{
    padding-right: 10rem;
}

@media (max-width: 881px) {
  .hideOnLargeScreens{
    display: inherit
  }
  .smallerTextOnSmallScreens{
    font-size: 1rem !important;
  }

  .hideOnSmallScreens{
    display: none;
  }

  .bigPaddingOnLargeScreens{
    padding-right: 0rem;
}

  .topPaddingOnSmallScreens{

    padding: 2rem;
    padding-top: 4rem;
  }

}

</style>
