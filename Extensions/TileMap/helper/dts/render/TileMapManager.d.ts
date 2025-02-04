import { EditableTileMap } from '../model/TileMapModel';
import { TileTextureCache } from './TileTextureCache';
import PIXI = GlobalPIXIModule.PIXI;
import { TileMap } from '../types';
/**
 * A holder to share tile maps across the 2 extension objects.
 *
 * Every instance with the same files path in properties will
 * share the same {@link EditableTileMap} and {@link TileTextureCache}.
 *
 * @see {@link TileMapRuntimeManager}
 */
export declare class TileMapManager {
  private _tileMapCache;
  private _textureCacheCaches;
  constructor();
  /**
   * @param instanceHolder Where to set the manager instance.
   * @returns The shared manager.
   */
  static getManager(instanceHolder: Object): TileMapManager;
  /**
   * @param data JSON data.
   * @returns The data enclosed with its detected kind.
   */
  static identify(data: any): TileMap | null;
  /**
   * @param loadTileMap The method that loads the Tiled JSON file in memory.
   * @param tileMapJsonResourceName The resource name of the tile map.
   * @param tileSetJsonResourceName The resource name of the tile set.
   * @param levelIndex The level of the tile map to load from.
   * @param pako The zlib library.
   * @param callback A function called when the tile map is parsed.
   */
  getOrLoadTileMap(
    loadTileMap: (
      tileMapJsonResourceName: string,
      tileSetJsonResourceName: string,
      callback: (tileMap: TileMap | null) => void
    ) => void,
    tileMapJsonResourceName: string,
    tileSetJsonResourceName: string,
    levelIndex: number,
    pako: any,
    callback: (tileMap: EditableTileMap | null) => void
  ): void;
  /**
   * @param loadTileMap The method that loads the Tiled JSON file in memory.
   * @param getTexture The method that loads the atlas image file in memory.
   * @param atlasImageResourceName The resource name of the atlas image.
   * @param tileMapJsonResourceName The resource name of the tile map.
   * @param tileSetJsonResourceName The resource name of the tile set.
   * @param levelIndex The level of the tile map to load from.
   * @param callback A function called when the tiles textures are split.
   */
  getOrLoadTextureCache(
    loadTileMap: (
      tileMapJsonResourceName: string,
      tileSetJsonResourceName: string,
      callback: (tileMap: TileMap | null) => void
    ) => void,
    getTexture: (textureName: string) => PIXI.BaseTexture<PIXI.Resource>,
    atlasImageResourceName: string,
    tileMapJsonResourceName: string,
    tileSetJsonResourceName: string,
    levelIndex: number,
    callback: (textureCache: TileTextureCache | null) => void
  ): void;
}
//# sourceMappingURL=TileMapManager.d.ts.map
