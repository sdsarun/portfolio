// view-modesl
import type { HomeViewModel } from "@/features/home/view-models/home-model";

// dto
import type { GetProfileResponse } from "@/features/profile/dto/get-profile-response";

export function mapProfileToHome(data: GetProfileResponse): HomeViewModel {
  const { profile } = data;
  return {
    displayName: profile?.displayName?.trim() || null,
    roleName: profile?.roleName?.trim() || null,
    bioTitle: profile?.bioTitle?.trim() || null,
    bioDescription: profile?.bioDescription?.trim() || null
  };
}
