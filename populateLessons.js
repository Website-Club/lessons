fetch("./data/lessons.json")
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    data.forEach((lesson, index) => {
      const lessonNumber = index + 1;
      const card = document.createElement("div");
      card.classList.add("card");

      const h2 = document.createElement("h2");
      h2.textContent = `Lesson ${lessonNumber}`;
      card.appendChild(h2);

      const h3 = document.createElement("h3");
      h3.textContent = lesson.name;
      card.appendChild(h3);

      const p = document.createElement("p");
      p.textContent = lesson.description;
      card.appendChild(p);

      const link = document.createElement("a");
      link.textContent = "View lesson";
      link.href = lesson.location;
      card.appendChild(link);


      cardContainer.appendChild(card);
    });

    document.body.appendChild(cardContainer);
  })
  .catch(error => console.error(error));
