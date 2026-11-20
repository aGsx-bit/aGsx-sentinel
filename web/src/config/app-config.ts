import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "aGsx Sentinel",
  version: packageJson.version,
  copyright: `© ${currentYear}, aGsx Sentinel.`,
  meta: {
    title: "aGsx Sentinel — Autonomous Security Platform",
    description: "LLM-powered Autonomous Penetration Testing & Security Audit System",
  },
};
