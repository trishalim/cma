# Carb Manager Dev Assignment

## Dev Notes

**My Process**
1. Create a Trello board.
2. Divide the assignment into subtasks.
3. Added lists: Tuesday, Wednesday, Thursday, Optional.
4. Create task items and distribute them throughout Tuesday, Wednesday, Thursday.
5. Work through the tasks for each day.
6. When I had something I wanted to improve, I assess the level of importance.
7. If it's a must, I add an item to the current day, and work on it.
8. If it's optional, I add an item to the Optional list.
9. After all the requirements are implemented, I move on to the Optional list.

**Challenges**
1. I kept missing the prettier warnings. I think there should be some VS Code extension to have these warnings show up on the editor, but I didn't find that and I decided there were other more important things to work on.
2. Figuring out how to reuse code when creating `RecipeOfTheDayCard`. There are so many options (slot, mixins, etc.) https://vuejsdevelopers.com/2017/06/11/vue-js-extending-components/ 
In Angular, it's a simple `RecipeOfTheDayCard extends RecipeCard` so I wanted something as simple as that. I ended up using `extends` property.
3. Using tech that's new to me (Vue, Storybook, writing tests). I like all of them, and happy to learn them! :)
  
**Things to Improve**
1. Use `scss` or `less`.
2. The font family in Storybook is not working, so it's currently an ugly Times New Roman...
3. The unit tests for `Rating.vue` but I'm out of ideas.
4. Naming of `RecipeDetail` and the utils.
5. The UI for the cards when viewport width < 400px
6. UI breaks when text is too long on macros, energy, duration.
7. I'm sure there is a ton more, so I'd love to hear your thoughts!

**Other Notes**
1. I created subcomponents based on what is common between `PremiumRecipeCard` and `RecipeOfTheDayCard`.
2. I don't personally use Carb Manager because I don't track my diet, but I do see myself using it in the future when I am more conscious about my diet. I already track other areas in my life such as expenses, my period and habits.

## Design

**Card:**

<img src=".github/PremiumRecipeCard.png" width="500">

**Hover:**

20% opacity white fill when hovering over the card.

<img src=".github/Hover.png" width="500">

**Figma Link:**

[https://www.figma.com/file/Hv0bOihxG5M40ASYsFBrVR/Interview-Assignment?node-id=0%3A1](https://www.figma.com/file/Hv0bOihxG5M40ASYsFBrVR/Interview-Assignment?node-id=0%3A1)

---

## Assignment Requirements:

### UI

- Translate the design as closely as possible to custom CSS. We've also provided hover styles for you to replicate.
- Use SVG's for the custom icons. These can be grabbed from the Figma file.
- Make sure the Recipe title gets truncated after 2 lines
- The star ratings should be able to work with half-stars.
- If a recipe duration is longer than 60 minutes, the format should be `x hr x min`
- Add an `energy-units` prop which will take either `calories` (default) or `kilojoules`. This will determine which energy value/unit to display. 1 calorie = 4.184 kJ. The number value passed in as a prop will always represent calories, so if `kilojoules` is selected, a conversion needs to take place.

### Interactions

- The whole card will be clickable. Make sure that the event is working properly. You should see a "clicked" message in the Storybook "actions" tab when clicking on the component.
- Because the whole card is clickable, the "heart" icon in the top right won't be interactive. Instead, it should be empty or filled in depending on a certain prop value.

### Storybook

Create a Storybook story to view the component in isolation and to be able to interact with all available props.

There is a `PremiumRecipeCard.stories.js` placeholder file that you can use to get started. Take a look at the [addon-knobs](https://www.npmjs.com/package/@storybook/addon-knobs) documentation to help you get started if you are unfamiliar with Storybook.

### Tests

There is a `PremiumRecipeCard.spec.js` file which you can use to write some tests. These tests are completely up to you. Try to come up with some useful test cases.

**Hint:** The calorie -> kilojoules conversion will be a good test case to make sure the conversion is working properly.

### Other Notes

- Fork this repo to get started. Please don't create everything with just one commit. We would love to see how you structure your commits.
- Don't feel like you have to stay within the placeholder files. If you want to create some helper/utility functions, go ahead and create the appropriate file/folders for that.
- If you see any elements inside of this Recipe Card design that could be useful to re-use in other areas, feel free to split them out into their own sub components. Don't overengineer it by breaking every single element out, but there might be some that would be better off as small, re-usable components.
- If you do decide to create sub components, bonus points for creating their own stories & tests :)
- Macro dots
  - Red: Carbs
  - Blue: Protein
  - Yellow: Fats
- If you are unclear about something or want to run something by me, please feel free to shoot me an email.

### Reusability

Keep in mind that there may be other variations of the Recipe Card design. Take a look at this **Recipe of the Day** card design:

<img src=".github/ROTD.png" width="500">

Don't build out this component (unless you have extra time), but please explain how you would build out this `<RecipeOfTheDay>` component with maximum code re-use from the `<PremiumRecipeCard>`, as they mostly share the same data props with just a tweaked design.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Run Storybook

```
yarn storybook
```

### Run your unit tests

```
yarn test:unit
```
