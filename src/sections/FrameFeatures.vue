<script setup lang="ts">
import SectionShell from "@/components/site/SectionShell.vue";
import SectionHead from "@/components/site/SectionHead.vue";
import Callout from "@/components/site/Callout.vue";
import CodeWell, { type CodeSeg } from "@/components/site/CodeWell.vue";

const fcard =
  "min-w-0 rounded-sm border border-border bg-background p-[clamp(22px,3vw,32px)] transition-colors hover:border-line-hover";
const fcol = `${fcard} grid grid-cols-1 gap-3.5`;
const fwide = `${fcard} grid grid-cols-1 items-start gap-[clamp(22px,3vw,40px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]`;
const ftitle =
  "font-display text-[clamp(24px,2.6vw,31px)] leading-[1.04] font-semibold tracking-[-0.005em]";
const fbody = "text-[15.5px] text-ink-2 max-w-[58ch]";

const L = (t: string, c?: string): CodeSeg[] => [{ t, c }];
const _ = L(" "); // a blank fence line

const a1: CodeSeg[][] = [
  L("// any page, any host: the engine serves the module itself", "cm"),
  [
    { t: "import", c: "kw" },
    { t: " { createClient } " },
    { t: "from", c: "kw" },
    { t: ' "/bridge/client.mjs"', c: "st" },
  ],
  _,
  [
    { t: "const", c: "kw" },
    { t: " bridge = " },
    { t: "createClient", c: "kw" },
    { t: "(" },
    { t: '"http://127.0.0.1:8317"', c: "st" },
    { t: ");" },
  ],
  _,
  [
    { t: "const", c: "kw" },
    { t: " ws = " },
    { t: "await", c: "kw" },
    { t: " bridge.defaultWorkspace();" },
  ],
  [
    { t: "const", c: "kw" },
    { t: " s  = " },
    { t: "await", c: "kw" },
    { t: " bridge.createSession(ws, " },
    { t: '"first light"', c: "st" },
    { t: ");" },
  ],
  _,
  [
    { t: "const", c: "kw" },
    { t: " off = " },
    { t: "await", c: "kw" },
    { t: " bridge.subscribe(s.id, {}, (frame) => {" },
  ],
  [
    { t: "  " },
    { t: "if", c: "kw" },
    { t: " (frame.type === " },
    { t: '"turn"', c: "st" },
    { t: ") render(frame.turn);" },
  ],
  L("});"),
];

const a2: CodeSeg[][] = [
  [{ t: "$ ", c: "pr" }, { t: "galvena serve" }],
  L("# the engine, on 127.0.0.1:8317", "cm"),
  [{ t: "$ ", c: "pr" }, { t: "galvena chat <id> " }, { t: '"hello"', c: "st" }],
  L("# the stub replies. no key needed", "cm"),
];

const a3: CodeSeg[][] = [
  [
    { t: "ask = " },
    { t: "true", c: "st" },
    { t: "             " },
    { t: "# before every mutating tool call", c: "cm" },
  ],
  [
    { t: "policy = " },
    { t: '"./policy.toml"', c: "st" },
    { t: " " },
    { t: "# allow · deny · escalate", c: "cm" },
  ],
];

const a4: CodeSeg[][] = [
  [{ t: "$ ", c: "pr" }, { t: "galvena serve --mcp --enable-tool fetch" }],
];

const a5: CodeSeg[][] = [
  [{ t: "export", c: "kw" }, { t: " GALVENA_DB=./galvena.db" }],
  L('# or db = "./galvena.db" in harness.toml', "cm"),
];

const a6: CodeSeg[][] = [
  L('# "stub", the default, answers offline: no key, no network', "cm"),
  [
    { t: "provider = " },
    { t: '"openai"', c: "st" },
    { t: "        " },
    { t: '# or "anthropic"', c: "cm" },
  ],
  [{ t: "base_url = " }, { t: '"http://127.0.0.1:11434"', c: "st" }],
  [
    { t: "                             " },
    { t: "# Ollama · vLLM · LM Studio · OpenRouter", c: "cm" },
  ],
];

const duoHand: CodeSeg[][] = [
  [
    { t: "const", c: "kw" },
    { t: " ws = " },
    { t: "new", c: "kw" },
    { t: " WebSocket(" },
  ],
  [
    { t: '  "ws://127.0.0.1:8317/sessions/"' },
    { t: " + id + " },
    { t: '"/events"' },
    { t: ");" },
  ],
  [{ t: "ws.onmessage = (e) => {" }],
  [
    { t: "  " },
    { t: "const", c: "kw" },
    { t: " f = JSON.parse(e.data);" },
  ],
  [
    { t: "  " },
    { t: "if", c: "kw" },
    { t: " (f.type === " },
    { t: '"hello"', c: "st" },
    { t: ") last = f.turn;" },
  ],
  [
    { t: "  " },
    { t: "if", c: "kw" },
    { t: " (f.type === " },
    { t: '"turn"', c: "st" },
    { t: ") render(f.turn);" },
  ],
  L("};"),
  [
    { t: "ws.onclose = () => reconnect(last); " },
    { t: "// and replay the gap", c: "cm" },
  ],
];

const duoBridge: CodeSeg[][] = [
  [
    { t: "const", c: "kw" },
    { t: " off = " },
    { t: "await", c: "kw" },
    { t: " bridge.subscribe(id, {}," },
  ],
  [{ t: "  (f) => render(f.turn));" }],
];
</script>

<template>
  <SectionShell
    id="frame"
    class="border-y border-line bg-[var(--ink-a16)]"
  >
    <SectionHead
      mark="Sheet GA-3"
      label="detail · what the frame carries"
      title="The frame, in code."
      lede="The decisions the framework makes so a harness does not have to, in the code you would otherwise write by hand. Every snippet runs against the real crates and the real config surface."
    />

    <div class="grid grid-cols-1 gap-[26px] lg:grid-cols-2">
      <!-- A1 · the bridge, featured -->
      <article :class="`${fwide} lg:col-span-2`">
        <div class="flex flex-col gap-3.5">
          <Callout mark="A1" label="the bridge" />
          <h3 :class="ftitle">The frontend is detached.</h3>
          <p :class="fbody">
            The framework ships connectors, never UI. A page imports
            <code class="rounded-sm bg-[var(--ink-a07)] px-1 py-0.5 text-[0.92em] text-foreground">client.mjs</code>,
            a zero-dependency module the engine itself serves, and speaks
            HTTP and WebSocket to localhost. The same session surface answers
            a browser page, a terminal, and a desktop window, so the
            frontend can live on the web or on your own infrastructure.
            Conveniences for Vue, React and Svelte ride separately, one
            milestone each.
          </p>
          <p class="mt-1 font-mono text-[12.5px] tracking-[0.03em] text-ink-3">
            <b class="font-normal text-oxide-hi">//</b> the Rust client,
            <b class="font-normal text-oxide-hi">galvena_bridge::client</b>,
            answers the same surface for terminal and native shells
          </p>
        </div>
        <CodeWell :lines="a1" label="Example page code using the bridge client" />
      </article>

      <!-- A2 -->
      <article :class="fcol">
        <Callout mark="A2" label="the binary" />
        <h3 :class="ftitle">One binary, three ways in.</h3>
        <p :class="fbody">
          Invoked at a TTY it is the CLI.
          <code class="rounded-sm bg-[var(--ink-a07)] px-1 py-0.5 text-[0.92em] text-foreground">galvena serve</code>
          makes it a headless engine, and the desktop shell is just another
          client that opens once an engine answers.
        </p>
        <CodeWell :lines="a2" label="Terminal transcript of serving and chatting" />
      </article>

      <!-- A3 -->
      <article :class="fcol">
        <Callout mark="A3" label="the policy" />
        <h3 :class="ftitle">Signed upstream. Enforced locally.</h3>
        <p :class="fbody">
          Rules ride down the subscription chain and apply on your machine.
          The ask-on-modify guardrail stands in front of every mutating tool
          call, and a policy file can allow, deny, or escalate at the bus
          seam.
        </p>
        <CodeWell :lines="a3" label="harness.toml policy keys" />
      </article>

      <!-- A4 -->
      <article :class="fcol">
        <Callout mark="A4" label="the tool seam" />
        <h3 :class="ftitle">Loaded, not enabled.</h3>
        <p :class="fbody">
          MCP servers mount only behind an explicit
          <code class="rounded-sm bg-[var(--ink-a07)] px-1 py-0.5 text-[0.92em] text-foreground">--mcp</code>,
          because connecting runs their code. Every mounted tool loads
          disabled, and a flip persists across restarts.
        </p>
        <CodeWell :lines="a4" label="Terminal transcript of mounting MCP tools" />
      </article>

      <!-- A5 -->
      <article :class="fcol">
        <Callout mark="A5" label="the tree" />
        <h3 :class="ftitle">Sessions are an event tree.</h3>
        <p :class="fbody">
          Profile → Project → Workspace → Session → Turn, journaled on disk
          beside the binary. Secrets live in the OS keychain vault, and the
          database path is asked for, never invented.
        </p>
        <CodeWell :lines="a5" label="Setting the database path" />
      </article>

      <!-- A6 -->
      <article :class="`${fwide} lg:col-span-2`">
        <div class="flex flex-col gap-3.5">
          <Callout mark="A6" label="the providers" />
          <h3 :class="ftitle">Any model. Or none.</h3>
          <p :class="fbody">
            The stub provider answers offline on first run, and nothing
            phones home. A real model is one line of
            <code class="rounded-sm bg-[var(--ink-a07)] px-1 py-0.5 text-[0.92em] text-foreground">harness.toml</code>
            away, pointed at a cloud or at your own box. Every driver,
            Anthropic through Gemini to the local stacks, sits behind one
            Provider trait; SDK and wire types never leak past it.
          </p>
        </div>
        <CodeWell :lines="a6" label="harness.toml provider keys" />
      </article>

      <!-- A7 · the shortcut -->
      <article :class="`${fcard} grid grid-cols-1 gap-4 lg:col-span-2`">
        <Callout mark="A7" label="the shortcut" />
        <h3 :class="ftitle">The socket dance, one call.</h3>
        <p :class="fbody">
          This is where vibe-coding a harness bites: every face re-rolls the
          WebSocket by hand. Hello frames, parse guards, reconnects, replay
          after a gap. The bridge folds the dance into one call, and when a
          stream goes quiet the engine replays and you re-fetch.
        </p>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <figure class="grid content-start gap-2">
            <figcaption class="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              By hand · every face, every time
            </figcaption>
            <CodeWell :lines="duoHand" label="The WebSocket dance, hand-rolled" />
          </figure>
          <figure class="grid content-start gap-2">
            <figcaption class="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              With the bridge · one call
            </figcaption>
            <CodeWell :lines="duoBridge" label="The same dance through the bridge" />
          </figure>
        </div>
      </article>
    </div>
  </SectionShell>
</template>
