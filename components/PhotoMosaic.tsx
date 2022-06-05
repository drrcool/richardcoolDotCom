import { PhotoItem } from "../lib/types";
import { getPhotoUrl } from "../lib/getPhotoUrl";

// Create the className for a generic photo
function getPhotoClass(photo: PhotoItem): string {
  return `border-solid border-2 border-gray-800 bg-center bg-cover overflow-hidden h-full w-ull ${getSizePartOfClass(
    photo.isWide,
    photo.isTall
  )}`;
}
function getSizePartOfClass(isWide: boolean, isTall: boolean): string {
  const widePart = isWide ? "col-wide" : "";
  const tallPart = isTall ? "row-tall" : "";
  return `${widePart} ${tallPart}`;
}

const PhotoMosaic = ({ imageData }: { imageData: PhotoItem[] }) => {
  const photoGrid = imageData.map((photo): JSX.Element => {
    console.log(getPhotoUrl(photo));
    return (
      <div
        className={getPhotoClass(photo)}
        key={`${photo.file}-div`}
        style={{ backgroundImage: getPhotoUrl(photo) }}
      />
    );
  });

  return (
    // Holds the mosaic
    <div className="bg-black grid gap-1 grid-cols-3">{photoGrid}</div>
  );
};

export default PhotoMosaic;

const test = "public/image/portraitMosaic/test.jpeg";
console.log(test.substring(6, test.length));
