// 映画のデータを配列として用意
const movies = [
    { id: 1, title: "映画A", image: "https://via.placeholder.com/150", description: "映画Aの説明" },
    { id: 2, title: "映画B", image: "https://via.placeholder.com/150", description: "映画Bの説明" },
    { id: 3, title: "映画C", image: "https://via.placeholder.com/150", description: "映画Cの説明" }
];

// 映画リストを表示する要素を取得
const movieList = document.getElementById("movieList");

// 映画データを使ってカードを作成して画面に表示
movies.forEach(function(movie) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    
    movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
    `;
    
    movieCard.addEventListener("click", function() {
        window.location.href = "detail.html?id=" + movie.id;
    });
    
    movieList.appendChild(movieCard);
});

console.log("映画一覧が表示されました！");
