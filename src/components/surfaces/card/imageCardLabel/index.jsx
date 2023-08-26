import React from "react";

const ImageCardLabel = ({ cardImage, categoryLabel, details, keys }) => {
  return (
    <div className="text-white lg:max-w-[27rem]" key={keys}>
      <figure className="" data-testid="image">
        <img
          src={cardImage}
          alt=""
          className="max-w-full lg:max-w-[20rem] lg:max-h-[15rem] xl:max-w-[25rem] xl:max-h-[15rem] "
        />
      </figure>
      <h4
        data-testid="category"
        className="pt-2 text-2xl font-medium text-gray-500 uppercase lg:text-lg"
      >
        {categoryLabel}
      </h4>
      <p className="text-lg" data-testid="details">
        {details}
      </p>
    </div>
  );
};

export default ImageCardLabel;
