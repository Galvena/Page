<script setup lang="ts">
import { ref } from "vue";
import { useReveal } from "@/composables/useReveal";

const fig = ref<HTMLElement | null>(null);
useReveal(fig, "drawn");
</script>

<template>
  <section id="ga" class="pt-0">
    <div class="mx-auto max-w-[1180px] px-[clamp(20px,4vw,44px)]">
      <div class="mb-[clamp(36px,5vw,60px)]">
        <p class="eyebrow"><b>Sheet GA-1</b> · general arrangement</p>
        <h2
          class="mt-4 max-w-[24ch] font-display text-[clamp(34px,4.2vw,52px)] leading-[1.02] font-semibold tracking-[-0.01em]"
        >
          One engine. Everything else is a client.
        </h2>
        <p class="mt-4 max-w-[62ch] text-[17px] text-ink-2">
          The engine serves HTTP and WebSocket on localhost, and that is the
          only surface it has. Pages, terminals and desktop shells are all
          clients of the same bus. Policy arrives signed from upstream and is
          enforced on your machine.
        </p>
      </div>

      <div class="overflow-x-auto rounded-sm border border-border">
        <div class="min-w-[880px] p-[clamp(16px,3vw,36px)]">
          <figure ref="fig" class="ga-fig m-0">
            <svg
              class="diag"
              viewBox="0 0 1040 648"
              role="img"
              aria-labelledby="gatitle gadesc"
            >
              <title id="gatitle">General arrangement of a running Galvena harness</title>
              <desc id="gadesc">
                Clients on the left: a CLI, a web page, a TUI and a desktop
                shell. They speak HTTP and WebSocket through the bridge to the
                engine on 127.0.0.1:8317. The engine holds the command bus, an
                event-sourced session tree, the agent runtime and trait seams.
                Seams reach model providers: Anthropic, Ollama, llama.cpp and
                MLX, plus MCP for tools in both directions. Storage sits below:
                libSQL planes and the vault on the OS keychain. The
                implementor's cloud hands down signed policy that is enforced
                locally. A dimension ruler names the ten crates.
              </desc>

              <!-- sheet notes -->
              <text class="tiny pop" x="56" y="30">GALVENA · GENERAL ARRANGEMENT</text>
              <text class="tiny pop" x="1020" y="30" text-anchor="end">DO NOT SCALE DRAWING · CHECK ROADMAP</text>

              <!-- implementor cloud -->
              <text class="tiny pop" x="580" y="42" text-anchor="middle">THE POLICY CHAIN, UPSTREAM</text>
              <rect class="ln dash anim" pathLength="1" style="--i: 0" x="430" y="52" width="300" height="46" />
              <text class="pop" x="580" y="72" text-anchor="middle">IMPLEMENTOR CLOUD</text>
              <text class="sub pop" x="580" y="89" text-anchor="middle">OpenCode · DeepSeek · Claude · Qwen · …</text>
              <line class="ln dash red anim" pathLength="1" style="--i: 1" x1="580" y1="98" x2="580" y2="164" />
              <text class="tiny tred pop" x="594" y="126">signed policy</text>
              <text class="tiny tred pop" x="594" y="141">enforced locally, on every command</text>

              <!-- clients -->
              <text class="tiny pop" x="56" y="182">INTERFACES · EVERY ONE A CLIENT</text>
              <rect class="ln anim" pathLength="1" style="--i: 5" x="56" y="192" width="190" height="46" />
              <text class="pop" x="68" y="212">CLI</text>
              <text class="sub pop" x="68" y="229">a TTY, the same binary</text>
              <rect class="ln anim" pathLength="1" style="--i: 6" x="56" y="258" width="190" height="46" />
              <text class="pop" x="68" y="278">WEB PAGE</text>
              <text class="sub pop" x="68" y="295">client.mjs, zero deps</text>
              <rect class="ln anim" pathLength="1" style="--i: 7" x="56" y="324" width="190" height="46" />
              <text class="pop" x="68" y="344">TUI</text>
              <text class="sub pop" x="68" y="361">ratatui · the Rust client</text>
              <rect class="ln anim" pathLength="1" style="--i: 8" x="56" y="390" width="190" height="46" />
              <text class="pop" x="68" y="410">DESKTOP</text>
              <text class="sub pop" x="68" y="427">the OS webview, via wry</text>
              <g class="ln">
                <line class="anim" pathLength="1" style="--i: 9" x1="246" y1="215" x2="280" y2="215" />
                <line class="anim" pathLength="1" style="--i: 9" x1="246" y1="281" x2="280" y2="281" />
                <line class="anim" pathLength="1" style="--i: 9" x1="246" y1="347" x2="280" y2="347" />
                <line class="anim" pathLength="1" style="--i: 9" x1="246" y1="413" x2="280" y2="413" />
              </g>

              <!-- the bridge -->
              <rect class="ln anim" pathLength="1" style="--i: 4" x="280" y="170" width="80" height="270" />
              <text class="pop" transform="rotate(-90 322 305)" x="322" y="305" text-anchor="middle">THE BRIDGE · HTTP · WS</text>
              <line class="ln anim" pathLength="1" style="--i: 10" x1="360" y1="305" x2="420" y2="305" />
              <text class="tiny pop" x="390" y="296" text-anchor="middle">8317</text>

              <!-- engine -->
              <rect class="ln2 anim" pathLength="1" style="--i: 2" x="420" y="170" width="380" height="270" />
              <rect class="ln anim" pathLength="1" style="--i: 3" x="427" y="177" width="366" height="256" />
              <text class="pop" x="440" y="200">ENGINE</text>
              <text class="tiny pop" x="792" y="200" text-anchor="end">ONE MULTI-CALL RUST BINARY</text>
              <rect class="ln2 box2f anim" pathLength="1" style="--i: 11" x="500" y="212" width="220" height="58" />
              <text class="pop" x="610" y="237" text-anchor="middle">COMMAND BUS</text>
              <text class="sub pop" x="610" y="255" text-anchor="middle">commands · events · veto</text>
              <rect class="boxf anim" pathLength="1" style="--i: 12" x="436" y="296" width="160" height="56" />
              <text class="pop" x="516" y="319" text-anchor="middle">SESSION TREE</text>
              <text class="sub pop" x="516" y="337" text-anchor="middle">event-sourced</text>
              <rect class="boxf anim" pathLength="1" style="--i: 13" x="616" y="296" width="168" height="56" />
              <text class="pop" x="700" y="319" text-anchor="middle">AGENT RUNTIME</text>
              <text class="sub pop" x="700" y="337" text-anchor="middle">chains · retry queue</text>
              <rect class="boxf anim" pathLength="1" style="--i: 14" x="436" y="376" width="348" height="42" />
              <text class="tiny pop" x="610" y="401" text-anchor="middle">TRAIT SEAMS · PROVIDER · VCS · SEARCH · EXECUTOR</text>
              <g class="ln">
                <line class="anim" pathLength="1" style="--i: 15" x1="560" y1="270" x2="560" y2="296" />
                <line class="anim" pathLength="1" style="--i: 15" x1="660" y1="270" x2="660" y2="296" />
                <line class="anim" pathLength="1" style="--i: 15" x1="610" y1="270" x2="610" y2="376" />
              </g>

              <!-- providers -->
              <text class="tiny pop" x="936" y="182" text-anchor="middle">MODEL PROVIDERS</text>
              <g class="ln">
                <line class="anim" pathLength="1" style="--i: 16" x1="800" y1="215" x2="846" y2="215" />
                <line class="anim" pathLength="1" style="--i: 16" x1="800" y1="281" x2="846" y2="281" />
                <line class="anim" pathLength="1" style="--i: 16" x1="800" y1="347" x2="846" y2="347" />
                <line class="anim" pathLength="1" style="--i: 16" x1="800" y1="413" x2="846" y2="413" />
              </g>
              <rect class="ln anim" pathLength="1" style="--i: 17" x="846" y="192" width="180" height="46" />
              <text class="pop" x="858" y="212">ANTHROPIC</text>
              <text class="sub pop" x="858" y="229">Messages, or compatible</text>
              <rect class="ln anim" pathLength="1" style="--i: 17" x="846" y="258" width="180" height="46" />
              <text class="pop" x="858" y="278">OPENAI · RESPONSES</text>
              <text class="sub pop" x="858" y="295">Chat Completions servers</text>
              <rect class="ln anim" pathLength="1" style="--i: 17" x="846" y="324" width="180" height="46" />
              <text class="pop" x="858" y="344">OLLAMA · LLAMA.CPP</text>
              <text class="sub pop" x="858" y="361">local, by base_url</text>
              <rect class="ln anim" pathLength="1" style="--i: 17" x="846" y="390" width="180" height="46" />
              <text class="pop" x="858" y="410">MLX</text>
              <text class="sub pop" x="858" y="427">local, Apple silicon</text>

              <!-- MCP -->
              <polyline class="ln anim" pathLength="1" style="--i: 18" points="784,397 822,397 822,484 846,484" fill="none" />
              <rect class="ln anim" pathLength="1" style="--i: 19" x="846" y="458" width="180" height="50" />
              <text class="pop" x="858" y="478">MCP</text>
              <text class="sub pop" x="858" y="496">client · server · proxy</text>
              <text class="tiny pop" x="936" y="443" text-anchor="middle">tools, both directions</text>

              <!-- storage -->
              <text class="tiny pop" x="420" y="466">STORAGE · LOCAL FIRST</text>
              <rect class="ln dash anim" pathLength="1" style="--i: 20" x="420" y="472" width="380" height="76" />
              <g class="ln">
                <line class="anim" pathLength="1" style="--i: 21" x1="516" y1="440" x2="516" y2="486" />
                <line class="anim" pathLength="1" style="--i: 21" x1="704" y1="440" x2="704" y2="486" />
              </g>
              <rect class="boxf anim" pathLength="1" style="--i: 22" x="436" y="486" width="160" height="48" />
              <text class="pop" x="516" y="506" text-anchor="middle">LIBSQL PLANES</text>
              <text class="sub pop" x="516" y="523" text-anchor="middle">meta · blobs · cache</text>
              <rect class="boxf anim" pathLength="1" style="--i: 22" x="624" y="486" width="160" height="48" />
              <text class="pop" x="704" y="506" text-anchor="middle">VAULT</text>
              <text class="sub pop" x="704" y="523" text-anchor="middle">OS keychain · AES-GCM</text>

              <!-- dimension ruler · the ten crates -->
              <g class="ln">
                <line class="anim" pathLength="1" style="--i: 23" x1="56" y1="596" x2="1020" y2="596" />
                <polyline class="anim" pathLength="1" style="--i: 23" points="56,596 66,592" fill="none" />
                <polyline class="anim" pathLength="1" style="--i: 23" points="56,596 66,600" fill="none" />
                <polyline class="anim" pathLength="1" style="--i: 23" points="1020,596 1010,592" fill="none" />
                <polyline class="anim" pathLength="1" style="--i: 23" points="1020,596 1010,600" fill="none" />
              </g>
              <text class="tiny pop" x="538" y="580" text-anchor="middle">TEN CRATES · ONE FRAME</text>
              <g class="ln">
                <line
                  v-for="x in [56, 152.4, 248.8, 345.2, 441.6, 538, 634.4, 730.8, 827.2, 923.6, 1020]"
                  :key="x"
                  class="anim"
                  pathLength="1"
                  style="--i: 23"
                  :x1="x"
                  y1="590"
                  :x2="x"
                  y2="602"
                />
              </g>
              <g class="tiny pop">
                <text
                  v-for="crate in [
                    'KERNEL', 'ENGINE', 'BRIDGE', 'COMPAT', 'PROVIDERS',
                    'SKILLS', 'STORE', 'VAULT', 'STALKER', 'CLI',
                  ]"
                  :key="crate"
                  :x="56 + 96.4 * 0.5 + 96.4 * ['KERNEL', 'ENGINE', 'BRIDGE', 'COMPAT', 'PROVIDERS', 'SKILLS', 'STORE', 'VAULT', 'STALKER', 'CLI'].indexOf(crate)"
                  y="620"
                  text-anchor="middle"
                >
                  {{ crate }}
                </text>
              </g>
            </svg>
            <figcaption
              class="mt-3.5 font-mono text-[11.5px] tracking-[0.08em] text-ink-3"
            >
              FIG. 1 — A RUNNING HARNESS, END TO END. REDRAWN FROM
              docs/architecture.md IN galvena/framework.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
