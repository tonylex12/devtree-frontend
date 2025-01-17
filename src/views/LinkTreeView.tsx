import { useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "../components/DevTreeInput";

const LinkTreeView = () => {
  const [devTreeLinks, setDevTreeLinks] = useState(social);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedLinks = devTreeLinks.map((item) => {
      if (item.name === name) {
        return { ...item, url: value };
      }
      return item;
    });
    setDevTreeLinks(updatedLinks);
  };

  const handleEnableLink = (name: string) => {
    const updatedLinks = devTreeLinks.map((item) => {
      if (item.name === name) {
        return { ...item, enabled: !item.enabled };
      }
      return item;
    });
    setDevTreeLinks(updatedLinks);
  };

  return (
    <div className="space-y-5">
      {devTreeLinks.map((item) => (
        <DevTreeInput
          key={item.name}
          item={item}
          handleUrlChange={handleUrlChange}
          handleEnableLink={handleEnableLink}
        />
      ))}
    </div>
  );
};
export default LinkTreeView;
