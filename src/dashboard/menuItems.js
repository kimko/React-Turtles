import * as React from "react";

import { CusomListItem } from "../helper/CustomListItem";

export const MainListItems = () => {
  const listRoute = {
    "/React-Turtles": 0,
    "/React-Turtles/": 0,
    "/React-Turtles/SeasonCount": 1,
    "/React-Turtles/SeasonHistogram": 2,
  };
  const [selectedIndex, setSelectedIndex] = React.useState(
    listRoute[window.location.pathname]
  );

  return (
    <div>
      <CusomListItem
        itemNo={0}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        to="/React-Turtles/"
        label="Dashboard"
        icon="columns"
      />
      <CusomListItem
        itemNo={1}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        to="/React-Turtles/SeasonCount"
        label="Season Count"
        icon="chart-bar"
      />
      <CusomListItem
        itemNo={2}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        to="/React-Turtles/SeasonHistogram"
        label="Season Histogram"
        icon="sliders-h"
      />
    </div>
  );
};
