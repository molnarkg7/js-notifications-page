const unReadMessages = document.querySelectorAll(".unread");
const markAllAsRead = document.querySelector(".all_read");
const unread = document.querySelector(".notifications");

unread.innerText = unReadMessages.length;

unReadMessages.forEach((m) => {
  m.addEventListener("click", () => {
    m.classList.remove("unread");
    const newUnReadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnReadMessages.length;
  });
});

markAllAsRead.addEventListener("click", () => {
  unReadMessages.forEach((m) => {
    m.classList.remove("unread");
  });
  const newUnReadMessages = document.querySelector(".unread");
  unread.innerText = newUnReadMessages.length;
});
