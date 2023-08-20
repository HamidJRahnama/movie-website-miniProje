export function movieReducer(state, action) {
  switch (action.type) {
    case "isLike":
      const newMovie = state.movies.map((movie) => {
        if (action.id === movie.id) {
          return {
            ...movie,
            like: !movie.like,
          };
        } else {
          return {
            ...movie,
          };
        }
      });
      return {
        ...state,
        movies: newMovie,
      };

    case "signUp":
      return {
        ...state,
        users: [...state.users, action.user],
      };

    case "currUser":
      return {
        ...state,
        currUser: action.currUser,
      };
    default:
      return state;
  }
}

export const initialMovie = {
  currUser: [],
  users: [
    {
      name: "ali",
      email: "ali@email.com",
      password: "Ali1380A",
      gender: "male",
    },
  ],

  movies: [
    {
      img: "/Images/Shawshank redemption Poster.png",
      id: 1,
      like: true,
      title: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      genre: ["Drama"],
      credits: "Bob Gunton , Morgan Freeman , Bob Gunton",
      KH: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    },
    {
      img: "/Images/The Godfather Poster.png",
      id: 2,
      like: true,
      title: "The Godfather",
      year: 2008,
      rating: 9.0,
      genre: ["drama"],
      credits: "Marlon Brandon , Al Pachino ",
      KH: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    },
    {
      img: "/Images/The Dark Knight Poster.png",
      id: 3,
      like: true,
      title: "The Dark Knight",
      year: 1972,
      rating: 8.7,
      genre: ["Action", "Crime", "Drama"],
      credits: ["Christian Bale", "Health Ledger", "Aaron Eckhart"],
      KH: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      img: "/Images/The Godfather Part II Poster.png",
      id: 4,
      like: false,
      title: "The Godfather Part II",
      year: 1974,
      rating: 9.0,
      genre: ["crime", "Drama"],
      credits: ["Al Pachino", "Robert De Niro", "Robert Duvall"],
      KH: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    },
    {
      img: "/Images/Schindler's List Poster.png",
      id: 5,
      like: false,
      title: "Schindler's List",
      year: 1993,
      rating: 9.0,
      genre: ["Biography", "Drama", "History"],
      credits: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
      KH: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    },
    {
      img: "/Images/The Lord of the Rings The Return of the King Poster.png",
      id: 6,
      like: false,
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
      rating: 9.0,
      genre: ["Action", "Adventure", "Drama"],
      credits: ["Ian McKellen", "Viggo Mortensen", "Elijah Wood"],
      KH: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    },
    {
      img: "/Images/Pulp Fiction Poster.png",
      id: 7,
      like: false,
      title: "Pulp Fiction",
      year: 1994,
      rating: 8.9,
      genre: ["Crime", "Drama"],
      credits: ["John Travolta", "Uma Thurman", "Samuel L. Jacson"],
      KH: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    },
    {
      img: "/Images/The Lord of the Rings The Fellowship of the Ring Poster.png",
      id: 8,
      like: false,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      rating: 8.8,
      genre: ["Action", "Adventure", "Drama"],
      credits: ["Elijah Wood", "Ian McKellen"],
      KH: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    },
    {
      img: "/Images/The Good, the Bad and the Ugly Poster.png",
      id: 9,
      like: false,
      title: "The Good, the Bad and the Ugly",
      year: 1966,
      rating: 8.8,
      genre: ["Adventure", "Western"],
      credits: ["Lee Van Cleef", "Eli Wallach", "Clint Eastwood"],
      KH: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    },

    // { title: "Title", year: 2000, rating: 8.5, genre: [],credits:[], KH: "Lorem",like:false },
  ],
};
