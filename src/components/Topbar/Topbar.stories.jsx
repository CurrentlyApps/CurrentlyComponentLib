import React from "react";
import TopBar from "./TopBar.jsx";

export default {
  title: "Components/TopBar",
  component: TopBar,
  argTypes: {
    extendedState: {
      description: "test"
    }
  }
};

let extendedState = false;
const setExtendedState = (val) => {
  extendedState = val;
}



const Template = (args) => <TopBar {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  toggleSidebarExtended: setExtendedState,
  sidebarExtended: extendedState,
  backgroundColor: "bg-zinc-800",
  textColor:"text-zinc-50",
  components: {
    left: <p>Currently</p>,
    middle: <p>Title</p>,
    right: <p>Options</p>
  }
};

