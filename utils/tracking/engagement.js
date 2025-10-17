// Engagement & advanced intent events
import { gtmPush } from '../gtm';

let interactionSet = new Set();
let whatsappClicks = 0;
let formStarted = false;
let formStartTime = 0;
let abandonTimer = null;

export function trackWhatsappClickExtended(extra = {}) {
  whatsappClicks += 1;
  if (whatsappClicks === 2) {
    gtmPush('repeat_whatsapp_click', {
      event_category: 'intent',
      event_label: 'whatsapp_repeat',
      click_sequence: whatsappClicks,
      timestamp: Date.now(),
      ...extra
    });
  }
}

export function registerInteraction(eventName) {
  interactionSet.add(eventName);
  if (interactionSet.size === 3) {
    gtmPush('multi_interaction_session', {
      event_category: 'engagement',
      event_label: 'multi_interaction',
      distinct_events: Array.from(interactionSet),
      interaction_count: interactionSet.size,
      timestamp: Date.now()
    });
  }
}

export function initFormTracking(formSelector = 'form') {
  const form = document.querySelector(formSelector);
  if (!form) return;

  const startHandler = (e) => {
    if (!formStarted) {
      formStarted = true;
      formStartTime = Date.now();
      gtmPush('form_start', {
        event_category: 'intent',
        event_label: 'form',
        form_id: form.id || 'generic_form',
        timestamp: Date.now()
      });
      scheduleAbandonCheck(form);
    }
  };

  form.addEventListener('focusin', startHandler);
}

function scheduleAbandonCheck(form) {
  if (abandonTimer) clearTimeout(abandonTimer);
  abandonTimer = setTimeout(() => {
    if (formStarted) {
      const filled = Array.from(form.elements)
        .filter(el => el.name && el.value && el.value.trim() !== '')
        .map(el => el.name);
      if (filled.length >= 2) {
        gtmPush('form_abandon', {
          event_category: 'intent',
          event_label: 'form',
            form_id: form.id || 'generic_form',
          fields_filled: filled,
          abandon_elapsed_ms: Date.now() - formStartTime,
          timestamp: Date.now()
        });
      }
    }
  }, 45000); // 45s
}

export function useSectionView(sectionId, options = { threshold: 0.5 }) {
  if (typeof window === 'undefined') return;
  const el = document.getElementById(sectionId);
  if (!el) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= (options.threshold || 0.5)) {
        gtmPush('section_view', {
          event_category: 'engagement',
          event_label: sectionId,
          section_name: sectionId,
          viewport_height: window.innerHeight,
          scroll_y: window.scrollY,
          timestamp: Date.now()
        });
        observer.unobserve(el);
      }
    });
  }, { threshold: [options.threshold || 0.5] });

  observer.observe(el);
}
