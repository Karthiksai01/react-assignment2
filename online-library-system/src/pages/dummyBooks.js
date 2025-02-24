const dummyBooks = [
    {
      id: "1",
      volumeInfo: {
        title: "The Pragmatic Programmer",
        authors: ["Andrew Hunt", "David Thomas"],
        categories: ["Programming", "Software Development"],
        description: "A book about best practices in software development.",
        imageLinks: { thumbnail: "https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg" },
      },
    },
    {
      id: "2",
      volumeInfo: {
        title: "Clean Code",
        authors: ["Robert C. Martin"],
        categories: ["Programming"],
        description: "A handbook of agile software craftsmanship.",
        imageLinks: { thumbnail: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg" },
      },
    },
    {
      id: "3",
      volumeInfo: {
        title: "Dune",
        authors: ["Frank Herbert"],
        categories: ["Sci-Fi"],
        description: "A science fiction novel about interstellar politics and adventure.",
        imageLinks: { thumbnail: "https://assets-prd.ignimgs.com/2021/08/09/dune-button-2021-1628542173776.jpg" },
      },
    },
    {
      id: "4",
      volumeInfo: {
        title: "The Hobbit",
        authors: ["J.R.R. Tolkien"],
        categories: ["Fantasy"],
        description: "A classic adventure tale of Bilbo Baggins' journey to reclaim treasure.",
        imageLinks: { thumbnail: "https://m.media-amazon.com/images/I/41aQPTCmeVL.jpg" },
      },
    },
    {
      id: "5",
      volumeInfo: {
        title: "1984",
        authors: ["George Orwell"],
        categories: ["Dystopian", "Fiction"],
        description: "A novel about a totalitarian society controlled by Big Brother.",
        imageLinks: { thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b468d093312907.5e6139cf2ab03.png" },
      },
    },
    {
      id: "6",
      volumeInfo: {
        title: "To Kill a Mockingbird",
        authors: ["Harper Lee"],
        categories: ["Fiction", "Drama"],
        description: "A novel dealing with racial injustice in the American South.",
        imageLinks: { thumbnail: "https://th.bing.com/th/id/OIP.1qhvJ-A0XbN3A__WDMMbPgHaMI?rs=1&pid=ImgDetMain" },
      },
    },
    {
      id: "7",
      volumeInfo: {
        title: "The Great Gatsby",
        authors: ["F. Scott Fitzgerald"],
        categories: ["Fiction", "Classic"],
        description: "A novel about wealth, love, and the American Dream.",
        imageLinks: { thumbnail: "https://th.bing.com/th/id/OIP.YY-2rOTwqOzDvIoBMaRluQHaLH?rs=1&pid=ImgDetMain" },
      },
    },
    {
      id: "8",
      volumeInfo: {
        title: "Pride and Prejudice",
        authors: ["Jane Austen"],
        categories: ["Romance", "Fiction"],
        description: "A classic novel about love, society, and class.",
        imageLinks: { thumbnail: "https://flxt.tmsimg.com/assets/p159494_p_v10_ag.jpg" },
      },
    },
    {
      id: "9",
      volumeInfo: {
        title: "The Martian",
        authors: ["Andy Weir"],
        categories: ["Sci-Fi", "Adventure"],
        description: "A novel about survival on Mars.",
        imageLinks: { thumbnail: "https://th.bing.com/th/id/R.47ac110dbea6b55ebbadace5d132a1a5?rik=PhH7Kbd6dX3LMQ&riu=http%3a%2f%2fwww.scifinow.co.uk%2fwp-content%2fuploads%2f2015%2f08%2fThe-Martian-Launch-One-Sheet.jpg&ehk=MmvCgWX3nwG9Z0u2SlriCgLffDSA%2bQc6av%2fu5R%2ba06E%3d&risl=1&pid=ImgRaw&r=0" },
      },
    },
    {
      id: "10",
      volumeInfo: {
        title: "The Catcher in the Rye",
        authors: ["J.D. Salinger"],
        categories: ["Fiction", "Drama"],
        description: "A novel about teenage rebellion and identity.",
        imageLinks: { thumbnail: "https://th.bing.com/th/id/OIP.548SMhoOazP_QhiKb0uKhwHaJp?rs=1&pid=ImgDetMain" },
      },
    },
    {
      id: "11",
      volumeInfo: {
        title: "Harry Potter and the Sorcerer’s Stone",
        authors: ["J.K. Rowling"],
        categories: ["Fantasy"],
        description: "The first book in the magical Harry Potter series.",
        imageLinks: { thumbnail: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg" },
      },
    },
    {
      id: "12",
      volumeInfo: {
        title: "The Lord of the Rings",
        authors: ["J.R.R. Tolkien"],
        categories: ["Fantasy", "Adventure"],
        description: "An epic fantasy story about the fight against evil.",
        imageLinks: { thumbnail: "https://th.bing.com/th/id/OIP.v2WVctAtO8K9nHZuJqWjpwHaLH?rs=1&pid=ImgDetMain" },
      },
    },
    {
      id: "13",
      volumeInfo: {
        title: "The Hunger Games",
        authors: ["Suzanne Collins"],
        categories: ["Dystopian", "Adventure"],
        description: "A novel about a televised survival competition.",
        imageLinks: { thumbnail: "https://image.tmdb.org/t/p/original/pHBPMRYyQFOC1aAvhngsxNVd3de.jpg" },
      },
    },
    {
      id: "14",
      volumeInfo: {
        title: "Sherlock Holmes: The Complete Stories",
        authors: ["Arthur Conan Doyle"],
        categories: ["Mystery", "Crime"],
        description: "The complete collection of Sherlock Holmes stories.",
        imageLinks: { thumbnail: "https://www.themoviedb.org/t/p/original/bAr1vVZh3bsHY9ATdsYVwpPwwOn.jpg" },
      },
    },
    {
      id: "15",
      volumeInfo: {
        title: "The Da Vinci Code",
        authors: ["Dan Brown"],
        categories: ["Mystery", "Thriller"],
        description: "A novel involving secret codes and historical conspiracies.",
        imageLinks: { thumbnail: "https://th.bing.com/th/id/OIP.brfi9qy1S2fi3zmucOUEsgHaLH?rs=1&pid=ImgDetMain" },
      },
    },
    {
      id: "16",
      volumeInfo: {
        title: "Dracula",
        authors: ["Bram Stoker"],
        categories: ["Horror", "Classic"],
        description: "The original vampire novel.",
        imageLinks: { thumbnail: "https://i0.wp.com/goodfilmguide.co.uk/wp-content/uploads/2014/10/Dracula-Untold-Poster.jpg" },
      },
    },
    {
      id: "17",
      volumeInfo: {
        title: "Frankenstein",
        authors: ["Mary Shelley"],
        categories: ["Horror", "Science Fiction"],
        description: "A novel about a scientist who creates a living creature.",
        imageLinks: { thumbnail: "https://th.bing.com/th/id/OIP.Upr8LqaOgM7Qg4J0JttfjAHaLc?rs=1&pid=ImgDetMain" },
      },
    },
  ];
export default dummyBooks;
  