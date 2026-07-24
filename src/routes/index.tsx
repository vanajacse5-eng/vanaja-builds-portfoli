import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanaja | B.Sc. Computer Science Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Vanaja — B.Sc. Computer Science student. Projects, skills, education, and contact.",
      },
      { property: "og:title", content: "Vanaja | B.Sc. Computer Science Portfolio" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Vanaja — B.Sc. Computer Science student. Projects, skills, education, and contact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The portfolio is a fully standalone static site living in /public/portfolio/.
// This route simply redirects visitors to it so opening the app shows the portfolio.
function Index() {
  useEffect(() => {
    window.location.replace("/portfolio/index.html");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        color: "#6b7280",
      }}
    >
      <p>
        Loading portfolio… If you are not redirected,{" "}
        <a href="/portfolio/index.html" style={{ color: "#6c63ff" }}>
          click here
        </a>
        .
      </p>
    </div>
  );
}
