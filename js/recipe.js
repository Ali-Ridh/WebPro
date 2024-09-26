$(document).ready(function() {
    const recipes = {
        soto: {
            title: "Soto Ayam Surabaya",
            content: `
            **Ingredients**:
            - 500g chicken (preferably thighs or breast)
            - 2 liters of water
            - 2 bay leaves
            - 4 kaffir lime leaves
            - 2 lemongrass stalks, bruised
            - 5 cloves garlic
            - 7 shallots
            - 2 cm turmeric
            - 3 cm ginger
            - 2 cm galangal
            - Salt, sugar, and pepper to taste
            - 3 hard-boiled eggs, peeled and halved
            - Vermicelli, blanched
            - Fried shallots for garnish
            - Lime wedges

            **Preparation**:
            1. Boil the chicken in 2 liters of water with bay leaves, kaffir lime leaves, and lemongrass.
            2. Grind garlic, shallots, turmeric, ginger, and galangal into a fine paste, then sauté until fragrant.
            3. Add the spice paste to the boiling chicken and simmer for 30 minutes.
            4. Remove the chicken, shred the meat, and return to the soup.
            5. Season with salt, pepper, and sugar. Serve with boiled eggs, vermicelli, and garnish with fried shallots and lime wedges.
            `
        },
        rawon: {
            title: "Rawon",
            content: `
            **Ingredients**:
            - 500g beef (preferably with some fat)
            - 4 keluak nuts (pounded into a paste)
            - 2 liters of water
            - 5 garlic cloves
            - 7 shallots
            - 3 cm galangal, bruised
            - 3 cm ginger, bruised
            - 2 lemongrass stalks
            - 2 bay leaves
            - 5 kaffir lime leaves
            - 2 tbsp tamarind juice
            - Salt and sugar to taste

            **Preparation**:
            1. Boil the beef with bay leaves and kaffir lime leaves until tender, then cut into cubes.
            2. Grind garlic, shallots, keluak, galangal, and ginger into a paste. Sauté until fragrant.
            3. Add the spice paste to the beef broth and simmer for 30 minutes.
            4. Season with salt, sugar, and tamarind juice. Serve with rice, bean sprouts, and sambal on the side.
            `
        },
        lontong: {
            title: "Lontong Balap",
            content: `
            **Ingredients**:
            - 300g rice cakes, cut into bite-sized pieces
            - 250g bean sprouts, blanched
            - 3 tofu blocks, fried and sliced
            - 3 boiled eggs, peeled and halved
            - 5 garlic cloves
            - 7 shallots
            - 2 cm turmeric
            - 500 ml chicken broth
            - Fried shallots for garnish
            - Sambal for serving

            **Preparation**:
            1. Blend garlic, shallots, and turmeric into a fine paste, then sauté until fragrant.
            2. Add the spice paste to the chicken broth and bring to a boil.
            3. Arrange the rice cakes, bean sprouts, and tofu in a bowl, then ladle the broth over the top.
            4. Garnish with boiled eggs and fried shallots. Serve with sambal on the side.
            `
        },
        tahutek: {
            title: "Tahu Tek",
            content: `
            **Ingredients**:
            - 2 blocks of firm tofu, fried and cut into cubes
            - 2 boiled potatoes, peeled and diced
            - 2 hard-boiled eggs, peeled and halved
            - 1 cucumber, thinly sliced
            - Fried shallots for garnish

            **Peanut Sauce**:
            - 100g roasted peanuts
            - 3 garlic cloves
            - 3 bird’s eye chilies
            - 2 tbsp sweet soy sauce
            - 1 tbsp vinegar
            - Salt and sugar to taste

            **Preparation**:
            1. Blend the peanuts, garlic, and chilies into a fine paste.
            2. Add sweet soy sauce, vinegar, salt, and sugar. Adjust the consistency with water.
            3. Arrange tofu, potatoes, and cucumber on a plate. Drizzle with the peanut sauce and top with fried shallots.
            `
        },
        rujak: {
            title: "Rujak Cingur",
            content: `
            **Ingredients**:
            - 100g cingur (cow snout), boiled and sliced
            - 1/2 pineapple, cut into small pieces
            - 1/2 unripe mango, julienned
            - 1/2 cucumber, sliced
            - 100g bean sprouts, blanched
            - 2 hard-boiled eggs, halved

            **Peanut Sauce**:
            - 100g peanuts
            - 3 cloves garlic
            - 3 bird’s eye chilies
            - 1 tbsp fermented shrimp paste
            - 2 tbsp palm sugar
            - 2 tbsp tamarind water
            - Salt to taste

            **Preparation**:
            1. Blend peanuts, garlic, chilies, shrimp paste, and palm sugar into a smooth paste.
            2. Add tamarind water and salt to taste.
            3. Toss the fruits, vegetables, and cingur with the sauce. Serve with boiled eggs on top.
            `
        },
        sate: {
            title: "Sate Klopo",
            content: `
            **Ingredients**:
            - 500g beef or chicken, cut into bite-sized pieces
            - 200ml coconut milk
            - 3 garlic cloves
            - 2 shallots
            - 1 tbsp coriander powder
            - 1 tsp turmeric powder
            - 1 tbsp brown sugar
            - Salt to taste
            - Bamboo skewers, soaked in water

            **Preparation**:
            1. Marinate the meat in a mixture of coconut milk, garlic, shallots, coriander, turmeric, brown sugar, and salt.
            2. Thread the meat onto skewers and grill until cooked through.
            3. Serve with peanut sauce and lontong (rice cake) on the side.
            `
        }
    };

    $('#recipeModal').on('show.bs.modal', function(event) {
        const button = $(event.relatedTarget); // Button that triggered the modal
        const recipeKey = button.data('recipe'); // Extract info from data-* attributes

        // Update modal content based on the recipe selected
        const recipe = recipes[recipeKey];
        const modalTitle = $(this).find('.modal-title');
        const modalBody = $(this).find('#recipeContent');

        modalTitle.html(recipe.title);
        modalBody.html(recipe.content.replace(/\n/g, '<br>')); // Convert new lines to HTML line breaks
    });
});
