
(() => {
  const selector = document.getElementById("language-select");
  if (!selector) return;

  const originalUrl = "https://sleepingluks.github.io/faceit-block-strike-rules/";

  function translationUrl(language) {
    const url = new URL("https://translate.google.com/translate");
    url.searchParams.set("sl", "auto");
    url.searchParams.set("tl", language);
    url.searchParams.set("u", originalUrl);
    return url.toString();
  }

  selector.addEventListener("change", () => {
    const language = selector.value;
    if (language === "ru") {
      window.location.href = originalUrl;
      return;
    }
    window.location.href = translationUrl(language);
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get("tl") === "en") selector.value = "en";
  if (params.get("tl") === "pt-BR") selector.value = "pt-BR";
})();
