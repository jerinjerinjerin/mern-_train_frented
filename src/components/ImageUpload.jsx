import { useState } from "react";
import PropTypes from "prop-types";
import { CgClose } from "react-icons/cg";

const ImageUploader = ({
  label = "",
  onImageSelect,
  previewClassName = "w-32 h-32 object-cover rounded-full",
  accept = "image/*",
  uploadButtonClassName = "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700",
}) => {
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);

  console.log(imageFile)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);

      const render = new FileReader();
      render.onload = () => setImagePreview(render.result);
      render.readAsDataURL(file);

      if (onImageSelect) onImageSelect(file);
    }
  };

  const handleClearImage = () => {
    setImagePreview(null);
    setImageFile(null);
    if (onImageSelect) onImageSelect(null);
  };

  return (
    <div className="flex flex-col items-center">
      <label className="block font-medium text-gray-700 mb-2">{label}</label>
      {imagePreview ? (
        <div className="relative">
          <img
            src={imagePreview}
            alt="Selected"
            className={`border border-gray-300 ${previewClassName}`}
          />

          
            <CgClose className="text-red-500 w-5 h-5 cursor-pointer" onClick={handleClearImage}/>
        </div>
      ) : (
        <>
          {/* Custom Styled File Input */}
          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="hidden" // Hide the default file input
            id="file-upload" // This ID will link to the label
          />
          {/* Label linked to the file input via htmlFor */}
          <label htmlFor="file-upload" className={`${uploadButtonClassName} cursor-pointer`}>
              Upload Image
          </label>
        </>
      )}
    </div>
  );
};

ImageUploader.propTypes = {
  label: PropTypes.string,
  onImageSelect: PropTypes.func,
  previewClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  accept: PropTypes.string,
  value: PropTypes.string,
  uploadButtonClassName: PropTypes.string, 
  required: PropTypes.bool, 
};

export default ImageUploader;
