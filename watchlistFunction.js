function watchlistFunction(id, mediaType, bookmark) {
  console.log(id, mediaType);
  event.preventDefault();
  // Retrieve existing watchlist or initialize as an empty array
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  const newInject = {
    id: id,
    mediaType: mediaType,
  };

  if (!watchlist.some((item) => item.id === newInject.id)) {
    bookmark.classList.replace("bx-bookmark", "bxs-bookmark");
    addedBookmarkText.classList.add("unhideAdded");
    watchlist.push(newInject); // Push works because watchlist is an array
    setTimeout(() => {
      addedBookmarkText.classList.remove("unhideAdded");
    }, 2000);
  } else {
    bookmark.classList.replace("bxs-bookmark", "bx-bookmark");
    removedBookmarkText.classList.add("unhideRemove");
    watchlist = watchlist.filter((item) => item.id !== id);
    setTimeout(() => {
      removedBookmarkText.classList.remove("unhideRemove");
    }, 2000);
  }

  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}
