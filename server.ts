import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.get("/api/stats/leetcode/:username", async (req, res) => {
    const { username } = req.params;
    const lcEndpoints = [
      `https://leetcode-api-faisalshohag.vercel.app/${username}`,
      `https://leetcode-stats-api.herokuapp.com/${username}`,
      `https://alfa-leetcode-api.onrender.com/${username}/solved`
    ];

    for (const url of lcEndpoints) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          const solved = data.totalSolved || data.solvedProblem || data.totalSolvedQuestions;
          if (typeof solved === 'number') {
            return res.json({ totalSolved: solved });
          }
        }
      } catch (err) {
        // Silent error
      }
    }
    res.status(500).json({ error: "Failed to fetch stats" });
  });

  app.get("/api/stats/github/:username", async (req, res) => {
    const { username } = req.params;
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        return res.json({ public_repos: data.public_repos });
      }
    } catch (err) {
      // Silent error
    }
    res.status(500).json({ error: "Failed to fetch stats" });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
