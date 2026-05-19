const fs = require("fs");
const net = require("net");
const path = require("path");
const { spawn } = require("child_process");

const projectRoot = path.resolve(__dirname, "..");
const nextDir = path.join(projectRoot, ".next");
const port = 3000;

function isPortFree(targetPort) {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close(() => resolve(true));
    });

    server.listen(targetPort, "127.0.0.1");
  });
}

async function start() {
  const portIsFree = await isPortFree(port);

  if (!portIsFree) {
    console.error(`Port ${port} is already in use. Stop the old dev server and run npm run dev again.`);
    process.exit(1);
  }

  fs.rmSync(nextDir, { recursive: true, force: true });

  const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");
  const child = spawn(process.execPath, [nextBin, "dev", "-p", String(port)], {
    cwd: projectRoot,
    stdio: "inherit",
    shell: false,
  });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 0);
  });
}

start();
