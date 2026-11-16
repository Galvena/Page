<script setup lang="ts">
import HeaderStrip from "@/sections/HeaderStrip.vue";
import HeroSection from "@/sections/HeroSection.vue";
import BackingSection from "@/sections/BackingSection.vue";
import StarterSection from "@/sections/StarterSection.vue";
import FacesSection from "@/sections/FacesSection.vue";
import GaDiagram from "@/sections/GaDiagram.vue";
import CratesSection from "@/sections/CratesSection.vue";
import FrameFeatures from "@/sections/FrameFeatures.vue";
import RevisionsSection from "@/sections/RevisionsSection.vue";
import RulesSection from "@/sections/RulesSection.vue";
import ClosingSection from "@/sections/ClosingSection.vue";
import SiteFooter from "@/sections/SiteFooter.vue";
import { useLenis } from "@/composables/useLenis";

useLenis();
</script>

<template>
  <a class="skip" href="#main">Skip to content</a>
  <div class="sheet">
    <i class="tick tick-tl" aria-hidden="true"></i>
    <i class="tick tick-tr" aria-hidden="true"></i>
    <i class="tick tick-bl" aria-hidden="true"></i>
    <i class="tick tick-br" aria-hidden="true"></i>

    <HeaderStrip />

    <main id="main">
      <HeroSection />
      <BackingSection />
      <StarterSection />
      <FacesSection />
      <GaDiagram />
      <CratesSection />
      <FrameFeatures />
      <RevisionsSection />
      <RulesSection />
      <ClosingSection />
    </main>

    <SiteFooter />
  </div>
</template>
