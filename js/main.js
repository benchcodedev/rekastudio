/**
 * ============================================================================
 * STUDIO REKA - Architecture & Spatial Design Practice
 * ============================================================================
 * Clean vanilla JavaScript for interactive components, animations, carousels,
 * modals, and lightboxes. Centralized studio configuration for easy customization.
 */

const STUDIO_CONFIG = {
  studioName: "Studio Reka",
  studioNameUpper: "STUDIO REKA",
  tagline: "Redefining Spaces, Elevating Lifestyles",
  craftsmanship: "Expert Craftsmen",
  location: "Based in Indonesia",
  leadText: "Innovative designs and tailored engineering approach. We turn vision into timeless reality - wherever you call home.",
  email: "hello@studioreka.id",
  phone: "+62 (21) 555-0198",
  year: 2024,

  // Stats
  stats: [
    { target: 15, suffix: "+", label: "Years of creating spaces" },
    { target: 90, suffix: "+", label: "Completing impactful designs to life" },
    { target: 75, suffix: "+", label: "Happy culturally happy clients" },
    { target: 11, suffix: "", label: "Design to fall over awards" }
  ],

  // Featured Projects
  projects: [
    {
      id: "terra-nova",
      title: "Terra Nova",
      category: "Eco-Resort Living",
      location: "Baja California, Mexico",
      year: "2024",
      image: "assets/images/aether/project_terra_nova.jpg",
      description: "A harmonious blend of brutalist concrete and natural foliage crafted for sustainable eco-resort living.",
      details: "Constructed with low-carbon aggregate and passive bioclimatic ventilation channels, Terra Nova seamlessly blends brutalist structural geometries into the rugged coastal landscape."
    },
    {
      id: "lumina-haven",
      title: "Lumina Haven",
      category: "Alpine Residence",
      location: "Aspen, Colorado",
      year: "2023",
      image: "assets/images/aether/project_lumina_haven.jpg",
      description: "A warm rustic-split lifestyle sanctuary overlooking the forest and scenic valleys.",
      details: "Utilizing cross-laminated regional timber and high-efficiency triple-glazed curtain walls, Lumina Haven creates an ethereal mountain refuge bathed in golden evening light."
    },
    {
      id: "sanctuary-homestead",
      title: "The Sanctuary Homestead",
      category: "Heritage Renovation",
      location: "Hudson Valley, New York",
      year: "2024",
      image: "assets/images/aether/project_homestead.jpg",
      description: "Reimagining classic heritage with contemporary structural layout for multigenerational life.",
      details: "A sensitive restoration of an early 20th-century colonial estate, expanded with minimalist glass transitions, geothermal radiant heating, and flexible open-concept pavilions."
    },
    {
      id: "aura-pavilion",
      title: "Aura Pavilion",
      category: "Cultural Landmark",
      location: "Kyoto, Japan",
      year: "2023",
      image: "assets/images/aether/gal_curved_bridge.jpg",
      description: "A contemplative glass and timber pavilion bridging urban life with tranquil Zen gardens.",
      details: "Designed as an urban sanctuary, incorporating rainwater harvesting reflecting pools and delicate acoustic wood ceilings."
    }
  ],

  // Services
  services: [
    {
      index: "01",
      code: "Service 01",
      title: "Urban Planning",
      tier: "tier-ground",
      summary: "Master planning, regenerative zoning, transit integration, and climate-resilient community corridors.",
      details: "We conceptualize large-scale urban frameworks prioritizing pedestrian accessibility, biophilic green infrastructure, and sustainable multi-modal transport networks."
    },
    {
      index: "02",
      code: "Service 02",
      title: "Residential",
      tier: "tier-level2",
      summary: "Bespoke private estates, sustainable villas, and contemporary multi-family living environments.",
      details: "Every home is tailored around client rituals and site topography, balancing intimate spaces with expansive daylight, thermal comfort, and timeless natural finishes."
    },
    {
      index: "03",
      code: "Service 03",
      title: "Commercial",
      tier: "tier-ground",
      summary: "Next-generation corporate headquarters, boutique retail pavilions, and high-performance workspaces.",
      details: "Transforming workplace culture with flexible open floorplates, dynamic facade shading systems, and LEED Platinum / WELL Certified interior environments."
    },
    {
      index: "04",
      code: "Service 04",
      title: "Landmarks",
      tier: "tier-roof",
      summary: "Civic institutions, cultural museums, iconic towers, and public public square installations.",
      details: "Creating enduring civic monuments that inspire future generations, uniting innovative structural engineering with deeply contextual cultural storytelling."
    }
  ],

  // Gallery
  gallery: [
    {
      src: "assets/images/aether/gal_brutalist.jpg",
      title: "Brutalist Intersections",
      subtitle: "Geometric shadows and monolithic concrete forms"
    },
    {
      src: "assets/images/aether/gal_stepped_facade.jpg",
      title: "Stepped Verticality",
      subtitle: "Minimalist cantilevered terraces ascending towards the sky"
    },
    {
      src: "assets/images/aether/gal_white_museum.jpg",
      title: "Titanium Angles",
      subtitle: "Contemporary art museum facade under soft diffuse daylight"
    },
    {
      src: "assets/images/aether/gal_accent_building.jpg",
      title: "Clean Modern Corner",
      subtitle: "Precision corner detailing with rhythmic window apertures"
    },
    {
      src: "assets/images/aether/gal_curved_bridge.jpg",
      title: "Curved Glass Tower",
      subtitle: "Dynamic curved twin towers linked by a continuous sky bridge"
    },
    {
      src: "assets/images/aether/gal_biophilic_terraces.jpg",
      title: "Biophilic Living Terraces",
      subtitle: "Cascading hanging gardens integrating flora into urban architecture"
    }
  ]
};

// ============================================================================
// Lifecycle & Initializer
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initStatsCounter();
  initProjectsCarousel();
  initServicesAccordion();
  initGalleryLightbox();
  initConsultationModal();
});

// ============================================================================
// 1. Navbar & Scrollspy
// ============================================================================
function initNavbar() {
  const nav = document.getElementById("main-nav");
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Smooth scroll with offset for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });
}

// ============================================================================
// 2. Mobile Menu
// ============================================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("mobile-menu-close");
  const overlay = document.getElementById("mobile-menu-overlay");

  if (!toggleBtn || !overlay) return;

  toggleBtn.addEventListener("click", () => {
    openMobileMenu();
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closeMobileMenu();
    });
  }

  // Close on outside click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeMobileMenu();
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileMenu();
  });
}

function openMobileMenu() {
  const overlay = document.getElementById("mobile-menu-overlay");
  if (!overlay) return;
  overlay.classList.remove("opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100", "pointer-events-auto");
  document.body.classList.add("overflow-hidden");
}

function closeMobileMenu() {
  const overlay = document.getElementById("mobile-menu-overlay");
  if (!overlay) return;
  overlay.classList.add("opacity-0", "pointer-events-none");
  overlay.classList.remove("opacity-100", "pointer-events-auto");
  document.body.classList.remove("overflow-hidden");
}

// ============================================================================
// 3. Animated Stats Counter
// ============================================================================
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-counter-number");
  if (!statNumbers.length) return;

  let hasAnimated = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          statNumbers.forEach((el) => {
            const target = parseInt(el.getAttribute("data-target") || "0", 10);
            const suffix = el.getAttribute("data-suffix") || "";
            animateValue(el, 0, target, 1600, suffix);
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsContainer = document.querySelector(".stats-bar-wrapper");
  if (statsContainer) {
    observer.observe(statsContainer);
  }
}

function animateValue(obj, start, end, duration, suffix = "") {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeOutQuad = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.floor(easeOutQuad * (end - start) + start);
    obj.textContent = currentVal + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.textContent = end + suffix;
    }
  };
  window.requestAnimationFrame(step);
}

// ============================================================================
// 4. Featured Projects Carousel & Slider
// ============================================================================
function initProjectsCarousel() {
  const slider = document.getElementById("projects-slider");
  const prevBtn = document.getElementById("btn-proj-prev");
  const nextBtn = document.getElementById("btn-proj-next");

  if (!slider) return;

  const scrollAmount = () => {
    const card = slider.querySelector(".project-card");
    return card ? card.offsetWidth + 24 : 360;
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: scrollAmount(), behavior: "smooth" });
    });
  }

  // Open modal on project card click or View Project button
  document.querySelectorAll("[data-project-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const projId = btn.getAttribute("data-project-id");
      const project = STUDIO_CONFIG.projects.find((p) => p.id === projId);
      if (project) {
        openProjectModal(project);
      }
    });
  });
}

// ============================================================================
// 5. Services Accordion & Blueprint Interaction
// ============================================================================
function initServicesAccordion() {
  const items = document.querySelectorAll(".service-item");
  if (!items.length) return;

  items.forEach((item) => {
    const header = item.querySelector(".service-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all others
      items.forEach((other) => other.classList.remove("active"));

      // Toggle current
      if (!isOpen) {
        item.classList.add("active");
        highlightBlueprintTier(item.getAttribute("data-tier"));
      } else {
        resetBlueprintTiers();
      }
    });
  });
}

function highlightBlueprintTier(tierId) {
  const svg = document.querySelector("#blueprint-frame svg");
  if (!svg || !tierId) return;

  const allTiers = svg.querySelectorAll("g[id^='tier-']");
  allTiers.forEach((g) => {
    if (g.id === tierId) {
      g.style.transition = "transform 0.4s ease, filter 0.3s ease";
      g.style.filter = "drop-shadow(0 4px 12px rgba(250, 124, 63, 0.45))";
    } else {
      g.style.filter = "opacity(0.65)";
    }
  });
}

function resetBlueprintTiers() {
  const svg = document.querySelector("#blueprint-frame svg");
  if (!svg) return;
  svg.querySelectorAll("g[id^='tier-']").forEach((g) => {
    g.style.filter = "none";
  });
}

// ============================================================================
// 6. Gallery Lightbox
// ============================================================================
let currentGalleryIdx = 0;

function initGalleryLightbox() {
  const tiles = document.querySelectorAll(".gallery-tile");
  const modal = document.getElementById("gallery-lightbox-modal");
  const closeBtn = document.getElementById("gallery-modal-close");
  const prevBtn = document.getElementById("gallery-modal-prev");
  const nextBtn = document.getElementById("gallery-modal-next");

  if (!modal) return;

  tiles.forEach((tile, idx) => {
    tile.addEventListener("click", () => {
      currentGalleryIdx = idx;
      openGalleryModal();
    });
  });

  const fullGalleryBtn = document.getElementById("btn-view-gallery");
  if (fullGalleryBtn) {
    fullGalleryBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentGalleryIdx = 0;
      openGalleryModal();
    });
  }

  if (closeBtn) closeBtn.addEventListener("click", closeGalleryModal);
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentGalleryIdx = (currentGalleryIdx - 1 + STUDIO_CONFIG.gallery.length) % STUDIO_CONFIG.gallery.length;
      updateGalleryModal();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentGalleryIdx = (currentGalleryIdx + 1) % STUDIO_CONFIG.gallery.length;
      updateGalleryModal();
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeGalleryModal();
  });

  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("opacity-0")) return;
    if (e.key === "Escape") closeGalleryModal();
    if (e.key === "ArrowLeft" && prevBtn) prevBtn.click();
    if (e.key === "ArrowRight" && nextBtn) nextBtn.click();
  });
}

function openGalleryModal() {
  const modal = document.getElementById("gallery-lightbox-modal");
  if (!modal) return;
  updateGalleryModal();
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100", "pointer-events-auto");
  document.body.classList.add("overflow-hidden");
}

function updateGalleryModal() {
  const item = STUDIO_CONFIG.gallery[currentGalleryIdx];
  if (!item) return;

  const imgEl = document.getElementById("gallery-modal-img");
  const titleEl = document.getElementById("gallery-modal-title");
  const subEl = document.getElementById("gallery-modal-subtitle");
  const countEl = document.getElementById("gallery-modal-counter");

  if (imgEl) imgEl.src = item.src;
  if (titleEl) titleEl.textContent = item.title;
  if (subEl) subEl.textContent = item.subtitle;
  if (countEl) countEl.textContent = `${currentGalleryIdx + 1} / ${STUDIO_CONFIG.gallery.length}`;
}

function closeGalleryModal() {
  const modal = document.getElementById("gallery-lightbox-modal");
  if (!modal) return;
  modal.classList.add("opacity-0", "pointer-events-none");
  modal.classList.remove("opacity-100", "pointer-events-auto");
  document.body.classList.remove("overflow-hidden");
}

// ============================================================================
// 7. Project Detail Modal
// ============================================================================
function openProjectModal(project) {
  const modal = document.getElementById("project-detail-modal");
  if (!modal) return;

  document.getElementById("modal-proj-title").textContent = project.title;
  document.getElementById("modal-proj-cat").textContent = `${project.category} • ${project.location} (${project.year})`;
  document.getElementById("modal-proj-desc").textContent = project.description;
  document.getElementById("modal-proj-details").textContent = project.details;
  document.getElementById("modal-proj-img").src = project.image;

  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100", "pointer-events-auto");
  document.body.classList.add("overflow-hidden");

  const closeBtn = document.getElementById("modal-proj-close");
  if (closeBtn) {
    closeBtn.onclick = closeProjectModal;
  }

  modal.onclick = (e) => {
    if (e.target === modal) closeProjectModal();
  };
}

function closeProjectModal() {
  const modal = document.getElementById("project-detail-modal");
  if (!modal) return;
  modal.classList.add("opacity-0", "pointer-events-none");
  modal.classList.remove("opacity-100", "pointer-events-auto");
  document.body.classList.remove("overflow-hidden");
}

// ============================================================================
// 8. Consultation / "Start A Project" Modal
// ============================================================================
function initConsultationModal() {
  const modal = document.getElementById("consultation-modal");
  const closeBtn = document.getElementById("consultation-close");
  const form = document.getElementById("consultation-form");
  const successMsg = document.getElementById("consultation-success");

  // Wire all "Start A Project" buttons
  document.querySelectorAll(".btn-open-consultation").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openConsultationModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeConsultationModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeConsultationModal();
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.classList.add("hidden");
      if (successMsg) successMsg.classList.remove("hidden");

      setTimeout(() => {
        closeConsultationModal();
        setTimeout(() => {
          form.reset();
          form.classList.remove("hidden");
          if (successMsg) successMsg.classList.add("hidden");
        }, 400);
      }, 2500);
    });
  }
}

function openConsultationModal() {
  const modal = document.getElementById("consultation-modal");
  if (!modal) return;
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100", "pointer-events-auto");
  document.body.classList.add("overflow-hidden");
}

function closeConsultationModal() {
  const modal = document.getElementById("consultation-modal");
  if (!modal) return;
  modal.classList.add("opacity-0", "pointer-events-none");
  modal.classList.remove("opacity-100", "pointer-events-auto");
  document.body.classList.remove("overflow-hidden");
}

// ============================================================================
// 9. Scroll Reveal Animations
// ============================================================================
function initScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal-init");
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  reveals.forEach((el) => observer.observe(el));
}
