export let selectedRoadIndex = 0;

export const onEdgeClick = (e) => {
  const road = e.target;
  selectedRoadIndex = road.id;
};

export const onPointHover = (e) => {
  e.sourceTarget.togglePopup();
};
