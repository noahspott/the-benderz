import papa from "papaparse";
import fs from "fs";
import path from "path";

const CSV_PATH = path.join(process.cwd(), "src/data/masterList.csv");

type CsvRow = {
  song: string;
  artist: string;
  genre: string;
} & Record<string, unknown>;

type Song = Pick<CsvRow, "song" | "artist" | "genre">;

export function getSongs(): Song[] {
  const json = getJsonFromCsv(CSV_PATH);
  const songs = reduceJsonToSong(json as CsvRow[]);

  return songs;
}

/**
 * Get an array of JSON objects representing the CSV file.
 * @param csvFilePath
 * @returns
 */
function getJsonFromCsv(csvFilePath: string) {
  const csvText = fs.readFileSync(csvFilePath, "utf8");
  const { data } = papa.parse(csvText, { header: true, skipEmptyLines: true });
  return data;
}

/**
 * The list might have unwanted attributes. Take only song, artist, and genre
 * to reduce to Song type.
 * @param json
 * @returns
 */
function reduceJsonToSong(json: CsvRow[]): Song[] {
  return json.map(({ SONG, ARTIST, GENRE }) => ({
    song: SONG,
    artist: ARTIST,
    genre: GENRE,
  })) as Song[];
}

export function sortByGenre(songs: Song[]) {
  return [...songs].sort((songA, songB) => {
    const genreA = songA.genre.toUpperCase();
    const genreB = songB.genre.toUpperCase();

    if (genreA < genreB) {
      return -1;
    }

    if (genreA > genreB) {
      return 1;
    }

    return 0;
  });
}
