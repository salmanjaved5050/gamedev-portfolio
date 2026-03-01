export default class ProjectData {
    id: string;
    name: string;
    description: string;
    iconUrl: string; // used as thumbnail
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    accentColor: string; // color of title bar
    videoUrl: string; // YouTube embed URL
    storeUrl: string; // link to the game/app store page
    storeLabel: string; // button text e.g. "Play on Roblox"
    features: string[]; // list of main features
    contributions: string[]; // what I specifically worked on
    screenshots: Screenshot[]; // screenshot images
    screenshotSize: 'phone' | 'pc'; // screenshot display size

    constructor(options: {
        id: string;
        name: string;
        description: string;
        iconUrl: string;
        accentColor?: string;
        isHigh?: boolean;
        isWide?: boolean;
        videoUrl?: string;
        storeUrl?: string;
        storeLabel?: string;
        features?: string[];
        contributions?: string[];
        screenshots?: Screenshot[];
        screenshotSize?: 'phone' | 'pc';
    }) {
        this.id = options.id;
        this.name = options.name;
        this.description = options.description;
        this.iconUrl = options.iconUrl;
        this.isHigh = options.isHigh || false;
        this.isWide = options.isWide || false;
        this.accentColor = options.accentColor || "#000000";
        this.videoUrl = options.videoUrl || "";
        this.storeUrl = options.storeUrl || "";
        this.storeLabel = options.storeLabel || "";
        this.features = options.features || [];
        this.contributions = options.contributions || [];
        this.screenshots = options.screenshots || [];
        this.screenshotSize = options.screenshotSize || 'pc';
    }
}

export interface Screenshot {
    url: string;
    alt: string;
}
