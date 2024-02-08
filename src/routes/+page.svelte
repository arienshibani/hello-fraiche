<script>
    import { ArrowRight } from "svelte-heros-v2";
    

    let onPhone;
    let mediaQ = "xl";
    if (typeof window !== 'undefined') {
        onPhone = window.matchMedia("(min-width: 600px)");
        mediaQ = onPhone.matches ? "xl" : "xs";
    }

    const message = "%c https://github.com/arienshibani %c";
            const style1 = "background: linear-gradient(to right, red, orange);";
            const style2 = "color: white; font-weight: bold;";
            console.log(message, style1, style2);
    </script>

<section class="bg-white dark:bg-gray-900 mb-96 mt-12">
    <div
        class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
    >
        <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
            GO'MIDDAG!
        </h1>
        <p
            class="text-lg mb-16 font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
            For deg som elsker matkasser 😍 <br><b>men hater prisen!</b> 🤬 
        </p>

        <div class="relative overflow-x-auto rounded-3xl shadow-2xl" >
            <table class="w-full text-left rtl:text-right text-{mediaQ}">

                <thead class="text-gray-700 uppercase bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 mb-96 mt-12">
                    <tr class="border-b">
                        <th scope="col" class="px-4 py-3 text-center"> </th>
                        <th scope="col" class="px-4 py-3 text-center">Hallofresh ✨</th>
                        <th scope="col" class="px-4 py-3 text-center"> Matkasser 📦</th>
                        <th scope="col" class="px-4 py-3 text-center">Butikken 🛒</th>

                    </tr>
                </thead>
                
                <tbody>
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            class="px-4 py-4 font-medium pl-12 text-gray-900 whitespace-nowrap dark:text-white"> God middag hver dag 🍽️</th>
                            <td class="px-4 py-4 text-center"> ✅ </td>
                        <td class="px-4 py-4 text-center"> ✅ </td>
                        <td class="px-4 py-4 text-center"> ✅ </td>
                    </tr>

                    <tr
                        class="bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"class="px-4 py-4 font-medium pl-12 text-gray-900 whitespace-nowrap dark:text-white">Ingen ekstragebyr ⚖️ </th>
                        <td class="px-4 py-4 text-center"> ✅ </td>
                        <td class="px-4 py-4 text-center"> ❌ </td>
                        <td class="px-4 py-4 text-center"> ✅ </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-4 py-4 font-medium pl-12 text-gray-900 whitespace-nowrap dark:text-white">Ingen abonnement 🎉</th>
                        <td class="px-4 py-4 text-center"> ✅ </td>
                        <td class="px-4 py-4 text-center"> ❌ </td>
                        <td class="px-4 py-4 text-center"> ✅ </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-4 py-4 font-medium pl-12 text-gray-900 whitespace-nowrap dark:text-white">Kontroll over kostnader 📈</th>
                        <td class="px-4 py-4 text-center"> ✅ </td>
                        <td class="px-4 py-4 text-center"> ❌ </td>
                        <td class="px-4 py-4 text-center"> ❌ </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-4 py-4 font-medium pl-12 text-gray-900 whitespace-nowrap dark:text-white">Sparer deg tid ⏰</th>
                        <td class="px-4 py-4 text-center"> ✅ </td>
                        <td class="px-4 py-4 text-center"> ✅ </td>
                        <td class="px-4 py-4 text-center"> ❌ </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-4 py-4 font-medium pl-12 text-gray-900 whitespace-nowrap dark:text-white">Pris pr. porsjon 💰 </th>
                        <td class="px-4 py-4 text-center text-green-500">Cirka 60kr</td>
                        <td class="px-4 py-4 text-center  text-red-600"> Over 114kr</td>
                        <td class="px-4 py-4 text-center text-green-500"> Cirka 60kr </td>
                    </tr>
                </tbody>
            </table>

        </div>



        <a href="/info">
            <div class="flex">
                <button
                    class="m-auto border border-black border-r-4 border-b-4 rounded-sm h-10 w-fit pr-4 pl-4 mt-20 mb-20 hover:scale-110 transition-transform duration-300"
                >
                    Slik fungerer det 💡<ArrowRight class="inline" />
                </button>
            </div>
        </a>
    </div>
</section>

<style>
    button:hover {
        color: white;
        background-color: black;
        border-color: white;
    }
</style>
