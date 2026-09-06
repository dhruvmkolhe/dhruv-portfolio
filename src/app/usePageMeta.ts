import { useEffect } from "react";
import { trackPageView, track404 } from "./analytics";

export interface PageMeta {
  title: string;
  description: string;
}

export const PAGE_METAS: Record<string, PageMeta> = {
  home: {
    title: "Dhruv Kolhe — Software Engineer & Developer Portfolio",
    description:
      "Explore the portfolio of Dhruv Kolhe, a Computer Science student and software engineer specializing in modern web development, intuitive UX, and clean code.",
  },
  about: {
    title: "About | Dhruv Kolhe",
    description:
      "Learn more about Dhruv Kolhe, a Computer Science student at Pimpri Chinchwad University with hands-on experience in full-stack engineering, React, and Python.",
  },
  skills: {
    title: "Skills & Toolbox | Dhruv Kolhe",
    description:
      "Discover Dhruv Kolhe's technical skills and tools, including React, TypeScript, Python, C++, Node.js, PostgreSQL, Docker, and Linux for full-stack engineering.",
  },
  projects: {
    title: "Projects & Works | Dhruv Kolhe",
    description:
      "Browse featured software projects by Dhruv Kolhe, including the ProjectHub developer platform, CodeX collaborative IDE, and LinkForge scalable URL engine.",
  },
  contact: {
    title: "Contact & Say Hello | Dhruv Kolhe",
    description:
      "Get in touch with Dhruv Kolhe for software engineering internships, open-source collaborations, or freelance projects. Open to new ideas and opportunities.",
  },
  resume: {
    title: "Resume | Dhruv Kolhe",
    description:
      "View and download the verified resume of Dhruv Kolhe, highlighting education at PCU, engineering internship experience, technical skillsets, and projects.",
  },
  "cover-letter": {
    title: "Cover Letter | Dhruv Kolhe",
    description:
      "Read the professional cover letter by Dhruv Kolhe, detailing software engineering passion, academic background, technical competencies, and career objectives.",
  },
  "404": {
    title: "404: Page Not Found | Dhruv Kolhe",
    description:
      "The requested page could not be found. Return to Dhruv Kolhe's developer portfolio to explore featured software projects, technical skills, and contact info.",
  },
};

export function updateMetaTag(key: string, content: string, isProperty = false) {
  const selector = isProperty ? `meta[property="${key}"]` : `meta[name="${key}"]`;
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    if (isProperty) {
      element.setAttribute("property", key);
    } else {
      element.setAttribute("name", key);
    }
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

let lastTrackedPath = "";

export function setPageMeta(pageKey: string) {
  const meta = PAGE_METAS[pageKey] || PAGE_METAS.home;
  document.title = meta.title;
  updateMetaTag("description", meta.description, false);
  updateMetaTag("og:title", meta.title, true);
  updateMetaTag("og:description", meta.description, true);
  updateMetaTag("twitter:title", meta.title, false);
  updateMetaTag("twitter:description", meta.description, false);

  const altText = `${meta.title} — Dhruv Kolhe Portfolio`;
  updateMetaTag("og:image:alt", altText, true);
  updateMetaTag("twitter:image:alt", altText, false);

  const currentPath =
    pageKey === "404"
      ? (typeof window !== "undefined" ? window.location.pathname + window.location.hash : "/404")
      : pageKey === "home"
      ? "/"
      : `/#${pageKey}`;

  if (currentPath !== lastTrackedPath) {
    lastTrackedPath = currentPath;
    if (pageKey === "404") {
      track404(currentPath);
    } else {
      trackPageView(currentPath, meta.title);
    }
  }
}

/**
 * Hook that dynamically updates page title, meta description, and analytics
 * based on active modal state, 404 state, current URL hash, and scroll position.
 */
export function usePageMeta(
  activeModal: "resume" | "cover-letter" | null,
  is404 = false
) {
  useEffect(() => {
    // If 404 is active
    if (is404) {
      setPageMeta("404");
      return;
    }

    // If a modal is open, set meta for that specific document view
    if (activeModal) {
      setPageMeta(activeModal);
      return;
    }

    // Otherwise, observe sections in viewport
    const sectionIds = ["home", "about", "skills", "projects", "contact"];

    // Check current hash on mount
    const currentHash = window.location.hash.replace("#", "");
    if (sectionIds.includes(currentHash)) {
      setPageMeta(currentHash);
    } else {
      setPageMeta("home");
    }

    // Listen to hash changes (e.g. clicking nav links)
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (sectionIds.includes(hash)) {
        setPageMeta(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);

    // Use IntersectionObserver to update meta as user scrolls through sections
    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section with highest intersection ratio
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (PAGE_METAS[id]) {
            setPageMeta(id);
          }
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.2, 0.5, 0.8],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, [activeModal, is404]);
}
