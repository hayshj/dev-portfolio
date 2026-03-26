const skills = [
    { name: "TypeScript", level: 9 },
    { name: "React", level: 9 },
    { name: "Tailwind UI", level: 8 },
    { name: "Node.js", level: 7 },
    { name: "Framer Motion", level: 8 },
    { name: "Terminal Emulation", level: 6 },
];

export default function Skills() {
    return (
        <section className="mb-12">
            <div className="mb-4">+- SYSTEM STATUS: SKILL MODULES -------------------+</div>
            <div className="flex flex-col gap-2 max-w-2xl">
                {skills.map((s, i) => {
                    const filled = Math.floor((s.level / 10) * 20);
                    const empty = 20 - filled;
                    const bar = `[${'#'.repeat(filled)}${'-'.repeat(empty)}]`;

                    return (
                        <div key={i} className="flex justify-between items-center whitespace-pre max-w-full overflow-hidden">
                            <span className="w-40 shrink-0 truncate">{s.name}</span>
                            <span className="flex-1 text-[#aaa]">{bar}</span>
                            <span className="w-12 text-right shrink-0">{s.level}0%</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
