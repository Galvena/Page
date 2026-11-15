<script setup lang="ts">
import HeaderStrip from "@/sections/HeaderStrip.vue";
import HeroSection from "@/sections/HeroSection.vue";
import BackingSection from "@/sections/BackingSection.vue";
import GaDiagram from "@/sections/GaDiagram.vue";
import FacesSection from "@/sections/FacesSection.vue";
import FrameFeatures from "@/sections/FrameFeatures.vue";
import StarterSection from "@/sections/StarterSection.vue";
import RevisionsSection from "@/sections/RevisionsSection.vue";
import ClosingSection from "@/sections/ClosingSection.vue";
import SiteFooter from "@/sections/SiteFooter.vue";
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
      <GaDiagram />
      <FacesSection />
      <FrameFeatures />
      <StarterSection />
      <RevisionsSection />
      <ClosingSection />
    </main>

    <SiteFooter />
  </div>
</template>
