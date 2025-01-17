import { useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "../components/DevTreeInput";
import { isValidUrl } from "../utils";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../api/DevTreeAPI";
import { User } from "../types";

const LinkTreeView = () => {
  const [devTreeLinks, setDevTreeLinks] = useState(social);

  const queryClient = useQueryClient();
  const user: User = queryClient.getQueryData(["user"])!;

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Updated Successfully");
    },
  });

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
        if (isValidUrl(item.url)) {
          return { ...item, enabled: !item.enabled };
        } else {
          toast.error("Please enter a valid URL");
        }
      }
      return item;
    });
    setDevTreeLinks(updatedLinks);

    queryClient.setQueryData(["user"], (prevData: User) => ({
      ...prevData,
      links: JSON.stringify(updatedLinks),
    }));
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
      <button
        className="bg-cyan-400 p-2 text-lg w-full uppercase text-salte-600 rounded"
        onClick={() => mutate(user)}
      >
        Guardar cambios
      </button>
    </div>
  );
};
export default LinkTreeView;
