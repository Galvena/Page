<script setup lang="ts">
const fcard =
  "rounded-sm border border-border bg-background p-[clamp(22px,3vw,32px)] transition-colors hover:border-[rgba(233,241,250,0.45)]";
const fcol = `${fcard} grid grid-cols-1 gap-3.5`;
const fwide = `${fcard} grid grid-cols-1 items-start gap-[clamp(22px,3vw,40px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]`;
const callout =
  "flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3";
const ftitle =
  "font-display text-[clamp(24px,2.6vw,31px)] leading-[1.04] font-semibold tracking-[-0.005em]";
const fbody = "text-[15.5px] text-ink-2 max-w-[58ch]";
const code = "well p-4 text-[13px] leading-[1.7]";
</script>

<template>
  <section
    id="frame"
    class="border-y border-[rgba(233,241,250,0.11)] bg-[var(--ink-a16)]"
  >
    <div class="mx-auto max-w-[1180px] px-[clamp(20px,4vw,44px)] py-[clamp(64px,8vw,120px)]">
      <div class="mb-[clamp(36px,5vw,60px)]">
        <p class="eyebrow"><b>Sheet GA-3</b> · detail · what the frame carries</p>
        <h2
          class="mt-4 max-w-[24ch] font-display text-[clamp(34px,4.2vw,52px)] leading-[1.02] font-semibold tracking-[-0.01em]"
        >
          The frame, in code.
        </h2>
        <p class="mt-4 max-w-[62ch] text-[17px] text-ink-2">
          The decisions the framework makes so a harness does not have to, in
          the code you would otherwise write by hand. Every snippet runs
          against the real crates and the real config surface.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-[26px] lg:grid-cols-2">
        <!-- A1 · the bridge, featured -->
        <article :class="`${fwide} lg:col-span-2`">
          <div class="flex flex-col gap-3.5">
            <p :class="callout"><b>A1</b> · the bridge</p>
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
          <pre :class="code"><span class="cm">// any page, any host: the engine serves the module itself</span>
<span class="kw">import</span> { createClient } <span class="kw">from</span> <span class="st">"/bridge/client.mjs"</span>;

<span class="kw">const</span> bridge = <span class="kw">createClient</span>(<span class="st">"http://127.0.0.1:8317"</span>);

<span class="kw">const</span> ws = <span class="kw">await</span> bridge.defaultWorkspace();
<span class="kw">const</span> s  = <span class="kw">await</span> bridge.createSession(ws, <span class="st">"first light"</span>);

<span class="kw">const</span> off = <span class="kw">await</span> bridge.subscribe(s.id, {}, (frame) =&gt; {
  <span class="kw">if</span> (frame.type === <span class="st">"turn"</span>) render(frame.turn);
});</pre>
        </article>

        <!-- A2 -->
        <article :class="fcol">
          <p :class="callout"><b>A2</b> · the binary</p>
          <h3 :class="ftitle">One binary, three ways in.</h3>
          <p :class="fbody">
            Invoked at a TTY it is the CLI.
            <code class="rounded-sm bg-[var(--ink-a07)] px-1 py-0.5 text-[0.92em] text-foreground">galvena serve</code>
            makes it a headless engine, and the desktop shell is just another
            client that opens once an engine answers.
          </p>
          <pre :class="code"><span class="pr">$</span> galvena serve
<span class="cm"># the engine, on 127.0.0.1:8317</span>
<span class="pr">$</span> galvena chat &lt;id&gt; <span class="st">"hello"</span>
<span class="cm"># the stub replies. no key needed</span></pre>
        </article>

        <!-- A3 -->
        <article :class="fcol">
          <p :class="callout"><b>A3</b> · the policy</p>
          <h3 :class="ftitle">Signed upstream. Enforced locally.</h3>
          <p :class="fbody">
            Rules ride down the subscription chain and apply on your machine.
            The ask-on-modify guardrail stands in front of every mutating tool
            call, and a policy file can allow, deny, or escalate at the bus
            seam.
          </p>
          <pre :class="code">ask = <span class="st">true</span>             <span class="cm"># before every mutating tool call</span>
policy = <span class="st">"./policy.toml"</span> <span class="cm"># allow · deny · escalate</span></pre>
        </article>

        <!-- A4 -->
        <article :class="fcol">
          <p :class="callout"><b>A4</b> · the tool seam</p>
          <h3 :class="ftitle">Loaded, not enabled.</h3>
          <p :class="fbody">
            MCP servers mount only behind an explicit
            <code class="rounded-sm bg-[var(--ink-a07)] px-1 py-0.5 text-[0.92em] text-foreground">--mcp</code>,
            because connecting runs their code. Every mounted tool loads
            disabled, and a flip persists across restarts.
          </p>
          <pre :class="code"><span class="pr">$</span> galvena serve --mcp --enable-tool fetch</pre>
        </article>

        <!-- A5 -->
        <article :class="fcol">
          <p :class="callout"><b>A5</b> · the tree</p>
          <h3 :class="ftitle">Sessions are an event tree.</h3>
          <p :class="fbody">
            Profile → Project → Workspace → Session → Turn, journaled on disk
            beside the binary. Secrets live in the OS keychain vault, and the
            database path is asked for, never invented.
          </p>
          <pre :class="code"><span class="kw">export</span> GALVENA_DB=./galvena.db
<span class="cm"># or db = "./galvena.db" in harness.toml</span></pre>
        </article>

        <!-- A6 -->
        <article :class="`${fwide} lg:col-span-2`">
          <div class="flex flex-col gap-3.5">
            <p :class="callout"><b>A6</b> · the providers</p>
            <h3 :class="ftitle">Any model. Or none.</h3>
            <p :class="fbody">
              The stub provider answers offline on first run, and nothing
              phones home. A real model is one line of
              <code class="rounded-sm bg-[var(--ink-a07)] px-1 py-0.5 text-[0.92em] text-foreground">harness.toml</code>
              away, pointed at a cloud or at your own box. Anthropic, OpenAI
              and Responses drivers cover their compatible servers, so local
              stacks ride the same seam.
            </p>
          </div>
          <pre :class="code"><span class="cm"># "stub", the default, answers offline: no key, no network</span>
provider = <span class="st">"openai"</span>        <span class="cm"># or "anthropic"</span>
base_url = <span class="st">"http://127.0.0.1:11434"</span>
                             <span class="cm"># Ollama · vLLM · LM Studio · OpenRouter</span></pre>
        </article>

        <!-- A7 · the shortcut -->
        <article :class="`${fcard} col-span-2 grid grid-cols-1 gap-4`">
          <p :class="callout"><b>A7</b> · the shortcut</p>
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
<pre :class="code"><span class="kw">const</span> ws = <span class="kw">new</span> WebSocket(
  <span class="st">"ws://127.0.0.1:8317/sessions/"</span> + id + <span class="st">"/events"</span>);
ws.onmessage = (e) =&gt; {
  <span class="kw">const</span> f = JSON.parse(e.data);
  <span class="kw">if</span> (f.type === <span class="st">"hello"</span>) last = f.turn;
  <span class="kw">if</span> (f.type === <span class="st">"turn"</span>) render(f.turn);
};
ws.onclose = () =&gt; reconnect(last); <span class="cm">// and replay the gap</span></pre>
            </figure>
            <figure class="grid content-start gap-2">
              <figcaption class="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                With the bridge · one call
              </figcaption>
<pre :class="code"><span class="kw">const</span> off = <span class="kw">await</span> bridge.subscribe(id, {},
  (f) =&gt; render(f.turn));</pre>
            </figure>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
