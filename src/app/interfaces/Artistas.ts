export interface Artistas {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  null;
    total: number;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toArtistas(json: string): Artistas {
        return JSON.parse(json);
    }

    public static artistasToJson(value: Artistas): string {
        return JSON.stringify(value);
    }
}
