const OUTPUT_FILE = "visitors.csv";

const filename = Deno.args[0];
const content = (await Deno.readTextFile(filename)).trim();

const data = {
    date: new Date().toISOString(),
    value: parseInt(content) / 100.0,
};

await Deno.writeTextFile(OUTPUT_FILE, `${data.date},${data.value}\n`, { append: true });
await Deno.remove(filename);