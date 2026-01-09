// core
import { type Metadata } from "next";

// page
import HomePage from "@/features/home/pages/home-page";

export const revalidate = 3600; // in seconds
export const metadata: Metadata = {
  title: "sdsarun | home"
};

export default HomePage;
