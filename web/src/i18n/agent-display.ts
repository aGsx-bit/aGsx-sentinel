import catalog from "./screen-catalog.json";
import type { UITranslate } from "./use-ui-translation";

// These are shipped names, not arbitrary Agent names or prompt content. Match
// both the reserved key and the original value so user edits remain untouched.
const englishAgentNames: Record<string, string> = {
  goals: "Goal Decomposition",
  planner: "Planner",
  mainagent: "Main Agent",
  worker: "Worker",
  auto: "Auto",
  asset_mapper: "Asset Recon",
  pentest: "Pentest",
  reporter: "Reporter",
  retester: "Vulnerability Retester",
  credential_processor: "Credential Harvester",
};

const shippedNames: Record<string, string[]> = {
  goals: ["目标拆解", "目标拆解器", "Goal decomposition", "Goal Decomposition"],
  planner: ["规划", "规划者", "Planner"],
  mainagent: ["主", "主 Agent", "Main Agent"],
  worker: ["执行", "Work Agent", "Worker"],
  auto: ["Auto"],
  asset_mapper: ["资产梳理", "Asset Recon"],
  pentest: ["渗透测试", "Pentest"],
  reporter: ["报告撰写", "Reporter"],
  retester: ["漏洞复测", "Vulnerability Retester"],
  credential_processor: ["凭据整理", "Credential Harvester"],
};

export function agentDisplayName(agent: { key: string; name: string }, ui?: (key: string) => string): string {
  if (englishAgentNames[agent.key]) {
    return englishAgentNames[agent.key];
  }
  if (ui && shippedNames[agent.key]?.includes(agent.name)) {
    const res = ui(`builtinAgent.${agent.key}.name`);
    if (res && !res.startsWith("builtinAgent.")) return res;
  }
  return agent.name;
}

const shippedDescriptions = new Map(
  Object.entries(catalog)
    .filter(([key]) => key.startsWith("builtinAgentDescription."))
    .map(([key, pair]) => [pair[0], key]),
);

export function agentDisplayDescription(agent: { key: string; description?: string }, ui: UITranslate): string {
  const text = agent.description ?? "";
  const key = shippedNames[agent.key] ? shippedDescriptions.get(text) : undefined;
  return key ? ui(key) : text;
}
