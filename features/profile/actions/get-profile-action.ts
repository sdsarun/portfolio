"use server";

// lib
import { RedisCache } from "@/infrastructure/cache/cache-client";
import { CacheKeys } from "@/infrastructure/cache/cache-keys";

// http
import { portfolioApi } from "@/infrastructure/http/server-http-client";

// mappers
import { mapProfileToContacts } from "@/features/profile/mappers/map-profile-to-contacts";
import { mapProfileToHome } from "@/features/profile/mappers/map-profile-to-home";
import { mapProfileToResume } from "@/features/profile/mappers/map-profile-to-resume";
import { mapProfileToWork } from "@/features/profile/mappers/map-profile-to-work";

// view-models
import type { HomeViewModel } from "@/features/home/view-models/home-model";
import type { WorkViewModel } from "@/features/work/view-models/work-model";
import type { ResumeViewModel } from "@/features/resume/view-models/resume-model";
import type { ContactViewModel } from "@/features/contact/view-models/contact-model";

// dto
import type { GetProfileResponse } from "@/features/profile/dto/get-profile-response";

export type GetProfileOutput = {
  home: HomeViewModel;
  work: WorkViewModel[];
  resume: ResumeViewModel;
  contacts: ContactViewModel[];
};

const EMPTY_PROFILE: GetProfileOutput = {
  home: {
    displayName: null,
    roleName: null,
    bioTitle: null,
    bioDescription: null
  },
  work: [],
  resume: {
    name: "",
    title: "",
    subtitle: "",
    workExperience: [],
    skills: {},
    education: [],
    certifications: [],
    resumeLink: ""
  },
  contacts: []
};

export async function getProfile(): Promise<GetProfileOutput> {
  const cacheService = RedisCache.getInstance();
  try {
    const cacheKey = CacheKeys.profile.all();
    const cached = await cacheService.get<GetProfileOutput | null>(cacheKey);
    if (cached) {
      return cached;
    }

    const response = await portfolioApi("/v1/profile");

    const profileData = (await response.json()) as GetProfileResponse;

    const profileOutput: GetProfileOutput = {
      home: mapProfileToHome(profileData),
      work: mapProfileToWork(profileData),
      resume: mapProfileToResume(profileData),
      contacts: mapProfileToContacts(profileData)
    };

    await cacheService.set(cacheKey, profileOutput, { ttlSeconds: 3600 });

    return profileOutput;
  } catch (error) {
    console.error("GetProfileError:", error);
    return EMPTY_PROFILE;
  }
}
