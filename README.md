# PokeDex

PokeDex is a web application that allows you to explore and manage Pokemon data using the Pokemon API. With PokeDex, you can search for Pokemon, view a list of Pokemon with infinite scrolling, access detailed information about each Pokemon, bookmark your favorites, and remove them when needed.

## Features

- Search: Use the search functionality to find specific Pokemon by their names.

- Pokemon List: Display a list of Pokemon with infinite scrolling for smooth navigation through a large collection.

- Pokemon Details: View detailed information about a specific Pokemon, including abilities, types, stats, and more.

- Bookmark Pokemon: Bookmark your favorite Pokemon to easily access them later.

- Remove Bookmarks: Remove bookmarked Pokemon from your favorites list.

## Technologies Used

- React: JavaScript library for building user interfaces.

- Pokemon API: Utilize the Pokemon API (https://pokeapi.co/) to fetch Pokemon data.

- Infinite Scrolling: Implement infinite scrolling in the Pokemon list for a seamless browsing experience.

- Local Storage: Store bookmarked Pokemon in the browser's local storage for persistent data.

<br>

##  Folder Structure

```
├── public
|    └── favicon.ico
|    └── index.html
|    └── logo192.png
|    └── logo512.png
|    └── manifest.json
├── src
|    └── components
|    |      └── FilterOption.jsx  
|    |      └── Navbar.jsx  
|    |      └── PokemonCard.jsx  
|    |      └── Skeleton.jsx  
|    |      
|    └── customHook
|    |      └── UseToast.jsx       
|    └── pages
|    |      └── BookmarksPage.jsx  
|    |      └── DetailsPage.jsx  
|    |      └── ListingPage.jsx  
|    |      └── SearchPage.jsx  
|    └── routes
|    |      └── AllRoutes.jsx  
|    └── styles
|    |      └── Bookmarks.module.css  
|    |      └── Home.css  
|    |      └── ListingPage.css.css  
|    |      └── PokemonCard.css  
|    |      └── pokemonDetails.module.css 
|    |      └── Search.css
|    └── utils
|    |      └── data.js 
|    └── App.css
|    └── App.js
|    └── App.test.js
|    └── index.css
|    └── index.js
|    └── logo.svg
|    └── reportWebVital.js
|    └── setupTests.js
├── styles
|    └── index.css
|    └── product.css
```

<br>

Note : `Don't Change any file name or do not delete any files`

<br>

## Getting Started/ Installation

```js
Step 1 : Clone the repository in your local system

`https://github.com/sainRaghuveer/FLURN-Assignment.git`

Step 2 :  Open terminal `VSCode / GitBash / powershell`
Step 3 :  Type `cd frontend`
Step 4 :  npm install / npm i

```

## Start the Frontend 

```js
npm run start

npm start
```

<br>

Note : `You can use any one of them.`

<br>


> **_NOTE:_**  In this Pokedex api I felt api issues like sometime images will not loads in browser so If this happens then it doesn't mean that your code is wrong. Api have some issue so keep it in your mind.


## Frontend Deployed Link

<br>

<a href="https://flurn-assignment-raghuveersain.vercel.app/"><strong>Vercel Deployed Link</strong></a>

<br>

## Presentation Video Link

<br>

<a href="https://drive.google.com/file/d/13RY45gYi6T_LRe2mzSQJYp_d8Szta2gG/view?usp=sharing">Assignment Frontend Presentation</a>
    
# ScreenShots

<br>
    
## Home Page/Search Page
 
<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/50f55419-0142-49cc-9f46-32149bc51bdf" alt="image"/>

<br>
    
##  Search something while api call it will show loading button
    
<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/7bad8585-8277-4f30-a05f-f026e9347db3" alt="image"/>

<br>
    
## wrong search will give error
    
<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/61302724-40d0-4afd-a1a8-6d3743db889d" alt="image"/>

<br>
    
##  List Page

<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/335017ab-e427-4d67-bb11-97c0b67b3e01" alt="image"/>

<br>
    
##  Skeleton will be visible while data get fetched
    
<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/25e60f22-8ccd-41a5-8c8b-df22de8d709b" alt="image"/>

<br>    

## Single pokemon data after clicking any card    
<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/dbf2e151-6ec3-4722-be31-40afa19f490e" alt="image"/>

<br>
    
## You can search inside detail page also for any other pokemon you don't have to go list page and search it over there
    
<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/1ee457c4-1727-4186-aac8-cf8a4420186d" alt="image"/>

<br>
    
## Add in favorites/bookmark list by clicking on the bookmark icon
    
<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/c91b7815-c9fc-4d19-b36b-02f620953529" alt="image"/>

<br>
    
## Bookmark page you will see details also when click any card and you can remove it from the bookmark clicking on the icon 
    
<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/874ed784-b28a-42d6-8e2e-aec5eef15d4b" alt="image"/>

<br>
    
## Everytime when event will happen you will see this kind of notification 
    
<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/040313ce-8ddf-4c11-89d3-ee13e6965bdc" alt="image"/>

<br>
    
## You can enjoy this app in dark mode also
    
<img src="https://github.com/sainRaghuveer/FLURN-Assignment/assets/112657812/8051f239-4030-4ab1-b5bd-d8c021e65891" alt="image"/>



