export interface IVideoElementAttributes {
  autoplay: boolean
  controls: boolean
  crossOrigin: 'anonymous' | 'use-credentials'
  height: number
  loop: boolean
  muted: boolean
  preload: 'none' | 'metadata' | 'auto' | ''
  poster: string
  src: string
  srcObject: object
  width: number
}
