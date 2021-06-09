
export interface Tracks {
    album:         Album;
    artists:       Artist[];
    disc_number:   number;
    duration_ms:   number;
    explicit:      boolean;
    external_ids:  ExternalIDS;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    is_local:      boolean;
    is_playable:   boolean;
    name:          string;
    popularity:    number;
    preview_url:   null | string;
    track_number:  number;
    type:          TrackType;
    uri:           string;
}

export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Artist[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    string;
}

export enum AlbumTypeEnum {
    Album = "album",
    Single = "single",
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            ID;
    name:          Name;
    type:          ArtistType;
    uri:           URI;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ID {
    The07YZf4WDAMNwqr4JfgOZ8Y = "07YZf4WDAMNwqr4jfgOZ8y",
    The26VFTg2Z8YR0CCuwLzESi2 = "26VFTg2z8YR0cCuwLzESi2",
    The3Nrfpe0TUJi4K4DXYWgMUX = "3Nrfpe0tUJi4K4DXYWgMUX",
    The56MfhUDKa1Vec6RSLZV5Eg = "56mfhUDKa1vec6rSLZV5Eg",
}

export enum Name {
    Bts = "BTS",
    Halsey = "Halsey",
    JasonDerulo = "Jason Derulo",
    Jawsh685 = "Jawsh 685",
}

export enum ArtistType {
    Artist = "artist",
}

export enum URI {
    SpotifyArtist07YZf4WDAMNwqr4JfgOZ8Y = "spotify:artist:07YZf4WDAMNwqr4jfgOZ8y",
    SpotifyArtist26VFTg2Z8YR0CCuwLzESi2 = "spotify:artist:26VFTg2z8YR0cCuwLzESi2",
    SpotifyArtist3Nrfpe0TUJi4K4DXYWgMUX = "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
    SpotifyArtist56MfhUDKa1Vec6RSLZV5Eg = "spotify:artist:56mfhUDKa1vec6rSLZV5Eg",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ReleaseDatePrecision {
    Day = "day",
}

export interface ExternalIDS {
    isrc: string;
}

export enum TrackType {
    Track = "track",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toTracks(json: string): Tracks[] {
        return JSON.parse(json);
    }

    public static tracksToJson(value: Tracks[]): string {
        return JSON.stringify(value);
    }
}
