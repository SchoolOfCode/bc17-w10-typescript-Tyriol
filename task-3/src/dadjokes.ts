async function getDadJoke(): Promise<string> {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          "Accept": "application/json",
        }
    });
    const newJoke = await response.json();
    return newJoke.joke;
}