export default function Header() {
const asciiLogo = `
 _   _    _    __   __ ____   _____ _   _
| | | |  / \\   \\ \\ / /|  _ \\ | ____| \\ | |
| |_| | / _ \\   \\ V / | | | ||  _| |  \\| |
|  _  |/ ___ \\   | |  | |_| || |___| |\\  |
|_| |_/_/   \\_\\  |_|  |____/ |_____|_| \\_|

 _   _    _    __   __  ____
| | | |  / \\   \\ \\ / // ___|
| |_| | / _ \\   \\ V / \\___ \\
|  _  |/ ___ \\   | |   ___) |
|_| |_/_/   \\_\\  |_|  |____/
`;

    return (
        <header className="mb-8 pt-4">
            <pre className="text-xs sm:text-sm md:text-base leading-tight font-bold whitespace-pre overflow-x-hidden">
                {asciiLogo}
            </pre>
            <div className="mt-2 text-sm max-w-2xl">
                <p>User: hayden_hays</p>
                <p>Role: Software Developer</p>
                <p>Location: Earth (Node 3)</p>
                <div className="mt-2 text-xs">
                    +-------------------------------------------------+
                    | SYSTEM STATUS: ONLINE      UPTIME: 99.9%        |
                    +-------------------------------------------------+
                </div>
            </div>
        </header>
    );
}
