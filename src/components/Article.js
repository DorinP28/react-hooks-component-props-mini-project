import React from "react";

export default function Article({ title, date = "January 1, 1970", preview, minutes }) {
  function minutesToRead(minutes) {
    if (minutes < 30) {
      const coffeeCups = Math.round(minutes / 5);
      return ` • ${"☕️".repeat(coffeeCups)} ${minutes} min read`;
    } else {
      const bentoEmoji = Math.round(minutes / 10);
      return ` • ${"🍱".repeat(bentoEmoji)} ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutesToRead(minutes)}
      <p>{preview}</p>
    </article>
  );
}
