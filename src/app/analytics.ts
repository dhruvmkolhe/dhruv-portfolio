/**
 * Analytics Module for Dhruv Kolhe Portfolio
 * Supports Google Analytics 4 (GA4) with safe fallback to in-memory logging
 * and custom DOM event dispatch for verification and testing.
 */

export interface AnalyticsEventRecord {
  eventName: string;
  params?: Record<string, unknown>;
  timestamp: string;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __ANALYTICS_EVENTS__?: AnalyticsEventRecord[];
    GA_MEASUREMENT_ID?: string;
  }
}

// In-memory events queue for verification and debugging
const eventsBuffer: AnalyticsEventRecord[] = [];

/**
 * Initialize analytics system.
 * Configures gtag fallback, window.__ANALYTICS_EVENTS__, and listens for environment settings.
 */
export function initAnalytics(measurementId?: string): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }

  window.__ANALYTICS_EVENTS__ = eventsBuffer;

  const gaId =
    measurementId ||
    window.GA_MEASUREMENT_ID ||
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_GA_ID) ||
    "G-EVALDHPORT"; // Default measurement ID placeholder

  window.GA_MEASUREMENT_ID = gaId;

  // Initialize gtag config if script is available
  if (typeof window.gtag === "function") {
    window.gtag("js", new Date());
    window.gtag("config", gaId, {
      send_page_view: false, // We explicitly handle page_views
    });
  }
}

/**
 * Send an event to Google Analytics (gtag) and buffer it in memory.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  const eventRecord: AnalyticsEventRecord = {
    eventName,
    params: {
      ...params,
      timestamp_epoch: Date.now(),
    },
    timestamp: new Date().toISOString(),
  };

  eventsBuffer.push(eventRecord);
  if (typeof window !== "undefined") {
    window.__ANALYTICS_EVENTS__ = eventsBuffer;

    // Send to Google Analytics gtag if present
    if (typeof window.gtag === "function") {
      try {
        window.gtag("event", eventName, eventRecord.params);
      } catch (err) {
        console.debug("Analytics gtag forward error:", err);
      }
    }

    // Dispatch DOM event for testing / monitoring hooks
    try {
      window.dispatchEvent(
        new CustomEvent("portfolio_analytics", { detail: eventRecord })
      );
    } catch {
      // Ignore in non-browser environments
    }

    // Friendly debug trace in development
    if (typeof import.meta !== "undefined" && import.meta.env?.DEV) {
      console.debug(`[Analytics] 📊 ${eventName}`, eventRecord.params);
    }
  }
}

/**
 * Track a page or section view
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle || (typeof document !== "undefined" ? document.title : ""),
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
}

/**
 * Track a 404 (Not Found) page encounter
 */
export function track404(attemptedPath: string): void {
  trackEvent("not_found_404", {
    page_path: attemptedPath,
    page_title: "404: Page Not Found",
    error_code: 404,
    referrer: typeof document !== "undefined" ? document.referrer || "direct" : "direct",
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
}

/**
 * Track key CTA (Call To Action) button or link clicks
 */
export function trackCtaClick(
  ctaName: string,
  additionalParams?: Record<string, unknown>
): void {
  trackEvent("cta_click", {
    cta_name: ctaName,
    ...additionalParams,
  });
}

/**
 * Retrieve all buffered analytics events
 */
export function getAnalyticsEvents(): AnalyticsEventRecord[] {
  return [...eventsBuffer];
}
