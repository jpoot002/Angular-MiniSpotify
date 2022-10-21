/**************************************************/
//albums/{id}
export interface AlbumsId {
    album_type: string;
    artists: ArtistAlbumsId[];
    copyrights: CopyrightAlbumsId[];
    external_ids: ExternalIdsAlbumsId[];
    external_urls: ExternalUrlsAlbumsId;
    genres: any[];
    href: string;
    id: string;
    images: ImageAlbumsId[];
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    tracks: TracksAlbumsId;
    type: string;
    uri: string;
}


export interface ExternalUrlsAlbumsId {
    spotify: string;
}

export interface ArtistAlbumsId {
    external_urls: ExternalUrlsAlbumsId[];
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface CopyrightAlbumsId {
    text: string;
    type: string;
}

export interface ExternalIdsAlbumsId {
    upc: string;
}

export interface ExternalUrlsAlbumsId {
    spotify: string;
}

export interface ImageAlbumsId {
    height: number;
    url: string;
    width: number;
}

export interface TracksAlbumsId {
    href: string;
    //items: ItemAlbumsId[];
    items: Item[];
    limit: number;
    next?: any;
    offset: number;
    previous?: any;
    total: number;
}
///////////////////////////////
export interface Item {
    artists: Artist2[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface Artist2 {
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalUrls3 {
    spotify: string;
}
export interface ExternalUrls4 {
    spotify: string;
}
////////////////////////////////






export interface ExternalUrls4AlbumsId {
    spotify: string;
}

export interface ItemAlbumsId {
    artists: Artist2AlbumsId[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls4AlbumsId;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface Artist2AlbumsId {
    external_urls: ExternalUrls3AlbumsId[];
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalUrls3AlbumsId {
    spotify: string;
}


/**************************************************/
//albums/{id}/tracks
export interface AlbumsIdTracks {
    href: string;
    items: ItemAlbumsIdTracks[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface ItemAlbumsIdTracks {
    artists: ArtistAlbumsIdTracks[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls2AlbumsIdTracks[];
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface ArtistAlbumsIdTracks {
    external_urls: ExternalUrlsAlbumsIdTracks[];
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalUrls2AlbumsIdTracks {
    spotify: string;
}

export interface ExternalUrlsAlbumsIdTracks {
    spotify: string;
}


