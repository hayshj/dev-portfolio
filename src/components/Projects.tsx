const projects = [
    {
        title: "Fellowship Church",
        desc: "Website for Fellowship Church. A local church community in Royse City, TX.",
        tech: "React, Express, Node.JS, MongoDB, TailwindCSS",
        link: "https://fellowshiprc.com",
        linkLabel: "[ VISIT_SITE ]"
    },
    {
        title: "Sights On Christ",
        desc: "Website for Sights On Christ, a ministry focused on sharing the gospel and experiencing the outdoors.",
        tech: "React, Express, Node.JS, MongoDB",
        link: "https://sightsonchrist.com",
        linkLabel: "[ VISIT_SITE ]"
    },
    {
        title: "Mirror Merge",
        desc: "Mobile block puzzle game. Merge mirrored blocks to clear the board and earn points",
        tech: "React Native, Express",
        link: "https://apps.apple.com/us/app/mirror-merge/id6758906482",
        linkLabel: "[ DOWNLOAD ]"
    },
];

export default function Projects() {
    return (
        <section className="mb-12">
            <div className="mb-4">+- PROJECTS ---------------------------------------+</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {projects.map((p, i) => (
                    <div key={i} className="flex flex-col text-sm ascii-box">
                        <div>+------------------------------------------+</div>
                        <div className="flex justify-between px-2 py-1">
                            <span>| {p.title.padEnd(38, ' ')} |</span>
                        </div>
                        <div>+------------------------------------------+</div>
                        <div className="px-2 py-2 flex flex-col justify-between h-full min-h-[5rem] border-l border-r border-dashed border-[#555]">
                            <p className="mb-2 text-[#ccc] pr-2 break-words">{p.desc}</p>
                            <div className="mt-auto">
                                <span className="text-[#888]">TECH: {p.tech}</span>
                            </div>
                        </div>
                        <div>+------------------------------------------+</div>
                        <div className="mt-1 flex justify-end">
                            <a
                                href={p.link}
                                className="hover:bg-foreground hover:text-background transition-colors duration-200 px-2 py-1 inline-block border border-dashed border-[#666]"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {p.linkLabel}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
