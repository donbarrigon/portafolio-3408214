import { rmSync, mkdirSync, cpSync, watch } from "fs";

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
cpSync("src/components", "dist/components", { recursive: true });

console.log("📄 HTML copiado a dist");

/* TS BUILD */

async function buildTS(): Promise<void> {
    console.log("⚙️ Compilando TypeScript...");

    await Bun.build({
        entrypoints: ["./src/ts/main.ts"],
        outdir: "./dist/js",
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

    console.log("✅ Tailwind iniciado");
}

await buildTS();
buildCSS();

/* WATCH */

if (isWatch) {
    console.log("👀 Modo watch activo");

    watch("src/ts", async () => {
        console.log("🔄 Cambio detectado en TS");
        await buildTS();
    });

    watch("src/pages", () => {
        cpSync("src/pages", "dist/pages", { recursive: true });
        console.log("📄 Pages actualizadas");
    });

    watch("src/components", () => {
        cpSync("src/components", "dist/components", { recursive: true });
        console.log("🧩 Components actualizados");
    });
}

console.log("🚀 Build listo");