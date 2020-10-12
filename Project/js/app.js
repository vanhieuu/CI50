db.collection("Story").orderBy("Tittle")
.get()
.then(snap => {
    console.log(
        snap.docs.forEach((story) => {
            console.log(story.data(), story.id);
        }));
})