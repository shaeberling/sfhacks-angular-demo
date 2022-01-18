/**
 * The following interfaces match the USGS REST definition so we can parse it.
 */
export interface Quake {
  mag: number;
  place: string;
  time: number;
  url: string;
}
export interface UsgsResponseFeature {
  properties: Quake;
}
export interface UsgsResponse {
  features: UsgsResponseFeature[];
}

