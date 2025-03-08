// 画像がない場合に使うデフォルト画像URL
const defaultImage = 'https://placehold.co/150x150?text=No+Image&bg=cccccc&color=ffffff';

// TMDb APIキー
const apiKey = 'bf84a02e33f4f74dd640c894275a10ac';

// APIから映画データを取得する関数
async function fetchMoviesFromAPI() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ja-JP&page=1`);
        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
        }
        const data = await response.json();

        if (data.results) {
            console.log("APIから取得した映画データ:", data.results);

            // APIから取得したデータを表示する
            const apiMovies = data.results.map(movie => ({
                id: movie.id,
                title: movie.title,
                image: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImage,
                description: movie.overview
            }));

            displayMovies(apiMovies); // APIデータを表示する

            // 画像がない映画を確認する
            data.results.forEach(movie => {
                if (!movie.poster_path) {
                    console.warn(`画像が存在しない映画: ${movie.title}`);
                }
            });

        } else {
            console.error("映画データが取得できませんでした。");
        }
    } catch (error) {
        console.error("APIエラー:", error);
    }
}

// 映画データを表示する関数
function displayMovies(movieList) {
    const movieContainer = document.getElementById('movieList');
    movieContainer.innerHTML = '';

    movieList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieContainer.appendChild(movieCard);
    });
}

// APIからデータを取得して表示
fetchMoviesFromAPI();
