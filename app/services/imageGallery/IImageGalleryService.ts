import { User } from 'domain/users'
import { Image } from 'domain/imageGallery'

/**
 * Image gallery service interface
 *
 * @export
 * @interface IImageGalleryService
 */
export interface IImageGalleryService {
  getImageGallery: (userId: string) => Promise<Image[]>
  saveImage: (userId: string, image: Image) => Promise<string>
  deleteImage: (userId: string, imageId: string) => Promise<void>
  uploadImage: (file: any, fileName: string, progressCallback: Function) => Promise<void>
  downloadImage: (fileName: string) => Promise<string>
}
