async function github() {
  const parent = document.getElementById("first");

  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();

    for (let user of data) {
      const element = document.createElement("div");
      element.classList.add("user");

      const image = document.createElement("img");
      image.src = user.avatar_url;

      const username = document.createElement("h2");
      username.textContent = user.login;

      const anchor = document.createElement("a");
      anchor.href = user.html_url;
      anchor.textContent = "Profile Link";
      anchor.target = "_blank";

      element.append(image, username, anchor);
      parent.append(element);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
github();
