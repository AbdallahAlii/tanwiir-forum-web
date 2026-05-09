import { useQuery } from "@tanstack/react-query";
import { fetchTemplateData } from "@/services/api";

export const useTemplateData = () => {
  return useQuery({
    queryKey: ["templateData"],
    queryFn: fetchTemplateData,
  });
};
