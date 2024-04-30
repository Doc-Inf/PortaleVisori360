const apiKey = "AIzaSyCfEsQjx017WhnLBCiOC7EyPE_N_JtpCz8";

const links = [
  "https://www.youtube.com/watch?v=kw9EJbezlK4",
  "https://www.youtube.com/watch?v=rmgf0VDDlH8",
  "https://www.youtube.com/watch?v=HhuMYEyhPmY",
  "https://www.youtube.com/watch?v=GdQBe2Efl9w",
];

const logger = [];
links.forEach((link) =>
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${link}&key=${apiKey}`
  ).then((res) =>
    res.json().then((data) => {
      const obj = data.items[0].snippet;
      console.log({
        title: obj.title,
        description: obj.description,
        author: obj.channelTitle,
        url: link,
        thumbnail: obj.thumbnails.default.url,
        link: link,
      });
    })
  )
);
