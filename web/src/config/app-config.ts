import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "aGsx",
  version: packageJson.version,
  copyright: `© ${currentYear}, aGsx.`,
  meta: {
    title: "aGsx — AI Pentest Console",
    description: "LLM-powered Autonomous Penetration Testing & Security Audit System",
  },
};
