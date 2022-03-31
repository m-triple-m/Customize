import "./App.css";
import Homepage from "./homepage";

function App() {
  const data = [
    {
      title: "Drive",
      icon: "drive_logo.png",
      link: "https://drive.google.com/drive/u/0/my-drive",
    },
    {
      title: "Gmail",
      icon: "gmail_logo.png",
      link: "https://mail.google.com/mail/u/0/?tab=rm&pli=1#inbox",
    },
    {
      title: "Github",
      icon: "mygithub_logo.png",
      link: "https://github.com/",
    },
    {
      title: "Digipodium Github",
      icon: "digipodium_logo.png",
      link: "https://github.com/digipodium",
    },
    {
      title: "NPM",
      icon: "npm_logo.png",
      link: "https://www.npmjs.com",
    },
    {
      title: "Youtube",
      icon: "youtube_logo.png",
      link: "https://www.youtube.com/",
    },
    {
      title: "Medium",
      icon: "medium_logo.png",
      link: "https://www.medium.com/",
    },
    {
      title: "Drive",
      icon: "drive_logo.png",
      link: "https://drive.google.com/drive/u/0/my-drive",
    },
    {
      title: "Drive",
      icon: "drive_logo.png",
      link: "https://drive.google.com/drive/u/0/my-drive",
    },
    {
      title: "Drive",
      icon: "drive_logo.png",
      link: "https://drive.google.com/drive/u/0/my-drive",
    },
  ];

  return (
    <div>
      <Homepage data={data} />
    </div>
  );
}

export default App;
