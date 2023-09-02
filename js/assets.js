export function panel(value) {
  let panels = "";
  for (let i = 0; i < value.length; i++) {
    panels += `
      <article class='panel'>
          <h2 class='panel-title'>${value[i].title}</h2>
          <br/>
          <p class='text'>${value[i].description}</p>
      </article>`;
  }
  return panels;
}
