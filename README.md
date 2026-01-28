# Pokedex + React App
    A Pokedex web application built with React that allows users to browse Pokemon, search by name, filter by type, view details in a modal, and save favorites.,

Hosted URL: https://pokedex-react-plum-two.vercel.app/

# 🔧 Installation & Running Locally
Prerequisites:
- Node.js (v16 or higher)
- npm

# Steps to run locally:=
# Clone the repository
    git clone https://github.com/THEDARKC0DER/pokedex-react.git

# Go to project directory
    cd pokedex-react

# Install dependencies
    npm install

# Start the development server
    npm run dev

The application will be running on:
http://localhost:5173

# 🛠️ Tech Stack and reason to use them:
Frontend:- 
**React** :

    Used building a component-based UI
    Hooks (useState, useEffect) for state and lifecycle management
    Custom hooks to separate logic (favorites, filtering, data fetching)
    
Vite

    Fast development server and build tool.
    
Tailwind CSS

    Utility-first CSS for rapid UI development
    Makes responsiveness and consistent styling easier
    Reduces need for custom CSS files
    
PokeAPI

    Public REST API used to fetch Pokemon data
    Provides Pokemon list, types, images, and stats
    
LocalStorage

    Used to persist favorite Pokémon across page refreshes


# Challenges Faced & Solutions:-

1] Pagination vs Search Trade-off :-

Challenge:-
   
    Implementing true API-based pagination together with search and type filtering was challenging because the PokeAPI
    does not support server-side search by partial or part of name across paginated results.

Decision & Trade-off:

    - Due to time constraints, I chose to fetch the full Pokemon list once and perform search and filtering on the client side. 
    - This allowed:
        Instant search results
        Simple type filtering
        A smooth user experience without additional backend complexity
    - Pagination is applied after filtering, which keeps the UI performant while still limiting the number of Pokémon data rendered per page.
    - Implemented (20 Pokemon per page) and lazy image loading to reduce rendering cost.

2] Pokemon Modal:-

    Challenge: Pokemon details took time to load, causing blank UI.
    Solution: Added a loading spinner inside the modal and smooth open/close transitions.

3] Missing Pokemon Images:-

    Challenge: Some Pokemon sprites do not exist in the API.
    Solution: Handled image load failures to avoid broken image by giving default images.

# Deployment:
    The app is deployed using Vercel with a simple build configuration for a Vite + React project.
# Future Improvements:
    Future improvements include backend-driven search & pagination, OAuth-based authentication, richer UI animations, and SSR support using Next.js.
