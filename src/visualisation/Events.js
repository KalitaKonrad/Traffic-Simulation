export const onEdgeClick = (e) => {
  console.log(e);
};

export const onPointHover = (e) => {
  e.sourceTarget.togglePopup();
};
