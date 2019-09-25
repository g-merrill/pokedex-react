# Pokedex Project

During the last unit of the cohort we'll be building an in class app in conjunction with the each day's lessons. Here is the progression we'll take with this application.

### Step 0: Setup
Fork and clone this repository outside of the class repo (we don't want nested git repos!).

Make sure to run `npm install` in the project directory to install the packages included in the starter code.

Take a minute to tour the starting code including the `json` file with our starter data.

### Step 1: Add Some Components
Our pokedex is error free but it's also free of any functionality. Let's start by building some components to display when we load up localhost. 

| Component | Responsibilities |
|---|---|
| `<NavBar>` | Rendered by `<App>`. |
| `<PokemonContainer>` | Rendered by `<App>`. Renders a title and the following components:<br>- A `<SearchForm>` component <br>- `<PokemonCard>` component for each Pokemon in the list |
| `<SearchForm>` | Renders a single input field and accepts a `onChange` function prop |
| `<PokemonCard>` | Renders a card of information for each Pokemon in our dataset |

In this step we'll also add the Bulma CSS framework. It's similar to bootstrap and will provide us with a better style without writing a ton of custom CSS (we'll still write some of our own though).

