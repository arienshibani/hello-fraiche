<script>
import { nanoid } from 'nanoid'
import { Dropdown, DropdownItem, Chevron, Button } from 'flowbite-svelte';


// Retrieve the recipes from the data.
$: ({ mealPlans } = data);
export let data;
console.log(data)

let subtitle = ""
let title = ""
let prepTime = 0
let mealPlanId = ""
const recipeId = nanoid(8)

let steps = []
let recipeIngredients = []


let ingredientName = ""
let ingredientAmount = ""
let measurement = ""

const handleMealPlans = () => {
    mealPlanId
}

</script>

<main>
<h1 class="">{recipeId}</h1>

<Button color="dark">
    <Chevron>Velg oppskriftens ukemeny</Chevron>
</Button>
<Dropdown>
    {#each data.mealPlans as mealPlan }
    <DropdownItem on:click={handleMealPlans}>{mealPlan.name}</DropdownItem>
    {/each}
</Dropdown>
</main>

<style>

</style>
