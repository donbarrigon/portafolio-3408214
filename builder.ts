import { rmSync, mkdirSync, cpSync, watch, readdirSync, statSync } from "fs";
import { join } from "path";

const mode = process.argv[2] || "build";
const isWatch = mode === "dev";

console.log("☕ Iniciando build del portafolio de aprendices...");

try {
    rmSync("dist", { recursive: true, force: true });
    console.log("🧹 Carpeta dist eliminada");
} catch { }

mkdirSync("dist/js", { recursive: true });
mkdirSync("dist/css", { recursive: true });

cpSync("src/pages", "dist/pages", { recursive: true });

console.log("📄 HTML copiado a dist");

/* TS BUILD */

function getTSEntrypoints(dir: string): string[] {
    const entries: string[] = [];

    for (const file of readdirSync(dir)) {
        const fullPath = join(dir, file);
        if (statSync(fullPath).isDirectory()) {
            entries.push(...getTSEntrypoints(fullPath));
        } else if (file.endsWith(".ts")) {
            entries.push(fullPath);
        }
    }

    return entries;
}

async function buildTS(): Promise<void> {
    console.log("⚙️ Compilando TypeScript...");

    const entrypoints = getTSEntrypoints("./src/ts");
    console.log(`📦 Entrypoints encontrados: ${entrypoints.length}`);

    await Bun.build({
        entrypoints,
        outdir: "./dist/js",
        root: "./src/ts",
        target: "browser",
        sourcemap: "inline",
        minify: false,
    });

    console.log("✅ TypeScript compilado");
}

/* TAILWIND */

function buildCSS(): void {
    console.log("🎨 Compilando Tailwind...");

    const args = [
        "@tailwindcss/cli",
        "-i",
        "./src/css/main.css",
        "-o",
        "./dist/css/main.css",
    ];

    if (isWatch) args.push("--watch");

    Bun.spawn(["bunx", ...args], {
        stdout: "inherit",
        stderr: "inherit",
    });

    // todos los demas css
    const cssDir = "src/css";
    const outDir = "dist/css";

    for (const file of readdirSync(cssDir)) {
        const fullPath = join(cssDir, file);
        const destPath = join(outDir, file);

        if (file !== "main.css" && statSync(fullPath).isFile() && file.endsWith(".css")) {
            cpSync(fullPath, destPath);
            console.log(`📄 Copiado CSS extra: ${file}`);
        }
    }

    console.log("✅ Tailwind iniciado");
}

/* BUILD */

await buildTS();
buildCSS();

/* WATCH */

if (isWatch) {
    console.log("👀 Modo watch activo");

    watch("src/ts", { recursive: true }, async () => {
        console.log("🔄 Cambio detectado en TS");
        await buildTS();
    });

    watch("src/pages", { recursive: true }, () => {
        cpSync("src/pages", "dist/pages", { recursive: true });
        console.log("📄 Pages actualizadas");
    });

    // Servir la carpeta dist con Bun en puerto 3000
    console.log("🌐 Servidor Bun iniciado en http://localhost:3000");
    // Bun.spawn(["bun", "serve", "dist", "--port", "3000"], { stdout: "inherit", stderr: "inherit" });
    Bun.spawn(["bunx", "serve", "dist"], { stdout: "inherit", stderr: "inherit" });


    // Abrir navegador automáticamente (Linux / Mac / Windows)
    const indexURL = "http://localhost:3000/pages/index.html";
    Bun.spawn(["xdg-open", indexURL], { stdout: "ignore", stderr: "ignore" }); // Linux
    // Bun.spawn(["open", indexPath], { stdout: "ignore", stderr: "ignore" }); // Mac
    // Bun.spawn(["cmd", "/c", "start", indexPath], { stdout: "ignore", stderr: "ignore" }); // Windows
}


console.log("🚀 Build listo");