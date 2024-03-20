import { useQuery } from "@tanstack/react-query";
import UpdateSettingsForm from "./UpdateSettingsForm";

export function useSettings() {
  const {
    data: settings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: UpdateSettingsForm,
  });
  return { settings, isLoading, error };
}
